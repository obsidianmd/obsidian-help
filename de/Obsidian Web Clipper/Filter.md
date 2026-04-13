---
permalink: web-clipper/filters
---
Filter ermöglichen die Modifikation von [[Variablen]] in [[Obsidian Web Clipper/Vorlagen|Web Clipper-Vorlagen]]. Filter werden auf Variablen mit der Syntax `{{variable|filter}}` angewendet.

- Filter funktionieren für jede Art von [[Variablen|Variable]], einschließlich `prompt`-, `meta`-, `selector`- und `schema`-Variablen.
- Filter können verkettet werden, z. B. `{{variable|filter1|filter2}}`, und werden in der Reihenfolge angewendet, in der sie hinzugefügt werden.

## Datum

Daten konvertieren und ändern.

### `date`

Konvertiert ein Datum in das angegebene Format, [siehe Referenz](https://day.js.org/docs/en/display/format).

- `{{date|date:"YYYY-MM-DD"}}` konvertiert das aktuelle Datum in „YYYY-MM-DD".
- Verwende `date:("outputFormat", "inputFormat")`, um das Eingabeformat anzugeben, z. B. `"12/01/2024"|date:("YYYY-MM-DD", "MM/DD/YYYY")` liest „12/01/2024" und gibt `"2024-12-01"` zurück.

### `date_modify`

Ändert ein Datum durch Hinzufügen oder Abziehen eines bestimmten Zeitraums, [siehe Referenz](https://day.js.org/docs/en/manipulate/add).

- `"2024-12-01"|date_modify:"+1 year"` gibt `"2025-12-01"` zurück
- `"2024-12-01"|date_modify:"- 2 months"` gibt `"2024-10-01"` zurück

### `duration`

Konvertiert ISO-8601-Dauerzeichenketten oder Sekunden in formatierte Zeitzeichenketten. Verwendet Tokens: `HH` (aufgefüllte Stunden), `H` (Stunden), `mm` (aufgefüllte Minuten), `m` (Minuten), `ss` (aufgefüllte Sekunden), `s` (Sekunden).

- `"PT1H30M"|duration:"HH:mm:ss"` gibt `"01:30:00"` zurück.
- `"3665"|duration:"H:mm:ss"` gibt `"1:01:05"` zurück.
- Wenn `duration` ohne Parameter gesetzt wird, wird `HH:mm:ss` über 1 Stunde und `mm:ss` unter 1 Stunde verwendet.
- Unterstützt sowohl ISO-8601-Dauerzeichenketten (z. B. `PT6702S`, `PT1H30M`) als auch einfache Sekunden.

## Textkonvertierung und Großschreibung

Textzeichenketten von einem Format in ein anderes konvertieren.

### `camel`

Konvertiert Text in `camelCase`.

### `capitalize`

Schreibt das erste Zeichen des Werts groß und konvertiert den Rest in Kleinbuchstaben, z. B. `"hELLO wORLD"|capitalize` gibt `"Hello world"` zurück.

### `decode_uri`

Dekodiert eine URI-kodierte Zeichenkette, z. B. `"%E4%BD%A0%E5%A5%BD"|decode_uri` gibt `"你好"` zurück.

- `"hello%20world"|decode_uri` gibt `"hello world"` zurück.
- Gibt die ursprüngliche Zeichenkette zurück, wenn die Dekodierung fehlschlägt (z. B. bei fehlerhaften URI-Sequenzen).

### `kebab`

Konvertiert Text in `kebab-case`.

### `lower`

Konvertiert Text in `Kleinbuchstaben`.

### `pascal`

Konvertiert Text in `PascalCase`.

### `replace`

Ersetzt Vorkommen von angegebenem Text:

- Einfaches Ersetzen: `"hello!"|replace:",":""` entfernt alle Kommas.
- Mehrfaches Ersetzen: `"hello world"|replace:("e":"a","o":"0")` gibt `"hall0 w0rld"` zurück.
- Ersetzungen werden in der angegebenen Reihenfolge angewendet.
- Um angegebenen Text zu entfernen, verwende `""` als Ersetzungswert.
- Sonderzeichen einschließlich `: | { } ( ) ' "` sollten mit einem Backslash maskiert werden, wenn sie im Suchbegriff verwendet werden, z. B. `\:` um nach einem literalen Doppelpunkt zu suchen.

Regex wird unter Verwendung der JavaScript-Regex-Syntax unterstützt:

- Alle Vokale ersetzen: `"hello world"|replace:"/[aeiou]/g":"*"` → `"h*ll* w*rld".`
- Groß-/Kleinschreibung ignorieren: `"HELLO world"|replace:"/hello/i":"hi"` → `"hi world".`
- Mehrere Regex: `"hello world"|replace:("/[aeiou]/g":"*","/\s+/":"-")` → `"h*ll*-w*rld"`.
- Verfügbare Flags: `g` (global), `i` (Groß-/Kleinschreibung ignorieren), `m` (mehrzeilig), `s` (dotAll), `u` (Unicode), `y` (sticky).

### `safe_name`

Konvertiert Text in einen sicheren Dateinamen.

- Standardmäßig wendet `safe_name` die konservativsten Bereinigungsregeln an.
- Betriebssystemspezifische Regeln können mit `safe_name:os` angewendet werden, wobei `os` `windows`, `mac` oder `linux` sein kann, um nur die Regeln für das jeweilige Betriebssystem anzuwenden.

### `snake`

Konvertiert Text in `snake_case`.

### `title`

Konvertiert Text in `Titelschreibung`, z. B. `"hello world"|title` gibt `"Hello World"` zurück.

### `trim`

Entfernt Leerzeichen an beiden Enden einer Zeichenkette.

- `"  hello world  "|trim` gibt `"hello world"` zurück.

### `uncamel`

Konvertiert camelCase oder PascalCase in durch Leerzeichen getrennte Wörter, die mit anderen Filtern wie `title` oder `capitalize` weiter formatiert werden können.

- `"camelCase"|uncamel` gibt `"camel case"` zurück.
- `"PascalCase"|uncamel` gibt `"pascal case"` zurück.

### `upper`

Konvertiert einen Wert in Großbuchstaben, z. B. `"hello world"|upper` gibt `"HELLO WORLD"` zurück.

## Textformatierung

[[Grundlegende Formatierungssyntax]] und [[Erweiterte Formatierungssyntax]] auf Text anwenden.

### `blockquote`

Fügt jeder Zeile der Eingabe ein Markdown-Zitat-Präfix (`> `) hinzu.

### `callout`

Erstellt einen [[Hinweisblöcke|Hinweisblock]] mit optionalen Parametern: `{{variable|callout:("type", "title", foldState)}}`

- `type` ist der Callout-Typ und standardmäßig „info"
- `title` ist der Titel des Hinweisblocks und standardmäßig leer
- `foldState` ist ein boolescher Wert zum Setzen des Einklapp-Status (true für eingeklappt, false für ausgeklappt, null für nicht einklappbar)

### `footnote`

Konvertiert ein Array oder Objekt in eine Liste von Markdown-Fußnoten.

- Für Arrays: `["first item","second item"]|footnote` gibt zurück: `[^1]: first item` etc.
- Für Objekte: `{"First Note": "Content 1", "Second Note": "Content 2"}|footnote` gibt zurück: `[^first-note]: Content 1` etc.

### `fragment_link`

Konvertiert Zeichenketten und Arrays in [Textfragment](https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments)-Links. Standardmäßig wird „link" als Linktext verwendet.

- `highlights|fragment_link` gibt `Highlight content [link](text-fragment-url)` zurück
- `highlights|fragment_link:"custom title"` gibt `Highlight content [custom title](text-fragment-url)` zurück

### `image`

Konvertiert Zeichenketten, Arrays oder Objekte in Markdown-Bildsyntax.

- Für Zeichenketten: `"image.jpg"|image:"alt text"` gibt `![alt text](image.jpg)` zurück.
- Für Arrays: `["image1.jpg","image2.jpg"]|image:"alt text"` gibt ein Array von Markdown-Bildzeichenketten mit demselben Alt-Text für alle Bilder zurück.
- Für Objekte: `{"image1.jpg": "Alt 1", "image2.jpg": "Alt 2"}|image` gibt Markdown-Bildzeichenketten mit Alt-Text aus den Objektschlüsseln zurück.

### `link`

Konvertiert Zeichenketten, Arrays oder Objekte in Markdown-Link-Syntax (nicht zu verwechseln mit [[Filter#`wikilink`|Wiki-Link]]).

- Für Zeichenketten: `"url"|link:"author"` gibt `[author](url)` zurück.
- Für Arrays: `["url1","url2"]|link:"author"` gibt ein Array von Markdown-Links mit demselben Text für alle Links zurück.
- Für Objekte: `{"url1": "Author 1", "url2": "Author 2"}|link` gibt Markdown-Links mit dem Text zurück, der den Objektschlüsseln entspricht.

### `list`

Konvertiert ein Array in eine Markdown-Liste.

- `list` zum Konvertieren in eine Aufzählung.
- `list:task` zum Konvertieren in eine Aufgabenliste.
- `list:numbered` zum Konvertieren in eine nummerierte Liste.
- `list:numbered-task` zum Konvertieren in eine nummerierte Aufgabenliste.

### `table`

Konvertiert ein Array oder Array von Objekten in eine [[Erweiterte Formatierungssyntax#Tabellen|Markdown-Tabelle]]:

- Für ein Array von Objekten werden die Objektschlüssel als Überschriften verwendet.
- Für ein Array von Arrays wird eine Tabelle erstellt, wobei jedes verschachtelte Array eine Zeile darstellt.
- Für ein einfaches Array wird eine einspaltige Tabelle mit „Value" als Überschrift erstellt.
- Benutzerdefinierte Spaltenüberschriften können angegeben werden mit: `table:("Column 1", "Column 2", "Column 3")`. Bei Verwendung mit einem einfachen Array werden die Daten automatisch basierend auf der Anzahl der angegebenen Spalten in Zeilen aufgeteilt.

### `wikilink`

Konvertiert Zeichenketten, Arrays oder Objekte in Obsidian-[[Notizen verknüpfen|Wiki-Link]]-Syntax.

- Für Zeichenketten: `"page"|wikilink` gibt `[[page]]` zurück.
- Für Zeichenketten mit Alias: `"page"|wikilink:"alias"` gibt `[[page|alias]]` zurück.
- Für Arrays: `["page1","page2"]|wikilink` gibt ein Array von Wiki-Links ohne Aliasse zurück.
- Für Arrays mit Alias: `["page1","page2"]|wikilink:"alias"` gibt ein Array von Wiki-Links mit demselben Alias für alle Links zurück.
- Für Objekte: `{"page1": "alias1", "page2": "alias2"}|wikilink` gibt Wiki-Links mit den Schlüsseln als Seitennamen und Werten als Aliasse zurück.

## Zahlen

### `calc`

Führt grundlegende arithmetische Operationen mit Zahlen durch.

- Unterstützte Operatoren: `+`, `-`, `*`, `/`, `**` (oder `^`) für Potenzierung.
- Beispiel: `5|calc:"+10"` gibt `15` zurück.
- Beispiel: `2|calc:"**3"` gibt `8` zurück (2 hoch 3).
- Gibt die ursprüngliche Zeichenkette zurück, wenn die Eingabe keine Zahl ist.

### `length`

Gibt die Länge von Zeichenketten, Arrays oder die Anzahl der Schlüssel in Objekten zurück.

- Für Zeichenketten: `"hello"|length` gibt `5` zurück.
- Für Arrays: `["a","b","c"]|length` gibt `3` zurück.
- Für Objekte: `{"a":1,"b":2}|length` gibt `2` zurück.

### `round`

Rundet eine Zahl auf die nächste Ganzzahl oder auf eine angegebene Anzahl von Dezimalstellen.

- Ohne Parameter: `3.7|round` gibt `4` zurück.
- Mit angegebenen Dezimalstellen: `3.14159|round:2` gibt `3.14` zurück.

## HTML-Verarbeitung

HTML-Inhalte verarbeiten und HTML in Markdown konvertieren. Beachte, dass deine Eingabe-[[Variablen|Variable]] HTML-Inhalte enthalten muss, z. B. mit `{{fullHtml}}`, `{{contentHtml}}` oder einer `{{selectorHtml:}}`-Variable.

### `markdown`

Konvertiert eine Zeichenkette in eine [[Obsidian Flavored Markdown]]-formatierte Zeichenkette.

- Nützlich in Kombination mit Variablen, die HTML zurückgeben, wie `{{contentHtml}}`, `{{fullHtml}}` und Selektor-Variablen wie `{{selectorHtml:cssSelector}}`.

### `remove_attr`

Entfernt nur die angegebenen HTML-Attribute aus Tags.

- Beispiel: `"<div class="test" id="example">Content</div>"|remove_attr:"class"` gibt `<div id="example">Content</div>` zurück.
- Mehrere Attribute: `{{fullHtml|remove_attr:("class,style,id")}}`

### `remove_html`

Entfernt die angegebenen HTML-Elemente und deren Inhalt aus einer Zeichenkette.

- Unterstützt Tag-Name, Klasse oder ID, z. B. `{{fullHtml|remove_html:("img,.class-name,#element-id")}}`
- Um nur HTML-Tags oder -Attribute ohne den Inhalt zu entfernen, verwende die Filter `strip_tags` oder `strip_attr`.

### `remove_tags`

Entfernt nur die angegebenen HTML-Tags. Der Inhalt der Tags bleibt erhalten.

- Beispiel: `"<p>Hello <b>world</b>!</p>"|remove_tags:"b"` gibt `"<p>Hello world!</p>"` zurück.
- Mehrere Tags: `{{fullHtml|remove_tags:("a,em,strong")}}`

### `replace_tags`

Ersetzt HTML-Tags unter Beibehaltung des Inhalts und der Attribute des Tags.

- `{{fullHtml|replace_tags:"strong":"h2"}}` ersetzt alle `<strong>`-Tags durch `<h2>`.

### `strip_attr`

Entfernt **alle** HTML-Attribute aus einer Zeichenkette.

- Verwende `strip_attr:("class, id")`, um bestimmte Attribute beizubehalten.
- Beispiel: `"<div class="test" id="example">Content</div>"|strip_attr:("class")` gibt `<div id="example">Content</div>` zurück.

### `strip_md`

Entfernt **alle** Markdown-Formatierungen und gibt eine reine Textzeichenkette zurück, z. B. wird `**text**` zu `text`.

- Wandelt formatierten Text in unformatierten reinen Text um, einschließlich Fett, Kursiv, Hervorhebungen, Überschriften, Quelltext, Blockzitate, Tabellen, Aufgabenlisten und Wiki-Links.
- Entfernt vollständig Tabellen, Fußnoten, Bilder und HTML-Elemente.

### `strip_tags`

Entfernt **alle** HTML-Tags aus einer Zeichenkette. Der Inhalt innerhalb des Tags bleibt erhalten.

- Verwende `strip_tags:("p,strong,em")`, um bestimmte Tags beizubehalten.
- Beispiel: `"<p>Hello <b>world</b>!</p>"|strip_tags:("b")` gibt `Hello <b>world</b>!` zurück.

## Arrays und Objekte

Arrays und Objekte verarbeiten.

### `first`

Gibt das erste Element eines Arrays als Zeichenkette zurück.

- `["a","b","c"]|first` gibt `"a"` zurück.
- Wenn die Eingabe kein Array ist, wird die Eingabe unverändert zurückgegeben.

### `join`

Kombiniert Elemente eines Arrays zu einer Zeichenkette.

- `["a","b","c"]|join` gibt `"a,b,c"` zurück.
- Ein benutzerdefiniertes Trennzeichen kann angegeben werden: `["a","b","c"]|join:" "` gibt `"a b c"` zurück. Verwende `join:"\n"`, um Elemente mit einem Zeilenumbruch zu trennen.
- Kann nach `split` oder `slice` nützlich sein: `"a,b,c,d"|split:","|slice:1,3|join:" "` gibt `"b c"` zurück.

### `last`

Gibt das letzte Element eines Arrays als Zeichenkette zurück.

- `["a","b","c"]|last` gibt `"c"` zurück.
- Wenn die Eingabe kein Array ist, wird die Eingabe unverändert zurückgegeben.

### `map`

Wendet eine Transformation auf jedes Element eines Arrays an mit der Syntax `map:item => item.property` oder `map:item => item.nested.property` für verschachtelte Eigenschaften.

- `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => item.gem` gibt `["obsidian", "amethyst"]` zurück.
- Verwende Klammern für Objektliterale und komplexe Ausdrücke: `map:item => ({key: value})`, z. B.: `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => ({name: item.gem, color: item.color})` gibt `[{name: "obsidian", color: "black"}, {name: "amethyst", color: "purple"}]` zurück.

Zeichenketten-Literale werden ebenfalls unterstützt, z. B. `["rock", "pop"]|map:item => "genres/${item}"` gibt `["genres/rock", "genres/pop"]` zurück.

Kombiniere `map` mit dem `template`-Filter, z. B. `map:item => ({name: ${item.gem}, color: item.color})|template:"- ${name} is ${color}\n"`. Für Zeichenketten-Literal-Maps verwende `${str}` in der Vorlage, z. B. `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"`.

Hinweis: Eingebaute Filter können nicht innerhalb von `map` verwendet werden. Das bedeutet, dass beispielsweise das Trimmen jedes Werts eines Arrays nicht mit `map` durchgeführt werden kann.

### `merge`

Fügt neue Werte zu einem Array hinzu.

- Für Arrays: `["a","b"]|merge:("c","d")` gibt `["a","b","c","d"]` zurück.
- Einzelner Wert: `["a","b"]|merge:"c"` gibt `["a","b","c"]` zurück.
- Wenn die Eingabe kein Array ist, wird ein neues Array erstellt: `"a"|merge:("b","c")` gibt `["a","b","c"]` zurück.
- Werte können in Anführungszeichen stehen: `["a"]|merge:('b,"c,d",e')` gibt `["a","b","c,d","e"]` zurück.

### `nth`

Behält das n-te Element in einem Array unter Verwendung der CSS-ähnlichen nth-child-Syntax und Gruppenmustern. Alle Positionen sind 1-basiert (das erste Element ist Position 1).

- `array|nth:3` behält nur das 3. Element.
- `array|nth:3n` behält jedes 3. Element (3, 6, 9, usw.).
- `array|nth:n+3` behält das 3. und alle folgenden Elemente.

Gruppenmuster-Syntax für sich wiederholende Strukturen:

- `array|nth:1,2,3:5` behält die Positionen 1, 2, 3 aus jeder Gruppe von 5 Elementen. Beispiel: `[1,2,3,4,5,6,7,8,9,10]|nth:1,2,3:5` gibt `[1,2,3,6,7,8]` zurück.

### `object`

Manipuliert Objektdaten:

- `object:array` konvertiert ein Objekt in ein Array von Schlüssel-Wert-Paaren.
- `object:keys` gibt ein Array der Objektschlüssel zurück.
- `object:values` gibt ein Array der Objektwerte zurück.
- Beispiel: `{"a":1,"b":2}|object:array` gibt `[["a",1],["b",2]]` zurück.

### `slice`

Extrahiert einen Teil einer Zeichenkette oder eines Arrays.

- Für Zeichenketten: `"hello"|slice:1,4` gibt `"ell"` zurück.
- Für Arrays: `["a","b","c","d"]|slice:1,3` gibt `["b","c"]` zurück.
- Wenn nur ein Parameter angegeben wird, wird ab diesem Index bis zum Ende extrahiert: `"hello"|slice:2` gibt `"llo"` zurück.
- Negative Indizes zählen vom Ende: `"hello"|slice:-3` gibt `"llo"` zurück.
- Der zweite Parameter ist exklusiv: `"hello"|slice:1,4` enthält die Zeichen an den Indizes 1, 2 und 3.
- Die Verwendung eines negativen zweiten Parameters schließt Elemente vom Ende aus: `"hello"|slice:0,-2` gibt `"hel"` zurück.

### `split`

Teilt eine Zeichenkette in ein Array von Teilzeichenketten.

- `"a,b,c"|split:","` gibt `["a","b","c"]` zurück.
- `"hello world"|split:" "` gibt `["hello","world"]` zurück.
- Wenn kein Trennzeichen angegeben wird, wird bei jedem Zeichen geteilt: `"hello"|split` gibt `["h","e","l","l","o"]` zurück.
- Reguläre Ausdrücke können als Trennzeichen verwendet werden: `"a1b2c3"|split:[0-9]` gibt `["a","b","c"]` zurück.

### `template`

Wendet eine Vorlagenzeichenkette auf ein Objekt oder Array von Objekten an, mit der Syntax `object|template:"Template with ${variable}"`.

- Zugriff auf verschachtelte Eigenschaften: `{"gem":{"name":"Obsidian"}}|template:"${gem.name}"` gibt `"Obsidian"` zurück.
- Für Objekte: `{"gem":"obsidian","hardness":5}|template:"${gem} has a hardness of ${hardness}"` gibt `"obsidian has a hardness of 5"` zurück.
- Für Arrays: `[{"gem":"obsidian","hardness":5},{"gem":"amethyst","hardness":7}]|template:"- ${gem} has a hardness of ${hardness}\n"` gibt eine formatierte Liste zurück.

Funktioniert mit Zeichenketten-Literalen aus `map` unter Verwendung von `${str}`:

- Beispiel: `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"` gibt eine formatierte Liste zurück.

### `unique`

Entfernt doppelte Werte aus Arrays und Objekten.

- Für Arrays von Primitiven: `[1,2,2,3,3]|unique` gibt `[1,2,3]` zurück.
- Für Arrays von Objekten: `[{"a":1},{"b":2},{"a":1}]|unique` gibt `[{"a":1},{"b":2}]` zurück.
- Für Objekte werden Eigenschaften mit doppelten Werten entfernt, wobei der Schlüssel des letzten Vorkommens beibehalten wird.
- Für Zeichenketten wird die Eingabe unverändert zurückgegeben.
