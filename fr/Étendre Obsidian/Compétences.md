---
permalink: skills
cssclasses: null
description: Obsidian Skills enseignent aux agents IA comment travailler avec votre coffre-fort et les formats de fichiers Obsidian.
---
Obsidian Skills sont des instructions qui apprennent aux agents IA à travailler avec Obsidian. Elles suivent le format ouvert [Agent Skills](https://agentskills.io/specification), et fonctionnent donc avec tout agent prenant en charge les compétences, notamment Claude Code, Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes Agent, OpenCode, et [bien d'autres](https://agentskills.io/clients).

Avec Obsidian Skills, un agent peut :

- Rédiger des notes en [[Obsidian Flavored Markdown]], avec des [[Liens internes|liens wiki]], des intégrations, des encadrés et des [[Propriétés|propriétés]].
- Créer et modifier des fichiers [[Introduction aux Bases|Bases]] et [[Canvas|Canvas]].
- Rechercher, lire et gérer des notes dans l'application en cours d'exécution avec [[Obsidian CLI]].
- Synchroniser et publier des coffres sans l'application de bureau grâce à [[Obsidian Headless]].

Les compétences sont open source sur [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Installer

Obsidian est un plugin officiel pour Claude, ChatGPT, Dots, Cursor, Grok Bot et Hermes. La plupart des autres agents peuvent installer les compétences depuis GitHub.

### Claude

Ajoutez [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) depuis le répertoire officiel de plugins Claude.

Pour le CLI Claude Code, utilisez :

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Pour obtenir de nouvelles compétences plus tard, exécutez `claude plugin update obsidian@obsidian-skills`.

### ChatGPT

Ajoutez [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) depuis le répertoire de plugins ChatGPT. Le plugin fonctionne dans ChatGPT, Codex et Dots.

### Antigravity

Dans le CLI Antigravity, exécutez :

```shell
agy plugin install https://github.com/obsidianmd/obsidian-skills
```

### Grok Bot

Ouvrez [Obsidian for Grok Bot](https://x.ai/bot/plugin/88871845) et sélectionnez **Add to Grok Bot**.

### Cursor

Installez [Obsidian](https://cursor.com/marketplace/obsidian) depuis le Cursor Marketplace.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### GitHub Copilot, OpenCode et autres agents

Installez avec [npx skills](https://github.com/vercel-labs/skills), qui vous demande dans quels agents effectuer l'installation :

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Pour installer manuellement, copiez les dossiers de `plugins/obsidian/skills/` dans le dossier de compétences de votre agent, par exemple `~/.copilot/skills/` pour GitHub Copilot.

## Compétences incluses

| Compétence          | Ce qu'elle fait                                                                                                               |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Créer et modifier des notes en [[Obsidian Flavored Markdown]].                                                                |
| `obsidian-bases`    | Créer et modifier des [[Syntaxe des Bases|Bases]] avec des vues, filtres, formules et résumés.                                |
| `json-canvas`       | Créer et modifier des fichiers [[Canvas]] au format [JSON Canvas](https://jsoncanvas.org/).                                   |
| `obsidian-cli`      | Interagir avec votre coffre via [[Obsidian CLI]], y compris le développement de modules et de thèmes.                         |
| `obsidian-headless` | Synchroniser et publier des coffres en ligne de commande avec [[Obsidian Headless]].                                          |
| `defuddle`          | Extraire du Markdown propre à partir de pages web avec [Defuddle](https://github.com/kepano/defuddle).                       |
| `knap`              | Générer des modèles Markdown à partir de données JSON ou CSV avec [Knap](https://github.com/obsidianmd/knap).                |

## Prérequis

La compétence `obsidian-cli` nécessite l'application de bureau Obsidian en cours d'exécution avec [[Obsidian CLI#Installer Obsidian CLI|Obsidian CLI activé]], ainsi qu'un agent capable d'exécuter des commandes sur votre ordinateur.

Les compétences Markdown, Bases et Canvas ne décrivent que des formats de fichiers et fonctionnent donc avec tout agent capable de lire et d'écrire des fichiers dans votre coffre.

Defuddle, Knap et Obsidian Headless sont des outils distincts qui ne sont pas fournis avec les compétences. Lorsqu'un outil est manquant, la compétence demande confirmation avant de l'installer depuis npm.

## Confidentialité

Obsidian Skills n'envoient rien par elles-mêmes. Lorsqu'un agent les utilise, les notes qu'il lit font partie de la conversation et sont traitées par le modèle d'IA que vous utilisez. Consultez la politique de confidentialité de votre agent avant de le diriger vers un coffre contenant des notes sensibles.
