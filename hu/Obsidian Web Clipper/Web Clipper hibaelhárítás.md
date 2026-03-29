---
permalink: web-clipper/troubleshoot
---
Ha problémákat tapasztalsz a [[Bevezetés az Obsidian Web Clipper használatába|Web Clipperrel]] kapcsolatban, segítséget kaphatsz a [hivatalos Discord csatornán](https://discord.com/channels/686053708261228577/1285652864089198672). Hibákat a [GitHub repón](https://github.com/obsidianmd/obsidian-clipper) is bejelenthetsz.

## Általános

### Bizonyos tartalom hiányzik

Alapértelmezetten a Web Clipper megpróbálja intelligensen rögzíteni az oldal tartalmát. Azonban ez nem minden weboldal esetében sikeres.

A Web Clipper a [Defuddle](https://github.com/kepano/defuddle) eszközt használja, hogy csak az oldal fő tartalmát rögzítse. Ez kizárja a fejlécet, láblécet és egyéb elemeket, de néha túlságosan konzervatív lehet, és eltávolíthat olyan tartalmat, amelyet meg szeretnél tartani. Hibákat a [Defuddle-nek](https://github.com/kepano/defuddle) jelenthetsz be.

A Defuddle megkerüléséhez a Web Clipperben használd a következő módszereket:

- Jelölj ki szöveget, vagy használd a `Cmd/Ctrl+A` billentyűkombinációt az összes szöveg kijelöléséhez.
- [[Weboldalak kiemelése|Emeld ki a tartalmat]], hogy pontosan kiválaszd, mit szeretnél rögzíteni.
- Használj [[Obsidian Web Clipper/Sablonok|egyéni sablont]] az adott weboldalhoz.

### Nem jelenik meg tartalom az Obsidianben

Ha nem látsz tartalmat az Obsidianben, amikor az **Add to Obsidian** gombra kattintasz:

- Ellenőrizd a hibákat az Obsidian [[Súgó és támogatás#Capture console logs|fejlesztői konzoljában]].
- Ellenőrizd, hogy a széf neve a Web Clipper beállításaiban pontosan megegyezik a *széf nevével* az Obsidianben, *nem a széf útvonalával*.
- Ellenőrizd, hogy a mappa neve helyesen van formázva.

## Linux

#### Az Obsidian nem nyílik meg

- Győződj meg arról, hogy az [[Obsidian URI]] protokoll [[Obsidian URI#Obsidian URI regisztrálása|regisztrálva van]].
- Ha Firefoxot használsz, lehet, hogy [regisztrálnod kell a böngésző beállításaiban](https://kb.mozillazine.org/Register_protocol).

#### Az Obsidian megnyílik, de csak a fájlnév mentődik el

Valószínűleg az Obsidian nem fér hozzá a vágólapodhoz. A vágólap-hozzáférés szükséges az adatok átadásához a böngészőből az Obsidianbe. A konfigurációd befolyásolhatja az alkalmazások sandbox-olását és a vágólap-engedélyeket.

Ha Waylandot használsz, győződj meg arról, hogy az Obsidian rendelkezik engedéllyel a vágólap olvasásához, amikor az alkalmazás nincs fókuszban. Ez a beállítás a csempe ablakkezelődben lehet, pl. Hyprland vagy Sway.

Ha Hyprlandot használsz:

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

Ha Sway-t használsz:

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- Ha Flatpakot használsz, próbáld ki az [hivatalosan támogatott Obsidian verziót](https://obsidian.md/download).
- Ha KDE-t használsz, lépj a **Rendszerbeállítások** → **Ablakkezelés** → **Ablakszabályok** menüpontra, és engedélyezd az Obsidiannek a fókusz átvételét, [[web-clipper-kde.png|lásd a képernyőképet]].
- Végső megoldásként próbálj váltani az **Örökölt módra** a **Web Clipper beállítások** → **Általános** menüpontban. Ez megkerüli a vágólapot, és közvetlenül URI-n keresztül menti a tartalmat. Vedd figyelembe, hogy ez korlátozza a kivágható karakterek számát a böngésződtől és a Linux disztribúciódtól függően.

## iOS és iPadOS

A Web Clipper bővítmény engedélyezése a Safarihoz:

1. Lépj a Safariba, koppints a böngésző URL sávjában a bal szélső gombra, amely egy téglalap vonalakkal alatta.
2. Koppints a **Bővítmények kezelése** lehetőségre.
3. Engedélyezd az **Obsidian Web Clipper** elemet a bővítmények listájában.
4. Lépj ki a menüből.
5. A bővítmény használatához **koppints a puzzle darab ikonra** az URL sávban.

A Web Clipper futásának engedélyezése minden weboldalon:

1. Lépj az iOS **[[Beállítások]]** → **Alkalmazások** → **Safari** → **Bővítmények** menüpontra.
2. Az **Engedélyek** alatt engedélyezd a futtatást minden weboldalon.

Az Obsidian számára a Web Clipper tartalom fogadásának engedélyezése:

1. Lépj az iOS **[[Beállítások]]** → **Alkalmazások** → **Obsidian** menüpontra.
2. Állítsd a **Beillesztés más alkalmazásokból** opciót **Engedélyezés** értékre.
