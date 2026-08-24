---
permalink: import/logseq
cssclasses:
  - soft-embed
---
Az Obsidian lehetővé teszi jegyzetek migrálását fájlalapú Logseq gráfból (amelyet ma „Logseq OG" néven ismernek) a hivatalos [[Importáló|Importáló bővítmény]] segítségével. Az Importáló közvetlenül olvassa a Logseq Markdown fájljait, és a Logseq-specifikus formázást tartós fájlokká alakítja, amelyeket offline is használhatsz az Obsidiannal és más alkalmazásokkal.

## Mielőtt elkezdenéd

- Készíts biztonsági mentést a Logseq gráfodról és az Obsidian széfedről.
- Keresd meg a Logseq gráfod gyökérmappáját. Ez általában `pages`, `journals`, `assets` és `logseq` nevű mappákat tartalmaz.
- Győződj meg róla, hogy fájlalapú Logseq gráfot használsz. A Logseq adatbázis-gráfok egyelőre nem támogatottak.

## Logseq gráf importálása

Szükséged lesz a hivatalos Obsidian [[Importáló]] bővítményre, amelyet [itt telepíthetsz](obsidian://show-plugin?id=obsidian-importer).

1. Nyisd meg a **[[Beállítások]] → Közösségi bővítmények** menüpontot, és [telepítsd az Importálót](obsidian://show-plugin?id=obsidian-importer).
2. Engedélyezd az Importáló bővítményt.
3. Nyisd meg az **Importálót** a [[Parancspaletta]] vagy a szalag ikon segítségével.
4. A **Fájlformátum** alatt válaszd a **Logseq** lehetőséget.
5. A **Mappa választása** alatt válaszd ki a gráfod gyökérmappáját. Azt a mappát válaszd, amely tartalmazza a `pages` és `journals` mappákat, ne ezek egyikét külön-külön.
6. Tekintsd át az észlelt mappákat, és zárd ki azokat, amelyeket nem szeretnél importálni.
7. Válassz egy kimeneti mappát, és határozd meg, hová kerüljenek az importált mellékletek.
8. Tekintsd át az importálási beállításokat, és nézd meg a konvertált jegyzetek előnézetét.
9. Válaszd az **Importálás** lehetőséget, és várd meg, amíg az importálás befejeződik.

## Korlátozások

- A rajztáblák nem kerülnek importálásra.
- A lekérdezések kódblokkként megmaradnak, ha a megtartásuk mellett döntesz.
- A dinamikus Logseq sablonmakrók szövegként maradnak meg.
- A Logseq tanulókártya-ütemezés, PDF-annotációk és egyéb alkalmazás-specifikus adatok nem kerülnek migrálásra.

## Beállítások

Az Importáló a gyakori Logseq-konvenciókat konvertálja, beleértve:

- Oldaltulajdonságok Obsidian [[Tulajdonságok|Tulajdonságokká]].
- Oldal alternatív nevek, címkék, névterek és hivatkozások.
- Munkafolyamat-állapotok jelölőnégyzetes listaelemekké, a prioritások és dátumok olvasható szövegként megőrizve.
- Blokkazonosítók, blokkhivatkozások és blokkbeágyazások Obsidian hivatkozásokká és beágyazásokká.
- Napló fájlnevek és dátumhivatkozások.
- Kiemelések, számozott listák, Org blokkok, médiabeágyazások és hivatkozott fájlok a gráf `assets` mappájából.

### Naplók

Alapértelmezés szerint a **Napi jegyzetek beállításainak használata** engedélyezve van. Az importált naplók a [[Napi jegyzetek]] alap bővítmény által beállított mappát és dátumformátumot használják. Ez azt eredményezheti, hogy a naplók az Importálóban kiválasztott kimeneti mappán kívülre kerülnek.

Ha letiltod ezt a beállítást, a naplók a kiválasztott kimeneti mappán belüli `Journals` mappába kerülnek, és a `YYYY-MM-DD` jegyzetnév-formátumot használják.

### Vázlatok lapítása

A Logseq beágyazott felsorolásjeleket használ az oldal szerkezeteként. Alapértelmezés szerint az Importáló megőrzi ezt a vázlatszerkezetet. Engedélyezd a **Vázlatok lapítása** opciót, hogy a vázlatblokkokat bekezdések, fejlécek és hagyományos listák kombinációjává alakítsd. A feladatok és a listaelemszerű csoportok listaelemek maradnak, de az átalakítás heurisztikus. Tekints át több példát az előnézetben, mielőtt egy nagy gráfot importálnál.

### Nem kompatibilis adatok megőrzése

A Logseq lekérdezések, tanulókártyák és időkövetési bejegyzések nem rendelkeznek közvetlen megfelelőkkel az Obsidianban. Az importálási beállítások lehetővé teszik, hogy minden tartalomtípusnál eldöntsd, megtartod-e. Megtartás esetén egyszerű szövegként maradnak meg.

- A **Lekérdezések megtartása** a lekérdezéseket kódblokkként vagy soron belüli kódként őrzi meg.
- A **Tanulókártyák megtartása** a `#card` jelölőket és a kihagyásos burkolókat egyszerű szövegként őrzi meg.
- Az **Időkövetés megtartása** a `LOGBOOK` és `CLOCK` bejegyzéseket egyszerű szövegként őrzi meg.

## Sablonok

Használj [[Importáló sablonok|Importáló sablonokat]] a Logseq adatok importálásának teljes testreszabásához.

![[Importáló sablonok#Változók]]

## Hibaelhárítás

Ha az Importáló nem talál jegyzeteket, győződj meg róla, hogy a gráf gyökérmappáját választottad ki, és hogy a beállított oldal- vagy naplómappák Markdown fájlokat tartalmaznak.

Ha egy melléklet hiányzóként jelenik meg, ellenőrizd, hogy a hivatkozott fájl még létezik-e a gráf `assets` mappájában.

Egyéb problémák esetén keress az [Importáló hibakövető rendszerében](https://github.com/obsidianmd/obsidian-importer/issues), vagy küldj hibajelentést egy kis példagráffal.
