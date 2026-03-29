---
permalink: sync/headless
cssclasses:
  - reference
description: 'Obsidian Sync nabízí bezobslužného klienta pro synchronizaci trezorů bez použití desktopové aplikace. Užitečné pro CI pipeline, agenty a automatizované pracovní postupy. Synchronizujte nejnovější změny nebo udržujte soubory průběžně aktuální.'
---
[[Úvod do Obsidian Sync|Obsidian Sync]] nabízí bezobslužného klienta pro synchronizaci trezorů bez použití desktopové aplikace. Užitečné pro CI pipeline, agenty a automatizované pracovní postupy. Synchronizujte nejnovější změny nebo udržujte soubory průběžně aktuální.

Nainstalujte [[Bezobslužný Sync|Obsidian Headless]] **(otevřená beta)** pro interakci s [[Úvod do Obsidian Sync|Obsidian Sync]] z příkazového řádku bez desktopové aplikace Obsidian. Bezobslužný Sync používá stejné [[Zabezpečení a soukromí|šifrování a ochranu soukromí]] jako desktopová aplikace, včetně end-to-end šifrování.

## Rychlý start

> [!error] Před začátkem si zálohujte data
> 1. Vždy si před začátkem zálohujte data pro případ, že by se stalo něco neočekávaného.
> 2. Nepoužívejte *současně* synchronizaci desktopové aplikace a bezobslužný Sync na stejném zařízení, protože to může způsobit konflikty dat. Na každém zařízení používejte pouze jednu metodu synchronizace.

Nainstalujte [[Bezobslužný Sync|Obsidian Headless]] **(otevřená beta)**:

```shell
npm install -g obsidian-headless
```

Musíte mít aktivní [[Plány a limity úložiště|předplatné Obsidian Sync]].

```shell
# Přihlášení
ob login

# Výpis vzdálených trezorů
ob sync-list-remote

# Nastavení trezoru pro synchronizaci
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# Jednorázová synchronizace
ob sync

# Průběžná synchronizace (sleduje změny)
ob sync --continuous
```

## Příkazy

### `ob sync-list-remote`

Vypíše všechny vzdálené trezory dostupné pro váš účet, včetně sdílených trezorů.

### `ob sync-list-local`

Vypíše lokálně nakonfigurované trezory a jejich cesty.

### `ob sync-create-remote`

Vytvoří nový vzdálený trezor.

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| Volba | Popis |
| --- | --- |
| `--name` | Název trezoru (povinné) |
| `--encryption` | `standard` pro spravované šifrování, `e2ee` pro end-to-end šifrování |
| `--password` | Heslo pro end-to-end šifrování (bude vyžádáno, pokud není zadáno) |
| `--region` | [[Oblasti Sync\|Oblast]] serveru (automaticky, pokud není zadáno) |

### `ob sync-setup`

Nastaví synchronizaci mezi lokálním a vzdáleným trezorem.

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| Volba | Popis |
| --- | --- |
| `--vault` | ID nebo název vzdáleného trezoru (povinné) |
| `--path` | Lokální adresář (výchozí: aktuální adresář) |
| `--password` | Heslo pro E2E šifrování (bude vyžádáno, pokud není zadáno) |
| `--device-name` | Název zařízení zobrazený v [[Historie verzí|historii verzí synchronizace]] |
| `--config-dir` | Název [[Konfigurační složka|konfiguračního adresáře]] (výchozí: `.obsidian`) |

### `ob sync`

Spustí synchronizaci pro nakonfigurovaný trezor.

```
ob sync [--path <local-path>] [--continuous]
```

| Volba | Popis |
| --- | --- |
| `--path` | Cesta k lokálnímu trezoru (výchozí: aktuální adresář) |
| `--continuous` | Spustí průběžnou synchronizaci, sleduje změny |

### `ob sync-config`

Zobrazí nebo změní [[Nastavení Sync a selektivní synchronizace|nastavení synchronizace]] pro trezor. Spuštěním bez voleb zobrazíte aktuální konfiguraci.

```
ob sync-config [--path <local-path>] [options]
```

| Volba                 | Popis                                                                                                                                                                                                          |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path`              | Cesta k lokálnímu trezoru (výchozí: aktuální adresář)                                                                                                                                                         |
| `--mode`              | Režim synchronizace: `bidirectional` (výchozí), `pull-only` (pouze stahování, ignoruje lokální změny), nebo `mirror-remote` (pouze stahování, vrací lokální změny)                                             |
| `--conflict-strategy` | `merge` nebo `conflict`                                                                                                                                                                                        |
| `--file-types`        | Typy příloh k synchronizaci: `image`, `audio`, `video`, `pdf`, `unsupported` (oddělené čárkou, prázdné pro vymazání)                                                                                           |
| `--configs`           | Kategorie konfigurace k synchronizaci: `app`, `appearance`, `appearance-data`, `hotkey`, `core-plugin`, `core-plugin-data`, `community-plugin`, `community-plugin-data` (oddělené čárkou, prázdné pro vypnutí synchronizace konfigurace) |
| `--excluded-folders`  | Složky k vyloučení (oddělené čárkou, prázdné pro vymazání)                                                                                                                                                     |
| `--device-name`       | Název zařízení pro identifikaci tohoto klienta v historii verzí synchronizace                                                                                                                                  |
| `--config-dir`        | Název konfiguračního adresáře (výchozí: `.obsidian`)                                                                                                                                                           |

### `ob sync-status`

Zobrazí stav synchronizace a konfiguraci trezoru.

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

Odpojí trezor od synchronizace a odstraní uložené přihlašovací údaje.

```
ob sync-unlink [--path <local-path>]
```

## Nativní moduly

Obsidian Headless obsahuje předkompilovaný nativní addon pro nastavení času vytvoření souboru (birthtime) na Windows a macOS. Tím se zachovají původní časová razítka vytvoření při stahování souborů ze serveru.

Addon cílí na N-API verzi 3, takže zkompilované binární soubory jsou ABI-stabilní a fungují napříč verzemi Node.js bez nutnosti rekompilace.

Na Linuxu není birthtime podporován — addon není zahrnut a synchronizace funguje normálně bez něj.

Předkompilované binární soubory jsou zahrnuty pro:

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`
