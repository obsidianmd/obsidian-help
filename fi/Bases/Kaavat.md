---
permalink: formulas
description: 'Kaavojen avulla voit luoda laskettuja ominaisuuksia käyttämällä muiden ominaisuuksien tietoja. Voit suorittaa laskutoimituksia, käsitellä tekstiä, työskennellä päivämäärien kanssa ja paljon muuta.'
---
Kaavojen avulla voit luoda laskettuja määreitä [[Johdanto kantoihin|kannoissa]] käyttäen tietoja muista [[Määreet|määreistä]]. Voit suorittaa laskutoimituksia, käsitellä tekstiä, työskennellä päivämäärien kanssa ja paljon muuta.

## Mitä kaavoilla voi tehdä

Kaavat voivat auttaa sinua:

- **Laskemaan arvoja**, lisäämään hintoja, laskemaan summia tai suorittamaan matemaattisia operaatioita.
- **Käsittelemään tekstiä**, yhdistämään merkkijonoja, muuttamaan kirjainkokoa tai poimimaan osia merkkijonoista.
- **Työskentelemään päivämäärien kanssa**, laskemaan aikaeroja, muotoilemaan päivämääriä tai määrittämään määräaikoja.
- **Soveltamaan logiikkaa**, käyttämään ehtolauseita eri arvojen näyttämiseen.
- **Käsittelemään luetteloita**, suodattamaan, järjestämään, muuntamaan tai koostamaan luettelotietoja.

## Luo kaavamääre

Kaavamääreen luominen:

1. Napsauta kannassasi **Määreet** työkaluriviltä.
2. Napsauta **Lisää kaava** valikon alareunassa.
3. Anna kaavamääreelle nimi.
4. Kirjoita kaavasi **Kaava**-kenttään.
5. Sulje valintaikkuna.

Kaavaeditori täydentää automaattisesti [[Funktiot|funktioiden]] ja määreiden nimiä kirjoittaessasi ja tarkistaa kaavan syntaksin. Vihreä valintamerkki ilmestyy, kun kaavasi on kelvollinen.

Luomisen jälkeen voit käyttää kaavamäärettä kuten mitä tahansa muuta määrettä kannassasi. Lisää se [[Näkymät|näkymiin]], käytä sitä suodattimissa, järjestä sen mukaan ja paljon muuta.

## Kirjoita kaava

Kirjoita kaavaeditorissa lauseke käyttäen määreitä, operaattoreita ja funktioita.

### Viittaa määreisiin

Voit viitata erityyppisiin määreisiin kaavoissasi:

- **Muistiinpanon määreet** — Muistiinpanon [[Määreet|alkulehden]] määreet.
- **Tiedoston määreet** — Sisäänrakennetut määreet kuten `file.name`, `file.size` tai `file.mtime`.
- **Kaavamääreet** — Muut kaavat muodossa `formula.kaavan_nimi`.

**Esimerkkejä:**

- `price * quantity` — kahden muistiinpanomääreen kertolasku
- `file.name + " - " + description` — tiedostonimen yhdistäminen muistiinpanomääreeseen
- `formula.price_per_unit * 1.1` — toisen kaavamääreen käyttö

### Käytä operaattoreita

**Aritmeettiset operaattorit** suorittavat matemaattisia laskutoimituksia:

- `price + tax` — yhteenlasku
- `price - discount` — vähennyslasku
- `price * quantity` — kertolasku
- `price / quantity` — jakolasku
- `(part / whole) * 100` — sulkeiden käyttö laskujärjestyksen määrittämiseen

**Vertailuoperaattorit** vertaavat arvoja:

- `price > 100` — suurempi kuin
- `age < 18` — pienempi kuin
- `status == "Done"` — yhtä suuri
- `status != "Done"` — eri suuri
- `file.mtime > now() - '7d'` — päivämäärien vertailu

**Boolen operaattorit** yhdistävät loogisia ehtoja:

- `!completed` — ei
- `price > 0 && quantity > 0` — ja
- `urgent || important` — tai

Lue lisää kohdasta [[Kantojen syntaksi#Operaattorit|Kantojen syntaksi]].

### Käytä funktioita

Funktiot suorittavat operaatioita arvoille. Käytettävissä olevat funktiot riippuvat käsiteltävän arvon tyypistä. Katso täydellinen luettelo [[Funktiot|funktioista]].

**Yleisimmät funktiokategoriat:**

- **Yleiset funktiot** — `if()`, `now()`, `date()`, `link()`, `max()`, `min()`
- **Merkkijonofunktiot** — `contains()`, `replace()`, `split()`, `lower()`, `title()`
- **Numerofunktiot** — `round()`, `ceil()`, `floor()`, `abs()`, `toFixed()`
- **Päivämääräfunktiot** — `format()`, `relative()`, `date()`, `time()`
- **Luettelofunktiot** — `filter()`, `map()`, `sort()`, `join()`, `unique()`

**Esimerkkejä:**

- `if(price, "$" + price.toFixed(2), "")` ehdollisen lausekkeen ja numeromuotoilun määrittämiseen.
- `file.name.lower()` pieniin kirjaimiin muuntamiseen.
- `tags.contains("urgent")` tarkistamaan, sisältääkö tunnisteluettelo tietyn arvon.
- `due_date.format("YYYY-MM-DD")` päivämäärän muotoilemiseen.

## Kaavaesimerkkejä

### Laske määräaika

Aseta projektin eräpäivä 2 viikkoa alkamispäivän jälkeen:

```js
start_date + "2w"
```

### Näytä myöhässä-tila

Näytä "Myöhässä", jos eräpäivä on mennyt ja tila ei ole "Done":

```js
if(due_date < now() && status != "Done", "Overdue", "")
```

### Muotoile valuutta

Näytä hinta kahdella desimaalilla ja valuuttamerkillä:

```js
if(price, "$" + price.toFixed(2), "")
```

### Laske luettelon kohteet

Laske luettelomääreen kohteiden lukumäärä:

```js
tasks.length
```

### Laske prioriteettipisteet

Yhdistä useita tekijöitä prioriteettipisteiksi:

```js
(impact * urgency) / effort
```

### Yhdistä tekstikenttiä

Luo koko nimi etu- ja sukunimestä:

```js
first_name + " " + last_name
```

### Laske kokonaiskustannus

Kerro kuukausikustannus omistuskuukausien lukumäärällä:

```js
monthlyUses * formula.Owned.round()
```

## Tietotyypit

Kaavat toimivat erityyppisten tietojen kanssa:

- **Merkkijonot** — Lainausmerkeissä oleva teksti: `"hello"` tai `'world'`
- **Numerot** — Numeeriset arvot: `42`, `3.14`, `(2 + 2)`
- **Boolen arvot** — Tosi tai epätosi: `true`, `false`
- **Päivämäärät** — Luodaan funktioilla `date()`, `today()` tai `now()`
- **Luettelot** — Arvokokoelmia: `[1, 2, 3]`
- **Objektit** — Avain-arvo-pareja: `{"name": "value"}`

Kaavan tulosteen tyyppi määräytyy käytetyn datan ja funktioiden perusteella.

## Viittaa muihin kaavoihin

Kaavat voivat viitata muihin kaavoihin luoden johdettuja laskelmia. Jos sinulla on esimerkiksi kaava nimeltä `price_per_unit`:

```js
price / quantity
```

Voit viitata siihen toisessa kaavassa:

```js
formula.price_per_unit * 1.1
```

> [!warning] Vältä kehäviittauksia
> Kaava ei voi viitata itseensä suoraan tai epäsuorasti muiden kaavojen kautta.
