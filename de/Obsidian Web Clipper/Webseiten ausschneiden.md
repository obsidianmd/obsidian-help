---
permalink: web-clipper/capture
---
Sobald du die Browsererweiterung [[Einführung in Obsidian Web Clipper|Web Clipper]] installiert hast, kannst du sie auf verschiedene Weisen aufrufen, je nach Browser:

1. Das Obsidian-Symbol in deiner Browser-Symbolleiste.
2. Tastenkürzel, um die Erweiterung über die Tastatur zu aktivieren.
3. Kontextmenü, durch Rechtsklick auf die besuchte Webseite.

Um eine Seite in Obsidian zu speichern, klicke auf die Schaltfläche **Zu Obsidian hinzufügen**.

## Eine Seite erfassen

Wenn du die Erweiterung öffnest, extrahiert der Web Clipper Daten von der aktuellen Webseite gemäß den Einstellungen in deiner [[Obsidian Web Clipper/Vorlagen|Vorlage]]. Du kannst eigene Vorlagen erstellen und die Ausgabe mit [[Variablen]] und [[Filter]]n anpassen.

Standardmäßig versucht der Web Clipper, intelligent nur den Hauptartikelinhalt zu extrahieren und andere Elemente auf der Seite auszuschließen. Du kannst dieses Verhalten jedoch auf folgende Weisen überschreiben:

- Wenn eine benutzerdefinierte Vorlage vorhanden ist, wird deine Vorlage verwendet.
- Wenn eine Auswahl vorhanden ist, wird die Auswahl verwendet. Du kannst `Strg/Cmd+A` verwenden, um die gesamte Seite auszuwählen.
- Wenn [[Webseiten hervorheben|Hervorhebungen]] vorhanden sind, werden die Hervorhebungen verwendet.

## Bilder herunterladen

Bilder werden nicht automatisch heruntergeladen, wenn du den Web Clipper verwendest. Stattdessen verlinken Bilder auf ihre webbasierte URL. Das spart Speicherplatz in deinem Vault, bedeutet aber, dass die Bilder nicht offline verfügbar sind oder wenn die URL nicht mehr funktioniert.

Du kannst Bilder für jede Datei in Obsidian über den [[Befehlspalette|Befehl]] **Anhänge für die aktuelle Datei herunterladen** herunterladen. Dieser Befehl kann auch in Obsidian einem Tastenkürzel zugewiesen werden.

## Tastenkürzel

Der Web Clipper enthält Tastaturkürzel, mit denen du deinen Arbeitsablauf beschleunigen kannst. Um die Tastenbelegung zu ändern, gehe zu **Web Clipper-Einstellungen** → **Allgemein** und folge den Anweisungen für deinen Browser. Die Belegung kann für alle Browser außer Safari geändert werden, da Safari das Bearbeiten von Tastenkürzel nicht unterstützt.

| Aktion                     | macOS          | Windows/Linux   |
| -------------------------- | -------------- | --------------- |
| Clipper öffnen             | `Cmd+Shift+O`  | `Ctrl+Shift+O`  |
| Schnelles Ausschneiden     | `Opt+Shift+O`  | `Alt+Shift+O`   |
| Markiermodus umschalten    | `Opt+Shift+H`  | `Alt+Shift+H`   |

## Funktionalität der Bedienung

Die Web Clipper-Bedienung ist in vier Bereiche unterteilt:

1. **Kopfzeile**, in der du Vorlagen wechseln, [[Webseiten hervorheben|Hervorhebung]], [[Leser|Lesemodus]] aktivieren und auf die Einstellungen zugreifen kannst.
2. **Eigenschaften** zeigt die von der Seite extrahierten [[Eigenschaften|Metadaten]], die als [[Eigenschaften]] in Obsidian gespeichert werden.
3. **Notizinhalt**, der in Obsidian gespeichert wird.
4. **Fußzeile** ermöglicht dir, den Vault und Ordner auszuwählen und zu Obsidian hinzuzufügen.

Funktionen der Kopfzeile:

- **Vorlagen**-Dropdown zum Wechseln zwischen deinen gespeicherten [[Obsidian Web Clipper/Vorlagen|Vorlagen]], die in den Web Clipper-Einstellungen hinzugefügt wurden.
- **Mehr (...)**-Schaltfläche zur Anzeige von Seitenvariablen, die du in Vorlagen verwenden kannst.
- **Marker**-Schaltfläche zum Aktivieren der [[Webseiten hervorheben|Hervorhebung]].
- **Zahnrad**-Schaltfläche zum Öffnen der Web Clipper-Einstellungen.

Funktionen der Fußzeile:

- **Zu Obsidian hinzufügen**-Schaltfläche zum Speichern von Daten in Obsidian.
- **Vault**-Dropdown zum Wechseln zwischen gespeicherten Vaults, die in den Web Clipper-Einstellungen hinzugefügt wurden.
- **Ordner**-Feld zur Festlegung, in welchem Ordner gespeichert werden soll.
- **Interpreter** zum Ausführen von [[Webseiten interpretieren|natürlichsprachlichen Eingabeaufforderungen]] auf der Seite.
