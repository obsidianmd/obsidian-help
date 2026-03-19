---
permalink: import/csv
localized: '2026-03-18'

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
7. Cliquez sur **Importer** pour configurer comment les données de votre fichier CSV seront converties en notes avec des [[Propriétés]].
8. Cliquez sur **Continuer** et attendez que l'import soit terminé.
9. C'est terminé !

## Configurer comment les champs CSV sont importés

Lors de la deuxième étape de l'import CSV, vous pouvez choisir comment les données sont importées à l'aide d'un modèle.

Chaque colonne de votre fichier CSV se voit attribuer une variable appelée `{{nom_colonne}}` qui représente le nom de l'en-tête dans votre fichier. Vous pouvez utiliser cette variable pour définir le titre de la note, son emplacement, son contenu et ses [[Propriétés|propriétés]].
