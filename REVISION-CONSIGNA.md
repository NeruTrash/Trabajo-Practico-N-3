# Segunda revisión contra la consigna del TP 3

Fecha: 29 de octubre de 2026. Fuente: documento de consigna proporcionado por la materia. Esta revisión distingue los requisitos técnicos implementados de los pendientes de presentación; no atribuye una nota.

| Bloque de rúbrica | Requisito | Estado y evidencia |
|---|---|---|
| Catálogo, 20% | Cuadrícula con imagen, nombre y precio | Cumple: seis tarjetas e ilustraciones SVG locales. |
| Catálogo | Detalle en modal | Cumple: nombre, descripción, categoría, marca, stock y precio. |
| Catálogo | Datos desde JSON | Cumple: fetch de productos.json, con manejo de error y reintento. |
| Buscador, 20% | Filtrar por nombre | Cumple: búsqueda parcial local. |
| Buscador | Ignorar acentos y mayúsculas, principio, medio y final | Cumple: normalización NFD, minúsculas e includes. |
| Buscador | Atributo, categoría y rango de precios | Cumple: marca, categoría, mínimo y máximo combinables. |
| Carrito, 20% | Listar y calcular total | Cumple: filas, subtotales y suma general. |
| Carrito | Multiplicadores en vez de filas repetidas | Cumple: cantidad por id de producto. |
| Carrito | No superar stock | Cumple: validación y botones bloqueados en todas las entradas. |
| Minijuego, 20% | Funcionar | Cumple: pistas, victoria, derrota, validación e historial. |
| Minijuego | Dificultades | Cumple: tres niveles con rangos e intentos diferentes. |
| Minijuego | CSS en archivo externo importado | Cumple: estilos.css vinculado con link. |
| Portafolio, 20% | Incluir cada proyecto | Cumple: los cinco proyectos se muestran en la portada y los dos nuevos están incorporados en tp2/portafolio.html. |
| Portafolio | Bitácora por proyecto según historias de usuario | Completada: secciones de catálogo, juego y portafolio, con necesidad, desarrollo, responsable y criterio de verificación. No se inventan colaboradores. |
| Portafolio | Armado entre integrantes en Canva, Google Docs u otra herramienta | Presentación individual en HTML; la consigna fija máximo cuatro integrantes y no fija mínimo. No equivale a acreditar colaboración grupal si existió un equipo real. |
| Desarrollo obligatorio | Agregar al portafolio comenzado en TP 2 | CUMPLE: se recibió Trabajo Práctico N°2.7z y se agregaron los dos ejercicios en dist/tp2/portafolio.html, conservando los trabajos anteriores. |
| Entrega | Documento PDF en Aula Virtual | PDF generado y disponible. La carga a Aula Virtual corresponde al estudiante. |
| Evaluación externa | Acceso a los proyectos | PENDIENTE para el enlace online: Sites permanece privado para su propietario. El ZIP se puede ejecutar localmente. |

## Correcciones de esta revisión

- Se amplió la bitácora: historias reales en formato de necesidad del usuario, implementación, responsable individual y verificación, agrupadas por proyecto.
- Se añadieron enlaces clicables de los tres proyectos a Word y PDF, indicando el carácter privado de la demostración y la alternativa local.
- Se corrigió la documentación para reconocer la integración con TP 2 como requisito explícito, no opcional.
- Se actualizó el ZIP con los documentos y el código revisados.

## Pendientes que no se deben ocultar

La integración al portafolio del TP 2 ya está realizada. El enlace de demostración necesita un acceso autorizado para el docente o un alojamiento público elegido por el estudiante. No se modificó la privacidad sin indicación del usuario. No se puede garantizar la puntuación ni la aceptación del trabajo individual por el docente.

## Integración confirmada después de recibir el TP 2

Se conservan el formulario gamer, Aroma Café, la guía de estilo, el CV y el portafolio original. Se añadieron dos fichas en el portafolio anterior con historias, rol individual, bitácora y enlaces. La portada principal también incluye los proyectos previos. Se corrigieron rutas locales, se incluyó Bootstrap y se normalizaron los documentos HTML. El archivo comprimido original permanece intacto.

Siete comprobaciones adicionales de integración aprobadas: permanencia de proyectos y CV, enlaces correctos, catálogo abierto desde TP 2, acordeón con Bootstrap local, apertura de las páginas heredadas, seis páginas sin desbordes móviles y ausencia de recursos locales faltantes o excepciones JavaScript. Se volvieron a ejecutar las 17 verificaciones del TP 3 tras integrar.
