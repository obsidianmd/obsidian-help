---
permalink: web-clipper/filters
aliases:
  - Filters
---
I filtri consentono di modificare le [[Variabili|variabili]] nei [[Modelli|modelli di Web Clipper]]. I filtri vengono applicati alle variabili usando la sintassi `{{variable|filter}}`.

- I filtri funzionano per qualsiasi tipo di [[Variabili|variabile]], incluse le variabili `prompt`, `meta`, `selector` e `schema`.
- I filtri possono essere concatenati, ad es. `{{variable|filter1|filter2}}`, e vengono applicati nell'ordine in cui sono aggiunti.

## Date

Converti e modifica le date.

### `date`

Converte una data nel formato specificato, [vedi riferimento](https://day.js.org/docs/en/display/format).

- `{{date|date:"YYYY-MM-DD"}}` converte la data corrente in "YYYY-MM-DD".
- Usa `date:("outputFormat", "inputFormat")` per specificare il formato di input, ad es. `"12/01/2024"|date:("YYYY-MM-DD", "MM/DD/YYYY")` analizza "12/01/2024" e restituisce `"2024-12-01"`.

### `date_modify`

Modifica una data aggiungendo o sottraendo una quantità specificata di tempo, [vedi riferimento](https://day.js.org/docs/en/manipulate/add).

- `"2024-12-01"|date_modify:"+1 year"` restituisce `"2025-12-01"`
- `"2024-12-01"|date_modify:"- 2 months"` restituisce `"2024-10-01"`

### `duration`

Converte stringhe di durata ISO 8601 o secondi in stringhe di tempo formattate. Usa i token: `HH` (ore con zero iniziale), `H` (ore), `mm` (minuti con zero iniziale), `m` (minuti), `ss` (secondi con zero iniziale), `s` (secondi).

- `"PT1H30M"|duration:"HH:mm:ss"` restituisce `"01:30:00"`.
- `"3665"|duration:"H:mm:ss"` restituisce `"1:01:05"`.
- Impostare `duration` senza parametri usa `HH:mm:ss` sopra 1 ora, `mm:ss` sotto 1 ora.
- Supporta sia stringhe di durata ISO 8601 (ad es. `PT6702S`, `PT1H30M`) sia secondi semplici.

## Conversione e capitalizzazione del testo

Converti stringhe di testo da un formato a un altro.

### `camel`

Converte il testo in `camelCase`.

### `capitalize`

Rende maiuscolo il primo carattere del valore e converte il resto in minuscolo, ad es. `"hELLO wORLD"|capitalize` restituisce `"Hello world"`.

### `decode_uri`

Decodifica una stringa codificata URI, ad es. `"%E4%BD%A0%E5%A5%BD"|decode_uri` restituisce `"你好"`.

- `"hello%20world"|decode_uri` restituisce `"hello world"`.
- Restituisce la stringa originale se la decodifica fallisce (ad es. sequenze URI malformate).

### `kebab`

Converte il testo in `kebab-case`.

### `lower`

Converte il testo in `minuscolo`.

### `pascal`

Converte il testo in `PascalCase`.

### `replace`

Sostituisce le occorrenze del testo specificato:

- Sostituzione semplice: `"hello!"|replace:",":""` rimuove tutte le virgole.
- Sostituzioni multiple: `"hello world"|replace:("e":"a","o":"0")` restituisce `"hall0 w0rld"`.
- Le sostituzioni vengono applicate nell'ordine in cui sono specificate.
- Per rimuovere il testo specificato, usa `""` come valore di sostituzione.
- I caratteri speciali inclusi `: | { } ( ) ' "` devono essere preceduti da un backslash quando usati nel termine di ricerca, ad es. `\:` per cercare un due punti letterale.

Le espressioni regolari sono supportate usando la sintassi regex di JavaScript:

- Sostituisci tutte le vocali: `"hello world"|replace:"/[aeiou]/g":"*"` → `"h*ll* w*rld".`
- Senza distinzione maiuscole/minuscole: `"HELLO world"|replace:"/hello/i":"hi"` → `"hi world".`
- Regex multiple: `"hello world"|replace:("/[aeiou]/g":"*","/\s+/":"-")` → `"h*ll*-w*rld"`.
- Flag disponibili: `g` (globale), `i` (senza distinzione maiuscole/minuscole), `m` (multilinea), `s` (dotAll), `u` (unicode), `y` (sticky).

### `safe_name`

Converte il testo in un nome file sicuro.

- Per impostazione predefinita, `safe_name` applica le regole di sanitizzazione più conservative.
- È possibile applicare regole specifiche per sistema operativo con `safe_name:os` dove `os` può essere `windows`, `mac` o `linux` per applicare solo le regole di quel sistema operativo.

### `snake`

Converte il testo in `snake_case`.

### `title`

Converte il testo in `Iniziali Maiuscole`, ad es. `"hello world"|title` restituisce `"Hello World"`.

### `trim`

Rimuove gli spazi bianchi da entrambe le estremità di una stringa.

- `"  hello world  "|trim` restituisce `"hello world"`.

### `uncamel`

Converte camelCase o PascalCase in parole separate da spazi, che puoi formattare ulteriormente con altri filtri come `title` o `capitalize`.

- `"camelCase"|uncamel` restituisce `"camel case"`.
- `"PascalCase"|uncamel` restituisce `"pascal case"`.

### `upper`

Converte un valore in maiuscolo, ad es. `"hello world"|upper` restituisce `"HELLO WORLD"`.

## Formattazione del testo

Applica la [[Sintassi di formattazione di base|Sintassi di formattazione di base]] e la [[Sintassi di formattazione avanzata|Sintassi di formattazione avanzata]] al testo.

### `blockquote`

Aggiunge un prefisso di citazione Markdown (`> `) a ogni riga dell'input.

### `callout`

Crea un [[Riquadri|riquadro]] con parametri opzionali: `{{variable|callout:("type", "title", foldState)}}`

- `type` è il tipo di riquadro e il valore predefinito è "info"
- `title` è il titolo del riquadro e il valore predefinito è vuoto
- `foldState` è un booleano per impostare lo stato di compressione (true per compresso, false per espanso, null per non comprimibile)

### `footnote`

Converte un array o oggetto in un elenco di note a piè di pagina Markdown.

- Per gli array: `["first item","second item"]|footnote` restituisce: `[^1]: first item` ecc.
- Per gli oggetti: `{"First Note": "Content 1", "Second Note": "Content 2"}|footnote` restituisce: `[^first-note]: Content 1` ecc.

### `fragment_link`

Converte stringhe e array in collegamenti [frammento di testo](https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments). Il testo predefinito del collegamento è "link".

- `highlights|fragment_link` restituisce `Contenuto evidenziato [link](text-fragment-url)`
- `highlights|fragment_link:"custom title"` restituisce `Contenuto evidenziato [custom title](text-fragment-url)`

### `image`

Converte stringhe, array o oggetti nella sintassi immagine Markdown.

- Per le stringhe: `"image.jpg"|image:"alt text"` restituisce `![alt text](image.jpg)`.
- Per gli array: `["image1.jpg","image2.jpg"]|image:"alt text"` restituisce un array di stringhe immagine Markdown con lo stesso testo alternativo per tutte le immagini.
- Per gli oggetti: `{"image1.jpg": "Alt 1", "image2.jpg": "Alt 2"}|image` restituisce stringhe immagine Markdown con testo alternativo dalle chiavi dell'oggetto.

### `link`

Converte stringhe, array o oggetti nella sintassi collegamento Markdown (da non confondere con [[Filtri#`wikilink`|wikilink]]).

- Per le stringhe: `"url"|link:"author"` restituisce `[author](url)`.
- Per gli array: `["url1","url2"]|link:"author"` restituisce un array di collegamenti Markdown con lo stesso testo per tutti i collegamenti.
- Per gli oggetti: `{"url1": "Author 1", "url2": "Author 2"}|link` restituisce collegamenti Markdown con il testo che corrisponde alle chiavi dell'oggetto.

### `list`

Converte un array in un elenco Markdown.

- `list` per convertire in un elenco puntato.
- `list:task` per convertire in un elenco attività.
- `list:numbered` per convertire in un elenco numerato.
- `list:numbered-task` per convertire in un elenco attività con numeri.

### `table`

Converte un array o un array di oggetti in una [[Sintassi di formattazione avanzata#Tabelle|tabella Markdown]]:

- Per un array di oggetti, usa le chiavi dell'oggetto come intestazioni.
- Per un array di array, crea una tabella con ogni array annidato come riga.
- Per un array semplice, crea una tabella a colonna singola con "Value" come intestazione.
- È possibile specificare intestazioni di colonna personalizzate usando: `table:("Column 1", "Column 2", "Column 3")`. Quando usato con un array semplice, suddivide automaticamente i dati in righe in base al numero di colonne specificato.

### `wikilink`

Converte stringhe, array o oggetti nella sintassi [[Collega le note|collegamento wiki]] di Obsidian.

- Per le stringhe: `"page"|wikilink` restituisce `[[page]]`.
- Per le stringhe con alias: `"page"|wikilink:"alias"` restituisce `[[page|alias]]`.
- Per gli array: `["page1","page2"]|wikilink` restituisce un array di collegamenti wiki senza alias.
- Per gli array con alias: `["page1","page2"]|wikilink:"alias"` restituisce un array di collegamenti wiki con lo stesso alias per tutti i collegamenti.
- Per gli oggetti: `{"page1": "alias1", "page2": "alias2"}|wikilink` restituisce collegamenti wiki con le chiavi come nomi di pagina e i valori come alias.

## Numeri

### `calc`

Esegue operazioni aritmetiche di base sui numeri.

- Operatori supportati: `+`, `-`, `*`, `/`, `**` (o `^`) per l'esponenziazione.
- Esempio: `5|calc:"+10"` restituisce `15`.
- Esempio: `2|calc:"**3"` restituisce `8` (2 al cubo).
- Restituisce la stringa originale se l'input non è un numero.

### `length`

Restituisce la lunghezza di stringhe, array o il numero di chiavi negli oggetti.

- Per le stringhe: `"hello"|length` restituisce `5`.
- Per gli array: `["a","b","c"]|length` restituisce `3`.
- Per gli oggetti: `{"a":1,"b":2}|length` restituisce `2`.

### `round`

Arrotonda un numero all'intero più vicino o a un numero specificato di cifre decimali.

- Senza parametri: `3.7|round` restituisce `4`.
- Con cifre decimali specificate: `3.14159|round:2` restituisce `3.14`.

## Elaborazione HTML

Elabora contenuto HTML e converti HTML in Markdown. Nota che la [[Variabili|variabile]] di input deve contenere contenuto HTML, ad es. usando `{{fullHtml}}`, `{{contentHtml}}` o una variabile `{{selectorHtml:}}`.

### `markdown`

Converte una stringa in una stringa formattata in [[Obsidian Flavored Markdown]].

- Utile quando combinato con variabili che restituiscono HTML come `{{contentHtml}}`, `{{fullHtml}}` e variabili selettore come `{{selectorHtml:cssSelector}}`.

### `remove_attr`

Rimuove solo gli attributi HTML specificati dai tag.

- Esempio: `"<div class="test" id="example">Content</div>"|remove_attr:"class"` restituisce `<div id="example">Content</div>`.
- Attributi multipli: `{{fullHtml|remove_attr:("class,style,id")}}`

### `remove_html`

Rimuove gli elementi HTML specificati e il loro contenuto da una stringa.

- Supporta nome del tag, classe o id, ad es. `{{fullHtml|remove_html:("img,.class-name,#element-id")}}`
- Per rimuovere solo tag o attributi HTML senza rimuovere il contenuto, usa i filtri `strip_tags` o `strip_attr`.

### `remove_tags`

Rimuove solo i tag HTML specificati. Mantiene il contenuto dei tag.

- Esempio: `"<p>Hello <b>world</b>!</p>"|remove_tags:"b"` restituisce `"<p>Hello world!</p>"`.
- Tag multipli: `{{fullHtml|remove_tags:("a,em,strong")}}`

### `replace_tags`

Sostituisce i tag HTML, mantenendo il contenuto e gli attributi del tag.

- `{{fullHtml|replace_tags:"strong":"h2"}}` sostituisce tutti i tag `<strong>` con `<h2>`.

### `strip_attr`

Rimuove **tutti** gli attributi HTML da una stringa.

- Usa `strip_attr:("class, id")` per mantenere attributi specifici.
- Esempio: `"<div class="test" id="example">Content</div>"|strip_attr:("class")` restituisce `<div id="example">Content</div>`.

### `strip_md`

Rimuove **tutta** la formattazione Markdown e restituisce una stringa di testo normale, ad es. trasformando `**text**` in `text`.

- Trasforma il testo formattato in testo normale non formattato, inclusi grassetto, corsivo, evidenziazioni, intestazioni, codice, citazioni in blocco, tabelle, elenchi attività e collegamenti wiki.
- Rimuove completamente tabelle, note a piè di pagina, immagini ed elementi HTML.

### `strip_tags`

Rimuove **tutti** i tag HTML da una stringa. Il contenuto all'interno del tag viene preservato.

- Usa `strip_tags:("p,strong,em")` per mantenere tag specifici.
- Esempio: `"<p>Hello <b>world</b>!</p>"|strip_tags:("b")` restituisce `Hello <b>world</b>!`.

## Array e oggetti

Elabora array e oggetti.

### `first`

Restituisce il primo elemento di un array come stringa.

- `["a","b","c"]|first` restituisce `"a"`.
- Se l'input non è un array, restituisce l'input invariato.

### `join`

Combina gli elementi di un array in una stringa.

- `["a","b","c"]|join` restituisce `"a,b,c"`.
- È possibile specificare un separatore personalizzato: `["a","b","c"]|join:" "` restituisce `"a b c"`. Usa `join:"\n"` per separare gli elementi con un'interruzione di riga.
- Può essere utile dopo `split` o `slice`: `"a,b,c,d"|split:","|slice:1,3|join:" "` restituisce `"b c"`.

### `last`

Restituisce l'ultimo elemento di un array come stringa.

- `["a","b","c"]|last` restituisce `"c"`.
- Se l'input non è un array, restituisce l'input invariato.

### `map`

Applica una trasformazione a ogni elemento di un array usando la sintassi `map:item => item.property` o `map:item => item.nested.property` per proprietà annidate.

- `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => item.gem` restituisce `["obsidian", "amethyst"]`.
- Usa le parentesi per oggetti letterali ed espressioni complesse: `map:item => ({key: value})`, ad es.: `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => ({name: item.gem, color: item.color})` restituisce `[{name: "obsidian", color: "black"}, {name: "amethyst", color: "purple"}]`.

Sono supportate anche le stringhe letterali, ad es. `["rock", "pop"]|map:item => "genres/${item}"` restituisce `["genres/rock", "genres/pop"]`.

Combina `map` con il filtro `template`, ad es. `map:item => ({name: ${item.gem}, color: item.color})|template:"- ${name} is ${color}\n"`. Per le mappe con stringhe letterali, usa `${str}` nel modello, ad es. `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"`.

Nota: i filtri integrati non possono essere usati all'interno di `map`. Ciò significa che, ad esempio, il trim di ogni valore di un array non può essere fatto con `map`.

### `merge`

Aggiunge nuovi valori a un array.

- Per gli array: `["a","b"]|merge:("c","d")` restituisce `["a","b","c","d"]`.
- Valore singolo: `["a","b"]|merge:"c"` restituisce `["a","b","c"]`.
- Se l'input non è un array, crea un nuovo array: `"a"|merge:("b","c")` restituisce `["a","b","c"]`.
- I valori possono essere tra virgolette: `["a"]|merge:('b,"c,d",e')` restituisce `["a","b","c,d","e"]`.

### `nth`

Mantiene gli elementi alla posizione n-esima in un array usando la sintassi CSS nth-child e i pattern di gruppo. Tutte le posizioni sono basate su 1 (il primo elemento è alla posizione 1).

- `array|nth:3` mantiene solo il 3° elemento.
- `array|nth:3n` mantiene ogni 3° elemento (3, 6, 9, ecc.).
- `array|nth:n+3` mantiene il 3° e tutti gli elementi successivi.

Sintassi del pattern di gruppo per strutture ripetitive:

- `array|nth:1,2,3:5` mantiene le posizioni 1, 2, 3 da ogni gruppo di 5 elementi. Esempio: `[1,2,3,4,5,6,7,8,9,10]|nth:1,2,3:5` restituisce `[1,2,3,6,7,8]`.

### `object`

Manipola i dati degli oggetti:

- `object:array` converte un oggetto in un array di coppie chiave-valore.
- `object:keys` restituisce un array delle chiavi dell'oggetto.
- `object:values` restituisce un array dei valori dell'oggetto.
- Esempio: `{"a":1,"b":2}|object:array` restituisce `[["a",1],["b",2]]`.

### `slice`

Estrae una porzione di una stringa o array.

- Per le stringhe: `"hello"|slice:1,4` restituisce `"ell"`.
- Per gli array: `["a","b","c","d"]|slice:1,3` restituisce `["b","c"]`.
- Se viene fornito un solo parametro, estrae da quell'indice fino alla fine: `"hello"|slice:2` restituisce `"llo"`.
- Gli indici negativi contano dalla fine: `"hello"|slice:-3` restituisce `"llo"`.
- Il secondo parametro è esclusivo: `"hello"|slice:1,4` include i caratteri agli indici 1, 2 e 3.
- Usare un secondo parametro negativo esclude gli elementi dalla fine: `"hello"|slice:0,-2` restituisce `"hel"`.

### `split`

Divide una stringa in un array di sottostringhe.

- `"a,b,c"|split:","` restituisce `["a","b","c"]`.
- `"hello world"|split:" "` restituisce `["hello","world"]`.
- Se non viene fornito un separatore, divide su ogni carattere: `"hello"|split` restituisce `["h","e","l","l","o"]`.
- Le espressioni regolari possono essere usate come separatori: `"a1b2c3"|split:[0-9]` restituisce `["a","b","c"]`.

### `template`

Applica una stringa modello a un oggetto o array di oggetti, usando la sintassi `object|template:"Template with ${variable}"`.

- Accesso alle proprietà annidate: `{"gem":{"name":"Obsidian"}}|template:"${gem.name}"` restituisce `"Obsidian"`.
- Per gli oggetti: `{"gem":"obsidian","hardness":5}|template:"${gem} has a hardness of ${hardness}"` restituisce `"obsidian has a hardness of 5"`.
- Per gli array: `[{"gem":"obsidian","hardness":5},{"gem":"amethyst","hardness":7}]|template:"- ${gem} has a hardness of ${hardness}\n"` restituisce un elenco formattato.

Funziona con stringhe letterali da `map` usando `${str}`:

- Esempio: `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"` restituisce un elenco formattato.

### `unique`

Rimuove i valori duplicati da array e oggetti.

- Per array di primitivi: `[1,2,2,3,3]|unique` restituisce `[1,2,3]`.
- Per array di oggetti: `[{"a":1},{"b":2},{"a":1}]|unique` restituisce `[{"a":1},{"b":2}]`.
- Per gli oggetti rimuove le proprietà con valori duplicati, mantenendo la chiave dell'ultima occorrenza.
- Per le stringhe restituisce l'input invariato.
