---
permalink: bases/syntax
publish: true
mobile: true
description: Diese Seite bietet eine Einführung in die Bases-Syntax in Obsidian.
---
Wenn du in Obsidian [[Eine Base erstellen|eine Basis erstellst]], wird sie als `.base`-Datei gespeichert. Basen werden normalerweise über die App-Oberfläche bearbeitet, aber die Syntax kann auch manuell bearbeitet und in einen Quelltext-Block eingebettet werden.

Die [[Einführung in Bases|Bases]]-Syntax definiert [[Ansichten]], Filter und [[Formeln]]. Basen müssen gültiges YAML sein, das dem unten definierten Schema entspricht.

## Beispiel

Hier ist ein Beispiel einer Basis-Datei. Wir gehen jeden Abschnitt im Detail durch.

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

Standardmäßig enthält eine Basis jede Datei im Vault. Es gibt kein `from` oder `source` wie in SQL oder Dataview. Der Abschnitt `filters` ermöglicht es dir, Bedingungen zu definieren, um den Datensatz einzugrenzen.

```yaml
# Einfacher Filter:
filters:
  and:
    - file.hasTag("tag")

# Komplexer Filter:
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

Es gibt zwei Möglichkeiten, Filter anzuwenden:

1. Auf der globalen `filters`-Ebene (oben gezeigt), wo sie für alle Ansichten in der Basis gelten.
2. Auf der `view`-Ebene, wo sie nur für eine bestimmte Ansicht gelten.

Diese beiden Abschnitte sind funktional gleichwertig und werden bei der Auswertung für eine Ansicht mit einem `AND` verknüpft.

Der Abschnitt `filters` enthält entweder eine einzelne Filteranweisung als String oder ein rekursiv definiertes Filterobjekt. Filterobjekte können `and`, `or` oder `not` enthalten. Diese Schlüssel sind eine heterogene Liste aus anderen Filterobjekten oder Filteranweisungen als Strings. Eine Filteranweisung ist eine Zeile, die bei Anwendung auf eine Notiz als wahr oder falsch ausgewertet wird. Sie kann eines der folgenden sein:

- Ein einfacher Vergleich mit Standard-Arithmetikoperatoren.
- Eine Funktion. Eine Vielzahl von [[Funktionen]] ist integriert, und Erweiterungen können zusätzliche Funktionen hinzufügen.

Die Syntax und verfügbaren Funktionen für Filter und Formeln sind identisch.

### Formeln

Der Abschnitt `formulas` definiert [[Formeln|Formel-Eigenschaften]], die in allen Ansichten der Basis-Datei angezeigt werden können.

```yaml
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
```

Formel-Eigenschaften unterstützen grundlegende Arithmetikoperatoren und eine Vielzahl integrierter [[Funktionen]]. In Zukunft werden Erweiterungen in der Lage sein, Funktionen für die Verwendung in Formeln hinzuzufügen.

Du kannst Eigenschaften auf verschiedene Arten referenzieren, abhängig von ihrem Typ:

- **Notiz-Eigenschaften** sind Eigenschaften, die im Frontmatter der Notiz definiert sind. Zum Beispiel `note.price` oder `note["price"]`.  
  Wenn kein Präfix angegeben ist, wird die Eigenschaft als `note`-Eigenschaft angenommen.
- **Datei-Eigenschaften** beschreiben die Datei selbst.  
  Zum Beispiel `file.size` oder `file.ext`. Du kannst auch direkt auf das Dateiobjekt verweisen, z.B. `file.hasLink()`.
- **Formel-Eigenschaften** sind andere Formeln in der Basis.  
  Beispiel: `formula.formatted_price`.

Eine Formel kann Werte aus anderen Formel-Eigenschaften verwenden, solange keine zirkuläre Referenz entsteht.  

Formel-Eigenschaften werden immer als Strings in YAML gespeichert, aber ihr tatsächlicher **Ausgabe-Datentyp** wird durch den Typ der zugrunde liegenden Daten und den Rückgabewert der verwendeten Funktionen bestimmt.

Beachte, dass die Verwendung verschachtelter Anführungszeichen notwendig ist, um Textliterale im YAML-Feld einzuschließen. Textliterale müssen in einfache oder doppelte Anführungszeichen eingeschlossen werden.

### Eigenschaften

Der Abschnitt `properties` ermöglicht das Speichern von Konfigurationsinformationen zu jeder Eigenschaft. Es liegt an der jeweiligen Ansicht, wie diese Konfigurationswerte verwendet werden. In Tabellen wird beispielsweise der Anzeigename für die Spaltenüberschriften verwendet.

```yaml
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
```

Anzeigenamen werden nicht in Filtern oder Formeln verwendet.

### Zusammenfassungen

Der Abschnitt `summaries` kann verwendet werden, um benutzerdefinierte Zusammenfassungsformeln zu definieren. Zusätzlich zu den hier definierten Zusammenfassungsformeln sind mehrere Standard-Zusammenfassungsformeln verfügbar.

```yaml
summaries:
  customAverage: 'values.mean().round(3)'
```

In diesem Beispiel ist die Formel `customAverage` identisch mit dem Standard `Average`, außer dass der Wert auf eine andere Anzahl von Dezimalstellen gerundet wird. In Zusammenfassungsformeln ist das Schlüsselwort `values` eine Liste, die alle Werte dieser Eigenschaft über alle Notizen im Ergebnissatz enthält. Die Zusammenfassungsformel sollte einen einzelnen `Value` zurückgeben.

Beachte, dass sich dieser Abschnitt `summaries` von dem Abschnitt `summaries` in der Ansichtskonfiguration (unten erklärt) unterscheidet, in dem Zusammenfassungsformeln bestimmten Eigenschaften zugewiesen werden.

#### Standard-Zusammenfassungsformeln

| Name      | Eingabetyp | Beschreibung                                                          |
| --------- | ---------- | --------------------------------------------------------------------- |
| Average   | Zahl       | Der mathematische Mittelwert aller Zahlen aus den Eingabewerten.      |
| Min       | Zahl       | Die kleinste Zahl aus den Eingabewerten.                              |
| Max       | Zahl       | Die größte Zahl aus den Eingabewerten.                                |
| Sum       | Zahl       | Die Summe aller Zahlen in der Eingabe.                                |
| Range     | Zahl       | Die Differenz zwischen `Max` und `Min`.                               |
| Median    | Zahl       | Der mathematische Median aller Zahlen aus den Eingabewerten.          |
| Stddev    | Zahl       | Die Standardabweichung aller Zahlen aus den Eingabewerten.            |
| Earliest  | Datum      | Das früheste Datum aus den Eingabewerten.                             |
| Latest    | Datum      | Das späteste Datum aus den Eingabewerten.                             |
| Range     | Datum      | Die Differenz zwischen `Latest` und `Earliest`.                       |
| Checked   | Boolean    | Die Anzahl der `true`-Werte.                                          |
| Unchecked | Boolean    | Die Anzahl der `false`-Werte.                                         |
| Empty     | Beliebig   | Die Anzahl der leeren Werte in der Eingabe.                           |
| Filled    | Beliebig   | Die Anzahl der nicht leeren Werte in der Eingabe.                     |
| Unique    | Beliebig   | Die Anzahl der eindeutigen Werte in der Eingabe.                      |

### Ansichten

Der Abschnitt `views` definiert, wie die Daten dargestellt werden können. Jeder Eintrag in der `views`-Liste definiert eine separate Ansicht derselben Daten, und es können beliebig viele verschiedene Ansichten erstellt werden.

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

- `type` wählt aus den integrierten und durch Erweiterungen hinzugefügten Ansichtstypen aus.
- `name` ist der Anzeigename und kann verwendet werden, um die Standardansicht zu definieren.
- `filters` sind genau wie oben beschrieben, gelten aber nur für die Ansicht.
- `groupBy` gibt eine Eigenschaft und Sortierrichtung an. Der Wert der angegebenen Eigenschaft für jede Zeile wird verwendet, um die Zeile in Gruppen einzuordnen.
- `summaries` ordnet Eigenschaftsnamen einer benannten Zusammenfassung zu. Zusammenfassungen führen eine Aggregation der Eigenschaft über alle Zeilen durch.

[[Ansichten]] können zusätzliche Daten speichern, um alle Informationen zu erhalten, die zur Zustandsverwaltung oder korrekten Darstellung benötigt werden. Erweiterungsautoren sollten jedoch darauf achten, keine Schlüssel zu verwenden, die bereits von der integrierten Bases-Erweiterung verwendet werden. Beispielsweise kann eine Tabellenansicht dies nutzen, um die Anzahl der Zeilen zu begrenzen oder auszuwählen, welche Spalte zur Sortierung der Zeilen verwendet wird und in welcher Richtung. Ein anderer Ansichtstyp wie eine Karte könnte dies verwenden, um festzulegen, welche Eigenschaft in der Notiz dem Breiten- und Längengrad entspricht und welche Eigenschaft als Pin-Titel angezeigt werden soll.

In Zukunft wird die API es Ansichten ermöglichen, diese Werte zu lesen und zu schreiben, sodass die Ansicht ihre eigene Konfigurationsoberfläche erstellen kann.

## Eigenschaften

Es gibt drei Arten von Eigenschaften, die in Basen verwendet werden:

1. **Notiz-Eigenschaften**, gespeichert im Frontmatter von Markdown-Dateien.
2. **Datei-Eigenschaften**, verfügbar für alle Dateitypen.
3. **Formel-Eigenschaften**, definiert in der `.base`-Datei selbst (siehe oben).

### Notiz-Eigenschaften

[[Eigenschaften|Notiz-Eigenschaften]] sind nur für Markdown-Dateien verfügbar und werden im YAML-Frontmatter jeder Notiz gespeichert. Auf diese Eigenschaften kann im Format `note.author` oder einfach als Kurzform `author` zugegriffen werden.

### Datei-Eigenschaften

Datei-Eigenschaften beziehen sich auf die Datei, die gerade getestet oder ausgewertet wird. Datei-Eigenschaften sind für alle [[Akzeptierte Dateiformate|Dateitypen]] verfügbar, einschließlich Anhänge.

Zum Beispiel wird ein Filter `file.ext == "md"` für alle Markdown-Dateien wahr und andernfalls falsch sein.

| Eigenschaft        | Typ    | Beschreibung                                                  |
| ------------------ | ------ | ------------------------------------------------------------- |
| `file.backlinks`   | Liste  | Liste der Rückverweis-Dateien. Hinweis: Diese Eigenschaft ist leistungsintensiv. Wenn möglich, kehre die Abfrage um und verwende `file.links`. Aktualisiert Ergebnisse nicht automatisch bei Änderungen am Vault. |
| `file.ctime`       | Datum  | Erstellt                                                      |
| `file.embeds`      | Liste  | Liste aller Einbettungen in der Notiz                         |
| `file.ext`         | String | Dateiendung                                                   |
| `file.file`        | Datei  | Dateiobjekt, nur in bestimmten Funktionen verwendbar          |
| `file.folder`      | String | Pfad des Dateiordners                                         |
| `file.links`       | Liste  | Liste aller internen Links in der Notiz, einschließlich Frontmatter |
| `file.mtime`       | Datum  | Geändert                                                      |
| `file.name`        | String | Dateiname                                                     |
| `file.path`        | String | Pfad der Datei                                                |
| `file.properties`  | Objekt | Alle Eigenschaften der Datei. Hinweis: Aktualisiert Ergebnisse nicht automatisch bei Änderungen am Vault. |
| `file.size`        | Zahl   | Dateigröße                                                    |
| `file.tags`        | Liste  | Liste aller Tags im Dateiinhalt und Frontmatter               |

### Zugriff auf Eigenschaften mit `this`

Verwende das `this`-Objekt, um auf Datei-Eigenschaften zuzugreifen. Worauf sich `this` bezieht, hängt davon ab, wo die Basis angezeigt wird.

Wenn die Basis im Hauptinhaltsbereich geöffnet wird, verweist `this` auf die Eigenschaften der Basis-Datei selbst. Zum Beispiel gibt `this.file.folder` den Ordnerpfad zurück, in dem sich die Basis befindet.

Wenn die Basis in eine andere Datei eingebettet ist, verweist `this` auf die Eigenschaften der _einbettenden_ Datei (die Notiz oder das Canvas, das die Basis enthält). Zum Beispiel gibt `this.file.name` den Namen der einbettenden Datei zurück, nicht der Basis.

Wenn sich die Basis in einer Seitenleiste befindet, verweist `this` auf die aktive Datei im Hauptinhaltsbereich. So kannst du Abfragen basierend auf der aktiven Datei erstellen. Du kannst beispielsweise `file.hasLink(this.file)` verwenden, um den Rückverweise-Bereich nachzubilden.

## Operatoren

### Arithmetische Operatoren

Arithmetische Operatoren führen Berechnungen mit Zahlen durch. Zum Beispiel `radius * (2 * 3.14)`.

| Operator | Beschreibung   |
| -------- | -------------- |
| `+`      | Plus           |
| `-`      | Minus          |
| `*`      | Multiplikation |
| `/`      | Division       |
| `%`      | Modulo         |
| `( )`    | Klammern       |

### Datumsarithmetik

Daten können durch Addition und Subtraktion von Zeitspannen geändert werden. Zeitspanneneinheiten akzeptieren mehrere Formate:

| Einheit                  | Zeitspanne |
| ------------------------ | ---------- |
| `y`, `year`, `years`     | Jahr       |
| `M`, `month`, `months`   | Monat      |
| `d`, `day`, `days`       | Tag        |
| `w`, `week`, `weeks`     | Woche      |
| `h`, `hour`, `hours`     | Stunde     |
| `m`, `minute`, `minutes` | Minute     |
| `s`, `second`, `seconds` | Sekunde    |

Um Datumsobjekte zu ändern oder zu verschieben, verwende den `+`- oder `-`-Operator mit einem Zeitspannen-String. Zum Beispiel fügt `date + "1M"` dem Datum 1 Monat hinzu, während `date - "2h"` 2 Stunden vom Datum abzieht.

Die globale [[Funktionen|Funktion]] `today()` kann verwendet werden, um das aktuelle Datum abzurufen, und `now()` kann verwendet werden, um das aktuelle Datum mit Uhrzeit abzurufen.

- `now() + "1 day"` gibt einen Zeitpunkt zurück, der genau 24 Stunden nach dem Ausführungszeitpunkt liegt.
- `file.mtime > now() - "1 week"` gibt `true` zurück, wenn die Datei innerhalb der letzten Woche geändert wurde.
- `date("2024-12-01") + "1M" + "4h" + "3m"` gibt ein Datumsobjekt zurück, das `2025-01-01 04:03:00` darstellt.
- Subtrahiere zwei Daten, um die Millisekundendifferenz zwischen beiden zu erhalten, zum Beispiel `now() - file.ctime`.
- Um den Datumsanteil eines Datums mit Uhrzeit zu erhalten, verwende `datetime.date()`.
- Um ein Datumsobjekt zu formatieren, verwende die Funktion `format()`, zum Beispiel `datetime.format("YYYY-MM-DD")`.

### Vergleichsoperatoren

Vergleichsoperatoren können verwendet werden, um Zahlen oder Datumsobjekte zu vergleichen. Gleich und ungleich können mit jeder Art von Wert verwendet werden, nicht nur mit Zahlen und Daten.

| Operator | Beschreibung        |
| -------- | ------------------- |
| `==`     | gleich              |
| `!=`     | ungleich            |
| `>`      | größer als          |
| `<`      | kleiner als         |
| `>=`     | größer oder gleich  |
| `<=`     | kleiner oder gleich |

### Boolesche Operatoren

Boolesche Operatoren können verwendet werden, um logische Werte zu kombinieren oder zu invertieren, was zu einem Wahr- oder Falsch-Wert führt.

| Operator | Beschreibung    |
| -------- | --------------- |
| `!`      | logisches Nicht |
| `&&`     | logisches Und   |
| \|\|     | logisches Oder  |

## Funktionen

Siehe die [[Funktionen|Liste der Funktionen]], die in Formeln und [[Ansichten|Filtern]] verwendet werden können.

## Typen

Basen haben ein Typsystem, das von Formeln und Filtern verwendet wird, um Funktionen auf Eigenschaften anzuwenden.

### Strings, Zahlen und Booleans

Strings, Zahlen und Booleans sind „primitive" Werte, die keine Funktion zur Erstellung benötigen.

- Strings werden in einfache oder doppelte Anführungszeichen eingeschlossen, zum Beispiel `"message"`.
- Zahlen werden als Ziffern geschrieben und können optional zur Verdeutlichung in Klammern eingeschlossen werden. Zum Beispiel `1` oder `(2.5)`.
- Booleans werden als `true` oder `false` ohne Anführungszeichen geschrieben.

### Daten und Zeitspannen

Daten repräsentieren ein bestimmtes Datum oder ein Datum mit Uhrzeit, abhängig von der Funktion, die zu ihrer Erstellung verwendet wurde, oder dem Typ, der der [[Eigenschaften|Eigenschaft]] zugewiesen wurde.

- Um ein Datum zu erstellen, verwende die Funktion `date`, zum Beispiel `date("2025-01-01 12:00:00")`
- Um ein Datum zu ändern, addiere oder subtrahiere eine Zeitspanne, zum Beispiel `now() + "1 hour"` oder `today() + "7d"`
- Vergleiche Daten mit Vergleichsoperatoren (z.B. `>` oder `<`) und arithmetischen Operatoren (zum Beispiel gibt `(now() + "1d") - now()` `86400000` Millisekunden zurück.)
- Um Teile eines Datums zu extrahieren, verwende die verfügbaren Felder (`now().hour`) oder eine Komfortfunktion (`now.time()`).
- Viele weitere [[Funktionen|Felder und Funktionen]] sind für Datumsobjekte verfügbar.

### Objekte und Listen

- Wandle ein einzelnes Element mit der Funktion `list()` in eine Liste um. Dies ist besonders hilfreich für Eigenschaften, die eine Mischung aus Listen oder einzelnen Werten enthalten können.
- Greife auf Listenelemente mit eckigen Klammern und einem 0-basierten Index zu. Zum Beispiel gibt `property[0]` das erste Element der Liste zurück.
- Greife auf Objektelemente mit eckigen Klammern und dem Elementnamen oder Punkt-Notation zu. Zum Beispiel `property.subprop` oder `property["subprop"]`.

### Dateien und Links

[[Notizen verknüpfen|Wiki-Links]] in [[Eigenschaften|Frontmatter-Eigenschaften]] werden automatisch als Link-Objekte erkannt. Links werden als anklickbarer Link in der [[Ansichten|Ansicht]] dargestellt.

- Um einen Link zu erstellen, verwende die globale `link`-[[Funktionen|Funktion]], zum Beispiel `link("filename")` oder `link("https://obsidian.md")`.
- Du kannst aus jedem String einen Link erstellen, zum Beispiel `link(file.ctime.date().toString())`.
- Um den Anzeigetext festzulegen, übergib einen optionalen String oder ein Symbol als zweiten Parameter, zum Beispiel `link("filename", "display")` oder `link("filename", icon("plus"))`.

Ein Dateiobjekt kann mit `file.asLink()` mit einem optionalen Anzeigetext in einen Link umgewandelt werden.

Links können mit `==` und `!=` verglichen werden. Sie sind gleichwertig, solange sie auf dieselbe Datei verweisen, oder wenn die Datei bei der Suche nicht existiert, muss ihr Linktext identisch sein.

Links können mit Dateien wie `file` oder `this` verglichen werden. Sie sind gleich, wenn der Link zur Datei aufgelöst wird. Zum Beispiel `author == this`.

Links können auch in Listen-Contains-Prüfungen verwendet werden, zum Beispiel `authors.contains(this)`.
