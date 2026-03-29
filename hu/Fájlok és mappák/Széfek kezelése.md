---
permalink: manage-vaults
---
A **széf** egy mappa a fájlrendszereden, amely tartalmazza a jegyzeteidet, a [[Csatolmányok|csatolmányokat]] és a [[Konfigurációs mappa|konfigurációs mappát]] az Obsidian-specifikus beállításokkal. A széfekről további információkért lásd: [[Hogyan tárolja az Obsidian az adatokat]].

A széfeket a **Széfváltó** segítségével kezelheted. A *Széfprofil* az Obsidian első megnyitásakor jelenik meg.

A széfváltó megnyitásához egy meglévő széfből válaszd a **Széfprofil** ![[lucide-chevrons-up-down.svg#icon]] lehetőséget a [[Oldalsáv|bal oldali oldalsáv]] alján. Vagy válaszd a **Másik széf megnyitása** lehetőséget a [[Parancspaletta|parancspalettából]].

## Új széf létrehozása

1. Nyisd meg az Obsidiant a számítógépeden.
2. A bal alsó sarokban válaszd a **Széfprofil** ![[lucide-chevrons-up-down.svg#icon]] lehetőséget.
3. Egy helyi menü jelenik meg. Válaszd a **Széfek kezelése...** lehetőséget.
3. Az **Új széf létrehozása** mellett válaszd a **Létrehozás** lehetőséget.
4. A **Tárhely neve** mezőbe írd be a széfed nevét.
5. Kattints a **Tallózás** gombra, és válaszd ki, hová szeretnéd létrehozni az új széfet.
6. Kattints a **Létrehozás** gombra.

## Széf létrehozása meglévő mappából

1. Nyisd meg az Obsidiant a számítógépeden.
2. A bal alsó sarokban válaszd a **Széfprofil** ![[lucide-chevrons-up-down.svg#icon]] lehetőséget.
3. Egy helyi menü jelenik meg. Válaszd a **Széfek kezelése...** lehetőséget.
3. A **Mappa megnyitása széfként** mellett kattints a **Megnyitás** gombra.
4. A fájlböngészőben válaszd ki azt a mappát, amelyet széfként szeretnél használni.
5. Kattints a **Megnyitás** gombra.

> [!tip] Széf megnyitása Obsidian Sync-ből
> Ha egy távoli trezort szeretnél megnyitni az Obsidian Sync segítségével, lásd: [[Az Obsidian Sync beállítása]].

## Széf átnevezése

Mivel a széf neve és a mögöttes mappa neve megegyezik, a széf átnevezése a mappát is átnevezi.

1. Nyisd meg az Obsidiant a számítógépeden.
2. A bal alsó sarokban válaszd a **Széfprofil** ![[lucide-chevrons-up-down.svg#icon]] lehetőséget.
3. Egy helyi menü jelenik meg. Válaszd a **Széfek kezelése...** lehetőséget.
4. A széflistában válaszd a **További lehetőségek** ![[lucide-more-horizontal.svg#icon]] ikont az átnevezni kívánt széf mellett.
5. Válaszd a **Széf átnevezése** lehetőséget.
6. Írd be a széf új nevét, majd nyomd meg az `Enter` billentyűt.

## Széf áthelyezése másik mappába

1. Nyisd meg az Obsidiant a számítógépeden.
2. A bal alsó sarokban válaszd a **Széfprofil** ![[lucide-chevrons-up-down.svg#icon]] lehetőséget.
3. Egy helyi menü jelenik meg. Válaszd a **Széfek kezelése...** lehetőséget.
4. Zárd be az aktuális széf ablakát, de hagyd nyitva a **Széfek kezelése** ablakot.
5. A széflistában válaszd a **További lehetőségek** ![[lucide-more-horizontal.svg#icon]] ikont az áthelyezni kívánt széf mellett.
6. Válaszd a **Széf áthelyezése** lehetőséget, majd válaszd ki az új helyet.

Egyes operációs rendszerek nem teszik lehetővé a széf áthelyezését a Széfváltóval. Ilyen esetekben manuálisan kell áthelyezned a széfet:

1. Zárd be az Obsidiant.
2. Helyezd át a széf mappáját az új helyre, kerülve a más szolgáltatások által szinkronizált mappákat.
3. Nyisd meg újra az Obsidiant.
4. Kattints a **Széfprofil** ikonra a bal alsó sarokban ![[lucide-chevrons-up-down.svg#icon]].
5. A felugró menüből válaszd a **Széfek kezelése...** lehetőséget.
6. A **Mappa megnyitása széfként** mellett kattints a **Megnyitás** gombra.
7. Navigálj az új széfmappához, és válaszd ki.
8. Kattints a **Megnyitás** gombra.
9. Ellenőrizd, hogy a széf tartalma változatlan maradt-e. Szükség esetén engedélyezd újra a közösségi bővítményeket a **[[Beállítások]] → Közösségi bővítmények → Korlátozott mód kikapcsolása** útvonalon.

## Széf eltávolítása

A széf eltávolítása csak a széflistából távolítja el azt.

1. Nyisd meg az Obsidiant a számítógépeden.
2. A bal alsó sarokban válaszd a **Széfprofil** ![[lucide-chevrons-up-down.svg#icon]] lehetőséget.
3. Egy helyi menü jelenik meg. Válaszd a **Széfek kezelése...** lehetőséget.
4. A széflistában válaszd a **További lehetőségek** ![[lucide-more-horizontal.svg#icon]] ikont az eltávolítani kívánt széf mellett.
5. Válaszd az **Eltávolítás a listából** lehetőséget.

## Beállítások átvitele másik széfbe

Ha ugyanazokat a beállításokat szeretnéd használni egy másik széfben, a preferált fájlkezelőddel (vagy terminállal) másold az `.obsidian` mappát a forrás széf gyökeréből a cél széf gyökerébe.

Előfordulhat, hogy újra kell indítanod az Obsidiant a módosítások érvénybe lépéséhez.

> [!note] Hol találom az `.obsidian` mappát?
> Alapértelmezés szerint a legtöbb operációs rendszer elrejti a ponttal (`.`) kezdődő mappákat. Az `.obsidian` mappáról és annak eléréséről további információkért lásd: [[Hogyan tárolja az Obsidian az adatokat#Széf beállítások|széf beállítások]] és [[Konfigurációs mappa|konfigurációs mappák]].
