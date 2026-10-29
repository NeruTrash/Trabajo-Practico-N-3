# Contrato de interacción

| Capability | Canonical owner | Source of truth | Allowed variants | Verification |
|---|---|---|---|---|
| Select/Listbox | select HTML nativo | catálogo HTML | categoría, marca, orden | prueba de teclado y popup nativo |
| Form | catalogo.js y juego.js | reglas de logica.js | filtros y jugada | pruebas unitarias y navegador |
| Scrollbar | estilos.css global | variables de DESIGN.md | tamaño nativo | revisión responsive |
| Toast | Comun.avisar en comun.js | un único live region por página | confirmación, aviso | interacción carrito |
| CRUD | catalogo.js | carrito local validado contra JSON | sumar, restar, eliminar, vaciar con deshacer | navegador y persistencia |

Navegación con enlaces HTML y páginas reales. Un botón de retorno al portafolio está presente en ambos proyectos. Navegación activa con aria-current. Los filtros locales se guardan en URL al editar y se restauran al cargar. Se usa filtrado inmediato porque son seis registros locales; no hay solicitudes por pulsación ni carrera de búsqueda.

Los select son nativos: la apariencia y geometría del popup pertenecen al sistema operativo. Todos los campos tienen etiqueta; los errores de precio se asocian mediante aria-describedby. El formulario del juego tiene novalidate y validación propia. El carrito se valida al recuperar el almacenamiento. Si el almacenamiento no funciona, la aplicación sigue en memoria e informa la limitación. Los diálogos usan showModal, cierre con Escape y restauración de foco nativa.

El carrito vacío muestra total cero. El vaciado ofrece deshacer dentro del diálogo; no es irreversible. No hay checkout ni compra real. El JSON es inventario académico local sin sincronización entre usuarios. Precios de ejemplo en ARS, cantidades enteras y stock máximo aplicado desde toda acción de agregado.

El juego no consume intentos para entradas inválidas ni repetidas. Se verifica victoria antes que derrota en el último intento. Reiniciar o cambiar nivel limpia el historial. La partida permanece solo en memoria; el carrito persiste en localStorage.
