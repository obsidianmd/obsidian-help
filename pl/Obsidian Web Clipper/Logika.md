---
permalink: web-clipper/logic
description: 'Używaj instrukcji warunkowych, pętli i przypisywania zmiennych w szablonach Web Clipper.'
---
[[Wprowadzenie do Obsidian Web Clipper|Web Clipper]] obsługuje logikę szablonów dla instrukcji warunkowych, pętli i przypisywania zmiennych. Składnia ta jest inspirowana językami szablonów [Twig](https://twig.symfony.com/) i [Liquid](https://shopify.github.io/liquid/).

> [!warning] Wymaga najnowszej wersji
> Funkcje logiczne wymagają Obsidian Web Clipper 1.0.0, który nie został jeszcze zatwierdzony we wszystkich sklepach z rozszerzeniami.

## Instrukcje warunkowe

Użyj `{% if %}`, aby warunkowo dołączyć zawartość na podstawie zmiennych lub wyrażeń.

```twig
{% if author %}
Author: {{author}}
{% endif %}
```

Użyj `{% else %}`, aby zapewnić zawartość zastępczą, oraz `{% elseif %}`, aby łączyć wiele warunków:

```twig
{% if status == "published" %}
Live article
{% elseif status == "draft" %}
Draft article
{% else %}
Unknown status
{% endif %}
```

### Operatory porównania

Obsługiwane są następujące operatory porównania:

| Operator | Opis |
|----------|------|
| `==` | Równe |
| `!=` | Różne od |
| `>` | Większe niż |
| `<` | Mniejsze niż |
| `>=` | Większe lub równe |
| `<=` | Mniejsze lub równe |
| `contains` | Sprawdza, czy ciąg zawiera podciąg, lub tablica zawiera wartość |

Przykłady:
- `{% if title == "Home" %}` — porównanie ciągów
- `{% if price >= 100 %}` — porównanie liczbowe
- `{% if title contains "Review" %}` — sprawdzanie podciągu
- `{% if tags contains "important" %}` — przynależność do tablicy

### Operatory logiczne

Łącz warunki za pomocą operatorów logicznych:

| Operator | Alternatywa | Opis                                      |
| -------- | ----------- | ----------------------------------------- |
| `and`    | `&&`        | Oba warunki muszą być prawdziwe           |
| `or`     | \|\|        | Przynajmniej jeden warunek musi być prawdziwy |
| `not`    | `!`         | Neguje warunek                            |

Przykłady:
- `{% if author and published %}` — oba muszą istnieć
- `{% if draft or archived %}` — dowolny warunek
- `{% if not hidden %}` — negacja
- `{% if (premium or featured) and published %}` — zgrupowane warunki

### Prawdziwość

Gdy zmienna jest używana bez operatora porównania, jest oceniana pod kątem „prawdziwości":

- `false`, `null`, `undefined`, pusty ciąg `""` i `0` są uznawane za **fałszywe**.
- Puste tablice `[]` są uznawane za **fałszywe**.
- Wszystko inne jest **prawdziwe**.

```twig
{% if content %}
Has content
{% endif %}
```

## Przypisywanie zmiennej

Użyj `{% set %}`, aby tworzyć lub modyfikować zmienne w szablonie:

```twig
{% set slug = title|lower|replace:" ":"-" %}
File: {{slug}}.md
```

Zmiennym można przypisać:
- Inne zmienne: `{% set name = author %}`
- Literały: `{% set count = 5 %}` lub `{% set label = "Draft" %}`
- Wyrażenia z filtrami: `{% set excerpt = content|truncate:100 %}`
- Wyniki selektorów: `{% set comments = selector:.comment %}`

Zmienne ustawione za pomocą `{% set %}` mogą być używane w dalszej logice szablonu i w wyjściu `{{variable}}`.

## Wartości zastępcze

Użyj operatora `??`, aby podać wartości zastępcze, gdy zmienna jest pusta lub niezdefiniowana:

```twig
{{title ?? "Untitled"}}
```

Jeśli `title` jest puste, niezdefiniowane lub fałszywe, zostanie użyta wartość zastępcza `"Untitled"`.

Jest to skrócona forma równoważnej instrukcji `if`:

```twig
{% if title %}{{title}}{% else %}Untitled{% endif %}
```

### Łańcuchowanie wartości zastępczych

Można łączyć wiele wartości zastępczych:

```twig
{{title ?? headline ?? "No title"}}
```

Użyje `title`, jeśli jest dostępne, w przeciwnym razie `headline`, a w ostateczności ciągu `"No title"`.

### Z filtrami

Filtry wiążą silniej niż `??`, więc filtry są stosowane przed sprawdzeniem wartości zastępczej:

```twig
{{title|upper ?? "UNTITLED"}}
```

Najpierw stosuje `upper` do `title`, a następnie przechodzi do `"UNTITLED"`, jeśli wynik jest pusty. Aby zastosować filtry do wartości zastępczej, użyj nawiasów lub osobnych wyrażeń:

```twig
{{title ?? "Untitled"|lower}}
```

Użyje `title`, jeśli jest dostępne, w przeciwnym razie zastosuje `lower` do wartości zastępczej, co da wynik `"untitled"`.

## Pętle

Użyj `{% for %}`, aby iterować po tablicach:

```twig
{% for item in schema:author %}
- {{item.name}}
{% endfor %}
```

### Źródła pętli

Można iterować po:
- Tablicach schematu: `{% for item in schema:author %}`
- Wynikach selektorów: `{% for comment in selector:.comment %}`
- Zmiennych ustawionych wcześniej: `{% set items = selector:.item %}{% for item in items %}`

### Zmienne pętli

Wewnątrz pętli masz dostęp do obiektu `loop` z następującymi właściwościami:

| Zmienna | Opis |
|---------|------|
| `loop.index` | Bieżąca iteracja (indeksowana od 1) |
| `loop.index0` | Bieżąca iteracja (indeksowana od 0) |
| `loop.first` | `true` jeśli pierwsza iteracja |
| `loop.last` | `true` jeśli ostatnia iteracja |
| `loop.length` | Łączna liczba elementów |

```twig
{% for tag in tags %}
{{loop.index}}. {{tag}}
{% if loop.last %} (end of list){% endif %}
{% endfor %}
```

Dla zachowania kompatybilności wstecznej można również użyć `item_index` (gdzie `item` to nazwa zmiennej iteratora), aby uzyskać pozycję indeksowaną od 0:

```twig
{% for tag in tags %}
{{tag_index}}. {{tag}}
{% endfor %}
```

### Dostęp do elementów tablicy po indeksie

Użyj notacji nawiasowej, aby uzyskać dostęp do elementów tablicy po indeksie:

```twig
{{items[0]}}
{{items[loop.index0]}}
```

Jest to przydatne, gdy potrzebujesz jednoczesnego dostępu do elementów z wielu tablic:

```twig
{% set transcripts = selector:.transcript-text %}
{% set timestamps = selector:.timestamp %}

{% for line in transcripts %}
{{timestamps[loop.index0]}} - {{line}}
{% endfor %}
```

Notacja nawiasowa działa również z właściwościami obiektów:

```twig
{{user["name"]}}
{{data["my-key"]}}
```

### Zagnieżdżone pętle

Pętle mogą być zagnieżdżane dla złożonych struktur danych:

```twig
{% for section in sections %}
## {{section.title}}
{% for item in section.items %}
- {{item}}
{% endfor %}
{% endfor %}
```

## Łączenie logiki

Instrukcje warunkowe i pętle można łączyć:

```twig
{% for item in items %}
{% if item.active %}
- {{item.name}}
{% endif %}
{% endfor %}
```

## Kolejność ewaluacji

Logika szablonu jest przetwarzana w następującej kolejności:

1. **Logika szablonu** — `{% if %}`, `{% for %}`, `{% set %}` i `{{zmienne}}` są ewaluowane jako pierwsze
2. **Zmienne zapytań** — [[Zmienne#Zmienne zapytań|Zmienne zapytań]] takie jak `{{"summarize this"|prompt}}` są wysyłane do Tłumacza po zakończeniu ewaluacji logiki szablonu

Oznacza to, że można używać logiki szablonu do dynamicznego konstruowania zapytań, ale wyniki zapytań nie są dostępne do użycia w instrukcjach warunkowych lub pętlach.
