---
permalink: import/tomboy
cssclasses:
  - soft-embed
---
Obsidian mahdollistaa muistiinpanojen tuomisen Tomboysta ja Gnotesta virallisen [[Tuontityökalu|Tuontityökalu-lisäosan]] avulla. Tuontityökalu lukee sovellusten `.note`-tiedostot suoraan ja muuntaa niiden XML-sisällön Markdown-muotoon.

## Paikanna muistiinpanotiedostosi

Tomboy ja Gnote tallentavat muistiinpanot normaalisti seuraaviin kansioihin:

- **macOS:** `~/Library/Application Support/Tomboy`
- **Windows:** `%APPDATA%\Tomboy`
- **Linux:** `~/.local/share/tomboy` tai `~/.local/share/gnote`

Tarkka sijainti voi poiketa, jos olet siirtänyt datakansion tai käytät eri versiota sovelluksesta.

## Tuo Tomboy- tai Gnote-muistiinpanosi

1. Avaa **[[Asetukset]] → Yhteisön lisäosat** ja [asenna Tuontityökalu](obsidian://show-plugin?id=obsidian-importer).
2. Ota Tuontityökalu-lisäosa käyttöön.
3. Avaa **Tuontityökalu** [[Komentovalikko|komentovalikon]] tai nauhavalikossa olevan kuvakkeen kautta.
4. Valitse **Muotoilu**-kohdasta **Tomboy/Gnote (.note)**.
5. Valitse yksittäiset `.note`-tiedostot tai kansio, joka sisältää ne.
6. Tarkista tuontiasetukset, luotu pohja ja esikatselun esimerkit.
7. Valitse **Tuo** ja odota, kunnes tuonti on valmis.

## Mallineet

Käytä [[Tuontimallineet|tuontimallineita]] määrittääksesi täysin, miten tietosi tuodaan.

![[Tuontimallineet#Muuttujat]]
