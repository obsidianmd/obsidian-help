---
permalink: web-clipper/logic
description: 'Brug betingelser, løkker og variabeltildeling i Web Clipper-skabeloner.'
---
[[Introduktion til Obsidian Web Clipper|Web Clipper]] understøtter skabelonlogik til betingelser, løkker og variabeltildeling. Denne syntaks er inspireret af skabelonsprogene [Twig](https://twig.symfony.com/) og [Liquid](https://shopify.github.io/liquid/).


> [!warning] Kræver den nyeste version
> Logikfunktioner kræver Obsidian Web Clipper 1.0.0, som endnu ikke er godkendt i alle udvidelsesbutikker.

## Betingelser

Brug `{% if %}` til betinget at inkludere indhold baseret på variabler eller udtryk.

```twig
{% if author %}
Author: {{author}}
{% endif %}
```

Brug `{% else %}` til at angive alternativt indhold, og `{% elseif %}` til at kæde flere betingelser sammen:

```twig
{% if status == "published" %}
Live article
{% elseif status == "draft" %}
Draft article
{% else %}
Unknown status
{% endif %}
```

### Sammenligningsoperatorer

Følgende sammenligningsoperatorer understøttes:

| Operator | Beskrivelse |
|----------|-------------|
| `==` | Lig med |
| `!=` | Ikke lig med |
| `>` | Større end |
| `<` | Mindre end |
| `>=` | Større end eller lig med |
| `<=` | Mindre end eller lig med |
| `contains` | Tjek om en streng indeholder en delstreng, eller et array indeholder en værdi |

Eksempler:
- `{% if title == "Home" %}` — strenglighed
- `{% if price >= 100 %}` — numerisk sammenligning
- `{% if title contains "Review" %}` — delstrengtjek
- `{% if tags contains "important" %}` — arraymedlemskab

### Logiske operatorer

Kombiner betingelser med logiske operatorer:

| Operator | Alternativ  | Beskrivelse                           |
| -------- | ----------- | ------------------------------------- |
| `and`    | `&&`        | Begge betingelser skal være sande     |
| `or`     | \|\|        | Mindst én betingelse skal være sand   |
| `not`    | `!`         | Negerer en betingelse                 |

Eksempler:
- `{% if author and published %}` — begge skal eksistere
- `{% if draft or archived %}` — én af betingelserne
- `{% if not hidden %}` — negering
- `{% if (premium or featured) and published %}` — grupperede betingelser

### Sandhedsværdi

Når en variabel bruges uden en sammenligningsoperator, evalueres den for "sandhedsværdi":

- `false`, `null`, `undefined`, tom streng `""` og `0` betragtes som **falsk**.
- Tomme arrays `[]` betragtes som **falsk**.
- Alt andet er **sandt**.

```twig
{% if content %}
Has content
{% endif %}
```

## Tildel en variabel

Brug `{% set %}` til at oprette eller ændre variabler i din skabelon:

```twig
{% set slug = title|lower|replace:" ":"-" %}
File: {{slug}}.md
```

Variabler kan sættes til:
- Andre variabler: `{% set name = author %}`
- Literaler: `{% set count = 5 %}` eller `{% set label = "Draft" %}`
- Udtryk med filtre: `{% set excerpt = content|truncate:100 %}`
- Selectorresultater: `{% set comments = selector:.comment %}`

Variabler sat med `{% set %}` kan bruges i efterfølgende skabelonlogik og i `{{variable}}`-output.

## Reserveværdier

Brug `??`-operatoren til at angive reserveværdier, når en variabel er tom eller udefineret:

```twig
{{title ?? "Untitled"}}
```

Hvis `title` er tom, udefineret eller falsk, bruges reserveværdien `"Untitled"` i stedet.

Dette er en forkortelse for den tilsvarende `if`-sætning:

```twig
{% if title %}{{title}}{% else %}Untitled{% endif %}
```

### Kæde reserveværdier

Du kan kæde flere reserveværdier:

```twig
{{title ?? headline ?? "No title"}}
```

Dette bruger `title` hvis tilgængelig, ellers `headline`, ellers strengen `"No title"`.

### Med filtre

Filtre binder tættere end `??`, så filtre anvendes før reserveværditjekket:

```twig
{{title|upper ?? "UNTITLED"}}
```

Dette anvender `upper` på `title` først, og falder derefter tilbage til `"UNTITLED"` hvis resultatet er tomt. For at anvende filtre på reserveværdien, brug parenteser eller separate udtryk:

```twig
{{title ?? "Untitled"|lower}}
```

Dette bruger `title` hvis tilgængelig, ellers anvender `lower` på reserveværdien, hvilket resulterer i `"untitled"`.

## Løkker

Brug `{% for %}` til at iterere over arrays:

```twig
{% for item in schema:author %}
- {{item.name}}
{% endfor %}
```

### Løkkekilder

Du kan iterere over:
- Schema-arrays: `{% for item in schema:author %}`
- Selectorresultater: `{% for comment in selector:.comment %}`
- Variabler sat tidligere: `{% set items = selector:.item %}{% for item in items %}`

### Løkkevariabler

Inde i en løkke har du adgang til et `loop`-objekt med følgende egenskaber:

| Variabel | Beskrivelse |
|----------|-------------|
| `loop.index` | Aktuel iteration (1-indekseret) |
| `loop.index0` | Aktuel iteration (0-indekseret) |
| `loop.first` | `true` hvis første iteration |
| `loop.last` | `true` hvis sidste iteration |
| `loop.length` | Samlet antal elementer |

```twig
{% for tag in tags %}
{{loop.index}}. {{tag}}
{% if loop.last %} (end of list){% endif %}
{% endfor %}
```

For bagudkompatibilitet kan du også bruge `item_index` (hvor `item` er dit iteratorvariabelnavn) til at få den 0-indekserede position:

```twig
{% for tag in tags %}
{{tag_index}}. {{tag}}
{% endfor %}
```

### Adgang til arrayelementer via indeks

Brug klammenotation til at tilgå arrayelementer via indeks:

```twig
{{items[0]}}
{{items[loop.index0]}}
```

Dette er nyttigt, når du skal tilgå elementer fra flere arrays parallelt:

```twig
{% set transcripts = selector:.transcript-text %}
{% set timestamps = selector:.timestamp %}

{% for line in transcripts %}
{{timestamps[loop.index0]}} - {{line}}
{% endfor %}
```

Klammenotation fungerer også med objektegenskaber:

```twig
{{user["name"]}}
{{data["my-key"]}}
```

### Indlejrede løkker

Løkker kan indlejres for komplekse datastrukturer:

```twig
{% for section in sections %}
## {{section.title}}
{% for item in section.items %}
- {{item}}
{% endfor %}
{% endfor %}
```

## Kombiner logik

Betingelser og løkker kan kombineres:

```twig
{% for item in items %}
{% if item.active %}
- {{item.name}}
{% endif %}
{% endfor %}
```

## Evalueringsrækkefølge

Skabelonlogik behandles i følgende rækkefølge:

1. **Skabelonlogik** — `{% if %}`, `{% for %}`, `{% set %}` og `{{variabler}}` evalueres først
2. **Promptvariabler** — [[Variabler#Promptvariabler|Promptvariabler]] som `{{"summarize this"|prompt}}` sendes til fortolkeren efter skabelonlogikken er færdig

Det betyder, at du kan bruge skabelonlogik til at konstruere prompts dynamisk, men promptresultater er ikke tilgængelige til brug i betingelser eller løkker.
