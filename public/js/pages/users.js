// ── User Management ──
async function loadUsers(){
  const data=await api('GET','/api/users');if(!data)return;
  document.getElementById('userList').innerHTML=data.map(u=>`<div class="user-row"><div class="user-avatar">${u.name.substring(0,2).toUpperCase()}</div><div class="user-info"><div class="user-name">${esc(u.name)} <span class="user-role ${u.role}">${u.role}</span></div><div class="user-uname">@${esc(u.username)}</div></div><button class="btn btn-sm" onclick="resetPass('${u.username}')">Reset Pass</button>${u.username!==currentUser?.username?`<button class="btn btn-sm btn-danger" onclick="delUser('${u.username}')">Hapus</button>`:'<span class="user-self-tag">Anda</span>'}</div>`).join('');
}
async function addUser(){
  const u=document.getElementById('nu_user').value.trim(),n=document.getElementById('nu_name').value.trim(),p=document.getElementById('nu_pass').value,r=document.getElementById('nu_role').value;
  const e=document.getElementById('uErr');e.textContent='';
  if(!u||!p){e.textContent='Username dan password wajib.';return;}
  const d=await api('POST','/api/users',{username:u,name:n||u,password:p,role:r});
  if(!d?.success){e.textContent=d?.error||'Gagal.';return;}
  ['nu_user','nu_name','nu_pass'].forEach(id=>document.getElementById(id).value='');
  loadUsers();showToast('info','User ditambahkan',`@${u} berhasil dibuat.`);
}
async function resetPass(u){const p=prompt(`Password baru untuk @${u}:`);if(!p)return;const d=await api('PUT',`/api/users/${u}`,{password:p});if(d?.success)showToast('info','Password direset',`@${u} berhasil.`);}
async function delUser(u){if(!confirm(`Hapus @${u}?`))return;const d=await api('DELETE',`/api/users/${u}`);if(d?.success){loadUsers();showToast('info','User dihapus',`@${u} dihapus.`);}}

// ── Ganti Password ──
function openChangePwd(){['cp_old','cp_new','cp_conf'].forEach(id=>document.getElementById(id).value='');document.getElementById('cpErr').textContent='';document.getElementById('changePwdOverlay').classList.add('open');}
async function doChangePwd(){
  const old=document.getElementById('cp_old').value,nw=document.getElementById('cp_new').value,cf=document.getElementById('cp_conf').value;
  const e=document.getElementById('cpErr');e.textContent='';
  if(!old||!nw){e.textContent='Semua field wajib.';return;}if(nw!==cf){e.textContent='Tidak cocok.';return;}if(nw.length<6){e.textContent='Min 6 karakter.';return;}
  const d=await api('PUT','/api/me/password',{oldPassword:old,newPassword:nw});
  if(!d?.success){e.textContent=d?.error||'Gagal.';return;}
  document.getElementById('changePwdOverlay').classList.remove('open');showToast('info','Password berhasil diubah','');
}
