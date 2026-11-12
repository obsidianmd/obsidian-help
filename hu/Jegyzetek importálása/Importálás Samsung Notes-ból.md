---
permalink: import/samsung-notes
cssclasses:
  - soft-embed
---
Az Obsidian lehetővé teszi a jegyzetek áttelepítését a Samsung Notes alkalmazásból az [[Importáló|Importáló bővítmény]] segítségével. Ez a folyamat a jegyzeteidet tartós Markdown fájlokká alakítja, amelyeket az Obsidiannal és sok más alkalmazással is használhatsz.

## Jegyzetek exportálása a Samsung Notes-ból

A Samsung Notes minden jegyzetet Samsung Notes fájlként (`.sdocx`) ment el.

1. Nyisd meg a Samsung Notes alkalmazást a telefonodon vagy táblagépeden.
2. Érintsd meg és tartsd lenyomva egy jegyzetet, majd jelöld ki az összes exportálni kívánt jegyzetet.
3. Koppints a **Mentés fájlként** lehetőségre, majd válaszd a **Samsung Notes fájl** formátumot.
4. Válassz egy mappát, és koppints a **Mentés** gombra.
5. Helyezd át az `.sdocx` fájlokat arra az eszközre, ahol az Obsidiant használod, például USB-kábellel, Quick Share-rel vagy felhőtárhelyen keresztül.

Ha sok fájlod van, egy `.zip` fájlba tömörítheted őket, és azt importálhatod. A Samsung Notes nem tartalmazza a mappáit az elmentett fájlokban, de az Importáló megőrzi a `.zip` fájlon belüli mappákat. A jegyzetek rendszerezésének megőrzéséhez mentsd az egyes Samsung Notes mappák jegyzeteit azonos nevű mappákba, mielőtt tömörítenéd őket.

## Samsung Notes adatok importálása az Obsidianba

Szükséged lesz a hivatalos Obsidian [[Importáló]] bővítményre, amelyet [itt telepíthetsz](obsidian://show-plugin?id=obsidian-importer).

1. Nyisd meg a **[[Beállítások]]** menüt.
2. Lépj a **Közösségi bővítmények** menüpontra, és [telepítsd az Importálót](obsidian://show-plugin?id=obsidian-importer).
3. Engedélyezd az Importáló bővítményt.
4. Nyisd meg az **Importáló** bővítményt a parancspaletta vagy a szalag ikon segítségével.
5. A **Fájlformátum** alatt válaszd a **Samsung Notes (.sdocx)** lehetőséget.
6. Válaszd ki az `.sdocx` fájlokat, vagy egy `.zip` fájlt, amely tartalmazza őket.
7. Válaszd az **Importálás** lehetőséget a generált sablon áttekintéséhez és a jegyzetek előnézetéhez.
8. Válaszd ismét az **Importálás** lehetőséget, és várd meg, amíg az importálás befejeződik.

## Korlátozások

- A kézírás és a rajzolt alakzatok SVG képként importálódnak a jegyzet végén. A vonások megőrzik alakjukat és színüket, de nem az érzékenységi tollal készült változó szélességet. Az alakzatok és vonalak feketén importálódnak.
- A szövegdobozok, az oldalra elhelyezett képek és az annotált PDF-ek egyelőre nem importálódnak.
- Az ellenőrzőlista elemek nem bejelöltként importálódnak.
- A szövegszínek, betűtípusok és betűméretek nem őrződnek meg.
- A zárolt jegyzeteket a Samsung Notes-ban oldd fel az exportálás előtt.

## Sablonok

Használj [[Importáló sablonok|Importáló sablonokat]] a Samsung Notes adatok importálásának teljes konfigurálásához.

![[Importáló sablonok#Változók]]
