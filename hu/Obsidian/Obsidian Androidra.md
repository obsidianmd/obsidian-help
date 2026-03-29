---
permalink: android
---
Az Android Obsidian mobilalkalmazás hatékony jegyzetelési képességeket kínál Android eszközödön. Letöltheted a [Google Play](https://play.google.com/store/apps/details?id=md.obsidian) áruházból vagy [APK fájlként](https://obsidian.md/download).
Android 5.1 és újabb verziókat támogat.

Ez az oldal az Android-specifikus funkciókat ismerteti, beleértve a widgeteket, a Gyorsbeállítások integrációt és a parancsikonokat.

## Szinkronizálás

A jegyzetek Obsidiannal való szinkronizálásához Androidon lásd: [[Jegyzetek szinkronizálása eszközök között]].

## Széf helye

Amikor elindítod az Obsidiant Androidon, a rendszer megkérdezi, hol szeretnéd tárolni a széf adatait. Választhatsz az **eszköztárhely** (ajánlott) vagy az **alkalmazástárhely** között.

### Eszköztárhely

Az **eszköztárhely** lehetőség esetén az adataid az eszközöd megosztott tárhelyén tárolódnak. Ez lehetővé teszi, hogy az Obsidian széfedet más alkalmazások és szolgáltatások is elérhessék, például külső féltől származó [[Jegyzetek szinkronizálása eszközök között|szinkronizációs]] eszközök.

Ez az ajánlott lehetőség, mivel jobb kompatibilitást kínál a szinkronizációs eszközökkel, és biztosítja, hogy az adataid az alkalmazás eltávolítása után is megmaradjanak. Ehhez a lehetőséghez azonban további engedélyek szükségesek az eszköz fájljainak eléréséhez.

Az Android korlátai miatt az Obsidian „Minden fájl" hozzáférést kér a megbízható működéshez. A Google ezt ajánlja az Obsidianhoz hasonló alkalmazásoknak, amelyek „dokumentumkezelő alkalmazásoknak" minősülnek. [További információk](https://developer.android.com/training/data-storage/manage-all-files).

Az alkalmazás ezt az engedélyt kizárólag arra használja, hogy segítsen elérni az adataidat az eszközödön. Az adataid számunkra soha nem hozzáférhetők. Ha többet szeretnél megtudni arról, hogyan védjük az adataidat és biztosítjuk a magánéletedet, látogasd meg [Biztonság oldalunkat](https://obsidian.md/security).

### Alkalmazástárhely

Az **alkalmazástárhely** lehetőség esetén az adataid az Obsidian privát alkalmazástárhelyén tárolódnak. Ez az adataidat elkülöníti más alkalmazásoktól a nagyobb adatvédelem érdekében.

Ez jó választás, ha nem használsz külső szinkronizációs eszközöket, és szorosabb alkalmazásszintű elkülönítést szeretnél a jegyzeteid számára.

Ezzel a lehetőséggel használhatod az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync]]-et és a [[Közösségi bővítmények]]en keresztül elérhető külső szinkronizációs bővítményeket, de nem használhatsz olyan eszközöket, mint a Syncthing, amelyek megosztott tárhelyre támaszkodnak.

> [!warning] Az Obsidian eltávolítása törli a helyi jegyzeteidet, ha alkalmazástárhelyet használsz
> Ha az **Alkalmazástárhely** lehetőséget használod, a helyi széf adatai törlődnek az alkalmazás eltávolításakor. A más eszközökön lévő Obsidian széf adatai nem törlődnek.

## Widgetek

Az Android Obsidian számos widget-lehetőséget kínál a széfek és jegyzetek gyors eléréséhez a kezdőképernyőről. Az elérhető widgetek:

- **Jegyzet megnyitása** — Egy adott jegyzet megnyitása
- **Új jegyzet** — Új jegyzet létrehozása
- **Keresés** — Keresési lekérdezés indítása
- **Napi jegyzet** — A napi jegyzet megnyitása
- **Obsidian megnyitása** — Az alkalmazás indítása

> [!note] Megjegyzés
> Ezek a widgetek statikusak, és nem mutatnak előnézetet a kiválasztott jegyzetről vagy széfről.

Widgetek hozzáadása a kezdőképernyőhöz:
1. Érintsd meg hosszan a kezdőképernyő bármely pontját
2. Válaszd a „Widgetek" lehetőséget
3. Keresd meg az Obsidiant, majd válaszd ki a használni kívánt widgetet.

> [!note] Megjegyzés
> Az Obsidian widgetek átméretezhetők. Widget átméretezéséhez érintsd meg hosszan, majd húzd az átméretező fogantyúkat.

Több azonos típusú widgetet is hozzáadhatsz különböző fájlok megnyitásához vagy különböző keresési lekérdezések indításához.

Egy widget konfigurálásához érintsd meg hosszan a kezdőképernyőn, majd keresd a „Szerkesztés" vagy „Konfigurálás" lehetőséget. Itt megadhatod az adott widget érintéskori műveletéhez szükséges paramétereket, például a fájlt vagy útvonalat, a keresési lekérdezést és a széf nevét.

További információkért az Android widgetekről lásd ezt a [Google támogatási cikket](https://support.google.com/android/answer/9450271?hl=en).

## Gyorsbeállítások csempék

Android 7.0 vagy újabb szükséges.

Adj hozzá Obsidian Gyorsbeállítások csempét az alkalmazás gyors eléréséhez az értesítési sávból. A kezdőképernyőn és a zárolási képernyőn is működik.

> [!note] Megjegyzés
> Az alkalmazás widgetekkel ellentétben azonos típusú Gyorsbeállítások csempéből csak egyet adhatsz hozzá.

Gyorsbeállítások csempe hozzáadása az értesítési sávhoz:

1. Nyisd meg az értesítési sávot, általában az állapotsorról lefelé húzással. Megjegyzés: előfordulhat, hogy még egyszer le kell húznod a további lehetőségek megtekintéséhez.
2. A Gyorsbeállítások csempéknél válaszd a „Szerkesztés" lehetőséget – ez általában ugyanabban a szekcióban található, ahol a Wi-Fi, Bluetooth és Tájolászár kapcsolók vannak.
3. Keresd meg és válaszd ki az Obsidian Gyorsbeállítások csempét, majd rendezd el tetszés szerint.
4. Egy Gyorsbeállítások csempe konfigurálásához érintsd meg hosszan a konfigurációs képernyő megjelenítéséhez.

További információkért az Android Gyorsbeállításokról lásd ezt a [Google támogatási cikket](https://support.google.com/android/answer/9083864?hl=en).

## Parancsikonok

Android 7.1 vagy újabb szükséges.

Az Obsidian alkalmazás-parancsikonokat biztosít, amelyek többféleképpen elérhetők:

- Az Obsidian alkalmazásikon hosszú megérintésével
- A parancsikon ikonjának a kezdőképernyőre húzásával
- A keresősávon keresztül az indítóban (a legtöbb eszközgyártónál elérhető)

Elérhető parancsikonok:

- **Jegyzet megnyitása** — Egy adott jegyzet megnyitása a széfben
- **Napi jegyzet** — Ugrás közvetlenül a mai napi jegyzetre

> [!note] Megjegyzés
> Az Obsidian 1.11 parancsikonjai nem konfigurálhatók, és a későbbi verziókban átdolgozásra kerülnek, hogy dinamikusabb, a jegyzeteidre szabott lehetőségeket kínáljanak.
