---
permalink: sync/collaborate
description: Cette page détaille comment vous pouvez collaborer avec d'autres utilisateurs d'Obsidian Sync.
publish: true
mobile: true
localized: '2026-03-18'

---
Avec [[Introduction à Obsidian Sync|Obsidian Sync]], vous pouvez collaborer sur un coffre partagé avec votre équipe.

Tous les collaborateurs doivent disposer d'un abonnement Sync actif pour accéder à un coffre partagé. Rejoindre un coffre partagé ne compte pas dans votre [[Questions fréquentes#Combien de coffres distants puis-je avoir ?|limite de coffres]].

Si le coffre distant est [[Sécurité et confidentialité|chiffré de bout en bout]], les collaborateurs doivent saisir le mot de passe de chiffrement lors de la configuration du coffre.

## Gérer les utilisateurs

### Ajouter des utilisateurs

Pour inviter un utilisateur à partager un coffre distant :

1. Ouvrez les **[[Paramètres]]**.
2. Dans le menu latéral, sélectionnez **Sync**.
3. À côté de **Coffre distant**, sélectionnez **Gérer**.
4. À côté du coffre distant que vous souhaitez partager, sélectionnez **Gérer le partage** ( ![[lucide-users.svg#icon]] ).
5. Dans **Inviter un utilisateur**, saisissez l'adresse électronique de l'utilisateur que vous souhaitez inviter.
6. Sélectionnez **Ajouter**.

### Supprimer des utilisateurs

1. Ouvrez les **[[Paramètres]]**.
2. Dans le menu latéral, sélectionnez **Sync**.
3. À côté de **Coffre distant**, sélectionnez **Gérer**.
4. À côté de l'utilisateur dont vous souhaitez supprimer l'accès, sélectionnez **Supprimer l'utilisateur** ( ![[lucide-x.svg#icon]] ).

## Collaborer avec votre équipe

### Permissions

Les permissions granulaires ne sont pas encore prises en charge. Tous les collaborateurs reçoivent les mêmes permissions que le propriétaire du coffre, à une exception près : seul le propriétaire du coffre peut inviter des collaborateurs.

### Édition en temps réel

Les coffres partagés permettent aux équipes de travailler ensemble sur un ensemble de fichiers, cependant Obsidian ne prend pas encore en charge l'édition collaborative en temps réel sur le même fichier. Vous ne verrez pas le curseur de l'autre utilisateur, et ses modifications n'apparaîtront qu'une fois les changements synchronisés.

Si plusieurs utilisateurs modifient le même fichier en même temps, [[Résoudre les problèmes d'Obsidian Sync#Résolution des conflits|les modifications seront fusionnées]] pendant le processus de synchronisation. Les modifications peuvent être consultées et restaurées à l'aide de l'[[Historique des versions|Historique des versions]].

![[version-history-collaboration.png]]^version-history-image

## Limitations

Sachez qu'Obsidian Sync a des [[Questions fréquentes|limitations]] qui peuvent affecter votre équipe :

- Le nombre maximum de collaborateurs sur un coffre partagé est de 20 utilisateurs.
- La taille maximale des fichiers pour les pièces jointes dépend du [[Forfaits et limites de stockage|forfait]] de l'hôte de votre coffre distant, avec 5 Mo pour le forfait Standard et 200 Mo pour le forfait Plus.

En savoir plus sur [[Sync pour les équipes]].
