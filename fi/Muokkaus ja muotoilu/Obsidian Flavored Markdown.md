---
permalink: obsidian-flavored-markdown
publish: true
mobile: true
description: 'Tutustu Obsidianin Markdown-muunnelmaan, mukaan lukien tuetut laajennukset ja Markdownin vuorovaikutus HTML-elementtien kanssa.'
---
Obsidian pyrkii mahdollisimman suureen toiminnallisuuteen rikkomatta olemassa olevia muotoiluja. Siksi käytämme yhdistelmää eri [[Muotoilun perussyntaksi|Markdown]]-varianteista.

Obsidian tukee seuraavia: [CommonMark](https://commonmark.org/), [GitHub Flavored Markdown](https://github.github.com/gfm/) ja [LaTeX](https://www.latex-project.org/).

> [!tip]- Markdown HTML:n sisällä
> Obsidian ei renderöi Markdown-syntaksia HTML-elementtien sisällä. Tämä on tarkoituksellinen suunnitteluvalinta suorituskyvyn optimoimiseksi ja jäsentimen monimutkaisuuden pitämiseksi matalana suurten asiakirjojen hallinnassa.
>
> Esimerkiksi Markdown-muotoilut kuten `**bold**` tai `` `code` `` eivät käsittele `<div>`-, `<span>`-, `<table>`- tai minkään muiden HTML-tagien sisällä.
>
> ```md
> <div>
> Tämä **ei ole** lihavoitu.
> </div>
> ```

### Tuetut Markdown-laajennukset

| Syntaksi        | Kuvaus                                                                |
| --------------- | --------------------------------------------------------------------- |
| `[[Linkki]]`    | [[Sisäiset linkit]]                                                   |
| `![[Linkki]]`   | [[Upota tiedostoja]]                                                  |
| `![[Linkki#^id]]` | [[Sisäiset linkit#Linkitä lohkoon muistiinpanossa\|Lohkoviittaukset]] |
| `^id`           | [[Sisäiset linkit#Linkitä lohkoon muistiinpanossa\|Lohkon määrittely]] |
| `[^id]`         | [[Muotoilun perussyntaksi#Alaviitteet\|Alaviitteet]]                  |
| `%%Teksti%%`    | [[Muotoilun perussyntaksi#Kommentit\|Kommentit]]                      |
| `~~Teksti~~`    | [[Muotoilun perussyntaksi#Lihavointi, kursivointi, korostukset\|Yliviivaukset]] |
| `==Teksti==`    | [[Muotoilun perussyntaksi#Lihavointi, kursivointi, korostukset\|Korostukset]] |
| `` ``` ``       | [[Muotoilun perussyntaksi#Koodilohkot\|Koodilohkot]]                 |
| `- [ ]`         | [[Muotoilun perussyntaksi#Tehtäväluettelot\|Keskeneräinen tehtävä]]   |
| `- [x]`         | [[Muotoilun perussyntaksi#Tehtäväluettelot\|Valmis tehtävä]]          |
| `> [!note]`     | [[Nostolaatikot]]                                                     |
| (katso linkki)  | [[Muotoilun lisäsyntaksi#Taulukot\|Taulukot]]                        |
