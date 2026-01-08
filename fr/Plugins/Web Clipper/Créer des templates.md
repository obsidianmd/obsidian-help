Le [[Introduction au Web Clipper d'Obsidian|Web clipper]] vous permet de créer des templates qui enregistrent et organisent automatiquement les métadonnées d'une page Web. Des exemples de templates sont disponibles sur [Github](https://github.com/kepano/clipper-templates). 

### Créer ou éditer des templates

Les templates utilisent des variables et des filtres qui vous permettent de personnaliser la manière dont le contenu sera enregistré.

Pour **créer** une template, aller dan les **Paramètres du Web clipper** et cliquez sur **Nouvelle template** dans la barre latérale. Vous pouvez aussi **dupliquer** une template dans le menu **Plus d'actions** dans le coin situé en haut à droite. 

Pour **éditer** une template, choisissez-en une dans la barre latérale avant de commencer à l'éditer. Vos changements seront automatiquement sauvegardés.

### Importer et exporter des templates

Pour importer une template, suivez ces instructions : 
1. Ouvrez l'extension et cliquez sur l'icône des **Paramètres** ;
2. Sélectionnez une template dans la liste ;
3. Cliquez sur **Importer** en haut à droite ou faites un glisser-déposer du fichier `.json` de la template. 

Pour exporter une template, cliquez sur **Exporter** en haut à droite. Cela va télécharger le fichier  `.json` de la template. Vous pouvez aussi copier dans le presse-papier les données de la template via le menu **Plus**. 

### Paramétrer les templates

#### Comportement

Cela définit comment le contenu du enregistré avec le Web clipper sera ajouté à votre coffre Obsidian :
- **Créer une nouvelle note** ;
- **Ajouter à une note existante**, en haut ou tout en bas ;
- **Ajouter à une note quotidienne**, en haut à droite (requiert d'activer le plugin [[notes quotidiennes]]). 

#### Activer une template automatiquement

L'activation automatique d'une template vous permet de d'en sélectionner une automatiquement en fonction de la page URL que vous êtes en train de consulter ou en fonction des données de [schema.org](https://schema.org/). Vous pouvez définir de multiples règles pour chaque template, séparées par une nouvelle ligne. 

La première ligne dans votre liste de templates indique laquelle est utilisée. Vous pouvez modifier leur ordre dans la liste en les faisant glisser de haut en bas dans les paramètres du Web clipper. 

##### Correspondance d'URL simple

La correspondance simple déclenche une template si l'URL de la page commence par le pattern choisi. 
	*Par exemple, `https://obsidian.md` activerait une template avec tous les URL commençant par ce texte.* 

##### Correspondance d'expression fréquente

Vous pouvez activer des templates sur la base d'URL plus complexes utilisant des expression fréquente. Encadrez l'expression entre des barres obliques (`/`). N'oubliez pas d'enlever les caractères spéciaux (comme par exemple `.` et `/`) avec une barre obliqué inversée (``\``). 
	Exemple : `/^https:\/\/www\.imdb\.com\/title\/tt\d+\/reference\/?$/` activerait une template pour chaque page de référence du site IMBD. 

##### Correspondance avec les données de Schema.org

Vous pouvez activer des templates en vous basant sur les données du site [schema.org](https://schema.org/) présentes sur la page que vous consultez. Pour cela, utilisez le préfixe `schema:` suivi de la clé de schéma que vous souhaitez. Vous pouvez, si vous le souhaitez, préciser une valeur attendue. 
	Exemples :
		-  ``schema:@Recipe`` activera une template sur les pages dont le type de schéma est "Recipe" ;
		- `schema:@Recipe.name` activera une template sur les pages où`` @Recipe.name`` est présent dans le schéma ;
		- `schema:@Recipe.name=Cookie` activera une template sur les pages où le schéma `` @Recipe.name`` est "Cookie". 

Les valeurs de schema.org peuvent aussi être utilisées pour préremplir les données dans les templates. 

#### Le contexte de l'interpréteur

quand [[L'outil Interpréteur|l'interpréteur]] est activé, vous pouvez utiliser des variables de prompts pour extraire le contenu d'une page avec du langage naturel. Pour chaque template, vous pouvez définir le contexte auquel l'interpréteur a accès. 
