---
permalink: install
---
Obsidian доступний для всіх основних настільних і мобільних платформ. Нижче наведено всі підтримувані способи завантаження та встановлення Obsidian.

## Встановлення Obsidian на Windows

1. Відкрийте браузер і перейдіть на сторінку [Завантажити Obsidian](https://obsidian.md/download).
2. У розділі **Windows** натисніть **Universal**, щоб завантажити інсталяційний файл.
3. Відкрийте інсталяційний файл і дотримуйтесь інструкцій.
4. Відкрийте Obsidian так само, як будь-який інший застосунок.

## Встановлення Obsidian на macOS

1. Відкрийте браузер і перейдіть на сторінку [Завантажити Obsidian](https://obsidian.md/download).
2. У розділі **macOS** натисніть **Universal**, щоб завантажити інсталяційний файл.
3. Відкрийте інсталяційний файл.
4. У вікні, що відкриється, перетягніть Obsidian до теки «Програми».
5. Відкрийте Obsidian так само, як будь-який інший застосунок.

## Встановлення Obsidian на Linux

Якщо ви використовуєте Linux, ви можете встановити Obsidian кількома способами. Дотримуйтесь інструкцій для системи пакетування, яку ви використовуєте.

### Встановлення Obsidian за допомогою Snap

1. Відкрийте браузер і перейдіть на сторінку [Завантажити Obsidian](https://obsidian.md/download).
2. У розділі **Linux** натисніть **Snap**, щоб завантажити інсталяційний файл.
3. Відкрийте термінал і перейдіть до теки, куди ви завантажили інсталяційний файл.
4. У терміналі виконайте наступну команду для встановлення Snap-пакета: (прапорець `--dangerous` потрібен, оскільки Canonical, компанія-розробник Snap, не перевіряла наш пакет; прапорець `--classic` дозволяє Obsidian отримувати доступ за межі пісочниці, де зберігаються ваші нотатки)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Відкрийте Obsidian так само, як будь-який інший застосунок.

### Встановлення Obsidian за допомогою AppImage

1. Відкрийте браузер і перейдіть на сторінку [Завантажити Obsidian](https://obsidian.md/download).
2. У розділі **Linux** натисніть **AppImage**, щоб завантажити інсталяційний файл.
3. Відкрийте термінал і перейдіть до теки, куди ви завантажили інсталяційний файл.
4. У терміналі виконайте наступну команду, щоб відкрити Obsidian:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
Примітка: На Chromebook необхідно встановити пакет `libnss3-dev`, інакше ви можете отримати помилку `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`.

### Встановлення Obsidian за допомогою Flatpak

1. У терміналі виконайте наступну команду для встановлення Obsidian:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Відкрийте Obsidian, виконавши наступну команду:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Встановлення Obsidian на Android

1. Знайдіть Obsidian у [Play Store](https://play.google.com/store/apps/details?id=md.obsidian).
2. Натисніть **Встановити**, щоб завантажити застосунок.
3. Відкрийте Obsidian так само, як будь-який інший застосунок.

За бажанням ви можете завантажити APK для Android зі сторінки [Завантажити Obsidian](https://obsidian.md/download).

## Встановлення Obsidian на iPhone та iPad

1. Знайдіть Obsidian в [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. Натисніть **Отримати**, щоб завантажити застосунок.
3. Відкрийте Obsidian так само, як будь-який інший застосунок.
