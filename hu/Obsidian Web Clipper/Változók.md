---
permalink: web-clipper/variables
---
Az [[Obsidian Web Clipper/Sablonok|Web Clipper sablonok]] változókat használhatnak az oldalról származó adatok automatikus előre kitöltésére egy sablonban. A változók használhatók a **jegyzet nevében**, a **jegyzet helyében**, a **tulajdonságokban** és a **jegyzet tartalmában**. A változók [[Szűrők|szűrőkkel]] is módosíthatók.

Használd a `...` ikont az [[Bevezetés az Obsidian Web Clipper használatába|Web Clipper]] bővítményben az aktuális oldal változóinak eléréséhez sablonokban való használatra. Ötféle változótípust használhatsz:

- [[Változók#Előre beállított változók|Előre beállított változók]]
- [[Változók#Prompt változók|Prompt változók]]
- [[Változók#Meta változók|Meta változók]]
- [[Változók#Szelektor változók|Szelektor változók]]
- [[Változók#Schema.org változók|Schema.org változók]]

## Előre beállított változók

Az előre beállított változók automatikusan generálódnak az oldal tartalma alapján. Ezek jellemzően a legtöbb webhelyen működnek.

A fő tartalomváltozó a `{{content}}`, amely a cikk tartalmát, a [[Weboldalak kiemelése|kiemeléseket]], vagy a kijelölést tartalmazza, ha van kijelölt szöveg az oldalon. Vedd figyelembe, hogy a `{{content}}` megpróbálja kinyerni az oldal fő tartalmát, ami nem mindig az, amit szeretnél. Ebben az esetben más előre beállított változókat vagy szelektor változókat használhatsz a szükséges tartalom kinyeréséhez.

| Változó             | Leírás                                                                                 |
| ------------------- | -------------------------------------------------------------------------------------- |
| `{{author}}`        | Az oldal szerzője                                                                      |
| `{{content}}`       | Cikk tartalma, [[Weboldalak kiemelése\|kiemelések]], vagy kijelölés, Markdown formátumban |
| `{{contentHtml}}`   | Cikk tartalma, [[Weboldalak kiemelése\|kiemelések]], vagy kijelölés, HTML formátumban |
| `{{date}}`          | Aktuális dátum, formázható a `date` szűrővel                                          |
| `{{description}}`   | Leírás vagy kivonat                                                                    |
| `{{domain}}`        | Tartomány                                                                              |
| `{{favicon}}`       | Favicon URL                                                                            |
| `{{fullHtml}}`      | Feldolgozatlan HTML a teljes oldaltartalomhoz                                          |
| `{{highlights}}`    | [[Weboldalak kiemelése\|Kiemelések]] szöveggel és időbélyegekkel                      |
| `{{image}}`         | Közösségi megosztási kép URL-je                                                        |
| `{{published}}`     | Publikálás dátuma, formázható a `date` szűrővel                                       |
| `{{selection}}`     | Kijelölés Markdown formátumban                                                         |
| `{{selectionHtml}}` | Kijelölés HTML formátumban                                                             |
| `{{site}}`          | Webhely neve vagy kiadó                                                                |
| `{{title}}`         | Az oldal címe                                                                          |
| `{{time}}`          | Aktuális dátum és idő                                                                  |
| `{{url}}`           | Aktuális URL                                                                           |
| `{{words}}`         | Szavak száma                                                                           |

## Prompt változók

A prompt változók nyelvi modelleket használnak adatok kinyerésére és módosítására természetes nyelv segítségével. A prompt változókhoz a [[Weboldalak értelmezése|Értelmező]] engedélyezése és konfigurálása szükséges.

A prompt változók szintaxisa: `{{"az oldal összefoglalása"}}`. Az idézőjelek a prompt körül fontosak, és megkülönböztetik a promptokat az előre beállított változóktól. A prompt válaszok utólag feldolgozhatók [[Szűrők|szűrőkkel]], pl. `{{"az oldal összefoglalása"|blockquote}}`.

### Mikor használj prompt változókat

A prompt változók előnye, hogy rendkívül rugalmasak és könnyen írhatók, ugyanakkor több kompromisszummal járnak: lassabban futnak, és a választott [[Weboldalak értelmezése#Modellek|szolgáltatótól]] függően költség- és adatvédelmi szempontokat is figyelembe kell venni.

Más változótípusokkal ellentétben a prompt változókat egy külső nyelvi modellnek kell feldolgoznia, így csak akkor kerülnek behelyettesítésre, amikor az [[Weboldalak értelmezése|Értelmező]] lefutott.

A legjobb, ha *nem* használsz prompt változókat, ha a kinyerni kívánt adat következetes formátumban van, és más változótípusokkal is kinyerhető.

Másrészről a prompt változók hasznosak lehetnek, ha a kinyerni kívánt adat *nem következetes* formátumú a különböző webhelyeken. Például készíthetsz egy [[Obsidian Web Clipper/Sablonok|sablont]] könyvek mentéséhez, amely független a könyves webhelytől. Az olyan prompt változók, mint a `{{"a könyv szerzője"}}` bármely könyves webhelyen működnek, míg a szelektor változók jellemzően csak egy adott webhelyen.

### Példák

A promptok szinte bármilyen természetes nyelvi lekérdezést használhatnak. A használt modelltől függően a promptok képesek adatokat lekérdezni vagy lefordítani különböző nyelveken.

- `{{"hárompontos összefoglaló, franciára fordítva"}}` az oldalról szóló felsoroláspontok kinyeréséhez és franciára fordításához.
- `{{"un resumé de la page en trois points"}}` három felsoroláspont kinyeréséhez francia nyelvű prompttal.

A promptok képesek az oldaltartalmat JSON formátumba alakítani, amelyet [[Szűrők|szűrőkkel]] lehet manipulálni. Például:

```
{{"return a JSON object for each tweet, that includes the author, tweet_text, date in YYYY-MM-DD format, and images array (if there are any)"|map:tweet => ({text: tweet.tweet_text, author: tweet.author, date: tweet.date})|template:"${text}\n— [[@${author}]], [[${date}]]\n"}}
```


## Meta változók

A meta változók lehetővé teszik adatok kinyerését az oldal [meta elemeiből](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta), beleértve a közösségi megosztási előnézetek kitöltésére használt [Open Graph](https://ogp.me/) adatokat.

- `{{meta:name}}` a megadott névvel rendelkező meta name címke tartalmát adja vissza, pl. `{{meta:name:description}}` a `description` meta címkéhez.
- `{{meta:property}}` a megadott tulajdonsággal rendelkező meta property címke tartalmát adja vissza, pl. `{{meta:property:og:title}}` az `og:title` meta címkéhez.

## Szelektor változók

A szelektor változók lehetővé teszik szövegtartalom kinyerését az oldal elemeiből [CSS szelektorok](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) segítségével.

A szintaxis: `{{selector:cssSelector?attribútum}}`, ahol a `?attribútum` opcionális. Ha nincs megadva attribútum, az elem szövegtartalma kerül visszaadásra. A `{{selectorHtml:cssSelector}}` szintaxist is használhatod az elem HTML tartalmának lekéréséhez. A szelektor változók jellemzően egy adott webhelyen vagy konzisztens HTML struktúrával rendelkező webhelyek csoportján működnek a legjobban.

- `{{selector:h1}}` az oldalon lévő összes `h1` elem szövegtartalmát adja vissza.
- `{{selector:.author}}` az oldalon lévő összes `.author` elem szövegtartalmát adja vissza.
- `{{selector:img.hero?src}}` a `hero` osztályú kép `src` attribútumát adja vissza.
- `{{selector:a.main-link?href}}` a `main-link` osztályú horgonycímke `href` attribútumát adja vissza.
- `{{selectorHtml:body|markdown}}` a `body` elem teljes HTML-jét adja vissza, Markdown formátumra konvertálva a `markdown` [[Szűrők#HTML feldolgozás|szűrő]] segítségével.
- A beágyazott CSS szelektorok és kombinálók támogatottak, ha nagyobb specifikusságra van szükséged.
- Ha több elem illeszkedik a szelektorra, egy tömb kerül visszaadásra, amelyet [[Szűrők#Tömbök és objektumok|tömb és objektum szűrőkkel]] dolgozhatsz fel, mint a `join` vagy `map`.

A szelektor változók közvetlenül is használhatók a [[Logika|sablon logikában]]:

- Ciklusokban: `{% for comment in selector:.comment %}...{% endfor %}`
- Feltételekben: `{% if selector:.premium-badge %}...{% endif %}`
- Változó hozzárendelésben: `{% set items = selector:.list-item %}`

## Schema.org változók

A schema változók lehetővé teszik adatok kinyerését az oldal [schema.org](https://schema.org/) JSON-LD adataiból. A schema.org adatok arra is használhatók, hogy automatikusan [[Obsidian Web Clipper/Sablonok#Schema.org illesztés|aktiváljanak egy sablont]].

- `{{schema:@Típus:kulcs}}` a schema adott kulcsának értékét adja vissza.
- `{{schema:@Típus:szülő.gyermek}}` egy beágyazott tulajdonság értékét adja vissza.
- `{{schema:@Típus:tömbKulcs}}` a tömb első elemét adja vissza.
- `{{schema:@Típus:tömbKulcs[index].tulajdonság}}` a tömb megadott indexű elemét adja vissza.
- `{{schema:@Típus:tömbKulcs[*].tulajdonság}}` a tömb összes eleméből egy adott tulajdonságot ad vissza.

Használhatsz rövidített jelölést is a schema típus megadása nélkül:

- `{{schema:author}}` bármely schema típusban megtalált első `author` tulajdonságot illeszti.
- `{{schema:name}}` bármely schema típusban megtalált első `name` tulajdonságot illeszti.

Ez a rövidítés különösen hasznos, ha nem ismered vagy nem érdekel a konkrét schema típus, de tudod a keresett tulajdonság nevét.

A beágyazott tulajdonságok és tömbhozzáférés is működik, a schema `@Típus` megadásával és anélkül is:

- `{{schema:author.name}}` megkeresi az első `author` tulajdonságot, majd hozzáfér annak `name` altulajdonságához.
- `{{schema:author[0].name}}` a szerzők tömbjében az első szerző `name` tulajdonságát éri el.
- `{{schema:author[*].name}}` az összes szerző nevét tartalmazó tömböt adja vissza.
