---
permalink: install
aliases:
  - Download and install Obsidian
---
Obsidian este disponibil pentru toate platformele majore de desktop și mobile. Acestea sunt toate modalitățile acceptate de a descărca și instala Obsidian.

## Instalați Obsidian pe Windows

1. Deschideți browserul și accesați [Descărcați Obsidian](https://obsidian.md/download).
2. La secțiunea **Windows**, apăsați **Universal** pentru a descărca fișierul de instalare.
3. Deschideți fișierul de instalare și urmați instrucțiunile.
4. Deschideți Obsidian la fel cum ați deschide orice altă aplicație.

## Instalați Obsidian pe macOS

1. Deschideți browserul și accesați [Descărcați Obsidian](https://obsidian.md/download).
2. La secțiunea **macOS**, apăsați **Universal** pentru a descărca fișierul de instalare.
3. Deschideți fișierul de instalare.
4. În fereastra care se deschide, trageți Obsidian în directorul Applications.
5. Deschideți Obsidian la fel cum ați deschide orice altă aplicație.

## Instalați Obsidian pe Linux

Dacă folosiți Linux, puteți instala Obsidian în mai multe moduri. Urmați instrucțiunile pentru sistemul de pachete pe care îl folosiți.

### Instalați Obsidian folosind Snap

1. Deschideți browserul și accesați [Descărcați Obsidian](https://obsidian.md/download).
2. La secțiunea **Linux**, apăsați **Snap** pentru a descărca fișierul de instalare.
3. Deschideți un terminal și navigați către directorul în care ați descărcat fișierul de instalare.
4. În terminal, rulați următoarea comandă pentru a instala pachetul Snap: (opțiunea `--dangerous` este necesară deoarece Canonical, compania care a creat Snap, nu a revizuit pachetul nostru, iar opțiunea `--classic` permite Obsidian să acceseze zone din afara sandbox-ului, unde vă sunt stocate notele)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Deschideți Obsidian la fel cum ați deschide orice altă aplicație.

### Instalați Obsidian folosind AppImage

1. Deschideți browserul și accesați [Descărcați Obsidian](https://obsidian.md/download).
2. La secțiunea **Linux**, apăsați **AppImage** pentru a descărca fișierul de instalare.
3. Deschideți un terminal și navigați către directorul în care ați descărcat fișierul de instalare.
4. În terminal, rulați următoarea comandă pentru a deschide Obsidian:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
Notă: Pe Chromebook-uri, pachetul `libnss3-dev` trebuie să fie instalat, altfel puteți primi eroarea `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`.

### Instalați Obsidian folosind Flatpak

1. În terminal, rulați următoarea comandă pentru a instala Obsidian:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Deschideți Obsidian rulând următoarea comandă:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Instalați Obsidian pe Android

1. Găsiți Obsidian pe [Play Store](https://play.google.com/store/apps/details?id=md.obsidian).
2. Apăsați **Instalare** pentru a descărca aplicația.
3. Deschideți Obsidian la fel cum ați deschide orice altă aplicație.

Puteți descărca opțional fișierul APK pentru Android de pe pagina [Descărcați Obsidian](https://obsidian.md/download).

## Instalați Obsidian pe iPhone și iPad

1. Găsiți Obsidian pe [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. Apăsați **Obțineți** pentru a descărca aplicația.
3. Deschideți Obsidian la fel cum ați deschide orice altă aplicație.
