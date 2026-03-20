---
permalink: publish/collaborate
description: Découvrez comment collaborer avec d'autres utilisateurs d'Obsidian sur votre site Obsidian Publish.
publish: true
mobile: true
localized: '2026-03-18'

---
Apprenez à collaborer sur votre site [[Introduction à Obsidian Publish|Obsidian Publish]] avec d'autres utilisateurs d'Obsidian. En ajoutant vos amis et collègues en tant que collaborateurs, ils peuvent publier des modifications sur votre site.

Seul le propriétaire du site a besoin d'un abonnement actif à Obsidian Publish. Les collaborateurs n'ont besoin que d'un [compte Obsidian](https://obsidian.md/fr/account).

> [!warning] Avant de publier des modifications sur un site partagé, assurez-vous de [[#Synchroniser les modifications entre collaborateurs|synchroniser les modifications entre collaborateurs]]. Sinon, vous risquez d'écraser les modifications d'autres collaborateurs.

## Ajouter un collaborateur à un site

1. Dans le [[Ruban]], sélectionnez **Publier les modifications** (![[lucide-send.svg#icon]]) ou ouvrez la [[Palette de commandes]] et tapez **Publish: Publish changes...**
2. Dans la boîte de dialogue **Publier les modifications**, cliquez sur **Modifier les options du site** ![[lucide-cog.svg#icon]].
3. À côté de **Collaboration sur le site**, sélectionnez **Gérer**.
4. Dans **Inviter un utilisateur**, entrez l'adresse électronique du collaborateur.
5. Sélectionnez **Ajouter**.

## Retirer un collaborateur d'un site

1. Dans le [[Ruban]], sélectionnez **Publier les modifications** (![[lucide-send.svg#icon]]) ou ouvrez la [[Palette de commandes]] et tapez **Publish: Publish changes...**
2. Dans la boîte de dialogue **Publier les modifications**, cliquez sur **Modifier les options du site** ( ![[lucide-cog.svg#icon]] ).
3. À côté de **Collaboration sur le site**, sélectionnez **Gérer**.
4. À côté du collaborateur que vous souhaitez retirer, sélectionnez **Supprimer l'utilisateur** ( ![[lucide-x.svg#icon]]).

## Synchroniser les modifications entre collaborateurs

Obsidian Publish ne synchronise pas automatiquement les modifications publiées entre les coffres locaux. Les collaborateurs doivent plutôt synchroniser manuellement les modifications des autres collaborateurs.

Pour mettre à jour une note locale avec les modifications du site en ligne :

1. Dans le [[Ruban]], sélectionnez **Publier les modifications** (![[lucide-send.svg#icon]]) ou ouvrez la [[Palette de commandes]] et tapez **Publish: Publish changes...**
2. Faites un clic droit ou un appui long sur la modification que vous souhaitez synchroniser, puis sélectionnez **Utiliser la version en ligne**. **Cela écrasera la note dans votre coffre local.**

> [!tip] Nous recommandons d'utiliser un autre outil pour synchroniser les modifications entre les coffres, comme [[Introduction à Obsidian Sync|Obsidian Sync]] ou [git](https://git-scm.com/).

## Autorisations

Le tableau suivant répertorie les autorisations de site disponibles pour les propriétaires et les collaborateurs :

| Action                                          | Collaborateur | Propriétaire |
|-------------------------------------------------|:-------------:|:------------:|
| Publier de nouvelles pages                      | ✓             | ✓            |
| Publier des modifications sur les pages publiées | ✓             | ✓            |
| Dépublier des pages                             | ✓             | ✓            |
| Configurer les options du site                  |               | ✓            |
| Gérer les autorisations                         |               | ✓            |
