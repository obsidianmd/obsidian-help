---
permalink: web-clipper/variables
---
[[Obsidian Web Clipper/Maler|Web Clipper-maler]] kan bruke variabler for automatisk å forhåndsutfylle data fra siden i en mal. Variabler kan brukes i **notatnavn**, **notatplassering**, **egenskaper** og **notatinnhold**. Variabler kan også modifiseres ved hjelp av [[Filtre|filtre]].

Bruk `...`-ikonet i [[Introduksjon til Obsidian Web Clipper|Web Clipper]]-utvidelsen for å få tilgang til gjeldende sidevariabler til bruk i maler. Det finnes fem typer variabler du kan bruke:

- [[Variabler#Forhåndsinnstilte variabler|Forhåndsinnstilte variabler]]
- [[Variabler#Prompt-variabler|Prompt-variabler]]
- [[Variabler#Meta-variabler|Meta-variabler]]
- [[Variabler#Selektor-variabler|Selektor-variabler]]
- [[Variabler#Schema.org-variabler|Schema.org-variabler]]

## Forhåndsinnstilte variabler

Forhåndsinnstilte variabler genereres automatisk basert på sideinnholdet. Disse fungerer vanligvis for de fleste nettsteder.

Hovedinnholdsvariabelen er `{{content}}`, som inneholder artikkelinnholdet, eller [[Uthev nettsider|uthevingene]], eller utvalget hvis det er markert tekst på siden. Merk at `{{content}}` forsøker å hente ut hovedinnholdet på siden, noe som kanskje ikke alltid er det du ønsker. I så fall kan du bruke andre forhåndsinnstilte variabler eller selektor-variabler for å hente ut innholdet du trenger.

| Variabel            | Beskrivelse                                                                            |
| ------------------- | -------------------------------------------------------------------------------------- |
| `{{author}}`        | Forfatter av siden                                                                     |
| `{{content}}`       | Artikkelinnhold, [[Uthev nettsider\|uthevinger]], eller utvalg, i Markdown-format     |
| `{{contentHtml}}`   | Artikkelinnhold, [[Uthev nettsider\|uthevinger]], eller utvalg, i HTML-format         |
| `{{date}}`          | Gjeldende dato, kan formateres med `date`-filteret                                     |
| `{{description}}`   | Beskrivelse eller utdrag                                                               |
| `{{domain}}`        | Domene                                                                                 |
| `{{favicon}}`       | Favicon-URL                                                                            |
| `{{fullHtml}}`      | Ubehandlet HTML for hele sideinnholdet                                                 |
| `{{highlights}}`    | [[Uthev nettsider\|Uthevinger]] med tekst og tidsstempler                              |
| `{{image}}`         | URL til bilde for sosial deling                                                        |
| `{{published}}`     | Publiseringsdato, kan formateres med `date`-filteret                                   |
| `{{selection}}`     | Utvalg i Markdown-format                                                               |
| `{{selectionHtml}}` | Utvalg i HTML-format                                                                   |
| `{{site}}`          | Nettstedsnavn eller utgiver                                                            |
| `{{title}}`         | Tittel på siden                                                                        |
| `{{time}}`          | Gjeldende dato og tid                                                                  |
| `{{url}}`           | Gjeldende URL                                                                          |
| `{{words}}`         | Antall ord                                                                             |

## Prompt-variabler

Prompt-variabler utnytter språkmodeller til å hente ut og modifisere data ved hjelp av naturlig språk. Prompt-variabler krever at [[Tolk nettsider|Tolk]] er aktivert og konfigurert.

Prompt-variabler bruker syntaksen `{{"et sammendrag av siden"}}`. Anførselstegnene rundt prompten er viktige og skiller prompter fra forhåndsinnstilte variabler. Prompt-svar kan etterbehandles med [[Filtre|filtre]], f.eks. `{{"et sammendrag av siden"|blockquote}}`.

### Når du bør bruke prompt-variabler

Prompt-variabler har fordelen av å være ekstremt fleksible og enkle å skrive, men de har flere avveininger: de er tregere å kjøre, og kan ha kostnads- og personvernhensyn avhengig av [[Tolk nettsider#Modeller|leverandøren]] du velger.

I motsetning til andre variabeltyper må prompt-variabler behandles av en ekstern språkmodell, så de erstattes først når [[Tolk nettsider|Tolk]] har kjørt.

Det er best å *ikke* bruke prompt-variabler hvis dataene du vil hente ut er i et konsistent format som kan hentes ut med andre variabeltyper.

På den annen side kan prompt-variabler være nyttige hvis dataene du vil hente ut er i et *inkonsistent* format på tvers av nettsteder. For eksempel kan du lage en [[Obsidian Web Clipper/Maler|mal]] for å lagre bøker som er uavhengig av boknettstedet. Prompt-variabler som `{{"forfatter av boken"}}` vil fungere på tvers av alle boknettsted, mens selektor-variabler vanligvis bare fungerer for ett nettsted.

### Eksempler

Prompter kan bruke nesten enhver naturlig språk-forespørsel. Avhengig av modellen du bruker, kan prompter forespørre eller oversette data på tvers av språk.

- `{{"et sammendrag i tre punkter, oversatt til fransk"}}` for å hente ut punkter om siden og oversette dem til fransk.
- `{{"un resumé de la page en trois points"}}` for å hente ut tre punkter ved hjelp av en prompt på fransk.

Prompter kan transformere sideinnhold til JSON som kan manipuleres med [[Filtre|filtre]]. For eksempel:

```
{{"return a JSON object for each tweet, that includes the author, tweet_text, date in YYYY-MM-DD format, and images array (if there are any)"|map:tweet => ({text: tweet.tweet_text, author: tweet.author, date: tweet.date})|template:"${text}\n— [[@${author}]], [[${date}]]\n"}}
```


## Meta-variabler

Meta-variabler lar deg hente ut data fra [meta-elementer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) på siden, inkludert [Open Graph](https://ogp.me/)-data som brukes til å fylle ut forhåndsvisninger for sosial deling.

- `{{meta:name}}` returnerer innholdet i meta-name-taggen med det gitte navnet, f.eks. `{{meta:name:description}}` for `description`-meta-taggen.
- `{{meta:property}}` returnerer innholdet i meta-property-taggen med den gitte egenskapen, f.eks. `{{meta:property:og:title}}` for `og:title`-meta-taggen.

## Selektor-variabler

Selektor-variabler lar deg hente ut tekstinnhold fra elementer på siden ved hjelp av [CSS-selektorer](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators).

Syntaksen er `{{selector:cssSelector?attribute}}`, der `?attribute` er valgfritt. Hvis ingen attributt er spesifisert, returneres tekstinnholdet i elementet. Du kan også bruke `{{selectorHtml:cssSelector}}` for å få HTML-innholdet i elementet. Selektor-variabler fungerer best på et spesifikt nettsted eller sett med nettsteder som har konsistent HTML-struktur.

- `{{selector:h1}}` returnerer tekstinnhold fra alle `h1`-elementer på siden.
- `{{selector:.author}}` returnerer tekstinnhold fra alle `.author`-elementer på siden.
- `{{selector:img.hero?src}}` returnerer `src`-attributten til bildet med klassen `hero`.
- `{{selector:a.main-link?href}}` returnerer `href`-attributten til ankertaggen med klassen `main-link`.
- `{{selectorHtml:body|markdown}}` returnerer hele HTML-en til `body`-elementet, konvertert til Markdown ved hjelp av `markdown`-[[Filtre#HTML-behandling|filteret]].
- Nestede CSS-selektorer og kombinatorer støttes hvis du trenger mer spesifisitet.
- Hvis flere elementer matcher selektoren, returneres en matrise, som du kan behandle med [[Filtre#Matriser og objekter|matrise- og objektfiltre]] som `join` eller `map`.

Selektor-variabler kan også brukes direkte i [[Logikk|mal-logikk]]:

- I løkker: `{% for comment in selector:.comment %}...{% endfor %}`
- I betingelser: `{% if selector:.premium-badge %}...{% endif %}`
- I variabeltilordning: `{% set items = selector:.list-item %}`

## Schema.org-variabler

Schema-variabler lar deg hente ut data fra [schema.org](https://schema.org/) JSON-LD på siden. Schema.org-data kan også brukes til automatisk å [[Obsidian Web Clipper/Maler#Schema.org-matching|utløse en mal]].

- `{{schema:@Type:key}}` returnerer verdien av nøkkelen fra skjemaet.
- `{{schema:@Type:parent.child}}` returnerer verdien av en nestet egenskap.
- `{{schema:@Type:arrayKey}}` returnerer det første elementet i en matrise.
- `{{schema:@Type:arrayKey[index].property}}` returnerer elementet ved den angitte indeksen i en matrise.
- `{{schema:@Type:arrayKey[*].property}}` returnerer en spesifikk egenskap fra alle elementer i en matrise.

Du kan også bruke en kortnotasjon uten å spesifisere skjematypen:

- `{{schema:author}}` vil matche den første `author`-egenskapen funnet i enhver skjematype.
- `{{schema:name}}` vil matche den første `name`-egenskapen funnet i enhver skjematype.

Denne kortnotasjonen er spesielt nyttig når du ikke vet eller ikke bryr deg om den spesifikke skjematypen, men du vet egenskapsnavnet du leter etter.

Nestede egenskaper og matrisetilgang fungerer også, både med og uten skjema-`@Type` spesifisert:

- `{{schema:author.name}}` vil finne den første `author`-egenskapen og deretter hente dens `name`-underegenskap.
- `{{schema:author[0].name}}` vil hente `name` til den første forfatteren i en matrise av forfattere.
- `{{schema:author[*].name}}` vil returnere en matrise med alle forfatternavn.
