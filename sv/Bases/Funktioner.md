---
permalink: bases/functions
publish: true
mobile: true
description: Den här sidan beskriver de funktioner som används i Obsidian Bases för att manipulera data från egenskaper i filter och formler.
---
Funktioner används i [[Introduktion till baser|baser]] för att manipulera data från [[Egenskaper|egenskaper]] i [[Vyer#Filter|filter]] och [[Formler|formler]]. Se referensen för [[Baser-syntax|baser-syntax]] för att läsa mer om hur du kan använda funktioner.

Basers funktioner följer JavaScript-beteende. För fullständig referensdokumentation, se [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).

Förutom [[Funktioner#Globala|Globala]] funktioner beror de flesta funktioner på vilken typ av värde du vill modifiera:

- [[Funktioner#Any-typ|Any]]
- [[Funktioner#Date-typ|Date]]
- [[Funktioner#String-typ|String]]
- [[Funktioner#Number-typ|Number]]
- [[Funktioner#List-typ|List]]
- [[Funktioner#Link-typ|Link]]
- [[Funktioner#File-typ|File]]
- [[Funktioner#Object-typ|Object]]
- [[Funktioner#Reguljärt uttryck-typ|Reguljärt uttryck]]

## Globala

Globala funktioner används utan en typ.

### `escapeHTML()`

`escapeHTML(html: string): string`

- Escapar specialtecken i en sträng för att göra den säker att inkludera i HTML.

### `date()`

`date(date: string): date`

- `date(string): date` tolkar den angivna strängen och returnerar ett datumobjekt.
- Strängen `date` ska vara i formatet `YYYY-MM-DD HH:mm:ss`.

### `duration()`

`duration(value: string): duration`

- Tolkar en sträng som en varaktighet. Se [[Baser-syntax#Datumaritmetik|avsnittet om datumaritmetik]] för strängformatet för `value`.
- Explicit tolkning behövs inte vid datumaritmetik (till exempel `now() + '1d'`), men krävs vid aritmetik på varaktigheter (till exempel `now() + (duration('1d') * 2)`).
- Vid aritmetik på varaktigheter med skalärer måste varaktigheten stå till vänster. Till exempel `duration('5h') * 2`, istället för `2 * duration('5h')`.

### `file()`

`file(path: string | file | url): file`

- Returnerar ett filobjekt för den angivna filen eller sökvägen.
- Exempel: `file(link("[[filnamn]]"))` eller `file("sökväg till fil")`.

### `html()`

`html(html: string): html`

- Konverterar en sträng till ett kodsnutt som renderas som HTML.

### `if()`

`if(condition: any, trueResult: any, falseResult?: any): any`

- `condition` är uttrycket som ska utvärderas.
- `trueResult` är utdata om `condition` är sant.
- `falseResult` är den valfria utdatan om `condition` är falskt. Om det utelämnas antas `null`.
- Returnerar `trueResult` om `condition` är sant eller truthy, annars returneras `falseResult`.
- Exempel: `if(isModified, "Modified", "Unmodified")`

### `image()`

`image(path: string | file | url): image`

- Returnerar ett bildobjekt som renderar bilden i vyn.
- Exempel: `image(image-property)` eller `image("https://obsidian.md/images/obsidian-logo-gradient.svg")`.

### `icon()`

`icon(name: string): icon`

- Returnerar ett värde som renderas som en ikon i en vy. Ikonnamnet måste matcha en Lucide-ikon som stöds.
- Exempel: `icon("arrow-right")`.

### `link()`

`link(path: string | file, display?: value): Link`

- Tolkar en sträng `path` och returnerar ett Link-objekt som renderas som en länk till den angivna sökvägen.
- Ange valfritt parametern `display` för att ställa in länkens visningstext.

### `list()`

`list(element: any): List`

- Om det angivna elementet är en lista, returneras den oförändrad.
- Annars packas det angivna `element` in i en lista, vilket skapar en lista med ett enda element.
- Använd denna funktion när en egenskap innehåller en blandning av strängar eller listor i valvet.
- Exempel: `list("value")` returnerar `["value"]`.

### `max()`

`max(value1: number, value2: number...): number`

- Returnerar det största av alla angivna nummer.

### `min()`

`min(value1: number, value2: number...): number`

- Returnerar det minsta av alla angivna nummer.

### `now()`

`now(): date`

- Returnerar ett datumobjekt för det aktuella ögonblicket.

### `number()`

`number(input: any): number`

- Försöker returnera det angivna värdet som ett nummer.
- Returnerar datumobjekt som millisekunder sedan Unix-epoken.
- Returnerar booleska värden som `1` eller `0`.
- Tolkar strängar som nummer och returnerar ett fel om strängen inte är ett giltigt nummer.
- Exempel: `number("3.4")` returnerar `3.4`.

### `today()`

`today(): date`

- Returnerar ett datumobjekt för dagens datum. Tidsdelen sätts till midnatt.

### `random()`

`random(): number`

- Returnerar ett slumpmässigt nummer mellan 0 och 1.
- Nummergenereringen uppdateras varje gång en vy laddas. Att navigera mellan vyer ändrar det slumpmässiga numret.

## Any-typ

Funktioner du kan använda med valfritt värde. Detta inkluderar strängar (t.ex. `"hello"`), nummer (t.ex. `42`), listor (t.ex. `[1,2,3]`), objekt och mer.

### `isTruthy()`

`any.isTruthy(): boolean`

- Returnerar värdet konverterat till ett booleskt värde.
- Exempel: `1.isTruthy()` returnerar `true`.

### `isType()`

`any.isType(type: string): boolean`

- Returnerar true om värdet är av den angivna typen.
- Exempel: `"example".isType("string")` och `true.isType("boolean")` returnerar båda true.

### `toString()`

`any.toString(): string`

- Returnerar strängrepresentationen av valfritt värde.
- Exempel: `123.toString()` returnerar `"123"`.

## Date-typ

Funktioner du kan använda med datum och tid som `date("2025-05-27")`. Datumjämförelser kan göras med [[Baser-syntax#Datumaritmetik|datumaritmetik]].

### Fält

Följande fält är tillgängliga för datum:

| Fält               | Typ      | Beskrivning                   |
| ------------------ | -------- | ----------------------------- |
| `date.year`        | `number` | Datumets år                   |
| `date.month`       | `number` | Datumets månad (1–12)         |
| `date.day`         | `number` | Dagen i månaden               |
| `date.hour`        | `number` | Timmen (0–23)                 |
| `date.minute`      | `number` | Minuten (0–59)                |
| `date.second`      | `number` | Sekunden (0–59)               |
| `date.millisecond` | `number` | Millisekunden (0–999)         |

### `date()`

`date.date(): date`

- Returnerar ett datumobjekt med tiden borttagen.
- Exempel: `now().date().format("YYYY-MM-DD HH:mm:ss")` returnerar en sträng som "2025-12-31 00:00:00".

### `format()`

`date.format(format: string): string`

- `format` är formatsträngen (t.ex. `"YYYY-MM-DD"`).
- Returnerar datumet formaterat enligt en Moment.js-formatsträng.
- Exempel: `date.format("YYYY-MM-DD")` returnerar `"2025-05-27"`.

### `time()`

`date.time(): string`

- Returnerar tidsdelen som en sträng.
- Exempel: `now().time()` returnerar en sträng som "23:59:59".

### `relative()`

`date.relative(): string`

- Returnerar en läsbar jämförelse av datumet med aktuellt datum och tid.
- Exempel: `file.mtime.relative()` returnerar ett värde som `3 days ago`.

### `isEmpty()`

`date.isEmpty(): boolean`

- Returnerar false.

## String-typ

Funktioner du kan använda med en sekvens av tecken som `"hello"`.

### Fält

| Fält            | Typ      | Beskrivning                      |
| --------------- | -------- | -------------------------------- |
| `string.length` | `number` | Antalet tecken i strängen        |

### `contains()`

`string.contains(value: string): boolean`

- `value` är delsträngen att söka efter.
- Returnerar true om strängen innehåller `value`.
- Exempel: `"hello".contains("ell")` returnerar `true`.

### `containsAll()`

`string.containsAll(...values: string): boolean`

- `values` är en eller flera delsträngar att söka efter.
- Returnerar true om strängen innehåller alla `values`.
- Exempel: `"hello".containsAll("h", "e")` returnerar `true`.

### `containsAny()`

`string.containsAny(...values: string): boolean`

- `values` är en eller flera delsträngar att söka efter.
- Returnerar true om strängen innehåller minst ett av `values`.
- Exempel: `"hello".containsAny("x", "y", "e")` returnerar `true`.

### `endsWith()`

`string.endsWith(query: string): boolean`

- `query` är strängen att kontrollera i slutet.
- Returnerar true om denna sträng slutar med `query`.
- Exempel: `"hello".endsWith("lo")` returnerar `true`.

### `isEmpty()`

`string.isEmpty(): boolean`

- Returnerar true om strängen inte har några tecken, eller inte finns.
- Exempel: `"Hello world".isEmpty()` returnerar `false`.
- Exempel: `"".isEmpty()` returnerar `true`.

### `lower()`

`string.lower(): string`

- Returnerar strängen konverterad till gemener.

### `replace()`

`string.replace(pattern: string | Regexp, replacement: string): string`

- `pattern` är värdet att söka efter i målsträngen.
- `replacement` är värdet att ersätta hittade mönster med. När `pattern` är ett Regexp kan du referera till fångstgrupper i `replacement` med `$1`, `$2` och så vidare.
- Om `pattern` är en sträng ersätts alla förekomster av mönstret.
- Om `pattern` är ett Regexp avgör `g`-flaggan om bara den första eller alla förekomster ersätts.
- Exempel: `"a:b:c:d".replace(/:/, "-")` returnerar `"a-b:c:d"`, medan `"a:b:c:d".replace(/:/g, "-")` returnerar `"a-b-c-d"`.
- Exempel med fångstgrupper: `"John Smith".replace(/(\w+) (\w+)/, "$2, $1")` returnerar `"Smith, John"`.

### `repeat()`

`string.repeat(count: number): string`

- `count` är antalet gånger strängen ska upprepas.
- Exempel: `"123".repeat(2)` returnerar `"123123"`.

### `reverse()`

`string.reverse(): string`

- Vänder strängen.
- Exempel: `"hello".reverse()` returnerar `"olleh"`.

### `slice()`

`string.slice(start: number, end?: number): string`

- `start` är det inkluderande startindexet.
- `end` är det valfria exkluderande slutindexet.
- Returnerar en delsträng från `start` (inkluderande) till `end` (exkluderande).
- Exempel: `"hello".slice(1, 4)` returnerar `"ell"`.
- Om `end` utelämnas skärs till slutet av strängen.

### `split()`

`string.split(separator: string | Regexp, n?: number): list`

- `separator` är avgränsaren för att dela strängen.
- `n` är ett valfritt nummer. Om det anges kommer resultatet att ha de första `n` elementen.
- Returnerar en lista med delsträngar.
- Exempel: `"a,b,c,d".split(",", 3)` eller `"a,b,c,d".split(/,/, 3)` returnerar `["a", "b", "c"]`.

### `startsWith()`

`string.startsWith(query: string): boolean`

- `query` är strängen att kontrollera i början.
- Returnerar true om denna sträng börjar med `query`.
- Exempel: `"hello".startsWith("he")` returnerar `true`.

### `title()`

`string.title(): string`

- Konverterar strängen till rubrikformat (första bokstaven i varje ord versal).
- Exempel: `"hello world".title()` returnerar `"Hello World"`.

### `trim()`

`string.trim(): string`

- Tar bort blanksteg från båda ändarna av strängen.
- Exempel: `"  hi  ".trim()` returnerar `"hi"`.

## Number-typ

Funktioner du kan använda med numeriska värden som `42`, `3.14`.

### `abs()`

`number.abs(): number`

- Returnerar absolutvärdet av numret.
- Exempel: `(-5).abs()` returnerar `5`.

### `ceil()`

`number.ceil(): number`

- Avrundar numret uppåt till närmaste heltal.
- Exempel: `(2.1).ceil()` returnerar `3`.

### `floor()`

`number.floor(): number`

- Avrundar numret nedåt till närmaste heltal.
- Exempel: `(2.9).floor()` returnerar `2`.

### `isEmpty()`

`number.isEmpty(): boolean`

- Returnerar true om numret inte finns.
- Exempel: `5.isEmpty()` returnerar `false`.

### `round()`

`number.round(digits: number): number`

- Avrundar numret till närmaste heltal.
- Valfritt kan en `digits`-parameter anges för att avrunda till det antalet decimaler.
- Exempel: `(2.5).round()` returnerar `3`, och `(2.3333).round(2)` returnerar `2.33`.

### `toFixed()`

`number.toFixed(precision: number): string`

- `precision` är antalet decimaler.
- Returnerar en sträng med numret i fixpunktsnotation.
- Exempel: `(3.14159).toFixed(2)` returnerar `"3.14"`.

## List-typ

Funktioner du kan använda med en ordnad lista av element som `[1, 2, 3]`.

### Fält

| Fält          | Typ      | Beskrivning                      |
| ------------- | -------- | -------------------------------- |
| `list.length` | `number` | Antalet element i listan         |

### `contains()`

`list.contains(value: any): boolean`

- `value` är elementet att söka efter.
- Returnerar true om listan innehåller `value`.
- Exempel: `[1,2,3].contains(2)` returnerar `true`.

### `containsAll()`

`list.containsAll(...values: any): boolean`

- `values` är ett eller flera element att söka efter.
- Returnerar true om listan innehåller alla `values`.
- Exempel: `[1,2,3].containsAll(2,3)` returnerar `true`.

### `containsAny()`

`list.containsAny(...values: any): boolean`

- `values` är ett eller flera element att söka efter.
- Returnerar true om listan innehåller minst ett av `values`.
- Exempel: `[1,2,3].containsAny(3,4)` returnerar `true`.

### `filter()`

`list.filter(value: Boolean): list`

- Filtrerar listan och behåller bara element där uttrycket är sant.
- `value` är värdet av ett objekt i listan.
- `index` är indexet för det aktuella värdet.
- Exempel: `[1,2,3,4].filter(value > 2)` returnerar `[3,4]`.

### `flat()`

`list.flat(): list`

- Plattar ut en nästlad lista till en enda lista.
- Exempel: `[1,[2,3]].flat()` returnerar `[1,2,3]`.

### `isEmpty()`

`list.isEmpty(): boolean`

- Returnerar true om listan inte har några element.
- Exempel: `[1,2,3].isEmpty()` returnerar `false`.

### `join()`

`list.join(separator: string): string`

- `separator` är strängen som infogas mellan elementen.
- Sammanfogar alla listelement till en enda sträng.
- Exempel: `[1,2,3].join(",")` returnerar `"1,2,3"`.

### `map()`

`list.map(value: Any): list`

- Transformerar varje element i listan med ett uttryck.
- `value` är värdet av ett objekt i listan.
- `index` är indexet för det aktuella värdet.
- Exempel: `[1,2,3,4].map(value + 1)` returnerar `[2,3,4,5]`.

### `reduce()`

`list.reduce(expression: Any, acc: Any): Any`

- Reducerar listan till ett enda värde genom att köra ett uttryck för varje element. Uttrycket måste returnera nästa värde av `acc`. Använd `value` för det aktuella elementet, `index` för dess position och `acc` för det ackumulerade resultatet hittills.
- `expression` utvärderas för varje element i listan.
- `value` är värdet av det aktuella objektet i listan.
- `index` är indexet för det aktuella objektet.
- `acc` är det ackumulerade värdet hittills.
- Exempel (summa): `[1,2,3].reduce(acc + value, 0)` returnerar `6`.
- Exempel (max): `values.filter(value.isType("number")).reduce(if(acc == null || value > acc, value, acc), null)` returnerar det största numret, eller `null` om inget finns.

### `reverse()`

`list.reverse(): list`

- Vänder listan på plats.
- Exempel: `[1,2,3].reverse()` returnerar `[3,2,1]`.

### `slice()`

`list.slice(start: number, end?: number): list`

- `start` är det inkluderande startindexet.
- `end` är det valfria exkluderande slutindexet.
- Returnerar en ytlig kopia av en del av listan från `start` (inkluderande) till `end` (exkluderande).
- Exempel: `[1,2,3,4].slice(1,3)` returnerar `[2,3]`.
- Om `end` utelämnas skärs till slutet av listan.

### `sort()`

`list.sort(): list`

- Sorterar listelement från minst till störst.
- Exempel: `[3, 1, 2].sort()` returnerar `[1, 2, 3]`.
- Exempel: `["c", "a", "b"].sort()` returnerar `["a", "b", "c"]`.

### `unique()`

`list.unique(): list`

- Tar bort duplicerade element.
- Exempel: `[1,2,2,3].unique()` returnerar `[1,2,3]`.

## Link-typ

Funktioner du kan använda på en länk. Länkar kan skapas från en fil (`file.asLink()`) eller en sökväg (`link("path")`).

### `asFile()`

`link.asFile(): file`

- Returnerar ett filobjekt om länken refererar till en giltig lokal fil.
- Exempel: `link("[[filnamn]]").asFile()`.

### `linksTo()`

`link.linksTo(file): boolean`

- Returnerar `true` om filen som representeras av `link` har en länk till `file`.

## File-typ

Funktioner du kan använda med en fil i valvet.

### Fält

Följande fält är tillgängliga för filer:

| Fält              | Typ      | Beskrivning                                              |
| ----------------- | -------- | -------------------------------------------------------- |
| `file.name`       | `string` | Namnet på denna fil.                                     |
| `file.basename`   | `string` | Namnet på denna fil utan filändelse.                     |
| `file.path`       | `string` | Den fullständiga sökvägen till denna fil, relativt valvets rot. |
| `file.folder`     | `string` | Den fullständiga sökvägen till den överordnade mappen.   |
| `file.ext`        | `string` | Filändelsen för denna fil.                               |
| `file.size`       | `number` | Storleken på denna fil, i byte.                          |
| `file.properties` | `object` | Anteckningsegenskaperna för denna fil.                   |
| `file.tags`       | `list`   | Taggarna för denna fil. Inkluderar inline-taggar.        |
| `file.links`      | `list`   | De interna länkarna inom denna fil.                      |
| `file.ctime`      | `date`   | Tidsstämpel för när denna fil skapades.                  |
| `file.mtime`      | `date`   | Tidsstämpel för när denna fil senast ändrades.           |

### `asLink()`

`file.asLink(display?: string): Link`

- `display` är valfri visningstext för länken.
- Returnerar ett Link-objekt som renderas som en fungerande länk.
- Exempel: `file.asLink()`

### `hasLink()`

`file.hasLink(otherFile: file | string): boolean`

- `otherFile` är ett annat filobjekt eller en strängsökväg att kontrollera.
- Returnerar true om `file` länkar till `otherFile`.
- Exempel: `file.hasLink(otherFile)` returnerar `true` om det finns en länk från `file` till `otherFile`.

### `hasProperty()`

`file.hasProperty(name: string): boolean`

- Returnerar `true` om filen har den angivna egenskapen.

### `hasTag()`

`file.hasTag(...values: string): boolean`

- `values` är ett eller flera taggnamn.
- Returnerar true om filen har någon av taggarna i `values`.
- Exempel: `file.hasTag("tag1", "tag2")` returnerar `true` om filen har taggen `#tag1` eller `#tag2`. Det inkluderar även [[Taggar#Nästlade taggar|nästlade taggar]], som `#tag1/a` eller `#tag2/b`.

### `inFolder()`

`file.inFolder(folder: string): boolean`

- `folder` är mappnamnet att kontrollera.
- Returnerar true om filen finns i den angivna mappen eller en av dess undermappar.
- Exempel: `file.inFolder("notes")` returnerar `true`.

## Object-typ

Funktioner du kan använda med en samling nyckel-värdepar som `{"a": 1, "b": 2}`.

### `isEmpty()`

`object.isEmpty(): boolean`

- Returnerar true om objektet inte har några egna egenskaper.
- Exempel: `{}.isEmpty()` returnerar `true`.

### `keys()`

`object.keys(): list`

- Returnerar en lista som innehåller objektets nycklar.

### `values()`

`object.values(): list`

- Returnerar en lista som innehåller objektets värden.

## Reguljärt uttryck-typ

Funktioner du kan använda med ett reguljärt uttrycksmönster. Exempel: `/abc/`.

### `matches()`

`regexp.matches(value: string): boolean`

- `value` är strängen att testa.
- Returnerar true om det reguljära uttrycket matchar `value`.
- Exempel: `/abc/.matches("abcde")` returnerar `true`.
