---
permalink: import/csv
---
Az Obsidian lehetővé teszi adatok importálását CSV fájlokból a hivatalos [[Importáló|Importáló bővítmény]] segítségével. Ez akkor hasznos, ha táblázatos formában tárolt adataid vannak olyan alkalmazásokban, mint az Excel, Google Sheets, Numbers, Notion vagy Airtable.

A CSV importálás Markdown fájlokat hoz létre minden sorhoz, valamint egy [[Bevezetés a Bázisokba|Bázis]] fájlt, amely az összes importált fájlt táblázatként jeleníti meg.

Ha egy adott alkalmazásból importálsz jegyzeteket, érdemes először áttekinteni az [[Importáló|Importáló bővítmény]] által támogatott alkalmazások listáját, hogy ellenőrizd, van-e olyan specifikus konverter, amely jobban megőrzi az áttelepítendő adatokat.

## Jegyzetek létrehozása CSV adatokból az Obsidianban

Szükséged lesz a hivatalos Obsidian [[Importáló]] bővítményre, amelyet [itt telepíthetsz](obsidian://show-plugin?id=obsidian-importer).

1. Nyisd meg a **[[Beállítások]]** menüt.
2. Lépj a **Közösségi bővítmények** menüpontra, és [telepítsd az Importálót](obsidian://show-plugin?id=obsidian-importer).
3. Engedélyezd az Importáló bővítményt.
4. Nyisd meg az **Importáló** bővítményt a parancspaletta vagy a szalag ikon segítségével.
5. A **Fájlformátum** alatt válaszd a **CSV (.csv)** lehetőséget.
6. Válaszd ki a CSV fájlod helyét.
7. Kattints az **Importálás** gombra, hogy beállítsd, hogyan konvertálódnak a CSV fájlban lévő adatok [[Tulajdonságok|tulajdonságokkal]] rendelkező jegyzetekké.
8. Kattints a **Folytatás** gombra, és várd meg, amíg az importálás befejeződik.
9. Kész is!

## CSV mezők importálásának konfigurálása

A CSV importálás második lépésében kiválaszthatod, hogyan importálódnak az adatok egy sablon segítségével.

A CSV fájlod minden oszlopához egy `{{column_name}}` nevű változó tartozik, amely a fájlban lévő fejléc nevét jelöli. Ezt a változót használhatod a jegyzet címének, helyének, tartalmának és [[Tulajdonságok|tulajdonságainak]] meghatározásához.
