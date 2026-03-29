---
permalink: import/evernote
---
Obsidian mahdollistaa muistiinpanojesi helpon siirtämisen Evernotesta [[Tuontityökalu|Tuontityökalu-lisäosan]] avulla. Tämä muuntaa Evernote-tietosi kestävään Markdown-muotoon, jota voit käyttää Obsidianin ja monien muiden sovellusten kanssa.

## Vie tietosi Evernotesta

Obsidian käyttää Evernoten vientimuotoa `.enex`-tiedostoja.

Evernoten ohjeet tietojen viemiseen löytyvät [Evernoten verkkosivustolta](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML). Tällä menetelmällä voit viedä kokonaisia muistikirjoja työpöytäsovelluksessa.

1. Siirry Muistikirjat-näkymään.
2. Napsauta **Lisää toimintoja** ( `•••` ) ja valitse **Vie muistikirja...**
3. Valitse **ENEX** tiedostomuodoksi.
3. Valitse sijainti viedylle `.enex`-tiedostolle.

## Tuo Evernote-tietosi Obsidianiin

Tarvitset virallisen Obsidianin [[Tuontityökalu]]-lisäosan, jonka voit [asentaa täältä](obsidian://show-plugin?id=obsidian-importer).

1. Avaa **[[Asetukset]]**.
2. Siirry kohtaan **Yhteisön lisäosat** ja [asenna Tuontityökalu](obsidian://show-plugin?id=obsidian-importer).
3. Ota Tuontityökalu-lisäosa käyttöön.
4. Avaa **Tuontityökalu**-lisäosa komentovalikon tai nauhavalikkon kuvakkeen kautta.
5. Valitse kohdassa **Muotoilu** vaihtoehto **Evernote (.enex)**.
6. Valitse Evernote-varmuuskopiotiedoston sijainti.
7. Napsauta **Tuo** ja odota, kunnes tuonti on valmis.
8. Valmis!

## Tuonnin lisäasetukset

### Tunnistehierarkian säilyttäminen

Evernoten vienti ei säilytä tunnistehierarkiaa. Tunnistehierarkian säilyttämiseksi voit "litistää" tunnisteet erottamalla ne "/"-merkillä. Oletetaan esimerkiksi, että sinulla on seuraava tunnisterakenne:

```
YlätasonTunniste
    AlatasonTunniste
```

Tunnistesuhteiden säilyttämiseksi Obsidianissa sinun täytyy:

1. Napsauta AlatasonTunnistetta hiiren oikealla painikkeella.
2. Valitse "Nimeä uudelleen."
3. Nimeä se muotoon `YlätasonTunniste/AlatasonTunniste`.

### Muistikirjapinojen käsittely

Koska vientiprosessi on rajoitettu yksittäisiin muistikirjoihin, oletusvientitiedosto ei sisällä tietoa muistikirjapinoista. Tuontityökalu voi kuitenkin tunnistaa enex-tiedostonimen kaavoja ja luoda muistikirjapinot uudelleen kansioina.

Oletetaan, että sinulla on muistikirja nimeltä ```MuistikirjaA``` pinossa nimeltä ```Pino1```. Voit luoda muistikirjapinon uudelleen nimeämällä enex-tiedoston muotoon ```Pino1@@@MuistikirjaA```.

Tämän tuloksena muunnetut muistiinpanot luodaan Pino1/MuistikirjaA-kansioon.

### Lisää vaihtoehtoja

Edistyneempiä tuontivaihtoehtoja varten Evernotesta voit myös kokeilla [tuontia Yarlen kautta](https://github.com/akosbalasko/yarle).
