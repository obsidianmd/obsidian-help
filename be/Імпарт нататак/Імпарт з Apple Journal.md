---
permalink: import/apple-journal
cssclasses:
  - soft-embed
---
Obsidian дазваляе лёгка перанесці запісы з Apple Journal з дапамогай [[Імпарцёр|плагіна Імпарцёр]]. Ён пераўтварае дзённікі ў трывалыя файлы Markdown, якімі можна карыстацца ў Obsidian і многіх іншых праграмах.

## Экспарт даных з Apple Journal

### На iPhone
Выконвайце інструкцыі [Print and export entries in Journal on iPhone](https://support.apple.com/guide/iphone/print-and-export-entries-iph4cad323fe/ios#iph1edf66806):

1. Адкрыйце праграму «Дзённік» (Journal) на iPhone.
2. Выберыце дзённік або націсніце «Усе запісы».
3. Націсніце кнопку «Яшчэ» ўверсе экрана.
4. Націсніце «Экспарт», потым выберыце «Экспарт».
5. Выберыце месца і націсніце кнопку «Выбраныя».

### На Mac (Tahoe)
Выконвайце інструкцыі [Print and export entries in Journal on Mac](https://support.apple.com/guide/journal/print-and-export-entries-dev883fc2329/mac#devc24a8f09a):

1. Адкрыйце праграму «Дзённік» (Journal) на Mac.
2. Перайдзіце ў «Файл» > «Экспарт» і выберыце «Экспарт».

## Імпарт даных Apple Journal у Obsidian

Вам спатрэбіцца афіцыйны плагін Obsidian [[Імпарцёр|Імпарцёр]], які можна [усталяваць тут](obsidian://show-plugin?id=obsidian-importer).

1. Адкрыйце **[[Налады|Налады]]**.
2. Перайдзіце ў **Плагіны супольнасці** і [усталюйце Importer](obsidian://show-plugin?id=obsidian-importer).
3. Уключыце плагін Importer.
4. Адкрыйце Importer у наладах або праз [[Меню каманд|меню каманд]].
5. У пункце **File format** выберыце **Apple Journal (HTML Export)**.
6. У пункце **Files to import** выберыце папку з экспартаванымі данымі (звычайна _AppleJournalEntries_) або асобныя файлы з _Entries_.
7. Праверце і пры неабходнасці змяніце астатнія параметры імпарту.
8. Выберыце **Import**, каб праглядзець створаны шаблон і прыклады з вашых запісаў.
9. Зноў выберыце **Import** і дачакайцеся завяршэння імпарту.

## Шаблоны

Каб цалкам наладзіць імпарт даных Apple Journal, выкарыстоўвайце [[Шаблоны імпарту|шаблоны Імпарцёра]].

![[Шаблоны імпарту#Зменныя]]

Калі ўключаны параметр **Add metadata as frontmatter**, метаданыя Apple Journal пераўтвараюцца ва [[Уласцівасці|ўласцівасці]]. У залежнасці ад запісу гэта могуць быць `state-of-mind`, `contact`, `location`, `motion-activity`, `third-party-media` і `workout-route`.

Для доступу да гэтых метаданых выкарыстоўвайце зменную `properties`. Напрыклад, `{{properties.location}}` для месцазнаходжання або `{{properties["state-of-mind"]}}` для стану.
