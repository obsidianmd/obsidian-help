---
permalink: configuration-folder
publish: true
mobile: true
description: >-
  Erfahren Sie, wie Sie auf Ihren Konfigurationsordner auf Desktop- und
  Mobilgeräten zugreifen und ihn verwalten.
---
Der Konfigurationsordner von Obsidian enthält alle Einstellungsdateien, die zu Ihrem [[Vaults verwalten|Vault]] gehören.

Standardmäßig heißt Ihr Konfigurationsordner `.obsidian` und befindet sich im Vault-Hauptordner. Wenn Sie einen Synchronisierungsdienst verwenden oder verschiedene Profile im selben Vault testen möchten, können Sie Ihren Konfigurationsordner ändern.

## Auf Ihren Konfigurationsordner zugreifen

### Desktop

Auf dem Desktop befindet sich der `.obsidian`-Ordner in Ihrem Vault-Hauptordner. Sie können über Ihren System-Dateimanager darauf zugreifen.

### Mobil

Der Zugriff auf den Konfigurationsordner unterscheidet sich je nach Plattform:

**iOS und iPadOS**

Es gibt keine Standardmethode, um auf den `.obsidian`-Ordner unter iOS oder iPadOS zuzugreifen. Um nicht sichtbare Dateien und Ordner anzuzeigen und zu bearbeiten, benötigen Sie eine Drittanbieter-App wie:

- **Taio** — Kostenlose App mit grundlegenden Funktionen zum Anzeigen und Bearbeiten von Ordner- und Dateinamen.
- **Textastic** — Kostenpflichtige App mit erweiterten Dateibearbeitungsfunktionen.

**Android**

So greifen Sie auf den `.obsidian`-Ordner unter Android zu:

1. Öffnen Sie Ihren System-Dateimanager.
2. Aktivieren Sie die Option „Ausgeblendete Dateien anzeigen" in den Einstellungen.
3. Navigieren Sie zu Ihrem Vault-Hauptordner. Der `.obsidian`-Ordner erscheint auf der obersten Ebene.

> [!tip]- Alternative Dateimanager
> Falls Ihr Standard-Dateimanager keine Option „Ausgeblendete Dateien anzeigen" hat, installieren Sie eine Dateimanager-App, die diese Funktion enthält.

## Ihren Konfigurationsordner ändern

So legen Sie Ihren Konfigurationsordner fest:

1. Öffnen Sie **[[Einstellungen]] → Dateien & Links**.
2. Geben Sie unter **Konfigurationsordner überschreiben** den Namen Ihres Profils ein, beginnend mit einem Punkt (`.`). Zum Beispiel `.obsidian-awesome`.
3. Starten Sie Obsidian neu, damit die Änderungen wirksam werden.

> [!info] Einstellungen innerhalb Ihres Konfigurationsordners werden nicht in Ihren neuen Konfigurationsordner übertragen. Ihr bisheriger Konfigurationsordner bleibt jedoch in Ihrem Vault-Hauptordner erhalten.
