---
permalink: web-clipper/filters
---
Filtre giver dig mulighed for at ændre [[Variabler|variabler]] i [[Obsidian Web Clipper/Skabeloner|Web Clipper-skabeloner]]. Filtre anvendes på variabler med syntaksen `{{variable|filter}}`.

- Filtre virker med alle typer [[Variabler|variabler]] inklusiv `prompt`, `meta`, `selector` og `schema` variabler.
- Filtre kan kædes sammen, f.eks. `{{variable|filter1|filter2}}`, og anvendes i den rækkefølge, de tilføjes.

## Datoer

Konvertér og modificér datoer.

### `date`

Konverterer en dato til det angivne format, [se reference](https://day.js.org/docs/en/display/format).

- `{{date|date:"YYYY-MM-DD"}}` konverterer den aktuelle dato til "YYYY-MM-DD".
- Brug `date:("outputFormat", "inputFormat")` til at angive inputformatet, f.eks. `"12/01/2024"|date:("YYYY-MM-DD", "MM/DD/YYYY")` fortolker "12/01/2024" og returnerer `"2024-12-01"`.

### `date_modify`

Modificerer en dato ved at tilføje eller trække en angivet mængde tid fra, [se reference](https://day.js.org/docs/en/manipulate/add).

- `"2024-12-01"|date_modify:"+1 year"` returnerer `"2025-12-01"`
- `"2024-12-01"|date_modify:"- 2 months"` returnerer `"2024-10-01"`

### `duration`

Konverterer ISO 8601-varighedsstrenge eller sekunder til formaterede tidsstrenge. Bruger tokens: `HH` (polstrede timer), `H` (timer), `mm` (polstrede minutter), `m` (minutter), `ss` (polstrede sekunder), `s` (sekunder).

- `"PT1H30M"|duration:"HH:mm:ss"` returnerer `"01:30:00"`.
- `"3665"|duration:"H:mm:ss"` returnerer `"1:01:05"`.
- Hvis `duration` angives uden parametre, bruges `HH:mm:ss` over 1 time, `mm:ss` under 1 time.
- Understøtter både ISO 8601-varighedsstrenge (f.eks. `PT6702S`, `PT1H30M`) og rene sekunder.

## Tekstkonvertering og brug af store bogstaver

Konvertér tekststrenge fra ét format til et andet.

### `camel`

Konverterer tekst til `camelCase`.

### `capitalize`

Gør det første tegn i værdien til stort og konverterer resten til små bogstaver, f.eks. `"hELLO wORLD"|capitalize` returnerer `"Hello world"`.

### `decode_uri`

Afkoder en URI-kodet streng, f.eks. `"%E4%BD%A0%E5%A5%BD"|decode_uri` returnerer `"你好"`.

- `"hello%20world"|decode_uri` returnerer `"hello world"`.
- Returnerer den originale streng, hvis afkodning fejler (f.eks. forkert formede URI-sekvenser).

### `encode_uri`

Koder tekst til brug i en URL, inklusiv reserverede tegn som `/`, `?` og `&`.

- `"hello world/page"|encode_uri` returnerer `hello%20world%2Fpage`.

### `indent`

Indrykker hver ikke-tom linje med mellemrum. Standard er to mellemrum.

- `indent:4` indrykker hver linje med fire mellemrum.
- `indent:0` lader teksten være uændret.

### `kebab`

Konverterer tekst til `kebab-case`.

### `lower`

Konverterer tekst til `lowercase` (små bogstaver).

### `pascal`

Konverterer tekst til `PascalCase`.

### `replace`

Erstatter forekomster af angivet tekst:

- Simpel erstatning: `"hello!"|replace:",":""` fjerner alle kommaer.
- Flere erstatninger: `"hello world"|replace:("e":"a","o":"0")` returnerer `"hall0 w0rld"`.
- Erstatninger anvendes i den rækkefølge, de er angivet.
- For at fjerne angivet tekst, brug `""` som erstatningsværdi.
- Specialtegn inklusiv `: | { } ( ) ' "` skal escapes med en omvendt skråstreg, når de bruges i søgetermen, f.eks. `\:` for at søge efter et bogstaveligt kolon.

Regulære udtryk understøttes med JavaScript regex-syntaks:

- Erstat alle vokaler: `"hello world"|replace:"/[aeiou]/g":"*"` → `"h*ll* w*rld".`
- Ikke-versalfølsom: `"HELLO world"|replace:"/hello/i":"hi"` → `"hi world".`
- Flere regulære udtryk: `"hello world"|replace:("/[aeiou]/g":"*","/\s+/":"-")` → `"h*ll*-w*rld"`.
- Tilgængelige flag: `g` (global), `i` (ikke-versalfølsom), `m` (multiline), `s` (dotAll), `u` (unicode), `y` (sticky).

### `safe_name`

Konverterer tekst til et sikkert filnavn.

- Som standard anvender `safe_name` de mest konservative rensningsregler.
- OS-specifikke regler kan anvendes med `safe_name:os` hvor `os` kan være `windows`, `mac` eller `linux` for kun at anvende reglerne for det pågældende operativsystem.

### `snake`

Konverterer tekst til `snake_case`.

### `title`

Konverterer tekst til `Title Case`, f.eks. `"hello world"|title` returnerer `"Hello World"`.

### `trim`

Fjerner hvidt mellemrum fra begge ender af en streng.

- `"  hello world  "|trim` returnerer `"hello world"`.

### `truncate`

Forkorter tekst til et antal tegn og afslutter med `…`. Suffikset tæller med i grænsen.

- `"A concise introduction"|truncate:10` returnerer `A concise…`.
- `"A concise introduction"|truncate:(12, "...")` returnerer `A concise...`.
- `"A concise introduction"|truncate:(9, "")` returnerer `A concise`.

### `truncatewords`

Forkorter tekst til et antal ord og tilføjer `…`.

- `"A concise introduction to Knap"|truncatewords:3` returnerer `A concise introduction…`.
- `"A concise introduction to Knap"|truncatewords:(3, "")` returnerer `A concise introduction`.

### `unescape`

Konverterer escapede anførselstegn og linjeskiftsekvenser til bogstavelige tegn.

- `"Line 1\\nLine 2"|unescape` returnerer teksten på to linjer.
- `'He said \\"hello\\"'|unescape` returnerer `He said "hello"`.

### `uncamel`

Konverterer camelCase eller PascalCase til mellemrumsseparerede ord, som du yderligere kan formatere med andre filtre som `title` eller `capitalize`.

- `"camelCase"|uncamel` returnerer `"camel case"`.
- `"PascalCase"|uncamel` returnerer `"pascal case"`.

### `upper`

Konverterer en værdi til store bogstaver, f.eks. `"hello world"|upper` returnerer `"HELLO WORLD"`.

## Tekstformatering

Anvend [[Grundlæggende formateringssyntaks]] og [[Avanceret formateringssyntaks]] på tekst.

### `blockquote`

Tilføjer et Markdown-citatpræfiks (`> `) til hver linje i inputtet.

### `bold`

Omslutter tekst med fed-markører.

- `"Important"|bold` returnerer `**Important**`.
- `"Important"|bold:_` returnerer `__Important__`.

### `callout`

Opretter en [[Bobler|boble]] med valgfrie parametre: `{{variable|callout:("type", "title", foldState)}}`

- `type` er bobletypen og er som standard "info"
- `title` er boblens titel og er som standard tom
- `foldState` er en boolean til at indstille foldetilstanden (true for foldet, false for udfoldet, null for ikke-foldbar)

### `code`

Formaterer tekst som inline-kode. Tekst på flere linjer, eller en sprogparameter, opretter i stedet en indhegnet kodeblok.

- `"const answer = 42"|code` returnerer `` `const answer = 42` ``.
- `"const answer = 42"|code:"typescript"` returnerer en kodeblok markeret som `typescript`.

### `code_block`

Opretter altid en indhegnet kodeblok, med et valgfrit sprog, f.eks. `code_block:"typescript"`.

### `comment`

Omslutter tekst med [[Grundlæggende formateringssyntaks#Kommentarer|kommentar]]-markører.

- `"Hidden note"|comment` returnerer `%%Hidden note%%`.

### `embed`

Konverterer strenge, arrays eller objekter til [[Indlejr filer|indlejringer]].

- For strenge: `"diagram.png"|embed` returnerer `![[diagram.png]]`.
- For strenge med alias: `"Project Atlas"|embed:"Preview"` returnerer `![[Project Atlas|Preview]]`.
- For objekter: `{"one.md": "One", "two.md": "Two"}|embed` returnerer indlejringer med nøglerne som filer og værdierne som aliasser.

### `escape_md`

Tilføjer en omvendt skråstreg før Markdown-tegnsætning, så det vises som almindelig tekst.

- `"# Draft *title*"|escape_md` returnerer `\# Draft \*title\*`.

### `footnote`

Konverterer et array eller objekt til en liste af Markdown-fodnoter.

- For arrays: `["first item","second item"]|footnote` returnerer: `[^1]: first item` osv.
- For objekter: `{"First Note": "Content 1", "Second Note": "Content 2"}|footnote` returnerer: `[^first-note]: Content 1` osv.

### `fragment_link`

Konverterer strenge og arrays til [tekstfragment](https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments)-links. Bruger som standard "link" som linktekst.

- `highlights|fragment_link` returnerer `Highlight content [link](text-fragment-url)`
- `highlights|fragment_link:"custom title"` returnerer `Highlight content [custom title](text-fragment-url)`

### `h1` til `h6`

Omdanner hver ikke-tom linje til en overskrift på det pågældende niveau.

- `"Introduction"|h2` returnerer `## Introduction`.

### `hard_break`

Tilføjer to mellemrum før hvert enkelt linjeskift, så linjeskiftene vises i læsevisning. Tomme linjer mellem afsnit forbliver som de er.

### `highlight`

Omslutter tekst med fremhævningsmarkører.

- `"Remember this"|highlight` returnerer `==Remember this==`.
- Tilføj en [[Grundlæggende formateringssyntaks#Fremhævningsfarver|fremhævningsfarve]] med `red`, `orange`, `yellow`, `green`, `blue` eller `purple`, f.eks. `"Remember this"|highlight:blue` returnerer `==🔵Remember this==`.

### `hr`

Tilføjer en vandret streg (`---`) efter teksten, adskilt af en tom linje.

- `"Section end"|hr` tilføjer stregen efter teksten.
- `hr:before` tilføjer den før teksten, og `hr:both` tilføjer den på begge sider.

### `image`

Konverterer strenge, arrays eller objekter til Markdown-billedsyntaks.

- For strenge: `"image.jpg"|image:"alt text"` returnerer `![alt text](image.jpg)`.
- For arrays: `["image1.jpg","image2.jpg"]|image:"alt text"` returnerer et array af Markdown-billedstrenge med samme alt-tekst for alle billeder.
- For objekter: `{"image1.jpg": "Alt 1", "image2.jpg": "Alt 2"}|image` returnerer Markdown-billedstrenge med alt-tekst fra objektets nøgler.

### `italic`

Omslutter tekst med kursiv-markører.

- `"Emphasized"|italic` returnerer `*Emphasized*`.
- `"Emphasized"|italic:_` returnerer `_Emphasized_`.

### `link`

Konverterer strenge, arrays eller objekter til Markdown-linksyntaks (må ikke forveksles med [[Filtre#`wikilink`|wikilink]]).

- For strenge: `"url"|link:"author"` returnerer `[author](url)`.
- For arrays: `["url1","url2"]|link:"author"` returnerer et array af Markdown-links med samme tekst for alle links.
- For objekter: `{"url1": "Author 1", "url2": "Author 2"}|link` returnerer Markdown-links med tekst der matcher objektets nøgler.

### `list`

Konverterer et array til en Markdown-liste.

- `list` for at konvertere til en punktopstilling.
- `list:task` for at konvertere til en tjekliste.
- `list:numbered` for at konvertere til en nummereret liste.
- `list:numbered-task` for at konvertere til en tjekliste med numre.

### `math`

Formaterer tekst som inline [[Avanceret formateringssyntaks#Matematik|matematik]]. Tekst på flere linjer bliver en matematikblok.

- `"x^2 + y^2"|math` returnerer `$x^2 + y^2$`.

### `math_block`

Opretter altid en matematikblok med `$$` på linjerne før og efter teksten.

### `strike`

Omslutter tekst med gennemstregningsmarkører.

- `"Removed"|strike` returnerer `~~Removed~~`.

### `table`

Konverterer et array eller array af objekter til en [[Avanceret formateringssyntaks#Tabeller|Markdown-tabel]]:

- For et array af objekter bruges objektets nøgler som overskrifter.
- For et array af arrays oprettes en tabel med hvert indlejret array som en række.
- For et simpelt array oprettes en tabel med én kolonne med "Value" som overskrift.
- Brugerdefinerede kolonneoverskrifter kan angives med: `table:("Column 1", "Column 2", "Column 3")`. Når det bruges med et simpelt array, opdeles dataene automatisk i rækker baseret på antallet af angivne kolonner.

### `table_pretty`

Fungerer som [[Filtre#`table`|table]] og polstrer kolonnerne til ens bredde, så tabellen er justeret i kildetilstand.

### `wikilink`

Konverterer strenge, arrays eller objekter til Obsidian [[Link noter|wikilink]]-syntaks.

- For strenge: `"page"|wikilink` returnerer `[[page]]`.
- For strenge med alias: `"page"|wikilink:"alias"` returnerer `[[page|alias]]`.
- For arrays: `["page1","page2"]|wikilink` returnerer et array af wikilinks uden aliasser.
- For arrays med alias: `["page1","page2"]|wikilink:"alias"` returnerer et array af wikilinks med samme alias for alle links.
- For objekter: `{"page1": "alias1", "page2": "alias2"}|wikilink` returnerer wikilinks med nøglerne som sidenavne og værdierne som aliasser.

## Tal

`calc`, `round` og `length` returnerer tal og bevarer deres type i efterfølgende filtre og variabeltildelinger. `number_format` returnerer tekst.

### `calc`

Udfører grundlæggende aritmetiske operationer på tal.

- Understøtter operatorer: `+`, `-`, `*`, `/`, `**` (eller `^`) for eksponentiering.
- Eksempel: `5|calc:"+10"` returnerer `15`.
- Eksempel: `2|calc:"**3"` returnerer `8` (2 i tredje).
- Returnerer det originale input, hvis det er tomt, ikke er et tal, eller beregningen giver et ikke-endeligt resultat.

### `length`

Returnerer længden af strenge, arrays eller antallet af nøgler i objekter.

- For strenge: `"hello"|length` returnerer `5`.
- For arrays: `["a","b","c"]|length` returnerer `3`.
- Et array med ét element tæller stadig som ét: `[42]|length` returnerer `1`.
- For objekter: `{"a":1,"b":2}|length` returnerer `2`.

### `number_format`

Formaterer et tal med et angivet antal decimaler og valgfrie decimal- og tusindtals-separatorer.

- `1234.567|number_format:2` returnerer `"1,234.57"`.
- `1234.567|number_format:(2,",",".")` returnerer `"1.234,57"`.
- Arrays og objekter formateres rekursivt.

### `round`

Afrunder et tal til nærmeste heltal eller til et angivet antal decimaler.

- Uden parametre: `3.7|round` returnerer `4`.
- Med angivne decimaler: `3.14159|round:2` returnerer `3.14`.
- Arrays og objekter bevarer deres struktur, med numeriske værdier afrundet rekursivt. Numeriske strenge bliver til tal, f.eks. `["1.234","2.345"]|round:2` returnerer `[1.23,2.35]`.
- Ugyldigt input som `"42abc"` bevares i stedet for at blive konverteret til et tal.

## HTML-behandling

Behandl HTML-indhold og konvertér HTML til Markdown. Bemærk at din input-[[Variabler|variabel]] skal indeholde HTML-indhold, f.eks. ved brug af `{{fullHtml}}`, `{{contentHtml}}` eller en `{{selectorHtml:}}`-variabel.

### `html_to_json`

Konverterer HTML til struktureret JSON, der indeholder hvert elements tag, attributter og børn. Tekstnoder bruger formatet `{"type":"text","content":"..."}`. Dette kan kombineres med filtre som `map`, `object` og `template` til at omforme udtaget HTML.

### `markdown`

Konverterer en streng til en [[Obsidian Flavored Markdown]]-formateret streng.

- Nyttig kombineret med variabler, der returnerer HTML, såsom `{{contentHtml}}`, `{{fullHtml}}` og selectorvariabler som `{{selectorHtml:cssSelector}}`.

### `remove_attr`

Fjerner kun de angivne HTML-attributter fra tags.

- Eksempel: `'<div class="test" id="example">Content</div>'|remove_attr:"class"` returnerer `<div id="example">Content</div>`.
- Flere attributter: `{{fullHtml|remove_attr:("class,style,id")}}`

### `remove_html`

Fjerner de angivne HTML-elementer og deres indhold fra en streng.

- Understøtter tagnavn, klasse eller id, f.eks. `{{fullHtml|remove_html:("img,.class-name,#element-id")}}`
- For kun at fjerne HTML-tags eller attributter uden at fjerne indholdet, brug filtrene `strip_tags` eller `strip_attr`.

### `remove_tags`

Fjerner kun de angivne HTML-tags. Beholder indholdet af tags.

- Eksempel: `"<p>Hello <b>world</b>!</p>"|remove_tags:"b"` returnerer `"<p>Hello world!</p>"`.
- Flere tags: `{{fullHtml|remove_tags:("a,em,strong")}}`

### `replace_tags`

Erstatter HTML-tags og bevarer indholdet og attributterne af tagget.

- `{{fullHtml|replace_tags:"strong":"h2"}}` erstatter alle `<strong>`-tags med `<h2>`.

### `strip_attr`

Fjerner **alle** HTML-attributter fra en streng.

- Brug `strip_attr:("class, id")` for at beholde specifikke attributter.
- Eksempel: `'<div class="test" id="example">Content</div>'|strip_attr:("class")` returnerer `<div class="test">Content</div>`.

### `strip_md`

Fjerner **al** Markdown-formatering og returnerer en streng i almindelig tekst, f.eks. omdanner `**text**` til `text`.

- Omdanner formateret tekst til uformateret almindelig tekst, inklusiv fed, kursiv, fremhævning, overskrifter, kode, blokcitater, tabeller, tjeklister og wikilinks.
- Fjerner fuldstændigt tabeller, fodnoter, billeder og HTML-elementer.
- `stripmd` er et alias.

### `strip_tags`

Fjerner **alle** HTML-tags fra en streng. Indhold inden i tagget bevares.

- Brug `strip_tags:("p,strong,em")` for at beholde specifikke tags.
- Eksempel: `"<p>Hello <b>world</b>!</p>"|strip_tags:("b")` returnerer `Hello <b>world</b>!`.

## Arrays og objekter

Behandl arrays og objekter.

### `compact`

Fjerner `null`-værdier og tomme strenge fra arrays og objekter. Beholder `0` og `false`.

- `[null,"","one",0,false,"two"]|compact` returnerer `["one",0,false,"two"]`.

### `first`

Returnerer det første element i et array og bevarer dets type. Objekter og indlejrede arrays vises som JSON.

- `["a","b","c"]|first` returnerer `"a"`.
- Et tomt array returnerer `null`, som vises som tom tekst.
- Hvis inputtet ikke er et array, returneres inputtet uændret.

### `join`

Kombinerer elementer i et array til en streng.

- `["a","b","c"]|join` returnerer `"a,b,c"`.
- En brugerdefineret separator kan angives: `["a","b","c"]|join:" "` returnerer `"a b c"`. Brug `join:"\n"` for at adskille elementer med et linjeskift.
- Det kan være nyttigt efter `split` eller `slice`: `"a,b,c,d"|split:","|slice:1,3|join:" "` returnerer `"b c"`.

### `last`

Returnerer det sidste element i et array og bevarer dets type. Objekter og indlejrede arrays vises som JSON.

- `["a","b","c"]|last` returnerer `"c"`.
- Et tomt array returnerer `null`, som vises som tom tekst.
- Hvis inputtet ikke er et array, returneres inputtet uændret.

### `map`

Anvender en transformation på hvert element i et array med syntaksen `map:item => item.property` eller `map:item => item.nested.property` for indlejrede egenskaber.

- `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => item.gem` returnerer `["obsidian", "amethyst"]`.
- Brug parenteser for objektliteraler og komplekse udtryk: `map:item => ({key: value})`, f.eks.: `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => ({name: item.gem, color: item.color})` returnerer `[{name: "obsidian", color: "black"}, {name: "amethyst", color: "purple"}]`.

Strengliteraler understøttes også, f.eks. `["rock", "pop"]|map:item => "genres/${item}"` returnerer `["genres/rock", "genres/pop"]`.

Kombinér `map` med `template`-filteret, f.eks. `map:item => ({name: ${item.gem}, color: item.color})|template:"- ${name} is ${color}\n"`. For strengliteral-maps, brug `${str}` i skabelonen, f.eks. `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"`.

Bemærk: Indbyggede filtre kan ikke bruges inde i `map`. Det betyder, at f.eks. trimning af hver værdi i et array ikke kan gøres med `map`.

### `merge`

Tilføjer nye værdier til et array.

- For arrays: `["a","b"]|merge:("c","d")` returnerer `["a","b","c","d"]`.
- Enkelt værdi: `["a","b"]|merge:"c"` returnerer `["a","b","c"]`.
- Hvis inputtet ikke er et array, oprettes et nyt array: `"a"|merge:("b","c")` returnerer `["a","b","c"]`.
- Værdier kan citeres: `["a"]|merge:('b,"c,d",e')` returnerer `["a","b","c,d","e"]`.

### `nth`

Beholder hvert n'te element i et array ved brug af CSS-lignende nth-child-syntaks og gruppemønstre. Alle positioner er 1-baserede (første element er position 1).

- `array|nth:3` beholder kun det 3. element.
- `array|nth:3n` beholder hvert 3. element (3, 6, 9 osv.).
- `array|nth:n+3` beholder det 3. og alle efterfølgende elementer.

Resultatet forbliver et array til senere samlingsfiltre. Hvis det indeholder en enkelt primitiv værdi, vises den værdi uden array-parenteser og sendes direkte til tekstfiltre, f.eks. `[1,2]|nth:2` viser `2`.

Gruppemønstersyntaks for gentagne strukturer:

- `array|nth:1,2,3:5` beholder position 1, 2, 3 fra hver gruppe af 5 elementer. Eksempel: `[1,2,3,4,5,6,7,8,9,10]|nth:1,2,3:5` returnerer `[1,2,3,6,7,8]`.

### `object`

Manipulerer objektdata:

- `object:array` konverterer et objekt til et array af nøgle-værdi-par.
- `object:keys` returnerer et array af objektets nøgler.
- `object:values` returnerer et array af objektets værdier.
- Eksempel: `{"a":1,"b":2}|object:array` returnerer `[["a",1],["b",2]]`.

### `parse_json`

Fortolker JSON-tekst til en typet værdi. Brug dette før samlingsfiltre eller YAML-serialisering, når en variabel indeholder JSON-tekst, f.eks. `'[1,2]'|parse_json|yaml:flow` returnerer `[1,2]`.

### `reverse`

Vender strenge, arrays og rækkefølgen af poster i objekter om.

- `"abc"|reverse` returnerer `"cba"`.
- `["a","b","c"]|reverse` returnerer `["c","b","a"]`.

### `slice`

Udtager en del af en streng eller et array.

- For strenge: `"hello"|slice:1,4` returnerer `"ell"`.
- For arrays: `["a","b","c","d"]|slice:1,3` returnerer `["b","c"]`.
- Hvis kun én parameter angives, udskæres fra det indeks til slutningen: `"hello"|slice:2` returnerer `"llo"`.
- Negative indeks tæller fra slutningen: `"hello"|slice:-3` returnerer `"llo"`.
- Den anden parameter er eksklusiv: `"hello"|slice:1,4` inkluderer tegn ved indeks 1, 2 og 3.
- Brug af en negativ anden parameter udelukker elementer fra slutningen: `"hello"|slice:0,-2` returnerer `"hel"`.

### `sort`

Sorterer et array i stigende rækkefølge. Tal sorteres efter værdi.

- `[10,2,1]|sort` returnerer `[1,2,10]`.
- `["a","c","b"]|sort:"desc"` returnerer `["c","b","a"]`.
- For arrays af objekter, angiv en egenskab: `[{"name":"Lin"},{"name":"Ada"}]|sort:"name"` returnerer `[{"name":"Ada"},{"name":"Lin"}]`. Brug `sort:("name", "desc")` for at vende rækkefølgen. Elementer uden egenskaben placeres sidst.

### `split`

Opdeler en streng i et array af delstrenge.

- `"a,b,c"|split:","` returnerer `["a","b","c"]`.
- `"hello world"|split:" "` returnerer `["hello","world"]`.
- Hvis ingen separator angives, opdeles på hvert tegn: `"hello"|split` returnerer `["h","e","l","l","o"]`.
- Regulære udtryk kan bruges som separatorer: `"a1b2c3"|split:[0-9]` returnerer `["a","b","c",""]`. Det sidste element er tomt, fordi strengen slutter med en separator.

### `sum`

Lægger tallene i et array sammen. Tekst, der ikke er et tal, springes over, og et tomt array returnerer `0`.

- `[10,"2.5","","none"]|sum` returnerer `12.5`.
- For arrays af objekter, angiv en egenskab: `[{"amount":10},{"amount":"2.5"}]|sum:"amount"` returnerer `12.5`.

### `template`

Anvender en skabelonstreng på et objekt eller array af objekter med syntaksen `object|template:"Template with ${variable}"`.

- Tilgå indlejrede egenskaber: `{"gem":{"name":"Obsidian"}}|template:"${gem.name}"` returnerer `"Obsidian"`.
- For objekter: `{"gem":"obsidian","hardness":5}|template:"${gem} has a hardness of ${hardness}"` returnerer `"obsidian has a hardness of 5"`.
- For arrays: `[{"gem":"obsidian","hardness":5},{"gem":"amethyst","hardness":7}]|template:"- ${gem} has a hardness of ${hardness}\n"` returnerer en formateret liste.

Fungerer med strengliteraler fra `map` ved brug af `${str}`:

- Eksempel: `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"` returnerer en formateret liste.

### `unique`

Fjerner duplikerede værdier fra arrays og objekter.

- For arrays af primitiver: `[1,2,2,3,3]|unique` returnerer `[1,2,3]`.
- For arrays af objekter: `[{"a":1},{"b":2},{"a":1}]|unique` returnerer `[{"a":1},{"b":2}]`.
- For objekter fjernes egenskaber med duplikerede værdier, idet den sidste forekomsts nøgle beholdes.
- For strenge returneres inputtet uændret.

### `where`

Beholder de array-elementer, hvis egenskab matcher en værdi. Typen skal også matche, så tallet `1` matcher ikke teksten `"1"`.

- `[{"title":"One","published":true},{"title":"Two","published":false}]|where:("published", true)` returnerer `[{"title":"One","published":true}]`.
- Brug en punktsepareret sti for indlejrede egenskaber, f.eks. `where:("author.name", "Ada")`.

## YAML

### `yaml`

Formaterer en værdi som YAML. Strenge citeres altid, inklusiv strenge som `"null"`, `"true"` og `"123"`. Faktiske null-værdier, booleans og tal forbliver uciterede.

- Arrays og objekter bruger blokstil som standard. Brug `yaml:flow` for kompakte inline-samlinger.
- Brug `parse_json` først for at serialisere JSON-tekst som strukturerede data i stedet for en citeret streng.

### `yaml_property`

Formaterer en navngivet YAML-egenskab, inklusiv indrykning for arrays og objekter. Strenge og typede værdier følger de samme regler som `yaml`.

- `"42.567"|round:2|yaml_property:"price"` returnerer `price: 42.57`.
