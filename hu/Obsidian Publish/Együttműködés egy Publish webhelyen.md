---
permalink: publish/collaborate
publish: true
mobile: true
description: 'Ismerd meg, hogyan működhetsz együtt más Obsidian-felhasználókkal az Obsidian Publish webhelyeden.'
---
Ismerje meg, hogyan működhet együtt az [[Bevezetés az Obsidian Publish-be|Obsidian Publish]] webhelyén más Obsidian felhasználókkal. Barátai és kollégái közreműködőként való hozzáadásával ők is publikálhatnak változtatásokat a webhelyére.

Csak a webhely tulajdonosának van szüksége aktív Obsidian Publish előfizetésre. A közreműködőknek csak egy [Obsidian fiókra](https://obsidian.md/account) van szükségük.

> [!warning] Mielőtt változtatásokat publikálna egy megosztott webhelyre, győződjön meg arról, hogy [[#Változtatások szinkronizálása közreműködők között|szinkronizálja a változtatásokat a közreműködők között]]. Ellenkező esetben fennáll a veszélye, hogy felülírja más közreműködők változtatásait.

## Közreműködő hozzáadása a webhelyhez

1. A [[Szalag|szalagon]] válassza a **Változtatások publikálása** ![[lucide-send.svg#icon]] lehetőséget, vagy nyissa meg a [[Parancspaletta|parancspalettát]] és írja be: **Publish: Változtatások publikálása...**
2. A **Változtatások publikálása** párbeszédablakban kattintson a **Webhely beállításainak módosítása** ![[lucide-cog.svg#icon]] gombra.
3. Az **Együttműködés a webhelyen** mellett válassza a **Kezelés** lehetőséget.
4. A **Felhasználó meghívása** mezőbe írja be a közreműködő e-mail címét.
5. Válassza a **Hozzáadás** lehetőséget.

## Közreműködő eltávolítása a webhelyről

1. A [[Szalag|szalagon]] válassza a **Változtatások publikálása** ![[lucide-send.svg#icon]] lehetőséget, vagy nyissa meg a [[Parancspaletta|parancspalettát]] és írja be: **Publish: Változtatások publikálása...**
2. A **Változtatások publikálása** párbeszédablakban kattintson a **Webhely beállításainak módosítása** ![[lucide-cog.svg#icon]] gombra.
3. Az **Együttműködés a webhelyen** mellett válassza a **Kezelés** lehetőséget.
4. Az eltávolítani kívánt közreműködő mellett válassza a **Felhasználó eltávolítása** ![[lucide-x.svg#icon]] lehetőséget.

## Változtatások szinkronizálása közreműködők között

Az Obsidian Publish nem szinkronizálja automatikusan a publikált változtatásokat a helyi széfek között. Ehelyett a közreműködőknek manuálisan kell szinkronizálniuk a többi közreműködő változtatásait.

Helyi jegyzet frissítése az élő webhely változtatásaival:

1. A [[Szalag|szalagon]] válassza a **Változtatások publikálása** ![[lucide-send.svg#icon]] lehetőséget, vagy nyissa meg a [[Parancspaletta|parancspalettát]] és írja be: **Publish: Változtatások publikálása...**
2. Kattintson jobb gombbal vagy hosszan nyomja meg a szinkronizálni kívánt változtatást, majd válassza az **Élő verzió használata** lehetőséget. **Ez felülírja a jegyzetet a helyi széfben.**

> [!tip] Javasoljuk, hogy használjon más eszközt a széfek közötti változtatások szinkronizálásához, például az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync]]-et vagy a [git](https://git-scm.com/)-et.

## Jogosultságok

Az alábbi táblázat a tulajdonosok és közreműködők számára elérhető webhelyjogosultságokat sorolja fel:

| Művelet                                    | Közreműködő | Tulajdonos |
|--------------------------------------------|:-----------:|:----------:|
| Új oldalak publikálása                     | ✓           | ✓          |
| Publikált oldalak módosításainak publikálása | ✓           | ✓          |
| Oldalak publikálásának visszavonása        | ✓           | ✓          |
| Webhely beállításainak konfigurálása       |             | ✓          |
| Jogosultságok kezelése                     |             | ✓          |
