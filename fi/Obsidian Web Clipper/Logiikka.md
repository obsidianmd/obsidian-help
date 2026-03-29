---
permalink: web-clipper/logic
description: 'Käytä ehtolauseita, silmukoita ja muuttujien määrittelyä Web Clipper -mallipohjissa.'
---
[[Johdanto Obsidian Web Clipperiin|Web Clipper]] tukee mallinelogiikkaa ehdollisille rakenteille, silmukoille ja muuttujien määrittämiselle. Tämä syntaksi on saanut inspiraationsa [Twig](https://twig.symfony.com/)- ja [Liquid](https://shopify.github.io/liquid/)-mallinekielistä.

> [!warning] Vaatii uusimman version
> Logiikkaominaisuudet vaativat Obsidian Web Clipper 1.0.0 -version, jota ei ole vielä hyväksytty kaikissa laajennuskaupoissa.

## Ehdolliset rakenteet

Käytä `{% if %}`-rakennetta sisällyttääksesi sisältöä ehdollisesti muuttujien tai lausekkeiden perusteella.

```twig
{% if author %}
Tekijä: {{author}}
{% endif %}
```

Käytä `{% else %}`-rakennetta varasisisällön tarjoamiseen ja `{% elseif %}`-rakennetta useiden ehtojen ketjuttamiseen:

```twig
{% if status == "published" %}
Julkaistu artikkeli
{% elseif status == "draft" %}
Luonnosartikkeli
{% else %}
Tuntematon tila
{% endif %}
```

### Vertailuoperaattorit

Seuraavat vertailuoperaattorit ovat tuettuja:

| Operaattori | Kuvaus |
|----------|-------------|
| `==` | Yhtä suuri kuin |
| `!=` | Eri suuri kuin |
| `>` | Suurempi kuin |
| `<` | Pienempi kuin |
| `>=` | Suurempi tai yhtä suuri kuin |
| `<=` | Pienempi tai yhtä suuri kuin |
| `contains` | Tarkistaa sisältääkö merkkijono alimerkkijonon tai taulukko arvon |

Esimerkkejä:
- `{% if title == "Home" %}` — merkkijonojen yhtäsuuruus
- `{% if price >= 100 %}` — numeerinen vertailu
- `{% if title contains "Review" %}` — alimerkkijonon tarkistus
- `{% if tags contains "important" %}` — taulukon jäsenyys

### Loogiset operaattorit

Yhdistä ehtoja loogisilla operaattoreilla:

| Operaattori | Vaihtoehto | Kuvaus                              |
| ----------- | ---------- | ----------------------------------- |
| `and`       | `&&`       | Molempien ehtojen on oltava tosia   |
| `or`        | \|\|       | Vähintään yhden ehdon on oltava tosi |
| `not`       | `!`        | Kääntää ehdon päinvastaiseksi       |

Esimerkkejä:
- `{% if author and published %}` — molempien on oltava olemassa
- `{% if draft or archived %}` — jompikumpi ehto
- `{% if not hidden %}` — negaatio
- `{% if (premium or featured) and published %}` — ryhmitellyt ehdot

### Totuusarvon tulkinta

Kun muuttujaa käytetään ilman vertailuoperaattoria, sen "totuusarvo" arvioidaan:

- `false`, `null`, `undefined`, tyhjä merkkijono `""` ja `0` katsotaan **epätosiksi**.
- Tyhjät taulukot `[]` katsotaan **epätosiksi**.
- Kaikki muu on **totta**.

```twig
{% if content %}
Sisältöä on
{% endif %}
```

## Muuttujan määrittäminen

Käytä `{% set %}`-rakennetta luodaksesi tai muokataksesi muuttujia mallineessa:

```twig
{% set slug = title|lower|replace:" ":"-" %}
Tiedosto: {{slug}}.md
```

Muuttujien arvoksi voidaan asettaa:
- Muita muuttujia: `{% set name = author %}`
- Literaaleja: `{% set count = 5 %}` tai `{% set label = "Draft" %}`
- Lausekkeita suodattimilla: `{% set excerpt = content|truncate:100 %}`
- Valitsimen tuloksia: `{% set comments = selector:.comment %}`

`{% set %}`-rakenteella asetetut muuttujat ovat käytettävissä myöhemmässä mallinelogiikassa ja `{{muuttuja}}`-tulosteessa.

## Varavaihtoehdot

Käytä `??`-operaattoria tarjotaksesi varavaihtoehdon, kun muuttuja on tyhjä tai määrittelemätön:

```twig
{{title ?? "Nimetön"}}
```

Jos `title` on tyhjä, määrittelemätön tai epätosi, käytetään varavaihtoehtoa `"Nimetön"`.

Tämä on lyhenne vastaavalle `if`-lauseelle:

```twig
{% if title %}{{title}}{% else %}Nimetön{% endif %}
```

### Varavaihtoehtojen ketjuttaminen

Voit ketjuttaa useita varavaihtoehtoja:

```twig
{{title ?? headline ?? "Ei otsikkoa"}}
```

Tämä käyttää `title`-muuttujaa jos se on saatavilla, muuten `headline`-muuttujaa, muuten merkkijonoa `"Ei otsikkoa"`.

### Suodattimien kanssa

Suodattimet sitoutuvat tiukemmin kuin `??`, joten suodattimet sovelletaan ennen varavaihtoehdon tarkistusta:

```twig
{{title|upper ?? "NIMETÖN"}}
```

Tämä soveltaa `upper`-suodattimen `title`-muuttujaan ensin ja sitten käyttää varavaihtoehtoa `"NIMETÖN"`, jos tulos on tyhjä. Soveltaaksesi suodattimia varavaihtoehtoon, käytä sulkeita tai erillisiä lausekkeita:

```twig
{{title ?? "Nimetön"|lower}}
```

Tämä käyttää `title`-muuttujaa jos se on saatavilla, muuten soveltaa `lower`-suodattimen varavaihtoehtoon, tuloksena `"nimetön"`.

## Silmukat

Käytä `{% for %}`-rakennetta iteroidaksesi taulukoita:

```twig
{% for item in schema:author %}
- {{item.name}}
{% endfor %}
```

### Silmukoiden lähteet

Voit iteroida seuraavia:
- Schema-taulukoita: `{% for item in schema:author %}`
- Valitsimen tuloksia: `{% for comment in selector:.comment %}`
- Aiemmin asetettuja muuttujia: `{% set items = selector:.item %}{% for item in items %}`

### Silmukkamuuttujat

Silmukan sisällä käytettävissäsi on `loop`-objekti, jolla on seuraavat ominaisuudet:

| Muuttuja | Kuvaus |
|----------|-------------|
| `loop.index` | Nykyinen iteraatio (1-indeksoitu) |
| `loop.index0` | Nykyinen iteraatio (0-indeksoitu) |
| `loop.first` | `true` jos ensimmäinen iteraatio |
| `loop.last` | `true` jos viimeinen iteraatio |
| `loop.length` | Kohteiden kokonaismäärä |

```twig
{% for tag in tags %}
{{loop.index}}. {{tag}}
{% if loop.last %} (luettelon loppu){% endif %}
{% endfor %}
```

Taaksepäin yhteensopivuuden vuoksi voit myös käyttää `item_index`-muotoa (jossa `item` on iteraattorimuuttujasi nimi) saadaksesi 0-indeksoidun sijainnin:

```twig
{% for tag in tags %}
{{tag_index}}. {{tag}}
{% endfor %}
```

### Taulukon kohteiden käyttö indeksillä

Käytä hakasulkeita taulukon elementtien käyttämiseen indeksillä:

```twig
{{items[0]}}
{{items[loop.index0]}}
```

Tämä on hyödyllistä, kun tarvitset kohteita useista taulukoista rinnakkain:

```twig
{% set transcripts = selector:.transcript-text %}
{% set timestamps = selector:.timestamp %}

{% for line in transcripts %}
{{timestamps[loop.index0]}} - {{line}}
{% endfor %}
```

Hakasulkemerkintä toimii myös objektin ominaisuuksien kanssa:

```twig
{{user["name"]}}
{{data["my-key"]}}
```

### Sisäkkäiset silmukat

Silmukoita voidaan sisäkkäistää monimutkaisia tietorakenteita varten:

```twig
{% for section in sections %}
## {{section.title}}
{% for item in section.items %}
- {{item}}
{% endfor %}
{% endfor %}
```

## Logiikan yhdistäminen

Ehdollisia rakenteita ja silmukoita voidaan yhdistää:

```twig
{% for item in items %}
{% if item.active %}
- {{item.name}}
{% endif %}
{% endfor %}
```

## Suoritusjärjestys

Mallinelogiikka käsitellään seuraavassa järjestyksessä:

1. **Mallinelogiikka** — `{% if %}`, `{% for %}`, `{% set %}` ja `{{muuttujat}}` arvioidaan ensin
2. **Kehotemuuttujat** — [[Muuttujat#Kehotemuuttujat|Kehotemuuttujat]] kuten `{{"tiivistä tämä"|prompt}}` lähetetään tulkille mallinelogiikan valmistuttua

Tämä tarkoittaa, että voit käyttää mallinelogiikkaa kehotteen rakentamiseen dynaamisesti, mutta kehotteen tulokset eivät ole käytettävissä ehdollisissa rakenteissa tai silmukoissa.
