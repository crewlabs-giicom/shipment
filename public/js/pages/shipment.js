// ── Shipment Page ──

function statusBadge(status){
  if(!status)return'<span class="status-badge s-none">—</span>';
  const col=getStatusColor(status);
  const slug=status.toLowerCase().replace(/[^a-z0-9]/g,'-');
  const builtIn=['production','stuffing','sailed','arrived','delivered','cleared'];
  if(builtIn.includes(slug)){
    return`<span class="status-badge s-${slug}">${status}</span>`;
  }
  return`<span class="status-badge" style="background:${col}18;color:${col};border:1px solid ${col}40;"><span style="width:7px;height:7px;border-radius:50%;background:${col};display:inline-block;flex-shrink:0;"></span>${status}</span>`;
}

function render(){
  if(groupViewOn){renderGroupView();}
  renderStats();const list=getFiltered();renderTable(list);renderCards(list);
  const qs=document.getElementById('quickSummary');
  if(qs&&list.length){
    const totalVal=list.reduce((a,s)=>a+parseFloat(s.value||0),0);
    const etaDates=list.map(s=>parseSD(s.eta)).filter(Boolean).sort((a,b)=>a-b);
    const today=new Date();today.setHours(0,0,0,0);
    const upcoming=etaDates.filter(d=>d>=today);
    const nearestDays=upcoming.length?Math.round((upcoming[0]-today)/86400000):null;
    const lateCount=list.filter(s=>getAlertType(s)==='late').length;
    const statusCounts={};list.forEach(s=>{statusCounts[s.status]=(statusCounts[s.status]||0)+1;});
    const statusSummary=getStatusNames().filter(st=>statusCounts[st]).map(st=>`${st}: ${statusCounts[st]}`).join(' · ');
    qs.style.display='flex';
    qs.innerHTML=`
      <span>📦 <strong>${list.length}</strong> / ${shipments.length} shipment</span>
      <span>💰 ¥${Math.round(totalVal).toLocaleString()}</span>
      ${lateCount?`<span style="color:var(--red);">⚠️ ${lateCount} terlambat</span>`:''}
      ${nearestDays!==null?`<span>⏱ ETA terdekat: <strong>${nearestDays===0?'Hari ini':nearestDays+' hari lagi'}</strong></span>`:''}
      <span style="font-size:11px;">${statusSummary}</span>`;
  }else if(qs){qs.style.display='none';}
}

function renderTable(list){
  document.getElementById('tableHead').innerHTML=
    `<th style="width:36px;"><input type="checkbox" id="checkAll" onchange="toggleAll(this.checked)" style="cursor:pointer;accent-color:var(--accent);"></th>`
    +['No. PO','Item','Status','Produksi','Stuffing','ETD','ETA','Est. Tiba','Kontainer','Supplier','Forwarder','Alert','Komentar Terakhir'].map((c,i)=>
    `<th class="sortable ${i>3?'hide-lg':''} ${i===1?'hide-md':''}" onclick="setSortKey('${['po','item','status','tgl_production','stuffing','etd','eta','gudang','container','supplier','forwarder','_a','_c'][i]}')">${c}${si(['po','item','status','tgl_production','stuffing','etd','eta','gudang','container','supplier','forwarder','_a','_c'][i])}</th>`).join('')+'<th></th>';
  const tbody=document.getElementById('tableBody'),empty=document.getElementById('emptyState');
  if(!list.length){tbody.innerHTML='';empty.style.display='block';return;}empty.style.display='none';
  tbody.innerHTML=list.map(s=>{
    const d=getDelay(s),g=s.gudang||calcGudang(s.po,s.eta,s.container);
    const aTag='';
    const cTag='';
    const gs=getAlertType(s)==='late'?'color:var(--red);font-weight:500;':g?'color:var(--accent);font-weight:500;':'color:var(--muted);';
    const lc=lastCommentCache[s.id];
    const lcText=lc?`<span title="${esc(lc.text)}">${esc(lc.text.substring(0,50))}${lc.text.length>50?'…':''}</span>`:'';
    const isDone=['Delivered','Cleared'].includes(s.status);
    const smartDate=isDone?(s.deliveredDate||''):(g||'');
    const smartLabel=isDone&&s.deliveredDate?'Tgl Datang':'Est. Tiba';
    const smartStyle=isDone&&s.deliveredDate?'color:var(--green);font-weight:600;':(getAlertType(s)==='late'?'color:var(--red);font-weight:500;':g?'color:var(--accent);font-weight:500;':'color:var(--muted);');
    return`<tr id="row-${s.id}" class="${d.cls==='delay-late'?'overdue-row':''}">
      <td style="width:36px;min-width:36px;"><input type="checkbox" class="row-check" data-id="${s.id}" onchange="onRowCheck()" style="cursor:pointer;accent-color:var(--accent);"></td>
      <td class="td-po" onclick="openDetail(${s.id})" style="cursor:pointer;min-width:140px;">${esc(s.po)}${cTag}${aTag}</td>
      <td class="hide-md"><div class="td-item" title="${s.item||''}">${s.item||''}</div></td>
      <td class="editable" ondblclick="qeStatus(${s.id},this)">${statusBadge(s.status)}</td>
      <td class="hide-lg td-date editable" ondblclick="qeDate(${s.id},'tgl_production',this)" title="Dbl-click untuk edit">${s.tgl_production?fmtDate(s.tgl_production):'—'}</td>
      <td class="hide-lg td-date editable" ondblclick="qeDate(${s.id},'stuffing',this)" title="Dbl-click untuk edit">${fmtDate(s.stuffing)||'—'}</td>
      <td class="hide-lg td-date editable" ondblclick="qeDate(${s.id},'etd',this)" title="Dbl-click untuk edit">${fmtDate(s.etd)||'—'}</td>
      <td class="hide-lg td-date editable" ondblclick="qeDate(${s.id},'eta',this)" title="Dbl-click untuk edit">${fmtDate(s.eta)}</td>
      <td class="hide-lg td-date editable" ondblclick="qeDate(${s.id},isDone?'deliveredDate':'gudang',this)" title="${smartLabel} (dbl-click edit)" style="${smartStyle}" title="${smartLabel}">${fmtDate(smartDate)||'—'}</td>
      <td class="hide-lg" style="font-family:'Plus Jakarta Sans',sans-serif;font-size:11px;color:var(--text);">${s.container||'—'}</td>
      <td class="hide-lg" style="font-size:12px;max-width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${s.supplier||''}">${s.supplier||'—'}</td>
      <td class="hide-lg" style="font-size:12px;color:var(--text);max-width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${s.forwarder||'—'}</td>
      <td><span class="delay-badge ${d.cls}">${d.label}</span></td>
      <td class="td-comment">${lcText}</td>
      <td><div class="actions">
        <button class="btn btn-sm" onclick="openDetail(${s.id})">Detail</button>
        <button class="btn btn-sm admin-only" onclick="openEdit(${s.id})">Edit</button>
        <button class="btn btn-sm btn-danger admin-only" onclick="del(${s.id})">Hapus</button>
      </div></td>
    </tr>`;
  }).join('');
}

function renderCards(list){
  const grid=document.getElementById('cardGrid'),empty=document.getElementById('emptyCard');
  if(!list.length){grid.innerHTML='';empty.style.display='block';return;}empty.style.display='none';
  grid.innerHTML=list.map(s=>{
    const d=getDelay(s),g=s.gudang||calcGudang(s.po,s.eta,s.container);
    const tags=(s.tags||[]).map(t=>tagPill(t)).join('');
    const lc=lastCommentCache[s.id];
    const lcText=lc?`<div class="card-last-comment">💬 ${esc(lc.text.substring(0,70))}${lc.text.length>70?'…':''}</div>`:'';
    return`<div class="ship-card ${d.cls==='delay-late'?'overdue':''}" onclick="openDetail(${s.id})">
      <div class="card-po">${s.po}</div>
      <div class="card-item">${esc(s.item)}</div>
      <div style="display:flex;gap:6px;align-items:center;margin-bottom:8px;">${statusBadge(s.status)}<span class="delay-badge ${d.cls}">${d.label}</span></div>
      <div class="card-meta">
        ${s.tgl_production?`<div><div class="card-meta-lbl">Produksi</div><div class="card-meta-val">${fmtDate(s.tgl_production)}</div></div>`:''}
        <div><div class="card-meta-lbl">ETA</div><div class="card-meta-val">${fmtDate(s.eta)}</div></div>
        <div><div class="card-meta-lbl">${['Delivered','Cleared'].includes(s.status)&&s.deliveredDate?'Tgl Datang':'Est. Tiba'}</div><div class="card-meta-val">${['Delivered','Cleared'].includes(s.status)&&s.deliveredDate?fmtDate(s.deliveredDate):fmtDate(g)||'—'}</div></div>
        <div><div class="card-meta-lbl">Kontainer</div><div class="card-meta-val">${s.container||'—'}</div></div>
        <div><div class="card-meta-lbl">Forwarder</div><div class="card-meta-val">${s.forwarder||'—'}</div></div>
      </div>
      ${tags?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:6px;">${tags}</div>`:''}
      ${lcText}
      <div class="card-footer">
        <span style="font-size:12px;color:var(--muted);">${esc(s.supplier)}</span>
        <div onclick="event.stopPropagation();" class="admin-only"><button class="btn btn-sm" onclick="openEdit(${s.id})">Edit</button></div>
      </div>
    </div>`;
  }).join('');
}

// ── Group View ──
let groupViewOn=false;
function toggleGroupView(){
  groupViewOn=!groupViewOn;
  document.getElementById('grpToggle').classList.toggle('btn-primary',groupViewOn);
  if(groupViewOn){
    document.getElementById('viewTableEl').style.display='none';
    document.getElementById('viewCardEl').style.display='none';
    document.getElementById('viewGroupEl').style.display='block';
    renderGroupView();
  }else{
    document.getElementById('viewGroupEl').style.display='none';
    if(currentView==='table')document.getElementById('viewTableEl').style.display='block';
    else document.getElementById('viewCardEl').style.display='block';
  }
}
function renderGroupView(){
  const filtered=getFiltered();
  document.getElementById('viewGroupEl').style.display='block';
  document.getElementById('viewTableEl').style.display='none';
  document.getElementById('viewCardEl').style.display='none';
  const groups={};
  filtered.forEach(s=>{
    const ctr=s.container||'Tanpa Kontainer';
    if(!groups[ctr])groups[ctr]={items:[],etd:'',eta:'',status:'',tags:new Set()};
    groups[ctr].items.push(s);
    if(s.etd&&!groups[ctr].etd)groups[ctr].etd=s.etd;
    if(s.eta&&!groups[ctr].eta)groups[ctr].eta=s.eta;
    if(s.status)groups[ctr].status=s.status;
    (s.tags||[]).forEach(t=>groups[ctr].tags.add(t));
  });

  const el=document.getElementById('viewGroupEl');
  if(!Object.keys(groups).length){
    el.innerHTML='<div class="empty"><div class="empty-icon">📦</div><div>Tidak ada data</div></div>';return;
  }

  el.innerHTML=Object.entries(groups).sort((a,b)=>{
    const da=a[1].eta||'9999',db=b[1].eta||'9999';return da.localeCompare(db);
  }).map(([ctr,g])=>{
    const hasLate = (g.items||[]).some(s=>getAlertType(s)==='late');
    const totalQty=g.items.reduce((a,s)=>a+parseFloat(s.qty||0),0);
    const totalVal=g.items.reduce((a,s)=>a+parseFloat(s.value||0),0);
    const tags=[...g.tags].map(t=>`<span class="tag-pill">${t}</span>`).join(' ');
    return`<div class="grp-container ${hasLate?'grp-overdue':''}">
      <div class="grp-header" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none'">
        <span class="grp-ctr">${ctr}</span>
        ${statusBadge(g.status)}
        <span style="font-size:12px;">${tags}</span>
        <div class="grp-meta">
          <span title="ETD">🚢 ${fmtDate(g.etd)}</span>
          <span title="ETA">📍 ${fmtDate(g.eta)}</span>
          <span>${g.items.length} item</span>
          ${totalVal?`<span style="font-weight:500;">¥${Math.round(totalVal).toLocaleString()}</span>`:''}
        </div>
      </div>
      <div class="grp-body">
        ${g.items.map(s=>{ const d=getDelay(s); return `<div class="grp-row ${d.cls==='delay-late'?'overdue-row':''}" onclick="openDetail(${s.id})">
          <span class="td-po" style="width:140px;flex-shrink:0;font-size:11px;">${s.po}</span>
          <span class="grp-item">${s.item}</span>
          ${statusBadge(s.status)}
          <span style="margin-left:8px;"> <span class="delay-badge ${d.cls}">${d.label}</span></span>
          <span class="grp-qty">${s.qty||'—'}</span>
          <span class="grp-val">${s.value?fmtVal(s.value):'—'}</span>
        </div>` }).join('')}
      </div>
    </div>`;
  }).join('');
}

// ── Filter ──
function getFiltered(){
  const q=document.getElementById('searchInput').value.toLowerCase();
  const fs=document.getElementById('filterStatus').value;
  const ft=document.getElementById('filterTag').value;
  return applySort(shipments.filter(s=>{
    const m=!q||[s.po,s.supplier,s.item,s.container,s.forwarder].some(x=>x&&x.toLowerCase().includes(q));
    const st=!fs||s.status===fs,tg=!ft||(s.tags||[]).includes(ft);
    let sm=true;
    if(activeStatFilter==='aktif')sm=!['Cleared','Delivered'].includes(s.status);
    else if(activeStatFilter==='laut')sm=['Stuffing','Sailed','Arrived'].includes(s.status);
    else if(activeStatFilter==='late')sm=getAlertType(s)==='late';
    return m&&st&&tg&&sm;
  }));
}

// ── Sort ──
function setSortKey(k){if(sortKey===k)sortDir*=-1;else{sortKey=k;sortDir=1;}render();}
function applySort(list){if(!sortKey)return list;return[...list].sort((a,b)=>{let av,bv;if(sortKey==='_a'){const order={late:0,warning:1,ok:2,'':3};av=order[getAlertType(a)]??3;bv=order[getAlertType(b)]??3;}else if(sortKey==='_c'){av=(lastCommentCache[a.id]?.text||'').toLowerCase();bv=(lastCommentCache[b.id]?.text||'').toLowerCase();}else{av=a[sortKey]||'';bv=b[sortKey]||'';}if(typeof av==='number'&&typeof bv==='number')return(av-bv)*sortDir;if(!isNaN(parseFloat(av))&&!isNaN(parseFloat(bv))){av=parseFloat(av);bv=parseFloat(bv);}return av<bv?-sortDir:av>bv?sortDir:0;});}
function si(k){if(sortKey!==k)return'<span class="sort-icon">⇅</span>';return sortDir===1?'<span class="sort-icon" style="opacity:1;color:var(--accent);">↑</span>':'<span class="sort-icon" style="opacity:1;color:var(--accent);">↓</span>';}

// ── Stats ──
function renderStats(){
  const total=shipments.length,aktif=shipments.filter(s=>!['Cleared','Delivered'].includes(s.status)).length;
  const sailed=shipments.filter(s=>['Stuffing','Sailed','Arrived'].includes(s.status)).length,late=shipments.filter(s=>getAlertType(s)==='late').length;
  const card=(k,v,l,col,cls,icon)=>`<div class="stat ${cls} ${activeStatFilter===k?'active':''}" onclick="setStatFilter('${k}')"><div class="stat-icon">${icon}</div><div class="stat-val" style="color:${col};">${v}</div><div class="stat-lbl">${l}</div></div>`;
  document.getElementById('statsBar').innerHTML=card('total',total,'Total PO','var(--text)','s-total','📦')+card('aktif',aktif,'Aktif','var(--accent)','s-aktif','⚡')+card('laut',sailed,'Pengiriman','var(--teal)','s-kirim','🚢')+card('late',late,'Terlambat',late>0?'var(--red)':'var(--green)','s-late',late>0?'🔥':'✅');
}
function setStatFilter(k){activeStatFilter=activeStatFilter===k?'':k;renderStats();render();}

// ── View ──
function setView(v){
  currentView=v;
  groupViewOn = false;
  const grpToggle = document.getElementById('grpToggle'); if(grpToggle) grpToggle.classList.remove('btn-primary');
  document.getElementById('viewGroupEl').style.display='none';
  document.getElementById('viewTableEl').style.display=v==='table'?'block':'none';
  document.getElementById('viewCardEl').style.display=v==='card'?'block':'none';
  document.getElementById('vTable').classList.toggle('active',v==='table');
  document.getElementById('vCard').classList.toggle('active',v==='card');
}
function autoMobileView(){
  if(window.innerWidth<=768 && currentView!=='card'){setView('card');}
}
window.addEventListener('resize',()=>{if(window.innerWidth<=768 && currentView==='table')setView('card');});

// ── Quick Edit ──
function qeStatus(id,td){
  if(!isAdmin())return;const s=shipments.find(x=>x.id===id);if(!s)return;
  const sel=document.createElement('select');sel.className='qe-select';
  getStatusNames().forEach(st=>{const o=document.createElement('option');o.value=st;o.textContent=st;if(st===s.status)o.selected=true;sel.appendChild(o);});
  td.innerHTML='';td.appendChild(sel);sel.focus();
  const sv=async()=>{if(sel.value!==s.status){s.status=sel.value;await api('PUT',`/api/shipments/${s.id}`,{status:s.status});}render();};
  sel.onblur=sv;sel.onkeydown=e=>{if(e.key==='Enter')sv();if(e.key==='Escape')render();};
}
function qeDate(id,field,td){
  if(!isAdmin())return;const s=shipments.find(x=>x.id===id);if(!s)return;
  const inp=document.createElement('input');inp.type='date';inp.className='qe-input';inp.value=s[field]||'';
  td.innerHTML='';td.appendChild(inp);inp.focus();
  const sv=async()=>{if(inp.value!==s[field]){if(field==='gudang'){s.gudang=inp.value;}else{s[field]=inp.value;}if(field==='eta'||field==='etd'){s.gudang=calcGudang(s.po,s.eta,s.container);s.status=calcAutoStatus(s);}await api('PUT',`/api/shipments/${s.id}`,s);}render();};
  inp.onblur=sv;inp.onkeydown=e=>{if(e.key==='Enter')sv();if(e.key==='Escape')render();};
}

// ── Bulk ──
function getSelIds(){return[...document.querySelectorAll('.row-check:checked')].map(c=>parseInt(c.dataset.id));}
function onRowCheck(){const all=document.querySelectorAll('.row-check'),ch=document.querySelectorAll('.row-check:checked');const ca=document.getElementById('checkAll');ca.indeterminate=ch.length>0&&ch.length<all.length;ca.checked=ch.length===all.length&&all.length>0;updateBB();}
function toggleAll(v){document.querySelectorAll('.row-check').forEach(c=>c.checked=v);updateBB();}
function updateBB(){const ids=getSelIds(),bar=document.getElementById('bulkBar');bar.style.display=ids.length?'flex':'none';document.getElementById('bulkCount').textContent=`${ids.length} dipilih`;}
function clearSel(){document.querySelectorAll('.row-check').forEach(c=>c.checked=false);const ca=document.getElementById('checkAll');if(ca){ca.checked=false;ca.indeterminate=false;}updateBB();}

function deleteSelected(){
  if(!guardAdmin('Hanya admin.'))return;
  const ids=getSelIds();if(!ids.length)return;
  if(!confirm(`Hapus ${ids.length} shipment?`))return;
  api('POST','/api/comments/cleanup',{ids}).catch(()=>{});
  ids.forEach(id=>{delete lastCommentCache[id];});
  shipments=shipments.filter(s=>!ids.includes(s.id));
  save();clearSel();render();
}
function deleteAll(){
  if(!guardAdmin())return;
  if(!confirm('Hapus SEMUA data?'))return;
  lastCommentCache={};
  api('POST','/api/comments/cleanup',{ids:shipments.map(s=>s.id)}).catch(()=>{});
  shipments=[];save();render();
}

function openBulkEdit(){
  if(!guardAdmin())return;
  document.getElementById('beCount').textContent=`— ${getSelIds().length} dipilih`;
  const beSt=document.getElementById('be_status');beSt.innerHTML=getStatusNames().map(s=>`<option>${s}</option>`).join('');
  ['us','ue','ua','ud','un','uc'].forEach(f=>{const el=document.getElementById('be_'+f);if(el)el.checked=false;});
  tBE('status');tBE('etd');tBE('eta');tBE('docs');tBE('notes');tBE('comment');
  document.getElementById('bulkEditOverlay').classList.add('open');
}
function closeBulkEdit(){document.getElementById('bulkEditOverlay').classList.remove('open');}
function tBE(f){
  const map={status:'us',etd:'ue',eta:'ua',docs:'ud',notes:'un',comment:'uc',supplier:'usp',forwarder:'uf',container:'uctr',tgl_production:'uprod',stuffing:'ustuf',deliveredDate:'udel'};
  const key=map[f]||'u'+f[0];
  const cb=document.getElementById('be_'+key);if(!cb)return;
  const active=cb.checked;
  if(f==='docs'){const w=document.getElementById('be_docs_wrap');w.style.opacity=active?'1':'.4';w.style.pointerEvents=active?'auto':'none';}
  else{const el=document.getElementById('be_'+f);if(el){el.disabled=!active;el.style.opacity=active?'1':'.4';}}
}
async function applyBulkEdit(){
  const ids=getSelIds();if(!ids.length)return;
  const usp=document.getElementById('be_usp')?.checked;
  const uf=document.getElementById('be_uf')?.checked;
  const us=document.getElementById('be_us').checked,ue=document.getElementById('be_ue').checked;
  const ua=document.getElementById('be_ua').checked,ud=document.getElementById('be_ud').checked;
  const un=document.getElementById('be_un').checked,uc=document.getElementById('be_uc').checked;
  const uctr=document.getElementById('be_uctr')?.checked;
  const uprod=document.getElementById('be_uprod')?.checked;
  const ustuf=document.getElementById('be_ustuf')?.checked;
  const udel=document.getElementById('be_udel')?.checked;
  if(!usp&&!uf&&!us&&!ue&&!ua&&!ud&&!un&&!uc&&!uctr&&!uprod&&!ustuf&&!udel){showToast('warn','Belum ada field','Aktifkan minimal satu field.');return;}
  shipments=shipments.map(s=>{
    if(!ids.includes(s.id))return s;const u={...s};
    if(usp)u.supplier=document.getElementById('be_supplier').value.trim();
    if(uf)u.forwarder=document.getElementById('be_forwarder').value.trim();
    if(us)u.status=document.getElementById('be_status').value;
    if(ue)u.etd=document.getElementById('be_etd').value;
    if(ua){u.eta=document.getElementById('be_eta').value;u.gudang=calcGudang(s.po,u.eta,u.container||s.container);}
    if(uctr){u.container=document.getElementById('be_container').value.trim();u.gudang=calcGudang(s.po,u.eta||s.eta,u.container);}
    if(uprod)u.tgl_production=document.getElementById('be_tgl_production').value;
    if(ustuf)u.stuffing=document.getElementById('be_stuffing').value;
    if(udel)u.deliveredDate=document.getElementById('be_deliveredDate').value;
    if(ud)u.docs={invoice:document.getElementById('be_inv').checked,pl:document.getElementById('be_pl').checked,do:document.getElementById('be_do').checked,pib:document.getElementById('be_pib').checked,ls:document.getElementById('be_ls').checked};
    if(un)u.notes=document.getElementById('be_notes').value.trim();
    if((ue||ua||uctr)&&!us)u.status=calcAutoStatus(u);
    return u;
  });
  save();
  if(uc){
    const commentText=document.getElementById('be_comment').value.trim();
    if(commentText){
      await Promise.all(ids.map(id=>api('POST',`/api/comments/${id}`,{text:commentText})));
      ids.forEach(id=>{lastCommentCache[id]={name:currentUser.name,text:commentText,time:new Date().toISOString()};});
    }
  }
  closeBulkEdit();clearSel();render();
  showToast('info','Edit massal selesai',`${ids.length} shipment diperbarui.`);
}

// ── Add/Edit ──
function gLabel(po,c){return gudangLabel(po,c);}
function updateGF(){
  const po=document.getElementById('f_po').value,eta=document.getElementById('f_eta').value,container=document.getElementById('f_container').value;
  document.getElementById('f_status').value=calcAutoStatus({po,etd:document.getElementById('f_etd').value,eta,status:document.getElementById('f_status').value,container});
  renderTagCheckboxes(po,getSelectedTags());
}
function renderTagCheckboxes(po,selected){
  const autoTags=tagsFromPO(po);
  document.getElementById('f_tags_wrap').innerHTML=masterTags.map(t=>{
    const isAuto=autoTags.includes(t);const checked=selected.includes(t)||isAuto;
    return`<label style="display:flex;align-items:center;gap:5px;font-size:13px;cursor:pointer;${isAuto?'color:var(--accent);font-weight:500;':''}">
      <input type="checkbox" class="tag-cb" value="${t}" ${checked?'checked':''} ${isAuto?'disabled title="Otomatis dari kode PO"':''}>
      ${t}${isAuto?' ⚡':''}
    </label>`;
  }).join('');
}
function getSelectedTags(){return[...document.querySelectorAll('.tag-cb:checked')].map(c=>c.value);}
function renderStatusOptions(selected){const sel=document.getElementById('f_status');sel.innerHTML=getStatusNames().map(s=>`<option ${s===selected?'selected':''}>${s}</option>`).join('');}
function getDocs(){return{invoice:document.getElementById('doc_inv').checked,pl:document.getElementById('doc_pl').checked,do:document.getElementById('doc_do').checked,pib:document.getElementById('doc_pib').checked,ls:document.getElementById('doc_ls').checked};}
function setDocs(d){document.getElementById('doc_inv').checked=!!d?.invoice;document.getElementById('doc_pl').checked=!!d?.pl;document.getElementById('doc_do').checked=!!d?.do;document.getElementById('doc_pib').checked=!!d?.pib;document.getElementById('doc_ls').checked=!!d?.ls;}

function openAdd(){
  if(!guardAdmin())return;editId=null;document.getElementById('modalTitle').textContent='Tambah Shipment';
  ['po','supplier','item','qty','value','container','forwarder','notes'].forEach(f=>document.getElementById('f_'+f).value='');
  ['f_stuffing','f_etd','f_eta','f_deliveredDate','f_tgl_production'].forEach(f=>document.getElementById(f).value='');
  renderStatusOptions('Stuffing');
  renderTagCheckboxes('',[]); setDocs({});document.getElementById('modalOverlay').classList.add('open');
}
function openEdit(id){
  if(!guardAdmin())return;editId=id;const s=shipments.find(x=>x.id===id);
  document.getElementById('modalTitle').textContent='Edit Shipment';
  document.getElementById('f_po').value=s.po||'';document.getElementById('f_supplier').value=s.supplier||'';
  document.getElementById('f_item').value=s.item||'';document.getElementById('f_qty').value=s.qty||'';
  document.getElementById('f_value').value=s.value||'';document.getElementById('f_container').value=s.container||'';
  document.getElementById('f_stuffing').value=s.stuffing||'';document.getElementById('f_etd').value=s.etd||'';
  document.getElementById('f_eta').value=s.eta||'';document.getElementById('f_deliveredDate').value=s.deliveredDate||'';
  renderStatusOptions(s.status);document.getElementById('f_forwarder').value=s.forwarder||'';
  document.getElementById('f_tgl_production').value=s.tgl_production||'';
  document.getElementById('f_notes').value=s.notes||'';
  renderTagCheckboxes(s.po,s.tags||[]);setDocs(s.docs);
  document.getElementById('modalOverlay').classList.add('open');
}
function closeModal(){document.getElementById('modalOverlay').classList.remove('open');}
function saveShipment(){
  if(!guardAdmin('Hanya admin.'))return;
  const po=document.getElementById('f_po').value.trim(),supplier=document.getElementById('f_supplier').value.trim();
  const eta=document.getElementById('f_eta').value,item=document.getElementById('f_item').value.trim();
  const forwarder=document.getElementById('f_forwarder').value.trim();
  if(!po||!item){showToast('warn','Data kurang','Harap isi No. PO dan Item.');return;}
  const container=document.getElementById('f_container').value.trim(),etd=document.getElementById('f_etd').value;
  const obj={id:editId||Date.now(),po,supplier,item,qty:document.getElementById('f_qty').value.trim(),
    value:document.getElementById('f_value').value,container,stuffing:document.getElementById('f_stuffing').value,
    etd,eta,gudang:calcGudang(po,eta,container),deliveredDate:document.getElementById('f_deliveredDate')?.value||'',status:document.getElementById('f_status').value,
    forwarder:document.getElementById('f_forwarder').value.trim(),docs:getDocs(),
    notes:document.getElementById('f_notes').value.trim(),
    tgl_production:document.getElementById('f_tgl_production')?.value||'',
    tags:mergeTags(po,getSelectedTags())};
  obj.status=calcAutoStatus(obj);
  if(editId){const i=shipments.findIndex(x=>x.id===editId);shipments[i]=obj;}else shipments.unshift(obj);
  save();closeModal();render();
}
function del(id){
  if(!guardAdmin('Hanya admin.'))return;
  if(!confirm('Hapus shipment ini?'))return;
  delete lastCommentCache[id];
  shipments=shipments.filter(x=>x.id!==id);
  save();closeDetail();render();
}

// ── Detail Panel ──
function openDetail(id){detailShipId=id;detailTab='info';renderDetail();}
function renderDetail(){
  const s=shipments.find(x=>x.id===detailShipId);if(!s)return;
  const si=getStatusNames().indexOf(s.status),total=getStatusNames().length;
  const prog=Math.round(((si+1)/total)*100);
  const g=s.gudang||calcGudang(s.po,s.eta,s.container),docs=s.docs||{};
  const docItems=[{k:'invoice',l:'INV'},{k:'pl',l:'Packing List'},{k:'do',l:'DO'},{k:'pib',l:'PIB'},{k:'ls',l:'LS'}];
  const tags=(s.tags||[]).map(t=>tagPill(t,'11px')).join('');
  document.getElementById('detailContent').innerHTML=`
    <div class="detail-header">
      <div class="detail-po">${esc(s.po)}</div>
      <div class="detail-supplier">${esc(s.supplier)}</div>
      <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">${statusBadge(s.status)}${tags}</div>
    </div>
    <div class="detail-tabs">
      <div class="detail-tab ${detailTab==='info'?'active':''}" onclick="switchDetailTab('info')">Info</div>
      <div class="detail-tab ${detailTab==='comments'?'active':''}" onclick="switchDetailTab('comments')">💬 Komentar</div>
    </div>
    <div class="detail-body">
      ${detailTab==='info'?`
        <div class="detail-section"><div class="detail-section-title">Progress</div>
          <div class="progress-track"><div class="progress-fill" style="width:${prog}%;"></div></div>
          <div class="tl-track">
            ${getStatusNames().map((st,i)=>{
              const done=i<si,active=i===si;
              const cls=done?'done':active?'active':'';
              const stl=st.toLowerCase();const dateFld=stl==='production'?s.tgl_production:stl==='stuffing'?s.stuffing:stl==='sailed'?s.etd:stl==='arrived'?s.eta:stl==='delivered'?(s.deliveredDate||s.gudang):'';
              return`<div class="tl-step">
                <div class="tl-line ${done||active?'done':''}"></div>
                <div class="tl-dot ${cls}"></div>
                <div class="tl-label ${cls}">${st}</div>
                ${dateFld?`<div class="tl-date">${fmtDate(dateFld)}</div>`:''}
              </div>`;
            }).join('')}
          </div>
        </div>
        <div class="detail-section"><div class="detail-section-title">Informasi Barang</div>
          <div class="detail-row"><span class="detail-row-lbl">Item</span><span class="detail-row-val">${esc(s.item)}</span></div>
          ${s.qty?`<div class="detail-row"><span class="detail-row-lbl">Qty</span><span class="detail-row-val">${esc(s.qty)}</span></div>`:''}
          ${s.value?`<div class="detail-row"><span class="detail-row-lbl">Nilai</span><span class="detail-row-val">${fmtVal(s.value)}</span></div>`:''}
        </div>
        <div class="detail-section"><div class="detail-section-title">Jadwal</div>
          ${s.tgl_production?`<div class="detail-row"><span class="detail-row-lbl">Produksi</span><span class="detail-row-val">${fmtDate(s.tgl_production)}</span></div>`:''}
          ${s.stuffing?`<div class="detail-row"><span class="detail-row-lbl">Stuffing</span><span class="detail-row-val">${fmtDate(s.stuffing)}</span></div>`:''}
          <div class="detail-row"><span class="detail-row-lbl">ETD</span><span class="detail-row-val">${fmtDate(s.etd)}</span></div>
          <div class="detail-row"><span class="detail-row-lbl">ETA</span><span class="detail-row-val">${fmtDate(s.eta)}</span></div>
          <div class="detail-row"><span class="detail-row-lbl">Est. Tiba</span><span class="detail-row-val">${fmtDate(s.gudang||s.eta)||'—'}</span></div>
          ${s.deliveredDate?`<div class="detail-row"><span class="detail-row-lbl">Tgl Datang</span><span class="detail-row-val">${fmtDate(s.deliveredDate)}</span></div>`:''}
          ${s.container?`<div class="detail-row"><span class="detail-row-lbl">Kontainer</span><span class="detail-row-val" style="font-family:'Plus Jakarta Sans',sans-serif;font-size:12px;">${esc(s.container)}</span></div>`:''}
          ${s.forwarder?`<div class="detail-row"><span class="detail-row-lbl">Forwarder</span><span class="detail-row-val">${esc(s.forwarder)}</span></div>`:''}
        </div>
        <div class="detail-section"><div class="detail-section-title">Dokumen</div>
          ${docItems.map(d=>`<div class="detail-row"><span class="detail-row-lbl">${d.l}</span><span class="detail-row-val" style="color:${docs[d.k]?'var(--green)':'var(--red)'};">${docs[d.k]?'✓ Ada':'✗ Belum'}</span></div>`).join('')}
        </div>
        ${s.notes?`<div class="detail-section"><div class="detail-section-title">Catatan</div><div class="notes-box">${esc(s.notes)}</div></div>`:''}
      `:`
        <div class="comment-form">
          <textarea id="commentInput" placeholder="Tulis komentar... (Ctrl+Enter kirim)" onkeydown="if(event.ctrlKey&&event.key==='Enter')postComment(${s.id})"></textarea>
          <button class="btn btn-primary btn-sm" style="align-self:flex-end;" onclick="postComment(${s.id})">Kirim</button>
        </div>
        <div id="commentList"><div style="font-size:12px;color:var(--muted);text-align:center;padding:14px;">Memuat...</div></div>
      `}
    </div>
    <div style="display:flex;gap:8px;padding:0 20px 20px;">
      <button class="btn btn-primary admin-only" style="flex:1;" onclick="openEdit(${s.id});closeDetail()">Edit</button>
      <button class="btn btn-danger admin-only" onclick="del(${s.id})">Hapus</button>
    </div>`;
  document.getElementById('detailOverlay').classList.add('open');
  if(detailTab==='comments')loadComments(s.id);
}
function switchDetailTab(t){detailTab=t;renderDetail();}
async function loadComments(id){
  const data=await api('GET',`/api/comments/${id}`);
  const list=document.getElementById('commentList');if(!list)return;
  if(!data){list.innerHTML='<div style="font-size:12px;color:var(--muted);text-align:center;padding:14px;">Gagal memuat.</div>';return;}
  if(!data.length){list.innerHTML='<div style="font-size:12px;color:var(--muted);text-align:center;padding:14px;">Belum ada komentar.</div>';return;}
  if(data.length)lastCommentCache[id]=data[0];
  list.innerHTML=data.map(c=>`
    <div class="comment-item">
      <div class="comment-meta">
        <span class="comment-time">${new Date(c.time).toLocaleString('id-ID',{day:'2-digit',month:'2-digit',year:'2-digit',hour:'2-digit',minute:'2-digit'})}</span>
        ${isAdmin()?`<button class="comment-del" onclick="delComment(${id},${c.id})" title="Hapus komentar">✕</button>`:''}
      </div>
      <div class="comment-text" style="padding-left:0;">${esc(c.text).replace(/\n/g,'<br>')}</div>
    </div>`).join('');
}
async function postComment(id){const inp=document.getElementById('commentInput');const t=inp?.value?.trim();if(!t)return;inp.value='';const r=await api('POST',`/api/comments/${id}`,{text:t});if(r?.comment){lastCommentCache[id]=r.comment;render();}loadComments(id);}
async function delComment(id,cid){if(!confirm('Hapus komentar?'))return;await api('DELETE',`/api/comments/${id}/${cid}`);loadComments(id);}
function closeDetail(){document.getElementById('detailOverlay').classList.remove('open');}

// ── Search komentar ──
let searchMode = 'shipment';
let commentSearchDebounce;

function onSearchInput(val) {
  clearTimeout(commentSearchDebounce);
  const q = val.trim();
  if (!q) { clearCommentSearch(); render(); return; }
  render();
  commentSearchDebounce = setTimeout(async ()=>{
    const shipResults = getFiltered();
    if (shipResults.length === 0 && q.length >= 2) {
      await doCommentSearch(q);
    }
  }, 600);
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
  if(!data||!data.length) return;
  document.getElementById('commentSearchPanel').style.display='block';
  document.getElementById('searchModeIndicator').style.display='inline-flex';
  document.getElementById('viewTableEl').style.display='none';
  document.getElementById('viewCardEl').style.display='none';
  const status=document.getElementById('commentSearchStatus');
  const results=document.getElementById('commentSearchResults');
  status.textContent=`${data.length} komentar ditemukan`;
  const hl=(txt)=>txt.replace(new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'gi'),m=>`<mark>${m}</mark>`);
  results.innerHTML=data.map(r=>`
    <div class="comment-search-result" onclick="openDetailFromSearch(${r.shipId})">
      <div class="csr-po">${r.po} <span style="font-weight:400;color:var(--muted);">— ${r.supplier}</span></div>
      <div class="csr-text">${hl(r.text.substring(0,150))}${r.text.length>150?'…':''}</div>
      <div class="csr-time">${new Date(r.time).toLocaleString('id-ID',{day:'2-digit',month:'2-digit',year:'2-digit',hour:'2-digit',minute:'2-digit'})}</div>
    </div>`).join('');
}

function openDetailFromSearch(id){
  clearCommentSearch();
  document.getElementById('searchInput').value='';
  detailShipId=id;detailTab='comments';renderDetail();
}

// ── Export Excel ──
function exportExcel(){
  const list=getFiltered();if(!list.length){showToast('warn','Kosong','Tidak ada data untuk diekspor.');return;}
  const headers=['PO','Item','Qty','Nilai (RMB)','Supplier','Kontainer','Forwarder','Produksi','Stuffing','ETD','ETA','Est. Tiba','Tgl Datang','Status','Tags','INV','PL','DO','PIB','LS','Catatan'];
  const rows=list.map(s=>{const d=s.docs||{};return[
    s.po,s.item,s.qty,s.value||'',
    s.supplier||'',s.container||'',s.forwarder||'',
    s.tgl_production||'',
    s.stuffing||'',s.etd||'',s.eta||'',
    s.gudang||'',
    s.deliveredDate||'',
    s.status||'',(s.tags||[]).join(', '),
    d.invoice?'✓':'',d.pl?'✓':'',d.do?'✓':'',d.pib?'✓':'',d.ls?'✓':'',
    s.notes||''
  ];});
  const ws=XLSX.utils.aoa_to_sheet([headers,...rows]);
  ws['!cols']=[24,20,7,13,16,14,16,11,11,11,11,11,11,12,18,6,6,6,6,6,32].map(w=>({wch:w}));
  const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,'Shipment');
  const now=new Date(),tgl=`${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}`;
  XLSX.writeFile(wb,`Shipment_${tgl}.xlsx`);showToast('info','Export berhasil',`${list.length} shipment berhasil diexport.`);
}

function filterByTag(tag){
  switchPage('shipment',document.getElementById('nav-shipment'));
  const sel=document.getElementById('filterTag');
  if(sel){
    const opt=[...sel.options].find(o=>o.value===tag);
    if(opt){sel.value=tag;render();}
    else{
      document.getElementById('searchInput').value=tag;
      onSearchInput(tag);
    }
  }
}

function filterBySupplier(supplier){
  switchPage('shipment',document.getElementById('nav-shipment'));
  document.getElementById('searchInput').value=supplier;
  onSearchInput(supplier);
}
