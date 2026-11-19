---
permalink: import/samsung-notes
cssclasses:
  - soft-embed
---
Obsidian mahdollistaa muistiinpanojen siirtämisen Samsung Notesista [[Tuontityökalu|Tuontityökalun]] avulla. Tämä muuntaa muistiinpanosi kestävään Markdown-muotoon, jota voit käyttää Obsidianin ja monien muiden sovellusten kanssa.

## Vie muistiinpanosi Samsung Notesista

Samsung Notes tallentaa jokaisen muistiinpanon Samsung Notes -tiedostona (`.sdocx`).

1. Avaa Samsung Notes puhelimellasi tai tabletillasi.
2. Paina muistiinpanoa pitkään ja valitse kaikki muistiinpanot, jotka haluat viedä.
3. Napauta **Tallenna tiedostona** ja valitse **Samsung Notes -tiedosto**.
4. Valitse kansio ja napauta **Tallenna**.
5. Siirrä `.sdocx`-tiedostot laitteelle, jossa käytät Obsidiania, esimerkiksi USB-kaapelilla, Quick Sharella tai pilvipalvelun kautta.

Jos sinulla on paljon tiedostoja, voit pakata ne `.zip`-tiedostoon ja tuoda sen sen sijaan. Samsung Notes ei sisällytä kansiorakennettaan tallentamiinsa tiedostoihin, mutta tuontityökalu säilyttää `.zip`-tiedoston sisäiset kansiot. Jotta muistiinpanosi pysyvät järjestyksessä, tallenna kunkin Samsung Notes -kansion muistiinpanot samannimiseen kansioon ennen pakkaamista.

## Tuo Samsung Notes -tiedot Obsidianiin

Tarvitset virallisen Obsidianin [[Tuontityökalu|Tuontityökalu]]-lisäosan, jonka voit [asentaa täältä](obsidian://show-plugin?id=obsidian-importer).

1. Avaa **[[Asetukset]]**.
2. Siirry kohtaan **Yhteisön lisäosat** ja [asenna tuontityökalu](obsidian://show-plugin?id=obsidian-importer).
3. Ota tuontityökalu käyttöön.
4. Avaa **Tuontityökalu** komentovalikon tai nauhavalikkon kuvakkeen kautta.
5. Valitse **Tiedostomuoto**-kohdasta **Samsung Notes (.sdocx)**.
6. Valitse `.sdocx`-tiedostosi tai `.zip`-tiedosto, joka sisältää ne.
7. Valitse **Tuo** tarkastellaksesi luotua pohjaa ja esikatsellaksesi esimerkkejä muistiinpanoistasi.
8. Valitse **Tuo** uudelleen ja odota tuonnin valmistumista.

## Rajoitukset

- Käsinkirjoitus ja piirretyt muodot tuodaan SVG-kuvana muistiinpanon loppuun. Vedot säilyttävät muotonsa ja värinsä, mutta eivät paineherkän kynän vaihtelevia viivan leveyksiä. Muodot ja viivat tuodaan mustina.
- Tekstikehyksiä, sivulle sijoitettuja kuvia ja merkintöjä sisältäviä PDF-tiedostoja ei tuoda vielä.
- Tehtäväluettelon kohteet tuodaan valitsemattomina.
- Tekstin värejä, kirjasimia ja kirjasinkokoja ei säilytetä.
- Avaa lukitut muistiinpanot Samsung Notesissa ennen niiden vientiä.

## Mallineet

Käytä [[Tuontimallineet|tuontimallineita]] mukauttaaksesi Samsung Notes -tietojen tuontia kokonaisvaltaisesti.

![[Tuontimallineet#Muuttujat]]
