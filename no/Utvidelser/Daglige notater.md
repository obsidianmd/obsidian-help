---
permalink: plugins/daily-notes
---
Daglige notater er en [[Kjerneutvidelser|kjerneutvidelse]] som åpner et notat basert på dagens dato, eller oppretter det hvis det ikke finnes. Bruk daglige notater til å lage journaler, gjøremålslister, eller daglige logger for ting du oppdaget i løpet av dagen.

For å åpne dagens daglige notat, kan du enten:

- Klikke **Åpne dagens notat** ![[lucide-calendar.svg#icon]] i [[Verktøylinje|verktøylinjen]].
- Kjøre **Åpne dagens notat** fra [[Kommandovelger|kommandopaletten]].
- [[Hurtigtaster#Angi en hurtigtast|Bruke en hurtigtast]] for kommandoen **Åpne dagens notat**.

Som standard oppretter Obsidian et nytt tomt notat oppkalt etter dagens dato i ÅÅÅÅ-MM-DD-format.

> [!tip] Hvis du foretrekker å ha daglige notater i en egen mappe, kan du sette <u>Plassering for ny fil</u> under utvidelsesvalg for å endre hvor Obsidian oppretter nye daglige notater.

> [!example]- Automatiske undermapper
> Du kan automatisk organisere daglige notater i mapper ved hjelp av **Dato-format**-funksjonen.
> 
> For eksempel, hvis du setter datoformatet til `YYYY/MMMM/YYYY-MMM-DD`, vil notatene dine bli opprettet som `2023/January/2023-Jan-01`. 
> 
> Du kan utforske flere formateringsalternativer på dokumentasjonssiden til [momentJS](https://momentjs.com/docs/#/displaying/format/).

## Opprett et daglig notat fra mal

Hvis de daglige notatene dine har samme struktur, kan du bruke en [[Maler|mal]] for å legge til forhåndsdefinert innhold i daglige notater når du oppretter dem.

1. Opprett et nytt notat kalt «Daglig mal» med følgende tekst (eller hva som passer for deg!):

   ```md
   # {{date:YYYY-MM-DD}}

   ## Oppgaver

   - [ ]
   ```

2. Åpne **[[Innstillinger]]**.
3. I sidefeltet klikker du **Daglige notater** under **Utvidelsesvalg**.
4. I tekstfeltet ved siden av **Plassering for malfil** velger du notatet «Daglig mal».

Obsidian bruker malen neste gang du oppretter et nytt daglig notat.

## Daglige notater og egenskaper

Når utvidelsen Daglige notater er aktivert og en dato-egenskap finnes i et notat, vil Obsidian automatisk forsøke å generere en lenke til det daglige notatet for den aktuelle dagen. For eksempel, hvis et notat med tittelen `example.md` inkluderer en dato-egenskap som `2023-01-01`, vil denne datoen bli til en klikkbar lenke i [[Visninger og redigeringsmodus#Live-forhåndsvisning|Live-forhåndsvisning]]-delen.

![[daily-notes-and-date-properties.png#interface|300]]
^daily-notes-date
