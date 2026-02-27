Les liens internes sont l'épine dorsale de votre réseau de connaissances. C'est en créant des liens entre les fichiers de votre coffre que vous constituerez votre réseau de connaissances. ^c6d720

Obsidian actualise automatiquement les liens internes dans votre coffre lorsque vous les renommez. Si vous préférez que le logiciel vous demande à chaque fois si vous souhaitez actualiser le lien, vous pouvez désactiver cela en allant dans :
**Paramètres → Fichiers et Liens → Décocher "Toujours mettre à jours les liens internes".**

# Format pris en charge pour les liens internes

Obsidian prend en charge les formats de liens suivant :
- Wikiliens (*Wikilinks*) : `[[Votre note]]` ou `[[Votre note.md]]` ;
- Markdown : `[Votre note](Votre%20note)` ou `[Votre note](Votre%20note.md)`. 

Les exemples ci-dessus sont équivalent, il apparaissent de manière identique et pointent vers la même note. 

> [!NOTE] **Attention**
> Quand vous utilisez le format Markdown, assurez-vous d'utiliser un [encodage URL](https://fr.wikipedia.org/wiki/Encodage-pourcent) pour la destination du lien. Par exemple, les espace sont codés par la syntaxe  `%20`.

Par défaut et en raison de son format plus compacte, Obsidian génère des liens utilisant le format "Wikilien". Si l'interopérabilité est importante pour vous, vous pouvez désactiver les Wikiliens et utiliser les liens Markdown à la place. 

Pour utiliser le format Markdown :
1. Ouvrez les ``Paramètres`` ;
2. Sous ``Fichiers et Liens``, désactivez `Utiliser les [[Wikilinks]]`. 

> [!NOTE] Caractères invalides
> Un lien contenant les caractères suivants risque de ne pas fonctionner, ou pas comme vous le souhaiteriez : `# | ^ : %% [[ ]]`.
> Nous recommandons donc d'éviter d'utiliser ces caractères pour des titres de notes et de liens. Si vous souhaitez en savoir plus, vous pouvez consulter cette page sur [les bonnes pratiques de nommage de fichiers](https://archifiltre.fabrique.social.gouv.fr/bien-nommer-ses-fichiers-pour-mieux-les-retrouver-le-guide-de-survie-numerique/). 

# Créer un lien vers un fichier

Pour créer un lien interne, tapez simplement `[[`. Cela vous affichera la liste des notes vers lesquelles vous pouvez créer un lien. Utilisez `Flèche vers le haut` et `Flèche vers le bas` pour naviguer dans la liste de suggestions et `Entrée` pour sélectionner le lien actuellement en surbrillance. Vous pouvez également utiliser la [[palette de commandes]] et sélectionner ``Ajouter un lien interne``, ou faire ``clic-droit → Ajouter un lien``. 

Vous pouvez créer des lien vers n'importe quel [[Formats acceptés|fichier dont le format est pris en charge]], mais lorsqu'il s'agit d'un format autre que le Markdown, il faut inclure l'extension du fichier. Par exemple : `[[Image.png]]`. 

> Insérer un point d'exclamation juste avant les crochet `![[Lien]]` permet d'afficher le contenu se trouvant dans le fichier vers lequel vous faites un lien. 
> Pour plus d'informations, consultez la page [[Fichiers incrémentés]]. 
^bab689
# Créer un lien vers un en-tête...

Vous pouvez également créer un lien vers des en-têtes spécifiques dans les fichiers (ce sont les titres et sous-titres se trouvant à l'intérieur d'une note ; on peut aussi dire *"liens d'ancrage"*). 

## ...Vers un en-tête se trouvant dans la note que vous consultez

Si vous voulez faire cela en redirigeant vers un titre qui se trouve à l'intérieur du fichier dans lequel vous êtes en train d'écrire, vous pouvez appuyer sur `#` toute de suite après avoir mis les crochets, sans avoir besoin de passer par le nom de la note. Exemple : [[#Créer un lien vers un paragraphe]]. 

## ...Vers un en-tête se trouvant dans une autre note

Pour ce faire, commencez à taper un lien comme vous le feriez normalement. Lorsque la note que vous recherchez est mise en surbrillance, appuyez sur `#` au lieu de `Entrée` et vous verrez une liste des titres présents dans ce fichier. Continuez à saisir ou naviguez avec les touches de direction comme précédemment, appuyez sur `#` à nouveau à chaque sous-titre que vous voulez ajouter puis sur `Entrée` pour compléter le lien.

# Créer un lien vers un paragraphe

Chaque paragraphe est considéré comme une "*unité de texte*" (ou "*blocs de texte"*) dans votre note. C'est aussi le cas de chaque bloc de citation et de chaque ligne dans une liste.

Pour créer un lien vers une unité de texte, il faut ajouter un `^` à la place du `#` que nous mettions pour créer des liens vers des en-têtes. Cela veut dire que si l'unité de texte vers laquelle vous souhaitez faire un lien se trouve dans la note que vous être en train de consulter, vous pouvez mettre le `^` tout de suite après les crochets, ce qui donne `[[^Unité de texte]]`. Et si cette unité de texte se trouve dans une autre note, il faut mettre le `^` après le nom de la note cible, ce qui donne `[[Nom de la note^Unité de texte]]`. 

>Comme tout types de liens, ceux qui pointent vers un en-tête ou une unité de texte peuvent être [[Fichiers incrémentés|incrémentés]].

Voici un exemple de lien incrémenté vers une unité de texte venant de la même note : ![[#^c6d720]] 
Voici un exemple de lien incrémenté vers une unité de texte venant d'une autre note : ![[Fichiers incrémentés#^812a39]]

> [!NOTE] **Attention**
> 1. Il n'est pas possible de faire un lien vers une partie d'un bloc de citation, d'un bloc de mise en avant ou d'un tableau. Les liens vers ces éléments doivent forcément  afficher l'ensemble de leur contenu. 
> 
> 2. Si vous utilisez un autre logiciel de prise de note prenant en charge le Markdown, sachez que les liens vers des unités de textes sont spécifiques à Obsidian, ils ne font pas partie des standards du format Markdown. Ce genre de liens ne fonctionnera donc pas en cas de migration vers un autre logiciel. 

# Afficher le contenu d'un lien non incrémenté

Pour que cela fonctionne, il faut que l'[[aperçu de page]] soit activé dans vos paramètres des modules principaux. Pour afficher le contenu d'un lien sans l'ouvrir, faites glisser la souris sur le lien sans cliquer et en maintenant la touche  `Ctrl / Cmd` enfoncée lorsque vous êtes en mode édition. Une fois la souris sur le panneau de prévisualisation, vous pouvez relâcher  `Ctrl / Cmd` et faire des modifications dans la note que vous prévisualisez.  
Pour ouvrir un lien dans un nouvel onglet, cliquez dessus tout en maintenant enfoncée la touche `Ctrl / Cmd`.

# Changer le mode d'affichage d'un lien 

Par défaut, Obsidian montre le texte du lien d'une façon qui n'est pas forcément très optimale à la lecture. Par exemple, un lien vers un en-tête apparaît comme ceci : [[Fichiers incrémentés#Notes pour les développeurs]]. 
Vous pouvez personnaliser cela afin de rendre la lecture du texte plus fluide en ajoutant une barre verticale `|` juste après le nom de l'entête vers lequel vous faites un lien. Ensuite, écrivez à la suite de cette barre le nom personnalisé et le tour est joué. 
	Exemple :  [[Fichiers incrémentés#Notes pour les développeurs|Note pour les développeurs à propos des fichiers incrémentés]]. 

Si vous voulez qu'Obsidian enregistre un nom alternatif de lien pour faciliter son usage, préférez l'utilisation d'un [[alias]]. C'est utile lorsque vous faites souvent des liens vers une même page en utilisant un même nom alternatif à chaque fois et que vous ne voulez pas pour autant changer le nom de cette note. 
