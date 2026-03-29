---
permalink: install
---
Obsidian is beschikbaar voor alle belangrijke desktop- en mobiele platformen. Dit zijn alle ondersteunde manieren om Obsidian te downloaden en installeren.

## Obsidian installeren op Windows

1. Open je browser en ga naar [Obsidian downloaden](https://obsidian.md/download).
2. Klik onder **Windows** op **Universal** om het installatiebestand te downloaden.
3. Open het installatiebestand en volg de instructies.
4. Open Obsidian op dezelfde manier als elke andere applicatie.

## Obsidian installeren op macOS

1. Open je browser en ga naar [Obsidian downloaden](https://obsidian.md/download).
2. Klik onder **macOS** op **Universal** om het installatiebestand te downloaden.
3. Open het installatiebestand.
4. Sleep Obsidian in het venster dat opent naar de map Programma's.
5. Open Obsidian op dezelfde manier als elke andere applicatie.

## Obsidian installeren op Linux

Als je Linux gebruikt, kun je Obsidian op verschillende manieren installeren. Volg de instructies voor het pakketbeheersysteem dat je gebruikt.

### Obsidian installeren met Snap

1. Open je browser en ga naar [Obsidian downloaden](https://obsidian.md/download).
2. Klik onder **Linux** op **Snap** om het installatiebestand te downloaden.
3. Open een terminal en navigeer naar de map waar je het installatiebestand hebt gedownload.
4. Voer in de terminal de volgende opdracht uit om het Snap-pakket te installeren: (de `--dangerous`-vlag is vereist omdat Canonical, het bedrijf dat Snap heeft gemaakt, ons pakket niet heeft beoordeeld; de `--classic`-vlag staat Obsidian toe om buiten de sandbox te werken, waar je notities zijn opgeslagen)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Open Obsidian op dezelfde manier als elke andere applicatie.

### Obsidian installeren met AppImage

1. Open je browser en ga naar [Obsidian downloaden](https://obsidian.md/download).
2. Klik onder **Linux** op **AppImage** om het installatiebestand te downloaden.
3. Open een terminal en navigeer naar de map waar je het installatiebestand hebt gedownload.
4. Voer in de terminal de volgende opdracht uit om Obsidian te openen:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
Let op: Op Chromebooks moet het pakket `libnss3-dev` geïnstalleerd zijn, anders kun je de fout `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory` krijgen.

### Obsidian installeren met Flatpak

1. Voer in je terminal de volgende opdracht uit om Obsidian te installeren:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Open Obsidian door de volgende opdracht uit te voeren:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Obsidian installeren op Android

1. Zoek Obsidian in de [Play Store](https://play.google.com/store/apps/details?id=md.obsidian).
2. Tik op **Installeren** om de app te downloaden.
3. Open Obsidian op dezelfde manier als elke andere app.

Je kunt optioneel de APK voor Android downloaden vanaf de pagina [Obsidian downloaden](https://obsidian.md/download).

## Obsidian installeren op iPhone en iPad

1. Zoek Obsidian in de [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. Tik op **Downloaden** om de app te downloaden.
3. Open Obsidian op dezelfde manier als elke andere app.
