---
permalink: web-clipper/highlight
aliases:
  - Modules/Web Clipper/Surligner du contenu
  - Plugins/Web Clipper/Surligner du contenu
  - Surligner des pages web
localized: '2026-03-18'
---
[[Introduction à Obsidian Web Clipper|Web Clipper]] vous permet de surligner du texte sur des pages web, et de sélectionner les éléments que vous souhaitez enregistrer dans Obsidian. Les surlignages sont sauvegardés, ce qui vous permet de les retrouver lorsque vous retournez sur une page.

Les surlignages peuvent être enregistrés dans Obsidian en utilisant l'extension. Vous pouvez définir les options du surligneur dans les paramètres de l'extension.

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/f2674kdaot?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>

## Utiliser le surligneur

Le surligneur peut être utilisé sur des pages web en direct ou dans le [[Lecteur|Lecteur]]. Dans la vue Lecteur, créer une sélection de texte vous donne la possibilité de le surligner.

Vous pouvez également ajouter automatiquement des sélections à vos surlignages, en activant le surligneur :

- ![[lucide-highlighter.svg#icon]] **Icône du surligneur** dans le panneau de l'extension ou la barre d'outils du Lecteur.
- **Raccourci clavier** personnalisable dans les paramètres de l'extension.
- **Menu contextuel** en faisant un clic droit sur la page web que vous visitez.

Une fois le surligneur activé, tout texte, image ou élément sélectionné sera ajouté à vos surlignages. Toutes les méthodes ci-dessus vous permettent également de quitter le surligneur.

## Ajouter des surlignages aux notes

Il existe trois options pour l'insertion des surlignages dans vos notes capturées :

- **Surligner le contenu de la page** — ajoute les surlignages directement dans le texte avec la [[Obsidian Flavored Markdown|syntaxe]] `==surlignage==`.
- **Remplacer le contenu de la page** — renvoie une liste de surlignages, sans le contenu de la page.
- **Ne rien faire** — renvoie le contenu original sans surlignages.
 
Ces options modifient la [[Variables|variable]] `{{content}}` dans votre modèle. Vous pouvez également ajouter des surlignages directement dans votre modèle en utilisant la variable `{{highlights}}`, par exemple :

```
{{highlights|map: item => item.text|join:"\n\n"}}
```

## Voir et rechercher des surlignages

Tous les surlignages que vous créez peuvent être consultés dans votre page Surlignages. Vous pouvez ouvrir cette page en allant dans **Paramètres** → **Surligneur**.

## Exporter des surlignages

Les surlignages peuvent être exportés dans un fichier `.json`, soit dans la page Paramètres, soit dans la page Surlignages.
