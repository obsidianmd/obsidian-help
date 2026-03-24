---
permalink: web-clipper/highlight
---
[[Einführung in Obsidian Web Clipper|Web Clipper]] ermöglicht es, Text auf Webseiten hervorzuheben und die Elemente auszuwählen, die in Obsidian gespeichert werden sollen. Deine Hervorhebungen werden gespeichert, sodass du sie beim erneuten Besuch einer Seite wiederfinden kannst.

Hervorhebungen können [[Webseiten ausschneiden|erfasst]] und in Obsidian gespeichert werden, wenn du die Erweiterung öffnest.

## Marker aktivieren

Du kannst die Hervorhebung auf verschiedene Weisen aktivieren, abhängig von deinem Browser:

- Das Marker-Symbol im Erweiterungsfenster.
- Tastenkürzel, um die Erweiterung über die Tastatur zu aktivieren.
- Kontextmenü, durch Rechtsklick auf die besuchte Webseite.

Sobald die Hervorhebung aktiviert ist, kannst du Text, Bilder und Elemente auswählen, die du hervorheben möchtest.

## Marker-Einstellungen

Du kannst das Marker-Verhalten in den Web Clipper-Einstellungen ändern. Hier kannst du auch deine Hervorhebungen in eine `.json`-Datei exportieren.

Es gibt drei Optionen, wie Hervorhebungen über die `{{content}}`-[[Variablen|Variable]] in deine ausgeschnittene Notiz eingefügt werden:

- **Seiteninhalt markieren** — fügt Hervorhebungen direkt im Text mit der [[Obsidian Flavored Markdown|Syntax]] `==highlight==` ein.
- **Seiteninhalt ersetzen** — gibt eine Liste der Hervorhebungen zurück, ohne den Seiteninhalt.
- **Nichts tun** — gibt den ursprünglichen Inhalt ohne Hervorhebungen zurück.

Du kannst Hervorhebungen direkt in deine Vorlage einfügen, indem du die `{{highlights}}`-Variable verwendest, zum Beispiel:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```
