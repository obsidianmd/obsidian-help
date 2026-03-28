---
permalink: plugins/file-recovery
publish: true
mobile: true
description: Datenwiederherstellung schützt deine Arbeit vor unbeabsichtigtem Datenverlust, indem automatisch Sicherungskopien deiner Notizen in regelmäßigen Abständen gespeichert werden.
---
Datenwiederherstellung ist eine [[Obsidian-Erweiterungen|Obsidian-Erweiterung]], die deine Arbeit vor versehentlichem Löschen, Dateibeschädigung oder ungewollten Änderungen schützt, indem automatisch vollständige Sicherungskopien deiner Notizen in regelmäßigen Abständen gespeichert werden. Datenwiederherstellung ist keine vollständige Backup-Lösung, und wir empfehlen, deine Obsidian-Dateien zusätzlich [[Obsidian-Dateien sichern|separat zu sichern]].

Um zu vermeiden, dass [[#Speicherplatz und Leistung|zu viel Speicherplatz]] belegt wird, behält Obsidian Sicherungskopien nur für eine bestimmte Anzahl von Tagen, bevor sie gelöscht werden. Sicherungskopien erfassen den vollständigen Inhalt deiner Dateien, nicht nur Änderungen, sodass du jede vorherige Version wiederherstellen kannst.

> [!info]+ Info
> Standardmäßig werden Sicherungskopien mindestens alle 5 Minuten gespeichert und 7 Tage lang aufbewahrt. Du kannst beide Intervalle unter **[[Einstellungen]] → Obsidian-Erweiterungen → Datenwiederherstellung** konfigurieren.

Sicherungskopien werden in den [[Wie Obsidian Daten speichert#Globale Einstellungen|Globalen Einstellungen]] außerhalb des Vaults gespeichert, um Vault-bezogenen Datenverlust zu berücksichtigen. Das bedeutet, dass Sicherungskopien mit dem absoluten Pfad zur Notiz gespeichert werden. Wenn du deinen Vault kürzlich verschoben hast, musst du ihn möglicherweise an den Speicherort zurückverschieben, an dem er sich zum Zeitpunkt der Sicherungskopie befand.

> [!tip] Wenn du [[Einführung in Obsidian Sync|Obsidian Sync]] oder [[Notizen geräteübergreifend synchronisieren|andere Synchronisierungsdienste]] verwendest, werden Sicherungskopien der Datenwiederherstellung nicht zwischen Geräten synchronisiert. Sicherungskopien sind gerätespezifisch und verbleiben lokal auf jedem Gerät.

## Eine Sicherungskopie wiederherstellen

1. Öffne die **[[Einstellungen]]**.
2. Wähle in der Seitenleiste unter **Obsidian-Erweiterungen** den Punkt **Datenwiederherstellung**.
3. Wähle unter **Sicherungskopien** die Option **Anzeigen**.
4. Beginne im Dateinamen-Feld den Namen der Datei einzugeben, die du wiederherstellen möchtest – es wird eine Vorschlagsliste angezeigt.
5. Wähle die Datei aus, drücke die Eingabetaste, und du siehst eine Liste der verfügbaren Sicherungskopien.
6. Wähle die Sicherungskopie, die du wiederherstellen möchtest.
    1. Wenn du den Inhalt kopieren und in eine neue Notiz einfügen möchtest, wähle die Schaltfläche **Kopieren**.
    2. Wenn du die Datei vollständig wiederherstellen möchtest, wähle die Schaltfläche **Wiederherstellen**.
7. Optional kannst du die Unterschiede zwischen Sicherungskopien anzeigen, indem du **Unterschiede anzeigen** aktivierst. Dies zeigt an, welche Inhalte zwischen den Versionen der Sicherungskopien hinzugefügt, entfernt oder geändert wurden.

## Verlauf der Sicherungskopien leeren

> [!danger] Das Leeren des Verlaufs der Sicherungskopien löscht unwiderruflich alle Sicherungskopien in deinem Vault.

1. Öffne die **[[Einstellungen]]**.
2. Wähle in der Seitenleiste unter **Obsidian-Erweiterungen** den Punkt **Datenwiederherstellung**.
3. Wähle unter **Verlauf leeren** die Option **Leeren**.
4. Bestätige, dass du alle Sicherungskopien löschen möchtest, indem du auf **Leeren** klickst.

## Speicherplatz und Leistung

Sicherungskopien der Datenwiederherstellung verbrauchen in der Regel nur minimalen Speicherplatz, da nur geänderte Dateien gespeichert werden. In Vaults mit vielen großen Dateien oder häufigen Bearbeitungen können sich Sicherungskopien jedoch im Laufe der Zeit ansammeln. Überwache deine Speichernutzung und passe den Aufbewahrungszeitraum bei Bedarf an.

## Einschränkungen

- **Apple-Blockierungsmodus**: Diese Funktion ist auf Apple-Geräten mit aktiviertem [Blockierungsmodus](https://support.apple.com/en-us/105120) nicht verfügbar, es sei denn, Obsidian wird davon ausgenommen.
- **Dateitypen**: Nur `.md`- und `.canvas`-Dateien können mit der Datenwiederherstellung wiederhergestellt werden.
- **Vault-Speicherort**: Wenn du deinen Vault an einen anderen Speicherort verschiebst, ohne die [[Vaults verwalten#Vault in einen anderen Ordner verschieben|Schnellauswahl]] zu verwenden, sind vorhandene Sicherungskopien möglicherweise nicht zugänglich.
