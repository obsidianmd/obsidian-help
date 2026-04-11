---
permalink: web-clipper/capture
---
Una vez que instales la extensión de navegador [[Introducción a Obsidian Web Clipper|Web Clipper]], puedes acceder a ella de varias formas, dependiendo de tu navegador:

1. El icono de Obsidian en la barra de herramientas de tu navegador.
2. Atajos de teclado, para activar la extensión desde tu teclado.
3. Menú contextual, haciendo clic derecho en la página web que estás visitando.

Para guardar una página en Obsidian haz clic en el botón **Añadir a Obsidian**.

## Capturar una página

Cuando abres la extensión, Web Clipper extrae datos de la página web actual siguiendo los ajustes de tu [[Obsidian Web Clipper/Plantillas|plantilla]]. Puedes crear tus propias plantillas y personalizar la salida usando [[variables]] y [[Filtros|filtros]].

De forma predeterminada, Web Clipper intenta extraer inteligentemente solo el contenido principal del artículo, excluyendo otros elementos de la página. Sin embargo, puedes anular este comportamiento de las siguientes maneras:

- Si hay una plantilla personalizada presente, usa tu plantilla.
- Si hay una selección presente, usa la selección. Puedes usar `Ctrl/Cmd+A` para seleccionar toda la página.
- Si hay algún [[Resaltador|resaltado]] presente, usa los resaltados.

## Descargar imágenes

Las imágenes no se descargan automáticamente cuando usas Web Clipper. En su lugar, las imágenes enlazan a su URL basada en la web. Esto ahorra espacio en tu bóveda, pero significa que las imágenes no serán accesibles sin conexión, o si la URL deja de funcionar.

Puedes descargar imágenes de cualquier archivo en Obsidian usando el [[Paleta de comandos|comando]] llamado **Descargar archivos adjuntos**. Este comando también puede asignarse a un atajo de teclado en Obsidian.

## Atajos de teclado

Web Clipper incluye atajos de teclado que puedes usar para agilizar tu flujo de trabajo. Para cambiar las asignaciones de teclas ve a **Ajustes de Web Clipper** → **General** y sigue las instrucciones para tu navegador. Las asignaciones pueden cambiarse en todos los navegadores excepto Safari, que no admite la edición de atajos de teclado.

| Acción                     | macOS          | Windows/Linux   |
| -------------------------- | -------------- | --------------- |
| Abrir clipper              | `Cmd+Shift+O`  | `Ctrl+Shift+O`  |
| Recorte rápido             | `Opt+Shift+O`  | `Alt+Shift+O`   |
| Alternar resaltador        | `Opt+Shift+H`  | `Alt+Shift+H`   |
| Alternar lector            | `Opt+Shift+R`  | `Alt+Shift+R`   |

## Funcionalidad de la interfaz

La interfaz de Web Clipper se divide en cuatro secciones:

1. **Encabezado** donde puedes cambiar plantillas, activar el [[Resaltador|resaltado]], el [[Lector|modo de lectura]] y acceder a los ajustes.
2. **Propiedades** muestra los [[Propiedades|metadatos]] extraídos de la página que se guardarán como [[Propiedades]] en Obsidian.
3. **Contenido de la nota** que se guardará en Obsidian.
4. **Pie de página** permite seleccionar la bóveda y la carpeta, y añadir a Obsidian.

La funcionalidad del encabezado incluye:

- ![[lucide-chevrons-up-down.svg#icon]] Selector de **Plantilla** para usar las [[Obsidian Web Clipper/Plantillas|plantillas]] guardadas añadidas en los ajustes de la extensión.
- ![[lucide-more-horizontal.svg#icon]] Botón **Más** para mostrar las variables de la página que puedes usar en las plantillas.
- ![[lucide-highlighter.svg#icon]] Botón **Resaltador** para activar el [[Resaltador|resaltado]].
- ![[lucide-book-icon.svg#icon]] Botón **Lector** para activar la [[Lector|vista de lectura]].
- ![[lucide-picture-in-picture-2.svg#icon]] Botón **Incrustar** para mover Web Clipper del emergente a la página.
- ![[lucide-settings.svg#icon]] Botón **Ajustes** para abrir los ajustes de la extensión.

La funcionalidad del pie de página incluye:

- Botón **Añadir a Obsidian** para guardar datos en Obsidian.
- Desplegable de **Bóveda** para cambiar entre las bóvedas guardadas añadidas en los ajustes de Web Clipper.
- Campo de **Carpeta** para definir en qué carpeta guardar.
- **Intérprete** para ejecutar [[Intérprete|indicaciones en lenguaje natural]] sobre la página.
