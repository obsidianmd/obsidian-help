---
permalink: web-clipper/filters
---
[[Suodattimet]] mahdollistavat [[muuttujat|muuttujien]] muokkaamisen [[Obsidian Web Clipper/Mallineet|Web Clipper -mallineissa]]. Suodattimia sovelletaan muuttujiin syntaksilla `{{variable|filter}}`.

- Suodattimet toimivat kaikenlaisille [[Muuttujat|muuttujille]], mukaan lukien `prompt`-, `meta`-, `selector`- ja `schema`-muuttujat.
- Suodattimia voidaan ketjuttaa, esim. `{{variable|filter1|filter2}}`, ja ne sovelletaan lisäysjärjestyksessä.

## Päivämäärät

Muunna ja muokkaa päivämääriä.

### `date`

Muuntaa päivämäärän määritettyyn muotoon, [katso viite](https://day.js.org/docs/en/display/format).

- `{{date|date:"YYYY-MM-DD"}}` muuntaa nykyisen päivämäärän muotoon "YYYY-MM-DD".
- Käytä `date:("outputFormat", "inputFormat")` syötemuodon määrittämiseen, esim. `"12/01/2024"|date:("YYYY-MM-DD", "MM/DD/YYYY")` jäsentää "12/01/2024" ja palauttaa `"2024-12-01"`.

### `date_modify` 

Muokkaa päivämäärää lisäämällä tai vähentämällä määritetyn aikamäärän, [katso viite](https://day.js.org/docs/en/manipulate/add).

- `"2024-12-01"|date_modify:"+1 year"` palauttaa `"2025-12-01"`
- `"2024-12-01"|date_modify:"- 2 months"` palauttaa `"2024-10-01"`

### `duration`

Muuntaa ISO 8601 -kestomerkkijonot tai sekunnit muotoilluiksi aikamerkkijonoiksi. Käyttää tunnuksia: `HH` (täydennetyt tunnit), `H` (tunnit), `mm` (täydennetyt minuutit), `m` (minuutit), `ss` (täydennetyt sekunnit), `s` (sekunnit).

- `"PT1H30M"|duration:"HH:mm:ss"` palauttaa `"01:30:00"`.
- `"3665"|duration:"H:mm:ss"` palauttaa `"1:01:05"`.
- `duration` ilman parametreja käyttää `HH:mm:ss` yli tunnin kestoille ja `mm:ss` alle tunnin kestoille.
- Tukee sekä ISO 8601 -kestomerkkijonoja (esim. `PT6702S`, `PT1H30M`) että pelkkiä sekunteja.

## Tekstin muunnos ja kirjainkoko

Muunna tekstimerkkijonoja muodosta toiseen.

### `camel`

Muuntaa tekstin `camelCase`-muotoon.

### `capitalize`

Muuttaa arvon ensimmäisen merkin isoksi kirjaimeksi ja loput pieniksi kirjaimiksi, esim. `"hELLO wORLD"|capitalize` palauttaa `"Hello world"`.

### `decode_uri`

Purkaa URI-koodatun merkkijonon, esim. `"%E4%BD%A0%E5%A5%BD"|decode_uri` palauttaa `"你好"`.

- `"hello%20world"|decode_uri` palauttaa `"hello world"`.
- Palauttaa alkuperäisen merkkijonon, jos purkaminen epäonnistuu (esim. virheelliset URI-sekvenssit).

### `kebab`

Muuntaa tekstin `kebab-case`-muotoon.

### `lower`

Muuntaa tekstin `pieniksi kirjaimiksi`.

### `pascal`

Muuntaa tekstin `PascalCase`-muotoon.

### `replace`

Korvaa määritetyn tekstin esiintymät:

- Yksinkertainen korvaus: `"hello!"|replace:",":""` poistaa kaikki pilkut.
- Useat korvaukset: `"hello world"|replace:("e":"a","o":"0")` palauttaa `"hall0 w0rld"`.
- Korvaukset sovelletaan määritetyssä järjestyksessä.
- Tekstin poistamiseen käytä `""` korvausarvona.
- Erikoismerkit kuten `: | { } ( ) ' "` tulee suojata kenoviivalla hakutermissä, esim. `\:` kirjaimellisen kaksoispisteen hakemiseen.

Säännölliset lausekkeet ovat tuettuja JavaScript-syntaksilla:

- Korvaa kaikki vokaalit: `"hello world"|replace:"/[aeiou]/g":"*"` → `"h*ll* w*rld".`
- Kirjainkoko ei merkitse: `"HELLO world"|replace:"/hello/i":"hi"` → `"hi world".`
- Useat säännölliset lausekkeet: `"hello world"|replace:("/[aeiou]/g":"*","/\s+/":"-")` → `"h*ll*-w*rld"`.
- Käytettävissä olevat liput: `g` (globaali), `i` (kirjainkoko ei merkitse), `m` (monirivinen), `s` (dotAll), `u` (unicode), `y` (sticky).

### `safe_name`

Muuntaa tekstin turvalliseksi tiedostonimeksi.

- Oletuksena `safe_name` käyttää konservatiivisimpia puhdistussääntöjä.
- Käyttöjärjestelmäkohtaiset säännöt voidaan ottaa käyttöön `safe_name:os`-syntaksilla, jossa `os` voi olla `windows`, `mac` tai `linux` soveltaakseen vain kyseisen käyttöjärjestelmän sääntöjä.

### `snake`

Muuntaa tekstin `snake_case`-muotoon.

### `title`

Muuntaa tekstin `Otsikkokirjainkokomuotoon`, esim. `"hello world"|title` palauttaa `"Hello World"`.

### `trim`

Poistaa tyhjät merkit merkkijonon molemmista päistä.

- `"  hello world  "|trim` palauttaa `"hello world"`.

### `uncamel`

Muuntaa camelCase- tai PascalCase-muodon välilyönnein erotetuiksi sanoiksi, joita voit edelleen muotoilla muilla suodattimilla kuten `title` tai `capitalize`.

- `"camelCase"|uncamel` palauttaa `"camel case"`.
- `"PascalCase"|uncamel` palauttaa `"pascal case"`.

### `upper`

Muuntaa arvon isoiksi kirjaimiksi, esim. `"hello world"|upper` palauttaa `"HELLO WORLD"`.

## Tekstin muotoilu

Sovella [[Muotoilun perussyntaksi|perusmuotoilusyntaksia]] ja [[Muotoilun lisäsyntaksi|lisämuotoilusyntaksia]] tekstiin.

### `blockquote` 

Lisää Markdown-lainausmerkin (`> `) jokaisen syöterivin alkuun.

### `callout`

Luo [[Nostolaatikot|nostolaatikon]] valinnaisilla parametreilla: `{{variable|callout:("type", "title", foldState)}}`

- `type` on nostolaatikon tyyppi, oletuksena "info"
- `title` on nostolaatikon otsikko, oletuksena tyhjä
- `foldState` on totuusarvo kutistustilan asettamiseen (true kutistetulle, false laajennetulle, null ei-kutistettavalle)

### `footnote`

Muuntaa taulukon tai objektin Markdown-alaviitteiden luetteloksi.

- Taulukoille: `["first item","second item"]|footnote` palauttaa: `[^1]: first item` jne.
- Objekteille: `{"First Note": "Content 1", "Second Note": "Content 2"}|footnote` palauttaa: `[^first-note]: Content 1` jne.

### `fragment_link`

Muuntaa merkkijonot ja taulukot [tekstifragmentti](https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments)-linkeiksi. Oletuksena linkkitekstinä on "link".

- `highlights|fragment_link` palauttaa `Highlight content [link](text-fragment-url)`
- `highlights|fragment_link:"custom title"` palauttaa `Highlight content [custom title](text-fragment-url)`

### `image` 

Muuntaa merkkijonot, taulukot tai objektit Markdown-kuvasynt aksiksi.

- Merkkijonoille: `"image.jpg"|image:"alt text"` palauttaa `![alt text](image.jpg)`.
- Taulukoille: `["image1.jpg","image2.jpg"]|image:"alt text"` palauttaa taulukon Markdown-kuvamerkkijonoista samalla alt-tekstillä kaikille kuville.
- Objekteille: `{"image1.jpg": "Alt 1", "image2.jpg": "Alt 2"}|image` palauttaa Markdown-kuvamerkkijonot alt-tekstillä objektin avaimista.

### `link`

Muuntaa merkkijonot, taulukot tai objektit Markdown-linkkisyntaksiksi (ei pidä sekoittaa [[Suodattimet#`wikilink`|wikilinkkiin]]).

- Merkkijonoille: `"url"|link:"author"` palauttaa `[author](url)`.
- Taulukoille: `["url1","url2"]|link:"author"` palauttaa taulukon Markdown-linkeistä samalla tekstillä kaikille linkeille.
- Objekteille: `{"url1": "Author 1", "url2": "Author 2"}|link` palauttaa Markdown-linkit objektin avaimia vastaavalla tekstillä.

### `list`

Muuntaa taulukon Markdown-luetteloksi.

- `list` muuntaa luettelomerkityksi luetteloksi.
- `list:task` muuntaa tehtäväluetteloksi.
- `list:numbered` muuntaa numeroiduksi luetteloksi.
- `list:numbered-task` muuntaa numeroiduksi tehtäväluetteloksi.

### `table`

Muuntaa taulukon tai objektitaulukon [[Muotoilun lisäsyntaksi#Taulukot|Markdown-taulukoksi]]:

- Objektitaulukolle se käyttää objektin avaimia otsikoina.
- Taulukkojen taulukolle se luo taulukon, jossa jokainen sisäkkäinen taulukko on rivi.
- Yksinkertaiselle taulukolle se luo yhden sarakkeen taulukon otsikolla "Value".
- Mukautetut sarakeotsikot voidaan määrittää käyttämällä: `table:("Column 1", "Column 2", "Column 3")`. Yksinkertaisen taulukon kanssa käytettynä se jakaa tiedot automaattisesti riveiksi määritettyjen sarakkeiden lukumäärän perusteella.

### `wikilink`

Muuntaa merkkijonot, taulukot tai objektit Obsidianin [[Linkitä muistiinpanoja|wikilinkki]]-syntaksiksi.

- Merkkijonoille: `"page"|wikilink` palauttaa `[[page]]`.
- Merkkijonoille aliaksella: `"page"|wikilink:"alias"` palauttaa `[[page|alias]]`.
- Taulukoille: `["page1","page2"]|wikilink` palauttaa taulukon wikilinkeistä ilman aliaksia.
- Taulukoille aliaksella: `["page1","page2"]|wikilink:"alias"` palauttaa taulukon wikilinkeistä samalla aliaksella kaikille linkeille.
- Objekteille: `{"page1": "alias1", "page2": "alias2"}|wikilink` palauttaa wikilinkit avaimilla sivuniminä ja arvoilla aliaksina.

## Numerot

### `calc`

Suorittaa peruslaskutoimituksia numeroilla.

- Tukee operaattoreita: `+`, `-`, `*`, `/`, `**` (tai `^`) potenssiin korottamiseen.
- Esimerkki: `5|calc:"+10"` palauttaa `15`.
- Esimerkki: `2|calc:"**3"` palauttaa `8` (2 kuutioituna).
- Palauttaa alkuperäisen merkkijonon, jos syöte ei ole numero.

### `length`

Palauttaa merkkijonojen, taulukoiden tai objektien avainten lukumäärän.

- Merkkijonoille: `"hello"|length` palauttaa `5`.
- Taulukoille: `["a","b","c"]|length` palauttaa `3`.
- Objekteille: `{"a":1,"b":2}|length` palauttaa `2`.

### `round`

Pyöristää numeron lähimpään kokonaislukuun tai määritettyyn desimaalitarkkuuteen.

- Ilman parametreja: `3.7|round` palauttaa `4`.
- Desimaalipaikat määritettynä: `3.14159|round:2` palauttaa `3.14`.

## HTML-käsittely

Käsittele HTML-sisältöä ja muunna HTML Markdowniksi. Huomaa, että syöte[[Muuttujat|muuttujan]] on sisällettävä HTML-sisältöä, esim. käyttämällä `{{fullHtml}}`-, `{{contentHtml}}`- tai `{{selectorHtml:}}`-muuttujaa.

### `markdown` 

Muuntaa merkkijonon [[Obsidian Flavored Markdown]] -muotoiseksi merkkijonoksi.

- Hyödyllinen yhdistettynä muuttujiin, jotka palauttavat HTML:ää, kuten `{{contentHtml}}`, `{{fullHtml}}` ja valitsinmuuttujat kuten `{{selectorHtml:cssSelector}}`.

### `remove_attr` 

Poistaa vain määritetyt HTML-attribuutit tunnisteista.

- Esimerkki: `"<div class="test" id="example">Content</div>"|remove_attr:"class"` palauttaa `<div id="example">Content</div>`.
- Useat attribuutit: `{{fullHtml|remove_attr:("class,style,id")}}`

### `remove_html`

Poistaa määritetyt HTML-elementit ja niiden sisällön merkkijonosta.

- Tukee tunnisteen nimeä, luokkaa tai id:tä, esim. `{{fullHtml|remove_html:("img,.class-name,#element-id")}}`
- Poistaaksesi vain HTML-tunnisteet tai attribuutit poistamatta sisältöä, käytä `strip_tags`- tai `strip_attr`-suodattimia.

### `remove_tags` 

Poistaa vain määritetyt HTML-tunnisteet. Säilyttää tunnisteiden sisällön.

- Esimerkki: `"<p>Hello <b>world</b>!</p>"|remove_tags:"b"` palauttaa `"<p>Hello world!</p>"`.
- Useat tunnisteet: `{{fullHtml|remove_tags:("a,em,strong")}}`

### `replace_tags`

Korvaa HTML-tunnisteet säilyttäen tunnisteen sisällön ja attribuutit.

- `{{fullHtml|replace_tags:"strong":"h2"}}` korvaa kaikki `<strong>`-tunnisteet `<h2>`-tunnisteilla.

### `strip_attr`

Poistaa **kaikki** HTML-attribuutit merkkijonosta.

- Käytä `strip_attr:("class, id")` tiettyjen attribuuttien säilyttämiseen.
- Esimerkki: `"<div class="test" id="example">Content</div>"|strip_attr:("class")` palauttaa `<div id="example">Content</div>`.

### `strip_md`

Poistaa **kaiken** Markdown-muotoilun ja palauttaa tekstitiedoston ilman muotoilua, esim. muuttaen `**text**` muotoon `text`.

- Muuttaa muotoillun tekstin muotoilemattomaksi tekstiksi, mukaan lukien lihavointi, kursivointi, korostukset, otsikot, koodi, lainaukset, taulukot, tehtäväluettelot ja wikilinkit.
- Poistaa kokonaan taulukot, alaviitteet, kuvat ja HTML-elementit.

### `strip_tags`

Poistaa **kaikki** HTML-tunnisteet merkkijonosta. Tunnisteen sisältö säilytetään.

- Käytä `strip_tags:("p,strong,em")` tiettyjen tunnisteiden säilyttämiseen.
- Esimerkki: `"<p>Hello <b>world</b>!</p>"|strip_tags:("b")` palauttaa `Hello <b>world</b>!`.

## Taulukot ja objektit

Käsittele taulukoita ja objekteja.

### `first` 

Palauttaa taulukon ensimmäisen elementin merkkijonona.

- `["a","b","c"]|first` palauttaa `"a"`.
- Jos syöte ei ole taulukko, se palauttaa syötteen muuttamattomana.

### `join`

Yhdistää taulukon elementit merkkijonoksi.

- `["a","b","c"]|join` palauttaa `"a,b,c"`.
- Mukautettu erotin voidaan määrittää: `["a","b","c"]|join:" "` palauttaa `"a b c"`. Käytä `join:"\n"` erottaaksesi elementit rivinvaihdolla.
- Se voi olla hyödyllinen `split`- tai `slice`-suodattimen jälkeen: `"a,b,c,d"|split:","|slice:1,3|join:" "` palauttaa `"b c"`.

### `last`

Palauttaa taulukon viimeisen elementin merkkijonona.

- `["a","b","c"]|last` palauttaa `"c"`.
- Jos syöte ei ole taulukko, se palauttaa syötteen muuttamattomana.

### `map`

Soveltaa muunnosta taulukon jokaiseen elementtiin syntaksilla `map:item => item.property` tai `map:item => item.nested.property` sisäkkäisille ominaisuuksille.

- `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => item.gem` palauttaa `["obsidian", "amethyst"]`.
- Käytä sulkuja objektiliteraaleille ja monimutkaisille lausekkeille: `map:item => ({key: value})`, esim.: `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => ({name: item.gem, color: item.color})` palauttaa `[{name: "obsidian", color: "black"}, {name: "amethyst", color: "purple"}]`.

Myös merkkijonoliteraalit ovat tuettuja, esim. `["rock", "pop"]|map:item => "genres/${item}"` palauttaa `["genres/rock", "genres/pop"]`.

Yhdistä `map` `template`-suodattimeen, esim. `map:item => ({name: ${item.gem}, color: item.color})|template:"- ${name} is ${color}\n"`. Merkkijonoliteraali-mapeille käytä `${str}` mallissa, esim. `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"`.

Huomio: Sisäänrakennettuja suodattimia ei voi käyttää `map`-suodattimen sisällä. Tämä tarkoittaa, että esimerkiksi taulukon jokaisen arvon trimmaamista ei voi tehdä `map`-suodattimella.

### `merge`

Lisää uusia arvoja taulukkoon.

- Taulukoille: `["a","b"]|merge:("c","d")` palauttaa `["a","b","c","d"]`.
- Yksittäinen arvo: `["a","b"]|merge:"c"` palauttaa `["a","b","c"]`.
- Jos syöte ei ole taulukko, se luo uuden taulukon: `"a"|merge:("b","c")` palauttaa `["a","b","c"]`.
- Arvot voidaan laittaa lainausmerkkeihin: `["a"]|merge:('b,"c,d",e')` palauttaa `["a","b","c,d","e"]`.

### `nth`

Säilyttää taulukon n:nnet alkiot CSS-tyylisellä nth-child-syntaksilla ja ryhmäkaavoilla. Kaikki sijainnit ovat 1-pohjaisia (ensimmäinen alkio on sijalla 1).

- `array|nth:3` säilyttää vain 3. elementin.
- `array|nth:3n` säilyttää joka 3. elementin (3, 6, 9 jne.).
- `array|nth:n+3` säilyttää 3. ja kaikki seuraavat elementit.

Ryhmäkaavan syntaksi toistuville rakenteille:

- `array|nth:1,2,3:5` säilyttää sijainnit 1, 2, 3 jokaisesta 5 alkion ryhmästä. Esimerkki: `[1,2,3,4,5,6,7,8,9,10]|nth:1,2,3:5` palauttaa `[1,2,3,6,7,8]`.

### `object`

Käsittelee objektidataa:

- `object:array` muuntaa objektin avain-arvo-parien taulukoksi.
- `object:keys` palauttaa taulukon objektin avaimista.
- `object:values` palauttaa taulukon objektin arvoista.
- Esimerkki: `{"a":1,"b":2}|object:array` palauttaa `[["a",1],["b",2]]`.

### `slice`

Poimii osan merkkijonosta tai taulukosta.

- Merkkijonoille: `"hello"|slice:1,4` palauttaa `"ell"`.
- Taulukoille: `["a","b","c","d"]|slice:1,3` palauttaa `["b","c"]`.
- Jos vain yksi parametri annetaan, se leikkaa siitä indeksistä loppuun: `"hello"|slice:2` palauttaa `"llo"`.
- Negatiiviset indeksit lasketaan lopusta: `"hello"|slice:-3` palauttaa `"llo"`.
- Toinen parametri on poissulkeva: `"hello"|slice:1,4` sisältää merkit indekseissä 1, 2 ja 3.
- Negatiivinen toinen parametri jättää elementtejä pois lopusta: `"hello"|slice:0,-2` palauttaa `"hel"`.

### `split`

Jakaa merkkijonon alimerkkijonojen taulukoksi.

- `"a,b,c"|split:","` palauttaa `["a","b","c"]`.
- `"hello world"|split:" "` palauttaa `["hello","world"]`.
- Jos erotinta ei anneta, se jakaa jokaisen merkin kohdalta: `"hello"|split` palauttaa `["h","e","l","l","o"]`.
- Säännöllisiä lausekkeita voidaan käyttää erottimina: `"a1b2c3"|split:[0-9]` palauttaa `["a","b","c"]`.

### `template`

Soveltaa mallipohjaista merkkijonoa objektiin tai objektitaulukkoon syntaksilla `object|template:"Template with ${variable}"`.

- Sisäkkäisten ominaisuuksien käyttö: `{"gem":{"name":"Obsidian"}}|template:"${gem.name}"` palauttaa `"Obsidian"`.
- Objekteille: `{"gem":"obsidian","hardness":5}|template:"${gem} has a hardness of ${hardness}"` palauttaa `"obsidian has a hardness of 5"`.
- Taulukoille: `[{"gem":"obsidian","hardness":5},{"gem":"amethyst","hardness":7}]|template:"- ${gem} has a hardness of ${hardness}\n"` palauttaa muotoillun luettelon.

Toimii merkkijonoliteraalien kanssa `map`-suodattimesta käyttämällä `${str}`:

- Esimerkki: `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"` palauttaa muotoillun luettelon.

### `unique`

Poistaa päällekkäiset arvot taulukoista ja objekteista.

- Primitiivitaulukoille: `[1,2,2,3,3]|unique` palauttaa `[1,2,3]`.
- Objektitaulukoille: `[{"a":1},{"b":2},{"a":1}]|unique` palauttaa `[{"a":1},{"b":2}]`.
- Objekteille se poistaa ominaisuudet, joilla on päällekkäisiä arvoja, säilyttäen viimeisen esiintymän avaimen.
- Merkkijonoille se palauttaa syötteen muuttamattomana.
