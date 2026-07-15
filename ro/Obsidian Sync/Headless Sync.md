---
permalink: sync/headless
cssclasses:
  - reference
description: 'Obsidian Sync oferă un client headless pentru sincronizarea seifurilor fără a folosi aplicația desktop. Util pentru pipeline-uri CI, agenți și fluxuri de lucru automatizate. Sincronizează cele mai recente modificări sau menține fișierele actualizate în mod continuu.'
---
[[Introduction to Obsidian Sync|Obsidian Sync]] oferă un client headless pentru sincronizarea seifurilor fără a folosi aplicația desktop. Util pentru pipeline-uri CI, agenți și fluxuri de lucru automatizate. Sincronizează cele mai recente modificări sau menține fișierele actualizate în mod continuu.

Instalează [[Obsidian Headless]] **(beta deschisă)** pentru a interacționa cu [[Introduction to Obsidian Sync|Obsidian Sync]] din linia de comandă, fără aplicația desktop Obsidian. Headless Sync folosește aceleași [[Security and privacy|protecții de criptare și confidențialitate]] ca aplicația desktop, inclusiv criptarea integrală.

## Pornire rapidă

> [!error] Fă o copie de rezervă a datelor tale înainte de a începe
> 1. Fă întotdeauna o copie de rezervă a datelor tale înainte de a începe, în cazul în care apare ceva neașteptat.
> 2. Nu folosi *simultan* Sync din aplicația desktop și Headless Sync pe același dispozitiv, deoarece poate cauza conflicte de date. Folosește o singură metodă de sincronizare per dispozitiv.

Instalează [[Obsidian Headless|Obsidian Headless]] **(beta deschisă)**:

```shell
npm install -g obsidian-headless
```

Trebuie să ai un [[Plans and storage limits|abonament Obsidian Sync]] activ.

```shell
# Login
ob login

# List your remote vaults
ob sync-list-remote

# Set up a vault for syncing
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# Run a one-time sync
ob sync

# Run continuous sync (watches for changes)
ob sync --continuous
```

## Comenzi

### `ob sync-list-remote`

Listează toate seifurile la distanță disponibile pentru contul tău, inclusiv seifurile partajate.

### `ob sync-list-local`

Listează seifurile configurate local și căile lor.

### `ob sync-create-remote`

Creează un nou seif la distanță.

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| Opțiune | Descriere |
| --- | --- |
| `--name` | Numele seifului (obligatoriu) |
| `--encryption` | `standard` pentru criptare gestionată, `e2ee` pentru criptare integrală |
| `--password` | Parola de criptare integrală (solicitată dacă este omisă) |
| `--region` | [[Sync regions\|Regiunea]] serverului (automată dacă este omisă) |

### `ob sync-setup`

Configurează sincronizarea între un seif local și un seif la distanță.

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| Opțiune | Descriere |
| --- | --- |
| `--vault` | ID-ul sau numele seifului la distanță (obligatoriu) |
| `--path` | Directorul local (implicit: directorul curent) |
| `--password` | Parola de criptare integrală (solicitată dacă este omisă) |
| `--device-name` | Numele dispozitivului afișat în [[Version history\|istoricul versiunilor de sincronizare]] |
| `--config-dir` | Numele [[Configuration folder\|directorului de configurare]] (implicit: `.obsidian`) |

### `ob sync`

Rulează sincronizarea pentru un seif configurat.

```
ob sync [--path <local-path>] [--continuous]
```

| Opțiune | Descriere |
| --- | --- |
| `--path` | Calea locală a seifului (implicit: directorul curent) |
| `--continuous` | Rulează continuu, monitorizând modificările |

### `ob sync-config`

Vizualizează sau modifică [[Sync settings and selective syncing|setările de sincronizare]] pentru un seif. Rulează fără opțiuni pentru a afișa configurația curentă.

```
ob sync-config [--path <local-path>] [options]
```

| Opțiune                | Descriere                                                                                                                                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path`              | Calea locală a seifului (implicit: directorul curent)                                                                                                                                                                  |
| `--mode`              | Modul de sincronizare: `bidirectional` (implicit), `pull-only` (doar descarcă, ignoră modificările locale) sau `mirror-remote` (doar descarcă, anulează modificările locale)                                                              |
| `--conflict-strategy` | `merge` sau `conflict`                                                                                                                                                                                          |
| `--file-types`        | Tipurile de atașamente de sincronizat: `image`, `audio`, `video`, `pdf`, `unsupported` (separate prin virgulă, gol pentru a șterge lista)                                                                                                    |
| `--configs`           | Categoriile de configurare de sincronizat: `app`, `appearance`, `appearance-data`, `hotkey`, `core-plugin`, `core-plugin-data`, `community-plugin`, `community-plugin-data` (separate prin virgulă, gol pentru a dezactiva sincronizarea configurației) |
| `--excluded-folders`  | Directoare de exclus (separate prin virgulă, gol pentru a șterge lista)                                                                                                                                                                           |
| `--device-name`       | Numele dispozitivului pentru a identifica acest client în istoricul versiunilor de sincronizare                                                                                                                                                |
| `--config-dir`        | Numele directorului de configurare (implicit: `.obsidian`)                                                                                                                                                                   |

### `ob sync-status`

Afișează starea și configurația de sincronizare pentru un seif.

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

Deconectează un seif de la sincronizare și elimină acreditările stocate.

```
ob sync-unlink [--path <local-path>]
```

## Module native

Obsidian Headless include un modul complementar nativ precompilat pentru setarea orei de creare a fișierelor (birthtime) pe Windows și macOS. Acesta păstrează marcajele temporale originale de creare atunci când descarci fișiere de pe server.

Modulul complementar vizează versiunea N-API 3, astfel încât binarele compilate sunt stabile la nivel de ABI și funcționează pe toate versiunile Node.js fără a fi necesară recompilarea.

Pe Linux, birthtime nu este acceptat — modulul complementar nu este inclus, iar sincronizarea funcționează normal fără el.

Sunt incluse binare precompilate pentru:

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`
