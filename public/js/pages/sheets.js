// ── Google Sheets Integration ──
async function loadSheetsStatus(){
  const box=document.getElementById('sheetsStatusBox');if(!box)return;
  if(!box.innerHTML) box.innerHTML='<span style="font-size:12px;color:var(--muted);">Memuat status...</span>';
  let data;try{data=await api('GET','/api/sheets/status');}catch(e){data=null;}
  if(!data){box.innerHTML='<span style="font-size:12px;color:var(--muted);">Belum pernah sync.</span>';return;}
  const urlInput=document.getElementById('sheetsWebAppUrl');
  const pushInput=document.getElementById('sheetsPushUrl');
  if(urlInput) urlInput.value=data.webAppUrl||'';
  if(pushInput) pushInput.value=data.pushUrl||'';
  const lastSync=data.lastSync?new Date(data.lastSync).toLocaleString('id-ID',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}):'Belum pernah';
  const lr=data.lastResult;
  box.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;">
      <div style="background:var(--surface2);border-radius:var(--radius-sm);padding:10px 12px;">
        <div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px;">Sync Terakhir</div>
        <div style="font-size:12px;font-weight:500;">${lastSync}</div>
      </div>
      <div style="background:var(--surface2);border-radius:var(--radius-sm);padding:10px 12px;">
        <div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px;">Hasil</div>
        <div style="font-size:12px;font-weight:500;color:var(--accent);">${lr?`+${lr.added} baru, ~${lr.updated} update`:'—'}</div>
      </div>
    </div>`;
}

async function saveSheetsUrl(){
  const url=(document.getElementById('sheetsWebAppUrl')||{}).value?.trim();
  if(!url){showToast('warn','URL kosong','Isi URL sumber dulu.');return;}
  const data=await api('POST','/api/sheets/save-url',{url});
  if(data?.success)showToast('info','URL Sumber tersimpan','');
}

async function savePushUrl(){
  const url=(document.getElementById('sheetsPushUrl')||{}).value?.trim()||'';
  const data=await api('POST','/api/sheets/save-push-url',{url});
  if(data?.success)showToast('info','URL Tujuan tersimpan','');
}

async function testSheetsConnection(){
  const url=(document.getElementById('sheetsWebAppUrl')||{}).value?.trim();
  if(!url){showToast('warn','URL kosong','Isi URL sumber dulu.');return;}
  const msg=document.getElementById('pullStatusMsg');
  if(msg) msg.innerHTML='<span style="color:var(--muted);">🔌 Menguji koneksi...</span>';
  try{
    const testUrl=url+(url.includes('?')?'&':'?')+'action=status';
    const resp=await fetch(testUrl);const data=await resp.json();
    if(data.success){
      const ok=data.sheets?.filter(s=>s.rows>0)||[];const skip=data.sheets?.filter(s=>s.rows===0)||[];
      if(msg) msg.innerHTML=`<span style="color:var(--green);">✓ Terhubung! <strong>${data.title}</strong><br>${ok.length} sheet aktif: ${ok.map(s=>`${s.name}(${s.rows})`).join(', ')}<br>${skip.length} kosong: ${skip.map(s=>s.name).join(', ')}</span>`;
    }else{if(msg) msg.innerHTML=`<span style="color:var(--red);">✗ ${data.error}</span>`;}
  }catch(e){if(msg) msg.innerHTML=`<span style="color:var(--red);">✗ ${e.message}</span>`;}
}

async function pullOnly(){
  const url=(document.getElementById('sheetsWebAppUrl')||{}).value?.trim();
  if(url) await api('POST','/api/sheets/save-url',{url});
  const msg=document.getElementById('pullStatusMsg');
  if(msg) msg.innerHTML='<span style="color:var(--muted);">⏳ Menarik data...</span>';
  const data=await api('POST','/api/sheets/pull');
  if(!data||data.error){if(msg) msg.innerHTML=`<span style="color:var(--red);">✗ ${data?.error||'Gagal'}</span>`;return;}
  if(msg) msg.innerHTML=`<span style="color:var(--green);">✓ +${data.added} baru, ~${data.updated} update</span>`;
  showToast('info','Data ditarik!',`+${data.added} baru, ~${data.updated} update`);
  await loadData();
}

async function pushOnly(){
  const url=(document.getElementById('sheetsPushUrl')||{}).value?.trim();
  if(url) await api('POST','/api/sheets/save-push-url',{url});
  const msg=document.getElementById('pullStatusMsg');
  if(msg) msg.innerHTML='<span style="color:var(--muted);">⏳ Mengirim ke Sheets...</span>';
  const data=await api('POST','/api/sheets/push');
  if(!data||data.error){if(msg) msg.innerHTML=`<span style="color:var(--red);">✗ ${data?.error||'Gagal'}</span>`;return;}
  if(data?.skipped){if(msg) msg.innerHTML=`<span style="color:var(--yellow);">⚠️ ${data.message||'URL tujuan belum diisi'}</span>`;showToast('warn','Push dilewati',data.message||'URL tujuan belum diisi');return;}
  if(msg) msg.innerHTML=`<span style="color:var(--green);">✓ ${data.count} shipment dikirim ke Sheets</span>`;
  showToast('info','Push selesai!',`${data.count} shipment dikirim`);
}

async function quickSync(){
  const url=(document.getElementById('sheetsPushUrl')||{}).value?.trim();
  if(url) await api('POST','/api/sheets/save-push-url',{url});
  const btn=document.getElementById('quickSyncBtn');
  if(btn){btn.disabled=true;btn.textContent='⏳';btn.classList.add('syncing');}
  try{
    const pullData=await api('POST','/api/sheets/pull');
    if(!pullData||pullData.error){showToast('warn','Pull gagal',pullData?.error||'Cek URL sumber di menu Integrasi Sheets');if(btn){btn.disabled=false;btn.textContent='🔄';btn.classList.remove('syncing');}return;}
    await loadData();
    const pushData=await api('POST','/api/sheets/push');
    if(pushData?.skipped){showToast('info','Sync selesai',`Pull: +${pullData.added} baru ~${pullData.updated} update. Push: URL tujuan belum diisi.`);}
    else if(pushData?.count!==undefined){showToast('info','Sync lengkap ✓',`Pull: +${pullData.added} baru · Push: ${pushData.count} ke Sheets`);}
  }catch(e){showToast('warn','Error',e.message);}
  if(btn){btn.disabled=false;btn.textContent='🔄';btn.classList.remove('syncing');}
}

async function pullFromSheets(){await pullOnly();}

function copyText(inputId){
  const el=document.getElementById(inputId);if(!el)return;
  el.select();document.execCommand('copy');
  showToast('info','Disalin!',el.value.substring(0,60)+(el.value.length>60?'…':''));
}

// ── Sync Modal ──
async function syncToSheets(){
  const sel=getSelIds();if(!sel.length){showToast('warn','Pilih dulu','Pilih shipment yang ingin disync.');return;}
  document.getElementById('syncList').innerHTML=sel.map(id=>{const s=shipments.find(x=>x.id===id);return s?`<div style="padding:4px 0;font-size:12px;">${s.po} — ${s.item}</div>`:''}).join('');
  document.getElementById('syncOverlay').classList.add('open');
}
function closeSyncModal(){document.getElementById('syncOverlay').classList.remove('open');}
async function doSync(){
  const url=document.getElementById('syncUrlInput')?.value?.trim()||(typeof SHEETS_URL!=='undefined'?SHEETS_URL:'');
  if(!url){showToast('warn','URL kosong','Isi URL Google Sheets terlebih dahulu.');return;}
  const sel=getSelIds();const data=sel.map(id=>shipments.find(s=>s.id===id)).filter(Boolean);
  const r=await fetch(url,{method:'POST',body:JSON.stringify(data)}).then(r=>r.json()).catch(e=>({error:e.message}));
  closeSyncModal();
  if(r?.success||r?.result)showToast('info','Sync berhasil!',`${data.length} shipment dikirim.`);
  else showToast('warn','Gagal sync',r?.error||'Terjadi kesalahan.');
}

// ── Check Duplicate from Sheets ──
async function openCheckDup(){
  document.getElementById('checkDupOverlay').classList.add('open');
  document.getElementById('orphanList').innerHTML='<div style="color:var(--muted);font-size:13px;padding:16px;">Memuat data...</div>';
  const data=await api('GET','/api/sheets/orphans');
  if(!data||data.error){document.getElementById('orphanList').innerHTML=`<div style="color:var(--red);padding:16px;">Error: ${data?.error||'Gagal memuat'}</div>`;return;}
  renderOrphanList(data);
}
function renderOrphanList(data){
  const box=document.getElementById('orphanList');
  if(!data.length){box.innerHTML='<div style="color:var(--green);padding:16px;text-align:center;">✓ Tidak ada duplikat atau data yatim.</div>';return;}
  box.innerHTML=data.map((o,i)=>`<div style="padding:8px 0;border-bottom:1px solid var(--border2);display:flex;gap:8px;align-items:center;">
    <div style="flex:1;min-width:0;"><div style="font-size:13px;font-weight:600;">${o.po}</div><div style="font-size:11px;color:var(--muted);">${o.item||'—'} · ${o.container||'—'}</div></div>
    <button class="btn btn-sm" onclick="keepOrphan(${i})">Simpan</button>
    <button class="btn btn-sm btn-danger" onclick="deleteOrphan(${i})">Hapus</button>
  </div>`).join('');
}
function closeCheckDup(){document.getElementById('checkDupOverlay').classList.remove('open');}
async function deleteOrphan(i){await api('DELETE','/api/sheets/orphan/'+i);openCheckDup();}
async function keepOrphan(i){await api('POST','/api/sheets/orphan/keep/'+i);openCheckDup();}
async function deleteAllOrphans(){if(!confirm('Hapus semua?'))return;await api('DELETE','/api/sheets/orphans/all');openCheckDup();}
async function keepAllOrphans(){await api('POST','/api/sheets/orphans/keep-all');openCheckDup();}

// ── Paste Excel ──
const FD=[{key:'po',labels:['no po','no. po','po','nomor po']},{key:'supplier',labels:['supplier','vendor','pemasok']},{key:'item',labels:['item','deskripsi','barang','goods']},{key:'qty',labels:['qty','quantity','jumlah']},{key:'value',labels:['nilai','value','harga','rmb','cny','usd']},{key:'container',labels:['kontainer','container','no kontainer']},{key:'tgl_production',labels:['produksi','tgl produksi','tanggal pesan','production']},{key:'stuffing',labels:['stuffing','tgl stuffing']},{key:'etd',labels:['etd','tgl berangkat','departure']},{key:'eta',labels:['eta','tgl tiba','arrival']},{key:'status',labels:['status']},{key:'forwarder',labels:['forwarder','emkl']},{key:'tags',labels:['tags','tag','brand']},{key:'notes',labels:['catatan','notes','keterangan']},{key:'gudang',labels:['est. tiba','est tiba','est. tiba gudang','estimasi tiba']},{key:'deliveredDate',labels:['tgl datang','tanggal datang','tgl tiba gudang','delivered']}];
const FL={po:'No. PO',supplier:'Supplier',item:'Item',qty:'Qty',value:'Nilai (RMB)',container:'Kontainer',tgl_production:'Produksi',stuffing:'Stuffing',etd:'ETD',eta:'ETA',status:'Status',forwarder:'Forwarder',tags:'Tags',notes:'Catatan',gudang:'Est. Tiba',deliveredDate:'Tgl Datang'};

function openPaste(){if(!guardAdmin())return;document.getElementById('pasteInput').value='';document.getElementById('detectInfo').innerHTML='';document.getElementById('nextBtn1').disabled=true;parsedRows=[];parsedHeaders=[];colMapping={};showTab(1);document.getElementById('pasteOverlay').classList.add('open');}
function closePaste(){document.getElementById('pasteOverlay').classList.remove('open');}
function showTab(n){[1,2,3].forEach(i=>{document.getElementById('tab'+i).classList.toggle('active',i===n);document.getElementById('panel'+i).classList.toggle('active',i===n);});if(n===2)buildColMap();}
function detectCols(){
  const raw=document.getElementById('pasteInput').value.trim();
  if(!raw){document.getElementById('detectInfo').innerHTML='';document.getElementById('nextBtn1').disabled=true;return;}
  const rows=raw.split('\n').filter(l=>l.trim()).map(l=>l.split('\t').map(c=>c.trim().replace(/^"|"$/g,'')));
  const firstRowStr=rows[0].join(' ').toLowerCase();
  const headerKeywords=['no. po','no po','item','qty','status','supplier','forwarder','kontainer','produksi','stuffing','etd','eta'];
  const looksLikeHeader=headerKeywords.some(k=>firstRowStr.includes(k));
  if(looksLikeHeader){parsedHeaders=rows[0];parsedRows=rows.slice(1).filter(r=>r.some(c=>c));}
  else{parsedHeaders=['PO','Item','Qty','Nilai (RMB)','Supplier','Kontainer','Forwarder','Produksi','Stuffing','ETD','ETA','Est. Tiba','Tgl Datang','Status','Tags','INV','PL','DO','PIB','LS','Catatan'];parsedRows=rows.filter(r=>r.some(c=>c));}
  colMapping={};
  parsedHeaders.forEach((h,i)=>{const hl=h.toLowerCase().trim();for(const fd of FD){if(fd.labels.some(l=>hl===l||hl.includes(l)||l.includes(hl))){if(!Object.values(colMapping).includes(i)){colMapping[fd.key]=i;break;}}}});
  const hasHeader=looksLikeHeader?'':'<span style="color:var(--yellow);font-size:11px;"> (header tidak terdeteksi — urutan kolom export digunakan)</span>';
  document.getElementById('detectInfo').innerHTML=`<span style="color:var(--green);">✓ ${parsedRows.length} baris</span> · <span style="color:var(--muted);">${Object.keys(colMapping).length} kolom dikenali</span>`+hasHeader;
  document.getElementById('nextBtn1').disabled=parsedRows.length===0;
}
function buildColMap(){document.getElementById('colMapGrid').innerHTML=FD.map(fd=>`<div class="col-map-row"><span class="col-map-label">${FL[fd.key]}</span><select class="col-map-select" id="map_${fd.key}" onchange="updatePreview()"><option value="">— Lewati —</option>${parsedHeaders.map((h,i)=>`<option value="${i}" ${colMapping[fd.key]===i?'selected':''}>${h||'Kolom '+(i+1)}</option>`).join('')}</select></div>`).join('');updatePreview();}
function updatePreview(){const fields=FD.map(fd=>({key:fd.key,col:parseInt(document.getElementById('map_'+fd.key).value)})).filter(f=>!isNaN(f.col));const tbl=document.getElementById('previewTable');if(!fields.length){tbl.innerHTML='';return;}tbl.innerHTML=`<thead><tr>${fields.map(f=>`<th>${FL[f.key]}</th>`).join('')}</tr></thead><tbody>${parsedRows.slice(0,3).map(r=>`<tr>${fields.map(f=>`<td>${r[f.col]||'—'}</td>`).join('')}</tr>`).join('')}</tbody>`;}
function pDate(s){if(!s)return'';let m=s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})$/);if(m){const y=m[3].length===2?'20'+m[3]:m[3];return`${y}-${m[2].padStart(2,'0')}-${m[1].padStart(2,'0')}`;}m=s.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})$/);if(m)return`${m[1]}-${m[2].padStart(2,'0')}-${m[3].padStart(2,'0')}`;const n=parseInt(s);if(!isNaN(n)&&n>40000&&n<60000){const d=new Date((n-25569)*86400*1000);return d.toISOString().split('T')[0];}return'';}
function mStatus(s){const sl=(s||'').toLowerCase();const found=masterStatuses.find(ms=>ms.name.toLowerCase().includes(sl)||sl.includes(ms.name.toLowerCase()));return found?found.name:'Stuffing';}
function pTags(raw){if(!raw)return[];return raw.split(/[,;|]+/).map(t=>t.trim().toUpperCase()).filter(t=>masterTags.includes(t));}
function runImport(){
  if(!guardAdmin('Hanya admin.'))return;
  const gC=key=>{const v=document.getElementById('map_'+key).value;return v===''?null:parseInt(v);};
  let ok=0,skip=0;
  const imported=parsedRows.map((row,ri)=>{
    const get=key=>{const c=gC(key);return c!==null?(row[c]||'').trim():'';};
    const po=get('po'),supplier=get('supplier');if(!po&&!supplier){skip++;return null;}ok++;
    const etd=pDate(get('etd'))||get('etd'),eta=pDate(get('eta'))||get('eta'),container=get('container');
    const obj={id:Date.now()+ri,po:po||'',supplier:supplier||'',item:get('item')||'',qty:get('qty'),value:parseFloat(get('value').replace(/[^0-9.]/g,''))||'',container,stuffing:pDate(get('stuffing'))||get('stuffing'),etd,eta,gudang:pDate(get('gudang'))||calcGudang(po,eta,container),deliveredDate:pDate(get('deliveredDate'))||'',tgl_production:pDate(get('tgl_production'))||get('tgl_production'),status:mStatus(get('status')),forwarder:get('forwarder'),tags:mergeTags(po,pTags(get('tags'))),docs:{invoice:false,pl:false,do:false,pib:false,ls:false},notes:get('notes')};
    obj.status=calcAutoStatus(obj);return obj;
  }).filter(Boolean);
  shipments=[...imported,...shipments];save();render();
  document.getElementById('importResult').innerHTML=`<div style="text-align:center;padding:20px;"><div style="font-size:34px;margin-bottom:10px;">✅</div><div style="font-size:15px;font-weight:600;margin-bottom:8px;">Import Berhasil!</div><div style="display:flex;justify-content:center;gap:8px;"><span style="background:var(--green-dim);color:var(--green);font-size:12px;padding:2px 10px;border-radius:20px;">${ok} baris</span>${skip?`<span style="background:var(--yellow-dim);color:var(--yellow);font-size:12px;padding:2px 10px;border-radius:20px;">${skip} dilewati</span>`:''}</div></div>`;
  showTab(3);
}
