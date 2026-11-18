---
permalink: install
---
Obsidian даступны на ўсіх асноўных настольных і мабільных платформах. Ніжэй апісаны ўсе падтрымліваемыя спосабы спампаваць і ўсталяваць Obsidian.

## Усталяванне Obsidian на Windows

1. Адкрыйце браўзер і перайдзіце на старонку [Download Obsidian](https://obsidian.md/download).
2. У раздзеле **Windows** націсніце **Universal**, каб спампаваць файл усталявання.
3. Адкрыйце файл усталявання і выконвайце інструкцыі.
4. Адкрывайце Obsidian так жа, як любую іншую праграму.

## Усталяванне Obsidian на macOS

1. Адкрыйце браўзер і перайдзіце на старонку [Download Obsidian](https://obsidian.md/download).
2. У раздзеле **macOS** націсніце **Universal**, каб спампаваць файл усталявання.
3. Адкрыйце файл усталявання.
4. У акне, якое адкрыецца, перацягніце Obsidian у папку «Праграмы» (Applications).
5. Адкрывайце Obsidian так жа, як любую іншую праграму.

## Усталяванне Obsidian на Linux

На Linux усталяваць Obsidian можна некалькімі спосабамі. Выконвайце інструкцыі для сістэмы пакетаў, якой вы карыстаецеся.

### Усталяванне Obsidian праз Snap

1. Адкрыйце браўзер і перайдзіце на старонку [Download Obsidian](https://obsidian.md/download).
2. У раздзеле **Linux** націсніце **Snap**, каб спампаваць файл усталявання.
3. Адкрыйце тэрмінал і перайдзіце ў папку, куды спампаваны файл усталявання.
4. Выканайце ў тэрмінале наступную каманду, каб усталяваць пакет Snap (сцяг `--dangerous` патрэбны, бо Canonical, кампанія — стваральнік Snap, не правярала наш пакет; сцяг `--classic` дазваляе Obsidian працаваць з файламі па-за пясочніцай, дзе захоўваюцца вашы нататкі):

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Адкрывайце Obsidian так жа, як любую іншую праграму.

### Усталяванне Obsidian праз AppImage

1. Адкрыйце браўзер і перайдзіце на старонку [Download Obsidian](https://obsidian.md/download).
2. У раздзеле **Linux** націсніце **AppImage**, каб спампаваць файл усталявання.
3. Адкрыйце тэрмінал і перайдзіце ў папку, куды спампаваны файл усталявання.
4. Выканайце ў тэрмінале наступныя каманды, каб адкрыць Obsidian:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
Заўвага: на Chromebook павінен быць усталяваны пакет `libnss3-dev`, інакш можа з'явіцца памылка `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`.

### Усталяванне Obsidian праз Flatpak

1. Выканайце ў тэрмінале наступную каманду, каб усталяваць Obsidian:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Адкрыйце Obsidian гэтай камандай:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Усталяванне Obsidian на Android

1. Знайдзіце Obsidian у [Play Store](https://play.google.com/store/apps/details?id=md.obsidian).
2. Націсніце **Усталяваць**, каб спампаваць праграму.
3. Адкрывайце Obsidian так жа, як любую іншую праграму.

Пры жаданні APK для Android можна спампаваць са старонкі [Download Obsidian](https://obsidian.md/download).

## Усталяванне Obsidian на iPhone і iPad

1. Знайдзіце Obsidian у [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. Націсніце **Атрымаць**, каб спампаваць праграму.
3. Адкрывайце Obsidian так жа, як любую іншую праграму.
