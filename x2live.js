(function(){
  const old=document.getElementById('ttx2live');
  if(old){old.remove();}
  const box=document.createElement('div');
  box.id='ttx2live';
  box.style='position:fixed;bottom:10px;left:10px;z-index:999999;background:#ff0066;color:#fff;padding:8px 12px;border-radius:10px;font-family:sans-serif;display:flex;align-items:center;gap:6px;box-shadow:0 0 8px rgba(0,0,0,0.3);';
  box.innerHTML='<button id="spd1" style="background:#fff;color:#ff0066;border:none;padding:4px 8px;border-radius:5px;cursor:pointer;font-weight:bold;">1x</button><button id="spd2" style="background:#fff;color:#ff0066;border:none;padding:4px 8px;border-radius:5px;cursor:pointer;font-weight:bold;">2x</button><span style="font-weight:bold;">⚙️ X2 Live</span>';
  document.body.appendChild(box);

  const vids=document.querySelectorAll('video');
  function setSpeed(v){vids.forEach(e=>e.playbackRate=v);}
  document.getElementById('spd1').onclick=()=>setSpeed(1);
  document.getElementById('spd2').onclick=()=>setSpeed(2);
})();
