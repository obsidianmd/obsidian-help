---
permalink: ios
---
Die mobile Obsidian-App für iOS und iPadOS bringt leistungsstarke Notizfunktionen auf dein iPhone und iPad. Du kannst sie aus dem [Apple App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442) herunterladen.

Diese Seite behandelt iOS-spezifische Funktionen einschließlich Widgets, Siri-Integration und Kurzbefehle.

## Sync

Informationen zur Synchronisierung von Notizen zwischen Geräten findest du unter [[Notizen geräteübergreifend synchronisieren]].

## Widgets

Obsidian für iOS bietet verschiedene Widgets, um schnelle Aktionen in deinem Vault durchzuführen.

> [!note] Hinweis
> Widgets sind ab iOS und iPadOS 18 und höher verfügbar.
> Widgets sind nicht verfügbar, wenn „Face ID erforderlich" zum Entsperren der App verwendet wird.


### Sperrbildschirm- und Kontrollzentrum-Widgets

Sperrbildschirm- und Kontrollzentrum-Widgets ermöglichen dir:
- Schnellerfassung öffnen
- Eine neue Notiz erstellen
- Eine bestimmte Notiz öffnen
- Tagesnotiz öffnen
- Suche öffnen
- Obsidian öffnen

### Home-Bildschirm-Widgets

Home-Bildschirm-Widgets ermöglichen dir:
- Schnellerfassung öffnen
- Eine Notiz erstellen
- Eine Notiz anzeigen
- Deine Tägliche Notiz öffnen

### Widgets anpassen

Du kannst Widgets an deinen Workflow anpassen, z. B. auswählen, welcher Vault verwendet werden soll, oder eine bestimmte Notiz zum Öffnen festlegen.

- **Home-Bildschirm-Widgets:** Tippe und halte das Widget, dann wähle **Widget bearbeiten**.
- **Sperrbildschirm-Widgets:** Berühre und halte deinen Sperrbildschirm, tippe auf **Anpassen**, wähle den Sperrbildschirm aus, und tippe dann auf das Widget, das du anpassen möchtest.
- **Kontrollzentrum-Widgets:** Öffne das Kontrollzentrum, tippe oben links auf die **+**-Taste, um die Bearbeitung zu starten, und tippe dann auf das Widget, das du anpassen möchtest.

Konfigurationsoptionen für das **Neue Notiz**-Widget:

![[ios-new-note-configuration.png|400]]

Konfigurationsoptionen für das **Notiz anzeigen**-Widget:

![[ios-view-note-configuration.png|400]]

## Schnellerfassung

Mit der Schnellerfassung kannst du Text über Sperrbildschirm-, Kontrollzentrum-, Home-Bildschirm-Widgets oder Kurzbefehle in deinem Vault speichern, ohne darauf warten zu müssen, dass dein Vault geladen wird. Je nach gewähltem Erfassungsort kann die Schnellerfassung eine neue Notiz erstellen oder den Text zu einer vorhandenen Notiz hinzufügen.

![[ios-quick-capture-view.png|400]]

> [!note] Hinweis
> Die Schnellerfassung erfordert Obsidian 1.14 oder neuer und iOS oder iPadOS 26 oder neuer.

So erfasst du Text:

1. Füge das **Schnellerfassung**-Widget zu deinem Sperrbildschirm, Kontrollzentrum oder Home-Bildschirm hinzu.
2. Tippe auf das Widget, um die Schnellerfassung zu öffnen.
3. Gib deinen Text ein.
4. Um zu ändern, wo der Text gespeichert wird, tippe oben auf dem Bildschirm auf den Erfassungsort und wähle einen anderen Ort aus.
5. Tippe auf das Häkchen, um den Text zu speichern.

**Hinweis**: Wenn Live-Aktivitäten aktiviert sind, erscheint die Schnellerfassungs-Notiz auch auf dem Sperrbildschirm und auf unterstützten iPhone-Modellen in der Dynamic Island. Tippe auf die Leiste oder die Live-Aktivität, um die Bearbeitung fortzusetzen.

![[ios-quick-capture-live-activity.png|400]]

### Spracherfassung

Mit der Spracherfassung kannst du eine Sprachnotiz über die Schnellerfassung aufnehmen. Obsidian transkribiert das Gesprochene in Echtzeit und kann die Aufnahme zusammen mit dem Transkript in deinem Vault speichern.

So erfasst du eine Sprachnotiz:

1. Öffne die Schnellerfassung und tippe auf die Mikrofon-Taste in der unteren linken Ecke. Die Aufnahme startet sofort.
2. Sprich deine Notiz. Das Transkript erscheint während des Sprechens im Textbereich und kann jederzeit bearbeitet werden.
3. Tippe auf die Aufnahme-Taste am unteren Bildschirmrand, um die Aufnahme zu pausieren, und tippe erneut, um fortzufahren.
4. Tippe auf das Häkchen, um das Transkript und die Aufnahme am ausgewählten Erfassungsort zu speichern.

![[ios-voice-capture.png|400]]

Du kannst die Aufnahme auch direkt über ein Widget starten. Wähle beim Anpassen eines Schnellerfassungs-Widgets eine Aktion aus dem Abschnitt **Spracherfassung**.

Die Aufnahme wird fortgesetzt, wenn du die Schnellerfassung minimierst oder dein Gerät sperrst. Während der Aufnahme zeigen der Sperrbildschirm und die Dynamic Island das Live-Transkript und einen Timer an. Tippe auf den Timer, um die Aufnahme zu pausieren oder fortzusetzen.

![[ios-voice-capture-live-activity.png|400]]

#### Spracherfassungs-Einstellungen

Um die Einstellungen der Spracherfassung zu ändern, tippe auf das Zahnrad-Symbol oben auf dem Bildschirm, während du dich in der Spracherfassung befindest.

- **Sprache**: Die für die Transkription verwendete Sprache. Siehe [[#Unterstützte Sprachen]]. Wähle **Keine**, um die Transkription zu deaktivieren und nur Audio aufzunehmen.
- **Mikrofon**: Das für die Aufnahme verwendete Mikrofon, z. B. das eingebaute Mikrofon oder ein verbundenes Headset.
- **Audiodatei speichern**: Ob die Aufnahme in deinem Vault gespeichert werden soll.
- **Audio von anderen Apps**: Was mit Musik oder anderen Audiowiedergaben passiert, wenn du aufnimmst: **Weiterspielen**, **Leiser**, oder **Pausieren**. Änderungen gelten ab der nächsten Aufnahme.

#### Unterstützte Sprachen

Die Spracherfassung kann Sprache in den folgenden Sprachen transkribieren. Einige Geräte unterstützen weniger Sprachen, und die verfügbaren Sprachen können sich mit iOS-Updates ändern. Wenn deine Sprache nicht verfügbar ist, kannst du trotzdem Audio ohne Transkript aufnehmen.

- Bangla
- Chinesisch
- Deutsch
- Englisch
- Französisch
- Gujarati
- Hindi
- Italienisch
- Japanisch
- Kannada
- Kantonesisch
- Kashmiri
- Koreanisch
- Maithili
- Malayalam
- Marathi
- Nepali
- Odia
- Portugiesisch
- Punjabi
- Spanisch
- Tamil
- Telugu
- Urdu

### Erfassungsorte

Erfassungsorte bestimmen, wo die Schnellerfassung deinen Text speichert. Ein Erfassungsort kann:

- Eine neue Notiz in einem ausgewählten Ordner erstellen, mit optionaler Vorlage und benutzerdefiniertem Notiznamen.
- Den Text an deine Tägliche Notiz anhängen oder voranstellen.
- Den Text an eine als Lesezeichen gesetzte Notiz anhängen oder voranstellen.
- Den Text an eine andere von dir ausgewählte Notiz anhängen oder voranstellen.

So erstellst du einen Erfassungsort:
1. Öffne die Schnellerfassung.
2. Tippe oben auf dem Bildschirm auf den Erfassungsort.
3. Tippe auf die Plus-Taste (+).
4. Wähle ein Verhalten und konfiguriere optionale Einstellungen.
5. Tippe auf **Speichern**.

Du kannst auch **Notiz nach Erfassung öffnen** verwenden, um festzulegen, ob Obsidian die Zielnotiz nach dem Speichern der Erfassung öffnen soll.

![[ios-quick-capture-locations.png|400]]

![[ios-quick-capture-config.png|400]]

### Schnellerfassungs-Vorlagen

Du kannst eine Vorlage anwenden, um den erfassten Text zu formatieren. Schnellerfassungs-Vorlagen unterstützen die folgenden Platzhalter:

| Platzhalter | Beschreibung |
| --- | --- |
| `{{content}}` | Erfasster Text |
| `{{date}}` | Aktuelles Datum |
| `{{time}}` | Aktuelle Uhrzeit |
| `{{latitude}}` | Aktueller Breitengrad |
| `{{longitude}}` | Aktueller Längengrad |
| `{{shortAddress}}` | Kurzform der aktuellen Adresse |
| `{{fullAddress}}` | Vollständige aktuelle Adresse |
| `{{googleMapsLink}}` | Google-Maps-Link zum aktuellen Standort |
| `{{appleMapsLink}}` | Apple-Maps-Link zum aktuellen Standort |
| `{{openStreetMapLink}}` | OpenStreetMap-Link zum aktuellen Standort |

Um ein Schnellerfassungs-Widget für einen bestimmten Erfassungsort zu konfigurieren, verwende die Schritte unter [[#Widgets anpassen]]. Home-Bildschirm-Widgets können mehrere Erfassungsorte anzeigen.

![[ios-quick-capture-widget.png|400]]

## Kurzbefehle

Obsidian ist mit Apples Kurzbefehle-App integriert, sodass du leistungsstarke Automatisierungen erstellen kannst. Verfügbare Kurzbefehle umfassen:

- **Schnellerfassung** — Schnellerfassung mit einem konfigurierten Erfassungsort öffnen
- **Lesezeichen öffnen** – Eine als Lesezeichen gesetzte Notiz aus deinem Vault öffnen
- **Neue Notiz öffnen** — Eine neue Notiz in deinem Vault erstellen
- **Tägliche Notiz öffnen** — Direkt zur heutigen Täglichen Notiz springen
- **In Tagesnotiz erfassen** — Text an die Tägliche Notiz anhängen oder voranstellen, ohne die Obsidian-App zu öffnen
- **In Lesezeichen erfassen** — Text an eine als Lesezeichen gesetzte Notiz anhängen oder voranstellen, ohne die Obsidian-App zu öffnen
- **Lesezeichen-Notiz abrufen** — Text aus einer als Lesezeichen gesetzten Notiz abrufen
- **Tägliche Notiz abrufen** — Text aus einer Täglichen Notiz abrufen
- **Vault durchsuchen** — Deinen Vault nach einem Stichwort durchsuchen
- **Link als Lesezeichen setzen** — Einen Web-Link zu deinen Lesezeichen hinzufügen
- **Obsidian öffnen** — Obsidian öffnen

Erfassungskurzbefehle sind besonders nützlich für schnelle Notizen, da sie es ermöglichen, Inhalte im Hintergrund zu einer Notiz hinzuzufügen.

## Teilen-Blatt

Das Teilen-Blatt von Obsidian ermöglicht dir, Inhalte von Webseiten zu erfassen. Es funktioniert auch mit Apps wie YouTube und anderen sozialen Netzwerken.

> [!note]
> - Das native Teilen-Blatt ist ab iOS und iPadOS 18 und höher verfügbar.
> - Die in diesem Abschnitt beschriebenen Funktionen des Teilen-Blatts erfordern Obsidian 1.13.0 oder neuer.

Verwende das Teilen-Blatt, um Inhalte schnell aus einer anderen App an Obsidian zu senden:
1. Tippe in einer anderen App auf die **Teilen**-Taste.
2. Wähle **Obsidian**.
3. Wähle einen Speicherort.
4. Überprüfe oder bearbeite den erfassten Inhalt.
5. Tippe auf **Speichern**.

![[ios-share-sheet-extension.png|400]]

### Speicherorte

Mit Speicherorten legst du fest, wohin der geteilte Inhalt gesendet werden soll, bevor du ihn speicherst.

Speicherorte können erfassen in:
- **Neue Notiz** — Eine neue Notiz in einem Vault oder Ordner erstellen.
- **Tägliche Notiz** — Inhalt an die heutige Tägliche Notiz anhängen oder voranstellen.
- **Lesezeichen-Notiz** — Inhalt an eine als Lesezeichen gesetzte Notiz anhängen oder voranstellen.
- **Notiz** — Eine vorhandene Notiz in deinem Vault auswählen.
- **Neues Lesezeichen** — Eine geteilte URL in den Obsidian-Lesezeichen speichern.

![[ios-share-sheet-locations.png|400]]

### Speicherorte anpassen

Du kannst Speicherorte für häufige Workflows erstellen, z. B. Artikel in einem Posteingang speichern, Zitate an deine Tägliche Notiz anhängen oder Links zu Lesezeichen hinzufügen.

So passt du Speicherorte an:

1. Öffne Obsidian über das iOS-Teilen-Blatt.
2. Tippe auf den aktuellen Speicherort in der Symbolleiste.
3. Tippe auf die **+**-Taste, um einen neuen Speicherort zu erstellen, oder wähle einen vorhandenen Speicherort zum Bearbeiten aus.
4. Wähle den Vault, das Verhalten und optionale Einstellungen.

Abhängig vom `Verhalten`-Typ kannst du Optionen konfigurieren wie:
- Ordner
- Vorlage
- Lesezeichen-Gruppe
- Position zum Anhängen oder Voranstellen
- Ob geteilte Links den **Volltext** oder nur die **URL** erfassen

![[ios-share-sheet-add-location.png|400]]

### Eine Vorlage beim Teilen verwenden

Du kannst beim Teilen von Inhalten über das Teilen-Blatt eine Vorlage verwenden. Vorlagen ermöglichen es dir, erfasste Webinhalte mit Details wie Seitentitel, Autor, Quellwebsite und Veröffentlichungsdatum zu formatieren.

So richtest du einen Speicherort mit einer Vorlage ein:

1. Öffne Obsidian über das iOS-Teilen-Blatt.
2. Tippe auf den aktuellen Speicherort in der Symbolleiste.
3. Tippe auf die **+**-Taste, um einen neuen Speicherort zu erstellen.
4. Gib einen Namen für den Speicherort ein.
5. Wähle einen Vault.
6. Setze **Verhalten** auf **Neue Notiz**.
7. Tippe im Abschnitt **Optional** auf **Vorlage**.
8. Wähle eine Notiz aus deinem Vault als Vorlage aus.
9. Tippe auf **Speichern**, um den Speicherort zu speichern.

![[ios-share-sheet-set-template.png|400]]

Wenn du einen Link über diesen Speicherort teilst, wendet Obsidian zuerst die Vorlage an und fügt dann den geteilten Inhalt hinzu.

Unterstützte Vorlagen-Platzhalter:

| Platzhalter | Beschreibung |
| --- | --- |
| `{{author}}` | Autor des Artikels |
| `{{description}}` | Beschreibung oder Zusammenfassung des Artikels |
| `{{domain}}` | Domainname der Website |
| `{{favicon}}` | URL des Favicons der Website |
| `{{image}}` | URL des Hauptbildes des Artikels |
| `{{published}}` | Veröffentlichungsdatum des Artikels im Standarddatumsformat |
| `{{published: YYYY-MM-DD}}` | Veröffentlichungsdatum in einem benutzerdefinierten Datumsformat |
| `{{site}}` | Name der Website |
| `{{title}}` | Titel des Artikels |
| `{{url}}` | Artikel-URL |
| `{{wordCount}}` | Gesamtanzahl der Wörter im extrahierten Inhalt |

Du kannst auch Standard-Vorlagen-Platzhalter für Datum und Uhrzeit verwenden:

| Platzhalter | Beschreibung |
| --- | --- |
| `{{date}}` | Aktuelles Datum |
| `{{date: YYYY-MM-DD}}` | Aktuelles Datum in einem benutzerdefinierten Format |
| `{{time}}` | Aktuelle Uhrzeit |
| `{{time: HH:mm}}` | Aktuelle Uhrzeit in einem benutzerdefinierten Format |

## Siri-Integration

Du kannst Siri-Sprachbefehle verwenden, um mit Obsidian zu interagieren:

- „Erfasse mit Obsidian"
- „Erfasse in Obsidian"
- „Öffne meine Tägliche Notiz in Obsidian"
- „Suche in Obsidian"

## Spotlight-Integration

Wenn du in iOS Spotlight nach „Obsidian" suchst, siehst du Schnellaktionen:
- Neue Notiz
- Suche
- Tägliche Notiz
