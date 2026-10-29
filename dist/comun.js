'use strict';
const Comun = {
  dinero: valor => new Intl.NumberFormat('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:0}).format(valor),
  avisar(texto) {
    const el=document.getElementById('aviso');
    el.textContent=texto;el.classList.add('show');
    clearTimeout(this.timer);this.timer=setTimeout(()=>el.classList.remove('show'),3200);
  },
  guardar(clave,datos) {try {localStorage.setItem(clave,JSON.stringify(datos));return true;} catch {this.avisar('El almacenamiento no está disponible. Los cambios duran hasta cerrar la página.');return false;}},
  leer(clave,fallback) {try {return JSON.parse(localStorage.getItem(clave)) ?? fallback;}catch{return fallback;}},
  escapar(texto) {return String(texto).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
};
document.querySelectorAll('dialog').forEach(dialog=>{
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  dialog.querySelectorAll('[data-close]').forEach(button=>button.addEventListener('click',()=>dialog.close()));
});
