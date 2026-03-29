---
permalink: publish/publish
publish: true
mobile: true
description: Opi julkaisemaan sisältösi Obsidian Publishin avulla
---
Tämä sivu selittää, miten julkaistua sisältöä hallitaan. Lisätietoja sivustosi tyylin mukauttamisesta on sivulla [[Mukauta sivustoasi]].

## Edellytykset

- Obsidian-tili. Jos sinulla ei vielä ole sellaista, [rekisteröidy nyt](https://obsidian.md/auth?returnto=%2Faccount%2Fpublish#signup).
- Voimassa oleva Obsidian Publish -tilaus. Jos sinulla ei vielä ole sellaista, tilaa [käyttäjätilisi hallintapaneelista](https://obsidian.md/account/publish).
- **Publish**-sisäänrakennettu lisäosa on [[Obsidian Publishin käyttöönotto#Ota Obsidian Publish käyttöön|käytössä]].
- [[Hallinnoi sivustoja#Luo uusi sivusto|Publish-sivusto]] on luotu.

## Muistiinpanojen julkaiseminen

1. Valitse **nauhavalikosta** **Julkaise muutokset** ![[lucide-send.svg#icon]].
2. Valitse **Julkaise muutokset** -valintaikkunasta **UUSI** nähdäksesi kaikki julkaisemattomat muistiinpanot.
3. Valitse muistiinpanot, jotka haluat julkaista.
4. Valitse **Julkaise**.

## Julkaisun poistaminen

Muistiinpanot säilyvät paikallisessa holvissasi, vaikka poistaisit niiden julkaisun.

1. Valitse **nauhavalikosta** **Julkaise muutokset** ![[lucide-send.svg#icon]].
2. Valitse **Julkaise muutokset** -valintaikkunasta **MUUTTUMATON** nähdäksesi kaikki julkaistut muistiinpanot.
3. Valitse muistiinpanot, joiden julkaisun haluat poistaa.
4. Valitse **Julkaise**.

## Julkaistun muistiinpanon päivittäminen

1. Valitse **nauhavalikosta** **Julkaise muutokset** ![[lucide-send.svg#icon]].
2. Valitse **Julkaise muutokset** -valintaikkunasta **MUUTETTU** nähdäksesi kaikki edellisen julkaisun jälkeen muokatut muistiinpanot.
3. Valitse muistiinpanot, jotka haluat päivittää.
4. Valitse **Julkaise**.

> [!hint] Uudelleennimettyjen tai poistettujen muistiinpanojen ja kuvien poistaminen Publishista tapahtuu tässä vaiheessa. Sinun on valittava valintaruutu manuaalisesti tietojen poistamiseksi, sillä turvallisuussyistä sitä ei valita automaattisesti.

## Linkitettyjen tietojen julkaiseminen

Kun julkaiset muistiinpanoja, jotka sisältävät linkkejä muihin muistiinpanoihin tai upotettuja kuvia, rikkinäisiä linkkejä voi esiintyä, ellei linkitettyjä muistiinpanoja myös julkaista. **Obsidian Publish** auttaa estämään tämän valitsemalla automaattisesti median, johon jo valitsemistasi muistiinpanoista viitataan.

Sisällyttääksesi kaikki linkitetyt muistiinpanot, valitse **Lisää linkitetyt** **Julkaise muutokset** -valintaikkunasta.

Tarkista päivitetty valinta ennen julkaisemista varmistaaksesi, ettei mukana ole tietoja, joita et ole valmis julkaisemaan.

> [!tip] **Lisää linkitetyt** -toiminto noudattaa [[#Tietojen ohittaminen|ohittamismäärityksiä]].

## Julkaistavien tietojen automaattinen valinta

Aseta `publish: true` muistiinpanon [[Määreet|määreisiin]], jotta se sisällytetään automaattisesti julkaistavaksi uutena tai muuttuneena muistiinpanona.

Voit myös valita automaattisesti tiettyjen kansioiden muistiinpanot ja linkitetyt kuvat lisäämällä ne **Sisällytettyjen** kansioiden joukkoon:

1. Valitse **nauhavalikosta** **Julkaise muutokset** ![[lucide-send.svg#icon]] tai avaa [[Komentovalikko]] ja kirjoita **Publish: Julkaise muutokset...**.
2. Valitse **Hallinnoi julkaisusuodattimia** ![[lucide-filter.svg#icon]] -kuvake.
3. Valitse **Sisällytetyt kansiot** -osiosta **Hallinnoi**.
4. Valitse haluamasi kansiot ehdottimesta.
5. Kansio lisätään sisällytettyjen luetteloon.
6. Valitse **Valmis**, kun olet valmis.

### Tietojen ohittaminen

Ohittaaksesi muistiinpanon Obsidian Publishissa, aseta `publish: false` muistiinpanon [[Määreet|määreisiin]]. Muistiinpano ei enää näy julkaistavien muistiinpanojen luettelossa.

Voit myös ohittaa automaattisesti tiettyjen kansioiden muistiinpanot ja kuvat lisäämällä ne **Pois jätettävien** kansioiden joukkoon:

1. Valitse **nauhavalikosta** **Julkaise muutokset** ![[lucide-send.svg#icon]] tai avaa [[Komentovalikko]] ja kirjoita **Publish: Julkaise muutokset...**.
2. Valitse **Hallinnoi julkaisusuodattimia** ![[lucide-filter.svg#icon]] -kuvake.
3. Valitse **Pois jätettävät kansiot** -osiosta **Hallinnoi**.
4. Valitse haluamasi kansiot ehdottimesta.
5. Kansio lisätään pois jätettävien luetteloon.
6. Valitse **Valmis**, kun olet valmis.

> [!note] `publish: true` ohittaa pois jätettävät kansiot
> Jos tiedostossa on `publish: true`, se julkaistaan silti, vaikka se olisi pois jätettävässä kansiossa tai suodattimessa. Tämä johtuu siitä, että `publish: true` antaa tarkemman hallinnan.
