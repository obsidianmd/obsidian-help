---
permalink: publish/customize
publish: true
description: 'Ismerd meg, hogyan szabhatod testre az Obsidian Publish webhelyed megjelenését és stílusát.'
---
Ez az oldal bemutatja, hogyan szabhatod testre az [[Bevezetés az Obsidian Publish-be|Obsidian Publish]] webhelyed megjelenését és működését.

## Statikus eszközök

A webhelyedet testreszabhatod az alábbi fájlok [[Tartalom publikálása#Jegyzetek publikálása|publikálásával]]:

- `publish.css` egyéni CSS hozzáadásához
- `publish.js` egyéni JavaScript hozzáadásához
- `favicon-32x32.png` a favicon beállításához

**Megjegyzések:**

- A [CSS-változók a Publish-hez](https://docs.obsidian.md/Reference/CSS+variables/Publish/Publish) megtalálhatók a dokumentációs oldalunkon.
- Mivel az Obsidian nem támogatja a CSS- vagy JavaScript-fájlokat, egy másik alkalmazást kell használnod ezek létrehozásához és szerkesztéséhez.
- Mind a `publish.css`, mind a `publish.js` fájlnak a széfed gyökérkönyvtárában (`/`) kell lennie.
- Alapértelmezés szerint a `publish.css` és a `publish.js` nem jelenik meg a fájlkezelőben, de továbbra is publikálhatod őket a **Változtatások publikálása** párbeszédablakból.
- Egyéni JavaScript használatához a `publish.js` fájllal [[Egyedi tartományok|egyedi tartományt]] kell beállítanod.

A faviconokhoz az Obsidian Publish a következő elnevezési konvenciókat támogatja, ahol a `32` az ikon méretét jelenti képpontban:

- `favicon-32.png`
- `favicon-32x32.png`
- `favicon.ico`

Javasoljuk, hogy az alábbi méretek közül egyet vagy többet adj meg:

- `favicon-32x32.png`
- `favicon-128x128.png`
- `favicon-152x152.png`
- `favicon-167x167.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-196x196.png`

A faviconokat rugalmasan elhelyezheted a széfen belül bárhová, amennyiben publikálva vannak a webhelyeden.

## Közösségi téma használata

Közösségi téma használatához a webhelyeden:

1. Nyisd meg a széfedet az operációs rendszered alapértelmezett fájlkezelőjében.
2. Navigálj a széf beállítások mappájába (alapértelmezés: `.obsidian`).
3. Nyisd meg a `themes` mappát.
4. Másold ki a CSS-fájlt ahhoz a témához, amelyet használni szeretnél.
5. Illeszd be a fájlt a széfed gyökérmappájába.
6. Nevezd át a CSS-fájlt `publish.css` névre.
7. [[Tartalom publikálása#Jegyzetek publikálása|Publikáld]] a `publish.css` fájlt.

**Megjegyzések:**

- Ha a stílus nem frissül néhány percen belül, próbáld meg törölni a böngésző gyorsítótárát.
- A világos és sötét mód között a [[Webhelyek kezelése#Webhely beállításainak megtekintése|webhely beállításaiban]] válthatsz.
- Sok közösségi téma a **Style Settings** bővítményt használja egyéni stílusok beállításához, de ezek a beállítások nem működnek az Obsidian Publish-en.

> [!tip] Témák fejlesztése
> Nem találod a megfelelő témát? Tanuld meg, hogyan [készíts saját Publish témát](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme).

## Felhasználói felület funkcióinak engedélyezése

Számos felhasználói felület funkciót kapcsolhatsz be a webhelyeden, például a gráf nézetet vagy a tartalomjegyzéket.

Böngészd az elérhető felhasználói felület funkciókat az **Olvasási élmény** és **Komponensek** szakaszokban a [[Webhelyek kezelése#Webhely beállításainak megtekintése|webhely beállításaiban]].

### Navigáció testreszabása

Az Obsidian Publish-ben lehetőséged van testreszabni a fájlok és mappák navigációs sorrendjét és megjelenítését a Publish [[Fájlkezelő|fájlkezelőjében]]. A navigációs elemek alapértelmezés szerint publikálási sorrendben jelennek meg. A nem publikált jegyzetek nem jelennek meg ezen a panelen.

#### A navigáció testreszabási beállításainak elérése

1. A [[Szalag|szalagon]] válaszd a **Változtatások publikálása** ![[lucide-send.svg#icon]] lehetőséget, vagy nyisd meg a [[Parancspaletta|parancspalettát]] és írd be: **Publish: Publish changes...**
2. A **Változtatások publikálása** párbeszédablakban válaszd a **Webhely beállításainak módosítása** ![[lucide-cog.svg#icon]] lehetőséget.
3. A **Komponensek beállításai** alatt, a **Navigáció testreszabása** mellett válaszd a **Kezelés** gombot.

Egy új felugró ablak jelenik meg **Navigáció** címmel a **Webhely beállításainak módosítása** ablak felett.

#### Navigációs elemek módosítása

A **Navigáció előnézete** címkéjű szakaszban módosíthatod a publikált tartalmad megjelenítési sorrendjét.

1. Válaszd ki a módosítani kívánt mappát vagy jegyzetet.
2. Húzd a jegyzetet vagy mappát felfelé vagy lefelé a kívánt helyre.
3. A **Navigáció** ablak jobb alsó sarkában válaszd a **Kész** lehetőséget.

A Publish elküldi a navigációs módosításaidat a webhelyedre.

#### Navigációs elemek elrejtése és megjelenítése

Ha vannak olyan jegyzetek vagy mappák, amelyeket publikáltál, de nem szeretnéd, hogy láthatók legyenek a navigációban, elrejtheted ezeket az elemeket.

1. Válaszd ki a módosítani kívánt mappát vagy jegyzetet.
2. Kattints jobb egérgombbal, és válaszd az **Elrejtés a navigációban** lehetőséget. Az elemnek el kell tűnnie a **Navigáció előnézete** nézetből.
3. A **Navigáció** ablak jobb alsó sarkában válaszd a **Kész** lehetőséget.

A Publish elküldi a navigációs módosításaidat a webhelyedre.

> [!tip] A **Rejtett elemek megjelenítése** jelölőnégyzet bejelölésével megjelenítheted a rejtett fájlokat, amely a **Navigáció előnézete** cím jobb oldalán található.

## GYIK

**Áthelyezhetek fájlokat egyik mappából a másikba a navigáción belül?**

Nem. A jegyzetek mappastruktúráját meg kell tartani. A jegyzetsorrendet módosíthatod a mappákon belül (beleértve a széf gyökerét is), és a mappák sorrendjét más mappákon belül.

**Szerkeszthetem több jegyzet és mappa sorrendjét a Kész kiválasztása előtt?**

Igen.

**Hogyan állíthatom vissza ezeket a módosításokat?**

- **Megjelenítési sorrend**: Válaszd az **Alapértelmezettek visszaállítása** ikont (óramutató járásával ellentétes irányú forgó nyíl) a **Navigációs elemek megjelenítési sorrendje** mellett. Ez visszaállítja a navigációs elemeket ABC sorrendbe.
- **Rejtett állapot**: Válaszd az **Alapértelmezettek visszaállítása** ikont (óramutató járásával ellentétes irányú forgó nyíl) az **Oldalak vagy mappák elrejtése a navigációból** mellett. Ez visszaállítja a rejtett navigációs elemeket látható állapotba.
