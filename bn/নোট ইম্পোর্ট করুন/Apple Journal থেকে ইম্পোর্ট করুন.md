---
permalink: import/apple-journal
aliases:
  - Import from Apple Journal
cssclasses:
  - soft-embed
---
Obsidian আপনাকে [[ইম্পোর্টার|Importer প্লাগইন]] ব্যবহার করে সহজেই Apple Journal থেকে আপনার জার্নাল এন্ট্রি মাইগ্রেট করতে দেয়। এটি আপনার জার্নালগুলিকে টেকসই Markdown ফাইলে রূপান্তরিত করে, যা আপনি Obsidian এবং আরও অনেক অ্যাপের সাথে ব্যবহার করতে পারবেন।

## Apple Journal থেকে আপনার ডেটা এক্সপোর্ট করুন

### iPhone-এ
[iPhone-এ Journal-এ এন্ট্রি প্রিন্ট ও এক্সপোর্ট করা](https://support.apple.com/guide/iphone/print-and-export-entries-iph4cad323fe/ios#iph1edf66806) সম্পর্কিত নির্দেশাবলী অনুসরণ করুন:

1. আপনার iPhone-এ Journal অ্যাপে যান।
2. একটি জার্নাল বেছে নিন অথবা All Entries-এ ট্যাপ করুন।
3. স্ক্রিনের শীর্ষে থাকা More বাটনে ট্যাপ করুন।
4. Export-এ ট্যাপ করুন, তারপর Export নির্বাচন করুন।
5. একটি অবস্থান বেছে নিন, তারপর Selected বাটনে ট্যাপ করুন।

### Mac-এ (Tahoe)
[Mac-এ Journal-এ এন্ট্রি প্রিন্ট ও এক্সপোর্ট করা](https://support.apple.com/guide/journal/print-and-export-entries-dev883fc2329/mac#devc24a8f09a) সম্পর্কিত নির্দেশাবলী অনুসরণ করুন:

1. আপনার Mac-এ Journal অ্যাপে যান।
2. File > Export-এ যান, তারপর Export নির্বাচন করুন।

## Obsidian-এ Apple Journal ডেটা ইম্পোর্ট করুন

আপনার অফিসিয়াল Obsidian [[ইম্পোর্টার]] প্লাগইন প্রয়োজন হবে, যা আপনি [এখানে ইনস্টল করতে পারেন](obsidian://show-plugin?id=obsidian-importer)।

1. **[[সেটিংস]]** খুলুন।
2. **Community Plugins**-এ যান এবং [Importer ইনস্টল করুন](obsidian://show-plugin?id=obsidian-importer)।
3. Importer প্লাগইন চালু করুন।
4. কমান্ড প্যালেট বা রিবন আইকন ব্যবহার করে **Importer** প্লাগইন খুলুন।
5. **File format**-এর অধীনে, **Apple Journal (HTML Export)** নির্বাচন করুন।
6. **Files to import**-এ, এক্সপোর্ট করা ডেটাসহ ফোল্ডারটি নির্বাচন করুন, সাধারণত _AppleJournalEntries_, অথবা _Entries_ থেকে পৃথক ফাইল।
7. অন্যান্য ইম্পোর্ট বিকল্পগুলি পর্যালোচনা ও সম্পাদনা করুন।
8. তৈরি করা টেমপ্লেট পর্যালোচনা করতে এবং আপনার এন্ট্রি থেকে উদাহরণ প্রিভিউ করতে **Import** নির্বাচন করুন।
9. আবার **Import** নির্বাচন করুন এবং ইম্পোর্ট সম্পূর্ণ হওয়া পর্যন্ত অপেক্ষা করুন।

## টেমপ্লেট

আপনার Apple Journal ডেটা কীভাবে ইম্পোর্ট হবে তা সম্পূর্ণরূপে কনফিগার করতে [[ইম্পোর্টার টেমপ্লেট|Importer টেমপ্লেট]] ব্যবহার করুন।

![[ইম্পোর্টার টেমপ্লেট#Variables]]

যখন **Add metadata as frontmatter** সক্রিয় থাকে, Apple Journal মেটাডেটা [[প্রপার্টি|প্রপার্টি]]-তে রূপান্তরিত হয়। এন্ট্রির উপর নির্ভর করে, এগুলোর মধ্যে `state-of-mind`, `contact`, `location`, `motion-activity`, `third-party-media`, এবং `workout-route` অন্তর্ভুক্ত থাকতে পারে।

এই মেটাডেটা অ্যাক্সেস করতে `properties` ভেরিয়েবল ব্যবহার করুন। উদাহরণস্বরূপ, লোকেশনের জন্য `{{properties.location}}` বা state of mind-এর জন্য `{{properties["state-of-mind"]}}` ব্যবহার করুন।
