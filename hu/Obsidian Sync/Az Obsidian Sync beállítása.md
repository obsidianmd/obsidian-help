---
permalink: sync/setup
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Megvásároltad az Obsidian Sync szolgáltatást, és készen állsz a kezdésre. Ez az útmutató segít beállítani és testre szabni az Obsidian Sync beállításait a mindennapi használathoz.'
---
Megvásárolta az Obsidian Sync-et, és készen áll a kezdésre. Ez az útmutató segít beállítani és finomhangolni az Obsidian Sync beállításait a mindennapi használathoz.

- **Új az Obsidian Sync használatában?** Lásd: [[#Az Obsidian Sync beállítása első alkalommal]]
- **Második eszközt csatlakoztat?** Lásd: [[#Távoli széf szinkronizálása másik eszközön]]
- **Módosításokat kell végrehajtania?** Lásd: [[#Távoli széfek kezelése]]

## Az Obsidian Sync beállítása első alkalommal

Ebben a részben egy új [[Helyi és távoli széfek|távoli széfet]] hoz létre, és egy meglévő helyi széfhez csatlakoztatja. Ehhez nem kell új, üres helyi széfet létrehoznia.

> [!info] A jelenlegi széfje iCloud, OneDrive, Dropbox vagy más szinkronizálási mappában van? Ha **igen**, vagy **nem biztos benne**, kérjük, olvassa el [[Gyakran ismételt kérdések#Használhatok külső féltől származó szinkronizációs szolgáltatást az Obsidian Sync mellett?|ezt]] és a [[Váltás az Obsidian Sync-re]] oldalt, mielőtt továbblépne.

**Előfeltételek**

- Egy Obsidian-fiók. Ha még nincs, [regisztráljon most](https://obsidian.md/auth?returnto=%2Faccount%2Fsync#signup).
- Aktív Obsidian Sync [[Csomagok és tárhelykorlátok|előfizetés]]. Ha még nincs, előfizethet a [fiókja kezelőfelületéről](https://obsidian.md/account/sync).
- **Ajánlott**: Egy [[Obsidian fájlok biztonsági mentése|biztonsági mentési rendszer]] az Obsidian fájljaihoz. A szinkronizálási szolgáltatás nem biztonsági mentés.

### Bejelentkezés az Obsidian-fiókjával

1. Nyissa meg a **[[Beállítások]]** menüt.
2. Az oldalsávban válassza az **Általános** lehetőséget.
3. A **Fiók → Saját fiók** alatt válassza a **Bejelentkezés** lehetőséget.
4. Az **E-mail** mezőbe írja be az e-mail címét.
5. A **Jelszó** mezőbe írja be a jelszavát.
6. Válassza a **Bejelentkezés** lehetőséget.

### Az Obsidian Sync engedélyezése

1. Nyissa meg a **[[Beállítások]]** menüt.
2. Az oldalsávban a **Beállítások** alatt válassza az **Alap bővítmények** lehetőséget.
3. Kapcsolja be a **Sync** bővítményt.

### Új távoli széf létrehozása

1. Nyissa meg a **[[Beállítások]]** menüt.
2. Az oldalsávban válassza a **Sync** lehetőséget.
3. A **Távoli széf** mellett válassza a **Kiválasztás** lehetőséget.
4. Válassza az **Új széf létrehozása** lehetőséget.
5. A **Tárhely neve** mezőbe írja be a távoli széf nevét.
6. A **Régió** mezőben válassza ki a szerver [[Az Obsidian Sync beállítása#Regionális szinkronizálási szerverek|régióját]] a távoli széfhez.
7. A **Titkosítási jelszó** mezőben válasszon jelszót a széfhez. Ezzel végpontok közötti titkosítású széfet hoz létre. A széf jelszava elkülönül az Obsidian-fiók jelszavától, és minden széfnél más lehet. További információkért lásd: [[Biztonság és adatvédelem]].
8. Válassza a **Létrehozás** lehetőséget.

### Csatlakozás távoli széfhez

1. Válassza a **Csatlakozás** lehetőséget az újonnan létrehozott széf mellett.
2. Adja meg a széfhez beállított jelszót a **Titkosítási jelszó** mezőben, ha a [[Obsidian Sync/Biztonság és adatvédelem#Mit jelent a végpontok közötti titkosítás?|végpontok közötti titkosítást]] választotta.
3. Válassza a **Széf feloldása** lehetőséget.
4. **Ne indítsa el még a szinkronizálást.** Ellenőrizze a szinkronizálási beállításokat az [[#Obsidian Sync beállítások módosítása|Obsidian Sync beállítások módosítása]] részben.
    - Ha azonnal el szeretné indítani a szinkronizálást, lépjen tovább a [[#Szinkronizálás indítása az Obsidian Sync-kel|Szinkronizálás indítása az Obsidian Sync-kel]] részre.
5. Ha még nem tette meg, zárja be vagy hagyja figyelmen kívül a felugró ablakot, amely a **Mappák kizárása** és **Szinkronizálás indítása** lehetőségekre kérdez rá. Lépjen tovább a következő lépésre.

#### Obsidian Sync beállítások módosítása

1. Navigáljon a **[[Beállítások]]** → **Sync** menüpontra, ha szükséges.
2. Ha még nem adott meg eszköznevet, adjon hozzá egyet, hogy a Sync naplók könnyebben olvashatók legyenek!
3. Kapcsolja be vagy ki a **Szelektív szinkronizálás** és **Széfkonfiguráció szinkronizálása** alatti beállításokat, hogy meghatározza, mely elemeket kell szinkronizálni a távoli széfre és onnan.
    - **Megjegyzés**: Ha nemrég lecsatlakozott egy távoli széfről, és alkalmazás újraindítása nélkül csatlakozik újra, egyes beállítások már be lehetnek kapcsolva.
4. Ha bármilyen beállítást módosít, indítsa újra teljesen az Obsidiant.
5. Az Obsidian újraindítása után térjen vissza a **[[Beállítások]]** → **Sync** menüpontra.

#### Szinkronizálás indítása az Obsidian Sync-kel

Ha a szinkronizálást a távoli széfhez való csatlakozás után kezdi, egy **Szinkronizálás indítása** gomb jelenik meg. Válassza ezt a gombot a szinkronizálás megkezdéséhez.

Ha a szinkronizálást az Obsidian Sync beállításainak módosítása és az alkalmazás újraindítása után kezdi, egy **Folytatás** gomb jelenik meg a Sync beállításaiban. Válassza ezt a gombot a szinkronizálás megkezdéséhez.

> [!done] Szinkronizálási állapot
> Amikor az Obsidian Sync befejezte a szinkronizálást, egy zöld kör pipa jellel ![[obsidian-icon-sync-synced.svg#icon]] jelenik meg a jobb alsó sarokban (asztali gépen) vagy a jobb oldalsávban (mobilon). A Sync napló szintén megjeleníti a "Fully Synced" üzenetet a legutóbbi üzenetek egyikeként.
>
> A szinkronizálási állapotokról további részletekért lásd: [[Állapotikon és üzenetek]].
^obsidian-sync-status

Ha más eszközöket szeretne csatlakoztatni az újonnan létrehozott és szinkronizált távoli széfhez, lépjen tovább a [[Az Obsidian Sync beállítása#Távoli széf szinkronizálása másik eszközön|Távoli széf szinkronizálása másik eszközön]] részre.

A beállításokról és fájlokról bővebben a [[Sync beállítások és szelektív szinkronizálás]] oldalon olvashat.

## Távoli széf szinkronizálása másik eszközön

Ebben a részben már létrehozott egy távoli széfet, és feltöltötte adatait. Most a többi eszközét szeretné csatlakoztatni hozzá.

**Előfeltételek**
- Egy Obsidian-fiók. Ha még nincs, [regisztráljon most](https://obsidian.md/account#mode=signup).
- Aktív Obsidian Sync előfizetés. Ha még nincs, előfizethet a [fiókja kezelőfelületéről](https://obsidian.md/account).
- A Sync engedélyezve az [[Alap bővítmények]] beállításaiban.
- Aktív távoli széf. Ha még nem hozott létre egyet, kérjük, először hozzon létre egy [[Az Obsidian Sync beállítása#Új távoli széf létrehozása|távoli széfet]].
- **Ajánlott**: Egy [[Obsidian fájlok biztonsági mentése|biztonsági mentési rendszer]] az Obsidian fájljaihoz a leggyakrabban használt eszközön. A szinkronizálási szolgáltatás nem biztonsági mentés.

### Széf szinkronizálása a széfváltóból

Ha frissen telepítette az Obsidiant, a program megnyitásakor a [[Széfek kezelése|széfváltó]] jelenik meg. Új helyi széf létrehozásához egy távoli széf tartalmából hajtsa végre az alábbi lépéseket.

1. Nyissa meg az Obsidiant (feltéve, hogy most nyitja meg először)
2. Válasszon az alábbi lehetőségek közül a telepítéstől függően:
	1. **Asztali gép**: A „Széf megnyitása Obsidian Sync-ből" részben válassza a **Beállítás** lehetőséget
	2. **Mobil/Táblagép**: **Obsidian Sync beállítása**
3. Jelentkezzen be az Obsidian felhasználói fiókjával
	1. Ha a [[Kétfaktoros hitelesítés|2FA]] be van állítva, adja meg a 2FA kódját.
4. A rendszer megkérdezi, melyik távoli széfet szeretné szinkronizálni erre az eszközre. Válassza a **Csatlakozás** lehetőséget.
5. A rendszer kéri, hogy válasszon nevet a helyi széfnek, amely az eszközön létrejön az adatok tárolására. Adja meg a kívánt nevet.
	1. Ha [[Obsidian URI]]-kat használ, érdemes ugyanazt a nevet használnia, mint a másik eszközén lévő helyi széfnek.
6. Válassza a **Létrehozás** lehetőséget.
7. A távoli széfek ablaka rövid időre megjelenik, amíg az Obsidian Sync csatlakozik a szerverhez és ellenőrzi az előfizetést. Ezután egy *Csatlakozás beállítása* ablak jelenik meg.
	1. Erősen ajánlott bezárni vagy lehúzni ezt az ablakot, és először [[#Obsidian Sync beállítások módosítása|módosítani az Obsidian Sync beállításait]].
	2. Ha bármilyen Sync beállítást módosít, kérjük, töltse újra vagy indítsa újra az Obsidiant.

### Széf szinkronizálása az Obsidian beállításaiból

Ha már létrehozott egy helyi széfet ezen az eszközön, és ezt a helyi széfet szeretné egy távoli széfhez csatlakoztatni, az utasítások nagyon hasonlóak az [[#Az Obsidian Sync beállítása első alkalommal]] részhez.

![[Az Obsidian Sync beállítása#Bejelentkezés az Obsidian-fiókjával]]

![[Az Obsidian Sync beállítása#Az Obsidian Sync engedélyezése]]

#### Csatlakozás távoli széfhez

1. Nyissa meg a **[[Beállítások]]** menüt.
2. Az oldalsávban válassza a **Sync** lehetőséget.
3. A **Távoli széf kiválasztása** mellett kattintson a **Kiválasztás** gombra.
4. Kattintson a **Csatlakozás** gombra a csatlakoztatni kívánt távoli széf mellett.
5. A **Titkosítási jelszó** mezőbe írja be a széf jelszavát, ha van.
6. A rendszer felkéri a szinkronizálás indítására. Ajánlott várni és először módosítani a szinkronizálási beállításokat. Ha a teljes széfet szinkronizálni szeretné az eszközre úgy, ahogy van, választhatja a **Szinkronizálás indítása** lehetőséget.

> [!warning] Ha az eszközön lévő széf már tartalmaz jegyzeteket (nem ajánlott), figyelmeztetést kap, hogy ezek a jegyzetek összevonásra kerülnek a továbblépés előtt. Az ütközések a [[Obsidian Sync hibaelhárítás#Ütközések feloldása|Sync ütközésfeloldásán]] keresztül kerülnek rendezésre.

![[Az Obsidian Sync beállítása#Obsidian Sync beállítások módosítása]]

![[Az Obsidian Sync beállítása#Szinkronizálás indítása az Obsidian Sync-kel]]

## Távoli széfek kezelése

Létrehozott és csatlakozott egy távoli széfhez. Lehet, hogy ezt a távoli széfet több eszközre is szinkronizálta. Ez a rész a távoli széf kezelésével kapcsolatos egyéb gyakori utasításokat tartalmazza.

### Lecsatlakozás a távoli széfről

1. Nyissa meg az Obsidian **[[Beállítások]]** menüjét.
2. Válassza a **Sync** lehetőséget az oldalsávban.
3. Kattintson a **Kapcsolat megszakítása** gombra a Távoli széfek mellett.

Most lecsatlakozott a távoli széfről, és ezen az eszközön többé nem szinkronizál.

### Távoli széf törlése

> [!tip] A távoli széf törlése nem törli a helyi adatait az eszközön.

1. Nyissa meg a **[[Beállítások]]** menüt.
2. Az oldalsávban válassza a **Sync** lehetőséget.
3. Válassza a **Kezelés** lehetőséget a Távoli széfek mellett. Megnyílik egy ablak a távoli széfek listájával.
4. Válassza a kuka ikont ![[lucide-trash-2.svg#icon]] a törölni kívánt távoli széf mellett.
5. Erősítse meg a törlést a piros **Törlés** gomb kiválasztásával.
6. A távoli széf törlésre került.

> [!info] Ha a kuka ikon nem látható, előfordulhat, hogy először le kell csatlakoznia a távoli széfről. A lecsatlakozás után válassza a **Kiválasztás** gombot a távoli széfek listájának megnyitásához.

### Regionális szinkronizálási szerverek

Az Obsidian Sync lehetővé teszi a távoli széf tárolási helyének kiválasztását. Ha az Obsidian `1.4.16`-os vagy régebbi verzióját használja, a helyet automatikusan választja ki a rendszer.

Ha nem biztos benne, hogy a jelenlegi széfje melyik régióban van, nézze meg a [[Obsidian Sync/Biztonság és adatvédelem#Hol találom a jelenlegi Sync szerveremet és hol van elhelyezve?|Hol találom a jelenlegi Sync szerveremet, és hol van elhelyezve?]] részt útmutatásért.

![[sync-regional-sync-servers.png#interface|300]]

A helyszín kiválasztása után az adatközpont **nem** helyezhető át másik szerverre az adatok újrafeltöltése nélkül. A régió megváltoztatásához kövesse a [[Sync régiók|Sync régiók útmutatót]].

![[Obsidian Sync/Biztonság és adatvédelem#^sync-geo-regions]]

## Következő lépések

Íme néhány ajánlott dokumentum, amelyet érdemes elolvasni.

- Tudjon meg többet a [[Sync beállítások és szelektív szinkronizálás|szinkronizálandó fájlok és beállítások kiválasztásáról]].
- Ismerje meg, mi történik, ha a távoli széf [[Verziótörténet|megtelik]].
- [[Együttműködés megosztott széfen]] egy másik Obsidian Sync felhasználóval.
- Nézze meg a [[Gyakran ismételt kérdések|Sync GYIK]] oldalt a gyakori kérdésekre adott válaszokért.
