---
permalink: import/notion
---
Obsidian ermöglicht es dir, deine Notizen einfach von Notion zu migrieren, indem du das [[Importprogramm|Importprogramm-Plugin]] verwendest. Dies konvertiert deine Notion-Daten in langlebige Markdown-Dateien, die du offline mit Obsidian und vielen anderen Apps verwenden kannst.

Obsidian bietet zwei Möglichkeiten, deine Notion-Daten zu importieren:

1. **API-Import** bewahrt deinen gesamten Workspace einschließlich Datenbanken und Formeln, die in [[Einführung in Bases|Basen]] konvertiert werden, erfordert jedoch ein Notion-Integrationstoken und eine Internetverbindung.
2. **Datei-Import** bewahrt keine Datenbanken, erfordert aber kein API-Token und keine Internetverbindung.

## API-Import

### Ein Notion-API-Integrationstoken erstellen

Um über die API auf deine Notion-Daten zuzugreifen, benötigst du ein Integrationstoken. Dieser Schritt dauert etwa 2 Minuten.

Das Token ist eine lange Zeichenfolge aus Zahlen und Buchstaben, die typischerweise mit `ntn_...` beginnt und es dir ermöglicht, deine Daten von Notion herunterzuladen.

1. Melde dich in deinem [Notion Integrations](https://www.notion.so/profile/integrations/internal)-Dashboard an.
2. Wähle **New integration**.

![[notion-integration.png#interface]]

2. Gib deiner Integration einen Namen, z. B. „Personal". Jeder Name kann verwendet werden.
3. Wähle den Workspace aus, den du exportieren möchtest.
4. Klicke auf **Save** und fahre mit **Configure integration settings** fort.
5. Im Tab **Configuration** ist dein API-Token im Feld **Internal Integration Secret** zugänglich.
6. Wähle **Show** und dann **Copy**.
7. Speichere das Token an einem sicheren Ort wie deinem Passwort-Manager.

![[notion-token.png#interface]]

Als Nächstes gibst du deiner Integration Zugriff auf die Notion-Seiten und Datenbanken, die du importieren möchtest.

1. Gehe zum Tab **Access** der Integration, die du gerade erstellt hast.
2. Klicke auf **Edit access**.
3. Füge die Seiten und Datenbanken hinzu, die du importieren möchtest.

Du kannst nun deine Daten mit dem Obsidian-Importprogramm konvertieren.

### Deine Notion-Daten über die API importieren

Du benötigst das offizielle Obsidian-[[Importprogramm]]-Plugin, das du [hier installieren](obsidian://show-plugin?id=obsidian-importer) kannst.

1. Öffne die **[[Einstellungen]]**.
2. Gehe zu **Community-Erweiterungen** und [installiere das Importprogramm](obsidian://show-plugin?id=obsidian-importer).
3. Aktiviere das Importprogramm-Plugin.
4. Öffne das **Importprogramm**-Plugin über die Befehlspalette oder das Werkzeugleisten-Symbol.
5. Wähle unter **Format** die Option **Notion (API)**.
6. Füge unter **API token** dein **Internal Integration Secret** von Notion ein.
7. Klicke auf **Laden**, um die Datenbanken und Seiten auszuwählen, die du importieren möchtest.
8. Überprüfe und bearbeite die Import-Optionen.
9. Wähle **Importieren** und warte, bis der Import abgeschlossen ist.
10. Fertig!

### Einschränkungen

> [!info] API-Import ist neu
> Das Notion-API-Importprogramm ist neu. Aufgrund der Komplexität von Notion-Workspaces wurden möglicherweise einige Randfälle nicht berücksichtigt. Wenn du Probleme bei der Konvertierung feststellst, [reiche einen Fehlerbericht ein](https://github.com/obsidianmd/obsidian-importer/issues), damit wir es verbessern können.

Aufgrund von Notion-API-Ratenlimits kann der Import großer Workspaces erhebliche Zeit in Anspruch nehmen. Bitte habe Geduld.

Aufgrund von Einschränkungen der Notion-API sind einige Daten nicht verfügbar oder können nicht konvertiert werden:

- Nur die primäre Ansicht jeder Datenbank wird importiert.
- [Verknüpfte Datenquellen](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases) werden nicht importiert: *„Die API von Notion unterstützt derzeit keine verknüpften Datenquellen. Wenn du eine Datenbank mit deiner Integration teilst, stelle sicher, dass sie die ursprüngliche Datenquelle enthält!"*
- `People`-Funktionen: `name()` und `email()`
- `Text`-Funktionen: `style()` und `unstyle()`

Zusätzlich nimmt das Importprogramm folgende Änderungen vor:

- Seiten ohne Unterseiten oder Datenbanken werden als `[Dateiname].md` statt `[Dateiname]/[Dateiname].md` importiert.
- Datenbanken werden immer als Ordner mit dem Namen `[Datenbankname]` mit einer `[Datenbankname].base`-Datei darin dargestellt.

## Datei-Import

Der Datei-Import ist eine alternative Möglichkeit, deine Notion-Daten zu importieren. Diese Methode bewahrt keine Datenbanken, erfordert aber kein API-Token und keine Internetverbindung.

### Deine Daten aus Notion exportieren

Um deine Daten für den Import vorzubereiten, musst du deinen gesamten Workspace mit dem HTML-Exportformat von Notion exportieren. Wir empfehlen, nicht den Markdown-Export von Notion zu verwenden, da dieser wichtige Daten auslässt. Du musst Administratorzugriff auf den Notion-Workspace haben, um alle Workspace-Inhalte exportieren zu können.

1. Gehe zu **[[Einstellungen]]** oben in der Notion-Seitenleiste.
2. Wähle unter **Workspace** die Option **General**.
3. Finde und wähle **Export all workspace content**.
4. Wähle unter **Export format** die Option **HTML**.
5. Wähle **Include everything**.
6. Aktiviere **Create folders for subpages**.
7. Du erhältst eine `.zip`-Datei per E-Mail oder direkt im Browser.

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### Deine Notion-.zip-Datei importieren

Du benötigst das offizielle Obsidian-[[Importprogramm]]-Plugin, das du [hier installieren](obsidian://show-plugin?id=obsidian-importer) kannst.

1. Öffne die **[[Einstellungen]]**.
2. Gehe zu **Community-Erweiterungen** und [installiere das Importprogramm](obsidian://show-plugin?id=obsidian-importer).
3. Aktiviere das Importprogramm-Plugin.
4. Öffne das **Importprogramm**-Plugin über die Befehlspalette oder das Werkzeugleisten-Symbol.
5. Wähle unter **Format** die Option **Notion (.zip)**.
6. Wähle die `.zip`-Datei mit den Notion-Dateien, die du importieren möchtest. *Es wird empfohlen, alle deine Notion-Daten auf einmal zu importieren, damit interne Links korrekt zugeordnet werden können.*
7. _Optional_ wähle einen Ordner für den Import. Deine Notion-Seiten und Datenbanken werden in diesem Ordner verschachtelt.
8. Aktiviere **Übergeordnete Seiten in Unterordnern speichern**, um die Notion-Struktur beizubehalten. *Beachte, dass du in Notion Inhalte in Ordner schreiben kannst – das ist in Obsidian nicht möglich und diese Seiten werden als Unterseite im Ordner hinzugefügt.*
9. Wähle **Importieren** und warte, bis der Import abgeschlossen ist.
10. Fertig!

### Fehlerbehebung

Wenn du beim Import aus Notion auf Probleme stößt:

- Stelle sicher, dass du in Notion **HTML** als Exportformat verwendest, **nicht Markdown**.
- Wenn Obsidian während des Imports einzufrieren scheint, deaktiviere Community-Erweiterungen und versuche es erneut.

Auf ein anderes Problem gestoßen? Durchsuche [das Importprogramm-Repository](https://github.com/obsidianmd/obsidian-importer/issues), um zu sehen, ob andere es ebenfalls erlebt haben.

#### Große Workspaces importieren

Wenn du einen Workspace mit mehreren Gigabyte an Daten importierst, kann der Export von Notion verschachtelte `.zip`-Dateien enthalten. In diesem Fall siehst du möglicherweise eine Import-Fehlermeldung, die in etwa so aussieht:

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

Wenn du diesen Fehler siehst, kannst du die Datei von Notion entpacken und dann die verschachtelten `Export-{id}-Part-1.zip`-Dateien importieren.
