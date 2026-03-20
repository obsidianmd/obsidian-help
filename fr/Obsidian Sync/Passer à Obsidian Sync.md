---
permalink: sync/switch
cssclasses:
  - soft-embed
description: Découvrez comment effectuer la transition de votre solution de synchronisation actuelle vers Obsidian Sync.
publish: true
mobile: true
localized: '2026-03-18'

---
Découvrez comment passer de votre solution de synchronisation actuelle à Obsidian Sync.

> [!warning] Évitez d'utiliser plusieurs solutions pour synchroniser les mêmes fichiers
> Nous [[Questions fréquentes#Puis-je utiliser un service de synchronisation tiers avec Obsidian Sync ?|ne recommandons pas]] d'utiliser Obsidian Sync en parallèle de services de stockage en nuage (par ex. iCloud, Dropbox, OneDrive, Google Drive) car cela peut provoquer des conflits. Cependant, les services de stockage en nuage peuvent jouer un rôle dans votre stratégie de [[Sauvegarder vos fichiers Obsidian|sauvegarde]].

## Déplacer votre coffre hors de votre service de synchronisation tiers ou de stockage en nuage

Si votre coffre est stocké dans l'un des emplacements suivants, il est probablement synchronisé par un service tiers :

- **Windows** : `C:\Users\Username\Desktop` ou `C:\Users\Username\Documents`
- **macOS** : `/users/username/Desktop` ou `/users/username/Documents`
- **iOS** : Le dossier **iCloud** dans l'application Fichiers
- **Autre** : Tout dossier sous un service de synchronisation, comme `Drive/my-vault`, `Dropbox/my-vault`, `pSync/my-vault`, etc.

Bien qu'Android et Linux posent généralement moins de problèmes à ce niveau, il est tout de même utile de vérifier l'emplacement de votre coffre sur ces appareils.

> [!tip] Si votre coffre local actuel est connecté à un coffre distant, Obsidian essaiera de détecter si le coffre se trouve dans un service de synchronisation. Si c'est le cas, un message apparaîtra en haut des paramètres d'Obsidian Sync.

Pour éviter les conflits avec les services de synchronisation, nous recommandons de stocker vos coffres Obsidian aux emplacements suivants :

- **Windows** : Emplacements recommandés par ordre de préférence :
    1. `D:\` ou tout autre lecteur non-C et non réseau sur votre appareil
    2. `C:\Vaults` (si vous avez les permissions pour utiliser le lecteur C:\)
    3. `C:\Users\Username\Vaults` (si vous devez garder votre coffre dans C:\Users\Username, assurez-vous que OneDrive est configuré pour ne pas supprimer les fichiers. OneDrive est généralement moins intrusif en dehors des dossiers `Desktop` et `Documents`.)
- **macOS** : `/users/username/vaults`
- **Linux** : Pas de recommandation spécifique en raison de la variété des systèmes de fichiers. Assurez-vous simplement qu'Obsidian dispose d'un accès complet en lecture/écriture et qu'aucun service de synchronisation ne gère le dossier.
- **iOS/iPadOS** : Stockez le coffre dans **Sur mon iPhone** ou **Sur l'appareil**.
- **Android** : Utilisez le dossier `Documents/` sur votre appareil.

## Déplacer votre coffre avec Obsidian sur ordinateur

![[Gérer les coffres#Déplacer un coffre vers un autre dossier]]

## Déplacer votre coffre sur mobile

Sur les appareils mobiles, Obsidian fonctionne dans un environnement cloisonné, ce qui signifie que vous ne pouvez pas déplacer les coffres depuis l'application comme sur ordinateur.

### Android

Les systèmes de fichiers Android varient considérablement selon les appareils, mais en général, suivez les mêmes étapes que pour déplacer votre coffre manuellement, en vous assurant qu'il est retiré de tout service de synchronisation sur votre appareil.

### iOS et iPadOS

Pour déplacer un coffre iCloud existant vers votre appareil, suivez ces étapes :

> [!note] Si vous avez déjà les données sur un autre appareil et avez configuré Obsidian Sync, il est recommandé de [[Configurer Obsidian Sync#Synchroniser un coffre distant sur un autre appareil|configurer un nouveau coffre local depuis Sync]] à la place.

- [[Sauvegarder vos fichiers Obsidian|Sauvegardez]] votre coffre.
- Créez un nouveau coffre sur votre appareil, en vous assurant que **Enregistrer dans iCloud Drive** est désactivé.
- Forcez la fermeture de l'application Obsidian sur tous les appareils pour mettre Sync en pause.
- Ouvrez l'application **Fichiers** sur votre appareil iOS/iPadOS.
- Appuyez longuement sur le dossier du coffre sous **iCloud Drive → Obsidian**, puis sélectionnez **Déplacer**.
- Déplacez le coffre vers **Sur mon iPhone/Appareil → Obsidian** et confirmez qu'il est maintenant visible.
- Appuyez sur **Copier**.
- Retournez dans **iCloud Drive → Obsidian** et supprimez l'ancien dossier du coffre.

Lorsque vous rouvrirez Obsidian, le coffre devrait afficher une icône de coffre au lieu d'une icône de nuage, confirmant qu'il n'est plus dans iCloud Drive. Obsidian Sync n'affichera également plus le message d'avertissement dans ses paramètres.

## Étapes suivantes

- Vous souhaitez démarrer avec Obsidian Sync ? [[Configurer Obsidian Sync]]
- Vous avez encore besoin d'aide ? Consultez [[Résoudre les problèmes d'Obsidian Sync]]
