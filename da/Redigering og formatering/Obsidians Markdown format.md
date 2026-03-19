---
permalink: obsidians-markdown-format
---
Obsidian stræber efter maksimal kapacitet uden at bryde med eksisterende formater. Derfor anvendes en kombination af forskellige udgaver af [[Grundlæggende formaterings syntaks|Markdown]].

Obsidian understøtter [CommonMark](https://commonmark.org/), [GitHub udgave af Markdown](https://github.github.com/gfm/), og [LaTeX](https://www.latex-project.org/). Obsidian undersøtter ikke Markdown eller tomme linjer indeni HTML elementer.

### Supported Markdown extensions

| Syntaks          | Beskrivelse                                                           |
| --------------- | --------------------------------------------------------------------- |
| `[[Link]]`      | [[Interne links]]                                                    |
| `![[Link]]`     | [[Indlejr filer]]                                                       |
| `![[Link#^id]]` | [[Interne links#Link til en blok i en note\|Blok referencer]]        |
| `^id`           | [[Interne links#Link til en blok i en note\|Blokdefinition]]        |
| `[^id]`         | [[Grundlæggende formaterings syntaks#Fodnoter\|Fodnoter]]                      |
| `%%Text%%`      | [[Grundlæggende formaterings syntaks#Kommentarer\|Kommentarer]]                        |
| `~~Text~~`      | [[Grundlæggende formaterings syntaks#Fed-, kursiv-, og fremhævet tekst\|Gennemstregning]] |
| `==Text==`      | [[Grundlæggende formaterings syntaks#Fed-, kursiv-, og fremhævet tekst\|Fremhævning]]     |
| `` ``` ``       | [[Grundlæggende formaterings syntaks#Kodeblokke\|Kodeblokke]]                  |
| `- [ ]`         | [[Grundlæggende formaterings syntaks#Opgavelister\|Ikke færdige opgave]]               |
| `- [x]`         | [[Grundlæggende formaterings syntaks#Opgavelister\|Udført opgave]]                |
| `> [!note]`     | [[Bobler]]                                                          |
| (se link)      | [[Avanceret formaterings syntaks#Tabeller\|Tabeller]]                         |
