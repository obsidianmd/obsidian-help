---
permalink: plugins/canvas
localized: '2026-03-18'
mobile: true
---
Canvas est un [[Modules principaux|module principal]] pour la prise de notes visuelle. Il vous offre un espace infini pour disposer vos notes et les relier à d'autres notes, pièces jointes et pages web.

La prise de notes visuelle vous aide à donner du sens à vos notes en les organisant dans un espace 2D. Reliez les notes avec des lignes et regroupez les notes liées pour mieux comprendre les relations entre elles.

Les données Canvas que vous créez dans Obsidian sont enregistrées sous forme de fichiers `.canvas` utilisant le format de fichier ouvert [JSON Canvas](https://jsoncanvas.org/).

## Créer un nouveau canvas

Pour commencer à utiliser Canvas, vous devez d'abord créer un fichier pour contenir votre canvas. Vous pouvez créer un nouveau canvas en utilisant les méthodes suivantes.

**Palette de commandes :**

1. Ouvrez la [[Palette de commandes]].
2. Sélectionnez **Canvas : Créer un nouveau canvas** pour créer un canvas dans le même dossier que le fichier actif.

**Explorateur de fichiers :**

- Dans l'[[Explorateur de fichiers]], faites un clic droit sur le dossier dans lequel vous souhaitez créer le canvas.
- Sélectionnez **Nouveau canvas**.

**Ruban :**

- Dans le menu vertical du ruban, sélectionnez **Créer un nouveau canvas** ![[lucide-layout-dashboard.svg#icon]] pour créer un canvas dans le même dossier que le fichier actif.

> [!note] L'extension de fichier .canvas
> Obsidian stocke vos données canvas sous forme de fichiers `.canvas` utilisant un format de fichier ouvert appelé [JSON Canvas](https://jsoncanvas.org/).

## Ajouter des cartes

Vous pouvez glisser des fichiers dans votre canvas depuis Obsidian ou depuis d'autres applications. Par exemple, des fichiers Markdown, des images, des fichiers audio, des PDF, ou même des types de fichiers non reconnus.

### Ajouter des cartes de texte

Vous pouvez ajouter des cartes contenant uniquement du texte qui ne référencent pas un fichier. Vous pouvez utiliser Markdown, des liens et des blocs de code comme dans une note.

Pour ajouter une nouvelle carte de texte à votre canvas :

- Sélectionnez ou glissez l'icône de fichier vierge en bas du canvas.

Vous pouvez également ajouter des cartes de texte en double-cliquant sur le canvas.

Pour convertir une carte de texte en fichier :

1. Faites un clic droit sur la carte de texte puis sélectionnez **Convertir en fichier...**.
2. Entrez le nom de la note puis sélectionnez **Enregistrer**.

> [!note] Note
> Les cartes de texte uniquement n'apparaissent pas dans les [[Rétroliens]]. Pour qu'elles apparaissent, vous devez les convertir en fichier.

### Ajouter des cartes depuis des notes

Pour ajouter une note de votre coffre à votre canvas :

1. Sélectionnez ou glissez l'icône de document en bas du canvas.
2. Sélectionnez la note que vous souhaitez ajouter.

Vous pouvez également ajouter des notes depuis le menu contextuel du canvas :

1. Faites un clic droit sur le canvas puis sélectionnez **Ajouter une note depuis le coffre**.
2. Sélectionnez la note que vous souhaitez ajouter.

Ou, vous pouvez les ajouter au canvas en glissant le fichier depuis l'[[Explorateur de fichiers]].

Pour n'afficher qu'une partie d'une note dans une carte, faites un clic droit sur la carte et sélectionnez **Réduire à l'en-tête...** ou **Réduire au bloc...**. Puis choisissez l'entête ou le bloc.

### Ajouter des cartes depuis des médias

Pour ajouter un média de votre coffre à votre canvas :

1. Sélectionnez ou glissez l'icône de fichier image en bas du canvas.
2. Sélectionnez le fichier média que vous souhaitez ajouter.

Vous pouvez également ajouter des médias depuis le menu contextuel du canvas :

1. Faites un clic droit sur le canvas puis sélectionnez **Ajouter un média depuis le coffre**.
2. Sélectionnez le fichier média que vous souhaitez ajouter.

Ou, vous pouvez les ajouter au canvas en glissant le fichier depuis l'[[Explorateur de fichiers]].

### Ajouter des cartes depuis des pages web

Pour intégrer une page web dans votre canvas :

1. Faites un clic droit sur le canvas puis sélectionnez **Ajouter une page web**.
2. Entrez l'URL de la page web puis sélectionnez **Enregistrer**.

Vous pouvez également sélectionner une URL dans votre navigateur puis la glisser dans le canvas pour l'intégrer dans une carte.

Pour ouvrir la page web dans votre navigateur, appuyez sur `Ctrl` (ou `Cmd` sur macOS) et sélectionnez l'étiquette de la carte. Ou, faites un clic droit sur la carte et sélectionnez **Ouvrir dans le navigateur**.

Faites un clic droit sur une carte de page web pour plus d'options.

- **Copier le lien** copie l'adresse de la page web.
- **Changer l'URL...** modifie l'adresse affichée par la carte.
- **Recharger la page** recharge la page web.

### Ajouter des cartes depuis des bases

Pour afficher une [[Introduction aux Bases|base]] dans votre canvas, glissez le fichier de base depuis l'explorateur de fichiers dans le canvas. La carte affiche la base.

Une carte de base affiche la vue par défaut de la base. Pour afficher une vue différente :

1. Faites un clic droit sur la carte puis sélectionnez **Épingler la vue...**.
2. Sélectionnez la vue souhaitée.

Pour revenir à la vue par défaut, sélectionnez à nouveau **Épingler la vue...**, puis sélectionnez **Afficher la vue par défaut**.

### Ajouter des cartes depuis des dossiers

Glissez un dossier depuis l'explorateur de fichiers pour ajouter tous les fichiers de ce dossier au canvas.

### Modifier une carte

Double-cliquez sur une carte de texte ou de note pour commencer à la modifier. Cliquez en dehors de la carte pour arrêter la modification. Vous pouvez également appuyer sur `Échap` pour arrêter la modification d'une carte.

Vous pouvez également modifier une carte en faisant un clic droit dessus et en sélectionnant **Modifier**. Ou, sélectionnez la carte puis sélectionnez **Modifier** ![[lucide-square-pen.svg#icon]] dans les contrôles de sélection.

### Supprimer une carte

Supprimez les cartes sélectionnées en faisant un clic droit sur l'une d'entre elles, puis en sélectionnant **Supprimer**. Ou, appuyez sur `Retour arrière` (ou `Suppr` sur macOS).

Vous pouvez également sélectionner **Supprimer** ![[lucide-trash-2.svg#icon]] dans les contrôles de sélection au-dessus de votre sélection.

### Remplacer des cartes

Vous pouvez remplacer une carte de note ou de média par une autre carte du même type.

Pour remplacer une carte de note :

1. Faites un clic droit sur la carte que vous souhaitez remplacer.
2. Sélectionnez **Remplacer le fichier**.
3. Sélectionnez la note par laquelle vous souhaitez la remplacer.

## Sélectionner des cartes

Sélectionnez des cartes dans le canvas en cliquant dessus. Vous pouvez sélectionner plusieurs cartes en traçant une sélection autour d'elles.

Vous pouvez également ajouter et retirer des cartes d'une sélection existante en appuyant sur `Maj` et en les sélectionnant.

Appuyez sur `Ctrl+a` (ou `Cmd+a` sur macOS) pour sélectionner toutes les cartes du canvas.

Pour faire défiler le contenu d'une carte, vous devez d'abord la sélectionner.

### Disposer les cartes

Glissez une carte sélectionnée pour la déplacer.

Appuyez sur `Alt` (ou `Option` sur macOS) et glissez pour dupliquer la sélection.

Vous pouvez appuyer sur `Maj` pendant le déplacement pour ne bouger que dans une seule direction.

Appuyez sur `Espace` pendant le déplacement d'une sélection pour désactiver l'alignement automatique.

Sélectionner une carte la place au premier plan.

### Redimensionner une carte

Glissez l'un des bords d'une carte pour la redimensionner.

Vous pouvez appuyer sur `Espace` pendant le redimensionnement pour désactiver l'alignement automatique.

Pour conserver le rapport hauteur/largeur lors du redimensionnement, appuyez sur `Maj` pendant le redimensionnement.

### Aligner et disposer les cartes

Pour aligner plusieurs cartes, sélectionnez deux cartes ou plus. Dans les contrôles de sélection, sélectionnez **Aligner**, puis choisissez une option.

- **Aligner à gauche**, **Aligner au centre** et **Aligner à droite** alignent les cartes sur une ligne verticale.
- **Aligner en haut**, **Aligner au milieu** et **Aligner en bas** alignent les cartes sur une ligne horizontale.
- **Disposer en ligne**, **Disposer en colonne** et **Disposer en grille** déplacent les cartes dans cette disposition.
- **Répartir l'espacement horizontal** et **Répartir l'espacement vertical** espacent les cartes de manière égale.
- **Justifier horizontalement** et **Justifier verticalement** redimensionnent chaque carte pour correspondre à la largeur ou à la hauteur totale de la sélection.

## Connecter des cartes

Tracez des lignes entre les cartes pour créer des relations entre elles. Utilisez des couleurs et des étiquettes pour décrire comment elles sont liées les unes aux autres.

### Connecter deux cartes

Pour connecter deux cartes avec une ligne orientée :

1. Survolez le curseur sur l'un des bords d'une carte jusqu'à ce qu'un cercle plein apparaisse.
2. Glissez le cercle vers le bord d'une autre carte pour les connecter.

> [!tip] Astuce
> Si vous glissez la ligne sans la connecter à une autre carte, vous pouvez ensuite ajouter la carte à laquelle vous souhaitez la connecter.

### Déconnecter deux cartes

Pour supprimer la connexion entre deux cartes :

1. Survolez le curseur sur une ligne de connexion jusqu'à ce que deux petits cercles apparaissent sur la ligne.
2. Glissez l'un des cercles depuis la carte sans le connecter à une autre.

Vous pouvez également déconnecter deux cartes en faisant un clic droit sur la ligne entre elles, puis en sélectionnant **Supprimer**. Ou, en sélectionnant la ligne puis en appuyant sur `Retour arrière` (ou `Suppr` sur macOS).

### Connecter une carte à une autre carte

Pour déplacer l'une des extrémités d'une ligne de connexion :

1. Survolez le curseur sur une ligne de connexion jusqu'à ce que deux petits cercles apparaissent sur la ligne.
2. Glissez le cercle au-dessus de l'extrémité que vous souhaitez reconnecter, vers une autre carte.

### Naviguer dans une connexion

Si deux cartes connectées sont éloignées, vous pouvez accéder à la carte à l'autre extrémité de la connexion. Faites un clic droit sur la ligne près d'une extrémité, puis sélectionnez **Suivre la connexion**. Le canvas se déplace vers la carte à l'extrémité opposée.

### Ajouter une étiquette à une connexion

Vous pouvez ajouter une étiquette à une ligne pour décrire la relation entre deux cartes.

Pour étiqueter une connexion :

1. Double-cliquez sur la ligne.
2. Entrez l'étiquette puis appuyez sur `Échap` ou cliquez n'importe où sur le canvas.

Vous pouvez également étiqueter une connexion en la sélectionnant puis en sélectionnant **Modifier l'étiquette** dans les contrôles de sélection.

Pour modifier l'étiquette d'une connexion, double-cliquez sur la ligne, ou faites un clic droit sur la ligne puis sélectionnez **Modifier l'étiquette**.

Pour supprimer une étiquette, sélectionnez la connexion puis sélectionnez **Supprimer l'étiquette** dans les contrôles de sélection.

### Changer la direction d'une connexion

Par défaut, une connexion possède une flèche à l'extrémité qui pointe vers la seconde carte. Pour modifier cela :

1. Sélectionnez la connexion.
2. Dans les contrôles de sélection, sélectionnez **Direction de la ligne**.
3. Choisissez **Non directionnel**, **Unidirectionnel** ou **Bidirectionnel**.

### Changer la couleur d'une carte ou d'une connexion

1. Sélectionnez les cartes ou connexions que vous souhaitez colorier.
2. Dans les contrôles de sélection, sélectionnez **Définir la couleur** ![[lucide-palette.svg#icon]].
3. Sélectionnez une couleur.

## Regrouper des cartes

### Regrouper les cartes sélectionnées

Pour créer un groupe vide :

- Faites un clic droit sur le canvas puis sélectionnez **Créer un groupe**.

Pour regrouper des cartes liées :

1. Sélectionnez les cartes.
2. Faites un clic droit sur l'une des cartes sélectionnées puis sélectionnez **Créer un groupe**.

**Renommer un groupe :** Double-cliquez sur le nom du groupe pour le modifier, puis appuyez sur `Entrée` pour enregistrer.

### Ajouter un arrière-plan à un groupe

Vous pouvez afficher une image derrière les cartes d'un groupe.

1. Sélectionnez le groupe.
2. Dans les contrôles de sélection, sélectionnez **Définir l'arrière-plan**.
3. Choisissez une image de votre coffre.

Pour modifier l'arrière-plan, sélectionnez le groupe puis sélectionnez **Éditer l'arrière-plan**.

- **Remplacer l'arrière-plan** choisit une image différente.
- **Supprimer l'arrière-plan** supprime l'image.
- **Couvrir** fait en sorte que l'image remplisse le groupe.
- **Conserver le rapport hauteur/largeur** conserve les proportions de l'image.
- **Répéter** répète l'image en mosaïque sur tout le groupe.

## Naviguer dans le canvas

Au fur et à mesure que vous ajoutez des cartes à votre canvas, vous voudrez comprendre comment naviguer dans le canvas pour en observer une partie. Apprenez à panoramiquer et zoomer pour vous déplacer dans le canvas avec aisance.

### Panoramiquer dans le canvas

Pour déplacer le canvas verticalement et horizontalement, aussi appelé _panoramique_, vous pouvez utiliser l'une des approches suivantes :

- Appuyez sur `Espace` et glissez le canvas.
- Glissez le canvas en utilisant le bouton central de la souris.
- Faites défiler la molette de la souris pour panoramiquer verticalement, et appuyez sur `Maj` en faisant défiler pour panoramiquer horizontalement.

### Zoomer dans le canvas

Pour zoomer dans le canvas, appuyez sur `Espace` ou `Ctrl` (ou `Cmd` sur macOS) et faites défiler la molette de la souris. Ou, sélectionnez **Zoom avant** ![[lucide-plus.svg#icon]] et **Zoom arrière** ![[lucide-minus.svg#icon]] dans les contrôles de zoom en haut à droite.

#### Zoom pour tout afficher

Pour zoomer le canvas afin que chaque élément soit visible, sélectionnez **Zoom pour tout afficher** ![[lucide-maximize.svg#icon]]. Ou, utilisez le raccourci clavier `Maj+1`.

#### Zoom sur la sélection

Pour zoomer le canvas afin que tous les éléments sélectionnés soient visibles, faites un clic droit sur une carte sélectionnée puis sélectionnez **Zoom sur la sélection**. Ou, utilisez un raccourci clavier en appuyant sur `Maj+2`.

#### Réinitialiser le zoom

Pour rétablir le niveau de zoom par défaut, sélectionnez **Réinitialiser le zoom** dans les contrôles de zoom en haut à droite.


### Aller à un groupe

Pour se déplacer directement vers un groupe dans un grand canvas, ouvrez la palette de commandes et sélectionnez **Canvas : Passer au groupe**. La liste des groupes de votre canvas apparaît. Sélectionnez le groupe vers lequel vous souhaitez aller, et le canvas se déplace pour le centrer.

## Paramètres du canvas

Sélectionnez **Paramètres des canvas** ![[lucide-settings.svg#icon]] au-dessus des contrôles du canvas pour modifier le comportement de votre canvas.

- **Aligner sur la grille** aligne les cartes sur la grille d'arrière-plan lorsque vous les déplacez et les redimensionnez.
- **Aligner par rapport aux objets** aligne les cartes sur les cartes voisines lorsque vous les déplacez et les redimensionnez.
- **Lecture-seule** empêche les modifications du canvas.

## Exporter un canvas en image

Vous pouvez exporter un canvas en image PNG sur ordinateur. L'exportation en image n'est pas disponible dans l'application Obsidian sur mobile.

1. Ouvrez le canvas que vous souhaitez exporter.
2. Ouvrez la palette de commandes et sélectionnez **Canvas : Exporter comme image**.
3. Choisissez vos paramètres.
    - **Fenêtre d'affichage** définit ce qui sera exporté. Sélectionnez **Canvas complet** pour l'ensemble du canvas, ou **Fenêtre visible uniquement** pour la partie actuellement visible.
    - **Zoom** définit la qualité de l'image. Un zoom plus élevé produit une image plus grande et plus nette. La boîte de dialogue affiche la taille estimée de l'image.
    - **Afficher le logo** ajoute un logo Obsidian en bas à gauche. Cette option est activée par défaut.
    - **Mode de confidentialité** masque tout le texte de votre canvas. Cette option est désactivée par défaut.
4. Sélectionnez **Enregistrer**.
5. Choisissez où enregistrer le fichier. Le nom de fichier par défaut est le nom de votre canvas, avec l'extension `.png`.

Vous ne pouvez pas exporter un canvas vide.

## Annuler et rétablir

Pour annuler votre dernière modification, sélectionnez **Annuler** dans les contrôles du canvas sur le côté droit du canvas. Ou, appuyez sur `Ctrl+Z` (Windows et Linux) ou `Command+Z` (macOS).

Pour rétablir une modification, sélectionnez **Rétablir**. Ou, appuyez sur `Ctrl+Y` ou `Ctrl+Maj+Z` (Windows et Linux), ou `Command+Y` ou `Command+Maj+Z` (macOS).

## Aide Canvas

Sur ordinateur, sélectionnez **Aide concernant les canvas** ![[lucide-help-circle.svg#icon]] sous les contrôles du canvas pour voir la liste des raccourcis pour le panoramique, le zoom, la sélection et le déplacement des cartes.

## Intégrer un canvas

Vous pouvez intégrer un canvas dans une note en utilisant la syntaxe d'intégration standard. Pour plus d'informations, consultez [[Incorporer des fichiers#Embed a canvas in a note|Intégrer un canvas dans une note]].

## Utiliser Canvas sur mobile

Lorsque vous ouvrez un canvas sur un téléphone ou une tablette, Obsidian affiche trois indications.

- **Faire glisser pour obtenir un panoramique**
- **Pincer pour agrandir**
- **Toucher et maintenir pour ajouter / déplacer / sélectionner**

### Ouvrir le menu du canvas

Touchez et maintenez une zone vide du canvas. Le menu contient les éléments suivants.

- **Ajouter une carte** ajoute une carte de texte.
- **Ajouter une note du coffre** ajoute une note de votre coffre.
- **Ajouter un média du coffre** ajoute un média de votre coffre.
- **Ajouter une page web** intègre une page web.
- **Créer un groupe** crée un groupe vide.
- **Aligner sur la grille**, **Aligner par rapport aux objets** et **Lecture-seule** sont les mêmes options que dans **Paramètres des canvas**.

### Ajouter des cartes

Vous pouvez ajouter des cartes depuis le menu du canvas. Vous pouvez également sélectionner une icône en bas du canvas.

- L'icône de fichier vierge ajoute une carte de texte.
- L'icône de document ajoute une note de votre coffre.
- L'icône d'image ajoute un média de votre coffre.

### Travailler avec une carte sélectionnée

Touchez une carte pour la sélectionner. Une barre d'outils apparaît au-dessus de la carte.

- **Supprimer** ![[lucide-trash-2.svg#icon]] supprime la carte.
- **Définir la couleur** ![[lucide-palette.svg#icon]] change la couleur de la carte.
- **Zoom sur la sélection** zoome le canvas sur la carte.
- **Modifier** ![[lucide-square-pen.svg#icon]] permet de modifier la carte.

### Déplacer une carte

1. Touchez la carte pour la sélectionner.
2. Touchez et maintenez la carte sélectionnée, puis glissez-la vers une nouvelle position.

### Redimensionner une carte

1. Touchez la carte pour la sélectionner.
2. Glissez les bords de la carte pour l'agrandir ou la réduire.

### Ouvrir le menu de la carte

Touchez et maintenez une carte. Le menu contient les éléments suivants.

- **Zoom sur la sélection** zoome le canvas sur la carte.
- **Modifier** permet de modifier la carte.
- **Convertir en fichier...** convertit une carte de texte en note.
- **Dupliquer** fait une copie de la carte.
- **Supprimer** supprime la carte.

### Modifier une carte

Pour modifier une carte de texte ou une carte de note, utilisez l'une des méthodes suivantes.

- Touchez la carte pour la sélectionner, puis touchez-la deux fois. Le clavier s'ouvre.
- Touchez la carte pour la sélectionner, puis sélectionnez **Modifier** ![[lucide-square-pen.svg#icon]] dans la barre d'outils au-dessus de la carte.

### Étiqueter une connexion

1. Touchez la ligne pour la sélectionner.
2. Dans la barre d'outils, sélectionnez **Modifier l'étiquette** ![[lucide-square-pen.svg#icon]]. Le clavier s'ouvre.
3. Entrez l'étiquette.

Pour supprimer une étiquette, touchez la ligne puis sélectionnez **Supprimer l'étiquette** dans la barre d'outils.

### Changer la direction d'une connexion

1. Touchez la ligne pour la sélectionner.
2. Dans la barre d'outils, sélectionnez **Direction de la ligne**.
3. Choisissez **Non directionnel**, **Unidirectionnel** ou **Bidirectionnel**.

### Ouvrir le menu de la ligne

Touchez et maintenez une ligne qui connecte deux cartes. Le menu contient les éléments suivants.

- **Modifier l'étiquette** ajoute ou modifie l'étiquette de la ligne.
- **Suivre la connexion** déplace le canvas vers la carte à l'extrémité opposée de la ligne.
- **Supprimer** supprime la connexion.

### Connecter des cartes

1. Touchez une carte pour la sélectionner.
2. Glissez l'un des cercles sur ses bords vers une autre carte.

Si vous glissez la ligne et la relâchez dans une zone vide, un menu s'ouvre avec **Ajouter une carte** et **Ajouter une note du coffre**. Sélectionnez l'un des deux pour ajouter une carte à l'extrémité de la ligne.

### Déconnecter des cartes

Pour supprimer une connexion, utilisez l'une des méthodes suivantes.

- Touchez la ligne, puis sélectionnez **Supprimer** ![[lucide-trash-2.svg#icon]].
- Glissez l'extrémité fléchée de la ligne vers la carte d'où elle partait. La ligne disparaît.

### Regrouper des cartes

Pour créer un groupe :

1. Touchez et maintenez une zone vide du canvas.
2. Sélectionnez **Créer un groupe**.
3. Glissez les bords du groupe pour modifier sa taille.

Pour ajouter des cartes à un groupe, glissez-les dans la zone du groupe. Lorsque vous déplacez le groupe, les cartes à l'intérieur se déplacent également.

Pour renommer un groupe, touchez deux fois son nom. Le clavier s'ouvre. Entrez le nouveau nom.

### Contrôles du canvas

Les contrôles sur le côté droit du canvas modifient la vue et vos paramètres.

- **Zoom avant** et **Zoom arrière** modifient le niveau de zoom.
- **Réinitialiser le zoom** rétablit le niveau de zoom par défaut.
- **Zoom pour tout afficher** affiche toutes les cartes du canvas.
- **Annuler** et **Rétablir** annulent ou répètent votre dernière modification.
- **Paramètres des canvas** contient les options **Aligner sur la grille**, **Aligner par rapport aux objets** et **Lecture-seule**.

## Astuces avancées

Nous avons réalisé quelques courtes vidéos pour démontrer certains cas d'utilisation avancés de Canvas.

Vous pouvez [consulter les 72 astuces ici](https://obsidian.md/canvas#protips). Veuillez noter que les vidéos d'astuces ne sont visibles que sur ordinateur.
