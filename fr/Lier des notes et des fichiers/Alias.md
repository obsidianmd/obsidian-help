---
permalink: aliases
cssclasses:
  - soft-embed
localized: '2026-03-18'
aliases:
  - Aliases
---
Si vous souhaitez référencer un fichier en utilisant différents noms, envisagez d'ajouter des _alias_ à la note. Un alias est un nom alternatif pour une note.

Utilisez les alias pour des choses comme les acronymes, les surnoms, ou pour faire référence à une note dans une langue différente.

Si vous souhaitez uniquement changer l'apparence d'un lien à un seul endroit, voyez plutôt comment [[Liens internes#Modifier le texte affiché du lien|Modifier le texte affiché du lien]].

![[Liens internes#^callout-internal-links-link-text]]

## Ajouter un alias à une note

Pour ajouter un alias à une note, ajoutez la propriété `aliases` dans les [[Propriétés]] de la note. Les alias doivent toujours être formatés sous forme de liste en YAML.

```md
---
aliases:
  - Doggo
  - Woofer
  - Yapper
---

# Dog
```

## Lier une note en utilisant un alias

Pour lier une note en utilisant un alias :

1. Commencez à taper l'alias dans un [[Liens internes|lien interne]]. Tout alias apparaît dans la liste de suggestions, avec une icône de flèche courbée à côté.
2. Appuyez sur `Entrée` pour sélectionner l'alias.

Obsidian crée le lien avec l'alias comme texte d'affichage personnalisé, par exemple `[[Artificial Intelligence|AI]]`.

> [!note]
> Plutôt que d'utiliser simplement l'alias comme destination du lien (`[[AI]]`), Obsidian utilise le format de lien `[[Artificial Intelligence|AI]]` pour garantir l'interopérabilité avec d'autres applications utilisant le format lien wiki.

## Trouver les mentions non liées pour un alias

En utilisant les [[Rétroliens]], vous pouvez trouver les mentions non liées des alias.

Par exemple, après avoir défini « AI » comme alias pour « Artificial intelligence », vous pouvez voir les mentions de « AI » dans d'autres notes.

Si vous liez une mention non liée à un alias, Obsidian transforme la mention en [[Liens internes|lien interne]] avec l'alias comme texte d'affichage.
