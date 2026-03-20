---
permalink: web-clipper/logic
description: Usa condicionales, bucles y asignación de variables en las plantillas de Web Clipper.
---
[[Introducción a Obsidian Web Clipper|Web Clipper]] soporta lógica de plantillas para condicionales, bucles y asignación de variables. Esta sintaxis está inspirada en los lenguajes de plantillas [Twig](https://twig.symfony.com/) y [Liquid](https://shopify.github.io/liquid/).


> [!warning] Requiere la última versión
> Las funciones de lógica requieren Obsidian Web Clipper 1.0.0, que aún no ha sido aprobado en todas las tiendas de extensiones.

## Condicionales

Usa `{% if %}` para incluir contenido condicionalmente basado en variables o expresiones.

```twig
{% if author %}
Author: {{author}}
{% endif %}
```

Usa `{% else %}` para proporcionar contenido alternativo, y `{% elseif %}` para encadenar múltiples condiciones:

```twig
{% if status == "published" %}
Live article
{% elseif status == "draft" %}
Draft article
{% else %}
Unknown status
{% endif %}
```

### Operadores de comparación

Se soportan los siguientes operadores de comparación:

| Operador | Descripción |
|----------|-------------|
| `==` | Igual a |
| `!=` | Diferente de |
| `>` | Mayor que |
| `<` | Menor que |
| `>=` | Mayor o igual que |
| `<=` | Menor o igual que |
| `contains` | Comprueba si una cadena contiene una subcadena, o si un arreglo contiene un valor |

Ejemplos:
- `{% if title == "Home" %}` — igualdad de cadenas
- `{% if price >= 100 %}` — comparación numérica
- `{% if title contains "Review" %}` — comprobación de subcadena
- `{% if tags contains "important" %}` — pertenencia a un arreglo

### Operadores lógicos

Combina condiciones usando operadores lógicos:

| Operador | Alternativa | Descripción                              |
| -------- | ----------- | ---------------------------------------- |
| `and`    | `&&`        | Ambas condiciones deben ser verdaderas   |
| `or`     | \|\|        | Al menos una condición debe ser verdadera |
| `not`    | `!`         | Niega una condición                      |

Ejemplos:
- `{% if author and published %}` — ambas deben existir
- `{% if draft or archived %}` — cualquiera de las condiciones
- `{% if not hidden %}` — negación
- `{% if (premium or featured) and published %}` — condiciones agrupadas

### Evaluación de verdad

Cuando una variable se usa sin un operador de comparación, se evalúa su "veracidad":

- `false`, `null`, `undefined`, cadena vacía `""` y `0` se consideran **falsos**.
- Los arreglos vacíos `[]` se consideran **falsos**.
- Todo lo demás es **verdadero**.

```twig
{% if content %}
Has content
{% endif %}
```

## Asignar una variable

Usa `{% set %}` para crear o modificar variables dentro de tu plantilla:

```twig
{% set slug = title|lower|replace:" ":"-" %}
File: {{slug}}.md
```

Las variables pueden establecerse como:
- Otras variables: `{% set name = author %}`
- Literales: `{% set count = 5 %}` o `{% set label = "Draft" %}`
- Expresiones con filtros: `{% set excerpt = content|truncate:100 %}`
- Resultados de selectores: `{% set comments = selector:.comment %}`

Las variables establecidas con `{% set %}` pueden usarse en la lógica de plantilla posterior y en la salida `{{variable}}`.

## Valores alternativos

Usa el operador `??` para proporcionar valores alternativos cuando una variable está vacía o no definida:

```twig
{{title ?? "Untitled"}}
```

Si `title` está vacío, no definido o es falso, se usará el valor alternativo `"Untitled"`.

Esto es una forma abreviada de la sentencia `if` equivalente:

```twig
{% if title %}{{title}}{% else %}Untitled{% endif %}
```

### Encadenar valores alternativos

Puedes encadenar múltiples valores alternativos:

```twig
{{title ?? headline ?? "No title"}}
```

Esto usará `title` si está disponible, de lo contrario `headline`, de lo contrario la cadena `"No title"`.

### Con filtros

Los filtros se enlazan con mayor prioridad que `??`, por lo que los filtros se aplican antes de la comprobación del valor alternativo:

```twig
{{title|upper ?? "UNTITLED"}}
```

Esto aplica `upper` a `title` primero, luego recurre a `"UNTITLED"` si el resultado está vacío. Para aplicar filtros al valor alternativo, usa paréntesis o expresiones separadas:

```twig
{{title ?? "Untitled"|lower}}
```

Esto usará `title` si está disponible, de lo contrario aplicará `lower` al valor alternativo, resultando en `"untitled"`.

## Bucles

Usa `{% for %}` para iterar sobre arreglos:

```twig
{% for item in schema:author %}
- {{item.name}}
{% endfor %}
```

### Fuentes de bucle

Puedes iterar sobre:
- Arreglos de esquema: `{% for item in schema:author %}`
- Resultados de selectores: `{% for comment in selector:.comment %}`
- Variables establecidas anteriormente: `{% set items = selector:.item %}{% for item in items %}`

### Variables de bucle

Dentro de un bucle, tienes acceso a un objeto `loop` con las siguientes propiedades:

| Variable | Descripción |
|----------|-------------|
| `loop.index` | Iteración actual (índice desde 1) |
| `loop.index0` | Iteración actual (índice desde 0) |
| `loop.first` | `true` si es la primera iteración |
| `loop.last` | `true` si es la última iteración |
| `loop.length` | Número total de elementos |

```twig
{% for tag in tags %}
{{loop.index}}. {{tag}}
{% if loop.last %} (end of list){% endif %}
{% endfor %}
```

Por compatibilidad con versiones anteriores, también puedes usar `item_index` (donde `item` es el nombre de tu variable iteradora) para obtener la posición con índice desde 0:

```twig
{% for tag in tags %}
{{tag_index}}. {{tag}}
{% endfor %}
```

### Acceder a elementos de un arreglo por índice

Usa la notación de corchetes para acceder a elementos de un arreglo por índice:

```twig
{{items[0]}}
{{items[loop.index0]}}
```

Esto es útil cuando necesitas acceder a elementos de múltiples arreglos en paralelo:

```twig
{% set transcripts = selector:.transcript-text %}
{% set timestamps = selector:.timestamp %}

{% for line in transcripts %}
{{timestamps[loop.index0]}} - {{line}}
{% endfor %}
```

La notación de corchetes también funciona con propiedades de objetos:

```twig
{{user["name"]}}
{{data["my-key"]}}
```

### Bucles anidados

Los bucles pueden anidarse para estructuras de datos complejas:

```twig
{% for section in sections %}
## {{section.title}}
{% for item in section.items %}
- {{item}}
{% endfor %}
{% endfor %}
```

## Combinar lógica

Los condicionales y bucles pueden combinarse:

```twig
{% for item in items %}
{% if item.active %}
- {{item.name}}
{% endif %}
{% endfor %}
```

## Orden de evaluación

La lógica de plantilla se procesa en el siguiente orden:

1. **Lógica de plantilla** — `{% if %}`, `{% for %}`, `{% set %}` y `{{variables}}` se evalúan primero
2. **Variables de prompt** — Las [[Variables#Variables de prompt|variables de prompt]] como `{{"summarize this"|prompt}}` se envían al Intérprete después de que la lógica de plantilla se completa

Esto significa que puedes usar la lógica de plantilla para construir prompts dinámicamente, pero los resultados de los prompts no están disponibles para usarse en condicionales o bucles.
