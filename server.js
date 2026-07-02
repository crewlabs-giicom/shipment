import express from 'express';
import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync, renameSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createHmac, randomBytes } from 'crypto';
import { networkInterfaces } from 'os';

// Ensure fetch is available (Node 18+ has global fetch). If not, load node-fetch.
if (typeof fetch === 'undefined') {
  try {
    const { default: fetchPoly } = await import('node-fetch');
    globalThis.fetch = fetchPoly;
    console.log('Using node-fetch polyfill for fetch()');
  } catch (e) {
    console.warn('Fetch API not available and node-fetch could not be loaded. Some features may fail.');
  }
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR      = join(__dirname, 'data');
const SHIPS_FILE    = join(DATA_DIR, 'shipments.json');
const USERS_FILE    = join(DATA_DIR, 'users.json');
const LOGS_FILE     = join(DATA_DIR, 'auditlog.json');
const COMMENTS_FILE = join(DATA_DIR, 'comments.json');
const CONFIG_FILE   = join(DATA_DIR, 'config.json');
const CHANGELOG_FILE = join(DATA_DIR, 'changelog.json');
const SECRET        = 'shipment-monitor-secret-2026';

// ─── Init ────────────────────────────────────────────────────────────────────
if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
if (!existsSync(SHIPS_FILE))    writeFileSync(SHIPS_FILE,    '[]', 'utf-8');
if (!existsSync(LOGS_FILE))     writeFileSync(LOGS_FILE,     '[]', 'utf-8');
if (!existsSync(COMMENTS_FILE)) writeFileSync(COMMENTS_FILE, '{}', 'utf-8');
const DEFAULT_CONFIG = {
  sheetsWebhookSecret: randomBytes(24).toString('hex'),
  sheetsLastSync: null,
  sheetsSyncCount: 0,
  sheetsLastResult: null,
  sheetsAutoSync: true,
  sheetsAutoSyncInterval: 15,
  sheetsPushQueue: []
};
if (!existsSync(CHANGELOG_FILE)) writeFileSync(CHANGELOG_FILE, '[]', 'utf-8');
if (!existsSync(CONFIG_FILE))   writeFileSync(CONFIG_FILE,   JSON.stringify(DEFAULT_CONFIG, null, 2), 'utf-8');

if (!existsSync(USERS_FILE)) {
  writeFileSync(USERS_FILE, JSON.stringify([
    { username:'admin',  password:hashPwd('admin123'),  role:'admin',  name:'Administrator' },
    { username:'viewer', password:hashPwd('viewer123'), role:'viewer', name:'Viewer' }
  ], null, 2), 'utf-8');
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function hashPwd(p) { return createHmac('sha256', SECRET).update(p).digest('hex'); }
function readJ(f)   { try { return JSON.parse(readFileSync(f,'utf-8')); } catch { return f.includes('comment')?{}:[]; } }

// Atomic write: tulis ke file temp dulu, baru rename — supaya data tidak korup kalau gagal di tengah.
// writeFileSync & renameSync bersifat blocking/synchronous, jadi penulisan antar-request sudah ter-serialisasi
// oleh event loop Node (tidak ada penulisan benar-benar bersamaan ke file yang sama).
function writeJ(f,d){
  const str = JSON.stringify(d,null,2);
  const tmp = f + '.tmp';
  try {
    writeFileSync(tmp, str, 'utf-8');
    renameSync(tmp, f); // rename atomic di filesystem yang sama
  } catch(e){
    console.error('writeJ gagal (atomic):', f, e.message);
    try { writeFileSync(f, str, 'utf-8'); } // fallback non-atomic
    catch(e2){ console.error('writeJ fallback juga gagal:', f, e2.message); }
  }
}
function readConfig(){ try { return JSON.parse(readFileSync(CONFIG_FILE,'utf-8')); } catch { return {}; } }
function writeConfig(d){
  const str = JSON.stringify(d,null,2);
  const tmp = CONFIG_FILE + '.tmp';
  try { writeFileSync(tmp, str, 'utf-8'); renameSync(tmp, CONFIG_FILE); }
  catch(e){ console.error('writeConfig gagal:', e.message); try{ writeFileSync(CONFIG_FILE, str, 'utf-8'); }catch(e2){ console.error('writeConfig fallback gagal:', e2.message); } }
}

// ── Changelog: track perubahan field ──
const TRACK_FIELDS = ['po','item','qty','value','container','supplier','forwarder','status',
  'stuffing','etd','eta','tgl_production','deliveredDate','gudang','tags','notes'];

function logChange(shipId, po, item, changes, source, user) {
  if (!changes || changes.length === 0) return;
  try {
    const log = JSON.parse(readFileSync(CHANGELOG_FILE, 'utf-8') || '[]');
    log.unshift({
      time: new Date().toISOString(),
      shipId, po: po || '', item: item || '',
      source, // 'sync' | 'edit' | 'auto_status' | 'new' | 'delete'
      user: user || 'system',
      changes, // [{field, from, to}]
    });
    // Keep max 5000 entries
    if (log.length > 5000) log.length = 5000;
    writeFileSync(CHANGELOG_FILE, JSON.stringify(log, null, 2), 'utf-8');
  } catch (e) { console.error('Changelog write error:', e.message); }
}

function diffShipment(oldS, newS) {
  const changes = [];
  TRACK_FIELDS.forEach(f => {
    const oldVal = f === 'tags' ? (oldS[f]||[]).join(', ') : String(oldS[f] || '');
    const newVal = f === 'tags' ? (newS[f]||[]).join(', ') : String(newS[f] || '');
    if (oldVal !== newVal) {
      changes.push({ field: f, from: oldVal, to: newVal });
    }
  });
  return changes;
}

function getConfig(){
  const cfg = readConfig();
  return {
    ...DEFAULT_CONFIG,
    ...cfg,
    sheetsPushQueue: Array.isArray(cfg.sheetsPushQueue) ? cfg.sheetsPushQueue : [],
    sheetsAutoSync: cfg.sheetsAutoSync !== false,
    sheetsAutoSyncInterval: typeof cfg.sheetsAutoSyncInterval === 'number' ? cfg.sheetsAutoSyncInterval : DEFAULT_CONFIG.sheetsAutoSyncInterval
  };
}
function persistConfig(cfg){
  writeConfig({
    ...DEFAULT_CONFIG,
    ...cfg,
    sheetsPushQueue: Array.isArray(cfg.sheetsPushQueue) ? cfg.sheetsPushQueue : []
  });
}

async function sendAllShipmentsToSheets(){
  const cfg = getConfig();
  const url = cfg.sheetsPushUrl;
  if (!url) throw new Error('URL tujuan belum diisi');
  const ships = readJ(SHIPS_FILE);
  const payload = JSON.stringify({ action:'receive', shipments: ships });
  let resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: payload,
    redirect: 'manual',
  });
  if ([301,302,303,307,308].includes(resp.status)) {
    const redirectUrl = resp.headers.get('location');
    if (redirectUrl) {
      // Apps Script membalas 302 ke script.googleusercontent.com yang HANYA menerima GET.
      // Payload sudah diproses doPost saat POST awal; redirect cukup di-GET untuk ambil hasilnya.
      // (Re-POST ke URL redirect inilah yang menyebabkan error HTTP 405.)
      resp = await fetch(redirectUrl, {
        method: 'GET',
        redirect: 'follow',
      });
    }
  }
  const text = await resp.text();
  let body;
  try { body = JSON.parse(text); } catch { body = { raw: text.substring(0, 200) }; }
  if (!resp.ok || body?.success === false) {
    throw new Error(body.error || `HTTP ${resp.status}`);
  }
  return { added: body.added != null ? body.added : 0, updated: body.updated != null ? body.updated : 0, count: ships.length, response: body };
}
function queuePush(errorMessage){
  const cfg = getConfig();
  const note = String(errorMessage || 'Unknown error').substring(0, 300);
  const existing = cfg.sheetsPushQueue.find(item => item.type==='SYNC_PUSH');
  if (existing) {
    existing.attempts = (existing.attempts || 0) + 1;
    existing.lastError = note;
    existing.lastAttempt = new Date().toISOString();
  } else {
    cfg.sheetsPushQueue.push({
      id: Date.now(),
      type: 'SYNC_PUSH',
      queuedAt: new Date().toISOString(),
      attempts: 1,
      lastError: note
    });
  }
  persistConfig(cfg);
  addLog({ username:'system', name:'Sheets Push Queue' }, 'SHEETS_PUSH_QUEUE', `Enqueue push ulang karena error: ${note}`);
}
async function flushPushQueue(){
  const cfg = getConfig();
  const url = cfg.sheetsPushUrl;
  if (!url) return [];
  if (!Array.isArray(cfg.sheetsPushQueue) || !cfg.sheetsPushQueue.length) return [];
  const results = [];
  for (const item of [...cfg.sheetsPushQueue]) {
    try {
      const res = await sendAllShipmentsToSheets();
      cfg.sheetsPushQueue = cfg.sheetsPushQueue.filter(x => x.id !== item.id);
      cfg.sheetsLastSync = new Date().toISOString();
      cfg.sheetsSyncCount = (cfg.sheetsSyncCount||0) + 1;
      cfg.sheetsLastResult = { added: res.added, updated: res.updated, total: res.count };
      persistConfig(cfg);
      addLog({ username:'system', name:'Sheets Push Queue' }, 'SHEETS_PUSH_RESUBMIT', `Retry push sukses: ${res.count} shipment`);
      results.push({ id: item.id, success: true, added: res.added, updated: res.updated, count: res.count });
    } catch(err) {
      const note = String(err.message || 'Unknown');
      const updated = { ...item, attempts: (item.attempts || 0) + 1, lastError: note, lastAttempt: new Date().toISOString() };
      cfg.sheetsPushQueue = cfg.sheetsPushQueue.map(x => x.id === item.id ? updated : x);
      persistConfig(cfg);
      addLog({ username:'system', name:'Sheets Push Queue' }, 'SHEETS_PUSH_RESUBMIT_FAIL', `Retry push gagal: ${note}`);
      results.push({ id: item.id, success: false, error: note });
    }
  }
  return results;
}
async function runAutoSync(){
  const cfg = getConfig();
  if (cfg.sheetsWebAppUrl) {
    try {
      await autoPullSheets();
    } catch(err) {
      console.error('[AUTO SYNC PULL]', err.message);
      addLog({ username:'system', name:'Auto Sync' }, 'AUTO_SYNC_PULL_FAIL', err.message);
    }
  }
  const queueResults = await flushPushQueue();
  if ((!queueResults.length || queueResults.every(r => !r.success)) && cfg.sheetsPushUrl) {
    try {
      const res = await sendAllShipmentsToSheets();
      cfg.sheetsLastSync = new Date().toISOString();
      cfg.sheetsSyncCount = (cfg.sheetsSyncCount||0) + 1;
      cfg.sheetsLastResult = { added: res.added, updated: res.updated, total: res.count };
      persistConfig(cfg);
      addLog({ username:'system', name:'Auto Sync' }, 'AUTO_SYNC_PUSH', `Auto push sukses: ${res.count} shipment`);
    } catch(err) {
      queuePush(err.message || err);
      console.error('[AUTO SYNC PUSH]', err.message);
      addLog({ username:'system', name:'Auto Sync' }, 'AUTO_SYNC_PUSH_FAIL', err.message);
    }
  }
}
async function startAutoSync(){
  const cfg = getConfig();
  if (!cfg.sheetsAutoSync) return;
  const interval = Math.max(5, cfg.sheetsAutoSyncInterval || 15) * 60000;
  console.log(`  ⏱ Auto sync aktif setiap ${interval/60000} menit`);
  try { await runAutoSync(); } catch(err){ console.error('[AUTO SYNC START]', err.message); }
  setInterval(() => { runAutoSync().catch(err => console.error('[AUTO SYNC]', err.message)); }, interval);
}

// ─── Sessions ────────────────────────────────────────────────────────────────
const sessions = {};
function mkSession(u) {
  const tok = randomBytes(32).toString('hex');
  sessions[tok] = { username:u.username, role:u.role, name:u.name, expires:Date.now()+8*3600*1000 };
  return tok;
}
function getSess(req) {
  const tok = (req.headers.authorization||'').replace('Bearer ','').trim();
  const s = sessions[tok];
  if (!s||Date.now()>s.expires) { delete sessions[tok]; return null; }
  return s;
}
function auth(req,res,next)  { const s=getSess(req); if(!s) return res.status(401).json({error:'Login diperlukan'}); req.sess=s; next(); }
function admin(req,res,next) { const s=getSess(req); if(!s) return res.status(401).json({error:'Login diperlukan'}); if(s.role!=='admin') return res.status(403).json({error:'Admin only'}); req.sess=s; next(); }

function addLog(sess, action, detail) {
  const logs = readJ(LOGS_FILE);
  logs.unshift({ id:Date.now(), user:sess?.username||'system', name:sess?.name||'System', action, detail, time:new Date().toISOString() });
  if (logs.length>500) logs.splice(500);
  writeJ(LOGS_FILE, logs);
}

// ─── Normalisasi data dari Sheets ────────────────────────────────────────────
function parseDate(s) {
  if (!s) return '';
  s = String(s).trim();
  // Serial Excel
  const n = parseInt(s);
  if (!isNaN(n) && n > 40000 && n < 60000) {
    const d = new Date((n - 25569) * 86400 * 1000);
    return d.toISOString().split('T')[0];
  }
  // DD/MM/YYYY atau DD-MM-YYYY
  let m = s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})$/);
  if (m) {
    const y = m[3].length===2 ? '20'+m[3] : m[3];
    return `${y}-${m[2].padStart(2,'0')}-${m[1].padStart(2,'0')}`;
  }
  // YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
  return '';
}

function normalizeRow(row, colMap) {
  const get = (key) => {
    const idx = colMap[key];
    return idx !== undefined ? String(row[idx]||'').trim() : '';
  };
  const po = get('po'), eta = get('eta'), etd = get('etd'), container = get('container');
  const etaParsed = parseDate(eta), etdParsed = parseDate(etd);
  const stuffingParsed = parseDate(get('stuffing'));
  return {
    po, supplier: get('supplier'), item: get('item'),
    qty: get('qty'), value: parseFloat(get('value').replace(/[^0-9.]/g,''))||'',
    container, stuffing: stuffingParsed, etd: etdParsed, eta: etaParsed,
    status: get('status')||'Stuffing',
    forwarder: get('forwarder'), notes: get('notes'),
    tags: get('tags') ? get('tags').split(/[,;|]+/).map(t=>t.trim().toUpperCase()).filter(Boolean) : [],
    docs: { invoice:false, pl:false, do:false, pib:false, ls:false }
  };
}

// ─── Auto backup ─────────────────────────────────────────────────────────────
function autoBackup() {
  const today = new Date().toISOString().split('T')[0];
  const bkDir = join(DATA_DIR,'backups');
  if (!existsSync(bkDir)) mkdirSync(bkDir);
  // Backup semua file data penting: shipments, config (master data), users, comments
  const targets = [
    { src: SHIPS_FILE,    name: 'shipments' },
    { src: CONFIG_FILE,   name: 'config' },
    { src: USERS_FILE,    name: 'users' },
    { src: COMMENTS_FILE, name: 'comments' },
  ];
  targets.forEach(({src, name}) => {
    const bkFile = join(bkDir, `${name}_${today}.json`);
    if (!existsSync(bkFile) && existsSync(src)) {
      try { copyFileSync(src, bkFile); console.log(`  📦 Backup: ${name}_${today}.json`); }
      catch(e){ console.error(`  Backup ${name} gagal:`, e.message); }
    }
  });
}

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(express.json({ limit:'10mb' }));
app.use(express.static(join(__dirname,'public')));

// ═══════════════════════════════════════════════════════════════════════
// SHEETS WEBHOOK — endpoint yang dipanggil oleh Apps Script
// ═══════════════════════════════════════════════════════════════════════

// POST /api/sheets/save-push-url — simpan URL tujuan push
app.post('/api/sheets/save-push-url', admin, (req,res) => {
  const { url } = req.body||{};
  const cfg = readConfig();
  cfg.sheetsPushUrl = (url||'').trim();
  writeConfig(cfg);
  res.json({ success:true });
});

// GET /api/sheets/status — tambah pushUrl
app.get('/api/sheets/status', auth, (req,res) => {
  const cfg = getConfig();
  res.json({
    webAppUrl:      cfg.sheetsWebAppUrl || '',
    pushUrl:        cfg.sheetsPushUrl   || '',
    lastSync:       cfg.sheetsLastSync,
    syncCount:      cfg.sheetsSyncCount||0,
    lastResult:     cfg.sheetsLastResult||null,
    autoSync:       cfg.sheetsAutoSync,
    autoSyncInterval: cfg.sheetsAutoSyncInterval,
    pushQueueCount: (cfg.sheetsPushQueue||[]).length,
    pushQueue:      (cfg.sheetsPushQueue||[]).map(q=>({id:q.id,queuedAt:q.queuedAt,attempts:q.attempts,lastError:q.lastError,lastAttempt:q.lastAttempt}))
  });
});

// POST /api/sheets/push — kirim data ke Shipment Monitor Sheets
app.post('/api/sheets/push', admin, async (req,res) => {
  const cfg = getConfig();
  if (!cfg.sheetsPushUrl) return res.json({ success:true, skipped:true, count:0, message:'URL tujuan belum diisi' });
  try {
    const result = await sendAllShipmentsToSheets();
    const cfg2 = getConfig();
    cfg2.sheetsLastSync   = new Date().toISOString();
    cfg2.sheetsSyncCount  = (cfg2.sheetsSyncCount||0) + 1;
    cfg2.sheetsLastResult = { added: result.added, updated: result.updated, total: result.count };
    persistConfig(cfg2);
    addLog({ username:'system', name:'Sheets Push' }, 'SHEETS_PUSH', `Push ${result.count} shipment ke Sheets: ${result.added} added, ${result.updated} updated`);
    res.json({ success:true, count: result.count, response: result.response });
  } catch(err) {
    queuePush(err.message || err);
    console.error('[PUSH ERROR]', err.message);
    res.status(500).json({ error: err.message, queued:true, message:'Push gagal, akan dicoba ulang otomatis.' });
  }
});

// POST /api/sheets/save-url — simpan Web App URL
app.post('/api/sheets/save-url', admin, (req,res) => {
  const { url } = req.body||{};
  if (!url) return res.status(400).json({ error: 'URL diperlukan' });
  const cfg = readConfig();
  cfg.sheetsWebAppUrl = url.trim();
  writeConfig(cfg);
  res.json({ success: true });
});

async function autoPullSheets(){
  const cfg = getConfig();
  const url = cfg.sheetsWebAppUrl;
  if (!url) throw new Error('Web App URL belum disimpan. Isi dulu di halaman Integrasi Sheets.');

  const pullUrl = url + (url.includes('?') ? '&' : '?') + 'action=pull';
  const response = await fetch(pullUrl);
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);

  const data = await response.json();
  if (!data.success) throw new Error(data.error || 'Apps Script mengembalikan error');
  if (!Array.isArray(data.shipments)) throw new Error('Format data tidak valid');

  const incoming  = data.shipments;
  const existing  = readJ(SHIPS_FILE);

  function toISO(d) {
    if (!d) return '';
    d = String(d).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
    const m = d.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
    if (m) return `${m[3]}-${m[2].padStart(2,'0')}-${m[1].padStart(2,'0')}`;
    const m2 = d.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})$/);
    if (m2) return `20${m2[3]}-${m2[2].padStart(2,'0')}-${m2[1].padStart(2,'0')}`;
    return '';
  }

  incoming.forEach(s => {
    s.etd      = toISO(s.etd);
    s.eta      = toISO(s.eta);
    s.stuffing = toISO(s.stuffing);
  });

  const makeKey = (s) => `${s.po}||${s.container}||${s.item}`;
  const shipMap = {};
  existing.forEach(s => { shipMap[makeKey(s)] = s; });

  let added=0, updated=0;
  incoming.forEach((s, i) => {
    if (!s.po && !s.container) return;
    if (!s.po) s.po = s.container;
    const key = makeKey(s);
    const old = shipMap[key];
    if (old) {
      const fromSheets = {
        container:      s.container     || old.container,
        etd:            s.etd           || old.etd,
        eta:            s.eta           || old.eta,
        stuffing:       s.stuffing      || old.stuffing,
        tags:           s.tags?.length  ? s.tags : (old.tags || []),
        item:           s.item          || old.item,
        qty:            s.qty           || old.qty,
        value:          s.value         || old.value,
        supplier:       s.supplier      || old.supplier  || '',
        forwarder:      s.forwarder     || old.forwarder || '',
        tgl_production: s.tgl_production|| old.tgl_production || '',
      };
      if (s.status === 'Delivered' && !['Cleared'].includes(old.status)) {
        fromSheets.status = 'Delivered';
        if (s.deliveredDate) fromSheets.deliveredDate = s.deliveredDate;
      } else if (s.status === 'Production') {
        // Set Production jika belum ada status lain yang lebih tinggi
        if (!old.status || old.status === 'Production') {
          fromSheets.status = 'Production';
        }
      }
      // Jika tgl_production ada tapi status masih kosong, set Production
      if (fromSheets.tgl_production && !fromSheets.status && !old.status) {
        fromSheets.status = 'Production';
      }
      const merged = { ...old, ...fromSheets, id: old.id, po: s.po };
      const changes = diffShipment(old, merged);
      if (changes.length) logChange(old.id, s.po, s.item||old.item, changes, 'sync', 'system');
      shipMap[key] = merged;
      updated++;
    } else {
      shipMap[key] = {
        id:             Date.now() + i,
        po:             s.po,
        container:      s.container     || '',
        item:           s.item          || '',
        qty:            s.qty           || '',
        value:          s.value         || '',
        etd:            s.etd           || '',
        eta:            s.eta           || '',
        stuffing:       s.stuffing      || '',
        tags:           s.tags          || [],
        status:         s.status        || (s.tgl_production ? 'Production' : ''),
        supplier:       s.supplier      || '',
        deliveredDate:  s.deliveredDate || '',
        tgl_production: s.tgl_production|| '',
        forwarder:      s.forwarder     || '',
        notes:          '',
        docs:           { invoice:false, pl:false, do:false, pib:false, ls:false },
      };
      logChange(shipMap[key].id, s.po, s.item, [{field:'_new',from:'',to:'Shipment baru dari sync'}], 'sync', 'system');
      added++;
    }
  });

  const result = Object.values(shipMap);
  writeJ(SHIPS_FILE, result);

  const cfg2 = getConfig();
  cfg2.sheetsLastSync   = new Date().toISOString();
  cfg2.sheetsSyncCount  = (cfg2.sheetsSyncCount||0) + 1;
  cfg2.sheetsLastResult = { added, updated, total: incoming.length };
  persistConfig(cfg2);

  addLog({ username:'system', name:'Sheets Pull' }, 'SHEETS_PULL', `Tarik dari Sheets: +${added} baru, ~${updated} update`);
  console.log(`[SHEETS PULL] +${added} ~${updated} dari ${incoming.length} shipment`);
  return { success:true, added, updated, total: incoming.length };
}

// POST /api/sheets/pull — tarik data dari Apps Script Web App
app.post('/api/sheets/pull', admin, async (req,res) => {
  try {
    const result = await autoPullSheets();
    res.json(result);
  } catch(err) {
    console.error('[SHEETS PULL ERROR]', err.message);
    res.status(500).json({ error: err.message });
  }
});

// Pull data dari sheet TANPA merge/simpan (read-only) — untuk deteksi duplikat
async function pullSheetsReadOnly(){
  const cfg = getConfig();
  const url = cfg.sheetsWebAppUrl;
  if (!url) throw new Error('Web App URL belum disimpan. Isi dulu di halaman Integrasi Sheets.');
  const pullUrl = url + (url.includes('?') ? '&' : '?') + 'action=pull';
  const response = await fetch(pullUrl);
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  const data = await response.json();
  if (!data.success) throw new Error(data.error || 'Apps Script mengembalikan error');
  if (!Array.isArray(data.shipments)) throw new Error('Format data tidak valid');
  return data.shipments;
}

// POST /api/sheets/check-orphans — deteksi baris app yg PO-nya ada di sheet tapi container+item-nya hilang
app.post('/api/sheets/check-orphans', admin, async (req,res) => {
  try {
    const incoming = await pullSheetsReadOnly();
    const existing = readJ(SHIPS_FILE);

    const norm = (v) => String(v||'').trim().toLowerCase();
    // Kumpulan PO yang ada di sheet, dan kombinasi PO||container||item di sheet
    const sheetPOs = new Set();
    const sheetKeys = new Set();
    // Map item -> daftar container di sheet (untuk info "pindah ke mana")
    const itemContainers = {}; // key: po||item -> Set(container)
    incoming.forEach(s => {
      const po = s.po || s.container;
      if (!po) return;
      sheetPOs.add(norm(po));
      sheetKeys.add(`${norm(po)}||${norm(s.container)}||${norm(s.item)}`);
      const ik = `${norm(po)}||${norm(s.item)}`;
      (itemContainers[ik] = itemContainers[ik] || new Set()).add(s.container||'');
    });

    // Baris yatim: PO ada di sheet, tapi kombinasi container+item TIDAK ada di sheet,
    // dan belum ditandai "biarkan" (keepOrphan)
    const orphans = [];
    existing.forEach(s => {
      if (s.keepOrphan) return; // sudah dikonfirmasi sah
      const po = norm(s.po);
      if (!sheetPOs.has(po)) return; // PO murni manual / tidak ada di sheet -> abaikan
      const key = `${po}||${norm(s.container)}||${norm(s.item)}`;
      if (sheetKeys.has(key)) return; // masih ada di sheet -> bukan yatim
      // Yatim: cek apakah item ini kini ada di container lain (indikasi pindah)
      const ik = `${po}||${norm(s.item)}`;
      const nowIn = itemContainers[ik] ? Array.from(itemContainers[ik]).filter(c=>norm(c)!==norm(s.container)) : [];
      orphans.push({
        id: s.id, po: s.po, container: s.container, item: s.item,
        qty: s.qty, status: s.status,
        movedTo: nowIn,            // container lain yg kini punya item ini (kalau ada)
        hasNotes: !!(s.notes && s.notes.trim()),
        hasDocs: !!(s.docs && Object.values(s.docs).some(Boolean)),
      });
    });

    res.json({ success:true, orphans, sheetCount: incoming.length, appCount: existing.length });
  } catch(err) {
    console.error('[CHECK ORPHANS ERROR]', err.message);
    res.status(500).json({ error: err.message });
  }
});

// POST /api/shipments/:id/keep — tandai baris sebagai "biarkan" (bukan yatim, jangan muncul lagi)
app.post('/api/shipments/:id/keep', admin, (req,res) => {
  const ships = readJ(SHIPS_FILE);
  const idx = ships.findIndex(s => String(s.id) === String(req.params.id));
  if (idx < 0) return res.status(404).json({ error: 'Shipment tidak ditemukan' });
  ships[idx].keepOrphan = true;
  writeJ(SHIPS_FILE, ships);
  res.json({ success:true });
});

// POST /api/sheets/webhook — terima data dari Apps Script
app.post('/api/sheets/webhook', (req,res) => {
  const { secret, rows, colMap, mode='upsert', source='google_sheets',
          shipments: formattedShips, formatted=false } = req.body||{};

  // Validasi secret
  const cfg = readConfig();
  if (!secret || secret !== cfg.sheetsWebhookSecret) {
    console.warn(`[SHEETS] Webhook ditolak: secret tidak cocok`);
    return res.status(401).json({ error: 'Secret tidak valid' });
  }

  const existing = readJ(SHIPS_FILE);
  let added=0, updated=0, skipped=0;

  // ── Mode A: Data sudah diformat oleh Apps Script (formatted=true) ──
  if (formatted && Array.isArray(formattedShips)) {
    const shipMap = {};
    existing.forEach(s => { shipMap[s.container||s.po] = s; });

    formattedShips.forEach((incoming, i) => {
      const key = incoming.container || incoming.po;
      if (!key) { skipped++; return; }

      if (shipMap[key]) {
        // Update — pertahankan field yang tidak dikirim (komentar, docs, dll)
        const old = shipMap[key];
        const merged = { ...old };
        Object.entries(incoming).forEach(([k,v]) => {
          if (v !== '' && v !== null && v !== undefined) merged[k] = v;
        });
        shipMap[key] = { ...merged, id: old.id };
        updated++;
      } else {
        shipMap[key] = { ...incoming, id: Date.now() + i,
          docs: { invoice:false, pl:false, do:false, pib:false, ls:false } };
        added++;
      }
    });

    writeJ(SHIPS_FILE, Object.values(shipMap));
    skipped = 0;

  // ── Mode B: Raw rows + colMap (format lama) ──
  } else if (Array.isArray(rows) && colMap) {
    const shipMap = {};
    existing.forEach(s => { shipMap[s.po] = s; });

    const toProcess = rows.filter(r => r[colMap.po]?.toString().trim());
    skipped = rows.length - toProcess.length;

    toProcess.forEach((r, i) => {
      const norm = normalizeRow(r, colMap);
      if (!norm.po) { skipped++; return; }
      if (mode === 'full_replace') {
        shipMap[norm.po] = { ...norm, id: Date.now()+i };
        added++;
      } else if (shipMap[norm.po]) {
        const old = shipMap[norm.po];
        Object.keys(norm).forEach(k => {
          if (norm[k]!==''&&norm[k]!==null) old[k]=norm[k];
        });
        updated++;
      } else {
        shipMap[norm.po] = { ...norm, id: Date.now()+i,
          docs:{invoice:false,pl:false,do:false,pib:false,ls:false} };
        added++;
      }
    });

    if (mode === 'full_replace') writeJ(SHIPS_FILE, Object.values(shipMap));
    else writeJ(SHIPS_FILE, Object.values(shipMap));

  } else {
    return res.status(400).json({ error: 'Payload tidak valid: butuh (formatted+shipments) atau (rows+colMap)' });
  }

  // Update config & log
  cfg.sheetsLastSync  = new Date().toISOString();
  cfg.sheetsSyncCount = (cfg.sheetsSyncCount||0) + 1;
  writeConfig(cfg);
  addLog({ username:'sheets', name:'Google Sheets' }, 'SHEETS_IMPORT',
    `Import dari ${source}: +${added} baru, ~${updated} diupdate, ${skipped} dilewati`);

  console.log(`[SHEETS] +${added} baru, ~${updated} update, ${skipped} skip — dari: ${source}`);
  res.json({ success:true, added, updated, skipped,
    message:`${added} ditambah, ${updated} diupdate, ${skipped} dilewati` });
});

// POST /api/sheets/reset-secret — generate secret baru
app.post('/api/sheets/reset-secret', admin, (req,res) => {
  const cfg = readConfig();
  cfg.sheetsWebhookSecret = randomBytes(24).toString('hex');
  writeConfig(cfg);
  addLog(req.sess, 'SHEETS_RESET', 'Reset webhook secret');
  res.json({ success:true, webhookSecret: cfg.sheetsWebhookSecret });
});

// ═══════════════════════════════════════════════════════════════════════
// AUTH
// ═══════════════════════════════════════════════════════════════════════
app.post('/api/login', (req,res) => {
  const {username,password} = req.body||{};
  const u = readJ(USERS_FILE).find(u=>u.username===username&&u.password===hashPwd(password));
  if (!u) return res.status(401).json({error:'Username atau password salah'});
  res.json({success:true, token:mkSession(u), role:u.role, name:u.name, username:u.username});
});
app.post('/api/logout', (req,res) => { const tok=(req.headers.authorization||'').replace('Bearer ','').trim(); delete sessions[tok]; res.json({success:true}); });
app.get('/api/me', (req,res) => { const s=getSess(req); if(!s) return res.status(401).json({error:'Tidak login'}); res.json({username:s.username,role:s.role,name:s.name}); });

// ═══════════════════════════════════════════════════════════════════════
// USERS
// ═══════════════════════════════════════════════════════════════════════
app.get('/api/users', admin, (req,res) => res.json(readJ(USERS_FILE).map(u=>({username:u.username,role:u.role,name:u.name}))));
app.post('/api/users', admin, (req,res) => {
  const {username,password,role,name}=req.body||{};
  if (!username||!password||!role) return res.status(400).json({error:'Wajib diisi'});
  const users=readJ(USERS_FILE);
  if (users.find(u=>u.username===username)) return res.status(409).json({error:'Username sudah ada'});
  users.push({username,password:hashPwd(password),role,name:name||username});
  writeJ(USERS_FILE,users); addLog(req.sess,'ADD_USER',`Tambah @${username} (${role})`);
  res.json({success:true});
});
app.put('/api/users/:u', admin, (req,res) => {
  const users=readJ(USERS_FILE), i=users.findIndex(u=>u.username===req.params.u);
  if (i===-1) return res.status(404).json({error:'Tidak ditemukan'});
  if (req.body.password) users[i].password=hashPwd(req.body.password);
  if (req.body.role)     users[i].role=req.body.role;
  if (req.body.name)     users[i].name=req.body.name;
  writeJ(USERS_FILE,users); addLog(req.sess,'UPDATE_USER',`Update @${req.params.u}`);
  res.json({success:true});
});
app.delete('/api/users/:u', admin, (req,res) => {
  if (req.params.u===req.sess.username) return res.status(400).json({error:'Tidak bisa hapus akun sendiri'});
  let users=readJ(USERS_FILE); users=users.filter(u=>u.username!==req.params.u);
  writeJ(USERS_FILE,users); addLog(req.sess,'DELETE_USER',`Hapus @${req.params.u}`);
  res.json({success:true});
});
app.put('/api/me/password', auth, (req,res) => {
  const {oldPassword,newPassword}=req.body||{};
  const users=readJ(USERS_FILE), i=users.findIndex(u=>u.username===req.sess.username);
  if (i===-1) return res.status(404).json({error:'User tidak ditemukan'});
  if (users[i].password!==hashPwd(oldPassword)) return res.status(400).json({error:'Password lama salah'});
  users[i].password=hashPwd(newPassword); writeJ(USERS_FILE,users);
  addLog(req.sess,'CHANGE_PWD',`@${req.sess.username} ganti password`);
  res.json({success:true});
});

// ═══════════════════════════════════════════════════════════════════════
// SHIPMENTS
// ═══════════════════════════════════════════════════════════════════════
app.get('/api/shipments', auth, (req,res) => res.json(readJ(SHIPS_FILE)));
app.post('/api/shipments', admin, (req,res) => {
  const data=req.body; if(!Array.isArray(data)) return res.status(400).json({error:'Harus array'});
  const old=readJ(SHIPS_FILE);
  const oldMap={};old.forEach(s=>{oldMap[s.id]=s;});
  const newMap={};data.forEach(s=>{newMap[s.id]=s;});
  // Detect edits
  data.forEach(s=>{
    const o=oldMap[s.id];
    if(o){const ch=diffShipment(o,s);if(ch.length){logChange(s.id,s.po,s.item,ch,'edit',req.sess?.username||'admin');addLog(req.sess,'UPDATE_SHIP',`Update ${s.po}/${s.item}: ${ch.map(c=>c.field).join(', ')}`);}
    }else{logChange(s.id,s.po,s.item,[{field:'_new',from:'',to:`${s.po} — ${s.item||''}`}],'new',req.sess?.username||'admin');addLog(req.sess,'ADD_SHIP',`Tambah ${s.po} — ${s.item||''}`);}
  });
  // Detect deletes
  old.forEach(s=>{
    if(!newMap[s.id]){logChange(s.id,s.po,s.item,[{field:'_delete',from:'exists',to:'deleted'}],'delete',req.sess?.username||'admin');addLog(req.sess,'DELETE_SHIP',`Hapus ${s.po} — ${s.item||''}`);}
  });
  // Detect edits - log summary
  const editCount=data.filter(s=>oldMap[s.id]&&diffShipment(oldMap[s.id],s).length).length;
  if(editCount>1) addLog(req.sess,'BULK_EDIT',`Edit massal ${editCount} shipment`);
  const newCount=data.filter(s=>!oldMap[s.id]).length;
  const delCount=old.filter(s=>!newMap[s.id]).length;
  writeJ(SHIPS_FILE,data);
  res.json({success:true,count:data.length});
});
app.put('/api/shipments/:id', admin, (req,res) => {
  const id=parseInt(req.params.id), data=readJ(SHIPS_FILE), i=data.findIndex(s=>s.id===id);
  if (i===-1) return res.status(404).json({error:'Tidak ditemukan'});
  const old={...data[i]}; data[i]={...data[i],...req.body,id}; writeJ(SHIPS_FILE,data);
  const editChanges=diffShipment(old,data[i]);
  if(editChanges.length) logChange(id,data[i].po,data[i].item,editChanges,'edit',req.sess?.username||'admin');
  const changed=Object.keys(req.body).filter(k=>JSON.stringify(old[k])!==JSON.stringify(req.body[k]));
  if (changed.length) addLog(req.sess,'SINGLE_EDIT',`Update ${old.po}: ${changed.join(', ')}`);
  res.json({success:true,data:data[i]});
});
app.delete('/api/shipments/:id', admin, (req,res) => {
  const id=parseInt(req.params.id);
  let data=readJ(SHIPS_FILE); const ship=data.find(s=>s.id===id);
  if(ship) logChange(id,ship.po,ship.item,[{field:'_delete',from:'exists',to:'deleted'}],'delete',req.sess?.username||'admin');
  data=data.filter(s=>s.id!==id); writeJ(SHIPS_FILE,data);
  const all=readJ(COMMENTS_FILE); delete all[String(id)]; writeJ(COMMENTS_FILE,all);
  if (ship) addLog(req.sess,'DELETE_SHIP',`Hapus PO ${ship.po} - ${ship.item}`);
  res.json({success:true});
});
app.delete('/api/shipments', admin, (req,res) => {
  writeJ(SHIPS_FILE,[]); writeJ(COMMENTS_FILE,{});
  addLog(req.sess,'DELETE_ALL','Hapus semua shipment');
  res.json({success:true});
});

// ═══════════════════════════════════════════════════════════════════════
// COMMENTS
// ═══════════════════════════════════════════════════════════════════════

// ════════════════════════════════════════════════
// Master Data API
// ════════════════════════════════════════════════
app.get('/api/master', auth, (req, res) => {
  const cfg = getConfig();
  res.json({
    statuses:  cfg.masterStatuses  || [],
    tags:      cfg.masterTags      || [],
    tagRules:  cfg.tagRules        || [],
    gudang:    cfg.gudangRules     || [],
    forwarder: cfg.forwarderRules  || [],
  });
});
app.post('/api/master', admin, (req, res) => {
  const cfg = getConfig();
  const b = req.body;
  if (b.statuses  !== undefined) cfg.masterStatuses  = b.statuses;
  if (b.tags      !== undefined) cfg.masterTags      = b.tags;
  if (b.tagRules  !== undefined) cfg.tagRules        = b.tagRules;
  if (b.gudang    !== undefined) cfg.gudangRules     = b.gudang;
  if (b.forwarder !== undefined) cfg.forwarderRules  = b.forwarder;
  persistConfig(cfg);
  res.json({ success: true });
});

app.get('/api/comments/search', auth, (req,res) => {
  const q=(req.query.q||'').toLowerCase().trim(); if(!q) return res.json([]);
  const all=readJ(COMMENTS_FILE), ships=readJ(SHIPS_FILE), results=[];
  Object.entries(all).forEach(([shipId,comments])=>{
    const ship=ships.find(s=>String(s.id)===shipId); if(!ship) return;
    comments.forEach(c=>{ if(c.text.toLowerCase().includes(q))
      results.push({shipId:parseInt(shipId),po:ship.po,supplier:ship.supplier,item:ship.item,commentId:c.id,text:c.text,time:c.time});
    });
  });
  results.sort((a,b)=>new Date(b.time)-new Date(a.time));
  res.json(results.slice(0,50));
});
app.post('/api/comments/cleanup', admin, (req,res) => {
  const {ids}=req.body||{}; if(!Array.isArray(ids)) return res.status(400).json({error:'ids harus array'});
  const all=readJ(COMMENTS_FILE); ids.forEach(id=>{ delete all[String(id)]; }); writeJ(COMMENTS_FILE,all);
  res.json({success:true});
});
app.get('/api/comments/latest', auth, (req,res) => {
  // Kembalikan komentar terakhir untuk SETIAP shipment dalam satu panggilan
  const all=readJ(COMMENTS_FILE); const out={};
  Object.entries(all).forEach(([shipId,comments])=>{ if(comments&&comments.length) out[shipId]=comments[0]; });
  res.json(out);
});
app.get('/api/comments/:id', auth, (req,res) => { const all=readJ(COMMENTS_FILE); res.json(all[req.params.id]||[]); });
app.post('/api/comments/:id', auth, (req,res) => {
  const {text}=req.body||{}; if(!text?.trim()) return res.status(400).json({error:'Kosong'});
  const all=readJ(COMMENTS_FILE); if(!all[req.params.id]) all[req.params.id]=[];
  const c={id:Date.now(),user:req.sess.username,name:req.sess.name,text:text.trim(),time:new Date().toISOString()};
  all[req.params.id].unshift(c); writeJ(COMMENTS_FILE,all);
  res.json({success:true,comment:c});
});
app.delete('/api/comments/:id/:cid', admin, (req,res) => {
  const all=readJ(COMMENTS_FILE);
  if(all[req.params.id]) all[req.params.id]=all[req.params.id].filter(c=>c.id!==parseInt(req.params.cid));
  writeJ(COMMENTS_FILE,all); res.json({success:true});
});

// ═══════════════════════════════════════════════════════════════════════
// AUDIT LOG
// ═══════════════════════════════════════════════════════════════════════
app.get('/api/logs', admin, (req,res) => res.json(readJ(LOGS_FILE).slice(0,parseInt(req.query.limit)||100)));


// GET /api/changelog
app.get('/api/changelog', auth, (req, res) => {
  try {
    if (!existsSync(CHANGELOG_FILE)) return res.json({data:[], total:0});
    const log = JSON.parse(readFileSync(CHANGELOG_FILE, 'utf-8') || '[]');
    const q = (req.query.q || '').toLowerCase();
    const src = req.query.source || '';
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 50;
    let filtered = log;
    if (q) filtered = filtered.filter(e =>
      (e.po||'').toLowerCase().includes(q) ||
      (e.item||'').toLowerCase().includes(q) ||
      (e.changes||[]).some(c => (c.field||'').toLowerCase().includes(q) || (c.from||'').toLowerCase().includes(q) || (c.to||'').toLowerCase().includes(q))
    );
    if (src) filtered = filtered.filter(e => e.source === src);
    res.json({data: filtered.slice(page * limit, (page + 1) * limit), total: filtered.length});
  } catch(e) { console.error('Changelog read error:', e); res.json({data:[], total:0}); }
});

app.get('*', (req,res) => res.sendFile(join(__dirname,'public','index.html')));

autoBackup();
app.listen(PORT, '0.0.0.0', () => {
  const cfg = getConfig();
  const addrs = Object.values(networkInterfaces())
    .flat()
    .filter(i => i && i.family === 'IPv4' && !i.internal)
    .map(i => i.address);
  const localHost = addrs[0] || 'localhost';
  console.log(`\n  🚢  Shipment Monitor v2`);
  console.log(`  ➜   http://localhost:${PORT}`);
  if (localHost !== 'localhost') {
    console.log(`  ➜   http://${localHost}:${PORT}  (akses dari perangkat lain di jaringan lokal)`);
  }
  console.log(`\n  📡  Sheets Webhook URL:`);
  console.log(`      http://YOUR_SERVER_IP:${PORT}/api/sheets/webhook`);
  console.log(`  🔑  Webhook Secret: ${cfg.sheetsWebhookSecret}`);
  console.log(`      (lihat di data/config.json)\n`);
  startAutoSync();
});
