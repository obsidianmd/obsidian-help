---
permalink: ribbon
description: >-
  Découvrez comment utiliser le ruban, un espace dédié aux commandes courantes
  dans Obsidian, et comment le personnaliser sur ordinateur et mobile.
publish: true
mobile: true
localized: '2026-03-18'
aliases:
  - Ribbon
---
Le ruban fonctionne comme un espace pour les commandes courantes dans Obsidian.

Sur ordinateur, il est situé dans la [[Barre latérale#Ouvrir les barres latérales masquées|barre latérale gauche]] et reste visible même lorsque la barre latérale gauche est fermée.

Sur mobile, vous pouvez accéder aux [[Application mobile#Actions du ruban|actions du ruban]] en appuyant sur l'**option Menu** ( ![[lucide-menu.svg#icon]] ) dans le coin inférieur droit de l'application lorsque vous n'êtes pas en train de modifier une note.

## Actions

Chaque action est représentée par une icône dans le ruban. Le survol de ces icônes affiche une infobulle, tandis que leur sélection active l'action associée. Sur mobile, vous pouvez appuyer sur ces icônes pour les activer.

1. Ouvrir le **[[Gérer les coffres|Sélecteur de coffre]]** ( ![[obsidian-icon-vault-switcher.svg#icon]] ).
2. Accéder à l'**aide** ( ![[lucide-help-circle.svg#icon]] ).
3. Ouvrir les **[[Paramètres]]** ( ![[lucide-settings.svg#icon]] ).

Dans la version mobile, vous pouvez configurer une action d'accès rapide sur le ruban. Pour plus d'informations, consultez la [[#Mobile|section mobile]] et [[Application mobile]].

## Personnaliser le ruban

La disposition personnalisée de votre ruban est mémorisée entre les sessions. Elle se synchronise avec les autres appareils et l'application mobile lorsque les paramètres de l'application (dans les fichiers `workspace.json` et `workspace-mobile.json`) sont synchronisés.

### Ordinateur

Sur la version de bureau, vous pouvez personnaliser le ruban comme suit :

- Réorganisez l'ordre des actions du ruban en glissant-déposant les icônes.
- Pour masquer des actions spécifiques, faites un clic droit sur un espace vide dans le ruban et décochez les actions que vous souhaitez masquer.

#### Masquer le ruban

Vous pouvez masquer le ruban de deux façons :

- Faites un clic droit sur le ruban et sélectionnez **Masquer le ruban**.
- Ouvrez **[[Paramètres]]** → **Apparence**, faites défiler jusqu'à **Avancé** et désactivez **Afficher le ruban**.

#### Afficher le ruban

Si vous avez masqué le ruban et souhaitez l'afficher à nouveau :

1. Ouvrez **[[Paramètres]]** → **Apparence**.
2. Faites défiler jusqu'à **Avancé**.
3. Activez **Afficher le ruban**.
4. Le ruban apparaîtra à nouveau sur le côté gauche de la fenêtre.

> [!tip] CSS personnalisé
> Si vous utilisez un thème communautaire ou du CSS personnalisé, assurez-vous qu'il ne masque pas le ruban via des règles de style personnalisées.

### Mobile

Dans la version mobile d'Obsidian, vous pouvez effectuer des actions d'accès rapide, réorganiser les éléments et personnaliser le menu du ruban. Pour accéder à ces personnalisations, suivez ces étapes :

1. Ouvrez les **[[Paramètres]]** d'Obsidian ( ![[lucide-cog.svg#icon]] ).
2. Accédez à la section **Apparence**.
3. Faites défiler jusqu'aux options **Avancé**.
4. Sélectionnez le bouton **Gérer** sous l'élément **Menu du ruban**.

#### Accès rapide

Par défaut, l'option d'accès rapide est définie sur « Ouvrir le menu du ruban » avec un *appui court*. Si vous choisissez une autre option comme accès rapide :

- L'option sélectionnée sera déclenchée par un *appui court*.
- L'accès au menu du ruban passera à un *appui long*.

> [!info] Les options d'accès rapide dépendent des paramètres d'Obsidian et des modules principaux que vous avez activés.

#### Réorganisation et visibilité

Pour modifier l'ordre des éléments dans le menu du ruban, appuyez longuement sur le bouton **glisser-déposer** ( ![[lucide-menu.svg#icon]] ) et déplacez l'élément sélectionné vers le haut ou vers le bas.

Vous pouvez afficher ou masquer des éléments dans le menu du ruban en utilisant les boutons rouge **supprimer** ( ![[lucide-minus-circle.svg#icon]] ) ou vert **ajouter** ( ![[lucide-plus-circle.svg#icon]] ) pour basculer leur visibilité.

 ![[ribbon-rearrange-visibility.jpeg#interface]]
