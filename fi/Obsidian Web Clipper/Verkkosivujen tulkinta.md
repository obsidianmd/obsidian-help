---
permalink: web-clipper/interpreter
---
Tulkki on [[Johdanto Obsidian Web Clipperiin|Web Clipperin]] ominaisuus, jonka avulla voit vuorovaikuttaa verkkosivujen kanssa luonnollisella kielellä. Tulkki auttaa sinua kaappaamaan ja muokkaamaan tietoja, jotka haluat tallentaa Obsidianiin. Esimerkiksi:

- Tiettyjen tekstikappaleiden poimiminen.
- Tietojen tiivistäminen tai selittäminen.
- Tekstin muuntaminen muodosta toiseen.
- Tekstin kääntäminen toiselle kielelle.

Tulkki hyödyntää kielimalleja verkkosivun tietojen käsittelyyn ja palauttaa tulokset [[Muuttujat|muuttujien]] avulla, jotka voit lisätä [[Obsidian Web Clipper/Mallineet|Web Clipper -mallineisiin]].

![[web-clipper-interpreter-demo.mp4#interface]]

## Esimerkkejä kehotteista

Kehotteet käyttävät [[Muuttujat|muuttujien]] syntaksia `{{"kehotteesi"}}`. Voit käyttää tätä syntaksia minkä tahansa luonnollisen kielen kyselyn kanssa, esim.

- `{{"a summary of the page"}}` sivun yhteenvedon poimimiseen.
- `{{"a three bullet point summary, translated to French"}}` sivua koskevien luettelokohtien poimimiseen ja kääntämiseen ranskaksi.
- `{{"un resumé de la page en trois points"}}` kolmen luettelokohdan poimimiseen ranskankielisellä kehotteella.

Kehotteiden tulostetta voidaan muokata edelleen [[Suodattimet|suodattimien]] avulla. Suodattimet käsitellään sen jälkeen, kun kehoteresponse on vastaanotettu mallilta. Esimerkiksi: `{{"a summary of the page"|blockquote}}` muuntaa vastauksen lainaukseksi.

## Aloittaminen

Tulkki toimii lähes minkä tahansa kielimallin tarjoajan kanssa, mukaan lukien vaihtoehdot, jotka toimivat yksityisesti laitteellasi. Tulkin käyttöönotto:

1. Siirry **Tulkki**-osioon Web Clipperin asetuksissa.
2. Ota käyttöön **Ota tulkki käyttöön**.
3. Määritä tarjoaja ja malli, katso alla oleva [[Verkkosivujen tulkinta#Mallit|mallit]]-osio.
4. Lisää [[Muuttujat|kehotemuuttujia]] [[Obsidian Web Clipper/Mallineet|mallineisiisi]].
5. Jos mallineesi sisältää kehotemuuttujia, Tulkki-osio näkyy, kun [[Verkkosivujen leikkaaminen|leikkaat sivun]]. Napsauta **Tulkitse** kehotemuuttujien käsittelemiseksi.

## Miten se toimii

Kun tulkki on käytössä *ja* mallineesi sisältää [[Muuttujat#Kehotemuuttujat|kehotemuuttujia]], laajennusikkunassa näytetään uusi Tulkki-osio **Lisää Obsidianiin** -painikkeen yläpuolella. Tässä osiossa voit valita mallin ja suorittaa tulkin nykyiselle sivulle.

Kun napsautat **Tulkitse**, tulkki lähettää sivun kontekstin valitsemallesi mallille yhdessä *kaikkien* mallineesi kehotteiden kanssa yhdessä pyynnössä. Valitsemastasi mallin tarjoajasta riippuen tämä voi olla ulkoinen kutsu tai paikallinen laitteellesi. Malli arvioi kehotteesi sivun kontekstin perusteella ja palauttaa vastauksensa. Tulkki korvaa sitten kehotemuuttujat vastausten tiedoilla.

Koko prosessi voi kestää millisekunneista yli 30 sekuntiin riippuen käyttämästäsi mallista ja käsiteltävän tiedon määrästä.

## Konteksti

Termi *konteksti* viittaa sivun tietoihin, joita tulkki käyttää kehotteiden käsittelyyn. Mitä pienempi konteksti, sitä nopeammin tulkki toimii.

Oletuksena tulkki käyttää koko sivun HTML:ää kontekstina, mutta tämä voi tehdä kehotteista tarpeettoman hitaita ja kalliita.

Voit ohittaa oletuskontekstin tulkin **Lisäasetuksissa** ja määrittää kontekstin [[Obsidian Web Clipper/Mallineet|mallinekohtaisesti]].

Kohdennetumman kontekstin määrittämiseksi käytä [[Muuttujat#Valitsinmuuttujat|valitsinmuuttujia]] (tai muita muuttujatyyppejä) tulkataksesi sivun tietyn osan. Voit esimerkiksi käyttää seuraavaa valitsinmuuttujaa mallineesi tulkkauksen kontekstissa:

```
{{selectorHtml:#main}}
```

Tämä suorittaisi tulkin vain verkkosivun `#main`-elementille, jos se on olemassa. [[Suodattimet#HTML-käsittely|HTML-käsittelysuodattimet]] kuten `remove_html`, `strip_tags` ja `strip_attr` voivat olla hyödyllisiä kontekstin pituuden vähentämiseksi ja käsittelyn nopeuttamiseksi.

## Mallit

> [!warning] Yksityisyys
> Käyttämällä kolmannen osapuolen mallin tarjoajaa hyväksyt heidän käyttöehtonsa ja tietosuojakäytäntönsä. Tulkkipyynnöt lähetetään suoraan valitsemallesi tarjoajalle. Obsidian ei kerää eikä tallenna mitään tietoja pyyntöihisi liittyen.

### Esiasetettavat tarjoajat

Tulkki sisältää useita esiasettuja tarjoajia. Näiden tarjoajien käyttämiseen tarvitset API-avaimen, jonka saat kirjautumalla tarjoajasi tilille. Sinun on myös päätettävä, mitä mallia tai malleja käytät.

| Tarjoaja           | API-avain                                                   | Mallit                                                                               |
| ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Anthropic          | [API-avain](https://console.anthropic.com/settings/keys) | [Mallit](https://docs.anthropic.com/en/docs/about-claude/models)                     |
| Azure&nbsp;OpenAI  | [API-avain](https://oai.azure.com/portal/)               | [Mallit](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| DeepSeek           | [API-avain](https://platform.deepseek.com/api_keys)           | [Mallit](https://api-docs.deepseek.com/quick_start/pricing)                          |
| Google&nbsp;Gemini | [API-avain](https://aistudio.google.com/apikey)          | [Mallit](https://ai.google.dev/gemini-api/docs/models/gemini)                        |
| Hugging Face       | [API-avain](https://huggingface.co/settings/tokens)           | [Mallit](https://huggingface.co/models?pipeline_tag=text-generation&sort=trending)   |
| Meta               | [API-avain](https://llama.developer.meta.com)                 | [Mallit](https://llama.developer.meta.com/docs/models)                               |
| Ollama             | ei tarvita                                                         | [Mallit](https://ollama.com/search)                                                  |
| OpenAI             | [API-avain](https://platform.openai.com/api-keys)        | [Mallit](https://platform.openai.com/docs/models)                                    |
| OpenRouter         | [API-avain](https://openrouter.ai/settings/keys)         | [Mallit](https://openrouter.ai/models)                                               |
| Perplexity         | [API-avain](https://www.perplexity.ai/settings/api)           | [Mallit](https://docs.perplexity.ai/guides/model-cards)                              |
| xAI Grok           | [API-avain](https://console.x.ai/team/default/api-keys)       | [Mallit](https://docs.x.ai/docs/models)                                              |

### Mallin valitseminen

Yleisesti suosittelemme pienten mallien käyttöä Web Clipperin kanssa, koska ne ovat nopeampia ja toimivat riittävän tarkasti tähän tehtävään. Esimerkkejä pienemmistä malleista ovat **Anthropicin Claude Haiku**, **Google Gemini Flash**, **Llama** 3B tai 8B parametrilla tai **OpenAI:n Mini**-mallisarja.

### Mukautetut tarjoajat ja mallit

Mukautetun tarjoajan ja/tai mallin lisäämiseksi siirry Web Clipperin **[[Asetukset]]** → **Tulkki**:

- **Lisää palveluntarjoaja** esiasetettujen ja mukautettujen tarjoajien määrittämiseksi.
- **Lisää malli** esiasetettujen ja mukautettujen mallien määrittämiseksi.

Mukautettua tarjoajaa lisätessäsi suosittelemme käyttämään heidän chat completions -päätepistettään **Perus-URL**:na — se päättyy tyypillisesti `/chat/completions`.

### Paikalliset mallit

Tulkki voi käyttää paikallisia malleja, jotka tarjoavat paremman yksityisyyden ja offline-yhteensopivuuden. Paikallisten mallien suorittamiseen on useita vaihtoehtoja. Yksi helpoimmista määritettävistä on Ollama.

#### Ollama

[Ollama](https://ollama.com/) mahdollistaa kielimallien suorittamisen paikallisesti ja yksityisesti laitteellasi.

Kun olet ladannut ja asentanut Ollaman, lisää Ollama käyttämällä **Lisää palveluntarjoaja** -toimintoa tulkin asetuksissa. Ollama ei vaadi API-avainta. Valitse sitten malli [malliluettelosta](https://ollama.com/search). Jos esimerkiksi haluat käyttää [Llama 3.2](https://ollama.com/library/llama3.2):ta, napsauta **Lisää malli** ja täytä:

- **Tarjoaja:** Ollama
- **Näyttönimi:** Llama 3.2, tämä arvo on muokattavissa.
- **Mallin tunnus:** `llama3.2`, tämän on vastattava täsmälleen Ollaman mallin tunnusta.

**Käynnistä Ollama-palvelin**

Jotta selainlaajennus voi vuorovaikuttaa Ollaman kanssa, sinun on [annettava sille nimenomaiset oikeudet](https://github.com/ollama/ollama/issues/2308) palvelinta käynnistäessäsi, muuten näet `403`-virheen.

Sulje Ollama-sovellus ja suorita seuraava komento terminaalissasi. Protokolla tulee vaihtaa selaimesi laajennusprotokollan mukaiseksi, jos et käytä Chromea tai Firefoxia.

```
OLLAMA_ORIGINS=moz-extension://*,chrome-extension://*,safari-web-extension://* ollama serve
```

Suorita sitten mallisi Ollamalla normaalisti, esim.

```
ollama run llama3.2
```

**Kontekstin pituus**

Ollaman konteksti-ikkuna on oletuksena 2048 tokenia. Tämä on viestien ja vastauksen tokenien enimmäismäärä. Pitkää verkkosivua leikatessa voit helposti ylittää tämän rajan. Ollama epäonnistuu hiljaisesti ja palauttaa epäolennaisia tuloksia. Vaihtoehtoja:

- Kasvata Ollaman `num_ctx`-parametria. Huomioi, että pidempi konteksti vaatii enemmän muistia.
- Käytä [[#Konteksti]]-kenttää mallineessasi kohdennetumman sivun osan tarjoamiseksi, tai leikkaa kontekstia [[Suodattimet|suodattimella]], esim. `{{content|slice:0,1000}}`.
