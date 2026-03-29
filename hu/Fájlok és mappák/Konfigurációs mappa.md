---
permalink: configuration-folder
publish: true
mobile: true
description: 'Ismerje meg, hogyan érheti el és kezelheti a konfigurációs mappáját asztali és mobil eszközökön.'
---
Az Obsidian konfigurációs mappája tartalmazza a [[Széfek kezelése|széfhez]] tartozó összes beállításfájlt.

Alapértelmezetten a konfigurációs mappa neve `.obsidian`, és a széf mappájában található. Ha szinkronizáló szolgáltatást használ, vagy különböző profilokat szeretne tesztelni ugyanabban a széfben, érdemes lehet megváltoztatni a konfigurációs mappát.

## A konfigurációs mappa elérése

### Asztali gép

Asztali gépen az `.obsidian` mappa a széf mappájában található. A rendszer fájlkezelőjén keresztül érheti el.

### Mobil

A konfigurációs mappa elérése platformonként eltér:

**iOS és iPadOS**

iOS-en és iPadOS-en nincs alapértelmezett módszer az `.obsidian` mappa elérésére. A rejtett fájlok és mappák megtekintéséhez és szerkesztéséhez harmadik féltől származó alkalmazásra lesz szüksége, például:

- **Taio** — Ingyenes alkalmazás alapvető funkciókkal mappák és fájlnevek megtekintéséhez és szerkesztéséhez.
- **Textastic** — Fizetős alkalmazás fejlett fájlszerkesztési képességekkel.

**Android**

Az `.obsidian` mappa elérése Androidon:

1. Nyissa meg a rendszer fájlkezelőjét.
2. Engedélyezze a „Rejtett fájlok megjelenítése" kapcsolót a beállításokban.
3. Navigáljon a széf mappájához. Az `.obsidian` mappa a legfelső szinten jelenik meg.

> [!tip]- Alternatív fájlkezelők
> Ha az alapértelmezett fájlkezelőben nincs „Rejtett fájlok megjelenítése" lehetőség, telepítsen egy olyan fájlkezelő alkalmazást, amely tartalmazza ezt a funkciót.

## A konfigurációs mappa módosítása

A konfigurációs mappa beállítása:

1. Nyissa meg a **[[Beállítások]] → Fájlok és hivatkozások** menüt.
2. A **Konfigurációs mappa felülbírálása** mezőbe írja be a profil nevét, ponttal (`.`) kezdve. Például: `.obsidian-awesome`.
3. Indítsa újra az Obsidiant, hogy a változtatások érvénybe lépjenek.

> [!info] Az aktuális konfigurációs mappában lévő beállítások nem kerülnek át az új konfigurációs mappába. A korábbi konfigurációs mappa azonban megmarad a széf mappájában.
