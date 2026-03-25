---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish offers a headless client to publish vaults without using the desktop app. Useful for CI pipelines and automated workflows.
---
[[Introduzione a Obsidian Publish|Obsidian Publish]] offre un client headless per pubblicare cassaforti senza utilizzare l'app desktop. Utile per pipeline CI e flussi di lavoro automatizzati. Pubblica le ultime modifiche in base a una pianificazione o come parte di una pipeline di build.

Installa [[Obsidian Headless]] **(open beta)** per interagire con [[Introduzione a Obsidian Publish|Obsidian Publish]] dalla riga di comando senza l'app desktop di Obsidian.

## Avvio rapido

Installa [[Obsidian Headless|Obsidian Headless]] **(open beta)**:

```shell
npm install -g obsidian-headless
```

È necessario avere un abbonamento attivo a [[Introduzione a Obsidian Publish|Obsidian Publish]].

```shell
# Accedi
ob login

# Elenca i tuoi siti Publish
ob publish-list-sites

# Connetti una cassaforte locale a un sito Publish
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# Anteprima delle modifiche senza pubblicare
ob publish --dry-run

# Pubblica le modifiche
ob publish
```

## Comandi

### `ob publish-list-sites`

Elenca tutti i siti Publish disponibili per il tuo account.

### `ob publish-create-site`

Crea un nuovo sito Publish.

```
ob publish-create-site --slug <slug>
```

| Opzione | Descrizione |
| --- | --- |
| `--slug` | Identificatore URL per il sito (ad es. `my-notes` crea `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

Connetti una cassaforte locale a un sito Publish.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| Opzione | Descrizione |
| --- | --- |
| `--site` | ID sito o slug |
| `--path` | Percorso della cassaforte locale (predefinito: directory corrente) |

### `ob publish`

Pubblica le modifiche della cassaforte sul sito. Per impostazione predefinita, vengono inclusi solo i file con `publish: true` nei metadati iniziali.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| Opzione | Descrizione |
| --- | --- |
| `--path` | Percorso della cassaforte locale (predefinito: directory corrente) |
| `--all` | Includi tutti i file, non solo quelli con il flag publish |
| `--dry-run` | Mostra le modifiche senza pubblicare |
| `--yes` | Pubblica senza chiedere conferma |

### `ob publish-config`

Visualizza o modifica le impostazioni di inclusione/esclusione delle cartelle per una cassaforte. Eseguire senza opzioni per visualizzare la configurazione corrente.

```
ob publish-config [--path <local-path>] [options]
```

| Opzione | Descrizione |
| --- | --- |
| `--path` | Percorso della cassaforte locale (predefinito: directory corrente) |
| `--includes` | Cartelle da includere, separate da virgola (stringa vuota per cancellare) |
| `--excludes` | Cartelle da escludere, separate da virgola (stringa vuota per cancellare) |

### `ob publish-site-options`

Visualizza o aggiorna le impostazioni di aspetto e navigazione a livello di sito. Eseguire senza opzioni per visualizzare le impostazioni correnti.

```
ob publish-site-options [--path <local-path>] [options]
```

| Opzione | Descrizione |
| --- | --- |
| `--path` | Percorso della cassaforte locale (predefinito: directory corrente) |
| `--site-name` | Nome sito |
| `--index-file` | Percorso del file della pagina iniziale |
| `--logo` | Percorso del file logo (stringa vuota per cancellare) |
| `--show-navigation` | Mostra navigazione laterale |
| `--show-graph` | Mostra grafo |
| `--show-outline` | Mostra indice |
| `--show-search` | Mostra cerca |
| `--show-backlinks` | Mostra riferimenti |
| `--show-hover-preview` | Mostra anteprima al passaggio del mouse |
| `--show-theme-toggle` | Mostra selettore tema |
| `--default-theme` | Tema predefinito: `light` o `dark` |
| `--readable-line-length` | Migliora leggibilità delle righe |
| `--strict-line-breaks` | Non mostrare interruzioni di riga singole |
| `--hide-title` | Nascondi titolo in linea |
| `--sliding-window` | Modalità finestra scorrevole |
| `--nav-order` | Ordine di navigazione, percorsi separati da virgola (stringa vuota per cancellare) |
| `--nav-hidden` | Elementi di navigazione nascosti, percorsi separati da virgola (stringa vuota per cancellare) |

### `ob publish-unlink`

Disconnetti una cassaforte da un sito Publish.

```
ob publish-unlink [--path <local-path>]
```
