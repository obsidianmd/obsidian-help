---
permalink: web-clipper/highlight
---
[[Introduktion til Obsidian Web Clipper|Web Clipper]] lader dig fremhæve tekst på websider og vælge de elementer, du vil gemme til Obsidian. Dine fremhævninger gemmes, så du kan genbesøge dem, når du vender tilbage til en side.

Fremhævninger kan [[Klip websider|klippes]] og gemmes til Obsidian, når du åbner udvidelsen.

## Slå fremhævning til

Du kan slå fremhævning til på flere måder, afhængigt af din browser:

- Fremhævningsikonet i udvidelsespanelet.
- Genvejstaster, for at aktivere udvidelsen fra dit tastatur.
- Kontekstmenuen, ved at højreklikke på den webside, du besøger.

Når fremhævning er slået til, kan du markere tekst, billeder og elementer, du vil fremhæve.

## Indstillinger for fremhævning

Du kan ændre fremhævningens adfærd ved at gå til Web Clipper-indstillinger. Her kan du også eksportere dine fremhævninger til en `.json`-fil.

Der er tre muligheder for, hvordan fremhævninger indsættes i din klippede note via `{{content}}`-[[Variabler|variablen]]:

- **Fremhæv indhold på siden** — tilføjer fremhævninger direkte i teksten med [[Obsidian Flavored Markdown|syntaksen]] `==highlight==`.
- **Erstat noteindhold** — returnerer en liste af fremhævninger uden noget af sidens indhold.
- **Ingen fremhævninger** — returnerer det originale indhold uden fremhævninger.

Du kan tilføje fremhævninger direkte til din skabelon ved hjælp af `{{highlights}}`-variablen, for eksempel:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```
