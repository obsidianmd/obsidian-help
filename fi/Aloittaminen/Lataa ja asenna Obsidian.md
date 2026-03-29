---
permalink: install
---
Obsidian on saatavilla kaikille tärkeimmille työpöytä- ja mobiilialustoille. Tässä esitellään kaikki tuetut tavat ladata ja asentaa Obsidian.

## Obsidianin asentaminen Windowsiin

1. Avaa selaimesi ja siirry osoitteeseen [Lataa Obsidian](https://obsidian.md/download).
2. Napsauta **Windows**-kohdan alla **Universal** ladataksesi asennustiedoston.
3. Avaa asennustiedosto ja seuraa ohjeita.
4. Avaa Obsidian samalla tavalla kuin avaisit minkä tahansa muun sovelluksen.

## Obsidianin asentaminen macOS:iin

1. Avaa selaimesi ja siirry osoitteeseen [Lataa Obsidian](https://obsidian.md/download).
2. Napsauta **macOS**-kohdan alla **Universal** ladataksesi asennustiedoston.
3. Avaa asennustiedosto.
4. Vedä avautuvassa ikkunassa Obsidian Ohjelmat-kansioon.
5. Avaa Obsidian samalla tavalla kuin avaisit minkä tahansa muun sovelluksen.

## Obsidianin asentaminen Linuxiin

Jos käytät Linuxia, voit asentaa Obsidianin usealla eri tavalla. Seuraa käyttämäsi paketointijärjestelmän ohjeita.

### Obsidianin asentaminen Snapin avulla

1. Avaa selaimesi ja siirry osoitteeseen [Lataa Obsidian](https://obsidian.md/download).
2. Napsauta **Linux**-kohdan alla **Snap** ladataksesi asennustiedoston.
3. Avaa pääte ja siirry kansioon, johon latasit asennustiedoston.
4. Suorita päätteessä seuraava komento asentaaksesi Snap-paketin: (`--dangerous`-lippu vaaditaan, koska Canonical, Snapin luonut yritys, ei ole tarkistanut pakettia; `--classic`-lippu sallii Obsidianin käyttää tiedostoja hiekkalaatikon ulkopuolelta, missä muistiinpanosi sijaitsevat)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Avaa Obsidian samalla tavalla kuin avaisit minkä tahansa muun sovelluksen.

### Obsidianin asentaminen AppImagen avulla

1. Avaa selaimesi ja siirry osoitteeseen [Lataa Obsidian](https://obsidian.md/download).
2. Napsauta **Linux**-kohdan alla **AppImage** ladataksesi asennustiedoston.
3. Avaa pääte ja siirry kansioon, johon latasit asennustiedoston.
4. Suorita päätteessä seuraava komento avataksesi Obsidianin:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
Huomaa: Chromebookeilla `libnss3-dev`-paketti täytyy olla asennettuna, tai saatat saada virheilmoituksen `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`.

### Obsidianin asentaminen Flatpakin avulla

1. Suorita päätteessä seuraava komento asentaaksesi Obsidianin:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Avaa Obsidian suorittamalla seuraava komento:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Obsidianin asentaminen Androidiin

1. Etsi Obsidian [Play Kaupasta](https://play.google.com/store/apps/details?id=md.obsidian).
2. Napauta **Asenna** ladataksesi sovelluksen.
3. Avaa Obsidian samalla tavalla kuin avaisit minkä tahansa muun sovelluksen.

Voit halutessasi ladata APK-tiedoston Androidille [Lataa Obsidian](https://obsidian.md/download) -sivulta.

## Obsidianin asentaminen iPhoneen ja iPadiin

1. Etsi Obsidian [App Storesta](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. Napauta **Hanki** ladataksesi sovelluksen.
3. Avaa Obsidian samalla tavalla kuin avaisit minkä tahansa muun sovelluksen.
