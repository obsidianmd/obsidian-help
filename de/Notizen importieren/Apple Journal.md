---
permalink: import/apple-journal
---
Obsidian ermöglicht es dir, deine Tagebucheinträge aus Apple Journal mithilfe des [[Importprogramm|Importprogramm-Plugins]] einfach zu migrieren.
Dabei werden deine Tagebücher in langlebige Markdown-Dateien konvertiert, die du mit Obsidian und vielen anderen Apps verwenden kannst.

## Daten aus Apple Journal exportieren

### Auf dem iPhone
Folge den Anweisungen unter [Einträge in „Tagebuch" auf dem iPhone drucken und exportieren](https://support.apple.com/guide/iphone/print-and-export-entries-iph4cad323fe/ios#iph1edf66806):

1. Öffne die Tagebuch-App auf deinem iPhone.
2. Wähle ein Tagebuch oder tippe auf „Alle Einträge".
3. Tippe oben auf dem Bildschirm auf die Taste „Mehr".
4. Tippe auf „Exportieren" und wähle dann „Exportieren".
5. Wähle einen Speicherort und tippe dann auf die Taste „Ausgewählt".

### Auf dem Mac (Tahoe)
Folge den Anweisungen unter [Einträge in „Tagebuch" auf dem Mac drucken und exportieren](https://support.apple.com/guide/journal/print-and-export-entries-dev883fc2329/mac#devc24a8f09a):

1. Öffne die Tagebuch-App auf deinem Mac.
2. Gehe zu Ablage > Exportieren und wähle dann „Exportieren".

## Apple Journal-Daten in Obsidian importieren

Du benötigst das offizielle Obsidian-[[Importprogramm]]-Plugin, das du [hier installieren](obsidian://show-plugin?id=obsidian-importer) kannst.

1. Öffne die **[[Einstellungen]]**.
2. Gehe zu **Community-Erweiterungen** und [installiere das Importprogramm](obsidian://show-plugin?id=obsidian-importer).
3. Aktiviere das Importprogramm-Plugin.
4. Öffne das **Importprogramm**-Plugin über die Befehlspalette oder das Werkzeugleisten-Symbol.
5. Wähle unter **Dateiformat** die Option **Apple Journal (HTML Export)**.
6. Wähle unter **Zu importierende Dateien** den Ordner mit den exportierten Daten aus, normalerweise _AppleJournalEntries_, oder einzelne Dateien aus _Entries_.
7. Überprüfe und bearbeite die weiteren Importoptionen.
8. Wähle „Importieren" und warte, bis der Import abgeschlossen ist.
9. Fertig!


## Unterstützte Inhalte

Das Plugin kann Tagebuch-Metadaten als Frontmatter importieren, wie z. B. _state-of-mind_, _contacts_, _location_ und _workout-route_.

> [!note] Hinweis
> Das Plugin importiert keine Ressourcen. Anhänge wie Fotos, Videos und Audioaufnahmen werden ignoriert.
