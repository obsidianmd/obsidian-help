---
permalink: sync/troubleshoot
cssclasses:
  - soft-embed
description: >-
  Cette page répertorie les problèmes peu courants que vous pouvez rencontrer
  avec Obsidian Sync et comment les résoudre.
publish: true
mobile: true
localized: '2026-03-18'

---
Cette page répertorie les problèmes rares que vous pouvez rencontrer avec [[Introduction à Obsidian Sync|Obsidian Sync]] et comment les résoudre. Avant de continuer, nous vous recommandons de consulter les pages [[Icône de statut et messages]] et [[Questions fréquentes]].

## Général

### Résolution de conflits

Un conflit se produit lorsque vous modifiez le même fichier sur deux appareils ou plus avant qu'ils ne se synchronisent. Par exemple, vous éditez une note sur votre ordinateur. Avant que cette modification ne soit téléversée, vous modifiez également la même note sur votre téléphone.

Les conflits surviennent plus souvent lorsque vous travaillez hors ligne. Il y a davantage de modifications et un intervalle plus long entre les synchronisations, ce qui augmente le risque de conflits.

#### Comment Obsidian Sync gère les conflits

Lorsqu'Obsidian Sync détecte un conflit, le résultat dépend du type de fichier :

- **Fichiers Markdown** : Obsidian Sync fusionne les modifications en utilisant l'algorithme [diff-match-patch](https://github.com/google/diff-match-patch) de Google.
- **Autres types de fichiers** : Pour tous les autres fichiers, y compris les Canvas, Obsidian utilise l'approche « la dernière modification l'emporte ». La version modifiée le plus récemment remplace les versions antérieures.

Pour les conflits dans les paramètres d'Obsidian, comme les paramètres des modules, Obsidian Sync fusionne les fichiers JSON. Il applique les clés du JSON local par-dessus le JSON distant.

#### Options de résolution de conflits

À partir d'Obsidian 1.9.7, vous pouvez choisir comment gérer les conflits. Pour configurer ce paramètre :

1. Ouvrez les **[[Paramètres]]**.
2. Dans la barre latérale, sélectionnez **Sync**.
3. Sous **[[Paramètres de Sync et synchronisation sélective#Résolution de conflits|Résolution de conflits]]**, choisissez votre option préférée :
   - **Fusion automatique** (par défaut) : Obsidian Sync combine toutes les modifications provenant de différents appareils en un seul fichier. Cela préserve toutes les éditions, mais peut parfois créer du texte en double ou des problèmes de mise en forme. Vous devrez les corriger manuellement.
   - **Créer un fichier de conflit** : Lorsqu'Obsidian détecte des modifications conflictuelles, il crée un fichier de conflit séparé au lieu de fusionner automatiquement. Vous pouvez ensuite examiner les deux versions et les fusionner vous-même. Cela vous donne un contrôle total sur le résultat final.

> [!warning]+ Configurez sur tous les appareils
> Les paramètres de résolution de conflits sont propres à chaque appareil. Vous devez configurer l'option de votre choix sur chacun de vos appareils. Cela garantit un comportement identique sur tous vos appareils synchronisés.

**Modèle de nommage des fichiers de conflit**

Lorsque vous utilisez l'option « Créer un fichier de conflit », Obsidian crée un nouveau fichier avec le modèle de nommage suivant :

```
nom-de-la-note-originale.sync-conflict-AAAAMMJJ-HHMMSS.md
```

Par exemple, si un conflit survient dans une note appelée `Meeting notes.md`, le fichier de conflit pourrait être nommé :

```
Meeting notes.sync-conflict-20241128-143022.md
```

Le fichier de conflit contient les modifications provenant de l'appareil où le conflit a été détecté. Le fichier original conserve la version distante. Vous pouvez comparer les deux fichiers et fusionner le contenu manuellement.

> [!info]+ Consultez le journal de Sync
> Pour vérifier quand des conflits se sont produits, ouvrez le [[Icône de statut et messages#Journal d'activité de Sync|journal de Sync]]. Filtrez par « Merge Conflicts » ou recherchez « Conflict ».

### Sync a supprimé une note que je venais de créer sur deux appareils

Obsidian Sync essaie généralement de [[#Résolution de conflits|résoudre les conflits]] en fusionnant les notes conflictuelles entre les appareils. Cependant, des problèmes peuvent survenir pour les utilisateurs qui créent ou modifient automatiquement des notes au démarrage. Cela inclut les [[Notes quotidiennes]] ou l'utilisation du module complémentaire [Templater](https://github.com/SilentVoid13/Templater).

Si vous créez une note localement sur un appareil et que, dans les quelques minutes qui suivent, Sync télécharge une version distante de cette même note, Sync conservera la version distante sans fusionner les deux. Dans ce cas, vous pouvez récupérer la version locale en utilisant la [[Récupération de fichier]].

### Sync ne synchronise pas mes mises à jour de modules et de paramètres

Obsidian [[Questions fréquentes#Obsidian Sync recharge-t-il mes paramètres en direct ?|ne recharge pas tous les paramètres en direct]]. Après avoir mis à jour vos paramètres ou modules, vous devez redémarrer Obsidian sur les autres appareils pour voir les modifications. Sur les appareils mobiles, vous devrez peut-être forcer la fermeture de l'application.

> [!example]- Changer de thème
> - Sur votre appareil principal (généralement un ordinateur), vous revenez au thème par défaut depuis un thème personnalisé.
> - Le journal de Sync confirme que les fichiers mis à jour ont été envoyés au coffre distant, mais votre appareil mobile affiche toujours le thème personnalisé.
> - Sur l'appareil mobile, consultez le journal de Sync pour confirmer la réception du fichier `appearance.json` mis à jour.
> - Rechargez ou redémarrez Obsidian sur l'appareil mobile.
> - Après le rechargement ou le redémarrage, l'appareil mobile devrait afficher le même thème que votre ordinateur.

### Mes fichiers disparaissent de Sync dès que je les restaure

Ce problème est le plus fréquent sous Windows. Windows Defender peut mettre en quarantaine les fichiers contenant des blocs de code, ce qui provoque la disparition de certaines notes.

Une autre cause fréquente est la double synchronisation. Cela se produit lorsqu'Obsidian Sync fonctionne en même temps qu'un autre service de synchronisation.

![[Passer à Obsidian Sync#Déplacez votre coffre hors de votre service de synchronisation tiers ou stockage cloud]]

---

Enfin, cela peut arriver lorsque vous restaurez un fichier sur un appareil, mais qu'il est ensuite supprimé d'un appareil secondaire. Cela se produit lorsque le nom du fichier contient des [[Icône de statut et messages#Messages de fichiers ignorés|caractères non autorisés]].

## Android

**Mon appareil supprime les pièces jointes que je reçois via Sync**

Ce problème est probablement dû à Google ou Android Photos qui gère vos pièces jointes. Pour empêcher le système de modifier les fichiers reçus via Sync, ajoutez un [fichier `.nomedia` dans votre coffre](https://support.google.com/android/thread/60342076/what-are-these-nomedia-files?hl=en) sur votre appareil Android.

> [!tip]- Utilisez un module
> Le module complémentaire [Android Nomedia](https://obsidian.md/plugins?id=android-nomedia) facilite cette opération. Installez-le sur votre téléphone Android. Notez que les fichiers `.nomedia` ne sont pas synchronisés entre les appareils via Obsidian Sync.
