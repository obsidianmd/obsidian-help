---
permalink: bases/views/table
---
Taulukko on [[Näkymät|näkymätyyppi]], jota voit käyttää [[Johdanto kantoihin|kannoissa]].

Valitse ![[lucide-table.svg#icon]]  **Taulukko** näkymävalikosta näyttääksesi tiedostot taulukkona, jossa jokaiselle tiedostolle on oma rivi ja sarakkeet vastaavat tiedoston [[Määreet|määreitä]].

![Esimerkki kannasta, jossa taulukkonäkymässä näkyy luettelo kirjoista](bases-noshadow.png#interface)

## Asetukset

Taulukkonäkymän asetukset voidaan määrittää kohdassa [[Näkymät#Näkymän asetukset|Näkymän asetukset]].

### Rivin korkeus

Rivin korkeuden avulla voit näyttää enemmän tietoja. Valitse **matala**, **keskikorkea**, **korkea** tai **hyvin korkea**.

## Yhteenvedot

Voit lisätä taulukon sarakkeeseen yhteenvetoja, joilla voit nopeasti laskea arvoja kuten summia, keskiarvoja tai lukumääriä näkymässä näkyvistä riveistä.

Yhteenvedot on sidottu näkymään, ei kantaan. Jokaisessa näkymässä voi olla eri yhteenvedot samalle sarakkeelle.

### Lisää yhteenveto

1. Napsauta taulukkonäkymän sarakkeen otsikkoa hiiren kakkospainikkeella.
2. Valitse ![[lucide-calculator.svg#icon]] **Tee yhteenveto…**.
3. Valitse jokin sisäänrakennetuista yhteenvetofunktioista tai valitse ![[lucide-square-function.svg#icon]] **Lisää yhteenveto** määrittääksesi oman.

Yhteenveto näkyy sarakkeen alareunassa. Kun tulokset on [[Näkymät#Tulosten järjestäminen ja ryhmittely|ryhmitelty]], kunkin ryhmän yhteenveto näytetään ryhmän yläreunassa.

Kun yhteenvetorivi on lisätty, voit lisätä yhteenvetoja muihin sarakkeisiin napsauttamalla yhteenvetosolua. Yhteenvetorivi piilotetaan, jos kaikki yhteenvedot poistetaan.

### Sisäänrakennetut yhteenvedot

Seuraavat yhteenvedot ovat käytettävissä oletuksena. Vaihtoehdot voivat vaihdella määreen tyypin mukaan.

#### Kaikki määretyypit

- **Tyhjä**: rivien lukumäärä, joilla ei ole arvoa.
- **Täytetty**: rivien lukumäärä, joilla on arvo.
- **Uniikki**: eri arvojen lukumäärä.

#### Numerot

- **Keskiarvo**: kaikkien numeeristen arvojen keskiarvo.
- **Maksimi**: suurin arvo.
- **Mediaani**: mediaaniarvo.
- **Minimi**: pienin arvo.
- **Vaihteluväli**: maksimi- ja minimiarvojen erotus.
- **Keskihajonta**: keskihajonta.
- **Summa**: kaikkien arvojen summa.

#### Päiväykset

- **Aikaisin**: pienin/vanhin päiväys.
- **Viimeisin**: suurin/uusin päiväys.
- **Vaihteluväli**: aikaisimman ja viimeisimmän erotus.

#### Valintaruutu

- **Valittu**: rivien lukumäärä, joissa valintaruutu on päällä.
- **Ei valittu**: rivien lukumäärä, joissa valintaruutu on pois päältä.

### Mukautetut yhteenvedot

Voit määrittää oman yhteenvedon kaavan avulla:

1. Valitse ![[lucide-calculator.svg#icon]] **Tee yhteenveto…** -valikosta ![[lucide-square-function.svg#icon]] **Lisää yhteenveto**.
2. Anna yhteenvedolle nimi.
3. Syötä kaava. Kaava suoritetaan sarakkeen arvojen listalle (esimerkiksi käyttämällä [[Funktiot|funktiota]] kuten `values.reduce(...)`).
4. Tallenna yhteenveto.

Mukautetut yhteenvedot ovat hyödyllisiä, kun tarvitset laskutoimituksen, jota sisäänrakennetut vaihtoehdot eivät kata.

## Pikanäppäimet

Voit liikkua taulukkonäkymässä nopeasti seuraavilla hiiri- ja [[Muokkauksen pikanäppäimet|pikanäppäimillä]].

- Shift-napsautus luo soluvalinnan.
- Napsauta soluvalintaa hiiren kakkospainikkeella saadaksesi lisätoimintoja kyseisille tiedostoille.

| Toiminto                                                                                                                                  | Pikanäppäin          | macOS               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------------------- |
| Kopioi valitut solut                                                                                                                      | `Ctrl+C`             | `Cmd+C`             |
| Liitä valitut solut                                                                                                                       | `Ctrl+V`             | `Cmd+V`             |
| Kumoa määreiden muutokset                                                                                                                 | `Ctrl+Z`             | `Cmd+Z`             |
| Tee uudelleen määreiden muutokset                                                                                                         | `Ctrl+Shift+Z`       | `Cmd+Shift+Z`       |
| Valitse kaikki solut nykyisessä ryhmässä                                                                                                  | `Ctrl+A`             | `Cmd+A`             |
| Valitse kaikki solut tiettyyn suuntaan                                                                                                    | `Ctrl+Shift+Nuoli`   | `Ctrl+Shift+Nuoli`  |
| Valitse sarake                                                                                                                            | `Ctrl+Välilyönti`    |                     |
| Valitse rivi                                                                                                                              | `Shift+Välilyönti`   |                     |
| Kohdista nykyinen solu — valintaruuduille tämä vaihtaa valintaruudun tilaa, kaavoille tämä avaa kaavaeditorin                             | `Enter`              |                     |
| Siirry ensimmäiseen sarakkeeseen                                                                                                          | `Home`               |                     |
| Siirry viimeiseen sarakkeeseen                                                                                                            | `End`                |                     |
| Siirry ylös ja alas sivun korkeuden verran                                                                                                | `PageUp`,`PageDown`  |                     |
| Tyhjennä nykyinen soluvalinta                                                                                                             | `Esc`                |                     |
| Tyhjennä nykyiset solut                                                                                                                   | `Backspace`          |                     |
| Siirry seuraavaan soluun                                                                                                                  | `Tab`                |                     |
| Siirry edelliseen soluun                                                                                                                  | `Shift-Tab`          |                     |
