---
permalink: bases/views/cards
localized: '2026-03-18'
aliases:
  - Cards view
---
Cartes est un type de [[Vues|vue]] que vous pouvez utiliser dans les [[Introduction aux Bases|Bases]].

Sélectionnez ![[lucide-layout-grid.svg#icon]]  **Cartes** dans le menu de vue pour afficher les fichiers sous forme de grille de type galerie avec des images de couverture optionnelles.

## Paramètres

Les paramètres de la vue cartes peuvent être configurés dans les [[Vues#Paramètres de vue|Paramètres de vue]].

- Taille des cartes
- Propriété d'image
- Ajustement de l'image
- Ratio d'aspect de l'image

### Taille des cartes

Définit la largeur d'une carte.

### Propriété d'image

Les cartes prennent en charge une image de couverture optionnelle, qui est une [[Propriétés|propriété]] affichée sous forme d'image en haut de la carte. La propriété peut être l'un des éléments suivants :

- Un lien vers une [[Pièces jointes|pièce jointe]] locale `"[[lien/vers/piece-jointe.jpg]]"`
- Un lien externe (URL)
- Un code couleur hexadécimal (`#000000`)

### Ajustement de l'image

Si vous avez configuré une propriété d'image, cette option détermine comment l'image doit être affichée dans la carte.

- **Couverture :** L'image remplit la zone de contenu de la carte. Si elle ne tient pas, l'image sera recadrée.
- **Contenir :** L'image est mise à l'échelle jusqu'à tenir dans la zone de contenu de la carte. L'image ne sera pas recadrée.

### Ratio d'aspect de l'image

La hauteur de l'image de couverture est déterminée par son ratio d'aspect. Le ratio d'aspect par défaut est 1:1, ce qui signifie que toutes vos images seront carrées. Ajustez cette option pour rendre l'image plus courte ou plus haute.
