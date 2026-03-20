---
permalink: import/google-keep
---
Obsidian ermöglicht es dir, deine Notizen mithilfe des [[Importprogramm|Importprogramm-Plugins]] einfach von Google Keep zu migrieren. Dabei werden deine Google Keep-Daten in langlebige Markdown-Dateien konvertiert, die du mit Obsidian und vielen anderen Apps verwenden kannst.

## Deine Daten aus Google Keep exportieren

1. Gehe zu [Google Takeout](https://takeout.google.com/settings/takeout) und melde dich bei deinem Google-Konto an.
2. Klicke oben rechts auf **Auswahl aufheben**.
3. Scrolle nach unten und wähle **Keep** aus der Liste.
4. Scrolle zum Ende der Seite und klicke auf **Nächster Schritt**.
5. Klicke auf dem nächsten Bildschirm auf die Schaltfläche **Export erstellen**.
6. Lade die `.zip`-Datei herunter, sobald sie verfügbar ist.

## Deine Google Keep-Daten in Obsidian importieren

Du benötigst das offizielle Obsidian-[[Importprogramm]]-Plugin, das du [hier installieren](obsidian://show-plugin?id=obsidian-importer) kannst.

1. Öffne die **[[Einstellungen]]**.
2. Gehe zu **Community-Erweiterungen** und [installiere das Importprogramm](obsidian://show-plugin?id=obsidian-importer).
3. Aktiviere das Importprogramm-Plugin.
4. Öffne das **Importprogramm**-Plugin über die Befehlspalette oder das Werkzeugleisten-Symbol.
5. Wähle unter **Format** die Option **Google Keep (.zip)**.
6. Wähle den Speicherort deiner `.zip`-Datei.
7. Klicke auf **Importieren** und warte, bis der Import abgeschlossen ist.
8. Fertig!

### Unterstützte Funktionen

- Alle Checklisten werden als Elemente der obersten Ebene importiert, da Google Keep keine Einrückungsinformationen exportiert.
- Erinnerungen und Benutzerzuweisungen in Notizen werden nicht importiert, da diese Funktionen von Obsidian nicht unterstützt werden.
- Alle anderen Informationen sollten als Kombination aus Inhalten und Tags importiert werden.
