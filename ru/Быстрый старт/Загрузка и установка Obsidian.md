На этой странице перечислены все поддерживаемые способы загрузки и установки Obsidian.

## Установка Obsidian в Windows

1. Откройте в браузере ссылку [Download Obsidian](https://obsidian.md/download).
2. Рядом с **Windows**, нажмите **Universal** и скачайте дистрибутив.
3. Запустите установочный файл и следуйте инструкциям.
4. Откройте Obsidian так же, как вы открываете любое другое приложение.

## Установка Obsidian в macOS

1. Откройте в браузере ссылку [Download Obsidian](https://obsidian.md/download).
2. Рядом с **macOS**, нажмите **Universal** и скачайте дистрибутив.
3. Запустите установочный фай.
4. В открывшемся окне перетащите Obsidian в папку «Приложения».
5. Откройте Obsidian так же, как вы открываете любое другое приложение.

## Установка Obsidian в Linux

Если вы используете Linux, вы можете установить Obsidian несколькими способами. Установите Obsidian с помощью вашего менеджера пакетов или скачайте его по ссылке: [Download Obsidian](https://obsidian.md/download).

### Установка Obsidian с помощью Snap

1. Откройте в браузере ссылку [Download Obsidian](https://obsidian.md/download).
2. Рядом с **Linux**, нажмите **Snap** и скачайте дистрибутив.
3. Откройте терминал и перейдите в папку, в которую вы скачали установочный файл.
4. В терминале выполните следующую команду для установки пакета Snap: (Флаг `--dangerous` необходим, поскольку Canonical (компания, создавшая Snap) не проверила наш пакет, флаг `--classic` позволяет Obsidian получать доступ за пределами песочницы, где хранятся ваши заметки)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Откройте Obsidian так же, как вы открываете любое другое приложение.

### Установка Obsidian с помощью AppImage

1. Откройте в браузере ссылку  [Download Obsidian](https://obsidian.md/download).
2. Рядом с **Linux**, нажмите **AppImage** и скачайте дистрибутив.
3. Откройте терминал и перейдите в папку, в которую вы скачали установочный файл.
4. В терминале выполните следующую команду для запуска Obsidian:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage
   ```
Примечание: В Chromebooks,  необходимо установить пакет `libnss3-dev`, иначе может возникнуть ошибка `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`.

### Установка Obsidian с помощью Flatpak

1. В терминале выполните следующую команду для установки Obsidian:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Откройте Obsidian, выполнив следующую команду:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Установка Obsidian в Android

1. Найдите Obsidian в [Play Store](https://play.google.com/store/apps/details?id=md.obsidian).
2. Нажмите **Установить** и скачайте приложение.
3. Откройте Obsidian так же, как вы открываете любое другое приложение.

При необходимости, вы можете загрузить APK-файл для Android со страницы: [Download Obsidian](https://obsidian.md/download).

## Установка Obsidian в iPhone или iPad

1. Найдите Obsidian в [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. Нажмите **Получить** и скачайте приложение.
3. Откройте Obsidian так же, как вы открываете любое другое приложение.
