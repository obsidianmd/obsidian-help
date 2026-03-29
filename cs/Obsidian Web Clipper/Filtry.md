---
permalink: web-clipper/filters
---
Filtry umožňují upravovat [[Proměnné|proměnné]] v [[Obsidian Web Clipper/Šablony|šablonách Web Clipper]]. Filtry se aplikují na proměnné pomocí syntaxe `{{variable|filter}}`.

- Filtry fungují pro jakýkoliv druh [[Proměnné|proměnné]] včetně proměnných `prompt`, `meta`, `selector` a `schema`.
- Filtry lze řetězit, např. `{{variable|filter1|filter2}}`, a jsou aplikovány v pořadí, v jakém jsou přidány.

## Datumy

Převod a úprava datumů.

### `date`

Převede datum na zadaný formát, [viz reference](https://day.js.org/docs/en/display/format).

- `{{date|date:"YYYY-MM-DD"}}` převede aktuální datum na "YYYY-MM-DD".
- Pomocí `date:("outputFormat", "inputFormat")` lze zadat vstupní formát, např. `"12/01/2024"|date:("YYYY-MM-DD", "MM/DD/YYYY")` parsuje "12/01/2024" a vrátí `"2024-12-01"`.

### `date_modify` 

Upraví datum přidáním nebo odečtením zadaného časového úseku, [viz reference](https://day.js.org/docs/en/manipulate/add).

- `"2024-12-01"|date_modify:"+1 year"` vrátí `"2025-12-01"`
- `"2024-12-01"|date_modify:"- 2 months"` vrátí `"2024-10-01"`

### `duration`

Převede řetězce ISO 8601 trvání nebo sekundy na formátované časové řetězce. Používá tokeny: `HH` (hodiny s nulou), `H` (hodiny), `mm` (minuty s nulou), `m` (minuty), `ss` (sekundy s nulou), `s` (sekundy).

- `"PT1H30M"|duration:"HH:mm:ss"` vrátí `"01:30:00"`.
- `"3665"|duration:"H:mm:ss"` vrátí `"1:01:05"`.
- Nastavení `duration` bez parametrů použije `HH:mm:ss` nad 1 hodinu, `mm:ss` pod 1 hodinu.
- Podporuje jak řetězce trvání ISO 8601 (např. `PT6702S`, `PT1H30M`), tak prosté sekundy.

## Převod textu a velká písmena

Převod textových řetězců z jednoho formátu do jiného.

### `camel`

Převede text na `camelCase`.

### `capitalize`

Změní první znak hodnoty na velké písmeno a zbytek převede na malá písmena, např. `"hELLO wORLD"|capitalize` vrátí `"Hello world"`.

### `decode_uri`

Dekóduje URI-kódovaný řetězec, např. `"%E4%BD%A0%E5%A5%BD"|decode_uri` vrátí `"你好"`.

- `"hello%20world"|decode_uri` vrátí `"hello world"`.
- Pokud dekódování selže (např. nesprávné URI sekvence), vrátí původní řetězec.

### `kebab`

Převede text na `kebab-case`.

### `lower`

Převede text na `malá písmena`.

### `pascal`

Převede text na `PascalCase`.

### `replace`

Nahradí výskyty zadaného textu:

- Jednoduchá náhrada: `"hello!"|replace:",":""` odstraní všechny čárky.
- Vícenásobná náhrada: `"hello world"|replace:("e":"a","o":"0")` vrátí `"hall0 w0rld"`.
- Náhrady se aplikují v pořadí, v jakém jsou zadány.
- Pro odstranění zadaného textu použijte `""` jako náhradní hodnotu.
- Speciální znaky včetně `: | { } ( ) ' "` by měly být v hledaném výrazu escapovány zpětným lomítkem, např. `\:` pro hledání doslovné dvojtečky.

Je podporován regulární výraz pomocí syntaxe JavaScript regex:

- Nahradit všechny samohlásky: `"hello world"|replace:"/[aeiou]/g":"*"` → `"h*ll* w*rld".`
- Bez rozlišení velikosti: `"HELLO world"|replace:"/hello/i":"hi"` → `"hi world".`
- Vícenásobný regex: `"hello world"|replace:("/[aeiou]/g":"*","/\s+/":"-")` → `"h*ll*-w*rld"`.
- Dostupné příznaky: `g` (globální), `i` (bez rozlišení velikosti), `m` (víceřádkový), `s` (dotAll), `u` (unicode), `y` (sticky).

### `safe_name`

Převede text na bezpečný název souboru.

- Ve výchozím nastavení `safe_name` aplikuje nejkonzervativnější pravidla sanitizace.
- Pravidla specifická pro OS lze aplikovat pomocí `safe_name:os`, kde `os` může být `windows`, `mac` nebo `linux`, aby se aplikovala pouze pravidla pro daný operační systém.

### `snake`

Převede text na `snake_case`.

### `title`

Převede text na `Title Case`, např. `"hello world"|title` vrátí `"Hello World"`.

### `trim`

Odstraní bílé znaky z obou konců řetězce.

- `"  hello world  "|trim` vrátí `"hello world"`.

### `uncamel`

Převede camelCase nebo PascalCase na slova oddělená mezerami, která můžete dále formátovat jinými filtry jako `title` nebo `capitalize`.

- `"camelCase"|uncamel` vrátí `"camel case"`.
- `"PascalCase"|uncamel` vrátí `"pascal case"`.

### `upper`

Převede hodnotu na velká písmena, např. `"hello world"|upper` vrátí `"HELLO WORLD"`.

## Formátování textu

Aplikace [[Základní syntaxe formátování]] a [[Rozšířená syntaxe formátování]] na text.

### `blockquote` 

Přidá prefix blokové citace Markdown (`> `) na každý řádek vstupu.

### `callout`

Vytvoří [[Zvýrazněné bloky|zvýrazněný blok]] s volitelnými parametry: `{{variable|callout:("type", "title", foldState)}}`

- `type` je typ zvýrazněného bloku, výchozí je "info"
- `title` je název zvýrazněného bloku, výchozí je prázdný
- `foldState` je boolean pro nastavení stavu sbalení (true pro sbalený, false pro rozbalený, null pro nesbalitelný)

### `footnote`

Převede pole nebo objekt na seznam poznámek pod čarou v Markdown.

- Pro pole: `["first item","second item"]|footnote` vrátí: `[^1]: first item` atd.
- Pro objekty: `{"First Note": "Content 1", "Second Note": "Content 2"}|footnote` vrátí: `[^first-note]: Content 1` atd.

### `fragment_link`

Převede řetězce a pole na odkazy s [textovými fragmenty](https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments). Výchozí text odkazu je "link".

- `highlights|fragment_link` vrátí `Highlight content [link](text-fragment-url)`
- `highlights|fragment_link:"custom title"` vrátí `Highlight content [custom title](text-fragment-url)`

### `image` 

Převede řetězce, pole nebo objekty na syntaxi obrázků v Markdown.

- Pro řetězce: `"image.jpg"|image:"alt text"` vrátí `![alt text](image.jpg)`.
- Pro pole: `["image1.jpg","image2.jpg"]|image:"alt text"` vrátí pole řetězců obrázků v Markdown se stejným alternativním textem pro všechny obrázky.
- Pro objekty: `{"image1.jpg": "Alt 1", "image2.jpg": "Alt 2"}|image` vrátí řetězce obrázků v Markdown s alternativním textem z klíčů objektu.

### `link`

Převede řetězce, pole nebo objekty na syntaxi odkazů v Markdown (nezaměňujte s [[Filtry#`wikilink`|wikilink]]).

- Pro řetězce: `"url"|link:"author"` vrátí `[author](url)`.
- Pro pole: `["url1","url2"]|link:"author"` vrátí pole odkazů v Markdown se stejným textem pro všechny odkazy.
- Pro objekty: `{"url1": "Author 1", "url2": "Author 2"}|link` vrátí odkazy v Markdown s textem odpovídajícím klíčům objektu.

### `list`

Převede pole na seznam v Markdown.

- `list` pro převod na odrážkový seznam.
- `list:task` pro převod na seznam úkolů.
- `list:numbered` pro převod na číslovaný seznam.
- `list:numbered-task` pro převod na seznam úkolů s čísly.

### `table`

Převede pole nebo pole objektů na [[Rozšířená syntaxe formátování#Tabulky|tabulku v Markdown]]:

- Pro pole objektů použije klíče objektu jako záhlaví.
- Pro pole polí vytvoří tabulku, kde každé vnořené pole je řádek.
- Pro jednoduché pole vytvoří jednosloupcovou tabulku se záhlavím "Value".
- Vlastní záhlaví sloupců lze zadat pomocí: `table:("Column 1", "Column 2", "Column 3")`. Při použití s jednoduchým polem automaticky rozdělí data do řádků na základě zadaného počtu sloupců.

### `wikilink`

Převede řetězce, pole nebo objekty na syntaxi [[Propojení poznámek|wiki odkazů]] v Obsidian.

- Pro řetězce: `"page"|wikilink` vrátí `[[page]]`.
- Pro řetězce s aliasem: `"page"|wikilink:"alias"` vrátí `[[page|alias]]`.
- Pro pole: `["page1","page2"]|wikilink` vrátí pole wiki odkazů bez aliasů.
- Pro pole s aliasem: `["page1","page2"]|wikilink:"alias"` vrátí pole wiki odkazů se stejným aliasem pro všechny odkazy.
- Pro objekty: `{"page1": "alias1", "page2": "alias2"}|wikilink` vrátí wiki odkazy s klíči jako názvy stránek a hodnotami jako aliasy.

## Čísla

### `calc`

Provádí základní aritmetické operace s čísly.

- Podporované operátory: `+`, `-`, `*`, `/`, `**` (nebo `^`) pro umocňování.
- Příklad: `5|calc:"+10"` vrátí `15`.
- Příklad: `2|calc:"**3"` vrátí `8` (2 na třetí).
- Pokud vstup není číslo, vrátí původní řetězec.

### `length`

Vrátí délku řetězců, polí nebo počet klíčů v objektech.

- Pro řetězce: `"hello"|length` vrátí `5`.
- Pro pole: `["a","b","c"]|length` vrátí `3`.
- Pro objekty: `{"a":1,"b":2}|length` vrátí `2`.

### `round`

Zaokrouhlí číslo na nejbližší celé číslo nebo na zadaný počet desetinných míst.

- Bez parametrů: `3.7|round` vrátí `4`.
- Se zadaným počtem desetinných míst: `3.14159|round:2` vrátí `3.14`.

## Zpracování HTML

Zpracování HTML obsahu a převod HTML na Markdown. Všimněte si, že vaše vstupní [[Proměnné|proměnná]] musí obsahovat HTML obsah, např. pomocí `{{fullHtml}}`, `{{contentHtml}}` nebo proměnné `{{selectorHtml:}}`.

### `markdown` 

Převede řetězec na řetězec formátovaný v [[Obsidian Flavored Markdown]].

- Užitečné v kombinaci s proměnnými, které vrací HTML, jako jsou `{{contentHtml}}`, `{{fullHtml}}` a proměnné selektorů jako `{{selectorHtml:cssSelector}}`.

### `remove_attr` 

Odstraní pouze zadané HTML atributy ze značek.

- Příklad: `"<div class="test" id="example">Content</div>"|remove_attr:"class"` vrátí `<div id="example">Content</div>`.
- Více atributů: `{{fullHtml|remove_attr:("class,style,id")}}`

### `remove_html`

Odstraní zadané HTML elementy a jejich obsah z řetězce.

- Podporuje název značky, třídu nebo id, např. `{{fullHtml|remove_html:("img,.class-name,#element-id")}}`
- Pro odstranění pouze HTML značek nebo atributů bez odstranění obsahu použijte filtry `strip_tags` nebo `strip_attr`.

### `remove_tags` 

Odstraní pouze zadané HTML značky. Zachová obsah značek.

- Příklad: `"<p>Hello <b>world</b>!</p>"|remove_tags:"b"` vrátí `"<p>Hello world!</p>"`.
- Více značek: `{{fullHtml|remove_tags:("a,em,strong")}}`

### `replace_tags`

Nahradí HTML značky, přičemž zachová obsah a atributy značky.

- `{{fullHtml|replace_tags:"strong":"h2"}}` nahradí všechny značky `<strong>` za `<h2>`.

### `strip_attr`

Odstraní **všechny** HTML atributy z řetězce.

- Pomocí `strip_attr:("class, id")` lze ponechat konkrétní atributy.
- Příklad: `"<div class="test" id="example">Content</div>"|strip_attr:("class")` vrátí `<div id="example">Content</div>`.

### `strip_md`

Odstraní **veškeré** Markdown formátování a vrátí řetězec v prostém textu, např. změní `**text**` na `text`.

- Převede formátovaný text na neformátovaný prostý text, včetně tučného, kurzívy, zvýraznění, nadpisů, kódu, blokových citací, tabulek, seznamů úkolů a wiki odkazů.
- Zcela odstraní tabulky, poznámky pod čarou, obrázky a HTML elementy.

### `strip_tags`

Odstraní **všechny** HTML značky z řetězce. Obsah uvnitř značky je zachován.

- Pomocí `strip_tags:("p,strong,em")` lze ponechat konkrétní značky.
- Příklad: `"<p>Hello <b>world</b>!</p>"|strip_tags:("b")` vrátí `Hello <b>world</b>!`.

## Pole a objekty

Zpracování polí a objektů.

### `first` 

Vrátí první prvek pole jako řetězec.

- `["a","b","c"]|first` vrátí `"a"`.
- Pokud vstup není pole, vrátí vstup beze změny.

### `join`

Spojí prvky pole do řetězce.

- `["a","b","c"]|join` vrátí `"a,b,c"`.
- Lze zadat vlastní oddělovač: `["a","b","c"]|join:" "` vrátí `"a b c"`. Použijte `join:"\n"` pro oddělení prvků zalomením řádku.
- Může být užitečné po `split` nebo `slice`: `"a,b,c,d"|split:","|slice:1,3|join:" "` vrátí `"b c"`.

### `last`

Vrátí poslední prvek pole jako řetězec.

- `["a","b","c"]|last` vrátí `"c"`.
- Pokud vstup není pole, vrátí vstup beze změny.

### `map`

Aplikuje transformaci na každý prvek pole pomocí syntaxe `map:item => item.property` nebo `map:item => item.nested.property` pro vnořené vlastnosti.

- `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => item.gem` vrátí `["obsidian", "amethyst"]`.
- Pro objektové literály a složité výrazy použijte závorky: `map:item => ({key: value})`, např.: `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => ({name: item.gem, color: item.color})` vrátí `[{name: "obsidian", color: "black"}, {name: "amethyst", color: "purple"}]`.

Jsou podporovány i řetězcové literály, např. `["rock", "pop"]|map:item => "genres/${item}"` vrátí `["genres/rock", "genres/pop"]`.

Kombinujte `map` s filtrem `template`, např. `map:item => ({name: ${item.gem}, color: item.color})|template:"- ${name} is ${color}\n"`. Pro řetězcové literály z map použijte v šabloně `${str}`, např. `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"`.

Poznámka: Vestavěné filtry nelze používat uvnitř `map`. To znamená, že například oříznutí každé hodnoty pole nelze provést pomocí `map`.

### `merge`

Přidá nové hodnoty do pole.

- Pro pole: `["a","b"]|merge:("c","d")` vrátí `["a","b","c","d"]`.
- Jedna hodnota: `["a","b"]|merge:"c"` vrátí `["a","b","c"]`.
- Pokud vstup není pole, vytvoří nové pole: `"a"|merge:("b","c")` vrátí `["a","b","c"]`.
- Hodnoty mohou být v uvozovkách: `["a"]|merge:('b,"c,d",e')` vrátí `["a","b","c,d","e"]`.

### `nth`

Zachová n-té položky v poli pomocí syntaxe CSS nth-child a skupinových vzorů. Všechny pozice jsou 1-based (první položka je pozice 1).

- `array|nth:3` zachová pouze 3. prvek.
- `array|nth:3n` zachová každý 3. prvek (3, 6, 9 atd.).
- `array|nth:n+3` zachová 3. a všechny následující prvky.

Syntaxe skupinových vzorů pro opakující se struktury:

- `array|nth:1,2,3:5` zachová pozice 1, 2, 3 z každé skupiny 5 položek. Příklad: `[1,2,3,4,5,6,7,8,9,10]|nth:1,2,3:5` vrátí `[1,2,3,6,7,8]`.

### `object`

Manipuluje s daty objektů:

- `object:array` převede objekt na pole párů klíč-hodnota.
- `object:keys` vrátí pole klíčů objektu.
- `object:values` vrátí pole hodnot objektu.
- Příklad: `{"a":1,"b":2}|object:array` vrátí `[["a",1],["b",2]]`.

### `slice`

Extrahuje část řetězce nebo pole.

- Pro řetězce: `"hello"|slice:1,4` vrátí `"ell"`.
- Pro pole: `["a","b","c","d"]|slice:1,3` vrátí `["b","c"]`.
- Pokud je zadán pouze jeden parametr, ořízne od daného indexu do konce: `"hello"|slice:2` vrátí `"llo"`.
- Záporné indexy počítají od konce: `"hello"|slice:-3` vrátí `"llo"`.
- Druhý parametr je exkluzivní: `"hello"|slice:1,4` zahrnuje znaky na indexech 1, 2 a 3.
- Použití záporného druhého parametru vyloučí prvky od konce: `"hello"|slice:0,-2` vrátí `"hel"`.

### `split`

Rozdělí řetězec na pole podřetězců.

- `"a,b,c"|split:","` vrátí `["a","b","c"]`.
- `"hello world"|split:" "` vrátí `["hello","world"]`.
- Pokud není zadán oddělovač, rozdělí na každý znak: `"hello"|split` vrátí `["h","e","l","l","o"]`.
- Jako oddělovače lze použít regulární výrazy: `"a1b2c3"|split:[0-9]` vrátí `["a","b","c"]`.

### `template`

Aplikuje řetězec šablony na objekt nebo pole objektů pomocí syntaxe `object|template:"Template with ${variable}"`.

- Přístup k vnořeným vlastnostem: `{"gem":{"name":"Obsidian"}}|template:"${gem.name}"` vrátí `"Obsidian"`.
- Pro objekty: `{"gem":"obsidian","hardness":5}|template:"${gem} has a hardness of ${hardness}"` vrátí `"obsidian has a hardness of 5"`.
- Pro pole: `[{"gem":"obsidian","hardness":5},{"gem":"amethyst","hardness":7}]|template:"- ${gem} has a hardness of ${hardness}\n"` vrátí formátovaný seznam.

Funguje s řetězcovými literály z `map` pomocí `${str}`:

- Příklad: `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"` vrátí formátovaný seznam.

### `unique`

Odstraní duplicitní hodnoty z polí a objektů.

- Pro pole primitivních hodnot: `[1,2,2,3,3]|unique` vrátí `[1,2,3]`.
- Pro pole objektů: `[{"a":1},{"b":2},{"a":1}]|unique` vrátí `[{"a":1},{"b":2}]`.
- Pro objekty odstraní vlastnosti s duplicitními hodnotami, přičemž zachová klíč posledního výskytu.
- Pro řetězce vrátí vstup beze změny.
