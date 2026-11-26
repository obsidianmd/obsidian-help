---
permalink: connectors
aliases:
  - skills
cover: Attachments/Connectors cover.jpg
cssclasses: null
description: Conecta Obsidian con agentes de IA para que puedan trabajar con tu bóveda y los formatos de archivo de Obsidian.
---
Los conectores te permiten conectar Obsidian a cualquier agente de IA incluyendo Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes, Kiro, Muse, OpenCode, y [muchos más](https://agentskills.io/clients).

Eso significa que tus agentes pueden aprender a:

- Escribir notas en [[Markdown con formato Obsidian]], con [[Enlaces internos|enlaces wiki]], incrustaciones, recuadros y [[Propiedades|propiedades]].
- Crear y editar archivos de [[Introducción a Bases|Bases]] y [[Canvas|Canvas]].
- Buscar, leer y gestionar notas en la aplicación en ejecución con [[Obsidian CLI]].
- Sincronizar y publicar bóvedas sin la aplicación de escritorio usando [[Obsidian Headless]].

Las habilidades son de código abierto en [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Instalar

Puedes encontrar Obsidian buscando en la lista de complementos en Claude, ChatGPT, Dots, Cursor, Grok Bot, Hermes y Kiro. La mayoría de los otros agentes pueden instalar las habilidades si les envías un enlace a esta página.

### Claude

Añade [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) desde el directorio oficial de complementos de Claude.

Para el CLI de Claude Code usa:

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Para obtener nuevas habilidades más adelante, ejecuta `claude plugin update obsidian@obsidian-skills`.

### ChatGPT

Añade [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) desde el directorio de complementos de ChatGPT. El complemento funciona en ChatGPT, Codex y Dots.

### Antigravity

En el CLI de Antigravity, ejecuta:

```shell
agy plugin install https://github.com/obsidianmd/obsidian-skills
```

### Grok Bot

Abre [Obsidian para Grok Bot](https://x.ai/bot/plugin/88871845) y selecciona **Add to Grok Bot**.

### Muse

Pide a Muse que instale las habilidades desde https://github.com/obsidianmd/obsidian-skills.

Muse se ejecuta en la nube de Meta, por lo que la habilidad `obsidian-cli` no funciona allí. Si usas Obsidian Headless en Muse, inicias sesión y sincronizas tu bóveda en la nube de Meta.

### Cursor

Instala [Obsidian](https://cursor.com/marketplace/obsidian) desde el Marketplace de Cursor.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### Kiro

```shell
kiro-cli powers install obsidian
```

### GitHub Copilot, OpenCode y otros agentes

Instala con [npx skills](https://github.com/vercel-labs/skills), que pregunta en qué agentes instalar:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Para instalar manualmente, copia las carpetas en `plugins/obsidian/skills/` a la carpeta de habilidades de tu agente, por ejemplo `~/.copilot/skills/` para GitHub Copilot.

## Habilidades incluidas

| Habilidad           | Qué hace                                                                                                                      |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Crear y editar notas en [[Markdown con formato Obsidian]].                                                                    |
| `obsidian-bases`    | Crear y editar [[Sintaxis de Bases\|Bases]] con vistas, filtros, fórmulas y resúmenes.                                        |
| `json-canvas`       | Crear y editar archivos [[Canvas]] usando el formato [JSON Canvas](https://jsoncanvas.org/).                                  |
| `obsidian-cli`      | Interactuar con tu bóveda a través de [[Obsidian CLI]], incluyendo desarrollo de complementos y temas.                        |
| `obsidian-headless` | Sincronizar y publicar bóvedas desde la línea de comandos con [[Obsidian Headless]].                                          |
| `defuddle`          | Extraer Markdown limpio de páginas web usando [Defuddle](https://github.com/kepano/defuddle).                                  |
| `knap`              | Renderizar plantillas Markdown desde datos JSON o CSV usando [Knap](https://github.com/obsidianmd/knap).                      |

## Requisitos

La habilidad `obsidian-cli` necesita la aplicación de escritorio de Obsidian ejecutándose con [[Obsidian CLI#Instalar Obsidian CLI|Obsidian CLI activado]], y un agente que pueda ejecutar comandos en tu computadora.

Las habilidades de Markdown, Bases y Canvas solo describen formatos de archivo, por lo que funcionan en cualquier agente que pueda leer y escribir archivos en tu bóveda.

Defuddle, Knap y Obsidian Headless son herramientas separadas que no están incluidas con las habilidades. Cuando falta alguna, la habilidad pregunta antes de instalarla desde npm.

## Privacidad

Los conectores de Obsidian no envían nada por sí mismos. Cuando un agente los usa, las notas que lee pasan a formar parte de la conversación y son procesadas por el modelo de IA que uses. Revisa la política de privacidad de tu agente antes de apuntarlo a una bóveda con notas sensibles.
