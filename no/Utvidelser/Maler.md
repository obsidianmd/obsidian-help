---
permalink: plugins/templates
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Maler er en kjerneplugin som lar deg sette inn forhåndsdefinerte tekstutdrag i det aktive notatet ditt.
---
Maler er en [[Kjerneutvidelser|kjerneutvidelse]] som lar deg sette inn forhåndsdefinerte tekstutdrag i det aktive notatet ditt.

## Angi malmappen din

1. I nedre venstre hjørne, klikk **[[Innstillinger]]** ![[lucide-cog.svg#icon]].
2. Under **Kjerneutvidelser → Maler → Søkesti til malmappe**, skriv inn mappen som inneholder malene dine.

## Malvariabler

Du kan legge til dynamisk informasjon i malene dine ved å bruke _malvariabler_. Når du setter inn en mal som inneholder en malvariabel, erstatter Maler den med den tilsvarende verdien.

| Variabel    | Beskrivelse                                              |
|-------------|----------------------------------------------------------|
| `{{title}}` | Tittel på det aktive notatet.                            |
| `{{date}}`  | Dagens dato. **Standardformat:** `YYYY-MM-DD`.           |
| `{{time}}`  | Gjeldende tid. **Standardformat:** `HH:mm`.              |

Både `{{date}}` og `{{time}}` lar deg endre standardformatet ved hjelp av en _formatstreng_.

For å angi en formatstreng, legg til et kolon (`:`) etterfulgt av en streng med [Moment.js-formatmerker](https://momentjs.com/docs/#/displaying/format/), for eksempel `{{date:YYYY-MM-DD}}`.

Du kan bruke `{{date}}` og `{{time}}` om hverandre med formatstrenger, for eksempel `{{time:YYYY-MM-DD}}`.

Du kan endre standard dato- og tidsformater under **[[Innstillinger]] → Maler → Dato-format** og **[[Innstillinger]] → Maler → Tidsformat**. ^template-settings-date-time-formatting

> [!tip] Tips
> Du kan også bruke malvariablene `{{date}}` og `{{time}}` i utvidelsene [[Daglige notater]] og [[Unik notatoppretter]].

## Opprett en mal

I [[#Angi malmappen din|malmappen]], [[Administrer notater#Opprett et nytt notat|opprett et notat]] som inneholder teksten du vil at skal vises når du bruker malen. Du kan bruke [[#Malvariabler|malvariabler]] for dynamisk tekst som gjeldende dato.

For eksempel, her er en mal for studienotater:

```markdown
---
topic: 
date: "{{date}}"
course: 
tags:
  - studies
---

# {{title}}

## Nøkkelkonsepter


## Viktige detaljer


## Eksempler


## Spørsmål
- 

## Sammendrag


## Relaterte emner
- [[]]
```

## Sett inn en mal i det aktive notatet

**Viktig:** For å sette inn en mal, må du først [[#Angi malmappen din]].

1. I verktøylinjen, klikk **Sett inn mal**.
2. Velg malen som skal settes inn ved markørposisjonen i det aktive notatet.

For å sette inn en mal med [[Kommandovelger|kommandopaletten]] eller [[Hurtigtaster#Sett en hurtigtast|en egendefinert hurtigtast]], bruk kommandoen `Maler: Sett inn mal`.

Innholdet i malen settes inn ved gjeldende markørposisjon. Hvis markøren ikke er i notatets brødtekst, settes innholdet inn ved siste markørposisjon.

### Malegenskaper

![[Egenskaper#^templates-properties]]

## Sett inn gjeldende dato og tid i det aktive notatet

Bruk kommandoene `Maler: Sett inn dagens dato` og `Maler: Sett inn gjeldende tid` for å sette inn gjeldende dato og tid ved gjeldende markørposisjon. I likhet med kommandoen `Sett inn mal` kan dette gjøres med [[Kommandovelger|kommandopaletten]] eller [[Hurtigtaster#Sett en hurtigtast|en egendefinert hurtigtast]].

Den innsatte datoen og tiden bruker [[#^template-settings-date-time-formatting|formateringen angitt i utvidelsesinnstillingene]].
