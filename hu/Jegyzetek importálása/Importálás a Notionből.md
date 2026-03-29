---
permalink: import/notion
---
Az Obsidian lehetővé teszi, hogy könnyedén átköltöztesd jegyzeteidet a Notionből az [[Importáló|Importáló bővítmény]] segítségével. Ez a Notion adataidat tartós Markdown fájlokká alakítja, amelyeket offline is használhatsz az Obsidiannel és sok más alkalmazással.

Az Obsidian két módszert kínál a Notion adataid importálására:

1. Az **API importálás** megőrzi a teljes munkaterületedet, beleértve az adatbázisokat és képleteket, amelyek [[Bevezetés a Bázisokba|Bázisokká]] konvertálódnak, de Notion integrációs tokent és internetkapcsolatot igényel.
2. A **fájl importálás** nem őrzi meg az adatbázisokat, de nem igényel API tokent vagy internetkapcsolatot.

## API importálás

### Notion API integrációs token létrehozása

A Notion adatainak API-n keresztüli eléréséhez integrációs tokenre van szükséged. Ez a lépés körülbelül 2 percet vesz igénybe.

A token egy hosszú szám- és betűsorozat, amely jellemzően `ntn_...`-nel kezdődik, és lehetővé teszi az adataid letöltését a Notionből.

1. Jelentkezz be a [Notion Integrations](https://www.notion.so/profile/integrations/internal) irányítópultra.
2. Válaszd a **New integration** lehetőséget.

![[notion-integration.png#interface]]

2. Adj nevet az integrációdnak, pl. "Personal". Bármilyen nevet használhatsz.
3. Válaszd ki az exportálni kívánt munkaterületet.
4. Kattints a **Save** gombra, és folytasd a **Configure integration settings** beállítással.
5. A **Configuration** lapon az API tokened elérhető az **Internal Integration Secret** mezőben.
6. Válaszd a **Show**, majd a **Copy** lehetőséget.
7. Mentsd el a tokent biztonságos helyre, például a jelszókezelődbe.

![[notion-token.png#interface]]

Ezután adj hozzáférést az integrációdnak azokhoz a Notion oldalakhoz és adatbázisokhoz, amelyeket importálni szeretnél.

1. Lépj az imént létrehozott integráció **Access** lapjára.
2. Kattints az **Edit access** lehetőségre.
3. Add hozzá az importálni kívánt oldalakat és adatbázisokat.

Most már konvertálhatod az adataidat az Obsidian Importáló segítségével.

### Notion adatok importálása API-n keresztül

Szükséged lesz a hivatalos Obsidian [[Importáló]] bővítményre, amelyet [itt telepíthetsz](obsidian://show-plugin?id=obsidian-importer).

1. Nyisd meg a **[[Beállítások]]** menüt.
2. Lépj a **Közösségi bővítmények** részhez, és [telepítsd az Importálót](obsidian://show-plugin?id=obsidian-importer).
3. Engedélyezd az Importáló bővítményt.
4. Nyisd meg az **Importáló** bővítményt a parancspaletta vagy a szalag ikon segítségével.
5. A **Fájlformátum** alatt válaszd a **Notion (API)** lehetőséget.
6. Az **API token** mezőbe illeszd be a Notionből származó **Internal Integration Secret** értéket.
7. Kattints a **Betöltés** gombra az importálni kívánt adatbázisok és oldalak kiválasztásához.
8. Tekintsd át és szerkeszd az importálási beállításokat.
9. Válaszd az **Importálás** lehetőséget, és várd meg, amíg az importálás befejeződik.
10. Kész is vagy!

### Korlátozások

> [!info] Az API importálás új funkció
> A Notion API importáló új funkció. A Notion munkaterületek összetettsége miatt előfordulhat, hogy egyes szélső esetek nem lettek figyelembe véve. Ha problémákat tapasztalsz a konvertálás során, [küldj hibajelentést](https://github.com/obsidianmd/obsidian-importer/issues), hogy javíthassuk.

A Notion API sebességkorlátai miatt a nagy munkaterületek importálása jelentős időt vehet igénybe. Kérjük, légy türelmes.

A Notion API korlátai miatt egyes adatok nem érhetők el vagy nem konvertálhatók:

- Minden adatbázisból csak az elsődleges nézet kerül importálásra.
- A [hivatkozott adatforrások](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases) nem kerülnek importálásra: *"A Notion API jelenleg nem támogatja a hivatkozott adatforrásokat. Az adatbázis integrációddal való megosztásakor győződj meg róla, hogy az tartalmazza az eredeti adatforrást!"*
- `People` függvények: `name()` és `email()`
- `Text` függvények: `style()` és `unstyle()`

Ezenkívül az Importáló a következő módosításokat végzi:

- Az aloldalak vagy adatbázisok nélküli oldalak `[fájlnév].md` formátumban kerülnek importálásra a `[fájlnév]/[fájlnév].md` helyett.
- Az adatbázisok mindig `[adatbázis neve]` nevű mappákként jelennek meg, amelyekben egy `[adatbázis neve].base` fájl található.

## Fájl importálás

A fájl importálás egy alternatív módszer a Notion adataid importálására. Ez a módszer nem őrzi meg az adatbázisokat, de nem igényel API tokent vagy internetkapcsolatot.

### Adatok exportálása a Notionből

Az adataid importálásra való előkészítéséhez exportálnod kell a teljes munkaterületedet a Notion HTML exportálási formátumával. Javasoljuk, hogy ne használd a Notion Markdown exportálását, mivel az fontos adatokat hagy ki. A munkaterület teljes tartalmának exportálásához rendszergazdai hozzáféréssel kell rendelkezned a Notion munkaterülethez.

1. Lépj a **[[Beállítások]]** menübe a Notion oldalsáv tetején.
2. A **Workspace** alatt válaszd az **General** lehetőséget.
3. Keresd meg és válaszd az **Export all workspace content** lehetőséget.
4. Az **Export format** alatt válaszd a **HTML** formátumot.
5. Válaszd az **Include everything** lehetőséget.
6. Engedélyezd a **Create folders for subpages** opciót.
7. E-mailben vagy közvetlenül a böngészőben kapsz egy `.zip` fájlt.

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### Notion .zip fájl importálása

Szükséged lesz a hivatalos Obsidian [[Importáló]] bővítményre, amelyet [itt telepíthetsz](obsidian://show-plugin?id=obsidian-importer).

1. Nyisd meg a **[[Beállítások]]** menüt.
2. Lépj a **Közösségi bővítmények** részhez, és [telepítsd az Importálót](obsidian://show-plugin?id=obsidian-importer).
3. Engedélyezd az Importáló bővítményt.
4. Nyisd meg az **Importáló** bővítményt a parancspaletta vagy a szalag ikon segítségével.
5. A **Fájlformátum** alatt válaszd a **Notion (.zip)** lehetőséget.
6. Válaszd ki az importálni kívánt Notion fájlokat tartalmazó `.zip` fájlt. *Javasolt az összes Notion tartalmat egyszerre importálni, hogy a belső hivatkozások helyesen feloldhatók legyenek.*
7. _Opcionálisan_ válassz ki egy mappát az importáláshoz. A Notion oldalaid és adatbázisaid ebbe a mappába kerülnek beágyazásra.
8. Engedélyezd a **Save parent pages in subfolders** opciót a Notion struktúra megtartásához. *Megjegyzés: a Notionban lehet tartalmat írni mappákba, ez az Obsidianban nem lehetséges, ezért ezek az oldalak aloldalként kerülnek hozzáadásra a mappa alá.*
9. Válaszd az **Importálás** lehetőséget, és várd meg, amíg az importálás befejeződik.
10. Kész is vagy!

### Hibaelhárítás

Ha problémákba ütközöl a Notionből történő importálás során:

- Győződj meg róla, hogy a Notionban **HTML** exportálási formátumot használsz, **nem Markdown**-t.
- Ha az Obsidian lefagyni látszik az importálás során, tiltsd le a közösségi bővítményeket, és próbáld újra.

Más problémába ütköztél? Keress [az Importáló tárházban](https://github.com/obsidianmd/obsidian-importer/issues), hogy mások tapasztalták-e már.

#### Nagy munkaterületek importálása

Ha több gigabájtnyi adatot tartalmazó munkaterületet importálsz, a Notionból exportált fájl beágyazott `.zip` fájlokat tartalmazhat. Ebben az esetben az alábbi importálási hibaüzenetet láthatod:

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

Ha ezt a hibát látod, csomagold ki a Notionból származó fájlt, majd importáld a beágyazott `Export-{id}-Part-1.zip` fájlokat.
