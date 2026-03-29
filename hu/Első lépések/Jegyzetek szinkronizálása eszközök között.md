---
permalink: sync-notes
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Hogyan szinkronizálhatod Obsidian jegyzeteidet eszközök és platformok között.
---
Az Obsidian a jegyzeteket helyileg, az eszközödön tárolja, így mindig hozzáférsz hozzájuk, akár offline is. Ha több eszközön szeretnéd elérni a jegyzeteidet, be kell állítanod egy szinkronizálási módszert.

Ez az útmutató a gyakori szinkronizálási módszereket mutatja be, beleértve az adatvesztés elkerülésére és a zökkenőmentes működésre vonatkozó tippeket.

Javasoljuk továbbá, hogy olvasd el a [[Obsidian fájlok biztonsági mentése|biztonsági mentési útmutatónkat]] az adataid védelme érdekében.

## Szinkronizálási módszerek

Az Obsidian esetében az adataid egyszerűen fájlokként vannak tárolva egy [[Helyi és távoli széfek|széfnek]] nevezett mappában. Ez azt jelenti, hogy számos módon szinkronizálhatod az adataidat.

Íme néhány gyakran használt szinkronizálási módszer, amelyekről az [Obsidian közösség](https://obsidian.md/community) tagjai számoltak be:

1. **Saját szinkronizálás**: [[#Obsidian Sync]]
2. **Harmadik féltől származó felhőszinkronizálás**: [[#iCloud]], [[#OneDrive]] és [[#Google Drive]]
3. **Helyi szinkronizálás**: [[#Syncthing]]
4. **Verziókezelés**: [[#Git]] és [[#Working Copy]]

## Obsidian Sync

**Ajánlott rendszerek**: `Windows`, `macOS`, `Linux`, `iOS`, `Android`

A legegyszerűbb és hivatalosan támogatott szinkronizálási módszer a saját megoldásunk: az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync]].

Az Obsidian Sync szinkronizálja a széfeidet az összes eszközön egy távoli trezor segítségével, amely másolatot készít az adataidról. Egy helyi másolat mindig megmarad az eszközeiden.

Kövesd a [[Az Obsidian Sync beállítása|beállítási útmutatót]] az Obsidian Sync konfigurálásához.

## iCloud

**Ajánlott rendszerek**: `macOS`, `iOS`, `iPadOS`

Az iCloud használható széfek szinkronizálására iOS és macOS között. Azonban az **iCloud Drive Windows rendszeren** fájlduplikációhoz vagy sérüléshez vezethet.

**Hogyan hozd létre és tárold a széfedet az iCloud Drive-ban**:

- **iCloud Drive engedélyezése**:
    - macOS-en: Lépj a **Rendszerbeállítások → Apple ID → iCloud → iCloud Drive** menüpontra.
    - iOS-en: Lépj a **Beállítások → [A neved] → iCloud → iCloud Drive** menüpontra.
- **Új széf létrehozása az iCloudban**:
    - macOS-en:
        1. Nyisd meg az **Obsidian**t és válaszd az **Új széf létrehozása** lehetőséget.
        2. A fájlválasztóban navigálj az **iCloud Drive → Obsidian** mappába.
        3. Hozz létre egy mappát a széfednek és nevezd el.
        4. Válaszd a **Létrehozás** gombot a befejezéshez.
    - iOS-en:
        1. Nyisd meg az **Obsidian**t és koppints az **Új széf létrehozása** lehetőségre.
        2. Adj nevet a széfednek.
        3. Kapcsold be a **Tárolás az iCloudban** opciót.
        4. Koppints a **Létrehozás** gombra.
- **A széf megnyitása másik Apple eszközön**:
    - Egy másik macOS vagy iOS eszközön nyisd meg az **Obsidian**t, lépj a [[Széfek kezelése|Széfváltóba]] és válaszd a **Mappa megnyitása széfként** lehetőséget. Navigálj az **iCloud Drive → Obsidian** mappába.

> [!warning]+ iOS és iPadOS mappa helye
> Amikor iCloudot használsz mobileszközökön, győződj meg arról, hogy a széfed a megfelelő helyen van tárolva: `iCloud Drive/Obsidian/[A széfed neve]`.
> 
> A széfeknek az iCloud Drive-on belüli **Obsidian** mappában kell lenniük. A jobb oldali mappa az Obsidian ikonnal a helyes. Ne használd az alkalmazás ikon nélküli egyszerű mappát.
> 
> ![[iCloud-folder-location.png#interface]]
> 
> A széfed helyének ellenőrzéséhez nyisd meg a **Fájlok** alkalmazást, koppints a **Tallózás** lehetőségre, válaszd az **iCloud Drive**-ot a **Helyek** alatt, és győződj meg arról, hogy a széfed az **Obsidian** mappán belül van. Ha a széfed más helyen van, szinkronizálási problémákat tapasztalhatsz.

> [!tip] Bevált gyakorlatok
> - **macOS 14 (Sonoma) és korábbi** esetén: Tiltsd le a **Mac tárhely optimalizálása** opciót az iCloud beállításokban, hogy megakadályozd a fájlok kiszervezését. Ez a beállítás az eszköz teljes iCloud tárhelyére vonatkozik, nem csak az Obsidianre.
> - **macOS 15 (Sequoia)** esetén: Kattints jobb gombbal az **Obsidian** mappára az iCloud Drive-ban és válaszd a **Letöltve tartás** lehetőséget.

## OneDrive

**Ajánlott rendszerek**: `Windows`, `macOS` (korlátozott funkcionalitás Androidon)

A [OneDrive](https://support.microsoft.com/en-us/office/Sync-with-OneDrive-bb89981b-e382-4969-b8fd-d413a90b6db3#ID0EAABAAA=Set_up) népszerű felhőtárhely-megoldás Windows és macOS felhasználók számára. Azonban korlátai vannak Androidon, és nem hivatalosan támogatott Obsidian széfek szinkronizálásához iOS-en.

> [!info] Fájlok offline elérhetővé tétele
> Mielőtt a OneDrive-ot használnád szinkronizálásra, győződj meg arról, hogy a széf mappája **Mindig elérhető legyen ezen az eszközön** jelöléssel van ellátva. Ez megakadályozza, hogy a OneDrive kiszervezze a fájlokat, és az Obsidian azt higgye, hogy hiányoznak.

**Hogyan hozd létre és tárold a széfedet a OneDrive-ban**:

1. **OneDrive beállítása**:
   - Windowson: Jelentkezz be a OneDrive alkalmazáson vagy a Microsoft-fiókodon keresztül.
   - macOS-en: Töltsd le a OneDrive alkalmazást és jelentkezz be.
2. **Új széf létrehozása a OneDrive-ban**:
   - Windows/macOS-en:
     1. Nyisd meg a **Fájlkezelőt** (Windows) vagy a **Findert** (macOS) és navigálj a **OneDrive → Dokumentumok** mappába.
     2. Hozz létre egy új mappát (pl. \"Obsidian Vault\").
     3. Nyisd meg az **Obsidian**t, válaszd az **Új széf létrehozása** lehetőséget, és válaszd ki a OneDrive mappát.
3. **A széf megnyitása másik eszközön**:
   - Egy másik eszközön nyisd meg az **Obsidian**t, lépj a [[Széfek kezelése|Széfváltóba]] és válaszd a **Mappa megnyitása széfként** lehetőséget. Navigálj a **OneDrive → Dokumentumok** mappába.

> [!info] Android szinkronizálás
> A OneDrive nem feltétlenül működik jól az Android szinkronizáláshoz. Fontold meg olyan alkalmazások használatát, mint a [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) vagy a [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite).

> [!tip] Bevált gyakorlatok
> - Mindig tartsd a széf fájljait **Offline elérhetőként** a mappára jobb gombbal kattintva és a **Mindig elérhető legyen ezen az eszközön** lehetőséget választva.
> - Kerüld a OneDrive **Igény szerinti fájlok** funkciójának használatát a széfekhez a szinkronizálási problémák elkerülése érdekében.

## Google Drive

**Ajánlott rendszerek**: `Windows`, `macOS`, `Android` (korlátozott funkcionalitás iOS-en)

A [Google Drive](https://support.google.com/drive/answer/10838124?hl=en) egy másik népszerű felhőtárhely-megoldás. Bár hivatalosan nem támogatott Obsidian széfek szinkronizálásához, harmadik féltől származó alkalmazások és bővítmények segítségével szinkronizálhatsz az eszközök között.

> [!info] iOS támogatás
> A Google Drive hivatalosan nem támogatott Obsidian széfek szinkronizálásához iOS-en. Fontold meg harmadik féltől származó megoldás vagy bővítmény használatát az iOS szinkronizáláshoz.

**Hogyan hozd létre és tárold a széfedet a Google Drive-ban**:

1. **Google Drive beállítása**:
    - Windows vagy macOS rendszeren: Töltsd le a Google Drive alkalmazást és jelentkezz be.
    - Androidon: Győződj meg arról, hogy a Google Drive engedélyezve van és be vagy jelentkezve.
2. **Új széf létrehozása a Google Drive-ban**:
    - Windows/macOS-en:
        1. Nyisd meg a **Fájlkezelőt** (Windows) vagy a **Findert** (macOS) és navigálj a **Google Drive** mappába.
        2. Hozz létre egy új mappát (pl. \"Obsidian Vault\").
        3. Nyisd meg az **Obsidian**t, válaszd az **Új széf létrehozása** lehetőséget, és válaszd ki a Google Drive mappát.
3. **A széf megnyitása másik eszközön**:
    - Egy másik eszközön nyisd meg az **Obsidian**t, lépj a [[Széfek kezelése|Széfváltóba]] és válaszd a **Mappa megnyitása széfként** lehetőséget. Navigálj a Google Drive mappádba.

> [!tip] Bevált gyakorlatok
> - Állítsd a széf fájljait **Offline elérhetőre** a Google Drive-ban a kiszervezés miatti szinkronizálási problémák elkerülése érdekében.
> - iOS-en fontold meg alternatív módszerek használatát, mint az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync]], az [[#iCloud]], vagy használd a **Remotely Save** bővítményt.

## Syncthing

**Ajánlott rendszerek**: `Windows`, `macOS`, `Linux`

A Syncthing egy decentralizált fájlszinkronizálási eszköz, amely nem támaszkodik felhőtárhelyre. Közvetlenül szinkronizálja a széfedet az eszközök között a hálózaton vagy az interneten keresztül.

> [!info]+ Android támogatás
> A hivatalos Syncthing Android alkalmazás már nem karbantartott. Azonban egy közösségi fork, a [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) aktív fejlesztés alatt áll és használható Android eszközökön.

**Hogyan hozd létre és tárold a széfedet a Syncthing segítségével**:

1. **Syncthing beállítása**:
   - Telepítsd a Syncthinget minden eszközre. A telepítési útmutatókért látogasd meg a [Syncthing weboldalt](https://syncthing.net/).
   - Androidon telepítsd a [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) alkalmazást a GitHub kiadásokból vagy az F-Droidról.
2. **Megosztott mappa létrehozása és konfigurálása**:
   - Minden eszközön:
     1. Nyisd meg a Syncthinget és hozz létre egy megosztott mappát. Állítsd be a mappa útvonalát az Obsidian széfedre.
     2. Győződj meg arról, hogy ugyanaz a mappa van kiválasztva minden eszközön.
     3. Konfiguráld a mappa szinkronizálási beállításait (pl. **Küldés és fogadás** a kétirányú szinkronizáláshoz).
3. **A széf megnyitása az Obsidianban**:
   - Miután a mappa szinkronizálva van az eszközök között, nyisd meg az **Obsidian**t, lépj a [[Széfek kezelése|Széfváltóba]] és válaszd a **Mappa megnyitása széfként** lehetőséget.

> [!info] Eszköz elérhetőség
> A Syncthing akkor működik a legjobban, ha legalább egy eszköz mindig be van kapcsolva a folyamatos szinkronizálás biztosítása érdekében.

> [!tip] Bevált gyakorlatok
> - Helyi szinkronizáláshoz győződj meg arról, hogy minden eszköz ugyanahhoz a hálózathoz csatlakozik.
> - Zárd ki a `.obsidian` mappát a szinkronizálásból, ha különálló beállításokat szeretnél minden eszközön.
> - Használj kizárási mintákat az ideiglenes vagy biztonsági mentési fájlok szinkronizálásának elkerüléséhez.

## Git

**Ajánlott rendszerek**: `Windows`, `macOS`, `Linux`

A **Git** egy verziókezelő rendszer, amely lehetővé teszi a változások követését, az együttműködést másokkal, és a széfek szinkronizálását tárolókon keresztül, mint a GitHub, GitLab, vagy egy saját szerver.

**Hogyan szinkronizáld a széfedet a Git segítségével**:

1. **Távoli tároló beállítása**:
    - Hozz létre egy tárolót egy Git hosting platformon (pl. GitHub, GitLab, vagy saját szerver).
2. **Széfed szinkronizálása**:
    1. Nyiss meg egy terminált vagy Git GUI-t (pl. GitKraken, Sourcetree).
    2. Inicializálj egy Git tárolót a széf mappájában a `git init` paranccsal.
    3. Add hozzá a távoli tárolót: `git remote add origin [URL]`.
    4. Commitold a változtatásaidat: `git add .` és `git commit -m "Az üzeneted"`.
    5. Pushold a változtatásokat: `git push origin main`.
3. **Változtatások lehúzása más eszközökön**:
    - Klónozd a tárolót egy másik eszközön és húzd le a változtatásokat a `git pull origin main` paranccsal.

> [!info] Kézi szinkronizálás szükséges
> A Git erős verziókezelést biztosít, de a szinkronizálás nem automatikus. Manuálisan kell pusholnod és pullolnod a változtatásokat.

## iPhone és iPad szinkronizálás

**Ajánlott lehetőségek**:
- [[Bevezetés az Obsidian Sync használatába|Obsidian Sync]]
- [[#iCloud]]

> [!info] Kerüld a szinkronizálási szolgáltatások keverését
> Kerüld ugyanannak a széfnek a szinkronizálását több szolgáltatáson keresztül (pl. az Obsidian Sync és az iCloud egyidejű használata) az adatkonfliktusok vagy sérülések megelőzése érdekében.

**Nem támogatott lehetőségek**:
A következő szolgáltatások hivatalosan nem támogatottak iOS-en, de a felhasználók harmadik féltől származó eszközök vagy bővítmények segítségével találtak megoldásokat:

- Dropbox
- Google Drive
- OneDrive
- Syncthing

Egyes felhasználók sikeresen használtak bővítményeket, mint a **Remotely Save** vagy a **LiveSync** a széfek szinkronizálásához iOS-en. Azonban ezek a módszerek hivatalosan nem támogatottak, és az eredmények változhatnak.

### Working Copy

**Ajánlott rendszerek**: `iOS`
**Szükséges**: [[#Git]]

A **Working Copy** egy Git kliens iOS-re, amely lehetővé teszi a tárolók klónozását, commitolását és pusholását. Jól működik Obsidian széfek Git-en keresztüli szinkronizálásához, bár egyes funkciókhoz alkalmazáson belüli vásárlás szükséges.

**Hogyan szinkronizáld a széfedet a Working Copy segítségével**:

1. **Working Copy telepítése**:
    - Töltsd le a **[Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)** alkalmazást az iPhone-odra vagy iPadedre.
2. **Git tároló klónozása**:
    - Nyisd meg a Working Copy-t, koppints a **Tároló hozzáadása** lehetőségre, és add meg a tároló URL-jét (pl. GitHub, GitLab).
3. **Tároló összekapcsolása az Obsidiannal**:
    - Kapcsold össze a klónozott tároló mappáját egy üres széffel az **Obsidian**ban.
4. **Változtatások commitolása és pusholása**:
    - Miután szerkesztetted a jegyzeteket az Obsidianban, használd a Working Copy-t a változtatások **commitolásához** és **pusholásához** a távoli tárolóba.
    - Más eszközökön húzd le a változtatásokat a Git segítségével a széf szinkronizálásához.

> [!info] Közösségi használat
> Bár a Working Copy hivatalosan nem támogatott, sok felhasználó sikeresen használta széfek Git-tel történő szinkronizálásához.

## Gyakran ismételt kérdések

**Miért nem támogatott hivatalosan az általam preferált szinkronizálási szolgáltatás?**

Ellentétben néhány jegyzetelő alkalmazással, amelyek egyszerre csak egy fájlhoz férnek hozzá, az Obsidiannak szüksége van a teljes széfhez való hozzáférésre a funkcióihoz (pl. hivatkozások frissítése fájl átnevezésekor). Ez megnehezíti, hogy egyes szolgáltatások megbízhatóan működjenek az Obsidiannal.

**Miért kell a fájlokat „Offline elérhetővé" tennem?**

Ha az olyan szolgáltatások, mint a OneDrive vagy az iCloud kiszervezik a fájlokat (pl. az **Igény szerinti fájlok** vagy a **Mac tárhely optimalizálása** használatával), az Obsidian nem tud hozzáférni hozzájuk, ami szinkronizálási problémákat okoz. Jelöld meg a széf mappáját a **Mindig elérhető legyen ezen az eszközön** (OneDrive) opcióval, vagy győződj meg arról, hogy a **Letöltve tartás** engedélyezve van (iCloud).

**Hogyan kezelhetem a széfeim különböző konfigurációit?**

Az Obsidian lehetővé teszi a konfigurációs mappa eszközönkénti testreszabását a [[Konfigurációs mappa|konfigurációs mappák]] funkcióval.
