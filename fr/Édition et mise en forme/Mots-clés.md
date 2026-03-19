---
permalink: tags
localized: '2026-03-18'

---
Les mots-clés sont des termes ou des sujets qui vous aident à retrouver rapidement les notes que vous cherchez.

## Ajouter un mot-clé à une note

Pour créer un mot-clé, saisissez un symbole dièse (`#`) dans l'éditeur, suivi d'un terme. Par exemple, `#réunion`.

Vous pouvez également ajouter des mots-clés à l'aide de la [[Propriétés|propriété]] `tags`. Les mots-clés en YAML doivent toujours être formatés sous forme de liste :

```yaml
---
tags:
  - recipe
  - cooking
---
```

## Trouver des notes à l'aide de mots-clés

Pour trouver des notes à l'aide du module [[Rechercher]], utilisez l'[[Rechercher#Opérateurs de recherche|opérateur de recherche]] `tag` dans votre terme de recherche, par exemple `tag:#réunion`.

Vous pouvez également rechercher des mots-clés en cliquant dessus dans vos notes.

Pour trouver des notes à l'aide du module [[Volet de mots-clés]], sélectionnez **Tags: Show tags** dans la [[Palette de commandes]], puis sélectionnez le mot-clé que vous souhaitez rechercher.

## Mots-clés imbriqués

Les mots-clés imbriqués définissent des hiérarchies de mots-clés qui facilitent la recherche et le filtrage de mots-clés connexes.

Créez des mots-clés imbriqués en utilisant des barres obliques (`/`) dans le nom du mot-clé, par exemple `#inbox/à-lire` et `#inbox/en-cours`.

- Dans [[Rechercher]], `tag:inbox` correspondra à `#inbox` ainsi qu'à tous les mots-clés imbriqués tels que `#inbox/à-lire`.
- Dans le [[Volet de mots-clés]], les mots-clés imbriqués sont affichés comme appartenant à leur mot-clé parent.
- Dans les [[Introduction aux Bases|Bases]], les mots-clés imbriqués sont reconnus par la fonction [[Fonctions#hasTag|`hasTag`]], ainsi `file.hasTag("a")` correspondra à la fois à `#a` et `#a/b`.

## Format des mots-clés

Vous pouvez utiliser n'importe lequel des caractères suivants dans vos mots-clés :

- Lettres alphabétiques
- Chiffres
- Tiret bas (`_`)
- Tiret (`-`)
- Barre oblique (`/`) pour les [[#Mots-clés imbriqués]]

Les mots-clés doivent contenir au moins un caractère non numérique. Par exemple, #1984 n'est pas un mot-clé valide, mais #y1984 l'est.

Les mots-clés ne sont pas sensibles à la casse. Par exemple, #tag et #TAG seront traités comme identiques.

> [!note]
> Les mots-clés s'affichent avec la casse utilisée lors de leur première création dans le [[Volet de mots-clés]].
> Par exemple, créer #Tag puis #TAG affichera #Tag pour les deux.

Les mots-clés ne peuvent pas contenir d'espaces. Pour séparer deux mots ou plus, vous pouvez utiliser les formats suivants :

- #camelCase
- #PascalCase
- #snake_case
- #kebab-case
