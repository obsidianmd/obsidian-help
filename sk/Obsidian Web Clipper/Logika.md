---
permalink: web-clipper/logic
description: 'Používajte podmienky, cykly a priradenie premenných v šablónach Web Clippera.'
---
[[Úvod do Obsidian Web Clipper|Web Clipper]] podporuje šablónovú logiku pre podmienky, cykly a priradenie premenných. Táto syntax je inšpirovaná šablónovacími jazykmi [Twig](https://twig.symfony.com/) a [Liquid](https://shopify.github.io/liquid/).


> [!warning] Vyžaduje najnovšiu verziu
> Funkcie logiky vyžadujú Obsidian Web Clipper 1.0.0, ktorý ešte nebol schválený vo všetkých obchodoch s rozšíreniami.

## Podmienky

Použite `{% if %}` na podmienené zahrnutie obsahu na základe premenných alebo výrazov.

```twig
{% if author %}
Autor: {{author}}
{% endif %}
```

Použite `{% else %}` na poskytnutie záložného obsahu a `{% elseif %}` na reťazenie viacerých podmienok:

```twig
{% if status == "published" %}
Publikovaný článok
{% elseif status == "draft" %}
Koncept článku
{% else %}
Neznámy stav
{% endif %}
```

### Porovnávacie operátory

Podporované sú nasledujúce porovnávacie operátory:

| Operátor | Popis |
|----------|-------------|
| `==` | Rovná sa |
| `!=` | Nerovná sa |
| `>` | Väčší ako |
| `<` | Menší ako |
| `>=` | Väčší alebo rovný |
| `<=` | Menší alebo rovný |
| `contains` | Kontrola, či reťazec obsahuje podreťazec, alebo pole obsahuje hodnotu |

Príklady:
- `{% if title == "Home" %}` — rovnosť reťazcov
- `{% if price >= 100 %}` — číselné porovnanie
- `{% if title contains "Review" %}` — kontrola podreťazca
- `{% if tags contains "important" %}` — príslušnosť k poľu

### Logické operátory

Kombinujte podmienky pomocou logických operátorov:

| Operátor | Alternatíva | Popis                               |
| -------- | ----------- | ----------------------------------- |
| `and`    | `&&`        | Obe podmienky musia byť pravdivé   |
| `or`     | \|\|        | Aspoň jedna podmienka musí byť pravdivá |
| `not`    | `!`         | Neguje podmienku                    |

Príklady:
- `{% if author and published %}` — obe musia existovať
- `{% if draft or archived %}` — ktorákoľvek podmienka
- `{% if not hidden %}` — negácia
- `{% if (premium or featured) and published %}` — zoskupené podmienky

### Pravdivosť

Keď sa premenná použije bez porovnávacieho operátora, vyhodnotí sa na „pravdivosť":

- `false`, `null`, `undefined`, prázdny reťazec `""` a `0` sa považujú za **nepravdivé**.
- Prázdne polia `[]` sa považujú za **nepravdivé**.
- Všetko ostatné je **pravdivé**.

```twig
{% if content %}
Má obsah
{% endif %}
```

## Priradenie premennej

Použite `{% set %}` na vytvorenie alebo úpravu premenných v rámci šablóny:

```twig
{% set slug = title|lower|replace:" ":"-" %}
Súbor: {{slug}}.md
```

Premenným je možné priradiť:
- Iné premenné: `{% set name = author %}`
- Literály: `{% set count = 5 %}` alebo `{% set label = "Draft" %}`
- Výrazy s filtrami: `{% set excerpt = content|truncate:100 %}`
- Výsledky selektorov: `{% set comments = selector:.comment %}`

Premenné nastavené pomocou `{% set %}` je možné používať v následnej logike šablóny a vo výstupe `{{variable}}`.

## Záložné hodnoty

Použite operátor `??` na poskytnutie záložných hodnôt, keď je premenná prázdna alebo nedefinovaná:

```twig
{{title ?? "Bez názvu"}}
```

Ak je `title` prázdny, nedefinovaný alebo nepravdivý, použije sa záložná hodnota `"Bez názvu"`.

Toto je skrátený zápis ekvivalentného príkazu `if`:

```twig
{% if title %}{{title}}{% else %}Bez názvu{% endif %}
```

### Reťazenie záložných hodnôt

Môžete reťaziť viacero záložných hodnôt:

```twig
{{title ?? headline ?? "Bez názvu"}}
```

Toto použije `title`, ak je dostupný, inak `headline`, inak reťazec `"Bez názvu"`.

### S filtrami

Filtre sa viažu tesnejšie ako `??`, takže filtre sa aplikujú pred kontrolou záložnej hodnoty:

```twig
{{title|upper ?? "BEZ NÁZVU"}}
```

Toto najprv aplikuje `upper` na `title`, potom sa vráti k `"BEZ NÁZVU"`, ak je výsledok prázdny. Na aplikovanie filtrov na záložnú hodnotu použite zátvorky alebo samostatné výrazy:

```twig
{{title ?? "Bez názvu"|lower}}
```

Toto použije `title`, ak je dostupný, inak aplikuje `lower` na záložnú hodnotu, čo výsledkom bude `"bez názvu"`.

## Cykly

Použite `{% for %}` na iteráciu cez polia:

```twig
{% for item in schema:author %}
- {{item.name}}
{% endfor %}
```

### Zdroje cyklov

Iterovať môžete cez:
- Polia schémy: `{% for item in schema:author %}`
- Výsledky selektorov: `{% for comment in selector:.comment %}`
- Skôr nastavené premenné: `{% set items = selector:.item %}{% for item in items %}`

### Premenné cyklu

Vo vnútri cyklu máte prístup k objektu `loop` s nasledujúcimi vlastnosťami:

| Premenná | Popis |
|----------|-------------|
| `loop.index` | Aktuálna iterácia (indexovaná od 1) |
| `loop.index0` | Aktuálna iterácia (indexovaná od 0) |
| `loop.first` | `true` pri prvej iterácii |
| `loop.last` | `true` pri poslednej iterácii |
| `loop.length` | Celkový počet položiek |

```twig
{% for tag in tags %}
{{loop.index}}. {{tag}}
{% if loop.last %} (koniec zoznamu){% endif %}
{% endfor %}
```

Pre spätnú kompatibilitu môžete tiež použiť `item_index` (kde `item` je názov vašej iteračnej premennej) na získanie pozície indexovanej od 0:

```twig
{% for tag in tags %}
{{tag_index}}. {{tag}}
{% endfor %}
```

### Prístup k prvkom poľa podľa indexu

Použite zátvorkový zápis na prístup k prvkom poľa podľa indexu:

```twig
{{items[0]}}
{{items[loop.index0]}}
```

Toto je užitočné, keď potrebujete pristupovať k položkám z viacerých polí paralelne:

```twig
{% set transcripts = selector:.transcript-text %}
{% set timestamps = selector:.timestamp %}

{% for line in transcripts %}
{{timestamps[loop.index0]}} - {{line}}
{% endfor %}
```

Zátvorkový zápis funguje aj s vlastnosťami objektov:

```twig
{{user["name"]}}
{{data["my-key"]}}
```

### Vnorené cykly

Cykly je možné vnárať pre zložité dátové štruktúry:

```twig
{% for section in sections %}
## {{section.title}}
{% for item in section.items %}
- {{item}}
{% endfor %}
{% endfor %}
```

## Kombinácia logiky

Podmienky a cykly je možné kombinovať:

```twig
{% for item in items %}
{% if item.active %}
- {{item.name}}
{% endif %}
{% endfor %}
```

## Poradie vyhodnocovania

Logika šablóny sa spracováva v nasledujúcom poradí:

1. **Logika šablóny** — `{% if %}`, `{% for %}`, `{% set %}` a `{{variables}}` sa vyhodnocujú ako prvé
2. **Premenné výziev** — [[Premenné#Premenné výziev|Premenné výziev]] ako `{{"summarize this"|prompt}}` sa posielajú do Interpretera po dokončení logiky šablóny

To znamená, že môžete použiť logiku šablóny na dynamickú konštrukciu výziev, ale výsledky výziev nie sú dostupné na použitie v podmienkach alebo cykloch.
