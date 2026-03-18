---
permalink: glossary
localized: '2026-03-18'
aliases:
  - Glossary
---
Ce glossaire regroupe la terminologie courante d'Obsidian.

## Alias

Un **alias** est un type de [[#Propriété|propriété]] qui définit des noms alternatifs pour une [[#Note|note]].

## Pièce jointe

Une **pièce jointe** est un [[Formats de fichiers acceptés|format de fichier accepté]] qui a été créé en dehors du coffre et ajouté ultérieurement.

## Commande

Une **commande** est une action qui peut être exécutée soit en la sélectionnant depuis la [[Palette de commandes|palette de commandes]], soit en lui attribuant un [[#Raccourci clavier|raccourci clavier]].

## Intégration

L'**intégration** consiste à remplacer une référence à un contenu externe par le contenu lui-même, par exemple pour inclure une image dans votre note. Voir aussi [[Incorporer des fichiers|Intégrer des fichiers]].

## Métadonnées

Les métadonnées sont un moyen de définir des [[#Propriété|propriétés]] en ajoutant du [YAML](https://yaml.org/) ou du [JSON](https://www.json.org/) en haut de la note. Voir aussi [[Propriétés#Property format|Format des propriétés]].

## Graphe

Un **graphe** est une visualisation qui met en évidence les connexions entre les [[#Note|notes]]. Voir aussi [[Vue graphique|Vue graphique]].

## Raccourci clavier

Un **raccourci clavier** est un raccourci au clavier pour une [[#Commande|commande]]. Voir aussi [[Raccourcis clavier|Raccourcis clavier]] et [[Raccourcis clavier|Comment utiliser les raccourcis clavier]].

## Lien

Un **lien** fait référence à une autre note ou un autre fichier. Un [[Liens internes|lien interne]] pointe vers un fichier situé dans le coffre actuel. Un [[Syntaxe de mise en forme de base#External links|lien externe]] pointe vers un emplacement en dehors du coffre, généralement une page web.

## Zone principale

La **zone principale** est la zone centrale de l'application Obsidian, où vous modifiez principalement vos [[#Note|notes]].

## Markdown

Markdown est un langage de balisage pour la mise en forme du texte et le format de fichier principal utilisé pour les notes dans Obsidian, les fichiers `.md`. Voir aussi [[Syntaxe de mise en forme de base|Syntaxe de mise en forme de base]].

## Note

Une **note** est un fichier Markdown à l'intérieur d'un [[#Coffre|coffre]].

## Module

Un **module** étend Obsidian avec des fonctionnalités supplémentaires.

- Les [[Plugins principaux|modules principaux]] sont écrits par l'équipe d'Obsidian et inclus par défaut.
- Les [[Plugins communautaires|modules complémentaires]] sont écrits par des développeurs tiers et doivent être [[Plugins communautaires#Install a community plugin|installés]] avant de pouvoir être utilisés.

Vous pouvez [créer votre propre module](https://docs.obsidian.md/Plugins/Getting+started/Build+a+plugin).

## Fenêtre détachée

Par défaut, toutes les notes d'un coffre s'ouvrent dans la même fenêtre d'application. Une **fenêtre détachée** vous permet d'ouvrir des notes du même coffre dans des fenêtres séparées, par exemple pour les afficher sur un second écran.

Voir aussi [[Fenêtres détachées|Fenêtres détachées]].

## Propriété

Les [[Propriétés|propriétés]] définissent des informations supplémentaires sur une note, comme une date d'échéance ou un auteur.

## Ruban

Le **ruban** sert de conteneur pour les icônes d'actions fréquemment utilisées.

Dans la version de bureau, il s'agit de la zone verticale située à l'extrême gauche.

Dans la version mobile, il est représenté par un bouton de menu ( ![[lucide-menu.svg#icon]] ) dans la [[#Barre d'état|barre d'état]].

## Barre latérale

Une zone qui contient des [[#Vue|vues]] auxiliaires organisées sous forme d'[[#Onglet|onglets]]. Une barre latérale peut être divisée en plusieurs [[#Groupe d'onglets|groupes d'onglets]].

Obsidian sur bureau dispose de deux barres latérales, une de chaque côté de la [[#Zone principale|zone principale]]. Les deux barres latérales sont accessibles par des icônes dans les coins supérieur gauche et supérieur droit de l'application Obsidian, en plus du balayage vers la gauche ou la droite. L'icône en haut à droite doit être maintenue pour ouvrir la fenêtre.

## Extrait css

Un **extrait css**, ou [[Extraits CSS|extrait CSS]], modifie l'apparence d'Obsidian, tout comme un [[#Thème|thème]]. Contrairement aux thèmes, vous pouvez appliquer plusieurs extraits css en même temps.

## Barre d'état

La **barre d'état** de l'application Obsidian vous affiche des statistiques et des états essentiels. Dans la version de bureau, vous la trouverez dans le coin inférieur droit, tandis que sur les appareils mobiles, elle est positionnée le long du bas de l'application.


## Onglet

Un **onglet** contient une [[#Vue|vue]]. Les onglets peuvent être repositionnés dans la [[#Zone principale|zone principale]] et les [[#Barre latérale|barres latérales]]. Voir aussi [[Onglets|Onglets]].

## Groupe d'onglets

Un **groupe d'onglets** est un ensemble d'[[#Onglet|onglets]] dans la [[#Zone principale|zone principale]]. Les onglets d'un groupe d'onglets peuvent être empilés.

## Mot-clé

Un **mot-clé** est un mot qui commence par un croisillon (`#`), par exemple `#livre`. Les mots-clés sont principalement utilisés pour trouver des [[#Note|notes]] connexes.

## Thème

Un **thème** modifie l'apparence de l'application Obsidian en utilisant le [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS). Vous pouvez remplacer certaines parties d'un thème en utilisant des [[#Extrait css|extraits css]].

## Coffre

`Aliases: coffre local, données locales`

Un **coffre** est un dossier sur votre système de fichiers qui contient des [[#Note|notes]] et un dossier `.obsidian` avec la configuration spécifique à Obsidian. Voir aussi [[Comment Obsidian stocke les données|Comment Obsidian stocke les données]].

### Coffre distant

`Aliases: Données distantes`

Un [[Coffres locaux et distants|coffre distant]] est une copie de votre coffre local qui est maintenue avec [[Introduction à Obsidian Sync|Obsidian Sync]]. Les données du coffre distant sont mises à jour en fonction des modifications apportées aux données locales.

## Vue

Une **vue** affiche des informations, par exemple la [[Recherche|vue de recherche]].
