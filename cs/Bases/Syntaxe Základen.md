---
permalink: bases/syntax
publish: true
mobile: true
description: Tato stránka poskytuje úvod do syntaxe Bases v Obsidianu.
---
Když [[Vytvoření základny|vytvoříte základnu]] v Obsidian, uloží se jako soubor `.base`. Základny se obvykle upravují pomocí rozhraní aplikace, ale syntaxi lze také upravovat ručně a vkládat do bloku kódu.

Syntaxe [[Úvod do Základen|Základen]] definuje [[Zobrazení]], filtry a [[Vzorce|vzorce]]. Základny musí být platný YAML odpovídající schématu definovanému níže.

## Příklad

Zde je příklad souboru základny. Každou sekci si podrobně projdeme.

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

### Filtry

Ve výchozím nastavení základna zahrnuje každý soubor v trezoru. Neexistuje žádný `from` nebo `source` jako v SQL nebo Dataview. Sekce `filters` umožňuje definovat podmínky pro zúžení datové sady.

```yaml
# Jednoduchý filtr:
filters:
  and:
    - file.hasTag("tag")

# Složitý filtr:
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

Filtry lze aplikovat na dvou úrovních:

1. Na globální úrovni `filters` (viz výše), kde se vztahují na všechna zobrazení v základně.
2. Na úrovni `view`, kde se vztahují pouze na konkrétní zobrazení.

Tyto dvě sekce jsou funkčně ekvivalentní a při vyhodnocování pro zobrazení se spojí pomocí `AND`.

Sekce `filters` obsahuje buď jediný filtrový výraz jako řetězec, nebo rekurzivně definovaný filtrový objekt. Filtrové objekty mohou obsahovat jeden z klíčů `and`, `or` nebo `not`. Tyto klíče jsou heterogenní seznam dalších filtrových objektů nebo filtrových výrazů v řetězcích. Filtrový výraz je řádek, který se při aplikaci na poznámku vyhodnotí jako pravdivý nebo nepravdivý. Může být jedním z následujících:

- Základní porovnání pomocí standardních aritmetických operátorů.
- Funkce. K dispozici je řada vestavěných [[Funkce|funkcí]] a pluginy mohou přidávat další funkce.

Syntaxe a dostupné funkce pro filtry a vzorce jsou stejné.

### Vzorce

Sekce `formulas` definuje [[Vzorce|vlastnosti vzorců]], které lze zobrazit ve všech zobrazeních v souboru základny.

```yaml
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
```

Vlastnosti vzorců podporují základní aritmetické operátory a řadu vestavěných [[Funkce|funkcí]]. V budoucnu budou moci pluginy přidávat funkce pro použití ve vzorcích.

Na vlastnosti můžete odkazovat různými způsoby v závislosti na jejich typu:

- **Vlastnosti poznámky** jsou vlastnosti definované v úvodních metadatech poznámky. Například `note.price` nebo `note["price"]`.
  Pokud není uveden žádný prefix, předpokládá se, že vlastnost je typu `note`.
- **Vlastnosti souboru** popisují samotný soubor.
  Například `file.size` nebo `file.ext`. Můžete také přímo odkazovat na objekt souboru, např. `file.hasLink()`.
- **Vlastnosti vzorců** jsou další vzorce v základně.
  Příklad: `formula.formatted_price`.

Vzorec může používat hodnoty z jiných vlastností vzorců, pokud nedochází k cyklickému odkazu.

Vlastnosti vzorců jsou v YAML vždy uloženy jako řetězce, ale jejich skutečný **výstupní datový typ** je určen typem podkladových dat a návratovou hodnotou použitých funkcí.

Všimněte si, že vnořené uvozovky jsou nutné pro zahrnutí textových literálů do pole YAML. Textové literály musí být uzavřeny v jednoduchých nebo dvojitých uvozovkách.

### Vlastnosti

Sekce `properties` umožňuje ukládání konfiguračních informací o každé vlastnosti. Záleží na konkrétním zobrazení, jak tyto konfigurační hodnoty použije. Například v tabulkách se zobrazovaný název používá pro záhlaví sloupců.

```yaml
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
```

Zobrazované názvy se nepoužívají ve filtrech ani vzorcích.

### Shrnutí

Sekce `summaries` lze použít k definování vlastních souhrnných vzorců. Kromě definování souhrnných vzorců zde je k dispozici také několik výchozích souhrnných vzorců.

```yaml
summaries:
  customAverage: 'values.mean().round(3)'
```

V tomto příkladu je vzorec `customAverage` stejný jako výchozí `Average`, kromě toho, že hodnota je zaokrouhlena na jiný počet desetinných míst. V souhrnných vzorcích je klíčové slovo `values` seznam obsahující všechny hodnoty dané vlastnosti napříč všemi poznámkami ve výsledné sadě. Souhrnný vzorec by měl vrátit jednu `Value`.

Všimněte si, že tato sekce `summaries` se liší od sekce `summaries` v konfiguraci zobrazení (vysvětleno níže), kde jsou souhrnné vzorce přiřazeny ke konkrétním vlastnostem.

#### Výchozí souhrnné vzorce

| Název     | Vstupní typ | Popis                                                         |
| --------- | ----------- | ------------------------------------------------------------- |
| Average   | Číslo       | Aritmetický průměr všech čísel ze vstupních hodnot.           |
| Min       | Číslo       | Nejmenší číslo ze vstupních hodnot.                           |
| Max       | Číslo       | Největší číslo ze vstupních hodnot.                           |
| Sum       | Číslo       | Součet všech čísel na vstupu.                                 |
| Range     | Číslo       | Rozdíl mezi `Max` a `Min`.                                    |
| Median    | Číslo       | Matematický medián všech čísel ze vstupních hodnot.           |
| Stddev    | Číslo       | Směrodatná odchylka všech čísel ze vstupních hodnot.          |
| Earliest  | Datum       | Nejstarší datum ze vstupních hodnot.                          |
| Latest    | Datum       | Nejnovější datum ze vstupních hodnot.                         |
| Range     | Datum       | Rozdíl mezi `Latest` a `Earliest`.                            |
| Checked   | Boolean     | Počet hodnot `true`.                                          |
| Unchecked | Boolean     | Počet hodnot `false`.                                         |
| Empty     | Jakýkoli    | Počet prázdných hodnot na vstupu.                             |
| Filled    | Jakýkoli    | Počet neprázdných hodnot na vstupu.                           |
| Unique    | Jakýkoli    | Počet jedinečných hodnot na vstupu.                           |

### Zobrazení

Sekce `views` definuje, jak lze data vykreslovat. Každá položka v seznamu `views` definuje samostatné zobrazení stejných dat a může existovat libovolný počet různých zobrazení.

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

- `type` vybírá z vestavěných a pluginy přidaných typů zobrazení.
- `name` je zobrazovaný název a může být použit k definování výchozího zobrazení.
- `filters` jsou přesně stejné jako výše popsané, ale vztahují se pouze na dané zobrazení.
- `groupBy` určuje vlastnost a směr řazení. Hodnota zadané vlastnosti pro každý řádek se použije k zařazení řádku do skupin.
- `summaries` mapuje názvy vlastností na pojmenované shrnutí. Shrnutí provádějí agregaci vlastnosti napříč všemi řádky.

[[Zobrazení]] mohou přidávat další data pro uložení jakýchkoli informací potřebných k udržení stavu nebo správnému vykreslení, avšak autoři pluginů by měli dbát na to, aby nepoužívali klíče, které již používá základní plugin Základen. Jako příklad může zobrazení tabulky použít toto k omezení počtu řádků nebo k výběru sloupce používaného k řazení řádků a jeho směru. Jiný typ zobrazení, například mapa, to může použít k mapování, která vlastnost v poznámce odpovídá zeměpisné šířce a délce a která vlastnost by měla být zobrazena jako název pinu.

V budoucnu API umožní zobrazením číst a zapisovat tyto hodnoty, což zobrazení umožní vytvořit vlastní rozhraní pro konfiguraci.

## Vlastnosti

V základnách se používají tři druhy vlastností:

1. **Vlastnosti poznámky**, uložené v úvodních metadatech Markdown souborů.
2. **Vlastnosti souboru**, dostupné pro všechny typy souborů.
3. **Vlastnosti vzorců**, definované v samotném souboru `.base` (viz výše).

### Vlastnosti poznámky

[[Vlastnosti|Vlastnosti poznámky]] jsou dostupné pouze pro Markdown soubory a jsou uloženy v YAML úvodních metadatech každé poznámky. K těmto vlastnostem lze přistupovat ve formátu `note.author` nebo jednoduše `author` jako zkratka.

### Vlastnosti souboru

Vlastnosti souboru odkazují na soubor, který je aktuálně testován nebo vyhodnocován. Vlastnosti souboru jsou dostupné pro všechny [[Podporované formáty souborů|typy souborů]], včetně příloh.

Například filtr `file.ext == "md"` bude pravdivý pro všechny Markdown soubory a v ostatních případech nepravdivý.

| Vlastnost          | Typ    | Popis                                                         |
| ------------------ | ------ | ------------------------------------------------------------- |
| `file.backlinks`   | List   | Seznam souborů zpětných odkazů. Poznámka: Tato vlastnost je výkonově náročná. Pokud je to možné, obraťte vyhledávání a použijte `file.links`. Automaticky neobnovuje výsledky při změně trezoru. |
| `file.ctime`       | Date   | Čas vytvoření                                                 |
| `file.embeds`      | List   | Seznam všech embedů v poznámce                                |
| `file.ext`         | String | Přípona souboru                                               |
| `file.file`        | File   | Objekt souboru, použitelný pouze v konkrétních funkcích       |
| `file.folder`      | String | Cesta ke složce souboru                                       |
| `file.links`       | List   | Seznam všech interních odkazů v poznámce, včetně úvodních metadat |
| `file.mtime`       | Date   | Čas úpravy                                                    |
| `file.name`        | String | Název souboru                                                 |
| `file.path`        | String | Cesta k souboru                                               |
| `file.properties`  | Object | Všechny vlastnosti souboru. Poznámka: Automaticky neobnovuje výsledky při změně trezoru. |
| `file.size`        | Number | Velikost souboru                                              |
| `file.tags`        | List   | Seznam všech štítků v obsahu souboru a úvodních metadatech    |

### Přístup k vlastnostem pomocí `this`

Použijte objekt `this` pro přístup k vlastnostem souboru. Na co `this` odkazuje, závisí na tom, kde je základna zobrazena.

Když je základna otevřena v hlavní oblasti obsahu, `this` odkazuje na vlastnosti samotného souboru základny. Například použití `this.file.folder` vrátí cestu ke složce, kde se základna nachází.

Když je základna vložena do jiného souboru, `this` odkazuje na vlastnosti _vkládajícího_ souboru (poznámky nebo Canvas, který základnu obsahuje). Například použití `this.file.name` vrátí název vkládajícího souboru, nikoli základny.

Když je základna v postranním panelu, `this` odkazuje na aktivní soubor v hlavní oblasti obsahu. To umožňuje vytvářet dotazy založené na aktivním souboru. Například můžete použít `file.hasLink(this.file)` k replikaci panelu zpětných odkazů.

## Operátory

### Aritmetické operátory

Aritmetické operátory provádějí aritmetiku s čísly. Například `radius * (2 * 3.14)`.

| Operátor | Popis       |
| -------- | ----------- |
| `+`      | plus        |
| `-`      | minus       |
| `*`      | násobení    |
| `/`      | dělení      |
| `%`      | modulo      |
| `( )`    | závorky     |

### Aritmetika s daty

Data lze upravovat přičítáním a odečítáním trvání. Jednotky trvání přijímají více formátů:

| Jednotka                 | Trvání  |
| ------------------------ | ------- |
| `y`, `year`, `years`     | rok     |
| `M`, `month`, `months`   | měsíc   |
| `d`, `day`, `days`       | den     |
| `w`, `week`, `weeks`     | týden   |
| `h`, `hour`, `hours`     | hodina  |
| `m`, `minute`, `minutes` | minuta  |
| `s`, `second`, `seconds` | sekunda |

Pro úpravu nebo posunutí objektů Date použijte operátor `+` nebo `-` s řetězcem trvání. Například `date + "1M"` přidá k datu 1 měsíc, zatímco `date - "2h"` odečte od data 2 hodiny.

Globální [[Funkce|funkci]] `today()` lze použít k získání aktuálního data a `now()` k získání aktuálního data s časem.

- `now() + "1 day"` vrátí datum a čas přesně 24 hodin od okamžiku spuštění.
- `file.mtime > now() - "1 week"` vrátí `true`, pokud byl soubor upraven během posledního týdne.
- `date("2024-12-01") + "1M" + "4h" + "3m"` vrátí objekt Date představující `2025-01-01 04:03:00`.
- Odečtením dvou dat získáte milisekundový rozdíl mezi nimi, například `now() - file.ctime`.
- Pro získání datové části z Date s časem použijte `datetime.date()`.
- Pro formátování objektu Date použijte funkci `format()`, například `datetime.format("YYYY-MM-DD")`.

### Porovnávací operátory

Porovnávací operátory lze použít k porovnání čísel nebo objektů Date. Rovná se a nerovná se lze použít s jakýmkoli druhem hodnoty, nejen s čísly a daty.

| Operátor | Popis                    |
| -------- | ------------------------ |
| `==`     | rovná se                 |
| `!=`     | nerovná se               |
| `>`      | větší než                |
| `<`      | menší než                |
| `>=`     | větší nebo rovno         |
| `<=`     | menší nebo rovno         |

### Logické operátory

Logické operátory lze použít ke kombinování nebo invertování logických hodnot, výsledkem je hodnota pravda nebo nepravda.

| Operátor | Popis       |
| -------- | ----------- |
| `!`      | logická negace |
| `&&`     | logický and |
| \|\|     | logický or  |

## Funkce

Podívejte se na [[Funkce|seznam funkcí]], které lze použít ve vzorcích a [[Zobrazení|filtrech]].

## Typy

Základny mají typový systém, který vzorce a filtry používají k aplikaci funkcí na vlastnosti.

### Řetězce, čísla a booleany

Řetězce, čísla a booleany jsou „primitivní" hodnoty, které nevyžadují funkci k vytvoření.

- Řetězce jsou uzavřeny v jednoduchých nebo dvojitých uvozovkách, například `"message"`.
- Čísla se zapisují jako číslice a mohou být volitelně uzavřena v závorkách pro přehlednost. Například `1` nebo `(2.5)`.
- Booleany se zapisují jako `true` nebo `false` bez uvozovek.

### Data a trvání

Data představují konkrétní datum nebo datum a čas v závislosti na funkci použité k jejich vytvoření nebo na typu, který byl přiřazen [[Vlastnosti|vlastnosti]].

- Pro vytvoření data použijte funkci `date`, například `date("2025-01-01 12:00:00")`
- Pro úpravu data přidejte nebo odeberte trvání, například `now() + "1 hour"` nebo `today() + "7d"`
- Porovnávejte data pomocí porovnávacích operátorů (např. `>` nebo `<`) a aritmetických operátorů (například `(now() + "1d") - now()` vrátí `86400000` milisekund.)
- Pro extrakci částí data použijte dostupná pole (`now().hour`) nebo pohodlné funkce (`now.time()`).
- Na objektech data je k dispozici mnoho dalších [[Funkce|polí a funkcí]].

### Objekty a seznamy

- Převeďte jeden prvek na seznam pomocí funkce `list()`. To je obzvláště užitečné pro vlastnosti, které mohou obsahovat směs seznamů nebo jednotlivých hodnot.
- K prvkům seznamu přistupujte pomocí hranatých závorek a indexu začínajícího od 0. Například `property[0]` vrátí první prvek ze seznamu.
- K prvkům objektu přistupujte pomocí hranatých závorek a názvu prvku nebo tečkové notace. Například `property.subprop` nebo `property["subprop"]`.

### Soubory a odkazy

[[Propojení poznámek|Wiki odkazy]] ve [[Vlastnosti|vlastnostech úvodních metadat]] jsou automaticky rozpoznány jako objekty Link. Odkazy se v [[Zobrazení|zobrazení]] vykreslí jako klikatelný odkaz.

- Pro vytvoření odkazu použijte globální [[Funkce|funkci]] `link`, například `link("filename")` nebo `link("https://obsidian.md")`.
- Odkaz můžete vytvořit z jakéhokoli řetězce, například `link(file.ctime.date().toString())`.
- Pro nastavení zobrazovaného textu předejte volitelný řetězec nebo ikonu jako druhý parametr, například `link("filename", "display")` nebo `link("filename", icon("plus"))`.

Objekt File lze převést na odkaz pomocí `file.asLink()` s volitelným zobrazovaným textem.

Odkazy lze porovnávat pomocí `==` a `!=`. Jsou ekvivalentní, pokud odkazují na stejný soubor, nebo pokud soubor při vyhledání neexistuje, musí být jejich text odkazu identický.

Odkazy lze porovnávat se soubory, jako je `file` nebo `this`. Budou si rovny, pokud se odkaz přeloží na daný soubor. Například `author == this`.

Odkazy lze také kontrolovat v seznamu obsahuje, například `authors.contains(this)`.
