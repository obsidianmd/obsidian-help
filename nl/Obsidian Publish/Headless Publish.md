---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish biedt een headless client om kluizen te publiceren zonder de desktop-app te gebruiken. Handig voor CI-pipelines en geautomatiseerde workflows.
---
[[Inleiding tot Obsidian Publish|Obsidian Publish]] biedt een headless client om kluizen te publiceren zonder de desktopapp te gebruiken. Handig voor CI-pipelines en geautomatiseerde workflows. Publiceer je laatste wijzigingen op een schema of als onderdeel van een buildpipeline.

Installeer [[Obsidian Headless]] **(open bèta)** om via de opdrachtregel met [[Inleiding tot Obsidian Publish|Obsidian Publish]] te werken zonder de Obsidian-desktopapp.

## Snelle start

Installeer [[Obsidian Headless|Obsidian Headless]] **(open bèta)**:

```shell
npm install -g obsidian-headless
```

Je moet een actief [[Inleiding tot Obsidian Publish|Obsidian Publish-abonnement]] hebben.

```shell
# Inloggen
ob login

# Je Publish-sites weergeven
ob publish-list-sites

# Een lokale kluis verbinden met een Publish-site
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# Wijzigingen bekijken zonder te publiceren
ob publish --dry-run

# Wijzigingen publiceren
ob publish
```

## Opdrachten

### `ob publish-list-sites`

Toon alle Publish-sites die beschikbaar zijn voor je account.

### `ob publish-create-site`

Maak een nieuwe Publish-site aan.

```
ob publish-create-site --slug <slug>
```

| Optie | Beschrijving |
| --- | --- |
| `--slug` | URL-identificatie voor je site (bijv. `my-notes` maakt `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

Verbind een lokale kluis met een Publish-site.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| Optie | Beschrijving |
| --- | --- |
| `--site` | Site-ID of slug |
| `--path` | Lokaal kluispad (standaard: huidige map) |

### `ob publish`

Publiceer kluiswijzigingen naar je site. Standaard worden alleen bestanden met `publish: true` in hun voormetadata opgenomen.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| Optie | Beschrijving |
| --- | --- |
| `--path` | Lokaal kluispad (standaard: huidige map) |
| `--all` | Alle bestanden opnemen, niet alleen die met een publish-vlag |
| `--dry-run` | Wijzigingen tonen zonder te publiceren |
| `--yes` | Publiceren zonder om bevestiging te vragen |

### `ob publish-config`

Bekijk of wijzig de instellingen voor het opnemen/uitsluiten van mappen voor een kluis. Voer uit zonder opties om de huidige configuratie weer te geven.

```
ob publish-config [--path <local-path>] [options]
```

| Optie | Beschrijving |
| --- | --- |
| `--path` | Lokaal kluispad (standaard: huidige map) |
| `--includes` | Op te nemen mappen, kommagescheiden (lege tekenreeks om te wissen) |
| `--excludes` | Uit te sluiten mappen, kommagescheiden (lege tekenreeks om te wissen) |

### `ob publish-site-options`

Bekijk of wijzig sitewijde weergave- en navigatie-instellingen. Voer uit zonder opties om de huidige instellingen weer te geven.

```
ob publish-site-options [--path <local-path>] [options]
```

| Optie | Beschrijving |
| --- | --- |
| `--path` | Lokaal kluispad (standaard: huidige map) |
| `--site-name` | Site-naam |
| `--index-file` | Pad naar het startpaginabestand |
| `--logo` | Pad naar logobestand (lege tekenreeks om te wissen) |
| `--show-navigation` | Toon navigatiezijbalk |
| `--show-graph` | Toon grafiekweergave |
| `--show-outline` | Toon inhoudsopgave |
| `--show-search` | Toon zoeken |
| `--show-backlinks` | Toon terugverwijzingen |
| `--show-hover-preview` | Toon zwevend voorbeeld |
| `--show-theme-toggle` | Toon themawisselaar |
| `--default-theme` | Standaardthema: `light` of `dark` |
| `--readable-line-length` | Leesbare regellengte |
| `--strict-line-breaks` | Strikt regeleinde |
| `--hide-title` | Inline titel verbergen |
| `--sliding-window` | Schuifvenstermodus |
| `--nav-order` | Navigatievolgorde, kommagescheiden paden (lege tekenreeks om te wissen) |
| `--nav-hidden` | Verborgen navigatieonderdelen, kommagescheiden paden (lege tekenreeks om te wissen) |

### `ob publish-unlink`

Verbreek de verbinding tussen een kluis en een Publish-site.

```
ob publish-unlink [--path <local-path>]
```
