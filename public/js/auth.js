// ── Auth ──
function toggleLoginPw(){const i=document.getElementById('login_pass'),b=document.getElementById('pwToggleBtn');if(i.type==='password'){i.type='text';b.textContent='🙈';}else{i.type='password';b.textContent='👁️';}}
function showLogin(){document.getElementById('loginOverlay').style.display='flex';}

async function doLogin(){
  const u=document.getElementById('login_user').value.trim(),p=document.getElementById('login_pass').value;
  const e=document.getElementById('loginErr');e.textContent='';
  if(!u||!p){e.textContent='Harap isi username dan password.';return;}
  try{
    const r=await fetch('/api/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:u,password:p})});
    const d=await r.json();
    if(!d.success){e.textContent=d.error||'Login gagal.';return;}
    authToken=d.token;sessionStorage.setItem('auth_token',authToken);
    currentUser={username:d.username,role:d.role,name:d.name};
    document.getElementById('loginOverlay').style.display='none';
    applyMode();initUI();await loadData();
  }catch(err){
    e.textContent='Tidak bisa terhubung ke server. Pastikan node server.js sudah berjalan. ('+err.message+')';
    console.error('Login error:',err);
  }
}

async function doLogout(){await fetch('/api/logout',{method:'POST',headers:aH()}).catch(()=>{});authToken='';sessionStorage.removeItem('auth_token');currentUser=null;showLogin();}

function applyMode(){
  if(!currentUser)return;
  document.getElementById('sidebarAvatar').textContent=currentUser.name.substring(0,2).toUpperCase();
  document.getElementById('sidebarName').textContent=currentUser.name;
  const r=document.getElementById('sidebarRole');r.textContent=currentUser.role==='admin'?'Admin':'Viewer';r.className='user-role-sm '+currentUser.role;
  document.body.classList.toggle('viewer-mode',currentUser.role!=='admin');
}

async function checkSession(){
  if(!authToken){showLogin();return;}
  const d=await fetch('/api/me',{headers:aH()}).then(r=>r.json()).catch(()=>null);
  if(!d||d.error){showLogin();return;}
  currentUser=d;applyMode();document.getElementById('loginOverlay').style.display='none';
  initUI();await loadData();
}

function isAdmin(){return currentUser?.role==='admin';}
function guardAdmin(msg){if(!isAdmin()){showToast('warn','Akses Ditolak',msg||'Hanya admin.');return false;}return true;}
