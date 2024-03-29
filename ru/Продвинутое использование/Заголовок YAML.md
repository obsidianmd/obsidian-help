---
aliases: front matter
---

Заголовок YAML, также известный как front matter, разработан как способ хранения метаданных на уровне файла, понятный человеку и используемый в Obsidian.

По сути это раздел текстовых атрибутов, размещенный в самом верху файла. Это один из самых популярных способов добавления метаданных в Markdown-файл, который был популяризирован статическими генераторами, такими как Jekyll, Hugo и Gatsby.

Для создания заголовка YAML нужно поместить его содержимое в блок из **тройных дефисов** до и после него. ==Его также нужно разместить в самом верху файла.==

Например:

```
---
ключ: значение
ключ2: значение2
ключ3: [раз, два, три]
ключ4:
- четыре
- пять
- шесть
---
```

Начиная с версии 0.12.12 поддерживаются четыре ключа:

- `tags` (см. [[Работа с тегами]])
- `aliases` (см. [[Добавление псевдонимов к заметке]])
- `cssclass` (использование определенных CSS классов для отдельных заметок)
- `publish`(см. [[Публикация#Использование YAML|Использование YAML при публикации]])

По мере развития Obsidian мы будем постепенно делать YAML более доступным для разработчиков плагинов и более удобным для пользователей.