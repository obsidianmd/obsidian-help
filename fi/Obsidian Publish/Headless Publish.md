---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish tarjoaa headless-asiakkaan holvien julkaisemiseen ilman työpöytäsovellusta. Hyödyllinen CI-putkille ja automatisoiduille työnkuluille.
---
[[Johdanto Obsidian Publishiin|Obsidian Publish]] tarjoaa komentoriviasiakasohjelman holvien julkaisemiseen ilman työpöytäsovellusta. Hyödyllinen CI-putkistoille ja automatisoiduille työnkuluille. Julkaise viimeisimmät muutoksesi aikataulun mukaan tai osana rakennusputkistoa.

Asenna [[Obsidian Headless]] **(avoin beta)** käyttääksesi [[Johdanto Obsidian Publishiin|Obsidian Publishia]] komentoriviltä ilman Obsidianin työpöytäsovellusta.

## Pika-aloitus

Asenna [[Obsidian Headless|Obsidian Headless]] **(avoin beta)**:

```shell
npm install -g obsidian-headless
```

Sinulla on oltava aktiivinen [[Johdanto Obsidian Publishiin|Obsidian Publish -tilaus]].

```shell
# Kirjaudu sisään
ob login

# Listaa Publish-sivustosi
ob publish-list-sites

# Yhdistä paikallinen holvi Publish-sivustoon
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# Esikatsele muutoksia julkaisematta
ob publish --dry-run

# Julkaise muutokset
ob publish
```

## Komennot

### `ob publish-list-sites`

Listaa kaikki tiliisi liitetyt Publish-sivustot.

### `ob publish-create-site`

Luo uusi Publish-sivusto.

```
ob publish-create-site --slug <slug>
```

| Vaihtoehto | Kuvaus |
| --- | --- |
| `--slug` | Sivuston URL-tunniste (esim. `my-notes` luo osoitteen `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

Yhdistä paikallinen holvi Publish-sivustoon.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| Vaihtoehto | Kuvaus |
| --- | --- |
| `--site` | Sivuston tunnus tai slug |
| `--path` | Paikallisen holvin polku (oletus: nykyinen hakemisto) |

### `ob publish`

Julkaise holvin muutokset sivustollesi. Oletuksena mukaan otetaan vain tiedostot, joiden alkulehdet sisältävät `publish: true`.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| Vaihtoehto | Kuvaus |
| --- | --- |
| `--path` | Paikallisen holvin polku (oletus: nykyinen hakemisto) |
| `--all` | Sisällytä kaikki tiedostot, ei vain julkaisumerkinnällä varustetut |
| `--dry-run` | Näytä muutokset julkaisematta |
| `--yes` | Julkaise ilman vahvistuskehotetta |

### `ob publish-config`

Näytä tai muuta holvin sisällytys-/poissulkukansioasetuksia. Suorita ilman valitsimia nähdäksesi nykyisen kokoonpanon.

```
ob publish-config [--path <local-path>] [options]
```

| Vaihtoehto | Kuvaus |
| --- | --- |
| `--path` | Paikallisen holvin polku (oletus: nykyinen hakemisto) |
| `--includes` | Sisällytettävät kansiot, pilkulla erotetut (tyhjä merkkijono tyhjentää) |
| `--excludes` | Poissulkevat kansiot, pilkulla erotetut (tyhjä merkkijono tyhjentää) |

### `ob publish-site-options`

Näytä tai päivitä sivuston laajuiset näkymä- ja navigointiasetukset. Suorita ilman valitsimia nähdäksesi nykyiset asetukset.

```
ob publish-site-options [--path <local-path>] [options]
```

| Vaihtoehto | Kuvaus |
| --- | --- |
| `--path` | Paikallisen holvin polku (oletus: nykyinen hakemisto) |
| `--site-name` | Sivuston nimi |
| `--index-file` | Etusivun tiedostopolku |
| `--logo` | Logon tiedostopolku (tyhjä merkkijono tyhjentää) |
| `--show-navigation` | Näytä hakemisto |
| `--show-graph` | Näytä verkkonäkymä |
| `--show-outline` | Näytä sisällysluettelo |
| `--show-search` | Näytä haku |
| `--show-backlinks` | Näytä paluulinkit |
| `--show-hover-preview` | Näytä esikatselu kohdistettaessa |
| `--show-theme-toggle` | Näytä teeman vaihto |
| `--default-theme` | Oletusteema: `light` tai `dark` |
| `--readable-line-length` | Luettava rivin pituus |
| `--strict-line-breaks` | Markdown-rivinvaihdot |
| `--hide-title` | Piilota otsikko asiakirjassa |
| `--sliding-window` | Liukuikkunatila |
| `--nav-order` | Navigointijärjestys, pilkulla erotetut polut (tyhjä merkkijono tyhjentää) |
| `--nav-hidden` | Piilotetut navigointikohteet, pilkulla erotetut polut (tyhjä merkkijono tyhjentää) |

### `ob publish-unlink`

Katkaise holvin yhteys Publish-sivustoon.

```
ob publish-unlink [--path <local-path>]
```
