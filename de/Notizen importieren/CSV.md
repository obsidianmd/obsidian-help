---
permalink: import/csv
cssclasses:
  - soft-embed
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
7. Wähle **Importieren**, um zu konfigurieren, wie die Daten in deiner CSV-Datei in Notizen mit [[Eigenschaften]] umgewandelt werden.
8. Wähle **Fortsetzen**, um die generierte Vorlage zu überprüfen und Vorschaubeispiele deiner Zeilen anzuzeigen.
9. Wähle **Importieren** und warte, bis der Import abgeschlossen ist.

## Konfigurieren, wie CSV-Felder importiert werden

Im Schritt der Feldkonfiguration kannst du festlegen, wie Daten importiert werden. Das Importprogramm generiert eine Vorlage aus den CSV-Kopfzeilen, verwendet die erste Spalte für den anfänglichen Notiznamen und erstellt eine Eigenschaft für jede Spalte.

## Vorlagen

Verwende [[Importer-Vorlagen|Importprogramm-Vorlagen]], um den Import deiner Daten vollständig zu konfigurieren.

Jede CSV-Spalte ist über ihre Kopfzeile verfügbar. Wenn eine Spalte keine Kopfzeile hat, verwendet das Importprogramm den generierten Spaltennamen.

Verwende die Klammernotation, damit Leerzeichen und Satzzeichen sicher verarbeitet werden:

```liquid
{{source["Project name"]}}
{{source["Price ($)"]|yaml}}
```

![[Importer-Vorlagen#Variables]]
