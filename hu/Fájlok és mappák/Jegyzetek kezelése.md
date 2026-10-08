---
permalink: manage-notes
publish: true
mobile: false
description: null
---
Fájlokat és mappákat többféleképpen kezelhetsz: [[Gyorsbillentyűk]], [[Parancspaletta|parancsok]] vagy a [[Fájlkezelő]] segítségével.

## Új jegyzet létrehozása

Új fájl létrehozásához:

1. Nyomd meg a `Ctrl+N` billentyűkombinációt (vagy `Cmd+N` macOS-en).
2. Írd be a jegyzet nevét, majd nyomd meg az `Enter` billentyűt a szerkesztés megkezdéséhez.

Jegyzeteket a [[Fájlkezelő#Új jegyzet létrehozása|Fájlkezelő]] segítségével, vagy az **Új jegyzet létrehozása** lehetőség kiválasztásával a [[Parancspaletta|Parancspalettából]] is létrehozhatsz.

> [!hint] Rendszer karakterkorlátozásai
> Az Obsidian betartja annak az operációs rendszernek a fájlnév-korlátozásait, amelyen a jegyzetet létrehozod. Ha tervezed a [[Jegyzetek szinkronizálása eszközök között|jegyzeteid szinkronizálását eszközök között]], győződj meg róla, hogy a fájlneveid [biztonságosak más operációs rendszerek számára is](https://stackoverflow.com/q/1976007).
^blockquote-system-limitation

## Fájlok megnyitása a széfen kívülről

Asztali gépen megnyithatsz és szerkeszthetsz különálló Markdown fájlokat a széfeden kívülről. A fájlok az aktuális ablakban nyílnak meg, és az eredeti helyükön maradnak.

> [!note] Az Obsidian 1.14 és a legújabb telepítő szükséges
> [[Az Obsidian frissítése#Telepítő frissítések|Frissítsd a telepítődet]] az Obsidian letöltésével az [obsidian.md/download](https://obsidian.md/download) oldalról, majd telepítsd újra az alkalmazást.

Markdown fájl megnyitásához:

1. Nyisd meg a [[Parancspaletta|Parancspalettát]].
2. Válaszd a **Fájl megnyitása a széfen kívülről...** lehetőséget.
3. Válassz ki egy Markdown fájlt a számítógépeden.

Az operációs rendszered **Megnyitás ezzel** menüjét is használhatod, és kiválaszthatod az **Obsidian**-t. Ha alapértelmezetten az Obsidianban szeretnéd megnyitni a Markdown fájlokat, állítsd be alapértelmezett alkalmazásként a `.md` fájlokhoz.

A képbeágyazások és más helyi fájlokra mutató hivatkozások a Markdown fájl mappájához viszonyítva oldódnak fel. Használd a [[Vázlat|Vázlatot]] a fejlécek közötti navigáláshoz, és a [[Kimenő kapcsolatok|Kimenő kapcsolatokat]] a hivatkozott fájlok böngészéséhez.

### Fájlok előnézete a Quick Look segítségével

macOS-en válassz ki egy Markdown fájlt a Finderben, és nyomd meg a `Szóköz` billentyűt a **Quick Look** előnézetéhez. A Quick Look előnézet akkor is működik, ha az Obsidian be van zárva.

## Jegyzet átnevezése

Aktív jegyzet átnevezéséhez:

1. Kattints a jegyzet nevére a szerkesztő tetején (vagy nyomd meg az `F2` billentyűt).
2. Írd be az új nevet, majd nyomd meg az `Enter` billentyűt.

Fájl átnevezésekor az Obsidian automatikusan frissíti az adott fájlra mutató összes hivatkozást.

Jegyzetet vagy mappát megnyitás nélkül is átnevezhetsz a [[Fájlkezelő#Fájl vagy mappa átnevezése|Fájlkezelő]] segítségével.

## Jegyzet törlése

Jegyzet törléséhez válaszd a **További lehetőségek → Fájl törlése** lehetőséget az aktív jegyzet jobb felső sarkában.

Vagy válaszd az **Aktuális fájl törlése** lehetőséget a [[Parancspaletta|Parancspalettából]].

Jegyzetet vagy mappát a [[Fájlkezelő#Fájl vagy mappa törlése|Fájlkezelő]] segítségével is törölhetsz.

> [!note] Mi történik a fájlokkal törlés után?
> A törölt fájlok kezelésének módosításához válaszd az alábbi lehetőségek egyikét a **[[Beállítások]] → Fájlok és hivatkozások** menüpontban:
>
> - **Rendszer kukája**: Alapértelmezés szerint a törölt fájlok az operációs rendszered kukájába kerülnek. Fájl visszaállításához használd a kívánt fájlkezelőt.
> - **Obsidian kuka**: A törölt fájlokat a széfedben található `.trash` mappába küldheted.
> - **Végleges törlés**: A fájlok azonnal törlődnek, visszaállítási lehetőség nélkül.
