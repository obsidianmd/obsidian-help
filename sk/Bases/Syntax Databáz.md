---
permalink: bases/syntax
publish: true
mobile: true
description: Táto stránka poskytuje úvod do syntaxe Bases v Obsidian.
---
Keď [[Vytvorenie databázy|vytvoríte databázu]] v Obsidian, uloží sa ako súbor `.base`. Databázy sa zvyčajne upravujú pomocou rozhrania aplikácie, ale syntax je možné upravovať aj manuálne a vkladať do bloku kódu.

Syntax [[Úvod do Databáz|Databáz]] definuje [[Zobrazenia]], filtre a [[Vzorce|vzorce]]. Databázy musia byť platný YAML zodpovedajúci schéme definovanej nižšie.

## Príklad

Tu je príklad súboru databázy. Každú sekciu si podrobne prejdeme.

```yaml
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
summaries:
  customAverage: 'values.mean().round(3)'
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

### Filtre

Predvolene databáza zahŕňa každý súbor v trezore. Neexistuje žiadne `from` ani `source` ako v SQL alebo Dataview. Sekcia `filters` umožňuje definovať podmienky na zúženie množiny dát.

```yaml
# Jednoduchý filter:
filters:
  and:
    - file.hasTag("tag")

# Komplexný filter:
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
```

Filtre je možné aplikovať na dvoch úrovniach:

1. Na globálnej úrovni `filters` (zobrazené vyššie), kde sa vzťahujú na všetky zobrazenia v databáze.
2. Na úrovni `view`, kde sa vzťahujú len na konkrétne zobrazenie.

Tieto dve sekcie sú funkčne ekvivalentné a pri vyhodnocovaní pre zobrazenie sa spoja pomocou `AND`.

Sekcia `filters` obsahuje buď jeden výraz filtra ako reťazec, alebo rekurzívne definovaný objekt filtra. Objekty filtra môžu obsahovať jedno z `and`, `or` alebo `not`. Tieto kľúče predstavujú heterogénny zoznam iných objektov filtra alebo výrazov filtra v reťazcoch. Výraz filtra je riadok, ktorý sa pri aplikovaní na poznámku vyhodnotí ako pravdivý alebo nepravdivý. Môže to byť jedno z nasledujúcich:

- Základné porovnanie pomocou štandardných aritmetických operátorov.
- Funkcia. K dispozícii je množstvo vstavaných [[Funkcie|funkcií]] a pluginy môžu pridávať ďalšie funkcie.

Syntax a dostupné funkcie pre filtre a vzorce sú rovnaké.

### Vzorce

Sekcia `formulas` definuje [[Vzorce|vlastnosti vzorcov]], ktoré sa môžu zobrazovať vo všetkých zobrazeniach v súbore databázy.

```yaml
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
```

Vlastnosti vzorcov podporujú základné aritmetické operátory a množstvo vstavaných [[Funkcie|funkcií]]. V budúcnosti budú pluginy schopné pridávať funkcie na použitie vo vzorcoch.

Na vlastnosti sa môžete odkazovať rôznymi spôsobmi v závislosti od ich typu:

- **Vlastnosti poznámky** sú vlastnosti definované v úvodných metadátach poznámky. Napríklad `note.price` alebo `note["price"]`.
  Ak nie je uvedený žiadny prefix, predpokladá sa, že ide o vlastnosť `note`.
- **Vlastnosti súboru** popisujú samotný súbor.
  Napríklad `file.size` alebo `file.ext`. Môžete tiež priamo odkazovať na objekt súboru, napr. `file.hasLink()`.
- **Vlastnosti vzorcov** sú iné vzorce v databáze.
  Napríklad `formula.formatted_price`.

Vzorec môže používať hodnoty z iných vlastností vzorcov, pokiaľ nedochádza k kruhovému odkazu.

Vlastnosti vzorcov sú v YAML vždy uložené ako reťazce, ale ich skutočný **výstupný dátový typ** je určený typom podkladových dát a návratovou hodnotou použitých funkcií.

Všimnite si, že použitie vnorených úvodzoviek je nevyhnutné na zahrnutie textových literálov v YAML poli. Textové literály musia byť uzavreté v jednoduchých alebo dvojitých úvodzovkách.

### Vlastnosti

Sekcia `properties` umožňuje ukladať konfiguračné informácie o každej vlastnosti. Je na individuálnom zobrazení, ako tieto konfiguračné hodnoty použije. Napríklad v tabuľkách sa zobrazovaný názov používa pre hlavičky stĺpcov.

```yaml
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
```

Zobrazované názvy sa nepoužívajú vo filtroch ani vo vzorcoch.

### Súhrny

Sekcia `summaries` sa dá použiť na definovanie vlastných súhrnných vzorcov. Okrem definovania súhrnných vzorcov tu je k dispozícii aj niekoľko predvolených súhrnných vzorcov.

```yaml
summaries:
  customAverage: 'values.mean().round(3)'
```

V tomto príklade je vzorec `customAverage` rovnaký ako predvolený `Average`, s tým rozdielom, že hodnota je zaokrúhlená na iný počet desatinných miest. V súhrnných vzorcoch je kľúčové slovo `values` zoznam obsahujúci všetky hodnoty danej vlastnosti naprieč každou poznámkou v množine výsledkov. Súhrnný vzorec by mal vrátiť jednu `Value`.

Všimnite si, že táto sekcia `summaries` je odlišná od sekcie `summaries` v konfigurácii zobrazenia (vysvetlené nižšie), kde sa súhrnné vzorce priraďujú ku konkrétnym vlastnostiam.

#### Predvolené súhrnné vzorce

| Názov     | Vstupný typ | Popis                                                         |
| --------- | ----------- | ------------------------------------------------------------- |
| Average   | Číslo       | Aritmetický priemer všetkých čísel zo vstupných hodnôt.       |
| Min       | Číslo       | Najmenšie číslo zo vstupných hodnôt.                          |
| Max       | Číslo       | Najväčšie číslo zo vstupných hodnôt.                          |
| Sum       | Číslo       | Súčet všetkých čísel na vstupe.                               |
| Range     | Číslo       | Rozdiel medzi `Max` a `Min`.                                  |
| Median    | Číslo       | Medián všetkých čísel zo vstupných hodnôt.                    |
| Stddev    | Číslo       | Smerodajná odchýlka všetkých čísel zo vstupných hodnôt.      |
| Earliest  | Dátum       | Najskorší dátum zo vstupných hodnôt.                          |
| Latest    | Dátum       | Najneskorší dátum zo vstupných hodnôt.                        |
| Range     | Dátum       | Rozdiel medzi `Latest` a `Earliest`.                          |
| Checked   | Boolean     | Počet hodnôt `true`.                                          |
| Unchecked | Boolean     | Počet hodnôt `false`.                                         |
| Empty     | Ľubovoľný   | Počet hodnôt na vstupe, ktoré sú prázdne.                    |
| Filled    | Ľubovoľný   | Počet hodnôt na vstupe, ktoré nie sú prázdne.                |
| Unique    | Ľubovoľný   | Počet unikátnych hodnôt na vstupe.                            |

### Zobrazenia

Sekcia `views` definuje, ako sa dáta môžu vykresliť. Každá položka v zozname `views` definuje samostatné zobrazenie rovnakých dát a môže existovať toľko rôznych zobrazení, koľko je potrebné.

```yaml
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

- `type` vyberá zo vstavaných typov zobrazení a typov pridaných pluginmi.
- `name` je zobrazovaný názov a môže sa použiť na definovanie predvoleného zobrazenia.
- `filters` sú presne rovnaké ako bolo popísané vyššie, ale vzťahujú sa len na dané zobrazenie.
- `groupBy` špecifikuje vlastnosť a smer zoradenia. Hodnota špecifikovanej vlastnosti pre každý riadok sa použije na zaradenie riadku do skupín.
- `summaries` mapuje názvy vlastností na pomenovaný súhrn. Súhrny vykonávajú agregáciu na vlastnosti naprieč všetkými riadkami.

[[Zobrazenia]] môžu pridávať ďalšie dáta na ukladanie akýchkoľvek informácií potrebných na udržanie stavu alebo správne vykreslenie, avšak autori pluginov by mali dbať na to, aby nepoužívali kľúče, ktoré už používa základný plugin Databáz. Napríklad zobrazenie tabuľky môže toto využiť na obmedzenie počtu riadkov alebo na výber stĺpca používaného na zoradenie riadkov a jeho smeru. Iný typ zobrazenia, napríklad mapa, by to mohol využiť na mapovanie toho, ktorá vlastnosť v poznámke zodpovedá zemepisnej šírke a dĺžke a ktorá vlastnosť sa má zobrazovať ako názov špendlíka.

V budúcnosti API umožní zobrazeniam čítať a zapisovať tieto hodnoty, čo zobrazeniu umožní vytvoriť si vlastné rozhranie pre konfiguráciu.

## Vlastnosti

V databázach sa používajú tri druhy vlastností:

1. **Vlastnosti poznámky**, uložené v úvodných metadátach Markdown súborov.
2. **Vlastnosti súboru**, prístupné pre všetky typy súborov.
3. **Vlastnosti vzorcov**, definované v samotnom súbore `.base` (pozri vyššie).

### Vlastnosti poznámky

[[Vlastnosti|Vlastnosti poznámky]] sú dostupné len pre Markdown súbory a sú uložené v YAML úvodných metadátach každej poznámky. K týmto vlastnostiam je možné pristupovať vo formáte `note.author` alebo jednoducho `author` ako skrátený zápis.

### Vlastnosti súboru

Vlastnosti súboru sa vzťahujú na súbor, ktorý sa práve testuje alebo vyhodnocuje. Vlastnosti súboru sú dostupné pre všetky [[Akceptované formáty súborov|typy súborov]], vrátane príloh.

Napríklad filter `file.ext == "md"` bude pravdivý pre všetky Markdown súbory a nepravdivý v ostatných prípadoch.

| Vlastnosť     | Typ    | Popis                                                        |
| -------------- | ------ | ------------------------------------------------------------ |
| `file.backlinks`  | Zoznam | Zoznam súborov so spätnými odkazmi. Poznámka: Táto vlastnosť je náročná na výkon. Pokiaľ je to možné, obráťte vyhľadávanie a použite `file.links`. Výsledky sa automaticky neaktualizujú pri zmene trezoru. |
| `file.ctime`   | Dátum  | Čas vytvorenia                                               |
| `file.embeds`  | Zoznam | Zoznam všetkých vložení v poznámke                           |
| `file.ext`     | Reťazec | Prípona súboru                                               |
| `file.file`    | Súbor  | Objekt súboru, použiteľný len v špecifických funkciách       |
| `file.folder`  | Reťazec | Cesta priečinka súboru                                       |
| `file.links`   | Zoznam | Zoznam všetkých interných odkazov v poznámke, vrátane úvodných metadát |
| `file.mtime`   | Dátum  | Čas úpravy                                                   |
| `file.name`    | Reťazec | Názov súboru                                                 |
| `file.path`    | Reťazec | Cesta súboru                                                 |
| `file.properties` | Objekt | Všetky vlastnosti súboru. Poznámka: Výsledky sa automaticky neaktualizujú pri zmene trezoru. |
| `file.size`    | Číslo  | Veľkosť súboru                                               |
| `file.tags`    | Zoznam | Zoznam všetkých značiek v obsahu súboru a úvodných metadátach |

### Prístup k vlastnostiam pomocou `this`

Použite objekt `this` na prístup k vlastnostiam súboru. Na čo sa `this` odkazuje, závisí od toho, kde je databáza zobrazená.

Keď je databáza otvorená v hlavnej oblasti obsahu, `this` ukazuje na vlastnosti samotného súboru databázy. Napríklad použitie `this.file.folder` vráti cestu priečinka, kde sa databáza nachádza.

Keď je databáza vložená do iného súboru, `this` ukazuje na vlastnosti _vkladajúceho_ súboru (poznámky alebo Canvas, ktorý obsahuje databázu). Napríklad použitie `this.file.name` vráti názov vkladajúceho súboru, nie databázy.

Keď je databáza v bočnom paneli, `this` sa odkazuje na aktívny súbor v hlavnej oblasti obsahu. To umožňuje vytvárať dotazy na základe aktívneho súboru. Napríklad môžete použiť `file.hasLink(this.file)` na replikáciu panela spätných odkazov.

## Operátory

### Aritmetické operátory

Aritmetické operátory vykonávajú aritmetiku s číslami. Napríklad `radius * (2 * 3.14)`.

| Operátor | Popis       |
| -------- | ----------- |
| `+`      | plus        |
| `-`      | mínus       |
| `*`      | násobenie   |
| `/`      | delenie     |
| `%`      | modulo      |
| `( )`    | zátvorky    |

### Aritmetika s dátumami

Dátumy je možné upravovať pridávaním a odčítavaním trvaní. Jednotky trvania akceptujú viacero formátov:

| Jednotka                 | Trvanie  |
| ------------------------ | -------- |
| `y`, `year`, `years`     | rok      |
| `M`, `month`, `months`   | mesiac   |
| `d`, `day`, `days`       | deň      |
| `w`, `week`, `weeks`     | týždeň   |
| `h`, `hour`, `hours`     | hodina   |
| `m`, `minute`, `minutes` | minúta   |
| `s`, `second`, `seconds` | sekunda  |

Na úpravu alebo posunutie objektov Date použite operátor `+` alebo `-` s reťazcom trvania. Napríklad `date + "1M"` pridá 1 mesiac k dátumu, zatiaľ čo `date - "2h"` odčíta 2 hodiny od dátumu.

Globálna [[Funkcie|funkcia]] `today()` sa dá použiť na získanie aktuálneho dátumu a `now()` na získanie aktuálneho dátumu s časom.

- `now() + "1 day"` vráti dátum a čas presne 24 hodín od času vykonania.
- `file.mtime > now() - "1 week"` vráti `true`, ak bol súbor upravený v priebehu posledného týždňa.
- `date("2024-12-01") + "1M" + "4h" + "3m"` vráti objekt Date reprezentujúci `2025-01-01 04:03:00`.
- Odčítaním dvoch dátumov získate rozdiel v milisekundách medzi nimi, napríklad `now() - file.ctime`.
- Na získanie dátumovej časti z Date s časom použite `datetime.date()`.
- Na formátovanie objektu Date použite funkciu `format()`, napríklad `datetime.format("YYYY-MM-DD")`.

### Porovnávacie operátory

Porovnávacie operátory sa dajú použiť na porovnávanie čísel alebo objektov Date. Rovná sa a nerovná sa sa dajú použiť s akýmkoľvek typom hodnoty, nielen s číslami a dátumami.

| Operátor | Popis                    |
| -------- | ------------------------ |
| `==`     | rovná sa                 |
| `!=`     | nerovná sa               |
| `>`      | väčšie ako               |
| `<`      | menšie ako               |
| `>=`     | väčšie alebo rovné       |
| `<=`     | menšie alebo rovné       |

### Logické operátory

Logické operátory sa dajú použiť na kombináciu alebo inverziu logických hodnôt, výsledkom čoho je pravdivá alebo nepravdivá hodnota.

| Operátor | Popis        |
| -------- | ------------ |
| `!`      | logické nie  |
| `&&`     | logické a    |
| \|\|     | logické alebo |

## Funkcie

Pozrite si [[Funkcie|zoznam funkcií]], ktoré sa dajú použiť vo vzorcoch a [[Zobrazenia|filtroch]].

## Typy

Databázy majú typový systém, ktorý vzorce a filtre používajú na aplikovanie funkcií na vlastnosti.

### Reťazce, čísla a booleany

Reťazce, čísla a booleany sú „primitívne" hodnoty, ktoré nevyžadujú funkciu na vytvorenie.

- Reťazce sú uzavreté v jednoduchých alebo dvojitých úvodzovkách, napríklad `"message"`.
- Čísla sa zapisujú ako číslice a voliteľne môžu byť uzavreté v zátvorkách pre prehľadnosť. Napríklad `1` alebo `(2.5)`.
- Booleany sa zapisujú ako `true` alebo `false` bez úvodzoviek.

### Dátumy a trvania

Dátumy reprezentujú konkrétny dátum alebo dátum a čas v závislosti od funkcie použitej na ich vytvorenie alebo od typu, ktorý bol priradený k [[Vlastnosti|vlastnosti]].

- Na vytvorenie dátumu použite funkciu `date`, napríklad `date("2025-01-01 12:00:00")`
- Na úpravu dátumu pridajte alebo odoberte trvanie, napríklad `now() + "1 hour"` alebo `today() + "7d"`
- Porovnávajte dátumy pomocou porovnávacích operátorov (napr. `>` alebo `<`) a aritmetických operátorov (napríklad `(now() + "1d") - now()` vráti `86400000` milisekúnd.)
- Na extrahovanie častí dátumu použite dostupné polia (`now().hour`) alebo pomocnú funkciu (`now.time()`).
- Na objektoch dátumov sú dostupné mnohé ďalšie [[Funkcie|polia a funkcie]].

### Objekty a zoznamy

- Premeniť jeden prvok na zoznam je možné pomocou funkcie `list()`. To je obzvlášť užitočné pre vlastnosti, ktoré môžu obsahovať zmes zoznamov alebo jednotlivých hodnôt.
- K prvkom zoznamu pristupujte pomocou hranatých zátvoriek a indexu začínajúceho od 0. Napríklad `property[0]` vráti prvý prvok zo zoznamu.
- K prvkom objektu pristupujte pomocou hranatých zátvoriek s názvom prvku alebo bodkovej notácie. Napríklad `property.subprop` alebo `property["subprop"]`.

### Súbory a odkazy

[[Prepojenie poznámok|Wiki odkazy]] vo [[Vlastnosti|vlastnostiach úvodných metadát]] sú automaticky rozpoznané ako objekty Link. Odkazy sa vykreslia ako klikateľný odkaz v [[Zobrazenia|zobrazení]].

- Na vytvorenie odkazu použite globálnu [[Funkcie|funkciu]] `link`, napríklad `link("filename")` alebo `link("https://obsidian.md")`.
- Odkaz môžete vytvoriť z akéhokoľvek reťazca, napríklad `link(file.ctime.date().toString())`.
- Na nastavenie zobrazovaného textu zadajte voliteľný reťazec alebo ikonu ako druhý parameter, napríklad `link("filename", "display")` alebo `link("filename", icon("plus"))`.

Objekt File je možné premeniť na odkaz pomocou `file.asLink()` s voliteľným zobrazovaným textom.

Odkazy sa dajú porovnávať pomocou `==` a `!=`. Sú ekvivalentné, pokiaľ ukazujú na rovnaký súbor, alebo ak súbor pri vyhľadávaní neexistuje, ich text odkazu musí byť identický.

Odkazy sa dajú porovnávať so súbormi ako `file` alebo `this`. Budú rovnaké, ak sa odkaz rozpozná na daný súbor. Napríklad `author == this`.

Odkazy sa dajú kontrolovať aj v zoznamoch pomocou contains, napríklad `authors.contains(this)`.
