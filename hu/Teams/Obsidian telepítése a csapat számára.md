---
permalink: teams/deploy
cssclasses:
  - soft-embed
---
Az Obsidian helyi alkalmazásként fut minden csapattagod eszközén. Úgy tervezték, hogy online és offline egyaránt működjön, biztonságosan és az adatvédelem szem előtt tartásával, és teljes kontrollt biztosítson a csapatod adatai felett. Az Obsidian nem érhető el webes alkalmazásként, ezért az alkalmazást telepítened kell a csapattagok eszközeire.

## Az Obsidian telepítése és frissítése

A csapatod a [Letöltés oldalról](https://obsidian.md/download) töltheti le az Obsidiant. A kiadások elérhetők a [GitHub kiadások oldalán](https://github.com/obsidianmd/obsidian-releases/releases) is, amely tartalmazza [a változásnaplóra](https://obsidian.md/changelog/) mutató hivatkozásokat.

> [!tip] Azon Windows-felhasználók számára, akiknek rendszerszintű telepítőre van szükségük, az univerzális `.exe` tartalmazza az Obsidian minden felhasználó számára történő telepítésének lehetőségét.

Ha az automatikus frissítések engedélyezve vannak az alkalmazásban, a jövőbeli verziók automatikusan telepítésre kerülnek, amikor a felhasználók újraindítják az Obsidiant. Emellett javasoljuk, hogy rendszeresen végezzetek [[Az Obsidian frissítése#Telepítő frissítések|telepítő frissítéseket]], hogy megkapjátok az Electron keretrendszer legfrissebb frissítéseit, beleértve a biztonsági javításokat is.

Ha arra keresel megoldást, hogyan korlátozhatod a hálózati hozzáférést az Obsidianhoz a folyamat során, tekintsd át a [[Biztonsági szempontok csapatok számára#Hálózat és hozzáférés|hálózat és hozzáférés]] részt.

## Az Obsidian testreszabása

Az Obsidian könnyen módosítható a csapatod igényeinek megfelelően. Kiterjedt API-jával és nagy felhasználói ökoszisztémájával az Obsidian számos bővítményhez, témához és kiegészítő eszközhöz biztosít hozzáférést.

A biztonsággal kapcsolatos kérdésekért kérjük, tekintsd meg a [[Biztonsági szempontok csapatok számára]] oldalt.

### Konfigurációs mappák

A [[Konfigurációs mappa]] az a hely, ahol egy Obsidian [[Szószedet#Széf|széf]] tárolja az alkalmazásbeállításait. Alapértelmezés szerint ez a mappa `.obsidian` nevű, de rugalmasan [[Konfigurációs mappa#A konfigurációs mappa módosítása|módosíthatod a konfigurációs mappa]] nevét az igényeidnek megfelelően.

Javasoljuk, hogy hozzatok létre egy szabványosított sablont a konfigurációs mappából, amelyet a csapat eszközein telepíthettek.

### Bővítmények

Az [[Alap bővítmények]] az Obsidian csapata által készített opcionális funkciók. Ezek a funkciók az alkalmazás alapkódjába vannak integrálva, és be- vagy kikapcsolhatók.

A [[Közösségi bővítmények]] harmadik felek által készített funkciók, amelyeket az Obsidian alkalmazáshoz adhatunk hozzá, és a közösségi könyvtáron keresztül telepíthetők. A harmadik féltől származó bővítmények az [Obsidian API](https://github.com/obsidianmd/obsidian-api)-t használják. A bővítmények a széfen belüli `.obsidian/plugins` mappában találhatók, és ezen a helyen manuálisan is telepíthetők.

### Témák és kódrészletek

A [[Témák]] vizuálisan módosítják az Obsidian felületét. A bővítményekhez hasonlóan a témák is letölthetők a közösségi könyvtárunkból. A témák a széfen belüli `.obsidian/themes` mappában találhatók.

A [[CSS kódrészletek|kódrészletek]] kis `.css` fájlok, amelyek vizuálisan módosítják az Obsidian felületének egyes részeit. Bizonyos esetekben funkcionális fejlesztéseket is hozzáadhatnak. A kódrészletek a széfen belüli `.obsidian/snippets` mappában találhatók.

## Gyakran ismételt kérdések

A fiókkezeléssel és biztonsággal kapcsolatos kérdésekért kérjük, tekintsd meg a [[Biztonsági szempontok csapatok számára#Fiókbiztonság|fiókbiztonság]] részt.

### Telepítés

**Telepíthetek licenceket több telepítésre egyszerre?**
Jelenleg nem támogatjuk a licencek telepítési szkripttel történő elosztását, például `.json` fájlon keresztül. Ha érdekel ez a funkció a csapatod számára, kérjük, küldj be egy [funkciókérést](https://forum.obsidian.md/c/feature-requests/8).

**Képes az Obsidian zárolni bizonyos funkciókat vagy konfigurációkat egy beállítás vagy alkalmazásflag segítségével?**
Jelenleg ezt a fent leírt `.obsidian` mappa vagy annak egyes fájljai és almappái szerkesztési hozzáférésének blokkolásával teheted meg. Ha érdekelnek további hozzáférés-szabályozási lehetőségek a csapatod számára, kérjük, küldj be egy [funkciókérést](https://forum.obsidian.md/c/feature-requests/8).
