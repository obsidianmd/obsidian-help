---
permalink: manage-notes
description: null
publish: true
mobile: false
aliases:
  - How to/Gérer les notes
  - Advanced Use/Suppression de fichiers
localized: '2026-03-18'
---
Vous pouvez gérer les fichiers et dossiers de plusieurs manières, en utilisant les [[Raccourcis clavier]], les [[Palette de commandes|commandes]], ou l'[[Explorateur de fichiers]].

## Créer une nouvelle note

Pour créer un nouveau fichier :

1. Appuyez sur `Ctrl+N` (ou `Cmd+N` sur macOS).
2. Entrez le nom de la note puis appuyez sur `Entrée` pour commencer à éditer la note.

Vous pouvez aussi créer des notes en utilisant l'[[Explorateur de fichiers#Créer une nouvelle note|Explorateur de fichiers]], ou en sélectionnant **Créer une nouvelle note** depuis la [[Palette de commandes]].

> [!hint] Limitation des caractères système
> Obsidian respecte les limitations de noms de fichiers du système d'exploitation sur lequel vous créez la note. Si vous prévoyez de [[Synchroniser vos notes entre appareils|synchroniser vos notes entre appareils]], assurez-vous que vos noms de fichiers sont [compatibles avec les autres systèmes d'exploitation](https://stackoverflow.com/q/1976007).
^blockquote-system-limitation

## Ouvrir des fichiers en dehors de votre coffre

Sur ordinateur, vous pouvez ouvrir et modifier des fichiers Markdown individuels en dehors de votre coffre. Les fichiers s'ouvrent dans votre fenêtre actuelle et restent à leur emplacement d'origine.

> [!note] Nécessite Obsidian 1.14 et le dernier programme d'installation
> [[Mettre à jour Obsidian#Mises à jour du programme d'installation|Mettez à jour votre programme d'installation]] en téléchargeant Obsidian depuis [obsidian.md/download](https://obsidian.md/download) et en réinstallant l'application.

Pour ouvrir un fichier Markdown :

1. Ouvrez la [[Palette de commandes]].
2. Sélectionnez **Ouvrir un fichier situé hors du coffre…**.
3. Choisissez un fichier Markdown sur votre ordinateur.

Vous pouvez aussi utiliser le menu **Ouvrir avec** de votre système d'exploitation et sélectionner **Obsidian**. Pour ouvrir les fichiers Markdown dans Obsidian par défaut, définissez-le comme application par défaut pour les fichiers `.md`.

Les intégrations d'images et les liens vers d'autres fichiers locaux sont résolus relativement au dossier du fichier Markdown. Utilisez le [[Plan]] pour naviguer entre les entêtes et les [[Liens sortants]] pour parcourir les fichiers liés.

### Prévisualiser des fichiers avec Quick Look

Sur macOS, sélectionnez un fichier Markdown dans le Finder et appuyez sur `Espace` pour le prévisualiser avec **Quick Look**. Les aperçus Quick Look fonctionnent même lorsque Obsidian est fermé.

## Renommer une note

Pour renommer une note active :

1. Sélectionnez le nom de la note en haut de l'éditeur (ou appuyez sur `F2`).
2. Entrez le nouveau nom puis appuyez sur `Entrée`.

Lorsque vous renommez un fichier, Obsidian met automatiquement à jour tous les liens vers ce fichier.

Vous pouvez renommer une note ou un dossier sans l'ouvrir, en utilisant l'[[Explorateur de fichiers#Renommer un fichier ou un dossier|Explorateur de fichiers]]

## Supprimer une note

Pour supprimer une note, sélectionnez **Plus d'options → Supprimer le fichier** en haut à droite d'une note active.

Ou, sélectionnez **Supprimer le fichier courant** depuis la [[Palette de commandes]].

Vous pouvez aussi supprimer une note ou un dossier, en utilisant l'[[Explorateur de fichiers#Supprimer un fichier ou un dossier|Explorateur de fichiers]].

> [!note] Que se passe-t-il avec les fichiers après leur suppression ?
> Pour changer ce qui arrive aux fichiers supprimés, sélectionnez l'une des options suivantes sous **[[Paramètres]] → Fichiers et liens** :
>
> - **Corbeille système** : Par défaut, les fichiers supprimés sont envoyés dans la corbeille système de votre système d'exploitation. Pour restaurer un fichier, utilisez votre gestionnaire de fichiers habituel.
> - **Corbeille Obsidian** : Vous pouvez envoyer les fichiers supprimés dans un dossier `.trash` dans votre coffre.
> - **Supprimer définitivement** : Les fichiers sont immédiatement supprimés sans aucun moyen de les restaurer.
