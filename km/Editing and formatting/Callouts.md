---
aliases:
- របៀប/ប្រើ callouts
---

ប្រើ callouts ទៅរាប់បញ្ចូលព័ត៌មានបន្ថែមដោយមិនធ្វើឲ្យលំហូរកំណត់ត្រារបស់អ្នកខូច ។

ដើម្បីបង្កើត callout ដាក់ `[!info]` នៅដើមជួរនៃ blockquote ដែល `info` ជា _type identifier_ ។ Type identifier​​ កំណត់ពីរូបរាងខាងក្រៅ និង​​ ការប្រើប្រាស់វា ។ ដើម្បីមើល types ទាំងអស់ដែលអ្នកអាចប្រើ់បាន សូមមើល [[#Supported types]] ។

```markdown
> [!info]
> នេះជាប្លុក callout ។
> វាអាចប្រើជាមួយ **Markdown** [[Internal links|Wikilinks]] និង [[បង្កប់ឯកសារ|បង្កប់]]!
> ![[og-image.png]]
```

> [!info]
> នេះជាប្លុក callout ។
> វាអាចប្រើជាមួយ **Markdown** [[Internal links|Wikilinks]] និង [[បង្កប់ឯកសារ|បង្កប់]]!
> ![[og-image.png]]

Callouts ក៏អាចប្រើបាននៅក្នុង [[en/Obsidian Publish/Introduction to Obsidian Publish|Obsidian Publish]] ។

> [!note]
> បើអ្នកប្រើកម្មវិធីជំនួយ Admonitions អ្នកត្រូវដំឡើងឲ្យវាដល់ version 8.0.0 ដើម្បីជៀសវាងបញ្ហាជាមួយ​ callout ថ្មី ។

### ប្តូរឈ្មោះ

តាមធម្មតា ឈ្មោះរបស់ callout គឺជា type identifier នៅក្នុងទម្រង់ដូចឈ្មោះវា ។ អ្នកអាចប្តូរវាដោយសរសេរឈ្មោះបន្ទាប់ពី type identifier:

```markdown
> [!tip] Callouts​ អាចមានឈ្មោះផ្ទាល់ខ្លួនមួយ
> ដូចមួយនេះ ។
```

> [!tip] Callouts​ អាចមានឈ្មោះផ្ទាល់ខ្លួនមួយ
> ដូចមួយនេះ ។

អ្នកអាចមិនសរសេរអ្វីនៅក្នុងតួខ្លួនវាដោយបង្កើត callouts ដែលមានតែឈ្មោះ:

```markdown
> [!tip] callout មានតែឈ្មោះ
```

> [!tip] callout មានតែឈ្មោះ

### បត់ callouts

អ្នកអាចធ្វើឲ្យ callout បត់បានដោយដាក់សញ្ញាបូក (+) ឬ សញ្ញាដក (-) បន្ទាប់ពី type identifier ។

សញ្ញាបូកនឹងពង្រីក callout តែម្តង ហើយសញ្ញាដកនឹងបត់វា ។

```markdown
> [!faq]- តើ callouts បត់បានទេ?
> អាច! នៅក្នុង callouts ដែលបត់បាន អត្ថបទនៅក្នុងត្រូវបានបិទមិនឲ្យឃើញនៅពេលដែលបិទវា ។
```

> [!faq]- តើ callouts បត់បានទេ?
> អាច! នៅក្នុង callouts ដែលបត់បាន អត្ថបទនៅក្នុងត្រូវបានបិទមិនឲ្យឃើញនៅពេលដែលបិទវា ។

### Callouts ជាជាន់

អ្នកអាចដាក់ callouts ជាច្រើនជាន់ ។

```markdown
> [!question] តើ callouts ដាក់ជាជាន់បានទេ?
> > [!todo] អាចធ្វើបាន ។
> > > [!example]  អ្នកអាចដាក់វាជាច្រើនជាន់ទៀតផង ។
```

> [!question] តើ callouts ដាក់ជាជាន់បានទេ?
> > [!todo] អាចធ្វើបាន ។
> > > [!example]  អ្នកអាចដាក់វាជាច្រើនជាន់ទៀតផង ។

### Customize callouts

[[en/Extending Obsidian/CSS snippets]] និង [[កម្មវិធីជំនួយសហគមន៍]] អាចកំណត់ callouts ឬ សរសេរពីលើ configuration ចាស់ ។

ដើម្បីកំណត់ callout, បង្កើតប្លុក CSS ខាងក្រោម:

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

តម្លៃនៃ `data-callout` ជា type identifier ដែលអ្នកចង់ប្រើ ឧទាហរណ៍ `[!custom-question-type]` ។

- `--callout-color` កំណត់ពណ៌ផ្ទៃខាងក្រោយដោយប្រើលេខ (0–255) សម្រាប់ក្រហម បៃតង និង​ ខៀវ ។
- `--callout-icon` អាចជា icon ID ពី [lucide.dev](https://lucide.dev) ឬ ធាតុ SVG ។

> [!tip] SVG icons
> បើមិនប្រើ Lucide icon អ្នកអាចប្រើធាតុ SVG ជារូបតំណាង callout ។
>
> ```css
> --callout-icon: '<svg>...custom svg...</svg>';
> ```

### Supported types

អ្នកអាចប្រើ callout types និង aliases មួយចំនួនបាន ។ Type នីមួយៗមានពណ៌ផ្ទៃខាងក្រោយ និង រូបតំណាងផ្សេងគ្នា ។
 
ដើម្បីប្រើរចនាបទចាស់ ប្តូរ `info` នៅក្នុងឧទាហរណ៍ខាងក្រោមដោយ types ណាក៏បានដូចជា `[!tip]` ឬ `[!warning]` ។

លុះត្រាតែអ្នកចង់ [[#Customize callouts]] type ណាដែលមិនមាននឹងមានទម្រង់ដូច `note` type ។​ Type identifier គឺ case-insensitive ។

> [!note]
> ```md
> > [!note]
> > Lorem ipsum dolor sit amet
> ```

---

> [!abstract]
> ```md
> > [!abstract]
> > Lorem ipsum dolor sit amet
> ```

Aliases: `summary`, `tldr`

---

> [!info]-
> ```md
> > [!info]
> > Lorem ipsum dolor sit amet
> ```

---

> [!todo]-
> ```md
> > [!todo]
> > Lorem ipsum dolor sit amet
> ```

---

> [!tip]-
> ```md
> > [!tip]
> > Lorem ipsum dolor sit amet
> ```

Aliases: `hint`, `important`

---

> [!success]-
> ```md
> > [!success]
> > Lorem ipsum dolor sit amet
> ```

Aliases: `check`, `done`

---

> [!question]-
> ```md
> > [!question]
> > Lorem ipsum dolor sit amet
> ```

Aliases: `help`, `faq`

---

> [!warning]-
>  ```md
> > [!warning]
> > Lorem ipsum dolor sit amet
> ```

Aliases: `caution`, `attention`

---

> [!failure]-
> ```md
> > [!failure]
> > Lorem ipsum dolor sit amet
> ```

Aliases: `fail`, `missing`

---

> [!danger]-
> ```md
> > [!danger]
> > Lorem ipsum dolor sit amet
> ```

Alias: `error`

---

> [!bug]-
> ```md
> > [!bug]
> > Lorem ipsum dolor sit amet
> ```

---

> [!example]-
> ```md
> > [!example]
> > Lorem ipsum dolor sit amet
> ```

---

> [!quote]-
> ```md
> > [!quote]
> > Lorem ipsum dolor sit amet
> ```

Alias: `cite`
