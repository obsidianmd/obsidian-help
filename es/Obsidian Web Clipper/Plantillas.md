---
permalink: web-clipper/templates
description: Aprende a crear plantillas que capturen y organicen automáticamente los metadatos de páginas web con Web Clipper.
---
[[Introducción a Obsidian Web Clipper|Web Clipper]] te permite crear plantillas que capturan y organizan automáticamente los metadatos de las páginas web. Puedes encontrar plantillas de ejemplo en el [repositorio clipper-templates](https://github.com/kepano/clipper-templates).

## Crear o editar una plantilla

Para **crear** una plantilla, ve a los ajustes de Web Clipper y haz clic en el botón **New template** en la barra lateral. También puedes **duplicar** una plantilla en el menú de acciones **More** en la esquina superior derecha.

Para **editar** una plantilla, elige una plantilla de la barra lateral. Tus cambios se guardarán automáticamente.

Las plantillas utilizan [[Variables]] y [[Filtros]], que te permiten personalizar cómo se guardará el contenido.

## Importar y exportar plantillas de Web Clipper

Para importar una plantilla:

1. Abre la extensión y haz clic en el icono de engranaje de **[[Configuración]]**.
2. Ve a cualquier plantilla en la lista.
3. Haz clic en **Import** en la esquina superior derecha o arrastra y suelta tu(s) archivo(s) de plantilla `.json` en cualquier parte del área de plantillas.

Para exportar una plantilla, haz clic en **Export** en la esquina superior derecha. Esto descargará el archivo `.json` de la plantilla. También puedes copiar los datos de la plantilla a tu portapapeles a través del menú **More**.

## Ajustes de plantilla

### Comportamiento

Define cómo se añadirá el contenido de Web Clipper a Obsidian:

- **Crear una nueva nota**
- **Añadir a una nota existente**, en la parte superior o inferior
- **Añadir a la nota diaria**, en la parte superior o inferior (requiere que el complemento de [[Notas diarias]] esté activo)

### Activar automáticamente una plantilla

Los activadores de plantilla te permiten seleccionar automáticamente una plantilla basándose en la URL de la página actual o en los datos de [schema.org](https://schema.org/). Puedes definir múltiples reglas para cada plantilla, separadas por una nueva línea.

La primera coincidencia en tu lista de plantillas determina qué plantilla se utiliza. Puedes arrastrar las plantillas hacia arriba y hacia abajo en los ajustes de Web Clipper para cambiar el orden en el que se evalúan las plantillas.

#### Coincidencia simple de URL

La coincidencia simple activa una plantilla si la URL de la página actual *comienza con* el patrón dado. Por ejemplo:

- `https://obsidian.md` coincidirá con cualquier URL que comience con este texto.

#### Coincidencia con expresiones regulares

Puedes activar plantillas basándote en patrones de URL más complejos usando expresiones regulares. Encierra tu patrón de expresión regular entre barras (`/`). Recuerda escapar los caracteres especiales en los patrones de expresión regular (como `.` y `/`) con una barra invertida (`\`). Por ejemplo:

- `/^https:\/\/www\.imdb\.com\/title\/tt\d+\/reference\/?$/` coincidirá con cualquier página de referencia de IMDB.

#### Coincidencia con Schema.org

Puedes activar plantillas basándote en los datos de [schema.org](https://schema.org/) presentes en la página. Usa el prefijo `schema:` seguido de la clave de esquema que deseas coincidir. Opcionalmente puedes especificar un valor esperado. Por ejemplo:

- `schema:@Recipe` coincidirá con páginas donde el tipo de esquema sea "Recipe".
- `schema:@Recipe.name` coincidirá con páginas donde `@Recipe.name` esté presente.
- `schema:@Recipe.name=Cookie` coincidirá con páginas donde `@Recipe.name` sea "Cookie".

Los valores de schema.org también pueden usarse para [[Variables#Variables Schema.org|prellenar datos en plantillas]].

### Contexto del intérprete

Cuando el [[Interpretar páginas web|Intérprete]] está habilitado, puedes usar [[Variables#Variables de prompt|variables de prompt]] para extraer contenido de la página con lenguaje natural. Para cada plantilla puedes definir el [[Interpretar páginas web#Contexto|contexto]] al que el Intérprete tiene acceso.
