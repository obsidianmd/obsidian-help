---
permalink: sync/settings
publish: true
mobile: true
description: 'Ez az oldal a Sync beállításait ismerteti, és útmutatást nyújt a szinkronizálandó fájlok kiválasztásához.'
---
Amikor [[Csomagok és tárhelykorlátok#Új távoli trezor létrehozása|létrehozol egy távoli trezort]] és [[Az Obsidian Sync beállítása#Csatlakozás távoli trezorhoz|csatlakozol hozzá]], a Sync alap bővítmény lesz a távoli trezor kezelésének központja.

## Sync beállítások

**Távoli trezor**
Ez a szakasz a jelenleg csatlakoztatott távoli trezort mutatja. Tartalmaz egy **Kapcsolat megszakítása** gombot a távoli trezorról való lecsatlakozáshoz, és egy **Kezelés** gombot az összes távoli trezor megtekintéséhez, amelyekhez a fiókod hozzáféréssel rendelkezik (beleértve a megosztott trezorokat az [[Együttműködés megosztott széfen|együttműködésen]] keresztül).

> [!warning]+ Távoli trezor külső féltől származó szinkronizációs szolgáltatásban
> Ha a távoli trezor egy külső féltől származó szinkronizációs szolgáltatásban található, egy piros hibaüzenet jelenik meg. Kövesd a [[Váltás az Obsidian Sync-re]] lépéseit a probléma megoldásához.

**Szinkronizálás állapota**
A távoli trezor aktuális szinkronizálási állapotát jeleníti meg. Ez a szakasz az állapottól függően egy **Szüneteltetés** vagy **Folytatás** gombot tartalmaz.

**Eszköz neve**
Adj egyedi nevet a jelenleg szinkronizáló eszköznek. Ez segít nyomon követni a tevékenységet a [[Állapotikon és üzenetek#Szinkronizálási tevékenység napló|szinkronizálási naplóban]]. Ez a beállítás eszközspecifikus, akárcsak a [[#Szelektív szinkronizálás]].

**[[#Ütközések feloldása]]**
Válaszd ki, hogyan oldódjanak fel az ütközések, amikor egy fájlt több eszközön módosítasz. Ez a beállítás eszközspecifikus, akárcsak a [[#Szelektív szinkronizálás]].

**Törölt fájlok**
Tartalmaz egy gombot a törölt fájlok **Megtekintéséhez** vagy **Visszaállításához**. További részletekért lásd: [[Verziótörténet]].

**A széf mérete**
Egy folyamatjelző sávot jelenít meg, amely megmutatja, mennyi szinkronizálási tárhelyet használsz.

> [!tip]- Szerver feldolgozási idő
> A szerver oldali feldolgozás miatt akár 30 percbe is telhet, amíg az aktuális használat frissül.

**Kapcsolatfelvétel a támogatással**
Útmutatást nyújt az [[Súgó és támogatás#Kapcsolatfelvétel az Obsidian támogatással|Obsidian támogatással való kapcsolatfelvételhez]], beleértve a **Hibakeresési infó másolása** és a **Támogatás megkeresése e-mailben** lehetőségeket.

### Ütközések feloldása

Válaszd ki, hogyan oldódjanak fel az ütközések, amikor egy fájlt több eszközön módosítasz szinkronizálás előtt. Választhatsz a módosítások automatikus összevonása vagy külön ütközésfájlok létrehozása között a manuális áttekintéshez. Lásd az [[Obsidian Sync hibaelhárítás#Ütközések feloldása|Ütközések feloldása]] részt az ütközések működéséről és a beállítás konfigurálásáról.

> [!warning]+ Konfiguráld minden eszközön
> Ezt a beállítást minden eszközön külön kell konfigurálni.

---

A Sync alap bővítmény beállításaiban azt is kiválaszthatod, mit szinkronizálj. Ez a szakasz a **szelektív szinkronizálást** és a **széfkonfiguráció szinkronizálását** tárgyalja, a hozzájuk tartozó megkötésekkel együtt.

## Szelektív szinkronizálás

A [[Helyi és távoli széfek|távoli trezorba]] szinkronizált fájlok beleszámítanak a [[Gyakran ismételt kérdések#Mekkora lehet egy távoli trezor|tárhelykorlátba]]. Alapértelmezés szerint az Obsidian Sync a **szelektív szinkronizálást** aktiválja a következő fájltípusokhoz:
- Képek
- Hangfájlok
- Videók
- PDF-ek

További fájltípusok szinkronizálásához kapcsold be az `Egyéb típusok szinkronizálása` opciót.

Az alapértelmezett **széfkonfiguráció szinkronizálási** beállítások a következők:
- Egyéb fájltípusok
- Fő beállítások
- Megjelenés
- Témák és kódrészletek
- Gyorsbillentyűk
- Aktív alap bővítmények
- Alap bővítmények beállításai

A közösségi bővítmények szinkronizálásához manuálisan engedélyezd az **Aktív közösségi bővítmények** és a **Telepített közösségi bővítmények listája** opciókat.

### A szinkronizálni kívánt fájltípusok módosítása

1. Nyisd meg a **[[Beállítások]] → Sync** menüt.
2. A **Szelektív szinkronizálás** alatt engedélyezd a szinkronizálni kívánt fájltípusokat.
3. Indítsd újra az alkalmazást az új beállítások alkalmazásához. Mobilon vagy tableten ehhez kényszerített leállítás szükséges lehet.

Vedd figyelembe, hogy a [[Csomagok és tárhelykorlátok|Sync csomagod]] meghatározza a szinkronizálható maximális fájlméretet. A Standard csomag legfeljebb 5 MB méretű fájlok szinkronizálását teszi lehetővé, míg a Plus csomag akár 200 MB-os fájlokat is támogat.

> [!info]+ A kizárt fájlok a távoli trezorban maradnak
> Egy fájl **Kizárt fájlok** listájához való hozzáadása nem távolítja el azt a távoli trezorból, ha már szinkronizálva lett. A felesleges tárhelyhasználat elkerülése érdekében a szinkronizálás előtt konfiguráld a Sync beállításokat.

### Mappa kizárása a szinkronizálásból

Alapértelmezés szerint az Obsidian a széfedben lévő összes fájlt és mappát szinkronizálja. Egy adott mappa szinkronizálásból való kizárásához:
1. Nyisd meg a **[[Beállítások]] → Sync** menüt.
2. A **Kizárt mappák** mellett válaszd a **Kezelés** lehetőséget.
3. Válaszd ki a listából a kizárni kívánt mappát.
4. Válaszd a **Kész** lehetőséget.

Egy mappa kizárási listáról való eltávolításához kattints a mappa neve melletti ![[lucide-x.svg#icon]] gombra.

#### Mindig kizárt a szinkronizálásból

##### Fájl-visszaállítási pillanatfelvételek

A [[Fájl-visszaállítás]] bővítmény pillanatfelvételei nem szinkronizálódnak az Obsidian Sync-en keresztül, mivel a pillanatfelvételeket a [[Hogyan tárolja az Obsidian az adatokat#Globális beállítások|Globális beállítások]] tárolják.

##### Rejtett fájlok és mappák

A `.` karakterrel kezdődő fájlok és mappák rejtettnek minősülnek, és ki vannak zárva a szinkronizálásból. Az egyetlen kivétel a széf [[Konfigurációs mappa|konfigurációs mappája]] (`.obsidian`), amely szinkronizálódik.

Gyakori példák nem szinkronizált rejtett fájlokra és mappákra:
- `.vscode`
- `.git`
- `.idea`
- `.gitignore`

##### Sync beállítások

A Sync beállítások nem szinkronizálódnak az eszközök között. Minden eszközön külön kell konfigurálnod őket szükség szerint.

## A szinkronizált széf beállításainak frissítése

A szinkronizálási beállítások több eszközön történő módosításához kövesd az alábbi lépéseket:

> [!tip]- Elsődleges és másodlagos eszközök
> Az „elsődleges" és „másodlagos" eszköz kifejezések csak a könnyebb érthetőség kedvéért használatosak. A Sync nem tesz különbséget közöttük.

### Elsődleges eszköz

Az elsődleges eszköz az igazság forrásaként szolgál. Az itt végzett módosítások szinkronizálódnak az összes többi eszközre.

1. Lépj a **[[Beállítások]] → Sync** menübe.
2. Aktiváld a kívánt beállításokat a **Széfkonfiguráció szinkronizálása** alatt.
3. Töltsd újra vagy indítsd újra az Obsidiant. Mobilon vagy tableten kényszerített leállítás szükséges lehet.
4. Várj, amíg a beállítások szinkronizálódnak a távoli trezorral.

### Másodlagos eszköz(ök)

A másodlagos eszközök (például a telefonod) az elsődleges eszköztől kapják a frissítéseket.

1. Lépj a **[[Beállítások]] → Sync** menübe.
2. Engedélyezd a szükséges beállításokat a **Széfkonfiguráció szinkronizálása** alatt.
3. Várd meg, amíg a változások letöltődnek a távoli trezorból.
4. Töltsd újra vagy indítsd újra az alkalmazást a szinkronizált beállítások alkalmazásához. Mobilon vagy tableten kényszerített leállítás szükséges lehet.

### Beállítások újratöltése

Bizonyos beállítások menet közben újratölthetők, míg mások újraindítást igényelnek:

- **Menet közben újratölthető**: A legtöbb Obsidian konfiguráció, beleértve a gyorsbillentyűket és tulajdonságokat, a megjelenési beállításokat, és a már engedélyezett alap bővítmények konfigurációit.
- **Újraindítást igényel**: CSS módosítások (pl. [[CSS kódrészletek]], [[Témák]]), gráf nézet konfigurációk és alap bővítmények állapotai (pl. a Napi jegyzetek engedélyezése/letiltása).

A közösségi bővítmények általában nem támogatják a menet közbeni újratöltést, és újraindítást igényelnek az új beállítások alkalmazásakor.

> [!info]+ Bővítményfejlesztőknek
> Ismerd meg, hogyan [integrálhatod a menet közbeni újratöltés funkcionalitást az Obsidian Sync-kel](https://docs.obsidian.md/Reference/TypeScript+API/Plugin/onExternalSettingsChange).

## Beállítási profilok

Az Obsidian Sync több [[Konfigurációs mappa|konfigurációs mappát]] is képes szinkronizálni ugyanahhoz a távoli trezorhoz, lehetővé téve külön profilok létrehozását (pl. egyet mobilra, másikat a laptopodra).

### Beállítási profil létrehozása

Új beállítási profil létrehozásához:

1. Nyisd meg a **[[Beállítások]] → Fájlok és hivatkozások** menüt.
2. A **Konfigurációs mappa felülbírálása** alatt adj meg egy nevet a profilodnak, ponttal (`.`) kezdve, pl. `.obsidian-mobile`.
3. Indítsd újra az Obsidiant a változások alkalmazásához.

> [!info]+ Bővítmények és témák újbóli letöltésének elkerülése
> A beállítási profil megváltoztatása a szinkronizálási beállítások újrakonfigurálását igényli. A bővítmények és témák újbóli letöltésének elkerülése érdekében másold a meglévő `.obsidian` mappádat, és nevezd át az új profilodnak megfelelően (pl. `.obsidian-mobile`) a módosítások elvégzése előtt.
