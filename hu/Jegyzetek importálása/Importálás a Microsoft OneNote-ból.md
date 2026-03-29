---
permalink: import/onenote
---
Az Obsidian segítségével könnyedén áttelepítheted jegyzeteidet a Microsoft OneNote-ból az [[Importáló|Importáló bővítmény]] használatával. Ez a OneNote adataidat tartós Markdown fájlokká alakítja, amelyeket az Obsidiannal és sok más alkalmazással is használhatsz.

> [!Warning]
> Csak a személyes fiókod tulajdonában lévő jegyzetfüzetek importálhatók. Megosztott jegyzetek, valamint munkahelyi és iskolai fiókok nem támogatottak.

## OneNote adatok importálása az Obsidianba

Szükséged lesz a hivatalos Obsidian [[Importáló]] bővítményre, amelyet [itt telepíthetsz](obsidian://show-plugin?id=obsidian-importer).

1. Nyisd meg a **[[Beállítások]]** menüt.
2. Lépj a **Közösségi bővítmények** részhez, és [telepítsd az Importálót](obsidian://show-plugin?id=obsidian-importer).
3. Engedélyezd az Importáló bővítményt.
4. Nyisd meg az **Importáló** bővítményt a parancspaletta vagy a szalag ikon segítségével.
5. A **Fájlformátum** alatt válaszd a **Microsoft OneNote** lehetőséget.
6. Kattints a **Belépés** gombra, hogy megnyisd a böngészőben a Microsoft bejelentkezési oldalát. Add meg a OneNote jegyzetfüzeteidet tartalmazó Microsoft-fiókod hitelesítő adatait. A Microsoft bejelentkezési folyamatról további információk alább találhatók.
7. Kattints az **Elfogadás** gombra, hogy engedélyezd az Obsidian számára a OneNote jegyzetfüzeteid megtekintését.
8. Kattints a **Hivatkozás megnyitása** gombra, hogy a böngésző átirányítson az Obsidian alkalmazásba.
9. Az Obsidian alkalmazásban az Importáló párbeszédpanel most azt jeleníti meg, hogy be vagy jelentkezve, és felsorolja a OneNote jegyzetfüzeteidet és szakaszaidat. Jelöld be az importálni kívánt szakaszokat.

![[OneNote-Importer-Select-Sections.png]]

10. Kattints az **Importálás** gombra, és várj, amíg az importálás befejeződik.
11. Kész is!

## Hibaelhárítás

### Nem jelennek meg szakaszok vagy jegyzetfüzetek

Győződj meg arról, hogy az importálni kívánt jegyzetfüzetek szinkronizálva vannak a OneDrive-ra, és láthatók a OneNote Weben. A jegyzetfüzeteknek a te tulajdonodban kell lenniük (mások által írt megosztott jegyzetfüzetek nem támogatottak).

Ha egy adott szakasz hiányzik, győződj meg arról, hogy nem zárolt szakaszról van szó — ezek láthatatlanok a zárolás eltávolítása nélkül.

### Az importált jegyzetek üresek vagy hiányzik a tartalom

Ez a probléma ritkán használt jegyzetfüzeteknél fordulhat elő. A probléma megoldásához kövesd az alábbi lépéseket:

1. Nyisd meg a [OneNote Webet](https://onenote.com/notebooks) a böngésződben.
2. **Kattints jobb gombbal** a hiányzó tartalmú jegyzetfüzetekre.
3. Válaszd a menüből a **Jegyzetfüzet exportálása** lehetőséget.
4. **Csomagold ki** a letöltött fájlt egy mappába.
5. Töltsd fel a OneNote jegyzetfüzeteidet [ide](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Nyisd meg az **Obsidian Importálót**, és próbáld meg újra az importálást.

Ha követted ezeket a tippeket, és a probléma továbbra is fennáll, lehetséges, hogy átmeneti probléma van a Microsoft szervereivel. Ebben az esetben várj néhány percet, és próbáld újra. Ha a probléma továbbra is fennáll, kérjük, nyiss egy hibajegyet az [Obsidian Importer GitHub adattárában](https://github.com/obsidianmd/obsidian-importer/issues).

## Adatvédelem

Az Obsidian Importáló bővítmény [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) protokollt használ a Microsoft-fiókodba való bejelentkezéshez és a OneNote jegyzetfüzeteid importálásához. Ez egy rövid időtartamú hozzáférési tokent biztosít a fiókodhoz, amelyet kizárólag a te számítógépedről használnak, és soha nem kerül tárolásra. Az importálás befejezése után opcionálisan visszavonhatod a tokent a [Microsoft alkalmazások és szolgáltatások oldalon](https://account.live.com/consent/Manage).
