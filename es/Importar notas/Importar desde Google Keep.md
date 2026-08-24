---
permalink: import/google-keep
cssclasses:
  - soft-embed
---
Obsidian te permite migrar fácilmente tus notas desde Google Keep usando el [[Importador|complemento Importador]]. Esto convierte tus datos de Google Keep a archivos Markdown duraderos que puedes usar con Obsidian y muchas otras aplicaciones.

## Exportar tus datos de Google Keep

1. Ve a [Google Takeout](https://takeout.google.com/settings/takeout) e inicia sesión en tu cuenta de Google.
2. Haz clic en **Deseleccionar todo** en la esquina superior derecha.
3. Desplázate hacia abajo y selecciona **Keep** de la lista.
4. Desplázate hasta el final de la página y haz clic en **Siguiente paso**.
5. En la siguiente pantalla, haz clic en el botón **Crear exportación**.
6. Descarga el archivo `.zip` una vez que esté disponible.

## Importar tus datos de Google Keep a Obsidian

Necesitarás el complemento oficial de Obsidian [[Importador]], que puedes [instalar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Abre **[[Configuración]]**.
2. Ve a **Complementos creados por la comunidad** e [instala Importador](obsidian://show-plugin?id=obsidian-importer).
3. Activa el complemento Importador.
4. Abre el complemento **Importador** usando la paleta de comandos o el icono del menú de cinta.
5. En **Formato de archivo** elige **Google Keep (.zip).**
6. Selecciona la ubicación de tu archivo `.zip`.
7. Selecciona **Importar** para revisar la plantilla generada y previsualizar ejemplos de tus notas.
8. Selecciona **Importar** de nuevo y espera a que la importación finalice.

## Limitaciones

- Todas las listas de verificación se importarán como elementos de nivel superior porque Google Keep no exporta información de sangría.
- Los recordatorios y las asignaciones de usuarios en las notas no se importarán porque estas características no son soportadas por Obsidian.


## Plantillas

Usa [[Plantillas del importador|plantillas del Importador]] para configurar completamente cómo se importan tus datos de Google Keep.

![[Plantillas del importador#Variables]]

Adicionalmente, Google Keep proporciona variables para el texto original, listas, etiquetas, adjuntos, colores, datos de compartición, tareas, anotaciones y estado de la nota.

| Variable          | Descripción                                              |
| ----------------- | -------------------------------------------------------- |
| `{{isArchived}}`  | Si la nota está archivada.                               |
| `{{isPinned}}`    | Si la nota está fijada.                                  |
| `{{isTrashed}}`   | Si la nota está en la papelera.                          |
| `{{color}}`       | Nombre del color en Google Keep.                         |
| `{{labels}}`      | Arreglo de registros de etiquetas.                       |
| `{{sharees}}`     | Arreglo de personas con quienes se compartió la nota.    |
| `{{annotations}}` | Arreglo de registros de anotaciones de enlaces.          |

El título original de Google Keep está disponible como `{{source.title}}`. La variable compartida `{{title}}` contiene el título de la nota importada.
