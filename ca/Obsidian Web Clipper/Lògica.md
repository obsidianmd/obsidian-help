---
permalink: web-clipper/logic
description: 'Utilitzeu condicionals, bucles i assignació de variables a les plantilles de Web Clipper.'
---
[[Introducció a Obsidian Web Clipper|Web Clipper]] admet lògica de plantilles per a condicionals, bucles i assignació de variables. Aquesta sintaxi està inspirada en els llenguatges de plantilles [Twig](https://twig.symfony.com/) i [Liquid](https://shopify.github.io/liquid/).


> [!warning] Requereix la darrera versió
> Les funcionalitats de lògica requereixen Obsidian Web Clipper 1.0.0 que encara no ha estat aprovat a totes les botigues d'extensions.

## Condicionals

Utilitza `{% if %}` per incloure contingut condicionalment basat en variables o expressions.

```twig
{% if author %}
Author: {{author}}
{% endif %}
```

Utilitza `{% else %}` per proporcionar contingut alternatiu, i `{% elseif %}` per encadenar múltiples condicions:

```twig
{% if status == "published" %}
Live article
{% elseif status == "draft" %}
Draft article
{% else %}
Unknown status
{% endif %}
```

### Operadors de comparació

S'admeten els operadors de comparació següents:

| Operador | Descripció |
|----------|-------------|
| `==` | Igual a |
| `!=` | Diferent de |
| `>` | Més gran que |
| `<` | Més petit que |
| `>=` | Més gran o igual que |
| `<=` | Més petit o igual que |
| `contains` | Comprova si una cadena conté una subcadena, o si una matriu conté un valor |

Exemples:
- `{% if title == "Home" %}` — igualtat de cadenes
- `{% if price >= 100 %}` — comparació numèrica
- `{% if title contains "Review" %}` — comprovació de subcadena
- `{% if tags contains "important" %}` — pertinença a una matriu

### Operadors lògics

Combina condicions utilitzant operadors lògics:

| Operador | Alternativa | Descripció                             |
| -------- | ----------- | -------------------------------------- |
| `and`    | `&&`        | Ambdues condicions han de ser certes   |
| `or`     | \|\|        | Almenys una condició ha de ser certa   |
| `not`    | `!`         | Nega una condició                      |

Exemples:
- `{% if author and published %}` — ambdues han d'existir
- `{% if draft or archived %}` — qualsevol de les dues condicions
- `{% if not hidden %}` — negació
- `{% if (premium or featured) and published %}` — condicions agrupades

### Veracitat

Quan una variable s'utilitza sense operador de comparació, s'avalua per la seva "veracitat":

- `false`, `null`, `undefined`, cadena buida `""` i `0` es consideren **falsos**.
- Les matrius buides `[]` es consideren **falses**.
- Tota la resta es considera **cert**.

```twig
{% if content %}
Has content
{% endif %}
```

## Assignar una variable

Utilitza `{% set %}` per crear o modificar variables dins de la teva plantilla:

```twig
{% set slug = title|lower|replace:" ":"-" %}
File: {{slug}}.md
```

Les variables es poden assignar a:
- Altres variables: `{% set name = author %}`
- Literals: `{% set count = 5 %}` o `{% set label = "Draft" %}`
- Expressions amb filtres: `{% set excerpt = content|truncate:100 %}`
- Resultats de selectors: `{% set comments = selector:.comment %}`

Les variables assignades amb `{% set %}` es poden utilitzar en la lògica de plantilla posterior i en la sortida `{{variable}}`.

## Valors alternatius

Utilitza l'operador `??` per proporcionar valors alternatius quan una variable és buida o no està definida:

```twig
{{title ?? "Untitled"}}
```

Si `title` és buit, no està definit o és fals, s'utilitzarà el valor alternatiu `"Untitled"`.

Això és un abreujament de la instrucció `if` equivalent:

```twig
{% if title %}{{title}}{% else %}Untitled{% endif %}
```

### Encadenar valors alternatius

Pots encadenar múltiples valors alternatius:

```twig
{{title ?? headline ?? "No title"}}
```

Això utilitzarà `title` si està disponible, en cas contrari `headline`, en cas contrari la cadena `"No title"`.

### Amb filtres

Els filtres s'associen amb més força que `??`, de manera que els filtres s'apliquen abans de la comprovació del valor alternatiu:

```twig
{{title|upper ?? "UNTITLED"}}
```

Això aplica `upper` a `title` primer i després recorre al valor alternatiu `"UNTITLED"` si el resultat és buit. Per aplicar filtres al valor alternatiu, utilitza parèntesis o expressions separades:

```twig
{{title ?? "Untitled"|lower}}
```

Això utilitzarà `title` si està disponible, en cas contrari aplicarà `lower` al valor alternatiu, resultant en `"untitled"`.

## Bucles

Utilitza `{% for %}` per iterar sobre matrius:

```twig
{% for item in schema:author %}
- {{item.name}}
{% endfor %}
```

### Fonts del bucle

Pots iterar sobre:
- Matrius d'esquema: `{% for item in schema:author %}`
- Resultats de selectors: `{% for comment in selector:.comment %}`
- Variables assignades anteriorment: `{% set items = selector:.item %}{% for item in items %}`

### Variables de bucle

Dins d'un bucle, tens accés a un objecte `loop` amb les propietats següents:

| Variable | Descripció |
|----------|-------------|
| `loop.index` | Iteració actual (començant per 1) |
| `loop.index0` | Iteració actual (començant per 0) |
| `loop.first` | `true` si és la primera iteració |
| `loop.last` | `true` si és la darrera iteració |
| `loop.length` | Nombre total d'elements |

```twig
{% for tag in tags %}
{{loop.index}}. {{tag}}
{% if loop.last %} (end of list){% endif %}
{% endfor %}
```

Per compatibilitat cap enrere, també pots utilitzar `item_index` (on `item` és el nom de la teva variable iteradora) per obtenir la posició començant per 0:

```twig
{% for tag in tags %}
{{tag_index}}. {{tag}}
{% endfor %}
```

### Accedir a elements de matriu per índex

Utilitza la notació de claudàtors per accedir a elements de matriu per índex:

```twig
{{items[0]}}
{{items[loop.index0]}}
```

Això és útil quan necessites accedir a elements de múltiples matrius en paral·lel:

```twig
{% set transcripts = selector:.transcript-text %}
{% set timestamps = selector:.timestamp %}

{% for line in transcripts %}
{{timestamps[loop.index0]}} - {{line}}
{% endfor %}
```

La notació de claudàtors també funciona amb propietats d'objectes:

```twig
{{user["name"]}}
{{data["my-key"]}}
```

### Bucles imbricats

Els bucles es poden imbricar per a estructures de dades complexes:

```twig
{% for section in sections %}
## {{section.title}}
{% for item in section.items %}
- {{item}}
{% endfor %}
{% endfor %}
```

## Combinar lògica

Els condicionals i els bucles es poden combinar:

```twig
{% for item in items %}
{% if item.active %}
- {{item.name}}
{% endif %}
{% endfor %}
```

## Ordre d'avaluació

La lògica de plantilla es processa en l'ordre següent:

1. **Lògica de plantilla** — `{% if %}`, `{% for %}`, `{% set %}` i `{{variables}}` s'avaluen primer
2. **Variables de sol·licitud** — Les [[Variables#Variables de sol·licitud|Variables de sol·licitud]] com `{{"summarize this"|prompt}}` s'envien a l'Intèrpret després que la lògica de plantilla s'hagi completat

Això significa que pots utilitzar la lògica de plantilla per construir sol·licituds dinàmicament, però els resultats de les sol·licituds no estan disponibles per utilitzar-se en condicionals o bucles.
