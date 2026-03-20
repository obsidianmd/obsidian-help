---
permalink: install
---
Obsidian ist für alle gängigen Desktop- und Mobilplattformen verfügbar. Hier finden Sie alle unterstützten Wege, Obsidian herunterzuladen und zu installieren.

## Obsidian unter Windows installieren

1. Öffnen Sie Ihren Browser und gehen Sie zu [Obsidian herunterladen](https://obsidian.md/download).
2. Klicken Sie unter **Windows** auf **Universal**, um die Installationsdatei herunterzuladen.
3. Öffnen Sie die Installationsdatei und folgen Sie den Anweisungen.
4. Öffnen Sie Obsidian wie jede andere Anwendung.

## Obsidian unter macOS installieren

1. Öffnen Sie Ihren Browser und gehen Sie zu [Obsidian herunterladen](https://obsidian.md/download).
2. Klicken Sie unter **macOS** auf **Universal**, um die Installationsdatei herunterzuladen.
3. Öffnen Sie die Installationsdatei.
4. Ziehen Sie im geöffneten Fenster Obsidian in den Ordner „Programme".
5. Öffnen Sie Obsidian wie jede andere Anwendung.

## Obsidian unter Linux installieren

Unter Linux können Sie Obsidian auf verschiedene Weisen installieren. Folgen Sie den Anweisungen für das Paketsystem, das Sie verwenden.

### Obsidian mit Snap installieren

1. Öffnen Sie Ihren Browser und gehen Sie zu [Obsidian herunterladen](https://obsidian.md/download).
2. Klicken Sie unter **Linux** auf **Snap**, um die Installationsdatei herunterzuladen.
3. Öffnen Sie ein Terminal und navigieren Sie zu dem Ordner, in den Sie die Installationsdatei heruntergeladen haben.
4. Führen Sie im Terminal den folgenden Befehl aus, um das Snap-Paket zu installieren: (Das Flag `--dangerous` ist erforderlich, da Canonical, das Unternehmen hinter Snap, unser Paket nicht überprüft hat. Das Flag `--classic` ermöglicht Obsidian den Zugriff außerhalb der Sandbox, wo Ihre Notizen gespeichert sind.)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Öffnen Sie Obsidian wie jede andere Anwendung.

### Obsidian mit AppImage installieren

1. Öffnen Sie Ihren Browser und gehen Sie zu [Obsidian herunterladen](https://obsidian.md/download).
2. Klicken Sie unter **Linux** auf **AppImage**, um die Installationsdatei herunterzuladen.
3. Öffnen Sie ein Terminal und navigieren Sie zu dem Ordner, in den Sie die Installationsdatei heruntergeladen haben.
4. Führen Sie im Terminal den folgenden Befehl aus, um Obsidian zu öffnen:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
Hinweis: Auf Chromebooks muss das Paket `libnss3-dev` installiert sein, da Sie sonst möglicherweise den Fehler `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory` erhalten.

### Obsidian mit Flatpak installieren

1. Führen Sie in Ihrem Terminal den folgenden Befehl aus, um Obsidian zu installieren:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Öffnen Sie Obsidian mit folgendem Befehl:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Obsidian auf Android installieren

1. Finden Sie Obsidian im [Play Store](https://play.google.com/store/apps/details?id=md.obsidian).
2. Tippen Sie auf **Installieren**, um die App herunterzuladen.
3. Öffnen Sie Obsidian wie jede andere App.

Optional können Sie die APK für Android von der Seite [Obsidian herunterladen](https://obsidian.md/download) beziehen.

## Obsidian auf iPhone und iPad installieren

1. Finden Sie Obsidian im [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. Tippen Sie auf **Laden**, um die App herunterzuladen.
3. Öffnen Sie Obsidian wie jede andere App.
