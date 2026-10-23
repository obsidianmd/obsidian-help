---
permalink: sync/region
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Verschiebe deinen Sync-Tresor in eine andere Region.
---
Wenn du einen [[Lokale und Remote-Tresore|Remote-Tresor]] über [[Einführung in Obsidian Sync|Obsidian Sync]] erstellst, werden deine Daten verschlüsselt und auf einem von Obsidians regionalen Sync-Servern gespeichert. Diese Anleitung erklärt, wie du deinen Sync-Tresor auf einen anderen regionalen Server verschiebst.

## Verfügbare Regionen

Die folgenden Regionen sind mit Obsidian Sync verfügbar. Wir empfehlen, **Automatisch** zu verwenden oder einen Standort in deiner Nähe zu wählen, um die Latenz zu reduzieren und den Synchronisierungsprozess zu beschleunigen.

![[Obsidian Sync/Sicherheit und Datenschutz#^sync-geo-regions]]

## Einstellungen notieren

Wenn du ein Gerät mit dem neuen Remote-Tresor verbindest, kann Sync die Einstellungen verwenden, die du zu diesem Zeitpunkt aktiviert hast. Wenn du auf verschiedenen Geräten unterschiedliche Einstellungen verwendest, notiere sie dir, bevor du beginnst. Zum Beispiel synchronisierst du möglicherweise keine großen Mediendateien auf dein Telefon.

Öffne auf jedem Gerät, das den Remote-Tresor nutzt, **[[Einstellungen]] → Sync** und notiere diese Einstellungen. Ein Screenshot eignet sich gut dafür.

- **Selektive Synchronisierung**
- **Vault-Konfiguration synchronisieren**
- **Ausgeschlossene Ordner**
- Gerätespezifische Einstellungen, wie **Name des Gerätes** und **Konfliktlösung**

Siehe [[Sync-Einstellungen und selektive Synchronisierung]] für eine Erklärung der einzelnen Einstellungen und welche standardmäßig aktiviert sind.

## Sync-Region ändern

Um die Region deines Remote-Tresors zu ändern, musst du deinen Tresor auf einem anderen Sync-Server neu erstellen. Beachte, dass du die Region auch über den Migrationsassistenten unter [[Sync-Verschlüsselung aktualisieren]] ändern kannst, wenn dein Remote-Tresor auf einer älteren Version ist.

> [!danger] Migrationen sind destruktiv
> 
> **Erstelle immer ein [[Obsidian-Dateien sichern|Backup]] deines Vaults, bevor du mit einer Migration fortfährst.**
> 
> Wenn du einen Remote-Tresor migrierst, werden deine Daten ersetzt. Das bedeutet:
> 
> 1. Remote-Daten werden von den Obsidian-Servern entfernt, und die Vault-Daten werden an ihrer Stelle neu hochgeladen.
> 2. Der gesamte [[Versionsgeschichte|Versionsverlauf]] des Tresors geht verloren.

![[Obsidian Sync einrichten#Verbindung zu einem Remote-Tresor trennen]]

Wenn du den [[Tarife und Speicherlimits|Standard-Tarif]] nutzt, musst du außerdem [[#Einen Remote-Tresor löschen|deinen Remote-Tresor löschen]], bevor du fortfährst.

![[Obsidian Sync einrichten#Einen neuen Remote-Tresor erstellen]]

## Deine anderen Geräte erneut verbinden

Nachdem der neue Remote-Tresor die Synchronisierung auf deinem ersten Gerät abgeschlossen hat, wechsle jedes andere Gerät, das den alten Remote-Tresor verwendet hat. Arbeite dabei ein Gerät nach dem anderen ab.

1. [[Obsidian Sync einrichten#Verbindung zu einem Remote-Tresor trennen|Trenne die Verbindung zum alten Remote-Tresor]] auf dem Gerät.
2. [[Obsidian Sync einrichten#Einen Remote-Tresor auf einem anderen Gerät synchronisieren|Verbinde dich mit dem neuen Remote-Tresor]]. Wähle noch nicht **Synchronisierung starten**.
3. Stelle **Selektive Synchronisierung**, **Vault-Konfiguration synchronisieren** und **Ausgeschlossene Ordner** so ein, dass sie den notierten Einstellungen für dieses Gerät entsprechen.
4. Starte Obsidian neu. Auf Mobilgeräten oder Tablets musst du die App möglicherweise erzwungen beenden.
5. Wähle **Synchronisierung starten** oder **Fortfahren** und warte, bis Sync abgeschlossen ist, bevor du zum nächsten Gerät wechselst.

Zusätzlich kannst du [[#Einen Remote-Tresor löschen|deinen alten Remote-Tresor löschen]], sobald du den Übergang zu deinem neuen Remote-Tresor und dessen Region bestätigt hast.
