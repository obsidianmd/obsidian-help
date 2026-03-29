---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish ponúka headless klienta na publikovanie trezorov bez použitia desktopovej aplikácie. Užitočné pre CI pipeline a automatizované pracovné postupy.
---
[[Úvod do Obsidian Publish|Obsidian Publish]] ponúka bezhlavého klienta na publikovanie trezorov bez použitia desktopovej aplikácie. Užitočné pre CI pipeliny a automatizované pracovné postupy. Publikujte svoje najnovšie zmeny podľa plánu alebo ako súčasť build pipeliny.

Nainštalujte [[Obsidian Headless]] **(otvorená beta)** na interakciu s [[Úvod do Obsidian Publish|Obsidian Publish]] z príkazového riadku bez desktopovej aplikácie Obsidian.

## Rýchly štart

Nainštalujte [[Obsidian Headless|Obsidian Headless]] **(otvorená beta)**:

```shell
npm install -g obsidian-headless
```

Musíte mať aktívne [[Úvod do Obsidian Publish|predplatné Obsidian Publish]].

```shell
# Prihlásenie
ob login

# Výpis vašich publish stránok
ob publish-list-sites

# Pripojenie lokálneho trezoru k publish stránke
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# Náhľad zmien bez publikovania
ob publish --dry-run

# Publikovanie zmien
ob publish
```

## Príkazy

### `ob publish-list-sites`

Zobrazí všetky Publish stránky dostupné pre váš účet.

### `ob publish-create-site`

Vytvorí novú Publish stránku.

```
ob publish-create-site --slug <slug>
```

| Možnosť | Popis |
| --- | --- |
| `--slug` | Identifikátor URL pre vašu stránku (napr. `my-notes` vytvorí `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

Pripojí lokálny trezor k Publish stránke.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| Možnosť | Popis |
| --- | --- |
| `--site` | ID stránky alebo slug |
| `--path` | Cesta k lokálnemu trezoru (predvolené: aktuálny adresár) |

### `ob publish`

Publikuje zmeny trezoru na vašu stránku. V predvolenom nastavení sa zahŕňajú len súbory s `publish: true` v ich úvodných metadátach.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| Možnosť | Popis |
| --- | --- |
| `--path` | Cesta k lokálnemu trezoru (predvolené: aktuálny adresár) |
| `--all` | Zahrnúť všetky súbory, nielen tie s príznakom publish |
| `--dry-run` | Zobraziť zmeny bez publikovania |
| `--yes` | Publikovať bez výzvy na potvrdenie |

### `ob publish-config`

Zobrazí alebo zmení nastavenia zahrnutia/vylúčenia priečinkov pre trezor. Spustite bez možností na zobrazenie aktuálnej konfigurácie.

```
ob publish-config [--path <local-path>] [options]
```

| Možnosť | Popis |
| --- | --- |
| `--path` | Cesta k lokálnemu trezoru (predvolené: aktuálny adresár) |
| `--includes` | Priečinky na zahrnutie, oddelené čiarkami (prázdny reťazec na vymazanie) |
| `--excludes` | Priečinky na vylúčenie, oddelené čiarkami (prázdny reťazec na vymazanie) |

### `ob publish-site-options`

Zobrazí alebo aktualizuje celostránkové nastavenia zobrazenia a navigácie. Spustite bez možností na zobrazenie aktuálnych nastavení.

```
ob publish-site-options [--path <local-path>] [options]
```

| Možnosť | Popis |
| --- | --- |
| `--path` | Cesta k lokálnemu trezoru (predvolené: aktuálny adresár) |
| `--site-name` | Meno stránky |
| `--index-file` | Cesta k súboru domovskej stránky |
| `--logo` | Cesta k súboru loga (prázdny reťazec na vymazanie) |
| `--show-navigation` | Zobraziť navigačný bočný panel |
| `--show-graph` | Zobraziť graf |
| `--show-outline` | Zobraziť obsah |
| `--show-search` | Zobraziť hľadanie |
| `--show-backlinks` | Zobraziť spätné odkazy |
| `--show-hover-preview` | Zobrazovať náhľad pri podržaní kurzorom |
| `--show-theme-toggle` | Zobraziť prepínač témy |
| `--default-theme` | Predvolená téma: `light` alebo `dark` |
| `--readable-line-length` | Čitateľná dĺžka riadku |
| `--strict-line-breaks` | Prísne zalomenia riadkov |
| `--hide-title` | Skryť vložený názov |
| `--sliding-window` | Režim posuvného okna |
| `--nav-order` | Poradie navigácie, cesty oddelené čiarkami (prázdny reťazec na vymazanie) |
| `--nav-hidden` | Skryté položky navigácie, cesty oddelené čiarkami (prázdny reťazec na vymazanie) |

### `ob publish-unlink`

Odpojí trezor od Publish stránky.

```
ob publish-unlink [--path <local-path>]
```
