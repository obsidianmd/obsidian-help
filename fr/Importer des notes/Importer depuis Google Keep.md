---
permalink: import/google-keep
localized: '2026-03-18'
cssclasses:
  - soft-embed
---
Obsidian vous permet de migrer facilement vos notes depuis Google Keep en utilisant le [[Importer|module Importer]]. Cela convertit vos données Google Keep en fichiers Markdown durables que vous pouvez utiliser avec Obsidian et de nombreuses autres applications.

## Exporter vos données depuis Google Keep

1. Rendez-vous sur [Google Takeout](https://takeout.google.com/settings/takeout) et connectez-vous à votre compte Google.
2. Cliquez sur **Tout désélectionner** dans le coin supérieur droit.
3. Faites défiler vers le bas et sélectionnez **Keep** dans la liste.
4. Faites défiler jusqu'en bas de la page et cliquez sur **Étape suivante**.
5. Sur l'écran suivant, cliquez sur le bouton **Créer l'exportation**.
6. Téléchargez le fichier `.zip` une fois qu'il est disponible.

## Importer vos données Google Keep dans Obsidian

Vous aurez besoin du module officiel Obsidian [[Importer]], que vous pouvez [installer ici](obsidian://show-plugin?id=obsidian-importer).

1. Ouvrez les **[[Paramètres]]**.
2. Accédez à **Modules complémentaires** et [installez Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activez le module Importer.
4. Ouvrez le module **Importer** en utilisant la palette de commandes ou l'icône du ruban.
5. Sous **Format de fichier**, choisissez **Google Keep (.zip).**
6. Sélectionnez l'emplacement de votre fichier `.zip`.
7. Sélectionnez **Import** pour examiner le modèle généré et prévisualiser des exemples à partir de vos notes.
8. Sélectionnez **Import** à nouveau et attendez que l'importation soit terminée.

## Limitations

- Toutes les listes de contrôle seront importées en tant qu'éléments de premier niveau car Google Keep n'exporte pas les informations d'indentation.
- Les rappels et les assignations d'utilisateurs sur les notes ne seront pas importés car ces fonctionnalités ne sont pas prises en charge par Obsidian.


## Modèles

Utilisez les [[Importer des modèles|modèles Importer]] pour configurer entièrement la façon dont vos données Google Keep sont importées.

![[Importer des modèles#Variables]]

De plus, Google Keep fournit des variables pour le texte original, les listes, les étiquettes, les pièces jointes, les couleurs, les données de partage, les tâches, les annotations et l'état de la note.

| Variable          | Description                                              |
| ----------------- | -------------------------------------------------------- |
| `{{isArchived}}`  | Indique si la note est archivée.                         |
| `{{isPinned}}`    | Indique si la note est épinglée.                         |
| `{{isTrashed}}`   | Indique si la note est dans la corbeille.                |
| `{{color}}`       | Nom de la couleur Google Keep.                           |
| `{{labels}}`      | Tableau d'enregistrements d'étiquettes.                  |
| `{{sharees}}`     | Tableau des personnes avec qui la note a été partagée.   |
| `{{annotations}}` | Tableau d'enregistrements d'annotations de liens.        |

Le titre original de Google Keep est disponible via `{{source.title}}`. La variable partagée `{{title}}` contient le titre de la note importée.
