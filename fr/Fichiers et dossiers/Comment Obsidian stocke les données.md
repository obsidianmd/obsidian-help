---
permalink: data-storage
description: Cette page explique comment Obsidian stocke ses données sur votre appareil.
publish: true
mobile: true
aliases:
  - Advanced Use/Comment Obsidian stocke vos données
  - How Obsidian stores data
localized: '2026-03-18'
---
Obsidian stocke vos notes sous forme de fichiers en texte brut au [[Syntaxe de mise en forme de base|format Markdown]] dans un _coffre_. Un coffre est un dossier sur votre système de fichiers local, incluant tous ses sous-dossiers.

Comme les notes sont des fichiers en texte brut, vous pouvez utiliser d'autres éditeurs de texte et gestionnaires de fichiers pour modifier et gérer vos notes. Obsidian rafraîchit automatiquement votre coffre pour prendre en compte les modifications externes.

Vous pouvez créer un coffre partout où votre système d'exploitation le permet. Obsidian se synchronise avec [[Introduction à Obsidian Sync|Obsidian Sync]], Dropbox, iCloud, OneDrive, Git et de nombreux autres services tiers.

Vous pouvez ouvrir plusieurs dossiers comme des coffres individuels, par exemple pour séparer les notes professionnelles et scolaires.

> [!warning] Coffres dans des coffres
> Comme les [[Liens internes]] sont locaux à un coffre, nous vous recommandons de ne pas créer de coffres à l'intérieur d'autres coffres. Les liens pourraient ne pas être mis à jour correctement.

## Paramètres du coffre

Obsidian crée un [[Dossier de configuration|dossier de configuration]] `.obsidian` dans le dossier racine du coffre, qui contient les préférences spécifiques à ce coffre, telles que les [[Raccourcis clavier|raccourcis clavier]], les [[Thèmes|thèmes]] et les [[Modules complémentaires|modules complémentaires]].

Par défaut, la plupart des systèmes d'exploitation masquent les dossiers dont le nom commence par un point (`.`), vous devrez donc peut-être modifier les paramètres de votre gestionnaire de fichiers pour le voir.

- **macOS** : Dans le Finder, appuyez sur `Cmd+Maj+.` (point) pour afficher les fichiers cachés.
- **Windows** : [Afficher les fichiers cachés](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
+ **GNU/Linux** : Dans la plupart des explorateurs de fichiers, appuyez sur `Ctrl + h` pour afficher les fichiers cachés.

> [!tip] Ajouter `.obsidian` à Git
> Les fichiers `.obsidian/workspace.json` et `.obsidian/workspaces.json` stockent la disposition actuelle de l'espace de travail et sont mis à jour chaque fois que vous ouvrez un nouveau fichier. Si vous utilisez [Git](https://git-scm.com) pour gérer votre coffre, vous pourriez vouloir ajouter ces fichiers au `.gitignore`.

## Paramètres globaux

Obsidian stocke les paramètres globaux dans un dossier système. L'emplacement de ce dossier système dépend du système d'exploitation que vous utilisez.

- **macOS** : `/Users/votrenom/Library/Application Support/obsidian`
- **Windows** : `%APPDATA%\Obsidian\`
- **Linux** : `$XDG_CONFIG_HOME/obsidian/` ou `~/.config/obsidian/`

> [!warning] Ne créez pas de coffre dans le dossier système. Cela pourrait entraîner une corruption ou une perte de données.

## IndexedDB

IndexedDB est une base de données côté client de bas niveau qu'Obsidian utilise pour le stockage en arrière-plan. Elle aide à maintenir l'état des connexions [[Introduction à Obsidian Sync|Obsidian Sync]] et préserve le [[#Cache des métadonnées]] lorsque l'application est fermée.

> [!warning] Si le [mode Isolement](<https://support.apple.com/en-us/105120>) d'Apple est activé et qu'Obsidian n'est pas exclu, ces fichiers de base de données ne seront pas sauvegardés, nécessitant une réindexation à chaque démarrage de l'application.

### Cache des métadonnées

Afin de fournir une expérience rapide lors de l'utilisation de l'application, Obsidian maintient un enregistrement local des métadonnées concernant les fichiers de votre coffre, appelé **cache des métadonnées**. Ces métadonnées alimentent de nombreuses fonctionnalités de l'application, de la vue graphique à la vue du plan.

Obsidian maintient ce cache synchronisé avec les fichiers de votre coffre, mais il est possible que les données se désynchronisent par rapport aux fichiers sous-jacents. Si cela se produit dans votre coffre, vous pouvez reconstruire votre cache des métadonnées depuis les paramètres de l'application dans la section *Fichiers et liens*.
