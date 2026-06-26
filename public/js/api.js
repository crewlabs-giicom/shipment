// ── API ──
function aH(){return{'Content-Type':'application/json','Authorization':'Bearer '+authToken};}
async function api(method,url,body){
  const r=await fetch(url,{method,headers:aH(),body:body?JSON.stringify(body):undefined});
  if(r.status===401){showLogin();return null;}return r.json();
}

function save(){if(!isAdmin())return;api('POST','/api/shipments',shipments).catch(e=>console.error(e));}

async function loadData(){
  const d=await api('GET','/api/shipments');if(!d)return;
  shipments=Array.isArray(d)?d:[];
  shipments=shipments.map(s=>({...s,tags:mergeTags(s.po,s.tags||[]),gudang:calcGudang(s.po,s.eta,s.container)}));
  const changed=applyAutoForwarder();
  if(changed)save();
  await loadMasterFromServer();
  migrateMasterData();
  injectStatusStyles();
  autoUpdateStatus();
  render();renderDashboard();renderNotifPanel();setTimeout(checkAlerts,600);
  autoMobileView();
  loadLastComments();
}

// Terapkan aturan forwarder otomatis ke semua shipment yang forwarder-nya kosong
function applyAutoForwarder(){
  if(!forwarderRules||!forwarderRules.length)return false;
  let changed=false;
  shipments=shipments.map(s=>{
    if(s.forwarder&&s.forwarder.trim())return s;
    const auto=autoForwarder(s.container||'');
    if(auto){changed=true;return{...s,forwarder:auto};}
    return s;
  });
  return changed;
}
