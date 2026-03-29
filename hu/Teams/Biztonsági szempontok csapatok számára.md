---
permalink: teams/security
cssclasses:
  - soft-embed
---
A [Biztonság](https://obsidian.md/security) oldalunk összefoglalja az Obsidian adatvédelmi megközelítésével kapcsolatos információkat. Ez az oldal egyben a harmadik felek által elvégzett biztonsági auditok gyűjtőhelye is.

## Szempontok

Az Obsidian offline és önálló alkalmazásként való működésre lett tervezve. Az Obsidian támogatja az egyéni bővítményeket és témákat is. Emellett hivatalos és nem hivatalos támogatást is nyújtunk különböző fájlszinkronizálási szolgáltatásokhoz.

Ha nem tervezi közösségi bővítmények vagy témák, illetve az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync]] vagy az [[Bevezetés az Obsidian Publish-be|Obsidian Publish]] használatát, az alkalmazások biztosítására vonatkozó szokásos eljárásai elegendőek lesznek. Ha azonban ezen funkciók bármelyikét tervezi használni, javasoljuk, hogy alaposan értékelje azok alkalmasságát a munkahelyi környezetben.

## Közösségi bővítmények és témák

Kérjük, tekintse át a [[Bővítmények biztonsága]] oldalt ezen szakasz mellett.

Az Obsidian csapata áttekinti az összes, a hivatalos könyvtárba benyújtott közösségi bővítményt és témát a [kiadások adattárunkon](https://github.com/obsidianmd/obsidian-releases/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc) keresztül. Nem vizsgáljuk felül azokat a közösségi elemeket, amelyeket nem nyújtottak be a hivatalos könyvtárba.

Nem rendelkezünk közösségi áruházzal a [[CSS kódrészletek]] számára. Ezeket a fájlokat jellemzően az [Obsidian közösségen](https://obsidian.md/community) belül vagy nyilvános GitHub adattárakból szerzik be.

A CSS kódrészletekben és témákban megköveteljük az erőforrások csomagolását. Azonban kivételt tettünk a [Google Fonts](https://fonts.google.com/) esetében a mobileszközökön való teljesítmény fenntartása érdekében, ahol a betűtípusok csomagolásának hatása jobban érzékelhető.

## Hálózat és hozzáférés

Miközben az alkalmazásunk helyi-elsődleges megközelítését helyezzük előtérbe, az Obsidian hálózati hívásokat végez az Ön által használt szolgáltatások és funkciók alapján. Ezek a hálózati kapcsolatok letilthatók tartományi tűzfallal vagy alkalmazás-zárolással.

Az Obsidian ezeket a hálózati kapcsolatokat HTTPS 443-as porton végzi.

Az alábbiakban az Obsidian által létrehozott hálózati kapcsolatok listája található.

### Obsidian-eredetű kapcsolatok

- **Korai hozzáférésű frissítések**: A `releases.obsidian.md` címet használja.
- **Fiók- és licenckezelés**: Amikor a Beállításokban hozzáfér Obsidian fiókjához és kereskedelmi licencet alkalmaz, az `api.obsidian.md` címet hívjuk meg.
- **Obsidian Sync**: Jegyzetek szinkronizálására szolgál eszközök között.
	- `sync-xx.obsidian.md`, ahol az `xx` egy 01-100 közötti szám.
- **Obsidian Publish**:
    1. Backend: `publish-main.obsidian.md` és `publish-xx.obsidian.md`, ahol az `xx` egy szám.
    2. Frontend: `publish.obsidian.md`.

### GitHub-eredetű kapcsolatok

Az Obsidian hálózati kéréseket küld mind a `github.com`, mind a `raw.githubusercontent.com` címre.

- **Nyilvános kiadások**: Ha az automatikus frissítések engedélyezve vannak, az Obsidian ellenőrzi a GitHubon a nyilvános kiadásokat.
- **Harmadik féltől származó témák és bővítmények**:
    - Az alkalmazás indulási idejétől számítva 12 óránként ellenőrzés történik egy GitHubon tárolt fájl letöltésére, amelyet a „bővítmény-elavulások" kezelésére használnak. Ez a fájl segít távolról letiltani olyan bővítmények adott verzióit, amelyekről ismert, hogy hibásan működnek, adatvesztést okoznak, vagy potenciálisan sebezhetők vagy rosszindulatúak.
    - Az engedélyezett bővítmények az Obsidian és a GitHub ellenőrzésén kívüli hálózati forgalmat generálhatnak.

### Egyéb kapcsolatok

- **Beágyazott online tartalom**: Amikor olyan jegyzeteket nyit meg, amelyek online tartalmat ágyaznak be, például egy képet (`![cat](https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg)`).
- **DNS-kérések**: Ha egy gazdagépnevet fel kell oldani a kapcsolat létrehozása előtt, beleértve a DNS over HTTPS-t is. További információkért tekintse meg a [Chromium dokumentációját](https://source.chromium.org/chromium/chromium/src/+/main:net/dns/public/doh_provider_entry.cc;l=120?q=chrome.cloudflare-dns.com&ss=chromium).

## Gyakran ismételt kérdések

### Fiókbiztonság

**Támogatja az Obsidian az egyszeri bejelentkezést (SSO)?**
Az Obsidian nem támogatja az SSO-t. A legtöbb használati esetben az Obsidian nem igényel fiókot vagy bejelentkezést a munkahelyén, kivéve ha az [[Bevezetés az Obsidian Publish-be|Obsidian Publish]] vagy az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync]] szolgáltatást használja.

**Támogatja az Obsidian a többfaktoros hitelesítést (MFA)?**
Az Obsidian támogatja a [[Kétfaktoros hitelesítés|kétfaktoros hitelesítést]] (2FA) az Obsidian fiókok esetében, de nem támogatja a 2FA-t az alapalkalmazás megnyitásához és használatához. Az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync]] és az [[Bevezetés az Obsidian Publish-be|Obsidian Publish]] felhasználóinak, akiknél a 2FA engedélyezve van, meg kell erősíteniük a 2FA kulcsukat, amikor először jelentkeznek be az alkalmazásba.

### Értékelések és tanúsítványok

**Elfogadnak biztonsági értékeléseket a cégünktől?**
Minimum megrendelési összeget követelünk meg, mielőtt fontolóra vennénk egy biztonsági értékelés elvégzését. Ezek az értékelések gyakran időigényesek, és nem feltétlenül alkalmazhatók az Obsidianhoz hasonló offline alkalmazásokra, mivel jellemzően felhőalapú szolgáltatásokra vannak szabva.

Ezt a minimum megrendelési összeget áthidalhatja, ha vállalja egy előleg megfizetését. Kérjük, lépjen kapcsolatba az [[Súgó és támogatás#Kapcsolatfelvétel az Obsidian támogatással|Obsidian támogatással]], hogy érdeklődjön erről a lehetőségről.

**Rendelkeznek bármilyen elismert tanúsítvánnyal az információbiztonság vagy minőségi szabványok terén, mint például ISO27001, NIST, COBIT vagy egyéb ISO vagy CSA tanúsítványok?**
Jelenleg nem. Lehet, hogy a jövőben foglalkozunk ezzel, de egyelőre a [biztonsági auditokra](https://obsidian.md/security) összpontosítunk.
