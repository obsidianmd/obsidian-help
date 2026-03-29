---
permalink: web-clipper/logic
description: 'Gebruik voorwaardelijke instructies, lussen en variabeletoewijzingen in Web Clipper-sjablonen.'
---
[[Introductie tot Obsidian Web Clipper|Web Clipper]] ondersteunt sjabloonlogica voor voorwaarden, lussen en variabeletoewijzing. Deze syntaxis is geïnspireerd op de sjabloontalen [Twig](https://twig.symfony.com/) en [Liquid](https://shopify.github.io/liquid/).


> [!warning] Vereist de nieuwste versie
> Logicafuncties vereisen Obsidian Web Clipper 1.0.0, die nog niet op alle extensiewinkels is goedgekeurd.

## Voorwaarden

Gebruik `{% if %}` om inhoud voorwaardelijk op te nemen op basis van variabelen of expressies.

```twig
{% if author %}
Author: {{author}}
{% endif %}
```

Gebruik `{% else %}` om terugvalinhoud te bieden, en `{% elseif %}` om meerdere voorwaarden te koppelen:

```twig
{% if status == "published" %}
Live article
{% elseif status == "draft" %}
Draft article
{% else %}
Unknown status
{% endif %}
```

### Vergelijkingsoperatoren

De volgende vergelijkingsoperatoren worden ondersteund:

| Operator | Beschrijving |
|----------|-------------|
| `==` | Gelijk aan |
| `!=` | Niet gelijk aan |
| `>` | Groter dan |
| `<` | Kleiner dan |
| `>=` | Groter dan of gelijk aan |
| `<=` | Kleiner dan of gelijk aan |
| `contains` | Controleer of een tekenreeks een substring bevat, of een array een waarde bevat |

Voorbeelden:
- `{% if title == "Home" %}` — tekenreeksgelijkheid
- `{% if price >= 100 %}` — numerieke vergelijking
- `{% if title contains "Review" %}` — substringcontrole
- `{% if tags contains "important" %}` — arraylidmaatschap

### Logische operatoren

Combineer voorwaarden met logische operatoren:

| Operator | Alternatief | Beschrijving                              |
| -------- | ----------- | ----------------------------------------- |
| `and`    | `&&`        | Beide voorwaarden moeten waar zijn        |
| `or`     | \|\|        | Minstens één voorwaarde moet waar zijn    |
| `not`    | `!`         | Keert een voorwaarde om                   |

Voorbeelden:
- `{% if author and published %}` — beide moeten bestaan
- `{% if draft or archived %}` — één van beide voorwaarden
- `{% if not hidden %}` — ontkenning
- `{% if (premium or featured) and published %}` — gegroepeerde voorwaarden

### Waarheidsgetrouwheid

Wanneer een variabele zonder vergelijkingsoperator wordt gebruikt, wordt deze geëvalueerd op "waarheidsgetrouwheid":

- `false`, `null`, `undefined`, lege tekenreeks `""` en `0` worden als **onwaar** beschouwd.
- Lege arrays `[]` worden als **onwaar** beschouwd.
- Al het andere is **waar**.

```twig
{% if content %}
Has content
{% endif %}
```

## Een variabele toewijzen

Gebruik `{% set %}` om variabelen binnen je sjabloon aan te maken of te wijzigen:

```twig
{% set slug = title|lower|replace:" ":"-" %}
File: {{slug}}.md
```

Variabelen kunnen worden ingesteld op:
- Andere variabelen: `{% set name = author %}`
- Letterlijke waarden: `{% set count = 5 %}` of `{% set label = "Draft" %}`
- Expressies met filters: `{% set excerpt = content|truncate:100 %}`
- Selectorresultaten: `{% set comments = selector:.comment %}`

Variabelen die met `{% set %}` zijn ingesteld, kunnen worden gebruikt in daaropvolgende sjabloonlogica en in `{{variable}}`-uitvoer.

## Terugvalwaarden

Gebruik de `??`-operator om terugvalwaarden te bieden wanneer een variabele leeg of niet gedefinieerd is:

```twig
{{title ?? "Untitled"}}
```

Als `title` leeg, niet gedefinieerd of onwaar is, wordt de terugvalwaarde `"Untitled"` in plaats daarvan gebruikt.

Dit is een verkorte schrijfwijze voor de equivalente `if`-instructie:

```twig
{% if title %}{{title}}{% else %}Untitled{% endif %}
```

### Terugvalwaarden koppelen

Je kunt meerdere terugvalwaarden koppelen:

```twig
{{title ?? headline ?? "No title"}}
```

Dit gebruikt `title` indien beschikbaar, anders `headline`, anders de tekenreeks `"No title"`.

### Met filters

Filters binden sterker dan `??`, dus filters worden toegepast vóór de terugvalcontrole:

```twig
{{title|upper ?? "UNTITLED"}}
```

Dit past `upper` eerst toe op `title`, en valt dan terug op `"UNTITLED"` als het resultaat leeg is. Om filters op de terugvalwaarde toe te passen, gebruik je haakjes of afzonderlijke expressies:

```twig
{{title ?? "Untitled"|lower}}
```

Dit gebruikt `title` indien beschikbaar, anders wordt `lower` op de terugvalwaarde toegepast, wat resulteert in `"untitled"`.

## Lussen

Gebruik `{% for %}` om over arrays te itereren:

```twig
{% for item in schema:author %}
- {{item.name}}
{% endfor %}
```

### Lusbronnen

Je kunt itereren over:
- Schema-arrays: `{% for item in schema:author %}`
- Selectorresultaten: `{% for comment in selector:.comment %}`
- Eerder ingestelde variabelen: `{% set items = selector:.item %}{% for item in items %}`

### Lusvariabelen

Binnen een lus heb je toegang tot een `loop`-object met de volgende eigenschappen:

| Variabele | Beschrijving |
|----------|-------------|
| `loop.index` | Huidige iteratie (1-geïndexeerd) |
| `loop.index0` | Huidige iteratie (0-geïndexeerd) |
| `loop.first` | `true` bij eerste iteratie |
| `loop.last` | `true` bij laatste iteratie |
| `loop.length` | Totaal aantal items |

```twig
{% for tag in tags %}
{{loop.index}}. {{tag}}
{% if loop.last %} (end of list){% endif %}
{% endfor %}
```

Voor achterwaartse compatibiliteit kun je ook `item_index` gebruiken (waarbij `item` de naam van je iteratorvariabele is) om de 0-geïndexeerde positie op te halen:

```twig
{% for tag in tags %}
{{tag_index}}. {{tag}}
{% endfor %}
```

### Array-items benaderen via index

Gebruik haakjesnotatie om array-elementen via index te benaderen:

```twig
{{items[0]}}
{{items[loop.index0]}}
```

Dit is handig wanneer je items uit meerdere arrays parallel moet benaderen:

```twig
{% set transcripts = selector:.transcript-text %}
{% set timestamps = selector:.timestamp %}

{% for line in transcripts %}
{{timestamps[loop.index0]}} - {{line}}
{% endfor %}
```

Haakjesnotatie werkt ook met objecteigenschappen:

```twig
{{user["name"]}}
{{data["my-key"]}}
```

### Geneste lussen

Lussen kunnen worden genest voor complexe datastructuren:

```twig
{% for section in sections %}
## {{section.title}}
{% for item in section.items %}
- {{item}}
{% endfor %}
{% endfor %}
```

## Logica combineren

Voorwaarden en lussen kunnen worden gecombineerd:

```twig
{% for item in items %}
{% if item.active %}
- {{item.name}}
{% endif %}
{% endfor %}
```

## Evaluatievolgorde

Sjabloonlogica wordt in de volgende volgorde verwerkt:

1. **Sjabloonlogica** — `{% if %}`, `{% for %}`, `{% set %}` en `{{variabelen}}` worden als eerste geëvalueerd
2. **Promptvariabelen** — [[Variabelen#Promptvariabelen|Promptvariabelen]] zoals `{{"summarize this"|prompt}}` worden naar de Interpreter gestuurd nadat de sjabloonlogica is voltooid

Dit betekent dat je sjabloonlogica kunt gebruiken om prompts dynamisch samen te stellen, maar promptresultaten zijn niet beschikbaar voor gebruik in voorwaarden of lussen.
