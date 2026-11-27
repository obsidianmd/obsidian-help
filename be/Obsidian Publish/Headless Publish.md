---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish offers a headless client to publish vaults without using the desktop app. Useful for CI pipelines and automated workflows.
---

[[Уводзіны ў Obsidian Publish|Obsidian Publish]] прапануе headless-кліент, які дазваляе публікаваць сховішчы без праграмы для камп'ютара. Ён падыходзіць для CI-канвеераў і аўтаматызаваных працэсаў: публікуйце апошнія змены па раскладзе або як частку зборкі.

Усталюйце [[Obsidian Headless]] **(адкрытае бэта-тэсціраванне)**, каб працаваць з [[Уводзіны ў Obsidian Publish|Obsidian Publish]] з каманднага радка без праграмы Obsidian для камп'ютара.

## Хуткі старт

Усталюйце [[Obsidian Headless|Obsidian Headless]] **(адкрытае бэта-тэсціраванне)**:

```shell
npm install -g obsidian-headless
```

Неабходна мець дзейную [[Уводзіны ў Obsidian Publish|падпіску Obsidian Publish]].

```shell
# Уваход
ob login

# Спіс вашых сайтаў Publish
ob publish-list-sites

# Падключэнне лакальнага сховішча да сайта Publish
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# Папярэдні прагляд змен без публікацыі
ob publish --dry-run

# Публікацыя змен
ob publish
```

## Каманды

### `ob publish-list-sites`

Паказвае ўсе сайты Publish, даступныя вашаму ўліковаму запісу.

### `ob publish-create-site`

Стварае новы сайт Publish.

```
ob publish-create-site --slug <slug>
```

| Параметр | Апісанне |
| --- | --- |
| `--slug` | Ідэнтыфікатар вашага сайта ў URL (напрыклад, `my-notes` стварае `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

Падключае лакальнае сховішча да сайта Publish.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| Параметр | Апісанне |
| --- | --- |
| `--site` | ID або slug сайта |
| `--path` | Шлях да лакальнага сховішча (па змаўчанні: бягучая папка) |

### `ob publish`

Публікуе змены сховішча на вашым сайце. Па змаўчанні ўключаюцца толькі файлы з `publish: true` ва ўласцівасцях (frontmatter).

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| Параметр | Апісанне |
| --- | --- |
| `--path` | Шлях да лакальнага сховішча (па змаўчанні: бягучая папка) |
| `--all` | Уключыць усе файлы, а не толькі тыя, што маюць пазнаку публікацыі |
| `--dry-run` | Паказаць змены без публікацыі |
| `--yes` | Публікаваць без запыту на пацвярджэнне |

### `ob publish-config`

Паказвае або змяняе налады ўключаных і выключаных папак сховішча. Без параметраў паказвае бягучую канфігурацыю.

```
ob publish-config [--path <local-path>] [options]
```

| Параметр | Апісанне |
| --- | --- |
| `--path` | Шлях да лакальнага сховішча (па змаўчанні: бягучая папка) |
| `--includes` | Папкі для ўключэння праз коску (пусты радок — ачысціць) |
| `--excludes` | Папкі для выключэння праз коску (пусты радок — ачысціць) |

### `ob publish-site-options`

Паказвае або абнаўляе агульныя налады адлюстравання і навігацыі сайта. Без параметраў паказвае бягучыя налады.

```
ob publish-site-options [--path <local-path>] [options]
```

| Параметр | Апісанне |
| --- | --- |
| `--path` | Шлях да лакальнага сховішча (па змаўчанні: бягучая папка) |
| `--site-name` | Назва сайта |
| `--index-file` | Шлях да файла хатняй старонкі |
| `--logo` | Шлях да файла лагатыпа (пусты радок — ачысціць) |
| `--show-navigation` | Паказваць бакавую панэль навігацыі |
| `--show-graph` | Паказваць граф |
| `--show-outline` | Паказваць змест |
| `--show-search` | Паказваць пошук |
| `--show-backlinks` | Паказваць зваротныя спасылкі |
| `--show-hover-preview` | Паказваць прадпрагляд пры навядзенні |
| `--show-theme-toggle` | Паказваць пераключальнік тэмы |
| `--default-theme` | Тэма па змаўчанні: `light` або `dark` |
| `--readable-line-length` | Абмежаваная даўжыня радка |
| `--strict-line-breaks` | Строгія разрывы радкоў |
| `--hide-title` | Схаваць убудаваны загаловак |
| `--sliding-window` | Рэжым рассоўных вокнаў |
| `--nav-order` | Парадак навігацыі, шляхі праз коску (пусты радок — ачысціць) |
| `--nav-hidden` | Схаваныя элементы навігацыі, шляхі праз коску (пусты радок — ачысціць) |

### `ob publish-unlink`

Адключае сховішча ад сайта Publish.

```
ob publish-unlink [--path <local-path>]
```
