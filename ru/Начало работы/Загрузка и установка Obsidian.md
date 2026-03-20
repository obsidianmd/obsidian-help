---
permalink: install
aliases:
  - Download and install Obsidian
---
Obsidian доступен для всех основных настольных и мобильных платформ. Ниже перечислены все поддерживаемые способы загрузки и установки Obsidian.

## Установка Obsidian на Windows

1. Откройте браузер и перейдите на страницу [Загрузить Obsidian](https://obsidian.md/download).
2. В разделе **Windows** нажмите **Universal**, чтобы скачать установочный файл.
3. Откройте установочный файл и следуйте инструкциям.
4. Откройте Obsidian так же, как вы открываете любое другое приложение.

## Установка Obsidian на macOS

1. Откройте браузер и перейдите на страницу [Загрузить Obsidian](https://obsidian.md/download).
2. В разделе **macOS** нажмите **Universal**, чтобы скачать установочный файл.
3. Откройте установочный файл.
4. В открывшемся окне перетащите Obsidian в папку «Программы» (Applications).
5. Откройте Obsidian так же, как вы открываете любое другое приложение.

## Установка Obsidian на Linux

Если вы используете Linux, вы можете установить Obsidian несколькими способами. Следуйте инструкциям для используемой вами системы управления пакетами.

### Установка Obsidian с помощью Snap

1. Откройте браузер и перейдите на страницу [Загрузить Obsidian](https://obsidian.md/download).
2. В разделе **Linux** нажмите **Snap**, чтобы скачать установочный файл.
3. Откройте терминал и перейдите в папку, куда был загружен установочный файл.
4. В терминале выполните следующую команду для установки Snap-пакета: (флаг `--dangerous` необходим, потому что Canonical — компания, создавшая Snap, — не проверяла наш пакет; флаг `--classic` позволяет Obsidian получить доступ за пределы песочницы, где хранятся ваши заметки)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Откройте Obsidian так же, как вы открываете любое другое приложение.

### Установка Obsidian с помощью AppImage

1. Откройте браузер и перейдите на страницу [Загрузить Obsidian](https://obsidian.md/download).
2. В разделе **Linux** нажмите **AppImage**, чтобы скачать установочный файл.
3. Откройте терминал и перейдите в папку, куда был загружен установочный файл.
4. В терминале выполните следующую команду для запуска Obsidian:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
Примечание: На Chromebook необходимо установить пакет `libnss3-dev`, иначе может появиться ошибка `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`.

### Установка Obsidian с помощью Flatpak

1. В терминале выполните следующую команду для установки Obsidian:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Запустите Obsidian, выполнив следующую команду:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Установка Obsidian на Android

1. Найдите Obsidian в [Play Store](https://play.google.com/store/apps/details?id=md.obsidian).
2. Нажмите **Установить**, чтобы скачать приложение.
3. Откройте Obsidian так же, как вы открываете любое другое приложение.

Вы также можете скачать APK-файл для Android со страницы [Загрузить Obsidian](https://obsidian.md/download).

## Установка Obsidian на iPhone и iPad

1. Найдите Obsidian в [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. Нажмите **Загрузить**, чтобы скачать приложение.
3. Откройте Obsidian так же, как вы открываете любое другое приложение.
