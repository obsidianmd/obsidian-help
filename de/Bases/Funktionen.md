---
permalink: bases/functions
publish: true
mobile: true
description: >-
  Diese Seite beschreibt die Funktionen, die in Obsidian Bases verwendet werden,
  um Daten aus Eigenschaften in Filtern und Formeln zu manipulieren.
---
Funktionen werden in [[Einführung in Bases|Bases]] verwendet, um Daten aus [[Eigenschaften]] in [[Ansichten#Filter|Filtern]] und [[Formeln]] zu manipulieren. Weitere Informationen zur Verwendung von Funktionen findest du in der [[Bases-Syntax|Bases-Syntax]]-Referenz.

Abgesehen von [[Funktionen#Global|Globalen]] Funktionen hängen die meisten Funktionen vom Typ des zu ändernden Wertes ab:

- [[Funktionen#Any|Any]]
- [[Funktionen#Date|Date]]
- [[Funktionen#String|String]]
- [[Funktionen#Number|Number]]
- [[Funktionen#List|List]]
- [[Funktionen#Link|Link]]
- [[Funktionen#File|File]]
- [[Funktionen#Object|Object]]
- [[Funktionen#Reguläre Ausdrücke|Reguläre Ausdrücke]]

## Global

Globale Funktionen werden ohne einen Typ verwendet.

### `escapeHTML()`

`escapeHTML(html: string): string`

- Maskiert Sonderzeichen in einer Zeichenkette, um sie für die Einbindung in HTML sicher zu machen.

### `date()`

`date(date: string): date`

- `date(string): date` analysiert die übergebene Zeichenkette und gibt ein Datumsobjekt zurück.
- Die `date`-Zeichenkette sollte im Format `YYYY-MM-DD HH:mm:ss` vorliegen.

### `duration()`

`duration(value: string): duration`

- Analysiert eine Zeichenkette als Dauer. Siehe den Abschnitt [[Bases-Syntax#Datumsarithmetik|Datumsarithmetik]] für das Format der `value`-Zeichenkette.
- Dauern müssen bei der Datumsarithmetik nicht explizit analysiert werden (zum Beispiel `now() + '1d'`), aber sie müssen es bei der Arithmetik mit Dauern (zum Beispiel `now() + (duration('1d') * 2)`).
- Bei Arithmetik von Dauern mit Skalaren muss die Dauer links stehen. Zum Beispiel `duration('5h') * 2` statt `2 * duration('5h')`.

### `file()`

`file(path: string | file | url): file`

- Gibt ein Dateiobjekt für die angegebene Datei oder den Pfad zurück.
- Beispiel: `file(link("[[filename]]"))` oder `file("path to file")`.

### `html()`

`html(html: string): html`

- Wandelt eine Zeichenkette in ein Quelltext-Snippet um, das als HTML gerendert wird.

### `if()`

`if(condition: any, trueResult: any, falseResult?: any): any`

- `condition` ist die zu bewertende Bedingung.
- `trueResult` ist die Ausgabe, wenn die Bedingung wahr ist.
- `falseResult` ist die optionale Ausgabe, wenn die Bedingung falsch ist. Wenn nicht angegeben, wird `null` angenommen.
- Gibt `trueResult` zurück, wenn `condition` wahr ist oder einen wahren Wert hat, andernfalls `falseResult`.
- Beispiel: `if(isModified, "Modified", "Unmodified")`

### `image()`

`image(path: string | file | url): image`

- Gibt ein Bildobjekt zurück, das das Bild in der Sicht rendert.
- Beispiel: `image(image-property)` oder `image("https://obsidian.md/images/obsidian-logo-gradient.svg")`

### `icon()`

`icon(name: string): icon`

- Gibt einen Wert zurück, der in einer Sicht als Symbol gerendert wird. Der Symbolname muss einem unterstützten Lucide-Symbol entsprechen.
- Beispiel: `icon("arrow-right")`.

### `link()`

`link(path: string | file, display?: value): Link`

- Analysiert eine Zeichenkette `path` und gibt ein Link-Objekt zurück, das als Link zum angegebenen Pfad gerendert wird.
- Optional kann der Parameter `display` angegeben werden, um den Anzeigetext des Links zu ändern.

### `list()`

`list(element: any): List`

- Wenn das übergebene Element eine Liste ist, wird es unverändert zurückgegeben.
- Andernfalls wird das übergebene `element` in eine Liste verpackt, wodurch eine Liste mit einem einzelnen Element entsteht.
- Diese Funktion kann hilfreich sein, wenn eine Eigenschaft im Vault eine Mischung aus Zeichenketten oder Listen enthält.
- Beispiel: `list("value")` gibt `["value"]` zurück.

### `max()`

`max(value1: number, value2: number...): number`

- Gibt die größte aller übergebenen Zahlen zurück.

### `min()`

`min(value1: number, value2: number...): number`

- Gibt die kleinste aller übergebenen Zahlen zurück.

### `now()`

`now(): date`

- `now()` gibt ein Datumsobjekt zurück, das den aktuellen Zeitpunkt darstellt.

### `number()`

`number(input: any): number`

- Versucht, den übergebenen Wert als Zahl zurückzugeben.
- Datumsobjekte werden als Millisekunden seit der Unix-Epoche zurückgegeben.
- Boolesche Werte geben 1 oder 0 zurück.
- Zeichenketten werden in eine Zahl umgewandelt und geben einen Fehler zurück, wenn das Ergebnis ungültig ist.
- Beispiel: `number("3.4")` gibt `3.4` zurück.

### `duration()`

`duration(value: string): duration`

- Analysiert eine Zeichenkette als Dauer. Siehe den Abschnitt [[Bases-Syntax#Datumsarithmetik|Datumsarithmetik]] für das Format der `value`-Zeichenkette.
- Dauern müssen bei der Datumsarithmetik nicht explizit analysiert werden (zum Beispiel `now() + '1d'`), aber sie müssen es bei der Arithmetik mit Dauern (zum Beispiel `now() + (duration('1d') * 2)`).
- Bei Arithmetik von Dauern mit Skalaren muss die Dauer links stehen. Zum Beispiel `duration('5h') * 2` statt `2 * duration('5h')`.

### `today()`

`today(): date`

- `today()` gibt ein Datumsobjekt zurück, das das aktuelle Datum darstellt. Der Zeitanteil wird auf null gesetzt.

## Any

Funktionen, die mit jedem Wert verwendet werden können. Dazu gehören Zeichenketten (z. B. `"hello"`), Zahlen (z. B. `42`), Listen (z. B. `[1,2,3]`), Objekte und mehr.

### `isTruthy()`

`any.isTruthy(): boolean`

- Gibt den in einen booleschen Wert umgewandelten Wert zurück.
- Beispiel: `1.isTruthy()` gibt `true` zurück.

### `isType()`

`any.isType(type: string): boolean`

- Gibt true zurück, wenn der Wert vom angegebenen Typ ist.
- Beispiel: `"example".isType("string")` und `true.isType("boolean")` geben beide true zurück.

### `toString()`

`any.toString(): string`

- Gibt die Zeichenkettendarstellung eines beliebigen Wertes zurück.
- Beispiel: `123.toString()` gibt `"123"` zurück.

## Date

Funktionen, die mit einem Datum und einer Uhrzeit verwendet werden können, z. B. `date("2025-05-27")`. Datumsvergleiche können mit [[Bases-Syntax#Datumsarithmetik|Datumsarithmetik]] durchgeführt werden.

### Felder

Die folgenden Felder sind für Daten verfügbar:

| Feld               | Typ      | Beschreibung                        |
| ------------------ | -------- | ----------------------------------- |
| `date.year`        | `number` | Das Jahr des Datums                 |
| `date.month`       | `number` | Der Monat des Datums (1–12)         |
| `date.day`         | `number` | Der Tag des Monats                  |
| `date.hour`        | `number` | Die Stunde (0–23)                   |
| `date.minute`      | `number` | Die Minute (0–59)                   |
| `date.second`      | `number` | Die Sekunde (0–59)                  |
| `date.millisecond` | `number` | Die Millisekunde (0–999)            |

### `date()`

`date.date(): date`

- Gibt ein Datumsobjekt ohne Zeitanteil zurück.
- Beispiel: `now().date().format("YYYY-MM-DD HH:mm:ss")` gibt eine Zeichenkette wie "2025-12-31 00:00:00" zurück.

### `format()`

`date.format(format: string): string`

- `format` ist die Formatzeichenkette (z. B. `"YYYY-MM-DD"`).
- Gibt das Datum formatiert gemäß einer Moment.js-Formatzeichenkette zurück.
- Beispiel: `date.format("YYYY-MM-DD")` gibt `"2025-05-27"` zurück.

### `time()`

`date.time(): string`

- Gibt die Uhrzeit zurück.
- Beispiel: `now().time()` gibt eine Zeichenkette wie "23:59:59" zurück.

### `relative()`

`date.relative(): string`

- Gibt einen lesbaren Vergleich des Datums mit dem aktuellen Zeitpunkt zurück.
- Beispiel: `file.mtime.relative()` gibt einen Wert wie `3 days ago` zurück.

### `isEmpty()`

`date.isEmpty(): boolean`

- Gibt false zurück.

## String

Funktionen, die mit einer Zeichenfolge verwendet werden können, z. B. `"hello"`.

### Felder

| Feld            | Typ      | Beschreibung                               |
| --------------- | -------- | ------------------------------------------ |
| `string.length` | `number` | Die Anzahl der Zeichen in der Zeichenkette |

### `contains()`

`string.contains(value: string): boolean`

- `value` ist die zu suchende Teilzeichenkette.
- Gibt true zurück, wenn die Zeichenkette `value` enthält.
- Beispiel: `"hello".contains("ell")` gibt `true` zurück.

### `containsAll()`

`string.containsAll(...values: string): boolean`

- `values` sind eine oder mehrere zu suchende Teilzeichenketten.
- Gibt true zurück, wenn die Zeichenkette alle `values` enthält.
- Beispiel: `"hello".containsAll("h", "e")` gibt `true` zurück.

### `containsAny()`

`string.containsAny(...values: string): boolean`

- `values` sind eine oder mehrere zu suchende Teilzeichenketten.
- Gibt true zurück, wenn die Zeichenkette mindestens einen der `values` enthält.
- Beispiel: `"hello".containsAny("x", "y", "e")` gibt `true` zurück.

### `endsWith()`

`string.endsWith(query: string): boolean`

- `query` ist die am Ende zu prüfende Zeichenkette.
- Gibt true zurück, wenn die Zeichenkette mit `query` endet.
- Beispiel: `"hello".endsWith("lo")` gibt `true` zurück.

### `isEmpty()`

`string.isEmpty(): boolean`

- Gibt true zurück, wenn die Zeichenkette keine Zeichen hat oder nicht vorhanden ist.
- Beispiel: `"Hello world".isEmpty()` gibt `false` zurück.
- Beispiel: `"".isEmpty()` gibt `true` zurück.

### `lower()`

`string.lower(): string`

- Gibt die in Kleinbuchstaben umgewandelte Zeichenkette zurück.

### `replace()`

`string.replace(pattern: string | Regexp, replacement: string): string`

- `pattern` ist der in der Zielzeichenkette zu suchende Wert.
- `replacement` ist der Wert, durch den gefundene Muster ersetzt werden.
- Wenn `pattern` eine Zeichenkette ist, werden alle Vorkommen des Musters ersetzt.
- Wenn `pattern` ein Regexp ist, bestimmt das `g`-Flag, ob nur das erste oder alle Vorkommen ersetzt werden.
- Beispiel: `"a:b:c:d".replace(/:/, "-")` gibt `"a-b,c,d"` zurück, wohingegen `"a:b:c:d".replace(/:/g, "-")` `"a-b-c-d"` zurückgibt.

### `repeat()`

`string.repeat(count: number): string`

- `count` ist die Anzahl der Wiederholungen der Zeichenkette.
- Beispiel: `"123".repeat(2)` gibt `"123123"` zurück.

### `reverse()`

`string.reverse(): string`

- Kehrt die Zeichenkette um.
- Beispiel: `"hello".reverse()` gibt `"olleh"` zurück.

### `slice()`

`string.slice(start: number, end?: number): string`

- `start` ist der inklusive Startindex.
- `end` ist der optionale exklusive Endindex.
- Gibt eine Teilzeichenkette von `start` (inklusiv) bis `end` (exklusiv) zurück.
- Beispiel: `"hello".slice(1, 4)` gibt `"ell"` zurück.
- Wenn `end` weggelassen wird, wird bis zum Ende der Zeichenkette geschnitten.

### `split()`

`string.split(separator: string | Regexp, n?: number): list`

- `separator` ist das Trennzeichen zum Aufteilen der Zeichenkette.
- `n` ist eine optionale Zahl. Wenn angegeben, enthält das Ergebnis die ersten `n` Elemente.
- Gibt eine Liste von Teilzeichenketten zurück.
- Beispiel: `"a,b,c,d".split(",", 3)` oder `"a,b,c,d".split(/,/, 3)` gibt `["a", "b", "c"]` zurück.

### `startsWith()`

`string.startsWith(query: string): boolean`

- `query` ist die am Anfang zu prüfende Zeichenkette.
- Gibt true zurück, wenn die Zeichenkette mit `query` beginnt.
- Beispiel: `"hello".startsWith("he")` gibt `true` zurück.

### `title()`

`string.title(): string`

- Wandelt die Zeichenkette in Titelschreibweise um (erster Buchstabe jedes Wortes wird großgeschrieben).
- Beispiel: `"hello world".title()` gibt `"Hello World"` zurück.

### `trim()`

`string.trim(): string`

- Entfernt Leerzeichen an beiden Enden der Zeichenkette.
- Beispiel: `"  hi  ".trim()` gibt `"hi"` zurück.

## Number

Funktionen, die mit numerischen Werten verwendet werden können, z. B. `42`, `3.14`.

### `abs()`

`number.abs(): number`

- Gibt den Absolutwert der Zahl zurück.
- Beispiel: `(-5).abs()` gibt `5` zurück.

### `ceil()`

`number.ceil(): number`

- Rundet die Zahl auf die nächste ganze Zahl auf.
- Beispiel: `(2.1).ceil()` gibt `3` zurück.

### `floor()`

`number.floor(): number`

- Rundet die Zahl auf die nächste ganze Zahl ab.
- Beispiel: `(2.9).floor()` gibt `2` zurück.

### `isEmpty()`

`number.isEmpty(): boolean`

- Gibt true zurück, wenn die Zahl nicht vorhanden ist.
- Beispiel: `5.isEmpty()` gibt `false` zurück.

### `round()`

`number.round(digits: number): number`

- Rundet die Zahl auf die nächste ganze Zahl.
- Optional kann ein `digits`-Parameter angegeben werden, um auf diese Anzahl von Dezimalstellen zu runden.
- Beispiel: `(2.5).round()` gibt `3` zurück, und `(2.3333).round(2)` gibt `2.33` zurück.

### `toFixed()`

`number.toFixed(precision: number): string`

- `precision` ist die Anzahl der Dezimalstellen.
- Gibt eine Zeichenkette mit der Zahl in Festkommanotation zurück.
- Beispiel: `(3.14159).toFixed(2)` gibt `"3.14"` zurück.

## List

Funktionen, die mit einer geordneten Liste von Elementen verwendet werden können, z. B. `[1, 2, 3]`.

### Felder

| Feld          | Typ      | Beschreibung                          |
| ------------- | -------- | ------------------------------------- |
| `list.length` | `number` | Die Anzahl der Elemente in der Liste  |

### `contains()`

`list.contains(value: any): boolean`

- `value` ist das zu suchende Element.
- Gibt true zurück, wenn die Liste `value` enthält.
- Beispiel: `[1,2,3].contains(2)` gibt `true` zurück.

### `containsAll()`

`list.containsAll(...values: any): boolean`

- `values` sind ein oder mehrere zu suchende Elemente.
- Gibt true zurück, wenn die Liste alle `values` enthält.
- Beispiel: `[1,2,3].containsAll(2,3)` gibt `true` zurück.

### `containsAny()`

`list.containsAny(...values: any): boolean`

- `values` sind ein oder mehrere zu suchende Elemente.
- Gibt true zurück, wenn die Liste mindestens eines der `values` enthält.
- Beispiel: `[1,2,3].containsAny(3,4)` gibt `true` zurück.

### `filter()`

`list.filter(value: Boolean): list`

- Filtert die Elemente dieser Liste durch Aufruf einer Filterfunktion, die die Variablen `index` und `value` verwendet und einen booleschen Wert zurückgibt, ob das Element beibehalten werden soll.
- `value` ist der Wert eines Elements in der Liste.
- `index` ist der Index des aktuellen Werts.
- Beispiel: `[1,2,3,4].filter(value > 2)` gibt `[3,4]` zurück.

### `flat()`

`list.flat(): list`

- Flacht verschachtelte Listen in eine einzelne Liste ab.
- Beispiel: `[1,[2,3]].flat()` gibt `[1,2,3]` zurück.

### `isEmpty()`

`list.isEmpty(): boolean`

- Gibt true zurück, wenn die Liste keine Elemente hat.
- Beispiel: `[1,2,3].isEmpty()` gibt `false` zurück.

### `join()`

`list.join(separator: string): string`

- `separator` ist die Zeichenkette, die zwischen den Elementen eingefügt wird.
- Verbindet alle Listenelemente zu einer einzelnen Zeichenkette.
- Beispiel: `[1,2,3].join(",")` gibt `"1,2,3"` zurück.

### `map()`

`list.map(value: Any): list`

- Transformiert jedes Element dieser Liste durch Aufruf einer Konvertierungsfunktion, die die Variablen `index` und `value` verwendet und den neuen Wert zurückgibt, der in die Liste eingefügt werden soll.
- `value` ist der Wert eines Elements in der Liste.
- `index` ist der Index des aktuellen Werts.
- Beispiel: `[1,2,3,4].map(value + 1)` gibt `[2,3,4,5]` zurück.

### `reduce()`

`list.reduce(expression: Any, acc: Any): Any`

- Reduziert die Elemente dieser Liste auf einen einzelnen Wert, indem für jedes Element ein Ausdruck ausgeführt wird. Der Ausdruck kann die Variablen `index`, `value` und `acc` (der Akkumulator) verwenden und sollte den nächsten Akkumulatorwert zurückgeben.
- `expression` wird für jedes Element in der Liste ausgewertet.
- `value` ist der Wert des aktuellen Elements in der Liste.
- `index` ist der Index des aktuellen Elements.
- `acc` ist der bisher akkumulierte Wert.
- Beispiel (Summe): `[1,2,3].reduce(acc + value, 0)` gibt `6` zurück.
- Beispiel (Maximum): `values.filter(value.isType("number")).reduce(if(acc == null || value > acc, value, acc), null)` gibt die größte Zahl zurück, oder `null`, wenn keine vorhanden ist.

### `reverse()`

`list.reverse(): list`

- Kehrt die Liste um.
- Beispiel: `[1,2,3].reverse()` gibt `[3,2,1]` zurück.

### `slice()`

`list.slice(start: number, end?: number): list`

- `start` ist der inklusive Startindex.
- `end` ist der optionale exklusive Endindex.
- Gibt eine flache Kopie eines Teils der Liste von `start` (inklusiv) bis `end` (exklusiv) zurück.
- Beispiel: `[1,2,3,4].slice(1,3)` gibt `[2,3]` zurück.
- Wenn `end` weggelassen wird, wird bis zum Ende der Liste geschnitten.

### `sort()`

`list.sort(): list`

- Sortiert Listenelemente vom kleinsten zum größten.
- Beispiel: `[3, 1, 2].sort()` gibt `[1, 2, 3]` zurück.
- Beispiel: `["c", "a", "b"].sort()` gibt `["a", "b", "c"]` zurück.

### `unique()`

`list.unique(): list`

- Entfernt doppelte Elemente.
- Beispiel: `[1,2,2,3].unique()` gibt `[1,2,3]` zurück.

## Link

Funktionen, die auf einen Link angewendet werden können. Links können aus einer Datei (`file.asLink()`) oder einem Pfad (`link("path")`) erstellt werden.

### `asFile()`

`link.asFile(): file`

- Gibt ein Dateiobjekt zurück, wenn der Link auf eine gültige lokale Datei verweist.
- Beispiel: `link("[[filename]]").asFile()`

### `linksTo()`

`link.linksTo(file): boolean`

- Gibt zurück, ob die durch den `link` dargestellte Datei einen Link zu `file` hat.

## File

Funktionen, die mit Dateien im Vault verwendet werden können.

### Felder

Die folgenden Felder sind für Dateien verfügbar:

| Feld              | Typ      | Beschreibung                                                  |
| ----------------- | -------- | ------------------------------------------------------------- |
| `file.name`       | `string` | Der Name dieser Datei.                                        |
| `file.basename`   | `string` | Der Name dieser Datei ohne Dateiendung.                       |
| `file.path`       | `string` | Der vollständige Pfad zu dieser Datei, relativ zum Vault-Stammverzeichnis. |
| `file.folder`     | `string` | Der vollständige Pfad zum übergeordneten Ordner.              |
| `file.ext`        | `string` | Die Dateiendung dieser Datei.                                 |
| `file.size`       | `number` | Die Größe dieser Datei in Bytes.                              |
| `file.properties` | `object` | Die Notiz-Eigenschaften dieser Datei.                         |
| `file.tags`       | `list`   | Die Tags dieser Datei. Beinhaltet Inline-Tags.                |
| `file.links`      | `list`   | Die internen Links innerhalb dieser Datei.                    |
| `file.ctime`      | `date`   | Zeitstempel der Erstellung dieser Datei.                      |
| `file.mtime`      | `date`   | Zeitstempel der letzten Änderung dieser Datei.                |

### `asLink()`

`file.asLink(display?: string): Link`

- `display` optionaler Anzeigetext für den Link.
- Gibt ein Link-Objekt zurück, das als funktionierender Link gerendert wird.
- Beispiel: `file.asLink()`

### `hasLink()`

`file.hasLink(otherFile: file | string): boolean`

- `otherFile` ist ein anderes Dateiobjekt oder ein Zeichenkettenpfad zur Prüfung.
- Gibt true zurück, wenn `file` auf `otherFile` verlinkt.
- Beispiel: `file.hasLink(otherFile)` gibt `true` zurück, wenn es einen Link von `file` zu `otherFile` gibt.

### `hasProperty()`

`file.hasProperty(name: string): boolean`

- Gibt true zurück, wenn die Notiz die angegebene Dateieigenschaft hat.

### `hasTag()`

`file.hasTag(...values: string): boolean`

- `values` sind ein oder mehrere Tag-Namen.
- Gibt true zurück, wenn die Datei einen der Tags in `values` hat.
- Beispiel: `file.hasTag("tag1", "tag2")` gibt `true` zurück, wenn die Datei den Tag `#tag1` oder `#tag2` hat. Dies schließt auch [[Tags#Verschachtelte Tags|verschachtelte Tags]] ein, wie `#tag1/a` oder `#tag2/b`.

### `inFolder()`

`file.inFolder(folder: string): boolean`

- `folder` ist der zu prüfende Ordnername.
- Gibt true zurück, wenn sich die Datei im angegebenen Ordner oder einem seiner Unterordner befindet.
- Beispiel: `file.inFolder("notes")` gibt `true` zurück.

## Object

Funktionen, die mit einer Sammlung von Schlüssel-Wert-Paaren verwendet werden können, z. B. `{"a": 1, "b": 2}`.

### `isEmpty()`

`object.isEmpty(): boolean`

- Gibt true zurück, wenn das Objekt keine eigenen Eigenschaften hat.
- Beispiel: `{}.isEmpty()` gibt `true` zurück.

### `keys()`

`object.keys(): list`

- Gibt eine Liste zurück, die die Schlüssel des Objekts enthält.

### `values()`

`object.values(): list`

- Gibt eine Liste zurück, die die Werte des Objekts enthält.

## Reguläre Ausdrücke

Funktionen, die mit einem regulären Ausdrucksmuster verwendet werden können. Beispiel: `/abc/`.

### `matches()`

`regexp.matches(value: string): boolean`

- `value` ist die zu testende Zeichenkette.
- Gibt true zurück, wenn der reguläre Ausdruck mit `value` übereinstimmt.
- Beispiel: `/abc/.matches("abcde")` gibt `true` zurück.
