---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish offers a headless client to publish vaults without using the desktop app. Useful for CI pipelines and automated workflows.
---
[[Введение в Obsidian Publish|Obsidian Publish]] предлагает headless-клиент для публикации хранилищ без использования настольного приложения. Подходит для CI-пайплайнов и автоматизированных рабочих процессов. Публикуйте последние изменения по расписанию или в рамках пайплайна сборки.

Установите [[Obsidian Headless]] **(открытая бета)**, чтобы взаимодействовать с [[Введение в Obsidian Publish|Obsidian Publish]] из командной строки без настольного приложения Obsidian.

## Быстрый старт

Установите [[Obsidian Headless|Obsidian Headless]] **(открытая бета)**:

```shell
npm install -g obsidian-headless
```

Вам необходима активная [[Введение в Obsidian Publish|подписка на Obsidian Publish]].

```shell
# Вход
ob login

# Список ваших сайтов Publish
ob publish-list-sites

# Подключение локального хранилища к сайту Publish
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# Предварительный просмотр изменений без публикации
ob publish --dry-run

# Публикация изменений
ob publish
```

## Команды

### `ob publish-list-sites`

Вывод списка всех сайтов Publish, доступных вашему аккаунту.

### `ob publish-create-site`

Создание нового сайта Publish.

```
ob publish-create-site --slug <slug>
```

| Опция | Описание |
| --- | --- |
| `--slug` | URL-идентификатор вашего сайта (например, `my-notes` создаёт `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

Подключение локального хранилища к сайту Publish.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| Опция | Описание |
| --- | --- |
| `--site` | ID или slug сайта |
| `--path` | Путь к локальному хранилищу (по умолчанию: текущая директория) |

### `ob publish`

Публикация изменений хранилища на сайт. По умолчанию включаются только файлы с `publish: true` в начальных метаданных.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| Опция | Описание |
| --- | --- |
| `--path` | Путь к локальному хранилищу (по умолчанию: текущая директория) |
| `--all` | Включить все файлы, а не только с флагом публикации |
| `--dry-run` | Показать изменения без публикации |
| `--yes` | Опубликовать без запроса подтверждения |

### `ob publish-config`

Просмотр или изменение настроек включения/исключения папок для хранилища. Запустите без опций, чтобы отобразить текущую конфигурацию.

```
ob publish-config [--path <local-path>] [options]
```

| Опция | Описание |
| --- | --- |
| `--path` | Путь к локальному хранилищу (по умолчанию: текущая директория) |
| `--includes` | Папки для включения, через запятую (пустая строка для сброса) |
| `--excludes` | Папки для исключения, через запятую (пустая строка для сброса) |

### `ob publish-site-options`

Просмотр или обновление настроек отображения и навигации для всего сайта. Запустите без опций, чтобы отобразить текущие настройки.

```
ob publish-site-options [--path <local-path>] [options]
```

| Опция | Описание |
| --- | --- |
| `--path` | Путь к локальному хранилищу (по умолчанию: текущая директория) |
| `--site-name` | Название сайта |
| `--index-file` | Путь к файлу главной страницы |
| `--logo` | Путь к файлу логотипа (пустая строка для сброса) |
| `--show-navigation` | Отображение навигации |
| `--show-graph` | Отображение графа |
| `--show-outline` | Отображение оглавления |
| `--show-search` | Отображение поиска |
| `--show-backlinks` | Отображение обратных ссылок |
| `--show-hover-preview` | Отображение предпросмотра |
| `--show-theme-toggle` | Отображение переключателя темы |
| `--default-theme` | Тема по умолчанию: `light` или `dark` |
| `--readable-line-length` | Ограничить максимальную длину строки |
| `--strict-line-breaks` | Двойной разделитель строк |
| `--hide-title` | Скрыть встроенный заголовок |
| `--sliding-window` | Режим скользящего окна |
| `--nav-order` | Порядок навигации, пути через запятую (пустая строка для сброса) |
| `--nav-hidden` | Скрытые элементы навигации, пути через запятую (пустая строка для сброса) |

### `ob publish-unlink`

Отключение хранилища от сайта Publish.

```
ob publish-unlink [--path <local-path>]
```
