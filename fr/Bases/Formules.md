---
permalink: formulas
description: >-
  Les formules vous permettent de créer des propriétés calculées à partir des
  données d'autres propriétés. Vous pouvez effectuer des calculs, manipuler du
  texte, travailler avec des dates, et bien plus encore.
localized: '2026-03-18'
aliases:
  - Formulas
---
Les formules vous permettent de créer des propriétés calculées dans les [[Introduction aux Bases|Bases]] en utilisant les données d'autres [[Propriétés|propriétés]]. Vous pouvez effectuer des calculs, manipuler du texte, travailler avec des dates, et bien plus encore.

## Ce que les formules peuvent faire

Les formules peuvent vous aider à :

- **Calculer des valeurs**, additionner des prix, calculer des totaux ou effectuer des opérations mathématiques.
- **Manipuler du texte**, combiner des chaînes de caractères, modifier la casse ou extraire des sous-chaînes.
- **Travailler avec des dates**, calculer des différences de temps, formater des dates ou déterminer des échéances.
- **Appliquer de la logique**, utiliser des instructions conditionnelles pour afficher différentes valeurs.
- **Traiter des listes**, filtrer, trier, transformer ou agréger des données de listes.

## Créer une propriété de formule

Pour créer une propriété de formule :

1. Dans votre base, cliquez sur **Propriétés** dans la barre d'outils.
2. Cliquez sur **Ajouter une formule** en bas du menu.
3. Saisissez un nom pour votre propriété de formule.
4. Tapez votre formule dans le champ **Formule**.
5. Fermez la boîte de dialogue.

L'éditeur de formule proposera la complétion automatique des noms de [[Fonctions|fonctions]] et de propriétés au fur et à mesure que vous tapez pour valider la syntaxe de votre formule. Une coche verte apparaît lorsque votre formule est valide.

Une fois créée, vous pouvez utiliser une propriété de formule comme n'importe quelle autre propriété dans votre base. Ajoutez-la aux [[Vues|vues]], utilisez-la dans les filtres, triez par celle-ci, et bien plus encore.

## Écrire une formule

Dans l'éditeur de formule, tapez une expression utilisant des propriétés, des opérateurs et des fonctions.

### Référencer des propriétés

Vous pouvez référencer différents types de propriétés dans vos formules :

- **Propriétés de note** — Propriétés issues des [[Propriétés|métadonnées]] d'une note.
- **Propriétés de fichier** — Propriétés intégrées comme `file.name`, `file.size` ou `file.mtime`.
- **Propriétés de formule** — Autres formules via `formula.nom_de_la_formule`.

**Exemples :**

- `price * quantity` — multiplier deux propriétés de note
- `file.name + " - " + description` — combiner le nom de fichier avec une propriété de note
- `formula.price_per_unit * 1.1` — utiliser une autre propriété de formule

### Utiliser des opérateurs

Les **opérateurs arithmétiques** effectuent des calculs sur des nombres :

- `price + tax` — addition
- `price - discount` — soustraction
- `price * quantity` — multiplication
- `price / quantity` — division
- `(part / whole) * 100` — utiliser des parenthèses pour l'ordre des opérations

Les **opérateurs de comparaison** comparent des valeurs :

- `price > 100` — supérieur à
- `age < 18` — inférieur à
- `status == "Done"` — égal à
- `status != "Done"` — différent de
- `file.mtime > now() - '7d'` — comparer des dates

Les **opérateurs booléens** combinent des conditions logiques :

- `!completed` — non
- `price > 0 && quantity > 0` — et
- `urgent || important` — ou

En savoir plus dans [[Syntaxe des Bases#Opérateurs|Syntaxe des Bases]].

### Utiliser des fonctions

Les fonctions effectuent des opérations sur des valeurs. Les fonctions disponibles dépendent du type de valeur avec lequel vous travaillez. Consultez la liste complète des [[Fonctions]].

**Catégories courantes de fonctions :**

- **Fonctions globales** — `if()`, `now()`, `date()`, `link()`, `max()`, `min()`
- **Fonctions de chaînes** — `contains()`, `replace()`, `split()`, `lower()`, `title()`
- **Fonctions numériques** — `round()`, `ceil()`, `floor()`, `abs()`, `toFixed()`
- **Fonctions de dates** — `format()`, `relative()`, `date()`, `time()`
- **Fonctions de listes** — `filter()`, `map()`, `sort()`, `join()`, `unique()`

**Exemples :**

- `if(price, "$" + price.toFixed(2), "")` pour définir une condition avec un formatage numérique.
- `file.name.lower()` pour convertir en minuscules.
- `tags.contains("urgent")` pour vérifier si la liste de mots-clés contient une valeur.
- `due_date.format("YYYY-MM-DD")` pour formater une date.

## Exemples de formules

### Calculer une échéance

Définir la date d'échéance d'un projet à 2 semaines après la date de début :

```js
start_date + "2w"
```

### Afficher le statut de retard

Afficher « En retard » si la date d'échéance est dépassée et que le statut n'est pas « Done » :

```js
if(due_date < now() && status != "Done", "Overdue", "")
```

### Formater une devise

Afficher un prix avec 2 décimales et un symbole monétaire :

```js
if(price, "$" + price.toFixed(2), "")
```

### Compter les éléments d'une liste

Compter le nombre d'éléments dans une propriété de liste :

```js
tasks.length
```

### Calculer un score de priorité

Combiner plusieurs facteurs en un score de priorité :

```js
(impact * urgency) / effort
```

### Combiner des champs texte

Créer un nom complet à partir du prénom et du nom de famille :

```js
first_name + " " + last_name
```

### Calculer le coût total

Multiplier le coût mensuel par le nombre de mois de possession :

```js
monthlyUses * formula.Owned.round()
```

## Types de données

Les formules fonctionnent avec différents types de données :

- **Chaînes de caractères** — Texte entre guillemets : `"hello"` ou `'world'`
- **Nombres** — Valeurs numériques : `42`, `3.14`, `(2 + 2)`
- **Booléens** — Vrai ou faux : `true`, `false`
- **Dates** — Créées avec `date()`, `today()` ou `now()`
- **Listes** — Collections de valeurs : `[1, 2, 3]`
- **Objets** — Paires clé-valeur : `{"name": "value"}`

Le type de sortie d'une formule est déterminé par les données et les fonctions utilisées.

## Référencer d'autres formules

Les formules peuvent référencer d'autres formules, créant ainsi des calculs dérivés. Par exemple, si vous avez une formule appelée `price_per_unit` :

```js
price / quantity
```

Vous pouvez la référencer dans une autre formule :

```js
formula.price_per_unit * 1.1
```

> [!warning] Évitez les références circulaires
> Une formule ne peut pas se référencer elle-même directement ou indirectement à travers d'autres formules.
