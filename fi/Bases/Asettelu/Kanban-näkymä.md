---
permalink: bases/views/kanban
---
Kanban on eräs [[Näkymät|näkymä]], jota voit käyttää [[Johdanto kantoihin|Kannoissa]].

Valitse ![[lucide-kanban-square.svg#icon]] **Kanban** näkymävalikosta näyttääksesi tiedostot kortteina järjestettynä sarakkeisiin. Jokainen sarake edustaa yhtä ryhmittelyyn käytetyn määreen arvoa.


> [!note] Vaatii Obsidianin 1.14+
> Kanban-näkymät ovat saatavilla Obsidianin versiossa 1.14 ja sitä uudemmissa.


## Ryhmitä kortit sarakkeisiin

Kanban-näkymä edellyttää määreen, jonka mukaan tulokset ryhmitellään.

1. Valitse **Ryhmä** työkaluriviltä. Puhelimissa valitse **Näkymä → Ryhmä**.
2. Valitse **Ryhmitä** -kohdasta määre.

Tiedostot, joilla ei ole arvoa valitulle määreelle, näkyvät **Ei mitään** -sarakkeessa.

> [!info] 
> Jos ryhmittelet kaavan tai muun tiedostomääreen kuin `file.folder` mukaan, et voi siirtää kortteja tai sarakkeita etkä luoda muistiinpanoja sarakkeista. Voit silti [[Näkymät#Ryhmien järjestäminen, piilottaminen ja lisääminen|hallita ryhmien järjestystä ja näkyvyyttä]] **Ryhmä**-valikosta.

## Korttien ja sarakkeiden käsittely

- Raahaa kortti toiseen sarakkeeseen päivittääksesi ryhmitellyn määreen kyseisessä muistiinpanossa. Vain Markdown-muistiinpanoja voi siirtää sarakkeiden välillä, paitsi kun ryhmittelet `file.folder`-määreen mukaan, jolloin kortin siirtäminen siirtää tiedoston kyseiseen kansioon.
- Valitse plus-kuvake sarakkeen otsikossa tai ![[lucide-plus.svg#icon]] **Uusi** sarakkeen alaosassa luodaksesi muistiinpanon kyseisen sarakkeen arvolla.
- Raahaa sarakkeen otsikkoa muuttaaksesi sarakkeiden järjestystä. Palauttaaksesi automaattisen järjestyksen avaa **Ryhmä** ja valitse automaattinen järjestys **Manuaalinen**-vaihtoehdon sijaan.
- Käytä **Ryhmä**-valikkoa [[Näkymät#Ryhmien järjestäminen, piilottaminen ja lisääminen|sarakkeiden järjestämiseen, piilottamiseen tai lisäämiseen]].
- Käytä ![[lucide-list.svg#icon]] **Määreet** -valikkoa valitaksesi kussakin kortissa näytettävät määreet. Ensimmäinen määre näytetään kortin otsikkona.

## Asetukset

Kanban-näkymän asetukset voidaan määrittää kohdassa [[Näkymät#Näkymän asetukset|Näkymän asetukset]].

- Piilota tyhjät sarakkeet
- Sarakkeen leveys
- Kuvamääre
- Kuvan sovitus
- Kuvasuhde

### Piilota tyhjät sarakkeet

Piilottaa sarakkeet, jotka eivät sisällä kortteja.

### Sarakkeen leveys

Määrittää kunkin sarakkeen ja sen korttien leveyden.

### Kuvamääre

Kanban-kortit tukevat valinnaista kansikuvaa, joka näytetään kortin yläosassa. Tuetut määrearvot ovat samat kuin [[Korttinäkymä#Kuvamääre|korttinäkymän kuvamääreessä]].

### Kuvan sovitus

Jos sinulla on kuvamääre määritettynä, tämä asetus määrittää, miten kuva näytetään kortissa.

- **Peitä koko alue:** Kuva täyttää kortin sisältöalueen. Jos kuva ei mahdu, se rajataan.
- **Näytä koko kuva:** Kuva skaalataan niin, että se mahtuu kortin sisältöalueeseen. Kuvaa ei rajata.

### Kuvasuhde

Kansikuvan korkeus määräytyy sen kuvasuhteen mukaan. Säädä tätä asetusta tehdäksesi kuvasta matalamman tai korkeamman.
