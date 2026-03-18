---
permalink: bases/functions
description: >-
  This page details the functions used in Obsidian Bases to manipulate data from
  properties in filters and formulas.
publish: true
mobile: true
localized: null
aliases:
  - Functions
---
Les fonctions sont utilisées dans les [[Introduction aux Bases|Bases]] pour manipuler les données des [[Propriétés|propriétés]] dans les [[Vues#Filtres|filtres]] et les [[Formules|formules]]. Consultez la référence de la [[Syntaxe des Bases|syntaxe des bases]] pour en savoir plus sur l'utilisation des fonctions.

En dehors des fonctions [[Fonctions#Globales|Globales]], la plupart des fonctions dépendent du type de valeur que vous souhaitez modifier :

- [[Fonctions#Quelconque|Quelconque]]
- [[Fonctions#Date|Date]]
- [[Fonctions#Chaîne de caractères|Chaîne de caractères]]
- [[Fonctions#Nombre|Nombre]]
- [[Fonctions#Liste|Liste]]
- [[Fonctions#Lien|Lien]]
- [[Fonctions#Fichier|Fichier]]
- [[Fonctions#Objet|Objet]]
- [[Fonctions#Expression régulière|Expression régulière]]

## Globales

Les fonctions globales s'utilisent sans type.

### `escapeHTML()`

`escapeHTML(html: string): string`

- Échappe les caractères spéciaux dans une chaîne de caractères pour la rendre sûre à inclure dans du HTML.

### `date()`

`date(date: string): date`

- `date(string): date` analyse la chaîne fournie et renvoie un objet date.
- La chaîne `date` doit être au format `YYYY-MM-DD HH:mm:ss`.

### `duration()`

`duration(value: string): duration`

- Analyse une chaîne de caractères comme une durée. Voir la [[Syntaxe des Bases#Arithmétique des dates|section arithmétique des dates]] pour le format de la chaîne `value`.
- Les durées n'ont pas besoin d'être explicitement analysées lors de l'arithmétique des dates (par exemple, `now() + '1d'`), mais elles doivent l'être lors de l'arithmétique sur les durées (par exemple, `now() + (duration('1d') * 2)`).
- Lors de l'arithmétique des durées avec des scalaires, la durée doit être à gauche. Par exemple `duration('5h') * 2`, au lieu de `2 * duration('5h')`.

### `file()`

`file(path: string | file | url): file`

- Renvoie un objet fichier pour le fichier ou le chemin donné.
- Exemple : `file(link("[[filename]]"))` ou `file("path to file")`.

### `html()`

`html(html: string): html`

- Convertit une chaîne de caractères en un extrait de code qui s'affiche en HTML.

### `if()`

`if(condition: any, trueResult: any, falseResult?: any): any`

- `condition` est la condition à évaluer.
- `trueResult` est le résultat si la condition est vraie.
- `falseResult` est le résultat optionnel si la condition est fausse. S'il n'est pas fourni, il est considéré comme `null`.
- Renvoie `trueResult` si `condition` est vraie, ou est une valeur évaluée comme vraie, sinon renvoie `falseResult`.
- Exemple : `if(isModified, "Modified", "Unmodified")`

### `image()`

`image(path: string | file | url): image`

- Renvoie un objet image qui affichera l'image dans la vue.
- Exemple : `image(image-property)` ou `image("https://obsidian.md/images/obsidian-logo-gradient.svg")`

### `icon()`

`icon(name: string): icon`

- Renvoie une valeur qui s'affichera sous forme d'icône dans une vue. Le nom de l'icône doit correspondre à une icône Lucide prise en charge.
- Exemple : `icon("arrow-right")`.

### `link()`

`link(path: string | file, display?: value): Link`

- Analyse une chaîne `path` et renvoie un objet Link qui s'affiche comme un lien vers le chemin donné.
- Fournissez optionnellement le paramètre `display` pour changer le texte affiché par le lien.

### `list()`

`list(element: any): List`

- Si l'élément fourni est une liste, le renvoie sans modification.
- Sinon, enveloppe l'`element` fourni dans une liste, créant une liste à un seul élément.
- Cette fonction peut être utile lorsqu'une propriété contient un mélange de chaînes de caractères ou de listes dans le coffre.
- Exemple : `list("value")` renvoie `["value"]`.

### `max()`

`max(value1: number, value2: number...): number`

- Renvoie le plus grand de tous les nombres fournis.

### `min()`

`min(value1: number, value2: number...): number`

- Renvoie le plus petit de tous les nombres fournis.

### `now()`

`now(): date`

- `now()` renvoie un objet date représentant l'instant présent.

### `number()`

`number(input: any): number`

- Tente de renvoyer la valeur fournie sous forme de nombre.
- Les objets date sont renvoyés en millisecondes depuis l'époque Unix.
- Les booléens renvoient 1 ou 0.
- Les chaînes de caractères sont analysées en nombre et renvoient une erreur si le résultat est invalide.
- Exemple : `number("3.4")` renvoie `3.4`.

### `duration()`

`duration(value: string): duration`

- Analyse une chaîne de caractères comme une durée. Voir la [[Syntaxe des Bases#Arithmétique des dates|section arithmétique des dates]] pour le format de la chaîne `value`.
- Les durées n'ont pas besoin d'être explicitement analysées lors de l'arithmétique des dates (par exemple, `now() + '1d'`), mais elles doivent l'être lors de l'arithmétique sur les durées (par exemple, `now() + (duration('1d') * 2)`).
- Lors de l'arithmétique des durées avec des scalaires, la durée doit être à gauche. Par exemple `duration('5h') * 2`, au lieu de `2 * duration('5h')`.

### `today()`

`today(): date`

- `today()` renvoie un objet date représentant la date du jour. La partie horaire est définie à zéro.

## Quelconque

Fonctions utilisables avec n'importe quelle valeur. Cela inclut les chaînes de caractères (par ex. `"hello"`), les nombres (par ex. `42`), les listes (par ex. `[1,2,3]`), les objets, et plus encore.

### `isTruthy()`

`any.isTruthy(): boolean`

- Renvoie la valeur convertie en booléen.
- Exemple : `1.isTruthy()` renvoie `true`.

### `isType()`

`any.isType(type: string): boolean`

- Renvoie true si la valeur est du type fourni.
- Exemple : `"example".isType("string")` et `true.isType("boolean")` renvoient tous deux true.

### `toString()`

`any.toString(): string`

- Renvoie la représentation sous forme de chaîne de caractères de n'importe quelle valeur.
- Exemple : `123.toString()` renvoie `"123"`.

## Date

Fonctions utilisables avec une date et une heure telles que `date("2025-05-27")`. Les comparaisons de dates peuvent être effectuées en utilisant l'[[Syntaxe des Bases#Arithmétique des dates|arithmétique des dates]].

### Champs

Les champs suivants sont disponibles pour les dates :

| Champ              | Type     | Description                       |
| ------------------ | -------- | --------------------------------- |
| `date.year`        | `number` | L'année de la date                |
| `date.month`       | `number` | Le mois de la date (1–12)         |
| `date.day`         | `number` | Le jour du mois                   |
| `date.hour`        | `number` | L'heure (0–23)                    |
| `date.minute`      | `number` | La minute (0–59)                  |
| `date.second`      | `number` | La seconde (0–59)                 |
| `date.millisecond` | `number` | La milliseconde (0–999)           |

### `date()`

`date.date(): date`

- Renvoie un objet date avec l'heure supprimée.
- Exemple : `now().date().format("YYYY-MM-DD HH:mm:ss")` renvoie une chaîne telle que "2025-12-31 00:00:00"

### `format()`

`date.format(format: string): string`

- `format` est la chaîne de format (par ex., `"YYYY-MM-DD"`).
- Renvoie la date formatée selon une chaîne de format Moment.js.
- Exemple : `date.format("YYYY-MM-DD")` renvoie `"2025-05-27"`.

### `time()`

`date.time(): string`

- Renvoie l'heure.
- Exemple : `now().time()` renvoie une chaîne telle que "23:59:59"

### `relative()`

`date.relative(): string`

- Renvoie une comparaison lisible de la date par rapport à la date et l'heure actuelles.
- Exemple : `file.mtime.relative()` renvoie une valeur telle que `3 days ago`.

### `isEmpty()`

`date.isEmpty(): boolean`

- Renvoie false.

## Chaîne de caractères

Fonctions utilisables avec une séquence de caractères telle que `"hello"`.

### Champs

| Champ           | Type     | Description                                          |
| --------------- | -------- | ---------------------------------------------------- |
| `string.length` | `number` | Le nombre de caractères dans la chaîne de caractères |

### `contains()`

`string.contains(value: string): boolean`

- `value` est la sous-chaîne à rechercher.
- Renvoie true si la chaîne contient `value`.
- Exemple : `"hello".contains("ell")` renvoie `true`.

### `containsAll()`

`string.containsAll(...values: string): boolean`

- `values` sont une ou plusieurs sous-chaînes à rechercher.
- Renvoie true si la chaîne contient toutes les `values`.
- Exemple : `"hello".containsAll("h", "e")` renvoie `true`.

### `containsAny()`

`string.containsAny(...values: string): boolean`

- `values` sont une ou plusieurs sous-chaînes à rechercher.
- Renvoie true si la chaîne contient au moins une des `values`.
- Exemple : `"hello".containsAny("x", "y", "e")` renvoie `true`.

### `endsWith()`

`string.endsWith(query: string): boolean`

- `query` est la chaîne à vérifier à la fin.
- Renvoie true si cette chaîne se termine par `query`.
- Exemple : `"hello".endsWith("lo")` renvoie `true`.

### `isEmpty()`

`string.isEmpty(): boolean`

- Renvoie true si la chaîne ne contient aucun caractère, ou n'est pas présente.
- Exemple : `"Hello world".isEmpty()` renvoie `false`.
- Exemple : `"".isEmpty()` renvoie `true`.

### `lower()`

`string.lower(): string`

- Renvoie la chaîne convertie en minuscules.

### `replace()`

`string.replace(pattern: string | Regexp, replacement: string): string`

- `pattern` est la valeur à rechercher dans la chaîne cible.
- `replacement` est la valeur par laquelle remplacer les motifs trouvés.
- Si `pattern` est une chaîne, toutes les occurrences du motif seront remplacées.
- Si `pattern` est une Regexp, le drapeau `g` détermine si seule la première ou toutes les occurrences sont remplacées.
- Exemple : `""a:b:c:d".replace(/:/, "-")` renvoie `"a-b,c,d"`, alors que `"a:b:c:d".replace(/:/g, "-")` renvoie `"a-b-c-d"`.

### `repeat()`

`string.repeat(count: number): string`

- `count` est le nombre de fois où répéter la chaîne.
- Exemple : `"123".repeat(2)` renvoie `"123123"`

### `reverse()`

`string.reverse(): string`

- Inverse la chaîne.
- Exemple : `"hello".reverse()` renvoie `"olleh"`.

### `slice()`

`string.slice(start: number, end?: number): string`

- `start` est l'index de début inclusif.
- `end` est l'index de fin exclusif optionnel.
- Renvoie une sous-chaîne de `start` (inclusif) à `end` (exclusif).
- Exemple : `"hello".slice(1, 4)` renvoie `"ell"`.
- Si `end` est omis, découpe jusqu'à la fin de la chaîne.

### `split()`

`string.split(separator: string | Regexp, n?: number): list`

- `separator` est le délimiteur pour découper la chaîne.
- `n` est un nombre optionnel. S'il est fourni, le résultat contiendra les `n` premiers éléments.
- Renvoie une liste de sous-chaînes.
- Exemple : `"a,b,c,d".split(",", 3)` ou `"a,b,c,d".split(/,/, 3)` renvoie `["a", "b", "c"]`.

### `startsWith()`

`string.startsWith(query: string): boolean`

- `query` est la chaîne à vérifier au début.
- Renvoie true si cette chaîne commence par `query`.
- Exemple : `"hello".startsWith("he")` renvoie `true`.

### `title()`

`string.title(): string`

- Convertit la chaîne en casse de titre (première lettre de chaque mot en majuscule).
- Exemple : `"hello world".title()` renvoie `"Hello World"`.

### `trim()`

`string.trim(): string`

- Supprime les espaces blancs aux deux extrémités de la chaîne.
- Exemple : `"  hi  ".trim()` renvoie `"hi"`.

## Nombre

Fonctions utilisables avec des valeurs numériques telles que `42`, `3.14`.

### `abs()`

`number.abs(): number`

- Renvoie la valeur absolue du nombre.
- Exemple : `(-5).abs()` renvoie `5`.

### `ceil()`

`number.ceil(): number`

- Arrondit le nombre à l'entier supérieur.
- Exemple : `(2.1).ceil()` renvoie `3`.

### `floor()`

`number.floor(): number`

- Arrondit le nombre à l'entier inférieur.
- Exemple : `(2.9).floor()` renvoie `2`.

### `isEmpty()`

`number.isEmpty(): boolean`

- Renvoie true si le nombre n'est pas présent.
- Exemple : `5.isEmpty()` renvoie `false`.

### `round()`

`number.round(digits: number): number`

- Arrondit le nombre à l'entier le plus proche.
- Optionnellement, fournissez un paramètre `digits` pour arrondir à ce nombre de décimales.
- Exemple : `(2.5).round()` renvoie `3`, et `(2.3333).round(2)` renvoie `2.33`.

### `toFixed()`

`number.toFixed(precision: number): string`

- `precision` est le nombre de décimales.
- Renvoie une chaîne avec le nombre en notation à virgule fixe.
- Exemple : `(3.14159).toFixed(2)` renvoie `"3.14"`.

## Liste

Fonctions utilisables avec une liste ordonnée d'éléments telle que `[1, 2, 3]`.

### Champs

| Champ         | Type     | Description                          |
| ------------- | -------- | ------------------------------------ |
| `list.length` | `number` | Le nombre d'éléments dans la liste   |

### `contains()`

`list.contains(value: any): boolean`

- `value` est l'élément à rechercher.
- Renvoie true si la liste contient `value`.
- Exemple : `[1,2,3].contains(2)` renvoie `true`.

### `containsAll()`

`list.containsAll(...values: any): boolean`

- `values` sont un ou plusieurs éléments à rechercher.
- Renvoie true si la liste contient toutes les `values`.
- Exemple : `[1,2,3].containsAll(2,3)` renvoie `true`.

### `containsAny()`

`list.containsAny(...values: any): boolean`

- `values` sont un ou plusieurs éléments à rechercher.
- Renvoie true si la liste contient au moins une des `values`.
- Exemple : `[1,2,3].containsAny(3,4)` renvoie `true`.

### `filter()`

`list.filter(value: Boolean): list`

- Filtre les éléments de cette liste en appelant une fonction de filtre, qui utilise les variables `index` et `value`, et renvoie une valeur booléenne indiquant si l'élément doit être conservé.
- `value` est la valeur d'un élément dans la liste.
- `index` est l'index de la valeur courante.
- Exemple : `[1,2,3,4].filter(value > 2)` renvoie `[3,4]`.

### `flat()`

`list.flat(): list`

- Aplatit une liste imbriquée en une seule liste.
- Exemple : `[1,[2,3]].flat()` renvoie `[1,2,3]`.

### `isEmpty()`

`list.isEmpty(): boolean`

- Renvoie true si la liste ne contient aucun élément.
- Exemple : `[1,2,3].isEmpty()` renvoie `false`.

### `join()`

`list.join(separator: string): string`

- `separator` est la chaîne à insérer entre les éléments.
- Joint tous les éléments de la liste en une seule chaîne de caractères.
- Exemple : `[1,2,3].join(",")` renvoie `"1,2,3"`.

### `map()`

`list.map(value: Any): list`

- Transforme chaque élément de cette liste en appelant une fonction de conversion, qui utilise les variables `index` et `value`, et renvoie la nouvelle valeur à placer dans la liste.
- `value` est la valeur d'un élément dans la liste.
- `index` est l'index de la valeur courante.
- Exemple : `[1,2,3,4].map(value + 1)` renvoie `[2,3,4,5]`.

### `reduce()`

`list.reduce(expression: Any, acc: Any): Any`

- Réduit les éléments de cette liste en une seule valeur en exécutant une expression pour chaque élément. L'expression peut utiliser les variables `index`, `value` et `acc` (l'accumulateur), et doit renvoyer la prochaine valeur de l'accumulateur.
- `expression` est évaluée pour chaque élément de la liste.
- `value` est la valeur de l'élément courant dans la liste.
- `index` est l'index de l'élément courant.
- `acc` est la valeur accumulée jusqu'à présent.
- Exemple (somme) : `[1,2,3].reduce(acc + value, 0)` renvoie `6`.
- Exemple (max) : `values.filter(value.isType("number")).reduce(if(acc == null || value > acc, value, acc), null)` renvoie le plus grand nombre, ou `null` s'il n'y en a aucun.

### `reverse()`

`list.reverse(): list`

- Inverse la liste sur place.
- Exemple : `[1,2,3].reverse()` renvoie `[3,2,1]`.

### `slice()`

`list.slice(start: number, end?: number): list`

- `start` est l'index de début inclusif.
- `end` est l'index de fin exclusif optionnel.
- Renvoie une copie superficielle d'une portion de la liste de `start` (inclusif) à `end` (exclusif).
- Exemple : `[1,2,3,4].slice(1,3)` renvoie `[2,3]`.
- Si `end` est omis, découpe jusqu'à la fin de la liste.

### `sort()`

`list.sort(): list`

- Trie les éléments de la liste du plus petit au plus grand.
- Exemple : `[3, 1, 2].sort()` renvoie `[1, 2, 3]`.
- Exemple : `["c", "a", "b"].sort()` renvoie `["a", "b", "c"]`.

### `unique()`

`list.unique(): list`

- Supprime les éléments en double.
- Exemple : `[1,2,2,3].unique()` renvoie `[1,2,3]`.

## Lien

Fonctions utilisables sur un lien. Les liens peuvent être créés à partir d'un fichier (`file.asLink()`) ou d'un chemin (`link("path")`).

### `asFile()`

`link.asFile(): file`

- Renvoie un objet fichier si le lien fait référence à un fichier local valide.
- Exemple : `link("[[filename]]").asFile()`

### `linksTo()`

`link.linksTo(file): boolean`

- Renvoie si le fichier représenté par le `link` possède un lien vers `file`.

## Fichier

Fonctions utilisables avec un fichier dans le coffre.

### Champs

Les champs suivants sont disponibles pour les fichiers :

| Champ             | Type     | Description                                                     |
| ----------------- | -------- | --------------------------------------------------------------- |
| `file.name`       | `string` | Le nom de ce fichier.                                           |
| `file.basename`   | `string` | Le nom de ce fichier sans l'extension.                          |
| `file.path`       | `string` | Le chemin complet vers ce fichier, relatif à la racine du coffre. |
| `file.folder`     | `string` | Le chemin complet vers le dossier parent.                       |
| `file.ext`        | `string` | L'extension de ce fichier.                                      |
| `file.size`       | `number` | La taille de ce fichier, en octets.                             |
| `file.properties` | `object` | Les propriétés de la note pour ce fichier.                      |
| `file.tags`       | `list`   | Les mots-clés de ce fichier. Inclut les mots-clés en ligne.    |
| `file.links`      | `list`   | Les liens internes dans ce fichier.                             |
| `file.ctime`      | `date`   | Horodatage de la création de ce fichier.                        |
| `file.mtime`      | `date`   | Horodatage de la dernière modification de ce fichier.           |

### `asLink()`

`file.asLink(display?: string): Link`

- `display` texte d'affichage optionnel pour le lien.
- Renvoie un objet Link qui s'affiche comme un lien fonctionnel.
- Exemple : `file.asLink()`

### `hasLink()`

`file.hasLink(otherFile: file | string): boolean`

- `otherFile` est un autre objet fichier ou un chemin sous forme de chaîne à vérifier.
- Renvoie true si `file` possède un lien vers `otherFile`.
- Exemple : `file.hasLink(otherFile)` renvoie `true` s'il existe un lien de `file` vers `otherFile`.

### `hasProperty()`

`file.hasProperty(name: string): boolean`

- Renvoie true si la note possède la propriété de fichier donnée.

### `hasTag()`

`file.hasTag(...values: string): boolean`

- `values` sont un ou plusieurs noms de mots-clés.
- Renvoie true si le fichier possède l'un des mots-clés dans `values`.
- Exemple : `file.hasTag("tag1", "tag2")` renvoie `true` si le fichier possède le mot-clé `#tag1` ou `#tag2`. Cela inclut également les [[Étiquettes#Mots-clés imbriqués|mots-clés imbriqués]], tels que `#tag1/a` ou `#tag2/b`.

### `inFolder()`

`file.inFolder(folder: string): boolean`

- `folder` est le nom du dossier à vérifier.
- Renvoie true si le fichier se trouve dans le dossier spécifié ou l'un de ses sous-dossiers.
- Exemple : `file.inFolder("notes")` renvoie `true`.

## Objet

Fonctions utilisables avec une collection de paires clé-valeur telle que `{"a": 1, "b": 2}`.

### `isEmpty()`

`object.isEmpty(): boolean`

- Renvoie true si l'objet ne possède aucune propriété propre.
- Exemple : `{}.isEmpty()` renvoie `true`.

### `keys()`

`object.keys(): list`

- Renvoie une liste contenant les clés de l'objet.

### `values()`

`object.values(): list`

- Renvoie une liste contenant les valeurs de l'objet.

## Expression régulière

Fonctions utilisables avec un motif d'expression régulière. Exemple : `/abc/`.

### `matches()`

`regexp.matches(value: string): boolean`

- `value` est la chaîne à tester.
- Renvoie true si l'expression régulière correspond à `value`.
- Exemple : `/abc/.matches("abcde")` renvoie `true`.
