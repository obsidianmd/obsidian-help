---
permalink: import/evernote
---
Obsidian ermöglicht es dir, deine Notizen ganz einfach aus Evernote zu migrieren, indem du das [[Importprogramm|Importprogramm-Plugin]] verwendest. Dieses konvertiert deine Evernote-Daten in langlebige Markdown-Dateien, die du mit Obsidian und vielen anderen Apps verwenden kannst.

## Daten aus Evernote exportieren

Obsidian verwendet Evernotes Exportformat `.enex`-Dateien.

Die Anweisungen von Evernote zum Exportieren deiner Daten findest du [auf der Evernote-Website](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML). Mit dieser Methode kannst du ganze Notizbücher im Desktop-Client exportieren.

1. Gehe zum Notizbücher-Bildschirm.
2. Klicke auf **Weitere Aktionen** ( `•••` ) und wähle **Notizbuch exportieren...**
3. Wähle **ENEX** als Dateiformat.
3. Wähle einen Speicherort für deine exportierte `.enex`-Datei.

## Evernote-Daten in Obsidian importieren

Du benötigst das offizielle Obsidian-[[Importprogramm]]-Plugin, das du [hier installieren](obsidian://show-plugin?id=obsidian-importer) kannst.

1. Öffne die **[[Einstellungen]]**.
2. Gehe zu **Community-Erweiterungen** und [installiere das Importprogramm](obsidian://show-plugin?id=obsidian-importer).
3. Aktiviere das Importprogramm-Plugin.
4. Öffne das **Importprogramm**-Plugin über die Befehlspalette oder das Werkzeugleisten-Symbol.
5. Wähle unter **Dateiformat** die Option **Evernote (.enex)**.
6. Wähle den Speicherort deiner Evernote-Sicherungsdatei.
7. Klicke auf **Importieren** und warte, bis der Import abgeschlossen ist.
8. Fertig!

## Erweiterte Importoptionen

### Tag-Hierarchie beibehalten

Der Evernote-Export behält die Tag-Hierarchie nicht bei. Um deine Tag-Hierarchie zu erhalten, kannst du Tags mit „/" getrennt „abflachen". Angenommen, du hast die folgende Tag-Struktur:

```
ParentTag
    ChildTag
```

Um die Tags in Obsidian zusammenhängend zu halten, musst du Folgendes tun:

1. Klicke mit der rechten Maustaste auf den ChildTag.
2. Wähle „Umbenennen".
3. Benenne ihn in `ParentTag/ChildTag` um.

### Notizbuchstapel verarbeiten

Da der Exportprozess auf einzelne Notizbücher beschränkt ist, enthält die Standard-Exportdatei keine Informationen über Notizbuchstapel. Das Importprogramm kann jedoch Muster im Enex-Dateinamen erkennen, um Notizbuchstapel als Ordner nachzubilden.

Angenommen, du hast ein Notizbuch namens ```NotebookA``` in einem Stapel namens ```Stack1```, kannst du einen Notizbuchstapel nachbilden, indem du die Enex-Datei in ```Stack1@@@NotebookA``` umbenennst.

Dies führt dazu, dass die konvertierten Notizen im Ordner Stack1/NotebookA erstellt werden.

### Weitere Optionen

Für erweiterte Importoptionen aus Evernote kannst du auch den [Import über Yarle](https://github.com/akosbalasko/yarle) ausprobieren.
