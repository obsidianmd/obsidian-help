---
permalink: bases/views
---
A nézetek lehetővé teszik, hogy a [[Bevezetés a Bázisokba|Bázisban]] lévő információkat többféleképpen rendszerezd. Egy bázis több nézetet is tartalmazhat, és minden nézet egyedi konfigurációval rendelkezhet a fájlok megjelenítéséhez, rendezéséhez és szűréséhez.

Például létrehozhatsz egy „Könyvek" nevű bázist, amely külön nézettel rendelkezik az „Olvasási lista" és a „Nemrég befejezett" számára.

## Eszköztár

A bázis tetején egy eszköztár található, amely lehetővé teszi a nézetekkel és azok eredményeivel való interakciót.

- ![[lucide-table.svg#icon]] **Nézet menü** — nézetek létrehozása, szerkesztése és váltása.
- **Találatok** — fájlok korlátozása, másolása és exportálása.
- ![[lucide-arrow-up-down.svg#icon]] **Rendezés** — fájlok rendezése és csoportosítása.
- ![[lucide-list-filter.svg#icon]] **Szűrő** — fájlok szűrése.
- ![[lucide-list.svg#icon]] **Tulajdonságok** — megjelenítendő tulajdonságok kiválasztása és [[Képletek]] létrehozása.
- ![[lucide-search.svg#icon]] **Keresés** — elemek keresése a megjelenített tulajdonságok alapján.
- ![[lucide-plus.svg#icon]] **Új** — új fájl létrehozása az aktuális nézetben.

## Nézetek hozzáadása és váltása

Kétféleképpen adhatsz hozzá nézetet egy bázishoz:

- Kattints a nézet nevére a bal felső sarokban, és válaszd a ![[lucide-plus.svg#icon]] **Új nézet** lehetőséget.
- Használd a [[Parancspaletta|parancspalettát]], és válaszd a **Bázisok: Új nézet** lehetőséget.

A nézetek listájában az első nézet töltődik be alapértelmezetten. Húzd a nézeteket az ikonjuknál fogva a sorrendjük megváltoztatásához.

## Nézet beállításai

Minden nézetnek saját konfigurációs lehetőségei vannak. A nézet beállításainak szerkesztéséhez:

1. Kattints a nézet nevére a bal felső sarokban.
2. Kattints a jobbra mutató nyílra a konfigurálni kívánt nézet mellett.

Másik lehetőség: *kattints jobb gombbal* a nézet nevére a bázis eszköztárában a nézet beállításainak gyors eléréséhez.

## Elrendezés

A nézetek különböző elrendezésekkel jeleníthetők meg, többek között ![[lucide-table.svg#icon]] **táblázat**, ![[lucide-list.svg#icon]] **lista**, ![[lucide-layout-grid.svg#icon]] **kártyák** és ![[lucide-map.svg#icon]] **térkép** formátumban. További elrendezések a [[Közösségi bővítmények]] segítségével adhatók hozzá. Néhány elrendezés még fejlesztés alatt áll, és az Obsidian [[Korai hozzáférésű verziók|korai hozzáférésű verzióit]] igényli.

| Elrendezés                        | Leírás                                                                                                                              | Alkalmazás&nbsp;verzió |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| [[Táblázat nézet\|Táblázat]]     | Fájlok megjelenítése sorokként egy táblázatban. Az oszlopok a jegyzetek [[Tulajdonságok|tulajdonságaiból]] töltődnek fel.           | 1.9                    |
| [[Kártyák nézet\|Kártyák]]       | Fájlok megjelenítése kártyarácsként. Lehetővé teszi galériaszerű nézetek létrehozását képekkel.                                     | 1.9                    |
| [[Lista nézet\|Lista]]           | Fájlok megjelenítése [[Alapvető formázási szintaxis#Listák\|listaként]] felsorolásjelekkel vagy számozással.                        | 1.10                   |
| [[Térkép nézet\|Térkép]]         | Fájlok megjelenítése tűkként egy interaktív térképen. A Térképek bővítményt igényli.                                                | 1.10                   |

## Szűrők

Nyisd meg a ![[lucide-list-filter.svg#icon]] **Szűrő** menüt a bázis tetején szűrők hozzáadásához.

Egy szűrők nélküli bázis a széfedben lévő összes fájlt megjeleníti. A szűrők leszűkítik a találatokat, hogy csak azok a fájlok jelenjenek meg, amelyek megfelelnek bizonyos feltételeknek. Például szűrőkkel csak azokat a fájlokat jelenítheted meg, amelyek egy adott [[Címkék|címkével]] rendelkeznek, vagy egy adott mappában találhatók. Számos szűrőtípus érhető el.

A szűrők alkalmazhatók a bázis összes nézetére, vagy csak egyetlen nézetre, a ![[lucide-list-filter.svg#icon]] **Szűrő** menü két szekciójából választva.

- **Minden nézet** — a szűrőket a bázis összes nézetére alkalmazza.
- **E nézet** — a szűrőket az aktív nézetre alkalmazza.

#### Szűrő komponensei

A szűrők három komponensből állnak:

1. **Tulajdonság** — lehetővé teszi egy [[Tulajdonságok|tulajdonság]] kiválasztását a széfedben, beleértve a [[Bázisok szintaxisa#Fájl tulajdonságok|fájl tulajdonságokat]].
2. **Operátor** — lehetővé teszi a feltételek összehasonlítási módjának kiválasztását. Az elérhető operátorok listája a tulajdonságtípustól függ (szöveg, dátum, szám stb.).
3. **Érték** — lehetővé teszi az összehasonlítandó érték kiválasztását. Az értékek tartalmazhatnak matematikai kifejezéseket és [[Függvények|függvényeket]].

#### Kötőszavak

- **A következők mindegyike igaz** egy `és` kifejezés — a találatok csak akkor jelennek meg, ha a szűrőcsoport *összes* feltétele teljesül.
- **A következők bármelyike igaz** egy `vagy` kifejezés — a találatok megjelennek, ha a szűrőcsoport feltételeinek *bármelyike* teljesül.
- **A következők egyike sem igaz** egy `nem` kifejezés — a találatok nem jelennek meg, ha a szűrőcsoport feltételeinek *bármelyike* teljesül.

#### Szűrőcsoportok

A szűrőcsoportok lehetővé teszik összetettebb logika létrehozását kötőszavak kombinálásával.

#### Haladó szűrőszerkesztő

Kattints a kód gombra ![[lucide-code-xml.svg#icon]] a **haladó szűrő** szerkesztő használatához. Ez megjeleníti a szűrő nyers [[Bázisok szintaxisa|szintaxisát]], és használható olyan összetettebb [[Függvények|függvényekkel]], amelyek nem jeleníthetők meg a kattintós felületen.

## Találatok rendezése és csoportosítása

Nyisd meg a ![[lucide-arrow-up-down.svg#icon]] **Rendezés** menüt a nézet találatainak rendezéséhez és csoportosításához.

A találatokat egy vagy több tulajdonság szerint rendezheted növekvő vagy csökkenő sorrendben. Így könnyen listázhatsz jegyzeteket név, utolsó szerkesztés ideje vagy bármely más tulajdonság — beleértve a képleteket — szerint.

A találatokat tulajdonság szerint is csoportosíthatod, hogy a hasonló elemeket vizuálisan elkülönülő szekciókba rendezd. Jelenleg az Obsidian csak egy tulajdonság szerinti csoportosítást támogat.

### Rendezés hozzáadása

1. Nyisd meg a ![[lucide-arrow-up-down.svg#icon]] **Rendezés** menüt a nézet tetején.
2. Válaszd ki a tulajdonságot, amely szerint rendezni (vagy csoportosítani) szeretnél.
3. Ha több rendezésed van, húzd őket felfelé vagy lefelé a ![[lucide-grip-vertical.svg#icon]] fogóval a prioritásuk megváltoztatásához.

A találatok rendezési lehetőségei a tulajdonságtípustól függnek:

- **Szöveg**: rendezés *ABC sorrendben* (A→Z) vagy *fordított ABC sorrendben* (Z→A).
- **Szám**: rendezés *legkisebbtől a legnagyobbig* (0→1) vagy *legnagyobbtól a legkisebbig* (1→0).
- **Dátum és idő**: rendezés *legkorábbi → legújabb* vagy *legújabb → legkorábbi* sorrendben.

### Rendezés eltávolítása

1. Nyisd meg a ![[lucide-arrow-up-down.svg#icon]] **Rendezés** menüt a nézet tetején.
2. Kattints a ![[lucide-trash-2.svg#icon]] kuka gombra az eltávolítani kívánt rendezés vagy csoportosítás mellett.

## Találatok korlátozása, másolása és exportálása

### Találatok korlátozása

A *találatok* menü a nézetben lévő találatok számát mutatja. Kattints a találatok gombra a találatok számának korlátozásához és további műveletek eléréséhez.

### Másolás a vágólapra

Ez a művelet a nézetet a vágólapra másolja. A vágólapra kerülés után beillesztheted egy Markdown fájlba vagy más dokumentumalkalmazásokba, beleértve a táblázatkezelőket, mint a Google Sheets, az Excel és a Numbers.

### CSV exportálás

Ez a művelet az aktuális nézetről CSV fájlt ment el.

## Nézet beágyazása

Bázis fájlokat [[Fájlok beágyazása|bármely más fájlba]] beágyazhatsz a `![[Fájl.base]]` szintaxissal. A listában szereplő első nézet kerül felhasználásra. A sorrendet a nézet menüben a nézetek húzásával változtathatod meg.

A beágyazás alapértelmezett nézetének megadásához használd a `![[Fájl.base#Nézet]]` szintaxist.
