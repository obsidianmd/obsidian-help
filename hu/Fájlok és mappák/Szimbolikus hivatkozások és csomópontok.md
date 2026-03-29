---
permalink: symlinks
---
A [szimbolikus hivatkozások](https://en.wikipedia.org/wiki/Symbolic_link) (symlink-ek) és a [csomópontok](https://learn.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions#junctions) segítségével a széfen és a [[Hogyan tárolja az Obsidian az adatokat#Globális beállítások|rendszermappán]] kívül is tárolhatsz fájlokat.

> [!danger] Használat saját felelősségre
> Határozottan nem javasoljuk a szimbolikus hivatkozások használatát. A szimbolikus hivatkozások és csomópontok használatával a széfedben fennáll az adatvesztés, adatsérülés vagy az Obsidian összeomlásának kockázata. Győződj meg róla, hogy rendszeresen készítesz biztonsági mentést a széfedről és a beállításaidról.

Az alábbiakban néhány korlátozást és ismert problémát sorolunk fel, amelyeket érdemes szem előtt tartanod:

- A symlink-hurkok nem engedélyezettek, hogy megelőzzük az Obsidian összeomlását egy végtelen hurok miatt.
- A symlink-céloknak teljesen különállóknak kell lenniük a széf gyökérmappájától és bármely más symlink-céltól. A különálló azt jelenti, hogy az egyik mappa nem tartalmazza a másikat, és fordítva. Az Obsidian figyelmen kívül hagy minden olyan szimbolikus hivatkozást, amely a széf szülőmappájára mutat, vagy a széf egyik mappájából ugyanazon széf egy másik mappájára hivatkozik. Ez egy biztonsági intézkedés annak érdekében, hogy ne legyenek duplikált fájlok a széfedben, amelyek kétértelmű hivatkozásokhoz vezethetnek.
- A szimbolikus hivatkozások nem feltétlenül működnek jól az Obsidian sync-kel vagy _bármilyen más szinkronizálási megoldással_. Ha egy symlink célmappája egyben egy másik Obsidian széf által szinkronizált mappa is, előfordulhatnak szinkronizálási ütközések vagy adatvesztés. Egyes szinkronizálási eszközök, mint például a Git, nem követik a szimbolikus hivatkozásokat, hanem azt az _útvonalat_ szinkronizálják, amelyre a symlink mutat, ami nemkívánatos eredményekhez vezethet, ha így osztod meg a széfed másokkal.
- Az Obsidian fájlkezelője nem tud fájlokat mozgatni eszközhatárokon keresztül, ezért ha egy, a széfedtől eltérő meghajtón lévő mappára hivatkozol szimbolikus hivatkozással, nem fogod tudni a fájlokat az Obsidian fájlkezelőjével húzni az adott mappa és más mappák között. (Az ilyen áthelyezésekhez az operációs rendszered fájlkezelőjét kell használnod, és az Obsidian az áthelyezést törlésként és egy új fájl létrehozásaként fogja érzékelni. Ráadásul _nem_ fogja frissíteni a fájl útvonalától függő hivatkozásokat sem.)
- A fájlszintű szimbolikus hivatkozások (a mappaszintű symlink-ekkel szemben) _működhetnek_, de jelenleg nem támogatottak hivatalosan. Az Obsidian-on kívül végzett változtatásokat a rendszer nem figyeli, ezért ha közvetlenül módosítod a fájlt, az Obsidian nem fogja érzékelni a változást, nem frissíti a keresési indexeket stb.
- A `.obsidian/` mappán belüli elemek szimbolikus hivatkozással való megosztása széfek között **nagy eséllyel megrongálja a beállításaidat**, hacsak nem vagy _teljesen_ tisztában azzal, mit csinálsz. Ha mégis így döntesz, legalább készíts biztonsági mentéseket.
