---
permalink: cli
description: 'Čokoľvek, čo môžete robiť v Obsidiane, sa dá vykonať z príkazového riadka.'
---
Obsidian CLI je rozhranie príkazového riadku, ktoré vám umožňuje ovládať Obsidian z terminálu na účely skriptovania, automatizácie a integrácie s externými nástrojmi.

Čokoľvek, čo môžete urobiť v Obsidian, môžete urobiť z príkazového riadku. Obsidian CLI dokonca obsahuje [[#Príkazy pre vývojárov|príkazy pre vývojárov]] na prístup k vývojárskym nástrojom, inšpekciu prvkov, vytváranie snímok obrazovky, opätovné načítanie pluginov a ďalšie.

![[obsidian-cli.mp4#interface]]

> [!warning] Vyžaduje inštalátor Obsidian 1.12
> Používanie CLI vyžaduje inštalátor Obsidian 1.12. Pozrite si [[Aktualizovať Obsidian#Aktualizácie inštalátora|sprievodcu aktualizáciou verzie inštalátora]].

## Inštalácia Obsidian CLI

Inovujte na najnovšiu [[Aktualizovať Obsidian|verziu inštalátora Obsidian]] (1.12.7+).

Povoľte Obsidian CLI v Obsidian:

1. Prejdite na **Nastavenia** → **Všeobecné**.
2. Povoľte **Rozhranie príkazového riadku**.
3. Postupujte podľa výzvy na zaregistrovanie Obsidian CLI.

Ak narazíte na problémy s inštaláciou Obsidian CLI, pozrite si [[#Riešenie problémov]].

## Začíname

Obsidian CLI podporuje jednotlivé príkazy aj terminálové užívateľské rozhranie (TUI) s interaktívnou pomocou a automatickým dopĺňaním.

> [!info] Aplikácia Obsidian musí byť spustená
> Obsidian CLI vyžaduje, aby bola aplikácia Obsidian spustená. Ak Obsidian nie je spustený, prvý príkaz, ktorý spustíte, spustí Obsidian.
>
> Hľadáte synchronizáciu bez desktopovej aplikácie? Pozrite si [[Obsidian Headless|Obsidian Headless]].

### Spustenie príkazu

Spustite jednotlivý príkaz bez otvorenia TUI:

```shell
# Spustenie príkazu pomocníka
obsidian help
```

### Používanie terminálového rozhrania

Použite TUI zadaním `obsidian`. Ďalšie príkazy je možné zadávať bez `obsidian`.

```shell
# Otvorenie TUI, potom spustenie pomocníka
obsidian
help
```

TUI podporuje automatické dopĺňanie, históriu príkazov a spätné vyhľadávanie. Použite `Ctrl+R` na vyhľadávanie v histórii príkazov. Pozrite si [[#Klávesové skratky]] pre všetky dostupné skratky.

## Príklady

Tu je niekoľko príkladov toho, čo Obsidian CLI dokáže.

### Každodenné použitie

```shell
# Otvorenie dnešnej dennej poznámky
obsidian daily

# Pridanie úlohy do dennej poznámky
obsidian daily:append content="- [ ] Nakúpiť potraviny"

# Vyhľadávanie v trezore
obsidian search query="poznámky zo stretnutia"

# Čítanie aktívneho súboru
obsidian read

# Výpis všetkých úloh z dennej poznámky
obsidian tasks daily

# Vytvorenie novej poznámky zo šablóny
obsidian create name="Výlet do Paríža" template=Cestovanie

# Výpis všetkých značiek v trezore s počtami
obsidian tags counts

# Porovnanie dvoch verzií súboru
obsidian diff file=README from=1 to=3
```

### Pre vývojárov

Mnoho [[#Príkazy pre vývojárov|príkazov pre vývojárov]] je k dispozícii pre vývoj pluginov a tém. Tieto príkazy umožňujú agentickým kódovacím nástrojom automaticky testovať a ladiť.

```shell
# Otvorenie vývojárskych nástrojov
obsidian devtools

# Opätovné načítanie komunitného pluginu, ktorý vyvíjate
obsidian plugin:reload id=my-plugin

# Vytvorenie snímky obrazovky aplikácie
obsidian dev:screenshot path=screenshot.png

# Spustenie JavaScriptu v konzole aplikácie
obsidian eval code="app.vault.getFiles().length"
```

## Ako na to

### Používanie parametrov a príznakov

Príkazy môžu používať **parametre** a **príznaky**. Väčšina príkazov nevyžaduje žiadne parametre ani príznaky. Povinné parametre sú označené ako `required`. Napríklad:

```shell
# Vytvorenie novej poznámky s predvoleným názvom "Untitled"
obsidian create
```

**Parameter** prijíma hodnotu, zapísanú ako `parameter=hodnota`. Ak hodnota obsahuje medzery, zabaľte ju do úvodzoviek:

```shell
# Vytvorenie novej poznámky s názvom "Poznámka" a obsahom "Ahoj svet"
obsidian create name=Poznámka content="Ahoj svet"
```

**Príznak** je booleovský prepínač bez hodnoty. Zahrňte ho na zapnutie, napríklad `open` a `overwrite` sú príznaky:

```shell
# Vytvorenie poznámky a jej otvorenie
obsidian create name=Poznámka content="Ahoj" open overwrite
```

Pre viacriadkový obsah použite `\n` pre nový riadok. Použite `\t` pre tabulátor.

```bash
obsidian create name=Poznámka content="# Nadpis\n\nText tela"
```

### Zacielenie trezoru

Ak je aktuálny pracovný adresár vášho terminálu priečinok trezoru, tento trezor sa použije predvolene. V opačnom prípade sa použije aktuálne aktívny trezor.

Použite `vault=<názov>` alebo `vault=<id>` na zacielenie konkrétneho trezoru. Toto musí byť prvý parameter pred vaším príkazom:

```shell
obsidian vault=Poznámky daily
obsidian vault="Môj trezor" search query="test"
```

V TUI použite `vault:open <názov>` alebo `<id>` na prepnutie na iný trezor.

### Zacielenie súboru

Mnohé príkazy akceptujú parametre `file` a `path` na zacielenie konkrétneho súboru. Ak nie je zadaný ani jeden, príkaz sa predvolene použije na aktívny súbor.

- `file=<názov>` rozlíši súbor pomocou rovnakého rozlíšenia odkazov ako [[Interné odkazy|wiki odkazy]], páruje podľa názvu súboru bez nutnosti úplnej cesty alebo prípony.
- `path=<cesta>` vyžaduje presnú cestu od koreňa trezoru, napr. `priečinok/poznámka.md`.

```shell
# Tieto sú ekvivalentné, ak "Recept.md" je jediný súbor s týmto názvom
obsidian read file=Recept
obsidian read path="Šablóny/Recept.md"
```

### Kopírovanie výstupu

Pridajte `--copy` k akémukoľvek príkazu na skopírovanie výstupu do schránky:

```shell
read --copy
search query="TODO" --copy
```


## Všeobecné príkazy

### `help`

Zobrazenie zoznamu všetkých dostupných príkazov.

| Parameter   | Popis                                   |
| ----------- | --------------------------------------- |
| `<command>` | Zobrazenie pomoci pre konkrétny príkaz. |

### `version`

Zobrazenie verzie Obsidian.

### `reload`

Opätovné načítanie okna aplikácie.

### `restart`

Reštartovanie aplikácie.


## Databázy

Príkazy pre [[Úvod do Databáz|Databázy]].

### `bases`

Výpis všetkých `.base` súborov v trezore.

### `base:views`

Výpis zobrazení v aktuálnom súbore databázy.

### `base:create`

Vytvorenie novej položky v databáze. Predvolene sa použije aktívne zobrazenie databázy, ak nie je zadaný žiadny súbor.

```bash
file=<name>        # názov súboru databázy
path=<path>        # cesta k súboru databázy
view=<name>        # názov zobrazenia
name=<name>        # názov nového súboru
content=<text>     # počiatočný obsah

open               # otvoriť súbor po vytvorení
newtab             # otvoriť v novej karte
```

### `base:query`

Dotaz na databázu a vrátenie výsledkov.

```bash
file=<name>                    # názov súboru databázy
path=<path>                    # cesta k súboru databázy
view=<name>                    # názov zobrazenia na dotaz
format=json|csv|tsv|md|paths   # formát výstupu (predvolené: json)
```

## Záložky

Príkazy pre [[Záložky]].

### `bookmarks`

Výpis záložiek.

```bash
total              # vrátiť počet záložiek
verbose            # zahrnúť typy záložiek
format=json|tsv|csv  # formát výstupu (predvolené: tsv)
```

### `bookmark`

Pridanie záložky.

```bash
file=<path>        # súbor na záložku
subpath=<subpath>  # podcesta (nadpis alebo blok) v súbore
folder=<path>      # priečinok na záložku
search=<query>     # vyhľadávací dotaz na záložku
url=<url>          # URL na záložku
title=<title>      # nadpis záložky
```

## Paleta príkazov

Príkazy pre [[Paleta príkazov|paletu príkazov]] a [[Klávesové skratky]]. Toto zahŕňa všetky príkazy zaregistrované pluginmi.

### `commands`

Výpis dostupných ID príkazov.

```bash
filter=<prefix>    # filtrovať podľa prefixu ID
```

### `command`

Vykonanie príkazu Obsidian.

```bash
id=<command-id>    # (required) ID príkazu na vykonanie
```

### `hotkeys`

Výpis klávesových skratiek pre všetky príkazy.

```bash
total              # vrátiť počet klávesových skratiek
verbose            # zobraziť, či je skratka vlastná
format=json|tsv|csv  # formát výstupu (predvolené: tsv)
```

### `hotkey`

Získanie klávesovej skratky pre príkaz.

```bash
id=<command-id>    # (required) ID príkazu

verbose            # zobraziť, či vlastná alebo predvolená
```

## Každodenné poznámky

Príkazy pre [[Každodenné poznámky]].

### `daily`

Otvorenie dennej poznámky.

```bash
paneType=tab|split|window    # typ panela na otvorenie
```

### `daily:path`

Získanie cesty k dennej poznámke. Vráti očakávanú cestu, aj keď súbor ešte nebol vytvorený.

### `daily:read`

Čítanie obsahu dennej poznámky.

### `daily:append`

Pripojenie obsahu na koniec dennej poznámky.

```bash
content=<text>     # (required) obsah na pripojenie
paneType=tab|split|window    # typ panela na otvorenie

inline             # pripojiť bez nového riadku
open               # otvoriť súbor po pridaní
```

### `daily:prepend`

Vloženie obsahu na začiatok dennej poznámky.

```bash
content=<text>     # (required) obsah na vloženie
paneType=tab|split|window    # typ panela na otvorenie

inline             # vložiť bez nového riadku
open               # otvoriť súbor po pridaní
```

## História súborov

### `diff`

Výpis alebo porovnanie verzií z lokálnej [[Obnova súboru|Obnovy súborov]] a [[Úvod do Obsidian Sync|Sync]]. Verzie sú číslované od najnovšej po najstaršiu.

```bash
file=<name>          # názov súboru
path=<path>          # cesta k súboru
from=<n>             # číslo verzie na porovnanie od
to=<n>               # číslo verzie na porovnanie do
filter=local|sync    # filtrovať podľa zdroja verzie
```

**Príklady:**

```shell
# Výpis všetkých verzií aktívneho súboru
diff

# Výpis všetkých verzií konkrétneho súboru
diff file=Recept

# Porovnanie najnovšej verzie s aktuálnym súborom
diff file=Recept from=1

# Porovnanie dvoch verzií
diff file=Recept from=2 to=1

# Zobrazenie iba verzií Sync
diff filter=sync
```

### `history`

Výpis verzií iba z [[Obnova súboru|Obnovy súborov]]. Pozrite si [[#Sync|sync:history]] pre ekvivalentný príkaz Sync.

```bash
file=<name>        # názov súboru
path=<path>        # cesta k súboru
```

### `history:list`

Výpis všetkých súborov s lokálnou históriou.

### `history:read`

Čítanie verzie lokálnej histórie.

```bash
file=<name>        # názov súboru
path=<path>        # cesta k súboru
version=<n>        # číslo verzie (predvolené: 1)
```

### `history:restore`

Obnovenie verzie lokálnej histórie.

```bash
file=<name>        # názov súboru
path=<path>        # cesta k súboru
version=<n>        # (required) číslo verzie
```

### `history:open`

Otvorenie obnovy súborov.

```bash
file=<name>        # názov súboru
path=<path>        # cesta k súboru
```

## Súbory a priečinky

### `file`

Zobrazenie informácií o súbore (predvolené: aktívny súbor).

```bash
file=<name>        # názov súboru
path=<path>        # cesta k súboru
```

Príklad:

```
path       Poznámky/Recept.md
name       Recept
extension  md
size       1024
created    1700000000000
modified   1700001000000
```

### `files`

Výpis súborov v trezore.

```bash
folder=<path>      # filtrovať podľa priečinka
ext=<extension>    # filtrovať podľa prípony

total              # vrátiť počet súborov
```

### `folder`

Zobrazenie informácií o priečinku.

```bash
path=<path>              # (required) cesta k priečinku
info=files|folders|size  # vrátiť iba konkrétne informácie
```

### `folders`

Výpis priečinkov v trezore.

```bash
folder=<path>      # filtrovať podľa nadradeného priečinka

total              # vrátiť počet priečinkov
```

### `open`

Otvorenie súboru.

```bash
file=<name>        # názov súboru
path=<path>        # cesta k súboru

newtab             # otvoriť v novej karte
```

### `create`

Vytvorenie alebo prepísanie súboru.

```bash
name=<name>        # názov súboru
path=<path>        # cesta k súboru
content=<text>     # počiatočný obsah
template=<name>    # šablóna na použitie

overwrite          # prepísať, ak súbor existuje
open               # otvoriť súbor po vytvorení
newtab             # otvoriť v novej karte
```

### `read`

Čítanie obsahu súboru (predvolené: aktívny súbor).

```bash
file=<name>        # názov súboru
path=<path>        # cesta k súboru
```

### `append`

Pripojenie obsahu na koniec súboru (predvolené: aktívny súbor).

```bash
file=<name>        # názov súboru
path=<path>        # cesta k súboru
content=<text>     # (required) obsah na pripojenie

inline             # pripojiť bez nového riadku
```

### `prepend`

Vloženie obsahu za úvodné metadáta (predvolené: aktívny súbor).

```bash
file=<name>        # názov súboru
path=<path>        # cesta k súboru
content=<text>     # (required) obsah na vloženie

inline             # vložiť bez nového riadku
```

### `move`

Presunutie alebo premenovanie súboru (predvolené: aktívny súbor). Toto automaticky aktualizuje [[Interné odkazy|interné odkazy]], ak je to zapnuté vo vašich [[Nastavenia#Vždy aktualizovať interné odkazy|nastaveniach trezoru]].

```bash
file=<name>        # názov súboru
path=<path>        # cesta k súboru
to=<path>          # (required) cieľový priečinok alebo cesta
```

### `rename`

Premenovanie súboru (predvolené: aktívny súbor). Prípona súboru sa zachová automaticky, ak je vynechaná z nového názvu. Použite [[#`move`|move]] na premenovanie a presunutie súboru naraz. Toto automaticky aktualizuje [[Interné odkazy|interné odkazy]], ak je to zapnuté vo vašich [[Nastavenia#Vždy aktualizovať interné odkazy|nastaveniach trezoru]].

```bash
file=<name>        # názov súboru
path=<path>        # cesta k súboru
name=<name>        # (required) nový názov súboru
```

### `delete`

Odstránenie súboru (predvolené: aktívny súbor, predvolene do koša).

```bash
file=<name>        # názov súboru
path=<path>        # cesta k súboru

permanent          # preskočiť kôš, odstrániť natrvalo
```

## Odkazy

Príkazy pre [[Spätné odkazy]] a [[Odchádzajúce odkazy]].

### `backlinks`

Výpis spätných odkazov na súbor (predvolené: aktívny súbor).

```bash
file=<name>        # názov cieľového súboru
path=<path>        # cesta k cieľovému súboru

counts             # zahrnúť počty odkazov
total              # vrátiť počet spätných odkazov
format=json|tsv|csv  # formát výstupu (predvolené: tsv)
```

### `links`

Výpis odchádzajúcich odkazov zo súboru (predvolené: aktívny súbor).

```bash
file=<name>        # názov súboru
path=<path>        # cesta k súboru

total              # vrátiť počet odkazov
```

### `unresolved`

Výpis nevyriešených odkazov v trezore.

```bash
total              # vrátiť počet nevyriešených odkazov
counts             # zahrnúť počty odkazov
verbose            # zahrnúť zdrojové súbory
format=json|tsv|csv  # formát výstupu (predvolené: tsv)
```

### `orphans`

Výpis súborov bez prichádzajúcich odkazov.

```bash
total              # vrátiť počet sirôt
```

### `deadends`

Výpis súborov bez odchádzajúcich odkazov.

```bash
total              # vrátiť počet slepých koncov
```

## Osnova

Príkazy pre [[Prehľad]].

### `outline`

Zobrazenie nadpisov pre aktuálny súbor.

```bash
file=<name>        # názov súboru
path=<path>        # cesta k súboru
format=tree|md|json  # formát výstupu (predvolené: tree)

total              # vrátiť počet nadpisov
```

## Pluginy

Príkazy pre [[Vstavané pluginy]] a [[Komunitné pluginy]].

### `plugins`

Výpis nainštalovaných pluginov.

```bash
filter=core|community  # filtrovať podľa typu pluginu

versions               # zahrnúť čísla verzií
format=json|tsv|csv    # formát výstupu (predvolené: tsv)
```

### `plugins:enabled`

Výpis povolených pluginov.

```bash
filter=core|community  # filtrovať podľa typu pluginu

versions               # zahrnúť čísla verzií
format=json|tsv|csv    # formát výstupu (predvolené: tsv)
```

### `plugins:restrict`

Prepnutie alebo kontrola obmedzeného režimu.

```bash
on                 # zapnúť obmedzený režim
off                # vypnúť obmedzený režim
```

### `plugin`

Získanie informácií o plugine.

```bash
id=<plugin-id>     # (required) ID pluginu
```

### `plugin:enable`

Zapnutie pluginu.

```bash
id=<id>                # (required) ID pluginu
filter=core|community  # typ pluginu
```

### `plugin:disable`

Vypnutie pluginu.

```bash
id=<id>                # (required) ID pluginu
filter=core|community  # typ pluginu
```

### `plugin:install`

Inštalácia komunitného pluginu.

```bash
id=<id>            # (required) ID pluginu

enable             # zapnúť po inštalácii
```

### `plugin:uninstall`

Odinštalovanie komunitného pluginu.

```bash
id=<id>            # (required) ID pluginu
```

### `plugin:reload`

Opätovné načítanie pluginu (pre vývojárov).

```bash
id=<id>            # (required) ID pluginu
```

## Vlastnosti

Príkazy súvisiace s [[Vlastnosti|Vlastnosťami]].

### `aliases`

Výpis aliasov v trezore. Použite `active` alebo `file`/`path` na zobrazenie aliasov pre konkrétny súbor.

```bash
file=<name>        # názov súboru
path=<path>        # cesta k súboru

total              # vrátiť počet aliasov
verbose            # zahrnúť cesty k súborom
active             # zobraziť aliasy pre aktívny súbor
```

### `properties`

Výpis vlastností v trezore. Použite `active` alebo `file`/`path` na zobrazenie vlastností pre konkrétny súbor.

```bash
file=<name>        # zobraziť vlastnosti pre súbor
path=<path>        # zobraziť vlastnosti pre cestu
name=<name>        # získať počet konkrétnej vlastnosti
sort=count         # zoradiť podľa počtu (predvolené: name)
format=yaml|json|tsv  # formát výstupu (predvolené: yaml)

total              # vrátiť počet vlastností
counts             # zahrnúť počty výskytov
active             # zobraziť vlastnosti pre aktívny súbor
```

### `property:set`

Nastavenie vlastnosti na súbore (predvolené: aktívny súbor).

```bash
name=<name>                                    # (required) názov vlastnosti
value=<value>                                  # (required) hodnota vlastnosti
type=text|list|number|checkbox|date|datetime   # typ vlastnosti
file=<name>                                    # názov súboru
path=<path>                                    # cesta k súboru
```

### `property:remove`

Odstránenie vlastnosti zo súboru (predvolené: aktívny súbor).

```bash
name=<name>        # (required) názov vlastnosti
file=<name>        # názov súboru
path=<path>        # cesta k súboru
```

### `property:read`

Čítanie hodnoty vlastnosti zo súboru (predvolené: aktívny súbor).

```bash
name=<name>        # (required) názov vlastnosti
file=<name>        # názov súboru
path=<path>        # cesta k súboru
```

## Publish

Príkazy pre [[Úvod do Obsidian Publish|Obsidian Publish]].

### `publish:site`

Zobrazenie informácií o stránke Publish (slug, URL).

### `publish:list`

Výpis publikovaných súborov.

```bash
total              # vrátiť počet publikovaných súborov
```

### `publish:status`

Výpis zmien v publikovaní.

```bash
total              # vrátiť počet zmien
new                # zobraziť iba nové súbory
changed            # zobraziť iba zmenené súbory
deleted            # zobraziť iba odstránené súbory
```

### `publish:add`

Publikovanie súboru alebo všetkých zmenených súborov (predvolené: aktívny súbor).

```bash
file=<name>        # názov súboru
path=<path>        # cesta k súboru

changed            # publikovať všetky zmenené súbory
```

### `publish:remove`

Zrušenie publikovania súboru (predvolené: aktívny súbor).

```bash
file=<name>        # názov súboru
path=<path>        # cesta k súboru
```

### `publish:open`

Otvorenie súboru na publikovanej stránke (predvolené: aktívny súbor).

```bash
file=<name>        # názov súboru
path=<path>        # cesta k súboru
```

## Náhodné poznámky

Príkazy pre [[Náhodná poznámka]].

### `random`

Otvorenie náhodnej poznámky.

```bash
folder=<path>      # obmedziť na priečinok

newtab             # otvoriť v novej karte
```

### `random:read`

Čítanie náhodnej poznámky (vrátane cesty).

```bash
folder=<path>      # obmedziť na priečinok
```

## Hľadanie

Príkazy pre [[Hľadať|Hľadanie]].

### `search`

Hľadanie textu v trezore. Vráti zodpovedajúce cesty k súborom.

```bash
query=<text>       # (required) vyhľadávací dotaz
path=<folder>      # obmedziť na priečinok
limit=<n>          # maximálny počet súborov
format=text|json   # formát výstupu (predvolené: text)

total              # vrátiť počet zhôd
case               # rozlišovať malé/veľké písmená
```

### `search:context`

Hľadanie so zodpovedajúcim kontextom riadku. Vráti výstup v štýle grep `cesta:riadok: text`.

```bash
query=<text>       # (required) vyhľadávací dotaz
path=<folder>      # obmedziť na priečinok
limit=<n>          # maximálny počet súborov
format=text|json   # formát výstupu (predvolené: text)

case               # rozlišovať malé/veľké písmená
```

### `search:open`

Otvorenie zobrazenia hľadania.

```bash
query=<text>       # počiatočný vyhľadávací dotaz
```

## Sync

Príkazy pre [[Úvod do Obsidian Sync|Obsidian Sync]].

> [!tip] Synchronizácia bez desktopovej aplikácie
> Tieto príkazy ovládajú Sync v rámci bežiacej aplikácie Obsidian. Na synchronizáciu trezorov z príkazového riadku bez desktopovej aplikácie pozrite si [[Headless Sync]].

### `sync`

Pozastavenie alebo obnovenie synchronizácie.

```bash
on                 # obnoviť synchronizáciu
off                # pozastaviť synchronizáciu
```

### `sync:status`

Zobrazenie stavu synchronizácie a využitia.

### `sync:history`

Výpis histórie verzií synchronizácie pre súbor (predvolené: aktívny súbor).

```bash
file=<name>        # názov súboru
path=<path>        # cesta k súboru

total              # vrátiť počet verzií
```

### `sync:read`

Čítanie verzie synchronizácie (predvolené: aktívny súbor).

```bash
file=<name>        # názov súboru
path=<path>        # cesta k súboru
version=<n>        # (required) číslo verzie
```

### `sync:restore`

Obnovenie verzie synchronizácie (predvolené: aktívny súbor).

```bash
file=<name>        # názov súboru
path=<path>        # cesta k súboru
version=<n>        # (required) číslo verzie
```

### `sync:open`

Otvorenie histórie synchronizácie (predvolené: aktívny súbor).

```bash
file=<name>        # názov súboru
path=<path>        # cesta k súboru
```

### `sync:deleted`

Výpis odstránených súborov v synchronizácii.

```bash
total              # vrátiť počet odstránených súborov
```

## Značky

Príkazy pre [[Značky]].

### `tags`

Výpis značiek v trezore. Použite `active` alebo `file`/`path` na zobrazenie značiek pre konkrétny súbor.

```bash
file=<name>        # názov súboru
path=<path>        # cesta k súboru
sort=count         # zoradiť podľa počtu (predvolené: name)

total              # vrátiť počet značiek
counts             # zahrnúť počty značiek
format=json|tsv|csv  # formát výstupu (predvolené: tsv)
active             # zobraziť značky pre aktívny súbor
```

### `tag`

Získanie informácií o značke.

```bash
name=<tag>         # (required) názov značky

total              # vrátiť počet výskytov
verbose            # zahrnúť zoznam súborov a počet
```

## Úlohy

Príkazy na správu úloh.

### `tasks`

Výpis úloh v trezore. Použite `active` alebo `file`/`path` na zobrazenie úloh pre konkrétny súbor.

```bash
file=<name>        # filtrovať podľa názvu súboru
path=<path>        # filtrovať podľa cesty k súboru
status="<char>"    # filtrovať podľa znaku stavu

total              # vrátiť počet úloh
done               # zobraziť dokončené úlohy
todo               # zobraziť nedokončené úlohy
verbose            # zoskupiť podľa súboru s číslami riadkov
format=json|tsv|csv  # formát výstupu (predvolené: text)
active             # zobraziť úlohy pre aktívny súbor
daily              # zobraziť úlohy z dennej poznámky
```

**Príklady:**

```bash
# Výpis všetkých úloh v trezore
tasks

# Výpis nedokončených úloh v trezore
tasks todo

# Výpis dokončených úloh z konkrétneho súboru
tasks file=Recept done

# Výpis úloh z dnešnej dennej poznámky
tasks daily

# Počet úloh v dennej poznámke
tasks daily total

# Výpis úloh s cestami k súborom a číslami riadkov
tasks verbose

# Filtrovanie podľa vlastného stavu (špeciálne znaky v úvodzovkách)
tasks 'status=?'
```

### `task`

Zobrazenie alebo aktualizácia úlohy.

```bash
ref=<path:line>    # referencia úlohy (cesta:riadok)
file=<name>        # názov súboru
path=<path>        # cesta k súboru
line=<n>           # číslo riadku
status="<char>"    # nastaviť znak stavu

toggle             # prepnúť stav úlohy
daily              # denná poznámka
done               # označiť ako dokončené
todo               # označiť ako nedokončené
```

**Príklady:**

```bash
# Zobrazenie informácií o úlohe
task file=Recept line=8
task ref="Recept.md:8"

# Prepnutie dokončenia úlohy
task ref="Recept.md:8" toggle

# Prepnutie úlohy v dennej poznámke
task daily line=3 toggle

# Nastavenie stavu úlohy
task file=Recept line=8 done      # → [x]
task file=Recept line=8 todo      # → [ ]
task file=Recept line=8 status=-  # → [-]
task daily line=3 done            # Označiť úlohu dennej poznámky ako dokončenú
```


## Šablóny

Príkazy pre [[Šablóny]].

### `templates`

Výpis šablón.

```bash
total              # vrátiť počet šablón
```

### `template:read`

Čítanie obsahu šablóny.

```bash
name=<template>    # (required) názov šablóny
title=<title>      # nadpis pre rozlíšenie premenných

resolve            # rozlíšiť premenné šablóny
```

### `template:insert`

Vloženie šablóny do aktívneho súboru.

```bash
name=<template>    # (required) názov šablóny
```

**Poznámky:**
- Voľba `resolve` spracováva premenné `{{date}}`, `{{time}}`, `{{title}}`
- Použite `create path=<cesta> template=<názov>` na vytvorenie súboru so šablónou

## Témy a snippety

Príkazy pre [[Témy]] a [[CSS snippety]].

### `themes`

Výpis nainštalovaných tém.

```bash
versions           # zahrnúť čísla verzií
```

### `theme`

Zobrazenie aktívnej témy alebo získanie informácií.

```bash
name=<name>        # názov témy pre podrobnosti
```

### `theme:set`

Nastavenie aktívnej témy.

```bash
name=<name>        # (required) názov témy (prázdny pre predvolenú)
```

### `theme:install`

Inštalácia komunitnej témy.

```bash
name=<name>        # (required) názov témy

enable             # aktivovať po inštalácii
```

### `theme:uninstall`

Odinštalovanie témy.

```bash
name=<name>        # (required) názov témy
```

### `snippets`

Výpis nainštalovaných CSS snippetov.

### `snippets:enabled`

Výpis povolených CSS snippetov.

### `snippet:enable`

Zapnutie CSS snippetu.

```bash
name=<name>        # (required) názov snippetu
```

### `snippet:disable`

Vypnutie CSS snippetu.

```bash
name=<name>        # (required) názov snippetu
```

## Unikátne poznámky

Príkazy pre [[Unikátny tvorca poznámok]].

### `unique`

Vytvorenie unikátnej poznámky.

```bash
name=<text>        # názov poznámky
content=<text>     # počiatočný obsah
paneType=tab|split|window    # typ panela na otvorenie

open               # otvoriť súbor po vytvorení
```

## Trezor

### `vault`

Zobrazenie informácií o trezore.

```bash
info=name|path|files|folders|size  # vrátiť iba konkrétne informácie
```

### `vaults`

Výpis známych trezorov.

```bash
total              # vrátiť počet trezorov
verbose            # zahrnúť cesty k trezorom
```

### `vault:open`

Prepnutie na iný trezor (iba v TUI).

```bash
name=<name>        # (required) názov trezoru
```

## Webový prehliadač

Príkazy pre [[Webový prehliadač]].

### `web`

Otvorenie URL vo webovom prehliadači.

```bash
url=<url>          # (required) URL na otvorenie

newtab             # otvoriť v novej karte
```

## Počet slov

Príkazy pre [[Počet slov]].

### `wordcount`

Počítanie slov a znakov (predvolené: aktívny súbor).

```bash
file=<name>        # názov súboru
path=<path>        # cesta k súboru

words              # vrátiť iba počet slov
characters         # vrátiť iba počet znakov
```

## Pracovný priestor

Príkazy pre [[Pracovný priestor]] a plugin [[Pracovné priestory]].

### `workspace`

Zobrazenie stromu pracovného priestoru.

```bash
ids                # zahrnúť ID položiek pracovného priestoru
```

### `workspaces`

Výpis uložených pracovných priestorov.

```bash
total              # vrátiť počet pracovných priestorov
```

### `workspace:save`

Uloženie aktuálneho rozloženia ako pracovného priestoru.

```bash
name=<name>        # názov pracovného priestoru
```

### `workspace:load`

Načítanie uloženého pracovného priestoru.

```bash
name=<name>        # (required) názov pracovného priestoru
```

### `workspace:delete`

Odstránenie uloženého pracovného priestoru.

```bash
name=<name>        # (required) názov pracovného priestoru
```

### `tabs`

Výpis otvorených kariet.

```bash
ids                # zahrnúť ID kariet
```

### `tab:open`

Otvorenie novej karty.

```bash
group=<id>         # ID skupiny kariet
file=<path>        # súbor na otvorenie
view=<type>        # typ zobrazenia na otvorenie
```

### `recents`

Výpis nedávno otvorených súborov.

```bash
total              # vrátiť počet nedávnych súborov
```

## Príkazy pre vývojárov

Príkazy na pomoc pri vývoji [[Komunitné pluginy|komunitných pluginov]] a [[Témy|tém]]. Viac informácií nájdete v [dokumentácii pre vývojárov Obsidian](https://docs.obsidian.md).

### `devtools`

Prepnutie vývojárskych nástrojov Electron.

### `dev:debug`

Pripojenie/odpojenie debuggera Chrome DevTools Protocol.

```bash
on                 # pripojiť debugger
off                # odpojiť debugger
```

### `dev:cdp`

Spustenie príkazu Chrome DevTools Protocol.

```bash
method=<CDP.method>  # (required) metóda CDP na volanie
params=<json>        # parametre metódy ako JSON
```

### `dev:errors`

Zobrazenie zachytených chýb JavaScriptu.

```bash
clear              # vyčistiť zásobník chýb
```

### `dev:screenshot`

Vytvorenie snímky obrazovky (vráti base64 PNG).

```bash
path=<filename>    # cesta k výstupnému súboru
```

### `dev:console`

Zobrazenie zachytených správ konzoly.

```bash
limit=<n>                        # maximálny počet správ na zobrazenie (predvolené 50)
level=log|warn|error|info|debug  # filtrovať podľa úrovne záznamu

clear                            # vyčistiť zásobník konzoly
```

### `dev:css`

Inšpekcia CSS s umiestneniami zdrojov.

```bash
selector=<css>     # (required) CSS selektor
prop=<name>        # filtrovať podľa názvu vlastnosti
```

### `dev:dom`

Dotaz na DOM prvky.

```bash
selector=<css>     # (required) CSS selektor
attr=<name>        # získať hodnotu atribútu
css=<prop>         # získať hodnotu CSS vlastnosti

total              # vrátiť počet prvkov
text               # vrátiť textový obsah
inner              # vrátiť innerHTML namiesto outerHTML
all                # vrátiť všetky zhody namiesto prvej
```

### `dev:mobile`

Prepnutie emulácie mobilného zariadenia.

```bash
on                 # zapnúť emuláciu mobilného zariadenia
off                # vypnúť emuláciu mobilného zariadenia
```

### `eval`

Vykonanie JavaScriptu a vrátenie výsledku.

```bash
code=<javascript>  # (required) kód JavaScript na vykonanie
```

## Klávesové skratky

Tieto skratky sú dostupné v [[#Používanie terminálového rozhrania|TUI]].

### Navigácia

| Akcia                                                            | Skratka         |
| ---------------------------------------------------------------- | --------------- |
| Presunúť kurzor doľava                                          | `←` / `Ctrl+B`  |
| Presunúť kurzor doprava (akceptuje návrh na konci riadku)       | `→` / `Ctrl+F`  |
| Skočiť na začiatok riadku                                       | `Ctrl+A`        |
| Skočiť na koniec riadku                                         | `Ctrl+E`        |
| Presunúť o jedno slovo späť                                     | `Alt+B`         |
| Presunúť o jedno slovo dopredu                                  | `Alt+F`         |

### Úpravy

| Akcia                           | Skratka                     |
| ------------------------------- | --------------------------- |
| Odstrániť po začiatok riadku   | `Ctrl+U`                    |
| Odstrániť po koniec riadku     | `Ctrl+K`                    |
| Odstrániť predchádzajúce slovo | `Ctrl+W` / `Alt+Backspace`  |

### Automatické dopĺňanie

| Akcia                                                        | Skratka      |
| ------------------------------------------------------------ | ------------ |
| Vstúpiť do režimu návrhov / akceptovať vybraný návrh        | `Tab`        |
| Opustiť režim návrhov                                        | `Shift+Tab`  |
| Vstúpiť do režimu návrhov (z čistého vstupu)                | `↓`          |
| Akceptovať prvý/vybraný návrh (na konci riadku)             | `→`          |

### História

| Akcia                                                                      | Skratka         |
| -------------------------------------------------------------------------- | --------------- |
| Predchádzajúca položka histórie / navigácia v návrhoch nahor               | `↑` / `Ctrl+P`  |
| Nasledujúca položka histórie / navigácia v návrhoch nadol                  | `↓` / `Ctrl+N`  |
| Spätné vyhľadávanie v histórii (píšte na filtrovanie, `Ctrl+R` na cyklus) | `Ctrl+R`        |

### Ostatné

| Akcia                                                                   | Skratka              |
| ----------------------------------------------------------------------- | -------------------- |
| Vykonať príkaz alebo akceptovať návrh                                   | `Enter`              |
| Späť automatické dopĺňanie / opustiť režim návrhov / vyčistiť vstup   | `Escape`             |
| Vyčistiť obrazovku                                                      | `Ctrl+L`             |
| Ukončiť                                                                 | `Ctrl+C` / `Ctrl+D`  |

## Riešenie problémov

Ak máte problémy so spustením Obsidian CLI:

- Uistite sa, že používate najnovšiu [[Aktualizovať Obsidian|verziu inštalátora Obsidian]] (1.12.7 alebo vyššiu).
- Ak ste práve aktualizovali Obsidian zo staršej verzie, vypnite nastavenie CLI a znova ho zapnite, potom umožnite Obsidianu vykonať automatickú registráciu PATH.
- Reštartujte terminál po zaregistrovaní CLI, aby sa zmeny PATH prejavili.
- Obsidian musí byť spustený. CLI sa pripája k bežiacej inštancii Obsidian.

### Windows

Obsidian CLI na Windows vyžaduje inštalátor Obsidian 1.12.7+. Pozrite si [[Aktualizovať Obsidian|Aktualizácia verzie inštalátora]].

Windows používa terminálový presmerovač, ktorý správne pripojí Obsidian k stdin/stdout. To je nevyhnutné, pretože Obsidian normálne beží ako GUI aplikácia, čo je nekompatibilné s terminálovými výstupmi na Windows. Keď nainštalujete Obsidian 1.12.7+, terminálový presmerovač `Obsidian.com` bude pridaný do priečinka, kde ste nainštalovali súbor `Obsidian.exe`.

Registrácia CLI pridáva Obsidian do premennej PATH vášho používateľa, čo sa prejaví až po reštarte terminálu.

### macOS

Registrácia CLI vytvára symbolický odkaz na `/usr/local/bin/obsidian` smerujúci na binárny súbor CLI zabalený vo vnútri aplikácie. Toto vyžaduje oprávnenia správcu — budete vyzvaní prostredníctvom systémového dialógu.

Skontrolujte, že symbolický odkaz existuje a smeruje na správny binárny súbor:

```
ls -l /usr/local/bin/obsidian
```

Ak symbolický odkaz chýba, vytvorte ho manuálne:

```
sudo ln -sf /Applications/Obsidian.app/Contents/MacOS/obsidian-cli /usr/local/bin/obsidian
```

> [!note] Ak ste predtým zaregistrovali CLI so staršou verziou Obsidian, môžete mať zostávajúci záznam PATH v `~/.zprofile`. Nový proces registrácie ho odstraňuje automaticky, ale ak zostáva, môžete bezpečne odstrániť riadky začínajúce na `# Added by Obsidian` z `~/.zprofile`.

### Linux

Registrácia CLI skopíruje binárny súbor CLI do `~/.local/bin/obsidian`. Toto sa robí preto, že niektoré metódy inštalácie na Linuxe bežia z dočasných adresárov, na ktoré nie je možné vytvoriť trvalé symbolické odkazy.

Uistite sa, že `~/.local/bin` je vo vašej PATH. Ak nie je, pridajte nasledovné do vášho `~/.bashrc` alebo `~/.zshrc`:

```
export PATH="$PATH:$HOME/.local/bin"
```

Skontrolujte, že binárny súbor existuje:

```
ls -l ~/.local/bin/obsidian
```

Ak binárny súbor chýba, skopírujte ho manuálne z inštalačného adresára Obsidian:

```
cp /path/to/Obsidian/obsidian-cli ~/.local/bin/obsidian
chmod 755 ~/.local/bin/obsidian
```
