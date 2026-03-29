---
permalink: import/evernote
---
Az Obsidian lehetővé teszi, hogy könnyedén átköltöztesd jegyzeteidet az Evernote-ból az [[Importáló|Importáló bővítmény]] segítségével. Ez átalakítja az Evernote adataidat tartós Markdown fájlokká, amelyeket az Obsidiannel és számos más alkalmazással használhatsz.

## Adatok exportálása az Evernote-ból

Az Obsidian az Evernote `.enex` exportformátumát használja.

Az Evernote adatok exportálásáról szóló útmutatót [az Evernote weboldalán](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML) találod. Ez a módszer lehetővé teszi teljes jegyzetfüzetek exportálását az asztali kliensben.

1. Navigálj a Jegyzetfüzetek képernyőre.
2. Kattints a **További műveletek** ( `•••` ) gombra, és válaszd az **Export Notebook...** lehetőséget.
3. Válaszd az **ENEX** fájlformátumot.
3. Válaszd ki az exportált `.enex` fájl helyét.

## Evernote adatok importálása az Obsidianbe

Szükséged lesz a hivatalos Obsidian [[Importáló]] bővítményre, amelyet [itt telepíthetsz](obsidian://show-plugin?id=obsidian-importer).

1. Nyisd meg a **[[Beállítások]]** menüt.
2. Lépj a **Közösségi bővítmények** menüpontra, és [telepítsd az Importálót](obsidian://show-plugin?id=obsidian-importer).
3. Engedélyezd az Importáló bővítményt.
4. Nyisd meg az **Importáló** bővítményt a parancspaletta vagy a szalag ikon segítségével.
5. A **Fájlformátum** alatt válaszd az **Evernote (.enex)** lehetőséget.
6. Válaszd ki az Evernote biztonsági mentés fájljának helyét.
7. Kattints az **Importálás** gombra, és várd meg, amíg az importálás befejeződik.
8. Kész is!

## Haladó importálási lehetőségek

### Címkehierarchia megőrzése

Az Evernote exportálás nem tartja meg a címkehierarchiát. A címkehierarchia megőrzéséhez „laposíthatod" a címkéket „/" elválasztóval. Például tételezzük fel, hogy a következő címkestruktúrád van:

```
SzülőCímke
    GyerekCímke
```

A címkék kapcsolatának megőrzéséhez az Obsidianben a következőt kell tenned:

1. Kattints jobb gombbal a GyerekCímkére.
2. Válaszd az „Átnevezés" lehetőséget.
3. Nevezd át a következőre: `SzülőCímke/GyerekCímke`.

### Jegyzetfüzet-kötegek kezelése

Mivel az exportálási folyamat egyetlen jegyzetfüzetre korlátozódik, az alapértelmezett exportfájl nem tartalmaz információt a jegyzetfüzet-kötegekről. Az importáló azonban felismerheti az enex fájlnévben lévő mintákat, hogy mappákként újra létrehozza a jegyzetfüzet-kötegeket.

Feltételezve, hogy van egy ```JegyzetfüzetA``` nevű jegyzetfüzeted egy ```Köteg1``` nevű kötegben, a jegyzetfüzet-köteget úgy hozhatod létre újra, hogy az enex fájlt átnevezed ```Köteg1@@@JegyzetfüzetA``` névre.

Ennek eredményeként a konvertált jegyzetek a Köteg1/JegyzetfüzetA mappában jönnek létre.

### További lehetőségek

Az Evernote-ból történő haladóbb importálási lehetőségekhez kipróbálhatod a [Yarle-n keresztüli importálást](https://github.com/akosbalasko/yarle) is.
