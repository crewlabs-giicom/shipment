// ── Dashboard Page ──
function goShipment(filter){
  switchPage('shipment',document.getElementById('nav-shipment'));
  setStatFilter(filter);
}
function ltShowTab(tab,btn){
  ['overall','tags','items'].forEach(t=>{const el=document.getElementById('ltTab_'+t);if(el)el.style.display=t===tab?'block':'none';});
  if(btn){btn.parentElement.querySelectorAll('.cal-filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');}
  if(tab==='items'){const inp=document.getElementById('ltItemSearch');if(inp&&!inp.value)ltSearchItem('');}
}
function ltSearchItem(q){
  const map=window._ltItemMap||{};
  const box=document.getElementById('ltItemResults');if(!box)return;
  const ql=q.toLowerCase().trim();
  const results=Object.entries(map)
    .filter(([item])=>!ql||item.toLowerCase().includes(ql))
    .sort((a,b)=>(b[1].total||0)-(a[1].total||0))
    .slice(0,20);
  if(!results.length){box.innerHTML='<div style="color:var(--muted);font-size:12px;padding:12px;">Tidak ditemukan.</div>';return;}
  const mx=Math.max(...results.map(([,d])=>d.total||0),1);
  const stages=[
    {key:'prod2stuff',label:'🏭 Produksi → Stuffing',color:'linear-gradient(90deg,#f59e0b,#fcd34d)'},
    {key:'stuff2sail',label:'📦 Stuffing → Sailed',color:'linear-gradient(90deg,#ec4899,#f9a8d4)'},
    {key:'sail2arrive',label:'🚢 Sailed → Arrived',color:'linear-gradient(90deg,#2563eb,#60a5fa)'},
    {key:'arrive2deliver',label:'⚓ Arrived → Delivered',color:'linear-gradient(90deg,#10b981,#6ee7b7)'},
    {key:'total',label:'📋 Total End-to-End',color:'linear-gradient(90deg,#8b5cf6,#c4b5fd)'},
  ];
  const avgF=arr=>arr.length?Math.round(arr.reduce((a,b)=>a+b,0)/arr.length):null;
  box.innerHTML=results.map(([item,d])=>{
    const id='ltI_'+item.replace(/[^a-zA-Z0-9]/g,'_').slice(0,20);
    const ltMx=Math.max(...stages.map(st=>avgF(d.lt[st.key])||0),1);
    const detailBars=stages.map(st=>{
      const a=avgF(d.lt[st.key]),mn=d.lt[st.key].length?Math.min(...d.lt[st.key]):null,mx2=d.lt[st.key].length?Math.max(...d.lt[st.key]):null,n=d.lt[st.key].length;
      return`<div class="bar-track"><div class="bar-label" style="width:160px;">${st.label}</div><div class="bar-bg"><div class="bar-fill" style="width:${a?(a/ltMx*100):0}%;background:${st.color};"></div></div><div style="min-width:100px;font-size:11px;text-align:right;">${a!==null?'<strong>'+a+' hari</strong> <span style="color:var(--muted);">('+mn+'–'+mx2+', '+n+'x)</span>':'<span style="color:var(--muted);">—</span>'}</div></div>`;
    }).join('');
    return`<div class="bar-track" style="cursor:pointer;" onclick="document.getElementById('${id}').style.display=document.getElementById('${id}').style.display==='none'?'block':'none'">
      <div class="bar-label" style="width:160px;font-weight:600;" title="${item}">${item.length>22?item.slice(0,22)+'…':item}</div>
      <div class="bar-bg"><div class="bar-fill" style="width:${d.total?(d.total/mx*100):0}%;background:linear-gradient(90deg,#1d4ed8,#60a5fa);"></div></div>
      <div style="min-width:140px;font-size:11px;text-align:right;">
        ${d.total!==null?'<strong>'+d.total+' hari</strong>':'—'}${d.prod!==null?' · 🏭'+d.prod+'h':''}${d.sail!==null?' · 🚢'+d.sail+'h':''}
        <span style="color:var(--muted);">(${d.n} PO)</span>
      </div>
    </div>
    <div id="${id}" style="display:none;margin:0 0 6px 16px;padding:8px 12px;background:var(--surface2);border-radius:6px;">${detailBars}</div>`;
  }).join('');
}
function renderDashboard(){
  const today=new Date();today.setHours(0,0,0,0);
  const dfrom=(document.getElementById('dashDateFrom')?.value||'').slice(0,10);
  const dto=(document.getElementById('dashDateTo')?.value||'').slice(0,10);
  const normD=v=>{if(!v)return '';const s=String(v).trim();const m=s.match(/^(\d{4})-(\d{2})-(\d{2})/);if(m)return m[1]+'-'+m[2]+'-'+m[3];const m2=s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})/);if(m2){const y=m2[3].length===2?'20'+m2[3]:m2[3];return y+'-'+m2[2].padStart(2,'0')+'-'+m2[1].padStart(2,'0');}return s.slice(0,10);};
  const src=(!dfrom&&!dto)?shipments:shipments.filter(s=>{
    const d=normD(s.etd||'');if(!d)return false;
    if(dfrom&&d<dfrom)return false;if(dto&&d>dto)return false;return true;
  });
  const _fi=document.getElementById('dashFilterInfo');
  if(_fi){const noEtd=(dfrom||dto)?shipments.filter(s=>!normD(s.etd||'')).length:0;_fi.textContent=(dfrom||dto)?`Menampilkan ${src.length} dari ${shipments.length} shipment`+(noEtd>0?` · ${noEtd} PO belum sailing (tanpa ETD, tidak difilter)`:''):'';}
  const total=src.length,aktif=src.filter(s=>!['Cleared','Delivered'].includes(s.status)).length;
  const sailed=src.filter(s=>['Stuffing','Sailed','Arrived'].includes(s.status)).length;
  const late=src.filter(s=>getAlertType(s)==='late').length;
  const done=src.filter(s=>['Delivered','Cleared','Arrived'].includes(s.status));
  const onTimeDone=done.filter(s=>{const ref=s.gudang||s.eta;if(!ref)return true;const refD=new Date(ref);if(s.deliveredDate)return new Date(s.deliveredDate)<=refD;return today<=refD;});
  const ontime=done.length?Math.round((onTimeDone.length/done.length)*100):null;
  const monthMap={};for(let i=11;i>=0;i--){const d=new Date();d.setDate(1);d.setMonth(d.getMonth()-i);monthMap[d.toISOString().slice(0,7)]=0;}
  src.forEach(s=>{const k=normD(s.etd||'').slice(0,7);if(monthMap[k]!==undefined)monthMap[k]++;});
  const months=Object.entries(monthMap),maxM=Math.max(...months.map(m=>m[1]),1);
  const tagMap={};src.forEach(s=>(s.tags||[]).forEach(t=>{tagMap[t]=(tagMap[t]||0)+1;}));
  const tags=Object.entries(tagMap).sort((a,b)=>b[1]-a[1]),maxT=Math.max(...tags.map(t=>t[1]),1);
  const supMap={};src.forEach(s=>{supMap[s.supplier]=(supMap[s.supplier]||0)+1;});
  const supAll=Object.entries(supMap).filter(([k])=>k&&k!=='undefined').sort((a,b)=>b[1]-a[1]),maxS=Math.max(...supAll.map(t=>t[1]),1);
  const statMap={};getStatusNames().forEach(st=>{statMap[st]=src.filter(s=>s.status===st).length;});
  const donutColors={Production:['#f59e0b','#fcd34d'],Stuffing:['#ec4899','#f9a8d4'],Sailed:['#2563eb','#60a5fa'],Arrived:['#8b5cf6','#c4b5fd'],Delivered:['#10b981','#6ee7b7'],Cleared:['#64748b','#cbd5e1']};
  const statEntries=getStatusNames().map(st=>({st,n:statMap[st]||0,grad:donutColors[st]||['#94a3b8','#cbd5e1']})).filter(x=>x.n>0);
  const statTotal=statEntries.reduce((a,x)=>a+x.n,0)||1;
  const dR=58,dC=2*Math.PI*dR,dSW=22;
  let _off=0;
  const donutArcs=statEntries.map((x,i)=>{const frac=x.n/statTotal,len=frac*dC,gap=dC-len;const dashoffset=-_off;_off+=len;return`<circle cx="75" cy="75" r="${dR}" fill="none" stroke="url(#dg${i})" stroke-width="${dSW}" stroke-dasharray="${len} ${gap}" stroke-dashoffset="${dashoffset}"/>`;}).join('');
  const donutDefs=statEntries.map((x,i)=>`<linearGradient id="dg${i}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${x.grad[0]}"/><stop offset="100%" stop-color="${x.grad[1]}"/></linearGradient>`).join('');
  const donutHtml=statEntries.length?`<div class="donut-wrap"><div class="donut-svg-wrap"><svg width="150" height="150" viewBox="0 0 150 150" style="transform:rotate(-90deg);"><defs>${donutDefs}</defs>${donutArcs}</svg><div class="donut-hole"><div class="donut-total">${statTotal}</div><div class="donut-sub">PO</div></div></div><div class="donut-legend">${statEntries.map(x=>`<div class="donut-leg-item"><span class="donut-dot" style="background:linear-gradient(135deg,${x.grad[0]},${x.grad[1]});"></span><span class="donut-leg-name">${x.st}</span><span class="donut-leg-val">${x.n} <span style="color:var(--muted);font-weight:500;">(${Math.round(x.n/statTotal*100)}%)</span></span></div>`).join('')}</div></div>`:'<div style="font-size:13px;color:var(--muted);padding:20px;text-align:center;">Belum ada data.</div>';
  const pct=ontime??0,r=46,circ=2*Math.PI*r;
  const ringGrad=pct>=80?['#10b981','#34d399']:pct>=60?['#f59e0b','#fcd34d']:['#e11d48','#fb7185'];
  const ring=`<div class="ontime-ring"><svg width="110" height="110" viewBox="0 0 110 110"><defs><linearGradient id="otGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${ringGrad[0]}"/><stop offset="100%" stop-color="${ringGrad[1]}"/></linearGradient></defs><circle cx="55" cy="55" r="${r}" fill="none" stroke="var(--border2)" stroke-width="10"/><circle cx="55" cy="55" r="${r}" fill="none" stroke="url(#otGrad)" stroke-width="10" stroke-dasharray="${circ}" stroke-dashoffset="${circ-(circ*pct/100)}" stroke-linecap="round"/></svg><div class="ontime-num" style="color:${ringGrad[0]};">${ontime!==null?pct+'%':'—'}</div></div>`;
  document.getElementById('dashContent').innerHTML=`
    <div class="stats" style="margin-bottom:16px;">
      <div class="stat s-total" onclick="goShipment('total')" style="cursor:pointer;"><div class="stat-icon">📦</div><div class="stat-val" style="color:var(--text);">${total}</div><div class="stat-lbl">Total PO</div></div>
      <div class="stat s-aktif" onclick="goShipment('aktif')" style="cursor:pointer;"><div class="stat-icon">⚡</div><div class="stat-val" style="color:var(--accent);">${aktif}</div><div class="stat-lbl">Aktif</div></div>
      <div class="stat s-kirim" onclick="goShipment('laut')" style="cursor:pointer;"><div class="stat-icon">🚢</div><div class="stat-val" style="color:var(--teal);">${sailed}</div><div class="stat-lbl">Pengiriman</div></div>
      <div class="stat s-late" onclick="goShipment('late')" style="cursor:pointer;"><div class="stat-icon">${late>0?'🔥':'✅'}</div><div class="stat-val" style="color:${late>0?'var(--red)':'var(--green)'};">${late}</div><div class="stat-lbl">Terlambat</div></div>
    </div>
    <div class="dash-row">
      <div class="chart-card"><div class="chart-title">📅 Shipment per Bulan</div>
        <div class="month-chart">${months.map(([k,v],mi)=>{const mg=['linear-gradient(180deg,#2563eb,#60a5fa)','linear-gradient(180deg,#06b6d4,#67e8f9)','linear-gradient(180deg,#8b5cf6,#c4b5fd)','linear-gradient(180deg,#ec4899,#f9a8d4)','linear-gradient(180deg,#f59e0b,#fcd34d)','linear-gradient(180deg,#10b981,#6ee7b7)'];return`<div class="month-col"><div class="month-num">${v||''}</div><div class="month-bar-wrap"><div class="month-bar" style="height:${v/maxM*100}%;background:${mg[mi%mg.length]};opacity:${0.55+v/maxM*0.45};"></div></div><div class="month-lbl">${k.slice(5)}</div></div>`;}).join('')}</div>
      </div>
      <div class="chart-card"><div class="chart-title">🎯 On-Time Rate & Status</div>
        <div style="display:flex;gap:18px;align-items:center;flex-wrap:wrap;justify-content:center;">
          <div style="text-align:center;">${ring}<div style="font-size:11px;color:var(--muted);margin-top:4px;">${done.length} PO selesai</div></div>
          ${donutHtml}
        </div>
      </div>
    </div>
    <div class="dash-row">
      <div class="chart-card"><div class="chart-title">🏷️ Breakdown per Tags</div>
        ${tags.length?tags.map(([t,v],i)=>{const rmbTag=src.filter(s=>(s.tags||[]).includes(t)).reduce((a,s)=>a+parseFloat(s.value||0),0);return`<div class="bar-track" onclick="filterByTag('${t.replace(/'/g,"\\'")}')" style="cursor:pointer;"><div class="bar-label">${t}</div><div class="bar-bg"><div class="bar-fill" style="width:${v/maxT*100}%;background:${GRADS[i%GRADS.length]};"></div></div><div class="bar-val">${v}</div><div style="font-size:10px;color:var(--muted);margin-left:4px;font-family:'Plus Jakarta Sans',sans-serif;">¥${Math.round(rmbTag/1000)}k</div></div>`;}).join(''):'<div style="font-size:13px;color:var(--muted);">Belum ada data.</div>'}
      </div>
      <div class="chart-card"><div class="chart-title">🏭 Breakdown per Supplier</div>
        ${supAll.length?supAll.map(([sup,v],i)=>{const rmbSup=src.filter(s=>s.supplier===sup).reduce((a,s)=>a+parseFloat(s.value||0),0);return`<div class="bar-track" onclick="filterBySupplier('${sup.replace(/'/g,"\\'")}')" style="cursor:pointer;"><div class="bar-label" title="${esc(sup)||'—'}">${esc(sup)||'—'}</div><div class="bar-bg"><div class="bar-fill" style="width:${v/maxS*100}%;background:${GRADS[i%GRADS.length]};"></div></div><div class="bar-val">${v}</div><div style="font-size:10px;color:var(--muted);margin-left:4px;font-family:'Plus Jakarta Sans',sans-serif;">¥${Math.round(rmbSup/1000)}k</div></div>`;}).join(''):'<div style="font-size:13px;color:var(--muted);padding:8px 0;">Belum ada data supplier.</div>'}
      </div>
    </div>`;
  const fwdPerfMap={};
  src.forEach(s=>{
    const fwd=s.forwarder||'(tanpa forwarder)';
    if(!fwdPerfMap[fwd])fwdPerfMap[fwd]={count:0,rmb:0,delays:0,onTime:0,total:0,transitDays:[]};
    fwdPerfMap[fwd].count++;fwdPerfMap[fwd].rmb+=parseFloat(s.value||0);
    const startD=parseSD(s.stuffing)||parseSD(s.etd),endD=s.deliveredDate?parseSD(s.deliveredDate):null;
    if(startD&&endD){const td=Math.round((endD-startD)/86400000);if(td>0&&td<365)fwdPerfMap[fwd].transitDays.push(td);}
    const ref=s.gudang||s.eta;
    if(ref){fwdPerfMap[fwd].total++;const refD=new Date(ref);refD.setHours(0,0,0,0);if(['Arrived','Delivered','Cleared'].includes(s.status)){const actualDate=s.deliveredDate?new Date(s.deliveredDate):today;const daysLate=Math.round((actualDate-refD)/86400000);if(daysLate>0)fwdPerfMap[fwd].delays+=daysLate;else fwdPerfMap[fwd].onTime++;}else if(today>refD){const dl=Math.round((today-refD)/86400000);if(dl>0)fwdPerfMap[fwd].delays+=dl;}}
  });
  const fwdArr=Object.entries(fwdPerfMap).sort((a,b)=>b[1].count-a[1].count).slice(0,10);
  const dashEl=document.getElementById('dashContent');
  const pipeline={};getStatusNames().forEach(st=>{pipeline[st]={count:0,rmb:0};});
  src.forEach(s=>{if(pipeline[s.status]){pipeline[s.status].count++;pipeline[s.status].rmb+=parseFloat(s.value||0);}});
  const pipeMax=Math.max(...Object.values(pipeline).map(p=>p.rmb),1);
  const totalRMB=src.reduce((a,s)=>a+parseFloat(s.value||0),0);
  const activeRMB=src.filter(s=>!['Delivered','Cleared'].includes(s.status)).reduce((a,s)=>a+parseFloat(s.value||0),0);
  dashEl.innerHTML+=`<div class="dash-row">
    <div class="chart-card"><div class="chart-title">🚛 Forwarder Performance</div>
      ${fwdArr.length?`<div style="font-size:11px;color:var(--muted);margin-bottom:10px;">⏱ rata-rata pengiriman aktual (Stuffing → Tgl Datang, hanya yang sudah datang)</div>
      ${fwdArr.map(([name,d],i)=>{const otr=d.total>0?Math.round((d.onTime/d.total)*100):0;const avgD=d.total>0?Math.round(d.delays/d.total):0;const avgT=d.transitDays.length?Math.round(d.transitDays.reduce((a,b)=>a+b,0)/d.transitDays.length):null;const otGrad=otr>=80?'linear-gradient(90deg,#10b981,#6ee7b7)':otr>=50?'linear-gradient(90deg,#f59e0b,#fcd34d)':'linear-gradient(90deg,#e11d48,#fb7185)';return`<div class="sp-card" onclick="document.getElementById('searchInput').value='${name.replace(/'/g,"\\'")}';onSearchInput('${name.replace(/'/g,"\\'")}');switchPage('shipment',document.getElementById('nav-shipment'));"><div class="sp-rank ${i===0?'r1':i===1?'r2':i===2?'r3':''}">${i+1}</div><div style="flex:1;min-width:0;"><div class="sp-name">${name}</div><div class="sp-stats"><span>${d.count} PO</span><span>¥${Math.round(d.rmb).toLocaleString()}</span>${avgT!==null?`<span style="color:var(--accent);">⏱ ${avgT} hari</span>`:''}${avgD>0?`<span style="color:var(--red);">+${avgD}h late</span>`:''}</div><div style="display:flex;align-items:center;gap:8px;margin-top:6px;"><div style="flex:1;height:7px;background:var(--surface2);border-radius:5px;overflow:hidden;"><div style="width:${otr}%;height:100%;background:${otGrad};border-radius:5px;"></div></div><span style="font-size:11px;font-weight:700;color:${otr>=80?'var(--green)':otr>=50?'var(--yellow)':'var(--red)'};white-space:nowrap;">${otr}%</span></div></div></div>`;}).join('')}
    </div>`:`<div style="font-size:13px;color:var(--muted);padding:8px 0;">Belum ada data forwarder.</div></div>`}
    <div class="chart-card"><div class="chart-title">💰 Pipeline Value</div>
      <div style="display:flex;gap:12px;margin-bottom:16px;"><div style="flex:1;padding:12px 14px;background:var(--surface2);border-radius:8px;text-align:center;"><div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.05em;">Total Nilai</div><div style="font-size:20px;font-weight:800;color:var(--text);font-family:'Plus Jakarta Sans',sans-serif;">¥${Math.round(totalRMB).toLocaleString()}</div></div><div style="flex:1;padding:12px 14px;background:var(--accent-dim);border-radius:8px;text-align:center;"><div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.05em;">Masih Aktif</div><div style="font-size:20px;font-weight:800;color:var(--accent);font-family:'Plus Jakarta Sans',sans-serif;">¥${Math.round(activeRMB).toLocaleString()}</div></div></div>
      <div style="font-size:12px;color:var(--muted);margin-bottom:8px;">Nilai per tahap status</div>
      ${getStatusNames().map(st=>{const p=pipeline[st];const col=statusGrad(st);return`<div class="bar-track"><div class="bar-label" style="width:90px;">${statusBadge(st)}</div><div class="bar-bg"><div class="bar-fill" style="width:${p.rmb/pipeMax*100}%;background:${col};"></div></div><div class="bar-val" style="min-width:100px;font-family:'Plus Jakarta Sans',sans-serif;font-size:11px;"><strong>¥${Math.round(p.rmb).toLocaleString()}</strong> <span style="color:var(--muted);">${p.count}</span></div></div>`;}).join('')}
    </div>
  </div>`;
  const DAY=86400000;
  function calcLT(list){
    const r={prod2stuff:[],stuff2sail:[],sail2arrive:[],arrive2deliver:[],stuff2deliver:[],total:[]};
    list.forEach(s=>{const tp=parseSD(s.tgl_production),ts=parseSD(s.stuffing),te=parseSD(s.etd),ta=parseSD(s.eta),td=s.deliveredDate?parseSD(s.deliveredDate):null;if(tp&&ts){const d=Math.round((ts-tp)/DAY);if(d>0&&d<365)r.prod2stuff.push(d);}if(ts&&te){const d=Math.round((te-ts)/DAY);if(d>0&&d<180)r.stuff2sail.push(d);}if(te&&ta){const d=Math.round((ta-te)/DAY);if(d>0&&d<180)r.sail2arrive.push(d);}if(ta&&td){const d=Math.round((td-ta)/DAY);if(d>=0&&d<180)r.arrive2deliver.push(d);}if(ts&&td){const d=Math.round((td-ts)/DAY);if(d>0&&d<365)r.stuff2deliver.push(d);}if(tp&&td){const d=Math.round((td-tp)/DAY);if(d>0&&d<730)r.total.push(d);}});return r;
  }
  const avgA=arr=>arr.length?Math.round(arr.reduce((a,b)=>a+b,0)/arr.length):null;
  const minA=arr=>arr.length?Math.min(...arr):null;
  const maxA=arr=>arr.length?Math.max(...arr):null;
  const stages=[{key:'prod2stuff',label:'🏭 Produksi → Stuffing',color:'linear-gradient(90deg,#f59e0b,#fcd34d)'},{key:'stuff2sail',label:'📦 Stuffing → Sailed',color:'linear-gradient(90deg,#ec4899,#f9a8d4)'},{key:'sail2arrive',label:'🚢 Sailed → Arrived',color:'linear-gradient(90deg,#2563eb,#60a5fa)'},{key:'arrive2deliver',label:'⚓ Arrived → Delivered',color:'linear-gradient(90deg,#10b981,#6ee7b7)'},{key:'total',label:'📋 Total End-to-End',color:'linear-gradient(90deg,#8b5cf6,#c4b5fd)'}];
  function renderLTBars(lt,stgs,lw){
    const mx=Math.max(...stgs.map(st=>avgA(lt[st.key])||0),1);
    return stgs.map(st=>{const a=avgA(lt[st.key]),mn=minA(lt[st.key]),mx2=maxA(lt[st.key]),n=lt[st.key].length;return`<div class="bar-track"><div class="bar-label" style="width:${lw||180}px;">${st.label}</div><div class="bar-bg"><div class="bar-fill" style="width:${a?(a/mx*100):0}%;background:${st.color};"></div></div><div style="min-width:130px;font-size:11px;text-align:right;">${a!==null?`<strong>${a} hari</strong> <span style="color:var(--muted);">(${mn}–${mx2}, ${n}x)</span>`:'<span style="color:var(--muted);">—</span>'}</div></div>`;}).join('');
  }
  const ltAll=calcLT(src);
  const allTags=[...new Set(src.flatMap(s=>s.tags||[]))].filter(Boolean).sort();
  let ltByTag='';
  if(allTags.length){
    const tagRows=allTags.map(tag=>{const ships=src.filter(s=>(s.tags||[]).includes(tag));const lt=calcLT(ships);return{tag,n:ships.length,prod:avgA(lt.prod2stuff),sail:avgA(lt.stuff2deliver),total:avgA(lt.total),lt};}).filter(r=>r.n>0).sort((a,b)=>(b.total||0)-(a.total||0));
    const mxT=Math.max(...tagRows.map(r=>r.total||0),1);
    ltByTag=tagRows.map(r=>{const id='ltTag_'+r.tag.replace(/[^a-zA-Z0-9]/g,'');return`<div class="bar-track" style="cursor:pointer;" onclick="document.getElementById('${id}').style.display=document.getElementById('${id}').style.display==='none'?'block':'none'"><div class="bar-label" style="width:100px;font-weight:700;">${r.tag}</div><div class="bar-bg"><div class="bar-fill" style="width:${r.total?(r.total/mxT*100):0}%;background:linear-gradient(90deg,#1d4ed8,#60a5fa);"></div></div><div style="min-width:160px;font-size:11px;text-align:right;">${r.total!==null?`<strong>${r.total}h</strong> total`:'—'}${r.prod!==null?` · 🏭${r.prod}h`:''}${r.sail!==null?` · 🚢${r.sail}h`:''} <span style="color:var(--muted);">(${r.n} PO)</span></div></div><div id="${id}" style="display:none;margin:0 0 8px 16px;padding:8px 12px;background:var(--surface2);border-radius:6px;">${renderLTBars(r.lt,stages,160)}</div>`;}).join('');
  }
  window._ltItemMap={};
  const _iMap={};src.forEach(s=>{const k=s.item||'';if(!_iMap[k])_iMap[k]=[];_iMap[k].push(s);});
  Object.entries(_iMap).filter(([k,v])=>k&&v.length>=1).forEach(([item,ships])=>{const lt=calcLT(ships);window._ltItemMap[item]={n:ships.length,lt,prod:avgA(lt.prod2stuff),sail:avgA(lt.stuff2deliver),total:avgA(lt.total)};});
  dashEl.innerHTML+=`<div class="chart-card">
    <div class="chart-title">⏱ Analisa Lead Time</div>
    <div style="display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap;">
      <button class="cal-filter-btn active" onclick="ltShowTab('overall',this)">Semua</button>
      <button class="cal-filter-btn" onclick="ltShowTab('tags',this)">Tags</button>
      <button class="cal-filter-btn" onclick="ltShowTab('items',this)">Item</button>
    </div>
    <div id="ltTab_overall"><div style="font-size:12px;color:var(--muted);margin-bottom:10px;">Rata-rata hari antar tahap · <strong>avg</strong> (min–max, jumlah data)</div>${renderLTBars(ltAll,stages,200)}</div>
    <div id="ltTab_tags" style="display:none;"><div style="font-size:12px;color:var(--muted);margin-bottom:10px;">Lead time per brand/tag · klik baris untuk detail</div>${allTags.length?ltByTag:'<div style="color:var(--muted);">Belum ada data.</div>'}</div>
    <div id="ltTab_items" style="display:none;"><div style="font-size:12px;color:var(--muted);margin-bottom:8px;">Cari item/SKU untuk lihat analisa lead time</div><input type="text" id="ltItemSearch" placeholder="Ketik nama item atau SKU..." style="width:100%;padding:8px 12px;border:1.5px solid var(--border);border-radius:var(--radius-sm);font-size:13px;margin-bottom:10px;background:var(--bg);color:var(--text);" oninput="ltSearchItem(this.value)"><div id="ltItemResults" style="max-height:400px;overflow-y:auto;"></div></div>
  </div>`;
}
