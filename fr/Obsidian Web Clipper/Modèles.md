---
permalink: web-clipper/templates
description: >-
  Learn to create templates that capture and organize web page metadata
  automatically with Web Clipper.
aliases:
  - Plugins/Web Clipper/Créer des templates
  - Templates
localized: '2026-03-18'
---
[[Introduction à Obsidian Web Clipper|Web Clipper]] vous permet de créer des modèles qui capturent et organisent automatiquement les métadonnées des pages web. Des exemples de modèles sont disponibles dans le [dépôt clipper-templates](https://github.com/kepano/clipper-templates).

## Créer ou modifier un modèle

Pour **créer** un modèle, allez dans les paramètres de Web Clipper et cliquez sur le bouton **New template** dans la barre latérale. Vous pouvez également **dupliquer** un modèle dans le menu **More** en haut à droite.

Pour **modifier** un modèle, choisissez un modèle dans la barre latérale. Vos modifications seront enregistrées automatiquement.

Les modèles utilisent les [[Variables]] et les [[Filtres]], qui vous permettent d'adapter la façon dont le contenu sera enregistré.

## Importer et exporter des modèles Web Clipper

Pour importer un modèle :

1. Ouvrez l'extension et cliquez sur l'icône d'engrenage **[[Paramètres]]**.
2. Allez sur n'importe quel modèle dans la liste.
3. Cliquez sur **Import** en haut à droite ou glissez-déposez votre ou vos fichiers de modèle `.json` n'importe où dans la zone de modèle.

Pour exporter un modèle, cliquez sur **Export** en haut à droite. Cela téléchargera le fichier `.json` du modèle. Vous pouvez également copier les données du modèle dans votre presse-papiers via le menu **More**.

## Paramètres de modèle

### Comportement

Définissez comment le contenu de Web Clipper sera ajouté dans Obsidian :

- **Créer une nouvelle note**
- **Ajouter à une note existante**, en haut ou en bas
- **Ajouter à la note quotidienne**, en haut ou en bas (nécessite que le module [[Notes quotidiennes|notes quotidiennes]] soit activé)

### Déclencher automatiquement un modèle

Les déclencheurs de modèle vous permettent de sélectionner automatiquement un modèle en fonction de l'URL de la page courante ou des données [schema.org](https://schema.org/). Vous pouvez définir plusieurs règles pour chaque modèle, séparées par un retour à la ligne.

La première correspondance dans votre liste de modèles détermine quel modèle est utilisé. Vous pouvez faire glisser les modèles vers le haut ou vers le bas dans les paramètres de Web Clipper pour modifier l'ordre dans lequel les modèles sont comparés.

#### Correspondance d'URL simple

La correspondance simple déclenche un modèle si l'URL de la page courante *commence par* le motif donné. Par exemple :

- `https://obsidian.md` correspondra à toute URL commençant par ce texte.

#### Correspondance par expression régulière

Vous pouvez déclencher des modèles en fonction de motifs d'URL plus complexes en utilisant des expressions régulières. Entourez votre motif d'expression régulière de barres obliques (`/`). N'oubliez pas d'échapper les caractères spéciaux dans les motifs d'expressions régulières (comme `.` et `/`) avec une barre oblique inversée (`\`). Par exemple :

- `/^https:\/\/www\.imdb\.com\/title\/tt\d+\/reference\/?$/` correspondra à toute page de référence IMDB.

#### Correspondance schema.org

Vous pouvez déclencher des modèles en fonction des données [schema.org](https://schema.org/) présentes sur la page. Utilisez le préfixe `schema:` suivi de la clé de schéma que vous souhaitez faire correspondre. Vous pouvez optionnellement spécifier une valeur attendue. Par exemple :

- `schema:@Recipe` correspondra aux pages dont le type de schéma est « Recipe ».
- `schema:@Recipe.name` correspondra aux pages où `@Recipe.name` est présent.
- `schema:@Recipe.name=Cookie` correspondra aux pages où `@Recipe.name` est « Cookie ».

Les valeurs schema.org peuvent également être utilisées pour [[Variables#Variables schema.org|pré-remplir des données dans les modèles]].

### Contexte de l'interpréteur

Lorsque l'[[Interpréter des pages web|interpréteur]] est activé, vous pouvez utiliser les [[Variables#Variables de prompt|variables de prompt]] pour extraire le contenu des pages en langage naturel. Pour chaque modèle, vous pouvez définir le [[Interpréter des pages web#Contexte|contexte]] auquel l'interpréteur a accès.
