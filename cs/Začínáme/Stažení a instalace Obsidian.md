---
permalink: install
---
Obsidian je k dispozici pro všechny hlavní desktopové a mobilní platformy. Zde jsou všechny podporované způsoby, jak stáhnout a nainstalovat Obsidian.

## Instalace Obsidian na Windows

1. Otevřete prohlížeč a přejděte na [Stáhnout Obsidian](https://obsidian.md/download).
2. V sekci **Windows** klikněte na **Universal** pro stažení instalačního souboru.
3. Otevřete instalační soubor a postupujte podle pokynů.
4. Otevřete Obsidian stejným způsobem, jakým byste otevřeli jakoukoli jinou aplikaci.

## Instalace Obsidian na macOS

1. Otevřete prohlížeč a přejděte na [Stáhnout Obsidian](https://obsidian.md/download).
2. V sekci **macOS** klikněte na **Universal** pro stažení instalačního souboru.
3. Otevřete instalační soubor.
4. V okně, které se otevře, přetáhněte Obsidian do složky Aplikace.
5. Otevřete Obsidian stejným způsobem, jakým byste otevřeli jakoukoli jinou aplikaci.

## Instalace Obsidian na Linux

Pokud používáte Linux, můžete Obsidian nainstalovat několika způsoby. Postupujte podle pokynů pro balíčkovací systém, který používáte.

### Instalace Obsidian pomocí Snap

1. Otevřete prohlížeč a přejděte na [Stáhnout Obsidian](https://obsidian.md/download).
2. V sekci **Linux** klikněte na **Snap** pro stažení instalačního souboru.
3. Otevřete terminál a přejděte do složky, kam jste stáhli instalační soubor.
4. V terminálu spusťte následující příkaz pro instalaci balíčku Snap: (příznak `--dangerous` je vyžadován, protože Canonical, společnost která vytvořila Snap, nezkontrolovala náš balíček; příznak `--classic` umožňuje Obsidian přistupovat mimo sandbox, kde jsou uloženy vaše poznámky)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Otevřete Obsidian stejným způsobem, jakým byste otevřeli jakoukoli jinou aplikaci.

### Instalace Obsidian pomocí AppImage

1. Otevřete prohlížeč a přejděte na [Stáhnout Obsidian](https://obsidian.md/download).
2. V sekci **Linux** klikněte na **AppImage** pro stažení instalačního souboru.
3. Otevřete terminál a přejděte do složky, kam jste stáhli instalační soubor.
4. V terminálu spusťte následující příkaz pro otevření Obsidian:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
Poznámka: Na Chromeboocích musí být nainstalován balíček `libnss3-dev`, jinak se může zobrazit chyba `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`.

### Instalace Obsidian pomocí Flatpak

1. V terminálu spusťte následující příkaz pro instalaci Obsidian:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Otevřete Obsidian spuštěním následujícího příkazu:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Instalace Obsidian na Android

1. Najděte Obsidian na [Play Store](https://play.google.com/store/apps/details?id=md.obsidian).
2. Klepněte na **Instalovat** pro stažení aplikace.
3. Otevřete Obsidian stejným způsobem, jakým byste otevřeli jakoukoli jinou aplikaci.

Volitelně si můžete stáhnout APK pro Android ze stránky [Stáhnout Obsidian](https://obsidian.md/download).

## Instalace Obsidian na iPhone a iPad

1. Najděte Obsidian na [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. Klepněte na **Získat** pro stažení aplikace.
3. Otevřete Obsidian stejným způsobem, jakým byste otevřeli jakoukoli jinou aplikaci.
