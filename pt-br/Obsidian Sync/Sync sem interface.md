---
permalink: sync/headless
cssclasses:
  - reference
description: O Obsidian Sync oferece um cliente headless para sincronizar cofres sem usar o aplicativo desktop. Útil para pipelines de CI, agentes e fluxos de trabalho automatizados. Sincronize as últimas alterações ou mantenha os arquivos continuamente atualizados.
---
O [[Introdução ao Obsidian Sync|Obsidian Sync]] oferece um cliente headless para sincronizar cofres sem usar o aplicativo desktop. Útil para pipelines de CI, agentes e fluxos de trabalho automatizados. Sincronize as últimas alterações ou mantenha os arquivos continuamente atualizados.

Instale o [[Sync sem interface|Obsidian Headless]] **(beta aberto)** para interagir com o [[Introdução ao Obsidian Sync|Obsidian Sync]] pela linha de comando sem o aplicativo desktop do Obsidian. O Sync sem interface usa as mesmas [[Segurança e privacidade|proteções de criptografia e privacidade]] do aplicativo desktop, incluindo criptografia de ponta a ponta.

## Início rápido

> [!error] Faça backup dos seus dados antes de começar
> 1. Sempre faça backup dos seus dados antes de começar, caso algo inesperado aconteça.
> 2. Não use *ambos* o Sync do aplicativo desktop e o Sync sem interface no mesmo dispositivo, pois isso pode causar conflitos de dados. Use apenas um método de sincronização por dispositivo.

Instale o [[Sync sem interface|Obsidian Headless]] **(beta aberto)**:

```shell
npm install -g obsidian-headless
```

Você precisa ter uma [[Planos e limites de armazenamento|assinatura ativa do Obsidian Sync]].

```shell
# Entrar
ob login

# Listar seus cofres remotos
ob sync-list-remote

# Configurar um cofre para sincronização
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# Executar uma sincronização única
ob sync

# Executar sincronização contínua (monitora alterações)
ob sync --continuous
```

## Comandos

### `ob sync-list-remote`

Lista todos os cofres remotos disponíveis para sua conta, incluindo cofres compartilhados.

### `ob sync-list-local`

Lista os cofres configurados localmente e seus caminhos.

### `ob sync-create-remote`

Cria um novo cofre remoto.

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| Opção | Descrição |
| --- | --- |
| `--name` | Nome do cofre (obrigatório) |
| `--encryption` | `standard` para criptografia gerenciada, `e2ee` para criptografia de ponta a ponta |
| `--password` | Senha de criptografia de ponta a ponta (solicitada se omitida) |
| `--region` | [[Regiões do Sync\|Região]] do servidor (automático se omitido) |

### `ob sync-setup`

Configura a sincronização entre um cofre local e um cofre remoto.

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| Opção | Descrição |
| --- | --- |
| `--vault` | ID ou nome do cofre remoto (obrigatório) |
| `--path` | Diretório local (padrão: diretório atual) |
| `--password` | Senha de criptografia E2E (solicitada se omitida) |
| `--device-name` | Nome do dispositivo exibido no [[Histórico de versões\|histórico de versões da sincronização]] |
| `--config-dir` | Nome do [[Pasta de configuração\|diretório de configuração]] (padrão: `.obsidian`) |

### `ob sync`

Executa a sincronização para um cofre configurado.

```
ob sync [--path <local-path>] [--continuous]
```

| Opção | Descrição |
| --- | --- |
| `--path` | Caminho do cofre local (padrão: diretório atual) |
| `--continuous` | Executa continuamente, monitorando alterações |

### `ob sync-config`

Visualiza ou altera as [[Configurações do Sync e sincronização seletiva|configurações de sincronização]] de um cofre. Execute sem opções para exibir a configuração atual.

```
ob sync-config [--path <local-path>] [options]
```

| Opção                 | Descrição                                                                                                                                                                                                                    |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path`              | Caminho do cofre local (padrão: diretório atual)                                                                                                                                                                             |
| `--mode`              | Modo de sincronização: `bidirectional` (padrão), `pull-only` (apenas baixar, ignorar alterações locais) ou `mirror-remote` (apenas baixar, reverter alterações locais)                                                        |
| `--conflict-strategy` | `merge` ou `conflict`                                                                                                                                                                                                        |
| `--file-types`        | Tipos de anexo para sincronizar: `image`, `audio`, `video`, `pdf`, `unsupported` (separados por vírgula, vazio para limpar)                                                                                                  |
| `--configs`           | Categorias de configuração para sincronizar: `app`, `appearance`, `appearance-data`, `hotkey`, `core-plugin`, `core-plugin-data`, `community-plugin`, `community-plugin-data` (separados por vírgula, vazio para desativar a sincronização de configurações) |
| `--excluded-folders`  | Pastas para excluir (separadas por vírgula, vazio para limpar)                                                                                                                                                               |
| `--device-name`       | Nome do dispositivo para identificar este cliente no histórico de versões da sincronização                                                                                                                                   |
| `--config-dir`        | Nome do diretório de configuração (padrão: `.obsidian`)                                                                                                                                                                      |

### `ob sync-status`

Exibe o status da sincronização e a configuração de um cofre.

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

Desconecta um cofre da sincronização e remove as credenciais armazenadas.

```
ob sync-unlink [--path <local-path>]
```

## Módulos nativos

O Obsidian Headless inclui um addon nativo pré-compilado para definir o horário de criação de arquivos (birthtime) no Windows e macOS. Isso preserva os timestamps originais de criação ao baixar arquivos do servidor.

O addon tem como alvo a versão 3 do N-API, então os binários compilados são estáveis em ABI e funcionam entre versões do Node.js sem recompilação.

No Linux, o birthtime não é suportado — o addon não é incluído e a sincronização opera normalmente sem ele.

Binários pré-compilados são incluídos para:

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`
