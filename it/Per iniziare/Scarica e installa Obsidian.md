---
permalink: install
aliases:
  - Download and install Obsidian
---
Obsidian è disponibile per tutte le principali piattaforme desktop e mobile. Ecco tutti i metodi supportati per scaricare e installare Obsidian.

## Installare Obsidian su Windows

1. Aprire il browser e andare a [Scarica Obsidian](https://obsidian.md/it/download).
2. Sotto **Windows**, fare clic su **Universal** per scaricare il file di installazione.
3. Aprire il file di installazione e seguire le istruzioni.
4. Aprire Obsidian come si aprirebbe qualsiasi altra applicazione.

## Installare Obsidian su macOS

1. Aprire il browser e andare a [Scarica Obsidian](https://obsidian.md/it/download).
2. Sotto **macOS**, fare clic su **Universal** per scaricare il file di installazione.
3. Aprire il file di installazione.
4. Nella finestra che si apre, trascinare Obsidian nella cartella Applicazioni.
5. Aprire Obsidian come si aprirebbe qualsiasi altra applicazione.

## Installare Obsidian su Linux

Se si utilizza Linux, è possibile installare Obsidian in diversi modi. Seguire le istruzioni per il sistema di pacchetti in uso.

### Installare Obsidian usando Snap

1. Aprire il browser e andare a [Scarica Obsidian](https://obsidian.md/it/download).
2. Sotto **Linux**, fare clic su **Snap** per scaricare il file di installazione.
3. Aprire un terminale e navigare nella cartella in cui è stato scaricato il file di installazione.
4. Nel terminale, eseguire il seguente comando per installare il pacchetto Snap: (il flag `--dangerous` è necessario perché Canonical, la società che ha creato Snap, non ha revisionato il nostro pacchetto, il flag `--classic` consente a Obsidian di accedere all'esterno della sandbox, dove sono archiviate le note)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Aprire Obsidian come si aprirebbe qualsiasi altra applicazione.

### Installare Obsidian usando AppImage

1. Aprire il browser e andare a [Scarica Obsidian](https://obsidian.md/it/download).
2. Sotto **Linux**, fare clic su **AppImage** per scaricare il file di installazione.
3. Aprire un terminale e navigare nella cartella in cui è stato scaricato il file di installazione.
4. Nel terminale, eseguire il seguente comando per aprire Obsidian:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
Nota: sui Chromebook, è necessario installare il pacchetto `libnss3-dev` altrimenti potrebbe comparire l'errore `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`.

### Installare Obsidian usando Flatpak

1. Nel terminale, eseguire il seguente comando per installare Obsidian:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Aprire Obsidian eseguendo il seguente comando:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Installare Obsidian su Android

1. Trovare Obsidian sul [Play Store](https://play.google.com/store/apps/details?id=md.obsidian).
2. Toccare **Installa** per scaricare l'app.
3. Aprire Obsidian come si aprirebbe qualsiasi altra app.

Facoltativamente, è possibile scaricare l'APK per Android dalla pagina [Scarica Obsidian](https://obsidian.md/it/download).

## Installare Obsidian su iPhone e iPad

1. Trovare Obsidian sull'[App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. Toccare **Ottieni** per scaricare l'app.
3. Aprire Obsidian come si aprirebbe qualsiasi altra app.
