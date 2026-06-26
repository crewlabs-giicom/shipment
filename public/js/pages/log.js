// ── Log Page ──
let _logPage=0;
async function loadUnifiedLog(){
  const q=(document.getElementById('logSearch')?.value||'').toLowerCase();
  const src=document.getElementById('logSourceFilter')?.value||'';
  const box=document.getElementById('unifiedLogList');if(!box)return;
  box.innerHTML='<div style="text-align:center;padding:20px;color:var(--muted);">Memuat...</div>';
  const [logsData,changesData]=await Promise.all([api('GET','/api/logs?limit=200'),api('GET','/api/changelog?limit=500')]);
  const logs=(logsData||[]).map(l=>({type:'log',time:l.time,action:l.action,detail:l.detail,user:l.name||l.user||'system',username:l.user||'system'}));
  const cArr=changesData?.data||changesData||[];
  const changes=cArr.map(c=>({type:'change',time:c.time,source:c.source,po:c.po||'',item:c.item||'',user:c.user||'system',changes:c.changes||[],shipId:c.shipId}));
  let all=[...logs,...changes].sort((a,b)=>new Date(b.time)-new Date(a.time));
  if(src==='user') all=all.filter(e=>e.type==='log'&&['ADD_USER','DELETE_USER','CHANGE_PWD','UPDATE_USER'].includes(e.action));
  else if(src) all=all.filter(e=>e.type==='change'&&e.source===src);
  if(q) all=all.filter(e=>{
    if(e.type==='log')return(e.detail||'').toLowerCase().includes(q);
    return(e.po||'').toLowerCase().includes(q)||(e.item||'').toLowerCase().includes(q)||(e.changes||[]).some(c=>(c.field||'').toLowerCase().includes(q));
  });
  const cTimes=new Set();changes.forEach(c=>{const t=Math.round(new Date(c.time).getTime()/1000);for(let d=-2;d<=2;d++)cTimes.add(t+d);});
  const deduped=all.filter(e=>{
    if(e.type==='log'&&['SINGLE_EDIT','UPDATE_SHIP','DELETE_SHIP','ADD_SHIP'].includes(e.action))return!cTimes.has(Math.round(new Date(e.time).getTime()/1000));
    return true;
  });
  const limit=50,total=deduped.length,paged=deduped.slice(_logPage*limit,(_logPage+1)*limit);
  const icons={ADD_USER:'👤',UPDATE_USER:'✏️',DELETE_USER:'🗑️',CHANGE_PWD:'🔑',BULK_SAVE:'💾',BULK_EDIT:'📝',SHEETS_PULL:'📥',SHEETS_PUSH:'📤',DELETE_ALL:'⚠️',ADD_SHIP:'➕',SINGLE_EDIT:'✏️',AUTO_SYNC_PUSH:'📤'};
  const srcLabel={sync:'🔄 Sync',edit:'✏️ Edit',auto_status:'⚡ Auto','new':'➕ Baru',delete:'🗑️ Hapus'};
  const srcColor={sync:'#2563eb',edit:'#0891b2',auto_status:'#ca8a04','new':'#16a34a',delete:'#dc2626'};
  const fldLabel={po:'PO',item:'Item',qty:'Qty',value:'Nilai',container:'Kontainer',supplier:'Supplier',forwarder:'Forwarder',status:'Status',stuffing:'Stuffing',etd:'ETD',eta:'ETA',tgl_production:'Produksi',deliveredDate:'Tgl Datang',gudang:'Est. Tiba',tags:'Tags',notes:'Catatan'};
  const fmtT=t=>{const d=new Date(t);return d.toLocaleDateString('id-ID',{day:'2-digit',month:'2-digit',year:'2-digit'})+' '+d.toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'});};
  if(!paged.length){box.innerHTML='<div style="text-align:center;padding:30px;color:var(--muted);">Tidak ada data.</div>';document.getElementById('logPager').innerHTML='';return;}
  box.innerHTML=paged.map((e,idx)=>{
    if(e.type==='log'){
      const ic=icons[e.action]||'📝';const actColor=(['DELETE_SHIP','DELETE_ALL','DELETE_USER'].includes(e.action))?'var(--red-dim)':(['ADD_SHIP','ADD_USER','BULK_SAVE'].includes(e.action))?'var(--green-dim)':'var(--accent-dim)';
      return`<div style="display:flex;gap:10px;padding:10px 8px;border-bottom:1px solid var(--border2);align-items:flex-start;">
        <div style="width:30px;height:30px;border-radius:8px;background:${actColor};display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">${ic}</div>
        <div style="flex:1;min-width:0;"><div style="font-size:13px;font-weight:500;">${e.user} <span style="font-weight:400;color:var(--muted);">@${e.username}</span></div><div style="font-size:12px;color:var(--muted);margin-top:2px;">${e.detail}</div></div>
        <div style="font-size:11px;color:var(--muted);white-space:nowrap;">${fmtT(e.time)}</div>
      </div>`;
    }
    const sl=srcLabel[e.source]||e.source;const col=srcColor[e.source]||'var(--muted)';const uid='cl_'+_logPage+'_'+idx;
    const isND=e.changes.some(c=>c.field==='_new'||c.field==='_delete');
    const summary=isND?(e.changes[0].field==='_new'?'Shipment baru':'Shipment dihapus'):e.changes.map(c=>fldLabel[c.field]||c.field).join(', ');
    const detHtml=e.changes.filter(c=>c.field!=='_new'&&c.field!=='_delete').map(c=>
      `<div style="display:flex;gap:6px;align-items:center;padding:2px 0;font-size:12px;"><span style="min-width:70px;color:var(--muted);font-weight:600;">${fldLabel[c.field]||c.field}</span><span style="color:var(--red);text-decoration:line-through;font-size:11px;">${c.from||'—'}</span><span style="color:var(--muted);">→</span><span style="color:var(--green);font-weight:500;font-size:11px;">${c.to||'—'}</span></div>`).join('');
    return`<div style="border-bottom:1px solid var(--border2);padding:10px 8px;${e.shipId&&e.source!=='delete'?'cursor:pointer;':''}">
      <div style="display:flex;gap:10px;align-items:flex-start;" ${e.shipId&&e.source!=='delete'?`onclick="openDetail(${e.shipId})"`:''}>
        <div style="width:30px;height:30px;border-radius:8px;background:${col}18;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span style="font-size:11px;font-weight:700;color:${col};">${sl.split(' ')[0]}</span></div>
        <div style="flex:1;min-width:0;">
          <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:13px;font-weight:600;color:var(--accent);">${e.po} <span style="font-weight:400;color:var(--text);">${e.item||''}</span></span><span style="font-size:11px;color:var(--muted);">${fmtT(e.time)}</span></div>
          <div style="font-size:12px;color:var(--muted);margin-top:2px;">${summary} · ${e.user}</div>
        </div>
      </div>
      ${detHtml?`<div style="margin:6px 0 0 40px;padding:6px 10px;background:var(--surface2);border-radius:6px;">${detHtml}</div>`:''}
    </div>`;
  }).join('');
  const tp=Math.ceil(total/limit);
  document.getElementById('logPager').innerHTML=tp>1?`<button class="btn btn-sm" ${_logPage<=0?'disabled':''} onclick="_logPage--;loadUnifiedLog()">◀</button> <span style="font-size:12px;color:var(--muted);">Hal ${_logPage+1}/${tp} (${total})</span> <button class="btn btn-sm" ${_logPage>=tp-1?'disabled':''} onclick="_logPage++;loadUnifiedLog()">▶</button>`:'';
}

async function loadLogs(){
  const data=await api('GET','/api/logs?limit=100');if(!data)return;
  const icons={ADD_USER:'👤',UPDATE_USER:'✏️',DELETE_USER:'🗑️',CHANGE_PWD:'🔑',BULK_SAVE:'💾',UPDATE_SHIP:'✏️',DELETE_SHIP:'🗑️',DELETE_ALL:'⚠️',ADD_SHIP:'➕',SINGLE_EDIT:'✏️',BULK_EDIT:'📝',SHEETS_PULL:'📥',AUTO_SYNC_PULL_FAIL:'❌',SHEETS_PUSH:'📤',AUTO_SYNC_PUSH:'📤',SHEETS_PUSH_QUEUE:'📤',SHEETS_PUSH_RESUBMIT:'🔁',SHEETS_PUSH_RESUBMIT_FAIL:'❌',SHEETS_IMPORT:'📥',SHEETS_RESET:'🔑',AUTO_SYNC_PUSH_FAIL:'❌'};
  const colors={ADD_USER:'var(--green-dim)',UPDATE_USER:'var(--accent-dim)',DELETE_USER:'var(--red-dim)',CHANGE_PWD:'var(--yellow-dim)',BULK_SAVE:'var(--green-dim)',UPDATE_SHIP:'var(--accent-dim)',DELETE_SHIP:'var(--red-dim)',DELETE_ALL:'var(--red-dim)',ADD_SHIP:'var(--green-dim)',SINGLE_EDIT:'var(--accent-dim)',BULK_EDIT:'var(--purple-dim)',SHEETS_PULL:'var(--accent-dim)',SHEETS_PUSH:'var(--accent-dim)',SHEETS_IMPORT:'var(--accent-dim)'};
  const list=document.getElementById('logList');
  if(!data.length){list.innerHTML='<div class="empty" style="padding:30px;"><div class="empty-icon">📋</div><div>Belum ada aktivitas</div></div>';return;}
  list.innerHTML=data.map(l=>`
    <div class="log-item">
      <div class="log-icon" style="background:${colors[l.action]||'var(--surface2)'};">${icons[l.action]||'📝'}</div>
      <div class="log-body"><div class="log-action">${l.name} <span style="font-weight:400;color:var(--muted);">(@${l.user})</span></div><div class="log-detail">${l.detail}</div></div>
      <div class="log-meta">${new Date(l.time).toLocaleString('id-ID',{day:'2-digit',month:'2-digit',year:'2-digit',hour:'2-digit',minute:'2-digit'})}</div>
    </div>`).join('');
}
