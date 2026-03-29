---
permalink: install
---
Az Obsidian minden főbb asztali és mobil platformon elérhető. Az alábbiakban megtalálod az Obsidian letöltésének és telepítésének összes támogatott módját.

## Az Obsidian telepítése Windowsra

1. Nyisd meg a böngészőt, és navigálj a [Download Obsidian](https://obsidian.md/download) oldalra.
2. A **Windows** alatt kattints a **Universal** gombra a telepítőfájl letöltéséhez.
3. Nyisd meg a telepítőfájlt, és kövesd az utasításokat.
4. Nyisd meg az Obsidiant ugyanúgy, ahogy bármely más alkalmazást megnyitnál.

## Az Obsidian telepítése macOS-re

1. Nyisd meg a böngészőt, és navigálj a [Download Obsidian](https://obsidian.md/download) oldalra.
2. A **macOS** alatt kattints a **Universal** gombra a telepítőfájl letöltéséhez.
3. Nyisd meg a telepítőfájlt.
4. A megnyíló ablakban húzd az Obsidiant az Applications (Alkalmazások) mappába.
5. Nyisd meg az Obsidiant ugyanúgy, ahogy bármely más alkalmazást megnyitnál.

## Az Obsidian telepítése Linuxra

Ha Linuxot használsz, az Obsidiant többféleképpen is telepítheted. Kövesd az általad használt csomagkezelő rendszerhez tartozó utasításokat.

### Az Obsidian telepítése Snap használatával

1. Nyisd meg a böngészőt, és navigálj a [Download Obsidian](https://obsidian.md/download) oldalra.
2. A **Linux** alatt kattints a **Snap** gombra a telepítőfájl letöltéséhez.
3. Nyiss meg egy terminált, és navigálj abba a mappába, ahová a telepítőfájlt letöltötted.
4. A terminálban futtasd a következő parancsot a Snap csomag telepítéséhez: (a `--dangerous` jelző azért szükséges, mert a Canonical, a Snapet létrehozó cég, nem ellenőrizte a csomagunkat; a `--classic` jelző lehetővé teszi, hogy az Obsidian hozzáférjen a sandboxon kívüli területekhez, ahol a jegyzeteid vannak tárolva)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Nyisd meg az Obsidiant ugyanúgy, ahogy bármely más alkalmazást megnyitnál.

### Az Obsidian telepítése AppImage használatával

1. Nyisd meg a böngészőt, és navigálj a [Download Obsidian](https://obsidian.md/download) oldalra.
2. A **Linux** alatt kattints az **AppImage** gombra a telepítőfájl letöltéséhez.
3. Nyiss meg egy terminált, és navigálj abba a mappába, ahová a telepítőfájlt letöltötted.
4. A terminálban futtasd a következő parancsot az Obsidian megnyitásához:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
Megjegyzés: Chromebookokon a `libnss3-dev` csomagot telepíteni kell, különben a következő hibaüzenetet kaphatod: `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`.

### Az Obsidian telepítése Flatpak használatával

1. A terminálban futtasd a következő parancsot az Obsidian telepítéséhez:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Nyisd meg az Obsidiant a következő parancs futtatásával:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Az Obsidian telepítése Androidra

1. Keresd meg az Obsidiant a [Play Áruházban](https://play.google.com/store/apps/details?id=md.obsidian).
2. Koppints a **Telepítés** gombra az alkalmazás letöltéséhez.
3. Nyisd meg az Obsidiant ugyanúgy, ahogy bármely más alkalmazást megnyitnál.

Az Android APK-t opcionálisan letöltheted a [Download Obsidian](https://obsidian.md/download) oldalról is.

## Az Obsidian telepítése iPhone-ra és iPadre

1. Keresd meg az Obsidiant az [App Store-ban](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. Koppints a **Letöltés** gombra az alkalmazás letöltéséhez.
3. Nyisd meg az Obsidiant ugyanúgy, ahogy bármely más alkalmazást megnyitnál.
