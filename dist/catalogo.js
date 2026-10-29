'use strict';
const $ = id => document.getElementById(id);
let productos = [];
let carrito = {};
let listo = false;
let detalleId = null;
const filtrosIds=['buscar','categoria','marca','min','max','orden'];
const parametros={buscar:'q',categoria:'categoria',marca:'marca',min:'min',max:'max',orden:'orden'};
const escape=Comun.escapar;

function leerFiltros(){return {q:$('buscar').value,categoria:$('categoria').value,marca:$('marca').value,min:$('min').value,max:$('max').value};}
function sincronizarURL(){
  const params=new URLSearchParams();
  filtrosIds.forEach(id=>{if($(id).value && !(id==='orden' && $(id).value==='nombre'))params.set(parametros[id],$(id).value);});
  history.replaceState(null,'',location.pathname+(params.size?'?'+params:''));
}
function aplicarFiltros(){
  const f=leerFiltros();
  const error=(f.min!=='' && Number(f.min)<0)||(f.max!=='' && Number(f.max)<0)?'Los precios deben ser cero o mayores.':f.min!==''&&f.max!==''&&Number(f.min)>Number(f.max)?'El mínimo no puede superar al máximo.':'';
  $('error-filtros').textContent=error;
  $('min').setAttribute('aria-invalid',String(Boolean(error)));
  $('max').setAttribute('aria-invalid',String(Boolean(error)));
  $('limpiar-busqueda').hidden=!f.q;
  sincronizarURL();
  if(!listo)return;
  let visibles=error?[]:Logica.filtrar(productos,f);
  visibles.sort((a,b)=>$('orden').value==='asc'?a.precio-b.precio:$('orden').value==='desc'?b.precio-a.precio:a.nombre.localeCompare(b.nombre,'es'));
  $('resultados').textContent=`${visibles.length} de ${productos.length} productos`;
  $('productos').innerHTML=visibles.length?visibles.map(p=>`<article class="product"><button class="product-visual" data-detalle="${p.id}" aria-label="Ver detalle de ${escape(p.nombre)}"><img src="${escape(p.imagen)}" alt="Ilustración de ${escape(p.nombre)}" width="240" height="180"></button><div class="product-info"><h2>${escape(p.nombre)}</h2><p>${escape(p.marca)} · ${escape(p.categoria)}</p><div class="price">${Comun.dinero(p.precio)}</div><div class="stock">${p.stock?'Stock: '+p.stock+' unidades':'Sin stock por el momento'}</div><button class="dark" data-add="${p.id}" ${!p.stock || (carrito[p.id]||0)>=p.stock?'disabled':''}>${!p.stock?'Sin stock':(carrito[p.id]||0)>=p.stock?'Stock máximo en carrito':'Agregar al carrito'}</button><button class="details-link" data-detalle="${p.id}">Ver detalles</button></div></article>`).join(''):`<div class="empty"><h2>${error?'Revisá el rango de precios':'No encontramos productos'}</h2><p>${error?'Corregí los valores para continuar.':'Probá con otra búsqueda o quitá algunos filtros.'}</p><button data-reset>Limpiar filtros</button></div>`;
}
function actualizarContador(){$('contador').textContent=Object.values(carrito).reduce((a,b)=>a+b,0);}
function guardar(){Comun.guardar('tp3-carrito',carrito);actualizarContador();}
function cambiarCantidad(id,delta){
  const producto=productos.find(p=>p.id===id);
  if(!producto)return;
  const nueva=(carrito[id]||0)+delta;
  if(!Logica.cantidadValida(nueva,producto.stock)){Comun.avisar('Ya alcanzaste el stock disponible.');return;}
  if(nueva)carrito[id]=nueva;else delete carrito[id];
  guardar();aplicarFiltros();
  if($('carrito').open)renderCarrito();
  if($('detalle').open)renderDetalle(producto);
  Comun.avisar(delta>0?`${producto.nombre} agregado al carrito.`:'Cantidad actualizada.');
}
function renderDetalle(p){
  $('detalle-titulo').textContent=p.nombre;
  $('detalle-contenido').innerHTML=`<img class="modal-product-image" src="${escape(p.imagen)}" alt="Ilustración de ${escape(p.nombre)}"><p>${escape(p.descripcion)}</p><p>${escape(p.marca)} · ${escape(p.categoria)} · Stock: ${p.stock}</p><div class="price">${Comun.dinero(p.precio)}</div><button class="primary" data-add="${p.id}" ${!p.stock||(carrito[p.id]||0)>=p.stock?'disabled':''}>${!p.stock?'Sin stock':(carrito[p.id]||0)>=p.stock?'Stock máximo en carrito':'Agregar al carrito'}</button>`;
}
function renderCarrito(){
  const ids=Object.keys(carrito);
  $('carrito-contenido').innerHTML=ids.length?ids.map(id=>{
    const p=productos.find(p=>p.id===Number(id));const cantidad=carrito[id];
    return `<div class="cart-row"><img src="${escape(p.imagen)}" alt="" width="62" height="60"><div><div class="cart-name">${escape(p.nombre)}</div><p>${Comun.dinero(p.precio)} por unidad</p><div class="quantity"><button data-minus="${id}" aria-label="Quitar una unidad de ${escape(p.nombre)}">−</button><span aria-label="Cantidad">${cantidad}</span><button data-plus="${id}" aria-label="Agregar una unidad de ${escape(p.nombre)}" ${cantidad>=p.stock?'disabled':''}>+</button><button class="remove" data-remove="${id}">Eliminar</button></div></div><strong>${Comun.dinero(p.precio*cantidad)}</strong></div>`;
  }).join('')+`<div class="cart-bottom"><div class="total-row"><span>Total</span><span>${Comun.dinero(Logica.total(productos,carrito))}</span></div><p class="cart-note">Simulación académica. No se realizan pagos ni pedidos.</p><button id="vaciar">Vaciar carrito</button> <button data-close-cart class="primary">Seguir explorando</button></div>`:`<div class="empty"><h3>Tu carrito está vacío</h3><p>Elegí un producto del catálogo para empezar.</p><p>Total: ${Comun.dinero(0)}</p><button data-close-cart class="primary">Explorar productos</button></div>`;
}
function limpiarFiltros(){filtrosIds.forEach(id=>$(id).value=id==='orden'?'nombre':'');aplicarFiltros();}
async function cargar(){
  listo=false;$('productos').setAttribute('aria-busy','true');$('productos').innerHTML='<div class="empty">Cargando catálogo…</div>';$('resultados').textContent='Cargando productos…';$('abrir-carrito').disabled=true;
  const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),12000);
  try{
    const response=await fetch('productos.json',{signal:controller.signal});if(!response.ok)throw new Error('HTTP');
    const datos=await response.json();
    if(!Array.isArray(datos)||!datos.every(p=>Number.isInteger(p.id)&&typeof p.nombre==='string'&&Number.isFinite(p.precio)&&p.precio>=0&&Number.isInteger(p.stock)&&p.stock>=0))throw new Error('Formato');
    productos=datos;
    const guardado=Comun.leer('tp3-carrito',{});carrito={};
    if(guardado&&typeof guardado==='object'&&!Array.isArray(guardado))productos.forEach(p=>{const q=guardado[p.id];if(Number.isInteger(q)&&q>0&&p.stock>0)carrito[p.id]=Math.min(q,p.stock);});
    listo=true;guardar();aplicarFiltros();$('abrir-carrito').disabled=false;
  }catch{
    $('resultados').textContent='Catálogo no disponible';$('productos').innerHTML='<div class="empty"><h2>No pudimos cargar los productos</h2><p>Revisá la conexión e intentá de nuevo. Si abriste el archivo directamente, iniciá el servidor indicado en las instrucciones.</p><button id="reintentar" class="primary">Reintentar</button></div>';
  }finally{clearTimeout(timer);$('productos').setAttribute('aria-busy','false');}
}
filtrosIds.forEach(id=>{
  const value=new URLSearchParams(location.search).get(parametros[id]);if(value!==null)$(id).value=value;
  $(id).addEventListener('input',event=>{if(!event.isComposing)aplicarFiltros();});
});
$('buscar').addEventListener('compositionend',aplicarFiltros);
$('limpiar-filtros').addEventListener('click',limpiarFiltros);
$('limpiar-busqueda').addEventListener('click',()=>{$('buscar').value='';aplicarFiltros();$('buscar').focus();});
$('abrir-carrito').addEventListener('click',()=>{renderCarrito();$('carrito').showModal();});
document.addEventListener('click',event=>{
  const b=event.target.closest('button');if(!b||b.disabled)return;
  const focusAction=b.hasAttribute('data-plus')?'data-plus':b.hasAttribute('data-minus')?'data-minus':b.hasAttribute('data-remove')?'data-remove':null;
  const focusId=focusAction?b.getAttribute(focusAction):null;
  if(b.hasAttribute('data-add')){
    const id=Number(b.dataset.add);cambiarCantidad(id,1);
    const owner=$('detalle').open?$('detalle'):$('productos');
    (owner.querySelector(`[data-add="${id}"]:not(:disabled)`)||owner.querySelector(`[data-detalle="${id}"]`)||owner.querySelector('[data-close]')).focus();
  }
  if(b.hasAttribute('data-detalle')){detalleId=b.dataset.detalle;renderDetalle(productos.find(p=>p.id===Number(detalleId)));$('detalle').showModal();}
  if(b.hasAttribute('data-plus'))cambiarCantidad(Number(b.dataset.plus),1);
  if(b.hasAttribute('data-minus'))cambiarCantidad(Number(b.dataset.minus),-1);
  if(b.hasAttribute('data-remove')){delete carrito[b.dataset.remove];guardar();aplicarFiltros();renderCarrito();Comun.avisar('Producto eliminado del carrito.');}
  if(b.id==='vaciar'){const anterior={...carrito};carrito={};guardar();aplicarFiltros();renderCarrito();$('carrito-contenido').insertAdjacentHTML('beforeend','<button id="deshacer">Deshacer vaciado</button>');$('deshacer').onclick=()=>{carrito=anterior;guardar();aplicarFiltros();renderCarrito();$('carrito').querySelector('[data-close]').focus();Comun.avisar('Carrito restaurado.');};$('deshacer').focus();Comun.avisar('Carrito vaciado. Podés deshacer esta acción.');}
  if(b.hasAttribute('data-close-cart'))$('carrito').close();
  if(b.hasAttribute('data-reset'))limpiarFiltros();
  if(b.id==='reintentar')cargar();
  if(focusAction){const next=$('carrito-contenido').querySelector(`[${focusAction}="${focusId}"]:not(:disabled)`);(next||$('carrito').querySelector('[data-close]')).focus();}
});
$('detalle').addEventListener('close',()=>{const opener=$('productos').querySelector(`[data-detalle="${detalleId}"]`);if(opener)opener.focus();});
cargar();
