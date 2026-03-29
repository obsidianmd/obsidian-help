---
permalink: publish/social-share
---
Monet sosiaaliset verkostot näyttävät rikkaan esikatselun verkkosivustostasi, kun käyttäjä jakaa linkin siihen. [[Määreet|Määreiden]] avulla voit muokata muistiinpanojesi ulkoasua esikatselussa.

> [!warning] Varoitus
> Tässä osiossa ylikirjoitetut tunnisteet ovat **ainoastaan** hakurobottien nähtävissä. Tavallisille verkkoselaimille tarjotaan muokkaamaton sivu suorituskyvyn vuoksi.

## Kuvaus

Obsidian luo automaattisesti kuvauksen muistiinpanon sisällön perusteella, mutta voit antaa oman kuvauksen käyttämällä `description`-määrettä.

```yaml
---
description: Johdatus aurinkokuntaamme.
---
```

> [!note] Metatunnisteet
> `description` ylikirjoittaa automaattisesti luodun kuvauksen tunnisteissa `<meta name="description" content="...">` sekä vastaavissa `og:description`- ja `twitter:description`-tunnisteissa.

## Kuva

Voit käyttää mukautettua kuvaa linkin esikatselussa lisäämällä `image`- tai `cover`-määreen, jossa on polku kuvaan. Kuvan on oltava ladattuna Publishiin.

Polku voi olla absoluuttinen polku holvisi juuresta:

```yaml
---
cover: "Attachments/Cover image.png"
---
```

Kuvan polku on kirjainkoolla on väliä. Edellisessä esimerkissämme polku viittaa kuvaan nimeltä `Cover image.png`. Alla oleva polku ei toimi, koska siinä on käytetty väärää kirjainkokoa.

```yaml
---
cover: "Attachments/cover Image.png"
---
```

Absoluuttisen polun sijaan voit käyttää myös ulkoista URL-osoitetta:

```yaml
---
image: "https://example.com/cover%20image.png"
---
```

`image` ja `cover` ovat identtisiä. Käytä vain jompaakumpaa.

> [!note] Metatunnisteet
> `image` ja `cover` ylikirjoittavat automaattisesti luodun kuvan tunnisteessa `<meta property="og:image" content="...">`.
