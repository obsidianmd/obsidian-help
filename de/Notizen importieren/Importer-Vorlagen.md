---
permalink: import/templates
description: 'Passen Sie den Notizname, die Eigenschaften und den Inhalt an, die vom Importer erstellt werden.'
---
Das [[Importprogramm]] ermöglicht es dir, Vorlagen zu definieren, die steuern, wie deine Notizen aus anderen Apps importiert werden. Das bedeutet, du kannst den Titel, die Eigenschaften und den Inhalt der importierten Notizen anpassen.

## Importvorlage bearbeiten

Wähle **Bearbeiten** über der Vorschau, um die Standardvorlage zu bearbeiten. Du kannst Folgendes bearbeiten:

- Den Notiznamen, der als Inline-Titel angezeigt wird.
- Eigenschaften am Anfang der Notiz.
- Den Markdown-Inhalt der Notiz.

Wähle **Speichern**, um zur Vorschau zurückzukehren. Das Importprogramm merkt sich eine bearbeitete Inline-Vorlage für zukünftige Importe, die dasselbe Format verwenden.

Alternativ kannst du eine Vorlage aus einer Markdown-Datei im aktuellen Vault laden.

## Ergebnisse in der Vorschau ansehen

Die Vorschau zeigt bis zu zehn Beispiele aus den ausgewählten Daten. Verwende die Pfeiltasten, um zwischen den Beispielen zu wechseln. Änderungen an den Importeinstellungen und der Vorlage aktualisieren die Vorschau, bevor etwas zu deinem Vault hinzugefügt wird.

Einige Anhänge, Remote-Elemente und notenübergreifende Verweise können erst vollständig aufgelöst werden, wenn der Import durchgeführt wird. In diesen Fällen kann die Vorschau den Quelllink beibehalten oder einen Platzhalter anzeigen.

## Vorlagensyntax

Importprogramm-Vorlagen verwenden eine Syntax, die aus Variablen, [[Filter|Filtern]] und [[Logik]] besteht. Sie verwendet dieselbe [Knap](https://github.com/obsidianmd/knap)-Syntax wie der [[Einführung in Obsidian Web Clipper|Web Clipper]].

Füge Variablen mit doppelten geschweiften Klammern ein, wie `{{title}}`, `{{content}}` oder `{{date}}`. Variablen können im Notiznamen, in Eigenschaften und im Inhalt verwendet werden.

Du kannst Variablen mit [[Filter|Filtern]] modifizieren. Zum Beispiel, um das Datumsformat zu ändern: `{{date|date:"YYYY-MM-DD"}}`. Verwende [[Logik]] für erweiterte Bedingungen, Schleifen und Variablenzuweisungen.

## Variablen

Die folgenden Variablen stehen in jeder Importprogramm-Vorlage zur Verfügung:

| Variable         | Beschreibung                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------ |
| `{{body}}`       | Markdown-Inhalt ohne Eigenschaften (kein Frontmatter).                                                       |
| `{{content}}`    | Vollständiges Markdown, bevor die ausgewählte Vorlage angewendet wird.                                       |
| `{{ctime}}`      | Erstellungszeit der Quelle als ISO-8601-Zeitstempel; leer, wenn nicht verfügbar.                             |
| `{{date}}`       | Aktuelles Datum und Uhrzeit beim Rendern der Vorlage als ISO-8601-Zeitstempel.                               |
| `{{importer}}`   | Importprogramm-ID, wie z. B. `keep`, `html` oder `notion-api`.                                              |
| `{{folder}}`     | Letzter Vault-relativer übergeordneter Ordner. Leer, wenn sich die Notiz im Vault-Stammverzeichnis befindet. |
| `{{mtime}}`      | Änderungszeit der Quelle als ISO-8601-Zeitstempel; leer, wenn nicht verfügbar.                               |
| `{{noteName}}`   | Endgültig aufgelöster Notizname, nach Entfernung ungültiger Zeichen und Hinzufügen von Suffixen bei Duplikaten. |
| `{{path}}`       | Endgültiger Vault-relativer Pfad, einschließlich der `.md`-Erweiterung.                                      |
| `{{properties}}` | Objekt, das die Frontmatter-Eigenschaften enthält.                                                           |
| `{{source}}`     | Objekt, das generierte Eigenschaften und quellenspezifische Werte enthält.                                   |
| `{{sourceId}}`   | Stabiler Quellbezeichner, wenn das Importprogramm einen bereitstellt; andernfalls leer.                      |
| `{{time}}`       | Alias für `{{date}}`.                                                                                        |
| `{{title}}`      | Originaler Notiztitel vor Bereinigung und Deduplizierung.                                                    |

## Quellwerte für Eigenschaften

Bei Importformaten, die [[Eigenschaften]] unterstützen, sind die Quellwerte der Einfachheit halber auch als Top-Level-Variablen verfügbar.

Wenn ein Quellwert denselben Namen wie eine gemeinsame Variable hat, greife über `{{source}}` darauf zu. Wenn deine Importquelle beispielsweise eine Eigenschaft namens `content` hat, ist diese als `{{source.content}}` verfügbar, während `{{content}}` die Standard-Variable des Importprogramms bleibt.

Verwende Klammer-Notation, wenn ein Feldname Leerzeichen, Satzzeichen oder andere Sonderzeichen enthält:

```twig
{{source["Project: status"]}}
```

## Beispielvorlage

Hier ist ein Beispiel für eine Vorlage mit Variablen und [[Filter|Filtern]]:

```twig
---
created: {{ctime | date:"YYYY-MM-DD"}}
modified: {{mtime | date:"YYYY-MM-DD"}}
source: {{importer}}
---
# {{title}}

{{body}}
```

Du kannst Daten mit [[Logik]] bedingt in eine Notiz einfügen:

```twig
{% if tags %}
## Tags
{% for tag in tags %}
- {{tag}}
{% endfor %}
{% endif %}
```
