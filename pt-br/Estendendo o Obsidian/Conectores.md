---
permalink: connectors
aliases:
  - skills
cover: Attachments/Connectors cover.jpg
cssclasses: null
description: Conecte o Obsidian a agentes de IA para que eles possam trabalhar com o seu cofre e os formatos de arquivo do Obsidian.
---
Os conectores permitem que você dê facilmente aos agentes acesso ao Obsidian, mantendo total propriedade dos seus dados. Os Conectores do Obsidian estão disponíveis para aplicativos incluindo Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes, Kiro, Muse, OpenCode e [muitos mais](https://agentskills.io/clients).

Isso significa que seus agentes podem aprender a:

- Escrever notas em [[Markdown do Obsidian]], com [[Links internos|wikilinks]], incorporações, frases de destaque e [[Propriedades|propriedades]].
- Criar e editar arquivos de [[Introdução ao Bases|Bases]] e [[Canvas|Canvas]].
- Pesquisar, ler e gerenciar notas no aplicativo em execução com [[Obsidian CLI]].
- Sincronizar e publicar cofres sem o aplicativo desktop usando [[Obsidian Headless]].

Os Conectores do Obsidian e as skills de código aberto estão disponíveis em [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Instalar

Você encontra os Conectores do Obsidian pesquisando no marketplace ou diretório de plugins do aplicativo do seu agente. Você também pode enviar ao seu agente um link para esta página.

### Claude

Adicione o [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) do diretório oficial de plugins do Claude.

Para o CLI do Claude Code, use:

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Para obter novas skills posteriormente, execute `claude plugin update obsidian@obsidian-skills`.

### ChatGPT

Adicione o [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) do diretório de plugins do ChatGPT. O plugin funciona no ChatGPT, Codex e Dots.

### Antigravity

No CLI do Antigravity, execute:

```shell
agy plugin install https://github.com/obsidianmd/obsidian-skills
```

### Grok Bot

Abra o [Obsidian para Grok Bot](https://x.ai/bot/plugin/88871845) e selecione **Add to Grok Bot**.

### Muse

Peça ao Muse para instalar as skills de https://github.com/obsidianmd/obsidian-skills.

O Muse roda na nuvem da Meta, então a skill `obsidian-cli` não funciona lá. Se você usar o Obsidian Headless no Muse, você faz login e sincroniza seu cofre na nuvem da Meta.

### Cursor

Instale o [Obsidian](https://cursor.com/marketplace/obsidian) do Cursor Marketplace.

### Hermes Agent

Instale o [Obsidian](https://hermes-agent.nousresearch.com/marketplace/obsidian) do Hermes Marketplace, ou execute:

```shell
hermes plugins install obsidian
```

### Kiro

```shell
kiro-cli powers install obsidian
```

### GitHub Copilot, OpenCode e outros agentes

Instale com [npx skills](https://github.com/vercel-labs/skills), que pergunta em quais agentes instalar:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Para instalar manualmente, copie as pastas em `plugins/obsidian/skills/` para a pasta de skills do seu agente, por exemplo, `~/.copilot/skills/` para o GitHub Copilot.

## Skills incluídas

| Skill               | O que faz                                                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `obsidian-markdown` | Criar e editar notas em [[Markdown do Obsidian]].                                                                              |
| `obsidian-bases`    | Criar e editar [[Sintaxe de Bases\|Bases]] com visualizações, filtros, fórmulas e resumos.                                     |
| `json-canvas`       | Criar e editar arquivos [[Canvas]] usando o formato [JSON Canvas](https://jsoncanvas.org/).                                    |
| `obsidian-cli`      | Interagir com seu cofre através do [[Obsidian CLI]], incluindo desenvolvimento de plugins e temas.                             |
| `obsidian-headless` | Sincronizar e publicar cofres pela linha de comando com o [[Obsidian Headless]].                                               |
| `defuddle`          | Extrair Markdown limpo de páginas web usando o [Defuddle](https://github.com/kepano/defuddle).                                 |
| `knap`              | Renderizar modelos Markdown a partir de dados JSON ou CSV usando o [Knap](https://github.com/obsidianmd/knap).                |

## Requisitos

A skill `obsidian-cli` precisa do aplicativo desktop Obsidian em execução com o [[Obsidian CLI#Instalar o Obsidian CLI|Obsidian CLI ativado]], e um agente que possa executar comandos no seu computador.

As skills de Markdown, Bases e Canvas apenas descrevem formatos de arquivo, então funcionam em qualquer agente que possa ler e escrever arquivos no seu cofre.

Defuddle, Knap e Obsidian Headless são ferramentas separadas que não estão incluídas nas skills. Quando uma está ausente, a skill pergunta antes de instalá-la via npm.

## Privacidade

Os Conectores do Obsidian não enviam nada por si mesmos. Quando um agente os utiliza, as notas que ele lê passam a fazer parte da conversa e são processadas pelo modelo de IA que você usa. Revise a política de privacidade do seu agente antes de apontá-lo para um cofre com notas sensíveis.
