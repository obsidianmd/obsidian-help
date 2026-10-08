---
permalink: import/templates
description: 'Personnalisez le nom de la note, les propriétés et le contenu créés par Importer.'
---
[[Importateur depuis des fichiers Markdown|L'importateur]] vous permet de définir des modèles qui contrôlent la façon dont vos notes sont importées depuis d'autres applications. Cela signifie que vous pouvez modifier le titre, les propriétés et le contenu des notes que vous importez.

## Éditer le modèle d'import

Sélectionnez **Éditer** au-dessus de l'aperçu pour modifier le modèle par défaut. Vous pouvez éditer :

- Le nom de la note affiché comme titre en ligne.
- Les propriétés au début de la note.
- Le contenu Markdown de la note.

Sélectionnez **Sauvegarder** pour revenir à l'aperçu. L'importateur mémorise un modèle en ligne modifié pour les imports futurs utilisant le même format.

Vous pouvez également charger un modèle depuis un fichier Markdown dans le coffre actuel.

## Prévisualiser les résultats

L'aperçu affiche jusqu'à dix échantillons à partir des données que vous avez sélectionnées. Utilisez les boutons fléchés pour naviguer entre les échantillons. Les modifications apportées aux paramètres d'import et au modèle mettent à jour l'aperçu avant que quoi que ce soit ne soit ajouté à votre coffre.

Certaines pièces jointes, éléments distants et références entre notes ne peuvent pas être entièrement résolus avant l'exécution de l'import. Dans ces cas, l'aperçu peut conserver le lien source ou afficher un espace réservé.

## Syntaxe des modèles

Les modèles de l'importateur utilisent une syntaxe composée de variables, de [[Filtres]] et de [[Logique]]. Elle utilise la même syntaxe [Knap](https://github.com/obsidianmd/knap) qu'[[Introduction à Obsidian Web Clipper|Obsidian Web Clipper]].

Insérez des variables avec des doubles accolades, comme `{{title}}`, `{{content}}` ou `{{date}}`. Les variables peuvent être utilisées dans le nom de la note, les propriétés et le contenu.

Vous pouvez modifier les variables à l'aide de [[Filtres]]. Par exemple, pour changer le format de date en utilisant `{{date|date:"YYYY-MM-DD"}}`. Utilisez la [[Logique]] pour des conditions, boucles et assignations de variables plus avancées.

## Variables

Les variables suivantes sont disponibles dans tout modèle de l'importateur :

| Variable         | Description                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------------- |
| `{{body}}`       | Corps Markdown sans propriétés (pas de métadonnées).                                                             |
| `{{content}}`    | Markdown complet avant l'application du modèle sélectionné.                                                     |
| `{{ctime}}`      | Horodatage de création source au format ISO 8601 ; vide lorsque non disponible.                                  |
| `{{date}}`       | Date et heure actuelles au moment du rendu du modèle, sous forme d'horodatage ISO 8601.                         |
| `{{importer}}`   | Identifiant de l'importateur, comme `keep`, `html` ou `notion-api`.                                             |
| `{{folder}}`     | Dossier parent final relatif au coffre. Vide lorsque la note est à la racine du coffre.                          |
| `{{mtime}}`      | Horodatage de modification source au format ISO 8601 ; vide lorsque non disponible.                              |
| `{{noteName}}`   | Nom final résolu de la note, après suppression des caractères invalides et ajout de suffixes pour les doublons.  |
| `{{path}}`       | Chemin final relatif au coffre, incluant l'extension `.md`.                                                      |
| `{{properties}}` | Objet contenant les propriétés des métadonnées.                                                                  |
| `{{source}}`     | Objet contenant les propriétés générées et les valeurs spécifiques à la source.                                  |
| `{{sourceId}}`   | Identifiant source stable lorsque l'importateur en fournit un ; sinon vide.                                     |
| `{{time}}`       | Alias pour `{{date}}`.                                                                                           |
| `{{title}}`      | Titre original de la note avant nettoyage et dédoublonnage.                                                      |

## Valeurs source pour les propriétés

Pour les formats d'import qui prennent en charge les [[Propriétés]], les valeurs source sont également disponibles comme variables de premier niveau pour plus de commodité.

Si une valeur source porte le même nom qu'une variable partagée, accédez-y via `{{source}}`. Par exemple, si votre source d'import possède une propriété nommée `content`, elle est disponible via `{{source.content}}`, tandis que `{{content}}` reste la variable par défaut de l'importateur.

Utilisez la notation entre crochets lorsqu'un nom de champ contient des espaces, de la ponctuation ou d'autres caractères spéciaux :

```twig
{{source["Project: status"]}}
```

## Exemple de modèle

Voici un exemple de modèle utilisant des variables et des [[Filtres]] :

```twig
---
created: {{ctime | date:"YYYY-MM-DD"}}
modified: {{mtime | date:"YYYY-MM-DD"}}
source: {{importer}}
---
# {{title}}

{{body}}
```

Vous pouvez ajouter des données dans une note de manière conditionnelle en utilisant la [[Logique]] :

```twig
{% if tags %}
## Mots-clés
{% for tag in tags %}
- {{tag}}
{% endfor %}
{% endif %}
```
