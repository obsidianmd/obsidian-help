---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish ផ្តល់នូវម៉ាស៊ីនភ្ញៀវដែលគ្មានក្បាល (headless client) សម្រាប់បោះផ្សាយ vault ដោយមិនចាំបាច់ប្រើកម្មវិធីកុំព្យូទ័រ។ មានប្រយោជន៍សម្រាប់ CI pipelines និងដំណើរការស្វ័យប្រវត្តិ។
---
[[ការណែនាំអំពី Obsidian Publish|Obsidian Publish]] ផ្តល់នូវម៉ាស៊ីនភ្ញៀវដែលគ្មានចំណុចប្រទាក់ ដើម្បីផ្សាយ vault ដោយមិនប្រើកម្មវិធី desktop។ មានប្រយោជន៍សម្រាប់បំពង់បង្ហូរ CI និងលំហូរការងារស្វ័យប្រវត្តិ។ ផ្សាយការផ្លាស់ប្តូរថ្មីៗរបស់អ្នកតាមកាលវិភាគ ឬជាផ្នែកមួយនៃបំពង់បង្ហូរការស្ថាបនា។

ដំឡើង [[Obsidian Headless]] **(open beta)** ដើម្បីធ្វើអន្តរកម្មជាមួយ [[ការណែនាំអំពី Obsidian Publish|Obsidian Publish]] ពីបន្ទាត់ពាក្យបញ្ជាដោយគ្មានកម្មវិធី Obsidian desktop។

## ចាប់ផ្តើមរហ័ស

ដំឡើង [[Obsidian Headless|Obsidian Headless]] **(open beta)**:

```shell
npm install -g obsidian-headless
```

អ្នកត្រូវមានការជាវ [[ការណែនាំអំពី Obsidian Publish|Obsidian Publish]] ដែលកំពុងដំណើរការ។

```shell
# ចូលគណនី
ob login

# រាយបញ្ជីគេហទំព័រ publish របស់អ្នក
ob publish-list-sites

# ភ្ជាប់ vault មូលដ្ឋានទៅគេហទំព័រ publish
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# មើលការផ្លាស់ប្តូរជាមុនដោយមិនផ្សាយ
ob publish --dry-run

# ផ្សាយការផ្លាស់ប្តូរ
ob publish
```

## ពាក្យបញ្ជា

### `ob publish-list-sites`

រាយបញ្ជីគេហទំព័រ Publish ទាំងអស់ដែលមានសម្រាប់គណនីរបស់អ្នក។

### `ob publish-create-site`

បង្កើតគេហទំព័រ Publish ថ្មី។

```
ob publish-create-site --slug <slug>
```

| ជម្រើស | ការពិពណ៌នា |
| --- | --- |
| `--slug` | អត្តសញ្ញាណ URL សម្រាប់គេហទំព័ររបស់អ្នក (ឧ. `my-notes` បង្កើត `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

ភ្ជាប់ vault មូលដ្ឋានទៅគេហទំព័រ Publish។

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| ជម្រើស | ការពិពណ៌នា |
| --- | --- |
| `--site` | លេខសម្គាល់គេហទំព័រ ឬ slug |
| `--path` | ផ្លូវ vault មូលដ្ឋាន (លំនាំដើម: ថតបច្ចុប្បន្ន) |

### `ob publish`

ផ្សាយការផ្លាស់ប្តូរ vault ទៅគេហទំព័ររបស់អ្នក។ តាមលំនាំដើម មានតែឯកសារដែលមាន `publish: true` នៅក្នុង frontmatter របស់វាប៉ុណ្ណោះដែលត្រូវបានរួមបញ្ចូល។

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| ជម្រើស | ការពិពណ៌នា |
| --- | --- |
| `--path` | ផ្លូវ vault មូលដ្ឋាន (លំនាំដើម: ថតបច្ចុប្បន្ន) |
| `--all` | រួមបញ្ចូលឯកសារទាំងអស់ មិនមែនតែឯកសារដែលមានទង់ publish ប៉ុណ្ណោះទេ |
| `--dry-run` | បង្ហាញការផ្លាស់ប្តូរដោយមិនផ្សាយ |
| `--yes` | ផ្សាយដោយមិនសួរសម្រាប់ការបញ្ជាក់ |

### `ob publish-config`

មើល ឬផ្លាស់ប្តូរការកំណត់ថតរួមបញ្ចូល/មិនរួមបញ្ចូល សម្រាប់ vault។ ដំណើរការដោយគ្មានជម្រើសដើម្បីបង្ហាញការកំណត់រចនាសម្ព័ន្ធបច្ចុប្បន្ន។

```
ob publish-config [--path <local-path>] [options]
```

| ជម្រើស | ការពិពណ៌នា |
| --- | --- |
| `--path` | ផ្លូវ vault មូលដ្ឋាន (លំនាំដើម: ថតបច្ចុប្បន្ន) |
| `--includes` | ថតដែលត្រូវរួមបញ្ចូល ដោយបំបែកដោយសញ្ញាក្បៀស (ខ្សែអក្សរទទេដើម្បីសម្អាត) |
| `--excludes` | ថតដែលត្រូវមិនរួមបញ្ចូល ដោយបំបែកដោយសញ្ញាក្បៀស (ខ្សែអក្សរទទេដើម្បីសម្អាត) |

### `ob publish-site-options`

មើល ឬអាប់ដេតការកំណត់ការបង្ហាញ និងការរុករកទូទាំងគេហទំព័រ។ ដំណើរការដោយគ្មានជម្រើសដើម្បីបង្ហាញការកំណត់បច្ចុប្បន្ន។

```
ob publish-site-options [--path <local-path>] [options]
```

| ជម្រើស | ការពិពណ៌នា |
| --- | --- |
| `--path` | ផ្លូវ vault មូលដ្ឋាន (លំនាំដើម: ថតបច្ចុប្បន្ន) |
| `--site-name` | ឈ្មោះគេហទំព័រ |
| `--index-file` | ផ្លូវឯកសារទំព័រដើម |
| `--logo` | ផ្លូវឯកសារឡូហ្គោ (ខ្សែអក្សរទទេដើម្បីសម្អាត) |
| `--show-navigation` | បង្ហាញរបារចំហៀងរុករក |
| `--show-graph` | បង្ហាញទិដ្ឋភាពក្រាហ្វ |
| `--show-outline` | បង្ហាញតារាងមាតិកា |
| `--show-search` | បង្ហាញការស្វែងរក |
| `--show-backlinks` | បង្ហាញតំណភ្ជាប់ខាងក្រោយ |
| `--show-hover-preview` | បង្ហាញការមើលជាមុនពេលដាក់កណ្ដុរ |
| `--show-theme-toggle` | បង្ហាញប៊ូតុងប្តូររូបរាង |
| `--default-theme` | រូបរាងលំនាំដើម: `light` ឬ `dark` |
| `--readable-line-length` | ប្រវែងបន្ទាត់អាចអានបាន |
| `--strict-line-breaks` | ការបំបែកបន្ទាត់តឹងរ៉ឹង |
| `--hide-title` | លាក់ចំណងជើង inline |
| `--sliding-window` | របៀបបង្អួចរំកិល |
| `--nav-order` | លំដាប់រុករក ផ្លូវដោយបំបែកសញ្ញាក្បៀស (ខ្សែអក្សរទទេដើម្បីសម្អាត) |
| `--nav-hidden` | ធាតុរុករកដែលលាក់ ផ្លូវដោយបំបែកសញ្ញាក្បៀស (ខ្សែអក្សរទទេដើម្បីសម្អាត) |

### `ob publish-unlink`

ផ្ដាច់ vault ពីគេហទំព័រ Publish។

```
ob publish-unlink [--path <local-path>]
```
