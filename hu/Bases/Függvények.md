---
permalink: bases/functions
publish: true
mobile: true
description: 'Ez az oldal részletezi az Obsidian Bases-ben használt függvényeket, amelyekkel szűrőkben és képletekben manipulálhatók a tulajdonságokból származó adatok.'
---
A függvényeket a [[Bevezetés a Bázisokba|Bázisokban]] használjuk a [[Tulajdonságok|tulajdonságokból]] származó adatok manipulálására [[Nézetek#Szűrők|szűrőkben]] és [[Képletek|képletekben]]. Tekintsd meg a [[Bázisok szintaxisa|bázisok szintaxisa]] referenciát, hogy többet megtudj a függvények használatáról.

A [[Függvények#Globális|Globális]] függvényeken kívül a legtöbb függvény az érték típusától függ, amelyet módosítani szeretnél:

- [[Függvények#Bármely|Bármely]]
- [[Függvények#Dátum|Dátum]]
- [[Függvények#Szöveg|Szöveg]]
- [[Függvények#Szám|Szám]]
- [[Függvények#Lista|Lista]]
- [[Függvények#Hivatkozás|Hivatkozás]]
- [[Függvények#Fájl|Fájl]]
- [[Függvények#Objektum|Objektum]]
- [[Függvények#Reguláris kifejezés|Reguláris kifejezés]]

## Globális

A globális függvények típus nélkül használhatók.

### `escapeHTML()`

`escapeHTML(html: string): string`

- A speciális karaktereket escapeli egy szövegben, hogy biztonságossá tegye HTML-be való beillesztésre.

### `date()`

`date(date: string): date`

- `date(string): date` feldolgozza a megadott szöveget és egy dátum objektumot ad vissza.
- A `date` szövegnek `YYYY-MM-DD HH:mm:ss` formátumúnak kell lennie.

### `duration()`

`duration(value: string): duration`

- Egy szöveget időtartamként értelmez. Lásd a [[Bázisok szintaxisa#Dátumaritmetika|dátumaritmetika szekciót]] a `value` szöveg formátumához.
- Az időtartamokat nem szükséges kifejezetten feldolgozni dátumaritmetika végrehajtásakor (például `now() + '1d'`), de szükséges, amikor időtartamokon végzünk aritmetikát (például `now() + (duration('1d') * 2)`).
- Amikor időtartamokon skalárokkal végzünk aritmetikát, az időtartamnak kell bal oldalon lennie. Például `duration('5h') * 2`, a `2 * duration('5h')` helyett.

### `file()`

`file(path: string | file | url): file`

- Visszaadja a megadott fájl vagy útvonal fájl objektumát.
- Példa: `file(link("[[fájlnév]]"))` vagy `file("fájl útvonala")`.

### `html()`

`html(html: string): html`

- Egy szöveget HTML-ként megjelenítő kódrészletté alakít.

### `if()`

`if(condition: any, trueResult: any, falseResult?: any): any`

- `condition` a kiértékelendő feltétel.
- `trueResult` a kimenet, ha a feltétel igaz.
- `falseResult` az opcionális kimenet, ha a feltétel hamis. Ha nincs megadva, `null` értéket vesz fel.
- Visszaadja a `trueResult` értéket, ha a `condition` igaz, vagy igaznak kiértékelhető érték, ellenkező esetben a `falseResult` értéket.
- Példa: `if(isModified, "Módosított", "Nem módosított")`

### `image()`

`image(path: string | file | url): image`

- Visszaad egy kép objektumot, amely megjeleníti a képet a nézetben.
- Példa: `image(kep-tulajdonsag)` vagy `image("https://obsidian.md/images/obsidian-logo-gradient.svg")`

### `icon()`

`icon(name: string): icon`

- Visszaad egy értéket, amely ikonként jelenik meg a nézetben. Az ikon nevének egy támogatott Lucide ikonnak kell megfelelnie.
- Példa: `icon("arrow-right")`.

### `link()`

`link(path: string | file, display?: value): Link`

- Feldolgozza a `path` szöveget és visszaad egy Link objektumot, amely a megadott útvonalra mutató hivatkozásként jelenik meg.
- Opcionálisan add meg a `display` paramétert a hivatkozás megjelenített szövegének módosításához.

### `list()`

`list(element: any): List`

- Ha a megadott elem egy lista, módosítás nélkül adja vissza.
- Ellenkező esetben becsomagolja a megadott `element` elemet egy listába, egyetlen elemet tartalmazó listát hozva létre.
- Ez a függvény hasznos lehet, amikor egy tulajdonság szövegek vagy listák keverékét tartalmazza a széfben.
- Példa: `list("érték")` visszaadja: `["érték"]`.

### `max()`

`max(value1: number, value2: number...): number`

- Visszaadja a megadott számok közül a legnagyobbat.

### `min()`

`min(value1: number, value2: number...): number`

- Visszaadja a megadott számok közül a legkisebbet.

### `now()`

`now(): date`

- `now()` visszaad egy dátum objektumot, amely az aktuális pillanatot képviseli.

### `number()`

`number(input: any): number`

- Megpróbálja a megadott értéket számként visszaadni.
- A dátum objektumok a Unix-korszak óta eltelt ezredmásodpercekként kerülnek visszaadásra.
- A logikai értékek 1-et vagy 0-t adnak vissza.
- A szövegek számként kerülnek feldolgozásra, és hibát adnak vissza, ha az eredmény érvénytelen.
- Példa: `number("3.4")` visszaadja: `3.4`.

### `duration()`

`duration(value: string): duration`

- Egy szöveget időtartamként értelmez. Lásd a [[Bázisok szintaxisa#Dátumaritmetika|dátumaritmetika szekciót]] a `value` szöveg formátumához.
- Az időtartamokat nem szükséges kifejezetten feldolgozni dátumaritmetika végrehajtásakor (például `now() + '1d'`), de szükséges, amikor időtartamokon végzünk aritmetikát (például `now() + (duration('1d') * 2)`).
- Amikor időtartamokon skalárokkal végzünk aritmetikát, az időtartamnak kell bal oldalon lennie. Például `duration('5h') * 2`, a `2 * duration('5h')` helyett.

### `today()`

`today(): date`

- `today()` visszaad egy dátum objektumot, amely az aktuális dátumot képviseli. Az idő rész nullára van állítva.

### `random()`

`random(): number`

- `random()` visszaad egy véletlenszerű számot 0 és 1 között.
- A számgenerálás minden nézet betöltésekor frissül. A nézetek közötti navigálás megváltoztatja a véletlenszerű számot.

## Bármely

Bármely értékkel használható függvények. Ide tartoznak a szövegek (pl. `"hello"`), számok (pl. `42`), listák (pl. `[1,2,3]`), objektumok és egyebek.

### `isTruthy()`

`any.isTruthy(): boolean`

- Az értéket logikai értékké kényszerítve adja vissza.
- Példa: `1.isTruthy()` visszaadja: `true`.

### `isType()`

`any.isType(type: string): boolean`

- Igazat ad vissza, ha az érték a megadott típusú.
- Példa: `"example".isType("string")` és `true.isType("boolean")` mindkettő igazat ad vissza.

### `toString()`

`any.toString(): string`

- Bármely érték szöveges reprezentációját adja vissza.
- Példa: `123.toString()` visszaadja: `"123"`.

## Dátum

Dátummal és idővel használható függvények, mint például `date("2025-05-27")`. A dátum-összehasonlítások [[Bázisok szintaxisa#Dátumaritmetika|dátumaritmetikával]] végezhetők.

### Mezők

A következő mezők érhetők el dátumokhoz:

| Mező               | Típus    | Leírás                            |
| ------------------ | -------- | --------------------------------- |
| `date.year`        | `number` | A dátum éve                       |
| `date.month`       | `number` | A dátum hónapja (1–12)            |
| `date.day`         | `number` | A hónap napja                     |
| `date.hour`        | `number` | Az óra (0–23)                     |
| `date.minute`      | `number` | A perc (0–59)                     |
| `date.second`      | `number` | A másodperc (0–59)                |
| `date.millisecond` | `number` | Az ezredmásodperc (0–999)         |

### `date()`

`date.date(): date`

- Visszaad egy dátum objektumot az idő rész nélkül.
- Példa: `now().date().format("YYYY-MM-DD HH:mm:ss")` egy ilyen szöveget ad vissza: "2025-12-31 00:00:00"

### `format()`

`date.format(format: string): string`

- `format` a formátum szöveg (pl. `"YYYY-MM-DD"`).
- A dátumot a Moment.js formátum szöveg által meghatározott formában adja vissza.
- Példa: `date.format("YYYY-MM-DD")` visszaadja: `"2025-05-27"`.

### `time()`

`date.time(): string`

- Visszaadja az időt.
- Példa: `now().time()` egy ilyen szöveget ad vissza: "23:59:59"

### `relative()`

`date.relative(): string`

- Visszaadja a dátum olvasható összehasonlítását az aktuális dátummal és idővel.
- Példa: `file.mtime.relative()` egy ilyen értéket ad vissza: `3 days ago`.

### `isEmpty()`

`date.isEmpty(): boolean`

- Hamisat ad vissza.

## Szöveg

Karaktersorozatokkal használható függvények, mint például `"hello"`.

### Mezők

| Mező            | Típus    | Leírás                              |
| --------------- | -------- | ----------------------------------- |
| `string.length` | `number` | A szövegben lévő karakterek száma   |

### `contains()`

`string.contains(value: string): boolean`

- `value` a keresendő részszöveg.
- Igazat ad vissza, ha a szöveg tartalmazza a `value` értéket.
- Példa: `"hello".contains("ell")` visszaadja: `true`.

### `containsAll()`

`string.containsAll(...values: string): boolean`

- `values` egy vagy több keresendő részszöveg.
- Igazat ad vissza, ha a szöveg az összes `values` értéket tartalmazza.
- Példa: `"hello".containsAll("h", "e")` visszaadja: `true`.

### `containsAny()`

`string.containsAny(...values: string): boolean`

- `values` egy vagy több keresendő részszöveg.
- Igazat ad vissza, ha a szöveg legalább egy `values` értéket tartalmaz.
- Példa: `"hello".containsAny("x", "y", "e")` visszaadja: `true`.

### `endsWith()`

`string.endsWith(query: string): boolean`

- `query` a végén ellenőrizendő szöveg.
- Igazat ad vissza, ha a szöveg a `query` értékre végződik.
- Példa: `"hello".endsWith("lo")` visszaadja: `true`.

### `isEmpty()`

`string.isEmpty(): boolean`

- Igazat ad vissza, ha a szöveg nem tartalmaz karaktereket, vagy nincs jelen.
- Példa: `"Hello world".isEmpty()` visszaadja: `false`.
- Példa: `"".isEmpty()` visszaadja: `true`.

### `lower()`

`string.lower(): string`

- A szöveget kisbetűsre alakítva adja vissza.

### `replace()`

`string.replace(pattern: string | Regexp, replacement: string): string`

- `pattern` a keresendő érték a célszövegben.
- `replacement` az az érték, amelyre a talált mintákat cseréljük.
- Ha a `pattern` szöveg, a minta összes előfordulása cserélésre kerül.
- Ha a `pattern` reguláris kifejezés, a `g` jelző határozza meg, hogy csak az első vagy az összes előfordulás kerül cserélésre.
- Példa: `"a:b:c:d".replace(/:/, "-")` visszaadja: `"a-b,c,d"`, míg `"a:b:c:d".replace(/:/g, "-")` visszaadja: `"a-b-c-d"`.

### `repeat()`

`string.repeat(count: number): string`

- `count` a szöveg ismétlésének száma.
- Példa: `"123".repeat(2)` visszaadja: `"123123"`

### `reverse()`

`string.reverse(): string`

- Megfordítja a szöveget.
- Példa: `"hello".reverse()` visszaadja: `"olleh"`.

### `slice()`

`string.slice(start: number, end?: number): string`

- `start` a befoglaló kezdő index.
- `end` az opcionális kizáró záró index.
- Visszaad egy részszöveget a `start` indextől (befoglaló) az `end` indexig (kizáró).
- Példa: `"hello".slice(1, 4)` visszaadja: `"ell"`.
- Ha az `end` nincs megadva, a szöveg végéig vág.

### `split()`

`string.split(separator: string | Regexp, n?: number): list`

- `separator` az elválasztó a szöveg felosztásához.
- `n` egy opcionális szám. Ha megadják, az eredmény az első `n` elemet tartalmazza.
- Részszövegek listáját adja vissza.
- Példa: `"a,b,c,d".split(",", 3)` vagy `"a,b,c,d".split(/,/, 3)` visszaadja: `["a", "b", "c"]`.

### `startsWith()`

`string.startsWith(query: string): boolean`

- `query` az elején ellenőrizendő szöveg.
- Igazat ad vissza, ha a szöveg a `query` értékkel kezdődik.
- Példa: `"hello".startsWith("he")` visszaadja: `true`.

### `title()`

`string.title(): string`

- A szöveget címformátumra alakítja (minden szó első betűje nagybetűs).
- Példa: `"hello world".title()` visszaadja: `"Hello World"`.

### `trim()`

`string.trim(): string`

- Eltávolítja a szóközöket a szöveg mindkét végéről.
- Példa: `"  hi  ".trim()` visszaadja: `"hi"`.

## Szám

Numerikus értékekkel használható függvények, mint például `42`, `3.14`.

### `abs()`

`number.abs(): number`

- Visszaadja a szám abszolút értékét.
- Példa: `(-5).abs()` visszaadja: `5`.

### `ceil()`

`number.ceil(): number`

- Felfelé kerekíti a számot a legközelebbi egész számra.
- Példa: `(2.1).ceil()` visszaadja: `3`.

### `floor()`

`number.floor(): number`

- Lefelé kerekíti a számot a legközelebbi egész számra.
- Példa: `(2.9).floor()` visszaadja: `2`.

### `isEmpty()`

`number.isEmpty(): boolean`

- Igazat ad vissza, ha a szám nincs jelen.
- Példa: `5.isEmpty()` visszaadja: `false`.

### `round()`

`number.round(digits: number): number`

- A számot a legközelebbi egész számra kerekíti.
- Opcionálisan megadható a `digits` paraméter az adott számú tizedesjegyre kerekítéshez.
- Példa: `(2.5).round()` visszaadja: `3`, és `(2.3333).round(2)` visszaadja: `2.33`.

### `toFixed()`

`number.toFixed(precision: number): string`

- `precision` a tizedesjegyek száma.
- Visszaadja a számot fixpontos jelöléssel szövegként.
- Példa: `(3.14159).toFixed(2)` visszaadja: `"3.14"`.

## Lista

Elemek rendezett listájával használható függvények, mint például `[1, 2, 3]`.

### Mezők

| Mező          | Típus    | Leírás                            |
| ------------- | -------- | --------------------------------- |
| `list.length` | `number` | A lista elemeinek száma           |

### `contains()`

`list.contains(value: any): boolean`

- `value` a keresendő elem.
- Igazat ad vissza, ha a lista tartalmazza a `value` értéket.
- Példa: `[1,2,3].contains(2)` visszaadja: `true`.

### `containsAll()`

`list.containsAll(...values: any): boolean`

- `values` egy vagy több keresendő elem.
- Igazat ad vissza, ha a lista az összes `values` értéket tartalmazza.
- Példa: `[1,2,3].containsAll(2,3)` visszaadja: `true`.

### `containsAny()`

`list.containsAny(...values: any): boolean`

- `values` egy vagy több keresendő elem.
- Igazat ad vissza, ha a lista legalább egy `values` értéket tartalmaz.
- Példa: `[1,2,3].containsAny(3,4)` visszaadja: `true`.

### `filter()`

`list.filter(value: Boolean): list`

- Szűri a lista elemeit egy szűrőfüggvény meghívásával, amely az `index` és `value` változókat használja, és logikai értéket ad vissza arról, hogy az elemet meg kell-e tartani.
- `value` a lista egy elemének értéke.
- `index` az aktuális érték indexe.
- Példa: `[1,2,3,4].filter(value > 2)` visszaadja: `[3,4]`.

### `flat()`

`list.flat(): list`

- Az egymásba ágyazott listákat egyetlen listává simítja.
- Példa: `[1,[2,3]].flat()` visszaadja: `[1,2,3]`.

### `isEmpty()`

`list.isEmpty(): boolean`

- Igazat ad vissza, ha a lista nem tartalmaz elemeket.
- Példa: `[1,2,3].isEmpty()` visszaadja: `false`.

### `join()`

`list.join(separator: string): string`

- `separator` az elemek közé beszúrandó szöveg.
- A lista összes elemét egyetlen szöveggé fűzi össze.
- Példa: `[1,2,3].join(",")` visszaadja: `"1,2,3"`.

### `map()`

`list.map(value: Any): list`

- Átalakítja a lista minden elemét egy konverziós függvény meghívásával, amely az `index` és `value` változókat használja, és visszaadja a listába helyezendő új értéket.
- `value` a lista egy elemének értéke.
- `index` az aktuális érték indexe.
- Példa: `[1,2,3,4].map(value + 1)` visszaadja: `[2,3,4,5]`.

### `reduce()`

`list.reduce(expression: Any, acc: Any): Any`

- A lista elemeit egyetlen értékre redukálja egy kifejezés futtatásával minden elemre. A kifejezés használhatja az `index`, `value` és `acc` (akkumulátor) változókat, és a következő akkumulátor értéket kell visszaadnia.
- `expression` a lista minden elemére kiértékelődik.
- `value` a lista aktuális elemének értéke.
- `index` az aktuális elem indexe.
- `acc` az eddig felhalmozott érték.
- Példa (összeg): `[1,2,3].reduce(acc + value, 0)` visszaadja: `6`.
- Példa (maximum): `values.filter(value.isType("number")).reduce(if(acc == null || value > acc, value, acc), null)` visszaadja a legnagyobb számot, vagy `null` értéket, ha nincs ilyen.

### `reverse()`

`list.reverse(): list`

- Helyben megfordítja a listát.
- Példa: `[1,2,3].reverse()` visszaadja: `[3,2,1]`.

### `slice()`

`list.slice(start: number, end?: number): list`

- `start` a befoglaló kezdő index.
- `end` az opcionális kizáró záró index.
- Visszaadja a lista egy részének sekély másolatát a `start` indextől (befoglaló) az `end` indexig (kizáró).
- Példa: `[1,2,3,4].slice(1,3)` visszaadja: `[2,3]`.
- Ha az `end` nincs megadva, a lista végéig vág.

### `sort()`

`list.sort(): list`

- A lista elemeit a legkisebbtől a legnagyobbig rendezi.
- Példa: `[3, 1, 2].sort()` visszaadja: `[1, 2, 3]`.
- Példa: `["c", "a", "b"].sort()` visszaadja: `["a", "b", "c"]`.

### `unique()`

`list.unique(): list`

- Eltávolítja a duplikált elemeket.
- Példa: `[1,2,2,3].unique()` visszaadja: `[1,2,3]`.

## Hivatkozás

Hivatkozásokon használható függvények. Hivatkozások létrehozhatók fájlból (`file.asLink()`) vagy útvonalból (`link("útvonal")`).

### `asFile()`

`link.asFile(): file`

- Visszaad egy fájl objektumot, ha a hivatkozás érvényes helyi fájlra mutat.
- Példa: `link("[[fájlnév]]").asFile()`

### `linksTo()`

`link.linksTo(file): boolean`

- Visszaadja, hogy a `link` által képviselt fájl tartalmaz-e hivatkozást a `file` fájlra.

## Fájl

A széfben lévő fájlokkal használható függvények.

### Mezők

A következő mezők érhetők el fájlokhoz:

| Mező              | Típus    | Leírás                                                     |
| ----------------- | -------- | ---------------------------------------------------------- |
| `file.name`       | `string` | A fájl neve.                                               |
| `file.basename`   | `string` | A fájl neve kiterjesztés nélkül.                           |
| `file.path`       | `string` | A fájl teljes útvonala a széf gyökeréhez képest.           |
| `file.folder`     | `string` | A szülőmappa teljes útvonala.                              |
| `file.ext`        | `string` | A fájl kiterjesztése.                                      |
| `file.size`       | `number` | A fájl mérete bájtokban.                                   |
| `file.properties` | `object` | A fájl jegyzettulajdonságai.                               |
| `file.tags`       | `list`   | A fájl címkéi. Tartalmazza a soron belüli címkéket is.    |
| `file.links`      | `list`   | A fájlon belüli belső hivatkozások.                        |
| `file.ctime`      | `date`   | A fájl létrehozásának időbélyege.                          |
| `file.mtime`      | `date`   | A fájl utolsó módosításának időbélyege.                    |

### `asLink()`

`file.asLink(display?: string): Link`

- `display` opcionális megjelenített szöveg a hivatkozáshoz.
- Visszaad egy Link objektumot, amely működő hivatkozásként jelenik meg.
- Példa: `file.asLink()`

### `hasLink()`

`file.hasLink(otherFile: file | string): boolean`

- `otherFile` egy másik fájl objektum vagy szöveges útvonal az ellenőrzéshez.
- Igazat ad vissza, ha a `file` hivatkozik az `otherFile` fájlra.
- Példa: `file.hasLink(otherFile)` visszaadja: `true`, ha van hivatkozás a `file` fájlból az `otherFile` fájlra.

### `hasProperty()`

`file.hasProperty(name: string): boolean`

- Igazat ad vissza, ha a jegyzet rendelkezik az adott fájltulajdonsággal.

### `hasTag()`

`file.hasTag(...values: string): boolean`

- `values` egy vagy több címkenév.
- Igazat ad vissza, ha a fájl rendelkezik a `values` bármelyik címkéjével.
- Példa: `file.hasTag("tag1", "tag2")` visszaadja: `true`, ha a fájl rendelkezik a `#tag1` vagy `#tag2` címkével. Tartalmazza a [[Címkék#Beágyazott címkék|beágyazott címkéket]] is, mint például `#tag1/a` vagy `#tag2/b`.

### `inFolder()`

`file.inFolder(folder: string): boolean`

- `folder` az ellenőrizendő mappa neve.
- Igazat ad vissza, ha a fájl a megadott mappában vagy annak almappáiban található.
- Példa: `file.inFolder("notes")` visszaadja: `true`.

## Objektum

Kulcs-érték párok gyűjteményével használható függvények, mint például `{"a": 1, "b": 2}`.

### `isEmpty()`

`object.isEmpty(): boolean`

- Igazat ad vissza, ha az objektumnak nincsenek saját tulajdonságai.
- Példa: `{}.isEmpty()` visszaadja: `true`.

### `keys()`

`object.keys(): list`

- Visszaadja az objektum kulcsait tartalmazó listát.

### `values()`

`object.values(): list`

- Visszaadja az objektum értékeit tartalmazó listát.

## Reguláris kifejezés

Reguláris kifejezés mintával használható függvények. Példa: `/abc/`.

### `matches()`

`regexp.matches(value: string): boolean`

- `value` a tesztelendő szöveg.
- Igazat ad vissza, ha a reguláris kifejezés illeszkedik a `value` értékre.
- Példa: `/abc/.matches("abcde")` visszaadja: `true`.
