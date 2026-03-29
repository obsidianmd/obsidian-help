---
permalink: plugin-security
---
Obsidian-tiimi suhtautuu tietoturvaan vakavasti. Tällä sivulla selitetään yhteisön lisäosien asentamiseen liittyvät riskit ja mitä Obsidian-tiimi tekee niiden hallitsemiseksi.

## Rajoitettu tila

Oletuksena Obsidian toimii rajoitetussa tilassa kolmannen osapuolen koodin suorittamisen estämiseksi. Poista rajoitettu tila käytöstä vain, jos luotat asentamiesi lisäosien tekijöihin.

Rajoitetun tilan poistaminen käytöstä:

1. Avaa **[[Asetukset]]**.
2. Valitse sivuvalikosta **Yhteisön lisäosat**.
3. Valitse **Ota yhteisön lisäosat käyttöön**.

Rajoitetun tilan käyttöönotto:

1. Avaa **[[Asetukset]]**.
2. Valitse sivuvalikosta **Yhteisön lisäosat**.
3. Valitse **Rajoitettu tila** -kohdan vierestä **Ota käyttöön**.

Asennetut lisäosat säilyvät holvissasi, vaikka ottaisit rajoitetun tilan käyttöön, mutta Obsidian ohittaa ne.

## Lisäosien valtuudet

Teknisistä rajoituksista johtuen Obsidian ei pysty luotettavasti rajoittamaan lisäosia tiettyihin käyttöoikeuksiin tai käyttöoikeustasoihin. Tämä tarkoittaa, että lisäosat perivät Obsidianin käyttöoikeustasot. Tämän vuoksi ota huomioon seuraavat esimerkit siitä, mitä yhteisön lisäosat voivat tehdä:

- Yhteisön lisäosat voivat käyttää tietokoneellasi olevia tiedostoja.
- Yhteisön lisäosat voivat muodostaa internetyhteyden.
- Yhteisön lisäosat voivat asentaa lisäohjelmia.

> [!tip] 
> Jos käsittelet arkaluonteisia tietoja ja haluat asentaa yhteisön lisäosan, suosittelemme tekemään lisäosalle itsenäisen tietoturva-auditoinnin ennen sen käyttöä.

## Lisäosien tarkistusprosessi

Yhteisön lisäosat käyvät läpi alustavan tarkistuksen, kun ne lähetetään lisäosakauppaan. Kaikkien lisäosien on noudatettava [Obsidianin kehittäjäkäytäntöjä](https://docs.obsidian.md/Developer+policies).

Obsidian-tiimi on pieni eikä pysty manuaalisesti tarkistamaan jokaista yhteisön lisäosien uutta julkaisua. Sen sijaan luotamme yhteisön apuun lisäosiin liittyvien ongelmien tunnistamisessa ja raportoinnissa.

- Jos havaitset yhteisön lisäosassa pieniä tietoturva-aukkoja, tarkista lisäosan tekijän `security.md`- tai `readme.md`-tiedostosta ohjeet niiden raportointiin. Kriittisten haavoittuvuuksien osalta ilmoita ongelmasta myös [[Apua ja tuki#Ota yhteyttä Obsidianin tukeen|Obsidianin tukeen]].
- Jos epäilet, että yhteisön lisäosa on haitallinen, ilmoita siitä [[Apua ja tuki#Ota yhteyttä Obsidianin tukeen|Obsidianin tukeen]] tai lähettämällä yksityisviesti moderaattoreillemme.
