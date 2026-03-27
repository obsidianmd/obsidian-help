---
permalink: sync/headless
cssclasses:
  - reference
description: 'Obsidian Sync tilbyder en hovedløs klient til at synkronisere bokse uden at bruge desktop-appen. Nyttig til CI-pipelines, agenter og automatiserede arbejdsgange. Synkroniser de seneste ændringer, eller hold filer løbende opdateret.'
---
[[Introduktion til Obsidian Sync|Obsidian Sync]] tilbyder en headless-klient til at synkronisere bokse uden at bruge desktop-applikationen. Nyttig til CI-pipelines, agenter og automatiserede arbejdsgange. Synkroniser de seneste ændringer eller hold filer løbende opdaterede.

Installér [[Obsidian Headless]] **(åben beta)** for at interagere med [[Introduktion til Obsidian Sync|Obsidian Sync]] fra kommandolinjen uden Obsidian desktop-applikationen. Headless Sync bruger den samme [[Sikkerhed og privatliv|kryptering og privatlivsbeskyttelse]] som desktop-applikationen, inklusive slut-til-slut kryptering.

## Hurtig start

> [!error] Sikkerhedskopiér dine data, før du starter
> 1. Sikkerhedskopiér altid dine data, før du starter, i tilfælde af at noget uventet sker.
> 2. Brug ikke *både* desktop-applikationens Sync og Headless Sync på den samme enhed, da det kan forårsage datakonflikter. Brug kun én synkroniseringsmetode per enhed.

Installér [[Obsidian Headless|Obsidian Headless]] **(åben beta)**:

```shell
npm install -g obsidian-headless
```

Du skal have et aktivt [[Abonnementer og lagergrænser|Obsidian Sync-abonnement]].

```shell
# Log ind
ob login

# List dine fjernbokse
ob sync-list-remote

# Opsæt en boks til synkronisering
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# Kør en engangssynkronisering
ob sync

# Kør kontinuerlig synkronisering (overvåger ændringer)
ob sync --continuous
```

## Kommandoer

### `ob sync-list-remote`

List alle fjernbokse, der er tilgængelige for din konto, inklusive delte bokse.

### `ob sync-list-local`

List lokalt konfigurerede bokse og deres stier.

### `ob sync-create-remote`

Opret en ny fjernboks.

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| Indstilling | Beskrivelse |
| --- | --- |
| `--name` | Boksnavn (påkrævet) |
| `--encryption` | `standard` for administreret kryptering, `e2ee` for slut-til-slut kryptering |
| `--password` | Adgangskode til slut-til-slut kryptering (du bliver bedt om den, hvis den udelades) |
| `--region` | Server-[[Sync regioner\|region]] (automatisk hvis udeladt) |

### `ob sync-setup`

Opsæt synkronisering mellem en lokal boks og en fjernboks.

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| Indstilling | Beskrivelse |
| --- | --- |
| `--vault` | Fjernboks-ID eller navn (påkrævet) |
| `--path` | Lokal mappe (standard: aktuel mappe) |
| `--password` | Adgangskode til slut-til-slut kryptering (du bliver bedt om den, hvis den udelades) |
| `--device-name` | Enhedsnavn vist i [[Versionshistorik\|sync versionshistorik]] |
| `--config-dir` | [[Konfigurationsmappe\|Konfigurationsmappe]]-navn (standard: `.obsidian`) |

### `ob sync`

Kør synkronisering for en konfigureret boks.

```
ob sync [--path <local-path>] [--continuous]
```

| Indstilling | Beskrivelse |
| --- | --- |
| `--path` | Lokal bokssti (standard: aktuel mappe) |
| `--continuous` | Kør kontinuerligt og overvåg ændringer |

### `ob sync-config`

Vis eller ændr [[Sync indstillinger og selektiv synkronisering|sync indstillinger]] for en boks. Kør uden indstillinger for at vise den aktuelle konfiguration.

```
ob sync-config [--path <local-path>] [options]
```

| Indstilling           | Beskrivelse                                                                                                                                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path`              | Lokal bokssti (standard: aktuel mappe)                                                                                                                                                                         |
| `--mode`              | Synkroniseringstilstand: `bidirectional` (standard), `pull-only` (kun hent, ignorer lokale ændringer) eller `mirror-remote` (kun hent, tilbagefør lokale ændringer)                                             |
| `--conflict-strategy` | `merge` eller `conflict`                                                                                                                                                                                       |
| `--file-types`        | Vedhæftningstyper der skal synkroniseres: `image`, `audio`, `video`, `pdf`, `unsupported` (kommasepareret, tom for at rydde)                                                                                   |
| `--configs`           | Konfigurationskategorier der skal synkroniseres: `app`, `appearance`, `appearance-data`, `hotkey`, `core-plugin`, `core-plugin-data`, `community-plugin`, `community-plugin-data` (kommasepareret, tom for at deaktivere konfigurationssynkronisering) |
| `--excluded-folders`  | Mapper der skal udelukkes (kommasepareret, tom for at rydde)                                                                                                                                                   |
| `--device-name`       | Enhedsnavn til at identificere denne klient i sync versionshistorikken                                                                                                                                         |
| `--config-dir`        | Konfigurationsmappenavn (standard: `.obsidian`)                                                                                                                                                                |

### `ob sync-status`

Vis synkroniseringsstatus og konfiguration for en boks.

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

Afbryd en boks fra sync og fjern gemte legitimationsoplysninger.

```
ob sync-unlink [--path <local-path>]
```

## Native moduler

Obsidian Headless inkluderer en forudbygget native addon til at indstille filoprettelsestid (birthtime) på Windows og macOS. Dette bevarer de originale oprettelsestidsstempler, når filer hentes fra serveren.

Addon'en er målrettet N-API version 3, så de kompilerede binære filer er ABI-stabile og fungerer på tværs af Node.js-versioner uden rekompilering.

På Linux understøttes birthtime ikke — addon'en er ikke inkluderet, og sync fungerer normalt uden den.

Forudbyggede binære filer er inkluderet til:

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`
