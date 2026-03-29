---
permalink: install
---
Obsidian je dostupný pre všetky hlavné desktopové a mobilné platformy. Toto sú všetky podporované spôsoby stiahnutia a inštalácie Obsidian.

## Inštalácia Obsidian na Windows

1. Otvorte prehliadač a prejdite na stránku [Stiahnuť Obsidian](https://obsidian.md/download).
2. V časti **Windows** kliknite na **Universal** a stiahnite inštalačný súbor.
3. Otvorte inštalačný súbor a postupujte podľa pokynov.
4. Otvorte Obsidian rovnako, ako by ste otvorili akúkoľvek inú aplikáciu.

## Inštalácia Obsidian na macOS

1. Otvorte prehliadač a prejdite na stránku [Stiahnuť Obsidian](https://obsidian.md/download).
2. V časti **macOS** kliknite na **Universal** a stiahnite inštalačný súbor.
3. Otvorte inštalačný súbor.
4. V okne, ktoré sa otvorí, presuňte Obsidian do priečinka Aplikácie.
5. Otvorte Obsidian rovnako, ako by ste otvorili akúkoľvek inú aplikáciu.

## Inštalácia Obsidian na Linux

Ak používate Linux, môžete Obsidian nainštalovať niekoľkými spôsobmi. Postupujte podľa pokynov pre balíčkovací systém, ktorý používate.

### Inštalácia Obsidian pomocou Snap

1. Otvorte prehliadač a prejdite na stránku [Stiahnuť Obsidian](https://obsidian.md/download).
2. V časti **Linux** kliknite na **Snap** a stiahnite inštalačný súbor.
3. Otvorte terminál a prejdite do priečinka, kde ste stiahli inštalačný súbor.
4. V termináli spustite nasledujúci príkaz na inštaláciu balíčka Snap: (príznak `--dangerous` je potrebný, pretože spoločnosť Canonical, ktorá vytvorila Snap, neskontrolovala náš balíček, príznak `--classic` umožňuje Obsidian pristupovať mimo sandboxu, kde sú uložené vaše poznámky)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Otvorte Obsidian rovnako, ako by ste otvorili akúkoľvek inú aplikáciu.

### Inštalácia Obsidian pomocou AppImage

1. Otvorte prehliadač a prejdite na stránku [Stiahnuť Obsidian](https://obsidian.md/download).
2. V časti **Linux** kliknite na **AppImage** a stiahnite inštalačný súbor.
3. Otvorte terminál a prejdite do priečinka, kde ste stiahli inštalačný súbor.
4. V termináli spustite nasledujúci príkaz na otvorenie Obsidian:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
Poznámka: Na Chromebookoch musí byť nainštalovaný balíček `libnss3-dev`, inak sa môže zobraziť chyba `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`.

### Inštalácia Obsidian pomocou Flatpak

1. V termináli spustite nasledujúci príkaz na inštaláciu Obsidian:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Otvorte Obsidian spustením nasledujúceho príkazu:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Inštalácia Obsidian na Android

1. Nájdite Obsidian v [Play Store](https://play.google.com/store/apps/details?id=md.obsidian).
2. Klepnite na **Inštalovať** a stiahnite aplikáciu.
3. Otvorte Obsidian rovnako, ako by ste otvorili akúkoľvek inú aplikáciu.

Voliteľne si môžete stiahnuť APK pre Android zo stránky [Stiahnuť Obsidian](https://obsidian.md/download).

## Inštalácia Obsidian na iPhone a iPad

1. Nájdite Obsidian v [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. Klepnite na **Získať** a stiahnite aplikáciu.
3. Otvorte Obsidian rovnako, ako by ste otvorili akúkoľvek inú aplikáciu.
