---
permalink: install
---
Obsidian ist für alle gängigen Desktop- und Mobilplattformen verfügbar. Hier findest du alle unterstützten Wege, Obsidian herunterzuladen und zu installieren.

## Obsidian unter Windows installieren

1. Öffne deinen Browser und gehe zu [Obsidian herunterladen](https://obsidian.md/download).
2. Klicke unter **Windows** auf **Universal**, um die Installationsdatei herunterzuladen.
3. Öffne die Installationsdatei und folge den Anweisungen.
4. Öffne Obsidian wie jede andere Anwendung.

## Obsidian unter macOS installieren

1. Öffne deinen Browser und gehe zu [Obsidian herunterladen](https://obsidian.md/download).
2. Klicke unter **macOS** auf **Universal**, um die Installationsdatei herunterzuladen.
3. Öffne die Installationsdatei.
4. Ziehe im geöffneten Fenster Obsidian in den Ordner „Programme".
5. Öffne Obsidian wie jede andere Anwendung.

## Obsidian unter Linux installieren

Unter Linux kannst du Obsidian auf verschiedene Weisen installieren. Folge den Anweisungen für das Paketsystem, das du verwendest.

### Obsidian mit Snap installieren

1. Öffne deinen Browser und gehe zu [Obsidian herunterladen](https://obsidian.md/download).
2. Klicke unter **Linux** auf **Snap**, um die Installationsdatei herunterzuladen.
3. Öffne ein Terminal und navigiere zu dem Ordner, in den du die Installationsdatei heruntergeladen hast.
4. Führe im Terminal den folgenden Befehl aus, um das Snap-Paket zu installieren: (Das Flag `--dangerous` ist erforderlich, da Canonical, das Unternehmen hinter Snap, unser Paket nicht überprüft hat. Das Flag `--classic` ermöglicht Obsidian den Zugriff außerhalb der Sandbox, wo deine Notizen gespeichert sind.)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Öffne Obsidian wie jede andere Anwendung.

### Obsidian mit AppImage installieren

1. Öffne deinen Browser und gehe zu [Obsidian herunterladen](https://obsidian.md/download).
2. Klicke unter **Linux** auf **AppImage**, um die Installationsdatei herunterzuladen.
3. Öffne ein Terminal und navigiere zu dem Ordner, in den du die Installationsdatei heruntergeladen hast.
4. Führe im Terminal den folgenden Befehl aus, um Obsidian zu öffnen:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
Hinweis: Auf Chromebooks muss das Paket `libnss3-dev` installiert sein, da du sonst möglicherweise den Fehler `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory` erhältst.

### Obsidian mit Flatpak installieren

1. Führe in deinem Terminal den folgenden Befehl aus, um Obsidian zu installieren:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Öffne Obsidian mit folgendem Befehl:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Obsidian auf Android installieren

1. Finde Obsidian im [Play Store](https://play.google.com/store/apps/details?id=md.obsidian).
2. Tippe auf **Installieren**, um die App herunterzuladen.
3. Öffne Obsidian wie jede andere App.

Optional kannst du die APK für Android von der Seite [Obsidian herunterladen](https://obsidian.md/download) beziehen.

## Obsidian auf iPhone und iPad installieren

1. Finde Obsidian im [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. Tippe auf **Laden**, um die App herunterzuladen.
3. Öffne Obsidian wie jede andere App.
