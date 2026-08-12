---
permalink: import/onenote
---
Az Obsidian segítségével könnyedén áttelepítheted jegyzeteidet a Microsoft OneNote-ból az [[Importáló|Importáló bővítmény]] használatával. Ez a OneNote adataidat tartós Markdown fájlokká alakítja, amelyeket az Obsidiannal és sok más alkalmazással is használhatsz.

Az Obsidian két módot kínál a OneNote adatok importálásához:

1. **Microsoft-fiók** – bejelentkezel a Microsoft-fiókodba, és importálod a OneDrive-ra szinkronizált jegyzetfüzeteket. Internetkapcsolat szükséges.
2. **Fájl importálás** – a OneNote exportfájljait (`.onepkg` és `.one`) használja. Nem igényel fiókot vagy internetkapcsolatot, és működik olyan jegyzetfüzetekkel is, amelyek soha nem voltak szinkronizálva.

## Importálás Microsoft-fiókból

> [!Warning]
> Csak a fiókod tulajdonában lévő jegyzetfüzetek importálhatók. Mások által veled megosztott jegyzetfüzetek nem támogatottak, és munkahelyi vagy iskolai fiókok esetében szükség lehet a szervezeted jóváhagyására.

Szükséged lesz a hivatalos Obsidian [[Importáló]] bővítményre, amelyet [itt telepíthetsz](obsidian://show-plugin?id=obsidian-importer).

1. Nyisd meg a **[[Beállítások]]** menüt.
2. Lépj a **Közösségi bővítmények** részhez, és [telepítsd az Importálót](obsidian://show-plugin?id=obsidian-importer).
3. Engedélyezd az Importáló bővítményt.
4. Nyisd meg az **Importáló** bővítményt a parancspaletta vagy a szalag ikon segítségével.
5. A **Fájlformátum** alatt válaszd a **Microsoft OneNote** lehetőséget.
6. Kattints a **Belépés** gombra, hogy megnyisd a böngészőben a Microsoft bejelentkezési oldalát. Add meg a OneNote jegyzetfüzeteidet tartalmazó Microsoft-fiókod hitelesítő adatait. A Microsoft bejelentkezési folyamatról további információk alább találhatók.
7. Kattints az **Elfogadás** gombra, hogy engedélyezd az Obsidian számára a OneNote jegyzetfüzeteid megtekintését.
8. Kattints a **Hivatkozás megnyitása** gombra, hogy a böngésző átirányítson az Obsidian alkalmazásba.
9. Az Obsidian alkalmazásban az Importáló párbeszédpanel most azt jeleníti meg, hogy be vagy jelentkezve, és felsorolja a OneNote jegyzetfüzeteidet és szakaszaidat. Jelöld be az importálni kívánt szakaszokat.
10. Kattints az **Importálás** gombra, és várj, amíg az importálás befejeződik.
11. Kész is!

Ha a jegyzetfüzeteid munkahelyi vagy iskolai fiókhoz tartoznak, a OneNote megtagadhatja a bővítmény hozzáférését a bejelentkezés után. Ebben az esetben egy **Munkahelyi vagy iskolai hozzáférés használata** gomb jelenik meg a **Kijelentkezés** mellett. Használd ezt az újbóli bejelentkezéshez az ilyen fiókok által igényelt bővebb jogosultságokkal. Előfordulhat, hogy a szervezetednek jóvá kell hagynia ezt a jogosultságot, mielőtt működne.

### Hibaelhárítás

#### Nem jelennek meg szakaszok vagy jegyzetfüzetek

Győződj meg arról, hogy az importálni kívánt jegyzetfüzetek szinkronizálva vannak a OneDrive-ra, és láthatók a OneNote Weben. A jegyzetfüzeteknek a te tulajdonodban kell lenniük (mások által írt megosztott jegyzetfüzetek nem támogatottak).

Ha egy adott szakasz hiányzik, győződj meg arról, hogy nem zárolt szakaszról van szó, mivel ezek láthatatlanok a zárolás eltávolítása nélkül.

Ha munkahelyi vagy iskolai jegyzetfüzetről van szó, lásd a fenti megjegyzést a **Munkahelyi vagy iskolai hozzáférés használata** gombról.

#### Az importált jegyzetek üresek vagy hiányzik a tartalom

Ez a probléma ritkán használt jegyzetfüzeteknél fordulhat elő. A probléma megoldásához kövesd az alábbi lépéseket:

1. Nyisd meg a [OneNote Webet](https://onenote.com/notebooks) a böngésződben.
2. **Kattints jobb gombbal** a hiányzó tartalmú jegyzetfüzetekre.
3. Válaszd a menüből a **Jegyzetfüzet exportálása** lehetőséget.
4. **Csomagold ki** a letöltött fájlt egy mappába.
5. Töltsd fel a OneNote jegyzetfüzeteidet [ide](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Nyisd meg az **Obsidian Importálót**, és próbáld meg újra az importálást.

Ha követted ezeket a tippeket, és a probléma továbbra is fennáll, lehetséges, hogy átmeneti probléma van a Microsoft szervereivel. Ebben az esetben várj néhány percet, és próbáld újra. Ha a probléma továbbra is fennáll, kérjük, nyiss egy hibajegyet az [Obsidian Importer GitHub adattárában](https://github.com/obsidianmd/obsidian-importer/issues).

## OneNote fájlok importálása (.one, .onepkg)

A fájl importálás egy alternatív módja a OneNote adataid importálásának. A OneNote saját exportfájljait olvassa be, így nem igényel Microsoft-fiókot és internetkapcsolatot sem. Használd olyan jegyzetfüzetekhez, amelyek csak a számítógépeden vannak tárolva, amelyekhez a fiókod nem fér hozzá, vagy ha inkább nem szeretnél bejelentkezni.

### Jegyzetfüzetek exportálása a OneNote-ból

Javasoljuk, hogy minden jegyzetfüzetet **OneNote-csomagként** (`.onepkg`) exportálj. Egy csomag tartalmazza a jegyzetfüzet összes szakaszát, így egyetlen lépésben exportálhatod és importálhatod a jegyzetfüzetet, az Importáló pedig felsorolja a szakaszokat, amelyek közül választhatsz.

Az exportálás csak a **OneNote for Windows** asztali alkalmazásban érhető el, amely a Microsoft 365 része. A Mac-es OneNote alkalmazás és a régebbi OneNote for Windows 10 alkalmazás nem tud ezekbe a formátumokba exportálni.

1. Nyisd meg az exportálni kívánt jegyzetfüzetet a OneNote for Windows alkalmazásban.
2. Lépj a **Fájl → Exportálás** menüpontra.
3. Az **Aktuális exportálása** alatt válaszd a **Jegyzetfüzet** lehetőséget.
4. A **Formátum kiválasztása** alatt válaszd a **OneNote-csomag (\*.onepkg)** lehetőséget.
5. Kattints az **Exportálás** gombra, és válaszd ki a mentés helyét.
6. Ismételd meg minden importálni kívánt jegyzetfüzettel.

Ha egyetlen szakaszt szeretnél exportálni, a 3. lépésben válaszd a **Szakasz** lehetőséget, a 4. lépésben pedig a **OneNote 2010-2016 szakasz (\*.one)** formátumot.

A OneNote által már a lemezen tárolt szakaszfájlokat is importálhatod exportálás nélkül:

- A számítógépeden tárolt jegyzetfüzetek a `Documents\OneNote Notebooks` mappában találhatók, szakaszonként egy `.one` fájl.
- A szinkronizált jegyzetfüzetek biztonsági mentései a `%LOCALAPPDATA%\Microsoft\OneNote\16.0\Backup` mappában vannak.

### OneNote fájlok importálása

Szükséged lesz a hivatalos Obsidian [[Importáló]] bővítményre, amelyet [itt telepíthetsz](obsidian://show-plugin?id=obsidian-importer).

1. Nyisd meg a **[[Beállítások]]** menüt.
2. Lépj a **Közösségi bővítmények** részhez, és [telepítsd az Importálót](obsidian://show-plugin?id=obsidian-importer).
3. Engedélyezd az Importáló bővítményt.
4. Nyisd meg az **Importáló** bővítményt a parancspaletta vagy a szalag ikon segítségével.
5. A **Fájlformátum** alatt válaszd a **Microsoft OneNote (.one, .onepkg)** lehetőséget.
6. Válaszd ki az importálni kívánt `.onepkg` és `.one` fájlokat. Egyszerre több fájlt is kiválaszthatsz, így az összes jegyzetfüzetedet együtt importálhatod.
7. Az **Importálandó szakaszok** alatt a fájlokban talált szakaszok listája jelenik meg, mindegyik bejelölve. Töröld a jelölést azoknál, amelyeket nem szeretnél importálni.
8. Opcionálisan válassz egy **Kimeneti mappát** az importáláshoz, add meg, hová kerüljenek a mellékletek, és mi történjen a **Meglévő jegyzetekkel**, ha ugyanazt a jegyzetfüzetet újra importálod.
9. Kattints az **Importálás** gombra, és várj, amíg az importálás befejeződik.
10. Kész is!

Minden szakasz mappává válik, és minden oldal benne egy jegyzetté. Az aloldal az előtte lévő oldal nevével megegyező mappába kerül mentésre, ami megőrzi a OneNote-ban mutatott struktúrát, és megakadályozza, hogy két azonos nevű aloldal ütközzön. A jegyzetfüzet lomtárában lévő oldalak nem kerülnek importálásra.

### Korlátozások

- A jelszóval védett szakaszok titkosítva vannak tárolva, és oldalaik ki lesznek hagyva. Távolítsd el a jelszót a OneNote-ban, és exportálj újra az importálásukhoz.
- A jogvédett fájlokat csak olyan fiók nyithatja meg, amelyet a szabályzat engedélyez, és az Importáló nem tudja beolvasni őket.

## Adatvédelem

Ha a Microsoft-fiókos importálási módszert választod, az Obsidian Importáló bővítmény [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) protokollt használ a hitelesítéshez és a OneNote jegyzetfüzeteid importálásához. Ez egy rövid időtartamú hozzáférési tokent biztosít a fiókodhoz, amelyet kizárólag a te számítógépedről használnak, és soha nem kerül tárolásra. Az importálás befejezése után opcionálisan visszavonhatod a tokent a [Microsoft alkalmazások és szolgáltatások oldalon](https://account.live.com/consent/Manage).

A fájl importálás soha nem csatlakozik a Microsofthoz: a kiválasztott fájlok a számítógépeden kerülnek beolvasásra, hálózati kapcsolat nélkül.
