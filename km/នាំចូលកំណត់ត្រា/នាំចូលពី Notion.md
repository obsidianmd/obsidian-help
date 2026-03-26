---
permalink: import/notion
---
Obsidian អនុញ្ញាតឱ្យអ្នកផ្ទេរកំណត់ត្រារបស់អ្នកពី Notion បានយ៉ាងងាយស្រួលដោយប្រើ [[កម្មវិធីនាំចូល|កម្មវិធីជំនួយ Importer]]។ វានឹងបម្លែងទិន្នន័យ Notion របស់អ្នកទៅជាឯកសារ Markdown ដែលប្រើបានយូរអង្វែង ដែលអ្នកអាចប្រើក្រៅបណ្តាញជាមួយ Obsidian និងកម្មវិធីផ org សេងៗទៀតជាច្រើន។

Obsidian ផ្តល់ជូនវិធីពីរសម្រាប់នាំចូលទិន្នន័យ Notion របស់អ្នក៖

1. **ការនាំចូលតាម API** រក្សាទុកកន្លែងធ្វើការទាំងមូលរបស់អ្នករួមទាំង Databases និងរូបមន្តដែលត្រូវបានបម្លែងទៅជា [[ការណែនាំអំពី Bases|Bases]] ប៉ុន្តែតម្រូវឱ្យមាន Notion integration token និងការតភ្ជាប់អ៊ីនធឺណិត។
2. **ការនាំចូលតាមឯកសារ** មិនរក្សាទុក Databases ប៉ុន្តែមិនតម្រូវឱ្យមាន API token ឬការតភ្ជាប់អ៊ីនធឺណិតទេ។

## ការនាំចូលតាម API

### បង្កើត Notion API integration token

ដើម្បីចូលប្រើទិន្នន័យ Notion របស់អ្នកតាម API អ្នកត្រូវការ integration token។ ជំហាននេះត្រូវការពេលប្រហែល 2 នាទីដើម្បីបញ្ចប់។

Token គឺជាខ្សែអក្សរវែងមួយនៃលេខ និងអក្សរ ជាធម្មតាចាប់ផ្តើមដោយ `ntn_...` ដែលនឹងអនុញ្ញាតឱ្យអ្នកទាញយកទិន្នន័យរបស់អ្នកពី Notion។

1. ចូលគណនីនៅក្នុង [Notion Integrations](https://www.notion.so/profile/integrations/internal) dashboard របស់អ្នក។
2. ជ្រើសរើស **New integration**។

![[notion-integration.png#interface]]

2. ដាក់ឈ្មោះ integration របស់អ្នក ឧ. "Personal"។ អាចប្រើឈ្មោះអ្វីក៏បាន។
3. ជ្រើសរើស workspace ដែលអ្នកចង់នាំចេញ។
4. ចុច **Save** រួចបន្តទៅ **Configure integration settings**។
5. នៅក្នុងផ្ទាំង **Configuration** API token របស់អ្នកអាចចូលប្រើបាននៅក្នុងវាល **Internal Integration Secret**។
6. ជ្រើសរើស **Show** បន្ទាប់មក **Copy**។
7. រក្សាទុក token នៅកន្លែងមានសុវត្ថិភាពដូចជាកម្មវិធីគ្រប់គ្រងពាក្យសម្ងាត់របស់អ្នក។

![[notion-token.png#interface]]

បន្ទាប់មក ផ្តល់សិទ្ធិចូលប្រើ integration របស់អ្នកទៅកាន់ទំព័រ និង databases របស់ Notion ដែលអ្នកចង់នាំចូល។

1. ទៅកាន់ផ្ទាំង **Access** នៃ integration ដែលអ្នកទើបតែបង្កើត។
2. ចុច **Edit access**។
3. បន្ថែមទំព័រ និង databases ដែលអ្នកចង់នាំចូល។

ឥឡូវអ្នកអាចបម្លែងទិន្នន័យរបស់អ្នកដោយប្រើ Obsidian Importer។

### នាំចូលទិន្នន័យ Notion របស់អ្នកតាម API

អ្នកនឹងត្រូវការកម្មវិធីជំនួយ [[កម្មវិធីនាំចូល|Importer]] ផ្លូវការរបស់ Obsidian ដែលអ្នកអាច [ដំឡើងនៅទីនេះ](obsidian://show-plugin?id=obsidian-importer)។

1. បើក **[[ការកំណត់]]**។
2. ទៅកាន់ **Community Plugins** រួច [ដំឡើង Importer](obsidian://show-plugin?id=obsidian-importer)។
3. បើកដំណើរការកម្មវិធីជំនួយ Importer។
4. បើកកម្មវិធីជំនួយ **Importer** ដោយប្រើ command palette ឬរូបតំណាងលើ ribbon។
5. នៅក្រោម **File format** ជ្រើសរើស **Notion (API)**
6. នៅក្រោម **API token** បិទភ្ជាប់ **Internal Integration Secret** របស់អ្នកពី Notion។
7. ចុច **Load** ដើម្បីជ្រើសរើស databases និងទំព័រដែលអ្នកចង់នាំចូល។
8. ពិនិត្យ និងកែសម្រួលជម្រើសនាំចូល។
9. ជ្រើសរើស **Import** រួចរង់ចាំរហូតដល់ការនាំចូលបានបញ្ចប់
10. រួចរាល់ហើយ!

### ដែនកំណត់

> [!info] ការនាំចូលតាម API គឺថ្មី
> កម្មវិធីនាំចូល Notion API គឺថ្មី។ ដោយសារតែភាពស្មុគស្មាញនៃ Notion workspaces ករណីពិសេសមួយចំនួនអាចមិនបានពិចារណា។ ប្រសិនបើអ្នកជួបបញ្ហាជាមួយការបម្លែង សូម [ដាក់របាយការណ៍កំហុស](https://github.com/obsidianmd/obsidian-importer/issues) ដើម្បីឱ្យយើងអាចកែលម្អវាបាន។

ដោយសារដែនកំណត់អត្រា Notion API ការនាំចូល workspaces ធំអាចត្រូវការពេលវេលាច្រើន។ សូមអត់ធ្មត់។

ដោយសារដែនកំណត់នៅក្នុង Notion API ទិន្នន័យមួយចំនួនមិនមាន ឬមិនអាចបម្លែងបាន៖

- មានតែទិដ្ឋភាពចម្បងសម្រាប់ database នីមួយៗប៉ុណ្ណោះដែលត្រូវបាននាំចូល។
- [Linked data sources](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases) មិនត្រូវបាននាំចូលទេ៖ *"Notion's API does not currently support linked data sources. When sharing a database with your integration, make sure it contains the original data source!"*
- អនុគមន៍ `People`៖ `name()` និង `email()`
- អនុគមន៍ `Text`៖ `style()` និង `unstyle()`

លើសពីនេះ Importer នឹងធ្វើការផ្លាស់ប្តូរដូចខាងក្រោម៖

- ទំព័រដែលគ្មានទំព័ររង ឬ databases នឹងត្រូវបាននាំចូលជា `[filename].md` ជំនួសឱ្យ `[filename]/[filename].md`។
- Databases តែងតែត្រូវបានតំណាងជាថតដែលមានឈ្មោះ `[database name]` ជាមួយឯកសារ `[database name].base` នៅខាងក្នុង។

## ការនាំចូលតាមឯកសារ

ការនាំចូលតាមឯកសារគឺជាវិធីជំនួសក្នុងការនាំចូលទិន្នន័យ Notion របស់អ្នក។ វិធីនេះមិនរក្សាទុក Databases ប៉ុន្តែមិនតម្រូវឱ្យមាន API token ឬការតភ្ជាប់អ៊ីនធឺណិតទេ។

### នាំចេញទិន្នន័យរបស់អ្នកពី Notion

ដើម្បីរៀបចំទិន្នន័យរបស់អ្នកសម្រាប់ការនាំចូល អ្នកនឹងត្រូវនាំចេញ workspace ទាំងមូលរបស់អ្នកដោយប្រើទម្រង់នាំចេញ HTML របស់ Notion។ យើងណែនាំថាអ្នកមិនគួរប្រើការនាំចេញ Markdown របស់ Notion ព្រោះវាខកខានទិន្នន័យសំខាន់ៗ។ អ្នកត្រូវតែមានសិទ្ធិ admin ទៅកាន់ Notion workspace ដើម្បីនាំចេញមាតិកា workspace ទាំងអស់។

1. ទៅកាន់ **[[ការកំណត់]]** នៅផ្នែកខាងលើនៃរបារចំហៀង Notion។
2. នៅក្រោម **Workspace** ជ្រើសរើស **General**។
3. រក និងជ្រើសរើស **Export all workspace content**។
4. នៅក្រោម **Export format** ជ្រើសរើស **HTML**។
5. ជ្រើសរើស **Include everything**។
6. បើកដំណើរការ **Create folders for subpages**។
7. អ្នកនឹងទទួលបានឯកសារ `.zip` តាមអ៊ីមែល ឬដោយផ្ទាល់នៅក្នុងកម្មវិធីរុករក។

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### នាំចូលឯកសារ .zip របស់ Notion

អ្នកនឹងត្រូវការកម្មវិធីជំនួយ [[កម្មវិធីនាំចូល|Importer]] ផ្លូវការរបស់ Obsidian ដែលអ្នកអាច [ដំឡើងនៅទីនេះ](obsidian://show-plugin?id=obsidian-importer)។

1. បើក **[[ការកំណត់]]**។
2. ទៅកាន់ **Community Plugins** រួច [ដំឡើង Importer](obsidian://show-plugin?id=obsidian-importer)។
3. បើកដំណើរការកម្មវិធីជំនួយ Importer។
4. បើកកម្មវិធីជំនួយ **Importer** ដោយប្រើ command palette ឬរូបតំណាងលើ ribbon។
5. នៅក្រោម **File format** ជ្រើសរើស **Notion (.zip)**
6. ជ្រើសរើសឯកសារ `.zip` ដែលមានឯកសារ Notion ដែលអ្នកចង់នាំចូល។ *ណែនាំឱ្យនាំចូល Notion ទាំងអស់របស់អ្នកក្នុងពេលតែមួយ ដើម្បីឱ្យតំណភ្ជាប់ផ្ទៃក្នុងអាចផ្សះផ្សាបានត្រឹមត្រូវ។*
7. _ជម្រើសផ្សេង_ ជ្រើសរើសថតសម្រាប់ការនាំចូល ទំព័រ និង databases របស់ Notion នឹងត្រូវបានដាក់ក្នុងថតនេះ។
8. បើកដំណើរការ **Save parent pages in subfolders** ដើម្បីរក្សារចនាសម្ព័ន្ធ Notion។ *ចំណាំថានៅក្នុង Notion អ្នកអាចសរសេរមាតិកានៅក្នុងថត នេះមិនអាចធ្វើបាននៅក្នុង Obsidian ទេ ហើយទំព័រទាំងនេះនឹងត្រូវបានបន្ថែមជាទំព័ររងនៅក្រោមថត។*
9. ជ្រើសរើស **Import** រួចរង់ចាំរហូតដល់ការនាំចូលបានបញ្ចប់
10. រួចរាល់ហើយ!

### ការដោះស្រាយបញ្ហា

ប្រសិនបើអ្នកជួបបញ្ហាពេលនាំចូលពី Notion៖

- ត្រូវប្រាកដថាអ្នកប្រើ **HTML** ជាទម្រង់នាំចេញនៅក្នុង Notion **មិនមែន Markdown ទេ**។
- ប្រសិនបើ Obsidian មើលទៅដូចជាឈប់ដំណើរការពេលនាំចូល សូមបិទកម្មវិធីជំនួយសហគមន៍ រួចព្យាយាមម្តងទៀត។

ជួបបញ្ហាផ្សេងទៀត? ស្វែងរកនៅ [ឃ្លាំង Importer](https://github.com/obsidianmd/obsidian-importer/issues) ដើម្បីមើលថាតើអ្នកផ org សេងទៀតបានជួបបញ្ហានេះដែរឬទេ។

#### ការនាំចូល workspaces ធំ

ប្រសិនបើអ្នកកំពុងនាំចូល workspace ដែលមានទិន្នន័យច្រើន gigabytes ការនាំចេញពី Notion អាចមានឯកសារ `.zip` ដែលស្ថិតក្នុងគ្នា។ ក្នុងករណីនេះ អ្នកអាចឃើញសារកំហុសនាំចូលដែលមើលទៅដូចនេះ៖

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

ប្រសិនបើអ្នកឃើញកំហុសនេះ អ្នកអាចពន្លាឯកសារពី Notion រួចនាំចូលឯកសារ `Export-{id}-Part-1.zip` ដែលស្ថិតក្នុងគ្នានោះ។
