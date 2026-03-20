---
permalink: sync/headless
cssclasses:
  - reference
description: Obsidian Sync offre un client headless per sincronizzare le cassaforti senza utilizzare l'app desktop. Utile per pipeline CI, agenti e flussi di lavoro automatizzati. Sincronizza le ultime modifiche o mantieni i file costantemente aggiornati.
aliases:
  - Headless Sync
---
[[Introduzione a Obsidian Sync|Obsidian Sync]] offre un client headless per sincronizzare le cassaforti senza utilizzare l'app desktop. Utile per pipeline CI, agenti e flussi di lavoro automatizzati. Sincronizza le ultime modifiche o mantieni i file costantemente aggiornati.

Installa [[Obsidian Headless]] **(beta aperta)** per interagire con [[Introduzione a Obsidian Sync|Obsidian Sync]] dalla riga di comando senza l'app desktop di Obsidian. Headless Sync utilizza le stesse [[Sicurezza e privacy|protezioni di crittografia e privacy]] dell'app desktop, inclusa la crittografia end-to-end.

## Avvio rapido

> [!error] Esegui il backup dei dati prima di iniziare
> 1. Esegui sempre il backup dei dati prima di iniziare nel caso succeda qualcosa di imprevisto.
> 2. Non utilizzare *sia* Sync dell'app desktop che Headless Sync sullo stesso dispositivo, poiché può causare conflitti di dati. Utilizza un solo metodo di sincronizzazione per dispositivo.

Installa [[Obsidian Headless|Obsidian Headless]] **(beta aperta)**:

```shell
npm install -g obsidian-headless
```

È necessario avere un [[Piani e limiti di archiviazione|abbonamento a Obsidian Sync]] attivo.

```shell
# Accedi
ob login

# Elenca i vault remoti
ob sync-list-remote

# Configura una cassaforte per la sincronizzazione
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# Esegui una sincronizzazione singola
ob sync

# Esegui la sincronizzazione continua (monitora le modifiche)
ob sync --continuous
```

## Comandi

### `ob sync-list-remote`

Elenca tutti i caveau remoti disponibili per il tuo account, inclusi quelli condivisi.

### `ob sync-list-local`

Elenca le cassaforti configurate localmente e i relativi percorsi.

### `ob sync-create-remote`

Crea un nuovo caveau remoto.

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| Opzione | Descrizione |
| --- | --- |
| `--name` | Nome vault (obbligatorio) |
| `--encryption` | `standard` per crittografia gestita, `e2ee` per crittografia end-to-end |
| `--password` | Password di crittografia end-to-end (richiesta se omessa) |
| `--region` | [[Regioni di Sync\|Regione]] del server (automatica se omessa) |

### `ob sync-setup`

Configura la sincronizzazione tra una cassaforte locale e un caveau remoto.

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| Opzione | Descrizione |
| --- | --- |
| `--vault` | ID o nome del caveau remoto (obbligatorio) |
| `--path` | Directory locale (predefinito: directory corrente) |
| `--password` | Password di crittografia E2E (richiesta se omessa) |
| `--device-name` | Nome dispositivo mostrato nella [[Cronologia delle versioni\|cronologia delle versioni di Sync]] |
| `--config-dir` | Nome della [[Cartella di configurazione\|directory di configurazione]] (predefinito: `.obsidian`) |

### `ob sync`

Esegui la sincronizzazione per una cassaforte configurata.

```
ob sync [--path <local-path>] [--continuous]
```

| Opzione | Descrizione |
| --- | --- |
| `--path` | Percorso della cassaforte locale (predefinito: directory corrente) |
| `--continuous` | Esegui in modo continuo, monitorando le modifiche |

### `ob sync-config`

Visualizza o modifica le [[Impostazioni di Sync e sincronizzazione selettiva|impostazioni di sincronizzazione]] per una cassaforte. Esegui senza opzioni per visualizzare la configurazione corrente.

```
ob sync-config [--path <local-path>] [options]
```

| Opzione                | Descrizione                                                                                                                                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path`              | Percorso della cassaforte locale (predefinito: directory corrente)                                                                                                                                                                  |
| `--mode`              | Modalità di sincronizzazione: `bidirectional` (predefinito), `pull-only` (solo download, ignora le modifiche locali), o `mirror-remote` (solo download, ripristina le modifiche locali)                                                              |
| `--conflict-strategy` | `merge` o `conflict`                                                                                                                                                                                          |
| `--file-types`        | Tipi di allegati da sincronizzare: `image`, `audio`, `video`, `pdf`, `unsupported` (separati da virgola, vuoto per cancellare)                                                                                                    |
| `--configs`           | Categorie di configurazione da sincronizzare: `app`, `appearance`, `appearance-data`, `hotkey`, `core-plugin`, `core-plugin-data`, `community-plugin`, `community-plugin-data` (separati da virgola, vuoto per disabilitare la sincronizzazione della configurazione) |
| `--excluded-folders`  | Cartelle da escludere (separate da virgola, vuoto per cancellare)                                                                                                                                                           |
| `--device-name`       | Nome dispositivo per identificare questo client nella cronologia delle versioni di Sync                                                                                                                                |
| `--config-dir`        | Nome della directory di configurazione (predefinito: `.obsidian`)                                                                                                                                                                   |

### `ob sync-status`

Mostra lo stato e la configurazione della sincronizzazione per una cassaforte.

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

Disconnetti una cassaforte dalla sincronizzazione e rimuovi le credenziali memorizzate.

```
ob sync-unlink [--path <local-path>]
```

## Moduli nativi

Obsidian Headless include un addon nativo precompilato per impostare il tempo di creazione dei file (birthtime) su Windows e macOS. Questo preserva i timestamp di creazione originali durante il download dei file dal server.

L'addon è destinato alla versione N-API 3, quindi i binari compilati sono stabili a livello di ABI e funzionano su tutte le versioni di Node.js senza ricompilazione.

Su Linux, il birthtime non è supportato — l'addon non è incluso e la sincronizzazione funziona normalmente senza di esso.

I binari precompilati sono inclusi per:

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`
