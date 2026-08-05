---
permalink: import/airtable
---
Obsidian mahdollistaa tietojen tuonnin Airtablesta [[Tuontityökalu|Tuontityökalu-lisäosan]] avulla. Tämä muuntaa Airtable-tietokantasi kestäviksi Markdown-tiedostoiksi, joita voit käyttää offline-tilassa Obsidianissa ja monissa muissa sovelluksissa.

Jokainen taulukko muuttuu muistiinpanokansioksi, jossa jokaista tietuetta kohti on yksi muistiinpano, sekä [[Johdanto kantoihin|kanta]]-tiedosto, joka luo taulukon ja sen näkymät uudelleen. Koska tuonti käyttää Airtable API:a, se vaatii henkilökohtaisen käyttöoikeustunnisteen ja internet-yhteyden.

## Luo Airtablen henkilökohtainen käyttöoikeustunniste

Airtable-tietojen käyttäminen API:n kautta edellyttää henkilökohtaista käyttöoikeustunnistetta. Tämä vaihe kestää noin minuutin.

Tunniste on pitkä numero- ja kirjainjono, joka alkaa tyypillisesti `pat...`, ja sen avulla voit ladata tietosi Airtablesta.

1. Kirjaudu Airtableen ja siirry [Personal access tokens](https://airtable.com/create/tokens) -sivulle tilisi asetuksissa.
2. Valitse **Create new token**.
3. Anna tunnisteelle nimi, esim. "Obsidian". Mikä tahansa nimi käy.
4. Lisää kohtaan **Scopes** `data.records:read` ja `schema.bases:read`.
5. Lisää kohtaan **Access** tietokannat, jotka haluat tuoda, tai valitse kaikki tietokannat työtilassa.
6. Valitse **Create token** ja sitten **Copy** kopioidaksesi tunnisteen.
7. Tallenna tunniste turvalliseen paikkaan, kuten salasananhallintaohjelmaan.

Airtable näyttää tunnisteen vain kerran. Jos kadotat sen, luo uusi.

## Tuo Airtable-tietosi

Tarvitset virallisen Obsidianin [[Tuontityökalu]]-lisäosan, jonka voit [asentaa täältä](obsidian://show-plugin?id=obsidian-importer).

1. Avaa **[[Asetukset]]**.
2. Siirry kohtaan **Yhteisön lisäosat** ja [asenna Tuontityökalu](obsidian://show-plugin?id=obsidian-importer).
3. Ota Tuontityökalu-lisäosa käyttöön.
4. Avaa **Tuontityökalu**-lisäosa komentovalikon tai nauhavalikko-kuvakkeen kautta.
5. Valitse kohdasta **File format** vaihtoehto **Airtable**.
6. Napsauta kohdassa **Airtable Personal Access Token** **Linkki...**-painiketta lisätäksesi uuden sala-avaimen. Anna **tunnukseksi** nimi, kuten `airtable`, ja liitä **sala-avaimeksi** henkilökohtainen käyttöoikeustunnisteesi.
7. Napsauta **Lataa** selataksesi tietokantojasi ja valitse taulukot, jotka haluat tuoda.
8. Tarkista ja muokkaa tuontiasetuksia.
9. Valitse **Import** määrittääksesi, miten kenttäsi muunnetaan muistiinpanoiksi [[Määreet|määreineen]].
10. Napsauta **Jatka** ja odota, kunnes tuonti on valmis.
11. Valmis!

### Tuontiasetukset

- **Convert formulas** — valitse, muunnetaanko kaava-, haku-, rollup- ja laskurikentät [[Kaavat|kantojen kaavoiksi]] (käyttäen Airtablen laskemaa arvoa varavaihtoehtona, kun vastaavaa ei ole), vai tuodaanko ne pelkästään staattisina arvoina.
- **Lataa liitteet** — tallentaa liitetiedostot holviisi käyttäen liitekansio- ja linkkimuotoasetuksiasi. Kun tämä on pois käytöstä tai lataus epäonnistuu, muistiinpano linkittää tiedoston URL-osoitteeseen Airtablessa.
- **View property name** — määre, johon tallennetaan, mihin Airtable-näkymiin tietue kuuluu. Jokainen luodun kannan näkymä suodattaa tämän määreen perusteella. Oletusarvo on `base`.
- **Incremental import** — lisää jokaiseen muistiinpanoon `airtable-id`-määreen, jotta myöhempi tuonti voi ohittaa jo tuodut tietueet. Täydessä tuonnissa tämä määre poistetaan.

## Määritä, miten Airtable-kentät tuodaan

Tuonnin toisessa vaiheessa voit valita, miten kukin kenttä tuodaan.

Jokaiselle taulukkojesi kentälle annetaan muuttuja nimeltä `{{field_name}}`. Oletuksena jokainen kenttä muuttuu määreeksi, ja näiden muuttujien avulla voit nimetä määreitä uudelleen, muuttaa niiden arvoja tai kirjoittaa sisältöä kunkin muistiinpanon leipätekstiin.

Jokaisen taulukon ensisijaista kenttää käytetään aina muistiinpanon otsikkona, ja tietueet sijoitetaan aina taulukon mukaan nimettyyn kansioon, joten nämä asetukset eivät ole muokattavissa.

## Mitä tuodaan

Kun tietokanta on nimeltään `Projects` ja siinä on `Tasks`-taulukko, tuontityökalu luo seuraavan rakenteen:

```
Airtable/
	Projects/
		Tasks.base
		Tasks/
			Write the proposal.md
			Review the draft.md
```

- Yksi muistiinpano tietuetta kohti, jossa ensisijainen kenttä on muistiinpanon otsikko ja tietueen muut kentät ovat [[Määreet|määreitä]].
- Yksi `.base`-tiedosto taulukkoa kohti, jossa jokainen Airtable-näkymä on yhdistetty [[Näkymät|kannan näkymään]]:
	- **Grid** muuttuu [[Taulukkonäkymä|taulukkonäkymäksi]].
	- **Gallery** muuttuu [[Korttinäkymä|korttinäkymäksi]].
	- **List** muuttuu [[Luettelonäkymä|luettelonäkymäksi]].
	- Kaikki muut näkymätyypit muunnetaan taulukkonäkymäksi.
- Airtable-kenttätyypit yhdistetään Obsidianin määretyyppeihin korvaamatta jo asettamiasi tyyppejä.
- Linkitetyt tietueet muuttuvat linkeiksi vastaaviin muistiinpanoihin.
- Liitteet ladataan holviisi holvisi asetusten mukaisesti.

## Rajoitukset

> [!info] Airtable-tuonti on uusi
> Airtable-tuontityökalu on uusi. Jos kohtaat ongelmia muunnossa, [lähetä vikailmoitus](https://github.com/obsidianmd/obsidian-importer/issues), jotta voimme parantaa sitä.

Airtable API:n nopeusrajoitusten vuoksi suurten tietokantojen tuonti voi kestää huomattavan kauan. Ole kärsivällinen.

Airtable API:n rajoitusten vuoksi kaikkia tietoja ei ole saatavilla tai niitä ei voida muuntaa:

- Rollup-arvoja ei tuoda. API ei paljasta rollup-kentän lasketun arvon koostamismenetelmää, joten vain määreen nimi kirjoitetaan yhdessä kannan kaavan kanssa, kun kentän skeema paljastaa lausekkeen.
- Kaavat, jotka käyttävät funktioita joille Obsidianissa ei ole vastinetta, kuten `SWITCH`, `FIND`, `REGEX_EXTRACT` ja `SQRT`, palaavat käyttämään Airtablen staattista arvoa.
- Vain grid-, gallery- ja list-näkymät tuodaan. Muut näkymätyypit, kuten kalenteri, kanban, aikajana ja Gantt, ohitetaan.
- Linkit tietueisiin taulukoissa, joita et valinnut, muuttuvat tietueen pelkäksi otsikoksi linkin sijaan.
- Käyttöliittymäsuunnitteluja, automaatioita, kommentteja ja versiohistoriaa ei tuoda.
