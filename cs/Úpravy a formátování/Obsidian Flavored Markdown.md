---
permalink: obsidian-flavored-markdown
publish: true
mobile: true
description: 'Naučte se o Obsidian Flavored Markdown, včetně podporovaných rozšíření a toho, jak Markdown interaguje s HTML elementy.'
---
Obsidian usiluje o maximální funkčnost bez narušení jakýchkoli existujících formátů. Výsledkem je, že používáme kombinaci různých variant [[Základní syntaxe formátování|Markdown]].

Obsidian podporuje [CommonMark](https://commonmark.org/), [GitHub Flavored Markdown](https://github.github.com/gfm/) a [LaTeX](https://www.latex-project.org/).

> [!tip]- Markdown uvnitř HTML
> Obsidian nevykresluje Markdown syntaxi uvnitř HTML elementů. Jedná se o záměrné designové rozhodnutí pro optimalizaci výkonu a udržení nízké složitosti parseru při správě rozsáhlých dokumentů.
>
> Například formátování Markdown jako `**bold**` nebo `` `code` `` nebude zpracováno uvnitř `<div>`, `<span>`, `<table>` ani žádných jiných HTML tagů.
>
> ```md
> <div>
> This **will not** be bold.
> </div>
> ```

### Podporovaná rozšíření Markdown

| Syntaxe         | Popis                                                                      |
| --------------- | -------------------------------------------------------------------------- |
| `[[Link]]`      | [[Interní odkazy]]                                                         |
| `![[Link]]`     | [[Vkládání souborů]]                                                       |
| `![[Link#^id]]` | [[Interní odkazy#Odkaz na blok v poznámce\|Odkazy na bloky]]               |
| `^id`           | [[Interní odkazy#Odkaz na blok v poznámce\|Definování bloku]]              |
| `[^id]`         | [[Základní syntaxe formátování#Poznámky pod čarou\|Poznámky pod čarou]]    |
| `%%Text%%`      | [[Základní syntaxe formátování#Komentáře\|Komentáře]]                      |
| `~~Text~~`      | [[Základní syntaxe formátování#Tučné, kurzíva, zvýraznění\|Přeškrtnutí]]  |
| `==Text==`      | [[Základní syntaxe formátování#Tučné, kurzíva, zvýraznění\|Zvýraznění]]   |
| `` ``` ``       | [[Základní syntaxe formátování#Bloky kódu\|Bloky kódu]]                    |
| `- [ ]`         | [[Základní syntaxe formátování#Seznam úkolů\|Nedokončený úkol]]           |
| `- [x]`         | [[Základní syntaxe formátování#Seznam úkolů\|Dokončený úkol]]             |
| `> [!note]`     | [[Zvýrazněné bloky]]                                                       |
| (viz odkaz)     | [[Rozšířená syntaxe formátování#Tabulky\|Tabulky]]                         |
