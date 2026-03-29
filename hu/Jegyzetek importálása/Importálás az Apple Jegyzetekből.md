---
permalink: import/apple-notes
---
Az Obsidian lehetővé teszi a jegyzetek egyszerű áttelepítését az Apple Jegyzetekből az [[Importáló|Importáló bővítmény]] segítségével. Ez az Apple Notes adatait tartós Markdown fájlokká alakítja, amelyeket az Obsidiannal és sok más alkalmazással is használhatsz.

Jelenleg az Importáló csak macOS-en támogatja az Apple Jegyzetekből való áttelepítést. iOS-en még nem érhető el.

## Apple Notes adatok importálása az Obsidianba

Szükséged lesz a hivatalos Obsidian [[Importáló]] bővítményre, amelyet [itt telepíthetsz](obsidian://show-plugin?id=obsidian-importer).

1. Nyisd meg a **[[Beállítások]]** menüt.
2. Lépj a **Közösségi bővítmények** menüpontra, és [telepítsd az Importálót](obsidian://show-plugin?id=obsidian-importer).
3. Engedélyezd az Importáló bővítményt.
4. Nyisd meg az **Importáló** bővítményt a parancspaletta vagy a szalag ikon segítségével.
5. A **Fájlformátum** alatt válaszd az **Apple Notes** lehetőséget.
6. Kattints az **Importálás** gombra.
7. Kattints a **Megnyitás** gombra a felugró ablakban, amelynek címe: `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Várd meg, amíg az importálás befejeződik.
9. Kész is!

## Támogatott tartalmak

Az Obsidian Importáló bővítmény gyakorlatilag az összes Apple Notes tartalomtípust támogatja. Ide tartoznak a táblázatok, képek, rajzok, szkennelések, PDF-ek és az iOS 17-ben bevezetett hivatkozások.

> [!Warning]
> A jelszóval védett jegyzetek az Apple által titkosítva vannak, ezért importálás előtt fel kell oldani őket. A zárolt jegyzetek ki lesznek hagyva.

### Szkennelések

Az Apple a szkenneléseket különböző formátumokban tárolja attól függően, hogyan készültek. Az eredeti adatok megőrzése érdekében ezek különbözőképpen kerülnek exportálásra.

* A macOS vagy iOS régebbi verzióin létrehozott vagy megtekintett szkennelések vágatlan képsorozatként lesznek exportálva.
* A macOS vagy iOS újabb verzióin létrehozott vagy megtekintett szkennelések általában vágott képekként lesznek exportálva.
* Az iOS 17-ben bevezetett funkciókkal szerkesztett szkennelések általában PDF-ként lesznek exportálva.

## Alternatív exportálási módszerek

Az Apple nem biztosít natív lehetőséget a jegyzetek exportálására. Azonban számos harmadik féltől származó eszköz létezik, például az [Exporter](https://apps.apple.com/us/app/exporter/id1099120373) Chintan Ghate-től. Kérjük, vedd figyelembe, hogy a legtöbb eszköz korlátozott abban, milyen adatokat exportál az Apple Jegyzetekből, és nem feltétlenül biztosítja a legkompatibilisebb kimeneti adatokat. Ezek az eszközök akkor működnek a legjobban, ha az Apple Jegyzeteid főként szöveges tartalmúak, és kevés melléklettel vagy speciális funkcióval, például rajzokkal és szkennelésekkel rendelkeznek.

Az általad használt eszköztől függően az exportálás Markdown vagy HTML formátumú lehet. Kövesd az utasításokat az exportált fájlformátum alapján:

- [[HTML fájlok importálása]]
- [[Markdown fájlok importálása]]
