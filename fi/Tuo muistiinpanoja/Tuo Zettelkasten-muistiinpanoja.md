---
permalink: import/zettelkasten
---
Jos olet käyttänyt Zettelkasten-menetelmää muistiinpanojesi nimeämiseen ja linkittämiseen, saatat joutua muuntamaan linkit muodosta `[[UID]]` muotoon `[[UID Muistiinpanon otsikko]]`.

Jos sinulla on esimerkiksi muistiinpano nimeltä `202301011230 Muistiinpanon otsikko` ja linkität siihen toisesta muistiinpanosta käyttäen vain UID:tä, `[[202301011230]]`. Koska Obsidian käyttää muistiinpanon koko nimeä sisäisten linkkien ratkaisemiseen, tällaiset linkit lakkaavat toimimasta.

Päivittääksesi kaikki `[[UID]]`-linkit holvissasi käyttämään muistiinpanon koko nimeä, käytä [[Muotoilumuunnin|Muotoilumuunninta]].

1. Avaa **[[Asetukset]]**.
2. Ota **Sisäänrakennetut lisäosat** -kohdassa käyttöön **Muotoilumuunnin** ja sulje Asetukset-ikkuna.
3. Valitse nauhavalikosta sovellusikkunan vasemmasta reunasta **Open format convert** ![[lucide-binary.svg#icon]].
4. Ota käyttöön **Zettelkasten-linkkien korjaus**.
5. Valitse **Aloita muuntaminen**. Tämä muuntaa kaikki muistiinpanot koko holvissasi.

> [!tip] Zettelkasten-linkkien siistiminen
> [[Muotoilumuunnin]] voi myös siistiä linkkejäsi poistamalla UID:n näyttönimestä. Esimerkiksi `[[UID]]` muunnetaan muotoon `[[UID Muistiinpanon otsikko|Muistiinpanon otsikko]]`.
>
> Siistitäksesi Zettelkasten-linkkisi, ota käyttöön **Zettelkasten-linkkien siistiminen** muotoilumuuntimen ikkunassa.

Voit myös käyttää [[Uniikkien muistiinpanojen luonti|Uniikkien muistiinpanojen luontia]] Zettelkasten-muistiinpanojen luomiseen Obsidianissa.
