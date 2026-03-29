---
permalink: bases/functions
publish: true
mobile: true
description: Tato stránka popisuje funkce používané v Obsidian Bases pro manipulaci s daty z vlastností ve filtrech a vzorcích.
---
Funkce se v [[Úvod do Základen|Základnách]] používají k manipulaci s daty z [[Vlastnosti|vlastností]] ve [[Zobrazení#Filtry|filtrech]] a [[Vzorce|vzorcích]]. Podrobnosti o tom, jak funkce používat, naleznete v referenci [[Syntaxe Základen|syntaxe základen]].

Kromě [[Funkce#Globální|globálních]] funkcí závisí většina funkcí na typu hodnoty, kterou chcete upravit:

- [[Funkce#Libovolný typ|Libovolný typ]]
- [[Funkce#Datum|Datum]]
- [[Funkce#Řetězec|Řetězec]]
- [[Funkce#Číslo|Číslo]]
- [[Funkce#Seznam|Seznam]]
- [[Funkce#Odkaz|Odkaz]]
- [[Funkce#Soubor|Soubor]]
- [[Funkce#Objekt|Objekt]]
- [[Funkce#Regulární výraz|Regulární výraz]]

## Globální

Globální funkce se používají bez typu.

### `escapeHTML()`

`escapeHTML(html: string): string`

- Escapuje speciální znaky v řetězci, aby byl bezpečný pro vložení do HTML.

### `date()`

`date(date: string): date`

- `date(string): date` zpracuje zadaný řetězec a vrátí objekt data.
- Řetězec `date` by měl být ve formátu `YYYY-MM-DD HH:mm:ss`.

### `duration()`

`duration(value: string): duration`

- Zpracuje řetězec jako dobu trvání. Formát řetězce `value` naleznete v sekci [[Syntaxe Základen#Datová aritmetika|datová aritmetika]].
- Doby trvání nemusí být explicitně zpracovány při provádění datové aritmetiky (například `now() + '1d'`), ale musí být zpracovány při provádění aritmetiky s dobami trvání (například `now() + (duration('1d') * 2)`).
- Při provádění aritmetiky dob trvání se skaláry musí být doba trvání vlevo. Například `duration('5h') * 2`, nikoli `2 * duration('5h')`.

### `file()`

`file(path: string | file | url): file`

- Vrátí objekt souboru pro daný soubor nebo cestu.
- Příklad: `file(link("[[filename]]"))` nebo `file("path to file")`.

### `html()`

`html(html: string): html`

- Převede řetězec na úryvek kódu, který se vykreslí jako HTML.

### `if()`

`if(condition: any, trueResult: any, falseResult?: any): any`

- `condition` je podmínka, která se vyhodnotí.
- `trueResult` je výstup, pokud je podmínka pravdivá.
- `falseResult` je volitelný výstup, pokud je podmínka nepravdivá. Pokud není zadán, předpokládá se `null`.
- Vrátí `trueResult`, pokud je `condition` pravdivá nebo má pravdivou hodnotu, jinak vrátí `falseResult`.
- Příklad: `if(isModified, "Modified", "Unmodified")`

### `image()`

`image(path: string | file | url): image`

- Vrátí objekt obrázku, který vykreslí obrázek v zobrazení.
- Příklad: `image(image-property)` nebo `image("https://obsidian.md/images/obsidian-logo-gradient.svg")`

### `icon()`

`icon(name: string): icon`

- Vrátí hodnotu, která se v zobrazení vykreslí jako ikona. Název ikony musí odpovídat podporované ikoně Lucide.
- Příklad: `icon("arrow-right")`.

### `link()`

`link(path: string | file, display?: value): Link`

- Zpracuje řetězec `path` a vrátí objekt odkazu, který se vykreslí jako odkaz na zadanou cestu.
- Volitelně zadejte parametr `display` pro změnu textu, který odkaz zobrazí.

### `list()`

`list(element: any): List`

- Pokud je zadaný prvek seznam, vrátí jej beze změny.
- V opačném případě zabalí zadaný `element` do seznamu a vytvoří seznam s jedním prvkem.
- Tato funkce může být užitečná, když vlastnost obsahuje směs řetězců nebo seznamů v rámci trezoru.
- Příklad: `list("value")` vrátí `["value"]`.

### `max()`

`max(value1: number, value2: number...): number`

- Vrátí největší ze všech zadaných čísel.

### `min()`

`min(value1: number, value2: number...): number`

- Vrátí nejmenší ze všech zadaných čísel.

### `now()`

`now(): date`

- `now()` vrátí objekt data reprezentující aktuální okamžik.

### `number()`

`number(input: any): number`

- Pokusí se vrátit zadanou hodnotu jako číslo.
- Objekty data budou vráceny jako milisekundy od unixové epochy.
- Booleovské hodnoty vrátí 1 nebo 0.
- Řetězce budou zpracovány na číslo a v případě neplatného výsledku vrátí chybu.
- Příklad: `number("3.4")` vrátí `3.4`.

### `duration()`

`duration(value: string): duration`

- Zpracuje řetězec jako dobu trvání. Formát řetězce `value` naleznete v sekci [[Syntaxe Základen#Datová aritmetika|datová aritmetika]].
- Doby trvání nemusí být explicitně zpracovány při provádění datové aritmetiky (například `now() + '1d'`), ale musí být zpracovány při provádění aritmetiky s dobami trvání (například `now() + (duration('1d') * 2)`).
- Při provádění aritmetiky dob trvání se skaláry musí být doba trvání vlevo. Například `duration('5h') * 2`, nikoli `2 * duration('5h')`.

### `today()`

`today(): date`

- `today()` vrátí objekt data reprezentující aktuální datum. Časová část je nastavena na nulu.

### `random()`

`random(): number`

- `random()` vrátí náhodné číslo mezi 0 a 1.
- Generování čísel se obnoví při každém načtení zobrazení. Přepínání mezi zobrazeními změní náhodné číslo.

## Libovolný typ

Funkce, které můžete použít s jakoukoliv hodnotou. To zahrnuje řetězce (např. `"hello"`), čísla (např. `42`), seznamy (např. `[1,2,3]`), objekty a další.

### `isTruthy()`

`any.isTruthy(): boolean`

- Vrátí hodnotu převedenou na boolean.
- Příklad: `1.isTruthy()` vrátí `true`.

### `isType()`

`any.isType(type: string): boolean`

- Vrátí true, pokud je hodnota zadaného typu.
- Příklad: `"example".isType("string")` a `true.isType("boolean")` obojí vrátí true.

### `toString()`

`any.toString(): string`

- Vrátí řetězcovou reprezentaci jakékoliv hodnoty.
- Příklad: `123.toString()` vrátí `"123"`.

## Datum

Funkce, které můžete použít s datem a časem, jako je `date("2025-05-27")`. Porovnání dat lze provádět pomocí [[Syntaxe Základen#Datová aritmetika|datové aritmetiky]].

### Pole

Pro data jsou k dispozici následující pole:

| Pole               | Typ      | Popis                        |
| ------------------ | -------- | ---------------------------- |
| `date.year`        | `number` | Rok data                     |
| `date.month`       | `number` | Měsíc data (1–12)            |
| `date.day`         | `number` | Den v měsíci                 |
| `date.hour`        | `number` | Hodina (0–23)                |
| `date.minute`      | `number` | Minuta (0–59)                |
| `date.second`      | `number` | Sekunda (0–59)               |
| `date.millisecond` | `number` | Milisekunda (0–999)          |

### `date()`

`date.date(): date`

- Vrátí objekt data s odstraněným časem.
- Příklad: `now().date().format("YYYY-MM-DD HH:mm:ss")` vrátí řetězec jako "2025-12-31 00:00:00"

### `format()`

`date.format(format: string): string`

- `format` je formátovací řetězec (např. `"YYYY-MM-DD"`).
- Vrátí datum formátované podle formátovacího řetězce Moment.js.
- Příklad: `date.format("YYYY-MM-DD")` vrátí `"2025-05-27"`.

### `time()`

`date.time(): string`

- Vrátí čas.
- Příklad: `now().time()` vrátí řetězec jako "23:59:59"

### `relative()`

`date.relative(): string`

- Vrátí čitelné porovnání data s aktuálním datem a časem.
- Příklad: `file.mtime.relative()` vrátí hodnotu jako `3 days ago`.

### `isEmpty()`

`date.isEmpty(): boolean`

- Vrátí false.

## Řetězec

Funkce, které můžete použít s posloupností znaků, jako je `"hello"`.

### Pole

| Pole            | Typ      | Popis                       |
| --------------- | -------- | --------------------------- |
| `string.length` | `number` | Počet znaků v řetězci       |

### `contains()`

`string.contains(value: string): boolean`

- `value` je podřetězec, který se hledá.
- Vrátí true, pokud řetězec obsahuje `value`.
- Příklad: `"hello".contains("ell")` vrátí `true`.

### `containsAll()`

`string.containsAll(...values: string): boolean`

- `values` je jeden nebo více podřetězců k vyhledání.
- Vrátí true, pokud řetězec obsahuje všechny `values`.
- Příklad: `"hello".containsAll("h", "e")` vrátí `true`.

### `containsAny()`

`string.containsAny(...values: string): boolean`

- `values` je jeden nebo více podřetězců k vyhledání.
- Vrátí true, pokud řetězec obsahuje alespoň jednu z `values`.
- Příklad: `"hello".containsAny("x", "y", "e")` vrátí `true`.

### `endsWith()`

`string.endsWith(query: string): boolean`

- `query` je řetězec ke kontrole na konci.
- Vrátí true, pokud tento řetězec končí na `query`.
- Příklad: `"hello".endsWith("lo")` vrátí `true`.

### `isEmpty()`

`string.isEmpty(): boolean`

- Vrátí true, pokud řetězec nemá žádné znaky nebo není přítomen.
- Příklad: `"Hello world".isEmpty()` vrátí `false`.
- Příklad: `"".isEmpty()` vrátí `true`.

### `lower()`

`string.lower(): string`

- Vrátí řetězec převedený na malá písmena.

### `replace()`

`string.replace(pattern: string | Regexp, replacement: string): string`

- `pattern` je hodnota k vyhledání v cílovém řetězci.
- `replacement` je hodnota, kterou se nalezené vzory nahradí.
- Pokud je `pattern` řetězec, budou nahrazeny všechny výskyty vzoru.
- Pokud je `pattern` regulární výraz, příznak `g` určuje, zda se nahradí pouze první nebo všechny výskyty.
- Příklad: `""a:b:c:d".replace(/:/, "-")` vrátí `"a-b,c,d"`, zatímco `"a:b:c:d".replace(/:/g, "-")` vrátí `"a-b-c-d"`.

### `repeat()`

`string.repeat(count: number): string`

- `count` je počet opakování řetězce.
- Příklad: `"123".repeat(2)` vrátí `"123123"`

### `reverse()`

`string.reverse(): string`

- Obrátí řetězec.
- Příklad: `"hello".reverse()` vrátí `"olleh"`.

### `slice()`

`string.slice(start: number, end?: number): string`

- `start` je počáteční index (včetně).
- `end` je volitelný koncový index (bez něj).
- Vrátí podřetězec od `start` (včetně) do `end` (bez něj).
- Příklad: `"hello".slice(1, 4)` vrátí `"ell"`.
- Pokud je `end` vynechán, řez pokračuje do konce řetězce.

### `split()`

`string.split(separator: string | Regexp, n?: number): list`

- `separator` je oddělovač pro rozdělení řetězce.
- `n` je volitelné číslo. Pokud je zadáno, výsledek bude obsahovat prvních `n` prvků.
- Vrátí seznam podřetězců.
- Příklad: `"a,b,c,d".split(",", 3)` nebo `"a,b,c,d".split(/,/, 3)` vrátí `["a", "b", "c"]`.

### `startsWith()`

`string.startsWith(query: string): boolean`

- `query` je řetězec ke kontrole na začátku.
- Vrátí true, pokud tento řetězec začíná na `query`.
- Příklad: `"hello".startsWith("he")` vrátí `true`.

### `title()`

`string.title(): string`

- Převede řetězec na velká písmena na začátku slov (první písmeno každého slova je velké).
- Příklad: `"hello world".title()` vrátí `"Hello World"`.

### `trim()`

`string.trim(): string`

- Odstraní mezery z obou konců řetězce.
- Příklad: `"  hi  ".trim()` vrátí `"hi"`.

## Číslo

Funkce, které můžete použít s číselnými hodnotami jako `42`, `3.14`.

### `abs()`

`number.abs(): number`

- Vrátí absolutní hodnotu čísla.
- Příklad: `(-5).abs()` vrátí `5`.

### `ceil()`

`number.ceil(): number`

- Zaokrouhlí číslo nahoru na nejbližší celé číslo.
- Příklad: `(2.1).ceil()` vrátí `3`.

### `floor()`

`number.floor(): number`

- Zaokrouhlí číslo dolů na nejbližší celé číslo.
- Příklad: `(2.9).floor()` vrátí `2`.

### `isEmpty()`

`number.isEmpty(): boolean`

- Vrátí true, pokud číslo není přítomno.
- Příklad: `5.isEmpty()` vrátí `false`.

### `round()`

`number.round(digits: number): number`

- Zaokrouhlí číslo na nejbližší celé číslo.
- Volitelně zadejte parametr `digits` pro zaokrouhlení na daný počet desetinných míst.
- Příklad: `(2.5).round()` vrátí `3` a `(2.3333).round(2)` vrátí `2.33`.

### `toFixed()`

`number.toFixed(precision: number): string`

- `precision` je počet desetinných míst.
- Vrátí řetězec s číslem v zápisu s pevnou desetinnou čárkou.
- Příklad: `(3.14159).toFixed(2)` vrátí `"3.14"`.

## Seznam

Funkce, které můžete použít s uspořádaným seznamem prvků jako `[1, 2, 3]`.

### Pole

| Pole          | Typ      | Popis                        |
| ------------- | -------- | ---------------------------- |
| `list.length` | `number` | Počet prvků v seznamu        |

### `contains()`

`list.contains(value: any): boolean`

- `value` je prvek, který se hledá.
- Vrátí true, pokud seznam obsahuje `value`.
- Příklad: `[1,2,3].contains(2)` vrátí `true`.

### `containsAll()`

`list.containsAll(...values: any): boolean`

- `values` je jeden nebo více prvků k vyhledání.
- Vrátí true, pokud seznam obsahuje všechny `values`.
- Příklad: `[1,2,3].containsAll(2,3)` vrátí `true`.

### `containsAny()`

`list.containsAny(...values: any): boolean`

- `values` je jeden nebo více prvků k vyhledání.
- Vrátí true, pokud seznam obsahuje alespoň jednu z `values`.
- Příklad: `[1,2,3].containsAny(3,4)` vrátí `true`.

### `filter()`

`list.filter(value: Boolean): list`

- Filtruje prvky tohoto seznamu voláním filtrovací funkce, která používá proměnné `index` a `value` a vrací booleovskou hodnotu, zda má být prvek zachován.
- `value` je hodnota položky v seznamu.
- `index` je index aktuální hodnoty.
- Příklad: `[1,2,3,4].filter(value > 2)` vrátí `[3,4]`.

### `flat()`

`list.flat(): list`

- Zploští vnořené seznamy do jednoho seznamu.
- Příklad: `[1,[2,3]].flat()` vrátí `[1,2,3]`.

### `isEmpty()`

`list.isEmpty(): boolean`

- Vrátí true, pokud seznam nemá žádné prvky.
- Příklad: `[1,2,3].isEmpty()` vrátí `false`.

### `join()`

`list.join(separator: string): string`

- `separator` je řetězec vložený mezi prvky.
- Spojí všechny prvky seznamu do jednoho řetězce.
- Příklad: `[1,2,3].join(",")` vrátí `"1,2,3"`.

### `map()`

`list.map(value: Any): list`

- Transformuje každý prvek tohoto seznamu voláním konverzní funkce, která používá proměnné `index` a `value` a vrací novou hodnotu, která bude umístěna do seznamu.
- `value` je hodnota položky v seznamu.
- `index` je index aktuální hodnoty.
- Příklad: `[1,2,3,4].map(value + 1)` vrátí `[2,3,4,5]`.

### `reduce()`

`list.reduce(expression: Any, acc: Any): Any`

- Redukuje prvky tohoto seznamu na jedinou hodnotu spuštěním výrazu pro každý prvek. Výraz může používat proměnné `index`, `value` a `acc` (akumulátor) a měl by vrátit další hodnotu akumulátoru.
- `expression` se vyhodnotí pro každý prvek v seznamu.
- `value` je hodnota aktuální položky v seznamu.
- `index` je index aktuální položky.
- `acc` je dosud akumulovaná hodnota.
- Příklad (součet): `[1,2,3].reduce(acc + value, 0)` vrátí `6`.
- Příklad (maximum): `values.filter(value.isType("number")).reduce(if(acc == null || value > acc, value, acc), null)` vrátí největší číslo, nebo `null`, pokud žádné neexistuje.

### `reverse()`

`list.reverse(): list`

- Obrátí seznam na místě.
- Příklad: `[1,2,3].reverse()` vrátí `[3,2,1]`.

### `slice()`

`list.slice(start: number, end?: number): list`

- `start` je počáteční index (včetně).
- `end` je volitelný koncový index (bez něj).
- Vrátí mělkou kopii části seznamu od `start` (včetně) do `end` (bez něj).
- Příklad: `[1,2,3,4].slice(1,3)` vrátí `[2,3]`.
- Pokud je `end` vynechán, řez pokračuje do konce seznamu.

### `sort()`

`list.sort(): list`

- Seřadí prvky seznamu od nejmenšího po největší.
- Příklad: `[3, 1, 2].sort()` vrátí `[1, 2, 3]`.
- Příklad: `["c", "a", "b"].sort()` vrátí `["a", "b", "c"]`.

### `unique()`

`list.unique(): list`

- Odstraní duplicitní prvky.
- Příklad: `[1,2,2,3].unique()` vrátí `[1,2,3]`.

## Odkaz

Funkce, které můžete použít na odkaz. Odkazy lze vytvořit ze souboru (`file.asLink()`) nebo cesty (`link("path")`).

### `asFile()`

`link.asFile(): file`

- Vrátí objekt souboru, pokud odkaz odkazuje na platný lokální soubor.
- Příklad: `link("[[filename]]").asFile()`

### `linksTo()`

`link.linksTo(file): boolean`

- Vrátí, zda soubor reprezentovaný `link` má odkaz na `file`.

## Soubor

Funkce, které můžete použít se soubory v trezoru.

### Pole

Pro soubory jsou k dispozici následující pole:

| Pole              | Typ      | Popis                                                        |
| ----------------- | -------- | ------------------------------------------------------------ |
| `file.name`       | `string` | Název tohoto souboru.                                        |
| `file.basename`   | `string` | Název tohoto souboru bez přípony.                            |
| `file.path`       | `string` | Úplná cesta k tomuto souboru, relativní ke kořeni trezoru.   |
| `file.folder`     | `string` | Úplná cesta k nadřazené složce.                              |
| `file.ext`        | `string` | Přípona tohoto souboru.                                      |
| `file.size`       | `number` | Velikost tohoto souboru v bajtech.                           |
| `file.properties` | `object` | Vlastnosti poznámky tohoto souboru.                          |
| `file.tags`       | `list`   | Štítky tohoto souboru. Zahrnuje inline štítky.               |
| `file.links`      | `list`   | Interní odkazy v tomto souboru.                              |
| `file.ctime`      | `date`   | Časové razítko vytvoření tohoto souboru.                     |
| `file.mtime`      | `date`   | Časové razítko poslední úpravy tohoto souboru.               |

### `asLink()`

`file.asLink(display?: string): Link`

- `display` volitelný zobrazený text pro odkaz.
- Vrátí objekt odkazu, který se vykreslí jako funkční odkaz.
- Příklad: `file.asLink()`

### `hasLink()`

`file.hasLink(otherFile: file | string): boolean`

- `otherFile` je jiný objekt souboru nebo řetězcová cesta ke kontrole.
- Vrátí true, pokud `file` odkazuje na `otherFile`.
- Příklad: `file.hasLink(otherFile)` vrátí `true`, pokud existuje odkaz z `file` na `otherFile`.

### `hasProperty()`

`file.hasProperty(name: string): boolean`

- Vrátí true, pokud poznámka má danou vlastnost souboru.

### `hasTag()`

`file.hasTag(...values: string): boolean`

- `values` je jeden nebo více názvů štítků.
- Vrátí true, pokud soubor má některý ze štítků v `values`.
- Příklad: `file.hasTag("tag1", "tag2")` vrátí `true`, pokud soubor má štítek `#tag1` nebo `#tag2`. Zahrnuje také všechny [[Tagy#Vnořené štítky|vnořené štítky]], jako `#tag1/a` nebo `#tag2/b`.

### `inFolder()`

`file.inFolder(folder: string): boolean`

- `folder` je název složky ke kontrole.
- Vrátí true, pokud je soubor v zadané složce nebo jedné z jejích podsložek.
- Příklad: `file.inFolder("notes")` vrátí `true`.

## Objekt

Funkce, které můžete použít s kolekcí párů klíč-hodnota jako `{"a": 1, "b": 2}`.

### `isEmpty()`

`object.isEmpty(): boolean`

- Vrátí true, pokud objekt nemá žádné vlastní vlastnosti.
- Příklad: `{}.isEmpty()` vrátí `true`.

### `keys()`

`object.keys(): list`

- Vrátí seznam obsahující klíče objektu.

### `values()`

`object.values(): list`

- Vrátí seznam obsahující hodnoty objektu.

## Regulární výraz

Funkce, které můžete použít se vzorem regulárního výrazu. Příklad: `/abc/`.

### `matches()`

`regexp.matches(value: string): boolean`

- `value` je řetězec k testování.
- Vrátí true, pokud regulární výraz odpovídá `value`.
- Příklad: `/abc/.matches("abcde")` vrátí `true`.
