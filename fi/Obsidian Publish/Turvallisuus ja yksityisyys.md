---
permalink: publish/security
---
Voit valita muistiinpanot, jotka haluat julkaista [[Johdanto Obsidian Publishiin|Obsidian Publishissa]]. Loput muistiinpanoistasi pysyvät turvassa holvissasi.

Vain julkaistavaksi valitsemasi muistiinpanot lähetetään Obsidianin palvelimille, ja julkaisusta poistamasi muistiinpanot poistetaan.

## Salasanasuojaus

Parempaa pääsynhallintaa varten voit asettaa sivustollesi salasanan. Vierailijoilta pyydetään salasanaa, kun he yrittävät käyttää sivustoa. Jos päätät myöhemmin poistaa sivuston salasanan, koko sivusto tulee jälleen julkisesti nähtäville.

> [!warning] Yksittäisten julkaistujen muistiinpanojen salasanasuojausta ei tällä hetkellä tueta.

### Sivuston salasanan lisääminen

1. Napsauta nauhavalikossa sovellusikkunan vasemmassa reunassa **Julkaise muutokset** ![[lucide-send.svg#icon]].
2. Napsauta **Julkaise muutokset** -valintaikkunassa **Muuta sivuston asetuksia** ![[lucide-cog.svg#icon]].
3. Napsauta kohdassa **Muut sivuston asetukset** kohdan **Salasanat** vieressä **Hallinnoi**.
4. Napsauta **Uusi salasana**.
5. Kirjoita **Salasana**-kenttään sivustosi salasana.
6. (Valinnainen) Kirjoita **Lempinimi**-kenttään salasanalle lempinimi, esimerkiksi henkilö, jolle haluat antaa pääsyn sivustolle.
7. Napsauta **Lisää tämä salasana**.

### Sivuston salasanan poistaminen

1. Napsauta nauhavalikossa sovellusikkunan vasemmassa reunassa **Julkaise muutokset** ![[lucide-send.svg#icon]].
2. Napsauta **Julkaise muutokset** -valintaikkunassa **Muuta sivuston asetuksia** ![[lucide-cog.svg#icon]].
3. Napsauta kohdassa **Muut sivuston asetukset** kohdan **Salasanat** vieressä **Hallinnoi**.
5. Napsauta poistettavan salasanan vieressä olevaa risti-kuvaketta.

## Tietojen kerääminen
### Vierailijatiedot

Oletuksena Obsidian Publish **ei** kerää vierailijatietoja, tallenna evästeitä eikä käsittele henkilötietoja. Voit kuitenkin ottaa analytiikan käyttöön tai kirjata muita käyttäjätietoja [[Mukauta sivustoasi|mukauttamalla sivustoasi]].

Sivuston omistajana olet vastuussa GDPR:n ja alueesi tietosuojasäännösten noudattamisesta. Tämä sisältää oman ilmoitusbannerin luomisen, joka voidaan toteuttaa publish.js-tiedoston avulla, sekä tietosuojakäytäntösivun lisäämisen sivustollesi.

## Pääsy

Obsidian on tehnyt sopimuksen [Cloudflaren](https://www.cloudflare.com) kanssa Publish-sivustojen isännöinnistä. Palvelimet sijaitsevat San Franciscossa, Kaliforniassa.

### Obsidian Publishin pääsynhallinta verkossasi

Obsidian Publishin pääsyn hallitsemiseksi verkossasi sinun on hallittava seuraavia verkkotunnuksia:

- Käyttöliittymä: `publish.obsidian.md`
- Taustajärjestelmä: `publish-main.obsidian.md`

Lisäksi taustajärjestelmäpalvelut käyttävät seuraavia aliverkkotunnuksia: `publish-xx.obsidian.md`, jossa `xx` on numero väliltä `1 - 100`.

> [!tip] Jos palomuurijärjestelmäsi tukee sitä, suosittelemme sallimaan `publish-*.obsidian.md` aliverkkotunnusten jatkuvaa lisääntymistä varten.
