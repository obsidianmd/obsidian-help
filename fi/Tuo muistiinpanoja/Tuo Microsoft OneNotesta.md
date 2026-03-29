---
permalink: import/onenote
---
Obsidian mahdollistaa muistiinpanojen siirtämisen helposti Microsoft OneNotesta käyttämällä [[Tuontityökalu|Tuontityökalu-lisäosaa]]. Tämä muuntaa OneNote-tietosi kestäviksi Markdown-tiedostoiksi, joita voit käyttää Obsidianin ja monien muiden sovellusten kanssa.

> [!Warning]
> Vain henkilökohtaisen tilisi omistamia muistikirjoja voidaan tuoda. Jaettuja muistiinpanoja tai työ- ja koulutilejä ei tueta.

## Tuo OneNote-tietosi Obsidianiin

Tarvitset virallisen Obsidianin [[Tuontityökalu]]-lisäosan, jonka voit [asentaa täältä](obsidian://show-plugin?id=obsidian-importer).

1. Avaa **[[Asetukset]]**.
2. Siirry kohtaan **Yhteisön lisäosat** ja [asenna Tuontityökalu](obsidian://show-plugin?id=obsidian-importer).
3. Ota Tuontityökalu-lisäosa käyttöön.
4. Avaa **Tuontityökalu**-lisäosa komentovalikon tai nauhavalikossa olevan kuvakkeen kautta.
5. Valitse kohdasta **Tiedostomuoto** vaihtoehto **Microsoft OneNote**.
6. Napsauta **Kirjaudu** avataksesi verkkoselaimesi Microsoftin kirjautumissivulle. Syötä sen Microsoft-tilin tunnukset, joka sisältää OneNote-muistikirjasi. Lisätietoa Microsoftin kirjautumisprosessista on alla.
7. Napsauta **Hyväksy** myöntääksesi Obsidianille luvan tarkastella OneNote-muistikirjojasi.
8. Napsauta **Avaa linkki** salliaksesi selaimesi ohjata sinut Obsidian-sovellukseen.
9. Obsidian-sovelluksessa Tuontityökalu-valintaikkuna näyttää nyt, että olet kirjautunut sisään, ja luettelee OneNote-muistikirjasi ja -osiot. Valitse osiot, jotka haluat tuoda.

![[OneNote-Importer-Select-Sections.png]]

10. Napsauta **Tuo** ja odota, kunnes tuonti on valmis.
11. Valmis!

## Vianmääritys

### Osioita tai muistikirjoja ei näy

Varmista, että tuotavat muistikirjat on synkronoitu OneDriveen ja ne näkyvät OneNote Webissä. Niiden täytyy olla sinun omistamiasi (muiden kirjoittamia jaettuja muistikirjoja ei tueta).

Jos tietty osio puuttuu, varmista, ettei se ole lukittu osio — lukitut osiot eivät näy ennen kuin lukitus poistetaan.

### Tuodut muistiinpanot ovat tyhjiä tai sisältö puuttuu

Tämä ongelma voi esiintyä muistikirjoissa, joita käytät harvoin. Ratkaise ongelma seuraavilla vaiheilla:

1. Avaa [OneNote Web](https://onenote.com/notebooks) selaimessasi.
2. **Napsauta hiiren oikealla painikkeella** muistikirjoja, joista sisältö puuttuu.
3. Valitse valikosta **Vie muistikirja**.
4. **Pura** juuri lataamasi tiedosto kansioon.
5. Lataa OneNote-muistikirjasi [tänne](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Avaa **Obsidianin Tuontityökalu** ja yritä tuontia uudelleen.

Jos olet noudattanut näitä ohjeita ja ongelmasi ei ole ratkennut, on mahdollista, että Microsoftin palvelimilla on tilapäinen ongelma. Odota siinä tapauksessa muutama minuutti ja yritä uudelleen. Jos ongelma jatkuu, avaa vikaraportti [Obsidian Importer GitHub -arkistossa](https://github.com/obsidianmd/obsidian-importer/issues).

## Tietosuoja

Obsidianin Tuontityökalu-lisäosa käyttää [OAuthia](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) tunnistautuakseen Microsoft-tilillesi ja tuodakseen OneNote-muistikirjasi. Tämä myöntää lyhytaikaisen käyttöoikeustunnisteen tilillesi, jota käytetään vain tietokoneeltasi eikä sitä koskaan tallenneta. Tuonnin valmistuttua voit halutessasi peruuttaa tunnisteen [Microsoftin sovellukset ja palvelut -sivulla](https://account.live.com/consent/Manage).
