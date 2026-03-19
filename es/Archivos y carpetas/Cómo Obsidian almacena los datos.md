---
permalink: data-storage
publish: true
mobile: true
description: Esta página explica cómo Obsidian almacena sus datos en tu dispositivo.
---
Obsidian almacena tus notas como archivos de texto sin formato con [[Sintaxis de formato básico|formato Markdown]] en una _bóveda_. Una bóveda es una carpeta en tu sistema de archivos local, incluyendo cualquier subcarpeta.

Dado que las notas son archivos de texto sin formato, puedes usar otros editores de texto y gestores de archivos para editar y gestionar notas. Obsidian actualiza automáticamente tu bóveda para mantenerse al día con cualquier cambio externo.

Puedes crear una bóveda en cualquier lugar que tu sistema operativo permita. Obsidian se sincroniza con [[Introducción a Obsidian Sync|Obsidian Sync]], Dropbox, iCloud, OneDrive, Git, y muchos otros servicios de terceros.

Puedes abrir múltiples carpetas como bóvedas individuales, por ejemplo para separar notas del trabajo y de la escuela.

> [!warning] Bóvedas dentro de bóvedas
> Dado que los [[Enlaces internos]] son locales a una bóveda, recomendamos que no crees bóvedas dentro de bóvedas. Los enlaces podrían no actualizarse correctamente.

## Ajustes de la bóveda

Obsidian crea una [[Carpeta de configuración]] `.obsidian` en la carpeta raíz de la bóveda, que contiene las preferencias específicas de esa bóveda, como [[Teclas de acceso rápido|atajos de teclado]], [[Temas|temas]], y [[Complementos de la comunidad|complementos de la comunidad]].

De forma predeterminada, la mayoría de los sistemas operativos ocultan las carpetas que comienzan con un punto (`.`), por lo que podrías necesitar actualizar los ajustes de tu gestor de archivos para verla.

- **macOS**: En Finder, presiona `Cmd+Shift+.` (punto) para mostrar archivos ocultos.
- **Windows**: [Mostrar archivos ocultos](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
+ **GNU/Linux:** En la mayoría de exploradores de archivos, presiona `Ctrl + h` para mostrar archivos ocultos.

> [!tip] Añadir `.obsidian` a Git
> Los archivos `.obsidian/workspace.json` y `.obsidian/workspaces.json` almacenan la disposición actual del espacio de trabajo y se actualizan cada vez que abres un nuevo archivo. Si usas [Git](https://git-scm.com) para gestionar tu bóveda, podrías querer añadir estos archivos a `.gitignore`.

## Ajustes globales

Obsidian almacena los ajustes globales en una carpeta del sistema. La ubicación de la carpeta del sistema depende del sistema operativo que estés usando.

- **macOS**: `/Users/tunombredeusuario/Library/Application Support/obsidian`
- **Windows**: `%APPDATA%\Obsidian\`
- **Linux**: `$XDG_CONFIG_HOME/obsidian/` o `~/.config/obsidian/`

> [!warning] No crees una bóveda en la carpeta del sistema. Esto puede provocar datos corruptos o pérdida de datos.

## IndexedDB

IndexedDB es una base de datos de bajo nivel del lado del cliente que Obsidian utiliza para el almacenamiento del backend. Ayuda a mantener el estado de las conexiones de [[Introducción a Obsidian Sync|Obsidian Sync]], y preserva la [[#Caché de metadatos]] cuando se cierra la aplicación.

> [!warning] Si el [Modo de aislamiento](<https://support.apple.com/en-us/105120>) de Apple está habilitado y Obsidian no está excluido, estos archivos de base de datos no se guardarán, requiriendo reindexación cada vez que se inicie la aplicación.

### Caché de metadatos

Con el fin de proporcionar una experiencia rápida mientras usas la aplicación, Obsidian mantiene un registro local de metadatos sobre los archivos en tu bóveda llamado la **caché de metadatos**. Estos metadatos alimentan muchas funciones a lo largo de la aplicación, desde la vista de gráfico hasta la vista de esquema.

Obsidian mantiene esta caché sincronizada con los archivos de tu bóveda, pero es posible que los datos se desincronicen con los archivos subyacentes. En caso de que esto ocurra en tu bóveda, puedes reconstruir tu caché de metadatos desde los ajustes de la aplicación en la sección *Archivos y enlaces*.
