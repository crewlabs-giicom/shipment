// ── Master Data Page ──

// Status drag-to-reorder
let _statusDragIdx=null;
function statusDragStart(e,i){_statusDragIdx=i;e.currentTarget.style.opacity='.4';}
function statusDragEnd(e){e.currentTarget.style.opacity='1';_statusDragIdx=null;}
function statusDragOver(e){e.preventDefault();e.currentTarget.style.background='var(--accent-dim)';}
function statusDrop(e,targetIdx){
  e.preventDefault();e.currentTarget.style.background='';
  if(_statusDragIdx===null||_statusDragIdx===targetIdx)return;
  const moved=masterStatuses.splice(_statusDragIdx,1)[0];
  masterStatuses.splice(targetIdx,0,moved);
  saveMaster();renderMaster();
  showToast('info','Urutan status diubah','');
}

function renderMaster(){
  // ── Forwarder rules ──
  document.getElementById('forwarderRuleList').innerHTML=forwarderRules.map((r,i)=>`
    <div class="rule-row" draggable="true"
      ondragstart="forwarderDragStart(event,${i})"
      ondragover="forwarderDragOver(event)"
      ondrop="forwarderDrop(event,${i})"
      ondragend="forwarderDragEnd(event)">
      <span style="color:var(--muted);font-size:16px;padding:0 4px;cursor:grab;flex-shrink:0;">⠿</span>
      <span style="font-size:11px;color:var(--muted);flex-shrink:0;min-width:18px;">${i+1}.</span>
      <span style="font-size:11px;color:var(--muted);">Jika kontainer mengandung</span>
      <input type="text" value="${r.keyword}" style="width:80px;border:1px solid var(--border);border-radius:4px;padding:3px 7px;font-size:12px;font-weight:600;background:var(--bg);" onchange="updateFwdKeyword(${i},this.value)">
      <span class="rule-arrow">→</span>
      <input type="text" value="${r.forwarder}" style="width:110px;border:1px solid var(--border);border-radius:4px;padding:3px 7px;font-size:12px;font-weight:600;background:var(--bg);" onchange="updateFwdName(${i},this.value)">
      <div style="flex:1;"></div>
      <button class="btn btn-sm btn-danger" onclick="deleteForwarderRule(${i})">Hapus</button>
    </div>`).join('');

  // ── Gudang rules ──
  document.getElementById('gudangRuleList').innerHTML=gudangRules.map((r,i)=>`
    <div class="rule-row" draggable="true"
      ondragstart="gudangDragStart(event,${i})"
      ondragover="gudangDragOver(event)"
      ondrop="gudangDrop(event,${i})"
      ondragend="gudangDragEnd(event)">
      <span style="color:var(--muted);font-size:16px;padding:0 4px;cursor:grab;flex-shrink:0;">⠿</span>
      <span style="font-size:11px;color:var(--muted);flex-shrink:0;min-width:18px;">${i+1}.</span>
      ${r.keyword?`
        <span style="font-size:11px;color:var(--muted);">Jika</span>
        <span class="rule-keyword">${r.field==='container'?'Kontainer':'No. PO'}</span>
        <span style="font-size:11px;color:var(--muted);">mengandung</span>
        <input type="text" value="${r.keyword}" style="width:80px;border:1px solid var(--border);border-radius:4px;padding:3px 7px;font-size:12px;font-weight:600;background:var(--bg);" onchange="updateGudangKeyword(${i},this.value)">
        <span class="rule-arrow">→ ETA +</span>
        <input type="number" value="${r.days}" min="0" max="365" style="width:52px;border:1px solid var(--border);border-radius:4px;padding:3px 6px;font-size:12px;text-align:center;background:var(--bg);" onchange="updateGudangDays(${i},this.value)">
        <span style="font-size:12px;color:var(--muted);">hari</span>
      `:`
        <span class="rule-keyword" style="background:var(--surface2);color:var(--muted);">Default</span>
        <span class="rule-arrow">→ ETA +</span>
        <input type="number" value="${r.days}" min="0" max="365" style="width:52px;border:1px solid var(--border);border-radius:4px;padding:3px 6px;font-size:12px;text-align:center;background:var(--bg);" onchange="updateGudangDays(${i},this.value)">
        <span style="font-size:12px;color:var(--muted);">hari</span>
      `}
      <div style="flex:1;"></div>
      <button class="btn btn-sm btn-danger" onclick="deleteGudangRule(${i})">Hapus</button>
    </div>`).join('');

  // ── Status list ──
  const sl=document.getElementById('masterStatusList');
  sl.innerHTML=masterStatuses.map((s,i)=>`
    <div class="master-item" draggable="true" data-idx="${i}"
      ondragstart="statusDragStart(event,${i})"
      ondragover="statusDragOver(event)"
      ondrop="statusDrop(event,${i})"
      ondragend="statusDragEnd(event)"
      style="cursor:grab;user-select:none;">
      <span style="color:var(--muted);font-size:16px;padding:0 4px;cursor:grab;" title="Drag untuk ubah urutan">⠿</span>
      <input type="color" value="${s.color||'#999'}" style="width:28px;height:28px;padding:2px;border:1px solid var(--border);border-radius:4px;cursor:pointer;flex-shrink:0;" onchange="updateStatusColor(${i},this.value)" title="Ubah warna">
      <span style="min-width:90px;">${statusBadge(s.name)}</span>
      <input type="text" value="${s.name}" style="flex:1;border:1px solid var(--border);border-radius:4px;padding:5px 8px;font-size:13px;background:var(--bg);color:var(--text);" onchange="updateStatusName(${i},this.value)" title="Ubah nama status">
      <button class="btn btn-sm btn-danger" onclick="deleteStatus(${i})">Hapus</button>
    </div>`).join('');

  // ── Tags list ──
  document.getElementById('masterTagList').innerHTML=masterTags.map((t,i)=>`
    <div class="master-item">
      <span class="tag-pill">${t}</span>
      <input type="text" value="${t}" style="flex:1;border:1px solid var(--border);border-radius:4px;padding:5px 8px;font-size:13px;background:var(--bg);color:var(--text);" onchange="updateTagName(${i},this.value)" title="Ubah nama tag">
      <button class="btn btn-sm btn-danger" onclick="deleteTag(${i})">Hapus</button>
    </div>`).join('');

  // ── Tag rules ──
  document.getElementById('tagRuleList').innerHTML=tagRules.map((r,i)=>`
    <div class="rule-row" draggable="true"
      ondragstart="tagRuleDragStart(event,${i})"
      ondragover="tagRuleDragOver(event)"
      ondrop="tagRuleDrop(event,${i})"
      ondragend="tagRuleDragEnd(event)">
      <span style="color:var(--muted);font-size:16px;padding:0 4px;cursor:grab;flex-shrink:0;">⠿</span>
      <span style="font-size:11px;color:var(--muted);">Jika PO mengandung</span>
      <input type="text" value="${r.keyword}" style="width:90px;border:1px solid var(--border);border-radius:4px;padding:3px 7px;font-size:12px;font-weight:600;background:var(--bg);" onchange="updateTagRuleKeyword(${i},this.value)">
      <span class="rule-arrow">→ tag</span>
      <span class="rule-tag">${r.tag}</span>
      <div style="flex:1;"></div>
      <button class="btn btn-sm btn-danger" onclick="deleteTagRule(${i})">Hapus</button>
    </div>`).join('');
  document.getElementById('tr_tag').innerHTML=masterTags.map(t=>`<option>${t}</option>`).join('');
}

// ── Gudang Rules CRUD ──
function addGudangRule(){
  const field=document.getElementById('gr_field').value;
  const keyword=document.getElementById('gr_keyword').value.trim().toUpperCase();
  const days=parseInt(document.getElementById('gr_days').value)||7;
  if(!keyword){showToast('warn','Kosong','Harap isi kata kunci.');return;}
  gudangRules.unshift({field,keyword,days});
  saveMaster();renderMaster();
  document.getElementById('gr_keyword').value='';
  document.getElementById('gr_days').value='3';
}
function deleteGudangRule(i){if(!confirm('Hapus aturan ini?'))return;gudangRules.splice(i,1);saveMaster();renderMaster();}
function updateGudangKeyword(i,v){gudangRules[i].keyword=v.trim().toUpperCase();saveMaster();}
function updateGudangDays(i,val){gudangRules[i].days=parseInt(val)||0;saveMaster();showToast('info','Diperbarui',`Hari diubah ke ${gudangRules[i].days}.`);}

// ── Gudang rules drag-to-reorder ──
let _gudangDragIdx=null;
function gudangDragStart(e,i){_gudangDragIdx=i;e.currentTarget.style.opacity='.4';}
function gudangDragEnd(e){e.currentTarget.style.opacity='1';_gudangDragIdx=null;document.querySelectorAll('#gudangRuleList .rule-row').forEach(el=>el.style.background='');}
function gudangDragOver(e){e.preventDefault();e.currentTarget.style.background='var(--accent-dim)';}
function gudangDrop(e,targetIdx){
  e.preventDefault();e.currentTarget.style.background='';
  if(_gudangDragIdx===null||_gudangDragIdx===targetIdx)return;
  const moved=gudangRules.splice(_gudangDragIdx,1)[0];
  gudangRules.splice(targetIdx,0,moved);
  saveMaster();renderMaster();
  showToast('info','Urutan diubah','Aturan dipindahkan.');
}

// ── Forwarder Rules CRUD ──
let _fwdDragIdx=null;
function forwarderDragStart(e,i){_fwdDragIdx=i;e.currentTarget.style.opacity='.4';}
function forwarderDragEnd(e){e.currentTarget.style.opacity='1';_fwdDragIdx=null;}
function forwarderDragOver(e){e.preventDefault();e.currentTarget.style.background='var(--accent-dim)';}
function forwarderDrop(e,t){e.preventDefault();e.currentTarget.style.background='';if(_fwdDragIdx===null||_fwdDragIdx===t)return;const m=forwarderRules.splice(_fwdDragIdx,1)[0];forwarderRules.splice(t,0,m);saveMaster();renderMaster();}

function updateFwdKeyword(i,v){forwarderRules[i].keyword=v.trim().toUpperCase();saveMaster();}
function updateFwdName(i,v){forwarderRules[i].forwarder=v.trim().toUpperCase();saveMaster();}
function deleteForwarderRule(i){if(!confirm("Hapus aturan ini?"))return;forwarderRules.splice(i,1);saveMaster();renderMaster();}
function addForwarderRule(){
  const keyword=document.getElementById('fr_keyword').value.trim().toUpperCase();
  const name=document.getElementById('fr_name').value.trim();
  if(!keyword||!name){showToast('warn','Data kurang','Kata kunci dan nama forwarder wajib diisi.');return;}
  if(forwarderRules.find(r=>r.keyword===keyword)){showToast('warn','Duplikat','Kata kunci sudah ada.');return;}
  forwarderRules.push({keyword,forwarder:name});
  saveMaster();renderMaster();
  document.getElementById('fr_keyword').value='';document.getElementById('fr_name').value='';
  showToast('info','Aturan ditambahkan',`"${keyword}" → "${name}"`);
}

// ── Status CRUD ──
function addStatus(){
  const name=document.getElementById('ms_name').value.trim(),color=document.getElementById('ms_color').value;
  if(!name)return;
  if(masterStatuses.find(s=>s.name.toLowerCase()===name.toLowerCase())){showToast('warn','Duplikat','Status sudah ada.');return;}
  masterStatuses.push({name,color});saveMaster();initUI();renderMaster();
  document.getElementById('ms_name').value='';
  showToast('info','Status ditambahkan',`"${name}" berhasil ditambahkan.`);
}
function updateStatusName(i,val){
  const newName=val.trim();if(!newName)return;
  const old=masterStatuses[i].name;
  masterStatuses[i].name=newName;
  shipments=shipments.map(s=>s.status===old?{...s,status:newName}:s);
  save();saveMaster();initUI();renderMaster();render();
  showToast('info','Status diubah',`"${old}" → "${newName}"`);
}
function updateStatusColor(i,val){masterStatuses[i].color=val;saveMaster();injectStatusStyles();renderMaster();}
function deleteStatus(i){
  if(!confirm(`Hapus status "${masterStatuses[i].name}"?\nShipment dengan status ini akan tetap ada tapi mungkin tidak ditampilkan dengan benar.`))return;
  masterStatuses.splice(i,1);saveMaster();initUI();injectStatusStyles();renderMaster();render();
  showToast('info','Status dihapus','');
}

// ── Tag CRUD ──
function addTag(){
  const name=document.getElementById('mt_name').value.trim().toUpperCase();
  if(!name)return;if(masterTags.includes(name)){showToast('warn','Duplikat','Tag sudah ada.');return;}
  masterTags.push(name);saveMaster();initUI();renderMaster();
  document.getElementById('mt_name').value='';showToast('info','Tag ditambahkan',`"${name}" berhasil ditambahkan.`);
}
function updateTagName(i,val){
  const newName=val.trim().toUpperCase();if(!newName)return;
  const old=masterTags[i];masterTags[i]=newName;
  shipments=shipments.map(s=>({...s,tags:(s.tags||[]).map(t=>t===old?newName:t)}));
  tagRules=tagRules.map(r=>r.tag===old?{...r,tag:newName}:r);
  save();saveMaster();initUI();renderMaster();
  showToast('info','Tag diubah',`"${old}" → "${newName}"`);
}
function deleteTag(i){
  if(!confirm(`Hapus tag "${masterTags[i]}"?`))return;
  const name=masterTags[i];masterTags.splice(i,1);
  shipments=shipments.map(s=>({...s,tags:(s.tags||[]).filter(t=>t!==name)}));
  save();saveMaster();initUI();renderMaster();
  showToast('info','Tag dihapus','');
}

// ── Tag Rule CRUD ──
let _tagRuleDragIdx=null;
function tagRuleDragStart(e,i){_tagRuleDragIdx=i;e.currentTarget.style.opacity='.4';}
function tagRuleDragEnd(e){e.currentTarget.style.opacity='1';_tagRuleDragIdx=null;}
function tagRuleDragOver(e){e.preventDefault();e.currentTarget.style.background='var(--accent-dim)';}
function tagRuleDrop(e,t){e.preventDefault();e.currentTarget.style.background='';if(_tagRuleDragIdx===null||_tagRuleDragIdx===t)return;const m=tagRules.splice(_tagRuleDragIdx,1)[0];tagRules.splice(t,0,m);saveMaster();renderMaster();}
function updateTagRuleKeyword(i,v){tagRules[i].keyword=v.trim().toUpperCase();saveMaster();}
function addTagRule(){
  const keyword=document.getElementById('tr_keyword').value.trim(),tag=document.getElementById('tr_tag').value;
  if(!keyword||!tag)return;
  if(tagRules.find(r=>r.keyword===keyword&&r.tag===tag)){showToast('warn','Duplikat','Aturan sudah ada.');return;}
  tagRules.push({keyword,tag});saveMaster();renderMaster();
  document.getElementById('tr_keyword').value='';showToast('info','Aturan ditambahkan',`"${keyword}" → "${tag}"`);
}
function deleteTagRule(i){tagRules.splice(i,1);saveMaster();renderMaster();}
