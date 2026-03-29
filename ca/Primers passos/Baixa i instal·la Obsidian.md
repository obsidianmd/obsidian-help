---
permalink: install
---
Obsidian està disponible per a totes les principals plataformes d'escriptori i mòbils. Aquestes són totes les maneres compatibles de baixar i instal·lar Obsidian.

## Instal·lar Obsidian a Windows

1. Obre el teu navegador i ves a [Baixar Obsidian](https://obsidian.md/download).
2. Sota **Windows**, fes clic a **Universal** per baixar el fitxer d'instal·lació.
3. Obre el fitxer d'instal·lació i segueix les instruccions.
4. Obre Obsidian de la mateixa manera que obres qualsevol altra aplicació.

## Instal·lar Obsidian a macOS

1. Obre el teu navegador i ves a [Baixar Obsidian](https://obsidian.md/download).
2. Sota **macOS**, fes clic a **Universal** per baixar el fitxer d'instal·lació.
3. Obre el fitxer d'instal·lació.
4. A la finestra que s'obre, arrossega Obsidian a la carpeta Aplicacions.
5. Obre Obsidian de la mateixa manera que obres qualsevol altra aplicació.

## Instal·lar Obsidian a Linux

Si fas servir Linux, pots instal·lar Obsidian de diverses maneres. Segueix les instruccions del sistema d'empaquetament que utilitzis.

### Instal·lar Obsidian amb Snap

1. Obre el teu navegador i ves a [Baixar Obsidian](https://obsidian.md/download).
2. Sota **Linux**, fes clic a **Snap** per baixar el fitxer d'instal·lació.
3. Obre un terminal i navega fins a la carpeta on has baixat el fitxer d'instal·lació.
4. Al terminal, executa la comanda següent per instal·lar el paquet Snap: (el flag `--dangerous` és necessari perquè Canonical, l'empresa que va crear Snap, no ha revisat el nostre paquet, el flag `--classic` permet a Obsidian accedir fora de la zona aïllada, on s'emmagatzemen les teves notes)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Obre Obsidian de la mateixa manera que obres qualsevol altra aplicació.

### Instal·lar Obsidian amb AppImage

1. Obre el teu navegador i ves a [Baixar Obsidian](https://obsidian.md/download).
2. Sota **Linux**, fes clic a **AppImage** per baixar el fitxer d'instal·lació.
3. Obre un terminal i navega fins a la carpeta on has baixat el fitxer d'instal·lació.
4. Al terminal, executa la comanda següent per obrir Obsidian:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
Nota: Als Chromebook, cal tenir instal·lat el paquet `libnss3-dev` o podries rebre l'error `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`.

### Instal·lar Obsidian amb Flatpak

1. Al teu terminal, executa la comanda següent per instal·lar Obsidian:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Obre Obsidian executant la comanda següent:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Instal·lar Obsidian a Android

1. Troba Obsidian a [Play Store](https://play.google.com/store/apps/details?id=md.obsidian).
2. Toca **Instal·la** per baixar l'aplicació.
3. Obre Obsidian de la mateixa manera que obres qualsevol altra aplicació.

Opcionalment, pots baixar l'APK per a Android des de la pàgina [Baixar Obsidian](https://obsidian.md/download).

## Instal·lar Obsidian a iPhone i iPad

1. Troba Obsidian a l'[App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. Toca **Obtenir** per baixar l'aplicació.
3. Obre Obsidian de la mateixa manera que obres qualsevol altra aplicació.
