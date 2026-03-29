---
permalink: publish/permalinks
---
Voit muuttaa muistiinpanojesi URL-osoitteita käyttämällä _pysyviä linkkejä_.

Voit esimerkiksi muuttaa tämän:

```
https://publish.obsidian.md/username/Company/About+us
```

Tällaiseksi:

```
https://publish.obsidian.md/username/about
```

Luodaksesi pysyvän linkin muistiinpanolle, lisää `permalink`-määre [[Määreet|Määreisiin]].

```yaml
---
permalink: about
---
```

Jos joku vierailee muistiinpanossa alkuperäisen URL-osoitteen kautta, hänet ohjataan automaattisesti pysyvään linkkiin.

## Vanhojen muistiinpanojen uudelleenohjaus

Muistiinpanojen uudelleennimeäminen ja poistaminen on luonnollinen osa elävän holvin ylläpitoa. Vaikka Obsidian päivittää linkit automaattisesti, kun siirrät muistiinpanon paikallisessa holvissasi, muut verkkosivustot voivat edelleen linkittää vanhoihin muistiinpanoihisi julkaistulla [[Johdanto Obsidian Publishiin|Obsidian Publish]] -sivustollasi. Voit ohjata lukijat muistiinpanosta toiseen.

Kuvittele, että haluat siirtää muistiinpanon kansiosta toiseen:

- **Guides**
  - ~~Making friends.md~~ (poistettu)
- **Tutorials**
  - *How to make friends.md* (lisätty)

Kun siirrät muistiinpanon, Obsidian päivittää automaattisesti kaikki holvin sisäiset linkit. Jos kuitenkin julkaiset muutoksen Publish-sivustollesi, kaikki linkit osoitteeseen `/Guides/Making+friends` johtavat 404-virheeseen.

Ohjataksesi lukijat osoitteesta `/Guides/Making+friends` osoitteeseen `/Tutorials/How+to+make+friends`, sinun täytyy lisätä [[Aliakset|alias]] tiedostoon `How to make friends.md`, eli muistiinpanoon, johon haluat ohjata.

```md
---
alias: Guides/Making friends
---

# How to make friends
```

> [!important] Tärkeää
> Varmista, että sisällytät aliakseen vanhan muistiinpanon koko polun. Vaikka pelkän muistiinpanon nimen käyttäminen aliaksena toimii paikallisessa holvissasi, Publish tarvitsee muistiinpanon koko polun voidakseen ohjata siihen.

Voit ohjata useita muistiinpanoja lisäämällä aliaksen jokaiselle.

```md
---
aliases: 
  - Guides/Making friends
  - Developing friendships
---

# How to make friends
```
