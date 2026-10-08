---
permalink: pdf
publish: true
mobile: true
description: 'Opi tarkastelemaan, hakemaan ja linkittämään PDF-tiedostoja Obsidianissa sekä viemään muistiinpano PDF-muodossa.'
---
Obsidian avaa PDF-tiedostot sisäänrakennetussa katseluohjelmassa. Voit myös upottaa PDF-tiedoston muistiinpanoon, linkittää sen tekstikohtaan ja viedä minkä tahansa muistiinpanon PDF-tiedostona. Katso Obsidianin tukemat tiedostotyypit kohdasta [[Hyväksytyt tiedostomuodot]].

> [!info]+ Jotkin ominaisuudet ovat vain työpöytäversiossa
> Obsidianin mobiilisovellus ei tue hakua PDF-tiedoston sisällä, lainauksen tai valintalinkin kopiointia eikä muistiinpanon vientiä PDF-muotoon.

## PDF-tiedoston avaaminen

Valitse [[Tiedostoselain|tiedostoselaimesta]] PDF-tiedosto avataksesi sen välilehteen.

> [!info]+ Merkintöjä ei tueta
> Obsidian ei tue merkintöjen tai korostusten lisäämistä PDF-tiedostoon. Voit muokata PDF-tiedostoa toisella sovelluksella ja avata päivitetyn tiedoston holvissasi.

Katseluohjelmassa on työkalurivi, jossa on seuraavat toiminnot. Obsidianin mobiilisovelluksessa on sama työkalurivi.

- **Näytä/piilota sivupalkki** näyttää tai piilottaa sivupalkin, ja **Sivupalkin asetukset** muuttaa sivupalkin sisältöä.
- **Loitonna** ja **Lähennä** muuttavat sivun kokoa.
- **Näyttöasetukset** muuttaa sivujen asettelua.
- Sivuruutu näyttää nykyisen sivun. Syötä sivunumero siirtyäksesi kyseiselle sivulle.

Voit käsitellä itse PDF-tiedostoa, kuten muuttaa sen nimeä tai siirtää sitä, valitsemalla **Lisää vaihtoehtoja** ![[lucide-more-horizontal.svg#icon]]. PDF-tiedostossa on vähemmän vaihtoehtoja tässä valikossa kuin muistiinpanossa. Katso [[Lisää vaihtoehtoja -valikko]].

## PDF-tiedostossa navigointi

Valitse **Sivupalkin asetukset** ja valitse, mitä näytetään.

- **Pienoiskuvat** näyttää pienen esikatselun jokaisesta sivusta.
- **Sisällysluettelo** näyttää PDF-tiedoston jäsennyksen, jos sellainen on.
- **Näytä sivu sisällysluettelossa** korostaa nykyisen sivun sisällysluettelossa.

Linkittääksesi sivuun napsauta sen pienoiskuvaa hiiren oikealla painikkeella ja valitse **Copy link to page N**, jossa N on sivunumero. Liitä linkki muistiinpanoon.

Linkittääksesi osioon napsauta sisällysluettelon kohtaa hiiren oikealla painikkeella ja valitse **Copy link to "Title"**, jossa Title on kohdan nimi. Mobiilissa paina kohtaa pitkään.

## PDF-tiedoston ulkoasun muuttaminen

Valitse **Näyttöasetukset** muuttaaksesi asettelua.

- **Sovita leveyteen** ja **Sovita korkeuteen** sovittavat sivun katseluohjelmaan.
- **Yksi sivu** näyttää yhden sivun kerrallaan.
- **Kaksi sivua (pariton)** näyttää sivut vierekkäin alkaen parittomasta sivusta vasemmalla. Esimerkiksi sivut 1 ja 2 näkyvät yhdessä, sitten sivut 3 ja 4.
- **Kaksi sivua (parillinen)** näyttää sivut vierekkäin alkaen parillisesta sivusta vasemmalla. Esimerkiksi sivu 1 näkyy yksin, sitten sivut 2 ja 3 näkyvät yhdessä.
- **Sopeuta teemaan** tummentaa PDF-tiedoston värejä, kun Obsidian-teemasi on tumma.

## PDF-tiedostossa hakeminen

Haku PDF-tiedoston sisällä on käytettävissä vain työpöytäversiossa. Obsidianin mobiilisovelluksessa ei ole hakutoimintoa PDF-katseluohjelmassa.

1. Paina `Ctrl+F` (Windows ja Linux) tai `Command+F` (macOS).
2. Kirjoita **Hae...**-kenttään teksti, jonka haluat löytää.
3. Valitse ylä- tai alanuoli siirtyäksesi osumien välillä.

Voit muuttaa haun toimintaa seuraavilla asetuksilla.

- **Kirjainkoolla on väliä** huomioi isot ja pienet kirjaimet tarkasti. Se on **Aa**-painike hakukentässä.
- **Korosta kaikki** korostaa jokaisen osuman. Valitse asetuspainike nuolien vierestä löytääksesi tämän vaihtoehdon.
- **Tarkkeilla on väliä** käsittelee aksentillisia kirjaimia eri kirjaimina. Se on samassa asetusvalikossa.
- **Koko sanat** etsii vain kokonaisia sanoja. Se on samassa asetusvalikossa.

Valitse sulkemispainike poistuaksesi hausta.

## Tekstin kopioiminen PDF-tiedostosta

Työpöytäversiossa valitse teksti PDF-tiedostosta ja napsauta sitä hiiren oikealla painikkeella.

- **Kopioi** kopioi tekstin.
- **Kopioi lainauksena** kopioi tekstin lainauksena, jonka perässä on linkki tekstikohtaan.
- **Kopioi linkki valintaan** kopioi linkin kyseiseen tekstikohtaan, jotta voit liittää sen muistiinpanoon.

Lainaus näyttää tältä, kun liität sen muistiinpanoon.

```md
> Obsidian is awesome

[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Linkki valintaan sisältää saman linkin yksinään.

```md
[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Mobiilissa tekstin valitseminen PDF-tiedostosta näyttää laitteesi tavallisen tekstivalikon. **Kopioi lainauksena** ja **Kopioi linkki valintaan** eivät ole käytettävissä.

## PDF-tiedoston upottaminen

Jos haluat näyttää PDF-tiedoston muistiinpanon sisällä, katso kuinka [[Upota tiedostoja#Upota PDF muistiinpanoon|upottaa PDF muistiinpanoon]]. Upotetulla PDF-tiedostolla on sama työkalurivi kuin katseluohjelmassa. Valitse **Muokkaa lohkoa** muuttaaksesi upotuslinkkiä.

## Muistiinpanon vieminen PDF-muotoon

Voit viedä minkä tahansa muistiinpanon PDF-tiedostona työpöytäversiossa. Vienti PDF-muotoon ei ole käytettävissä Obsidianin mobiilisovelluksessa.

1. Avaa muistiinpano, jonka haluat viedä.
2. Avaa [[Komentovalikko]] ja valitse **Vie PDF...**. Voit myös valita muistiinpanossa **Lisää vaihtoehtoja** ![[lucide-more-horizontal.svg#icon]] ja sitten **Vie PDF...**.
3. Valitse asetukset.
    - **Laita tiedoston nimi otsikoksi** lisää tiedoston nimen PDF-tiedoston alkuun.
    - **Sivun koko** asettaa paperikoon. Voit valita A3, A4, A5, Legal, Letter tai Tabloid.
    - **Vaakasuuntainen** kääntää sivut vaakasuuntaisiksi.
    - **Marginaali** asettaa sivun marginaalin arvoon **Oletus**, **Minimaalinen** tai **Ei mitään**.
    - **Pienennysprosentti** skaalaa kunkin sivun sisältöä. Arvolla 100 sisältö pysyy täysikokoisena. Pienemmät arvot tekevät tekstistä ja kuvista pienempiä, jolloin sivulle mahtuu enemmän sisältöä.
4. Valitse **Vie PDF-tiedosto**.
5. Valitse tallennuspaikka.

> [!tip]- Muistiinpanon vieminen tummalla teemalla
> Vienti käyttää aina vaaleaa tyyliä, vaikka teemasi olisi tumma. Voit muuttaa viennin ulkoasua käyttämällä [[CSS-pätkät|CSS-pätkää]]. Obsidian-foorumilta löytyy esimerkkejä pätkistä tulostusta ja vientiä varten.[^1]

[^1]: Katso [How can I make export pdf look the same as my theme?](https://forum.obsidian.md/t/how-can-i-make-export-pdf-look-the-same-as-my-theme/75849) ja [PDF and print style reset with code syntax highlighting](https://forum.obsidian.md/t/pdf-and-print-style-reset-with-code-syntax-highlighting/31761).
