---
permalink: plugins/search
publish: true
mobile: true
description: 'A Keresés egy alapbővítmény, amely segít adatokat találni az Obsidian-széfedben keresőkifejezések és operátorok használatával az eredmények szűkítéséhez.'
---
A Keresés egy [[Alap bővítmények|alap bővítmény]], amely keresőkifejezések és operátorok segítségével segít megtalálni az adatokat az Obsidian széfben, szűkítve a találatokat.

Alapértelmezés szerint a Keresés a bal oldali oldalsávban ![[lucide-search.svg#icon]] található. A Keresést a `Ctrl+Shift+F` (Windows/Linux) vagy a `Command+Shift+F` (macOS) billentyűkombinációval is megnyithatja.

- **Kijelölt szöveg keresése**: Ha kijelöl egy szöveget a szerkesztőben, és a gyorsbillentyűvel nyitja meg a Keresést, az megjeleníti a kijelölt szöveg keresési találatait.
- **Korábbi keresőkifejezések keresése**: Nyissa meg a Keresést üres keresőkifejezéssel a korábbi keresőkifejezések listázásához. Kattintson bármelyikre a keresőkifejezés újbóli használatához.

> [!info] Kizárt fájlok
> A [[Beállítások#Kizárt fájlok|Kizárt fájlok]] mintáinak megfelelő fájlok nem jelennek meg a keresési találatok között.

## Keresőkifejezések

A keresőkifejezés az a szó vagy kifejezés, amelyet a keresőmezőbe ír be. A hatékony keresőkifejezések írásának elsajátítása segíthet gyorsan megtalálni, amit keres, még nagy széfekben is. Az Obsidian csak a jegyzetek és vásznak tartalmában keres.

> [!tip]- Keresés útvonalakban és fájlnevekben
> Alapértelmezés szerint csak a jegyzetek és vásznak útvonalaiban és fájlneveiben kereshet. A széfben lévő bármely fájl útvonalának vagy fájlnevének kereséséhez használja a `path` vagy `file` operátort.

A keresőkifejezés minden szavát az egyes fájlokon belül függetlenül egyezteti a rendszer. Pontos kifejezés kereséséhez tegye idézőjelek közé, például `"star wars"`. Idézőjeles szöveg kereséséhez egy pontos kifejezésen belül az idézőjeleket _feloldhatja_ úgy, hogy visszaperjelet (`\`) tesz az idézőjel elé, például `"they said \"hello\" to each other"`.

Szabályozhatja, hogy a rendszer olyan fájlokat adjon vissza, amelyek a keresőkifejezés _összes_ szavát, vagy _bármelyik_ szavát tartalmazzák:

- `meeting work` olyan fájlokat ad vissza, amelyek tartalmazzák a `meeting` és a `work` szót is.
- `meeting OR work` olyan fájlokat ad vissza, amelyek tartalmazzák a `meeting` vagy a `work` szót.

A kettőt akár ugyanabban a keresőkifejezésben is kombinálhatja.

- `meeting work OR meetup personal` olyan fájlokat ad vissza, amelyek munkaértekezletekre és személyes találkozókra vonatkoznak.

Zárójeleket használhat az egyes kifejezések prioritásának szabályozására.

- `meeting (work OR meetup) personal` olyan fájlokat ad vissza, amelyek tartalmazzák a `meeting`, `personal` szavakat, valamint a `work` vagy `meetup` szót.

Egy szó kizárásához, vagy tagadásához a keresési találatokból tegyen kötőjelet (`-`) elé:

- `meeting -work` olyan fájlokat ad vissza, amelyek tartalmazzák a `meeting` szót, de a `work` szót nem.

Több kifejezést is kizárhat:

- `meeting -work -meetup` olyan fájlokat ad vissza, amelyek tartalmazzák a `meeting` szót, de a `work` vagy `meetup` szót nem.

Kifejezéskombinációkat is kizárhat zárójelek segítségével:

- `meeting -(work meetup)` olyan fájlokat ad vissza, amelyek tartalmazzák a `meeting` szót, de nem tartalmazzák _egyszerre_ a `work` és `meetup` szavakat.

A találatok szűréséhez a kisebb mint (`<`) és nagyobb mint (`>`) operátorokkal tegye azokat szögletes zárójelek (`[]`) vagy idézőjelek (`""`) közé:

- `meeting [duration:<5]` olyan fájlokat ad vissza, ahol a meeting jelen van, és a duration kisebb mint 5.
- `meeting [duration:>5]` olyan fájlokat ad vissza, ahol a meeting jelen van, és a duration nagyobb mint 5.

> [!tip]- Keresőkifejezés magyarázata
> Ha egy összetett keresőkifejezés hibakeresésére van szüksége, kattintson a **Keresőkifejezés magyarázata** gombra a Keresésben a keresőkifejezés magyarázatáért.

## Keresési operátorok

A keresési operátorok finomabb keresőkifejezéseket tesznek lehetővé a találatok még pontosabb szűréséhez.

Egyes operátorok lehetővé teszik beágyazott keresőkifejezés hozzáadását zárójeleken belül, például: `task:(call OR email)`.

| Keresési operátor | Leírás                                                                                                                                                                                                                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `file:`           | Szöveg keresése a fájlnévben. A széfben lévő bármely fájlra egyezik.<p/>Példa: `file:.jpg` vagy `file:202209`.                                                                                                                                                                                               |
| `path:`           | Szöveg keresése a fájl útvonalában. A széfben lévő bármely fájlra egyezik.<p/>Példa: `path:"Daily notes/2022-07"`.                                                                                                                                                                                            |
| `content:`        | Szöveg keresése a fájl tartalmában.<p/>Példa: `content:"happy cat"`.                                                                                                                                                                                                                                           |
| `match-case:`     | Kis- és nagybetűre érzékeny egyezés.<p/>Példa: `match-case:HappyCat`.                                                                                                                                                                                                                                          |
| `ignore-case:`    | Kis- és nagybetűre nem érzékeny egyezés.<p/>Példa: `ignore-case:ikea`.                                                                                                                                                                                                                                         |
| `tag:`            | Címke keresése a fájlban.<p/>Példa: `tag:#work`.<p/>Ne feledje, hogy a `tag:#work` keresése nem ad vissza találatot a `#myjob/work` címkére.<br /><br />**Megjegyzés**: Mivel a `tag:` figyelmen kívül hagyja a kódblokkokon belüli és nem Markdown tartalmú egyezéseket, gyakran gyorsabb és pontosabb, mint a `#work` normál teljes szöveges keresése. |
| `line:`           | Olyan fájlok keresése, amelyek legalább egy sort tartalmaznak, amely megfelel `x`-nek.<p/>Példa: `line:(mix flour)`.<p/><br>**Megjegyzés**: A `-line` használata tagadja a keresést, azaz olyan fájlokat talál, amelyekben egyetlen sor sem felel meg `x`-nek.                                                  |
| `block:`          | Egyezések keresése ugyanazon a blokkon belül.<p/>Példa: `block:(dog cat)`.<p/>**Megjegyzés**: Mivel a `block:` megköveteli, hogy a Keresés elemezze a Markdown tartalmat minden fájlban, a keresőkifejezés feldolgozása több időt vehet igénybe.                                                                |
| `section:`        | Egyezések keresése ugyanazon a szakaszon belül (két fejléc közötti szöveg).<p/>Példa: `section:(dog cat)`.                                                                                                                                                                                                      |
| `task:`           | Egyezések keresése egy [[Alapvető formázási szintaxis#Teendőlisták\|feladatban]] blokkonkénti alapon.<p/>Példa: `task:call`.                                                                                                                                                                                    |
| `task-todo:`      | Egyezések keresése egy *befejezetlen* [[Alapvető formázási szintaxis#Teendőlisták\|feladatban]] blokkonkénti alapon.<p/>Példa: `task-todo:call`.                                                                                                                                                                |
| `task-done:`      | Egyezések keresése egy *befejezett* [[Alapvető formázási szintaxis#Teendőlisták\|feladatban]] blokkonkénti alapon.<p/>Példa: `task-done:call`.                                                                                                                                                                  |

## Keresés tulajdonságokban

A [[Tulajdonságok]] között tárolt adatokat használhatja a keresőkifejezésekben.

Használjon szögletes zárójeleket a tulajdonság neve körül `[property]` az adott tulajdonsággal rendelkező fájlok visszaadásához:

- `[aliases]` az `aliases` tulajdonságot tartalmazó fájlokat adja vissza

Használjon szögletes zárójeleket és kettőspontot `[property:value]` az adott tulajdonsággal és értékkel rendelkező fájlok visszaadásához:

- `[aliases:Name]` olyan fájlokat ad vissza, amelyeknél az `aliases` tulajdonság értéke `Name`

Használja a `null` értéket az érték nélküli tulajdonságok kereséséhez:

- `[aliases:null]` olyan fájlokat ad vissza, amelyeknél az `aliases` tulajdonság létezik, de nincs értéke

> [!info]+ Üres értékek
> A `null` operátor akkor működik, ha egy tulajdonság üres (pl. `aliases: `), de nem működik, ha a tulajdonság üres idézőjeleket (`""`) vagy üres szögletes zárójeleket (`[]`) tartalmaz.

Mind a tulajdonság, mind az érték támogatja az al-lekérdezéseket, mint például a csoportosító zárójeleket, az `OR` operátort, a pontos egyezéshez használt dupla idézőjeleket és a reguláris kifejezéseket.

- `[status:Draft OR Published]` olyan fájlokat ad vissza, amelyeknél a `status` tulajdonság értéke `Draft` vagy `Published`

## Kis- és nagybetű érzékenység módosítása

Alapértelmezés szerint a keresőkifejezések nem érzékenyek a kis- és nagybetűkre. Ha a keresőkifejezés pontos betűméretére szeretne keresni, válassza a **Kis- és nagybetű megkülönböztetése** ![[obsidian-icon-upper-lowercase.svg#icon]] lehetőséget a keresősávon belül.

Ez a beállítás átkapcsolható. Ha a **Kis- és nagybetű megkülönböztetése** ikon ki van emelve, az azt jelenti, hogy jelenleg kis- és nagybetűre érzékeny keresést végez.

## Találatok rendezési sorrendjének módosítása

1. Írjon be egy [[#Keresőkifejezések|keresőkifejezést]].
2. A keresőmező alatt válassza ki a jobb oldali legördülő menüt.
3. Válassza ki a kívánt rendezési sorrendet. Az alapértelmezett a „Fájlnév szerint (A-tól Z-ig)".

A következő lehetőségek állnak rendelkezésre:

- Fájlnév szerint (A-tól Z-ig)
- Fájlnév szerint (Z-től A-ig)
- Módosítás ideje szerint (új -> régi)
- Módosítás ideje szerint (régi -> új)
- Létrehozás ideje szerint (új -> régi)
- Létrehozás ideje szerint (régi -> új)

## Keresési találatok másolása

1. Írjon be egy [[#Keresőkifejezések|keresőkifejezést]].
2. A keresőmező alatt válassza a három pont ikont a találatok száma mellett.
3. Válassza a **Keresési találatok másolása** lehetőséget.

## Reguláris kifejezések használata

A reguláris kifejezés olyan karakterkészlet, amely egy szövegmintát ír le. Reguláris kifejezések használatához a keresőkifejezésben tegye a kifejezést perjelek (`/`) közé.

- `/\d{4}-\d{2}-\d{2}/` egy ISO 8601 dátumra egyezik, például 2022-01-01.

A reguláris kifejezéseket akár keresési operátorokkal is kombinálhatja:

- `path:/\d{4}-\d{2}-\d{2}/` olyan fájlokat ad vissza, amelyek útvonalában dátum szerepel.

A reguláris kifejezések írásáról további információért tekintse meg a FreeCodeCamp [Gyakorlati regex útmutatóját](https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/) vagy a Mozilla [Reguláris kifejezések](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) dokumentációját.

> [!info]+ JavaScript-ízesítésű reguláris kifejezések
> A reguláris kifejezéseknek különböző változatai léteznek, amelyek eltérhetnek egymástól. Az Obsidian JavaScript-ízesítésű reguláris kifejezéseket használ.

## Keresési beállítások konfigurálása

A Keresés konfigurálásához válassza a **Keresési beállítások** ![[lucide-sliders-horizontal.svg#icon]] ikont a keresősáv jobb oldalán a kapcsolók megtekintéséhez.

| Beállítás                           | Leírás                                                                      |
|-------------------------------------|-----------------------------------------------------------------------------|
| **Keresőkifejezés magyarázata**     | Lebontja a keresőkifejezéseket és egyszerű szöveggel elmagyarázza azokat.   |
| **Eredmények összecsukása**         | Be- és kikapcsolja a keresési kontextus megjelenítését.                     |
| **Több kontextus mutatása**         | Kibontja a keresési találatot, hogy több szöveget mutasson az egyezés körül.|

## Keresési találatok beágyazása egy jegyzetbe

Keresési találatok beágyazásához egy jegyzetbe adjon hozzá egy `query` kódblokkot:

````
```query
embed OR search
```
````

Az [[Bevezetés az Obsidian Publish-be|Obsidian Publish]] nem támogatja a beágyazott [[Publish korlátozások#Keresés|keresési találatokat]]. Egy élő renderelt példa megtekintéséhez használja a fenti kódblokkot a széfjén belül.

![[search-query-rendered.png]]
