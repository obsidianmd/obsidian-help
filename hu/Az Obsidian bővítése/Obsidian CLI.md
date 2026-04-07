---
permalink: cli
description: 'Minden, amit az Obsidianban megtehet, parancssorból is elvégezhető.'
---
Az Obsidian CLI egy parancssori felület, amely lehetővé teszi az Obsidian vezérlését a terminálból szkriptelés, automatizálás és külső eszközökkel való integráció céljából.

Bármit, amit az Obsidianban meg tudsz csinálni, megteheted a parancssorból is. Az Obsidian CLI még [[#Fejlesztői parancsok|fejlesztői parancsokat]] is tartalmaz a fejlesztői eszközök eléréséhez, elemek vizsgálatához, képernyőképek készítéséhez, bővítmények újratöltéséhez és még sok máshoz.

![[obsidian-cli.mp4#interface]]

> [!warning] Obsidian 1.12 telepítő szükséges
> A CLI használatához az Obsidian 1.12 telepítő szükséges. Lásd a [[Az Obsidian frissítése#Telepítő frissítések|telepítőverzió frissítési útmutatót]].

## Az Obsidian CLI telepítése

Frissíts a legújabb [[Az Obsidian frissítése|Obsidian telepítőverzióra]] (1.12.7+).

Engedélyezd az Obsidian CLI-t az Obsidianban:

1. Menj a **Beállítások** → **Általános** menüpontba.
2. Engedélyezd a **Parancssori felület** opciót.
3. Kövesd az utasításokat az Obsidian CLI regisztrálásához.

Ha problémákba ütközöl az Obsidian CLI telepítésekor, lásd a [[#Hibaelhárítás]] részt.

## Első lépések

Az Obsidian CLI egyszeri parancsokat és egy terminál felhasználói felületet (TUI) is támogat, interaktív súgóval és automatikus kiegészítéssel.

> [!info] Az Obsidian alkalmazásnak futnia kell
> Az Obsidian CLI-hez az Obsidian alkalmazásnak futnia kell. Ha az Obsidian nem fut, az első parancs, amelyet futtatsz, elindítja az Obsidiant.
>
> Szeretnél szinkronizálni az asztali alkalmazás nélkül? Lásd: [[Fej nélküli Sync|Obsidian Headless]].

### Parancs futtatása

Futtass egyedi parancsot a TUI megnyitása nélkül:

```shell
# A súgó parancs futtatása
obsidian help
```

### A terminál felület használata

Használd a TUI-t az `obsidian` beírásával. A további parancsok az `obsidian` előtag nélkül is megadhatók.

```shell
# TUI megnyitása, majd súgó futtatása
obsidian
help
```

A TUI támogatja az automatikus kiegészítést, a parancselőzményeket és a visszafelé keresést. Használd a `Ctrl+R` billentyűkombinációt a parancselőzmények kereséséhez. Az összes elérhető billentyűkombinációért lásd a [[#Billentyűparancsok]] részt.

## Példák

Íme néhány példa arra, mire képes az Obsidian CLI.

### Mindennapi használat

```shell
# Mai napi jegyzet megnyitása
obsidian daily

# Feladat hozzáadása a napi jegyzethez
obsidian daily:append content="- [ ] Bevásárlás"

# Keresés a széfben
obsidian search query="megbeszélés jegyzetek"

# Az aktív fájl olvasása
obsidian read

# Az összes feladat listázása a napi jegyzetből
obsidian tasks daily

# Új jegyzet létrehozása sablonból
obsidian create name="Párizsi utazás" template=Utazás

# Az összes címke listázása a széfben darabszámokkal
obsidian tags counts

# Egy fájl két verziójának összehasonlítása
obsidian diff file=README from=1 to=3
```

### Fejlesztőknek

Számos [[#Fejlesztői parancsok|fejlesztői parancs]] érhető el bővítmény- és témafejlesztéshez. Ezek a parancsok lehetővé teszik az ágensalapú kódolási eszközök számára az automatikus tesztelést és hibakeresést.

```shell
# Fejlesztői eszközök megnyitása
obsidian devtools

# Fejlesztés alatt álló közösségi bővítmény újratöltése
obsidian plugin:reload id=my-plugin

# Képernyőkép készítése az alkalmazásról
obsidian dev:screenshot path=screenshot.png

# JavaScript futtatása az alkalmazás konzolján
obsidian eval code="app.vault.getFiles().length"
```

## Útmutató

### Paraméterek és jelzők használata

A parancsok **paramétereket** és **jelzőket** használhatnak. A legtöbb parancs nem igényel paramétereket vagy jelzőket. A kötelező paraméterek `required` jelöléssel vannak ellátva. Például:

```shell
# Új jegyzet létrehozása az alapértelmezett "Névtelen" névvel
obsidian create
```

Egy **paraméter** értéket vesz fel, `paraméter=érték` formában. Ha az érték szóközöket tartalmaz, tedd idézőjelek közé:

```shell
# Új jegyzet létrehozása "Jegyzet" névvel és "Helló világ" tartalommal
obsidian create name=Jegyzet content="Helló világ"
```

Egy **jelző** egy logikai kapcsoló érték nélkül. Írd be a bekapcsoláshoz, például az `open` és az `overwrite` jelzők:

```shell
# Jegyzet létrehozása és megnyitása
obsidian create name=Jegyzet content="Helló" open overwrite
```

Többsoros tartalomhoz használd a `\n` karaktert új sorhoz. Használd a `\t` karaktert tabulátorhoz.

```bash
obsidian create name=Jegyzet content="# Cím\n\nTörzs szöveg"
```

### Széf megcélzása

Ha a terminál aktuális munkakönyvtára egy széf mappa, az a széf lesz alapértelmezetten használva. Egyébként az éppen aktív széf kerül használatra.

Használd a `vault=<név>` vagy `vault=<azonosító>` paramétert egy adott széf megcélzásához. Ennek kell az első paraméternek lennie a parancs előtt:

```shell
obsidian vault=Jegyzetek daily
obsidian vault="A széfem" search query="teszt"
```

A TUI-ban használd a `vault:open <név>` vagy `<azonosító>` parancsot egy másik széfre váltáshoz.

### Fájl megcélzása

Sok parancs elfogadja a `file` és `path` paramétereket egy adott fájl megcélzásához. Ha egyik sincs megadva, a parancs az aktív fájlra vonatkozik.

- `file=<név>` ugyanúgy oldja fel a fájlt, mint a [[Belső hivatkozások|wikihivatkozások]], a fájlnév alapján egyeztet a teljes útvonal vagy kiterjesztés megadása nélkül.
- `path=<útvonal>` a széf gyökerétől számított pontos útvonalat igényli, pl. `mappa/jegyzet.md`.

```shell
# Ezek egyenértékűek, ha a "Recept.md" az egyetlen ilyen nevű fájl
obsidian read file=Recept
obsidian read path="Sablonok/Recept.md"
```

### Kimenet másolása

Adj hozzá `--copy` jelzőt bármelyik parancshoz a kimenet vágólapra másolásához:

```shell
read --copy
search query="TODO" --copy
```


## Általános parancsok

### `help`

Az összes elérhető parancs listájának megjelenítése.

| Paraméter   | Leírás                                       |
| ----------- | -------------------------------------------- |
| `<command>` | Súgó megjelenítése egy adott parancshoz.      |

### `version`

Az Obsidian verziójának megjelenítése.

### `reload`

Az alkalmazás ablakának újratöltése.

### `restart`

Az alkalmazás újraindítása.


## Bázisok

Parancsok a [[Bevezetés a Bázisokba|Bázisokhoz]].

### `bases`

Az összes `.base` fájl listázása a széfben.

### `base:views`

Nézetek listázása az aktuális bázis fájlban.

### `base:create`

Új elem létrehozása egy bázisban. Alapértelmezetten az aktív bázis nézetet használja, ha nincs fájl megadva.

```bash
file=<név>         # bázis fájlnév
path=<útvonal>     # bázis fájl útvonal
view=<név>         # nézet neve
name=<név>         # új fájlnév
content=<szöveg>   # kezdeti tartalom

open               # fájl megnyitása létrehozás után
newtab             # megnyitás új lapon
```

### `base:query`

Bázis lekérdezése és eredmények visszaadása.

```bash
file=<név>                     # bázis fájlnév
path=<útvonal>                 # bázis fájl útvonal
view=<név>                     # lekérdezendő nézet neve
format=json|csv|tsv|md|paths   # kimeneti formátum (alapértelmezett: json)
```

## Könyvjelzők

Parancsok a [[Könyvjelzők|Könyvjelzőkhöz]].

### `bookmarks`

Könyvjelzők listázása.

```bash
total              # könyvjelzők számának visszaadása
verbose            # könyvjelző típusok megjelenítése
format=json|tsv|csv  # kimeneti formátum (alapértelmezett: tsv)
```

### `bookmark`

Könyvjelző hozzáadása.

```bash
file=<útvonal>     # könyvjelzőzendő fájl
subpath=<alútvonal> # alútvonal (fejléc vagy blokk) a fájlon belül
folder=<útvonal>   # könyvjelzőzendő mappa
search=<lekérdezés> # könyvjelzőzendő keresési lekérdezés
url=<url>          # könyvjelzőzendő URL
title=<cím>        # könyvjelző címe
```

## Parancspaletta

Parancsok a [[Parancspaletta|Parancspalettához]] és a [[Gyorsbillentyűk|Gyorsbillentyűkhöz]]. Ez tartalmazza a bővítmények által regisztrált összes parancsot.

### `commands`

Elérhető parancskódok listázása.

```bash
filter=<előtag>    # szűrés azonosító előtag alapján
```

### `command`

Obsidian parancs végrehajtása.

```bash
id=<parancs-id>    # (kötelező) végrehajtandó parancskód
```

### `hotkeys`

Gyorsbillentyűk listázása az összes parancshoz.

```bash
total              # gyorsbillentyűk számának visszaadása
verbose            # megmutatja, ha a gyorsbillentyű egyéni
format=json|tsv|csv  # kimeneti formátum (alapértelmezett: tsv)
```

### `hotkey`

Gyorsbillentyű lekérése egy parancshoz.

```bash
id=<parancs-id>    # (kötelező) parancskód

verbose            # megmutatja, ha egyéni vagy alapértelmezett
```

## Napi jegyzetek

Parancsok a [[Napi jegyzetek|Napi jegyzetekhez]].

### `daily`

Napi jegyzet megnyitása.

```bash
paneType=tab|split|window    # panel típusa a megnyitáshoz
```

### `daily:path`

Napi jegyzet útvonalának lekérése. A várt útvonalat adja vissza akkor is, ha a fájl még nem lett létrehozva.

### `daily:read`

Napi jegyzet tartalmának olvasása.

### `daily:append`

Tartalom hozzáfűzése a napi jegyzethez.

```bash
content=<szöveg>   # (kötelező) hozzáfűzendő tartalom
paneType=tab|split|window    # panel típusa a megnyitáshoz

inline             # hozzáfűzés új sor nélkül
open               # fájl megnyitása hozzáadás után
```

### `daily:prepend`

Tartalom beszúrása a napi jegyzet elejére.

```bash
content=<szöveg>   # (kötelező) beszúrandó tartalom
paneType=tab|split|window    # panel típusa a megnyitáshoz

inline             # beszúrás új sor nélkül
open               # fájl megnyitása hozzáadás után
```

## Fájlelőzmények

### `diff`

Verziók listázása vagy összehasonlítása a helyi [[Fájl-visszaállítás|Fájl-visszaállításból]] és a [[Bevezetés az Obsidian Sync használatába|Sync-ből]]. A verziók a legújabbtól a legrégebbiig vannak számozva.

```bash
file=<név>           # fájlnév
path=<útvonal>       # fájl útvonal
from=<n>             # összehasonlítás kiinduló verziószáma
to=<n>               # összehasonlítás cél verziószáma
filter=local|sync    # szűrés verzióforrás alapján
```

**Példák:**

```shell
# Az aktív fájl összes verziójának listázása
diff

# Egy adott fájl összes verziójának listázása
diff file=Recept

# A legújabb verzió összehasonlítása az aktuális fájllal
diff file=Recept from=1

# Két verzió összehasonlítása
diff file=Recept from=2 to=1

# Csak Sync verziók megjelenítése
diff filter=sync
```

### `history`

Verziók listázása csak a [[Fájl-visszaállítás|Fájl-visszaállításból]]. A megfelelő Sync parancsért lásd a [[#Sync|sync:history]] részt.

```bash
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal
```

### `history:list`

Az összes helyi előzménnyel rendelkező fájl listázása.

### `history:read`

Helyi előzményverzió olvasása.

```bash
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal
version=<n>        # verziószám (alapértelmezett: 1)
```

### `history:restore`

Helyi előzményverzió visszaállítása.

```bash
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal
version=<n>        # (kötelező) verziószám
```

### `history:open`

Fájl-visszaállítás megnyitása.

```bash
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal
```

## Fájlok és mappák

### `file`

Fájlinformáció megjelenítése (alapértelmezett: aktív fájl).

```bash
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal
```

Példa:

```
path       Jegyzetek/Recept.md
name       Recept
extension  md
size       1024
created    1700000000000
modified   1700001000000
```

### `files`

Fájlok listázása a széfben.

```bash
folder=<útvonal>   # szűrés mappa alapján
ext=<kiterjesztés> # szűrés kiterjesztés alapján

total              # fájlok számának visszaadása
```

### `folder`

Mappa információ megjelenítése.

```bash
path=<útvonal>           # (kötelező) mappa útvonal
info=files|folders|size  # csak adott információ visszaadása
```

### `folders`

Mappák listázása a széfben.

```bash
folder=<útvonal>   # szűrés szülőmappa alapján

total              # mappák számának visszaadása
```

### `open`

Fájl megnyitása.

```bash
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal

newtab             # megnyitás új lapon
```

### `create`

Fájl létrehozása vagy felülírása.

```bash
name=<név>         # fájlnév
path=<útvonal>     # fájl útvonal
content=<szöveg>   # kezdeti tartalom
template=<név>     # használandó sablon

overwrite          # felülírás, ha a fájl létezik
open               # fájl megnyitása létrehozás után
newtab             # megnyitás új lapon
```

### `read`

Fájl tartalmának olvasása (alapértelmezett: aktív fájl).

```bash
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal
```

### `append`

Tartalom hozzáfűzése egy fájlhoz (alapértelmezett: aktív fájl).

```bash
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal
content=<szöveg>   # (kötelező) hozzáfűzendő tartalom

inline             # hozzáfűzés új sor nélkül
```

### `prepend`

Tartalom beszúrása a metaadatok után (alapértelmezett: aktív fájl).

```bash
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal
content=<szöveg>   # (kötelező) beszúrandó tartalom

inline             # beszúrás új sor nélkül
```

### `move`

Fájl áthelyezése vagy átnevezése (alapértelmezett: aktív fájl). Automatikusan frissíti a [[Belső hivatkozások|belső hivatkozásokat]], ha ez be van kapcsolva a [[Beállítások#Belső hivatkozások automatikus frissítése|széf beállításaiban]].

```bash
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal
to=<útvonal>       # (kötelező) célmappa vagy útvonal
```

### `rename`

Fájl átnevezése (alapértelmezett: aktív fájl). A fájl kiterjesztése automatikusan megmarad, ha az új névben nincs megadva. Használd a [[#`move`|move]] parancsot a fájl egyidejű átnevezéséhez és áthelyezéséhez. Automatikusan frissíti a [[Belső hivatkozások|belső hivatkozásokat]], ha ez be van kapcsolva a [[Beállítások#Belső hivatkozások automatikus frissítése|széf beállításaiban]].

```bash
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal
name=<név>         # (kötelező) új fájlnév
```

### `delete`

Fájl törlése (alapértelmezett: aktív fájl, alapértelmezetten kukába).

```bash
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal

permanent          # kuka kihagyása, végleges törlés
```

## Hivatkozások

Parancsok a [[Visszahivatkozások|Visszahivatkozásokhoz]] és a [[Kimenő kapcsolatok|Kimenő kapcsolatokhoz]].

### `backlinks`

Visszahivatkozások listázása egy fájlhoz (alapértelmezett: aktív fájl).

```bash
file=<név>         # célfájl neve
path=<útvonal>     # célfájl útvonala

counts             # hivatkozások számának megjelenítése
total              # visszahivatkozások számának visszaadása
format=json|tsv|csv  # kimeneti formátum (alapértelmezett: tsv)
```

### `links`

Kimenő hivatkozások listázása egy fájlból (alapértelmezett: aktív fájl).

```bash
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal

total              # hivatkozások számának visszaadása
```

### `unresolved`

Feloldatlan hivatkozások listázása a széfben.

```bash
total              # feloldatlan hivatkozások számának visszaadása
counts             # hivatkozások számának megjelenítése
verbose            # forrásfájlok megjelenítése
format=json|tsv|csv  # kimeneti formátum (alapértelmezett: tsv)
```

### `orphans`

Bejövő hivatkozás nélküli fájlok listázása.

```bash
total              # árva fájlok számának visszaadása
```

### `deadends`

Kimenő hivatkozás nélküli fájlok listázása.

```bash
total              # zsákutca fájlok számának visszaadása
```

## Vázlat

Parancsok a [[Vázlat|Vázlathoz]].

### `outline`

Fejlécek megjelenítése az aktuális fájlhoz.

```bash
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal
format=tree|md|json  # kimeneti formátum (alapértelmezett: tree)

total              # fejlécek számának visszaadása
```

## Bővítmények

Parancsok az [[Alap bővítmények|Alap bővítményekhez]] és a [[Közösségi bővítmények|Közösségi bővítményekhez]].

### `plugins`

Telepített bővítmények listázása.

```bash
filter=core|community  # szűrés bővítménytípus alapján

versions               # verziószámok megjelenítése
format=json|tsv|csv    # kimeneti formátum (alapértelmezett: tsv)
```

### `plugins:enabled`

Engedélyezett bővítmények listázása.

```bash
filter=core|community  # szűrés bővítménytípus alapján

versions               # verziószámok megjelenítése
format=json|tsv|csv    # kimeneti formátum (alapértelmezett: tsv)
```

### `plugins:restrict`

Korlátozott mód be-/kikapcsolása vagy ellenőrzése.

```bash
on                 # korlátozott mód engedélyezése
off                # korlátozott mód letiltása
```

### `plugin`

Bővítmény információ lekérése.

```bash
id=<bővítmény-id>  # (kötelező) bővítmény azonosító
```

### `plugin:enable`

Bővítmény engedélyezése.

```bash
id=<id>                # (kötelező) bővítmény azonosító
filter=core|community  # bővítmény típusa
```

### `plugin:disable`

Bővítmény letiltása.

```bash
id=<id>                # (kötelező) bővítmény azonosító
filter=core|community  # bővítmény típusa
```

### `plugin:install`

Közösségi bővítmény telepítése.

```bash
id=<id>            # (kötelező) bővítmény azonosító

enable             # engedélyezés telepítés után
```

### `plugin:uninstall`

Közösségi bővítmény eltávolítása.

```bash
id=<id>            # (kötelező) bővítmény azonosító
```

### `plugin:reload`

Bővítmény újratöltése (fejlesztőknek).

```bash
id=<id>            # (kötelező) bővítmény azonosító
```

## Tulajdonságok

Parancsok a [[Tulajdonságok|Tulajdonságokhoz]].

### `aliases`

Alternatív nevek listázása a széfben. Használd az `active` jelzőt vagy a `file`/`path` paramétert egy adott fájl alternatív neveinek megjelenítéséhez.

```bash
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal

total              # alternatív nevek számának visszaadása
verbose            # fájl útvonalak megjelenítése
active             # az aktív fájl alternatív neveinek megjelenítése
```

### `properties`

Tulajdonságok listázása a széfben. Használd az `active` jelzőt vagy a `file`/`path` paramétert egy adott fájl tulajdonságainak megjelenítéséhez.

```bash
file=<név>         # tulajdonságok megjelenítése fájlhoz
path=<útvonal>     # tulajdonságok megjelenítése útvonalhoz
name=<név>         # adott tulajdonság darabszámának lekérése
sort=count         # rendezés darabszám szerint (alapértelmezett: név)
format=yaml|json|tsv  # kimeneti formátum (alapértelmezett: yaml)

total              # tulajdonságok számának visszaadása
counts             # előfordulások számának megjelenítése
active             # az aktív fájl tulajdonságainak megjelenítése
```

### `property:set`

Tulajdonság beállítása egy fájlon (alapértelmezett: aktív fájl).

```bash
name=<név>                                     # (kötelező) tulajdonság neve
value=<érték>                                  # (kötelező) tulajdonság értéke
type=text|list|number|checkbox|date|datetime   # tulajdonságtípus
file=<név>                                     # fájlnév
path=<útvonal>                                 # fájl útvonal
```

### `property:remove`

Tulajdonság eltávolítása egy fájlból (alapértelmezett: aktív fájl).

```bash
name=<név>         # (kötelező) tulajdonság neve
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal
```

### `property:read`

Tulajdonság értékének olvasása egy fájlból (alapértelmezett: aktív fájl).

```bash
name=<név>         # (kötelező) tulajdonság neve
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal
```

## Publish

Parancsok az [[Bevezetés az Obsidian Publish-be|Obsidian Publish-hez]].

### `publish:site`

Publish webhely információ megjelenítése (slug, URL).

### `publish:list`

Publikált fájlok listázása.

```bash
total              # publikált fájlok számának visszaadása
```

### `publish:status`

Publikálási változások listázása.

```bash
total              # változások számának visszaadása
new                # csak új fájlok megjelenítése
changed            # csak módosított fájlok megjelenítése
deleted            # csak törölt fájlok megjelenítése
```

### `publish:add`

Fájl vagy az összes módosított fájl publikálása (alapértelmezett: aktív fájl).

```bash
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal

changed            # az összes módosított fájl publikálása
```

### `publish:remove`

Fájl publikálásának visszavonása (alapértelmezett: aktív fájl).

```bash
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal
```

### `publish:open`

Fájl megnyitása a publikált webhelyen (alapértelmezett: aktív fájl).

```bash
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal
```

## Véletlenszerű jegyzetek

Parancsok a [[Véletlenszerű jegyzet|Véletlenszerű jegyzethez]].

### `random`

Véletlenszerű jegyzet megnyitása.

```bash
folder=<útvonal>   # korlátozás mappára

newtab             # megnyitás új lapon
```

### `random:read`

Véletlenszerű jegyzet olvasása (útvonallal együtt).

```bash
folder=<útvonal>   # korlátozás mappára
```

## Keresés

Parancsok a [[Keresés|Kereséshez]].

### `search`

Szöveg keresése a széfben. Egyező fájl útvonalakat ad vissza.

```bash
query=<szöveg>     # (kötelező) keresési lekérdezés
path=<mappa>       # korlátozás mappára
limit=<n>          # maximális fájlszám
format=text|json   # kimeneti formátum (alapértelmezett: text)

total              # találatok számának visszaadása
case               # kis-/nagybetűre érzékeny
```

### `search:context`

Keresés az egyező sor kontextusával. Grep-stílusú `útvonal:sor: szöveg` kimenetet ad vissza.

```bash
query=<szöveg>     # (kötelező) keresési lekérdezés
path=<mappa>       # korlátozás mappára
limit=<n>          # maximális fájlszám
format=text|json   # kimeneti formátum (alapértelmezett: text)

case               # kis-/nagybetűre érzékeny
```

### `search:open`

Keresési nézet megnyitása.

```bash
query=<szöveg>     # kezdeti keresési lekérdezés
```

## Sync

Parancsok az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync-hez]].

> [!tip] Szinkronizálás az asztali alkalmazás nélkül
> Ezek a parancsok a futó Obsidian alkalmazáson belüli Sync-et vezérlik. A széfek parancssorból történő szinkronizálásához az asztali alkalmazás nélkül lásd a [[Fej nélküli Sync]] részt.

### `sync`

Szinkronizálás szüneteltetése vagy folytatása.

```bash
on                 # szinkronizálás folytatása
off                # szinkronizálás szüneteltetése
```

### `sync:status`

Szinkronizálás állapotának és használatának megjelenítése.

### `sync:history`

Szinkronizálási verziótörténet listázása egy fájlhoz (alapértelmezett: aktív fájl).

```bash
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal

total              # verziók számának visszaadása
```

### `sync:read`

Szinkronizálási verzió olvasása (alapértelmezett: aktív fájl).

```bash
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal
version=<n>        # (kötelező) verziószám
```

### `sync:restore`

Szinkronizálási verzió visszaállítása (alapértelmezett: aktív fájl).

```bash
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal
version=<n>        # (kötelező) verziószám
```

### `sync:open`

Szinkronizálási előzmények megnyitása (alapértelmezett: aktív fájl).

```bash
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal
```

### `sync:deleted`

Szinkronizálásban törölt fájlok listázása.

```bash
total              # törölt fájlok számának visszaadása
```

## Címkék

Parancsok a [[Címkék|Címkékhez]].

### `tags`

Címkék listázása a széfben. Használd az `active` jelzőt vagy a `file`/`path` paramétert egy adott fájl címkéinek megjelenítéséhez.

```bash
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal
sort=count         # rendezés darabszám szerint (alapértelmezett: név)

total              # címkék számának visszaadása
counts             # címke darabszámok megjelenítése
format=json|tsv|csv  # kimeneti formátum (alapértelmezett: tsv)
active             # az aktív fájl címkéinek megjelenítése
```

### `tag`

Címke információ lekérése.

```bash
name=<címke>       # (kötelező) címke neve

total              # előfordulások számának visszaadása
verbose            # fájllista és darabszám megjelenítése
```

## Feladatok

Parancsok a feladatkezeléshez.

### `tasks`

Feladatok listázása a széfben. Használd az `active` jelzőt vagy a `file`/`path` paramétert egy adott fájl feladatainak megjelenítéséhez.

```bash
file=<név>         # szűrés fájlnév alapján
path=<útvonal>     # szűrés fájl útvonal alapján
status="<karakter>" # szűrés állapotkarakter alapján

total              # feladatok számának visszaadása
done               # befejezett feladatok megjelenítése
todo               # befejezetlen feladatok megjelenítése
verbose            # fájlonkénti csoportosítás sorszámokkal
format=json|tsv|csv  # kimeneti formátum (alapértelmezett: text)
active             # az aktív fájl feladatainak megjelenítése
daily              # napi jegyzet feladatainak megjelenítése
```

**Példák:**

```bash
# Az összes feladat listázása a széfben
tasks

# Befejezetlen feladatok listázása a széfben
tasks todo

# Befejezett feladatok listázása egy adott fájlból
tasks file=Recept done

# Mai napi jegyzet feladatainak listázása
tasks daily

# Feladatok számolása a napi jegyzetben
tasks daily total

# Feladatok listázása fájl útvonalakkal és sorszámokkal
tasks verbose

# Szűrés egyéni állapot alapján (speciális karakterek idézőjelbe tétele)
tasks 'status=?'
```

### `task`

Feladat megjelenítése vagy frissítése.

```bash
ref=<útvonal:sor>  # feladat hivatkozás (útvonal:sor)
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal
line=<n>           # sorszám
status="<karakter>" # állapotkarakter beállítása

toggle             # feladat állapotának váltása
daily              # napi jegyzet
done               # megjelölés befejezettként
todo               # megjelölés befejezendőként
```

**Példák:**

```bash
# Feladat információ megjelenítése
task file=Recept line=8
task ref="Recept.md:8"

# Feladat befejezettségének váltása
task ref="Recept.md:8" toggle

# Feladat váltása a napi jegyzetben
task daily line=3 toggle

# Feladat állapotának beállítása
task file=Recept line=8 done      # → [x]
task file=Recept line=8 todo      # → [ ]
task file=Recept line=8 status=-  # → [-]
task daily line=3 done            # Napi jegyzet feladatának megjelölése befejezettként
```


## Sablonok

Parancsok a [[Sablonok|Sablonokhoz]].

### `templates`

Sablonok listázása.

```bash
total              # sablonok számának visszaadása
```

### `template:read`

Sablon tartalmának olvasása.

```bash
name=<sablon>      # (kötelező) sablon neve
title=<cím>        # cím a változófeloldáshoz

resolve            # sablonváltozók feloldása
```

### `template:insert`

Sablon beszúrása az aktív fájlba.

```bash
name=<sablon>      # (kötelező) sablon neve
```

**Megjegyzések:**
- A `resolve` opció feldolgozza a `{{date}}`, `{{time}}`, `{{title}}` változókat
- Használd a `create path=<útvonal> template=<név>` parancsot fájl sablonból történő létrehozásához

## Témák és kódrészletek

Parancsok a [[Témák|Témákhoz]] és a [[CSS kódrészletek|CSS kódrészletekhez]].

### `themes`

Telepített témák listázása.

```bash
versions           # verziószámok megjelenítése
```

### `theme`

Aktív téma megjelenítése vagy információ lekérése.

```bash
name=<név>         # téma neve a részletekért
```

### `theme:set`

Aktív téma beállítása.

```bash
name=<név>         # (kötelező) téma neve (üres az alapértelmezetthez)
```

### `theme:install`

Közösségi téma telepítése.

```bash
name=<név>         # (kötelező) téma neve

enable             # aktiválás telepítés után
```

### `theme:uninstall`

Téma eltávolítása.

```bash
name=<név>         # (kötelező) téma neve
```

### `snippets`

Telepített CSS kódrészletek listázása.

### `snippets:enabled`

Engedélyezett CSS kódrészletek listázása.

### `snippet:enable`

CSS kódrészlet engedélyezése.

```bash
name=<név>         # (kötelező) kódrészlet neve
```

### `snippet:disable`

CSS kódrészlet letiltása.

```bash
name=<név>         # (kötelező) kódrészlet neve
```

## Egyedi jegyzetek

Parancsok az [[Egyedi jegyzet készítő|Egyedi jegyzet készítőhöz]].

### `unique`

Egyedi jegyzet létrehozása.

```bash
name=<szöveg>      # jegyzet neve
content=<szöveg>   # kezdeti tartalom
paneType=tab|split|window    # panel típusa a megnyitáshoz

open               # fájl megnyitása létrehozás után
```

## Széf

### `vault`

Széf információ megjelenítése.

```bash
info=name|path|files|folders|size  # csak adott információ visszaadása
```

### `vaults`

Ismert széfek listázása.

```bash
total              # széfek számának visszaadása
verbose            # széf útvonalak megjelenítése
```

### `vault:open`

Váltás egy másik széfre (csak TUI-ban).

```bash
name=<név>         # (kötelező) széf neve
```

## Webes megjelenítő

Parancsok a [[Webes megjelenítő|Webes megjelenítőhöz]].

### `web`

URL megnyitása a webes megjelenítőben.

```bash
url=<url>          # (kötelező) megnyitandó URL

newtab             # megnyitás új lapon
```

## Szavak száma

Parancsok a [[Szavak száma|Szavak számához]].

### `wordcount`

Szavak és karakterek számolása (alapértelmezett: aktív fájl).

```bash
file=<név>         # fájlnév
path=<útvonal>     # fájl útvonal

words              # csak szavak számának visszaadása
characters         # csak karakterek számának visszaadása
```

## Munkaterület

Parancsok a [[Munkaterület|Munkaterülethez]] és a [[Munkaterületek]] bővítményhez.

### `workspace`

Munkaterület fa megjelenítése.

```bash
ids                # munkaterület elem azonosítók megjelenítése
```

### `workspaces`

Mentett munkaterületek listázása.

```bash
total              # munkaterületek számának visszaadása
```

### `workspace:save`

Aktuális elrendezés mentése munkaterületként.

```bash
name=<név>         # munkaterület neve
```

### `workspace:load`

Mentett munkaterület betöltése.

```bash
name=<név>         # (kötelező) munkaterület neve
```

### `workspace:delete`

Mentett munkaterület törlése.

```bash
name=<név>         # (kötelező) munkaterület neve
```

### `tabs`

Nyitott lapok listázása.

```bash
ids                # lap azonosítók megjelenítése
```

### `tab:open`

Új lap megnyitása.

```bash
group=<id>         # lapcsoport azonosító
file=<útvonal>     # megnyitandó fájl
view=<típus>       # megnyitandó nézet típus
```

### `recents`

Nemrég megnyitott fájlok listázása.

```bash
total              # nemrég megnyitott fájlok számának visszaadása
```

## Fejlesztői parancsok

Parancsok a [[Közösségi bővítmények]] és [[Témák]] fejlesztéséhez. További információkért látogass el az [Obsidian fejlesztői dokumentációba](https://docs.obsidian.md).

### `devtools`

Electron fejlesztői eszközök be-/kikapcsolása.

### `dev:debug`

Chrome DevTools Protocol debugger csatolása/leválasztása.

```bash
on                 # debugger csatolása
off                # debugger leválasztása
```

### `dev:cdp`

Chrome DevTools Protocol parancs futtatása.

```bash
method=<CDP.method>  # (kötelező) meghívandó CDP metódus
params=<json>        # metódus paraméterek JSON formátumban
```

### `dev:errors`

Rögzített JavaScript hibák megjelenítése.

```bash
clear              # hibapuffer törlése
```

### `dev:screenshot`

Képernyőkép készítése (base64 PNG-t ad vissza).

```bash
path=<fájlnév>    # kimeneti fájl útvonal
```

### `dev:console`

Rögzített konzolüzenetek megjelenítése.

```bash
limit=<n>                        # megjelenítendő üzenetek maximális száma (alapértelmezett: 50)
level=log|warn|error|info|debug  # szűrés naplózási szint alapján

clear                            # konzolpuffer törlése
```

### `dev:css`

CSS vizsgálata forráshelyekkel.

```bash
selector=<css>     # (kötelező) CSS szelektor
prop=<név>         # szűrés tulajdonságnév alapján
```

### `dev:dom`

DOM elemek lekérdezése.

```bash
selector=<css>     # (kötelező) CSS szelektor
attr=<név>         # attribútum értékének lekérése
css=<tulajdonság>  # CSS tulajdonság értékének lekérése

total              # elemek számának visszaadása
text               # szövegtartalom visszaadása
inner              # innerHTML visszaadása outerHTML helyett
all                # az összes találat visszaadása az első helyett
```

### `dev:mobile`

Mobil emuláció be-/kikapcsolása.

```bash
on                 # mobil emuláció engedélyezése
off                # mobil emuláció letiltása
```

### `eval`

JavaScript végrehajtása és eredmény visszaadása.

```bash
code=<javascript>  # (kötelező) végrehajtandó JavaScript kód
```

## Billentyűparancsok

Ezek a billentyűparancsok a [[#A terminál felület használata|TUI-ban]] érhetők el.

### Navigáció

| Művelet                                                     | Billentyűparancs   |
| ----------------------------------------------------------- | ------------------ |
| Kurzor balra mozgatása                                      | `←` / `Ctrl+B`    |
| Kurzor jobbra mozgatása (javaslat elfogadása sor végén)     | `→` / `Ctrl+F`    |
| Ugrás a sor elejére                                         | `Ctrl+A`           |
| Ugrás a sor végére                                          | `Ctrl+E`           |
| Egy szóval visszalépés                                      | `Alt+B`            |
| Egy szóval előrelépés                                       | `Alt+F`            |

### Szerkesztés

| Művelet                       | Billentyűparancs             |
| ----------------------------- | ---------------------------- |
| Törlés a sor elejéig          | `Ctrl+U`                     |
| Törlés a sor végéig           | `Ctrl+K`                     |
| Előző szó törlése             | `Ctrl+W` / `Alt+Backspace`   |

### Automatikus kiegészítés

| Művelet                                                     | Billentyűparancs |
| ----------------------------------------------------------- | ---------------- |
| Javaslat mód belépés / kiválasztott javaslat elfogadása     | `Tab`            |
| Javaslat módból kilépés                                     | `Shift+Tab`      |
| Javaslat mód belépés (friss bemenetből)                     | `↓`              |
| Első/kiválasztott javaslat elfogadása (sor végén)           | `→`              |

### Előzmények

| Művelet                                                          | Billentyűparancs   |
| ---------------------------------------------------------------- | ------------------ |
| Előző előzménybejegyzés / javaslatok felfelé navigálása          | `↑` / `Ctrl+P`    |
| Következő előzménybejegyzés / javaslatok lefelé navigálása      | `↓` / `Ctrl+N`    |
| Visszafelé keresés előzményekben (gépelés szűréshez, `Ctrl+R` a léptetéshez) | `Ctrl+R`           |

### Egyéb

| Művelet                                                           | Billentyűparancs     |
| ----------------------------------------------------------------- | -------------------- |
| Parancs végrehajtása vagy javaslat elfogadása                     | `Enter`              |
| Automatikus kiegészítés visszavonása / javaslat módból kilépés / bemenet törlése | `Escape`             |
| Képernyő törlése                                                  | `Ctrl+L`             |
| Kilépés                                                           | `Ctrl+C` / `Ctrl+D` |

## Hibaelhárítás

Ha problémáid vannak az Obsidian CLI futtatásával:

- Győződj meg róla, hogy a legújabb [[Az Obsidian frissítése|Obsidian telepítőverziót]] használod (1.12.7 vagy újabb).
- Ha éppen egy korábbi verzióról frissítetted az Obsidiant, kapcsold ki a CLI beállítást, majd kapcsold vissza, és hagyd, hogy az Obsidian elvégezze az automatikus PATH regisztrációt.
- Indítsd újra a terminált a CLI regisztrálása után, hogy a PATH változások érvénybe lépjenek.
- Az Obsidiannak futnia kell. A CLI a futó Obsidian példányhoz csatlakozik.

### Windows

Az Obsidian CLI Windowson az Obsidian 1.12.7+ telepítőt igényli. Lásd: [[Az Obsidian frissítése|Telepítőverzió frissítése]].

A Windows egy terminál átirányítót használ, amely megfelelően csatlakoztatja az Obsidiant az stdin/stdout-hoz. Ez szükséges, mert az Obsidian normál esetben GUI alkalmazásként fut, ami inkompatibilis a terminál kimenetekkel Windowson. Amikor telepíted az Obsidian 1.12.7+ verziót, az `Obsidian.com` terminál átirányító az `Obsidian.exe` fájl mappájában lesz hozzáadva.

A CLI regisztráció hozzáadja az Obsidiant a felhasználó PATH változójához, ami csak a terminál újraindítása után lép érvénybe.

### macOS

A CLI regisztráció egy szimbolikus hivatkozást hoz létre a `/usr/local/bin/obsidian` helyen, amely az alkalmazásba csomagolt CLI binárisra mutat. Ehhez rendszergazdai jogosultság szükséges — egy rendszerpárbeszédablak fogja kérni a hitelesítést.

Ellenőrizd, hogy a szimbolikus hivatkozás létezik és a megfelelő binárisra mutat:

```
ls -l /usr/local/bin/obsidian
```

Ha a szimbolikus hivatkozás hiányzik, hozd létre manuálisan:

```
sudo ln -sf /Applications/Obsidian.app/Contents/MacOS/obsidian-cli /usr/local/bin/obsidian
```

> [!note] Ha korábban az Obsidian egy régebbi verziójával regisztráltad a CLI-t, lehet, hogy maradt egy PATH bejegyzés a `~/.zprofile` fájlban. Az új regisztrációs folyamat ezt automatikusan eltávolítja, de ha megmarad, nyugodtan törölheted a `# Added by Obsidian` kezdetű sorokat a `~/.zprofile` fájlból.

### Linux

A CLI regisztráció a CLI binárist a `~/.local/bin/obsidian` helyre másolja. Erre azért van szükség, mert egyes Linux telepítési módszerek ideiglenes könyvtárakból futnak, amelyekre nem lehet tartósan szimbolikus hivatkozást létrehozni.

Győződj meg róla, hogy a `~/.local/bin` szerepel a PATH-ban. Ha nem, add hozzá a következőt a `~/.bashrc` vagy `~/.zshrc` fájlhoz:

```
export PATH="$PATH:$HOME/.local/bin"
```

Ellenőrizd, hogy a bináris létezik:

```
ls -l ~/.local/bin/obsidian
```

Ha a bináris hiányzik, másold manuálisan az Obsidian telepítési könyvtárából:

```
cp /path/to/Obsidian/obsidian-cli ~/.local/bin/obsidian
chmod 755 ~/.local/bin/obsidian
```
