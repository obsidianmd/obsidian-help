---
permalink: bases/views/table
---
A Táblázat a [[Nézetek|nézetek]] egyik típusa, amelyet a [[Bevezetés a Bázisokba|Bázisokban]] használhatsz.

Válaszd a ![[lucide-table.svg#icon]]  **Táblázat** lehetőséget a nézet menüből, hogy a fájlokat táblázatként jelenítsd meg, ahol minden fájl egy sor, az oszlopok pedig az adott fájl [[Tulajdonságok|tulajdonságait]] tartalmazzák.

![Példa egy bázisra, amely táblázat nézetben jeleníti meg a könyvek listáját](bases-noshadow.png#interface)

## Beállítások

A táblázat nézet beállításai a [[Nézetek#Nézet beállításai|Nézet beállításaiban]] konfigurálhatók.

### Sormagasság

A sormagasság lehetővé teszi, hogy több információt jeleníts meg. Válassz az **alacsony**, **közepes**, **magas** és **extra magas** lehetőségek közül.

## Összegzések

Egy táblázat oszlopához összegzéseket adhatsz hozzá, hogy gyorsan kiszámíthasd az értékeket, például összegeket, átlagokat vagy darabszámokat a nézetben jelenleg látható sorokra.

Az összegzések a nézethez tartoznak, nem a bázishoz. Minden nézet különböző összegzéseket mutathat ugyanahhoz az oszlophoz.

### Összegzés hozzáadása

1. Kattints jobb gombbal az oszlop fejlécére a táblázat nézetben.
2. Válaszd az ![[lucide-calculator.svg#icon]] **Összegzés…** lehetőséget.
3. Válassz egyet a beépített összegző függvények közül, vagy válaszd az ![[lucide-square-function.svg#icon]] **Összegzés hozzáadása** lehetőséget saját összegzés meghatározásához.

Az összegzés az oszlop alján jelenik meg. Ha az eredmények [[Nézetek#Eredmények rendezése és csoportosítása|csoportosítva]] vannak, az egyes csoportok összegzése a csoport tetején jelenik meg.

Miután az összegző sáv megjelent, további összegzéseket adhatsz hozzá más oszlopokhoz az összegző cellára kattintva. Az összegző sáv elrejtésre kerül, ha minden összegzés eltávolításra kerül.

### Beépített összegzések

Az alábbi összegzések alapértelmezetten elérhetők. A lehetőségek a tulajdonságtípustól függően változhatnak.

#### Minden tulajdonságtípus

- **Nincs érték**: az érték nélküli sorok száma.
- **Kitöltött**: az értékkel rendelkező sorok száma.
- **Egyedi**: a különböző értékek száma.

#### Számok

- **Átlag**: az összes numerikus érték átlaga.
- **Maximum**: a legnagyobb érték.
- **Medián**: a medián érték.
- **Minimum**: a legkisebb érték.
- **Terjedelem**: a maximum és minimum közötti különbség.
- **Szórás**: szórás.
- **Összeg**: az összes érték összege.

#### Dátumok

- **Legkorábbi**: a legkisebb/legrégebbi dátum.
- **Legkésőbbi**: a legnagyobb/legfrissebb dátum.
- **Terjedelem**: a legkorábbi és legkésőbbi közötti különbség.

#### Jelölőnégyzet

- **Bejelölt**: azon sorok száma, ahol a jelölőnégyzet be van kapcsolva.
- **Nem bejelölt**: azon sorok száma, ahol a jelölőnégyzet ki van kapcsolva.

### Egyéni összegzések

Saját összegzést is meghatározhatsz képlet segítségével:

1. Az ![[lucide-calculator.svg#icon]] **Összegzés…** menüben válaszd az ![[lucide-square-function.svg#icon]] **Összegzés hozzáadása** lehetőséget.
2. Adj nevet az összegzésnek.
3. Írj be egy képletet. A képlet az adott oszlop értékeinek listáján fut végig (például egy [[Függvények|függvény]] használatával, mint a `values.reduce(...)`).
4. Mentsd el az összegzést.

Az egyéni összegzések hasznosak, ha olyan számításra van szükséged, amelyet a beépített lehetőségek nem fednek le.

## Gyorsbillentyűk

A táblázat nézetben az alábbi egér- és [[Szerkesztési gyorsbillentyűk|billentyűparancsokkal]] gyorsan navigálhatsz.

- A Shift-kattintás cellakijelölést hoz létre.
- Kattints jobb gombbal egy cellakijelölésre, hogy további műveleteket érj el az adott fájlokhoz.

| Művelet                                                                                                                   | Gyorsbillentyű       | macOS               |
| ------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------------------- |
| A kijelölt cellák másolása                                                                                                | `Ctrl+C`             | `Cmd+C`             |
| A kijelölt cellák beillesztése                                                                                            | `Ctrl+V`             | `Cmd+V`             |
| Tulajdonságok módosításainak visszavonása                                                                                 | `Ctrl+Z`             | `Cmd+Z`             |
| Tulajdonságok módosításainak újra végrehajtása                                                                            | `Ctrl+Shift+Z`       | `Cmd+Shift+Z`       |
| Az aktuális csoport összes cellájának kijelölése                                                                          | `Ctrl+A`             | `Cmd+A`             |
| Az adott irányban lévő összes cella kijelölése                                                                            | `Ctrl+Shift+Nyíl`    | `Ctrl+Shift+Nyíl`   |
| Az oszlop kijelölése                                                                                                      | `Ctrl+Space`         |                     |
| A sor kijelölése                                                                                                          | `Shift+Space`        |                     |
| Az aktuális cella fókuszálása — jelölőnégyzeteknél átkapcsolás, képleteknél a képletszerkesztő megnyitása                 | `Enter`              |                     |
| Ugrás az első oszlopra                                                                                                    | `Home`               |                     |
| Ugrás az utolsó oszlopra                                                                                                  | `End`                |                     |
| Navigálás felfelé és lefelé oldalmagassággal                                                                              | `PageUp`, `PageDown` |                     |
| Az aktuális cellakijelölés törlése                                                                                        | `Esc`                |                     |
| Az aktuális cellák tartalmának törlése                                                                                    | `Backspace`          |                     |
| Ugrás a következő cellára                                                                                                 | `Tab`                |                     |
| Ugrás az előző cellára                                                                                                    | `Shift-Tab`          |                     |
