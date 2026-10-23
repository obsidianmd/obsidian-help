---
permalink: import/html
localized: '2026-03-18'
cssclasses:
  - soft-embed
---
Obsidian vous permet d'importer facilement des fichiers HTML individuels et des dossiers entiers de fichiers HTML à l'aide du [[Importer|module Importer]] officiel. Cela est utile si vous souhaitez enregistrer des sites web entiers au format [[Obsidian Flavored Markdown|Markdown]], ou si vous souhaitez importer des données depuis un outil qui exporte en HTML.

Si vous importez des notes depuis une application spécifique, vous pouvez d'abord consulter la liste des applications prises en charge par le [[Importer|module Importer]] pour vérifier s'il existe un convertisseur spécifique qui préservera mieux les données que vous migrez.

## Importer des données HTML dans Obsidian

Vous aurez besoin du module officiel Obsidian [[Importer]], que vous pouvez [installer ici](obsidian://show-plugin?id=obsidian-importer).

1. Ouvrez les **[[Paramètres]]**.
2. Allez dans **Modules complémentaires** et [installez Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activez le module Importer.
4. Ouvrez le module **Importer** en utilisant la palette de commandes ou l'icône du ruban.
5. Sous **Format de fichier**, choisissez **HTML (.html).**
6. Sélectionnez l'emplacement de vos fichiers ou dossiers HTML.
7. Sélectionnez **Importer** pour examiner le modèle généré et prévisualiser des exemples à partir de vos fichiers.
8. Sélectionnez **Importer** à nouveau et attendez que l'importation soit terminée.

### Paramètres d'importation

- **Limite de taille des pièces jointes** : ignore l'importation des pièces jointes dépassant la taille spécifiée.
- **Taille minimale des images** : ignore l'importation des images dont l'une des dimensions est inférieure à la taille spécifiée. Peut être utilisé pour ignorer les icônes et les logos.

## Modèles

Utilisez les [[Importer des modèles|modèles Importer]] pour configurer entièrement la façon dont vos données sont importées.

![[Importer des modèles#Variables]]

De plus, les importations HTML fournissent de nombreuses variables identiques à celles du [[Introduction à Obsidian Web Clipper|Web Clipper]] :

| Variable | Description |
| --- | --- |
| `{{author}}` | Auteur de la page. |
| `{{contentHtml}}` | Contenu extrait de la page au format HTML. |
| `{{description}}` | Description ou extrait de la page. |
| `{{domain}}` | Domaine de la page. |
| `{{favicon}}` | URL du favicon. |
| `{{fullHtml}}` | HTML non traité de la page complète. |
| `{{image}}` | URL de l'image de partage social. |
| `{{language}}` | Langue de la page. |
| `{{published}}` | Date de publication, qui peut être formatée avec le filtre `date`. |
| `{{site}}` | Nom du site ou de l'éditeur. |
| `{{url}}` | URL source trouvée dans le document importé, lorsqu'elle est disponible. |
| `{{words}}` | Nombre de mots. |
