---
permalink: import/samsung-notes
cssclasses:
  - soft-embed
---
Obsidian ermöglicht es dir, deine Notizen aus Samsung Notes mithilfe des [[Importprogramm|Importprogramm-Plugins]] zu migrieren. Dabei werden deine Notizen in langlebige Markdown-Dateien umgewandelt, die du mit Obsidian und vielen anderen Apps verwenden kannst.

## Notizen aus Samsung Notes exportieren

Samsung Notes speichert jede Notiz als Samsung-Notes-Datei (`.sdocx`).

1. Öffne Samsung Notes auf deinem Telefon oder Tablet.
2. Halte eine Notiz gedrückt und wähle dann jede Notiz aus, die du exportieren möchtest.
3. Tippe auf **Als Datei speichern** und wähle dann **Samsung Notes-Datei**.
4. Wähle einen Ordner und tippe auf **Speichern**.
5. Verschiebe die `.sdocx`-Dateien auf das Gerät, auf dem du Obsidian verwendest, zum Beispiel per USB-Kabel, Quick Share oder einem Cloud-Speicher.

Wenn du viele Dateien hast, kannst du sie in eine `.zip`-Datei packen und stattdessen diese importieren. Samsung Notes fügt seine Ordner nicht in die gespeicherten Dateien ein, aber das Importprogramm behält die Ordner innerhalb der `.zip`-Datei bei. Um deine Notizen organisiert zu halten, speichere die Notizen jedes Samsung-Notes-Ordners in einen gleichnamigen Ordner, bevor du sie zippst.

## Samsung-Notes-Daten in Obsidian importieren

Du benötigst das offizielle Obsidian-[[Importprogramm]]-Plugin, das du [hier installieren](obsidian://show-plugin?id=obsidian-importer) kannst.

1. Öffne die **[[Einstellungen]]**.
2. Gehe zu **Community-Erweiterungen** und [installiere das Importprogramm](obsidian://show-plugin?id=obsidian-importer).
3. Aktiviere das Importprogramm-Plugin.
4. Öffne das **Importprogramm**-Plugin über die Befehlspalette oder das Werkzeugleisten-Symbol.
5. Wähle unter **Dateiformat** die Option **Samsung Notes (.sdocx)**.
6. Wähle deine `.sdocx`-Dateien oder eine `.zip`-Datei, die sie enthält.
7. Wähle **Importieren**, um die generierte Vorlage zu überprüfen und Vorschau-Beispiele deiner Notizen anzusehen.
8. Wähle erneut **Importieren** und warte, bis der Import abgeschlossen ist.

## Einschränkungen

- Handschrift und gezeichnete Formen werden als SVG-Bild am Ende der Notiz importiert. Striche behalten ihre Form und Farbe, aber nicht die variierende Breite eines druckempfindlichen Stifts. Formen und Linien werden in Schwarz importiert.
- Textboxen, auf der Seite platzierte Bilder und annotierte PDFs werden noch nicht importiert.
- Checklisten-Einträge werden als nicht angehakt importiert.
- Textfarben, Schriftarten und Schriftgrößen werden nicht beibehalten.
- Entsperre gesperrte Notizen in Samsung Notes, bevor du sie exportierst.

## Vorlagen

Verwende [[Importer-Vorlagen]], um vollständig zu konfigurieren, wie deine Samsung-Notes-Daten importiert werden.

![[Importer-Vorlagen#Variablen]]
