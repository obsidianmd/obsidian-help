---
permalink: bases/syntax
description: This page provides an introduction to Bases syntax in Obsidian.
publish: true
mobile: true
localized: '2026-03-18'
aliases:
  - Bases syntax
---
Lorsque vous [[Créer une base|créez une base]] dans Obsidian, elle est enregistrée sous forme de fichier `.base`. Les bases sont généralement éditées via l'interface de l'application, mais la syntaxe peut aussi être modifiée manuellement et intégrée dans un bloc de code.

La syntaxe des [[Introduction aux Bases|bases]] définit les [[Vues|vues]], les filtres et les [[Formules|formules]]. Les bases doivent être du YAML valide conforme au schéma défini ci-dessous.

## Exemple

Voici un exemple de fichier base. Nous allons parcourir chaque section en détail.

```yaml
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
summaries:
  customAverage: 'values.mean().round(3)'
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

### Filtres

Par défaut, une base inclut chaque fichier du coffre. Il n'y a pas de `from` ou `source` comme en SQL ou Dataview. La section `filters` vous permet de définir des conditions pour restreindre l'ensemble de données.

```yaml
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
```

Il y a deux possibilités pour appliquer des filtres :

1. Au niveau global `filters` (montré ci-dessus) où ils s'appliquent à toutes les vues de la base.
2. Au niveau de la `view` où ils s'appliquent uniquement à une vue spécifique.

Ces deux sections sont fonctionnellement équivalentes et lors de l'évaluation pour une vue, elles seront concaténées avec un `AND`.

La section `filters` contient soit une instruction de filtre unique sous forme de chaîne, soit un objet filtre défini de manière récursive. Les objets filtre peuvent contenir l'un des éléments `and`, `or` ou `not`. Ces clés sont une liste hétérogène d'autres objets filtre ou d'instructions de filtre sous forme de chaînes. Une instruction de filtre est une ligne qui s'évalue comme vraie ou fausse lorsqu'elle est appliquée à une note. Elle peut être l'une des suivantes :

- Une comparaison basique utilisant les opérateurs arithmétiques standards.
- Une fonction. Diverses [[Fonctions|fonctions]] sont intégrées, et les modules peuvent ajouter des fonctions supplémentaires.

La syntaxe et les fonctions disponibles pour les filtres et les formules sont les mêmes.

### Formules

La section `formulas` définit les [[Formules|propriétés de formule]] qui peuvent être affichées dans toutes les vues du fichier base.

```yaml
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
```

Les propriétés de formule prennent en charge les opérateurs arithmétiques basiques et diverses [[Fonctions|fonctions]] intégrées. À l'avenir, les modules pourront ajouter des fonctions utilisables dans les formules.

Vous pouvez référencer les propriétés de différentes manières selon leur type :

- Les **propriétés de note** sont des propriétés définies dans les métadonnées de la note. Par exemple `note.price` ou `note["price"]`.  
  Si aucun préfixe n'est spécifié, la propriété est supposée être une propriété de `note`.
- Les **propriétés de fichier** décrivent le fichier lui-même.  
  Par exemple `file.size` ou `file.ext`. Vous pouvez également référencer l'objet fichier directement, par ex. `file.hasLink()`.
- Les **propriétés de formule** sont d'autres formules de la base.  
  Exemple `formula.formatted_price`.

Une formule peut utiliser des valeurs provenant d'autres propriétés de formule, tant qu'il n'y a pas de référence circulaire.  

Les propriétés de formule sont toujours stockées sous forme de chaînes en YAML, mais leur **type de données de sortie** réel est déterminé par le type des données sous-jacentes et la valeur de retour des fonctions utilisées.

Notez que l'utilisation de guillemets imbriqués est nécessaire pour inclure des littéraux textuels dans le champ YAML. Les littéraux textuels doivent être encadrés par des guillemets simples ou doubles.

### Propriétés

La section `properties` permet de stocker des informations de configuration pour chaque propriété. C'est à la vue individuelle de décider comment utiliser ces valeurs de configuration. Par exemple, dans les tableaux, le nom d'affichage est utilisé pour les en-têtes de colonnes.

```yaml
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
```

Les noms d'affichage ne sont pas utilisés dans les filtres ou les formules.

### Résumés

La section `summaries` peut être utilisée pour définir des formules de résumé personnalisées. En plus de définir des formules de résumé ici, plusieurs formules de résumé par défaut sont disponibles.

```yaml
summaries:
  customAverage: 'values.mean().round(3)'
```

Dans cet exemple, la formule `customAverage` est la même que la formule `Average` par défaut, sauf que la valeur est arrondie à un nombre de décimales différent. Dans les formules de résumé, le mot-clé `values` est une liste contenant toutes les valeurs de cette propriété pour chaque note de l'ensemble de résultats. La formule de résumé doit retourner une seule `Value`.

Notez que cette section `summaries` est différente de la section `summaries` dans la configuration de la vue (expliquée ci-dessous) où les formules de résumé sont assignées à des propriétés spécifiques.

#### Formules de résumé par défaut

| Nom       | Type d'entrée | Description                                                           |
| --------- | ------------- | --------------------------------------------------------------------- |
| Average   | Nombre        | La moyenne mathématique de tous les nombres des valeurs d'entrée.     |
| Min       | Nombre        | Le plus petit nombre des valeurs d'entrée.                            |
| Max       | Nombre        | Le plus grand nombre des valeurs d'entrée.                            |
| Sum       | Nombre        | La somme de tous les nombres de l'entrée.                             |
| Range     | Nombre        | La différence entre `Max` et `Min`.                                   |
| Median    | Nombre        | La médiane mathématique de tous les nombres des valeurs d'entrée.     |
| Stddev    | Nombre        | L'écart type de tous les nombres des valeurs d'entrée.                |
| Earliest  | Date          | La date la plus ancienne des valeurs d'entrée.                        |
| Latest    | Date          | La date la plus récente des valeurs d'entrée.                         |
| Range     | Date          | La différence entre `Latest` et `Earliest`.                           |
| Checked   | Booléen       | Le nombre de valeurs `true`.                                          |
| Unchecked | Booléen       | Le nombre de valeurs `false`.                                         |
| Empty     | Tout          | Le nombre de valeurs vides dans l'entrée.                             |
| Filled    | Tout          | Le nombre de valeurs non vides dans l'entrée.                         |
| Unique    | Tout          | Le nombre de valeurs uniques dans l'entrée.                           |

### Vues

La section `views` définit comment les données peuvent être rendues. Chaque entrée dans la liste `views` définit une vue distincte des mêmes données, et il peut y avoir autant de vues différentes que nécessaire.

```yaml
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

- `type` sélectionne parmi les types de vues intégrés et ceux ajoutés par les modules.
- `name` est le nom d'affichage, et peut être utilisé pour définir la vue par défaut.
- `filters` sont exactement les mêmes que ceux décrits ci-dessus, mais s'appliquent uniquement à la vue.
- `groupBy` spécifie une propriété et un sens de tri. La valeur de la propriété spécifiée pour chaque ligne est utilisée pour placer la ligne dans des groupes.
- `summaries` associe les noms de propriétés à un résumé nommé. Les résumés effectuent une agrégation sur la propriété pour toutes les lignes.

Les [[Vues|vues]] peuvent ajouter des données supplémentaires pour stocker toute information nécessaire au maintien de l'état ou au rendu correct, cependant les auteurs de modules doivent veiller à ne pas utiliser de clés déjà utilisées par le module principal Bases. À titre d'exemple, une vue de type tableau peut utiliser cela pour limiter le nombre de lignes ou pour sélectionner quelle colonne est utilisée pour trier les lignes et dans quelle direction. Un type de vue différent comme une carte pourrait utiliser cela pour définir quelle propriété de la note correspond à la latitude et la longitude et quelle propriété devrait être affichée comme titre de l'épingle.

À l'avenir, l'API permettra aux vues de lire et d'écrire ces valeurs, permettant à la vue de construire sa propre interface de configuration.

## Propriétés

Il existe trois types de propriétés utilisées dans les bases :

1. Les **propriétés de note**, stockées dans les métadonnées des fichiers Markdown.
2. Les **propriétés de fichier**, accessibles pour tous les types de fichiers.
3. Les **propriétés de formule**, définies dans le fichier `.base` lui-même (voir ci-dessus).

### Propriétés de note

Les [[Propriétés|propriétés de note]] ne sont disponibles que pour les fichiers Markdown, et sont stockées dans les métadonnées YAML de chaque note. Ces propriétés sont accessibles en utilisant le format `note.author` ou simplement `author` comme raccourci.

### Propriétés de fichier

Les propriétés de fichier font référence au fichier actuellement testé ou évalué. Les propriétés de fichier sont disponibles pour tous les [[Formats de fichiers acceptés|types de fichiers]], y compris les pièces jointes.

Par exemple, un filtre `file.ext == "md"` sera vrai pour tous les fichiers Markdown et faux dans les autres cas.

| Propriété     | Type   | Description                                                   |
| ------------- | ------ | ------------------------------------------------------------- |
| `file.backlinks`  | Liste  | Liste des fichiers de liens retour. Note : Cette propriété est gourmande en performances. Lorsque c'est possible, inversez la recherche et utilisez `file.links`. Ne rafraîchit pas automatiquement les résultats lorsque le coffre est modifié. |
| `file.ctime`  | Date   | Date de création                                              |
| `file.embeds` | Liste  | Liste de toutes les intégrations dans la note                 |
| `file.ext`    | Chaîne | Extension du fichier                                          |
| `file.file`   | Fichier| Objet fichier, utilisable uniquement dans des fonctions spécifiques |
| `file.folder` | Chaîne | Chemin du dossier du fichier                                  |
| `file.links`  | Liste  | Liste de tous les liens internes dans la note, y compris les métadonnées |
| `file.mtime`  | Date   | Date de modification                                          |
| `file.name`   | Chaîne | Nom du fichier                                                |
| `file.path`   | Chaîne | Chemin du fichier                                             |
| `file.properties`   | Objet | Toutes les propriétés du fichier. Note : Ne rafraîchit pas automatiquement les résultats lorsque le coffre est modifié. |
| `file.size`   | Nombre | Taille du fichier                                             |
| `file.tags`   | Liste  | Liste de tous les mots-clés dans le contenu du fichier et les métadonnées |

### Accéder aux propriétés avec `this`

Utilisez l'objet `this` pour accéder aux propriétés du fichier. Ce à quoi `this` fait référence dépend de l'endroit où la base est affichée.

Lorsque la base est ouverte dans la zone de contenu principale, `this` pointe vers les propriétés du fichier base lui-même. Par exemple, utiliser `this.file.folder` retourne le chemin du dossier où la base est située.

Lorsque la base est intégrée dans un autre fichier, `this` pointe vers les propriétés du fichier _intégrant_ (la note ou le Canvas qui contient la base). Par exemple, utiliser `this.file.name` retourne le nom du fichier intégrant, pas celui de la base.

Lorsque la base est dans une barre latérale, `this` fait référence au fichier actif dans la zone de contenu principale. Cela vous permet de créer des requêtes basées sur le fichier actif. Par exemple, vous pouvez utiliser `file.hasLink(this.file)` pour reproduire le panneau des liens retour.

## Opérateurs

### Opérateurs arithmétiques

Les opérateurs arithmétiques effectuent des opérations arithmétiques sur les nombres. Par exemple, `radius * (2 * 3.14)`.

| Opérateur | Description    |
| --------- | -------------- |
| `+`       | plus           |
| `-`       | moins          |
| `*`       | multiplication |
| `/`       | division       |
| `%`       | modulo         |
| `( )`     | parenthèses    |

### Arithmétique de dates

Les dates peuvent être modifiées en ajoutant et soustrayant des durées. Les unités de durée acceptent plusieurs formats :

| Unité                    | Durée   |
| ------------------------ | ------- |
| `y`, `year`, `years`     | année   |
| `M`, `month`, `months`   | mois    |
| `d`, `day`, `days`       | jour    |
| `w`, `week`, `weeks`     | semaine |
| `h`, `hour`, `hours`     | heure   |
| `m`, `minute`, `minutes` | minute  |
| `s`, `second`, `seconds` | seconde |

Pour modifier ou décaler des objets Date, utilisez l'opérateur `+` ou `-` avec une chaîne de durée. Par exemple, `date + "1M"` ajoute 1 mois à la date, tandis que `date - "2h"` soustrait 2 heures de la date.

La [[Fonctions|fonction]] globale `today()` peut être utilisée pour obtenir la date actuelle, et `now()` peut être utilisée pour obtenir la date et l'heure actuelles.

- `now() + "1 day"` retourne une date et heure exactement 24 heures après le moment de l'exécution.
- `file.mtime > now() - "1 week"` retourne `true` si le fichier a été modifié au cours de la dernière semaine.
- `date("2024-12-01") + "1M" + "4h" + "3m"` retourne un objet Date représentant `2025-01-01 04:03:00`.
- Soustrayez deux dates pour obtenir la différence en millisecondes entre les deux, par exemple `now() - file.ctime`.
- Pour obtenir la partie date d'une Date avec heure, utilisez `datetime.date()`.
- Pour formater un objet Date, utilisez la fonction `format()`, par exemple `datetime.format("YYYY-MM-DD")`.

### Opérateurs de comparaison

Les opérateurs de comparaison peuvent être utilisés pour comparer des nombres ou des objets Date. Égal et différent peuvent être utilisés avec tout type de valeur, pas seulement les nombres et les dates.

| Opérateur | Description           |
| --------- | --------------------- |
| `==`      | égal                  |
| `!=`      | différent             |
| `>`       | supérieur à           |
| `<`       | inférieur à           |
| `>=`      | supérieur ou égal à   |
| `<=`      | inférieur ou égal à   |

### Opérateurs booléens

Les opérateurs booléens peuvent être utilisés pour combiner ou inverser des valeurs logiques, donnant une valeur vraie ou fausse.

| Opérateur | Description |
| --------- | ----------- |
| `!`       | non logique |
| `&&`      | et logique  |
| \|\|      | ou logique  |

## Fonctions

Consultez la [[Fonctions|liste des fonctions]] utilisables dans les formules et les [[Vues|filtres]].

## Types

Les bases disposent d'un système de types utilisé par les formules et les filtres pour appliquer des fonctions aux propriétés.

### Chaînes, nombres et booléens

Les chaînes, nombres et booléens sont des valeurs « primitives » qui ne nécessitent pas de fonction pour être créées.

- Les chaînes sont encadrées par des guillemets simples ou doubles, par exemple `"message"`.
- Les nombres sont écrits sous forme de chiffres, et peuvent éventuellement être encadrés par des parenthèses pour plus de clarté. Par exemple, `1` ou `(2.5)`.
- Les booléens s'écrivent `true` ou `false` sans guillemets.

### Dates et durées

Les dates représentent une date spécifique, ou une date et une heure selon la fonction utilisée pour les créer, ou le type qui a été assigné à la [[Propriétés|propriété]].

- Pour construire une date, utilisez la fonction `date`, par exemple `date("2025-01-01 12:00:00")`
- Pour modifier une date, ajoutez ou retirez une durée, par exemple `now() + "1 hour"` ou `today() + "7d"`
- Comparez les dates à l'aide des opérateurs de comparaison (par ex. `>` ou `<`) et des opérateurs arithmétiques (par exemple, `(now() + "1d") - now()` retourne `86400000` millisecondes.)
- Pour extraire des portions d'une date, utilisez les champs disponibles (`now().hour`), ou une fonction utilitaire (`now.time()`).
- De nombreux autres [[Fonctions|champs et fonctions]] sont disponibles sur les objets date.

### Objets et listes

- Transformez un élément unique en liste à l'aide de la fonction `list()`. Ceci est particulièrement utile pour les propriétés qui peuvent contenir un mélange de listes ou de valeurs uniques.
- Accédez aux éléments d'une liste en utilisant des crochets et un index basé sur 0. Par exemple, `property[0]` retourne le premier élément de la liste.
- Accédez aux éléments d'un objet en utilisant des crochets et le nom de l'élément ou la notation par point. Par exemple, `property.subprop` ou `property["subprop"]`.

### Fichiers et liens

Les [[Lier des notes|liens wiki]] dans les [[Propriétés|propriétés de métadonnées]] sont automatiquement reconnus comme des objets Lien. Les liens seront rendus sous forme de lien cliquable dans la [[Vues|vue]].

- Pour construire un lien, utilisez la [[Fonctions|fonction]] globale `link`, par exemple `link("filename")` ou `link("https://obsidian.md")`.
- Vous pouvez créer un lien à partir de n'importe quelle chaîne, par exemple `link(file.ctime.date().toString())`.
- Pour définir le texte d'affichage, passez une chaîne ou une icône optionnelle comme second paramètre, par exemple `link("filename", "display")` ou `link("filename", icon("plus"))`.

Un objet Fichier peut être transformé en lien en utilisant `file.asLink()` avec un texte d'affichage optionnel.

Les liens peuvent être comparés avec `==` et `!=`. Ils sont équivalents tant qu'ils pointent vers le même fichier, ou si le fichier n'existe pas lors de la recherche, leur texte de lien doit être identique.

Les liens peuvent être comparés à des fichiers tels que `file` ou `this`. Ils seront équivalents si le lien résout vers le fichier. Par exemple, `author == this`.

Les liens peuvent aussi être vérifiés dans une recherche de contenu de liste, par exemple `authors.contains(this)`.
