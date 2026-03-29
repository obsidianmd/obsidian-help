---
permalink: sync/faq
publish: true
mobile: true
description: Ez az oldal az Obsidian Sync kérdéseivel és korlátozásaival kapcsolatos gyakori kérdéseket sorolja fel.
---
Ez az oldal néhány gyakori kérdést és korlátozást sorol fel az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync]] kapcsán.

## Általános

### Milyen operációs rendszereket támogat az Obsidian Sync?

Az Obsidian Sync minden platformot támogat, amelyen az Obsidian futtatható. Jelenleg ez a Windows, macOS, Linux, Android és iOS.

### Működik az Obsidian az Apple Lockdown Mode-jával?

Az Obsidian használható [Lockdown Mode-ban](https://support.apple.com/en-us/105120), amennyiben az Obsidian kivételként van hozzáadva.

### Milyen típusú adatok szinkronizálódnak?

Alapértelmezetten az Obsidian jegyzetei, képei és a [[Konfigurációs mappa]] szinkronizálódnak.

További szinkronizálási lehetőségeket adhat hozzá PDF-ekhez, hangfájlokhoz, videófájlokhoz és egyéb fájlokhoz a [[Sync beállítások és szelektív szinkronizálás]] menüben.

### Mennyi tárhelyem van?

A tárhelykorlát az Obsidian [[Csomagok és tárhelykorlátok#Csomagok|Sync csomagjától]] függ. A maximális tárhelyméret 100 GB. Ez a tárhelykorlát magában foglalja a [[Verziótörténet|verziótörténetet]] is.

A **Széf mérete** megtekinthető az Obsidian alkalmazásban a **[[Beállítások]] → Sync** menüpontban.

### Hány távoli trezort használhatok?

A távoli trezorok száma az Ön [[Csomagok és tárhelykorlátok#Csomagok|Sync csomagjától]] függ. A Standard csomag 1 trezort tartalmaz, a Plus csomag 10 trezort. Az Önnel megosztott széfek nem számítanak bele a trezorkorlátba.

### Mekkora lehet egy távoli trezor?

Nincs trezoronkénti korlát. A tárhelykorlát a fiókjához kötött, és az összes trezorjára vonatkozik.

### Hány emberrel oszthatok meg egy távoli trezort?

Egy [[Együttműködés megosztott széfen|távoli trezort]] legfeljebb 20 személlyel oszthat meg.

### Mekkora lehet egy fájl?

A maximális fájlméret az Ön [[Csomagok és tárhelykorlátok|Obsidian Sync csomagjától]] függ. A Standard csomag esetében a korlát 5 MB. A Plus csomag esetében a korlát fájlonként 200 MB.

### A háttérben szinkronizálódnak az adataim?

Nem, a fájlok csak akkor szinkronizálódnak, amikor az Obsidian fut.

### Az Obsidian Sync élőben újratölti a beállításaimat?

Az Obsidian Sync képes automatikusan újratölteni bizonyos beállításokat, de vannak korlátozások. További részletekért tekintse meg a [[Sync beállítások és szelektív szinkronizálás#Beállítások újratöltése|Beállítások újratöltése]] részt.

### Használhatok külső féltől származó szinkronizációs szolgáltatást az Obsidian Sync mellett?

Nem javasoljuk külső féltől származó szinkronizációs szolgáltatás használatát az Obsidian Sync mellett. Egy külső szolgáltatás és az Obsidian Sync együttes használata több eszközön konfliktusokhoz vezethet, ami duplikált vagy sérült fájlokat eredményezhet.

A felhőalapú tárolási szolgáltatások, mint a OneDrive és a Dropbox, kínálnak „Igény szerinti fájlok" vagy „Csak online fájlok" funkciókat, amelyek csak szükség esetén töltik le a fájlokat, és helyben eltávolítják őket a hely megtakarítása érdekében. Mivel azonban ezek a fájlok nem mindig érhetők el helyben, az Obsidian Sync töröltként értelmezi őket, ami a távoli trezorból való eltávolításukhoz vezet.

Ezen problémák elkerülése érdekében tiltsa le az igény szerinti letöltéseket, ha az Obsidian Sync-et olyan szolgáltatásokkal használja, mint a OneDrive vagy a Dropbox. Gondoskodnia kell arról, hogy a külső szolgáltatás beállításai úgy legyenek konfigurálva, hogy a fájlok mindig az eszközön maradjanak.

## Adatmegőrzés

Ezek az Obsidian adatmegőrzésével kapcsolatos gyakori kérdések. Részletesebb válaszokért tekintse meg a [[Obsidian Sync/Biztonság és adatvédelem|Biztonság és adatvédelem]] oldalt.

### Mennyi ideig őrzik meg a verziótörténetet?

A [[Verziótörténet]] az Ön [[Csomagok és tárhelykorlátok|Obsidian Sync csomagjától]] függ. A Standard csomag esetében a jegyzeteket 1 hónapig őrizzük meg. A Plus csomag esetében a jegyzeteket 12 hónapig őrizzük meg. Ezen időszak után a régebbi verziók törlődnek.

A [[Csatolmányok|csatolmányok]] régebbi verzióit két hétig tároljuk.

### Mennyi ideig őrzik meg az adataimat az előfizetés lejárta után?

Az adatokat a távoli trezorokban, beleértve a verziótörténetet is, egy hónapig megőrizzük az előfizetés lejárta után. Az eszközein lévő helyi széfeket ez nem érinti.

Amennyiben egy hónapon belül megújítja az előfizetést, ez nem befolyásolja a használatot. Ha egy hónap elteltével újítja meg, amikor a távoli trezorok már törlésre kerültek, [[Az Obsidian Sync beállítása|létrehozhat egy új távoli trezort]], és csatlakoztathatja a helyi széfjét.

### Megőrzik az adataimat, ha visszatérítést kérek az előfizetésre?

Nem. Az adatok azonnal törlődnek az Obsidian Sync szerverekről. A [[Helyi és távoli széfek|helyi széfben]] lévő adatokat ez nem érinti.
