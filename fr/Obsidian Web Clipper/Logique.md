---
permalink: web-clipper/logic
description: >-
  Utilisez des conditions, des boucles et l'affectation de variables dans les
  modèles de Web Clipper.
localized: '2026-03-18'

---
[[Introduction à Obsidian Web Clipper|Web Clipper]] prend en charge la logique de modèles pour les conditionnels, les boucles et l'assignation de variables. Cette syntaxe est inspirée des langages de modèles [Twig](https://twig.symfony.com/) et [Liquid](https://shopify.github.io/liquid/).


> [!warning] Nécessite la dernière version
> Les fonctionnalités de logique nécessitent Obsidian Web Clipper 1.0.0 qui n'a pas encore été approuvé sur toutes les boutiques d'extensions.

## Conditionnels

Utilisez `{% if %}` pour inclure conditionnellement du contenu en fonction de variables ou d'expressions.

```twig
{% if author %}
Author: {{author}}
{% endif %}
```

Utilisez `{% else %}` pour fournir un contenu de repli, et `{% elseif %}` pour chaîner plusieurs conditions :

```twig
{% if status == "published" %}
Live article
{% elseif status == "draft" %}
Draft article
{% else %}
Unknown status
{% endif %}
```

### Opérateurs de comparaison

Les opérateurs de comparaison suivants sont pris en charge :

| Opérateur | Description |
|----------|-------------|
| `==` | Égal à |
| `!=` | Différent de |
| `>` | Supérieur à |
| `<` | Inférieur à |
| `>=` | Supérieur ou égal à |
| `<=` | Inférieur ou égal à |
| `contains` | Vérifie si une chaîne contient une sous-chaîne, ou si un tableau contient une valeur |

Exemples :
- `{% if title == "Home" %}` — égalité de chaînes
- `{% if price >= 100 %}` — comparaison numérique
- `{% if title contains "Review" %}` — vérification de sous-chaîne
- `{% if tags contains "important" %}` — appartenance à un tableau

### Opérateurs logiques

Combinez des conditions à l'aide d'opérateurs logiques :

| Opérateur | Alternative | Description                                  |
| --------- | ----------- | -------------------------------------------- |
| `and`     | `&&`        | Les deux conditions doivent être vraies       |
| `or`      | \|\|        | Au moins une condition doit être vraie        |
| `not`     | `!`         | Inverse une condition                         |

Exemples :
- `{% if author and published %}` — les deux doivent exister
- `{% if draft or archived %}` — l'une ou l'autre condition
- `{% if not hidden %}` — négation
- `{% if (premium or featured) and published %}` — conditions groupées

### Évaluation de véracité

Lorsqu'une variable est utilisée sans opérateur de comparaison, elle est évaluée selon sa « véracité » :

- `false`, `null`, `undefined`, chaîne vide `""` et `0` sont considérés comme **faux**.
- Les tableaux vides `[]` sont considérés comme **faux**.
- Tout le reste est considéré comme **vrai**.

```twig
{% if content %}
Has content
{% endif %}
```

## Assigner une variable

Utilisez `{% set %}` pour créer ou modifier des variables dans votre modèle :

```twig
{% set slug = title|lower|replace:" ":"-" %}
File: {{slug}}.md
```

Les variables peuvent être définies à partir de :
- Autres variables : `{% set name = author %}`
- Littéraux : `{% set count = 5 %}` ou `{% set label = "Draft" %}`
- Expressions avec filtres : `{% set excerpt = content|truncate:100 %}`
- Résultats de sélecteurs : `{% set comments = selector:.comment %}`

Les variables définies avec `{% set %}` peuvent être utilisées dans la logique de modèle suivante et dans les sorties `{{variable}}`.

## Valeurs de repli

Utilisez l'opérateur `??` pour fournir des valeurs de repli lorsqu'une variable est vide ou indéfinie :

```twig
{{title ?? "Untitled"}}
```

Si `title` est vide, indéfini ou faux, la valeur de repli `"Untitled"` sera utilisée à la place.

C'est un raccourci pour l'instruction `if` équivalente :

```twig
{% if title %}{{title}}{% else %}Untitled{% endif %}
```

### Chaîner les valeurs de repli

Vous pouvez chaîner plusieurs valeurs de repli :

```twig
{{title ?? headline ?? "No title"}}
```

Cela utilisera `title` si disponible, sinon `headline`, sinon la chaîne `"No title"`.

### Avec des filtres

Les filtres ont une priorité plus élevée que `??`, donc les filtres sont appliqués avant la vérification de repli :

```twig
{{title|upper ?? "UNTITLED"}}
```

Cela applique `upper` à `title` d'abord, puis utilise la valeur de repli `"UNTITLED"` si le résultat est vide. Pour appliquer des filtres à la valeur de repli, utilisez des parenthèses ou des expressions séparées :

```twig
{{title ?? "Untitled"|lower}}
```

Cela utilisera `title` si disponible, sinon appliquera `lower` à la valeur de repli, donnant `"untitled"`.

## Boucles

Utilisez `{% for %}` pour itérer sur des tableaux :

```twig
{% for item in schema:author %}
- {{item.name}}
{% endfor %}
```

### Sources de boucle

Vous pouvez itérer sur :
- Des tableaux de schéma : `{% for item in schema:author %}`
- Des résultats de sélecteurs : `{% for comment in selector:.comment %}`
- Des variables définies précédemment : `{% set items = selector:.item %}{% for item in items %}`

### Variables de boucle

À l'intérieur d'une boucle, vous avez accès à un objet `loop` avec les propriétés suivantes :

| Variable | Description |
|----------|-------------|
| `loop.index` | Itération courante (indexé à 1) |
| `loop.index0` | Itération courante (indexé à 0) |
| `loop.first` | `true` si première itération |
| `loop.last` | `true` si dernière itération |
| `loop.length` | Nombre total d'éléments |

```twig
{% for tag in tags %}
{{loop.index}}. {{tag}}
{% if loop.last %} (end of list){% endif %}
{% endfor %}
```

Pour la rétrocompatibilité, vous pouvez également utiliser `item_index` (où `item` est le nom de votre variable d'itération) pour obtenir la position indexée à 0 :

```twig
{% for tag in tags %}
{{tag_index}}. {{tag}}
{% endfor %}
```

### Accéder aux éléments d'un tableau par index

Utilisez la notation entre crochets pour accéder aux éléments d'un tableau par index :

```twig
{{items[0]}}
{{items[loop.index0]}}
```

Cela est utile lorsque vous devez accéder à des éléments de plusieurs tableaux en parallèle :

```twig
{% set transcripts = selector:.transcript-text %}
{% set timestamps = selector:.timestamp %}

{% for line in transcripts %}
{{timestamps[loop.index0]}} - {{line}}
{% endfor %}
```

La notation entre crochets fonctionne également avec les propriétés d'objets :

```twig
{{user["name"]}}
{{data["my-key"]}}
```

### Boucles imbriquées

Les boucles peuvent être imbriquées pour des structures de données complexes :

```twig
{% for section in sections %}
## {{section.title}}
{% for item in section.items %}
- {{item}}
{% endfor %}
{% endfor %}
```

## Combiner la logique

Les conditionnels et les boucles peuvent être combinés :

```twig
{% for item in items %}
{% if item.active %}
- {{item.name}}
{% endif %}
{% endfor %}
```

## Ordre d'évaluation

La logique de modèle est traitée dans l'ordre suivant :

1. **Logique de modèle** — `{% if %}`, `{% for %}`, `{% set %}` et `{{variables}}` sont évalués en premier
2. **Variables de prompt** — Les [[Variables#Variables de prompt|variables de prompt]] comme `{{"summarize this"|prompt}}` sont envoyées à l'interpréteur après que la logique de modèle est terminée

Cela signifie que vous pouvez utiliser la logique de modèle pour construire des prompts dynamiquement, mais les résultats des prompts ne sont pas disponibles pour une utilisation dans les conditionnels ou les boucles.
