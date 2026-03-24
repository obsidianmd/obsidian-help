---
permalink: import/csv
---
Obsidian ermöglicht den Import von Daten aus CSV-Dateien mithilfe des offiziellen [[Importprogramm|Importprogramm-Plugins]]. Dies ist nützlich, wenn du tabellarische Daten in Apps wie Excel, Google Sheets, Numbers, Notion oder Airtable gespeichert hast.

Der CSV-Import erzeugt Markdown-Dateien für jede Zeile und eine [[Einführung in Bases|Basis]]-Datei, die alle importierten Dateien als Tabelle anzeigt.

Wenn du Notizen aus einer bestimmten App importierst, solltest du zunächst die Liste der vom [[Importprogramm|Importprogramm-Plugin]] unterstützten Apps überprüfen, um festzustellen, ob es einen spezifischen Konverter gibt, der die zu migrierenden Daten besser erhält.

## Notizen aus CSV-Daten in Obsidian erstellen

Du benötigst das offizielle Obsidian [[Importprogramm]]-Plugin, das du [hier installieren](obsidian://show-plugin?id=obsidian-importer) kannst.

1. Öffne die **[[Einstellungen]]**.
2. Gehe zu **Community-Erweiterungen** und [installiere das Importprogramm](obsidian://show-plugin?id=obsidian-importer).
3. Aktiviere das Importprogramm-Plugin.
4. Öffne das **Importprogramm**-Plugin über die Befehlspalette oder das Werkzeugleisten-Symbol.
5. Wähle unter **Format** die Option **CSV (.csv).**
6. Wähle den Speicherort deiner CSV-Datei.
7. Klicke auf **Importieren**, um zu konfigurieren, wie die Daten in deiner CSV-Datei in Notizen mit [[Eigenschaften]] umgewandelt werden.
8. Klicke auf **Fortsetzen** und warte, bis der Import abgeschlossen ist.
9. Fertig!

## Konfigurieren, wie CSV-Felder importiert werden

Im zweiten Schritt des CSV-Imports kannst du mithilfe einer Vorlage festlegen, wie Daten importiert werden.

Jede Spalte in deiner CSV-Datei erhält eine Variable namens `{{column_name}}`, die den Namen der Kopfzeile in deiner Datei repräsentiert. Du kannst diese Variable verwenden, um den Titel, den Speicherort, den Inhalt und die [[Eigenschaften]] der Notiz zu definieren.
