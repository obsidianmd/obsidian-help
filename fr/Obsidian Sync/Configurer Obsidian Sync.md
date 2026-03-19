---
permalink: sync/setup
cssclasses:
  - soft-embed
description: >-
  Vous avez acheté Obsidian Sync et êtes prêt à commencer. Ce guide vous aidera
  à configurer et ajuster vos paramètres Obsidian Sync pour une utilisation
  quotidienne.
publish: true
mobile: true
localized: '2026-03-18'

---
Vous avez acheté Obsidian Sync et êtes prêt à commencer. Ce guide vous aidera à configurer et ajuster vos paramètres Obsidian Sync pour une utilisation quotidienne.

- **Nouveau sur Obsidian Sync ?** Voir : [[#Configurer Obsidian Sync pour la première fois]]
- **Connecter un second appareil ?** Voir : [[#Synchroniser un coffre distant sur un autre appareil]]
- **Besoin de faire des modifications ?** Voir : [[#Gérer vos coffres distants]]

## Configurer Obsidian Sync pour la première fois

Dans cette section, vous allez créer un nouveau [[Coffres locaux et distants|coffre distant]] et le connecter à un coffre local existant. Vous n'avez pas besoin de créer un nouveau coffre local vide pour utiliser Obsidian Sync à cette fin.

> [!info] Votre coffre actuel se trouve-t-il dans un dossier iCloud, OneDrive, Dropbox ou un autre service de synchronisation ? Si **oui**, ou si vous n'êtes **pas sûr**, veuillez lire [[Questions fréquentes#Puis-je utiliser un service de synchronisation tiers avec Obsidian Sync ?|ceci]] et [[Passer à Obsidian Sync]] avant de poursuivre.

**Prérequis**

- Un compte Obsidian. Si vous n'en avez pas, [inscrivez-vous maintenant](https://obsidian.md/fr/auth?returnto=%2Faccount%2Fsync#signup).
- Un abonnement Obsidian Sync [[Forfaits et limites de stockage|actif]]. Si vous n'en avez pas, abonnez-vous depuis [le tableau de bord de votre compte](https://obsidian.md/fr/account/sync).
- **Recommandé** : Un [[Sauvegarder vos fichiers Obsidian|système de sauvegarde]] en place pour vos fichiers Obsidian. Un service de synchronisation n'est pas une sauvegarde.

### Se connecter avec votre compte Obsidian

1. Ouvrez les **[[Paramètres]]**.
2. Dans la barre latérale, sélectionnez **Général**.
3. Sous **Compte → Votre compte**, sélectionnez **Se connecter**.
4. Dans **Adresse électronique**, entrez votre adresse électronique.
5. Dans **Mot de passe**, entrez votre mot de passe.
6. Sélectionnez **Se connecter**.

### Activer Obsidian Sync

1. Ouvrez les **[[Paramètres]]**.
2. Dans la barre latérale sous **Options**, sélectionnez **Modules principaux**.
3. Activez **Sync**.

### Créer un nouveau coffre distant

1. Ouvrez les **[[Paramètres]]**.
2. Dans la barre latérale, sélectionnez **Sync**.
3. À côté de **Coffre distant**, sélectionnez **Choisir**.
4. Sélectionnez **Créer un nouveau coffre**.
5. Dans **Nom du coffre**, entrez le nom du coffre distant.
6. Dans **Région**, choisissez la [[#Serveurs de synchronisation régionaux|région]] de votre serveur pour votre coffre distant.
7. Dans **Mot de passe de chiffrement**, choisissez un mot de passe pour votre coffre. Cela crée un coffre avec chiffrement de bout en bout. Le mot de passe du coffre est distinct de votre compte Obsidian et peut être différent pour chacun de vos coffres. Pour plus d'informations, consultez [[Sécurité et confidentialité]].
8. Sélectionnez **Créer**.

### Se connecter à un coffre distant

1. Sélectionnez **Connecter** à côté de votre coffre nouvellement créé.
2. Entrez le mot de passe que vous avez configuré pour le coffre dans le champ **Mot de passe de chiffrement** si vous avez opté pour le [[Obsidian Sync/Sécurité et confidentialité#Que signifie le chiffrement de bout en bout ?|chiffrement de bout en bout]].
3. Sélectionnez **Déverrouiller le coffre**.
4. **Ne commencez pas encore la synchronisation.** Vérifiez vos paramètres de synchronisation dans [[#Ajuster les paramètres d'Obsidian Sync|ajuster les paramètres d'Obsidian Sync]].
    - Si vous souhaitez commencer la synchronisation immédiatement, passez à [[#Commencer la synchronisation avec Obsidian Sync|commencer la synchronisation avec Obsidian Sync]].
5. Si vous ne l'avez pas encore fait, fermez ou ignorez la fenêtre contextuelle vous invitant à **Exclure des dossiers** et **Commencer la synchronisation**. Passez à l'étape suivante.

#### Ajuster les paramètres d'Obsidian Sync

1. Naviguez vers **[[Paramètres]]** → **Sync** si nécessaire.
2. Si aucun nom d'appareil n'a été ajouté, ajoutez-en un pour faciliter la lecture de vos journaux de synchronisation !
3. Activez ou désactivez les paramètres sous **Synchronisation sélective** et **Synchronisation de la configuration du coffre** pour indiquer quels éléments doivent être synchronisés vers et depuis le coffre distant.
    - **Note** : Si vous vous êtes récemment déconnecté d'un coffre distant et que vous vous reconnectez sans avoir redémarré l'application, certains paramètres peuvent déjà être activés.
4. Si vous modifiez des paramètres, redémarrez complètement Obsidian.
5. Une fois Obsidian redémarré, retournez dans **[[Paramètres]]** → **Sync**.

#### Commencer la synchronisation avec Obsidian Sync

Si vous commencez la synchronisation après vous être connecté à un coffre distant, vous verrez un bouton **Commencer la synchronisation**. Sélectionnez ce bouton pour lancer la synchronisation.

Si vous commencez la synchronisation après avoir ajusté les paramètres d'Obsidian Sync et redémarré l'application, vous verrez un bouton **Reprendre** dans les paramètres de Sync. Sélectionnez ce bouton pour lancer la synchronisation.

> [!done] Statut de la synchronisation
> Lorsqu'Obsidian Sync a terminé, un cercle vert avec une coche ( ![[obsidian-icon-sync-synced.svg#icon]] ) apparaît dans le coin inférieur droit (bureau) ou dans la barre latérale droite (mobile). Le journal de synchronisation affichera également « Fully Synced » comme l'un de ses messages les plus récents.
>
> Pour plus de détails sur les statuts de synchronisation, consultez [[Icône de statut et messages]].
^obsidian-sync-status

Pour connecter d'autres appareils à votre coffre distant nouvellement créé et synchronisé, passez à [[Configurer Obsidian Sync#Synchroniser un coffre distant sur un autre appareil|Synchroniser un coffre distant sur un autre appareil]].

Pour en savoir plus sur les paramètres et les fichiers, passez à [[Paramètres de Sync et synchronisation sélective]].

## Synchroniser un coffre distant sur un autre appareil

Dans cette section, vous avez déjà créé un coffre distant et y avez téléversé des données. Maintenant, vous souhaitez y connecter vos autres appareils.

**Prérequis**
- Un compte Obsidian. Si vous n'en avez pas, [inscrivez-vous maintenant](https://obsidian.md/fr/account#mode=signup).
- Un abonnement Obsidian Sync actif. Si vous n'en avez pas, abonnez-vous depuis [le tableau de bord de votre compte](https://obsidian.md/fr/account).
- Sync activé dans les paramètres des [[Modules principaux]].
- Un coffre distant actif. Si vous n'en avez pas encore créé un, veuillez d'abord créer un [[Configurer Obsidian Sync#Créer un nouveau coffre distant|coffre distant]].
- **Recommandé** : Un [[Sauvegarder vos fichiers Obsidian|système de sauvegarde]] en place pour vos fichiers Obsidian sur votre appareil le plus utilisé. Un service de synchronisation n'est pas une sauvegarde.

### Synchroniser votre coffre depuis le sélecteur de coffres

Si vous venez d'installer Obsidian, lorsque vous ouvrez le programme, le [[Gérer les coffres|sélecteur de coffres]] vous sera présenté. Pour créer un nouveau coffre local à partir du contenu d'un coffre distant, suivez les étapes suivantes.

1. Ouvrez Obsidian (en supposant que c'est la première fois que vous l'ouvrez)
2. Sélectionnez l'une des options selon votre installation :
	1. **Bureau** : Dans la section qui indique Ouvrir un coffre depuis Obsidian Sync, choisissez **Configurer**
	2. **Mobile/Tablette** : **Configurer Obsidian Sync**
3. Connectez-vous avec votre compte utilisateur Obsidian
	1. Si l'[[Authentification à 2 facteurs|A2F]] est configurée, entrez votre code A2F.
4. On vous demandera de choisir quel coffre distant vous souhaitez synchroniser sur cet appareil. Sélectionnez **Connecter**.
5. On vous demandera de choisir un nom pour le coffre local qui sera créé sur l'appareil pour contenir ces données. Entrez le nom de votre choix.
	1. Si vous utilisez des [[Obsidian URI]], vous voudrez utiliser le même nom que le coffre local sur votre autre appareil.
6. Sélectionnez **Créer**.
7. La fenêtre des coffres distants apparaîtra momentanément pendant qu'Obsidian Sync se connecte à votre serveur et valide l'abonnement. Elle vous présentera ensuite une fenêtre *Configuration de la connexion*.
	1. Il est fortement recommandé de fermer ou de faire glisser vers le bas cette fenêtre, et d'[[#Ajuster les paramètres d'Obsidian Sync|ajuster les paramètres d'Obsidian Sync]] d'abord.
	2. Si vous modifiez des paramètres de Sync, veuillez recharger ou redémarrer Obsidian.

### Synchroniser votre coffre depuis les paramètres d'Obsidian

Si vous avez déjà créé un coffre local sur cet appareil et que vous souhaitez connecter ce coffre local à un coffre distant, les instructions sont très similaires à [[#Configurer Obsidian Sync pour la première fois]].

![[Configurer Obsidian Sync#Se connecter avec votre compte Obsidian]]

![[Configurer Obsidian Sync#Activer Obsidian Sync]]

#### Se connecter à un coffre distant

1. Ouvrez les **[[Paramètres]]**.
2. Dans la barre latérale, sélectionnez **Sync**.
3. À côté de **Choisir un coffre distant**, cliquez sur **Choisir**.
4. Cliquez sur **Connecter** à côté du coffre distant auquel vous souhaitez vous connecter.
5. Dans **Mot de passe de chiffrement**, entrez le mot de passe de votre coffre, si vous en avez un.
6. Vous serez invité à commencer la synchronisation. Il est recommandé d'attendre et d'ajuster d'abord vos paramètres de synchronisation. Si vous souhaitez synchroniser l'ensemble du coffre sur l'appareil tel quel, vous pouvez **Commencer la synchronisation**.

> [!warning] Si le coffre sur votre appareil contient déjà des notes (non recommandé), vous serez averti que ces notes seront fusionnées avant de poursuivre. Les conflits seront résolus via la [[Résoudre les problèmes d'Obsidian Sync#Résolution de conflits|résolution de conflits de Sync]].

![[Configurer Obsidian Sync#Ajuster les paramètres d'Obsidian Sync]]

![[Configurer Obsidian Sync#Commencer la synchronisation avec Obsidian Sync]]

## Gérer vos coffres distants

Vous avez créé et vous êtes connecté à un coffre distant. Vous avez peut-être également synchronisé ce coffre distant sur plusieurs appareils. Cette section couvre certaines des autres instructions courantes dont vous pourriez avoir besoin pour gérer ce coffre distant.

### Se déconnecter d'un coffre distant

1. Ouvrez les **[[Paramètres]]** d'Obsidian.
2. Sélectionnez **Sync** dans la barre latérale.
3. Cliquez sur le bouton **Déconnecter** à côté de Coffres distants.

Vous êtes maintenant déconnecté du coffre distant et ne synchronisez plus sur cet appareil.

### Supprimer un coffre distant

> [!tip] La suppression d'un coffre distant ne supprimera pas vos données locales sur votre appareil.

1. Ouvrez les **[[Paramètres]]**.
2. Dans la barre latérale, sélectionnez **Sync**.
3. Sélectionnez **Gérer** à côté de Coffres distants. Une fenêtre s'ouvrira avec la liste de vos coffres distants.
4. Sélectionnez l'icône de la corbeille ( ![[lucide-trash-2.svg#icon]] ) à côté du coffre distant que vous souhaitez supprimer.
5. Confirmez la suppression en sélectionnant le bouton rouge **Supprimer**.
6. Votre coffre distant a été supprimé.

> [!info] Si aucune icône de corbeille n'est visible, vous devrez peut-être d'abord vous déconnecter du coffre distant. Une fois déconnecté, sélectionnez le bouton **Choisir** pour ouvrir la liste des coffres distants.

### Serveurs de synchronisation régionaux

Obsidian Sync vous permet de choisir l'emplacement d'hébergement de votre coffre distant. Si vous utilisez la version `1.4.16` ou antérieure d'Obsidian, l'emplacement sera automatiquement choisi pour vous.

Si vous n'êtes pas sûr de la région de votre coffre actuel, consultez [[Obsidian Sync/Sécurité et confidentialité#Où puis-je trouver mon serveur Sync actuel et où est-il hébergé ?|Où puis-je trouver mon serveur Sync actuel et où est-il hébergé ?]] pour obtenir des indications.

![[sync-regional-sync-servers.png#interface|300]]

Après avoir sélectionné un emplacement, votre centre de données **ne peut pas** être déplacé vers un autre serveur sans retéléverser vos données. Pour changer de région, suivez le [[Régions de Sync|guide des régions de Sync des coffres]].

![[Obsidian Sync/Sécurité et confidentialité#^sync-geo-regions]]

## Prochaines étapes

Voici quelques documents suggérés à lire ensuite.

- Découvrez-en plus sur la [[Paramètres de Sync et synchronisation sélective|sélection des fichiers et paramètres à synchroniser]].
- Apprenez ce qui se passe si votre coffre distant [[Historique des versions|se remplit]].
- [[Collaborer sur un coffre partagé]] avec un autre utilisateur d'Obsidian Sync.
- Consultez la [[Questions fréquentes|FAQ de Sync]] pour obtenir des réponses aux questions courantes.
