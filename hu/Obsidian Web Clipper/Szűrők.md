---
permalink: web-clipper/filters
---
A szűrők lehetővé teszik a [[Változók|változók]] módosítását az [[Obsidian Web Clipper/Sablonok|Web Clipper sablonokban]]. A szűrők a `{{variable|filter}}` szintaxissal alkalmazhatók a változókra.

- A szűrők bármilyen [[Változók|változó]] típussal működnek, beleértve a `prompt`, `meta`, `selector` és `schema` változókat.
- A szűrők láncolhatók, pl. `{{variable|filter1|filter2}}`, és a hozzáadásuk sorrendjében kerülnek alkalmazásra.

## Dátumok

Dátumok átalakítása és módosítása.

### `date`

A dátumot a megadott formátumra alakítja, [lásd a referenciát](https://day.js.org/docs/en/display/format).

- `{{date|date:"YYYY-MM-DD"}}` az aktuális dátumot "YYYY-MM-DD" formátumra alakítja.
- Használja a `date:("outputFormat", "inputFormat")` szintaxist a bemeneti formátum megadásához, pl. `"12/01/2024"|date:("YYYY-MM-DD", "MM/DD/YYYY")` feldolgozza a "12/01/2024" értéket és `"2024-12-01"` eredményt ad.

### `date_modify`

Módosítja a dátumot megadott időtartam hozzáadásával vagy kivonásával, [lásd a referenciát](https://day.js.org/docs/en/manipulate/add).

- `"2024-12-01"|date_modify:"+1 year"` eredménye `"2025-12-01"`
- `"2024-12-01"|date_modify:"- 2 months"` eredménye `"2024-10-01"`

### `duration`

ISO 8601 időtartam-karakterláncokat vagy másodperceket formázott idő-karakterláncokká alakít. Használt tokenek: `HH` (kiegészített órák), `H` (órák), `mm` (kiegészített percek), `m` (percek), `ss` (kiegészített másodpercek), `s` (másodpercek).

- `"PT1H30M"|duration:"HH:mm:ss"` eredménye `"01:30:00"`.
- `"3665"|duration:"H:mm:ss"` eredménye `"1:01:05"`.
- A `duration` paraméter nélküli beállítása `HH:mm:ss` formátumot használ 1 óra felett, `mm:ss` formátumot 1 óra alatt.
- Támogatja az ISO 8601 időtartam-karakterláncokat (pl. `PT6702S`, `PT1H30M`) és az egyszerű másodperceket is.

## Szövegátalakítás és nagybetűsítés

Szöveges karakterláncok átalakítása egyik formátumról a másikra.

### `camel`

A szöveget `camelCase` formátumra alakítja.

### `capitalize`

Az érték első karakterét nagybetűsíti, a többit kisbetűsre alakítja, pl. `"hELLO wORLD"|capitalize` eredménye `"Hello world"`.

### `decode_uri`

URI-kódolt karakterláncot dekódol, pl. `"%E4%BD%A0%E5%A5%BD"|decode_uri` eredménye `"你好"`.

- `"hello%20world"|decode_uri` eredménye `"hello world"`.
- Sikertelen dekódolás esetén (pl. hibás URI-szekvenciák) az eredeti karakterláncot adja vissza.

### `kebab`

A szöveget `kebab-case` formátumra alakítja.

### `lower`

A szöveget `kisbetűssé` alakítja.

### `pascal`

A szöveget `PascalCase` formátumra alakítja.

### `replace`

A megadott szöveg előfordulásait cseréli:

- Egyszerű csere: `"hello!"|replace:",":""` eltávolítja az összes vesszőt.
- Többszörös csere: `"hello world"|replace:("e":"a","o":"0")` eredménye `"hall0 w0rld"`.
- A cserék a megadás sorrendjében kerülnek alkalmazásra.
- A megadott szöveg eltávolításához használja a `""` értéket csereértékként.
- A speciális karaktereket, beleértve a `: | { } ( ) ' "` jeleket, fordított perjellel kell feloldani a keresési kifejezésben, pl. `\:` egy valódi kettőspont kereséséhez.

A reguláris kifejezések JavaScript regex szintaxissal támogatottak:

- Összes magánhangzó cseréje: `"hello world"|replace:"/[aeiou]/g":"*"` → `"h*ll* w*rld".`
- Kis-nagybetű érzéketlen: `"HELLO world"|replace:"/hello/i":"hi"` → `"hi world".`
- Többszörös regex: `"hello world"|replace:("/[aeiou]/g":"*","/\s+/":"-")` → `"h*ll*-w*rld"`.
- Elérhető jelzők: `g` (globális), `i` (kis-nagybetű érzéketlen), `m` (többsoros), `s` (dotAll), `u` (unicode), `y` (ragadós).

### `safe_name`

A szöveget biztonságos fájlnévvé alakítja.

- Alapértelmezetten a `safe_name` a legkonzervatívabb sanitizálási szabályokat alkalmazza.
- Operációs rendszerre specifikus szabályok alkalmazhatók a `safe_name:os` szintaxissal, ahol az `os` lehet `windows`, `mac` vagy `linux`, hogy csak az adott operációs rendszerre vonatkozó szabályokat alkalmazza.

### `snake`

A szöveget `snake_case` formátumra alakítja.

### `title`

A szöveget `Cím Formátumra` alakítja, pl. `"hello world"|title` eredménye `"Hello World"`.

### `trim`

Eltávolítja a szóközöket a karakterlánc mindkét végéről.

- `"  hello world  "|trim` eredménye `"hello world"`.

### `uncamel`

A camelCase vagy PascalCase formátumot szóközökkel elválasztott szavakká alakítja, amelyeket további szűrőkkel, például `title` vagy `capitalize` szűrőkkel formázhat.

- `"camelCase"|uncamel` eredménye `"camel case"`.
- `"PascalCase"|uncamel` eredménye `"pascal case"`.

### `upper`

Az értéket nagybetűssé alakítja, pl. `"hello world"|upper` eredménye `"HELLO WORLD"`.

## Szövegformázás

[[Alapvető formázási szintaxis]] és [[Haladó formázási szintaxis]] alkalmazása szövegre.

### `blockquote`

Markdown idézet előtagot (`> `) ad a bemenet minden sorához.

### `callout`

[[Felhívások|Felhívást]] hoz létre opcionális paraméterekkel: `{{variable|callout:("type", "title", foldState)}}`

- `type` a felhívás típusa, alapértelmezetten "info"
- `title` a felhívás címe, alapértelmezetten üres
- `foldState` egy logikai érték az összecsukás állapotának beállításához (true összecsukott, false kibontott, null nem csukható össze)

### `footnote`

Tömböt vagy objektumot Markdown lábjegyzetek listájává alakít.

- Tömbökhöz: `["first item","second item"]|footnote` eredménye: `[^1]: first item` stb.
- Objektumokhoz: `{"First Note": "Content 1", "Second Note": "Content 2"}|footnote` eredménye: `[^first-note]: Content 1` stb.

### `fragment_link`

Karakterláncokat és tömböket [szövegfragmentum](https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments) hivatkozásokká alakít. Alapértelmezett hivatkozásszöveg: "link".

- `highlights|fragment_link` eredménye `Highlight content [link](text-fragment-url)`
- `highlights|fragment_link:"custom title"` eredménye `Highlight content [custom title](text-fragment-url)`

### `image`

Karakterláncokat, tömböket vagy objektumokat Markdown kép szintaxissá alakít.

- Karakterláncokhoz: `"image.jpg"|image:"alt text"` eredménye `![alt text](image.jpg)`.
- Tömbökhöz: `["image1.jpg","image2.jpg"]|image:"alt text"` Markdown kép karakterláncok tömbjét adja vissza, azonos alt szöveggel minden képhez.
- Objektumokhoz: `{"image1.jpg": "Alt 1", "image2.jpg": "Alt 2"}|image` Markdown kép karakterláncokat ad vissza az objektum kulcsaiból származó alt szöveggel.

### `link`

Karakterláncokat, tömböket vagy objektumokat Markdown hivatkozás szintaxissá alakít (nem tévesztendő össze a [[Szűrők#`wikilink`|wikihivatkozással]]).

- Karakterláncokhoz: `"url"|link:"author"` eredménye `[author](url)`.
- Tömbökhöz: `["url1","url2"]|link:"author"` Markdown hivatkozások tömbjét adja vissza, azonos szöveggel minden hivatkozáshoz.
- Objektumokhoz: `{"url1": "Author 1", "url2": "Author 2"}|link` Markdown hivatkozásokat ad vissza az objektum kulcsaihoz illeszkedő szöveggel.

### `list`

Tömböt Markdown listává alakít.

- `list` felsorolássá alakít.
- `list:task` teendőlistává alakít.
- `list:numbered` számozott listává alakít.
- `list:numbered-task` számozott teendőlistává alakít.

### `table`

Tömböt vagy objektumtömböt [[Haladó formázási szintaxis#Táblázatok|Markdown táblázattá]] alakít:

- Objektumtömbhöz az objektum kulcsait használja fejlécként.
- Tömbtömbhöz egy táblázatot hoz létre, ahol minden beágyazott tömb egy sor.
- Egyszerű tömbhöz egyoszlopos táblázatot hoz létre "Value" fejléccel.
- Egyéni oszlopfejlécek megadhatók a következővel: `table:("Column 1", "Column 2", "Column 3")`. Egyszerű tömbbel használva automatikusan sorokra bontja az adatokat a megadott oszlopok száma alapján.

### `wikilink`

Karakterláncokat, tömböket vagy objektumokat Obsidian [[Jegyzetek összekapcsolása|wikihivatkozás]] szintaxissá alakít.

- Karakterláncokhoz: `"page"|wikilink` eredménye `[[page]]`.
- Karakterláncokhoz alternatív névvel: `"page"|wikilink:"alias"` eredménye `[[page|alias]]`.
- Tömbökhöz: `["page1","page2"]|wikilink` wikihivatkozások tömbjét adja vissza alternatív nevek nélkül.
- Tömbökhöz alternatív névvel: `["page1","page2"]|wikilink:"alias"` wikihivatkozások tömbjét adja vissza, azonos alternatív névvel minden hivatkozáshoz.
- Objektumokhoz: `{"page1": "alias1", "page2": "alias2"}|wikilink` wikihivatkozásokat ad vissza a kulcsokkal mint oldalnevekkel és az értékekkel mint alternatív nevekkel.

## Számok

### `calc`

Alapvető aritmetikai műveleteket végez számokon.

- Támogatott operátorok: `+`, `-`, `*`, `/`, `**` (vagy `^`) hatványozáshoz.
- Példa: `5|calc:"+10"` eredménye `15`.
- Példa: `2|calc:"**3"` eredménye `8` (2 köbe).
- Ha a bemenet nem szám, az eredeti karakterláncot adja vissza.

### `length`

Visszaadja a karakterláncok, tömbök hosszát vagy az objektumok kulcsainak számát.

- Karakterláncokhoz: `"hello"|length` eredménye `5`.
- Tömbökhöz: `["a","b","c"]|length` eredménye `3`.
- Objektumokhoz: `{"a":1,"b":2}|length` eredménye `2`.

### `round`

Számot a legközelebbi egész számra vagy megadott számú tizedesjegyre kerekít.

- Paraméter nélkül: `3.7|round` eredménye `4`.
- Megadott tizedesjegyekkel: `3.14159|round:2` eredménye `3.14`.

## HTML feldolgozás

HTML tartalom feldolgozása és HTML átalakítása Markdown formátumra. Megjegyzés: a bemeneti [[Változók|változónak]] HTML tartalmat kell tartalmaznia, pl. a `{{fullHtml}}`, `{{contentHtml}}` vagy egy `{{selectorHtml:}}` változó használatával.

### `markdown`

Karakterláncot [[Obsidian Flavored Markdown]] formátumú karakterlánccá alakít.

- Hasznos olyan változókkal kombinálva, amelyek HTML-t adnak vissza, mint a `{{contentHtml}}`, `{{fullHtml}}` és a szelektor változók, mint a `{{selectorHtml:cssSelector}}`.

### `remove_attr`

Csak a megadott HTML attribútumokat távolítja el a címkékből.

- Példa: `"<div class="test" id="example">Content</div>"|remove_attr:"class"` eredménye `<div id="example">Content</div>`.
- Több attribútum: `{{fullHtml|remove_attr:("class,style,id")}}`

### `remove_html`

Eltávolítja a megadott HTML elemeket és azok tartalmát a karakterláncból.

- Támogatja a címkenevet, osztályt vagy azonosítót, pl. `{{fullHtml|remove_html:("img,.class-name,#element-id")}}`
- Ha csak a HTML címkéket vagy attribútumokat szeretné eltávolítani a tartalom megtartásával, használja a `strip_tags` vagy `strip_attr` szűrőket.

### `remove_tags`

Csak a megadott HTML címkéket távolítja el. A címkék tartalmát megtartja.

- Példa: `"<p>Hello <b>world</b>!</p>"|remove_tags:"b"` eredménye `"<p>Hello world!</p>"`.
- Több címke: `{{fullHtml|remove_tags:("a,em,strong")}}`

### `replace_tags`

HTML címkéket cserél, megtartva a címke tartalmát és attribútumait.

- `{{fullHtml|replace_tags:"strong":"h2"}}` az összes `<strong>` címkét `<h2>` címkére cseréli.

### `strip_attr`

Eltávolítja az **összes** HTML attribútumot a karakterláncból.

- Használja a `strip_attr:("class, id")` szintaxist meghatározott attribútumok megtartásához.
- Példa: `"<div class="test" id="example">Content</div>"|strip_attr:("class")` eredménye `<div id="example">Content</div>`.

### `strip_md`

Eltávolítja az **összes** Markdown formázást és egyszerű szöveges karakterláncot ad vissza, pl. a `**text**` szöveget `text` szöveggé alakítja.

- A formázott szöveget formázatlan egyszerű szöveggé alakítja, beleértve a félkövér, dőlt, kiemelés, fejlécek, kód, blokkidézetek, táblázatok, teendőlisták és wikihivatkozások formázást.
- Teljes mértékben eltávolítja a táblázatokat, lábjegyzeteket, képeket és HTML elemeket.

### `strip_tags`

Eltávolítja az **összes** HTML címkét a karakterláncból. A címkén belüli tartalom megmarad.

- Használja a `strip_tags:("p,strong,em")` szintaxist meghatározott címkék megtartásához.
- Példa: `"<p>Hello <b>world</b>!</p>"|strip_tags:("b")` eredménye `Hello <b>world</b>!`.

## Tömbök és objektumok

Tömbök és objektumok feldolgozása.

### `first`

Egy tömb első elemét adja vissza karakterláncként.

- `["a","b","c"]|first` eredménye `"a"`.
- Ha a bemenet nem tömb, változatlanul adja vissza a bemenetet.

### `join`

Egy tömb elemeit karakterlánccá egyesíti.

- `["a","b","c"]|join` eredménye `"a,b,c"`.
- Egyéni elválasztó megadható: `["a","b","c"]|join:" "` eredménye `"a b c"`. Használja a `join:"\n"` szintaxist az elemek sortöréssel való elválasztásához.
- Hasznos lehet `split` vagy `slice` után: `"a,b,c,d"|split:","|slice:1,3|join:" "` eredménye `"b c"`.

### `last`

Egy tömb utolsó elemét adja vissza karakterláncként.

- `["a","b","c"]|last` eredménye `"c"`.
- Ha a bemenet nem tömb, változatlanul adja vissza a bemenetet.

### `map`

Átalakítást alkalmaz egy tömb minden elemére a `map:item => item.property` vagy `map:item => item.nested.property` szintaxissal beágyazott tulajdonságokhoz.

- `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => item.gem` eredménye `["obsidian", "amethyst"]`.
- Használjon zárójeleket objektum literálokhoz és összetett kifejezésekhez: `map:item => ({key: value})`, pl.: `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => ({name: item.gem, color: item.color})` eredménye `[{name: "obsidian", color: "black"}, {name: "amethyst", color: "purple"}]`.

A karakterlánc literálok is támogatottak, pl. `["rock", "pop"]|map:item => "genres/${item}"` eredménye `["genres/rock", "genres/pop"]`.

Kombinálja a `map` szűrőt a `template` szűrővel, pl. `map:item => ({name: ${item.gem}, color: item.color})|template:"- ${name} is ${color}\n"`. Karakterlánc literál map-ekhez használja a `${str}` szintaxist a sablonban, pl. `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"`.

Megjegyzés: A beépített szűrők nem használhatók a `map`-en belül. Ez azt jelenti, hogy például egy tömb minden értékének trim-elése nem végezhető el a `map` segítségével.

### `merge`

Új értékeket ad egy tömbhöz.

- Tömbökhöz: `["a","b"]|merge:("c","d")` eredménye `["a","b","c","d"]`.
- Egyetlen érték: `["a","b"]|merge:"c"` eredménye `["a","b","c"]`.
- Ha a bemenet nem tömb, új tömböt hoz létre: `"a"|merge:("b","c")` eredménye `["a","b","c"]`.
- Az értékek idézőjelbe tehetők: `["a"]|merge:('b,"c,d",e')` eredménye `["a","b","c,d","e"]`.

### `nth`

Egy tömb n-edik elemeit tartja meg CSS-stílusú nth-child szintaxissal és csoportmintákkal. Minden pozíció 1-alapú (az első elem pozíciója 1).

- `array|nth:3` csak a 3. elemet tartja meg.
- `array|nth:3n` minden 3. elemet megtart (3, 6, 9, stb.).
- `array|nth:n+3` a 3. és az összes következő elemet megtartja.

Csoportminta szintaxis ismétlődő struktúrákhoz:

- `array|nth:1,2,3:5` az 1., 2., 3. pozíciót tartja meg minden 5 elemű csoportból. Példa: `[1,2,3,4,5,6,7,8,9,10]|nth:1,2,3:5` eredménye `[1,2,3,6,7,8]`.

### `object`

Objektumadatokat manipulál:

- `object:array` objektumot kulcs-érték párok tömbjévé alakít.
- `object:keys` az objektum kulcsainak tömbjét adja vissza.
- `object:values` az objektum értékeinek tömbjét adja vissza.
- Példa: `{"a":1,"b":2}|object:array` eredménye `[["a",1],["b",2]]`.

### `slice`

Egy karakterlánc vagy tömb egy részét nyeri ki.

- Karakterláncokhoz: `"hello"|slice:1,4` eredménye `"ell"`.
- Tömbökhöz: `["a","b","c","d"]|slice:1,3` eredménye `["b","c"]`.
- Ha csak egy paraméter van megadva, az adott indextől a végéig vágja: `"hello"|slice:2` eredménye `"llo"`.
- Negatív indexek a végétől számítanak: `"hello"|slice:-3` eredménye `"llo"`.
- A második paraméter kizáró jellegű: `"hello"|slice:1,4` az 1., 2. és 3. indexű karaktereket tartalmazza.
- Negatív második paraméter használata a végéről zár ki elemeket: `"hello"|slice:0,-2` eredménye `"hel"`.

### `split`

Karakterláncot részkarakterláncok tömbjévé oszt.

- `"a,b,c"|split:","` eredménye `["a","b","c"]`.
- `"hello world"|split:" "` eredménye `["hello","world"]`.
- Ha nincs elválasztó megadva, minden karakter mentén oszt: `"hello"|split` eredménye `["h","e","l","l","o"]`.
- Reguláris kifejezések használhatók elválasztóként: `"a1b2c3"|split:[0-9]` eredménye `["a","b","c"]`.

### `template`

Sablon karakterláncot alkalmaz egy objektumra vagy objektumok tömbjére, a `object|template:"Template with ${variable}"` szintaxissal.

- Beágyazott tulajdonságok elérése: `{"gem":{"name":"Obsidian"}}|template:"${gem.name}"` eredménye `"Obsidian"`.
- Objektumokhoz: `{"gem":"obsidian","hardness":5}|template:"${gem} has a hardness of ${hardness}"` eredménye `"obsidian has a hardness of 5"`.
- Tömbökhöz: `[{"gem":"obsidian","hardness":5},{"gem":"amethyst","hardness":7}]|template:"- ${gem} has a hardness of ${hardness}\n"` formázott listát ad eredményül.

Működik a `map`-ből származó karakterlánc literálokkal a `${str}` használatával:

- Példa: `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"` formázott listát ad eredményül.

### `unique`

Eltávolítja a duplikált értékeket tömbökből és objektumokból.

- Primitív értékek tömbjéhez: `[1,2,2,3,3]|unique` eredménye `[1,2,3]`.
- Objektumok tömbjéhez: `[{"a":1},{"b":2},{"a":1}]|unique` eredménye `[{"a":1},{"b":2}]`.
- Objektumok esetén eltávolítja a duplikált értékekkel rendelkező tulajdonságokat, megtartva az utolsó előfordulás kulcsát.
- Karakterláncok esetén változatlanul adja vissza a bemenetet.
