---
permalink: sync/headless
cssclasses:
  - reference
description: 'Obsidian Sync ponúka bezhlavého klienta na synchronizáciu trezorov bez použitia desktopovej aplikácie. Je užitočný pre CI pipeline, agentov a automatizované pracovné postupy. Synchronizujte najnovšie zmeny alebo udržiavajte súbory priebežne aktuálne.'
---
[[Úvod do Obsidian Sync|Obsidian Sync]] ponúka bezhlávkového klienta na synchronizáciu trezorov bez použitia desktopovej aplikácie. Užitočné pre CI pipeline, agentov a automatizované pracovné postupy. Synchronizujte najnovšie zmeny alebo udržujte súbory nepretržite aktuálne.

Nainštalujte [[Obsidian Headless]] **(otvorená beta)** na interakciu s [[Úvod do Obsidian Sync|Obsidian Sync]] z príkazového riadku bez desktopovej aplikácie Obsidian. Bezhlávková synchronizácia používa rovnaké [[Bezpečnosť a súkromie|šifrovanie a ochranu súkromia]] ako desktopová aplikácia, vrátane šifrovania end-to-end.

## Rýchly štart

> [!error] Pred začatím si zálohujte dáta
> 1. Pred začatím si vždy zálohujte dáta pre prípad, že by sa stalo niečo neočakávané.
> 2. Nepoužívajte *súčasne* synchronizáciu desktopovej aplikácie a bezhlávkovú synchronizáciu na tom istom zariadení, pretože to môže spôsobiť konflikty dát. Na každom zariadení používajte iba jednu metódu synchronizácie.

Nainštalujte [[Obsidian Headless|Obsidian Headless]] **(otvorená beta)**:

```shell
npm install -g obsidian-headless
```

Musíte mať aktívne [[Plány a limity úložiska|predplatné Obsidian Sync]].

```shell
# Prihlásenie
ob login

# Zobrazenie vzdialených trezorov
ob sync-list-remote

# Nastavenie trezoru na synchronizáciu
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# Jednorazová synchronizácia
ob sync

# Nepretržitá synchronizácia (sleduje zmeny)
ob sync --continuous
```

## Príkazy

### `ob sync-list-remote`

Zobrazí všetky vzdialené trezory dostupné pre váš účet, vrátane zdieľaných trezorov.

### `ob sync-list-local`

Zobrazí lokálne nakonfigurované trezory a ich cesty.

### `ob sync-create-remote`

Vytvorí nový vzdialený trezor.

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| Možnosť | Popis |
| --- | --- |
| `--name` | Názov trezoru (povinné) |
| `--encryption` | `standard` pre spravované šifrovanie, `e2ee` pre šifrovanie end-to-end |
| `--password` | Heslo pre šifrovanie end-to-end (ak je vynechané, bude vyžiadané) |
| `--region` | [[Oblasti Sync\|Oblasť]] servera (ak je vynechané, nastaví sa automaticky) |

### `ob sync-setup`

Nastaví synchronizáciu medzi lokálnym trezorom a vzdialeným trezorom.

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| Možnosť | Popis |
| --- | --- |
| `--vault` | ID alebo názov vzdialeného trezoru (povinné) |
| `--path` | Lokálny priečinok (predvolené: aktuálny priečinok) |
| `--password` | Heslo pre šifrovanie E2E (ak je vynechané, bude vyžiadané) |
| `--device-name` | Názov zariadenia zobrazený v [[História verzií\|histórii verzií synchronizácie]] |
| `--config-dir` | Názov [[Konfiguračný priečinok\|konfiguračného priečinka]] (predvolené: `.obsidian`) |

### `ob sync`

Spustí synchronizáciu pre nakonfigurovaný trezor.

```
ob sync [--path <local-path>] [--continuous]
```

| Možnosť | Popis |
| --- | --- |
| `--path` | Cesta k lokálnemu trezoru (predvolené: aktuálny priečinok) |
| `--continuous` | Nepretržitý beh, sleduje zmeny |

### `ob sync-config`

Zobrazí alebo zmení [[Nastavenia Sync a selektívna synchronizácia|nastavenia synchronizácie]] pre trezor. Spustite bez možností na zobrazenie aktuálnej konfigurácie.

```
ob sync-config [--path <local-path>] [options]
```

| Možnosť               | Popis                                                                                                                                                                                                          |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path`              | Cesta k lokálnemu trezoru (predvolené: aktuálny priečinok)                                                                                                                                                    |
| `--mode`              | Režim synchronizácie: `bidirectional` (predvolené), `pull-only` (iba sťahovanie, ignoruje lokálne zmeny), alebo `mirror-remote` (iba sťahovanie, vracia lokálne zmeny)                                         |
| `--conflict-strategy` | `merge` alebo `conflict`                                                                                                                                                                                       |
| `--file-types`        | Typy príloh na synchronizáciu: `image`, `audio`, `video`, `pdf`, `unsupported` (oddelené čiarkami, prázdne na vyčistenie)                                                                                      |
| `--configs`           | Kategórie konfigurácie na synchronizáciu: `app`, `appearance`, `appearance-data`, `hotkey`, `core-plugin`, `core-plugin-data`, `community-plugin`, `community-plugin-data` (oddelené čiarkami, prázdne na vypnutie synchronizácie konfigurácie) |
| `--excluded-folders`  | Priečinky na vylúčenie (oddelené čiarkami, prázdne na vyčistenie)                                                                                                                                              |
| `--device-name`       | Názov zariadenia na identifikáciu tohto klienta v histórii verzií synchronizácie                                                                                                                                |
| `--config-dir`        | Názov konfiguračného priečinka (predvolené: `.obsidian`)                                                                                                                                                       |

### `ob sync-status`

Zobrazí stav synchronizácie a konfiguráciu pre trezor.

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

Odpojí trezor od synchronizácie a odstráni uložené prihlasovacie údaje.

```
ob sync-unlink [--path <local-path>]
```

## Natívne moduly

Obsidian Headless obsahuje predzostavený natívny doplnok na nastavenie času vytvorenia súboru (birthtime) na Windows a macOS. Tým sa zachovajú pôvodné časové značky vytvorenia pri sťahovaní súborov zo servera.

Doplnok cieli na N-API verziu 3, takže skompilované binárne súbory sú ABI-stabilné a fungujú naprieč verziami Node.js bez potreby rekompilácie.

Na Linuxe nie je birthtime podporovaný — doplnok nie je zahrnutý a synchronizácia funguje normálne bez neho.

Predzostavené binárne súbory sú zahrnuté pre:

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`
