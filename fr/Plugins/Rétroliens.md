---
permalink: plugins/backlinks
description: >-
  Avec le module Rétroliens, vous pouvez voir tous les liens retour de la note
  active.
publish: true
mobile: false
aliases:
  - Plugins/Modules principaux/Module des rétroliens
  - Backlinks
localized: '2026-03-18'
---
Avec le module [[Modules principaux|Rétroliens]], vous pouvez voir tous les _liens retour_ de la note active.

Un lien retour d'une note est un lien provenant d'une autre note vers cette note. Dans l'exemple suivant, la note « Trois lois du mouvement » contient un lien vers la note « Isaac Newton ». Le lien retour correspondant relierait « Isaac Newton » à « Trois lois du mouvement ».

```mermaid
flowchart LR
  laws((Trois lois du mouvement))
  newton((Isaac Newton))

  laws --lien--> newton
  newton --lien retour--> laws
```

Les liens retour peuvent être utiles pour trouver des notes qui font référence à la note que vous êtes en train d'écrire. Imaginez que vous puissiez lister les liens retour de n'importe quel site web sur internet.

## Afficher les liens retour

Le module Rétroliens affiche les liens retour des onglets actifs. Il y a deux sections repliables : **Mentions liées** et **Mentions non liées**.

- Les **Mentions liées** sont des liens retour vers les notes qui contiennent un lien interne vers la note active.
- Les **Mentions non liées** sont des liens retour vers toute occurrence non liée du nom de la note active.

Il propose les options suivantes :

- **Replier les résultats** permet de déplier ou non chaque note pour afficher les mentions qu'elle contient.
- **Afficher plus de contexte** permet de tronquer ou d'afficher le paragraphe complet contenant la mention.
- **Changer l'ordre de tri** détermine comment trier les mentions.
- **Afficher le filtre de recherche** affiche un champ de texte permettant de filtrer les mentions. Pour plus d'informations sur la construction d'un terme de recherche, consultez [[Rechercher]].

## Afficher les liens retour d'une note

Pour afficher les liens retour de la note active, cliquez sur l'onglet **Rétroliens** ( ![[obsidian-icon-links-coming-in.svg#icon]] ) dans la barre latérale droite.

> [!note] Note
> Si vous ne voyez pas l'onglet Rétroliens, vous pouvez le rendre visible en ouvrant la [[Palette de commandes]] et en exécutant la commande **Rétroliens : Afficher les liens retour**.

> [!info] Fichiers exclus
> Les fichiers correspondant à vos modèles de [[Paramètres#Fichiers exclus|Fichiers exclus]] n'apparaîtront pas dans les Mentions non liées.

## Voir les liens retour d'une note spécifique

L'onglet des liens retour liste les liens retour de la note active et se met à jour lorsque vous passez à une autre note. Si vous souhaitez voir les liens retour d'une note spécifique, qu'elle soit active ou non, vous pouvez ouvrir un onglet de liens retour _lié_.

Pour ouvrir un onglet de liens retour lié :

1. Ouvrez la [[Palette de commandes]].
2. Sélectionnez **Rétroliens : Ouvrir les liens retour de la note courante**.

Un onglet séparé s'ouvre à côté de votre note active. L'onglet affiche une icône de lien pour indiquer qu'il est lié à une note.

## Afficher les liens retour dans une note

Au lieu d'afficher les liens retour dans un onglet séparé, vous pouvez les afficher en bas de votre note.

Pour afficher les liens retour dans une note :

1. Ouvrez la [[Palette de commandes]].
2. Sélectionnez **Rétroliens : Activer/désactiver les liens retour dans le document**.

Ou activez **Liens retour dans le document** dans les options du module Rétroliens pour activer automatiquement les liens retour lorsque vous ouvrez une nouvelle note.
