---
permalink: import/google-keep
---
Obsidian mahdollistaa muistiinpanojesi helpon siirtämisen Google Keepistä käyttämällä [[Tuontityökalu|Tuontityökalu-lisäosaa]]. Tämä muuntaa Google Keep -tietosi kestäviksi Markdown-tiedostoiksi, joita voit käyttää Obsidianin ja monien muiden sovellusten kanssa.

## Vie tietosi Google Keepistä

1. Siirry [Google Takeoutiin](https://takeout.google.com/settings/takeout) ja kirjaudu Google-tilillesi.
2. Napsauta **Poista valinnat** oikeasta yläkulmasta.
3. Vieritä alas ja valitse **Keep** luettelosta.
4. Vieritä sivun alaosaan ja napsauta **Seuraava vaihe**.
5. Napsauta seuraavalla näytöllä **Luo vienti** -painiketta.
6. Lataa `.zip`-tiedosto, kun se on saatavilla.

## Tuo Google Keep -tietosi Obsidianiin

Tarvitset virallisen Obsidianin [[Tuontityökalu]]-lisäosan, jonka voit [asentaa täältä](obsidian://show-plugin?id=obsidian-importer).

1. Avaa **[[Asetukset]]**.
2. Siirry kohtaan **Yhteisön lisäosat** ja [asenna Tuontityökalu](obsidian://show-plugin?id=obsidian-importer).
3. Ota Tuontityökalu-lisäosa käyttöön.
4. Avaa **Tuontityökalu**-lisäosa komentovalikon tai nauhavalikko-kuvakkeen kautta.
5. Valitse kohdasta **Tiedostomuoto** vaihtoehto **Google Keep (.zip).**
6. Valitse `.zip`-tiedostosi sijainti.
7. Napsauta **Tuo** ja odota, kunnes tuonti on valmis.
8. Valmis!

### Tuetut ominaisuudet

- Kaikki tehtäväluettelot tuodaan ylätason kohteina, koska Google Keep ei vie sisennysinformaatiota.
- Muistiinpanojen muistutuksia ja käyttäjämäärityksiä ei tuoda, koska Obsidian ei tue näitä ominaisuuksia.
- Kaikki muu tieto tuodaan sisällön ja tunnisteiden yhdistelmänä.
