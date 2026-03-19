---
permalink: snippets
description: >-
  Apprenez à modifier certains aspects de l'apparence de l'application Obsidian
  sans créer un thème complet.
publish: true
mobile: true
aliases:
  - Plugins/Custom CSS
localized: '2026-03-18'
---
Apprenez à modifier certains aspects de l'apparence de l'application Obsidian sans avoir besoin de [construire un thème](https://docs.obsidian.md/Themes/App+themes/Build+a+theme).

> [!tip] Si vous cherchez des conseils pour gérer le CSS pour [[Introduction à Obsidian Publish|Obsidian Publish]], consultez [[Personnaliser votre site]].

CSS est un langage qui contrôle l'apparence du HTML. En ajoutant des extraits CSS, vous pouvez modifier des parties de l'interface utilisateur d'Obsidian, comme la taille et la couleur des entêtes. Obsidian dispose de [variables CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) qui vous aident à personnaliser facilement l'interface.

Obsidian recherche les extraits CSS dans le [[Dossier de configuration|dossier de configuration]] du coffre.

## Ajouter un extrait

Pour ajouter un extrait CSS sur **ordinateur** ![[lucide-monitor-check.svg#icon]], suivez ces étapes :

1. Ouvrez les **[[Paramètres]]** ( ![[lucide-settings.svg#icon]] ).
2. Sous **Apparence → Extraits CSS**, sélectionnez **Ouvrir le dossier des extraits** ( ![[lucide-folder-open.svg#icon]] ).
3. Dans le dossier des extraits, créez un fichier CSS contenant votre extrait.
4. Dans Obsidian, sous **Apparence → Extraits CSS**, sélectionnez **Recharger les extraits** ( ![[lucide-refresh-cw.svg#icon]] ) pour voir l'extrait dans la liste.
5. Activez l'extrait en cliquant sur le bouton bascule.

Pour ajouter un extrait CSS sur **mobile/tablette** ![[obsidian-icon-smartphone.svg#icon]], vous pouvez suivre ces étapes :

1. Ouvrez un gestionnaire de fichiers et trouvez votre coffre. Vous pouvez vérifier l'emplacement du coffre dans _Gérer les coffres…_ en appuyant sur votre coffre et en regardant le chemin.
2. Ouvrez le [[Dossier de configuration]] et créez un dossier appelé `snippets` s'il n'existe pas.
3. Ajoutez votre extrait CSS dans ce dossier.
4. Ouvrez les **[[Paramètres]]** d'Obsidian ( ![[lucide-settings.svg#icon]] ).
5. Sélectionnez **Apparence** à gauche.
6. Faites défiler jusqu'à la section **Extraits CSS**.
7. Appuyez sur **Recharger les extraits** (![[lucide-refresh-cw.svg#icon]]) pour rafraîchir la liste.
8. Appuyez sur le bouton bascule pour activer l'extrait.

Alternativement, vous pouvez :
- [[Synchroniser vos notes entre appareils|Synchroniser]] toute modification avec votre service de synchronisation.
- Utiliser un module complémentaire pour créer un extrait depuis Obsidian.

Une fois activé, Obsidian détectera automatiquement les modifications apportées aux extraits CSS et les appliquera lorsque vous enregistrez le fichier.

> [!tip] Vous n'avez pas besoin de redémarrer Obsidian pour que les modifications prennent effet. Cependant, vous devrez peut-être utiliser la commande de la [[Palette de commandes]] pour recharger Obsidian sans enregistrer afin de voir les changements dans le thème ou la note en cours.

## Écrire du CSS pour Obsidian

Obsidian offre plusieurs méthodes qui rendent l'écriture de CSS plus facile et plus puissante.

Il dispose d'un ensemble de [variables CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) pour modifier facilement des parties d'Obsidian et d'un [[Propriétés#Types de propriétés|type de propriété]] intégré pour changer l'apparence d'une ou plusieurs notes.

> [!example] Variables
> Créez un fichier appelé `headers.css` avec le contenu suivant pour changer les couleurs des six [[Syntaxe de mise en forme de base#Entêtes|niveaux d'entêtes]] en arc-en-ciel :
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] Classes CSS
> Assignez le nom d'une classe CSS personnalisée (ou une liste de classes CSS) à une [[Propriétés|propriété]] prédéfinie `cssclasses` pour donner à une ou plusieurs notes une apparence différente des autres.
> 
> **CSS** :
> ```css
> .red-border img {
>    border-color: #ff0000;
> }
> ```
> 
> **YAML/Propriétés** :
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> Dans chaque note contenant la valeur `red-border` dans la propriété `cssclasses`, les images sont affichées avec une bordure rouge.

Pour vous assurer que le fichier CSS est valide et correctement formaté, nous vous conseillons de le valider avec un outil comme le [Service de validation CSS](https://jigsaw.w3.org/css-validator/), car un CSS invalide ne fonctionnera pas.

## En savoir plus

- Si vous débutez en CSS, consultez [Apprendre à styliser le HTML en utilisant CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) par Mozilla.
- Pour plus d'informations sur la personnalisation d'Obsidian, consultez :
  - [À propos du style](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Construire un thème](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Construire un thème Publish](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Flux de travail de l'inspecteur CSS d'Obsidian](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
