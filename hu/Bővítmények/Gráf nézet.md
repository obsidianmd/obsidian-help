---
permalink: plugins/graph
publish: true
mobile: true
description: 'A Gráfnézet egy alapbővítmény, amely lehetővé teszi a széfedben lévő jegyzetek közötti kapcsolatok vizualizálását.'
---
A gráf nézet egy [[Alap bővítmények|alap bővítmény]], amely lehetővé teszi a széfedben lévő jegyzetek közötti kapcsolatok vizualizálását.

A gráf nézet megnyitásához kattints a **Gráf nézet megnyitása** elemre a [[Szalag|szalagon]].

- A körök a jegyzeteket, más néven _csomópontokat_ jelölik.
- A vonalak a két csomópont közötti [[Belső hivatkozások|belső hivatkozásokat]] jelölik.

Minél több csomópont hivatkozik egy adott csomópontra, annál nagyobb lesz az.

A gráfban lévő jegyzetekkel való interakció:

- Mutass rá egy körre az adott jegyzet kapcsolatainak kiemeléséhez.
- Kattints egy jegyzetre a gráfban az adott jegyzet megnyitásához.
- Kattints jobb gombbal egy jegyzetre a helyi menü megnyitásához, amely az adott jegyzethez elérhető műveleteket tartalmazza.

Navigálás a gráfban:

- Nagyítás és kicsinyítés az egér görgetőkerekével, vagy a `+` és `-` billentyűkkel.
- A gráf mozgatása az egérrel húzva, vagy a nyílbillentyűkkel.

A Shift lenyomva tartásával gyorsíthatod a mozgásokat a billentyűzet használata közben.

## Beállítások

A gráf beállítások megnyitásához kattints a fogaskerék ikonra a gráf nézet jobb felső sarkában.

Kattints az **Alapértelmezett beállítások visszaállítása** gombra a beállítások doboz jobb felső sarkában az elvégzett módosítások visszaállításához.

### Szűrők

Ez a szakasz szabályozza, hogy mely csomópontok jelenjenek meg a gráfban.

- A **Fájlok keresése** lehetővé teszi a jegyzetek szűrését keresési kifejezés alapján. A haladó keresési kifejezések írásáról a [[Keresés]] oldalon olvashatsz bővebben.
- A **Címkék** kapcsoló meghatározza, hogy megjelenjenek-e a címkék a gráfban.
- A **Csatolmányok** kapcsoló meghatározza, hogy megjelenjenek-e a csatolmányok a gráfban.
- A **Csak létező fájlok megjelenítése** kapcsoló meghatározza, hogy csak a széfedben létező jegyzetek jelenjenek-e meg. Mivel egy jegyzetnek nem kell léteznie ahhoz, hogy hivatkozz rá, ez segíthet a gráfot a ténylegesen meglévő jegyzetekre korlátozni.
- Az **Árva fájlok** kapcsoló meghatározza, hogy megjelenjenek-e a hivatkozás nélküli jegyzetek.

> [!info] Kizárt fájlok
> A [[Beállítások#Kizárt fájlok|Kizárt fájlok]] mintáinak megfelelő fájlok nem jelennek meg a gráf nézetben.

### Csoportok

Hozz létre jegyzetcsoportokat, hogy színek segítségével megkülönböztesd őket egymástól.

Új csoport létrehozása:

1. Kattints az **Új könyvjelző-csoport** gombra.
2. A keresőmezőbe írd be a csoporthoz hozzáadni kívánt jegyzetekre vonatkozó keresési kifejezést.
3. Kattints a színes körre a csoport színének kiválasztásához.

A haladó keresési kifejezések írásáról a [[Keresés]] oldalon olvashatsz bővebben.

### Megjelenítés

Ez a szakasz szabályozza a csomópontok és hivatkozások megjelenítését a gráfban.

- A **Nyilak** kapcsoló meghatározza, hogy megjelenjen-e az egyes hivatkozások iránya.
- A **Szöveg áttetszősége** szabályozza az egyes jegyzetnevek szövegének átlátszóságát.
- A **Csomópont mérete** szabályozza az egyes jegyzeteket jelölő körök méretét.
- A **Kapcsolat vastagsága** szabályozza az egyes hivatkozások vonalvastagságát.
- Az **Animáció** elindít egy [[#Időlépéses animáció indítása|időlépéses animációt]].

### Erők

Ez a szakasz szabályozza a gráfban az egyes csomópontokra ható erőket.

- A **Középponti vonzás** szabályozza, mennyire kompakt a gráf. Magasabb érték körszerűbb gráfot eredményez.
- A **Taszítás** szabályozza, mennyire taszítja el egy csomópont a többi csomópontot.
- A **Kapcsolati erő** szabályozza az egyes hivatkozások húzóerejét. Ha a hivatkozás gumiszalag lenne, a kapcsolati erő határozza meg, mennyire feszes vagy laza a szalag.
- A **Kapcsolat távolsága** szabályozza az egyes jegyzetek közötti vonalak hosszát.

## Időlépéses animáció indítása

A jegyzetek és csatolmányok létrehozási idejük alapján időrendi sorrendben jelennek meg.

![[obsidian-graph-view.png#interface]]

## Helyi gráf

A helyi gráf nézet megnyitásához használd a **Helyi gráf megnyitása** parancsot. Míg a gráf nézet a széfben lévő összes jegyzetet mutatja, a helyi gráf nézet az aktív jegyzethez kapcsolódó jegyzeteket jeleníti meg.

A helyi gráf nézet a globális gráf nézet összes [[#Beállítások|beállítását]] használhatja. Ezenkívül módosíthatod a helyi gráf mélységét. Minden egyes mélységi szint az előző szinten feltárt jegyzetekhez kapcsolódó jegyzeteket jeleníti meg. A helyi gráf mélységének szabályozásához használd a csúszkát a helyi gráf szűrőbeállítások panel tetején.
