---
permalink: import/csv
---
Obsidian ermöglicht den Import von Daten aus CSV-Dateien mithilfe des offiziellen [[Importprogramm|Importprogramm-Plugins]]. Dies ist nützlich, wenn Sie tabellarische Daten in Apps wie Excel, Google Sheets, Numbers, Notion oder Airtable gespeichert haben.

Der CSV-Import erzeugt Markdown-Dateien für jede Zeile und eine [[Einführung in Bases|Basis]]-Datei, die alle importierten Dateien als Tabelle anzeigt.

Wenn Sie Notizen aus einer bestimmten App importieren, sollten Sie zunächst die Liste der vom [[Importprogramm|Importprogramm-Plugin]] unterstützten Apps überprüfen, um festzustellen, ob es einen spezifischen Konverter gibt, der die zu migrierenden Daten besser erhält.

## Notizen aus CSV-Daten in Obsidian erstellen

Sie benötigen das offizielle Obsidian [[Importprogramm]]-Plugin, das Sie [hier installieren](obsidian://show-plugin?id=obsidian-importer) können.

1. Öffnen Sie die **[[Einstellungen]]**.
2. Gehen Sie zu **Community-Erweiterungen** und [installieren Sie das Importprogramm](obsidian://show-plugin?id=obsidian-importer).
3. Aktivieren Sie das Importprogramm-Plugin.
4. Öffnen Sie das **Importprogramm**-Plugin über die Befehlspalette oder das Werkzeugleisten-Symbol.
5. Wählen Sie unter **Format** die Option **CSV (.csv).**
6. Wählen Sie den Speicherort Ihrer CSV-Datei.
7. Klicken Sie auf **Importieren**, um zu konfigurieren, wie die Daten in Ihrer CSV-Datei in Notizen mit [[Eigenschaften]] umgewandelt werden.
8. Klicken Sie auf **Fortsetzen** und warten Sie, bis der Import abgeschlossen ist.
9. Fertig!

## Konfigurieren, wie CSV-Felder importiert werden

Im zweiten Schritt des CSV-Imports können Sie mithilfe einer Vorlage festlegen, wie Daten importiert werden.

Jede Spalte in Ihrer CSV-Datei erhält eine Variable namens `{{column_name}}`, die den Namen der Kopfzeile in Ihrer Datei repräsentiert. Sie können diese Variable verwenden, um den Titel, den Speicherort, den Inhalt und die [[Eigenschaften]] der Notiz zu definieren.
