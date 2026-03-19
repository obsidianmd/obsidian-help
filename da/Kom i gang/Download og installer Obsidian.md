---
permalink: installation
---
Obsidian er tilgængelig på alle større desktoppe og mobile platforme.
Denne side beskriver alle de supporterede måder du kan downloade og installere 
Obsidian på.

## Installation af Obsidian på Windows

1. Åben din browser og gå til [Download Obsidian](https://obsidian.md/download)
2. Under **Windows** klikker du på **64-bit installer** for at downloade installationsfilen
3. Start installationsfilen og følg instruktionerne
4. Åben Obsidian på samme måde som du ville åbne enhver anden applikation

## Installation af Obsidian på macOS

1. Åben din browser og gå til [Download Obsidian](https://obsidian.md/download)
2. Under **macOS** klikker du på **Universal DMG (Intel and M1)** for at downloade installationsfilen
3. Start installationsfilen
4. I vinduet der åbnes, trækker du Obsidian til Applikationsmappen
5. Åben Obsidian på samme måde som du ville åbne enhver anden applikation

## Installation af Obsidian på Linux

Hvis du benytter Linux kan du installere Obsidian på flere måder. Følg instruktionerne til det pakkesystem du anvender.

### Installation af Obsidian ved hjælp af Snap

1. Åben din browser og gå til [Download Obsidian](https://obsidian.md/download)
2. Under **Linux** kliker du på **Snap** for at downloade installationsfilen
3. Åben et terminalvindue og naviger til den mappe, hvor du har installeret installationsfilen
4. I terminalvinduet skal du køre nedenstående kommando for at installere Snap pakkeudgaven af Obsidian (Bemærk at `--dangerous` flaget kræves fordi firmaet Canonical, som har udviklet Snap, ikke har reviewet vores pakke. Flaget `--classic` giver Obsidian tilladelse til at få adgang til dit filsystem udenfor den sandkasse, hvor dine noter er gemt)   
   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```
5. Åben Obsidian på samme måde som du ville åbne enhver anden applikation

### Installation af Obsidian ved hjælp af AppImage

1. Åben din browser og gå til [Download Obsidian](https://obsidian.md/download)
2. Under **Linux** kliker du på **AppImage** for at downloade installationsfilen
3. Åben et terminalvindue og naviger til den mappe, hvor du har installeret installationsfilen
4. I terminalvinduet skal du køre nedenstående kommando for at åbne Obsidian:
   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```

Note: På Chromebooks skal pakken `libnss3-dev` være installeret ellers kan du få fejlbeskeden: `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`.

### Installation af Obsidian ved hjælp af Flatpak

1. Åben et terminalvindue og kør følgende kommando for at installere Obsidian:
   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```
2. Åben Obsidian ved at køre følgende kommando:
   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Installation af Obsidian på Android

1. Find Obsidian i [Play Butikken](https://play.google.com/store/apps/details?id=md.obsidian)
2. Tryk på **Hent** for at downloade appen
3. Åben Obsidian på samme måde som du ville åbne enhver anden applikation

## Installation af Obsidian på iPhone og iPad

1. Find Obsidian i [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442)
2. Tryk på **Hent** for at downloade appen
3. Åben Obsidian på samme måde som du ville åbne enhver anden applikation
