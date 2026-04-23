---
permalink: web-clipper/highlight
aliases:
  - Webseiten hervorheben
---
[[Einführung in Obsidian Web Clipper|Web Clipper]] ermöglicht es, Text auf Webseiten hervorzuheben und die Elemente auszuwählen, die in Obsidian gespeichert werden sollen. Hervorhebungen werden gespeichert, sodass du sie beim erneuten Besuch einer Seite sehen kannst.

Hervorhebungen können über die Erweiterung in Obsidian gespeichert werden. Du kannst die Marker-Optionen in den Erweiterungseinstellungen festlegen.

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/f2674kdaot?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>

## Marker verwenden

Der Marker kann auf Live-Webseiten oder im [[Leser]] verwendet werden. In der Reader-Ansicht erhältst du beim Erstellen einer Textauswahl die Möglichkeit, diese hervorzuheben.

Du kannst Auswahlen auch automatisch zu deinen Hervorhebungen hinzufügen, indem du den Marker aktivierst:

- ![[lucide-highlighter.svg#icon]] **Marker-Symbol** im Erweiterungsfenster oder in der Reader-Symbolleiste.
- **Tastenkürzel**, anpassbar in den Erweiterungseinstellungen.
- **Kontextmenü**, durch Rechtsklick auf die besuchte Webseite.

Sobald der Marker aktiviert ist, werden alle ausgewählten Texte, Bilder und Elemente zu deinen Hervorhebungen hinzugefügt. Alle oben genannten Methoden ermöglichen es dir auch, den Marker wieder zu deaktivieren.

## Hervorhebungen zu Notizen hinzufügen

Es gibt drei Optionen, wie Hervorhebungen in deine ausgeschnittenen Notizen eingefügt werden:

- **Seiteninhalt markieren** — fügt Hervorhebungen direkt im Text mit der [[Obsidian Flavored Markdown|Syntax]] `==highlight==` ein.
- **Seiteninhalt ersetzen** — gibt eine Liste der Hervorhebungen zurück, ohne den Seiteninhalt.
- **Nichts tun** — gibt den ursprünglichen Inhalt ohne Hervorhebungen zurück.
 
Diese Optionen ändern die `{{content}}`-[[Variablen|Variable]] in deiner Vorlage. Du kannst Hervorhebungen auch direkt in deine Vorlage einfügen, indem du die `{{highlights}}`-Variable verwendest, zum Beispiel:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```

## Hervorhebungen anzeigen und durchsuchen

Alle erstellten Hervorhebungen können auf deiner Hervorhebungen-Seite angezeigt werden. Du kannst diese Seite öffnen, indem du zu **Einstellungen** → **Marker** gehst.

## Hervorhebungen exportieren

Hervorhebungen können in eine `.json`-Datei exportiert werden, entweder auf der Einstellungsseite oder auf der Hervorhebungen-Seite.
