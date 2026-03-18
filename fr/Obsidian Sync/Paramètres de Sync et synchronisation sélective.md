---
permalink: sync/settings
description: >-
  Cette page explique les paramètres de Sync et vous guide dans le choix des
  fichiers à synchroniser.
publish: true
mobile: true
localized: '2026-03-18'
aliases:
  - Sync settings and selective syncing
---
Lorsque vous [[Forfaits et limites de stockage#Créer un nouveau coffre distant|créez un coffre distant]] et que vous vous y [[Configurer Obsidian Sync#Se connecter à un coffre distant|connectez]], le module principal Sync devient l'endroit pour gérer votre coffre distant.

## Paramètres de Sync

**Coffre distant**
Cette section affiche votre coffre distant actuellement connecté. Elle comprend un bouton **Déconnecter** pour se déconnecter du coffre distant et un bouton **Gérer** pour voir tous les coffres distants auxquels votre compte a accès (y compris les coffres partagés via la [[Collaborer sur un coffre partagé|collaboration]]).

> [!warning]+ Coffre distant dans un service de synchronisation tiers
> Si votre coffre distant se trouve dans un service de synchronisation tiers, vous verrez un message d'erreur rouge. Suivez les étapes dans [[Passer à Obsidian Sync]] pour résoudre ce problème.

**Statut de la synchronisation**
Affiche le statut de synchronisation actuel du coffre distant. Cette section comprend un bouton **Pause** ou **Reprendre**, selon le statut.

**Nom de l'appareil**
Attribuez un nom unique à l'appareil en cours de synchronisation. Cela aide à suivre l'activité dans le [[Icône de statut et messages#Journal d'activité de Sync|journal de Sync]]. Ce paramètre est spécifique à l'appareil, tout comme la [[#Synchronisation sélective]].

**[[#Résolution des conflits]]**
Choisissez comment résoudre les conflits lorsque vous modifiez un fichier sur plusieurs appareils. Ce paramètre est spécifique à l'appareil, tout comme la [[#Synchronisation sélective]].

**Fichiers supprimés**
Contient un bouton pour **Voir** ou **Restaurer** les fichiers supprimés. Pour plus de détails, consultez [[Historique des versions]].

**Utilisation du stockage**
Affiche une barre de progression montrant quelle part de votre stockage de synchronisation est utilisée.

> [!tip]- Temps de traitement du serveur
> Il peut falloir jusqu'à 30 minutes pour que l'utilisation actuelle se mette à jour en raison du traitement côté serveur.

**Contacter l'assistance**
Fournit des instructions sur la façon de [[Aide et support#Contacter l'assistance Obsidian|contacter l'assistance Obsidian]], y compris des options pour **Copier les informations de débogage** et **Envoyer un e-mail à l'assistance**.

### Résolution des conflits

Choisissez comment résoudre les conflits lorsque vous modifiez un fichier sur plusieurs appareils avant la synchronisation. Vous pouvez fusionner automatiquement les modifications ou créer des fichiers de conflit séparés pour une révision manuelle. Consultez [[Résoudre les problèmes d'Obsidian Sync#Résolution des conflits|Résolution des conflits]] pour des détails sur le fonctionnement des conflits et la configuration de ce paramètre.

> [!warning]+ Configurer sur chaque appareil
> Ce paramètre doit être configuré séparément sur chaque appareil.

---

Vous pouvez également choisir ce que vous souhaitez synchroniser dans les paramètres du module principal Sync. Cette section couvre la **synchronisation sélective** et la **synchronisation de la configuration du coffre**, ainsi que les mises en garde associées.

## Synchronisation sélective

Les fichiers synchronisés vers votre [[Coffres locaux et distants|coffre distant]] contribuent à votre [[Questions fréquentes#How large can each remote vault be|limite de stockage]]. Par défaut, Obsidian Sync active la **synchronisation sélective** pour les types de fichiers suivants :
- Images
- Audio
- Vidéos
- PDF

Pour synchroniser des types de fichiers supplémentaires, activez l'option `Synchroniser tous les autres types`.

Les paramètres par défaut de la **synchronisation de la configuration du coffre** incluent :
- Autres types de fichiers
- Paramètres principaux
- Apparence
- Thèmes et extraits
- Raccourcis clavier
- Liste des modules principaux actifs
- Paramètres des modules principaux

Pour synchroniser les modules complémentaires, activez manuellement **Liste des modules complémentaires actifs** et **Liste des modules complémentaires installés**.

### Modifier les types de fichiers à synchroniser

1. Ouvrez **[[Paramètres]] → Sync**.
2. Sous **Synchronisation sélective**, activez les types de fichiers que vous souhaitez synchroniser.
3. Redémarrez l'application pour appliquer les nouveaux paramètres. Sur mobile ou tablette, un arrêt forcé peut être nécessaire.

Notez que votre [[Forfaits et limites de stockage|forfait Sync]] définit la taille maximale des fichiers que vous pouvez synchroniser. Le forfait Standard permet de synchroniser des fichiers jusqu'à 5 Mo, tandis que le forfait Plus prend en charge des fichiers jusqu'à 200 Mo.

> [!info]+ Les fichiers exclus restent dans le coffre distant
> Ajouter un fichier à la liste des **Fichiers exclus** ne le supprime pas du coffre distant s'il a déjà été synchronisé. Configurez vos paramètres de Sync avant la synchronisation pour éviter d'utiliser du stockage inutilement.

### Exclure un dossier de la synchronisation

Par défaut, Obsidian synchronise tous les fichiers et dossiers de votre coffre. Pour exclure un dossier spécifique de la synchronisation :
1. Ouvrez **[[Paramètres]] → Sync**.
2. À côté de **Dossiers exclus**, sélectionnez **Gérer**.
3. Sélectionnez le dossier que vous souhaitez exclure dans la liste.
4. Sélectionnez **Terminé**.

Pour retirer un dossier de la liste d'exclusion, sélectionnez le bouton ![[lucide-x.svg#icon]] à côté du nom du dossier.

#### Toujours exclus de la synchronisation

##### Instantanés de récupération de fichier

Les instantanés du module [[Récupération de fichier]] ne sont pas synchronisés via Obsidian Sync, car les instantanés sont conservés dans les [[Comment Obsidian stocke les données#Paramètres globaux|paramètres globaux]].

##### Fichiers et dossiers cachés

Les fichiers et dossiers commençant par un `.` sont traités comme cachés et exclus de la synchronisation. La seule exception est le [[Dossier de configuration|dossier de configuration]] du coffre (`.obsidian`), qui est synchronisé.

Exemples courants de fichiers et dossiers cachés qui ne sont pas synchronisés :
- `.vscode`
- `.git`
- `.idea`
- `.gitignore`

##### Paramètres de Sync

Les paramètres de Sync ne se synchronisent pas entre les appareils. Vous devez les configurer séparément sur chaque appareil selon vos besoins.

## Mettre à jour les paramètres de votre coffre synchronisé

Pour modifier les paramètres de synchronisation sur plusieurs appareils, suivez ces étapes :

> [!tip]- Appareil principal et appareils secondaires
> Les termes « appareil principal » et « appareil secondaire » sont utilisés uniquement pour la clarté. Sync ne fait pas de distinction entre eux.

### Appareil principal

L'appareil principal fait office de source de référence. Les modifications effectuées ici sont synchronisées sur tous les autres appareils.

1. Allez dans **[[Paramètres]] → Sync**.
2. Activez les paramètres souhaités sous **Synchronisation de la configuration du coffre**.
3. Rechargez ou redémarrez Obsidian. Sur mobile ou tablette, un arrêt forcé peut être nécessaire.
4. Laissez le temps aux paramètres de se synchroniser avec votre coffre distant.

### Appareil(s) secondaire(s)

Les appareils secondaires (comme votre téléphone) reçoivent les mises à jour de l'appareil principal.

1. Allez dans **[[Paramètres]] → Sync**.
2. Activez les paramètres nécessaires sous **Synchronisation de la configuration du coffre**.
3. Attendez que les modifications soient téléchargées depuis le coffre distant.
4. Rechargez ou redémarrez l'application pour appliquer les paramètres synchronisés. Sur mobile ou tablette, un arrêt forcé peut être nécessaire.

### Rechargement des paramètres

Certains paramètres peuvent être rechargés à chaud, tandis que d'autres nécessitent un redémarrage :

- **Rechargement à chaud** : La plupart des configurations d'Obsidian, y compris les raccourcis clavier et les propriétés, les paramètres d'apparence et les configurations des modules principaux déjà activés.
- **Nécessite un redémarrage** : Les modifications CSS (par ex. [[Extraits CSS]], [[Thèmes]]), les configurations de la vue graphique et les états des modules principaux (par ex. activer/désactiver les notes quotidiennes).

Les modules complémentaires ne prennent généralement pas en charge le rechargement à chaud et nécessitent un redémarrage lorsque de nouveaux paramètres sont appliqués.

> [!info]+ Pour les développeurs de modules
> Découvrez comment [intégrer la fonctionnalité de rechargement à chaud avec Obsidian Sync](https://docs.obsidian.md/Reference/TypeScript+API/Plugin/onExternalSettingsChange).

## Profils de paramètres

Obsidian Sync peut synchroniser plusieurs [[Dossier de configuration|dossiers de configuration]] vers le même coffre distant, vous permettant de créer des profils séparés (par ex. un pour mobile, un autre pour votre ordinateur portable).

### Créer un profil de paramètres

Pour créer un nouveau profil de paramètres :

1. Ouvrez **[[Paramètres]] → Fichiers et liens**.
2. Sous **Remplacer le dossier de configuration**, entrez un nom pour votre profil, commençant par un point (`.`), par ex. `.obsidian-mobile`.
3. Relancez Obsidian pour appliquer les modifications.

> [!info]+ Éviter de retélécharger les modules et thèmes
> Changer de profil de paramètres nécessitera de reconfigurer vos paramètres de synchronisation. Pour éviter de retélécharger les modules et thèmes, copiez votre dossier `.obsidian` existant et renommez-le pour correspondre à votre nouveau profil (par ex. `.obsidian-mobile`) avant d'effectuer des modifications.
