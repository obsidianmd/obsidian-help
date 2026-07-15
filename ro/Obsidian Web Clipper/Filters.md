---
permalink: web-clipper/filters
---
Filtrele îți permit să modifici [[variables|variabilele]] din [[Obsidian Web Clipper/Templates|șabloanele Web Clipper]]. Filtrele sunt aplicate variabilelor folosind sintaxa `{{variable|filter}}`.

- Filtrele funcționează pentru orice tip de [[Variables|variabilă]], inclusiv variabilele `prompt`, `meta`, `selector` și `schema`.
- Filtrele pot fi înlănțuite, de ex. `{{variable|filter1|filter2}}`, și sunt aplicate în ordinea în care sunt adăugate.

## Date calendaristice

Convertește și modifică date calendaristice.

### `date`

Convertește o dată în formatul specificat, [vezi referința](https://day.js.org/docs/en/display/format).

- `{{date|date:"YYYY-MM-DD"}}` convertește data curentă în „YYYY-MM-DD”.
- Folosește `date:("outputFormat", "inputFormat")` pentru a specifica formatul de intrare, de ex. `"12/01/2024"|date:("YYYY-MM-DD", "MM/DD/YYYY")` interpretează „12/01/2024” și returnează `"2024-12-01"`.

### `date_modify` 

Modifică o dată prin adăugarea sau scăderea unei perioade de timp specificate, [vezi referința](https://day.js.org/docs/en/manipulate/add).

- `"2024-12-01"|date_modify:"+1 year"` returnează `"2025-12-01"`
- `"2024-12-01"|date_modify:"- 2 months"` returnează `"2024-10-01"`

### `duration`

Convertește șiruri de durată ISO 8601 sau secunde în șiruri de timp formatate. Folosește simbolurile: `HH` (ore, cu zero în față), `H` (ore), `mm` (minute, cu zero în față), `m` (minute), `ss` (secunde, cu zero în față), `s` (secunde).

- `"PT1H30M"|duration:"HH:mm:ss"` returnează `"01:30:00"`.
- `"3665"|duration:"H:mm:ss"` returnează `"1:01:05"`.
- Setarea `duration` fără parametri folosește `HH:mm:ss` peste 1 oră, `mm:ss` sub 1 oră.
- Sunt acceptate atât șiruri de durată ISO 8601 (de ex., `PT6702S`, `PT1H30M`), cât și secunde simple.

## Conversia și capitalizarea textului

Convertește șiruri de text dintr-un format în altul.

### `camel`

Convertește textul în `camelCase`.

### `capitalize`

Scrie cu majusculă primul caracter al valorii și convertește restul cu litere mici, de ex. `"hELLO wORLD"|capitalize` returnează `"Hello world"`.

### `decode_uri`

Decodifică un șir codificat URI, de ex. `"%E4%BD%A0%E5%A5%BD"|decode_uri` returnează `"你好"`.

- `"hello%20world"|decode_uri` returnează `"hello world"`.
- Returnează șirul original dacă decodificarea eșuează (de ex., secvențe URI incorecte).

### `kebab`

Convertește textul în `kebab-case`.

### `lower`

Convertește textul cu litere mici.

### `pascal`

Convertește textul în `PascalCase`.

### `replace`

Înlocuiește aparițiile textului specificat:

- Înlocuire simplă: `"hello!"|replace:",":""` elimină toate virgulele.
- Înlocuiri multiple: `"hello world"|replace:("e":"a","o":"0")` returnează `"hall0 w0rld"`.
- Înlocuirile sunt aplicate în ordinea în care sunt specificate.
- Pentru a elimina textul specificat, folosește `""` ca valoare de înlocuire.
- Caracterele speciale, inclusiv `: | { } ( ) ' "`, trebuie precedate de o bară oblică inversă atunci când sunt folosite în termenul de căutare, de ex. `\:` pentru a căuta un caracter două puncte literal.

Expresiile regulate sunt acceptate folosind sintaxa regex din JavaScript:

- Înlocuiește toate vocalele: `"hello world"|replace:"/[aeiou]/g":"*"` → `"h*ll* w*rld".`
- Insensibil la majuscule/minuscule: `"HELLO world"|replace:"/hello/i":"hi"` → `"hi world".`
- Regex multiple: `"hello world"|replace:("/[aeiou]/g":"*","/\s+/":"-")` → `"h*ll*-w*rld"`.
- Indicatori disponibili: `g` (global), `i` (insensibil la majuscule/minuscule), `m` (multilinie), `s` (dotAll), `u` (unicode), `y` (sticky).

### `safe_name`

Convertește textul într-un nume de fișier sigur.

- Implicit, `safe_name` aplică cele mai stricte reguli de curățare.
- Se pot aplica reguli specifice sistemului de operare cu `safe_name:os`, unde `os` poate fi `windows`, `mac` sau `linux`, pentru a aplica doar regulile pentru acel sistem de operare.

### `snake`

Convertește textul în `snake_case`.

### `title`

Convertește textul în `Title Case` (fiecare cuvânt cu majusculă), de ex. `"hello world"|title` returnează `"Hello World"`.

### `trim`

Elimină spațiile albe de la ambele capete ale unui șir.

- `"  hello world  "|trim` returnează `"hello world"`.

### `uncamel`

Convertește camelCase sau PascalCase în cuvinte separate prin spații, pe care le poți formata în continuare cu alte filtre precum `title` sau `capitalize`.

- `"camelCase"|uncamel` returnează `"camel case"`.
- `"PascalCase"|uncamel` returnează `"pascal case"`.

### `upper`

Convertește o valoare cu majuscule, de ex. `"hello world"|upper` returnează `"HELLO WORLD"`.

## Formatarea textului

Aplică [[Basic formatting syntax]] și [[Advanced formatting syntax]] textului.

### `blockquote` 

Adaugă un prefix Markdown de citat (`> `) la fiecare linie din intrare.

### `callout`

Creează o [[Callouts|explicație]] cu parametri opționali: `{{variable|callout:("type", "title", foldState)}}`

- `type` este tipul explicației și are valoarea implicită „info”
- `title` este titlul explicației și are valoarea implicită goală
- `foldState` este un boolean care stabilește starea de pliere (true pentru pliat, false pentru depliat, null pentru nepliabil)

### `footnote`

Convertește un array sau un obiect într-o listă de note de subsol Markdown.

- Pentru array-uri: `["first item","second item"]|footnote` returnează: `[^1]: first item` etc.
- Pentru obiecte: `{"First Note": "Content 1", "Second Note": "Content 2"}|footnote` returnează: `[^first-note]: Content 1` etc.

### `fragment_link`

Convertește șiruri și array-uri în legături [text fragment](https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments). Implicit folosește „link” ca text al legăturii.

- `highlights|fragment_link` returnează `Highlight content [link](text-fragment-url)`
- `highlights|fragment_link:"custom title"` returnează `Highlight content [custom title](text-fragment-url)`

### `image` 

Convertește șiruri, array-uri sau obiecte în sintaxă Markdown pentru imagini.

- Pentru șiruri: `"image.jpg"|image:"alt text"` returnează `![alt text](image.jpg)`.
- Pentru array-uri: `["image1.jpg","image2.jpg"]|image:"alt text"` returnează un array de șiruri Markdown pentru imagini, cu același text alternativ pentru toate imaginile.
- Pentru obiecte: `{"image1.jpg": "Alt 1", "image2.jpg": "Alt 2"}|image` returnează șiruri Markdown pentru imagini cu textul alternativ preluat din cheile obiectului.

### `link`

Convertește șiruri, array-uri sau obiecte în sintaxă Markdown pentru legături (a nu se confunda cu [[Filters#`wikilink`|wikilink]]).

- Pentru șiruri: `"url"|link:"author"` returnează `[author](url)`.
- Pentru array-uri: `["url1","url2"]|link:"author"` returnează un array de legături Markdown cu același text pentru toate legăturile.
- Pentru obiecte: `{"url1": "Author 1", "url2": "Author 2"}|link` returnează legături Markdown cu textul care corespunde cheilor obiectului.

### `list`

Convertește un array într-o listă Markdown.

- `list` pentru a converti într-o listă cu marcatori.
- `list:task` pentru a converti într-o listă de sarcini.
- `list:numbered` pentru a converti într-o listă numerotată.
- `list:numbered-task` pentru a converti într-o listă de sarcini numerotată.

### `table`

Convertește un array sau un array de obiecte într-un [[Advanced formatting syntax#Tables|tabel Markdown]]:

- Pentru un array de obiecte, folosește cheile obiectului ca antete.
- Pentru un array de array-uri, creează un tabel cu fiecare array imbricat ca un rând.
- Pentru un array simplu, creează un tabel cu o singură coloană, cu „Value” ca antet.
- Antetele de coloană personalizate pot fi specificate folosind: `table:("Column 1", "Column 2", "Column 3")`. Când e folosit cu un array simplu, împarte automat datele în rânduri în funcție de numărul de coloane specificat.

### `wikilink`

Convertește șiruri, array-uri sau obiecte în sintaxă Obsidian [[Link notes|wikilink]].

- Pentru șiruri: `"page"|wikilink` returnează `[[page]]`.
- Pentru șiruri cu alias: `"page"|wikilink:"alias"` returnează `[[page|alias]]`.
- Pentru array-uri: `["page1","page2"]|wikilink` returnează un array de wikilink-uri fără aliasuri.
- Pentru array-uri cu alias: `["page1","page2"]|wikilink:"alias"` returnează un array de wikilink-uri cu același alias pentru toate legăturile.
- Pentru obiecte: `{"page1": "alias1", "page2": "alias2"}|wikilink` returnează wikilink-uri cu cheile ca nume de pagini și valorile ca aliasuri.

## Numere

### `calc`

Efectuează operații aritmetice de bază pe numere.

- Acceptă operatorii: `+`, `-`, `*`, `/`, `**` (sau `^`) pentru ridicare la putere.
- Exemplu: `5|calc:"+10"` returnează `15`.
- Exemplu: `2|calc:"**3"` returnează `8` (2 la puterea a treia).
- Returnează șirul original dacă intrarea nu este un număr.

### `length`

Returnează lungimea șirurilor, a array-urilor sau numărul de chei din obiecte.

- Pentru șiruri: `"hello"|length` returnează `5`.
- Pentru array-uri: `["a","b","c"]|length` returnează `3`.
- Pentru obiecte: `{"a":1,"b":2}|length` returnează `2`.

### `round`

Rotunjește un număr la cel mai apropiat întreg sau la un număr specificat de zecimale.

- Fără parametri: `3.7|round` returnează `4`.
- Cu zecimale specificate: `3.14159|round:2` returnează `3.14`.

## Procesare HTML

Procesează conținut HTML și convertește HTML în Markdown. Reține că [[Variables|variabila]] ta de intrare trebuie să conțină conținut HTML, de ex. folosind `{{fullHtml}}`, `{{contentHtml}}` sau o variabilă `{{selectorHtml:}}`.

### `markdown` 

Convertește un șir într-un șir formatat [[Obsidian Flavored Markdown]].

- Util atunci când este combinat cu variabile care returnează HTML, precum `{{contentHtml}}`, `{{fullHtml}}` și variabile selector precum `{{selectorHtml:cssSelector}}`.

### `remove_attr` 

Elimină doar atributele HTML specificate din etichete.

- Exemplu: `"<div class="test" id="example">Content</div>"|remove_attr:"class"` returnează `<div id="example">Content</div>`.
- Atribute multiple: `{{fullHtml|remove_attr:("class,style,id")}}`

### `remove_html`

Elimină elementele HTML specificate și conținutul lor dintr-un șir.

- Acceptă nume de etichetă, clasă sau id, de ex. `{{fullHtml|remove_html:("img,.class-name,#element-id")}}`
- Pentru a elimina doar etichetele sau atributele HTML fără a elimina conținutul, folosește filtrele `strip_tags` sau `strip_attr`.

### `remove_tags` 

Elimină doar etichetele HTML specificate. Păstrează conținutul etichetelor.

- Exemplu: `"<p>Hello <b>world</b>!</p>"|remove_tags:"b"` returnează `"<p>Hello world!</p>"`.
- Etichete multiple: `{{fullHtml|remove_tags:("a,em,strong")}}`

### `replace_tags`

Înlocuiește etichete HTML, păstrând conținutul și atributele etichetei.

- `{{fullHtml|replace_tags:"strong":"h2"}}` înlocuiește toate etichetele `<strong>` cu `<h2>`.

### `strip_attr`

Elimină **toate** atributele HTML dintr-un șir.

- Folosește `strip_attr:("class, id")` pentru a păstra atribute specifice.
- Exemplu: `"<div class="test" id="example">Content</div>"|strip_attr:("class")` returnează `<div id="example">Content</div>`.

### `strip_md`

Elimină **toată** formatarea Markdown și returnează un șir de text simplu, de ex. transformă `**text**` în `text`.

- Transformă textul formatat în text simplu, neformatat, inclusiv aldin, cursiv, evidențieri, titluri, cod, citate, tabele, liste de sarcini și wikilink-uri.
- Elimină în întregime tabelele, notele de subsol, imaginile și elementele HTML.

### `strip_tags`

Elimină **toate** etichetele HTML dintr-un șir. Conținutul din interiorul etichetei este păstrat.

- Folosește `strip_tags:("p,strong,em")` pentru a păstra etichete specifice.
- Exemplu: `"<p>Hello <b>world</b>!</p>"|strip_tags:("b")` returnează `Hello <b>world</b>!`.

## Array-uri și obiecte

Procesează array-uri și obiecte.

### `first` 

Returnează primul element al unui array ca șir.

- `["a","b","c"]|first` returnează `"a"`.
- Dacă intrarea nu este un array, returnează intrarea neschimbată.

### `join`

Combină elementele unui array într-un șir.

- `["a","b","c"]|join` returnează `"a,b,c"`.
- Se poate specifica un separator personalizat: `["a","b","c"]|join:" "` returnează `"a b c"`. Folosește `join:"\n"` pentru a separa elementele printr-o întrerupere de linie.
- Poate fi util după `split` sau `slice`: `"a,b,c,d"|split:","|slice:1,3|join:" "` returnează `"b c"`.

### `last`

Returnează ultimul element al unui array ca șir.

- `["a","b","c"]|last` returnează `"c"`.
- Dacă intrarea nu este un array, returnează intrarea neschimbată.

### `map`

Aplică o transformare fiecărui element al unui array folosind sintaxa `map:item => item.property` sau `map:item => item.nested.property` pentru proprietăți imbricate.

- `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => item.gem` returnează `["obsidian", "amethyst"]`.
- Folosește paranteze pentru literale de obiect și expresii complexe: `map:item => ({key: value})`, de ex.: `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => ({name: item.gem, color: item.color})`  returnează `[{name: "obsidian", color: "black"}, {name: "amethyst", color: "purple"}]`.

Sunt acceptate și literalele de tip șir, de ex. `["rock", "pop"]|map:item => "genres/${item}"` returnează `["genres/rock", "genres/pop"]`.

Combină `map` cu filtrul `template`, de ex. `map:item => ({name: ${item.gem}, color: item.color})|template:"- ${name} is ${color}\n"`. Pentru mapările cu literale de tip șir, folosește `${str}` în template, de ex. `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"`.

Notă: filtrele native nu pot fi folosite în interiorul `map`. Aceasta înseamnă că, de exemplu, eliminarea spațiilor de la fiecare valoare a unui array nu poate fi făcută cu `map`.

### `merge`

Adaugă valori noi la un array.

- Pentru array-uri: `["a","b"]|merge:("c","d")` returnează `["a","b","c","d"]`.
- Valoare singulară: `["a","b"]|merge:"c"` returnează `["a","b","c"]`.
- Dacă intrarea nu este un array, creează un array nou: `"a"|merge:("b","c")` returnează `["a","b","c"]`.
- Valorile pot fi puse între ghilimele: `["a"]|merge:('b,"c,d",e')` returnează `["a","b","c,d","e"]`.

### `nth`

Păstrează al n-lea element dintr-un array folosind sintaxă nth-child în stil CSS și modele de grup. Toate pozițiile sunt indexate de la 1 (primul element este poziția 1).

- `array|nth:3` păstrează doar al 3-lea element.
- `array|nth:3n` păstrează fiecare al 3-lea element (3, 6, 9 etc.).
- `array|nth:n+3` păstrează al 3-lea element și pe toate cele care urmează.

Sintaxa modelelor de grup pentru structuri repetitive:

- `array|nth:1,2,3:5` păstrează pozițiile 1, 2, 3 din fiecare grup de 5 elemente. Exemplu: `[1,2,3,4,5,6,7,8,9,10]|nth:1,2,3:5` returnează `[1,2,3,6,7,8]`.

### `object`

Manipulează date de tip obiect:

- `object:array` convertește un obiect într-un array de perechi cheie-valoare.
- `object:keys` returnează un array cu cheile obiectului.
- `object:values` returnează un array cu valorile obiectului.
- Exemplu: `{"a":1,"b":2}|object:array` returnează `[["a",1],["b",2]]`.

### `slice`

Extrage o porțiune dintr-un șir sau array.

- Pentru șiruri: `"hello"|slice:1,4` returnează `"ell"`.
- Pentru array-uri: `["a","b","c","d"]|slice:1,3` returnează `["b","c"]`.
- Dacă este furnizat un singur parametru, se face felierea de la acel index până la sfârșit: `"hello"|slice:2` returnează `"llo"`.
- Indicii negativi se numără de la sfârșit: `"hello"|slice:-3` returnează `"llo"`.
- Al doilea parametru este exclusiv: `"hello"|slice:1,4` include caracterele de la indicii 1, 2 și 3.
- Folosirea unui al doilea parametru negativ exclude elementele de la sfârșit: `"hello"|slice:0,-2` returnează `"hel"`.

### `split`

Împarte un șir într-un array de subșiruri.

- `"a,b,c"|split:","` returnează `["a","b","c"]`.
- `"hello world"|split:" "` returnează `["hello","world"]`.
- Dacă nu este furnizat niciun separator, se face împărțirea pe fiecare caracter: `"hello"|split` returnează `["h","e","l","l","o"]`.
- Expresiile regulate pot fi folosite ca separatori: `"a1b2c3"|split:[0-9]` returnează `["a","b","c"]`.

### `template`

Aplică un șir de tip șablon unui obiect sau unui array de obiecte, folosind sintaxa `object|template:"Template with ${variable}"`.

- Accesează proprietăți imbricate: `{"gem":{"name":"Obsidian"}}|template:"${gem.name}"` returnează `"Obsidian"`.
- Pentru obiecte: `{"gem":"obsidian","hardness":5}|template:"${gem} has a hardness of ${hardness}"` returnează `"obsidian has a hardness of 5"`.
- Pentru array-uri: `[{"gem":"obsidian","hardness":5},{"gem":"amethyst","hardness":7}]|template:"- ${gem} has a hardness of ${hardness}\n"` returnează o listă formatată.

Funcționează cu literale de tip șir din `map` folosind `${str}`:

- Exemplu: `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"` returnează o listă formatată.

### `unique`

Elimină valorile duplicate din array-uri și obiecte.

- Pentru array-uri de valori primitive: `[1,2,2,3,3]|unique` returnează `[1,2,3]`.
- Pentru array-uri de obiecte: `[{"a":1},{"b":2},{"a":1}]|unique` returnează `[{"a":1},{"b":2}]`.
- Pentru obiecte, elimină proprietățile cu valori duplicate, păstrând cheia ultimei apariții.
- Pentru șiruri, returnează intrarea neschimbată.
