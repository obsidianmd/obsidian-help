---
permalink: web-clipper/logic
description: 'Folosește condiționale, bucle și atribuirea variabilelor în șabloanele Web Clipper.'
aliases:
  - Logic
---
[[Introducere în Obsidian Web Clipper|Web Clipper]] acceptă logică de șablon pentru condiționale, bucle și atribuirea variabilelor. Această sintaxă este inspirată din limbajele de șabloane [Twig](https://twig.symfony.com/) și [Liquid](https://shopify.github.io/liquid/).


> [!warning] Necesită cea mai recentă versiune
> Funcțiile de logică necesită Obsidian Web Clipper 1.0.0, care nu a fost încă aprobată în toate magazinele de extensii.

## Condiționale

Folosește `{% if %}` pentru a include condiționat conținut pe baza variabilelor sau expresiilor.

```twig
{% if author %}
Author: {{author}}
{% endif %}
```

Folosește `{% else %}` pentru a oferi conținut alternativ, și `{% elseif %}` pentru a înlănțui mai multe condiții:

```twig
{% if status == "published" %}
Live article
{% elseif status == "draft" %}
Draft article
{% else %}
Unknown status
{% endif %}
```

### Operatori de comparație

Sunt acceptați următorii operatori de comparație:

| Operator | Descriere |
|----------|-------------|
| `==` | Egal cu |
| `!=` | Diferit de |
| `>` | Mai mare decât |
| `<` | Mai mic decât |
| `>=` | Mai mare sau egal cu |
| `<=` | Mai mic sau egal cu |
| `contains` | Verifică dacă un șir conține un subșir, sau dacă un array conține o valoare |

Exemple:
- `{% if title == "Home" %}` — egalitate de șiruri
- `{% if price >= 100 %}` — comparație numerică
- `{% if title contains "Review" %}` — verificare de subșir
- `{% if tags contains "important" %}` — apartenență la array

### Operatori logici

Combină condiții folosind operatori logici:

| Operator | Alternativă | Descriere                         |
| -------- | ----------- | ----------------------------------- |
| `and`    | `&&`        | Ambele condiții trebuie să fie adevărate |
| `or`     | \|\|        | Cel puțin o condiție trebuie să fie adevărată |
| `not`    | `!`         | Neagă o condiție |

Exemple:
- `{% if author and published %}` — ambele trebuie să existe
- `{% if draft or archived %}` — oricare dintre condiții
- `{% if not hidden %}` — negație
- `{% if (premium or featured) and published %}` — condiții grupate

### Valoare de adevăr

Când o variabilă este folosită fără un operator de comparație, este evaluată pentru „valoarea de adevăr”:

- `false`, `null`, `undefined`, șirul gol `""` și `0` sunt considerate **false**.
- Array-urile goale `[]` sunt considerate **false**.
- Orice altceva este considerat **adevărat**.

```twig
{% if content %}
Has content
{% endif %}
```

## Atribuirea unei variabile

Folosește `{% set %}` pentru a crea sau modifica variabile în cadrul șablonului tău:

```twig
{% set slug = title|lower|replace:" ":"-" %}
File: {{slug}}.md
```

Variabilele pot fi setate la:
- Alte variabile: `{% set name = author %}`
- Valori literale: `{% set count = 5 %}` sau `{% set label = "Draft" %}`
- Expresii cu filtre: `{% set excerpt = content|truncate:100 %}`
- Rezultate ale selectorilor: `{% set comments = selector:.comment %}`

Variabilele setate cu `{% set %}` pot fi folosite în logica ulterioară a șablonului și în ieșirea `{{variable}}`.

## Valori alternative (fallback)

Folosește operatorul `??` pentru a oferi valori alternative când o variabilă este goală sau nedefinită:

```twig
{{title ?? "Untitled"}}
```

Dacă `title` este goală, nedefinită sau falsă, va fi folosită în schimb valoarea alternativă `"Untitled"`.

Aceasta este o prescurtare pentru instrucțiunea `if` echivalentă:

```twig
{% if title %}{{title}}{% else %}Untitled{% endif %}
```

### Înlănțuirea valorilor alternative

Poți înlănțui mai multe valori alternative:

```twig
{{title ?? headline ?? "No title"}}
```

Aceasta va folosi `title` dacă este disponibilă, altfel `headline`, altfel șirul `"No title"`.

### Cu filtre

Filtrele au prioritate mai mare decât `??`, deci filtrele sunt aplicate înainte de verificarea valorii alternative:

```twig
{{title|upper ?? "UNTITLED"}}
```

Aceasta aplică mai întâi `upper` variabilei `title`, apoi revine la valoarea alternativă `"UNTITLED"` dacă rezultatul este gol. Pentru a aplica filtre valorii alternative, folosește paranteze sau expresii separate:

```twig
{{title ?? "Untitled"|lower}}
```

Aceasta va folosi `title` dacă este disponibilă, altfel va aplica `lower` valorii alternative, rezultând `"untitled"`.

## Bucle

Folosește `{% for %}` pentru a itera prin array-uri:

```twig
{% for item in schema:author %}
- {{item.name}}
{% endfor %}
```

### Surse pentru bucle

Poți itera prin:
- Array-uri de schemă: `{% for item in schema:author %}`
- Rezultate ale selectorilor: `{% for comment in selector:.comment %}`
- Variabile setate anterior: `{% set items = selector:.item %}{% for item in items %}`

### Variabile de buclă

În interiorul unei bucle, ai acces la un obiect `loop` cu următoarele proprietăți:

| Variabilă | Descriere |
|----------|-------------|
| `loop.index` | Iterația curentă (indexată de la 1) |
| `loop.index0` | Iterația curentă (indexată de la 0) |
| `loop.first` | `true` dacă este prima iterație |
| `loop.last` | `true` dacă este ultima iterație |
| `loop.length` | Numărul total de elemente |

```twig
{% for tag in tags %}
{{loop.index}}. {{tag}}
{% if loop.last %} (end of list){% endif %}
{% endfor %}
```

Pentru compatibilitate retroactivă, poți folosi de asemenea `item_index` (unde `item` este numele variabilei tale de iterator) pentru a obține poziția indexată de la 0:

```twig
{% for tag in tags %}
{{tag_index}}. {{tag}}
{% endfor %}
```

### Accesarea elementelor unui array după index

Folosește notația cu paranteze drepte pentru a accesa elemente ale unui array după index:

```twig
{{items[0]}}
{{items[loop.index0]}}
```

Aceasta este utilă când trebuie să accesezi elemente din mai multe array-uri în paralel:

```twig
{% set transcripts = selector:.transcript-text %}
{% set timestamps = selector:.timestamp %}

{% for line in transcripts %}
{{timestamps[loop.index0]}} - {{line}}
{% endfor %}
```

Notația cu paranteze drepte funcționează de asemenea cu proprietăți de obiect:

```twig
{{user["name"]}}
{{data["my-key"]}}
```

### Bucle imbricate

Buclele pot fi imbricate pentru structuri de date complexe:

```twig
{% for section in sections %}
## {{section.title}}
{% for item in section.items %}
- {{item}}
{% endfor %}
{% endfor %}
```

## Combinarea logicii

Condiționalele și buclele pot fi combinate:

```twig
{% for item in items %}
{% if item.active %}
- {{item.name}}
{% endif %}
{% endfor %}
```

## Ordinea de evaluare

Logica șablonului este procesată în următoarea ordine:

1. **Logica șablonului** — `{% if %}`, `{% for %}`, `{% set %}` și `{{variables}}` sunt evaluate primele
2. **Variabile prompt** — [[Variabile#Prompt variables|Variabilele prompt]] precum `{{"summarize this"|prompt}}` sunt trimise către Interpreter după ce logica șablonului este completă

Aceasta înseamnă că poți folosi logica șablonului pentru a construi prompturi dinamic, dar rezultatele prompturilor nu sunt disponibile pentru a fi folosite în condiționale sau bucle.
