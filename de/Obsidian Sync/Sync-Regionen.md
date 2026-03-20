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

Zusätzlich kannst du [[#Einen Remote-Tresor löschen|deinen alten Remote-Tresor löschen]], sobald du den Übergang zu deinem neuen Remote-Tresor und dessen Region bestätigt hast.
