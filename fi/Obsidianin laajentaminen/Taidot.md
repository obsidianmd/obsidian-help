---
permalink: skills
cssclasses: null
description: 'Obsidian Skills opettavat tekoälyagenteille, miten työskennellä holvisi ja Obsidianin tiedostomuotojen kanssa.'
---
Obsidian Skills ovat ohjeita, jotka opettavat tekoälyagentteja toimimaan Obsidianin kanssa. Ne noudattavat avointa [Agent Skills](https://agentskills.io/specification) -muotoa, joten ne toimivat minkä tahansa taitoja tukevan agentin kanssa, mukaan lukien Claude Code, Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes Agent, Kiro, OpenCode ja [monet muut](https://agentskills.io/clients).

Obsidian Skillsin avulla agentti voi:

- Kirjoittaa muistiinpanoja [[Obsidian Flavored Markdown]] -muodossa, [[Sisäiset linkit|wikilinkkeineen]], upotteineen, nostolaatikkoineen ja [[Määreet|määreineen]].
- Luoda ja muokata [[Johdanto kantoihin|kantoja]] ja [[Canvas]]-tiedostoja.
- Hakea, lukea ja hallita muistiinpanoja käynnissä olevassa sovelluksessa [[Obsidian CLI]]:n avulla.
- Synkronoida ja julkaista holveja ilman työpöytäsovellusta [[Obsidian Headless]] -työkalulla.

Taidot ovat avointa lähdekoodia osoitteessa [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Asennus

Obsidian on virallinen lisäosa Claudelle, ChatGPT:lle, Dotsille, Cursorille, Grok Botille, Hermesille ja Kirolle. Useimmat muut agentit voivat asentaa taidot GitHubista.

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

Manuaalisessa asennuksessa kopioi `plugins/obsidian/skills/`-kansioiden sisältö agenttisi taitokansion, esim. `~/.copilot/skills/` GitHub Copilotille.

## Mukana tulevat taidot

| Taito               | Mitä se tekee                                                                                                                 |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Luo ja muokkaa [[Obsidian Flavored Markdown]] -muistiinpanoja.                                                                |
| `obsidian-bases`    | Luo ja muokkaa [[Kantojen syntaksi|kantoja]] näkymineen, suodattimineen, kaavoineen ja yhteenvetoineen.                        |
| `json-canvas`       | Luo ja muokkaa [[Canvas]]-tiedostoja [JSON Canvas](https://jsoncanvas.org/) -muodossa.                                        |
| `obsidian-cli`      | Vuorovaikuta holvisi kanssa [[Obsidian CLI]]:n kautta, mukaan lukien lisäosien ja teemojen kehitys.                            |
| `obsidian-headless` | Synkronoi ja julkaise holveja komentoriviltä [[Obsidian Headless]] -työkalulla.                                               |
| `defuddle`          | Poimi puhdasta Markdownia verkkosivuilta [Defuddle](https://github.com/kepano/defuddle)-työkalulla.                            |
| `knap`              | Renderöi Markdown-pohjia JSON- tai CSV-datasta [Knap](https://github.com/obsidianmd/knap)-työkalulla.                         |

## Vaatimukset

`obsidian-cli`-taito edellyttää, että Obsidianin työpöytäsovellus on käynnissä ja [[Obsidian CLI#Install Obsidian CLI|Obsidian CLI on käytössä]], sekä agentin, joka pystyy suorittamaan komentoja tietokoneellasi.

Markdown-, Bases- ja Canvas-taidot kuvaavat ainoastaan tiedostomuotoja, joten ne toimivat missä tahansa agentissa, joka pystyy lukemaan ja kirjoittamaan tiedostoja holvissasi.

Defuddle, Knap ja Obsidian Headless ovat erillisiä työkaluja, joita ei ole yhdistetty taitoihin. Kun jokin niistä puuttuu, taito kysyy ennen sen asentamista npm:stä.

## Tietosuoja

Obsidian Skills eivät lähetä mitään itse. Kun agentti käyttää niitä, sen lukemat muistiinpanot tulevat osaksi keskustelua ja käyttämäsi tekoälymalli käsittelee ne. Tarkista agenttisi tietosuojakäytäntö ennen kuin osoitat sen holviin, jossa on arkaluonteisia muistiinpanoja.
