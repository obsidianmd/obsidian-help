---
permalink: callouts
publish: true
mobile: true
description: 'Tällä sivulla kerrotaan, miten huomiolaatikoita käytetään lisäsisällön sisällyttämiseen muistiinpanojen kulkua rikkomatta.'
---
Nostolaatikoiden avulla voit sisällyttää lisäsisältöä katkaisematta muistiinpanojesi kulkua.

Nostolaatikko luodaan lisäämällä `[!info]` lainauslohkon ensimmäiselle riville, jossa `info` on _tyyppitunniste_. Tyyppitunniste määrittää nostolaatikon ulkoasun ja tyylin. Katso kaikki saatavilla olevat tyypit kohdasta [[#Tuetut tyypit]]. Nostolaatikot ovat tuettuja myös natiivisti [[Johdanto Obsidian Publishiin|Obsidian Publishissa]].

```markdown
> [!info] Tässä on nostolaatikon otsikko
> Tässä on nostolaatikkolohko.
> Se tukee **Markdownia**, [[Sisäiset linkit|wikilinkkejä]] ja [[Upota tiedostoja|upotteita]]!
> ![[Engelbart.jpg]]
```

> [!info] Tässä on nostolaatikon otsikko
> Tässä on nostolaatikkolohko.
> Se tukee **Markdownia**, [[Sisäiset linkit|wikilinkkejä]] ja [[Upota tiedostoja|upotteita]]!
> ![[Engelbart.jpg]]

Voit lisätä oletusarvoisen `[!note]`-nostolaatikon `Lisää nostolaatikko` -[[Komentovalikko|komennolla]]. Kohdistin asettuu automaattisesti nostolaatikon nimikentälle, joten voit poistaa oletusnimen ja kirjoittaa uuden ennen sisällön muokkaamista.

Voit kääriä olemassa olevaa sisältöä nostolaatikkoon valitsemalla tekstin (mukaan lukien luettelot, koodilohkot jne.) ja suorittamalla `Lisää nostolaatikko` -komennon. Valittu sisältö suljetaan automaattisesti nostolaatikkoon.

[[Näkymät ja muokkaustila#Visuaalinen muokkaus|Visuaalisessa muokkauksessa]] voit myös napsauttaa hiiren oikealla painikkeella nostolaatikon nimeä vaihtaaksesi nostolaatikon tyyppiä.


### Otsikon muuttaminen

Oletuksena nostolaatikon otsikko on sen tyyppitunniste isolla alkukirjaimella. Voit muuttaa sen lisäämällä tekstiä tyyppitunnisteen jälkeen:

```markdown
> [!tip] Nostolaatikoilla voi olla mukautettuja otsikoita
> Kuten tällä.
```

> [!tip] Nostolaatikoilla voi olla mukautettuja otsikoita
> Kuten tällä.

Voit myös jättää rungon pois ja luoda pelkän otsikon sisältäviä nostolaatikoita:

```markdown
> [!tip] Pelkän otsikon nostolaatikko
```

> [!tip] Pelkän otsikon nostolaatikko

### Kutistettavat nostolaatikot

Voit tehdä nostolaatikosta kutistettavan lisäämällä plus- (`+`) tai miinusmerkin (`-`) suoraan tyyppitunnisteen jälkeen.

Plusmerkki laajentaa nostolaatikon oletuksena, ja miinusmerkki kutistaa sen.

```markdown
> [!faq]- Ovatko nostolaatikot kutistettavia?
> Kyllä! Kutistettavassa nostolaatikossa sisältö piilotetaan, kun nostolaatikko on kutistettu.
```

> [!faq]- Ovatko nostolaatikot kutistettavia?
> Kyllä! Kutistettavassa nostolaatikossa sisältö piilotetaan, kun se on kutistettu.

### Sisäkkäiset nostolaatikot

Nostolaatikoita voi sijoittaa sisäkkäin useille tasoille.

```markdown
> [!question] Voiko nostolaatikoita sijoittaa sisäkkäin?
> > [!todo] Kyllä! Voi.
> > > [!example] Voit käyttää jopa useita sisäkkäisyyden tasoja.
```

> [!question] Voiko nostolaatikoita sijoittaa sisäkkäin?
> > [!todo] Kyllä! Voi.
> > > [!example] Voit käyttää jopa useita sisäkkäisyyden tasoja.

### Nostolaatikoiden mukauttaminen

[[CSS-pätkät]] ja [[Yhteisön lisäosat]] voivat määrittää mukautettuja nostolaatikoita tai jopa korvata oletusasetukset.

Mukautetun nostolaatikon määrittämiseksi luo seuraava CSS-lohko:

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

`data-callout`-attribuutin arvo on tyyppitunniste, jota haluat käyttää, esimerkiksi `[!custom-question-type]`.

- `--callout-color` määrittää taustavärin käyttäen numeroita (0–255) punaiselle, vihreälle ja siniselle.
- `--callout-icon` voi olla kuvakkeen tunnus sivustolta [lucide.dev](https://lucide.dev) tai SVG-elementti.

> [!warning] Huomautus lucide-kuvakkeiden versioista
> Obsidian päivittää Lucide-kuvakkeita säännöllisesti. Nykyinen mukana tuleva versio näkyy alla; käytä näitä tai aiempia kuvakkeita mukautetuissa nostolaatikoissa.
> ![[Tekijät#^lucide]]

> [!tip] SVG-kuvakkeet
> Lucide-kuvakkeen sijasta voit käyttää myös SVG-elementtiä nostolaatikon kuvakkeena.
>
> ```css
> --callout-icon: '<svg>...mukautettu svg...</svg>';
> ```

### Tuetut tyypit

Voit käyttää useita nostolaatikkotyyppejä ja aliaksia. Jokaisella tyypillä on eri taustaväri ja kuvake.

Käyttääksesi näitä oletustyylejä korvaa `info` esimerkeissä millä tahansa näistä tyypeistä, kuten `[!tip]` tai `[!warning]`. Nostolaatikon tyyppiä voi myös vaihtaa napsauttamalla hiiren oikealla painikkeella nostolaatikkoa visuaalisessa muokkaustilassa.

Ellei [[#Nostolaatikoiden mukauttaminen|mukauta nostolaatikoita]], mikä tahansa tuntematon tyyppi käyttää oletuksena `note`-tyyppiä. Tyyppitunniste ei ole kirjainkokoherkkä.

> [!note]
> ```md
> > [!note]
> > Lorem ipsum dolor sit amet
> ```

---

> [!abstract]-
> ```md
> > [!abstract]
> > Lorem ipsum dolor sit amet
> ```

Aliakset: `summary`, `tldr`

---

> [!info]-
> ```md
> > [!info]
> > Lorem ipsum dolor sit amet
> ```

---

> [!todo]-
> ```md
> > [!todo]
> > Lorem ipsum dolor sit amet
> ```

---

> [!tip]-
> ```md
> > [!tip]
> > Lorem ipsum dolor sit amet
> ```

Aliakset: `hint`, `important`

---

> [!success]-
> ```md
> > [!success]
> > Lorem ipsum dolor sit amet
> ```

Aliakset: `check`, `done`

---

> [!question]-
> ```md
> > [!question]
> > Lorem ipsum dolor sit amet
> ```

Aliakset: `help`, `faq`

---

> [!warning]-
>  ```md
> > [!warning]
> > Lorem ipsum dolor sit amet
> ```

Aliakset: `caution`, `attention`

---

> [!failure]-
> ```md
> > [!failure]
> > Lorem ipsum dolor sit amet
> ```

Aliakset: `fail`, `missing`

---

> [!danger]-
> ```md
> > [!danger]
> > Lorem ipsum dolor sit amet
> ```

Alias: `error`

---

> [!bug]-
> ```md
> > [!bug]
> > Lorem ipsum dolor sit amet
> ```

---

> [!example]-
> ```md
> > [!example]
> > Lorem ipsum dolor sit amet
> ```

---

> [!quote]-
> ```md
> > [!quote]
> > Lorem ipsum dolor sit amet
> ```

Alias: `cite`
