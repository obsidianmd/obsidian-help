---
permalink: obsidian-flavored-markdown
description: Découvrez le Markdown à la sauce Obsidian, y compris les extensions prises en charge et la manière dont le Markdown interagit avec les éléments HTML.
publish: true
mobile: true
localized: '2026-03-18'
---
Obsidian s'efforce d'offrir un maximum de fonctionnalités sans casser les formats existants. Par conséquent, nous utilisons une combinaison de variantes de [[Syntaxe de mise en forme de base|Markdown]].

Obsidian prend en charge [CommonMark](https://commonmark.org/), [GitHub Flavored Markdown](https://github.github.com/gfm/) et [LaTeX](https://www.latex-project.org/).

> [!tip]- Markdown à l'intérieur du HTML
> Obsidian n'interprète pas la syntaxe Markdown à l'intérieur des éléments HTML. Il s'agit d'un choix de conception intentionnel pour optimiser les performances et maintenir une faible complexité de l'analyseur lors de la gestion de documents volumineux.
>
> Par exemple, la mise en forme Markdown comme `**gras**` ou `` `code` `` ne sera pas traitée à l'intérieur des balises `<div>`, `<span>`, `<table>` ou de toute autre balise HTML.
>
> ```md
> <div>
> Ceci **ne sera pas** en gras.
> </div>
> ```

### Extensions Markdown prises en charge

| Syntaxe         | Description                                                                          |
| --------------- | ------------------------------------------------------------------------------------ |
| `[[Lien]]`      | [[Liens internes]]                                                                   |
| `![[Lien]]`     | [[Incorporer des fichiers]]                                                          |
| `![[Lien#^id]]` | [[Liens internes#Lier un bloc dans une note\|Références de blocs]]                   |
| `^id`           | [[Liens internes#Lier un bloc dans une note\|Définir un bloc]]                       |
| `[^id]`         | [[Syntaxe de mise en forme de base#Notes de bas de page\|Notes de bas de page]]      |
| `%%Texte%%`     | [[Syntaxe de mise en forme de base#Commentaires\|Commentaires]]                      |
| `~~Texte~~`     | [[Syntaxe de mise en forme de base#Gras, italique, surlignage\|Barré]]               |
| `==Texte==`     | [[Syntaxe de mise en forme de base#Gras, italique, surlignage\|Surlignage]]          |
| `` ``` ``       | [[Syntaxe de mise en forme de base#Blocs de code\|Blocs de code]]                    |
| `- [ ]`         | [[Syntaxe de mise en forme de base#Listes de tâches\|Tâche incomplète]]              |
| `- [x]`         | [[Syntaxe de mise en forme de base#Listes de tâches\|Tâche complétée]]               |
| `> [!note]`     | [[Callouts]]                                                                         |
| (voir le lien)  | [[Syntaxe de mise en forme avancée#Tableaux\|Tableaux]]                              |
