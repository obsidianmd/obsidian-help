---
permalink: sync/security
publish: true
mobile: false
description: Ismerd meg az Obsidian Sync biztonsági és adatvédelmi szempontjait.
---
## Titkosítás

Az Ön biztonsága érdekében az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync]] titkosítja az Ön [[Helyi és távoli széfek|távoli trezorját]] és az Obsidian szervereivel folytatott minden kommunikációt.

Amikor új távoli trezort hoz létre, két lehetőség közül választhat:

- **Végpontok közötti titkosítás (alapértelmezett)** — A legerősebb biztonsági szintet nyújtja, de szükséges hozzá, hogy Ön biztonságosan tárolja a titkosított jelszavát. Ez garantálja, hogy senki — még az Obsidian csapata sem — férhet hozzá a jegyzeteihez.
- **Általános titkosítás** — az Obsidian által kezelt titkosítási kulcsot használ az adatok védelméhez átvitel közben és a szerverünkön.

A végpontok közötti titkosítást ajánljuk minden felhasználónak, mivel ez a leginkább privát és biztonságos lehetőség. Azonban legyen tudatában annak, hogy ha elfelejti vagy elveszíti a titkosítási jelszavát, az adatai örökre titkosítottak és használhatatlanok maradnak. Nem tudjuk visszaállítani a jelszavát, sem a titkosított adatait.

A választása csak a távoli trezort érinti. Az Obsidian nem titkosítja a helyi széfjét.

### Mit jelent a végpontok közötti titkosítás?

A végpontok közötti titkosítás azt jelenti, hogy az adatok abban a pillanatban titkosítva lesznek, amint elhagyják az eszközét, és csak a titkosítási kulcsával fejthetők vissza, amikor visszaérnek az Ön valamelyik eszközére.

Nem tudjuk elolvasni az adatait. Ahogy a potenciális lehallgatók sem, például az internetszolgáltatója.

Egy teljes szerverfeltörés ritka esetében is az adatai titkosítottak maradnak — senki sem tudja visszafejteni a fájljait a jelszava ismerete nélkül.

### Milyen kockázatai vannak az általános titkosítás használatának?

Az általános titkosítás alapvetően kevésbé biztonságos, mint a végpontok közötti titkosítás, de kényelmes lehetőség lehet, ha nem várja el, hogy a szinkronizált adatai teljesen privátak legyenek. Például, ha a szinkronizált széfje [[Bevezetés az Obsidian Publish-be|publikálva]] van egy nyilvános weboldalon, mint ez a Súgó webhely, akkor a végpontok közötti titkosítás nem szükséges.

Az általános titkosítás ugyanaz a titkosítási módszer, amelyet a felhőalapú tárhelyszolgáltatók és a szoftver-mint-szolgáltatás platformok használnak, mint például a Google Docs, a Dropbox és az iCloud (Haladó adatvédelem nélkül). A titkosítási kulcsot az alkalmazás generálja, és az adatok védelméhez használja átvitel közben és a szerveren. Mivel a titkosítási kulcs a vállalat szerverein van tárolva, felhasználható az adatok visszafejtéséhez, pl. ha a vállalatot házkutatási paranccsal keresik meg, vagy ha Ön webböngészőn keresztül szeretné elérni az adatait.

A végpontok közötti titkosítás garantálja, hogy az Obsidian soha nem férhet hozzá az adataihoz, és mindig ezt kell használni a teljesen privát és biztonságos adatok szinkronizálásakor.

### Milyen titkosítást használnak?

Az adatbiztonság érdekében iparági szabványú titkosítási protokollokat alkalmazunk. Konkrétan az [AES-256](https://www.nist.gov/publications/advanced-encryption-standard-aes-0) titkosítást használjuk, amely a legerősebb titkosítási szabvány, széles körben alkalmazott olyan területeken, mint az online bankolás. A titkosítási folyamat a következő technikai részleteket tartalmazza:

- **Kulcslevezetési függvény:** [scrypt](https://en.wikipedia.org/wiki/Scrypt) sóval
- **Titkosítási algoritmus:** AES-256 [Galois/Counter Mode (GCM)](https://en.wikipedia.org/wiki/Galois/Counter_Mode) módban

### Ellenőrizhetem, hogy az adataim végpontok között titkosítottak?

Igen. Tekintse meg útmutatónkat: [hogyan ellenőrizheti az Obsidian Sync végpontok közötti titkosítását](https://obsidian.md/blog/verify-obsidian-sync-encryption/). Ez az útmutató lépésről lépésre bemutatja, hogyan ellenőrizheti bizalommentesen az adatai végpontok közötti titkosítását, amikor azokat a Sync szervereken keresztül küldi és fogadja.

### Átesett az Obsidian harmadik fél által végzett biztonsági auditon?

Igen. Az Obsidiant független szakértők auditálták. Látogasson el [Biztonság oldalunkra](https://obsidian.md/security) az auditjelentések megtekintéséhez. A harmadik feles biztonsági cégek által végzett rendszeres auditok biztosítják, hogy az Obsidian kódja és eljárásai megfeleljenek a legmagasabb biztonsági szabványoknak.

### Mi történik, ha elfelejtem a titkosítási jelszavamat?

Ha valaha elveszíti vagy elfelejti a titkosítási jelszavát, nem fog tudni további széfeket csatlakoztatni a távoli trezorjához. Mivel a titkosítási jelszó sehol sincs mentve, örökre elveszett.

Az adatai azonban általában biztonságosan tárolva vannak lokálisan minden eszközén.

Az Obsidian Sync további használatához javasoljuk a teljes újrabeállítást, hogy új eszközöket tudjon hozzáadni a Sync rendszeréhez:

1. Készítsen teljes széf biztonsági mentést az elsődleges eszközén, arra az esetre, ha valami rosszul sülne el. Ez lehet olyan egyszerű, mint a széf mappa másolása, vagy egy zip fájl létrehozása a széfből.
2. Válassza le a távoli trezort minden eszközéről. Ezt a **[[Beállítások]] → Sync → Távoli trezor kiválasztása → Kapcsolat megszakítása** menüpontban teheti meg.
3. [[Az Obsidian Sync beállítása#Új távoli trezor létrehozása|Hozzon létre egy új távoli trezort]] az elsődleges eszközéről ugyanazon a Beállítások oldalon. Opcionálisan törölheti az előző távoli trezort, mivel úgysincs meg hozzá a jelszó. (Lehet, hogy törölnie kell az előző távoli trezort, ha elérte a [[Gyakran ismételt kérdések#Hány távoli trezorom lehet?|trezor korlátot]])
4. Várja meg, amíg az elsődleges eszköze szinkronizál. Figyelje a szinkronizálási jelzőt a képernyő jobb alsó sarkában, amíg zöld pipát nem mutat.
5. Csatlakoztassa minden eszközét ugyanahhoz az újonnan létrehozott távoli trezorhoz. Csatlakozáskor figyelmeztetést kap a széf összevonásról, ez várható és folytathatja. Várja meg, amíg minden eszköz teljesen szinkronizál, mielőtt a következőre lépne. Ez csökkenti a problémák esélyét.
6. Most minden eszközének csatlakozva kell lennie az új távoli trezorhoz.

## Tárhely

### Hol üzemeltetik az Obsidian Sync szervereit?

Adatközpontjaink, amelyeket a [DigitalOcean](https://www.digitalocean.com) működtet, a következő helyszíneken kínálnak földrajzi régió szerinti távoli trezor tárhelyet:

> [!abstract] Sync régiók
> **Automatikus**: Az adatközpont az Ön IP-címe alapján kerül kiválasztásra az első beállításkor.
> 
> **Ázsia**: Szingapúr
> **Európa**: Frankfurt, Németország
> **Észak-Amerika**: San Francisco, USA
> **Óceánia**: Sydney, Ausztrália
^sync-geo-regions

### Hol találom a jelenlegi Sync szerveremet és hol van elhelyezve?

Az Obsidian Sync szerverének megtalálásához kövesse ezeket a lépéseket:
1. Nyissa meg a **[[Beállítások]]** → **Sync** → **Hibakeresési infó másolása** menüpontot.
2. Illessze be a másolt információt egy jegyzetbe vagy fájlba.
3. Keressen egy ehhez hasonló sort: `Host server: wss://sync-xx.obsidian.md`

Ez a sor jelzi a szervert, ahol a távoli trezorja található. A szerver helyszíneiről és üzemidejéről további részletekért látogasson el az [állapotoldalunkra](https://status.obsidian.md/).

## Hálózat és hozzáférés

### Az Obsidian Sync hozzáférésének kezelése a hálózatán

Az Obsidian Sync hozzáférésének szabályozásához a hálózatán a következő tartományokat kell kezelnie:

`sync-xx.obsidian.md`

Az `xx` ebben az esetben egy `1 - 100` közötti számot jelöl.

> [!tip] Ha a tűzfalrendszere támogatja, javasoljuk a `sync-*.obsidian.md` engedélyezését az aldomain számok folyamatos növekedésének figyelembevétele érdekében.

## Korlátozások

Az Obsidian Sync úgy lett tervezve, hogy jegyzetei privátak és biztonságosak maradjanak. A gyors, megbízható szinkronizálás és hatékony tárolás biztosítása érdekében az eszközök között tudatos kompromisszumokat kötünk a titkosítás alkalmazásában.

### Determinisztikus fájl-hash titkosítás

A fájl hash-eket determinisztikusan titkosítjuk: ugyanaz a fájltartalom, ugyanazzal a titkosítási kulccsal és sóval, mindig ugyanazt a titkosított hash-t eredményezi a szerveren. Ez segít a Sync-nek felismerni a duplikátumokat és elkerülni az azonos adatok újbóli feltöltését vagy tárolását, ami sávszélességet és távoli tárhelyet takarít meg, különösen a verziótörténetben vagy nagy fájlok ismétlődése esetén.

Azonban ha egy támadó feltöri a Sync szervert, és külön módon rá tud kényszeríteni egy felhasználót, hogy az általa választott fájlokat töltse fel, akkor a támadó kikényszerítheti adott fájlok feltöltését és megállapíthatja, hogy a fájl egyezik-e egy korábban feltöltött fájllal.

### Nincs kriptográfiai kötés az útvonal és a tartalom között

Egyes metaadatok nincsenek végpontok között titkosítva: melyik eszköz töltötte fel vagy törölte a fájlt, mikor lett feltöltve, és a *leképezés* a titkosított fájlútvonalak és a titkosított tartalom között. Ezeket az adatokat a szerver olvashatja, hogy továbbíthassa a változásokat, meghatározhassa egy fájl verziótörténetét, és szinkronban tarthassa az eszközöket.

Ha egy Sync szerver feltörésre kerülne, egy támadó manipulálhatná ezt a leképezést, aminek következtében az egyik titkosított fájl tartalma egy másik fájlútvonal alatt kerülne kézbesítésre. Ez nem fedi fel az egyszerű szöveges adatait, azok titkosítottak maradnak.
