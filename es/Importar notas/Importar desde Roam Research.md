---
permalink: import/roam
cssclasses:
  - soft-embed
---
Obsidian te permite migrar fácilmente tus notas desde Roam Research usando el [[Importador|complemento Importador]]. Esto convierte tus datos de Roam a archivos Markdown duraderos que puedes usar con Obsidian y muchas otras aplicaciones.

## Exportar tus datos de Roam Research

1. En Roam Research, haz clic en **Más acciones** ( `•••` ) en la esquina superior derecha, y luego selecciona **Export All**.
   
   ![[Roam-exporting.png#interface]]
2. En **Export Format**, selecciona "JSON", y luego selecciona **Export All** para descargar un archivo con tus notas.

## Importar tus datos de Roam Research en Obsidian

Necesitarás el complemento oficial [[Importador]] de Obsidian, que puedes [instalar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Abre **[[Configuración]]**.
2. Ve a **Complementos creados por la comunidad** e [instala Importador](obsidian://show-plugin?id=obsidian-importer).
3. Activa el complemento Importador.
4. Abre el complemento **Importador** usando la paleta de comandos o el icono del menú de cinta.
5. En **Formato de archivo** elige **Roam Research (.json).**
6. Selecciona la ubicación de tu archivo `.json`.
7. En **Carpeta de salida**, elige dónde deben importarse tus archivos.
8. Si también deseas importar adjuntos, activa **Descargar todos los adjuntos**.
9. Selecciona **Importar** para revisar la plantilla generada y previsualizar ejemplos de tus páginas.
10. Selecciona **Importar** de nuevo y espera a que la importación termine.

![[Roam-Importer-importing.png]]

## Plantillas

Usa [[Plantillas del importador|plantillas del Importador]] para configurar completamente cómo se importan tus datos de Roam Research.

![[Plantillas del importador#Variables]]
