---
permalink: publish/customize
description: Découvrez comment personnaliser l'apparence et le style de votre site Obsidian Publish.
publish: true
localized: '2026-03-18'

---
Cette page explique comment vous pouvez personnaliser l'apparence et le comportement de votre site [[Introduction à Obsidian Publish|Obsidian Publish]].

## Ressources statiques

Vous pouvez personnaliser votre site en [[Publier votre contenu#Publier des notes|publiant]] les fichiers suivants sur votre site :

- `publish.css` pour ajouter du CSS personnalisé
- `publish.js` pour ajouter du JavaScript personnalisé
- `favicon-32x32.png` pour définir le favicon

**Remarques :**

- Les [variables CSS pour Publish](https://docs.obsidian.md/Reference/CSS+variables/Publish/Publish) sont disponibles sur notre site de documentation.
- Comme Obsidian ne prend pas en charge les fichiers CSS ou JavaScript, vous devez utiliser une autre application pour les créer et les modifier.
- Les fichiers `publish.css` et `publish.js` doivent être situés dans le répertoire racine (`/`) de votre coffre.
- Par défaut, `publish.css` et `publish.js` n'apparaissent pas dans l'explorateur de fichiers, mais vous pouvez tout de même les publier depuis la boîte de dialogue **Publier les modifications**.
- Pour utiliser du JavaScript personnalisé avec `publish.js`, vous devez configurer un [[Domaines personnalisés|domaine personnalisé]].

Pour les favicons, Obsidian Publish prend en charge les conventions de nommage suivantes, où `32` représente les dimensions de l'icône en pixels :

- `favicon-32.png`
- `favicon-32x32.png`
- `favicon.ico`

Nous vous recommandons de fournir une ou plusieurs des dimensions suivantes :

- `favicon-32x32.png`
- `favicon-128x128.png`
- `favicon-152x152.png`
- `favicon-167x167.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-196x196.png`

Vous avez la liberté de placer les favicons n'importe où dans le coffre, tant qu'ils sont publiés sur votre site.

## Utiliser un thème communautaire

Pour utiliser l'un des thèmes communautaires pour votre site :

1. Ouvrez votre coffre dans l'explorateur de fichiers par défaut de votre système d'exploitation.
2. Accédez au dossier de paramètres du coffre (par défaut : `.obsidian`).
3. Ouvrez le dossier `themes`.
4. Copiez le fichier CSS du thème que vous souhaitez utiliser pour votre site.
5. Collez le fichier dans le dossier racine de votre coffre.
6. Renommez le fichier CSS en `publish.css`.
7. [[Publier votre contenu#Publier des notes|Publiez]] `publish.css`.

**Remarques :**

- Si le style ne se met pas à jour dans les minutes qui suivent, essayez de vider le cache de votre navigateur.
- Vous pouvez basculer entre le mode clair et le mode sombre dans les [[Gérer les sites#Options d'affichage du site|options du site]].
- De nombreux thèmes communautaires utilisent **Style Settings** pour la personnalisation du style, mais ces paramètres ne fonctionnent pas sur Obsidian Publish.

> [!tip] Développer des thèmes
> Vous ne trouvez pas le thème qu'il vous faut ? Apprenez à [créer un thème Publish](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme) vous-même.

## Activer des fonctionnalités d'interface

Vous pouvez activer ou désactiver plusieurs fonctionnalités d'interface pour votre site, comme la vue graphique ou une table des matières.

Parcourez les fonctionnalités d'interface disponibles dans les sections **Expérience de lecture** et **Composants** des [[Gérer les sites#Options d'affichage du site|options du site]].

### Personnaliser la navigation

Dans Obsidian Publish, vous avez la possibilité de personnaliser l'ordre de navigation et l'affichage des fichiers et dossiers dans l'[[Explorateur de fichiers]] de Publish. Les éléments de navigation sont listés dans l'ordre de publication par défaut. Les notes non publiées n'apparaîtront pas dans ce panneau.

#### Accéder aux options de personnalisation de la navigation

1. Dans le [[Ruban]], sélectionnez **Publier les modifications** ![[lucide-send.svg#icon]] ou ouvrez la [[Palette de commandes]] et tapez **Publish: Publish changes...**
2. Dans la boîte de dialogue **Publier les modifications**, sélectionnez **Modifier les options du site** ![[lucide-cog.svg#icon]].
3. Sous **Paramètres des composants**, à côté de **Personnaliser la navigation**, sélectionnez le bouton **gérer**.

Une nouvelle fenêtre pop-up intitulée **Navigation** apparaîtra au-dessus de votre fenêtre **Modifier les options du site**.

#### Ajuster les éléments de navigation

Dans la section intitulée **Aperçu de la navigation**, vous pouvez ajuster l'ordre d'affichage de votre contenu publié.

1. Sélectionnez le dossier ou la note que vous souhaitez ajuster.
2. Glissez la note ou le dossier vers le haut ou le bas jusqu'à l'emplacement souhaité.
3. Dans le coin inférieur droit de la fenêtre **Navigation**, sélectionnez **Terminé**.

Publish enverra vos modifications de navigation à votre site.

#### Masquer et afficher des éléments de navigation

S'il y a des notes ou des dossiers que vous avez publiés mais que vous ne souhaitez pas rendre visibles dans votre navigation, vous pouvez choisir de masquer ces éléments.

1. Sélectionnez le dossier ou la note que vous souhaitez ajuster.
2. Faites un clic droit et sélectionnez **Masquer dans la navigation**. L'élément devrait maintenant disparaître de l'**Aperçu de la navigation**.
3. Dans le coin inférieur droit de la fenêtre **Navigation**, sélectionnez **Terminé**.

Publish enverra vos modifications de navigation à votre site.

> [!tip] Vous pouvez **Afficher les éléments masqués** en cochant la case à droite du titre **Aperçu de la navigation**.

## FAQ

**Puis-je déplacer des fichiers d'un dossier à un autre dans la navigation ?**

Non. La structure de navigation des fichiers pour les notes au sein des dossiers doit être maintenue. Vous pouvez ajuster l'ordre des notes au sein des dossiers (y compris la racine du coffre), et l'ordre des dossiers au sein d'autres dossiers.

**Puis-je modifier l'ordre de plusieurs notes et dossiers avant de sélectionner Terminé ?**

Oui.

**Comment puis-je annuler ces modifications ?**

- **Ordre d'affichage** : Sélectionnez l'icône **Restaurer les valeurs par défaut** (flèche de rotation dans le sens antihoraire) à côté de **Ordre d'affichage des éléments de navigation**. Cela restaurera vos éléments de navigation dans l'ordre alphabétique.
- **État masqué** : Sélectionnez l'icône **Restaurer les valeurs par défaut** (flèche de rotation dans le sens antihoraire) à côté de **Masquer des pages ou dossiers de la navigation**. Cela rendra à nouveau visibles vos éléments de navigation masqués.
