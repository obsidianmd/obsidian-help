---
permalink: plugins/file-explorer
publish: true
mobile: true
description: 'A Fájlkezelő egy alapbővítmény, amely lehetővé teszi a fájlok és mappák kezelését a széfeden belül.'
---
A Fájlkezelő egy [[Alap bővítmények|alap bővítmény]], amellyel fájlokat és mappákat kezelhet a széfben. Böngészhet a széfben lévő jegyzetek és más [[Elfogadott fájlformátumok]] között, és számos gyakori fájlműveletet végezhet:

- Fájlok és mappák létrehozása, törlése és átnevezése.
- Fájlok és mappák áthelyezése fogd és vidd módszerrel.
- A [[#Helyi menü használata|helyi menü]] használata az összes elérhető művelet eléréséhez.

> [!tip]- Fájlok húzása
> Húzhat egy fájlt a Fájlkezelőből a jegyzetébe, hogy hivatkozást hozzon létre rá, vagy húzhat egy fájlt a Fájlkezelő egy mappájába a másoláshoz.

## Új jegyzet létrehozása

Új jegyzet létrehozása az új jegyzetek alapértelmezett helyén:

1. Válassza az **Új jegyzet** ![[lucide-pen-line.svg#icon]] lehetőséget a Fájlkezelő tetején.
2. Írja be a jegyzet nevét, majd nyomja meg az `Enter` billentyűt.

> [!tip]- Alapértelmezett hely módosítása
> Az új jegyzetek alapértelmezett helyét a **[[Beállítások]] → [[Beállítások#Fájlok és hivatkozások|Fájlok és hivatkozások]] → [[Beállítások#Új jegyzetek alapértelmezett helye|Új jegyzetek alapértelmezett helye]]** menüpontban módosíthatja.

Új jegyzet létrehozása egy adott mappában:

1. Kattintson jobb gombbal a mappára, majd válassza az **Új jegyzet** lehetőséget.
2. Írja be a jegyzet nevét, majd nyomja meg az `Enter` billentyűt.

## Új mappa létrehozása

Új mappa létrehozása a széf gyökérkönyvtárában:

1. Válassza az **Új mappa** ![[lucide-folder-plus.svg#icon]] lehetőséget a Fájlkezelő tetején.
2. Írja be a mappa nevét, majd nyomja meg az `Enter` billentyűt.

Almappa létrehozása:

1. Kattintson jobb gombbal arra a mappára, amelyben az almappát létre szeretné hozni, majd válassza az **Új mappa** lehetőséget.
2. Írja be a mappa nevét, majd nyomja meg az `Enter` billentyűt.

## Rendezés módosítása

A fájlok rendezési sorrendjének módosítása:

1.  Válassza a **Rendezés módosítása** ![[lucide-arrow-up-narrow-wide.svg#icon]] lehetőséget a Fájlkezelő tetején.
2. Válassza ki, hogyan szeretné rendezni a fájlokat. Rendezheti növekvő vagy csökkenő sorrendben fájlnév, módosítás ideje vagy létrehozás ideje szerint.

## Aktív fájl automatikus megjelenítése

Amikor megnyit egy jegyzetet, a Fájlkezelő automatikusan odagörgethet és kiemelheti azt a jegyzetet a mappaszerkezetben. Ez segít nyomon követni, hogy az aktív jegyzet hol található a széfben.

Az automatikus megjelenítés be- és kikapcsolása:

- Válassza az **Aktív fájl automatikus megjelenítése** ![[lucide-gallery-vertical.svg#icon]] lehetőséget a Fájlkezelő tetején.

Ha engedélyezve van, a Fájlkezelő automatikusan követi és megjeleníti az aktív jegyzetet.

## Összes mappa kibontása vagy összecsukása

A Fájlkezelőben egyszerre kibonthatja vagy összecsukhatja az összes mappát.

Összes mappa kibontása:

- Válassza a **Mindet kinyit** ![[lucide-chevrons-up-down.svg#icon]] lehetőséget a Fájlkezelő tetején.

Összes mappa összecsukása:

- Válassza az **Összes összecsukása** ![[lucide-chevrons-down-up.svg#icon]] lehetőséget a Fájlkezelő tetején.

## Fájl vagy mappa törlése

1. Kattintson jobb gombbal a törölni kívánt fájlra, majd válassza a **Törlés** lehetőséget.
2. Ha a rendszer megerősítést kér a fájl törléséhez, válassza a **Törlés** lehetőséget.

További információért lásd: [[Jegyzetek kezelése#Jegyzet törlése|Jegyzet törlése]].

## Fájl vagy mappa átnevezése

1. Kattintson jobb gombbal az átnevezni kívánt fájlra, majd válassza az **Átnevezés** lehetőséget.
2. Írja be az új nevet, majd nyomja meg az `Enter` billentyűt.

További információért lásd: [[Jegyzetek kezelése#Jegyzet átnevezése|Jegyzet átnevezése]].

## Fájl vagy mappa áthelyezése

Fájl vagy mappa áthelyezéséhez használhatja a fogd és vidd módszert vagy a helyi menüt.

**Fogd és vidd:**

- Húzza a fájlt vagy mappát abba a mappába, ahová át szeretné helyezni.
- Az `Alt-Kattintás` (Windows/Linux) vagy `Opt-Kattintás` (macOS) billentyűkombinációval több különálló fájlt is kijelölhet, és áthúzhatja őket egy másik mappába. Ha egymás után következnek, használhatja a `Shift-Kattintás` billentyűkombinációt.

**Helyi menü:**

1. Kattintson jobb gombbal egy fájlra, majd válassza a **Fájl áthelyezése ide...** lehetőséget.
2. Keresse meg annak a mappának a nevét, ahová a fájlt át szeretné helyezni, majd válassza ki a listából.

## Helyi menü használata

A helyi menü felsorolja a fájlokhoz vagy mappákhoz elérhető műveleteket. A fájlokra vonatkozó elemek közül sok megjelenik a [[További lehetőségek menü]]-ben is.

### Asztali verzió

Kattintson jobb gombbal egy fájlra vagy mappára a Fájlkezelőben.

**Fájlok**

- **Megnyitás új lapon** és **Megnyitás jobbra** – megnyitja a fájlt új lapon vagy a jobb oldali panelben.
- **Megnyitás új ablakban** – megnyitja a fájlt saját ablakban. Lásd: [[Kiugró ablakok]].
- **Duplikálás** – másolatot készít a fájlról.
- **Fájl áthelyezése ide...** – áthelyezi a fájlt egy másik mappába. Lásd: [[#Fájl vagy mappa áthelyezése]].
- **Könyvjelző...** – hozzáadja a fájlt a könyvjelzőkhöz. A Könyvjelzők bővítmény szükséges hozzá. Lásd: [[Könyvjelzők#Könyvjelző hozzáadása]].
- **Teljes fájl egyesítése...** – egyesíti a jegyzetet egy másikkal. A Jegyzet-szerkesztő bővítmény szükséges hozzá. Lásd: [[Jegyzet-szerkesztő#Jegyzetek egyesítése]].
- **Aktuális fájl publikálása** – publikálja a jegyzetet a webhelyére. Az Obsidian Publish szükséges hozzá. Lásd: [[Bevezetés az Obsidian Publish-be|Publish]].
- **Útvonal másolása** – másolja a fájl helyét Obsidian URL-ként, a széf mappájából vagy a rendszer gyökerétől.
- **Verziótörténet megnyitása** – megjeleníti a fájl korábbi verzióit. Aktív Obsidian Sync előfizetés szükséges hozzá. Lásd: [[Verziótörténet]].
- **Megnyitás az alapértelmezett alkalmazásban** – megnyitja a fájlt abban az alkalmazásban, amelyet a számítógépe az adott fájltípushoz használ.
- **Megjelenítés a fájlrendszerben** – megjeleníti a fájlt a fájlkezelőben. macOS-en a menüpont neve **Megjelenítés a Finder-ben**. Windows-on és Linuxon **Megjelenítés mappában**.
- **Átnevezés...** – megváltoztatja a fájlnevet. Lásd: [[#Fájl vagy mappa átnevezése]].
- **Törlés** – törli a fájlt. Lásd: [[#Fájl vagy mappa törlése]].

**Mappák**

- **Új jegyzet** és **Új mappa** – jegyzetet vagy mappát hoz létre a mappán belül. Lásd: [[#Új jegyzet létrehozása]] és [[#Új mappa létrehozása]].
- **Új vászon** – vásznat hoz létre a mappában. Lásd: [[Vászon]].
- **Új bázis** – bázist hoz létre a mappában. Lásd: [[Bevezetés a Bázisokba]].
- **Duplikálás** – másolatot készít a mappáról.
- **Mappa áthelyezése ide...** – áthelyezi a mappát egy másik mappába.
- **Keresés a mappában** – csak a mappában lévő fájlokban keres. Lásd: [[Keresés]].
- **Könyvjelző...** – hozzáadja a mappát a könyvjelzőkhöz.
- **Útvonal másolása** – másolja a mappa helyét a széf mappájából vagy a rendszer gyökerétől.
- **Megjelenítés a fájlrendszerben** – megjeleníti a mappát a fájlkezelőben, ugyanúgy, mint a fájloknál.
- **Átnevezés...** és **Törlés** – megváltoztatja a mappa nevét vagy törli a mappát.

### Mobil

Nyomja meg és tartsa lenyomva a mappát a Fájlkezelőben. A menü ugyanazokat az elemeket tartalmazza, mint az asztali mappa menü, kivéve a **Könyvjelző...** és a **Megjelenítés a fájlrendszerben** lehetőségeket.
