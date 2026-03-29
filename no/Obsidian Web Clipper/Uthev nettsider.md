---
permalink: web-clipper/highlight
---
[[Introduksjon til Obsidian Web Clipper|Web Clipper]] lar deg utheve tekst på nettsider og velge elementene du vil lagre til Obsidian. Uthevingene dine blir lagret, slik at du kan se dem igjen når du besøker siden på nytt.

Uthevinger kan [[Klipp ut nettsider|fanges opp]] og lagres til Obsidian når du åpner utvidelsen.

## Slå på uthever

Du kan slå på utheving på flere måter, avhengig av nettleseren din:

- Uthever-ikonet i utvidelsespanelet.
- Hurtigtaster, for å aktivere utvidelsen fra tastaturet.
- Kontekstmeny, ved å høyreklikke på nettsiden du besøker.

Når utheving er slått på, kan du velge tekst, bilder og elementer du vil utheve.

## Uthever-innstillinger

Du kan endre uthever-atferden ved å gå til Web Clipper-innstillinger. Her kan du også eksportere uthevingene dine til en `.json`-fil.

Det er tre alternativer for hvordan uthevinger settes inn i det utklipte notatet via `{{content}}`-[[Variabler|variabelen]]:

- **Uthev innhold på siden** — legger uthevinger direkte inn i teksten med [[Obsidian Flavored Markdown|syntaksen]] `==highlight==`.
- **Erstatt notatinnhold** — returnerer en liste med uthevinger, uten noe av sideinnholdet.
- **Ingen uthevinger** — returnerer det opprinnelige innholdet uten uthevinger.

Du kan legge uthevinger direkte inn i malen din ved å bruke `{{highlights}}`-variabelen, for eksempel:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```
