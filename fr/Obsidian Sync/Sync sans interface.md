---
permalink: sync/headless
cssclasses:
  - reference
description: >-
  Obsidian Sync propose un client headless pour synchroniser les coffres sans
  utiliser l'application de bureau. Utile pour les pipelines CI, les agents et
  les flux de travail automatisés. Synchronisez les dernières modifications ou
  maintenez les fichiers continuellement à jour.
localized: '2026-03-18'

---
[[Introduction à Obsidian Sync|Obsidian Sync]] propose un client sans interface pour synchroniser des coffres sans utiliser l'application de bureau. Utile pour les pipelines CI, les agents et les flux de travail automatisés. Synchronisez les dernières modifications ou maintenez les fichiers continuellement à jour.

Installez [[Sync sans interface|Obsidian Headless]] **(bêta ouverte)** pour interagir avec [[Introduction à Obsidian Sync|Obsidian Sync]] depuis la ligne de commande sans l'application de bureau Obsidian. Sync sans interface utilise les mêmes [[Sécurité et confidentialité|protections de chiffrement et de confidentialité]] que l'application de bureau, y compris le chiffrement de bout en bout.

## Démarrage rapide

> [!error] Sauvegardez vos données avant de commencer
> 1. Sauvegardez toujours vos données avant de commencer au cas où quelque chose d'inattendu se produirait.
> 2. N'utilisez pas *simultanément* la synchronisation de l'application de bureau et Sync sans interface sur le même appareil, car cela peut provoquer des conflits de données. N'utilisez qu'une seule méthode de synchronisation par appareil.

Installez [[Sync sans interface|Obsidian Headless]] **(bêta ouverte)** :

```shell
npm install -g obsidian-headless
```

Vous devez disposer d'un [[Forfaits et limites de stockage|abonnement Obsidian Sync]] actif.

```shell
# Se connecter
ob login

# Lister vos coffres distants
ob sync-list-remote

# Configurer un coffre pour la synchronisation
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# Exécuter une synchronisation unique
ob sync

# Exécuter une synchronisation continue (surveille les modifications)
ob sync --continuous
```

## Commandes

### `ob sync-list-remote`

Liste tous les coffres distants disponibles pour votre compte, y compris les coffres partagés.

### `ob sync-list-local`

Liste les coffres configurés localement et leurs chemins.

### `ob sync-create-remote`

Crée un nouveau coffre distant.

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| Option | Description |
| --- | --- |
| `--name` | Nom du coffre (requis) |
| `--encryption` | `standard` pour le chiffrement géré, `e2ee` pour le chiffrement de bout en bout |
| `--password` | Mot de passe de chiffrement de bout en bout (demandé si omis) |
| `--region` | [[Régions de Sync\|Région]] du serveur (automatique si omis) |

### `ob sync-setup`

Configure la synchronisation entre un coffre local et un coffre distant.

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| Option | Description |
| --- | --- |
| `--vault` | ID ou nom du coffre distant (requis) |
| `--path` | Répertoire local (par défaut : répertoire courant) |
| `--password` | Mot de passe de chiffrement de bout en bout (demandé si omis) |
| `--device-name` | Nom de l'appareil affiché dans l'[[Version history\|historique des versions de synchronisation]] |
| `--config-dir` | Nom du [[Dossier de configuration\|dossier de configuration]] (par défaut : `.obsidian`) |

### `ob sync`

Exécute la synchronisation pour un coffre configuré.

```
ob sync [--path <local-path>] [--continuous]
```

| Option | Description |
| --- | --- |
| `--path` | Chemin du coffre local (par défaut : répertoire courant) |
| `--continuous` | Exécuter en continu, en surveillant les modifications |

### `ob sync-config`

Affiche ou modifie les [[Paramètres de Sync et synchronisation sélective|paramètres de synchronisation]] d'un coffre. Exécutez sans options pour afficher la configuration actuelle.

```
ob sync-config [--path <local-path>] [options]
```

| Option                | Description                                                                                                                                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--path`              | Chemin du coffre local (par défaut : répertoire courant)                                                                                                                                                                             |
| `--mode`              | Mode de synchronisation : `bidirectional` (par défaut), `pull-only` (téléchargement uniquement, ignore les modifications locales), ou `mirror-remote` (téléchargement uniquement, annule les modifications locales)                   |
| `--conflict-strategy` | `merge` ou `conflict`                                                                                                                                                                                                                |
| `--file-types`        | Types de pièces jointes à synchroniser : `image`, `audio`, `video`, `pdf`, `unsupported` (séparés par des virgules, vide pour effacer)                                                                                               |
| `--configs`           | Catégories de configuration à synchroniser : `app`, `appearance`, `appearance-data`, `hotkey`, `core-plugin`, `core-plugin-data`, `community-plugin`, `community-plugin-data` (séparés par des virgules, vide pour désactiver la synchronisation de la configuration) |
| `--excluded-folders`  | Dossiers à exclure (séparés par des virgules, vide pour effacer)                                                                                                                                                                     |
| `--device-name`       | Nom de l'appareil pour identifier ce client dans l'historique des versions de synchronisation                                                                                                                                        |
| `--config-dir`        | Nom du dossier de configuration (par défaut : `.obsidian`)                                                                                                                                                                           |

### `ob sync-status`

Affiche le statut de synchronisation et la configuration d'un coffre.

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

Déconnecte un coffre de la synchronisation et supprime les identifiants stockés.

```
ob sync-unlink [--path <local-path>]
```

## Modules natifs

Obsidian Headless inclut un addon natif précompilé pour définir la date de création de fichier (birthtime) sur Windows et macOS. Cela préserve les horodatages de création originaux lors du téléchargement de fichiers depuis le serveur.

L'addon cible la version 3 de N-API, de sorte que les binaires compilés sont stables au niveau ABI et fonctionnent avec différentes versions de Node.js sans recompilation.

Sur Linux, le birthtime n'est pas pris en charge — l'addon n'est pas inclus et la synchronisation fonctionne normalement sans celui-ci.

Les binaires précompilés sont inclus pour :

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`
