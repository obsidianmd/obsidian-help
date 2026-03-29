---
permalink: plugins/file-recovery
publish: true
mobile: true
description: 'A Fájl-helyreállítás segít megvédeni munkádat a nem szándékos adatvesztéstől azáltal, hogy rendszeres időközönként automatikusan pillanatfelvételeket ment a jegyzeteidről.'
---
A Fájl-visszaállítás egy [[Alap bővítmények|alap bővítmény]], amely megvédi munkáját a véletlen törlésektől, fájlsérülésektől vagy nem kívánt változtatásoktól azáltal, hogy rendszeres időközönként automatikusan elmenti a jegyzetek teljes pillanatfelvételeit. A Fájl-visszaállítás nem egy teljes körű biztonsági mentési megoldás, ezért javasoljuk, hogy külön is készítsen [[Obsidian fájlok biztonsági mentése|biztonsági mentést]] az Obsidian fájljairól.

A [[#Tárhely és teljesítmény|túl sok hely]] elfoglalásának elkerülése érdekében az Obsidian csak meghatározott számú napig őrzi meg a pillanatfelvételeket, mielőtt törölné azokat. A pillanatfelvételek a fájlok teljes tartalmát rögzítik, nem csak a változásokat, így bármely korábbi verzió visszaállítható.

> [!info]+ Információ
> Alapértelmezés szerint a pillanatfelvételek egymástól minimum 5 percenként készülnek, és 7 napig őrződnek meg. Mindkét időközt konfigurálhatja a **[[Beállítások]] → Alap bővítmények → Fájl-visszaállítás** menüpontban.

A pillanatfelvételek a [[Hogyan tárolja az Obsidian az adatokat#Globális beállítások|Globális beállítások]] között, a széfen kívül tárolódnak, hogy a széfhez kapcsolódó adatvesztés ellen is védelmet nyújtsanak. Ez azt jelenti, hogy a pillanatfelvételek a jegyzet abszolút útvonalával együtt kerülnek tárolásra. Ha nemrég áthelyezte a széfjét, előfordulhat, hogy vissza kell helyeznie arra a helyre, ahol a pillanatfelvétel készítésekor volt.

> [!tip] Ha az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync-et]] vagy [[Jegyzetek szinkronizálása eszközök között|más szinkronizálási szolgáltatásokat]] használ, a Fájl-visszaállítás pillanatfelvételei nem szinkronizálódnak az eszközök között. A pillanatfelvételek eszközspecifikusak, és minden eszközön helyileg maradnak.

## Pillanatfelvétel visszaállítása

1. Nyissa meg a **[[Beállítások]]t**.
2. Az oldalsávon válassza a **Fájl-visszaállítás** lehetőséget az **Alap bővítmények** alatt.
3. A **Pillanatfelvételek** alatt válassza a **Nézet** lehetőséget.
4. A fájlnév mezőben kezdje el beírni a visszaállítani kívánt fájl nevét, és megjelenik egy javaslatlista.
5. Válassza ki a fájlt, nyomjon Entert, és megjelenik az elérhető pillanatfelvételek listája.
6. Válassza ki a visszaállítani kívánt pillanatfelvételt.
    1. Ha másolni és beilleszteni szeretné egy új jegyzetbe, válassza a **Másolás** gombot.
    2. Ha teljesen vissza szeretné állítani a fájlt, válassza a **Visszaállítás** gombot.
7. Opcionálisan megjelenítheti a pillanatfelvételek közötti különbségeket a **Változtatások megjelenítése** kapcsolóval. Ez megmutatja, milyen tartalom lett hozzáadva, eltávolítva vagy módosítva a pillanatfelvétel-verziók között.

## Pillanatfelvétel-előzmények törlése

> [!danger] A pillanatfelvétel-előzmények törlése visszavonhatatlanul törli a széf összes pillanatfelvételét.

1. Nyissa meg a **[[Beállítások]]t**.
2. Az oldalsávon válassza a **Fájl-visszaállítás** lehetőséget az **Alap bővítmények** alatt.
3. Az **Előzmények törlése** alatt válassza a **Törlés** lehetőséget.
4. Erősítse meg, hogy törölni kívánja az összes pillanatfelvételt, a **Törlés** gombra kattintva.

## Tárhely és teljesítmény

A Fájl-visszaállítás pillanatfelvételei jellemzően minimális lemezterületet használnak, mivel csak a módosított fájlokat tárolják. Azonban sok nagy fájlt tartalmazó vagy gyakran szerkesztett széfekben a pillanatfelvételek idővel felhalmozódhatnak. Figyelje a tárhelyhasználatot, és szükség esetén módosítsa a megőrzési időszakot.

## Korlátozások

- **Apple zárolási mód**: Ez a funkció nem érhető el [zárolási módot](https://support.apple.com/en-us/105120) használó Apple eszközökön, kivéve, ha az Obsidian mentesítve van.
- **Fájltípusok**: Csak `.md` és `.canvas` fájlok állíthatók vissza a Fájl-visszaállítás segítségével.
- **Széf helye**: Ha a széfjét a [[Széfek kezelése#Széf áthelyezése másik mappába|széf váltó]] használata nélkül helyezi át másik helyre, a meglévő pillanatfelvételek esetleg nem lesznek elérhetők.
