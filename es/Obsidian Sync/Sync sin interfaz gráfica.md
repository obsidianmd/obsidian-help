---
permalink: sync/headless
cssclasses:
  - reference
description: Obsidian Sync ofrece un cliente sin interfaz gráfica para sincronizar bóvedas sin usar la aplicación de escritorio. Útil para pipelines de CI, agentes y flujos de trabajo automatizados. Sincroniza los últimos cambios o mantén los archivos continuamente actualizados.
---
[[Introducción a Obsidian Sync|Obsidian Sync]] ofrece un cliente sin interfaz gráfica para sincronizar bóvedas sin usar la aplicación de escritorio. Útil para pipelines de CI, agentes y flujos de trabajo automatizados. Sincroniza los últimos cambios o mantén los archivos continuamente actualizados.

Instala [[Obsidian Headless]] **(beta abierta)** para interactuar con [[Introducción a Obsidian Sync|Obsidian Sync]] desde la línea de comandos sin la aplicación de escritorio de Obsidian. Sync sin interfaz gráfica usa las mismas [[Seguridad y privacidad|protecciones de cifrado y privacidad]] que la aplicación de escritorio, incluyendo cifrado de extremo a extremo.

## Inicio rápido

> [!error] Respalda tus datos antes de comenzar
> 1. Siempre respalda tus datos antes de comenzar en caso de que ocurra algo inesperado.
> 2. No uses *ambos* Sync de la aplicación de escritorio y Sync sin interfaz gráfica en el mismo dispositivo, ya que puede causar conflictos de datos. Usa solo un método de sincronización por dispositivo.

Instala [[Obsidian Headless|Obsidian Headless]] **(beta abierta)**:

```shell
npm install -g obsidian-headless
```

Debes tener una [[Planes y límites de almacenamiento|suscripción activa a Obsidian Sync]].

```shell
# Iniciar sesión
ob login

# Listar tus bóvedas remotas
ob sync-list-remote

# Configurar una bóveda para sincronización
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# Ejecutar una sincronización única
ob sync

# Ejecutar sincronización continua (observa cambios)
ob sync --continuous
```

## Comandos

### `ob sync-list-remote`

Lista todas las bóvedas remotas disponibles para tu cuenta, incluyendo bóvedas compartidas.

### `ob sync-list-local`

Lista las bóvedas configuradas localmente y sus rutas.

### `ob sync-create-remote`

Crea una nueva bóveda remota.

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| Opción | Descripción |
| --- | --- |
| `--name` | Nombre de la bóveda (requerido) |
| `--encryption` | `standard` para cifrado administrado, `e2ee` para cifrado de extremo a extremo |
| `--password` | Contraseña de cifrado de extremo a extremo (se solicita si se omite) |
| `--region` | [[Regiones de Sync\|Región]] del servidor (automático si se omite) |

### `ob sync-setup`

Configura la sincronización entre una bóveda local y una bóveda remota.

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| Opción | Descripción |
| --- | --- |
| `--vault` | ID o nombre de la bóveda remota (requerido) |
| `--path` | Directorio local (predeterminado: directorio actual) |
| `--password` | Contraseña de cifrado E2E (se solicita si se omite) |
| `--device-name` | Nombre del dispositivo mostrado en el [[Historial de versiones\|historial de versiones de sync]] |
| `--config-dir` | Nombre del [[Carpeta de configuración\|directorio de configuración]] (predeterminado: `.obsidian`) |

### `ob sync`

Ejecuta la sincronización para una bóveda configurada.

```
ob sync [--path <local-path>] [--continuous]
```

| Opción | Descripción |
| --- | --- |
| `--path` | Ruta de la bóveda local (predeterminado: directorio actual) |
| `--continuous` | Ejecutar continuamente, observando cambios |

### `ob sync-config`

Visualiza o cambia los [[Ajustes de Sync y sincronización selectiva|ajustes de sincronización]] de una bóveda. Ejecuta sin opciones para mostrar la configuración actual.

```
ob sync-config [--path <local-path>] [options]
```

| Opción                | Descripción                                                                                                                                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path`              | Ruta de la bóveda local (predeterminado: directorio actual)                                                                                                                                                    |
| `--mode`              | Modo de sincronización: `bidirectional` (predeterminado), `pull-only` (solo descargar, ignorar cambios locales), o `mirror-remote` (solo descargar, revertir cambios locales)                                   |
| `--conflict-strategy` | `merge` o `conflict`                                                                                                                                                                                           |
| `--file-types`        | Tipos de adjuntos a sincronizar: `image`, `audio`, `video`, `pdf`, `unsupported` (separados por comas, vacío para limpiar)                                                                                     |
| `--configs`           | Categorías de configuración a sincronizar: `app`, `appearance`, `appearance-data`, `hotkey`, `core-plugin`, `core-plugin-data`, `community-plugin`, `community-plugin-data` (separados por comas, vacío para desactivar la sincronización de configuración) |
| `--excluded-folders`  | Carpetas a excluir (separadas por comas, vacío para limpiar)                                                                                                                                                   |
| `--device-name`       | Nombre del dispositivo para identificar este cliente en el historial de versiones de sincronización                                                                                                             |
| `--config-dir`        | Nombre del directorio de configuración (predeterminado: `.obsidian`)                                                                                                                                           |

### `ob sync-status`

Muestra el estado de sincronización y la configuración de una bóveda.

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

Desconecta una bóveda de la sincronización y elimina las credenciales almacenadas.

```
ob sync-unlink [--path <local-path>]
```

## Módulos nativos

Obsidian Headless incluye un complemento nativo precompilado para establecer la hora de creación de archivos (birthtime) en Windows y macOS. Esto preserva las marcas de tiempo de creación originales al descargar archivos del servidor.

El complemento apunta a la versión 3 de N-API, por lo que los binarios compilados son estables en ABI y funcionan en distintas versiones de Node.js sin recompilación.

En Linux, birthtime no es compatible — el complemento no se incluye y la sincronización opera normalmente sin él.

Los binarios precompilados están incluidos para:

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`
