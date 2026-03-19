---
permalink: install
---
Obsidian está disponible para todas las principales plataformas de escritorio y móviles. Estas son todas las formas compatibles de descargar e instalar Obsidian.

## Instalar Obsidian en Windows

1. Abre tu navegador y ve a [Descargar Obsidian](https://obsidian.md/download).
2. En **Windows**, haz clic en **Universal** para descargar el archivo de instalación.
3. Abre el archivo de instalación y sigue las instrucciones.
4. Abre Obsidian de la misma forma en que abrirías cualquier otra aplicación.

## Instalar Obsidian en macOS

1. Abre tu navegador y ve a [Descargar Obsidian](https://obsidian.md/download).
2. En **macOS**, haz clic en **Universal** para descargar el archivo de instalación.
3. Abre el archivo de instalación.
4. En la ventana que se abre, arrastra Obsidian a la carpeta Aplicaciones.
5. Abre Obsidian de la misma forma en que abrirías cualquier otra aplicación.

## Instalar Obsidian en Linux

Si usas Linux, puedes instalar Obsidian de varias formas. Sigue las instrucciones del sistema de empaquetado que estés utilizando.

### Instalar Obsidian usando Snap

1. Abre tu navegador y ve a [Descargar Obsidian](https://obsidian.md/download).
2. En **Linux**, haz clic en **Snap** para descargar el archivo de instalación.
3. Abre una terminal y navega a la carpeta donde descargaste el archivo de instalación.
4. En la terminal, ejecuta el siguiente comando para instalar el paquete Snap: (la bandera `--dangerous` es necesaria porque Canonical, la empresa que creó Snap, no revisó nuestro paquete; la bandera `--classic` permite que Obsidian acceda fuera del sandbox, donde se almacenan tus notas)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Abre Obsidian de la misma forma en que abrirías cualquier otra aplicación.

### Instalar Obsidian usando AppImage

1. Abre tu navegador y ve a [Descargar Obsidian](https://obsidian.md/download).
2. En **Linux**, haz clic en **AppImage** para descargar el archivo de instalación.
3. Abre una terminal y navega a la carpeta donde descargaste el archivo de instalación.
4. En la terminal, ejecuta el siguiente comando para abrir Obsidian:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
Nota: En Chromebooks, el paquete `libnss3-dev` debe estar instalado o podrías recibir el error `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`.

### Instalar Obsidian usando Flatpak

1. En tu terminal, ejecuta el siguiente comando para instalar Obsidian:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Abre Obsidian ejecutando el siguiente comando:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Instalar Obsidian en Android

1. Encuentra Obsidian en la [Play Store](https://play.google.com/store/apps/details?id=md.obsidian).
2. Toca **Instalar** para descargar la aplicación.
3. Abre Obsidian de la misma forma en que abrirías cualquier otra aplicación.

Opcionalmente, puedes descargar el APK para Android desde la página [Descargar Obsidian](https://obsidian.md/download).

## Instalar Obsidian en iPhone y iPad

1. Encuentra Obsidian en la [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. Toca **Obtener** para descargar la aplicación.
3. Abre Obsidian de la misma forma en que abrirías cualquier otra aplicación.
