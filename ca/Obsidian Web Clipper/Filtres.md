---
permalink: web-clipper/filters
---
Els filtres permeten modificar les [[Obsidian Web Clipper/Variables|variables]] a les [[Obsidian Web Clipper/Plantilles|plantilles del Web Clipper]]. Els filtres s'apliquen a les variables mitjançant la sintaxi `{{variable|filtre}}`.

- Els filtres funcionen per a qualsevol tipus de [[Obsidian Web Clipper/Variables|variable]], incloent-hi les variables `prompt`, `meta`, `selector` i `schema`.
- Els filtres es poden encadenar, p. ex. `{{variable|filtre1|filtre2}}`, i s'apliquen en l'ordre en què s'afegeixen.

## Dates

Converteix i modifica dates.

### `date`

Converteix una data al format especificat, [consulta la referència](https://day.js.org/docs/en/display/format).

- `{{date|date:"YYYY-MM-DD"}}` converteix la data actual a "YYYY-MM-DD".
- Utilitza `date:("formatSortida", "formatEntrada")` per especificar el format d'entrada, p. ex. `"12/01/2024"|date:("YYYY-MM-DD", "MM/DD/YYYY")` analitza "12/01/2024" i retorna `"2024-12-01"`.

### `date_modify`

Modifica una data afegint o restant una quantitat de temps especificada, [consulta la referència](https://day.js.org/docs/en/manipulate/add).

- `"2024-12-01"|date_modify:"+1 year"` retorna `"2025-12-01"`
- `"2024-12-01"|date_modify:"- 2 months"` retorna `"2024-10-01"`

### `duration`

Converteix cadenes de durada ISO 8601 o segons en cadenes de temps formatades. Utilitza els tokens: `HH` (hores amb farciment), `H` (hores), `mm` (minuts amb farciment), `m` (minuts), `ss` (segons amb farciment), `s` (segons).

- `"PT1H30M"|duration:"HH:mm:ss"` retorna `"01:30:00"`.
- `"3665"|duration:"H:mm:ss"` retorna `"1:01:05"`.
- Establir `duration` sense cap paràmetre utilitza `HH:mm:ss` per sobre d'1 hora, `mm:ss` per sota d'1 hora.
- Admet tant cadenes de durada ISO 8601 (p. ex., `PT6702S`, `PT1H30M`) com segons simples.

## Conversió i majúscules de text

Converteix cadenes de text d'un format a un altre.

### `camel`

Converteix el text a `camelCase`.

### `capitalize`

Posa en majúscula el primer caràcter del valor i converteix la resta a minúscules, p. ex. `"hELLO wORLD"|capitalize` retorna `"Hello world"`.

### `decode_uri`

Descodifica una cadena codificada com a URI, p. ex. `"%E4%BD%A0%E5%A5%BD"|decode_uri` retorna `"你好"`.

- `"hello%20world"|decode_uri` retorna `"hello world"`.
- Retorna la cadena original si la descodificació falla (p. ex. seqüències URI malformades).

### `encode_uri`

Codifica text per al seu ús en una URL, incloent-hi caràcters reservats com `/`, `?` i `&`.

- `"hello world/page"|encode_uri` retorna `hello%20world%2Fpage`.

### `indent`

Sagna cada línia no buida amb espais. Per defecte utilitza dos espais.

- `indent:4` sagna cada línia amb quatre espais.
- `indent:0` deixa el text sense canvis.

### `kebab`

Converteix el text a `kebab-case`.

### `lower`

Converteix el text a `minúscules`.

### `pascal`

Converteix el text a `PascalCase`.

### `replace`

Substitueix les aparicions del text especificat:

- Substitució simple: `"hello!"|replace:",":""` elimina totes les comes.
- Substitucions múltiples: `"hello world"|replace:("e":"a","o":"0")` retorna `"hall0 w0rld"`.
- Les substitucions s'apliquen en l'ordre en què s'especifiquen.
- Per eliminar text especificat, utilitza `""` com a valor de substitució.
- Els caràcters especials incloent-hi `: | { } ( ) ' "` s'han d'escapar amb una barra invertida quan s'utilitzen en el terme de cerca, p. ex. `\:` per cercar un dos punts literal.

Les expressions regulars estan suportades amb la sintaxi regex de JavaScript:

- Substituir totes les vocals: `"hello world"|replace:"/[aeiou]/g":"*"` → `"h*ll* w*rld".`
- Insensible a majúscules: `"HELLO world"|replace:"/hello/i":"hi"` → `"hi world".`
- Regex múltiples: `"hello world"|replace:("/[aeiou]/g":"*","/\s+/":"-")` → `"h*ll*-w*rld"`.
- Flags disponibles: `g` (global), `i` (insensible a majúscules), `m` (multilínia), `s` (dotAll), `u` (unicode), `y` (sticky).

### `safe_name`

Converteix el text a un nom de fitxer segur.

- Per defecte, `safe_name` aplica les regles de sanejament més conservadores.
- Es poden aplicar regles específiques del sistema operatiu amb `safe_name:os` on `os` pot ser `windows`, `mac` o `linux` per aplicar només les regles d'aquell sistema operatiu.

### `snake`

Converteix el text a `snake_case`.

### `title`

Converteix el text a `Majúscules De Títol`, p. ex. `"hello world"|title` retorna `"Hello World"`.

### `trim`

Elimina els espais en blanc dels dos extrems d'una cadena.

- `"  hello world  "|trim` retorna `"hello world"`.

### `truncate`

Escurça el text a un nombre de caràcters i l'acaba amb `…`. El sufix compta dins del límit.

- `"A concise introduction"|truncate:10` retorna `A concise…`.
- `"A concise introduction"|truncate:(12, "...")` retorna `A concise...`.
- `"A concise introduction"|truncate:(9, "")` retorna `A concise`.

### `truncatewords`

Escurça el text a un nombre de paraules i afegeix `…`.

- `"A concise introduction to Knap"|truncatewords:3` retorna `A concise introduction…`.
- `"A concise introduction to Knap"|truncatewords:(3, "")` retorna `A concise introduction`.

### `unescape`

Converteix cometes escapades i seqüències de salt de línia en caràcters literals.

- `"Line 1\\nLine 2"|unescape` retorna el text en dues línies.
- `'He said \\"hello\\"'|unescape` retorna `He said "hello"`.

### `uncamel`

Converteix camelCase o PascalCase a paraules separades per espais, que pots formatar encara més amb altres filtres com `title` o `capitalize`.

- `"camelCase"|uncamel` retorna `"camel case"`.
- `"PascalCase"|uncamel` retorna `"pascal case"`.

### `upper`

Converteix un valor a majúscules, p. ex. `"hello world"|upper` retorna `"HELLO WORLD"`.

## Format de text

Aplica la [[Sintaxi de format bàsic]] i la [[Sintaxi de format avançat]] al text.

### `blockquote`

Afegeix un prefix de cita Markdown (`> `) a cada línia de l'entrada.

### `bold`

Envolta el text amb marcadors de negreta.

- `"Important"|bold` retorna `**Important**`.
- `"Important"|bold:_` retorna `__Important__`.

### `callout`

Crea un [[Destacats|bloc destacat]] amb paràmetres opcionals: `{{variable|callout:("type", "title", foldState)}}`

- `type` és el tipus de bloc destacat, i per defecte és "info"
- `title` és el títol del bloc destacat, i per defecte és buit
- `foldState` és un booleà per establir l'estat de plegat (true per plegar, false per desplegar, null per no plegable)

### `code`

Formata el text com a codi en línia. El text multilínia, o un paràmetre de llenguatge, crea un bloc de codi tancat.

- `"const answer = 42"|code` retorna `` `const answer = 42` ``.
- `"const answer = 42"|code:"typescript"` retorna un bloc de codi marcat com a `typescript`.

### `code_block`

Sempre crea un bloc de codi tancat, amb un llenguatge opcional, p. ex. `code_block:"typescript"`.

### `comment`

Envolta el text amb marcadors de [[Sintaxi de format bàsic#Comentaris|comentari]].

- `"Hidden note"|comment` retorna `%%Hidden note%%`.

### `embed`

Converteix cadenes, matrius o objectes en [[Incrustar fitxers|incrustacions]].

- Per a cadenes: `"diagram.png"|embed` retorna `![[diagram.png]]`.
- Per a cadenes amb àlies: `"Project Atlas"|embed:"Preview"` retorna `![[Project Atlas|Preview]]`.
- Per a objectes: `{"one.md": "One", "two.md": "Two"}|embed` retorna incrustacions amb les claus com a fitxers i els valors com a àlies.

### `escape_md`

Afegeix una barra invertida davant de la puntuació Markdown perquè es mostri com a text sense format.

- `"# Draft *title*"|escape_md` retorna `\# Draft \*title\*`.

### `footnote`

Converteix una matriu o objecte en una llista de notes a peu de pàgina Markdown.

- Per a matrius: `["first item","second item"]|footnote` retorna: `[^1]: first item` etc.
- Per a objectes: `{"First Note": "Content 1", "Second Note": "Content 2"}|footnote` retorna: `[^first-note]: Content 1` etc.

### `fragment_link`

Converteix cadenes i matrius en enllaços de [fragment de text](https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments). Per defecte utilitza "link" com a text de l'enllaç.

- `highlights|fragment_link` retorna `Highlight content [link](text-fragment-url)`
- `highlights|fragment_link:"custom title"` retorna `Highlight content [custom title](text-fragment-url)`

### `h1` a `h6`

Converteix cada línia no buida en un encapçalament d'aquell nivell.

- `"Introduction"|h2` retorna `## Introduction`.

### `hard_break`

Afegeix dos espais abans de cada salt de línia simple, perquè els salts de línia es mostrin en la vista de lectura. Les línies en blanc entre paràgrafs es mantenen tal com són.

### `highlight`

Envolta el text amb marcadors de ressaltat.

- `"Remember this"|highlight` retorna `==Remember this==`.
- Afegeix un [[Sintaxi de format bàsic#Colors de ressaltat|color de ressaltat]] amb `red`, `orange`, `yellow`, `green`, `blue` o `purple`, p. ex. `"Remember this"|highlight:blue` retorna `==🔵Remember this==`.

### `hr`

Afegeix una línia horitzontal (`---`) després del text, separada per una línia en blanc.

- `"Section end"|hr` afegeix la línia després del text.
- `hr:before` l'afegeix abans del text, i `hr:both` l'afegeix a ambdós costats.

### `image`

Converteix cadenes, matrius o objectes en sintaxi d'imatge Markdown.

- Per a cadenes: `"image.jpg"|image:"alt text"` retorna `![alt text](image.jpg)`.
- Per a matrius: `["image1.jpg","image2.jpg"]|image:"alt text"` retorna una matriu de cadenes d'imatge Markdown amb el mateix text alternatiu per a totes les imatges.
- Per a objectes: `{"image1.jpg": "Alt 1", "image2.jpg": "Alt 2"}|image` retorna cadenes d'imatge Markdown amb el text alternatiu de les claus de l'objecte.

### `italic`

Envolta el text amb marcadors de cursiva.

- `"Emphasized"|italic` retorna `*Emphasized*`.
- `"Emphasized"|italic:_` retorna `_Emphasized_`.

### `link`

Converteix cadenes, matrius o objectes en sintaxi d'enllaç Markdown (no confondre amb [[Filtres#`wikilink`|wikilink]]).

- Per a cadenes: `"url"|link:"author"` retorna `[author](url)`.
- Per a matrius: `["url1","url2"]|link:"author"` retorna una matriu d'enllaços Markdown amb el mateix text per a tots els enllaços.
- Per a objectes: `{"url1": "Author 1", "url2": "Author 2"}|link` retorna enllaços Markdown amb el text que coincideix amb les claus de l'objecte.

### `list`

Converteix una matriu en una llista Markdown.

- `list` per convertir a una llista amb vinyetes.
- `list:task` per convertir a una llista de tasques.
- `list:numbered` per convertir a una llista numerada.
- `list:numbered-task` per convertir a una llista de tasques amb números.

### `math`

Formata el text com a [[Sintaxi de format avançat#Matemàtiques|matemàtiques]] en línia. El text multilínia es converteix en un bloc matemàtic.

- `"x^2 + y^2"|math` retorna `$x^2 + y^2$`.

### `math_block`

Sempre crea un bloc matemàtic, amb `$$` a les línies abans i després del text.

### `strike`

Envolta el text amb marcadors de ratllat.

- `"Removed"|strike` retorna `~~Removed~~`.

### `table`

Converteix una matriu o matriu d'objectes en una [[Sintaxi de format avançat#Taules|taula Markdown]]:

- Per a una matriu d'objectes, utilitza les claus de l'objecte com a capçaleres.
- Per a una matriu de matrius, crea una taula amb cada matriu imbricada com a fila.
- Per a una matriu simple, crea una taula d'una sola columna amb "Value" com a capçalera.
- Es poden especificar capçaleres de columna personalitzades amb: `table:("Columna 1", "Columna 2", "Columna 3")`. Quan s'utilitza amb una matriu simple, divideix automàticament les dades en files segons el nombre de columnes especificades.

### `table_pretty`

Funciona com [[Filtres#`table`|table]], i farceix les columnes a amplades iguals perquè la taula s'alineï en mode de codi font.

### `wikilink`

Converteix cadenes, matrius o objectes en sintaxi d'[[Enllaçar notes|enllaç wiki]] d'Obsidian.

- Per a cadenes: `"page"|wikilink` retorna `[[page]]`.
- Per a cadenes amb àlies: `"page"|wikilink:"alias"` retorna `[[page|alias]]`.
- Per a matrius: `["page1","page2"]|wikilink` retorna una matriu d'enllaços wiki sense àlies.
- Per a matrius amb àlies: `["page1","page2"]|wikilink:"alias"` retorna una matriu d'enllaços wiki amb el mateix àlies per a tots els enllaços.
- Per a objectes: `{"page1": "alias1", "page2": "alias2"}|wikilink` retorna enllaços wiki amb les claus com a noms de pàgina i els valors com a àlies.

## Números

`calc`, `round` i `length` retornen números, preservant el seu tipus en filtres posteriors i assignacions de variables. `number_format` retorna text.

### `calc`

Realitza operacions aritmètiques bàsiques amb números.

- Admet els operadors: `+`, `-`, `*`, `/`, `**` (o `^`) per a l'exponenciació.
- Exemple: `5|calc:"+10"` retorna `15`.
- Exemple: `2|calc:"**3"` retorna `8` (2 al cub).
- Retorna l'entrada original si està buida, no és un número o el càlcul produeix un resultat no finit.

### `length`

Retorna la longitud de cadenes, matrius o el nombre de claus en objectes.

- Per a cadenes: `"hello"|length` retorna `5`.
- Per a matrius: `["a","b","c"]|length` retorna `3`.
- Una matriu amb un element encara compta com un: `[42]|length` retorna `1`.
- Per a objectes: `{"a":1,"b":2}|length` retorna `2`.

### `number_format`

Formata un número amb un nombre especificat de decimals i separadors de decimals i milers opcionals.

- `1234.567|number_format:2` retorna `"1,234.57"`.
- `1234.567|number_format:(2,",",".")` retorna `"1.234,57"`.
- Les matrius i objectes es formaten recursivament.

### `round`

Arrodoneix un número a l'enter més proper o a un nombre especificat de decimals.

- Sense paràmetres: `3.7|round` retorna `4`.
- Amb decimals especificats: `3.14159|round:2` retorna `3.14`.
- Les matrius i objectes conserven la seva estructura, amb els valors numèrics arrodonits recursivament. Les cadenes numèriques es converteixen en números, p. ex. `["1.234","2.345"]|round:2` retorna `[1.23,2.35]`.
- L'entrada no vàlida com `"42abc"` es conserva en lloc de convertir-se en un número.

## Processament d'HTML

Processa contingut HTML i converteix HTML a Markdown. Tingueu en compte que la vostra [[Obsidian Web Clipper/Variables|variable]] d'entrada ha de contenir contingut HTML, p. ex. utilitzant `{{fullHtml}}`, `{{contentHtml}}` o una variable `{{selectorHtml:}}`.

### `html_to_json`

Converteix HTML en JSON estructurat que conté l'etiqueta, els atributs i els fills de cada element. Els nodes de text utilitzen el format `{"type":"text","content":"..."}`. Això es pot combinar amb filtres com `map`, `object` i `template` per reformar l'HTML extret.

### `markdown`

Converteix una cadena a una cadena formatada en [[Obsidian Flavored Markdown]].

- Útil quan es combina amb variables que retornen HTML com `{{contentHtml}}`, `{{fullHtml}}`, i variables de selector com `{{selectorHtml:cssSelector}}`.

### `remove_attr`

Elimina només els atributs HTML especificats de les etiquetes.

- Exemple: `'<div class="test" id="example">Content</div>'|remove_attr:"class"` retorna `<div id="example">Content</div>`.
- Atributs múltiples: `{{fullHtml|remove_attr:("class,style,id")}}`

### `remove_html`

Elimina els elements HTML especificats i el seu contingut d'una cadena.

- Admet nom d'etiqueta, classe o id, p. ex. `{{fullHtml|remove_html:("img,.class-name,#element-id")}}`
- Per eliminar només etiquetes o atributs HTML sense eliminar el contingut, utilitza els filtres `strip_tags` o `strip_attr`.

### `remove_tags`

Elimina només les etiquetes HTML especificades. Conserva el contingut de les etiquetes.

- Exemple: `"<p>Hello <b>world</b>!</p>"|remove_tags:"b"` retorna `"<p>Hello world!</p>"`.
- Etiquetes múltiples: `{{fullHtml|remove_tags:("a,em,strong")}}`

### `replace_tags`

Substitueix etiquetes HTML, mantenint el contingut i els atributs de l'etiqueta.

- `{{fullHtml|replace_tags:"strong":"h2"}}` substitueix totes les etiquetes `<strong>` per `<h2>`.

### `strip_attr`

Elimina **tots** els atributs HTML d'una cadena.

- Utilitza `strip_attr:("class, id")` per conservar atributs específics.
- Exemple: `'<div class="test" id="example">Content</div>'|strip_attr:("class")` retorna `<div class="test">Content</div>`.

### `strip_md`

Elimina **tot** el format Markdown i retorna una cadena de text sense format, p. ex. convertint `**text**` en `text`.

- Converteix text formatat en text sense format, incloent-hi negreta, cursiva, ressaltats, encapçalaments, codi, cites en bloc, taules, llistes de tasques i enllaços wiki.
- Elimina completament taules, notes a peu de pàgina, imatges i elements HTML.
- `stripmd` és un àlies.

### `strip_tags`

Elimina **totes** les etiquetes HTML d'una cadena. El contingut dins de l'etiqueta es conserva.

- Utilitza `strip_tags:("p,strong,em")` per conservar etiquetes específiques.
- Exemple: `"<p>Hello <b>world</b>!</p>"|strip_tags:("b")` retorna `Hello <b>world</b>!`.

## Matrius i objectes

Processa matrius i objectes.

### `compact`

Elimina valors `null` i cadenes buides de matrius i objectes. Conserva `0` i `false`.

- `[null,"","one",0,false,"two"]|compact` retorna `["one",0,false,"two"]`.

### `first`

Retorna el primer element d'una matriu, conservant el seu tipus. Els objectes i matrius imbricades es mostren com a JSON.

- `["a","b","c"]|first` retorna `"a"`.
- Una matriu buida retorna `null`, que es mostra com a text buit.
- Si l'entrada no és una matriu, retorna l'entrada sense canvis.

### `join`

Combina elements d'una matriu en una cadena.

- `["a","b","c"]|join` retorna `"a,b,c"`.
- Es pot especificar un separador personalitzat: `["a","b","c"]|join:" "` retorna `"a b c"`. Utilitza `join:"\n"` per separar elements amb un salt de línia.
- Pot ser útil després de `split` o `slice`: `"a,b,c,d"|split:","|slice:1,3|join:" "` retorna `"b c"`.

### `last`

Retorna l'últim element d'una matriu, conservant el seu tipus. Els objectes i matrius imbricades es mostren com a JSON.

- `["a","b","c"]|last` retorna `"c"`.
- Una matriu buida retorna `null`, que es mostra com a text buit.
- Si l'entrada no és una matriu, retorna l'entrada sense canvis.

### `map`

Aplica una transformació a cada element d'una matriu amb la sintaxi `map:item => item.property` o `map:item => item.nested.property` per a propietats imbricades.

- `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => item.gem` retorna `["obsidian", "amethyst"]`.
- Utilitza parèntesis per a literals d'objecte i expressions complexes: `map:item => ({key: value})`, p. ex.: `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => ({name: item.gem, color: item.color})` retorna `[{name: "obsidian", color: "black"}, {name: "amethyst", color: "purple"}]`.

Els literals de cadena també estan suportats, p. ex. `["rock", "pop"]|map:item => "genres/${item}"` retorna `["genres/rock", "genres/pop"]`.

Combina `map` amb el filtre `template`, p. ex. `map:item => ({name: ${item.gem}, color: item.color})|template:"- ${name} is ${color}\n"`. Per a mapes de literals de cadena, utilitza `${str}` a la plantilla, p. ex. `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"`.

Nota: Els filtres integrats no es poden utilitzar dins de `map`. Això significa que, per exemple, retallar cada valor d'una matriu no es pot fer amb `map`.

### `merge`

Afegeix nous valors a una matriu.

- Per a matrius: `["a","b"]|merge:("c","d")` retorna `["a","b","c","d"]`.
- Valor únic: `["a","b"]|merge:"c"` retorna `["a","b","c"]`.
- Si l'entrada no és una matriu, crea una nova matriu: `"a"|merge:("b","c")` retorna `["a","b","c"]`.
- Els valors es poden posar entre cometes: `["a"]|merge:('b,"c,d",e')` retorna `["a","b","c,d","e"]`.

### `nth`

Conserva els elements n-èssims d'una matriu amb sintaxi d'estil CSS nth-child i patrons de grup. Totes les posicions són basades en 1 (el primer element és la posició 1).

- `array|nth:3` conserva només el 3r element.
- `array|nth:3n` conserva cada 3r element (3, 6, 9, etc.).
- `array|nth:n+3` conserva el 3r element i tots els següents.

El resultat continua sent una matriu per a filtres de col·lecció posteriors. Si conté un únic valor primitiu, aquest valor es mostra sense claudàtors de matriu i es passa directament als filtres de text, p. ex. `[1,2]|nth:2` mostra `2`.

Sintaxi de patró de grup per a estructures repetitives:

- `array|nth:1,2,3:5` conserva les posicions 1, 2, 3 de cada grup de 5 elements. Exemple: `[1,2,3,4,5,6,7,8,9,10]|nth:1,2,3:5` retorna `[1,2,3,6,7,8]`.

### `object`

Manipula dades d'objectes:

- `object:array` converteix un objecte en una matriu de parells clau-valor.
- `object:keys` retorna una matriu de les claus de l'objecte.
- `object:values` retorna una matriu dels valors de l'objecte.
- Exemple: `{"a":1,"b":2}|object:array` retorna `[["a",1],["b",2]]`.

### `parse_json`

Analitza text JSON en un valor tipat. Utilitza'l abans de filtres de col·lecció o serialització YAML quan una variable conté text JSON, p. ex. `'[1,2]'|parse_json|yaml:flow` retorna `[1,2]`.

### `reverse`

Inverteix cadenes, matrius i l'ordre de les entrades d'objectes.

- `"abc"|reverse` retorna `"cba"`.
- `["a","b","c"]|reverse` retorna `["c","b","a"]`.

### `slice`

Extreu una porció d'una cadena o matriu.

- Per a cadenes: `"hello"|slice:1,4` retorna `"ell"`.
- Per a matrius: `["a","b","c","d"]|slice:1,3` retorna `["b","c"]`.
- Si només es proporciona un paràmetre, retalla des d'aquest índex fins al final: `"hello"|slice:2` retorna `"llo"`.
- Els índexs negatius compten des del final: `"hello"|slice:-3` retorna `"llo"`.
- El segon paràmetre és exclusiu: `"hello"|slice:1,4` inclou els caràcters als índexs 1, 2 i 3.
- Utilitzar un segon paràmetre negatiu exclou elements des del final: `"hello"|slice:0,-2` retorna `"hel"`.

### `sort`

Ordena una matriu en ordre ascendent. Els números s'ordenen per valor.

- `[10,2,1]|sort` retorna `[1,2,10]`.
- `["a","c","b"]|sort:"desc"` retorna `["c","b","a"]`.
- Per a matrius d'objectes, passa una propietat: `[{"name":"Lin"},{"name":"Ada"}]|sort:"name"` retorna `[{"name":"Ada"},{"name":"Lin"}]`. Utilitza `sort:("name", "desc")` per invertir-ho. Els elements sense la propietat van al final.

### `split`

Divideix una cadena en una matriu de subcadenes.

- `"a,b,c"|split:","` retorna `["a","b","c"]`.
- `"hello world"|split:" "` retorna `["hello","world"]`.
- Si no es proporciona cap separador, divideix en cada caràcter: `"hello"|split` retorna `["h","e","l","l","o"]`.
- Es poden utilitzar expressions regulars com a separadors: `"a1b2c3"|split:[0-9]` retorna `["a","b","c",""]`. L'últim element és buit perquè la cadena acaba amb un separador.

### `sum`

Suma els números d'una matriu. El text que no és un número es salta, i una matriu buida retorna `0`.

- `[10,"2.5","","none"]|sum` retorna `12.5`.
- Per a matrius d'objectes, passa una propietat: `[{"amount":10},{"amount":"2.5"}]|sum:"amount"` retorna `12.5`.

### `template`

Aplica una cadena de plantilla a un objecte o matriu d'objectes, amb la sintaxi `object|template:"Plantilla amb ${variable}"`.

- Accedeix a propietats imbricades: `{"gem":{"name":"Obsidian"}}|template:"${gem.name}"` retorna `"Obsidian"`.
- Per a objectes: `{"gem":"obsidian","hardness":5}|template:"${gem} has a hardness of ${hardness}"` retorna `"obsidian has a hardness of 5"`.
- Per a matrius: `[{"gem":"obsidian","hardness":5},{"gem":"amethyst","hardness":7}]|template:"- ${gem} has a hardness of ${hardness}\n"` retorna una llista formatada.

Funciona amb literals de cadena de `map` amb `${str}`:

- Exemple: `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"` retorna una llista formatada.

### `unique`

Elimina valors duplicats de matrius i objectes.

- Per a matrius de primitius: `[1,2,2,3,3]|unique` retorna `[1,2,3]`.
- Per a matrius d'objectes: `[{"a":1},{"b":2},{"a":1}]|unique` retorna `[{"a":1},{"b":2}]`.
- Per a objectes, elimina propietats amb valors duplicats, conservant la clau de l'última aparició.
- Per a cadenes, retorna l'entrada sense canvis.

### `where`

Conserva els elements de la matriu la propietat dels quals coincideix amb un valor. El tipus també ha de coincidir, per tant el número `1` no coincideix amb el text `"1"`.

- `[{"title":"One","published":true},{"title":"Two","published":false}]|where:("published", true)` retorna `[{"title":"One","published":true}]`.
- Utilitza un camí amb punts per a propietats imbricades, p. ex. `where:("author.name", "Ada")`.

## YAML

### `yaml`

Formata un valor com a YAML. Les cadenes sempre van entre cometes, incloent-hi cadenes com `"null"`, `"true"` i `"123"`. Els nulls, booleans i números reals es mantenen sense cometes.

- Les matrius i objectes utilitzen l'estil de bloc per defecte. Utilitza `yaml:flow` per a col·leccions compactes en línia.
- Utilitza `parse_json` primer per serialitzar text JSON com a dades estructurades en lloc d'una cadena entre cometes.

### `yaml_property`

Formata una propietat YAML amb nom, incloent-hi el sagnat per a matrius i objectes. Les cadenes i valors tipats segueixen les mateixes regles que `yaml`.

- `"42.567"|round:2|yaml_property:"price"` retorna `price: 42.57`.
