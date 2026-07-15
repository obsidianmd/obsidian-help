---
permalink: ios
---
Az Obsidian mobilalkalmazás iOS-re és iPadOS-re hatékony jegyzetelési képességeket kínál iPhone-ra és iPadre. Letölthető az [Apple App Store-ból](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).

Ez az oldal az iOS-specifikus funkciókat ismerteti, beleértve a widgeteket, a Siri integrációt és a Parancsikonokat.

## Szinkronizálás

A jegyzetek eszközök közötti szinkronizálásáról az [[Jegyzetek szinkronizálása eszközök között]] oldalon tájékozódhat.

## Widgetek

Az Obsidian iOS-re több widgetet kínál a széf gyors elérésére.

> [!note] Megjegyzés
> A widgetek iOS és iPadOS 18 vagy újabb verzión érhetők el.
> A widgetek nem érhetők el, ha a "Face ID megkövetelése" be van kapcsolva az alkalmazás feloldásához.


### Zárolási képernyő és Vezérlőközpont widgetek

A zárolási képernyő és a Vezérlőközpont widgetek a következőket teszik lehetővé:
- Új jegyzet létrehozása
- Egy adott jegyzet megnyitása
- Napi jegyzet megnyitása
- Keresés megnyitása
- Obsidian megnyitása

### Kezdőképernyő widgetek

A kezdőképernyő widgetek a következőket teszik lehetővé:
- Jegyzet létrehozása
- Jegyzet megtekintése
- Napi jegyzet megnyitása

### Widgetek testreszabása

A widgeteket testreszabhatja a munkafolyamatának megfelelően, például kiválaszthatja, melyik széfet használja, vagy megadhat egy konkrét jegyzetet a megnyitáshoz.

- **Kezdőképernyő widgetek:** Érintse meg és tartsa lenyomva a widgetet, majd válassza a **Widget szerkesztése** lehetőséget.
- **Zárolási képernyő widgetek:** Érintse meg és tartsa lenyomva a zárolási képernyőt, koppintson a **Testreszabás** lehetőségre, válassza ki a zárolási képernyőt, majd koppintson a testreszabni kívánt widgetre.
- **Vezérlőközpont widgetek:** Nyissa meg a Vezérlőközpontot, koppintson a bal felső sarokban lévő **+** gombra a szerkesztés megkezdéséhez, majd koppintson a testreszabni kívánt widgetre.

**Új jegyzet** widget konfigurációs lehetőségei:

![[ios-new-note-configuration.png|400]]

**Jegyzet megtekintése** widget konfigurációs lehetőségei:

![[ios-view-note-configuration.png|400]]

## Parancsikonok

Az Obsidian integrálódik az Apple Parancsikonok alkalmazásával, lehetővé téve hatékony automatizálások létrehozását. Az elérhető parancsikonok:

- **Jegyzet megnyitása** — Egy adott jegyzet megnyitása a széfben
- **Új jegyzet létrehozása** — Új jegyzet létrehozása a széfben
- **Napi jegyzet megnyitása** — Közvetlen ugrás a mai napi jegyzethez
- **Rögzítés a napi jegyzetbe** — Szöveg hozzáfűzése vagy beszúrása a napi jegyzetbe az Obsidian alkalmazás megnyitása nélkül
- **Rögzítés könyvjelzőbe** — Szöveg hozzáfűzése vagy beszúrása egy könyvjelzőzött jegyzetbe az Obsidian alkalmazás megnyitása nélkül

A rögzítés parancsikonok különösen hasznosak a gyors jegyzeteléshez, mivel lehetővé teszik tartalom hozzáadását egy jegyzethez a háttérben.

## Megosztás lap

Az Obsidian Megosztás lapja lehetővé teszi tartalom rögzítését weboldalakról. Olyan alkalmazásokkal is működik, mint a YouTube és más közösségi hálózatok.

> [!note]
> - A natív Megosztás lap iOS és iPadOS 18 vagy újabb verzión érhető el.
> - Az ebben a részben ismertetett Megosztás lap funkciókhoz Obsidian 1.13.0 vagy újabb szükséges.

A Megosztás lap segítségével gyorsan küldhet tartalmat egy másik alkalmazásból az Obsidianba:
1. Egy másik alkalmazásban koppintson a **Megosztás** gombra.
2. Válassza az **Obsidian** lehetőséget.
3. Válasszon egy Helyet.
4. Tekintse át vagy szerkessze a rögzített tartalmat.
5. Koppintson a **Mentés** gombra.

![[ios-share-sheet-extension.png|400]]

### Helyek

A Helyek segítségével eldöntheti, hová kerüljön a megosztott tartalom a mentés előtt.

A Helyek a következőkbe rögzíthetnek:
- **Új jegyzet** — Új jegyzet létrehozása egy széfben vagy mappában.
- **Napi jegyzet** — Tartalom hozzáfűzése vagy beszúrása a mai napi jegyzetbe.
- **Könyvjelzőzött jegyzet** — Tartalom hozzáfűzése vagy beszúrása egy könyvjelzőzött jegyzetbe.
- **Jegyzet** — Egy meglévő jegyzet kiválasztása a széfből.
- **Új könyvjelző** — Megosztott URL mentése az Obsidian könyvjelzőkbe.

![[ios-share-sheet-locations.png|400]]

### Helyek testreszabása

Létrehozhat Helyeket gyakori munkafolyamatokhoz, például cikkek mentéséhez egy beérkezett üzenetek mappába, idézetek hozzáfűzéséhez a napi jegyzethez, vagy hivatkozások hozzáadásához a könyvjelzőkhöz.

A Helyek testreszabásához:

1. Nyissa meg az Obsidiant az iOS Megosztás lapról.
2. Koppintson a jelenlegi Helyre az eszköztárban.
3. Koppintson a **+** gombra új Hely létrehozásához, vagy válasszon egy meglévő Helyet a szerkesztéshez.
4. Válassza ki a széfet, a viselkedést és az opcionális beállításokat.

A `Viselkedés` típusától függően a következő opciókat konfigurálhatja:
- Mappa
- Sablon
- Könyvjelző-csoport
- Hozzáfűzés vagy beszúrás pozíciója
- A megosztott hivatkozások **Teljes szöveget** vagy csak az **URL-t** rögzítsék-e

![[ios-share-sheet-add-location.png|400]]

### Sablon használata megosztáskor

Sablont használhat, amikor tartalmat oszt meg a Megosztás lapon keresztül. A sablonok lehetővé teszik a rögzített webes tartalom formázását olyan részletekkel, mint az oldal címe, szerzője, forrásoldalra és megjelenési dátuma.

Hely beállítása sablonnal:

1. Nyissa meg az Obsidiant az iOS Megosztás lapról.
2. Koppintson a jelenlegi Helyre az eszköztárban.
3. Koppintson a **+** gombra új Hely létrehozásához.
4. Adjon nevet a Helynek.
5. Válasszon egy széfet.
6. Állítsa a **Viselkedés** opciót **Új jegyzet** értékre.
7. Az **Opcionális** résznél koppintson a **Sablon** lehetőségre.
8. Válasszon egy jegyzetet a széfből sablonként.
9. Koppintson a **Mentés** gombra a Hely mentéséhez.

![[ios-share-sheet-set-template.png|400]]

Amikor egy hivatkozást oszt meg ezzel a Hellyel, az Obsidian először a sablont alkalmazza, majd hozzáadja a megosztott tartalmat.

Támogatott sablon helyőrzők:

| Helyőrző | Leírás |
| --- | --- |
| `{{author}}` | A cikk szerzője |
| `{{description}}` | A cikk leírása vagy összefoglalója |
| `{{domain}}` | A weboldal domain neve |
| `{{favicon}}` | A weboldal faviconjának URL-je |
| `{{image}}` | A cikk fő képének URL-je |
| `{{published}}` | A cikk megjelenési dátuma az alapértelmezett dátumformátumban |
| `{{published: YYYY-MM-DD}}` | Megjelenési dátum egyéni dátumformátummal |
| `{{site}}` | A weboldal neve |
| `{{title}}` | A cikk címe |
| `{{url}}` | A cikk URL-je |
| `{{wordCount}}` | A kinyert tartalom összes szavainak száma |

A szabványos sablon dátum és idő helyőrzőket is használhatja:

| Helyőrző | Leírás |
| --- | --- |
| `{{date}}` | Aktuális dátum |
| `{{date: YYYY-MM-DD}}` | Aktuális dátum egyéni formátummal |
| `{{time}}` | Aktuális idő |
| `{{time: HH:mm}}` | Aktuális idő egyéni formátummal |

## Siri integráció

Siri hangutasításokkal is kommunikálhat az Obsidiannal:

- "Capture using Obsidian"
- "Capture to Obsidian"
- "Open my daily note in Obsidian"
- "Search in Obsidian"

## Spotlight integráció

Amikor az iOS Spotlightban az "Obsidian" kifejezésre keres, gyors műveleteket talál:
- Új jegyzet
- Keresés
- Napi jegyzet
