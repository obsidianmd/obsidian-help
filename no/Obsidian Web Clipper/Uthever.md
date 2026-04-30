---
permalink: web-clipper/highlight
aliases:
  - Uthev nettsider
---
[[Introduksjon til Obsidian Web Clipper|Web Clipper]] lar deg utheve tekst på nettsider og velge elementene du vil lagre til Obsidian. Uthevinger blir lagret slik at du kan se dem når du besøker siden på nytt.

Uthevinger kan lagres til Obsidian ved hjelp av utvidelsen. Du kan definere uthever-alternativer i utvidelsesinnstillingene.

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/f2674kdaot?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>

## Bruk utheveren

Utheveren kan brukes på aktive nettsider eller [[Lesevisning]]. I Reader-visningen gir det å opprette et tekstutvalg deg muligheten til å utheve det.

Du kan også automatisk legge utvalg til uthevingene dine ved å aktivere utheveren:

- Uthever-ikonet i utvidelsespanelet eller Reader-verktøylinjen.
- Hurtigtaster, for å aktivere utvidelsen fra tastaturet.
- Kontekstmeny, ved å høyreklikke på nettsiden du besøker.

Når utheveren er slått på, vil all valgt tekst, bilder og elementer bli lagt til uthevingene dine. Alle metodene ovenfor lar deg også avslutte utheveren.

## Legg uthevinger til notater

Det er tre alternativer for hvordan uthevinger settes inn i de utklipte notatene dine:

- **Uthev innhold på siden** — legger uthevinger direkte inn i teksten med [[Obsidian Flavored Markdown|syntaksen]] `==highlight==`.
- **Erstatt notatinnhold** — returnerer en liste med uthevinger, uten noe av sideinnholdet.
- **Ingen uthevinger** — returnerer det opprinnelige innholdet uten uthevinger.
 
Disse alternativene endrer `{{content}}`-[[Variabler|variabelen]] i malen din. Du kan også legge uthevinger direkte inn i malen din ved å bruke `{{highlights}}`-variabelen, for eksempel:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```

## Vis og søk i uthevinger

Alle uthevingene du oppretter kan vises på Uthevinger-siden. Du kan åpne denne siden ved å gå til **Innstillinger** → **Uthever**.

## Eksporter uthevinger

Uthevinger kan eksporteres til en `.json`-fil, enten på Innstillinger-siden eller på Uthevinger-siden.
