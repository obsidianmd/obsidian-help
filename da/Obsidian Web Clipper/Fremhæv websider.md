---
permalink: web-clipper/highlight
---
[[Introduktion til Obsidian Web Clipper|Web Clipper]] lader dig fremhæve tekst på websider og vælge de elementer, du vil gemme til Obsidian. Fremhævninger gemmes, så du kan se dem, når du vender tilbage til en side.

Fremhævninger kan gemmes til Obsidian ved hjælp af udvidelsen. Du kan definere fremhævningsindstillinger i udvidelsens indstillinger.

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/f2674kdaot?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>

## Brug fremhævningsværktøjet

Fremhævningsværktøjet kan bruges på live websider eller i [[Læser]]. I Reader-visningen giver oprettelse af en tekstmarkering dig mulighed for at fremhæve den.

Du kan også automatisk tilføje markeringer til dine fremhævninger ved at aktivere fremhævningsværktøjet:

- ![[lucide-highlighter.svg#icon]] **Fremhævningsikonet** i udvidelsespanelet eller Reader-værktøjslinjen.
- **Genvejstaster**, der kan tilpasses i udvidelsens indstillinger.
- **Kontekstmenuen**, ved at højreklikke på den webside, du besøger.

Når fremhævningsværktøjet er slået til, vil al markeret tekst, billeder og elementer blive tilføjet til dine fremhævninger. Alle ovenstående metoder giver dig også mulighed for at forlade fremhævningsværktøjet.

## Tilføj fremhævninger til noter

Der er tre muligheder for, hvordan fremhævninger kan indsættes i dine klippede noter:

- **Fremhæv indhold på siden** — tilføjer fremhævninger direkte i teksten med [[Obsidian Flavored Markdown|syntaksen]] `==highlight==`.
- **Erstat noteindhold** — returnerer en liste af fremhævninger uden noget af sidens indhold.
- **Ingen fremhævninger** — returnerer det originale indhold uden fremhævninger.
 
Disse muligheder ændrer `{{content}}`-[[Variabler|variablen]] i din skabelon. Du kan også tilføje fremhævninger direkte til din skabelon ved hjælp af `{{highlights}}`-variablen, for eksempel:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```

## Se og søg i fremhævninger

Alle de fremhævninger, du opretter, kan ses på din Fremhævninger-side. Du kan åbne denne side ved at gå til **Indstillinger** → **Fremhævning**.

## Eksportér fremhævninger

Fremhævninger kan eksporteres til en `.json`-fil, enten på Indstillinger-siden eller på Fremhævninger-siden.
