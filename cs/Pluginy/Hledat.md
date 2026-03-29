---
permalink: plugins/search
publish: true
mobile: true
description: 'Vyhledávání je základní plugin, který vám pomáhá najít data v trezoru Obsidian pomocí vyhledávacích výrazů a operátorů pro zúžení výsledků.'
---
Hledání je [[Základní pluginy|základní plugin]], který vám pomáhá najít data ve vašem trezoru Obsidian pomocí vyhledávacích výrazů a operátorů pro zúžení výsledků.

Ve výchozím nastavení najdete Hledání v levém postranním panelu ![[lucide-search.svg#icon]]. Hledání můžete také otevřít stisknutím `Ctrl+Shift+F` (Windows/Linux) nebo `Command+Shift+F` (macOS).

- **Hledání vybraného textu**: Pokud vyberete text v editoru a otevřete Hledání pomocí klávesové zkratky, Hledání vám zobrazí výsledky pro vybraný text.
- **Hledání posledních hledaných výrazů**: Otevřete Hledání s prázdným hledaným výrazem pro zobrazení seznamu nedávných hledaných výrazů. Klikněte na kterýkoli z nich pro opětovné použití.

> [!info] Vyloučené soubory
> Soubory odpovídající vašim vzorům [[Nastavení#Vyloučené soubory|Vyloučené soubory]] se nebudou zobrazovat ve výsledcích hledání.

## Hledané výrazy

Hledaný výraz je slovo nebo fráze, které zadáte do vyhledávacího pole. Naučit se efektivně psát hledané výrazy vám může pomoci rychle najít to, co hledáte, i ve velkých trezorech. Obsidian prohledává pouze obsah poznámek a pláten.

> [!tip]- Vyhledávání cest a názvů souborů
> Ve výchozím nastavení můžete prohledávat pouze cesty a názvy souborů poznámek a pláten. Pro vyhledání cesty nebo názvu jakéhokoli souboru v trezoru použijte operátor `path` nebo `file`.

Každé slovo v hledaném výrazu je porovnáváno nezávisle v rámci každého souboru. Pro hledání přesné fráze ji obklopte uvozovkami, například `"star wars"`. Pro hledání textu v uvozovkách v rámci přesné fráze můžete uvozovky _escapovat_ přidáním zpětného lomítka (`\`) před uvozovku, například `"they said \"hello\" to each other"`.

Můžete ovládat, zda se mají vracet soubory obsahující _všechna_ slova z hledaného výrazu, nebo _kterékoli_ z nich:

- `meeting work` vrací soubory obsahující jak `meeting`, tak `work`.
- `meeting OR work` vrací soubory obsahující buď `meeting`, nebo `work`.

Můžete dokonce kombinovat obojí ve stejném hledaném výrazu.

- `meeting work OR meetup personal` vrací soubory pro pracovní schůzky a osobní setkání.

Můžete použít závorky pro řízení priority jednotlivých výrazů.

- `meeting (work OR meetup) personal` vrací soubory obsahující `meeting`, `personal` a buď `work`, nebo `meetup`.

Pro vyloučení neboli negaci slova z výsledků hledání přidejte před něj pomlčku (`-`):

- `meeting -work` vrací soubory obsahující `meeting`, ale ne `work`.

Můžete vyloučit více výrazů:

- `meeting -work -meetup` vrací soubory obsahující `meeting`, ale ne `work` ani `meetup`.

Můžete vyloučit kombinaci výrazů pomocí závorek:

- `meeting -(work meetup)` vrací soubory obsahující `meeting`, ale ne _obojí_ `work` a `meetup`.

Pro filtrování výsledků pomocí operátorů menší než (`<`) a větší než (`>`) je obklopte hranatými závorkami (`[]`) nebo uvozovkami (`""`):

- `meeting [duration:<5]` vrací soubory, kde je přítomno meeting a duration je menší než 5.
- `meeting [duration:>5]` vrací soubory, kde je přítomno meeting a duration je větší než 5.

> [!tip]- Vysvětlení hledaného výrazu
> Pokud potřebujete řešit složitý hledaný výraz, můžete kliknout na **Vysvětlit hledaný výraz** v Hledání pro vysvětlení vašeho hledaného výrazu.

## Operátory hledání

Operátory hledání umožňují přesnější hledané výrazy pro ještě detailnější filtrování výsledků.

Některé operátory dokonce umožňují přidat vnořený hledaný výraz v závorkách, například: `task:(call OR email)`.

| Operátor hledání | Popis                                                                                                                                                                                                                                                                                                                |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `file:`           | Najde text v názvu souboru. Odpovídá jakémukoli souboru v trezoru.<p/>Příklad: `file:.jpg` nebo `file:202209`.                                                                                                                                                                                                       |
| `path:`           | Najde text v cestě souboru. Odpovídá jakémukoli souboru v trezoru.<p/>Příklad: `path:"Daily notes/2022-07"`.                                                                                                                                                                                                         |
| `content:`        | Najde text v obsahu souboru.<p/>Příklad: `content:"happy cat"`.                                                                                                                                                                                                                                                      |
| `match-case:`     | Porovnání s rozlišením velkých a malých písmen.<p/>Příklad: `match-case:HappyCat`.                                                                                                                                                                                                                                   |
| `ignore-case:`    | Porovnání bez rozlišení velkých a malých písmen.<p/>Příklad: `ignore-case:ikea`.                                                                                                                                                                                                                                     |
| `tag:`            | Najde štítek v souboru.<p/>Příklad: `tag:#work`.<p/>Mějte na paměti, že hledání `tag:#work` nevrátí výsledky pro `#myjob/work`.<br /><br />**Poznámka**: Protože `tag:` ignoruje shody v blocích kódu a v ne-Markdown obsahu, je často rychlejší a přesnější než běžné fulltextové hledání `#work`.                   |
| `line:`           | Najde soubory obsahující alespoň jeden řádek odpovídající `x`.<p/>Příklad: `line:(mix flour)`.<p/><br>**Poznámka:** Použití `-line` neguje hledání, což znamená, že najde soubory, kde žádný řádek neodpovídá `x`.                                                                                                   |
| `block:`          | Najde shody ve stejném bloku.<p/>Příklad: `block:(dog cat)`.<p/>**Poznámka**: Protože `block:` vyžaduje, aby Hledání parsovalo Markdown obsah v každém souboru, může způsobit, že hledaný výraz bude trvat déle.                                                                                                      |
| `section:`        | Najde shody ve stejné sekci (text mezi dvěma nadpisy).<p/>Příklad: `section:(dog cat)`.                                                                                                                                                                                                                              |
| `task:`           | Najde shody v [[Základní syntaxe formátování#Seznamy úkolů\|úkolu]] na úrovni jednotlivých bloků.<p/>Příklad: `task:call`.                                                                                                                                                                                           |
| `task-todo:`      | Najde shody v *nedokončeném* [[Základní syntaxe formátování#Seznamy úkolů\|úkolu]] na úrovni jednotlivých bloků.<p/>Příklad: `task-todo:call`.                                                                                                                                                                        |
| `task-done:`      | Najde shody v *dokončeném* [[Základní syntaxe formátování#Seznamy úkolů\|úkolu]] na úrovni jednotlivých bloků.<p/>Příklad: `task-done:call`.                                                                                                                                                                          |

## Vyhledávání vlastností

Můžete ve svých hledaných výrazech používat data uložená ve [[Vlastnosti|vlastnostech]].

Použijte hranaté závorky kolem názvu vlastnosti `[property]` pro vrácení souborů s danou vlastností:

- `[aliases]` vrací soubory obsahující vlastnost `aliases`

Použijte hranaté závorky a dvojtečku `[property:value]` pro vrácení souborů s danou vlastností a hodnotou:

- `[aliases:Name]` vrací soubory, kde má vlastnost `aliases` hodnotu `Name`

Použijte `null` jako hodnotu pro nalezení vlastností, které nemají žádnou hodnotu:

- `[aliases:null]` vrací soubory, kde vlastnost `aliases` existuje, ale nemá žádnou hodnotu

> [!info]+ Prázdné hodnoty
> Operátor `null` funguje, když je vlastnost prázdná (např. `aliases: `), ale ne když vlastnost obsahuje prázdné uvozovky (`""`) nebo prázdné závorky (`[]`).

Jak vlastnost, tak hodnota umožňují vnořené dotazy, jako jsou závorky pro seskupování, operátor `OR`, uvozovky pro přesnou shodu a regulární výrazy.

- `[status:Draft OR Published]` vrací soubory, kde má vlastnost `status` hodnotu `Draft` nebo `Published`

## Změna rozlišování velkých a malých písmen

Ve výchozím nastavení hledané výrazy nerozlišují velká a malá písmena. Pokud chcete hledat přesnou velikost písmen vašeho hledaného výrazu, vyberte **Rozlišovat velká a malá písmena** ![[obsidian-icon-upper-lowercase.svg#icon]] uvnitř vyhledávacího pole.

Toto nastavení lze přepínat. Pokud je ikona **Rozlišovat velká a malá písmena** zvýrazněna, znamená to, že aktuálně provádíte hledání s rozlišením velkých a malých písmen.

## Změna řazení výsledků

1. Zadejte [[#Hledané výrazy|hledaný výraz]].
2. Pod vyhledávacím polem vyberte rozbalovací nabídku vpravo.
3. Vyberte požadované řazení. Výchozí je „Seřadit podle jména (od A do Z)".

K dispozici jsou následující možnosti:

- Seřadit podle jména (od A do Z)
- Seřadit podle jména (od Z po A)
- Seřadit podle data upravení (od nejnovějšího po nejstarší)
- Seřadit podle data upravení (od nejstaršího po nejnovější)
- Čas vytvoření (od nejnovéjšího po nejstarší)
- Čas vytvoření (od nejstaršího po nejnovější)

## Kopírování výsledků hledání

1. Zadejte [[#Hledané výrazy|hledaný výraz]].
2. Pod vyhledávacím polem vyberte ikonu tří teček vedle počtu výsledků.
3. Vyberte **Kopírovat výsledky hledání**.

## Použití regulárních výrazů

Regulární výraz je sada znaků popisující textový vzor. Pro použití regulárních výrazů ve vašem hledaném výrazu obklopte výraz lomítky (`/`).

- `/\d{4}-\d{2}-\d{2}/` odpovídá datu ve formátu ISO 8601, například 2022-01-01.

Regulární výrazy můžete dokonce kombinovat s operátory hledání:

- `path:/\d{4}-\d{2}-\d{2}/` vrací soubory s datem v cestě souboru.

Pro více informací o psaní regulárních výrazů si přečtěte [Practical Regex guide](https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/) od FreeCodeCamp nebo [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) od Mozilly.

> [!info]+ Regulární výrazy ve stylu JavaScriptu
> Regulární výrazy existují v různých variantách, které mohou vypadat odlišně. Obsidian používá regulární výrazy ve stylu JavaScriptu.

## Konfigurace nastavení hledání

Pro konfiguraci Hledání vyberte **Nastavení hledání** ![[lucide-sliders-horizontal.svg#icon]] na pravé straně vyhledávacího pole pro zobrazení přepínačů.

| Nastavení                    | Popis                                                                             |
|------------------------------|-----------------------------------------------------------------------------------|
| **Vysvětlit hledaný výraz**  | Rozloží hledaný výraz a vysvětlí ho prostým textem.                               |
| **Sbalit výsledky**          | Přepíná, zda se má zobrazit kontext hledání.                                      |
| **Zobrazit více kontextu**   | Rozšíří výsledek hledání a zobrazí více textu kolem shody.                        |

## Vložení výsledků hledání do poznámky

Pro vložení výsledků hledání do poznámky přidejte blok kódu `query`:

````
```query
embed OR search
```
````

[[Úvod do Obsidian Publish|Obsidian Publish]] nepodporuje vložené [[Omezení Publish#Hledání|výsledky hledání]]. Pro zobrazení živě vyrenderovaného příkladu použijte výše uvedený blok kódu ve svém trezoru.

![[search-query-rendered.png]]
