---
permalink: web-clipper/filters
---
Filters stellen je in staat om [[Variabelen|variabelen]] te wijzigen in [[Obsidian Web Clipper/Sjablonen|Web Clipper-sjablonen]]. Filters worden toegepast op variabelen met de syntaxis `{{variable|filter}}`.

- Filters werken voor elk type [[Variabelen|variabele]], inclusief `prompt`-, `meta`-, `selector`- en `schema`-variabelen.
- Filters kunnen worden samengevoegd, bijv. `{{variable|filter1|filter2}}`, en worden toegepast in de volgorde waarin ze zijn toegevoegd.

## Datums

Datums converteren en wijzigen.

### `date`

Converteert een datum naar het opgegeven formaat, [zie referentie](https://day.js.org/docs/en/display/format).

- `{{date|date:"YYYY-MM-DD"}}` converteert de huidige datum naar "YYYY-MM-DD".
- Gebruik `date:("outputFormat", "inputFormat")` om het invoerformaat op te geven, bijv. `"12/01/2024"|date:("YYYY-MM-DD", "MM/DD/YYYY")` analyseert "12/01/2024" en retourneert `"2024-12-01"`.

### `date_modify` 

Wijzigt een datum door een opgegeven hoeveelheid tijd op te tellen of af te trekken, [zie referentie](https://day.js.org/docs/en/manipulate/add).

- `"2024-12-01"|date_modify:"+1 year"` retourneert `"2025-12-01"`
- `"2024-12-01"|date_modify:"- 2 months"` retourneert `"2024-10-01"`

### `duration`

Converteert ISO 8601-duurstrings of seconden naar geformatteerde tijdstrings. Gebruikt tokens: `HH` (uren met opvulling), `H` (uren), `mm` (minuten met opvulling), `m` (minuten), `ss` (seconden met opvulling), `s` (seconden).

- `"PT1H30M"|duration:"HH:mm:ss"` retourneert `"01:30:00"`.
- `"3665"|duration:"H:mm:ss"` retourneert `"1:01:05"`.
- `duration` instellen zonder parameters gebruikt `HH:mm:ss` boven 1 uur, `mm:ss` onder 1 uur.
- Ondersteunt zowel ISO 8601-duurstrings (bijv. `PT6702S`, `PT1H30M`) als gewone seconden.

## Tekstconversie en hoofdlettergebruik

Tekststrings van het ene formaat naar het andere converteren.

### `camel`

Converteert tekst naar `camelCase`.

### `capitalize`

Maakt het eerste teken van de waarde een hoofdletter en converteert de rest naar kleine letters, bijv. `"hELLO wORLD"|capitalize` retourneert `"Hello world"`.

### `decode_uri`

Decodeert een URI-gecodeerde string, bijv. `"%E4%BD%A0%E5%A5%BD"|decode_uri` retourneert `"你好"`.

- `"hello%20world"|decode_uri` retourneert `"hello world"`.
- Retourneert de oorspronkelijke string als decodering mislukt (bijv. misvormde URI-reeksen).

### `kebab`

Converteert tekst naar `kebab-case`.

### `lower`

Converteert tekst naar `kleine letters`.

### `pascal`

Converteert tekst naar `PascalCase`.

### `replace`

Vervangt voorkomens van opgegeven tekst:

- Eenvoudige vervanging: `"hello!"|replace:",":""` verwijdert alle komma's.
- Meerdere vervangingen: `"hello world"|replace:("e":"a","o":"0")` retourneert `"hall0 w0rld"`.
- Vervangingen worden toegepast in de volgorde waarin ze zijn opgegeven.
- Om opgegeven tekst te verwijderen, gebruik `""` als vervangingswaarde.
- Speciale tekens inclusief `: | { } ( ) ' "` moeten worden geëscaped met een backslash wanneer ze in de zoekterm worden gebruikt, bijv. `\:` om te zoeken naar een letterlijke dubbele punt.

Reguliere expressies worden ondersteund met JavaScript-regex-syntaxis:

- Alle klinkers vervangen: `"hello world"|replace:"/[aeiou]/g":"*"` → `"h*ll* w*rld".`
- Niet-hoofdlettergevoelig: `"HELLO world"|replace:"/hello/i":"hi"` → `"hi world".`
- Meerdere regex: `"hello world"|replace:("/[aeiou]/g":"*","/\s+/":"-")` → `"h*ll*-w*rld"`.
- Beschikbare vlaggen: `g` (globaal), `i` (niet-hoofdlettergevoelig), `m` (meerdere regels), `s` (dotAll), `u` (unicode), `y` (sticky).

### `safe_name`

Converteert tekst naar een veilige bestandsnaam.

- Standaard past `safe_name` de meest conservatieve opschoningsregels toe.
- OS-specifieke regels kunnen worden toegepast met `safe_name:os` waarbij `os` `windows`, `mac` of `linux` kan zijn om alleen de regels voor dat besturingssysteem toe te passen.

### `snake`

Converteert tekst naar `snake_case`.

### `title`

Converteert tekst naar `Titel Stijl`, bijv. `"hello world"|title` retourneert `"Hello World"`.

### `trim`

Verwijdert witruimte aan beide uiteinden van een string.

- `"  hello world  "|trim` retourneert `"hello world"`.

### `uncamel`

Converteert camelCase of PascalCase naar door spaties gescheiden woorden, die je verder kunt opmaken met andere filters zoals `title` of `capitalize`.

- `"camelCase"|uncamel` retourneert `"camel case"`.
- `"PascalCase"|uncamel` retourneert `"pascal case"`.

### `upper`

Converteert een waarde naar hoofdletters, bijv. `"hello world"|upper` retourneert `"HELLO WORLD"`.

## Tekstopmaak

[[Basis opmaaksyntaxis]] en [[Geavanceerde opmaaksyntaxis]] toepassen op tekst.

### `blockquote` 

Voegt een Markdown-citaatprefix (`> `) toe aan elke regel van de invoer.

### `callout`

Maakt een [[Bijschriften|infoblok]] aan met optionele parameters: `{{variable|callout:("type", "title", foldState)}}`

- `type` is het berichttype, standaard is "info"
- `title` is de titel van het infoblok, standaard is leeg
- `foldState` is een boolean om de vouwstatus in te stellen (true voor ingevouwen, false voor uitgevouwen, null voor niet-invouwbaar)

### `footnote`

Converteert een array of object naar een lijst van Markdown-voetnoten.

- Voor arrays: `["first item","second item"]|footnote` retourneert: `[^1]: first item` enz.
- Voor objecten: `{"First Note": "Content 1", "Second Note": "Content 2"}|footnote` retourneert: `[^first-note]: Content 1` enz.

### `fragment_link`

Converteert strings en arrays naar [tekstfragment](https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments)-koppelingen. Standaard is "link" voor de koppelingstekst.

- `highlights|fragment_link` retourneert `Highlight content [link](text-fragment-url)`
- `highlights|fragment_link:"custom title"` retourneert `Highlight content [custom title](text-fragment-url)`

### `image` 

Converteert strings, arrays of objecten naar Markdown-afbeeldingssyntaxis.

- Voor strings: `"image.jpg"|image:"alt text"` retourneert `![alt text](image.jpg)`.
- Voor arrays: `["image1.jpg","image2.jpg"]|image:"alt text"` retourneert een array van Markdown-afbeeldingsstrings met dezelfde alt-tekst voor alle afbeeldingen.
- Voor objecten: `{"image1.jpg": "Alt 1", "image2.jpg": "Alt 2"}|image` retourneert Markdown-afbeeldingsstrings met alt-tekst van de objectsleutels.

### `link`

Converteert strings, arrays of objecten naar Markdown-koppelingssyntaxis (niet te verwarren met [[Filters#`wikilink`|wikilink]]).

- Voor strings: `"url"|link:"author"` retourneert `[author](url)`.
- Voor arrays: `["url1","url2"]|link:"author"` retourneert een array van Markdown-koppelingen met dezelfde tekst voor alle koppelingen.
- Voor objecten: `{"url1": "Author 1", "url2": "Author 2"}|link` retourneert Markdown-koppelingen met de tekst die overeenkomt met de objectsleutels.

### `list`

Converteert een array naar een Markdown-lijst.

- `list` om te converteren naar een opsomming met opsommingstekens.
- `list:task` om te converteren naar een takenlijst.
- `list:numbered` om te converteren naar een genummerde lijst.
- `list:numbered-task` om te converteren naar een takenlijst met nummers.

### `table`

Converteert een array of array van objecten naar een [[Geavanceerde opmaaksyntaxis#Tabellen|Markdown-tabel]]:

- Voor een array van objecten worden de objectsleutels als koppen gebruikt.
- Voor een array van arrays wordt een tabel gemaakt met elke geneste array als een rij.
- Voor een eenvoudige array wordt een tabel met één kolom gemaakt met "Value" als kop.
- Aangepaste kolomkoppen kunnen worden opgegeven met: `table:("Column 1", "Column 2", "Column 3")`. Bij gebruik met een eenvoudige array worden de gegevens automatisch in rijen verdeeld op basis van het opgegeven aantal kolommen.

### `wikilink`

Converteert strings, arrays of objecten naar Obsidian [[Notities koppelen|wiki-link]]-syntaxis.

- Voor strings: `"page"|wikilink` retourneert `[[page]]`.
- Voor strings met alias: `"page"|wikilink:"alias"` retourneert `[[page|alias]]`.
- Voor arrays: `["page1","page2"]|wikilink` retourneert een array van wiki-links zonder aliassen.
- Voor arrays met alias: `["page1","page2"]|wikilink:"alias"` retourneert een array van wiki-links met dezelfde alias voor alle koppelingen.
- Voor objecten: `{"page1": "alias1", "page2": "alias2"}|wikilink` retourneert wiki-links met de sleutels als paginanamen en waarden als aliassen.

## Getallen

### `calc`

Voert eenvoudige rekenkundige bewerkingen uit op getallen.

- Ondersteunt operatoren: `+`, `-`, `*`, `/`, `**` (of `^`) voor machtsverheffing.
- Voorbeeld: `5|calc:"+10"` retourneert `15`.
- Voorbeeld: `2|calc:"**3"` retourneert `8` (2 tot de derde macht).
- Retourneert de oorspronkelijke string als de invoer geen getal is.

### `length`

Retourneert de lengte van strings, arrays of het aantal sleutels in objecten.

- Voor strings: `"hello"|length` retourneert `5`.
- Voor arrays: `["a","b","c"]|length` retourneert `3`.
- Voor objecten: `{"a":1,"b":2}|length` retourneert `2`.

### `round`

Rondt een getal af naar het dichtstbijzijnde gehele getal of naar een opgegeven aantal decimalen.

- Zonder parameters: `3.7|round` retourneert `4`.
- Met opgegeven decimalen: `3.14159|round:2` retourneert `3.14`.

## HTML-verwerking

HTML-inhoud verwerken en HTML naar Markdown converteren. Merk op dat je invoer[[Variabelen|variabele]] HTML-inhoud moet bevatten, bijv. door `{{fullHtml}}`, `{{contentHtml}}` of een `{{selectorHtml:}}`-variabele te gebruiken.

### `markdown` 

Converteert een string naar een string in [[Obsidian Flavored Markdown]]-opmaak.

- Nuttig in combinatie met variabelen die HTML retourneren zoals `{{contentHtml}}`, `{{fullHtml}}` en selectorvariabelen zoals `{{selectorHtml:cssSelector}}`.

### `remove_attr` 

Verwijdert alleen de opgegeven HTML-attributen van tags.

- Voorbeeld: `"<div class="test" id="example">Content</div>"|remove_attr:"class"` retourneert `<div id="example">Content</div>`.
- Meerdere attributen: `{{fullHtml|remove_attr:("class,style,id")}}`

### `remove_html`

Verwijdert de opgegeven HTML-elementen en hun inhoud uit een string.

- Ondersteunt tagnaam, klasse of id, bijv. `{{fullHtml|remove_html:("img,.class-name,#element-id")}}`
- Om alleen HTML-tags of -attributen te verwijderen zonder de inhoud te verwijderen, gebruik de `strip_tags`- of `strip_attr`-filters.

### `remove_tags` 

Verwijdert alleen de opgegeven HTML-tags. Behoudt de inhoud van de tags.

- Voorbeeld: `"<p>Hello <b>world</b>!</p>"|remove_tags:"b"` retourneert `"<p>Hello world!</p>"`.
- Meerdere tags: `{{fullHtml|remove_tags:("a,em,strong")}}`

### `replace_tags`

Vervangt HTML-tags, met behoud van de inhoud en attributen van de tag.

- `{{fullHtml|replace_tags:"strong":"h2"}}` vervangt alle `<strong>`-tags door `<h2>`.

### `strip_attr`

Verwijdert **alle** HTML-attributen uit een string.

- Gebruik `strip_attr:("class, id")` om specifieke attributen te behouden.
- Voorbeeld: `"<div class="test" id="example">Content</div>"|strip_attr:("class")` retourneert `<div id="example">Content</div>`.

### `strip_md`

Verwijdert **alle** Markdown-opmaak en retourneert een platte-tekststring, bijv. door `**text**` om te zetten naar `text`.

- Zet opgemaakte tekst om naar onopgemaakte platte tekst, inclusief vet, cursief, markeringen, koppen, code, blokcitaten, tabellen, takenlijsten en wiki-links.
- Verwijdert tabellen, voetnoten, afbeeldingen en HTML-elementen volledig.

### `strip_tags`

Verwijdert **alle** HTML-tags uit een string. Inhoud binnen de tag wordt bewaard.

- Gebruik `strip_tags:("p,strong,em")` om specifieke tags te behouden.
- Voorbeeld: `"<p>Hello <b>world</b>!</p>"|strip_tags:("b")` retourneert `Hello <b>world</b>!`.

## Arrays en objecten

Arrays en objecten verwerken.

### `first` 

Retourneert het eerste element van een array als een string.

- `["a","b","c"]|first` retourneert `"a"`.
- Als de invoer geen array is, wordt de invoer ongewijzigd geretourneerd.

### `join`

Combineert elementen van een array tot een string.

- `["a","b","c"]|join` retourneert `"a,b,c"`.
- Een aangepast scheidingsteken kan worden opgegeven: `["a","b","c"]|join:" "` retourneert `"a b c"`. Gebruik `join:"\n"` om elementen te scheiden met een regelovergang.
- Het kan nuttig zijn na `split` of `slice`: `"a,b,c,d"|split:","|slice:1,3|join:" "` retourneert `"b c"`.

### `last`

Retourneert het laatste element van een array als een string.

- `["a","b","c"]|last` retourneert `"c"`.
- Als de invoer geen array is, wordt de invoer ongewijzigd geretourneerd.

### `map`

Past een transformatie toe op elk element van een array met de syntaxis `map:item => item.property` of `map:item => item.nested.property` voor geneste eigenschappen.

- `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => item.gem` retourneert `["obsidian", "amethyst"]`.
- Gebruik haakjes voor objectliterals en complexe expressies: `map:item => ({key: value})`, bijv.: `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => ({name: item.gem, color: item.color})` retourneert `[{name: "obsidian", color: "black"}, {name: "amethyst", color: "purple"}]`.

Stringliterals worden ook ondersteund, bijv. `["rock", "pop"]|map:item => "genres/${item}"` retourneert `["genres/rock", "genres/pop"]`.

Combineer `map` met het `template`-filter, bijv. `map:item => ({name: ${item.gem}, color: item.color})|template:"- ${name} is ${color}\n"`. Voor stringliteral-maps, gebruik `${str}` in het sjabloon, bijv. `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"`.

Opmerking: Ingebouwde filters kunnen niet worden gebruikt binnen `map`. Dit betekent dat bijvoorbeeld het trimmen van elke waarde van een array niet kan worden gedaan met `map`.

### `merge`

Voegt nieuwe waarden toe aan een array.

- Voor arrays: `["a","b"]|merge:("c","d")` retourneert `["a","b","c","d"]`.
- Enkele waarde: `["a","b"]|merge:"c"` retourneert `["a","b","c"]`.
- Als de invoer geen array is, wordt een nieuwe array gemaakt: `"a"|merge:("b","c")` retourneert `["a","b","c"]`.
- Waarden kunnen worden aangehaald: `["a"]|merge:('b,"c,d",e')` retourneert `["a","b","c,d","e"]`.

### `nth`

Behoudt nde items in een array met CSS-stijl nth-child-syntaxis en groepspatronen. Alle posities zijn 1-gebaseerd (eerste item is positie 1).

- `array|nth:3` behoudt alleen het 3e element.
- `array|nth:3n` behoudt elk 3e element (3, 6, 9, enz.).
- `array|nth:n+3` behoudt het 3e en alle volgende elementen.

Groepspatroonsyntaxis voor herhalende structuren:

- `array|nth:1,2,3:5` behoudt posities 1, 2, 3 van elke groep van 5 items. Voorbeeld: `[1,2,3,4,5,6,7,8,9,10]|nth:1,2,3:5` retourneert `[1,2,3,6,7,8]`.

### `object`

Manipuleert objectgegevens:

- `object:array` converteert een object naar een array van sleutel-waardeparen.
- `object:keys` retourneert een array van de sleutels van het object.
- `object:values` retourneert een array van de waarden van het object.
- Voorbeeld: `{"a":1,"b":2}|object:array` retourneert `[["a",1],["b",2]]`.

### `slice`

Extraheert een deel van een string of array.

- Voor strings: `"hello"|slice:1,4` retourneert `"ell"`.
- Voor arrays: `["a","b","c","d"]|slice:1,3` retourneert `["b","c"]`.
- Als er slechts één parameter wordt opgegeven, wordt er gesneden vanaf die index tot het einde: `"hello"|slice:2` retourneert `"llo"`.
- Negatieve indices tellen vanaf het einde: `"hello"|slice:-3` retourneert `"llo"`.
- De tweede parameter is exclusief: `"hello"|slice:1,4` bevat tekens op indices 1, 2 en 3.
- Een negatieve tweede parameter sluit elementen van het einde uit: `"hello"|slice:0,-2` retourneert `"hel"`.

### `split`

Deelt een string op in een array van substrings.

- `"a,b,c"|split:","` retourneert `["a","b","c"]`.
- `"hello world"|split:" "` retourneert `["hello","world"]`.
- Als er geen scheidingsteken wordt opgegeven, wordt op elk teken gesplitst: `"hello"|split` retourneert `["h","e","l","l","o"]`.
- Reguliere expressies kunnen als scheidingstekens worden gebruikt: `"a1b2c3"|split:[0-9]` retourneert `["a","b","c"]`.

### `template`

Past een sjabloonstring toe op een object of array van objecten, met de syntaxis `object|template:"Template with ${variable}"`.

- Geneste eigenschappen benaderen: `{"gem":{"name":"Obsidian"}}|template:"${gem.name}"` retourneert `"Obsidian"`.
- Voor objecten: `{"gem":"obsidian","hardness":5}|template:"${gem} has a hardness of ${hardness}"` retourneert `"obsidian has a hardness of 5"`.
- Voor arrays: `[{"gem":"obsidian","hardness":5},{"gem":"amethyst","hardness":7}]|template:"- ${gem} has a hardness of ${hardness}\n"` retourneert een opgemaakte lijst.

Werkt met stringliterals van `map` met `${str}`:

- Voorbeeld: `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"` retourneert een opgemaakte lijst.

### `unique`

Verwijdert dubbele waarden uit arrays en objecten.

- Voor arrays van primitieven: `[1,2,2,3,3]|unique` retourneert `[1,2,3]`.
- Voor arrays van objecten: `[{"a":1},{"b":2},{"a":1}]|unique` retourneert `[{"a":1},{"b":2}]`.
- Voor objecten worden eigenschappen met dubbele waarden verwijderd, waarbij de sleutel van het laatste voorkomen wordt bewaard.
- Voor strings wordt de invoer ongewijzigd geretourneerd.
