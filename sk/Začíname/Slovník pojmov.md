---
permalink: glossary
---
Tento slovník obsahuje bežnú terminológiu Obsidian.

## Alias

**Alias** je typ [[#vlastnosť|vlastnosti]], ktorý definuje alternatívne názvy pre [[#poznámka|poznámku]].

## Príloha

**Príloha** je [[Akceptované formáty súborov|akceptovaný formát súboru]], ktorý bol vytvorený mimo trezora a pridaný neskôr.

## Príkaz

**Príkaz** je akcia, ktorú je možné vykonať buď výberom z [[Paleta príkazov|palety príkazov]], alebo priradením [[#klávesová skratka|klávesovej skratky]].

## Vloženie

**Vloženie** znamená nahradenie odkazu na externý obsah samotným obsahom, napríklad vloženie obrázka do poznámky. Pozri tiež [[Vkladanie súborov]].

## Úvodné metadáta

Úvodné metadáta sú spôsob definovania [[#vlastnosť|vlastností]] pridaním [YAML](https://yaml.org/) alebo [JSON](https://www.json.org/) na začiatok poznámky. Pozri tiež [[Vlastnosti#Formát vlastností|Formát vlastností]].

## Graf

**Graf** je vizualizácia, ktorá zvýrazňuje prepojenia medzi [[#poznámka|poznámkami]]. Pozri tiež [[Graf]].

## Klávesová skratka

**Klávesová skratka** je klávesová kombinácia pre [[#príkaz]]. Pozri tiež [[Klávesové skratky]] a [[Klávesové skratky|Ako používať klávesové skratky]].

## Odkaz

**Odkaz** odkazuje na inú poznámku alebo súbor. [[Interné odkazy|Interný odkaz]] smeruje na súbor nachádzajúci sa v aktuálnom trezore. [[Základná syntax formátovania#Externé odkazy|Externý odkaz]] smeruje na umiestnenie mimo trezora, zvyčajne na webovú stránku.

## Hlavná oblasť

**Hlavná oblasť** je centrálna oblasť aplikácie Obsidian, kde primárne upravujete [[#poznámka|poznámky]].

## Markdown

Markdown je značkovací jazyk na formátovanie textu a primárny formát súborov používaný pre poznámky v Obsidian, súbory `.md`. Pozri tiež [[Základná syntax formátovania]].

## Poznámka

**Poznámka** je Markdown súbor vo vnútri [[#trezor|trezora]].

## Plugin

**Plugin** rozširuje Obsidian o ďalšie funkcie.

- [[Vstavané pluginy]] sú napísané tímom Obsidian a sú predvolene zahrnuté.
- [[Komunitné pluginy]] sú napísané vývojármi tretích strán a pred ich použitím je potrebné ich [[Komunitné pluginy#Inštalácia komunitného pluginu|nainštalovať]].

Môžete si [vytvoriť vlastný plugin](https://docs.obsidian.md/Plugins/Getting+started/Build+a+plugin).

## Vyskakovacie okno

V predvolenom nastavení sa všetky poznámky v trezore otvárajú v tom istom okne aplikácie. **Vyskakovacie okno** umožňuje otvárať poznámky z rovnakého trezora v samostatných oknách, napríklad na zobrazenie na druhom monitore.

Pozri tiež [[Vyskakovacie okná]].

## Vlastnosť

[[Vlastnosti]] definujú ďalšie informácie o poznámke, ako napríklad termín alebo autora.

## Panel nástrojov

**Panel nástrojov** (ribbon) slúži ako kontajner pre často používané ikony akcií.

V desktopovej verzii je to vertikálna oblasť umiestnená úplne vľavo.

V mobilnej verzii je reprezentovaný tlačidlom menu ![[lucide-menu.svg#icon]] na [[#stavový riadok|stavovom riadku]].

## Bočný panel

Oblasť, ktorá obsahuje podporné [[#zobrazenie|zobrazenia]] organizované ako [[#karta|karty]]. Bočný panel môže byť rozdelený do viacerých [[#skupina kariet|skupín kariet]].

Obsidian na desktope má dva bočné panely, jeden na každej strane [[#hlavná oblasť|hlavnej oblasti]]. Oba bočné panely sú prístupné cez ikony v ľavom hornom a pravom hornom rohu aplikácie Obsidian, okrem potiahnutia doľava alebo doprava. Ikonu v pravom hornom rohu je potrebné podržať na otvorenie okna.

## Úryvok

**Úryvok**, alebo [[CSS snippety|CSS úryvok]], mení vzhľad Obsidian, rovnako ako [[#téma]]. Na rozdiel od tém môžete aplikovať viacero úryvkov súčasne.

## Stavový riadok

**Stavový riadok** v aplikácii Obsidian zobrazuje základné štatistiky a stavy. V desktopovej verzii ho nájdete v pravom dolnom rohu, zatiaľ čo na mobilných zariadeniach je umiestnený v dolnej časti aplikácie.


## Karta

**Karta** obsahuje [[#zobrazenie]]. Karty je možné premiestňovať v rámci [[#hlavná oblasť|hlavnej oblasti]] a [[#bočný panel|bočných panelov]]. Pozri tiež [[Karty]].

## Skupina kariet

**Skupina kariet** je kolekcia [[#karta|kariet]] v [[#hlavná oblasť|hlavnej oblasti]]. Karty v skupine kariet môžu byť naskladané.

## Značka

**Značka** je slovo, ktoré začína mriežkou (`#`), napríklad `#kniha`. Značky sa primárne používajú na vyhľadávanie súvisiacich [[#poznámka|poznámok]].

## Téma

**Téma** mení vzhľad aplikácie Obsidian pomocou [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS). Časti témy môžete prepísať pomocou [[#úryvok|úryvkov]].

## Trezor

`Aliasy: lokálny trezor, lokálne dáta`

**Trezor** je priečinok vo vašom súborovom systéme, ktorý obsahuje [[#poznámka|poznámky]] a priečinok `.obsidian` s konfiguráciou špecifickou pre Obsidian. Pozri tiež [[Ako Obsidian ukladá dáta]].

### Vzdialený trezor

`Aliasy: Vzdialené dáta`

[[Lokálne a vzdialené trezory|Vzdialený trezor]] je kópia vášho lokálneho trezora, ktorá je udržiavaná pomocou [[Úvod do Obsidian Sync|Obsidian Sync]]. Dáta vzdialeného trezora sa aktualizujú na základe zmien v lokálnych dátach.

## Zobrazenie

**Zobrazenie** zobrazuje informácie, napríklad [[Hľadať|zobrazenie Hľadať]].
