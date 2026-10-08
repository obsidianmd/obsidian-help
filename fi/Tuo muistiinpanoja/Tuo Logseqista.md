---
permalink: import/logseq
cssclasses:
  - soft-embed
---
Obsidian mahdollistaa muistiinpanojen tuomisen tiedostopohjaisesta Logseq-graafista (nykyisin nimeltään "Logseq OG") virallisen [[Tuontityökalu|Tuontityökalu-lisäosan]] avulla. Tuontityökalu lukee Logseqin Markdown-tiedostot suoraan ja muuntaa Logseq-kohtaisen muotoilun kestäviksi tiedostoiksi, joita voit käyttää offline-tilassa Obsidianin ja muiden sovellusten kanssa.

## Ennen aloittamista

- Varmuuskopioi Logseq-graafisi ja Obsidian-holvisi.
- Paikanna Logseq-graafisi juurikansio. Se sisältää tavallisesti kansiot `pages`, `journals`, `assets` ja `logseq`.
- Varmista, että käytät tiedostopohjaista Logseq-graafia. Logseqin tietokantapohjaiset graafit eivät ole vielä tuettuja.

## Tuo Logseq-graafisi

Tarvitset virallisen Obsidianin [[Tuontityökalu]]-lisäosan, jonka voit [asentaa täältä](obsidian://show-plugin?id=obsidian-importer).

1. Avaa **[[Asetukset]] → Yhteisön lisäosat** ja [asenna Tuontityökalu](obsidian://show-plugin?id=obsidian-importer).
2. Ota Tuontityökalu-lisäosa käyttöön.
3. Avaa **Tuontityökalu** [[Komentovalikko|komentovalikon]] tai nauhavalikko-kuvakkeen kautta.
4. Valitse kohdasta **Muotoilu** vaihtoehto **Logseq**.
5. Valitse kohdasta **Valitse kansio** graafisi juurikansio. Valitse kansio, joka sisältää `pages`- ja `journals`-kansiot, älä kumpaakaan niistä erikseen.
6. Tarkista havaitut kansiot ja jätä pois ne, joita et halua tuoda.
7. Valitse tulostekansio ja se, mihin tuodut liitteet tallennetaan.
8. Tarkista tuontiasetukset ja esikatsele esimerkkejä muunnetuista muistiinpanoista.
9. Valitse **Tuo** ja odota tuonnin valmistumista.

## Rajoitukset

- Valkotauluja ei tuoda.
- Kyselyt säilytetään koodilohkoina, jos valitset niiden säilyttämisen.
- Logseqin dynaamiset mallimakrot jäävät sellaisenaan tekstiksi.
- Logseqin muistikorttiaikataulutusta, PDF-merkintöjä ja muita sovelluskohtaisia tietoja ei siirretä.

## Asetukset

Tuontityökalu muuntaa yleiset Logseq-käytännöt, mukaan lukien:

- Sivujen ominaisuudet Obsidianin [[Määreet|määreiksi]].
- Sivujen aliakset, tunnisteet, nimiavaruudet ja linkit.
- Työnkulkutilat tehtäväluettelon valintaruuduiksi, joissa prioriteetit ja päivämäärät säilytetään luettavana tekstinä.
- Lohkotunnukset, lohkoviittaukset ja lohkoupotteet Obsidianin linkeiksi ja upotteiksi.
- Päiväkirjatiedostojen nimet ja päivämäärälinkit.
- Korostukset, numeroidut luettelot, Org-lohkot, mediaupotteet ja linkitetyt tiedostot graafin `assets`-kansiosta.

### Päiväkirjat

Oletuksena **Käytä päivittäisten muistiinpanojen asetuksia** on käytössä. Tuodut päiväkirjat käyttävät [[Päivittäiset muistiinpanot]] -sisäänrakennetun lisäosan konfiguroimaa kansiota ja päiväysmuotoa. Tämä saattaa sijoittaa päiväkirjat Tuontityökalussa valitun tulostekansion ulkopuolelle.

Jos poistat tämän vaihtoehdon käytöstä, päiväkirjat kirjoitetaan `Journals`-kansioon valitun tulostekansion sisällä ja käyttävät `YYYY-MM-DD`-muotoa muistiinpanon nimessä.

### Jäsennysten litistäminen

Logseq käyttää sisäkkäisiä luettelomerkkejä sivun rakenteena. Oletuksena Tuontityökalu säilyttää tämän jäsennysrakenteen. Ota käyttöön **Litistä jäsennykset** muuntaaksesi jäsennyslohkot kappaleiksi, otsikoiksi ja tavanomaisiksi luetteloiksi. Tehtävät ja luettelomaiset kohteiden ryhmät säilyvät luettelokohteina, mutta muunnos on heuristinen. Tarkastele useita esimerkkejä esikatselussa ennen suuren graafin tuomista.

### Yhteensopimattoman tiedon säilyttäminen

Logseqin kyselyillä, muistikorteilla ja ajanseurantamerkinnöillä ei ole suoria vastineita Obsidianissa. Tuontiasetuksissa voit valita, säilytetäänkö kukin sisältötyyppi. Säilytettäessä ne jäävät tekstiksi ilman muotoilua.

- **Säilytä kyselyt** säilyttää kyselyt koodilohkoina tai rivin sisäisenä koodina.
- **Säilytä muistikortit** säilyttää `#card`-merkinnät ja aukkotehtävien käärimet tekstinä ilman muotoilua.
- **Säilytä ajanseuranta** säilyttää `LOGBOOK`- ja `CLOCK`-merkinnät tekstinä ilman muotoilua.

## Mallineet

Käytä [[Tuontimallineet|tuontimallineita]] määrittääksesi täysin, miten Logseq-tietosi tuodaan.

![[Tuontimallineet#Muuttujat]]

## Vianmääritys

Jos Tuontityökalu ei löydä muistiinpanoja, varmista, että valitsit graafin juurikansion ja että määritetyt sivu- tai päiväkirjakansiot sisältävät Markdown-tiedostoja.

Jos liite ilmoitetaan puuttuvaksi, varmista, että viitattu tiedosto on edelleen olemassa graafin `assets`-kansiossa.

Muissa ongelmissa etsi [Tuontityökalun ongelmanseurantajärjestelmästä](https://github.com/obsidianmd/obsidian-importer/issues) tai lähetä virheilmoitus pienellä esimerkkigraafilla.
