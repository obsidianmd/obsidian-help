---
permalink: plugins/web-viewer
---
El visor web es un [[Complementos principales|complemento principal]] que te permite abrir enlaces externos dentro de Obsidian en escritorio. Esto te permite leer el contenido de enlaces sin salir de la aplicación y facilita la multitarea en proyectos de investigación web.

Los enlaces externos se abren como una [[Pestañas|pestaña]] que puedes reorganizar, dividir y abrir en una [[Ventanas emergentes|ventana emergente]]. Cualquier tarjeta de página web incrustada en archivos de [[Canvas]] puede abrirse como pestañas del visor web.

El visor web no es un reemplazo para tu navegador principal. El visor web proporciona una forma rápida de acceder a páginas web para investigación dentro de Obsidian. Sin embargo, no ofrece la funcionalidad completa, los controles de seguridad ni la extensibilidad de un navegador dedicado.

## Vista de lectura

Haz clic en el icono de gafas para ver una versión en texto sin formato de la página web. Esta función limpia el contenido utilizando la biblioteca Readability de Mozilla desarrollada para Firefox.

## Guardar a la bóveda

Haz clic en el icono de más acciones para guardar una página web en tu bóveda. Puedes personalizar la ubicación de guardado de la página yendo a **[[Configuración]]** → **Visor web**.

## Bloqueo de anuncios

El visor web bloquea anuncios de forma predeterminada. Puedes personalizar las reglas del bloqueador de anuncios añadiendo listas como [Easylist](https://easylist.to/).

## Seguridad

Si usas complementos de Obsidian de terceros, te recomendamos usar tu navegador principal para tareas sensibles y sitios web protegidos con contraseña en lugar del visor web.

El visor web está basado en la misma característica de [Chromium](https://developer.chrome.com/docs/apps/reference/webviewTag) que te permite incrustar páginas web en [[Canvas]]. El visor web ha sido [auditado de forma independiente](https://obsidian.md/es/blog/cure53-second-client-audit/) para verificar que ha sido implementado de manera segura.

Los complementos de Obsidian [[Seguridad de complementos#Capacidades de los complementos|no están aislados en un sandbox]] y tienen un control profundo sobre la aplicación. Este diseño permite una funcionalidad poderosa pero también conlleva compromisos de seguridad. Mientras Obsidian está en ejecución, los complementos de terceros tienen acceso completo a las cookies en el visor web.
