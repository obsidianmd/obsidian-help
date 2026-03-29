---
permalink: plugins/note-composer
---
[[Muistiinpanojen koostin]] on [[Sisäänrakennetut lisäosat|sisäänrakennettu lisäosa]], jonka avulla voit yhdistää kaksi muistiinpanoa tai eriyttää osan muistiinpanosta uudeksi muistiinpanoksi.

## Muistiinpanojen yhdistäminen

Muistiinpanojen yhdistäminen lisää muistiinpanon toiseen ja poistaa ensimmäisen. Muistiinpanojen koostin päivittää kaikki linkit viittaamaan yhdistettyyn muistiinpanoon.

Kun valitset muistiinpanon, johon yhdistät, voit valita seuraavista tavoista:

- `Enter`: Lisää lähdemuistiinpanon kohdemuistiinpanon _loppuun_.
- `Shift+Enter`: Lisää lähdemuistiinpanon kohdemuistiinpanon _alkuun_.
- `Ctrl+Enter` (tai `Cmd+Enter` macOS:ssa): Luo uuden muistiinpanon lähdemuistiinpanon sisällöllä.

Aktiivisen muistiinpanon yhdistäminen toiseen holvin muistiinpanoon:

**Tiedostoselain**

1. Napsauta tiedostoselaimessa hiiren kakkospainikkeella yhdistettävää muistiinpanoa.
2. Valitse **Yhdistä tiedostoon...**.
3. Valitse muistiinpano, johon haluat yhdistää.
4. Vahvista valitsemalla **Yhdistä**.

**Komentovalikko**

1. Avaa [[Komentovalikko]].
2. Valitse **Muistiinpanojen koostin: Yhdistä nykyinen tiedosto toiseen tiedostoon...**.
3. Valitse muistiinpano, johon haluat yhdistää.
4. Vahvista valitsemalla **Yhdistä**.

> [!tip] Vinkki
> Oletuksena Muistiinpanojen koostin pyytää vahvistuksen muistiinpanoja yhdistettäessä. Jos poistat vahvistuksen käytöstä ja yhdistät muistiinpanon vahingossa, voit silti palauttaa sen [[Tiedoston palautus]] -lisäosalla.

## Muistiinpanon eriyttäminen

Kun valitset muistiinpanon, johon valinnan eriytät, voit valita seuraavista tavoista:

- `Enter`: Lisää valitun tekstin kohdemuistiinpanon _loppuun_.
- `Shift+Enter`: Lisää valitun tekstin kohdemuistiinpanon _alkuun_.
- `Ctrl+Enter` (tai `Cmd+Enter` macOS:ssa): Luo uuden muistiinpanon valitulla tekstillä.

Tekstin eriyttäminen uudeksi muistiinpanoksi:

**Muokkain**

1. Valitse **muokkausnäkymässä** teksti, jonka haluat eriyttää.
2. Napsauta valittua tekstiä hiiren kakkospainikkeella.
3. Valitse **Eriytä nykyinen valinta...**.
4. Valitse muistiinpano, johon haluat eriyttää.

**Komentovalikko**

1. Valitse **muokkausnäkymässä** teksti, jonka haluat eriyttää.
2. Avaa [[Komentovalikko]].
3. Valitse **Muistiinpanojen koostin: Eriytä nykyinen valinta...**.
4. Valitse muistiinpano, johon haluat eriyttää.

> [!tip] Vinkki
> Oletuksena Muistiinpanojen koostin korvaa eriytetyn tekstin linkillä kohdemuistiinpanoon. Asetuksissa voit myös vaihtaa kohdemuistiinpanon [[Upota tiedostoja|upottamiseen]] tai jättää tyhjän kohdan.

## Pohjatiedosto

Määrittämällä pohjan voit mukauttaa sisältöä ennen sen lisäämistä uuteen muistiinpanoon. Käyttääksesi pohjaa, syötä **Pohjatiedoston sijainti** lisäosan asetuksissa.

Pohja voi sisältää seuraavat muuttujat:

| Muuttuja          | Kuvaus                                                                                                                                                      |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{{content}}`     | Yhdistettävä sisältö tai eriytetty tekstivalinta. Jos et sisällytä tätä muuttujaa, Muistiinpanojen koostin lisää sisällön pohjan loppuun.                    |
| `{{fromTitle}}`   | Lähdemuistiinpanon nimi.                                                                                                                                     |
| `{{newTitle}}`    | Kohdemuistiinpanon nimi. Esimerkiksi tiedostonimen lisäämiseksi otsikoksi tiedoston alkuun.                                                                  |
| `{{date:FORMAT}}` | Uuden muistiinpanon luontipäivä. Esimerkiksi `{{date:YYYY-MM-DD}}`.                                                                                         |
