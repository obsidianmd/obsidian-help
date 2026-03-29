---
permalink: publish/troubleshoot
publish: true
mobile: true
description: 'Tällä sivulla kuvataan joitakin yleisiä ongelmia, joita saatat kohdata käyttäessäsi Obsidian Publishia'
---
Tämä sivu luettelee yleisiä ongelmia, joita saatat kohdata [[Johdanto Obsidian Publishiin|Obsidian Publishin]] kanssa, ja kuinka ne ratkaistaan.

Tarkista ensin [[Mediatiedostot]] ja [[Publish-rajoitukset|Publish-rajoitukset]].

## Yleiset

### Muistiinpanojen julkaiseminen

**Saan hajautusvirheen yrittäessäni julkaista muistiinpanoa.**

Käytätkö [[Yhteisön lisäosat|yhteisön lisäosaa]], joka muokkaa tiedoston muokkausaikaa päivityksen yhteydessä? Jos käytät, tämä lisäosa saattaa olla ristiriidassa Publishin kanssa. Tee virheraportti lisäosan kehittäjälle ongelman ratkaisemiseksi.

**Saan oudon verkkovirheen, ja minulla on erittäin suuri Publish-sivusto.**

On todennäköistä, että meidän täytyy tutkia tietokantaasi. [[Apua ja tuki#Ota yhteyttä Obsidianin tukeen|Ota yhteyttä Obsidianin tukeen]] saadaksesi apua.

## CSS ja teemat

**CSS-tyylini [[Asetuskansio|asetuskansiossa]] eivät toimi Publishissa. Miksi?**

Publish ei lue asetuskansiosta. Sen sijaan sinun täytyy luoda `publish.css`-tiedosto julkaisuholvin juurihakemistoon. Voit lukea lisää tästä kohdasta [[Mukauta sivustoasi]].

**CSS-tyylini eivät näytä samalta Publishissa kuin sovelluksessa. Miksi?**

Obsidian Publishin CSS ei ole täsmälleen samanlainen kuin sovelluksessa. Suosittelemme [kehittämään CSS-tyylit ja teemat](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes) erityisesti Publishia varten alusta alkaen.

_Yleisesti_ ottaen se, mikä toimii [[Näkymät ja muokkaustila#Lukutila|lukutilassa]], toimii todennäköisesti myös Publishissa.
