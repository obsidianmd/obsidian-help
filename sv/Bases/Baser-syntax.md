---
permalink: bases/syntax
publish: true
mobile: true
description: Den här sidan ger en introduktion till Bases-syntax i Obsidian.
---
När du [[Skapa en bas|skapar en bas]] i Obsidian sparas den som en `.base`-fil. Baser redigeras vanligtvis via appens gränssnitt, men syntaxen kan också redigeras manuellt och bäddas in i ett kodblock.

Syntaxen för [[Introduktion till baser|baser]] definierar [[Vyer]], filter och [[Formler|formler]]. Baser måste vara giltig YAML som följer schemat som definieras nedan.

## Exempel

Här är ett exempel på en bas-fil. Vi går igenom varje avsnitt i detalj.

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

### Filter

Som standard inkluderar en bas varje fil i valvet. Det finns inget `from` eller `source` som i SQL eller Dataview. Avsnittet `filters` låter dig definiera villkor för att begränsa datamängden.

```yaml
# Enkelt filter:
filters:
  and:
    - file.hasTag("tag")

# Komplext filter:
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

Det finns två tillfällen att tillämpa filter:

1. På den globala `filters`-nivån (visad ovan) där de gäller för alla vyer i basen.
2. På `view`-nivån där de bara gäller för en specifik vy.

Dessa två avsnitt är funktionellt likvärdiga och vid utvärdering för en vy sammanfogas de med ett `AND`.

Avsnittet `filters` innehåller antingen ett enstaka filteruttryck som en sträng, eller ett rekursivt definierat filterobjekt. Filterobjekt kan innehålla ett av `and`, `or` eller `not`. Dessa nycklar är en heterogen lista av andra filterobjekt eller filteruttryck i strängar. Ett filteruttryck är en rad som utvärderas till sant eller falskt när den tillämpas på en anteckning. Det kan vara något av följande:

- En grundläggande jämförelse med vanliga aritmetiska operatorer.
- En funktion. En mängd [[Funktioner]] är inbyggda, och tillägg kan lägga till ytterligare funktioner.

Syntaxen och tillgängliga funktioner för filter och formler är desamma.

### Formler

Avsnittet `formulas` definierar [[Formler|formelegenskaper]] som kan visas i alla vyer i bas-filen.

```yaml
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
```

Formelegenskaper stöder grundläggande aritmetiska operatorer och en mängd inbyggda [[Funktioner]]. I framtiden kommer tillägg att kunna lägga till funktioner för användning i formler.

Du kan referera till egenskaper på olika sätt beroende på deras typ:

- **Anteckningsegenskaper** är egenskaper definierade i anteckningens frontmatter. Till exempel `note.price` eller `note["price"]`.
  Om inget prefix anges antas egenskapen vara en `note`-egenskap.
- **Filegenskaper** beskriver själva filen.
  Till exempel `file.size` eller `file.ext`. Du kan också referera till filobjektet direkt, t.ex. `file.hasLink()`.
- **Formelegenskaper** är andra formler i basen.
  Exempel: `formula.formatted_price`.

En formel kan använda värden från andra formelegenskaper, så länge det inte finns någon cirkulär referens.

Formelegenskaper lagras alltid som strängar i YAML, men deras faktiska **utdatatyp** bestäms av typen på underliggande data och returvärdet från eventuella funktioner som används.

Observera att användning av nästlade citattecken är nödvändigt för att inkludera textliteraler i YAML-fältet. Textliteraler måste omges av enkla eller dubbla citattecken.

### Egenskaper

Avsnittet `properties` gör det möjligt att lagra konfigurationsinformation om varje egenskap. Det är upp till den enskilda vyn hur dessa konfigurationsvärden ska användas. Till exempel i tabeller används visningsnamnet för kolumnrubrikerna.

```yaml
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
```

Visningsnamn används inte i filter eller formler.

### Sammanfattningar

Avsnittet `summaries` kan användas för att definiera anpassade sammanfattningsformler. Utöver att definiera sammanfattningsformler här finns det flera standardsammanfattningsformler tillgängliga.

```yaml
summaries:
  customAverage: 'values.mean().round(3)'
```

I detta exempel är formeln `customAverage` densamma som standard `Average`, förutom att värdet avrundas till ett annat antal decimaler. I sammanfattningsformler är nyckelordet `values` en lista som innehåller alla värden för den egenskapen över alla anteckningar i resultatmängden. Sammanfattningsformeln ska returnera ett enstaka `Value`.

Observera att detta `summaries`-avsnitt skiljer sig från `summaries`-avsnittet i vy-konfigurationen (förklaras nedan) där sammanfattningsformler tilldelas specifika egenskaper.

#### Standardsammanfattningsformler

| Namn      | Indatatyp | Beskrivning                                                    |
| --------- | --------- | -------------------------------------------------------------- |
| Average   | Nummer    | Det matematiska medelvärdet av alla tal från indatavärdena.    |
| Min       | Nummer    | Det minsta talet från indatavärdena.                           |
| Max       | Nummer    | Det största talet från indatavärdena.                          |
| Sum       | Nummer    | Summan av alla tal i indatan.                                  |
| Range     | Nummer    | Skillnaden mellan `Max` och `Min`.                             |
| Median    | Nummer    | Den matematiska medianen av alla tal från indatavärdena.       |
| Stddev    | Nummer    | Standardavvikelsen av alla tal från indatavärdena.             |
| Earliest  | Datum     | Det tidigaste datumet från indatavärdena.                      |
| Latest    | Datum     | Det senaste datumet från indatavärdena.                        |
| Range     | Datum     | Skillnaden mellan `Latest` och `Earliest`.                     |
| Checked   | Boolean   | Antalet `true`-värden.                                         |
| Unchecked | Boolean   | Antalet `false`-värden.                                        |
| Empty     | Valfri    | Antalet värden i indatan som är tomma.                         |
| Filled    | Valfri    | Antalet värden i indatan som inte är tomma.                    |
| Unique    | Valfri    | Antalet unika värden i indatan.                                |

### Vyer

Avsnittet `views` definierar hur data kan renderas. Varje post i `views`-listan definierar en separat vy av samma data, och det kan finnas hur många olika vyer som helst.

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

- `type` väljer bland inbyggda och tilläggs-tillagda vytyper.
- `name` är visningsnamnet och kan användas för att definiera standardvyn.
- `filters` är exakt desamma som beskrivs ovan, men gäller bara för vyn.
- `groupBy` anger en egenskap och sorteringsriktning. Värdet på den angivna egenskapen för varje rad används för att placera raden i grupper.
- `summaries` mappar egenskapsnamn till en namngiven sammanfattning. Sammanfattningar utför en aggregering på egenskapen över alla rader.

[[Vyer]] kan lägga till ytterligare data för att lagra all information som behövs för att bibehålla tillstånd eller rendera korrekt, men tilläggsförfattare bör se till att inte använda nycklar som redan används av kärntillägget Bases. Som exempel kan en tabellvy använda detta för att begränsa antalet rader eller för att välja vilken kolumn som används för att sortera rader och i vilken riktning. En annan vytyp som en karta kan använda detta för att mappa vilken egenskap i anteckningen som motsvarar latitud och longitud och vilken egenskap som ska visas som nåltitel.

I framtiden kommer API att tillåta vyer att läsa och skriva dessa värden, vilket gör det möjligt för vyn att bygga sitt eget gränssnitt för konfiguration.

## Egenskaper

Det finns tre typer av egenskaper som används i baser:

1. **Anteckningsegenskaper**, lagrade i frontmatter i Markdown-filer.
2. **Filegenskaper**, tillgängliga för alla filtyper.
3. **Formelegenskaper**, definierade i själva `.base`-filen (se ovan).

### Anteckningsegenskaper

[[Egenskaper|Anteckningsegenskaper]] är bara tillgängliga för Markdown-filer och lagras i YAML-frontmatter för varje anteckning. Dessa egenskaper kan nås med formatet `note.author` eller helt enkelt `author` som kortform.

### Filegenskaper

Filegenskaper refererar till filen som för närvarande testas eller utvärderas. Filegenskaper är tillgängliga för alla [[Accepterade filformat|filtyper]], inklusive bilagor.

Till exempel kommer filtret `file.ext == "md"` att vara sant för alla Markdown-filer och falskt i övrigt.

| Egenskap           | Typ    | Beskrivning                                                    |
| ------------------- | ------ | -------------------------------------------------------------- |
| `file.backlinks`    | Lista  | Lista med bakåtlänksfiler. Obs: Denna egenskap är prestandakrävande. När det är möjligt, vänd på uppslagningen och använd `file.links`. Uppdaterar inte automatiskt resultat när valvet ändras. |
| `file.ctime`        | Datum  | Skapad tid                                                     |
| `file.embeds`       | Lista  | Lista med alla inbäddningar i anteckningen                     |
| `file.ext`          | Sträng | Filändelse                                                     |
| `file.file`         | Fil    | Filobjekt, kan bara användas i specifika funktioner             |
| `file.folder`       | Sträng | Sökväg till filmappen                                          |
| `file.links`        | Lista  | Lista med alla interna länkar i anteckningen, inklusive frontmatter |
| `file.mtime`        | Datum  | Ändrad tid                                                     |
| `file.name`         | Sträng | Filnamn                                                        |
| `file.path`         | Sträng | Sökväg till filen                                              |
| `file.properties`   | Objekt | Alla egenskaper på filen. Obs: Uppdaterar inte automatiskt resultat när valvet ändras. |
| `file.size`         | Nummer | Filstorlek                                                     |
| `file.tags`         | Lista  | Lista med alla taggar i filinnehållet och frontmatter           |

### Åtkomst till egenskaper med `this`

Använd `this`-objektet för att komma åt filegenskaper. Vad `this` refererar till beror på var basen visas.

När basen öppnas i huvudinnehållsområdet pekar `this` på egenskaperna för själva bas-filen. Till exempel returnerar `this.file.folder` mappsökvägen där basen finns.

När basen är inbäddad i en annan fil pekar `this` på egenskaperna för den _inbäddande_ filen (anteckningen eller Canvas som innehåller basen). Till exempel returnerar `this.file.name` namnet på den inbäddande filen, inte basen.

När basen är i ett sidofält refererar `this` till den aktiva filen i huvudinnehållsområdet. Detta låter dig skapa frågor baserade på den aktiva filen. Till exempel kan du använda `file.hasLink(this.file)` för att replikera bakåtlänkspanelen.

## Operatorer

### Aritmetiska operatorer

Aritmetiska operatorer utför aritmetik på tal. Till exempel `radius * (2 * 3.14)`.

| Operator | Beskrivning |
| -------- | ----------- |
| `+`      | plus        |
| `-`      | minus       |
| `*`      | multiplikation |
| `/`      | division    |
| `%`      | modulo      |
| `( )`    | parentes    |

### Datumaritmetik

Datum kan modifieras genom att addera och subtrahera varaktigheter. Varaktighetsenheter accepterar flera format:

| Enhet                    | Varaktighet |
| ------------------------ | ----------- |
| `y`, `year`, `years`     | år          |
| `M`, `month`, `months`   | månad       |
| `d`, `day`, `days`       | dag         |
| `w`, `week`, `weeks`     | vecka       |
| `h`, `hour`, `hours`     | timme       |
| `m`, `minute`, `minutes` | minut       |
| `s`, `second`, `seconds` | sekund      |

För att modifiera eller förskjuta Date-objekt, använd operatorn `+` eller `-` med en varaktighetssträng. Till exempel lägger `date + "1M"` till 1 månad till datumet, medan `date - "2h"` subtraherar 2 timmar från datumet.

Den globala [[Funktioner|funktionen]] `today()` kan användas för att hämta aktuellt datum, och `now()` kan användas för att hämta aktuellt datum med tid.

- `now() + "1 day"` returnerar en datumtid exakt 24 timmar från exekveringstillfället.
- `file.mtime > now() - "1 week"` returnerar `true` om filen ändrades under den senaste veckan.
- `date("2024-12-01") + "1M" + "4h" + "3m"` returnerar ett Date-objekt som representerar `2025-01-01 04:03:00`.
- Subtrahera två datum för att få millisekundskillnaden mellan dem, till exempel `now() - file.ctime`.
- För att hämta datumdelen av ett Date med tid, använd `datetime.date()`.
- För att formatera ett Date-objekt, använd funktionen `format()`, till exempel `datetime.format("YYYY-MM-DD")`.

### Jämförelseoperatorer

Jämförelseoperatorer kan användas för att jämföra tal eller Date-objekt. Lika med och inte lika med kan användas med alla typer av värden, inte bara tal och datum.

| Operator | Beskrivning             |
| -------- | ----------------------- |
| `==`     | lika med                |
| `!=`     | inte lika med           |
| `>`      | större än               |
| `<`      | mindre än               |
| `>=`     | större än eller lika med |
| `<=`     | mindre än eller lika med |

### Booleska operatorer

Booleska operatorer kan användas för att kombinera eller invertera logiska värden, vilket resulterar i ett sant eller falskt värde.

| Operator | Beskrivning  |
| -------- | ------------ |
| `!`      | logiskt inte |
| `&&`     | logiskt och  |
| \|\|     | logiskt eller |

## Funktioner

Se [[Funktioner|listan med funktioner]] som kan användas i formler och [[Vyer|filter]].

## Typer

Baser har ett typsystem som används av formler och filter för att tillämpa funktioner på egenskaper.

### Strängar, tal och booleska värden

Strängar, tal och booleska värden är "primitiva" värden som inte kräver en funktion för att skapas.

- Strängar omges av enkla eller dubbla citattecken, till exempel `"message"`.
- Tal skrivs som siffror och kan valfritt omges av parenteser för tydlighet. Till exempel `1` eller `(2.5)`.
- Booleska värden skrivs som `true` eller `false` utan citattecken.

### Datum och varaktigheter

Datum representerar ett specifikt datum, eller ett datum och tid beroende på funktionen som används för att skapa dem, eller den typ som har tilldelats [[Egenskaper|egenskapen]].

- För att konstruera ett datum, använd funktionen `date`, till exempel `date("2025-01-01 12:00:00")`
- För att modifiera ett datum, addera eller subtrahera en varaktighet, till exempel `now() + "1 hour"` eller `today() + "7d"`
- Jämför datum med jämförelseoperatorer (t.ex. `>` eller `<`) och aritmetiska operatorer (till exempel returnerar `(now() + "1d") - now()` `86400000` millisekunder.)
- För att extrahera delar av ett datum, använd de tillgängliga fälten (`now().hour`), eller en bekvämlighetsfunktion (`now.time()`).
- Många andra [[Funktioner|fält och funktioner]] är tillgängliga på datumobjekt.

### Objekt och listor

- Gör om ett enstaka element till en lista med funktionen `list()`. Detta är särskilt användbart för egenskaper som kan innehålla en blandning av listor eller enskilda värden.
- Åtkomst till listelement sker med hakparenteser och ett 0-baserat index. Till exempel returnerar `property[0]` det första elementet från listan.
- Åtkomst till objektelement sker med hakparenteser och elementnamnet eller punktnotation. Till exempel `property.subprop` eller `property["subprop"]`.

### Filer och länkar

[[Länka anteckningar|Wikilänkar]] i [[Egenskaper|frontmatter-egenskaper]] identifieras automatiskt som länkobjekt. Länkar renderas som en klickbar länk i [[Vyer|vyn]].

- För att konstruera en länk, använd den globala `link`-[[Funktioner|funktionen]], till exempel `link("filename")` eller `link("https://obsidian.md")`.
- Du kan skapa en länk från valfri sträng, till exempel `link(file.ctime.date().toString())`.
- För att ställa in visningstexten, skicka in en valfri sträng eller ikon som en andra parameter, till exempel `link("filename", "display")` eller `link("filename", icon("plus"))`.

Ett File-objekt kan göras om till en länk med `file.asLink()` med en valfri visningstext.

Länkar kan jämföras med `==` och `!=`. De är likvärdiga så länge de pekar på samma fil, eller om filen inte existerar vid uppslagning måste deras länktext vara identisk.

Länkar kan jämföras med filer som `file` eller `this`. De är lika om länken löser sig till filen. Till exempel `author == this`.

Länkar kan också kontrolleras i listinnehållskontroll, till exempel `authors.contains(this)`.
