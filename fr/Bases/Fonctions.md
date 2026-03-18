---
permalink: bases/functions
description: >-
  This page details the functions used in Obsidian Bases to manipulate data from
  properties in filters and formulas.
publish: true
mobile: true
localized: '2026-03-18'
aliases:
  - Functions
---
Les fonctions sont utilisées dans les [[Introduction aux Bases|bases]] pour manipuler les données des [[Propriétés|propriétés]] dans les [[Vues#Filtres|filtres]] et les [[Formules|formules]]. Consultez la référence de la [[Syntaxe des Bases|syntaxe des bases]] pour en savoir plus sur l'utilisation des fonctions.

En dehors des fonctions [[Fonctions#Globales|globales]], la plupart des fonctions dépendent du type de valeur que vous souhaitez modifier :

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

- Échappe les caractères spéciaux dans une chaîne pour la rendre sûre à inclure dans du HTML.

### `date()`

`date(date: string): date`

- `date(string): date` analyse la chaîne fournie et retourne un objet date.
- La chaîne `date` doit être au format `YYYY-MM-DD HH:mm:ss`.

### `duration()`

`duration(value: string): duration`

- Analyse une chaîne en tant que durée. Consultez la [[Syntaxe des Bases#Arithmétique de dates|section arithmétique de dates]] pour le format de la chaîne `value`.
- Les durées n'ont pas besoin d'être explicitement analysées lors d'opérations arithmétiques sur les dates (par exemple, `now() + '1d'`), mais elles le doivent lors d'opérations arithmétiques sur les durées (par exemple, `now() + (duration('1d') * 2)`).
- Lors d'opérations arithmétiques entre durées et scalaires, la durée doit être à gauche. Par exemple `duration('5h') * 2`, au lieu de `2 * duration('5h')`.

### `file()`

`file(path: string | file | url): file`

- Retourne un objet fichier pour le fichier ou le chemin donné.
- Exemple : `file(link("[[filename]]"))` ou `file("path to file")`.

### `html()`

`html(html: string): html`

- Convertit une chaîne en un extrait de code qui s'affiche en HTML.

### `if()`

`if(condition: any, trueResult: any, falseResult?: any): any`

- `condition` est la condition à évaluer.
- `trueResult` est la sortie si la condition est vraie.
- `falseResult` est la sortie optionnelle si la condition est fausse. Si elle n'est pas fournie, elle est considérée comme `null`.
- Retourne `trueResult` si `condition` est vraie, ou est une valeur évaluée comme vraie, ou `falseResult` sinon.
- Exemple : `if(isModified, "Modified", "Unmodified")`

### `image()`

`image(path: string | file | url): image`

- Retourne un objet image qui affiche l'image dans la vue.
- Exemple : `image(image-property)` ou `image("https://obsidian.md/images/obsidian-logo-gradient.svg")`

### `icon()`

`icon(name: string): icon`

- Retourne une valeur qui s'affiche sous forme d'icône dans une vue. Le nom de l'icône doit correspondre à une icône Lucide prise en charge.
- Exemple : `icon("arrow-right")`.

### `link()`

`link(path: string | file, display?: value): Link`

- Analyse une chaîne `path` et retourne un objet Link qui s'affiche comme un lien vers le chemin donné.
- Fournissez optionnellement le paramètre `display` pour modifier le texte affiché par le lien.

### `list()`

`list(element: any): List`

- Si l'élément fourni est une liste, la retourne sans modification.
- Sinon, enveloppe l'`element` fourni dans une liste, créant une liste avec un seul élément.
- Cette fonction peut être utile lorsqu'une propriété contient un mélange de chaînes ou de listes dans le coffre.
- Exemple : `list("value")` retourne `["value"]`.

### `max()`

`max(value1: number, value2: number...): number`

- Retourne le plus grand de tous les nombres fournis.

### `min()`

`min(value1: number, value2: number...): number`

- Retourne le plus petit de tous les nombres fournis.

### `now()`

`now(): date`

- `now()` retourne un objet date représentant l'instant présent.

### `number()`

`number(input: any): number`

- Tente de retourner la valeur fournie sous forme de nombre.
- Les objets date sont retournés en millisecondes depuis l'époque Unix.
- Les booléens retournent 1 ou 0.
- Les chaînes sont analysées en nombre et retournent une erreur si le résultat est invalide.
- Exemple : `number("3.4")` retourne `3.4`.

### `duration()`

`duration(value: string): duration`

- Analyse une chaîne en tant que durée. Consultez la [[Syntaxe des Bases#Arithmétique de dates|section arithmétique de dates]] pour le format de la chaîne `value`.
- Les durées n'ont pas besoin d'être explicitement analysées lors d'opérations arithmétiques sur les dates (par exemple, `now() + '1d'`), mais elles le doivent lors d'opérations arithmétiques sur les durées (par exemple, `now() + (duration('1d') * 2)`).
- Lors d'opérations arithmétiques entre durées et scalaires, la durée doit être à gauche. Par exemple `duration('5h') * 2`, au lieu de `2 * duration('5h')`.

### `today()`

`today(): date`

- `today()` retourne un objet date représentant la date du jour. La partie horaire est définie à zéro.

## Quelconque

Fonctions utilisables avec n'importe quelle valeur. Cela inclut les chaînes de caractères (par ex. `"hello"`), les nombres (par ex. `42`), les listes (par ex. `[1,2,3]`), les objets, et plus encore.

### `isTruthy()`

`any.isTruthy(): boolean`

- Retourne la valeur convertie en booléen.
- Exemple : `1.isTruthy()` retourne `true`.

### `isType()`

`any.isType(type: string): boolean`

- Retourne vrai si la valeur est du type fourni.
- Exemple : `"example".isType("string")` et `true.isType("boolean")` retournent tous deux vrai.

### `toString()`

`any.toString(): string`

- Retourne la représentation sous forme de chaîne de n'importe quelle valeur.
- Exemple : `123.toString()` retourne `"123"`.

## Date

Fonctions utilisables avec une date et une heure telles que `date("2025-05-27")`. Les comparaisons de dates peuvent être effectuées en utilisant l'[[Syntaxe des Bases#Arithmétique de dates|arithmétique de dates]].

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

- Retourne un objet date sans la partie horaire.
- Exemple : `now().date().format("YYYY-MM-DD HH:mm:ss")` retourne une chaîne telle que "2025-12-31 00:00:00"

### `format()`

`date.format(format: string): string`

- `format` est la chaîne de format (par ex., `"YYYY-MM-DD"`).
- Retourne la date formatée selon une chaîne de format Moment.js.
- Exemple : `date.format("YYYY-MM-DD")` retourne `"2025-05-27"`.

### `time()`

`date.time(): string`

- Retourne l'heure.
- Exemple : `now().time()` retourne une chaîne telle que "23:59:59"

### `relative()`

`date.relative(): string`

- Retourne une comparaison lisible de la date par rapport à la date et l'heure actuelles.
- Exemple : `file.mtime.relative()` retourne une valeur telle que `3 days ago`.

### `isEmpty()`

`date.isEmpty(): boolean`

- Retourne faux.

## Chaîne de caractères

Fonctions utilisables avec une séquence de caractères telle que `"hello"`.

### Champs

| Champ           | Type     | Description                                       |
| --------------- | -------- | ------------------------------------------------- |
| `string.length` | `number` | Le nombre de caractères dans la chaîne            |

### `contains()`

`string.contains(value: string): boolean`

- `value` est la sous-chaîne à rechercher.
- Retourne vrai si la chaîne contient `value`.
- Exemple : `"hello".contains("ell")` retourne `true`.

### `containsAll()`

`string.containsAll(...values: string): boolean`

- `values` sont une ou plusieurs sous-chaînes à rechercher.
- Retourne vrai si la chaîne contient toutes les `values`.
- Exemple : `"hello".containsAll("h", "e")` retourne `true`.

### `containsAny()`

`string.containsAny(...values: string): boolean`

- `values` sont une ou plusieurs sous-chaînes à rechercher.
- Retourne vrai si la chaîne contient au moins une des `values`.
- Exemple : `"hello".containsAny("x", "y", "e")` retourne `true`.

### `endsWith()`

`string.endsWith(query: string): boolean`

- `query` est la chaîne à vérifier à la fin.
- Retourne vrai si cette chaîne se termine par `query`.
- Exemple : `"hello".endsWith("lo")` retourne `true`.

### `isEmpty()`

`string.isEmpty(): boolean`

- Retourne vrai si la chaîne n'a aucun caractère, ou n'est pas présente.
- Exemple : `"Hello world".isEmpty()` retourne `false`.
- Exemple : `"".isEmpty()` retourne `true`.

### `lower()`

`string.lower(): string`

- Retourne la chaîne convertie en minuscules.

### `replace()`

`string.replace(pattern: string | Regexp, replacement: string): string`

- `pattern` est la valeur à rechercher dans la chaîne cible.
- `replacement` est la valeur par laquelle remplacer les occurrences trouvées.
- Si `pattern` est une chaîne, toutes les occurrences du motif seront remplacées.
- Si `pattern` est une Regexp, le drapeau `g` détermine si seule la première ou toutes les occurrences sont remplacées.
- Exemple : `""a:b:c:d".replace(/:/, "-")` retourne `"a-b,c,d"`, alors que `"a:b:c:d".replace(/:/g, "-")` retourne `"a-b-c-d"`.

### `repeat()`

`string.repeat(count: number): string`

- `count` est le nombre de fois que la chaîne doit être répétée.
- Exemple : `"123".repeat(2)` retourne `"123123"`

### `reverse()`

`string.reverse(): string`

- Inverse la chaîne.
- Exemple : `"hello".reverse()` retourne `"olleh"`.

### `slice()`

`string.slice(start: number, end?: number): string`

- `start` est l'index de début inclusif.
- `end` est l'index de fin exclusif optionnel.
- Retourne une sous-chaîne de `start` (inclusif) à `end` (exclusif).
- Exemple : `"hello".slice(1, 4)` retourne `"ell"`.
- Si `end` est omis, extrait jusqu'à la fin de la chaîne.

### `split()`

`string.split(separator: string | Regexp, n?: number): list`

- `separator` est le délimiteur pour diviser la chaîne.
- `n` est un nombre optionnel. S'il est fourni, le résultat contiendra les `n` premiers éléments.
- Retourne une liste de sous-chaînes.
- Exemple : `"a,b,c,d".split(",", 3)` ou `"a,b,c,d".split(/,/, 3)` retourne `["a", "b", "c"]`.

### `startsWith()`

`string.startsWith(query: string): boolean`

- `query` est la chaîne à vérifier au début.
- Retourne vrai si cette chaîne commence par `query`.
- Exemple : `"hello".startsWith("he")` retourne `true`.

### `title()`

`string.title(): string`

- Convertit la chaîne en casse de titre (première lettre de chaque mot en majuscule).
- Exemple : `"hello world".title()` retourne `"Hello World"`.

### `trim()`

`string.trim(): string`

- Supprime les espaces aux deux extrémités de la chaîne.
- Exemple : `"  hi  ".trim()` retourne `"hi"`.

## Nombre

Fonctions utilisables avec des valeurs numériques telles que `42`, `3.14`.

### `abs()`

`number.abs(): number`

- Retourne la valeur absolue du nombre.
- Exemple : `(-5).abs()` retourne `5`.

### `ceil()`

`number.ceil(): number`

- Arrondit le nombre à l'entier supérieur.
- Exemple : `(2.1).ceil()` retourne `3`.

### `floor()`

`number.floor(): number`

- Arrondit le nombre à l'entier inférieur.
- Exemple : `(2.9).floor()` retourne `2`.

### `isEmpty()`

`number.isEmpty(): boolean`

- Retourne vrai si le nombre n'est pas présent.
- Exemple : `5.isEmpty()` retourne `false`.

### `round()`

`number.round(digits: number): number`

- Arrondit le nombre à l'entier le plus proche.
- Optionnellement, fournissez un paramètre `digits` pour arrondir à ce nombre de décimales.
- Exemple : `(2.5).round()` retourne `3`, et `(2.3333).round(2)` retourne `2.33`.

### `toFixed()`

`number.toFixed(precision: number): string`

- `precision` est le nombre de décimales.
- Retourne une chaîne avec le nombre en notation à virgule fixe.
- Exemple : `(3.14159).toFixed(2)` retourne `"3.14"`.

## Liste

Fonctions utilisables avec une liste ordonnée d'éléments telle que `[1, 2, 3]`.

### Champs

| Champ         | Type     | Description                            |
| ------------- | -------- | -------------------------------------- |
| `list.length` | `number` | Le nombre d'éléments dans la liste     |

### `contains()`

`list.contains(value: any): boolean`

- `value` est l'élément à rechercher.
- Retourne vrai si la liste contient `value`.
- Exemple : `[1,2,3].contains(2)` retourne `true`.

### `containsAll()`

`list.containsAll(...values: any): boolean`

- `values` sont un ou plusieurs éléments à rechercher.
- Retourne vrai si la liste contient toutes les `values`.
- Exemple : `[1,2,3].containsAll(2,3)` retourne `true`.

### `containsAny()`

`list.containsAny(...values: any): boolean`

- `values` sont un ou plusieurs éléments à rechercher.
- Retourne vrai si la liste contient au moins une des `values`.
- Exemple : `[1,2,3].containsAny(3,4)` retourne `true`.

### `filter()`

`list.filter(value: Boolean): list`

- Filtre les éléments de cette liste en appelant une fonction de filtre, qui utilise les variables `index` et `value`, et retourne une valeur booléenne indiquant si l'élément doit être conservé.
- `value` est la valeur d'un élément de la liste.
- `index` est l'index de la valeur courante.
- Exemple : `[1,2,3,4].filter(value > 2)` retourne `[3,4]`.

### `flat()`

`list.flat(): list`

- Aplatit une liste imbriquée en une seule liste.
- Exemple : `[1,[2,3]].flat()` retourne `[1,2,3]`.

### `isEmpty()`

`list.isEmpty(): boolean`

- Retourne vrai si la liste n'a aucun élément.
- Exemple : `[1,2,3].isEmpty()` retourne `false`.

### `join()`

`list.join(separator: string): string`

- `separator` est la chaîne à insérer entre les éléments.
- Joint tous les éléments de la liste en une seule chaîne.
- Exemple : `[1,2,3].join(",")` retourne `"1,2,3"`.

### `map()`

`list.map(value: Any): list`

- Transforme chaque élément de cette liste en appelant une fonction de conversion, qui utilise les variables `index` et `value`, et retourne la nouvelle valeur à placer dans la liste.
- `value` est la valeur d'un élément de la liste.
- `index` est l'index de la valeur courante.
- Exemple : `[1,2,3,4].map(value + 1)` retourne `[2,3,4,5]`.

### `reduce()`

`list.reduce(expression: Any, acc: Any): Any`

- Réduit les éléments de cette liste en une seule valeur en exécutant une expression pour chaque élément. L'expression peut utiliser les variables `index`, `value` et `acc` (l'accumulateur), et doit retourner la prochaine valeur de l'accumulateur.
- `expression` est évaluée pour chaque élément de la liste.
- `value` est la valeur de l'élément courant de la liste.
- `index` est l'index de l'élément courant.
- `acc` est la valeur accumulée jusqu'ici.
- Exemple (somme) : `[1,2,3].reduce(acc + value, 0)` retourne `6`.
- Exemple (max) : `values.filter(value.isType("number")).reduce(if(acc == null || value > acc, value, acc), null)` retourne le plus grand nombre, ou `null` s'il n'y en a aucun.

### `reverse()`

`list.reverse(): list`

- Inverse la liste sur place.
- Exemple : `[1,2,3].reverse()` retourne `[3,2,1]`.

### `slice()`

`list.slice(start: number, end?: number): list`

- `start` est l'index de début inclusif.
- `end` est l'index de fin exclusif optionnel.
- Retourne une copie superficielle d'une portion de la liste de `start` (inclusif) à `end` (exclusif).
- Exemple : `[1,2,3,4].slice(1,3)` retourne `[2,3]`.
- Si `end` est omis, extrait jusqu'à la fin de la liste.

### `sort()`

`list.sort(): list`

- Trie les éléments de la liste du plus petit au plus grand.
- Exemple : `[3, 1, 2].sort()` retourne `[1, 2, 3]`.
- Exemple : `["c", "a", "b"].sort()` retourne `["a", "b", "c"]`.

### `unique()`

`list.unique(): list`

- Supprime les éléments en double.
- Exemple : `[1,2,2,3].unique()` retourne `[1,2,3]`.

## Lien

Fonctions utilisables sur un lien. Les liens peuvent être créés à partir d'un fichier (`file.asLink()`) ou d'un chemin (`link("path")`).

### `asFile()`

`link.asFile(): file`

- Retourne un objet fichier si le lien fait référence à un fichier local valide.
- Exemple : `link("[[filename]]").asFile()`

### `linksTo()`

`link.linksTo(file): boolean`

- Retourne si le fichier représenté par le `link` possède un lien vers `file`.

## Fichier

Fonctions utilisables avec un fichier du coffre.

### Champs

Les champs suivants sont disponibles pour les fichiers :

| Champ             | Type     | Description                                                        |
| ----------------- | -------- | ------------------------------------------------------------------ |
| `file.name`       | `string` | Le nom de ce fichier.                                              |
| `file.basename`   | `string` | Le nom de ce fichier sans l'extension.                             |
| `file.path`       | `string` | Le chemin complet vers ce fichier, relatif à la racine du coffre.  |
| `file.folder`     | `string` | Le chemin complet vers le dossier parent.                          |
| `file.ext`        | `string` | L'extension de ce fichier.                                         |
| `file.size`       | `number` | La taille de ce fichier, en octets.                                |
| `file.properties` | `object` | Les propriétés de la note pour ce fichier.                         |
| `file.tags`       | `list`   | Les mots-clés de ce fichier. Inclut les mots-clés en ligne.       |
| `file.links`      | `list`   | Les liens internes dans ce fichier.                                |
| `file.ctime`      | `date`   | Horodatage de la création de ce fichier.                           |
| `file.mtime`      | `date`   | Horodatage de la dernière modification de ce fichier.              |

### `asLink()`

`file.asLink(display?: string): Link`

- `display` texte d'affichage optionnel pour le lien.
- Retourne un objet Link qui s'affiche comme un lien fonctionnel.
- Exemple : `file.asLink()`

### `hasLink()`

`file.hasLink(otherFile: file | string): boolean`

- `otherFile` est un autre objet fichier ou un chemin sous forme de chaîne à vérifier.
- Retourne vrai si `file` a un lien vers `otherFile`.
- Exemple : `file.hasLink(otherFile)` retourne `true` s'il existe un lien de `file` vers `otherFile`.

### `hasProperty()`

`file.hasProperty(name: string): boolean`

- Retourne vrai si la note possède la propriété de fichier donnée.

### `hasTag()`

`file.hasTag(...values: string): boolean`

- `values` sont un ou plusieurs noms de mots-clés.
- Retourne vrai si le fichier possède l'un des mots-clés dans `values`.
- Exemple : `file.hasTag("tag1", "tag2")` retourne `true` si le fichier possède le mot-clé `#tag1` ou `#tag2`. Cela inclut également tous les [[Étiquettes#Nested tags|mots-clés imbriqués]], tels que `#tag1/a` ou `#tag2/b`.

### `inFolder()`

`file.inFolder(folder: string): boolean`

- `folder` est le nom du dossier à vérifier.
- Retourne vrai si le fichier se trouve dans le dossier spécifié ou l'un de ses sous-dossiers.
- Exemple : `file.inFolder("notes")` retourne `true`.

## Objet

Fonctions utilisables avec une collection de paires clé-valeur telle que `{"a": 1, "b": 2}`.

### `isEmpty()`

`object.isEmpty(): boolean`

- Retourne vrai si l'objet n'a pas de propriétés propres.
- Exemple : `{}.isEmpty()` retourne `true`.

### `keys()`

`object.keys(): list`

- Retourne une liste contenant les clés de l'objet.

### `values()`

`object.values(): list`

- Retourne une liste contenant les valeurs de l'objet.

## Expression régulière

Fonctions utilisables avec un motif d'expression régulière. Exemple : `/abc/`.

### `matches()`

`regexp.matches(value: string): boolean`

- `value` est la chaîne à tester.
- Retourne vrai si l'expression régulière correspond à `value`.
- Exemple : `/abc/.matches("abcde")` retourne `true`.
