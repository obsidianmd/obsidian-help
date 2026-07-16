---
permalink: syntax
publish: true
mobile: true
description: 'জানুন কীভাবে Markdown ব্যবহার করে Obsidian-এ আপনার নোটে বেসিক ফরম্যাটিং প্রয়োগ করবেন।'
---

[Markdown](https://daringfireball.net/projects/markdown/) ব্যবহার করে আপনার নোটে কীভাবে বেসিক ফরম্যাটিং প্রয়োগ করবেন তা জানুন। আরও অ্যাডভান্সড ফরম্যাটিং সিনট্যাক্সের জন্য, [[Advanced formatting syntax]] দেখুন।

## অনুচ্ছেদ

Markdown-এ অনুচ্ছেদ তৈরি করতে, টেক্সটের ব্লকগুলো আলাদা করতে একটি **খালি লাইন** ব্যবহার করুন। খালি লাইন দিয়ে আলাদা করা প্রতিটি টেক্সট ব্লককে একটি স্বতন্ত্র অনুচ্ছেদ হিসেবে গণ্য করা হয়।

```md
This is a paragraph.

This is another paragraph.
```

This is a paragraph.

This is another paragraph.

টেক্সটের লাইনগুলোর মধ্যে একটি খালি লাইন আলাদা অনুচ্ছেদ তৈরি করে। এটি Markdown-এর ডিফল্ট আচরণ।

> [!tip]- একাধিক খালি স্পেস
> অনুচ্ছেদের মধ্যে এবং অনুচ্ছেদগুলোর মধ্যে একাধিক পাশাপাশি খালি স্পেস [[Views and editing mode#Reading view|রিডিং ভিউ]]-এ বা [[Introduction to Obsidian Publish|Obsidian Publish]] সাইটে প্রদর্শনের সময় একটি মাত্র স্পেসে সংকুচিত হয়ে যায়।
> 
> ```md
> Multiple          adjacent          spaces
> 
> 
> 
> and multiple newlines between paragraphs.
> ```
> 
> > Multiple          adjacent          spaces
> > 
> > 
> > 
> > and multiple newlines between paragraphs.
> 
> যদি আপনি স্পেসগুলোকে সংকুচিত হওয়া থেকে আটকাতে চান বা একাধিক খালি স্পেস যোগ করতে চান, তাহলে আপনি `&nbsp;` (নন-ব্রেকিং স্পেস) বা `<br>` (লাইন ব্রেক) HTML ট্যাগ ব্যবহার করতে পারেন।

### লাইন ব্রেক

Obsidian-এ ডিফল্টভাবে, একবার `Enter` চাপলে আপনার নোটে একটি নতুন লাইন তৈরি হয়, কিন্তু সাধারণ Markdown আচরণ অনুসরণ করে রেন্ডার করা আউটপুটে এটিকে একই অনুচ্ছেদের *ধারাবাহিকতা* হিসেবে গণ্য করা হয়। কোনো নতুন অনুচ্ছেদ শুরু না করে একটি অনুচ্ছেদের *মধ্যে* লাইন ব্রেক যোগ করতে, আপনি এই দুটির যেকোনো একটি করতে পারেন:

- `Enter` চাপার আগে লাইনের শেষে **দুটি স্পেস** যোগ করুন, অথবা
- সরাসরি লাইন ব্রেক যোগ করতে `Shift+Enter` শর্টকাট ব্যবহার করুন।

> [!question]- রিডিং ভিউতে একাধিক `Enter` চাপলে কেন আরও লাইন ব্রেক তৈরি হয় না?
> Markdown-এ, একটি একক `Enter`-কে উপেক্ষা করা হয়, এবং একাধিক পরপর `Enter` চাপলেও শুধু একটি নতুন অনুচ্ছেদ তৈরি হয়। এই আচরণটি Markdown-এর সফট র‍্যাপ নিয়মের সাথে সামঞ্জস্যপূর্ণ, যেখানে অতিরিক্ত খালি লাইন অতিরিক্ত লাইন ব্রেক বা অনুচ্ছেদ তৈরি করে না—সেগুলো একটি মাত্র অনুচ্ছেদ ব্রেকে সংকুচিত হয়ে যায়। ডিফল্টভাবে Markdown টেক্সট এভাবেই পরিচালনা করে, যাতে অনুচ্ছেদগুলো অপ্রত্যাশিত ব্রেক ছাড়াই স্বাভাবিকভাবে প্রবাহিত হয়।

Obsidian-এ একটি **[[Settings#Strict line breaks|Strict line breaks]]** সেটিং রয়েছে, যা Obsidian-কে লাইন ব্রেকের জন্য স্ট্যান্ডার্ড Markdown স্পেসিফিকেশন অনুসরণ করায়।

এই ফিচারটি সক্রিয় করতে:

1. **[[Settings]]** খুলুন।
2. **Editor** ট্যাবে যান।
3. **Strict Line Breaks** সক্রিয় করুন।

Obsidian-এ যখন **Strict Line Breaks** সক্রিয় থাকে, তখন লাইনগুলো কীভাবে আলাদা করা হয়েছে তার উপর নির্ভর করে লাইন ব্রেকের তিনটি ভিন্ন আচরণ থাকে:

**কোনো স্পেস ছাড়া একক রিটার্ন**: কোনো ট্রেইলিং স্পেস ছাড়া একটি একক `Enter` রেন্ডার করার সময় দুটি আলাদা লাইনকে একটি লাইনে একত্রিত করে দেয়।

```md
line one
line two
```

রেন্ডার হয়:

line one line two

**দুই বা তার বেশি ট্রেইলিং স্পেসসহ একক রিটার্ন**: যদি আপনি `Enter` চাপার আগে প্রথম লাইনের শেষে দুই বা তার বেশি স্পেস যোগ করেন, তাহলে দুটি লাইন একই অনুচ্ছেদের অংশ থেকে যায়, কিন্তু একটি লাইন ব্রেক (HTML `<br>` এলিমেন্ট) দিয়ে বিভক্ত হয়। এই উদাহরণে আমরা স্পেসের প্রতিনিধিত্ব করতে দুটি আন্ডারস্কোর ব্যবহার করব।

```md
line three__  
line four
```

রেন্ডার হয়:

line three<br>
line four

**ডাবল রিটার্ন (ট্রেইলিং স্পেসসহ বা ছাড়া)**: `Enter` দুইবার (বা তার বেশি) চাপলে, প্রথম লাইনের শেষে স্পেস যোগ করা হয়েছে কিনা তা নির্বিশেষে, লাইনগুলো দুটি স্বতন্ত্র অনুচ্ছেদে (HTML `<p>` এলিমেন্ট) বিভক্ত হয়।

```md
line five

line six
```

রেন্ডার হয়:

<p>line five</p>
<p>line six</p>

## হেডিং

একটি হেডিং তৈরি করতে, আপনার হেডিং টেক্সটের আগে সর্বোচ্চ ছয়টি `#` চিহ্ন যোগ করুন। `#` চিহ্নের সংখ্যা হেডিংয়ের লেভেল নির্ধারণ করে ([[Outline|রূপরেখা]]-এ দেখানো হয়েছে)।

```md
# This is a heading 1
## This is a heading 2
### This is a heading 3
#### This is a heading 4
##### This is a heading 5
###### This is a heading 6
```

%% These headings use HTML to avoid cluttering the Outline/Table of contents %%
<h1>This is a heading 1</h1>
<h2>This is a heading 2</h2>
<h3>This is a heading 3</h3>
<h4>This is a heading 4</h4>
<h5>This is a heading 5</h5>
<h6>This is a heading 6</h6>

## বোল্ড, ইটালিক, হাইলাইট

[[Editing shortcuts]] ব্যবহার করেও টেক্সট ফরম্যাটিং প্রয়োগ করা যায়।

| Style | Syntax | Example | Output |
|-|-|-|-|
| Bold | `** **` or `__ __` | `**Bold text**` | **Bold text** |
| Italic | `* *` or `_ _`  | `*Italic text*` | *Italic text* |
| Strikethrough | `~~ ~~` |  `~~Striked out text~~` | ~~Striked out text~~ |
| Highlight | `== ==` |  `==Highlighted text==` | ==Highlighted text== |
| Bold and nested italic | `** **` and `_ _`  | `**Bold text and _nested italic_ text**` | **Bold text and _nested italic_ text** |
| Bold and italic | `*** ***` or `___ ___` |  `***Bold and italic text***` | ***Bold and italic text*** |

ফরম্যাটিংয়ের সামনে একটি ব্যাকস্ল্যাশ `\` যোগ করে সেটিকে প্লেইন টেক্সট হিসেবে দেখানো যায়।

\*\*This line will not be bold\*\*

```markdown
\*\*This line will not be bold\*\*
```

\**This line will be italic and show the asterisks*\*

```markdown
\**This line will be italic and show the asterisks*\*
```

## ইন্টার্নাল লিঙ্ক

নোটগুলোর মধ্যে [[internal links|ইন্টার্নাল লিঙ্ক]]-এর জন্য Obsidian দুটি ফরম্যাট সমর্থন করে:

- Wikilink: `[[Three laws of motion]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion.md)`

## এক্সটার্নাল লিঙ্ক

যদি আপনি একটি এক্সটার্নাল URL-এ লিঙ্ক করতে চান, তাহলে আপনি লিঙ্ক টেক্সটকে ব্র্যাকেটে (`[ ]`) মুড়িয়ে এবং তারপর প্যারেনথেসিসে (`( )`) URL রেখে একটি ইনলাইন লিঙ্ক তৈরি করতে পারেন।

```md
[Obsidian Help](https://help.obsidian.md)
```

[Obsidian Help](https://help.obsidian.md)

আপনি একটি [[Obsidian URI|Obsidian URI]]-তে লিঙ্ক করে অন্য ভল্টের ফাইলেও এক্সটার্নাল লিঙ্ক তৈরি করতে পারেন।

```md
[Note](obsidian://open?vault=MainVault&file=Note.md)
```

### লিঙ্কের মধ্যে খালি স্পেস এস্কেপ করা

যদি আপনার URL-এ খালি স্পেস থাকে, তাহলে সেগুলোকে `%20` দিয়ে প্রতিস্থাপন করে এস্কেপ করতে হবে।

```md
[My Note](obsidian://open?vault=MainVault&file=My%20Note.md)
```

আপনি অ্যাঙ্গেল ব্র্যাকেট (`< >`) দিয়ে মুড়িয়েও URL এস্কেপ করতে পারেন।

```md
[My Note](<obsidian://open?vault=MainVault&file=My Note.md>)
```

## এক্সটার্নাল ছবি

একটি [[#External links|এক্সটার্নাল লিঙ্ক]]-এর আগে একটি `!` চিহ্ন যোগ করে আপনি এক্সটার্নাল URL সহ ছবি যোগ করতে পারেন।

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

আপনি লিঙ্কের গন্তব্যে `|640x480` যোগ করে ছবির মাত্রা পরিবর্তন করতে পারেন, যেখানে 640 হলো প্রস্থ এবং 480 হলো উচ্চতা।

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

যদি আপনি শুধুমাত্র প্রস্থ উল্লেখ করেন, তাহলে ছবিটি তার মূল অ্যাসপেক্ট রেশিও অনুযায়ী স্কেল হয়। উদাহরণস্বরূপ:

```md
![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

> [!tip]- টিপ
> যদি আপনি আপনার ভল্টের ভেতর থেকে একটি ছবি যোগ করতে চান, তাহলে আপনি [[Embed files#Embed an image in a note|নোটে একটি ছবি এমবেডও]] করতে পারেন।

## উদ্ধৃতি

টেক্সটের আগে একটি `>` চিহ্ন যোগ করে আপনি টেক্সট উদ্ধৃত করতে পারেন।

```md
> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society.

\- Doug Engelbart, 1961
```

> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society.

\- Doug Engelbart, 1961

> [!tip]- টিপ
> উদ্ধৃতির প্রথম লাইনে `[!info]` যোগ করে আপনি আপনার উদ্ধৃতিকে একটি [[Callouts|কলাউটে]] পরিণত করতে পারেন।

## তালিকা

টেক্সটের আগে একটি `-`, `*`, বা `+` যোগ করে আপনি একটি আনঅর্ডার্ড তালিকা তৈরি করতে পারেন।

```md
- First list item
- Second list item
- Third list item
```

- First list item
- Second list item
- Third list item

একটি অর্ডার্ড তালিকা তৈরি করতে, প্রতিটি লাইন একটি সংখ্যা দিয়ে শুরু করুন, তারপর একটি `.` বা `)` চিহ্ন দিন।

```md
1. First list item
2. Second list item
3. Third list item
```

1. First list item
2. Second list item
3. Third list item

```md
1) First list item
2) Second list item
3) Third list item
```

1) First list item
2) Second list item
3) Third list item

একটি অর্ডার্ড তালিকার মধ্যে নম্বরিং পরিবর্তন না করে [[#Line breaks|লাইন ব্রেক]] যোগ করতে আপনি `Shift+Enter` ব্যবহার করতে পারেন।

```md
1. First list item
   
2. Second list item
3. Third list item
   
4. Fourth list item
5. Fifth list item
6. Sixth list item
```

### টাস্ক তালিকা

একটি টাস্ক তালিকা তৈরি করতে, প্রতিটি তালিকা আইটেম একটি হাইফেন ও স্পেস দিয়ে শুরু করুন, তারপর `[ ]` দিন।

```md
- [x] This is a completed task.
- [ ] This is an incomplete task.
```

- [x] This is a completed task.
- [ ] This is an incomplete task.

আপনি চেকবক্স নির্বাচন করে রিডিং ভিউতে একটি টাস্ক টগল করতে পারেন।

> [!tip]- টিপ
> কোনো টাস্ককে সম্পূর্ণ হিসেবে চিহ্নিত করতে আপনি ব্র্যাকেটের ভেতরে যেকোনো অক্ষর ব্যবহার করতে পারেন।
>
> ```md
> - [x] Milk
> - [?] Eggs
> - [-] Eggs
> ```
>
> - [x] Milk
> - [?] Eggs
> - [-] Eggs

### তালিকা নেস্ট করা

আপনি যেকোনো ধরনের তালিকা—অর্ডার্ড, আনঅর্ডার্ড, বা টাস্ক তালিকা—অন্য যেকোনো ধরনের তালিকার নিচে নেস্ট করতে পারেন।

একটি নেস্টেড তালিকা তৈরি করতে, এক বা একাধিক তালিকা আইটেম ইনডেন্ট করুন। আপনি একটি নেস্টেড কাঠামোর মধ্যে বিভিন্ন ধরনের তালিকা মিশ্রিত করতে পারেন:

```md
1. First list item
   1. Ordered nested list item
2. Second list item
   - Unordered nested list item
```

1. First list item
   1. Ordered nested list item
2. Second list item
   - Unordered nested list item

একইভাবে, এক বা একাধিক তালিকা আইটেম ইনডেন্ট করে আপনি একটি নেস্টেড টাস্ক তালিকা তৈরি করতে পারেন:

```md
- [ ] Task item 1
	- [ ] Subtask 1
- [ ] Task item 2
	- [ ] Subtask 1
```

- [ ] Task item 1
	- [ ] Subtask 1
- [ ] Task item 2
	- [ ] Subtask 1

নির্বাচিত তালিকা আইটেমগুলো সহজে সাজানোর জন্য ইনডেন্ট বা আনইনডেন্ট করতে `Tab` বা `Shift+Tab` ব্যবহার করুন।

## অনুভূমিক রেখা

একটি অনুভূমিক দণ্ড যোগ করতে আপনি নিজস্ব লাইনে তিন বা তার বেশি তারকা চিহ্ন `***`, হাইফেন `---`, বা আন্ডারস্কোর `___` ব্যবহার করতে পারেন। আপনি স্পেস দিয়ে চিহ্নগুলো আলাদাও করতে পারেন।

```md
***
****
* * *
---
----
- - -
___
____
_ _ _
```

***

## কোড

আপনি একটি বাক্যের মধ্যে ইনলাইনভাবে, অথবা নিজস্ব ব্লকে, উভয়ভাবেই কোড ফরম্যাট করতে পারেন।

### ইনলাইন কোড

একক ব্যাকটিক ব্যবহার করে আপনি একটি বাক্যের মধ্যে কোড ফরম্যাট করতে পারেন।

```md
Text inside `backticks` on a line will be formatted like code.
```

Text inside `backticks` on a line will be formatted like code.

যদি আপনি একটি ইনলাইন কোড ব্লকে ব্যাকটিক রাখতে চান, তাহলে এটিকে এভাবে ডাবল ব্যাকটিক দিয়ে ঘিরে দিন: inline ``code with a backtick ` inside``.

### কোড ব্লক

কোডকে একটি ব্লক হিসেবে ফরম্যাট করতে, এটিকে তিন বা তার বেশি ব্যাকটিক বা তিন বা তার বেশি টিল্ডা দিয়ে ঘিরে দিন।

~~~
`````
cd ~/Desktop
`````
~~~
`````
~~~
cd ~/Desktop
~~~
`````
`````md
cd ~/Desktop
`````

আপনি `Tab` বা 4টি খালি স্পেস দিয়ে টেক্সট ইনডেন্ট করেও একটি কোড ব্লক তৈরি করতে পারেন।
`````md
    cd ~/Desktop
`````

প্রথম সেট ব্যাকটিকের পরে একটি ল্যাঙ্গুয়েজ কোড যোগ করে আপনি একটি কোড ব্লকে সিনট্যাক্স হাইলাইটিং যোগ করতে পারেন।

~~~md
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````
~~~
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````

সিনট্যাক্স হাইলাইটিংয়ের জন্য Obsidian Prism ব্যবহার করে। আরও তথ্যের জন্য, [Supported languages](https://prismjs.com/#supported-languages) দেখুন।

> [!info]+ PrismJS এবং এডিটিং ভিউ
> [[Views and editing mode#Source mode|সোর্স মোড]] এবং [[Views and editing mode#Live Preview|লাইভ প্রিভিউ]] PrismJS সমর্থন করে না, এবং সিনট্যাক্স হাইলাইটিং ভিন্নভাবে রেন্ডার করতে পারে।

#### কোড ব্লক নেস্ট করা

যখন আপনার একটি কোড ব্লকের ভেতরে আরেকটি কোড ব্লক অন্তর্ভুক্ত করার প্রয়োজন হয় (উদাহরণস্বরূপ, কোড ব্লক কীভাবে ব্যবহার করতে হয় তা ডকুমেন্ট করার সময়), তখন আপনি বাইরের কোড ব্লকের জন্য তিনটির বেশি ব্যাকটিক বা টিল্ডা ব্যবহার করতে পারেন।

কোড ব্লক নেস্ট করতে, বাইরের ব্লকের জন্য চার বা তার বেশি ব্যাকটিক (বা টিল্ডা) ব্যবহার করুন, আর ভেতরের ব্লকে তিনটি ব্যবহার করুন:
`````md
````md
Here's how to create a code block:
```js
console.log("Hello world")
```
````
`````

আপনি ব্যাকটিক এবং টিল্ডা মিশিয়েও ব্যবহার করতে পারেন। এটি বিশেষভাবে কার্যকর যখন আপনি এমন কোড নিয়ে কাজ করেন যা অন্য কোড ব্লক তৈরি করে:
`````md
````md
```dataviewjs
dv.paragraph(`
~~~mermaid
graph TD
    A --> B
~~~
`)
```
````
`````

মূল নীতিটি হলো বাইরের কোড ব্লকে ভেতরের যেকোনো কোড ব্লকের চেয়ে **বেশি** ফেন্স অক্ষর (ব্যাকটিক বা টিল্ডা) থাকতে হবে, অথবা ভিন্ন ধরনের ফেন্স অক্ষর ব্যবহার করতে হবে।

## ফুটনোট

আপনি নিচের সিনট্যাক্স ব্যবহার করে আপনার নোটে ফুটনোট[^footnote] যোগ করতে পারেন:

[^footnote]: This is a footnote.

```md
This is a simple footnote[^1].

[^1]: This is the referenced text.
[^2]: Add 2 spaces at the start of each new line.
  This lets you write footnotes that span multiple lines.
[^note]: Named footnotes still appear as numbers, but can make it easier to identify and link references.
```

আপনি একটি বাক্যে ফুটনোটও ইনলাইনভাবে যোগ করতে পারেন। লক্ষ্য করুন, ক্যারেট চিহ্নটি ব্র্যাকেটের বাইরে থাকে।

```md
You can also use inline footnotes. ^[This is an inline footnote.]
```

> [!note] নোট
> ইনলাইন ফুটনোট শুধুমাত্র রিডিং ভিউতে কাজ করে, লাইভ প্রিভিউতে নয়।

একটি নোটের সমস্ত ফুটনোট দেখতে [[Footnotes view]] ব্যবহার করুন।

## কমেন্ট

আপনি টেক্সটকে `%%` দিয়ে মুড়িয়ে কমেন্ট যোগ করতে পারেন। কমেন্ট শুধুমাত্র এডিটিং ভিউতে দৃশ্যমান হয়।

```md
This is an %%inline%% comment.

%%
This is a block comment.

Block comments can span multiple lines.
%%
```

## Markdown সিনট্যাক্স এস্কেপ করা

কিছু ক্ষেত্রে, আপনার হয়তো Markdown-এ বিশেষ অক্ষর প্রদর্শন করার প্রয়োজন হতে পারে, যেমন `*`, `_`, বা `#`, তাদের ফরম্যাটিং ট্রিগার না করে। এই অক্ষরগুলো আক্ষরিক অর্থে প্রদর্শন করতে, তাদের আগে একটি ব্যাকস্ল্যাশ (`\`) রাখুন।

> [!example] এস্কেপ করার সাধারণ অক্ষর
> 
> - Asterisk: `\*`
> - Underscore: `\_`
> - Hashtag: `\#`
> - Backtick: `` \` ``
> - Pipe (used in tables): `\|`
> - Tilde: `\~`

```md
\*This text will not be italicized\*.
```

\*This text will not be italicized\*.

সংখ্যাযুক্ত তালিকা নিয়ে কাজ করার সময়, স্বয়ংক্রিয় তালিকা ফরম্যাটিং এড়াতে আপনার সংখ্যার পরে পিরিয়ড এস্কেপ করার প্রয়োজন হতে পারে। ব্যাকস্ল্যাশ (`\`) সংখ্যার **আগে নয়**, পিরিয়ডের আগে রাখুন।

```md
1\. This won't be a list item.
```

1\. This won't be a list item.

## আরও জানুন

টেবিল, ডায়াগ্রাম, এবং গাণিতিক এক্সপ্রেশনের মতো আরও অ্যাডভান্সড ফরম্যাটিং সিনট্যাক্স সম্পর্কে জানতে, [[Advanced formatting syntax]] দেখুন।

Obsidian কীভাবে Markdown পার্স করে সে সম্পর্কে আরও জানতে, [[Obsidian Flavored Markdown]] দেখুন।
