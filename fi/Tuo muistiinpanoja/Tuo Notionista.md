---
permalink: import/notion
---
Obsidian mahdollistaa muistiinpanojesi helpon siirtämisen Notionista [[Tuontityökalu|Tuontityökalu-lisäosan]] avulla. Tämä muuntaa Notion-tietosi kestävään Markdown-muotoon, jota voit käyttää offline-tilassa Obsidianissa ja monissa muissa sovelluksissa.

Obsidian tarjoaa kaksi tapaa tuoda Notion-tietosi:

1. **API-tuonti** säilyttää koko työtilasi, mukaan lukien tietokannat ja kaavat, jotka muunnetaan [[Johdanto kantoihin|kannoiksi]], mutta vaatii Notion-integraatiotunnisteen ja internetyhteyden.
2. **Tiedostotuonti** ei säilytä tietokantoja, mutta ei vaadi API-tunnistetta tai internetyhteyttä.

## API-tuonti

### Notion API -integraatiotunnisteen luominen

Notion-tietojen käyttämiseksi API:n kautta tarvitset integraatiotunnisteen. Tämän vaiheen suorittaminen kestää noin 2 minuuttia.

Tunniste on pitkä numero- ja kirjainjono, joka alkaa tyypillisesti `ntn_...` ja jonka avulla voit ladata tietosi Notionista.

1. Kirjaudu sisään [Notion Integrations](https://www.notion.so/profile/integrations/internal) -hallintapaneeliin.
2. Valitse **New integration**.

![[notion-integration.png#interface]]

2. Anna integraatiolle nimi, esim. "Personal". Mikä tahansa nimi käy.
3. Valitse työtila, jonka haluat viedä.
4. Napsauta **Save** ja jatka kohtaan **Configure integration settings**.
5. **Configuration**-välilehdellä API-tunnisteesi on saatavilla **Internal Integration Secret** -kentässä.
6. Valitse **Show** ja sitten **Copy**.
7. Tallenna tunniste turvalliseen paikkaan, kuten salasananhallintaohjelmaan.

![[notion-token.png#interface]]

Seuraavaksi anna integraatiolle pääsy niihin Notion-sivuihin ja tietokantoihin, jotka haluat tuoda.

1. Siirry juuri luomasi integraation **Access**-välilehteen.
2. Napsauta **Edit access**.
3. Lisää sivut ja tietokannat, jotka haluat tuoda.

Nyt voit muuntaa tietosi Obsidian-tuontityökalulla.

### Notion-tietojen tuominen API:n kautta

Tarvitset virallisen Obsidianin [[Tuontityökalu]]-lisäosan, jonka voit [asentaa täältä](obsidian://show-plugin?id=obsidian-importer).

1. Avaa **[[Asetukset]]**.
2. Siirry kohtaan **Yhteisön lisäosat** ja [asenna Tuontityökalu](obsidian://show-plugin?id=obsidian-importer).
3. Ota Tuontityökalu-lisäosa käyttöön.
4. Avaa **Tuontityökalu**-lisäosa komentovalikon tai nauhakuvakkeen kautta.
5. Valitse **Tiedostomuoto**-kohdasta **Notion (API)**
6. Liitä **API-tunniste** -kohtaan Notionin **Internal Integration Secret**.
7. Napsauta **Lataa** valitaksesi tietokannat ja sivut, jotka haluat tuoda.
8. Tarkista ja muokkaa tuontiasetuksia.
9. Valitse **Tuo** ja odota, kunnes tuonti on valmis.
10. Valmista!

### Rajoitukset

> [!info] API-tuonti on uusi
> Notion API -tuontityökalu on uusi. Notion-työtilojen monimutkaisuuden vuoksi kaikkia erikoistapauksia ei ole välttämättä huomioitu. Jos kohtaat ongelmia muunnoksessa, [lähetä vikaraportti](https://github.com/obsidianmd/obsidian-importer/issues), jotta voimme parantaa sitä.

Notionin API-rajaehdoista johtuen suurten työtilojen tuominen voi kestää huomattavan kauan. Ole kärsivällinen.

Notion API:n rajoitusten vuoksi kaikkia tietoja ei ole saatavilla tai niitä ei voida muuntaa:

- Jokaisesta tietokannasta tuodaan vain ensisijainen näkymä.
- [Linkitettyjä tietolähteitä](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases) ei tuoda: *"Notionin API ei tällä hetkellä tue linkitettyjä tietolähteitä. Kun jaat tietokannan integraatiollesi, varmista, että se sisältää alkuperäisen tietolähteen!"*
- `People`-funktiot: `name()` ja `email()`
- `Text`-funktiot: `style()` ja `unstyle()`

Lisäksi Tuontityökalu tekee seuraavat muutokset:

- Sivut, joilla ei ole alasivuja tai tietokantoja, tuodaan muodossa `[tiedostonimi].md` eikä `[tiedostonimi]/[tiedostonimi].md`.
- Tietokannat esitetään aina kansioina nimellä `[tietokannan nimi]`, joiden sisällä on `[tietokannan nimi].base`-tiedosto.

## Tiedostotuonti

Tiedostotuonti on vaihtoehtoinen tapa tuoda Notion-tietosi. Tämä menetelmä ei säilytä tietokantoja, mutta ei vaadi API-tunnistetta tai internetyhteyttä.

### Tietojen vieminen Notionista

Tietojen valmistelemiseksi tuontia varten sinun täytyy viedä koko työtilasi Notionin HTML-vientimuodossa. Suosittelemme, ettet käytä Notionin Markdown-vientiä, sillä se jättää pois tärkeitä tietoja. Sinulla täytyy olla ylläpitäjän käyttöoikeudet Notion-työtilaan, jotta voit viedä kaiken työtilan sisällön.

1. Siirry Notion-sivupalkin yläosassa kohtaan **[[Asetukset]]**.
2. Valitse **Workspace**-kohdasta **General**.
3. Etsi ja valitse **Export all workspace content**.
4. Valitse **Export format** -kohdasta **HTML**.
5. Valitse **Include everything**.
6. Ota käyttöön **Create folders for subpages**.
7. Saat `.zip`-tiedoston sähköpostitse tai suoraan selaimessa.

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### Notion .zip-tiedoston tuominen

Tarvitset virallisen Obsidianin [[Tuontityökalu]]-lisäosan, jonka voit [asentaa täältä](obsidian://show-plugin?id=obsidian-importer).

1. Avaa **[[Asetukset]]**.
2. Siirry kohtaan **Yhteisön lisäosat** ja [asenna Tuontityökalu](obsidian://show-plugin?id=obsidian-importer).
3. Ota Tuontityökalu-lisäosa käyttöön.
4. Avaa **Tuontityökalu**-lisäosa komentovalikon tai nauhakuvakkeen kautta.
5. Valitse **Tiedostomuoto**-kohdasta **Notion (.zip)**
6. Valitse `.zip`-tiedosto, joka sisältää tuotavat Notion-tiedostot. *On suositeltavaa tuoda kaikki Notion-tietosi kerralla, jotta sisäiset linkit voidaan yhdistää oikein.*
7. _Valinnaisesti_ valitse kansio tuontia varten. Notion-sivusi ja tietokantasi sijoitetaan tämän kansion sisälle.
8. Ota käyttöön **Tallenna ylätason sivut alikansioihin** säilyttääksesi Notion-rakenteen. *Huomaa, että Notionissa voit kirjoittaa sisältöä kansioihin, mutta tämä ei ole mahdollista Obsidianissa, ja nämä sivut lisätään kansion alasivuiksi.*
9. Valitse **Tuo** ja odota, kunnes tuonti on valmis.
10. Valmista!

### Vianmääritys

Jos kohtaat ongelmia tuodessasi Notionista:

- Varmista, että käytät Notionissa vientimuotona **HTML**:ää, **ei Markdown**ia.
- Jos Obsidian näyttää jumiutuvan tuonnin aikana, poista yhteisön lisäosat käytöstä ja yritä uudelleen.

Kohtasitko jotain muuta? Hae [Tuontityökalun repositoriosta](https://github.com/obsidianmd/obsidian-importer/issues) nähdäksesi, ovatko muut kokeneet saman ongelman.

#### Suurten työtilojen tuominen

Jos tuot työtilaa, jossa on useita gigatavuja tietoa, Notionin vienti voi sisältää sisäkkäisiä `.zip`-tiedostoja. Tässä tapauksessa saatat nähdä tuontivirheilmoituksen, joka näyttää suunnilleen tältä:

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

Jos näet tämän virheen, voit purkaa Notionista saadun tiedoston ja tuoda sitten sisäkkäiset `Export-{id}-Part-1.zip`-tiedostot.
