---
permalink: manage-vaults
aliases:
  - How to/Travailler avec plusieurs coffres
  - Manage vaults
localized: '2026-03-18'
---
Un **coffre** est un dossier sur votre système de fichiers qui contient vos notes, vos [[Pièces jointes|pièces jointes]], et le [[Dossier de configuration|dossier de configuration]] avec les paramètres spécifiques à Obsidian. Pour plus d'informations sur les coffres, consultez [[Comment Obsidian stocke les données]].

Vous pouvez gérer vos coffres à l'aide du **Sélecteur de coffres**. Le *Profil de coffre* s'ouvre la première fois que vous ouvrez Obsidian.

Pour ouvrir le sélecteur de coffres depuis un coffre existant, sélectionnez **Profil de coffre** ( ![[lucide-chevrons-up-down.svg#icon]]) en bas de la [[Barre latérale|barre latérale gauche]]. Ou sélectionnez **Ouvrir un autre coffre** depuis la [[Palette de commandes|palette de commandes]].

## Créer un nouveau coffre

1. Sur votre ordinateur, ouvrez Obsidian.
2. En bas à gauche, sélectionnez le **Profil de coffre** ( ![[lucide-chevrons-up-down.svg#icon]]).
3. Un menu contextuel apparaît. Sélectionnez **Gérer les coffres...**.
3. À droite de **Créer un nouveau coffre**, sélectionnez **Créer**.
4. Dans **Nom du coffre**, entrez le nom de votre coffre.
5. Cliquez sur **Parcourir** pour sélectionner l'emplacement où votre nouveau coffre sera créé.
6. Cliquez sur **Créer**.

## Créer un coffre à partir d'un dossier existant

1. Sur votre ordinateur, ouvrez Obsidian.
2. En bas à gauche, sélectionnez le **Profil de coffre** ( ![[lucide-chevrons-up-down.svg#icon]]).
3. Un menu contextuel apparaît. Sélectionnez **Gérer les coffres...**.
3. À droite de **Ouvrir un dossier comme coffre**, cliquez sur **Ouvrir**.
4. Dans l'explorateur de fichiers, sélectionnez le dossier que vous souhaitez utiliser comme coffre.
5. Cliquez sur **Ouvrir**.

> [!tip] Ouvrir un coffre depuis Obsidian Sync
> Si vous souhaitez ouvrir un coffre distant avec Obsidian Sync, consultez [[Configurer Obsidian Sync]].

## Renommer un coffre

Puisque le nom d'un coffre et le dossier sous-jacent sont identiques, renommer un coffre renomme également le dossier.

1. Sur votre ordinateur, ouvrez Obsidian.
2. En bas à gauche, sélectionnez le **Profil de coffre** ( ![[lucide-chevrons-up-down.svg#icon]]).
3. Un menu contextuel apparaît. Sélectionnez **Gérer les coffres...**.
4. Dans la liste des coffres, sélectionnez **Plus d'options** ( ![[lucide-more-horizontal.svg#icon]] ) à côté du coffre que vous souhaitez renommer.
5. Sélectionnez **Renommer le coffre**.
6. Entrez le nouveau nom du coffre, puis appuyez sur `Entrée`.

## Déplacer un coffre vers un autre dossier

1. Sur votre ordinateur, ouvrez Obsidian.
2. En bas à gauche, sélectionnez le **Profil de coffre** ( ![[lucide-chevrons-up-down.svg#icon]]).
3. Un menu contextuel apparaît. Sélectionnez **Gérer les coffres...**.
4. Fermez la fenêtre du coffre actuel, en laissant la fenêtre **Gérer les coffres** ouverte.
5. Dans la liste des coffres, sélectionnez **Plus d'options** ( ![[lucide-more-horizontal.svg#icon]] ) à côté du coffre que vous souhaitez déplacer.
6. Sélectionnez **Déplacer le coffre**, puis sélectionnez le nouvel emplacement.

Certains systèmes d'exploitation ne permettent pas de déplacer le coffre avec le sélecteur de coffres. Dans ces cas, vous devrez déplacer votre coffre manuellement :

1. Fermez Obsidian.
2. Déplacez le dossier de votre coffre vers un nouvel emplacement, en évitant les dossiers synchronisés par d'autres services.
3. Rouvrez Obsidian.
4. Cliquez sur l'icône **Profil de coffre** en bas à gauche ( ![[lucide-chevrons-up-down.svg#icon]]).
5. Dans le menu contextuel, sélectionnez **Gérer les coffres...**.
6. À côté de **Ouvrir un dossier comme coffre**, cliquez sur **Ouvrir**.
7. Naviguez jusqu'à votre nouveau dossier de coffre et sélectionnez-le.
8. Cliquez sur **Ouvrir**.
9. Vérifiez que le contenu du coffre est inchangé. Si nécessaire, réactivez les modules complémentaires en naviguant vers **[[Paramètres]] → Modules complémentaires → Désactiver le mode restreint**.

## Retirer un coffre

Retirer un coffre le supprime uniquement de la liste des coffres.

1. Sur votre ordinateur, ouvrez Obsidian.
2. En bas à gauche, sélectionnez le **Profil de coffre** ( ![[lucide-chevrons-up-down.svg#icon]]).
3. Un menu contextuel apparaît. Sélectionnez **Gérer les coffres...**.
4. Dans la liste des coffres, sélectionnez **Plus d'options** ( ![[lucide-more-horizontal.svg#icon]]) à côté du coffre que vous souhaitez retirer.
5. Sélectionnez **Retirer de la liste**.

## Transférer les paramètres vers un autre coffre

Pour utiliser les mêmes paramètres dans un autre coffre, utilisez votre gestionnaire de fichiers préféré (ou un terminal) pour copier le dossier `.obsidian` depuis la racine du coffre source vers la racine du coffre de destination.

Vous devrez peut-être redémarrer Obsidian pour appliquer les modifications.

> [!note] Où trouver le dossier `.obsidian` ?
> Par défaut, la plupart des systèmes d'exploitation masquent les dossiers commençant par un point (`.`). Pour plus d'informations sur le dossier `.obsidian` et comment y accéder, consultez [[Comment Obsidian stocke les données#Paramètres du coffre|paramètres du coffre]] et [[Dossier de configuration|dossiers de configuration]].
