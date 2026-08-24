---
permalink: import/textbundle
cssclasses:
  - soft-embed
---
Obsidian te permite importar fácilmente archivos [Textbundle](https://textbundle.org/) utilizando el [[Importador|complemento Importador]] oficial.

Si estás importando notas desde una aplicación específica, es posible que primero quieras revisar la lista de aplicaciones compatibles con el [[Importador|complemento Importador]] para verificar si existe un convertidor específico que preserve mejor los datos que estás migrando.

El formato Textbundle agrupa texto Markdown y todas las imágenes referenciadas en un solo archivo, proporcionando una forma más fluida de sacar contenido de una aplicación aislada. La exportación a Textbundle es compatible con [muchas aplicaciones](https://textbundle.org/), incluyendo Agenda, Craft, Taio, Ulysses, Zettlr y más.

## Importar archivos Textbundle a Obsidian

Necesitarás el complemento oficial de Obsidian [[Importador]], que puedes [instalar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Abre **[[Configuración]]**.
2. Ve a **Complementos creados por la comunidad** e [instala Importador](obsidian://show-plugin?id=obsidian-importer).
3. Activa el complemento Importador.
4. Abre el complemento **Importador** usando la paleta de comandos o el icono del menú de cinta.
5. En **Formato de archivo** elige **Textbundle (.textbundle, .textpack).**
6. Selecciona la ubicación de tus archivos Textbundle o Textpack. Los archivos zip también son compatibles.
7. Selecciona **Importar** para revisar la plantilla generada y previsualizar ejemplos de tus notas.
8. Selecciona **Importar** de nuevo y espera a que la importación finalice.

## Personalizar las notas importadas

Antes de que comience la importación, el Importador muestra una vista previa generada a partir de los archivos Textbundle seleccionados. Puedes editar la plantilla generada o elegir una plantilla Markdown de tu bóveda. Consulta [[Plantillas del Importador]].

## Solución de problemas

### No se seleccionan archivos para importar

La importación de Textbundle solo puede importar un archivo Textbundle a la vez, y solo en dispositivos Mac. En su lugar, puedes comprimir todos los archivos Textbundle que desees importar en un solo archivo .zip e importar este en cualquier dispositivo.

## Plantillas

Usa [[Plantillas del Importador|Plantillas del Importador]] para configurar completamente cómo se importan tus datos.

![[Plantillas del Importador#Variables]]
