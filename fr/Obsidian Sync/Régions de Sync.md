---
permalink: sync/region
cssclasses:
  - soft-embed
description: Déplacez votre coffre Sync vers une région différente.
publish: true
mobile: true
localized: '2026-03-18'
---
Lorsque vous créez un [[Coffres locaux et distants|coffre distant]] via [[Introduction à Obsidian Sync|Obsidian Sync]], vos données sont chiffrées et stockées sur l'un des serveurs régionaux de Sync d'Obsidian. Ce guide explique comment déplacer votre coffre Sync vers un serveur régional différent.

## Régions disponibles

Les régions suivantes sont disponibles avec Obsidian Sync. Nous recommandons d'utiliser **Automatique** ou de choisir un emplacement proche de vous pour réduire la latence et accélérer le processus de synchronisation.

![[Obsidian Sync/Sécurité et confidentialité#^sync-geo-regions]]

## Notez vos paramètres

Lorsque vous connectez un appareil au nouveau coffre distant, Sync peut utiliser les paramètres que vous avez activés à ce moment-là. Si vous conservez des paramètres différents sur différents appareils, notez-les avant de commencer. Par exemple, vous pourriez ne pas synchroniser les fichiers multimédias volumineux sur votre téléphone.

Sur chaque appareil qui utilise le coffre distant, ouvrez **[[Paramètres]] → Sync** et notez ces paramètres. Une capture d'écran fonctionne bien.

- **Synchronisation sélective**
- **Configuration de la synchronisation du coffre**
- **Dossiers exclus**
- Paramètres spécifiques à l'appareil, tels que **Nom de l'appareil** et **Résolution des conflits**

Consultez [[Paramètres de Sync et synchronisation sélective]] pour connaître le rôle de chaque paramètre et lesquels sont activés par défaut.

## Changer de région Sync

Pour changer la région de votre coffre distant, vous devrez recréer votre coffre sur un serveur Sync différent. Notez que vous pouvez également changer de région en utilisant l'assistant de migration [[Mettre à niveau le chiffrement de Sync]], si votre coffre distant est sur une version plus ancienne.

> [!danger] Les migrations sont destructives
> 
> **[[Sauvegarder vos fichiers Obsidian|Sauvegardez]] toujours votre coffre avant de procéder à une migration.**
> 
> Lorsque vous migrez un coffre distant, vos données seront remplacées. Cela signifie :
> 
> 1. Les données distantes seront supprimées des serveurs Obsidian, et les données du coffre seront re-téléversées à leur place.
> 2. Tout l'[[Historique des versions|historique des versions]] du coffre sera perdu.

![[Configurer Obsidian Sync#Se déconnecter d'un coffre distant]]

Si vous êtes sur le [[Forfaits et limites de stockage|forfait Standard]], vous devrez également [[#Supprimer un coffre distant|supprimer votre coffre distant]] avant de continuer.

![[Configurer Obsidian Sync#Créer un nouveau coffre distant]]

## Reconnecter vos autres appareils

Une fois que le nouveau coffre distant a terminé la synchronisation sur votre premier appareil, passez à chaque autre appareil qui utilisait l'ancien coffre distant. Travaillez sur un appareil à la fois.

1. Sur l'appareil, [[Configurer Obsidian Sync#Se déconnecter d'un coffre distant|déconnectez-vous de l'ancien coffre distant]].
2. [[Configurer Obsidian Sync#Synchroniser un coffre distant sur un autre appareil|Connectez-vous au nouveau coffre distant]]. Ne sélectionnez pas encore **Début de synchronisation**.
3. Réglez **Synchronisation sélective**, **Configuration de la synchronisation du coffre** et **Dossiers exclus** pour correspondre aux paramètres que vous avez notés pour cet appareil.
4. Redémarrez Obsidian. Sur mobile ou tablette, vous devrez peut-être forcer la fermeture de l'application.
5. Sélectionnez **Début de synchronisation** ou **Reprendre**, et attendez que Sync ait terminé avant de passer à l'appareil suivant.

De plus, vous pouvez [[#Supprimer un coffre distant|supprimer votre ancien coffre distant]] une fois que vous avez confirmé la transition vers votre nouveau coffre distant et sa région.
