---
permalink: early-access
---
Saat ennakkopääsyn tuleviin julkaisuihin ottamalla käyttöön _kokeiluversiot_. Kokeiluversiot ovat saatavilla ainoastaan [[Catalyst-lisenssi|Catalyst-lisenssin]] haltijoille.

> [!warning] Varoitus
> Kokeiluversiot ovat beta-julkaisuja. Ne sisältävät uusia ominaisuuksia, mutta saattavat olla vähemmän vakaita. Älä ota kokeiluversioita käyttöön, jos pidät luotettavammasta käyttökokemuksesta.
> 
> Huomaa, että yhteisön lisäosien ja teemojen kehittäjät saavat kokeiluversiot käyttöönsä samaan aikaan kuin kaikki muutkin. Ole kärsivällinen kehittäjien kanssa, jotka tarvitsevat aikaa päivittääkseen tuotteensa tukemaan uusia ominaisuuksia.

## Ota kokeiluversiot käyttöön työpöytäsovelluksessa

Saadaksesi kokeiluversiot heti niiden julkaisun jälkeen, toimi seuraavasti:

1. Avaa **[[Asetukset]]**.
2. Valitse sivupalkista **Yleiset**.
3. Valitse kohdassa **Tili → Käyttäjätilisi** vaihtoehto **Kirjaudu**.
4. Syötä **Sähköposti**-kenttään sähköpostisi.
5. Syötä **Salasana**-kenttään salasanasi.
6. Kun olet kirjautunut sisään, palaa kohtaan **[[Asetukset]]**.
7. Valitse sivupalkista **Yleiset**.
8. Ota kohdassa **Sovellus** käyttöön **Käytä kokeiluversioita**.
9. Napsauta **Tarkista päivitykset** ja sitten **Käynnistä uudelleen**.

## Asenna kokeiluversiot mobiililaitteisiin

Löytääksesi ohjeet kokeiluversioiden asentamiseen mobiililaitteellesi, toimi seuraavasti:

1. Lataa ja asenna [Discord](<https://discord.com>).
2. Liity [Obsidianin Discord-palvelimelle](https://discord.gg/obsidianmd).
3. [[Catalyst-lisenssi#Hanki Discord-merkkisi|Hanki Discord-merkkisi]] saadaksesi pääsyn insider-kanaviin.
4. Kanavalta `#insider-welcome` löydät ohjeet latauksen käyttöönottamiseen laitetyyppiisi perustuen.

## Ilmoita ongelmista ja anna muuta palautetta

Jos löydät ongelman kokeiluversiosta, harkitse sen ilmoittamista Obsidian-tiimille. Ennen kuin ilmoitat ongelmasta, hae [foorumilta](https://forum.obsidian.md/) tai Discordista, onko joku jo raportoinut siitä.

Voit ilmoittaa ongelmasta seuraavia kanavia käyttäen:

- Raportoi ongelma Discordissa vastaavalla `#insider-release`-kanavalla.
- Luo foorumilla uusi aihe kohtaan [Bug reports](https://forum.obsidian.md/c/bug-reports/7).

Kun ilmoitat ongelmasta, mainitse käyttämäsi version numero ja käyttöjärjestelmä. Version numeron löydät kohdasta **[[Asetukset]] → Tietoja → Sovellus → Nykyinen versio**.

## Vaihda takaisin julkisiin versioihin työpöytäsovelluksessa

Vaihtaaksesi takaisin julkisiin versioihin (ei kokeiluversioihin) työpöydällä:

1. Poista kokeiluversiot käytöstä.
   1. Avaa **[[Asetukset]]**.
   2. Valitse sivupalkista **Yleiset**.
   3. Poista kohdassa **Sovellus** käytöstä **Käytä kokeiluversioita**.
2. Sulje Obsidian.
3. Poista tiedosto `obsidian-VERSIO.asar`, jossa `VERSIO` on Obsidianin versionumero.
   - Windows: `%APPDATA%\obsidian\obsidian-VERSIO.asar`
   - Mac: `~/Library/Application Support/obsidian/obsidian-VERSIO.asar`
   - Linux: `~/.config/obsidian/obsidian-VERSIO.asar`
4. Käynnistä Obsidian uudelleen.

## Vaihda takaisin julkisiin versioihin mobiilisovelluksessa

Vaihtaaksesi takaisin julkisiin versioihin (ei kokeiluversioihin) mobiilissa:

1. Varmuuskopioi holvisi tiedot.
2. Poista Obsidian.
3. Asenna Obsidian uudelleen joko Play Storesta tai Apple App Storesta.
4. Palauta holvisi tiedot varmuuskopiostasi.
5. Avaa Obsidian.
