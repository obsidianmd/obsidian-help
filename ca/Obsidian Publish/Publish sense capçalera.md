---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish ofereix un client headless per publicar magatzems sense utilitzar l'aplicació d'escriptori. Útil per a pipelines de CI i fluxos de treball automatitzats.
---
[[Introducció a Obsidian Publish|Obsidian Publish]] ofereix un client sense capçalera per publicar cambres fortes sense utilitzar l'aplicació d'escriptori. Útil per a pipelines de CI i fluxos de treball automatitzats. Publica els teus últims canvis segons una programació o com a part d'un pipeline de compilació.

Instal·la [[Publish sense capçalera|Obsidian Headless]] **(beta oberta)** per interactuar amb [[Introducció a Obsidian Publish|Obsidian Publish]] des de la línia d'ordres sense l'aplicació d'escriptori d'Obsidian.

## Inici ràpid

Instal·la [[Publish sense capçalera|Obsidian Headless]] **(beta oberta)**:

```shell
npm install -g obsidian-headless
```

Has de tenir una [[Introducció a Obsidian Publish|subscripció activa a Obsidian Publish]].

```shell
# Inicia la sessió
ob login

# Llista els teus llocs Publish
ob publish-list-sites

# Connecta una cambra forta local a un lloc Publish
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# Previsualitza els canvis sense publicar
ob publish --dry-run

# Publica els canvis
ob publish
```

## Ordres

### `ob publish-list-sites`

Llista tots els llocs Publish disponibles al teu compte.

### `ob publish-create-site`

Crea un nou lloc Publish.

```
ob publish-create-site --slug <slug>
```

| Opció | Descripció |
| --- | --- |
| `--slug` | Identificador d'URL per al teu lloc (p. ex. `my-notes` crea `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

Connecta una cambra forta local a un lloc Publish.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| Opció | Descripció |
| --- | --- |
| `--site` | ID o slug del lloc |
| `--path` | Ruta local de la cambra forta (per defecte: directori actual) |

### `ob publish`

Publica els canvis de la cambra forta al teu lloc. Per defecte, només s'inclouen els fitxers que tenen `publish: true` a les seves metadades inicials.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| Opció | Descripció |
| --- | --- |
| `--path` | Ruta local de la cambra forta (per defecte: directori actual) |
| `--all` | Inclou tots els fitxers, no només els que tenen l'indicador de publicació |
| `--dry-run` | Mostra els canvis sense publicar |
| `--yes` | Publica sense demanar confirmació |

### `ob publish-config`

Consulta o canvia la configuració de carpetes incloses/excloses d'una cambra forta. Executa sense opcions per mostrar la configuració actual.

```
ob publish-config [--path <local-path>] [options]
```

| Opció | Descripció |
| --- | --- |
| `--path` | Ruta local de la cambra forta (per defecte: directori actual) |
| `--includes` | Carpetes a incloure, separades per comes (cadena buida per esborrar) |
| `--excludes` | Carpetes a excloure, separades per comes (cadena buida per esborrar) |

### `ob publish-site-options`

Consulta o actualitza la configuració de visualització i navegació de tot el lloc. Executa sense opcions per mostrar la configuració actual.

```
ob publish-site-options [--path <local-path>] [options]
```

| Opció | Descripció |
| --- | --- |
| `--path` | Ruta local de la cambra forta (per defecte: directori actual) |
| `--site-name` | Nom del lloc |
| `--index-file` | Ruta del fitxer de la pàgina d'inici |
| `--logo` | Ruta del fitxer del logotip (cadena buida per esborrar) |
| `--show-navigation` | Mostrar navegació a la barra lateral |
| `--show-graph` | Mostrar vista gràfica |
| `--show-outline` | Mostra l'Índex |
| `--show-search` | Mostrar cerca |
| `--show-backlinks` | Mostra els retroenllaços |
| `--show-hover-preview` | Mostra la previsualització en passar el cursor |
| `--show-theme-toggle` | Mostrar commutador de tema |
| `--default-theme` | Tema per defecte: `light` o `dark` |
| `--readable-line-length` | Longitud de línia llegible |
| `--strict-line-breaks` | Trencament de línia estricte |
| `--hide-title` | Amagar títol en línia |
| `--sliding-window` | Mode de finestra lliscant |
| `--nav-order` | Ordre de navegació, rutes separades per comes (cadena buida per esborrar) |
| `--nav-hidden` | Elements de navegació amagats, rutes separades per comes (cadena buida per esborrar) |

### `ob publish-unlink`

Desconnecta una cambra forta d'un lloc Publish.

```
ob publish-unlink [--path <local-path>]
```
