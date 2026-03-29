---
permalink: sync/headless
cssclasses:
  - reference
description: 'Obsidian Sync tarjoaa headless-asiakkaan holvien synkronointiin ilman työpöytäsovellusta. Hyödyllinen CI-putkille, agenteille ja automatisoiduille työnkuluille. Synkronoi viimeisimmät muutokset tai pidä tiedostot jatkuvasti ajan tasalla.'
---
[[Johdanto Obsidian Synciin|Obsidian Sync]] tarjoaa päättömän asiakasohjelman (headless client) holvien synkronointiin ilman työpöytäsovellusta. Hyödyllinen CI-putkille, agenteille ja automatisoiduille työnkuluille. Synkronoi viimeisimmät muutokset tai pidä tiedostot jatkuvasti ajan tasalla.

Asenna [[Obsidian Headless]] **(avoin beta)** käyttääksesi [[Johdanto Obsidian Synciin|Obsidian Syncia]] komentoriviltä ilman Obsidianin työpöytäsovellusta. Headless Sync käyttää samoja [[Turvallisuus ja yksityisyys|salaus- ja yksityisyydensuojaominaisuuksia]] kuin työpöytäsovellus, mukaan lukien päästä päähän -salauksen.

## Pika-aloitus

> [!error] Varmuuskopioi tietosi ennen aloittamista
> 1. Varmuuskopioi tietosi aina ennen aloittamista odottamattomien tilanteiden varalta.
> 2. Älä käytä *sekä* työpöytäsovelluksen Synciä että Headless Synciä samalla laitteella, sillä se voi aiheuttaa tietoristiriitoja. Käytä vain yhtä synkronointimenetelmää laitetta kohden.

Asenna [[Obsidian Headless|Obsidian Headless]] **(avoin beta)**:

```shell
npm install -g obsidian-headless
```

Sinulla on oltava aktiivinen [[Tilaukset ja tallennustilan rajoitukset|Obsidian Sync -tilaus]].

```shell
# Kirjaudu sisään
ob login

# Listaa etäholvisi
ob sync-list-remote

# Määritä holvi synkronointia varten
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# Suorita kertaluonteinen synkronointi
ob sync

# Suorita jatkuva synkronointi (seuraa muutoksia)
ob sync --continuous
```

## Komennot

### `ob sync-list-remote`

Listaa kaikki tilillesi saatavilla olevat etäholvit, mukaan lukien jaetut holvit.

### `ob sync-list-local`

Listaa paikallisesti määritetyt holvit ja niiden polut.

### `ob sync-create-remote`

Luo uusi etäholvi.

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| Vaihtoehto | Kuvaus |
| --- | --- |
| `--name` | Holvin nimi (pakollinen) |
| `--encryption` | `standard` hallitulle salaukselle, `e2ee` päästä päähän -salaukselle |
| `--password` | Päästä päähän -salaussalasana (kysytään, jos jätetään pois) |
| `--region` | Palvelimen [[Sync-alueet\|alue]] (automaattinen, jos jätetään pois) |

### `ob sync-setup`

Määritä synkronointi paikallisen holvin ja etäholvin välille.

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| Vaihtoehto | Kuvaus |
| --- | --- |
| `--vault` | Etäholvin tunnus tai nimi (pakollinen) |
| `--path` | Paikallinen hakemisto (oletus: nykyinen hakemisto) |
| `--password` | Päästä päähän -salaussalasana (kysytään, jos jätetään pois) |
| `--device-name` | Laitteen nimi, joka näkyy [[Versiohistoria|synkronoinnin versiohistoriassa]] |
| `--config-dir` | [[Asetuskansio|Asetuskansion]] nimi (oletus: `.obsidian`) |

### `ob sync`

Suorita synkronointi määritetylle holville.

```
ob sync [--path <local-path>] [--continuous]
```

| Vaihtoehto | Kuvaus |
| --- | --- |
| `--path` | Paikallisen holvin polku (oletus: nykyinen hakemisto) |
| `--continuous` | Suorita jatkuvasti ja seuraa muutoksia |

### `ob sync-config`

Näytä tai muuta holvin [[Synkronoinnin asetukset ja valikoiva synkronointi|synkronoinnin asetuksia]]. Suorita ilman valitsimia näyttääksesi nykyisen kokoonpanon.

```
ob sync-config [--path <local-path>] [options]
```

| Vaihtoehto            | Kuvaus                                                                                                                                                                                                         |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path`              | Paikallisen holvin polku (oletus: nykyinen hakemisto)                                                                                                                                                          |
| `--mode`              | Synkronointitila: `bidirectional` (oletus), `pull-only` (vain lataa, ohita paikalliset muutokset) tai `mirror-remote` (vain lataa, palauta paikalliset muutokset)                                               |
| `--conflict-strategy` | `merge` tai `conflict`                                                                                                                                                                                         |
| `--file-types`        | Synkronoitavat liitetyypit: `image`, `audio`, `video`, `pdf`, `unsupported` (pilkuilla erotettu, tyhjä tyhjentää)                                                                                               |
| `--configs`           | Synkronoitavat asetuskategoriat: `app`, `appearance`, `appearance-data`, `hotkey`, `core-plugin`, `core-plugin-data`, `community-plugin`, `community-plugin-data` (pilkuilla erotettu, tyhjä poistaa asetusten synkronoinnin käytöstä) |
| `--excluded-folders`  | Poissuljettavat kansiot (pilkuilla erotettu, tyhjä tyhjentää)                                                                                                                                                  |
| `--device-name`       | Laitteen nimi, jolla tämä asiakasohjelma tunnistetaan synkronoinnin versiohistoriassa                                                                                                                          |
| `--config-dir`        | Asetuskansion nimi (oletus: `.obsidian`)                                                                                                                                                                       |

### `ob sync-status`

Näytä holvin synkronoinnin tila ja kokoonpano.

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

Katkaise holvin yhteys synkronointiin ja poista tallennetut tunnistetiedot.

```
ob sync-unlink [--path <local-path>]
```

## Natiivit moduulit

Obsidian Headless sisältää valmiiksi käännetyn natiiviliitännäisen tiedoston luontiajan (birthtime) asettamiseen Windowsissa ja macOS:ssä. Tämä säilyttää alkuperäiset luontiaikaleimat, kun tiedostoja ladataan palvelimelta.

Liitännäinen käyttää N-API-versiota 3, joten käännetyt binäärit ovat ABI-vakaita ja toimivat eri Node.js-versioilla ilman uudelleenkääntämistä.

Linuxissa birthtimeä ei tueta — liitännäistä ei sisällytetä, ja synkronointi toimii normaalisti ilman sitä.

Valmiiksi käännetyt binäärit sisältyvät seuraaville alustoille:

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`
