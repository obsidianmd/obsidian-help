---
permalink: plugins/canvas
localized: '2026-03-18'
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

- Dans le menu vertical du ruban, sélectionnez **Créer un nouveau canvas** ( ![[lucide-layout-dashboard.svg#icon]] ) pour créer un canvas dans le même dossier que le fichier actif.

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

### Ajouter des cartes depuis des dossiers

Glissez un dossier depuis l'explorateur de fichiers pour ajouter tous les fichiers de ce dossier au canvas.

### Modifier une carte

Double-cliquez sur une carte de texte ou de note pour commencer à la modifier. Cliquez en dehors de la carte pour arrêter la modification. Vous pouvez également appuyer sur `Échap` pour arrêter la modification d'une carte.

Vous pouvez également modifier une carte en faisant un clic droit dessus et en sélectionnant **Modifier**.

### Supprimer une carte

Supprimez les cartes sélectionnées en faisant un clic droit sur l'une d'entre elles, puis en sélectionnant **Supprimer**. Ou, appuyez sur `Retour arrière` (ou `Suppr` sur macOS).

Vous pouvez également sélectionner **Supprimer** ( ![[lucide-trash-2.svg#icon]] ) dans les contrôles de sélection au-dessus de votre sélection.

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

Si deux cartes connectées sont éloignées, vous pouvez naviguer vers la source ou la cible de la connexion en faisant un clic droit sur la ligne puis en sélectionnant **Aller à la cible** ou **Aller à la source**.

### Ajouter une étiquette à une connexion

Vous pouvez ajouter une étiquette à une ligne pour décrire la relation entre deux cartes.

Pour étiqueter une connexion :

1. Double-cliquez sur la ligne.
2. Entrez l'étiquette puis appuyez sur `Échap` ou cliquez n'importe où sur le canvas.

Vous pouvez également étiqueter une connexion en la sélectionnant puis en sélectionnant **Modifier l'étiquette** dans les contrôles de sélection.

Pour modifier l'étiquette d'une connexion, double-cliquez sur la ligne, ou faites un clic droit sur la ligne puis sélectionnez **Modifier l'étiquette**.

### Changer la couleur d'une carte ou d'une connexion

1. Sélectionnez les cartes ou connexions que vous souhaitez colorier.
2. Dans les contrôles de sélection, sélectionnez **Définir la couleur** ( ![[lucide-palette.svg#icon]] ).
3. Sélectionnez une couleur.

## Regrouper des cartes

### Regrouper les cartes sélectionnées

Pour créer un groupe vide :

- Faites un clic droit sur le canvas puis sélectionnez **Créer un groupe**.

Pour regrouper des cartes liées :

1. Sélectionnez les cartes.
2. Faites un clic droit sur l'une des cartes sélectionnées puis sélectionnez **Créer un groupe**.

**Renommer un groupe :** Double-cliquez sur le nom du groupe pour le modifier, puis appuyez sur `Entrée` pour enregistrer.

## Naviguer dans le canvas

Au fur et à mesure que vous ajoutez des cartes à votre canvas, vous voudrez comprendre comment naviguer dans le canvas pour en observer une partie. Apprenez à panoramiquer et zoomer pour vous déplacer dans le canvas avec aisance.

### Panoramiquer dans le canvas

Pour déplacer le canvas verticalement et horizontalement, aussi appelé _panoramique_, vous pouvez utiliser l'une des approches suivantes :

- Appuyez sur `Espace` et glissez le canvas.
- Glissez le canvas en utilisant le bouton central de la souris.
- Faites défiler la molette de la souris pour panoramiquer verticalement, et appuyez sur `Maj` en faisant défiler pour panoramiquer horizontalement.

### Zoomer dans le canvas

Pour zoomer dans le canvas, appuyez sur `Espace` ou `Ctrl` (ou `Cmd` sur macOS) et faites défiler la molette de la souris. Ou, sélectionnez **Zoom avant** ( ![[lucide-plus.svg#icon]] ) et **Zoom arrière** ( ![[lucide-minus.svg#icon]] ) dans les contrôles de zoom en haut à droite.

#### Zoom pour tout afficher

Pour zoomer le canvas afin que chaque élément soit visible, sélectionnez **Zoom pour tout afficher** ( ![[lucide-maximize.svg#icon]] ). Ou, utilisez le raccourci clavier `Maj+1`.

#### Zoom sur la sélection

Pour zoomer le canvas afin que tous les éléments sélectionnés soient visibles, faites un clic droit sur une carte sélectionnée puis sélectionnez **Zoom sur la sélection**. Ou, utilisez un raccourci clavier en appuyant sur `Maj+2`.

#### Réinitialiser le zoom

Pour rétablir le niveau de zoom par défaut, sélectionnez **Réinitialiser le zoom** dans les contrôles de zoom en haut à droite.

## Astuces avancées

Nous avons réalisé quelques courtes vidéos pour démontrer certains cas d'utilisation avancés de Canvas.

Vous pouvez [consulter les 72 astuces ici](https://obsidian.md/fr/canvas#protips). Veuillez noter que les vidéos d'astuces ne sont visibles que sur ordinateur.
