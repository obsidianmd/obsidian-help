កម្មវិធីបម្លែងទម្រង់(Format Converter) អនុញ្ញាតឱ្យអ្នកបម្លែង Markdown ពីកម្មវិធីផ្សេងទៀតទៅជាទម្រង់ Obsidian ។

> [!warning]
> កម្មវិធីបម្លែងទម្រង់បំប្លែង Vault ទាំងមូលរបស់អ្នកដោយផ្អែកលើការកំណត់(Setting) របស់អ្នក។ ធ្វើការបម្រុងទុក(Back up) នូវកំណត់ត្រារបស់អ្នក មុនពេលអ្នកធ្វើការបំប្លែង។

ដើម្បីបំប្លែងកំណត់ត្រាទាំងអស់នៅក្នុង Vault របស់អ្នក៖

1. នៅក្នុង ribbon, ចុចយក **Open format converter** (រូបសញ្ញាលេខ០ និង​លេខ១)។
2. បើកអោយដំណើរការទម្រង់ដែលអ្នកចង់បំប្លែង។
3. ចុចយក **Start conversion**.

សម្រាប់ព័ត៌មានបន្ថែម សូមមើល [[រៀបចំ syntax ទូទៅ]] ។

## Supported formats

| Application   | From                  | To                                                              |
|---------------|-----------------------|-----------------------------------------------------------------|
| Roam Research | `#tag` and `#[[tag]]` | `[[tag]]`                                                       |
| Roam Research | `^^highlight^^`       | `==highlight==`                                                 |
| Roam Research | `{{[[TODO]]}}`        | `[ ]`                                                           |
| Bear          | `::highlight::`       | `==highlight==`                                                 |
| Zettelkasten  | `[[UID]]`             | `[[UID File Name]]` (full link)                                 |
| Zettelkasten  | `[[UID]]`             | <code>\[\[UID File Name&#124;File Name\]\]</code> (pretty link) |



