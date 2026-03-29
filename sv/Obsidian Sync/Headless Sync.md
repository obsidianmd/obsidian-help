---
permalink: sync/headless
cssclasses:
  - reference
description: 'Obsidian Sync erbjuder en huvudlös klient för att synkronisera valv utan att använda skrivbordsappen. Användbar för CI-pipelines, agenter och automatiserade arbetsflöden. Synkronisera de senaste ändringarna eller håll filer kontinuerligt uppdaterade.'
---
[[Introduktion till Obsidian Sync|Obsidian Sync]] erbjuder en huvudlös klient för att synkronisera valv utan att använda skrivbordsappen. Användbart för CI-pipelines, agenter och automatiserade arbetsflöden. Synkronisera de senaste ändringarna eller håll filer kontinuerligt uppdaterade.

Installera [[Obsidian Headless]] **(öppen beta)** för att interagera med [[Introduktion till Obsidian Sync|Obsidian Sync]] från kommandoraden utan Obsidians skrivbordsapp. Huvudlös synkronisering använder samma [[Säkerhet och integritet|krypterings- och integritetsskydd]] som skrivbordsappen, inklusive slutpunkt-till-slutpunkt-kryptering.

## Snabbstart

> [!error] Säkerhetskopiera dina data innan du börjar
> 1. Säkerhetskopiera alltid dina data innan du börjar ifall något oväntat händer.
> 2. Använd inte *både* skrivbordsappens Sync och huvudlös Sync på samma enhet, eftersom det kan orsaka datakonflikter. Använd bara en synkroniseringsmetod per enhet.

Installera [[Obsidian Headless|Obsidian Headless]] **(öppen beta)**:

```shell
npm install -g obsidian-headless
```

Du måste ha en aktiv [[Planer och lagringsgränser|Obsidian Sync-prenumeration]].

```shell
# Logga in
ob login

# Lista dina fjärrvalv
ob sync-list-remote

# Ställ in ett valv för synkronisering
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# Kör en engångssynkronisering
ob sync

# Kör kontinuerlig synkronisering (bevakar ändringar)
ob sync --continuous
```

## Kommandon

### `ob sync-list-remote`

Lista alla fjärrvalv som är tillgängliga för ditt konto, inklusive delade valv.

### `ob sync-list-local`

Lista lokalt konfigurerade valv och deras sökvägar.

### `ob sync-create-remote`

Skapa ett nytt fjärrvalv.

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| Alternativ | Beskrivning |
| --- | --- |
| `--name` | Valvnamn (obligatoriskt) |
| `--encryption` | `standard` för hanterad kryptering, `e2ee` för slutpunkt-till-slutpunkt-kryptering |
| `--password` | Lösenord för slutpunkt-till-slutpunkt-kryptering (frågas efter om det utelämnas) |
| `--region` | Server-[[Sync-regioner\|region]] (automatisk om det utelämnas) |

### `ob sync-setup`

Ställ in synkronisering mellan ett lokalt valv och ett fjärrvalv.

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| Alternativ | Beskrivning |
| --- | --- |
| `--vault` | Fjärrvalvets ID eller namn (obligatoriskt) |
| `--path` | Lokal katalog (standard: aktuell katalog) |
| `--password` | E2E-krypteringslösenord (frågas efter om det utelämnas) |
| `--device-name` | Enhetsnamn som visas i [[Versionshistorik\|synkroniseringens versionshistorik]] |
| `--config-dir` | [[Konfigurationsmapp\|Konfigurationskatalog]]-namn (standard: `.obsidian`) |

### `ob sync`

Kör synkronisering för ett konfigurerat valv.

```
ob sync [--path <local-path>] [--continuous]
```

| Alternativ | Beskrivning |
| --- | --- |
| `--path` | Lokal valvsökväg (standard: aktuell katalog) |
| `--continuous` | Kör kontinuerligt och bevakar ändringar |

### `ob sync-config`

Visa eller ändra [[Synkroniseringsinställningar och selektiv synkronisering|synkroniseringsinställningar]] för ett valv. Kör utan alternativ för att visa den aktuella konfigurationen.

```
ob sync-config [--path <local-path>] [options]
```

| Alternativ            | Beskrivning                                                                                                                                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path`              | Lokal valvsökväg (standard: aktuell katalog)                                                                                                                                                                   |
| `--mode`              | Synkroniseringsläge: `bidirectional` (standard), `pull-only` (ladda bara ner, ignorera lokala ändringar) eller `mirror-remote` (ladda bara ner, återställ lokala ändringar)                                     |
| `--conflict-strategy` | `merge` eller `conflict`                                                                                                                                                                                       |
| `--file-types`        | Bilagtyper att synkronisera: `image`, `audio`, `video`, `pdf`, `unsupported` (kommaseparerade, tomt för att rensa)                                                                                             |
| `--configs`           | Konfigurationskategorier att synkronisera: `app`, `appearance`, `appearance-data`, `hotkey`, `core-plugin`, `core-plugin-data`, `community-plugin`, `community-plugin-data` (kommaseparerade, tomt för att inaktivera konfigurationssynkronisering) |
| `--excluded-folders`  | Mappar att exkludera (kommaseparerade, tomt för att rensa)                                                                                                                                                     |
| `--device-name`       | Enhetsnamn för att identifiera denna klient i synkroniseringens versionshistorik                                                                                                                               |
| `--config-dir`        | Konfigurationskatalognamn (standard: `.obsidian`)                                                                                                                                                              |

### `ob sync-status`

Visa synkroniseringsstatus och konfiguration för ett valv.

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

Koppla från ett valv från synkronisering och ta bort lagrade autentiseringsuppgifter.

```
ob sync-unlink [--path <local-path>]
```

## Nativa moduler

Obsidian Headless inkluderar ett förbyggt nativt tillägg för att ställa in filskapningstid (birthtime) på Windows och macOS. Detta bevarar ursprungliga tidsstämplar för skapande vid nedladdning av filer från servern.

Tillägget riktar sig mot N-API version 3, så de kompilerade binärfilerna är ABI-stabila och fungerar över Node.js-versioner utan omkompilering.

På Linux stöds inte birthtime — tillägget inkluderas inte och synkronisering fungerar normalt utan det.

Förbyggda binärfiler inkluderas för:

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`
