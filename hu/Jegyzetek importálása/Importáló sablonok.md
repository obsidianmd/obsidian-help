---
permalink: import/templates
description: 'Az Importáló által létrehozott jegyzet nevének, tulajdonságainak és tartalmának testreszabása.'
---
Az [[Importáló]] lehetővé teszi sablonok definiálását, amelyek meghatározzák, hogyan kerülnek importálásra a jegyzetek más alkalmazásokból. Ez azt jelenti, hogy módosíthatod az importált jegyzetek címét, tulajdonságait és tartalmát.

## Az importálási sablon szerkesztése

Válaszd a **Szerkesztés** gombot az előnézet felett az alapértelmezett sablon szerkesztéséhez. A következőket szerkesztheted:

- A jegyzet neve, amely beágyazott címként jelenik meg.
- A jegyzet elején található tulajdonságok.
- A jegyzet Markdown tartalma.

Válaszd a **Mentés** gombot az előnézethez való visszatéréshez. Az Importáló megjegyzi a szerkesztett beágyazott sablont az azonos formátumot használó jövőbeli importálásokhoz.

Alternatívaként betölthetsz egy sablont egy Markdown fájlból az aktuális széfben.

## Eredmények előnézete

Az előnézet legfeljebb tíz mintát jelenít meg a kiválasztott adatokból. Használd a nyíl gombokat a minták közötti váltáshoz. Az importálási beállítások és a sablon módosításai frissítik az előnézetet, mielőtt bármi bekerülne a széfbe.

Egyes csatolmányok, távoli elemek és jegyzetek közötti hivatkozások nem oldhatók fel teljesen az importálás lefutásáig. Ilyen esetekben az előnézet megtarthatja a forráshivatkozást vagy egy helyőrzőt jelenít meg.

## Sablon szintaxis

Az Importáló sablonok egy olyan szintaxist használnak, amely [[Változók|változókból]], [[Szűrők|szűrőkből]] és [[Logika|logikából]] áll. Ugyanazt a [Knap](https://github.com/obsidianmd/knap) szintaxist használja, mint a [[Bevezetés az Obsidian Web Clipper használatába|Web Clipper]].

Változókat dupla kapcsos zárójelekkel szúrhatsz be, például `{{title}}`, `{{content}}` vagy `{{date}}`. A változók használhatók a jegyzet nevében, tulajdonságaiban és tartalmában.

A változókat [[Szűrők|szűrőkkel]] módosíthatod. Például a dátumformátum módosításához használd a `{{date|date:"YYYY-MM-DD"}}` kifejezést. Használj [[Logika|logikát]] haladóbb feltételes kifejezésekhez, ciklusokhoz és változó-hozzárendeléshez.

## Változók

Az alábbi változók használhatók bármely Importáló sablonban:

| Változó          | Leírás                                                                                                          |
| ---------------- | --------------------------------------------------------------------------------------------------------------- |
| `{{body}}`       | Markdown törzs tulajdonságok nélkül (metaadatok nélkül).                                                        |
| `{{content}}`    | Teljes Markdown a kiválasztott sablon alkalmazása előtt.                                                         |
| `{{ctime}}`      | Forrás létrehozási ideje ISO 8601 időbélyegként; üres, ha nem elérhető.                                         |
| `{{date}}`       | Aktuális dátum és idő a sablon renderelésének pillanatában, ISO 8601 időbélyegként.                              |
| `{{importer}}`   | Importáló azonosító, például `keep`, `html` vagy `notion-api`.                                                   |
| `{{folder}}`     | Végső széf-relatív szülőmappa. Üres, ha a jegyzet a széf gyökerében van.                                        |
| `{{mtime}}`      | Forrás módosítási ideje ISO 8601 időbélyegként; üres, ha nem elérhető.                                          |
| `{{noteName}}`   | Végső feloldott jegyzetnév, az érvénytelen karakterek eltávolítása és a duplikátumokhoz szükséges utótagok hozzáadása után. |
| `{{path}}`       | Végső széf-relatív útvonal, beleértve a `.md` kiterjesztést.                                                     |
| `{{properties}}` | A metaadatok tulajdonságait tartalmazó objektum.                                                                 |
| `{{source}}`     | Generált tulajdonságokat és forrásspecifikus értékeket tartalmazó objektum.                                       |
| `{{sourceId}}`   | Stabil forrásazonosító, ha az importáló biztosít ilyet; egyébként üres.                                          |
| `{{time}}`       | A `{{date}}` álneve.                                                                                             |
| `{{title}}`      | Eredeti jegyzetcím a tisztítás és duplikátum-eltávolítás előtt.                                                  |

## Forrásértékek tulajdonságokhoz

A [[Tulajdonságok|tulajdonságokat]] támogató importálási formátumok esetében a forrásértékek kényelmi okokból felső szintű változókként is elérhetők.

Ha egy forrásérték neve megegyezik egy megosztott változóéval, a `{{source}}`-on keresztül érheted el. Például, ha az importálási forrásodban van egy `content` nevű tulajdonság, az `{{source.content}}`-ként érhető el, míg a `{{content}}` az alapértelmezett Importáló változó marad.

Használj szögletes zárójeles jelölést, ha a mező neve szóközöket, írásjeleket vagy egyéb speciális karaktereket tartalmaz:

```twig
{{source["Project: status"]}}
```

## Példa sablon

Íme egy példa sablonra változók és [[Szűrők|szűrők]] használatával:

```twig
---
created: {{ctime | date:"YYYY-MM-DD"}}
modified: {{mtime | date:"YYYY-MM-DD"}}
source: {{importer}}
---
# {{title}}

{{body}}
```

Feltételesen is hozzáadhatsz adatokat egy jegyzethez a [[Logika]] segítségével:

```twig
{% if tags %}
## Címkék
{% for tag in tags %}
- {{tag}}
{% endfor %}
{% endif %}
```
