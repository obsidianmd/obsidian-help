---
description: Denne side indeholder en introduktion til basesyntaks i Obsidian.
mobile: true
permalink: baser/syntaks
publish: true
---

Når du [[Opret en base|opretter en base]] i Obsidian, gemmes den som en `.base` fil. Baser er typisk redigeret ved hjælp værktøjer i brugergrænsefladen, men synktaksen kan også redigeres manuelt, og indlejres i en kodeblok.

Med synktaksen til [[Introduktion til Baser|baser]] defineres [[Views|views]], filtre, og [[Formler|formler]]. Baser skal være gyldig YAML, der overholder skemaet defineret nederst.

## Eksempel

Her er et eksempel på en basefil. Vi gennemgår hver sektion i detaljer.

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

En base inkluderer som standard enhver fil i boksen. Der er ikke noget `from` eller `source` som i SQL eller Dataview. `filters` sektionen lader dig definere betingelser for at formindske datasættet.

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
```

Der er to muligheder hvorpå du kan tilføje filtre:

1. På det globale `filters` niveau (vist foroven), hvor de gælder for alle views i basen
2. På `view` niveau, hvor det gælder for et specifiks view

Disse to sektioner er funktionelt ækvivalente og når de udføres for et view vil de blive sammenkædet med et `AND`.

`filters` sektionen indeholder enten en enkelt filtererklæring som en tekststreng, eller et rekursigt defineret filterobjekt. Filterobjekter kan indeholde en af følgende operatorer: `and`, `or`, eller `not`. Disse nøgler er en heterogen liste af andre filterobjekter eller filtererklæringer som tekststrenge. En filtererklæring er en linje, som evalueres som sandt eller falsk, når de anvendes på en note. Det kan være en af følgende:

- En enkel sammenligning ved brug af standard artitmetik operatorer
- En funktion. Der er indbygget et udvalg af [[Funktioner|funktioner]], og plugins kan tilføje yderligere funktioner.

Syntaksen for de tilgængelige funktioner for filtre og formler er de samme.

### Formler

`formulas` sektionen definerer [[Formler|formelegenskaber]] som kan vises på tværs af alle views i basefilen.

```yaml
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
```

Formelegenskaber undersøtter almindelige aritmetiske operatorer og et udvalg af indbyggede [[Funktioner|funktioner]]. I fremtiden vil plugins kunne tilføje funktioner, som kan anvendes i formler.

Du kan referere efgenskaber på forskellige måder afhængig af deres type:

- **Note egenskaber** er egenskaber defineret i begyndelsen af noten, fx.`note.price` eller `note["price"]`   
  Hvis der ikke er anvendt er præfiks, antages det at det er en `note` egenskab
- **Fil egenskaber** beskriver selve filens egenskaber
  Fx `file.size` eller `file.ext`. Du kan også referere til filobjektet direkte, som fx. `file.hasLink()`
- **Formel egenskaber** er andre formler i basen
  Eksempel `formula.formatted_price`

Så længe der ikke er nogle cirkulære referencer, .kan en formel anvende værdier fra andre formelegenskaber.

Formelegenskaber gemmes altid som tekststrenge i YAML, men deres faktiske **output data type** bestemmes af den underliggende data type og returværdien af funktionen brugt.

Bemærk at bruges af indlejrede citationstegn er nødvendig for at inkludere tekst in YAML feltet. Tekst skal stå i enkelt eller dobbelte anførselstegn.

### Egenskaber

I `properties` sektionen kan der gemmes konfigurationsinformation om hver egenskab. Det er op til det enkelt view, hvordan det vil anvende konfigurationsværdierne. Fx. vil visningsnavn blive brugt som kolonnetitler i tabeller.

```yaml
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
```

Visningsnavne vil ikke blive brugt i filtre eller formler.

### Summaries

Sektionen `summaries` kan anvendes til at definere brugerdefinerede summeringsformler. Der er flere standard formler til rådelighed.

```yaml
summaries:
  customAverage: 'values.mean().round(3)'
```

I dette eksempel er formlen `customAverage` den samme som standardformelen `Average`, bortset fra at værdien er afrundet med et andet decimaltal. Nøgleordet `values` i sumemringsformler er en liste indeholdende alle værdierne for egenskaben for alle noter i reaultatsættet. Summeringsformlen bør returnere en enkelt`Value`.

Bemærk at denne `summaries` sektion er forskellig fra `summaries` sektionen i viewkonfigurationen (forklares nedenfor), hvor summeringsformler tildeles specifikke egenskaber.

#### Standard summeringsformler

| Navn      | Input Type | Beskrivelse                                                   |
| --------- | ---------- | ------------------------------------------------------------- |
| Average   | Tal     | Det matematiske gennemsnit af alle tal fra inputværdierne.   |
| Min       | Tal     | Det mindste tal blandt inputværdierne.                    |
| Max       | Tal     | Det største tal blandt inputværdierne.                     |
| Sum       | Tal     | Summen af alle tal i inputværdierne.                          |
| Range     | Tal     | Forskellen mellem inputværdierne      |
| Median    | Tal     | Den matematiske median af alle tal fra inputværdierne. |
| Stddev    | Tal     | Standardafvigelsen for alle tal fra inputværdierne.  |
| Earliest  | Dato       | Den tidligste dato blandt inputværdierne.                      |
| Latest    | Dato       | Den seneste dato blandt inputværdierne.                        |
| Range     | Dato       | Forskellen mellem `Latest` og `Earliest`.               |
| Checked   | Boolsk    | Antallet af `true` værdier.                                  |
| Unchecked | Boolsk    | Antallet af `false` værdier.                                 |
| Empty     | Alle        | Antallet af værdier i inputtet, som er tomme.             |
| Filled    | Alle        | Antallet af værdier i inputtet, som ikke er tomme.         |
| Unique    | Alle        | Antallet af unikke værdier i inputtet.                     |

### Views

Sektionen `views` definerer, hvordan data skal vises. Hver indgang i `views` listen definerer et separat view med de samme data, og der kan være så mange views, som det er nødvendigt.

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

- `type` vælger fra de indbyggede- og plugintilføjede viewtyper
- `name` er et visningsnavn og kan anvendes til at definere standardviewet
- `filters` er det samme som beskrevet ovenfor, men gælder kun for dette view
- `groupBy` specificerer en egenskab og en sorteringsrækkefølge. Den specificerede egenskabs værdi for hver række benyttes til at placere rækken i grupper
- `summaries` mapper egenskabsnavne til et navngivet "summary". Summaries udfører en aggregering over egenskaberne for alle rækker.

[[Views]] kan tilføje yderligere data for at gemme nødvendig information til at kunne opretholde tilstand eller blive vist korrekt, så pluginudviklere skal være påpasselige med ikke a anvende nøgler som allerede benyttes af Baser pluginnet. Fx. kan et tebelview anvende disse ti lat begrænse antallet af rækker eller til at vælge hvilken kolonne, som skal benyttes til at sortere rækker og i hvilken rækkefølge. En anden viewtype såsom et landkort kunne bruge det til at vide hvilken egenskab, der svarer til breddegraden og længdegraden og hvilken egenskab, som skal vises som punktets titel.

APIet vil i fremtiden tillade views at læse og skrive disse værdier, og det vil kunne tillade viewet at oprette sit eget konfigurationsinterface.

## Egenskaber

Baser anvender tre egenskabstyper:

1. **Noteegenskaber**, gemt i begyndelsen af Markdown filer
2. **Filegenskaber**, som er tilgængelig for alle filtyper
3. **Formelegenskaber**, som er defineret i `.base` filen (se foroven)

### Noteegenskaber

[[Egenskaber|Noteegenskaber]] er kun tilgængeligt for Markdown filer, og er gemt i starten af en note i YAML format. Disse egenskaber kan tilgås ved at anvende formatet `note.author` eller forkortet `author`.

### Filegenskaber

Filegenskaber refererer til den fil, som for nuværende bliver testet eller evalueret. Filegenskaber er tilgængelige for alle [[Accepterede filformater|filtyper]] inklusiv vedhøftninger.

Fx. vil `file.ext == "md"` være sandt for alle Markdown filer og falsk for alle andre filtyper.

| Egenskab      | Type   | Beskrivelse                                                   |
| ------------- | ------ | ------------------------------------------------------------- |
| `file.backlinks`  | Liste   | Liste af tilbagelinkfiler. Note: Denne egenskab er beregningstung. Hvis nødvendigt, så lav det modsatte kald ved at anvende`file.links`. Note: Opfrisker ikke automatisk resultater, hvis boksen ændres |
| `file.ctime`  | Dato   | Oprettelsestidspunkt                                                  |
| `file.embeds` | Liste   | Liste med alle indlejringer i notesn                                |
| `file.ext`    | Streng | Filtype navn                                                |
| `file.file`   | Fil   | Filobjekt, hvilket kun kan anvendes med specifikke funktioner
| `file.folder` | Streng | Sti til filens mappe
| `file.links`  | Listee   | Liste med alle interne links i noten, inklusiv i YAML sektionen i begyndelsen af noten, hvis den findes |
| `file.mtime`  | Dato   | Modifikationstidspunkt                                                 |
| `file.name`   | Streng | Filnavn                                                     |
| `file.path`   | Streng | Filens sti                                              |
| `file.properties`   | Object | Alle filens egenskaber. Note: Opfrisker ikke automatisk resultater, hvis boksen ændres |
| `file.size`   | Tal | Filstørrelse                                                     |
| `file.tags`   | Liste   | Liste med alle filens tags, inklusiv i YAML sektionen i begyndelsen af noten, hvis den findes          |

### Sådan tilgår du egenskaber med `this`

Du kan anvende `this` objektet til at tilgå filegenskaber. Hvad `this` refererer til afhænger af, hvor basen vises. 

Når basen er åbnet i hovedindholdsområdet, peger `this` på basefilens egne filegenskaber. Fx. vil `this.file.folder` returnere mappestien til basens placering i boksen.

Når en base indlejres i en anden fil, vil `this` pege på den _indlejrede_ fils egenskaber (noten eller det lærred, som indeholder basen). Fx. vil `this.file.name` returnerer navnet på filen som indlejrer basen og ikke basen.

Når basen er i et sidepanel, vil `this` referere til den aktive fil i hovedindholdsområdet. Dette lader dig oprette hurtige søgninger baseret på den aktive fil. Fx. kan du anvende `file.hasLink(this.file)` for at replikere tilbagelinkspanelet.

## Operatorer

### Aritmetiske operatorer

Aritmetiske operatorer udfører aritmetik på tal. Fx. `radius * (2 * 3.14)`.

| Operator | Beskrivelse |
| -------- | ----------- |
| `+`      | plus        |
| `-`      | minus       |
| `*`      | multiplikation    |
| `/`      | division      |
| `%`      | modulo      |
| `( )`    | parentes |

### Dato aritmetik

Datoer kan modificeres ved at addere eller subtraktere varigheder. Enheder for varihed accepterer flere formater:

| Enhed                     | Varighed |
| ------------------------ | -------- |
| `y`, `year`, `years`     | år     |
| `M`, `month`, `months`   | måneder    |
| `d`, `day`, `days`       | dage      |
| `w`, `week`, `weeks`     | uger     |
| `h`, `hour`, `hours`     | timer     |
| `m`, `minute`, `minutes` | minutter   |
| `s`, `second`, `seconds` | sekunder   |

Anvend `+` eller `-` operatoren for at modificere eller forskyde datoer med en varighed. Fx. vi l`date + "1M"` tilføje en måned til datoen, mens `date - "2h"` vil trække 2 timer fra datoen.

Den global [[Functioner|funktion]] `today()` kan anvendes til at få den nuværende dato, og `now()` kan anvendes til at få den nuværende dato med tidsangivelse.

- `now() + "1 day"` returnerer en datotid præcist 24 timer fra at beregningen udføres
- `file.mtime > now() - "1 week"` returnerer `true` hvis filen er blevet modificeret indenfor den sidste uge
- `date("2024-12-01") + "1M" + "4h" + "3m"` returnerer et datoobejkt, der repræsenterer `2025-01-01 04:03:00`
- Fratræk to datoer for at få forskellen i antal af milisekeunder mellem dem, fx. `now() - file.ctime`
- For at få datoen fra en datotid, anvend `datetime.date()`
- Anvend `format()` funktionen til at formetere et datoobjekt, fx. `datetime.format("YYYY-MM-DD")`

### Sammenligningsoperatorer

Sammenligningsoperatorer kan anvendes til at sammenligned tal eller datoobjekter. Lig med og ikke lig med kan anvendes med alle typer, ikke bare tal og datoer.

| Operator | BEskrivelse              |
| -------- | ------------------------ |
| `==`     | lig med                   |
| `!=`     | ikke lig med                |
| `>`      | større end             |
| `<`      | mindre end                |
| `>=`     | større end eller lig med |
| `<=`     | mindre end eller lig med    |

### Boolske operatorer

Boolske operatorer kan anvendes til at kombinere eller invertere logiske værdier, der resulterer i en sand eller falsk værdi.

| Operator | Beskrivelse |
| -------- | ----------- |
| `!`      | logisk ikke |
| `&&`     | logisk og |
| \|\|     | logisk eller  |

## Funktioner

Se [[Funktioner|listen af funktioner]], som kan anvendes i formler og [[Views|filtre]].

## Typer

Baser har et typesystem, som benyttes af formler og filtre for at udføre funktioner på egenskaber.

### Tekststrenge, tal, og boolske værdier

Tekststrenge, tal, og boolske værdier er "primitive" værdier, som ikke kræver en funktion, for at blive oprettet.

- Tekststrenge er omkranset af enkelt eller dobbelt citationstegn, fx. `"besked"`
- Tal skrives som cifre, og kan valgfrit omkranses af parenteser for tydelighed. Fx. `1` or `(2.5)`
- Boolske operatoren skrives som `true` eller `false` uden citationstegn

### Datoer og varigheder

Datoer repræsenterer en specifik dato, eller en datotid afhængig af den funktion, som er anvendt for at oprette dem, eller den type, som er blevet tildelt til [[Egenskaber|egenskaben]].

- Benyt `date` funktionen for at oprette en dato, fx. `date("2025-01-01 12:00:00")`
- Tilføj eller fratræk en varihed for at modificere en dato, fx. `now() + "1 hour"` or `today() + "7d"`
- Sammenlign datoer ved ta anvende sammenligningsoperatorer (fx. `>` eller `<`) og aritmetiske operatorer (fx. vil `(now() + "1d") - now()` returnere `86400000` millisekunder.)
- Benyt de tilgængelige felter (`now().hour`) eller den bekvemmelige funktion (`now.time()`), for at udtrække dele af en dato
- Der er mange andre [[Funktioner|felter og funktioner]] til rådighed for datoobjekter

### Objekter og lister

- Du kan anvende `list()` funktionen for at omdanne et enkelt element til en liste. Det er specielt brugbart for egenskaber, som kan indeholde en blanding af lister og enkeltværdier
- Du kan tilgå listeelementer ved at anvende firkantede parenteser, som er 0-indekseret. Fx.`egenskab[0]` returnerer det først element i listen
- Du kan tilgå objektelementer ved brug af firkantede parenteser eller punktum notation. Fx. `egenskab.underegenskab` eller `egenskab["underegenskab"]`

### Filer og links

[[Link noter|Wikilinks]] i [[Egenskaber|egenskabssektionen]] af en note opfattes automatisk som linkobjekter. Links vil gengives som et klikbart link i [[Views|viewet]].

- Anvend den globale `link` [[Funktioner|funktion]] for at oprette links, fx. `link("filnavn")` eller `link("https://obsidian.md")`
- Du kan oprette et link fra enhver tekststreng, fx. `link(file.ctime.date().toString())`.
- Du kan angive et links visningstekst, ved at tilføje en valgfri ekstra parameter som en streng eller et ikon, fx. `link("filnavn", "Titel")` or `link("filnavn", icon("plus"))`.

Et filobjekt kan omdannes til et link ved brug af `fil.asLink()` og med en valgfri visningstekst, som ekstra parameter.

Du kan sammenligne links med `==` og `!=`. De er identiske, så længe de peger på den samme fil, eller hvis filen ikke eksisterer på kørselstidspunktet. Deres visningstekst skal også være identiske.

Links kan også sammenlignes med filer, såsom `file` or `this`. De er identiske, hvis linket peger på filen, fx. `forfatter == this`.

Links kan også vises afkrydset i lister, fx. `forfattere.contains(this)`.
