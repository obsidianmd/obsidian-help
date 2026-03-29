---
permalink: publish/headless
cssclasses:
  - reference
description: O Obsidian Publish oferece um cliente headless para publicar cofres sem usar o aplicativo de desktop. Útil para pipelines de CI e fluxos de trabalho automatizados.
---
O [[Introdução ao Obsidian Publish|Obsidian Publish]] oferece um cliente sem interface para publicar cofres sem utilizar a aplicação de desktop. Útil para pipelines de CI e fluxos de trabalho automatizados. Publique as suas últimas alterações com uma agenda definida ou como parte de um pipeline de construção.

Instale o [[Publish sem interface|Obsidian Headless]] **(beta aberto)** para interagir com o [[Introdução ao Obsidian Publish|Obsidian Publish]] a partir da linha de comandos sem a aplicação de desktop do Obsidian.

## Começo rápido

Instale o [[Publish sem interface|Obsidian Headless]] **(beta aberto)**:

```shell
npm install -g obsidian-headless
```

Deve ter uma [[Introdução ao Obsidian Publish|subscrição ativa do Obsidian Publish]].

```shell
# Iniciar sessão
ob login

# Listar os seus sites Publish
ob publish-list-sites

# Conectar um cofre local a um site Publish
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# Pré-visualizar alterações sem publicar
ob publish --dry-run

# Publicar alterações
ob publish
```

## Comandos

### `ob publish-list-sites`

Lista todos os sites Publish disponíveis na sua conta.

### `ob publish-create-site`

Cria um novo site Publish.

```
ob publish-create-site --slug <slug>
```

| Opção | Descrição |
| --- | --- |
| `--slug` | Identificador de URL para o seu site (ex.: `my-notes` cria `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

Conecta um cofre local a um site Publish.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| Opção | Descrição |
| --- | --- |
| `--site` | ID ou slug do site |
| `--path` | Caminho do cofre local (predefinido: diretório atual) |

### `ob publish`

Publica as alterações do cofre no seu site. Por predefinição, apenas os ficheiros com `publish: true` nos seus metadados iniciais são incluídos.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| Opção | Descrição |
| --- | --- |
| `--path` | Caminho do cofre local (predefinido: diretório atual) |
| `--all` | Incluir todos os ficheiros, não apenas os com a flag de publicação |
| `--dry-run` | Mostrar alterações sem publicar |
| `--yes` | Publicar sem pedir confirmação |

### `ob publish-config`

Visualiza ou altera as definições de inclusão/exclusão de pastas para um cofre. Execute sem opções para exibir a configuração atual.

```
ob publish-config [--path <local-path>] [options]
```

| Opção | Descrição |
| --- | --- |
| `--path` | Caminho do cofre local (predefinido: diretório atual) |
| `--includes` | Pastas a incluir, separadas por vírgulas (string vazia para limpar) |
| `--excludes` | Pastas a excluir, separadas por vírgulas (string vazia para limpar) |

### `ob publish-site-options`

Visualiza ou atualiza as definições de apresentação e navegação do site. Execute sem opções para exibir as definições atuais.

```
ob publish-site-options [--path <local-path>] [options]
```

| Opção | Descrição |
| --- | --- |
| `--path` | Caminho do cofre local (predefinido: diretório atual) |
| `--site-name` | Nome do site |
| `--index-file` | Caminho do ficheiro da página inicial |
| `--logo` | Caminho do ficheiro do logótipo (string vazia para limpar) |
| `--show-navigation` | Mostrar navegação na barra lateral |
| `--show-graph` | Mostrar Visualização de diagrama de grafo |
| `--show-outline` | Mostrar índice |
| `--show-search` | Mostrar pesquisa |
| `--show-backlinks` | Mostrar backlinks |
| `--show-hover-preview` | Mostrar pré-visualização ao passar o cursor |
| `--show-theme-toggle` | Mostrar alternador de tema |
| `--default-theme` | Tema predefinido: `light` ou `dark` |
| `--readable-line-length` | Linhas de tamanho legível |
| `--strict-line-breaks` | Quebra de linha estrita |
| `--hide-title` | Ocultar título em linha |
| `--sliding-window` | Modo de janela deslizante |
| `--nav-order` | Ordem de navegação, caminhos separados por vírgulas (string vazia para limpar) |
| `--nav-hidden` | Itens de navegação ocultos, caminhos separados por vírgulas (string vazia para limpar) |

### `ob publish-unlink`

Desconecta um cofre de um site Publish.

```
ob publish-unlink [--path <local-path>]
```
