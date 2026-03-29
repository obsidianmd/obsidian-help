---
permalink: sync/troubleshoot
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Ez az oldal az Obsidian Sync használata során előforduló ritka problémákat és azok megoldásait sorolja fel.
---
Ez az oldal az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync]] használata során esetlegesen felmerülő ritka problémákat és azok megoldását ismerteti. Mielőtt továbblépne, javasoljuk, hogy tekintse át az [[Állapotikon és üzenetek]] és a [[Gyakran ismételt kérdések]] oldalakat.

## Általános

### Ütközések feloldása

Ütközés akkor történik, amikor ugyanazt a fájlt két vagy több eszközön módosítja, mielőtt azok szinkronizálódnának. Például szerkeszt egy jegyzetet a számítógépén. Mielőtt a változás feltöltődne, ugyanazt a jegyzetet a telefonján is módosítja.

Az ütközések gyakrabban fordulnak elő, ha offline dolgozik. Több változás halmozódik fel, és hosszabb idő telik el a szinkronizálások között, ami növeli az ütközések esélyét.

#### Hogyan kezeli az ütközéseket az Obsidian Sync

Amikor az Obsidian Sync ütközést észlel, az eredmény a fájltípustól függ:

- **Markdown fájlok**: Az Obsidian Sync a Google [diff-match-patch](https://github.com/google/diff-match-patch) algoritmusával vonja össze a módosításokat.
- **Egyéb fájltípusok**: Minden más fájl esetén, beleértve a vásznakat is, az Obsidian az „utolsó módosítás nyer" megközelítést alkalmazza. A legutóbb módosított verzió felülírja a korábbi verziókat.

Az Obsidian beállításokban – például a bővítménybeállításokban – fellépő ütközések esetén az Obsidian Sync összevonja a JSON-fájlokat. A helyi JSON kulcsait a távoli JSON fölé alkalmazza.

#### Ütközésfeloldási lehetőségek

Az Obsidian 1.9.7-es verziójától kezdve kiválaszthatja, hogyan kezelje az ütközéseket. A beállítás konfigurálása:

1. Nyissa meg a **[[Beállítások]]** menüt.
2. Az oldalsávon válassza a **Sync** lehetőséget.
3. Az **[[Sync beállítások és szelektív szinkronizálás#Ütközések feloldása|Ütközések feloldása]]** alatt válassza ki a kívánt opciót:
   - **Automatikus összevonás** (alapértelmezett): Az Obsidian Sync egyetlen fájlba kombinálja a különböző eszközökről érkező összes módosítást. Ez megőrzi az összes szerkesztést, de néha duplikált szöveget vagy formázási problémákat okozhat. Ezeket kézzel kell javítania.
   - **Ütközési fájl létrehozása**: Amikor az Obsidian ütköző módosításokat talál, az automatikus összevonás helyett külön ütközési fájlt hoz létre. Ezután áttekintheti mindkét verziót, és saját maga vonhatja össze azokat. Ez teljes kontrollt biztosít a végeredmény felett.

> [!warning]+ Konfigurálja minden eszközön
> Az ütközésfeloldási beállítások eszközspecifikusak. A kívánt opciót minden eszközén be kell állítania. Ez biztosítja az egységes viselkedést az összes szinkronizált eszközön.

**Ütközési fájl elnevezési mintája**

Ha az „Ütközési fájl létrehozása" opciót használja, az Obsidian a következő elnevezési mintával hoz létre új fájlt:

```
eredeti-jegyzet-neve (Conflicted copy eszköznév ÉÉÉÉHHNNÓÓPP).md
```

Például, ha egy `Megbeszélés jegyzetei.md` nevű jegyzetben lép fel ütközés, az ütközési fájl neve a következő lehet:

```
Megbeszélés jegyzetei (Conflicted copy MyMacBook2 202411281430).md
```

Az ütközési fájl tartalmazza azon eszköz módosításait, amelyen az ütközést észlelték. Az eredeti fájl megtartja a távoli verziót. Összehasonlíthatja mindkét fájlt, és kézzel vonhatja össze a tartalmat.

> [!info]+ Ellenőrizze a Sync naplót
> Az ütközések előfordulásának ellenőrzéséhez nyissa meg a [[Állapotikon és üzenetek#Szinkronizálási tevékenység|Sync naplót]]. Szűrjön az „Merge Conflicts" kifejezésre, vagy keressen rá a „Conflict" szóra.

### A Sync törölte a jegyzetemet, amit épp két eszközön hoztam létre

Az Obsidian Sync általában az [[#Ütközések feloldása|ütközések feloldásával]] próbálja összevonni az eszközök közötti ütköző jegyzeteket. Azonban problémák léphetnek fel azon felhasználóknál, akik indításkor automatikusan hoznak létre vagy módosítanak jegyzeteket. Ide tartoznak a [[Napi jegyzetek]] vagy a [Templater](https://github.com/SilentVoid13/Templater) közösségi bővítmény használata.

Ha az egyik eszközön helyben létrehoz egy jegyzetet, és pár percen belül a Sync letölti ugyanannak a jegyzetnek a távoli verzióját, a Sync a távoli verziót tartja meg a kettő összevonása nélkül. Ebben az esetben a helyi verziót a [[Fájl-visszaállítás]] segítségével állíthatja helyre.

### A Sync nem szinkronizálja a bővítményeimet és a beállítások frissítéseit

Az Obsidian [[Gyakran ismételt kérdések#Az Obsidian Sync élőben újratölti a beállításaimat?|nem tölti újra élőben az összes beállítást]]. A beállítások vagy bővítmények frissítése után újra kell indítania az Obsidiant a többi eszközön a változások megjelenéséhez. Mobileszközökön szükség lehet az alkalmazás kényszerített bezárására.

> [!example]- Téma módosítása
> - Az elsődleges eszközén (általában számítógép) visszaállítja a témát az alapértelmezettre egy egyéni témáról.
> - A Sync napló megerősíti, hogy a frissített fájlok elküldésre kerültek a távoli trezorba, de a mobileszközén továbbra is az egyéni téma jelenik meg.
> - A mobileszközön ellenőrizze a Sync naplót, hogy megbizonyosodjon a frissített `appearance.json` fájl fogadásáról.
> - Töltse újra vagy indítsa újra az Obsidiant a mobileszközön.
> - Az újratöltés vagy újraindítás után a mobileszköznek ugyanazt a témát kell megjelenítenie, mint a számítógépén.

### A fájljaim folyamatosan eltűnnek a Sync-ből, amint visszaállítom őket

Ez a probléma leggyakrabban Windowson fordul elő. A Windows Defender karanténba helyezheti a kódblokkokat tartalmazó fájlokat, ami miatt bizonyos jegyzetek eltűnnek.

Egy másik gyakori ok a dupla szinkronizálás. Ez akkor történik, amikor az Obsidian Sync egy másik szinkronizálási szolgáltatással párhuzamosan fut.

![[Váltás az Obsidian Sync-re#Széf áthelyezése a külső féltől származó szinkronizációs szolgáltatásból vagy felhőtárolóból]]

---

Végül ez akkor is előfordulhat, amikor visszaállít egy fájlt az egyik eszközön, de az egy másodlagos eszközről törlődik. Ez akkor történik, amikor a fájlnév [[Állapotikon és üzenetek#Kihagyottak|tiltott karaktereket]] tartalmaz.

## Android

**Az eszközöm törli a Sync-en keresztül kapott mellékleteimet**

Ez a probléma valószínűleg a Google vagy az Android Fotók alkalmazás miatt merül fel, amely kezeli a mellékleteket. Annak megakadályozásához, hogy a rendszer módosítsa a Sync-en keresztül kapott fájlokat, adjon hozzá egy `.nomedia` [fájlt a széfjéhez](https://support.google.com/android/thread/60342076/what-are-these-nomedia-files?hl=en) az Android eszközén.

> [!tip]- Használjon bővítményt
> Az [Android Nomedia](https://obsidian.md/plugins?id=android-nomedia) közösségi bővítmény megkönnyíti ezt. Telepítse az Android telefonjára. Vegye figyelembe, hogy a `.nomedia` fájlok nem szinkronizálódnak az eszközök között az Obsidian Sync-en keresztül.
