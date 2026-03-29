---
permalink: sync/headless
cssclasses:
  - reference
description: 'Obsidian Sync biedt een headless client om kluizen te synchroniseren zonder de desktop-app te gebruiken. Handig voor CI-pipelines, agents en geautomatiseerde workflows. Synchroniseer de laatste wijzigingen of houd bestanden continu up-to-date.'
---
[[Introductie tot Obsidian Sync|Obsidian Sync]] biedt een headless-client om kluizen te synchroniseren zonder de desktop-app te gebruiken. Handig voor CI-pipelines, agents en geautomatiseerde workflows. Synchroniseer de laatste wijzigingen of houd bestanden continu up-to-date.

Installeer [[Obsidian Headless]] **(open bèta)** om via de opdrachtregel met [[Introductie tot Obsidian Sync|Obsidian Sync]] te communiceren zonder de Obsidian desktop-app. Headless Sync gebruikt dezelfde [[Beveiliging en privacy|versleuteling en privacybescherming]] als de desktop-app, inclusief end-to-end-encryptie.

## Snelle start

> [!error] Maak een back-up van je gegevens voordat je begint
> 1. Maak altijd een back-up van je gegevens voordat je begint, voor het geval er iets onverwachts gebeurt.
> 2. Gebruik niet *zowel* de desktop-app Sync als Headless Sync op hetzelfde apparaat, aangezien dit gegevensconflicten kan veroorzaken. Gebruik slechts één synchronisatiemethode per apparaat.

Installeer [[Obsidian Headless|Obsidian Headless]] **(open bèta)**:

```shell
npm install -g obsidian-headless
```

Je moet een actief [[Abonnementen en opslaglimieten|Obsidian Sync-abonnement]] hebben.

```shell
# Login
ob login

# Toon je kluizen-op-afstand
ob sync-list-remote

# Stel een kluis in voor synchronisatie
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# Voer een eenmalige synchronisatie uit
ob sync

# Voer continue synchronisatie uit (bewaakt wijzigingen)
ob sync --continuous
```

## Opdrachten

### `ob sync-list-remote`

Toon alle externe kluizen die beschikbaar zijn voor je account, inclusief gedeelde kluizen.

### `ob sync-list-local`

Toon lokaal geconfigureerde kluizen en hun paden.

### `ob sync-create-remote`

Maak een nieuwe externe kluis aan.

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| Optie | Beschrijving |
| --- | --- |
| `--name` | Kluisnaam (vereist) |
| `--encryption` | `standard` voor beheerde versleuteling, `e2ee` voor end-to-end-encryptie |
| `--password` | Wachtwoord voor end-to-end-encryptie (wordt gevraagd indien weggelaten) |
| `--region` | Server[[Sync-regio's\|regio]] (automatisch indien weggelaten) |

### `ob sync-setup`

Stel synchronisatie in tussen een lokale kluis en een externe kluis.

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| Optie | Beschrijving |
| --- | --- |
| `--vault` | Externe kluis-ID of naam (vereist) |
| `--path` | Lokale map (standaard: huidige map) |
| `--password` | Wachtwoord voor E2E-versleuteling (wordt gevraagd indien weggelaten) |
| `--device-name` | Apparaatnaam weergegeven in [[Versiegeschiedenis\|synchronisatie-versiegeschiedenis]] |
| `--config-dir` | Naam van de [[Configuratiemap\|configuratiemap]] (standaard: `.obsidian`) |

### `ob sync`

Voer synchronisatie uit voor een geconfigureerde kluis.

```
ob sync [--path <local-path>] [--continuous]
```

| Optie | Beschrijving |
| --- | --- |
| `--path` | Lokaal kluispad (standaard: huidige map) |
| `--continuous` | Continu uitvoeren, bewaakt wijzigingen |

### `ob sync-config`

Bekijk of wijzig [[Sync-instellingen en selectieve synchronisatie|sync-instellingen]] voor een kluis. Voer uit zonder opties om de huidige configuratie weer te geven.

```
ob sync-config [--path <local-path>] [options]
```

| Optie                 | Beschrijving                                                                                                                                                                                                   |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path`              | Lokaal kluispad (standaard: huidige map)                                                                                                                                                                       |
| `--mode`              | Synchronisatiemodus: `bidirectional` (standaard), `pull-only` (alleen downloaden, lokale wijzigingen negeren), of `mirror-remote` (alleen downloaden, lokale wijzigingen terugdraaien)                          |
| `--conflict-strategy` | `merge` of `conflict`                                                                                                                                                                                          |
| `--file-types`        | Bijlagetypen om te synchroniseren: `image`, `audio`, `video`, `pdf`, `unsupported` (kommagescheiden, leeg om te wissen)                                                                                       |
| `--configs`           | Configuratiecategorieën om te synchroniseren: `app`, `appearance`, `appearance-data`, `hotkey`, `core-plugin`, `core-plugin-data`, `community-plugin`, `community-plugin-data` (kommagescheiden, leeg om configuratiesynchronisatie uit te schakelen) |
| `--excluded-folders`  | Uit te sluiten mappen (kommagescheiden, leeg om te wissen)                                                                                                                                                     |
| `--device-name`       | Apparaatnaam om deze client te identificeren in de synchronisatie-versiegeschiedenis                                                                                                                           |
| `--config-dir`        | Naam van de configuratiemap (standaard: `.obsidian`)                                                                                                                                                           |

### `ob sync-status`

Toon synchronisatiestatus en configuratie voor een kluis.

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

Verbreek de verbinding van een kluis met synchronisatie en verwijder opgeslagen inloggegevens.

```
ob sync-unlink [--path <local-path>]
```

## Natieve modules

Obsidian Headless bevat een vooraf gecompileerde natieve addon voor het instellen van de bestandsaanmaaktijd (birthtime) op Windows en macOS. Dit behoudt de originele aanmaaktijdstempels bij het downloaden van bestanden van de server.

De addon is gericht op N-API versie 3, waardoor de gecompileerde binaries ABI-stabiel zijn en werken over Node.js-versies heen zonder hercompilatie.

Op Linux wordt birthtime niet ondersteund — de addon is niet inbegrepen en synchronisatie werkt normaal zonder.

Vooraf gecompileerde binaries zijn inbegrepen voor:

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`
