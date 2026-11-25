---
permalink: skills
cssclasses: null
description: 'Obsidian Skills učí AI agenty, jak pracovat s vaším trezorem a formáty souborů Obsidianu.'
---
Obsidian Skills jsou instrukce, které učí AI agenty, jak pracovat s Obsidian. Řídí se otevřeným formátem [Agent Skills](https://agentskills.io/specification), takže fungují s jakýmkoli agentem, který dovednosti podporuje, včetně Claude Code, Claude, ChatGPT, Cursor, Gemini CLI, GitHub Copilot, Grok Bot, Hermes Agent, OpenCode a [mnoha dalších](https://agentskills.io/clients).

S Obsidian Skills může agent:

- Psát poznámky v [[Obsidian Flavored Markdown]] s [[Interní odkazy|wiki odkazy]], embedy, zvýrazněnými bloky a [[Vlastnosti|vlastnostmi]].
- Vytvářet a upravovat soubory [[Úvod do Základen|Základen]] a [[Canvas]].
- Hledat, číst a spravovat poznámky v běžící aplikaci pomocí [[Obsidian CLI]].
- Synchronizovat a publikovat trezory bez desktopové aplikace pomocí [[Obsidian Headless]].

Dovednosti jsou open source na [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Instalace

Obsidian je oficiální plugin pro Claude, ChatGPT, Codex, Cursor, Grok Bot a Hermes Agent. Ostatní agenti si dovednosti nainstalují z GitHubu.

### ChatGPT a Codex

Přidejte [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) z adresáře pluginů ChatGPT. Plugin funguje jak v ChatGPT, tak v Codexu.

### Cursor

Nainstalujte [Obsidian](https://cursor.com/marketplace/obsidian) z Cursor Marketplace.

### Grok Bot

Otevřete [Obsidian for Grok Bot](https://x.ai/bot/plugin/88871845) a vyberte **Add to Grok Bot**.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### Claude Code

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Pro získání nových dovedností později spusťte `claude plugin update obsidian@obsidian-skills`.

### Claude

Přidejte [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) z adresáře pluginů Claude.

### Gemini CLI

```shell
gemini extensions install https://github.com/obsidianmd/obsidian-skills
```

### GitHub Copilot, OpenCode a další agenti

Nainstalujte pomocí [npx skills](https://github.com/vercel-labs/skills), který se zeptá, do kterých agentů instalovat:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Pro ruční instalaci zkopírujte složky z `plugins/obsidian/skills/` do složky dovedností vašeho agenta, např. `~/.copilot/skills/` pro GitHub Copilot.

## Zahrnuté dovednosti

| Dovednost           | Co dělá                                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Vytváření a úprava poznámek v [[Obsidian Flavored Markdown]].                                                                 |
| `obsidian-bases`    | Vytváření a úprava [[Syntaxe Základen\|Základen]] se zobrazeními, filtry, vzorci a souhrny.                                   |
| `json-canvas`       | Vytváření a úprava souborů [[Canvas]] pomocí formátu [JSON Canvas](https://jsoncanvas.org/).                                  |
| `obsidian-cli`      | Interakce s trezorem prostřednictvím [[Obsidian CLI]], včetně vývoje pluginů a motivů.                                        |
| `obsidian-headless` | Synchronizace a publikování trezorů z příkazové řádky pomocí [[Obsidian Headless]].                                           |
| `defuddle`          | Extrakce čistého Markdown z webových stránek pomocí [Defuddle](https://github.com/kepano/defuddle).                           |
| `knap`              | Renderování Markdown šablon z dat JSON nebo CSV pomocí [Knap](https://github.com/obsidianmd/knap).                            |

## Požadavky

Dovednost `obsidian-cli` vyžaduje spuštěnou desktopovou aplikaci Obsidian se [[Obsidian CLI#Instalace Obsidian CLI|zapnutým Obsidian CLI]] a agenta, který může spouštět příkazy na vašem počítači.

Dovednosti Markdown, Základny a Canvas pouze popisují formáty souborů, takže fungují v jakémkoli agentu, který umí číst a zapisovat soubory ve vašem trezoru.

Defuddle, Knap a Obsidian Headless jsou samostatné nástroje, které nejsou součástí dovedností. Když některý chybí, dovednost se před instalací z npm zeptá.

## Soukromí

Obsidian Skills samy o sobě nic neodesílají. Když je agent používá, poznámky, které čte, se stávají součástí konverzace a jsou zpracovány AI modelem, který používáte. Před tím, než agenta nasměrujete na trezor s citlivými poznámkami, si prostudujte zásady ochrany soukromí vašeho agenta.
