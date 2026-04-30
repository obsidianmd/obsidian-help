---
permalink: web-clipper/variables
---
[[Obsidian Web Clipper/Sjablonen|Web Clipper-sjablonen]] kunnen variabelen gebruiken om automatisch gegevens van de pagina in een sjabloon in te vullen. Variabelen kunnen worden gebruikt in de **notitienaam**, **notitielocatie**, **eigenschappen** en **notitie-inhoud**. Variabelen kunnen ook worden aangepast met [[Filters|filters]].

Gebruik het `...`-pictogram in de [[Introductie tot Obsidian Web Clipper|Web Clipper]]-extensie om de huidige paginavariabelen te bekijken voor gebruik in sjablonen. Er zijn vijf typen variabelen die je kunt gebruiken:

- [[Variabelen#Vooringestelde variabelen|Vooringestelde variabelen]]
- [[Variabelen#Promptvariabelen|Promptvariabelen]]
- [[Variabelen#Metavariabelen|Metavariabelen]]
- [[Variabelen#Selectorvariabelen|Selectorvariabelen]]
- [[Variabelen#Schema.org-variabelen|Schema.org-variabelen]]

## Vooringestelde variabelen

Vooringestelde variabelen worden automatisch gegenereerd op basis van de pagina-inhoud. Deze werken doorgaans voor de meeste websites.

De belangrijkste inhoudsvariabele is `{{content}}`, die de artikelinhoud bevat, of de [[Markeerstift|markeringen]], of de selectie als er geselecteerde tekst op de pagina is. Let op dat `{{content}}` probeert de hoofdinhoud van de pagina te extraheren, wat niet altijd is wat je wilt. In dat geval kun je andere vooringestelde variabelen of selectorvariabelen gebruiken om de gewenste inhoud te extraheren.

| Variabele           | Beschrijving                                                                            |
| ------------------- | --------------------------------------------------------------------------------------- |
| `{{author}}`        | Auteur van de pagina                                                                    |
| `{{content}}`       | Artikelinhoud, [[Markeerstift\|markeringen]], of selectie, in Markdown-formaat  |
| `{{contentHtml}}`   | Artikelinhoud, [[Markeerstift\|markeringen]], of selectie, in HTML-formaat      |
| `{{date}}`          | Huidige datum, kan worden opgemaakt met het `date`-filter                               |
| `{{description}}`   | Beschrijving of fragment                                                                |
| `{{domain}}`        | Domein                                                                                  |
| `{{favicon}}`       | Favicon-URL                                                                             |
| `{{fullHtml}}`      | Onverwerkte HTML voor de volledige pagina-inhoud                                        |
| `{{highlights}}`    | [[Markeerstift\|Markeringen]] met tekst en tijdstempels                         |
| `{{image}}`         | URL van social share-afbeelding                                                         |
| `{{published}}`     | Publicatiedatum, kan worden opgemaakt met het `date`-filter                             |
| `{{selection}}`     | Selectie in Markdown-formaat                                                            |
| `{{selectionHtml}}` | Selectie in HTML-formaat                                                                |
| `{{site}}`          | Sitenaam of uitgever                                                                    |
| `{{title}}`         | Titel van de pagina                                                                     |
| `{{time}}`          | Huidige datum en tijd                                                                   |
| `{{url}}`           | Huidige URL                                                                             |
| `{{words}}`         | Woordenaantal                                                                           |

## Promptvariabelen

Promptvariabelen maken gebruik van taalmodellen om gegevens te extraheren en te wijzigen met behulp van natuurlijke taal. Promptvariabelen vereisen dat [[Webpagina's interpreteren|Interpreter]] is ingeschakeld en geconfigureerd.

Promptvariabelen gebruiken de syntaxis `{{"een samenvatting van de pagina"}}`. De dubbele aanhalingstekens rond de prompt zijn belangrijk en onderscheiden prompts van vooringestelde variabelen. Promptreacties kunnen worden nabewerkt met [[Filters|filters]], bijv. `{{"een samenvatting van de pagina"|blockquote}}`.

### Wanneer promptvariabelen gebruiken

Promptvariabelen hebben het voordeel dat ze extreem flexibel en eenvoudig te schrijven zijn, maar ze brengen verschillende afwegingen met zich mee: ze zijn langzamer om uit te voeren en kunnen kosten- en privacyoverwegingen hebben, afhankelijk van de [[Webpagina's interpreteren#Modellen|provider]] die je kiest.

In tegenstelling tot andere variabeletypen moeten promptvariabelen worden verwerkt door een extern taalmodel, waardoor ze pas worden vervangen zodra de [[Webpagina's interpreteren|Interpreter]] is uitgevoerd.

Het is het beste om promptvariabelen *niet* te gebruiken als de gegevens die je wilt extraheren een consistent formaat hebben dat met andere variabeletypen kan worden geëxtraheerd.

Aan de andere kant kunnen promptvariabelen nuttig zijn als de gegevens die je wilt extraheren een *inconsistent* formaat hebben op verschillende websites. Je kunt bijvoorbeeld een [[Obsidian Web Clipper/Sjablonen|sjabloon]] maken om boeken op te slaan dat onafhankelijk is van de boekensite. Promptvariabelen zoals `{{"auteur van het boek"}}` werken op elke boekensite, terwijl selectorvariabelen doorgaans alleen voor één site werken.

### Voorbeelden

Prompts kunnen bijna elke natuurlijke taalquery gebruiken. Afhankelijk van het model dat je gebruikt, kunnen prompts gegevens opvragen of vertalen in verschillende talen.

- `{{"een samenvatting in drie opsommingstekens, vertaald naar het Frans"}}` om opsommingstekens over de pagina te extraheren en ze naar het Frans te vertalen.
- `{{"un resumé de la page en trois points"}}` om drie opsommingstekens te extraheren met een prompt in het Frans.

Prompts kunnen pagina-inhoud omzetten naar JSON die kan worden bewerkt met [[Filters|filters]]. Bijvoorbeeld:

```
{{"return a JSON object for each tweet, that includes the author, tweet_text, date in YYYY-MM-DD format, and images array (if there are any)"|map:tweet => ({text: tweet.tweet_text, author: tweet.author, date: tweet.date})|template:"${text}\n— [[@${author}]], [[${date}]]\n"}}
```


## Metavariabelen

Metavariabelen stellen je in staat om gegevens te extraheren uit [meta-elementen](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) op de pagina, inclusief [Open Graph](https://ogp.me/)-gegevens die worden gebruikt om social share-voorbeelden te vullen.

- `{{meta:name}}` retourneert de inhoud van de meta-naamtag met de opgegeven naam, bijv. `{{meta:name:description}}` voor de `description`-metatag.
- `{{meta:property}}` retourneert de inhoud van de meta-eigenschap-tag met de opgegeven eigenschap, bijv. `{{meta:property:og:title}}` voor de `og:title`-metatag.

## Selectorvariabelen

Selectorvariabelen stellen je in staat om tekstinhoud uit elementen op de pagina te extraheren met behulp van [CSS-selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators).

De syntaxis is `{{selector:cssSelector?attribuut}}`, waarbij `?attribuut` optioneel is. Als er geen attribuut is opgegeven, wordt de tekstinhoud van het element geretourneerd. Je kunt ook `{{selectorHtml:cssSelector}}` gebruiken om de HTML-inhoud van het element op te halen. Selectorvariabelen werken het beste op een specifieke website of set websites met een consistente HTML-structuur.

- `{{selector:h1}}` retourneert de tekstinhoud van alle `h1`-elementen op de pagina.
- `{{selector:.author}}` retourneert de tekstinhoud van alle `.author`-elementen op de pagina.
- `{{selector:img.hero?src}}` retourneert het `src`-attribuut van de afbeelding met klasse `hero`.
- `{{selector:a.main-link?href}}` retourneert het `href`-attribuut van de anchor-tag met klasse `main-link`.
- `{{selectorHtml:body|markdown}}` retourneert de volledige HTML van het `body`-element, omgezet naar Markdown met het `markdown`-[[Filters#HTML-verwerking|filter]].
- Geneste CSS-selectors en combinatoren worden ondersteund als je meer specificiteit nodig hebt.
- Als meerdere elementen overeenkomen met de selector, wordt een array geretourneerd die je kunt verwerken met [[Filters#Arrays en objecten|array- en objectfilters]] zoals `join` of `map`.

Selectorvariabelen kunnen ook direct worden gebruikt in [[Logica|sjabloonlogica]]:

- In lussen: `{% for comment in selector:.comment %}...{% endfor %}`
- In voorwaarden: `{% if selector:.premium-badge %}...{% endif %}`
- In variabeletoewijzing: `{% set items = selector:.list-item %}`

## Schema.org-variabelen

Schemavariabelen stellen je in staat om gegevens te extraheren uit [schema.org](https://schema.org/) JSON-LD op de pagina. Schema.org-gegevens kunnen ook worden gebruikt om automatisch [[Obsidian Web Clipper/Sjablonen#Schema.org-matching|een sjabloon te activeren]].

- `{{schema:@Type:key}}` retourneert de waarde van de sleutel uit het schema.
- `{{schema:@Type:parent.child}}` retourneert de waarde van een geneste eigenschap.
- `{{schema:@Type:arrayKey}}` retourneert het eerste item in een array.
- `{{schema:@Type:arrayKey[index].property}}` retourneert het item op de opgegeven index in een array.
- `{{schema:@Type:arrayKey[*].property}}` retourneert een specifieke eigenschap van alle items in een array.

Je kunt ook een verkorte notatie gebruiken zonder het schematype op te geven:

- `{{schema:author}}` komt overeen met de eerste `author`-eigenschap die in een willekeurig schematype wordt gevonden.
- `{{schema:name}}` komt overeen met de eerste `name`-eigenschap die in een willekeurig schematype wordt gevonden.

Deze verkorte notatie is bijzonder nuttig wanneer je het specifieke schematype niet kent of er niet om geeft, maar wel de eigenschapnaam weet die je zoekt.

Geneste eigenschappen en arraytoegang werken ook, zowel met als zonder opgegeven schema-`@Type`:

- `{{schema:author.name}}` vindt de eerste `author`-eigenschap en opent vervolgens de `name`-subeigenschap.
- `{{schema:author[0].name}}` opent de `name` van de eerste auteur in een array van auteurs.
- `{{schema:author[*].name}}` retourneert een array van alle auteursnamen.
