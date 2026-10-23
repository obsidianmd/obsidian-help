---
permalink: import/templates
description: 'Personaliza el nombre de la nota, las propiedades y el contenido creados por Importer.'
---
El [[Importador]] te permite definir plantillas que controlan cómo se importan tus notas desde otras aplicaciones. Esto significa que puedes modificar el título, las propiedades y el contenido de las notas que importas.

## Editar la plantilla de importación

Selecciona **Editar** encima de la vista previa para editar la plantilla predeterminada. Puedes editar:

- El nombre de la nota mostrado como título en línea.
- Las propiedades al inicio de la nota.
- El contenido Markdown de la nota.

Selecciona **Guardar** para regresar a la vista previa. El Importador recuerda una plantilla en línea editada para futuras importaciones que usen el mismo formato.

Alternativamente, puedes cargar una plantilla desde un archivo Markdown en la bóveda actual.

## Vista previa de resultados

La vista previa muestra hasta diez muestras de los datos que seleccionaste. Usa los botones de flecha para moverte entre muestras. Los cambios en los ajustes de importación y la plantilla actualizan la vista previa antes de que se añada algo a tu bóveda.

Algunos adjuntos, elementos remotos y referencias cruzadas entre notas no pueden resolverse completamente hasta que se ejecute la importación. En esos casos, la vista previa puede conservar el enlace fuente o mostrar un marcador de posición.

## Sintaxis de plantillas

Las plantillas del Importador usan una sintaxis que consiste en variables, [[Filtros]] y [[Lógica]]. Utiliza la misma sintaxis [Knap](https://github.com/obsidianmd/knap) que [[Introducción a Obsidian Web Clipper|Web Clipper]].

Inserta variables con dobles llaves, como `{{title}}`, `{{content}}` o `{{date}}`. Las variables pueden usarse en el nombre de la nota, las propiedades y el contenido.

Puedes modificar variables usando [[Filtros]]. Por ejemplo, para cambiar el formato de fecha usando `{{date|date:"YYYY-MM-DD"}}`. Usa [[Lógica]] para condicionales más avanzados, bucles y asignación de variables.

## Variables

Las siguientes variables están disponibles para usar en cualquier plantilla del Importador:

| Variable         | Descripción                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------------ |
| `{{body}}`       | Cuerpo Markdown sin propiedades (sin metadatos iniciales).                                                   |
| `{{content}}`    | Markdown completo antes de que se aplique la plantilla seleccionada.                                         |
| `{{ctime}}`      | Hora de creación de la fuente como marca de tiempo ISO 8601; vacío cuando no está disponible.                |
| `{{date}}`       | Fecha y hora actual cuando se renderiza la plantilla, como marca de tiempo ISO 8601.                         |
| `{{importer}}`   | ID del Importador, como `keep`, `html` o `notion-api`.                                                       |
| `{{folder}}`     | Carpeta padre final relativa a la bóveda. Vacío cuando la nota está en la raíz de la bóveda.                |
| `{{mtime}}`      | Hora de modificación de la fuente como marca de tiempo ISO 8601; vacío cuando no está disponible.            |
| `{{noteName}}`   | Nombre final resuelto de la nota, después de eliminar caracteres inválidos y añadir sufijos para duplicados. |
| `{{path}}`       | Ruta final relativa a la bóveda, incluyendo la extensión `.md`.                                              |
| `{{properties}}` | Objeto que contiene las propiedades de los metadatos iniciales.                                               |
| `{{source}}`     | Objeto que contiene propiedades generadas y valores específicos de la fuente.                                 |
| `{{sourceId}}`   | Identificador estable de la fuente cuando el importador proporciona uno; de lo contrario, vacío.             |
| `{{time}}`       | Alias para `{{date}}`.                                                                                       |
| `{{title}}`      | Título original de la nota antes de la sanitización y deduplicación.                                         |

## Valores de fuente para propiedades

Para los formatos de importación que soportan [[Propiedades]], los valores de la fuente también están disponibles como variables de nivel superior por conveniencia.

Si un valor de fuente tiene el mismo nombre que una variable compartida, accede a él a través de `{{source}}`. Por ejemplo, si tu fuente de importación tiene una propiedad llamada `content`, está disponible como `{{source.content}}`, mientras que `{{content}}` permanece como la variable predeterminada del Importador.

Usa notación de corchetes cuando un nombre de campo contenga espacios, puntuación u otros caracteres especiales:

```twig
{{source["Project: status"]}}
```

## Plantilla de ejemplo

Aquí tienes un ejemplo de una plantilla usando variables y [[Filtros|filtros]]:

```twig
---
created: {{ctime | date:"YYYY-MM-DD"}}
modified: {{mtime | date:"YYYY-MM-DD"}}
source: {{importer}}
---
# {{title}}

{{body}}
```

Puedes añadir datos a una nota condicionalmente usando [[Lógica]]:

```twig
{% if tags %}
## Etiquetas
{% for tag in tags %}
- {{tag}}
{% endfor %}
{% endif %}
```
