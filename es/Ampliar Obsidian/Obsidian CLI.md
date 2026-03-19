---
permalink: cli
description: >-
  Todo lo que puedes hacer en Obsidian se puede hacer desde la línea de
  comandos.
---
Obsidian CLI es una interfaz de línea de comandos que te permite controlar Obsidian desde tu terminal para scripting, automatización e integración con herramientas externas.

Todo lo que puedes hacer en Obsidian lo puedes hacer desde la línea de comandos. Obsidian CLI incluso incluye [[#Comandos para desarrolladores|comandos para desarrolladores]] para acceder a herramientas de desarrollo, inspeccionar elementos, tomar capturas de pantalla, recargar complementos y más.

![[obsidian-cli.mp4#interface]]

> [!warning] Requiere el instalador de Obsidian 1.12
> Usar la CLI requiere el instalador de Obsidian 1.12. Consulta la [[Actualizar Obsidian#Actualizaciones del instalador|guía de actualización de la versión del instalador]].

## Instalar Obsidian CLI

Actualiza a la última [[Actualizar Obsidian|versión del instalador de Obsidian]] (1.11.7) y a la última [[Versiones de acceso anticipado|versión de acceso anticipado]] (1.12.x).

Habilita Obsidian CLI en Obsidian:

1. Ve a **Ajustes** → **General**.
2. Activa **Interfaz de línea de comandos**.
3. Sigue las instrucciones para registrar Obsidian CLI.

Si tienes problemas instalando Obsidian CLI, consulta [[#Solución de problemas]].

## Primeros pasos

Obsidian CLI admite tanto comandos individuales como una interfaz de usuario de terminal (TUI) con ayuda interactiva y autocompletado.

> [!info] La aplicación Obsidian debe estar en ejecución
> Obsidian CLI requiere que la aplicación Obsidian esté en ejecución. Si Obsidian no está en ejecución, el primer comando que ejecutes iniciará Obsidian.
>
> ¿Buscas sincronizar sin la aplicación de escritorio? Consulta [[Sync sin interfaz gráfica|Obsidian Headless]].

### Ejecutar un comando

Ejecuta un comando individual sin abrir la TUI:

```shell
# Ejecutar el comando de ayuda
obsidian help
```

### Usar la interfaz de terminal

Usa la TUI ingresando `obsidian`. Los comandos posteriores se pueden ingresar sin `obsidian`.

```shell
# Abrir la TUI, luego ejecutar ayuda
obsidian
help
```

La TUI admite autocompletado, historial de comandos y búsqueda inversa. Usa `Ctrl+R` para buscar en tu historial de comandos. Consulta [[#Atajos de teclado]] para todos los atajos disponibles.

## Ejemplos

Aquí tienes algunos ejemplos de lo que Obsidian CLI puede hacer.

### Uso diario

```shell
# Abrir la nota diaria de hoy
obsidian daily

# Agregar una tarea a tu nota diaria
obsidian daily:append content="- [ ] Comprar víveres"

# Buscar en tu bóveda
obsidian search query="notas de reunión"

# Leer el archivo activo
obsidian read

# Listar todas las tareas de tu nota diaria
obsidian tasks daily

# Crear una nueva nota desde una plantilla
obsidian create name="Viaje a París" template=Viaje

# Listar todas las etiquetas en tu bóveda con conteos
obsidian tags counts

# Comparar dos versiones de un archivo
obsidian diff file=README from=1 to=3
```

### Para desarrolladores

Muchos [[#Comandos para desarrolladores]] están disponibles para el desarrollo de complementos y temas. Estos comandos permiten que herramientas de codificación agéntica prueben y depuren automáticamente.

```shell
# Abrir herramientas de desarrollo
obsidian devtools

# Recargar un plugin de la comunidad que estás desarrollando
obsidian plugin:reload id=my-plugin

# Tomar una captura de pantalla de la aplicación
obsidian dev:screenshot path=screenshot.png

# Ejecutar JavaScript en la consola de la aplicación
obsidian eval code="app.vault.getFiles().length"
```

## Cómo hacerlo

### Usar parámetros y flags

Los comandos pueden usar **parámetros** y **flags**. La mayoría de los comandos no requieren ningún parámetro o flag. Los parámetros requeridos están marcados como `required`. Por ejemplo:

```shell
# Crear una nueva nota usando el nombre predeterminado "Sin título"
obsidian create
```

Un **parámetro** toma un valor, escrito como `parámetro=valor`. Si el valor tiene espacios, envuélvelo en comillas:

```shell
# Crear una nueva nota llamada "Nota" con contenido "Hola mundo"
obsidian create name=Nota content="Hola mundo"
```

Un **flag** es un interruptor booleano sin valor. Inclúyelo para activarlo, por ejemplo `open` y `overwrite` son flags:

```shell
# Crear una nota y abrirla
obsidian create name=Nota content="Hola" open overwrite
```

Para contenido multilínea usa `\n` para nueva línea. Usa `\t` para tabulación.

```bash
obsidian create name=Nota content="# Título\n\nTexto del cuerpo"
```

### Apuntar a una bóveda

Si el directorio de trabajo actual de tu terminal es una carpeta de bóveda, esa bóveda se usa por defecto. De lo contrario, se usa la bóveda actualmente activa.

Usa `vault=<nombre>` o `vault=<id>` para apuntar a una bóveda específica. Esto debe ser el primer parámetro antes de tu comando:

```shell
obsidian vault=Notas daily
obsidian vault="Mi Bóveda" search query="prueba"
```

En la TUI, usa `vault:open <nombre>` o `<id>` para cambiar a una bóveda diferente.

### Apuntar a un archivo

Muchos comandos aceptan los parámetros `file` y `path` para apuntar a un archivo específico. Si no se proporciona ninguno, el comando usa el archivo activo por defecto.

- `file=<nombre>` resuelve el archivo usando la misma resolución de enlaces que los [[Enlaces internos|enlaces wiki]], coincidiendo por nombre de archivo sin requerir la ruta completa o extensión.
- `path=<ruta>` requiere la ruta exacta desde la raíz de la bóveda, por ejemplo `carpeta/nota.md`.

```shell
# Estos son equivalentes si "Receta.md" es el único archivo con ese nombre
obsidian read file=Receta
obsidian read path="Plantillas/Receta.md"
```

### Copiar la salida

Agrega `--copy` a cualquier comando para copiar la salida al portapapeles:

```shell
read --copy
search query="TODO" --copy
```


## Comandos generales

### `help`

Mostrar lista de todos los comandos disponibles.

| Parámetro   | Descripción                              |
| ----------- | ---------------------------------------- |
| `<command>` | Mostrar ayuda para un comando específico. |

### `version`

Mostrar la versión de Obsidian.

### `reload`

Recargar la ventana de la aplicación.

### `restart`

Reiniciar la aplicación.


## Bases

Comandos para [[Introducción a Bases|Bases]].

### `bases`

Listar todos los archivos `.base` en la bóveda.

### `base:views`

Listar vistas en el archivo base actual.

### `base:create`

Crear un nuevo elemento en una base. Usa la vista base activa por defecto si no se especifica un archivo.

```bash
file=<name>        # nombre del archivo base
path=<path>        # ruta del archivo base
view=<name>        # nombre de la vista
name=<name>        # nombre del nuevo archivo
content=<text>     # contenido inicial

open               # abrir archivo después de crear
newtab             # abrir en nueva pestaña
```

### `base:query`

Consultar una base y devolver resultados.

```bash
file=<name>                    # nombre del archivo base
path=<path>                    # ruta del archivo base
view=<name>                    # nombre de la vista a consultar
format=json|csv|tsv|md|paths   # formato de salida (predeterminado: json)
```

## Marcadores

Comandos para [[Marcadores]].

### `bookmarks`

Listar marcadores.

```bash
total              # devolver conteo de marcadores
verbose            # incluir tipos de marcadores
format=json|tsv|csv  # formato de salida (predeterminado: tsv)
```

### `bookmark`

Agregar un marcador.

```bash
file=<path>        # archivo a marcar
subpath=<subpath>  # subruta (encabezado o bloque) dentro del archivo
folder=<path>      # carpeta a marcar
search=<query>     # consulta de búsqueda a marcar
url=<url>          # URL a marcar
title=<title>      # título del marcador
```

## Paleta de comandos

Comandos para la [[Paleta de comandos]] y [[Teclas de acceso rápido]]. Esto incluye todos los comandos registrados por complementos.

### `commands`

Listar IDs de comandos disponibles.

```bash
filter=<prefix>    # filtrar por prefijo de ID
```

### `command`

Ejecutar un comando de Obsidian.

```bash
id=<command-id>    # (required) ID del comando a ejecutar
```

### `hotkeys`

Listar atajos de teclado para todos los comandos.

```bash
total              # devolver conteo de atajos
verbose            # mostrar si el atajo es personalizado
format=json|tsv|csv  # formato de salida (predeterminado: tsv)
```

### `hotkey`

Obtener atajo de teclado para un comando.

```bash
id=<command-id>    # (required) ID del comando

verbose            # mostrar si es personalizado o predeterminado
```

## Notas diarias

Comandos para [[Notas diarias]].

### `daily`

Abrir nota diaria.

```bash
paneType=tab|split|window    # tipo de panel en el que abrir
```

### `daily:path`

Obtener ruta de la nota diaria. Devuelve la ruta esperada incluso si el archivo aún no ha sido creado.

### `daily:read`

Leer contenido de la nota diaria.

### `daily:append`

Agregar contenido al final de la nota diaria.

```bash
content=<text>     # (required) contenido a agregar
paneType=tab|split|window    # tipo de panel en el que abrir

inline             # agregar sin nueva línea
open               # abrir archivo después de agregar
```

### `daily:prepend`

Agregar contenido al inicio de la nota diaria.

```bash
content=<text>     # (required) contenido a anteponer
paneType=tab|split|window    # tipo de panel en el que abrir

inline             # anteponer sin nueva línea
open               # abrir archivo después de agregar
```

## Historial de archivos

### `diff`

Listar o comparar versiones de la [[Recuperación de archivos]] local y [[Introducción a Obsidian Sync|Sync]]. Las versiones están numeradas de la más reciente a la más antigua.

```bash
file=<name>          # nombre del archivo
path=<path>          # ruta del archivo
from=<n>             # número de versión desde donde comparar
to=<n>               # número de versión hasta donde comparar
filter=local|sync    # filtrar por origen de versión
```

**Ejemplos:**

```shell
# Listar todas las versiones del archivo activo
diff

# Listar todas las versiones de un archivo específico
diff file=Receta

# Comparar la última versión con el archivo actual
diff file=Receta from=1

# Comparar dos versiones
diff file=Receta from=2 to=1

# Mostrar solo versiones de Sync
diff filter=sync
```

### `history`

Listar versiones solo de [[Recuperación de archivos]]. Consulta [[#Sync|sync:history]] para el comando equivalente de Sync.

```bash
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo
```

### `history:list`

Listar todos los archivos con historial local.

### `history:read`

Leer una versión del historial local.

```bash
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo
version=<n>        # número de versión (predeterminado: 1)
```

### `history:restore`

Restaurar una versión del historial local.

```bash
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo
version=<n>        # (required) número de versión
```

### `history:open`

Abrir recuperación de archivos.

```bash
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo
```

## Archivos y carpetas

### `file`

Mostrar información del archivo (predeterminado: archivo activo).

```bash
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo
```

Ejemplo:

```
path       Notas/Receta.md
name       Receta
extension  md
size       1024
created    1700000000000
modified   1700001000000
```

### `files`

Listar archivos en la bóveda.

```bash
folder=<path>      # filtrar por carpeta
ext=<extension>    # filtrar por extensión

total              # devolver conteo de archivos
```

### `folder`

Mostrar información de carpeta.

```bash
path=<path>              # (required) ruta de la carpeta
info=files|folders|size  # devolver solo información específica
```

### `folders`

Listar carpetas en la bóveda.

```bash
folder=<path>      # filtrar por carpeta padre

total              # devolver conteo de carpetas
```

### `open`

Abrir un archivo.

```bash
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo

newtab             # abrir en nueva pestaña
```

### `create`

Crear o sobrescribir un archivo.

```bash
name=<name>        # nombre del archivo
path=<path>        # ruta del archivo
content=<text>     # contenido inicial
template=<name>    # plantilla a usar

overwrite          # sobrescribir si el archivo existe
open               # abrir archivo después de crear
newtab             # abrir en nueva pestaña
```

### `read`

Leer contenido del archivo (predeterminado: archivo activo).

```bash
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo
```

### `append`

Agregar contenido al final de un archivo (predeterminado: archivo activo).

```bash
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo
content=<text>     # (required) contenido a agregar

inline             # agregar sin nueva línea
```

### `prepend`

Agregar contenido al inicio después de los metadatos iniciales (predeterminado: archivo activo).

```bash
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo
content=<text>     # (required) contenido a anteponer

inline             # anteponer sin nueva línea
```

### `move`

Mover o renombrar un archivo (predeterminado: archivo activo). Esto actualizará automáticamente los [[Enlaces internos]] si está activado en los [[Configuración#Actualizar los enlaces internos automáticamente|ajustes de la bóveda]].

```bash
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo
to=<path>          # (required) carpeta o ruta de destino
```

### `rename`

Renombrar un archivo (predeterminado: archivo activo). La extensión del archivo se preserva automáticamente si se omite del nuevo nombre. Usa [[#`move`|move]] para renombrar y mover un archivo al mismo tiempo. Esto actualizará automáticamente los [[Enlaces internos]] si está activado en los [[Configuración#Actualizar los enlaces internos automáticamente|ajustes de la bóveda]].

```bash
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo
name=<name>        # (required) nuevo nombre del archivo
```

### `delete`

Eliminar un archivo (predeterminado: archivo activo, va a la papelera por defecto).

```bash
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo

permanent          # omitir papelera, eliminar permanentemente
```

## Enlaces

Comandos para [[Backlinks]] y [[Enlaces salientes]].

### `backlinks`

Listar enlaces de retorno a un archivo (predeterminado: archivo activo).

```bash
file=<name>        # nombre del archivo de destino
path=<path>        # ruta del archivo de destino

counts             # incluir conteo de enlaces
total              # devolver conteo de enlaces de retorno
format=json|tsv|csv  # formato de salida (predeterminado: tsv)
```

### `links`

Listar enlaces salientes de un archivo (predeterminado: archivo activo).

```bash
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo

total              # devolver conteo de enlaces
```

### `unresolved`

Listar enlaces no resueltos en la bóveda.

```bash
total              # devolver conteo de enlaces no resueltos
counts             # incluir conteo de enlaces
verbose            # incluir archivos de origen
format=json|tsv|csv  # formato de salida (predeterminado: tsv)
```

### `orphans`

Listar archivos sin enlaces entrantes.

```bash
total              # devolver conteo de huérfanos
```

### `deadends`

Listar archivos sin enlaces salientes.

```bash
total              # devolver conteo de callejones sin salida
```

## Esquema

Comandos para [[Esquema]].

### `outline`

Mostrar encabezados del archivo actual.

```bash
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo
format=tree|md|json  # formato de salida (predeterminado: tree)

total              # devolver conteo de encabezados
```

## Complementos

Comandos para [[Complementos principales]] y [[Complementos de la comunidad]].

### `plugins`

Listar complementos instalados.

```bash
filter=core|community  # filtrar por tipo de complemento

versions               # incluir números de versión
format=json|tsv|csv    # formato de salida (predeterminado: tsv)
```

### `plugins:enabled`

Listar complementos habilitados.

```bash
filter=core|community  # filtrar por tipo de complemento

versions               # incluir números de versión
format=json|tsv|csv    # formato de salida (predeterminado: tsv)
```

### `plugins:restrict`

Activar/desactivar o verificar el modo restringido.

```bash
on                 # activar modo restringido
off                # desactivar modo restringido
```

### `plugin`

Obtener información del complemento.

```bash
id=<plugin-id>     # (required) ID del complemento
```

### `plugin:enable`

Activar un complemento.

```bash
id=<id>                # (required) ID del complemento
filter=core|community  # tipo de complemento
```

### `plugin:disable`

Desactivar un complemento.

```bash
id=<id>                # (required) ID del complemento
filter=core|community  # tipo de complemento
```

### `plugin:install`

Instalar un complemento de la comunidad.

```bash
id=<id>            # (required) ID del complemento

enable             # activar después de instalar
```

### `plugin:uninstall`

Desinstalar un complemento de la comunidad.

```bash
id=<id>            # (required) ID del complemento
```

### `plugin:reload`

Recargar un complemento (para desarrolladores).

```bash
id=<id>            # (required) ID del complemento
```

## Propiedades

Comandos relacionados con [[Propiedades]].

### `aliases`

Listar alias en la bóveda. Usa `active` o `file`/`path` para mostrar alias de un archivo específico.

```bash
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo

total              # devolver conteo de alias
verbose            # incluir rutas de archivos
active             # mostrar alias del archivo activo
```

### `properties`

Listar propiedades en la bóveda. Usa `active` o `file`/`path` para mostrar propiedades de un archivo específico.

```bash
file=<name>        # mostrar propiedades del archivo
path=<path>        # mostrar propiedades de la ruta
name=<name>        # obtener conteo de propiedad específica
sort=count         # ordenar por conteo (predeterminado: nombre)
format=yaml|json|tsv  # formato de salida (predeterminado: yaml)

total              # devolver conteo de propiedades
counts             # incluir conteo de ocurrencias
active             # mostrar propiedades del archivo activo
```

### `property:set`

Establecer una propiedad en un archivo (predeterminado: archivo activo).

```bash
name=<name>                                    # (required) nombre de la propiedad
value=<value>                                  # (required) valor de la propiedad
type=text|list|number|checkbox|date|datetime   # tipo de propiedad
file=<name>                                    # nombre del archivo
path=<path>                                    # ruta del archivo
```

### `property:remove`

Eliminar una propiedad de un archivo (predeterminado: archivo activo).

```bash
name=<name>        # (required) nombre de la propiedad
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo
```

### `property:read`

Leer el valor de una propiedad de un archivo (predeterminado: archivo activo).

```bash
name=<name>        # (required) nombre de la propiedad
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo
```

## Publish

Comandos para [[Introducción a Obsidian Publish|Obsidian Publish]].

### `publish:site`

Mostrar información del sitio de publicación (slug, URL).

### `publish:list`

Listar archivos publicados.

```bash
total              # devolver conteo de archivos publicados
```

### `publish:status`

Listar cambios de publicación.

```bash
total              # devolver conteo de cambios
new                # mostrar solo archivos nuevos
changed            # mostrar solo archivos modificados
deleted            # mostrar solo archivos eliminados
```

### `publish:add`

Publicar un archivo o todos los archivos modificados (predeterminado: archivo activo).

```bash
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo

changed            # publicar todos los archivos modificados
```

### `publish:remove`

Despublicar un archivo (predeterminado: archivo activo).

```bash
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo
```

### `publish:open`

Abrir archivo en el sitio publicado (predeterminado: archivo activo).

```bash
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo
```

## Notas aleatorias

Comandos para [[Nota aleatoria]].

### `random`

Abrir una nota aleatoria.

```bash
folder=<path>      # limitar a carpeta

newtab             # abrir en nueva pestaña
```

### `random:read`

Leer una nota aleatoria (incluye ruta).

```bash
folder=<path>      # limitar a carpeta
```

## Búsqueda

Comandos para [[Búsqueda]].

### `search`

Buscar texto en la bóveda. Devuelve rutas de archivos coincidentes.

```bash
query=<text>       # (required) consulta de búsqueda
path=<folder>      # limitar a carpeta
limit=<n>          # máximo de archivos
format=text|json   # formato de salida (predeterminado: text)

total              # devolver conteo de coincidencias
case               # distinguir mayúsculas y minúsculas
```

### `search:context`

Buscar con contexto de línea coincidente. Devuelve salida estilo grep `ruta:línea: texto`.

```bash
query=<text>       # (required) consulta de búsqueda
path=<folder>      # limitar a carpeta
limit=<n>          # máximo de archivos
format=text|json   # formato de salida (predeterminado: text)

case               # distinguir mayúsculas y minúsculas
```

### `search:open`

Abrir vista de búsqueda.

```bash
query=<text>       # consulta de búsqueda inicial
```

## Sync

Comandos para [[Introducción a Obsidian Sync|Obsidian Sync]].

> [!tip] Sincronizar sin la aplicación de escritorio
> Estos comandos controlan Sync dentro de la aplicación Obsidian en ejecución. Para sincronizar bóvedas desde la línea de comandos sin la aplicación de escritorio, consulta [[Sync sin interfaz gráfica]].

### `sync`

Pausar o reanudar la sincronización.

```bash
on                 # reanudar sincronización
off                # pausar sincronización
```

### `sync:status`

Mostrar estado y uso de sincronización.

### `sync:history`

Listar historial de versiones de sincronización para un archivo (predeterminado: archivo activo).

```bash
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo

total              # devolver conteo de versiones
```

### `sync:read`

Leer una versión de sincronización (predeterminado: archivo activo).

```bash
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo
version=<n>        # (required) número de versión
```

### `sync:restore`

Restaurar una versión de sincronización (predeterminado: archivo activo).

```bash
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo
version=<n>        # (required) número de versión
```

### `sync:open`

Abrir historial de sincronización (predeterminado: archivo activo).

```bash
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo
```

### `sync:deleted`

Listar archivos eliminados en sincronización.

```bash
total              # devolver conteo de archivos eliminados
```

## Etiquetas

Comandos para [[Etiquetas]].

### `tags`

Listar etiquetas en la bóveda. Usa `active` o `file`/`path` para mostrar etiquetas de un archivo específico.

```bash
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo
sort=count         # ordenar por conteo (predeterminado: nombre)

total              # devolver conteo de etiquetas
counts             # incluir conteo de etiquetas
format=json|tsv|csv  # formato de salida (predeterminado: tsv)
active             # mostrar etiquetas del archivo activo
```

### `tag`

Obtener información de etiqueta.

```bash
name=<tag>         # (required) nombre de la etiqueta

total              # devolver conteo de ocurrencias
verbose            # incluir lista de archivos y conteo
```

## Tareas

Comandos para gestión de tareas.

### `tasks`

Listar tareas en la bóveda. Usa `active` o `file`/`path` para mostrar tareas de un archivo específico.

```bash
file=<name>        # filtrar por nombre de archivo
path=<path>        # filtrar por ruta de archivo
status="<char>"    # filtrar por carácter de estado

total              # devolver conteo de tareas
done               # mostrar tareas completadas
todo               # mostrar tareas pendientes
verbose            # agrupar por archivo con números de línea
format=json|tsv|csv  # formato de salida (predeterminado: text)
active             # mostrar tareas del archivo activo
daily              # mostrar tareas de la nota diaria
```

**Ejemplos:**

```bash
# Listar todas las tareas en la bóveda
tasks

# Listar tareas pendientes en la bóveda
tasks todo

# Listar tareas completadas de un archivo específico
tasks file=Receta done

# Listar tareas de la nota diaria de hoy
tasks daily

# Contar tareas en la nota diaria
tasks daily total

# Listar tareas con rutas de archivos y números de línea
tasks verbose

# Filtrar por estado personalizado (comillas para caracteres especiales)
tasks 'status=?'
```

### `task`

Mostrar o actualizar una tarea.

```bash
ref=<path:line>    # referencia de tarea (ruta:línea)
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo
line=<n>           # número de línea
status="<char>"    # establecer carácter de estado

toggle             # alternar estado de tarea
daily              # nota diaria
done               # marcar como hecha
todo               # marcar como pendiente
```

**Ejemplos:**

```bash
# Mostrar información de tarea
task file=Receta line=8
task ref="Receta.md:8"

# Alternar completado de tarea
task ref="Receta.md:8" toggle

# Alternar tarea en nota diaria
task daily line=3 toggle

# Establecer estado de tarea
task file=Receta line=8 done      # → [x]
task file=Receta line=8 todo      # → [ ]
task file=Receta line=8 status=-  # → [-]
task daily line=3 done            # Marcar tarea de nota diaria como hecha
```


## Plantillas

Comandos para [[Plugins/Plantillas|Plantillas]].

### `templates`

Listar plantillas.

```bash
total              # devolver conteo de plantillas
```

### `template:read`

Leer contenido de plantilla.

```bash
name=<template>    # (required) nombre de la plantilla
title=<title>      # título para resolución de variables

resolve            # resolver variables de plantilla
```

### `template:insert`

Insertar plantilla en el archivo activo.

```bash
name=<template>    # (required) nombre de la plantilla
```

**Notas:**
- La opción `resolve` procesa las variables `{{date}}`, `{{time}}`, `{{title}}`
- Usa `create path=<ruta> template=<nombre>` para crear un archivo con una plantilla

## Temas y fragmentos

Comandos para [[Temas]] y [[Fragmentos CSS]].

### `themes`

Listar temas instalados.

```bash
versions           # incluir números de versión
```

### `theme`

Mostrar tema activo u obtener información.

```bash
name=<name>        # nombre del tema para detalles
```

### `theme:set`

Establecer tema activo.

```bash
name=<name>        # (required) nombre del tema (vacío para predeterminado)
```

### `theme:install`

Instalar un tema de la comunidad.

```bash
name=<name>        # (required) nombre del tema

enable             # activar después de instalar
```

### `theme:uninstall`

Desinstalar un tema.

```bash
name=<name>        # (required) nombre del tema
```

### `snippets`

Listar fragmentos CSS instalados.

### `snippets:enabled`

Listar fragmentos CSS habilitados.

### `snippet:enable`

Activar un fragmento CSS.

```bash
name=<name>        # (required) nombre del fragmento
```

### `snippet:disable`

Desactivar un fragmento CSS.

```bash
name=<name>        # (required) nombre del fragmento
```

## Notas únicas

Comandos para [[Creador de nota única]].

### `unique`

Crear nota única.

```bash
name=<text>        # nombre de la nota
content=<text>     # contenido inicial
paneType=tab|split|window    # tipo de panel en el que abrir

open               # abrir archivo después de crear
```

## Bóveda

### `vault`

Mostrar información de la bóveda.

```bash
info=name|path|files|folders|size  # devolver solo información específica
```

### `vaults`

Listar bóvedas conocidas.

```bash
total              # devolver conteo de bóvedas
verbose            # incluir rutas de bóvedas
```

### `vault:open`

Cambiar a una bóveda diferente (solo TUI).

```bash
name=<name>        # (required) nombre de la bóveda
```

## Visor web

Comandos para [[Visor web]].

### `web`

Abrir URL en el visor web.

```bash
url=<url>          # (required) URL a abrir

newtab             # abrir en nueva pestaña
```

## Conteo de palabras

Comandos para [[Contador de palabras]].

### `wordcount`

Contar palabras y caracteres (predeterminado: archivo activo).

```bash
file=<name>        # nombre del archivo
path=<path>        # ruta del archivo

words              # devolver solo conteo de palabras
characters         # devolver solo conteo de caracteres
```

## Espacio de trabajo

Comandos para [[Espacio de trabajo]] y el complemento [[Espacios de trabajo]].

### `workspace`

Mostrar árbol del espacio de trabajo.

```bash
ids                # incluir IDs de elementos del espacio de trabajo
```

### `workspaces`

Listar espacios de trabajo guardados.

```bash
total              # devolver conteo de espacios de trabajo
```

### `workspace:save`

Guardar diseño actual como espacio de trabajo.

```bash
name=<name>        # nombre del espacio de trabajo
```

### `workspace:load`

Cargar un espacio de trabajo guardado.

```bash
name=<name>        # (required) nombre del espacio de trabajo
```

### `workspace:delete`

Eliminar un espacio de trabajo guardado.

```bash
name=<name>        # (required) nombre del espacio de trabajo
```

### `tabs`

Listar pestañas abiertas.

```bash
ids                # incluir IDs de pestañas
```

### `tab:open`

Abrir una nueva pestaña.

```bash
group=<id>         # ID del grupo de pestañas
file=<path>        # archivo a abrir
view=<type>        # tipo de vista a abrir
```

### `recents`

Listar archivos abiertos recientemente.

```bash
total              # devolver conteo de archivos recientes
```

## Comandos para desarrolladores

Comandos para ayudarte a desarrollar [[Complementos de la comunidad]] y [[Temas]]. Aprende más visitando la [documentación para desarrolladores de Obsidian](https://docs.obsidian.md).

### `devtools`

Alternar herramientas de desarrollo de Electron.

### `dev:debug`

Adjuntar/desadjuntar depurador del protocolo Chrome DevTools.

```bash
on                 # adjuntar depurador
off                # desadjuntar depurador
```

### `dev:cdp`

Ejecutar un comando del protocolo Chrome DevTools.

```bash
method=<CDP.method>  # (required) método CDP a llamar
params=<json>        # parámetros del método como JSON
```

### `dev:errors`

Mostrar errores JavaScript capturados.

```bash
clear              # limpiar el búfer de errores
```

### `dev:screenshot`

Tomar una captura de pantalla (devuelve PNG en base64).

```bash
path=<filename>    # ruta del archivo de salida
```

### `dev:console`

Mostrar mensajes de consola capturados.

```bash
limit=<n>                        # máximo de mensajes a mostrar (predeterminado 50)
level=log|warn|error|info|debug  # filtrar por nivel de registro

clear                            # limpiar el búfer de consola
```

### `dev:css`

Inspeccionar CSS con ubicaciones de origen.

```bash
selector=<css>     # (required) selector CSS
prop=<name>        # filtrar por nombre de propiedad
```

### `dev:dom`

Consultar elementos DOM.

```bash
selector=<css>     # (required) selector CSS
attr=<name>        # obtener valor de atributo
css=<prop>         # obtener valor de propiedad CSS

total              # devolver conteo de elementos
text               # devolver contenido de texto
inner              # devolver innerHTML en lugar de outerHTML
all                # devolver todas las coincidencias en lugar de la primera
```

### `dev:mobile`

Alternar emulación móvil.

```bash
on                 # activar emulación móvil
off                # desactivar emulación móvil
```

### `eval`

Ejecutar JavaScript y devolver resultado.

```bash
code=<javascript>  # (required) código JavaScript a ejecutar
```

## Atajos de teclado

Estos atajos están disponibles en la [[#Usar la interfaz de terminal|TUI]].

### Navegación

| Acción                                                        | Atajo           |
| ------------------------------------------------------------- | --------------- |
| Mover cursor a la izquierda                                   | `←` / `Ctrl+B`  |
| Mover cursor a la derecha (acepta sugerencia al final de línea) | `→` / `Ctrl+F` |
| Ir al inicio de línea                                         | `Ctrl+A`        |
| Ir al final de línea                                          | `Ctrl+E`        |
| Retroceder una palabra                                        | `Alt+B`         |
| Avanzar una palabra                                           | `Alt+F`         |

### Edición

| Acción                        | Atajo                      |
| ----------------------------- | -------------------------- |
| Eliminar hasta inicio de línea | `Ctrl+U`                   |
| Eliminar hasta final de línea  | `Ctrl+K`                   |
| Eliminar palabra anterior      | `Ctrl+W` / `Alt+Backspace` |

### Autocompletado

| Acción                                                    | Atajo       |
| --------------------------------------------------------- | ----------- |
| Entrar en modo sugerencia / aceptar sugerencia seleccionada | `Tab`       |
| Salir del modo sugerencia                                  | `Shift+Tab` |
| Entrar en modo sugerencia (desde entrada nueva)            | `↓`         |
| Aceptar primera/sugerencia seleccionada (al final de línea) | `→`        |

### Historial

| Acción                                                              | Atajo           |
| ------------------------------------------------------------------- | --------------- |
| Entrada anterior del historial / navegar sugerencias arriba          | `↑` / `Ctrl+P`  |
| Siguiente entrada del historial / navegar sugerencias abajo          | `↓` / `Ctrl+N`  |
| Búsqueda inversa en historial (escribe para filtrar, `Ctrl+R` para ciclar) | `Ctrl+R`  |

### Otros

| Acción                                                          | Atajo               |
| --------------------------------------------------------------- | -------------------- |
| Ejecutar comando o aceptar sugerencia                           | `Enter`              |
| Deshacer autocompletado / salir de modo sugerencia / limpiar entrada | `Escape`         |
| Limpiar pantalla                                                | `Ctrl+L`             |
| Salir                                                           | `Ctrl+C` / `Ctrl+D`  |

## Solución de problemas

Si tienes problemas ejecutando Obsidian CLI:

- Asegúrate de estar usando la última [[Actualizar Obsidian|versión del instalador de Obsidian]] (1.12.4 o superior).
- Reinicia tu terminal después de registrar la CLI para que los cambios en el PATH surtan efecto.
- Obsidian debe estar en ejecución. La CLI se conecta a la instancia de Obsidian en ejecución. Si Obsidian no está en ejecución, el primer comando de la CLI debería iniciar la aplicación.

### Windows

Obsidian CLI en Windows requiere el instalador de Obsidian 1.12.4+. Consulta [[Actualizar Obsidian|Actualización de la versión del instalador]].

Windows usa un redirector de terminal que conecta Obsidian a stdin/stdout correctamente. Esto es necesario porque Obsidian normalmente se ejecuta como una aplicación GUI que es incompatible con las salidas de terminal en Windows. Cuando instalas Obsidian 1.12.4+, el redirector de terminal `Obsidian.com` se agregará en la carpeta donde instalaste el archivo `Obsidian.exe`.

### macOS

El registro de la CLI agrega el directorio binario de Obsidian a tu PATH a través de `~/.zprofile`. Si tienes problemas, verifica lo siguiente:

Tu archivo `~/.zprofile` debería contener la siguiente línea. Si falta, puedes agregarla manualmente:

```
export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"
```

#### Shells alternativos

El registro de la CLI solo modifica `~/.zprofile`, que es usado por zsh (el shell predeterminado de macOS). Si usas un shell diferente, agrega el directorio binario de Obsidian al archivo de configuración de tu shell manualmente:

- Bash: agrega `export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"` a `~/.bash_profile`
- Fish: ejecuta `fish_add_path /Applications/Obsidian.app/Contents/MacOS`


### Linux

El registro de la CLI crea un enlace simbólico en `/usr/local/bin/obsidian` que apunta al binario de Obsidian (requiere sudo).

#### AppImage

Para instalaciones AppImage, el enlace simbólico apunta al archivo `.AppImage` en lugar del binario interno, ya que la ruta de montaje cambia con cada inicio. Si sudo falla, el enlace simbólico se crea en `~/.local/bin/obsidian` como alternativa. Si tienes problemas, verifica lo siguiente.

Comprueba que el enlace simbólico existe y apunta al binario correcto:

```
ls -l /usr/local/bin/obsidian
```

Si el enlace simbólico falta, créalo manualmente:

```
sudo ln -s /path/to/obsidian /usr/local/bin/obsidian
```

Si el enlace simbólico fue creado en `~/.local/bin/` en su lugar, asegúrate de que ese directorio esté en tu PATH. Agrega lo siguiente a tu `~/.bashrc` o `~/.zshrc`:

```
export PATH="$PATH:$HOME/.local/bin"
```

Si el enlace simbólico se rompe después de mover o renombrar el archivo `.AppImage`, vuelve a registrar la CLI o actualiza el enlace simbólico manualmente.

#### Snap

El paquete Snap almacena los datos de las compilaciones Insider en su propio directorio de datos de usuario. Si la CLI no detecta el `.asar` de la versión Insider, establece `XDG_CONFIG_HOME` para apuntar a la ruta de configuración de Snap:

```
export XDG_CONFIG_HOME="$HOME/snap/obsidian/current/.config"
```

Agrega esto a tu `~/.bashrc` o `~/.zshrc` para hacerlo persistente.


#### Flatpak

Obsidian intenta hacer esto automáticamente, pero a continuación están las instrucciones manuales. Si es una instalación del sistema:

```
ln -s /var/lib/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```

Si es una instalación de usuario:

```
ln -s ~/.local/share/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```
