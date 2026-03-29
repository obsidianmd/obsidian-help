---
permalink: publish/security
---
Kiválaszthatod, mely jegyzeteket szeretnéd publikálni az [[Bevezetés az Obsidian Publish-be|Obsidian Publish]]-ra. A többi jegyzeted biztonságban marad a széfedben.

Csak az általad publikálásra kiválasztott jegyzeteket küldi el a rendszer az Obsidian szervereire, és a publikálás visszavonásakor a jegyzeteket eltávolítja.

## Jelszóvédelem

A publish webhelyed hozzáférés-szabályozásának javítása érdekében állíts be webhely jelszót. A látogatókat jelszó megadására kéri a rendszer, amikor megpróbálnak hozzáférni. Ha később úgy döntesz, hogy eltávolítod a webhely jelszavát, az egész webhely újra nyilvánosan láthatóvá válik.

> [!warning] Az egyes publikált jegyzetek egyedi jelszóvédelme jelenleg nem támogatott.

### Webhely jelszó hozzáadása

1. A szalagon, az alkalmazásablak bal oldalán kattints a **Változások publikálása** ![[lucide-send.svg#icon]] gombra.
2. A **Változások publikálása** párbeszédablakban kattints a **Webhely beállításainak módosítása** ![[lucide-cog.svg#icon]] gombra.
3. Az **Egyéb webhely beállítások** alatt, a **Jelszavak** mellett kattints a **Kezelés** gombra.
4. Kattints az **Új jelszó** gombra.
5. A **Jelszó** mezőbe írj be egy jelszót a webhelyedhez.
6. (Opcionális) A **Becenév** mezőbe írj be egy becenevet a jelszóhoz, például annak a személynek a nevét, akinek hozzáférést szeretnél adni a webhelyhez.
7. Kattints a **Jelszó hozzáadása** gombra.

### Webhely jelszó eltávolítása

1. A szalagon, az alkalmazásablak bal oldalán kattints a **Változások publikálása** ![[lucide-send.svg#icon]] gombra.
2. A **Változások publikálása** párbeszédablakban kattints a **Webhely beállításainak módosítása** ![[lucide-cog.svg#icon]] gombra.
3. Az **Egyéb webhely beállítások** alatt, a **Jelszavak** mellett kattints a **Kezelés** gombra.
5. Kattints az X ikonra a törölni kívánt jelszó mellett.

## Adatgyűjtés
### Látogatói adatok

Alapértelmezés szerint az Obsidian Publish **nem** gyűjt látogatói adatokat, nem tárol sütiket és nem dolgoz fel személyes adatokat. Ugyanakkor implementálhatsz analitikát vagy más felhasználói adatok naplózását a [[Webhely testreszabása|webhelyed testreszabásával]].

A webhely tulajdonosaként te felelsz a GDPR és az adatvédelmi előírások betartásáért a régiódban. Ez magában foglalja a saját értesítési banner létrehozását, amely a publish.js segítségével valósítható meg, valamint egy adatvédelmi szabályzat oldal hozzáadását a webhelyedhez.

## Hozzáférés

Az Obsidian a [Cloudflare](https://www.cloudflare.com)-ral szerződik a Publish webhelyek tárhelyszolgáltatásának biztosítására. A szerverek San Franciscóban, Kaliforniában találhatók.

### Az Obsidian Publish hozzáférésének kezelése a hálózatodon

Az Obsidian Publish hozzáférésének szabályozásához a hálózatodon a következő tartományokat kell kezelned:

- Frontend: `publish.obsidian.md`
- Backend: `publish-main.obsidian.md`

Emellett a backend szolgáltatások a következő aldomaineket használják: `publish-xx.obsidian.md`, ahol `xx` egy 1 és 100 közötti szám.

> [!tip] Ha a tűzfalrendszered támogatja, javasoljuk a `publish-*.obsidian.md` engedélyezőlistára helyezését, hogy alkalmazkodj az aldomainek folyamatos bővüléséhez.
