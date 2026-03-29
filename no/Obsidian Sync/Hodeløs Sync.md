---
permalink: sync/headless
cssclasses:
  - reference
description: 'Obsidian Sync tilbyr en hodeløs klient for å synkronisere hvelv uten å bruke skrivebordsappen. Nyttig for CI-pipelines, agenter og automatiserte arbeidsflyter. Synkroniser de siste endringene eller hold filer kontinuerlig oppdatert.'
---
[[Introduksjon til Obsidian Sync|Obsidian Sync]] tilbyr en hodeløs klient for å synkronisere hvelv uten å bruke skrivebordsappen. Nyttig for CI-pipelines, agenter og automatiserte arbeidsflyter. Synkroniser de siste endringene eller hold filer kontinuerlig oppdatert.

Installer [[Hodeløs Sync|Obsidian Headless]] **(åpen beta)** for å samhandle med [[Introduksjon til Obsidian Sync|Obsidian Sync]] fra kommandolinjen uten Obsidian-skrivebordsappen. Hodeløs Sync bruker den samme [[Sikkerhet og personvern|krypteringen og personvernbeskyttelsen]] som skrivebordsappen, inkludert ende-til-ende-kryptering.

## Hurtigstart

> [!error] Sikkerhetskopier dataene dine før du begynner
> 1. Sikkerhetskopier alltid dataene dine før du begynner i tilfelle noe uventet skjer.
> 2. Ikke bruk *både* skrivebordsappens Sync og Hodeløs Sync på samme enhet, da det kan forårsake datakonflikter. Bruk kun én synkroniseringsmetode per enhet.

Installer [[Hodeløs Sync|Obsidian Headless]] **(åpen beta)**:

```shell
npm install -g obsidian-headless
```

Du må ha et aktivt [[Planer og lagringsgrenser|Obsidian Sync-abonnement]].

```shell
# Logg inn
ob login

# List dine fjernhvelv
ob sync-list-remote

# Sett opp et hvelv for synkronisering
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# Kjør en engangssynkronisering
ob sync

# Kjør kontinuerlig synkronisering (overvåker endringer)
ob sync --continuous
```

## Kommandoer

### `ob sync-list-remote`

List alle fjernhvelv tilgjengelige for kontoen din, inkludert delte hvelv.

### `ob sync-list-local`

List lokalt konfigurerte hvelv og deres baner.

### `ob sync-create-remote`

Opprett et nytt fjernhvelv.

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| Alternativ | Beskrivelse |
| --- | --- |
| `--name` | Hvelvnavn (påkrevd) |
| `--encryption` | `standard` for administrert kryptering, `e2ee` for ende-til-ende-kryptering |
| `--password` | Ende-til-ende-krypteringspassord (du blir bedt om det hvis utelatt) |
| `--region` | Server-[[Sync-regioner\|region]] (automatisk hvis utelatt) |

### `ob sync-setup`

Sett opp synkronisering mellom et lokalt hvelv og et fjernhvelv.

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| Alternativ | Beskrivelse |
| --- | --- |
| `--vault` | Fjernhvelv-ID eller -navn (påkrevd) |
| `--path` | Lokal mappe (standard: gjeldende mappe) |
| `--password` | E2E-krypteringspassord (du blir bedt om det hvis utelatt) |
| `--device-name` | Enhetsnavn vist i [[Versjonshistorikk\|synkroniseringsversjonshistorikk]] |
| `--config-dir` | Navn på [[Konfigurasjonsmappe\|konfigurasjonsmappe]] (standard: `.obsidian`) |

### `ob sync`

Kjør synkronisering for et konfigurert hvelv.

```
ob sync [--path <local-path>] [--continuous]
```

| Alternativ | Beskrivelse |
| --- | --- |
| `--path` | Lokal hvelvbane (standard: gjeldende mappe) |
| `--continuous` | Kjør kontinuerlig, overvåker endringer |

### `ob sync-config`

Vis eller endre [[Synkroniseringsinnstillinger og selektiv synkronisering|synkroniseringsinnstillinger]] for et hvelv. Kjør uten alternativer for å vise gjeldende konfigurasjon.

```
ob sync-config [--path <local-path>] [options]
```

| Alternativ            | Beskrivelse                                                                                                                                                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path`              | Lokal hvelvbane (standard: gjeldende mappe)                                                                                                                                                                       |
| `--mode`              | Synkroniseringsmodus: `bidirectional` (standard), `pull-only` (kun last ned, ignorer lokale endringer), eller `mirror-remote` (kun last ned, tilbakestill lokale endringer)                                        |
| `--conflict-strategy` | `merge` eller `conflict`                                                                                                                                                                                          |
| `--file-types`        | Vedleggstyper å synkronisere: `image`, `audio`, `video`, `pdf`, `unsupported` (kommaseparert, tom for å tømme)                                                                                                   |
| `--configs`           | Konfigurasjonskategorier å synkronisere: `app`, `appearance`, `appearance-data`, `hotkey`, `core-plugin`, `core-plugin-data`, `community-plugin`, `community-plugin-data` (kommaseparert, tom for å deaktivere konfigurasjonssynkronisering) |
| `--excluded-folders`  | Mapper å ekskludere (kommaseparert, tom for å tømme)                                                                                                                                                              |
| `--device-name`       | Enhetsnavn for å identifisere denne klienten i synkroniseringsversjonshistorikken                                                                                                                                 |
| `--config-dir`        | Navn på konfigurasjonsmappe (standard: `.obsidian`)                                                                                                                                                               |

### `ob sync-status`

Vis synkroniseringsstatus og konfigurasjon for et hvelv.

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

Koble fra et hvelv fra synkronisering og fjern lagrede legitimasjonsopplysninger.

```
ob sync-unlink [--path <local-path>]
```

## Native moduler

Obsidian Headless inkluderer et forhåndsbygd nativt tillegg for å sette filopprettelsestid (birthtime) på Windows og macOS. Dette bevarer originale opprettelsestidsstempler ved nedlasting av filer fra serveren.

Tillegget er rettet mot N-API versjon 3, så de kompilerte binærfilene er ABI-stabile og fungerer på tvers av Node.js-versjoner uten rekompilering.

På Linux støttes ikke birthtime — tillegget er ikke inkludert, og synkronisering fungerer normalt uten det.

Forhåndsbygde binærfiler er inkludert for:

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`
