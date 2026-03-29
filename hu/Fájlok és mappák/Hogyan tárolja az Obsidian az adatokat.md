---
permalink: data-storage
publish: true
mobile: true
description: 'Ez az oldal elmagyarázza, hogyan tárolja az Obsidian az adatait az eszközén.'
---
Az Obsidian a jegyzeteidet [[Alapvető formázási szintaxis|Markdown-formátumú]] egyszerű szövegfájlokként tárolja egy _széfben_. A széf egy mappa a helyi fájlrendszereden, beleértve annak almappáit is.

Mivel a jegyzetek egyszerű szövegfájlok, más szövegszerkesztőkkel és fájlkezelőkkel is szerkesztheted és kezelheted őket. Az Obsidian automatikusan frissíti a széfedet, hogy lépést tartson a külső változásokkal.

Széfet bárhol létrehozhatsz, ahol az operációs rendszered megengedi. Az Obsidian szinkronizálható az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync-kel]], a Dropbox-szal, az iClouddal, a OneDrive-val, a Gittel és számos más harmadik féltől származó szolgáltatással.

Több mappát is megnyithatsz különálló széfként, például hogy elkülönítsd a munkahelyi és az iskolai jegyzeteidet.

> [!warning] Széfek széfeken belül
> Mivel a [[Belső hivatkozások]] egy széfen belül lokálisak, javasoljuk, hogy ne hozz létre széfeket széfeken belül. Előfordulhat, hogy a hivatkozások nem frissülnek megfelelően.

## Széf beállítások

Az Obsidian egy `.obsidian` [[Konfigurációs mappa|konfigurációs mappát]] hoz létre a széf gyökérmappájában, amely az adott széfre vonatkozó beállításokat tartalmazza, például a [[Gyorsbillentyűk|gyorsbillentyűket]], a [[Témák|témákat]] és a [[Közösségi bővítmények|közösségi bővítményeket]].

Alapértelmezetten a legtöbb operációs rendszer elrejti a ponttal (`.`) kezdődő mappákat, ezért előfordulhat, hogy frissítened kell a fájlkezelő beállításait, hogy lásd.

- **macOS**: A Finderben nyomd meg a `Cmd+Shift+.` (pont) billentyűkombinációt a rejtett fájlok megjelenítéséhez.
- **Windows**: [Rejtett fájlok megjelenítése](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
+ **GNU/Linux:** A legtöbb fájlkezelőben nyomd meg a `Ctrl + h` billentyűkombinációt a rejtett fájlok megjelenítéséhez.

> [!tip] Az `.obsidian` hozzáadása a Githez
> Az `.obsidian/workspace.json` és `.obsidian/workspaces.json` fájlok az aktuális munkaterület-elrendezést tárolják, és minden új fájl megnyitásakor frissülnek. Ha [Git](https://git-scm.com)-et használsz a széfed kezeléséhez, érdemes lehet ezeket a fájlokat hozzáadni a `.gitignore` fájlhoz.

## Globális beállítások

Az Obsidian a globális beállításokat egy rendszermappában tárolja. A rendszermappa helye az operációs rendszeredtől függ.

- **macOS**: `/Users/felhasználóneved/Library/Application Support/obsidian`
- **Windows**: `%APPDATA%\Obsidian\`
- **Linux**: `$XDG_CONFIG_HOME/obsidian/` vagy `~/.config/obsidian/`

> [!warning] Ne hozz létre széfet a rendszermappában. Ez adatsérüléshez vagy adatvesztéshez vezethet.

## IndexedDB

Az IndexedDB egy alacsony szintű, kliens oldali adatbázis, amelyet az Obsidian háttértárolásra használ. Segít fenntartani az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync]] kapcsolatok állapotát, és megőrzi a [[#Metaadat-gyorsítótár|metaadat-gyorsítótárat]] az alkalmazás bezárásakor.

> [!warning] Ha az Apple [Zárolási módja](<https://support.apple.com/en-us/105120>) engedélyezve van, és az Obsidian nincs kivételként megadva, ezek az adatbázisfájlok nem mentődnek el, ami az alkalmazás minden indításakor újraindexelést igényel.

### Metaadat-gyorsítótár

Az alkalmazás gyors működése érdekében az Obsidian helyi nyilvántartást vezet a széfedben lévő fájlok metaadatairól, amelyet **metaadat-gyorsítótárnak** nevezünk. Ez a metaadat számos funkciót működtet az alkalmazásban, a gráf nézettől a vázlat nézetig.

Az Obsidian szinkronban tartja ezt a gyorsítótárat a széfedben lévő fájlokkal, de előfordulhat, hogy az adatok kiszinkronizálódnak az alapul szolgáló fájlokból. Ha ez történik a széfeddel, az alkalmazás beállításaiban, a *Fájlok és hivatkozások* részben újraépítheted a metaadat-gyorsítótárat.
