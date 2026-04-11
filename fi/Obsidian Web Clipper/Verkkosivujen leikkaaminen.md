---
permalink: web-clipper/capture
---
Kun olet asentanut [[Johdanto Obsidian Web Clipperiin|Web Clipper]] -selainlaajennuksen, voit käyttää sitä useilla tavoilla selaimestasi riippuen:

1. Obsidian-kuvake selaimen työkalupalkissa.
2. Pikanäppäimet laajennuksen aktivoimiseksi näppäimistöltä.
3. Kontekstivalikko napsauttamalla hiiren oikealla painikkeella verkkosivua, jolla olet.

Tallentaaksesi sivun Obsidianiin napsauta **Lisää Obsidianiin** -painiketta.

## Sivun kaappaaminen

Kun avaat laajennuksen, Web Clipper poimii tietoja nykyiseltä verkkosivulta [[Obsidian Web Clipper/Mallineet|pohjatiedoston]] asetusten mukaisesti. Voit luoda omia pohjatiedostoja ja mukauttaa tulostetta käyttämällä [[Muuttujat|muuttujia]] ja [[Suodattimet|suodattimia]].

Oletuksena Web Clipper pyrkii älykkäästi poimimaan vain pääartikkelin sisällön jättäen sivun muut elementit huomioimatta. Voit kuitenkin ohittaa tämän toiminnan seuraavilla tavoilla:

- Jos mukautettu pohjatiedosto on käytössä, se käyttää pohjatiedostoasi.
- Jos valinta on olemassa, se käyttää valintaa. Voit käyttää `Ctrl/Cmd+A` valitaksesi koko sivun.
- Jos [[Korostustyökalu|korostuksia]] on olemassa, se käyttää korostuksia.

## Kuvien lataaminen

Kuvia ei ladata automaattisesti, kun käytät Web Clipperia. Sen sijaan kuvat linkittävät verkkopohjaiseen URL-osoitteeseensa. Tämä säästää tilaa holvissasi, mutta tarkoittaa, että kuvat eivät ole käytettävissä ilman verkkoyhteyttä tai jos URL-osoite lakkaa toimimasta.

Voit ladata kuvat mille tahansa tiedostolle Obsidianissa käyttämällä [[Komentovalikko|komentoa]] nimeltä **Lataa nykyisen tiedoston liitteet**. Tämä komento voidaan myös yhdistää pikanäppäimeen Obsidianissa.

## Pikanäppäimet

Web Clipper sisältää pikanäppäimiä, joilla voit nopeuttaa työnkulkuasi. Muuttaaksesi näppäinyhdistelmiä siirry kohtaan **Web Clipper -asetukset** → **Yleiset** ja seuraa selaimesi ohjeita. Yhdistelmiä voidaan muuttaa kaikissa selaimissa paitsi Safarissa, joka ei tue pikanäppäinten muokkaamista.

| Toiminto               | macOS         | Windows/Linux  |
| ---------------------- | ------------- | -------------- |
| Avaa leikkuri          | `Cmd+Shift+O` | `Ctrl+Shift+O` |
| Pikaleikkaus           | `Opt+Shift+O` | `Alt+Shift+O`  |
| Vaihda korostustyökalu | `Opt+Shift+H` | `Alt+Shift+H`  |
| Vaihda lukutila        | `Opt+Shift+R` | `Alt+Shift+R`  |

## Käyttöliittymän toiminnot

Web Clipperin käyttöliittymä on jaettu neljään osaan:

1. **Ylätunniste**, jossa voit vaihtaa pohjatiedostoja, ottaa käyttöön [[Korostustyökalu|korostuksen]], [[Lukija|lukutilan]] ja käyttää asetuksia.
2. **Määreet** näyttää sivulta poimitut [[Määreet|metatiedot]], jotka tallennetaan [[Määreet|määreinä]] Obsidianiin.
3. **Muistiinpanon sisältö**, joka tallennetaan Obsidianiin.
4. **Alatunniste**, jossa voit valita holvin ja kansion sekä lisätä Obsidianiin.

Ylätunnisteen toiminnot:

- ![[lucide-chevrons-up-down.svg#icon]] **Pohjatiedosto**-vaihtaja käyttääksesi laajennuksen asetuksiin tallennettuja [[Obsidian Web Clipper/Mallineet|pohjatiedostoja]].
- ![[lucide-more-horizontal.svg#icon]] **Lisää**-painike näyttääksesi sivun muuttujat, joita voit käyttää pohjatiedostoissa.
- ![[lucide-highlighter.svg#icon]] **Korostustyökalu**-painike ottaaksesi käyttöön [[Korostustyökalu|korostuksen]].
- ![[lucide-book-icon.svg#icon]] **Lukija**-painike ottaaksesi käyttöön [[Lukija|lukutilan]].
- ![[lucide-picture-in-picture-2.svg#icon]] **Upota**-painike siirtääksesi Web Clipperin ponnahdusikkunasta sivulle.
- ![[lucide-settings.svg#icon]] **Asetukset**-painike avaa laajennuksen asetukset.

Alatunnisteen toiminnot:

- **Lisää Obsidianiin** -painike tallentaa tiedot Obsidianiin.
- **Holvi**-pudotusvalikko vaihtaaksesi Web Clipperin asetuksiin tallennettujen holvien välillä.
- **Kansio**-kenttä määrittääksesi, mihin kansioon tallennetaan.
- **Tulkki** suorittaaksesi [[Tulkki|luonnollisen kielen kehotteita]] sivulla.
