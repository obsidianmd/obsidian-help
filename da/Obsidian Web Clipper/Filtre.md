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

### `callout`

Opretter en [[Bobler|boble]] med valgfrie parametre: `{{variable|callout:("type", "title", foldState)}}`

- `type` er bobletypen og er som standard "info"
- `title` er boblens titel og er som standard tom
- `foldState` er en boolean til at indstille foldetilstanden (true for foldet, false for udfoldet, null for ikke-foldbar)

### `footnote`

Konverterer et array eller objekt til en liste af Markdown-fodnoter.

- For arrays: `["first item","second item"]|footnote` returnerer: `[^1]: first item` osv.
- For objekter: `{"First Note": "Content 1", "Second Note": "Content 2"}|footnote` returnerer: `[^first-note]: Content 1` osv.

### `fragment_link`

Konverterer strenge og arrays til [tekstfragment](https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments)-links. Bruger som standard "link" som linktekst.

- `highlights|fragment_link` returnerer `Highlight content [link](text-fragment-url)`
- `highlights|fragment_link:"custom title"` returnerer `Highlight content [custom title](text-fragment-url)`

### `image`

Konverterer strenge, arrays eller objekter til Markdown-billedsyntaks.

- For strenge: `"image.jpg"|image:"alt text"` returnerer `![alt text](image.jpg)`.
- For arrays: `["image1.jpg","image2.jpg"]|image:"alt text"` returnerer et array af Markdown-billedstrenge med samme alt-tekst for alle billeder.
- For objekter: `{"image1.jpg": "Alt 1", "image2.jpg": "Alt 2"}|image` returnerer Markdown-billedstrenge med alt-tekst fra objektets nøgler.

### `link`

Konverterer strenge, arrays eller objekter til Markdown-linksyntaks (må ikke forveksles med [[Filtre#`wikilink`|wikilink]]).

- For strenge: `"url"|link:"author"` returnerer `[author](url)`.
- For arrays: `["url1","url2"]|link:"author"` returnerer et array af Markdown-links med samme tekst for alle links.
- For objekter: `{"url1": "Author 1", "url2": "Author 2"}|link` returnerer Markdown-links med tekst, der matcher objektets nøgler.

### `list`

Konverterer et array til en Markdown-liste.

- `list` for at konvertere til en punktopstilling.
- `list:task` for at konvertere til en tjekliste.
- `list:numbered` for at konvertere til en nummereret liste.
- `list:numbered-task` for at konvertere til en tjekliste med numre.

### `table`

Konverterer et array eller array af objekter til en [[Avanceret formateringssyntaks#Tabeller|Markdown-tabel]]:

- For et array af objekter bruges objektets nøgler som overskrifter.
- For et array af arrays oprettes en tabel med hvert indlejret array som en række.
- For et simpelt array oprettes en tabel med én kolonne med "Value" som overskrift.
- Brugerdefinerede kolonneoverskrifter kan angives med: `table:("Column 1", "Column 2", "Column 3")`. Når det bruges med et simpelt array, opdeles dataene automatisk i rækker baseret på antallet af angivne kolonner.

### `wikilink`

Konverterer strenge, arrays eller objekter til Obsidian [[Link noter|wikilink]]-syntaks.

- For strenge: `"page"|wikilink` returnerer `[[page]]`.
- For strenge med alias: `"page"|wikilink:"alias"` returnerer `[[page|alias]]`.
- For arrays: `["page1","page2"]|wikilink` returnerer et array af wikilinks uden aliasser.
- For arrays med alias: `["page1","page2"]|wikilink:"alias"` returnerer et array af wikilinks med samme alias for alle links.
- For objekter: `{"page1": "alias1", "page2": "alias2"}|wikilink` returnerer wikilinks med nøglerne som sidenavne og værdierne som aliasser.

## Tal

### `calc`

Udfører grundlæggende aritmetiske operationer på tal.

- Understøtter operatorer: `+`, `-`, `*`, `/`, `**` (eller `^`) for eksponentiering.
- Eksempel: `5|calc:"+10"` returnerer `15`.
- Eksempel: `2|calc:"**3"` returnerer `8` (2 i tredje).
- Returnerer den originale streng, hvis inputtet ikke er et tal.

### `length`

Returnerer længden af strenge, arrays eller antallet af nøgler i objekter.

- For strenge: `"hello"|length` returnerer `5`.
- For arrays: `["a","b","c"]|length` returnerer `3`.
- For objekter: `{"a":1,"b":2}|length` returnerer `2`.

### `round`

Afrunder et tal til nærmeste heltal eller til et angivet antal decimaler.

- Uden parametre: `3.7|round` returnerer `4`.
- Med angivne decimaler: `3.14159|round:2` returnerer `3.14`.

## HTML-behandling

Behandl HTML-indhold og konvertér HTML til Markdown. Bemærk at din input-[[Variabler|variabel]] skal indeholde HTML-indhold, f.eks. ved brug af `{{fullHtml}}`, `{{contentHtml}}` eller en `{{selectorHtml:}}`-variabel.

### `markdown`

Konverterer en streng til en [[Obsidian Flavored Markdown]]-formateret streng.

- Nyttig kombineret med variabler, der returnerer HTML, såsom `{{contentHtml}}`, `{{fullHtml}}` og selectorvariabler som `{{selectorHtml:cssSelector}}`.

### `remove_attr`

Fjerner kun de angivne HTML-attributter fra tags.

- Eksempel: `"<div class="test" id="example">Content</div>"|remove_attr:"class"` returnerer `<div id="example">Content</div>`.
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
- Eksempel: `"<div class="test" id="example">Content</div>"|strip_attr:("class")` returnerer `<div id="example">Content</div>`.

### `strip_md`

Fjerner **al** Markdown-formatering og returnerer en streng i almindelig tekst, f.eks. omdanner `**text**` til `text`.

- Omdanner formateret tekst til uformateret almindelig tekst, inklusiv fed, kursiv, fremhævning, overskrifter, kode, blokcitater, tabeller, tjeklister og wikilinks.
- Fjerner fuldstændigt tabeller, fodnoter, billeder og HTML-elementer.

### `strip_tags`

Fjerner **alle** HTML-tags fra en streng. Indhold inden i tagget bevares.

- Brug `strip_tags:("p,strong,em")` for at beholde specifikke tags.
- Eksempel: `"<p>Hello <b>world</b>!</p>"|strip_tags:("b")` returnerer `Hello <b>world</b>!`.

## Arrays og objekter

Behandl arrays og objekter.

### `first`

Returnerer det første element i et array som en streng.

- `["a","b","c"]|first` returnerer `"a"`.
- Hvis inputtet ikke er et array, returneres inputtet uændret.

### `join`

Kombinerer elementer i et array til en streng.

- `["a","b","c"]|join` returnerer `"a,b,c"`.
- En brugerdefineret separator kan angives: `["a","b","c"]|join:" "` returnerer `"a b c"`. Brug `join:"\n"` for at adskille elementer med et linjeskift.
- Det kan være nyttigt efter `split` eller `slice`: `"a,b,c,d"|split:","|slice:1,3|join:" "` returnerer `"b c"`.

### `last`

Returnerer det sidste element i et array som en streng.

- `["a","b","c"]|last` returnerer `"c"`.
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

Gruppemønstersyntaks for gentagne strukturer:

- `array|nth:1,2,3:5` beholder position 1, 2, 3 fra hver gruppe af 5 elementer. Eksempel: `[1,2,3,4,5,6,7,8,9,10]|nth:1,2,3:5` returnerer `[1,2,3,6,7,8]`.

### `object`

Manipulerer objektdata:

- `object:array` konverterer et objekt til et array af nøgle-værdi-par.
- `object:keys` returnerer et array af objektets nøgler.
- `object:values` returnerer et array af objektets værdier.
- Eksempel: `{"a":1,"b":2}|object:array` returnerer `[["a",1],["b",2]]`.

### `slice`

Udtager en del af en streng eller et array.

- For strenge: `"hello"|slice:1,4` returnerer `"ell"`.
- For arrays: `["a","b","c","d"]|slice:1,3` returnerer `["b","c"]`.
- Hvis kun én parameter angives, udskæres fra det indeks til slutningen: `"hello"|slice:2` returnerer `"llo"`.
- Negative indeks tæller fra slutningen: `"hello"|slice:-3` returnerer `"llo"`.
- Den anden parameter er eksklusiv: `"hello"|slice:1,4` inkluderer tegn ved indeks 1, 2 og 3.
- Brug af en negativ anden parameter udelukker elementer fra slutningen: `"hello"|slice:0,-2` returnerer `"hel"`.

### `split`

Opdeler en streng i et array af delstrenge.

- `"a,b,c"|split:","` returnerer `["a","b","c"]`.
- `"hello world"|split:" "` returnerer `["hello","world"]`.
- Hvis ingen separator angives, opdeles på hvert tegn: `"hello"|split` returnerer `["h","e","l","l","o"]`.
- Regulære udtryk kan bruges som separatorer: `"a1b2c3"|split:[0-9]` returnerer `["a","b","c"]`.

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
