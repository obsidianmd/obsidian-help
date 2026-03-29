---
permalink: sync/headless
cssclasses:
  - reference
description: 'Obsidian Sync ofereix un client autònom per sincronitzar caixes fortes sense utilitzar l''aplicació d''escriptori. Útil per a pipelines de CI, agents i fluxos de treball automatitzats. Sincronitzeu els últims canvis o mantingueu els fitxers contínuament actualitzats.'
---
[[Introducció a Obsidian Sync|Obsidian Sync]] ofereix un client sense interfície per sincronitzar cambres fortes sense utilitzar l'aplicació d'escriptori. Útil per a pipelines de CI, agents i fluxos de treball automatitzats. Sincronitza els últims canvis o mantén els fitxers contínuament actualitzats.

Instal·la [[Obsidian Headless]] **(beta oberta)** per interactuar amb [[Introducció a Obsidian Sync|Obsidian Sync]] des de la línia d'ordres sense l'aplicació d'escriptori d'Obsidian. Sync sense interfície utilitza les mateixes [[Seguretat i privacitat|proteccions de xifratge i privacitat]] que l'aplicació d'escriptori, incloent-hi el xifratge d'extrem a extrem.

## Inici ràpid

> [!error] Fes còpia de seguretat de les teves dades abans de començar
> 1. Fes sempre còpia de seguretat de les teves dades abans de començar per si passa quelcom inesperat.
> 2. No utilitzis *alhora* el Sync de l'aplicació d'escriptori i el Sync sense interfície al mateix dispositiu, ja que pot causar conflictes de dades. Utilitza només un mètode de sincronització per dispositiu.

Instal·la [[Obsidian Headless|Obsidian Headless]] **(beta oberta)**:

```shell
npm install -g obsidian-headless
```

Has de tenir una [[Plans i límits d'emmagatzematge|subscripció a Obsidian Sync]] activa.

```shell
# Inicia la sessió
ob login

# Llista les teves cambres remotes
ob sync-list-remote

# Configura una cambra forta per a la sincronització
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# Executa una sincronització puntual
ob sync

# Executa la sincronització contínua (vigila els canvis)
ob sync --continuous
```

## Ordres

### `ob sync-list-remote`

Llista totes les cambres remotes disponibles al teu compte, incloent-hi les cambres fortes compartides.

### `ob sync-list-local`

Llista les cambres fortes configurades localment i les seves rutes.

### `ob sync-create-remote`

Crea una nova cambra remota.

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| Opció | Descripció |
| --- | --- |
| `--name` | Nom de la cambra forta (obligatori) |
| `--encryption` | `standard` per a xifratge gestionat, `e2ee` per a xifratge d'extrem a extrem |
| `--password` | Contrasenya de xifratge d'extrem a extrem (es demana si s'omet) |
| `--region` | [[Regions de Sync\|Regió]] del servidor (automàtic si s'omet) |

### `ob sync-setup`

Configura la sincronització entre una cambra forta local i una cambra remota.

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| Opció | Descripció |
| --- | --- |
| `--vault` | ID o nom de la cambra remota (obligatori) |
| `--path` | Directori local (per defecte: directori actual) |
| `--password` | Contrasenya de xifratge d'extrem a extrem (es demana si s'omet) |
| `--device-name` | Nom del dispositiu mostrat a l'[[Historial de versions\|historial de versions de sincronització]] |
| `--config-dir` | Nom de la [[Carpeta de configuració\|carpeta de configuració]] (per defecte: `.obsidian`) |

### `ob sync`

Executa la sincronització per a una cambra forta configurada.

```
ob sync [--path <local-path>] [--continuous]
```

| Opció | Descripció |
| --- | --- |
| `--path` | Ruta local de la cambra forta (per defecte: directori actual) |
| `--continuous` | Executa contínuament, vigilant els canvis |

### `ob sync-config`

Visualitza o canvia la [[Configuració de Sync i sincronització selectiva|configuració de sincronització]] d'una cambra forta. Executa sense opcions per mostrar la configuració actual.

```
ob sync-config [--path <local-path>] [options]
```

| Opció                 | Descripció                                                                                                                                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--path`              | Ruta local de la cambra forta (per defecte: directori actual)                                                                                                                                                      |
| `--mode`              | Mode de sincronització: `bidirectional` (per defecte), `pull-only` (només baixa, ignora els canvis locals), o `mirror-remote` (només baixa, reverteix els canvis locals)                                           |
| `--conflict-strategy` | `merge` o `conflict`                                                                                                                                                                                               |
| `--file-types`        | Tipus d'adjunts a sincronitzar: `image`, `audio`, `video`, `pdf`, `unsupported` (separats per comes, buit per esborrar)                                                                                            |
| `--configs`           | Categories de configuració a sincronitzar: `app`, `appearance`, `appearance-data`, `hotkey`, `core-plugin`, `core-plugin-data`, `community-plugin`, `community-plugin-data` (separats per comes, buit per desactivar la sincronització de configuració) |
| `--excluded-folders`  | Carpetes a excloure (separades per comes, buit per esborrar)                                                                                                                                                       |
| `--device-name`       | Nom del dispositiu per identificar aquest client a l'historial de versions de sincronització                                                                                                                       |
| `--config-dir`        | Nom de la carpeta de configuració (per defecte: `.obsidian`)                                                                                                                                                       |

### `ob sync-status`

Mostra l'estat de sincronització i la configuració d'una cambra forta.

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

Desconnecta una cambra forta de la sincronització i elimina les credencials emmagatzemades.

```
ob sync-unlink [--path <local-path>]
```

## Mòduls natius

Obsidian Headless inclou un addon natiu precompilat per establir l'hora de creació del fitxer (birthtime) a Windows i macOS. Això preserva les marques de temps de creació originals en baixar fitxers del servidor.

L'addon té com a objectiu la versió 3 de N-API, de manera que els binaris compilats són estables a nivell d'ABI i funcionen en diferents versions de Node.js sense recompilació.

A Linux, el birthtime no és compatible — l'addon no s'inclou i la sincronització funciona normalment sense ell.

S'inclouen binaris precompilats per a:

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`
