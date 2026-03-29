---
permalink: import/csv
---
Obsidian mahdollistaa tietojen tuomisen CSV-tiedostoista virallisen [[Tuontityökalu|Tuontityökalu-lisäosan]] avulla. Tämä on hyödyllistä, jos sinulla on taulukkomuotoista dataa sovelluksissa kuten Excel, Google Sheets, Numbers, Notion tai Airtable.

CSV-tuonti luo Markdown-tiedostoja jokaiselle riville sekä [[Johdanto kantoihin|Kanta]]-tiedoston, joka näyttää kaikki tuodut tiedostot taulukkona.

Jos tuot muistiinpanoja tietystä sovelluksesta, kannattaa ensin tarkistaa [[Tuontityökalu|Tuontityökalu-lisäosan]] tukemien sovellusten luettelo nähdäksesi, onko olemassa erityistä muunninta, joka säilyttää siirrettävän datan paremmin.

## Muistiinpanojen luominen CSV-datasta Obsidianissa

Tarvitset virallisen Obsidianin [[Tuontityökalu]]-lisäosan, jonka voit [asentaa täältä](obsidian://show-plugin?id=obsidian-importer).

1. Avaa **[[Asetukset]]**.
2. Siirry kohtaan **Yhteisön lisäosat** ja [asenna Tuontityökalu](obsidian://show-plugin?id=obsidian-importer).
3. Ota Tuontityökalu-lisäosa käyttöön.
4. Avaa **Tuontityökalu**-lisäosa komentovalikon tai nauhavalikkon kuvakkeen kautta.
5. Valitse kohdassa **Muotoilu** vaihtoehto **CSV (.csv).**
6. Valitse CSV-tiedostosi sijainti.
7. Napsauta **Tuo** määrittääksesi, miten CSV-tiedostosi data muunnetaan muistiinpanoiksi [[Määreet|määreineen]].
8. Napsauta **Jatka** ja odota, kunnes tuonti on valmis.
9. Valmis!

## CSV-kenttien tuonnin määrittäminen

CSV-tuonnin toisessa vaiheessa voit valita, miten data tuodaan käyttämällä pohjaa.

Jokainen CSV-tiedostosi sarake liitetään muuttujaan nimeltä `{{sarakkeen_nimi}}`, joka vastaa tiedostosi otsikkorivin nimeä. Voit käyttää tätä muuttujaa muistiinpanon otsikon, sijainnin, sisällön ja [[Määreet|määreiden]] määrittämiseen.
