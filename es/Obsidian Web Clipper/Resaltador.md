---
permalink: web-clipper/highlight
aliases:
  - Resaltar páginas web
---
[[Introducción a Obsidian Web Clipper|Web Clipper]] te permite resaltar texto en páginas web y seleccionar los elementos que deseas guardar en Obsidian. Los resaltados se guardan para que puedas verlos cuando vuelvas a una página.

Los resaltados pueden guardarse en Obsidian usando la extensión. Puedes definir las opciones del resaltador en los ajustes de la extensión.

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/f2674kdaot?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>

## Usar el resaltador

El resaltador puede usarse en páginas web en vivo o en el [[Lector|Lector]]. En la vista del Lector, crear una selección de texto te da la opción de resaltarla.

También puedes añadir selecciones automáticamente a tus resaltados activando el resaltador:

- ![[lucide-highlighter.svg#icon]] **Icono del resaltador** en el panel de la extensión o la barra de herramientas del Lector.
- **Atajo de teclado** personalizable en los ajustes de la extensión.
- **Menú contextual** haciendo clic derecho en la página web que estás visitando.

Una vez que el resaltador está activado, cualquier texto, imagen y elemento seleccionado se añadirá a tus resaltados. Todos los métodos anteriores también te permiten salir del resaltador.

## Añadir resaltados a notas

Hay tres opciones para cómo los resaltados pueden insertarse en tus notas recortadas:

- **Resaltar el contenido de la página** — añade los resaltados directamente al texto con la [[Markdown con formato Obsidian|sintaxis]] `==resaltado==`.
- **Reemplazar el contenido de la página** — devuelve una lista de resaltados, sin nada del contenido de la página.
- **No hacer nada** — devuelve el contenido original sin resaltados.
 
Estas opciones modifican la [[Variables|variable]] `{{content}}` en tu plantilla. También puedes añadir resaltados directamente a tu plantilla usando la variable `{{highlights}}`, por ejemplo:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```

## Ver y buscar resaltados

Todos los resaltados que crees pueden verse en tu página de Resaltados. Puedes abrir esta página yendo a **Ajustes** → **Resaltador**.

## Exportar resaltados

Los resaltados pueden exportarse a un archivo `.json`, ya sea en la página de Ajustes o en la página de Resaltados.
