---
permalink: plugins/file-explorer
description: L'explorateur de fichiers est un module principal qui vous permet de gérer les fichiers et les dossiers à l'intérieur de votre coffre.
publish: true
mobile: true
aliases:
  - Modules/Modules principaux/Explorateur de fichiers
  - Plugins/Modules principaux/Explorateur de fichiers
  - Plugins/Open in default app
localized: 2026-03-18T00:00:00.000Z
---
L'explorateur de fichiers est un [[Modules principaux|module principal]] qui vous permet de gérer les fichiers et dossiers à l'intérieur de votre coffre. Vous pouvez parcourir les notes et autres [[Formats de fichiers acceptés]] de votre coffre et effectuer de nombreuses opérations courantes sur les fichiers :

- Créer, supprimer et renommer des fichiers et des dossiers.
- Déplacer des fichiers et des dossiers par glisser-déposer.
- Utiliser le [[#Utiliser le menu contextuel|menu contextuel]] pour accéder à toutes les opérations disponibles.

> [!tip]- Glisser-déposer des fichiers
> Vous pouvez glisser un fichier depuis l'explorateur de fichiers dans votre note pour créer un lien vers celui-ci, ou glisser un fichier dans un dossier de l'explorateur de fichiers pour le copier.

## Créer une nouvelle note

Pour créer une nouvelle note à l'emplacement par défaut pour les nouvelles notes :

1. Sélectionnez **Nouvelle note** ![[lucide-pen-line.svg#icon]] en haut de l'explorateur de fichiers.
2. Tapez le nom de la note, puis appuyez sur `Entrée`.

> [!tip]- Modifier l'emplacement par défaut
> Vous pouvez modifier l'emplacement par défaut pour les nouvelles notes sous **[[Paramètres]] → [[Paramètres#Fichiers et liens|Fichiers et liens]] → [[Paramètres#Emplacement par défaut pour les nouvelles notes|Emplacement par défaut pour les nouvelles notes]]**.

Pour créer une nouvelle note dans un dossier spécifique :

1. Faites un clic droit sur le dossier puis sélectionnez **Nouvelle note**.
2. Tapez le nom de la note, puis appuyez sur `Entrée`.

## Créer un nouveau dossier

Pour créer un nouveau dossier à la racine de votre coffre :

1. Sélectionnez **Nouveau dossier** ![[lucide-folder-plus.svg#icon]] en haut de l'explorateur de fichiers.
2. Tapez le nom du dossier, puis appuyez sur `Entrée`.

Pour créer un sous-dossier :

1. Faites un clic droit sur le dossier dans lequel vous souhaitez créer le sous-dossier, puis sélectionnez **Nouveau dossier**.
2. Tapez le nom du dossier, puis appuyez sur `Entrée`.

## Modifier l'ordre de tri

Pour modifier l'ordre de tri de vos fichiers :

1.  Sélectionnez **Modifier l'ordre de tri** ![[lucide-arrow-up-narrow-wide.svg#icon]] en haut de l'explorateur de fichiers.
2. Choisissez comment vous souhaitez trier vos fichiers. Vous pouvez trier par ordre croissant ou décroissant selon le nom du fichier, la date de modification ou la date de création.

## Révéler automatiquement le fichier actif

Lorsque vous ouvrez une note, l'explorateur de fichiers peut automatiquement faire défiler et mettre en surbrillance cette note dans l'arborescence des dossiers. Cela vous aide à repérer où se trouve votre note active dans votre coffre.

Pour activer ou désactiver la révélation automatique :

- Sélectionnez **Révéler automatiquement le fichier actif** ![[lucide-gallery-vertical.svg#icon]] en haut de l'explorateur de fichiers.

Lorsque cette option est activée, l'explorateur de fichiers suivra et révélera automatiquement la note active.

## Déplier ou plier tous les dossiers

Vous pouvez déplier ou plier tous les dossiers de l'explorateur de fichiers en une seule fois.

Pour déplier tous les dossiers :

- Sélectionnez **Tout déplier** ![[lucide-chevrons-up-down.svg#icon]] en haut de l'explorateur de fichiers.

Pour plier tous les dossiers :

- Sélectionnez **Tout plier** ![[lucide-chevrons-down-up.svg#icon]] en haut de l'explorateur de fichiers.

## Supprimer un fichier ou un dossier

1. Faites un clic droit sur le fichier que vous souhaitez supprimer, puis sélectionnez **Supprimer**.
2. Si une confirmation de suppression vous est demandée, sélectionnez **Supprimer**.

Pour plus d'informations, consultez [[Gérer les notes#Supprimer une note|Supprimer une note]].

## Renommer un fichier ou un dossier

1. Faites un clic droit sur le fichier que vous souhaitez renommer, puis sélectionnez **Renommer**.
2. Tapez le nouveau nom, puis appuyez sur `Entrée`.

Pour plus d'informations, consultez [[Gérer les notes#Renommer une note|Renommer une note]].

## Déplacer un fichier ou un dossier

Pour déplacer un fichier ou un dossier, vous pouvez utiliser le glisser-déposer ou le menu contextuel.

**Glisser-déposer :**

- Glissez un fichier ou un dossier vers le dossier dans lequel vous souhaitez le déplacer.
- Avec `Alt-Clic` (Windows/Linux) ou `Opt-Clic` (macOS), vous pouvez sélectionner plusieurs fichiers individuels et les glisser vers un autre dossier. S'ils sont tous alignés, vous pouvez utiliser `Maj-Clic` pour cela.

**Menu contextuel :**

1. Faites un clic droit sur un fichier, puis sélectionnez **Déplacer le fichier vers...**.
2. Recherchez le nom du dossier vers lequel vous souhaitez déplacer le fichier, puis sélectionnez-le dans la liste.

## Utiliser le menu contextuel

Le menu contextuel liste les actions disponibles pour un fichier ou un dossier. De nombreux éléments du menu fichier apparaissent également dans le [[Menu Plus d'options]].

### Bureau

Faites un clic droit sur un fichier ou un dossier dans l'explorateur de fichiers.

**Fichiers**

- **Ouvrir dans un nouvel onglet** et **Ouvrir vers la droite** ouvrent le fichier dans un nouvel onglet ou dans un volet à droite.
- **Ouvrir dans une nouvelle fenêtre** ouvre le fichier dans sa propre fenêtre. Voir [[Fenêtres détachées]].
- **Dupliquer** crée une copie du fichier.
- **Déplacer le fichier vers...** déplace le fichier vers un autre dossier. Voir [[#Déplacer un fichier ou un dossier]].
- **Marquer...** ajoute le fichier à vos signets. Nécessite le module Signets. Voir [[Signets#Ajouter un signet]].
- **Fusionner tout le fichier avec...** combine la note avec une autre. Nécessite le module Compositeur de note. Voir [[Compositeur de note#Fusionner des notes]].
- **Publier le fichier actuel** publie la note sur votre site. Nécessite Obsidian Publish. Voir [[Introduction à Obsidian Publish|Publish]].
- **Copier le chemin** copie l'emplacement du fichier en tant qu'URL Obsidian, depuis le dossier du coffre ou depuis la racine du système.
- **Ouvrir l'historique de version** affiche les versions antérieures du fichier. Nécessite un abonnement actif à Obsidian Sync. Voir [[Historique des versions]].
- **Ouvrir avec l'application par défaut** ouvre le fichier dans l'application que votre ordinateur utilise pour ce type de fichier.
- **Révéler dans le système de fichiers** affiche le fichier dans votre gestionnaire de fichiers. Sur macOS, l'élément indique **Révéler dans le Finder**. Sur Windows et Linux, il indique **Afficher dans le dossier**.
- **Renommer...** modifie le nom du fichier. Voir [[#Renommer un fichier ou un dossier]].
- **Supprimer** supprime le fichier. Voir [[#Supprimer un fichier ou un dossier]].

**Dossiers**

- **Nouvelle note** et **Nouveau dossier** créent une note ou un dossier à l'intérieur du dossier. Voir [[#Créer une nouvelle note]] et [[#Créer un nouveau dossier]].
- **Nouveau canvas** crée un canvas dans le dossier. Voir [[Canvas]].
- **Nouvelle base** crée une base dans le dossier. Voir [[Introduction aux Bases]].
- **Dupliquer** crée une copie du dossier.
- **Déplacer le dossier vers...** déplace le dossier dans un autre dossier.
- **Rechercher dans le dossier** recherche uniquement les fichiers dans le dossier. Voir [[Recherche]].
- **Marquer...** ajoute le dossier à vos signets.
- **Copier le chemin** copie l'emplacement du dossier depuis le dossier du coffre ou depuis la racine du système.
- **Révéler dans le système de fichiers** affiche le dossier dans votre gestionnaire de fichiers, et s'affiche de la même manière que pour les fichiers.
- **Renommer...** et **Supprimer** modifient le nom du dossier ou suppriment le dossier.

### Mobile

Appuyez longuement sur un dossier dans l'explorateur de fichiers. Le menu contient les mêmes éléments que le menu dossier sur bureau, à l'exception de **Marquer...** et **Révéler dans le système de fichiers**.
