---
permalink: cli
description: 'Vše, co můžete dělat v Obsidianu, lze provést z příkazového řádku.'
---
Obsidian CLI je rozhraní příkazového řádku, které umožňuje ovládat Obsidian z terminálu pro skriptování, automatizaci a integraci s externími nástroji.

Cokoli můžete udělat v Obsidian, můžete udělat i z příkazového řádku. Obsidian CLI navíc obsahuje [[#Příkazy pro vývojáře|příkazy pro vývojáře]] pro přístup k vývojářským nástrojům, inspekci prvků, pořizování snímků obrazovky, znovunačtení pluginů a další.

![[obsidian-cli.mp4#interface]]

> [!warning] Vyžaduje instalátor Obsidian 1.12
> Použití CLI vyžaduje instalátor Obsidian 1.12. Viz [[Aktualizace Obsidian#Aktualizace instalátoru|průvodce aktualizací verze instalátoru]].

## Instalace Obsidian CLI

Aktualizujte na nejnovější [[Aktualizace Obsidian|verzi instalátoru Obsidian]] (1.12.7+).

Zapněte Obsidian CLI v Obsidian:

1. Přejděte na **Nastavení** → **Obecné**.
2. Zapněte **Rozhraní příkazového řádku**.
3. Postupujte podle výzvy k zaregistrování Obsidian CLI.

Pokud narazíte na problémy s instalací Obsidian CLI, viz [[#Řešení problémů]].

## Začínáme

Obsidian CLI podporuje jak jednotlivé příkazy, tak terminálové uživatelské rozhraní (TUI) s interaktivní nápovědou a automatickým doplňováním.

> [!info] Aplikace Obsidian musí být spuštěna
> Obsidian CLI vyžaduje, aby aplikace Obsidian byla spuštěna. Pokud Obsidian neběží, první příkaz, který spustíte, Obsidian spustí.
>
> Hledáte synchronizaci bez desktopové aplikace? Viz [[Bezobslužný Sync|Obsidian Headless]].

### Spuštění příkazu

Spusťte jednotlivý příkaz bez otevření TUI:

```shell
# Spuštění příkazu help
obsidian help
```

### Použití terminálového rozhraní

Použijte TUI zadáním `obsidian`. Následné příkazy lze zadávat bez `obsidian`.

```shell
# Otevření TUI, poté spuštění help
obsidian
help
```

TUI podporuje automatické doplňování, historii příkazů a zpětné vyhledávání. Použijte `Ctrl+R` k prohledávání historie příkazů. Viz [[#Klávesové zkratky]] pro všechny dostupné zkratky.

## Příklady

Zde je několik příkladů toho, co Obsidian CLI umí.

### Každodenní použití

```shell
# Otevření dnešní denní poznámky
obsidian daily

# Přidání úkolu do denní poznámky
obsidian daily:append content="- [ ] Nakoupit potraviny"

# Hledání v trezoru
obsidian search query="poznámky ze schůzky"

# Čtení aktivního souboru
obsidian read

# Výpis všech úkolů z denní poznámky
obsidian tasks daily

# Vytvoření nové poznámky ze šablony
obsidian create name="Výlet do Paříže" template=Cestování

# Výpis všech štítků v trezoru s počty
obsidian tags counts

# Porovnání dvou verzí souboru
obsidian diff file=README from=1 to=3
```

### Pro vývojáře

K dispozici je mnoho [[#Příkazy pro vývojáře|příkazů pro vývojáře]] pro vývoj pluginů a motivů. Tyto příkazy umožňují agentickým kódovacím nástrojům automaticky testovat a ladit.

```shell
# Otevření vývojářských nástrojů
obsidian devtools

# Znovunačtení komunitního pluginu, který vyvíjíte
obsidian plugin:reload id=my-plugin

# Pořízení snímku obrazovky aplikace
obsidian dev:screenshot path=screenshot.png

# Spuštění JavaScriptu v konzoli aplikace
obsidian eval code="app.vault.getFiles().length"
```

## Jak na to

### Použití parametrů a příznaků

Příkazy mohou používat **parametry** a **příznaky**. Většina příkazů nevyžaduje žádné parametry ani příznaky. Povinné parametry jsou označeny jako `required`. Například:

```shell
# Vytvoření nové poznámky s výchozím názvem "Bez názvu"
obsidian create
```

**Parametr** přijímá hodnotu, zapsanou jako `parametr=hodnota`. Pokud hodnota obsahuje mezery, uzavřete ji do uvozovek:

```shell
# Vytvoření nové poznámky s názvem "Poznámka" a obsahem "Ahoj světe"
obsidian create name=Poznámka content="Ahoj světe"
```

**Příznak** je logický přepínač bez hodnoty. Zahrňte ho pro zapnutí, například `open` a `overwrite` jsou příznaky:

```shell
# Vytvoření poznámky a její otevření
obsidian create name=Poznámka content="Ahoj" open overwrite
```

Pro víceřádkový obsah použijte `\n` pro nový řádek. Použijte `\t` pro tabulátor.

```bash
obsidian create name=Poznámka content="# Název\n\nText těla"
```

### Zacílení na trezor

Pokud je aktuální pracovní adresář vašeho terminálu složkou trezoru, tento trezor se použije automaticky. Jinak se použije aktuálně aktivní trezor.

Použijte `vault=<název>` nebo `vault=<id>` pro zacílení na konkrétní trezor. Toto musí být první parametr před vaším příkazem:

```shell
obsidian vault=Poznámky daily
obsidian vault="Můj trezor" search query="test"
```

V TUI použijte `vault:open <název>` nebo `<id>` pro přepnutí na jiný trezor.

### Zacílení na soubor

Mnoho příkazů přijímá parametry `file` a `path` pro zacílení na konkrétní soubor. Pokud není žádný z nich uveden, příkaz se standardně vztahuje na aktivní soubor.

- `file=<název>` rozlišuje soubor stejným způsobem jako [[Interní odkazy|wiki odkazy]], odpovídá podle názvu souboru bez nutnosti zadávat celou cestu nebo příponu.
- `path=<cesta>` vyžaduje přesnou cestu od kořene trezoru, např. `složka/poznámka.md`.

```shell
# Tyto příkazy jsou ekvivalentní, pokud je "Recept.md" jediný soubor s tímto názvem
obsidian read file=Recept
obsidian read path="Šablony/Recept.md"
```

### Kopírování výstupu

Přidejte `--copy` k libovolnému příkazu pro zkopírování výstupu do schránky:

```shell
read --copy
search query="TODO" --copy
```


## Obecné příkazy

### `help`

Zobrazení seznamu všech dostupných příkazů.

| Parametr    | Popis                                    |
| ----------- | ---------------------------------------- |
| `<příkaz>`  | Zobrazení nápovědy pro konkrétní příkaz. |

### `version`

Zobrazení verze Obsidian.

### `reload`

Znovunačtení okna aplikace.

### `restart`

Restartování aplikace.


## Základny

Příkazy pro [[Úvod do Základen|Základny]].

### `bases`

Výpis všech souborů `.base` v trezoru.

### `base:views`

Výpis zobrazení v aktuálním souboru základny.

### `base:create`

Vytvoření nové položky v základně. Pokud není určen soubor, použije se aktivní zobrazení základny.

```bash
file=<název>       # název souboru základny
path=<cesta>       # cesta k souboru základny
view=<název>       # název zobrazení
name=<název>       # název nového souboru
content=<text>     # počáteční obsah

open               # otevřít soubor po vytvoření
newtab             # otevřít v nové kartě
```

### `base:query`

Dotaz na základnu a vrácení výsledků.

```bash
file=<název>                   # název souboru základny
path=<cesta>                   # cesta k souboru základny
view=<název>                   # název zobrazení pro dotaz
format=json|csv|tsv|md|paths   # formát výstupu (výchozí: json)
```

## Záložky

Příkazy pro [[Záložky]].

### `bookmarks`

Výpis záložek.

```bash
total              # vrátit počet záložek
verbose            # zahrnout typy záložek
format=json|tsv|csv  # formát výstupu (výchozí: tsv)
```

### `bookmark`

Přidání záložky.

```bash
file=<cesta>       # soubor k přidání do záložek
subpath=<podcesta> # podcesta (nadpis nebo blok) v souboru
folder=<cesta>     # složka k přidání do záložek
search=<dotaz>     # vyhledávací dotaz k přidání do záložek
url=<url>          # URL k přidání do záložek
title=<název>      # název záložky
```

## Paleta příkazů

Příkazy pro [[Paleta příkazů|paletu příkazů]] a [[Klávesové zkratky]]. Zahrnuje všechny příkazy registrované pluginy.

### `commands`

Výpis dostupných ID příkazů.

```bash
filter=<prefix>    # filtrovat podle prefixu ID
```

### `command`

Spuštění příkazu Obsidian.

```bash
id=<id-příkazu>    # (povinné) ID příkazu ke spuštění
```

### `hotkeys`

Výpis klávesových zkratek pro všechny příkazy.

```bash
total              # vrátit počet klávesových zkratek
verbose            # zobrazit, zda je zkratka vlastní
format=json|tsv|csv  # formát výstupu (výchozí: tsv)
```

### `hotkey`

Získání klávesové zkratky pro příkaz.

```bash
id=<id-příkazu>    # (povinné) ID příkazu

verbose            # zobrazit, zda vlastní nebo výchozí
```

## Každodenní poznámky

Příkazy pro [[Každodenní poznámky]].

### `daily`

Otevření denní poznámky.

```bash
paneType=tab|split|window    # typ panelu pro otevření
```

### `daily:path`

Získání cesty k denní poznámce. Vrací očekávanou cestu, i když soubor ještě nebyl vytvořen.

### `daily:read`

Čtení obsahu denní poznámky.

### `daily:append`

Připojení obsahu na konec denní poznámky.

```bash
content=<text>     # (povinné) obsah k připojení
paneType=tab|split|window    # typ panelu pro otevření

inline             # připojit bez nového řádku
open               # otevřít soubor po přidání
```

### `daily:prepend`

Vložení obsahu na začátek denní poznámky.

```bash
content=<text>     # (povinné) obsah k vložení na začátek
paneType=tab|split|window    # typ panelu pro otevření

inline             # vložit bez nového řádku
open               # otevřít soubor po přidání
```

## Historie souborů

### `diff`

Výpis nebo porovnání verzí z místního [[Obnovení souborů|obnovení souborů]] a [[Úvod do Obsidian Sync|Sync]]. Verze jsou číslovány od nejnovější po nejstarší.

```bash
file=<název>         # název souboru
path=<cesta>         # cesta k souboru
from=<n>             # číslo verze pro porovnání od
to=<n>               # číslo verze pro porovnání do
filter=local|sync    # filtrovat podle zdroje verze
```

**Příklady:**

```shell
# Výpis všech verzí aktivního souboru
diff

# Výpis všech verzí konkrétního souboru
diff file=Recept

# Porovnání nejnovější verze s aktuálním souborem
diff file=Recept from=1

# Porovnání dvou verzí
diff file=Recept from=2 to=1

# Zobrazení pouze verzí ze Sync
diff filter=sync
```

### `history`

Výpis verzí pouze z [[Obnovení souborů]]. Viz [[#Sync|sync:history]] pro ekvivalentní příkaz Sync.

```bash
file=<název>       # název souboru
path=<cesta>       # cesta k souboru
```

### `history:list`

Výpis všech souborů s místní historií.

### `history:read`

Čtení verze z místní historie.

```bash
file=<název>       # název souboru
path=<cesta>       # cesta k souboru
version=<n>        # číslo verze (výchozí: 1)
```

### `history:restore`

Obnovení verze z místní historie.

```bash
file=<název>       # název souboru
path=<cesta>       # cesta k souboru
version=<n>        # (povinné) číslo verze
```

### `history:open`

Otevření obnovení souborů.

```bash
file=<název>       # název souboru
path=<cesta>       # cesta k souboru
```

## Soubory a složky

### `file`

Zobrazení informací o souboru (výchozí: aktivní soubor).

```bash
file=<název>       # název souboru
path=<cesta>       # cesta k souboru
```

Příklad:

```
path       Poznámky/Recept.md
name       Recept
extension  md
size       1024
created    1700000000000
modified   1700001000000
```

### `files`

Výpis souborů v trezoru.

```bash
folder=<cesta>     # filtrovat podle složky
ext=<přípona>      # filtrovat podle přípony

total              # vrátit počet souborů
```

### `folder`

Zobrazení informací o složce.

```bash
path=<cesta>             # (povinné) cesta ke složce
info=files|folders|size  # vrátit pouze konkrétní informaci
```

### `folders`

Výpis složek v trezoru.

```bash
folder=<cesta>     # filtrovat podle nadřazené složky

total              # vrátit počet složek
```

### `open`

Otevření souboru.

```bash
file=<název>       # název souboru
path=<cesta>       # cesta k souboru

newtab             # otevřít v nové kartě
```

### `create`

Vytvoření nebo přepsání souboru.

```bash
name=<název>       # název souboru
path=<cesta>       # cesta k souboru
content=<text>     # počáteční obsah
template=<název>   # šablona k použití

overwrite          # přepsat, pokud soubor existuje
open               # otevřít soubor po vytvoření
newtab             # otevřít v nové kartě
```

### `read`

Čtení obsahu souboru (výchozí: aktivní soubor).

```bash
file=<název>       # název souboru
path=<cesta>       # cesta k souboru
```

### `append`

Připojení obsahu na konec souboru (výchozí: aktivní soubor).

```bash
file=<název>       # název souboru
path=<cesta>       # cesta k souboru
content=<text>     # (povinné) obsah k připojení

inline             # připojit bez nového řádku
```

### `prepend`

Vložení obsahu za úvodní metadata (výchozí: aktivní soubor).

```bash
file=<název>       # název souboru
path=<cesta>       # cesta k souboru
content=<text>     # (povinné) obsah k vložení na začátek

inline             # vložit bez nového řádku
```

### `move`

Přesunutí nebo přejmenování souboru (výchozí: aktivní soubor). Automaticky aktualizuje [[Interní odkazy|interní odkazy]], pokud je tato funkce zapnutá v [[Nastavení#Vždy aktualizovat interní odkazy|nastavení trezoru]].

```bash
file=<název>       # název souboru
path=<cesta>       # cesta k souboru
to=<cesta>         # (povinné) cílová složka nebo cesta
```

### `rename`

Přejmenování souboru (výchozí: aktivní soubor). Přípona souboru je automaticky zachována, pokud není v novém názvu uvedena. Použijte [[#`move`|move]] pro současné přejmenování a přesunutí souboru. Automaticky aktualizuje [[Interní odkazy|interní odkazy]], pokud je tato funkce zapnutá v [[Nastavení#Vždy aktualizovat interní odkazy|nastavení trezoru]].

```bash
file=<název>       # název souboru
path=<cesta>       # cesta k souboru
name=<název>       # (povinné) nový název souboru
```

### `delete`

Smazání souboru (výchozí: aktivní soubor, standardně do koše).

```bash
file=<název>       # název souboru
path=<cesta>       # cesta k souboru

permanent          # přeskočit koš, smazat trvale
```

## Odkazy

Příkazy pro [[Zpětné odkazy]] a [[Odchozí odkazy]].

### `backlinks`

Výpis zpětných odkazů na soubor (výchozí: aktivní soubor).

```bash
file=<název>       # název cílového souboru
path=<cesta>       # cesta k cílovému souboru

counts             # zahrnout počty odkazů
total              # vrátit počet zpětných odkazů
format=json|tsv|csv  # formát výstupu (výchozí: tsv)
```

### `links`

Výpis odchozích odkazů ze souboru (výchozí: aktivní soubor).

```bash
file=<název>       # název souboru
path=<cesta>       # cesta k souboru

total              # vrátit počet odkazů
```

### `unresolved`

Výpis nevyřešených odkazů v trezoru.

```bash
total              # vrátit počet nevyřešených odkazů
counts             # zahrnout počty odkazů
verbose            # zahrnout zdrojové soubory
format=json|tsv|csv  # formát výstupu (výchozí: tsv)
```

### `orphans`

Výpis souborů bez příchozích odkazů.

```bash
total              # vrátit počet sirotků
```

### `deadends`

Výpis souborů bez odchozích odkazů.

```bash
total              # vrátit počet slepých konců
```

## Osnova

Příkazy pro [[Přehled]].

### `outline`

Zobrazení nadpisů aktuálního souboru.

```bash
file=<název>       # název souboru
path=<cesta>       # cesta k souboru
format=tree|md|json  # formát výstupu (výchozí: tree)

total              # vrátit počet nadpisů
```

## Pluginy

Příkazy pro [[Základní pluginy]] a [[Komunitní pluginy]].

### `plugins`

Výpis nainstalovaných pluginů.

```bash
filter=core|community  # filtrovat podle typu pluginu

versions               # zahrnout čísla verzí
format=json|tsv|csv    # formát výstupu (výchozí: tsv)
```

### `plugins:enabled`

Výpis zapnutých pluginů.

```bash
filter=core|community  # filtrovat podle typu pluginu

versions               # zahrnout čísla verzí
format=json|tsv|csv    # formát výstupu (výchozí: tsv)
```

### `plugins:restrict`

Přepnutí nebo kontrola omezeného režimu.

```bash
on                 # zapnout omezený režim
off                # vypnout omezený režim
```

### `plugin`

Získání informací o pluginu.

```bash
id=<id-pluginu>    # (povinné) ID pluginu
```

### `plugin:enable`

Zapnutí pluginu.

```bash
id=<id>                # (povinné) ID pluginu
filter=core|community  # typ pluginu
```

### `plugin:disable`

Vypnutí pluginu.

```bash
id=<id>                # (povinné) ID pluginu
filter=core|community  # typ pluginu
```

### `plugin:install`

Instalace komunitního pluginu.

```bash
id=<id>            # (povinné) ID pluginu

enable             # zapnout po instalaci
```

### `plugin:uninstall`

Odinstalace komunitního pluginu.

```bash
id=<id>            # (povinné) ID pluginu
```

### `plugin:reload`

Znovunačtení pluginu (pro vývojáře).

```bash
id=<id>            # (povinné) ID pluginu
```

## Vlastnosti

Příkazy související s [[Vlastnosti|vlastnostmi]].

### `aliases`

Výpis aliasů v trezoru. Použijte `active` nebo `file`/`path` pro zobrazení aliasů konkrétního souboru.

```bash
file=<název>       # název souboru
path=<cesta>       # cesta k souboru

total              # vrátit počet aliasů
verbose            # zahrnout cesty k souborům
active             # zobrazit aliasy aktivního souboru
```

### `properties`

Výpis vlastností v trezoru. Použijte `active` nebo `file`/`path` pro zobrazení vlastností konkrétního souboru.

```bash
file=<název>       # zobrazit vlastnosti souboru
path=<cesta>       # zobrazit vlastnosti pro cestu
name=<název>       # získat počet konkrétní vlastnosti
sort=count         # seřadit podle počtu (výchozí: název)
format=yaml|json|tsv  # formát výstupu (výchozí: yaml)

total              # vrátit počet vlastností
counts             # zahrnout počty výskytů
active             # zobrazit vlastnosti aktivního souboru
```

### `property:set`

Nastavení vlastnosti souboru (výchozí: aktivní soubor).

```bash
name=<název>                                   # (povinné) název vlastnosti
value=<hodnota>                                # (povinné) hodnota vlastnosti
type=text|list|number|checkbox|date|datetime   # typ vlastnosti
file=<název>                                   # název souboru
path=<cesta>                                   # cesta k souboru
```

### `property:remove`

Odebrání vlastnosti ze souboru (výchozí: aktivní soubor).

```bash
name=<název>       # (povinné) název vlastnosti
file=<název>       # název souboru
path=<cesta>       # cesta k souboru
```

### `property:read`

Čtení hodnoty vlastnosti ze souboru (výchozí: aktivní soubor).

```bash
name=<název>       # (povinné) název vlastnosti
file=<název>       # název souboru
path=<cesta>       # cesta k souboru
```

## Publish

Příkazy pro [[Úvod do Obsidian Publish|Obsidian Publish]].

### `publish:site`

Zobrazení informací o publikačním webu (slug, URL).

### `publish:list`

Výpis publikovaných souborů.

```bash
total              # vrátit počet publikovaných souborů
```

### `publish:status`

Výpis změn k publikování.

```bash
total              # vrátit počet změn
new                # zobrazit pouze nové soubory
changed            # zobrazit pouze změněné soubory
deleted            # zobrazit pouze smazané soubory
```

### `publish:add`

Publikování souboru nebo všech změněných souborů (výchozí: aktivní soubor).

```bash
file=<název>       # název souboru
path=<cesta>       # cesta k souboru

changed            # publikovat všechny změněné soubory
```

### `publish:remove`

Zrušení publikování souboru (výchozí: aktivní soubor).

```bash
file=<název>       # název souboru
path=<cesta>       # cesta k souboru
```

### `publish:open`

Otevření souboru na publikovaném webu (výchozí: aktivní soubor).

```bash
file=<název>       # název souboru
path=<cesta>       # cesta k souboru
```

## Náhodné poznámky

Příkazy pro [[Náhodná poznámka|náhodnou poznámku]].

### `random`

Otevření náhodné poznámky.

```bash
folder=<cesta>     # omezit na složku

newtab             # otevřít v nové kartě
```

### `random:read`

Čtení náhodné poznámky (zahrnuje cestu).

```bash
folder=<cesta>     # omezit na složku
```

## Hledání

Příkazy pro [[Hledat|hledání]].

### `search`

Hledání textu v trezoru. Vrací cesty odpovídajících souborů.

```bash
query=<text>       # (povinné) vyhledávací dotaz
path=<složka>      # omezit na složku
limit=<n>          # maximální počet souborů
format=text|json   # formát výstupu (výchozí: text)

total              # vrátit počet shod
case               # rozlišovat malá a velká písmena
```

### `search:context`

Hledání s kontextem odpovídajícího řádku. Vrací výstup ve stylu grep `cesta:řádek: text`.

```bash
query=<text>       # (povinné) vyhledávací dotaz
path=<složka>      # omezit na složku
limit=<n>          # maximální počet souborů
format=text|json   # formát výstupu (výchozí: text)

case               # rozlišovat malá a velká písmena
```

### `search:open`

Otevření zobrazení hledání.

```bash
query=<text>       # počáteční vyhledávací dotaz
```

## Sync

Příkazy pro [[Úvod do Obsidian Sync|Obsidian Sync]].

> [!tip] Synchronizace bez desktopové aplikace
> Tyto příkazy ovládají Sync v rámci běžící aplikace Obsidian. Pro synchronizaci trezorů z příkazového řádku bez desktopové aplikace viz [[Bezobslužný Sync]].

### `sync`

Pozastavení nebo obnovení synchronizace.

```bash
on                 # obnovit synchronizaci
off                # pozastavit synchronizaci
```

### `sync:status`

Zobrazení stavu synchronizace a využití.

### `sync:history`

Výpis historie verzí synchronizace pro soubor (výchozí: aktivní soubor).

```bash
file=<název>       # název souboru
path=<cesta>       # cesta k souboru

total              # vrátit počet verzí
```

### `sync:read`

Čtení verze ze synchronizace (výchozí: aktivní soubor).

```bash
file=<název>       # název souboru
path=<cesta>       # cesta k souboru
version=<n>        # (povinné) číslo verze
```

### `sync:restore`

Obnovení verze ze synchronizace (výchozí: aktivní soubor).

```bash
file=<název>       # název souboru
path=<cesta>       # cesta k souboru
version=<n>        # (povinné) číslo verze
```

### `sync:open`

Otevření historie synchronizace (výchozí: aktivní soubor).

```bash
file=<název>       # název souboru
path=<cesta>       # cesta k souboru
```

### `sync:deleted`

Výpis smazaných souborů v synchronizaci.

```bash
total              # vrátit počet smazaných souborů
```

## Štítky

Příkazy pro [[Tagy|štítky]].

### `tags`

Výpis štítků v trezoru. Použijte `active` nebo `file`/`path` pro zobrazení štítků konkrétního souboru.

```bash
file=<název>       # název souboru
path=<cesta>       # cesta k souboru
sort=count         # seřadit podle počtu (výchozí: název)

total              # vrátit počet štítků
counts             # zahrnout počty štítků
format=json|tsv|csv  # formát výstupu (výchozí: tsv)
active             # zobrazit štítky aktivního souboru
```

### `tag`

Získání informací o štítku.

```bash
name=<štítek>      # (povinné) název štítku

total              # vrátit počet výskytů
verbose            # zahrnout seznam souborů a počet
```

## Úkoly

Příkazy pro správu úkolů.

### `tasks`

Výpis úkolů v trezoru. Použijte `active` nebo `file`/`path` pro zobrazení úkolů konkrétního souboru.

```bash
file=<název>       # filtrovat podle názvu souboru
path=<cesta>       # filtrovat podle cesty k souboru
status="<znak>"    # filtrovat podle znaku stavu

total              # vrátit počet úkolů
done               # zobrazit dokončené úkoly
todo               # zobrazit nedokončené úkoly
verbose            # seskupit podle souboru s čísly řádků
format=json|tsv|csv  # formát výstupu (výchozí: text)
active             # zobrazit úkoly aktivního souboru
daily              # zobrazit úkoly z denní poznámky
```

**Příklady:**

```bash
# Výpis všech úkolů v trezoru
tasks

# Výpis nedokončených úkolů v trezoru
tasks todo

# Výpis dokončených úkolů z konkrétního souboru
tasks file=Recept done

# Výpis úkolů z dnešní denní poznámky
tasks daily

# Počet úkolů v denní poznámce
tasks daily total

# Výpis úkolů s cestami k souborům a čísly řádků
tasks verbose

# Filtrování podle vlastního stavu (speciální znaky v uvozovkách)
tasks 'status=?'
```

### `task`

Zobrazení nebo aktualizace úkolu.

```bash
ref=<cesta:řádek>  # odkaz na úkol (cesta:řádek)
file=<název>       # název souboru
path=<cesta>       # cesta k souboru
line=<n>           # číslo řádku
status="<znak>"    # nastavit znak stavu

toggle             # přepnout stav úkolu
daily              # denní poznámka
done               # označit jako dokončeno
todo               # označit jako nedokončeno
```

**Příklady:**

```bash
# Zobrazení informací o úkolu
task file=Recept line=8
task ref="Recept.md:8"

# Přepnutí dokončení úkolu
task ref="Recept.md:8" toggle

# Přepnutí úkolu v denní poznámce
task daily line=3 toggle

# Nastavení stavu úkolu
task file=Recept line=8 done      # → [x]
task file=Recept line=8 todo      # → [ ]
task file=Recept line=8 status=-  # → [-]
task daily line=3 done            # Označit úkol v denní poznámce jako dokončený
```


## Šablony

Příkazy pro [[Šablony]].

### `templates`

Výpis šablon.

```bash
total              # vrátit počet šablon
```

### `template:read`

Čtení obsahu šablony.

```bash
name=<šablona>     # (povinné) název šablony
title=<název>      # název pro rozlišení proměnných

resolve            # vyhodnotit proměnné šablony
```

### `template:insert`

Vložení šablony do aktivního souboru.

```bash
name=<šablona>     # (povinné) název šablony
```

**Poznámky:**
- Volba `resolve` zpracovává proměnné `{{date}}`, `{{time}}`, `{{title}}`
- Použijte `create path=<cesta> template=<název>` pro vytvoření souboru se šablonou

## Motivy a úryvky

Příkazy pro [[Motivy]] a [[CSS úryvky]].

### `themes`

Výpis nainstalovaných motivů.

```bash
versions           # zahrnout čísla verzí
```

### `theme`

Zobrazení aktivního motivu nebo získání informací.

```bash
name=<název>       # název motivu pro podrobnosti
```

### `theme:set`

Nastavení aktivního motivu.

```bash
name=<název>       # (povinné) název motivu (prázdné pro výchozí)
```

### `theme:install`

Instalace komunitního motivu.

```bash
name=<název>       # (povinné) název motivu

enable             # aktivovat po instalaci
```

### `theme:uninstall`

Odinstalace motivu.

```bash
name=<název>       # (povinné) název motivu
```

### `snippets`

Výpis nainstalovaných CSS úryvků.

### `snippets:enabled`

Výpis zapnutých CSS úryvků.

### `snippet:enable`

Zapnutí CSS úryvku.

```bash
name=<název>       # (povinné) název úryvku
```

### `snippet:disable`

Vypnutí CSS úryvku.

```bash
name=<název>       # (povinné) název úryvku
```

## Jedinečné poznámky

Příkazy pro [[Tvůrce jedinečných poznámek]].

### `unique`

Vytvoření jedinečné poznámky.

```bash
name=<text>        # název poznámky
content=<text>     # počáteční obsah
paneType=tab|split|window    # typ panelu pro otevření

open               # otevřít soubor po vytvoření
```

## Trezor

### `vault`

Zobrazení informací o trezoru.

```bash
info=name|path|files|folders|size  # vrátit pouze konkrétní informaci
```

### `vaults`

Výpis známých trezorů.

```bash
total              # vrátit počet trezorů
verbose            # zahrnout cesty k trezorům
```

### `vault:open`

Přepnutí na jiný trezor (pouze v TUI).

```bash
name=<název>       # (povinné) název trezoru
```

## Webový prohlížeč

Příkazy pro [[Webový prohlížeč]].

### `web`

Otevření URL ve webovém prohlížeči.

```bash
url=<url>          # (povinné) URL k otevření

newtab             # otevřít v nové kartě
```

## Počet slov

Příkazy pro [[Počet slov]].

### `wordcount`

Počítání slov a znaků (výchozí: aktivní soubor).

```bash
file=<název>       # název souboru
path=<cesta>       # cesta k souboru

words              # vrátit pouze počet slov
characters         # vrátit pouze počet znaků
```

## Pracovní prostor

Příkazy pro [[Pracovní prostor]] a plugin [[Pracovní prostory]].

### `workspace`

Zobrazení stromu pracovního prostoru.

```bash
ids                # zahrnout ID položek pracovního prostoru
```

### `workspaces`

Výpis uložených pracovních prostorů.

```bash
total              # vrátit počet pracovních prostorů
```

### `workspace:save`

Uložení aktuálního rozvržení jako pracovní prostor.

```bash
name=<název>       # název pracovního prostoru
```

### `workspace:load`

Načtení uloženého pracovního prostoru.

```bash
name=<název>       # (povinné) název pracovního prostoru
```

### `workspace:delete`

Smazání uloženého pracovního prostoru.

```bash
name=<název>       # (povinné) název pracovního prostoru
```

### `tabs`

Výpis otevřených karet.

```bash
ids                # zahrnout ID karet
```

### `tab:open`

Otevření nové karty.

```bash
group=<id>         # ID skupiny karet
file=<cesta>       # soubor k otevření
view=<typ>         # typ zobrazení k otevření
```

### `recents`

Výpis naposledy otevřených souborů.

```bash
total              # vrátit počet nedávných souborů
```

## Příkazy pro vývojáře

Příkazy, které vám pomohou s vývojem [[Komunitní pluginy|komunitních pluginů]] a [[Motivy|motivů]]. Zjistěte více v [dokumentaci pro vývojáře Obsidian](https://docs.obsidian.md).

### `devtools`

Přepnutí vývojářských nástrojů Electron.

### `dev:debug`

Připojení/odpojení debuggeru Chrome DevTools Protocol.

```bash
on                 # připojit debugger
off                # odpojit debugger
```

### `dev:cdp`

Spuštění příkazu Chrome DevTools Protocol.

```bash
method=<CDP.metoda>  # (povinné) CDP metoda k volání
params=<json>        # parametry metody jako JSON
```

### `dev:errors`

Zobrazení zachycených chyb JavaScriptu.

```bash
clear              # vymazat vyrovnávací paměť chyb
```

### `dev:screenshot`

Pořízení snímku obrazovky (vrací base64 PNG).

```bash
path=<soubor>      # cesta výstupního souboru
```

### `dev:console`

Zobrazení zachycených zpráv konzole.

```bash
limit=<n>                        # maximální počet zpráv k zobrazení (výchozí 50)
level=log|warn|error|info|debug  # filtrovat podle úrovně logu

clear                            # vymazat vyrovnávací paměť konzole
```

### `dev:css`

Inspekce CSS se zdrojovými umístěními.

```bash
selector=<css>     # (povinné) CSS selektor
prop=<název>       # filtrovat podle názvu vlastnosti
```

### `dev:dom`

Dotazování DOM prvků.

```bash
selector=<css>     # (povinné) CSS selektor
attr=<název>       # získat hodnotu atributu
css=<vlastnost>    # získat hodnotu CSS vlastnosti

total              # vrátit počet prvků
text               # vrátit textový obsah
inner              # vrátit innerHTML místo outerHTML
all                # vrátit všechny shody místo první
```

### `dev:mobile`

Přepnutí emulace mobilního zařízení.

```bash
on                 # zapnout emulaci mobilního zařízení
off                # vypnout emulaci mobilního zařízení
```

### `eval`

Spuštění JavaScriptu a vrácení výsledku.

```bash
code=<javascript>  # (povinné) kód JavaScriptu ke spuštění
```

## Klávesové zkratky

Tyto zkratky jsou dostupné v [[#Použití terminálového rozhraní|TUI]].

### Navigace

| Akce                                                    | Zkratka        |
| ------------------------------------------------------- | -------------- |
| Přesun kurzoru vlevo                                    | `←` / `Ctrl+B` |
| Přesun kurzoru vpravo (přijme návrh na konci řádku)     | `→` / `Ctrl+F` |
| Skok na začátek řádku                                   | `Ctrl+A`       |
| Skok na konec řádku                                     | `Ctrl+E`       |
| Přesun o jedno slovo zpět                               | `Alt+B`        |
| Přesun o jedno slovo vpřed                              | `Alt+F`        |

### Úpravy

| Akce                         | Zkratka                    |
| ---------------------------- | -------------------------- |
| Smazat na začátek řádku      | `Ctrl+U`                   |
| Smazat na konec řádku        | `Ctrl+K`                   |
| Smazat předchozí slovo       | `Ctrl+W` / `Alt+Backspace` |

### Automatické doplňování

| Akce                                                   | Zkratka     |
| ------------------------------------------------------ | ----------- |
| Vstup do režimu návrhů / přijetí vybraného návrhu      | `Tab`       |
| Opuštění režimu návrhů                                 | `Shift+Tab` |
| Vstup do režimu návrhů (z čerstvého vstupu)            | `↓`         |
| Přijetí prvního/vybraného návrhu (na konci řádku)      | `→`         |

### Historie

| Akce                                                           | Zkratka        |
| -------------------------------------------------------------- | -------------- |
| Předchozí položka historie / navigace návrhů nahoru            | `↑` / `Ctrl+P` |
| Následující položka historie / navigace návrhů dolů            | `↓` / `Ctrl+N` |
| Zpětné vyhledávání v historii (psaním filtrujte, `Ctrl+R` pro cyklování) | `Ctrl+R`       |

### Ostatní

| Akce                                                        | Zkratka             |
| ----------------------------------------------------------- | ------------------- |
| Spuštění příkazu nebo přijetí návrhu                        | `Enter`             |
| Vrácení automatického doplnění / opuštění návrhů / vymazání vstupu | `Escape`            |
| Vymazání obrazovky                                          | `Ctrl+L`            |
| Ukončení                                                    | `Ctrl+C` / `Ctrl+D` |

## Řešení problémů

Pokud máte problémy se spuštěním Obsidian CLI:

- Ujistěte se, že používáte nejnovější [[Aktualizace Obsidian|verzi instalátoru Obsidian]] (1.12.7 nebo vyšší).
- Pokud jste právě aktualizovali Obsidian ze starší verze, vypněte nastavení CLI a znovu ho zapněte, poté nechte Obsidian provést automatickou registraci PATH.
- Po zaregistrování CLI restartujte terminál, aby se změny PATH projevily.
- Obsidian musí být spuštěn. CLI se připojuje k běžící instanci Obsidian.

### Windows

Obsidian CLI na Windows vyžaduje instalátor Obsidian 1.12.7+. Viz [[Aktualizace Obsidian|aktualizace verze instalátoru]].

Windows používá terminálový přesměrovač, který správně propojuje Obsidian se stdin/stdout. To je nutné, protože Obsidian normálně běží jako GUI aplikace, která je na Windows nekompatibilní s terminálovými výstupy. Při instalaci Obsidian 1.12.7+ bude terminálový přesměrovač `Obsidian.com` přidán do složky, kde jste nainstalovali soubor `Obsidian.exe`.

Registrace CLI přidá Obsidian do uživatelské proměnné PATH, která se projeví až po restartování terminálu.

### macOS

Registrace CLI vytvoří symbolický odkaz na `/usr/local/bin/obsidian` směřující na binární soubor CLI přibalený uvnitř aplikace. To vyžaduje oprávnění správce — budete vyzváni přes systémový dialog.

Ověřte, že symbolický odkaz existuje a směřuje na správný binární soubor:

```
ls -l /usr/local/bin/obsidian
```

Pokud symbolický odkaz chybí, vytvořte ho ručně:

```
sudo ln -sf /Applications/Obsidian.app/Contents/MacOS/obsidian-cli /usr/local/bin/obsidian
```

> [!note] Pokud jste dříve zaregistrovali CLI se starší verzí Obsidian, může vám v `~/.zprofile` zůstat záznam PATH. Nový proces registrace ho odstraní automaticky, ale pokud zůstane, můžete bezpečně smazat řádky začínající `# Added by Obsidian` z `~/.zprofile`.

### Linux

Registrace CLI zkopíruje binární soubor CLI do `~/.local/bin/obsidian`. To se provádí proto, že některé metody instalace na Linuxu běží z dočasných adresářů, které nelze trvale propojit symbolickými odkazy.

Ujistěte se, že `~/.local/bin` je ve vaší PATH. Pokud není, přidejte následující do vašeho `~/.bashrc` nebo `~/.zshrc`:

```
export PATH="$PATH:$HOME/.local/bin"
```

Ověřte, že binární soubor existuje:

```
ls -l ~/.local/bin/obsidian
```

Pokud binární soubor chybí, zkopírujte ho ručně z instalačního adresáře Obsidian:

```
cp /cesta/k/Obsidian/obsidian-cli ~/.local/bin/obsidian
chmod 755 ~/.local/bin/obsidian
```
