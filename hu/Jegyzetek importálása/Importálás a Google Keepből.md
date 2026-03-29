---
permalink: import/google-keep
---
Az Obsidian lehetővé teszi, hogy könnyedén átvidd jegyzeteidet a Google Keepből az [[Importáló|Importáló bővítmény]] segítségével. Ez a Google Keep adataidat tartós Markdown fájlokká alakítja, amelyeket az Obsidiannal és sok más alkalmazással is használhatsz.

## Adatok exportálása a Google Keepből

1. Menj a [Google Takeout](https://takeout.google.com/settings/takeout) oldalra, és jelentkezz be a Google-fiókodba.
2. Kattints a **Kijelölések törlése** gombra a jobb felső sarokban.
3. Görgess lefelé, és válaszd ki a **Keep** elemet a listából.
4. Görgess le az oldal aljára, és kattints a **Következő lépés** gombra.
5. A következő képernyőn kattints az **Exportálás létrehozása** gombra.
6. Töltsd le a `.zip` fájlt, amint elérhetővé válik.

## Google Keep adatok importálása az Obsidianba

Szükséged lesz a hivatalos Obsidian [[Importáló]] bővítményre, amelyet [itt telepíthetsz](obsidian://show-plugin?id=obsidian-importer).

1. Nyisd meg a **[[Beállítások]]** menüt.
2. Menj a **Közösségi bővítmények** részhez, és [telepítsd az Importálót](obsidian://show-plugin?id=obsidian-importer).
3. Engedélyezd az Importáló bővítményt.
4. Nyisd meg az **Importáló** bővítményt a parancspaletta vagy a szalag ikon segítségével.
5. A **Fájlformátum** alatt válaszd a **Google Keep (.zip)** lehetőséget.
6. Válaszd ki a `.zip` fájl helyét.
7. Kattints az **Importálás** gombra, és várd meg, amíg az importálás befejeződik.
8. Kész is vagy!

### Támogatott funkciók

- Minden ellenőrzőlista legfelső szintű elemként kerül importálásra, mert a Google Keep nem exportálja a behúzási információkat.
- A jegyzetekhez tartozó emlékeztetők és felhasználó-hozzárendelések nem kerülnek importálásra, mivel ezeket a funkciókat az Obsidian nem támogatja.
- Minden egyéb információ tartalom és címkék kombinációjaként kerül importálásra.
