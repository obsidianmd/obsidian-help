---
permalink: import/templates
description: 'Mukauta Importerin luoman muistiinpanon nimeä, ominaisuuksia ja sisältöä.'
---
[[Tuontityökalu]] mahdollistaa pohjien määrittämisen, jotka ohjaavat muistiinpanojen tuontia muista sovelluksista. Tämä tarkoittaa, että voit muokata tuomiesi muistiinpanojen otsikkoa, määreitä ja sisältöä.

## Muokkaa tuontipohjaa

Valitse **Muokkaa** esikatselun yläpuolelta muokataksesi oletuspohjaa. Voit muokata:

- Otsikkona näkyvää muistiinpanon nimeä.
- Muistiinpanon alussa olevia määreitä.
- Muistiinpanon Markdown-sisältöä.

Valitse **Tallenna** palataksesi esikatseluun. Tuontityökalu muistaa muokatun sisäisen pohjan tulevia tuonteja varten, jotka käyttävät samaa muotoilua.

Vaihtoehtoisesti voit ladata pohjan Markdown-tiedostosta nykyisessä holvissa.

## Tulosten esikatselu

Esikatselu näyttää enintään kymmenen näytettä valitsemistasi tiedoista. Käytä nuolipainikkeita siirtyäksesi näytteiden välillä. Tuontiasetusten ja pohjan muutokset päivittävät esikatselun ennen kuin mitään lisätään holviisi.

Joitakin liitteitä, etäkohteita ja muistiinpanojen välisiä viittauksia ei voida täysin ratkaista ennen tuonnin suorittamista. Näissä tapauksissa esikatselu saattaa säilyttää lähdelinkin tai näyttää paikkamerkin.

## Pohjien syntaksi

Tuontityökalun pohjat käyttävät syntaksia, joka koostuu muuttujista, [[Suodattimet|suodattimista]] ja [[Logiikka|logiikasta]]. Se käyttää samaa [Knap](https://github.com/obsidianmd/knap)-syntaksia kuin [[Johdanto Obsidian Web Clipperiin|Web Clipper]].

Lisää muuttujia kaksoiskaarisulkeilla, kuten `{{title}}`, `{{content}}` tai `{{date}}`. Muuttujia voi käyttää muistiinpanon nimessä, määreissä ja sisällössä.

Voit muokata muuttujia [[Suodattimet|suodattimilla]]. Esimerkiksi päiväyksen muodon voi muuttaa käyttämällä `{{date|date:"YYYY-MM-DD"}}`. Käytä [[Logiikka|logiikkaa]] edistyneempiin ehtolauseisiin, silmukoihin ja muuttujien määritykseen.

## Muuttujat

Seuraavat muuttujat ovat käytettävissä kaikissa tuontityökalun pohjissa:

| Muuttuja         | Kuvaus                                                                                              |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| `{{body}}`       | Markdown-runko ilman määreitä (ei alkulehtiä).                                                      |
| `{{content}}`    | Täydellinen Markdown ennen valitun pohjan soveltamista.                                             |
| `{{ctime}}`      | Lähteen luontiaika ISO 8601 -aikaleimana; tyhjä kun ei saatavilla.                                  |
| `{{date}}`       | Nykyinen päivämäärä ja aika pohjan renderöintihetkellä, ISO 8601 -aikaleimana.                      |
| `{{importer}}`   | Tuontityökalun tunnus, kuten `keep`, `html` tai `notion-api`.                                       |
| `{{folder}}`     | Lopullinen holvisuhteinen yläkansio. Tyhjä kun muistiinpano on holvin juuressa.                     |
| `{{mtime}}`      | Lähteen muokkausaika ISO 8601 -aikaleimana; tyhjä kun ei saatavilla.                                |
| `{{noteName}}`   | Lopullinen ratkaistu muistiinpanon nimi virheellisten merkkien poiston ja mahdollisten kaksoiskappaleliitteiden jälkeen. |
| `{{path}}`       | Lopullinen holvisuhteinen polku, sisältäen `.md`-tiedostopäätteen.                                  |
| `{{properties}}` | Objekti, joka sisältää alkulehden määreet.                                                          |
| `{{source}}`     | Objekti, joka sisältää luodut määreet ja lähdekohtaiset arvot.                                      |
| `{{sourceId}}`   | Pysyvä lähdetunniste, kun tuontityökalu tarjoaa sellaisen; muuten tyhjä.                            |
| `{{time}}`       | Alias muuttujalle `{{date}}`.                                                                       |
| `{{title}}`      | Alkuperäinen muistiinpanon otsikko ennen siivousta ja kaksoiskappaleiden erottelua.                 |

## Lähdearvot määreille

Tuontimuodoille, jotka tukevat [[Määreet|määreitä]], lähdearvot ovat myös käytettävissä ylätason muuttujina käytön helpottamiseksi.

Jos lähdearvolla on sama nimi kuin jaetulla muuttujalla, käytä sitä `{{source}}`-objektin kautta. Esimerkiksi jos tuontilähteelläsi on määre nimeltä `content`, se on käytettävissä muodossa `{{source.content}}`, kun taas `{{content}}` pysyy tuontityökalun oletusmuuttujana.

Käytä hakasulkumerkintää kun kentän nimi sisältää välilyöntejä, välimerkkejä tai muita erikoismerkkejä:

```twig
{{source["Project: status"]}}
```

## Esimerkkipohja

Tässä on esimerkki pohjasta, jossa käytetään muuttujia ja [[Suodattimet|suodattimia]]:

```twig
---
created: {{ctime | date:"YYYY-MM-DD"}}
modified: {{mtime | date:"YYYY-MM-DD"}}
source: {{importer}}
---
# {{title}}

{{body}}
```

Voit lisätä tietoa muistiinpanoon ehdollisesti käyttämällä [[Logiikka|logiikkaa]]:

```twig
{% if tags %}
## Tunnisteet
{% for tag in tags %}
- {{tag}}
{% endfor %}
{% endif %}
```
