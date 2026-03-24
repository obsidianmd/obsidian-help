---
permalink: glossary
localized: '2026-03-18'

---
Ce glossaire comprend la terminologie courante d'Obsidian.

## Alias

Un **alias** est un type de [[#propriété]] qui définit des noms alternatifs pour une [[#note]].

## Pièce jointe

Une **pièce jointe** est un [[Formats de fichiers acceptés|format de fichier accepté]] qui a été créé en dehors du coffre et ajouté ultérieurement.

## Commande

Une **commande** est une action qui peut être exécutée soit en la sélectionnant depuis la [[Palette de commandes]], soit en lui assignant un [[#raccourci clavier]].

## Intégration

**Intégrer** signifie remplacer une référence à un contenu externe par le contenu lui-même, par exemple pour inclure une image dans votre note. Voir aussi [[Incorporer des fichiers]].

## Métadonnées

Les métadonnées sont un moyen de définir des [[#propriété|propriétés]] en ajoutant du [YAML](https://yaml.org/) ou du [JSON](https://www.json.org/) en haut de la note. Voir aussi [[Propriétés#Format des propriétés|Format des propriétés]].

## Graphique

Un **graphique** est une visualisation qui met en évidence les connexions entre les [[#note|notes]]. Voir aussi [[Vue graphique]].

## Raccourci clavier

Un **raccourci clavier** est un raccourci clavier pour une [[#commande]]. Voir aussi [[Raccourcis clavier]] et [[Raccourcis clavier|Comment utiliser les raccourcis clavier]].

## Lien

Un **lien** fait référence à une autre note ou un autre fichier. Un [[Liens internes|lien interne]] pointe vers un fichier situé dans le coffre actuel. Un [[Syntaxe de mise en forme de base#Liens externes|lien externe]] pointe vers un emplacement en dehors du coffre, généralement une page web.

## Zone principale

La **zone principale** est la zone centrale de l'application Obsidian, où vous éditez principalement vos [[#note|notes]].

## Markdown

Markdown est un langage de balisage pour la mise en forme du texte et le format de fichier principal utilisé pour les notes dans Obsidian, les fichiers `.md`. Voir aussi [[Syntaxe de mise en forme de base]].

## Note

Une **note** est un fichier Markdown à l'intérieur d'un [[#coffre]].

## Module

Un **module** étend Obsidian avec des fonctionnalités supplémentaires.

- Les [[Modules principaux]] sont écrits par l'équipe d'Obsidian et inclus par défaut.
- Les [[Modules complémentaires]] sont écrits par des développeurs tiers et doivent être [[Modules complémentaires#Installer un module complémentaire|installés]] avant de pouvoir être utilisés.

Vous pouvez [créer votre propre module](https://docs.obsidian.md/Plugins/Getting+started/Build+a+plugin).

## Fenêtre détachée

Par défaut, toutes les notes d'un coffre s'ouvrent dans la même fenêtre de l'application. Une **fenêtre détachée** vous permet d'ouvrir des notes du même coffre dans des fenêtres séparées, par exemple pour les afficher sur un second écran.

Voir aussi [[Fenêtres détachées]].

## Propriété

Les [[Propriétés|propriétés]] définissent des informations supplémentaires sur une note, comme une date d'échéance ou un auteur.

## Ruban

Le **ruban** fonctionne comme un conteneur pour les icônes d'actions fréquemment utilisées.

Dans la version bureau, il s'agit de la zone verticale située à l'extrême gauche.

Dans la version mobile, il est représenté par un bouton de menu ![[lucide-menu.svg#icon]] dans la [[#barre d'état]].

## Barre latérale

Une zone qui contient des [[#vue|vues]] de support organisées en [[#onglet|onglets]]. Une barre latérale peut être divisée en plusieurs [[#groupe d'onglets|groupes d'onglets]].

Obsidian bureau possède deux barres latérales, une de chaque côté de la [[#zone principale]]. Les deux barres latérales sont accessibles par des icônes dans les coins supérieur gauche et supérieur droit de l'application Obsidian, en plus du balayage vers la gauche ou la droite. L'icône en haut à droite doit être maintenue pour ouvrir la fenêtre.

## Extrait

Un **extrait**, ou [[Extraits CSS|extrait CSS]], modifie l'apparence d'Obsidian, tout comme un [[#thème]]. Contrairement aux thèmes, vous pouvez appliquer plusieurs extraits en même temps.

## Barre d'état

La **barre d'état** dans l'application Obsidian vous affiche des statistiques et des statuts essentiels. Dans la version bureau, vous la trouverez dans le coin inférieur droit, tandis que sur les appareils mobiles, elle est positionnée en bas de l'application.


## Onglet

Un **onglet** contient une [[#vue]]. Les onglets peuvent être repositionnés dans la [[#zone principale]] et les [[#barre latérale|barres latérales]]. Voir aussi [[Onglets]].

## Groupe d'onglets

Un **groupe d'onglets** est une collection d'[[#onglet|onglets]] dans la [[#zone principale]]. Les onglets d'un groupe d'onglets peuvent être empilés.

## Mot-clé

Un **mot-clé** est un mot qui commence par un croisillon (`#`), par exemple `#livre`. Les mots-clés sont principalement utilisés pour trouver des [[#note|notes]] associées.

## Thème

Un **thème** modifie l'apparence de l'application Obsidian en utilisant du [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS). Vous pouvez surcharger des parties d'un thème en utilisant des [[#extrait|extraits]].

## Coffre

`Alias : coffre local, données locales`

Un **coffre** est un dossier sur votre système de fichiers qui contient des [[#note|notes]] et un dossier `.obsidian` avec la configuration spécifique à Obsidian. Voir aussi [[Comment Obsidian stocke les données]].

### Coffre distant

`Alias : données distantes`

Un [[Coffres locaux et distants|coffre distant]] est une copie de votre coffre local qui est maintenue avec [[Introduction à Obsidian Sync|Obsidian Sync]]. Les données du coffre distant sont mises à jour en fonction des modifications apportées aux données locales.

## Vue

Une **vue** affiche des informations, par exemple la [[Rechercher|vue Recherche]].
