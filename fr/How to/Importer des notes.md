Les applications vont et viennes, mais vos données devraient toujours rester utilisables. Obsidian utilise le format de fichiers texte non-propriétaire "Markdown" pour un stockage local dans votre machine. Ainsi, vous avez un contrôle total sur toutes vos données, ce qui signifie que vous pouvez utiliser Obsidian en étant hors ligne et passer facilement à une autre application  quand vous en avez besoin. 

Il y a quelques différences de fonctionnement entre les divers [Systèmes de Gestion des Connaissances Personnelle](https://fr.wikipedia.org/wiki/Gestion_des_connaissances_personnelles) (*Personnal Knowledge Management*, ou *PKM*) et les outils de prise de notes classiques, ce qui entraîne parfois quelques difficultés dans la migration entre eux. Pour la plupart d'entre eux, si vos notes peuvent être converties au format Markdown, cela fonctionnera assez bien dans Obsidian. Mais certains éléments, comme les balises et les liens, peuvent être plus délicats.

Sur notre forum, vous pouvez trouver les [méthodes de d'importation des notes](https://help.obsidian.md/import) développée par des membres de la communauté Obsidian. À l'heure actuelle, vous pouvez y trouver des guides pour importer vos notes depuis : 
- [[Importer des notes#Migrer vos données de Roam Research vers Obsidian|Roam Research]] ;
- Notion ;
- OneNote ;
- Evernote.
- Apple Note ;
- Google Keep ;
- Bear ;
- Craft ;
- Zettelkasten Notes ;
- Textbundle. 
- Toute autre application permettant l'exportation vers l'un de ces formats : `.md` `.csv` ; `.html` ; `.json` ; `.zip` ; `.note`.
Si vous souhaitez importer vos notes depuis Roam Research, le guide se trouve. 

Notez que vous pouvez utiliser le [[module d'importation]] officiel d'Obsidian pour faire la migration de vos notes. Vous pouvez [le télécharger ici](obsidian://show-plugin?id=obsidian-importer).

Si vous ne voyez pas votre système parmi ceux précédemment cités, consultez les messages du forum, quelqu'un a peut-être résolu votre problème depuis la rédaction du présent document.

# Migrer vos données de Roam Research vers Obsidian

Si vous avez des données à migrer, il est facile de les exporter pour les utiliser dans Obsidian grâce au [[module d'importation]].

## 1. Exporter vos données de Roam Research

1. Dans Roam Research, cliquez sur **Plus d'actions** ( `•••` ) dans le coin en haut à droite, ensuite sélectionnez **Tout Exporter.**
![[Roam-exporting.png]]
2. Dans **Format d'exportation**, sélectionnez "JSON", ensuite sélectionnez **Tout Exporter** pour télécharger une archive de vos notes. 

## 2. Importer vos données dans Obsidian

Avant de commencer, il vous faut installer le [[module d'importation]] officiel d'Obsidian. Vous pouvez [le télécharger en cliquant ici](obsidian://show-plugin?id=obsidian-importer) ou en cherchant "Importer" dans les modules complémentaires. Pensez bien à activer le module une fois celui-ci installé dans votre coffre.

1. Ouvrez le module **Importer** en utilisant la palette de commandes ou le ruban d'icônes sur la droite ;
2. Sous **File format (format de fichier)**, choisissez **Roam Research (.json).**
3. Sélectionnez l'emplacement de votre fichier `.json` ;
4. Sous **Output folder (dossier de sortie)**, choisissez où vous vous voulez que les fichiers apparaissent une fois l'importation terminée ;
5. Si vous voulez aussi importer des pièces-jointes, cochez **Download all attachments (télécharger toutes les pièces-jointes)** ;
6. Cliquez sur **Import** et attendez jusqu'à ce que l'importation soit terminé ;
7. C'est fait !
![[Roam-Importer-importing.png]]
