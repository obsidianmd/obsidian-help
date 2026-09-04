---
permalink: bases/views/kanban
---
Kanban on eräs [[Näkymät|näkymä]], jota voit käyttää [[Johdanto kantoihin|Kannoissa]].

Valitse ![[lucide-kanban-square.svg#icon]] **Kanban** näkymävalikosta näyttääksesi tiedostot kortteina järjestettynä sarakkeisiin. Jokainen sarake edustaa yhtä ryhmittelyyn käytetyn määreen arvoa.


> [!warning] Vaatii Obsidianin 1.14+
> Kanban-näkymät vaativat Obsidianin 1.14, joka on tällä hetkellä saatavilla [[Ennakkojulkaisuversiot|ennakkojulkaisuversiona]].


## Ryhmitä kortit sarakkeisiin

Kanban-näkymä edellyttää määreen, jonka mukaan tulokset ryhmitellään.

1. Valitse ![[lucide-arrow-up-down.svg#icon]] **Järjestä** työkaluriviltä.
2. Valitse **Ryhmitä** -kohdasta **Määre** ja valitse määre.

Tiedostot, joilla ei ole arvoa valitulle määreelle, näkyvät **Ei mitään** -sarakkeessa.

> [!info] 
> Jos ryhmittelet kaavan tai tiedostomääreen mukaan, et voi siirtää kortteja tai sarakkeita etkä luoda muistiinpanoja sarakkeista. Näitä määreitä ei voi muokata siirtämällä korttia.

## Korttien ja sarakkeiden käsittely

- Raahaa kortti toiseen sarakkeeseen päivittääksesi ryhmitellyn määreen kyseisessä muistiinpanossa. Vain Markdown-muistiinpanoja voi siirtää sarakkeiden välillä.
- Valitse plus-kuvake sarakkeen otsikossa tai ![[lucide-plus.svg#icon]] **Uusi** sarakkeen alaosassa luodaksesi muistiinpanon kyseisen sarakkeen arvolla.
- Raahaa sarakkeen otsikkoa muuttaaksesi sarakkeiden järjestystä. Palauttaaksesi alkuperäisen järjestyksen napsauta saraketta hiiren oikealla painikkeella ja valitse **Palauta järjestys**.
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
