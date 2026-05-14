---
permalink: plugins/templates
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'A Sablonok egy alapbővítmény, amely lehetővé teszi előre meghatározott szövegrészletek beszúrását az aktív jegyzetedbe.'
---
A [[Sablonok]] egy [[Alap bővítmények|alap bővítmény]], amely lehetővé teszi előre meghatározott szövegrészletek beszúrását az aktív jegyzetbe.

## Sablonmappa beállítása

1. A bal alsó sarokban válassza a **[[Beállítások]]** ![[lucide-cog.svg#icon]] ikont.
2. Az **Alap bővítmények → Sablonok → Sablonmappa helye** alatt adja meg a sablonokat tartalmazó mappát.

## Sablonváltozók

Dinamikus információkat adhat a sablonjaihoz _sablonváltozók_ használatával. Amikor egy sablonváltozót tartalmazó sablont szúr be, a Sablonok bővítmény azt a megfelelő értékre cseréli.

| Változó     | Leírás                                                          |
|-------------|-----------------------------------------------------------------|
| `{{title}}` | Az aktív jegyzet címe.                                          |
| `{{date}}`  | A mai dátum. **Alapértelmezett formátum:** `YYYY-MM-DD`.        |
| `{{time}}`  | Az aktuális idő. **Alapértelmezett formátum:** `HH:mm`.         |

A `{{date}}` és `{{time}}` egyaránt lehetővé teszi az alapértelmezett formátum megváltoztatását egy _formátumsztring_ segítségével.

A formátumsztring beállításához adjon hozzá egy kettőspontot (`:`) és utána egy [Moment.js formátumtoken](https://momentjs.com/docs/#/displaying/format/) karakterláncot, például `{{date:YYYY-MM-DD}}`.

A `{{date}}` és `{{time}}` formátumsztringekkel ugyanúgy használható, például `{{time:YYYY-MM-DD}}`.

Az alapértelmezett dátum- és időformátumot a **[[Beállítások]] → Alap bővítmények → Sablonok → Dátumformátum** és a **[[Beállítások]] → Alap bővítmények → Sablonok → Időformátum** alatt módosíthatja. ^template-settings-date-time-formatting

> [!tip]- Dátum- és időváltozók használata más bővítményekben
> A `{{date}}` és `{{time}}` sablonváltozókat a [[Napi jegyzetek]] és az [[Egyedi jegyzet készítő]] bővítményekben is használhatja.

## Sablon létrehozása

A [[#Sablonmappa beállítása|sablonmappában]] [[Jegyzetek kezelése#Új jegyzet létrehozása|hozzon létre egy jegyzetet]], amely tartalmazza a sablon használatakor megjeleníteni kívánt szöveget. Dinamikus szövegekhez, például az aktuális dátumhoz, [[#Sablonváltozók|sablonváltozókat]] használhat.

Például íme egy sablon tanulási jegyzetekhez:

```markdown
---
topic: 
date: "{{date}}"
course: 
tags:
  - studies
---

# {{title}}

## Kulcsfogalmak


## Fontos részletek


## Példák


## Kérdések
- 

## Összegzés


## Kapcsolódó témák
- [[]]
```

> [!warning]+ Sablonok szerkesztése forrás módban
> Az [[Nézetek és szerkesztési mód#Élő előnézet|Élő előnézetben]] a **Tulajdonságok a dokumentumban** panel felülírhatja azokat a sablonváltozókat, amelyek nem rendelkeznek idézőjelekkel.
>
> Ennek elkerülése érdekében szerkessze a sablonokat [[Nézetek és szerkesztési mód#Forrás mód|forrás módban]], vagy állítsa a **[[Beállítások]] → Szerkesztő → [[Beállítások#Tulajdonságok a dokumentumban|Tulajdonságok a dokumentumban]]** opciót **Forrás** értékre.

## Sablon beszúrása az aktív jegyzetbe

> [!todo] Sablon beszúrása előtt [[#Sablonmappa beállítása|állítsa be a sablonmappát]].

1. A szalagon válassza a **Sablon beszúrása** lehetőséget.
2. Válassza ki a sablont, amelyet az aktív jegyzet kurzorpozíciójába szeretne beszúrni.

Sablon beszúrásához a [[Parancspaletta]] vagy [[Gyorsbillentyűk#Gyorsbillentyű beállítása|egyéni billentyűkombináció]] használatával alkalmazza a `Sablonok: Sablon beszúrása` parancsot.

A sablon tartalma az aktuális kurzorpozícióba kerül beszúrásra. Ha a kurzor nem a jegyzet törzsében van, a tartalom az utolsó kurzorpozícióba kerül.

### Sablon tulajdonságok

![[Tulajdonságok#^templates-properties]]

## Aktuális dátum és idő beszúrása az aktív jegyzetbe

Használja a `Sablonok: Aktuális dátum beszúrása` és `Sablonok: Aktuális idő beszúrása` parancsokat az aktuális dátum és idő beszúrásához az aktuális kurzorpozícióba. A `Sablon beszúrása` parancshoz hasonlóan ezt is elvégezheti a parancspalettával vagy egyéni billentyűkombinációval.

A beszúrt dátum és idő a [[#^template-settings-date-time-formatting|bővítmény beállításaiban megadott formázást]] használja.
