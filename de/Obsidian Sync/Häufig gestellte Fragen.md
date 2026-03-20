---
permalink: sync/faq
publish: true
mobile: true
description: Diese Seite listet einige der häufig gestellten Fragen zu Fragen und Einschränkungen für Obsidian Sync auf.
---
Diese Seite listet einige der häufig gestellten Fragen zu Fragen und Einschränkungen für [[Einführung in Obsidian Sync|Obsidian Sync]] auf.

## Allgemein

### Welche Betriebssysteme unterstützt Obsidian Sync?

Obsidian Sync unterstützt jede Plattform, auf der Obsidian ausgeführt werden kann. Derzeit sind das Windows, macOS, Linux, Android und iOS.

### Funktioniert Obsidian mit Apples Blockierungsmodus?

Obsidian kann im [Blockierungsmodus](https://support.apple.com/en-us/105120) verwendet werden, solange Obsidian als Ausnahme hinzugefügt wird.

### Welche Art von Daten wird synchronisiert?

Standardmäßig werden Ihre Obsidian-Notizen, Bilder und Ihr [[Konfigurationsordner]] synchronisiert.

Sie können zusätzliche Synchronisierungsoptionen für PDFs, Audiodateien, Videodateien und andere Dateien hinzufügen, wenn Sie [[Sync-Einstellungen und selektive Synchronisierung|Sync-Einstellungen und selektive Synchronisierung]] konfigurieren.

### Wie viel Speicherplatz habe ich?

Das Speicherlimit hängt von Ihrem Obsidian [[Tarife und Speicherlimits#Tarife|Sync-Tarif]] ab. Die maximale Speichermenge beträgt 100 GB. Dieses Speicherlimit umfasst den [[Versionsgeschichte|Versionsverlauf]].

Sie können die **Größe des Vaults** in der Obsidian-App anzeigen, indem Sie zu **[[Einstellungen]] → Sync** gehen.

### Wie viele Remote-Tresore kann ich haben?

Die Anzahl der Remote-Tresore, die Sie haben können, richtet sich nach Ihrem [[Tarife und Speicherlimits#Tarife|Sync-Tarif]]. Der Standard-Tarif umfasst 1 Vault, der Plus-Tarif umfasst 10 Vaults. Mit Ihnen geteilte Vaults zählen nicht zu Ihrem Vault-Limit.

### Wie groß kann jeder Remote-Tresor sein?

Es gibt kein Limit pro Vault. Das Speicherlimit ist an Ihr verwendetes Konto gebunden und kann auf alle Ihre Vaults angewendet werden.

### Mit wie vielen Personen kann ich einen Remote-Tresor teilen?

Sie können einen [[An einem gemeinsamen Tresor zusammenarbeiten|Remote-Tresor]] mit bis zu 20 Personen teilen.

### Wie groß kann jede Datei sein?

Die maximale Dateigröße hängt von Ihrem [[Tarife und Speicherlimits|Obsidian Sync-Tarif]] ab. Beim Standard-Tarif beträgt das Limit 5 MB. Beim Plus-Tarif beträgt das Limit 200 MB pro Datei.

### Werden meine Daten im Hintergrund synchronisiert?

Nein, Dateien werden nur synchronisiert, wenn Obsidian ausgeführt wird.

### Lädt Obsidian Sync meine Einstellungen live neu?

Obsidian Sync kann bestimmte Einstellungen automatisch neu laden, es gibt jedoch einige Einschränkungen. Weitere Details finden Sie unter [[Sync-Einstellungen und selektive Synchronisierung#Neuladen von Einstellungen|Neuladen von Einstellungen]].

### Kann ich eine Drittanbieter-Synchronisierung mit Obsidian Sync verwenden?

Wir empfehlen nicht, einen Drittanbieter-Synchronisierungsdienst neben Obsidian Sync zu verwenden. Die Verwendung eines Drittanbieter-Dienstes und Obsidian Sync auf mehreren Geräten kann zu Konflikten führen, die doppelte oder beschädigte Dateien verursachen.

Cloud-Speicherdienste wie OneDrive und Dropbox bieten Funktionen wie „Dateien bei Bedarf" oder „Nur online verfügbare Dateien", die Dateien nur bei Bedarf herunterladen und sie lokal entfernen, um Speicherplatz zu sparen. Da diese Dateien jedoch nicht immer lokal verfügbar sind, wird Obsidian Sync sie als gelöscht interpretieren, was zu ihrer Entfernung aus Ihrem Remote-Tresor führt.

Um diese Probleme zu vermeiden, deaktivieren Sie Downloads bei Bedarf, wenn Sie Obsidian Sync mit Diensten wie OneDrive oder Dropbox verwenden. Sie müssen sicherstellen, dass die Einstellungen des Drittanbieter-Dienstes so konfiguriert sind, dass Dateien immer auf dem Gerät behalten werden.

## Datenaufbewahrung

Dies sind häufig gestellte Fragen zur Datenaufbewahrung von Obsidian. Für ausführlichere Antworten siehe [[Sicherheit und Datenschutz|Sicherheit und Datenschutz]].

### Wie lange bewahren Sie den Versionsverlauf auf?

Der [[Versionsgeschichte|Versionsverlauf]] hängt von Ihrem [[Tarife und Speicherlimits|Obsidian Sync-Tarif]] ab. Beim Standard-Tarif werden Ihre Notizen 1 Monat lang aufbewahrt. Beim Plus-Tarif werden Ihre Notizen 12 Monate lang aufbewahrt. Nach diesem Zeitraum werden die älteren Versionen gelöscht.

Ältere Versionen von [[Anhänge|Anhängen]] werden zwei Wochen lang gespeichert.

### Wie lange bewahren Sie meine Daten auf, nachdem mein Abonnement abgelaufen ist?

Wir bewahren Daten in Ihren Remote-Tresoren, einschließlich Versionsverlauf, einen Monat nach Ablauf Ihres Abonnements auf. Lokale Vaults auf Ihren Geräten sind davon nicht betroffen.

Solange Sie innerhalb eines Monats verlängern, sollte dies keine Auswirkungen auf Ihre Nutzung haben. Wenn Sie nach einem Monat verlängern, nachdem Ihre Remote-Tresore entfernt wurden, können Sie [[Obsidian Sync einrichten|einen neuen Remote-Tresor erstellen]] und Ihren lokalen Vault verbinden.

### Bewahren Sie meine Daten auf, wenn ich meinen Abonnementdienst erstatten lasse?

Nein. Die Daten werden sofort von den Obsidian Sync-Servern gelöscht. Daten in Ihrem [[Lokale und Remote-Tresore|lokalen Vault]] sind davon nicht betroffen.
