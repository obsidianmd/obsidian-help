Obsidian ប្រើ URI protocol ផ្ទាល់ខ្លួន `obsidian://` ដែលអាខយកទៅប្រើក្នុងការបង្កឲ្យមានសកម្មភាពផ្សេងៗនៅក្នុងកម្មវិធី ។ នេះជាទូទៅត្រូវបានប្រើនៅលើ macOS និង កម្មវិធីលើទូរស័ព្ទសម្រាប់ ការងារស្វ័យប្រវត្តិ និង ចម្រុះលំហូរការងារផ្សេងៗ។

ប្រសិនបើអ្នកមាន Obsidian, link នេះនឹងបើកកម្មវិធី​ Obsidian នៅលើឧបករណ៍របស់អ្នក: [ចុចទីនេះ](obsidian://open)

## ការដំឡើង Obsidian URI

ដើម្បីធ្វើឲ្យប្រាកដថា operating system បញ្ជូន `obsidian://` URIs ទៅកាន់កម្មវិធី Obsidian, អ្នកត្រូវធ្វើតាមជំហានខាងក្រោម​ ។

- នៅលើ Windows, រត់កម្មវិធីម្ដងគួរតែគ្រប់គ្រាន់ហើយ​ ។ វានឹងបញ្ចូលខ្លួន​ឲ្យ `obsidian://` protocol ផ្ទាល់ខ្លួននៅក្នុង Windows registry ។
- នៅលើ macOS, រត់កម្មវិធីម្ដងគួរតែគ្រប់គ្រាន់ហើយ​ តែកម្មវិធីរបស់អ្នក **ត្រូវតែ** ជាកម្មវិធីដំឡើង 0.8.12 ឬ ថ្មីទៀត ។
- នៅលើ Linux, មានជំហានច្រើនជាងនេះទៀត:
  - ទីមួយ អ្នកត្រូយបង្កើតឯកសារ 'obsidian.desktop'. [សម្រាប់ព័ត៌មានលម្អិត](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files)
  - អ្នកត្រូវធានាថាឯកសារ 'obsidian.desktop' របស់អ្នកបានបញ្ជាក់ `Exec` ជា `Exec=executable %u` ។ `%u` ត្រូវបានប្រើបញ្ជូន 'obsidian://' URIs ទៅកម្មវិធី Obsidian ។
  - ប្រសិនបើអ្នកកម្មវិធីដំឡើង AppImage,  អ្នកប្រហែលជាត្រូវសម្រាយវាដោយប្រើ `Obsidian-x.y.z.AppImage --appimage-extract` ។ បន្ទាប់មក សូមធ្វើឲ្យប្រាកដ `Exec` directive ចង្អុលទៅ executable​ ដែលអ្នកសម្រាយមិញ ។

## ​ការប្រើប្រាស់ Obsidian URIs

Obsidian URIs ជាទូទៅមានទ្រង់ទ្រាយនេះ៖

```
obsidian://action?param1=value&param2=value
```

- `action` ជាធម្មតាគឺជាសកម្មភាពដែលអ្នកចង់អនុវត្ត ។

### Encoding

==សំខាន់==

ធ្វើឲ្យប្រាកដថាតម្លៃផ្សេងៗរបស់អ្នកត្រូវបាន URI encoded ដោយត្រឹមត្រូវ ។ ឧទាហរណ៍ តួអក្សរ slash ទៅមុខ `/` ត្រូវតែ encoded ជា `%2F` ហើយ space ត្រូវតែ encoded ជា `%20` ។

នេះសំខាន់ណាស់ព្រោះ បើតួអក្សរ "ពិសេស"​ ​​ណាមួយត្រូវបាន encoded ខុសនោះ ការបកប្រែ URI​ ក៏ខុសដែរ ។ [សម្រាប់ព័ត៌មានលម្អិត](https://en.wikipedia.org/wiki/Percent-encoding)

### សកម្មភាពដែលអ្នកអាចប្រើបាន

#### សកម្មភាព `open`

ពិពណ៌នា: បើក Obsidian vault ហើយប្រហែលជាបើកឯកសារនៅក្នុង vault នោះដែរ ។

ប៉ារ៉ាម៉ែត្រដែលអាចប្រើបាន:

- `vault`  អាចជាឈ្មោះ vault ឬ vault ID ។
  - ឈ្មោះ vault គឺគ្រាន់តែជាឈ្មោះរបស់ថត vault ។
  - Vault ID គឺជាលេខកូដចៃដន្យ 16-character ដែលប្រគល់អោយ vault ណាមួយ ។ ID មួយគឺសម្រាប់តែថត vault មួយគត់នៅលើកុំព្យូទ័ររបស់អ្នក ។ ឧទាហរណ៏: `ef6ca3e3b524d22f` ។ ឥឡូវនេះមិនទាន់មានវិធីងាយស្រួលក្នុងការស្វែងរក ID នៅឡើយទេ, វិធីមួយនឹងត្រូវបានផ្តល់ឲ្យនៅពេល ក្រោយនៅក្នុង vault switcher ។ ឥឡូវនេះអ្នកអាចរកវានៅក្នុង `%appdata%/obsidian/obsidian.json` សម្រាប់ Windows ។ សម្រាប់ macOS, ប្តូរ `%appdata%` ទៅជា `~/Library/Application Support/` ។ សម្រាប់ Linux, ប្តូរ `%appdata%` ទៅជា `~/.config/` ។
- `file` អាចជាឈ្មោះឯកសារ, ឬ ជា path ចេញពីឫសគល់ vault ទៅឯកសារណាមួយ ។
  - ដើម្បីដោះស្រាយឯកសារគោលដៅណាមួយ Obsidian ប្រើប្រព័ន្ធសម្រាយ link​ ធម្មតាមួយ `[[wikilink]]` នៅក្នុង vault.
  - ប្រសិនបើ extension​ ឯកសារជា `md`, extension អាចរំលងចោលបាន ។
- `path` ជា absolute path មួយនៅក្នុង file system ទៅឯកសារណាមួយ ។
  - ការប្រើប្រាស់ប៉ារ៉ាម៉ែត្រនេះនឹង​ override `vault` និង `file` ។
  - វានឹងធ្វើឲ្យ Obsidian ទៅស្វែងរក vault ជាក់លាក់ណាមួយ ដែលមាន path របស់ឯកសារជាក់លាក់ណាមួយ ។
  - បន្ទាប់មក path ដែលនៅសល់ប្តូរប៉ារ៉ាម៉ែត្រ `file` ។

ឧទាហរណ៏:

- `obsidian://open?vault=my%20vault`
  វានឹងបើក​ vault `my vault` ។ ប្រសិនបើ vault នេះបើករួចហើយ វានឹងផ្តោតទៅលើ window​ របស់ vault​ នោះ ។

- `obsidian://open?vault=ef6ca3e3b524d22f`
  វានឹងបើក vault ដែលមាន​ ID `ef6ca3e3b524d22f` ។

- `obsidian://open?vault=my%20vault&file=my%20note`
  វានឹងបើកកំណត់ត្រា `my note` នៅក្នុង vault `my vault` ដោយចាត់ទុកថា `my note` មានស្រាប់ហើយ ហើយឯកសារមានឈ្មោះជា `my note.md` ។

- `obsidian://open?vault=my%20vault&file=my%20note.md`
  វានឹងបើកកំណត់ត្រា `my note` នៅក្នុង vault `my vault` ។

- `obsidian://open?vault=my%20vault&file=path%2Fto%2Fmy%20note`
  វានឹងបើកកំណត់ត្រាដែលស្ថិតនៅទីតាំង `path/to/my note` នៅក្នុង vault `my vault` ។

- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  វានឹងស្វែងរក vault ណាមួយដែលមាន path `/home/user/my vault/path/to/my note` ។ បន្ទាប់មក​ path​ ដែលនៅសល់ត្រូវបានបញ្ចូនទៅប៉ារ៉ាម៉ែត្រ `file` ។ ឧទាហរណ៏ បើសិនជា vault មានស្រាប់ហើយនៅ `/home/user/my vault` នោះ វានឹងមានឥទ្ឌពលដូចដែលដាក់ប៉ារ៉ាម៉ែត្រ `file`​ ទៅជា `path/to/my note` ។

- `obsidian://open?path=D%3A%5CDocuments%5CMy%20vault%5CMy%20note`
  វានឹងស្វែងរក vault ណាមួយដែលមាន path `D:\Documents\My vault\My note` ។ បន្ទាប់មក​ path​ ដែលនៅសល់ត្រូវបានបញ្ចូនទៅប៉ារ៉ាម៉ែត្រ `file` ។ ទាហរណ៏ បើសិនជា vault មានស្រាប់ហើយនៅ `D:\Documents\My vault` នោះ វានឹងមានឥទ្ឌពលដូចដែលដាក់ប៉ារ៉ាម៉ែត្រ `file`​ ទៅជា `My note` ។

#### សកម្មភាព `search`

ពិពណ៌នា: បើក search​ pane សម្រាប់ vault មួយ ហើយមានជម្រើសតាមចិត្តធ្វើ query សម្រាប់ការស្វែងរកជាបន្ថែម ។

ប៉ារ៉ាម៉ែត្រដែលអាចប្រើបាន:

- `vault` អាចជាឈ្មោះ vault ឬ vault ID ។ ដូចសកម្មភាព `open` ។
- `query` (ជម្រើសតាមចិត្ត) query សម្រាប់ការស្វែងរកអ្វីមួយ ។

ឧទាហរណ៏:

- `obsidian://search?vault=my%20vault`
  វានឹងបើក​ vault `my vault` ហើយបើក search pane ។

- `obsidian://search?vault=my%20vault&query=MOC`
  វានឹងបើក​ vault `my vault` បើក search pane ហើយស្វែងរក `MOC` ។

#### សកម្មភាព `new`

ពិពណ៌នា: បង្កើតកំណត់ត្រាថ្មីមួយក្នុង vault, អាចមានជម្រើសបញ្ចូលអត្ថបទទៅក្នុងកំណត់ត្រា ។

ប៉ារ៉ាម៉ែត្រដែលអាចប្រើបាន:

- `vault` អាចជាឈ្មោះ vault ឬ vault ID ។ ដូចសកម្មភាព `open` ។
- `name` ឈ្មោះឯកសារដែលត្រូវបង្កើត ។ ប្រសិនបើនេះត្រូវបានបញ្ជាក់​ ទីតាំងឯកសារនឹងត្រូវបានជ្រើសដោយផ្អែកលើ "Default location for new notes"​ ក្នុង preferences ។
- `file` ជា absolute path របស់ vault រួមមានទាំងឈ្មោះ ។ វានឹង override `name` ប្រសិនបើផ្តល់ឲ្យវា ។
- `path` ជា absolute path ក្នុងកម្រិតសកល ។ វាដើរធម្មតាដូចជម្រើស `path` នៅក្នុងសកម្មភាព `open`​ ដែលនឹង override ទាំង `vault` និង `file` ។
- `content` (ជម្រើសតាមចិត្ត) អត្ថបទសម្រាប់ឯកសារ ។
- `silent` (ជម្រើសតាមចិត្ត) ប្រើវាប្រសិនបើ់អ្នកមិនចង់មើលកំណត់ត្រាថ្មី ។
- `append` (ជម្រើសតាមចិត្ត) បញ្ចូលទៅឯកសារចាស់ណាមួយ បើមានស្រាប់ ។
- `overwrite` (ជម្រើសតាមចិត្ត) សរសេរលើឯកសារចាស់ណាមួយ បើមានស្រាប់ ប៉ុន្តែទាល់តែ `append` មិនបានប្រើ ។
- `x-success` (ជម្រើសតាមចិត្ត) មើល [[#x-callback-url]] ។

ឧទាហរណ៏:

- `obsidian://new?vault=my%20vault&name=my%20note`
  វានឹងបើក `my vault` ហើយបង្កើតកំណត់ត្រាថ្មីមួយ `my note` ។
- `obsidian://new?vault=my%20vault&path=path%2Fto%2Fmy%20note`
  វានឹងបើក `my vault` ហើយបង្កើតកំណត់ត្រាថ្មីមួយនៅទីតាំង `path/to/my note` ។

#### សកម្មភាព `hook-get-address`

ពិពណ៌នា: Endpoint សម្រាប់ប្រើជាមួយ [Hook](https://hookproductivity.com/) ។​ ប្រើ: `obsidian://hook-get-address`

បើ `x-success` បានបញ្ជាក់ API នឹងប្រើវាជា x-callback-url ។ បើមិនដូច្នោះទេ វានឹងចម្លង Markdown link របស់កំណត់ត្រាដែលអ្នកកំពុងដែលផ្តោតមើលទៅ clipboard, ដាក់ជា `obsidian://open` URL ។

ប៉ារ៉ាម៉ែត្រដែលអាចប្រើបាន:

- `vault` (ជម្រើសតាមចិត្ត) អាចជាឈ្មោះ vault ឬ vault ID ។ បើមិនឲ្យទេ vault ដែលកំពុងតែផ្តោតលើ ឬ vault​ ចុងក្រោយនឹងត្រូវបានប្រើ ។
- `x-success` (ជម្រើសតាមចិត្ត) មើល [[#x-callback-url]] ។
- `x-error` (ជម្រើសតាមចិត្ត) មើល [[#x-callback-url]] ។

## x-callback-url

មានឲ្យប្រើតាំងពី v0.14.3 ។

Endpoints មួយចំនួននឹងទទួលយក x-callback-url ប៉ារ៉ាម៉ែត្រ `x-success` និង `x-error` ។ នៅពេលដែលឲ្យ Obsidian នឹងឲ្យវត្ថុខាងក្រោមទៅកាន់ `x-success` callback:

- `name` ឈ្មោះឯកសារ​ ដោយរំលងឯកសារ extension ។
- `url` ដែលជា `obsidian://` URI ប្រើសម្រាប់ឯកសារនេះ ។
- `file` (សម្រាប់តែ desktop) `file://` URL ប្រើសម្រាប់ឯកសារនេះ ។

ឧទាហរណ៏ បើយើងទទួលបាន
`obsidian://.....x-success=myapp://x-callback-url`
ការឆ្លើយតបមកវិញគឺ
`myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`

## ទ្រង់ទ្រាយខ្លី

ក្រៅពីទ្រង់ទ្រាយខាងលើមានទ្រង់ទ្រាយ​ "ខ្លី" ចំនួនពីរទៀតដែលអាចប្រើបានដើម្បីបើក vault និង ឯកសារ ៖

- `obsidian://vault/my vault/my note` គឺដូចនឹង `obsidian://open?vault=my%20vault&file=my%20note`
- `obsidian:///absolute/path/to/my note` គឺដូចនឹង `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`
