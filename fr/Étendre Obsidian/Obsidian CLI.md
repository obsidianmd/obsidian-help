---
permalink: cli
description: >-
  Tout ce que vous pouvez faire dans Obsidian peut être fait depuis la ligne de
  commande.
localized: '2026-03-18'
---
Obsidian CLI est une interface en ligne de commande qui vous permet de contrôler Obsidian depuis votre terminal pour la création de scripts, l'automatisation et l'intégration avec des outils externes.

Tout ce que vous pouvez faire dans Obsidian, vous pouvez le faire depuis la ligne de commande. Obsidian CLI inclut même des [[#Commandes pour développeurs|commandes pour développeurs]] pour accéder aux outils de développement, inspecter des éléments, prendre des captures d'écran, recharger des modules, et plus encore.

![[obsidian-cli.mp4#interface]]

> [!warning] Nécessite le programme d'installation Obsidian 1.12
> L'utilisation de la CLI nécessite le programme d'installation Obsidian 1.12. Consultez le [[Mettre à jour Obsidian#Mises à jour du programme d'installation|guide de mise à jour du programme d'installation]].

## Installer Obsidian CLI

Mettez à niveau vers la dernière [[Mettre à jour Obsidian|version du programme d'installation d'Obsidian]] (1.11.7) et la dernière [[Versions en accès anticipé|version en accès anticipé]] (1.12.x).

Activez Obsidian CLI dans Obsidian :

1. Allez dans **Paramètres** → **Général**.
2. Activez **Interface en ligne de commande**.
3. Suivez les instructions pour enregistrer Obsidian CLI.

Si vous rencontrez des problèmes lors de l'installation d'Obsidian CLI, consultez [[#Dépannage]].

## Premiers pas

Obsidian CLI prend en charge à la fois des commandes individuelles et une interface utilisateur en terminal (TUI) avec aide interactive et complétion automatique.

> [!info] L'application Obsidian doit être en cours d'exécution
> Obsidian CLI nécessite que l'application Obsidian soit en cours d'exécution. Si Obsidian n'est pas en cours d'exécution, la première commande que vous exécutez lancera Obsidian.
>
> Vous cherchez à synchroniser sans l'application de bureau ? Consultez [[Sync sans interface|Obsidian Headless]].

### Exécuter une commande

Exécutez une commande individuelle sans ouvrir la TUI :

```shell
# Exécuter la commande d'aide
obsidian help
```

### Utiliser l'interface en terminal

Utilisez la TUI en entrant `obsidian`. Les commandes suivantes peuvent être saisies sans `obsidian`.

```shell
# Ouvrir la TUI, puis exécuter help
obsidian
help
```

La TUI prend en charge la complétion automatique, l'historique des commandes et la recherche inversée. Utilisez `Ctrl+R` pour rechercher dans votre historique de commandes. Consultez [[#Raccourcis clavier]] pour tous les raccourcis disponibles.

## Exemples

Voici quelques exemples de ce qu'Obsidian CLI peut faire.

### Utilisation quotidienne

```shell
# Ouvrir la note quotidienne du jour
obsidian daily

# Ajouter une tâche à votre note quotidienne
obsidian daily:append content="- [ ] Acheter des courses"

# Rechercher dans votre coffre
obsidian search query="notes de réunion"

# Lire le fichier actif
obsidian read

# Lister toutes les tâches de votre note quotidienne
obsidian tasks daily

# Créer une nouvelle note à partir d'un modèle
obsidian create name="Voyage à Paris" template=Travel

# Lister tous les mots-clés du coffre avec les compteurs
obsidian tags counts

# Comparer deux versions d'un fichier
obsidian diff file=README from=1 to=3
```

### Pour les développeurs

De nombreuses [[#Commandes pour développeurs]] sont disponibles pour le développement de modules et de thèmes. Ces commandes permettent aux outils de codage agentique de tester et déboguer automatiquement.

```shell
# Ouvrir les outils de développement
obsidian devtools

# Recharger un module complémentaire en cours de développement
obsidian plugin:reload id=my-plugin

# Prendre une capture d'écran de l'application
obsidian dev:screenshot path=screenshot.png

# Exécuter du JavaScript dans la console de l'application
obsidian eval code="app.vault.getFiles().length"
```

## Comment faire

### Utiliser les paramètres et les drapeaux

Les commandes peuvent utiliser des **paramètres** et des **drapeaux**. La plupart des commandes ne nécessitent aucun paramètre ni drapeau. Les paramètres obligatoires sont marqués comme `required`. Par exemple :

```shell
# Créer une nouvelle note avec le nom par défaut "Sans titre"
obsidian create
```

Un **paramètre** prend une valeur, écrite sous la forme `paramètre=valeur`. Si la valeur contient des espaces, encadrez-la de guillemets :

```shell
# Créer une nouvelle note appelée "Note" avec le contenu "Bonjour le monde"
obsidian create name=Note content="Bonjour le monde"
```

Un **drapeau** est un interrupteur booléen sans valeur. Incluez-le pour l'activer, par exemple `open` et `overwrite` sont des drapeaux :

```shell
# Créer une note et l'ouvrir
obsidian create name=Note content="Bonjour" open overwrite
```

Pour du contenu multiligne, utilisez `\n` pour le saut de ligne. Utilisez `\t` pour la tabulation.

```bash
obsidian create name=Note content="# Titre\n\nCorps du texte"
```

### Cibler un coffre

Si le répertoire de travail actuel de votre terminal est un dossier de coffre, ce coffre est utilisé par défaut. Sinon, le coffre actuellement actif est utilisé.

Utilisez `vault=<nom>` ou `vault=<id>` pour cibler un coffre spécifique. Cela doit être le premier paramètre avant votre commande :

```shell
obsidian vault=Notes daily
obsidian vault="Mon Coffre" search query="test"
```

Dans la TUI, utilisez `vault:open <nom>` ou `<id>` pour basculer vers un coffre différent.

### Cibler un fichier

De nombreuses commandes acceptent les paramètres `file` et `path` pour cibler un fichier spécifique. Si aucun n'est fourni, la commande cible par défaut le fichier actif.

- `file=<nom>` résout le fichier en utilisant la même résolution de liens que les [[Liens internes|liens wiki]], en correspondant par nom de fichier sans nécessiter le chemin complet ni l'extension.
- `path=<chemin>` nécessite le chemin exact depuis la racine du coffre, par ex. `dossier/note.md`.

```shell
# Ces commandes sont équivalentes si "Recette.md" est le seul fichier avec ce nom
obsidian read file=Recette
obsidian read path="Modèles/Recette.md"
```

### Copier la sortie

Ajoutez `--copy` à n'importe quelle commande pour copier la sortie dans le presse-papiers :

```shell
read --copy
search query="TODO" --copy
```


## Commandes générales

### `help`

Afficher la liste de toutes les commandes disponibles.

| Paramètre   | Description                                 |
| ----------- | ------------------------------------------- |
| `<command>` | Afficher l'aide pour une commande spécifique. |

### `version`

Afficher la version d'Obsidian.

### `reload`

Recharger la fenêtre de l'application.

### `restart`

Redémarrer l'application.


## Bases

Commandes pour les [[Introduction aux Bases|Bases]].

### `bases`

Lister tous les fichiers `.base` dans le coffre.

### `base:views`

Lister les vues dans le fichier base actuel.

### `base:create`

Créer un nouvel élément dans une base. Cible par défaut la vue base active si aucun fichier n'est spécifié.

```bash
file=<nom>         # nom du fichier base
path=<chemin>      # chemin du fichier base
view=<nom>         # nom de la vue
name=<nom>         # nom du nouveau fichier
content=<texte>    # contenu initial

open               # ouvrir le fichier après création
newtab             # ouvrir dans un nouvel onglet
```

### `base:query`

Interroger une base et retourner les résultats.

```bash
file=<nom>                     # nom du fichier base
path=<chemin>                  # chemin du fichier base
view=<nom>                     # nom de la vue à interroger
format=json|csv|tsv|md|paths   # format de sortie (par défaut : json)
```

## Signets

Commandes pour les [[Signets]].

### `bookmarks`

Lister les signets.

```bash
total              # retourner le nombre de signets
verbose            # inclure les types de signets
format=json|tsv|csv  # format de sortie (par défaut : tsv)
```

### `bookmark`

Ajouter un signet.

```bash
file=<chemin>      # fichier à ajouter aux signets
subpath=<subpath>  # sous-chemin (entête ou bloc) dans le fichier
folder=<chemin>    # dossier à ajouter aux signets
search=<requête>   # requête de recherche à ajouter aux signets
url=<url>          # URL à ajouter aux signets
title=<titre>      # titre du signet
```

## Palette de commandes

Commandes pour la [[Palette de commandes]] et les [[Raccourcis clavier]]. Cela inclut toutes les commandes enregistrées par les modules.

### `commands`

Lister les identifiants de commandes disponibles.

```bash
filter=<préfixe>   # filtrer par préfixe d'identifiant
```

### `command`

Exécuter une commande Obsidian.

```bash
id=<command-id>    # (required) identifiant de la commande à exécuter
```

### `hotkeys`

Lister les raccourcis clavier pour toutes les commandes.

```bash
total              # retourner le nombre de raccourcis
verbose            # afficher si le raccourci est personnalisé
format=json|tsv|csv  # format de sortie (par défaut : tsv)
```

### `hotkey`

Obtenir le raccourci clavier d'une commande.

```bash
id=<command-id>    # (required) identifiant de la commande

verbose            # afficher si personnalisé ou par défaut
```

## Notes quotidiennes

Commandes pour les [[Notes quotidiennes]].

### `daily`

Ouvrir la note quotidienne.

```bash
paneType=tab|split|window    # type de panneau dans lequel ouvrir
```

### `daily:path`

Obtenir le chemin de la note quotidienne. Retourne le chemin attendu même si le fichier n'a pas encore été créé.

### `daily:read`

Lire le contenu de la note quotidienne.

### `daily:append`

Ajouter du contenu à la fin de la note quotidienne.

```bash
content=<texte>    # (required) contenu à ajouter
paneType=tab|split|window    # type de panneau dans lequel ouvrir

inline             # ajouter sans saut de ligne
open               # ouvrir le fichier après ajout
```

### `daily:prepend`

Ajouter du contenu au début de la note quotidienne.

```bash
content=<texte>    # (required) contenu à insérer au début
paneType=tab|split|window    # type de panneau dans lequel ouvrir

inline             # insérer sans saut de ligne
open               # ouvrir le fichier après ajout
```

## Historique des fichiers

### `diff`

Lister ou comparer les versions depuis la [[Récupération de fichier]] locale et [[Introduction à Obsidian Sync|Sync]]. Les versions sont numérotées de la plus récente à la plus ancienne.

```bash
file=<nom>           # nom du fichier
path=<chemin>        # chemin du fichier
from=<n>             # numéro de version de départ pour la comparaison
to=<n>               # numéro de version d'arrivée pour la comparaison
filter=local|sync    # filtrer par source de version
```

**Exemples :**

```shell
# Lister toutes les versions du fichier actif
diff

# Lister toutes les versions d'un fichier spécifique
diff file=Recette

# Comparer la dernière version au fichier actuel
diff file=Recette from=1

# Comparer deux versions
diff file=Recette from=2 to=1

# Afficher uniquement les versions Sync
diff filter=sync
```

### `history`

Lister les versions depuis la [[Récupération de fichier]] uniquement. Voir [[#Sync|sync:history]] pour la commande Sync équivalente.

```bash
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier
```

### `history:list`

Lister tous les fichiers ayant un historique local.

### `history:read`

Lire une version de l'historique local.

```bash
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier
version=<n>        # numéro de version (par défaut : 1)
```

### `history:restore`

Restaurer une version de l'historique local.

```bash
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier
version=<n>        # (required) numéro de version
```

### `history:open`

Ouvrir la récupération de fichier.

```bash
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier
```

## Fichiers et dossiers

### `file`

Afficher les informations d'un fichier (par défaut : fichier actif).

```bash
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier
```

Exemple :

```
path       Notes/Recette.md
name       Recette
extension  md
size       1024
created    1700000000000
modified   1700001000000
```

### `files`

Lister les fichiers dans le coffre.

```bash
folder=<chemin>    # filtrer par dossier
ext=<extension>    # filtrer par extension

total              # retourner le nombre de fichiers
```

### `folder`

Afficher les informations d'un dossier.

```bash
path=<chemin>            # (required) chemin du dossier
info=files|folders|size  # retourner une information spécifique uniquement
```

### `folders`

Lister les dossiers dans le coffre.

```bash
folder=<chemin>    # filtrer par dossier parent

total              # retourner le nombre de dossiers
```

### `open`

Ouvrir un fichier.

```bash
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier

newtab             # ouvrir dans un nouvel onglet
```

### `create`

Créer ou écraser un fichier.

```bash
name=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier
content=<texte>    # contenu initial
template=<nom>     # modèle à utiliser

overwrite          # écraser si le fichier existe
open               # ouvrir le fichier après création
newtab             # ouvrir dans un nouvel onglet
```

### `read`

Lire le contenu d'un fichier (par défaut : fichier actif).

```bash
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier
```

### `append`

Ajouter du contenu à la fin d'un fichier (par défaut : fichier actif).

```bash
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier
content=<texte>    # (required) contenu à ajouter

inline             # ajouter sans saut de ligne
```

### `prepend`

Ajouter du contenu au début après les métadonnées (par défaut : fichier actif).

```bash
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier
content=<texte>    # (required) contenu à insérer au début

inline             # insérer sans saut de ligne
```

### `move`

Déplacer ou renommer un fichier (par défaut : fichier actif). Cela mettra automatiquement à jour les [[Liens internes|liens internes]] si l'option est activée dans vos [[Paramètres#Mettre automatiquement à jour les liens internes|paramètres du coffre]].

```bash
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier
to=<chemin>        # (required) dossier ou chemin de destination
```

### `rename`

Renommer un fichier (par défaut : fichier actif). L'extension du fichier est préservée automatiquement si elle est omise du nouveau nom. Utilisez [[#`move`|move]] pour renommer et déplacer un fichier en même temps. Cela mettra automatiquement à jour les [[Liens internes|liens internes]] si l'option est activée dans vos [[Paramètres#Mettre automatiquement à jour les liens internes|paramètres du coffre]].

```bash
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier
name=<nom>         # (required) nouveau nom du fichier
```

### `delete`

Supprimer un fichier (par défaut : fichier actif, corbeille par défaut).

```bash
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier

permanent          # ignorer la corbeille, supprimer définitivement
```

## Liens

Commandes pour les [[Rétroliens]] et les [[Liens sortants]].

### `backlinks`

Lister les liens retour vers un fichier (par défaut : fichier actif).

```bash
file=<nom>         # nom du fichier cible
path=<chemin>      # chemin du fichier cible

counts             # inclure le nombre de liens
total              # retourner le nombre de liens retour
format=json|tsv|csv  # format de sortie (par défaut : tsv)
```

### `links`

Lister les liens sortants d'un fichier (par défaut : fichier actif).

```bash
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier

total              # retourner le nombre de liens
```

### `unresolved`

Lister les liens non résolus dans le coffre.

```bash
total              # retourner le nombre de liens non résolus
counts             # inclure le nombre de liens
verbose            # inclure les fichiers sources
format=json|tsv|csv  # format de sortie (par défaut : tsv)
```

### `orphans`

Lister les fichiers sans liens entrants.

```bash
total              # retourner le nombre d'orphelins
```

### `deadends`

Lister les fichiers sans liens sortants.

```bash
total              # retourner le nombre de culs-de-sac
```

## Plan

Commandes pour le [[Plan]].

### `outline`

Afficher les entêtes du fichier actuel.

```bash
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier
format=tree|md|json  # format de sortie (par défaut : tree)

total              # retourner le nombre d'entêtes
```

## Modules

Commandes pour les [[Modules principaux]] et les [[Modules complémentaires]].

### `plugins`

Lister les modules installés.

```bash
filter=core|community  # filtrer par type de module

versions               # inclure les numéros de version
format=json|tsv|csv    # format de sortie (par défaut : tsv)
```

### `plugins:enabled`

Lister les modules activés.

```bash
filter=core|community  # filtrer par type de module

versions               # inclure les numéros de version
format=json|tsv|csv    # format de sortie (par défaut : tsv)
```

### `plugins:restrict`

Activer/désactiver ou vérifier le mode restreint.

```bash
on                 # activer le mode restreint
off                # désactiver le mode restreint
```

### `plugin`

Obtenir les informations d'un module.

```bash
id=<plugin-id>     # (required) identifiant du module
```

### `plugin:enable`

Activer un module.

```bash
id=<id>                # (required) identifiant du module
filter=core|community  # type de module
```

### `plugin:disable`

Désactiver un module.

```bash
id=<id>                # (required) identifiant du module
filter=core|community  # type de module
```

### `plugin:install`

Installer un module complémentaire.

```bash
id=<id>            # (required) identifiant du module

enable             # activer après installation
```

### `plugin:uninstall`

Désinstaller un module complémentaire.

```bash
id=<id>            # (required) identifiant du module
```

### `plugin:reload`

Recharger un module (pour les développeurs).

```bash
id=<id>            # (required) identifiant du module
```

## Propriétés

Commandes liées aux [[Propriétés]].

### `aliases`

Lister les alias dans le coffre. Utilisez `active` ou `file`/`path` pour afficher les alias d'un fichier spécifique.

```bash
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier

total              # retourner le nombre d'alias
verbose            # inclure les chemins de fichiers
active             # afficher les alias du fichier actif
```

### `properties`

Lister les propriétés dans le coffre. Utilisez `active` ou `file`/`path` pour afficher les propriétés d'un fichier spécifique.

```bash
file=<nom>         # afficher les propriétés du fichier
path=<chemin>      # afficher les propriétés du chemin
name=<nom>         # obtenir le compteur d'une propriété spécifique
sort=count         # trier par compteur (par défaut : nom)
format=yaml|json|tsv  # format de sortie (par défaut : yaml)

total              # retourner le nombre de propriétés
counts             # inclure les compteurs d'occurrences
active             # afficher les propriétés du fichier actif
```

### `property:set`

Définir une propriété sur un fichier (par défaut : fichier actif).

```bash
name=<nom>                                     # (required) nom de la propriété
value=<valeur>                                 # (required) valeur de la propriété
type=text|list|number|checkbox|date|datetime   # type de propriété
file=<nom>                                     # nom du fichier
path=<chemin>                                  # chemin du fichier
```

### `property:remove`

Supprimer une propriété d'un fichier (par défaut : fichier actif).

```bash
name=<nom>         # (required) nom de la propriété
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier
```

### `property:read`

Lire la valeur d'une propriété d'un fichier (par défaut : fichier actif).

```bash
name=<nom>         # (required) nom de la propriété
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier
```

## Publish

Commandes pour [[Introduction à Obsidian Publish|Obsidian Publish]].

### `publish:site`

Afficher les informations du site Publish (slug, URL).

### `publish:list`

Lister les fichiers publiés.

```bash
total              # retourner le nombre de fichiers publiés
```

### `publish:status`

Lister les modifications de publication.

```bash
total              # retourner le nombre de modifications
new                # afficher uniquement les nouveaux fichiers
changed            # afficher uniquement les fichiers modifiés
deleted            # afficher uniquement les fichiers supprimés
```

### `publish:add`

Publier un fichier ou tous les fichiers modifiés (par défaut : fichier actif).

```bash
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier

changed            # publier tous les fichiers modifiés
```

### `publish:remove`

Dépublier un fichier (par défaut : fichier actif).

```bash
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier
```

### `publish:open`

Ouvrir le fichier sur le site publié (par défaut : fichier actif).

```bash
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier
```

## Notes aléatoires

Commandes pour la [[Note aléatoire]].

### `random`

Ouvrir une note aléatoire.

```bash
folder=<chemin>    # limiter à un dossier

newtab             # ouvrir dans un nouvel onglet
```

### `random:read`

Lire une note aléatoire (inclut le chemin).

```bash
folder=<chemin>    # limiter à un dossier
```

## Recherche

Commandes pour la [[Rechercher|Recherche]].

### `search`

Rechercher du texte dans le coffre. Retourne les chemins des fichiers correspondants.

```bash
query=<texte>      # (required) requête de recherche
path=<dossier>     # limiter à un dossier
limit=<n>          # nombre maximum de fichiers
format=text|json   # format de sortie (par défaut : text)

total              # retourner le nombre de correspondances
case               # sensible à la casse
```

### `search:context`

Rechercher avec le contexte des lignes correspondantes. Retourne une sortie de type grep `chemin:ligne: texte`.

```bash
query=<texte>      # (required) requête de recherche
path=<dossier>     # limiter à un dossier
limit=<n>          # nombre maximum de fichiers
format=text|json   # format de sortie (par défaut : text)

case               # sensible à la casse
```

### `search:open`

Ouvrir la vue de recherche.

```bash
query=<texte>      # requête de recherche initiale
```

## Sync

Commandes pour [[Introduction à Obsidian Sync|Obsidian Sync]].

> [!tip] Synchroniser sans l'application de bureau
> Ces commandes contrôlent Sync dans l'application Obsidian en cours d'exécution. Pour synchroniser des coffres depuis la ligne de commande sans l'application de bureau, consultez [[Sync sans interface]].

### `sync`

Mettre en pause ou reprendre la synchronisation.

```bash
on                 # reprendre la synchronisation
off                # mettre en pause la synchronisation
```

### `sync:status`

Afficher le statut et l'utilisation de la synchronisation.

### `sync:history`

Lister l'historique des versions Sync d'un fichier (par défaut : fichier actif).

```bash
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier

total              # retourner le nombre de versions
```

### `sync:read`

Lire une version Sync (par défaut : fichier actif).

```bash
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier
version=<n>        # (required) numéro de version
```

### `sync:restore`

Restaurer une version Sync (par défaut : fichier actif).

```bash
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier
version=<n>        # (required) numéro de version
```

### `sync:open`

Ouvrir l'historique Sync (par défaut : fichier actif).

```bash
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier
```

### `sync:deleted`

Lister les fichiers supprimés dans Sync.

```bash
total              # retourner le nombre de fichiers supprimés
```

## Mots-clés

Commandes pour les [[Mots-clés]].

### `tags`

Lister les mots-clés dans le coffre. Utilisez `active` ou `file`/`path` pour afficher les mots-clés d'un fichier spécifique.

```bash
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier
sort=count         # trier par compteur (par défaut : nom)

total              # retourner le nombre de mots-clés
counts             # inclure les compteurs de mots-clés
format=json|tsv|csv  # format de sortie (par défaut : tsv)
active             # afficher les mots-clés du fichier actif
```

### `tag`

Obtenir les informations d'un mot-clé.

```bash
name=<tag>         # (required) nom du mot-clé

total              # retourner le nombre d'occurrences
verbose            # inclure la liste des fichiers et le compteur
```

## Tâches

Commandes pour la gestion des tâches.

### `tasks`

Lister les tâches dans le coffre. Utilisez `active` ou `file`/`path` pour afficher les tâches d'un fichier spécifique.

```bash
file=<nom>         # filtrer par nom de fichier
path=<chemin>      # filtrer par chemin de fichier
status="<char>"    # filtrer par caractère de statut

total              # retourner le nombre de tâches
done               # afficher les tâches terminées
todo               # afficher les tâches incomplètes
verbose            # grouper par fichier avec numéros de ligne
format=json|tsv|csv  # format de sortie (par défaut : text)
active             # afficher les tâches du fichier actif
daily              # afficher les tâches de la note quotidienne
```

**Exemples :**

```bash
# Lister toutes les tâches du coffre
tasks

# Lister les tâches incomplètes du coffre
tasks todo

# Lister les tâches terminées d'un fichier spécifique
tasks file=Recette done

# Lister les tâches de la note quotidienne du jour
tasks daily

# Compter les tâches de la note quotidienne
tasks daily total

# Lister les tâches avec chemins de fichiers et numéros de ligne
tasks verbose

# Filtrer par statut personnalisé (mettre entre guillemets les caractères spéciaux)
tasks 'status=?'
```

### `task`

Afficher ou mettre à jour une tâche.

```bash
ref=<chemin:ligne> # référence de la tâche (chemin:ligne)
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier
line=<n>           # numéro de ligne
status="<char>"    # définir le caractère de statut

toggle             # basculer le statut de la tâche
daily              # note quotidienne
done               # marquer comme terminée
todo               # marquer comme à faire
```

**Exemples :**

```bash
# Afficher les informations d'une tâche
task file=Recette line=8
task ref="Recette.md:8"

# Basculer l'état d'achèvement d'une tâche
task ref="Recette.md:8" toggle

# Basculer une tâche de la note quotidienne
task daily line=3 toggle

# Définir le statut d'une tâche
task file=Recette line=8 done      # → [x]
task file=Recette line=8 todo      # → [ ]
task file=Recette line=8 status=-  # → [-]
task daily line=3 done             # Marquer une tâche de la note quotidienne comme terminée
```


## Modèles

Commandes pour les [[Modules/Modèles|Modèles]].

### `templates`

Lister les modèles.

```bash
total              # retourner le nombre de modèles
```

### `template:read`

Lire le contenu d'un modèle.

```bash
name=<modèle>      # (required) nom du modèle
title=<titre>      # titre pour la résolution des variables

resolve            # résoudre les variables du modèle
```

### `template:insert`

Insérer un modèle dans le fichier actif.

```bash
name=<modèle>      # (required) nom du modèle
```

**Notes :**
- L'option `resolve` traite les variables `{{date}}`, `{{time}}`, `{{title}}`
- Utilisez `create path=<chemin> template=<nom>` pour créer un fichier avec un modèle

## Thèmes et extraits

Commandes pour les [[Thèmes]] et les [[Extraits CSS]].

### `themes`

Lister les thèmes installés.

```bash
versions           # inclure les numéros de version
```

### `theme`

Afficher le thème actif ou obtenir des informations.

```bash
name=<nom>         # nom du thème pour plus de détails
```

### `theme:set`

Définir le thème actif.

```bash
name=<nom>         # (required) nom du thème (vide pour le thème par défaut)
```

### `theme:install`

Installer un thème communautaire.

```bash
name=<nom>         # (required) nom du thème

enable             # activer après installation
```

### `theme:uninstall`

Désinstaller un thème.

```bash
name=<nom>         # (required) nom du thème
```

### `snippets`

Lister les extraits CSS installés.

### `snippets:enabled`

Lister les extraits CSS activés.

### `snippet:enable`

Activer un extrait CSS.

```bash
name=<nom>         # (required) nom de l'extrait
```

### `snippet:disable`

Désactiver un extrait CSS.

```bash
name=<nom>         # (required) nom de l'extrait
```

## Notes uniques

Commandes pour le [[Créateur de note unique]].

### `unique`

Créer une note unique.

```bash
name=<texte>       # nom de la note
content=<texte>    # contenu initial
paneType=tab|split|window    # type de panneau dans lequel ouvrir

open               # ouvrir le fichier après création
```

## Coffre

### `vault`

Afficher les informations du coffre.

```bash
info=name|path|files|folders|size  # retourner une information spécifique uniquement
```

### `vaults`

Lister les coffres connus.

```bash
total              # retourner le nombre de coffres
verbose            # inclure les chemins des coffres
```

### `vault:open`

Basculer vers un coffre différent (TUI uniquement).

```bash
name=<nom>         # (required) nom du coffre
```

## Visionneuse web

Commandes pour la [[Afficheur web|visionneuse web]].

### `web`

Ouvrir une URL dans la visionneuse web.

```bash
url=<url>          # (required) URL à ouvrir

newtab             # ouvrir dans un nouvel onglet
```

## Nombre de mots

Commandes pour le [[Nombre de mots]].

### `wordcount`

Compter les mots et les caractères (par défaut : fichier actif).

```bash
file=<nom>         # nom du fichier
path=<chemin>      # chemin du fichier

words              # retourner uniquement le nombre de mots
characters         # retourner uniquement le nombre de caractères
```

## Espace de travail

Commandes pour l'[[Espace de travail]] et le module [[Espaces de travail]].

### `workspace`

Afficher l'arborescence de l'espace de travail.

```bash
ids                # inclure les identifiants des éléments de l'espace de travail
```

### `workspaces`

Lister les espaces de travail sauvegardés.

```bash
total              # retourner le nombre d'espaces de travail
```

### `workspace:save`

Sauvegarder la disposition actuelle comme espace de travail.

```bash
name=<nom>         # nom de l'espace de travail
```

### `workspace:load`

Charger un espace de travail sauvegardé.

```bash
name=<nom>         # (required) nom de l'espace de travail
```

### `workspace:delete`

Supprimer un espace de travail sauvegardé.

```bash
name=<nom>         # (required) nom de l'espace de travail
```

### `tabs`

Lister les onglets ouverts.

```bash
ids                # inclure les identifiants des onglets
```

### `tab:open`

Ouvrir un nouvel onglet.

```bash
group=<id>         # identifiant du groupe d'onglets
file=<chemin>      # fichier à ouvrir
view=<type>        # type de vue à ouvrir
```

### `recents`

Lister les fichiers récemment ouverts.

```bash
total              # retourner le nombre de fichiers récents
```

## Commandes pour développeurs

Commandes pour vous aider à développer des [[Modules complémentaires]] et des [[Thèmes]]. Pour en savoir plus, consultez la [documentation développeur d'Obsidian](https://docs.obsidian.md).

### `devtools`

Activer/désactiver les outils de développement Electron.

### `dev:debug`

Attacher/détacher le débogueur Chrome DevTools Protocol.

```bash
on                 # attacher le débogueur
off                # détacher le débogueur
```

### `dev:cdp`

Exécuter une commande Chrome DevTools Protocol.

```bash
method=<CDP.method>  # (required) méthode CDP à appeler
params=<json>        # paramètres de la méthode en JSON
```

### `dev:errors`

Afficher les erreurs JavaScript capturées.

```bash
clear              # vider le tampon d'erreurs
```

### `dev:screenshot`

Prendre une capture d'écran (retourne un PNG en base64).

```bash
path=<nomfichier>  # chemin du fichier de sortie
```

### `dev:console`

Afficher les messages de console capturés.

```bash
limit=<n>                        # nombre maximum de messages à afficher (par défaut 50)
level=log|warn|error|info|debug  # filtrer par niveau de journal

clear                            # vider le tampon de la console
```

### `dev:css`

Inspecter le CSS avec les emplacements source.

```bash
selector=<css>     # (required) sélecteur CSS
prop=<nom>         # filtrer par nom de propriété
```

### `dev:dom`

Interroger les éléments DOM.

```bash
selector=<css>     # (required) sélecteur CSS
attr=<nom>         # obtenir la valeur d'un attribut
css=<prop>         # obtenir la valeur d'une propriété CSS

total              # retourner le nombre d'éléments
text               # retourner le contenu textuel
inner              # retourner innerHTML au lieu de outerHTML
all                # retourner toutes les correspondances au lieu de la première
```

### `dev:mobile`

Activer/désactiver l'émulation mobile.

```bash
on                 # activer l'émulation mobile
off                # désactiver l'émulation mobile
```

### `eval`

Exécuter du JavaScript et retourner le résultat.

```bash
code=<javascript>  # (required) code JavaScript à exécuter
```

## Raccourcis clavier

Ces raccourcis sont disponibles dans l'[[#Utiliser l'interface en terminal|interface en terminal (TUI)]].

### Navigation

| Action                                                          | Raccourci       |
| --------------------------------------------------------------- | --------------- |
| Déplacer le curseur à gauche                                    | `←` / `Ctrl+B`  |
| Déplacer le curseur à droite (accepte la suggestion en fin de ligne) | `→` / `Ctrl+F` |
| Aller au début de la ligne                                      | `Ctrl+A`        |
| Aller à la fin de la ligne                                      | `Ctrl+E`        |
| Reculer d'un mot                                                | `Alt+B`         |
| Avancer d'un mot                                                | `Alt+F`         |

### Édition

| Action                          | Raccourci                    |
| ------------------------------- | ---------------------------- |
| Supprimer jusqu'au début de la ligne | `Ctrl+U`                |
| Supprimer jusqu'à la fin de la ligne | `Ctrl+K`                |
| Supprimer le mot précédent      | `Ctrl+W` / `Alt+Retour arrière` |

### Complétion automatique

| Action                                                      | Raccourci     |
| ----------------------------------------------------------- | ------------- |
| Entrer en mode suggestion / accepter la suggestion sélectionnée | `Tab`     |
| Quitter le mode suggestion                                  | `Maj+Tab`     |
| Entrer en mode suggestion (depuis une nouvelle saisie)      | `↓`           |
| Accepter la première/sélection de suggestion (en fin de ligne) | `→`        |

### Historique

| Action                                                              | Raccourci       |
| ------------------------------------------------------------------- | --------------- |
| Entrée précédente de l'historique / naviguer les suggestions vers le haut | `↑` / `Ctrl+P` |
| Entrée suivante de l'historique / naviguer les suggestions vers le bas    | `↓` / `Ctrl+N` |
| Recherche inversée dans l'historique (taper pour filtrer, `Ctrl+R` pour parcourir) | `Ctrl+R` |

### Autres

| Action                                                          | Raccourci             |
| --------------------------------------------------------------- | --------------------- |
| Exécuter la commande ou accepter la suggestion                  | `Entrée`              |
| Annuler la complétion / quitter le mode suggestion / effacer la saisie | `Échap`        |
| Effacer l'écran                                                 | `Ctrl+L`              |
| Quitter                                                         | `Ctrl+C` / `Ctrl+D`  |

## Dépannage

Si vous avez des difficultés à exécuter Obsidian CLI :

- Assurez-vous d'utiliser la dernière [[Mettre à jour Obsidian|version du programme d'installation d'Obsidian]] (1.12.4 ou supérieure).
- Redémarrez votre terminal après avoir enregistré la CLI pour que les modifications du PATH prennent effet.
- Obsidian doit être en cours d'exécution. La CLI se connecte à l'instance Obsidian en cours d'exécution. Si Obsidian n'est pas en cours d'exécution, la première commande CLI devrait lancer l'application.

### Windows

Obsidian CLI sur Windows nécessite le programme d'installation Obsidian 1.12.4+. Voir [[Mettre à jour Obsidian|Mise à jour du programme d'installation]].

Windows utilise un redirecteur de terminal qui connecte correctement Obsidian à stdin/stdout. Cela est nécessaire car Obsidian s'exécute normalement comme une application graphique qui est incompatible avec les sorties de terminal sous Windows. Lorsque vous installez Obsidian 1.12.4+, le redirecteur de terminal `Obsidian.com` sera ajouté dans le dossier où vous avez installé le fichier `Obsidian.exe`.

### macOS

L'enregistrement de la CLI ajoute le répertoire binaire d'Obsidian à votre PATH via `~/.zprofile`. Si vous rencontrez des difficultés, vérifiez les points suivants :

Votre fichier `~/.zprofile` devrait contenir la ligne suivante. Si elle est manquante, vous pouvez l'ajouter manuellement :

```
export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"
```

#### Shells alternatifs

L'enregistrement de la CLI ne modifie que `~/.zprofile`, qui est utilisé par zsh (le shell par défaut de macOS). Si vous utilisez un shell différent, ajoutez le répertoire binaire d'Obsidian au fichier de configuration de votre shell manuellement :

- Bash : ajoutez `export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"` à `~/.bash_profile`
- Fish : exécutez `fish_add_path /Applications/Obsidian.app/Contents/MacOS`


### Linux

L'enregistrement de la CLI crée un lien symbolique à `/usr/local/bin/obsidian` pointant vers le binaire d'Obsidian (nécessite sudo).

#### AppImage

Pour les installations AppImage, le lien symbolique pointe vers le fichier `.AppImage` au lieu du binaire interne, puisque le chemin de montage change à chaque lancement. Si sudo échoue, le lien symbolique est créé à `~/.local/bin/obsidian` en solution de repli. Si vous rencontrez des difficultés, vérifiez les points suivants.

Vérifiez que le lien symbolique existe et pointe vers le bon binaire :

```
ls -l /usr/local/bin/obsidian
```

Si le lien symbolique est manquant, créez-le manuellement :

```
sudo ln -s /chemin/vers/obsidian /usr/local/bin/obsidian
```

Si le lien symbolique a été créé dans `~/.local/bin/` à la place, assurez-vous que ce répertoire est dans votre PATH. Ajoutez la ligne suivante à votre `~/.bashrc` ou `~/.zshrc` :

```
export PATH="$PATH:$HOME/.local/bin"
```

Si le lien symbolique casse après avoir déplacé ou renommé le fichier `.AppImage`, réenregistrez la CLI ou mettez à jour le lien symbolique manuellement.

#### Snap

Le paquet Snap stocke les données des pré-versions dans son propre répertoire de données utilisateur. Si la CLI ne détecte pas le fichier `.asar` de la pré-version, définissez `XDG_CONFIG_HOME` pour pointer vers le chemin de configuration Snap :

```
export XDG_CONFIG_HOME="$HOME/snap/obsidian/current/.config"
```

Ajoutez ceci à votre `~/.bashrc` ou `~/.zshrc` pour le rendre persistant.


#### Flatpak

Obsidian essaie de faire cela automatiquement, mais voici les instructions manuelles. S'il s'agit d'une installation système :

```
ln -s /var/lib/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```

S'il s'agit d'une installation utilisateur :

```
ln -s ~/.local/share/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```
