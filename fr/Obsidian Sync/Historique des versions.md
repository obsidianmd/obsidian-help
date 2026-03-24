---
localized: '2026-03-18'
permalink: sync/version-history
cssclasses:
  - soft-embed
description: Obsidian Sync conserve un historique de toutes les modifications apportées à vos notes et vérifie régulièrement les mises à jour pour créer de nouvelles versions de vos notes.
publish: true
mobile: true

---
[[Introduction à Obsidian Sync|Obsidian Sync]] vérifie régulièrement les mises à jour de vos [[Paramètres de Sync et synchronisation sélective|fichiers synchronisés]], en conservant un enregistrement de toutes les modifications. Celles-ci sont stockées comme de nouvelles entrées dans l'[[#Historique des versions]]. Ces informations sont accessibles de plusieurs façons :

- [[#Historique de synchronisation]]
- [[#Historique des versions]]

Bien que ne faisant pas partie d'Obsidian Sync, un historique des versions local est également disponible sur chaque appareil si le module [[Récupération de fichier]] est activé.

## Historique de synchronisation

La fonctionnalité d'historique de synchronisation (ou barre latérale Sync), introduite dans la version 1.7 d'Obsidian, vous permet de consulter rapidement les notes et pièces jointes récemment créées ou modifiées qui ont été synchronisées. Vous pouvez aussi la considérer comme un historique d'_édition_.

Dans la barre latérale, vous pouvez sélectionner un élément pour ouvrir son fichier dans votre fenêtre active. Les éléments disposent également de menus contextuels, vous permettant d'effectuer des actions telles que déplacer le fichier ou consulter son [[#Notes et pièces jointes|historique des versions]].

> [!compatibility] Fonctionnalité réservée au bureau
> Lorsque vous survolez un fichier synchronisé dans la barre latérale, vous pouvez voir qui a modifié le fichier en dernier. C'est particulièrement utile si vous [[Collaborer sur un coffre partagé|collaborez]] sur un coffre partagé.

> [!tip] 
> Les paramètres et les éléments supprimés n'apparaissent pas dans la barre latérale de l'historique de synchronisation. Ceux-ci se trouvent dans l'[[#Notes et pièces jointes|historique des versions]].

### Afficher l'historique de synchronisation

Lorsque vous activez le module principal [[Introduction à Obsidian Sync|Sync]], l'historique de synchronisation est automatiquement activé mais n'apparaît pas dans la barre latérale par défaut. Vous devrez l'ajouter manuellement à l'aide d'une commande ou d'un raccourci clavier.

#### Activer via la palette de commandes

> [!info] Cette option nécessite que le module principal [[Palette de commandes]] soit activé.

**Bureau/Tablette** ![[lucide-monitor-check.svg#icon]]

1. Ouvrez la **palette de commandes**. ![[lucide-terminal.svg#icon]]
2. Tapez « Sync ».
3. Sélectionnez l'option « Sync : Afficher l'historique de synchronisation ».

L'historique de synchronisation apparaîtra alors dans la [[Barre latérale|barre latérale droite]].

**Mobile** ![[obsidian-icon-smartphone.svg#icon]]

1. Ouvrez le [[Ruban]] ![[lucide-menu.svg#icon]].
2. Ouvrez la **palette de commandes**. ![[lucide-terminal.svg#icon]]
3. Tapez « Sync ».
4. Sélectionnez l'option « Sync : Afficher l'historique de synchronisation ».

L'historique de synchronisation apparaîtra alors comme une option déroulante dans la [[Barre latérale|barre latérale droite]].

#### Activer via un raccourci clavier

1. Ouvrez les **[[Paramètres]]**.
2. Dans la catégorie **Options**, sélectionnez **Raccourcis clavier**.
3. Dans la barre de recherche des raccourcis clavier, tapez « Sync ».
4. À côté de « Sync : Afficher l'historique de synchronisation », attribuez votre raccourci clavier préféré.

## Historique des versions

En plus de l'[[#Historique de synchronisation]], Obsidian maintient également un historique des versions pour restaurer les notes et les pièces jointes. Si vous supprimez accidentellement une note ou souhaitez revenir à une version précédente, vous pouvez la restaurer depuis l'historique des versions.

La période de rétention de votre historique des versions dépend de votre [[Forfaits et limites de stockage|forfait Obsidian Sync]]. Avec le forfait Standard, les notes sont conservées pendant 1 mois, tandis qu'avec le forfait Plus, elles sont conservées pendant 12 mois. Après cette période, les anciennes versions de vos notes sont supprimées.

Pour les [[Pièces jointes|pièces jointes]], les anciennes versions sont conservées pendant <u>deux semaines</u>.

![[Collaborer sur un coffre partagé#^version-history-image]]

### Notes et pièces jointes

Le processus de restauration des notes et des pièces jointes est le même.

#### Consulter l'historique des versions d'un fichier

**Bureau/Tablette** ![[lucide-monitor-check.svg#icon]]
1. Dans l'**explorateur de fichiers**, sélectionnez la note que vous souhaitez restaurer.
2. Sélectionnez **Ouvrir l'historique des versions**.
3. Sélectionnez la version de la note que vous souhaitez consulter à gauche. Le contenu sera affiché à droite.

**Mobile** ![[obsidian-icon-smartphone.svg#icon]]
1. Dans l'**explorateur de fichiers**, sélectionnez la note que vous souhaitez restaurer.
2. Appuyez longuement pour faire apparaître le menu contextuel.
3. Sélectionnez **Ouvrir l'historique des versions**.
4. Dans le menu contextuel, sélectionnez la version de la note que vous souhaitez consulter.
5. Une fois sélectionné, le contenu de la note sera disponible pour examen.

#### Consulter l'historique des versions d'un fichier supprimé ou renommé

1. Ouvrez les **[[Paramètres]]**.
2. Dans la barre latérale, sous **Modules principaux**, sélectionnez **Sync**.
3. À côté de **Fichiers supprimés**, sélectionnez **Voir**.
4. Sélectionnez la note dont vous souhaitez consulter l'historique des versions.
5. Dans la fenêtre contextuelle de l'historique des versions, sélectionnez la version de la note que vous souhaitez consulter à gauche.

#### Restaurer une version précédente d'un fichier

**Bureau/Tablette** ![[lucide-monitor-check.svg#icon]]
1. Dans l'**explorateur de fichiers**, sélectionnez la note que vous souhaitez restaurer.
2. Sélectionnez **Ouvrir l'historique des versions**.
3. Sélectionnez la version de la note que vous souhaitez restaurer à gauche. Le contenu sera affiché à droite.
4. Sélectionnez le bouton **Restaurer**.
5. Le contenu de la note sera remplacé par la version restaurée.

**Mobile** ![[obsidian-icon-smartphone.svg#icon]]
1. Dans l'**explorateur de fichiers**, sélectionnez la note que vous souhaitez restaurer.
2. Appuyez longuement pour faire apparaître le menu contextuel.
3. Sélectionnez **Ouvrir l'historique des versions**.
4. Dans le menu contextuel, sélectionnez la version de la note que vous souhaitez restaurer.
5. Une fois sélectionné, le contenu de la note sera disponible pour examen.
6. Sélectionnez le bouton **Restaurer**.
7. Le contenu de la note sera remplacé par la version restaurée.

#### Restaurer un fichier supprimé

1. Ouvrez les **[[Paramètres]]**.
2. Dans la barre latérale, sous **Modules principaux**, sélectionnez **Sync**.
3. À côté de **Fichiers supprimés**, sélectionnez **Voir**.
4. Choisissez la note que vous souhaitez restaurer.
5. Dans la liste des versions à gauche, sélectionnez la version que vous souhaitez restaurer.
6. Sélectionnez le bouton **Restaurer** à droite.
7. La note sera restaurée à son emplacement d'origine dans le système de fichiers.

> [!tip] Vous pouvez sélectionner plusieurs notes avec la **restauration groupée** en cochant les cases ou en utilisant `Maj+clic`. Ces fichiers ne pourront pas être examinés dans ce menu.

### Historique des paramètres

Obsidian Sync conserve également les modifications apportées aux paramètres de configuration de votre coffre.

#### Consulter l'historique des versions d'un paramètre

1. Ouvrez les **[[Paramètres]]**.
2. Dans la barre latérale, sous **Modules principaux**, sélectionnez **Sync**.
3. Descendez jusqu'à **Synchronisation de la configuration du coffre**.
4. Sélectionnez le bouton **Voir** à côté de **Historique des versions des [[Paramètres]]**.
5. Dans la fenêtre contextuelle **Fichier de [[Paramètres]]**, choisissez un fichier de paramètres que vous souhaitez consulter.

#### Restaurer une version précédente d'un paramètre

1. Ouvrez les **[[Paramètres]]**.
2. Dans la barre latérale, sous **Modules principaux**, sélectionnez **Sync**.
3. Descendez jusqu'à **Synchronisation de la configuration du coffre**.
4. Sélectionnez le bouton **Voir** à côté de **Historique des versions des [[Paramètres]]**.
5. Dans la fenêtre contextuelle **Fichier de [[Paramètres]]**, choisissez un fichier de paramètres que vous souhaitez consulter.
6. Dans la fenêtre des modifications, sélectionnez le bouton **Restaurer**.
7. Rechargez ou redémarrez Obsidian pour que le paramètre prenne effet. Pour plus de détails, consultez les instructions dans [[Configurer Obsidian Sync#Ajuster les paramètres d'Obsidian Sync|Ajuster les paramètres d'Obsidian Sync]].
