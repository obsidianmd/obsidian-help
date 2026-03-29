---
permalink: obsidian-flavored-markdown
publish: true
mobile: true
description: 'Lär dig om Obsidian Flavored Markdown, inklusive tillägg som stöds och hur Markdown samverkar med HTML-element.'
---
Obsidian strävar efter maximal kapacitet utan att bryta befintliga format. Som ett resultat använder vi en kombination av varianter av [[Grundläggande formateringssyntax|Markdown]].

Obsidian stödjer [CommonMark](https://commonmark.org/), [GitHub Flavored Markdown](https://github.github.com/gfm/) och [LaTeX](https://www.latex-project.org/).

> [!tip]- Markdown inuti HTML
> Obsidian renderar inte Markdown-syntax inuti HTML-element. Detta är ett medvetet designval för prestandaoptimering och för att hålla parserkomplexiteten låg vid hantering av stora dokument.
>
> Till exempel kommer Markdown-formatering som `**bold**` eller `` `code` `` inte att bearbetas inuti `<div>`, `<span>`, `<table>` eller andra HTML-taggar.
>
> ```md
> <div>
> This **will not** be bold.
> </div>
> ```

### Markdown-tillägg som stöds

| Syntax          | Beskrivning                                                                    |
| --------------- | ------------------------------------------------------------------------------ |
| `[[Länk]]`      | [[Interna länkar]]                                                             |
| `![[Länk]]`     | [[Bädda in filer]]                                                             |
| `![[Länk#^id]]` | [[Interna länkar#Länka till ett block i en anteckning\|Blockreferenser]]        |
| `^id`           | [[Interna länkar#Länka till ett block i en anteckning\|Definiera ett block]]    |
| `[^id]`         | [[Grundläggande formateringssyntax#Fotnoter\|Fotnoter]]                        |
| `%%Text%%`      | [[Grundläggande formateringssyntax#Kommentarer\|Kommentarer]]                  |
| `~~Text~~`      | [[Grundläggande formateringssyntax#Fet, kursiv, markeringar\|Genomstrykningar]] |
| `==Text==`      | [[Grundläggande formateringssyntax#Fet, kursiv, markeringar\|Markeringar]]     |
| `` ``` ``       | [[Grundläggande formateringssyntax#Kodblock\|Kodblock]]                        |
| `- [ ]`         | [[Grundläggande formateringssyntax#Att göra-listor\|Oavslutad uppgift]]        |
| `- [x]`         | [[Grundläggande formateringssyntax#Att göra-listor\|Avslutad uppgift]]         |
| `> [!note]`     | [[Notiser]]                                                                    |
| (se länk)       | [[Avancerad formateringssyntax#Tabeller\|Tabeller]]                            |
