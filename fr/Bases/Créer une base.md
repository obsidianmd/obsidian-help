---
permalink: bases/create-base
localized: '2026-03-18'
aliases:
  - Create a base
---
Les [[Introduction aux Bases|Bases]] vous permettent de créer des vues de type base de données de vos notes. Voici comment créer une base et l'intégrer dans une note. Chaque base peut avoir une ou plusieurs [[Vues|vues]] pour afficher les informations de différentes manières.

## Créer une nouvelle base

**Palette de commandes :**

1. Ouvrez la **palette de commandes**.
2. Sélectionnez
	- **Bases: Create new base** pour créer une base dans le même dossier que le fichier actif.
	- **Bases: Insert new base** pour créer une base et l'intégrer dans le fichier actuel.

**Explorateur de fichiers :**

1. Dans l'explorateur de fichiers, faites un clic droit sur le dossier dans lequel vous souhaitez créer la base.
2. Sélectionnez **New base**.

**Ruban :**

- Dans le menu vertical du ruban, sélectionnez **Create new base** pour créer une base dans le même dossier que le fichier actif.

## Intégrer une base

### Intégrer un fichier base

Vous pouvez intégrer des fichiers base dans [[Incorporer des fichiers|n'importe quel autre fichier]] en utilisant la syntaxe `![[Fichier.base]]`. Pour spécifier la vue par défaut, utilisez `![[Fichier.base#Vue]]`.

### Intégrer une base sous forme de bloc de code

Les bases peuvent également être intégrées directement dans une note en utilisant un bloc de code `base` et la [[Syntaxe des Bases|syntaxe des bases]].

~~~yaml
```base
filters:
  and:
    - file.hasTag("example")
views:
  - type: table
    name: Table
```
~~~
