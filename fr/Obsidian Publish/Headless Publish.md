---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish offers a headless client to publish vaults without using the desktop app. Useful for CI pipelines and automated workflows.
---
[[Introduction à Obsidian Publish|Obsidian Publish]] propose un client headless pour publier des coffres sans utiliser l'application de bureau. Utile pour les pipelines CI et les flux de travail automatisés. Publiez vos dernières modifications selon un calendrier ou dans le cadre d'un pipeline de build.

Installez [[Obsidian Headless]] **(bêta ouverte)** pour interagir avec [[Introduction à Obsidian Publish|Obsidian Publish]] depuis la ligne de commande sans l'application de bureau Obsidian.

## Démarrage rapide

Installez [[Obsidian Headless|Obsidian Headless]] **(bêta ouverte)** :

```shell
npm install -g obsidian-headless
```

Vous devez disposer d'un [[Introduction à Obsidian Publish|abonnement Obsidian Publish]] actif.

```shell
# Se connecter
ob login

# Lister vos sites Publish
ob publish-list-sites

# Connecter un coffre local à un site Publish
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# Prévisualiser les modifications sans publier
ob publish --dry-run

# Publier les modifications
ob publish
```

## Commandes

### `ob publish-list-sites`

Liste tous les sites Publish disponibles pour votre compte.

### `ob publish-create-site`

Crée un nouveau site Publish.

```
ob publish-create-site --slug <slug>
```

| Option | Description |
| --- | --- |
| `--slug` | Identifiant URL de votre site (par ex. `my-notes` crée `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

Connecte un coffre local à un site Publish.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| Option | Description |
| --- | --- |
| `--site` | ID ou slug du site |
| `--path` | Chemin local du coffre (par défaut : répertoire courant) |

### `ob publish`

Publie les modifications du coffre vers votre site. Par défaut, seuls les fichiers ayant `publish: true` dans leurs métadonnées sont inclus.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| Option | Description |
| --- | --- |
| `--path` | Chemin local du coffre (par défaut : répertoire courant) |
| `--all` | Inclure tous les fichiers, pas seulement ceux avec un indicateur de publication |
| `--dry-run` | Afficher les modifications sans publier |
| `--yes` | Publier sans demander de confirmation |

### `ob publish-config`

Affiche ou modifie les paramètres d'inclusion/exclusion de dossiers pour un coffre. Exécutez sans options pour afficher la configuration actuelle.

```
ob publish-config [--path <local-path>] [options]
```

| Option | Description |
| --- | --- |
| `--path` | Chemin local du coffre (par défaut : répertoire courant) |
| `--includes` | Dossiers à inclure, séparés par des virgules (chaîne vide pour effacer) |
| `--excludes` | Dossiers à exclure, séparés par des virgules (chaîne vide pour effacer) |

### `ob publish-site-options`

Affiche ou met à jour les paramètres d'affichage et de navigation à l'échelle du site. Exécutez sans options pour afficher les paramètres actuels.

```
ob publish-site-options [--path <local-path>] [options]
```

| Option | Description |
| --- | --- |
| `--path` | Chemin local du coffre (par défaut : répertoire courant) |
| `--site-name` | Nom du site |
| `--index-file` | Chemin du fichier de la page d'accueil |
| `--logo` | Chemin du fichier du logo (chaîne vide pour effacer) |
| `--show-navigation` | Affichage de la barre latérale de navigation |
| `--show-graph` | Afficher la vue graphique |
| `--show-outline` | Afficher la table des matières |
| `--show-search` | Afficher la recherche |
| `--show-backlinks` | Afficher des rétroliens |
| `--show-hover-preview` | Afficher l'aperçu au survol |
| `--show-theme-toggle` | Afficher le bouton de changement de thème |
| `--default-theme` | Thème par défaut : `light` ou `dark` |
| `--readable-line-length` | Longueur de ligne lisible |
| `--strict-line-breaks` | Sauts de ligne stricts |
| `--hide-title` | Masquer le titre en ligne |
| `--sliding-window` | Mode fenêtre glissante |
| `--nav-order` | Ordre de navigation, chemins séparés par des virgules (chaîne vide pour effacer) |
| `--nav-hidden` | Éléments de navigation cachés, chemins séparés par des virgules (chaîne vide pour effacer) |

### `ob publish-unlink`

Déconnecte un coffre d'un site Publish.

```
ob publish-unlink [--path <local-path>]
```
