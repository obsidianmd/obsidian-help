---
permalink: plugins/graph
publish: true
mobile: true
description: 'Graafinäkymä on ydinlaajennus, jonka avulla voit visualisoida holvisi muistiinpanojen välisiä suhteita.'
---
Verkkonäkymä on [[Sisäänrakennetut lisäosat|sisäänrakennettu lisäosa]], joka mahdollistaa holvin muistiinpanojen välisten suhteiden visualisoinnin.

Avaa verkkonäkymä napsauttamalla **Avaa verkkonäkymä** [[Nauha|nauhavalikossa]].

- Ympyrät edustavat muistiinpanoja eli _solmuja_.
- Viivat edustavat kahden solmun välisiä [[Sisäiset linkit|sisäisiä linkkejä]].

Mitä useampi solmu viittaa tiettyyn solmuun, sitä suuremmaksi se kasvaa.

Muistiinpanojen käsittely verkkonäkymässä:

- Kohdista hiiri ympyrän päälle korostaaksesi kyseisen muistiinpanon yhteydet.
- Napsauta muistiinpanoa verkkonäkymässä avataksesi sen.
- Napsauta muistiinpanoa hiiren kakkospainikkeella avataksesi kontekstivalikon, jossa on kyseiselle muistiinpanolle käytettävissä olevat toiminnot.

Verkkonäkymässä navigointi:

- Lähennä ja loitonna hiiren rullalla tai `+`- ja `-`-näppäimillä.
- Siirrä näkymää raahaamalla hiirellä tai käyttämällä nuolinäppäimiä.

Pidä Shift-näppäintä painettuna käyttäessäsi näppäimistöä nopeuttaaksesi liikkeitä.

## Asetukset

Avaa verkkonäkymän asetukset napsauttamalla hammasrataskuvaketta verkkonäkymän oikeassa yläkulmassa.

Napsauta **Palauta oletusasetukset** asetusten oikeassa yläkulmassa palauttaaksesi kaikki tekemäsi muutokset.

### Suodattimet

Tämä osio hallitsee, mitkä solmut näytetään verkkonäkymässä.

- **Hae tiedostoja** suodattaa muistiinpanoja hakutermin perusteella. Lisätietoja kehittyneempien hakutermien kirjoittamisesta on kohdassa [[Hae]].
- **Tunnisteet** näyttää tai piilottaa tunnisteet verkkonäkymässä.
- **Liitteet** näyttää tai piilottaa liitteet verkkonäkymässä.
- **Vain olemassa olevat** näyttää tai piilottaa muistiinpanot, jotka ovat olemassa holvissa. Koska muistiinpanon ei tarvitse olla olemassa, jotta siihen voidaan linkittää, tämä voi auttaa rajaamaan verkkonäkymän vain holvissa todella oleviin muistiinpanoihin.
- **Orvot** näyttää tai piilottaa muistiinpanot, joilla ei ole lainkaan linkkejä.

> [!info] Pois jätettävät tiedostot
> Tiedostot, jotka vastaavat [[Asetukset#Pois jätettävät tiedostot|Pois jätettävät tiedostot]] -malleja, eivät näy verkkonäkymässä.

### Ryhmät

Luo muistiinpanoryhmiä erottaaksesi ne toisistaan väreillä.

Uuden ryhmän luominen:

1. Napsauta **Uusi ryhmä**.
2. Kirjoita hakukenttään hakutermi muistiinpanoille, jotka haluat lisätä ryhmään.
3. Napsauta värillistä ympyrää antaaksesi ryhmälle värin.

Lisätietoja kehittyneempien hakutermien kirjoittamisesta on kohdassa [[Hae]].

### Näkymä

Tämä osio hallitsee solmujen ja linkkien visualisointia verkkonäkymässä.

- **Nuolet** näyttää tai piilottaa kunkin linkin suunnan.
- **Tekstin piilotuskynnys** säätää kunkin muistiinpanon nimen tekstin läpinäkyvyyttä.
- **Solmujen koko** säätää kunkin muistiinpanoa edustavan ympyrän kokoa.
- **Linkkien paksuus** säätää kunkin linkin viivan leveyttä.
- **Animoi** käynnistää [[#Aikajana-animaation käynnistäminen|aikajana-animaation]].

### Voimat

Tämä osio hallitsee verkkonäkymän kunkin solmun voimia.

- **Keskuksen voima** säätää verkkonäkymän kompaktiutta. Suurempi arvo luo ympyränmuotoisemman verkon.
- **Hyljintävoima** säätää, kuinka paljon solmu työntää muita solmuja kauemmas itsestään.
- **Linkin voima** säätää kunkin linkin vetovoimaa. Jos linkki olisi kuminauha, linkin voima säätelee nauhan kireyttä tai löysyyttä.
- **Linkin etäisyys** säätää kunkin muistiinpanon välisten viivojen pituutta.

## Aikajana-animaation käynnistäminen

Muistiinpanot ja liitteet ilmestyvät aikajärjestyksessä luomisajan perusteella.

![[obsidian-graph-view.png#interface]]

## Lähiverkko

Avaa lähiverkkonäkymä käyttämällä komentoa **Avaa lähiverkko**. Verkkonäkymä näyttää kaikki holvin muistiinpanot, kun taas lähiverkkonäkymä näyttää aktiiviseen muistiinpanoon yhdistetyt muistiinpanot.

Lähiverkkonäkymässä voi käyttää kaikkia globaalin verkkonäkymän [[#Asetukset|asetuksia]]. Lisäksi voit muuttaa lähiverkon syvyyttä. Jokainen syvyystaso näyttää muistiinpanot, jotka on yhdistetty edellisellä syvyystasolla paljastettuihin muistiinpanoihin. Lähiverkon syvyyttä säädetään lähiverkon suodatinasetusten yläosassa olevalla liukusäätimellä.
