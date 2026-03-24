---
permalink: teams/security
cssclasses:
  - soft-embed
---
Unsere [Sicherheits](https://obsidian.md/security)-Seite fasst Informationen darüber zusammen, wie Obsidian den Schutz deiner Daten handhabt. Sie ist auch die Anlaufstelle für Sicherheitsaudits, die von Dritten durchgeführt wurden.

## Überlegungen

Obsidian ist so konzipiert, dass es als Offline- und eigenständige Anwendung funktioniert. Obsidian unterstützt auch benutzerdefinierte Erweiterungen und Themen. Darüber hinaus bieten wir sowohl offizielle als auch inoffizielle Unterstützung für verschiedene Dateisynchronisierungsdienste.

Wenn du nicht vorhast, Community-Erweiterungen oder -Themen zu verwenden, oder [[Einführung in Obsidian Sync|Obsidian Sync]] oder [[Einführung in Obsidian Publish|Obsidian Publish]], gelten deine Standardverfahren zur Absicherung von Anwendungen. Wenn du jedoch planst, eine dieser Funktionen zu nutzen, empfehlen wir, deren Eignung für deinen Arbeitsplatz gründlich zu prüfen.

## Community-Erweiterungen und Themen

Bitte lies zusätzlich zu diesem Abschnitt die Seite [[Plugin-Sicherheit]].

Das Obsidian-Team überprüft alle Community-Erweiterungen und Themen, die im offiziellen Verzeichnis eingereicht werden, über unser [Releases-Repository](https://github.com/obsidianmd/obsidian-releases/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc). Wir überprüfen keine Community-Beiträge, die nicht im offiziellen Verzeichnis eingereicht wurden.

Wir haben keinen Community-Store für [[CSS-Bausteine]]. Diese Dateien werden typischerweise innerhalb unserer [Obsidian-Community](https://obsidian.md/community) oder aus öffentlichen GitHub-Repositories bezogen.

Wir verlangen die Bündelung von Ressourcen in CSS-Snippets und Themen. Allerdings haben wir eine Ausnahme für [Google Fonts](https://fonts.google.com/) gemacht, um die Leistung auf mobilen Geräten aufrechtzuerhalten, wo die Auswirkungen der Schriftartenbündelung stärker spürbar sind.

## Netzwerk und Zugriff

Obwohl wir den Local-First-Ansatz unserer Anwendung priorisieren, stellt Obsidian Netzwerkverbindungen basierend auf den von dir genutzten Diensten und Funktionen her. Diese Netzwerkverbindungen können über eine Domain-Firewall oder Anwendungssperre deaktiviert werden.

Obsidian stellt diese Netzwerkverbindungen über HTTPS-Port 443 her.

Im Folgenden findest du eine Liste der Netzwerkverbindungen, die Obsidian herstellt.

### Von Obsidian ausgehende Verbindungen

- **Vorabversions-Updates**: Verwendet `releases.obsidian.md`.
- **Konto- und Lizenzverwaltung**: Beim Zugriff auf dein Obsidian-Konto in den Einstellungen und beim Anwenden einer kommerziellen Lizenz rufen wir `api.obsidian.md` auf.
- **Obsidian Sync**: Wird zum Synchronisieren deiner Notizen über Geräte hinweg verwendet.
	- `sync-xx.obsidian.md`, wobei `xx` eine Zahl zwischen 01-100 ist.
- **Obsidian Publish**:
    1. Backend: `publish-main.obsidian.md` und `publish-xx.obsidian.md`, wobei `xx` eine Zahl ist.
    2. Frontend: `publish.obsidian.md`.

### Von GitHub ausgehende Verbindungen

Obsidian stellt Netzwerkanfragen sowohl an `github.com` als auch an `raw.githubusercontent.com`.

- **Öffentliche Veröffentlichungen**: Wenn automatische Aktualisierungen aktiviert sind, prüft Obsidian GitHub auf öffentliche Veröffentlichungen.
- **Drittanbieter-Themen und -Erweiterungen**:
    - Alle 12 Stunden ab dem Start der App wird eine Prüfung durchgeführt, um eine auf GitHub gehostete Datei für „Erweiterungs-Verwerfungen" abzurufen. Diese Datei hilft dabei, bestimmte Versionen von Erweiterungen ferngesteuert zu deaktivieren, die bekanntermaßen Fehlfunktionen verursachen, zu Datenverlust führen oder potenziell anfällig oder bösartig sein könnten.
    - Aktivierte Erweiterungen können Netzwerkverkehr erzeugen, der außerhalb der Kontrolle von Obsidian und GitHub liegt.

### Andere Verbindungen

- **Eingebettete Online-Inhalte**: Beim Öffnen von Notizen, die Online-Inhalte einbetten, wie z. B. ein Bild (`![Katze](https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg)`).
- **DNS-Anfragen**: Wenn ein Hostname aufgelöst werden muss, bevor eine Verbindung hergestellt wird, einschließlich DNS über HTTPS. Weitere Informationen findest du in der [Chromium-Dokumentation](https://source.chromium.org/chromium/chromium/src/+/main:net/dns/public/doh_provider_entry.cc;l=120?q=chrome.cloudflare-dns.com&ss=chromium).

## Häufig gestellte Fragen

### Kontosicherheit

**Unterstützt Obsidian Single Sign-On (SSO)?**
Obsidian unterstützt kein SSO. In den meisten Anwendungsfällen benötigt Obsidian kein Konto oder keine Anmeldung an deinem Arbeitsplatz, es sei denn, du verwendest [[Einführung in Obsidian Publish|Obsidian Publish]] oder [[Einführung in Obsidian Sync|Obsidian Sync]].

**Unterstützt Obsidian Multi-Faktor-Authentifizierung (MFA)?**
Obsidian unterstützt [[Zwei-Faktor-Authentifizierung]] (2FA) für Obsidian-Konten, jedoch keine 2FA zum Öffnen und Verwenden der Basisanwendung. Benutzer von [[Einführung in Obsidian Sync|Obsidian Sync]] und [[Einführung in Obsidian Publish|Obsidian Publish]], die 2FA aktiviert haben, müssen ihren 2FA-Schlüssel bestätigen, wenn sie sich zum ersten Mal in der Anwendung anmelden.

### Bewertungen und Zertifizierungen

**Akzeptieren Sie Sicherheitsbewertungen von unserem Unternehmen?**
Wir verlangen einen Mindestbestellwert, bevor wir die Durchführung einer Sicherheitsbewertung in Betracht ziehen. Diese Bewertungen sind oft zeitaufwendig und möglicherweise nicht auf Offline-Anwendungen wie Obsidian anwendbar, da sie typischerweise auf cloudbasierte Dienste ausgerichtet sind.

Du kannst diesen Mindestbestellwert jedoch umgehen, indem du eine Vorabgebühr zahlst. Bitte kontaktiere den [[Hilfe und Support#Obsidian-Support kontaktieren|Obsidian-Support]], um dich nach dieser Option zu erkundigen.

**Verfügen Sie über anerkannte Zertifizierungen in Bezug auf Informationssicherheit oder Qualitätsstandards, wie ISO27001, NIST, COBIT oder andere ISO- oder CSA-Zertifizierungen?**
Derzeit nicht. Dies könnte in Zukunft ein Thema sein, aber im Moment liegt unser Fokus auf unseren [Sicherheitsaudits](https://obsidian.md/security).
