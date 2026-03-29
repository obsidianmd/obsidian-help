---
permalink: bases/views/map
---
A Térkép egy olyan [[Nézetek|nézet]] típus, amelyet a [[Bevezetés a Bázisokba|Bázisokban]] használhatsz. A használatához telepítened kell a [Maps bővítményt](obsidian://show-plugin?id=maps).

Válaszd ki a ![[lucide-map.svg#icon]]  **Térkép** opciót a nézet menüből, hogy a fájlokat interaktív térképként jelenítsd meg, ahol minden fájlhoz egy jelölő tartozik, valamint egy előnézet, amely megjeleníti a fájl tulajdonságait.

![[bases-map-places.png#interface]]

## A Maps bővítmény telepítése

A térkép nézetek az Obsidian 1.10-es verziójától érhetők el. A [Maps bővítmény](obsidian://show-plugin?id=maps) egy hivatalos [[Közösségi bővítmények|közösségi bővítmény]], amelyet külön letölthetsz.

1. Kövesd a [[Közösségi bővítmények#Közösségi bővítmény telepítése]] útmutatóját
2. Töltsd le és engedélyezd a [Maps](obsidian://show-plugin?id=maps) bővítményt a listából

## Példa

Kezdésként próbálj meg létrehozni egy **Eiffel-torony** nevű jegyzetet, és másold be az alábbi tulajdonságokat:

```yaml
---
coordinates:
  - "48.85837"
  - "2.294481"
icon: "landmark"
color: "red"
tags:
  - places
---
```

A fenti kód jelentése:

| Tulajdonság   | Érték                    |                                                                                                                                                                                |
| ------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `coordinates` | `48.85837`<br>`2.294481` | A koordináták `szélesség, hosszúság` formátumban vannak tárolva. A koordinátákat a térképen egy helyre jobb egérgombbal kattintva és a **Copy coordinates** lehetőséget választva kaphatod meg. |
| `icon`        | `landmark`               | Egy ikon neve a [Lucide könyvtárból](https://lucide.dev/).                                                                                                                     |
| `color`       | `red`                    | Érvényes CSS érték: hex, RGB, nevesített szín stb.                                                                                                                             |
| `tags`        | `places`                 | A címke, amelyet a térképjelölők megtalálásához fogunk használni a bázisban.                                                                                                    |
Most hozz létre egy térkép nézetet a `places` címke szűrővel, és állítsd be a jelölő koordinátákat, ikont és színt a fent felsorolt tulajdonságok segítségével.

Ezeket a [példafájlokat](https://github.com/obsidianmd/obsidian-maps/tree/master/examples) is megnyithatod az Obsidianban, hogy működő térkép nézeteket láss jelölőkkel, ikonokkal és színekkel előre beállítva.

## Beállítások

A térkép nézet beállításai a [[Nézetek#Nézet beállítások|Nézet beállításokban]] konfigurálhatók.

- Beágyazott magasság
- Középpont koordináták
- Nagyítási korlátok
- Jelölő koordináták, szín és ikon
- Háttér

### Jelölők

#### Koordináták

A gombostűk megjelenítéséhez a térképen nyisd meg a [[Nézetek#Nézet beállítások|nézet beállításokat]] és válassz egy **jelölő koordináta** tulajdonságot. A tulajdonságnak szélességi és hosszúsági koordinátákat kell tartalmaznia. A következő formátumok elfogadottak:

```yaml
# Szöveges tulajdonság
coordinates: "lat, lng"

# Lista tulajdonság
coordinates:
  - "lat"
  - "lng"
```

Ha a koordinátákat külön `latitude` és `longitude` tulajdonságként tárolod, kombinálhatod őket egy [[Bázisok szintaxisa#Képletek|képlet]] tulajdonsággal, amelyet koordináták tömbjeként definiálsz a következő képlettel: `[latitude, longitude]`.

#### Ikonok

Adj ikonokat a jelölőkhöz egy **jelölő ikonok** tulajdonság definiálásával. Például hozzáadhatsz egy `icon` nevű tulajdonságot a jegyzeteidhez, és olyan értékeket adhatsz neki, mint `landmark` vagy `utensils` az Obsidian beépített [Lucide könyvtárából](https://lucide.dev/icons/).

##### Ikonok definiálása képlettel

Tegyük fel, hogy azt szeretnéd, hogy minden étterem ugyanazzal az ikonnal jelenjen meg a térképen:

1. Hozz létre egy **Éttermek** nevű jegyzetet, és adj hozzá egy `icon` nevű tulajdonságot `utensils` értékkel.
2. Az étterem jegyzeteknek adj egy `type` nevű tulajdonságot, amely az `[[Éttermek]]` jegyzetre hivatkozik.
3. Adj hozzá egy `Type icon` nevű képlet tulajdonságot a bázisodhoz a következő kóddal:
	```js
	list(type)[0].asFile().properties.icon
	```
4. Válaszd a `Type icon` tulajdonságot jelölő ikonként a nézet beállításokban.

Íme! Most a térképed a hely *típusának* ikonját jeleníti meg, nem magáét a helyét.

#### Színek

Állítsd be a jelölők színét. Elfogadott értékek: RGB `rgb(0,0,0)`, HEX `#000`, vagy CSS változók, mint `var(--color-blue)`. A fenti ikon példához hasonlóan képlet tulajdonsággal is dinamikusan definiálhatsz színeket.

### Háttér

#### Térképcsempék

A térképcsempék a digitális térképek megjelenítésének szabványos módja. Több szolgáltatás is létezik, amelyekkel egyedi stílusokkal, színekkel és betűtípusokkal testreszabhatod a térképeket. A Maps raszter és vektor csempéket egyaránt támogat, és a legtöbb csempe URL-t elfogadja, beleértve a TileJSON URL-eket is.

Az [OpenFreeMap](https://openfreemap.org/) néhány stílust kínál, amelyeket ingyenesen használhatsz. Próbáld ki az alábbi URL-ek egyikét a **Térképcsempék** beállításban:

| Név      | URL                                              |
| -------- | ------------------------------------------------ |
| Dark     | `https://tiles.openfreemap.org/styles/dark`      |
| Positron | `https://tiles.openfreemap.org/styles/positron`  |
| Liberty  | ``https://tiles.openfreemap.org/styles/liberty`` |
#### Hasznos hivatkozások

- [Maputnik](https://maputnik.github.io/) térképcsempék testreszabásához.
- [Protomaps](https://protomaps.com/) térképcsempék saját üzemeltetéséhez.
- További ingyenes szinttel rendelkező tárhelyszolgáltatások: [MapTiler](https://www.maptiler.com/) és [Mapbox](https://www.mapbox.com/).


## Tippek

Népszerű térképszolgáltatásokra hivatkozhatsz a [[Képletek]] segítségével. Például a gombostűd mutathat egy Google Maps hivatkozást a következő képlettel:

```js
link("https://www.google.com/maps/search/" + file.name.replace(" ","+"),"Google Maps")
```

## Hibaelhárítás

Ha a térkép üresen jelenik meg a Maps bővítmény első betöltésekor, próbáld meg [[Az Obsidian frissítése|frissíteni az Obsidian telepítőverziót]].

A [Maps bővítmény](https://github.com/obsidianmd/obsidian-maps) nyílt forráskódú. Segíthetsz hibajelentésekkel, funkciókérésekkel és pull requestekkel.
