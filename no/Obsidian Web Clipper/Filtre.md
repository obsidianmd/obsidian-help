---
permalink: web-clipper/filters
---
Filtre lar deg modifisere [[Variabler|variabler]] i [[Obsidian Web Clipper/Maler|Web Clipper-maler]]. Filtre brukes på variabler med syntaksen `{{variable|filter}}`.

- Filtre fungerer for alle typer [[Variabler|variabler]] inkludert `prompt`-, `meta`-, `selector`- og `schema`-variabler.
- Filtre kan kjedes, f.eks. `{{variable|filter1|filter2}}`, og brukes i den rekkefølgen de legges til.

## Datoer

Konverter og endre datoer.

### `date`

Konverterer en dato til det spesifiserte formatet, [se referanse](https://day.js.org/docs/en/display/format).

- `{{date|date:"YYYY-MM-DD"}}` konverterer gjeldende dato til "YYYY-MM-DD".
- Bruk `date:("outputFormat", "inputFormat")` for å spesifisere inndataformatet, f.eks. `"12/01/2024"|date:("YYYY-MM-DD", "MM/DD/YYYY")` tolker "12/01/2024" og returnerer `"2024-12-01"`.

### `date_modify`

Endrer en dato ved å legge til eller trekke fra en angitt mengde tid, [se referanse](https://day.js.org/docs/en/manipulate/add).

- `"2024-12-01"|date_modify:"+1 year"` returnerer `"2025-12-01"`
- `"2024-12-01"|date_modify:"- 2 months"` returnerer `"2024-10-01"`

### `duration`

Konverterer ISO 8601-varighetsstrenger eller sekunder til formaterte tidsstrenger. Bruker tokens: `HH` (polstrede timer), `H` (timer), `mm` (polstrede minutter), `m` (minutter), `ss` (polstrede sekunder), `s` (sekunder).

- `"PT1H30M"|duration:"HH:mm:ss"` returnerer `"01:30:00"`.
- `"3665"|duration:"H:mm:ss"` returnerer `"1:01:05"`.
- Å sette `duration` uten parametere bruker `HH:mm:ss` over 1 time, `mm:ss` under 1 time.
- Støtter både ISO 8601-varighetsstrenger (f.eks. `PT6702S`, `PT1H30M`) og rene sekunder.

## Tekstkonvertering og store/små bokstaver

Konverter tekststrenger fra ett format til et annet.

### `camel`

Konverterer tekst til `camelCase`.

### `capitalize`

Gjør den første bokstaven stor og konverterer resten til små bokstaver, f.eks. `"hELLO wORLD"|capitalize` returnerer `"Hello world"`.

### `decode_uri`

Dekoder en URI-kodet streng, f.eks. `"%E4%BD%A0%E5%A5%BD"|decode_uri` returnerer `"你好"`.

- `"hello%20world"|decode_uri` returnerer `"hello world"`.
- Returnerer den opprinnelige strengen hvis dekoding mislykkes (f.eks. feilformede URI-sekvenser).

### `encode_uri`

Koder tekst for bruk i en URL, inkludert reserverte tegn som `/`, `?` og `&`.

- `"hello world/page"|encode_uri` returnerer `hello%20world%2Fpage`.

### `indent`

Rykker inn hver ikke-tom linje med mellomrom. Standard er to mellomrom.

- `indent:4` rykker inn hver linje med fire mellomrom.
- `indent:0` lar teksten være uendret.

### `kebab`

Konverterer tekst til `kebab-case`.

### `lower`

Konverterer tekst til `lowercase` (små bokstaver).

### `pascal`

Konverterer tekst til `PascalCase`.

### `replace`

Erstatter forekomster av angitt tekst:

- Enkel erstatning: `"hello!"|replace:",":""` fjerner alle kommaer.
- Flere erstatninger: `"hello world"|replace:("e":"a","o":"0")` returnerer `"hall0 w0rld"`.
- Erstatninger brukes i den rekkefølgen de er angitt.
- For å fjerne angitt tekst, bruk `""` som erstatningsverdi.
- Spesialtegn inkludert `: | { } ( ) ' "` bør escapes med omvendt skråstrek når de brukes i søketermen, f.eks. `\:` for å søke etter et bokstavelig kolon.

Regulære uttrykk støttes med JavaScript regex-syntaks:

- Erstatt alle vokaler: `"hello world"|replace:"/[aeiou]/g":"*"` → `"h*ll* w*rld".`
- Ikke skille mellom store og små bokstaver: `"HELLO world"|replace:"/hello/i":"hi"` → `"hi world".`
- Flere regulære uttrykk: `"hello world"|replace:("/[aeiou]/g":"*","/\s+/":"-")` → `"h*ll*-w*rld"`.
- Tilgjengelige flagg: `g` (global), `i` (ikke skille store/små bokstaver), `m` (flerlinje), `s` (dotAll), `u` (unicode), `y` (sticky).

### `safe_name`

Konverterer tekst til et trygt filnavn.

- Som standard bruker `safe_name` de mest konservative saneringsreglene.
- OS-spesifikke regler kan brukes med `safe_name:os` der `os` kan være `windows`, `mac` eller `linux` for å kun bruke reglene for det operativsystemet.

### `snake`

Konverterer tekst til `snake_case`.

### `title`

Konverterer tekst til `Title Case`, f.eks. `"hello world"|title` returnerer `"Hello World"`.

### `trim`

Fjerner mellomrom fra begge ender av en streng.

- `"  hello world  "|trim` returnerer `"hello world"`.

### `truncate`

Forkorter tekst til et antall tegn og avslutter med `…`. Suffikset teller med i grensen.

- `"A concise introduction"|truncate:10` returnerer `A concise…`.
- `"A concise introduction"|truncate:(12, "...")` returnerer `A concise...`.
- `"A concise introduction"|truncate:(9, "")` returnerer `A concise`.

### `truncatewords`

Forkorter tekst til et antall ord og legger til `…`.

- `"A concise introduction to Knap"|truncatewords:3` returnerer `A concise introduction…`.
- `"A concise introduction to Knap"|truncatewords:(3, "")` returnerer `A concise introduction`.

### `unescape`

Konverterer escapede anførselstegn og linjeskiftsekvenser til bokstavelige tegn.

- `"Line 1\\nLine 2"|unescape` returnerer teksten på to linjer.
- `'He said \\"hello\\"'|unescape` returnerer `He said "hello"`.

### `uncamel`

Konverterer camelCase eller PascalCase til mellomromseparerte ord, som du kan formatere videre med andre filtre som `title` eller `capitalize`.

- `"camelCase"|uncamel` returnerer `"camel case"`.
- `"PascalCase"|uncamel` returnerer `"pascal case"`.

### `upper`

Konverterer en verdi til store bokstaver, f.eks. `"hello world"|upper` returnerer `"HELLO WORLD"`.

## Tekstformatering

Bruk [[Grunnleggende formateringssyntaks]] og [[Avansert formateringssyntaks]] på tekst.

### `blockquote`

Legger til et Markdown-sitatprefiks (`> `) på hver linje i inndata.

### `bold`

Pakker inn tekst i fet-markører.

- `"Important"|bold` returnerer `**Important**`.
- `"Important"|bold:_` returnerer `__Important__`.

### `callout`

Oppretter en [[Uthevede blokker|uthevet blokk]] med valgfrie parametere: `{{variable|callout:("type", "title", foldState)}}`

- `type` er typen uthevet blokk, og standardverdien er "info"
- `title` er tittelen på den uthevede blokken, og standardverdien er tom
- `foldState` er en boolsk verdi for å sette sammenfoldetilstanden (true for sammenfoldet, false for utfoldet, null for ikke foldbar)

### `code`

Formaterer tekst som inline-kode. Flerlinjet tekst, eller en språkparameter, oppretter en avgrenset kodeblokk i stedet.

- `"const answer = 42"|code` returnerer `` `const answer = 42` ``.
- `"const answer = 42"|code:"typescript"` returnerer en kodeblokk merket som `typescript`.

### `code_block`

Oppretter alltid en avgrenset kodeblokk, med et valgfritt språk, f.eks. `code_block:"typescript"`.

### `comment`

Pakker inn tekst i [[Grunnleggende formateringssyntaks#Kommentarer|kommentar]]-markører.

- `"Hidden note"|comment` returnerer `%%Hidden note%%`.

### `embed`

Konverterer strenger, matriser eller objekter til [[Bygg inn filer|innebygginger]].

- For strenger: `"diagram.png"|embed` returnerer `![[diagram.png]]`.
- For strenger med alias: `"Project Atlas"|embed:"Preview"` returnerer `![[Project Atlas|Preview]]`.
- For objekter: `{"one.md": "One", "two.md": "Two"}|embed` returnerer innebygginger med nøklene som filer og verdiene som aliaser.

### `escape_md`

Legger til en omvendt skråstrek foran Markdown-tegnsetting slik at den vises som ren tekst.

- `"# Draft *title*"|escape_md` returnerer `\# Draft \*title\*`.

### `footnote`

Konverterer en matrise eller et objekt til en liste med Markdown-fotnoter.

- For matriser: `["first item","second item"]|footnote` returnerer: `[^1]: first item` osv.
- For objekter: `{"First Note": "Content 1", "Second Note": "Content 2"}|footnote` returnerer: `[^first-note]: Content 1` osv.

### `fragment_link`

Konverterer strenger og matriser til [tekstfragment](https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments)-lenker. Standardverdien er "link" for lenketeksten.

- `highlights|fragment_link` returnerer `Highlight content [link](text-fragment-url)`
- `highlights|fragment_link:"custom title"` returnerer `Highlight content [custom title](text-fragment-url)`

### `h1` til `h6`

Gjør hver ikke-tom linje til en overskrift på det nivået.

- `"Introduction"|h2` returnerer `## Introduction`.

### `hard_break`

Legger til to mellomrom før hvert enkelt linjeskift, slik at linjeskiftene vises i lesevisning. Tomme linjer mellom avsnitt forblir som de er.

### `highlight`

Pakker inn tekst i uthevingsmarkører.

- `"Remember this"|highlight` returnerer `==Remember this==`.
- Legg til en [[Grunnleggende formateringssyntaks#Uthevingsfarger|uthevingsfarge]] med `red`, `orange`, `yellow`, `green`, `blue` eller `purple`, f.eks. `"Remember this"|highlight:blue` returnerer `==🔵Remember this==`.

### `hr`

Legger til en horisontal linje (`---`) etter teksten, adskilt med en tom linje.

- `"Section end"|hr` legger til linjen etter teksten.
- `hr:before` legger den til før teksten, og `hr:both` legger den til på begge sider.

### `image`

Konverterer strenger, matriser eller objekter til Markdown-bildesyntaks.

- For strenger: `"image.jpg"|image:"alt text"` returnerer `![alt text](image.jpg)`.
- For matriser: `["image1.jpg","image2.jpg"]|image:"alt text"` returnerer en matrise med Markdown-bildestrenger med samme alt-tekst for alle bilder.
- For objekter: `{"image1.jpg": "Alt 1", "image2.jpg": "Alt 2"}|image` returnerer Markdown-bildestrenger med alt-tekst fra objektnøklene.

### `italic`

Pakker inn tekst i kursiv-markører.

- `"Emphasized"|italic` returnerer `*Emphasized*`.
- `"Emphasized"|italic:_` returnerer `_Emphasized_`.

### `link`

Konverterer strenger, matriser eller objekter til Markdown-lenkesyntaks (ikke å forveksle med [[Filtre#`wikilink`|wikilink]]).

- For strenger: `"url"|link:"author"` returnerer `[author](url)`.
- For matriser: `["url1","url2"]|link:"author"` returnerer en matrise med Markdown-lenker med samme tekst for alle lenker.
- For objekter: `{"url1": "Author 1", "url2": "Author 2"}|link` returnerer Markdown-lenker med teksten som samsvarer med objektnøklene.

### `list`

Konverterer en matrise til en Markdown-liste.

- `list` for å konvertere til en punktliste.
- `list:task` for å konvertere til en oppgaveliste.
- `list:numbered` for å konvertere til en nummerert liste.
- `list:numbered-task` for å konvertere til en oppgaveliste med numre.

### `math`

Formaterer tekst som inline [[Avansert formateringssyntaks#Matte|matte]]. Flerlinjet tekst blir en matteblokk.

- `"x^2 + y^2"|math` returnerer `$x^2 + y^2$`.

### `math_block`

Oppretter alltid en matteblokk, med `$$` på linjene før og etter teksten.

### `strike`

Pakker inn tekst i gjennomstrekingsmarkører.

- `"Removed"|strike` returnerer `~~Removed~~`.

### `table`

Konverterer en matrise eller matrise av objekter til en [[Avansert formateringssyntaks#Tabeller|Markdown-tabell]]:

- For en matrise av objekter brukes objektnøklene som overskrifter.
- For en matrise av matriser opprettes en tabell der hver nestet matrise er en rad.
- For en enkel matrise opprettes en enkeltkolonnetabell med "Value" som overskrift.
- Egendefinerte kolonneoverskrifter kan angis med: `table:("Column 1", "Column 2", "Column 3")`. Når det brukes med en enkel matrise, deles dataene automatisk inn i rader basert på antall kolonner som er angitt.

### `table_pretty`

Fungerer som [[Filtre#`table`|table]], og polstrer kolonnene til lik bredde slik at tabellen er jevn i kildemodus.

### `wikilink`

Konverterer strenger, matriser eller objekter til Obsidian [[Lenke notater|wiki-lenke]]-syntaks.

- For strenger: `"page"|wikilink` returnerer `[[page]]`.
- For strenger med alias: `"page"|wikilink:"alias"` returnerer `[[page|alias]]`.
- For matriser: `["page1","page2"]|wikilink` returnerer en matrise med wiki-lenker uten aliaser.
- For matriser med alias: `["page1","page2"]|wikilink:"alias"` returnerer en matrise med wiki-lenker med samme alias for alle lenker.
- For objekter: `{"page1": "alias1", "page2": "alias2"}|wikilink` returnerer wiki-lenker med nøklene som sidenavn og verdiene som aliaser.

## Tall

`calc`, `round` og `length` returnerer tall og bevarer typen i senere filtre og variabeltilordninger. `number_format` returnerer tekst.

### `calc`

Utfører grunnleggende aritmetiske operasjoner på tall.

- Støtter operatorer: `+`, `-`, `*`, `/`, `**` (eller `^`) for eksponentiering.
- Eksempel: `5|calc:"+10"` returnerer `15`.
- Eksempel: `2|calc:"**3"` returnerer `8` (2 i tredje).
- Returnerer den opprinnelige inndataen hvis den er tom, ikke er et tall, eller beregningen gir et ikke-endelig resultat.

### `length`

Returnerer lengden på strenger, matriser eller antall nøkler i objekter.

- For strenger: `"hello"|length` returnerer `5`.
- For matriser: `["a","b","c"]|length` returnerer `3`.
- En matrise med ett element teller fortsatt som én: `[42]|length` returnerer `1`.
- For objekter: `{"a":1,"b":2}|length` returnerer `2`.

### `number_format`

Formaterer et tall med et angitt antall desimalplasser og valgfrie desimal- og tusenskilletegn.

- `1234.567|number_format:2` returnerer `"1,234.57"`.
- `1234.567|number_format:(2,",",".")` returnerer `"1.234,57"`.
- Matriser og objekter formateres rekursivt.

### `round`

Avrunder et tall til nærmeste heltall eller til et angitt antall desimalplasser.

- Uten parametere: `3.7|round` returnerer `4`.
- Med angitte desimalplasser: `3.14159|round:2` returnerer `3.14`.
- Matriser og objekter beholder strukturen sin, og numeriske verdier avrundes rekursivt. Numeriske strenger blir tall, f.eks. `["1.234","2.345"]|round:2` returnerer `[1.23,2.35]`.
- Ugyldig inndata som `"42abc"` bevares i stedet for å bli konvertert til et tall.

## HTML-behandling

Behandle HTML-innhold og konverter HTML til Markdown. Merk at inndata-[[Variabler|variabelen]] din må inneholde HTML-innhold, f.eks. ved å bruke `{{fullHtml}}`, `{{contentHtml}}` eller en `{{selectorHtml:}}`-variabel.

### `html_to_json`

Konverterer HTML til strukturert JSON som inneholder hvert elements tag, attributter og barn. Tekstnoder bruker formatet `{"type":"text","content":"..."}`. Dette kan kombineres med filtre som `map`, `object` og `template` for å omforme uttrukket HTML.

### `markdown`

Konverterer en streng til en [[Obsidian Flavored Markdown]]-formatert streng.

- Nyttig i kombinasjon med variabler som returnerer HTML som `{{contentHtml}}`, `{{fullHtml}}` og selector-variabler som `{{selectorHtml:cssSelector}}`.

### `remove_attr`

Fjerner bare de angitte HTML-attributtene fra tagger.

- Eksempel: `'<div class="test" id="example">Content</div>'|remove_attr:"class"` returnerer `<div id="example">Content</div>`.
- Flere attributter: `{{fullHtml|remove_attr:("class,style,id")}}`

### `remove_html`

Fjerner de angitte HTML-elementene og deres innhold fra en streng.

- Støtter tagnavn, klasse eller id, f.eks. `{{fullHtml|remove_html:("img,.class-name,#element-id")}}`
- For å fjerne bare HTML-tagger eller attributter uten å fjerne innholdet, bruk filtrene `strip_tags` eller `strip_attr`.

### `remove_tags`

Fjerner bare de angitte HTML-taggene. Beholder innholdet i taggene.

- Eksempel: `"<p>Hello <b>world</b>!</p>"|remove_tags:"b"` returnerer `"<p>Hello world!</p>"`.
- Flere tagger: `{{fullHtml|remove_tags:("a,em,strong")}}`

### `replace_tags`

Erstatter HTML-tagger, og beholder innholdet og attributtene til taggen.

- `{{fullHtml|replace_tags:"strong":"h2"}}` erstatter alle `<strong>`-tagger med `<h2>`.

### `strip_attr`

Fjerner **alle** HTML-attributter fra en streng.

- Bruk `strip_attr:("class, id")` for å beholde spesifikke attributter.
- Eksempel: `'<div class="test" id="example">Content</div>'|strip_attr:("class")` returnerer `<div class="test">Content</div>`.

### `strip_md`

Fjerner **all** Markdown-formatering og returnerer en ren tekststreng, f.eks. gjør `**text**` til `text`.

- Gjør formatert tekst til uformatert ren tekst, inkludert fet, kursiv, uthevinger, overskrifter, kode, blokksitater, tabeller, oppgavelister og wiki-lenker.
- Fjerner fullstendig tabeller, fotnoter, bilder og HTML-elementer.
- `stripmd` er et alias.

### `strip_tags`

Fjerner **alle** HTML-tagger fra en streng. Innholdet i taggen bevares.

- Bruk `strip_tags:("p,strong,em")` for å beholde spesifikke tagger.
- Eksempel: `"<p>Hello <b>world</b>!</p>"|strip_tags:("b")` returnerer `Hello <b>world</b>!`.

## Matriser og objekter

Behandle matriser og objekter.

### `compact`

Fjerner `null`-verdier og tomme strenger fra matriser og objekter. Beholder `0` og `false`.

- `[null,"","one",0,false,"two"]|compact` returnerer `["one",0,false,"two"]`.

### `first`

Returnerer det første elementet i en matrise og bevarer typen. Objekter og nestede matriser vises som JSON.

- `["a","b","c"]|first` returnerer `"a"`.
- En tom matrise returnerer `null`, som vises som tom tekst.
- Hvis inndata ikke er en matrise, returneres inndata uendret.

### `join`

Kombinerer elementer i en matrise til en streng.

- `["a","b","c"]|join` returnerer `"a,b,c"`.
- Et egendefinert skilletegn kan angis: `["a","b","c"]|join:" "` returnerer `"a b c"`. Bruk `join:"\n"` for å skille elementer med linjeskift.
- Det kan være nyttig etter `split` eller `slice`: `"a,b,c,d"|split:","|slice:1,3|join:" "` returnerer `"b c"`.

### `last`

Returnerer det siste elementet i en matrise og bevarer typen. Objekter og nestede matriser vises som JSON.

- `["a","b","c"]|last` returnerer `"c"`.
- En tom matrise returnerer `null`, som vises som tom tekst.
- Hvis inndata ikke er en matrise, returneres inndata uendret.

### `map`

Bruker en transformasjon på hvert element i en matrise med syntaksen `map:item => item.property` eller `map:item => item.nested.property` for nestede egenskaper.

- `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => item.gem` returnerer `["obsidian", "amethyst"]`.
- Bruk parenteser for objektliteraler og komplekse uttrykk: `map:item => ({key: value})`, f.eks.: `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => ({name: item.gem, color: item.color})` returnerer `[{name: "obsidian", color: "black"}, {name: "amethyst", color: "purple"}]`.

Strengliteraler støttes også, f.eks. `["rock", "pop"]|map:item => "genres/${item}"` returnerer `["genres/rock", "genres/pop"]`.

Kombiner `map` med `template`-filteret, f.eks. `map:item => ({name: ${item.gem}, color: item.color})|template:"- ${name} is ${color}\n"`. For strengliteral-map, bruk `${str}` i malen, f.eks. `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"`.

Merk: Innebygde filtre kan ikke brukes inne i `map`. Dette betyr at for eksempel trimming av hver verdi i en matrise ikke kan gjøres med `map`.

### `merge`

Legger til nye verdier i en matrise.

- For matriser: `["a","b"]|merge:("c","d")` returnerer `["a","b","c","d"]`.
- Enkelt verdi: `["a","b"]|merge:"c"` returnerer `["a","b","c"]`.
- Hvis inndata ikke er en matrise, opprettes en ny matrise: `"a"|merge:("b","c")` returnerer `["a","b","c"]`.
- Verdier kan settes i anførselstegn: `["a"]|merge:('b,"c,d",e')` returnerer `["a","b","c,d","e"]`.

### `nth`

Beholder hvert n-te element i en matrise ved hjelp av CSS-stil nth-child-syntaks og gruppemønstre. Alle posisjoner er 1-baserte (første element er posisjon 1).

- `array|nth:3` beholder bare det 3. elementet.
- `array|nth:3n` beholder hvert 3. element (3, 6, 9, osv.).
- `array|nth:n+3` beholder det 3. og alle påfølgende elementer.

Resultatet forblir en matrise for senere samlingsfiltre. Hvis det inneholder en enkelt primitiv verdi, vises den verdien uten matriseklammer og sendes direkte til tekstfiltre, f.eks. `[1,2]|nth:2` viser `2`.

Gruppemønstersyntaks for gjentakende strukturer:

- `array|nth:1,2,3:5` beholder posisjonene 1, 2, 3 fra hver gruppe på 5 elementer. Eksempel: `[1,2,3,4,5,6,7,8,9,10]|nth:1,2,3:5` returnerer `[1,2,3,6,7,8]`.

### `object`

Manipulerer objektdata:

- `object:array` konverterer et objekt til en matrise med nøkkel-verdi-par.
- `object:keys` returnerer en matrise med objektets nøkler.
- `object:values` returnerer en matrise med objektets verdier.
- Eksempel: `{"a":1,"b":2}|object:array` returnerer `[["a",1],["b",2]]`.

### `parse_json`

Tolker JSON-tekst til en typet verdi. Bruk dette før samlingsfiltre eller YAML-serialisering når en variabel inneholder JSON-tekst, f.eks. `'[1,2]'|parse_json|yaml:flow` returnerer `[1,2]`.

### `reverse`

Reverserer strenger, matriser og rekkefølgen på oppføringer i objekter.

- `"abc"|reverse` returnerer `"cba"`.
- `["a","b","c"]|reverse` returnerer `["c","b","a"]`.

### `slice`

Henter ut en del av en streng eller matrise.

- For strenger: `"hello"|slice:1,4` returnerer `"ell"`.
- For matriser: `["a","b","c","d"]|slice:1,3` returnerer `["b","c"]`.
- Hvis bare én parameter oppgis, hentes ut fra den indeksen til slutten: `"hello"|slice:2` returnerer `"llo"`.
- Negative indekser teller fra slutten: `"hello"|slice:-3` returnerer `"llo"`.
- Den andre parameteren er eksklusiv: `"hello"|slice:1,4` inkluderer tegnene på indeks 1, 2 og 3.
- Bruk av en negativ andre parameter ekskluderer elementer fra slutten: `"hello"|slice:0,-2` returnerer `"hel"`.

### `sort`

Sorterer en matrise i stigende rekkefølge. Tall sorteres etter verdi.

- `[10,2,1]|sort` returnerer `[1,2,10]`.
- `["a","c","b"]|sort:"desc"` returnerer `["c","b","a"]`.
- For matriser med objekter, oppgi en egenskap: `[{"name":"Lin"},{"name":"Ada"}]|sort:"name"` returnerer `[{"name":"Ada"},{"name":"Lin"}]`. Bruk `sort:("name", "desc")` for å reversere. Elementer uten egenskapen plasseres sist.

### `split`

Deler en streng inn i en matrise med delstrenger.

- `"a,b,c"|split:","` returnerer `["a","b","c"]`.
- `"hello world"|split:" "` returnerer `["hello","world"]`.
- Hvis ingen skilletegn oppgis, deles på hvert tegn: `"hello"|split` returnerer `["h","e","l","l","o"]`.
- Regulære uttrykk kan brukes som skilletegn: `"a1b2c3"|split:[0-9]` returnerer `["a","b","c",""]`. Det siste elementet er tomt fordi strengen ender med et skilletegn.

### `sum`

Legger sammen tallene i en matrise. Tekst som ikke er et tall hoppes over, og en tom matrise returnerer `0`.

- `[10,"2.5","","none"]|sum` returnerer `12.5`.
- For matriser med objekter, oppgi en egenskap: `[{"amount":10},{"amount":"2.5"}]|sum:"amount"` returnerer `12.5`.

### `template`

Bruker en malstreng på et objekt eller en matrise av objekter, med syntaksen `object|template:"Template with ${variable}"`.

- Tilgang til nestede egenskaper: `{"gem":{"name":"Obsidian"}}|template:"${gem.name}"` returnerer `"Obsidian"`.
- For objekter: `{"gem":"obsidian","hardness":5}|template:"${gem} has a hardness of ${hardness}"` returnerer `"obsidian has a hardness of 5"`.
- For matriser: `[{"gem":"obsidian","hardness":5},{"gem":"amethyst","hardness":7}]|template:"- ${gem} has a hardness of ${hardness}\n"` returnerer en formatert liste.

Fungerer med strengliteraler fra `map` ved å bruke `${str}`:

- Eksempel: `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"` returnerer en formatert liste.

### `unique`

Fjerner duplikatverdier fra matriser og objekter.

- For matriser med primitive verdier: `[1,2,2,3,3]|unique` returnerer `[1,2,3]`.
- For matriser med objekter: `[{"a":1},{"b":2},{"a":1}]|unique` returnerer `[{"a":1},{"b":2}]`.
- For objekter fjernes egenskaper med duplikatverdier, og nøkkelen til den siste forekomsten beholdes.
- For strenger returneres inndata uendret.

### `where`

Beholder matriseelementer der en egenskap samsvarer med en verdi. Typen må også samsvare, så tallet `1` samsvarer ikke med teksten `"1"`.

- `[{"title":"One","published":true},{"title":"Two","published":false}]|where:("published", true)` returnerer `[{"title":"One","published":true}]`.
- Bruk en punktseparert sti for nestede egenskaper, f.eks. `where:("author.name", "Ada")`.

## YAML

### `yaml`

Formaterer en verdi som YAML. Strenger settes alltid i anførselstegn, inkludert strenger som `"null"`, `"true"` og `"123"`. Faktiske null-verdier, boolske verdier og tall forblir uten anførselstegn.

- Matriser og objekter bruker blokkstil som standard. Bruk `yaml:flow` for kompakte inline-samlinger.
- Bruk `parse_json` først for å serialisere JSON-tekst som strukturerte data i stedet for en streng i anførselstegn.

### `yaml_property`

Formaterer en navngitt YAML-egenskap, inkludert innrykk for matriser og objekter. Strenger og typede verdier følger de samme reglene som `yaml`.

- `"42.567"|round:2|yaml_property:"price"` returnerer `price: 42.57`.
