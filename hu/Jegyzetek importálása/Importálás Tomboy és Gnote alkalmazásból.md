---
permalink: import/tomboy
cssclasses:
  - soft-embed
---
Az Obsidian lehetővé teszi jegyzetek áttelepítését Tomboy és Gnote alkalmazásból a hivatalos [[Importáló|Importáló bővítmény]] segítségével. Az Importáló közvetlenül olvassa az alkalmazások `.note` fájljait, és azok XML tartalmát Markdown formátumba konvertálja.

## Jegyzetfájlok megkeresése

A Tomboy és Gnote általában az alábbi mappákban tárolja a jegyzeteket:

- **macOS:** `~/Library/Application Support/Tomboy`
- **Windows:** `%APPDATA%\Tomboy`
- **Linux:** `~/.local/share/tomboy` vagy `~/.local/share/gnote`

A pontos hely eltérhet, ha áthelyezted az adatmappát, vagy az alkalmazás más verzióját használod.

## Tomboy vagy Gnote jegyzetek importálása

1. Nyisd meg a **[[Beállítások]] → Közösségi bővítmények** menüt, és [telepítsd az Importálót](obsidian://show-plugin?id=obsidian-importer).
2. Engedélyezd az Importáló bővítményt.
3. Nyisd meg az **Importálót** a [[Parancspaletta]] vagy a szalag ikon segítségével.
4. A **Fájlformátum** alatt válaszd a **Tomboy/Gnote (.note)** lehetőséget.
5. Válassz ki egyedi `.note` fájlokat vagy az azokat tartalmazó mappát.
6. Tekintsd át az importálási beállításokat, a generált sablont és az előnézeti példákat.
7. Válaszd az **Importálás** lehetőséget, és várd meg, amíg az importálás befejeződik.

## Sablonok

Használj [[Importáló sablonok|Importáló sablonokat]] az adatok importálásának teljes körű konfigurálásához.

![[Importáló sablonok#Változók]]
