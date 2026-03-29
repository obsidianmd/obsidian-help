---
permalink: bases/syntax
publish: true
mobile: true
description: Ez az oldal bemutatja a Bases szintaxist az Obsidianban.
---
Amikor [[Bázis létrehozása|bázist hozol létre]] az Obsidianban, az `.base` fájlként kerül mentésre. A bázisok jellemzően az alkalmazás felületén szerkeszthetők, de a szintaxis kézzel is módosítható, és kódblokkba is beágyazható.

A [[Bevezetés a Bázisokba|Bázisok]] szintaxisa [[Nézetek|nézeteket]], szűrőket és [[Képletek|képleteket]] definiál. A bázisoknak érvényes YAML-nek kell lenniük, az alább meghatározott sémának megfelelően.

## Példa

Íme egy példa egy bázisfájlra. Az egyes részeket részletesen áttekintjük.

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

### Szűrők

Alapértelmezés szerint egy bázis a széfben lévő összes fájlt tartalmazza. Nincs `from` vagy `source` kulcsszó, mint az SQL-ben vagy a Dataview-ban. A `filters` rész lehetővé teszi szűrőfeltételek meghatározását az adathalmaz szűkítéséhez.

```yaml
# Egyszerű szűrő:
filters:
  and:
    - file.hasTag("tag")

# Összetett szűrő:
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

Két helyen alkalmazhatók szűrők:

1. A globális `filters` szinten (ahogy fent látható), ahol az összes nézetre vonatkoznak a bázisban.
2. A `view` szinten, ahol csak egy adott nézetre vonatkoznak.

Ez a két rész funkcionálisan egyenértékű, és egy nézet kiértékelésekor `AND` művelettel kerülnek összefűzésre.

A `filters` rész vagy egyetlen szűrőkifejezést tartalmaz szövegként, vagy egy rekurzívan definiált szűrőobjektumot. A szűrőobjektumok az `and`, `or` vagy `not` kulcsok egyikét tartalmazhatják. Ezek a kulcsok más szűrőobjektumok vagy szövegesen megadott szűrőkifejezések heterogén listái. A szűrőkifejezés egy olyan sor, amely igazra vagy hamisra értékelődik ki egy jegyzetre alkalmazva. A következők egyike lehet:

- Egyszerű összehasonlítás szabványos aritmetikai operátorokkal.
- Egy függvény. Számos beépített [[Függvények|függvény]] áll rendelkezésre, és bővítmények további függvényeket adhatnak hozzá.

A szűrők és képletek szintaxisa és elérhető függvényei megegyeznek.

### Képletek

A `formulas` rész [[Képletek|képlet-tulajdonságokat]] definiál, amelyek a bázisfájl összes nézetében megjeleníthetők.

```yaml
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
```

A képlet-tulajdonságok támogatják az alap aritmetikai operátorokat és számos beépített [[Függvények|függvényt]]. A jövőben a bővítmények további függvényeket adhatnak majd a képletekhez.

A tulajdonságokra különböző módokon hivatkozhatsz a típusuktól függően:

- **Jegyzet-tulajdonságok** a jegyzet metaadataiban definiált tulajdonságok. Például `note.price` vagy `note["price"]`.  
  Ha nincs megadva előtag, a tulajdonság `note` típusúnak számít.
- **Fájl-tulajdonságok** magát a fájlt írják le.  
  Például `file.size` vagy `file.ext`. A fájl objektumra közvetlenül is hivatkozhatsz, például `file.hasLink()`.
- **Képlet-tulajdonságok** a bázis más képletei.  
  Például `formula.formatted_price`.

Egy képlet használhat értékeket más képlet-tulajdonságokból, amennyiben nincs körkörös hivatkozás.  

A képlet-tulajdonságok mindig szövegként tárolódnak a YAML-ben, de a tényleges **kimeneti adattípusukat** az alapul szolgáló adat típusa és a használt függvények visszatérési értéke határozza meg.

Vedd figyelembe, hogy a beágyazott idézőjelek használata szükséges a szövegliterálok YAML mezőbe való beillesztéséhez. A szövegliterálokat egyszeres vagy dupla idézőjelbe kell zárni.

### Tulajdonságok

A `properties` rész lehetővé teszi konfigurációs információk tárolását minden egyes tulajdonsághoz. Az egyes nézetek maguk döntik el, hogyan használják ezeket a konfigurációs értékeket. Például a táblázatokban a megjelenített név oszlopfejlécként jelenik meg.

```yaml
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
```

A megjelenített nevek nem használhatók szűrőkben vagy képletekben.

### Összegzések

A `summaries` rész egyéni összegző képletek definiálására használható. Az itt definiált összegző képleteken kívül számos alapértelmezett összegző képlet is elérhető.

```yaml
summaries:
  customAverage: 'values.mean().round(3)'
```

Ebben a példában a `customAverage` képlet megegyezik az alapértelmezett `Average`-dzsel, csak az érték más tizedesjegyre van kerekítve. Az összegző képletekben a `values` kulcsszó egy lista, amely az adott tulajdonság összes értékét tartalmazza az eredményhalmaz minden jegyzetéből. Az összegző képletnek egyetlen `Value` értéket kell visszaadnia.

Vedd figyelembe, hogy ez a `summaries` rész különbözik a nézet konfigurációjában található `summaries` résztől (amelyet alább ismertetünk), ahol az összegző képletek adott tulajdonságokhoz vannak hozzárendelve.

#### Alapértelmezett összegző képletek

| Név       | Bemeneti típus | Leírás                                                        |
| --------- | -------------- | ------------------------------------------------------------- |
| Average   | Szám           | A bemeneti értékek számtani átlaga.                           |
| Min       | Szám           | A legkisebb szám a bemeneti értékek közül.                    |
| Max       | Szám           | A legnagyobb szám a bemeneti értékek közül.                   |
| Sum       | Szám           | A bemeneti értékek összege.                                   |
| Range     | Szám           | A `Max` és `Min` különbsége.                                  |
| Median    | Szám           | A bemeneti értékek mediánja.                                  |
| Stddev    | Szám           | A bemeneti értékek szórása.                                   |
| Earliest  | Dátum          | A legkorábbi dátum a bemeneti értékek közül.                  |
| Latest    | Dátum          | A legkésőbbi dátum a bemeneti értékek közül.                  |
| Range     | Dátum          | A `Latest` és `Earliest` közötti különbség.                   |
| Checked   | Logikai        | Az `igaz` értékek száma.                                      |
| Unchecked | Logikai        | A `hamis` értékek száma.                                      |
| Empty     | Bármely        | Az üres értékek száma a bemenetben.                           |
| Filled    | Bármely        | A nem üres értékek száma a bemenetben.                        |
| Unique    | Bármely        | Az egyedi értékek száma a bemenetben.                         |

### Nézetek

A `views` rész határozza meg, hogyan jeleníthetők meg az adatok. A `views` lista minden egyes bejegyzése ugyanazoknak az adatoknak egy külön nézetét definiálja, és tetszőleges számú különböző nézet létrehozható.

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

- A `type` a beépített és bővítmények által hozzáadott nézettípusok közül választ.
- A `name` a megjelenített név, és az alapértelmezett nézet meghatározására is használható.
- A `filters` pontosan ugyanúgy működik, mint fent leírtuk, de csak az adott nézetre vonatkozik.
- A `groupBy` egy tulajdonságot és rendezési irányt ad meg. A megadott tulajdonság értéke alapján kerülnek az egyes sorok csoportokba.
- A `summaries` tulajdonságneveket rendel hozzá elnevezett összegzésekhez. Az összegzések aggregálást végeznek az adott tulajdonságon az összes soron keresztül.

A [[Nézetek|nézetek]] további adatokat tárolhatnak az állapot fenntartásához vagy a megfelelő megjelenítéshez szükséges információkkal, azonban a bővítményfejlesztőknek ügyelniük kell arra, hogy ne használjanak olyan kulcsokat, amelyeket az alap Bázisok bővítmény már használ. Például egy táblázat nézet ezzel korlátozhatja a sorok számát vagy kiválaszthatja, melyik oszlop szerint és milyen irányban rendezze a sorokat. Egy másik nézettípus, például egy térkép, ezzel határozhatja meg, melyik jegyzet-tulajdonság felel meg a szélességi és hosszúsági foknak, és melyik tulajdonság jelenjen meg a gombostű címeként.

A jövőben az API lehetővé teszi a nézetek számára ezen értékek olvasását és írását, így a nézet saját konfigurációs felületet építhet.

## Tulajdonságok

Háromféle tulajdonságot használnak a bázisok:

1. **Jegyzet-tulajdonságok**, amelyek a Markdown fájlok metaadataiban tárolódnak.
2. **Fájl-tulajdonságok**, amelyek minden fájltípus számára elérhetők.
3. **Képlet-tulajdonságok**, amelyek magában a `.base` fájlban vannak definiálva (lásd fent).

### Jegyzet-tulajdonságok

A [[Tulajdonságok|jegyzet-tulajdonságok]] csak Markdown fájlok esetén érhetők el, és minden jegyzet YAML metaadataiban tárolódnak. Ezek a tulajdonságok a `note.author` formátummal vagy egyszerűen az `author` rövidítéssel érhetők el.

### Fájl-tulajdonságok

A fájl-tulajdonságok az éppen tesztelt vagy kiértékelt fájlra vonatkoznak. A fájl-tulajdonságok minden [[Elfogadott fájlformátumok|fájltípus]] számára elérhetők, beleértve a mellékleteket is.

Például a `file.ext == "md"` szűrő igaz lesz minden Markdown fájlra, és hamis egyébként.

| Tulajdonság   | Típus  | Leírás                                                        |
| ------------- | ------ | ------------------------------------------------------------- |
| `file.backlinks`  | Lista  | A visszahivatkozó fájlok listája. Megjegyzés: Ez a tulajdonság erőforrás-igényes. Ha lehetséges, fordítsd meg a keresést és használd a `file.links`-et. Nem frissíti automatikusan az eredményeket a széf változásakor. |
| `file.ctime`  | Dátum  | Létrehozás ideje                                              |
| `file.embeds` | Lista  | A jegyzetben található összes beágyazás listája               |
| `file.ext`    | Szöveg | Fájl kiterjesztés                                             |
| `file.file`   | Fájl   | Fájl objektum, csak meghatározott függvényekben használható   |
| `file.folder` | Szöveg | A fájl mappájának útvonala                                    |
| `file.links`  | Lista  | A jegyzetben található összes belső hivatkozás listája, beleértve a metaadatokat |
| `file.mtime`  | Dátum  | Módosítás ideje                                               |
| `file.name`   | Szöveg | Fájlnév                                                      |
| `file.path`   | Szöveg | A fájl útvonala                                               |
| `file.properties`   | Objektum | A fájl összes tulajdonsága. Megjegyzés: Nem frissíti automatikusan az eredményeket a széf változásakor. |
| `file.size`   | Szám   | Fájlméret                                                     |
| `file.tags`   | Lista  | A fájl tartalmában és metaadataiban található összes címke listája |

### Tulajdonságok elérése a `this` objektummal

Használd a `this` objektumot a fájl-tulajdonságok eléréséhez. A `this` jelentése attól függ, hol jelenik meg a bázis.

Amikor a bázis a fő tartalomterületen nyílik meg, a `this` a bázisfájl saját tulajdonságaira mutat. Például a `this.file.folder` visszaadja a mappa útvonalát, ahol a bázis található.

Amikor a bázis egy másik fájlba van beágyazva, a `this` a _beágyazó_ fájl tulajdonságaira mutat (a jegyzet vagy Canvas, amely tartalmazza a bázist). Például a `this.file.name` a beágyazó fájl nevét adja vissza, nem a bázisét.

Amikor a bázis az oldalsávban van, a `this` a fő tartalomterületen lévő aktív fájlra vonatkozik. Ez lehetővé teszi az aktív fájl alapján történő lekérdezések létrehozását. Például a `file.hasLink(this.file)` segítségével megismételheted a visszahivatkozások panelt.

## Operátorok

### Aritmetikai operátorok

Az aritmetikai operátorok számokkal végeznek műveleteket. Például `radius * (2 * 3.14)`.

| Operátor | Leírás      |
| -------- | ----------- |
| `+`      | összeadás   |
| `-`      | kivonás     |
| `*`      | szorzás     |
| `/`      | osztás      |
| `%`      | maradékos osztás |
| `( )`    | zárójelek   |

### Dátum-aritmetika

A dátumok időtartamok hozzáadásával és kivonásával módosíthatók. Az időtartam egységek többféle formátumot fogadnak el:

| Egység                   | Időtartam |
| ------------------------ | --------- |
| `y`, `year`, `years`     | év        |
| `M`, `month`, `months`   | hónap     |
| `d`, `day`, `days`       | nap       |
| `w`, `week`, `weeks`     | hét       |
| `h`, `hour`, `hours`     | óra       |
| `m`, `minute`, `minutes` | perc      |
| `s`, `second`, `seconds` | másodperc |

Dátum objektumok módosításához vagy eltolásához használd a `+` vagy `-` operátort egy időtartam szöveggel. Például a `date + "1M"` 1 hónapot ad a dátumhoz, míg a `date - "2h"` 2 órát von le a dátumból.

A globális `today()` [[Függvények|függvény]] az aktuális dátum lekéréséhez, a `now()` pedig az aktuális dátum és idő lekéréséhez használható.

- `now() + "1 day"` pontosan 24 órával a végrehajtás időpontja utáni dátumot és időt ad vissza.
- `file.mtime > now() - "1 week"` `true` értéket ad vissza, ha a fájl az elmúlt héten módosult.
- `date("2024-12-01") + "1M" + "4h" + "3m"` egy `2025-01-01 04:03:00` dátumot reprezentáló Dátum objektumot ad vissza.
- Két dátum kivonásával megkapod a köztük lévő különbséget ezredmásodpercben, például `now() - file.ctime`.
- Egy időt is tartalmazó dátumból a dátumrész kinyeréséhez használd a `datetime.date()` függvényt.
- Egy Dátum objektum formázásához használd a `format()` függvényt, például `datetime.format("YYYY-MM-DD")`.

### Összehasonlító operátorok

Az összehasonlító operátorok számok vagy Dátum objektumok összehasonlítására használhatók. Az egyenlő és nem egyenlő bármilyen értéktípussal használható, nem csak számokkal és dátumokkal.

| Operátor | Leírás                    |
| -------- | ------------------------- |
| `==`     | egyenlő                   |
| `!=`     | nem egyenlő               |
| `>`      | nagyobb mint              |
| `<`      | kisebb mint               |
| `>=`     | nagyobb vagy egyenlő      |
| `<=`     | kisebb vagy egyenlő       |

### Logikai operátorok

A logikai operátorok logikai értékek kombinálására vagy invertálására használhatók, igaz vagy hamis értéket eredményezve.

| Operátor | Leírás      |
| -------- | ----------- |
| `!`      | logikai nem |
| `&&`     | logikai és  |
| \|\|     | logikai vagy |

## Függvények

Lásd a [[Függvények|függvények listáját]], amelyek képletekben és [[Nézetek|szűrőkben]] használhatók.

## Típusok

A bázisok típusrendszerrel rendelkeznek, amelyet a képletek és szűrők használnak a függvények tulajdonságokra történő alkalmazásakor.

### Szövegek, számok és logikai értékek

A szövegek, számok és logikai értékek „primitív" értékek, amelyek létrehozásához nem szükséges függvény.

- A szövegek egyszeres vagy dupla idézőjelbe vannak zárva, például `"message"`.
- A számok számjegyekként írandók, és opcionálisan zárójelbe zárhatók az áttekinthetőség érdekében. Például `1` vagy `(2.5)`.
- A logikai értékek `true` vagy `false` formában írandók, idézőjelek nélkül.

### Dátumok és időtartamok

A dátumok egy adott dátumot, vagy dátumot és időt jelölnek, a létrehozásukhoz használt függvénytől vagy a [[Tulajdonságok|tulajdonsághoz]] rendelt típustól függően.

- Dátum létrehozásához használd a `date` függvényt, például `date("2025-01-01 12:00:00")`
- Dátum módosításához adj hozzá vagy vonj le egy időtartamot, például `now() + "1 hour"` vagy `today() + "7d"`
- Dátumok összehasonlítása összehasonlító operátorokkal (pl. `>` vagy `<`) és aritmetikai operátorokkal (például `(now() + "1d") - now()` `86400000` ezredmásodpercet ad vissza.)
- Dátum egyes részeinek kinyeréséhez használd az elérhető mezőket (`now().hour`) vagy kényelmi függvényeket (`now.time()`).
- Számos további [[Függvények|mező és függvény]] érhető el dátum objektumokon.

### Objektumok és listák

- Egyetlen elem listává alakításához használd a `list()` függvényt. Ez különösen hasznos olyan tulajdonságoknál, amelyek listákat és egyedi értékeket vegyesen tartalmazhatnak.
- A listaelemek szögletes zárójelekkel és 0-alapú indexszel érhetők el. Például a `property[0]` visszaadja a lista első elemét.
- Az objektumelemek szögletes zárójelekkel és az elem nevével, vagy pont jelöléssel érhetők el. Például `property.subprop` vagy `property["subprop"]`.

### Fájlok és hivatkozások

A [[Jegyzetek összekapcsolása|wikihivatkozások]] a [[Tulajdonságok|metaadat-tulajdonságokban]] automatikusan Hivatkozás objektumként ismerhetők fel. A hivatkozások kattintható hivatkozásként jelennek meg a [[Nézetek|nézetben]].

- Hivatkozás létrehozásához használd a globális `link` [[Függvények|függvényt]], például `link("filename")` vagy `link("https://obsidian.md")`.
- Bármely szövegből létrehozhatsz hivatkozást, például `link(file.ctime.date().toString())`.
- A megjelenített szöveg beállításához adj meg egy opcionális szöveget vagy ikont második paraméterként, például `link("filename", "display")` vagy `link("filename", icon("plus"))`.

Egy Fájl objektum hivatkozássá alakítható a `file.asLink()` függvénnyel, opcionális megjelenített szöveggel.

A hivatkozások `==` és `!=` operátorokkal hasonlíthatók össze. Egyenértékűek, amennyiben ugyanarra a fájlra mutatnak, vagy ha a fájl nem létezik a kereséskor, a hivatkozás szövegüknek azonosnak kell lennie.

A hivatkozások összehasonlíthatók fájlokkal, mint a `file` vagy `this`. Egyenlőek, ha a hivatkozás az adott fájlra oldódik fel. Például `author == this`.

A hivatkozások lista-tartalmazás ellenőrzésben is használhatók, például `authors.contains(this)`.
