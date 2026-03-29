---
permalink: web-clipper/logic
description: 'Använd villkorssatser, loopar och variabeltilldelning i Web Clipper-mallar.'
---
[[Introduktion till Obsidian Web Clipper|Web Clipper]] stöder malllogik för villkorssatser, loopar och variabeltilldelning. Denna syntax är inspirerad av mallspråken [Twig](https://twig.symfony.com/) och [Liquid](https://shopify.github.io/liquid/).

> [!warning] Kräver senaste versionen
> Logikfunktioner kräver Obsidian Web Clipper 1.0.0 som ännu inte har godkänts i alla tilläggsbutiker.

## Villkorssatser

Använd `{% if %}` för att villkorligt inkludera innehåll baserat på variabler eller uttryck.

```twig
{% if author %}
Author: {{author}}
{% endif %}
```

Använd `{% else %}` för att tillhandahålla reservinnehåll, och `{% elseif %}` för att kedja flera villkor:

```twig
{% if status == "published" %}
Live article
{% elseif status == "draft" %}
Draft article
{% else %}
Unknown status
{% endif %}
```

### Jämförelseoperatorer

Följande jämförelseoperatorer stöds:

| Operator | Beskrivning |
|----------|-------------|
| `==` | Lika med |
| `!=` | Inte lika med |
| `>` | Större än |
| `<` | Mindre än |
| `>=` | Större än eller lika med |
| `<=` | Mindre än eller lika med |
| `contains` | Kontrollera om en sträng innehåller en delsträng, eller om en array innehåller ett värde |

Exempel:
- `{% if title == "Home" %}` — stränglikhet
- `{% if price >= 100 %}` — numerisk jämförelse
- `{% if title contains "Review" %}` — delsträngskontroll
- `{% if tags contains "important" %}` — arraymedlemskap

### Logiska operatorer

Kombinera villkor med logiska operatorer:

| Operator | Alternativ  | Beskrivning                          |
| -------- | ----------- | ------------------------------------ |
| `and`    | `&&`        | Båda villkoren måste vara sanna      |
| `or`     | \|\|        | Minst ett villkor måste vara sant    |
| `not`    | `!`         | Negerar ett villkor                  |

Exempel:
- `{% if author and published %}` — båda måste finnas
- `{% if draft or archived %}` — något av villkoren
- `{% if not hidden %}` — negation
- `{% if (premium or featured) and published %}` — grupperade villkor

### Sanningsvärden

När en variabel används utan en jämförelseoperator utvärderas dess "sanningsvärde":

- `false`, `null`, `undefined`, tom sträng `""` och `0` anses vara **falska**.
- Tomma arrayer `[]` anses vara **falska**.
- Allt annat är **sant**.

```twig
{% if content %}
Has content
{% endif %}
```

## Tilldela en variabel

Använd `{% set %}` för att skapa eller ändra variabler i din mall:

```twig
{% set slug = title|lower|replace:" ":"-" %}
File: {{slug}}.md
```

Variabler kan sättas till:
- Andra variabler: `{% set name = author %}`
- Literaler: `{% set count = 5 %}` eller `{% set label = "Draft" %}`
- Uttryck med filter: `{% set excerpt = content|truncate:100 %}`
- Selektorresultat: `{% set comments = selector:.comment %}`

Variabler som sätts med `{% set %}` kan användas i efterföljande malllogik och i `{{variable}}`-utdata.

## Reservvärden

Använd operatorn `??` för att tillhandahålla reservvärden när en variabel är tom eller odefinierad:

```twig
{{title ?? "Untitled"}}
```

Om `title` är tom, odefinierad eller falsk kommer reservvärdet `"Untitled"` att användas istället.

Detta är en förkortning av motsvarande `if`-sats:

```twig
{% if title %}{{title}}{% else %}Untitled{% endif %}
```

### Kedja reservvärden

Du kan kedja flera reservvärden:

```twig
{{title ?? headline ?? "No title"}}
```

Detta använder `title` om tillgängligt, annars `headline`, annars strängen `"No title"`.

### Med filter

Filter binder starkare än `??`, så filter tillämpas före reservvärdeskontrollen:

```twig
{{title|upper ?? "UNTITLED"}}
```

Detta tillämpar `upper` på `title` först, och faller sedan tillbaka till `"UNTITLED"` om resultatet är tomt. För att tillämpa filter på reservvärdet, använd parenteser eller separata uttryck:

```twig
{{title ?? "Untitled"|lower}}
```

Detta använder `title` om tillgängligt, annars tillämpas `lower` på reservvärdet, vilket resulterar i `"untitled"`.

## Loopar

Använd `{% for %}` för att iterera över arrayer:

```twig
{% for item in schema:author %}
- {{item.name}}
{% endfor %}
```

### Loopkällor

Du kan loopa över:
- Schema-arrayer: `{% for item in schema:author %}`
- Selektorresultat: `{% for comment in selector:.comment %}`
- Variabler som satts tidigare: `{% set items = selector:.item %}{% for item in items %}`

### Loopvariabler

Inuti en loop har du tillgång till ett `loop`-objekt med följande egenskaper:

| Variabel | Beskrivning |
|----------|-------------|
| `loop.index` | Aktuell iteration (1-indexerad) |
| `loop.index0` | Aktuell iteration (0-indexerad) |
| `loop.first` | `true` om första iterationen |
| `loop.last` | `true` om sista iterationen |
| `loop.length` | Totalt antal element |

```twig
{% for tag in tags %}
{{loop.index}}. {{tag}}
{% if loop.last %} (end of list){% endif %}
{% endfor %}
```

För bakåtkompatibilitet kan du även använda `item_index` (där `item` är ditt iteratorvariabelnamn) för att få den 0-indexerade positionen:

```twig
{% for tag in tags %}
{{tag_index}}. {{tag}}
{% endfor %}
```

### Åtkomst till arrayelement via index

Använd hakparentesnotation för att komma åt arrayelement via index:

```twig
{{items[0]}}
{{items[loop.index0]}}
```

Detta är användbart när du behöver komma åt element från flera arrayer parallellt:

```twig
{% set transcripts = selector:.transcript-text %}
{% set timestamps = selector:.timestamp %}

{% for line in transcripts %}
{{timestamps[loop.index0]}} - {{line}}
{% endfor %}
```

Hakparentesnotation fungerar även med objektegenskaper:

```twig
{{user["name"]}}
{{data["my-key"]}}
```

### Nästlade loopar

Loopar kan nästlas för komplexa datastrukturer:

```twig
{% for section in sections %}
## {{section.title}}
{% for item in section.items %}
- {{item}}
{% endfor %}
{% endfor %}
```

## Kombinera logik

Villkorssatser och loopar kan kombineras:

```twig
{% for item in items %}
{% if item.active %}
- {{item.name}}
{% endif %}
{% endfor %}
```

## Utvärderingsordning

Malllogik bearbetas i följande ordning:

1. **Malllogik** — `{% if %}`, `{% for %}`, `{% set %}` och `{{variables}}` utvärderas först
2. **Promptvariabler** — [[Variabler#Promptvariabler|Promptvariabler]] som `{{"summarize this"|prompt}}` skickas till tolken efter att malllogiken är klar

Det innebär att du kan använda malllogik för att konstruera prompter dynamiskt, men promptresultat är inte tillgängliga för användning i villkorssatser eller loopar.
