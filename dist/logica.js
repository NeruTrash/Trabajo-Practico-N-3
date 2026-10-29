(function (root) {
  'use strict';
  const normalizar = texto => String(texto).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  function filtrar(productos, filtros) {
    return productos.filter(p => normalizar(p.nombre).includes(normalizar(filtros.q || '')) && (!filtros.categoria || p.categoria === filtros.categoria) && (!filtros.marca || p.marca === filtros.marca) && (filtros.min === '' || p.precio >= Number(filtros.min)) && (filtros.max === '' || p.precio <= Number(filtros.max)));
  }
  function cantidadValida(cantidad, stock) {return Number.isInteger(cantidad) && cantidad >= 0 && cantidad <= stock;}
  function total(productos, carrito) {return productos.reduce((s,p) => s + p.precio * (carrito[p.id] || 0), 0);}
  function validarIntento(texto, maximo, historial) {
    const n = Number(texto);
    if (!String(texto).trim() || !Number.isInteger(n) || n < 1 || n > maximo) return `Ingresá un número entero entre 1 y ${maximo}.`;
    if (historial.includes(n)) return 'Ya probaste ese número. Elegí otro.';
    return '';
  }
  const api = {normalizar,filtrar,cantidadValida,total,validarIntento};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.Logica = api;
})(typeof window !== 'undefined' ? window : globalThis);
