---
permalink: sync/migrate
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Verschiebe deinen Sync-Tresor in eine andere Region und führe ein Verschlüsselungs-Upgrade durch.
---
Standardmäßig verwendet Obsidian Sync [[Obsidian Sync/Sicherheit und Datenschutz#Verschlüsselung|Ende-zu-Ende-Verschlüsselung]] für alle deine Daten. Dies garantiert, dass niemand — nicht einmal das Obsidian-Team — auf deine Notizen zugreifen kann.

Obsidian aktualisiert gelegentlich die Sync-Verschlüsselung, um die höchsten [[Obsidian Sync/Sicherheit und Datenschutz|Sicherheits]]-Standards aufrechtzuerhalten. Wenn ein Verschlüsselungs-Upgrade verfügbar ist, siehst du eine Option mit dem Titel **Vault-Verschlüsselung aktualisieren** unter **Obsidian-Einstellungen → Sync**. Dieser Vorgang ermöglicht es dir auch, deine [[Sync-Regionen|Sync-Region]] zu ändern.

## Verschlüsselungsversionen

Alle neuen Vaults verwenden automatisch die neueste Verschlüsselung. Bestehende Vaults können mit dem Migrationsassistenten aktualisiert werden. Beachte, dass alle Geräte eine Obsidian-App-Version verwenden müssen, die die Sync-Verschlüsselungsversion unterstützt, auf die du migrierst.

| Veröffentlichungsdatum                                                  | Sync-Version | Mindest-App-Version |
| ----------------------------------------------------------------------- | ------------ | ------------------- |
| [2025-08-22](https://obsidian.md/changelog/2025-08-22-sync/)            | 3            | 1.8.3               |
| [2020-12-07](https://obsidian.md/changelog/2020-12-07-desktop-v0.9.21/) | 0            | 0.9.21              |

## Verschlüsselung mit dem Migrationsassistenten aktualisieren

Bevor du fortfährst, erstelle eine [[Obsidian-Dateien sichern|Sicherung]] deines Vaults, um möglichen Datenverlust zu vermeiden. Dieser Vorgang löscht endgültig alle Daten in deinem Remote-Tresor mit der alten Verschlüsselung, einschließlich des Versionsverlaufs.

> [!danger] Migrationen sind destruktiv
> 
> **Erstelle immer eine [[Obsidian-Dateien sichern|Sicherung]] deines Vaults, bevor du mit einer Migration fortfährst.**
> 
> Wenn du einen Remote-Tresor migrierst, werden deine Daten ersetzt. Das bedeutet:
> 
> 1. Remote-Daten werden von den Obsidian-Servern entfernt und die Vault-Daten werden an ihrer Stelle neu hochgeladen.
> 2. Der gesamte [[Versionsgeschichte|Versionsverlauf]] des Vaults geht verloren.

1. Öffne die **[[Einstellungen]]**.
2. Wähle in der Seitenleiste **Sync**.
3. Klicke auf **Vault aktualisieren**. Diese Option ist nur sichtbar, wenn ein Upgrade für deinen Remote-Tresor verfügbar ist.
4. Überprüfe deine Sicherungen und klicke auf **Fortsetzen**.
5. Gib unter **Vault-Name** den Namen des Remote-Tresors ein.
6. Wähle unter **Region** deine Server-[[#Regionale Sync-Server|Region]] für deinen Remote-Tresor.
7. Wähle unter **Passwort für Verschlüsselung** ein Passwort für deinen Vault. Dies erstellt einen Ende-zu-Ende-verschlüsselten Vault. Das Vault-Passwort ist von deinem Obsidian-Konto getrennt und kann für jeden deiner Vaults unterschiedlich sein. Weitere Informationen findest du unter [[Sicherheit und Datenschutz]].
8. Sobald du deine Daten mit der neuen Verschlüsselung erneut hochgeladen hast, verbinde dich auf deinen anderen Geräten erneut mit dem neuen Sync-Vault.
