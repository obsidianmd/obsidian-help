---
permalink: uri
---
Az Obsidian URI egy egyéni URI protokoll, amelyet az Obsidian támogat, és amely lehetővé teszi különböző műveletek végrehajtását, például egy jegyzet megnyitását vagy új jegyzet létrehozását. Az Obsidian URI automatizálást és alkalmazások közötti munkafolyamatokat tesz lehetővé.

## URI formátum

Az Obsidian URI-k a következő formátumot használják:

```
obsidian://action?param1=value&param2=value
```

Az `action` paraméter a végrehajtandó művelet. Az elérhető műveletek:

- `open` egy jegyzet megnyitásához.
- `new` egy jegyzet létrehozásához vagy meglévő jegyzethez való hozzáadáshoz.
- `daily` napi jegyzet létrehozásához vagy megnyitásához.
- `unique` új egyedi jegyzet létrehozásához.
- `search` keresés megnyitásához.
- `choose-vault` a széfkezelő megnyitásához.

> [!warning] Kódolás
> Győződj meg róla, hogy az értékek megfelelően URI-kódolva vannak. Például a perjel karaktereket `/` `%2F`-ként, a szóköz karaktereket pedig `%20`-ként kell kódolni.
> 
 Ez különösen fontos, mert egy helytelenül kódolt "fenntartott" karakter megzavarhatja az URI értelmezését. [Részletekért lásd itt](https://en.wikipedia.org/wiki/Percent-encoding).

## Jegyzet megnyitása

Az `open` művelet megnyit egy Obsidian széfet, vagy megnyit egy fájlt az adott széfben.

### Példák

- `obsidian://open?vault=my%20vault`
  Ez megnyitja a `my vault` széfet. Ha a széf már nyitva van, a fókusz az ablakra kerül.
- `obsidian://open?vault=ef6ca3e3b524d22f`
  Ez megnyitja az `ef6ca3e3b524d22f` azonosítójú széfet.
- `obsidian://open?vault=my%20vault&file=my%20note`
  Ez megnyitja a `my note.md` jegyzetet a `my vault` széfben, feltéve, hogy a fájl létezik.
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  Ez megkeresi azt a széfet, amely tartalmazza a `/home/user/my vault/path/to/my note` útvonalat. Ezután az útvonal fennmaradó része a `file` paraméternek lesz átadva. Például, ha létezik egy széf a `/home/user/my vault` helyen, akkor ez egyenértékű lenne a `file` paraméter `path/to/my note` értékével.


> [!tip] Fejléc vagy blokk megnyitása
> Megfelelő URI-kódolással egy fejléchez vagy blokkhoz is navigálhatsz egy jegyzeten belül. A `Note%23Heading` a "Heading" nevű fejléchez navigál, míg a `Note%23%5EBlock` a "Block" nevű blokkhoz navigál.

### Paraméterek

- `vault` a széf neve vagy a széf azonosítója lehet[^1].
- `file` lehet fájlnév vagy a széf gyökerétől a megadott fájlhoz vezető útvonal. Ha a fájl kiterjesztése `md`, a kiterjesztés elhagyható.
- `path` a fájl abszolút fájlrendszerbeli útvonala.
  - Ennek a paraméternek a használata felülírja a `vault` és `file` paramétereket is.
  - Az alkalmazás megkeresi azt a legspecifikusabb széfet, amely tartalmazza a megadott fájl útvonalat.
  - Ezután az útvonal fennmaradó része a `file` paramétert helyettesíti.
- `prepend` a fájl elejéhez ad hozzá tartalmat, és megpróbálja összevonni a tulajdonságokat.
- `append` a fájl végéhez ad hozzá tartalmat, és szintén megpróbálja összevonni a tulajdonságokat.
- `paneType` (opcionális) meghatározza, hogy a jegyzet hol nyíljon meg a felületen.
  - ha nincs megadva, az utolsó aktív lap lesz lecserélve.
  - `paneType=tab` megnyitás új lapon.
  - `paneType=split` megnyitás új lapcsoportban.
  - `paneType=window` megnyitás kiugró ablakban (csak asztali verzión).

## Jegyzet létrehozása

A `new` művelet új jegyzetet hoz létre a széfben, opcionálisan tartalommal.

### Példák

- `obsidian://new?vault=my%20vault&name=my%20note`
  Ez megnyitja a `my vault` széfet, és létrehoz egy új jegyzetet `my note` néven.
- `obsidian://new?vault=my%20vault&file=path%2Fto%2Fmy%20note`
  Ez megnyitja a `my vault` széfet, és létrehoz egy új jegyzetet a `path/to/my note` helyen.

### Paraméterek

- `vault` a széf neve vagy a széf azonosítója lehet[^1]. Ugyanaz, mint az `open` műveletnél.
- `name` a létrehozandó fájl neve. Ha ez meg van adva, a fájl helye az "Új jegyzetek alapértelmezett helye" beállítás alapján lesz meghatározva.
- `file` a széfen belüli abszolút útvonal, a nevet is beleértve. Felülírja a `name` paramétert, ha meg van adva.
- `path` globálisan abszolút útvonal. Hasonlóan működik, mint az `open` művelet `path` opciója, amely felülírja a `vault` és `file` paramétereket is.
- `paneType` (opcionális) meghatározza, hogy a jegyzet hol nyíljon meg a felületen. Ugyanaz, mint az `open` műveletnél.
- `content` (opcionális) a jegyzet tartalma.
- `clipboard` (opcionális) a vágólap tartalmának használata a `content` megadása helyett.
- `silent` (opcionális) add meg ezt a paramétert, ha nem szeretnéd megnyitni az új jegyzetet.
- `append` (opcionális) add meg ezt a paramétert, ha meglévő fájlhoz szeretnél hozzáfűzni, amennyiben létezik ilyen.
- `overwrite` (opcionális) meglévő fájl felülírása, ha létezik ilyen, de csak ha az `append` nincs beállítva.
- `x-success` (opcionális) lásd [[#x-callback-url paraméterek használata]].

## Napi jegyzet létrehozása vagy megnyitása

A `daily` művelet létrehozza vagy megnyitja a napi jegyzetedet. A [[Napi jegyzetek]] bővítménynek engedélyezve kell lennie.

### Példák

- `obsidian://daily?vault=my%20vault`
  Ez megnyitja a `my vault` széfet, és létrehozza vagy megnyitja a napi jegyzetet.

### Paraméterek

A `daily` művelet ugyanazokat a paramétereket fogadja el, mint a `new` művelet.

## Egyedi jegyzet

A `unique` művelet új egyedi jegyzetet hoz létre a széfben. Az [[Egyedi jegyzet készítő|Egyedi jegyzet készítő]] bővítménynek engedélyezve kell lennie.

### Példák

- `obsidian://unique?vault=my%20vault`
  Ez megnyitja a `my vault` széfet, és létrehoz egy új egyedi jegyzetet.
- - `obsidian://unique?vault=my%20vault&content=Hello%20World`
  Ez megnyitja a `my vault` széfet, és létrehoz egy új egyedi jegyzetet `Hello World` tartalommal.

### Paraméterek

- `vault` a széf neve vagy a széf azonosítója lehet[^1]. Ugyanaz, mint az `open` műveletnél.
- `paneType` (opcionális) meghatározza, hogy a jegyzet hol nyíljon meg a felületen. Ugyanaz, mint az `open` műveletnél.
- `content` (opcionális) a jegyzet tartalma.
- `clipboard` (opcionális) a vágólap tartalmának használata a `content` megadása helyett.
- `x-success` (opcionális) lásd [[#x-callback-url paraméterek használata]].

## Keresés megnyitása

A `search` művelet megnyitja a [[Keresés]]t a megadott széfben, és opcionálisan végrehajt egy keresést.

### Példák

- `obsidian://search?vault=my%20vault`
  Ez megnyitja a `my vault` széfet, és megnyitja a [[Keresés]]t.
- `obsidian://search?vault=my%20vault&query=Obsidian`
  Ez megnyitja a `my vault` széfet, megnyitja a [[Keresés]]t, és rákeresi az `Obsidian` kifejezésre.

### Paraméterek

- `vault` a széf neve vagy a széf azonosítója lehet[^1]. Ugyanaz, mint az `open` műveletnél.
- `query` (opcionális) a végrehajtandó keresési kifejezés.

## Széfkezelő megnyitása

A `choose-vault` művelet megnyitja a [[Széfek kezelése|széfkezelőt]].

### Példák

- `obsidian://choose-vault`

## Integráció a Hook alkalmazással

Ez az Obsidian URI művelet a [Hook](https://hookproductivity.com/) alkalmazással való használatra készült.

### Példa

`obsidian://hook-get-address`

### Paraméterek

- `vault` (opcionális) a széf neve vagy a széf azonosítója lehet[^1]. Ha nincs megadva, az aktuális vagy utoljára fókuszált széf lesz használva.
- `x-success` (opcionális) lásd [[#x-callback-url paraméterek használata]].
- `x-error` (opcionális) lásd [[#x-callback-url paraméterek használata]].

Ha az `x-success` meg van adva, ez az API x-callback-url-ként használja. Ellenkező esetben az aktuálisan fókuszált jegyzet Markdown hivatkozását másolja a vágólapra, `obsidian://open` URL formátumban.

## x-callback-url paraméterek használata

Egyes végpontok elfogadják az x-callback-url `x-success` és `x-error` paramétereket. Ha meg vannak adva, az Obsidian a következőket adja át az `x-success` visszahívásnak:

- `name` a fájl neve, fájlkiterjesztés nélkül.
- `url` a fájl `obsidian://` URI-ja.
- `file` (csak asztali verzión) a fájl `file://` URL-je.

Például, ha az Obsidian ezt kapja:
`obsidian://.....x-success=myapp://x-callback-url`, a válasz ez lenne: `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`

## Rövidített formátumok

A fenti formátumokon kívül két további "rövidített" formátum is elérhető széfek és fájlok megnyitásához:

1. `obsidian://vault/my vault/my note` egyenértékű a `obsidian://open?vault=my%20vault&file=my%20note` formával.
2. `obsidian:///absolute/path/to/my note` egyenértékű a `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note` formával.

## Hibaelhárítás

### Obsidian URI regisztrálása

Windows és macOS rendszeren az alkalmazás egyszeri futtatása elegendő az Obsidian URI protokoll regisztrálásához a számítógépen.

Linux rendszeren a folyamat sokkal összetettebb:

1. Győződj meg róla, hogy létrehoztál egy `obsidian.desktop` fájlt. [Részletekért lásd itt](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files).
2. Győződj meg róla, hogy az asztali fájl `Exec` mezője `Exec=executable %u` formában van megadva. A `%u` szolgál az `obsidian://` URI-k alkalmazásnak való átadására.
3. Ha az AppImage telepítőt használod, előfordulhat, hogy ki kell csomagolnod az `Obsidian-x.y.z.AppImage --appimage-extract` paranccsal. Ezután győződj meg róla, hogy az `Exec` direktíva a kicsomagolt futtatható fájlra mutat.


[^1]: A széf azonosítója egy véletlenszerűen generált 16 karakteres kód, amelyet a széfhez rendeltek, például `ef6ca3e3b524d22f`. Ez az azonosító a számítógépen mappánként egyedi. Az azonosítót megtalálhatod a széfváltó megnyitásával, majd a kívánt széf helyi menüjében a "Széfazonosító másolása" lehetőségre kattintva.
