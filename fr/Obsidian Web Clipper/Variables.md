---
permalink: web-clipper/variables
localized: '2026-03-18'
---
Les [[Obsidian Web Clipper/Modèles|modèles de Web Clipper]] peuvent utiliser des variables pour pré-remplir automatiquement des données de la page dans un modèle. Les variables peuvent être utilisées dans le **nom de la note**, l'**emplacement de la note**, les **propriétés** et le **contenu de la note**. Les variables peuvent également être modifiées à l'aide de [[Filtres|filtres]].

Utilisez l'icône `...` dans l'extension [[Introduction à Obsidian Web Clipper|Web Clipper]] pour accéder aux variables de la page courante à utiliser dans les modèles. Il existe cinq types de variables que vous pouvez utiliser :

- [[Variables#Variables prédéfinies|Variables prédéfinies]]
- [[Variables#Variables d'invite|Variables d'invite]]
- [[Variables#Variables meta|Variables meta]]
- [[Variables#Variables de sélecteur|Variables de sélecteur]]
- [[Variables#Variables Schema.org|Variables Schema.org]]

## Variables prédéfinies

Les variables prédéfinies sont automatiquement générées à partir du contenu de la page. Elles fonctionnent généralement pour la plupart des sites web.

La variable de contenu principale est `{{content}}`, qui contient le contenu de l'article, ou les [[Surligneur|surlignages]], ou la sélection s'il y a du texte sélectionné sur la page. Notez que `{{content}}` tente d'extraire le contenu principal de la page, ce qui peut ne pas toujours correspondre à ce que vous souhaitez. Dans ce cas, vous pouvez utiliser d'autres variables prédéfinies ou des variables de sélecteur pour extraire le contenu dont vous avez besoin.

| Variable            | Description                                                                            |
| ------------------- | -------------------------------------------------------------------------------------- |
| `{{author}}`        | Auteur de la page                                                                      |
| `{{content}}`       | Contenu de l'article, [[Surligneur\|surlignages]] ou sélection, au format Markdown |
| `{{contentHtml}}`   | Contenu de l'article, [[Surligneur\|surlignages]] ou sélection, au format HTML |
| `{{date}}`          | Date actuelle, peut être formatée à l'aide du filtre `date`                            |
| `{{description}}`   | Description ou extrait                                                                 |
| `{{domain}}`        | Domaine                                                                                |
| `{{favicon}}`       | URL du favicon                                                                         |
| `{{fullHtml}}`      | HTML non traité du contenu complet de la page                                          |
| `{{highlights}}`    | [[Surligneur\|Surlignages]] avec texte et horodatages                    |
| `{{image}}`         | URL de l'image de partage social                                                       |
| `{{published}}`     | Date de publication, peut être formatée à l'aide du filtre `date`                      |
| `{{selection}}`     | Sélection au format Markdown                                                           |
| `{{selectionHtml}}` | Sélection au format HTML                                                               |
| `{{site}}`          | Nom du site ou éditeur                                                                 |
| `{{title}}`         | Titre de la page                                                                       |
| `{{time}}`          | Date et heure actuelles                                                                |
| `{{url}}`           | URL actuelle                                                                           |
| `{{words}}`         | Nombre de mots                                                                         |

## Variables d'invite

Les variables d'invite exploitent les modèles de langage pour extraire et modifier des données en langage naturel. Les variables d'invite nécessitent que l'[[Interpréteur|Interpréteur]] soit activé et configuré.

Les variables d'invite utilisent la syntaxe `{{"un résumé de la page"}}`. Les guillemets doubles autour de l'invite sont importants et distinguent les invites des variables prédéfinies. Les réponses des invites peuvent être post-traitées avec des [[Filtres|filtres]], par ex. `{{"un résumé de la page"|blockquote}}`.

### Quand utiliser les variables d'invite

Les variables d'invite ont l'avantage d'être extrêmement flexibles et faciles à écrire, cependant elles comportent plusieurs compromis : elles sont plus lentes à exécuter et peuvent avoir des implications en termes de coût et de confidentialité selon le [[Interpréteur#Modèles|fournisseur]] que vous choisissez.

Contrairement aux autres types de variables, les variables d'invite doivent être traitées par un modèle de langage externe, elles ne sont donc remplacées qu'une fois que l'[[Interpréteur|Interpréteur]] a été exécuté.

Il est préférable de *ne pas* utiliser les variables d'invite si les données que vous souhaitez extraire sont dans un format cohérent qui pourrait être extrait avec d'autres types de variables.

En revanche, les variables d'invite peuvent être utiles si les données que vous souhaitez extraire sont dans un format *incohérent* d'un site web à l'autre. Par exemple, vous pouvez créer un [[Obsidian Web Clipper/Modèles|modèle]] pour enregistrer des livres qui soit indépendant du site de livres. Les variables d'invite comme `{{"auteur du livre"}}` fonctionneront sur n'importe quel site de livres, alors que les variables de sélecteur ne fonctionnent généralement que pour un seul site.

### Exemples

Les invites peuvent utiliser presque n'importe quelle requête en langage naturel. Selon le modèle que vous utilisez, les invites peuvent interroger ou traduire des données dans différentes langues.

- `{{"un résumé en trois points, traduit en français"}}` pour extraire des points clés sur la page et les traduire en français.
- `{{"un resumé de la page en trois points"}}` pour extraire trois points clés à l'aide d'une invite en français.

Les invites peuvent transformer le contenu de la page en JSON qui peut être manipulé avec des [[Filtres|filtres]]. Par exemple :

```
{{"return a JSON object for each tweet, that includes the author, tweet_text, date in YYYY-MM-DD format, and images array (if there are any)"|map:tweet => ({text: tweet.tweet_text, author: tweet.author, date: tweet.date})|template:"${text}\n— [[@${author}]], [[${date}]]\n"}}
```


## Variables meta

Les variables meta vous permettent d'extraire des données à partir des [éléments meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) de la page, y compris les données [Open Graph](https://ogp.me/) utilisées pour remplir les aperçus de partage social.

- `{{meta:name}}` retourne le contenu de la balise meta name avec le nom donné, par ex. `{{meta:name:description}}` pour la balise meta `description`.
- `{{meta:property}}` retourne le contenu de la balise meta property avec la propriété donnée, par ex. `{{meta:property:og:title}}` pour la balise meta `og:title`.

## Variables de sélecteur

Les variables de sélecteur vous permettent d'extraire le contenu textuel d'éléments de la page à l'aide de [sélecteurs CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators).

La syntaxe est `{{selector:sélecteurCss?attribut}}`, où `?attribut` est optionnel. Si aucun attribut n'est spécifié, le contenu textuel de l'élément est retourné. Vous pouvez également utiliser `{{selectorHtml:sélecteurCss}}` pour obtenir le contenu HTML de l'élément. Les variables de sélecteur fonctionnent généralement mieux sur un site web spécifique ou un ensemble de sites web ayant une structure HTML cohérente.

- `{{selector:h1}}` retourne le contenu textuel de tous les éléments `h1` de la page.
- `{{selector:.author}}` retourne le contenu textuel de tous les éléments `.author` de la page.
- `{{selector:img.hero?src}}` retourne l'attribut `src` de l'image avec la classe `hero`.
- `{{selector:a.main-link?href}}` retourne l'attribut `href` de la balise ancre avec la classe `main-link`.
- `{{selectorHtml:body|markdown}}` retourne l'intégralité du HTML de l'élément `body`, converti en Markdown à l'aide du [[Filtres#Traitement HTML|filtre]] `markdown`.
- Les sélecteurs CSS imbriqués et les combinateurs sont pris en charge si vous avez besoin de plus de spécificité.
- Si plusieurs éléments correspondent au sélecteur, un tableau est retourné, que vous pouvez traiter avec les [[Filtres#Tableaux et objets|filtres de tableaux et d'objets]] comme `join` ou `map`.

Les variables de sélecteur peuvent également être utilisées directement dans la [[Modèles#Logique de modèle|logique de modèle]] :

- Dans les boucles : `{% for comment in selector:.comment %}...{% endfor %}`
- Dans les conditions : `{% if selector:.premium-badge %}...{% endif %}`
- Dans l'assignation de variables : `{% set items = selector:.list-item %}`

## Variables Schema.org

Les variables schema vous permettent d'extraire des données à partir du [schema.org](https://schema.org/) JSON-LD de la page. Les données schema.org peuvent également être utilisées pour [[Obsidian Web Clipper/Modèles#Correspondance Schema.org|déclencher automatiquement un modèle]].

- `{{schema:@Type:clé}}` retourne la valeur de la clé du schema.
- `{{schema:@Type:parent.enfant}}` retourne la valeur d'une propriété imbriquée.
- `{{schema:@Type:cléTableau}}` retourne le premier élément d'un tableau.
- `{{schema:@Type:cléTableau[index].propriété}}` retourne l'élément à l'index spécifié dans un tableau.
- `{{schema:@Type:cléTableau[*].propriété}}` retourne une propriété spécifique de tous les éléments d'un tableau.

Vous pouvez également utiliser une notation abrégée sans spécifier le type de schema :

- `{{schema:author}}` correspondra à la première propriété `author` trouvée dans n'importe quel type de schema.
- `{{schema:name}}` correspondra à la première propriété `name` trouvée dans n'importe quel type de schema.

Cette notation abrégée est particulièrement utile lorsque vous ne connaissez pas ou ne vous souciez pas du type de schema spécifique, mais que vous connaissez le nom de la propriété que vous recherchez.

Les propriétés imbriquées et l'accès aux tableaux fonctionnent également, avec ou sans le `@Type` du schema spécifié :

- `{{schema:author.name}}` trouvera la première propriété `author` puis accédera à sa sous-propriété `name`.
- `{{schema:author[0].name}}` accédera au `name` du premier auteur dans un tableau d'auteurs.
- `{{schema:author[*].name}}` retournera un tableau de tous les noms d'auteurs.
