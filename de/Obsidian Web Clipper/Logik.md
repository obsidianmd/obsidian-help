---
permalink: web-clipper/logic
description: >-
  Verwende Bedingungen, Schleifen und Variablenzuweisungen in Web
  Clipper-Vorlagen.
---
[[Einführung in Obsidian Web Clipper|Web Clipper]] unterstützt Vorlagenlogik für Bedingungen, Schleifen und Variablenzuweisungen. Diese Syntax ist inspiriert von den Vorlagensprachen [Twig](https://twig.symfony.com/) und [Liquid](https://shopify.github.io/liquid/).


> [!warning] Erfordert die neueste Version
> Logikfunktionen erfordern Obsidian Web Clipper 1.0.0, das noch nicht in allen Erweiterungsshops genehmigt wurde.

## Bedingungen

Verwende `{% if %}`, um Inhalte bedingt basierend auf Variablen oder Ausdrücken einzuschließen.

```twig
{% if author %}
Author: {{author}}
{% endif %}
```

Verwende `{% else %}`, um Ersatzinhalte bereitzustellen, und `{% elseif %}`, um mehrere Bedingungen zu verketten:

```twig
{% if status == "published" %}
Live article
{% elseif status == "draft" %}
Draft article
{% else %}
Unknown status
{% endif %}
```

### Vergleichsoperatoren

Die folgenden Vergleichsoperatoren werden unterstützt:

| Operator | Beschreibung |
|----------|-------------|
| `==` | Gleich |
| `!=` | Ungleich |
| `>` | Größer als |
| `<` | Kleiner als |
| `>=` | Größer oder gleich |
| `<=` | Kleiner oder gleich |
| `contains` | Prüft, ob ein String einen Teilstring enthält oder ein Array einen Wert enthält |

Beispiele:
- `{% if title == "Home" %}` — String-Gleichheit
- `{% if price >= 100 %}` — Numerischer Vergleich
- `{% if title contains "Review" %}` — Teilstring-Prüfung
- `{% if tags contains "important" %}` — Array-Zugehörigkeit

### Logische Operatoren

Kombiniere Bedingungen mit logischen Operatoren:

| Operator | Alternative | Beschreibung                              |
| -------- | ----------- | ----------------------------------------- |
| `and`    | `&&`        | Beide Bedingungen müssen wahr sein        |
| `or`     | \|\|        | Mindestens eine Bedingung muss wahr sein  |
| `not`    | `!`         | Negiert eine Bedingung                    |

Beispiele:
- `{% if author and published %}` — beide müssen existieren
- `{% if draft or archived %}` — eine der Bedingungen
- `{% if not hidden %}` — Negation
- `{% if (premium or featured) and published %}` — gruppierte Bedingungen

### Wahrheitswerte

Wenn eine Variable ohne Vergleichsoperator verwendet wird, wird sie auf „Truthiness" (Wahrheitswert) geprüft:

- `false`, `null`, `undefined`, leerer String `""` und `0` gelten als **falsy**.
- Leere Arrays `[]` gelten als **falsy**.
- Alles andere ist **truthy**.

```twig
{% if content %}
Has content
{% endif %}
```

## Eine Variable zuweisen

Verwende `{% set %}`, um Variablen innerhalb deiner Vorlage zu erstellen oder zu ändern:

```twig
{% set slug = title|lower|replace:" ":"-" %}
File: {{slug}}.md
```

Variablen können auf folgendes gesetzt werden:
- Andere Variablen: `{% set name = author %}`
- Literale: `{% set count = 5 %}` oder `{% set label = "Draft" %}`
- Ausdrücke mit Filtern: `{% set excerpt = content|truncate:100 %}`
- Selektorergebnisse: `{% set comments = selector:.comment %}`

Mit `{% set %}` gesetzte Variablen können in nachfolgender Vorlagenlogik und in `{{variable}}`-Ausgaben verwendet werden.

## Fallbacks

Verwende den `??`-Operator, um Ersatzwerte bereitzustellen, wenn eine Variable leer oder undefiniert ist:

```twig
{{title ?? "Untitled"}}
```

Wenn `title` leer, undefiniert oder falsy ist, wird stattdessen der Ersatzwert `"Untitled"` verwendet.

Dies ist eine Kurzform für die entsprechende `if`-Anweisung:

```twig
{% if title %}{{title}}{% else %}Untitled{% endif %}
```

### Fallbacks verketten

Du kannst mehrere Fallbacks verketten:

```twig
{{title ?? headline ?? "No title"}}
```

Dies verwendet `title`, falls verfügbar, andernfalls `headline`, andernfalls den String `"No title"`.

### Mit Filtern

Filter binden stärker als `??`, daher werden Filter vor der Fallback-Prüfung angewendet:

```twig
{{title|upper ?? "UNTITLED"}}
```

Dies wendet `upper` zuerst auf `title` an und fällt dann auf `"UNTITLED"` zurück, wenn das Ergebnis leer ist. Um Filter auf den Ersatzwert anzuwenden, verwende Klammern oder separate Ausdrücke:

```twig
{{title ?? "Untitled"|lower}}
```

Dies verwendet `title`, falls verfügbar, andernfalls wird `lower` auf den Ersatzwert angewendet, was `"untitled"` ergibt.

## Schleifen

Verwende `{% for %}`, um über Arrays zu iterieren:

```twig
{% for item in schema:author %}
- {{item.name}}
{% endfor %}
```

### Schleifenquellen

Du kannst über folgendes iterieren:
- Schema-Arrays: `{% for item in schema:author %}`
- Selektorergebnisse: `{% for comment in selector:.comment %}`
- Zuvor gesetzte Variablen: `{% set items = selector:.item %}{% for item in items %}`

### Schleifenvariablen

Innerhalb einer Schleife hast du Zugriff auf ein `loop`-Objekt mit folgenden Eigenschaften:

| Variable | Beschreibung |
|----------|-------------|
| `loop.index` | Aktuelle Iteration (1-indiziert) |
| `loop.index0` | Aktuelle Iteration (0-indiziert) |
| `loop.first` | `true` bei erster Iteration |
| `loop.last` | `true` bei letzter Iteration |
| `loop.length` | Gesamtanzahl der Elemente |

```twig
{% for tag in tags %}
{{loop.index}}. {{tag}}
{% if loop.last %} (end of list){% endif %}
{% endfor %}
```

Für Abwärtskompatibilität kannst du auch `item_index` verwenden (wobei `item` dein Iteratorvariablenname ist), um die 0-indizierte Position zu erhalten:

```twig
{% for tag in tags %}
{{tag_index}}. {{tag}}
{% endfor %}
```

### Auf Array-Elemente per Index zugreifen

Verwende die Klammernotation, um auf Array-Elemente per Index zuzugreifen:

```twig
{{items[0]}}
{{items[loop.index0]}}
```

Dies ist nützlich, wenn du parallel auf Elemente aus mehreren Arrays zugreifen musst:

```twig
{% set transcripts = selector:.transcript-text %}
{% set timestamps = selector:.timestamp %}

{% for line in transcripts %}
{{timestamps[loop.index0]}} - {{line}}
{% endfor %}
```

Die Klammernotation funktioniert auch mit Objekteigenschaften:

```twig
{{user["name"]}}
{{data["my-key"]}}
```

### Verschachtelte Schleifen

Schleifen können für komplexe Datenstrukturen verschachtelt werden:

```twig
{% for section in sections %}
## {{section.title}}
{% for item in section.items %}
- {{item}}
{% endfor %}
{% endfor %}
```

## Logik kombinieren

Bedingungen und Schleifen können kombiniert werden:

```twig
{% for item in items %}
{% if item.active %}
- {{item.name}}
{% endif %}
{% endfor %}
```

## Auswertungsreihenfolge

Die Vorlagenlogik wird in folgender Reihenfolge verarbeitet:

1. **Vorlagenlogik** — `{% if %}`, `{% for %}`, `{% set %}` und `{{variables}}` werden zuerst ausgewertet
2. **Prompt-Variablen** — [[Variablen#Prompt-Variablen|Prompt-Variablen]] wie `{{"summarize this"|prompt}}` werden nach Abschluss der Vorlagenlogik an den Interpreter gesendet

Das bedeutet, du kannst Vorlagenlogik verwenden, um Prompts dynamisch zu erstellen, aber Prompt-Ergebnisse stehen nicht für die Verwendung in Bedingungen oder Schleifen zur Verfügung.
