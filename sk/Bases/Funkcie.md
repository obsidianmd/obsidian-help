---
permalink: bases/functions
publish: true
mobile: true
description: Táto stránka podrobne opisuje funkcie používané v Obsidian Bases na manipuláciu s dátami z vlastností vo filtroch a vzorcoch.
---
Funkcie sa používajú v [[Úvod do Databáz|Databázach]] na manipuláciu s dátami z [[Vlastnosti|vlastností]] vo [[Zobrazenia#Filtre|filtroch]] a [[Vzorce|vzorcoch]]. Pozrite si referenciu [[Syntax Databáz|syntaxe databáz]], kde sa dozviete viac o tom, ako môžete funkcie používať.

Funkcie databáz sa riadia správaním JavaScriptu. Kompletnú referenčnú dokumentáciu nájdete na [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).

Okrem [[Funkcie#Globálne|globálnych]] funkcií väčšina funkcií závisí od typu hodnoty, ktorú chcete upraviť:

- [[Funkcie#Typ Any|Any]]
- [[Funkcie#Typ Dátum|Dátum]]
- [[Funkcie#Typ Reťazec|Reťazec]]
- [[Funkcie#Typ Číslo|Číslo]]
- [[Funkcie#Typ Zoznam|Zoznam]]
- [[Funkcie#Typ Odkaz|Odkaz]]
- [[Funkcie#Typ Súbor|Súbor]]
- [[Funkcie#Typ Objekt|Objekt]]
- [[Funkcie#Typ Regulárny výraz|Regulárny výraz]]

## Globálne

Globálne funkcie sa používajú bez typu.

### `escapeHTML()`

`escapeHTML(html: string): string`

- Escapuje špeciálne znaky v reťazci, aby bol bezpečný na zahrnutie do HTML.

### `date()`

`date(date: string): date`

- `date(string): date` parsuje poskytnutý reťazec a vráti objekt dátumu.
- Reťazec `date` by mal byť vo formáte `YYYY-MM-DD HH:mm:ss`.

### `duration()`

`duration(value: string): duration`

- Parsuje reťazec ako trvanie. Pozrite si [[Syntax Databáz#Dátumová aritmetika|sekciu dátumovej aritmetiky]] pre formát reťazca `value`.
- Explicitné parsovanie nie je potrebné pri dátumovej aritmetike (napríklad `now() + '1d'`), ale je potrebné pri vykonávaní aritmetiky s trvaniami (napríklad `now() + (duration('1d') * 2)`).
- Pri vykonávaní aritmetiky trvaní so skalármi musí byť trvanie na ľavej strane. Napríklad `duration('5h') * 2` namiesto `2 * duration('5h')`.

### `file()`

`file(path: string | file | url): file`

- Vráti objekt súboru pre daný súbor alebo cestu.
- Príklad: `file(link("[[filename]]"))` alebo `file("path to file")`.

### `html()`

`html(html: string): html`

- Konvertuje reťazec na úryvok kódu, ktorý sa vykreslí ako HTML.

### `if()`

`if(condition: any, trueResult: any, falseResult?: any): any`

- `condition` je výraz na vyhodnotenie.
- `trueResult` je výstup, ak je `condition` pravdivá.
- `falseResult` je voliteľný výstup, ak je `condition` nepravdivá. Ak je vynechaný, predvolená hodnota je `null`.
- Vráti `trueResult`, ak je `condition` pravdivá alebo je pravdivá hodnota, inak vráti `falseResult`.
- Príklad: `if(isModified, "Modified", "Unmodified")`

### `image()`

`image(path: string | file | url): image`

- Vráti objekt obrázka, ktorý vykreslí obrázok v zobrazení.
- Príklad: `image(image-property)` alebo `image("https://obsidian.md/images/obsidian-logo-gradient.svg")`.

### `icon()`

`icon(name: string): icon`

- Vráti hodnotu, ktorá sa vykreslí ako ikona v zobrazení. Názov ikony musí zodpovedať podporovanej ikone Lucide.
- Príklad: `icon("arrow-right")`.

### `link()`

`link(path: string | file, display?: value): Link`

- Parsuje reťazec `path` a vráti objekt Link, ktorý sa vykreslí ako odkaz na danú cestu.
- Voliteľne zadajte parameter `display` na nastavenie zobrazeného textu odkazu.

### `list()`

`list(element: any): List`

- Ak je poskytnutý element zoznam, vráti ho bez zmeny.
- Inak zabalí poskytnutý `element` do zoznamu, čím vytvorí zoznam s jedným prvkom.
- Použite túto funkciu, keď vlastnosť obsahuje v trezore zmes reťazcov alebo zoznamov.
- Príklad: `list("value")` vráti `["value"]`.

### `max()`

`max(value1: number, value2: number...): number`

- Vráti najväčšie z poskytnutých čísel.

### `min()`

`min(value1: number, value2: number...): number`

- Vráti najmenšie z poskytnutých čísel.

### `now()`

`now(): date`

- Vráti objekt dátumu pre aktuálny moment.

### `number()`

`number(input: any): number`

- Pokúsi sa vrátiť poskytnutú hodnotu ako číslo.
- Vráti objekty dátumu ako milisekundy od unixovej epochy.
- Vráti booleovské hodnoty ako `1` alebo `0`.
- Parsuje reťazce ako čísla a vráti chybu, ak reťazec nie je platné číslo.
- Príklad: `number("3.4")` vráti `3.4`.

### `today()`

`today(): date`

- Vráti objekt dátumu pre aktuálny dátum. Časová časť je nastavená na polnoc.

### `random()`

`random(): number`

- Vráti náhodné číslo medzi 0 a 1.
- Generovanie čísla sa obnoví vždy, keď sa načíta zobrazenie. Navigácia medzi zobrazeniami zmení náhodné číslo.

## Typ Any

Funkcie, ktoré môžete použiť s akoukoľvek hodnotou. To zahŕňa reťazce (napr. `"hello"`), čísla (napr. `42`), zoznamy (napr. `[1,2,3]`), objekty a ďalšie.

### `isTruthy()`

`any.isTruthy(): boolean`

- Vráti hodnotu pretypovanú na boolean.
- Príklad: `1.isTruthy()` vráti `true`.

### `isType()`

`any.isType(type: string): boolean`

- Vráti true, ak je hodnota poskytnutého typu.
- Príklad: `"example".isType("string")` a `true.isType("boolean")` obe vrátia true.

### `toString()`

`any.toString(): string`

- Vráti reťazcovú reprezentáciu akejkoľvek hodnoty.
- Príklad: `123.toString()` vráti `"123"`.

## Typ Dátum

Funkcie, ktoré môžete použiť s dátumom a časom, ako napríklad `date("2025-05-27")`. Porovnávanie dátumov je možné pomocou [[Syntax Databáz#Dátumová aritmetika|dátumovej aritmetiky]].

### Polia

Pre dátumy sú dostupné nasledujúce polia:

| Pole               | Typ      | Popis                         |
| ------------------ | -------- | ----------------------------- |
| `date.year`        | `number` | Rok dátumu                    |
| `date.month`       | `number` | Mesiac dátumu (1–12)          |
| `date.day`         | `number` | Deň v mesiaci                 |
| `date.hour`        | `number` | Hodina (0–23)                 |
| `date.minute`      | `number` | Minúta (0–59)                 |
| `date.second`      | `number` | Sekunda (0–59)                |
| `date.millisecond` | `number` | Milisekunda (0–999)           |

### `date()`

`date.date(): date`

- Vráti objekt dátumu s odstráneným časom.
- Príklad: `now().date().format("YYYY-MM-DD HH:mm:ss")` vráti reťazec ako "2025-12-31 00:00:00".

### `format()`

`date.format(format: string): string`

- `format` je formátovací reťazec (napr. `"YYYY-MM-DD"`).
- Vráti dátum naformátovaný podľa formátovacieho reťazca Moment.js.
- Príklad: `date.format("YYYY-MM-DD")` vráti `"2025-05-27"`.

### `time()`

`date.time(): string`

- Vráti časovú časť ako reťazec.
- Príklad: `now().time()` vráti reťazec ako "23:59:59".

### `relative()`

`date.relative(): string`

- Vráti čitateľné porovnanie dátumu s aktuálnym dátumom a časom.
- Príklad: `file.mtime.relative()` vráti hodnotu ako `3 days ago`.

### `isEmpty()`

`date.isEmpty(): boolean`

- Vráti false.

## Typ Reťazec

Funkcie, ktoré môžete použiť s postupnosťou znakov, ako napríklad `"hello"`.

### Polia

| Pole            | Typ      | Popis                           |
| --------------- | -------- | ------------------------------- |
| `string.length` | `number` | Počet znakov v reťazci          |

### `contains()`

`string.contains(value: string): boolean`

- `value` je podreťazec na vyhľadanie.
- Vráti true, ak reťazec obsahuje `value`.
- Príklad: `"hello".contains("ell")` vráti `true`.

### `containsAll()`

`string.containsAll(...values: string): boolean`

- `values` sú jeden alebo viac podreťazcov na vyhľadanie.
- Vráti true, ak reťazec obsahuje všetky `values`.
- Príklad: `"hello".containsAll("h", "e")` vráti `true`.

### `containsAny()`

`string.containsAny(...values: string): boolean`

- `values` sú jeden alebo viac podreťazcov na vyhľadanie.
- Vráti true, ak reťazec obsahuje aspoň jednu z `values`.
- Príklad: `"hello".containsAny("x", "y", "e")` vráti `true`.

### `endsWith()`

`string.endsWith(query: string): boolean`

- `query` je reťazec na kontrolu na konci.
- Vráti true, ak tento reťazec končí na `query`.
- Príklad: `"hello".endsWith("lo")` vráti `true`.

### `isEmpty()`

`string.isEmpty(): boolean`

- Vráti true, ak reťazec nemá žiadne znaky alebo nie je prítomný.
- Príklad: `"Hello world".isEmpty()` vráti `false`.
- Príklad: `"".isEmpty()` vráti `true`.

### `lower()`

`string.lower(): string`

- Vráti reťazec prevedený na malé písmená.

### `replace()`

`string.replace(pattern: string | Regexp, replacement: string): string`

- `pattern` je hodnota na vyhľadanie v cieľovom reťazci.
- `replacement` je hodnota, ktorou sa nahradia nájdené vzory. Keď je `pattern` Regexp, môžete v `replacement` odkazovať na zachytené skupiny pomocou `$1`, `$2` atď.
- Ak je `pattern` reťazec, budú nahradené všetky výskyty vzoru.
- Ak je `pattern` Regexp, príznak `g` určuje, či sa nahradí iba prvý alebo všetky výskyty.
- Príklad: `"a:b:c:d".replace(/:/, "-")` vráti `"a-b:c:d"`, zatiaľ čo `"a:b:c:d".replace(/:/g, "-")` vráti `"a-b-c-d"`.
- Príklad so zachytenými skupinami: `"John Smith".replace(/(\w+) (\w+)/, "$2, $1")` vráti `"Smith, John"`.

### `repeat()`

`string.repeat(count: number): string`

- `count` je počet opakovaní reťazca.
- Príklad: `"123".repeat(2)` vráti `"123123"`.

### `reverse()`

`string.reverse(): string`

- Obráti reťazec.
- Príklad: `"hello".reverse()` vráti `"olleh"`.

### `slice()`

`string.slice(start: number, end?: number): string`

- `start` je inkluzívny počiatočný index.
- `end` je voliteľný exkluzívny koncový index.
- Vráti podreťazec od `start` (inkluzívne) po `end` (exkluzívne).
- Príklad: `"hello".slice(1, 4)` vráti `"ell"`.
- Ak je `end` vynechaný, reže sa po koniec reťazca.

### `split()`

`string.split(separator: string | Regexp, n?: number): list`

- `separator` je oddeľovač na rozdelenie reťazca.
- `n` je voliteľné číslo. Ak je zadané, výsledok bude obsahovať prvých `n` prvkov.
- Vráti zoznam podreťazcov.
- Príklad: `"a,b,c,d".split(",", 3)` alebo `"a,b,c,d".split(/,/, 3)` vráti `["a", "b", "c"]`.

### `startsWith()`

`string.startsWith(query: string): boolean`

- `query` je reťazec na kontrolu na začiatku.
- Vráti true, ak tento reťazec začína na `query`.
- Príklad: `"hello".startsWith("he")` vráti `true`.

### `title()`

`string.title(): string`

- Prevedie reťazec na veľké začiatočné písmená (prvé písmeno každého slova veľké).
- Príklad: `"hello world".title()` vráti `"Hello World"`.

### `trim()`

`string.trim(): string`

- Odstráni medzery z oboch koncov reťazca.
- Príklad: `"  hi  ".trim()` vráti `"hi"`.

## Typ Číslo

Funkcie, ktoré môžete použiť s číselnými hodnotami, ako napríklad `42`, `3.14`.

### `abs()`

`number.abs(): number`

- Vráti absolútnu hodnotu čísla.
- Príklad: `(-5).abs()` vráti `5`.

### `ceil()`

`number.ceil(): number`

- Zaokrúhli číslo nahor na najbližšie celé číslo.
- Príklad: `(2.1).ceil()` vráti `3`.

### `floor()`

`number.floor(): number`

- Zaokrúhli číslo nadol na najbližšie celé číslo.
- Príklad: `(2.9).floor()` vráti `2`.

### `isEmpty()`

`number.isEmpty(): boolean`

- Vráti true, ak číslo nie je prítomné.
- Príklad: `5.isEmpty()` vráti `false`.

### `round()`

`number.round(digits: number): number`

- Zaokrúhli číslo na najbližšie celé číslo.
- Voliteľne zadajte parameter `digits` na zaokrúhlenie na daný počet desatinných miest.
- Príklad: `(2.5).round()` vráti `3` a `(2.3333).round(2)` vráti `2.33`.

### `toFixed()`

`number.toFixed(precision: number): string`

- `precision` je počet desatinných miest.
- Vráti reťazec s číslom v zápise s pevnou desatinnou čiarkou.
- Príklad: `(3.14159).toFixed(2)` vráti `"3.14"`.

## Typ Zoznam

Funkcie, ktoré môžete použiť s usporiadaným zoznamom prvkov, ako napríklad `[1, 2, 3]`.

### Polia

| Pole          | Typ      | Popis                        |
| ------------- | -------- | ---------------------------- |
| `list.length` | `number` | Počet prvkov v zozname       |

### `contains()`

`list.contains(value: any): boolean`

- `value` je prvok na vyhľadanie.
- Vráti true, ak zoznam obsahuje `value`.
- Príklad: `[1,2,3].contains(2)` vráti `true`.

### `containsAll()`

`list.containsAll(...values: any): boolean`

- `values` sú jeden alebo viac prvkov na vyhľadanie.
- Vráti true, ak zoznam obsahuje všetky `values`.
- Príklad: `[1,2,3].containsAll(2,3)` vráti `true`.

### `containsAny()`

`list.containsAny(...values: any): boolean`

- `values` sú jeden alebo viac prvkov na vyhľadanie.
- Vráti true, ak zoznam obsahuje aspoň jeden z `values`.
- Príklad: `[1,2,3].containsAny(3,4)` vráti `true`.

### `filter()`

`list.filter(value: Boolean): list`

- Filtruje zoznam a ponechá iba prvky, kde je výraz pravdivý.
- `value` je hodnota položky v zozname.
- `index` je index aktuálnej hodnoty.
- Príklad: `[1,2,3,4].filter(value > 2)` vráti `[3,4]`.

### `flat()`

`list.flat(): list`

- Sploští vnorený zoznam do jedného zoznamu.
- Príklad: `[1,[2,3]].flat()` vráti `[1,2,3]`.

### `isEmpty()`

`list.isEmpty(): boolean`

- Vráti true, ak zoznam nemá žiadne prvky.
- Príklad: `[1,2,3].isEmpty()` vráti `false`.

### `join()`

`list.join(separator: string): string`

- `separator` je reťazec na vloženie medzi prvky.
- Spojí všetky prvky zoznamu do jedného reťazca.
- Príklad: `[1,2,3].join(",")` vráti `"1,2,3"`.

### `map()`

`list.map(value: Any): list`

- Transformuje každý prvok zoznamu pomocou výrazu.
- `value` je hodnota položky v zozname.
- `index` je index aktuálnej hodnoty.
- Príklad: `[1,2,3,4].map(value + 1)` vráti `[2,3,4,5]`.

### `reduce()`

`list.reduce(expression: Any, acc: Any): Any`

- Redukuje zoznam na jednu hodnotu spustením výrazu pre každý prvok. Výraz musí vrátiť nasledujúcu hodnotu `acc`. Použite `value` pre aktuálny prvok, `index` pre jeho pozíciu a `acc` pre doteraz akumulovaný výsledok.
- `expression` sa vyhodnotí pre každý prvok v zozname.
- `value` je hodnota aktuálnej položky v zozname.
- `index` je index aktuálnej položky.
- `acc` je doteraz akumulovaná hodnota.
- Príklad (súčet): `[1,2,3].reduce(acc + value, 0)` vráti `6`.
- Príklad (maximum): `values.filter(value.isType("number")).reduce(if(acc == null || value > acc, value, acc), null)` vráti najväčšie číslo, alebo `null`, ak žiadne nie je.

### `reverse()`

`list.reverse(): list`

- Obráti zoznam na mieste.
- Príklad: `[1,2,3].reverse()` vráti `[3,2,1]`.

### `slice()`

`list.slice(start: number, end?: number): list`

- `start` je inkluzívny počiatočný index.
- `end` je voliteľný exkluzívny koncový index.
- Vráti plytkú kópiu časti zoznamu od `start` (inkluzívne) po `end` (exkluzívne).
- Príklad: `[1,2,3,4].slice(1,3)` vráti `[2,3]`.
- Ak je `end` vynechaný, reže sa po koniec zoznamu.

### `sort()`

`list.sort(): list`

- Zoradí prvky zoznamu od najmenšieho po najväčší.
- Príklad: `[3, 1, 2].sort()` vráti `[1, 2, 3]`.
- Príklad: `["c", "a", "b"].sort()` vráti `["a", "b", "c"]`.

### `unique()`

`list.unique(): list`

- Odstráni duplicitné prvky.
- Príklad: `[1,2,2,3].unique()` vráti `[1,2,3]`.

## Typ Odkaz

Funkcie, ktoré môžete použiť na odkaz. Odkazy je možné vytvoriť zo súboru (`file.asLink()`) alebo z cesty (`link("path")`).

### `asFile()`

`link.asFile(): file`

- Vráti objekt súboru, ak odkaz odkazuje na platný lokálny súbor.
- Príklad: `link("[[filename]]").asFile()`.

### `linksTo()`

`link.linksTo(file): boolean`

- Vráti `true`, ak súbor reprezentovaný `link` má odkaz na `file`.

## Typ Súbor

Funkcie, ktoré môžete použiť so súborom v trezore.

### Polia

Pre súbory sú dostupné nasledujúce polia:

| Pole              | Typ      | Popis                                                       |
| ----------------- | -------- | ----------------------------------------------------------- |
| `file.name`       | `string` | Názov tohto súboru.                                         |
| `file.basename`   | `string` | Názov tohto súboru bez prípony.                             |
| `file.path`       | `string` | Úplná cesta k tomuto súboru relatívne ku koreňu trezoru.   |
| `file.folder`     | `string` | Úplná cesta k nadradenému priečinku.                        |
| `file.ext`        | `string` | Prípona tohto súboru.                                       |
| `file.size`       | `number` | Veľkosť tohto súboru v bajtoch.                             |
| `file.properties` | `object` | Vlastnosti poznámky tohto súboru.                           |
| `file.tags`       | `list`   | Značky tohto súboru. Zahŕňa inline značky.                  |
| `file.links`      | `list`   | Interné odkazy v tomto súbore.                              |
| `file.ctime`      | `date`   | Časová pečiatka vytvorenia tohto súboru.                    |
| `file.mtime`      | `date`   | Časová pečiatka poslednej úpravy tohto súboru.              |

### `asLink()`

`file.asLink(display?: string): Link`

- `display` je voliteľný zobrazený text pre odkaz.
- Vráti objekt Link, ktorý sa vykreslí ako funkčný odkaz.
- Príklad: `file.asLink()`

### `hasLink()`

`file.hasLink(otherFile: file | string): boolean`

- `otherFile` je iný objekt súboru alebo cesta ako reťazec na kontrolu.
- Vráti true, ak `file` odkazuje na `otherFile`.
- Príklad: `file.hasLink(otherFile)` vráti `true`, ak existuje odkaz z `file` na `otherFile`.

### `hasProperty()`

`file.hasProperty(name: string): boolean`

- Vráti `true`, ak súbor má danú vlastnosť.

### `hasTag()`

`file.hasTag(...values: string): boolean`

- `values` sú jeden alebo viac názvov značiek.
- Vráti true, ak súbor má niektorú zo značiek v `values`.
- Príklad: `file.hasTag("tag1", "tag2")` vráti `true`, ak súbor má značku `#tag1` alebo `#tag2`. Zahŕňa aj akékoľvek [[Značky#Vnorené značky|vnorené značky]], ako napríklad `#tag1/a` alebo `#tag2/b`.

### `inFolder()`

`file.inFolder(folder: string): boolean`

- `folder` je názov priečinka na kontrolu.
- Vráti true, ak sa súbor nachádza v zadanom priečinku alebo v jednom z jeho podpriečinkov.
- Príklad: `file.inFolder("notes")` vráti `true`.

## Typ Objekt

Funkcie, ktoré môžete použiť s kolekciou párov kľúč-hodnota, ako napríklad `{"a": 1, "b": 2}`.

### `isEmpty()`

`object.isEmpty(): boolean`

- Vráti true, ak objekt nemá žiadne vlastné vlastnosti.
- Príklad: `{}.isEmpty()` vráti `true`.

### `keys()`

`object.keys(): list`

- Vráti zoznam obsahujúci kľúče objektu.

### `values()`

`object.values(): list`

- Vráti zoznam obsahujúci hodnoty objektu.

## Typ Regulárny výraz

Funkcie, ktoré môžete použiť so vzorom regulárneho výrazu. Príklad: `/abc/`.

### `matches()`

`regexp.matches(value: string): boolean`

- `value` je reťazec na testovanie.
- Vráti true, ak regulárny výraz zodpovedá `value`.
- Príklad: `/abc/.matches("abcde")` vráti `true`.
