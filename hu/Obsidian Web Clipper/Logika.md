---
permalink: web-clipper/logic
description: 'Feltételes kifejezések, ciklusok és változó-hozzárendelés használata a Web Clipper sablonokban.'
---
Az [[Bevezetés az Obsidian Web Clipper használatába|Web Clipper]] támogatja a sablonlogikát feltételes kifejezésekhez, ciklusokhoz és változó-hozzárendeléshez. Ez a szintaxis a [Twig](https://twig.symfony.com/) és a [Liquid](https://shopify.github.io/liquid/) sablonnyelvekből merít ihletet.

> [!warning] A legújabb verzió szükséges
> A logikai funkciókhoz az Obsidian Web Clipper 1.0.0 szükséges, amelyet még nem minden bővítményboltban hagytak jóvá.

## Feltételes kifejezések

Használd az `{% if %}` kifejezést tartalom feltételes megjelenítéséhez változók vagy kifejezések alapján.

```twig
{% if author %}
Szerző: {{author}}
{% endif %}
```

Használd az `{% else %}` kifejezést tartalék tartalom megadásához, és az `{% elseif %}` kifejezést több feltétel láncolásához:

```twig
{% if status == "published" %}
Publikált cikk
{% elseif status == "draft" %}
Vázlat cikk
{% else %}
Ismeretlen állapot
{% endif %}
```

### Összehasonlító operátorok

A következő összehasonlító operátorok támogatottak:

| Operátor | Leírás |
|----------|--------|
| `==` | Egyenlő |
| `!=` | Nem egyenlő |
| `>` | Nagyobb mint |
| `<` | Kisebb mint |
| `>=` | Nagyobb vagy egyenlő |
| `<=` | Kisebb vagy egyenlő |
| `contains` | Ellenőrzi, hogy egy szöveg tartalmaz-e részkifejezést, vagy egy tömb tartalmaz-e értéket |

Példák:
- `{% if title == "Home" %}` — szöveg egyenlőség
- `{% if price >= 100 %}` — numerikus összehasonlítás
- `{% if title contains "Review" %}` — részkifejezés ellenőrzése
- `{% if tags contains "important" %}` — tömbben való tagság

### Logikai operátorok

Feltételek kombinálása logikai operátorokkal:

| Operátor | Alternatíva | Leírás                              |
| -------- | ----------- | ----------------------------------- |
| `and`    | `&&`        | Mindkét feltételnek igaznak kell lennie |
| `or`     | \|\|        | Legalább az egyik feltételnek igaznak kell lennie |
| `not`    | `!`         | Tagadja a feltételt                 |

Példák:
- `{% if author and published %}` — mindkettőnek léteznie kell
- `{% if draft or archived %}` — bármelyik feltétel
- `{% if not hidden %}` — tagadás
- `{% if (premium or featured) and published %}` — csoportosított feltételek

### Igazság-értékelés

Amikor egy változót összehasonlító operátor nélkül használsz, „igazságértéke" alapján kerül kiértékelésre:

- A `false`, `null`, `undefined`, üres szöveg `""` és `0` értékek **hamisnak** számítanak.
- Az üres tömbök `[]` **hamisnak** számítanak.
- Minden más **igaznak** számít.

```twig
{% if content %}
Van tartalom
{% endif %}
```

## Változó hozzárendelése

Használd a `{% set %}` kifejezést változók létrehozásához vagy módosításához a sablonon belül:

```twig
{% set slug = title|lower|replace:" ":"-" %}
Fájl: {{slug}}.md
```

A változók értékei lehetnek:
- Más változók: `{% set name = author %}`
- Literálok: `{% set count = 5 %}` vagy `{% set label = "Draft" %}`
- Szűrőkkel ellátott kifejezések: `{% set excerpt = content|truncate:100 %}`
- Szelektorok eredményei: `{% set comments = selector:.comment %}`

A `{% set %}` használatával beállított változók felhasználhatók a későbbi sablonlogikában és `{{variable}}` kimenetekben.

## Tartalék értékek

Használd a `??` operátort tartalék értékek megadásához, ha egy változó üres vagy nincs definiálva:

```twig
{{title ?? "Névtelen"}}
```

Ha a `title` üres, nincs definiálva, vagy hamis, a tartalék érték `"Névtelen"` lesz használva.

Ez az egyenértékű `if` utasítás rövidítése:

```twig
{% if title %}{{title}}{% else %}Névtelen{% endif %}
```

### Tartalék értékek láncolása

Több tartalék érték is láncolható:

```twig
{{title ?? headline ?? "Nincs cím"}}
```

Ez a `title` értékét használja, ha elérhető, egyébként a `headline` értékét, egyébként a `"Nincs cím"` szöveget.

### Szűrőkkel

A szűrők erősebben kötődnek, mint a `??`, tehát a szűrők a tartalék ellenőrzés előtt kerülnek alkalmazásra:

```twig
{{title|upper ?? "NÉVTELEN"}}
```

Ez először az `upper` szűrőt alkalmazza a `title` értékre, majd a `"NÉVTELEN"` tartalék értékre vált, ha az eredmény üres. Szűrők alkalmazásához a tartalék értékre használj zárójeleket vagy külön kifejezéseket:

```twig
{{title ?? "Névtelen"|lower}}
```

Ez a `title` értékét használja, ha elérhető, egyébként a `lower` szűrőt alkalmazza a tartalék értékre, aminek eredménye `"névtelen"`.

## Ciklusok

Használd a `{% for %}` kifejezést tömbökön való iteráláshoz:

```twig
{% for item in schema:author %}
- {{item.name}}
{% endfor %}
```

### Ciklus források

A következőkön iterálhatsz:
- Séma tömbök: `{% for item in schema:author %}`
- Szelektor eredmények: `{% for comment in selector:.comment %}`
- Korábban beállított változók: `{% set items = selector:.item %}{% for item in items %}`

### Ciklus változók

Egy cikluson belül hozzáférsz egy `loop` objektumhoz a következő tulajdonságokkal:

| Változó | Leírás |
|---------|--------|
| `loop.index` | Aktuális iteráció (1-től indexelve) |
| `loop.index0` | Aktuális iteráció (0-tól indexelve) |
| `loop.first` | `true` az első iterációnál |
| `loop.last` | `true` az utolsó iterációnál |
| `loop.length` | Elemek összesített száma |

```twig
{% for tag in tags %}
{{loop.index}}. {{tag}}
{% if loop.last %} (lista vége){% endif %}
{% endfor %}
```

Visszafelé kompatibilitás érdekében az `item_index` változót is használhatod (ahol az `item` az iterátor változó neve) a 0-tól indexelt pozíció lekéréséhez:

```twig
{% for tag in tags %}
{{tag_index}}. {{tag}}
{% endfor %}
```

### Tömbelemek elérése index alapján

Használd a szögletes zárójeleket tömbelemek index alapján történő eléréséhez:

```twig
{{items[0]}}
{{items[loop.index0]}}
```

Ez hasznos, ha több tömbből kell párhuzamosan elemeket elérnöd:

```twig
{% set transcripts = selector:.transcript-text %}
{% set timestamps = selector:.timestamp %}

{% for line in transcripts %}
{{timestamps[loop.index0]}} - {{line}}
{% endfor %}
```

A szögletes zárójelezés objektum tulajdonságokkal is működik:

```twig
{{user["name"]}}
{{data["my-key"]}}
```

### Beágyazott ciklusok

A ciklusok beágyazhatók összetett adatszerkezetekhez:

```twig
{% for section in sections %}
## {{section.title}}
{% for item in section.items %}
- {{item}}
{% endfor %}
{% endfor %}
```

## Logika kombinálása

A feltételes kifejezések és ciklusok kombinálhatók:

```twig
{% for item in items %}
{% if item.active %}
- {{item.name}}
{% endif %}
{% endfor %}
```

## Kiértékelési sorrend

A sablonlogika feldolgozása a következő sorrendben történik:

1. **Sablonlogika** — Az `{% if %}`, `{% for %}`, `{% set %}` és `{{változók}}` kerülnek először kiértékelésre
2. **Prompt változók** — A [[Változók#Prompt változók|prompt változók]], mint például a `{{"summarize this"|prompt}}`, az értelmezőnek kerülnek elküldésre a sablonlogika befejezése után

Ez azt jelenti, hogy a sablonlogikát használhatod promptok dinamikus összeállítására, de a prompt eredmények nem állnak rendelkezésre feltételes kifejezésekben vagy ciklusokban való felhasználásra.
