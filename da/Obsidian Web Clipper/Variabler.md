---
permalink: web-clipper/variables
---
[[Obsidian Web Clipper/Skabeloner|Web Clipper-skabeloner]] kan bruge variabler til automatisk at forudfylde data fra siden i en skabelon. Variabler kan bruges i **notenavnet**, **noteplaceringen**, **egenskaber** og **noteindholdet**. Variabler kan også modificeres ved hjælp af [[Filtre|filtre]].

Brug `...`-ikonet i [[Introduktion til Obsidian Web Clipper|Web Clipper]]-udvidelsen for at få adgang til den aktuelle sides variabler til brug i skabeloner. Der er fem typer variabler, du kan bruge:

- [[Variabler#Forudindstillede variabler|Forudindstillede variabler]]
- [[Variabler#Prompt-variabler|Prompt-variabler]]
- [[Variabler#Meta-variabler|Meta-variabler]]
- [[Variabler#Selektor-variabler|Selektor-variabler]]
- [[Variabler#Schema.org-variabler|Schema.org-variabler]]

## Forudindstillede variabler

Forudindstillede variabler genereres automatisk baseret på sidens indhold. Disse fungerer typisk på de fleste hjemmesider.

Den primære indholdsvariabel er `{{content}}`, som indeholder artikelindholdet, eller [[Fremhæv websider|fremhævningerne]], eller markeringen hvis der er markeret tekst på siden. Bemærk at `{{content}}` forsøger at udtrække sidens hovedindhold, hvilket ikke altid er det, du ønsker. I så fald kan du bruge andre forudindstillede variabler eller selektor-variabler til at udtrække det indhold, du har brug for.

| Variabel            | Beskrivelse                                                                            |
| ------------------- | -------------------------------------------------------------------------------------- |
| `{{author}}`        | Sidens forfatter                                                                       |
| `{{content}}`       | Artikelindhold, [[Fremhæv websider\|fremhævninger]] eller markering, i Markdown-format |
| `{{contentHtml}}`   | Artikelindhold, [[Fremhæv websider\|fremhævninger]] eller markering, i HTML-format     |
| `{{date}}`          | Aktuel dato, kan formateres med `date`-filteret                                        |
| `{{description}}`   | Beskrivelse eller uddrag                                                               |
| `{{domain}}`        | Domæne                                                                                 |
| `{{favicon}}`       | Favicon-URL                                                                            |
| `{{fullHtml}}`      | Ubehandlet HTML for hele sidens indhold                                                |
| `{{highlights}}`    | [[Fremhæv websider\|Fremhævninger]] med tekst og tidsstempler                          |
| `{{image}}`         | URL til socialt delingsbillede                                                         |
| `{{published}}`     | Udgivelsesdato, kan formateres med `date`-filteret                                     |
| `{{selection}}`     | Markering i Markdown-format                                                            |
| `{{selectionHtml}}` | Markering i HTML-format                                                                |
| `{{site}}`          | Sitenavn eller udgiver                                                                 |
| `{{title}}`         | Sidens titel                                                                           |
| `{{time}}`          | Aktuel dato og tid                                                                     |
| `{{url}}`           | Aktuel URL                                                                             |
| `{{words}}`         | Ordtælling                                                                             |

## Prompt-variabler

Prompt-variabler udnytter sprogmodeller til at udtrække og modificere data ved hjælp af naturligt sprog. Prompt-variabler kræver, at [[Fortolk websider|Fortolker]] er aktiveret og konfigureret.

Prompt-variabler bruger syntaksen `{{"et resumé af siden"}}`. Anførselstegnene omkring prompten er vigtige og adskiller prompts fra forudindstillede variabler. Prompt-svar kan efterbehandles med [[Filtre|filtre]], f.eks. `{{"et resumé af siden"|blockquote}}`.

### Hvornår du bør bruge prompt-variabler

Prompt-variabler har fordelen af at være ekstremt fleksible og nemme at skrive, men de har flere kompromiser: de er langsommere at køre og kan have omkostnings- og privatlivsovervejelser afhængigt af den [[Fortolk websider#Modeller|udbyder]], du vælger.

I modsætning til andre variabeltyper skal prompt-variabler behandles af en ekstern sprogmodel, så de erstattes først, når [[Fortolk websider|Fortolker]] er kørt.

Det er bedst *ikke* at bruge prompt-variabler, hvis de data, du vil udtrække, er i et konsistent format, der kan udtrækkes med andre variabeltyper.

På den anden side kan prompt-variabler være nyttige, hvis de data, du vil udtrække, er i et *inkonsistent* format på tværs af hjemmesider. For eksempel kan du lave en [[Obsidian Web Clipper/Skabeloner|skabelon]] til at gemme bøger, der er uafhængig af boghjemmesiden. Prompt-variabler som `{{"forfatter af bogen"}}` vil fungere på enhver boghjemmeside, hvorimod selektor-variabler typisk kun fungerer for én hjemmeside.

### Eksempler

Prompts kan bruge næsten enhver forespørgsel i naturligt sprog. Afhængigt af den model du bruger, kan prompts forespørge eller oversætte data på tværs af sprog.

- `{{"et resumé i tre punkter, oversat til fransk"}}` for at udtrække punkter om siden og oversætte dem til fransk.
- `{{"un resumé de la page en trois points"}}` for at udtrække tre punkter ved hjælp af en prompt på fransk.

Prompts kan transformere sideindhold til JSON, der kan manipuleres med [[Filtre|filtre]]. For eksempel:

```
{{"return a JSON object for each tweet, that includes the author, tweet_text, date in YYYY-MM-DD format, and images array (if there are any)"|map:tweet => ({text: tweet.tweet_text, author: tweet.author, date: tweet.date})|template:"${text}\n— [[@${author}]], [[${date}]]\n"}}
```


## Meta-variabler

Meta-variabler giver dig mulighed for at udtrække data fra [meta-elementer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) på siden, herunder [Open Graph](https://ogp.me/)-data, der bruges til at udfylde sociale delingsforhåndsvisninger.

- `{{meta:name}}` returnerer indholdet af meta name-tagget med det givne navn, f.eks. `{{meta:name:description}}` for `description` meta-tagget.
- `{{meta:property}}` returnerer indholdet af meta property-tagget med den givne egenskab, f.eks. `{{meta:property:og:title}}` for `og:title` meta-tagget.

## Selektor-variabler

Selektor-variabler giver dig mulighed for at udtrække tekstindhold fra elementer på siden ved hjælp af [CSS-selektorer](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators).

Syntaksen er `{{selector:cssSelector?attribute}}`, hvor `?attribute` er valgfri. Hvis ingen attribut er angivet, returneres elementets tekstindhold. Du kan også bruge `{{selectorHtml:cssSelector}}` til at hente elementets HTML-indhold. Selektor-variabler fungerer bedst på en specifik hjemmeside eller et sæt af hjemmesider med konsistent HTML-struktur.

- `{{selector:h1}}` returnerer tekstindhold fra alle `h1`-elementer på siden.
- `{{selector:.author}}` returnerer tekstindhold fra alle `.author`-elementer på siden.
- `{{selector:img.hero?src}}` returnerer `src`-attributten fra billedet med klassen `hero`.
- `{{selector:a.main-link?href}}` returnerer `href`-attributten fra anker-tagget med klassen `main-link`.
- `{{selectorHtml:body|markdown}}` returnerer hele HTML'en fra `body`-elementet, konverteret til Markdown ved hjælp af `markdown`-[[Filtre#HTML-behandling|filteret]].
- Indlejrede CSS-selektorer og kombinatorer understøttes, hvis du har brug for mere specificitet.
- Hvis flere elementer matcher selektoren, returneres et array, som du kan behandle med [[Filtre#Arrays og objekter|array- og objektfiltre]] som `join` eller `map`.

Selektor-variabler kan også bruges direkte i [[Logik|skabelonlogik]]:

- I løkker: `{% for comment in selector:.comment %}...{% endfor %}`
- I betingelser: `{% if selector:.premium-badge %}...{% endif %}`
- I variabeltildelinger: `{% set items = selector:.list-item %}`

## Schema.org-variabler

Schema-variabler giver dig mulighed for at udtrække data fra [schema.org](https://schema.org/) JSON-LD på siden. Schema.org-data kan også bruges til automatisk at [[Obsidian Web Clipper/Skabeloner#Schema.org-matching|udløse en skabelon]].

- `{{schema:@Type:key}}` returnerer værdien af nøglen fra skemaet.
- `{{schema:@Type:parent.child}}` returnerer værdien af en indlejret egenskab.
- `{{schema:@Type:arrayKey}}` returnerer det første element i et array.
- `{{schema:@Type:arrayKey[index].property}}` returnerer elementet ved det angivne indeks i et array.
- `{{schema:@Type:arrayKey[*].property}}` returnerer en specifik egenskab fra alle elementer i et array.

Du kan også bruge en forkortet notation uden at angive skematypen:

- `{{schema:author}}` vil matche den første `author`-egenskab fundet i enhver skematype.
- `{{schema:name}}` vil matche den første `name`-egenskab fundet i enhver skematype.

Denne forkortelse er særligt nyttig, når du ikke kender eller ikke bekymrer dig om den specifikke skematype, men du kender egenskabsnavnet, du leder efter.

Indlejrede egenskaber og array-adgang fungerer også, både med og uden skema `@Type` angivet:

- `{{schema:author.name}}` vil finde den første `author`-egenskab og derefter tilgå dens `name`-underegenskab.
- `{{schema:author[0].name}}` vil tilgå `name` for den første forfatter i et array af forfattere.
- `{{schema:author[*].name}}` vil returnere et array af alle forfatternavne.
