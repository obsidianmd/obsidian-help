---
permalink: sync/switch
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Ismerd meg, hogyan válthatsz a jelenlegi szinkronizálási megoldásodról az Obsidian Sync-re.'
---
Ismerje meg, hogyan válthat jelenlegi szinkronizálási megoldásáról az Obsidian Sync-re.

> [!warning] Kerülje több megoldás használatát ugyanazok a fájlok szinkronizálásához
> [[Gyakran ismételt kérdések#Használhatok külső féltől származó szinkronizációs szolgáltatást az Obsidian Sync mellett?|Nem javasoljuk]] az Obsidian Sync használatát felhőalapú tárolószolgáltatásokkal (pl. iCloud, Dropbox, OneDrive, Google Drive) egyidejűleg, mivel ez ütközéseket okozhat. A felhőalapú tárolószolgáltatások azonban szerepet játszhatnak a [[Obsidian fájlok biztonsági mentése|biztonsági mentési]] stratégiájában.

## Széf áthelyezése a külső féltől származó szinkronizációs szolgáltatásból vagy felhőtárolóból

Ha a széfje az alábbi helyek valamelyikén van tárolva, valószínűleg egy külső féltől származó szolgáltatás szinkronizálja:

- **Windows**: `C:\Users\Username\Desktop` vagy `C:\Users\Username\Documents`
- **macOS**: `/users/username/Desktop` vagy `/users/username/Documents`
- **iOS**: Az **iCloud** mappa a Fájlok alkalmazáson belül
- **Egyéb**: Bármely mappa egy szinkronizációs szolgáltatás alatt, például `Drive/my-vault`, `Dropbox/my-vault`, `pSync/my-vault` stb.

Bár az Android és a Linux rendszereknél általában kevesebb probléma adódik ezzel, érdemes ellenőrizni a széf helyét ezeken az eszközökön is.

> [!tip] Ha a jelenlegi helyi széfje egy távoli trezorhoz csatlakozik, az Obsidian megpróbálja észlelni, hogy a széf egy szinkronizációs szolgáltatásban van-e. Ha igen, egy üzenet jelenik meg az Obsidian Sync beállításainak tetején.

A szinkronizációs szolgáltatásokkal való ütközések elkerülése érdekében javasoljuk, hogy az Obsidian széfeket a következő helyeken tárolja:

- **Windows**: Ajánlott helyek fontossági sorrendben:
    1. `D:\` vagy bármely más nem C, nem hálózati meghajtó az eszközön
    2. `C:\Vaults` (ha van jogosultsága a C:\ meghajtó használatához)
    3. `C:\Users\Username\Vaults` (ha a széfet a C:\Users\Username mappán belül kell tartania, győződjön meg róla, hogy a OneDrive nem törli a fájlokat. A OneDrive általában kevésbé agresszív a `Desktop` és `Documents` mappákon kívül.)
- **macOS**: `/users/username/vaults`
- **Linux**: A fájlrendszerek sokfélesége miatt nincs konkrét ajánlás. Csak győződjön meg arról, hogy az Obsidian teljes olvasási/írási hozzáféréssel rendelkezik, és hogy egyetlen szinkronizációs szolgáltatás sem kezeli a mappát.
- **iOS/iPadOS**: Tárolja a széfet az **On My iPhone** vagy **On the Device** helyen.
- **Android**: Használja az eszközön található `Documents/` mappát.

## Széf áthelyezése az Obsidian asztali alkalmazással

![[Széfek kezelése#Széf áthelyezése másik mappába]]

## Széf áthelyezése mobilon

Mobileszközökön az Obsidian sandbox környezetben működik, ami azt jelenti, hogy nem tudja az alkalmazáson belül áthelyezni a széfeket úgy, ahogy az asztalon lehetséges.

### Android

Az Android fájlrendszerek eszközönként nagymértékben eltérnek, de általában kövesse ugyanazokat a lépéseket, mint a széf manuális áthelyezésekor, és győződjön meg arról, hogy az eltávolításra kerül az eszközön lévő minden szinkronizációs szolgáltatásból.

### iOS és iPadOS

Egy meglévő iCloud-széf eszközre történő áthelyezéséhez kövesse az alábbi lépéseket:

> [!note] Ha már rendelkezik az adatokkal egy másik eszközön, és beállította az Obsidian Sync-et, javasolt [[Az Obsidian Sync beállítása#Távoli széf szinkronizálása másik eszközön|új helyi széfet létrehozni a Sync-ből]].

- Készítsen [[Obsidian fájlok biztonsági mentése|biztonsági mentést]] a széfjéről.
- Hozzon létre egy új széfet az eszközén, és győződjön meg arról, hogy a **Save in iCloud Drive** ki van kapcsolva.
- Kényszerítse le az Obsidian alkalmazást az összes eszközön a szinkronizálás szüneteltetéséhez.
- Nyissa meg a **Fájlok** alkalmazást az iOS/iPadOS eszközén.
- Nyomja meg hosszan a széf mappáját az **iCloud Drive → Obsidian** alatt, majd válassza a **Move** lehetőséget.
- Helyezze át a széfet az **On My iPhone/Device → Obsidian** mappába, és ellenőrizze, hogy látható-e.
- Koppintson a **Copy** gombra.
- Térjen vissza az **iCloud Drive → Obsidian** mappába, és törölje a régi széf mappáját.

Amikor újra megnyitja az Obsidiant, a széfnek egy széf ikont kell mutatnia felhő ikon helyett, ami megerősíti, hogy már nincs az iCloud Drive-ban. Az Obsidian Sync szintén nem fogja többé megjeleníteni a figyelmeztető üzenetet a beállításaiban.

## Következő lépések

- Szeretné elkezdeni az Obsidian Sync használatát? [[Az Obsidian Sync beállítása]]
- Még mindig segítségre van szüksége? Tekintse meg az [[Obsidian Sync hibaelhárítás]] oldalt.
