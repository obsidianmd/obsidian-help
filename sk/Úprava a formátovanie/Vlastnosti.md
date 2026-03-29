---
permalink: properties
cssclasses:
  - soft-embed
publish: true
mobile: false
description: 'Vlastnosti vám umožňujú organizovať informácie o poznámke. Vlastnosti obsahujú štruktúrované údaje, ako sú text, odkazy, dátumy, zaškrtávacie políčka a čísla.'
---
Vlastnosti umožňujú organizovať informácie o poznámke. Vlastnosti obsahujú štruktúrované dáta, ako sú text, odkazy, dátumy, začiarkavacie políčka a čísla. Vlastnosti možno tiež používať v kombinácii s [[Komunitné pluginy|komunitnými pluginmi]], ktoré dokážu užitočne pracovať s vašimi štruktúrovanými dátami.

## Pridanie vlastností do poznámky

Existuje niekoľko spôsobov, ako pridať vlastnosť do poznámky:

- Použite [[Paleta príkazov|príkaz]] **Pridať vlastnosť súboru**.
- Použite [[Klávesové skratky|klávesovú skratku]] **`Cmd/Ctrl+;`**.
- Vyberte **Pridať vlastnosť súboru** z ponuky **Ďalšie akcie** (vyvolanej ikonou troch bodiek alebo kliknutím pravým tlačidlom na kartu).
- Napíšte `---` na úplný začiatok súboru.

Po pridaní vlastnosti sa na vrchu súboru zobrazí riadok s dvoma vstupmi: _názov_ vlastnosti a _hodnota_ vlastnosti.

Pre názov si môžete vybrať čokoľvek. Obsidian poskytuje niekoľko predvolených vlastností: `tags`, `cssclasses` a `aliases`.

Po zvolení názvu vlastnosti jej môžete priradiť hodnotu.

### Typy vlastností

Okrem názvu a hodnoty majú vlastnosti aj _typ_. Typ vlastnosti určuje, aký druh hodnôt môže uchovávať a ako s nimi Obsidian pracuje. Ak chcete zmeniť typ vlastnosti, kliknite na ikonu typu vedľa názvu vlastnosti a vyberte inú možnosť. Typy vlastností môžete spravovať aj pomocou základného pluginu [[Vlastnosti|Vlastnosti]].

Obsidian podporuje nasledujúce typy vlastností:

- **[[#Text]]**
- **[[#Zoznam]]**
- **[[#Číslo]]**
- **[[#Začiarkavacie políčko]]**
- **[[#Dátum]]**
- **[[#Dátum a čas]]**
- **[[#Značky]]**

Po priradení typu vlastnosti k názvu vlastnosti budú všetky vlastnosti s týmto názvom v celom trezore používať rovnaký typ.

## Pokročilé použitie

### Vyhľadávanie vlastností

Vlastnosti majú vlastnú [[Hľadať|syntax vyhľadávania]], ktorú môžete používať spolu s ďalšími vyhľadávacími výrazmi a operátormi. [[Hľadať#Vyhľadávanie vlastností|Pozrite si syntax vyhľadávania pre vlastnosti]].

### Šablóny

Do [[Šablóny|šablón]] môžete pridať vlastnosti.

Keď vložíte šablónu do aktívnej poznámky, všetky vlastnosti zo šablóny sa pridajú do poznámky. Obsidian tiež zlúči všetky vlastnosti, ktoré existujú vo vašej poznámke, s vlastnosťami v šablóne. ^templates-properties

### Premenovanie vlastností

Vlastnosť môžete premenovať kliknutím pravým tlačidlom na ňu v [[Vlastnosti|zobrazení Všetky vlastnosti]].

### Režimy zobrazenia

Môžete zmeniť spôsob zobrazenia vlastností v poznámke v **[[Nastavenia]] → Editor → Vlastnosti v dokumente**. Možnosti sú:

- **Viditeľné** (predvolené) – zobrazuje vlastnosti na vrchu poznámky, ak nejaké existujú.
- **Skryté** – skryje vlastnosti, stále ich možno zobraziť v bočnom paneli pomocou [[Vlastnosti|zobrazenia Vlastnosti]].
- **Zdroj** – zobrazuje vlastnosti v obyčajnom textovom formáte YAML.

### CSS snippety

Pomocou [[CSS snippety|CSS snippetov]] môžete zmeniť vzhľad konkrétnych poznámok.

### Nepodporované funkcie

Niektoré funkcie momentálne nie sú v Obsidian podporované:

- **Vnorené vlastnosti**: Na zobrazenie vnorených vlastností odporúčame použiť [[Zobrazenia a režim úprav#Režim zdroja|režim zdroja]].
- **Hromadné úpravy vlastností**: Pre rozsiahle hromadné úpravy mimo [[Vlastnosti|zobrazenia Vlastnosti]] odporúčame použiť nástroje na hromadné úpravy ako VSCode, skripty a komunitné pluginy.
- **Markdown vo vlastnostiach**: Toto je zámerné obmedzenie, keďže vlastnosti sú určené pre malé, atomické kúsky informácií, ktoré sú čitateľné pre ľudí aj stroje.

## Klávesové skratky

### Pridanie vlastnosti

| Akcia | Klávesová skratka |
|---|---|
|Pridať novú vlastnosť|`Cmd + ;`|

### Navigácia medzi vlastnosťami

Keď je vlastnosť zameraná

| Akcia | Klávesová skratka |
|---|---|
|Zamerať nasledujúcu vlastnosť|`Šípka nadol` alebo `Tab`|
|Zamerať predchádzajúcu vlastnosť|`Šípka nahor` alebo `Shift+Tab`|
|Prejsť do editora|`Alt+Šípka nadol`|

### Výber vlastností

| Akcia | Klávesová skratka |
|---|---|
|Rozšíriť výber nahor|`Shift+Šípka nahor`|
|Rozšíriť výber nadol|`Shift+Šípka nadol`|
|Vybrať všetko|`Cmd+A`|

### Úprava vlastností

| Akcia | Klávesová skratka |
|---|---|
|Upraviť názov vlastnosti|`Šípka doľava`|
|Upraviť hodnotu vlastnosti|`Šípka doprava`|
|Zamerať vlastnosť|`Escape`|
|Odstrániť vlastnosť|`Cmd+Backspace`<br><br>ak sú vybrané nejaké vlastnosti, namiesto toho sa odstráni výber.|
|Späť|`Cmd+Z`|
|Znova|`Cmd+Shift+Z`|

### Vim (pokročilé)

| Akcia | Klávesová skratka |
|---|---|
|Presunúť nadol|`j`|
|Presunúť nahor|`k`|
|Zamerať kľúč|`h`|
|Zamerať hodnotu|`l`|
|Zamerať hodnotu (kurzor na konci)|`A`|
|Zamerať hodnotu (kurzor na začiatku)|`i`|
|Vytvoriť novú vlastnosť|`o`|

## Formát vlastností

Vlastnosti sú uložené vo formáte [YAML](https://yaml.org/) na vrchu súboru. YAML je populárny formát, ktorý je ľahko čitateľný pre ľudí aj počítače.

Názvy vlastností sú od ich hodnôt oddelené dvojbodkou nasledovanou medzerou:

```yaml
---
name: value
---
```

Hoci na poradí jednotlivých párov názov-hodnota nezáleží, každý názov musí byť v rámci poznámky jedinečný. Napríklad nemôžete mať viac ako jednu vlastnosť `tags`.

Hodnoty môžu byť [[#Text|text]], [[#Číslo|čísla]], [[#Začiarkavacie políčko|začiarkavacie políčka]], [[#Dátum|dátumy]], [[#Dátum a čas|dátumy a časy]] alebo [[#Zoznam|zoznamy]].

### Text

Textové vlastnosti obsahujú jeden riadok textu. Markdown formátovanie sa v textových vlastnostiach nevykresľuje. Hashtagy nevytvárajú značky, keď sa používajú v textových vlastnostiach.

Textové vlastnosti môžu obsahovať URL adresy a [[Interné odkazy]] pomocou syntaxe `[[Odkaz]]`. [[Interné odkazy]] v textových vlastnostiach musia byť obklopené úvodzovkami. Obsidian ich automaticky pridá, ak manuálne zadáte interné odkazy do vlastností, ale dávajte pozor na ich pridanie pri používaní pluginov šablón.

```yaml
---
title: A New Hope
link: "[[Episode IV]]"
url: https://www.example.com
---
```

### Zoznam

Vlastnosti typu zoznam obsahujú viacero hodnôt. Každá hodnota v zozname sa zobrazuje na vlastnom riadku, pred ktorým je pomlčka (-) a medzera.

Hodnoty zoznamu môžu obsahovať text, čísla a [[Interné odkazy]]. Pri použití [[Interné odkazy|interných odkazov]] vo vlastnostiach typu zoznam ich obklopte úvodzovkami.

```yaml
---
cast: 
  - Mark Hamill
  - Harrison Ford
  - Carrie Fisher
links:
  - "[[Link]]" 
  - "[[Link2]]"
---
```

### Číslo

Vlastnosti typu číslo musia byť vždy doslovné číslo, nie výraz s operátormi. Celé čísla aj desatinné čísla sú povolené.

```yaml
---
year: 1977
pie: 3.14
---
```

### Začiarkavacie políčko

Vlastnosti typu začiarkavacie políčko sú buď `true` alebo `false`. V živom náhľade sa zobrazujú ako začiarkavacie políčko.

```yaml
---
favorite: true
reply: false
last: # Neurčitá hodnota; často sa spracúva ako false
```

### Dátum

Vlastnosti typu dátum sú uložené v nasledujúcom formáte:

```yaml
---
date: 2020-08-21
---
```

Výber dátumu sa riadi predvoleným formátom dátumu a času vášho operačného systému. Môžete ho zmeniť v systémových nastaveniach:

> [!info]- Windows
> **[[Nastavenia]] → Čas a jazyk → Jazyk a región → Regionálny formát → Zmeniť formáty**
> 
> ![[Windows-OS-DateTime.png#interface]]

> [!info]- Mac OS
> **Systémové nastavenia → Jazyk a región → Formát dátumu**
> 
> ![[Mac-OS-DateTime.png|450]]

S povoleným pluginom [[Každodenné poznámky]] bude vlastnosť dátumu navyše fungovať ako interný odkaz na zodpovedajúcu dennú poznámku pre daný dátum.

![[Každodenné poznámky#^daily-notes-date]]

### Dátum a čas

Vlastnosti typu dátum a čas obsahujú dátum aj konkrétny čas, uložené v nasledujúcom formáte:

```yaml
---
time: 2020-08-21T10:30:00
---
```

Rovnako ako [[#Dátum|vlastnosti typu dátum]], výber dátumu a času sa riadi predvoleným formátom vášho operačného systému. Môžete ho zmeniť v systémových nastaveniach.

### Značky

Vlastnosti typu značky sú špeciálny typ vlastnosti používaný výlučne pre vlastnosť `tags`. Tento typ vlastnosti nemožno priradiť iným vlastnostiam.

Vlastnosti typu značky sú formátované ako zoznam, kde každá značka je na vlastnom riadku, pred ktorým je pomlčka (-) a medzera.

```yaml
---
tags: 
  - journal
  - personal
  - draft
---
```

Vlastnosť `tags` je jednou z [[#Predvolené vlastnosti|predvolených vlastností]] Obsidian. Pozrite si [[Značky]] pre viac informácií o používaní značiek v Obsidian.

### JSON vlastnosti

Hoci odporúčame používať YAML na definovanie vlastností, môžete vlastnosti definovať aj pomocou [JSON](https://www.json.org/):

```json
---
{
  "tags": ["journal"],
  "publish": false
}
---
```

Upozorňujeme, že blok JSON bude prečítaný, interpretovaný a uložený ako YAML.

## Predvolené vlastnosti

Obsidian obsahuje sadu predvolených vlastností:

| Vlastnosť    | Typ    | Popis                                                        |
| ------------ | ------ | ------------------------------------------------------------ |
| `tags`       | Zoznam | Pozri [[Úprava a formátovanie/Značky\|Značky]].              |
| `aliases`    | Zoznam | Pozri [[Aliasy]].                                           |
| `cssclasses` | Zoznam | Umožňuje štylizovať jednotlivé poznámky pomocou [[CSS snippety|CSS snippetov]]. |

### Vlastnosti pre Obsidian Publish

Nasledujúce predvolené vlastnosti možno používať s [[Úvod do Obsidian Publish|Obsidian Publish]]:

| Vlastnosť    | Popis                                                                                                      |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| `publish`     | Pozri [[Publikovanie obsahu#Automaticky vybrať dáta na publikovanie\|Automaticky vybrať dáta na publikovanie]]. |
| `permalink`   | Pozri [[Trvalé odkazy\|Trvalé odkazy]].                                                                   |
| `description` | Pozri [[Náhľady odkazov na sociálnych sieťach#Description\|Popis]].                                       |
| `image`       | Pozri [[Náhľady odkazov na sociálnych sieťach#Image\|Obrázok]].                                           |
| `cover`       | Pozri [[Náhľady odkazov na sociálnych sieťach#Image\|Obrázok]].                                           |

### Zastarané vlastnosti

Tieto vlastnosti boli zastarané v Obsidian 1.4 a mali by byť nahradené ich modernými ekvivalentmi. Podpora pre ne ako [[#Predvolené vlastnosti]] bola ukončená v Obsidian 1.9.

| Vlastnosť | Popis |
|-|-|
| `tag` | Zastaraný alias pre `tags`. |
| `alias` | Zastaraný alias pre `aliases`. |
| `cssclass` | Zastaraný alias pre `cssclasses`. |

> [!tip] Ak potrebujete previesť súbory vo vašom trezore do formátu [[#Predvolené vlastnosti]], môžete použiť [[Prevodník formátov]] na hromadnú zmenu vášho trezora.
