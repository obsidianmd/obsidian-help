---
permalink: plugins/templates
cssclasses:
  - soft-embed
description: Modèles est un module principal qui vous permet d'insérer des extraits de texte prédéfinis dans votre note active.
publish: true
mobile: true
aliases:
  - Modules/Templates
  - Plugins/Templates
localized: '2026-03-18'
---
Modèles est un [[Modules principaux|module principal]] qui vous permet d'insérer des extraits de texte prédéfinis dans votre note active.

## Définir votre dossier de modèles

1. Dans le coin inférieur gauche, sélectionnez **[[Paramètres]]** ![[lucide-cog.svg#icon]].
2. Sous **Modules principaux → Modèles → Emplacement du dossier de modèles**, entrez le dossier contenant vos modèles.

## Variables de modèle

Vous pouvez ajouter des informations dynamiques à vos modèles à l'aide de _variables de modèle_. Lorsque vous insérez un modèle contenant une variable de modèle, Modèles la remplace par sa valeur correspondante.

| Variable    | Description                                              |
|-------------|----------------------------------------------------------|
| `{{title}}` | Titre de la note active.                                 |
| `{{date}}`  | Date du jour. **Format par défaut :** `YYYY-MM-DD`.     |
| `{{time}}`  | Heure actuelle. **Format par défaut :** `HH:mm`.        |

`{{date}}` et `{{time}}` vous permettent tous deux de modifier le format par défaut à l'aide d'une _chaîne de format_.

Pour définir une chaîne de format, ajoutez deux-points (`:`) suivis d'une chaîne de [jetons de format Moment.js](https://momentjs.com/docs/#/displaying/format/), par exemple `{{date:YYYY-MM-DD}}`.

Vous pouvez utiliser `{{date}}` et `{{time}}` de la même manière avec des chaînes de format, par exemple `{{time:YYYY-MM-DD}}`.

Vous pouvez modifier les formats de date et d'heure par défaut sous **[[Paramètres]] → Modules principaux → Modèles → Format de date** et **[[Paramètres]] → Modules principaux → Modèles → Format d'heure**. ^template-settings-date-time-formatting

> [!tip]- Utiliser les variables de date et d'heure dans d'autres modules
> Vous pouvez également utiliser les variables de modèle `{{date}}` et `{{time}}` dans les modules [[Notes quotidiennes]] et [[Créateur de note unique]].

## Créer un modèle

Dans le [[#Définir votre dossier de modèles|dossier de modèles]], [[Gérer les notes#Créer une nouvelle note|créez une note]] contenant le texte que vous souhaitez faire apparaître lorsque vous utilisez le modèle. Vous pouvez utiliser des [[#Variables de modèle|variables de modèle]] pour du texte dynamique comme la date actuelle.

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

> [!warning]+ Modifier les modèles en mode source
> En [[Vues et mode d'édition#Aperçu en direct|aperçu en direct]], le panneau **Propriétés dans les documents** peut écraser les variables de modèle qui ne sont pas entre guillemets.
>
> Pour éviter cela, modifiez les modèles en [[Vues et mode d'édition#Mode source|mode source]], ou définissez **[[Paramètres]] → Éditeur → [[Paramètres#Propriétés dans les documents|Propriétés dans les documents]]** sur **Source**.

## Insérer un modèle dans la note active

> [!todo] [[#Définir votre dossier de modèles]] avant d'insérer un modèle.

1. Dans le ruban, sélectionnez **Insérer un modèle**.
2. Sélectionnez le modèle à insérer à la position du curseur dans la note active.

Pour insérer un modèle à l'aide de la [[Palette de commandes]] ou d'[[Raccourcis clavier#Définir un raccourci clavier|un raccourci clavier personnalisé]], utilisez la commande `Modèles : Insérer le modèle`.

Le contenu du modèle est inséré à la position actuelle de votre curseur. Si votre curseur n'est pas dans le corps de la note, le contenu est inséré à la dernière position de votre curseur.

### Propriétés de modèle

![[Propriétés#^templates-properties]]

## Insérer la date et l'heure actuelles dans la note active

Utilisez les commandes `Modèles : Insérer la date actuelle` et `Modèles : Insérer l'heure actuelle` pour insérer la date et l'heure actuelles à la position actuelle de votre curseur. Comme la commande `Insérer le modèle`, vous pouvez également les exécuter avec la palette de commandes ou un raccourci clavier personnalisé.

La date et l'heure insérées utilisent le [[#^template-settings-date-time-formatting|formatage défini dans les paramètres du module]].
