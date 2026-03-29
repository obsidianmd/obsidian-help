---
permalink: web-clipper/highlight
---
[[Johdanto Obsidian Web Clipperiin|Web Clipper]] mahdollistaa tekstin korostamisen verkkosivuilla ja tallennettavien elementtien valitsemisen Obsidianiin. Korostuksesi tallennetaan, joten voit palata niihin palatessasi sivulle.

Korostukset voidaan [[Verkkosivujen leikkaaminen|kaapata]] ja tallentaa Obsidianiin, kun avaat laajennuksen.

## Korostustyökalun käyttöönotto

Voit ottaa korostuksen käyttöön useilla tavoilla selaimestasi riippuen:

- Korostuskuvake laajennuksen paneelissa.
- Pikanäppäimet, joilla aktivoit laajennuksen näppäimistöltä.
- Kontekstivalikko, napsauttamalla hiiren oikealla painikkeella vierailemaasi verkkosivua.

Kun korostus on päällä, voit valita tekstiä, kuvia ja elementtejä, jotka haluat korostaa.

## Korostustyökalun asetukset

Voit muuttaa korostustyökalun toimintaa siirtymällä Web Clipperin asetuksiin. Siellä voit myös viedä korostuksesi `.json`-tiedostoon.

Korostusten lisäämiseen leikattuun muistiinpanoon `{{content}}`-[[Muuttujat|muuttujan]] kautta on kolme vaihtoehtoa:

- **Korosta sivun sisältö** — lisää korostukset suoraan tekstiin [[Obsidian Flavored Markdown|syntaksilla]] `==korostus==`.
- **Korvaa sivun sisältö** — palauttaa luettelon korostuksista ilman sivun sisältöä.
- **Ei korostuksia** — palauttaa alkuperäisen sisällön ilman korostuksia.

Voit lisätä korostukset suoraan pohjatiedostoosi käyttämällä `{{highlights}}`-muuttujaa, esimerkiksi:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```
