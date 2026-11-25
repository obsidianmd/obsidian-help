---
permalink: skills
cssclasses: null
description: As Obsidian Skills ensinam aos agentes de IA como trabalhar com o seu cofre e os formatos de arquivo do Obsidian.
---
As Obsidian Skills são instruções que ensinam agentes de IA a trabalhar com o Obsidian. Seguem o formato aberto [Agent Skills](https://agentskills.io/specification), por isso funcionam com qualquer agente que suporte skills, incluindo Claude Code, Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes Agent, Kiro, OpenCode, e [muitos mais](https://agentskills.io/clients).

Com as Obsidian Skills, um agente pode:

- Escrever notas em [[Obsidian Flavored Markdown]], com [[Ligações internas|links wiki]], incorporações, blocos de destaque e [[Propriedades|propriedades]].
- Criar e editar ficheiros de [[Introdução ao Bases|Bases]] e [[Canvas|Canvas]].
- Pesquisar, ler e gerir notas na aplicação em execução com [[Obsidian CLI]].
- Sincronizar e publicar cofres sem a aplicação de ambiente de trabalho utilizando [[Obsidian Headless]].

As skills são de código aberto em [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Instalar

O Obsidian é um plugin oficial para o Claude, ChatGPT, Dots, Cursor, Grok Bot, Hermes e Kiro. A maioria dos outros agentes pode instalar as skills a partir do GitHub.

### Claude

Adicione o [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) a partir do diretório oficial de plugins do Claude.

Para a CLI do Claude Code, utilize:

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Para obter novas skills mais tarde, execute `claude plugin update obsidian@obsidian-skills`.

### ChatGPT

Adicione o [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) a partir do diretório de plugins do ChatGPT. O plugin funciona no ChatGPT, Codex e Dots.

### Antigravity

Na CLI do Antigravity, execute:

```shell
agy plugin install https://github.com/obsidianmd/obsidian-skills
```

### Grok Bot

Abra o [Obsidian for Grok Bot](https://x.ai/bot/plugin/88871845) e selecione **Add to Grok Bot**.

### Cursor

Instale o [Obsidian](https://cursor.com/marketplace/obsidian) a partir do Cursor Marketplace.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### Kiro

```shell
kiro-cli powers install obsidian
```

### GitHub Copilot, OpenCode e outros agentes

Instale com [npx skills](https://github.com/vercel-labs/skills), que pergunta em quais agentes pretende instalar:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Para instalar manualmente, copie as pastas em `plugins/obsidian/skills/` para a pasta de skills do seu agente, por exemplo `~/.copilot/skills/` para o GitHub Copilot.

## Skills incluídas

| Skill               | O que faz                                                                                                                     |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Criar e editar notas em [[Obsidian Flavored Markdown]].                                                                       |
| `obsidian-bases`    | Criar e editar [[Sintaxe de Bases\|Bases]] com vistas, filtros, fórmulas e resumos.                                           |
| `json-canvas`       | Criar e editar ficheiros [[Canvas]] utilizando o formato [JSON Canvas](https://jsoncanvas.org/).                               |
| `obsidian-cli`      | Interagir com o seu cofre através do [[Obsidian CLI]], incluindo desenvolvimento de plugins e temas.                           |
| `obsidian-headless` | Sincronizar e publicar cofres a partir da linha de comandos com o [[Obsidian Headless]].                                       |
| `defuddle`          | Extrair Markdown limpo de páginas web utilizando o [Defuddle](https://github.com/kepano/defuddle).                             |
| `knap`              | Renderizar modelos Markdown a partir de dados JSON ou CSV utilizando o [Knap](https://github.com/obsidianmd/knap).             |

## Requisitos

A skill `obsidian-cli` necessita da aplicação de ambiente de trabalho do Obsidian em execução com o [[Obsidian CLI#Instalar a CLI do Obsidian|Obsidian CLI ativado]], e de um agente que consiga executar comandos no seu computador.

As skills de Markdown, Bases e Canvas apenas descrevem formatos de ficheiro, por isso funcionam em qualquer agente que consiga ler e escrever ficheiros no seu cofre.

O Defuddle, o Knap e o Obsidian Headless são ferramentas separadas que não são incluídas com as skills. Quando uma está em falta, a skill pergunta antes de a instalar a partir do npm.

## Privacidade

As Obsidian Skills não enviam nada por si próprias. Quando um agente as utiliza, as notas que lê tornam-se parte da conversa e são processadas pelo modelo de IA que utiliza. Reveja a política de privacidade do seu agente antes de o apontar para um cofre com notas sensíveis.
