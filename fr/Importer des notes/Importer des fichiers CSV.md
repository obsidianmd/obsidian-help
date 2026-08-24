---
permalink: import/csv
localized: '2026-03-18'
cssclasses:
  - soft-embed
---
Obsidian vous permet d'importer des données depuis des fichiers CSV à l'aide du [[Importer des notes|module Importer]] officiel. C'est utile si vous avez des données tabulaires stockées dans des applications telles qu'Excel, Google Sheets, Numbers, Notion ou Airtable.

L'import CSV génère des fichiers Markdown pour chaque ligne et un fichier [[Introduction aux Bases|Base]] qui affiche tous les fichiers importés sous forme de tableau.

Si vous importez des notes depuis une application spécifique, vous voudrez peut-être d'abord consulter la liste des applications prises en charge par le [[Importer des notes|module Importer]] pour vérifier s'il existe un convertisseur spécifique qui préservera mieux les données que vous migrez.

## Créer des notes à partir de données CSV dans Obsidian

Vous aurez besoin du module officiel Obsidian [[Importer des notes|Importer]], que vous pouvez [installer ici](obsidian://show-plugin?id=obsidian-importer).

1. Ouvrez les **[[Paramètres]]**.
2. Allez dans **Modules complémentaires** et [installez Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activez le module Importer.
4. Ouvrez le module **Importer** en utilisant la palette de commandes ou l'icône du ruban.
5. Sous **Format de fichier**, choisissez **CSV (.csv).**
6. Sélectionnez l'emplacement de votre fichier CSV.
7. Sélectionnez **Importer** pour configurer comment les données de votre fichier CSV seront converties en notes avec des [[Propriétés]].
8. Sélectionnez **Continuer** pour examiner le modèle généré et prévisualiser des exemples à partir de vos lignes.
9. Sélectionnez **Importer** et attendez que l'import soit terminé.

## Configurer comment les champs CSV sont importés

Lors de l'étape de configuration des champs, vous pouvez choisir comment les données sont importées. Importer génère un modèle à partir des en-têtes CSV, utilise la première colonne pour le nom initial de la note et crée une propriété pour chaque colonne.

## Modèles

Utilisez les [[Importer des modèles|modèles d'Importer]] pour configurer entièrement la façon dont vos données sont importées.

Chaque colonne CSV est disponible en utilisant son en-tête. Si une colonne n'a pas d'en-tête, Importer utilise le nom de colonne généré.

Utilisez la notation entre crochets pour gérer correctement les espaces et la ponctuation :

```liquid
{{source["Project name"]}}
{{source["Price ($)"]|yaml}}
```

![[Importer des modèles#Variables]]
