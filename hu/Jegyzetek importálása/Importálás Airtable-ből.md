---
permalink: import/airtable
---
Az Obsidian lehetővé teszi az adatok áttelepítését az Airtable-ből az [[Importáló|Importáló bővítmény]] segítségével. Ez az Airtable bázisait tartós Markdown fájlokká alakítja, amelyeket offline is használhat az Obsidiannel és sok más alkalmazással.

Minden tábla egy jegyzetmappává válik, táblázatrekordonként egy jegyzettel, valamint egy [[Bevezetés a Bázisokba|Bázis]] fájllal, amely újraalkotja a táblázatot és annak nézeteit. Mivel az Airtable API-t használja, az importáláshoz személyes hozzáférési tokenre és internetkapcsolatra van szükség.

## Airtable személyes hozzáférési token létrehozása

Az Airtable adatainak API-n keresztüli eléréséhez személyes hozzáférési tokenre van szükség. Ez a lépés körülbelül 1 percet vesz igénybe.

A token egy hosszú szám- és betűsorozat, amely jellemzően `pat...` kezdetű, és lehetővé teszi az adatok letöltését az Airtable-ből.

1. Jelentkezzen be az Airtable-be, és nyissa meg a [Személyes hozzáférési tokenek](https://airtable.com/create/tokens) oldalt a fiókbeállításokban.
2. Válassza a **Create new token** lehetőséget.
3. Adjon nevet a tokennek, pl. „Obsidian". Bármilyen név használható.
4. A **Scopes** alatt adja hozzá a `data.records:read` és `schema.bases:read` jogosultságokat.
5. Az **Access** alatt adja hozzá az importálni kívánt bázisokat, vagy válassza ki egy munkaterület összes bázisát.
6. Válassza a **Create token**, majd a **Copy** lehetőséget a token másolásához.
7. Mentse el a tokent biztonságos helyre, például a jelszókezelőjébe.

Az Airtable csak egyszer jeleníti meg a tokent. Ha elveszíti, hozzon létre egy újat.

## Az Airtable adatok importálása

Szüksége lesz a hivatalos Obsidian [[Importáló]] bővítményre, amelyet [itt telepíthet](obsidian://show-plugin?id=obsidian-importer).

1. Nyissa meg a **[[Beállítások]]** menüt.
2. Lépjen a **Közösségi bővítmények** menüpontra, és [telepítse az Importálót](obsidian://show-plugin?id=obsidian-importer).
3. Engedélyezze az Importáló bővítményt.
4. Nyissa meg az **Importáló** bővítményt a parancspaletta vagy a szalag ikon segítségével.
5. A **Fájlformátum** alatt válassza az **Airtable** lehetőséget.
6. Az **Airtable Personal Access Token** alatt kattintson a **Link...** gombra egy új titok hozzáadásához. Az **Azonosító** mezőbe adjon egy nevet, például `airtable`, a **Titok** mezőbe pedig illessze be a személyes hozzáférési tokent.
7. Kattintson a **Betöltés** gombra a bázisok tallózásához, majd válassza ki az importálni kívánt táblákat.
8. Tekintse át és szerkessze az importálási beállításokat.
9. Válassza az **Importálás** lehetőséget, hogy konfigurálja, hogyan alakuljanak át a mezők jegyzetekké [[Tulajdonságok|tulajdonságokkal]].
10. Kattintson a **Folytatás** gombra, és várja meg, amíg az importálás befejeződik.
11. Kész!

### Importálási beállítások

- **Képletek konvertálása** — válassza ki, hogy a képlet-, keresési, összesítő és számlálómezők [[Képletek|Bázisok képletekké]] legyenek-e átírva (ha nincs megfelelő, az Airtable által kiszámított értékre visszaesve), vagy csak statikus értékként legyenek importálva.
- **Csatolmányok letöltése** — a csatolmány fájlok mentése a széfbe a mellékletmappa és hivatkozásformátum beállításai szerint. Ha le van tiltva, vagy ha a letöltés sikertelen, a jegyzet az Airtable-ön lévő fájl URL-jére hivatkozik.
- **Nézet tulajdonságnév** — az a tulajdonság, amely rögzíti, hogy egy rekord melyik Airtable nézetekhez tartozik. A generált Bázis minden nézete erre a tulajdonságra szűr. Alapértelmezett értéke: `base`.
- **Inkrementális importálás** — egy `airtable-id` tulajdonságot ad minden jegyzethez, hogy egy későbbi importálás kihagyhassa a már importált rekordokat. Teljes importálás esetén ez a tulajdonság újra eltávolításra kerül.

## Az Airtable mezők importálásának konfigurálása

Az importálás második lépésében kiválaszthatja, hogyan legyen importálva az egyes mezők.

A táblák minden mezőjéhez egy `{{mező_neve}}` nevű változó tartozik. Alapértelmezetten minden mező tulajdonsággá válik, és ezekkel a változókkal átnevezheti a tulajdonságokat, módosíthatja értékeiket, vagy tartalmat írhat az egyes jegyzetek törzsébe.

Minden tábla elsődleges mezője mindig a jegyzet címeként szolgál, és a rekordok mindig a táblájukról elnevezett mappába kerülnek, ezért ezek a beállítások nem konfigurálhatók.

## Mi kerül importálásra

Egy `Projects` nevű bázis `Tasks` táblája esetén az importáló a következőt hozza létre:

```
Airtable/
	Projects/
		Tasks.base
		Tasks/
			Write the proposal.md
			Review the draft.md
```

- Rekordonként egy jegyzet, ahol az elsődleges mező a jegyzet címe, a rekord többi mezője pedig [[Tulajdonságok|tulajdonságok]].
- Táblánként egy `.base` fájl, amelyben minden Airtable nézet egy [[Nézetek|Bázisok nézetnek]] felel meg:
	- A **Grid** [[Táblázat nézet|Táblázat nézetté]] válik.
	- A **Gallery** [[Kártyák nézet|Kártyák nézetté]] válik.
	- A **List** [[Lista nézet|Lista nézetté]] válik.
	- Minden más nézettípus táblázat nézetté alakul.
- Az Airtable mezőtípusok Obsidian tulajdonságtípusokra képeződnek le, anélkül hogy felülírnák a már beállított típusokat.
- A kapcsolt rekordok a megfelelő jegyzetekre mutató hivatkozásokká válnak.
- A csatolmányok a széf beállításai szerint kerülnek letöltésre.

## Korlátozások

> [!info] Az Airtable importálás új funkció
> Az Airtable importáló új. Ha problémát tapasztal a konverzióval kapcsolatban, [küldjön hibajelentést](https://github.com/obsidianmd/obsidian-importer/issues), hogy javíthassuk.

Az Airtable API sebességkorlátozásai miatt a nagy bázisok importálása jelentős időt vehet igénybe. Kérjük, legyen türelmes.

Az Airtable API korlátai miatt egyes adatok nem érhetők el vagy nem konvertálhatók:

- Az összesítő (rollup) értékek nem kerülnek importálásra. Az API nem teszi elérhetővé az összesítő kiszámított értékéhez használt aggregációt, ezért csak a tulajdonságnév kerül beírásra, valamint egy Bázisok képlet, ha a mező sémája tartalmaz kifejezést.
- Az olyan függvényeket használó képletek, amelyeknek az Obsidianben nincs megfelelője – például `SWITCH`, `FIND`, `REGEX_EXTRACT` és `SQRT` – az Airtable statikus értékére esnek vissza.
- Csak a rács, galéria és lista nézetek kerülnek importálásra. Más nézettípusok, mint a naptár, kanban, idővonal és Gantt, figyelmen kívül maradnak.
- A nem kiválasztott táblák rekordjaira mutató hivatkozások a rekord egyszerű címeként jelennek meg hivatkozás helyett.
- A felületkialakítások, automatizálások, megjegyzések és verziótörténet nem kerülnek importálásra.
