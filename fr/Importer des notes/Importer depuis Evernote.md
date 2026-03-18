---
permalink: import/evernote
localized: '2026-03-18'
aliases:
  - Import from Evernote
---
Obsidian vous permet de migrer facilement vos notes depuis Evernote en utilisant le [[Importer|plugin Importer]]. Celui-ci convertira vos données Evernote en fichiers Markdown durables, que vous pourrez utiliser avec Obsidian et de nombreuses autres applications.

## Exporter vos données depuis Evernote

Obsidian utilise le format d'export d'Evernote, les fichiers `.enex`.

Vous pouvez trouver les instructions d'Evernote pour exporter vos données [sur le site web d'Evernote](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML). Cette méthode vous permet d'exporter des carnets entiers dans le client de bureau.

1. Accédez à l'écran des carnets.
2. Cliquez sur **Plus d'actions** ( `•••` ) et choisissez **Exporter le carnet...**
3. Sélectionnez **ENEX** comme format de fichier.
3. Choisissez un emplacement pour votre fichier `.enex` exporté.

## Importer vos données Evernote dans Obsidian

Vous aurez besoin du module officiel Obsidian [[Importer]], que vous pouvez [installer ici](obsidian://show-plugin?id=obsidian-importer).

1. Ouvrez les **[[Paramètres]]**.
2. Allez dans **Modules complémentaires** et [installez Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activez le module Importer.
4. Ouvrez le module **Importer** en utilisant la palette de commandes ou l'icône du ruban.
5. Sous **Format de fichier**, choisissez **Evernote (.enex)**.
6. Sélectionnez l'emplacement de votre fichier de sauvegarde Evernote.
7. Cliquez sur **Importer** et attendez que l'importation soit terminée.
8. C'est terminé !

## Options d'importation avancées

### Maintenir la hiérarchie des mots-clés

L'export Evernote ne conserve pas la hiérarchie des mots-clés. Pour conserver votre hiérarchie de mots-clés, vous pouvez « aplatir » les mots-clés séparés par « / ». Par exemple, en supposant que vous avez la structure de mots-clés suivante :

```
MotCléParent
    MotCléEnfant
```

Ce que vous devez faire pour garder les mots-clés liés dans Obsidian est :

1. Faites un clic droit sur le MotCléEnfant.
2. Sélectionnez « Renommer ».
3. Renommez-le en `MotCléParent/MotCléEnfant`.

### Gérer les piles de carnets

Comme le processus d'export est limité à des carnets individuels, le fichier d'export par défaut ne contient pas d'informations sur les piles de carnets. Cependant, l'importateur peut reconnaître des motifs dans le nom du fichier enex pour recréer les piles de carnets sous forme de dossiers.

En supposant que vous avez un carnet appelé ```CarnetA``` dans une pile appelée ```Pile1```, vous pouvez recréer une pile de carnets en renommant le fichier enex en ```Pile1@@@CarnetA```.

Cela entraîne la génération des notes converties dans le dossier Pile1/CarnetA.

### Plus d'options

Pour des options d'importation plus avancées depuis Evernote, vous pouvez également essayer [l'importation via Yarle](https://github.com/akosbalasko/yarle).
