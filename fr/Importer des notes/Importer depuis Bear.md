---
permalink: import/bear
localized: '2026-03-18'
cssclasses:
  - soft-embed
---
Obsidian vous permet de migrer facilement vos notes depuis Bear à l'aide du [[Importer|module Importer]]. Cela convertit vos données Bear en fichiers Markdown durables que vous pouvez utiliser avec Obsidian et de nombreuses autres applications.

## Exporter vos données depuis Bear

Obsidian peut utiliser les formats de sauvegarde Bear `.bear2bk` ou `ApplicationData.zip`.

### iOS

1. Ouvrez Bear.
2. Allez dans **Réglages** → **Avancé** → **Partager les données de l'application**.
3. Choisissez un emplacement pour votre fichier de sauvegarde.
4. Vous devriez maintenant avoir un fichier `ApplicationData.zip` contenant toutes vos notes.

### macOS

1. Ouvrez Bear.
2. Allez dans **Fichier** → **Sauvegarder les notes**.
3. Choisissez un emplacement pour votre fichier de sauvegarde.
4. Cliquez sur **Exporter les notes**.
5. Vous devriez maintenant avoir un fichier `.bear2bk` contenant toutes vos notes.

## Importer vos données Bear dans Obsidian

Vous aurez besoin du module officiel Obsidian [[Importer]], que vous pouvez [installer ici](obsidian://show-plugin?id=obsidian-importer).

1. Ouvrez les **[[Paramètres]]**.
2. Allez dans **Modules complémentaires** et [installez Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activez le module Importer.
4. Ouvrez le module **Importer** en utilisant la palette de commandes ou l'icône du ruban.
5. Sous **Format de fichier**, choisissez **Bear (.bear2bk, .zip)**.
6. Sélectionnez l'emplacement de votre fichier de sauvegarde Bear.
7. Sélectionnez **Importer** pour examiner le modèle généré et prévisualiser des exemples à partir de vos notes.
8. Sélectionnez **Importer** à nouveau et attendez que l'importation soit terminée.

## Modèles

Utilisez les [[Importer des modèles|modèles Importer]] pour configurer entièrement la façon dont vos données Bear sont importées.

![[Importer des modèles#Variables]]
