---
permalink: import/samsung-notes
cssclasses:
  - soft-embed
---
Obsidian te permite migrar tus notas desde Samsung Notes usando el [[Importador|complemento Importer]]. Esto convierte tus notas a archivos Markdown duraderos que puedes usar con Obsidian y muchas otras aplicaciones.

## Exportar tus notas desde Samsung Notes

Samsung Notes guarda cada nota como un archivo de Samsung Notes (`.sdocx`).

1. Abre Samsung Notes en tu teléfono o tableta.
2. Mantén pulsada una nota, luego selecciona todas las notas que quieras exportar.
3. Toca **Guardar como archivo**, luego elige **Archivo de Samsung Notes**.
4. Elige una carpeta y toca **Guardar**.
5. Mueve los archivos `.sdocx` al dispositivo donde uses Obsidian, por ejemplo con un cable USB, Quick Share o un servicio en la nube.

Si tienes muchos archivos, puedes ponerlos en un archivo `.zip` e importar eso en su lugar. Samsung Notes no incluye sus carpetas en los archivos que guarda, pero el Importador mantiene las carpetas dentro del archivo `.zip`. Para mantener tus notas organizadas, guarda las notas de cada carpeta de Samsung Notes en una carpeta con el mismo nombre antes de comprimirlas.

## Importar tus datos de Samsung Notes a Obsidian

Necesitarás el complemento oficial de Obsidian [[Importador]], que puedes [instalar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Abre **[[Configuración]]**.
2. Ve a **Complementos creados por la comunidad** e [instala Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activa el complemento Importer.
4. Abre el complemento **Importer** usando la paleta de comandos o el icono de la barra de herramientas.
5. En **Formato de archivo**, elige **Samsung Notes (.sdocx)**.
6. Selecciona tus archivos `.sdocx`, o un archivo `.zip` que los contenga.
7. Selecciona **Importar** para revisar la plantilla generada y previsualizar ejemplos de tus notas.
8. Selecciona **Importar** nuevamente y espera a que la importación termine.

## Limitaciones

- La escritura a mano y las formas dibujadas se importan como una imagen SVG al final de la nota. Los trazos mantienen su forma y color, pero no el ancho variable de un lápiz sensible a la presión. Las formas y líneas se importan en negro.
- Los cuadros de texto, las imágenes colocadas en la página y los PDFs anotados aún no se importan.
- Los elementos de lista de verificación se importan como no marcados.
- Los colores de texto, fuentes y tamaños de fuente no se conservan.
- Desbloquea las notas bloqueadas en Samsung Notes antes de exportarlas.

## Plantillas

Usa [[Plantillas del importador|plantillas del importador]] para configurar completamente cómo se importan tus datos de Samsung Notes.

![[Plantillas del importador#Variables]]
