---
permalink: aliases
cssclasses:
  - soft-embed
---
Jos haluat viitata tiedostoon eri nimillä, harkitse _aliaksien_ lisäämistä muistiinpanoon. Alias on muistiinpanon vaihtoehtoinen nimi.

Käytä aliaksia esimerkiksi lyhenteille, lempinimille tai kun haluat viitata muistiinpanoon toisella kielellä.

Jos haluat vain muuttaa linkin ulkoasua yhdessä paikassa, katso sen sijaan kuinka [[Sisäiset linkit#Muuta linkin näytettävää tekstiä|muutat linkin näytettävää tekstiä]].

![[Sisäiset linkit#^callout-internal-links-link-text]]

## Lisää alias muistiinpanoon

Lisätäksesi aliaksen muistiinpanoon, lisää `aliases`-määre muistiinpanon [[Määreet|määreisiin]]. Aliakset tulee aina muotoilla YAML-luettelona.

```md
---
aliases:
  - Doggo
  - Woofer
  - Yapper
---

# Dog
```

## Linkitä muistiinpanoon aliaksen avulla

Linkittääksesi muistiinpanoon aliaksen avulla:

1. Ala kirjoittaa aliasta [[Sisäiset linkit|sisäiseen linkkiin]]. Kaikki aliakset näkyvät ehdotusluettelossa kaarevan nuolikuvakkeen kanssa.
2. Valitse alias painamalla `Enter`.

Obsidian luo linkin, jossa alias on mukautettuna näytettävänä tekstinä, esimerkiksi `[[Artificial Intelligence|AI]]`.

> [!note] Huomautus
> Sen sijaan, että alias toimisi suoraan linkin kohteena (`[[AI]]`), Obsidian käyttää linkkimuotoa `[[Artificial Intelligence|AI]]` varmistaakseen yhteensopivuuden muiden wikilinkki-muotoa käyttävien sovellusten kanssa.

## Etsi linkittömiä mainintoja aliakselle

Käyttämällä [[Paluulinkit|paluulinkkejä]] voit löytää aliaksien linkittömiä mainintoja.

Esimerkiksi kun olet asettanut "AI" aliakseksi muistiinpanolle "Artificial intelligence", voit nähdä "AI"-maininnat muissa muistiinpanoissa.

Jos linkität linkittömän maininnan aliakseen, Obsidian muuttaa maininnan [[Sisäiset linkit|sisäiseksi linkiksi]], jossa alias on näytettävänä tekstinä.
