---
aliases: 
- របៀប/Internal link
- របៀប/Link ទៅប្លុក
---

រៀនពីរបៀបភ្ជាប់ឯកសារ, ឯកសារភ្ជាប់, និងឯកសារផ្សេងទៀតពីកំណត់ត្រារបស់អ្នក, ដោយប្រើ _internal links_ ។ ដោយភ្ជាប់កំណត់ត្រា, អ្នកអាចបង្កើតបណ្តាញចំណេះ ។ ^b15695

Obsidian អាច update internal links បានភ្លាមនិងស្វ័យប្រវត្តិនៅក្នុង vault នៅពេលអ្នកកែឈ្មោះឯកសារ ។ បើអ្នកចង់ឲ្យវាសួរមុនធ្វើ អ្នកអាចបិទវាក្នុង **Settings** > **Files & Links** > **Automatically update internal links** ។

## ទម្រង់ដែលអាចប្រើបានសម្រាប់ internal links

Obsidian អាចប្រើជាមួយទម្រង់ដូចខាងក្រោម:

- Wikilink: `[[Three laws of motion]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion.md)`

គំរូខាងលើគឺដូចគ្នា—ពួកវាដូចគ្នានៅក្នុង editor, ហើយភ្ជាប់ទៅកំណត់ត្រាដូចគ្នា ។

> [!note]
> ពេលប្រើទម្រង់ Markdown សូមប្រាកដថាធ្វើ [URL encode](https://en.wikipedia.org/wiki/Percent-encoding) លើទិសដៅតំណ ។ ឧទាហរណ៍, ឃ្លាទទេក្លាយជា `%20` ។

តាមធម្មតា, ដោយសារចង់បានទម្រង់តូច, Obsidian បង្កើត links ដោយប្រើ Wikilink ។ បើអន្តរកម្មមានសារៈសំខាន់ចំពោះអ្នក អ្នកអាចបិទ Wikilinks ហើយប្រើ Markdown វិញ ។

ដើម្បីប្រើទម្រង់ Markdown:

1. បើក **Settings**.
2. នៅក្រោម **Files & Links**, បិទ **Use \[\[Wikilink\]\]** ។

ទោះបីជាអ្នកបិទ Wikilink, អ្នកនៅតែអាច autocomplete links ដោយសរសេរតង្កៀប ២ `[[` ។​ នៅពេលដែលអ្នកយកឯកសារដែលលេចឡើងណាមួយ, Obsidian នឹងបង្កើត Markdown link ។

## ភ្ជាប់ទៅឯកសារ

ដើម្បីបង្កើត link នៅពេលនៅក្នុង Editing view, ប្រើវិធីខាងក្រោម:

- សរសេរ `[[` នៅក្នុង editor ហើយយកឯកសារដែលអ្នកចង់បង្កើត link ទៅ ។
- ចាប់យកអក្សរនៅក្នុង editor ហើយសរសេរ `[[` ។
- បើក [[Command palette]] ហើយយក **Add internal link** ។

ទោះបីជាអ្នកអាចភ្ជាប់ទៅឯកសារនៅក្នុង [[ឯកសារដែលទទួលយកបាន]], ការភ្ជាប់ទៅឯកសារដែលមិនមែនជា Markdown ត្រូវមាន file extension ដូចជា `[[Figure 1.png]]` ។

## ភ្ជាប់ទៅចំណងជើងនៃកំណត់ត្រា

អ្នកអាចភ្ជាប់ទៅចំណងជើងណាមួយនៅក្នុងកំណត់ត្រា វាជា _anchor links_ ។

ដើម្បីភ្ជាប់ចំណងជើង ដាក់សញ្ញា (`#`) នៅចុងទិសដៅតំណបន្ទាប់មកចំណងជើង ។

ឧទាហរណ៍, `[[Three laws of motion#Second law]]` ។

អ្នកអាច hashtags ច្រើនសម្រាប់ចំណងជើងតូចៗ ។

ឧទាហរណ៍, `[[My note#Heading 1#Heading 2]]` ។

## ភ្ជាប់ទៅប្លុកនៅក្នុងកំណត់ត្រា

ប្លុកជាសំណុំអត្ថបទនៅក្នុងកំណត់ត្រា ដូចជា កថាខណ្ឌ, ប្លុក quote, ឬ បញ្ជីវត្ថុ ។

អ្នកអាចភ្ជាប់ទៅប្លុកដោយដាក់ `#^` នៅខាងចុងនៃទិសតំណ បន្តដោយ unique block identifier ឧទាហរណ៍ `[[2023-01-01#^37066d]]` ។

សំណាងល្អអ្នកមិនចាំបាច់ដឹង identifier ទេ ។ នៅពេលអ្នកសរសេរ (`^`), អ្នកអាចយកប្លុកពីបញ្ជីនៃ suggestions ទៅបញ្ចូល identifier ។

អ្នកអាចបង្កើតប្លុក identifiers ដែលមនុស្សអាចអានបានដោយដាក់ ` ^quote-of-the-day` នៅខាងចុងប្លុក ។ ចាំថាមានឃ្លាទទេមុន caret ។ ឥឡូវអ្នកអាចភ្ជាប់ទៅប្លុកដោយវាយ `[[2023-01-01#^quote-of-the-day]]` ។

ប្លុក identifiers មានអក្សរ លេខ និង dash ។

> [!warning] និរន្តរភាព
> ប្លុកសំយោងមានសម្រាប់តែ Obsidian ហើយគ្មានក្នុងទម្រង់ Markdown ។ Links មានសំយោងប្លុកមិនអាចប្រើបាននៅក្រៅ Obsidian ទេ ។

## ប្តូរ link display text

អ្នកអាចប្តូរសម្រាប់បង្ហាញ link ។ វាមានប្រយោជន៍ពេលអ្នកចង់ដាក់ link ក្នុងប្រយោគន៍ដោយមានប្រើឈ្មោះវា ។

**ទម្រង់ Wikilink:**

អ្នកអាចប្រើ់របារឈរ (`|`) ទៅប្តូរឈ្មោះបង្ហាញ link ។

ឧទាហរណ៍, `[[Internal links|custom display text]]` បង្ហាញជា [[Internal links|custom display text]] ។

**ទម្រង់ Markdown:**

ដាក់ display text នៅក្នុង (`[]`) ។

ឧទាហរណ៍, `[custom display text](Internal%20links.md)` បង្ហាញជា [custom display text](Internal%20links.md) ។

## មើលឯកសារភ្ជាប់

> [!note]
> ដើម្បីមើលឯកសារភ្ជាប់, អ្នកត្រូវបើក [[Page preview]] ។

ដើម្បីមើលឯកសារភ្ជាប់, ចុច `Ctrl` (ឬ `Cmd` នៅលើ macOS) ខណៈអ្នកដាក់ mouse នៅពីលើ link ។ Preview នៃឯកសារនឹងមាននៅជិត cursor ។
