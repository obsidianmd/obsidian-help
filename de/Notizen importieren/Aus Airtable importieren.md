---
permalink: import/airtable
---
Obsidian ermöglicht dir, deine Daten aus Airtable mit dem [[Importprogramm|Importprogramm-Plugin]] zu migrieren. Dabei werden deine Airtable-Basen in langlebige Markdown-Dateien konvertiert, die du offline mit Obsidian und vielen anderen Apps verwenden kannst.

Jede Tabelle wird zu einem Ordner mit Notizen – eine Notiz pro Datensatz – plus einer [[Einführung in Bases|Basis]]-Datei, die die Tabelle und ihre Ansichten nachbildet. Da der Airtable-API verwendet wird, benötigt der Import ein persönliches Zugriffstoken und eine Internetverbindung.

## Ein persönliches Airtable-Zugriffstoken erstellen

Um über die API auf deine Airtable-Daten zuzugreifen, benötigst du ein persönliches Zugriffstoken. Dieser Schritt dauert etwa zwei Minuten.

Das Token ist eine lange Zeichenkette aus Zahlen und Buchstaben, die typischerweise mit `pat...` beginnt und dir ermöglicht, deine Daten von Airtable herunterzuladen.

1. Melde dich bei Airtable an und gehe zur Seite [Personal access tokens](https://airtable.com/create/tokens) in deinen Kontoeinstellungen.
2. Wähle **Create new token**.
3. Gib deinem Token einen Namen, z. B. „Obsidian". Jeder Name ist möglich.
4. Füge unter **Scopes** die Berechtigungen `data.records:read` und `schema.bases:read` hinzu.
5. Füge unter **Access** die Basen hinzu, die du importieren möchtest, oder wähle alle Basen in einem Workspace aus.
6. Wähle **Create token** und dann **Copy**, um das Token zu kopieren.
7. Speichere das Token an einem sicheren Ort, z. B. in deinem Passwort-Manager.

Airtable zeigt das Token nur einmal an. Wenn du es verlierst, erstelle ein neues.

## Deine Airtable-Daten importieren

Du benötigst das offizielle Obsidian [[Importprogramm]]-Plugin, das du [hier installieren](obsidian://show-plugin?id=obsidian-importer) kannst.

1. Öffne die **[[Einstellungen]]**.
2. Gehe zu **Community-Erweiterungen** und [installiere das Importprogramm](obsidian://show-plugin?id=obsidian-importer).
3. Aktiviere die Importprogramm-Erweiterung.
4. Öffne die **Importprogramm**-Erweiterung über die Befehlspalette oder das Werkzeugleisten-Symbol.
5. Wähle unter **Dateiformat** den Eintrag **Airtable**.
6. Klicke unter **Airtable Personal Access Token** auf **Verknüpfen...**, um ein neues Geheimnis hinzuzufügen. Gib als **ID** einen Namen wie `airtable` ein und füge unter **Geheimnis** dein persönliches Zugriffstoken ein.
7. Klicke auf **Laden**, um deine Basen zu durchsuchen, und wähle dann die Tabellen aus, die du importieren möchtest.
8. Überprüfe und bearbeite die Importoptionen.
9. Wähle **Import**, um zu konfigurieren, wie deine Felder in Notizen mit [[Eigenschaften]] konvertiert werden.
10. Klicke auf **Fortsetzen** und warte, bis der Import abgeschlossen ist.
11. Fertig!

### Importoptionen

- **Formeln konvertieren** – wähle, ob Formel-, Lookup-, Rollup- und Count-Felder als [[Formeln|Bases-Formeln]] umgeschrieben werden (wobei auf den von Airtable berechneten Wert zurückgegriffen wird, wenn es kein Äquivalent gibt) oder ob sie nur als statische Werte importiert werden.
- **Anhänge herunterladen** – speichert Anhangsdateien in deinen Vault, unter Verwendung deiner Anhangsordner- und Linkformat-Einstellungen. Wenn deaktiviert oder wenn ein Download fehlschlägt, verlinkt die Notiz stattdessen auf die Datei-URL bei Airtable.
- **Ansichts-Eigenschaftsname** – die Eigenschaft, die festhält, zu welchen Airtable-Ansichten ein Datensatz gehört. Jede Ansicht in der generierten Basis filtert nach dieser Eigenschaft. Standard ist `base`.
- **Inkrementeller Import** – fügt jeder Notiz eine `airtable-id`-Eigenschaft hinzu, sodass ein späterer Import bereits importierte Datensätze überspringen kann. Bei einem vollständigen Import wird diese Eigenschaft wieder entfernt.

## Konfigurieren, wie Airtable-Felder importiert werden

Im zweiten Schritt des Imports kannst du auswählen, wie jedes Feld importiert wird.

Jedem Feld in deinen Tabellen wird eine Variable namens `{{field_name}}` zugewiesen. Standardmäßig wird jedes Feld zu einer Eigenschaft, und du kannst diese Variablen verwenden, um Eigenschaften umzubenennen, ihre Werte zu ändern oder Inhalte in den Textkörper jeder Notiz zu schreiben.

Das Primärfeld jeder Tabelle wird immer als Notiztitel verwendet, und Datensätze werden immer in einem Ordner abgelegt, der nach ihrer Tabelle benannt ist – diese Optionen sind daher nicht konfigurierbar.

## Was importiert wird

Für eine Basis namens `Projects` mit einer `Tasks`-Tabelle erstellt das Importprogramm:

```
Airtable/
	Projects/
		Tasks.base
		Tasks/
			Write the proposal.md
			Review the draft.md
```

- Eine Notiz pro Datensatz, wobei das Primärfeld als Notiztitel dient und die anderen Felder des Datensatzes als [[Eigenschaften]].
- Eine `.base`-Datei pro Tabelle, wobei jede Airtable-Ansicht einer [[Ansichten|Bases-Ansicht]] zugeordnet wird:
	- **Grid** wird zu einer [[Tabelle|Tabellenansicht]].
	- **Gallery** wird zur [[Galerie]].
	- **List** wird zur [[Liste|Listenansicht]].
	- Alle anderen Ansichtstypen werden in eine Tabellenansicht konvertiert.
- Airtable-Feldtypen werden Obsidian-Eigenschaftentypen zugeordnet, ohne bereits von dir festgelegte Typen zu überschreiben.
- Verknüpfte Datensätze werden zu Links auf die entsprechenden Notizen.
- Anhänge werden gemäß deinen Vault-Einstellungen in deinen Vault heruntergeladen.

## Einschränkungen

> [!info] Airtable-Import ist neu
> Das Airtable-Importprogramm ist neu. Wenn du Probleme bei der Konvertierung feststellst, [reiche einen Fehlerbericht ein](https://github.com/obsidianmd/obsidian-importer/issues), damit wir es verbessern können.

Aufgrund der Airtable-API-Ratenlimits kann der Import großer Basen erhebliche Zeit in Anspruch nehmen. Bitte habe Geduld.

Aufgrund von Einschränkungen in der Airtable-API sind einige Daten nicht verfügbar oder können nicht konvertiert werden:

- Rollup-Werte werden nicht importiert. Die API gibt die für den berechneten Wert eines Rollups verwendete Aggregation nicht preis, daher wird nur der Eigenschaftsname geschrieben, zusammen mit einer Bases-Formel, sofern das Feldschema einen Ausdruck bereitstellt.
- Formeln, die Funktionen verwenden, für die Obsidian kein Äquivalent hat – wie `SWITCH`, `FIND`, `REGEX_EXTRACT` und `SQRT` – greifen auf den statischen Wert von Airtable zurück.
- Nur Grid-, Gallery- und List-Ansichten werden importiert. Andere Ansichtstypen wie Kalender, Kanban, Timeline und Gantt werden ignoriert.
- Links zu Datensätzen in Tabellen, die du nicht ausgewählt hast, werden zum reinen Titel des Datensatzes anstelle eines Links.
- Interface-Designs, Automatisierungen, Kommentare und die Versionsgeschichte werden nicht importiert.
