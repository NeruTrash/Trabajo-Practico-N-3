# Verificación del 29 de octubre de 2026

## Pruebas de lógica

`node --test tests/logic.test.cjs`: 5 pruebas aprobadas, 0 fallos. Búsqueda normalizada y parcial; filtros combinados con límites inclusivos; límites enteros de stock; cálculo por cantidades; validación de números del juego.

## Pruebas de navegador

Playwright con Google Chrome instalado, navegador sin interfaz. El plugin Browser no está disponible en esta sesión. Escritorio de 1440 × 1050 y móvil de 390 × 844. Resultado: 23 verificaciones aprobadas.

1. Portafolio, identidad y navegación.
2. Búsqueda sin acentos ni mayúsculas.
3. Filtros combinados y límite inclusivo.
4. Validación de rango de precios inválido.
5. Sin resultados y recuperación con limpiar filtros.
6. Modal de detalles y cierre con Escape.
7. Carrito agrupado por producto y total.
8. Límite máximo de stock.
9. Vaciado y deshacer.
10. Persistencia tras recargar.
11. Restar y eliminar productos.
12. Producto sin stock deshabilitado.
13. Restauración de filtros mediante URL.
14. Error HTTP al cargar JSON y recuperación con reintento.
15. Entrada de juego vacía o fuera de rango sin gastar intentos.
16. Pista de mayor y rechazo de número repetido.
17. Victoria en el último intento.
18. Derrota, revelación y bloqueo del envío.
19. Cambio de dificultad, rango e historial reiniciados.
20. Tres pantallas móviles sin desborde horizontal.
21. Apertura y cierre de modal en celular.
22. Respeto de la preferencia de movimiento reducido.
23. Sin excepciones JavaScript durante los recorridos.

La prueba del juego fija el generador aleatorio solo en el navegador de prueba para comprobar victorias y derrotas de manera reproducible. El código entregado conserva Math.random sin reemplazos.

## Auditoría estática

Auditor premium en modo estricto: 0 errores, 0 advertencias. No reemplaza las pruebas de comportamiento. Se revisaron las capturas de escritorio y móvil.

## Límites de la entrega

No hay backend de pedidos, pagos reales ni inventario compartido. El carrito pertenece a un solo navegador. Se recibió Trabajo Práctico N°2.7z y se integraron los ejercicios en el portafolio anterior, conservando sus páginas. El enlace de Sites es privado y no se debe asumir que el docente puede abrirlo. Las ilustraciones y datos de productos son de ejemplo.

## Segunda revisión contra la rúbrica

Se volvieron a ejecutar las cinco pruebas de lógica y 17 verificaciones en navegador con Chrome, todas aprobadas. Se comprobaron explícitamente búsquedas al principio, medio y final, la suma de dos mouse y un teclado por 52.000 ARS, el stock bloqueado desde tarjeta, modal y carrito, las tres dificultades, victoria en último intento, derrota y la bitácora ampliada. También se revisaron navegación por teclado del filtro nativo, vistas móviles y ausencia de excepciones JavaScript. El Word y el PDF revisados incluyen bitácoras y enlaces de demostración. Consultar REVISION-CONSIGNA.md para el resultado de la integración de TP 2 y el requisito pendiente de acceso externo.

## Pruebas de integración del TP 2

Siete comprobaciones adicionales aprobadas en Chrome: las tres fichas originales y el CV permanecen, las dos nuevas fichas tienen enlaces correctos, el catálogo funciona desde el portafolio anterior, el acordeón heredado funciona con Bootstrap local, CV/formulario/café están accesibles, seis páginas no desbordan en un ancho de 390px y no hay recursos locales faltantes ni excepciones JavaScript. Se repitieron las 17 comprobaciones del TP 3 después de integrar, todas aprobadas. Las fotos y fuentes remotas de Aroma Café son recursos heredados y su disponibilidad depende de sus proveedores.
