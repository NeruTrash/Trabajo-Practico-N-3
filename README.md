# TP 3 de Frontend web

**Estudiante:** Maximo Aceituno  
**Institución:** Instituto Superior Manuel Belgrano  
**Materia:** Práctica Profesionalizante I · 2026

## Abrir el proyecto

Se necesita Node.js instalado. Dentro de esta carpeta ejecutar:

```sh
node server.cjs
```

Abrir http://127.0.0.1:4173 en un navegador. Para detener el servidor, presionar Ctrl+C. También se puede servir la carpeta `dist` con Live Server de Visual Studio Code. No abrir el HTML directamente con doble clic: el navegador bloquea la lectura de JSON desde archivos locales.

## Contenido

- `dist/index.html`: portafolio y bitácora de historias de usuario.
- `dist/catalogo.html`: catálogo con búsqueda sin distinción de acentos o mayúsculas, filtros por categoría, marca y precio, detalle modal y carrito con stock.
- `dist/productos.json`: seis productos y sus datos de ejemplo.
- `dist/juego.html`: juego de adivinar el número con tres dificultades, pistas, historial y reinicio.
- `dist/estilos.css`: estilos externos compartidos y diseño adaptable.
- `dist/assets`: ilustraciones vectoriales locales de los productos.
- `tests/logic.test.cjs`: pruebas de búsqueda, filtros, stock, total y validación del juego.

No se requieren paquetes externos para ejecutar el proyecto. El carrito usa almacenamiento del navegador; no hay cobros ni pedidos reales. Todos los precios, marcas y stocks son ejemplos para el ejercicio.

## Pruebas

```sh
node --test tests/logic.test.cjs
```

Los flujos de navegador adicionales se describen en `VERIFICACION.md` después de ejecutarlos. Para publicar en cualquier hosting estático, subir el contenido de `dist` conservando las rutas relativas.

## Portafolio del TP 2 integrado y entrega

Se incorporó el material del archivo Trabajo Práctico N°2.7z. La carpeta dist/tp2 conserva el formulario gamer, Aroma Café, la guía de estilo, el CV y el portafolio anterior. En dist/tp2/portafolio.html se agregaron TecnoStore y Adiviná el número, con historia de usuario, responsable individual, bitácora y enlace de apertura. La portada principal reúne los cinco proyectos y enlaza el CV y el portafolio actualizado.

Se corrigieron rutas de CSS y JavaScript, se normalizaron las etiquetas generales de los HTML y se incluyó Bootstrap 5.3.7 localmente para conservar los componentes heredados. La fotografía de perfil faltante se reemplazó por las iniciales del autor. Las fotografías y las fuentes externas de Aroma Café conservan sus enlaces originales y requieren conexión a Internet.

La demostración en Sites permanece privada. Para que el docente pueda abrirla se necesita habilitar su acceso o elegir un alojamiento público. El ZIP también permite ejecutar todo localmente. Entregar el PDF en Aula Virtual, según la consigna. El trabajo y la bitácora son individuales, como en el material del TP 2.

## Referencias

Consigna de TP 3 proporcionada por la materia. Documentación de referencia: MDN Web Docs sobre HTML, CSS, JavaScript, Fetch, dialog y localStorage: https://developer.mozilla.org/es/
