---
permalink: skills
cssclasses: null
description: 'Obsidian Skills opettavat tekoälyagenteille, miten työskennellä holvisi ja Obsidianin tiedostomuotojen kanssa.'
---
Obsidian Skills ovat ohjeita, jotka opettavat tekoälyagentteja toimimaan Obsidianin kanssa. Ne noudattavat avointa [Agent Skills](https://agentskills.io/specification) -muotoa, joten ne toimivat minkä tahansa taitoja tukevan agentin kanssa, mukaan lukien Claude Code, Claude, ChatGPT, Cursor, Gemini CLI, GitHub Copilot, Grok Bot, OpenCode ja [monet muut](https://agentskills.io/clients).

Obsidian Skillsin avulla agentti voi:

- Kirjoittaa muistiinpanoja [[Obsidian Flavored Markdown]] -muodossa, [[Sisäiset linkit|wikilinkkeineen]], upotteineen, nostolaatikkoineen ja [[Määreet|määreineen]].
- Luoda ja muokata [[Johdanto kantoihin|kantoja]] ja [[Canvas]]-tiedostoja.
- Hakea, lukea ja hallita muistiinpanoja käynnissä olevassa sovelluksessa [[Obsidian CLI]]:n avulla.
- Synkronoida ja julkaista holveja ilman työpöytäsovellusta [[Obsidian Headless]] -työkalulla.

Taidot ovat avointa lähdekoodia osoitteessa [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Asennus

Obsidian on virallinen lisäosa ChatGPT:lle, Codexille, Cursorille ja Grok Botille. Muut agentit asentavat taidot GitHubista.

### ChatGPT ja Codex

Lisää [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) ChatGPT:n lisäosahakemistosta. Lisäosa toimii sekä ChatGPT:ssä että Codexissa.

### Cursor

Asenna [Obsidian](https://cursor.com/marketplace/obsidian) Cursor Marketplacesta.

### Grok Bot

Avaa [Obsidian for Grok Bot](https://x.ai/bot/plugin/88871845) ja valitse **Add to Grok Bot**.

### Claude Code

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Saadaksesi uudet taidot myöhemmin, suorita `claude plugin update obsidian@obsidian-skills`.

### Claude

Claude lataa jokaisen taidon ZIP-tiedostona, joten lisää vain tarvitsemasi taidot:

1. Lataa [obsidian-skills](https://github.com/obsidianmd/obsidian-skills/archive/refs/heads/main.zip) ja pura se.
2. Pakkaa `plugins/obsidian/skills/`-kansiossa kunkin haluamasi taidon kansio ZIP-tiedostoksi, esim. `obsidian-markdown.zip`.
3. Siirry Claudessa kohtaan **Customize** → **Skills**, valitse **+** → **Create skill** → **Upload a skill** ja valitse ZIP-tiedosto.

Katso [Using skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude) saadaksesi tietoa taitoja tukevista tilauksista.

### Gemini CLI

```shell
gemini extensions install https://github.com/obsidianmd/obsidian-skills
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
