---
permalink: tags
---
Tunnisteet ovat avainsanoja tai aiheita, jotka auttavat sinua löytämään haluamasi muistiinpanot nopeasti.

## Tunnisteen lisääminen muistiinpanoon

Luo tunniste kirjoittamalla risuaita (`#`) muokkaimeen ja sen perään avainsana. Esimerkiksi `#kokous`.

Voit lisätä tunnisteita myös `tags`-[[Määreet|määreen]] avulla. YAML-muodossa tunnisteet tulee aina muotoilla luettelona:

```yaml
---
tags:
  - resepti
  - ruoanlaitto
---
```

## Muistiinpanojen etsiminen tunnisteilla

Löytääksesi muistiinpanoja [[Hae]]-lisäosan avulla, käytä `tag`-[[Hae#Hakuoperaattorit|hakuoperaattoria]] hakutermissäsi, esimerkiksi `tag:#kokous`.

Voit myös hakea tunnisteita napsauttamalla niitä muistiinpanoissasi.

Löytääksesi muistiinpanoja [[Tunnistenäkymä|Tunnistenäkymä]]-lisäosan avulla, valitse **Tunnisteet: Näytä tunnisteet** [[Komentovalikko|komentovalikossa]] ja valitse sitten tunniste, jota haluat hakea.

## Sisäkkäiset tunnisteet

Sisäkkäiset tunnisteet määrittävät tunnistehierarkioita, jotka helpottavat toisiinsa liittyvien tunnisteiden löytämistä ja suodattamista.

Luo sisäkkäisiä tunnisteita käyttämällä kauttaviivoja (`/`) tunnisteen nimessä, esimerkiksi `#saapuneet/luettavat` ja `#saapuneet/käsittely`.

- [[Hae|Haussa]] `tag:saapuneet` vastaa sekä tunnistetta `#saapuneet` että kaikkia sisäkkäisiä tunnisteita, kuten `#saapuneet/luettavat`.
- [[Tunnistenäkymä|Tunnistenäkymässä]] sisäkkäiset tunnisteet näytetään ylätason tunnisteen alla.
- [[Johdanto kantoihin|Kannoissa]] sisäkkäiset tunnisteet tunnistetaan [[Funktiot#hasTag|`hasTag`]]-funktiolla, joten `file.hasTag("a")` vastaa sekä tunnistetta `#a` että `#a/b`.

## Tunnisteen muoto

Voit käyttää tunnisteissa mitä tahansa seuraavista merkeistä:

- Aakkosmerkit
- Numerot
- Alaviiva (`_`)
- Yhdysviiva (`-`)
- Kauttaviiva (`/`) [[#Sisäkkäiset tunnisteet|sisäkkäisille tunnisteille]]
- Yleisesti hyväksytyt Unicode-merkit, mukaan lukien emojit ja muut symbolit

Tunnisteissa on oltava vähintään yksi muu kuin numeromerkki. Esimerkiksi #1984 ei ole kelvollinen tunniste, mutta #v1984 on.

Tunnisteet eivät ole kirjainkoosta riippuvaisia. Esimerkiksi #tunniste ja #TUNNISTE käsitellään samana tunnisteena.

> [!note]
> Tunnisteet näytetään sillä kirjainkoolla, jolla ne on alun perin luotu [[Tunnistenäkymä|Tunnistenäkymässä]].
> Esimerkiksi jos luot ensin #Tunniste ja sitten #TUNNISTE, molemmat näytetään muodossa #Tunniste.

Tunnisteet eivät voi sisältää välilyöntejä. Kahden tai useamman sanan erottamiseksi voit käyttää seuraavia muotoja:

- #camelCase
- #PascalCase
- #snake_case
- #kebab-case
