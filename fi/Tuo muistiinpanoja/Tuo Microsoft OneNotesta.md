---
permalink: import/onenote
---
Obsidian mahdollistaa muistiinpanojen siirtämisen helposti Microsoft OneNotesta käyttämällä [[Tuontityökalu|Tuontityökalu-lisäosaa]]. Tämä muuntaa OneNote-tietosi kestäviksi Markdown-tiedostoiksi, joita voit käyttää Obsidianin ja monien muiden sovellusten kanssa.

Obsidian tarjoaa kaksi tapaa tuoda OneNote-tietosi:

1. **Microsoft-tili** kirjautuu Microsoft-tilillesi ja tuo OneDriveen synkronoidut muistikirjat. Vaatii internetyhteyden.
2. **Tiedostotuonti** käyttää OneNoten vientitiedostoja (`.onepkg` ja `.one`). Ei vaadi tiliä eikä internetyhteyttä, ja toimii myös muistikirjoille, joita ei ole koskaan synkronoitu.

## Tuo Microsoft-tililtäsi

> [!Warning]
> Vain tilisi omistamia muistikirjoja voidaan tuoda. Muistikirjoja, jotka muut ovat jakaneet kanssasi, ei tueta, ja työ- tai koulutili saattaa vaatia organisaatiosi hyväksynnän.

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
10. Napsauta **Tuo** ja odota, kunnes tuonti on valmis.
11. Valmis!

Jos muistikirjasi kuuluvat työ- tai koulutiliin, OneNote saattaa estää lisäosan pääsyn niihin kirjautumisen jälkeen. Tällöin **Kirjaudu ulos** -painikkeen viereen ilmestyy **Käytä työ- tai koulutiliä** -painike. Käytä sitä kirjautuaksesi uudelleen laajemmilla käyttöoikeuksilla, joita kyseiset tilit tarvitsevat. Organisaatiosi saattaa joutua hyväksymään käyttöoikeuden ennen kuin se toimii.

### Vianmääritys

#### Osioita tai muistikirjoja ei näy

Varmista, että tuotavat muistikirjat on synkronoitu OneDriveen ja ne näkyvät OneNote Webissä. Niiden täytyy olla sinun omistamiasi (muiden kirjoittamia jaettuja muistikirjoja ei tueta).

Jos tietty osio puuttuu, varmista, ettei se ole lukittu osio — lukitut osiot eivät näy ennen kuin lukitus poistetaan.

Jos kyseessä on työ- tai koulumuistikirja, katso yllä oleva huomautus kohdasta **Käytä työ- tai koulutiliä**.

#### Tuodut muistiinpanot ovat tyhjiä tai sisältö puuttuu

Tämä ongelma voi esiintyä muistikirjoissa, joita käytät harvoin. Ratkaise ongelma seuraavilla vaiheilla:

1. Avaa [OneNote Web](https://onenote.com/notebooks) selaimessasi.
2. **Napsauta hiiren oikealla painikkeella** muistikirjoja, joista sisältö puuttuu.
3. Valitse valikosta **Vie muistikirja**.
4. **Pura** juuri lataamasi tiedosto kansioon.
5. Lataa OneNote-muistikirjasi [tänne](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Avaa **Obsidianin Tuontityökalu** ja yritä tuontia uudelleen.

Jos olet noudattanut näitä ohjeita ja ongelmasi ei ole ratkennut, on mahdollista, että Microsoftin palvelimilla on tilapäinen ongelma. Odota siinä tapauksessa muutama minuutti ja yritä uudelleen. Jos ongelma jatkuu, avaa vikaraportti [Obsidian Importer GitHub -arkistossa](https://github.com/obsidianmd/obsidian-importer/issues).

## Tuo OneNote-tiedostoja (.one, .onepkg)

Tiedostotuonti on vaihtoehtoinen tapa tuoda OneNote-tietosi. Se lukee OneNoten itsensä tuottamia vientitiedostoja, joten se ei vaadi Microsoft-tiliä eikä internetyhteyttä. Käytä sitä muistikirjoille, jotka on tallennettu vain tietokoneellesi, muistikirjoille, joihin tilisi ei pääse käsiksi, tai kun et halua kirjautua sisään.

### Vie muistikirjasi OneNotesta

Suosittelemme viemään jokaisen muistikirjan **OneNote-pakettina** (`.onepkg`). Yksi paketti sisältää kaikki muistikirjan osiot, joten voit viedä ja tuoda muistikirjan yhdellä kertaa, ja Tuontityökalu listaa sen osiot valittavaksesi.

Vienti on käytettävissä vain **OneNote for Windows** -työpöytäsovelluksessa, joka tulee Microsoft 365:n mukana. OneNote Macille ja vanhempi OneNote for Windows 10 -sovellus eivät voi viedä näihin muotoihin.

1. Avaa muistikirja, jonka haluat viedä, OneNote for Windowsissa.
2. Siirry kohtaan **Tiedosto → Vie**.
3. Valitse kohdasta **Vie nykyinen** vaihtoehto **Muistikirja**.
4. Valitse kohdasta **Valitse muoto** vaihtoehto **OneNote-paketti (\*.onepkg)**.
5. Napsauta **Vie** ja valitse tallennuspaikka.
6. Toista jokaisen tuotavan muistikirjan kohdalla.

Jos haluat viedä yksittäisen osion, valitse vaiheessa 3 **Osio** ja vaiheessa 4 **OneNote 2010-2016 -osio (\*.one)**.

Voit myös tuoda osiotiedostoja, jotka OneNote jo säilyttää levyllä, ilman vientiä:

- Tietokoneellesi tallennetut muistikirjat ovat kansiossa `Documents\OneNote Notebooks`, yksi `.one`-tiedosto osiota kohden.
- Synkronoitujen muistikirjojen varmuuskopiot ovat kansiossa `%LOCALAPPDATA%\Microsoft\OneNote\16.0\Backup`.

### Tuo OneNote-tiedostosi

Tarvitset virallisen Obsidianin [[Tuontityökalu]]-lisäosan, jonka voit [asentaa täältä](obsidian://show-plugin?id=obsidian-importer).

1. Avaa **[[Asetukset]]**.
2. Siirry kohtaan **Yhteisön lisäosat** ja [asenna Tuontityökalu](obsidian://show-plugin?id=obsidian-importer).
3. Ota Tuontityökalu-lisäosa käyttöön.
4. Avaa **Tuontityökalu**-lisäosa komentovalikon tai nauhavalikossa olevan kuvakkeen kautta.
5. Valitse kohdasta **Tiedostomuoto** vaihtoehto **Microsoft OneNote (.one, .onepkg)**.
6. Valitse tuotavat `.onepkg`- ja `.one`-tiedostot. Voit valita useita tiedostoja kerralla, joten kaikki muistikirjasi voidaan tuoda yhdellä kertaa.
7. Kohdassa **Tuotavat osiot** listataan tiedostoista löydetyt osiot, ja kaikki on valittu. Poista valinta niistä, joita et halua tuoda.
8. Voit halutessasi valita **Tulostekansion** tuonnille, liitteiden tallennuspaikan ja sen, mitä tehdään **olemassa oleville muistiinpanoille**, jos tuot saman muistikirjan uudelleen.
9. Napsauta **Tuo** ja odota, kunnes tuonti on valmis.
10. Valmis!

Jokaisesta osiosta tulee kansio ja jokaisesta sivusta muistiinpano. Alasivu tallennetaan kansioon, joka on nimetty yläpuolella olevan sivun mukaan — tämä säilyttää OneNoten rakenteen ja estää samannimisten alasivujen sekoittumisen. Muistikirjan roskakorissa olevia sivuja ei tuoda.

### Rajoitukset

- Salasanalla suojatut osiot on tallennettu salattuina, ja niiden sivut ohitetaan. Poista salasana OneNotessa ja vie uudelleen tuodaksesi ne.
- Käyttöoikeuksilla suojattuja tiedostoja voi avata vain tili, jolle käytäntö sallii pääsyn, eikä Tuontityökalu voi lukea niitä.

## Tietosuoja

Jos valitset tuonnin Microsoft-tilillä, Obsidianin Tuontityökalu-lisäosa käyttää [OAuthia](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) tunnistautuakseen ja tuodakseen OneNote-muistikirjasi. Tämä myöntää lyhytaikaisen käyttöoikeustunnisteen tilillesi, jota käytetään vain tietokoneeltasi eikä sitä koskaan tallenneta. Tuonnin valmistuttua voit halutessasi peruuttaa tunnisteen [Microsoftin sovellukset ja palvelut -sivulla](https://account.live.com/consent/Manage).

Tiedostotuonti ei koskaan muodosta yhteyttä Microsoftiin: valitsemasi tiedostot luetaan tietokoneellasi ilman verkkoyhteyttä.
