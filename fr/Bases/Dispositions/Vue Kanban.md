---
permalink: bases/views/kanban
---
La vue Kanban est un type de [[Vues|vue]] que vous pouvez utiliser dans les [[Introduction aux Bases|Bases]].

Sélectionnez ![[lucide-kanban-square.svg#icon]] **Kanban** dans le menu des vues pour afficher les fichiers sous forme de cartes organisées en colonnes. Chaque colonne représente une valeur de la propriété utilisée pour grouper les résultats.


> [!warning] Nécessite Obsidian 1.14+
> Les vues Kanban nécessitent Obsidian 1.14 qui est actuellement en [[Versions en accès anticipé|accès anticipé]].


## Grouper les cartes en colonnes

Une vue Kanban nécessite une propriété pour grouper les résultats.

1. Sélectionnez ![[lucide-arrow-up-down.svg#icon]] **Trier** dans la barre d'outils.
2. Sous **Grouper par**, sélectionnez **Propriété** et choisissez une propriété.

Les fichiers sans valeur pour la propriété sélectionnée apparaissent dans la colonne **Aucune valeur**.

> [!info] 
> Si vous groupez par une formule ou une propriété de fichier, vous ne pouvez pas déplacer les cartes ou les colonnes, ni créer de notes depuis les colonnes. Ces propriétés ne peuvent pas être modifiées en déplaçant une carte.

## Travailler avec les cartes et les colonnes

- Glissez une carte vers une autre colonne pour mettre à jour la propriété groupée dans cette note. Seules les notes Markdown peuvent être déplacées entre les colonnes.
- Sélectionnez l'icône plus dans l'en-tête d'une colonne ou ![[lucide-plus.svg#icon]] **Nouveau** en bas d'une colonne pour créer une note avec la valeur de cette colonne.
- Glissez un en-tête de colonne pour modifier l'ordre des colonnes. Pour restaurer l'ordre d'origine, faites un clic droit sur une colonne et sélectionnez **Réinitialiser l'ordre**.
- Utilisez le menu ![[lucide-list.svg#icon]] **Propriétés** pour choisir les propriétés affichées sur chaque carte. La première propriété est affichée comme titre de la carte.

## Paramètres

Les paramètres de la vue Kanban peuvent être configurés dans les [[Vues#Paramètres de vue|paramètres de vue]].

- Masquer les colonnes vides
- Largeur de colonne
- Propriété de l'image
- Ajustement de l'image
- Ratio d'aspect de l'image

### Masquer les colonnes vides

Masque les colonnes qui ne contiennent aucune carte.

### Largeur de colonne

Définit la largeur de chaque colonne et de ses cartes.

### Propriété de l'image

Les cartes Kanban prennent en charge une image de couverture optionnelle affichée en haut de la carte. Les valeurs de propriété prises en charge sont les mêmes que pour la [[Galerie#Propriété de l'image|propriété de l'image dans la vue Galerie]].

### Ajustement de l'image

Si vous avez configuré une propriété d'image, cette option détermine comment l'image est affichée dans la carte.

- **Couvrir :** L'image remplit la zone de contenu de la carte. Si elle ne tient pas, l'image est recadrée.
- **Contenir :** L'image est mise à l'échelle jusqu'à tenir dans la zone de contenu de la carte. L'image n'est pas recadrée.

### Ratio d'aspect de l'image

La hauteur de l'image de couverture est déterminée par son ratio d'aspect. Ajustez cette option pour rendre l'image plus courte ou plus haute.
