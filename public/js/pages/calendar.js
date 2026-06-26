// ── Calendar Page ──
let calYear=new Date().getFullYear(),calMonth=new Date().getMonth();
let calFilterStatus='',calFilterType='';

function openCalDayPopup(dateStr,ids){
  const ships=shipments.filter(s=>ids.includes(s.id));
  const [y,m,d]=dateStr.split('-');
  const dateLabel=`${d}/${m}/${y}`;
  const content=ships.map(s=>`
    <div style="display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid var(--border2);cursor:pointer;" onclick="closeCalPopup();openDetail(${s.id})">
      <div style="flex:1;min-width:0;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:11px;color:var(--accent);">${s.po}</div>
        <div style="font-size:13px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${s.item}</div>
        <div style="font-size:11px;color:var(--muted);">${s.container||'—'} · ${s.supplier||'—'}</div>
      </div>
      <div style="flex-shrink:0;">${statusBadge(s.status)}</div>
    </div>`).join('');
  let overlay=document.getElementById('calDayOverlay');
  if(!overlay){
    overlay=document.createElement('div');overlay.id='calDayOverlay';
    overlay.className='modal-overlay';overlay.onclick=(e)=>{if(e.target===overlay)closeCalPopup();};
    overlay.innerHTML=`<div class="modal" style="max-width:440px;"><div class="modal-header"><div class="modal-title"></div><button class="modal-close" onclick="closeCalPopup()">×</button></div><div class="modal-body" style="max-height:70vh;overflow-y:auto;gap:0;padding:0 20px;"></div></div>`;
    document.body.appendChild(overlay);
  }
  overlay.querySelector('.modal-title').textContent=`📅 ETA ${dateLabel} — ${ships.length} shipment`;
  overlay.querySelector('.modal-body').innerHTML=content;
  overlay.classList.add('open');
}
function closeCalPopup(){
  const o=document.getElementById('calDayOverlay');if(o)o.classList.remove('open');
}

function renderCalendar(){
  const today=new Date();
  const first=new Date(calYear,calMonth,1),lastDay=new Date(calYear,calMonth+1,0).getDate();
  const startDow=first.getDay()||7;
  const months=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  const pfx=`${calYear}-${String(calMonth+1).padStart(2,'0')}`;
  const filtered=calFilterStatus?shipments.filter(s=>s.status===calFilterStatus):shipments;
  const byDate={};
  function addEv(date,ship,type,typeKey,color,icon){
    if(!date)return;if(calFilterType&&calFilterType!==typeKey)return;
    if(!byDate[date])byDate[date]=[];byDate[date].push({ship,type,typeKey,color,icon});
  }
  filtered.forEach(s=>{
    addEv(s.etd,s,'Sailed','etd','#2563eb','🚢');
    addEv(s.eta,s,'Arrived','eta','#db2777','⚓');
    const g=s.gudang||calcGudang(s.po,s.eta,s.container);
    addEv(g,s,'Est. Tiba','gudang','#16a34a','🏭');
  });
  const monthEvCount=Object.keys(byDate).filter(d=>d.startsWith(pfx)).reduce((sum,d)=>sum+byDate[d].length,0);
  const statusNames=getStatusNames();
  let html=`
  <div class="cal-header">
    <div>
      <div class="cal-title">${months[calMonth]} ${calYear}</div>
      <div style="font-size:11px;color:var(--accent);margin-top:4px;font-weight:700;display:inline-flex;align-items:center;gap:5px;background:var(--accent-dim);padding:3px 10px;border-radius:20px;">📌 ${monthEvCount} event bulan ini</div>
    </div>
    <div class="cal-nav">
      <button class="btn btn-sm" onclick="calMonth--;if(calMonth<0){calMonth=11;calYear--;}renderCalendar()">◀</button>
      <button class="btn btn-sm" onclick="calYear=${today.getFullYear()};calMonth=${today.getMonth()};renderCalendar()">Hari ini</button>
      <button class="btn btn-sm" onclick="calMonth++;if(calMonth>11){calMonth=0;calYear++;}renderCalendar()">▶</button>
    </div>
  </div>
  <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:10px;">
    <div class="cal-toolbar" style="margin-bottom:0;flex:1;">
      <span style="font-size:11px;color:var(--muted);font-weight:600;">Tanggal:</span>
      <button class="cal-filter-btn${!calFilterType?' active':''}" onclick="calFilterType='';renderCalendar()">Semua</button>
      <button class="cal-filter-btn${calFilterType==='etd'?' active':''}" onclick="calFilterType='etd';renderCalendar()">🚢 Sailed</button>
      <button class="cal-filter-btn${calFilterType==='eta'?' active':''}" onclick="calFilterType='eta';renderCalendar()">⚓ Arrived</button>
      <button class="cal-filter-btn${calFilterType==='gudang'?' active':''}" onclick="calFilterType='gudang';renderCalendar()">🏭 Est. Tiba</button>
    </div>
    <div class="cal-toolbar" style="margin-bottom:0;">
      <span style="font-size:11px;color:var(--muted);font-weight:600;">Status:</span>
      <button class="cal-filter-btn${!calFilterStatus?' active':''}" onclick="calFilterStatus='';renderCalendar()">Semua</button>
      ${statusNames.map(st=>{const sc=getStatusColor(st);const sg=statusGrad(st);return`<button class="cal-filter-btn cal-status-btn${calFilterStatus===st?' active':''}" style="${calFilterStatus===st?`background:${sg};border-color:transparent;color:#fff;box-shadow:0 3px 10px ${sc}55;`:''}" onclick="calFilterStatus='${st}';renderCalendar()"><span class="cal-status-dot" style="background:${sg};"></span>${st}</button>`;}).join('')}
    </div>
  </div>`;
  html+=`<div class="cal-grid">`;
  ['Sen','Sel','Rab','Kam','Jum','Sab','Min'].forEach(d=>{html+=`<div class="cal-day-hdr">${d}</div>`;});
  const prevLast=new Date(calYear,calMonth,0).getDate();
  const padStart=startDow-1;
  for(let i=padStart-1;i>=0;i--) html+=`<div class="cal-cell other"><div class="cal-num">${prevLast-i}</div></div>`;
  for(let d=1;d<=lastDay;d++){
    const dateStr=`${calYear}-${String(calMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const isToday=dateStr===today.toISOString().split('T')[0];
    const evs=(byDate[dateStr]||[]).sort((a,b)=>a.typeKey.localeCompare(b.typeKey));
    const MAX=4;
    html+=`<div class="cal-cell${isToday?' today':''}">
      <div class="cal-num">${d}</div>
      ${evs.slice(0,MAX).map(e=>`<div class="cal-ship type-${e.typeKey}" onclick="event.stopPropagation();openDetail(${e.ship.id})" title="${e.icon} ${e.type}: ${e.ship.po}\n${e.ship.item}\nKontainer: ${e.ship.container||'—'}\nStatus: ${e.ship.status||'—'}">${e.icon} ${e.ship.container||e.ship.po.slice(-8)}</div>`).join('')}
      ${evs.length>MAX?`<div class="cal-ship" style="background:var(--surface2);color:var(--muted);text-align:center;font-size:10px;cursor:pointer;" onclick="event.stopPropagation();openCalDayPopup('${dateStr}',[${evs.map(e=>e.ship.id).join(',')}])">+${evs.length-MAX} lagi</div>`:''}
    </div>`;
  }
  const totalCells=padStart+lastDay;
  const remain=7-(totalCells%7);
  if(remain<7){for(let i=1;i<=remain;i++) html+=`<div class="cal-cell other"><div class="cal-num">${i}</div></div>`;}
  html+=`</div>`;
  document.getElementById('calContent').innerHTML=html;
}
