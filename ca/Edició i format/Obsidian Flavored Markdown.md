---
permalink: obsidian-flavored-markdown
publish: true
mobile: true
description: 'Apreneu sobre el Markdown amb sabor d''Obsidian, incloent-hi les extensions compatibles i com el Markdown interactua amb els elements HTML.'
---
Obsidian aspira a la màxima capacitat sense trencar cap format existent. Com a resultat, fem servir una combinació de variants de [[Sintaxi de format bàsic|Markdown]].

Obsidian és compatible amb [CommonMark](https://commonmark.org/), [GitHub Flavored Markdown](https://github.github.com/gfm/) i [LaTeX](https://www.latex-project.org/).

> [!tip]- Markdown dins d'HTML
> Obsidian no renderitza la sintaxi Markdown dins d'elements HTML. Aquesta és una decisió de disseny intencionada per a l'optimització del rendiment i per mantenir baixa la complexitat de l'analitzador quan es gestionen documents grans.
>
> Per exemple, el format Markdown com `**bold**` o `` `code` `` no es processarà dins de `<div>`, `<span>`, `<table>`, ni cap altra etiqueta HTML.
>
> ```md
> <div>
> This **will not** be bold.
> </div>
> ```

### Extensions de Markdown compatibles

| Sintaxi         | Descripció                                                                       |
| --------------- | -------------------------------------------------------------------------------- |
| `[[Enllaç]]`    | [[Enllaços interns]]                                                             |
| `![[Enllaç]]`   | [[Incrustar fitxers]]                                                            |
| `![[Enllaç#^id]]` | [[Enllaços interns#Enllaça a un bloc en una nota\|Referències a blocs]]        |
| `^id`           | [[Enllaços interns#Enllaça a un bloc en una nota\|Definir un bloc]]              |
| `[^id]`         | [[Sintaxi de format bàsic#Notes a peu de pàgina\|Notes a peu de pàgina]]        |
| `%%Text%%`      | [[Sintaxi de format bàsic#Comentaris\|Comentaris]]                               |
| `~~Text~~`      | [[Sintaxi de format bàsic#Negreta, cursiva, ressaltats\|Ratllats]]               |
| `==Text==`      | [[Sintaxi de format bàsic#Negreta, cursiva, ressaltats\|Ressaltats]]             |
| `` ``` ``       | [[Sintaxi de format bàsic#Blocs de codi\|Blocs de codi]]                        |
| `- [ ]`         | [[Sintaxi de format bàsic#Llistes de tasques\|Tasca incompleta]]                 |
| `- [x]`         | [[Sintaxi de format bàsic#Llistes de tasques\|Tasca completada]]                 |
| `> [!note]`     | [[Destacats]]                                                                    |
| (veure enllaç)  | [[Sintaxi de format avançat#Taules\|Taules]]                                     |
