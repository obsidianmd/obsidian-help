---
permalink: import/onenote
---
Obsidian ermöglicht es dir, deine Notizen einfach von Microsoft OneNote zu migrieren, indem du das [[Importprogramm|Importprogramm-Plugin]] verwendest. Dieses konvertiert deine OneNote-Daten in langlebige Markdown-Dateien, die du mit Obsidian und vielen anderen Apps verwenden kannst.

> [!Warning]
> Es können nur Notizbücher importiert werden, die deinem persönlichen Konto gehören. Geteilte Notizen sowie Konten von Arbeits- oder Schulkonten werden nicht unterstützt.

## OneNote-Daten in Obsidian importieren

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

![[OneNote-Importer-Select-Sections.png]]

10. Klicke auf **Importieren** und warte, bis der Import abgeschlossen ist.
11. Fertig!

## Fehlerbehebung

### Es werden keine Abschnitte oder Notizbücher angezeigt

Stelle sicher, dass die Notizbücher, die du importieren möchtest, mit OneDrive synchronisiert und in OneNote Web sichtbar sind. Sie müssen dir gehören (geteilte Notizbücher, die von anderen erstellt wurden, werden nicht unterstützt).

Falls ein bestimmter Abschnitt fehlt, stelle sicher, dass es sich nicht um einen gesperrten Abschnitt handelt — diese sind ohne Entfernung der Sperre nicht sichtbar.

### Importierte Notizen sind leer oder es fehlen Inhalte

Dieses Problem kann bei Notizbüchern auftreten, die du selten verwendest. Um das Problem zu lösen, befolge diese Schritte:

1. Öffne [OneNote Web](https://onenote.com/notebooks) in deinem Browser.
2. **Rechtsklicke** auf die Notizbücher, bei denen Inhalte fehlen.
3. Wähle **Notizbuch exportieren** aus dem Menü.
4. **Entpacke** die heruntergeladene Datei in einen Ordner.
5. Lade deine OneNote-Notizbücher [hier](https://www.onenote.com/notebooks/exportimport?toImport=true) hoch.
6. Öffne das **Obsidian-Importprogramm** und versuche den Import erneut.

Wenn du diese Tipps befolgt hast und dein Problem weiterhin besteht, liegt möglicherweise ein vorübergehendes Problem mit den Microsoft-Servern vor. Warte in diesem Fall einige Minuten und versuche es erneut. Wenn das Problem weiterhin besteht, eröffne bitte ein Issue im [Obsidian Importer GitHub-Repository](https://github.com/obsidianmd/obsidian-importer/issues).

## Datenschutz

Das Obsidian-Importprogramm-Plugin verwendet [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow), um sich bei deinem Microsoft-Konto zu authentifizieren und deine OneNote-Notizbücher zu importieren. Dabei wird ein kurzfristiges Zugriffstoken für dein Konto vergeben, das ausschließlich von deinem Computer verwendet und niemals gespeichert wird. Nach Abschluss des Imports kannst du das Token optional auf der [Microsoft Apps- & Dienste-Seite](https://account.live.com/consent/Manage) widerrufen.
