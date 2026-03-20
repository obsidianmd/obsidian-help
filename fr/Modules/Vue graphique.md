---
permalink: plugins/graph
description: Vue graphique est un plugin principal qui vous permet de visualiser les relations entre les notes de votre coffre.
publish: true
mobile: true
localized: '2026-03-18'

---
La vue graphique est un [[Modules principaux|module principal]] qui vous permet de visualiser les relations entre les notes de votre coffre.

Pour ouvrir la vue graphique, cliquez sur **Ouvrir la vue graphique** dans le [[Ruban]].

- Les cercles représentent les notes, ou _nœuds_.
- Les lignes représentent les [[Liens internes]] entre deux nœuds.

Plus un nœud donné est référencé par d'autres nœuds, plus il devient gros.

Pour interagir avec les notes dans le graphique :

- Survolez chaque cercle pour mettre en évidence les connexions de cette note.
- Cliquez sur une note dans le graphique pour ouvrir cette note.
- Faites un clic droit sur une note pour ouvrir un menu contextuel avec les actions disponibles pour cette note.

Pour naviguer dans le graphique :

- Effectuez un zoom avant et arrière à l'aide de la molette de votre souris, ou en utilisant les touches `+` et `-`.
- Déplacez le graphique en le glissant avec le curseur de votre souris, ou en utilisant les touches fléchées.

Vous pouvez maintenir Maj enfoncé tout en utilisant le clavier pour accélérer les mouvements.

## Paramètres

Pour ouvrir les paramètres du graphique, cliquez sur l'icône d'engrenage dans le coin supérieur droit de la vue graphique.

Cliquez sur **Restaurer les paramètres par défaut** dans le coin supérieur droit de la boîte de paramètres pour réinitialiser toutes les modifications que vous avez effectuées.

### Filtres

Cette section contrôle quels nœuds afficher dans le graphique.

- **Rechercher des fichiers** vous permet de filtrer les notes en fonction d'un terme de recherche. Pour savoir comment rédiger des termes de recherche plus avancés, consultez [[Rechercher]].
- **Mots-clés** active ou désactive l'affichage des mots-clés dans le graphique.
- **Pièces jointes** active ou désactive l'affichage des pièces jointes dans le graphique.
- **Fichiers existants uniquement** active ou désactive l'affichage limité aux notes qui existent dans votre coffre. Puisqu'une note n'a pas besoin d'exister pour qu'on puisse y faire un lien, cela peut aider à limiter votre graphique aux notes que vous avez réellement dans votre coffre.
- **Orphelins** active ou désactive l'affichage des notes sans aucun lien.

> [!info] Fichiers exclus
> Les fichiers correspondant à vos motifs de [[Paramètres#Fichiers exclus|fichiers exclus]] n'apparaîtront pas dans la vue graphique.

### Groupes

Créez des groupes de notes pour les distinguer les unes des autres à l'aide de couleurs.

Pour créer un nouveau groupe :

1. Cliquez sur **Nouveau groupe**.
2. Dans la boîte de recherche, tapez un terme de recherche pour les notes que vous souhaitez ajouter au groupe.
3. Cliquez sur le cercle coloré pour attribuer une couleur au groupe.

Pour savoir comment rédiger des termes de recherche plus avancés, consultez [[Rechercher]].

### Affichage

Cette section contrôle comment visualiser les nœuds et les liens dans le graphique.

- **Flèches** active ou désactive l'affichage de la direction de chaque lien.
- **Seuil d'effacement du texte** contrôle la transparence du texte pour le nom de chaque note.
- **Taille des nœuds** contrôle la taille du cercle représentant chaque note.
- **Épaisseur des liens** contrôle la largeur de la ligne pour chaque lien.
- **Animer** démarre une [[#Démarrer une animation en accéléré|animation en accéléré]].

### Forces

Cette section contrôle les forces qui agissent sur chaque nœud dans le graphique.

- **Force centrale** contrôle la compacité du graphique. Une valeur plus élevée crée un graphique plus circulaire.
- **Force de répulsion** contrôle à quel point un nœud repousse les autres nœuds.
- **Force de liaison** contrôle la traction sur chaque lien. Si le lien était un élastique, la force de liaison contrôle à quel point l'élastique est tendu ou lâche.
- **Distance de liaison** contrôle la longueur des lignes entre chaque note.

## Démarrer une animation en accéléré

Les notes et les pièces jointes apparaissent dans l'ordre chronologique en fonction de leur date de création.

![[obsidian-graph-view.png#interface]]

## Graphique local

Pour ouvrir une vue graphique locale, utilisez la commande **Ouvrir le graphique local**. Alors que la vue graphique affiche toutes les notes de votre coffre, une vue graphique locale vous montre les notes connectées à la note active.

La vue graphique locale peut utiliser tous les [[#Paramètres]] disponibles pour la vue graphique globale. De plus, vous pouvez modifier la profondeur du graphique local. Chaque niveau de profondeur affichera les notes connectées aux notes révélées au niveau de profondeur précédent. Pour contrôler la profondeur du graphique local, utilisez le curseur en haut du panneau des paramètres de filtre du graphique local.
