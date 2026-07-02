const GII_LOGO='data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCADhAOEDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAcIBAUGAwEC/8QASRAAAQMEAAQCBQYJCQgDAAAAAQACAwQFBhEHEiExQVETImFxgQgUIzKR0RZCUmKCobGywRUzNVZzdJKU8BckJzREVXKEotLh/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAUGBwQDAgH/xAA0EQABAwIDBQYFAwUAAAAAAAAAAQIDBAUGESESMUFRYRQjcZGh0RMyM8HhFSLxQkNSgfD/2gAMAwEAAhEDEQA/ALloiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCLXZDfLXYLe6vu1ZHTQjoObq558mgdXH2BRBlHGK41cjoMdpRQwDoJ5wHyu9ob9Vv/wAvguGsuNPSJ3i68uJJ2+0VdwXuW6c10Tz9ib3ODWlziAB3JK1899skDiye8W+Jw7h9SwH9ZVZblertdnufcrjVVWzvUkhLR7h2HwXhFrYCrs2Ksl7uPzUs0eC1RO9l16J7r9i0VPe7NUODYLvQSuPYMqWOP6is9pDgC0gg9iFVeMbW2tV0uNuIdQVtRTaPaOQgH3jsV4sxhkveReS/g85sIKid3L5p+SyaKJcc4k3Kn5Y7vC2ti8ZGANkA/Yf1e9SVY7zbrzSfObfUNlaPrN7OYfIjwVht95pK/SJ37uS6L/3gVqttdTRL3rdOabjYIiKVI8IiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiALmOIWY0GI2r084E9ZNsU1MHaMh8SfJo8T8O5W3yO70distTda5/LDTs5iB3cewaPaToD3qrGTXuuyG9T3W4yF0sp9VgPqxtHZjfYP4k+Kh7tcuyM2WfMvp1LJh2xrcpVfJ9Nu/qvL3GR3255Dc33C61LppTvlb+JG3f1WjwH+jtYUK8l6wqiSvdIqucuaqauyJkTEYxMkTgZMXZZMX1guvxPhlkF4ibUVLW2ymf1Dqhp9IR5hnf7dLvaDhDYYmN+dXC4zyDuWuYxvwHKT+tdUNjrKhNprck66FdrMRUFO5Wq/Nemvru9SHYv4LJj+qFME/CnH3M+gq7jE7wPpGuH2cq5m+8NLvQRult0zLjEOvIG8kgHuJ0fgd+xc9Xh6vhRXbOadNfTeckWIqGd2yjsl6pl67jjoSs+1XGttVaysoJ3Qys8fBw8iPELCEckUro5WOY9p05rhotPkR4L9quI98b9pq5KhIPayRqo5M0UnHC8npsioiQGw1kQHpod9vzm+Y/YugVeLPcaq1XKGvo38ksR37HDxafMFTxYLpT3m1QXCmPqSN6t8WOHdp9xWn4dvfb4/hy/Ub6pz9zPb1auxP24/kX0Xl7GeiIrKQYREQBERAEREAREQBERAEREAREQBEQ611QEG/KHyJ1RdabG6d/0VKBPUgHvI4eqD7mnf6QUULY5RcnXjI7jdHO5vnNQ+Rp/N36o+DdD4LXLN6+oWoqHSeXhwNts9ElFRxxImuWa+K7z4TobKn3hJw8gtNJBer3TiS5vHPDE8dKYHt0/L8z4dh4kx9wRx1l8zBtVUM5qS2tE7wRsOk39GD8QXfoqxynbDb2uTtEieHuVPF95ex3YoVy/y/wB8PcIiK1mfBERAcrneJU19pnVNOxkVxY31H9hJr8V38D4KGpY5IZnwzRujkY4te1w0WkdwVY9aW44rYLhWyVlXbmSTya53c7hvXTsCqpfMNpXPSWDJruPJeunEsNpvi0bVjlzc3h0/BBC7vg9dzT3Sa0SO+jqQZIwewkaOv2t/dC7hmHY0ztaYT7y4/tKyaLHLHR1EdRS2umiljO2PazqD71w2zDNZRVLJ0kbpv37uPA7K+/01XA6LYXXw38DaoiK8lSCIiAIiIAiIgCIiAIiIAiIgCIiALXZPUOpMbudUw8roaOWQHyIYT/BbFa7KIDU4zdKZo2ZaOZgHnthC+JM9hcj0iy+I3PmhUZoAaAPBfV8HUAr6svN8J4+ThSsjxS4VmvpJq4sJ/Naxuh9rnfapRUX/ACcalj8Sr6XmHpIa4uI/Ncxmj9rXfYpQWh2rLsceXIxfEG1+pTbXP+PQLRT5jilPPJBPkVrjljcWPY6paC0g6IPVb1U+uv8ASlZ/byfvFeN1uL6JGq1M88zpw/ZY7q97XuVuzlu6lofw3w/+s1p/zTPvX1uaYi76uSWp2vKqb96qqsum8FBuxNMifInqWZ2CadE+qvkhaJuX4s76uQW0+6ob969WZRjjxtt9txH94b96rTTfxWfT9guR+Lp2/wBtPU5X4QhbukXyQsR+EuPf97t/+Yb969Ke/wBkqJ2QQXehlledMY2dpLj5AbUALLsg3eqAN6E1UWj+mF5xYyne9GrGmq9TlkwvExiuSRdE5FhkRFoJTAiIgCIiAIiIAiIgCIiAIiIAiIgCHqNIiAqNkttdZ8gr7W5hb82qHxtB8Wg+qfiNFa9St8obHnU92psjgZ9DVgQVBA7SNHqk+9o1+h7VFKzeup1p6h0a89PA260VqVtHHMm/LXxTed7wOyFlly/5pUyBlLcmtgcT2EgP0Z+0lv6SsYFTYHXUEj2gqwfCHPor7RRWe6zBl2haGsc7/qWgdwfy+nUfEeIE9Ybg1qdnevh7FQxhZ3q7tsSZpud9l+ykjKn11/pSs/t5P3irgrTz4tjNRO+efH7VLLI7me99JGXOPmTrqVKXW3OrUajXZZZkDYL0y1Pe57FdtZbuhU5ZdN4exWj/AAQxT+rVn/ycf3L6MSxZvbHLQPdRx/coR2GZV/rTyLI7G8Kp9JfNCtdMVsafwU1ZP+BGOMZ85sVuknk6thipIy8jzOwNBaOPLcIb1GKMafzaOH71B1dnghkWOWpai8slPtl+lqGbcdO5U8UI9WZYQTfrcANk1cX74XeDMsKA1+DTh/6kP/2XTYfU2S8QOuFtszKQRyFjXvp2McTob0W781+UNigmmakVS1yprkiLwOOrvE0USrJAqIumarzOjREWnFDCIiAIiIAiIgCIiAIiIAiIgCIiAIiIDXZLZ6S/2OqtNc0mGoZy7Hdju7XD2ggH4KrOS2Wux69T2q4s5Zoj0cAeWRvg9vsP/wCeCtuuY4hYdQZdaxDOfQVkOzTVIbsxk9wR4tPiFD3a29rZtM+ZPXoWTDt8/TZVZJ9N2/ovP3Kur2pnFjmva5zXNO2uadEEdiD4LOyawXTHLm633WnMUo6scOrJG/lNPiP9HRWBCqJK10aq1yZKhqzJWTRo9i5tUlLE+LN1oWMprzT/AMpQtAAma4MmA9vg746PmSu7ouKOJVDAZamqpXEb5JadxP2s5gq+RLIi+su6HEFZTt2c9pOpWazDFBO5XIitXp7aoWAqOJeJxg+jq6ic+UdO4b/xALm77xSnnY6Ky0XzcHoJqjTn/Bo6A+8lRbEsmPq0LnqsS10rdlFRvgn8nLFhmhhdtKiu8V9sjOmqZ6ypfVVUr5p5Dtz3HZKLxhW0sVorr1XNo6CLneernH6rB5uPgFWkZJPJstRVcvmScjo4WZu0ah9x601V7usVBSt6uO3vPZjfFx/15BTvaKCntltgoaVpbDC3lbvufMn2k9VgYnjtHj9v9BABJO8AzzEdXn+A8gt0tQw/ZUt0W3J9R2/onL3M8vN1Wuk2WfIm7r1CIisRChERAEREAREQBERAEREAREQBERAEREAREQGvv1ltd9t76G60cVVA7sHjq0+bT3afaFEeT8HK2ne+fHaxtVF1Ipqg8sg9jXfVd8de9TYi4qu3U9WneN158SSt93q6Be5dpyXVPL2KsXLH73aHObcrXV0wafrPiPJ8HDofgViQ9SCOoVstDWvBYk1st053Pb6SU+b4Wn9oVdmwqjl/ZJ5p+SzR40dllJFr0XL7KVijIA6nS3dqsd4uIZ8ytlVM13Z7Yzyf4j0/WrCQW+gg/mKKmi/8Imt/YFkryZg9qrnJL5J+Txmxe5yd3Fl4rn9kIsxvhnVPc2W91LYWd/QwkOcfe7sPhtSRabbQ2qkbS0FMyCJvg3uT5k9yfaVlorFQWmloE7luvNdVK3WXKorFzldpy4BERSRwhERAEREAREQBERAEREAREQBERAFrr3frHY42SXu8262MkOmOrKpkIcfIFxG0yi6x2LGbpe5mF8dvo5qp7R+MI2F5H6lBnCDhvi+T4PHxY4r09Hk18vlGbjUT3BvpKahpiC9kUUZ21jGs69idk9UBP9HVU1bSx1VHUQ1EEg5mSxPD2OHmCOhWHJfrHHQ1ddJebcykopjBVTuqmCOCQEAse7emuBIGjo9Qox4RZHwHsFbLjnDrIrLHNd6wzNoKasfJzyloBEbXE8o03fK3Q7qFcqAPyZflBAgH/iNWnr/e6NAXIaQ5ocCCCNghedXUU9JTyVNVPFBBGOZ8kjw1rR5knoEo/wDlIf7Nv7FA11sUHGTj/klgyqWomxDB4qRkdoZM5kVdWTsMvppuUguDAOUNPTy6F4cBNtkv1jvkb5LJebdc2RnT3UdUyYN95aTpfm95DYLGYxer5bLZ6X+b+eVbIef3cxG1HWUYBw44b2y58TbBh1DQXXHrTVTwCiLqdkoERPK9jCGv3rW3A63vvpaLgxwdxW9YbQZvxCt8GYZTkdLHca2sujfTtiErfSNhiYdsY1jXBo5R4dNDQAE4008FVTsqKaaOeGQczJI3BzXDzBHQr9RSMljbJG9r2OALXNOwQexBUC2Ozx8HeP8Aj2LY1LNHh+bwVhFpfI58dvrKdnpTJFzElrXtOi3tv2BoGq+SxxKuDslvXD7Jw+OKW63GTGaqVw1Uxxzu9PTA+Lo98wHflJ7BrUBY+R7I43SSPaxjRsucdABGSMe57WPa4sPK8A75ToHR8uhB+IVcvlPcSq4Zfj/D7GOd8UN5tsmS1UTtCnZJOwwUxP5UmuYjvytHcF2vmTcSa/AvlXXWK4CQ4bX0NvhulQT9HQTvD2wTu/JaSORzu2i3Z9VoQFkFrrrf7HaYopbrebdQRyktifU1TIg8juAXEb17FHHymuJFXgmDPo8daajLLxFNFaoWcpdEGRl81SQenLEwF2z03y76bUM5vcMZpOHXyeLjnccVXYm05kuAqKd1S2QGjb1cwBxf6xB7HzQFprdlOM3KSWO3ZFaK18MRmlbT1schZGNbe4B3Ro2Nk9Oq+W3LMWudUyktuS2atqH9WxU9dFI93uDXElRfgJ4N3rBsqyXhZYrXSGGgqaCpqaa1mkk6xCQxnma0kfUPl0HkoepqDgDD8lWjuNzlxamyqOwtljmoqiJtzFeGbj1yH0nP6QN2D0783TaAuUtVQZLjlfcX22hyC01VdGSH00NZG+VvvaDsfYoCyGfL80tXCfhVfbhX22TIbOa/Kp2O9HVTQwxMJg33aZHO0/sfPpsGRjwD4QClooIMGttK6iljlgnpy+KdrmOBaTK1we7qOuydoDtbrk+NWmr+aXXIbTQVPKH+iqa2OJ/Kex5XEHXQ9Vk2e8Wi8wPns90objFG7kfJS1DZWtdoHRLSdHRB17VWni1eeFNl+U9dZOKtDRVdFJjNI2jbU219WBJ6aTmIa1ruU68einbhLTYKMNprpw8tdDb7HdP96jFJSfN2yk+rzlmgd6aB1G+gQHXIiIAiIgCIiAIiIAiIgPGtpoK2jno6qJssE8bo5Y3dntcNEH3gqB8VbxP4O0LsLbhNTxAxGnc8WevoauNlXDC4kinnifrm5dkcw6a17hPyICD8Dw7Lst4o2/iJnGN2/E7dY4ZmWKxQSMln9LKOV9RUPZpu+To1vXW/xSCXcdkXD7NJ+AnGiwwY9VSXO+5xVXC2UwLeapp31NM5sjeutFrHnro+qVaFEB50rS2mia4aIYAR8FD2eYxm2IcTqrifw5tcF+ZdqeKmyKwPnbBJVeiGoqiGR3QPa06IPcb0CT0mVEBE9qyLNuIFZNjd84S1djxSuo56a6VV0uUQlIewt5IomcxdvZGyQNHewQAeaxKv4ucJbXHhVXgdVntkt7fQ2a72yriimNOOkcU8TzsOYNDmHTQA66JU+ogIb4e4tm2VcTYeKPEq209jkttNLSY9YYp2zuo2ydJZ5ZG9DI9vTQ7NPUAhcvY+E1/u3B660b6eWx5fbspr71jtVIQ10UplLoiSN/RyNPKQdjqCQS0KxiICul44TX2z8J7FSR08t7yyvyy33vJKtjg50kokDpXbOvo4x6rQNDpsDbiuqqsBdkXGfPhkdmkmxm+47R0Ildrllc1zy4NPcObtpB8CAR2UwogK8Yfwcyuz4lmtxy25vybJDYqqwY6dgmOgZE5sQHlJKSC7ZJ8z1KxLtj2bWPEuBtdQ4ZcrxWYtTn+U6CnfG2SImkbFykucBvmJ+wqySICMbXl2XZdb77Z7lwxvuOMfaKh0NTWVEL2yykBrYgGOJ5jzE77eqVFn+xKstvBvB8qxTFKC3cSMXhhqpaY08bDcXAATQTHs9xG+Vx2QegI5ti0KICJeKOKZNl1DinELEIRZs1sG6imobkdMljlYBPRzFpI2QNBw2NjoRvmGPR8SOLdwlpLfT8Da6ir3SMFXNXXmBtHC3frObI0Ev6b1pu/YeymJEBBmWT5ninyg7rllo4e3jJ7bXWCloWyUU0UYZIyWRzgedw30IUm8PMjvOS2uoq73h9yxaaKf0bKaulje+RvKDzgsJGtkj4LpkQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH//2Q==';
(function(){function _setLogos(){const a=document.getElementById('logoLogin'),b=document.getElementById('logoSidebar');if(a)a.src=GII_LOGO;if(b)b.src=GII_LOGO;}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',_setLogos);else _setLogos();})();
// ── Default master data ──
const DEFAULT_STATUSES=[
  {name:'Production',color:'#ca8a04'},
  {name:'Stuffing',  color:'#ea580c'},
  {name:'Sailed',    color:'#2563eb'},
  {name:'Arrived',   color:'#7c3aed'},
  {name:'Delivered', color:'#16a34a'},
  {name:'Cleared',   color:'#475569'},
];
const DEFAULT_TAGS=['HONEY BOO','REEBIT','PANDAOMA','NVMEE','RONAN'];
const DEFAULT_RULES=[{keyword:'-01',tag:'HONEY BOO'},{keyword:'-04',tag:'REEBIT'},{keyword:'-06',tag:'PANDAOMA'},{keyword:'-07',tag:'NVMEE'},{keyword:'IAM',tag:'RONAN'}];
// Rumus Est. Tiba Gudang: cek field 'container' atau 'po', jika mengandung keyword → ETA + days
// Baris terakhir dengan isDefault=true adalah fallback jika tidak ada kondisi cocok
const DEFAULT_FORWARDER_RULES=[
  {keyword:'AJKY',forwarder:'HARVEST-AIR'},
  {keyword:'AIR', forwarder:'AIR'},
  {keyword:'SJP', forwarder:'HARVEST'},
  {keyword:'HA',  forwarder:'HECHUAN'},
  {keyword:'HV',  forwarder:'HECHUAN'},
  {keyword:'YW',  forwarder:'JH'},
  {keyword:'GZ',  forwarder:'JH'},
];
// Format: [{keyword:'AIR', forwarder:'Harvest'}, ...]
let forwarderRules=JSON.parse(localStorage.getItem('forwarder_rules')||'null')||[...DEFAULT_FORWARDER_RULES];


const DEFAULT_TAG_RULES=[
  {keyword:'BBB',       tag:'HONEY BOO',field:'po'},
  {keyword:'RRR',       tag:'REEBIT',   field:'po'},
  {keyword:'SSS',       tag:'PANDAOMA', field:'po'},
  {keyword:'GIM',       tag:'NVMEE',    field:'po'},
  {keyword:'IAM',       tag:'RONAN',    field:'po'},
  {keyword:'-08',       tag:'HQ',       field:'po'},
  {keyword:'COM/SUB-04',tag:'GROSIR',   field:'po'},
];
const DEFAULT_GUDANG_RULES=[
  {field:'container',keyword:'AIR',  days:3, label:'Kontainer AIR → ETA +3 hari'},
  {field:'container',keyword:'AJKY', days:7, label:'Kontainer AJKY → ETA +7 hari'},
  {field:'po',       keyword:'CTR',  days:7, label:'PO mengandung CTR → ETA +7 hari'},
];
const SHEETS_URL='https://script.google.com/macros/s/AKfycbxwlpkdaaiFBZvCb3lm38kWc9j5fIuNKoqxaNvDlHEX9qNzy_cKlCSC_TJ7YbJ8uPQ1Zg/exec';
const COLORS=['#2563eb','#06b6d4','#8b5cf6','#ec4899','#f59e0b','#10b981','#0891b2','#f43f5e']
const GRADS=['linear-gradient(90deg,#2563eb,#60a5fa)','linear-gradient(90deg,#06b6d4,#67e8f9)','linear-gradient(90deg,#8b5cf6,#c4b5fd)','linear-gradient(90deg,#ec4899,#f9a8d4)','linear-gradient(90deg,#f59e0b,#fcd34d)','linear-gradient(90deg,#10b981,#6ee7b7)','linear-gradient(90deg,#0891b2,#a5f3fc)','linear-gradient(90deg,#f43f5e,#fda4af)'];


// ── Force refresh master data jika versi lama ──
(function(){
  const MASTER_VERSION = '2'; // naikkan ini jika DEFAULT berubah
  if(localStorage.getItem('sm_master_version') !== MASTER_VERSION){
    // Hapus data master lama agar DEFAULT baru dipakai
    localStorage.removeItem('master_statuses');
    localStorage.removeItem('forwarder_rules');
    localStorage.removeItem('gudang_rules');
    localStorage.removeItem('tag_rules');
    localStorage.setItem('sm_master_version', MASTER_VERSION);
  }
})();

// ── State ──
let shipments=[],editId=null,authToken=sessionStorage.getItem('auth_token')||'',currentUser=null;
let activeStatFilter='',sortKey='',sortDir=1,currentView='table',notifPanelOpen=false,smartAlertsHidden=false;
let notifications=JSON.parse(localStorage.getItem('notif_v2')||'[]');
let parsedRows=[],parsedHeaders=[],colMapping={};
let detailTab='info',detailShipId=null;

// Master data
// Load master data — defaults hanya dimuat SEKALI pada instalasi pertama
let masterStatuses=JSON.parse(localStorage.getItem('master_statuses')||'null')||[...DEFAULT_STATUSES];
let masterTags=JSON.parse(localStorage.getItem('master_tags')||'null')||DEFAULT_TAGS;
let tagRules=JSON.parse(localStorage.getItem('tag_rules')||'null')||[...DEFAULT_TAG_RULES];
let gudangRules=JSON.parse(localStorage.getItem('gudang_rules')||'null')||[...DEFAULT_GUDANG_RULES];


// ── Status helpers (dynamic dari Master Data) ──
function getStatusOrder(){
  return masterStatuses.map(s=>s.name);
}
function getStatusIndex(status){
  const order=getStatusOrder();
  const i=order.indexOf(status);
  return i>=0?i:-1;
}

// ── Migrasi Master Data: tambah status baru jika belum ada ──
function migrateMasterData(){
  const correctColors={
    Production:'#ca8a04',
    Stuffing:  '#ea580c',
    Sailed:    '#2563eb',
    Arrived:   '#7c3aed',
    Delivered: '#16a34a',
    Cleared:   '#475569',
  };
  let changed=false;
  if(!masterStatuses.find(s=>s.name==='Production')){
    masterStatuses.unshift({name:'Production',color:'#ca8a04'});
    changed=true;
  }
  masterStatuses.forEach((s,i)=>{
    if(correctColors[s.name]&&s.color!==correctColors[s.name]){
      masterStatuses[i].color=correctColors[s.name];
      changed=true;
    }
  });
  if(changed){saveMaster();injectStatusStyles();}
}


async function loadMasterFromServer(){
  try{
    const d=await api('GET','/api/master');
    if(!d)return;
    if(d.statuses&&d.statuses.length){masterStatuses=d.statuses;localStorage.setItem('master_statuses',JSON.stringify(masterStatuses));}
    if(d.tags&&d.tags.length){masterTags=d.tags;localStorage.setItem('master_tags',JSON.stringify(masterTags));}
    if(d.tagRules&&d.tagRules.length){tagRules=d.tagRules;localStorage.setItem('tag_rules',JSON.stringify(tagRules));}
    if(d.gudang&&d.gudang.length){gudangRules=d.gudang;localStorage.setItem('gudang_rules',JSON.stringify(gudangRules));}
    if(d.forwarder&&d.forwarder.length){forwarderRules=d.forwarder;localStorage.setItem('forwarder_rules',JSON.stringify(forwarderRules));}
  }catch(e){}
}

function saveMaster(){
  localStorage.setItem('master_statuses',JSON.stringify(masterStatuses));
  localStorage.setItem('master_tags',JSON.stringify(masterTags));
  localStorage.setItem('tag_rules',JSON.stringify(tagRules));
  localStorage.setItem('gudang_rules',JSON.stringify(gudangRules));
  localStorage.setItem('forwarder_rules',JSON.stringify(forwarderRules));
  // Simpan ke server (Node.js) agar persisten
  api('POST','/api/master',{
    statuses:masterStatuses,tags:masterTags,tagRules,
    gudang:gudangRules,forwarder:forwarderRules
  }).catch(()=>{});
}
function getStatusNames(){return masterStatuses.map(s=>s.name);}
function getStatusColor(name){const s=masterStatuses.find(x=>x.name===name);return s?s.color:'#6b7a8d';}
// Warna konsisten per tag/brand (berdasarkan hash nama → palet lembut)
const TAG_PALETTE=[
  {bg:'#dbeafe',fg:'#1e40af',bd:'#93c5fd'}, // blue
  {bg:'#fce7f3',fg:'#9d174d',bd:'#f9a8d4'}, // pink
  {bg:'#e0e7ff',fg:'#3730a3',bd:'#a5b4fc'}, // indigo
  {bg:'#cffafe',fg:'#155e63',bd:'#67e8f9'}, // cyan
  {bg:'#fef3c7',fg:'#92400e',bd:'#fcd34d'}, // amber
  {bg:'#dcfce7',fg:'#166534',bd:'#86efac'}, // green
  {bg:'#ede9fe',fg:'#5b21b6',bd:'#c4b5fd'}, // violet
  {bg:'#ffedd5',fg:'#9a3412',bd:'#fdba74'}, // orange
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

// ── API ──
function aH(){return{'Content-Type':'application/json','Authorization':'Bearer '+authToken};}
async function api(method,url,body){
  const r=await fetch(url,{method,headers:aH(),body:body?JSON.stringify(body):undefined});
  if(r.status===401){showLogin();return null;}return r.json();
}

// ── Mobile Sidebar ──
function openMobileSidebar() {
  document.getElementById('sidebar').classList.add('mobile-open');
  document.getElementById('sidebarOverlay').classList.add('show');
}
function closeMobileSidebar() {
  document.getElementById('sidebar').classList.remove('mobile-open');
  document.getElementById('sidebarOverlay').classList.remove('show');
}

// ── Sidebar toggle ──
let sidebarMini = true;
function toggleSidebar() { /* dinonaktifkan: sidebar otomatis melebar saat hover */ }
function applySidebar() {
  const sb = document.getElementById('sidebar');
  const main = document.querySelector('.main');
  if (sb) sb.classList.add('mini');
  if (main) main.classList.add('mini');
}

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

// ── Init UI (populate dropdowns dari master) ──
function initUI(){
  migrateMasterData(); // Pastikan semua status terbaru ada
  // Status filter & form
  const statuses=getStatusNames();
  const fSt=document.getElementById('filterStatus');fSt.innerHTML='<option value="">Status</option>'+statuses.map(s=>`<option>${s}</option>`).join('');
  // Tags filter
  const fTg=document.getElementById('filterTag');fTg.innerHTML='<option value="">Tags</option>'+masterTags.map(t=>`<option>${t}</option>`).join('');
  // Status di dynamic CSS
  injectStatusStyles();
}

function injectStatusStyles(){
  let old=document.getElementById('dynamic-styles');if(old)old.remove();
  const style=document.createElement('style');style.id='dynamic-styles';
  style.textContent=masterStatuses.map(s=>{
    const cls=getStatusClass(s.name);
    const hex=s.color||'#6b7a8d';
    const rgb=hexToRgb(hex);
    return `.${cls}{background:${hex}18;color:${hex};}.${cls}::before{background:${hex};}`;
  }).join('');
  document.head.appendChild(style);
}

function hexToRgb(h){const r=parseInt(h.slice(1,3),16),g=parseInt(h.slice(3,5),16),b=parseInt(h.slice(5,7),16);return`${r},${g},${b}`;}

// ── Data ──
async function loadData(){
  const d=await api('GET','/api/shipments');if(!d)return;
  shipments=Array.isArray(d)?d:[];
  shipments=shipments.map(s=>({...s,tags:mergeTags(s.po,s.tags||[]),gudang:calcGudang(s.po,s.eta,s.container)}));
  // Isi forwarder kosong dari aturan Master Data
  const changed=applyAutoForwarder();
  if(changed)save(); // simpan ke server jika ada yang berubah
  await loadMasterFromServer();
  migrateMasterData();
  injectStatusStyles();
  autoUpdateStatus();
  render();renderDashboard();renderNotifPanel();setTimeout(checkAlerts,600);
  autoMobileView(); // HP otomatis pakai card view
  loadLastComments();
}

// Terapkan aturan forwarder otomatis ke semua shipment yang forwarder-nya kosong
// Kembalikan true jika ada perubahan
function applyAutoForwarder(){
  if(!forwarderRules||!forwarderRules.length)return false;
  let changed=false;
  shipments=shipments.map(s=>{
    if(s.forwarder&&s.forwarder.trim())return s; // sudah ada forwarder, skip
    const auto=autoForwarder(s.container||'');
    if(auto){changed=true;return{...s,forwarder:auto};}
    return s;
  });
  return changed;
}
function save(){if(!isAdmin())return;api('POST','/api/shipments',shipments).catch(e=>console.error(e));}

// Cache komentar terakhir
let lastCommentCache={};
async function loadLastComments(){
  // Load komentar terakhir SEMUA shipment dalam satu panggilan (bukan cuma 50)
  try{
    const d=await api('GET','/api/comments/latest');
    if(d&&typeof d==='object'){
      lastCommentCache={};
      Object.entries(d).forEach(([id,c])=>{lastCommentCache[id]=c;});
    }
  }catch(e){/* abaikan */}
  render();
}

// ── Date/Status Helpers ──
function parseSD(d){
  if(!d)return null;
  if(/^\d{4}-\d{2}-\d{2}$/.test(d)){const dt=new Date(d);dt.setHours(0,0,0,0);return dt;}
  const m=d.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})$/);
  if(m){const y=m[3].length===2?'20'+m[3]:m[3];const dt=new Date(`${y}-${m[2].padStart(2,'0')}-${m[1].padStart(2,'0')}`);dt.setHours(0,0,0,0);return dt;}
  return null;
}
function autoForwarder(container){
  if(!container)return'';
  const c=container.toUpperCase();
  for(const r of forwarderRules){
    if(r.keyword&&c.includes(r.keyword.toUpperCase()))return r.forwarder;
  }
  return'';
}

function calcGudang(po,eta,container){
  if(!eta)return'';
  const rules=gudangRules.filter(r=>!r.isDefault&&r.keyword); // abaikan default rule
  for(const r of rules){
    const field=r.field==='container'?container||'':po||'';
    if(r.keyword&&field.toUpperCase().includes(r.keyword.toUpperCase())){
      const d=new Date(eta);d.setDate(d.getDate()+(parseInt(r.days)||0));
      return d.toISOString().split('T')[0];
    }
  }
  // Default: ETA +14 hari jika tidak ada rule yang cocok
  const d=new Date(eta);d.setDate(d.getDate()+14);
  return d.toISOString().split('T')[0];
}
function gudangLabel(po,container){
  for(const r of gudangRules){
    if(r.isDefault)return`(ETA +${r.days}h)`;
    const haystack=(r.field==='container'?(container||''):(po||'')).toUpperCase();
    if(r.keyword&&haystack.includes(r.keyword.toUpperCase()))return`(ETA +${r.days}h — ${r.label})`;
  }
  return'(ETA +14h)';
}
// ── Status drag-to-reorder ──
let _statusDragIdx=null;
function statusDragStart(e,i){_statusDragIdx=i;e.currentTarget.style.opacity='.4';}
function statusDragEnd(e){e.currentTarget.style.opacity='1';_statusDragIdx=null;document.querySelectorAll('.master-item[draggable]').forEach(el=>el.style.background='');}
function statusDragOver(e){e.preventDefault();e.currentTarget.style.background='var(--accent-dim)';}
function statusDrop(e,targetIdx){
  e.preventDefault();e.currentTarget.style.background='';
  if(_statusDragIdx===null||_statusDragIdx===targetIdx)return;
  const moved=masterStatuses.splice(_statusDragIdx,1)[0];
  masterStatuses.splice(targetIdx,0,moved);
  saveMaster();renderMaster();
  showToast('info','Urutan diubah',`"${moved.name}" dipindahkan.`);
}

function calcAutoStatus(s){
  // Delivered/Cleared = manual override, jangan timpa
  if(['Delivered','Cleared'].includes(s.status))return s.status;
  const today=new Date();today.setHours(0,0,0,0);
  const etd=parseSD(s.etd),eta=parseSD(s.eta),stuffing=parseSD(s.stuffing);
  // Hitung status berdasarkan tanggal (prioritas tertinggi dulu)
  if(eta&&today>eta)return'Arrived';
  if(etd&&today>etd)return'Sailed';
  // Jika ada tanggal stuffing → minimal Stuffing (upgrade dari Production)
  if(stuffing)return'Stuffing';
  // Jika ada ETD/ETA tapi belum lewat → Stuffing (sudah dijadwalkan)
  if(etd||eta)return'Stuffing';
  // Jika ada tgl_production → Production
  if(s.item&&s.qty&&s.tgl_production)return'Production';
  // Fallback: tetap status saat ini
  return s.status||'Production';
}
function autoUpdateStatus(){
  let c=0;shipments=shipments.map(s=>{const ns=calcAutoStatus(s);if(ns!==s.status){c++;return{...s,status:ns};}return s;});
  if(c>0){save();showToast('info','Status diperbarui',`${c} shipment diupdate otomatis.`);}
}
function getRef(s){return s.gudang||calcGudang(s.po,s.eta,s.container);}
function getDelay(s){
  if(s.status==='Production')return{label:'Produksi',cls:'delay-prod'};
  if(s.status==='Delivered')return{label:'Terkirim',cls:'delay-done'};
  if(s.status==='Cleared')return{label:'Cleared',cls:'delay-done'};
  const today=new Date();today.setHours(0,0,0,0);
  const tgl=parseSD(getRef(s));
  if(!tgl)return s.status==='Arrived'?{label:'Tiba',cls:'delay-ok'}:{label:'—',cls:'delay-done'};
  const diff=Math.round((tgl-today)/86400000);
  if(diff<0)return{label:`${Math.abs(diff)}h terlambat`,cls:'delay-late'};
  if(diff===0)return{label:'Hari ini!',cls:'delay-warn'};
  if(s.status==='Arrived')return{label:'Tiba',cls:'delay-ok'};
  if(diff<=5)return{label:`${diff}h lagi`,cls:'delay-warn'};
  return{label:`${diff}h lagi`,cls:'delay-ok'};
}
function getAlertType(s){
  if(['Cleared','Delivered'].includes(s.status))return'ok';
  const today=new Date();today.setHours(0,0,0,0);
  const tgl=parseSD(getRef(s));if(!tgl)return'ok';
  const d=Math.round((tgl-today)/86400000);
  if(d<0)return'late';if(d<=5)return'warn';return'ok';
}
function esc(s){if(s==null)return'';return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}
function fmtDate(d){if(!d)return'—';const p=d.split('-');if(p.length!==3)return d;return`${p[2]}/${p[1]}/${p[0].slice(2)}`;}
function fmtVal(v){return v?'¥'+Number(v).toLocaleString():'—';}

// ── Tags (dari master + rules) ──
function tagsFromPO(po){
  const p=(po||'').toUpperCase();
  return tagRules.filter(r=>p.includes(r.keyword.toUpperCase())).map(r=>r.tag).filter((v,i,a)=>a.indexOf(v)===i);
}
function mergeTags(po,manual){return[...new Set([...tagsFromPO(po),...(manual||[])])];}

// ── Navigation ──
const PAGE_TITLES={shipment:'Shipment',dashboard:'Dashboard',calendar:'Kalender',ai:'AI Assistant',log:'Log Aktivitas',users:'Manajemen User',master:'Master Data',sheets:'Integrasi Sheets'};
function switchPage(p,btn){
  document.querySelectorAll('.page').forEach(e=>e.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(e=>e.classList.remove('active'));
  document.getElementById('page-'+p).classList.add('active');
  if(btn)btn.classList.add('active');
  else{const nb=document.getElementById('nav-'+p);if(nb)nb.classList.add('active');}
  document.getElementById('topbarTitle').textContent=PAGE_TITLES[p]||p;
  const ta=document.getElementById('topbarAction');
  const tp=document.getElementById('topbarPaste');
  ta.style.display=p==='shipment'&&isAdmin()?'':'none';
  if(tp) tp.style.display=p==='shipment'&&isAdmin()?'':'none';
  const cdb=document.getElementById('checkDupBtn');
  if(cdb) cdb.style.display=p==='shipment'&&isAdmin()?'':'none';
  if(p==='dashboard')renderDashboard();
  if(p==='calendar')renderCalendar();
  if(p==='log')loadUnifiedLog();
  if(p==='users')loadUsers();
  if(p==='master')renderMaster();
  if(p==='shipment')syncFreeze();
  if(p==='sheets')loadSheetsStatus();
  // Tutup sidebar mobile otomatis saat pilih menu
  closeMobileSidebar();
  bnavSet(p);
}

// ── Stats ──
function renderStats(){
  const total=shipments.length,aktif=shipments.filter(s=>!['Cleared','Delivered'].includes(s.status)).length;
  const sailed=shipments.filter(s=>['Stuffing','Sailed','Arrived'].includes(s.status)).length,late=shipments.filter(s=>getAlertType(s)==='late').length;
  const card=(k,v,l,col,cls,icon)=>`<div class="stat ${cls} ${activeStatFilter===k?'active':''}" onclick="setStatFilter('${k}')"><div class="stat-icon">${icon}</div><div class="stat-val" style="color:${col};">${v}</div><div class="stat-lbl">${l}</div></div>`;
  document.getElementById('statsBar').innerHTML=card('total',total,'Total PO','var(--text)','s-total','📦')+card('aktif',aktif,'Aktif','var(--accent)','s-aktif','⚡')+card('laut',sailed,'Pengiriman','var(--teal)','s-kirim','🚢')+card('late',late,'Terlambat',late>0?'var(--red)':'var(--green)','s-late',late>0?'🔥':'✅');
}
function setStatFilter(k){activeStatFilter=activeStatFilter===k?'':k;renderStats();render();}


// ── Changelog / Riwayat Perubahan ──
// ── Unified Log (merged Activity + Changelog via API) ──
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
        <div style="flex:1;min-width:0;"><div style="font-size:13px;font-weight:500;">${esc(e.user)} <span style="font-weight:400;color:var(--muted);">@${esc(e.username)}</span></div><div style="font-size:12px;color:var(--muted);margin-top:2px;">${esc(e.detail)}</div></div>
        <div style="font-size:11px;color:var(--muted);white-space:nowrap;">${fmtT(e.time)}</div>
      </div>`;
    }
    const sl=srcLabel[e.source]||e.source;const col=srcColor[e.source]||'var(--muted)';const uid='cl_'+_logPage+'_'+idx;
    const isND=e.changes.some(c=>c.field==='_new'||c.field==='_delete');
    const summary=isND?(e.changes[0].field==='_new'?'Shipment baru':'Shipment dihapus'):e.changes.map(c=>fldLabel[c.field]||c.field).join(', ');
    const detHtml=e.changes.filter(c=>c.field!=='_new'&&c.field!=='_delete').map(c=>
      `<div style="display:flex;gap:6px;align-items:center;padding:2px 0;font-size:12px;"><span style="min-width:70px;color:var(--muted);font-weight:600;">${fldLabel[c.field]||c.field}</span><span style="color:var(--red);text-decoration:line-through;font-size:11px;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${c.from||'—'}</span><span style="color:var(--muted);">→</span><span style="color:var(--green);font-weight:500;font-size:11px;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${c.to||'—'}</span></div>`).join('');
    return`<div style="border-bottom:1px solid var(--border2);padding:10px 8px;${e.shipId&&e.source!=='delete'?'cursor:pointer;':''}">
      <div style="display:flex;gap:10px;align-items:flex-start;" ${e.shipId&&e.source!=='delete'?`onclick="openDetail(${e.shipId})"`:''}> 
        <div style="width:30px;height:30px;border-radius:8px;background:${col}18;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span style="font-size:11px;font-weight:700;color:${col};">${sl.split(' ')[0]}</span></div>
        <div style="flex:1;min-width:0;">
          <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:13px;font-weight:600;color:var(--accent);">${esc(e.po)} <span style="font-weight:400;color:var(--text);">${esc(e.item)}</span></span><span style="font-size:11px;color:var(--muted);">${fmtT(e.time)}</span></div>
          <div style="font-size:12px;color:var(--muted);margin-top:2px;">${summary} · ${esc(e.user)}</div>
        </div>
      </div>
      ${detHtml?`<div style="margin:6px 0 0 40px;padding:6px 10px;background:var(--surface2);border-radius:6px;">${detHtml}</div>`:''}
    </div>`;
  }).join('');
  const tp=Math.ceil(total/limit);
  document.getElementById('logPager').innerHTML=tp>1?`<button class="btn btn-sm" ${_logPage<=0?'disabled':''} onclick="_logPage--;loadUnifiedLog()">◀</button> <span style="font-size:12px;color:var(--muted);">Hal ${_logPage+1}/${tp} (${total})</span> <button class="btn btn-sm" ${_logPage>=tp-1?'disabled':''} onclick="_logPage++;loadUnifiedLog()">▶</button>`:'';
}

// ── AI Assistant ──








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
  if(v==='table')syncFreeze();
}
// Auto card view di HP
function autoMobileView(){
  if(window.innerWidth<=768 && currentView!=='card'){setView('card');}
}
window.addEventListener('resize',()=>{if(window.innerWidth<=768 && currentView==='table')setView('card');});

// ── Sort ──
function setSortKey(k){if(sortKey===k)sortDir*=-1;else{sortKey=k;sortDir=1;}render();}
function applySort(list){if(!sortKey)return list;return[...list].sort((a,b)=>{let av,bv;if(sortKey==='_a'){const order={late:0,warning:1,ok:2,'':3};av=order[getAlertType(a)]??3;bv=order[getAlertType(b)]??3;}else if(sortKey==='_c'){av=(lastCommentCache[a.id]?.text||'').toLowerCase();bv=(lastCommentCache[b.id]?.text||'').toLowerCase();}else{av=a[sortKey]||'';bv=b[sortKey]||'';}if(typeof av==='number'&&typeof bv==='number')return(av-bv)*sortDir;if(!isNaN(parseFloat(av))&&!isNaN(parseFloat(bv))){av=parseFloat(av);bv=parseFloat(bv);}return av<bv?-sortDir:av>bv?sortDir:0;});}
function si(k){if(sortKey!==k)return'<span class="sort-icon">⇅</span>';return sortDir===1?'<span class="sort-icon" style="opacity:1;color:var(--accent);">↑</span>':'<span class="sort-icon" style="opacity:1;color:var(--accent);">↓</span>';}

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

// ── Render ──
function statusBadge(status){
  if(!status)return'<span class="status-badge s-none">—</span>';
  const col=getStatusColor(status);
  const slug=status.toLowerCase().replace(/[^a-z0-9]/g,'-');
  // Untuk status bawaan, pakai class CSS; untuk custom, inline style
  // builtIn handled by injectStatusStyles; fallback for known statuses
  const builtIn=['production','stuffing','sailed','arrived','delivered','cleared'];
  if(builtIn.includes(slug)){
    return`<span class="status-badge s-${slug}">${status}</span>`;
  }
  return`<span class="status-badge" style="background:${col}18;color:${col};border:1px solid ${col}40;"><span style="width:7px;height:7px;border-radius:50%;background:${col};display:inline-block;flex-shrink:0;"></span>${status}</span>`;
}
function render(){
  if(groupViewOn){renderGroupView();}
  renderStats();const list=getFiltered();renderTable(list);renderCards(list);
  // Quick Summary Bar
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

function syncFreeze(){
  const head=document.getElementById('tableHead');if(!head)return;
  const cb=head.querySelector('th:nth-child(1)'),po=head.querySelector('th:nth-child(2)');
  if(!cb||!po)return;
  const w=cb.getBoundingClientRect().width+po.getBoundingClientRect().width;
  if(w>40)document.documentElement.style.setProperty('--frz-item',(Math.floor(w)-1)+'px');
}
if(!window._frzBound){window._frzBound=true;window.addEventListener('resize',function(){clearTimeout(window._frzT);window._frzT=setTimeout(syncFreeze,120);});}
function renderTable(list){
  document.getElementById('tableHead').innerHTML=
    `<th class="col-freeze-1" style="width:36px;left:0;"><input type="checkbox" id="checkAll" onchange="toggleAll(this.checked)" style="cursor:pointer;accent-color:var(--accent);"></th>`
    +['PO','Item','Status','Produksi','Stuffing','ETD','ETA','Est. Tiba','Kontainer','Supplier','Forwarder','Alert','Komentar Terakhir'].map((c,i)=>{
    const keys=['po','item','status','tgl_production','stuffing','etd','eta','gudang','container','supplier','forwarder','_a','_c'];
    const freezeCls=i===0?'col-freeze-2':i===1?'col-freeze-3':'';
    const freezeStyle=i===0?'left:36px;':'';
    return`<th class="sortable ${freezeCls} ${i>3?'hide-lg':''}" style="${freezeStyle}" onclick="setSortKey('${keys[i]}')">${c}${si(keys[i])}</th>`;}).join('')+'<th></th>';
  const tbody=document.getElementById('tableBody'),empty=document.getElementById('emptyState');
  if(!list.length){document.getElementById('tableHead').innerHTML='';tbody.innerHTML='';empty.style.display='block';return;}empty.style.display='none';
  tbody.innerHTML=list.map(s=>{
    const d=getDelay(s),g=s.gudang||calcGudang(s.po,s.eta,s.container);
    const aTag='';
    const cTag='';
    const gs=getAlertType(s)==='late'?'color:var(--red);font-weight:500;':g?'color:var(--accent);font-weight:500;':'color:var(--muted);';
    const lc=lastCommentCache[s.id];
    const lcText=lc?`<span title="${esc(lc.text)}">${esc(lc.text.substring(0,50))}${lc.text.length>50?'…':''}</span>`:'';
    // Smart date: Tgl Datang jika sudah Delivered/Cleared, Est Tiba jika belum
    const isDone=['Delivered','Cleared'].includes(s.status);
    const smartDate=isDone?(s.deliveredDate||''):(g||'');
    const smartLabel=isDone&&s.deliveredDate?'Tgl Datang':'Est. Tiba';
    const smartStyle=isDone&&s.deliveredDate?'color:var(--green);font-weight:600;':(getAlertType(s)==='late'?'color:var(--red);font-weight:500;':g?'color:var(--accent);font-weight:500;':'color:var(--muted);');
    return`<tr id="row-${s.id}" class="${d.cls==='delay-late'?'overdue-row':''}">
      <td class="col-freeze-1" style="width:36px;min-width:36px;left:0;"><input type="checkbox" class="row-check" data-id="${s.id}" onchange="onRowCheck()" style="cursor:pointer;accent-color:var(--accent);"></td>
      <td class="td-po col-freeze-2" onclick="openDetail(${s.id})" style="cursor:pointer;min-width:170px;left:36px;">${esc(s.po)}${cTag}${aTag}</td>
      <td class="col-freeze-3" style="min-width:180px;"><div class="td-item" title="${esc(s.item)}">${esc(s.item)}</div></td>
      <td class="editable" ondblclick="qeStatus(${s.id},this)">${statusBadge(s.status)}</td>
      <td class="hide-lg td-date editable" ondblclick="qeDate(${s.id},'tgl_production',this)" title="Dbl-click untuk edit">${s.tgl_production?fmtDate(s.tgl_production):'—'}</td>
      <td class="hide-lg td-date editable" ondblclick="qeDate(${s.id},'stuffing',this)" title="Dbl-click untuk edit">${fmtDate(s.stuffing)||'—'}</td>
      <td class="hide-lg td-date editable" ondblclick="qeDate(${s.id},'etd',this)" title="Dbl-click untuk edit">${fmtDate(s.etd)||'—'}</td>
      <td class="hide-lg td-date editable" ondblclick="qeDate(${s.id},'eta',this)" title="Dbl-click untuk edit">${fmtDate(s.eta)||'—'}</td>
      <td class="hide-lg td-date editable" ondblclick="qeDate(${s.id},isDone?'deliveredDate':'gudang',this)" title="${smartLabel} (dbl-click edit)" style="${smartStyle}">${fmtDate(smartDate)||'—'}</td>
      <td class="hide-lg" style="font-family:'Plus Jakarta Sans',sans-serif;font-size:11px;color:var(--text);">${esc(s.container)||'—'}</td>
      <td class="hide-lg" style="font-size:12px;white-space:nowrap;" title="${esc(s.supplier)}">${esc(s.supplier)||'—'}</td>
      <td class="hide-lg" style="font-size:12px;color:var(--text);white-space:nowrap;">${esc(s.forwarder)||'—'}</td>
      <td><span class="delay-badge ${d.cls}">${d.label}</span></td>
      <td class="td-comment">${lcText}</td>
      <td><div class="actions">
        <button class="btn btn-sm" onclick="openDetail(${s.id})">Detail</button>
        <button class="btn btn-sm admin-only" onclick="openEdit(${s.id})">Edit</button>
        <button class="btn btn-sm btn-danger admin-only" onclick="del(${s.id})">Hapus</button>
      </div></td>
    </tr>`;
  }).join('');
  syncFreeze();
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
      <div class="card-po">${esc(s.po)}</div>
      <div class="card-item">${esc(s.item)}</div>
      <div style="display:flex;gap:6px;align-items:center;margin-bottom:8px;">${statusBadge(s.status)}<span class="delay-badge ${d.cls}">${d.label}</span></div>
      <div class="card-meta">
        ${s.tgl_production?`<div><div class="card-meta-lbl">Produksi</div><div class="card-meta-val">${fmtDate(s.tgl_production)}</div></div>`:''}
        <div><div class="card-meta-lbl">ETA</div><div class="card-meta-val">${fmtDate(s.eta)||'—'}</div></div>
        <div><div class="card-meta-lbl">${['Delivered','Cleared'].includes(s.status)&&s.deliveredDate?'Tgl Datang':'Est. Tiba'}</div><div class="card-meta-val">${['Delivered','Cleared'].includes(s.status)&&s.deliveredDate?fmtDate(s.deliveredDate):fmtDate(g)||'—'}</div></div>
        <div><div class="card-meta-lbl">Kontainer</div><div class="card-meta-val">${esc(s.container)||'—'}</div></div>
        <div><div class="card-meta-lbl">Forwarder</div><div class="card-meta-val">${esc(s.forwarder)||'—'}</div></div>
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
function bulkAction(action){
  const checks=document.querySelectorAll('.row-check:checked');
  const ids=[...checks].map(c=>parseInt(c.dataset.id));
  if(!ids.length){showToast('warn','Pilih dulu','Centang shipment yang ingin diproses.');return;}
  if(action==='delete'){
    if(!confirm('Hapus '+ids.length+' shipment?'))return;
    shipments=shipments.filter(s=>!ids.includes(s.id));save();render();
    showToast('info','Dihapus',ids.length+' shipment dihapus.');
  }else if(action==='status'){
    const st=document.getElementById('be_status')?.value;
    if(!st)return;
    shipments=shipments.map(s=>ids.includes(s.id)?{...s,status:st}:s);save();render();
    showToast('info','Status diubah',ids.length+' shipment → '+st);
  }
  document.querySelectorAll('.row-check').forEach(c=>c.checked=false);
  onRowCheck();
}
function onRowCheck(){const all=document.querySelectorAll('.row-check'),ch=document.querySelectorAll('.row-check:checked');const ca=document.getElementById('checkAll');ca.indeterminate=ch.length>0&&ch.length<all.length;ca.checked=ch.length===all.length&&all.length>0;updateBB();}
function toggleAll(v){document.querySelectorAll('.row-check').forEach(c=>c.checked=v);updateBB();}
function updateBB(){const ids=getSelIds(),bar=document.getElementById('bulkBar');bar.style.display=ids.length?'flex':'none';document.getElementById('bulkCount').textContent=`${ids.length} dipilih`;}
function clearSel(){document.querySelectorAll('.row-check').forEach(c=>c.checked=false);const ca=document.getElementById('checkAll');if(ca){ca.checked=false;ca.indeterminate=false;}updateBB();}
function deleteSelected(){
  if(!guardAdmin('Hanya admin.'))return;
  const ids=getSelIds();if(!ids.length)return;
  if(!confirm(`Hapus ${ids.length} shipment?`))return;
  // Cleanup komentar orphan
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
  // Populate status select di bulk edit
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
  // gudang calculated automatically
  
  document.getElementById('f_status').value=calcAutoStatus({po,etd:document.getElementById('f_etd').value,eta,status:document.getElementById('f_status').value,container});
  // Update tags berdasarkan PO
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
  if(!po||!item){showToast('warn','Data kurang','Harap isi PO dan Item.');return;}
  // forwarder optional
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
  const docItems=[{k:'invoice',l:'INV'},{k:'pl',l:'PL'},{k:'do',l:'DO'},{k:'pib',l:'PIB'},{k:'ls',l:'LS'}];
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
          <div class="detail-row"><span class="detail-row-lbl">ETA</span><span class="detail-row-val">${fmtDate(s.eta)||'—'}</span></div>
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
  // Update cache
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

// ── Master Data ──
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
        <span class="rule-keyword">${r.field==='container'?'Kontainer':'PO'}</span>
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
      <input type="text" value="${esc(s.name)}" style="flex:1;border:1px solid var(--border);border-radius:4px;padding:5px 8px;font-size:13px;background:var(--bg);color:var(--text);" onchange="updateStatusName(${i},this.value)" title="Ubah nama status">
      <button class="btn btn-sm btn-danger" onclick="deleteStatus(${i})">Hapus</button>
    </div>`).join('');
  sl._dragIdx=null;

  // ── Tags list ──
  document.getElementById('masterTagList').innerHTML=masterTags.map((t,i)=>`
    <div class="master-item">
      <span class="tag-pill">${t}</span>
      <input type="text" value="${t}" style="flex:1;border:1px solid var(--border);border-radius:4px;padding:5px 8px;font-size:13px;background:var(--bg);color:var(--text);" onchange="updateTagName(${i},this.value)" title="Ubah nama tag">
      <button class="btn btn-sm btn-danger" onclick="deleteTag(${i})">Hapus</button>
    </div>`).join('');

  // ── Tag rules — drag + inline edit ──
  let _tagDragIdx=null;
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

  // Tag select di form rule
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
  document.getElementById('gr_keyword').value='';
  document.getElementById('gr_days').value='3';
}
function deleteGudangRule(i){
  if(!confirm('Hapus aturan ini?'))return;
  gudangRules.splice(i,1);saveMaster();renderMaster();
}
function updateGudangKeyword(i,v){gudangRules[i].keyword=v.trim().toUpperCase();saveMaster();}
function updateGudangDays(i,val){
  gudangRules[i].days=parseInt(val)||0;saveMaster();
  showToast('info','Diperbarui',`Hari diubah ke ${gudangRules[i].days}.`);
}


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
  showToast('info','Urutan diubah',`Aturan dipindahkan.`);
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
function delForwarderRule(i){
  if(!confirm(`Hapus aturan "${forwarderRules[i].keyword}"?`))return;
  forwarderRules.splice(i,1);saveMaster();renderMaster();
}

// ── Status CRUD (semua bisa edit & hapus) ──
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
  // Update nama di semua shipment yang pakai status ini
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
  // Update di semua shipment dan tag rules
  shipments=shipments.map(s=>({...s,tags:(s.tags||[]).map(t=>t===old?newName:t)}));
  tagRules=tagRules.map(r=>r.tag===old?{...r,tag:newName}:r);
  save();saveMaster();initUI();renderMaster();
  showToast('info','Tag diubah',`"${old}" → "${newName}"`);
}
function deleteTag(i){
  if(!confirm(`Hapus tag "${masterTags[i]}"?`))return;
  const name=masterTags[i];masterTags.splice(i,1);
  // Hapus tag dari semua shipment
  shipments=shipments.map(s=>({...s,tags:(s.tags||[]).filter(t=>t!==name)}));
  save();saveMaster();initUI();renderMaster();
  showToast('info','Tag dihapus','');
}

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

// ── Dashboard ──
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
  // Date filter — berdasarkan ETD (sailing), normalisasi ke YYYY-MM-DD
  const dfrom=(document.getElementById('dashDateFrom')?.value||'').slice(0,10);
  const dto=(document.getElementById('dashDateTo')?.value||'').slice(0,10);
  const normD=v=>{if(!v)return '';const s=String(v).trim();const m=s.match(/^(\d{4})-(\d{2})-(\d{2})/);if(m)return m[1]+'-'+m[2]+'-'+m[3];const m2=s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})/);if(m2){const y=m2[3].length===2?'20'+m2[3]:m2[3];return y+'-'+m2[2].padStart(2,'0')+'-'+m2[1].padStart(2,'0');}return s.slice(0,10);};
  const src=(!dfrom&&!dto)?shipments:shipments.filter(s=>{
    const d=normD(s.etd||'');
    if(!d)return false;
    if(dfrom&&d<dfrom)return false;
    if(dto&&d>dto)return false;
    return true;
  });
  const _fi=document.getElementById('dashFilterInfo');
  if(_fi){const noEtd=(dfrom||dto)?shipments.filter(s=>!normD(s.etd||'')).length:0;_fi.textContent=(dfrom||dto)?`Menampilkan ${src.length} dari ${shipments.length} shipment`+(noEtd>0?` · ${noEtd} PO belum sailing (tanpa ETD, tidak difilter)`:''):'';}
  const total=src.length,aktif=src.filter(s=>!['Cleared','Delivered'].includes(s.status)).length;
  const sailed=src.filter(s=>['Stuffing','Sailed','Arrived'].includes(s.status)).length;
  const late=src.filter(s=>getAlertType(s)==='late').length;
  // On-Time: hanya PO yang BENAR-BENAR selesai (punya Tgl Datang aktual) + punya referensi estimasi
  const done=src.filter(s=>s.deliveredDate&&(s.gudang||s.eta));
  const onTimeDone=done.filter(s=>{
    const ref=s.gudang||s.eta;
    const refD=normD(ref); const delD=normD(s.deliveredDate);
    return delD&&refD&&delD<=refD;
  });
  const ontime=done.length?Math.round((onTimeDone.length/done.length)*100):null;
  const monthMap={};for(let i=11;i>=0;i--){const d=new Date();d.setDate(1);d.setMonth(d.getMonth()-i);monthMap[d.toISOString().slice(0,7)]=0;}
  src.forEach(s=>{const k=normD(s.etd||'').slice(0,7);if(monthMap[k]!==undefined)monthMap[k]++;});
  const months=Object.entries(monthMap),maxM=Math.max(...months.map(m=>m[1]),1);
  const tagMap={};src.forEach(s=>(s.tags||[]).forEach(t=>{tagMap[t]=(tagMap[t]||0)+1;}));
  const tags=Object.entries(tagMap).sort((a,b)=>b[1]-a[1]),maxT=Math.max(...tags.map(t=>t[1]),1);
  const supMap={};src.forEach(s=>{supMap[s.supplier]=(supMap[s.supplier]||0)+1;});
  const supAll=Object.entries(supMap).filter(([k])=>k&&k!=='undefined').sort((a,b)=>b[1]-a[1]),maxS=Math.max(...supAll.map(t=>t[1]),1);
  const statMap={};getStatusNames().forEach(st=>{statMap[st]=src.filter(s=>s.status===st).length;});
  // ── Donut chart status (SVG arcs dengan gradient, warna-warni) ──
  const donutColors={Production:['#f59e0b','#fcd34d'],Stuffing:['#ec4899','#f9a8d4'],Sailed:['#2563eb','#60a5fa'],Arrived:['#8b5cf6','#c4b5fd'],Delivered:['#10b981','#6ee7b7'],Cleared:['#64748b','#cbd5e1']};
  const statEntries=getStatusNames().map(st=>({st,n:statMap[st]||0,grad:donutColors[st]||['#94a3b8','#cbd5e1']})).filter(x=>x.n>0);
  const statTotal=statEntries.reduce((a,x)=>a+x.n,0)||1;
  const dR=58,dC=2*Math.PI*dR,dSW=22;
  let _off=0;
  const donutArcs=statEntries.map((x,i)=>{
    const frac=x.n/statTotal, len=frac*dC, gap=dC-len;
    const dashoffset=-_off; _off+=len;
    return`<circle cx="75" cy="75" r="${dR}" fill="none" stroke="url(#dg${i})" stroke-width="${dSW}" stroke-dasharray="${len} ${gap}" stroke-dashoffset="${dashoffset}"/>`;
  }).join('');
  const donutDefs=statEntries.map((x,i)=>`<linearGradient id="dg${i}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${x.grad[0]}"/><stop offset="100%" stop-color="${x.grad[1]}"/></linearGradient>`).join('');
  const donutHtml=statEntries.length?`<div class="donut-wrap">
      <div class="donut-svg-wrap"><svg width="150" height="150" viewBox="0 0 150 150" style="transform:rotate(-90deg);">
        <defs>${donutDefs}</defs>${donutArcs}
      </svg><div class="donut-hole"><div class="donut-total">${statTotal}</div><div class="donut-sub">PO</div></div></div>
      <div class="donut-legend">${statEntries.map(x=>`<div class="donut-leg-item"><span class="donut-dot" style="background:linear-gradient(135deg,${x.grad[0]},${x.grad[1]});"></span><span class="donut-leg-name">${x.st}</span><span class="donut-leg-val">${x.n} <span style="color:var(--muted);font-weight:500;">(${Math.round(x.n/statTotal*100)}%)</span></span></div>`).join('')}</div>
    </div>`:'<div style="font-size:13px;color:var(--muted);padding:20px;text-align:center;">Belum ada data.</div>';
  const pct=ontime??0,r=46,circ=2*Math.PI*r;
  const ringGrad=pct>=80?['#10b981','#34d399']:pct>=60?['#f59e0b','#fcd34d']:['#e11d48','#fb7185'];
  const ring=`<div class="ontime-ring"><svg width="110" height="110" viewBox="0 0 110 110"><defs><linearGradient id="otGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${ringGrad[0]}"/><stop offset="100%" stop-color="${ringGrad[1]}"/></linearGradient></defs><circle cx="55" cy="55" r="${r}" fill="none" stroke="var(--border2)" stroke-width="10"/><circle cx="55" cy="55" r="${r}" fill="none" stroke="url(#otGrad)" stroke-width="10" stroke-dasharray="${circ}" stroke-dashoffset="${circ-(circ*pct/100)}" stroke-linecap="round"/></svg><div class="ontime-num" style="color:${ringGrad[0]};">${ontime!==null?pct+'%':'—'}</div></div>`;
  document.getElementById('dashContent').innerHTML=`
    <div class="stats" style="margin-bottom:16px;">
      <div class="stat s-total" onclick="goShipment('total')" style="cursor:pointer;" title="Lihat semua shipment">
        <div class="stat-icon">📦</div>
        <div class="stat-val" style="color:var(--text);">${total}</div><div class="stat-lbl">Total PO</div></div>
      <div class="stat s-aktif" onclick="goShipment('aktif')" style="cursor:pointer;" title="Lihat shipment aktif">
        <div class="stat-icon">⚡</div>
        <div class="stat-val" style="color:var(--accent);">${aktif}</div><div class="stat-lbl">Aktif</div></div>
      <div class="stat s-kirim" onclick="goShipment('laut')" style="cursor:pointer;" title="Lihat shipment dalam pengiriman">
        <div class="stat-icon">🚢</div>
        <div class="stat-val" style="color:var(--teal);">${sailed}</div><div class="stat-lbl">Pengiriman</div></div>
      <div class="stat s-late" onclick="goShipment('late')" style="cursor:pointer;" title="Lihat shipment terlambat">
        <div class="stat-icon">${late>0?'🔥':'✅'}</div>
        <div class="stat-val" style="color:${late>0?'var(--red)':'var(--green)'};">${late}</div><div class="stat-lbl">Terlambat</div></div>
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
        ${tags.length?tags.map(([t,v],i)=>{
          const rmbTag=src.filter(s=>(s.tags||[]).includes(t)).reduce((a,s)=>a+parseFloat(s.value||0),0);
          return`<div class="bar-track" onclick="filterByTag('${t.replace(/'/g,"\\'")}')" style="cursor:pointer;" title="Klik untuk filter shipment dengan tag ${t}">
            <div class="bar-label">${t}</div>
            <div class="bar-bg"><div class="bar-fill" style="width:${v/maxT*100}%;background:${GRADS[i%GRADS.length]};"></div></div>
            <div class="bar-val">${v}</div>
            <div style="font-size:10px;color:var(--muted);margin-left:4px;font-family:'Plus Jakarta Sans',sans-serif;">¥${Math.round(rmbTag/1000)}k</div>
          </div>`;
        }).join(''):'<div style="font-size:13px;color:var(--muted);">Belum ada data.</div>'}
      </div>
      <div class="chart-card"><div class="chart-title">🏭 Breakdown per Supplier</div>
        ${supAll.length?supAll.map(([sup,v],i)=>{
          const rmbSup=src.filter(s=>s.supplier===sup).reduce((a,s)=>a+parseFloat(s.value||0),0);
          return`<div class="bar-track" onclick="filterBySupplier('${sup.replace(/'/g,"\\'")}')" style="cursor:pointer;" title="Klik untuk filter shipment dari ${esc(sup)}">
            <div class="bar-label" title="${esc(sup)||'—'}">${esc(sup)||'—'}</div>
            <div class="bar-bg"><div class="bar-fill" style="width:${v/maxS*100}%;background:${GRADS[i%GRADS.length]};"></div></div>
            <div class="bar-val">${v}</div>
            <div style="font-size:10px;color:var(--muted);margin-left:4px;font-family:'Plus Jakarta Sans',sans-serif;">¥${Math.round(rmbSup/1000)}k</div>
          </div>`;
        }).join(''):'<div style="font-size:13px;color:var(--muted);padding:8px 0;">Belum ada data.</div>'}
      </div>
    </div>`;

  // ── Forwarder Performance + Pipeline Value (side by side) ──
  const fwdPerfMap={};
  src.forEach(s=>{
    const fwd=s.forwarder||'(tanpa forwarder)';
    if(!fwdPerfMap[fwd])fwdPerfMap[fwd]={count:0,rmb:0,delays:0,onTime:0,total:0,transitDays:[]};
    fwdPerfMap[fwd].count++;fwdPerfMap[fwd].rmb+=parseFloat(s.value||0);
    // Rata-rata pengiriman: dari stuffing (atau ETD) sampai diterima gudang (deliveredDate)
    const startD=parseSD(s.stuffing)||parseSD(s.etd);
    const endD=s.deliveredDate?parseSD(s.deliveredDate):null;
    if(startD&&endD){const td=Math.round((endD-startD)/86400000);if(td>0&&td<365)fwdPerfMap[fwd].transitDays.push(td);}
    const ref=s.gudang||s.eta;
    if(ref){
      fwdPerfMap[fwd].total++;
      const refD=new Date(ref);refD.setHours(0,0,0,0);
      if(['Arrived','Delivered','Cleared'].includes(s.status)){
        const actualDate=s.deliveredDate?new Date(s.deliveredDate):today;
        const daysLate=Math.round((actualDate-refD)/86400000);
        if(daysLate>0)fwdPerfMap[fwd].delays+=daysLate;else fwdPerfMap[fwd].onTime++;
      }else if(today>refD){const dl=Math.round((today-refD)/86400000);if(dl>0)fwdPerfMap[fwd].delays+=dl;}
    }
  });
  const fwdArr=Object.entries(fwdPerfMap).sort((a,b)=>b[1].count-a[1].count).slice(0,10);
  const dashEl=document.getElementById('dashContent');
  const pipeline={};
  getStatusNames().forEach(st=>{pipeline[st]={count:0,rmb:0};});
  src.forEach(s=>{if(pipeline[s.status]){pipeline[s.status].count++;pipeline[s.status].rmb+=parseFloat(s.value||0);}});
  const pipeMax=Math.max(...Object.values(pipeline).map(p=>p.rmb),1);
  const totalRMB=src.reduce((a,s)=>a+parseFloat(s.value||0),0);
  const activeRMB=src.filter(s=>!['Delivered','Cleared'].includes(s.status)).reduce((a,s)=>a+parseFloat(s.value||0),0);

  // Row: Forwarder + Pipeline
  dashEl.innerHTML+=`<div class="dash-row">
    <div class="chart-card"><div class="chart-title">🚛 Forwarder Performance</div>
      ${fwdArr.length?`<div style="font-size:11px;color:var(--muted);margin-bottom:10px;">⏱ rata-rata pengiriman aktual (Stuffing → Tgl Datang, hanya yang sudah datang)</div>
      ${fwdArr.map(([name,d],i)=>{
        const otr=d.total>0?Math.round((d.onTime/d.total)*100):0;
        const avgD=d.total>0?Math.round(d.delays/d.total):0;
        const avgT=d.transitDays.length?Math.round(d.transitDays.reduce((a,b)=>a+b,0)/d.transitDays.length):null;
        const otGrad=otr>=80?'linear-gradient(90deg,#10b981,#6ee7b7)':otr>=50?'linear-gradient(90deg,#f59e0b,#fcd34d)':'linear-gradient(90deg,#e11d48,#fb7185)';
        return`<div class="sp-card" onclick="document.getElementById('searchInput').value='${name.replace(/'/g,"\\'")}';onSearchInput('${name.replace(/'/g,"\\'")}');switchPage('shipment',document.getElementById('nav-shipment'));">
          <div class="sp-rank ${i===0?'r1':i===1?'r2':i===2?'r3':''}">${i+1}</div>
          <div style="flex:1;min-width:0;">
            <div class="sp-name">${name}</div>
            <div class="sp-stats">
              <span>${d.count} PO</span>
              <span>¥${Math.round(d.rmb).toLocaleString()}</span>
              ${avgT!==null?`<span style="color:var(--accent);">⏱ ${avgT} hari</span>`:''}
              ${avgD>0?`<span style="color:var(--red);">+${avgD}h late</span>`:''}
            </div>
            <div style="display:flex;align-items:center;gap:8px;margin-top:6px;">
              <div style="flex:1;height:7px;background:var(--surface2);border-radius:5px;overflow:hidden;box-shadow:inset 0 1px 2px rgba(0,0,0,.05);"><div style="width:${otr}%;height:100%;background:${otGrad};border-radius:5px;box-shadow:0 1px 3px rgba(0,0,0,.12);"></div></div>
              <span style="font-size:11px;font-weight:700;color:${otr>=80?'var(--green)':otr>=50?'var(--yellow)':'var(--red)'};white-space:nowrap;">${otr}%</span>
            </div>
          </div>
        </div>`;}).join('')}
    </div>`:`<div style="font-size:13px;color:var(--muted);padding:8px 0;">Belum ada data.</div></div>`}
    <div class="chart-card"><div class="chart-title">💰 Pipeline Value</div>
      <div style="display:flex;gap:12px;margin-bottom:16px;">
        <div style="flex:1;padding:12px 14px;background:var(--surface2);border-radius:8px;text-align:center;">
          <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.05em;">Total Nilai</div>
          <div style="font-size:20px;font-weight:800;color:var(--text);font-family:'Plus Jakarta Sans',sans-serif;">¥${Math.round(totalRMB).toLocaleString()}</div>
        </div>
        <div style="flex:1;padding:12px 14px;background:var(--accent-dim);border-radius:8px;text-align:center;">
          <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.05em;">Masih Aktif</div>
          <div style="font-size:20px;font-weight:800;color:var(--accent);font-family:'Plus Jakarta Sans',sans-serif;">¥${Math.round(activeRMB).toLocaleString()}</div>
        </div>
      </div>
      <div style="font-size:12px;color:var(--muted);margin-bottom:8px;">Nilai per tahap status</div>
      ${getStatusNames().map(st=>{const p=pipeline[st];const col=statusGrad(st);
        return`<div class="bar-track">
          <div class="bar-label" style="width:90px;">${statusBadge(st)}</div>
          <div class="bar-bg"><div class="bar-fill" style="width:${p.rmb/pipeMax*100}%;background:${col};"></div></div>
          <div class="bar-val" style="min-width:100px;font-family:'Plus Jakarta Sans',sans-serif;font-size:11px;"><strong>¥${Math.round(p.rmb).toLocaleString()}</strong> <span style="color:var(--muted);">${p.count}</span></div>
        </div>`;}).join('')}
    </div>
  </div>`;

  // ── Analisa Lead Time (full width) ──
  const DAY=86400000;
  function calcLT(list){
    const r={prod2stuff:[],stuff2sail:[],sail2arrive:[],arrive2deliver:[],stuff2deliver:[],total:[]};
    list.forEach(s=>{
      const tp=parseSD(s.tgl_production),ts=parseSD(s.stuffing),te=parseSD(s.etd),ta=parseSD(s.eta),td=s.deliveredDate?parseSD(s.deliveredDate):null;
      if(tp&&ts){const d=Math.round((ts-tp)/DAY);if(d>0&&d<365)r.prod2stuff.push(d);}
      if(ts&&te){const d=Math.round((te-ts)/DAY);if(d>0&&d<180)r.stuff2sail.push(d);}
      if(te&&ta){const d=Math.round((ta-te)/DAY);if(d>0&&d<180)r.sail2arrive.push(d);}
      if(ta&&td){const d=Math.round((td-ta)/DAY);if(d>=0&&d<180)r.arrive2deliver.push(d);}
      if(ts&&td){const d=Math.round((td-ts)/DAY);if(d>0&&d<365)r.stuff2deliver.push(d);}
      if(tp&&td){const d=Math.round((td-tp)/DAY);if(d>0&&d<730)r.total.push(d);}
    });return r;
  }
  const avgA=arr=>arr.length?Math.round(arr.reduce((a,b)=>a+b,0)/arr.length):null;
  const minA=arr=>arr.length?Math.min(...arr):null;
  const maxA=arr=>arr.length?Math.max(...arr):null;
  const stages=[
    {key:'prod2stuff',label:'🏭 Produksi → Stuffing',color:'linear-gradient(90deg,#f59e0b,#fcd34d)'},
    {key:'stuff2sail',label:'📦 Stuffing → Sailed',color:'linear-gradient(90deg,#ec4899,#f9a8d4)'},
    {key:'sail2arrive',label:'🚢 Sailed → Arrived',color:'linear-gradient(90deg,#2563eb,#60a5fa)'},
    {key:'arrive2deliver',label:'⚓ Arrived → Delivered',color:'linear-gradient(90deg,#10b981,#6ee7b7)'},
    {key:'total',label:'📋 Total End-to-End',color:'linear-gradient(90deg,#8b5cf6,#c4b5fd)'},
  ];
  function renderLTBars(lt,stgs,lw){
    const mx=Math.max(...stgs.map(st=>avgA(lt[st.key])||0),1);
    return stgs.map(st=>{
      const a=avgA(lt[st.key]),mn=minA(lt[st.key]),mx2=maxA(lt[st.key]),n=lt[st.key].length;
      return`<div class="bar-track"><div class="bar-label" style="width:${lw||180}px;">${st.label}</div><div class="bar-bg"><div class="bar-fill" style="width:${a?(a/mx*100):0}%;background:${st.color};"></div></div><div style="min-width:130px;font-size:11px;text-align:right;">${a!==null?`<strong>${a} hari</strong> <span style="color:var(--muted);">(${mn}–${mx2}, ${n}x)</span>`:'<span style="color:var(--muted);">—</span>'}</div></div>`;
    }).join('');
  }
  const ltAll=calcLT(src);
  const allTags=[...new Set(src.flatMap(s=>s.tags||[]))].filter(Boolean).sort();
  let ltByTag='';
  if(allTags.length){
    const tagRows=allTags.map(tag=>{const ships=src.filter(s=>(s.tags||[]).includes(tag));const lt=calcLT(ships);return{tag,n:ships.length,prod:avgA(lt.prod2stuff),sail:avgA(lt.stuff2deliver),total:avgA(lt.total),lt};}).filter(r=>r.n>0).sort((a,b)=>(b.total||0)-(a.total||0));
    const mxT=Math.max(...tagRows.map(r=>r.total||0),1);
    ltByTag=tagRows.map(r=>{const id='ltTag_'+r.tag.replace(/[^a-zA-Z0-9]/g,'');
      return`<div class="bar-track" style="cursor:pointer;" onclick="document.getElementById('${id}').style.display=document.getElementById('${id}').style.display==='none'?'block':'none'"><div class="bar-label" style="width:100px;font-weight:700;">${r.tag}</div><div class="bar-bg"><div class="bar-fill" style="width:${r.total?(r.total/mxT*100):0}%;background:linear-gradient(90deg,#1d4ed8,#60a5fa);"></div></div><div style="min-width:160px;font-size:11px;text-align:right;">${r.total!==null?`<strong>${r.total}h</strong> total`:'—'}${r.prod!==null?` · 🏭${r.prod}h`:''}${r.sail!==null?` · 🚢${r.sail}h`:''} <span style="color:var(--muted);">(${r.n} PO)</span></div></div><div id="${id}" style="display:none;margin:0 0 8px 16px;padding:8px 12px;background:var(--surface2);border-radius:6px;">${renderLTBars(r.lt,stages,160)}</div>`;
    }).join('');
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
    <div id="ltTab_items" style="display:none;"><div style="font-size:12px;color:var(--muted);margin-bottom:8px;">Cari item untuk lihat analisa lead time</div><input type="text" id="ltItemSearch" placeholder="Ketik nama item..." style="width:100%;padding:8px 12px;border:1.5px solid var(--border);border-radius:var(--radius-sm);font-size:13px;margin-bottom:10px;background:var(--bg);color:var(--text);" oninput="ltSearchItem(this.value)"><div id="ltItemResults" style="max-height:400px;overflow-y:auto;"></div></div>
  </div>`;

}




// ── Integrasi Google Sheets ──
async function loadSheetsStatus() {
  const box = document.getElementById('sheetsStatusBox');
  if (!box) return;
  // Tampilkan loading state dulu
  if(!box.innerHTML) box.innerHTML = '<span style="font-size:12px;color:var(--muted);">Memuat status...</span>';
  let data;
  try { data = await api('GET', '/api/sheets/status'); } catch(e) { data = null; }
  if (!data) { box.innerHTML = '<span style="font-size:12px;color:var(--muted);">Belum pernah sync.</span>'; return; }
  const urlInput  = document.getElementById('sheetsWebAppUrl');
  const pushInput = document.getElementById('sheetsPushUrl');
  if (urlInput)  urlInput.value  = data.webAppUrl || '';
  if (pushInput) pushInput.value = data.pushUrl   || '';
  const lastSync = data.lastSync
    ? new Date(data.lastSync).toLocaleString('id-ID',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'})
    : 'Belum pernah';
  const lr = data.lastResult;
  box.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;">
      <div style="background:var(--surface2);border-radius:var(--radius-sm);padding:10px 12px;">
        <div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px;">Sync Terakhir</div>
        <div style="font-size:12px;font-weight:500;">${lastSync}</div>
      </div>
      <div style="background:var(--surface2);border-radius:var(--radius-sm);padding:10px 12px;">
        <div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px;">Hasil</div>
        <div style="font-size:12px;font-weight:500;color:var(--accent);">${lr ? `+${lr.added} baru, ~${lr.updated} update` : '—'}</div>
      </div>
    </div>`;
}

async function saveSheetsUrl() {
  const url = (document.getElementById('sheetsWebAppUrl')||{}).value?.trim();
  if (!url) { showToast('warn','URL kosong','Isi URL sumber dulu.'); return; }
  const data = await api('POST', '/api/sheets/save-url', { url });
  if (data?.success) showToast('info','URL Sumber tersimpan','');
}

async function savePushUrl() {
  const url = (document.getElementById('sheetsPushUrl')||{}).value?.trim()||'';
  const data = await api('POST', '/api/sheets/save-push-url', { url });
  if (data?.success) showToast('info','URL Tujuan tersimpan','');
}

async function testSheetsConnection() {
  const url = (document.getElementById('sheetsWebAppUrl')||{}).value?.trim();
  if (!url) { showToast('warn','URL kosong','Isi URL sumber dulu.'); return; }
  const msg = document.getElementById('pullStatusMsg');
  if(msg) msg.innerHTML = '<span style="color:var(--muted);">🔌 Menguji koneksi...</span>';
  try {
    const testUrl = url + (url.includes('?') ? '&' : '?') + 'action=status';
    const resp = await fetch(testUrl);
    const data = await resp.json();
    if (data.success) {
      const ok   = data.sheets?.filter(s=>s.rows>0)||[];
      const skip = data.sheets?.filter(s=>s.rows===0)||[];
      if(msg) msg.innerHTML = `<span style="color:var(--green);">✓ Terhubung! <strong>${data.title}</strong><br>
        ${ok.length} sheet aktif: ${ok.map(s=>`${esc(s.name)}(${s.rows})`).join(', ')}<br>
        ${skip.length} kosong: ${skip.map(s=>s.name).join(', ')}</span>`;
    } else {
      if(msg) msg.innerHTML = `<span style="color:var(--red);">✗ ${data.error}</span>`;
    }
  } catch(e) {
    if(msg) msg.innerHTML = `<span style="color:var(--red);">✗ ${e.message}</span>`;
  }
}

async function pullOnly() {
  const url = (document.getElementById('sheetsWebAppUrl')||{}).value?.trim();
  if (url) await api('POST', '/api/sheets/save-url', { url });
  const msg = document.getElementById('pullStatusMsg');
  if(msg) msg.innerHTML = '<span style="color:var(--muted);">⏳ Menarik data...</span>';
  const data = await api('POST', '/api/sheets/pull');
  if (!data || data.error) {
    if(msg) msg.innerHTML = `<span style="color:var(--red);">✗ ${data?.error||'Gagal'}</span>`; return;
  }
  if(msg) msg.innerHTML = `<span style="color:var(--green);">✓ +${data.added} baru, ~${data.updated} update</span>`;
  showToast('info','Data ditarik!',`+${data.added} baru, ~${data.updated} update`);
  await loadData(); // loadData sudah include applyAutoForwarder
}

async function pushOnly() {
  const url = (document.getElementById('sheetsPushUrl')||{}).value?.trim();
  if (url) await api('POST', '/api/sheets/save-push-url', { url });
  const msg = document.getElementById('pullStatusMsg');
  if(msg) msg.innerHTML = '<span style="color:var(--muted);">⏳ Mengirim ke Sheets...</span>';
  const data = await api('POST', '/api/sheets/push');
  if (!data || data.error) {
    if(msg) msg.innerHTML = `<span style="color:var(--red);">✗ ${data?.error||'Gagal'}</span>`; return;
  }
  if(data?.skipped){
    if(msg) msg.innerHTML = `<span style="color:var(--yellow);">⚠️ ${data.message || 'URL tujuan belum diisi'}</span>`;
    showToast('warn','Push dilewati',data.message||'URL tujuan belum diisi');
    return;
  }
  if(msg) msg.innerHTML = `<span style="color:var(--green);">✓ ${data.count} shipment dikirim ke Sheets</span>`;
  showToast('info','Push selesai!',`${data.count} shipment dikirim`);
}

async function quickSync() {
  const url = (document.getElementById('sheetsPushUrl')||{}).value?.trim();
  if (url) await api('POST', '/api/sheets/save-push-url', { url });
  const btn = document.getElementById('quickSyncBtn');
  if (btn) { btn.disabled=true; btn.textContent='⏳'; btn.classList.add('syncing'); }
  try {
    const pullData = await api('POST', '/api/sheets/pull');
    if (!pullData || pullData.error) {
      showToast('warn','Pull gagal', pullData?.error||'Cek URL sumber di menu Integrasi Sheets');
      if (btn) { btn.disabled=false; btn.textContent='🔄'; btn.classList.remove('syncing'); }
      return;
    }
    await loadData();
    const pushData = await api('POST', '/api/sheets/push');
    if (pushData?.skipped) {
      showToast('info','Sync selesai',`Pull: +${pullData.added} baru ~${pullData.updated} update. Push: URL tujuan belum diisi.`);
    } else if (pushData?.count !== undefined) {
      showToast('info','Sync lengkap ✓',`Pull: +${pullData.added} baru · Push: ${pushData.count} ke Sheets`);
    }
  } catch(e) { showToast('warn','Error', e.message); }
  if (btn) { btn.disabled=false; btn.textContent='🔄'; btn.classList.remove('syncing'); }
}

async function pullFromSheets() { await pullOnly(); }

function copyText(inputId) {
  const el = document.getElementById(inputId);
  if (!el) return;
  el.select(); document.execCommand('copy');
  showToast('info','Disalin!', el.value.substring(0,60)+(el.value.length>60?'…':''));
}


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

// ── Notifikasi ──
function saveNotifs(){localStorage.setItem('notif_v2',JSON.stringify(notifications));}
function addNotif(type,title,msg,poId){const id=Date.now()+Math.random();notifications.unshift({id,type,title,msg,poId,read:false,time:new Date().toISOString()});if(notifications.length>50)notifications=notifications.slice(0,50);saveNotifs();renderNotifPanel();showToast(type,title,msg,poId);try{if('Notification'in window&&Notification.permission==='granted')new Notification('Shipment Monitor — '+title,{body:msg});}catch{}}
function renderNotifPanel(){
  const panel = document.getElementById('notifPanel'); if(!panel) return;
  const a = window._smartAlerts || {arriving:[], overdue:[], statusMismatch:[]};
  const total = a.arriving.length + a.overdue.length + a.statusMismatch.length;
  const countEl = document.getElementById('notifCount'); if(countEl) countEl.textContent = total>0?`(${total})` : '';

  let smartHtml = '';
  if(a.overdue.length){
    smartHtml += `<div class="alert-section"><div class="alert-section-title">🔴 Terlambat <span class="alert-count alert-red">${a.overdue.length}</span></div>`
      + `${a.overdue.slice(0,8).map(x=>`<div class="alert-item" onclick="openDetail(${x.s.id});toggleNotifPanel();"><span class="alert-icon">⚠️</span><div class="alert-body"><div class="alert-title">${esc(x.s.po)} — ${esc(x.s.item)}</div><div class="alert-desc">${x.days}h late · ${esc(x.s.container)||'—'}</div></div></div>`).join('')}`
      + `</div>`;
  }
  if(a.arriving.length){
    smartHtml += `<div class="alert-section"><div class="alert-section-title">🟡 Segera tiba <span class="alert-count alert-yellow">${a.arriving.length}</span></div>`
      + `${a.arriving.map(x=>`<div class="alert-item" onclick="openDetail(${x.s.id});toggleNotifPanel();"><span class="alert-icon">📍</span><div class="alert-body"><div class="alert-title">${esc(x.s.po)} — ${esc(x.s.item)}</div><div class="alert-desc">${x.days===0?'Hari ini':x.days+'h lagi'} · ${esc(x.s.container)||'—'}</div></div></div>`).join('')}`
      + `</div>`;
  }
  if(a.statusMismatch.length){
    smartHtml += `<div class="alert-section"><div class="alert-section-title">⚡ Status tidak sesuai <span class="alert-count alert-yellow">${a.statusMismatch.length}</span></div>`
      + `${a.statusMismatch.map(x=>`<div class="alert-item" onclick="openDetail(${x.s.id});toggleNotifPanel();"><span class="alert-icon">🔄</span><div class="alert-body"><div class="alert-title">${esc(x.s.po)}</div><div class="alert-desc">${x.reason}</div></div></div>`).join('')}`
      + `</div>`;
  }

  const listEl = document.getElementById('notifList');
  const hasSmart = !!smartHtml;
  if(!hasSmart){
    listEl.innerHTML = '<div style="text-align:center;padding:30px 10px;color:var(--muted);font-size:12px;">Tidak ada notifikasi</div>';
  } else {
    listEl.innerHTML = smartAlertsHidden ? '<div style="padding:14px;color:var(--muted);font-size:12px;text-align:center;">Smart alerts disembunyikan.</div>' : smartHtml;
  }

  const btnMark = document.getElementById('btnMarkAll'); if(btnMark) btnMark.style.display='none';
  const btnClear = document.getElementById('btnClear'); if(btnClear) btnClear.style.display='none';
  const btnEnable = document.getElementById('btnEnableNotif'); if(btnEnable){ btnEnable.onclick = reqBrowserNotif; }
  const btnToggleSmart = document.getElementById('btnToggleSmart'); if(btnToggleSmart){ btnToggleSmart.disabled = !hasSmart; btnToggleSmart.textContent = smartAlertsHidden ? 'Tampilkan ringkasan' : 'Sembunyikan ringkasan'; btnToggleSmart.onclick = toggleSmartAlerts; }
  const btnHint = document.getElementById('notifHint'); if(btnHint){ btnHint.textContent = hasSmart ? 'Smart alert berasal dari status shipment saat ini.' : ''; }

  const dot = document.getElementById('notifDot'); if(dot) dot.classList.toggle('show', total > 0);
}
function toggleSmartAlerts(){
  smartAlertsHidden = !smartAlertsHidden;
  renderNotifPanel();
}
function _renderNotifPanelOld(){
  const unread=notifications.filter(n=>!n.read).length;
  document.getElementById('notifDot').classList.toggle('show',unread>0);
  document.getElementById('notifCount').innerHTML=unread>0?`<span class="badge-count">${unread}</span>`:'';
  const list=document.getElementById('notifList');
  if(!notifications.length){list.innerHTML='<div style="padding:20px;text-align:center;font-size:13px;color:var(--muted);">Tidak ada notifikasi</div>';return;}
  const ic=t=>t==='late'?'🚨':t==='warn'?'⚠️':'🔔';
  list.innerHTML=notifications.map(n=>`<div class="notif-item" style="opacity:${n.read?.8:1};" onclick="notifClick(${n.id})"><div class="notif-item-title">${ic(n.type)} ${esc(n.title)} ${!n.read?'<span style="width:6px;height:6px;border-radius:50%;background:var(--accent);display:inline-block;"></span>':''}</div><div class="notif-item-msg">${esc(n.msg)}</div><div class="notif-item-time">${fmtAgo(n.time)}</div></div>`).join('');
}
function fmtAgo(iso){const d=Math.floor((Date.now()-new Date(iso))/60000);if(d<1)return'baru saja';if(d<60)return d+'m lalu';if(d<1440)return Math.floor(d/60)+'j lalu';return Math.floor(d/1440)+'h lalu';}
function toggleNotifPanel(){
  notifPanelOpen = !notifPanelOpen;
  document.getElementById('notifPanel').classList.toggle('open', notifPanelOpen);
  if(notifPanelOpen){ if(typeof checkAlerts==='function')checkAlerts(); renderNotifPanel(); }
}

function markAllRead(){
  const unread = notifications.filter(n=>!n.read).length;
  if(!unread){ showToast('info','Tidak ada notifikasi baru',''); return; }
  notifications.forEach(n=>n.read=true);
  saveNotifs(); renderNotifPanel();
  showToast('info','Semua notifikasi dibaca',`${unread} notifikasi ditandai dibaca`);
}

function clearAllNotif(){
  if(!notifications.length){ showToast('info','Tidak ada notifikasi',''); return; }
  if(!confirm('Hapus semua notifikasi?')) return;
  notifications=[]; saveNotifs(); renderNotifPanel();
  showToast('info','Notifikasi dihapus','Semua notifikasi telah dihapus');
}
function notifClick(id){const n=notifications.find(x=>x.id===id);if(!n)return;n.read=true;saveNotifs();renderNotifPanel();if(n.poId){openDetail(n.poId);toggleNotifPanel();}}
async function reqBrowserNotif(){if(!('Notification'in window))return;const p=await Notification.requestPermission();if(p==='granted')showToast('info','Notifikasi aktif','');}
function checkAlerts(){
  // Smart alert categories
  const today=new Date();today.setHours(0,0,0,0);
  const alerts={arriving:[],overdue:[],docMissing:[],statusMismatch:[]};
  shipments.forEach(s=>{
    if(['Cleared'].includes(s.status))return;
    const eta=s.eta?new Date(s.eta):null;
    const g=s.gudang?new Date(s.gudang):null;
    const refDate=g||eta;
    if(eta){
      const daysToEta=Math.round((eta-today)/86400000);
      // Tiba dalam 3 hari
      if(daysToEta>=0&&daysToEta<=3&&!['Arrived','Delivered','Cleared'].includes(s.status)){
        alerts.arriving.push({s,days:daysToEta});
      }
      // Terlambat >7 hari
      if(refDate){
        const daysLate=Math.round((today-refDate)/86400000);
        if(daysLate>7&&!['Delivered','Cleared'].includes(s.status)){
          alerts.overdue.push({s,days:daysLate});
        }
      }
    }
    // Dokumen kurang (status Arrived tapi belum lengkap)
    if(['Arrived','Delivered'].includes(s.status)){
      const docs=s.docs||{};
      const missing=[];
      if(!docs.invoice)missing.push('INV');if(!docs.pl)missing.push('PL');
      if(!docs.do)missing.push('DO');if(!docs.pib)missing.push('PIB');
      if(!docs.ls)missing.push('LS');
      if(missing.length>=3)alerts.docMissing.push({s,missing});
    }
    // ETD sudah lewat tapi masih Stuffing
    const etd=s.etd?new Date(s.etd):null;
    if(etd&&today>etd&&s.status==='Stuffing'){
      alerts.statusMismatch.push({s,reason:'ETD lewat, masih Stuffing'});
    }
  });

  // Render ke notif panel jika ada
  window._smartAlerts=alerts;
  const total=alerts.arriving.length+alerts.overdue.length+alerts.docMissing.length+alerts.statusMismatch.length;
  const dot=document.getElementById('notifDot');
  if(dot)dot.classList.toggle('show',total>0);

  // Juga jalankan alert lama (notif)
  _oldCheckAlerts();
}
function _oldCheckAlerts(){
  const today=new Date();today.setHours(0,0,0,0);
  shipments.forEach(s=>{
    if(['Cleared','Delivered'].includes(s.status))return;
    const ref=getRef(s),tgl=parseSD(ref);if(!tgl)return;
    const diff=Math.round((tgl-today)/86400000),lbl='Est. Tiba';
    if(diff<0)addNotif('late','Shipment Terlambat!',`${s.po}: sudah ${Math.abs(diff)} hari melewati ${lbl}.`,s.id);
    else if(diff===1)addNotif('warn',`${lbl} Besok!`,`${s.po} – ${s.item} tiba besok.`,s.id);
    else if(diff===3)addNotif('warn',`${lbl} 3 Hari Lagi`,`${s.po} – ${s.item} ETA ${fmtDate(ref)}.`,s.id);
  });
}

// ── Toast ──
function showToast(type,title,msg,poId){
  const tc=document.getElementById('toastContainer'),el=document.createElement('div');
  const ic=type==='late'?'🚨':type==='warn'?'⚠️':'🔔';
  el.className=`toast toast-${type}`;
  el.innerHTML=`<div class="toast-icon">${ic}</div><div class="toast-body"><div class="toast-title">${title}</div><div class="toast-msg">${msg}</div></div><button class="toast-close" onclick="rmT(this.parentElement)">×</button>`;
  if(poId){el.style.cursor='pointer';el.onclick=e=>{if(e.target.classList.contains('toast-close'))return;openDetail(poId);rmT(el);};}
  tc.appendChild(el);setTimeout(()=>rmT(el),6000);
}
function rmT(el){if(!el?.parentElement)return;el.classList.add('removing');setTimeout(()=>el.remove(),200);}

// ── Paste Excel ──
const FD=[{key:'po',labels:['no po','no. po','po','nomor po']},{key:'supplier',labels:['supplier','vendor','pemasok']},{key:'item',labels:['item','deskripsi','barang','goods']},{key:'qty',labels:['qty','quantity','jumlah']},{key:'value',labels:['nilai','value','harga','rmb','cny','usd']},{key:'container',labels:['kontainer','container','no kontainer']},{key:'tgl_production',labels:['produksi','tgl produksi','tanggal pesan','production']},{key:'stuffing',labels:['stuffing','tgl stuffing']},{key:'etd',labels:['etd','tgl berangkat','departure']},{key:'eta',labels:['eta','tgl tiba','arrival']},{key:'status',labels:['status']},{key:'forwarder',labels:['forwarder','emkl']},{key:'tags',labels:['tags','tag','brand']},{key:'notes',labels:['catatan','notes','keterangan']},{key:'gudang',labels:['est. tiba','est tiba','est. tiba gudang','estimasi tiba']},{key:'deliveredDate',labels:['tgl datang','tanggal datang','tgl tiba gudang','delivered']}];
const FL={po:'PO',supplier:'Supplier',item:'Item',qty:'Qty',value:'Nilai (RMB)',container:'Kontainer',tgl_production:'Produksi',stuffing:'Stuffing',etd:'ETD',eta:'ETA',status:'Status',forwarder:'Forwarder',tags:'Tags',notes:'Catatan',gudang:'Est. Tiba',deliveredDate:'Tgl Datang'};
function openPaste(){if(!guardAdmin())return;document.getElementById('pasteInput').value='';document.getElementById('detectInfo').innerHTML='';document.getElementById('nextBtn1').disabled=true;parsedRows=[];parsedHeaders=[];colMapping={};showTab(1);document.getElementById('pasteOverlay').classList.add('open');}
function closePaste(){document.getElementById('pasteOverlay').classList.remove('open');}
function showTab(n){[1,2,3].forEach(i=>{document.getElementById('tab'+i).classList.toggle('active',i===n);document.getElementById('panel'+i).classList.toggle('active',i===n);});if(n===2)buildColMap();}
function detectCols(){
  const raw=document.getElementById('pasteInput').value.trim();
  if(!raw){document.getElementById('detectInfo').innerHTML='';document.getElementById('nextBtn1').disabled=true;return;}
  const rows=raw.split('\n').filter(l=>l.trim()).map(l=>l.split('\t').map(c=>c.trim().replace(/^"|"$/g,'')));

  // Deteksi apakah baris pertama adalah header atau data
  // Header biasanya mengandung kata-kata seperti "No", "PO", "Item", "Qty", dll
  const firstRowStr=rows[0].join(' ').toLowerCase();
  const headerKeywords=['no. po','no po','item','qty','status','supplier','forwarder','kontainer','produksi','stuffing','etd','eta'];
  const looksLikeHeader=headerKeywords.some(k=>firstRowStr.includes(k));

  if(looksLikeHeader){
    // Ada header: baris pertama = header, sisanya = data
    parsedHeaders=rows[0];
    parsedRows=rows.slice(1).filter(r=>r.some(c=>c));
  } else {
    // Tidak ada header: coba pakai urutan kolom dari export Excel kita
    parsedHeaders=['PO','Item','Qty','Nilai (RMB)','Supplier','Kontainer','Forwarder','Produksi','Stuffing','ETD','ETA','Est. Tiba','Tgl Datang','Status','Tags','INV','PL','DO','PIB','LS','Catatan'];
    parsedRows=rows.filter(r=>r.some(c=>c));
  }

  // Auto-map kolom berdasarkan label
  colMapping={};
  parsedHeaders.forEach((h,i)=>{
    const hl=h.toLowerCase().trim();
    for(const fd of FD){if(fd.labels.some(l=>hl===l||hl.includes(l)||l.includes(hl))){if(!Object.values(colMapping).includes(i)){colMapping[fd.key]=i;break;}}}
  });

  const hasHeader=looksLikeHeader?'':'<span style="color:var(--yellow);font-size:11px;"> (header tidak terdeteksi — urutan kolom export digunakan)</span>';
  document.getElementById('detectInfo').innerHTML=
    `<span style="color:var(--green);">✓ ${parsedRows.length} baris</span> · `+
    `<span style="color:var(--muted);">${Object.keys(colMapping).length} kolom dikenali</span>`+hasHeader;
  // Enable button jika ada baris data (meski 0 kolom dikenali — bisa set manual di step 2)
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

// ── Search gabungan (shipment + komentar) ──
let searchMode = 'shipment'; // 'shipment' | 'comment'
let commentSearchDebounce;

function onSearchInput(val) {
  clearTimeout(commentSearchDebounce);
  const q = val.trim();
  if (!q) { clearCommentSearch(); render(); return; }
  // Cari shipment dulu (instant)
  render();
  // Jika tidak ada hasil shipment, auto-switch ke cari komentar setelah delay
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
  if(!data||!data.length) return; // tetap tampilkan "tidak ada shipment"
  // Ada hasil komentar — tampilkan panel
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


// ═══════════════════════════════════════════════════════════════
// KALENDER ETA
// ═══════════════════════════════════════════════════════════════
let calYear=new Date().getFullYear(),calMonth=new Date().getMonth();
function openCalDayPopup(dateStr, ids){
  const ships=shipments.filter(s=>ids.includes(s.id));
  const [y,m,d]=dateStr.split('-');
  const dateLabel=`${d}/${m}/${y}`;
  const content=ships.map(s=>`
    <div style="display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid var(--border2);cursor:pointer;" onclick="closeCalPopup();openDetail(${s.id})">
      <div style="flex:1;min-width:0;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:11px;color:var(--accent);">${esc(s.po)}</div>
        <div style="font-size:13px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${esc(s.item)}</div>
        <div style="font-size:11px;color:var(--muted);">${esc(s.container)||'—'} · ${esc(s.supplier)||'—'}</div>
      </div>
      <div style="flex-shrink:0;">${statusBadge(s.status)}</div>
    </div>`).join('');

  // Gunakan modal overlay
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

let calFilterStatus='',calFilterType='';
function renderCalendar(){
  const today=new Date();
  const first=new Date(calYear,calMonth,1),lastDay=new Date(calYear,calMonth+1,0).getDate();
  const startDow=first.getDay()||7;
  const months=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  const pfx=`${calYear}-${String(calMonth+1).padStart(2,'0')}`;

  // Filter shipments berdasarkan status
  const filtered=calFilterStatus?shipments.filter(s=>s.status===calFilterStatus):shipments;

  // Kumpulkan event per tanggal
  const byDate={};
  function addEv(date,ship,type,typeKey,color,icon){
    if(!date)return;
    if(calFilterType&&calFilterType!==typeKey)return;
    if(!byDate[date])byDate[date]=[];
    byDate[date].push({ship,type,typeKey,color,icon});
  }
  filtered.forEach(s=>{
    addEv(s.etd, s, 'Sailed',    'etd',   '#2563eb','🚢');
    addEv(s.eta, s, 'Arrived', 'eta',   '#db2777','⚓');
    const g=s.gudang||calcGudang(s.po,s.eta,s.container);
    addEv(g,     s, 'Est. Tiba','gudang','#16a34a','🏭');
  });

  // Count
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

// ═══════════════════════════════════════════════════════════════
// GROUP BY KONTAINER
// ═══════════════════════════════════════════════════════════════
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
  // Show group view and hide others
  document.getElementById('viewGroupEl').style.display='block';
  document.getElementById('viewTableEl').style.display='none';
  document.getElementById('viewCardEl').style.display='none';
  // Group by container
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
          <span class="td-po" style="min-width:160px;flex-shrink:0;font-size:11px;">${esc(s.po)}</span>
          <span class="grp-item">${esc(s.item)}</span>
          ${statusBadge(s.status)}
          <span style="margin-left:8px;"> <span class="delay-badge ${d.cls}">${d.label}</span></span>
          <span class="grp-qty">${esc(s.qty)||'—'}</span>
          <span class="grp-val">${s.value?fmtVal(s.value):'—'}</span>
        </div>` }).join('')}
      </div>
    </div>`;
  }).join('');
}

function filterByTag(tag){
  // Switch ke halaman shipment, set filter tag
  switchPage('shipment',document.getElementById('nav-shipment'));
  // Cari select tag dan set ke tag ini
  const sel=document.getElementById('filterTag');
  if(sel){
    // Cek apakah option ada
    const opt=[...sel.options].find(o=>o.value===tag);
    if(opt){sel.value=tag;render();}
    else{
      // Fallback: cari via search
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
  XLSX.writeFile(wb,`Shipment_${tgl}.xlsx`);showToast('info','Export berhasil',`${list.length} shipment diexport.`);
}

// ── Sync ──
function syncToSheets(){document.getElementById('sync_url').value=localStorage.getItem('gsheets_url')||SHEETS_URL;document.getElementById('syncCount').textContent=shipments.length;document.getElementById('syncStatus').style.display='none';document.getElementById('doSyncBtn').disabled=false;document.getElementById('doSyncBtn').textContent='Sync Sekarang';document.getElementById('syncOverlay').classList.add('open');}
function closeSyncModal(){document.getElementById('syncOverlay').classList.remove('open');}
async function doSync(){
  const url=document.getElementById('sync_url').value.trim();if(!url)return;
  localStorage.setItem('gsheets_url',url);
  const btn=document.getElementById('doSyncBtn'),status=document.getElementById('syncStatus');
  btn.disabled=true;btn.textContent='Menyinkronkan...';status.style.display='block';
  status.innerHTML=`<div style="font-size:12px;color:var(--muted);padding:8px;background:var(--surface2);border-radius:var(--radius-sm);">⏳ Mengirim ${shipments.length} data...</div>`;
  const form=document.createElement('form');form.method='POST';form.action=url;form.target='syncFrame';
  const inp=document.createElement('input');inp.type='hidden';inp.name='data';inp.value=JSON.stringify(shipments);form.appendChild(inp);
  let iframe=document.getElementById('syncFrame');
  if(!iframe){iframe=document.createElement('iframe');iframe.name='syncFrame';iframe.id='syncFrame';iframe.style.display='none';document.body.appendChild(iframe);}
  const timer=setTimeout(()=>{status.innerHTML=`<div style="font-size:12px;color:var(--green);padding:8px;background:var(--green-dim);border-radius:var(--radius-sm);">✓ Data terkirim!</div>`;btn.textContent='Selesai ✓';showToast('info','Sync dikirim','');setTimeout(closeSyncModal,2500);},6000);
  iframe.onload=()=>{clearTimeout(timer);status.innerHTML=`<div style="font-size:12px;color:var(--green);padding:8px;background:var(--green-dim);border-radius:var(--radius-sm);">✓ Berhasil!</div>`;btn.textContent='Selesai ✓';setTimeout(closeSyncModal,2000);};
  document.body.appendChild(form);form.submit();document.body.removeChild(form);
}

// ── Cek Duplikat ──
let _orphanList=[];
async function openCheckDup(){
  document.getElementById('checkDupOverlay').classList.add('open');
  const status=document.getElementById('checkDupStatus'),list=document.getElementById('checkDupList'),footer=document.getElementById('checkDupFooter');
  footer.style.display='none';list.innerHTML='';
  status.innerHTML=`<div style="font-size:13px;color:var(--muted);padding:10px;background:var(--surface2);border-radius:var(--radius-sm);">⏳ Menarik data dari spreadsheet & membandingkan...</div>`;
  const r=await api('POST','/api/sheets/check-orphans');
  if(!r||r.error){status.innerHTML=`<div style="font-size:13px;color:var(--red);padding:10px;background:var(--red-dim);border-radius:var(--radius-sm);">⚠️ ${esc(r?.error||'Gagal cek')}</div>`;return;}
  _orphanList=r.orphans||[];
  if(!_orphanList.length){status.innerHTML=`<div style="font-size:13px;color:var(--green);padding:10px;background:var(--green-dim);border-radius:var(--radius-sm);">✓ Tidak ada baris duplikat. Data app sesuai spreadsheet.</div>`;return;}
  status.innerHTML=`<div style="font-size:13px;color:var(--yellow);padding:10px;background:var(--yellow-dim);border-radius:var(--radius-sm);">⚠️ Ditemukan <strong>${_orphanList.length}</strong> baris kemungkinan double. Periksa di bawah.</div>`;
  renderOrphanList();
  footer.style.display='';
}
function renderOrphanList(){
  const list=document.getElementById('checkDupList');
  if(!_orphanList.length){list.innerHTML='';document.getElementById('checkDupFooter').style.display='none';document.getElementById('checkDupStatus').innerHTML=`<div style="font-size:13px;color:var(--green);padding:10px;background:var(--green-dim);border-radius:var(--radius-sm);">✓ Selesai. Tidak ada baris tersisa.</div>`;return;}
  list.innerHTML=`<table style="width:100%;border-collapse:collapse;font-size:12px;">
    <thead><tr style="background:var(--surface2);">
      <th style="padding:7px 8px;text-align:left;">PO</th>
      <th style="padding:7px 8px;text-align:left;">Container</th>
      <th style="padding:7px 8px;text-align:left;">Item</th>
      <th style="padding:7px 8px;text-align:left;">Info</th>
      <th style="padding:7px 8px;text-align:center;">Aksi</th>
    </tr></thead><tbody>
    ${_orphanList.map(o=>{
      const moved=o.movedTo&&o.movedTo.length?`<span style="color:var(--yellow);">→ pindah ke ${o.movedTo.map(esc).join(', ')}</span>`:`<span style="color:var(--muted);">tidak ada di sheet</span>`;
      const flags=[o.hasNotes?'📝 ada catatan':'',o.hasDocs?'📎 ada dokumen':''].filter(Boolean).join(' · ');
      return `<tr style="border-bottom:1px solid var(--border);">
        <td style="padding:7px 8px;font-family:'Plus Jakarta Sans',sans-serif;font-size:11px;">${esc(o.po)}</td>
        <td style="padding:7px 8px;">${esc(o.container||'-')}</td>
        <td style="padding:7px 8px;">${esc(o.item||'-')}</td>
        <td style="padding:7px 8px;font-size:11px;">${moved}${flags?'<br>'+flags:''}</td>
        <td style="padding:7px 8px;text-align:center;white-space:nowrap;">
          <button class="btn" style="padding:3px 8px;font-size:11px;" onclick="keepOrphan(${o.id})">✓ Biarkan</button>
          <button class="btn btn-danger" style="padding:3px 8px;font-size:11px;" onclick="deleteOrphan(${o.id})">🗑 Hapus</button>
        </td>
      </tr>`;
    }).join('')}
    </tbody></table>`;
}
function closeCheckDup(){document.getElementById('checkDupOverlay').classList.remove('open');loadData();}
async function deleteOrphan(id){
  if(!confirm('Hapus baris ini dari aplikasi?'))return;
  await api('DELETE','/api/shipments/'+id);
  _orphanList=_orphanList.filter(o=>o.id!==id);
  shipments=shipments.filter(s=>s.id!==id);
  renderOrphanList();
}
async function keepOrphan(id){
  await api('POST','/api/shipments/'+id+'/keep');
  _orphanList=_orphanList.filter(o=>o.id!==id);
  renderOrphanList();
}
async function deleteAllOrphans(){
  if(!_orphanList.length)return;
  if(!confirm(`Hapus SEMUA ${_orphanList.length} baris ini?`))return;
  for(const o of _orphanList){await api('DELETE','/api/shipments/'+o.id);shipments=shipments.filter(s=>s.id!==o.id);}
  _orphanList=[];renderOrphanList();
}
async function keepAllOrphans(){
  if(!_orphanList.length)return;
  for(const o of _orphanList){await api('POST','/api/shipments/'+o.id+'/keep');}
  _orphanList=[];renderOrphanList();
}

// ── Scroll ──
const tw=document.getElementById('tableWrap');
if(tw)tw.addEventListener('wheel',e=>{if(e.shiftKey){e.preventDefault();tw.scrollLeft+=e.deltaY;}},{passive:false});
document.addEventListener('click',e=>{if(notifPanelOpen&&!document.getElementById('notifPanel').contains(e.target)&&!document.getElementById('notifBtn').contains(e.target)){notifPanelOpen=false;document.getElementById('notifPanel').classList.remove('open');}});

// ── Init ──
document.getElementById('topbarAction').style.display='none';
const topbarPasteBtn = document.getElementById('topbarPaste');
if(topbarPasteBtn) topbarPasteBtn.style.display='none';
const checkDupInit = document.getElementById('checkDupBtn');
if(checkDupInit) checkDupInit.style.display='none';
applySidebar();

// ══════════════════════════════════════════════════════════════════
// AI ASSISTANT — Mesin Query Lokal (tanpa API key, tanpa internet)
// ══════════════════════════════════════════════════════════════════
let _aiOpen=false,_aiHist=[],_aiLoading=false;

async function aiInit(){
  document.getElementById('aiSetupDiv').style.display='none';
  const cd=document.getElementById('aiChatDiv');cd.style.display='flex';
  if(_aiHist.length===0)aiAddMsg('bot','Halo! Saya asisten GII Commerce.\n\nSaya bisa jawab:\n• Rangkuman / rekap shipment\n• Shipment terlambat & tiba minggu ini\n• Total RMB pengiriman / per status\n• Supplier & forwarder tercepat/terlambat\n• Rata-rata waktu pengiriman\n• Lead time per item (misal: "lead time NV-DRY-LUNA")\n• PO tanpa kontainer (masih produksi)\n• Bandingkan lead time antar tags\n• Berapa PO dari supplier/tag tertentu\n• Cari PO / kontainer / item\n\nKetik pertanyaan atau klik tombol di bawah 👇');
}
function aiToggle(){
  _aiOpen=!_aiOpen;
  document.getElementById('aiChat').classList.toggle('open',_aiOpen);
  if(_aiOpen){aiInit();setTimeout(()=>document.getElementById('aiInp')?.focus(),300);}
}
let _aiHoverTimer=null;
function aiHoverOpen(){
  clearTimeout(_aiHoverTimer);
  if(_aiOpen)return;
  _aiOpen=true;
  document.getElementById('aiChat').classList.add('open');
  aiInit();
}
function aiHoverCancel(){clearTimeout(_aiHoverTimer);}
function aiHoverClose(){
  clearTimeout(_aiHoverTimer);
  _aiHoverTimer=setTimeout(()=>{
    const inp=document.getElementById('aiInp');
    if(inp&&document.activeElement===inp&&inp.value.trim())return;
    _aiOpen=false;
    document.getElementById('aiChat').classList.remove('open');
  },450);
}
function aiSaveKey(){aiInit();}
function aiAddMsg(role, content, isHtml){
  const el=document.getElementById('aiMsgs');if(!el)return;
  let html;
  if(isHtml){html=content;}
  else{html=(content||'').replace(/[*][*](.*?)[*][*]/g,'<strong>$1</strong>').replace(/[*](.*?)[*]/g,'<em>$1</em>').split('\n').join('<br>');}
  const av=role==='bot'?'🤖':(currentUser?.name?.[0]?.toUpperCase()||'U');
  const d=document.createElement('div');d.className='ai-msg '+role;
  d.innerHTML='<div class="ai-msg-av">'+av+'</div><div class="ai-bbl">'+html+'</div>';
  el.appendChild(d);el.scrollTop=el.scrollHeight;
}
function aiAsk(text){document.getElementById('aiInp').value=text;document.getElementById('aiChips').style.display='none';aiSend();}

function aiShipRow(x,extra){
  const fmt=d=>{if(!d)return'—';const p=d.split('-');return p[2]+'/'+p[1]+'/'+p[0];};
  const done=['Delivered','Cleared'].includes(x.status);
  const dateLabel=done
    ?(x.deliveredDate?'<span style="color:#059669;">✅ Tgl Datang: <b>'+fmt(x.deliveredDate)+'</b></span>':'<span style="color:var(--muted);">Tgl Datang: —</span>')
    :(x.gudang||x.eta?'<span style="color:var(--accent);">📅 Est. Tiba: <b>'+fmt(x.gudang||x.eta)+'</b></span>':'');
  const col=getStatusColor(x.status)||({Stuffing:'#ea580c',Sailed:'#2563eb',Arrived:'#7c3aed',Delivered:'#16a34a',Cleared:'#475569',Production:'#ca8a04'}[x.status]||'#64748b');
  return '<div onclick="aiOpenDetail('+x.id+')" style="display:flex;flex-direction:column;gap:3px;padding:8px 10px;margin:3px 0;border-radius:8px;border:1px solid var(--border2);background:var(--surface2);cursor:pointer;transition:all .15s;" onmouseover="this.style.borderColor=\'var(--accent)\';this.style.background=\'var(--accent-dim)\'" onmouseout="this.style.borderColor=\'var(--border2)\';this.style.background=\'var(--surface2)\'">'
    +'<div style="display:flex;justify-content:flex-end;">'
    +'<span style="font-size:10px;font-weight:700;color:'+col+';background:'+col+'18;padding:2px 8px;border-radius:10px;white-space:nowrap;flex-shrink:0;">'+( x.status||'—')+'</span></div>'
    +'<div style="font-family:\'Plus Jakarta Sans\',sans-serif;font-size:11px;font-weight:700;color:var(--accent);white-space:nowrap;">'+esc(x.po)+'</div>'
    +'<div style="font-size:12px;font-weight:600;color:var(--text);">'+esc(x.item)+'</div>'
    +'<div style="display:flex;gap:8px;flex-wrap:wrap;font-size:11px;color:var(--muted);">'
    +(x.container?'<span>📦 '+esc(x.container)+'</span>':'')
    +(x.supplier?'<span>🏭 '+esc(x.supplier)+'</span>':'')
    +dateLabel+(extra?extra:'')+'</div></div>';
}

function aiOpenDetail(id){
  switchPage('shipment',document.getElementById('nav-shipment'));
  setTimeout(()=>openDetail(id),150);
  _aiOpen=false;document.getElementById('aiChat').classList.remove('open');
}

function aiQuery(q){
  const s=shipments.length?shipments:(typeof SM!=='undefined'?SM.r('shipments',[]):shipments);
  const today=new Date();today.setHours(0,0,0,0);
  const tq=q.toLowerCase().trim();
  const fmt=d=>{if(!d)return'—';const p=d.split('-');return p.length===3?p[2]+'/'+p[1]+'/'+p[0]:d;};
  const fmtR=v=>'¥'+Math.round(parseFloat(v||0)).toLocaleString('id-ID');
  const daysDiff=(a,b)=>Math.round((new Date(a)-new Date(b))/86400000);
  const getLate=()=>s.filter(x=>{if(['Delivered','Cleared'].includes(x.status))return false;const r=x.gudang||x.eta;return r&&today>new Date(r);});
  const getDL=x=>{const r=x.gudang||x.eta;return r?daysDiff(today,new Date(r)):0;};
  const H=t=>t.replace(/[*][*](.*?)[*][*]/g,'<strong>$1</strong>');
  const clickHint='<br><small style="color:var(--muted);">Klik untuk buka detail</small>';
  const DAY=86400000;
  const avgA=arr=>arr.length?Math.round(arr.reduce((a,b)=>a+b,0)/arr.length):null;

  // ═══════════════════════════════════════════════
  // ENTITY EXTRACTION — deteksi nama dari data
  // ═══════════════════════════════════════════════
  const allSuppliers=[...new Set(s.map(x=>x.supplier).filter(Boolean))];
  const allForwarders=[...new Set(s.map(x=>x.forwarder).filter(Boolean))];
  const allItems=[...new Set(s.map(x=>x.item).filter(Boolean))];
  const allTags=[...new Set(s.flatMap(x=>x.tags||[]).filter(Boolean))];
  const allContainers=[...new Set(s.map(x=>x.container).filter(Boolean))];
  const allPOs=[...new Set(s.map(x=>x.po).filter(Boolean))];

  function findEntity(q){
    const ql=q.toLowerCase();
    // Cari exact match dulu (case insensitive)
    for(const sup of allSuppliers) if(ql.includes(sup.toLowerCase())) return{type:'supplier',value:sup,list:s.filter(x=>x.supplier===sup)};
    for(const fwd of allForwarders) if(ql.includes(fwd.toLowerCase())) return{type:'forwarder',value:fwd,list:s.filter(x=>x.forwarder===fwd)};
    for(const tag of allTags) if(ql.includes(tag.toLowerCase())) return{type:'tag',value:tag,list:s.filter(x=>(x.tags||[]).includes(tag))};
    for(const item of allItems) if(ql.includes(item.toLowerCase())) return{type:'item',value:item,list:s.filter(x=>x.item===item)};
    for(const ctr of allContainers) if(ql.includes(ctr.toLowerCase())) return{type:'container',value:ctr,list:s.filter(x=>x.container===ctr)};
    for(const po of allPOs) if(ql.includes(po.toLowerCase())) return{type:'po',value:po,list:s.filter(x=>x.po===po)};
    return null;
  }

  function partialCodeSearch(){
    const rawTokens=q.split(/[\s,]+/).filter(Boolean);
    const codeTokens=rawTokens.filter(t=>t.length>=2 && /[a-zA-Z]/.test(t) && /[0-9/\-]/.test(t));
    if(!codeTokens.length)return null;
    for(const tok of codeTokens){
      const tl=tok.toLowerCase();
      const matches=s.filter(x=>
        (x.po&&x.po.toLowerCase().includes(tl))||
        (x.container&&x.container.toLowerCase().includes(tl))||
        (x.item&&x.item.toLowerCase().includes(tl))
      );
      if(matches.length){
        const rows=matches.slice(0,15).map(x=>aiShipRow(x,''));
        const more=matches.length>15?`<div style="font-size:11px;color:var(--muted);margin-top:6px;">…dan ${matches.length-15} lainnya</div>`:'';
        return{html:true,text:H('🔍 **'+matches.length+' shipment cocok dengan "'+tok+'"**')+clickHint+'<div style="margin-top:8px;">'+rows.join('')+more+'</div>'};
      }
    }
    return null;
  }

  function calcLTFromList(list){
    const r={prod:[],ship:[],total:[]};
    list.forEach(x=>{
      const tp=parseSD(x.tgl_production),ts=parseSD(x.stuffing),te=parseSD(x.etd),td=x.deliveredDate?parseSD(x.deliveredDate):null;
      if(tp&&ts){const d=Math.round((ts-tp)/DAY);if(d>0&&d<365)r.prod.push(d);}
      if((ts||te)&&td){const d=Math.round((td-(ts||te))/DAY);if(d>0&&d<365)r.ship.push(d);}
      if(tp&&td){const d=Math.round((td-tp)/DAY);if(d>0&&d<730)r.total.push(d);}
    });
    return r;
  }

  function entitySummary(ent){
    const list=ent.list;
    const val=list.reduce((a,x)=>a+parseFloat(x.value||0),0);
    const sc={};list.forEach(x=>sc[x.status]=(sc[x.status]||0)+1);
    const lt=calcLTFromList(list);
    const late=list.filter(x=>{if(['Delivered','Cleared'].includes(x.status))return false;const r=x.gudang||x.eta;return r&&today>new Date(r);});
    const last=list.filter(x=>x.etd||x.stuffing).sort((a,b)=>new Date(b.etd||b.stuffing)-new Date(a.etd||a.stuffing))[0];
    let text=`📊 **${ent.type==='supplier'?'Supplier':ent.type==='forwarder'?'Forwarder':ent.type==='tag'?'Tag':ent.type==='item'?'Item':ent.type==='container'?'Kontainer':'PO'}: ${ent.value}**\n\n`;
    text+=`📦 Total: **${list.length} PO** | 💰 Nilai: **${fmtR(val)}**\n`;
    text+=`📊 Status: ${Object.entries(sc).map(([k,v])=>k+': '+v).join(' · ')}\n`;
    if(late.length)text+=`⚠️ Terlambat: **${late.length} PO**\n`;
    text+=`\n⏱ Lead Time:\n`;
    text+=`  🏭 Produksi: **${avgA(lt.prod)||'—'} hari** (${lt.prod.length} data)\n`;
    text+=`  🚢 Pengiriman: **${avgA(lt.ship)||'—'} hari** (${lt.ship.length} data)\n`;
    text+=`  📋 Total: **${avgA(lt.total)||'—'} hari** (${lt.total.length} data)\n`;
    if(last)text+=`\n📅 Terakhir kirim: ${last.item||''} — ${fmt(last.etd||last.stuffing)} via ${last.forwarder||'—'}`;
    return text;
  }

  // ═══════════════════════════════════════════════
  // INTENT MATCHING — urutan prioritas
  // ═══════════════════════════════════════════════

  // 1. Rangkuman
  if(/rangkum|ringkas|summary|rekap|overview|keseluruhan/.test(tq)){
    const aktif=s.filter(x=>!['Delivered','Cleared'].includes(x.status));const late=getLate();
    const tot=s.reduce((a,x)=>a+parseFloat(x.value||0),0);
    const sc={};s.forEach(x=>sc[x.status||'—']=(sc[x.status||'—']||0)+1);
    const near=s.filter(x=>{const e=x.eta?new Date(x.eta):null;if(!e)return false;const d=daysDiff(e,today);return d>=0&&d<=7&&!['Delivered','Cleared'].includes(x.status);});
    const icons={Production:'🏭',Stuffing:'📦',Sailed:'🚢',Arrived:'⚓',Delivered:'✅',Cleared:'🏁'};
    return{html:false,text:'📊 **Rangkuman Shipment**\n\nTotal PO: **'+s.length+'** | Aktif: **'+aktif.length+'**\n\n**Status:**\n'+Object.entries(sc).map(([k,v])=>(icons[k]||'•')+' '+k+': '+v+' PO').join('\n')+'\n\n⚠️ Terlambat: **'+late.length+' PO**\n📅 Tiba 7 hari ke depan: **'+near.length+' PO**\n💰 Total nilai: **'+fmtR(tot)+'**'};
  }

  // 2. Terlambat
  if(/terlambat|overdue|lewat|delay/.test(tq)){
    const late=getLate().sort((a,b)=>getDL(b)-getDL(a));
    if(!late.length)return{html:false,text:'✅ Tidak ada shipment yang terlambat.'};
    const rows=late.slice(0,12).map(x=>aiShipRow(x,'<span style="color:var(--red);font-weight:600;">⏱ '+getDL(x)+' hari</span>'));
    return{html:true,text:H('⚠️ **'+late.length+' Shipment Terlambat**')+clickHint+'<div style="margin-top:8px;">'+rows.join('')+'</div>'};
  }

  // 3. ETA/Tiba
  if(/eta|tiba|datang|arrival|akan tiba|segera|upcoming/.test(tq)&&!/bandingkan|vs/.test(tq)){
    const days=/([0-9]+)\s*hari/.test(tq)?parseInt(tq.match(/([0-9]+)\s*hari/)[1]):7;
    const near=s.filter(x=>{const e=x.eta?new Date(x.eta):null;if(!e)return false;const d=daysDiff(e,today);return d>=0&&d<=days&&!['Delivered','Cleared'].includes(x.status);}).sort((a,b)=>new Date(a.eta)-new Date(b.eta));
    if(!near.length)return{html:false,text:'📅 Tidak ada shipment ETA dalam '+days+' hari ke depan.'};
    const rows=near.map(x=>{const d=daysDiff(new Date(x.eta),today);return aiShipRow(x,'<span style="color:#2563eb;font-weight:600;">'+(d===0?'Hari ini!':d+' hari lagi')+'</span>');});
    return{html:true,text:H('📅 **'+near.length+' Shipment Tiba '+days+' Hari ke Depan**')+clickHint+'<div style="margin-top:8px;">'+rows.join('')+'</div>'};
  }

  // 4. Kontainer minggu depan
  if(/kontainer.*(minggu|depan|besok)|minggu depan|minggu ini/.test(tq)){
    const days=/minggu depan/.test(tq)?14:7;
    const endD=new Date(today);endD.setDate(endD.getDate()+days);
    const upcoming=s.filter(x=>{const e=x.eta?new Date(x.eta):null;return e&&e>=today&&e<=endD&&!['Delivered','Cleared'].includes(x.status);}).sort((a,b)=>new Date(a.eta)-new Date(b.eta));
    if(!upcoming.length)return{html:false,text:'📦 Tidak ada kontainer tiba dalam '+days+' hari.'};
    const rows=upcoming.map(x=>{const d=daysDiff(new Date(x.eta),today);return aiShipRow(x,'<span style="color:var(--accent);">'+(d===0?'Hari ini!':d+' hari lagi')+'</span>');});
    return{html:true,text:H('📦 **'+upcoming.length+' Kontainer Tiba '+days+' Hari**')+clickHint+'<div style="margin-top:8px;">'+rows.join('')+'</div>'};
  }

  // 5. Dokumen kurang
  if(/dokumen|invoice|packing|pib|surat|kurang|belum lengkap/.test(tq)){
    const miss=s.filter(x=>{const d=x.docs||{};return['invoice','pl','do','pib','ls'].some(k=>!d[k])&&['Arrived','Delivered'].includes(x.status);});
    if(!miss.length)return{html:false,text:'✅ Semua dokumen lengkap.'};
    const rows=miss.slice(0,12).map(x=>{const m=['invoice','pl','do','pib','ls'].filter(k=>!(x.docs||{})[k]);return aiShipRow(x,'<span style="color:var(--red);">📄 Kurang: '+m.join(', ').toUpperCase()+'</span>');});
    return{html:true,text:H('📄 **'+miss.length+' Dokumen Belum Lengkap**')+clickHint+'<div style="margin-top:8px;">'+rows.join('')+'</div>'};
  }

  // 6. Bandingkan tags/supplier
  if(/banding|compare|vs|versus/.test(tq)){
    const found=allTags.filter(t=>tq.includes(t.toLowerCase()));
    if(found.length>=2){
      const results=found.map(tag=>{const ships=s.filter(x=>(x.tags||[]).includes(tag));const lt=calcLTFromList(ships);return{tag,count:ships.length,avg:avgA(lt.total),rmb:ships.reduce((a,x)=>a+parseFloat(x.value||0),0)};});
      return{html:false,text:'📊 **Perbandingan: '+found.join(' vs ')+'**\n\n'+results.map(r=>'🏷️ **'+r.tag+'**: '+r.count+' PO | rata-rata '+(r.avg||'—')+' hari | '+fmtR(r.rmb)).join('\n')};
    }
    const foundSup=allSuppliers.filter(sup=>tq.includes(sup.toLowerCase()));
    if(foundSup.length>=2){
      const results=foundSup.map(sup=>{const ships=s.filter(x=>x.supplier===sup);const lt=calcLTFromList(ships);return{sup,count:ships.length,avg:avgA(lt.total),rmb:ships.reduce((a,x)=>a+parseFloat(x.value||0),0)};});
      return{html:false,text:'📊 **Perbandingan Supplier: '+foundSup.join(' vs ')+'**\n\n'+results.map(r=>'🏭 **'+r.sup+'**: '+r.count+' PO | rata-rata '+(r.avg||'—')+' hari | '+fmtR(r.rmb)).join('\n')};
    }
    return{html:false,text:'Sebutkan 2 nama untuk dibandingkan.\nContoh: "bandingkan HONEY BOO vs NVMEE" atau "bandingkan IAM vs supplier lain"'};
  }

  // 7. Ranking supplier/forwarder lambat/cepat
  if(/supplier.*(lambat|cepat|terbaik|terburuk|ranking)|lambat.*supplier|cepat.*supplier/.test(tq)){
    const map={};s.forEach(x=>{const k=x.supplier||'—';if(!map[k])map[k]={days:[],count:0};map[k].count++;const tp=parseSD(x.tgl_production)||parseSD(x.stuffing),td=x.deliveredDate?parseSD(x.deliveredDate):null;if(tp&&td){const d=Math.round((td-tp)/DAY);if(d>0&&d<365)map[k].days.push(d);}});
    const ranked=Object.entries(map).filter(([,v])=>v.days.length>0).map(([k,v])=>({name:k,avg:Math.round(v.days.reduce((a,b)=>a+b,0)/v.days.length),count:v.count,n:v.days.length}));
    const isSlow=/lambat|lama|terburuk/.test(tq);ranked.sort((a,b)=>isSlow?b.avg-a.avg:a.avg-b.avg);
    return{html:false,text:'🏭 **Supplier '+(isSlow?'Terlambat':'Tercepat')+'**\n\n'+ranked.slice(0,8).map((r,i)=>(i+1)+'. **'+r.name+'** — '+r.avg+' hari ('+r.n+' data, '+r.count+' PO)').join('\n')};
  }
  if(/forwarder.*(cepat|lambat|terbaik|terburuk|ranking)|emkl.*(cepat|lambat)/.test(tq)){
    const map={};s.forEach(x=>{const k=x.forwarder||'—';if(!map[k])map[k]={days:[],count:0};map[k].count++;const st=parseSD(x.stuffing)||parseSD(x.etd),td=x.deliveredDate?parseSD(x.deliveredDate):null;if(st&&td){const d=Math.round((td-st)/DAY);if(d>0&&d<365)map[k].days.push(d);}});
    const ranked=Object.entries(map).filter(([,v])=>v.days.length>0).map(([k,v])=>({name:k,avg:Math.round(v.days.reduce((a,b)=>a+b,0)/v.days.length),count:v.count,n:v.days.length}));
    const isSlow=/lambat|slow|terburuk/.test(tq);ranked.sort((a,b)=>isSlow?b.avg-a.avg:a.avg-b.avg);
    return{html:false,text:'🚛 **Forwarder '+(isSlow?'Terlambat':'Tercepat')+'**\n\n'+ranked.slice(0,8).map((r,i)=>(i+1)+'. **'+r.name+'** — '+r.avg+' hari ('+r.n+' data, '+r.count+' PO)').join('\n')};
  }

  // 8. Tren bulanan
  if(/tren|trend|bulan ini vs|bulan lalu|pertumbuhan|growth|naik|turun/.test(tq)){
    const months={};s.forEach(x=>{const d=x.etd||x.stuffing||x.tgl_production;if(!d)return;const m=d.slice(0,7);if(!months[m])months[m]={count:0,rmb:0};months[m].count++;months[m].rmb+=parseFloat(x.value||0);});
    const sorted=Object.entries(months).sort((a,b)=>b[0].localeCompare(a[0])).slice(0,6);
    if(sorted.length<2)return{html:false,text:'📈 Belum cukup data untuk analisa tren (butuh minimal 2 bulan).'};
    const [cur,prev]=[sorted[0],sorted[1]];
    const growthPO=prev[1].count>0?Math.round(((cur[1].count-prev[1].count)/prev[1].count)*100):0;
    const growthRMB=prev[1].rmb>0?Math.round(((cur[1].rmb-prev[1].rmb)/prev[1].rmb)*100):0;
    return{html:false,text:'📈 **Tren Shipment**\n\n'+sorted.map(([m,d])=>'• **'+m+'**: '+d.count+' PO | '+fmtR(d.rmb)).join('\n')+'\n\n**'+cur[0]+' vs '+prev[0]+':**\nPO: '+(growthPO>=0?'+':'')+growthPO+'% | RMB: '+(growthRMB>=0?'+':'')+growthRMB+'%'};
  }

  // 9. Item termahal
  if(/item.*(mahal|termahal|expensive)|mahal.*item|termahal/.test(tq)){
    const map={};s.forEach(x=>{const k=x.item||'—';if(!map[k])map[k]={count:0,rmb:0};map[k].count++;map[k].rmb+=parseFloat(x.value||0);});
    const top=Object.entries(map).sort((a,b)=>b[1].rmb-a[1].rmb).slice(0,10);
    return{html:false,text:'💰 **Item Termahal**\n\n'+top.map(([k,v],i)=>(i+1)+'. **'+k+'** — '+fmtR(v.rmb)+' ('+v.count+' PO)').join('\n')};
  }

  // 10. Biaya per tag
  if(/biaya.*tag|total.*tag|tag.*biaya|biaya.*brand|nilai.*tag/.test(tq)){
    const map={};s.forEach(x=>(x.tags||[]).forEach(t=>{if(!map[t])map[t]={count:0,rmb:0};map[t].count++;map[t].rmb+=parseFloat(x.value||0);}));
    return{html:false,text:'🏷️ **Nilai per Tag**\n\n'+Object.entries(map).sort((a,b)=>b[1].rmb-a[1].rmb).map(([k,v])=>'• **'+k+'**: '+fmtR(v.rmb)+' ('+v.count+' PO)').join('\n')};
  }

  // 11. PO paling lama
  if(/paling lama|terlama|oldest|longest|belum selesai/.test(tq)){
    const active=s.filter(x=>!['Delivered','Cleared'].includes(x.status)&&(x.tgl_production||x.stuffing));
    const ranked=active.map(x=>{const start=parseSD(x.tgl_production)||parseSD(x.stuffing);return{...x,age:start?Math.round((today-start)/DAY):0};}).sort((a,b)=>b.age-a.age).slice(0,10);
    if(!ranked.length)return{html:false,text:'Tidak ada PO aktif dengan tanggal produksi/stuffing.'};
    return{html:false,text:'⏳ **PO Paling Lama Belum Selesai**\n\n'+ranked.map((x,i)=>(i+1)+'. **'+x.po+'** — '+x.item+'\n   '+x.age+' hari | Status: '+x.status+' | '+x.supplier).join('\n')};
  }

  // 12. Production backlog >30 hari
  if(/backlog|production.*(lama|lebih|lbh)|lama.*produksi|lebih.*hari.*produc/.test(tq)){
    const days2=/([0-9]+)\s*hari/.test(tq)?parseInt(tq.match(/([0-9]+)\s*hari/)[1]):30;
    const prod=s.filter(x=>x.status==='Production'&&x.tgl_production).map(x=>({...x,age:Math.round((today-parseSD(x.tgl_production))/DAY)})).filter(x=>x.age>days2).sort((a,b)=>b.age-a.age);
    if(!prod.length)return{html:false,text:'✅ Tidak ada Production lebih dari '+days2+' hari.'};
    return{html:false,text:'🏭 **'+prod.length+' PO Production > '+days2+' hari**\n\n'+prod.slice(0,10).map((x,i)=>(i+1)+'. **'+x.po+'** — '+x.item+' ('+x.age+' hari)').join('\n')};
  }

  // 13. Rata-rata transit AIR vs laut
  if(/transit.*air|air.*laut|rata.*air|rute|route|jalur/.test(tq)){
    const airShips=s.filter(x=>x.container&&x.container.toUpperCase().includes('AIR'));
    const seaShips=s.filter(x=>x.container&&!x.container.toUpperCase().includes('AIR')&&x.container!=='_PROD_');
    const ltAir=calcLTFromList(airShips),ltSea=calcLTFromList(seaShips);
    return{html:false,text:'✈️🚢 **Perbandingan Rute**\n\n✈️ **AIR** ('+airShips.length+' PO):\n  Pengiriman: '+(avgA(ltAir.ship)||'—')+' hari | Total: '+(avgA(ltAir.total)||'—')+' hari\n\n🚢 **Laut** ('+seaShips.length+' PO):\n  Pengiriman: '+(avgA(ltSea.ship)||'—')+' hari | Total: '+(avgA(ltSea.total)||'—')+' hari'};
  }

  // 14. Aging per status
  if(/aging|berapa lama.*status|lama.*di.*status|sudah berapa/.test(tq)){
    const statusAge={};s.filter(x=>!['Delivered','Cleared'].includes(x.status)).forEach(x=>{const st=x.status;if(!statusAge[st])statusAge[st]=[];const d=parseSD(x.etd)||parseSD(x.stuffing)||parseSD(x.tgl_production);if(d)statusAge[st].push(Math.round((today-d)/DAY));});
    return{html:false,text:'⏳ **Aging per Status**\n\n'+Object.entries(statusAge).map(([st,ages])=>'**'+st+'**: '+ages.length+' PO | rata-rata '+(avgA(ages)||'—')+' hari | max '+Math.max(...ages)+' hari').join('\n')};
  }

  // 15. Total RMB per status
  if(/(total|berapa).*(rmb|nilai|uang).*(pengiriman|laut|sailed|aktif|produksi|stuffing|arrived)|rmb.*(pengiriman|laut|sailed)/.test(tq)){
    if(tq.includes('pengiriman')){const f=s.filter(x=>['Stuffing','Sailed','Arrived'].includes(x.status));return{html:false,text:'💰 **Pengiriman** (Stuffing+Sailed+Arrived): '+fmtR(f.reduce((a,x)=>a+parseFloat(x.value||0),0))+' ('+f.length+' PO)'};}
    const statusKw=tq.includes('laut')||tq.includes('sailed')?'Sailed':tq.includes('produksi')?'Production':tq.includes('stuffing')?'Stuffing':tq.includes('arrived')?'Arrived':null;
    if(statusKw){const f=s.filter(x=>x.status===statusKw);return{html:false,text:'💰 **'+statusKw+'**: '+fmtR(f.reduce((a,x)=>a+parseFloat(x.value||0),0))+' ('+f.length+' PO)'};}
    const aktif=s.filter(x=>!['Delivered','Cleared'].includes(x.status));
    return{html:false,text:'💰 Total aktif: **'+fmtR(aktif.reduce((a,x)=>a+parseFloat(x.value||0),0))+'** ('+aktif.length+' PO)'};
  }

  // 16. PO tanpa kontainer
  if(/tanpa kontainer|belum.*(kontainer|container)|po.*(belum|tanpa)/.test(tq)){
    const no=s.filter(x=>!x.container||x.container==='_PROD_');
    if(!no.length)return{html:false,text:'✅ Semua PO sudah punya kontainer.'};
    const rows=no.slice(0,12).map(x=>aiShipRow(x,'<span style="color:var(--yellow);">🏭 '+x.status+'</span>'));
    return{html:true,text:H('📦 **'+no.length+' PO Belum Ada Kontainer**')+clickHint+'<div style="margin-top:8px;">'+rows.join('')+'</div>'};
  }

  // 17. Lead time / rata-rata pengiriman (umum)
  if(/rata.*(kirim|pengiriman|lead|waktu|hari)|lead\s*time|waktu pengiriman|berapa lama/.test(tq)&&!findEntity(tq)){
    const lt=calcLTFromList(s);
    return{html:false,text:'⏱ **Rata-rata Waktu Pengiriman**\n\n🏭 Produksi: **'+(avgA(lt.prod)||'—')+' hari** ('+lt.prod.length+' data)\n🚢 Pengiriman: **'+(avgA(lt.ship)||'—')+' hari** ('+lt.ship.length+' data)\n📋 Total: **'+(avgA(lt.total)||'—')+' hari** ('+lt.total.length+' data)'};
  }

  // 18. Item terbanyak
  if(/item.*(banyak|populer|terbanyak)|banyak.*item|sku.*(banyak|populer)/.test(tq)){
    const im={};s.forEach(x=>{const k=x.item||'—';im[k]=(im[k]||0)+1;});
    const top=Object.entries(im).sort((a,b)=>b[1]-a[1]).slice(0,10);
    return{html:false,text:'📦 **Item Terbanyak**\n\n'+top.map(([k,v],i)=>(i+1)+'. **'+k+'** — '+v+' PO').join('\n')};
  }

  // 19. Status filter
  const stList=getStatusNames();
  for(const st of stList){
    if(tq===st.toLowerCase()||tq==='status '+st.toLowerCase()){
      const list=s.filter(x=>x.status===st);
      if(!list.length)return{html:false,text:'Tidak ada PO dengan status '+st+'.'};
      const rows=list.slice(0,10).map(x=>aiShipRow(x,''));
      return{html:true,text:H('**'+st+': '+list.length+' PO**')+clickHint+'<div style="margin-top:8px;">'+rows.join('')+'</div>'};
    }
  }

  // 20. Nilai/RMB general
  if(/nilai|total harga|value|uang|biaya|rmb/.test(tq)&&!findEntity(tq)){
    const tot=s.reduce((a,x)=>a+parseFloat(x.value||0),0);
    const sm={};s.forEach(x=>{const k=x.supplier||'—';sm[k]=(sm[k]||0)+parseFloat(x.value||0);});
    const top=Object.entries(sm).sort((a,b)=>b[1]-a[1]).slice(0,5);
    return{html:false,text:'💰 **Total Nilai**\n\nSemua: **'+fmtR(tot)+'**\n\n**Top 5 Supplier:**\n'+top.map(([k,v],i)=>(i+1)+'. '+k+': '+fmtR(v)).join('\n')};
  }

  // 21. Breakdown status / tags
  if(/breakdown|per status/.test(tq)){const sc={};s.forEach(x=>sc[x.status||'—']=(sc[x.status||'—']||0)+1);return{html:false,text:'📊 **Breakdown Status**\n\n'+Object.entries(sc).sort((a,b)=>b[1]-a[1]).map(([k,v])=>k+': '+v+' PO').join('\n')};}
  if(/tag|kategori|brand/.test(tq)&&!findEntity(tq)){const tm={};s.forEach(x=>(x.tags||[]).forEach(t=>{if(!tm[t])tm[t]={c:0,r:0};tm[t].c++;tm[t].r+=parseFloat(x.value||0);}));return{html:false,text:'🏷️ **Breakdown Tags**\n\n'+Object.entries(tm).sort((a,b)=>b[1].c-a[1].c).map(([k,v])=>'**'+k+'**: '+v.c+' PO | '+fmtR(v.r)).join('\n')};}

  // ═══════════════════════════════════════════════
  // PENCARIAN KODE PARSIAL — prioritas sebelum entity
  // ═══════════════════════════════════════════════
  const partialRes=partialCodeSearch();
  if(partialRes)return partialRes;

  // ═══════════════════════════════════════════════
  // ENTITY-BASED QUERY — deteksi entitas di pertanyaan
  // ═══════════════════════════════════════════════
  const entity=findEntity(tq);
  if(entity){
    // Cek intent spesifik + entity
    if(/rata|average|waktu|lama|lead|berapa hari|pengiriman/.test(tq)){
      const lt=calcLTFromList(entity.list);
      return{html:false,text:'⏱ **Lead Time: '+entity.value+'** ('+entity.list.length+' PO)\n\n🏭 Produksi: **'+(avgA(lt.prod)||'—')+' hari** ('+lt.prod.length+')\n🚢 Pengiriman: **'+(avgA(lt.ship)||'—')+' hari** ('+lt.ship.length+')\n📋 Total: **'+(avgA(lt.total)||'—')+' hari** ('+lt.total.length+')'};
    }
    if(/terakhir|last|terbaru|recent/.test(tq)){
      const sorted=entity.list.filter(x=>x.etd||x.stuffing||x.tgl_production).sort((a,b)=>new Date(b.etd||b.stuffing||b.tgl_production)-new Date(a.etd||a.stuffing||a.tgl_production));
      if(!sorted.length)return{html:false,text:'Tidak ada data pengiriman untuk '+entity.value+'.'};
      const x=sorted[0];
      return{html:false,text:'📦 **Terakhir: '+entity.value+'**\n\nPO: **'+x.po+'** — '+x.item+'\nStatus: '+x.status+' | Forwarder: '+(x.forwarder||'—')+'\nStuffing: '+fmt(x.stuffing)+' | ETD: '+fmt(x.etd)+' | ETA: '+fmt(x.eta)+'\nSupplier: '+(x.supplier||'—')+' | Kontainer: '+(x.container||'—')};
    }
    if(/berapa|jumlah|total|ada/.test(tq)){
      const val=entity.list.reduce((a,x)=>a+parseFloat(x.value||0),0);
      const sc={};entity.list.forEach(x=>sc[x.status]=(sc[x.status]||0)+1);
      return{html:false,text:'📊 **'+entity.value+': '+entity.list.length+' PO**\n💰 '+fmtR(val)+'\n\n'+Object.entries(sc).map(([k,v])=>'• '+k+': '+v).join('\n')};
    }
    // Default: tampilkan ringkasan entity
    const text=entitySummary(entity);
    return{html:false,text:text};
  }

  // ═══════════════════════════════════════════════
  // FALLBACK: pencarian umum
  // ═══════════════════════════════════════════════
  const kw=tq.replace(/cari|search|tampilkan|lihat|tunjukkan/g,'').trim();
  if(kw.length>1){
    const res=s.filter(x=>[x.po,x.container,x.item,x.supplier,x.forwarder,x.notes,...(x.tags||[])].some(f=>f&&f.toLowerCase().includes(kw)));
    if(res.length){
      const rows=res.slice(0,10).map(x=>aiShipRow(x,''));
      return{html:true,text:H('🔍 **'+res.length+' hasil untuk "'+kw+'"**')+clickHint+'<div style="margin-top:8px;">'+rows.join('')+'</div>'};
    }
  }

  return{html:false,text:'Maaf, saya belum memahami.\n\nCoba tanya:\n• "rangkuman" / "yang terlambat"\n• "tiba 7 hari" / "kontainer minggu depan"\n• "rata-rata pengiriman HARVEST"\n• "NV-DRY-LUNA terakhir kirim lewat apa"\n• "supplier tercepat" / "forwarder terlambat"\n• "total RMB pengiriman"\n• "bandingkan HONEY BOO vs NVMEE"\n• "tren bulanan" / "item termahal"\n• "PO paling lama belum selesai"\n• "transit AIR vs laut"\n• Atau ketik nama PO/item/supplier/forwarder'};
}


async function aiSend(){
  if(_aiLoading)return;
  const inp=document.getElementById('aiInp');
  const text=inp.value.trim();if(!text)return;
  inp.value='';inp.style.height='auto';
  document.getElementById('aiSendBtn').disabled=true;
  document.getElementById('aiChips').style.display='none';
  aiAddMsg('user',text);_aiHist.push({role:'user',content:text});_aiLoading=true;
  const el=document.getElementById('aiMsgs');
  const td=document.createElement('div');td.className='ai-msg bot';td.id='aiTyping';
  td.innerHTML='<div class="ai-msg-av">🤖</div><div class="ai-bbl"><div class="ai-dot-wrap"><div class="ai-dot"></div><div class="ai-dot"></div><div class="ai-dot"></div></div></div>';
  el.appendChild(td);el.scrollTop=el.scrollHeight;
  await new Promise(r=>setTimeout(r,260));
  document.getElementById('aiTyping')?.remove();
  const result=aiQuery(text);
  // aiQuery returns {html:bool, text:string}
  const replyText=result?.text||String(result);
  const replyHtml=result?.html||false;
  aiAddMsg('bot',replyText,replyHtml);
  _aiHist.push({role:'assistant',content:replyText});
  _aiLoading=false;document.getElementById('aiSendBtn').disabled=false;
}



function bnavSet(page){
  document.querySelectorAll('.bnav-item').forEach(b=>b.classList.remove('active'));
  const el=document.getElementById('bnav-'+page);
  if(el)el.classList.add('active');
}
function toggleMobileSidebar(){
  const sb=document.getElementById('sidebar');
  const ov=document.getElementById('sidebarOverlay');
  const isOpen=sb.classList.contains('mobile-open');
  if(isOpen){sb.classList.remove('mobile-open');if(ov)ov.classList.remove('show');}
  else{sb.classList.add('mobile-open');if(ov)ov.classList.add('show');}
}

checkSession();
