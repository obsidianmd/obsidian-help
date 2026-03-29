---
permalink: publish/publish
publish: true
mobile: true
description: 'Ismerd meg, hogyan teheted közzé tartalmaidat az Obsidian Publish segítségével.'
---
Ez az oldal a publikált tartalmak kezelését ismerteti. A webhely stílusának testreszabásáról lásd: [[Webhely testreszabása]].

## Előfeltételek

- Egy Obsidian-fiók. Ha még nincs, [regisztráljon most](https://obsidian.md/auth?returnto=%2Faccount%2Fpublish#signup).
- Aktív Obsidian Publish előfizetés. Ha még nincs, fizessen elő a [fiók irányítópultján](https://obsidian.md/account/publish).
- A **Publish** alap bővítmény [[Az Obsidian Publish beállítása#Az Obsidian Publish engedélyezése|engedélyezve]] van.
- Egy [[Webhelyek kezelése#Új webhely létrehozása|Publish webhely]] létre van hozva.

## Jegyzetek publikálása

1. A **Szalag** menüben válassza a **Változtatások publikálása** ![[lucide-send.svg#icon]] lehetőséget.
2. A **Változtatások publikálása** párbeszédablakban válassza az **ÚJ** fület az összes még nem publikált jegyzet megtekintéséhez.
3. Jelölje ki a publikálni kívánt jegyzeteket.
4. Válassza a **Publikálás** lehetőséget.

## Jegyzetek publikálásának visszavonása

A jegyzetek a helyi széfben maradnak a publikálás visszavonása után is.

1. A **Szalag** menüben válassza a **Változtatások publikálása** ![[lucide-send.svg#icon]] lehetőséget.
2. A **Változtatások publikálása** párbeszédablakban válassza a **VÁLTOZATLAN** fület az összes publikált jegyzet megtekintéséhez.
3. Jelölje ki azokat a jegyzeteket, amelyek publikálását vissza szeretné vonni.
4. Válassza a **Publikálás** lehetőséget.

## Publikált jegyzet frissítése

1. A **Szalag** menüben válassza a **Változtatások publikálása** ![[lucide-send.svg#icon]] lehetőséget.
2. A **Változtatások publikálása** párbeszédablakban válassza a **VÁLTOZÁSOK** fület az utolsó publikálás óta módosított jegyzetek megtekintéséhez.
3. Jelölje ki a frissíteni kívánt jegyzeteket.
4. Válassza a **Publikálás** lehetőséget.

> [!hint] Az átnevezett vagy eltávolított jegyzetek és képek törlése a Publish-ből ebben a lépésben történik. Az adatok törléséhez manuálisan kell bejelölnie a jelölőnégyzetet, mivel biztonsági okokból nem kerül automatikusan kiválasztásra.

## Hivatkozott adatok publikálása

Amikor más jegyzetekre mutató hivatkozásokat vagy beágyazott képeket tartalmazó jegyzeteket publikál, törött hivatkozások keletkezhetnek, ha a hivatkozott jegyzeteket nem publikálja szintén. Az **Obsidian Publish** segít ennek megelőzésében azáltal, hogy automatikusan kijelöli a már kiválasztott jegyzetekből hivatkozott médiafájlokat.

Az összes hivatkozott jegyzet felvételéhez válassza a **Hivatkozott elemek hozzáadása** lehetőséget a **Változtatások publikálása** párbeszédablakban.

Publikálás előtt tekintse át a frissített kijelölést, hogy megbizonyosodjon arról, hogy nem tartalmaz olyan adatokat, amelyeket még nem szeretne publikálni.

> [!tip] A **Hivatkozott elemek hozzáadása** funkció figyelembe veszi az [[#Adatok figyelmen kívül hagyása]] részben meghatározott kizárásokat.

## Adatok automatikus kijelölése publikáláshoz

Állítsa be a `publish: true` értéket egy jegyzet [[Tulajdonságok]] között, hogy automatikusan bekerüljön a publikálásra váró új vagy módosított jegyzetek közé.

Megadott mappákban lévő jegyzeteket és hivatkozott képeket is automatikusan kijelölhet, ha **Beleértett** mappákként adja hozzá őket:

1. A **Szalag** menüben válassza a **Változtatások publikálása** ![[lucide-send.svg#icon]] lehetőséget, vagy nyissa meg a [[Parancspaletta|parancspalettát]] és írja be: **Publish: Változtatások publikálása...**.
2. Válassza a **Kiadványszűrők kezelése** ![[lucide-filter.svg#icon]] ikont.
3. A **Beleértett mappák** szakaszban válassza a **Kezelés** lehetőséget.
4. Válassza ki a beleérteni kívánt mappákat a javaslatlistából.
5. A mappa felkerül a beleértett listára.
6. Ha végzett, válassza a **Kész** lehetőséget.

### Adatok figyelmen kívül hagyása

Egy jegyzet figyelmen kívül hagyásához az Obsidian Publish-ben állítsa be a `publish: false` értéket a jegyzet [[Tulajdonságok]] között. A jegyzet többé nem jelenik meg a publikálható jegyzetek listájában.

Megadott mappákban lévő jegyzeteket és képeket is automatikusan figyelmen kívül hagyhat, ha **Kizárt** mappákként adja hozzá őket:

1. A **Szalag** menüben válassza a **Változtatások publikálása** ![[lucide-send.svg#icon]] lehetőséget, vagy nyissa meg a [[Parancspaletta|parancspalettát]] és írja be: **Publish: Változtatások publikálása...**.
2. Válassza a **Kiadványszűrők kezelése** ![[lucide-filter.svg#icon]] ikont.
3. A **Kizárt mappák** szakaszban válassza a **Kezelés** lehetőséget.
4. Válassza ki a kizárni kívánt mappákat a javaslatlistából.
5. A mappa felkerül a kizárt listára.
6. Ha végzett, válassza a **Kész** lehetőséget.

> [!note] A `publish: true` felülírja a kizárt mappákat
> Ha egy fájlban a `publish: true` van beállítva, akkor is publikálásra kerül, ha kizárt mappában vagy szűrőben található. Ennek oka, hogy a `publish: true` pontosabb szabályozást biztosít.
