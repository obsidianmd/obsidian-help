---
permalink: publish/sites
---
Ez az oldal az [[Bevezetés az Obsidian Publish-be|Obsidian Publish]] webhelyek kezelését mutatja be.

A webhely az Obsidian Publish által tárolt és online elérhető jegyzetek gyűjteménye, amely Obsidian Publish címen vagy [[Egyedi tartományok|egyedi tartományon]] keresztül érhető el.

## Új webhely létrehozása

> [!note] Az egyidejűleg fenntartható webhelyek számát az Obsidian Publish előfizetésed határozza meg. Új webhely létrehozása előtt győződj meg róla, hogy az előfizetésed lehetővé teszi azt.

1. A szalagon, az alkalmazásablak bal oldalán kattints a **Változások publikálása** ![[lucide-send.svg#icon]] gombra.
2. Ha már van meglévő webhelyed, kattints a **Webhely váltása** ![[lucide-repeat.svg#icon]] gombra.
3. A **Webhelyazonosító** mezőben add meg a kívánt útvonalat a webhelyedhez. Például egy `my-amazing-site` azonosítójú webhely a publish.obsidian.md/my-amazing-site címen érhető el.
4. Kattints a **Létrehozás** gombra.

## Meglévő webhely törlése

> [!note] A jegyzetek a széfedben maradnak a webhely törlése után is.

1. A szalagon, az alkalmazásablak bal oldalán kattints a **Változások publikálása** ![[lucide-send.svg#icon]] gombra.
2. Kattints a **Webhely váltása** ![[lucide-repeat.svg#icon]] gombra.
3. Kattints a **Webhely törlése** ![[lucide-x.svg#icon]] gombra a törölni kívánt webhely mellett jobbra.
4. Kattints a **Törlés** gombra a megerősítéshez.

## Váltás webhelyek között

1. A szalagon, az alkalmazásablak bal oldalán kattints a **Változások publikálása** ![[lucide-send.svg#icon]] gombra.
2. Kattints a **Webhely váltása** ![[lucide-repeat.svg#icon]] gombra.
3. Kattints a **Kiválasztás** gombra a kívánt webhely mellett jobbra.

## Webhelyazonosító módosítása

1. A szalagon, az alkalmazásablak bal oldalán kattints a **Változások publikálása** ![[lucide-send.svg#icon]] gombra.
2. Kattints a **Webhely váltása** ![[lucide-repeat.svg#icon]] gombra.
3. Kattints a **Webhelyazonosító szerkesztése** ![[lucide-edit-3.svg#icon]] gombra a szerkeszteni kívánt webhely mellett jobbra.
4. A **Webhelyazonosító** mezőben add meg a webhely új azonosítóját.
5. Kattints a **Módosítás** gombra.

## Webhely beállításainak megtekintése

1. A szalagon, az alkalmazásablak bal oldalán kattints a **Változások publikálása** ![[lucide-send.svg#icon]] gombra.
2. A **Változások publikálása** párbeszédablakban kattints a **Webhely beállításainak módosítása** ![[lucide-cog.svg#icon]] gombra.

## Webhely beállítások

### Általános

| Beállítás                                      | Típus  | Leírás                                                                                                                                          |
| ---------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Webhely neve                                   | Bevitel | Az Obsidian Publish webhelyed nyilvános neve és címe.                                                                                           |
| Kezdőoldal fájl                                | Bevitel | Annak a Markdown fájlnak a helye, amelyet kezdőoldalként szeretnél használni.                                                                   |
| Logó                                           | Bevitel | A webhely bannereként használni kívánt kép. A képet [[Tartalom publikálása#Jegyzetek publikálása\|publikálni kell]].                             |
| Együttműködés a webhelyen                      | Gomb   | Más felhasználók megadása, akiknek hozzáférést szeretnél adni a publikált jegyzeteid szerkesztéséhez. A felhasználóknak Obsidian fiókkal kell rendelkezniük. |
| Egyedi tartomány                               | Gomb   | [[Egyedi tartományok]]                                                                                                                          |
| Keresőmotorok általi indexelés tiltása         | Kapcsoló | A tisztességes keresőmotorok kizárása a webhelyed feltérképezéséből egy `robots.txt` fájl hozzáadásával.                                        |

### Megjelenés

| Beállítás              | Típus      | Leírás                                                                                                              |
|------------------------|------------|---------------------------------------------------------------------------------------------------------------------|
| Téma                   | Legördülő  | Válaszd ki, hogyan jelenjen meg a téma a webhelyeden: **Világos**, **Sötét** vagy **Igazítás az operációs rendszerhez**. |
| Világos/sötét váltása  | Kapcsoló   | Lehetővé teszi a felhasználók számára a **Világos**/**Sötét** mód közötti váltást egy gomb segítségével a webhelyeden. |

## Olvasási élmény

| Beállítás                    | Típus    | Leírás                                                                                                     |
|------------------------------|----------|-------------------------------------------------------------------------------------------------------------|
| Felugró előnézet megjelenítése | Kapcsoló | Oldal előnézet engedélyezése vagy letiltása aktív belső hivatkozásra való rámutatáskor.                     |
| Oldalcím elrejtése           | Kapcsoló | A publikált jegyzet beágyazott címének megjelenítésének engedélyezése vagy letiltása.                       |
| Olvasható sorhossz           | Kapcsoló | Olvasható sorhossz engedélyezése vagy letiltása a webhelyeden.                                              |
| Szigorú sortörés             | Kapcsoló | Egyszeres sortörések megjelenítésének engedélyezése vagy letiltása a webhelyeden.                           |
| Csúsztatható ablakok használata | Kapcsoló | [[Lapok#Lapcsoportok egymásra helyezése\|Egymásra helyezett lapok]] engedélyezése vagy letiltása a webhelyeden. |

### Komponensek

| Beállítás                          | Típus    | Leírás                                                                                                                                                         |
|------------------------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Navigáció megjelenítése            | Kapcsoló | A [[Fájlkezelő]] nézet engedélyezése vagy letiltása a publish webhelyeden.                                                                                     |
| Navigáció testreszabása            | Gomb     | A fájlok sorrendjének [[Webhely testreszabása#Navigáció testreszabása\|testreszabása]], ha a **Navigáció megjelenítése** be van kapcsolva.                      |
| Keresőmező megjelenítése           | Kapcsoló | Keresőmező engedélyezése vagy letiltása a webhelyeden.                                                                                                          |
| Gráf nézet megjelenítése           | Kapcsoló | A gráf nézet engedélyezése vagy letiltása a webhely jobb oldali oldalsávjában.                                                                                  |
| Tartalomjegyzék megjelenítése      | Kapcsoló | A [[Vázlat\|Tartalomjegyzék]] nézet engedélyezése vagy letiltása a webhelyeden.                                                                                |
| Visszahivatkozások megjelenítése   | Kapcsoló | [[Visszahivatkozások]] engedélyezése vagy letiltása a webhelyeden.                                                                                              |

### Egyéb webhely beállítások

| Beállítás                            | Típus  | Leírás                                                                                                              |
| ------------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------- |
| Jelszavak                            | Gomb   | [[Obsidian Publish/Biztonság és adatvédelem#Add a site password\|Jelszó beállítása]] a teljes webhelyhez való hozzáférés korlátozásához. |
| Google Analytics követőkód           | Bevitel | **Csak egyedi tartomány URL esetén**. Ide helyezd el a Google Analytics webhelykövetési kódodat.                     |
