---
permalink: sync/switch
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Opi siirtymään nykyisestä synkronointiratkaisustasi Obsidian Synciin.
---
Opi siirtymään nykyisestä synkronointiratkaisustasi Obsidian Synciin.

> [!warning] Vältä useiden ratkaisujen käyttämistä samojen tiedostojen synkronointiin
> [[Usein kysytyt kysymykset#Voinko käyttää ulkoista synkronointipalvelua yhdessä Obsidian Syncin kanssa?|Emme suosittele]] Obsidian Syncin käyttämistä yhdessä pilvitallennuspalveluiden (esim. iCloud, Dropbox, OneDrive, Google Drive) kanssa, sillä tämä voi aiheuttaa ristiriitoja. Pilvitallennuspalvelut voivat kuitenkin olla osa [[Varmuuskopioi Obsidian-tiedostosi|varmuuskopiointi]]strategiaasi.

## Siirrä holvi pois ulkoisesta synkronointipalvelusta tai pilvitallennuksesta

Jos holvisi on tallennettu johonkin seuraavista sijainneista, sitä todennäköisesti synkronoi ulkoinen palvelu:

- **Windows**: `C:\Users\Username\Desktop` tai `C:\Users\Username\Documents`
- **macOS**: `/users/username/Desktop` tai `/users/username/Documents`
- **iOS**: **iCloud**-kansio Tiedostot-sovelluksessa
- **Muut**: Mikä tahansa kansio synkronointipalvelun alla, kuten `Drive/my-vault`, `Dropbox/my-vault`, `pSync/my-vault` jne.

Vaikka Androidissa ja Linuxissa tämä aiheuttaa harvemmin ongelmia, holvin sijainti kannattaa silti tarkistaa näillä laitteilla.

> [!tip] Jos nykyinen paikallinen holvisi on yhdistetty etäholviin, Obsidian yrittää tunnistaa, onko holvi synkronointipalvelussa. Jos on, Obsidian Syncin asetuksissa näkyy viesti yläreunassa.

Ristiriitojen välttämiseksi suosittelemme tallentamaan Obsidian-holvit seuraaviin sijainteihin:

- **Windows**: Suositellut sijainnit tärkeysjärjestyksessä:
    1. `D:\` tai jokin muu kuin C-asema tai verkkoasema laitteellasi
    2. `C:\Vaults` (jos sinulla on oikeudet käyttää C:\-asemaa)
    3. `C:\Users\Username\Vaults` (jos holvin on oltava C:\Users\Username -kansiossa, varmista että OneDrive ei poista tiedostoja. OneDrive on yleensä vähemmän aktiivinen `Desktop`- ja `Documents`-kansioiden ulkopuolella.)
- **macOS**: `/users/username/vaults`
- **Linux**: Ei erityistä suositusta tiedostojärjestelmien moninaisuuden vuoksi. Varmista vain, että Obsidianilla on täydet luku- ja kirjoitusoikeudet ja ettei mikään synkronointipalvelu hallinnoi kansiota.
- **iOS/iPadOS**: Tallenna holvi **Omaan iPhoneen** tai **Laitteeseen**.
- **Android**: Käytä laitteesi `Documents/`-kansiota.

## Siirrä holvi Obsidianin työpöytäversiolla

![[Hallinnoi holveja#Siirrä holvi toiseen kansioon]]

## Siirrä holvi mobiililaitteella

Mobiililaitteilla Obsidian toimii hiekkalaatikkoympäristössä, joten holveja ei voi siirtää sovelluksen sisällä kuten työpöydällä.

### Android

Androidin tiedostojärjestelmät vaihtelevat suuresti laitekohtaisesti, mutta yleisesti seuraa samoja ohjeita kuin holvin manuaalisessa siirtämisessä ja varmista, että holvi on poistettu kaikista synkronointipalveluista laitteellasi.

### iOS ja iPadOS

Siirrä olemassa oleva iCloud-holvi laitteellesi seuraavasti:

> [!note] Jos sinulla on jo tiedot toisella laitteella ja Obsidian Sync on käytössä, suosittelemme [[Obsidian Syncin käyttöönotto#Etäholvin synkronointi toisella laitteella|uuden paikallisen holvin luomista Syncin kautta]].

- [[Varmuuskopioi Obsidian-tiedostosi|Varmuuskopioi]] holvisi.
- Luo uusi holvi laitteellesi ja varmista, että **Tallenna iCloud Driveen** on pois käytöstä.
- Pakota Obsidian-sovellus sulkeutumaan kaikilla laitteilla, jotta Sync keskeytyy.
- Avaa **Tiedostot**-sovellus iOS/iPadOS-laitteellasi.
- Paina pitkään holvin kansiota kohdassa **iCloud Drive → Obsidian** ja valitse **Siirrä**.
- Siirrä holvi kohtaan **Omassa iPhonessa/laitteessa → Obsidian** ja varmista, että se näkyy.
- Napauta **Kopioi**.
- Palaa kohtaan **iCloud Drive → Obsidian** ja poista vanha holvin kansio.

Kun avaat Obsidianin uudelleen, holvin kohdalla pitäisi näkyä holvin kuvake pilven kuvakkeen sijaan, mikä vahvistaa, ettei se ole enää iCloud Drivessa. Obsidian Sync ei myöskään enää näytä varoitusviestiä asetuksissaan.

## Seuraavat vaiheet

- Haluatko aloittaa Obsidian Syncin käytön? [[Obsidian Syncin käyttöönotto]]
- Tarvitsetko vielä apua? Tutustu sivuun [[Obsidian Syncin vianmääritys]]
