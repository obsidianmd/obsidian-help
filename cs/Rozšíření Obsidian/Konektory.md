---
permalink: connectors
aliases:
  - skills
cover: Attachments/Connectors cover.jpg
cssclasses: null
description: 'Obsidian Skills učí AI agenty, jak pracovat s vaším trezorem a formáty souborů Obsidianu.'
---
Konektory umožňují propojit Obsidian s jakýmkoli AI agentem včetně Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes, Kiro, Muse, OpenCode a [mnoha dalších](https://agentskills.io/clients).

To znamená, že vaši agenti se mohou naučit:

- Psát poznámky v [[Obsidian Flavored Markdown]] s [[Interní odkazy|wiki odkazy]], embedy, zvýrazněnými bloky a [[Vlastnosti|vlastnostmi]].
- Vytvářet a upravovat soubory [[Úvod do Základen|Základen]] a [[Canvas]].
- Hledat, číst a spravovat poznámky v běžící aplikaci pomocí [[Obsidian CLI]].
- Synchronizovat a publikovat trezory bez desktopové aplikace pomocí [[Obsidian Headless]].

Dovednosti jsou open source na [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Instalace

Obsidian najdete vyhledáním v seznamu pluginů v Claude, ChatGPT, Dots, Cursor, Grok Bot, Hermes a Kiro. Většina ostatních agentů dokáže dovednosti nainstalovat, pokud jim pošlete odkaz na tuto stránku.

### Claude

Přidejte [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) z oficiálního adresáře pluginů Claude.

Pro CLI Claude Code použijte:

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Pro získání nových dovedností později spusťte `claude plugin update obsidian@obsidian-skills`.

### ChatGPT

Přidejte [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) z adresáře pluginů ChatGPT. Plugin funguje v ChatGPT, Codex a Dots.

### Antigravity

V CLI Antigravity spusťte:

```shell
agy plugin install https://github.com/obsidianmd/obsidian-skills
```

### Grok Bot

Otevřete [Obsidian pro Grok Bot](https://x.ai/bot/plugin/88871845) a vyberte **Add to Grok Bot**.

### Muse

Požádejte Muse o instalaci dovedností z https://github.com/obsidianmd/obsidian-skills.

Muse běží v cloudu Meta, takže dovednost `obsidian-cli` tam nefunguje. Pokud používáte Obsidian Headless v Muse, přihlásíte se a synchronizujete svůj trezor v cloudu Meta.

### Cursor

Nainstalujte [Obsidian](https://cursor.com/marketplace/obsidian) z Cursor Marketplace.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### Kiro

```shell
kiro-cli powers install obsidian
```

### GitHub Copilot, OpenCode a další agenti

Nainstalujte pomocí [npx skills](https://github.com/vercel-labs/skills), který se zeptá, do kterých agentů instalovat:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Pro ruční instalaci zkopírujte složky v `plugins/obsidian/skills/` do složky dovedností vašeho agenta, např. `~/.copilot/skills/` pro GitHub Copilot.

## Zahrnuté dovednosti

| Dovednost           | Co dělá                                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Vytváření a úprava poznámek v [[Obsidian Flavored Markdown]].                                                                 |
| `obsidian-bases`    | Vytváření a úprava [[Syntaxe Základen\|Základen]] se zobrazeními, filtry, vzorci a souhrny.                                   |
| `json-canvas`       | Vytváření a úprava souborů [[Canvas]] pomocí formátu [JSON Canvas](https://jsoncanvas.org/).                                  |
| `obsidian-cli`      | Interakce s trezorem prostřednictvím [[Obsidian CLI]], včetně vývoje pluginů a motivů.                                        |
| `obsidian-headless` | Synchronizace a publikování trezorů z příkazového řádku pomocí [[Obsidian Headless]].                                         |
| `defuddle`          | Extrakce čistého Markdown z webových stránek pomocí [Defuddle](https://github.com/kepano/defuddle).                           |
| `knap`              | Renderování Markdown šablon z dat JSON nebo CSV pomocí [Knap](https://github.com/obsidianmd/knap).                            |

## Požadavky

Dovednost `obsidian-cli` vyžaduje běžící desktopovou aplikaci Obsidian se [[Obsidian CLI#Instalace Obsidian CLI|zapnutým Obsidian CLI]] a agenta, který může spouštět příkazy na vašem počítači.

Dovednosti Markdown, Základny a Canvas pouze popisují formáty souborů, takže fungují v jakémkoli agentovi, který může číst a zapisovat soubory ve vašem trezoru.

Defuddle, Knap a Obsidian Headless jsou samostatné nástroje, které nejsou součástí dovedností. Když některý chybí, dovednost se před instalací z npm zeptá.

## Soukromí

Konektory Obsidian samy o sobě nic neodesílají. Když je agent použije, poznámky, které přečte, se stanou součástí konverzace a jsou zpracovány AI modelem, který používáte. Před tím, než agenta nasměrujete na trezor s citlivými poznámkami, si prostudujte zásady ochrany soukromí vašeho agenta.
