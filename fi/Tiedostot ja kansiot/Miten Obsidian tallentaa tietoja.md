---
permalink: data-storage
publish: true
mobile: true
description: 'Tämä sivu selittää, miten Obsidian tallentaa tietonsa laitteellesi.'
---
Obsidian tallentaa muistiinpanosi [[Muotoilun perussyntaksi|Markdown-muotoiltuina]] tekstitiedostoina _holvissa_. Holvi on kansio paikallisessa tiedostojärjestelmässäsi, mukaan lukien kaikki alikansiot.

Koska muistiinpanot ovat tekstitiedostoja, voit käyttää muita tekstimuokkaimia ja tiedostohallintaohjelmia muistiinpanojen muokkaamiseen ja hallintaan. Obsidian päivittää holvin automaattisesti pysyäkseen ulkoisten muutosten tasalla.

Voit luoda holvin mihin tahansa, minne käyttöjärjestelmäsi sallii. Obsidian synkronoituu [[Johdanto Obsidian Synciin|Obsidian Syncin]], Dropboxin, iCloudin, OneDriven, Gitin ja monien muiden kolmannen osapuolen palveluiden kanssa.

Voit avata useita kansioita erillisinä holveina, esimerkiksi erottaaksesi työ- ja koulumuistiinpanot toisistaan.

> [!warning] Holveja holvien sisällä
> Koska [[Sisäiset linkit]] ovat holvikohtaisia, suosittelemme, ettet luo holveja toisten holvien sisälle. Linkkejä ei välttämättä päivitetä oikein.

## Holvin asetukset

Obsidian luo `.obsidian`-nimisen [[Asetuskansio|asetuskansion]] holvin juurikansioon, joka sisältää kyseiselle holville ominaiset asetukset, kuten [[Pikanäppäimet|pikanäppäimet]], [[Teemat|teemat]] ja [[Yhteisön lisäosat|yhteisön lisäosat]].

Oletuksena useimmat käyttöjärjestelmät piilottavat kansiot, joiden nimi alkaa pisteellä (`.`), joten saatat joutua muuttamaan tiedostohallinnan asetuksia nähdäksesi sen.

- **macOS**: Paina Finderissa `Cmd+Shift+.` (piste) näyttääksesi piilotetut tiedostot.
- **Windows**: [Näytä piilotetut tiedostot](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
+ **GNU/Linux:** Useimmissa tiedostoselaimissa paina `Ctrl + h` näyttääksesi piilotetut tiedostot.

> [!tip] `.obsidian`-kansion lisääminen Gitiin
> Tiedostot `.obsidian/workspace.json` ja `.obsidian/workspaces.json` tallentavat nykyisen työtilan asettelun ja päivittyvät aina, kun avaat uuden tiedoston. Jos käytät [Gitiä](https://git-scm.com) holvisi hallintaan, saatat haluta lisätä nämä tiedostot `.gitignore`-tiedostoon.

## Yleiset asetukset

Obsidian tallentaa yleiset asetukset järjestelmäkansioon. Järjestelmäkansion sijainti riippuu käyttöjärjestelmästäsi.

- **macOS**: `/Users/käyttäjänimesi/Library/Application Support/obsidian`
- **Windows**: `%APPDATA%\Obsidian\`
- **Linux**: `$XDG_CONFIG_HOME/obsidian/` tai `~/.config/obsidian/`

> [!warning] Älä luo holvia järjestelmäkansioon. Tämä voi johtaa tietojen vahingoittumiseen tai menettämiseen.

## IndexedDB

IndexedDB on matalan tason asiakaspuolen tietokanta, jota Obsidian käyttää taustatallennukseen. Se auttaa ylläpitämään [[Johdanto Obsidian Synciin|Obsidian Sync]] -yhteyksien tilaa ja säilyttää [[#Metatietovälimuisti|metatietovälimuistin]], kun sovellus suljetaan.

> [!warning] Jos Applen [lukitustila](<https://support.apple.com/en-us/105120>) on käytössä eikä Obsidiania ole suljettu sen ulkopuolelle, nämä tietokantatiedostot eivät tallennu, ja uudelleenindeksointi vaaditaan joka kerta, kun sovellus käynnistyy.

### Metatietovälimuisti

Tarjotakseen nopean käyttökokemuksen Obsidian ylläpitää paikallista tietuetta holvin tiedostojen metatiedoista, jota kutsutaan **metatietovälimuistiksi**. Tämä metatieto ohjaa monia sovelluksen toimintoja verkkonäkymästä sisällysluettelonäkymään.

Obsidian pitää tämän välimuistin synkronoituna holvin tiedostojen kanssa, mutta tiedot voivat joskus mennä epätahtiin taustalla olevien tiedostojen kanssa. Jos näin käy holvissasi, voit koota metatietovälimuistin uudelleen sovelluksen asetuksista *Tiedostot ja linkit* -osiossa.
