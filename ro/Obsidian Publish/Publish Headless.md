---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish oferă un client headless pentru a publica seifuri fără a folosi aplicația desktop. Util pentru pipeline-uri CI și fluxuri de lucru automatizate.
aliases:
  - Headless Publish
---
[[Introducere în Obsidian Publish|Obsidian Publish]] oferă un client headless pentru a publica seifuri fără a folosi aplicația desktop. Util pentru pipeline-uri CI și fluxuri de lucru automatizate. Publică cele mai recente schimbări ale tale după un program stabilit sau ca parte a unui pipeline de build.

Instalează [[Obsidian Headless]] **(beta deschisă)** pentru a interacționa cu [[Introducere în Obsidian Publish|Obsidian Publish]] din linia de comandă, fără aplicația desktop Obsidian.

## Start rapid

Instalează [[Obsidian Headless|Obsidian Headless]] **(beta deschisă)**:

```shell
npm install -g obsidian-headless
```

Trebuie să ai un [[Introducere în Obsidian Publish|abonament Obsidian Publish]] activ.

```shell
# Autentificare
ob login

# Listează siteurile tale de publicare
ob publish-list-sites

# Conectează un seif local la un site de publicare
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# Previzualizează schimbările fără a publica
ob publish --dry-run

# Publică schimbările
ob publish
```

## Comenzi

### `ob publish-list-sites`

Listează toate siteurile Publish disponibile pentru contul tău.

### `ob publish-create-site`

Creează un nou site Publish.

```
ob publish-create-site --slug <slug>
```

| Opțiune | Descriere |
| --- | --- |
| `--slug` | Identificator URL pentru site-ul tău (de ex. `my-notes` creează `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

Conectează un seif local la un site Publish.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| Opțiune | Descriere |
| --- | --- |
| `--site` | ID-ul sau slug-ul siteului |
| `--path` | Calea seifului local (implicit: directorul curent) |

### `ob publish`

Publică schimbările seifului pe site-ul tău. Implicit, sunt incluse doar fișierele cu `publish: true` în frontmatter.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| Opțiune | Descriere |
| --- | --- |
| `--path` | Calea seifului local (implicit: directorul curent) |
| `--all` | Include toate fișierele, nu doar cele cu un flag de publicare |
| `--dry-run` | Afișează schimbările fără a publica |
| `--yes` | Publică fără a cere confirmare |

### `ob publish-config`

Vizualizează sau schimbă setările directoarelor incluse/excluse pentru un seif. Rulează fără opțiuni pentru a afișa configurația curentă.

```
ob publish-config [--path <local-path>] [options]
```

| Opțiune | Descriere |
| --- | --- |
| `--path` | Calea seifului local (implicit: directorul curent) |
| `--includes` | Directoare de inclus, separate prin virgulă (șir gol pentru a șterge) |
| `--excludes` | Directoare de exclus, separate prin virgulă (șir gol pentru a șterge) |

### `ob publish-site-options`

Vizualizează sau actualizează setările de afișare și navigare la nivel de site. Rulează fără opțiuni pentru a afișa setările curente.

```
ob publish-site-options [--path <local-path>] [options]
```

| Opțiune | Descriere |
| --- | --- |
| `--path` | Calea seifului local (implicit: directorul curent) |
| `--site-name` | Numele siteului |
| `--index-file` | Calea fișierului paginii principale |
| `--logo` | Calea fișierului siglă (șir gol pentru a șterge) |
| `--show-navigation` | Afișează bara laterală de navigare |
| `--show-graph` | Afișează afișajul grafic |
| `--show-outline` | Afișează cuprinsul |
| `--show-search` | Afișează căutarea |
| `--show-backlinks` | Afișează referințele |
| `--show-hover-preview` | Afișează previzualizarea plutitoare |
| `--show-theme-toggle` | Afișează comutatorul de temă |
| `--default-theme` | Tema implicită: `light` sau `dark` |
| `--readable-line-length` | Lungimea lizibilă a rândului |
| `--strict-line-breaks` | Întreruperi stricte de rând |
| `--hide-title` | Ascunde titlul inline |
| `--sliding-window` | Modul fereastră glisantă |
| `--nav-order` | Ordinea de navigare, căi separate prin virgulă (șir gol pentru a șterge) |
| `--nav-hidden` | Elemente de navigare ascunse, căi separate prin virgulă (șir gol pentru a șterge) |

### `ob publish-unlink`

Deconectează un seif de la un site Publish.

```
ob publish-unlink [--path <local-path>]
```
