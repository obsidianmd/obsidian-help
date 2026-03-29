---
permalink: web-clipper/filters
---
Filter låter dig modifiera [[Variabler|variabler]] i [[Obsidian Web Clipper/Mallar|Web Clipper-mallar]]. Filter appliceras på variabler med syntaxen `{{variable|filter}}`.

- Filter fungerar för alla typer av [[Variabler|variabler]] inklusive `prompt`-, `meta`-, `selector`- och `schema`-variabler.
- Filter kan kedjas, t.ex. `{{variable|filter1|filter2}}`, och appliceras i den ordning de läggs till.

## Datum

Konvertera och modifiera datum.

### `date`

Konverterar ett datum till angivet format, [se referens](https://day.js.org/docs/en/display/format).

- `{{date|date:"YYYY-MM-DD"}}` konverterar aktuellt datum till "YYYY-MM-DD".
- Använd `date:("outputFormat", "inputFormat")` för att ange indataformat, t.ex. `"12/01/2024"|date:("YYYY-MM-DD", "MM/DD/YYYY")` tolkar "12/01/2024" och returnerar `"2024-12-01"`.

### `date_modify`

Modifierar ett datum genom att lägga till eller subtrahera en angiven tidsperiod, [se referens](https://day.js.org/docs/en/manipulate/add).

- `"2024-12-01"|date_modify:"+1 year"` returnerar `"2025-12-01"`
- `"2024-12-01"|date_modify:"- 2 months"` returnerar `"2024-10-01"`

### `duration`

Konverterar ISO 8601-varaktigheter eller sekunder till formaterade tidssträngar. Använder tokens: `HH` (utfyllda timmar), `H` (timmar), `mm` (utfyllda minuter), `m` (minuter), `ss` (utfyllda sekunder), `s` (sekunder).

- `"PT1H30M"|duration:"HH:mm:ss"` returnerar `"01:30:00"`.
- `"3665"|duration:"H:mm:ss"` returnerar `"1:01:05"`.
- Att ange `duration` utan parametrar använder `HH:mm:ss` över 1 timme, `mm:ss` under 1 timme.
- Stödjer både ISO 8601-varaktighetssträngar (t.ex. `PT6702S`, `PT1H30M`) och rena sekunder.

## Textkonvertering och versalisering

Konvertera textsträngar från ett format till ett annat.

### `camel`

Konverterar text till `camelCase`.

### `capitalize`

Gör första tecknet i värdet till versal och konverterar resten till gemener, t.ex. `"hELLO wORLD"|capitalize` returnerar `"Hello world"`.

### `decode_uri`

Avkodar en URI-kodad sträng, t.ex. `"%E4%BD%A0%E5%A5%BD"|decode_uri` returnerar `"你好"`.

- `"hello%20world"|decode_uri` returnerar `"hello world"`.
- Returnerar originalsträngen om avkodningen misslyckas (t.ex. felaktiga URI-sekvenser).

### `kebab`

Konverterar text till `kebab-case`.

### `lower`

Konverterar text till `gemener`.

### `pascal`

Konverterar text till `PascalCase`.

### `replace`

Ersätter förekomster av angiven text:

- Enkel ersättning: `"hello!"|replace:",":""` tar bort alla kommatecken.
- Flera ersättningar: `"hello world"|replace:("e":"a","o":"0")` returnerar `"hall0 w0rld"`.
- Ersättningar appliceras i den ordning de anges.
- För att ta bort angiven text, använd `""` som ersättningsvärde.
- Specialtecken inklusive `: | { } ( ) ' "` ska escapas med ett omvänt snedstreck när de används i söktermen, t.ex. `\:` för att söka efter ett bokstavligt kolon.

Reguljära uttryck stöds med JavaScript regex-syntax:

- Ersätt alla vokaler: `"hello world"|replace:"/[aeiou]/g":"*"` → `"h*ll* w*rld".`
- Skiftlägesokänslig: `"HELLO world"|replace:"/hello/i":"hi"` → `"hi world".`
- Flera regex: `"hello world"|replace:("/[aeiou]/g":"*","/\s+/":"-")` → `"h*ll*-w*rld"`.
- Tillgängliga flaggor: `g` (global), `i` (skiftlägesokänslig), `m` (flerradig), `s` (dotAll), `u` (unicode), `y` (sticky).

### `safe_name`

Konverterar text till ett säkert filnamn.

- Som standard tillämpar `safe_name` de mest konservativa saneringsreglerna.
- OS-specifika regler kan tillämpas med `safe_name:os` där `os` kan vara `windows`, `mac` eller `linux` för att bara tillämpa reglerna för det operativsystemet.

### `snake`

Konverterar text till `snake_case`.

### `title`

Konverterar text till `Versaliserad Text`, t.ex. `"hello world"|title` returnerar `"Hello World"`.

### `trim`

Tar bort blanksteg från båda ändar av en sträng.

- `"  hello world  "|trim` returnerar `"hello world"`.

### `uncamel`

Konverterar camelCase eller PascalCase till mellanrumseparerade ord, som du sedan kan formatera vidare med andra filter som `title` eller `capitalize`.

- `"camelCase"|uncamel` returnerar `"camel case"`.
- `"PascalCase"|uncamel` returnerar `"pascal case"`.

### `upper`

Konverterar ett värde till versaler, t.ex. `"hello world"|upper` returnerar `"HELLO WORLD"`.

## Textformatering

Tillämpa [[Grundläggande formateringssyntax]] och [[Avancerad formateringssyntax]] på text.

### `blockquote`

Lägger till ett Markdown-citatprefix (`> `) på varje rad i indata.

### `callout`

Skapar en [[Notiser|notis]] med valfria parametrar: `{{variable|callout:("type", "title", foldState)}}`

- `type` är notistypen och är som standard "info"
- `title` är notisens titel och är som standard tom
- `foldState` är ett booleskt värde för att ange vikningsläge (true för invikt, false för expanderad, null för ej vikbar)

### `footnote`

Konverterar en array eller ett objekt till en lista med Markdown-fotnoter.

- För arrayer: `["first item","second item"]|footnote` returnerar: `[^1]: first item` etc.
- För objekt: `{"First Note": "Content 1", "Second Note": "Content 2"}|footnote` returnerar: `[^first-note]: Content 1` etc.

### `fragment_link`

Konverterar strängar och arrayer till [textfragment](https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments)-länkar. Använder som standard "link" som länktext.

- `highlights|fragment_link` returnerar `Highlight content [link](text-fragment-url)`
- `highlights|fragment_link:"custom title"` returnerar `Highlight content [custom title](text-fragment-url)`

### `image`

Konverterar strängar, arrayer eller objekt till Markdown-bildsyntax.

- För strängar: `"image.jpg"|image:"alt text"` returnerar `![alt text](image.jpg)`.
- För arrayer: `["image1.jpg","image2.jpg"]|image:"alt text"` returnerar en array med Markdown-bildsträngar med samma alt-text för alla bilder.
- För objekt: `{"image1.jpg": "Alt 1", "image2.jpg": "Alt 2"}|image` returnerar Markdown-bildsträngar med alt-text från objektnycklarna.

### `link`

Konverterar strängar, arrayer eller objekt till Markdown-länksyntax (ska inte förväxlas med [[Filter#`wikilink`|wikilink]]).

- För strängar: `"url"|link:"author"` returnerar `[author](url)`.
- För arrayer: `["url1","url2"]|link:"author"` returnerar en array med Markdown-länkar med samma text för alla länkar.
- För objekt: `{"url1": "Author 1", "url2": "Author 2"}|link` returnerar Markdown-länkar med text som matchar objektnycklarna.

### `list`

Konverterar en array till en Markdown-lista.

- `list` för att konvertera till en punktlista.
- `list:task` för att konvertera till en att göra-lista.
- `list:numbered` för att konvertera till en numrerad lista.
- `list:numbered-task` för att konvertera till en att göra-lista med nummer.

### `table`

Konverterar en array eller array av objekt till en [[Avancerad formateringssyntax#Tabeller|Markdown-tabell]]:

- För en array av objekt används objektnycklarna som rubriker.
- För en array av arrayer skapas en tabell med varje kapslad array som en rad.
- För en enkel array skapas en tabell med en kolumn med "Value" som rubrik.
- Anpassade kolumnrubriker kan anges med: `table:("Column 1", "Column 2", "Column 3")`. Vid användning med en enkel array delas data automatiskt upp i rader baserat på antalet angivna kolumner.

### `wikilink`

Konverterar strängar, arrayer eller objekt till Obsidians [[Länka anteckningar|wikilänk]]-syntax.

- För strängar: `"page"|wikilink` returnerar `[[page]]`.
- För strängar med alias: `"page"|wikilink:"alias"` returnerar `[[page|alias]]`.
- För arrayer: `["page1","page2"]|wikilink` returnerar en array med wikilänkar utan alias.
- För arrayer med alias: `["page1","page2"]|wikilink:"alias"` returnerar en array med wikilänkar med samma alias för alla länkar.
- För objekt: `{"page1": "alias1", "page2": "alias2"}|wikilink` returnerar wikilänkar med nycklarna som sidnamn och värdena som alias.

## Nummer

### `calc`

Utför grundläggande aritmetiska operationer på nummer.

- Stödjer operatorer: `+`, `-`, `*`, `/`, `**` (eller `^`) för exponentiering.
- Exempel: `5|calc:"+10"` returnerar `15`.
- Exempel: `2|calc:"**3"` returnerar `8` (2 upphöjt till 3).
- Returnerar originalsträngen om indata inte är ett nummer.

### `length`

Returnerar längden på strängar, arrayer eller antalet nycklar i objekt.

- För strängar: `"hello"|length` returnerar `5`.
- För arrayer: `["a","b","c"]|length` returnerar `3`.
- För objekt: `{"a":1,"b":2}|length` returnerar `2`.

### `round`

Avrundar ett nummer till närmaste heltal eller till ett angivet antal decimaler.

- Utan parametrar: `3.7|round` returnerar `4`.
- Med angivna decimaler: `3.14159|round:2` returnerar `3.14`.

## HTML-bearbetning

Bearbeta HTML-innehåll och konvertera HTML till Markdown. Observera att din [[Variabler|variabel]] för indata måste innehålla HTML-innehåll, t.ex. genom att använda `{{fullHtml}}`, `{{contentHtml}}` eller en `{{selectorHtml:}}`-variabel.

### `markdown`

Konverterar en sträng till en [[Obsidian Flavored Markdown]]-formaterad sträng.

- Användbart i kombination med variabler som returnerar HTML såsom `{{contentHtml}}`, `{{fullHtml}}` och selector-variabler som `{{selectorHtml:cssSelector}}`.

### `remove_attr`

Tar bort endast de angivna HTML-attributen från taggar.

- Exempel: `"<div class="test" id="example">Content</div>"|remove_attr:"class"` returnerar `<div id="example">Content</div>`.
- Flera attribut: `{{fullHtml|remove_attr:("class,style,id")}}`

### `remove_html`

Tar bort de angivna HTML-elementen och deras innehåll från en sträng.

- Stödjer taggnamn, klass eller id, t.ex. `{{fullHtml|remove_html:("img,.class-name,#element-id")}}`
- För att bara ta bort HTML-taggar eller attribut utan att ta bort innehållet, använd filtren `strip_tags` eller `strip_attr`.

### `remove_tags`

Tar bort endast de angivna HTML-taggarna. Behåller taggarnas innehåll.

- Exempel: `"<p>Hello <b>world</b>!</p>"|remove_tags:"b"` returnerar `"<p>Hello world!</p>"`.
- Flera taggar: `{{fullHtml|remove_tags:("a,em,strong")}}`

### `replace_tags`

Ersätter HTML-taggar men behåller taggens innehåll och attribut.

- `{{fullHtml|replace_tags:"strong":"h2"}}` ersätter alla `<strong>`-taggar med `<h2>`.

### `strip_attr`

Tar bort **alla** HTML-attribut från en sträng.

- Använd `strip_attr:("class, id")` för att behålla specifika attribut.
- Exempel: `"<div class="test" id="example">Content</div>"|strip_attr:("class")` returnerar `<div id="example">Content</div>`.

### `strip_md`

Tar bort **all** Markdown-formatering och returnerar en oformaterad textsträng, t.ex. omvandlar `**text**` till `text`.

- Omvandlar formaterad text till oformaterad text, inklusive fet, kursiv, markeringar, rubriker, kod, blockcitat, tabeller, att göra-listor och wikilänkar.
- Tar helt bort tabeller, fotnoter, bilder och HTML-element.

### `strip_tags`

Tar bort **alla** HTML-taggar från en sträng. Innehåll inom taggen bevaras.

- Använd `strip_tags:("p,strong,em")` för att behålla specifika taggar.
- Exempel: `"<p>Hello <b>world</b>!</p>"|strip_tags:("b")` returnerar `Hello <b>world</b>!`.

## Arrayer och objekt

Bearbeta arrayer och objekt.

### `first`

Returnerar det första elementet i en array som en sträng.

- `["a","b","c"]|first` returnerar `"a"`.
- Om indata inte är en array returneras indata oförändrat.

### `join`

Kombinerar elementen i en array till en sträng.

- `["a","b","c"]|join` returnerar `"a,b,c"`.
- En anpassad separator kan anges: `["a","b","c"]|join:" "` returnerar `"a b c"`. Använd `join:"\n"` för att separera element med radbrytning.
- Kan vara användbart efter `split` eller `slice`: `"a,b,c,d"|split:","|slice:1,3|join:" "` returnerar `"b c"`.

### `last`

Returnerar det sista elementet i en array som en sträng.

- `["a","b","c"]|last` returnerar `"c"`.
- Om indata inte är en array returneras indata oförändrat.

### `map`

Tillämpar en transformation på varje element i en array med syntaxen `map:item => item.property` eller `map:item => item.nested.property` för kapslade egenskaper.

- `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => item.gem` returnerar `["obsidian", "amethyst"]`.
- Använd parenteser för objektliteraler och komplexa uttryck: `map:item => ({key: value})`, t.ex.: `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => ({name: item.gem, color: item.color})` returnerar `[{name: "obsidian", color: "black"}, {name: "amethyst", color: "purple"}]`.

Strängliteraler stöds också, t.ex. `["rock", "pop"]|map:item => "genres/${item}"` returnerar `["genres/rock", "genres/pop"]`.

Kombinera `map` med `template`-filtret, t.ex. `map:item => ({name: ${item.gem}, color: item.color})|template:"- ${name} is ${color}\n"`. För strängliteral-mappningar, använd `${str}` i mallen, t.ex. `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"`.

Observera: Inbyggda filter kan inte användas inuti `map`. Det innebär att t.ex. trimning av varje värde i en array inte kan göras med `map`.

### `merge`

Lägger till nya värden i en array.

- För arrayer: `["a","b"]|merge:("c","d")` returnerar `["a","b","c","d"]`.
- Enstaka värde: `["a","b"]|merge:"c"` returnerar `["a","b","c"]`.
- Om indata inte är en array skapas en ny array: `"a"|merge:("b","c")` returnerar `["a","b","c"]`.
- Värden kan citeras: `["a"]|merge:('b,"c,d",e')` returnerar `["a","b","c,d","e"]`.

### `nth`

Behåller var n:te element i en array med CSS-liknande nth-child-syntax och gruppmönster. Alla positioner är 1-baserade (första elementet är position 1).

- `array|nth:3` behåller bara det 3:e elementet.
- `array|nth:3n` behåller var 3:e element (3, 6, 9, etc.).
- `array|nth:n+3` behåller det 3:e och alla följande element.

Gruppmönstersyntax för upprepande strukturer:

- `array|nth:1,2,3:5` behåller positionerna 1, 2, 3 från varje grupp om 5 element. Exempel: `[1,2,3,4,5,6,7,8,9,10]|nth:1,2,3:5` returnerar `[1,2,3,6,7,8]`.

### `object`

Manipulerar objektdata:

- `object:array` konverterar ett objekt till en array med nyckel-värdepar.
- `object:keys` returnerar en array med objektets nycklar.
- `object:values` returnerar en array med objektets värden.
- Exempel: `{"a":1,"b":2}|object:array` returnerar `[["a",1],["b",2]]`.

### `slice`

Extraherar en del av en sträng eller array.

- För strängar: `"hello"|slice:1,4` returnerar `"ell"`.
- För arrayer: `["a","b","c","d"]|slice:1,3` returnerar `["b","c"]`.
- Om bara en parameter anges, extraheras från det indexet till slutet: `"hello"|slice:2` returnerar `"llo"`.
- Negativa index räknas från slutet: `"hello"|slice:-3` returnerar `"llo"`.
- Den andra parametern är exklusiv: `"hello"|slice:1,4` inkluderar tecknen vid index 1, 2 och 3.
- Att använda en negativ andra parameter exkluderar element från slutet: `"hello"|slice:0,-2` returnerar `"hel"`.

### `split`

Delar upp en sträng i en array av delsträngar.

- `"a,b,c"|split:","` returnerar `["a","b","c"]`.
- `"hello world"|split:" "` returnerar `["hello","world"]`.
- Om ingen separator anges delas på varje tecken: `"hello"|split` returnerar `["h","e","l","l","o"]`.
- Reguljära uttryck kan användas som separator: `"a1b2c3"|split:[0-9]` returnerar `["a","b","c"]`.

### `template`

Tillämpar en mallsträng på ett objekt eller en array av objekt, med syntaxen `object|template:"Template with ${variable}"`.

- Åtkomst till kapslade egenskaper: `{"gem":{"name":"Obsidian"}}|template:"${gem.name}"` returnerar `"Obsidian"`.
- För objekt: `{"gem":"obsidian","hardness":5}|template:"${gem} has a hardness of ${hardness}"` returnerar `"obsidian has a hardness of 5"`.
- För arrayer: `[{"gem":"obsidian","hardness":5},{"gem":"amethyst","hardness":7}]|template:"- ${gem} has a hardness of ${hardness}\n"` returnerar en formaterad lista.

Fungerar med strängliteraler från `map` med `${str}`:

- Exempel: `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"` returnerar en formaterad lista.

### `unique`

Tar bort dublettvärden från arrayer och objekt.

- För arrayer med primitiver: `[1,2,2,3,3]|unique` returnerar `[1,2,3]`.
- För arrayer med objekt: `[{"a":1},{"b":2},{"a":1}]|unique` returnerar `[{"a":1},{"b":2}]`.
- För objekt tar den bort egenskaper med dublettvärden och behåller den senaste förekomstens nyckel.
- För strängar returneras indata oförändrat.
