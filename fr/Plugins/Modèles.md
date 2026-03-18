---
permalink: plugins/templates
cssclasses:
  - soft-embed
description: >-
  Modèles est un plugin principal qui vous permet d'insérer des extraits de
  texte prédéfinis dans votre note active.
publish: true
mobile: true
aliases:
  - Plugins/Templates
  - Templates
localized: '2026-03-18'
---
Modèles est un [[Modules principaux|module principal]] qui vous permet d'insérer des extraits de texte prédéfinis dans votre note active.

## Définir votre dossier de modèles

1. Dans le coin inférieur gauche, cliquez sur **[[Paramètres]]** ( ![[lucide-cog.svg#icon]] ).
2. Sous **Modules principaux → Modèles → Emplacement du dossier de modèles**, saisissez le dossier contenant vos modèles.

## Variables de modèle

Vous pouvez ajouter des informations dynamiques à vos modèles en utilisant des _variables de modèle_. Lorsque vous insérez un modèle contenant une variable de modèle, Modèles la remplace par sa valeur correspondante.

| Variable    | Description                                              |
|-------------|----------------------------------------------------------|
| `{{title}}` | Titre de la note active.                                 |
| `{{date}}`  | Date du jour. **Format par défaut :** `YYYY-MM-DD`.     |
| `{{time}}`  | Heure actuelle. **Format par défaut :** `HH:mm`.        |

`{{date}}` et `{{time}}` vous permettent tous deux de modifier le format par défaut à l'aide d'une _chaîne de format_.

Pour définir une chaîne de format, ajoutez deux-points (`:`) suivis d'une chaîne de [jetons de format Moment.js](https://momentjs.com/docs/#/displaying/format/), par exemple `{{date:YYYY-MM-DD}}`.

Vous pouvez utiliser `{{date}}` et `{{time}}` de manière interchangeable avec des chaînes de format, par exemple `{{time:YYYY-MM-DD}}`.

Vous pouvez modifier les formats de date et d'heure par défaut sous **[[Paramètres]] → Modèles → Format de date** et **[[Paramètres]] → Modèles → Format d'heure**.

> [!tip]
> Vous pouvez également utiliser les variables de modèle `{{date}}` et `{{time}}` dans les modules [[Notes quotidiennes]] et [[Créateur de note unique]].

## Créer un modèle

Dans le [[#Définir votre dossier de modèles|dossier de modèles]], [[Gérer les notes#Créer une nouvelle note|créez une note]] contenant le texte que vous souhaitez voir apparaître lorsque vous utilisez le modèle. Vous pouvez utiliser des [[#Variables de modèle|variables de modèle]] pour du texte dynamique comme la date du jour.

Par exemple, voici un modèle pour des notes d'étude :

```markdown
---
topic: 
date: "{{date}}"
course: 
tags:
  - studies
---

# {{title}}

## Concepts clés


## Détails importants


## Exemples


## Questions
- 

## Résumé


## Sujets connexes
- [[]]
```

## Insérer un modèle dans la note active

**Important :** Pour insérer un modèle, vous devez d'abord [[#Définir votre dossier de modèles]].

1. Dans le ruban, cliquez sur **Insérer un modèle**.
2. Sélectionnez le modèle à insérer à la position du curseur dans la note active.

## Propriétés de modèle

![[Propriétés#^templates-properties]]
