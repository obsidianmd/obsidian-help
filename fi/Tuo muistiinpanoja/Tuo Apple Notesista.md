---
permalink: import/apple-notes
---
Obsidian mahdollistaa muistiinpanojen siirtämisen helposti Apple Notesista käyttämällä [[Tuontityökalu|Tuontityökalua]]. Tämä muuntaa Apple Notes -tietosi kestäviksi Markdown-tiedostoiksi, joita voit käyttää Obsidianin ja monien muiden sovellusten kanssa.

Tällä hetkellä Tuontityökalu tukee Apple Notesista siirtämistä vain macOS:llä. Se ei ole vielä saatavilla iOS:llä.

## Apple Notes -tietojen tuominen Obsidianiin

Tarvitset virallisen Obsidianin [[Tuontityökalu]]-lisäosan, jonka voit [asentaa täältä](obsidian://show-plugin?id=obsidian-importer).

1. Avaa **[[Asetukset]]**.
2. Siirry kohtaan **Yhteisön lisäosat** ja [asenna Tuontityökalu](obsidian://show-plugin?id=obsidian-importer).
3. Ota Tuontityökalu käyttöön.
4. Avaa **Tuontityökalu** komentovalikosta tai nauhavalikosta.
5. Valitse **Muotoilu**-kohdasta **Apple Notes**.
6. Napsauta **Tuo**.
7. Napsauta **Avaa** ponnahdusikkunassa, jonka otsikko on `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Odota, kunnes tuonti on valmis.
9. Valmista tuli!

## Tuettu sisältö

Obsidianin Tuontityökalu tukee käytännössä kaikkia Apple Notesin sisältötyyppejä. Näihin kuuluvat taulukot, kuvat, piirrokset, skannaukset, PDF-tiedostot sekä iOS 17:ssä esitellyt linkit.

> [!Warning]
> Salasanalla suojatut muistiinpanot ovat Applen salaamia, joten ne on avattava ennen tuontia. Kaikki lukitut muistiinpanot ohitetaan.

### Skannaukset

Apple tallentaa skannaukset useissa eri muodoissa riippuen siitä, miten ne on luotu. Alkuperäisen datan säilyttämiseksi ne viedään eri tavoin.

* Vanhemmilla macOS- tai iOS-versioilla luodut tai katsellut skannaukset viedään sarjana rajaamattomia kuvia.
* Uudemmilla macOS- tai iOS-versioilla luodut tai katsellut skannaukset viedään yleensä rajattuina kuvina.
* Skannaukset, joita on muokattu iOS 17:ssä esitellyillä ominaisuuksilla, viedään yleensä PDF-tiedostoina.

## Vaihtoehtoiset vientimenetelmät

Apple ei tarjoa natiivia vaihtoehtoa muistiinpanojen viemiseen. Saatavilla on kuitenkin useita kolmannen osapuolen työkaluja, kuten Chintan Ghaten [Exporter](https://apps.apple.com/us/app/exporter/id1099120373). Huomioithan, että useimmat työkalut ovat rajallisia sen suhteen, mitä tietoja ne vievät Apple Notesista, eivätkä ne välttämättä tuota yhteensopivinta mahdollista tulostetta. Nämä työkalut toimivat parhaiten, jos Apple Notes -muistiinpanosi ovat pääasiassa pelkkää tekstiä ja sisältävät vähän liitteitä tai erikoisominaisuuksia, kuten piirroksia ja skannauksia.

Käyttämästäsi työkalusta riippuen vienti voi olla Markdown- tai HTML-muodossa. Noudata ohjeita sen mukaan, mihin tiedostomuotoon veit tietosi:

- [[Tuo HTML-tiedostoja]]
- [[Tuo Markdown-tiedostoja]]
