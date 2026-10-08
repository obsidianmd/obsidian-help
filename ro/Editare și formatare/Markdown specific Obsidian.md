---
permalink: obsidian-flavored-markdown
publish: true
mobile: true
description: 'Aflați despre Obsidian Flavored Markdown, inclusiv extensiile acceptate și modul în care Markdown interacționează cu elementele HTML.'
aliases:
  - Obsidian Flavored Markdown
---

Obsidian tinde spre capabilitate maximă fără a strica formatele existente. Ca urmare, folosim o combinație de variante de [[Sintaxă de bază pentru formatare|Markdown]].

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
| `[[Link]]`      | [[Legături interne|Legături interne]]                                                    |
| `![[Link]]`     | [[Încorporează fișiere|Încorporarea fișierelor]]                                                       |
| `![[Link#^id]]` | [[Legături interne#Link to a block in a note\|Referințe la blocuri]]        |
| `^id`           | [[Legături interne#Link to a block in a note\|Definirea unui bloc]]        |
| `[^id]`         | [[Sintaxă de bază pentru formatare#Footnotes\|Note de subsol]]                      |
| `%%Text%%`      | [[Sintaxă de bază pentru formatare#Comments\|Comentarii]]                        |
| `~~Text~~`      | [[Sintaxă de bază pentru formatare#Bold, italics, highlights\|Tăiere text]] |
| `==Text==`      | [[Sintaxă de bază pentru formatare#Bold, italics, highlights\|Evidențieri]]     |
| `` ``` ``       | [[Sintaxă de bază pentru formatare#Code blocks\|Blocuri de cod]]                  |
| `- [ ]`         | [[Sintaxă de bază pentru formatare#Task lists\|Sarcină nefinalizată]]               |
| `- [x]`         | [[Sintaxă de bază pentru formatare#Task lists\|Sarcină finalizată]]                |
| `> [!note]`     | [[Explicații|Explicații]]                                                          |
| (vezi legătura)      | [[Sintaxă avansată de formatare#Tables\|Tabele]]                         |
