---
permalink: connectors
aliases:
  - skills
cssclasses: null
description: 'Obsidian Skills -taidot opettavat tekoälyagenteille, miten työskennellä holvisi ja Obsidianin tiedostomuotojen kanssa.'
---
Yhdistimet mahdollistavat Obsidianin yhdistämisen mihin tahansa tekoälyagenttiin, mukaan lukien Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes, Kiro, Muse, OpenCode ja [monet muut](https://agentskills.io/clients).

Tämä tarkoittaa, että agenttisi voivat oppia:

- Kirjoittamaan muistiinpanoja [[Obsidian Flavored Markdown]] -muodossa, [[Sisäiset linkit|wikilinkkien]], upotteiden, nostolaatikoiden ja [[Määreet|määreiden]] kanssa.
- Luomaan ja muokkaamaan [[Johdanto kantoihin|kantoja]] ja [[Canvas]]-tiedostoja.
- Hakemaan, lukemaan ja hallinnoimaan muistiinpanoja käynnissä olevassa sovelluksessa [[Obsidian CLI]]:n avulla.
- Synkronoimaan ja julkaisemaan holveja ilman työpöytäsovellusta [[Obsidian Headless]]-työkalulla.

Taidot ovat avointa lähdekoodia osoitteessa [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Asennus

Löydät Obsidianin hakemalla lisäosaluettelosta Claudessa, ChatGPT:ssä, Dotsissa, Cursorissa, Grok Botissa, Hermeksessä ja Kirossa. Useimmat muut agentit voivat asentaa taidot, jos lähetät niille linkin tälle sivulle.

### Claude

Lisää [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) virallisesta Clauden lisäosahakemistosta.

Claude Code -komentorivikäyttöliittymässä käytä:

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Saadaksesi uudet taidot myöhemmin, suorita `claude plugin update obsidian@obsidian-skills`.

### ChatGPT

Lisää [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) ChatGPT:n lisäosahakemistosta. Lisäosa toimii ChatGPT:ssä, Codexissa ja Dotsissa.

### Antigravity

Suorita Antigravity-komentorivikäyttöliittymässä:

```shell
agy plugin install https://github.com/obsidianmd/obsidian-skills
```

### Grok Bot

Avaa [Obsidian for Grok Bot](https://x.ai/bot/plugin/88871845) ja valitse **Add to Grok Bot**.

### Muse

Pyydä Musea asentamaan taidot osoitteesta https://github.com/obsidianmd/obsidian-skills.

Muse toimii Metan pilvessä, joten `obsidian-cli`-taito ei toimi siellä. Jos käytät Obsidian Headlessia Musessa, kirjaudut sisään ja synkronoit holvisi Metan pilvessä.

### Cursor

Asenna [Obsidian](https://cursor.com/marketplace/obsidian) Cursor Marketplacesta.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### Kiro

```shell
kiro-cli powers install obsidian
```

### GitHub Copilot, OpenCode ja muut agentit

Asenna [npx skills](https://github.com/vercel-labs/skills) -työkalulla, joka kysyy, mihin agentteihin asennus tehdään:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Manuaalista asennusta varten kopioi kansiot hakemistosta `plugins/obsidian/skills/` agenttisi taitohakemistoon, esim. `~/.copilot/skills/` GitHub Copilotille.

## Mukana tulevat taidot

| Taito               | Mitä se tekee                                                                                                                 |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Luo ja muokkaa [[Obsidian Flavored Markdown]] -muistiinpanoja.                                                                |
| `obsidian-bases`    | Luo ja muokkaa [[Kantojen syntaksi|kantoja]] näkymien, suodattimien, kaavojen ja yhteenvetojen kanssa.                        |
| `json-canvas`       | Luo ja muokkaa [[Canvas]]-tiedostoja [JSON Canvas](https://jsoncanvas.org/) -muodossa.                                       |
| `obsidian-cli`      | Vuorovaikuta holvisi kanssa [[Obsidian CLI]]:n kautta, mukaan lukien lisäosien ja teemojen kehitys.                           |
| `obsidian-headless` | Synkronoi ja julkaise holveja komentoriviltä [[Obsidian Headless]]-työkalulla.                                                |
| `defuddle`          | Poimi selkeää Markdown-muotoilua verkkosivuilta [Defuddlella](https://github.com/kepano/defuddle).                            |
| `knap`              | Renderöi Markdown-pohjia JSON- tai CSV-datasta [Knapilla](https://github.com/obsidianmd/knap).                                |

## Vaatimukset

`obsidian-cli`-taito vaatii, että Obsidianin työpöytäsovellus on käynnissä ja [[Obsidian CLI#Install Obsidian CLI|Obsidian CLI on käytössä]], sekä agentin, joka voi suorittaa komentoja tietokoneellasi.

Markdown-, Bases- ja Canvas-taidot kuvaavat ainoastaan tiedostomuotoja, joten ne toimivat missä tahansa agentissa, joka voi lukea ja kirjoittaa tiedostoja holvissasi.

Defuddle, Knap ja Obsidian Headless ovat erillisiä työkaluja, jotka eivät sisälly taitoihin. Kun jokin niistä puuttuu, taito kysyy lupaa ennen sen asentamista npm:stä.

## Yksityisyys

Obsidianin yhdistimet eivät lähetä mitään itsestään. Kun agentti käyttää niitä, sen lukemat muistiinpanot tulevat osaksi keskustelua ja käyttämäsi tekoälymalli käsittelee ne. Tarkista agenttisi tietosuojakäytäntö ennen kuin osoitat sen holviin, jossa on arkaluonteisia muistiinpanoja.
