---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish offers a headless client to publish vaults without using the desktop app. Useful for CI pipelines and automated workflows.
---
[[Einführung in Obsidian Publish|Obsidian Publish]] bietet einen Headless-Client, um Vaults ohne die Desktop-App zu veröffentlichen. Nützlich für CI-Pipelines und automatisierte Workflows. Veröffentliche deine neuesten Änderungen nach Zeitplan oder als Teil einer Build-Pipeline.

Installiere [[Obsidian Headless]] **(offene Beta)**, um mit [[Einführung in Obsidian Publish|Obsidian Publish]] über die Kommandozeile ohne die Obsidian-Desktop-App zu interagieren.

## Schnellstart

Installiere [[Obsidian Headless|Obsidian Headless]] **(offene Beta)**:

```shell
npm install -g obsidian-headless
```

Du benötigst ein aktives [[Einführung in Obsidian Publish|Obsidian Publish-Abonnement]].

```shell
# Anmelden
ob login

# Deine Publish-Websites auflisten
ob publish-list-sites

# Einen lokalen Vault mit einer Publish-Website verbinden
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# Änderungen ohne Veröffentlichung prüfen
ob publish --dry-run

# Änderungen veröffentlichen
ob publish
```

## Befehle

### `ob publish-list-sites`

Listet alle Publish-Websites auf, die deinem Konto zur Verfügung stehen.

### `ob publish-create-site`

Erstellt eine neue Publish-Website.

```
ob publish-create-site --slug <slug>
```

| Option | Beschreibung |
| --- | --- |
| `--slug` | URL-Kennung für deine Website (z. B. erstellt `my-notes` die Adresse `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

Verbindet einen lokalen Vault mit einer Publish-Website.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| Option | Beschreibung |
| --- | --- |
| `--site` | Website-ID oder Slug |
| `--path` | Lokaler Vault-Pfad (Standard: aktuelles Verzeichnis) |

### `ob publish`

Veröffentlicht Vault-Änderungen auf deiner Website. Standardmäßig werden nur Dateien mit `publish: true` im Frontmatter berücksichtigt.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| Option | Beschreibung |
| --- | --- |
| `--path` | Lokaler Vault-Pfad (Standard: aktuelles Verzeichnis) |
| `--all` | Alle Dateien einbeziehen, nicht nur solche mit Publish-Flag |
| `--dry-run` | Änderungen anzeigen, ohne zu veröffentlichen |
| `--yes` | Ohne Bestätigungsaufforderung veröffentlichen |

### `ob publish-config`

Zeigt die Ein-/Ausschluss-Ordnereinstellungen eines Vaults an oder ändert sie. Führe den Befehl ohne Optionen aus, um die aktuelle Konfiguration anzuzeigen.

```
ob publish-config [--path <local-path>] [options]
```

| Option | Beschreibung |
| --- | --- |
| `--path` | Lokaler Vault-Pfad (Standard: aktuelles Verzeichnis) |
| `--includes` | Einzuschließende Ordner, kommagetrennt (leerer String zum Zurücksetzen) |
| `--excludes` | Auszuschließende Ordner, kommagetrennt (leerer String zum Zurücksetzen) |

### `ob publish-site-options`

Zeigt websiteweite Anzeige- und Navigationseinstellungen an oder aktualisiert sie. Führe den Befehl ohne Optionen aus, um die aktuellen Einstellungen anzuzeigen.

```
ob publish-site-options [--path <local-path>] [options]
```

| Option | Beschreibung |
| --- | --- |
| `--path` | Lokaler Vault-Pfad (Standard: aktuelles Verzeichnis) |
| `--site-name` | Name der Website |
| `--index-file` | Dateipfad der Startseite |
| `--logo` | Logo-Dateipfad (leerer String zum Zurücksetzen) |
| `--show-navigation` | Navigation anzeigen |
| `--show-graph` | Graph-Ansicht anzeigen |
| `--show-outline` | Gliederung anzeigen |
| `--show-search` | Suche anzeigen |
| `--show-backlinks` | Rückverweise anzeigen |
| `--show-hover-preview` | Vorschau anzeigen |
| `--show-theme-toggle` | Thema-Umschalter anzeigen |
| `--default-theme` | Standard-Thema: `light` oder `dark` |
| `--readable-line-length` | Lesbare Zeilenlänge |
| `--strict-line-breaks` | Strenge Zeilenumbrüche |
| `--hide-title` | Inline-Titel ausblenden |
| `--sliding-window` | Sliding-Window-Modus |
| `--nav-order` | Navigationsreihenfolge, kommagetrennte Pfade (leerer String zum Zurücksetzen) |
| `--nav-hidden` | Nicht sichtbare Navigationselemente, kommagetrennte Pfade (leerer String zum Zurücksetzen) |

### `ob publish-unlink`

Trennt die Verbindung eines Vaults mit einer Publish-Website.

```
ob publish-unlink [--path <local-path>]
```
