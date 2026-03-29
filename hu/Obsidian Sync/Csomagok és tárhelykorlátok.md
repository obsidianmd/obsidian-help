---
permalink: sync/plans
publish: true
mobile: true
description: Ismerd meg az Obsidian Sync számára elérhető különböző csomagválasztékot.
---
## Csomagok

A jegyzeteid szinkronizálásához az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync]] segítségével előfizetési csomagra van szükséged. A Sync csomagot a [saját fiókodba](https://obsidian.md/account/sync) bejelentkezve vásárolhatod meg. Az árazásért lásd a [Sync termékoldalt](https://obsidian.md/sync).

Az alábbiakban a Standard és a Plus csomag összehasonlítása látható:

|                                                                | Sync Standard | Sync Plus       |
| -------------------------------------------------------------- | ------------- | --------------- |
| Szinkronizált széfek                                           | 1             | 10              |
| Maximális fájlméret                                            | 5 MB          | 200 MB          |
| Teljes tárhely                                                 | 1 GB          | 10 GB – 100 GB  |
| [[Verziótörténet]]                                             | 1 hónap       | 12 hónap        |
| Eszközök                                                       | Korlátlan     | Korlátlan       |
| [[Együttműködés megosztott széfen\|Megosztott széfek]]         | Igen          | Igen            |

## Tárhelykorlátok

Az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync]] segítségével tárolható adatok mennyisége az előfizetési csomagodtól függ. A Sync Plus csomagnál a [fiókod kezelőfelületén](https://obsidian.md/account/sync) akár 100 GB-ig további tárhelyet vásárolhatsz. További részletekért lásd a [[Gyakran ismételt kérdések]] oldalt.

Egyetlen fiókszintű tárhelykorlát vonatkozik az összes széfedben lévő összes jegyzetre. A [[Verziótörténet]] és a [[csatolmányok|Csatolmányok]] szintén beleszámítanak a fiókod tárhelykorlátjába.

Amikor eléred a fiókod tárhelykorlátját, a Sync bővítmény leállítja a fájlok szinkronizálását, és a rendszer felkér a távoli trezor(ok) megtisztítására.

### Nagy fájlok azonosítása és törlése

A széfben lévő nagy fájlok azonosításához és törléséhez:

1. Nyisd meg a **[[Beállítások]] → Szinkronizálás** menüt.
2. Válaszd ki **A legnagyobb fájlok megtekintése** lehetőséget **A széf mérete átlépte a felső limitet** mellett.
	1. Ha nem látod **A széf mérete átlépte a felső limitet** feliratot, az azt jelenti, hogy ==még nem érted el a méretkorlátot==.
3. Zárd be **A legnagyobb fájlok megtekintése** ablakot.
4. Töröld a már nem szükséges nagy fájlokat.
5. Várd meg, amíg az Obsidian Sync befejezi a feladatot. Ez eltarthat egy ideig.
6. Nyisd meg a **[[Beállítások]] → Szinkronizálás** menüt.
7. Válaszd ki a **Törlés** lehetőséget **A széf mérete átlépte a felső limitet** mellett. Ez eltávolítja a törölt fájlokat a távoli trezorból, így helyet szabadít fel.

Miután a törlés szinkronizálódik a szerverrel, az Obsidian Sync újra működni fog.

### Új távoli trezor létrehozása

**Új távoli trezort hozhatsz létre**, hogy kizárd a nagy fájlokat a szinkronizálás előtt. A fájlok verziótörténete visszaáll, ha új távoli trezort hozol létre. Kérjük, győződj meg róla, hogy nincs szükséged a régebbi fájlok verziótörténetére, mielőtt továbblépnél.

Egy új távoli trezorba történő szinkronizáláshoz kövesd az alábbi lépéseket:

1. Nyisd meg a **[[Beállítások]] → Szinkronizálás** menüt.
2. Válaszd ki a **Kezelés** lehetőséget a **Távoli trezor** mellett.
3. Válaszd az **Új széf létrehozása** lehetőséget, és kövesd a létrehozási lépéseket. Ha elfogytak a széfjeid, előfordulhat, hogy először [[Az Obsidian Sync beállítása#Kapcsolat megszakítása egy távoli trezorral|meg kell szakítanod a kapcsolatot]] a jelenlegi távoli trezorral, és [[Az Obsidian Sync beállítása#Távoli trezor törlése|törölnöd]] kell azt.
4. Állítsd be a kizárt fájlokat, mielőtt elkezdenéd a szinkronizálást az új távoli trezorba.
5. Indítsd újra az Obsidiant a módosítások alkalmazásához.
6. Nyisd meg a **[[Beállítások]] → Szinkronizálás** menüt.
7. Válaszd a **Folytatás** lehetőséget az új távoli trezorba történő szinkronizálás megkezdéséhez.

Az új távoli trezor kisebb lesz, mint az előző, a verziótörténet hiánya és a kizárt fájlok miatt.

## Csomag frissítése

A csomagodat a [fiókod kezelőfelületére](https://obsidian.md/account/sync) bejelentkezve frissítheted. Innen a Sync Standard csomagról Sync Plus csomagra frissíthetsz, és akár 100 GB-ig növelheted a tárhelyet.

## Csomag visszaminősítése

Ha szeretnéd visszaminősíteni a Sync csomagodat, de a tárhelyhasználatod meghaladja az új csomag korlátját, helyet kell felszabadítanod a távoli trezorban. Jelenleg nincs közvetlen módszer arra, hogy gyorsan eltávolíts bizonyos fájlokat egy meglévő távoli trezorból. Ennek az az oka, hogy a mellékletek legfeljebb két hétig megőrződnek a verziótörténetben, és a verziótörténet beleszámít a tárhelykorlátodba.

A Sync tárhelyhasználat csökkentésének leggyorsabb módja egy új távoli trezor létrehozása kikapcsolt mellékletekkel, majd a tárhelykorlátot meghaladó régi távoli trezor törlése. Ne feledd, hogy ezzel elveszíted a verziótörténetet.

Ha Sync Plus-ról Sync Standard-re minősítesz vissza, a visszaminősítés engedélyezéséhez a meglévő széfek számát is egyre kell csökkentened.

### Verziótörténet megőrzése

A mellékletek legfeljebb két hétig megőrződnek a [[Verziótörténet|verziótörténetedben]]. Ha a közeljövőben tervezel visszaminősíteni, elkezdheted eltávolítani a mellékleteket a helyi széfedből.

Két hét elteltével ezek törlődnek a távoli trezorból, és többé nem számítanak bele a tárhelykorlátodba. Ezen a ponton visszaminősítheted a csomagodat, miközben megőrzöd a verziótörténetet más fájltípusok, például Markdown fájlok esetében.
