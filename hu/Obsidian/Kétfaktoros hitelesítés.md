---
permalink: 2fa
---
Ha rendelkezel [Obsidian fiókkal](https://obsidian.md/account), engedélyezheted a kétfaktoros hitelesítést (2FA), hogy egy második ellenőrzési lépéssel védd fiókodat.

## 2FA engedélyezése

- Jelentkezz be [Obsidian fiókodba](https://obsidian.md/account/profile) a webböngésződből.
- A **Profil** részben navigálj a **2-factor authentication** opcióhoz, és válaszd az **Engedélyezés** lehetőséget.
- Egy felugró ablak jelenik meg, amely arra kér, hogy csatlakoztasd hitelesítő alkalmazásodat **QR-kóddal** vagy **beállítási kulccsal**.

> [!hint]- Népszerű hitelesítő alkalmazások
> - [Authy](https://authy.com)
> - [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
> - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)
> - [iCloud Keychain](https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios)

- A csatlakoztatás után a hitelesítő alkalmazásod egy hatjegyű kódot ad meg. Írd be ezt a kódot a **QR-kód/beállítási kulcs** rész alatti 3. lépésnél.
- Végül add meg a jelenlegi jelszavadat.
- Válaszd a **Complete set up** lehetőséget.
- A felugró ablak helyén egy megerősítő ablak jelenik meg a helyreállítási kódjaiddal. Kérjük, töltsd le a helyreállítási kódokat, mivel szükséged lesz rájuk a fiókod feloldásához.

A 2FA most be van állítva.

> [!warning]- QR-kód/beállítási kulcs biztonsági mentése
> Ha úgy döntesz, hogy a helyreállítási kódok mellett a **QR-kódodról** vagy a **Beállítási kulcsodról** is készítesz biztonsági mentést, erősen javasoljuk, hogy jelszóval titkosított rendszerben tárold.

## Helyreállítási kódok generálása

Ha a 2FA-t azelőtt engedélyezted, mielőtt a helyreállítási kódok elérhetővé váltak volna, vagy ha szeretnéd frissíteni a helyreállítási kódjaidat, kövesd az alábbi lépéseket:

- Jelentkezz be [Obsidian fiókodba](https://obsidian.md/account/profile) a webböngésződből.
- A 2-factor authentication mellett válaszd a **Refresh recovery codes** lehetőséget.
- A felugró ablakban add meg a **jelszavadat** és a **hatjegyű hitelesítő kódot**.
- Egy megerősítő ablak megjeleníti a helyreállítási kódjaidat. Két lehetőséged van:
    - **Copy recovery codes**: A kódok másolása más helyre történő beillesztéshez.
    - **Download recovery codes**: Egy `obsidian-recovery-codes.txt` fájl letöltése a kódjaiddal.
- Válaszd a **Got it** lehetőséget a felugró ablak bezárásához.

Minden helyreállítási kódot **egyszer** használhatsz a **hatjegyű hitelesítő kód** helyett. A helyreállítási kódjaidat bármikor frissítheted.

## 2FA letiltása

- Jelentkezz be [Obsidian fiókodba](https://obsidian.md/account/profile) a webböngésződből.
- A **Profil** részben navigálj a **2-factor authentication** opcióhoz, és válaszd a **Letiltás** lehetőséget.
- Add meg az Obsidian jelszavadat.
- Add meg a hitelesítő alkalmazásod aktuális hatjegyű kódját.
- Válaszd a **Disable 2FA** lehetőséget.
- Visszakerülsz a fiókkezelő képernyőre.

A **2-factor authentication** beállítás ismét az **Engedélyezés** gombot mutatja, jelezve, hogy a 2FA le lett tiltva.

## GYIK

**Engedélyeztem a 2FA-t. Ki leszek jelentkeztetve a jelenlegi Obsidian eszközeimről?**
Nem. A 2FA engedélyezése a kényelmed érdekében nem jelentkeztet ki mindenhonnan. Ha szükséges, ezt manuálisan megteheted a fiók oldaladról, majd újra bejelentkezhetsz minden eszközödön.

**Engedélyeztem, majd letiltottam a 2FA-t. Szeretném újra beállítani. Használhatom az eredeti QR-kódot vagy beállítási kulcsot?**
Nem. Minden alkalommal, amikor új 2FA beállítást kezdeményezel, új **QR-kódot** és új **Beállítási kulcsot** kapsz.

**Engedélyeztem a 2FA-t. Több kijelentkezési/bejelentkezési kísérlet után sem kérte. Működik ez?**
A böngésződ gyorsítótára miatt úgy tűnhet, mintha változtatásokat végeznél az oldalon (például be- vagy kijelentkezel), pedig valójában a tárolt adatokhoz férsz hozzá. Próbálj meg privát böngészőablakban bejelentkezni, hogy ellenőrizd a 2FA működését.

Ha továbbra is tapasztalod ezt a viselkedést, kérjük, [küldj be egy hibajelentést](https://forum.obsidian.md/c/bug-reports/7).

**Elvesztettem a helyreállítási kódjaimat, a hitelesítőmet és mindent, ami a fiókba való bejelentkezéshez szükséges. Mit tegyek?**

Ha elvesztetted a helyreállítási kódjaidat és a hitelesítődet, kérjük, írj e-mailt a [support@obsidian.md](mailto:support@obsidian.md?subject=I%20lost%20my%202FA) címre, hogy segítséget kapj a fiókodhoz való hozzáférés visszaszerzéséhez.
