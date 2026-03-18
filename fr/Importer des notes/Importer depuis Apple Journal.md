---
permalink: import/apple-journal
localized: '2026-03-18'
aliases:
  - Import from Apple Journal
---
Obsidian vous permet de migrer facilement vos entrées de journal depuis Apple Journal en utilisant le [[Importer|module Importer]].
Cela convertira vos journaux en fichiers Markdown durables, que vous pouvez utiliser avec Obsidian et de nombreuses autres applications.

## Exporter vos données depuis Apple Journal

### Sur iPhone
Suivez les instructions pour [Imprimer et exporter des entrées dans Journal sur iPhone](https://support.apple.com/guide/iphone/print-and-export-entries-iph4cad323fe/ios#iph1edf66806) :

1. Ouvrez l'application Journal sur votre iPhone.
2. Choisissez un journal ou appuyez sur Toutes les entrées.
3. Appuyez sur le bouton Plus en haut de l'écran.
4. Appuyez sur Exporter, puis choisissez Exporter.
5. Choisissez un emplacement, puis appuyez sur le bouton Sélectionné.

### Sur Mac (Tahoe)
Suivez les instructions pour [Imprimer et exporter des entrées dans Journal sur Mac](https://support.apple.com/guide/journal/print-and-export-entries-dev883fc2329/mac#devc24a8f09a) :

1. Ouvrez l'application Journal sur votre Mac.
2. Allez dans Fichier > Exporter, puis choisissez Exporter.

## Importer les données Apple Journal dans Obsidian

Vous aurez besoin du module officiel Obsidian [[Importer]], que vous pouvez [installer ici](obsidian://show-plugin?id=obsidian-importer).

1. Ouvrez les **[[Paramètres]]**.
2. Allez dans **Modules complémentaires** et [installez Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activez le module Importer.
4. Ouvrez le module **Importer** en utilisant la palette de commandes ou l'icône du ruban.
5. Sous **Format de fichier**, choisissez **Apple Journal (HTML Export)**.
6. Dans **Fichiers à importer**, sélectionnez le dossier contenant les données exportées, généralement _AppleJournalEntries_, ou des fichiers individuels depuis _Entries_.
7. Vérifiez et modifiez les autres options d'importation.
8. Sélectionnez Importer et attendez que l'importation soit terminée.
9. C'est terminé !


## Contenu pris en charge

Le module peut importer les métadonnées de Journal en tant que métadonnées, comme _state-of-mind_, _contacts_, _location_ et _workout-route_.

> [!note]
> Le module n'importe pas les ressources. Les pièces jointes comme les photos, vidéos et enregistrements audio sont ignorées.
