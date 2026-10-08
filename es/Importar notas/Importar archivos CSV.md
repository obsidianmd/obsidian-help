---
permalink: import/csv
cssclasses:
  - soft-embed
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
7. Selecciona **Importar** para configurar cómo los datos de tu archivo CSV se convertirán en notas con [[Propiedades]].
8. Selecciona **Continuar** para revisar la plantilla generada y previsualizar ejemplos de tus filas.
9. Selecciona **Importar** y espera a que la importación finalice.

## Configurar cómo se importan los campos CSV

En el paso de configuración de campos, puedes elegir cómo se importan los datos. Importer genera una plantilla a partir de los encabezados del CSV, usa la primera columna como nombre inicial de la nota y crea una propiedad para cada columna.

## Plantillas

Usa [[Plantillas del importador|plantillas de Importer]] para configurar completamente cómo se importan tus datos.

Cada columna del CSV está disponible usando su encabezado. Si una columna no tiene encabezado, Importer usa el nombre de columna generado.

Usa la notación con corchetes para que los espacios y la puntuación se manejen de forma segura:

```liquid
{{source["Project name"]}}
{{source["Price ($)"]|yaml}}
```

![[Plantillas del importador#Variables]]
