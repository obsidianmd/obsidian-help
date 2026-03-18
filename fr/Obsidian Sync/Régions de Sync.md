---
permalink: sync/region
cssclasses:
  - soft-embed
description: Move your Sync vault to a different region.
publish: true
mobile: true
localized: '2026-03-18'
aliases:
  - Sync regions
---
Lorsque vous créez un [[Coffres locaux et distants|coffre distant]] via [[Introduction à Obsidian Sync|Obsidian Sync]], vos données sont chiffrées et stockées sur l'un des serveurs régionaux de Sync d'Obsidian. Ce guide explique comment déplacer votre coffre Sync vers un serveur régional différent.

## Régions disponibles

Les régions suivantes sont disponibles avec Obsidian Sync. Nous recommandons d'utiliser **Automatique** ou de choisir un emplacement proche de vous pour réduire la latence et accélérer le processus de synchronisation.

![[Obsidian Sync/Sécurité et confidentialité#^sync-geo-regions]]

## Changer de région Sync

Pour changer la région de votre coffre distant, vous devrez recréer votre coffre sur un serveur Sync différent. Notez que vous pouvez également changer de région en utilisant l'assistant de migration [[Mettre à niveau le chiffrement de Sync]], si votre coffre distant est sur une version plus ancienne.

> [!danger] Les migrations sont destructives
> 
> **[[Sauvegarder vos fichiers Obsidian|Sauvegardez]] toujours votre coffre avant de procéder à une migration.**
> 
> Lorsque vous migrez un coffre distant, vos données seront remplacées. Cela signifie :
> 
> 1. Les données distantes seront supprimées des serveurs Obsidian, et les données du coffre seront re-téléversées à leur place.
> 2. Tout l'[[Version history|historique des versions]] du coffre sera perdu.

![[Configurer Obsidian Sync#Se déconnecter d'un coffre distant]]

Si vous êtes sur le [[Forfaits et limites de stockage|forfait Standard]], vous devrez également [[#Supprimer un coffre distant|supprimer votre coffre distant]] avant de continuer.

![[Configurer Obsidian Sync#Créer un nouveau coffre distant]]

De plus, vous pouvez [[#Supprimer un coffre distant|supprimer votre ancien coffre distant]] une fois que vous avez confirmé la transition vers votre nouveau coffre distant et sa région.
