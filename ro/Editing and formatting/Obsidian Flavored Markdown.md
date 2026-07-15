---
permalink: obsidian-flavored-markdown
publish: true
mobile: true
description: 'Aflați despre Obsidian Flavored Markdown, inclusiv extensiile acceptate și modul în care Markdown interacționează cu elementele HTML.'
---

Obsidian tinde spre capabilitate maximă fără a strica formatele existente. Ca urmare, folosim o combinație de variante de [[Basic formatting syntax|Markdown]].

Obsidian acceptă [CommonMark](https://commonmark.org/), [GitHub Flavored Markdown](https://github.github.com/gfm/) și [LaTeX](https://www.latex-project.org/). 

> [!tip]- Markdown în interiorul HTML
> Obsidian nu afișează sintaxa Markdown în interiorul elementelor HTML. Aceasta este o alegere de proiectare intenționată pentru optimizarea performanței și pentru a menține complexitatea analizorului de sintaxă scăzută atunci când se gestionează documente mari.
>
> De exemplu, formatarea Markdown precum `**bold**` sau `` `code` `` nu va fi procesată în interiorul etichetelor `<div>`, `<span>`, `<table>` sau al oricăror alte etichete HTML.
>
> ```md
> <div>
> This **will not** be bold.
> </div>
> ```

### Extensii Markdown acceptate

| Sintaxă          | Descriere                                                           |
| --------------- | --------------------------------------------------------------------- |
| `[[Link]]`      | [[Internal links|Legături interne]]                                                    |
| `![[Link]]`     | [[Embed files|Încorporarea fișierelor]]                                                       |
| `![[Link#^id]]` | [[Internal links#Link to a block in a note\|Referințe la blocuri]]        |
| `^id`           | [[Internal links#Link to a block in a note\|Definirea unui bloc]]        |
| `[^id]`         | [[Basic formatting syntax#Footnotes\|Note de subsol]]                      |
| `%%Text%%`      | [[Basic formatting syntax#Comments\|Comentarii]]                        |
| `~~Text~~`      | [[Basic formatting syntax#Bold, italics, highlights\|Tăiere text]] |
| `==Text==`      | [[Basic formatting syntax#Bold, italics, highlights\|Evidențieri]]     |
| `` ``` ``       | [[Basic formatting syntax#Code blocks\|Blocuri de cod]]                  |
| `- [ ]`         | [[Basic formatting syntax#Task lists\|Sarcină nefinalizată]]               |
| `- [x]`         | [[Basic formatting syntax#Task lists\|Sarcină finalizată]]                |
| `> [!note]`     | [[Callouts|Explicații]]                                                          |
| (vezi legătura)      | [[Advanced formatting syntax#Tables\|Tabele]]                         |
