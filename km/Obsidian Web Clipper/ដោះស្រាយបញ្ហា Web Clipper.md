---
permalink: web-clipper/troubleshoot
---
បើអ្នកជួបបញ្ហាជាមួយ [[ការណែនាំអំពី Obsidian Web Clipper|Web Clipper]] អ្នកអាចទទួលបានជំនួយតាមរយៈ [ឆានែល Discord ផ្លូវការ](https://discord.com/channels/686053708261228577/1285652864089198672)។ អ្នកក៏អាចរាយការណ៍ bug នៅលើ [GitHub repo](https://github.com/obsidianmd/obsidian-clipper) ផងដែរ។

## ទូទៅ

### មាតិកាមួយចំនួនបាត់

តាមលំនាំដើម Web Clipper ព្យាយាមចាប់យកមាតិកាពីទំព័រដោយឆ្លាតវៃ។ ប៉ុន្តែវាប្រហែលជាមិនជោគជ័យក្នុងការធ្វើដូច្នេះនៅគ្រប់គេហទំព័រទាំងអស់ឡើយ។

Web Clipper ប្រើ [Defuddle](https://github.com/kepano/defuddle) ដើម្បីចាប់យកតែមាតិកាចម្បងរបស់ទំព័រប៉ុណ្ណោះ។ វាមិនរាប់បញ្ចូល header, footer និងធាតុផ្សេងៗទៀតទេ ប៉ុន្តែពេលខ្លះវាអាចមានភាពរឹតបន្តឹងពេក ហើយលុបមាតិកាដែលអ្នកចង់រក្សាទុក។ អ្នកអាច[រាយការណ៍ bug](https://github.com/kepano/defuddle) ទៅ Defuddle។

ដើម្បីរំលង Defuddle នៅក្នុង Web Clipper សូមប្រើវិធីខាងក្រោម៖

- ជ្រើសរើសអត្ថបទ ឬប្រើ `Cmd/Ctrl+A` ដើម្បីជ្រើសរើសអត្ថបទទាំងអស់។
- [[ពណ៌ចំណាំទំព័របណ្តាញ|រំលេចមាតិកា]] ដើម្បីជ្រើសរើសអ្វីដែលអ្នកចង់ចាប់យកយ៉ាងជាក់លាក់។
- ប្រើ [[Obsidian Web Clipper/ពុម្ព|គំរូផ្ទាល់ខ្លួន]] សម្រាប់គេហទំព័រនោះ។

### មិនមានមាតិកាបង្ហាញនៅក្នុង Obsidian

បើអ្នកមិនឃើញមាតិកាណាមួយក្នុង Obsidian នៅពេលអ្នកចុច **Add to Obsidian**៖

- ពិនិត្យមើលកំហុសនៅក្នុង [[ជំនួយ និងការគាំទ្រ#Capture console logs|កុងសូលអ្នកអភិវឌ្ឍន៍]] របស់ Obsidian។
- ពិនិត្យមើលថាឈ្មោះ vault របស់អ្នកក្នុងការកំណត់ Web Clipper ត្រូវគ្នាយ៉ាងជាក់លាក់ជាមួយ *ឈ្មោះ vault* របស់អ្នកក្នុង Obsidian *មិនមែនផ្លូវ vault ទេ*។
- ពិនិត្យមើលថាឈ្មោះថតឯកសារមានទម្រង់ត្រឹមត្រូវ។

## Linux

#### Obsidian មិនបើក

- ត្រូវប្រាកដថាពិធីការ [[Obsidian URI]] [[Obsidian URI#Register Obsidian URI|បានចុះឈ្មោះហើយ]]។
- បើអ្នកប្រើ Firefox អ្នកអាចត្រូវ[ចុះឈ្មោះវានៅក្នុងការកំណត់កម្មវិធីរុករក](https://kb.mozillazine.org/Register_protocol)។

#### Obsidian បើកប៉ុន្តែមានតែឈ្មោះឯកសារដែលត្រូវបានរក្សាទុក

វាទំនងជា Obsidian មិនអាចចូលប្រើ clipboard របស់អ្នក។ ការចូលប្រើ clipboard ចាំបាច់ដើម្បីបញ្ជូនទិន្នន័យពីកម្មវិធីរុករករបស់អ្នកទៅ Obsidian។ ការកំណត់រចនាសម្ព័ន្ធរបស់អ្នកអាចប៉ះពាល់ដល់របៀបដែលកម្មវិធីត្រូវបាន sandbox និងសិទ្ធិ clipboard។

បើអ្នកប្រើ Wayland សូមប្រាកដថា Obsidian មានសិទ្ធិអាន clipboard នៅពេលកម្មវិធីមិនត្រូវបានផ្តោត។ ចំណូលចិត្តនេះអាចនៅក្នុងកម្មវិធីគ្រប់គ្រងបង្អួច tiling របស់អ្នក ឧ. Hyprland ឬ Sway។

បើអ្នកប្រើ Hyprland៖

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

បើអ្នកប្រើ Sway៖

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- បើអ្នកប្រើ Flatpak សូមពិចារណាសាកល្បង [កំណែ Obsidian ដែលត្រូវបានគាំទ្រជាផ្លូវការ](https://obsidian.md/download)។
- បើអ្នកប្រើ KDE សូមចូលទៅ **System Settings** → **Window Management** → **Window Rules** ហើយអនុញ្ញាតឱ្យ Obsidian ទទួលការផ្តោត [[web-clipper-kde.png|មើលរូបថតអេក្រង់]]។
- ជាជម្រើសចុងក្រោយ សូមសាកល្បងប្តូរទៅ **Legacy mode** នៅក្នុង **Web Clipper Settings** → **General**។ វានឹងរំលង clipboard ហើយរក្សាទុកមាតិកាដោយផ្ទាល់តាមរយៈ URI។ សូមកត់សម្គាល់ថានេះនឹងកំណត់ចំនួនតួអក្សរដែលអាចចាប់យកបានអាស្រ័យលើកម្មវិធីរុករក និងការចែកចាយ Linux របស់អ្នក។

## iOS និង iPadOS

ដើម្បីបើកផ្នែកបន្ថែម Web Clipper សម្រាប់ Safari៖

1. ចូលទៅ Safari ចុចប៊ូតុងខាងឆ្វេងបំផុតនៅក្នុងរបារ URL កម្មវិធីរុករក វាមើលទៅដូចជាចតុកោណកែងដែលមានបន្ទាត់នៅខាងក្រោម។
2. ចុច **Manage Extensions**។
3. បើក **Obsidian Web Clipper** នៅក្នុងបញ្ជី Extensions។
4. ចេញពីម៉ឺនុយ។
5. ដើម្បីប្រើផ្នែកបន្ថែម **ចុចរូបតំណាងដុំផាស៊ល់** នៅក្នុងរបារ URL។

ដើម្បីអនុញ្ញាតឱ្យ Web Clipper ដំណើរការនៅគ្រប់គេហទំព័រ៖

1. ចូលទៅ iOS **[[ការកំណត់]]** → **Apps** → **Safari** → **Extensions**។
2. នៅក្រោម **Permissions** អនុញ្ញាតឱ្យវាដំណើរការនៅគ្រប់គេហទំព័រ។

ដើម្បីអនុញ្ញាតឱ្យ Obsidian ទទួលមាតិកា Web Clipper ជានិច្ច៖

1. ចូលទៅ iOS **[[ការកំណត់]]** → **Apps** → **Obsidian**។
2. កំណត់ **Paste from other apps** ទៅ **Allow**។
