---
permalink: web-clipper/logic
description: 'Bruk betingelser, løkker og variabeltilordning i Web Clipper-maler.'
---
[[Introduksjon til Obsidian Web Clipper|Web Clipper]] støtter mallogikk for betingelser, løkker og variabeltilordning. Denne syntaksen er inspirert av malspråkene [Twig](https://twig.symfony.com/) og [Liquid](https://shopify.github.io/liquid/).


> [!warning] Krever siste versjon
> Logikkfunksjoner krever Obsidian Web Clipper 1.0.0, som ennå ikke er godkjent i alle utvidelsesbutikker.

## Betingelser

Bruk `{% if %}` for å inkludere innhold betinget basert på variabler eller uttrykk.

```twig
{% if author %}
Author: {{author}}
{% endif %}
```

Bruk `{% else %}` for å gi reserveinnhold, og `{% elseif %}` for å kjede flere betingelser:

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

Følgende sammenligningsoperatorer støttes:

| Operator | Beskrivelse |
|----------|-------------|
| `==` | Lik |
| `!=` | Ikke lik |
| `>` | Større enn |
| `<` | Mindre enn |
| `>=` | Større enn eller lik |
| `<=` | Mindre enn eller lik |
| `contains` | Sjekk om en streng inneholder en delstreng, eller om en matrise inneholder en verdi |

Eksempler:
- `{% if title == "Home" %}` — strenglikhet
- `{% if price >= 100 %}` — numerisk sammenligning
- `{% if title contains "Review" %}` — delstrengsjekk
- `{% if tags contains "important" %}` — matrisemedlemskap

### Logiske operatorer

Kombiner betingelser med logiske operatorer:

| Operator | Alternativ  | Beskrivelse                           |
| -------- | ----------- | ------------------------------------- |
| `and`    | `&&`        | Begge betingelser må være sanne       |
| `or`     | \|\|        | Minst én betingelse må være sann      |
| `not`    | `!`         | Negerer en betingelse                 |

Eksempler:
- `{% if author and published %}` — begge må eksistere
- `{% if draft or archived %}` — en av betingelsene
- `{% if not hidden %}` — negasjon
- `{% if (premium or featured) and published %}` — grupperte betingelser

### Sannhetsverdi

Når en variabel brukes uten en sammenligningsoperator, evalueres den for «sannhetsverdi»:

- `false`, `null`, `undefined`, tom streng `""` og `0` anses som **usanne**.
- Tomme matriser `[]` anses som **usanne**.
- Alt annet er **sant**.

```twig
{% if content %}
Has content
{% endif %}
```

## Tilordne en variabel

Bruk `{% set %}` for å opprette eller endre variabler i malen din:

```twig
{% set slug = title|lower|replace:" ":"-" %}
File: {{slug}}.md
```

Variabler kan settes til:
- Andre variabler: `{% set name = author %}`
- Literaler: `{% set count = 5 %}` eller `{% set label = "Draft" %}`
- Uttrykk med filtre: `{% set excerpt = content|truncate:100 %}`
- Velgerresultater: `{% set comments = selector:.comment %}`

Variabler satt med `{% set %}` kan brukes i påfølgende mallogikk og i `{{variable}}`-utdata.

## Reserveverdier

Bruk `??`-operatoren for å gi reserveverdier når en variabel er tom eller udefinert:

```twig
{{title ?? "Untitled"}}
```

Hvis `title` er tom, udefinert eller usann, vil reserveverdien `"Untitled"` bli brukt i stedet.

Dette er en forkortelse for den tilsvarende `if`-setningen:

```twig
{% if title %}{{title}}{% else %}Untitled{% endif %}
```

### Kjede reserveverdier

Du kan kjede flere reserveverdier:

```twig
{{title ?? headline ?? "No title"}}
```

Dette vil bruke `title` hvis tilgjengelig, ellers `headline`, ellers strengen `"No title"`.

### Med filtre

Filtre binder tettere enn `??`, så filtre anvendes før reservesjekken:

```twig
{{title|upper ?? "UNTITLED"}}
```

Dette anvender `upper` på `title` først, og faller deretter tilbake til `"UNTITLED"` hvis resultatet er tomt. For å anvende filtre på reserveverdien, bruk parenteser eller separate uttrykk:

```twig
{{title ?? "Untitled"|lower}}
```

Dette vil bruke `title` hvis tilgjengelig, ellers anvende `lower` på reserveverdien, noe som resulterer i `"untitled"`.

## Løkker

Bruk `{% for %}` for å iterere over matriser:

```twig
{% for item in schema:author %}
- {{item.name}}
{% endfor %}
```

### Løkkekilder

Du kan iterere over:
- Skjemamatriser: `{% for item in schema:author %}`
- Velgerresultater: `{% for comment in selector:.comment %}`
- Variabler satt tidligere: `{% set items = selector:.item %}{% for item in items %}`

### Løkkevariabler

Inne i en løkke har du tilgang til et `loop`-objekt med følgende egenskaper:

| Variabel | Beskrivelse |
|----------|-------------|
| `loop.index` | Gjeldende iterasjon (1-indeksert) |
| `loop.index0` | Gjeldende iterasjon (0-indeksert) |
| `loop.first` | `true` hvis første iterasjon |
| `loop.last` | `true` hvis siste iterasjon |
| `loop.length` | Totalt antall elementer |

```twig
{% for tag in tags %}
{{loop.index}}. {{tag}}
{% if loop.last %} (end of list){% endif %}
{% endfor %}
```

For bakoverkompatibilitet kan du også bruke `item_index` (der `item` er navnet på iteratorvariabelen din) for å få den 0-indekserte posisjonen:

```twig
{% for tag in tags %}
{{tag_index}}. {{tag}}
{% endfor %}
```

### Tilgang til matriseelementer etter indeks

Bruk brakettnotasjon for å få tilgang til matriseelementer etter indeks:

```twig
{{items[0]}}
{{items[loop.index0]}}
```

Dette er nyttig når du trenger å få tilgang til elementer fra flere matriser parallelt:

```twig
{% set transcripts = selector:.transcript-text %}
{% set timestamps = selector:.timestamp %}

{% for line in transcripts %}
{{timestamps[loop.index0]}} - {{line}}
{% endfor %}
```

Brakettnotasjon fungerer også med objektegenskaper:

```twig
{{user["name"]}}
{{data["my-key"]}}
```

### Nestede løkker

Løkker kan nestes for komplekse datastrukturer:

```twig
{% for section in sections %}
## {{section.title}}
{% for item in section.items %}
- {{item}}
{% endfor %}
{% endfor %}
```

## Kombinere logikk

Betingelser og løkker kan kombineres:

```twig
{% for item in items %}
{% if item.active %}
- {{item.name}}
{% endif %}
{% endfor %}
```

## Evalueringsrekkefølge

Mallogikk behandles i følgende rekkefølge:

1. **Mallogikk** — `{% if %}`, `{% for %}`, `{% set %}` og `{{variabler}}` evalueres først
2. **Prompt-variabler** — [[Variabler#Prompt-variabler|Prompt-variabler]] som `{{"summarize this"|prompt}}` sendes til Tolken etter at mallogikken er ferdig

Dette betyr at du kan bruke mallogikk til å konstruere prompts dynamisk, men prompt-resultater er ikke tilgjengelige for bruk i betingelser eller løkker.
