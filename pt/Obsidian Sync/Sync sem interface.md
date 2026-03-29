---
permalink: sync/headless
cssclasses:
  - reference
description: 'O Obsidian Sync oferece um cliente headless para sincronizar cofres sem usar o aplicativo de desktop. Útil para pipelines de CI, agentes e fluxos de trabalho automatizados. Sincronize as últimas alterações ou mantenha os arquivos continuamente atualizados.'
---
O [[Introdução ao Obsidian Sync|Obsidian Sync]] oferece um cliente sem interface para sincronizar cofres sem usar a aplicação de ambiente de trabalho. Útil para pipelines CI, agentes e fluxos de trabalho automatizados. Sincronize as últimas alterações ou mantenha os ficheiros continuamente atualizados.

Instale o [[Obsidian Headless]] **(beta aberto)** para interagir com o [[Introdução ao Obsidian Sync|Obsidian Sync]] a partir da linha de comandos sem a aplicação Obsidian de ambiente de trabalho. O Sync sem interface utiliza as mesmas [[Segurança e privacidade|proteções de encriptação e privacidade]] que a aplicação de ambiente de trabalho, incluindo encriptação ponto a ponto.

## Começo rápido

> [!error] Faça cópia de segurança dos seus dados antes de começar
> 1. Faça sempre cópia de segurança dos seus dados antes de começar, para o caso de algo inesperado acontecer.
> 2. Não use *simultaneamente* o Sync da aplicação de ambiente de trabalho e o Sync sem interface no mesmo dispositivo, pois pode causar conflitos de dados. Use apenas um método de sincronização por dispositivo.

Instale o [[Obsidian Headless|Obsidian Headless]] **(beta aberto)**:

```shell
npm install -g obsidian-headless
```

Deve ter uma [[Planos e limites de armazenamento|subscrição ativa do Obsidian Sync]].

```shell
# Iniciar sessão
ob login

# Listar os seus cofres remotos
ob sync-list-remote

# Configurar um cofre para sincronização
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# Executar uma sincronização única
ob sync

# Executar sincronização contínua (monitoriza alterações)
ob sync --continuous
```

## Comandos

### `ob sync-list-remote`

Lista todos os cofres remotos disponíveis na sua conta, incluindo cofres partilhados.

### `ob sync-list-local`

Lista os cofres configurados localmente e os seus caminhos.

### `ob sync-create-remote`

Cria um novo cofre remoto.

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| Opção | Descrição |
| --- | --- |
| `--name` | Nome do cofre (obrigatório) |
| `--encryption` | `standard` para encriptação gerida, `e2ee` para encriptação ponto a ponto |
| `--password` | Chave de encriptação ponto a ponto (solicitada se omitida) |
| `--region` | [[Regiões do Sync\|Região]] do servidor (automática se omitida) |

### `ob sync-setup`

Configura a sincronização entre um cofre local e um cofre remoto.

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| Opção | Descrição |
| --- | --- |
| `--vault` | ID ou nome do cofre remoto (obrigatório) |
| `--path` | Diretório local (predefinido: diretório atual) |
| `--password` | Chave de encriptação ponto a ponto (solicitada se omitida) |
| `--device-name` | Nome do dispositivo apresentado na [[História de versionamento\|história de versionamento da sincronização]] |
| `--config-dir` | Nome do [[Pasta de configuração\|diretório de configuração]] (predefinido: `.obsidian`) |

### `ob sync`

Executa a sincronização para um cofre configurado.

```
ob sync [--path <local-path>] [--continuous]
```

| Opção | Descrição |
| --- | --- |
| `--path` | Caminho do cofre local (predefinido: diretório atual) |
| `--continuous` | Executa continuamente, monitorizando alterações |

### `ob sync-config`

Visualiza ou altera as [[Definições do Sync e sincronização seletiva|definições de sincronização]] de um cofre. Execute sem opções para apresentar a configuração atual.

```
ob sync-config [--path <local-path>] [options]
```

| Opção                 | Descrição                                                                                                                                                                                                       |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path`              | Caminho do cofre local (predefinido: diretório atual)                                                                                                                                                           |
| `--mode`              | Modo de sincronização: `bidirectional` (predefinido), `pull-only` (apenas transferir, ignorar alterações locais) ou `mirror-remote` (apenas transferir, reverter alterações locais)                               |
| `--conflict-strategy` | `merge` ou `conflict`                                                                                                                                                                                           |
| `--file-types`        | Tipos de anexos a sincronizar: `image`, `audio`, `video`, `pdf`, `unsupported` (separados por vírgula, vazio para limpar)                                                                                       |
| `--configs`           | Categorias de configuração a sincronizar: `app`, `appearance`, `appearance-data`, `hotkey`, `core-plugin`, `core-plugin-data`, `community-plugin`, `community-plugin-data` (separados por vírgula, vazio para desativar a sincronização de configurações) |
| `--excluded-folders`  | Pastas a excluir (separadas por vírgula, vazio para limpar)                                                                                                                                                     |
| `--device-name`       | Nome do dispositivo para identificar este cliente na história de versionamento da sincronização                                                                                                                  |
| `--config-dir`        | Nome do diretório de configuração (predefinido: `.obsidian`)                                                                                                                                                    |

### `ob sync-status`

Mostra o estado da sincronização e a configuração de um cofre.

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

Desconecta um cofre da sincronização e remove as credenciais armazenadas.

```
ob sync-unlink [--path <local-path>]
```

## Módulos nativos

O Obsidian Headless inclui um addon nativo pré-compilado para definir o tempo de criação de ficheiros (birthtime) no Windows e macOS. Isto preserva os carimbos temporais de criação originais ao transferir ficheiros do servidor.

O addon tem como alvo a versão 3 do N-API, pelo que os binários compilados são estáveis em termos de ABI e funcionam em diferentes versões do Node.js sem necessidade de recompilação.

No Linux, o birthtime não é suportado — o addon não está incluído e a sincronização funciona normalmente sem ele.

Os binários pré-compilados estão incluídos para:

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`
