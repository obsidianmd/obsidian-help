---
permalink: web-clipper/filters
---
Filtre umožňujú modifikovať [[Premenné|premenné]] v [[Obsidian Web Clipper/Šablóny|šablónach Web Clipper]]. Filtre sa aplikujú na premenné pomocou syntaxe `{{variable|filter}}`.

- Filtre fungujú pre akýkoľvek druh [[Premenné|premennej]] vrátane premenných `prompt`, `meta`, `selector` a `schema`.
- Filtre je možné reťaziť, napr. `{{variable|filter1|filter2}}`, a aplikujú sa v poradí, v akom sú pridané.

## Dátumy

Konvertovanie a úprava dátumov.

### `date`

Konvertuje dátum do zadaného formátu, [pozri referenciu](https://day.js.org/docs/en/display/format).

- `{{date|date:"YYYY-MM-DD"}}` konvertuje aktuálny dátum na "YYYY-MM-DD".
- Použite `date:("outputFormat", "inputFormat")` na určenie vstupného formátu, napr. `"12/01/2024"|date:("YYYY-MM-DD", "MM/DD/YYYY")` spracuje "12/01/2024" a vráti `"2024-12-01"`.

### `date_modify`

Modifikuje dátum pridaním alebo odobratím určeného časového úseku, [pozri referenciu](https://day.js.org/docs/en/manipulate/add).

- `"2024-12-01"|date_modify:"+1 year"` vráti `"2025-12-01"`
- `"2024-12-01"|date_modify:"- 2 months"` vráti `"2024-10-01"`

### `duration`

Konvertuje reťazce trvania ISO 8601 alebo sekundy na formátované časové reťazce. Používa tokeny: `HH` (doplnené hodiny), `H` (hodiny), `mm` (doplnené minúty), `m` (minúty), `ss` (doplnené sekundy), `s` (sekundy).

- `"PT1H30M"|duration:"HH:mm:ss"` vráti `"01:30:00"`.
- `"3665"|duration:"H:mm:ss"` vráti `"1:01:05"`.
- Nastavenie `duration` bez parametrov použije `HH:mm:ss` nad 1 hodinu, `mm:ss` pod 1 hodinu.
- Podporuje reťazce trvania ISO 8601 (napr. `PT6702S`, `PT1H30M`) aj obyčajné sekundy.

## Konverzia textu a veľké písmená

Konvertovanie textových reťazcov z jedného formátu do druhého.

### `camel`

Konvertuje text na `camelCase`.

### `capitalize`

Zmení prvý znak hodnoty na veľké písmeno a zvyšok konvertuje na malé písmená, napr. `"hELLO wORLD"|capitalize` vráti `"Hello world"`.

### `decode_uri`

Dekóduje reťazec zakódovaný URI, napr. `"%E4%BD%A0%E5%A5%BD"|decode_uri` vráti `"你好"`.

- `"hello%20world"|decode_uri` vráti `"hello world"`.
- Ak dekódovanie zlyhá, vráti pôvodný reťazec (napr. chybné URI sekvencie).

### `kebab`

Konvertuje text na `kebab-case`.

### `lower`

Konvertuje text na `malé písmená`.

### `pascal`

Konvertuje text na `PascalCase`.

### `replace`

Nahrádza výskyty zadaného textu:

- Jednoduchá náhrada: `"hello!"|replace:",":""` odstráni všetky čiarky.
- Viacnásobná náhrada: `"hello world"|replace:("e":"a","o":"0")` vráti `"hall0 w0rld"`.
- Náhrady sa aplikujú v poradí, v akom sú zadané.
- Na odstránenie zadaného textu použite `""` ako náhradnú hodnotu.
- Špeciálne znaky vrátane `: | { } ( ) ' "` by mali byť escapované spätným lomítkom pri použití vo vyhľadávacom výraze, napr. `\:` na vyhľadanie doslovnej dvojbodky.

Regulárne výrazy sú podporované pomocou JavaScript regex syntaxe:

- Nahradiť všetky samohlásky: `"hello world"|replace:"/[aeiou]/g":"*"` → `"h*ll* w*rld".`
- Bez rozlíšenia veľkosti písmen: `"HELLO world"|replace:"/hello/i":"hi"` → `"hi world".`
- Viacnásobný regulárny výraz: `"hello world"|replace:("/[aeiou]/g":"*","/\s+/":"-")` → `"h*ll*-w*rld"`.
- Dostupné príznaky: `g` (globálny), `i` (bez rozlíšenia veľkosti písmen), `m` (viacriadkový), `s` (dotAll), `u` (unicode), `y` (sticky).

### `safe_name`

Konvertuje text na bezpečný názov súboru.

- Predvolene `safe_name` aplikuje najkonzervatívnejšie pravidlá sanitizácie.
- Pravidlá špecifické pre operačný systém je možné aplikovať pomocou `safe_name:os`, kde `os` môže byť `windows`, `mac` alebo `linux` na aplikáciu pravidiel len pre daný operačný systém.

### `snake`

Konvertuje text na `snake_case`.

### `title`

Konvertuje text na `Title Case`, napr. `"hello world"|title` vráti `"Hello World"`.

### `trim`

Odstráni biele znaky z oboch koncov reťazca.

- `"  hello world  "|trim` vráti `"hello world"`.

### `uncamel`

Konvertuje camelCase alebo PascalCase na slová oddelené medzerami, ktoré môžete ďalej formátovať inými filtrami ako `title` alebo `capitalize`.

- `"camelCase"|uncamel` vráti `"camel case"`.
- `"PascalCase"|uncamel` vráti `"pascal case"`.

### `upper`

Konvertuje hodnotu na veľké písmená, napr. `"hello world"|upper` vráti `"HELLO WORLD"`.

## Formátovanie textu

Aplikovanie [[Základná syntax formátovania|základnej syntaxe formátovania]] a [[Rozšírená syntax formátovania|rozšírenej syntaxe formátovania]] na text.

### `blockquote`

Pridá Markdown prefix citátu (`> `) na každý riadok vstupu.

### `callout`

Vytvorí [[Popisy|zvýraznený blok]] s voliteľnými parametrami: `{{variable|callout:("type", "title", foldState)}}`

- `type` je typ zvýrazneného bloku, predvolene "info"
- `title` je nadpis zvýrazneného bloku, predvolene prázdny
- `foldState` je boolean na nastavenie stavu zbalenia (true pre zbalený, false pre rozbalený, null pre nezbaľovateľný)

### `footnote`

Konvertuje pole alebo objekt na zoznam Markdown poznámok pod čiarou.

- Pre polia: `["first item","second item"]|footnote` vráti: `[^1]: first item` atď.
- Pre objekty: `{"First Note": "Content 1", "Second Note": "Content 2"}|footnote` vráti: `[^first-note]: Content 1` atď.

### `fragment_link`

Konvertuje reťazce a polia na odkazy [textových fragmentov](https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments). Predvolene používa "link" ako text odkazu.

- `highlights|fragment_link` vráti `Highlight content [link](text-fragment-url)`
- `highlights|fragment_link:"custom title"` vráti `Highlight content [custom title](text-fragment-url)`

### `image`

Konvertuje reťazce, polia alebo objekty na Markdown syntax obrázkov.

- Pre reťazce: `"image.jpg"|image:"alt text"` vráti `![alt text](image.jpg)`.
- Pre polia: `["image1.jpg","image2.jpg"]|image:"alt text"` vráti pole Markdown reťazcov obrázkov s rovnakým alternatívnym textom pre všetky obrázky.
- Pre objekty: `{"image1.jpg": "Alt 1", "image2.jpg": "Alt 2"}|image` vráti Markdown reťazce obrázkov s alternatívnym textom z kľúčov objektu.

### `link`

Konvertuje reťazce, polia alebo objekty na Markdown syntax odkazov (nezamieňať s [[Filtre#`wikilink`|wikilink]]).

- Pre reťazce: `"url"|link:"author"` vráti `[author](url)`.
- Pre polia: `["url1","url2"]|link:"author"` vráti pole Markdown odkazov s rovnakým textom pre všetky odkazy.
- Pre objekty: `{"url1": "Author 1", "url2": "Author 2"}|link` vráti Markdown odkazy s textom zodpovedajúcim kľúčom objektu.

### `list`

Konvertuje pole na Markdown zoznam.

- `list` na konverziu na odrážkový zoznam.
- `list:task` na konverziu na zoznam úloh.
- `list:numbered` na konverziu na číslovaný zoznam.
- `list:numbered-task` na konverziu na zoznam úloh s číslovaním.

### `table`

Konvertuje pole alebo pole objektov na [[Rozšírená syntax formátovania#Tabuľky|Markdown tabuľku]]:

- Pre pole objektov používa kľúče objektu ako hlavičky.
- Pre pole polí vytvorí tabuľku s každým vnoreným poľom ako riadkom.
- Pre jednoduché pole vytvorí tabuľku s jedným stĺpcom s hlavičkou "Value".
- Vlastné hlavičky stĺpcov je možné zadať pomocou: `table:("Column 1", "Column 2", "Column 3")`. Pri použití s jednoduchým poľom automaticky rozdelí dáta do riadkov podľa počtu zadaných stĺpcov.

### `wikilink`

Konvertuje reťazce, polia alebo objekty na Obsidian [[Prepojenie poznámok|wiki odkaz]] syntax.

- Pre reťazce: `"page"|wikilink` vráti `[[page]]`.
- Pre reťazce s aliasom: `"page"|wikilink:"alias"` vráti `[[page|alias]]`.
- Pre polia: `["page1","page2"]|wikilink` vráti pole wiki odkazov bez aliasov.
- Pre polia s aliasom: `["page1","page2"]|wikilink:"alias"` vráti pole wiki odkazov s rovnakým aliasom pre všetky odkazy.
- Pre objekty: `{"page1": "alias1", "page2": "alias2"}|wikilink` vráti wiki odkazy s kľúčmi ako názvami stránok a hodnotami ako aliasmi.

## Čísla

### `calc`

Vykonáva základné aritmetické operácie s číslami.

- Podporuje operátory: `+`, `-`, `*`, `/`, `**` (alebo `^`) pre umocňovanie.
- Príklad: `5|calc:"+10"` vráti `15`.
- Príklad: `2|calc:"**3"` vráti `8` (2 na tretiu).
- Ak vstup nie je číslo, vráti pôvodný reťazec.

### `length`

Vráti dĺžku reťazcov, polí alebo počet kľúčov v objektoch.

- Pre reťazce: `"hello"|length` vráti `5`.
- Pre polia: `["a","b","c"]|length` vráti `3`.
- Pre objekty: `{"a":1,"b":2}|length` vráti `2`.

### `round`

Zaokrúhli číslo na najbližšie celé číslo alebo na zadaný počet desatinných miest.

- Bez parametrov: `3.7|round` vráti `4`.
- So zadanými desatinnými miestami: `3.14159|round:2` vráti `3.14`.

## Spracovanie HTML

Spracovanie HTML obsahu a konverzia HTML na Markdown. Upozorňujeme, že vaša vstupná [[Premenné|premenná]] musí obsahovať HTML obsah, napr. pomocou `{{fullHtml}}`, `{{contentHtml}}` alebo premennej `{{selectorHtml:}}`.

### `markdown`

Konvertuje reťazec na reťazec formátovaný v [[Obsidian Flavored Markdown]].

- Užitočné v kombinácii s premennými, ktoré vracajú HTML, ako `{{contentHtml}}`, `{{fullHtml}}` a premenné selektorov ako `{{selectorHtml:cssSelector}}`.

### `remove_attr`

Odstráni iba zadané HTML atribúty zo značiek.

- Príklad: `"<div class="test" id="example">Content</div>"|remove_attr:"class"` vráti `<div id="example">Content</div>`.
- Viacero atribútov: `{{fullHtml|remove_attr:("class,style,id")}}`

### `remove_html`

Odstráni zadané HTML elementy a ich obsah z reťazca.

- Podporuje názov značky, triedu alebo id, napr. `{{fullHtml|remove_html:("img,.class-name,#element-id")}}`
- Na odstránenie iba HTML značiek alebo atribútov bez odstránenia obsahu použite filtre `strip_tags` alebo `strip_attr`.

### `remove_tags`

Odstráni iba zadané HTML značky. Zachová obsah značiek.

- Príklad: `"<p>Hello <b>world</b>!</p>"|remove_tags:"b"` vráti `"<p>Hello world!</p>"`.
- Viacero značiek: `{{fullHtml|remove_tags:("a,em,strong")}}`

### `replace_tags`

Nahradí HTML značky, pričom zachová obsah a atribúty značky.

- `{{fullHtml|replace_tags:"strong":"h2"}}` nahradí všetky značky `<strong>` značkami `<h2>`.

### `strip_attr`

Odstráni **všetky** HTML atribúty z reťazca.

- Použite `strip_attr:("class, id")` na zachovanie konkrétnych atribútov.
- Príklad: `"<div class="test" id="example">Content</div>"|strip_attr:("class")` vráti `<div id="example">Content</div>`.

### `strip_md`

Odstráni **všetko** Markdown formátovanie a vráti reťazec obyčajného textu, napr. zmení `**text**` na `text`.

- Zmení formátovaný text na neformátovaný obyčajný text, vrátane tučného, kurzívy, zvýraznení, nadpisov, kódu, blokových citácií, tabuliek, zoznamov úloh a wiki odkazov.
- Úplne odstráni tabuľky, poznámky pod čiarou, obrázky a HTML elementy.

### `strip_tags`

Odstráni **všetky** HTML značky z reťazca. Obsah v rámci značky je zachovaný.

- Použite `strip_tags:("p,strong,em")` na zachovanie konkrétnych značiek.
- Príklad: `"<p>Hello <b>world</b>!</p>"|strip_tags:("b")` vráti `Hello <b>world</b>!`.

## Polia a objekty

Spracovanie polí a objektov.

### `first`

Vráti prvý element poľa ako reťazec.

- `["a","b","c"]|first` vráti `"a"`.
- Ak vstup nie je pole, vráti vstup nezmenený.

### `join`

Spojí elementy poľa do reťazca.

- `["a","b","c"]|join` vráti `"a,b,c"`.
- Vlastný oddeľovač je možné zadať: `["a","b","c"]|join:" "` vráti `"a b c"`. Použite `join:"\n"` na oddelenie elementov zalomením riadku.
- Môže byť užitočné po `split` alebo `slice`: `"a,b,c,d"|split:","|slice:1,3|join:" "` vráti `"b c"`.

### `last`

Vráti posledný element poľa ako reťazec.

- `["a","b","c"]|last` vráti `"c"`.
- Ak vstup nie je pole, vráti vstup nezmenený.

### `map`

Aplikuje transformáciu na každý element poľa pomocou syntaxe `map:item => item.property` alebo `map:item => item.nested.property` pre vnorené vlastnosti.

- `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => item.gem` vráti `["obsidian", "amethyst"]`.
- Použite zátvorky pre objektové literály a zložité výrazy: `map:item => ({key: value})`, napr.: `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => ({name: item.gem, color: item.color})` vráti `[{name: "obsidian", color: "black"}, {name: "amethyst", color: "purple"}]`.

Reťazcové literály sú tiež podporované, napr. `["rock", "pop"]|map:item => "genres/${item}"` vráti `["genres/rock", "genres/pop"]`.

Kombinujte `map` s filtrom `template`, napr. `map:item => ({name: ${item.gem}, color: item.color})|template:"- ${name} is ${color}\n"`. Pre reťazcové literálne mapy použite `${str}` v šablóne, napr. `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"`.

Poznámka: Vstavané filtre nie je možné použiť vnútri `map`. To znamená, že napríklad orezanie každej hodnoty poľa nie je možné vykonať pomocou `map`.

### `merge`

Pridáva nové hodnoty do poľa.

- Pre polia: `["a","b"]|merge:("c","d")` vráti `["a","b","c","d"]`.
- Jedna hodnota: `["a","b"]|merge:"c"` vráti `["a","b","c"]`.
- Ak vstup nie je pole, vytvorí nové pole: `"a"|merge:("b","c")` vráti `["a","b","c"]`.
- Hodnoty môžu byť v úvodzovkách: `["a"]|merge:('b,"c,d",e')` vráti `["a","b","c,d","e"]`.

### `nth`

Zachová n-té položky v poli pomocou CSS nth-child syntaxe a skupinových vzorov. Všetky pozície sú založené na 1 (prvá položka je pozícia 1).

- `array|nth:3` zachová iba 3. element.
- `array|nth:3n` zachová každý 3. element (3, 6, 9, atď.).
- `array|nth:n+3` zachová 3. a všetky nasledujúce elementy.

Syntax skupinového vzoru pre opakujúce sa štruktúry:

- `array|nth:1,2,3:5` zachová pozície 1, 2, 3 z každej skupiny 5 položiek. Príklad: `[1,2,3,4,5,6,7,8,9,10]|nth:1,2,3:5` vráti `[1,2,3,6,7,8]`.

### `object`

Manipuluje s dátami objektu:

- `object:array` konvertuje objekt na pole párov kľúč-hodnota.
- `object:keys` vráti pole kľúčov objektu.
- `object:values` vráti pole hodnôt objektu.
- Príklad: `{"a":1,"b":2}|object:array` vráti `[["a",1],["b",2]]`.

### `slice`

Extrahuje časť reťazca alebo poľa.

- Pre reťazce: `"hello"|slice:1,4` vráti `"ell"`.
- Pre polia: `["a","b","c","d"]|slice:1,3` vráti `["b","c"]`.
- Ak je zadaný iba jeden parameter, reže od daného indexu do konca: `"hello"|slice:2` vráti `"llo"`.
- Záporné indexy počítajú od konca: `"hello"|slice:-3` vráti `"llo"`.
- Druhý parameter je exkluzívny: `"hello"|slice:1,4` obsahuje znaky na indexoch 1, 2 a 3.
- Použitie záporného druhého parametra vylúči elementy od konca: `"hello"|slice:0,-2` vráti `"hel"`.

### `split`

Rozdelí reťazec na pole podreťazcov.

- `"a,b,c"|split:","` vráti `["a","b","c"]`.
- `"hello world"|split:" "` vráti `["hello","world"]`.
- Ak nie je zadaný oddeľovač, rozdelí na každý znak: `"hello"|split` vráti `["h","e","l","l","o"]`.
- Regulárne výrazy je možné použiť ako oddeľovače: `"a1b2c3"|split:[0-9]` vráti `["a","b","c"]`.

### `template`

Aplikuje reťazec šablóny na objekt alebo pole objektov pomocou syntaxe `object|template:"Template with ${variable}"`.

- Prístup k vnoreným vlastnostiam: `{"gem":{"name":"Obsidian"}}|template:"${gem.name}"` vráti `"Obsidian"`.
- Pre objekty: `{"gem":"obsidian","hardness":5}|template:"${gem} has a hardness of ${hardness}"` vráti `"obsidian has a hardness of 5"`.
- Pre polia: `[{"gem":"obsidian","hardness":5},{"gem":"amethyst","hardness":7}]|template:"- ${gem} has a hardness of ${hardness}\n"` vráti formátovaný zoznam.

Funguje s reťazcovými literálmi z `map` pomocou `${str}`:

- Príklad: `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"` vráti formátovaný zoznam.

### `unique`

Odstráni duplicitné hodnoty z polí a objektov.

- Pre polia primitív: `[1,2,2,3,3]|unique` vráti `[1,2,3]`.
- Pre polia objektov: `[{"a":1},{"b":2},{"a":1}]|unique` vráti `[{"a":1},{"b":2}]`.
- Pre objekty odstráni vlastnosti s duplicitnými hodnotami, pričom zachová kľúč posledného výskytu.
- Pre reťazce vráti vstup nezmenený.
