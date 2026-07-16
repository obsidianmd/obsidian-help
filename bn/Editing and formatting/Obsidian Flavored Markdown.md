---
permalink: obsidian-flavored-markdown
publish: true
mobile: true
description: 'Obsidian Flavored Markdown সম্পর্কে জানুন, এতে সমর্থিত এক্সটেনশন এবং Markdown কীভাবে HTML এলিমেন্টের সাথে সম্পর্কিত হয় সেসহ।'
---

Obsidian বিদ্যমান কোনো ফরম্যাট না ভেঙে সর্বোচ্চ সক্ষমতার জন্য চেষ্টা করে। ফলস্বরূপ, আমরা [[Basic formatting syntax|Markdown]]-এর বিভিন্ন ভার্সনের সমন্বয় ব্যবহার করি।

Obsidian [CommonMark](https://commonmark.org/), [GitHub Flavored Markdown](https://github.github.com/gfm/), এবং [LaTeX](https://www.latex-project.org/) সমর্থন করে। 

> [!tip]- HTML-এর মধ্যে Markdown
> Obsidian HTML এলিমেন্টের ভেতরে Markdown সিনট্যাক্স রেন্ডার করে না। এটি পারফরম্যান্স অপ্টিমাইজেশনের জন্য এবং বড় ডকুমেন্ট পরিচালনা করার সময় পার্সার জটিলতা কম রাখার জন্য একটি ইচ্ছাকৃত ডিজাইন সিদ্ধান্ত।
>
> উদাহরণস্বরূপ, `**bold**` বা `` `code` ``-এর মতো Markdown ফরম্যাটিং `<div>`, `<span>`, `<table>`, বা অন্য কোনো HTML ট্যাগের ভেতরে প্রক্রিয়াজাত হবে না।
>
> ```md
> <div>
> This **will not** be bold.
> </div>
> ```

### সমর্থিত Markdown এক্সটেনশন

| Syntax          | Description                                                           |
| --------------- | --------------------------------------------------------------------- |
| `[[Link]]`      | [[Internal links]]                                                    |
| `![[Link]]`     | [[Embed files]]                                                       |
| `![[Link#^id]]` | [[Internal links#নোটে একটি ব্লকে লিঙ্ক করা\|ব্লক রেফারেন্স]]        |
| `^id`           | [[Internal links#নোটে একটি ব্লকে লিঙ্ক করা\|একটি ব্লক নির্ধারণ করা]]        |
| `[^id]`         | [[Basic formatting syntax#Footnotes\|ফুটনোট]]                      |
| `%%Text%%`      | [[Basic formatting syntax#Comments\|কমেন্ট]]                        |
| `~~Text~~`      | [[Basic formatting syntax#Bold, italics, highlights\|স্ট্রাইকথ্রু]] |
| `==Text==`      | [[Basic formatting syntax#Bold, italics, highlights\|হাইলাইট]]     |
| `` ``` ``       | [[Basic formatting syntax#Code blocks\|কোড ব্লক]]                  |
| `- [ ]`         | [[Basic formatting syntax#Task lists\|অসম্পূর্ণ টাস্ক]]               |
| `- [x]`         | [[Basic formatting syntax#Task lists\|সম্পূর্ণ টাস্ক]]                |
| `> [!note]`     | [[Callouts]]                                                          |
| (see link)      | [[Advanced formatting syntax#Tables\|টেবিল]]                         |
