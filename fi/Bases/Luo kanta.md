---
permalink: bases/create-base
---
[[Johdanto kantoihin|Kannat]] mahdollistavat tietokantamaisten näkymien luomisen muistiinpanoistasi. Näin voit luoda kannan ja upottaa sen muistiinpanoon. Jokaisella kannalla voi olla yksi tai useampia [[Näkymät|näkymiä]], joilla tietoja voidaan esittää eri tavoilla.

## Luo uusi kanta

**Komentovalikko:**

1. Avaa **komentovalikko**.
2. Valitse
	- **Kannat: Luo uusi kanta** luodaksesi kannan samaan kansioon kuin aktiivinen tiedosto.
	- **Kannat: Lisää uusi kanta** luodaksesi kannan ja upottaaksesi sen nykyiseen tiedostoon.

**Tiedostoselain:**

1. Napsauta tiedostoselaimessa hiiren kakkospainikkeella kansiota, johon haluat luoda kannan.
2. Valitse **Uusi kanta**.

**Nauhavalikko:**

- Valitse pystysuuntaisesta nauhavalikosta **Luo uusi kanta** luodaksesi kannan samaan kansioon kuin aktiivinen tiedosto.

## Upota kanta

### Upota kantatiedosto

Voit upottaa kantatiedostoja [[Upota tiedostoja|mihin tahansa muuhun tiedostoon]] käyttämällä `![[Tiedosto.base]]`-syntaksia. Oletusnäkymän voit määrittää käyttämällä `![[Tiedosto.base#Näkymä]]`.

### Upota kanta koodilohkona

Kannat voidaan myös upottaa suoraan muistiinpanoon käyttämällä `base`-koodilohkoa ja [[Kantojen syntaksi|kantojen syntaksia]].

~~~yaml
```base
filters:
  and:
    - file.hasTag("example")
views:
  - type: table
    name: Table
```
~~~
