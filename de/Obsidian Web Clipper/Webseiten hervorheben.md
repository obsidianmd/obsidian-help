---
permalink: web-clipper/highlight
---
[[Einführung in Obsidian Web Clipper|Web Clipper]] ermöglicht es, Text auf Webseiten hervorzuheben und die Elemente auszuwählen, die in Obsidian gespeichert werden sollen. Ihre Hervorhebungen werden gespeichert, sodass Sie sie beim erneuten Besuch einer Seite wiederfinden können.

Hervorhebungen können [[Webseiten ausschneiden|erfasst]] und in Obsidian gespeichert werden, wenn Sie die Erweiterung öffnen.

## Marker aktivieren

Sie können die Hervorhebung auf verschiedene Weisen aktivieren, abhängig von Ihrem Browser:

- Das Marker-Symbol im Erweiterungsfenster.
- Tastenkürzel, um die Erweiterung über die Tastatur zu aktivieren.
- Kontextmenü, durch Rechtsklick auf die besuchte Webseite.

Sobald die Hervorhebung aktiviert ist, können Sie Text, Bilder und Elemente auswählen, die Sie hervorheben möchten.

## Marker-Einstellungen

Sie können das Marker-Verhalten in den Web Clipper-Einstellungen ändern. Hier können Sie auch Ihre Hervorhebungen in eine `.json`-Datei exportieren.

Es gibt drei Optionen, wie Hervorhebungen über die `{{content}}`-[[Variablen|Variable]] in Ihre ausgeschnittene Notiz eingefügt werden:

- **Seiteninhalt markieren** — fügt Hervorhebungen direkt im Text mit der [[Obsidian Flavored Markdown|Syntax]] `==highlight==` ein.
- **Seiteninhalt ersetzen** — gibt eine Liste der Hervorhebungen zurück, ohne den Seiteninhalt.
- **Nichts tun** — gibt den ursprünglichen Inhalt ohne Hervorhebungen zurück.

Sie können Hervorhebungen direkt in Ihre Vorlage einfügen, indem Sie die `{{highlights}}`-Variable verwenden, zum Beispiel:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```
