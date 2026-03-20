---
permalink: obsidian-flavored-markdown
publish: true
mobile: true
description: >-
  Erfahre mehr über Obsidian Flavored Markdown, einschließlich unterstützter
  Erweiterungen und wie Markdown mit HTML-Elementen interagiert.
---
Obsidian strebt maximale Funktionalität an, ohne bestehende Formate zu brechen. Daher verwenden wir eine Kombination verschiedener Varianten von [[Grundlegende Formatierungssyntax|Markdown]].

Obsidian unterstützt [CommonMark](https://commonmark.org/), [GitHub Flavored Markdown](https://github.github.com/gfm/) und [LaTeX](https://www.latex-project.org/).

> [!tip]- Markdown innerhalb von HTML
> Obsidian rendert keine Markdown-Syntax innerhalb von HTML-Elementen. Dies ist eine bewusste Designentscheidung zur Leistungsoptimierung und um die Parser-Komplexität bei der Verwaltung großer Dokumente gering zu halten.
>
> Zum Beispiel wird Markdown-Formatierung wie `**fett**` oder `` `Quelltext` `` innerhalb von `<div>`, `<span>`, `<table>` oder anderen HTML-Tags nicht verarbeitet.
>
> ```md
> <div>
> Dies **wird nicht** fett dargestellt.
> </div>
> ```

### Unterstützte Markdown-Erweiterungen

| Syntax          | Beschreibung                                                                       |
| --------------- | ---------------------------------------------------------------------------------- |
| `[[Link]]`      | [[Interne Links]]                                                                  |
| `![[Link]]`     | [[Dateien einbetten]]                                                              |
| `![[Link#^id]]` | [[Interne Links#Auf einen Block in einer Notiz verlinken\|Block-Referenzen]]       |
| `^id`           | [[Interne Links#Auf einen Block in einer Notiz verlinken\|Einen Block definieren]] |
| `[^id]`         | [[Grundlegende Formatierungssyntax#Fußnoten\|Fußnoten]]                           |
| `%%Text%%`      | [[Grundlegende Formatierungssyntax#Kommentare\|Kommentare]]                        |
| `~~Text~~`      | [[Grundlegende Formatierungssyntax#Fett, kursiv, Hervorhebungen\|Durchgestrichen]] |
| `==Text==`      | [[Grundlegende Formatierungssyntax#Fett, kursiv, Hervorhebungen\|Hervorhebungen]]  |
| `` ``` ``       | [[Grundlegende Formatierungssyntax#Quelltext-Blöcke\|Quelltext-Blöcke]]           |
| `- [ ]`         | [[Grundlegende Formatierungssyntax#Aufgabenlisten\|Unvollständige Aufgabe]]        |
| `- [x]`         | [[Grundlegende Formatierungssyntax#Aufgabenlisten\|Abgeschlossene Aufgabe]]        |
| `> [!note]`     | [[Callouts]]                                                                       |
| (siehe Link)    | [[Erweiterte Formatierungssyntax#Tabellen\|Tabellen]]                              |
