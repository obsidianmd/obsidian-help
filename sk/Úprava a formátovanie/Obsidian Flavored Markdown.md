---
permalink: obsidian-flavored-markdown
publish: true
mobile: true
description: 'Naučte sa o Obsidian Flavored Markdown, vrátane podporovaných rozšírení a toho, ako Markdown interaguje s HTML prvkami.'
---
Obsidian sa snaží o maximálnu funkcionalitu bez narušenia existujúcich formátov. Preto používame kombináciu rôznych variánt [[Základná syntax formátovania|Markdown]].

Obsidian podporuje [CommonMark](https://commonmark.org/), [GitHub Flavored Markdown](https://github.github.com/gfm/) a [LaTeX](https://www.latex-project.org/).

> [!tip]- Markdown vnútri HTML
> Obsidian nevykresľuje syntax Markdown vnútri HTML elementov. Toto je zámerné rozhodnutie pre optimalizáciu výkonu a udržanie nízkej zložitosti parsera pri správe veľkých dokumentov.
>
> Napríklad formátovanie Markdown ako `**bold**` alebo `` `code` `` nebude spracované vnútri `<div>`, `<span>`, `<table>` ani žiadnych iných HTML značiek.
>
> ```md
> <div>
> This **will not** be bold.
> </div>
> ```

### Podporované rozšírenia Markdown

| Syntax          | Popis                                                                 |
| --------------- | --------------------------------------------------------------------- |
| `[[Link]]`      | [[Interné odkazy]]                                                    |
| `![[Link]]`     | [[Vkladanie súborov]]                                                 |
| `![[Link#^id]]` | [[Interné odkazy#Odkaz na blok v poznámke\|Referencie na bloky]]      |
| `^id`           | [[Interné odkazy#Odkaz na blok v poznámke\|Definovanie bloku]]        |
| `[^id]`         | [[Základná syntax formátovania#Poznámky pod čiarou\|Poznámky pod čiarou]] |
| `%%Text%%`      | [[Základná syntax formátovania#Komentáre\|Komentáre]]                 |
| `~~Text~~`      | [[Základná syntax formátovania#Tučné, kurzíva, zvýraznenia\|Prečiarknutie]] |
| `==Text==`      | [[Základná syntax formátovania#Tučné, kurzíva, zvýraznenia\|Zvýraznenia]] |
| `` ``` ``       | [[Základná syntax formátovania#Bloky kódu\|Bloky kódu]]              |
| `- [ ]`         | [[Základná syntax formátovania#Zoznamy úloh\|Nedokončená úloha]]     |
| `- [x]`         | [[Základná syntax formátovania#Zoznamy úloh\|Dokončená úloha]]       |
| `> [!note]`     | [[Popisy]]                                                            |
| (pozri odkaz)   | [[Rozšírená syntax formátovania#Tabuľky\|Tabuľky]]                   |
