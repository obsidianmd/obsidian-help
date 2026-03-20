---
permalink: sync/faq
description: Cette page répertorie certaines des questions courantes liées aux interrogations et limitations d'Obsidian Sync.
publish: true
mobile: true
localized: '2026-03-18'

---
Cette page liste certaines des questions courantes relatives aux interrogations et limitations d'[[Introduction à Obsidian Sync|Obsidian Sync]].

## Général

### Quels systèmes d'exploitation Obsidian Sync prend-il en charge ?

Obsidian Sync prend en charge toutes les plateformes sur lesquelles Obsidian peut fonctionner. Actuellement, cela inclut Windows, macOS, Linux, Android et iOS.

### Obsidian fonctionne-t-il avec le mode Isolement d'Apple ?

Obsidian peut être utilisé en [mode Isolement](https://support.apple.com/en-us/105120) à condition qu'Obsidian soit ajouté en tant qu'exclusion.

### Quel type de données est synchronisé ?

Par défaut, vos notes Obsidian, vos images et votre [[Dossier de configuration]] sont synchronisés.

Vous pouvez ajouter des options de synchronisation supplémentaires pour les PDF, fichiers audio, fichiers vidéo et autres fichiers lorsque vous [[Paramètres de Sync et synchronisation sélective|configurez la synchronisation sélective]].

### De combien d'espace de stockage est-ce que je dispose ?

La limite de stockage dépend de votre [[Forfaits et limites de stockage#Forfaits|forfait Sync]] Obsidian. La quantité maximale de stockage est de 100 Go. Cette limite de stockage inclut l'[[Historique des versions|historique des versions]].

Vous pouvez consulter l'**Utilisation du stockage** dans l'application Obsidian en allant dans **[[Paramètres]] → Sync**.

### Combien de coffres distants puis-je avoir ?

Le nombre de coffres distants que vous pouvez avoir est déterminé par votre [[Forfaits et limites de stockage#Forfaits|forfait Sync]]. Le forfait Standard inclut 1 coffre, le forfait Plus inclut 10 coffres. Les coffres partagés avec vous ne comptent pas dans votre limite de coffres.

### Quelle taille peut avoir chaque coffre distant ?

Il n'y a pas de limite par coffre. La limite de stockage est liée à votre compte utilisé et peut être répartie sur tous vos coffres.

### Avec combien de personnes puis-je partager un coffre distant ?

Vous pouvez [[Collaborer sur un coffre partagé|partager un coffre distant]] avec jusqu'à 20 personnes.

### Quelle taille peut avoir chaque fichier ?

La taille maximale des fichiers dépend de votre [[Forfaits et limites de stockage|forfait Obsidian Sync]]. Pour le forfait Standard, la limite est de 5 Mo. Pour le forfait Plus, la limite est de 200 Mo par fichier.

### Mes données sont-elles synchronisées en arrière-plan ?

Non, les fichiers ne sont synchronisés que lorsqu'Obsidian est en cours d'exécution.

### Obsidian Sync recharge-t-il mes paramètres en temps réel ?

Obsidian Sync peut recharger automatiquement certains paramètres, mais il existe des limitations. Pour plus de détails, consultez [[Paramètres de Sync et synchronisation sélective#Rechargement des paramètres|Rechargement des paramètres]].

### Puis-je utiliser un service de synchronisation tiers avec Obsidian Sync ?

Nous ne recommandons pas d'utiliser un service de synchronisation tiers en parallèle d'Obsidian Sync. L'utilisation d'un service tiers et d'Obsidian Sync sur plusieurs appareils peut entraîner des conflits, résultant en des fichiers dupliqués ou corrompus.

Les services de stockage cloud comme OneDrive et Dropbox proposent des fonctionnalités « Fichiers à la demande » ou « Fichiers en ligne uniquement », qui téléchargent les fichiers uniquement lorsque nécessaire et les suppriment localement pour économiser de l'espace. Cependant, comme ces fichiers ne sont pas toujours disponibles localement, Obsidian Sync les interprétera comme supprimés, entraînant leur suppression de votre coffre distant.

Pour éviter ces problèmes, désactivez les téléchargements à la demande lorsque vous utilisez Obsidian Sync avec des services comme OneDrive ou Dropbox. Vous devrez vous assurer que les paramètres du service tiers sont configurés pour toujours conserver les fichiers sur l'appareil.

## Conservation des données

Voici les questions fréquemment posées sur la conservation des données par Obsidian. Pour des réponses plus détaillées, consultez [[Sécurité et confidentialité|Sécurité et confidentialité]].

### Combien de temps conservez-vous l'historique des versions ?

L'[[Historique des versions|historique des versions]] dépend de votre [[Forfaits et limites de stockage|forfait Obsidian Sync]]. Avec le forfait Standard, vos notes sont conservées pendant 1 mois. Avec le forfait Plus, vos notes sont conservées pendant 12 mois. Après cette période, les versions plus anciennes sont supprimées.

Les versions plus anciennes des [[Pièces jointes|pièces jointes]] sont conservées pendant deux semaines.

### Combien de temps conservez-vous mes données après l'expiration de mon abonnement ?

Nous conservons les données de vos coffres distants, y compris l'historique des versions, pendant un mois après l'expiration de votre abonnement. Les coffres locaux sur vos appareils ne sont pas affectés.

Tant que vous renouvelez dans le mois, il ne devrait y avoir aucun impact sur votre utilisation. Si vous renouvelez après un mois, lorsque vos coffres distants ont été supprimés, vous pouvez [[Configurer Obsidian Sync|créer un nouveau coffre distant]] et connecter votre coffre local.

### Conservez-vous mes données si je me fais rembourser mon abonnement ?

Non. Les données sont supprimées immédiatement des serveurs Obsidian Sync. Les données de votre [[Coffres locaux et distants|coffre local]] ne sont pas affectées.
