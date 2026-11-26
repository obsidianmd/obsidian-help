---
permalink: connectors
aliases:
  - skills
cover: Attachments/Connectors cover.jpg
cssclasses: null
description: Ligue o Obsidian a agentes de IA para que possam trabalhar com o seu cofre e os formatos de arquivo do Obsidian.
---
Os conectores permitem ligar o Obsidian a qualquer agente de IA, incluindo Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes, Kiro, Muse, OpenCode e [muitos mais](https://agentskills.io/clients).

Isso significa que os seus agentes podem aprender a:

- Escrever notas em [[Obsidian Flavored Markdown]], com [[Ligações internas|links wiki]], incorporações, blocos de destaque e [[Propriedades|propriedades]].
- Criar e editar ficheiros [[Introdução ao Bases|Bases]] e [[Canvas|Canvas]].
- Pesquisar, ler e gerir notas na aplicação em execução com [[Obsidian CLI]].
- Sincronizar e publicar cofres sem a aplicação de ambiente de trabalho usando [[Obsidian Headless]].

As habilidades são código aberto em [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Instalar

Pode encontrar o Obsidian pesquisando na lista de plugins no Claude, ChatGPT, Dots, Cursor, Grok Bot, Hermes e Kiro. A maioria dos outros agentes consegue instalar as habilidades se lhes enviar uma ligação para esta página.

### Claude

Adicione o [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) a partir do diretório oficial de plugins do Claude.

Para a CLI do Claude Code, use:

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Para obter novas habilidades mais tarde, execute `claude plugin update obsidian@obsidian-skills`.

### ChatGPT

Adicione o [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) a partir do diretório de plugins do ChatGPT. O plugin funciona no ChatGPT, Codex e Dots.

### Antigravity

Na CLI do Antigravity, execute:

```shell
agy plugin install https://github.com/obsidianmd/obsidian-skills
```

### Grok Bot

Abra o [Obsidian para Grok Bot](https://x.ai/bot/plugin/88871845) e selecione **Add to Grok Bot**.

### Muse

Peça ao Muse para instalar as habilidades a partir de https://github.com/obsidianmd/obsidian-skills.

O Muse é executado na nuvem da Meta, pelo que a habilidade `obsidian-cli` não funciona aí. Se utilizar o Obsidian Headless no Muse, inicia sessão e sincroniza o seu cofre na nuvem da Meta.

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

Para instalar manualmente, copie as pastas em `plugins/obsidian/skills/` para a pasta de habilidades do seu agente, por exemplo `~/.copilot/skills/` para o GitHub Copilot.

## Habilidades incluídas

| Habilidade          | O que faz                                                                                                                     |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Criar e editar notas em [[Obsidian Flavored Markdown]].                                                                       |
| `obsidian-bases`    | Criar e editar [[Sintaxe de Bases|Bases]] com vistas, filtros, fórmulas e resumos.                                            |
| `json-canvas`       | Criar e editar ficheiros [[Canvas]] usando o formato [JSON Canvas](https://jsoncanvas.org/).                                  |
| `obsidian-cli`      | Interagir com o seu cofre através do [[Obsidian CLI]], incluindo desenvolvimento de plugins e temas.                          |
| `obsidian-headless` | Sincronizar e publicar cofres a partir da linha de comandos com o [[Obsidian Headless]].                                      |
| `defuddle`          | Extrair Markdown limpo de páginas web usando o [Defuddle](https://github.com/kepano/defuddle).                                |
| `knap`              | Processar modelos Markdown a partir de dados JSON ou CSV usando o [Knap](https://github.com/obsidianmd/knap).                 |

## Requisitos

A habilidade `obsidian-cli` necessita da aplicação de ambiente de trabalho Obsidian em execução com o [[Obsidian CLI#Instalar a CLI do Obsidian|Obsidian CLI ativado]], e um agente que possa executar comandos no seu computador.

As habilidades de Markdown, Bases e Canvas apenas descrevem formatos de ficheiro, pelo que funcionam em qualquer agente que possa ler e escrever ficheiros no seu cofre.

O Defuddle, Knap e Obsidian Headless são ferramentas separadas que não são incluídas com as habilidades. Quando uma está em falta, a habilidade pergunta antes de a instalar a partir do npm.

## Privacidade

Os conectores do Obsidian não enviam nada por si próprios. Quando um agente os utiliza, as notas que lê tornam-se parte da conversa e são processadas pelo modelo de IA que utiliza. Consulte a política de privacidade do seu agente antes de o apontar para um cofre com notas sensíveis.
