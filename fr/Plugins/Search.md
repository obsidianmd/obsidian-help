# Recherches

![[search.png]]

La recherche est une fonctionnalité puissante et peut prêter à confusion. Dans la plupart des cas, si vous tapez simplement ce que vous voulez trouver, cela fonctionnera. Mais la recherche a de nombreuses fonctionnalités pour se restreindre à trouver exactement ce que vous voulez.

### Recherches complexes

Lorsque vous créez une requête de recherche, n'oubliez pas que cliquer sur "Expliquer le terme de recherche" donnera une explication de ce qui est recherché, ce qui peut être très utile lors du débogage d'une recherche compliquée.

- Les mots de la requête de recherche séparés par un espace seront recherchés indépendamment dans chaque note. Par exemple, `foo bar` trouvera une note qui comprend à la fois` foo` et `bar` n'importe où.
- Les `"chaînes entre guillemets"` peuvent être utilisées pour rechercher plusieurs mots consécutifs séparés par un espace, ou en d'autres termes, une phrase. Ainsi, la recherche de `"foo bar"` avec des guillemets ne trouvera que les notes qui incluent ces mots les uns à côté des autres. Vous pouvez utiliser la barre oblique inverse `\"` pour échapper les guillemets doubles si vous voulez réellement rechercher une chaîne qui comprend des guillemets. Et `\\` fera de même pour la barre oblique inverse.
- Des opérations booléennes peuvent être utilisées. Utilisez `OR` pour faire correspondre l'un ou l'autre. Utilisez `-` pour soustraire une requête. Le caractère espace est utilisé pour le booléen "ET".
	- Par exemple: `foo OR bar` trouvera toutes les notes contenant l'un ou l'autre de ces mots, elles ne doivent pas nécessairement être dans la même note. `foo -bar` trouvera toutes les notes contenant `foo`, mais pas si elles contiennent aussi `bar`.
- Les parenthèses peuvent être utilisées pour regrouper les opérations booléennes. Par exemple `(a OR b) (c OR d)`. Cela peut être utile lors de la création de recherches complexes pour vous assurer que les choses se passent dans l'ordre souhaité.
- Les expressions régulières (regex) peuvent désormais être utilisées dans la recherche. Utilisez une barre oblique pour désigner une expression régulière. Par exemple: `/[a-z]{3}/`.
- Plusieurs opérateurs spéciaux sont disponibles. Certains opérateurs permettent d'imbriquer les requêtes en utilisant des parenthèses, par exemple: `file("to be" OR -"2B")`.
	- `file:` exécutera la sous-requête suivante sur le nom du fichier. Par exemple: `file:".Jpg"`. Si vous utilisez des UID de style Zettelkasten, cela peut être utile pour réduire une plage de temps, par exemple `file:"202007"` pour les fichiers créés en juillet 2020.
	- `path:` exécutera la sous-requête suivante sur le chemin du fichier, absolu depuis la racine. Par exemple: `path:"Daily Notes/2020-07"`.
	- `match-case:` et `ignore-case:` remplaceront la logique de correspondance sensible à la casse pour la sous-requête suivante.

### Paramètres de recherche

Il existe quelques options disponibles lors de la recherche:

- `Collapse results` basculera entre l'affichage des noms de notes correspondants et l'affichage des lignes dans lesquelles les correspondances apparaissent. Ces résultats étendus peuvent être changés pour chaque note en cliquant sur le triangle de pliage à côté du nom du fichier.
- `Match case` bascule la correspondance sensible à la casse, mais notez qu'elle peut être remplacée par recherche en utilisant les opérateurs `match-case:` et `ignore-case:` expliqués ci-dessus.
- `Explain search term` vous montrera ce que fait réellement la requête de recherche en termes simples.
