---
permalink: plugins/search
description: Recherche est un module principal qui vous aide à trouver des données dans votre coffre Obsidian en utilisant des termes de recherche et des opérateurs pour affiner les résultats.
publish: true
mobile: true
aliases:
  - Modules/Search
  - Plugins/Search
localized: 2026-03-18
---
Rechercher est un [[Modules principaux|module principal]] qui vous aide à trouver des données dans votre coffre Obsidian en utilisant des termes de recherche et des opérateurs pour affiner les résultats.

Par défaut, vous pouvez trouver Rechercher dans la barre latérale gauche ![[lucide-search.svg#icon]]. Vous pouvez également ouvrir Rechercher en appuyant sur `Ctrl+Shift+F` (Windows/Linux) ou `Command+Shift+F` (macOS).

- **Rechercher le texte sélectionné** : Si vous sélectionnez du texte dans l'éditeur et ouvrez Rechercher avec le raccourci clavier, Rechercher vous affiche les résultats pour le texte sélectionné.
- **Rechercher des termes récents** : Ouvrez Rechercher avec un terme de recherche vide pour lister les termes de recherche récents. Cliquez sur l'un d'entre eux pour réutiliser le terme de recherche.

> [!info] Fichiers exclus
> Les fichiers correspondant à vos motifs de [[Paramètres#Fichiers exclus|Fichiers exclus]] n'apparaîtront pas dans les résultats de recherche.

## Termes de recherche

Un terme de recherche est le mot ou la phrase que vous saisissez dans le champ de recherche. Apprendre à écrire des termes de recherche efficacement peut vous aider à trouver rapidement ce que vous cherchez, même dans de grands coffres. Obsidian recherche uniquement dans le contenu des notes et des canvas.

> [!tip]- Rechercher des chemins et noms de fichiers
> Par défaut, vous ne pouvez rechercher que les chemins et noms de fichiers des notes et des canvas. Pour rechercher un chemin ou un nom de fichier de n'importe quel fichier dans le coffre, utilisez l'opérateur `path` ou `file`.

Chaque mot du terme de recherche est mis en correspondance indépendamment dans chaque fichier. Pour rechercher une expression exacte, entourez-la de guillemets, par exemple `"star wars"`. Pour rechercher du texte entre guillemets au sein d'une expression exacte, vous pouvez _échapper_ les guillemets en ajoutant une barre oblique inverse (`\`) devant le guillemet, par exemple `"they said \"hello\" to each other"`.

Vous pouvez contrôler si les fichiers retournés contiennent _tous_ les mots de votre terme de recherche, ou _n'importe lequel_ des mots :

- `meeting work` retourne les fichiers qui contiennent à la fois `meeting` et `work`.
- `meeting OR work` retourne les fichiers qui contiennent soit `meeting` soit `work`.

Vous pouvez même combiner les deux dans le même terme de recherche.

- `meeting work OR meetup personal` retourne les fichiers pour les réunions de travail et les rencontres personnelles.

Vous pouvez utiliser des parenthèses pour contrôler la priorité de chaque expression.

- `meeting (work OR meetup) personal` retourne les fichiers qui contiennent `meeting`, `personal`, et soit `work` soit `meetup`.

Pour exclure, ou nier, un mot des résultats de recherche, ajoutez un tiret (`-`) devant celui-ci :

- `meeting -work` retourne les fichiers qui contiennent `meeting` mais pas `work`.

Vous pouvez exclure plusieurs expressions :

- `meeting -work -meetup` retourne les fichiers qui contiennent `meeting` mais ni `work` ni `meetup`.

Vous pouvez exclure une combinaison d'expressions en utilisant des parenthèses :

- `meeting -(work meetup)` retourne les fichiers qui contiennent `meeting` mais pas _à la fois_ `work` et `meetup`.

Pour filtrer les résultats en utilisant les opérateurs inférieur à (`<`) et supérieur à (`>`), entourez-les de crochets (`[]`) ou de guillemets (`""`) :

- `meeting [duration:<5]` retourne les fichiers où meeting est présent et duration est inférieur à 5.
- `meeting [duration:>5]` retourne les fichiers où meeting est présent et duration est supérieur à 5.

> [!tip]- Expliquer le terme de recherche
> Si vous devez résoudre un problème avec un terme de recherche complexe, vous pouvez cliquer sur **Expliquer le terme de recherche** dans Rechercher pour obtenir une explication de votre terme de recherche.

## Opérateurs de recherche

Les opérateurs de recherche permettent des termes de recherche plus précis pour filtrer vos résultats encore davantage.

Certains opérateurs vous permettent même d'ajouter un terme de recherche imbriqué entre parenthèses, par exemple : `task:(call OR email)`.

| Opérateur de recherche | Description                                                                                                                                                                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `file:`         | Chercher du texte dans le nom de fichier. Correspond à n'importe quel fichier dans le coffre.<p/>Exemple : `file:.jpg` ou `file:202209`.                                                                                                                                                                    |
| `path:`         | Chercher du texte dans le chemin du fichier. Correspond à n'importe quel fichier dans le coffre.<p/>Exemple : `path:"Daily notes/2022-07"`.                                                                                                                                                                   |
| `content:`      | Chercher du texte dans le contenu du fichier.<p/>Exemple : `content:"happy cat"`.                                                                                                                                                                                                                      |
| `match-case:`   | Correspondance sensible à la casse.<p/>Exemple : `match-case:HappyCat`.                                                                                                                                                                                                                           |
| `ignore-case:`  | Correspondance insensible à la casse.<p/>Exemple : `ignore-case:ikea`.                                                                                                                                                                                                                            |
| `tag:`          | Chercher un mot-clé dans le fichier.<p/>Exemple : `tag:#work`.<p/>Gardez à l'esprit que rechercher `tag:#work` ne retournera pas de résultats pour `#myjob/work`.<br /><br />**Note** : Puisque `tag:` ignore les correspondances dans les blocs de code et dans le contenu non-Markdown, c'est souvent plus rapide et plus précis qu'une recherche en texte intégral normale pour `#work`. |
| `line:`         | Chercher les fichiers qui contiennent au moins une ligne correspondant à `x`.<p/>Exemple : `line:(mix flour)`.<p/><br>**Note** : Utiliser `-line` inverse la recherche, ce qui signifie qu'il trouvera les fichiers où aucune ligne ne correspond à `x`.                                                                                                                   |
| `block:`        | Chercher les correspondances dans le même bloc.<p/>Exemple : `block:(dog cat)`.<p/>**Note** : Puisque `block:` nécessite que Rechercher analyse le contenu Markdown de chaque fichier, cela peut rallonger le temps de votre recherche.                                                                                               |
| `section:`      | Chercher les correspondances dans la même section (texte entre deux entêtes).<p/>Exemple : `section:(dog cat)`.                                                                                                                                                                                                                     |
| `task:`         | Chercher les correspondances dans une [[Syntaxe de mise en forme de base#Listes de tâches\|tâche]] bloc par bloc.<p/>Exemple : `task:call`.                                                                                                                                                                                                 |
| `task-todo:`    | Chercher les correspondances dans une [[Syntaxe de mise en forme de base#Listes de tâches\|tâche]] *non complétée* bloc par bloc.<p/>Exemple : `task-todo:call`.                                                                                                                                                                             |
| `task-done:`    | Chercher les correspondances dans une [[Syntaxe de mise en forme de base#Listes de tâches\|tâche]] *complétée* bloc par bloc.<p/>Exemple : `task-done:call`.                                                                                                                                                                                |

## Rechercher dans les propriétés

Vous pouvez utiliser les données stockées dans les [[Propriétés]] dans vos termes de recherche.

Utilisez des crochets autour d'un nom de propriété `[propriété]` pour retourner les fichiers ayant cette propriété :

- `[aliases]` retourne les fichiers qui contiennent la propriété `aliases`

Utilisez des crochets et un deux-points `[propriété:valeur]` pour retourner les fichiers ayant cette propriété et cette valeur :

- `[aliases:Name]` retourne les fichiers où la valeur de la propriété `aliases` est `Name`

Utilisez `null` comme valeur pour trouver les propriétés qui n'ont pas de valeur :

- `[aliases:null]` retourne les fichiers où la propriété `aliases` existe mais n'a pas de valeur

> [!info]+ Valeurs vides
> L'opérateur `null` fonctionne quand une propriété est vide (par ex., `aliases: `), mais pas quand la propriété contient des guillemets vides (`""`) ou des crochets vides (`[]`).

La propriété et la valeur acceptent toutes deux des sous-requêtes, comme les parenthèses pour le regroupement, l'opérateur `OR`, les guillemets doubles pour la correspondance exacte, et les expressions régulières.

- `[status:Draft OR Published]` retourne les fichiers où la valeur de la propriété `status` est `Draft` ou `Published`

## Modifier la sensibilité à la casse

Par défaut, les termes de recherche ne sont pas sensibles à la casse. Si vous souhaitez rechercher la casse exacte de votre terme de recherche, sélectionnez **Respecter la casse** ![[obsidian-icon-upper-lowercase.svg#icon]] dans la barre de recherche.

Ce paramètre peut être basculé. Si l'icône **Respecter la casse** est mise en surbrillance, cela signifie que vous effectuez actuellement une recherche sensible à la casse.

## Modifier l'ordre de tri des résultats

1. Saisissez un [[#Termes de recherche|terme de recherche]].
2. Sous le champ de recherche, sélectionnez le menu déroulant à droite.
3. Sélectionnez l'ordre de tri souhaité. Par défaut : « Nom de fichier (A à Z) ».

Les options suivantes sont disponibles :

- Nom de fichier (A à Z)
- Nom de fichier (Z à A)
- Date de modification (récent à ancien)
- Date de modification (ancien à récent)
- Date de création (récent à ancien)
- Date de création (ancien à récent)

## Copier les résultats de recherche

1. Saisissez un [[#Termes de recherche|terme de recherche]].
2. Sous le champ de recherche, sélectionnez l'icône des trois points à côté du nombre de résultats.
3. Sélectionnez **Copier les résultats de recherche**.

## Utiliser des expressions régulières

Une expression régulière est un ensemble de caractères qui décrivent un motif textuel. Pour utiliser des expressions régulières dans votre terme de recherche, entourez l'expression de barres obliques (`/`).

- `/\d{4}-\d{2}-\d{2}/` correspond à une date ISO 8601, comme 2022-01-01.

Vous pouvez même combiner des expressions régulières avec des opérateurs de recherche :

- `path:/\d{4}-\d{2}-\d{2}/` retourne les fichiers avec une date dans le chemin du fichier.

Pour plus d'informations sur l'écriture d'expressions régulières, consultez le [guide pratique Regex](https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/) de FreeCodeCamp ou les [Expressions régulières](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) de Mozilla.

> [!info]+ Expressions régulières de type JavaScript
> Les expressions régulières existent en différentes variantes qui peuvent être différentes les unes des autres. Obsidian utilise les expressions régulières de type JavaScript.

## Configurer les paramètres de recherche

Pour configurer Rechercher, sélectionnez **Paramètres de recherche** ![[lucide-sliders-horizontal.svg#icon]] sur le côté droit de la barre de recherche pour voir les options.

| Paramètre                 | Description                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| **Expliquer le terme de recherche** | Décompose les termes de recherche et les explique en texte brut.                 |
| **Réduire les résultats**    | Active ou désactive l'affichage du contexte de recherche.                                 |
| **Afficher plus de contexte**   | Développe le résultat de recherche pour afficher plus de texte autour de la correspondance.               |

## Intégrer les résultats de recherche dans une note

Pour intégrer les résultats de recherche dans une note, ajoutez un bloc de code `query` :

````
```query
embed OR search
```
````

[[Introduction à Obsidian Publish|Obsidian Publish]] ne prend pas en charge les [[Limitations de Publish#Recherche|résultats de recherche]] intégrés. Pour voir un exemple rendu en direct, utilisez le bloc de code ci-dessus dans votre coffre.

![[search-query-rendered.png]]
