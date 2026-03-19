---
permalink: web-clipper/filters
localized: '2026-03-18'

---
Les filtres vous permettent de modifier les [[variables]] dans les [[Obsidian Web Clipper/Modèles|modèles de Web Clipper]]. Les filtres sont appliqués aux variables en utilisant la syntaxe `{{variable|filtre}}`.

- Les filtres fonctionnent pour tout type de [[Variables|variable]] incluant les variables `prompt`, `meta`, `selector` et `schema`.
- Les filtres peuvent être enchaînés, par ex. `{{variable|filtre1|filtre2}}`, et sont appliqués dans l'ordre où ils sont ajoutés.

## Dates

Convertir et modifier les dates.

### `date`

Convertit une date au format spécifié, [voir la référence](https://day.js.org/docs/en/display/format).

- `{{date|date:"YYYY-MM-DD"}}` convertit la date actuelle en "YYYY-MM-DD".
- Utilisez `date:("formatSortie", "formatEntrée")` pour spécifier le format d'entrée, par ex. `"12/01/2024"|date:("YYYY-MM-DD", "MM/DD/YYYY")` analyse "12/01/2024" et renvoie `"2024-12-01"`.

### `date_modify`

Modifie une date en ajoutant ou soustrayant une quantité de temps spécifiée, [voir la référence](https://day.js.org/docs/en/manipulate/add).

- `"2024-12-01"|date_modify:"+1 year"` renvoie `"2025-12-01"`
- `"2024-12-01"|date_modify:"- 2 months"` renvoie `"2024-10-01"`

### `duration`

Convertit les chaînes de durée ISO 8601 ou les secondes en chaînes de temps formatées. Utilise les jetons : `HH` (heures avec zéro), `H` (heures), `mm` (minutes avec zéro), `m` (minutes), `ss` (secondes avec zéro), `s` (secondes).

- `"PT1H30M"|duration:"HH:mm:ss"` renvoie `"01:30:00"`.
- `"3665"|duration:"H:mm:ss"` renvoie `"1:01:05"`.
- Définir `duration` sans paramètre utilise `HH:mm:ss` au-delà d'1 heure, `mm:ss` en dessous d'1 heure.
- Prend en charge les chaînes de durée ISO 8601 (par ex., `PT6702S`, `PT1H30M`) et les secondes simples.

## Conversion de texte et capitalisation

Convertir les chaînes de texte d'un format à un autre.

### `camel`

Convertit le texte en `camelCase`.

### `capitalize`

Met en majuscule le premier caractère de la valeur et convertit le reste en minuscules, par ex. `"hELLO wORLD"|capitalize` renvoie `"Hello world"`.

### `decode_uri`

Décode une chaîne encodée en URI, par ex. `"%E4%BD%A0%E5%A5%BD"|decode_uri` renvoie `"你好"`.

- `"hello%20world"|decode_uri` renvoie `"hello world"`.
- Renvoie la chaîne originale si le décodage échoue (par ex. séquences URI malformées).

### `kebab`

Convertit le texte en `kebab-case`.

### `lower`

Convertit le texte en `minuscules`.

### `pascal`

Convertit le texte en `PascalCase`.

### `replace`

Remplace les occurrences du texte spécifié :

- Remplacement simple : `"hello!"|replace:",":""` supprime toutes les virgules.
- Remplacements multiples : `"hello world"|replace:("e":"a","o":"0")` renvoie `"hall0 w0rld"`.
- Les remplacements sont appliqués dans l'ordre où ils sont spécifiés.
- Pour supprimer le texte spécifié, utilisez `""` comme valeur de remplacement.
- Les caractères spéciaux incluant `: | { } ( ) ' "` doivent être échappés avec une barre oblique inverse lorsqu'ils sont utilisés dans le terme de recherche, par ex. `\:` pour rechercher un deux-points littéral.

Les expressions régulières sont prises en charge via la syntaxe regex JavaScript :

- Remplacer toutes les voyelles : `"hello world"|replace:"/[aeiou]/g":"*"` → `"h*ll* w*rld".`
- Insensible à la casse : `"HELLO world"|replace:"/hello/i":"hi"` → `"hi world".`
- Expressions régulières multiples : `"hello world"|replace:("/[aeiou]/g":"*","/\s+/":"-")` → `"h*ll*-w*rld"`.
- Drapeaux disponibles : `g` (global), `i` (insensible à la casse), `m` (multiligne), `s` (dotAll), `u` (unicode), `y` (sticky).

### `safe_name`

Convertit le texte en un nom de fichier sûr.

- Par défaut, `safe_name` applique les règles de nettoyage les plus conservatrices.
- Des règles spécifiques au système d'exploitation peuvent être appliquées avec `safe_name:os` où `os` peut être `windows`, `mac` ou `linux` pour n'appliquer que les règles de ce système d'exploitation.

### `snake`

Convertit le texte en `snake_case`.

### `title`

Convertit le texte en `Casse De Titre`, par ex. `"hello world"|title` renvoie `"Hello World"`.

### `trim`

Supprime les espaces blancs aux deux extrémités d'une chaîne.

- `"  hello world  "|trim` renvoie `"hello world"`.

### `uncamel`

Convertit le camelCase ou PascalCase en mots séparés par des espaces, que vous pouvez ensuite formater avec d'autres filtres comme `title` ou `capitalize`.

- `"camelCase"|uncamel` renvoie `"camel case"`.
- `"PascalCase"|uncamel` renvoie `"pascal case"`.

### `upper`

Convertit une valeur en majuscules, par ex. `"hello world"|upper` renvoie `"HELLO WORLD"`.

## Mise en forme du texte

Appliquer la [[Syntaxe de mise en forme de base]] et la [[Syntaxe de mise en forme avancée]] au texte.

### `blockquote`

Ajoute un préfixe de citation Markdown (`> `) à chaque ligne de l'entrée.

### `callout`

Crée un [[Callouts|encadré]] avec des paramètres optionnels : `{{variable|callout:("type", "titre", étatPli)}}`

- `type` est le type d'encadré, par défaut "info"
- `titre` est le titre de l'encadré, par défaut vide
- `étatPli` est un booléen pour définir l'état de pliage (true pour plié, false pour déplié, null pour non pliable)

### `footnote`

Convertit un tableau ou un objet en une liste de notes de bas de page Markdown.

- Pour les tableaux : `["first item","second item"]|footnote` renvoie : `[^1]: first item` etc.
- Pour les objets : `{"First Note": "Content 1", "Second Note": "Content 2"}|footnote` renvoie : `[^first-note]: Content 1` etc.

### `fragment_link`

Convertit les chaînes et les tableaux en liens de [fragment de texte](https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments). Par défaut, utilise "link" comme texte du lien.

- `highlights|fragment_link` renvoie `Contenu surligné [link](text-fragment-url)`
- `highlights|fragment_link:"custom title"` renvoie `Contenu surligné [custom title](text-fragment-url)`

### `image`

Convertit les chaînes, tableaux ou objets en syntaxe d'image Markdown.

- Pour les chaînes : `"image.jpg"|image:"texte alt"` renvoie `![texte alt](image.jpg)`.
- Pour les tableaux : `["image1.jpg","image2.jpg"]|image:"texte alt"` renvoie un tableau de chaînes d'images Markdown avec le même texte alt pour toutes les images.
- Pour les objets : `{"image1.jpg": "Alt 1", "image2.jpg": "Alt 2"}|image` renvoie des chaînes d'images Markdown avec le texte alt provenant des clés de l'objet.

### `link`

Convertit les chaînes, tableaux ou objets en syntaxe de lien Markdown (à ne pas confondre avec [[Filtres#`wikilink`|wikilink]]).

- Pour les chaînes : `"url"|link:"auteur"` renvoie `[auteur](url)`.
- Pour les tableaux : `["url1","url2"]|link:"auteur"` renvoie un tableau de liens Markdown avec le même texte pour tous les liens.
- Pour les objets : `{"url1": "Auteur 1", "url2": "Auteur 2"}|link` renvoie des liens Markdown avec le texte correspondant aux clés de l'objet.

### `list`

Convertit un tableau en liste Markdown.

- `list` pour convertir en liste à puces.
- `list:task` pour convertir en liste de contrôle.
- `list:numbered` pour convertir en liste numérotée.
- `list:numbered-task` pour convertir en liste de contrôle numérotée.

### `table`

Convertit un tableau ou un tableau d'objets en [[Syntaxe de mise en forme avancée#Tableaux|tableau Markdown]] :

- Pour un tableau d'objets, il utilise les clés de l'objet comme en-têtes.
- Pour un tableau de tableaux, il crée un tableau avec chaque tableau imbriqué comme ligne.
- Pour un tableau simple, il crée un tableau à une seule colonne avec "Value" comme en-tête.
- Des en-têtes de colonnes personnalisés peuvent être spécifiés avec : `table:("Colonne 1", "Colonne 2", "Colonne 3")`. Lorsqu'il est utilisé avec un tableau simple, il répartit automatiquement les données en lignes en fonction du nombre de colonnes spécifiées.

### `wikilink`

Convertit les chaînes, tableaux ou objets en syntaxe de [[Lier des notes|lien wiki]] Obsidian.

- Pour les chaînes : `"page"|wikilink` renvoie `[[page]]`.
- Pour les chaînes avec alias : `"page"|wikilink:"alias"` renvoie `[[page|alias]]`.
- Pour les tableaux : `["page1","page2"]|wikilink` renvoie un tableau de liens wiki sans alias.
- Pour les tableaux avec alias : `["page1","page2"]|wikilink:"alias"` renvoie un tableau de liens wiki avec le même alias pour tous les liens.
- Pour les objets : `{"page1": "alias1", "page2": "alias2"}|wikilink` renvoie des liens wiki avec les clés comme noms de pages et les valeurs comme alias.

## Nombres

### `calc`

Effectue des opérations arithmétiques de base sur les nombres.

- Opérateurs pris en charge : `+`, `-`, `*`, `/`, `**` (ou `^`) pour l'exponentiation.
- Exemple : `5|calc:"+10"` renvoie `15`.
- Exemple : `2|calc:"**3"` renvoie `8` (2 au cube).
- Renvoie la chaîne originale si l'entrée n'est pas un nombre.

### `length`

Renvoie la longueur des chaînes, tableaux ou le nombre de clés dans les objets.

- Pour les chaînes : `"hello"|length` renvoie `5`.
- Pour les tableaux : `["a","b","c"]|length` renvoie `3`.
- Pour les objets : `{"a":1,"b":2}|length` renvoie `2`.

### `round`

Arrondit un nombre à l'entier le plus proche ou à un nombre spécifié de décimales.

- Sans paramètres : `3.7|round` renvoie `4`.
- Avec un nombre de décimales spécifié : `3.14159|round:2` renvoie `3.14`.

## Traitement HTML

Traiter le contenu HTML et convertir le HTML en Markdown. Notez que votre [[Variables|variable]] d'entrée doit contenir du contenu HTML, par ex. en utilisant `{{fullHtml}}`, `{{contentHtml}}` ou une variable `{{selectorHtml:}}`.

### `markdown`

Convertit une chaîne en une chaîne formatée en [[Obsidian Flavored Markdown]].

- Utile lorsqu'il est combiné avec des variables qui renvoient du HTML telles que `{{contentHtml}}`, `{{fullHtml}}` et des variables de sélecteur comme `{{selectorHtml:sélecteurCss}}`.

### `remove_attr`

Supprime uniquement les attributs HTML spécifiés des balises.

- Exemple : `"<div class="test" id="example">Contenu</div>"|remove_attr:"class"` renvoie `<div id="example">Contenu</div>`.
- Attributs multiples : `{{fullHtml|remove_attr:("class,style,id")}}`

### `remove_html`

Supprime les éléments HTML spécifiés et leur contenu d'une chaîne.

- Prend en charge le nom de balise, la classe ou l'id, par ex. `{{fullHtml|remove_html:("img,.class-name,#element-id")}}`
- Pour supprimer uniquement les balises ou attributs HTML sans supprimer le contenu, utilisez les filtres `strip_tags` ou `strip_attr`.

### `remove_tags`

Supprime uniquement les balises HTML spécifiées. Conserve le contenu des balises.

- Exemple : `"<p>Hello <b>world</b>!</p>"|remove_tags:"b"` renvoie `"<p>Hello world!</p>"`.
- Balises multiples : `{{fullHtml|remove_tags:("a,em,strong")}}`

### `replace_tags`

Remplace les balises HTML, en conservant le contenu et les attributs de la balise.

- `{{fullHtml|replace_tags:"strong":"h2"}}` remplace toutes les balises `<strong>` par `<h2>`.

### `strip_attr`

Supprime **tous** les attributs HTML d'une chaîne.

- Utilisez `strip_attr:("class, id")` pour conserver des attributs spécifiques.
- Exemple : `"<div class="test" id="example">Contenu</div>"|strip_attr:("class")` renvoie `<div id="example">Contenu</div>`.

### `strip_md`

Supprime **toute** la mise en forme Markdown et renvoie une chaîne en texte brut, par ex. transforme `**texte**` en `texte`.

- Transforme le texte formaté en texte brut non formaté, incluant le gras, l'italique, le surlignage, les entêtes, le code, les blocs de citation, les tableaux, les listes de contrôle et les liens wiki.
- Supprime entièrement les tableaux, les notes de bas de page, les images et les éléments HTML.

### `strip_tags`

Supprime **toutes** les balises HTML d'une chaîne. Le contenu à l'intérieur de la balise est conservé.

- Utilisez `strip_tags:("p,strong,em")` pour conserver des balises spécifiques.
- Exemple : `"<p>Hello <b>world</b>!</p>"|strip_tags:("b")` renvoie `Hello <b>world</b>!`.

## Tableaux et objets

Traiter les tableaux et les objets.

### `first`

Renvoie le premier élément d'un tableau sous forme de chaîne.

- `["a","b","c"]|first` renvoie `"a"`.
- Si l'entrée n'est pas un tableau, elle est renvoyée telle quelle.

### `join`

Combine les éléments d'un tableau en une chaîne.

- `["a","b","c"]|join` renvoie `"a,b,c"`.
- Un séparateur personnalisé peut être spécifié : `["a","b","c"]|join:" "` renvoie `"a b c"`. Utilisez `join:"\n"` pour séparer les éléments par un saut de ligne.
- Il peut être utile après `split` ou `slice` : `"a,b,c,d"|split:","|slice:1,3|join:" "` renvoie `"b c"`.

### `last`

Renvoie le dernier élément d'un tableau sous forme de chaîne.

- `["a","b","c"]|last` renvoie `"c"`.
- Si l'entrée n'est pas un tableau, elle est renvoyée telle quelle.

### `map`

Applique une transformation à chaque élément d'un tableau en utilisant la syntaxe `map:item => item.propriété` ou `map:item => item.propriété.imbriquée` pour les propriétés imbriquées.

- `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => item.gem` renvoie `["obsidian", "amethyst"]`.
- Utilisez des parenthèses pour les littéraux d'objet et les expressions complexes : `map:item => ({clé: valeur})`, par ex. : `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => ({name: item.gem, color: item.color})` renvoie `[{name: "obsidian", color: "black"}, {name: "amethyst", color: "purple"}]`.

Les littéraux de chaîne sont également pris en charge, par ex. `["rock", "pop"]|map:item => "genres/${item}"` renvoie `["genres/rock", "genres/pop"]`.

Combinez `map` avec le filtre `template`, par ex. `map:item => ({name: ${item.gem}, color: item.color})|template:"- ${name} is ${color}\n"`. Pour les littéraux de chaîne mappés, utilisez `${str}` dans le modèle, par ex. `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"`.

Remarque : Les filtres intégrés ne peuvent pas être utilisés à l'intérieur de `map`. Cela signifie que, par exemple, le nettoyage de chaque valeur d'un tableau ne peut pas être fait avec `map`.

### `merge`

Ajoute de nouvelles valeurs à un tableau.

- Pour les tableaux : `["a","b"]|merge:("c","d")` renvoie `["a","b","c","d"]`.
- Valeur unique : `["a","b"]|merge:"c"` renvoie `["a","b","c"]`.
- Si l'entrée n'est pas un tableau, il crée un nouveau tableau : `"a"|merge:("b","c")` renvoie `["a","b","c"]`.
- Les valeurs peuvent être entre guillemets : `["a"]|merge:('b,"c,d",e')` renvoie `["a","b","c,d","e"]`.

### `nth`

Conserve les éléments en n-ième position dans un tableau en utilisant la syntaxe de style CSS nth-child et les motifs de groupe. Toutes les positions sont basées sur 1 (le premier élément est en position 1).

- `array|nth:3` ne conserve que le 3e élément.
- `array|nth:3n` conserve chaque 3e élément (3, 6, 9, etc.).
- `array|nth:n+3` conserve le 3e élément et tous les suivants.

Syntaxe des motifs de groupe pour les structures répétitives :

- `array|nth:1,2,3:5` conserve les positions 1, 2, 3 de chaque groupe de 5 éléments. Exemple : `[1,2,3,4,5,6,7,8,9,10]|nth:1,2,3:5` renvoie `[1,2,3,6,7,8]`.

### `object`

Manipule les données d'objet :

- `object:array` convertit un objet en un tableau de paires clé-valeur.
- `object:keys` renvoie un tableau des clés de l'objet.
- `object:values` renvoie un tableau des valeurs de l'objet.
- Exemple : `{"a":1,"b":2}|object:array` renvoie `[["a",1],["b",2]]`.

### `slice`

Extrait une portion d'une chaîne ou d'un tableau.

- Pour les chaînes : `"hello"|slice:1,4` renvoie `"ell"`.
- Pour les tableaux : `["a","b","c","d"]|slice:1,3` renvoie `["b","c"]`.
- Si un seul paramètre est fourni, il extrait depuis cet index jusqu'à la fin : `"hello"|slice:2` renvoie `"llo"`.
- Les indices négatifs comptent depuis la fin : `"hello"|slice:-3` renvoie `"llo"`.
- Le second paramètre est exclusif : `"hello"|slice:1,4` inclut les caractères aux indices 1, 2 et 3.
- L'utilisation d'un second paramètre négatif exclut les éléments depuis la fin : `"hello"|slice:0,-2` renvoie `"hel"`.

### `split`

Divise une chaîne en un tableau de sous-chaînes.

- `"a,b,c"|split:","` renvoie `["a","b","c"]`.
- `"hello world"|split:" "` renvoie `["hello","world"]`.
- Si aucun séparateur n'est fourni, il divise sur chaque caractère : `"hello"|split` renvoie `["h","e","l","l","o"]`.
- Les expressions régulières peuvent être utilisées comme séparateurs : `"a1b2c3"|split:[0-9]` renvoie `["a","b","c"]`.

### `template`

Applique une chaîne de modèle à un objet ou un tableau d'objets, en utilisant la syntaxe `objet|template:"Modèle avec ${variable}"`.

- Accès aux propriétés imbriquées : `{"gem":{"name":"Obsidian"}}|template:"${gem.name}"` renvoie `"Obsidian"`.
- Pour les objets : `{"gem":"obsidian","hardness":5}|template:"${gem} has a hardness of ${hardness}"` renvoie `"obsidian has a hardness of 5"`.
- Pour les tableaux : `[{"gem":"obsidian","hardness":5},{"gem":"amethyst","hardness":7}]|template:"- ${gem} has a hardness of ${hardness}\n"` renvoie une liste formatée.

Fonctionne avec les littéraux de chaîne issus de `map` en utilisant `${str}` :

- Exemple : `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"` renvoie une liste formatée.

### `unique`

Supprime les valeurs en double des tableaux et des objets.

- Pour les tableaux de primitives : `[1,2,2,3,3]|unique` renvoie `[1,2,3]`.
- Pour les tableaux d'objets : `[{"a":1},{"b":2},{"a":1}]|unique` renvoie `[{"a":1},{"b":2}]`.
- Pour les objets, il supprime les propriétés ayant des valeurs en double, en conservant la clé de la dernière occurrence.
- Pour les chaînes, il renvoie l'entrée telle quelle.
