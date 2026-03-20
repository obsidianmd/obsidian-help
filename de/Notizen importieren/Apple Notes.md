---
permalink: import/apple-notes
---
Obsidian ermöglicht es dir, deine Notizen einfach von Apple Notes zu migrieren, indem du das [[Importprogramm|Importprogramm-Plugin]] verwendest. Dieses konvertiert deine Apple Notes-Daten in langlebige Markdown-Dateien, die du mit Obsidian und vielen anderen Apps verwenden kannst.

Derzeit unterstützt das Importprogramm nur die Migration von Apple Notes unter macOS. Es ist auf iOS noch nicht verfügbar.

## Apple Notes-Daten in Obsidian importieren

Du benötigst das offizielle Obsidian-[[Importprogramm]]-Plugin, das du [hier installieren](obsidian://show-plugin?id=obsidian-importer) kannst.

1. Öffne die **[[Einstellungen]]**.
2. Gehe zu **Community-Erweiterungen** und [installiere das Importprogramm](obsidian://show-plugin?id=obsidian-importer).
3. Aktiviere das Importprogramm-Plugin.
4. Öffne das **Importprogramm**-Plugin über die Befehlspalette oder das Werkzeugleisten-Symbol.
5. Wähle unter **Dateiformat** die Option **Apple Notes**.
6. Klicke auf **Importieren**.
7. Klicke im erscheinenden Popup mit dem Titel `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data` auf **Öffnen**.
8. Warte, bis der Import abgeschlossen ist.
9. Fertig!

## Unterstützte Inhalte

Das Obsidian-Importprogramm-Plugin unterstützt praktisch alle Apple Notes-Inhaltstypen. Dazu gehören Tabellen, Bilder, Zeichnungen, Scans, PDFs und Links, die in iOS 17 eingeführt wurden.

> [!Warning]
> Passwortgeschützte Notizen sind von Apple verschlüsselt und müssen vor dem Import entsperrt werden. Gesperrte Notizen werden übersprungen.

### Scans

Apple speichert Scans in verschiedenen Formaten, je nachdem, wie sie erstellt wurden. Um die Originaldaten zu erhalten, werden sie unterschiedlich exportiert.

* Scans, die auf älteren Versionen von macOS oder iOS erstellt oder angesehen wurden, werden als eine Reihe von unbeschnittenen Bildern exportiert.
* Scans, die auf neueren Versionen von macOS oder iOS erstellt oder angesehen wurden, werden in der Regel als beschnittene Bilder exportiert.
* Scans, die mit den in iOS 17 eingeführten Funktionen bearbeitet wurden, werden in der Regel als PDFs exportiert.

## Alternative Exportmethoden

Apple bietet keine native Option zum Exportieren deiner Notizen. Es gibt jedoch verschiedene Drittanbieter-Tools wie [Exporter](https://apps.apple.com/us/app/exporter/id1099120373) von Chintan Ghate. Beachte bitte, dass die meisten Tools in den Daten, die sie aus Apple Notes exportieren, eingeschränkt sind und möglicherweise nicht die kompatibelsten Ausgabedaten liefern. Diese Tools funktionieren am besten, wenn deine Apple Notes hauptsächlich aus reinem Text bestehen und wenige Anhänge oder Sonderfunktionen wie Zeichnungen und Scans enthalten.

Je nach verwendetem Tool kann der Export im Markdown-Format oder HTML-Format vorliegen. Folge den Anweisungen basierend auf dem Dateiformat, in das du exportiert hast:

- [[HTML]]
- [[Markdown]]
