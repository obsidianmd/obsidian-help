---
permalink: backup
localized: '2026-03-18'

---
Si vous n'avez pas encore sauvegardé votre ordinateur, commencez maintenant ! Le module [[Récupération de fichier]] d'Obsidian est utile mais limité. Il ne peut récupérer qu'une certaine quantité de données, et il stocke les informations de récupération par appareil. Pour une protection plus robuste, nous vous recommandons de mettre en place un véritable système de sauvegarde.

**Pourquoi sauvegarder vos données ?**

Par défaut, Obsidian stocke vos notes **localement** sur votre appareil, et non dans le cloud. Cela signifie que les [données vous appartiennent entièrement](https://obsidian.md/fr/about), vous donnant le contrôle sur celles-ci. Cependant, le stockage local peut être affecté par des problèmes tels que la corruption ou la perte de données. Ce n'est jamais une question de savoir si cela arrivera, mais quand. Sauvegarder vos données vous protège contre ces inévitabilités et vous assure de garder le contrôle de vos notes.

## La synchronisation n'est pas une sauvegarde

Des services comme [[Introduction à Obsidian Sync|Obsidian Sync]], iCloud, OneDrive et Dropbox vous aident à synchroniser vos notes entre différents appareils. Bien qu'ils puissent offrir des fonctionnalités comme la [[Historique des versions|restauration de notes]], **ils ne sont pas conçus pour les sauvegardes**. La synchronisation maintient vos notes à jour, mais elle ne protège pas contre la perte de données.

- **Synchronisation :** La synchronisation garantit que vos fichiers sont identiques sur tous les appareils. Lorsque vous modifiez un fichier sur un appareil, il est mis à jour sur tous les appareils synchronisés. Les services de synchronisation n'ont pas d'appareil « principal ».
- **Sauvegarde :** Une sauvegarde enregistre une copie de vos données dans un emplacement différent pour aider à les récupérer en cas de perte ou de corruption de données. Les sauvegardes ne sont pas destinées aux mises à jour en temps réel ou à la collaboration.

Pour sauvegarder correctement votre coffre, utilisez un outil de sauvegarde dédié qui crée une copie unidirectionnelle de vos données. Cet outil enverra vos données vers un emplacement de sauvegarde sûr sans modifier les données sur votre appareil.

Si vous utilisez plusieurs appareils avec la synchronisation, choisissez **un seul appareil** comme appareil de sauvegarde. C'est généralement votre appareil principal, celui que vous utilisez le plus. Notez que la plupart des services de synchronisation ne reconnaissent aucun appareil comme « principal » ; c'est simplement un concept pour vous aider à gérer les sauvegardes.

> [!Example] Vous utilisez Obsidian Sync sur votre ordinateur portable, votre tablette, votre téléphone et votre ordinateur de bureau professionnel. Vous utilisez principalement votre coffre sur votre ordinateur de bureau professionnel, parfois sur votre ordinateur portable, et rarement sur votre tablette ou votre téléphone. Dans ce cas, votre ordinateur de bureau professionnel serait votre « appareil principal » pour la sauvegarde.

## Utiliser des modules complémentaires

Bien que l'équipe d'Obsidian ne puisse officiellement recommander aucun module spécifique, nous reconnaissons deux modules complémentaires qui sont devenus populaires auprès des utilisateurs pour sauvegarder leurs fichiers :

- **[Obsidian Git](https://obsidian.md/fr/plugins?id=obsidian-git) :** Utilisez ce module pour sauvegarder votre coffre en validant son contenu dans un [dépôt Git](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository). C'est un moyen efficace de versionner vos notes et d'assurer leur sécurité sur un serveur distant. Cependant, sachez que vos données peuvent être stockées sur une [[#Utiliser des services cloud|plateforme d'hébergement externe]] avec cette méthode.
- **[Local Backup](https://obsidian.md/fr/plugins?id=local-backup) :** Ce module vous permet de créer des copies locales de votre coffre dans un dossier de votre choix, avec des options d'archivage. Vous pouvez même utiliser un dossier de synchronisation, comme un dossier Dropbox, pour combiner sauvegardes locales et cloud. Cette méthode **se combine bien** avec les options de sauvegarde décrites ci-dessous.

## Utiliser des services cloud

> [!info] Il n'est pas recommandé de placer l'emplacement de votre coffre dans le service de sauvegarde choisi.

Conserver votre sauvegarde dans le cloud est une alternative et un complément au stockage physique de données, à la place d'un disque dur externe ou d'une clé USB. Un disque dur externe ou une clé USB peut être perdu ou endommagé. Le plus grand avantage du stockage de fichiers dans le cloud est qu'ils sont disponibles à tout moment, partout. L'inconvénient est que la plupart des services de sauvegarde appartiennent à une entreprise privée.

En matière de sécurité, vous devriez toujours porter une attention particulière aux accès et à la sécurité avec les sauvegardes cloud. [Worldbackupday](https://www.worldbackupday.com/en) maintient une liste à jour de services de sauvegarde en ligne à envisager.

## Utiliser des disques externes

**Disques durs et SSD**
Les sauvegardes sur disque dur externe restent précieuses dans un monde de plus en plus tourné vers le cloud, et sont principalement utilisées pour le stockage de données et les sauvegardes d'ordinateur. Le plus grand inconvénient d'un disque externe est qu'il peut tomber en panne ou être perdu. Le plus grand avantage est que l'espace de stockage ne doit être acheté qu'une seule fois. L'utilisation d'un disque dur externe est souvent combinée avec une [[#Utiliser les sauvegardes de l'ordinateur|sauvegarde de l'ordinateur]].

**Clés USB**
Les clés USB (également appelées clés mémoire ou lecteurs flash) sont une méthode simple et efficace pour des sauvegardes rapides.

1. Insérez la clé USB dans votre ordinateur ou ordinateur portable.
2. Assurez-vous que l'appareil est reconnu et monté dans votre système de fichiers. Si nécessaire, formatez la clé USB pour qu'elle soit compatible avec votre système de fichiers.
3. Copiez le dossier de votre coffre depuis son emplacement actuel vers la clé USB.
4. Démontez la clé USB en toute sécurité.
5. Retirez la clé USB de votre appareil.

**Sauvegarde NAS**
Pour les utilisateurs expérimentés, sauvegarder les données sur un serveur NAS (Network Attached Storage) est une méthode sûre et sécurisée, car il dispose de plusieurs disques durs et de mécanismes de récupération supplémentaires.

> [!tip] Si votre disque externe contient des informations sensibles, il est recommandé de le conserver en lieu sûr, comme dans une pièce sécurisée.

## Utiliser les sauvegardes de l'ordinateur

Votre système d'exploitation offre lui-même la possibilité de créer des sauvegardes, que ce soit en ligne dans le cloud ou sur un disque externe.

- **[Windows](https://www.microsoft.com/en-us/windows/learning-center/back-up-files)** : Sauvegarde avec OneDrive ou un disque externe.
- **[Mac](https://support.apple.com/en-us/104984)** : Sauvegarde sur un appareil externe avec Time Machine.
- **[Linux](https://linuxize.com/post/how-to-use-rsync-for-local-and-remote-data-transfer-and-synchronization/)** : `rsync` vers un répertoire ou un disque de votre choix.

## Prochaines étapes

Cette page d'aide offre un bref aperçu des options de sauvegarde, mais elle n'est pas exhaustive. Pour des informations plus approfondies, visitez [Worldbackupday.com](https://www.worldbackupday.com/en) ou demandez à d'autres utilisateurs d'Obsidian dans [notre communauté](https://obsidian.md/fr/community) quelles sont leurs stratégies de sauvegarde !
