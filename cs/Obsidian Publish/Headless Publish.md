---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish nabízí bezhlavého klienta pro publikování trezorů bez použití desktopové aplikace. Užitečné pro CI pipeline a automatizované pracovní postupy.
---
[[Úvod do Obsidian Publish|Obsidian Publish]] nabízí bezhlavého klienta pro publikování trezorů bez použití desktopové aplikace. Je užitečný pro CI pipeline a automatizované pracovní postupy. Publikujte své nejnovější změny podle plánu nebo jako součást build pipeline.

Nainstalujte [[Obsidian Headless]] **(otevřená beta)** pro interakci s [[Úvod do Obsidian Publish|Obsidian Publish]] z příkazového řádku bez desktopové aplikace Obsidian.

## Rychlý start

Nainstalujte [[Obsidian Headless|Obsidian Headless]] **(otevřená beta)**:

```shell
npm install -g obsidian-headless
```

Musíte mít aktivní [[Úvod do Obsidian Publish|předplatné Obsidian Publish]].

```shell
# Přihlášení
ob login

# Výpis vašich Publish stránek
ob publish-list-sites

# Připojení místního trezoru k Publish stránce
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# Náhled změn bez publikování
ob publish --dry-run

# Publikování změn
ob publish
```

## Příkazy

### `ob publish-list-sites`

Vypíše všechny Publish stránky dostupné pro váš účet.

### `ob publish-create-site`

Vytvoří novou Publish stránku.

```
ob publish-create-site --slug <slug>
```

| Volba | Popis |
| --- | --- |
| `--slug` | URL identifikátor vaší stránky (např. `my-notes` vytvoří `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

Připojí místní trezor k Publish stránce.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| Volba | Popis |
| --- | --- |
| `--site` | ID nebo slug stránky |
| `--path` | Cesta k místnímu trezoru (výchozí: aktuální adresář) |

### `ob publish`

Publikuje změny trezoru na vaši stránku. Ve výchozím nastavení jsou zahrnuty pouze soubory s `publish: true` v úvodních metadatech.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| Volba | Popis |
| --- | --- |
| `--path` | Cesta k místnímu trezoru (výchozí: aktuální adresář) |
| `--all` | Zahrnout všechny soubory, nejen ty s příznakem publish |
| `--dry-run` | Zobrazit změny bez publikování |
| `--yes` | Publikovat bez vyžádání potvrzení |

### `ob publish-config`

Zobrazí nebo změní nastavení zahrnutých/vyloučených složek pro trezor. Spuštěním bez voleb zobrazíte aktuální konfiguraci.

```
ob publish-config [--path <local-path>] [options]
```

| Volba | Popis |
| --- | --- |
| `--path` | Cesta k místnímu trezoru (výchozí: aktuální adresář) |
| `--includes` | Složky k zahrnutí, oddělené čárkou (prázdný řetězec pro vymazání) |
| `--excludes` | Složky k vyloučení, oddělené čárkou (prázdný řetězec pro vymazání) |

### `ob publish-site-options`

Zobrazí nebo aktualizuje celostránková nastavení zobrazení a navigace. Spuštěním bez voleb zobrazíte aktuální nastavení.

```
ob publish-site-options [--path <local-path>] [options]
```

| Volba | Popis |
| --- | --- |
| `--path` | Cesta k místnímu trezoru (výchozí: aktuální adresář) |
| `--site-name` | Jméno stránky |
| `--index-file` | Cesta k souboru domovské stránky |
| `--logo` | Cesta k souboru loga (prázdný řetězec pro vymazání) |
| `--show-navigation` | Zobrazovat navigaci v postranním panelu |
| `--show-graph` | Zobrazovat graf |
| `--show-outline` | Zobrazovat obsah |
| `--show-search` | Zobrazovat vyhledávání |
| `--show-backlinks` | Zobrazovat zpáteční odkazy |
| `--show-hover-preview` | Zobrazovat náhled při najetí kurzorem |
| `--show-theme-toggle` | Zobrazovat přepínač motivu |
| `--default-theme` | Výchozí motiv: `light` nebo `dark` |
| `--readable-line-length` | Čitelná délka řádku |
| `--strict-line-breaks` | Striktní zalomení řádku |
| `--hide-title` | Skrýt vložený název |
| `--sliding-window` | Režim posuvného okna |
| `--nav-order` | Pořadí navigace, cesty oddělené čárkou (prázdný řetězec pro vymazání) |
| `--nav-hidden` | Skryté položky navigace, cesty oddělené čárkou (prázdný řetězec pro vymazání) |

### `ob publish-unlink`

Odpojí trezor od Publish stránky.

```
ob publish-unlink [--path <local-path>]
```
