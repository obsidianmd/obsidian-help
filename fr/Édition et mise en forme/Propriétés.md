---
permalink: properties
cssclasses:
  - soft-embed
description: >-
  Properties allow you to organize information about a note. Properties contain
  structured data such as text, links, dates, checkboxes, and numbers.
publish: true
mobile: false
localized: '2026-03-18'
aliases:
  - Properties
---
Les propriétés vous permettent d'organiser les informations relatives à une note. Les propriétés contiennent des données structurées telles que du texte, des liens, des dates, des cases à cocher et des nombres. Les propriétés peuvent également être utilisées en combinaison avec des [[Modules complémentaires]] capables d'exploiter vos données structurées.

## Ajouter des propriétés à une note

Il existe plusieurs façons d'ajouter une propriété à une note :

- Utiliser la [[Palette de commandes|commande]] **Ajouter une propriété de fichier**.
- Utiliser le [[Raccourcis clavier|raccourci clavier]] **`Cmd/Ctrl+;`**.
- Choisir **Ajouter une propriété de fichier** dans le menu **Plus d'actions** (accessible via l'icône des trois points ou en faisant un clic droit sur l'onglet).
- Taper `---` tout au début d'un fichier.

Une fois que vous avez ajouté une propriété, une ligne apparaît en haut du fichier avec deux champs : le _nom_ de la propriété et la _valeur_ de la propriété.

Pour le nom, vous pouvez choisir ce que vous voulez. Obsidian fournit plusieurs propriétés par défaut : `tags`, `cssclasses` et `aliases`.

Une fois le nom de la propriété choisi, vous pouvez lui attribuer une valeur.

### Types de propriétés

En plus d'un nom et d'une valeur, les propriétés ont également un _type_. Le type d'une propriété détermine le genre de valeurs qu'elle peut stocker et la façon dont Obsidian les traite. Pour changer le type d'une propriété, cliquez sur l'icône de type à côté du nom de la propriété et sélectionnez une option différente. Vous pouvez également gérer les types de propriétés à l'aide du module principal [[Vue des propriétés]].

Obsidian prend en charge les types de propriétés suivants :

- **[[#Texte]]**
- **[[#Liste]]**
- **[[#Nombre]]**
- **[[#Case à cocher]]**
- **[[#Date]]**
- **[[#Date et heure]]**
- **[[#Mots-clés]]**

Une fois qu'un type de propriété est attribué à un nom de propriété, toutes les propriétés portant ce nom dans votre coffre utiliseront le même type.

## Utilisations avancées

### Rechercher des propriétés

Les propriétés disposent de leur propre [[Rechercher|syntaxe de recherche]] que vous pouvez utiliser avec d'autres termes et opérateurs de recherche. [[Rechercher#Rechercher des propriétés|Voir la syntaxe de recherche pour les propriétés]].

### Modèles

Vous pouvez ajouter des propriétés aux [[Plugins/Modèles|Modèles]].

Lorsque vous insérez un modèle dans la note active, toutes les propriétés du modèle sont ajoutées à la note. Obsidian fusionne également toutes les propriétés existantes dans votre note avec les propriétés du modèle. ^templates-properties

### Renommer des propriétés

Vous pouvez renommer une propriété en faisant un clic droit dessus dans la [[Vue des propriétés|vue de toutes les propriétés]].

### Modes d'affichage

Vous pouvez changer la façon dont les propriétés sont affichées dans votre note en allant dans **[[Paramètres]] → Éditeur → Propriétés dans le document**. Les options sont :

- **Visible** (par défaut) – affiche les propriétés en haut de la note, s'il y en a.
- **Masqué** – masque les propriétés, qui peuvent toujours être affichées dans la barre latérale via la [[Vue des propriétés]].
- **Source** – affiche les propriétés au format YAML en texte brut.

### Extraits CSS

Vous pouvez utiliser les [[Extraits CSS]] pour modifier l'apparence de notes spécifiques.

### Fonctionnalités non prises en charge

Quelques fonctionnalités ne sont actuellement pas prises en charge dans Obsidian :

- **Propriétés imbriquées** : Pour visualiser les propriétés imbriquées, nous recommandons d'utiliser le [[Vues et mode d'édition#Mode source|mode source]].
- **Modification en masse des propriétés** : Pour une modification en masse approfondie en dehors de la [[Vue des propriétés]], nous recommandons d'utiliser des outils de modification en masse comme VSCode, des scripts et des modules complémentaires.
- **Markdown dans les propriétés** : C'est une limitation intentionnelle car les propriétés sont conçues pour de petites informations atomiques lisibles à la fois par les humains et les machines.

## Raccourcis clavier

### Ajouter une propriété

| Action | Raccourci clavier |
|---|---|
|Ajouter une nouvelle propriété|`Cmd + ;`|

### Naviguer entre les propriétés

Lorsqu'une propriété est sélectionnée

| Action | Raccourci clavier |
|---|---|
|Sélectionner la propriété suivante|`Flèche bas` ou `Tab`|
|Sélectionner la propriété précédente|`Flèche haut` ou `Maj+Tab`|
|Aller à l'éditeur|`Alt+Flèche bas`|

### Sélectionner des propriétés

| Action | Raccourci clavier |
|---|---|
|Étendre la sélection vers le haut|`Maj+Flèche haut`|
|Étendre la sélection vers le bas|`Maj+Flèche bas`|
|Tout sélectionner|`Cmd+A`|

### Modifier des propriétés

| Action | Raccourci clavier |
|---|---|
|Modifier le nom de la propriété|`Flèche gauche`|
|Modifier la valeur de la propriété|`Flèche droite`|
|Sélectionner la propriété|`Échap`|
|Supprimer la propriété|`Cmd+Retour arrière`<br><br>si des propriétés sont sélectionnées, la sélection sera supprimée à la place.|
|Annuler|`Cmd+Z`|
|Rétablir|`Cmd+Maj+Z`|

### Vim (avancé)

| Action | Raccourci clavier |
|---|---|
|Descendre|`j`|
|Monter|`k`|
|Sélectionner la clé|`h`|
|Sélectionner la valeur|`l`|
|Sélectionner la valeur (curseur à la fin)|`A`|
|Sélectionner la valeur (curseur au début)|`i`|
|Créer une nouvelle propriété|`o`|

## Format des propriétés

Les propriétés sont stockées au format [YAML](https://yaml.org/) en haut du fichier. YAML est un format populaire facile à lire pour les humains comme pour les ordinateurs.

Les noms de propriétés sont séparés de leurs valeurs par un deux-points suivi d'un espace :

```yaml
---
name: value
---
```

Bien que l'ordre des paires nom-valeur n'ait pas d'importance, chaque nom doit être unique au sein d'une note. Par exemple, vous ne pouvez pas avoir plus d'une propriété `tags`.

Les valeurs peuvent être du [[#Texte|texte]], des [[#Nombre|nombres]], des [[#Case à cocher|cases à cocher]], des [[#Date|dates]], des [[#Date et heure|dates et heures]] ou des [[#Liste|listes]].

### Texte

Les propriétés de type texte contiennent une seule ligne de texte. La mise en forme Markdown n'est pas rendue dans les propriétés de type texte. Les hashtags ne créent pas de mots-clés lorsqu'ils sont utilisés dans les propriétés de type texte.

Les propriétés de type texte peuvent contenir des URL et des [[Liens internes]] en utilisant la syntaxe `[[Lien]]`. Les [[Liens internes]] dans les propriétés de type texte doivent être entourés de guillemets. Obsidian les ajoutera automatiquement si vous saisissez manuellement des liens internes dans les propriétés, mais veillez à les ajouter lorsque vous utilisez des modules de modèles.

```yaml
---
title: A New Hope
link: "[[Episode IV]]"
url: https://www.example.com
---
```

### Liste

Les propriétés de type liste contiennent plusieurs valeurs. Chaque valeur d'une liste apparaît sur sa propre ligne, précédée d'un tiret (-) et d'un espace.

Les valeurs de liste peuvent contenir du texte, des nombres et des [[Liens internes]]. Lorsque vous utilisez des [[Liens internes]] dans les propriétés de type liste, entourez-les de guillemets.

```yaml
---
cast: 
  - Mark Hamill
  - Harrison Ford
  - Carrie Fisher
links:
  - "[[Link]]" 
  - "[[Link2]]"
---
```

### Nombre

Les propriétés de type nombre doivent toujours être un nombre littéral, pas une expression avec des opérateurs. Les entiers et les décimaux sont tous deux acceptés.

```yaml
---
year: 1977
pie: 3.14
---
```

### Case à cocher

Les propriétés de type case à cocher sont soit `true`, soit `false`. En aperçu en direct, cela s'affiche sous forme de case à cocher.

```yaml
---
favorite: true
reply: false
last: # Valeur indéterminée ; souvent traitée comme false
```

### Date

Les propriétés de type date sont stockées dans le format suivant :

```yaml
---
date: 2020-08-21
---
```

Le sélecteur de date suit le format de date et d'heure par défaut de votre système d'exploitation. Vous pouvez le modifier dans les préférences de votre système :

> [!info]- Windows
> **[[Paramètres]] → Heure et langue → Langue et région → Format régional → Modifier les formats**
> 
> ![[Windows-OS-DateTime.png#interface]]

> [!info]- Mac OS
> **Préférences Système → Langue et région → Format de date**
> 
> ![[Mac-OS-DateTime.png|450]]

Avec le module [[Notes quotidiennes]] activé, la propriété de date fonctionnera en plus comme un lien interne vers la note quotidienne correspondant à cette date.

![[Notes quotidiennes#^daily-notes-date]]

### Date et heure

Les propriétés de type date et heure incluent à la fois une date et une heure spécifique, stockées dans le format suivant :

```yaml
---
time: 2020-08-21T10:30:00
---
```

Comme pour les [[#Date|propriétés de type date]], le sélecteur de date et d'heure suit le format par défaut de votre système d'exploitation. Vous pouvez le modifier dans les préférences de votre système.

### Mots-clés

Les propriétés de type mots-clés sont un type de propriété spécial utilisé exclusivement par la propriété `tags`. Ce type de propriété ne peut pas être attribué à d'autres propriétés.

Les propriétés de type mots-clés sont formatées sous forme de liste, chaque mot-clé sur sa propre ligne précédé d'un tiret (-) et d'un espace.

```yaml
---
tags: 
  - journal
  - personal
  - draft
---
```

La propriété `tags` est l'une des [[#Propriétés par défaut]] d'Obsidian. Consultez [[Mots-clés]] pour plus d'informations sur l'utilisation des mots-clés dans Obsidian.

### Propriétés JSON

Bien que nous recommandions d'utiliser YAML pour définir les propriétés, vous pouvez également les définir en utilisant [JSON](https://www.json.org/) :

```json
---
{
  "tags": ["journal"],
  "publish": false
}
---
```

Notez que le bloc JSON sera lu, interprété et enregistré en YAML.

## Propriétés par défaut

Obsidian est fourni avec un ensemble de propriétés par défaut :

| Propriété    | Type  | Description                                                           |
| ------------ | ----- | --------------------------------------------------------------------- |
| `tags`       | Liste | Voir [[Editing and formatting/Tags\|Mots-clés]].                     |
| `aliases`    | Liste | Voir [[Alias]].                                                      |
| `cssclasses` | Liste | Permet de styliser des notes individuelles à l'aide d'[[Extraits CSS]]. |

### Propriétés pour Obsidian Publish

Les propriétés par défaut suivantes peuvent être utilisées avec [[Introduction à Obsidian Publish|Obsidian Publish]] :

| Propriété     | Description                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `publish`     | Voir [[Publier votre contenu#Sélectionner automatiquement les notes à publier\|Sélectionner automatiquement les notes à publier]]. |
| `permalink`   | Voir [[Permaliens\|Permaliens]].                                                                                        |
| `description` | Voir [[Aperçus de liens sur les réseaux sociaux#Description\|Description]].                                              |
| `image`       | Voir [[Aperçus de liens sur les réseaux sociaux#Image\|Image]].                                                          |
| `cover`       | Voir [[Aperçus de liens sur les réseaux sociaux#Image\|Image]].                                                          |

### Propriétés obsolètes

Ces propriétés ont été rendues obsolètes dans Obsidian 1.4 et doivent être remplacées par leurs équivalents modernes. Leur prise en charge en tant que [[#Propriétés par défaut]] est abandonnée dans Obsidian 1.9.

| Propriété  | Description                              |
| ---------- | ---------------------------------------- |
| `tag`      | Alias obsolète pour `tags`.              |
| `alias`    | Alias obsolète pour `aliases`.           |
| `cssclass` | Alias obsolète pour `cssclasses`.        |

> [!tip] Si vous devez convertir les fichiers de votre coffre au format des [[#Propriétés par défaut]], vous pouvez utiliser l'[[Importateur depuis des fichiers Markdown]] pour modifier votre coffre en masse.
