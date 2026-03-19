---
permalink: publish/limitations
---
> [!tip] Los miembros de nuestra increíble comunidad han ideado soluciones alternativas para algunas de estas limitaciones. Para más información, por favor visite nuestro hilo [Publish Resources](https://forum.obsidian.md/t/obsidian-publish-resources/74582) en los foros de Obsidian.

## Complementos de la comunidad

Obsidian Publish tiene soporte mínimo para los [[Complementos de la comunidad]].

Los complementos que generan salida en Markdown sin procesar, como el complemento Waypoint, son compatibles con Publish porque no requieren la aplicación para renderizar sus datos.

En cambio, un complemento que requiere un bloque de código del complemento para renderizar, como Dataview o Fantasy Statblocks, no funcionará de forma predeterminada en Publish.

## Gráfico

Publish ofrece personalización básica de colores para su vista de gráfico usando CSS. Puedes modificar los colores de los nodos en tu archivo `publish.css` utilizando las [variables CSS de la Vista de Gráfico](https://docs.obsidian.md/Reference/CSS+variables/Plugins/Graph).

Ten en cuenta que el gráfico publicado no admite las opciones completas de ordenación y visualización disponibles en la [[Vista de grafo]] de la aplicación.

## Archivos multimedia

Obsidian Publish no está optimizado para transmitir vídeo o archivos de audio grandes. Incluimos algunas mejores prácticas para manejar tus [[Archivos multimedia|archivos multimedia]] en estos documentos.

Para mejorar la experiencia de tus visitantes, recomendamos que utilices un servicio de alojamiento de vídeo, como YouTube o Vimeo.

Puedes subir archivos de **hasta 50mb** de tamaño a tu sitio Publish. ^publish-media-limit

## PDFs

En dispositivos móviles, tabletas y computadoras con pantallas pequeñas, puedes encontrar problemas donde un PDF incrustado no se carga o solo se muestra la primera página. Esto se debe a limitaciones del renderizador de PDF en dispositivos móviles.

Para contenido dirigido a usuarios móviles, sugerimos proporcionar enlaces a PDFs alojados externamente o incluir enlaces internos que permitan a los usuarios descargar el PDF directamente en su dispositivo.

## Búsqueda

Publish tiene soporte básico para buscar texto sin formato en el contenido publicado. La preferencia para los resultados de búsqueda se da a:

- Nombres de archivo
- Alias
- Nombres de encabezados

Después de buscar coincidencias en los elementos anteriores, la búsqueda incluirá el texto sin formato de las notas publicadas.

Para mejorar la capacidad de búsqueda de tu sitio publicado, se recomienda usar nombres de archivo descriptivos, incorporar múltiples alias y seleccionar nombres de encabezados que reflejen con precisión el contenido.

Además, Publish actualmente no admite la función de [[Búsqueda#Incrustar resultados de búsqueda en una nota|resultados de búsqueda incrustados]] de la aplicación.
