---
permalink: sync/plans
description: Découvrez les différentes options d'abonnement disponibles pour Obsidian Sync.
publish: true
mobile: true
localized: '2026-03-18'
aliases:
  - Plans and storage limits
---
## Forfaits

Pour synchroniser vos notes avec [[Introduction à Obsidian Sync|Obsidian Sync]], vous avez besoin d'un forfait d'abonnement. Vous pouvez acheter un forfait Sync en vous connectant à [votre compte](https://obsidian.md/account/sync). Consultez la [page de présentation de Sync](https://obsidian.md/sync) pour les tarifs.

Voici une comparaison entre le forfait Standard et le forfait Plus :

|                                                              | Sync Standard | Sync Plus       |
| ------------------------------------------------------------ | ------------- | --------------- |
| Coffres synchronisés                                         | 1             | 10              |
| Taille maximale de fichier                                   | 5 Mo          | 200 Mo          |
| Stockage total                                               | 1 Go          | 10 Go à 100 Go  |
| [[Historique des versions]]                                          | 1 mois        | 12 mois         |
| Appareils                                                    | Illimités     | Illimités       |
| [[Collaborer sur un coffre partagé\|Coffres partagés]]       | Oui           | Oui             |

## Limites de stockage

La quantité de données que vous pouvez stocker avec [[Introduction à Obsidian Sync|Obsidian Sync]] dépend de votre forfait d'abonnement. Avec le forfait Sync Plus, vous pouvez acheter du stockage supplémentaire jusqu'à 100 Go via [le tableau de bord de votre compte](https://obsidian.md/account/sync). Consultez les [[Questions fréquentes]] pour plus de détails.

Il existe une limite de stockage unique au niveau du compte pour toutes les notes de l'ensemble de vos coffres. L'[[Historique des versions|historique des versions]] et les [[Pièces jointes|pièces jointes]] sont également comptabilisés dans la limite de stockage de votre compte.

Lorsque vous atteignez la limite de stockage de votre compte, le module Sync cesse de synchroniser les fichiers et vous êtes invité à nettoyer votre ou vos coffre(s) distant(s).

### Identifier et supprimer les fichiers volumineux

Pour identifier et supprimer les fichiers volumineux du coffre :

1. Ouvrez **[[Paramètres]] → Sync**.
2. Sélectionnez **View largest files** à côté de **Vault size over limit**.
	1. Si vous ne voyez pas **Vault size over limit**, cela signifie ==que vous n'avez pas encore atteint la limite de taille==.
3. Fermez la fenêtre **View largest files**.
4. Supprimez certains des fichiers volumineux dont vous n'avez plus besoin.
5. Attendez qu'Obsidian Sync termine la tâche. Cela peut prendre un certain temps.
6. Ouvrez **[[Paramètres]] → Sync**.
7. Sélectionnez **Prune** à côté de **Vault size over limit**. Cela supprimera les fichiers supprimés du coffre distant pour libérer de l'espace.

Une fois le nettoyage synchronisé avec le serveur, Obsidian Sync devrait reprendre son fonctionnement.

### Créer un nouveau coffre distant

Vous pouvez **créer un nouveau coffre distant** pour exclure les fichiers volumineux avant la synchronisation. L'historique des versions de vos fichiers sera réinitialisé si vous créez un nouveau coffre distant. Assurez-vous de ne pas avoir besoin de l'historique des versions pour les anciens fichiers avant de continuer.

Pour synchroniser vers un nouveau coffre distant, suivez ces étapes :

1. Ouvrez **[[Paramètres]] → Sync**.
2. Sélectionnez **Manage** à côté de **Remote vault**.
3. Choisissez **Create new vault** et suivez les étapes pour le créer. Si vous n'avez plus de coffres disponibles, vous devrez peut-être d'abord [[Configurer Obsidian Sync#Déconnecter un coffre distant|déconnecter]] le coffre distant actuel et le [[Configurer Obsidian Sync#Supprimer un coffre distant|supprimer]].
4. Configurez les fichiers exclus avant de commencer la synchronisation vers le nouveau coffre distant.
5. Redémarrez Obsidian pour appliquer vos modifications.
6. Ouvrez **[[Paramètres]] → Sync**.
7. Sélectionnez reprendre pour commencer la synchronisation vers le nouveau coffre distant.

Le nouveau coffre distant devrait être plus petit que le précédent, en raison de l'absence d'historique des versions et des fichiers exclus.

## Mettre à niveau votre forfait

Vous pouvez mettre à niveau votre forfait en vous connectant au [tableau de bord de votre compte](https://obsidian.md/account/sync). De là, vous pourrez passer de Sync Standard à Sync Plus et augmenter le stockage jusqu'à 100 Go.

## Rétrograder votre forfait

Si vous souhaitez rétrograder votre forfait Sync mais que votre utilisation de stockage dépasse la limite du nouveau forfait, vous devrez libérer de l'espace dans votre coffre distant. Actuellement, il n'existe pas de méthode directe pour supprimer rapidement des fichiers spécifiques d'un coffre distant existant. Cela est dû au fait que les pièces jointes sont conservées dans l'historique des versions pendant un maximum de deux semaines, et l'historique des versions est comptabilisé dans votre limite de stockage.

Le moyen le plus rapide de réduire votre utilisation de stockage Sync est de créer un nouveau coffre distant avec les pièces jointes désactivées, puis de supprimer l'ancien coffre distant qui dépasse les limites de stockage. Sachez que vous perdrez l'historique des versions en procédant ainsi.

Si vous passez de Sync Plus à Sync Standard, vous devrez également réduire le nombre de coffres présents à un seul avant que la rétrogradation ne soit autorisée.

### Préserver l'historique des versions

Les pièces jointes sont conservées dans votre [[Historique des versions|historique des versions]] pendant un maximum de deux semaines. Si vous prévoyez de rétrograder dans un avenir proche, vous pouvez commencer par supprimer les pièces jointes de votre coffre local.

Après deux semaines, celles-ci seront purgées du coffre distant et ne seront plus comptabilisées dans votre limite de stockage. À ce moment-là, vous pourrez rétrograder votre forfait tout en préservant l'historique des versions pour les autres types de fichiers, tels que les fichiers Markdown.
