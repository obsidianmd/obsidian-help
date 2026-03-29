---
permalink: web-clipper/logic
description: 'Používejte podmínky, smyčky a přiřazení proměnných v šablonách Web Clipperu.'
---
[[Úvod do Obsidian Web Clipper|Web Clipper]] podporuje šablonovou logiku pro podmínky, smyčky a přiřazení proměnných. Tato syntaxe je inspirována šablonovacími jazyky [Twig](https://twig.symfony.com/) a [Liquid](https://shopify.github.io/liquid/).


> [!warning] Vyžaduje nejnovější verzi
> Funkce logiky vyžadují Obsidian Web Clipper 1.0.0, který ještě nebyl schválen ve všech obchodech s rozšířeními.

## Podmínky

Použijte `{% if %}` pro podmíněné zahrnutí obsahu na základě proměnných nebo výrazů.

```twig
{% if author %}
Author: {{author}}
{% endif %}
```

Použijte `{% else %}` pro poskytnutí záložního obsahu a `{% elseif %}` pro řetězení více podmínek:

```twig
{% if status == "published" %}
Live article
{% elseif status == "draft" %}
Draft article
{% else %}
Unknown status
{% endif %}
```

### Porovnávací operátory

Podporovány jsou následující porovnávací operátory:

| Operátor | Popis |
|----------|-------|
| `==` | Rovná se |
| `!=` | Nerovná se |
| `>` | Větší než |
| `<` | Menší než |
| `>=` | Větší nebo rovno |
| `<=` | Menší nebo rovno |
| `contains` | Kontrola, zda řetězec obsahuje podřetězec, nebo pole obsahuje hodnotu |

Příklady:
- `{% if title == "Home" %}` — rovnost řetězců
- `{% if price >= 100 %}` — číselné porovnání
- `{% if title contains "Review" %}` — kontrola podřetězce
- `{% if tags contains "important" %}` — příslušnost k poli

### Logické operátory

Kombinujte podmínky pomocí logických operátorů:

| Operátor | Alternativa | Popis                                |
| -------- | ----------- | ------------------------------------ |
| `and`    | `&&`        | Obě podmínky musí být pravdivé       |
| `or`     | \|\|        | Alespoň jedna podmínka musí být pravdivá |
| `not`    | `!`         | Neguje podmínku                      |

Příklady:
- `{% if author and published %}` — obě musí existovat
- `{% if draft or archived %}` — jedna z podmínek
- `{% if not hidden %}` — negace
- `{% if (premium or featured) and published %}` — seskupené podmínky

### Pravdivost

Když je proměnná použita bez porovnávacího operátoru, vyhodnocuje se její „pravdivost":

- `false`, `null`, `undefined`, prázdný řetězec `""` a `0` jsou považovány za **nepravdivé** (falsy).
- Prázdná pole `[]` jsou považována za **nepravdivá** (falsy).
- Vše ostatní je **pravdivé** (truthy).

```twig
{% if content %}
Has content
{% endif %}
```

## Přiřazení proměnné

Použijte `{% set %}` pro vytvoření nebo úpravu proměnných v rámci šablony:

```twig
{% set slug = title|lower|replace:" ":"-" %}
File: {{slug}}.md
```

Proměnné mohou být nastaveny na:
- Jiné proměnné: `{% set name = author %}`
- Literály: `{% set count = 5 %}` nebo `{% set label = "Draft" %}`
- Výrazy s filtry: `{% set excerpt = content|truncate:100 %}`
- Výsledky selektorů: `{% set comments = selector:.comment %}`

Proměnné nastavené pomocí `{% set %}` lze použít v následující logice šablony a ve výstupu `{{variable}}`.

## Záložní hodnoty

Použijte operátor `??` pro poskytnutí záložních hodnot, když je proměnná prázdná nebo nedefinovaná:

```twig
{{title ?? "Untitled"}}
```

Pokud je `title` prázdný, nedefinovaný nebo nepravdivý, použije se záložní hodnota `"Untitled"`.

Toto je zkrácený zápis odpovídajícího příkazu `if`:

```twig
{% if title %}{{title}}{% else %}Untitled{% endif %}
```

### Řetězení záložních hodnot

Můžete řetězit více záložních hodnot:

```twig
{{title ?? headline ?? "No title"}}
```

Toto použije `title`, pokud je k dispozici, jinak `headline`, jinak řetězec `"No title"`.

### S filtry

Filtry se váží těsněji než `??`, takže filtry se aplikují před kontrolou záložní hodnoty:

```twig
{{title|upper ?? "UNTITLED"}}
```

Toto nejprve aplikuje `upper` na `title` a poté se vrátí k `"UNTITLED"`, pokud je výsledek prázdný. Pro aplikaci filtrů na záložní hodnotu použijte závorky nebo samostatné výrazy:

```twig
{{title ?? "Untitled"|lower}}
```

Toto použije `title`, pokud je k dispozici, jinak aplikuje `lower` na záložní hodnotu, což vede k `"untitled"`.

## Smyčky

Použijte `{% for %}` pro iteraci přes pole:

```twig
{% for item in schema:author %}
- {{item.name}}
{% endfor %}
```

### Zdroje smyček

Můžete iterovat přes:
- Pole ze schématu: `{% for item in schema:author %}`
- Výsledky selektorů: `{% for comment in selector:.comment %}`
- Dříve nastavené proměnné: `{% set items = selector:.item %}{% for item in items %}`

### Proměnné smyčky

Uvnitř smyčky máte přístup k objektu `loop` s následujícími vlastnostmi:

| Proměnná | Popis |
|----------|-------|
| `loop.index` | Aktuální iterace (indexováno od 1) |
| `loop.index0` | Aktuální iterace (indexováno od 0) |
| `loop.first` | `true` při první iteraci |
| `loop.last` | `true` při poslední iteraci |
| `loop.length` | Celkový počet položek |

```twig
{% for tag in tags %}
{{loop.index}}. {{tag}}
{% if loop.last %} (end of list){% endif %}
{% endfor %}
```

Pro zpětnou kompatibilitu můžete také použít `item_index` (kde `item` je název vaší iterační proměnné) pro získání pozice indexované od 0:

```twig
{% for tag in tags %}
{{tag_index}}. {{tag}}
{% endfor %}
```

### Přístup k prvkům pole podle indexu

Použijte hranatou závorku pro přístup k prvkům pole podle indexu:

```twig
{{items[0]}}
{{items[loop.index0]}}
```

To je užitečné, když potřebujete přistupovat k položkám z více polí paralelně:

```twig
{% set transcripts = selector:.transcript-text %}
{% set timestamps = selector:.timestamp %}

{% for line in transcripts %}
{{timestamps[loop.index0]}} - {{line}}
{% endfor %}
```

Hranatá závorka funguje také s vlastnostmi objektů:

```twig
{{user["name"]}}
{{data["my-key"]}}
```

### Vnořené smyčky

Smyčky lze vnořovat pro složité datové struktury:

```twig
{% for section in sections %}
## {{section.title}}
{% for item in section.items %}
- {{item}}
{% endfor %}
{% endfor %}
```

## Kombinace logiky

Podmínky a smyčky lze kombinovat:

```twig
{% for item in items %}
{% if item.active %}
- {{item.name}}
{% endif %}
{% endfor %}
```

## Pořadí vyhodnocení

Logika šablony se zpracovává v následujícím pořadí:

1. **Logika šablony** — `{% if %}`, `{% for %}`, `{% set %}` a `{{proměnné}}` se vyhodnocují jako první
2. **Proměnné promptu** — [[Proměnné#Proměnné promptu|Proměnné promptu]] jako `{{"summarize this"|prompt}}` se odesílají do překladače po dokončení logiky šablony

To znamená, že můžete použít logiku šablony k dynamickému sestavení promptů, ale výsledky promptů nejsou k dispozici pro použití v podmínkách nebo smyčkách.
