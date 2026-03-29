---
permalink: web-clipper/variables
---
[[Obsidian Web Clipper/Mallineet|Web Clipper -pohjatiedostot]] voivat käyttää muuttujia sivun tietojen automaattiseen esitäyttöön pohjatiedostossa. Muuttujia voidaan käyttää **muistiinpanon nimessä**, **muistiinpanon sijainnissa**, **määreissä** ja **muistiinpanon sisällössä**. Muuttujia voidaan myös muokata [[Suodattimet|suodattimilla]].

Käytä `...`-kuvaketta [[Johdanto Obsidian Web Clipperiin|Web Clipper]] -laajennuksessa päästäksesi nykyisen sivun muuttujiin käytettäväksi pohjatiedostoissa. Muuttujia on viittä eri tyyppiä:

- [[Muuttujat#Esiasetetut muuttujat|Esiasetetut muuttujat]]
- [[Muuttujat#Kehoitemuuttujat|Kehoitemuuttujat]]
- [[Muuttujat#Meta-muuttujat|Meta-muuttujat]]
- [[Muuttujat#Valitsinmuuttujat|Valitsinmuuttujat]]
- [[Muuttujat#Schema.org-muuttujat|Schema.org-muuttujat]]

## Esiasetetut muuttujat

Esiasetetut muuttujat luodaan automaattisesti sivun sisällön perusteella. Ne toimivat tyypillisesti useimmilla verkkosivustoilla.

Pääsisältömuuttuja on `{{content}}`, joka sisältää artikkelin sisällön, [[Verkkosivujen korostaminen|korostukset]] tai valinnan, jos sivulla on valittua tekstiä. Huomaa, että `{{content}}` yrittää poimia sivun pääsisällön, mikä ei aina välttämättä ole sitä mitä haluat. Tässä tapauksessa voit käyttää muita esiasettuja muuttujia tai valitsinmuuttujia tarvitsemasi sisällön poimimiseen.

| Muuttuja            | Kuvaus                                                                                 |
| ------------------- | -------------------------------------------------------------------------------------- |
| `{{author}}`        | Sivun tekijä                                                                           |
| `{{content}}`       | Artikkelin sisältö, [[Verkkosivujen korostaminen\|korostukset]] tai valinta, Markdown-muodossa |
| `{{contentHtml}}`   | Artikkelin sisältö, [[Verkkosivujen korostaminen\|korostukset]] tai valinta, HTML-muodossa |
| `{{date}}`          | Nykyinen päivämäärä, voidaan muotoilla `date`-suodattimella                            |
| `{{description}}`   | Kuvaus tai ote                                                                         |
| `{{domain}}`        | Verkkotunnus                                                                           |
| `{{favicon}}`       | Faviconin URL                                                                          |
| `{{fullHtml}}`      | Koko sivun sisällön käsittelemätön HTML                                                |
| `{{highlights}}`    | [[Verkkosivujen korostaminen\|Korostukset]] tekstin ja aikaleimojen kanssa             |
| `{{image}}`         | Sosiaalisen jakamisen kuvan URL                                                        |
| `{{published}}`     | Julkaisupäivä, voidaan muotoilla `date`-suodattimella                                  |
| `{{selection}}`     | Valinta Markdown-muodossa                                                              |
| `{{selectionHtml}}` | Valinta HTML-muodossa                                                                  |
| `{{site}}`          | Sivuston nimi tai julkaisija                                                           |
| `{{title}}`         | Sivun otsikko                                                                          |
| `{{time}}`          | Nykyinen päivämäärä ja kellonaika                                                      |
| `{{url}}`           | Nykyinen URL                                                                           |
| `{{words}}`         | Sanamäärä                                                                              |

## Kehoitemuuttujat

Kehoitemuuttujat hyödyntävät kielimalleja tietojen poimimiseen ja muokkaamiseen luonnollisella kielellä. Kehoitemuuttujat edellyttävät, että [[Verkkosivujen tulkinta|Tulkki]] on käytössä ja määritetty.

Kehoitemuuttujissa käytetään syntaksia `{{"yhteenveto sivusta"}}`. Kehotteen ympärillä olevat lainausmerkit ovat tärkeitä ja erottavat kehotteen esiasetetuista muuttujista. Kehotevastauksia voidaan jälkikäsitellä [[Suodattimet|suodattimilla]], esim. `{{"yhteenveto sivusta"|blockquote}}`.

### Milloin kehoitemuuttujia kannattaa käyttää

Kehoitemuuttujien etuna on äärimmäinen joustavuus ja helppous kirjoittaa, mutta niihin liittyy useita kompromisseja: ne ovat hitaampia suorittaa, ja niistä voi aiheutua kustannus- ja yksityisyysnäkökohtia valitsemastasi [[Verkkosivujen tulkinta#Mallit|tarjoajasta]] riippuen.

Toisin kuin muut muuttujatyypit, kehoitemuuttujat täytyy käsitellä ulkoisella kielimallilla, joten ne korvataan vasta kun [[Verkkosivujen tulkinta|Tulkki]] on suoritettu.

On parasta *olla käyttämättä* kehoitemuuttujia, jos haluamasi tieto on yhtenäisessä muodossa, joka voitaisiin poimia muilla muuttujatyypeillä.

Toisaalta kehoitemuuttujat voivat olla hyödyllisiä, jos haluamasi tieto on *epäyhtenäisessä* muodossa eri verkkosivustoilla. Voit esimerkiksi tehdä [[Obsidian Web Clipper/Mallineet|pohjatiedoston]] kirjojen tallentamiseen, joka on riippumaton kirjasivustosta. Kehoitemuuttujat kuten `{{"kirjan tekijä"}}` toimivat millä tahansa kirjasivustolla, kun taas valitsinmuuttujat toimivat tyypillisesti vain yhdellä sivustolla.

### Esimerkit

Kehotteissa voi käyttää lähes mitä tahansa luonnollisen kielen kyselyä. Käytettävästä mallista riippuen kehotteilla voi kysellä tai kääntää tietoa eri kielten välillä.

- `{{"kolmen kohdan yhteenveto, käännettynä ranskaksi"}}` poimii sivusta luettelomerkityt kohdat ja kääntää ne ranskaksi.
- `{{"un resumé de la page en trois points"}}` poimii kolme kohtaa ranskankielisellä kehotteella.

Kehotteilla voidaan muuntaa sivun sisältö JSON-muotoon, jota voidaan käsitellä [[Suodattimet|suodattimilla]]. Esimerkiksi:

```
{{"return a JSON object for each tweet, that includes the author, tweet_text, date in YYYY-MM-DD format, and images array (if there are any)"|map:tweet => ({text: tweet.tweet_text, author: tweet.author, date: tweet.date})|template:"${text}\n— [[@${author}]], [[${date}]]\n"}}
```


## Meta-muuttujat

Meta-muuttujilla voidaan poimia tietoja sivun [meta-elementeistä](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta), mukaan lukien [Open Graph](https://ogp.me/) -tiedoista, joita käytetään sosiaalisen jakamisen esikatselujen täyttämiseen.

- `{{meta:name}}` palauttaa annetun nimen mukaisen meta name -tunnisteen sisällön, esim. `{{meta:name:description}}` `description`-metatunnisteelle.
- `{{meta:property}}` palauttaa annetun ominaisuuden mukaisen meta property -tunnisteen sisällön, esim. `{{meta:property:og:title}}` `og:title`-metatunnisteelle.

## Valitsinmuuttujat

Valitsinmuuttujilla voidaan poimia tekstisisältöä sivun elementeistä [CSS-valitsimilla](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators).

Syntaksi on `{{selector:cssValitsin?attribuutti}}`, jossa `?attribuutti` on valinnainen. Jos attribuuttia ei ole määritetty, palautetaan elementin tekstisisältö. Voit myös käyttää `{{selectorHtml:cssValitsin}}` saadaksesi elementin HTML-sisällön. Valitsinmuuttujat toimivat parhaiten tietyllä verkkosivustolla tai sivustojen joukolla, joilla on yhtenäinen HTML-rakenne.

- `{{selector:h1}}` palauttaa sivun kaikkien `h1`-elementtien tekstisisällön.
- `{{selector:.author}}` palauttaa sivun kaikkien `.author`-elementtien tekstisisällön.
- `{{selector:img.hero?src}}` palauttaa `hero`-luokan kuvan `src`-attribuutin.
- `{{selector:a.main-link?href}}` palauttaa `main-link`-luokan ankkuritunnisteen `href`-attribuutin.
- `{{selectorHtml:body|markdown}}` palauttaa koko `body`-elementin HTML:n, muunnettuna Markdown-muotoon `markdown`-[[Suodattimet#HTML-käsittely|suodattimella]].
- Sisäkkäiset CSS-valitsimet ja yhdistäjät ovat tuettuja, jos tarvitset tarkempaa kohdistamista.
- Jos useampi elementti vastaa valitsinta, palautetaan taulukko, jota voit käsitellä [[Suodattimet#Taulukot ja oliot|taulukko- ja oliosuodattimilla]] kuten `join` tai `map`.

Valitsinmuuttujia voidaan käyttää myös suoraan [[Logiikka|pohjatiedostojen logiikassa]]:

- Silmukoissa: `{% for comment in selector:.comment %}...{% endfor %}`
- Ehtolauseissa: `{% if selector:.premium-badge %}...{% endif %}`
- Muuttujan määrityksessä: `{% set items = selector:.list-item %}`

## Schema.org-muuttujat

Schema-muuttujilla voidaan poimia tietoja sivun [schema.org](https://schema.org/) JSON-LD-tiedoista. Schema.org-tietoja voidaan myös käyttää [[Obsidian Web Clipper/Mallineet#Schema.org-vastaavuus|pohjatiedoston automaattiseen käynnistämiseen]].

- `{{schema:@Tyyppi:avain}}` palauttaa avaimen arvon skeemasta.
- `{{schema:@Tyyppi:vanhempi.lapsi}}` palauttaa sisäkkäisen ominaisuuden arvon.
- `{{schema:@Tyyppi:taulukkoAvain}}` palauttaa taulukon ensimmäisen alkion.
- `{{schema:@Tyyppi:taulukkoAvain[indeksi].ominaisuus}}` palauttaa taulukon tietyssä indeksissä olevan alkion.
- `{{schema:@Tyyppi:taulukkoAvain[*].ominaisuus}}` palauttaa tietyn ominaisuuden kaikista taulukon alkioista.

Voit myös käyttää lyhennettyä merkintää ilman skeematyyppiä:

- `{{schema:author}}` vastaa ensimmäistä `author`-ominaisuutta mistä tahansa skeematyypistä.
- `{{schema:name}}` vastaa ensimmäistä `name`-ominaisuutta mistä tahansa skeematyypistä.

Tämä lyhenne on erityisen hyödyllinen, kun et tiedä tai et välitä tietystä skeematyypistä, mutta tiedät etsimäsi ominaisuuden nimen.

Sisäkkäiset ominaisuudet ja taulukkohaku toimivat myös sekä skeeman `@Tyyppi`-määrityksen kanssa että ilman sitä:

- `{{schema:author.name}}` löytää ensimmäisen `author`-ominaisuuden ja palauttaa sen `name`-aliominaisuuden.
- `{{schema:author[0].name}}` palauttaa tekijätaulukon ensimmäisen tekijän `name`-arvon.
- `{{schema:author[*].name}}` palauttaa taulukon kaikista tekijöiden nimistä.
