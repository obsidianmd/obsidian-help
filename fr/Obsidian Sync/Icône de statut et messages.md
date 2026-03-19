---
permalink: sync/messages
description: >-
  Cette page explique les icônes d'état d'Obsidian Sync et fournit des détails
  sur le journal d'activité de synchronisation.
publish: true
mobile: true
localized: '2026-03-18'

---
Obsidian Sync fournit plusieurs éléments pour indiquer l'état de la synchronisation, principalement l'[[#Icône de statut de Sync]] et le [[#Journal d'activité de Sync]]. Les détails concernant le contrôle de version dans Obsidian Sync sont couverts dans la page [[Historique des versions]].

## Icône de statut de Sync

L'icône de statut de Sync se trouve dans la [[Barre d'état]] sur la version de bureau et dans la [[Barre latérale#Ouvrir les barres latérales masquées|barre latérale droite]] sur mobile et tablette. L'icône reflète différents états de synchronisation :

- ![[obsidian-icon-sync-synced.svg#icon]] **Synchronisé** : Obsidian Sync a entièrement synchronisé vos fichiers. Cette icône est généralement verte.
- ![[obsidian-icon-sync-syncing.svg#icon]] **Synchronisation en cours** : Obsidian est en train de mettre à jour le coffre distant. Cette icône est généralement violette.
- ![[obsidian-icon-sync-paused.svg#icon]] **En pause** : La synchronisation a été mise en pause, mais Obsidian est toujours connecté au coffre distant. L'icône est généralement violette.
- ![[obsidian-icon-sync-disconnected.svg#icon]] **Déconnecté** : Le module principal Sync est actif, mais le [[Coffres locaux et distants|coffre local]] n'est pas connecté à un coffre distant. Cette icône est généralement rouge.

Cliquer ou appuyer sur l'icône ouvre un menu contextuel avec les options suivantes :
- ![[obsidian-icon-sync-paused.svg#icon]] Pause (ou ![[lucide-circle-play.svg#icon]] Reprendre si en pause)
- ![[lucide-history.svg#icon]] [[Historique des versions]] (Grisé si vous ne consultez pas une note)
- ![[lucide-align-left.svg#icon]] Ouvrir le [[#Journal d'activité de Sync|journal de Sync]]
- ![[lucide-trash-2.svg#icon]] [[Historique des versions#Restaurer un fichier supprimé|Fichiers supprimés]]
- ![[lucide-cog.svg#icon]] [[Paramètres de Sync et synchronisation sélective|Paramètres de Sync]]

## Journal d'activité de Sync

Obsidian Sync inclut un journal de synchronisation détaillé qui suit toutes les interactions entre vos fichiers locaux et le coffre distant. Le journal affiche les envois, les téléchargements, les suppressions et tout problème comme les conflits de fusion ou les problèmes de connectivité.

**Accéder au journal d'activité :**
- Cliquez sur l'icône de statut de synchronisation dans la barre d'état
- Allez dans **[[Paramètres]] → Sync → Journal d'activité**
- Utilisez **Palette de commandes → Sync : Ouvrir le journal d'activité**

Le journal fournit des horodatages et des détails pour chaque opération de synchronisation, ce qui le rend utile pour résoudre les problèmes de synchronisation.

> [!warning] Le journal de Sync n'est pas conservé après la fermeture d'Obsidian. Si vous rencontrez un problème, assurez-vous de copier le journal _avant_ de fermer l'application.

Le journal catégorise les messages dans les types suivants :

- [[#Messages généraux]]
- [[#Messages d'erreur]]
- [[#Messages de fichiers ignorés]]
- [[#Messages de compte]]

Vous pouvez filtrer le journal de Sync par **Tous**, **Erreurs**, **Ignorés** et **Conflits de fusion**. De plus, vous pouvez rechercher dans le journal de Sync en utilisant la barre de recherche dans la fenêtre Sync.

> [!summary] Nous avons inclus ci-dessous certains des messages que vous avez probablement rencontrés. La liste n'est pas exhaustive. Si vous rencontrez un problème et avez un message du journal de synchronisation dont vous n'êtes pas sûr, [[Aide et support#Contacter l'assistance Obsidian|contactez l'assistance Obsidian]].

### Messages généraux

Ce sont les messages courants que vous pouvez rencontrer au quotidien.

**Connecting to server**
Obsidian essaie de se connecter au [[Obsidian Sync/Sécurité et confidentialité#Où puis-je trouver mon serveur Sync actuel et où est-il hébergé ?|serveur Sync]] de votre coffre distant.

**Connected to server. Detecting changes...**
Obsidian a établi une connexion et compare le coffre local avec le coffre distant pour déterminer si des modifications sont nécessaires.

> [!info] Ce message peut également indiquer d'autres problèmes potentiels de Sync. Si vous le voyez de manière répétée et pensez qu'il reste des éléments à synchroniser, [[Aide et support#Contacter l'assistance Obsidian|contactez l'assistance Obsidian]].

**Fully synced**
- Le coffre local et le coffre distant sont entièrement synchronisés.

**Merging conflicted file**
Un conflit a été détecté pendant la synchronisation, et le fichier a été fusionné plutôt qu'écrasé. Consultez [[Résoudre les problèmes d'Obsidian Sync#Résolution des conflits|résolution des conflits]] pour plus d'informations. Si la fusion n'est pas souhaitée, vous pouvez restaurer les versions précédentes via [[Historique des versions]] ou [[Récupération de fichier]].

**Rejected server change**
Les modifications sur le coffre distant sont plus anciennes que la version sur votre appareil local, donc la version locale est conservée et la modification distante est ignorée.

### Messages d'erreur

Ce sont des messages détaillant une erreur lors de la synchronisation d'un fichier.

**Out of memory**
Ce problème survient généralement sur les appareils mobiles lorsqu'il n'y a pas suffisamment d'espace de stockage ou de mémoire disponible pour télécharger un fichier. C'est le plus courant avec les fichiers volumineux, tels que les vidéos.

### Messages de fichiers ignorés

Ce sont des messages détaillant ce qui a été ignoré, et potentiellement pourquoi.

**Unable to download file with illegal name**

Le fichier contient un [caractère spécial ou une convention de nommage](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names) qui n'est pas autorisé sur le système d'exploitation de destination. Pour simplifier, vous pouvez renommer le fichier sur son appareil source pour supprimer tous les caractères spéciaux sauf `-` et `_`.

Notez que cela inclut également les fichiers avec plusieurs points `.` dans leur nom sur les appareils Android.

### Messages de compte

Ce sont des messages liés à un changement dans votre abonnement ou votre compte.

**Vault limit exceeded**
Votre compte a dépassé la [[Questions fréquentes#Quelle est la taille maximale de chaque coffre distant|taille de stockage maximale]]. Les pièces jointes et l'historique des versions contribuent à cette taille. Même si votre coffre semble plus petit que la limite, les anciennes versions et fichiers peuvent la dépasser.

Pour réduire la taille du coffre :
1. Ouvrez **[[Paramètres]] → Sync**.
2. Utilisez les options sous **Taille du coffre dépassée** pour supprimer les fichiers volumineux.

**Vault not found**
`{"res":"err","msg":"Vault not found."}`

Cette erreur peut survenir dans les cas suivants :

1. Le coffre a été supprimé depuis un autre appareil.
2. L'abonnement de synchronisation était inactif depuis plus de 30 jours, entraînant la suppression du coffre distant.
3. L'abonnement a été annulé ou remboursé, entraînant la suppression du coffre distant.

Dans ces cas, vous devrez [[Configurer Obsidian Sync#Se déconnecter d'un coffre distant|vous déconnecter du coffre distant]] et [[Configurer Obsidian Sync#Créer un nouveau coffre distant|créer un nouveau coffre distant]], en vous assurant que vos données locales sont préservées.

**Failed to authenticate: Your subscription to Obsidian Sync has expired**
Votre compte est maintenant dans un état d'expiration complète car nous n'avons pas pu traiter le paiement enregistré.

Pour continuer à utiliser Obsidian Sync, vous devrez vous réabonner dans [votre compte](https://obsidian.md/fr/account/sync).

**Failed to authenticate: Not logged in**

Obsidian Sync a détecté que vous n'êtes pas actuellement connecté. Vous devrez vous reconnecter dans l'application dans la section [[Paramètres#Général#Compte|Compte]] des **[[Paramètres]]**.

Dans certains cas, un module complémentaire peut également empêcher Obsidian Sync de confirmer l'état de connexion de votre compte. Veuillez passer en **[[Sécurité des plugins#Mode restreint|mode restreint]]** et réessayer.

### Messages réseau

**Disconnected from server**
`Unable to connect to server`

Obsidian Sync s'est déconnecté du serveur Sync pour une raison inconnue. Sync tentera de se reconnecter au serveur périodiquement.

Sur iOS, ce message s'affiche sous la forme de l'erreur suivante :
`Null is not an object (evaluating 'this.socket.send')`

Cela signifie exactement la même chose que le message `Unable to connect to server`, et n'indique en aucun cas qu'autre chose ne va pas.
