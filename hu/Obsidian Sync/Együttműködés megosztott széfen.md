---
permalink: sync/collaborate
publish: true
mobile: true
description: 'Ez az oldal bemutatja, hogyan működhetsz együtt más Obsidian Sync felhasználókkal.'
---
Az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync]] segítségével együttműködhetsz megosztott széfen a csapatoddal.

Minden együttműködőnek aktív Sync előfizetéssel kell rendelkeznie a megosztott széf eléréséhez. A megosztott széfhez való csatlakozás nem számít bele a [[Gyakran ismételt kérdések#Hány távoli trezorom lehet?|széf korlátba]].

Ha a távoli trezor [[Biztonság és adatvédelem|végpontok közötti titkosítással]] rendelkezik, az együttműködőknek meg kell adniuk a titkosítási jelszót a széf beállításakor.

## Felhasználók kezelése

### Felhasználók hozzáadása

Felhasználó meghívása távoli trezor megosztásához:

1. Nyisd meg a **[[Beállítások]]** menüt.
2. Az oldalsó menüben válaszd a **Szinkronizálás** lehetőséget.
3. A **Távoli trezor** mellett válaszd a **Kezelés** lehetőséget.
4. A megosztani kívánt távoli trezor mellett válaszd a **Megosztás kezelése** ![[lucide-users.svg#icon]] lehetőséget.
5. A **Felhasználó meghívása** mezőbe írd be a meghívni kívánt felhasználó e-mail címét.
6. Válaszd a **Hozzáadás** lehetőséget.

### Felhasználók eltávolítása

1. Nyisd meg a **[[Beállítások]]** menüt.
2. Az oldalsó menüben válaszd a **Szinkronizálás** lehetőséget.
3. A **Távoli trezor** mellett válaszd a **Kezelés** lehetőséget.
4. Az eltávolítani kívánt felhasználó mellett válaszd a **Felhasználó eltávolítása** ![[lucide-x.svg#icon]] lehetőséget.

## Együttműködés a csapatoddal

### Jogosultságok

A részletes jogosultságok egyelőre nem támogatottak. Minden együttműködő ugyanazokat a jogosultságokat kapja, mint a széf tulajdonosa, egyetlen kivétellel: csak a széf tulajdonosa hívhat meg együttműködőket.

### Valós idejű szerkesztés

A megosztott széfek lehetővé teszik a csapatok számára, hogy közösen dolgozzanak fájlokon, azonban az Obsidian egyelőre nem támogatja az együttműködő valós idejű szerkesztést ugyanazon a fájlon. Nem fogod látni a másik felhasználó kurzorát, és a szerkesztései csak a módosítások szinkronizálása után jelennek meg.

Ha több felhasználó szerkeszti ugyanazt a fájlt egyszerre, a szinkronizálás során a [[Obsidian Sync hibaelhárítás#Ütközések feloldása|módosítások összevonásra kerülnek]]. A módosítások megtekinthetők és visszaállíthatók a [[Verziótörténet]] segítségével.

![[version-history-collaboration.png]]^version-history-image

## Korlátozások

Vedd figyelembe, hogy az Obsidian Sync-nek vannak [[Gyakran ismételt kérdések|korlátozásai]], amelyek hatással lehetnek a csapatodra:

- A megosztott széfen legfeljebb 20 együttműködő lehet.
- A mellékletek maximális fájlmérete a távoli trezor gazdájának [[Csomagok és tárhelykorlátok|csomagjától]] függ: 5 MB a Standard csomag és 200 MB a Plus csomag esetén.

[[Szinkronizálás csapatok számára|További információk a csapatok számára történő szinkronizálásról]].
