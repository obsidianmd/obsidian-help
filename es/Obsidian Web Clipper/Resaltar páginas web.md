---
permalink: web-clipper/highlight
---
[[Introducción a Obsidian Web Clipper|Web Clipper]] te permite resaltar texto en páginas web y seleccionar los elementos que deseas guardar en Obsidian. Tus resaltados se guardan, por lo que puedes revisarlos cuando vuelvas a una página.

Los resaltados pueden ser [[Recortar páginas web|capturados]] y guardados en Obsidian cuando abres la extensión.

## Activar el resaltador

Puedes activar el resaltado de varias maneras, dependiendo de tu navegador:

- El icono del resaltador en el panel de la extensión.
- Atajos de teclado, para activar la extensión desde tu teclado.
- Menú contextual, haciendo clic derecho en la página web que estás visitando.

Una vez que el resaltado está activado, puedes seleccionar texto, imágenes y elementos que desees resaltar.

## Ajustes del resaltador

Puedes cambiar el comportamiento del resaltador accediendo a los ajustes de Web Clipper. Aquí también puedes exportar tus resaltados a un archivo `.json`.

Hay tres opciones para que los resaltados se inserten en tu nota recortada a través de la [[Variables|variable]] `{{content}}`:

- **Resaltar el contenido de la página** — añade los resaltados directamente al texto con la [[Obsidian Flavored Markdown|sintaxis]] `==resaltado==`.
- **Reemplazar el contenido de la página** — devuelve una lista de resaltados, sin nada del contenido de la página.
- **No hacer nada** — devuelve el contenido original sin resaltados.

Puedes añadir resaltados directamente a tu plantilla usando la variable `{{highlights}}`, por ejemplo:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```
