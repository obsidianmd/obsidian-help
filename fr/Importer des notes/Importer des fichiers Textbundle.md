---
permalink: import/textbundle
localized: '2026-03-18'

---
Obsidian vous permet d'importer facilement des fichiers [Textbundle](https://textbundle.org/) à l'aide du [[Importer|module Importer]] officiel.

Si vous importez des notes depuis une application spécifique, vous pouvez d'abord consulter la liste des applications prises en charge par le [[Importer|module Importer]] pour vérifier s'il existe un convertisseur spécifique qui préservera mieux les données que vous migrez.

Le format Textbundle regroupe du texte Markdown et toutes les images référencées dans un seul fichier, offrant un moyen plus fluide de sortir d'une application sandboxée. L'export Textbundle est pris en charge par [de nombreuses applications](https://textbundle.org/), notamment Agenda, Craft, Taio, Ulysses, Zettlr, et bien d'autres.

## Importer des fichiers Textbundle dans Obsidian

Vous aurez besoin du module officiel Obsidian [[Importer]], que vous pouvez [installer ici](obsidian://show-plugin?id=obsidian-importer).

1. Ouvrez les **[[Paramètres]]**.
2. Allez dans **Modules complémentaires** et [installez Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activez le module Importer.
4. Ouvrez le module **Importer** en utilisant la palette de commandes ou l'icône du ruban.
5. Sous **Format de fichier**, choisissez **Textbundle (.textbundle, .textpack).**
6. Sélectionnez l'emplacement de vos fichiers Textbundle ou Textpack. Les fichiers zip sont également pris en charge.
7. Cliquez sur **Importer** et attendez que l'importation soit terminée.
8. C'est terminé !

## Dépannage

### Aucun fichier n'est sélectionné pour l'importation

L'importation Textbundle ne peut importer qu'un seul fichier Textbundle à la fois, et uniquement sur les appareils Mac. À la place, vous pouvez compresser tous les fichiers Textbundle que vous souhaitez importer dans un seul fichier .zip et importer celui-ci depuis n'importe quel appareil.
