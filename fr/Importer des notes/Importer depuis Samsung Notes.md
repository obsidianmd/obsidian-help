---
permalink: import/samsung-notes
cssclasses:
  - soft-embed
---
Obsidian vous permet de migrer vos notes depuis Samsung Notes en utilisant le [[Importer|plugin Importer]]. Cela convertit vos notes en fichiers Markdown durables que vous pouvez utiliser avec Obsidian et de nombreuses autres applications.

## Exporter vos notes depuis Samsung Notes

Samsung Notes enregistre chaque note sous forme de fichier Samsung Notes (`.sdocx`).

1. Ouvrez Samsung Notes sur votre téléphone ou tablette.
2. Maintenez appuyé sur une note, puis sélectionnez toutes les notes que vous souhaitez exporter.
3. Appuyez sur **Enregistrer en tant que fichier**, puis choisissez **Fichier Samsung Notes**.
4. Choisissez un dossier et appuyez sur **Enregistrer**.
5. Déplacez les fichiers `.sdocx` vers l'appareil sur lequel vous utilisez Obsidian, par exemple avec un câble USB, Quick Share ou un service de stockage en ligne.

Si vous avez de nombreux fichiers, vous pouvez les placer dans un fichier `.zip` et importer celui-ci à la place. Samsung Notes n'inclut pas ses dossiers dans les fichiers qu'il enregistre, mais Importer conserve les dossiers à l'intérieur du fichier `.zip`. Pour garder vos notes organisées, enregistrez les notes de chaque dossier Samsung Notes dans un dossier du même nom avant de les compresser.

## Importer vos données Samsung Notes dans Obsidian

Vous aurez besoin du module officiel Obsidian [[Importer]], que vous pouvez [installer ici](obsidian://show-plugin?id=obsidian-importer).

1. Ouvrez les **[[Paramètres]]**.
2. Accédez à **Modules complémentaires** et [installez Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activez le module Importer.
4. Ouvrez le module **Importer** en utilisant la palette de commandes ou l'icône du ruban.
5. Sous **Format de fichier**, choisissez **Samsung Notes (.sdocx)**.
6. Sélectionnez vos fichiers `.sdocx`, ou un fichier `.zip` qui les contient.
7. Sélectionnez **Import** pour examiner le modèle généré et prévisualiser des exemples de vos notes.
8. Sélectionnez **Import** à nouveau et attendez que l'importation se termine.

## Limitations

- L'écriture manuscrite et les formes dessinées sont importées sous forme d'image SVG à la fin de la note. Les traits conservent leur forme et leur couleur, mais pas la largeur variable d'un stylet sensible à la pression. Les formes et les lignes sont importées en noir.
- Les zones de texte, les images placées sur la page et les PDF annotés ne sont pas encore importés.
- Les éléments de liste de contrôle sont importés comme non cochés.
- Les couleurs de texte, les polices et les tailles de police ne sont pas conservées.
- Déverrouillez les notes verrouillées dans Samsung Notes avant de les exporter.

## Modèles

Utilisez les [[Importer des modèles|modèles d'Importer]] pour configurer entièrement la manière dont vos données Samsung Notes sont importées.

![[Importer des modèles#Variables]]
