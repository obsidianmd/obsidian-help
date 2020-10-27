# Vue graphique

Affiche une représentation graphique des [[Internal link | liens internes]] entre vos notes.

Les notes les plus référencées apparaissent sous forme de nœuds plus gros sur le graphique.

![[Pasted image 10.png]]

### Conseils de visualisation

- Vous pouvez survoler chaque nœud pour mettre en évidence ses connexions, en atténuant tout le reste.
- Vous pouvez faire glisser les nœuds pour réorganiser le graphique. Cela peut être utile si certains nœuds se superposent à d'autres.

### Conseils de navigation

- Pour zoomer, vous pouvez utiliser la molette de la souris, ainsi que les touches `+` et `-`.
- Pour vous déplacer, faites glisser l'arrière-plan ou utilisez les touches fléchées du clavier.
- Maintenez `Shift` tout en naviguant avec le clavier pour accélérer le déplacement.

### [[Custom CSS | CSS personnalisé]]

Puisque le graphique est rendu à l'aide de `<canvas>` et de WebGL, CSS ne peut pas affecter des éléments tels que les nœuds et les liens. Pour personnaliser la vue graphique, nous avons fourni un moyen de convertir les couleurs CSS en commandes WebGL.

#### Les classes CSS suivantes sont prises en charge:

```
.graph-view.color-fill
.graph-view.color-fill-tag (theme-dependent)
.graph-view.color-fill-attachment (theme-dependent)
.graph-view.color-arrow
.graph-view.color-circle
.graph-view.color-line
.graph-view.color-text
.graph-view.color-fill-highlight
.graph-view.color-line-highlight
.graph-view.color-fill-unresolved
```

\* theme-dependent signifie que vous devrez peut-être ajouter `.theme-dark` ou` .theme-light` pour le styliser pour différents thèmes. Voir [[#Règes par défaut]] pour les explications.

#### Les règles CSS suivantes sont prises en charge:

```css
 .graph-view.color-class {
	/* Prend en charge toutes les directives de couleur CSS, telles que #HEX, rgb et rgba */
	color:   #FFF;
	color:   #FFFFFF;
	color:   rgb(0, 0, 0);
	color:   rgba(0, 0, 0, 1);
	/* L'opacité (similaire à rgba) rendra la couleur transparente */
	opacity: 0.5;
}
```

#### Règes par défaut:

Ces règles CSS sont celles qu'Obsidian utilise par défaut. Vous pouvez remplacer n'importe laquelle d'entre elles en utilisant une règle CSS identique ou [plus spécifique] (https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity). Cela s'applique en particulier à `.color-fill-tag` et `.color-fill-attachment` En dernier recours, ajoutez `! Important` à la fin de votre règle.

```css
.graph-view.color-fill,
.theme-dark .graph-view.color-fill-tag,
.theme-light .graph-view.color-fill-tag,
.theme-dark .graph-view.color-fill-attachment,
.theme-light .graph-view.color-fill-attachment,
.graph-view.color-arrow,
.graph-view.color-circle,
.graph-view.color-line,
.graph-view.color-text,
.graph-view.color-fill-highlight,
.graph-view.color-line-highlight,
.graph-view.color-fill-unresolved {}
```