---
permalink: skills
cssclasses: null
description: As Habilidades do Obsidian ensinam aos agentes de IA como trabalhar com o seu cofre e os formatos de arquivo do Obsidian.
---
Obsidian Skills são instruções que ensinam agentes de IA a trabalhar com o Obsidian. Elas seguem o formato aberto [Agent Skills](https://agentskills.io/specification), então funcionam com qualquer agente que suporte skills, incluindo Claude Code, Claude, ChatGPT, Cursor, Gemini CLI, GitHub Copilot, Grok Bot, OpenCode e [muitos outros](https://agentskills.io/clients).

Com Obsidian Skills, um agente pode:

- Escrever notas em [[Markdown do Obsidian]], com [[Links internos|wikilinks]], incorporações, frases de destaque e [[Propriedades|propriedades]].
- Criar e editar arquivos de [[Introdução ao Bases|Bases]] e [[Canvas|Canvas]].
- Pesquisar, ler e gerenciar notas no aplicativo em execução com [[Obsidian CLI]].
- Sincronizar e publicar cofres sem o aplicativo desktop usando [[Obsidian Headless]].

As skills são de código aberto em [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Instalar

O Obsidian é um plugin oficial para ChatGPT, Codex, Cursor e Grok Bot. Outros agentes instalam as skills a partir do GitHub.

### ChatGPT e Codex

Adicione o [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) a partir do diretório de plugins do ChatGPT. O plugin funciona tanto no ChatGPT quanto no Codex.

### Cursor

Instale o [Obsidian](https://cursor.com/marketplace/obsidian) a partir do Cursor Marketplace.

### Grok Bot

Abra [Obsidian para Grok Bot](https://x.ai/bot/plugin/88871845) e selecione **Adicionar ao Grok Bot**.

### Claude Code

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Para obter novas skills posteriormente, execute `claude plugin update obsidian@obsidian-skills`.

### Claude

O Claude carrega cada skill como um arquivo ZIP, então adicione apenas as skills que você precisa:

1. Baixe [obsidian-skills](https://github.com/obsidianmd/obsidian-skills/archive/refs/heads/main.zip) e descompacte.
2. Em `plugins/obsidian/skills/`, comprima a pasta de cada skill que deseja em um arquivo ZIP, por exemplo, `obsidian-markdown.zip`.
3. No Claude, vá em **Personalizar** → **Skills**, selecione **+** → **Criar skill** → **Carregar uma skill** e escolha o arquivo ZIP.

Consulte [Usando skills no Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude) para ver os planos que suportam skills.

### Gemini CLI

```shell
gemini extensions install https://github.com/obsidianmd/obsidian-skills
```

### GitHub Copilot, OpenCode e outros agentes

Instale com [npx skills](https://github.com/vercel-labs/skills), que pergunta em quais agentes instalar:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Para instalar manualmente, copie as pastas em `plugins/obsidian/skills/` para a pasta de skills do seu agente, por exemplo, `~/.copilot/skills/` para o GitHub Copilot.

## Skills incluídas

| Skill               | O que faz                                                                                                                     |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Criar e editar notas em [[Markdown do Obsidian]].                                                                             |
| `obsidian-bases`    | Criar e editar [[Sintaxe de Bases\|Bases]] com visualizações, filtros, fórmulas e resumos.                                    |
| `json-canvas`       | Criar e editar arquivos [[Canvas]] usando o formato [JSON Canvas](https://jsoncanvas.org/).                                   |
| `obsidian-cli`      | Interagir com seu cofre através do [[Obsidian CLI]], incluindo desenvolvimento de plugins e temas.                            |
| `obsidian-headless` | Sincronizar e publicar cofres pela linha de comando com [[Obsidian Headless]].                                                |
| `defuddle`          | Extrair Markdown limpo de páginas web usando [Defuddle](https://github.com/kepano/defuddle).                                  |
| `knap`              | Renderizar modelos Markdown a partir de dados JSON ou CSV usando [Knap](https://github.com/obsidianmd/knap).                  |

## Requisitos

A skill `obsidian-cli` precisa do aplicativo desktop do Obsidian em execução com o [[Obsidian CLI#Instalar o Obsidian CLI|Obsidian CLI ativado]], e um agente que possa executar comandos no seu computador.

As skills de Markdown, Bases e Canvas apenas descrevem formatos de arquivo, então funcionam em qualquer agente que possa ler e escrever arquivos no seu cofre.

Defuddle, Knap e Obsidian Headless são ferramentas separadas que não estão incluídas nas skills. Quando uma delas está ausente, a skill pergunta antes de instalá-la via npm.

## Privacidade

Obsidian Skills não enviam nada por conta própria. Quando um agente as utiliza, as notas que ele lê se tornam parte da conversa e são processadas pelo modelo de IA que você usa. Revise a política de privacidade do seu agente antes de direcioná-lo a um cofre com notas sensíveis.
