---
permalink: obsidian-flavored-markdown
publish: true
mobile: true
description: 'Lær om Obsidian Flavored Markdown, inkludert støttede utvidelser og hvordan Markdown samhandler med HTML-elementer.'
---
Obsidian streber etter maksimal funksjonalitet uten å bryte eksisterende formater. Som et resultat bruker vi en kombinasjon av varianter av [[Grunnleggende formateringssyntaks|Markdown]].

Obsidian støtter [CommonMark](https://commonmark.org/), [GitHub Flavored Markdown](https://github.github.com/gfm/) og [LaTeX](https://www.latex-project.org/).

> [!tip]- Markdown inne i HTML
> Obsidian gjengir ikke Markdown-syntaks inne i HTML-elementer. Dette er et bevisst designvalg for ytelsesoptimalisering og for å holde parser-kompleksiteten lav ved håndtering av store dokumenter.
>
> For eksempel vil Markdown-formatering som `**fet**` eller `` `kode` `` ikke bli behandlet inne i `<div>`, `<span>`, `<table>`, eller andre HTML-tagger.
>
> ```md
> <div>
> Denne **vil ikke** bli fet.
> </div>
> ```

### Støttede Markdown-utvidelser

| Syntaks         | Beskrivelse                                                                       |
| --------------- | --------------------------------------------------------------------------------- |
| `[[Lenke]]`     | [[Interne lenker]]                                                                |
| `![[Lenke]]`    | [[Bygge inn filer]]                                                               |
| `![[Lenke#^id]]` | [[Interne lenker#Lenke til en blokk i et notat\|Blokkreferanser]]               |
| `^id`           | [[Interne lenker#Lenke til en blokk i et notat\|Definere en blokk]]              |
| `[^id]`         | [[Grunnleggende formateringssyntaks#Fotnoter\|Fotnoter]]                          |
| `%%Tekst%%`     | [[Grunnleggende formateringssyntaks#Kommentarer\|Kommentarer]]                    |
| `~~Tekst~~`     | [[Grunnleggende formateringssyntaks#Fet, kursiv, uthevinger\|Gjennomstrekinger]]  |
| `==Tekst==`     | [[Grunnleggende formateringssyntaks#Fet, kursiv, uthevinger\|Uthevinger]]         |
| `` ``` ``       | [[Grunnleggende formateringssyntaks#Kodeblokker\|Kodeblokker]]                    |
| `- [ ]`         | [[Grunnleggende formateringssyntaks#Oppgavelister\|Ufullstendig oppgave]]         |
| `- [x]`         | [[Grunnleggende formateringssyntaks#Oppgavelister\|Fullført oppgave]]             |
| `> [!note]`     | [[Uthevede blokker]]                                                              |
| (se lenke)      | [[Avansert formateringssyntaks#Tabeller\|Tabeller]]                               |
