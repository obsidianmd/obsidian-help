---
permalink: sync/version-history
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Az Obsidian Sync nyilvántartást vezet a jegyzeteiden végrehajtott összes változtatásról, és rendszeresen ellenőrzi a frissítéseket, valamint új verziókat hoz létre a jegyzeteidből.'
---
Az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync]] rendszeresen ellenőrzi a [[Sync beállítások és szelektív szinkronizálás|szinkronizált fájlok]] frissítéseit, és nyilvántartást vezet minden változásról. Ezeket új bejegyzésekként tárolja a [[#Verziótörténet]]ben. Ezek az információk többféleképpen érhetők el:

- [[#Szinkronizálási előzmények]]
- [[#Verziótörténet]]

Bár nem része az Obsidian Sync-nek, helyi verziótörténet is elérhető minden eszközön, ha a [[Fájl-visszaállítás]] bővítmény engedélyezve van.

## Szinkronizálási előzmények

A szinkronizálási előzmények (vagy Sync oldalsáv) funkció, amelyet az Obsidian 1.7-es verziójában vezettek be, lehetővé teszi a nemrég létrehozott vagy módosított és szinkronizált jegyzetek és mellékletek gyors áttekintését. Tekinthetsz rá úgy is, mint egy _szerkesztési_ előzményre.

Az oldalsávban kiválaszthatsz egy elemet, hogy megnyisd a fájlját az aktív ablakodban. Az elemekhez helyi menük is tartoznak, amelyekkel olyan műveleteket végezhetsz, mint a fájl áthelyezése vagy a [[#Jegyzetek és mellékletek|Verziótörténet]] megtekintése.

> [!compatibility] Csak asztali funkció
> Amikor az egeret egy szinkronizált fájl fölé viszed az oldalsávban, láthatod, ki szerkesztette utoljára a fájlt. Ez különösen hasznos, ha megosztott széfen [[Együttműködés megosztott széfen|együttműködsz]].

> [!tip] 
> A beállítások és a törölt elemek nem jelennek meg a szinkronizálási előzmények oldalsávjában. Ezek helyett a [[#Jegyzetek és mellékletek|Verziótörténet]]ben találhatók.

### Szinkronizálási előzmények megjelenítése

Amikor engedélyezed a [[Bevezetés az Obsidian Sync használatába|Sync]] alap bővítményt, a szinkronizálási előzmények automatikusan engedélyezve lesznek, de alapértelmezetten nem jelennek meg az oldalsávban. Manuálisan kell hozzáadnod egy parancs vagy gyorsbillentyű segítségével.

#### Engedélyezés a Parancspalettán keresztül

> [!info] Ehhez a lehetőséghez a [[Parancspaletta]] alap bővítménynek engedélyezve kell lennie.

**Asztali/Tablet** ![[lucide-monitor-check.svg#icon]]

1. Nyisd meg a **Parancspalettát**. ![[lucide-terminal.svg#icon]]
2. Írd be: „Sync".
3. Válaszd a „Sync: Show Sync history" opciót.

A szinkronizálási előzmények ezután megjelennek a [[Oldalsáv|jobb oldali oldalsáv]]ban.

**Mobil** ![[obsidian-icon-smartphone.svg#icon]]

1. Nyisd meg a [[Szalag]]ot ![[lucide-menu.svg#icon]].
2. Nyisd meg a **Parancspalettát**. ![[lucide-terminal.svg#icon]]
3. Írd be: „Sync".
4. Válaszd a „Sync: Show Sync history" opciót.

A szinkronizálási előzmények ezután legördülő opcióként jelennek meg a [[Oldalsáv|jobb oldali oldalsáv]]ban.

#### Engedélyezés gyorsbillentyűvel

1. Nyisd meg a **[[Beállítások]]at**.
2. A **Beállítások** kategóriában válaszd a **Gyorsbillentyűk** menüpontot.
3. A gyorsbillentyűk keresősávjában írd be: „Sync".
4. A „Sync: Show Sync history" mellett rendeld hozzá a kívánt gyorsbillentyűt.

## Verziótörténet

A [[#Szinkronizálási előzmények]] mellett az Obsidian verziótörténetet is fenntart a jegyzetek és mellékletek visszaállításához. Ha véletlenül törölsz egy jegyzetet, vagy egy korábbi verzióra szeretnél visszatérni, visszaállíthatod a verziótörténetből.

A verziótörténet megőrzési időszaka az [[Csomagok és tárhelykorlátok|Obsidian Sync csomagodtól]] függ. A Standard csomag esetében a jegyzetek 1 hónapig, míg a Plus csomag esetében 12 hónapig kerülnek megőrzésre. Ez után az időszak után a jegyzetek régebbi verziói törlődnek.

A [[Csatolmányok|mellékletek]] esetében a régebbi verziók <u>két hétig</u> tárolódnak.

![[Együttműködés megosztott széfen#^version-history-image]]

### Jegyzetek és mellékletek

A jegyzetek és mellékletek visszaállításának folyamata azonos.

#### Egy fájl verziótörténetének megtekintése

**Asztali/Tablet** ![[lucide-monitor-check.svg#icon]]
1. A **Fájlkezelőben** válaszd ki a visszaállítani kívánt jegyzetet.
2. Válaszd a **Verziótörténet megnyitása** lehetőséget.
3. Válaszd ki a megtekinteni kívánt jegyzet verzióját a bal oldalon. A tartalom a jobb oldalon jelenik meg.

**Mobil** ![[obsidian-icon-smartphone.svg#icon]]
1. A **Fájlkezelőben** válaszd ki a visszaállítani kívánt jegyzetet.
2. Hosszan nyomd meg a helyi menü megjelenítéséhez.
3. Válaszd a **Verziótörténet megnyitása** lehetőséget.
4. A felugró menüben válaszd ki a megtekinteni kívánt jegyzet verzióját.
5. A kiválasztás után a jegyzet tartalma áttekinthető lesz.

#### Törölt vagy átnevezett fájl verziótörténetének megtekintése

1. Nyisd meg a **[[Beállítások]]at**.
2. Az oldalsávban az **Alap bővítmények*** alatt válaszd a **Sync** lehetőséget.
3. A **Törölt fájlok** mellett válaszd a **Nézet** lehetőséget.
4. Válaszd ki a jegyzetet, amelynek a verziótörténetét meg szeretnéd tekinteni.
5. A verziótörténet felugró ablakban válaszd ki a megtekinteni kívánt verziót a bal oldalon.

#### Egy fájl korábbi verziójának visszaállítása

**Asztali/Tablet** ![[lucide-monitor-check.svg#icon]]
1. A **Fájlkezelőben** válaszd ki a visszaállítani kívánt jegyzetet.
2. Válaszd a **Verziótörténet megnyitása** lehetőséget.
3. Válaszd ki a visszaállítani kívánt jegyzet verzióját a bal oldalon. A tartalom a jobb oldalon jelenik meg.
4. Válaszd a **Visszaállítás** gombot.
5. A jegyzet tartalma a visszaállított verzióra cserélődik.

**Mobil** ![[obsidian-icon-smartphone.svg#icon]]
1. A **Fájlkezelőben** válaszd ki a visszaállítani kívánt jegyzetet.
2. Hosszan nyomd meg a helyi menü megjelenítéséhez.
3. Válaszd a **Verziótörténet megnyitása** lehetőséget.
4. A felugró menüben válaszd ki a visszaállítani kívánt jegyzet verzióját.
5. A kiválasztás után a jegyzet tartalma áttekinthető lesz.
6. Válaszd a **Visszaállítás** gombot.
7. A jegyzet tartalma a visszaállított verzióra cserélődik.

#### Törölt fájl visszaállítása

1. Nyisd meg a **[[Beállítások]]at**.
2. Az oldalsávban az **Alap bővítmények*** alatt válaszd a **Sync** lehetőséget.
3. A **Törölt fájlok** mellett válaszd a **Nézet** lehetőséget.
4. Válaszd ki a visszaállítani kívánt jegyzetet.
5. A bal oldali verziólistából válaszd ki a visszaállítani kívánt verziót.
6. Válaszd a jobb oldalon a **Visszaállítás** gombot.
7. A jegyzet visszaáll az eredeti helyére a fájlrendszerben.

> [!tip] Több jegyzetet is kiválaszthatsz a **Csoportos helyreállítás** funkcióval a jelölőnégyzetek bejelölésével, vagy a `shift+kattintás` használatával. Ezek a fájlok ebben a menüben nem tekinthetők át.

### Beállítások előzményei

Az Obsidian Sync nyomon követi a széf konfigurációs beállításain végzett módosításokat is.

#### Egy beállítás verziótörténetének megtekintése

1. Nyisd meg a **[[Beállítások]]at**.
2. Az oldalsávban az **Alap bővítmények*** alatt válaszd a **Sync** lehetőséget.
3. Navigálj a **Széfkonfiguráció szinkronizálása** részhez.
4. Válaszd a **Nézet** gombot a **[[Beállítások]] verziótörténet** mellett.
5. A **[[Beállítások]] fájl** felugró ablakban válaszd ki a megtekinteni kívánt beállításfájlt.

#### Egy beállítás korábbi verziójának visszaállítása

1. Nyisd meg a **[[Beállítások]]at**.
2. Az oldalsávban az **Alap bővítmények** alatt válaszd a **Sync** lehetőséget.
3. Navigálj a **Széfkonfiguráció szinkronizálása** részhez.
4. Válaszd a **Nézet** gombot a **[[Beállítások]] verziótörténet** mellett.
5. A **[[Beállítások]] fájl** felugró ablakban válaszd ki a megtekinteni kívánt beállításfájlt.
6. A módosítások ablakban válaszd a **Visszaállítás** gombot.
7. Töltsd újra vagy indítsd újra az Obsidiant, hogy a beállítás érvénybe lépjen. További részletekért tekintsd meg az [[Az Obsidian Sync beállítása#Obsidian Sync beállítások módosítása|Obsidian Sync beállítások módosítása]] utasításait.
