---
permalink: style-guide
publish: true
mobile: true
description: Ez az oldal a támogatási dokumentáció írásához használt stíluskalauzunkat ismerteti.
---
Az Obsidian dokumentáció az ezen az oldalon felsorolt stílusirányelveket követi. Ezek az irányelvek iparági bevált gyakorlatokon alapulnak, különösen a [Google fejlesztői dokumentáció stílus útmutatóján](<https://developers.google.com/style>) és a [Microsoft stílus útmutatón](https://learn.microsoft.com/en-us/style-guide/). Az alábbiakban nem tárgyalt speciális esetekben másodlagos hivatkozásként tekintse meg ezeket a külső útmutatókat.

> [!tip]- Közreműködés
> A dokumentáció nagy része még a stílus útmutató létrejötte előtt készült.
> 
> Ha bármilyen eltérést talál ettől a stílus útmutatótól, kérjük, [hozzon létre egy hibajegyet](https://github.com/obsidianmd/obsidian-docs/issues/new) és küldjön be egy pull requestet az [obsidianmd/obsidian-docs](https://github.com/obsidianmd/obsidian-docs) repóba.

## Terminológia és nyelvtan

### Nyelvi stílus

Az angol nyelvű dokumentációnkhoz a [Global English](https://docs.openedx.org/en/latest/documentors/references/doc_english_writing.html) használata javasolt, hogy jobban szolgáljuk világszerte jelenlévő közönségünket és segítsük a [[#Fordítások]]at. Ez a következőket jelenti:

- Kerülje az idiómákat és a kulturálisan specifikus kifejezéseket
- Használjon aktív igealakot és közvetlen mondatszerkesztést
- Részesítse előnyben az egyszerű, gyakori szavakat a bonyolult terminológiával szemben
- Legyen explicit az implicit helyett
- A helyesírási konvenciók tekintetében használjon amerikai angolt (pl. 'organize', nem 'organise').

### Kifejezések

- Részesítse előnyben a „billentyűparancs" („keyboard shortcut") kifejezést a „gyorsbillentyű" („hotkey") helyett. A gyorsbillentyű kifejezést akkor használja, ha a konkrét funkcióra utal.
- Mobilon az „Obsidian alkalmazás", asztalon az „Obsidian alkalmazás" kifejezést használja.
- Részesítse előnyben a „szinkronizálás" („sync" vagy „syncing") kifejezést a „szinkronizálás" („synchronise" vagy „synchronising") helyett.
- Részesítse előnyben a „keresőkifejezés" („search term") kifejezést a „keresési lekérdezés" („search query") helyett.
- Részesítse előnyben a „fejléc" („heading") kifejezést a „fejléc" („header") helyett, amikor egy szekciót bevezető szövegre utal.
- Részesítse előnyben a „maximum" („maximum") kifejezést a „max" („max") és a „minimum" („minimum") kifejezést a „min" („min") helyett.

### Terméknevek

Az Obsidian terméknevei „Obsidian"-nal kezdődnek, például „Obsidian Publish" és „Obsidian Sync".

Ha egy bekezdés túlzottan ismétlődővé válik, a későbbi hivatkozásokban használhatja a rövid formát.

Például:

_Az eszközspecifikus konfiguráció lehetővé tételéhez az Obsidian Sync nem szinkronizálja a saját beállításait. A Sync-et minden eszközén külön kell konfigurálnia._

### Kezelőfelület és interakciók

- Használjon **félkövér** betűtípust a gombok szövegének jelöléséhez
- Részesítse előnyben a „válassza ki" kifejezést a „koppintson" vagy „kattintson" helyett.
	- Mobilspecifikus utasításoknál a „koppintson" elfogadható érintéses interakciók leírásánál, mivel a „kattintson" nem elérhető.
- Részesítse előnyben az „oldalsáv" kifejezést a „oldal sáv" helyett.
- Részesítse előnyben a „hajtsa végre" kifejezést a „hívja meg" és „futtassa" helyett, amikor parancsokra vagy műveletekre utal.

Ha több kezelőfelületi interakcióra hivatkozik egymás után, használja a → (U+2192) szimbólumot. Például: „**[[Beállítások]] → Közösségi bővítmények**".

### Jegyzetek, fájlok és mappák

- Használja a „jegyzet" kifejezést, amikor a széfben lévő Markdown fájlra utal.
- Használja a „fájl" kifejezést, amikor a Markdown-on kívüli más fájlkiterjesztésekre utal.
- Részesítse előnyben a „jegyzet neve" kifejezést a „jegyzet címe" helyett.
- Részesítse előnyben az „aktív jegyzet" kifejezést a „jelenlegi jegyzet" helyett.
- Részesítse előnyben a „mappa" kifejezést a „könyvtár" helyett.
- Részesítse előnyben a „fájltípus" kifejezést a „fájlformátum" helyett, kivéve ha kifejezetten a fájl tartalmának adatformátumára utal.

A jegyzetek közötti mozgásnál használja a „megnyitás" kifejezést, ha a cél rejtett, és a „váltás" kifejezést, ha mind a forrás-, mind a céljegyzet nyitva van külön felosztásokban.

### Beállítások referencia dokumentációja

Amikor lehetséges, a beállításokat magán az Obsidianon belül kell dokumentálni leíró szöveggel. Kerülje egy adott beállítás dokumentálását az Obsidian Súgóban, kivéve ha:

- Mélyebb ismereteket igényel a használatával és használatának időpontjával kapcsolatban.
- Gyakran félreértik vagy kérdeznek róla.
- _Drasztikusan_ megváltoztatja a felhasználói élményt.

Fontolja meg egy tipp felhívás használatát, ha fel szeretné hívni a figyelmet egy adott beállításra.

### Irányjelölő kifejezések

Kötőjelezze az irányjelölő kifejezéseket, amikor melléknévként használja őket. Kerülje a kötőjelezést, amikor az irány főnévként szerepel.

**Ajánlott:**

- Válassza ki a **[[Beállítások]]**-t a bal alsó sarokban.
- Válassza ki a **[[Beállítások]]**-t a bal alsó részen.

**Nem ajánlott:**

- Válassza ki a **[[Beállítások]]**-t a bal alsó sarokban. (kötőjelezés nélkül)
- Válassza ki a **[[Beállítások]]**-t a bal-alsó részen. (kötőjelezve főnévként)

Részesítse előnyben a „bal felső" és „jobb felső" kifejezéseket a „bal felső" és „jobb felső" alternatívákkal szemben.

Ne jelöljön irányt a beállításokra való hivatkozáskor. A beállítások vezérlőelemének helye az eszköztől függ.

**Ajánlott:**

- A **Távoli trezor kiválasztása** mellett válassza a **Kiválasztás** lehetőséget.

**Nem ajánlott:**

- A **Távoli trezor kiválasztása** jobb oldalán válassza a **Kiválasztás** lehetőséget.

Amikor függőleges irányt ír le kezelőfelületi elemeknél, használja a „fölött" és „alatt" kifejezéseket térbeli viszonyokhoz. Kerülje a „fent" és „lent" kifejezéseket, mert különböző kontextusokban félreérthetők.

**Ajánlott:**

- A keresőmező a fájllista fölött jelenik meg.
- További lehetőségek érhetők el alább.

**Nem ajánlott:**

- A keresőmező fentebb van a fájllistánál.
- Több lehetőség van lejjebb.

### Utasítások

Használjon felszólító módot az útmutatók neveihez, szekciófejlécekhez és lépésről lépésre szóló utasításokhoz. A felszólító mód tömör és cselekvésorientált, ami egyértelműbb az utasításokat követő felhasználók számára.

- Részesítse előnyben a „Beállítás" kifejezést a „Beállítása" helyett
- Részesítse előnyben a „Fájl áthelyezése" kifejezést a „Fájl áthelyezésének módja" helyett
- Részesítse előnyben a „Jegyzetek importálása" kifejezést a „Jegyzetek importálásának módja" helyett

### Mondatkezdő nagybetű

Részesítse előnyben a *mondatkezdő nagybetűt* a *címstílusú nagybetűvel* szemben fejlécek, gombok és címek esetén. Kezelőfelületi elemekre való hivatkozáskor mindig egyeztesse a nagybetűket a kezelőfelületen megjelenő szöveggel.

**Ajánlott:**

- Hogyan tárolja az Obsidian az adatokat

**Nem ajánlott:**

- Hogyan Tárolja Az Obsidian Az Adatokat

### Példák

Részesítse előnyben a valósághű példákat az értelmetlen kifejezésekkel szemben.

**Ajánlott:**

- `task:(hívás OR ütemezés)`

**Nem ajánlott:**

- `task:(izé OR bigyó)`

### Billentyűnevek és billentyűparancsok

A billentyűkre és billentyűparancsokra való hivatkozáskor használjon egységes jelölést.

**Egyedi billentyűnevek:**

Amikor a billentyűzet egy karakterére név szerint hivatkozik, adja meg a karaktert zárójelben közvetlenül a név után.

**Ajánlott:**

- Nyomja meg a kötőjel (-) billentyűt egy gondolatjel hozzáadásához.
- Használja a kérdőjelet (?) a kereséshez.

**Nem ajánlott:**

- Nyomja meg a kötőjel billentyűt egy gondolatjel hozzáadásához.
- Használja a ? jelet a kereséshez.
- Adjon hozzá egy `-` jelet a szó elé.

**Billentyűparancsok:**

Formázza a billentyűparancsokat szóközök nélkül a pluszjel körül. Ha egy billentyűparancs eltér az operációs rendszerek között, adja meg mindkettőt.

**Ajánlott:**

- Nyomja meg a `Ctrl+Z` (Windows) vagy `Command+Z` (macOS) billentyűkombinációt a visszavonáshoz.
- Nyomja meg az `Escape` billentyűt az ablak bezárásához.
- Használja a `Tab` billentyűt a mezők közötti mozgáshoz.

**Nem ajánlott:**

- Nyomja meg a `Cmd+Z` billentyűt a visszavonáshoz.
- Nyomja meg a `Ctrl + Z` (szóközökkel) billentyűt a visszavonáshoz.
- Nyomja meg a `Ctrl/Cmd+Z` billentyűt a visszavonáshoz.

Azoknál a billentyűparancsoknál, amelyek minden platformon azonosak, nem kell megadnia az operációs rendszert. Ha nem biztos benne, hogy egy billentyűparancs eltér-e platformonként, a biztonság kedvéért adja meg az operációs rendszert. A Windows és a Linux jellemzően ugyanazokat a billentyűparancsokat használja.

### Markdown

Használjon üres sorokat a Markdown blokkok között:

**Ajánlott:**

```md
# 1. fejléc

Ez egy szekció.

1. Első elem
2. Második elem
3. Harmadik elem
```

**Nem ajánlott:**

```md
# 1. fejléc
Ez egy szekció.
1. Első elem
2. Második elem
3. Harmadik elem
```

**Nagykötőjelek listákban:**

Használjon nagykötőjeleket (—) a félkövér kifejezések és leírásaik elválasztására felsoroláslistákban. Ne használjon nagykötőjeleket egyszerű beágyazott felsoroláslistákban hivatkozásokkal.

**Ajánlott:**

- **Nézet menü** — nézetek létrehozása, szerkesztése és váltása.
- **Értékek kiszámítása** — árak hozzáadása, összegek kiszámítása vagy matematikai műveletek végrehajtása.

**Nem ajánlott:**

- [[Bázis létrehozása]] — Ismerje meg, hogyan hozhat létre és ágyazhat be egy bázist.

### Képek

Használja a „**szélesség** x **magasság** pixel" formátumot a kép- vagy képernyőméretek leírásához.

**Példa:**

Ajánlott képméretek: 1920 x 1080 pixel.

## Információs struktúra

### Felhívás típusok

Használjon felhívásokat stratégiailag az adott típusú információk kiemeléséhez:

**Tipp** (`[!tip]-`) – Praktikus tanácsok vagy bevált gyakorlatok, amelyek javítják a felhasználó munkafolyamatát. Használja billentyűparancsokhoz, megoldásokhoz vagy nem alapvető, de hasznos információkhoz. Ezek a felhívások alapértelmezetten összecsukva jelennek meg.

**Információ** (`[!info]+`) – További kontextus, háttérinformáció vagy pontosítások. Használja, ha az információ segíti a megértést, de nem szükséges egy feladat elvégzéséhez. Ezek a felhívások alapértelmezetten kibontva jelennek meg.

**Figyelmeztetés** (`[!warning]+`) – Fontos óvintézkedések, amelyek megakadályozzák az adatvesztést, hibákat vagy nem kívánt következményeket. Használja takarékosan, valóban kockázatos helyzetekhez. Ezek a felhívások soha nem lehetnek összecsukva.

**Példa** (`[!example]-`) – Általános megjegyzések vagy kiegészítő részletek. Használja mellékleges információkhoz, amelyeket egyes felhasználók relevánsnak találhatnak. Ezek a felhívások alapértelmezetten összecsukva jelennek meg.

**Példák:**
```md
> [!tip]- Használjon billentyűparancsokat
> Felgyorsíthatja a munkafolyamatát a leggyakrabban használt billentyűparancsok memorizálásával.

> [!info]+ Ez egy fizetős kiegészítő
> Ennek a funkciónak a használatához fizetős előfizetés szükséges.

> [!warning]+ Ez a művelet nem vonható vissza
> A széf törlése végleges. Fontolja meg a jegyzetek exportálását előtte.

> [!example]- Haladó használat
> Ezt a beállítást a Gráf menün keresztül is konfigurálhatja.
```

### Listák vs. folyó szöveg

Használjon listákat, amikor különálló elemeket mutat be, amelyek között nincs erős sorrendi vagy oksági összefüggés. Használjon folyó szöveget és bekezdéseket, amikor az elemek egymásra épülnek, magyarázatot igényelnek, vagy narratív megközelítés előnyösebb.

**Használjon listát a következőkhöz:**
- Nem kapcsolódó funkciók halmaza
- Telepítési követelmények
- Konfigurációs lehetőségek
- Hibaelhárítási lépések

**Használjon folyó szöveget a következőkhöz:**
- Annak magyarázata, hogyan működik valami
- Függőségekkel rendelkező munkafolyamatok
- Fogalmi áttekintések
- Kontextust igénylő útmutatás

### Táblázatok

Használjon táblázatokat funkciók, verziók vagy kapcsolódó adatpontok összehasonlítására, ahol az igazítás segíti a megértést. Kerülje a táblázatokat egyszerű listák vagy egyoszlopos adatok esetén.

**Jó felhasználási eset:**

| Funkció | Mobil | Asztali |
|---------|-------|---------|
| Sync | Igen | Igen |
| Bővítmények | Nem | Igen |
| Témák | Korlátozott | Teljes |

### Kereszthivatkozások

Használjon belső wikihivatkozásokat (`[[Jegyzet neve]]`) bőségesen, hogy segítse a felhasználókat a kapcsolódó témák közötti navigálásban. Azonban kerülje a túlzott hivatkozást:

- Ne hivatkozza ugyanazt a kifejezést többször egyetlen oldalon
- Csak akkor hivatkozzon, ha a hivatkozott oldal jelentős további kontextust nyújt
- Használjon leíró hivatkozásszöveget, ha az segít: `[[Jegyzet neve#Szekció|leíró szöveg]]`

**Példa:**

Első említés: „Ismerje meg az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync]]-et, hogy széfjét naprakészen tartsa eszközei között."
Későbbi említés: „A Sync-et minden eszközön külön konfigurálhatja."

### Platformspecifikus tartalom

Amikor olyan funkciókat dokumentál, amelyek eltérnek a platformok között, használjon szekciófejléceket a tartalom rendszerezéséhez.

Használja az `Asztali` és `Mobil` kifejezéseket alfejlécekként a platformspecifikus utasítások vagy funkciók elkülönítéséhez.

**Ajánlott:**
```md
## A szalag testreszabása

### Asztali

Az asztali verzióban a szalagot a következőképpen szabhatja testre:

- Rendezze át a szalagműveletek sorrendjét az ikonok húzásával.
- Az egyes műveletek elrejtéséhez kattintson jobb gombbal egy üres területre, és törölje a jelölést az elrejteni kívánt műveleteknél.

### Mobil

A mobil verzióban a szalagot a beállításokon keresztül szabhatja testre:

1. Nyissa meg a **[[Beállítások]]**-t.
2. Navigáljon a **Megjelenés** menüponthoz.
3. Kattintson a **Kezelés** lehetőségre a **Szalagmenü** alatt.
```

> [!info]+ Mikor hozzunk létre külön szekciókat?
> Csak akkor hozzon létre külön szekciókat, ha a tartalom jelentősen eltér. Ha az utasítások nagyrészt azonosak kisebb eltérésekkel, használjon soron belüli megjegyzéseket.

## Ikonok és képek

Használjon ikonokat és képeket, ha megkönnyítik a szavakkal nehezen leírható dolgok magyarázatát, vagy ha az Obsidian alkalmazás fontos részeit kell bemutatnia. A képeket a `Attachments` mappában mentheti el.

- A képnek könnyebben érthetővé kell tennie a hozzá tartozó szöveget.

 **Példa**: Az engedélyezés után a [[Szavak száma]] bővítmény új bejegyzést hoz létre az alsó állapotsorban.
 
![[Style-guide-zoomed-example.png#interface|300]]

- A képeknek `.png` vagy `.svg` formátumúnak kell lenniük.
- Ha egy kép túl nagynak tűnik a jegyzetben, kicsinyítse le az Obsidianon kívül, vagy módosítsa a méreteit a [[Fájlok beágyazása#Kép beágyazása egy jegyzetbe|kép beágyazása egy jegyzetbe]] leírás szerint.
- Ritka esetekben különösen nagy vagy összetett képeket [[Felhívások#Összecsukható felhívások|összecsukott felhívásba]] helyezhet.
- Felugró ablakok vagy modális ablakok esetén a képen az Obsidian alkalmazás teljes ablakát kell mutatnia.
 ![[Style-guide-modal-example.png#interface]]

### Ikonok

[Lucide](https://lucide.dev/icons/) és egyéni Obsidian ikonok használhatók részletes elemek mellett egy funkció vizuális megjelenítéséhez.

**Példa:** A bal oldali szalagon válassza az **Új vászon létrehozása** ![[lucide-layout-dashboard.svg#icon]] lehetőséget, hogy vásznat hozzon létre az aktív fájllal azonos mappában.

**Irányelvek az ikonokhoz**

- Tárolja az ikonokat az `Attachments/icons` mappában.
- Adja hozzá a `lucide-` előtagot a Lucide ikon neve elé.
- Adja hozzá az `obsidian-icon-` előtagot az Obsidian ikon neve elé.

**Példa:** Az új vászon létrehozásához tartozó ikont `lucide-layout-dashboard` néven kell elnevezni.

- Használja az elérhető SVG verziójú ikonokat.
- Az ikonok `18` pixel szélesek, `18` pixel magasak legyenek, és `1.5` vonalszélességűek. Ezeket a beállításokat az SVG adatokban módosíthatja.

> [!info]- Méret és vonalszélesség módosítása egy SVG-ben
> ```html
> <svg xmlns="http://www.w3.org/2000/svg" width="WIDTH" height="HEIGHT" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="STROKE-WIDTH" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
>```

- Használja az `icon` horgonyt a beágyazott képeknél, hogy az ikon körüli térközt úgy állítsa be, hogy szépen illeszkedjen a környező szöveghez.
- Az ikonokat zárójelek vegyék körül. ![[lucide-cog.svg#icon]]

**Példa**: `![[lucide-cog.svg#icon]]`

### Kép horgonycímkék

Kép horgonycímkék állnak rendelkezésre a beágyazott képek dekoratív módosításaihoz.

> [!warning] Élő előnézet figyelmeztetés
> Az ikon horgonycímkék nem jelennek meg helyesen az **Élő előnézetben.** Használja az **Olvasási nézet**et annak megerősítéséhez, hogy a horgonycímke alkalmazásra került.

**Ikon**

`![[lucide-menu.svg#icon]]`

Az ikon horgonycímke biztosítja a helyes függőleges igazítást a kezelőfelületi elemek jelzésére használt ikonok esetében.

Az első menüikon a horgonycímkét használja ![[lucide-menu.svg#icon]], míg a második menüikon ( ![[lucide-menu.svg]] ) nem.

**Felület**

`![[Vault picker.png#interface]]`

A felület horgonycímke dekoratív dobozárnyékot ad a kép köré. Az első képen a felület horgonycímke alkalmazva van.
![[Vault picker.png#interface]]
Ezzel szemben a második képen nincs alkalmazva a felület horgony.

![[Vault picker.png]]

**Körvonal**

`![[Backlinks.png#outline]]`

A körvonal horgonycímke finom szegélyt ad a kép köré. Az első képen a körvonal horgonycímke alkalmazva van.

> [!tip] Figyelje meg a kép bal alsó sarkát a különbség észrevételéhez.

![[Backlinks.png#outline]]

A második képen hiányzik a körvonal horgonycímke.

![[Backlinks.png]]

### Optimalizálás

A képek lassítják az oldal betöltési idejét és értékes [[Bevezetés az Obsidian Publish-be|Publish]] tárhelyet foglalnak. A képek optimalizálása lehetővé teszi a fájlméret csökkentését, miközben megőrzi a kép vizuális integritását.

Mind a képeket, mind az ikonokat optimalizálni kell.

> [!info] Eszközök a képek optimalizálásához
> Íme néhány ajánlott program a képek méretének csökkentéséhez.
> - **Windows:** [FileOptimizer](https://sourceforge.net/projects/nikkhokkho/)
> - **macOS:** [ImageOptim](https://imageoptim.com/)
> - **Linux/Unix** [Trimage](https://trimage.org)
> 
> 65-75%-os optimalizálási arányt ajánlunk.

## Elrendezés

### Hibás hivatkozások

A Pull Request benyújtása előtt kérjük, ellenőrizze a hibás hivatkozásokat azon fordítás dokumentációjában, amelyen dolgozik, és javítsa ki őket. A hibás hivatkozások természetesen keletkezhetnek az idő múlásával, ezért a pontosságuk ellenőrzése segít fenntartani a dokumentáció minőségét.

A hibás hivatkozásokat [[Közösségi bővítmények]] vagy az IDE-jében elérhető eszközök segítségével ellenőrizheti.

### Leírások

Ezt a dokumentációt a GitHubon szerkesztik és az [[Bevezetés az Obsidian Publish-be|Obsidian Publish]] segítségével teszik közzé online, amely [[Közösségi média hivatkozás-előnézetek#Leírás|leírásokat]] tartalmaz a közösségi kártyákhoz és más [[SEO]] elemekhez.

Ha az oldal, amelyen dolgozik, nem rendelkezik `description` [[Tulajdonságok|tulajdonsággal]], kérjük, adjon hozzá egyet. A leírás legfeljebb 150 karakter legyen, és az oldal tartalmának objektív összefoglalóját adja.

**Jó**: Ismerje meg, hogyan hozhat létre sablonokat, amelyek automatikusan rögzítik és rendszerezik a weboldalak metaadatait a Web Clipper segítségével.
**Finomítható**: Ismerje meg, hogyan hozhat létre olyan sablonokat, amelyek automatikusan rögzítik és rendszerezik a weboldalakról származó metaadatokat az Web Clipper segítségével.

### Irányok

Amikor [[#Utasítások]]at ír vagy ír át az alkalmazáson belüli műveletek végrehajtásáról, feltétlenül adjon meg lépéseket mind a mobil, mind az asztali verzióhoz.

Ha nem rendelkezik hozzáféréssel mobil vagy asztali eszközhöz, kérjük, jelezze ezt a Pull Request benyújtásakor.

## Fordítások

A fordítás elkészítésekor fordítsa le a tartalom egészét. Ez magában foglalja, de nem korlátozódik a következőkre:

- Jegyzetnevek
- Mappanevek
- Alternatív nevek
- Csatolmányok nevei
- Alternatív hivatkozásszöveg
