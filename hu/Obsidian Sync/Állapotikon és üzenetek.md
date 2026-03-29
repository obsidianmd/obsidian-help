---
permalink: sync/messages
publish: true
mobile: true
description: 'Ez az oldal az Obsidian Sync állapotikonjait ismerteti, és részleteket nyújt a szinkronizálási tevékenységnaplóról.'
---
Az Obsidian Sync számos elemet biztosít a szinkronizálás állapotának jelzésére, főként a [[#Szinkronizálás állapotikon]] és a [[#Szinkronizálási tevékenységnapló]]. A verziókezeléssel kapcsolatos részletek az Obsidian Sync-ben a [[Verziótörténet]] oldalon találhatók.

## Szinkronizálás állapotikon

A szinkronizálás állapotikonja az [[Állapotsor]]ban található az asztali verzióban, valamint a [[Oldalsáv#Rejtett oldalsávok megnyitása|jobb oldalsávban]] mobilon és tableten. Az ikon különböző szinkronizálási állapotokat tükröz:

- ![[obsidian-icon-sync-synced.svg#icon]] **Szinkronizálva**: Az Obsidian Sync teljesen szinkronizálta a fájljait. Ez az ikon jellemzően zöld.
- ![[obsidian-icon-sync-syncing.svg#icon]] **Szinkronizálás**: Az Obsidian éppen frissíti a távoli trezort. Ez az ikon általában lila.
- ![[obsidian-icon-sync-paused.svg#icon]] **Szüneteltetve**: A szinkronizálás szünetel, de az Obsidian továbbra is csatlakozva van a távoli trezorhoz. Az ikon jellemzően lila.
- ![[obsidian-icon-sync-disconnected.svg#icon]] **Leválasztva**: A Sync alap bővítmény aktív, de a [[Helyi és távoli széfek|helyi széf]] nincs csatlakoztatva távoli trezorhoz. Ez az ikon jellemzően piros.

Az ikonra kattintva vagy koppintva egy helyi menü jelenik meg a következő lehetőségekkel:
- ![[obsidian-icon-sync-paused.svg#icon]] Szüneteltetés (vagy ![[lucide-circle-play.svg#icon]] Folytatás, ha szüneteltetve van)
- ![[lucide-history.svg#icon]] [[Verziótörténet]] (Szürkén jelenik meg, ha nem jegyzetet néz)
- ![[lucide-align-left.svg#icon]] [[#Szinkronizálási tevékenységnapló|Szinkronizálási napló]] megnyitása
- ![[lucide-trash-2.svg#icon]] [[Verziótörténet#Törölt fájl visszaállítása|Törölt fájlok]]
- ![[lucide-cog.svg#icon]] [[Sync beállítások és szelektív szinkronizálás|Sync beállítások]]

## Szinkronizálási tevékenységnapló

Az Obsidian Sync részletes szinkronizálási naplót tartalmaz, amely nyomon követi a helyi fájlok és a távoli trezor közötti összes interakciót. A napló megjeleníti a feltöltéseket, letöltéseket, törléseket és minden problémát, például összevonási ütközéseket vagy csatlakozási problémákat.

**A tevékenységnapló elérése:**
- Kattintson a szinkronizálás állapotikonjára az állapotsorban
- Lépjen a **[[Beállítások]] → Sync → Tevékenységnapló** menüpontra
- Használja a **Parancspaletta → Sync: Tevékenységnapló** parancsot

A napló időbélyegeket és részleteket biztosít minden szinkronizálási művelethez, ami hasznos a szinkronizálási problémák elhárításához.

> [!warning] A szinkronizálási napló nem marad meg az Obsidian bezárása után. Ha problémát tapasztal, másolja ki a naplót az alkalmazás bezárása _előtt_.

A napló a következő típusokba sorolja az üzeneteket:

- [[#Általános üzenetek]]
- [[#Hibaüzenetek]]
- [[#Kihagyási üzenetek]]
- [[#Fiókkal kapcsolatos üzenetek]]

A szinkronizálási naplót szűrheti **Mind**, **Hibák**, **Kihagyottak** és **Ütközések** szerint. Ezenkívül a Sync ablakban található keresőmezővel kereshet a szinkronizálási naplóban.

> [!summary] Az alábbiakban felsoroltuk a leggyakrabban előforduló üzeneteket. A lista nem teljes. Ha problémát tapasztal, és olyan szinkronizálási naplóüzenetet lát, amelyben nem biztos, [[Súgó és támogatás#Kapcsolatfelvétel az Obsidian támogatással|lépjen kapcsolatba az Obsidian támogatással]].

### Általános üzenetek

Ezek a mindennapi használat során előforduló gyakori üzenetek.

**Connecting to server**
Az Obsidian megpróbál csatlakozni a távoli trezor [[Obsidian Sync/Biztonság és adatvédelem#Hol találom a jelenlegi Sync szerveremet és hol van üzemeltetve?|Sync szerveréhez]].

**Connected to server. Detecting changes...**
Az Obsidian létrehozta a kapcsolatot, és összehasonlítja a helyi széfet a távoli trezorral, hogy megállapítsa, szükségesek-e változtatások.

> [!info] Ez az üzenet más lehetséges Sync problémákat is jelezhet. Ha ismételten megjelenik, és úgy gondolja, hogy még vannak szinkronizálandó elemek, [[Súgó és támogatás#Kapcsolatfelvétel az Obsidian támogatással|lépjen kapcsolatba az Obsidian támogatással]].

**Fully synced**
- A helyi és a távoli széf teljesen szinkronizálva van.

**Merging conflicted file**
Ütközés történt a szinkronizálás során, és a fájl összevonásra került felülírás helyett. További információkért lásd: [[Obsidian Sync hibaelhárítás#Ütközések feloldása|ütközések feloldása]]. Ha az összevonás nem kívánt, visszaállíthatja a korábbi verziókat a [[Verziótörténet]] vagy a [[Fájl-visszaállítás]] segítségével.

**Rejected server change**
A távoli trezorban lévő változtatások régebbiek, mint a helyi eszközön lévő verzió, ezért a helyi verzió megmarad, és a távoli változtatás figyelmen kívül hagyásra kerül.

### Hibaüzenetek

Ezek a fájlszinkronizálás során felmerülő hibákat részletező üzenetek.

**Out of memory**
Ez a probléma általában mobileszközökön fordul elő, amikor nincs elegendő tárhely vagy memória egy fájl letöltéséhez. Leggyakrabban nagy fájlok, például videók esetében jelentkezik.

### Kihagyási üzenetek

Ezek az üzenetek részletezik, mi lett kihagyva, és esetleg miért.

**Unable to download file with illegal name**

A fájl [speciális karaktert vagy elnevezési konvenciót](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names) tartalmaz, amely nem engedélyezett a fogadó operációs rendszeren. Az egyszerűség kedvéért átnevezheti a fájlt a forráseszközön, eltávolítva minden speciális karaktert a `-` és `_` kivételével.

Vegye figyelembe, hogy ez Android eszközökön a nevükben több pontot `.` tartalmazó fájlokra is vonatkozik.

### Fiókkal kapcsolatos üzenetek

Ezek az előfizetéssel vagy fiókkal kapcsolatos változásokra vonatkozó üzenetek.

**Vault limit exceeded**
A fiókja túllépte a [[Gyakran ismételt kérdések#Mekkora lehet az egyes távoli trezorok mérete|maximális tárhelyméretet]]. A mellékletek és a verziótörténet hozzájárulnak ehhez a mérethez. Még ha a széfje kisebbnek is tűnik a korlátnál, a régebbi verziók és fájlok túlléphetik azt.

A széf méretének csökkentéséhez:
1. Nyissa meg a **[[Beállítások]] → Sync** menüpontot.
2. Használja **A széf mérete átlépte a felső limitet** alatti lehetőségeket a nagy fájlok eltávolításához.

**Vault not found**
`{"res":"err","msg":"Vault not found."}`

Ez a hiba a következő esetekben fordulhat elő:

1. A széf egy másik eszközről lett törölve.
2. A Sync előfizetés több mint 30 napig inaktív volt, ami a távoli trezor eltávolítását okozta.
3. Az előfizetés lemondásra vagy visszatérítésre került, ami a távoli trezor törlését eredményezte.

Ezekben az esetekben [[Az Obsidian Sync beállítása#Leválasztás egy távoli trezorról|le kell választania a távoli trezorról]] és [[Az Obsidian Sync beállítása#Új távoli trezor létrehozása|létre kell hoznia egy új távoli trezort]], ügyelve a helyi adatok megőrzésére.

**Failed to authenticate: Your subscription to Obsidian Sync has expired**
A fiókja teljesen lejárt állapotban van, mivel nem tudtuk feldolgozni a nyilvántartott fizetést.

Az Obsidian Sync további használatához újra elő kell fizetnie a [fiókjában](https://obsidian.md/account/sync).

**Failed to authenticate: Not logged in**

Az Obsidian Sync észlelte, hogy jelenleg nincs bejelentkezve. Újra be kell jelentkeznie az alkalmazásban a **[[Beállítások]]** [[Beállítások#Általános#Fiók|Fiók]] részében.

Egyes esetekben egy közösségi bővítmény is megakadályozhatja, hogy az Obsidian Sync megerősítse a fiókja bejelentkezési állapotát. Lépjen **[[Bővítmények biztonsága#Korlátozott mód|Korlátozott módba]]** és próbálja újra.

### Hálózati üzenetek

**Disconnected from server**
`Unable to connect to server`

Az Obsidian Sync ismeretlen okból leválasztódott a Sync szerverről. A Sync rendszeresen megpróbál újracsatlakozni a szerverhez.

iOS-en ez az üzenet a következő hibaként jelenik meg:
`Null is not an object (evaluating 'this.socket.send')`

Pontosan ugyanazt jelenti, mint az `Unable to connect to server` üzenet, és semmilyen módon nem jelzi, hogy más probléma lenne.
