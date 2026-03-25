---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish offers a headless client to publish vaults without using the desktop app. Useful for CI pipelines and automated workflows.
---
[[Introdução ao Obsidian Publish|Obsidian Publish]] oferece um cliente headless para publicar cofres sem usar o aplicativo desktop. Útil para pipelines de CI e fluxos de trabalho automatizados. Publique suas últimas alterações em um cronograma ou como parte de um pipeline de build.

Instale [[Obsidian Headless]] **(beta aberto)** para interagir com o [[Introdução ao Obsidian Publish|Obsidian Publish]] pela linha de comando sem o aplicativo desktop do Obsidian.

## Início rápido

Instale o [[Obsidian Headless|Obsidian Headless]] **(beta aberto)**:

```shell
npm install -g obsidian-headless
```

Você deve ter uma [[Introdução ao Obsidian Publish|assinatura ativa do Obsidian Publish]].

```shell
# Entrar
ob login

# Listar seus sites de publicação
ob publish-list-sites

# Conectar um cofre local a um site de publicação
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# Pré-visualizar alterações sem publicar
ob publish --dry-run

# Publicar alterações
ob publish
```

## Comandos

### `ob publish-list-sites`

Lista todos os sites Publish disponíveis para sua conta.

### `ob publish-create-site`

Cria um novo site Publish.

```
ob publish-create-site --slug <slug>
```

| Opção | Descrição |
| --- | --- |
| `--slug` | Identificador de URL para seu site (ex: `my-notes` cria `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

Conecta um cofre local a um site Publish.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| Opção | Descrição |
| --- | --- |
| `--site` | ID ou slug do site |
| `--path` | Caminho local do cofre (padrão: diretório atual) |

### `ob publish`

Publica alterações do cofre no seu site. Por padrão, apenas arquivos com `publish: true` no frontmatter são incluídos.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| Opção | Descrição |
| --- | --- |
| `--path` | Caminho local do cofre (padrão: diretório atual) |
| `--all` | Incluir todos os arquivos, não apenas aqueles com a flag de publicação |
| `--dry-run` | Mostrar alterações sem publicar |
| `--yes` | Publicar sem solicitar confirmação |

### `ob publish-config`

Visualiza ou altera as configurações de inclusão/exclusão de pastas para um cofre. Execute sem opções para exibir a configuração atual.

```
ob publish-config [--path <local-path>] [options]
```

| Opção | Descrição |
| --- | --- |
| `--path` | Caminho local do cofre (padrão: diretório atual) |
| `--includes` | Pastas a incluir, separadas por vírgula (string vazia para limpar) |
| `--excludes` | Pastas a excluir, separadas por vírgula (string vazia para limpar) |

### `ob publish-site-options`

Visualiza ou atualiza as configurações de exibição e navegação do site. Execute sem opções para exibir as configurações atuais.

```
ob publish-site-options [--path <local-path>] [options]
```

| Opção | Descrição |
| --- | --- |
| `--path` | Caminho local do cofre (padrão: diretório atual) |
| `--site-name` | Nome do site |
| `--index-file` | Caminho do arquivo da página inicial |
| `--logo` | Caminho do arquivo de logo (string vazia para limpar) |
| `--show-navigation` | Mostrar navegação na barra lateral |
| `--show-graph` | Mostrar visualização em gráfico |
| `--show-outline` | Mostrar índice |
| `--show-search` | Mostrar localizar |
| `--show-backlinks` | Mostrar links inversos |
| `--show-hover-preview` | Ativar modo espião |
| `--show-theme-toggle` | Mostrar alternador de tema |
| `--default-theme` | Tema padrão: `light` ou `dark` |
| `--readable-line-length` | Margens de tamanho confortável |
| `--strict-line-breaks` | Quebra de linha estrita |
| `--hide-title` | Ocultar título em linha |
| `--sliding-window` | Modo de janela deslizante |
| `--nav-order` | Ordem de navegação, caminhos separados por vírgula (string vazia para limpar) |
| `--nav-hidden` | Itens de navegação escondidos, caminhos separados por vírgula (string vazia para limpar) |

### `ob publish-unlink`

Desconecta um cofre de um site Publish.

```
ob publish-unlink [--path <local-path>]
```
