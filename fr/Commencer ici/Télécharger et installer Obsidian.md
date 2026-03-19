---
permalink: install
localized: '2026-03-18'

---
Obsidian est disponible sur toutes les principales plateformes de bureau et mobiles. Voici toutes les méthodes prises en charge pour télécharger et installer Obsidian.

## Installer Obsidian sur Windows

1. Ouvrez votre navigateur et accédez à [Télécharger Obsidian](https://obsidian.md/fr/download).
2. Sous **Windows**, cliquez sur **Universal** pour télécharger le fichier d'installation.
3. Ouvrez le fichier d'installation et suivez les instructions.
4. Ouvrez Obsidian comme vous le feriez pour n'importe quelle autre application.

## Installer Obsidian sur macOS

1. Ouvrez votre navigateur et accédez à [Télécharger Obsidian](https://obsidian.md/fr/download).
2. Sous **macOS**, cliquez sur **Universal** pour télécharger le fichier d'installation.
3. Ouvrez le fichier d'installation.
4. Dans la fenêtre qui s'ouvre, glissez Obsidian dans le dossier Applications.
5. Ouvrez Obsidian comme vous le feriez pour n'importe quelle autre application.

## Installer Obsidian sur Linux

Si vous utilisez Linux, vous pouvez installer Obsidian de plusieurs manières. Suivez les instructions correspondant au système de paquets que vous utilisez.

### Installer Obsidian avec Snap

1. Ouvrez votre navigateur et accédez à [Télécharger Obsidian](https://obsidian.md/fr/download).
2. Sous **Linux**, cliquez sur **Snap** pour télécharger le fichier d'installation.
3. Ouvrez un terminal et naviguez jusqu'au dossier où vous avez téléchargé le fichier d'installation.
4. Dans le terminal, exécutez la commande suivante pour installer le paquet Snap : (l'option `--dangerous` est requise car Canonical, la société qui a créé Snap, n'a pas vérifié notre paquet ; l'option `--classic` permet à Obsidian d'accéder à l'extérieur du bac à sable, là où vos notes sont stockées)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Ouvrez Obsidian comme vous le feriez pour n'importe quelle autre application.

### Installer Obsidian avec AppImage

1. Ouvrez votre navigateur et accédez à [Télécharger Obsidian](https://obsidian.md/fr/download).
2. Sous **Linux**, cliquez sur **AppImage** pour télécharger le fichier d'installation.
3. Ouvrez un terminal et naviguez jusqu'au dossier où vous avez téléchargé le fichier d'installation.
4. Dans le terminal, exécutez la commande suivante pour ouvrir Obsidian :

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
Remarque : Sur les Chromebooks, le paquet `libnss3-dev` doit être installé, sinon vous pourriez recevoir l'erreur `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`.

### Installer Obsidian avec Flatpak

1. Dans votre terminal, exécutez la commande suivante pour installer Obsidian :

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Ouvrez Obsidian en exécutant la commande suivante :

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Installer Obsidian sur Android

1. Trouvez Obsidian sur le [Play Store](https://play.google.com/store/apps/details?id=md.obsidian).
2. Appuyez sur **Installer** pour télécharger l'application.
3. Ouvrez Obsidian comme vous le feriez pour n'importe quelle autre application.

Vous pouvez également télécharger l'APK pour Android depuis la page [Télécharger Obsidian](https://obsidian.md/fr/download).

## Installer Obsidian sur iPhone et iPad

1. Trouvez Obsidian sur l'[App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. Appuyez sur **Obtenir** pour télécharger l'application.
3. Ouvrez Obsidian comme vous le feriez pour n'importe quelle autre application.
