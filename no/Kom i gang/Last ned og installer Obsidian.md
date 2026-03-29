---
permalink: install
---
Obsidian er tilgjengelig for alle store skrivebords- og mobilplattformer. Her er alle støttede måter å laste ned og installere Obsidian på.

## Installer Obsidian på Windows

1. Åpne nettleseren din og gå til [Last ned Obsidian](https://obsidian.md/download).
2. Under **Windows**, klikk **Universal** for å laste ned installasjonsfilen.
3. Åpne installasjonsfilen og følg instruksjonene.
4. Åpne Obsidian på samme måte som du ville åpnet en hvilken som helst annen applikasjon.

## Installer Obsidian på macOS

1. Åpne nettleseren din og gå til [Last ned Obsidian](https://obsidian.md/download).
2. Under **macOS**, klikk **Universal** for å laste ned installasjonsfilen.
3. Åpne installasjonsfilen.
4. I vinduet som åpnes, dra Obsidian til Programmer-mappen.
5. Åpne Obsidian på samme måte som du ville åpnet en hvilken som helst annen applikasjon.

## Installer Obsidian på Linux

Hvis du bruker Linux, kan du installere Obsidian på flere måter. Følg instruksjonene for pakkesystemet du bruker.

### Installer Obsidian med Snap

1. Åpne nettleseren din og gå til [Last ned Obsidian](https://obsidian.md/download).
2. Under **Linux**, klikk **Snap** for å laste ned installasjonsfilen.
3. Åpne en terminal og naviger til mappen der du lastet ned installasjonsfilen.
4. I terminalen, kjør følgende kommando for å installere Snap-pakken: (`--dangerous`-flagget er nødvendig fordi Canonical, selskapet som laget Snap, ikke har gjennomgått pakken vår, `--classic`-flagget lar Obsidian få tilgang utenfor sandkassen, der notatene dine er lagret)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Åpne Obsidian på samme måte som du ville åpnet en hvilken som helst annen applikasjon.

### Installer Obsidian med AppImage

1. Åpne nettleseren din og gå til [Last ned Obsidian](https://obsidian.md/download).
2. Under **Linux**, klikk **AppImage** for å laste ned installasjonsfilen.
3. Åpne en terminal og naviger til mappen der du lastet ned installasjonsfilen.
4. I terminalen, kjør følgende kommando for å åpne Obsidian:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
Merk: På Chromebooks må pakken `libnss3-dev` være installert, ellers kan du få feilmeldingen `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`.

### Installer Obsidian med Flatpak

1. I terminalen din, kjør følgende kommando for å installere Obsidian:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Åpne Obsidian ved å kjøre følgende kommando:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Installer Obsidian på Android

1. Finn Obsidian på [Play Store](https://play.google.com/store/apps/details?id=md.obsidian).
2. Trykk **Installer** for å laste ned appen.
3. Åpne Obsidian på samme måte som du ville åpnet en hvilken som helst annen app.

Du kan eventuelt laste ned APK-filen for Android fra siden [Last ned Obsidian](https://obsidian.md/download).

## Installer Obsidian på iPhone og iPad

1. Finn Obsidian på [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. Trykk **Hent** for å laste ned appen.
3. Åpne Obsidian på samme måte som du ville åpnet en hvilken som helst annen app.
