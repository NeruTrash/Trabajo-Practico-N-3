# Diseño del portafolio de Maximo Aceituno

## North Star
Un portafolio académico legible que lleva directamente a dos ejercicios funcionales. La referencia visual es el concepto generado para este proyecto: fondo blanco, azul cobalto, tipografía compacta y producto protagonista.

## Contexto y registro
Híbrido: portada personal sobria y pantallas de producto orientadas a tareas. Público en español de Argentina. El catálogo es una simulación académica sin transacciones. No hay perfiles ni datos personales de compradores.

## Color y tokens
Fuente canónica: variables de dist/estilos.css, modelo B. DESIGN.md documenta sus roles. --bg #ffffff fondo, --ink #101218 texto, --muted #555d6b texto secundario, --accent #0658ff acción principal, --pale #e9f2ff fondo de juego, --line #dce1e9 bordes, --surface #f5f6f8 imágenes y filtros, --danger #b42318 errores, --scroll #8c96a6 barra de desplazamiento.

## Tipografía
--body Segoe UI con Arial de respaldo para contenido y controles. --display Arial para títulos. Títulos grandes con espaciado negativo moderado, cuerpo 16px y etiquetas de 12 a 14px. Sin fuentes externas para que el proyecto pueda ejecutarse sin conexión a servicios de fuentes.

## Espaciado y forma
--space 24px, --radius 10px, contenido máximo 1180px, márgenes 32px en escritorio y 16px en celular. Tarjetas de producto en tres columnas, luego dos. Filtros pasan encima del catálogo en móvil. El juego se apila en móvil.

## Componentes y composición
Navegación compartida, botones primarios azules y secundarios negros o blancos, imágenes de productos sobre gris claro. La portada usa dos filas de proyectos y una firma de código tipográfica en lugar de inventar un retrato del estudiante. Las imágenes son ilustraciones vectoriales locales de los seis productos; esta adaptación permite entregar recursos independientes y ejecutar la web sin dependencias remotas. Los niveles y valores concretos siguen la propuesta del TP y prevalecen sobre el texto de ejemplo del concepto.

## Movimiento y accesibilidad
Transiciones breves de hover, foco visible y preferencia de movimiento reducido. Diálogos HTML nativos con Escape, foco modal y cierre por botón o fondo. Ninguna interacción depende solo del hover. No se ocultan barras de desplazamiento.

## Antirreferencias
Sin paneles de métricas inventadas, degradados decorativos, pago simulado engañoso ni credenciales. No se usa un hero comercial entre el usuario y el catálogo.

## Verificación
Pruebas de lógica con node --test, flujos completos en navegador en escritorio y celular, estados de error de carga, resultados vacíos, límites de stock y finalización de partidas.

## Continuidad del portafolio del TP 2

El material de Trabajo Práctico N°2.7z se conserva en dist/tp2. Su identidad marrón de Aroma Café y sus componentes Bootstrap pertenecen al proyecto anterior; no se reemplazan por el cobalto del TP 3. integracion.css aporta solo navegación entre entregas, foco, adaptación móvil y presentación de las fichas nuevas dentro del portafolio heredado. La portada del TP 3 usa su componente project-link para enlazar las tres páginas anteriores y añade acceso al CV y al portafolio original actualizado. Bootstrap está vendorizado en dist/tp2/vendor.
