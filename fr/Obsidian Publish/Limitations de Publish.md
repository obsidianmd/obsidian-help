---
permalink: publish/limitations
localized: '2026-03-18'

---
> [!tip] Les membres de notre formidable communauté ont trouvé des solutions de contournement pour certaines de ces limitations. Pour plus d'informations, veuillez consulter notre fil [Publish Resources](https://forum.obsidian.md/t/obsidian-publish-resources/74582) sur les forums d'Obsidian.

## Modules complémentaires

Obsidian Publish offre un support minimal pour les [[Modules complémentaires]].

Les modules qui produisent du Markdown brut, comme le module Waypoint, sont compatibles avec Publish car ils ne nécessitent pas l'application pour afficher leurs données.

En revanche, un module qui nécessite un bloc de code spécifique pour s'afficher, comme Dataview ou Fantasy Statblocks, ne fonctionnera pas par défaut dans Publish.

## Graphe

Publish offre une personnalisation basique des couleurs pour sa vue graphique à l'aide de CSS. Vous pouvez modifier les couleurs des nœuds dans votre fichier `publish.css` en utilisant les [variables CSS de la vue graphique](https://docs.obsidian.md/Reference/CSS+variables/Modules/Graph).

Notez que le graphe publié ne prend pas en charge les options complètes de tri et d'affichage disponibles dans la [[Vue graphique]] de l'application.

## Fichiers média

Obsidian Publish n'est pas optimisé pour la diffusion en streaming de vidéos ou de fichiers audio volumineux. Nous incluons quelques bonnes pratiques pour gérer vos [[Fichiers média|fichiers média]] dans ces documents.

Pour améliorer l'expérience de vos visiteurs, nous vous recommandons d'utiliser plutôt un service d'hébergement vidéo, tel que YouTube ou Vimeo.

Vous pouvez téléverser des fichiers d'une taille **allant jusqu'à 50 Mo** sur votre site Publish. ^publish-media-limit

## PDF

Sur les appareils mobiles, les tablettes et les ordinateurs avec de petits écrans, vous pouvez rencontrer des problèmes où un PDF intégré ne se charge pas ou seule la première page est affichée. Cela est dû aux limitations du moteur de rendu PDF sur les appareils mobiles.

Pour du contenu destiné aux utilisateurs mobiles, nous suggérons de fournir des liens vers des PDF hébergés en externe ou d'inclure des liens internes permettant aux utilisateurs de télécharger le PDF directement sur leur appareil.

## Recherche

Publish offre un support basique pour la recherche en texte brut dans le contenu publié. La priorité des résultats de recherche est donnée aux :

- Noms de fichiers
- Alias
- Noms d'entêtes

Après avoir recherché des correspondances dans les éléments ci-dessus, la recherche inclura ensuite le texte brut des notes publiées.

Pour améliorer la recherche sur votre site publié, il est recommandé d'utiliser des noms de fichiers descriptifs, d'incorporer plusieurs alias et de choisir des noms d'entêtes qui reflètent fidèlement le contenu.

De plus, Publish ne prend actuellement pas en charge la fonctionnalité [[Rechercher#Intégrer les résultats de recherche dans une note|d'intégration des résultats de recherche]] de l'application.
