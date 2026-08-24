---
permalink: import/csv
cssclasses:
  - soft-embed
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
7. Válaszd az **Importálás** lehetőséget, hogy beállítsd, hogyan konvertálódnak a CSV fájlban lévő adatok [[Tulajdonságok|tulajdonságokkal]] rendelkező jegyzetekké.
8. Válaszd a **Folytatás** lehetőséget a generált sablon áttekintéséhez és a sorokból származó előnézeti példák megtekintéséhez.
9. Válaszd az **Importálás** lehetőséget, és várd meg, amíg az importálás befejeződik.

## CSV mezők importálásának konfigurálása

A mezőkonfiguráció lépésében kiválaszthatod, hogyan importálódnak az adatok. Az Importáló sablont generál a CSV fejlécekből, az első oszlopot használja a jegyzet kezdeti neveként, és minden oszlophoz létrehoz egy tulajdonságot.

## Sablonok

Használj [[Importáló sablonok|Importáló sablonokat]] az adatimportálás teljes konfigurálásához.

Minden CSV oszlop elérhető a fejléce alapján. Ha egy oszlopnak nincs fejléce, az Importáló a generált oszlopnevet használja.

Használj szögletes zárójeleket, hogy a szóközök és írásjelek biztonságosan kezelhetők legyenek:

```liquid
{{source["Project name"]}}
{{source["Price ($)"]|yaml}}
```

![[Importáló sablonok#Változók]]
