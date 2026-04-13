---
permalink: web-clipper/variables
---
[[Obsidian Web Clipper/Vorlagen|Web-Clipper-Vorlagen]] können Variablen verwenden, um Daten von der Seite automatisch in einer Vorlage vorzufüllen. Variablen können im **Notizname**, **Notizspeicherort**, in **Eigenschaften** und im **Notizinhalt** verwendet werden. Variablen können auch mit [[Filter|Filtern]] modifiziert werden.

Verwende das `...`-Symbol in der [[Einführung in Obsidian Web Clipper|Web Clipper]]-Erweiterung, um auf die aktuellen Seitenvariablen zur Verwendung in Vorlagen zuzugreifen. Es gibt fünf Arten von Variablen, die du verwenden kannst:

- [[Variablen#Voreingestellte Variablen|Voreingestellte Variablen]]
- [[Variablen#Prompt-Variablen|Prompt-Variablen]]
- [[Variablen#Meta-Variablen|Meta-Variablen]]
- [[Variablen#Selektor-Variablen|Selektor-Variablen]]
- [[Variablen#Schema.org-Variablen|Schema.org-Variablen]]

## Voreingestellte Variablen

Voreingestellte Variablen werden automatisch basierend auf dem Seiteninhalt generiert. Diese funktionieren in der Regel für die meisten Websites.

Die Hauptinhaltsvariable ist `{{content}}`, die den Artikelinhalt, die [[Marker|Hervorhebungen]] oder die Auswahl enthält, falls Text auf der Seite markiert ist. Beachte, dass `{{content}}` versucht, den Hauptinhalt der Seite zu extrahieren, was nicht immer dem entsprechen muss, was du möchtest. In diesem Fall kannst du andere voreingestellte Variablen oder Selektor-Variablen verwenden, um den benötigten Inhalt zu extrahieren.

| Variable            | Beschreibung                                                                            |
| ------------------- | -------------------------------------------------------------------------------------- |
| `{{author}}`        | Autor der Seite                                                                     |
| `{{content}}`       | Artikelinhalt, [[Marker\|Hervorhebungen]] oder Auswahl, im Markdown-Format |
| `{{contentHtml}}`   | Artikelinhalt, [[Marker\|Hervorhebungen]] oder Auswahl, im HTML-Format     |
| `{{date}}`          | Aktuelles Datum, kann mit dem `date`-Filter formatiert werden                                 |
| `{{description}}`   | Beschreibung oder Auszug                                                                 |
| `{{domain}}`        | Domain                                                                                 |
| `{{favicon}}`       | Favicon-URL                                                                            |
| `{{fullHtml}}`      | Unverarbeitetes HTML des vollständigen Seiteninhalts                                             |
| `{{highlights}}`    | [[Marker\|Hervorhebungen]] mit Text und Zeitstempeln                           |
| `{{image}}`         | URL des Social-Share-Bildes                                                                 |
| `{{published}}`     | Veröffentlichungsdatum, kann mit dem `date`-Filter formatiert werden                               |
| `{{selection}}`     | Auswahl im Markdown-Format                                                           |
| `{{selectionHtml}}` | Auswahl im HTML-Format                                                               |
| `{{site}}`          | Website-Name oder Herausgeber                                                                 |
| `{{title}}`         | Titel der Seite                                                                      |
| `{{time}}`          | Aktuelles Datum und Uhrzeit                                                                  |
| `{{url}}`           | Aktuelle URL                                                                            |
| `{{words}}`         | Anzahl der Wörter                                                                             |

## Prompt-Variablen

Prompt-Variablen nutzen Sprachmodelle, um Daten mithilfe natürlicher Sprache zu extrahieren und zu modifizieren. Prompt-Variablen erfordern, dass der [[Interpreter|Interpreter]] aktiviert und konfiguriert ist.

Prompt-Variablen verwenden die Syntax `{{"eine Zusammenfassung der Seite"}}`. Die doppelten Anführungszeichen um den Prompt sind wichtig und unterscheiden Prompts von voreingestellten Variablen. Prompt-Antworten können mit [[Filter|Filtern]] nachbearbeitet werden, z. B. `{{"eine Zusammenfassung der Seite"|blockquote}}`.

### Wann Prompt-Variablen verwenden

Prompt-Variablen haben den Vorteil, extrem flexibel und einfach zu schreiben zu sein, bringen jedoch einige Kompromisse mit sich: Sie sind langsamer in der Ausführung und können je nach gewähltem [[Interpreter#Modelle|Anbieter]] Kosten- und Datenschutzaspekte haben.

Im Gegensatz zu anderen Variablentypen müssen Prompt-Variablen von einem externen Sprachmodell verarbeitet werden, daher werden sie erst ersetzt, nachdem der [[Interpreter|Interpreter]] ausgeführt wurde.

Es ist am besten, Prompt-Variablen *nicht* zu verwenden, wenn die zu extrahierenden Daten in einem konsistenten Format vorliegen, das mit anderen Variablentypen extrahiert werden könnte.

Andererseits können Prompt-Variablen nützlich sein, wenn die zu extrahierenden Daten in einem *inkonsistenten* Format über verschiedene Websites vorliegen. Zum Beispiel kannst du eine [[Obsidian Web Clipper/Vorlagen|Vorlage]] zum Speichern von Büchern erstellen, die unabhängig von der Buch-Website funktioniert. Prompt-Variablen wie `{{"Autor des Buches"}}` funktionieren auf jeder Buch-Website, während Selektor-Variablen in der Regel nur für eine bestimmte Website funktionieren.

### Beispiele

Prompts können nahezu jede natürlichsprachliche Abfrage verwenden. Je nach verwendetem Modell können Prompts Daten sprachübergreifend abfragen oder übersetzen.

- `{{"eine Zusammenfassung in drei Aufzählungspunkten, übersetzt ins Französische"}}`, um Aufzählungspunkte über die Seite zu extrahieren und ins Französische zu übersetzen.
- `{{"un resumé de la page en trois points"}}`, um drei Aufzählungspunkte mit einem französischen Prompt zu extrahieren.

Prompts können Seiteninhalte in JSON umwandeln, das mit [[Filter|Filtern]] bearbeitet werden kann. Zum Beispiel:

```
{{"return a JSON object for each tweet, that includes the author, tweet_text, date in YYYY-MM-DD format, and images array (if there are any)"|map:tweet => ({text: tweet.tweet_text, author: tweet.author, date: tweet.date})|template:"${text}\n— [[@${author}]], [[${date}]]\n"}}
```


## Meta-Variablen

Meta-Variablen ermöglichen es, Daten aus [Meta-Elementen](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) der Seite zu extrahieren, einschließlich [Open Graph](https://ogp.me/)-Daten, die für Social-Share-Vorschauen verwendet werden.

- `{{meta:name}}` gibt den Inhalt des Meta-Name-Tags mit dem angegebenen Namen zurück, z. B. `{{meta:name:description}}` für das `description`-Meta-Tag.
- `{{meta:property}}` gibt den Inhalt des Meta-Property-Tags mit der angegebenen Eigenschaft zurück, z. B. `{{meta:property:og:title}}` für das `og:title`-Meta-Tag.

## Selektor-Variablen

Selektor-Variablen ermöglichen es, Textinhalte von Elementen auf der Seite mithilfe von [CSS-Selektoren](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) zu extrahieren.

Die Syntax lautet `{{selector:cssSelector?attribute}}`, wobei `?attribute` optional ist. Wenn kein Attribut angegeben wird, wird der Textinhalt des Elements zurückgegeben. Du kannst auch `{{selectorHtml:cssSelector}}` verwenden, um den HTML-Inhalt des Elements zu erhalten. Selektor-Variablen funktionieren am besten auf einer bestimmten Website oder einer Gruppe von Websites mit konsistenter HTML-Struktur.

- `{{selector:h1}}` gibt den Textinhalt aller `h1`-Elemente auf der Seite zurück.
- `{{selector:.author}}` gibt den Textinhalt aller `.author`-Elemente auf der Seite zurück.
- `{{selector:img.hero?src}}` gibt das `src`-Attribut des Bildes mit der Klasse `hero` zurück.
- `{{selector:a.main-link?href}}` gibt das `href`-Attribut des Anchor-Tags mit der Klasse `main-link` zurück.
- `{{selectorHtml:body|markdown}}` gibt das gesamte HTML des `body`-Elements zurück, konvertiert in Markdown mithilfe des `markdown`-[[Filter#HTML-Verarbeitung|Filters]].
- Verschachtelte CSS-Selektoren und Kombinatoren werden unterstützt, wenn mehr Spezifität benötigt wird.
- Wenn mehrere Elemente dem Selektor entsprechen, wird ein Array zurückgegeben, das mit [[Filter#Arrays und Objekte|Array- und Objekt-Filtern]] wie `join` oder `map` verarbeitet werden kann.

Selektor-Variablen können auch direkt in der [[Vorlagen#Vorlagenlogik|Vorlagenlogik]] verwendet werden:

- In Schleifen: `{% for comment in selector:.comment %}...{% endfor %}`
- In Bedingungen: `{% if selector:.premium-badge %}...{% endif %}`
- Bei Variablenzuweisung: `{% set items = selector:.list-item %}`

## Schema.org-Variablen

Schema-Variablen ermöglichen es, Daten aus [schema.org](https://schema.org/) JSON-LD auf der Seite zu extrahieren. Schema.org-Daten können auch verwendet werden, um automatisch [[Obsidian Web Clipper/Vorlagen#Schema.org-Zuordnung|eine Vorlage auszulösen]].

- `{{schema:@Type:key}}` gibt den Wert des Schlüssels aus dem Schema zurück.
- `{{schema:@Type:parent.child}}` gibt den Wert einer verschachtelten Eigenschaft zurück.
- `{{schema:@Type:arrayKey}}` gibt das erste Element in einem Array zurück.
- `{{schema:@Type:arrayKey[index].property}}` gibt das Element am angegebenen Index in einem Array zurück.
- `{{schema:@Type:arrayKey[*].property}}` gibt eine bestimmte Eigenschaft aller Elemente in einem Array zurück.

Du kannst auch eine Kurzschreibweise ohne Angabe des Schema-Typs verwenden:

- `{{schema:author}}` findet die erste `author`-Eigenschaft in einem beliebigen Schema-Typ.
- `{{schema:name}}` findet die erste `name`-Eigenschaft in einem beliebigen Schema-Typ.

Diese Kurzschreibweise ist besonders nützlich, wenn du den spezifischen Schema-Typ nicht kennst oder er dir egal ist, du aber den Eigenschaftsnamen kennst, nach dem du suchst.

Verschachtelte Eigenschaften und Array-Zugriff funktionieren ebenfalls, sowohl mit als auch ohne angegebenen Schema-`@Type`:

- `{{schema:author.name}}` findet die erste `author`-Eigenschaft und greift dann auf deren `name`-Untereigenschaft zu.
- `{{schema:author[0].name}}` greift auf den `name` des ersten Autors in einem Array von Autoren zu.
- `{{schema:author[*].name}}` gibt ein Array aller Autorennamen zurück.
