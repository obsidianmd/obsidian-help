---
permalink: obsidian-flavored-markdown
publish: true
mobile: true
description: 'Leer over Obsidian Flavored Markdown, inclusief ondersteunde extensies en hoe Markdown samenwerkt met HTML-elementen.'
---
Obsidian streeft naar maximale functionaliteit zonder bestaande formaten te breken. Daarom gebruiken we een combinatie van varianten van [[Basis opmaaksyntaxis|Markdown]].

Obsidian ondersteunt [CommonMark](https://commonmark.org/), [GitHub Flavored Markdown](https://github.github.com/gfm/) en [LaTeX](https://www.latex-project.org/).

> [!tip]- Markdown binnen HTML
> Obsidian rendert geen Markdown-syntaxis binnen HTML-elementen. Dit is een bewuste ontwerpkeuze voor prestatieoptimalisatie en om de complexiteit van de parser laag te houden bij het beheren van grote documenten.
>
> Bijvoorbeeld, Markdown-opmaak zoals `**bold**` of `` `code` `` wordt niet verwerkt binnen `<div>`, `<span>`, `<table>` of andere HTML-tags.
>
> ```md
> <div>
> Dit **wordt niet** vet weergegeven.
> </div>
> ```

### Ondersteunde Markdown-extensies

| Syntaxis        | Beschrijving                                                          |
| --------------- | --------------------------------------------------------------------- |
| `[[Link]]`      | [[Interne koppelingen]]                                               |
| `![[Link]]`     | [[Bestanden insluiten]]                                               |
| `![[Link#^id]]` | [[Interne koppelingen#Koppelen naar een blok in een notitie\|Blokreferenties]] |
| `^id`           | [[Interne koppelingen#Koppelen naar een blok in een notitie\|Een blok definiëren]] |
| `[^id]`         | [[Basis opmaaksyntaxis#Voetnoten\|Voetnoten]]                         |
| `%%Tekst%%`     | [[Basis opmaaksyntaxis#Opmerkingen\|Opmerkingen]]                     |
| `~~Tekst~~`     | [[Basis opmaaksyntaxis#Vet, cursief, markeringen\|Doorhalen]]         |
| `==Tekst==`     | [[Basis opmaaksyntaxis#Vet, cursief, markeringen\|Markeringen]]       |
| `` ``` ``       | [[Basis opmaaksyntaxis#Codeblokken\|Codeblokken]]                     |
| `- [ ]`         | [[Basis opmaaksyntaxis#Takenlijsten\|Onvoltooide taak]]               |
| `- [x]`         | [[Basis opmaaksyntaxis#Takenlijsten\|Voltooide taak]]                 |
| `> [!note]`     | [[Bijschriften]]                                                      |
| (zie koppeling) | [[Geavanceerde opmaaksyntaxis#Tabellen\|Tabellen]]                    |
