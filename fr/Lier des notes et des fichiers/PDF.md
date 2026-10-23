---
permalink: pdf
publish: true
mobile: true
description: 'Apprenez à afficher, rechercher et créer des liens vers des PDF dans Obsidian, et à exporter une note au format PDF.'
---
Obsidian ouvre les fichiers PDF dans une visionneuse intégrée. Vous pouvez également intégrer un PDF dans une note, créer un lien vers un passage, et exporter n'importe quelle note en PDF. Pour les types de fichiers pris en charge par Obsidian, consultez [[Formats de fichiers acceptés]].

> [!info]+ Certaines fonctionnalités sont réservées au bureau
> L'application mobile Obsidian ne permet pas de rechercher dans un PDF, de copier une citation ou un lien vers une sélection, ni d'exporter une note en PDF.

## Ouvrir un PDF

Dans l'[[Explorateur de fichiers]], sélectionnez un PDF pour l'ouvrir dans un onglet.

> [!info]+ Les annotations ne sont pas prises en charge
> Obsidian ne permet pas d'ajouter des annotations ou du surlignage à un PDF. Pour annoter un PDF, utilisez une autre application puis ouvrez le fichier mis à jour dans votre coffre.

La visionneuse dispose d'une barre d'outils avec les contrôles suivants. L'application mobile Obsidian possède la même barre d'outils.

- **Afficher le ruban latéral** affiche ou masque le ruban latéral, et **Option du ruban latéral** modifie le contenu affiché dans le ruban latéral.
- **Zoom arrière** et **Zoom avant** modifient la taille de la page.
- **Options d'affichage** modifie la disposition des pages.
- La zone de page affiche la page actuelle. Saisissez un numéro de page pour accéder à cette page.

Pour travailler avec le fichier PDF lui-même, comme le renommer ou le déplacer, sélectionnez **Plus d'options** ![[lucide-more-horizontal.svg#icon]]. Un PDF possède moins d'éléments dans ce menu qu'une note. Voir [[Menu Plus d'options]].

## Naviguer dans un PDF

Sélectionnez **Option du ruban latéral**, puis choisissez ce qui doit être affiché.

- **Vignettes** affiche un petit aperçu de chaque page.
- **Table des matières** affiche le plan du PDF, s'il en possède un.
- **Afficher la page dans la table des matières** met en évidence la page actuelle dans la table des matières.

Pour créer un lien vers une page, faites un clic droit sur sa vignette et sélectionnez **Copier le lien vers la page N**, où N est le numéro de page. Collez le lien dans une note.

Pour créer un lien vers une section, faites un clic droit sur une entrée de la table des matières et sélectionnez **Copier le lien vers « Titre »**, où Titre est le nom de l'entrée. Sur mobile, appuyez longuement sur l'entrée.

## Modifier l'apparence d'un PDF

Sélectionnez **Options d'affichage** pour modifier la disposition.

- **Ajuster la largeur** et **Ajuster la hauteur** adaptent la taille de la page à la visionneuse.
- **Page unique** affiche une page à la fois.
- **Deux pages (impaires)** affiche les pages côte à côte, en commençant par une page impaire à gauche. Par exemple, les pages 1 et 2 s'affichent ensemble, puis les pages 3 et 4.
- **Deux pages (paires)** affiche les pages côte à côte, en commençant par une page paire à gauche. Par exemple, la page 1 s'affiche seule, puis les pages 2 et 3 s'affichent ensemble.
- **Adapter au thème** assombrit les couleurs du PDF lorsque votre thème Obsidian est sombre.

## Rechercher dans un PDF

La recherche dans un PDF est disponible uniquement sur bureau. L'application mobile Obsidian ne dispose pas de la recherche dans la visionneuse PDF.

1. Appuyez sur `Ctrl+F` (Windows et Linux) ou `Command+F` (macOS).
2. Dans **Saisir pour lancer la recherche...**, entrez le texte que vous souhaitez chercher.
3. Sélectionnez la flèche vers le haut ou vers le bas pour naviguer entre les résultats.

Pour modifier le fonctionnement de la recherche, utilisez ces options.

- **Respecter la casse** fait correspondre exactement les majuscules et les minuscules. C'est le bouton **Aa** dans le champ de recherche.
- **Tout surligner** met en évidence chaque résultat. Sélectionnez le bouton de paramètres à côté des flèches pour trouver cette option.
- **Correspondance des diacritiques** traite les lettres accentuées comme des lettres différentes. Cette option se trouve dans le même menu de paramètres.
- **Mot entier** ne trouve que les mots complets. Cette option se trouve dans le même menu de paramètres.

Sélectionnez le bouton de fermeture pour quitter la recherche.

## Copier du texte depuis un PDF

Sur bureau, sélectionnez du texte dans le PDF, puis faites un clic droit.

- **Copier** copie le texte.
- **Copier comme citation** copie le texte sous forme de citation, suivi d'un lien vers le passage.
- **Copier le lien vers la sélection** copie un lien vers ce passage, afin de pouvoir le coller dans une note.

Une citation ressemble à ceci lorsque vous la collez dans une note.

```md
> Obsidian is awesome

[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Un lien vers une sélection contient le même lien seul.

```md
[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Sur mobile, sélectionner du texte dans un PDF affiche le menu texte standard de votre appareil. **Copier comme citation** et **Copier le lien vers la sélection** ne sont pas disponibles.

## Intégrer un PDF

Pour afficher un PDF à l'intérieur d'une note, consultez comment [[Incorporer des fichiers#Intégrer un PDF dans une note|intégrer un PDF dans une note]]. Un PDF intégré possède la même barre d'outils que la visionneuse. Sélectionnez **Modifier ce bloc** pour modifier le lien d'intégration.

## Exporter une note en PDF

Vous pouvez exporter n'importe quelle note en PDF sur bureau. L'exportation en PDF n'est pas disponible dans l'application mobile Obsidian.

1. Ouvrez la note que vous souhaitez exporter.
2. Ouvrez la [[Palette de commandes]] et sélectionnez **Exporter en PDF**. Vous pouvez également sélectionner **Plus d'options** ![[lucide-more-horizontal.svg#icon]] dans la note, puis sélectionner **Exporter en PDF**.
3. Choisissez vos paramètres.
    - **Inclure le nom du fichier comme entête** ajoute le nom du fichier en haut du PDF.
    - **Format de la page** définit le format du papier. Vous pouvez choisir A3, A4, A5, Legal, Letter ou Tabloid.
    - **Paysage** oriente les pages horizontalement.
    - **Marge** définit la marge de la page sur **Par défaut**, **Minimale** ou **Aucun**.
    - **Mise à l'échelle** redimensionne le contenu de chaque page. À 100, le contenu conserve sa taille réelle. Des valeurs inférieures réduisent le texte et les images, permettant d'en afficher davantage sur chaque page.
4. Sélectionnez **Exporter au format PDF**.
5. Choisissez l'emplacement de sauvegarde du fichier.

> [!tip]- Exporter une note avec un thème sombre
> Les exports utilisent toujours un style clair, même si votre thème est sombre. Pour modifier l'apparence d'un export, vous pouvez utiliser un [[Extraits CSS|extrait CSS]]. Le forum Obsidian propose des exemples d'extraits pour l'impression et l'exportation.[^1]

[^1]: Voir [How can I make export pdf look the same as my theme?](https://forum.obsidian.md/t/how-can-i-make-export-pdf-look-the-same-as-my-theme/75849) et [PDF and print style reset with code syntax highlighting](https://forum.obsidian.md/t/pdf-and-print-style-reset-with-code-syntax-highlighting/31761).
