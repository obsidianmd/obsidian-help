---
permalink: import/csv
---
Obsidian te permite importar datos desde archivos CSV utilizando el [[Importador|complemento Importador]] oficial. Esto es útil si tienes datos tabulares almacenados en aplicaciones como Excel, Google Sheets, Numbers, Notion o Airtable.

La importación de CSV genera archivos Markdown para cada fila y un archivo [[Introducción a Bases|Base]] que muestra todos los archivos importados como una tabla.

Si estás importando notas desde una aplicación específica, es posible que desees revisar primero la lista de aplicaciones soportadas por el [[Importador|complemento Importador]] para verificar si existe un conversor específico que preserve mejor los datos que estás migrando.

## Crear notas a partir de datos CSV en Obsidian

Necesitarás el complemento oficial de Obsidian [[Importador]], que puedes [instalar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Abre **[[Configuración]]**.
2. Ve a **Complementos creados por la comunidad** e [instala Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activa el complemento Importer.
4. Abre el complemento **Importer** usando la paleta de comandos o el icono del menú de cinta.
5. En **Formato de archivo** elige **CSV (.csv).**
6. Selecciona la ubicación de tu archivo CSV.
7. Haz clic en **Importar** para configurar cómo los datos de tu archivo CSV se convertirán en notas con [[Propiedades]].
8. Haz clic en **Continuar** y espera hasta que la importación se complete.
9. ¡Listo!

## Configurar cómo se importan los campos CSV

En el segundo paso de la importación CSV, puedes elegir cómo se importan los datos usando una plantilla.

Cada columna en tu archivo CSV se le asigna una variable llamada `{{column_name}}` que representa el nombre del encabezado en tu archivo. Puedes usar esta variable para definir el título, la ubicación, el contenido y las [[Propiedades|propiedades]] de la nota.
