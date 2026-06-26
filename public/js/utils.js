// ── Utils / Helpers ──

function showToast(type,title,msg,poId){
  const tc=document.getElementById('toastContainer'),el=document.createElement('div');
  const ic=type==='late'?'🚨':type==='warn'?'⚠️':'🔔';
  el.className=`toast toast-${type}`;
  el.innerHTML=`<div class="toast-icon">${ic}</div><div class="toast-body"><div class="toast-title">${title}</div><div class="toast-msg">${msg}</div></div><button class="toast-close" onclick="rmT(this.parentElement)">×</button>`;
  if(poId){el.style.cursor='pointer';el.onclick=e=>{if(e.target.classList.contains('toast-close'))return;openDetail(poId);rmT(el);};}
  tc.appendChild(el);setTimeout(()=>rmT(el),6000);
}
function rmT(el){if(!el?.parentElement)return;el.classList.add('removing');setTimeout(()=>el.remove(),200);}

function fmtDate(d){if(!d)return'—';const p=d.split('-');if(p.length!==3)return d;return`${p[2]}/${p[1]}/${p[0].slice(2)}`;}
function fmtVal(v){return v?'¥'+Number(v).toLocaleString():'—';}
function esc(s){if(s==null)return'';return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}

function parseSD(d){
  if(!d)return null;
  if(/^\d{4}-\d{2}-\d{2}$/.test(d)){const dt=new Date(d);dt.setHours(0,0,0,0);return dt;}
  const m=d.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})$/);
  if(m){const y=m[3].length===2?'20'+m[3]:m[3];const dt=new Date(`${y}-${m[2].padStart(2,'0')}-${m[1].padStart(2,'0')}`);dt.setHours(0,0,0,0);return dt;}
  return null;
}

function calcGudang(po,eta,container){
  if(!eta)return'';
  const rules=gudangRules.filter(r=>!r.isDefault&&r.keyword);
  for(const r of rules){
    const field=r.field==='container'?container||'':po||'';
    if(r.keyword&&field.toUpperCase().includes(r.keyword.toUpperCase())){
      const d=new Date(eta);d.setDate(d.getDate()+(parseInt(r.days)||0));
      return d.toISOString().split('T')[0];
    }
  }
  const d=new Date(eta);d.setDate(d.getDate()+14);
  return d.toISOString().split('T')[0];
}

function mergeTags(po,manual){return[...new Set([...tagsFromPO(po),...(manual||[])])];}

function autoForwarder(container){
  if(!container)return'';
  const c=container.toUpperCase();
  for(const r of forwarderRules){
    if(r.keyword&&c.includes(r.keyword.toUpperCase()))return r.forwarder;
  }
  return'';
}

const TAG_PALETTE=[
  {bg:'#dbeafe',fg:'#1e40af',bd:'#93c5fd'},
  {bg:'#fce7f3',fg:'#9d174d',bd:'#f9a8d4'},
  {bg:'#e0e7ff',fg:'#3730a3',bd:'#a5b4fc'},
  {bg:'#cffafe',fg:'#155e63',bd:'#67e8f9'},
  {bg:'#fef3c7',fg:'#92400e',bd:'#fcd34d'},
  {bg:'#dcfce7',fg:'#166534',bd:'#86efac'},
  {bg:'#ede9fe',fg:'#5b21b6',bd:'#c4b5fd'},
  {bg:'#ffedd5',fg:'#9a3412',bd:'#fdba74'},
];
function tagColor(name){
  let h=0; const s=String(name||'');
  for(let i=0;i<s.length;i++){h=(h*31+s.charCodeAt(i))>>>0;}
  return TAG_PALETTE[h%TAG_PALETTE.length];
}
function tagPill(name,fontSize){const c=tagColor(name);return `<span class="tag-pill" style="background:${c.bg};color:${c.fg};border-color:${c.bd};${fontSize?`font-size:${fontSize};`:''}">${esc(name)}</span>`;}

function statusGrad(name){
  const map={
    'Production':'linear-gradient(90deg,#f59e0b,#fcd34d)',
    'Stuffing':'linear-gradient(90deg,#ec4899,#f9a8d4)',
    'Sailed':'linear-gradient(90deg,#2563eb,#60a5fa)',
    'Arrived':'linear-gradient(90deg,#8b5cf6,#c4b5fd)',
    'Delivered':'linear-gradient(90deg,#10b981,#6ee7b7)',
    'Cleared':'linear-gradient(90deg,#64748b,#cbd5e1)'
  };
  if(map[name])return map[name];
  const c=getStatusColor(name);return `linear-gradient(90deg,${c},${c})`;
}

function getStatusClass(name){return's-'+name.toLowerCase().replace(/\s+/g,'-');}

function hexToRgb(h){const r=parseInt(h.slice(1,3),16),g=parseInt(h.slice(3,5),16),b=parseInt(h.slice(5,7),16);return`${r},${g},${b}`;}

function fmtAgo(iso){const d=Math.floor((Date.now()-new Date(iso))/60000);if(d<1)return'baru saja';if(d<60)return d+'m lalu';if(d<1440)return Math.floor(d/60)+'j lalu';return Math.floor(d/1440)+'h lalu';}
