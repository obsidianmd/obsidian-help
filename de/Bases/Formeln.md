---
permalink: formulas
description: 'Formeln ermöglichen es dir, berechnete Eigenschaften zu erstellen, die Daten aus anderen Eigenschaften verwenden. Du kannst Berechnungen durchführen, Text manipulieren, mit Daten arbeiten und mehr.'
---
Formeln ermöglichen es dir, berechnete Eigenschaften in [[Einführung in Bases|Basen]] zu erstellen, die Daten aus anderen [[Eigenschaften]] verwenden. Du kannst Berechnungen durchführen, Text manipulieren, mit Daten arbeiten und mehr.

## Was Formeln können

Formeln können dir helfen:

- **Werte berechnen**, Preise addieren, Summen ermitteln oder mathematische Operationen durchführen.
- **Text manipulieren**, Zeichenketten kombinieren, Groß-/Kleinschreibung ändern oder Teilzeichenketten extrahieren.
- **Mit Daten arbeiten**, Zeitdifferenzen berechnen, Daten formatieren oder Fristen bestimmen.
- **Logik anwenden**, bedingte Anweisungen verwenden, um unterschiedliche Werte anzuzeigen.
- **Listen verarbeiten**, Listendaten filtern, sortieren, zuordnen oder aggregieren.
- **Verlinkte Notizen verwenden**, Eigenschaften aus Notizen nachschlagen oder zusammenfassen, auf die eine Notiz verlinkt. Siehe [[#Eigenschaften aus verlinkten Notizen verwenden]].

## Eine Formel-Eigenschaft erstellen

So erstellst du eine Formel-Eigenschaft:

1. Klicke in deiner Basis in der Symbolleiste auf **Eigenschaften**.
2. Klicke unten im Menü auf **Formel hinzufügen**.
3. Gib einen Namen für deine Formel-Eigenschaft ein.
4. Gib deine Formel im Feld **Formel** ein.
5. Schließe den Dialog.

Der Formeleditor vervollständigt automatisch [[Funktionen|Funktions]]- und Eigenschaftsnamen während der Eingabe und validiert deine Formelsyntax. Ein grünes Häkchen erscheint, wenn deine Formel gültig ist.

Nach der Erstellung kannst du eine Formel-Eigenschaft wie jede andere Eigenschaft in deiner Basis verwenden. Füge sie zu [[Ansichten]] hinzu, verwende sie in Filtern, sortiere danach und mehr.

## Eine Formel schreiben

Gib im Formeleditor einen Ausdruck mit Eigenschaften, Operatoren und Funktionen ein.

### Eigenschaften referenzieren

Du kannst verschiedene Arten von Eigenschaften in deinen Formeln referenzieren:

- **Notiz-Eigenschaften** — Eigenschaften aus dem [[Eigenschaften|Frontmatter]] einer Notiz.
- **Datei-Eigenschaften** — Integrierte Eigenschaften wie `file.name`, `file.size` oder `file.mtime`.
- **Formel-Eigenschaften** — Andere Formeln mit `formula.formel_name`.

**Beispiele:**

- `price * quantity` — zwei Notiz-Eigenschaften multiplizieren
- `file.name + " - " + description` — Dateiname mit einer Notiz-Eigenschaft kombinieren
- `formula.price_per_unit * 1.1` — eine andere Formel-Eigenschaft verwenden

### Operatoren verwenden

**Arithmetische Operatoren** führen Berechnungen mit Zahlen durch:

- `price + tax` — addieren
- `price - discount` — subtrahieren
- `price * quantity` — multiplizieren
- `price / quantity` — dividieren
- `(part / whole) * 100` — Klammern für Operationsreihenfolge verwenden

**Vergleichsoperatoren** vergleichen Werte:

- `price > 100` — größer als
- `age < 18` — kleiner als
- `status == "Done"` — gleich
- `status != "Done"` — ungleich
- `file.mtime > now() - '7d'` — Daten vergleichen

**Boolesche Operatoren** kombinieren logische Bedingungen:

- `!completed` — nicht
- `price > 0 && quantity > 0` — und
- `urgent || important` — oder

Erfahre mehr unter [[Bases-Syntax#Operatoren|Bases-Syntax]].

### Funktionen verwenden

Funktionen führen Operationen auf Werten aus. Die verfügbaren Funktionen hängen vom Typ des Wertes ab, mit dem du arbeitest. Siehe die vollständige Liste der [[Funktionen]].

**Häufige Funktionskategorien:**

- **Globale Funktionen** — `if()`, `now()`, `date()`, `link()`, `max()`, `min()`
- **Zeichenketten-Funktionen** — `contains()`, `replace()`, `split()`, `lower()`, `title()`
- **Zahlen-Funktionen** — `round()`, `ceil()`, `floor()`, `abs()`, `toFixed()`
- **Datumsfunktionen** — `format()`, `relative()`, `date()`, `time()`
- **Listen-Funktionen** — `filter()`, `map()`, `sort()`, `join()`, `unique()`

**Beispiele:**

- `if(price, "$" + price.toFixed(2), "")` um eine Bedingung mit Zahlenformatierung zu definieren.
- `file.name.lower()` um in Kleinbuchstaben umzuwandeln.
- `tags.contains("urgent")` um zu prüfen, ob die Tag-Liste einen Wert enthält.
- `due_date.format("YYYY-MM-DD")` um ein Datum zu formatieren.

## Eigenschaften aus verlinkten Notizen verwenden

Formeln können Eigenschaften aus den Notizen lesen, auf die eine Notiz verlinkt. Du kannst einen einzelnen Wert aus einer verlinkten Notiz nachschlagen oder Werte aus mehreren verlinkten Notizen zu einer Summe, einer Anzahl oder einer Liste zusammenfassen (Roll-up).

Um die Eigenschaften einer verlinkten Notiz zu lesen, wandle den Link mit `asFile()` in eine Datei um und verwende dann `properties`. Links, die in Eigenschaften gespeichert sind, wie z. B. `project: "[[Website-Redesign]]"`, funktionieren auf diese Weise direkt.

> [!warning] Ergebnisse werden aktualisiert, wenn sich die Notiz in der Zeile ändert
> Wenn du nur eine verlinkte Notiz bearbeitest, werden Nachschlage- und Roll-up-Werte in der Basis möglicherweise erst aktualisiert, wenn du die Basis erneut öffnest.

### Einen Wert nachschlagen

Den `status` der Notiz anzeigen, die in der Eigenschaft `project` verlinkt ist:

```js
project.asFile().properties.status
```

Wenn die Eigenschaft entweder einen einzelnen Link oder eine Liste von Links enthalten kann, verpacke sie in `list()` und nimm den ersten Link:

```js
list(project)[0].asFile().properties.status
```

### Werte zusammenfassen (Roll-up)

Die `hours` aller Notizen addieren, die in der Eigenschaft `tasks` verlinkt sind:

```js
tasks.map(value.asFile().properties.hours).reduce(acc + value, 0)
```

Die verlinkten Notizen zählen, deren `status` nicht „Done" ist:

```js
tasks.filter(value.asFile().properties.status != "Done").length
```

Die Status der verlinkten Notizen ohne Duplikate auflisten:

```js
tasks.map(value.asFile().properties.status).unique()
```

### Werte aus Notizen zusammenfassen, die hierher verlinken

Um Werte aus Notizen zusammenzufassen, die auf eine Notiz verlinken, z. B. Aufgaben, die jeweils auf ihr Projekt verlinken, verwende `file.backlinks`:

```js
file.backlinks.map(value.asFile().properties.hours).reduce(acc + value, 0)
```

`file.backlinks` ist in großen Vaults langsam. Wenn möglich, speichere die Links in der Notiz selbst und fasse sie mit `map()` und `reduce()` zusammen, wie oben gezeigt.

## Formelbeispiele

### Eine Frist berechnen

Setze das Fälligkeitsdatum eines Projekts auf 2 Wochen nach dem Startdatum:

```js
start_date + "2w"
```

### Überfälligkeitsstatus anzeigen

Zeige „Überfällig" an, wenn das Fälligkeitsdatum überschritten ist und der Status nicht „Done" ist:

```js
if(due_date < now() && status != "Done", "Overdue", "")
```

### Währung formatieren

Einen Preis mit 2 Dezimalstellen und Währungssymbol anzeigen:

```js
if(price, "$" + price.toFixed(2), "")
```

### Listenelemente zählen

Die Anzahl der Elemente in einer Listen-Eigenschaft zählen:

```js
tasks.length
```

### Prioritätswert berechnen

Mehrere Faktoren zu einem Prioritätswert kombinieren:

```js
(impact * urgency) / effort
```

### Textfelder kombinieren

Einen vollständigen Namen aus Vor- und Nachnamen erstellen:

```js
first_name + " " + last_name
```

### Gesamtkosten berechnen

Monatliche Kosten mit der Anzahl der Besitzmonate multiplizieren:

```js
monthlyUses * formula.Owned.round()
```

## Datentypen

Formeln arbeiten mit verschiedenen Datentypen:

- **Zeichenketten** — Text in Anführungszeichen: `"hello"` oder `'world'`
- **Zahlen** — Numerische Werte: `42`, `3.14`, `(2 + 2)`
- **Boolesche Werte** — Wahr oder falsch: `true`, `false`
- **Daten** — Erstellt mit `date()`, `today()` oder `now()`
- **Listen** — Sammlungen von Werten: `[1, 2, 3]`
- **Objekte** — Schlüssel-Wert-Paare: `{"name": "value"}`

Der Ausgabetyp einer Formel wird durch die verwendeten Daten und Funktionen bestimmt.

## Andere Formeln referenzieren

Formeln können andere Formeln referenzieren und so abgeleitete Berechnungen erstellen. Wenn du beispielsweise eine Formel namens `price_per_unit` hast:

```js
price / quantity
```

Kannst du sie in einer anderen Formel referenzieren:

```js
formula.price_per_unit * 1.1
```

> [!warning] Zirkuläre Referenzen vermeiden
> Eine Formel kann sich weder direkt noch indirekt über andere Formeln selbst referenzieren.
