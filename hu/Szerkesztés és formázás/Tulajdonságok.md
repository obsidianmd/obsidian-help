---
permalink: properties
cssclasses:
  - soft-embed
publish: true
mobile: false
description: 'A tulajdonságok lehetővé teszik a jegyzetekkel kapcsolatos információk rendszerezését. A tulajdonságok strukturált adatokat tartalmaznak, például szöveget, hivatkozásokat, dátumokat, jelölőnégyzeteket és számokat.'
---
A tulajdonságok lehetővé teszik a jegyzetekhez kapcsolódó információk rendszerezését. A tulajdonságok strukturált adatokat tartalmaznak, mint például szöveg, hivatkozások, dátumok, jelölőnégyzetek és számok. A tulajdonságok a [[Közösségi bővítmények|közösségi bővítményekkel]] kombinálva is használhatók, amelyek hasznos dolgokat tehetnek a strukturált adatokkal.

## Tulajdonság hozzáadása egy jegyzethez

Többféleképpen adhat hozzá tulajdonságot egy jegyzethez:

- Használja a **Fájltulajdonság hozzáadása** [[Parancspaletta|parancsot]].
- Használja a **`Cmd/Ctrl+;`** [[Gyorsbillentyűk|gyorsbillentyűt]].
- Válassza a **Fájltulajdonság hozzáadása** lehetőséget a **További műveletek** menüből (amely a három pont ikonra kattintva vagy a lap jobb kattintásával érhető el).
- Írja be a `---` karaktereket a fájl legelejére.

Miután hozzáadott egy tulajdonságot, egy sor jelenik meg a fájl tetején két beviteli mezővel: a tulajdonság _neve_ és a tulajdonság _értéke_.

A névhez bármit választhat. Az Obsidian több alapértelmezett tulajdonságot biztosít: `tags`, `cssclasses` és `aliases`.

Miután kiválasztotta a tulajdonság nevét, megadhatja annak értékét.

### Tulajdonságtípusok

A név és az érték mellett a tulajdonságoknak _típusuk_ is van. A tulajdonság típusa határozza meg, hogy milyen értékeket tárolhat, és hogyan kezeli azokat az Obsidian. A tulajdonság típusának megváltoztatásához kattintson a tulajdonság neve melletti típus ikonra, és válasszon másik lehetőséget. A tulajdonságtípusokat a [[Tulajdonságok nézet]] alap bővítmény segítségével is kezelheti.

Az Obsidian a következő tulajdonságtípusokat támogatja:

- **[[#Szöveg]]**
- **[[#Lista]]**
- **[[#Szám]]**
- **[[#Jelölőnégyzet]]**
- **[[#Dátum]]**
- **[[#Dátum és idő]]**
- **[[#Címkék]]**

Miután egy tulajdonságtípust hozzárendeltek egy tulajdonságnévhez, az adott névvel rendelkező összes tulajdonság a széfben ugyanazt a típust fogja használni.

## Haladó használat

### Tulajdonságok keresése

A tulajdonságoknak saját [[Keresés|keresési szintaxisuk]] van, amelyet más keresési kifejezésekkel és operátorokkal együtt használhat. [[Keresés#Tulajdonságok keresése|Lásd a tulajdonságok keresési szintaxisát]].

### Sablonok

Tulajdonságokat adhat a [[Sablonok|Sablonokhoz]].

Amikor egy sablont szúr be az aktív jegyzetbe, a sablon összes tulajdonsága hozzáadódik a jegyzethez. Az Obsidian összevonja a jegyzetben már meglévő tulajdonságokat a sablon tulajdonságaival. ^templates-properties

### Tulajdonságok átnevezése

A tulajdonságokat átnevezheti, ha jobb gombbal rájuk kattint a [[Tulajdonságok nézet|Minden tulajdonság nézetben]].

### Megjelenítési módok

Megváltoztathatja a tulajdonságok megjelenítését a jegyzetben a **[[Beállítások]] → Szerkesztő → Tulajdonságok a dokumentumban** menüpontban. A lehetőségek:

- **Látható** (alapértelmezett) – megjeleníti a tulajdonságokat a jegyzet tetején, ha vannak.
- **Rejtett** – elrejti a tulajdonságokat, de továbbra is megjeleníthetők az oldalsávban a [[Tulajdonságok nézet]] segítségével.
- **Forrás** – a tulajdonságokat egyszerű szöveges YAML formátumban jeleníti meg.

### CSS kódrészletek

[[CSS kódrészletek]] segítségével megváltoztathatja egyes jegyzetek megjelenését.

### Nem támogatott funkciók

Néhány funkciót jelenleg nem támogat az Obsidian:

- **Beágyazott tulajdonságok**: A beágyazott tulajdonságok megtekintéséhez a [[Nézetek és szerkesztési mód#Forrás mód|forrás mód]] használatát javasoljuk.
- **Tulajdonságok tömeges szerkesztése**: A [[Tulajdonságok nézet|Tulajdonságok nézeten]] kívüli mélyreható tömeges szerkesztéshez olyan eszközök használatát javasoljuk, mint a VSCode, szkriptek és közösségi bővítmények.
- **Markdown a tulajdonságokban**: Ez szándékos korlátozás, mivel a tulajdonságok kis, atomi információegységekhez készültek, amelyek emberek és gépek számára egyaránt olvashatók.

## Gyorsbillentyűk

### Tulajdonság hozzáadása

| Művelet | Gyorsbillentyű |
|---|---|
|Új tulajdonság hozzáadása|`Cmd + ;`|

### Navigálás a tulajdonságok között

Amikor egy tulajdonság fókuszban van

| Művelet | Gyorsbillentyű |
|---|---|
|Következő tulajdonság fókuszálása|`Lefelé nyíl` vagy `Tab`|
|Előző tulajdonság fókuszálása|`Felfelé nyíl` vagy `Shift+Tab`|
|Ugrás a szerkesztőbe|`Alt+Lefelé nyíl`|

### Tulajdonságok kijelölése

| Művelet | Gyorsbillentyű |
|---|---|
|Kijelölés kiterjesztése felfelé|`Shift+Felfelé nyíl`|
|Kijelölés kiterjesztése lefelé|`Shift+Lefelé nyíl`|
|Mindent kijelöl|`Cmd+A`|

### Tulajdonságok szerkesztése

| Művelet | Gyorsbillentyű |
|---|---|
|Tulajdonságnév szerkesztése|`Balra nyíl`|
|Tulajdonságérték szerkesztése|`Jobbra nyíl`|
|Tulajdonság fókuszálása|`Escape`|
|Tulajdonság törlése|`Cmd+Backspace`<br><br>ha bármely tulajdonság ki van jelölve, a kijelölést törli helyette.|
|Visszavonás|`Cmd+Z`|
|Újra|`Cmd+Shift+Z`|

### Vim (haladó)

| Művelet | Gyorsbillentyű |
|---|---|
|Mozgás lefelé|`j`|
|Mozgás felfelé|`k`|
|Név fókuszálása|`h`|
|Érték fókuszálása|`l`|
|Érték fókuszálása (kurzor a végén)|`A`|
|Érték fókuszálása (kurzor az elején)|`i`|
|Új tulajdonság létrehozása|`o`|

## Tulajdonságok formátuma

A tulajdonságok [YAML](https://yaml.org/) formátumban tárolódnak a fájl tetején. A YAML egy népszerű formátum, amely könnyen olvasható mind emberek, mind számítógépek számára.

A tulajdonságneveket egy kettőspont és egy szóköz választja el az értékektől:

```yaml
---
name: value
---
```

Bár a név-érték párok sorrendje nem számít, minden névnek egyedinek kell lennie egy jegyzeten belül. Például nem lehet egynél több `tags` tulajdonság.

Az értékek lehetnek [[#Szöveg|szöveg]], [[#Szám|szám]], [[#Jelölőnégyzet|jelölőnégyzet]], [[#Dátum|dátum]], [[#Dátum és idő|dátum és idő]], vagy [[#Lista|lista]].

### Szöveg

A szöveg típusú tulajdonságok egyetlen szövegsort tartalmaznak. A Markdown formázás nem jelenik meg a szöveg tulajdonságokban. A kettős keresztek nem hoznak létre címkéket szöveg tulajdonságokban.

A szöveg tulajdonságok tartalmazhatnak URL-eket és [[Belső hivatkozások|belső hivatkozásokat]] a `[[Hivatkozás]]` szintaxis használatával. A szöveg tulajdonságokban szereplő [[Belső hivatkozások|belső hivatkozásokat]] idézőjelek közé kell tenni. Az Obsidian automatikusan hozzáadja ezeket, ha manuálisan ad meg belső hivatkozásokat a tulajdonságokhoz, de ügyeljen arra, hogy sablonozó bővítmények használatakor is hozzáadja őket.

```yaml
---
title: A New Hope
link: "[[Episode IV]]"
url: https://www.example.com
---
```

### Lista

A lista típusú tulajdonságok több értéket tartalmaznak. A lista minden értéke saját sorban jelenik meg, egy kötőjellel (-) és egy szóközzel kezdve.

A lista értékei tartalmazhatnak szöveget, számokat és [[Belső hivatkozások|belső hivatkozásokat]]. Ha [[Belső hivatkozások|belső hivatkozásokat]] használ lista tulajdonságokban, tegye őket idézőjelek közé.

```yaml
---
cast: 
  - Mark Hamill
  - Harrison Ford
  - Carrie Fisher
links:
  - "[[Link]]" 
  - "[[Link2]]"
---
```

### Szám

A szám típusú tulajdonságoknak mindig literális számnak kell lenniük, nem operátorokkal rendelkező kifejezésnek. Egész számok és tizedesek egyaránt megengedettek.

```yaml
---
year: 1977
pie: 3.14
---
```

### Jelölőnégyzet

A jelölőnégyzet tulajdonságok értéke `true` (igaz) vagy `false` (hamis). Az élő előnézetben jelölőnégyzetként jelenik meg.

```yaml
---
favorite: true
reply: false
last: # Határozatlan érték; gyakran false-ként kezelik
```

### Dátum

A dátum tulajdonságok a következő formátumban tárolódnak:

```yaml
---
date: 2020-08-21
---
```

A dátumválasztó az operációs rendszer alapértelmezett dátum- és időformátumát követi. Ezt a rendszerbeállításokban módosíthatja:

> [!info]- Windows
> **[[Beállítások]] → Idő és nyelv → Nyelv és régió → Regionális formátum → Formátumok módosítása**
> 
> ![[Windows-OS-DateTime.png#interface]]

> [!info]- Mac OS
> **Rendszerbeállítások → Nyelv és régió → Dátumformátum**
> 
> ![[Mac-OS-DateTime.png|450]]

Ha a [[Napi jegyzetek]] bővítmény engedélyezve van, a dátum tulajdonság belső hivatkozásként is működik az adott dátumhoz tartozó napi jegyzethez.

![[Napi jegyzetek#^daily-notes-date]]

### Dátum és idő

A dátum és idő tulajdonságok dátumot és pontos időt egyaránt tartalmaznak, a következő formátumban tárolódnak:

```yaml
---
time: 2020-08-21T10:30:00
---
```

A [[#Dátum|dátum tulajdonságokhoz]] hasonlóan a dátum- és időválasztó az operációs rendszer alapértelmezett formátumát követi. Ezt a rendszerbeállításokban módosíthatja.

### Címkék

A címkék tulajdonságok egy speciális tulajdonságtípus, amelyet kizárólag a `tags` tulajdonság használ. Ez a tulajdonságtípus nem rendelhető más tulajdonságokhoz.

A címkék tulajdonságok lista formátumban vannak, minden címke saját sorban, kötőjellel (-) és szóközzel kezdve.

```yaml
---
tags: 
  - journal
  - personal
  - draft
---
```

A `tags` tulajdonság az Obsidian [[#Alapértelmezett tulajdonságok|alapértelmezett tulajdonságainak]] egyike. A címkék Obsidianban való használatáról további információkért lásd: [[Címkék]].

### JSON tulajdonságok

Bár a tulajdonságok meghatározásához a YAML használatát javasoljuk, [JSON](https://www.json.org/) formátumban is meghatározhatja őket:

```json
---
{
  "tags": ["journal"],
  "publish": false
}
---
```

Megjegyzés: a JSON blokk beolvasásra, értelmezésre, majd YAML formátumban kerül mentésre.

## Alapértelmezett tulajdonságok

Az Obsidian alapértelmezett tulajdonságok készletével rendelkezik:

| Tulajdonság  | Típus | Leírás                                                       |
| ------------ | ----- | ------------------------------------------------------------ |
| `tags`       | Lista | Lásd: [[Szerkesztés és formázás/Címkék\|Címkék]].              |
| `aliases`    | Lista | Lásd: [[Alternatív nevek]].                                  |
| `cssclasses` | Lista | Lehetővé teszi egyes jegyzetek stílusozását [[CSS kódrészletek]] segítségével. |

### Tulajdonságok az Obsidian Publish-hez

A következő alapértelmezett tulajdonságok használhatók az [[Bevezetés az Obsidian Publish-be|Obsidian Publish]]-sal:

| Tulajdonság   | Leírás                                                                                                     |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| `publish`     | Lásd: [[Tartalom publikálása#Adatok automatikus kiválasztása publikáláshoz\|Adatok automatikus kiválasztása publikáláshoz]]. |
| `permalink`   | Lásd: [[Állandó hivatkozások\|Állandó hivatkozások]].                                                      |
| `description` | Lásd: [[Közösségi média hivatkozás-előnézetek#Description\|Leírás]].                                       |
| `image`       | Lásd: [[Közösségi média hivatkozás-előnézetek#Image\|Kép]].                                                |
| `cover`       | Lásd: [[Közösségi média hivatkozás-előnézetek#Image\|Kép]].                                                |

### Elavult tulajdonságok

Ezek a tulajdonságok az Obsidian 1.4-ben elavulttá váltak, és modern megfelelőikkel kell helyettesíteni őket. Az [[#Alapértelmezett tulajdonságok|alapértelmezett tulajdonságokként]] való támogatásuk az Obsidian 1.9-ben megszűnik.

| Tulajdonság | Leírás |
|-|-|
| `tag` | A `tags` elavult alternatív neve. |
| `alias` | Az `aliases` elavult alternatív neve. |
| `cssclass` | A `cssclasses` elavult alternatív neve. |

> [!tip] Ha a széfben lévő fájlokat az [[#Alapértelmezett tulajdonságok]] formátumra kell konvertálnia, a [[Formátum-konvertáló]] segítségével tömegesen módosíthatja a széfet.
