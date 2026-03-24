---
permalink: teams/deploy
cssclasses:
  - soft-embed
---
Obsidian läuft als lokale App auf jedem Gerät deiner Teammitglieder. Es ist so konzipiert, dass es sowohl online als auch offline funktioniert – sicher, privat und mit vollständiger Kontrolle über die Daten deines Teams. Obsidian ist nicht als webbasierte Anwendung verfügbar, daher musst du die App an deine Teammitglieder verteilen.

## Obsidian installieren und aktualisieren

Dein Team kann Obsidian von unserer [Download-Seite](https://obsidian.md/download) herunterladen. Releases sind auch auf unserer [GitHub-Releases-Seite](https://github.com/obsidianmd/obsidian-releases/releases) verfügbar, die Links zum [Änderungsprotokoll](https://obsidian.md/changelog/) enthält.

> [!tip] Für Windows-Benutzer, die ein System-Installationsprogramm benötigen: Die universelle `.exe` enthält die Option, Obsidian für alle Benutzer zu installieren.

Wenn automatische Aktualisierungen in der App aktiviert sind, werden zukünftige Versionen automatisch installiert, wenn Benutzer Obsidian neu starten. Zusätzlich empfehlen wir, regelmäßig [[Obsidian aktualisieren#Aktualisierungen des Installationsprogramms|Aktualisierungen des Installationsprogramms]] durchzuführen, um die neuesten Updates des Electron-Frameworks einschließlich Sicherheitskorrekturen zu erhalten.

Wenn du erfahren möchtest, wie du den Netzwerkzugriff auf Obsidian während dieses Prozesses einschränken kannst, lies [[Sicherheitsaspekte für Teams#Netzwerk und Zugriff|Netzwerk und Zugriff]].

## Obsidian anpassen

Obsidian lässt sich leicht an die Bedürfnisse deines Teams anpassen. Mit einer umfangreichen API und einem großen Ökosystem von Benutzern bietet Obsidian Zugang zu zahlreichen Erweiterungen, Themen und ergänzenden Werkzeugen.

Für sicherheitsbezogene Fragen zu diesen Themen lies bitte [[Sicherheitsaspekte für Teams]].

### Konfigurationsordner

Der [[Konfigurationsordner]] ist der Ort, an dem ein Obsidian-[[Glossar#Vault|Vault]] seine Anwendungseinstellungen speichert. Standardmäßig heißt dieser Ordner `.obsidian`, aber du hast die Flexibilität, den [[Konfigurationsordner#Den Konfigurationsordner ändern|Namen des Konfigurationsordners]] nach deinen Wünschen zu ändern.

Wir empfehlen, eine standardisierte Vorlage des Konfigurationsordners zu erstellen, die auf den Geräten deines Teams bereitgestellt wird.

### Erweiterungen

[[Obsidian-Erweiterungen|Obsidian-Erweiterungen]] sind optionale Funktionen, die vom Obsidian-Team erstellt wurden. Diese Funktionen sind in den Kern-Quellcode der Anwendung integriert und können ein- oder ausgeschaltet werden.

[[Community-Erweiterungen|Community-Erweiterungen]] sind Drittanbieter-Funktionen, die zur Obsidian-Anwendung hinzugefügt werden und über das Community-Verzeichnis installiert werden können. Drittanbieter-Erweiterungen nutzen die [Obsidian API](https://github.com/obsidianmd/obsidian-api). Erweiterungen befinden sich im Ordner `.obsidian/plugins` innerhalb eines Vaults und können manuell an diesem Speicherort installiert werden.

### Themen und Snippets

[[Darstellung|Themen]] verändern die Obsidian-Oberfläche visuell. Wie Erweiterungen können Themen aus unserem Community-Verzeichnis heruntergeladen werden. Themen befinden sich im Ordner `.obsidian/themes` innerhalb eines Vaults.

[[CSS-Bausteine|Snippets]] sind kleine `.css`-Dateien, die Aspekte der Obsidian-Oberfläche visuell verändern. In einigen Fällen können sie auch funktionale Verbesserungen hinzufügen. Snippets befinden sich im Ordner `.obsidian/snippets` innerhalb eines Vaults.

## Häufig gestellte Fragen

Für Fragen zur Kontoverwaltung und Sicherheit lies bitte [[Sicherheitsaspekte für Teams#Kontosicherheit|Kontosicherheit]].

### Bereitstellung

**Kann ich Lizenzen über mehrere Installationen hinweg verteilen?**
Derzeit unterstützen wir die Bereitstellung von Lizenzen über ein Bereitstellungsskript, z. B. in einer `.json`-Datei, nicht. Wenn du an dieser Funktion für dein Team interessiert bist, reiche bitte eine [Feature-Anfrage](https://forum.obsidian.md/c/feature-requests/8) ein.

**Kann Obsidian bestimmte Funktionen oder Konfigurationen über eine Einstellung oder ein Anwendungs-Flag sperren?**
Derzeit kannst du dies tun, indem du den Bearbeitungszugriff auf den `.obsidian`-Ordner oder bestimmte Dateien und Ordner darin blockierst, wie oben beschrieben. Wenn du an erweiterten Zugriffskontrollen für dein Team interessiert bist, reiche bitte eine [Feature-Anfrage](https://forum.obsidian.md/c/feature-requests/8) ein.
