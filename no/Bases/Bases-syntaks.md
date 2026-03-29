---
permalink: bases/syntax
publish: true
mobile: true
description: Denne siden gir en introduksjon til Bases-syntaks i Obsidian.
---
Når du [[Opprett en base|oppretter en base]] i Obsidian, lagres den som en `.base`-fil. Bases redigeres vanligvis via appgrensesnittet, men syntaksen kan også redigeres manuelt og bygges inn i en kodeblokk.

[[Introduksjon til Bases|Bases]]-syntaksen definerer [[Visninger]], filtre og [[Formler|formler]]. Bases må være gyldig YAML som samsvarer med skjemaet definert nedenfor.

## Eksempel

Her er et eksempel på en base-fil. Vi går gjennom hver seksjon i detalj.

```yaml
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
summaries:
  customAverage: 'values.mean().round(3)'
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

### Filtre

Som standard inkluderer en base hver fil i hvelvet. Det finnes ingen `from` eller `source` som i SQL eller Dataview. `filters`-seksjonen lar deg definere betingelser for å snevre inn datasettet.

```yaml
# Enkelt filter:
filters:
  and:
    - file.hasTag("tag")

# Komplekst filter:
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
```

Det er to muligheter for å bruke filtre:

1. På det globale `filters`-nivået (vist ovenfor) der de gjelder for alle visninger i basen.
2. På `view`-nivået der de kun gjelder for en bestemt visning.

Disse to seksjonene er funksjonelt likeverdige, og når de evalueres for en visning, blir de sammenkoblet med `AND`.

`filters`-seksjonen inneholder enten en enkelt filtersetning som en streng, eller et rekursivt definert filterobjekt. Filterobjekter kan inneholde én av `and`, `or` eller `not`. Disse nøklene er en heterogen liste over andre filterobjekter eller filtersetninger i strenger. En filtersetning er en linje som evalueres til sann eller usann når den brukes på et notat. Den kan være én av følgende:

- En grunnleggende sammenligning med standard aritmetiske operatorer.
- En funksjon. En rekke [[Funksjoner]] er innebygde, og utvidelser kan legge til flere funksjoner.

Syntaksen og tilgjengelige funksjoner for filtre og formler er de samme.

### Formler

`formulas`-seksjonen definerer [[Formler|formelegenskaper]] som kan vises på tvers av alle visninger i base-filen.

```yaml
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
```

Formelegenskaper støtter grunnleggende aritmetiske operatorer og en rekke innebygde [[Funksjoner]]. I fremtiden vil utvidelser kunne legge til funksjoner for bruk i formler.

Du kan referere til egenskaper på forskjellige måter avhengig av typen:

- **Notategenskaper** er egenskaper definert i notatets startmetadata. For eksempel `note.price` eller `note["price"]`.
  Hvis ingen prefiks er angitt, antas egenskapen å være en `note`-egenskap.
- **Filegenskaper** beskriver selve filen.
  For eksempel `file.size` eller `file.ext`. Du kan også referere til filobjektet direkte, f.eks. `file.hasLink()`.
- **Formelegenskaper** er andre formler i basen.
  Eksempel: `formula.formatted_price`.

En formel kan bruke verdier fra andre formelegenskaper, så lenge det ikke er en sirkulær referanse.

Formelegenskaper lagres alltid som strenger i YAML, men den faktiske **utgangsdatatypen** bestemmes av typen til de underliggende dataene og returverdien til eventuelle funksjoner som brukes.

Merk at bruk av nestede anførselstegn er nødvendig for å inkludere tekstliteraler i YAML-feltet. Tekstliteraler må omsluttes av enkle eller doble anførselstegn.

### Egenskaper

`properties`-seksjonen gjør det mulig å lagre konfigurasjonsinformasjon om hver egenskap. Det er opp til den enkelte visning hvordan disse konfigurasjonsverdiene brukes. For eksempel brukes visningsnavnet som kolonneoverskrifter i tabeller.

```yaml
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
```

Visningsnavn brukes ikke i filtre eller formler.

### Sammendrag

`summaries`-seksjonen kan brukes til å definere egendefinerte sammendragsformler. I tillegg til å definere sammendragsformler her, er det flere standard sammendragsformler tilgjengelige.

```yaml
summaries:
  customAverage: 'values.mean().round(3)'
```

I dette eksempelet er `customAverage`-formelen den samme som standard `Average`, bortsett fra at verdien avrundes til et annet antall desimaler. I sammendragsformler er nøkkelordet `values` en liste som inneholder alle verdiene for den egenskapen på tvers av hvert notat i resultatsettet. Sammendragsformelen bør returnere en enkelt `Value`.

Merk at denne `summaries`-seksjonen er forskjellig fra `summaries`-seksjonen i visningskonfigurasjonen (forklart nedenfor) der sammendragsformler tilordnes spesifikke egenskaper.

#### Standard sammendragsformler

| Navn      | Inngangstype | Beskrivelse                                                   |
| --------- | ------------ | ------------------------------------------------------------- |
| Average   | Tall         | Det matematiske gjennomsnittet av alle tall fra inngangsverdiene. |
| Min       | Tall         | Det minste tallet fra inngangsverdiene.                       |
| Max       | Tall         | Det største tallet fra inngangsverdiene.                      |
| Sum       | Tall         | Summen av alle tall i inngangen.                              |
| Range     | Tall         | Forskjellen mellom `Max` og `Min`.                            |
| Median    | Tall         | Den matematiske medianen av alle tall fra inngangsverdiene.   |
| Stddev    | Tall         | Standardavviket for alle tall fra inngangsverdiene.           |
| Earliest  | Dato         | Den tidligste datoen fra inngangsverdiene.                    |
| Latest    | Dato         | Den seneste datoen fra inngangsverdiene.                      |
| Range     | Dato         | Forskjellen mellom `Latest` og `Earliest`.                    |
| Checked   | Boolean      | Antall `true`-verdier.                                        |
| Unchecked | Boolean      | Antall `false`-verdier.                                       |
| Empty     | Alle         | Antall verdier i inngangen som er tomme.                      |
| Filled    | Alle         | Antall verdier i inngangen som ikke er tomme.                 |
| Unique    | Alle         | Antall unike verdier i inngangen.                             |

### Visninger

`views`-seksjonen definerer hvordan dataene kan gjengis. Hver oppføring i `views`-listen definerer en separat visning av de samme dataene, og det kan være så mange forskjellige visninger som nødvendig.

```yaml
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

- `type` velger blant innebygde og utvidelsesbaserte visningstyper.
- `name` er visningsnavnet, og kan brukes til å definere standardvisningen.
- `filters` er nøyaktig det samme som beskrevet ovenfor, men gjelder kun for visningen.
- `groupBy` angir en egenskap og sorteringsretning. Verdien av den angitte egenskapen for hver rad brukes til å plassere raden i grupper.
- `summaries` tilordner egenskapsnavn til et navngitt sammendrag. Sammendrag utfører en aggregering på egenskapen på tvers av alle rader.

[[Visninger]] kan legge til ytterligere data for å lagre informasjon som trengs for å opprettholde tilstand eller gjengi riktig, men utvidelsesforfattere bør passe på å ikke bruke nøkler som allerede er i bruk av kjerne-Bases-utvidelsen. Som et eksempel kan en tabellvisning bruke dette til å begrense antall rader eller velge hvilken kolonne som brukes til å sortere rader og i hvilken retning. En annen visningstype som et kart kan bruke dette til å tilordne hvilken egenskap i notatet som tilsvarer breddegrad og lengdegrad, og hvilken egenskap som skal vises som nåletittel.

I fremtiden vil API gjøre det mulig for visninger å lese og skrive disse verdiene, slik at visningen kan bygge sitt eget grensesnitt for konfigurasjon.

## Egenskaper

Det finnes tre typer egenskaper som brukes i bases:

1. **Notategenskaper**, lagret i startmetadata for Markdown-filer.
2. **Filegenskaper**, tilgjengelige for alle filtyper.
3. **Formelegenskaper**, definert i selve `.base`-filen (se ovenfor).

### Notategenskaper

[[Egenskaper|Notategenskaper]] er kun tilgjengelige for Markdown-filer, og lagres i YAML-startmetadataen til hvert notat. Disse egenskapene kan nås med formatet `note.author` eller ganske enkelt `author` som en forkortelse.

### Filegenskaper

Filegenskaper refererer til filen som for øyeblikket testes eller evalueres. Filegenskaper er tilgjengelige for alle [[Aksepterte filformater|filtyper]], inkludert vedlegg.

For eksempel vil filteret `file.ext == "md"` være sant for alle Markdown-filer og usant ellers.

| Egenskap      | Type   | Beskrivelse                                                   |
| ------------- | ------ | ------------------------------------------------------------- |
| `file.backlinks`  | Liste  | Liste over tilbakelenke-filer. Merk: Denne egenskapen er ytelsestung. Når mulig, snu oppslaget og bruk `file.links`. Oppdaterer ikke automatisk resultater når hvelvet endres. |
| `file.ctime`  | Dato   | Opprettelsestid                                               |
| `file.embeds` | Liste  | Liste over alle innbygginger i notatet                        |
| `file.ext`    | Streng | Filendelse                                                    |
| `file.file`   | Fil    | Filobjekt, kun brukbart i spesifikke funksjoner               |
| `file.folder` | Streng | Bane til filmappen                                            |
| `file.links`  | Liste  | Liste over alle interne lenker i notatet, inkludert startmetadata |
| `file.mtime`  | Dato   | Endringstid                                                   |
| `file.name`   | Streng | Filnavn                                                       |
| `file.path`   | Streng | Bane til filen                                                |
| `file.properties`   | Objekt | Alle egenskaper på filen. Merk: Oppdaterer ikke automatisk resultater når hvelvet endres. |
| `file.size`   | Tall   | Filstørrelse                                                  |
| `file.tags`   | Liste  | Liste over alle tagger i filinnholdet og startmetadataen      |

### Tilgang til egenskaper med `this`

Bruk `this`-objektet for å få tilgang til filegenskaper. Hva `this` refererer til, avhenger av hvor basen vises.

Når basen åpnes i hovedinnholdsområdet, peker `this` til egenskapene til selve base-filen. For eksempel returnerer `this.file.folder` mappebanen der basen befinner seg.

Når basen er innebygd i en annen fil, peker `this` til egenskapene til _innbyggingsfilen_ (notatet eller Canvas som inneholder basen). For eksempel returnerer `this.file.name` navnet på innbyggingsfilen, ikke basen.

Når basen er i et sidefelt, refererer `this` til den aktive filen i hovedinnholdsområdet. Dette lar deg opprette spørringer basert på den aktive filen. For eksempel kan du bruke `file.hasLink(this.file)` for å replikere tilbakelenke-panelet.

## Operatorer

### Aritmetiske operatorer

Aritmetiske operatorer utfører aritmetikk på tall. For eksempel `radius * (2 * 3.14)`.

| Operator | Beskrivelse  |
| -------- | ------------ |
| `+`      | pluss        |
| `-`      | minus        |
| `*`      | multipliser  |
| `/`      | divider      |
| `%`      | modulo       |
| `( )`    | parentes     |

### Datoaritmetikk

Datoer kan endres ved å legge til og trekke fra varigheter. Varighetsenheter aksepterer flere formater:

| Enhet                    | Varighet |
| ------------------------ | -------- |
| `y`, `year`, `years`     | år       |
| `M`, `month`, `months`   | måned    |
| `d`, `day`, `days`       | dag      |
| `w`, `week`, `weeks`     | uke      |
| `h`, `hour`, `hours`     | time     |
| `m`, `minute`, `minutes` | minutt   |
| `s`, `second`, `seconds` | sekund   |

For å endre eller forskyve Dato-objekter, bruk `+`- eller `-`-operatoren med en varighetsstreng. For eksempel legger `date + "1M"` til 1 måned til datoen, mens `date - "2h"` trekker fra 2 timer fra datoen.

Den globale [[Funksjoner|funksjonen]] `today()` kan brukes til å hente gjeldende dato, og `now()` kan brukes til å hente gjeldende dato med klokkeslett.

- `now() + "1 day"` returnerer et tidspunkt nøyaktig 24 timer fra utførelsestidspunktet.
- `file.mtime > now() - "1 week"` returnerer `true` hvis filen ble endret i løpet av den siste uken.
- `date("2024-12-01") + "1M" + "4h" + "3m"` returnerer et Dato-objekt som representerer `2025-01-01 04:03:00`.
- Trekk to datoer fra hverandre for å få forskjellen i millisekunder mellom dem, for eksempel `now() - file.ctime`.
- For å hente datodelen av en Dato med klokkeslett, bruk `datetime.date()`.
- For å formatere et Dato-objekt, bruk `format()`-funksjonen, for eksempel `datetime.format("YYYY-MM-DD")`.

### Sammenligningsoperatorer

Sammenligningsoperatorer kan brukes til å sammenligne tall eller Dato-objekter. Lik og ulik kan brukes med alle typer verdier, ikke bare tall og datoer.

| Operator | Beskrivelse              |
| -------- | ------------------------ |
| `==`     | lik                      |
| `!=`     | ikke lik                 |
| `>`      | større enn               |
| `<`      | mindre enn               |
| `>=`     | større enn eller lik     |
| `<=`     | mindre enn eller lik     |

### Boolske operatorer

Boolske operatorer kan brukes til å kombinere eller invertere logiske verdier, noe som resulterer i en sann eller usann verdi.

| Operator | Beskrivelse  |
| -------- | ------------ |
| `!`      | logisk ikke  |
| `&&`     | logisk og    |
| \|\|     | logisk eller |

## Funksjoner

Se [[Funksjoner|listen over funksjoner]] som kan brukes i formler og [[Visninger|filtre]].

## Typer

Bases har et typesystem som brukes av formler og filtre for å anvende funksjoner på egenskaper.

### Strenger, tall og boolske verdier

Strenger, tall og boolske verdier er «primitive» verdier som ikke krever en funksjon for å opprettes.

- Strenger omsluttes av enkle eller doble anførselstegn, for eksempel `"message"`.
- Tall skrives som sifre, og kan valgfritt omsluttes av parenteser for tydelighet. For eksempel `1` eller `(2.5)`.
- Boolske verdier skrives som `true` eller `false` uten anførselstegn.

### Datoer og varigheter

Datoer representerer en bestemt dato, eller en dato og et klokkeslett avhengig av funksjonen som brukes til å opprette dem, eller typen som er tilordnet [[Egenskaper|egenskapen]].

- For å konstruere en dato, bruk `date`-funksjonen, for eksempel `date("2025-01-01 12:00:00")`
- For å endre en dato, legg til eller fjern en varighet, for eksempel `now() + "1 hour"` eller `today() + "7d"`
- Sammenlign datoer med sammenligningsoperatorer (f.eks. `>` eller `<`) og aritmetiske operatorer (for eksempel returnerer `(now() + "1d") - now()` `86400000` millisekunder.)
- For å trekke ut deler av en dato, bruk tilgjengelige felt (`now().hour`), eller en bekvemmelighetsfunksjon (`now.time()`).
- Mange andre [[Funksjoner|felt og funksjoner]] er tilgjengelige på dato-objekter.

### Objekter og lister

- Gjør et enkelt element om til en liste ved å bruke `list()`-funksjonen. Dette er spesielt nyttig for egenskaper som kan inneholde en blanding av lister eller enkeltverdier.
- Få tilgang til listeelementer med firkantparenteser og en 0-basert indeks. For eksempel returnerer `property[0]` det første elementet fra listen.
- Få tilgang til objektelementer med firkantparenteser og elementnavnet eller punktnotasjon. For eksempel `property.subprop` eller `property["subprop"]`.

### Filer og lenker

[[Lenke notater|Wiki-lenker]] i [[Egenskaper|startmetadata-egenskaper]] gjenkjennes automatisk som Lenke-objekter. Lenker gjengis som en klikkbar lenke i [[Visninger|visningen]].

- For å konstruere en lenke, bruk den globale `link`-[[Funksjoner|funksjonen]], for eksempel `link("filename")` eller `link("https://obsidian.md")`.
- Du kan opprette en lenke fra en hvilken som helst streng, for eksempel `link(file.ctime.date().toString())`.
- For å angi visningsteksten, pass inn en valgfri streng eller et ikon som en andre parameter, for eksempel `link("filename", "display")` eller `link("filename", icon("plus"))`.

Et Fil-objekt kan gjøres om til en lenke med `file.asLink()` med en valgfri visningstekst.

Lenker kan sammenlignes med `==` og `!=`. De er likeverdige så lenge de peker til samme fil, eller hvis filen ikke eksisterer ved oppslag, må lenketeksten være identisk.

Lenker kan sammenlignes med filer som `file` eller `this`. De vil være like hvis lenken peker til filen. For eksempel `author == this`.

Lenker kan også sjekkes i listeinnhold, for eksempel `authors.contains(this)`.
