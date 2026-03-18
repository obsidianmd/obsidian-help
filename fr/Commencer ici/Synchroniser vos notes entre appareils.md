---
permalink: sync-notes
cssclasses:
  - soft-embed
description: How to sync your Obsidian notes across devices and platforms.
publish: true
mobile: true
localized: '2026-03-18'
aliases:
  - Sync your notes across devices
---
Obsidian stocke les notes localement sur votre appareil afin que vous y ayez toujours accès, même hors ligne. Pour accéder à vos notes sur plusieurs appareils, vous devez configurer une méthode de synchronisation.

Ce guide couvre les méthodes de synchronisation courantes, avec des conseils pour éviter la perte de données et garantir une expérience fluide.

Nous vous recommandons également de lire notre [[Sauvegarder vos fichiers Obsidian|guide de sauvegarde]] pour protéger vos données.

## Méthodes de synchronisation

Avec Obsidian, vos données sont simplement stockées sous forme de fichiers dans un dossier appelé [[Coffres locaux et distants|coffre]]. Cela signifie qu'il existe de nombreuses façons de synchroniser vos données.

Voici quelques méthodes de synchronisation couramment utilisées, rapportées par les membres de la [communauté Obsidian](https://obsidian.md/community) :

1. **Synchronisation propriétaire** : [[#Obsidian Sync]]
2. **Synchronisation cloud tierce** : [[#iCloud]], [[#OneDrive]] et [[#Google Drive]]
3. **Synchronisation locale** : [[#Syncthing]]
4. **Contrôle de version** : [[#Git]] et [[#Working Copy]]

## Obsidian Sync

**Systèmes recommandés** : `Windows`, `macOS`, `Linux`, `iOS`, `Android`

La méthode de synchronisation la plus simple et officiellement prise en charge est notre solution propriétaire : [[Introduction à Obsidian Sync|Obsidian Sync]].

Obsidian Sync maintient vos coffres synchronisés sur tous vos appareils en utilisant un coffre distant hors site pour créer des copies de vos données. Une copie locale reste sur vos appareils en permanence.

Suivez le [[Configurer Obsidian Sync|guide de configuration]] pour paramétrer Obsidian Sync.

## iCloud

**Systèmes recommandés** : `macOS`, `iOS`, `iPadOS`

iCloud peut être utilisé pour synchroniser des coffres entre iOS et macOS. Cependant, **iCloud Drive sur Windows** peut entraîner des duplications ou des corruptions de fichiers.

**Comment créer et stocker votre coffre dans iCloud Drive** :

- **Activer iCloud Drive** :
    - Sur macOS : Allez dans **Préférences Système → Identifiant Apple → iCloud → iCloud Drive**.
    - Sur iOS : Allez dans **Réglages → [Votre nom] → iCloud → iCloud Drive**.
- **Créer un nouveau coffre dans iCloud** :
    - Sur macOS :
        1. Ouvrez **Obsidian** et sélectionnez **Créer un nouveau coffre**.
        2. Dans le sélecteur de fichiers, naviguez vers **iCloud Drive → Obsidian**.
        3. Créez un dossier pour votre coffre et nommez-le.
        4. Sélectionnez **Créer** pour terminer.
    - Sur iOS :
        1. Ouvrez **Obsidian** et appuyez sur **Créer un nouveau coffre**.
        2. Entrez un nom pour votre coffre.
        3. Activez **Stocker dans iCloud**.
        4. Appuyez sur **Créer**.
- **Ouvrir le coffre sur un autre appareil Apple** :
    - Sur un autre appareil macOS ou iOS, ouvrez **Obsidian**, accédez au [[Gérer les coffres|Sélecteur de coffres]], et sélectionnez **Ouvrir un dossier comme coffre**. Naviguez vers **iCloud Drive → Obsidian**.

> [!warning]+ Emplacement du dossier sur iOS et iPadOS
> Lorsque vous utilisez iCloud sur des appareils mobiles, assurez-vous que votre coffre est stocké au bon emplacement : `iCloud Drive/Obsidian/[Nom de votre coffre]`.
> 
> Les coffres doivent se trouver dans le dossier **Obsidian** au sein d'iCloud Drive. Le dossier à droite avec l'icône Obsidian est le bon. N'utilisez pas le dossier simple sans l'icône de l'application.
> 
> ![[iCloud-folder-location.png#interface]]
> 
> Pour vérifier l'emplacement de votre coffre, ouvrez l'application **Fichiers**, appuyez sur **Parcourir**, sélectionnez **iCloud Drive** sous **Emplacements**, et confirmez que votre coffre se trouve dans le dossier **Obsidian**. Si votre coffre est à un emplacement différent, vous pourriez rencontrer des problèmes de synchronisation.

> [!tip] Bonnes pratiques
> - Pour **macOS 14 (Sonoma) et versions antérieures** : Désactivez **Optimiser le stockage du Mac** dans les paramètres iCloud pour empêcher le déchargement des fichiers. Ce paramètre affecte tout le stockage iCloud sur l'appareil, pas seulement Obsidian.
> - Pour **macOS 15 (Sequoia)** : Faites un clic droit sur le dossier **Obsidian** dans iCloud Drive et sélectionnez **Garder téléchargé**.

## OneDrive

**Systèmes recommandés** : `Windows`, `macOS` (fonctionnalité limitée sur Android)

[OneDrive](https://support.microsoft.com/en-us/office/Sync-with-OneDrive-bb89981b-e382-4969-b8fd-d413a90b6db3#ID0EAABAAA=Set_up) est une option de stockage cloud populaire pour les utilisateurs Windows et macOS. Cependant, il présente des limitations sur Android et n'est pas officiellement pris en charge pour la synchronisation des coffres Obsidian sur iOS.

> [!info] Garder les fichiers disponibles hors ligne
> Avant d'utiliser OneDrive pour la synchronisation, assurez-vous que le dossier de votre coffre est marqué comme **Toujours garder sur cet appareil**. Cela empêche OneDrive de décharger les fichiers et de faire croire à Obsidian qu'ils sont manquants.

**Comment créer et stocker votre coffre dans OneDrive** :

1. **Configurer OneDrive** :
   - Sur Windows : Connectez-vous via l'application OneDrive ou votre compte Microsoft.
   - Sur macOS : Téléchargez l'application OneDrive et connectez-vous.
2. **Créer un nouveau coffre dans OneDrive** :
   - Sur Windows/macOS :
     1. Ouvrez l'**Explorateur de fichiers** (Windows) ou le **Finder** (macOS) et naviguez vers **OneDrive → Documents**.
     2. Créez un nouveau dossier (par exemple, \"Coffre Obsidian\").
     3. Ouvrez **Obsidian**, sélectionnez **Créer un nouveau coffre**, et sélectionnez le dossier OneDrive.
3. **Ouvrir le coffre sur un autre appareil** :
   - Sur un autre appareil, ouvrez **Obsidian**, accédez au [[Gérer les coffres|Sélecteur de coffres]], et sélectionnez **Ouvrir un dossier comme coffre**. Naviguez vers **OneDrive → Documents**.

> [!info] Synchronisation Android
> OneDrive peut ne pas bien fonctionner pour la synchronisation Android. Envisagez d'utiliser des applications comme [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) ou [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite).

> [!tip] Bonnes pratiques
> - Gardez toujours les fichiers de votre coffre **Disponibles hors ligne** en faisant un clic droit sur le dossier et en sélectionnant **Toujours garder sur cet appareil**.
> - Évitez d'utiliser la fonctionnalité **Fichiers à la demande** de OneDrive pour les coffres afin de prévenir les problèmes de synchronisation.

## Google Drive

**Systèmes recommandés** : `Windows`, `macOS`, `Android` (fonctionnalité limitée sur iOS)

[Google Drive](https://support.google.com/drive/answer/10838124?hl=en) est une autre solution de stockage cloud populaire. Bien qu'il ne soit pas officiellement pris en charge pour la synchronisation des coffres Obsidian, vous pouvez utiliser des applications et modules tiers pour synchroniser entre les appareils.

> [!info] Prise en charge iOS
> Google Drive n'est pas officiellement pris en charge pour la synchronisation des coffres Obsidian sur iOS. Envisagez d'utiliser une solution tierce ou un module pour synchroniser sur iOS.

**Comment créer et stocker votre coffre dans Google Drive** :

1. **Configurer Google Drive** :
    - Sur Windows ou macOS : Téléchargez l'application Google Drive et connectez-vous.
    - Sur Android : Assurez-vous que Google Drive est activé et connecté.
2. **Créer un nouveau coffre dans Google Drive** :
    - Sur Windows/macOS :
        1. Ouvrez l'**Explorateur de fichiers** (Windows) ou le **Finder** (macOS) et naviguez vers **Google Drive**.
        2. Créez un nouveau dossier (par exemple, \"Coffre Obsidian\").
        3. Ouvrez **Obsidian**, sélectionnez **Créer un nouveau coffre**, et sélectionnez le dossier Google Drive.
3. **Ouvrir le coffre sur un autre appareil** :
    - Sur un autre appareil, ouvrez **Obsidian**, accédez au [[Gérer les coffres|Sélecteur de coffres]], et sélectionnez **Ouvrir un dossier comme coffre**. Naviguez vers votre dossier Google Drive.

> [!tip] Bonnes pratiques
> - Définissez les fichiers du coffre comme **Disponibles hors ligne** dans Google Drive pour éviter les problèmes de synchronisation dus au déchargement.
> - Pour iOS, envisagez des méthodes alternatives comme [[Introduction à Obsidian Sync|Obsidian Sync]], [[#iCloud]], ou utilisez le module **Remotely Save**.

## Syncthing

**Systèmes recommandés** : `Windows`, `macOS`, `Linux`

Syncthing est un outil de synchronisation de fichiers décentralisé qui ne repose pas sur le stockage cloud. Il synchronise votre coffre directement entre les appareils via le réseau ou Internet.

> [!info]+ Prise en charge Android
> L'application Android officielle de Syncthing n'est plus maintenue. Cependant, un fork communautaire appelé [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) poursuit activement le développement et peut être utilisé sur les appareils Android.

**Comment créer et stocker votre coffre avec Syncthing** :

1. **Configurer Syncthing** :
   - Installez Syncthing sur chaque appareil. Consultez le [site web de Syncthing](https://syncthing.net/) pour les guides d'installation.
   - Sur Android, installez [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) depuis les versions GitHub ou F-Droid.
2. **Créer et configurer un dossier partagé** :
   - Sur tous les appareils :
     1. Ouvrez Syncthing et créez un dossier partagé. Définissez le chemin du dossier vers votre coffre Obsidian.
     2. Assurez-vous que le même dossier est sélectionné sur tous les appareils.
     3. Configurez les préférences de synchronisation du dossier (par exemple, **Envoi et réception** pour une synchronisation bidirectionnelle).
3. **Ouvrir le coffre dans Obsidian** :
   - Une fois le dossier synchronisé entre les appareils, ouvrez **Obsidian**, accédez au [[Gérer les coffres|Sélecteur de coffres]], et sélectionnez **Ouvrir un dossier comme coffre**.

> [!info] Disponibilité des appareils
> Syncthing fonctionne mieux lorsqu'au moins un appareil est toujours allumé pour assurer une synchronisation continue.

> [!tip] Bonnes pratiques
> - Pour la synchronisation locale, assurez-vous que tous les appareils sont connectés au même réseau.
> - Excluez `.obsidian` de la synchronisation si vous souhaitez des paramètres séparés sur chaque appareil.
> - Utilisez des modèles d'exclusion pour éviter de synchroniser les fichiers temporaires ou de sauvegarde.

## Git

**Systèmes recommandés** : `Windows`, `macOS`, `Linux`

**Git** est un système de contrôle de version qui vous permet de suivre les modifications, de collaborer avec d'autres personnes et de synchroniser vos coffres via des dépôts comme GitHub, GitLab ou un serveur auto-hébergé.

**Comment synchroniser votre coffre avec Git** :

1. **Configurer un dépôt distant** :
    - Créez un dépôt sur une plateforme d'hébergement Git (par exemple, GitHub, GitLab ou un serveur auto-hébergé).
2. **Synchroniser votre coffre** :
    1. Ouvrez un terminal ou une interface graphique Git (par exemple, GitKraken, Sourcetree).
    2. Initialisez un dépôt Git dans le dossier de votre coffre avec `git init`.
    3. Ajoutez le dépôt distant : `git remote add origin [URL]`.
    4. Validez vos modifications : `git add .` et `git commit -m "Votre message"`.
    5. Poussez les modifications : `git push origin main`.
3. **Récupérer les modifications sur d'autres appareils** :
    - Clonez le dépôt sur un autre appareil et récupérez les modifications avec `git pull origin main`.

> [!info] Synchronisation manuelle requise
> Git offre un contrôle de version robuste, mais la synchronisation n'est pas automatique. Vous devez manuellement pousser et récupérer les modifications.

## Synchronisation iPhone et iPad

**Options recommandées** :
- [[Introduction à Obsidian Sync|Obsidian Sync]]
- [[#iCloud]]

> [!info] Évitez de mélanger les services de synchronisation
> Évitez de synchroniser le même coffre via plusieurs services (par exemple, utiliser à la fois Obsidian Sync et iCloud simultanément) pour prévenir les conflits de données ou la corruption.

**Options non prises en charge** :
Les services suivants ne sont pas officiellement pris en charge sur iOS, mais les utilisateurs ont trouvé des solutions de contournement en utilisant des outils ou modules tiers :

- Dropbox
- Google Drive
- OneDrive
- Syncthing

Certains utilisateurs ont réussi à utiliser des modules comme **Remotely Save** ou **LiveSync** pour synchroniser des coffres sur iOS. Cependant, ces méthodes ne sont pas officiellement prises en charge et les résultats peuvent varier.

### Working Copy

**Systèmes recommandés** : `iOS`
**Nécessite** : [[#Git]]

**Working Copy** est un client Git pour iOS qui vous permet de cloner, valider et pousser des modifications vers un dépôt Git. Il fonctionne bien pour synchroniser les coffres Obsidian via Git, bien que certaines fonctionnalités nécessitent un achat intégré payant.

**Comment synchroniser votre coffre avec Working Copy** :

1. **Installer Working Copy** :
    - Téléchargez l'application **[Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)** sur votre iPhone ou iPad.
2. **Cloner votre dépôt Git** :
    - Ouvrez Working Copy, appuyez sur **Ajouter un dépôt**, et entrez l'URL de votre dépôt (par exemple, GitHub, GitLab).
3. **Lier le dépôt à Obsidian** :
    - Liez le dossier du dépôt cloné à un coffre vide dans **Obsidian**.
4. **Valider et pousser les modifications** :
    - Après avoir modifié des notes dans Obsidian, utilisez Working Copy pour **Valider** et **Pousser** les modifications vers le dépôt distant.
    - Sur les autres appareils, récupérez les modifications avec Git pour synchroniser le coffre.

> [!info] Utilisation par la communauté
> Bien que Working Copy ne soit pas officiellement pris en charge, de nombreux utilisateurs l'ont utilisé avec succès pour synchroniser des coffres avec Git.

## Questions fréquentes

**Pourquoi mon service de synchronisation préféré n'est-il pas officiellement pris en charge ?**

Contrairement à certaines applications de prise de notes qui accèdent à un seul fichier à la fois, Obsidian nécessite l'accès à l'ensemble du coffre pour ses fonctionnalités (par exemple, mettre à jour les liens lors du renommage d'un fichier). Cela rend difficile le fonctionnement fiable de certains services avec Obsidian.

**Pourquoi dois-je garder les fichiers « Disponibles hors ligne » ?**

Si des services comme OneDrive ou iCloud déchargent les fichiers (par exemple, en utilisant **Fichiers à la demande** ou **Optimiser le stockage du Mac**), Obsidian ne peut pas y accéder, ce qui provoque des problèmes de synchronisation. Marquez le dossier de votre coffre comme **Toujours garder sur cet appareil** (OneDrive) ou assurez-vous que **Garder téléchargé** est activé (iCloud).

**Comment gérer différentes configurations pour mes coffres ?**

Obsidian vous permet de personnaliser le dossier de configuration par appareil en utilisant la fonctionnalité [[Dossier de configuration|Dossiers de configuration]].
