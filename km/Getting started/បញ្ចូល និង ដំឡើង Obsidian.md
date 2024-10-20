ទំព័រនេះស្តីពីរបៀបបញ្ចូល និង​ ដំឡើង Obsidian ។

## ដំឡើង Obsidian នៅលើ Windows

1. បើក browser ហើយទៅ [បញ្ចូល Obsidian](https://obsidian.md/download) ។
2. នៅក្រោម **Windows** ចុច **64-bit installer** ទៅបញ្ចូលឯកសារដំឡើង ។
3. បើកឯកសារដំឡើង និង ធ្វើតាមការណែនាំ ។
4. បើក Obsidian ដូចដែលអ្នកបើកកម្មវិធីផ្សេងៗដែរ ។

## ដំឡើង Obsidian នៅលើ macOS

1. បើក browser ហើយទៅ [បញ្ចូល Obsidian](https://obsidian.md/download) ។
2. នៅក្រោម **macOS** ចុច **Universal DMG (Intel and M1)** ទៅបញ្ចូលឯកសារដំឡើង ។
3. បើកឯកសារដំឡើង ។
4. នៅក្នុង window ដែលត្រូវបានបើក អូស Obsidian ទៅថត Applications ។
5. បើក Obsidian ដូចដែលអ្នកបើកកម្មវិធីផ្សេងៗដែរ ។

## ដំឡើង Obsidian នៅលើ Linux

បើអ្នកប្រើ Linux អ្នកអាចដំឡើង Obsidian នៅក្នុងផ្លូវមួយចំនួន ។ ធ្វើតាមការណែនាំរបស់ packaging system ដែលអ្នកប្រើ ។

### ដំឡើង Obsidian ដោយប្រើ Snap

1. បើក browser ហើយទៅ [បញ្ចូល Obsidian](https://obsidian.md/download) ។
2. នៅក្រោម **Linux** ចុច **Snap** ទៅបញ្ចូលឯកសារដំឡើង ។
3. បើក terminal ហើយទៅថតដែលអ្នកបញ្ចូលឯកសារដំឡើង ។
4. នៅក្នុង terminal ប្រើ command ខាងក្រោមទៅដំឡើង Snap package: (ត្រូវការ `--dangerous` flag ព្រោះ Canonical ជាក្រុមហ៊ុនដែលបង្កើត Snap មិនបានពិនិត្យមើល package របស់យើងទេ ។ `--classic` flag អនុញ្ញាត Obsidian ឲ្យមានសិទ្ធិធ្វើអ្វី នៅក្រៅកន្លែងដែលកំណត់ត្រារបស់អ្នកត្រូវបានស្តុកទុក)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. បើក Obsidian ដូចដែលអ្នកបើកកម្មវិធីផ្សេងៗដែរ ។

### ដំឡើង Obsidian ដោយប្រើ AppImage

1. បើក browser ហើយទៅ [បញ្ចូល Obsidian](https://obsidian.md/download) ។
2. នៅក្រោម **Linux** ចុច **AppImage** ទៅបញ្ចូលឯកសារដំឡើង ។
3. បើក terminal ហើយទៅថតដែលអ្នកបញ្ចូលឯកសារដំឡើង ។
4. នៅក្នុង terminal, ប្រើ command ខាងក្រោមទៅបើក Obsidian:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage
   ```

### ដំឡើង Obsidian ដោយប្រើ Flatpak

1. នៅក្នុង terminal ប្រើ command ខាងក្រោមទៅដំឡើង Obsidian:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. បើក Obsidian ដោយប្រើ command ខាង​ក្រោម:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## ដំឡើង Obsidian នៅលើ Android

1. រក Obsidian នៅក្នុង [Play Store](https://play.google.com/store/apps/details?id=md.obsidian) ។
2. ចុច **Install** ទៅបញ្ចូលកម្មវិធី ។
3. បើក Obsidian ដូចដែលអ្នកបើកកម្មវិធីផ្សេងៗដែរ ។

## ដំឡើង Obsidian នៅលើ iPhone និង iPad

1. រក Obsidian នៅក្នុង [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442) ។
2. ចុច **Get** ទៅបញ្ចូលកម្មវិធី ។
3. បើក Obsidian ដូចដែលអ្នកបើកកម្មវិធីផ្សេងៗដែរ ។
