---
permalink: install
---
Obsidian មានសម្រាប់វេទិកាកុំព្យូទ័រ និងទូរសព្ទធំៗទាំងអស់។ ខាងក្រោមនេះជាវិធីទាំងអស់ដែលគាំទ្រក្នុងការទាញយក និងដំឡើង Obsidian។

## ដំឡើង Obsidian លើ Windows

1. បើកកម្មវិធីរុករកអ៊ីនធឺណិតរបស់អ្នក ហើយចូលទៅកាន់ [ទាញយក Obsidian](https://obsidian.md/download)។
2. នៅក្រោម **Windows** ចុច **Universal** ដើម្បីទាញយកឯកសារដំឡើង។
3. បើកឯកសារដំឡើង ហើយធ្វើតាមការណែនាំ។
4. បើក Obsidian ដូចការបើកកម្មវិធីផ្សេងៗទៀតដែរ។

## ដំឡើង Obsidian លើ macOS

1. បើកកម្មវិធីរុករកអ៊ីនធឺណិតរបស់អ្នក ហើយចូលទៅកាន់ [ទាញយក Obsidian](https://obsidian.md/download)។
2. នៅក្រោម **macOS** ចុច **Universal** ដើម្បីទាញយកឯកសារដំឡើង។
3. បើកឯកសារដំឡើង។
4. នៅក្នុងបង្អួចដែលបើកឡើង អូស Obsidian ទៅថតកម្មវិធី (Applications)។
5. បើក Obsidian ដូចការបើកកម្មវិធីផ្សេងៗទៀតដែរ។

## ដំឡើង Obsidian លើ Linux

ប្រសិនបើអ្នកប្រើ Linux អ្នកអាចដំឡើង Obsidian តាមវិធីជាច្រើន។ សូមធ្វើតាមការណែនាំសម្រាប់ប្រព័ន្ធកញ្ចប់ដែលអ្នកកំពុងប្រើ។

### ដំឡើង Obsidian ដោយប្រើ Snap

1. បើកកម្មវិធីរុករកអ៊ីនធឺណិតរបស់អ្នក ហើយចូលទៅកាន់ [ទាញយក Obsidian](https://obsidian.md/download)។
2. នៅក្រោម **Linux** ចុច **Snap** ដើម្បីទាញយកឯកសារដំឡើង។
3. បើកស្ថានីយ (terminal) ហើយចូលទៅថតដែលអ្នកបានទាញយកឯកសារដំឡើង។
4. នៅក្នុងស្ថានីយ សូមដំណើរការពាក្យបញ្ជាខាងក្រោមដើម្បីដំឡើងកញ្ចប់ Snap៖ (ទង់ `--dangerous` ត្រូវការព្រោះ Canonical ក្រុមហ៊ុនដែលបង្កើត Snap មិនបានពិនិត្យកញ្ចប់របស់យើងទេ ហើយទង់ `--classic` អនុញ្ញាតឱ្យ Obsidian ចូលប្រើក្រៅ sandbox ជាកន្លែងដែលកំណត់ត្រារបស់អ្នកត្រូវបានរក្សាទុក)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. បើក Obsidian ដូចការបើកកម្មវិធីផ្សេងៗទៀតដែរ។

### ដំឡើង Obsidian ដោយប្រើ AppImage

1. បើកកម្មវិធីរុករកអ៊ីនធឺណិតរបស់អ្នក ហើយចូលទៅកាន់ [ទាញយក Obsidian](https://obsidian.md/download)។
2. នៅក្រោម **Linux** ចុច **AppImage** ដើម្បីទាញយកឯកសារដំឡើង។
3. បើកស្ថានីយ ហើយចូលទៅថតដែលអ្នកបានទាញយកឯកសារដំឡើង។
4. នៅក្នុងស្ថានីយ សូមដំណើរការពាក្យបញ្ជាខាងក្រោមដើម្បីបើក Obsidian៖

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
ចំណាំ៖ នៅលើ Chromebooks កញ្ចប់ `libnss3-dev` ត្រូវតែត្រូវបានដំឡើង បើមិនដូច្នេះទេ អ្នកអាចទទួលបានកំហុស `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`។

### ដំឡើង Obsidian ដោយប្រើ Flatpak

1. នៅក្នុងស្ថានីយរបស់អ្នក សូមដំណើរការពាក្យបញ្ជាខាងក្រោមដើម្បីដំឡើង Obsidian៖

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. បើក Obsidian ដោយដំណើរការពាក្យបញ្ជាខាងក្រោម៖

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## ដំឡើង Obsidian លើ Android

1. ស្វែងរក Obsidian នៅលើ [Play Store](https://play.google.com/store/apps/details?id=md.obsidian)។
2. ចុច **Install** ដើម្បីទាញយកកម្មវិធី។
3. បើក Obsidian ដូចការបើកកម្មវិធីផ្សេងៗទៀតដែរ។

អ្នកអាចជ្រើសរើសទាញយក APK សម្រាប់ Android ពីទំព័រ [ទាញយក Obsidian](https://obsidian.md/download) ផងដែរ។

## ដំឡើង Obsidian លើ iPhone និង iPad

1. ស្វែងរក Obsidian នៅលើ [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442)។
2. ចុច **Get** ដើម្បីទាញយកកម្មវិធី។
3. បើក Obsidian ដូចការបើកកម្មវិធីផ្សេងៗទៀតដែរ។
