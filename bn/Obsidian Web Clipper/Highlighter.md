---
permalink: web-clipper/highlight
---
[[Introduction to Obsidian Web Clipper|Web Clipper]] আপনাকে ওয়েব পেজে টেক্সট হাইলাইট করতে দেয়, এবং Obsidian-এ সংরক্ষণ করতে চান এমন এলিমেন্ট নির্বাচন করতে দেয়। হাইলাইটগুলো সংরক্ষিত থাকে যাতে আপনি পেজে ফিরে এলে সেগুলো দেখতে পান।

এক্সটেনশনটি ব্যবহার করে হাইলাইটগুলো Obsidian-এ সংরক্ষণ করা যায়। আপনি এক্সটেনশন সেটিংসে হাইলাইটার অপশন নির্ধারণ করতে পারেন।

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/f2674kdaot?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>

## হাইলাইটার ব্যবহার করুন

হাইলাইটার লাইভ ওয়েব পেজে অথবা [[Reader]]-এ ব্যবহার করা যায়। Reader ভিউতে, টেক্সট নির্বাচন করলে আপনাকে সেটি হাইলাইট করার অপশন দেওয়া হয়।

আপনি হাইলাইটার সক্রিয় করে আপনার নির্বাচনগুলো স্বয়ংক্রিয়ভাবে হাইলাইটে যোগও করতে পারেন:

- ![[lucide-highlighter.svg#icon]] এক্সটেনশন প্যানেল বা Reader টুলবারে **Highlighter আইকন**।
- এক্সটেনশন সেটিংসে কাস্টমাইজযোগ্য **কীবোর্ড শর্টকাট**।
- আপনি যে ওয়েব পেজে আছেন সেখানে ডান-ক্লিক করে **কনটেক্সট মেনু**।

একবার Highlighter চালু হলে, যেকোনো নির্বাচিত টেক্সট, ছবি এবং এলিমেন্ট আপনার হাইলাইটে যোগ হবে। উপরের সব পদ্ধতিই হাইলাইটার থেকে বের হওয়ার সুযোগও দেয়।

## নোটে হাইলাইট যোগ করুন

আপনার ক্লিপ করা নোটে হাইলাইট কীভাবে যোগ করা হবে তার তিনটি বিকল্প রয়েছে:

- **Highlight the page content** — [[Obsidian Flavored Markdown|সিনট্যাক্স]] `==highlight==` দিয়ে সরাসরি টেক্সটে হাইলাইট যোগ করে।
- **Replace the page content** — পেজের কোনো কন্টেন্ট ছাড়াই হাইলাইটের একটি তালিকা ফেরত দেয়।
- **Do nothing** — হাইলাইট ছাড়া মূল কন্টেন্ট ফেরত দেয়।
 
এই অপশনগুলো আপনার টেমপ্লেটে `{{content}}` [[Variables|ভেরিয়েবল]] পরিবর্তন করে। আপনি `{{highlights}}` ভেরিয়েবল ব্যবহার করে সরাসরি আপনার টেমপ্লেটেও হাইলাইট যোগ করতে পারেন, উদাহরণস্বরূপ:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```

## হাইলাইট দেখুন এবং অনুসন্ধান করুন

আপনার তৈরি করা সব হাইলাইট Highlights পেজে দেখা যায়। **Settings** → **Highlighter**-এ গিয়ে আপনি এই পেজটি খুলতে পারেন।

## হাইলাইট এক্সপোর্ট করুন

হাইলাইটগুলো Settings পেজ বা Highlights পেজ থেকে একটি `.json` ফাইলে এক্সপোর্ট করা যায়।
