---
permalink: import/tomboy
cssclasses:
  - soft-embed
---
Obsidian ermöglicht es dir, Notizen aus Tomboy und Gnote mithilfe des offiziellen [[Importprogramm|Importprogramm-Plugins]] zu migrieren. Das Importprogramm liest die `.note`-Dateien der Apps direkt ein und konvertiert deren XML-Inhalte in Markdown.

## Notiz-Dateien finden

Tomboy und Gnote speichern Notizen normalerweise in diesen Ordnern:

- **macOS:** `~/Library/Application Support/Tomboy`
- **Windows:** `%APPDATA%\Tomboy`
- **Linux:** `~/.local/share/tomboy` oder `~/.local/share/gnote`

Der genaue Speicherort kann abweichen, wenn du den Datenordner verschoben hast oder eine andere Version der App verwendest.

## Tomboy- oder Gnote-Notizen importieren

1. Öffne **[[Einstellungen]] → Community-Erweiterungen** und [installiere das Importprogramm](obsidian://show-plugin?id=obsidian-importer).
2. Aktiviere die Importprogramm-Erweiterung.
3. Öffne das **Importprogramm** über die [[Befehlspalette]] oder das Werkzeugleisten-Symbol.
4. Wähle unter **Format** die Option **Tomboy/Gnote (.note)**.
5. Wähle einzelne `.note`-Dateien oder den Ordner aus, der sie enthält.
6. Überprüfe die Importoptionen, die generierte Vorlage und die Vorschau-Beispiele.
7. Klicke auf **Import** und warte, bis der Import abgeschlossen ist.

## Vorlagen

Verwende [[Importer-Vorlagen]], um vollständig zu konfigurieren, wie deine Daten importiert werden.

![[Importer-Vorlagen#Variablen]]
