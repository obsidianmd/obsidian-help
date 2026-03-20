---
permalink: plugins/search
publish: true
mobile: true
description: Die Suche ist eine Obsidian-Erweiterung, die Ihnen hilft, Daten in Ihrem Obsidian-Vault mithilfe von Suchbegriffen und Operatoren zu finden und Ergebnisse einzugrenzen.
---
Die Suche ist eine [[Obsidian-Erweiterungen|Obsidian-Erweiterung]], die Ihnen hilft, Daten in Ihrem Obsidian-Vault mithilfe von Suchbegriffen und Operatoren zu finden und Ergebnisse einzugrenzen.

Standardmäßig finden Sie die Suche in der linken Seitenleiste ( ![[lucide-search.svg#icon]] ). Sie können die Suche auch mit `Strg+Umschalt+F` (Windows/Linux) oder `Befehl+Umschalt+F` (macOS) öffnen.

- **Ausgewählten Text suchen**: Wenn Sie Text im Editor markieren und die Suche mit dem Tastenkürzel öffnen, zeigt die Suche Ihnen die Suchergebnisse für den markierten Text an.
- **Letzte Suchbegriffe durchsuchen**: Öffnen Sie die Suche mit einem leeren Suchbegriff, um die letzten Suchbegriffe aufzulisten. Klicken Sie auf einen davon, um den Suchbegriff erneut zu verwenden.

> [!info] Ignorierte Dateien
> Dateien, die Ihren [[Einstellungen#Ignorierte Dateien|Ignorierte Dateien]]-Mustern entsprechen, erscheinen nicht in den Suchergebnissen.

## Suchbegriffe

Ein Suchbegriff ist das Wort oder die Phrase, die Sie in das Suchfeld eingeben. Zu lernen, wie man Suchbegriffe effektiv formuliert, kann Ihnen helfen, schnell zu finden, was Sie suchen, selbst in großen Vaults. Obsidian durchsucht nur den Inhalt von Notizen und Canvas-Dateien.

> [!tip]- Pfade und Dateinamen durchsuchen
> Standardmäßig können Sie nur die Pfade und Dateinamen von Notizen und Canvas-Dateien durchsuchen. Um nach einem Pfad oder Dateinamen einer beliebigen Datei im Vault zu suchen, verwenden Sie den Operator `path` oder `file`.

Jedes Wort im Suchbegriff wird unabhängig innerhalb jeder Datei abgeglichen. Um nach einer exakten Phrase zu suchen, umgeben Sie sie mit Anführungszeichen, zum Beispiel `"star wars"`. Um innerhalb einer exakten Phrase nach Text in Anführungszeichen zu suchen, können Sie die Anführungszeichen _escapen_, indem Sie einen Backslash (`\`) vor das Anführungszeichen setzen, zum Beispiel `"they said \"hello\" to each other"`.

Sie können steuern, ob Dateien zurückgegeben werden, die _alle_ Wörter Ihres Suchbegriffs enthalten, oder _eines_ der Wörter:

- `meeting work` gibt Dateien zurück, die sowohl `meeting` als auch `work` enthalten.
- `meeting OR work` gibt Dateien zurück, die entweder `meeting` oder `work` enthalten.

Sie können beides im selben Suchbegriff kombinieren.

- `meeting work OR meetup personal` gibt Dateien für Arbeitsbesprechungen und persönliche Treffen zurück.

Sie können Klammern verwenden, um die Priorität jedes Ausdrucks zu steuern.

- `meeting (work OR meetup) personal` gibt Dateien zurück, die `meeting`, `personal` und entweder `work` oder `meetup` enthalten.

Um ein Wort aus den Suchergebnissen auszuschließen oder zu negieren, setzen Sie einen Bindestrich (`-`) davor:

- `meeting -work` gibt Dateien zurück, die `meeting` enthalten, aber nicht `work`.

Sie können mehrere Ausdrücke ausschließen:

- `meeting -work -meetup` gibt Dateien zurück, die `meeting` enthalten, aber nicht `work` oder `meetup`.

Sie können eine Kombination von Ausdrücken mit Klammern ausschließen:

- `meeting -(work meetup)` gibt Dateien zurück, die `meeting` enthalten, aber nicht _sowohl_ `work` als auch `meetup`.

Um Ergebnisse mit den Operatoren kleiner als (`<`) und größer als (`>`) zu filtern, umgeben Sie sie mit eckigen Klammern (`[]`) oder Anführungszeichen (`""`):

- `meeting [duration:<5]` gibt Dateien zurück, in denen meeting vorhanden ist und die Dauer kleiner als 5 ist.
- `meeting [duration:>5]` gibt Dateien zurück, in denen meeting vorhanden ist und die Dauer größer als 5 ist.

> [!tip]- Suchbegriff erklären
> Wenn Sie einen komplexen Suchbegriff beheben müssen, können Sie in der Suche auf **Suchbegriff erklären** klicken, um eine Erklärung Ihres Suchbegriffs zu erhalten.

## Suchoperatoren

Suchoperatoren ermöglichen feiner abgestimmte Suchbegriffe, um Ihre Ergebnisse noch weiter zu filtern.

Einige Operatoren erlauben es sogar, einen verschachtelten Suchbegriff in Klammern hinzuzufügen, zum Beispiel: `task:(call OR email)`.

| Suchoperator    | Beschreibung                                                                                                                                                                                                                                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `file:`         | Text im Dateinamen suchen. Findet jede Datei im Vault.<p/>Beispiel: `file:.jpg` oder `file:202209`.                                                                                                                                                                                                                     |
| `path:`         | Text im Dateipfad suchen. Findet jede Datei im Vault.<p/>Beispiel: `path:"Daily notes/2022-07"`.                                                                                                                                                                                                                        |
| `content:`      | Text im Dateiinhalt suchen.<p/>Beispiel: `content:"happy cat"`.                                                                                                                                                                                                                                                          |
| `match-case:`   | Groß-/Kleinschreibung beachten.<p/>Beispiel: `match-case:HappyCat`.                                                                                                                                                                                                                                                     |
| `ignore-case:`  | Groß-/Kleinschreibung ignorieren.<p/>Beispiel: `ignore-case:ikea`.                                                                                                                                                                                                                                                      |
| `tag:`          | Tag in Datei suchen.<p/>Beispiel: `tag:#work`.<p/>Beachten Sie, dass die Suche nach `tag:#work` keine Ergebnisse für `#myjob/work` liefert.<br /><br />**Hinweis**: Da `tag:` Übereinstimmungen in Quelltext-Blöcken und in Nicht-Markdown-Inhalten ignoriert, ist es oft schneller und genauer als eine normale Volltextsuche nach `#work`. |
| `line:`         | Dateien finden, die mindestens eine Zeile enthalten, die mit `x` übereinstimmt.<p/>Beispiel: `line:(mix flour)`.<p/><br>**Hinweis:** Die Verwendung von `-line` negiert die Suche, d. h. es werden Dateien gefunden, in denen keine Zeile mit `x` übereinstimmt.                                                         |
| `block:`        | Übereinstimmungen im selben Block finden.<p/>Beispiel: `block:(dog cat)`.<p/>**Hinweis**: Da `block:` erfordert, dass die Suche den Markdown-Inhalt in jeder Datei parst, kann Ihr Suchbegriff länger zum Abschließen brauchen.                                                                                          |
| `section:`      | Übereinstimmungen im selben Abschnitt finden (Text zwischen zwei Überschriften).<p/>Beispiel: `section:(dog cat)`.                                                                                                                                                                                                       |
| `task:`         | Übereinstimmungen in einer [[Grundlegende Formatierungssyntax#Aufgabenlisten\|Aufgabe]] auf Block-für-Block-Basis finden.<p/>Beispiel: `task:call`.                                                                                                                                                                       |
| `task-todo:`    | Übereinstimmungen in einer *unerledigten* [[Grundlegende Formatierungssyntax#Aufgabenlisten\|Aufgabe]] auf Block-für-Block-Basis finden.<p/>Beispiel: `task-todo:call`.                                                                                                                                                   |
| `task-done:`    | Übereinstimmungen in einer *erledigten* [[Grundlegende Formatierungssyntax#Aufgabenlisten\|Aufgabe]] auf Block-für-Block-Basis finden.<p/>Beispiel: `task-done:call`.                                                                                                                                                     |

## Eigenschaften durchsuchen

Sie können in [[Eigenschaften]] gespeicherte Daten in Ihren Suchbegriffen verwenden.

Verwenden Sie eckige Klammern um einen Eigenschaftsnamen `[property]`, um Dateien mit dieser Eigenschaft zurückzugeben:

- `[aliases]` gibt Dateien zurück, die die Eigenschaft `aliases` enthalten

Verwenden Sie eckige Klammern und einen Doppelpunkt `[property:value]`, um Dateien mit dieser Eigenschaft und diesem Wert zurückzugeben:

- `[aliases:Name]` gibt Dateien zurück, bei denen der Wert der Eigenschaft `aliases` `Name` ist

Verwenden Sie `null` als Wert, um Eigenschaften ohne Wert zu finden:

- `[aliases:null]` gibt Dateien zurück, bei denen die Eigenschaft `aliases` existiert, aber keinen Wert hat

> [!info]+ Leere Werte
> Der `null`-Operator funktioniert, wenn eine Eigenschaft leer ist (z. B. `aliases: `), aber nicht, wenn die Eigenschaft leere Anführungszeichen (`""`) oder leere Klammern (`[]`) enthält.

Sowohl Eigenschaft als auch Wert erlauben Unterabfragen, wie Klammern zur Gruppierung, den `OR`-Operator, doppelte Anführungszeichen für exakte Übereinstimmung und Regex.

- `[status:Draft OR Published]` gibt Dateien zurück, bei denen der Wert der Eigenschaft `status` `Draft` oder `Published` ist

## Groß-/Kleinschreibung ändern

Standardmäßig sind Suchbegriffe nicht groß-/kleinschreibungsabhängig. Wenn Sie nach der exakten Schreibweise Ihres Suchbegriffs suchen möchten, wählen Sie **Großschreibung beachten** ( ![[obsidian-icon-upper-lowercase.svg#icon]] ) in der Suchleiste.

Diese Einstellung kann umgeschaltet werden. Wenn das Symbol **Großschreibung beachten** hervorgehoben ist, führen Sie derzeit eine Suche mit Berücksichtigung der Groß-/Kleinschreibung durch.

## Sortierreihenfolge der Ergebnisse ändern

1. Geben Sie einen [[#Suchbegriffe|Suchbegriff]] ein.
2. Wählen Sie unter dem Suchfeld das Dropdown-Menü auf der rechten Seite.
3. Wählen Sie die gewünschte Sortierreihenfolge. Standard ist „Dateiname (A - Z)".

Die folgenden Optionen sind verfügbar:

- Dateiname (A - Z)
- Dateiname (Z - A)
- Letzte Bearbeitung (neu - alt)
- Letzte Bearbeitung (alt - neu)
- Erstellungszeitpunkt (neu - alt)
- Erstellungszeitpunkt (alt - neu)

## Suchergebnisse kopieren

1. Geben Sie einen [[#Suchbegriffe|Suchbegriff]] ein.
2. Wählen Sie unter dem Suchfeld das Drei-Punkte-Symbol neben der Anzahl der Ergebnisse.
3. Wählen Sie **Suchergebnisse kopieren**.

## Reguläre Ausdrücke verwenden

Ein regulärer Ausdruck ist eine Reihe von Zeichen, die ein Textmuster beschreiben. Um reguläre Ausdrücke in Ihrem Suchbegriff zu verwenden, umgeben Sie den Ausdruck mit Schrägstrichen (`/`).

- `/\d{4}-\d{2}-\d{2}/` entspricht einem ISO 8601-Datum, wie 2022-01-01.

Sie können reguläre Ausdrücke sogar mit Suchoperatoren kombinieren:

- `path:/\d{4}-\d{2}-\d{2}/` gibt Dateien mit einem Datum im Dateipfad zurück.

Weitere Informationen zum Schreiben regulärer Ausdrücke finden Sie in FreeCodeCamps [Praktischem Regex-Leitfaden](https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/) oder Mozillas [Reguläre Ausdrücke](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

> [!info]+ Reguläre Ausdrücke im JavaScript-Stil
> Reguläre Ausdrücke gibt es in verschiedenen Varianten, die unterschiedlich aussehen können. Obsidian verwendet reguläre Ausdrücke im JavaScript-Stil.

## Sucheinstellungen konfigurieren

Um die Suche zu konfigurieren, wählen Sie **Sucheinstellungen** ( ![[lucide-sliders-horizontal.svg#icon]] ) auf der rechten Seite der Suchleiste, um die Umschalter anzuzeigen.

| Einstellung                  | Beschreibung                                                                 |
|------------------------------|-----------------------------------------------------------------------------|
| **Suchbegriff erklären**     | Schlüsselt die Suchbegriffe auf und erklärt sie in einfachem Text.           |
| **Ergebnisse einklappen**    | Schaltet um, ob der Suchkontext angezeigt wird.                             |
| **Mehr Kontext anzeigen**    | Erweitert das Suchergebnis, um mehr Text um die Übereinstimmung anzuzeigen.  |

## Suchergebnisse in eine Notiz einbetten

Um Suchergebnisse in eine Notiz einzubetten, fügen Sie einen `query`-Quelltext-Block hinzu:

````
```query
embed OR search
```
````

[[Einführung in Obsidian Publish|Obsidian Publish]] unterstützt keine eingebetteten [[Publish-Einschränkungen#Suche|Suchergebnisse]]. Um ein live gerendertes Beispiel zu sehen, verwenden Sie den obigen Quelltext-Block in Ihrem Vault.

![[search-query-rendered.png]]
