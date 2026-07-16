---
permalink: callouts
publish: true
mobile: true
description: এই পাতায় বিস্তারিতভাবে বর্ণনা করা হয়েছে কীভাবে আপনার নোটের প্রবাহ ব্যাহত না করে অতিরিক্ত কনটেন্ট অন্তর্ভুক্ত করতে কলাউট ব্যবহার করবেন।
---

আপনার নোটের প্রবাহ ব্যাহত না করে অতিরিক্ত কনটেন্ট অন্তর্ভুক্ত করতে কলাউট ব্যবহার করুন।

একটি কলাউট তৈরি করতে, একটি ব্লককোটের প্রথম লাইনে `[!info]` যোগ করুন, যেখানে `info` হলো _টাইপ আইডেন্টিফায়ার_। টাইপ আইডেন্টিফায়ার নির্ধারণ করে কলাউটটি কেমন দেখাবে এবং কেমন অনুভূত হবে। সমস্ত উপলব্ধ টাইপ দেখতে, [[#Supported types]] দেখুন। [[Introduction to Obsidian Publish|Obsidian Publish]]-এও কলাউট নেটিভভাবে সমর্থিত।

```markdown
> [!info] Here's a callout title
> Here's a callout block.
> It supports **Markdown**, [[Internal link|Wikilinks]], and [[Embed files|embeds]]!
> ![[Engelbart.jpg]]
```

> [!info] এখানে একটি কলাউট শিরোনাম
> এখানে একটি কলাউট ব্লক।
> এটি **Markdown**, [[Internal links|উইকিলিঙ্ক]] এবং [[Embed files|এমবেড]] সমর্থন করে!
> ![[Engelbart.jpg]]

আপনি `Insert callout` [[Command palette|কমান্ড]] ব্যবহার করে একটি ডিফল্ট `[!note]` কলাউট যোগ করতে পারেন। কার্সর স্বয়ংক্রিয়ভাবে কলাউট নাম ফিল্ডে অবস্থান নেয়, যাতে আপনি কনটেন্ট সম্পাদনার আগে ডিফল্ট নামটি মুছে একটি নতুন নাম টাইপ করতে পারেন।

বিদ্যমান কনটেন্টকে একটি কলাউটে মুড়িয়ে রাখতে, টেক্সটটি (তালিকা, কোড ব্লক ইত্যাদিসহ) নির্বাচন করুন এবং `Insert callout` কমান্ড চালান। নির্বাচিত কনটেন্ট স্বয়ংক্রিয়ভাবে কলাউটে আবদ্ধ হয়ে যাবে।

[[Views and editing mode#Live Preview|লাইভ প্রিভিউ]]-এ, আপনি কলাউট টাইপ পরিবর্তন করতে কলাউট নামে রাইট-ক্লিকও করতে পারেন।


### শিরোনাম পরিবর্তন করা

ডিফল্টভাবে, কলাউটের শিরোনাম হয় টাইটেল কেসে তার টাইপ আইডেন্টিফায়ার। টাইপ আইডেন্টিফায়ারের পরে টেক্সট যোগ করে আপনি এটি পরিবর্তন করতে পারেন:

```markdown
> [!tip] Callouts can have custom titles
> Like this one.
```

> [!tip] কলাউটে কাস্টম শিরোনাম থাকতে পারে
> এই একটির মতো।

আপনি টাইটেল-অনলি কলাউট তৈরি করতে বডিও বাদ দিতে পারেন:

```markdown
> [!tip] Title-only callout
```

> [!tip] শুধুমাত্র শিরোনামযুক্ত কলাউট

### ভাঁজযোগ্য কলাউট

টাইপ আইডেন্টিফায়ারের ঠিক পরে একটি প্লাস (`+`) বা মাইনাস (`-`) যোগ করে আপনি একটি কলাউটকে ভাঁজযোগ্য করতে পারেন।

একটি প্লাস চিহ্ন ডিফল্টভাবে কলাউটটি প্রসারিত করে, আর একটি মাইনাস চিহ্ন এটিকে পরিবর্তে ভাঁজ করে দেয়।

```markdown
> [!faq]- Are callouts foldable?
> Yes! In a foldable callout, the contents are hidden when the callout is collapsed.
```

> [!faq]- কলাউট কি ভাঁজযোগ্য?
> হ্যাঁ! একটি ভাঁজযোগ্য কলাউটে, কলাউটটি ভাঁজ করা থাকলে কনটেন্ট লুকানো থাকে।

### নেস্টেড কলাউট

আপনি একাধিক স্তরে কলাউট নেস্ট করতে পারেন।

```markdown
> [!question] Can callouts be nested?
> > [!todo] Yes!, they can.
> > > [!example]  You can even use multiple layers of nesting.
```

> [!question] কলাউট কি নেস্ট করা যায়?
> > [!todo] হ্যাঁ!, তা করা যায়।
> > > [!example]  আপনি এমনকি নেস্টিংয়ের একাধিক স্তরও ব্যবহার করতে পারেন।

### কলাউট কাস্টমাইজ করা

[[CSS snippets]] এবং [[Community plugins]] কাস্টম কলাউট নির্ধারণ করতে পারে, এমনকি ডিফল্ট কনফিগারেশনও ওভাররাইট করতে পারে।

একটি কাস্টম কলাউট নির্ধারণ করতে, নিচের CSS ব্লকটি তৈরি করুন:

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

`data-callout` অ্যাট্রিবিউটের মান হলো সেই টাইপ আইডেন্টিফায়ার যা আপনি ব্যবহার করতে চান, উদাহরণস্বরূপ `[!custom-question-type]`।

- `--callout-color` লাল, সবুজ, এবং নীলের জন্য সংখ্যা (0–255) ব্যবহার করে ব্যাকগ্রাউন্ড রং নির্ধারণ করে।
- `--callout-icon` [lucide.dev](https://lucide.dev) থেকে একটি আইকন ID, অথবা একটি SVG এলিমেন্ট হতে পারে। 

> [!warning] Lucide আইকন ভার্সন সম্পর্কে নোট
> Obsidian পর্যায়ক্রমে Lucide আইকন আপডেট করে। বর্তমান ভার্সন নিচে দেখানো হয়েছে; কাস্টম কলাউটে এই বা এর আগের আইকনগুলো ব্যবহার করুন।
> ![[Credits#^lucide]]

> [!tip] SVG আইকন
> Lucide আইকন ব্যবহার করার পরিবর্তে, আপনি কলাউট আইকন হিসেবে একটি SVG এলিমেন্টও ব্যবহার করতে পারেন।
>
> ```css
> --callout-icon: '<svg>...custom svg...</svg>';
> ```

### সমর্থিত টাইপ

আপনি বিভিন্ন কলাউট টাইপ এবং তাদের উপনাম ব্যবহার করতে পারেন। প্রতিটি টাইপের সাথে একটি ভিন্ন ব্যাকগ্রাউন্ড রং এবং আইকন থাকে।

এই ডিফল্ট স্টাইল ব্যবহার করতে, উদাহরণে `info`-কে এই যেকোনো টাইপ দিয়ে প্রতিস্থাপন করুন, যেমন `[!tip]` বা `[!warning]`। লাইভ প্রিভিউ মোডে একটি কলাউটে রাইট-ক্লিক করেও কলাউট টাইপ পরিবর্তন করা যায়।

আপনি [[#Customize callouts]] না করলে, যেকোনো অসমর্থিত টাইপ ডিফল্টভাবে `note` টাইপে ফিরে যায়। টাইপ আইডেন্টিফায়ার কেস-ইনসেনসিটিভ।

> [!note]
> ```md
> > [!note]
> > Lorem ipsum dolor sit amet
> ```

---

> [!abstract]-
> ```md
> > [!abstract]
> > Lorem ipsum dolor sit amet
> ```

উপনাম: `summary`, `tldr`

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

উপনাম: `hint`, `important`

---

> [!success]-
> ```md
> > [!success]
> > Lorem ipsum dolor sit amet
> ```

উপনাম: `check`, `done`

---

> [!question]-
> ```md
> > [!question]
> > Lorem ipsum dolor sit amet
> ```

উপনাম: `help`, `faq`

---

> [!warning]-
>  ```md
> > [!warning]
> > Lorem ipsum dolor sit amet
> ```

উপনাম: `caution`, `attention`

---

> [!failure]-
> ```md
> > [!failure]
> > Lorem ipsum dolor sit amet
> ```

উপনাম: `fail`, `missing`

---

> [!danger]-
> ```md
> > [!danger]
> > Lorem ipsum dolor sit amet
> ```

উপনাম: `error`

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

উপনাম: `cite`
