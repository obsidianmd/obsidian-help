---
permalink: configuration-folder
publish: true
mobile: true
description: Erfahre, wie du auf deinen Konfigurationsordner auf Desktop- und Mobilgeräten zugreifen und ihn verwalten kannst.
---
Der Konfigurationsordner von Obsidian enthält alle Einstellungsdateien, die zu deinem [[Vaults verwalten|Vault]] gehören.

Standardmäßig heißt dein Konfigurationsordner `.obsidian` und befindet sich im Vault-Hauptordner. Wenn du einen Synchronisierungsdienst verwendest oder verschiedene Profile im selben Vault testen möchtest, kannst du deinen Konfigurationsordner ändern.

## Auf deinen Konfigurationsordner zugreifen

### Desktop

Auf dem Desktop befindet sich der `.obsidian`-Ordner in deinem Vault-Hauptordner. Du kannst über deinen System-Dateimanager darauf zugreifen.

### Mobil

Der Zugriff auf den Konfigurationsordner unterscheidet sich je nach Plattform:

**iOS und iPadOS**

Es gibt keine Standardmethode, um auf den `.obsidian`-Ordner unter iOS oder iPadOS zuzugreifen. Um nicht sichtbare Dateien und Ordner anzuzeigen und zu bearbeiten, benötigst du eine Drittanbieter-App wie:

- **Taio** — Kostenlose App mit grundlegenden Funktionen zum Anzeigen und Bearbeiten von Ordner- und Dateinamen.
- **Textastic** — Kostenpflichtige App mit erweiterten Dateibearbeitungsfunktionen.

**Android**

So greifst du auf den `.obsidian`-Ordner unter Android zu:

1. Öffne deinen System-Dateimanager.
2. Aktiviere die Option „Ausgeblendete Dateien anzeigen" in den Einstellungen.
3. Navigiere zu deinem Vault-Hauptordner. Der `.obsidian`-Ordner erscheint auf der obersten Ebene.

> [!tip]- Alternative Dateimanager
> Falls dein Standard-Dateimanager keine Option „Ausgeblendete Dateien anzeigen" hat, installiere eine Dateimanager-App, die diese Funktion enthält.

## Deinen Konfigurationsordner ändern

So legst du deinen Konfigurationsordner fest:

1. Öffne **[[Einstellungen]] → Dateien & Links**.
2. Gib unter **Konfigurationsordner überschreiben** den Namen deines Profils ein, beginnend mit einem Punkt (`.`). Zum Beispiel `.obsidian-awesome`.
3. Starte Obsidian neu, damit die Änderungen wirksam werden.

> [!info] Einstellungen innerhalb deines Konfigurationsordners werden nicht in deinen neuen Konfigurationsordner übertragen. Dein bisheriger Konfigurationsordner bleibt jedoch in deinem Vault-Hauptordner erhalten.
