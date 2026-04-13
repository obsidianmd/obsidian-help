---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish offers a headless client to publish vaults without using the desktop app. Useful for CI pipelines and automated workflows.
aliases:
  - Headless Publish
---
[[Introducción a Obsidian Publish|Obsidian Publish]] ofrece un cliente headless para publicar bóvedas sin usar la aplicación de escritorio. Útil para pipelines de CI y flujos de trabajo automatizados. Publica tus últimos cambios de forma programada o como parte de un pipeline de compilación.

Instala [[Obsidian Headless]] **(beta abierta)** para interactuar con [[Introducción a Obsidian Publish|Obsidian Publish]] desde la línea de comandos sin la aplicación de escritorio de Obsidian.

## Inicio rápido

Instala [[Obsidian Headless|Obsidian Headless]] **(beta abierta)**:

```shell
npm install -g obsidian-headless
```

Debes tener una [[Introducción a Obsidian Publish|suscripción activa a Obsidian Publish]].

```shell
# Iniciar sesión
ob login

# Listar tus sitios Publish
ob publish-list-sites

# Conectar una bóveda local a un sitio Publish
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# Previsualizar cambios sin publicar
ob publish --dry-run

# Publicar cambios
ob publish
```

## Comandos

### `ob publish-list-sites`

Lista todos los sitios Publish disponibles para tu cuenta.

### `ob publish-create-site`

Crea un nuevo sitio Publish.

```
ob publish-create-site --slug <slug>
```

| Opción | Descripción |
| --- | --- |
| `--slug` | Identificador de URL para tu sitio (por ejemplo, `my-notes` crea `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

Conecta una bóveda local a un sitio Publish.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| Opción | Descripción |
| --- | --- |
| `--site` | ID o slug del sitio |
| `--path` | Ruta de la bóveda local (predeterminado: directorio actual) |

### `ob publish`

Publica los cambios de la bóveda en tu sitio. Por defecto, solo se incluyen los archivos con `publish: true` en sus metadatos iniciales.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| Opción | Descripción |
| --- | --- |
| `--path` | Ruta de la bóveda local (predeterminado: directorio actual) |
| `--all` | Incluir todos los archivos, no solo aquellos con la marca de publicación |
| `--dry-run` | Mostrar cambios sin publicar |
| `--yes` | Publicar sin solicitar confirmación |

### `ob publish-config`

Ver o cambiar la configuración de carpetas incluidas/excluidas para una bóveda. Ejecuta sin opciones para mostrar la configuración actual.

```
ob publish-config [--path <local-path>] [options]
```

| Opción | Descripción |
| --- | --- |
| `--path` | Ruta de la bóveda local (predeterminado: directorio actual) |
| `--includes` | Carpetas a incluir, separadas por comas (cadena vacía para limpiar) |
| `--excludes` | Carpetas a excluir, separadas por comas (cadena vacía para limpiar) |

### `ob publish-site-options`

Ver o actualizar la configuración de visualización y navegación de todo el sitio. Ejecuta sin opciones para mostrar la configuración actual.

```
ob publish-site-options [--path <local-path>] [options]
```

| Opción | Descripción |
| --- | --- |
| `--path` | Ruta de la bóveda local (predeterminado: directorio actual) |
| `--site-name` | Nombre de la página web |
| `--index-file` | Ruta del archivo de página de inicio |
| `--logo` | Ruta del archivo de logotipo (cadena vacía para limpiar) |
| `--show-navigation` | Mostrar navegación en la barra lateral |
| `--show-graph` | Mostrar vista gráfica |
| `--show-outline` | Mostrar tabla de contenidos |
| `--show-search` | Mostrar búsqueda |
| `--show-backlinks` | Mostrar enlaces entrantes |
| `--show-hover-preview` | Mostrar previsualización al ponerse encima |
| `--show-theme-toggle` | Mostrar alternador de tema |
| `--default-theme` | Tema predeterminado: `light` o `dark` |
| `--readable-line-length` | Longitud de línea visible |
| `--strict-line-breaks` | Saltos de línea estrictos |
| `--hide-title` | Ocultar título en línea |
| `--sliding-window` | Modo de ventana deslizante |
| `--nav-order` | Orden de navegación, rutas separadas por comas (cadena vacía para limpiar) |
| `--nav-hidden` | Elementos de navegación ocultos, rutas separadas por comas (cadena vacía para limpiar) |

### `ob publish-unlink`

Desconecta una bóveda de un sitio Publish.

```
ob publish-unlink [--path <local-path>]
```
