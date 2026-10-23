---
permalink: sync/region
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Sync tárolód áthelyezése egy másik régióba.
---
Amikor [[Helyi és távoli széfek|távoli trezort]] hozol létre az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync]] segítségével, az adataid titkosítva kerülnek tárolásra az Obsidian egyik regionális Sync szerverén. Ez az útmutató bemutatja, hogyan helyezheted át a Sync széfedet egy másik regionális szerverre.

## Elérhető régiók

Az alábbi régiók érhetők el az Obsidian Sync szolgáltatásban. Javasoljuk az **Automatikus** beállítás használatát, vagy válassz egy hozzád közeli helyet a késleltetés csökkentése és a szinkronizálási folyamat felgyorsítása érdekében.

![[Obsidian Sync/Biztonság és adatvédelem#^sync-geo-regions]]

## Beállítások feljegyzése

Amikor egy eszközt az új távoli trezorhoz csatlakoztatod, a Sync az abban a pillanatban bekapcsolt beállításokat használhatja. Ha különböző beállításokat tartasz különböző eszközökön, jegyezd fel őket, mielőtt elkezdenéd. Például előfordulhat, hogy a nagy médiafájlokat nem szinkronizálod a telefonodra.

Minden eszközön, amely a távoli trezort használja, nyisd meg a **[[Beállítások|Beállítások]] → Sync** menüt, és jegyezd fel ezeket a beállításokat. Egy képernyőkép is megfelel.

- **Szelektív szinkronizálás**
- **Széfkonfiguráció szinkronizálása**
- **Kizárt mappák**
- Eszközspecifikus beállítások, például **Eszköz neve** és **Ütközések feloldása**

Lásd a [[Sync beállítások és szelektív szinkronizálás]] oldalt, hogy megtudhasd, mit csinálnak az egyes beállítások, és melyek vannak alapértelmezetten bekapcsolva.

## Sync régió módosítása

A távoli trezor régiójának megváltoztatásához újra létre kell hoznod a széfedet egy másik Sync szerveren. Megjegyzés: a régiót az [[Sync titkosítás frissítése]] átállítási segéddel is módosíthatod, ha a távoli trezor egy régebbi verzión van.

> [!danger] Az átállítások destruktívak
> 
> **Mindig készíts [[Obsidian fájlok biztonsági mentése|biztonsági mentést]] a széfedről, mielőtt folytatnád az átállítást.**
> 
> Amikor egy távoli trezort átállítasz, az adatok felülíródnak. Ez a következőket jelenti:
> 
> 1. A távoli adatok eltávolításra kerülnek az Obsidian szervereiről, és a széf adatai újra feltöltésre kerülnek a helyükre.
> 2. A széf összes [[Verziótörténet|verziótörténete]] elvész.

![[Az Obsidian Sync beállítása#Leválasztás egy távoli trezorról]]

Ha a [[Csomagok és tárhelykorlátok|Standard csomagot]] használod, a folytatás előtt [[Az Obsidian Sync beállítása#Távoli trezor törlése|törölnöd kell a távoli trezorodat]] is.

![[Az Obsidian Sync beállítása#Új távoli trezor létrehozása]]

## Többi eszköz újracsatlakoztatása

Miután az új távoli trezor befejezte a szinkronizálást az első eszközödön, váltsd át az összes többi eszközt is, amely a régi távoli trezort használta. Egyszerre egy eszközzel dolgozz.

1. Az eszközön [[Az Obsidian Sync beállítása#Leválasztás egy távoli trezorról|válaszd le a régi távoli trezort]].
2. [[Az Obsidian Sync beállítása#Távoli széf szinkronizálása másik eszközön|Csatlakozz az új távoli trezorhoz]]. Még ne válaszd a **Szinkronizálás megkezdése** lehetőséget.
3. Állítsd be a **Szelektív szinkronizálás**, **Széfkonfiguráció szinkronizálása** és **Kizárt mappák** beállításokat, hogy megegyezzenek az adott eszközhöz feljegyzett beállításokkal.
4. Indítsd újra az Obsidiant. Mobilon vagy tableten szükség lehet az alkalmazás kényszerített bezárására.
5. Válaszd a **Szinkronizálás megkezdése** vagy **Folytatás** lehetőséget, és várd meg, amíg a Sync befejeződik, mielőtt a következő eszközre lépnél.

Ezenkívül [[Az Obsidian Sync beállítása#Távoli trezor törlése|törölheted a régi távoli trezorodat]], miután meggyőződtél az új távoli trezorra és annak régiójára való sikeres átállásról.
