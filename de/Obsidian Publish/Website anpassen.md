---
permalink: publish/customize
publish: true
description: Erfahre, wie du das Erscheinungsbild und den Stil deiner Obsidian Publish-Website anpassen kannst.
---
Diese Seite erklärt, wie du das Aussehen und die Gestaltung deiner [[Einführung in Obsidian Publish|Obsidian Publish]]-Website anpassen kannst.

## Statische Ressourcen

Du kannst deine Website anpassen, indem du die folgenden Dateien auf deiner Website [[Inhalte veröffentlichen#Notizen veröffentlichen|veröffentlichst]]:

- `publish.css` zum Hinzufügen von benutzerdefiniertem CSS
- `publish.js` zum Hinzufügen von benutzerdefiniertem JavaScript
- `favicon-32x32.png` zum Festlegen des Favicons

**Hinweise:**

- [CSS-Variablen für Publish](https://docs.obsidian.md/Reference/CSS+variables/Publish/Publish) findest du auf unserer Dokumentationsseite.
- Da Obsidian keine CSS- oder JavaScript-Dateien unterstützt, musst du eine andere Anwendung verwenden, um sie zu erstellen und zu bearbeiten.
- Sowohl `publish.css` als auch `publish.js` müssen sich im Stammverzeichnis (`/`) deines Vaults befinden.
- Standardmäßig erscheinen `publish.css` und `publish.js` nicht im Dateiexplorer, du kannst sie aber trotzdem über den Dialog **Änderungen veröffentlichen** veröffentlichen.
- Um benutzerdefiniertes JavaScript mit `publish.js` zu verwenden, benötigst du eine [[Benutzerdefinierte Domains|benutzerdefinierte Domain]].

Für Favicons unterstützt Obsidian Publish die folgenden Namenskonventionen, wobei `32` die Abmessungen des Symbols in Pixeln darstellt:

- `favicon-32.png`
- `favicon-32x32.png`
- `favicon.ico`

Wir empfehlen, eine oder mehrere der folgenden Größen bereitzustellen:

- `favicon-32x32.png`
- `favicon-128x128.png`
- `favicon-152x152.png`
- `favicon-167x167.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-196x196.png`

Du kannst Favicons flexibel an beliebiger Stelle innerhalb des Vaults platzieren, solange sie auf deiner Website veröffentlicht werden.

## Ein Community-Thema verwenden

Um eines der Community-Themen für deine Website zu verwenden:

1. Öffne deinen Vault im Standard-Dateiexplorer deines Betriebssystems.
2. Gehe zum Vault-Einstellungsordner (Standard: `.obsidian`).
3. Öffne den Ordner `themes`.
4. Kopiere die CSS-Datei des Themas, das du für deine Website verwenden möchtest.
5. Füge die Datei in den Stammordner deines Vaults ein.
6. Benenne die CSS-Datei in `publish.css` um.
7. [[Inhalte veröffentlichen#Notizen veröffentlichen|Veröffentliche]] `publish.css`.

**Hinweise:**

- Wenn sich der Stil nicht innerhalb weniger Minuten aktualisiert, versuche den Browser-Cache zu leeren.
- Du kannst in den [[Websites verwalten#Website-Einstellungen anzeigen|Website-Einstellungen]] zwischen hellem und dunklem Modus wechseln.
- Viele Community-Themen verwenden **Style Settings** für benutzerdefinierte Gestaltung, aber diese Einstellungen funktionieren nicht mit Obsidian Publish.

> [!tip] Themen entwickeln
> Kein passendes Thema gefunden? Erfahre, wie du selbst ein [Publish-Thema erstellst](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme).

## UI-Funktionen aktivieren

Du kannst verschiedene UI-Funktionen für deine Website ein- und ausschalten, wie zum Beispiel die Diagrammansicht oder ein Inhaltsverzeichnis.

Durchstöbere die verfügbaren UI-Funktionen in den Abschnitten **Lese-Erlebnis** und **Komponenten** in den [[Websites verwalten#Website-Einstellungen anzeigen|Website-Einstellungen]].

### Navigation anpassen

Innerhalb von Obsidian Publish hast du die Möglichkeit, die Reihenfolge und Anzeige von Dateien und Ordnern im [[Dateiexplorer]] von Publish anzupassen. Navigationselemente werden standardmäßig in der Veröffentlichungsreihenfolge aufgelistet. Nicht veröffentlichte Notizen erscheinen nicht in diesem Bereich.

#### Zugriff auf die Optionen zur Navigationsanpassung

1. Wähle in der [[Menüband|Werkzeugleiste]] die Option **Änderungen veröffentlichen** (![[lucide-send.svg#icon]]) oder öffne die [[Befehlspalette]] und gib **Publish: Änderungen veröffentlichen...** ein.
2. Wähle im Dialog **Änderungen veröffentlichen** die Option **Seiteneinstellungen ändern** ( ![[lucide-cog.svg#icon]] ).
3. Wähle unter **Komponenten-Einstellungen** neben **Navigation anpassen** die Schaltfläche **Verwalten**.

Ein neues Pop-up-Fenster mit dem Titel **Navigation** erscheint über dem Fenster **Seiteneinstellungen ändern**.

#### Navigationselemente anpassen

Im Abschnitt **Navigationsvorschau** kannst du die Anzeigereihenfolge deiner veröffentlichten Inhalte anpassen.

1. Wähle den Ordner oder die Notiz aus, die du anpassen möchtest.
2. Ziehe die Notiz oder den Ordner nach oben oder unten, bis sie an der gewünschten Position ist.
3. Wähle unten rechts im Fenster **Navigation** die Option **Fertig**.

Publish sendet deine Navigationsänderungen an deine Website.

#### Navigationselemente ein- und ausblenden

Wenn es Notizen oder Ordner gibt, die du veröffentlicht hast, aber nicht in deiner Navigation sichtbar haben möchtest, kannst du diese Elemente stattdessen ausblenden.

1. Wähle den Ordner oder die Notiz aus, die du anpassen möchtest.
2. Klicke mit der rechten Maustaste und wähle **In Navigation ausblenden**. Das Element sollte nun aus der **Navigationsvorschau** verschwinden.
3. Wähle unten rechts im Fenster **Navigation** die Option **Fertig**.

Publish sendet deine Navigationsänderungen an deine Website.

> [!tip] Du kannst **Ausgeblendete anzeigen**, indem du das Kontrollkästchen rechts neben dem Titel **Navigationsvorschau** aktivierst.

## FAQ

**Kann ich Dateien innerhalb der Navigation von einem Ordner in einen anderen verschieben?**

Nein. Die Datei-Navigationsstruktur für Notizen innerhalb von Ordnern muss beibehalten werden. Du kannst die Reihenfolge von Notizen innerhalb von Ordnern (einschließlich des Vault-Stammverzeichnisses) und die Reihenfolge von Ordnern innerhalb anderer Ordner anpassen.

**Kann ich die Reihenfolge mehrerer Notizen und Ordner bearbeiten, bevor ich „Fertig" wähle?**

Ja.

**Wie kann ich diese Änderungen rückgängig machen?**

- **Anzeigereihenfolge**: Wähle das Symbol **Standard wiederherstellen** (Pfeil mit Gegenuhrzeigersinn-Drehung) neben **Reihenfolge der angezeigten Navigationselemente**. Dies stellt die alphabetische Reihenfolge deiner Navigationselemente wieder her.
- **Ausgeblendet-Status**: Wähle das Symbol **Standard wiederherstellen** (Pfeil mit Gegenuhrzeigersinn-Drehung) neben **Blende Seiten oder Ordner in der Navigation aus**. Dies stellt deine ausgeblendeten Navigationselemente wieder auf sichtbar.
