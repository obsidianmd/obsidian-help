បណ្តាញសង្គមជាច្រើនបង្ហាញការបង្ហាញជាមុន(Preview) ដ៏សម្បូរបែបសម្រាប់គេហទំព័ររបស់អ្នក នៅពេលដែលអ្នកប្រើប្រាស់ចែករំលែកតំណទៅវា។ ដោយប្រើ [[Metadata]], នកអាចកំណត់របៀបដែលកំណត់ត្រារបស់អ្នកបង្ហាញនៅក្នុងការបង្ហាញជាមុន(Preview)។

## ការពិពណ៌នា

Obsidian បង្កើតការពិពណ៌នាដោយស្វ័យប្រវត្តិដោយផ្អែកលើខ្លឹមសារនៃកំណត់ត្រា ប៉ុន្តែអ្នកអាចផ្តល់ការពិពណ៌នាផ្ទាល់ខ្លួនរបស់អ្នកដោយប្រើ `description`។

```yaml
---
description: An introduction to our solar system.
---
```

> [!note] Meta tags
> `description` លុបលើការពិពណ៌នាដែលបានបង្កើតដោយស្វ័យប្រវត្តិនៅក្នុង `<meta name="description" content="...">` និងសមមូលសម្រាប់ `og:description` និង `twitter:description`.

## រូបថត

អ្នក​អាច​ប្រើ​រូបភាព​ផ្ទាល់​ខ្លួន​សម្រាប់​តំណ​ដែលបង្ហាញជា​មុន(Link preview) ដោយ​បន្ថែម `image` ឬ `cover` ជាមួយ​ path ​សម្រាប់រូបភាព។

Path អាចជា Path ទាក់ទងគ្នានៅក្នុង vault របស់អ្នក៖

```yaml
---
cover: Attachments/Cover.png
---
```

Or URL ជាក់លាក់ណាមួយ:

```yaml
---
image: https://example.com/image.png
---
```

`image` និង `cover` គឺដូចគ្នា។ ប្រើតែមួយក្នុងចំណោមពួកគេបានហើយ។

> [!note] Meta tags
> `image` និង `cover` លុបលើរូបភាពដែលបង្កើតដោយស្វ័យប្រវត្តិនៅក្នុង `<meta property="og:image" content="...">`.
