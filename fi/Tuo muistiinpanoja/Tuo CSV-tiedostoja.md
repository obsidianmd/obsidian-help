---
permalink: import/csv
cssclasses:
  - soft-embed
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
7. Valitse **Tuo** määrittääksesi, miten CSV-tiedostosi data muunnetaan muistiinpanoiksi [[Määreet|määreineen]].
8. Valitse **Jatka** tarkastellaksesi luotua pohjaa ja esikatselua rivien esimerkeistä.
9. Valitse **Tuo** ja odota, kunnes tuonti on valmis.

## CSV-kenttien tuonnin määrittäminen

Kenttien määritysvaiheessa voit valita, miten data tuodaan. Tuontityökalu luo pohjan CSV-otsikoista, käyttää ensimmäistä saraketta muistiinpanon alkuperäiseksi nimeksi ja luo määreen jokaiselle sarakkeelle.

## Pohjat

Käytä [[Tuontityökalun pohjat|Tuontityökalun pohjia]] määrittääksesi tarkasti, miten datasi tuodaan.

Jokainen CSV-sarake on käytettävissä sen otsikon kautta. Jos sarakkeella ei ole otsikkoa, Tuontityökalu käyttää automaattisesti luotua sarakkeen nimeä.

Käytä hakasulkumerkintää, jotta välilyönnit ja välimerkit käsitellään turvallisesti:

```liquid
{{source["Project name"]}}
{{source["Price ($)"]|yaml}}
```

![[Tuontityökalun pohjat#Muuttujat]]
