---
permalink: symlinks
---
Voit käyttää holvissasi [symbolisia linkkejä](https://en.wikipedia.org/wiki/Symbolic_link) (symlinkkejä) ja [liitoskohtia](https://learn.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions#junctions) tiedostojen tallentamiseen holvin ja [[Miten Obsidian tallentaa tietoja#Yleiset asetukset|järjestelmäkansion]] ulkopuolelle.

> [!danger] Käytä omalla vastuullasi
> Suosittelemme vahvasti välttämään symbolisten linkkien käyttöä. Käyttämällä symbolisia linkkejä ja liitoskohtia holvissasi vaarannat tietojesi menettämisen tai vioittumisen, tai Obsidianin kaatumisen. Varmista, että teet säännölliset varmuuskopiot holvistasi ja asetuksistasi.

Alla on joitakin rajoituksia tai ongelmia, joista olemme tietoisia ja jotka saattavat olla hyödyllistä pitää mielessä:

- Symlinkkisilmukat eivät ole sallittuja Obsidianin kaatumisen estämiseksi äärettömän silmukan vuoksi.
- Symlinkkien kohteiden on oltava täysin erillisiä holvin juurikansiosta tai muista symlinkkien kohteista. Erillisyys tarkoittaa, että yksi kansio ei sisällä toista tai päinvastoin. Obsidian ohittaa kaikki symlinkit, jotka osoittavat holvin ylikansioon, tai yhdestä holvin kansiosta toiseen saman holvin kansioon. Tämä on suojamekanismi, joka varmistaa, ettei holviin päädy kopioituja tiedostoja, mikä voisi tehdä linkeistä monitulkintaisia.
- Symlinkit eivät välttämättä toimi hyvin Obsidian Syncin tai _minkään muun synkronointitavan_ kanssa. Jos symlinkin kohde on itsessään kansio, joka synkronoidaan toisen Obsidian-holvin toimesta, voit (mahdollisesti) päätyä synkronointiristiriitoihin tai tietojen menetykseen. Jotkin synkronointityökalut, kuten Git, eivät seuraa symlinkkejä, vaan synkronoivat _polun_, johon symlinkki osoittaa, mikä voi tuottaa ei-toivottuja tuloksia, jos jaat holvisi muiden kanssa tällä tavoin.
- Obsidianin tiedostonhallinta ei voi siirtää tiedostoja laiterajojen yli, joten jos käytät symlinkkiä kansioon eri asemalla kuin holvisi, et voi raahata tiedostoja kyseisen kansion ja muiden kansioiden välillä Obsidianin tiedostoselaimen avulla. (Sinun on käytettävä käyttöjärjestelmäsi tiedostonhallintaa tällaisiin siirtoihin, ja Obsidian tulkitsee siirron poistoksi ja uuden tiedoston luomiseksi. Se _ei_ myöskään päivitä linkkejä, jotka riippuivat kyseisen tiedoston polusta.)
- Tiedostojen symlinkit (toisin kuin kansioiden symlinkit) _saattavat_ toimia, mutta niitä ei virallisesti tueta tällä hetkellä. Obsidianin ulkopuolella tehtyjä muutoksia ei seurata, joten jos muutat tiedostoa suoraan, Obsidian ei havaitse muutosta, päivitä hakuindeksejä jne.
- Asioiden linkittäminen symbolisilla linkeillä `.obsidian/`-kansion alla holvien välillä jakamista varten **aiheuttaa suuren riskin asetusten vioittumisesta**, ellet _todella_ tiedä mitä olet tekemässä. Jos päätät tehdä näin, pidä vähintään varmuuskopiot.
