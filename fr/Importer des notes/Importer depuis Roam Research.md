---
permalink: import/roam
localized: '2026-03-18'

---
Obsidian vous permet de migrer facilement vos notes depuis Roam Research en utilisant le [[Importer|module Importer]]. Cela convertira vos données Roam en fichiers Markdown durables, que vous pouvez utiliser avec Obsidian et de nombreuses autres applications.

## Exporter vos données depuis Roam Research

1. Dans Roam Research, cliquez sur **Plus d'actions** ( `•••` ) dans le coin supérieur droit, puis sélectionnez **Export All**.
   
   ![[Roam-exporting.png#interface]]
2. Dans **Export Format**, sélectionnez « JSON », puis cliquez sur **Export All** pour télécharger une archive contenant vos notes.

## Importer vos données Roam Research dans Obsidian

Vous aurez besoin du module officiel Obsidian [[Importer]], que vous pouvez [installer ici](obsidian://show-plugin?id=obsidian-importer).

1. Ouvrez les **[[Paramètres]]**.
2. Allez dans **Modules complémentaires** et [installez Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activez le module Importer.
4. Ouvrez le module **Importer** en utilisant la palette de commandes ou l'icône du ruban.
5. Sous **File format**, choisissez **Roam Research (.json).**
6. Sélectionnez l'emplacement de votre fichier `.json`.
7. Sous **Output folder**, choisissez où vos fichiers doivent être importés.
8. Si vous souhaitez également importer les pièces jointes, activez **Download all attachments**.
9. Cliquez sur **Import** et attendez que l'importation soit terminée.
10. C'est terminé !

![[Roam-Importer-importing.png]]
