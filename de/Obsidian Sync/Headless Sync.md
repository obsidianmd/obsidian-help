---
permalink: sync/headless
cssclasses:
  - reference
description: Obsidian Sync bietet einen Headless-Client zum Synchronisieren von Vaults ohne die Desktop-App. Nützlich für CI-Pipelines, Agenten und automatisierte Workflows. Die neuesten Änderungen synchronisieren oder Dateien kontinuierlich auf dem neuesten Stand halten.
---
[[Einführung in Obsidian Sync|Obsidian Sync]] bietet einen Headless-Client zum Synchronisieren von Vaults ohne die Desktop-App. Nützlich für CI-Pipelines, Agenten und automatisierte Workflows. Die neuesten Änderungen synchronisieren oder Dateien kontinuierlich auf dem neuesten Stand halten.

Installiere [[Obsidian Headless]] **(offene Beta)**, um über die Befehlszeile mit [[Einführung in Obsidian Sync|Obsidian Sync]] zu interagieren, ohne die Obsidian Desktop-App zu verwenden. Headless Sync nutzt die gleichen [[Sicherheit und Datenschutz|Verschlüsselungs- und Datenschutzmaßnahmen]] wie die Desktop-App, einschließlich Ende-zu-Ende-Verschlüsselung.

## Schnellstart

> [!error] Sichere deine Daten, bevor du startest
> 1. Sichere immer deine Daten, bevor du beginnst, falls etwas Unerwartetes passiert.
> 2. Verwende *nicht* gleichzeitig die Desktop-App-Synchronisierung und Headless Sync auf demselben Gerät, da dies zu Datenkonflikten führen kann. Verwende nur eine Synchronisierungsmethode pro Gerät.

Installiere [[Obsidian Headless|Obsidian Headless]] **(offene Beta)**:

```shell
npm install -g obsidian-headless
```

Du benötigst ein aktives [[Tarife und Speicherlimits|Obsidian Sync-Abonnement]].

```shell
# Anmelden
ob login

# Deine Remote-Vaults auflisten
ob sync-list-remote

# Einen Vault für die Synchronisierung einrichten
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# Einmalige Synchronisierung ausführen
ob sync

# Kontinuierliche Synchronisierung ausführen (überwacht Änderungen)
ob sync --continuous
```

## Befehle

### `ob sync-list-remote`

Alle für dein Konto verfügbaren Remote-Tresore auflisten, einschließlich geteilter Tresore.

### `ob sync-list-local`

Lokal konfigurierte Vaults und deren Pfade auflisten.

### `ob sync-create-remote`

Einen neuen Remote-Tresor erstellen.

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| Option | Beschreibung |
| --- | --- |
| `--name` | Vault-Name (erforderlich) |
| `--encryption` | `standard` für verwaltete Verschlüsselung, `e2ee` für Ende-zu-Ende-Verschlüsselung |
| `--password` | Passwort für Ende-zu-Ende-Verschlüsselung (wird abgefragt, wenn nicht angegeben) |
| `--region` | Server-[[Sync-Regionen\|Region]] (automatisch, wenn nicht angegeben) |

### `ob sync-setup`

Synchronisierung zwischen einem lokalen Vault und einem Remote-Tresor einrichten.

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| Option | Beschreibung |
| --- | --- |
| `--vault` | Remote-Tresor-ID oder -Name (erforderlich) |
| `--path` | Lokales Verzeichnis (Standard: aktuelles Verzeichnis) |
| `--password` | E2E-Verschlüsselungspasswort (wird abgefragt, wenn nicht angegeben) |
| `--device-name` | Gerätename, der im [[Versionsgeschichte\|Sync-Versionsverlauf]] angezeigt wird |
| `--config-dir` | Name des [[Konfigurationsordner|Konfigurationsordners]] (Standard: `.obsidian`) |

### `ob sync`

Synchronisierung für einen konfigurierten Vault ausführen.

```
ob sync [--path <local-path>] [--continuous]
```

| Option | Beschreibung |
| --- | --- |
| `--path` | Lokaler Vault-Pfad (Standard: aktuelles Verzeichnis) |
| `--continuous` | Kontinuierlich ausführen und auf Änderungen überwachen |

### `ob sync-config`

[[Sync-Einstellungen und selektive Synchronisierung|Sync-Einstellungen]] für einen Vault anzeigen oder ändern. Ohne Optionen ausführen, um die aktuelle Konfiguration anzuzeigen.

```
ob sync-config [--path <local-path>] [options]
```

| Option                | Beschreibung                                                                                                                                                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--path`              | Lokaler Vault-Pfad (Standard: aktuelles Verzeichnis)                                                                                                                                                                                |
| `--mode`              | Sync-Modus: `bidirectional` (Standard), `pull-only` (nur herunterladen, lokale Änderungen ignorieren) oder `mirror-remote` (nur herunterladen, lokale Änderungen zurücksetzen)                                                        |
| `--conflict-strategy` | `merge` oder `conflict`                                                                                                                                                                                                              |
| `--file-types`        | Zu synchronisierende Anhangstypen: `image`, `audio`, `video`, `pdf`, `unsupported` (kommagetrennt, leer zum Zurücksetzen)                                                                                                            |
| `--configs`           | Zu synchronisierende Konfigurationskategorien: `app`, `appearance`, `appearance-data`, `hotkey`, `core-plugin`, `core-plugin-data`, `community-plugin`, `community-plugin-data` (kommagetrennt, leer um Konfigurationssync zu deaktivieren) |
| `--excluded-folders`  | Auszuschließende Ordner (kommagetrennt, leer zum Zurücksetzen)                                                                                                                                                                       |
| `--device-name`       | Gerätename zur Identifikation dieses Clients im Sync-Versionsverlauf                                                                                                                                                                |
| `--config-dir`        | Name des Konfigurationsordners (Standard: `.obsidian`)                                                                                                                                                                               |

### `ob sync-status`

Sync-Status und Konfiguration für einen Vault anzeigen.

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

Einen Vault von der Synchronisierung trennen und gespeicherte Anmeldedaten entfernen.

```
ob sync-unlink [--path <local-path>]
```

## Native Module

Obsidian Headless enthält ein vorkompiliertes natives Addon zum Setzen der Dateierstellungszeit (birthtime) unter Windows und macOS. Dies bewahrt die ursprünglichen Erstellungszeitstempel beim Herunterladen von Dateien vom Server.

Das Addon zielt auf N-API Version 3 ab, sodass die kompilierten Binärdateien ABI-stabil sind und ohne Neukompilierung über verschiedene Node.js-Versionen hinweg funktionieren.

Unter Linux wird birthtime nicht unterstützt — das Addon ist nicht enthalten und die Synchronisierung funktioniert normal ohne es.

Vorkompilierte Binärdateien sind enthalten für:

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`
