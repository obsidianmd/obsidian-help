---
permalink: import/html
cssclasses:
  - soft-embed
---
Obsidian te permite importar fácilmente archivos HTML individuales y carpetas enteras de archivos HTML usando el [[Importador|complemento Importador]] oficial. Esto es útil si deseas guardar sitios web completos en formato [[Markdown con formato Obsidian|Markdown]], o si quieres importar datos de una herramienta que exporta a HTML.

Si estás importando notas de una aplicación específica, es posible que desees revisar primero la lista de aplicaciones compatibles con el [[Importador|complemento Importador]] para verificar si existe un convertidor específico que preserve mejor los datos que estás migrando.

## Importar datos HTML a Obsidian

Necesitarás el complemento oficial [[Importador]] de Obsidian, que puedes [instalar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Abre **[[Configuración]]**.
2. Ve a **Complementos creados por la comunidad** e [instala Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activa el complemento Importer.
4. Abre el complemento **Importer** usando la paleta de comandos o el icono del menú de cinta.
5. En **Formato de archivo** elige **HTML (.html).**
6. Selecciona la ubicación de tus archivos o carpetas HTML.
7. Selecciona **Importar** para revisar la plantilla generada y previsualizar ejemplos de tus archivos.
8. Selecciona **Importar** de nuevo y espera a que la importación termine.

### Ajustes de importación

- **Límite de tamaño de adjuntos**: Omitir la importación de adjuntos más grandes que el tamaño especificado.
- **Tamaño mínimo de imagen**: Omitir la importación de imágenes más pequeñas que el tamaño especificado en cualquiera de sus dimensiones. Puede usarse para omitir iconos y logotipos.

## Plantillas

Usa [[Plantillas del importador|plantillas de Importer]] para configurar completamente cómo se importan tus datos.

![[Plantillas del importador#Variables]]

Además, las importaciones HTML proporcionan muchas de las mismas variables que [[Introducción a Obsidian Web Clipper|Web Clipper]]:

| Variable | Descripción |
| --- | --- |
| `{{author}}` | Autor de la página. |
| `{{contentHtml}}` | Contenido extraído de la página en formato HTML. |
| `{{description}}` | Descripción o extracto de la página. |
| `{{domain}}` | Dominio de la página. |
| `{{favicon}}` | URL del favicon. |
| `{{fullHtml}}` | HTML sin procesar de la página completa. |
| `{{image}}` | URL de la imagen para compartir en redes sociales. |
| `{{language}}` | Idioma de la página. |
| `{{published}}` | Fecha de publicación, que se puede formatear con el filtro `date`. |
| `{{site}}` | Nombre del sitio o editor. |
| `{{url}}` | URL de origen encontrada en el documento importado, cuando está disponible. |
| `{{words}}` | Conteo de palabras. |
