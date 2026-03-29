---
permalink: plugins/search
publish: true
mobile: true
description: 'Vyhľadávanie je základný doplnok, ktorý vám pomáha nájsť údaje vo vašom trezore Obsidian pomocou vyhľadávacích výrazov a operátorov na zúženie výsledkov.'
---
Hľadať je [[Vstavané pluginy|vstavaný plugin]], ktorý vám pomáha nájsť dáta vo vašom trezore Obsidian pomocou vyhľadávacích výrazov a operátorov na zúženie výsledkov.

V predvolenom nastavení nájdete Hľadať v ľavom bočnom paneli ![[lucide-search.svg#icon]]. Hľadanie môžete otvoriť aj stlačením `Ctrl+Shift+F` (Windows/Linux) alebo `Command+Shift+F` (macOS).

- **Hľadanie vybraného textu**: Ak vyberiete text v editore a otvoríte Hľadanie pomocou klávesovej skratky, Hľadanie vám zobrazí výsledky pre vybraný text.
- **Hľadanie nedávnych vyhľadávacích výrazov**: Otvorte Hľadanie s prázdnym vyhľadávacím výrazom na zobrazenie nedávnych vyhľadávacích výrazov. Kliknite na ktorýkoľvek z nich a vyhľadávací výraz sa použije znova.

> [!info] Vylúčené súbory
> Súbory zodpovedajúce vašim vzorcom [[Nastavenia#Vylúčené súbory|Vylúčené súbory]] sa vo výsledkoch hľadania nezobrazia.

## Vyhľadávacie výrazy

Vyhľadávací výraz je slovo alebo fráza, ktorú zadáte do vyhľadávacieho poľa. Naučiť sa efektívne písať vyhľadávacie výrazy vám môže pomôcť rýchlo nájsť to, čo hľadáte, aj vo veľkých trezoroch. Obsidian prehľadáva iba obsah poznámok a canvasov.

> [!tip]- Hľadanie ciest a názvov súborov
> V predvolenom nastavení môžete hľadať iba cesty a názvy súborov poznámok a canvasov. Na hľadanie cesty alebo názvu súboru ľubovoľného súboru v trezore použite operátor `path` alebo `file`.

Každé slovo vo vyhľadávacom výraze sa porovnáva nezávisle v rámci každého súboru. Na hľadanie presnej frázy ju obklopte úvodzovkami, napríklad `"star wars"`. Na hľadanie textu v úvodzovkách v rámci presnej frázy môžete _escapovať_ úvodzovky pridaním spätného lomítka (`\`) pred úvodzovku, napríklad `"they said \"hello\" to each other"`.

Môžete kontrolovať, či sa majú vrátiť súbory obsahujúce _všetky_ slová vášho vyhľadávacieho výrazu, alebo _ľubovoľné_ zo slov:

- `meeting work` vráti súbory, ktoré obsahujú obe slová `meeting` aj `work`.
- `meeting OR work` vráti súbory, ktoré obsahujú buď `meeting`, alebo `work`.

Oba spôsoby môžete dokonca kombinovať v rámci jedného vyhľadávacieho výrazu.

- `meeting work OR meetup personal` vráti súbory pre pracovné stretnutia a osobné stretnutia.

Na kontrolu priority jednotlivých výrazov môžete použiť zátvorky.

- `meeting (work OR meetup) personal` vráti súbory, ktoré obsahujú `meeting`, `personal` a buď `work`, alebo `meetup`.

Na vylúčenie alebo negovanie slova z výsledkov hľadania pridajte pred neho pomlčku (`-`):

- `meeting -work` vráti súbory, ktoré obsahujú `meeting`, ale nie `work`.

Môžete vylúčiť viacero výrazov:

- `meeting -work -meetup` vráti súbory, ktoré obsahujú `meeting`, ale nie `work` ani `meetup`.

Môžete vylúčiť kombináciu výrazov pomocou zátvoriek:

- `meeting -(work meetup)` vráti súbory, ktoré obsahujú `meeting`, ale nie _oba_ výrazy `work` a `meetup`.

Na filtrovanie výsledkov pomocou operátorov menšie než (`<`) a väčšie než (`>`) ich obklopte hranatými zátvorkami (`[]`) alebo úvodzovkami (`""`):

- `meeting [duration:<5]` vráti súbory, kde je prítomné slovo meeting a trvanie je menšie než 5.
- `meeting [duration:>5]` vráti súbory, kde je prítomné slovo meeting a trvanie je väčšie než 5.

> [!tip]- Vysvetliť vyhľadávací výraz
> Ak potrebujete vyriešiť problémy so zložitým vyhľadávacím výrazom, môžete kliknúť na **Vysvetliť vyhľadávací výraz** v Hľadaní, kde získate vysvetlenie vášho vyhľadávacieho výrazu.

## Operátory hľadania

Operátory hľadania umožňujú presnejšie vyhľadávacie výrazy na ešte detailnejšie filtrovanie výsledkov.

Niektoré operátory dokonca umožňujú pridať vnorený vyhľadávací výraz v zátvorkách, napríklad: `task:(call OR email)`.

| Operátor hľadania | Popis                                                                                                                                                                                                                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `file:`            | Nájsť text v názve súboru. Zodpovedá ľubovoľnému súboru v trezore.<p/>Príklad: `file:.jpg` alebo `file:202209`.                                                                                                                                                                                                     |
| `path:`            | Nájsť text v ceste k súboru. Zodpovedá ľubovoľnému súboru v trezore.<p/>Príklad: `path:"Daily notes/2022-07"`.                                                                                                                                                                                                      |
| `content:`         | Nájsť text v obsahu súboru.<p/>Príklad: `content:"happy cat"`.                                                                                                                                                                                                                                                       |
| `match-case:`      | Porovnanie s rozlišovaním veľkých/malých písmen.<p/>Príklad: `match-case:HappyCat`.                                                                                                                                                                                                                                 |
| `ignore-case:`     | Porovnanie bez rozlišovania veľkých/malých písmen.<p/>Príklad: `ignore-case:ikea`.                                                                                                                                                                                                                                  |
| `tag:`             | Nájsť značku v súbore.<p/>Príklad: `tag:#work`.<p/>Majte na pamäti, že hľadanie `tag:#work` nevráti výsledky pre `#myjob/work`.<br /><br />**Poznámka**: Keďže `tag:` ignoruje zhody v blokoch kódu a v obsahu, ktorý nie je Markdown, je často rýchlejšie a presnejšie než bežné fulltextové hľadanie `#work`.     |
| `line:`            | Nájsť súbory, ktoré obsahujú aspoň jeden riadok zodpovedajúci `x`.<p/>Príklad: `line:(mix flour)`.<p/><br>**Poznámka:** Použitie `-line` neguje hľadanie, čo znamená, že nájde súbory, kde žiadny riadok nezodpovedá `x`.                                                                                          |
| `block:`           | Nájsť zhody v rovnakom bloku.<p/>Príklad: `block:(dog cat)`.<p/>**Poznámka**: Keďže `block:` vyžaduje, aby Hľadanie analyzovalo Markdown obsah v každom súbore, môže to spôsobiť dlhší čas dokončenia vyhľadávania.                                                                                                 |
| `section:`         | Nájsť zhody v rovnakej sekcii (text medzi dvoma nadpismi).<p/>Príklad: `section:(dog cat)`.                                                                                                                                                                                                                         |
| `task:`            | Nájsť zhody v [[Základná syntax formátovania#Zoznamy úloh\|úlohe]] na úrovni jednotlivých blokov.<p/>Príklad: `task:call`.                                                                                                                                                                                          |
| `task-todo:`       | Nájsť zhody v *nedokončenej* [[Základná syntax formátovania#Zoznamy úloh\|úlohe]] na úrovni jednotlivých blokov.<p/>Príklad: `task-todo:call`.                                                                                                                                                                      |
| `task-done:`       | Nájsť zhody v *dokončenej* [[Základná syntax formátovania#Zoznamy úloh\|úlohe]] na úrovni jednotlivých blokov.<p/>Príklad: `task-done:call`.                                                                                                                                                                        |

## Hľadanie vlastností

Vo vyhľadávacích výrazoch môžete použiť dáta uložené vo [[Vlastnosti|vlastnostiach]].

Použite hranaté zátvorky okolo názvu vlastnosti `[property]` na vrátenie súborov s touto vlastnosťou:

- `[aliases]` vráti súbory, ktoré obsahujú vlastnosť `aliases`

Použite hranaté zátvorky a dvojbodku `[property:value]` na vrátenie súborov s touto vlastnosťou a hodnotou:

- `[aliases:Name]` vráti súbory, kde hodnota vlastnosti `aliases` je `Name`

Použite `null` ako hodnotu na nájdenie vlastností, ktoré nemajú žiadnu hodnotu:

- `[aliases:null]` vráti súbory, kde vlastnosť `aliases` existuje, ale nemá žiadnu hodnotu

> [!info]+ Prázdne hodnoty
> Operátor `null` funguje, keď je vlastnosť prázdna (napr. `aliases: `), ale nie keď vlastnosť obsahuje prázdne úvodzovky (`""`) alebo prázdne zátvorky (`[]`).

Vlastnosť aj hodnota umožňujú podotázky, ako napríklad zátvorky na zoskupenie, operátor `OR`, dvojité úvodzovky na presné porovnanie a regulárne výrazy.

- `[status:Draft OR Published]` vráti súbory, kde hodnota vlastnosti `status` je `Draft` alebo `Published`

## Zmena rozlišovania veľkých/malých písmen

V predvolenom nastavení vyhľadávacie výrazy nerozlišujú veľké a malé písmená. Ak chcete hľadať presné veľkosť písmen vášho vyhľadávacieho výrazu, vyberte **Rozlišovať malé/veľké písmená** ![[obsidian-icon-upper-lowercase.svg#icon]] vo vyhľadávacom paneli.

Toto nastavenie je možné prepínať. Ak je ikona **Rozlišovať malé/veľké písmená** zvýraznená, znamená to, že práve vykonávate hľadanie s rozlišovaním veľkých/malých písmen.

## Zmena poradia zoradenia výsledkov

1. Zadajte [[#Vyhľadávacie výrazy|vyhľadávací výraz]].
2. Pod vyhľadávacím poľom vyberte rozbaľovací ponuku vpravo.
3. Vyberte požadované poradie zoradenia. Predvolené je „Zoradiť podľa názvu súboru (od A po Z)".

K dispozícii sú nasledujúce možnosti:

- Zoradiť podľa názvu súboru (od A po Z)
- Zoradiť podľa názvu súboru (od Z po A)
- Zoradiť podľa času úpravy (od najnovšieho po najstaršie)
- Zoradiť podľa času úpravy (od najstaršieho po najnovšie)
- Zoradiť podľa času vytvorenia (od najnovšieho po najstaršie)
- Zoradiť podľa času vytvorenia (od najstaršieho po najnovšie)

## Kopírovanie výsledkov hľadania

1. Zadajte [[#Vyhľadávacie výrazy|vyhľadávací výraz]].
2. Pod vyhľadávacím poľom vyberte ikonu troch bodiek vedľa počtu výsledkov.
3. Vyberte **Kopírovať výsledky hľadania**.

## Použitie regulárnych výrazov

Regulárny výraz je sada znakov, ktorá popisuje textový vzor. Na použitie regulárnych výrazov vo vyhľadávacom výraze obklopte výraz lomkami (`/`).

- `/\d{4}-\d{2}-\d{2}/` zodpovedá dátumu ISO 8601, napríklad 2022-01-01.

Regulárne výrazy môžete dokonca kombinovať s operátormi hľadania:

- `path:/\d{4}-\d{2}-\d{2}/` vráti súbory s dátumom v ceste k súboru.

Viac informácií o písaní regulárnych výrazov nájdete v [Praktickom sprievodcovi regulárnymi výrazmi](https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/) od FreeCodeCamp alebo v [Regulárnych výrazoch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) od Mozilly.

> [!info]+ Regulárne výrazy vo formáte JavaScript
> Regulárne výrazy existujú v rôznych variantoch, ktoré sa môžu navzájom líšiť. Obsidian používa regulárne výrazy vo formáte JavaScript.

## Konfigurácia nastavení hľadania

Na konfiguráciu Hľadania vyberte **Hľadať nastavenia** ![[lucide-sliders-horizontal.svg#icon]] na pravej strane vyhľadávacieho panela pre zobrazenie prepínačov.

| Nastavenie                       | Popis                                                                        |
|----------------------------------|------------------------------------------------------------------------------|
| **Vysvetliť vyhľadávací výraz** | Rozloží vyhľadávacie výrazy a vysvetlí ich v obyčajnom texte.                |
| **Zbaliť výsledky**             | Prepína, či sa má zobrazovať kontext hľadania.                               |
| **Zobraziť viac súvislostí**    | Rozšíri výsledok hľadania na zobrazenie viac textu okolo zhody.              |

## Vloženie výsledkov hľadania do poznámky

Na vloženie výsledkov hľadania do poznámky pridajte blok kódu `query`:

````
```query
embed OR search
```
````

[[Úvod do Obsidian Publish|Obsidian Publish]] nepodporuje vložené [[Obmedzenia Publish#Hľadať|výsledky hľadania]]. Na zobrazenie živého vykresleného príkladu použite vyššie uvedený blok kódu vo vašom trezore.

![[search-query-rendered.png]]
