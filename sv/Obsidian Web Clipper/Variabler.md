---
permalink: web-clipper/variables
---
[[Obsidian Web Clipper/Mallar|Web Clipper-mallar]] kan använda variabler för att automatiskt förifylla data från sidan i en mall. Variabler kan användas i **anteckningsnamn**, **anteckningsplats**, **egenskaper** och **anteckningsinnehåll**. Variabler kan också modifieras med hjälp av [[Filter|filter]].

Använd ikonen `...` i tillägget [[Introduktion till Obsidian Web Clipper|Web Clipper]] för att komma åt den aktuella sidans variabler för användning i mallar. Det finns fem typer av variabler du kan använda:

- [[Variabler#Förinställda variabler|Förinställda variabler]]
- [[Variabler#Prompt-variabler|Prompt-variabler]]
- [[Variabler#Meta-variabler|Meta-variabler]]
- [[Variabler#Selektor-variabler|Selektor-variabler]]
- [[Variabler#Schema.org-variabler|Schema.org-variabler]]

## Förinställda variabler

Förinställda variabler genereras automatiskt baserat på sidinnehållet. Dessa fungerar vanligtvis för de flesta webbplatser.

Den huvudsakliga innehållsvariabeln är `{{content}}`, som innehåller artikelinnehållet, eller [[Markeringsverktyg|markeringarna]], eller markeringen om det finns vald text på sidan. Observera att `{{content}}` försöker extrahera sidans huvudinnehåll, vilket kanske inte alltid är vad du vill ha. I så fall kan du använda andra förinställda variabler eller selektor-variabler för att extrahera det innehåll du behöver.

| Variabel            | Beskrivning                                                                            |
| ------------------- | -------------------------------------------------------------------------------------- |
| `{{author}}`        | Sidans författare                                                                      |
| `{{content}}`       | Artikelinnehåll, [[Markeringsverktyg\|markeringar]] eller markering, i Markdown-format |
| `{{contentHtml}}`   | Artikelinnehåll, [[Markeringsverktyg\|markeringar]] eller markering, i HTML-format     |
| `{{date}}`          | Aktuellt datum, kan formateras med filtret `date`                                      |
| `{{description}}`   | Beskrivning eller utdrag                                                               |
| `{{domain}}`        | Domän                                                                                  |
| `{{favicon}}`       | Favicon-URL                                                                            |
| `{{fullHtml}}`      | Obearbetad HTML för hela sidinnehållet                                                 |
| `{{highlights}}`    | [[Markeringsverktyg\|Markeringar]] med text och tidsstämplar                           |
| `{{image}}`         | URL för social delningsbild                                                            |
| `{{published}}`     | Publiceringsdatum, kan formateras med filtret `date`                                   |
| `{{selection}}`     | Markering i Markdown-format                                                            |
| `{{selectionHtml}}` | Markering i HTML-format                                                                |
| `{{site}}`          | Webbplatsnamn eller utgivare                                                           |
| `{{title}}`         | Sidans titel                                                                           |
| `{{time}}`          | Aktuellt datum och tid                                                                 |
| `{{url}}`           | Aktuell URL                                                                            |
| `{{words}}`         | Ordräkning                                                                             |

## Prompt-variabler

Prompt-variabler använder språkmodeller för att extrahera och modifiera data med naturligt språk. Prompt-variabler kräver att [[Tolk|Tolk]] är aktiverad och konfigurerad.

Prompt-variabler använder syntaxen `{{"a summary of the page"}}`. De dubbla citattecknen runt prompten är viktiga och skiljer prompter från förinställda variabler. Prompt-svar kan efterbearbetas med [[Filter|filter]], t.ex. `{{"a summary of the page"|blockquote}}`.

### När du ska använda prompt-variabler

Prompt-variabler har fördelen av att vara extremt flexibla och enkla att skriva, men de kommer med flera avvägningar: de är långsammare att köra och kan ha kostnads- och integritetsöverväganden beroende på vilken [[Tolk#Modeller|leverantör]] du väljer.

Till skillnad från andra variabeltyper behöver prompt-variabler bearbetas av en extern språkmodell, så de ersätts först när [[Tolk|Tolk]] har körts.

Det är bäst att *inte* använda prompt-variabler om datan du vill extrahera är i ett konsekvent format som kan extraheras med andra variabeltyper.

Å andra sidan kan prompt-variabler vara användbara om datan du vill extrahera är i ett *inkonsekvent* format mellan webbplatser. Till exempel kan du skapa en [[Obsidian Web Clipper/Mallar|mall]] för att spara böcker som är agnostisk för bokwebbplatsen. Prompt-variabler som `{{"author of the book"}}` fungerar på vilken bokwebbplats som helst, medan selektor-variabler vanligtvis bara fungerar för en enskild webbplats.

### Exempel

Prompter kan använda nästan vilken fråga på naturligt språk som helst. Beroende på vilken modell du använder kan prompter fråga efter eller översätta data mellan språk.

- `{{"a three bullet point summary, translated to French"}}` för att extrahera punkter om sidan och översätta dem till franska.
- `{{"un resumé de la page en trois points"}}` för att extrahera tre punkter med en prompt på franska.

Prompter kan omvandla sidinnehåll till JSON som kan manipuleras med [[Filter|filter]]. Till exempel:

```
{{"return a JSON object for each tweet, that includes the author, tweet_text, date in YYYY-MM-DD format, and images array (if there are any)"|map:tweet => ({text: tweet.tweet_text, author: tweet.author, date: tweet.date})|template:"${text}\n— [[@${author}]], [[${date}]]\n"}}
```


## Meta-variabler

Meta-variabler låter dig extrahera data från [meta-element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) på sidan, inklusive [Open Graph](https://ogp.me/)-data som används för att fylla i sociala delningsförhandsvisningar.

- `{{meta:name}}` returnerar innehållet i meta name-taggen med det angivna namnet, t.ex. `{{meta:name:description}}` för meta-taggen `description`.
- `{{meta:property}}` returnerar innehållet i meta property-taggen med den angivna egenskapen, t.ex. `{{meta:property:og:title}}` för meta-taggen `og:title`.

## Selektor-variabler

Selektor-variabler låter dig extrahera textinnehåll från element på sidan med hjälp av [CSS-selektorer](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators).

Syntaxen är `{{selector:cssSelector?attribute}}`, där `?attribute` är valfritt. Om inget attribut anges returneras elementets textinnehåll. Du kan också använda `{{selectorHtml:cssSelector}}` för att hämta elementets HTML-innehåll. Selektor-variabler fungerar bäst på en specifik webbplats eller uppsättning webbplatser som har konsekvent HTML-struktur.

- `{{selector:h1}}` returnerar textinnehållet i alla `h1`-element på sidan.
- `{{selector:.author}}` returnerar textinnehållet i alla `.author`-element på sidan.
- `{{selector:img.hero?src}}` returnerar `src`-attributet för bilden med klassen `hero`.
- `{{selector:a.main-link?href}}` returnerar `href`-attributet för ankartaggen med klassen `main-link`.
- `{{selectorHtml:body|markdown}}` returnerar hela HTML:en för `body`-elementet, konverterad till Markdown med hjälp av `markdown`-[[Filter#HTML-bearbetning|filtret]].
- Nästlade CSS-selektorer och kombinatorer stöds om du behöver mer specificitet.
- Om flera element matchar selektorn returneras en array, som du kan bearbeta med [[Filter#Arrayer och objekt|array- och objektfilter]] som `join` eller `map`.

Selektor-variabler kan också användas direkt i [[Logik|malllogik]]:

- I loopar: `{% for comment in selector:.comment %}...{% endfor %}`
- I villkor: `{% if selector:.premium-badge %}...{% endif %}`
- I variabeltilldelning: `{% set items = selector:.list-item %}`

## Schema.org-variabler

Schemavariabler låter dig extrahera data från [schema.org](https://schema.org/) JSON-LD på sidan. Schema.org-data kan också användas för att automatiskt [[Obsidian Web Clipper/Mallar#Schema.org-matchning|utlösa en mall]].

- `{{schema:@Type:key}}` returnerar värdet för nyckeln från schemat.
- `{{schema:@Type:parent.child}}` returnerar värdet för en nästlad egenskap.
- `{{schema:@Type:arrayKey}}` returnerar det första objektet i en array.
- `{{schema:@Type:arrayKey[index].property}}` returnerar objektet vid det angivna indexet i en array.
- `{{schema:@Type:arrayKey[*].property}}` returnerar en specifik egenskap från alla objekt i en array.

Du kan också använda en förkortad notation utan att ange schematyp:

- `{{schema:author}}` matchar den första `author`-egenskapen som hittas i valfri schematyp.
- `{{schema:name}}` matchar den första `name`-egenskapen som hittas i valfri schematyp.

Denna förkortning är särskilt användbar när du inte vet eller inte bryr dig om den specifika schematypen, men du vet namnet på egenskapen du letar efter.

Nästlade egenskaper och array-åtkomst fungerar också, både med och utan att schemats `@Type` anges:

- `{{schema:author.name}}` hittar den första `author`-egenskapen och kommer sedan åt dess `name`-underegenskap.
- `{{schema:author[0].name}}` kommer åt `name` för den första författaren i en array av författare.
- `{{schema:author[*].name}}` returnerar en array med alla författarnamn.
