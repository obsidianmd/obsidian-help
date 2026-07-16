---
permalink: publish/troubleshoot
publish: true
mobile: true
description: এই পৃষ্ঠায় Obsidian Publish ব্যবহার করার সময় আপনি যেসব সাধারণ সমস্যায় পড়তে পারেন সেগুলোর বিস্তারিত দেওয়া আছে
---
এই পৃষ্ঠায় [[Introduction to Obsidian Publish|Obsidian Publish]]-এ আপনি যেসব সাধারণ সমস্যার সম্মুখীন হতে পারেন এবং সেগুলো কীভাবে সমাধান করবেন তার তালিকা দেওয়া আছে।

প্রথমে [[Media files]] এবং [[Publish limitations|Publish limitations]] পর্যালোচনা করে নিন।

## সাধারণ

### নোট প্রকাশ করা

**একটি নোট প্রকাশ করার চেষ্টা করার সময় আমি একটি হ্যাশ ত্রুটি পাচ্ছি।**

আপনি কি এমন একটি [[Community plugins|কমিউনিটি প্লাগইন]] ব্যবহার করছেন যা আপডেটের সময় ফাইলের পরিবর্তিত সময় সম্পাদনা করে? যদি তাই হয়, তাহলে এই প্লাগইনটি Publish-এর সাথে দ্বন্দ্বে জড়িয়ে পড়তে পারে। সমস্যাটি সমাধান করতে দয়া করে প্লাগইন ডেভেলপারের কাছে একটি বাগ রিপোর্ট জমা দিন।

**আমি একটি অস্বাভাবিক নেটওয়ার্ক ত্রুটি পাচ্ছি, এবং আমার একটি অনেক বড় Publish সাইট রয়েছে।**

সম্ভবত আমাদের আপনার ডেটাবেস পরীক্ষা করা প্রয়োজন। সাহায্যের জন্য দয়া করে [[Help and support#Contact Obsidian support|Obsidian সাপোর্টের সাথে যোগাযোগ করুন]]।

## CSS এবং থিম

**আমার [[Configuration folder|কনফিগারেশন ফোল্ডার]]-এর CSS Publish-এ কাজ করছে না। কেন?**

Publish কনফিগারেশন ফোল্ডার থেকে পড়ে না। এর পরিবর্তে, আপনাকে আপনার publishing ভল্টের সর্বোচ্চ-স্তরের ডিরেক্টরিতে একটি `publish.css` ফাইল তৈরি করতে হবে। এ সম্পর্কে আরও জানতে [[Customize your site]] দেখুন।

**আমার CSS অ্যাপে যেমন দেখায় Publish-এ ঠিক তেমন দেখাচ্ছে না। কেন?**

Obsidian Publish-এর CSS অ্যাপ্লিকেশনের মতো ঠিক একই নয়। আমরা সুপারিশ করি যে আপনি Publish-এর জন্য বিশেষভাবে শুরু থেকে [যেকোনো CSS এবং থিম তৈরি করুন](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes)।

_সাধারণভাবে_, [[Views and editing mode#Reading view|Reading view]]-এ যা কাজ করে তা Publish-এও কাজ করার সম্ভাবনা বেশি।
