ទំព័រនេះពន្យល់ពីរបៀបគ្រប់គ្រងកំណត់ត្រាដែលបានបោះពុម្ពរបស់អ្នក។

## បោះពុម្ពផ្សាយកំណត់ត្រា

1. នៅក្នុង ribbon នៅខាងឆ្វេងនៃកម្មវិធី ចុច **Publish changes** (រូបសញ្ញាយន្តហោះក្រដាស)។
2. នៅក្នុងប្រអប់ **Publish changes** ចុច **NEW** ដើម្បីមើលកំណត់ត្រាទាំងអស់ដែលអ្នកមិនទាន់បានបោះពុម្ពផ្សាយ។
3. ជ្រើសរើសកំណត់ត្រាដែលអ្នកចង់បោះផ្សាយ។
4. ចុច **Publish**។

## លុបការបោះពុម្ពផ្សាយនៃកំណត់ត្រា

កំណត់ត្រានៅតែមាននៅក្នុង​ local vault របស់អ្នក សូម្បីតែបន្ទាប់ពីអ្នកលុបការបោះពុម្ពរបស់វាក៏ដោយ។

1. នៅក្នុង ribbon នៅខាងឆ្វេងនៃកម្មវិធី ចុច **Publish changes** (រូបសញ្ញាយន្តហោះក្រដាស)។
2. នៅក្នុងប្រអប់ **Publish changes** ចុច **UNCHANGED** ដើម្បីមើលកំណត់ត្រាទាំងអស់ដែលអ្នកបានបោះពុម្ពផ្សាយ។
3. ជ្រើសរើសកំណត់ត្រាដែលអ្នកចង់លុបការបោះពុម្ព។
4. ចុច **Publish**។

## Update a published note

1. នៅក្នុង ribbon នៅខាងឆ្វេងនៃកម្មវិធី ចុច **Publish changes** (រូបសញ្ញាយន្តហោះក្រដាស)។
2. នៅក្នុងប្រអប់​ **Publish changes** ចុច **CHANGED** ដើម្បីមើលកំណត់ត្រាទាំងអស់ដែលត្រូវបានផ្លាស់ប្តូរចាប់តាំងពីពេលចុងក្រោយដែលពួកគេត្រូវបានបោះពុម្ព។
3. ជ្រើសរើសកំណត់ត្រាដែលអ្នកចង់ធ្វើបច្ចុប្បន្នភាព។
4. ចុច **Publish**។

## បោះផ្សាយកំណត់ត្រាដែលបានភ្ជាប់(Linked Notes)

ការបោះពុម្ពកំណត់ត្រាដែលមានតំណភ្ជាប់ទៅកំណត់ចំណាំផ្សេងទៀត នាំឱ្យតំណភ្ជាប់ខូច លុះត្រាតែអ្នកបោះផ្សាយកំណត់ត្រាដែលបានភ្ជាប់ផងដែរ។ Obsidian Publish អាចជួយអ្នកដោយជ្រើសរើសកំណត់ត្រាដែលត្រូវបានភ្ជាប់ពីកំណត់ត្រាដែលត្រូវបានជ្រើសរើសរួចហើយ។

ដើម្បីជ្រើសរើសកំណត់ត្រាដែលបានភ្ជាប់(Linked Notes) ទាំងអស់ សូមចុច **Add linked** នៅក្នុងប្រអប់ **Publish changes**។

ពិនិត្យមើលជម្រើសដែលបានធ្វើបច្ចុប្បន្នភាព ដើម្បីប្រាកដថាវាមិនរួមបញ្ចូលកំណត់ត្រាណាមួយដែលអ្នកមិនទាន់រួចរាល់ក្នុងការបោះពុម្ពផ្សាយនៅឡើយ។

## ជ្រើសរើសកំណត់ត្រាដោយស្វ័យប្រវត្តិដើម្បីបោះផ្សាយ

ដើម្បីជ្រើសរើសកំណត់ត្រាដែលត្រូវបោះពុម្ពដោយស្វ័យប្រវត្តិ សូមកំណត់ `publish: true` នៅក្នុង [[Metadata]] សម្រាប់កំណត់ត្រានោះ។

## មិនអើពើចំពោះកំណត់ត្រាណាមួយ

ក្នុងការមិនអើពើនឹងកំណត់ត្រានៅក្នុង Obsidian Publish សូមកំណត់ `publish: false` នៅក្នុង [[Metadata]] សម្រាប់កំណត់ត្រានោះ។

កំណត់ត្រានោះនឹងលែងបង្ហាញក្នុងបញ្ជីកំណត់ត្រាដែលត្រូវបោះពុម្ពទៀតហើយ។

## Permalinks

អ្នកអាចប្តូរឈ្មោះ URL ទៅកំណត់ត្រារបស់អ្នកដោយប្រើ _permalinks_។

ឧទាហរណ៍អ្នកអាចប្រែ URL នេះ:

```
https://publish.obsidian.md/username/Company/About+us
```

ទៅជា URL នេះ:

```
https://publish.obsidian.md/username/about
```

ដើម្បីបង្កើត permalink សម្រាប់កំណត់ត្រាណាមួយ បន្ថែម `permalink`​ ទៅ [[Metadata]] របស់អ្នក។

```yaml
---
permalink: about
---
```

ប្រសិនបើនរណាម្នាក់ចូលមើលកំណត់ត្រាដោយប្រើ URL ដើម ពួកគេនឹងត្រូវបានបញ្ជូនបន្តដោយស្វ័យប្រវត្តិទៅកាន់ Permalink។
