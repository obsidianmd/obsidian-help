---
permalink: publish/sites
---
Diese Seite erklärt, wie man [[Einführung in Obsidian Publish|Obsidian Publish]]-Websites verwaltet.

Eine Website ist eine Sammlung von Notizen, die von Obsidian Publish gehostet wird und online verfügbar ist, entweder über eine Obsidian Publish-Adresse oder eine [[Benutzerdefinierte Domains|benutzerdefinierte Domain]].

## Eine neue Website erstellen

> [!note] Die Anzahl der Websites, die gleichzeitig betrieben werden können, wird durch das Obsidian Publish-Abonnement bestimmt. Bevor eine neue Website erstellt wird, sollte sichergestellt werden, dass das Abonnement dies erlaubt.

1. Klicke in der Werkzeugleiste links im Anwendungsfenster auf **Änderungen veröffentlichen** ( ![[lucide-send.svg#icon]] ).
2. Falls bereits eine Website existiert, klicke auf **Seite wechseln** ( ![[lucide-repeat.svg#icon]] ).
3. Gib unter **Website-ID** den gewünschten Pfad für die Website ein. Beispielsweise ist eine Website mit der ID `my-amazing-site` unter publish.obsidian.md/my-amazing-site verfügbar.
4. Klicke auf **Erstellen**.

## Eine bestehende Website löschen

> [!note] Notizen bleiben im Vault erhalten, auch wenn eine Website gelöscht wird.

1. Klicke in der Werkzeugleiste links im Anwendungsfenster auf **Änderungen veröffentlichen** ( ![[lucide-send.svg#icon]] ).
2. Klicke auf **Seite wechseln** ( ![[lucide-repeat.svg#icon]] ).
3. Klicke auf **Website löschen** ( ![[lucide-x.svg#icon]] ) rechts neben der Website, die gelöscht werden soll.
4. Klicke zur Bestätigung auf **Löschen**.

## Zwischen Websites wechseln

1. Klicke in der Werkzeugleiste links im Anwendungsfenster auf **Änderungen veröffentlichen** ( ![[lucide-send.svg#icon]] ).
2. Klicke auf **Seite wechseln** ( ![[lucide-repeat.svg#icon]] ).
3. Klicke auf **Auswählen** rechts neben der Website, zu der gewechselt werden soll.

## Die Website-ID ändern

1. Klicke in der Werkzeugleiste links im Anwendungsfenster auf **Änderungen veröffentlichen** ( ![[lucide-send.svg#icon]] ).
2. Klicke auf **Seite wechseln** ( ![[lucide-repeat.svg#icon]] ).
3. Klicke auf **Website-ID bearbeiten** ( ![[lucide-edit-3.svg#icon]] ) rechts neben der Website, die bearbeitet werden soll.
4. Gib unter **Website-ID** die neue ID für die Website ein.
5. Klicke auf **Ändern**.

## Website-Einstellungen anzeigen

1. Klicke in der Werkzeugleiste links im Anwendungsfenster auf **Änderungen veröffentlichen** ( ![[lucide-send.svg#icon]] ).
2. Klicke im Dialog **Änderungen veröffentlichen** auf **Seiteneinstellungen ändern** ( ![[lucide-cog.svg#icon]] ).

## Website-Einstellungen

### Allgemein

| Option                                      | Typ        | Beschreibung                                                                                                                                          |
| ------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name der Website                            | Eingabe    | Der öffentliche Name und Titel der Obsidian Publish-Website.                                                                                          |
| Startseite                                  | Eingabe    | Der Speicherort der Markdown-Datei, die als Startseite dienen soll.                                                                                   |
| Logo                                        | Eingabe    | Das Bild, das als Banner der Website dienen soll. Das Bild muss [[Inhalte veröffentlichen#Notizen veröffentlichen\|veröffentlicht sein]].             |
| Website-Zusammenarbeit                      | Schaltfläche | Andere Benutzer bestimmen, die Zugang zur Bearbeitung der veröffentlichten Notizen haben sollen. Benutzer müssen ein Obsidian-Konto besitzen.         |
| Eigene Domain                               | Schaltfläche | [[Benutzerdefinierte Domains]]                                                                                                                        |
| Verbiete Indizierung durch Suchmaschinen    | Schalter   | Respektvolle Suchmaschinen durch Hinzufügen einer `robots.txt`-Datei daran hindern, die Website zu durchsuchen.                                      |

### Darstellung

| Option                   | Typ        | Beschreibung                                                                                                    |
|--------------------------|------------|-----------------------------------------------------------------------------------------------------------------|
| Thema                    | Dropdown   | Wähle, wie das Thema auf der Website dargestellt wird: **Hell**, **Dunkel** oder **Systemeinstellung verwenden**. |
| Hell/Dunkel umschalten   | Schalter   | Benutzern erlauben, den **Hell**/**Dunkel**-Modus über eine Umschalttaste auf der Website zu wechseln.         |

## Lese-Erlebnis

| Option                    | Typ      | Beschreibung                                                                                                     |
|---------------------------|----------|------------------------------------------------------------------------------------------------------------------|
| Vorschau anzeigen         | Schalter | Seitenvorschau beim Überfahren eines aktiven, internen Links aktivieren oder deaktivieren.                       |
| Seitentitel ausblenden    | Schalter | Den Inline-Titel einer veröffentlichten Notiz ein- oder ausblenden.                                             |
| Lesbare Zeilenlänge       | Schalter | Lesbare Zeilenlänge auf der Website aktivieren oder deaktivieren.                                                |
| Strenge Zeilenumbrüche    | Schalter | Einzelne Zeilenumbrüche auf der Website anzeigen oder nicht.                                                     |
| Seiten stapeln            | Schalter | [[Tabs#Tab-Gruppen stapeln\|Gestapelte Tabs]] auf der Website aktivieren oder deaktivieren.                      |

### Komponenten

| Option                      | Typ          | Beschreibung                                                                                                                                                    |
|-----------------------------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Navigation anzeigen         | Schalter     | Die [[Dateiexplorer]]-Ansicht auf der Publish-Website aktivieren oder deaktivieren.                                                                             |
| Navigation anpassen         | Schaltfläche | Die Reihenfolge der Dateiauflistung [[Website anpassen#Navigation anpassen\|anpassen]], wenn **Navigation anzeigen** aktiviert ist.                              |
| Suche anzeigen              | Schalter     | Eine Suchleiste auf der Website aktivieren oder deaktivieren.                                                                                                   |
| Graph-Ansicht anzeigen      | Schalter     | Die Graph-Ansicht in der rechten Seitenleiste der Website aktivieren oder deaktivieren.                                                                         |
| Gliederung anzeigen         | Schalter     | Die [[Gliederung\|Inhaltsverzeichnis]]-Ansicht auf der Website aktivieren oder deaktivieren.                                                                    |
| Rückverweise anzeigen       | Schalter     | [[Rückverweise]] auf der Website aktivieren oder deaktivieren.                                                                                                  |

### Sonstige Seiteneinstellungen

| Option                            | Typ          | Beschreibung                                                                                                     |
| --------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------- |
| Passwörter                        | Schaltfläche | [[Obsidian Publish/Sicherheit und Datenschutz#Ein Website-Passwort hinzufügen\|Ein Passwort festlegen]], um den Zugang zur gesamten Website einzuschränken. |
| Google Analytics Tracking-Code    | Eingabe      | **Nur bei eigener Domain**. Hier den Google Analytics-Tracking-Code für die Website einfügen.                    |
