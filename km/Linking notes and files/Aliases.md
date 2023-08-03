---
aliases: 
- alias
- aliases
- របៀប/ដាក់ aliases ទៅកំណត់ត្រា
---

ប្រសិនបើអ្នកចង់យោងឯកសារដោយប្រើឈ្មោះផ្សេង, សូមគិតដាក់ _aliases_ ទៅកំណត់ត្រារបស់អ្នក ។ Alias ជាឈ្មោះមួយទៀតនៃកំណត់ត្រា ។

ប្រើ aliases សម្រាប់អក្សរកាត់, ឈ្នោះកាត់, ឬ យោងឯកសារនៅក្នុងភាសាមួយទៀត ។

## ដាក់ alias ទៅកំណត់ត្រាមួយ

ដើម្បីដាក់ alias ទៅកំណត់ត្រាមួយ, ដាក់ `alias`, ឬ `aliases`, នៅក្នុងកំណត់ត្រា [[Metadata|front matter]]:

```md
---
alias: Doggo
---

# Dog
```

អ្នកអាចដាក់ aliases ច្រើនដោយប្រើ commas:

```md
---
aliases: Doggo, Woofer, Yapper
---

# Dog
```

ឬ, អ្នកអាចដាក់ aliases ច្រើនដោយប្រើ YAML array:

```md
---
aliases:
  - Doggo
  - Woofer
  - Yapper
---

# Dog
```

## Link ទៅកំណត់ត្រាដោយប្រើ alias

ដើម្បី link ទៅកំណត់ត្រាដោយប្រើ alias:

1. ចាប់ផ្តើមសរសេរ alias នៅក្នុង [[Internal links|internal link]] ។ Alias ណាដែលបង្ហាញខ្លួននៅក្នុងបញ្ជី suggestion ជាមួយសញ្ញាព្រួញកោងនៅបន្ទាប់ពីវា ។
2. ចុច `Enter` ដើម្បីយក alias.

Obsidian បង្កើត link ជាមួយ alias ជា custom display text ឧទាហរណ៍ `[[Artificial Intelligence|AI]]`.

> [!note]
> ជាជាងគ្រាន់តែប្រើ alias ជាទិសដៅតំណ (`[[AI]]`), Obsidian ប្រើទម្រង់ `[[Artificial Intelligence|AI]]` ដើម្បីធានាបាននូវនិរន្តរភាពជាមួយកម្មវិធីផ្សេងដែលប្រើទម្រង់ Wikilink ។

## រក unlinked mentions សម្រាប់ alias

ដោយប្រើ [[Backlinks]], អ្នកអាចរក unlinked mentions នៃ aliases ។

ឧទាហរណ៍, បន្ទាប់ពីដាក់ "AI" ជា alias សម្រាប់ "Artificial intelligence", អ្នកអាចឃើញការហៅ "AI" នៅក្នុងកំណត់ត្រាផ្សេង ។

បើអ្នក link unlinked mention ទៅ alias, Obsidian នឹងកែ mention ជា [[Internal links|internal link]] ជាមួយ alias ដូច display text របសវា ។
