---
permalink: install
---
Obsidian finns tillgängligt för alla större plattformar för dator och mobil. Här är alla sätt att ladda ner och installera Obsidian som stöds.

## Installera Obsidian på Windows

1. Öppna din webbläsare och gå till [Ladda ner Obsidian](https://obsidian.md/download).
2. Under **Windows**, klicka på **Universal** för att ladda ner installationsfilen.
3. Öppna installationsfilen och följ instruktionerna.
4. Öppna Obsidian på samma sätt som du skulle öppna vilken annan app som helst.

## Installera Obsidian på macOS

1. Öppna din webbläsare och gå till [Ladda ner Obsidian](https://obsidian.md/download).
2. Under **macOS**, klicka på **Universal** för att ladda ner installationsfilen.
3. Öppna installationsfilen.
4. I fönstret som öppnas, dra Obsidian till mappen Program.
5. Öppna Obsidian på samma sätt som du skulle öppna vilken annan app som helst.

## Installera Obsidian på Linux

Om du använder Linux kan du installera Obsidian på flera sätt. Följ instruktionerna för det paketeringssystem du använder.

### Installera Obsidian med Snap

1. Öppna din webbläsare och gå till [Ladda ner Obsidian](https://obsidian.md/download).
2. Under **Linux**, klicka på **Snap** för att ladda ner installationsfilen.
3. Öppna en terminal och navigera till mappen där du laddade ner installationsfilen.
4. I terminalen, kör följande kommando för att installera Snap-paketet: (flaggan `--dangerous` krävs eftersom Canonical, företaget som skapade Snap, inte har granskat vårt paket, flaggan `--classic` tillåter Obsidian att komma åt utanför sandlådan, där dina anteckningar lagras)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Öppna Obsidian på samma sätt som du skulle öppna vilken annan app som helst.

### Installera Obsidian med AppImage

1. Öppna din webbläsare och gå till [Ladda ner Obsidian](https://obsidian.md/download).
2. Under **Linux**, klicka på **AppImage** för att ladda ner installationsfilen.
3. Öppna en terminal och navigera till mappen där du laddade ner installationsfilen.
4. I terminalen, kör följande kommando för att öppna Obsidian:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
Obs: På Chromebooks måste paketet `libnss3-dev` vara installerat, annars kan du få felmeddelandet `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`.

### Installera Obsidian med Flatpak

1. I din terminal, kör följande kommando för att installera Obsidian:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Öppna Obsidian genom att köra följande kommando:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Installera Obsidian på Android

1. Hitta Obsidian på [Play Store](https://play.google.com/store/apps/details?id=md.obsidian).
2. Tryck på **Installera** för att ladda ner appen.
3. Öppna Obsidian på samma sätt som du skulle öppna vilken annan app som helst.

Du kan valfritt ladda ner APK-filen för Android från sidan [Ladda ner Obsidian](https://obsidian.md/download).

## Installera Obsidian på iPhone och iPad

1. Hitta Obsidian på [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. Tryck på **Hämta** för att ladda ner appen.
3. Öppna Obsidian på samma sätt som du skulle öppna vilken annan app som helst.
