---
permalink: headless
description: Obsidian Headless on komentorivityökalu Obsidianin palveluille. Synkronoi holvisi ilman työpöytäsovellusta.
---
Obsidian Headless **(avoin beta)** on päätön asiakasohjelma Obsidianin palveluille. Sen avulla voit [[Headless Sync|synkronoida holveja]] komentoriviltä ilman työpöytäsovellusta, ja käytössäsi ovat kaikki [[Johdanto Obsidian Synciin|Obsidian Syncin]] nopeus-, yksityisyys- ja päästä päähän -salausedut.

Syitä käyttää Obsidian Headlessia:

- Automatisoi etävarmuuskopiot.
- Automatisoi verkkosivuston julkaisu.
- Anna agenttityökaluille pääsy holviin ilman pääsyä koko tietokoneeseesi.
- Synkronoi jaettu tiimiholvi palvelimelle, joka syöttää muita työkaluja.
- Suorita ajastettuja automaatioita, esim. koosta päivittäiset muistiinpanot viikkoyhteenvedoiksi, automaattinen tunnisteiden lisäys jne.

> [!info] Obsidian Headless vs Obsidian CLI
> [[Obsidian CLI]] ohjaa Obsidianin työpöytäsovellusta terminaalistasi. Obsidian Headless on itsenäinen asiakasohjelma, joka toimii riippumattomasti — työpöytäsovellusta ei tarvita.

## Asennus

Obsidian Headless **(avoin beta)** vaatii Node.js 22:n tai uudemman. Asenna se [npm:stä](https://www.npmjs.com/package/obsidian-headless):

```shell
npm install -g obsidian-headless
```

## Todennus

### Kirjaudu

```shell
ob login
```

Jos olet jo kirjautunut, `ob login` näyttää tilitietosi. Vaihtaaksesi tiliä, anna `--email` ja/tai `--password` kirjautuaksesi uudelleen.

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

Kaikki valinnat ovat interaktiivisia, kun ne jätetään pois — sähköposti ja salasana kysytään, ja kaksivaiheinen todennus pyydetään automaattisesti, jos se on käytössä tilillä.

Kirjaudu ulos ja tyhjennä tallennetut tunnistetiedot:

```shell
ob logout
```

## Palvelut

- [[Headless Sync]]: käytä [[Johdanto Obsidian Synciin|Obsidian Synciä]] komentoriviltä ilman työpöytäsovellusta.
- [[Headless Publish]]: käytä [[Johdanto Obsidian Publishiin|Obsidian Publishia]] komentoriviltä ilman työpöytäsovellusta.
