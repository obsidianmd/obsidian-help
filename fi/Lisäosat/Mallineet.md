---
permalink: plugins/templates
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Mallipohjat on ydinlaajennus, jonka avulla voit lisätä ennalta määritettyjä tekstikatkelmia aktiiviseen muistiinpanoosi.'
---
Mallineet on [[Sisäänrakennetut lisäosat|sisäänrakennettu lisäosa]], jonka avulla voit lisätä ennalta määritettyjä tekstinpätkiä aktiiviseen muistiinpanoosi.

## Aseta mallinekansio

1. Valitse vasemmassa alakulmassa **[[Asetukset]]** ![[lucide-cog.svg#icon]].
2. Aseta kohdassa **Sisäänrakennetut lisäosat → Mallineet → Mallinetiedostojen sijainti** kansio, joka sisältää mallineesi.

## Mallinemuuttujat

Voit lisätä mallineisiin dynaamista tietoa _mallinemuuttujien_ avulla. Kun lisäät mallineen, joka sisältää mallinemuuttujan, Mallineet korvaa sen vastaavalla arvolla.

| Muuttuja    | Kuvaus                                                       |
|-------------|--------------------------------------------------------------|
| `{{title}}` | Aktiivisen muistiinpanon otsikko.                            |
| `{{date}}`  | Tämän päivän päivämäärä. **Oletusmuoto:** `YYYY-MM-DD`.     |
| `{{time}}`  | Nykyinen kellonaika. **Oletusmuoto:** `HH:mm`.              |

Sekä `{{date}}` että `{{time}}` sallivat oletusmuodon muuttamisen _muotomerkkijonon_ avulla.

Aseta muotomerkkijono lisäämällä kaksoispiste (`:`) ja sen jälkeen [Moment.js-muotomääritteistä](https://momentjs.com/docs/#/displaying/format/) koostuva merkkijono, esimerkiksi `{{date:YYYY-MM-DD}}`.

Voit käyttää muuttujia `{{date}}` ja `{{time}}` muotomerkkijonojen kanssa samalla tavalla, esimerkiksi `{{time:YYYY-MM-DD}}`.

Voit muuttaa päivämäärän ja kellonajan oletusmuotoja kohdassa **[[Asetukset]] → Sisäänrakennetut lisäosat → Mallineet → Päiväyksen muoto** ja **[[Asetukset]] → Sisäänrakennetut lisäosat → Mallineet → Ajan muoto**. ^template-settings-date-time-formatting

> [!tip]- Käytä päivämäärä- ja aikamuuttujia muissa lisäosissa
> Voit käyttää mallinemuuttujia `{{date}}` ja `{{time}}` myös lisäosissa [[Päivittäiset muistiinpanot]] ja [[Uniikkien muistiinpanojen luonti]].

## Luo malline

Luo [[#Aseta mallinekansio|mallinekansioon]] [[Muistiinpanojen hallinta#Luo uusi muistiinpano|muistiinpano]], joka sisältää tekstin, jonka haluat näkyvän mallinetta käytettäessä. Voit käyttää [[#Mallinemuuttujat|mallinemuuttujia]] dynaamiseen tekstiin, kuten nykyiseen päivämäärään.

Tässä on esimerkiksi opiskelumuistiinpanojen malline:

```markdown
---
topic: 
date: "{{date}}"
course: 
tags:
  - studies
---

# {{title}}

## Keskeiset käsitteet


## Tärkeät yksityiskohdat


## Esimerkkejä


## Kysymyksiä
- 

## Yhteenveto


## Liittyvät aiheet
- [[]]
```

> [!warning]+ Muokkaa mallineita lähdekooditilassa
> [[Näkymät ja muokkaustila#Visuaalinen muokkaus|Visuaalisessa muokkauksessa]] **Tiedoston määreet** -paneeli voi ylikirjoittaa mallinemuuttujat, joita ei ole ympäröity lainausmerkeillä.
>
> Välttääksesi tämän, muokkaa mallineita [[Näkymät ja muokkaustila#Lähdekooditila|lähdekooditilassa]] tai aseta **[[Asetukset]] → Muokkain → [[Asetukset#Tiedoston määreet|Tiedoston määreet]]** arvoon **Lähdekoodi**.

## Lisää malline aktiiviseen muistiinpanoon

> [!todo] [[#Aseta mallinekansio]] ennen mallineen lisäämistä.

1. Valitse nauhavalikossa **Lisää malline**.
2. Valitse malline, joka lisätään kohdistimen kohtaan aktiivisessa muistiinpanossa.

Voit lisätä mallineen [[Komentovalikko|komentovalikon]] tai [[Pikanäppäimet#Aseta pikanäppäin|mukautetun pikanäppäimen]] avulla käyttämällä komentoa `Mallineet: Lisää malline`.

Mallineen sisältö lisätään kohdistimen nykyiseen sijaintiin. Jos kohdistin ei ole muistiinpanon tekstiosassa, sisältö lisätään viimeisimpään kohdistimen sijaintiin.

### Mallineen määreet

![[Määreet#^templates-properties]]

## Nykyisen päivämäärän ja kellonajan lisääminen aktiiviseen muistiinpanoon

Käytä komentoja `Mallineet: Lisää nykyinen päivämäärä` ja `Mallineet: Lisää nykyinen kellonaika` lisätäksesi nykyisen päivämäärän ja kellonajan kohdistimen nykyiseen sijaintiin. Kuten `Lisää malline` -komento, myös nämä voidaan suorittaa komentovalikon tai mukautetun pikanäppäimen avulla.

Lisätty päivämäärä ja kellonaika käyttävät [[#^template-settings-date-time-formatting|lisäosan asetuksissa määritettyä muotoilua]].
