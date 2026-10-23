---
permalink: import/logseq
cssclasses:
  - soft-embed
---
Obsidian ermöglicht es dir, Notizen aus einem dateibasierten Logseq-Graphen (jetzt „Logseq OG" genannt) mithilfe des offiziellen [[Importprogramm|Importprogramm-Plugins]] zu migrieren. Das Importprogramm liest Logseqs Markdown-Dateien direkt und konvertiert Logseq-spezifische Formatierungen in dauerhafte Dateien, die du offline mit Obsidian und anderen Apps verwenden kannst.

## Bevor du beginnst

- Erstelle ein Backup deines Logseq-Graphen und deines Obsidian-Vaults.
- Finde den Stammordner deines Logseq-Graphen. Er enthält normalerweise Ordner namens `pages`, `journals`, `assets` und `logseq`.
- Stelle sicher, dass du einen dateibasierten Logseq-Graphen verwendest. Logseq-Datenbankgraphen werden noch nicht unterstützt.

## Deinen Logseq-Graphen importieren

Du benötigst die offizielle Obsidian-Erweiterung [[Importprogramm]], die du [hier installieren](obsidian://show-plugin?id=obsidian-importer) kannst.

1. Öffne **[[Einstellungen]] → Community-Erweiterungen** und [installiere das Importprogramm](obsidian://show-plugin?id=obsidian-importer).
2. Aktiviere die Importprogramm-Erweiterung.
3. Öffne das **Importprogramm** über die [[Befehlspalette]] oder das Werkzeugleisten-Symbol.
4. Wähle unter **Format** den Eintrag **Logseq**.
5. Wähle unter **Ordner auswählen** den Stammordner deines Graphen. Wähle den Ordner, der `pages` und `journals` enthält, nicht einen dieser Ordner einzeln.
6. Überprüfe die erkannten Ordner und schließe alle aus, die du nicht importieren möchtest.
7. Wähle einen Ausgabeordner und den Speicherort für importierte Anhänge.
8. Überprüfe die Importoptionen und sieh dir Vorschaubeispiele der konvertierten Notizen an.
9. Wähle **Importieren** und warte, bis der Import abgeschlossen ist.

## Einschränkungen

- Whiteboards werden nicht importiert.
- Queries werden als Quelltext-Blöcke beibehalten, wenn du sie erhalten möchtest.
- Dynamische Logseq-Vorlagenmakros bleiben als reiner Text bestehen.
- Logseq-Flashcard-Zeitplanung, PDF-Annotationen und andere App-spezifische Daten werden nicht migriert.

## Einstellungen

Das Importprogramm konvertiert gängige Logseq-Konventionen, darunter:

- Seiteneigenschaften in Obsidian-[[Eigenschaften]].
- Seitenaliasse, Tags, Namensräume und Links.
- Workflow-Zustände in Kontrollkästchen-Listenmarker, wobei Prioritäten und Daten als lesbarer Text erhalten bleiben.
- Block-IDs, Blockreferenzen und Blockeinbettungen in Obsidian-Links und Einbettungen.
- Journal-Dateinamen und Datumslinks.
- Hervorhebungen, nummerierte Listen, Org-Blöcke, Medieneinbettungen und verknüpfte Dateien aus dem `assets`-Ordner des Graphen.

### Journale

Standardmäßig ist **Tägliche-Notizen-Einstellungen verwenden** aktiviert. Importierte Journale verwenden den Ordner und das Datumsformat, die in der [[Tägliche Notizen]]-Erweiterung konfiguriert sind. Dadurch können Journale außerhalb des im Importprogramm gewählten Ausgabeordners abgelegt werden.

Wenn du diese Option deaktivierst, werden Journale in einen `Journals`-Ordner innerhalb des gewählten Ausgabeordners geschrieben und verwenden das Notiznamen-Format `YYYY-MM-DD`.

### Gliederungen abflachen

Logseq verwendet verschachtelte Aufzählungszeichen als Seitenstruktur. Standardmäßig behält das Importprogramm diese Gliederungsstruktur bei. Aktiviere **Gliederungen abflachen**, um Gliederungsblöcke in eine Kombination aus Absätzen, Überschriften und konventionellen Listen umzuwandeln. Aufgaben und Gruppen listenähnlicher Elemente bleiben als Listenelemente bestehen, aber die Konvertierung ist heuristisch. Überprüfe mehrere Beispiele in der Vorschau, bevor du einen großen Graphen importierst.

### Inkompatible Daten beibehalten

Logseq-Queries, Flashcards und Zeiterfassungseinträge haben keine direkten Entsprechungen in Obsidian. Die Importoptionen ermöglichen es dir zu wählen, ob jede Art von Inhalt beibehalten werden soll. Wenn sie beibehalten werden, bleiben sie als reiner Text erhalten.

- **Queries beibehalten** bewahrt Queries als umzäunte Quelltext-Blöcke oder Inline-Code.
- **Flashcards beibehalten** bewahrt `#card`-Marker und Cloze-Wrapper als reinen Text.
- **Zeiterfassung beibehalten** bewahrt `LOGBOOK`- und `CLOCK`-Einträge als reinen Text.

## Vorlagen

Verwende [[Importer-Vorlagen]], um die Importierung deiner Logseq-Daten vollständig zu konfigurieren.

![[Importer-Vorlagen#Variablen]]

## Fehlerbehebung

Wenn das Importprogramm keine Notizen findet, stelle sicher, dass du den Stammordner des Graphen ausgewählt hast und dass die konfigurierten Seiten- oder Journalordner Markdown-Dateien enthalten.

Wenn ein Anhang als fehlend gemeldet wird, überprüfe, ob die referenzierte Datei noch im `assets`-Ordner des Graphen existiert.

Bei anderen Problemen durchsuche den [Importer-Issue-Tracker](https://github.com/obsidianmd/obsidian-importer/issues) oder reiche einen Fehlerbericht mit einem kleinen Beispielgraphen ein.
