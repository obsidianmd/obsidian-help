---
permalink: web-clipper/highlight
aliases:
  - Plugins/Web Clipper/Surligner du contenu
  - Highlight web pages
localized: '2026-03-18'
---
[[Introduction à Obsidian Web Clipper|Web Clipper]] vous permet de surligner du texte sur des pages web, et de sélectionner les éléments que vous souhaitez enregistrer dans Obsidian. Vos surlignages sont sauvegardés, ce qui vous permet de les retrouver lorsque vous retournez sur une page.

Les surlignages peuvent être [[Capturer des pages web|capturés]] et enregistrés dans Obsidian lorsque vous ouvrez l'extension.

## Activer le surligneur

Vous pouvez activer le surlignage de plusieurs manières, selon votre navigateur :

- L'icône du surligneur dans le panneau de l'extension.
- Les raccourcis clavier, pour activer l'extension depuis votre clavier.
- Le menu contextuel, en faisant un clic droit sur la page web que vous visitez.

Une fois le surlignage activé, vous pouvez sélectionner du texte, des images et des éléments que vous souhaitez surligner.

## Paramètres du surligneur

Vous pouvez modifier le comportement du surligneur en accédant aux paramètres de Web Clipper. Vous pouvez également y exporter vos surlignages dans un fichier `.json`.

Il existe trois options pour l'insertion des surlignages dans votre note capturée via la [[Variables|variable]] `{{content}}` :

- **Surligner le contenu de la page** — ajoute les surlignages directement dans le texte avec la [[Obsidian Flavored Markdown|syntaxe]] `==surlignage==`.
- **Remplacer le contenu de la page** — renvoie une liste de surlignages, sans le contenu de la page.
- **Ne rien faire** — renvoie le contenu original sans surlignages.

Vous pouvez ajouter des surlignages directement dans votre modèle en utilisant la variable `{{highlights}}`, par exemple :

```
{{highlights|map: item => item.text|join:"\n\n"}}
```
