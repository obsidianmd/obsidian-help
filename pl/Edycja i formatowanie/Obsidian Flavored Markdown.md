---
permalink: obsidian-flavored-markdown
publish: true
mobile: true
description: 'Poznaj Obsidian Flavored Markdown, w tym obsługiwane rozszerzenia oraz sposób, w jaki Markdown współdziała z elementami HTML.'
---
Obsidian dąży do maksymalnej funkcjonalności bez naruszania istniejących formatów. W rezultacie używamy kombinacji odmian [[Podstawowa składnia formatowania|Markdown]].

Obsidian obsługuje [CommonMark](https://commonmark.org/), [GitHub Flavored Markdown](https://github.github.com/gfm/) oraz [LaTeX](https://www.latex-project.org/).

> [!tip]- Markdown wewnątrz HTML
> Obsidian nie renderuje składni Markdown wewnątrz elementów HTML. Jest to celowa decyzja projektowa mająca na celu optymalizację wydajności i utrzymanie niskiej złożoności parsera przy zarządzaniu dużymi dokumentami.
>
> Na przykład formatowanie Markdown takie jak `**bold**` czy `` `code` `` nie zostanie przetworzone wewnątrz `<div>`, `<span>`, `<table>` ani żadnych innych tagów HTML.
>
> ```md
> <div>
> This **will not** be bold.
> </div>
> ```

### Obsługiwane rozszerzenia Markdown

| Składnia        | Opis                                                                                   |
| --------------- | -------------------------------------------------------------------------------------- |
| `[[Link]]`      | [[Łącza wewnętrzne]]                                                                   |
| `![[Link]]`     | [[Osadzanie plików]]                                                                   |
| `![[Link#^id]]` | [[Łącza wewnętrzne#Link do bloku w notatce\|Odwołania do bloków]]                      |
| `^id`           | [[Łącza wewnętrzne#Link do bloku w notatce\|Definiowanie bloku]]                       |
| `[^id]`         | [[Podstawowa składnia formatowania#Przypisy\|Przypisy]]                                 |
| `%%Text%%`      | [[Podstawowa składnia formatowania#Komentarze\|Komentarze]]                            |
| `~~Text~~`      | [[Podstawowa składnia formatowania#Pogrubienie, kursywa, wyróżnienia\|Przekreślenia]]  |
| `==Text==`      | [[Podstawowa składnia formatowania#Pogrubienie, kursywa, wyróżnienia\|Wyróżnienia]]   |
| `` ``` ``       | [[Podstawowa składnia formatowania#Bloki kodu\|Bloki kodu]]                            |
| `- [ ]`         | [[Podstawowa składnia formatowania#Listy zadań\|Nieukończone zadanie]]                 |
| `- [x]`         | [[Podstawowa składnia formatowania#Listy zadań\|Ukończone zadanie]]                    |
| `> [!note]`     | [[Objaśnienia]]                                                                        |
| (zobacz link)   | [[Zaawansowana składnia formatowania#Tabele\|Tabele]]                                  |
