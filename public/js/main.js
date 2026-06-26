// ── Constants & Config ──
const GII_LOGO='data:image/png;base64,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';
(function(){function _setLogos(){const a=document.getElementById('logoLogin'),b=document.getElementById('logoSidebar');if(a)a.src=GII_LOGO;if(b)b.src=GII_LOGO;}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',_setLogos);else _setLogos();})();

const DEFAULT_STATUSES=[{name:'Production',color:'#ca8a04'},{name:'Stuffing',color:'#ea580c'},{name:'Sailed',color:'#2563eb'},{name:'Arrived',color:'#7c3aed'},{name:'Delivered',color:'#16a34a'},{name:'Cleared',color:'#475569'}];
const DEFAULT_TAGS=['HONEY BOO','REEBIT','PANDAOMA','NVMEE','RONAN'];
const DEFAULT_RULES=[{keyword:'-01',tag:'HONEY BOO'},{keyword:'-04',tag:'REEBIT'},{keyword:'-06',tag:'PANDAOMA'},{keyword:'-07',tag:'NVMEE'},{keyword:'IAM',tag:'RONAN'}];
const DEFAULT_FORWARDER_RULES=[{keyword:'AJKY',forwarder:'HARVEST-AIR'},{keyword:'AIR',forwarder:'AIR'},{keyword:'SJP',forwarder:'HARVEST'},{keyword:'HA',forwarder:'HECHUAN'},{keyword:'HV',forwarder:'HECHUAN'},{keyword:'YW',forwarder:'JH'},{keyword:'GZ',forwarder:'JH'}];
let forwarderRules=JSON.parse(localStorage.getItem('forwarder_rules')||'null')||[...DEFAULT_FORWARDER_RULES];
const DEFAULT_TAG_RULES=[{keyword:'BBB',tag:'HONEY BOO',field:'po'},{keyword:'RRR',tag:'REEBIT',field:'po'},{keyword:'SSS',tag:'PANDAOMA',field:'po'},{keyword:'GIM',tag:'NVMEE',field:'po'},{keyword:'IAM',tag:'RONAN',field:'po'},{keyword:'-08',tag:'HQ',field:'po'},{keyword:'COM/SUB-04',tag:'GROSIR',field:'po'}];
const DEFAULT_GUDANG_RULES=[{field:'container',keyword:'AIR',days:3,label:'Kontainer AIR → ETA +3 hari'},{field:'container',keyword:'AJKY',days:7,label:'Kontainer AJKY → ETA +7 hari'},{field:'po',keyword:'CTR',days:7,label:'PO mengandung CTR → ETA +7 hari'}];
const SHEETS_URL='https://script.google.com/macros/s/AKfycbxwlpkdaaiFBZvCb3lm38kWc9j5fIuNKoqxaNvDlHEX9qNzy_cKlCSC_TJ7YbJ8uPQ1Zg/exec';
const COLORS=['#2563eb','#06b6d4','#8b5cf6','#ec4899','#f59e0b','#10b981','#0891b2','#f43f5e'];
const GRADS=['linear-gradient(90deg,#1d4ed8,#60a5fa)','linear-gradient(90deg,#0891b2,#67e8f9)','linear-gradient(90deg,#2563eb,#93c5fd)','linear-gradient(90deg,#4f46e5,#a5b4fc)','linear-gradient(90deg,#06b6d4,#a5f3fc)','linear-gradient(90deg,#10b981,#6ee7b7)','linear-gradient(90deg,#f59e0b,#fcd34d)','linear-gradient(90deg,#ec4899,#f9a8d4)'];

(function(){
  const MASTER_VERSION='2';
  if(localStorage.getItem('sm_master_version')!==MASTER_VERSION){
    localStorage.removeItem('master_statuses');localStorage.removeItem('forwarder_rules');
    localStorage.removeItem('gudang_rules');localStorage.removeItem('tag_rules');
    localStorage.setItem('sm_master_version',MASTER_VERSION);
  }
})();

// ── State ──
let shipments=[],editId=null,authToken=sessionStorage.getItem('auth_token')||'',currentUser=null;
let activeStatFilter='',sortKey='',sortDir=1,currentView='table',notifPanelOpen=false,smartAlertsHidden=false;
let notifications=JSON.parse(localStorage.getItem('notif_v2')||'[]');
let parsedRows=[],parsedHeaders=[],colMapping={};
let detailTab='info',detailShipId=null;
let masterStatuses=JSON.parse(localStorage.getItem('master_statuses')||'null')||[...DEFAULT_STATUSES];
let masterTags=JSON.parse(localStorage.getItem('master_tags')||'null')||DEFAULT_TAGS;
let tagRules=JSON.parse(localStorage.getItem('tag_rules')||'null')||[...DEFAULT_TAG_RULES];
let gudangRules=JSON.parse(localStorage.getItem('gudang_rules')||'null')||[...DEFAULT_GUDANG_RULES];

// ── Status Helpers ──
function getStatusOrder(){return masterStatuses.map(s=>s.name);}
function getStatusIndex(status){const order=getStatusOrder();const i=order.indexOf(status);return i>=0?i:-1;}

function migrateMasterData(){
  const correctColors={Production:'#ca8a04',Stuffing:'#ea580c',Sailed:'#2563eb',Arrived:'#7c3aed',Delivered:'#16a34a',Cleared:'#475569'};
  let changed=false;
  if(!masterStatuses.find(s=>s.name==='Production')){masterStatuses.unshift({name:'Production',color:'#ca8a04'});changed=true;}
  masterStatuses.forEach((s,i)=>{if(correctColors[s.name]&&s.color!==correctColors[s.name]){masterStatuses[i].color=correctColors[s.name];changed=true;}});
  if(changed){saveMaster();injectStatusStyles();}
}

async function loadMasterFromServer(){
  try{
    const d=await api('GET','/api/master');if(!d)return;
    if(d.statuses&&d.statuses.length){masterStatuses=d.statuses;localStorage.setItem('master_statuses',JSON.stringify(masterStatuses));}
    if(d.tags&&d.tags.length){masterTags=d.tags;localStorage.setItem('master_tags',JSON.stringify(masterTags));}
    if(d.tagRules&&d.tagRules.length){tagRules=d.tagRules;localStorage.setItem('tag_rules',JSON.stringify(tagRules));}
    if(d.gudang&&d.gudang.length){gudangRules=d.gudang;localStorage.setItem('gudang_rules',JSON.stringify(gudangRules));}
    if(d.forwarder&&d.forwarder.length){forwarderRules=d.forwarder;localStorage.setItem('forwarder_rules',JSON.stringify(forwarderRules));}
  }catch(e){}
}

function saveMaster(){
  localStorage.setItem('master_statuses',JSON.stringify(masterStatuses));
  localStorage.setItem('master_tags',JSON.stringify(masterTags));
  localStorage.setItem('tag_rules',JSON.stringify(tagRules));
  localStorage.setItem('gudang_rules',JSON.stringify(gudangRules));
  localStorage.setItem('forwarder_rules',JSON.stringify(forwarderRules));
  api('POST','/api/master',{statuses:masterStatuses,tags:masterTags,tagRules,gudang:gudangRules,forwarder:forwarderRules}).catch(()=>{});
}
function getStatusNames(){return masterStatuses.map(s=>s.name);}
function getStatusColor(name){const s=masterStatuses.find(x=>x.name===name);return s?s.color:'#6b7a8d';}

function gudangLabel(po,container){
  for(const r of gudangRules){
    if(r.isDefault)return`(ETA +${r.days}h)`;
    const haystack=(r.field==='container'?(container||''):(po||'')).toUpperCase();
    if(r.keyword&&haystack.includes(r.keyword.toUpperCase()))return`(ETA +${r.days}h — ${r.label})`;
  }
  return'(ETA +14h)';
}

function calcAutoStatus(s){
  if(['Delivered','Cleared'].includes(s.status))return s.status;
  const today=new Date();today.setHours(0,0,0,0);
  const etd=parseSD(s.etd),eta=parseSD(s.eta),stuffing=parseSD(s.stuffing);
  if(eta&&today>eta)return'Arrived';
  if(etd&&today>etd)return'Sailed';
  if(stuffing)return'Stuffing';
  if(etd||eta)return'Stuffing';
  if(s.item&&s.qty&&s.tgl_production)return'Production';
  return s.status||'Production';
}
function autoUpdateStatus(){
  let c=0;shipments=shipments.map(s=>{const ns=calcAutoStatus(s);if(ns!==s.status){c++;return{...s,status:ns};}return s;});
  if(c>0){save();showToast('info','Status diperbarui',`${c} shipment diupdate otomatis.`);}
}
function getRef(s){return s.gudang||calcGudang(s.po,s.eta,s.container);}
function getDelay(s){
  if(s.status==='Production')return{label:'Produksi',cls:'delay-prod'};
  if(s.status==='Delivered')return{label:'Terkirim',cls:'delay-done'};
  if(s.status==='Cleared')return{label:'Cleared',cls:'delay-done'};
  const today=new Date();today.setHours(0,0,0,0);
  const tgl=parseSD(getRef(s));
  if(!tgl)return s.status==='Arrived'?{label:'Tiba',cls:'delay-ok'}:{label:'—',cls:'delay-done'};
  const diff=Math.round((tgl-today)/86400000);
  if(diff<0)return{label:`${Math.abs(diff)}h terlambat`,cls:'delay-late'};
  if(diff===0)return{label:'Hari ini!',cls:'delay-warn'};
  if(s.status==='Arrived')return{label:'Tiba',cls:'delay-ok'};
  if(diff<=5)return{label:`${diff}h lagi`,cls:'delay-warn'};
  return{label:`${diff}h lagi`,cls:'delay-ok'};
}
function getAlertType(s){
  if(['Cleared','Delivered'].includes(s.status))return'ok';
  const today=new Date();today.setHours(0,0,0,0);
  const tgl=parseSD(getRef(s));if(!tgl)return'ok';
  const d=Math.round((tgl-today)/86400000);
  if(d<0)return'late';if(d<=5)return'warn';return'ok';
}
function tagsFromPO(po){
  const p=(po||'').toUpperCase();
  return tagRules.filter(r=>p.includes(r.keyword.toUpperCase())).map(r=>r.tag).filter((v,i,a)=>a.indexOf(v)===i);
}

// ── Mobile Sidebar ──
function openMobileSidebar(){document.getElementById('sidebar').classList.add('mobile-open');document.getElementById('sidebarOverlay').classList.add('show');}
function closeMobileSidebar(){document.getElementById('sidebar').classList.remove('mobile-open');document.getElementById('sidebarOverlay').classList.remove('show');}
let sidebarMini=true;
function toggleSidebar(){}
function applySidebar(){const sb=document.getElementById('sidebar');const main=document.querySelector('.main');if(sb)sb.classList.add('mini');if(main)main.classList.add('mini');}

// ── Init UI ──
function initUI(){
  migrateMasterData();
  const statuses=getStatusNames();
  const fSt=document.getElementById('filterStatus');if(fSt)fSt.innerHTML='<option value="">Status</option>'+statuses.map(s=>`<option>${s}</option>`).join('');
  const fTg=document.getElementById('filterTag');if(fTg)fTg.innerHTML='<option value="">Tags</option>'+masterTags.map(t=>`<option>${t}</option>`).join('');
  injectStatusStyles();
}

function injectStatusStyles(){
  let old=document.getElementById('dynamic-styles');if(old)old.remove();
  const style=document.createElement('style');style.id='dynamic-styles';
  style.textContent=masterStatuses.map(s=>{const cls=getStatusClass(s.name);const hex=s.color||'#6b7a8d';return`.${cls}{background:${hex}18;color:${hex};}.${cls}::before{background:${hex};}`}).join('');
  document.head.appendChild(style);
}

// ── Navigation ──
const PAGE_TITLES={shipment:'Shipment',dashboard:'Dashboard',calendar:'Kalender',ai:'AI Assistant',log:'Log Aktivitas',users:'Manajemen User',master:'Master Data',sheets:'Integrasi Google Sheets'};
function switchPage(p,btn){
  document.querySelectorAll('.page').forEach(e=>e.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(e=>e.classList.remove('active'));
  document.getElementById('page-'+p).classList.add('active');
  if(btn)btn.classList.add('active');
  else{const nb=document.getElementById('nav-'+p);if(nb)nb.classList.add('active');}
  document.getElementById('topbarTitle').textContent=PAGE_TITLES[p]||p;
  const ta=document.getElementById('topbarAction');
  const tp=document.getElementById('topbarPaste');
  ta.style.display=p==='shipment'&&isAdmin()?'':'none';
  if(tp)tp.style.display=p==='shipment'&&isAdmin()?'':'none';
  const cdb=document.getElementById('checkDupBtn');if(cdb)cdb.style.display=p==='shipment'&&isAdmin()?'':'none';
  if(p==='dashboard')renderDashboard();
  if(p==='calendar')renderCalendar();
  if(p==='log')loadUnifiedLog();
  if(p==='users')loadUsers();
  if(p==='master')renderMaster();
  if(p==='sheets')loadSheetsStatus();
  closeMobileSidebar();
  bnavSet(p);
}

// ── Stats ──
function renderStats(){
  const total=shipments.length,aktif=shipments.filter(s=>!['Cleared','Delivered'].includes(s.status)).length;
  const sailed=shipments.filter(s=>['Stuffing','Sailed','Arrived'].includes(s.status)).length,late=shipments.filter(s=>getAlertType(s)==='late').length;
  const card=(k,v,l,col,cls,icon)=>`<div class="stat ${cls} ${activeStatFilter===k?'active':''}" onclick="setStatFilter('${k}')"><div class="stat-icon">${icon}</div><div class="stat-val" style="color:${col};">${v}</div><div class="stat-lbl">${l}</div></div>`;
  document.getElementById('statsBar').innerHTML=card('total',total,'Total PO','var(--text)','s-total','📦')+card('aktif',aktif,'Aktif','var(--accent)','s-aktif','⚡')+card('laut',sailed,'Pengiriman','var(--teal)','s-kirim','🚢')+card('late',late,'Terlambat',late>0?'var(--red)':'var(--green)','s-late',late>0?'🔥':'✅');
}
function setStatFilter(k){activeStatFilter=activeStatFilter===k?'':k;renderStats();render();}

// ── Last comments cache ──
let lastCommentCache={};
async function loadLastComments(){
  try{
    const d=await api('GET','/api/comments/latest');
    if(d&&typeof d==='object'){lastCommentCache={};Object.entries(d).forEach(([id,c])=>{lastCommentCache[id]=c;});}
  }catch(e){}
  render();
}

// ── Notifications ──
function saveNotifs(){localStorage.setItem('notif_v2',JSON.stringify(notifications));}
function addNotif(type,title,msg,poId){const id=Date.now()+Math.random();notifications.unshift({id,type,title,msg,poId,read:false,time:new Date().toISOString()});if(notifications.length>50)notifications=notifications.slice(0,50);saveNotifs();renderNotifPanel();showToast(type,title,msg,poId);try{if('Notification'in window&&Notification.permission==='granted')new Notification('Shipment Monitor — '+title,{body:msg});}catch{}}
function renderNotifPanel(){
  const panel=document.getElementById('notifPanel');if(!panel)return;
  const a=window._smartAlerts||{arriving:[],overdue:[],statusMismatch:[]};
  const total=a.arriving.length+a.overdue.length+a.statusMismatch.length;
  const countEl=document.getElementById('notifCount');if(countEl)countEl.textContent=total>0?`(${total})`:'';
  let smartHtml='';
  if(a.overdue.length){smartHtml+=`<div class="alert-section"><div class="alert-section-title">🔴 Terlambat <span class="alert-count alert-red">${a.overdue.length}</span></div>${a.overdue.slice(0,8).map(x=>`<div class="alert-item" onclick="openDetail(${x.s.id});toggleNotifPanel();"><span class="alert-icon">⚠️</span><div class="alert-body"><div class="alert-title">${x.s.po} — ${x.s.item}</div><div class="alert-desc">${x.days}h late · ${x.s.container||'—'}</div></div></div>`).join('')}</div>`;}
  if(a.arriving.length){smartHtml+=`<div class="alert-section"><div class="alert-section-title">🟡 Segera tiba <span class="alert-count alert-yellow">${a.arriving.length}</span></div>${a.arriving.map(x=>`<div class="alert-item" onclick="openDetail(${x.s.id});toggleNotifPanel();"><span class="alert-icon">📍</span><div class="alert-body"><div class="alert-title">${x.s.po} — ${x.s.item}</div><div class="alert-desc">${x.days===0?'Hari ini':x.days+'h lagi'} · ${x.s.container||'—'}</div></div></div>`).join('')}</div>`;}
  if(a.statusMismatch.length){smartHtml+=`<div class="alert-section"><div class="alert-section-title">⚡ Status tidak sesuai <span class="alert-count alert-yellow">${a.statusMismatch.length}</span></div>${a.statusMismatch.map(x=>`<div class="alert-item" onclick="openDetail(${x.s.id});toggleNotifPanel();"><span class="alert-icon">🔄</span><div class="alert-body"><div class="alert-title">${x.s.po}</div><div class="alert-desc">${x.reason}</div></div></div>`).join('')}</div>`;}
  const listEl=document.getElementById('notifList');const hasSmart=!!smartHtml;
  if(!hasSmart){listEl.innerHTML='<div style="text-align:center;padding:30px 10px;color:var(--muted);font-size:12px;">Tidak ada notifikasi</div>';}
  else{listEl.innerHTML=smartAlertsHidden?'<div style="padding:14px;color:var(--muted);font-size:12px;text-align:center;">Smart alerts disembunyikan.</div>':smartHtml;}
  const btnMark=document.getElementById('btnMarkAll');if(btnMark)btnMark.style.display='none';
  const btnClear=document.getElementById('btnClear');if(btnClear)btnClear.style.display='none';
  const btnEnable=document.getElementById('btnEnableNotif');if(btnEnable)btnEnable.onclick=reqBrowserNotif;
  const btnToggleSmart=document.getElementById('btnToggleSmart');if(btnToggleSmart){btnToggleSmart.disabled=!hasSmart;btnToggleSmart.textContent=smartAlertsHidden?'Tampilkan ringkasan':'Sembunyikan ringkasan';btnToggleSmart.onclick=toggleSmartAlerts;}
  const btnHint=document.getElementById('notifHint');if(btnHint)btnHint.textContent=hasSmart?'Smart alert berasal dari status shipment saat ini.':'';
  const dot=document.getElementById('notifDot');if(dot)dot.classList.toggle('show',total>0);
}
function toggleSmartAlerts(){smartAlertsHidden=!smartAlertsHidden;renderNotifPanel();}
function _renderNotifPanelOld(){
  const unread=notifications.filter(n=>!n.read).length;
  document.getElementById('notifDot').classList.toggle('show',unread>0);
  document.getElementById('notifCount').innerHTML=unread>0?`<span class="badge-count">${unread}</span>`:'';
  const list=document.getElementById('notifList');
  if(!notifications.length){list.innerHTML='<div style="padding:20px;text-align:center;font-size:13px;color:var(--muted);">Tidak ada notifikasi</div>';return;}
  const ic=t=>t==='late'?'🚨':t==='warn'?'⚠️':'🔔';
  list.innerHTML=notifications.map(n=>`<div class="notif-item" style="opacity:${n.read?.8:1};" onclick="notifClick(${n.id})"><div class="notif-item-title">${ic(n.type)} ${n.title} ${!n.read?'<span style="width:6px;height:6px;border-radius:50%;background:var(--accent);display:inline-block;"></span>':''}</div><div class="notif-item-msg">${n.msg}</div><div class="notif-item-time">${fmtAgo(n.time)}</div></div>`).join('');
}
function toggleNotifPanel(){
  notifPanelOpen=!notifPanelOpen;
  document.getElementById('notifPanel').classList.toggle('open',notifPanelOpen);
  if(notifPanelOpen){if(typeof checkAlerts==='function')checkAlerts();renderNotifPanel();}
}
function markAllRead(){const unread=notifications.filter(n=>!n.read).length;if(!unread){showToast('info','Tidak ada notifikasi baru','');return;}notifications.forEach(n=>n.read=true);saveNotifs();renderNotifPanel();showToast('info','Semua notifikasi dibaca',`${unread} notifikasi ditandai dibaca`);}
function clearAllNotif(){if(!notifications.length){showToast('info','Tidak ada notifikasi','');return;}if(!confirm('Hapus semua notifikasi?'))return;notifications=[];saveNotifs();renderNotifPanel();showToast('info','Notifikasi dihapus','Semua notifikasi telah dihapus');}
function notifClick(id){const n=notifications.find(x=>x.id===id);if(!n)return;n.read=true;saveNotifs();renderNotifPanel();if(n.poId){openDetail(n.poId);toggleNotifPanel();}}
async function reqBrowserNotif(){if(!('Notification'in window))return;const p=await Notification.requestPermission();if(p==='granted')showToast('info','Notifikasi aktif','');}

function checkAlerts(){
  const today=new Date();today.setHours(0,0,0,0);
  const alerts={arriving:[],overdue:[],docMissing:[],statusMismatch:[]};
  shipments.forEach(s=>{
    if(['Cleared'].includes(s.status))return;
    const eta=s.eta?new Date(s.eta):null;const g=s.gudang?new Date(s.gudang):null;const refDate=g||eta;
    if(eta){
      const daysToEta=Math.round((eta-today)/86400000);
      if(daysToEta>=0&&daysToEta<=3&&!['Arrived','Delivered','Cleared'].includes(s.status))alerts.arriving.push({s,days:daysToEta});
      if(refDate){const daysLate=Math.round((today-refDate)/86400000);if(daysLate>7&&!['Delivered','Cleared'].includes(s.status))alerts.overdue.push({s,days:daysLate});}
    }
    if(['Arrived','Delivered'].includes(s.status)){const docs=s.docs||{};const missing=[];if(!docs.invoice)missing.push('Invoice');if(!docs.pl)missing.push('PL');if(!docs.do)missing.push('DO');if(!docs.pib)missing.push('PIB');if(!docs.ls)missing.push('LS');if(missing.length>=3)alerts.docMissing.push({s,missing});}
    const etd=s.etd?new Date(s.etd):null;
    if(etd&&today>etd&&s.status==='Stuffing')alerts.statusMismatch.push({s,reason:'ETD lewat, masih Stuffing'});
  });
  window._smartAlerts=alerts;
  const total=alerts.arriving.length+alerts.overdue.length+alerts.docMissing.length+alerts.statusMismatch.length;
  const dot=document.getElementById('notifDot');if(dot)dot.classList.toggle('show',total>0);
  _oldCheckAlerts();
}
function _oldCheckAlerts(){
  const today=new Date();today.setHours(0,0,0,0);
  shipments.forEach(s=>{
    if(['Cleared','Delivered'].includes(s.status))return;
    const ref=getRef(s),tgl=parseSD(ref);if(!tgl)return;
    const diff=Math.round((tgl-today)/86400000),lbl='Est. Tiba';
    if(diff<0)addNotif('late','Shipment Terlambat!',`${s.po}: sudah ${Math.abs(diff)} hari melewati ${lbl}.`,s.id);
    else if(diff===1)addNotif('warn',`${lbl} Besok!`,`${s.po} – ${s.item} tiba besok.`,s.id);
    else if(diff===3)addNotif('warn',`${lbl} 3 Hari Lagi`,`${s.po} – ${s.item} ETA ${fmtDate(ref)}.`,s.id);
  });
}

// ── Search ──
let searchMode='shipment';
let commentSearchDebounce;
function onSearchInput(val){
  clearTimeout(commentSearchDebounce);
  const q=val.trim();
  if(!q){clearCommentSearch();render();return;}
  render();
  commentSearchDebounce=setTimeout(async()=>{
    const shipResults=getFiltered();
    if(shipResults.length===0&&q.length>=2)await doCommentSearch(q);
  },600);
}
function clearCommentSearch(){
  searchMode='shipment';
  document.getElementById('commentSearchPanel').style.display='none';
  document.getElementById('searchModeIndicator').style.display='none';
  document.getElementById('viewTableEl').style.display=currentView==='table'?'block':'none';
  document.getElementById('viewCardEl').style.display=currentView==='card'?'block':'none';
}
async function doCommentSearch(q){
  const data=await api('GET',`/api/comments/search?q=${encodeURIComponent(q)}`);
  if(!data||!data.length)return;
  document.getElementById('commentSearchPanel').style.display='block';
  document.getElementById('searchModeIndicator').style.display='inline-flex';
  document.getElementById('viewTableEl').style.display='none';
  document.getElementById('viewCardEl').style.display='none';
  const status=document.getElementById('commentSearchStatus');
  const results=document.getElementById('commentSearchResults');
  status.textContent=`${data.length} komentar ditemukan`;
  const hl=(txt)=>txt.replace(new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'gi'),m=>`<mark>${m}</mark>`);
  results.innerHTML=data.map(r=>`<div class="comment-search-result" onclick="openDetailFromSearch(${r.shipId})"><div class="csr-po">${r.po} <span style="font-weight:400;color:var(--muted);">— ${r.supplier}</span></div><div class="csr-text">${hl(r.text.substring(0,150))}${r.text.length>150?'…':''}</div><div class="csr-time">${new Date(r.time).toLocaleString('id-ID',{day:'2-digit',month:'2-digit',year:'2-digit',hour:'2-digit',minute:'2-digit'})}</div></div>`).join('');
}
function openDetailFromSearch(id){clearCommentSearch();document.getElementById('searchInput').value='';detailShipId=id;detailTab='comments';renderDetail();}

// ── filterByTag / filterBySupplier ──
function filterByTag(tag){
  switchPage('shipment',document.getElementById('nav-shipment'));
  const sel=document.getElementById('filterTag');
  if(sel){const opt=[...sel.options].find(o=>o.value===tag);if(opt){sel.value=tag;render();}else{document.getElementById('searchInput').value=tag;onSearchInput(tag);}}
}
function filterBySupplier(supplier){switchPage('shipment',document.getElementById('nav-shipment'));document.getElementById('searchInput').value=supplier;onSearchInput(supplier);}

// ── Export Excel ──
function exportExcel(){
  const list=getFiltered();if(!list.length){showToast('warn','Kosong','Tidak ada data untuk diekspor.');return;}
  const headers=['PO','Item','Qty','Nilai (RMB)','Supplier','Kontainer','Forwarder','Produksi','Stuffing','ETD','ETA','Est. Tiba','Tgl Datang','Status','Tags','INV','PL','DO','PIB','LS','Catatan'];
  const rows=list.map(s=>{const d=s.docs||{};return[s.po,s.item,s.qty,s.value||'',s.supplier||'',s.container||'',s.forwarder||'',s.tgl_production||'',s.stuffing||'',s.etd||'',s.eta||'',s.gudang||'',s.deliveredDate||'',s.status||'',(s.tags||[]).join(', '),d.invoice?'✓':'',d.pl?'✓':'',d.do?'✓':'',d.pib?'✓':'',d.ls?'✓':'',s.notes||''];});
  const ws=XLSX.utils.aoa_to_sheet([headers,...rows]);
  ws['!cols']=[24,20,7,13,16,14,16,11,11,11,11,11,11,12,18,6,6,6,6,6,32].map(w=>({wch:w}));
  const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,'Shipment');
  const now=new Date(),tgl=`${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}`;
  XLSX.writeFile(wb,`Shipment_${tgl}.xlsx`);showToast('info','Export berhasil',`${list.length} shipment berhasil diexport.`);
}

// ── Old Sync Modal ──
function syncToSheets(){document.getElementById('sync_url').value=localStorage.getItem('gsheets_url')||SHEETS_URL;document.getElementById('syncCount').textContent=shipments.length;document.getElementById('syncStatus').style.display='none';document.getElementById('doSyncBtn').disabled=false;document.getElementById('doSyncBtn').textContent='Sync Sekarang';document.getElementById('syncOverlay').classList.add('open');}
function closeSyncModal(){document.getElementById('syncOverlay').classList.remove('open');}
async function doSync(){
  const url=document.getElementById('sync_url').value.trim();if(!url)return;
  localStorage.setItem('gsheets_url',url);
  const btn=document.getElementById('doSyncBtn'),status=document.getElementById('syncStatus');
  btn.disabled=true;btn.textContent='Menyinkronkan...';status.style.display='block';
  status.innerHTML=`<div style="font-size:12px;color:var(--muted);padding:8px;background:var(--surface2);border-radius:var(--radius-sm);">⏳ Mengirim ${shipments.length} data...</div>`;
  const form=document.createElement('form');form.method='POST';form.action=url;form.target='syncFrame';
  const inp=document.createElement('input');inp.type='hidden';inp.name='data';inp.value=JSON.stringify(shipments);form.appendChild(inp);
  let iframe=document.getElementById('syncFrame');
  if(!iframe){iframe=document.createElement('iframe');iframe.name='syncFrame';iframe.id='syncFrame';iframe.style.display='none';document.body.appendChild(iframe);}
  const timer=setTimeout(()=>{status.innerHTML=`<div style="font-size:12px;color:var(--green);padding:8px;background:var(--green-dim);border-radius:var(--radius-sm);">✓ Data terkirim!</div>`;btn.textContent='Selesai ✓';showToast('info','Sync dikirim','');setTimeout(closeSyncModal,2500);},6000);
  iframe.onload=()=>{clearTimeout(timer);status.innerHTML=`<div style="font-size:12px;color:var(--green);padding:8px;background:var(--green-dim);border-radius:var(--radius-sm);">✓ Berhasil!</div>`;btn.textContent='Selesai ✓';setTimeout(closeSyncModal,2000);};
  document.body.appendChild(form);form.submit();document.body.removeChild(form);
}

// ── Check Duplicate (Orphan) ──
let _orphanList=[];
async function openCheckDup(){
  document.getElementById('checkDupOverlay').classList.add('open');
  const status=document.getElementById('checkDupStatus'),list=document.getElementById('checkDupList'),footer=document.getElementById('checkDupFooter');
  footer.style.display='none';list.innerHTML='';
  status.innerHTML=`<div style="font-size:13px;color:var(--muted);padding:10px;background:var(--surface2);border-radius:var(--radius-sm);">⏳ Menarik data dari spreadsheet & membandingkan...</div>`;
  const r=await api('POST','/api/sheets/check-orphans');
  if(!r||r.error){status.innerHTML=`<div style="font-size:13px;color:var(--red);padding:10px;background:var(--red-dim);border-radius:var(--radius-sm);">⚠️ ${esc(r?.error||'Gagal cek')}</div>`;return;}
  _orphanList=r.orphans||[];
  if(!_orphanList.length){status.innerHTML=`<div style="font-size:13px;color:var(--green);padding:10px;background:var(--green-dim);border-radius:var(--radius-sm);">✓ Tidak ada baris duplikat. Data app sesuai spreadsheet.</div>`;return;}
  status.innerHTML=`<div style="font-size:13px;color:var(--yellow);padding:10px;background:var(--yellow-dim);border-radius:var(--radius-sm);">⚠️ Ditemukan <strong>${_orphanList.length}</strong> baris kemungkinan double. Periksa di bawah.</div>`;
  renderOrphanList();footer.style.display='';
}
function renderOrphanList(){
  const list=document.getElementById('checkDupList');
  if(!_orphanList.length){list.innerHTML='';document.getElementById('checkDupFooter').style.display='none';document.getElementById('checkDupStatus').innerHTML=`<div style="font-size:13px;color:var(--green);padding:10px;background:var(--green-dim);border-radius:var(--radius-sm);">✓ Selesai. Tidak ada baris tersisa.</div>`;return;}
  list.innerHTML=`<table style="width:100%;border-collapse:collapse;font-size:12px;"><thead><tr style="background:var(--surface2);"><th style="padding:7px 8px;text-align:left;">No. PO</th><th style="padding:7px 8px;text-align:left;">Container</th><th style="padding:7px 8px;text-align:left;">Item</th><th style="padding:7px 8px;text-align:left;">Info</th><th style="padding:7px 8px;text-align:center;">Aksi</th></tr></thead><tbody>${_orphanList.map(o=>{const moved=o.movedTo&&o.movedTo.length?`<span style="color:var(--yellow);">→ pindah ke ${o.movedTo.map(esc).join(', ')}</span>`:`<span style="color:var(--muted);">tidak ada di sheet</span>`;const flags=[o.hasNotes?'📝 ada catatan':'',o.hasDocs?'📎 ada dokumen':''].filter(Boolean).join(' · ');return`<tr style="border-bottom:1px solid var(--border);"><td style="padding:7px 8px;font-family:'Plus Jakarta Sans',sans-serif;font-size:11px;">${esc(o.po)}</td><td style="padding:7px 8px;">${esc(o.container||'-')}</td><td style="padding:7px 8px;">${esc(o.item||'-')}</td><td style="padding:7px 8px;font-size:11px;">${moved}${flags?'<br>'+flags:''}</td><td style="padding:7px 8px;text-align:center;white-space:nowrap;"><button class="btn" style="padding:3px 8px;font-size:11px;" onclick="keepOrphan(${o.id})">✓ Biarkan</button><button class="btn btn-danger" style="padding:3px 8px;font-size:11px;" onclick="deleteOrphan(${o.id})">🗑 Hapus</button></td></tr>`;}).join('')}</tbody></table>`;
}
function closeCheckDup(){document.getElementById('checkDupOverlay').classList.remove('open');loadData();}
async function deleteOrphan(id){if(!confirm('Hapus baris ini dari aplikasi?'))return;await api('DELETE','/api/shipments/'+id);_orphanList=_orphanList.filter(o=>o.id!==id);shipments=shipments.filter(s=>s.id!==id);renderOrphanList();}
async function keepOrphan(id){await api('POST','/api/shipments/'+id+'/keep');_orphanList=_orphanList.filter(o=>o.id!==id);renderOrphanList();}
async function deleteAllOrphans(){if(!_orphanList.length)return;if(!confirm(`Hapus SEMUA ${_orphanList.length} baris ini?`))return;for(const o of _orphanList){await api('DELETE','/api/shipments/'+o.id);shipments=shipments.filter(s=>s.id!==o.id);}_orphanList=[];renderOrphanList();}
async function keepAllOrphans(){if(!_orphanList.length)return;for(const o of _orphanList){await api('POST','/api/shipments/'+o.id+'/keep');}_orphanList=[];renderOrphanList();}

// ── AI Assistant ──
let _aiOpen=false,_aiHist=[],_aiLoading=false;
async function aiInit(){
  document.getElementById('aiSetupDiv').style.display='none';
  const cd=document.getElementById('aiChatDiv');cd.style.display='flex';
  if(_aiHist.length===0)aiAddMsg('bot','Halo! Saya asisten GII Commerce.\n\nSaya bisa jawab:\n• Rangkuman / rekap shipment\n• Shipment terlambat & tiba minggu ini\n• Total RMB pengiriman / per status\n• Supplier & forwarder tercepat/terlambat\n• Rata-rata waktu pengiriman\n• Lead time per item\n• PO tanpa kontainer\n• Bandingkan lead time antar tags\n\nKetik pertanyaan atau klik tombol di bawah 👇');
}
function aiToggle(){_aiOpen=!_aiOpen;document.getElementById('aiChat').classList.toggle('open',_aiOpen);if(_aiOpen){aiInit();setTimeout(()=>document.getElementById('aiInp')?.focus(),300);}}
let _aiHoverTimer=null;
function aiHoverOpen(){clearTimeout(_aiHoverTimer);if(_aiOpen)return;_aiOpen=true;document.getElementById('aiChat').classList.add('open');aiInit();}
function aiHoverCancel(){clearTimeout(_aiHoverTimer);}
function aiHoverClose(){clearTimeout(_aiHoverTimer);_aiHoverTimer=setTimeout(()=>{const inp=document.getElementById('aiInp');if(inp&&document.activeElement===inp&&inp.value.trim())return;_aiOpen=false;document.getElementById('aiChat').classList.remove('open');},450);}
function aiSaveKey(){aiInit();}
function aiAddMsg(role,content,isHtml){
  const el=document.getElementById('aiMsgs');if(!el)return;
  let html;
  if(isHtml){html=content;}else{html=(content||'').replace(/[*][*](.*?)[*][*]/g,'<strong>$1</strong>').replace(/[*](.*?)[*]/g,'<em>$1</em>').split('\n').join('<br>');}
  const av=role==='bot'?'🤖':(currentUser?.name?.[0]?.toUpperCase()||'U');
  const d=document.createElement('div');d.className='ai-msg '+role;
  d.innerHTML='<div class="ai-msg-av">'+av+'</div><div class="ai-bbl">'+html+'</div>';
  el.appendChild(d);el.scrollTop=el.scrollHeight;
}
function aiAsk(text){document.getElementById('aiInp').value=text;document.getElementById('aiChips').style.display='none';aiSend();}
function aiShipRow(x,extra){
  const fmt=d=>{if(!d)return'—';const p=d.split('-');return p[2]+'/'+p[1]+'/'+p[0];};
  const done=['Delivered','Cleared'].includes(x.status);
  const dateLabel=done?(x.deliveredDate?'<span style="color:#059669;">✅ Tgl Datang: <b>'+fmt(x.deliveredDate)+'</b></span>':'<span style="color:var(--muted);">Tgl Datang: —</span>'):(x.gudang||x.eta?'<span style="color:var(--accent);">📅 Est. Tiba: <b>'+fmt(x.gudang||x.eta)+'</b></span>':'');
  const col=getStatusColor(x.status)||'#64748b';
  return '<div onclick="aiOpenDetail('+x.id+')" style="display:flex;flex-direction:column;gap:3px;padding:8px 10px;margin:3px 0;border-radius:8px;border:1px solid var(--border2);background:var(--surface2);cursor:pointer;" onmouseover="this.style.borderColor=\'var(--accent)\'" onmouseout="this.style.borderColor=\'var(--border2)\'">'
    +'<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">'
    +'<span style="font-size:11px;font-weight:700;color:var(--accent);">'+x.po+'</span>'
    +'<span style="font-size:10px;font-weight:700;color:'+col+';background:'+col+'18;padding:2px 8px;border-radius:10px;">'+(x.status||'—')+'</span></div>'
    +'<div style="font-size:12px;font-weight:600;">'+x.item+'</div>'
    +'<div style="display:flex;gap:8px;flex-wrap:wrap;font-size:11px;color:var(--muted);">'
    +(x.container?'<span>📦 '+x.container+'</span>':'')+(x.supplier?'<span>🏭 '+x.supplier+'</span>':'')
    +dateLabel+(extra?extra:'')+'</div></div>';
}
function aiOpenDetail(id){switchPage('shipment',document.getElementById('nav-shipment'));setTimeout(()=>openDetail(id),150);_aiOpen=false;document.getElementById('aiChat').classList.remove('open');}

function aiQuery(q){
  const s=shipments;
  const today=new Date();today.setHours(0,0,0,0);
  const tq=q.toLowerCase().trim();
  const fmt=d=>{if(!d)return'—';const p=d.split('-');return p.length===3?p[2]+'/'+p[1]+'/'+p[0]:d;};
  const fmtR=v=>'¥'+Math.round(parseFloat(v||0)).toLocaleString('id-ID');
  const daysDiff=(a,b)=>Math.round((new Date(a)-new Date(b))/86400000);
  const getLate=()=>s.filter(x=>{if(['Delivered','Cleared'].includes(x.status))return false;const r=x.gudang||x.eta;return r&&today>new Date(r);});
  const getDL=x=>{const r=x.gudang||x.eta;return r?daysDiff(today,new Date(r)):0;};
  const H=t=>t.replace(/[*][*](.*?)[*][*]/g,'<strong>$1</strong>');
  const clickHint='<br><small style="color:var(--muted);">Klik untuk buka detail</small>';
  const DAY=86400000;
  const avgA=arr=>arr.length?Math.round(arr.reduce((a,b)=>a+b,0)/arr.length):null;
  const allSuppliers=[...new Set(s.map(x=>x.supplier).filter(Boolean))];
  const allForwarders=[...new Set(s.map(x=>x.forwarder).filter(Boolean))];
  const allItems=[...new Set(s.map(x=>x.item).filter(Boolean))];
  const allTags=[...new Set(s.flatMap(x=>x.tags||[]).filter(Boolean))];
  const allContainers=[...new Set(s.map(x=>x.container).filter(Boolean))];
  const allPOs=[...new Set(s.map(x=>x.po).filter(Boolean))];
  function findEntity(q){const ql=q.toLowerCase();for(const sup of allSuppliers)if(ql.includes(sup.toLowerCase()))return{type:'supplier',value:sup,list:s.filter(x=>x.supplier===sup)};for(const fwd of allForwarders)if(ql.includes(fwd.toLowerCase()))return{type:'forwarder',value:fwd,list:s.filter(x=>x.forwarder===fwd)};for(const tag of allTags)if(ql.includes(tag.toLowerCase()))return{type:'tag',value:tag,list:s.filter(x=>(x.tags||[]).includes(tag))};for(const item of allItems)if(ql.includes(item.toLowerCase()))return{type:'item',value:item,list:s.filter(x=>x.item===item)};for(const ctr of allContainers)if(ql.includes(ctr.toLowerCase()))return{type:'container',value:ctr,list:s.filter(x=>x.container===ctr)};for(const po of allPOs)if(ql.includes(po.toLowerCase()))return{type:'po',value:po,list:s.filter(x=>x.po===po)};return null;}
  function calcLTFromList(list){const r={prod:[],ship:[],total:[]};list.forEach(x=>{const tp=parseSD(x.tgl_production),ts=parseSD(x.stuffing),te=parseSD(x.etd),td=x.deliveredDate?parseSD(x.deliveredDate):null;if(tp&&ts){const d=Math.round((ts-tp)/DAY);if(d>0&&d<365)r.prod.push(d);}if((ts||te)&&td){const d=Math.round((td-(ts||te))/DAY);if(d>0&&d<365)r.ship.push(d);}if(tp&&td){const d=Math.round((td-tp)/DAY);if(d>0&&d<730)r.total.push(d);}});return r;}
  function entitySummary(ent){const list=ent.list;const val=list.reduce((a,x)=>a+parseFloat(x.value||0),0);const sc={};list.forEach(x=>sc[x.status]=(sc[x.status]||0)+1);const lt=calcLTFromList(list);const late=list.filter(x=>{if(['Delivered','Cleared'].includes(x.status))return false;const r=x.gudang||x.eta;return r&&today>new Date(r);});let text=`📊 **${ent.type}: ${ent.value}**\n\n📦 Total: **${list.length} PO** | 💰 Nilai: **${fmtR(val)}**\n📊 Status: ${Object.entries(sc).map(([k,v])=>k+': '+v).join(' · ')}\n`;if(late.length)text+=`⚠️ Terlambat: **${late.length} PO**\n`;text+=`\n⏱ Lead Time:\n  🏭 Produksi: **${avgA(lt.prod)||'—'} hari**\n  🚢 Pengiriman: **${avgA(lt.ship)||'—'} hari**\n  📋 Total: **${avgA(lt.total)||'—'} hari**`;return text;}
  if(/rangkum|ringkas|summary|rekap|overview/.test(tq)){const aktif=s.filter(x=>!['Delivered','Cleared'].includes(x.status));const late=getLate();const tot=s.reduce((a,x)=>a+parseFloat(x.value||0),0);const sc={};s.forEach(x=>sc[x.status||'—']=(sc[x.status||'—']||0)+1);return{html:false,text:'📊 **Rangkuman Shipment**\n\nTotal PO: **'+s.length+'** | Aktif: **'+aktif.length+'**\n\n**Status:**\n'+Object.entries(sc).map(([k,v])=>'• '+k+': '+v+' PO').join('\n')+'\n\n⚠️ Terlambat: **'+late.length+' PO**\n💰 Total nilai: **'+fmtR(tot)+'**'};}
  if(/terlambat|overdue|lewat|delay/.test(tq)){const late=getLate().sort((a,b)=>getDL(b)-getDL(a));if(!late.length)return{html:false,text:'✅ Tidak ada shipment yang terlambat.'};const rows=late.slice(0,12).map(x=>aiShipRow(x,'<span style="color:var(--red);font-weight:600;">⏱ '+getDL(x)+' hari</span>'));return{html:true,text:H('⚠️ **'+late.length+' Shipment Terlambat**')+clickHint+'<div style="margin-top:8px;">'+rows.join('')+'</div>';};}
  if(/eta|tiba|datang|arrival|akan tiba/.test(tq)&&!/bandingkan|vs/.test(tq)){const days=/([0-9]+)\s*hari/.test(tq)?parseInt(tq.match(/([0-9]+)\s*hari/)[1]):7;const near=s.filter(x=>{const e=x.eta?new Date(x.eta):null;if(!e)return false;const d=daysDiff(e,today);return d>=0&&d<=days&&!['Delivered','Cleared'].includes(x.status);}).sort((a,b)=>new Date(a.eta)-new Date(b.eta));if(!near.length)return{html:false,text:'📅 Tidak ada shipment ETA dalam '+days+' hari ke depan.'};const rows=near.map(x=>{const d=daysDiff(new Date(x.eta),today);return aiShipRow(x,'<span style="color:#2563eb;font-weight:600;">'+(d===0?'Hari ini!':d+' hari lagi')+'</span>');});return{html:true,text:H('📅 **'+near.length+' Shipment Tiba '+days+' Hari**')+clickHint+'<div style="margin-top:8px;">'+rows.join('')+'</div>';};}
  if(/nilai|total harga|value|rmb/.test(tq)&&!findEntity(tq)){const tot=s.reduce((a,x)=>a+parseFloat(x.value||0),0);return{html:false,text:'💰 **Total Nilai**: '+fmtR(tot)+' ('+s.length+' PO)'};}
  const entity=findEntity(tq);
  if(entity){if(/rata|average|waktu|lead|berapa hari/.test(tq)){const lt=calcLTFromList(entity.list);return{html:false,text:'⏱ **Lead Time: '+entity.value+'**\n\n🏭 Produksi: **'+(avgA(lt.prod)||'—')+' hari**\n🚢 Pengiriman: **'+(avgA(lt.ship)||'—')+' hari**\n📋 Total: **'+(avgA(lt.total)||'—')+' hari**'};}return{html:false,text:entitySummary(entity)};}
  const kw=tq.replace(/cari|search|tampilkan|lihat/g,'').trim();
  if(kw.length>1){const res=s.filter(x=>[x.po,x.container,x.item,x.supplier,x.forwarder,...(x.tags||[])].some(f=>f&&f.toLowerCase().includes(kw)));if(res.length){const rows=res.slice(0,10).map(x=>aiShipRow(x,''));return{html:true,text:H('🔍 **'+res.length+' hasil untuk "'+kw+'"**')+clickHint+'<div style="margin-top:8px;">'+rows.join('')+'</div>'};}}
  return{html:false,text:'Maaf, belum mengerti. Coba: "rangkuman", "yang terlambat", "tiba 7 hari", atau nama supplier/forwarder/PO.'};
}

async function aiSend(){
  if(_aiLoading)return;
  const inp=document.getElementById('aiInp');const text=inp.value.trim();if(!text)return;
  inp.value='';inp.style.height='auto';
  document.getElementById('aiSendBtn').disabled=true;
  document.getElementById('aiChips').style.display='none';
  aiAddMsg('user',text);_aiHist.push({role:'user',content:text});_aiLoading=true;
  const el=document.getElementById('aiMsgs');
  const td=document.createElement('div');td.className='ai-msg bot';td.id='aiTyping';
  td.innerHTML='<div class="ai-msg-av">🤖</div><div class="ai-bbl"><div class="ai-dot-wrap"><div class="ai-dot"></div><div class="ai-dot"></div><div class="ai-dot"></div></div></div>';
  el.appendChild(td);el.scrollTop=el.scrollHeight;
  await new Promise(r=>setTimeout(r,260));
  document.getElementById('aiTyping')?.remove();
  const result=aiQuery(text);
  const replyText=result?.text||String(result);const replyHtml=result?.html||false;
  aiAddMsg('bot',replyText,replyHtml);
  _aiHist.push({role:'assistant',content:replyText});
  _aiLoading=false;document.getElementById('aiSendBtn').disabled=false;
}

// ── Bottom Nav / Mobile ──
function bnavSet(page){document.querySelectorAll('.bnav-item').forEach(b=>b.classList.remove('active'));const el=document.getElementById('bnav-'+page);if(el)el.classList.add('active');}
function toggleMobileSidebar(){const sb=document.getElementById('sidebar');const ov=document.getElementById('sidebarOverlay');const isOpen=sb.classList.contains('mobile-open');if(isOpen){sb.classList.remove('mobile-open');if(ov)ov.classList.remove('show');}else{sb.classList.add('mobile-open');if(ov)ov.classList.add('show');}}

// ── Scroll & Init ──
document.addEventListener('DOMContentLoaded',function(){
  const tw=document.getElementById('tableWrap');
  if(tw)tw.addEventListener('wheel',e=>{if(e.shiftKey){e.preventDefault();tw.scrollLeft+=e.deltaY;}},{passive:false});
  document.addEventListener('click',e=>{if(notifPanelOpen&&!document.getElementById('notifPanel').contains(e.target)&&!document.getElementById('notifBtn').contains(e.target)){notifPanelOpen=false;document.getElementById('notifPanel').classList.remove('open');}});
  document.getElementById('topbarAction').style.display='none';
  const topbarPasteBtn=document.getElementById('topbarPaste');if(topbarPasteBtn)topbarPasteBtn.style.display='none';
  const checkDupInit=document.getElementById('checkDupBtn');if(checkDupInit)checkDupInit.style.display='none';
  applySidebar();
  checkSession();
});
