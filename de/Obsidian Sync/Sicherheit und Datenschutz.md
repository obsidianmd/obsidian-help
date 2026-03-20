---
permalink: sync/security
publish: true
mobile: false
description: Erfahre mehr über die Sicherheits- und Datenschutzaspekte von Obsidian Sync.
---
## Verschlüsselung

Zu deiner Sicherheit verschlüsselt [[Einführung in Obsidian Sync|Obsidian Sync]] deinen [[Lokale und Remote-Tresore|Remote-Tresor]] und die gesamte Kommunikation mit den Servern von Obsidian.

Wenn du einen neuen Remote-Tresor erstellst, hast du zwei Möglichkeiten:

- **Ende-zu-Ende-Verschlüsselung (Standard)** bietet die stärkste Sicherheit, aber erfordert, dass du dein Verschlüsselungspasswort sicher aufbewahrst. Dies garantiert, dass niemand — nicht einmal das Obsidian-Team — auf deine Notizen zugreifen kann.
- **Standard-Verschlüsselung** verwendet einen von Obsidian verwalteten Verschlüsselungsschlüssel, um deine Daten während der Übertragung und auf unserem Server zu schützen.

Wir empfehlen Ende-zu-Ende-Verschlüsselung für alle Benutzer, da sie die privateste und sicherste Option ist. Beachte jedoch, dass deine Daten für immer verschlüsselt und unbrauchbar bleiben, wenn du dein Verschlüsselungspasswort vergisst oder verlierst. Wir können dein Passwort oder verschlüsselte Daten nicht für dich wiederherstellen.

Deine Wahl betrifft nur deinen Remote-Tresor. Obsidian verschlüsselt deinen lokalen Vault nicht.

### Was bedeutet Ende-zu-Ende-Verschlüsselung?

Ende-zu-Ende-Verschlüsselung bedeutet, dass die Daten ab dem Moment verschlüsselt werden, in dem sie dein Gerät verlassen, und nur mit deinem Verschlüsselungsschlüssel entschlüsselt werden können, sobald sie wieder auf einem deiner Geräte ankommen.

Wir können deine Daten nicht lesen. Das können auch keine potenziellen Lauscher, wie etwa dein Internetanbieter.

Im seltenen Fall eines vollständigen Server-Einbruchs bleiben deine Daten verschlüsselt — niemand kann deine Dateien ohne Kenntnis deines Passworts entschlüsseln.

### Welche Risiken birgt die Verwendung der Standard-Verschlüsselung?

Standard-Verschlüsselung ist grundsätzlich weniger sicher als Ende-zu-Ende-Verschlüsselung, kann aber eine praktische Option sein, wenn du nicht erwartest, dass die synchronisierten Daten vollständig privat bleiben müssen. Wenn dein synchronisierter Vault beispielsweise auf einer öffentlichen Website [[Einführung in Obsidian Publish|veröffentlicht]] ist, wie diese Hilfe-Seite, dann ist Ende-zu-Ende-Verschlüsselung nicht notwendig.

Standard-Verschlüsselung ist dieselbe Verschlüsselungsmethode, die von Cloud-Speicherunternehmen und Software-as-a-Service-Plattformen wie Google Docs, Dropbox und iCloud (ohne erweiterten Datenschutz) verwendet wird. Dein Verschlüsselungsschlüssel wird von der App generiert und zum Schutz deiner Daten während der Übertragung und auf dem Server verwendet. Da der Verschlüsselungsschlüssel auf Unternehmensservern gespeichert wird, kann er zur Entschlüsselung deiner Daten verwendet werden, z. B. wenn das Unternehmen einem Durchsuchungsbefehl unterliegt oder wenn du über einen Webbrowser auf deine Daten zugreifen möchtest.

Ende-zu-Ende-Verschlüsselung garantiert, dass Obsidian niemals auf deine Daten zugreifen kann, und sollte immer verwendet werden, um Daten zu synchronisieren, die vollständig privat und sicher bleiben sollen.

### Welche Verschlüsselung wird verwendet?

Für die Datensicherheit implementieren wir branchenübliche Verschlüsselungsprotokolle. Konkret verwenden wir [AES-256](https://www.nist.gov/publications/advanced-encryption-standard-aes-0), den stärksten Verschlüsselungsstandard, der weitverbreitet in Kontexten wie Online-Banking eingesetzt wird. Der Verschlüsselungsprozess umfasst die folgenden technischen Details:

- **Schlüsselableitungsfunktion:** [scrypt](https://en.wikipedia.org/wiki/Scrypt) mit Salt
- **Verschlüsselungsalgorithmus:** AES-256 mit [Galois/Counter Mode (GCM)](https://en.wikipedia.org/wiki/Galois/Counter_Mode)

### Kann ich überprüfen, ob meine Daten Ende-zu-Ende-verschlüsselt sind?

Ja. Sieh dir unsere Anleitung an: [How to verify Obsidian Sync's end-to-end encryption](https://obsidian.md/blog/verify-obsidian-sync-encryption/). Diese Anleitung bietet schrittweise Anweisungen, mit denen du die Ende-zu-Ende-Verschlüsselung deiner Daten vertrauenslos überprüfen kannst, wenn sie über Sync-Server gesendet und empfangen werden.

### Hat Obsidian ein unabhängiges Sicherheitsaudit durchlaufen?

Ja. Obsidian wurde unabhängig geprüft. Besuche unsere [Sicherheitsseite](https://obsidian.md/security), um Auditberichte einzusehen. Regelmäßige Audits durch externe Sicherheitsfirmen stellen sicher, dass der Obsidian-Code und die Verfahren den höchsten Sicherheitsstandards entsprechen.

### Was passiert, wenn ich mein Verschlüsselungspasswort vergesse?

Wenn du dein Verschlüsselungspasswort verlierst oder vergisst, kannst du keine weiteren Vaults mit deinem Remote-Tresor verbinden. Da das Verschlüsselungspasswort nirgendwo gespeichert wird, ist es für immer verloren.

Deine Daten sind jedoch normalerweise sicher lokal auf jedem deiner Geräte gespeichert.

Um Obsidian Sync weiter zu nutzen, empfehlen wir eine vollständige Neueinrichtung, damit du neue Geräte zu deinem Sync-System hinzufügen kannst:

1. Erstelle ein vollständiges Vault-Backup auf deinem Hauptgerät, für den Fall, dass etwas schiefgeht. Dies kann so einfach sein wie das Kopieren des Vault-Ordners oder das Erstellen einer ZIP-Datei aus dem Vault.
2. Trenne den Remote-Tresor auf jedem deiner Geräte. Dies kannst du unter **[[Einstellungen]] → Sync → Remote-Tresor auswählen → Verbindung trennen** tun.
3. [[Obsidian Sync einrichten#Einen neuen Remote-Tresor erstellen|Erstelle einen neuen Remote-Tresor]] auf deinem Hauptgerät über dieselbe Einstellungsseite. Optional kannst du den vorherigen Remote-Tresor löschen, da du ohnehin kein Passwort dafür hast. (Möglicherweise musst du den vorherigen Remote-Tresor löschen, wenn du das [[Häufig gestellte Fragen#Wie viele Remote-Tresore kann ich haben?|Vault-Limit]] erreicht hast.)
4. Warte, bis dein Hauptgerät synchronisiert ist. Beobachte die Sync-Anzeige unten rechts auf dem Bildschirm, bis ein grünes Häkchen erscheint.
5. Verbinde jedes deiner Geräte mit demselben neu erstellten Remote-Tresor. Beim Verbinden wird eine Warnung über das Zusammenführen von Vaults angezeigt — das ist erwartet und du kannst fortfahren. Warte, bis jedes Gerät vollständig synchronisiert ist, bevor du zum nächsten übergehst. Dies reduziert die Wahrscheinlichkeit von Problemen.
6. Nun sollten alle deine Geräte mit dem neuen Remote-Tresor verbunden sein.

## Hosting

### Wo werden die Server für Obsidian Sync gehostet?

Unsere Rechenzentren, betrieben von [DigitalOcean](https://www.digitalocean.com), bieten geo-regionale Remote-Tresor-Hosting-Optionen an folgenden Standorten:

> [!abstract] Sync-Regionen
> **Automatisch**: Dein Rechenzentrum wird basierend auf deinem IP-Standort zum Zeitpunkt der ersten Einrichtung ausgewählt.
> 
> **Asien**: Singapur
> **Europa**: Frankfurt, Deutschland
> **Nordamerika**: San Francisco, USA 
> **Ozeanien**: Sydney, Australien
^sync-geo-regions

### Wo finde ich meinen aktuellen Sync-Server und wo wird er gehostet?

Um deinen Obsidian Sync-Server zu finden, folge diesen Schritten:
1. Gehe zu **[[Einstellungen]]** → **Sync** → **Debug-Informationen kopieren**.
2. Füge die kopierten Informationen in eine Notiz oder Datei ein.
3. Suche nach einer Zeile ähnlich dieser: `Host server: wss://sync-xx.obsidian.md`

Diese Zeile gibt an, auf welchem Server dein Remote-Tresor gehostet wird. Weitere Details zum Standort und zur Verfügbarkeit des Servers findest du auf unserer [Statusseite](https://status.obsidian.md/).

## Netzwerk und Zugriff

### Zugriff auf Obsidian Sync in deinem Netzwerk verwalten

Um den Zugriff auf Obsidian Sync in deinem Netzwerk zu regulieren, musst du die folgenden Domains verwalten:

`sync-xx.obsidian.md`

Das `xx` steht in diesem Fall für eine Zahl von `1 - 100`.

> [!tip] Wenn dein Firewall-System es unterstützt, empfehlen wir, `sync-*.obsidian.md` auf die Whitelist zu setzen, um dem kontinuierlichen Wachstum der Subdomain-Nummern Rechnung zu tragen.

## Einschränkungen

Obsidian Sync ist darauf ausgelegt, deine Notizen privat und sicher zu halten. Um eine schnelle, zuverlässige Synchronisierung und effiziente Speicherung über Geräte hinweg zu gewährleisten, treffen wir bewusste Kompromisse bei der Anwendung der Verschlüsselung.

### Deterministische Datei-Hash-Verschlüsselung

Wir verschlüsseln Datei-Hashes deterministisch: Derselbe Dateiinhalt erzeugt mit demselben Verschlüsselungsschlüssel und Salt immer denselben verschlüsselten Hash auf dem Server. Dies hilft Sync, Duplikate zu erkennen und das erneute Hochladen oder Speichern identischer Daten zu vermeiden, was Bandbreite und Remote-Speicherplatz spart, insbesondere im Versionsverlauf oder wenn große Dateien wiederholt auftreten.

Wenn jedoch ein Angreifer einen Sync-Server kompromittiert und er auf einem separaten Weg einen Benutzer dazu zwingen kann, Dateien seiner Wahl hochzuladen, könnte der Angreifer den Benutzer dazu zwingen, bestimmte Dateien hochzuladen und festzustellen, ob die Datei mit einer zuvor vom Benutzer hochgeladenen Datei übereinstimmt.

### Keine kryptografische Bindung zwischen Pfad und Inhalt

Einige Metadaten sind nicht Ende-zu-Ende-verschlüsselt: welches Gerät eine Datei hochgeladen oder gelöscht hat, wann sie hochgeladen wurde und die *Zuordnung* zwischen verschlüsselten Dateipfaden und verschlüsseltem Inhalt. Diese Daten sind für den Server lesbar, damit er Änderungen weiterleiten, den Versionsverlauf einer Datei bestimmen und die Geräte synchron halten kann.

Wenn ein Sync-Server kompromittiert würde, könnte ein Angreifer diese Zuordnung manipulieren, sodass der Inhalt einer verschlüsselten Datei unter einem anderen Dateipfad ausgeliefert wird. Dies gibt deine Klartextdaten nicht preis — sie bleiben verschlüsselt.
