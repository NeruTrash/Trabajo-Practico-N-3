'use strict';
const niveles={facil:{max:20,intentos:6},medio:{max:50,intentos:7},dificil:{max:100,intentos:7}};
const input=document.getElementById('intento');
const mensaje=document.getElementById('mensaje');
let secreto,maximo,limite,historial,terminada;
function actualizar(){
  document.getElementById('restantes').textContent=`${limite-historial.length} de ${limite}`;
  document.getElementById('historial').innerHTML=historial.length?historial.map(n=>`<span class="guess-chip">${n}</span>`).join(''):'<p>Todavía no probaste ningún número.</p>';
  input.disabled=terminada;document.getElementById('comprobar').disabled=terminada;
}
function nuevaPartida(enfocar=false){
  const nivel=niveles[document.querySelector('[name=nivel]:checked').value];
  maximo=nivel.max;limite=nivel.intentos;secreto=Math.floor(Math.random()*maximo)+1;historial=[];terminada=false;
  input.max=maximo;input.value='';input.setAttribute('aria-invalid','false');
  document.getElementById('rango-label').textContent=`Tu número del 1 al ${maximo}`;
  document.getElementById('numero-revelado').textContent='?';
  mensaje.textContent=`Nueva partida. Buscá un número del 1 al ${maximo}.`;
  actualizar();if(enfocar)input.focus();
}
document.getElementById('intento-form').addEventListener('submit',event=>{
  event.preventDefault();if(terminada)return;
  const error=Logica.validarIntento(input.value,maximo,historial);
  input.setAttribute('aria-invalid',String(Boolean(error)));
  if(error){mensaje.textContent=error;input.focus();return;}
  const n=Number(input.value);historial.push(n);
  if(n===secreto){terminada=true;mensaje.textContent=`¡Acertaste! El número era ${secreto}. Lo descubriste en ${historial.length} ${historial.length===1?'intento':'intentos'}.`;document.getElementById('numero-revelado').textContent=secreto;}
  else if(historial.length===limite){terminada=true;mensaje.textContent=`Se terminaron los intentos. El número era ${secreto}. ¡Probá otra vez!`;document.getElementById('numero-revelado').textContent=secreto;}
  else mensaje.textContent=n<secreto?`El número secreto es mayor que ${n}.`:`El número secreto es menor que ${n}.`;
  actualizar();input.value='';if(terminada)document.getElementById('reiniciar').focus();else input.focus();
});
document.getElementById('reiniciar').addEventListener('click',()=>nuevaPartida(true));
document.querySelectorAll('[name=nivel]').forEach(r=>r.addEventListener('change',()=>nuevaPartida()));
nuevaPartida();
