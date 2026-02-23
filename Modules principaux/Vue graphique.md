La vue graphique est un [[Modules principaux|module principal]] qui affiche une représentation graphique des [[ liens internes]] entre vos notes. Plus une note possède de liens, plus son nœud apparaîtra gros dans la vue graphique. Elle vous permet d'avoir une vue d'ensemble sur tout votre coffre. 

Pour l'ouvrir, vous pouvez cliquer sur le bouton "Ouvrir la vue graphique" dans le ruban d'icône à gauche de l'écran : ![[bouton-vue-graphique.png]]
Vous pouvez aussi définir un [[Raccourcis clavier|raccouri clavier]] dans les paramètres.

## Utiliser la vue graphique pour la première fois

### Conseils de visualisation

- Vous pouvez survoler chaque nœud pour mettre en évidence ses connexions, en atténuant tout le reste.
- Vous pouvez faire glisser les nœuds pour réorganiser le graphique. Cela peut être utile si certains nœuds se superposent à d'autres. Cependant, le positionnement de sera pas sauvegardé après fermeture et réouverture du d'Obsidian.

### Conseils de navigation

- Pour zoomer, vous pouvez utiliser la molette de la souris. Si cela ne fonctionne pas, maintenez la touche `Ctrl / Cmd` simultanément.  
- Pour vous déplacer, faites un clic-souris glissé ou utilisez les touches flèches du clavier.
- Maintenez `Maj / Shift` tout en naviguant avec les flèches du clavier pour accélérer le déplacement.

Vous pouvez aussi activer une animation montrant comment votre coffre a grandit au fil de la création de vos notes en cliquant sur **Démarrer le time-lapse** juste en-dessous de la roue dentée qui se trouve en haut à droite de la vue graphique. ![[animation-vue-graphique.mp4]]  ^1a05d4

## Paramètres de la vue graphique

Pour ouvrir les paramètres de la vue graphique, cliquez sur le symbole de roue dentée en haut à droite de celle-ci. 

### Les filtres

Les filtres vous permettent de choisir quels éléments du coffre seront visible dans la vue graphique.
- La **fonction recherche de fichiers** vous permet d'appliquer un filtre en fonction des termes ou [[mots-clés ]] que vous entrerez dans son champs de recherche. Pour en savoir plus sur les usages avancés de cette fonctions, consultez la note [[Recherche]]. 
- Pour afficher les **[[mots-clés]]** dans la vue graphique, cliquez sur le bouton "mots-clés". 
- Pour afficher les **pièces jointes** dans la vue graphique, cliquez sur le bouton "pièces jointes".
- Lorsque vous activez le bouton "**Fichiers existants uniquement**", les liens vers des fichiers qui ne sont pas encore existants ne s'afficheront pas. 
- Lorsque vous activez le bouton "**Orphelins**", les fichiers existants qui ne sont liés à aucun autre fichier deviendront visibles dans la vue graphique. 

> [!INFO] Fichiers exclus
> Les fichiers correspondant à vos paramètres des [[Paramètres#Fichiers exclus|fichiers exclus]] ne sont pas visibles dans la vue graphique. 

### Les groupes

Créer des groupes de notes dans la vue graphique vous permet de distinguer plus facilement les différents types de notes ou les différents thèmes au sein de votre coffre. 

Pour créer un nouveau groupe :
1. Cliquez sur **Nouveau groupe** dans les paramètre de la vue graphique ;
2. Dans le champs qui apparaît, insérez les mots-clés correspondant à ce que vous souhaitez. Vous pouvez créer des règles en fonction du dossier, des tags, des propriétés, etc. (consultez la note [[Recherche]] pour en savoir plus) ;
3. Cliquez sur le rond coloré pour choisir quelle couleur assigner à ce groupe. 

### Affichage

Cette section vous permet de modifier la façon dont les liens et les nœuds apparaissent à l'écran. 
- **Flèche** : activer ce bouton montre dans quelle direction pointent les liens.
- **Seuil de fondu du texte** : ce curseur vous permet de définir à partir de quel niveau de zoom le nom des notes devient visible. 
- **Taille des nœuds** : permet d'ajuster la taille des cercles représentant les notes.
- **Epaisseur des liens :** permet d'ajuster l'épaisseur des liens. 
- **Animer** : cliquer sur ce bouton met en route le [[Vue graphique#^1a05d4|time-lapse]] décrit précédemment. 

### Force des vecteurs 

Cette section vous permet d'ajuster la force des vecteurs générés sur les nœuds par les liens. 
- **Force centrale** : permet de rendre le graphique plus ou moins compact. Plus la valeur est haute, plus celui-ci aura l'air circulaire et compact.
- **Force de répulsion** : permet d'ajuster la force avec laquelle un nœud repousse ceux qui ne lui sont pas liés
- **Force de liaison** : permet d'ajuster la force avec laquelle les nœuds liés entre eux se rapproche les uns des autres.
- **Distance des liens** : permet d'ajuster la longueur des liens. 

## Vue graphique du fichier actuel

Pour ouvrir une vue graphique ne montrant que les notes auxquelles est liée celle que vous êtes en train de consulter, utiliser la commande **Vue graphique : ouvrir la vue graphique autour du fichier courant**. Vous pouvez l'utiliser via la [[palette de commandes]] ou avec un [[Raccourcis clavier|raccourci clavier]]. Vous pouvez aussi activer cette commande en allant dans **Plus d'option** (en haut à droite de la note) -> **Ouvrir la vue liée**. 

Tous les paramètres disponible pour la vue graphique globale du coffre sont disponibles. Mais il y en a un autre en plus. C'est la **profondeur des liens**. À chaque niveau supplémentaire, vous verrez toutes les notes liées à celles du niveau précédent. C'est comme l'option "voir les amis de mes amis" sur certains réseaux sociaux. Ce paramètres se trouve dans les filtres de la vue graphique. 

## Paramètres avancés
### [[CSS personnalisé]]

Puisque le graphique est rendu à l'aide de `<canvas>` et de WebGL, CSS ne peut pas affecter des éléments tels que les nœuds et les liens. Pour personnaliser la vue graphique, nous avons fourni un moyen de convertir les couleurs CSS en commandes WebGL.

#### Les classes CSS suivantes sont prises en charge :

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

#### Les règles CSS suivantes sont prises en charge :

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

#### Règes par défaut

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
