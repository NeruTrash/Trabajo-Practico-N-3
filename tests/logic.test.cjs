const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const logic=require('../dist/logica.js');
const productos=JSON.parse(fs.readFileSync(path.join(__dirname,'../dist/productos.json'),'utf8'));
const base={q:'',categoria:'',marca:'',min:'',max:''};
test('busca sin acentos ni mayúsculas y encuentra fragmentos en cualquier posición',()=>{
  for(const q of ['MÓUSE','ÓPTICO','ópti','tico'])assert.equal(logic.filtrar(productos,{...base,q})[0].id,1);
});
test('combina marca categoría y límites de precio inclusivos',()=>{
  const f={...base,categoria:'Audio',marca:'Sonix',min:'24000',max:'24000'};
  assert.deepEqual(logic.filtrar(productos,f).map(p=>p.id),[3]);
  assert.equal(logic.filtrar(productos,{...f,marca:'Nexo'}).length,0);
});
test('solo permite cantidades enteras dentro del stock',()=>{
  assert.equal(logic.cantidadValida(10,10),true);assert.equal(logic.cantidadValida(11,10),false);
  assert.equal(logic.cantidadValida(-1,10),false);assert.equal(logic.cantidadValida(1.5,10),false);
  assert.equal(logic.cantidadValida(1,0),false);
});
test('el total usa las cantidades de cada producto',()=>assert.equal(logic.total(productos,{1:2,2:1}),52000));
test('rechaza entradas vacías fuera de rango decimales y repetidas',()=>{
  for(const n of ['', ' ', '0','21','3.5','a','Infinity'])assert.ok(logic.validarIntento(n,20,[]));
  assert.ok(logic.validarIntento('10',20,[10]));
  assert.equal(logic.validarIntento('20',20,[10]),'');
});
