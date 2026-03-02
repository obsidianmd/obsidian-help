---
aliases:
description: Denne side beskriver i detaljer de funktioner, som kan anvendes i Obsidian baser, så du kan manipulere data fra egenskaber i filtre og formler.
mobile: true
permalink: baser/funktioner
publish: true
---

Funktioner anvendes i [[Introduktion til Baser|baser]] til at manipulere data fra [[Egenskaber|egenskaber]] med [[Views#Filtre|filtre]] og [[Formler|formler]]. Læs reference guiden: [[Basesyntaks]], for at lære mere om, hvordan du kan benytte funktioner.

Udover [[Funktioner#Globale|globale]] funktioner, afhænger de fleste funktioner på de værdityper, som du vil modificere:

- [[Functioner#Alle|Alle]]
- [[Functioner#Date|Date]]
- [[Functioner#Tekststrenge|Tekststrenge]]
- [[Functioner#Tal|Tal]]
- [[Functioner#Lister|Lister]]
- [[Functioner#Links|Links]]
- [[Functioner#Filer|Filer]]
- [[Functioner#Objekter|Objekter]]
- [[Functioner#Regulære udtryk|Regulære udtryk]]

## Globale

Globale funktioner anvendes uden en type.

### `escapeHTML()`

`escapeHTML(html: streng): streng`

- Omdanner specialtegn i en tekststreng, så den kan inkluderes sikkert i HTML.

### `date()`

`date(dato: streng): dato`

- `date(streng): dato` parser den angivne tekststreng og returnerer et dato objekt
- `dato` tekststrengen skal være i formatet `YYYY-MM-DD HH:mm:ss`

### `duration()`

`duration(værdi: streng): periode`

- Parser en tekststreng som en periode. Se the [[Basesyntaks#Dato aritmetik|dato aritmetik sektionen]] for hvordan `værdi` strengformatet skal angives
- Perioder behøver ikke at blive eksplicit skrevet, når der anvendes dato aritmetik (fx. `now() + '1d'`), men skal eksplicit skrives, når der udføres aritmetik (Fx. `now() + (duration('1d') * 2)`)
- Når der udføres aritmetik på perioder med tal skal duration stå til venstre. Fx. `duration('5h') * 2`, i stedet for `2 * duration('5h')`

### `file()`

`file(sti: streng | fil | url): fil`

- Returnerer et filobjekt for den angivne fil eller sti
- Eksempel: `file(link("[[filnavn]]"))` eller `file("sti til fil")`.

### `html()`

`html(html: streng): html`

- Konverterer en streng til et HTML kodestykke

### `if()`

`if(betingelse: alle, sandtResultat: alle, falskResultat?: alle): alle`

- `betingelse` er den betingelse, som skal evalueres
- `sandtResultat` er outputtet, hvis betingelsen er sand
- `falskResultat` er det valgfri output, hvis betingelsen er falsk. Hvis det ikke er angivet, is the optional output if the condition is false. If it is not given, antages det at være `null`
- Returnerer `sandtResultat` hvis `betingelsen` er sand, eller er en sand værdi, eller `falskResultat` hvis ikke
- Eksempel: `if(isModified, "Modificeret", "Ikke modificeret")`

### `image()`

`image(sti: streng | fil | url): billede`

- Returnerer et billedobjekt, som vil blive gengivet i viewet
- Eksempel: `image(image-property)` or `image("https://obsidian.md/images/obsidian-logo-gradient.svg")`

### `icon()`

`icon(navn: streng): ikon`

- Returnere en værdi, som vil blive gengivet som et ikon i viewet. Navnet på ikonet skal matche et supporteret Lucide ikon
- Eksempel: `icon("arrow-right")`.

### `link()`

`link(sti: streng | fil, vis?: værdi): Link`

- Parser `sti` som streng og returnerer et Link objekt, som gengives som et link til den angivne sti
- `vis` er en valgfri parameter, som angiver en tekst for linket

### `list()`

`list(element: alle): List`

- Hvis `element` er en liste, vil funktionen returnere listen umodificeret
- Ellers omdannes det angivne `element` til en liste med et enkelt element, nemlig `element`
- Denne funktion er nyttig, når en egenskab indholder en blanding af strenge eller lister over hele boksen
- Eksempel: `list("værdi")` returnerer `["værdi"]`

### `max()`

`max(værdi1: tal, værdi2: tal...): tal`

- Returnerer det største tal af de angivne tal

### `min()`

`min(værdi1: tal, værdi2: tal...): tal`

- Returnerer det mindste tal af de angivne tal

### `now()`

`now(): dato`

- `now()` returnerer et datoobjekt, der repræsenterer det nuværende tidspunkt

### `number()`

`number(værdi: alle): tal`

- Forsøger at returnere den angivne værdi som et tal
- Datoobjekter returneres i millisekunder siden Unix æraen
- Boolske værdier returnerer 1 eller 0
- Strenge vil blive parset til tal og returhnere en fejl, hvis resultatet er ugyldigt
- Eksempel: `number("3.4")` returnerer `3.4`

### `today()`

`today(): dato`

- `today()` returnerer et datoobjekt, der repræsenterer den nuværende dato, hvor tidspunktet er sat til nul

## Alle

Funktioner, som du kan anvende med alle værdier. Det inkluderer tekststrenge (fx. `"hej"`), tal (fx. `42`), lister (fx. `[1,2,3]`), objekter osv.

### `isTruthy()`

`alle.isTruthy(): boolsk`

- Returnerer værdien som en boolsk værdi
- Eksempel: `1.isTruthy()` returnerer `true`.

### `isType()`

`alle.isType(type: streng): boolsk`

- Returnerer sandt, hvis værdien er af den angivne type
- Eksempel: `"eksempel".isType("string")` og `true.isType("boolean")` returnerer begge sandt

### `toString()`

`alle.toString(): streng`

- Returnerer enhver værdi som en tekststreng
- Eksempel: `123.toString()` returnerer `"123"`

## Dato

Funktioner, som du kan anvende med en dato og tid, såsom `date("2026-05-03")`. Datosammenligninger kan udføres ved brug af [[Basesyntaks#Dato aritmetik|dato aritmetik]].

### Felter

De følgende felter kan anvendes som datoer:

| Felt              | Type     | Beskrivelse                  |
| ------------------ | -------- | ---------------------------- |
| `date.year`        | `tal` | Datoens år         |
| `date.month`       | `tal` | Datoens måned (1–12) |
| `date.day`         | `tal` | Månedens dag         |
| `date.hour`        | `tal` | Timen (0–23)              |
| `date.minute`      | `tal` | Minuttet (0–59)            |
| `date.second`      | `tal` | Sekundet (0–59)            |
| `date.millisecond` | `tal` | Millisekundet (0–999)      |

### `date()`

`dato.date(): dato`

- Returnerer et datoobjekt, hvor tidspunktet er fjernet
- Eksempel: `now().date().format("YYYY-MM-DD HH:mm:ss")` returnerer en streng såsom "2026-05-03 00:00:00"

### `format()`

`dato.format(format: streng): streng`

- `format` er en formatstreng (Fx., `"YYYY-MM-DD"`)
- Returnerer datoen formateret som specificeret af en Moment.js format streng
- Eksempel: `date.format("YYYY-MM-DD")` returnerer `"2026-05-03"`.

### `time()`

`dato.time(): string`

- Returnerer tidspunktet
- Eksempel: `now().time()` returnerer en streng såsom "23:59:59"

### `relative()`

`dato.relative(): streng`

- Returnerer en læsbar sammenligning mellem en dato og det nuværende tidspunkt
- Eksempel: `file.mtime.relative()` returnerer en værdi såsom `3 days ago`

### `isEmpty()`

`dato.isEmpty(): boolsk`

- returnerer falsk

## Streng

Funktioner du kan anvende med en sekvens af tegn såsom `"hej"`.

### Felter

| Felter           | Type     | Beskrivelse                            |
| --------------- | -------- | -------------------------------------- |
| `string.length` | `tal` | Antallet af tegn i strengen |

### `contains()`

`streng.contains(værdi: streng): boolsk`

- `værdi` er den delstren, der søges efter
- Returnerer sandt, hvis strengen indeholder `værdi`
- Eksempel: `"hej".contains("ej")` returnerer `true`

### `containsAll()`

`streng.containsAll(...værdier: streng): boolsk`

- `værdier` er en eller flere delstrenge, der søges efter
- Returnerer sandt, hvis strengen indeholder alle  `værdier`
- Eksempel: `"hej".containsAll("h", "e")` returns `true`

### `containsAny()`

`streng.containsAny(...værdier: streng): boolsk`

- `værdier` er en eller flere delstrenge, der søges efter
- Returnerer sandt, hvis strengen indeholder mindst én af `værdier`
- Eksempel: `"hej".containsAny("x", "y", "e")` returnerer `true`

### `endsWith()`

`streng.endsWith(forespørgsel: streng): boolsk`

- `forespørgsel` er den strengs, som skal tjekkes om den er i enden
- Returnere sandt, hvis strengen enden med `forespørgsel`
- Eksempel: `"hej".endsWith("ej")` returnerer `true`

### `isEmpty()`

`streng.isEmpty(): boolsk`

- Returnerer sandt, hvis strengen ikke har nogle tegn eller ikke findes
- Eksempel: `"Hej verden".isEmpty()` returnerer `false`
- Eksempel: `"".isEmpty()` returnerer `true`

### `lower()`

`streng.lower(): streng`

- Returnerer strengen konverteret til små bogstaver.

### `replace()`

`streng.replace(mønster: streng | regulært-udtryk, erstatning: streng): streng`

- `mønster` er den værdi, som der skal søges efter
- `erstatning` er den værdi, som skal erstatte `mønster` værdien
- Hvis `mønster` er en streng, vil alle forekomster af mønsteret blive erstattet
- Hvis `mønster` er et regulært udtryk, vil flaget `g` bestemme om det kun er den første eller alle forekomster, som skal erstattes
- Eksempel: `""a:b:c:d".replace(/:/, "-")` returnerer `"a-b,c,d"`, mens `"a:b:c:d".replace(/:/g, "-")` returnerer `"a-b-c-d"`

### `repeat()`

`streng.repeat(antal: tal): streng`

- `antal` er antallet af gange som strengen skal gentages
- Eksempel: `"123".repeat(2)` returnerer `"123123"`

### `reverse()`

`streng.reverse(): streng`

- Vender strengen
- Eksempel: `"hej".reverse()` returnerer `"jeh"`.

### `slice()`

`streng.slice(start: tal, slut?: tal): streng`

- `start` er startindekset inklusiv det 'tal' tegn
- `slut` er et valgfrit slutindeks
- Returnerer en delstreng fra `start` (inklusivt) til `slut` (eksklusivt)
- Eksempel: `"Obsidian".slice(1, 4)` returnerer `"bsi"`. Bemærk at indekser begynder nul
- Hvis `slut` ikke angives returneres til slutningen af strengen

### `split()`

`streng.split(separator: streng | regulært-udtryk, n?: tal): liste`

- `separator` er tegnet, hvor en streng skal splittes i mindre delstrenge
- `n` er et valgtfrit antal. Hvis det anvendes, vil resultatlisten indholde de første `n` elementer.
- Returnerer en liste af delstrenge
- Eksempel: `"a,b,c,d".split(",", 3)` eller `"a,b,c,d".split(/,/, 3)` returnerer `["a", "b", "c"]`.

### `startsWith()`

`streng.startsWith(forespørgsel: streng): boolsk`

- `forespørgsel` er strengen, som skal tjekkes, om den er i begyndelsen
- Returnerer sandt, hvis strengen begynder med `forespørgsel`
- Eksempel: `"hej".startsWith("he")` returnerer `true`

### `title()`

`streng.title(): streng`

- Konverterer strengen, så hvert ord i sætningen bliver skrevet med stort bogstav
- Eksempel: `"hej verden".title()` returnerer `"Hej Verden"`

### `trim()`

`streng.trim(): streng`

- Fjerner mellemrum fra begge ender af strengen
- Eksempel: `"  hej  ".trim()` returnerer `"hej"`

## Tal

Funktioner du kan anvende med numeriske tal sådom `42`, `3.14`.

### `abs()`

`tal.abs(): tal`

- Returnerer det positive tal af tallet
- Eksempel: `(-5).abs()` returnerer `5`

### `ceil()`

`tal.ceil(): tal`

- Runder tallet op til nærmeste heltal
- Eksempel: `(2.1).ceil()` returnerer `3`

### `floor()`

`tal.floor(): tal`

- Runder tallet ned til nærmeste heltal
- Eksempel: `(2.9).floor()` returnerer `2`

### `isEmpty()`

`tal.isEmpty(): boolsk`

- Returnerer sandt, hvis tallet ikke findes
- Eksempel: `5.isEmpty()` returnerer `false`

### `round()`

`tal.round(cifre: tal): tal`

- Afrunder tallet til nærmeste heltal
- Den valgfri parameter `cifre` afrunder tallet med det antal cifre
- Eksempel: `(2.5).round()` returnerer `3`, og `(2.3333).round(2)` returnerer `2.33`

### `toFixed()`

`tal.toFixed(præcision: tal): streng`

- `præcision` er antallet af decimaltal
- Returnerer en streng med tallet i fast kommanotation
- Eksempel: `(3.14159).toFixed(2)` returnerer `"3.14"`

## Lister

Funktioner, som du kan anvende med en ordnet liste af elementer, såsom `[1, 2, 3]`.

### Felter

| Felt         | Type     | Beskrivelse                        |
| ------------- | -------- | ---------------------------------- |
| `liste.length` | `tal` | Antallet af elementer i listen |

### `contains()`

`liste.contains(værdi: alle): boolsk`

- `værdi` er det element, som der skal søges efter
- Returnerer sandt, hvis listen indeholder `værdi`
- Eksempel: `[1,2,3].contains(2)` returnerer `true`

### `containsAll()`

`liste.containsAll(...værdier: alle): boolsk`

- `værdier` er en eller flere elementer, som der skal søges efter
- Returnerer sandt, hvis listen indeholder alle `værdier`
- Eksempel: `[1,2,3].containsAll(2,3)` returnerer `true`

### `containsAny()`

`liste.containsAny(...værdier: alle): boolean`

- `værdier` er en eller flere lementer, der skal søges efter
- Returnerer sandt, hvis listen indeholder mindst én af de angivne `værdier`
- Eksempel: `[1,2,3].containsAny(3,4)` returnerer `true`

### `filter()`

`liste.filter(værdi: Boolsk): liste`

- Filtrerer elementerne fra listen ved at kalde en filterfunktion, som benytter variablene `indeks` og `værdi`, og returnerer en boolsk værdi, der fortæller om elementet skal forblive i listen
- `værdi` er værdien af et element i listen
- `indeks` er indekset af den nuværende værdi
- Eksempel: `[1,2,3,4].filter(værdi > 2)` returnerer `[3,4]`

### `flat()`

`liste.flat(): liste`

- Omdanner indlejrede lister til en enkelt liste
- Eksempel: `[1,[2,3]].flat()` returnerer `[1,2,3]`

### `isEmpty()`

`liste.isEmpty(): boolsk`

- Returnerer sandt, hvis listen er tom, dvs. ikke har nogle elementer
- Eksempel: `[1,2,3].isEmpty()` returnerer `false`

### `join()`

`liste.join(separator: streng): streng`

- `separator` er en streng, som skal indsættes mellem elementer
- Samler alle liste elementerne til en enkelt streng
- Eksempel: `[1,2,3].join(",")` returnerer `"1,2,3"`

### `map()`

`liste.map(værdi: Alle): liste`

- Kalder en konverteringsfunktions, som benytter variablene `indeks` og `værdi` , og som så transformerer hvert element i listen, og returnerer den nye værdi placeret i listen
- `værdi` er værdien af et element i listen
- `indeks` er indekset af den nuværende værdi
- Eksempel: `[1,2,3,4].map(værdi + 1)` returnerer `[2,3,4,5]`

### `reduce()`

`liste.reduce(udtryk: Alle, akk: Alle): Alle`

- Reducerer elementerne i listen til et enkelt element ved at anvende et udtryk for hvert element. UDtrykket kan anvende variablene `indeks`, `værdi`, og `akk` (akkumulatoren), og bør returnere den næste akkumulerede værdi
- `udtryk` evalueres for hvert udtryk i listen
- `værdi` er værdien af det nuværende element i listen
- `indeks` er det nuværende elements indeks
- Eksempel (sum): `[1,2,3].reduce(akk + værdi, 0)` returnerer `6`.
- Eksempel (maksimum): `værdier.filter(værdier.isType("number")).reduce(if(akk == null || værdi > akk, værdi, akk), null)` returnerer det største tal eller `null`, hvis der ikke er nogen

### `reverse()`

`liste.reverse(): liste`

- Vender listens rækkefølge
- Eksempel: `[1,2,3].reverse()` returnerer `[3,2,1]`

### `slice()`

`liste.slice(start: tal, slut?: tal): liste`

- `start` er startindekset inklusiv
- `slut` er den valgfri eksklusive indeks
- Returnerer en kopi af den portion af listen, som går fra `start` (inklusiv) til `slut` (eksklusiv)
- Eksempel: `[1,2,3,4].slice(1,3)` returnerer `[2,3]`
- Hvis `slut` ikke angives, så returneres til slutningen af listen

### `sort()`

`liste.sort(): liste`

- Sorterer listens elementer fra mindst til størst
- Eksempel: `[3, 1, 2].sort()` returnerer `[1, 2, 3]`
- Eksempel: `["c", "a", "b"].sort()` returnerer `["a", "b", "c"]`

### `unique()`

`liste.unique(): liste`

- Fjernes dubletter i listen
- Eksempel: `[1,2,2,3].unique()` returnerer `[1,2,3]`

## Links

Funktioner du kan anvende på links. Links kan oprettes fra en fil (`file.asLink()`) eller en sti (`link("path")`).

### `asFile()`

`link.asFile(): fil`

- Returnerer et fil objekt, hvilket linket refererer til en gyldig lokal fil
- Eksempel: `link("[[filenavn]]").asFile()`

### `linksTo()`

`link.linksTo(fil): boolsk`

- Returnerer hvorvidt filen, der er repræsenteret af `link` har et link til  `fil`

## Filer

Funktioner som du kan envende med filer i boksen.

### Felter

De følgende fleter er tilgængelige for filer:

| Felt             | Type     | Beskrivelse                                             |
| ----------------- | -------- | ------------------------------------------------------- |
| `fil.name`       | `streng` | Filens navn.                                  |
| `fil.basename`   | `streng` | Filens navn uden filtypenavn.       |
| `fil.path`       | `streng` | Den fulde sti til denne fil relativt til boksens rod. |
| `fil.folder`     | `streng` | Den fulde sti til den overordnede mappe.                     |
| `fil.ext`        | `streng` | Filtypen for denne fil.                       |
| `fil.size`       | `tal` | Størrelsen på denen fil i bytes.                        |
| `fil.properties` | `object` | Filens note egenskaber.                      |
| `fil.tags`       | `liste`   | Filens tags inklusiv indlejrede tags.           |
| `fil.links`      | `liste`   | Filens interne links.                    |
| `fil.ctime`      | `dato`   | Filens oprettelsestidspunk.                |
| `fil.mtime`      | `dato`   | Tidspunktet hvor filen sidst blev modificeret.          |

### `asLink()`

`fil.asLink(vis?: streng): Link`

- `vis` valgfri tekst, som kan vises i stedet for linket
- Returnerer et Link object som gengives som et fungerende link
- Eksempel: `fil.asLink()`

### `hasLink()`

`fil.hasLink(andenFil: fil | streng): boolsk`

- `andenFil` er et andet filobjekt eller en streng (der angiver stien), som skal tjekkes
- Returnerer sandt, hvis `fil` linker til `andenFil`
- Eksempel: `fil.hasLink(andenFil)` returnerer `true`, hvis der er et link fra `fil` til `andenFil`

### `hasProperty()`

`fil.hasProperty(navn: streng): boolsk`

- Returnerer sandt, hvis noten har den angivne filegenskab

### `hasTag()`

`fil.hasTag(...værdier: streng): boolsk`

- `værdier` er en eller flere tagnavne
- Returnerer sandt, hvis filen har mindst én af taggene angivet af `værdier`
- Eksempel: `fil.hasTag("tag1", "tag2")` returnerer `true` hvis filen har tag `#tag1` eller `#tag2`. Det inkluderer også alle [[Tags#Indlejrede tags|indlejrede tags]], såsom `#tag1/a` eller `#tag2/b`

### `inFolder()`

`fil.inFolder(mappe: streng): boolsk`

- `mappe` er navnet på den mappe, som skal tjekkes
- Returnerer sandt, hvis filen er i den specificerede mappe eller en af dens undermapper
- Eksempel: `fil.inFolder("noter")` returnerer `true`

## Objekt

Funktioner, som du kan anvende med en samling af nøgle-værdi par, såsom `{"a": 1, "b": 2}`.

### `isEmpty()`

`objekt.isEmpty(): boolsk`

- Returnerer sandt, hvis objektet ikke har nogle egne egenskaber
- Eksempel: `{}.isEmpty()` returnerer `true`

### `keys()`

`objekt.keys(): liste`

- Returnerer en liste indeholdende objektets nøgler

### `values()`

`objekt.values(): liste`

- Returnerer en liste indeholdende objektets værdier

## Regulære udtryk

Funktioner, som du kan anvende med regulære udtryk, såsom `/abc/`.

### `matches()`

`regulærtudtrk.matches(værdi: streng): boolsk`

- `værdi` er strengen, som skal testes
- Returnerer sandt, hvis det regulære udtryk matcher `værdi`
- Eksempel: `/abc/.matches("abcde")` returnerer `true`
