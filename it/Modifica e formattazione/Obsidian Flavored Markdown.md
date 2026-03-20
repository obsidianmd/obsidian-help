---
permalink: obsidian-flavored-markdown
publish: true
mobile: true
description: >-
  Scopri il Markdown di Obsidian, comprese le estensioni supportate e come il
  Markdown interagisce con gli elementi HTML.
---
Obsidian mira alla massima funzionalità senza compromettere i formati esistenti. Di conseguenza, utilizziamo una combinazione di varianti di [[Sintassi di formattazione di base|Markdown]].

Obsidian supporta [CommonMark](https://commonmark.org/), [GitHub Flavored Markdown](https://github.github.com/gfm/) e [LaTeX](https://www.latex-project.org/).

> [!tip]- Markdown all'interno dell'HTML
> Obsidian non renderizza la sintassi Markdown all'interno degli elementi HTML. Questa è una scelta progettuale intenzionale per l'ottimizzazione delle prestazioni e per mantenere bassa la complessità del parser nella gestione di documenti di grandi dimensioni.
>
> Ad esempio, la formattazione Markdown come `**grassetto**` o `` `codice` `` non verrà elaborata all'interno di `<div>`, `<span>`, `<table>` o qualsiasi altro tag HTML.
>
> ```md
> <div>
> Questo **non sarà** in grassetto.
> </div>
> ```

### Estensioni Markdown supportate

| Sintassi        | Descrizione                                                                     |
| --------------- | ------------------------------------------------------------------------------- |
| `[[Link]]`      | [[Collegamenti interni]]                                                        |
| `![[Link]]`     | [[Incorporare file]]                                                            |
| `![[Link#^id]]` | [[Collegamenti interni#Collegamento a un blocco in una nota\|Riferimenti a blocchi]] |
| `^id`           | [[Collegamenti interni#Collegamento a un blocco in una nota\|Definire un blocco]]    |
| `[^id]`         | [[Sintassi di formattazione di base#Note a piè di pagina\|Note a piè di pagina]]    |
| `%%Testo%%`     | [[Sintassi di formattazione di base#Commenti\|Commenti]]                        |
| `~~Testo~~`     | [[Sintassi di formattazione di base#Grassetto, corsivo, evidenziazione\|Barrato]] |
| `==Testo==`     | [[Sintassi di formattazione di base#Grassetto, corsivo, evidenziazione\|Evidenziazione]] |
| `` ``` ``       | [[Sintassi di formattazione di base#Blocchi di codice\|Blocchi di codice]]      |
| `- [ ]`         | [[Sintassi di formattazione di base#Elenchi attività\|Attività incompleta]]     |
| `- [x]`         | [[Sintassi di formattazione di base#Elenchi attività\|Attività completata]]     |
| `> [!note]`     | [[Riquadri]]                                                                    |
| (vedi collegamento) | [[Sintassi di formattazione avanzata#Tabelle\|Tabelle]]                     |
