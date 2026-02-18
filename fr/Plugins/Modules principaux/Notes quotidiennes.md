# Notes quotidiennes

Note quotidienne est un [[Modules principaux|module principal]] qui crée une nouvelle note qui sera automatiquement nommée avec la date actuelle. Si elle existe déjà, il ouvrira cette note. C'est un moyen utile de tenir un journal quotidien, faire une liste de tâches ou une liste de liens vers des notes que vous avez créées un jour spécifique.

Le format de date et le dossier par défaut pour Note quotidienne peuvent être définis dans **[[Paramètres]] → [[Modules principaux]]**, en cliquant sur l'engrenage qui se trouve à côté du nom du module lorsque celui-ci est activé (bouton à droite). Le format de date par défaut est "AAAA-MM-JJ" (format ISO). Ce format signifie qu'une liste de notes quotidiennes, classées par ordre alphabétique, le sera également par ordre chronologique.

Vous pouvez également définir un fichier modèle pour les notes quotidiennes. Ce fichier sera copié dans votre note quotidienne lors de sa création, c'est donc un bon endroit pour mettre des balises ou des liens que vous utilisez tous les jours.

Vous pouvez créer une note quotidienne soit en cliquant sur l'icône de calendrier dans le panneau de gauche, soit avec la [[palette de commandes]]. Vous pouvez également définir un [[Raccourcis clavier|raccourci clavier]] dans les [[paramètres]].


> [!NOTE] Créer des sous-dossiers automatiquement
> Vous pouvez automatiser l'organisation de vos notes quotidiennes dans des sous-dossiers dont le nom se base sur le **format de date**.
> 
> Vous pouvez explorer les options possibles de formatage dans la documentation [momentJS](https://momentjs.com/docs/#/displaying/format/). 

## Créer un modèle de note quotidienne

Si vos notes quotidienne ont la même structure, vous pouvez-vous utiliser un [[Modèles|modèle]] pour leur ajouter automatiquement des informations prédéfinies lors de leur création. 

Voici les étapes à suivre pour cela :
1. Créez une nouvelle note que vous nommerez "Modèle de notes quotidienne" avec à l'intérieur du texte que vous voulez retrouver dans chacune de vos notes quotidienne. Cela peut par exemple être la date du jours, des titres, des items de [[propriétés]], etc. ;
2. Ouvrez les [[paramètres]] ;
3. Dans la barre latérale, cliquez sur **Notes quotidiennes** sous **[[Modules principaux]]** (s'il n'est pas activé, il  ne sera pas visible dans la barre latérale) ;
4. Dans la fenêtre qui s'ouvre, à côté de **"Emplacement du fichier de modèle"**, inscrivez le chemin d'emplacement du fichier qui vous servira de modèle (Par exemple : Notes quotidiennes/Modèles/Modèle-1). 

Le logiciel Utilisera le modèle correspondant la prochaine fois que vous créerez une note quotidienne. 

## Les notes quotidiennes et les propriétés

Quand le module notes quotidiennes est activé et qu'une [[propriété]] de date est présente dans une note, Obsidian va automatiquement tenter de générer un lien vers la note quotidienne correspondant à ce jours spécifique. Le liens sera alors visible dans l'[[aperçu direct]]  de la [[propriété]] en question. 
