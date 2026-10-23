---
permalink: import/html
cssclasses:
  - soft-embed
---
Obsidian ermöglicht es dir, einzelne HTML-Dateien und ganze Ordner mit HTML-Dateien mithilfe des offiziellen [[Importprogramm|Importprogramm-Plugins]] zu importieren. Dies ist nützlich, wenn du ganze Websites im [[Obsidian Flavored Markdown|Markdown]]-Format speichern möchtest oder wenn du Daten aus einem Tool importieren möchtest, das nach HTML exportiert.

Falls du Notizen aus einer bestimmten App importierst, solltest du zunächst die Liste der vom [[Importprogramm|Importprogramm-Plugin]] unterstützten Apps überprüfen, um festzustellen, ob es einen spezifischen Konverter gibt, der die zu migrierenden Daten besser erhält.

## HTML-Daten in Obsidian importieren

Du benötigst das offizielle Obsidian-[[Importprogramm]]-Plugin, das du [hier installieren](obsidian://show-plugin?id=obsidian-importer) kannst.

1. Öffne die **[[Einstellungen]]**.
2. Gehe zu **Community-Erweiterungen** und [installiere das Importprogramm](obsidian://show-plugin?id=obsidian-importer).
3. Aktiviere das Importprogramm-Plugin.
4. Öffne das **Importprogramm**-Plugin über die Befehlspalette oder das Werkzeugleisten-Symbol.
5. Wähle unter **Format** die Option **HTML (.html).**
6. Wähle den Speicherort deiner HTML-Dateien oder -Ordner aus.
7. Wähle **Importieren**, um die generierte Vorlage zu überprüfen und Vorschaubeispiele aus deinen Dateien anzuzeigen.
8. Wähle erneut **Importieren** und warte, bis der Import abgeschlossen ist.

### Einstellungen importieren

- **Maximale Anhangsgröße**: Überspringt den Import von Anhängen, die größer als die angegebene Größe sind.
- **Minimale Bildgröße**: Überspringt den Import von Bildern, die in einer der beiden Dimensionen kleiner als die angegebene Größe sind. Kann verwendet werden, um Symbole und Logos zu überspringen.

## Vorlagen

Verwende [[Importer-Vorlagen|Importprogramm-Vorlagen]], um vollständig zu konfigurieren, wie deine Daten importiert werden.

![[Importer-Vorlagen#Variables]]

Darüber hinaus bieten HTML-Importe viele der gleichen Variablen wie der [[Einführung in Obsidian Web Clipper|Web Clipper]]:

| Variable | Beschreibung |
| --- | --- |
| `{{author}}` | Autor der Seite. |
| `{{contentHtml}}` | Extrahierter Seiteninhalt im HTML-Format. |
| `{{description}}` | Seitenbeschreibung oder Auszug. |
| `{{domain}}` | Domain der Seite. |
| `{{favicon}}` | Favicon-URL. |
| `{{fullHtml}}` | Unverarbeitetes HTML der gesamten Seite. |
| `{{image}}` | URL des Social-Share-Bildes. |
| `{{language}}` | Sprache der Seite. |
| `{{published}}` | Veröffentlichungsdatum, das mit dem `date`-Filter formatiert werden kann. |
| `{{site}}` | Seitenname oder Herausgeber. |
| `{{url}}` | Quell-URL, die im importierten Dokument gefunden wurde, sofern verfügbar. |
| `{{words}}` | Wortanzahl. |
