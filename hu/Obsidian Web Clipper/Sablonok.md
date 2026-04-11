---
permalink: web-clipper/templates
description: 'Ismerd meg, hogyan hozhatsz létre sablonokat, amelyek automatikusan rögzítik és rendszerezik a weboldalak metaadatait a Web Clipper segítségével.'
---
Az [[Bevezetés az Obsidian Web Clipper használatába|Web Clipper]] lehetővé teszi sablonok létrehozását, amelyek automatikusan rögzítik és rendszerezik a weboldalak metaadatait. Példa sablonok elérhetők a [clipper-templates repóban](https://github.com/kepano/clipper-templates).

## Sablon létrehozása vagy szerkesztése

Sablon **létrehozásához** nyisd meg a Web Clipper beállításait, és kattints az **Új sablon** gombra az oldalsávban. Sablont **duplikálhatsz** is a jobb felső sarokban lévő **Továbbiak** menüben.

Sablon **szerkesztéséhez** válassz egy sablont az oldalsávból. A módosítások automatikusan mentésre kerülnek.

A sablonok [[Változók|változókat]] és [[Szűrők|szűrőket]] használnak, amelyekkel testre szabhatod, hogyan kerüljön mentésre a tartalom.

## Web Clipper sablonok importálása és exportálása

Sablon importálásához:

1. Nyisd meg a bővítményt, és kattints a **[[Beállítások]]** fogaskerék ikonra.
2. Válassz ki egy sablont a listából.
3. Kattints az **Importálás** gombra a jobb felső sarokban, vagy húzd be a `.json` sablonfájl(oka)t a sablon területre.

Sablon exportálásához kattints az **Exportálás** gombra a jobb felső sarokban. Ez letölti a sablon `.json` fájlt. A sablon adatait a vágólapra is másolhatod a **Továbbiak** menüből.

## Sablonbeállítások

### Viselkedés

Határozd meg, hogyan kerüljön az Obsidianba a Web Clipperből származó tartalom:

- **Új jegyzet létrehozása**
- **Hozzáadás meglévő jegyzethez**, az elejére vagy a végére
- **Hozzáadás a napi jegyzethez**, az elejére vagy a végére (ehhez a [[Napi jegyzetek|napi jegyzetek]] bővítménynek aktívnak kell lennie)

### Sablon automatikus aktiválása

A sablon-triggerek lehetővé teszik, hogy az aktuális oldal URL-je vagy [schema.org](https://schema.org/) adatai alapján automatikusan válassz sablont. Minden sablonhoz több szabályt is megadhatsz, soronként egyet.

A sablonlistában az első egyezés határozza meg, melyik sablon kerül felhasználásra. A Web Clipper beállításaiban a sablonokat fel-le húzva módosíthatod az egyeztetés sorrendjét.

#### Egyszerű URL-egyeztetés

Az egyszerű egyeztetés akkor aktiválja a sablont, ha az aktuális oldal URL-je *a megadott mintával kezdődik*. Például:

- A `https://obsidian.md` minden olyan URL-re illeszkedik, amely ezzel a szöveggel kezdődik.

#### Reguláris kifejezéssel való egyeztetés

Reguláris kifejezések használatával összetettebb URL-minták alapján is aktiválhatsz sablonokat. A regex mintát perjeles zárójelek közé (`/`) tedd. Ne felejtsd el a regex speciális karaktereit (mint a `.` és `/`) fordított perjellel (`\`) escapelni. Például:

- Az `/^https:\/\/www\.imdb\.com\/title\/tt\d+\/reference\/?$/` minden IMDB referencia oldalra illeszkedik.

#### Schema.org egyeztetés

A [schema.org](https://schema.org/) adatok alapján is aktiválhatsz sablonokat. Használd a `schema:` előtagot, amelyet az egyeztetni kívánt schema kulcs követ. Opcionálisan megadhatsz egy elvárt értéket is. Például:

- A `schema:@Recipe` olyan oldalakra illeszkedik, ahol a schema típus „Recipe".
- A `schema:@Recipe.name` olyan oldalakra illeszkedik, ahol a `@Recipe.name` jelen van.
- A `schema:@Recipe.name=Cookie` olyan oldalakra illeszkedik, ahol a `@Recipe.name` értéke „Cookie".

A schema.org értékek használhatók [[Változók#Schema.org változók|adatok előzetes kitöltésére a sablonokban]] is.

### Értelmező kontextus

Amikor az [[Értelmező|Értelmező]] engedélyezve van, [[Változók#Prompt változók|prompt változók]] segítségével természetes nyelven nyerhetsz ki oldaltartalmat. Minden sablonhoz meghatározhatod az [[Értelmező#Kontextus|kontextust]], amelyhez az Értelmező hozzáfér.
