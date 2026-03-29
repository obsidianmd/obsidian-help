---
permalink: bases/functions
publish: true
mobile: true
description: Denne siden beskriver funksjonene som brukes i Obsidian Bases for å manipulere data fra egenskaper i filtre og formler.
---
Funksjoner brukes i [[Introduksjon til Bases|Bases]] for å manipulere data fra [[Egenskaper|egenskaper]] i [[Visninger#Filtre|filtre]] og [[Formler|formler]]. Se [[Bases-syntaks|bases-syntaksreferansen]] for å lære mer om hvordan du kan bruke funksjoner.

Bortsett fra [[Funksjoner#Globale|Globale]] funksjoner, avhenger de fleste funksjoner av typen verdi du vil endre:

- [[Funksjoner#Alle typer|Alle typer]]
- [[Funksjoner#Dato|Dato]]
- [[Funksjoner#Streng|Streng]]
- [[Funksjoner#Tall|Tall]]
- [[Funksjoner#Liste|Liste]]
- [[Funksjoner#Lenke|Lenke]]
- [[Funksjoner#Fil|Fil]]
- [[Funksjoner#Objekt|Objekt]]
- [[Funksjoner#Regulært uttrykk|Regulært uttrykk]]

## Globale

Globale funksjoner brukes uten en type.

### `escapeHTML()`

`escapeHTML(html: string): string`

- Maskerer spesialtegn i en streng for å gjøre den trygg for inkludering i HTML.

### `date()`

`date(date: string): date`

- `date(string): date` analyserer den angitte strengen og returnerer et datoobjekt.
- `date`-strengen bør være i formatet `YYYY-MM-DD HH:mm:ss`.

### `duration()`

`duration(value: string): duration`

- Analyser en streng som en varighet. Se [[Bases-syntaks#Datoaritmetikk|datoaritmetikk-seksjonen]] for `value`-strengformatet.
- Varigheter trenger ikke å bli eksplisitt analysert ved datoaritmetikk (for eksempel `now() + '1d'`), men de må det ved aritmetikk på varigheter (for eksempel `now() + (duration('1d') * 2)`).
- Ved aritmetikk på varigheter med skalarer må varigheten stå til venstre. For eksempel `duration('5h') * 2`, i stedet for `2 * duration('5h')`.

### `file()`

`file(path: string | file | url): file`

- Returnerer et filobjekt for den angitte filen eller banen.
- Eksempel: `file(link("[[filnavn]]"))` eller `file("bane til fil")`.

### `html()`

`html(html: string): html`

- Konverterer en streng til en kodesnutt som gjengis som HTML.

### `if()`

`if(condition: any, trueResult: any, falseResult?: any): any`

- `condition` er betingelsen som skal evalueres.
- `trueResult` er resultatet hvis betingelsen er sann.
- `falseResult` er det valgfrie resultatet hvis betingelsen er usann. Hvis det ikke er angitt, antas det å være `null`.
- Returnerer `trueResult` hvis `condition` er sann, eller er en sann verdi, ellers `falseResult`.
- Eksempel: `if(isModified, "Endret", "Uendret")`

### `image()`

`image(path: string | file | url): image`

- Returnerer et bildeobjekt som gjengir bildet i visningen.
- Eksempel: `image(bilde-egenskap)` eller `image("https://obsidian.md/images/obsidian-logo-gradient.svg")`

### `icon()`

`icon(name: string): icon`

- Returnerer en verdi som gjengis som et ikon i en visning. Ikonnavnet må samsvare med et støttet Lucide-ikon.
- Eksempel: `icon("arrow-right")`.

### `link()`

`link(path: string | file, display?: value): Link`

- Analyserer en streng `path` og returnerer et Link-objekt som gjengis som en lenke til den angitte banen.
- Angi eventuelt `display`-parameteren for å endre hvilken tekst lenken viser.

### `list()`

`list(element: any): List`

- Hvis det angitte elementet er en liste, returneres det uendret.
- Ellers pakkes det angitte `element` inn i en liste, og oppretter en liste med ett enkelt element.
- Denne funksjonen kan være nyttig når en egenskap inneholder en blanding av strenger eller lister på tvers av hvelvet.
- Eksempel: `list("verdi")` returnerer `["verdi"]`.

### `max()`

`max(value1: number, value2: number...): number`

- Returnerer det største av alle de angitte tallene.

### `min()`

`min(value1: number, value2: number...): number`

- Returnerer det minste av alle de angitte tallene.

### `now()`

`now(): date`

- `now()` returnerer et datoobjekt som representerer gjeldende tidspunkt.

### `number()`

`number(input: any): number`

- Forsøker å returnere den angitte verdien som et tall.
- Datoobjekter returneres som millisekunder siden unix-epoken.
- Boolske verdier returnerer 1 eller 0.
- Strenger analyseres til et tall og returnerer en feil hvis resultatet er ugyldig.
- Eksempel: `number("3.4")` returnerer `3.4`.

### `duration()`

`duration(value: string): duration`

- Analyser en streng som en varighet. Se [[Bases-syntaks#Datoaritmetikk|datoaritmetikk-seksjonen]] for `value`-strengformatet.
- Varigheter trenger ikke å bli eksplisitt analysert ved datoaritmetikk (for eksempel `now() + '1d'`), men de må det ved aritmetikk på varigheter (for eksempel `now() + (duration('1d') * 2)`).
- Ved aritmetikk på varigheter med skalarer må varigheten stå til venstre. For eksempel `duration('5h') * 2`, i stedet for `2 * duration('5h')`.

### `today()`

`today(): date`

- `today()` returnerer et datoobjekt som representerer gjeldende dato. Tidsdelen er satt til null.

### `random()`

`random(): number`

- `random()` returnerer et tilfeldig tall mellom 0 og 1.
- Tallgenereringen oppdateres når en visning lastes inn. Å navigere mellom visninger endrer det tilfeldige tallet.

## Alle typer

Funksjoner du kan bruke med enhver verdi. Dette inkluderer strenger (f.eks. `"hallo"`), tall (f.eks. `42`), lister (f.eks. `[1,2,3]`), objekter og mer.

### `isTruthy()`

`any.isTruthy(): boolean`

- Returnerer verdien konvertert til en boolsk verdi.
- Eksempel: `1.isTruthy()` returnerer `true`.

### `isType()`

`any.isType(type: string): boolean`

- Returnerer sann hvis verdien er av den angitte typen.
- Eksempel: `"eksempel".isType("string")` og `true.isType("boolean")` returnerer begge sann.

### `toString()`

`any.toString(): string`

- Returnerer strengrepresentasjonen av enhver verdi.
- Eksempel: `123.toString()` returnerer `"123"`.

## Dato

Funksjoner du kan bruke med dato og tid, som `date("2025-05-27")`. Datosammenligninger kan gjøres med [[Bases-syntaks#Datoaritmetikk|datoaritmetikk]].

### Felter

Følgende felter er tilgjengelige for datoer:

| Felt               | Type     | Beskrivelse                    |
| ------------------ | -------- | ------------------------------ |
| `date.year`        | `number` | Årstallet for datoen           |
| `date.month`       | `number` | Måneden for datoen (1–12)      |
| `date.day`         | `number` | Dagen i måneden                |
| `date.hour`        | `number` | Timen (0–23)                   |
| `date.minute`      | `number` | Minuttet (0–59)                |
| `date.second`      | `number` | Sekundet (0–59)                |
| `date.millisecond` | `number` | Millisekunet (0–999)           |

### `date()`

`date.date(): date`

- Returnerer et datoobjekt med tiden fjernet.
- Eksempel: `now().date().format("YYYY-MM-DD HH:mm:ss")` returnerer en streng som "2025-12-31 00:00:00"

### `format()`

`date.format(format: string): string`

- `format` er formatstrengen (f.eks. `"YYYY-MM-DD"`).
- Returnerer datoen formatert som angitt av en Moment.js-formatstreng.
- Eksempel: `date.format("YYYY-MM-DD")` returnerer `"2025-05-27"`.

### `time()`

`date.time(): string`

- Returnerer klokkeslettet.
- Eksempel: `now().time()` returnerer en streng som "23:59:59"

### `relative()`

`date.relative(): string`

- Returnerer en lesbar sammenligning av datoen med gjeldende dato og tid.
- Eksempel: `file.mtime.relative()` returnerer en verdi som `3 days ago`.

### `isEmpty()`

`date.isEmpty(): boolean`

- Returnerer usann.

## Streng

Funksjoner du kan bruke med en sekvens av tegn, som `"hallo"`.

### Felter

| Felt            | Type     | Beskrivelse                         |
| --------------- | -------- | ----------------------------------- |
| `string.length` | `number` | Antall tegn i strengen              |

### `contains()`

`string.contains(value: string): boolean`

- `value` er delstrengen å søke etter.
- Returnerer sann hvis strengen inneholder `value`.
- Eksempel: `"hallo".contains("all")` returnerer `true`.

### `containsAll()`

`string.containsAll(...values: string): boolean`

- `values` er én eller flere delstrenger å søke etter.
- Returnerer sann hvis strengen inneholder alle `values`.
- Eksempel: `"hallo".containsAll("h", "a")` returnerer `true`.

### `containsAny()`

`string.containsAny(...values: string): boolean`

- `values` er én eller flere delstrenger å søke etter.
- Returnerer sann hvis strengen inneholder minst én av `values`.
- Eksempel: `"hallo".containsAny("x", "y", "a")` returnerer `true`.

### `endsWith()`

`string.endsWith(query: string): boolean`

- `query` er strengen å sjekke på slutten.
- Returnerer sann hvis denne strengen slutter med `query`.
- Eksempel: `"hallo".endsWith("lo")` returnerer `true`.

### `isEmpty()`

`string.isEmpty(): boolean`

- Returnerer sann hvis strengen ikke har noen tegn, eller ikke er til stede.
- Eksempel: `"Hallo verden".isEmpty()` returnerer `false`.
- Eksempel: `"".isEmpty()` returnerer `true`.

### `lower()`

`string.lower(): string`

- Returnerer strengen konvertert til små bokstaver.

### `replace()`

`string.replace(pattern: string | Regexp, replacement: string): string`

- `pattern` er verdien å søke etter i målstrengen.
- `replacement` er verdien å erstatte funne mønstre med.
- Hvis `pattern` er en streng, vil alle forekomster av mønsteret bli erstattet.
- Hvis `pattern` er et regulært uttrykk, bestemmer `g`-flagget om bare den første eller alle forekomster erstattes.
- Eksempel: `"a:b:c:d".replace(/:/, "-")` returnerer `"a-b,c,d"`, mens `"a:b:c:d".replace(/:/g, "-")` returnerer `"a-b-c-d"`.

### `repeat()`

`string.repeat(count: number): string`

- `count` er antall ganger strengen skal gjentas.
- Eksempel: `"123".repeat(2)` returnerer `"123123"`

### `reverse()`

`string.reverse(): string`

- Reverserer strengen.
- Eksempel: `"hallo".reverse()` returnerer `"ollah"`.

### `slice()`

`string.slice(start: number, end?: number): string`

- `start` er den inkluderende startindeksen.
- `end` er den valgfrie ekskluderende sluttindeksen.
- Returnerer en delstreng fra `start` (inkluderende) til `end` (ekskluderende).
- Eksempel: `"hallo".slice(1, 4)` returnerer `"all"`.
- Hvis `end` utelates, kuttes til slutten av strengen.

### `split()`

`string.split(separator: string | Regexp, n?: number): list`

- `separator` er skilletegnet for å dele strengen.
- `n` er et valgfritt tall. Hvis angitt, vil resultatet inneholde de første `n` elementene.
- Returnerer en liste med delstrenger.
- Eksempel: `"a,b,c,d".split(",", 3)` eller `"a,b,c,d".split(/,/, 3)` returnerer `["a", "b", "c"]`.

### `startsWith()`

`string.startsWith(query: string): boolean`

- `query` er strengen å sjekke i begynnelsen.
- Returnerer sann hvis denne strengen starter med `query`.
- Eksempel: `"hallo".startsWith("ha")` returnerer `true`.

### `title()`

`string.title(): string`

- Konverterer strengen til tittelformat (første bokstav i hvert ord med stor bokstav).
- Eksempel: `"hallo verden".title()` returnerer `"Hallo Verden"`.

### `trim()`

`string.trim(): string`

- Fjerner mellomrom fra begge ender av strengen.
- Eksempel: `"  hei  ".trim()` returnerer `"hei"`.

## Tall

Funksjoner du kan bruke med numeriske verdier som `42`, `3.14`.

### `abs()`

`number.abs(): number`

- Returnerer den absolutte verdien av tallet.
- Eksempel: `(-5).abs()` returnerer `5`.

### `ceil()`

`number.ceil(): number`

- Runder tallet opp til nærmeste heltall.
- Eksempel: `(2.1).ceil()` returnerer `3`.

### `floor()`

`number.floor(): number`

- Runder tallet ned til nærmeste heltall.
- Eksempel: `(2.9).floor()` returnerer `2`.

### `isEmpty()`

`number.isEmpty(): boolean`

- Returnerer sann hvis tallet ikke er til stede.
- Eksempel: `5.isEmpty()` returnerer `false`.

### `round()`

`number.round(digits: number): number`

- Runder tallet til nærmeste heltall.
- Valgfritt kan du angi en `digits`-parameter for å runde til det antallet desimaler.
- Eksempel: `(2.5).round()` returnerer `3`, og `(2.3333).round(2)` returnerer `2.33`.

### `toFixed()`

`number.toFixed(precision: number): string`

- `precision` er antall desimalplasser.
- Returnerer en streng med tallet i fastpunktnotasjon.
- Eksempel: `(3.14159).toFixed(2)` returnerer `"3.14"`.

## Liste

Funksjoner du kan bruke med en ordnet liste av elementer som `[1, 2, 3]`.

### Felter

| Felt          | Type     | Beskrivelse                        |
| ------------- | -------- | ---------------------------------- |
| `list.length` | `number` | Antall elementer i listen          |

### `contains()`

`list.contains(value: any): boolean`

- `value` er elementet å søke etter.
- Returnerer sann hvis listen inneholder `value`.
- Eksempel: `[1,2,3].contains(2)` returnerer `true`.

### `containsAll()`

`list.containsAll(...values: any): boolean`

- `values` er ett eller flere elementer å søke etter.
- Returnerer sann hvis listen inneholder alle `values`.
- Eksempel: `[1,2,3].containsAll(2,3)` returnerer `true`.

### `containsAny()`

`list.containsAny(...values: any): boolean`

- `values` er ett eller flere elementer å søke etter.
- Returnerer sann hvis listen inneholder minst ett av `values`.
- Eksempel: `[1,2,3].containsAny(3,4)` returnerer `true`.

### `filter()`

`list.filter(value: Boolean): list`

- Filtrer elementene i denne listen ved å kalle en filterfunksjon, som bruker variablene `index` og `value`, og returnerer en boolsk verdi for om elementet skal beholdes.
- `value` er verdien av et element i listen.
- `index` er indeksen til gjeldende verdi.
- Eksempel: `[1,2,3,4].filter(value > 2)` returnerer `[3,4]`.

### `flat()`

`list.flat(): list`

- Flater ut nestede lister til en enkelt liste.
- Eksempel: `[1,[2,3]].flat()` returnerer `[1,2,3]`.

### `isEmpty()`

`list.isEmpty(): boolean`

- Returnerer sann hvis listen ikke har noen elementer.
- Eksempel: `[1,2,3].isEmpty()` returnerer `false`.

### `join()`

`list.join(separator: string): string`

- `separator` er strengen som settes inn mellom elementer.
- Slår sammen alle listeelementer til en enkelt streng.
- Eksempel: `[1,2,3].join(",")` returnerer `"1,2,3"`.

### `map()`

`list.map(value: Any): list`

- Transformer hvert element i denne listen ved å kalle en konverteringsfunksjon, som bruker variablene `index` og `value`, og returnerer den nye verdien som skal plasseres i listen.
- `value` er verdien av et element i listen.
- `index` er indeksen til gjeldende verdi.
- Eksempel: `[1,2,3,4].map(value + 1)` returnerer `[2,3,4,5]`.

### `reduce()`

`list.reduce(expression: Any, acc: Any): Any`

- Reduser elementene i denne listen til en enkelt verdi ved å kjøre et uttrykk for hvert element. Uttrykket kan bruke variablene `index`, `value` og `acc` (akkumulatoren), og bør returnere neste akkumulatorverdi.
- `expression` evalueres for hvert element i listen.
- `value` er verdien av gjeldende element i listen.
- `index` er indeksen til gjeldende element.
- `acc` er den akkumulerte verdien så langt.
- Eksempel (sum): `[1,2,3].reduce(acc + value, 0)` returnerer `6`.
- Eksempel (maks): `values.filter(value.isType("number")).reduce(if(acc == null || value > acc, value, acc), null)` returnerer det største tallet, eller `null` hvis ingen.

### `reverse()`

`list.reverse(): list`

- Reverserer listen på stedet.
- Eksempel: `[1,2,3].reverse()` returnerer `[3,2,1]`.

### `slice()`

`list.slice(start: number, end?: number): list`

- `start` er den inkluderende startindeksen.
- `end` er den valgfrie ekskluderende sluttindeksen.
- Returnerer en grunn kopi av en del av listen fra `start` (inkluderende) til `end` (ekskluderende).
- Eksempel: `[1,2,3,4].slice(1,3)` returnerer `[2,3]`.
- Hvis `end` utelates, kuttes til slutten av listen.

### `sort()`

`list.sort(): list`

- Sorterer listeelementer fra minst til størst.
- Eksempel: `[3, 1, 2].sort()` returnerer `[1, 2, 3]`.
- Eksempel: `["c", "a", "b"].sort()` returnerer `["a", "b", "c"]`.

### `unique()`

`list.unique(): list`

- Fjerner duplikate elementer.
- Eksempel: `[1,2,2,3].unique()` returnerer `[1,2,3]`.

## Lenke

Funksjoner du kan bruke på en lenke. Lenker kan opprettes fra en fil (`file.asLink()`) eller en bane (`link("bane")`).

### `asFile()`

`link.asFile(): file`

- Returnerer et filobjekt hvis lenken refererer til en gyldig lokal fil.
- Eksempel: `link("[[filnavn]]").asFile()`

### `linksTo()`

`link.linksTo(file): boolean`

- Returnerer om filen representert av `link` har en lenke til `file`.

## Fil

Funksjoner du kan bruke med filer i hvelvet.

### Felter

Følgende felter er tilgjengelige for filer:

| Felt              | Type     | Beskrivelse                                              |
| ----------------- | -------- | -------------------------------------------------------- |
| `file.name`       | `string` | Navnet på denne filen.                                   |
| `file.basename`   | `string` | Navnet på denne filen uten filendelsen.                  |
| `file.path`       | `string` | Full bane til denne filen, relativ til hvelvets rot.     |
| `file.folder`     | `string` | Full bane til overordnet mappe.                          |
| `file.ext`        | `string` | Filendelsen for denne filen.                             |
| `file.size`       | `number` | Størrelsen på denne filen, i byte.                       |
| `file.properties` | `object` | Notatets egenskaper for denne filen.                     |
| `file.tags`       | `list`   | Taggene for denne filen. Inkluderer innebygde tagger.    |
| `file.links`      | `list`   | De interne lenkene i denne filen.                        |
| `file.ctime`      | `date`   | Tidsstempel for når denne filen ble opprettet.           |
| `file.mtime`      | `date`   | Tidsstempel for når denne filen sist ble endret.         |

### `asLink()`

`file.asLink(display?: string): Link`

- `display` valgfri visningstekst for lenken.
- Returnerer et Link-objekt som gjengis som en fungerende lenke.
- Eksempel: `file.asLink()`

### `hasLink()`

`file.hasLink(otherFile: file | string): boolean`

- `otherFile` er et annet filobjekt eller en strengbane å sjekke.
- Returnerer sann hvis `file` lenker til `otherFile`.
- Eksempel: `file.hasLink(otherFile)` returnerer `true` hvis det finnes en lenke fra `file` til `otherFile`.

### `hasProperty()`

`file.hasProperty(name: string): boolean`

- Returnerer sann hvis notatet har den angitte filegenskapen.

### `hasTag()`

`file.hasTag(...values: string): boolean`

- `values` er ett eller flere taggnavn.
- Returnerer sann hvis filen har noen av taggene i `values`.
- Eksempel: `file.hasTag("tag1", "tag2")` returnerer `true` hvis filen har taggen `#tag1` eller `#tag2`. Det inkluderer også eventuelle [[Tagger#Nestede tagger|nestede tagger]], som `#tag1/a` eller `#tag2/b`.

### `inFolder()`

`file.inFolder(folder: string): boolean`

- `folder` er mappenavnet å sjekke.
- Returnerer sann hvis filen er i den angitte mappen eller en av dens undermapper.
- Eksempel: `file.inFolder("notater")` returnerer `true`.

## Objekt

Funksjoner du kan bruke med en samling av nøkkel-verdi-par som `{"a": 1, "b": 2}`.

### `isEmpty()`

`object.isEmpty(): boolean`

- Returnerer sann hvis objektet ikke har egne egenskaper.
- Eksempel: `{}.isEmpty()` returnerer `true`.

### `keys()`

`object.keys(): list`

- Returnerer en liste som inneholder nøklene til objektet.

### `values()`

`object.values(): list`

- Returnerer en liste som inneholder verdiene til objektet.

## Regulært uttrykk

Funksjoner du kan bruke med et regulært uttrykksmønster. Eksempel: `/abc/`.

### `matches()`

`regexp.matches(value: string): boolean`

- `value` er strengen å teste.
- Returnerer sann hvis det regulære uttrykket matcher `value`.
- Eksempel: `/abc/.matches("abcde")` returnerer `true`.
