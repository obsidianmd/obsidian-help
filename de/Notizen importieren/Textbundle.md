---
permalink: import/textbundle
cssclasses:
  - soft-embed
---
Obsidian ermöglicht es dir, [Textbundle](https://textbundle.org/)-Dateien einfach mit dem offiziellen [[Importprogramm|Importprogramm-Plugin]] zu importieren.

Wenn du Notizen aus einer bestimmten App importierst, solltest du zunächst die Liste der vom [[Importprogramm|Importprogramm-Plugin]] unterstützten Apps überprüfen, um festzustellen, ob es einen spezifischen Konverter gibt, der die zu migrierenden Daten besser bewahrt.

Das Textbundle-Format bündelt Markdown-Text und alle referenzierten Bilder in einer einzigen Datei und bietet so eine nahtlosere Möglichkeit, Daten aus einer sandboxed Anwendung zu exportieren. Der Textbundle-Export wird von [vielen Apps](https://textbundle.org/) unterstützt, darunter Agenda, Craft, Taio, Ulysses, Zettlr und mehr.

## Textbundle-Dateien in Obsidian importieren

Du benötigst das offizielle Obsidian-[[Importprogramm]]-Plugin, das du [hier installieren](obsidian://show-plugin?id=obsidian-importer) kannst.

1. Öffne die **[[Einstellungen]]**.
2. Gehe zu **Community-Erweiterungen** und [installiere das Importprogramm](obsidian://show-plugin?id=obsidian-importer).
3. Aktiviere das Importprogramm-Plugin.
4. Öffne das **Importprogramm**-Plugin über die Befehlspalette oder das Werkzeugleisten-Symbol.
5. Wähle unter **Dateiformat** die Option **Textbundle (.textbundle, .textpack).**
6. Wähle den Speicherort deiner Textbundle- oder Textpack-Dateien aus. Zip-Dateien werden ebenfalls unterstützt.
7. Wähle **Importieren**, um die generierte Vorlage zu überprüfen und Beispiele aus deinen Notizen in der Vorschau anzuzeigen.
8. Wähle erneut **Importieren** und warte, bis der Import abgeschlossen ist.

## Importierte Notizen anpassen

Vor dem Import zeigt das Importprogramm eine Vorschau an, die aus den ausgewählten Textbundle-Dateien generiert wurde. Du kannst die generierte Vorlage bearbeiten oder eine Markdown-Vorlage aus deinem Vault auswählen. Siehe [[Importer-Vorlagen]].

## Fehlerbehebung

### Keine Dateien zum Importieren ausgewählt

Der Textbundle-Import kann jeweils nur eine Textbundle-Datei auf einmal importieren und funktioniert nur auf Mac-Geräten. Stattdessen kannst du alle Textbundle-Dateien, die du importieren möchtest, in eine einzige .zip-Datei komprimieren und diese von jedem Gerät aus importieren.

## Vorlagen

Verwende [[Importer-Vorlagen|Importer-Vorlagen]], um vollständig zu konfigurieren, wie deine Daten importiert werden. 

![[Importer-Vorlagen#Variables]]
