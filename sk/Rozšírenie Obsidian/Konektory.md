---
permalink: connectors
aliases:
  - skills
cover: Attachments/Connectors cover.jpg
cssclasses: null
description: 'Prepojte Obsidian s AI agentmi, aby mohli pracovať s vaším trezorom a formátmi súborov Obsidian.'
---
Konektory vám umožňujú jednoducho poskytnúť vašim agentom prístup k Obsidianu, pričom si zachováte úplné vlastníctvo vašich dát. Obsidian Konektory sú dostupné pre aplikácie vrátane Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes, Kiro, Muse, OpenCode a [mnohým ďalším](https://agentskills.io/clients).

To znamená, že vaši agenti sa môžu naučiť:

- Písať poznámky v [[Obsidian Flavored Markdown]] s [[Interné odkazy|wiki odkazmi]], vloženiami, zvýraznenými blokmi a [[Vlastnosti|vlastnosťami]].
- Vytvárať a upravovať súbory [[Úvod do Databáz|Databáz]] a [[Canvas|Canvas]].
- Hľadať, čítať a spravovať poznámky v bežiacej aplikácii pomocou [[Obsidian CLI]].
- Synchronizovať a publikovať trezory bez desktopovej aplikácie pomocou [[Obsidian Headless]].

Schopnosti sú open source na [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Inštalácia

Obsidian nájdete vyhľadávaním v zozname pluginov v Claude, ChatGPT, Dots, Cursor, Grok Bot, Hermes a Kiro. Väčšina ostatných agentov dokáže schopnosti nainštalovať, ak im pošlete odkaz na túto stránku.

### Claude

Pridajte [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) z oficiálneho adresára pluginov Claude.

Pre Claude Code CLI použite:

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Pre získanie nových schopností neskôr spustite `claude plugin update obsidian@obsidian-skills`.

### ChatGPT

Pridajte [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) z adresára pluginov ChatGPT. Plugin funguje v ChatGPT, Codex a Dots.

### Antigravity

V Antigravity CLI spustite:

```shell
agy plugin install https://github.com/obsidianmd/obsidian-skills
```

### Grok Bot

Otvorte [Obsidian pre Grok Bot](https://x.ai/bot/plugin/88871845) a vyberte **Add to Grok Bot**.

### Muse

Požiadajte Muse o inštaláciu schopností z https://github.com/obsidianmd/obsidian-skills.

Muse beží v cloude Meta, takže schopnosť `obsidian-cli` tam nefunguje. Ak používate Obsidian Headless v Muse, prihlásite sa a synchronizujete svoj trezor v cloude Meta.

### Cursor

Nainštalujte [Obsidian](https://cursor.com/marketplace/obsidian) z Cursor Marketplace.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### Kiro

```shell
kiro-cli powers install obsidian
```

### GitHub Copilot, OpenCode a ďalší agenti

Nainštalujte pomocou [npx skills](https://github.com/vercel-labs/skills), ktorý sa opýta, do ktorých agentov inštalovať:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Pre manuálnu inštaláciu skopírujte priečinky v `plugins/obsidian/skills/` do priečinka schopností vášho agenta, napr. `~/.copilot/skills/` pre GitHub Copilot.

## Zahrnuté schopnosti

| Schopnosť           | Čo robí                                                                                                                      |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown`  | Vytváranie a úprava poznámok v [[Obsidian Flavored Markdown]].                                                               |
| `obsidian-bases`     | Vytváranie a úprava [[Syntax Databáz\|Databáz]] so zobrazeniami, filtrami, vzorcami a súhrnmi.                               |
| `json-canvas`        | Vytváranie a úprava súborov [[Canvas]] pomocou formátu [JSON Canvas](https://jsoncanvas.org/).                                |
| `obsidian-cli`       | Interakcia s trezorem cez [[Obsidian CLI]] vrátane vývoja pluginov a tém.                                                    |
| `obsidian-headless`  | Synchronizácia a publikovanie trezorov z príkazového riadku pomocou [[Obsidian Headless]].                                   |
| `defuddle`           | Extrahovanie čistého Markdown z webových stránok pomocou [Defuddle](https://github.com/kepano/defuddle).                     |
| `knap`               | Renderovanie Markdown šablón z JSON alebo CSV dát pomocou [Knap](https://github.com/obsidianmd/knap).                        |

## Požiadavky

Schopnosť `obsidian-cli` vyžaduje spustenú desktopovú aplikáciu Obsidian so [[Obsidian CLI#Inštalácia Obsidian CLI|zapnutým Obsidian CLI]] a agenta, ktorý dokáže spúšťať príkazy na vašom počítači.

Schopnosti Markdown, Databázy a Canvas iba opisujú formáty súborov, takže fungujú v akomkoľvek agentovi, ktorý dokáže čítať a zapisovať súbory vo vašom trezore.

Defuddle, Knap a Obsidian Headless sú samostatné nástroje, ktoré nie sú súčasťou balíka schopností. Keď niektorý chýba, schopnosť sa pred inštaláciou z npm opýta na povolenie.

## Súkromie

Konektory Obsidian samy o sebe nič neodosielajú. Keď ich agent používa, poznámky, ktoré číta, sa stávajú súčasťou konverzácie a spracúva ich AI model, ktorý používate. Pred tým, ako agenta nasmerujete na trezor s citlivými poznámkami, si prečítajte zásady ochrany súkromia vášho agenta.
