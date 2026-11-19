---
permalink: skills
cssclasses: null
description: 'Obsidian Skills učia AI agentov, ako pracovať s vaším trezorom a formátmi súborov Obsidian.'
---
Obsidian Skills sú inštrukcie, ktoré učia AI agentov pracovať s Obsidian. Dodržiavajú otvorený formát [Agent Skills](https://agentskills.io/specification), takže fungujú s akýmkoľvek agentom, ktorý podporuje zručnosti, vrátane Claude Code, Claude, ChatGPT, Cursor, Gemini CLI, GitHub Copilot, Grok Bot, OpenCode a [mnohých ďalších](https://agentskills.io/clients).

S Obsidian Skills môže agent:

- Písať poznámky v [[Obsidian Flavored Markdown]] s [[Interné odkazy|wiki odkazmi]], vloženiami, zvýraznenými blokmi a [[Vlastnosti|vlastnosťami]].
- Vytvárať a upravovať súbory [[Úvod do Databáz|Databáz]] a [[Canvas]].
- Hľadať, čítať a spravovať poznámky v bežiacej aplikácii pomocou [[Obsidian CLI]].
- Synchronizovať a publikovať trezory bez desktopovej aplikácie pomocou [[Obsidian Headless]].

Zručnosti sú otvorený zdrojový kód na [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Inštalácia

Obsidian je oficiálny plugin pre ChatGPT, Codex, Cursor a Grok Bot. Ostatní agenti inštalujú zručnosti z GitHubu.

### ChatGPT a Codex

Pridajte [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) z adresára pluginov ChatGPT. Plugin funguje v ChatGPT aj v Codex.

### Cursor

Nainštalujte [Obsidian](https://cursor.com/marketplace/obsidian) z Cursor Marketplace.

### Grok Bot

Otvorte [Obsidian pre Grok Bot](https://x.ai/bot/plugin/88871845) a vyberte **Add to Grok Bot**.

### Claude Code

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Na získanie nových zručností neskôr spustite `claude plugin update obsidian@obsidian-skills`.

### Claude

Claude nahráva každú zručnosť ako ZIP súbor, takže pridajte len tie zručnosti, ktoré potrebujete:

1. Stiahnite [obsidian-skills](https://github.com/obsidianmd/obsidian-skills/archive/refs/heads/main.zip) a rozbaľte archív.
2. V `plugins/obsidian/skills/` skomprimujte priečinok každej zručnosti, ktorú chcete, do ZIP súboru, napr. `obsidian-markdown.zip`.
3. V Claude prejdite na **Customize** → **Skills**, vyberte **+** → **Create skill** → **Upload a skill** a zvoľte ZIP súbor.

Pozrite si [Using skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude) pre plány, ktoré podporujú zručnosti.

### Gemini CLI

```shell
gemini extensions install https://github.com/obsidianmd/obsidian-skills
```

### GitHub Copilot, OpenCode a ostatní agenti

Nainštalujte pomocou [npx skills](https://github.com/vercel-labs/skills), ktorý sa opýta, do ktorých agentov nainštalovať:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Na manuálnu inštaláciu skopírujte priečinky z `plugins/obsidian/skills/` do priečinka zručností vášho agenta, napr. `~/.copilot/skills/` pre GitHub Copilot.

## Zahrnuté zručnosti

| Zručnosť            | Čo robí                                                                                                                      |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Vytváranie a úprava poznámok v [[Obsidian Flavored Markdown]].                                                               |
| `obsidian-bases`    | Vytváranie a úprava [[Syntax Databáz\|Databáz]] so zobrazeniami, filtrami, vzorcami a súhrnmi.                               |
| `json-canvas`       | Vytváranie a úprava súborov [[Canvas]] pomocou formátu [JSON Canvas](https://jsoncanvas.org/).                                |
| `obsidian-cli`      | Interakcia s trezorem cez [[Obsidian CLI]], vrátane vývoja pluginov a tém.                                                   |
| `obsidian-headless` | Synchronizácia a publikovanie trezorov z príkazového riadka pomocou [[Obsidian Headless]].                                   |
| `defuddle`          | Extrahovanie čistého Markdown z webových stránok pomocou [Defuddle](https://github.com/kepano/defuddle).                    |
| `knap`              | Renderovanie Markdown šablón z JSON alebo CSV dát pomocou [Knap](https://github.com/obsidianmd/knap).                       |

## Požiadavky

Zručnosť `obsidian-cli` vyžaduje spustenú desktopovú aplikáciu Obsidian so [[Obsidian CLI#Inštalácia Obsidian CLI|zapnutým Obsidian CLI]] a agenta, ktorý môže spúšťať príkazy na vašom počítači.

Zručnosti Markdown, Databázy a Canvas iba popisujú formáty súborov, takže fungujú v akomkoľvek agentovi, ktorý môže čítať a zapisovať súbory vo vašom trezore.

Defuddle, Knap a Obsidian Headless sú samostatné nástroje, ktoré nie sú súčasťou zručností. Keď niektorý chýba, zručnosť sa pred inštaláciou z npm opýta na povolenie.

## Súkromie

Obsidian Skills samy o sebe neodosielajú žiadne dáta. Keď ich agent používa, poznámky, ktoré číta, sa stávajú súčasťou konverzácie a spracúva ich AI model, ktorý používate. Pred tým, ako agenta nasmerujete na trezor s citlivými poznámkami, si prečítajte zásady ochrany súkromia vášho agenta.
