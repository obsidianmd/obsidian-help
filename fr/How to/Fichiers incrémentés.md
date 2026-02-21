Vous pouvez incrémenter des fichiers en tant que pièces-jointes dans vos notes, c'est-à-dire les inclures à l'intérieur en rendant leur contenu visible. C'est possible avec toutes sortes de fichiers utilisant un format universel (par exemple : .md ; .png ; .pdf ; .mp3 ; .mp4 ; etc.). Que ces fichiers soient du texte, de l'image, de la vidéo ou même du son, le principe est toujours le même : utilisez la syntaxe `[[nom de fichier.png]]` pour les images ; `[[nom de fichier.md]]` pour les notes Obsidian ; `[[nom de fichier.pdf]]` pour les documents PDF, etc. Vous pouvez aussi faire cela avec un glisser-déposer depuis l'[[explorateur de fichiers]], ce qui permet de ne pas passer par la syntaxe précédemment décrite.  ^812a39

Voici un exemple avec une image : ![[montagnes.avif]] Photo de [Jonny Gios](https://unsplash.com/fr/@supergios) sur [Unsplash](https://unsplash.com/fr). 

Comme vous pouvez le voir, lorsque vous ouvrez la note dans votre coffre Obsidian, la syntaxe est cachée mais elle est bien présente. Pour la rendre visible, il suffit de mettre le curseur sur la même ligne que la syntaxe et de le déplacer jusqu'à ce qu'il l'atteigne. 

Dans tous les cas, le fichier incrémenté reste comme un fichier normal et peut toujours être consulté via l'[[explorateur de fichiers]] ou le [[sélecteur rapide]], sa localisation dans votre coffre reste la même. Vous pouvez choisir de déplacer le fichier dans un autre dossier en faisant un **clic-droit** dessus à partir de l'[[explorateur de fichiers]], puis en sélectionnant "**Déplacer le fichier vers**". Une boîte de dialogue vous demande ensuite d'écrire ou de sélectionner le nom du dossier destinataire. 

Exemple de lien incrémenté vers une note interne au coffre : 
![[Formats acceptés]]

Vous pouvez aussi visualiser de façon temporaire le contenu d'un lien non incrémenté.

## ![[Liens internes#Afficher le contenu d'un lien non incrémenté]]

---
## Notes pour les développeurs

La syntaxe s'inspire de celle des fichiers Markdown. Deux observations :
1. `[Image](lien.png)` fait un lien vers l'image, mais `![Image](lien.png)` rend le contenu de l'image visible. 
2. La syntaxe interne du lien est basée sur l'assertion suivante :  `[[Ma page]]` est un raccourci (ou une syntaxe simplifiée si vous préférez) pour `[Ma page](Ma page)`.

Pour combiner ces deux éléments, nous pouvons imaginer un troisième modèle : `![[My page]]` est un équivalent de  `![My page](My page)` qui, selon le format d'image, si le titre est le même que dans le lien, devrait afficher son contenu. 

Il y a d'autres façon d'y parvenir, par exemple le logiciel Roam Research utilise la syntaxe `{{embed: ((NODE_ID))}}`. Nous avons aussi envisagé d'utiliser la syntaxe `((Page name))`, mais nous avons pensé que la syntaxe `![[Page name]]` est plus cohérente, plus intuitive et laisse plus de place aux autres symboles pour les laisser avoir leur propre signification.
