Le Web clipper vous permet de surligner le texte d'une page Web et de sélectionner les éléments que vous voulez sauvegarder dans Obsidian. Vos surlignages sont sauvegardés, donc vous pouvez les modifier quand vous retournez sur une page déjà surlignée. Les surlignages peuvent être sauvegardés dans Obsidian quand vous ouvrez l'extension. 

### Activer le surligneur

Vous pouvez activer le surlignage de plusieurs façons en fonction de votre navigateur : 
- Avec l'icône du surligneur dans la palette de l'extension ; 
- Avec les raccourcis clavier ;
- Avec le menu contextuel, en cliquant-droit sur la page Web que vous êtes en train de consulter. 

 Une fois que le surlignage est activé, vous pouvez sélectionner du texte, des images et d'autres éléments que vous souhaitez surligner. 
 
### Paramètres du surligneur

Vous pouvez changer le comportement du surligneur en allant dans les paramètres du Web clipper. À cet endroit vous pouvez aussi exporter vos surlignages en fichier ``.json``. 

Il y a trois options différentes de surlignage qui peuvent être insérées dans les notes du clipper via la variable `{{content}}` :
- Surligner le contenu de la page — ajouter les surlignages directement au texte avec la syntaxe ` ==surligner== ` ;
- **Remplacer le contenu de la page** — renvoie une liste des éléments mis en évidence, sans aucun contenu de la page ; 
- **Annuler le surlignage** — récupérer le contenu original de la page sans surlignages. 

Vous pouvez ajouter des surlignages directement à vos templates en utilisant la variable `{{highlights}}`
> Exemple : `{{highlights|map: item → item.text|join:"\n\n"}}`