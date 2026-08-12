---
permalink: import/onenote
---
Obsidian ermöglicht es dir, deine Notizen einfach von Microsoft OneNote zu migrieren, indem du das [[Importprogramm|Importprogramm-Plugin]] verwendest. Dieses konvertiert deine OneNote-Daten in langlebige Markdown-Dateien, die du mit Obsidian und vielen anderen Apps verwenden kannst.

Obsidian bietet zwei Möglichkeiten, deine OneNote-Daten zu importieren:

1. **Microsoft-Konto** meldet sich bei deinem Microsoft-Konto an und importiert die Notizbücher, die mit OneDrive synchronisiert sind. Erfordert eine Internetverbindung.
2. **Dateiimport** verwendet die Exportdateien von OneNote (`.onepkg` und `.one`). Erfordert kein Konto und keine Internetverbindung und funktioniert auch für Notizbücher, die nie synchronisiert wurden.

## Über dein Microsoft-Konto importieren

> [!Warning]
> Es können nur Notizbücher importiert werden, die deinem Konto gehören. Notizbücher, die andere Personen mit dir geteilt haben, werden nicht unterstützt, und bei einem Arbeits- oder Schulkonto muss deine Organisation möglicherweise den Zugriff genehmigen.

Du benötigst das offizielle Obsidian-[[Importprogramm]]-Plugin, das du [hier installieren](obsidian://show-plugin?id=obsidian-importer) kannst.

1. Öffne die **[[Einstellungen]]**.
2. Gehe zu **Community-Erweiterungen** und [installiere das Importprogramm](obsidian://show-plugin?id=obsidian-importer).
3. Aktiviere das Importprogramm-Plugin.
4. Öffne das **Importprogramm**-Plugin über die Befehlspalette oder das Werkzeugleiste-Symbol.
5. Wähle unter **Format** die Option **Microsoft OneNote**.
6. Klicke auf **Anmelden**, um deinen Webbrowser zur Microsoft-Anmeldeseite zu öffnen. Gib die Anmeldedaten für dein Microsoft-Konto ein, das deine OneNote-Notizbücher enthält. Weitere Informationen zum Microsoft-Anmeldeprozess findest du unten.
7. Klicke auf **Akzeptieren**, um Obsidian die Berechtigung zum Anzeigen deiner OneNote-Notizbücher zu erteilen.
8. Klicke auf **Link öffnen**, um deinem Browser die Weiterleitung zur Obsidian-App zu erlauben.
9. In der Obsidian-App zeigt der Importprogramm-Dialog nun an, dass du angemeldet bist, und listet deine OneNote-Notizbücher und Abschnitte auf. Wähle die Abschnitte aus, die du importieren möchtest.
10. Klicke auf **Importieren** und warte, bis der Import abgeschlossen ist.
11. Fertig!

Falls deine Notizbücher zu einem Arbeits- oder Schulkonto gehören, verweigert OneNote dem Plugin möglicherweise den Zugriff, nachdem du dich angemeldet hast. In diesem Fall erscheint neben **Abmelden** eine Schaltfläche **Arbeits- oder Schulzugang verwenden**. Verwende diese, um dich erneut mit den erweiterten Berechtigungen anzumelden, die diese Konten benötigen. Deine Organisation muss diese Berechtigung möglicherweise erst genehmigen, bevor sie funktioniert.

### Fehlerbehebung

#### Es werden keine Abschnitte oder Notizbücher angezeigt

Stelle sicher, dass die Notizbücher, die du importieren möchtest, mit OneDrive synchronisiert und in OneNote Web sichtbar sind. Sie müssen dir gehören (geteilte Notizbücher, die von anderen erstellt wurden, werden nicht unterstützt).

Falls ein bestimmter Abschnitt fehlt, stelle sicher, dass es sich nicht um einen gesperrten Abschnitt handelt, da diese ohne Entfernung der Sperre nicht sichtbar sind.

Falls es sich um ein Arbeits- oder Schulnotizbuch handelt, siehe den Hinweis zu **Arbeits- oder Schulzugang verwenden** oben.

#### Importierte Notizen sind leer oder es fehlen Inhalte

Dieses Problem kann bei Notizbüchern auftreten, die du selten verwendest. Um das Problem zu lösen, befolge diese Schritte:

1. Öffne [OneNote Web](https://onenote.com/notebooks) in deinem Browser.
2. **Rechtsklicke** auf die Notizbücher, bei denen Inhalte fehlen.
3. Wähle **Notizbuch exportieren** aus dem Menü.
4. **Entpacke** die heruntergeladene Datei in einen Ordner.
5. Lade deine OneNote-Notizbücher [hier](https://www.onenote.com/notebooks/exportimport?toImport=true) hoch.
6. Öffne das **Obsidian-Importprogramm** und versuche den Import erneut.

Wenn du diese Tipps befolgt hast und dein Problem weiterhin besteht, liegt möglicherweise ein vorübergehendes Problem mit den Microsoft-Servern vor. Warte in diesem Fall einige Minuten und versuche es erneut. Wenn das Problem weiterhin besteht, eröffne bitte ein Issue im [Obsidian Importer GitHub-Repository](https://github.com/obsidianmd/obsidian-importer/issues).

## OneNote-Dateien importieren (.one, .onepkg)

Der Dateiimport ist eine alternative Möglichkeit, deine OneNote-Daten zu importieren. Er liest die Exportdateien, die OneNote selbst erstellt, und benötigt daher kein Microsoft-Konto und keine Internetverbindung. Verwende ihn für Notizbücher, die nur auf deinem Computer gespeichert sind, für Notizbücher, auf die dein Konto keinen Zugriff hat, oder wenn du dich lieber nicht anmelden möchtest.

### Notizbücher aus OneNote exportieren

Wir empfehlen, jedes Notizbuch als **OneNote-Paket** (`.onepkg`) zu exportieren. Ein Paket enthält alle Abschnitte des Notizbuchs, sodass du ein Notizbuch in einem einzigen Schritt exportieren und importieren kannst, und das Importprogramm listet die Abschnitte zur Auswahl auf.

Das Exportieren ist nur in **OneNote für Windows** verfügbar, der Desktop-App, die mit Microsoft 365 geliefert wird. Die OneNote-App für Mac und die ältere OneNote für Windows 10-App können nicht in diese Formate exportieren.

1. Öffne das Notizbuch, das du exportieren möchtest, in OneNote für Windows.
2. Gehe zu **Datei → Exportieren**.
3. Wähle unter **Aktuelles Element exportieren** die Option **Notizbuch**.
4. Wähle unter **Format auswählen** die Option **OneNote-Paket (\*.onepkg)**.
5. Klicke auf **Exportieren** und wähle den Speicherort.
6. Wiederhole dies für jedes Notizbuch, das du importieren möchtest.

Um nur einen einzelnen Abschnitt zu exportieren, wähle in Schritt 3 **Abschnitt** und in Schritt 4 **OneNote 2010-2016-Abschnitt (\*.one)**.

Du kannst auch die Abschnittsdateien importieren, die OneNote bereits auf der Festplatte speichert, ohne etwas zu exportieren:

- Notizbücher auf deinem Computer befinden sich in `Dokumente\OneNote-Notizbücher`, eine `.one`-Datei pro Abschnitt.
- Sicherungen synchronisierter Notizbücher befinden sich in `%LOCALAPPDATA%\Microsoft\OneNote\16.0\Backup`.

### OneNote-Dateien importieren

Du benötigst das offizielle Obsidian-[[Importprogramm]]-Plugin, das du [hier installieren](obsidian://show-plugin?id=obsidian-importer) kannst.

1. Öffne die **[[Einstellungen]]**.
2. Gehe zu **Community-Erweiterungen** und [installiere das Importprogramm](obsidian://show-plugin?id=obsidian-importer).
3. Aktiviere das Importprogramm-Plugin.
4. Öffne das **Importprogramm**-Plugin über die Befehlspalette oder das Werkzeugleiste-Symbol.
5. Wähle unter **Format** die Option **Microsoft OneNote (.one, .onepkg)**.
6. Wähle die `.onepkg`- und `.one`-Dateien aus, die du importieren möchtest. Du kannst mehrere Dateien gleichzeitig auswählen, sodass alle deine Notizbücher zusammen importiert werden können.
7. Unter **Zu importierende Abschnitte** werden die in den Dateien gefundenen Abschnitte aufgelistet, wobei alles ausgewählt ist. Deaktiviere alles, was du nicht möchtest.
8. Wähle optional einen **Ausgabeordner** für den Import, wo die Anhänge gespeichert werden sollen, und was mit **vorhandenen Notizen** geschehen soll, falls du dasselbe Notizbuch erneut importierst.
9. Klicke auf **Importieren** und warte, bis der Import abgeschlossen ist.
10. Fertig!

Jeder Abschnitt wird zu einem Ordner und jede Seite darin zu einer Notiz. Eine Unterseite wird in einem Ordner gespeichert, der nach der übergeordneten Seite benannt ist. Das bewahrt die Struktur, die OneNote angezeigt hat, und verhindert Kollisionen zwischen zwei Unterseiten mit demselben Namen. Seiten im Papierkorb des Notizbuchs werden nicht importiert.

### Einschränkungen

- Passwortgeschützte Abschnitte sind verschlüsselt gespeichert und ihre Seiten werden übersprungen. Entferne das Passwort in OneNote und exportiere erneut, um sie zu importieren.
- Rechtegeschützte Dateien können nur von einem Konto geöffnet werden, das die Richtlinie erlaubt, und können vom Importprogramm nicht gelesen werden.

## Datenschutz

Wenn du den Import über dein Microsoft-Konto wählst, verwendet das Obsidian-Importprogramm-Plugin [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow), um sich zu authentifizieren und deine OneNote-Notizbücher zu importieren. Dabei wird ein kurzfristiges Zugriffstoken für dein Konto vergeben, das ausschließlich von deinem Computer verwendet und niemals gespeichert wird. Nach Abschluss des Imports kannst du das Token optional auf der [Microsoft Apps- & Dienste-Seite](https://account.live.com/consent/Manage) widerrufen.

Der Dateiimport stellt keine Verbindung zu Microsoft her: Die von dir ausgewählten Dateien werden auf deinem Computer gelesen, ohne jegliche Netzwerkverbindung.
