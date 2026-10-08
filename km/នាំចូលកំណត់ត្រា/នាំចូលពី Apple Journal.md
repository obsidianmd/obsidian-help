---
permalink: import/apple-journal
cssclasses:
  - soft-embed
---
Obsidian អនុញ្ញាតឱ្យអ្នកផ្ទេរធាតុកំណត់ហេតុប្រចាំថ្ងៃរបស់អ្នកពី Apple Journal យ៉ាងងាយស្រួលដោយប្រើ [[កម្មវិធីនាំចូល|កម្មវិធីជំនួយ Importer]]។ វានឹងបម្លែងកំណត់ហេតុប្រចាំថ្ងៃរបស់អ្នកទៅជាឯកសារ Markdown ដែលមានភាពប្រើប្រាស់បានយូរ ដែលអ្នកអាចប្រើជាមួយ Obsidian និងកម្មវិធីជាច្រើនផ្សេងទៀត។

## នាំចេញទិន្នន័យរបស់អ្នកពី Apple Journal

### នៅលើ iPhone
អនុវត្តតាមការណែនាំសម្រាប់ [Print and export entries in Journal on iPhone](https://support.apple.com/guide/iphone/print-and-export-entries-iph4cad323fe/ios#iph1edf66806)៖

1. ចូលទៅកម្មវិធី Journal នៅលើ iPhone របស់អ្នក។
2. ជ្រើសរើសកំណត់ហេតុប្រចាំថ្ងៃ ឬចុច All Entries។
3. ចុចប៊ូតុង More នៅផ្នែកខាងលើនៃអេក្រង់។
4. ចុច Export បន្ទាប់មកជ្រើសរើស Export។
5. ជ្រើសរើសទីតាំង បន្ទាប់មកចុចប៊ូតុង Selected។

### នៅលើ Mac (Tahoe)
អនុវត្តតាមការណែនាំសម្រាប់ [Print and export entries in Journal on Mac](https://support.apple.com/guide/journal/print-and-export-entries-dev883fc2329/mac#devc24a8f09a)៖

1. ចូលទៅកម្មវិធី Journal នៅលើ Mac របស់អ្នក។
2. ចូលទៅ File > Export បន្ទាប់មកជ្រើសរើស Export។

## នាំចូលទិន្នន័យ Apple Journal ទៅក្នុង Obsidian

អ្នកនឹងត្រូវការកម្មវិធីជំនួយ [[កម្មវិធីនាំចូល|Importer]] ផ្លូវការរបស់ Obsidian ដែលអ្នកអាច [ដំឡើងនៅទីនេះ](obsidian://show-plugin?id=obsidian-importer)។

1. បើក **[[ការកំណត់]]**។
2. ចូលទៅ **កម្មវិធីជំនួយសហគមន៍** ហើយ [ដំឡើង Importer](obsidian://show-plugin?id=obsidian-importer)។
3. បើកកម្មវិធីជំនួយ Importer។
4. បើកកម្មវិធីជំនួយ **Importer** ដោយប្រើក្ដារលាយពាក្យបញ្ជា ឬរូបតំណាងរីបិន។
5. នៅក្រោម **File format** ជ្រើសរើស **Apple Journal (HTML Export)**។
6. នៅក្នុង **Files to import** ជ្រើសរើសថតដែលមានទិន្នន័យនាំចេញ ជាធម្មតា _AppleJournalEntries_ ឬឯកសារនីមួយៗពី _Entries_។
7. ពិនិត្យ និងកែសម្រួលជម្រើសនាំចូលផ្សេងទៀត។
8. ជ្រើសរើស **Import** ដើម្បីពិនិត្យមើលគំរូដែលបានបង្កើត និងមើលជាមុនឧទាហរណ៍ពីធាតុរបស់អ្នក។
9. ជ្រើសរើស **Import** ម្តងទៀត ហើយរង់ចាំរហូតដល់ការនាំចូលបានបញ្ចប់។

## គំរូ

ប្រើ [[ពុម្ពកម្មវិធីនាំចូល|គំរូ Importer]] ដើម្បីកំណត់រចនាសម្ព័ន្ធពេញលេញនូវរបៀបដែលទិន្នន័យ Apple Journal របស់អ្នកត្រូវបាននាំចូល។

![[ពុម្ពកម្មវិធីនាំចូល#Variables]]

នៅពេល **Add metadata as frontmatter** ត្រូវបានបើក metadata របស់ Apple Journal នឹងត្រូវបានបម្លែងទៅជា [[លក្ខណៈសម្បត្តិ|លក្ខណៈសម្បត្តិ]]។ អាស្រ័យលើធាតុ ទាំងនេះអាចរួមបញ្ចូល `state-of-mind`, `contact`, `location`, `motion-activity`, `third-party-media`, និង `workout-route`។

ប្រើអថេរ `properties` ដើម្បីចូលប្រើ metadata នេះ។ ឧទាហរណ៍ ប្រើ `{{properties.location}}` សម្រាប់ទីតាំង ឬ `{{properties["state-of-mind"]}}` សម្រាប់ state of mind។
