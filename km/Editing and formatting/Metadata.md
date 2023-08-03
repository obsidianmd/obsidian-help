---
aliases:
  - front matter
  - ប្រធានបទសុីជម្រៅ/YAML front matter
---

ទោះបីជាអត្ថបទភាគច្រើនបង្កើតមកឲ្យមនុស្សអាន _metadata_ ជាអត្ថបទដែលមានឲ្យកម្មវិធីជាអ្នកអាន ឧទាហរណ៍ [[កម្មវិធីជំនួយសហគមន៍|កម្មវិធីជំនួយសហគមន៍]] ឬ Obsidian ផ្ទាល់ ។

អ្នកអាចដាក់ metadata ទៅកំណត់ត្រាដោយដាក់ប្លុកនៅដើមជួរដំបូងរបស់កំណត់ត្រាអ្នក ។ ប្លុកត្រូវចាប់ផ្តើម និង​ បញ្ចប់ដោយសហសញ្ញាចំនួន ៣​ (`---`) ។

ឧទាហរណ៍ កំណត់ត្រាខាងក្រោមមានព័ត៌មាន metadata ចំនួន​ ២ `tag` និង `publish`:

```yaml
---
tag: journal
publish: false
---

# កំណត់ត្រាប្រចាំថ្ងៃ

ថ្ងៃនេះខ្ញំុរៀនពី front matter ។
```

> [!tip]
> តាមធម្មតា metadata ចេញរូបរាងតែនៅក្នុង [[កែប្រែ និង មើល Markdown#Editor views|editing view]] តែប៉ុណ្ណោះ ។
>
> ដើម្បីបង្ហាញ metadata នៅក្នុងការមើល preview:
>
> 1. បើក **Settings** ។
> 2. នៅក្រោម **Editor** បើក **Show frontmatter** ។

## ទម្រង់ Metadata

[YAML](https://yaml.org/) ជាទ្រង់ទ្រាយប្រើសម្រាប់ configuration ដែលគេនិយមប្រើហើយមនុស្ស និង​ ម៉ាសុីនអាចអានវាបានយ៉ាងស្រួល ។ ព័ត៌មាន metadata នីមួយៗមាន _ពាក្យគន្លឹះ_ និង _តម្លៃ_ ដែលឆ្លើយទៅវា ។ 

ពាក្យគន្លឹះ ត្រូវបានផ្តាច់ពីតម្លៃរបស់វាដោយចុចពីរ និង​ ឃ្លាទទេមួយ:

```yaml
---
ពាក្យគន្លឹះ: តម្លៃ
---
```

លំដាប់នៃគូ ពាក្យគន្លឹះ-តម្លៃ មិនជាចាំបាច់ទេ​ ប៉ុន្តែពាក្យគន្លឹះមួយត្រូវមានតែមួយគត់នៅក្នុងកំណត់ត្រាមួយ ។​ ឧទាហរណ៍ អ្នកមិនអាចមានពាក្យគន្លឹះ `tag` លើសពីមួយបានទេ ។

តម្លៃអាចជាពាក្យ,​ លេខ, ពិត ឬ​ មិនពិត, ឬ ជាសំណំុនៃតម្លៃណាមូយ (arrays) ។ 

```yaml
---
title: A New Hope
year: 1977
favorite: true
cast:
  - Mark Hamill
  - Harrison Ford
  - Carrie Fisher
---
```

> [!tip] JSON metadata
> ទោះបីជាពួកយើងសូមឲ្យអ្នកប្រើ YAML ទៅបញ្ជាក់ metadata, អ្នកក៏អាចប្រើបា [JSON](https://www.json.org/) បានដែរ:
>
> ```md
> ---
> {
>   "tag": "journal",
>   "publish": false
> }
> ---
> ```

## Metadata ដែលបានបញ្ជាក់ស្រាប់

Obsidian មានសំណុំពាក្យគន្លឹះមួយចំនួនស្រាប់:

| ពាក្យគន្លឹះ | ពិពណ៌នា |
|-|-|
| `tag` | មើល [[Editing and formatting/Tags\|Tags]] ។ |
| `tags` | តំណាងឲ្យ `tag` ។ |
| `alias` | មើល [[Aliases]] ។ |
| `aliases` | តំណាងឲ្យ `alias` ។ |
| `cssclass` | ឲ្យអ្នករចនាកំណត់ត្រាមួយៗដោយប្រើ [[CSS snippets]] ។ |

### Metadata សម្រាប់ Obsidian Publish

ពាក្យគន្លឹះ metadata ខាងក្រោមត្រូវបានប្រើដោយ [[Introduction to Obsidian Publish|Obsidian Publish]]:

| ពាក្យគន្លឹះ | ពិពណ៌នា |
|-|-|
| `publish` | មើល [[Publish and unpublish notes#ជ្រើសរើសកំណត់ត្រាដោយស្វ័យប្រវត្តិដើម្បីបោះផ្សាយ]] ។ |
| `permalink` | មើល [[Publish and unpublish notes#Permalinks]] ។ |
| `description` | មើល [[Social media link previews#ការពិពណ៌នា]] ។ |
| `image` | មើល [[Social media link previews#រូបថត]] ។ |
| `cover` | មើល [[Social media link previews#រូបថត]] ។ |
