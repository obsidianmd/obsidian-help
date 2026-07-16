---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish ডেস্কটপ অ্যাপ ব্যবহার না করে ভল্ট প্রকাশ করার জন্য একটি হেডলেস ক্লায়েন্ট সরবরাহ করে। CI পাইপলাইন এবং স্বয়ংক্রিয় ওয়ার্কফ্লোর জন্য উপযোগী।
---
[[Introduction to Obsidian Publish|Obsidian Publish]] ডেস্কটপ অ্যাপ ব্যবহার না করে ভল্ট প্রকাশ করার জন্য একটি হেডলেস ক্লায়েন্ট সরবরাহ করে। CI পাইপলাইন এবং স্বয়ংক্রিয় ওয়ার্কফ্লোর জন্য উপযোগী। একটি নির্ধারিত সময়সূচি অনুযায়ী বা একটি বিল্ড পাইপলাইনের অংশ হিসেবে আপনার সর্বশেষ পরিবর্তনগুলো প্রকাশ করুন।

Obsidian ডেস্কটপ অ্যাপ ছাড়াই কমান্ড লাইন থেকে [[Introduction to Obsidian Publish|Obsidian Publish]]-এর সাথে ইন্টার‍্যাক্ট করতে [[Obsidian Headless]] **(ওপেন বিটা)** ইনস্টল করুন।

## দ্রুত শুরু

[[Obsidian Headless|Obsidian Headless]] **(ওপেন বিটা)** ইনস্টল করুন:

```shell
npm install -g obsidian-headless
```

আপনার একটি সক্রিয় [[Introduction to Obsidian Publish|Obsidian Publish সাবস্ক্রিপশন]] থাকতে হবে।

```shell
# Login
ob login

# List your publish sites
ob publish-list-sites

# Connect a local vault to a publish site
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# Preview changes without publishing
ob publish --dry-run

# Publish changes
ob publish
```

## কমান্ড

### `ob publish-list-sites`

আপনার অ্যাকাউন্টের জন্য উপলব্ধ সকল Publish সাইটের তালিকা দেখায়।

### `ob publish-create-site`

একটি নতুন Publish সাইট তৈরি করে।

```
ob publish-create-site --slug <slug>
```

| অপশন | বিবরণ |
| --- | --- |
| `--slug` | আপনার সাইটের জন্য URL শনাক্তকারী (যেমন `my-notes` তৈরি করে `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

একটি স্থানীয় ভল্টকে একটি Publish সাইটের সাথে সংযুক্ত করে।

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| অপশন | বিবরণ |
| --- | --- |
| `--site` | সাইট ID বা স্লাগ |
| `--path` | স্থানীয় ভল্টের পাথ (ডিফল্ট: বর্তমান ডিরেক্টরি) |

### `ob publish`

আপনার সাইটে ভল্টের পরিবর্তনগুলো প্রকাশ করে। ডিফল্টভাবে, শুধুমাত্র যে ফাইলগুলোর ফ্রন্টম্যাটারে `publish: true` আছে সেগুলো অন্তর্ভুক্ত করা হয়।

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| অপশন | বিবরণ |
| --- | --- |
| `--path` | স্থানীয় ভল্টের পাথ (ডিফল্ট: বর্তমান ডিরেক্টরি) |
| `--all` | শুধুমাত্র publish ফ্ল্যাগযুক্ত ফাইল নয়, সব ফাইল অন্তর্ভুক্ত করুন |
| `--dry-run` | প্রকাশ না করেই পরিবর্তনগুলো দেখান |
| `--yes` | নিশ্চিতকরণ ছাড়া প্রকাশ করুন |

### `ob publish-config`

একটি ভল্টের জন্য include/exclude ফোল্ডার সেটিংস দেখুন বা পরিবর্তন করুন। বর্তমান কনফিগারেশন দেখতে কোনো অপশন ছাড়াই চালান।

```
ob publish-config [--path <local-path>] [options]
```

| অপশন | বিবরণ |
| --- | --- |
| `--path` | স্থানীয় ভল্টের পাথ (ডিফল্ট: বর্তমান ডিরেক্টরি) |
| `--includes` | অন্তর্ভুক্ত করার ফোল্ডার, কমা দিয়ে আলাদা করা (খালি করতে ফাঁকা স্ট্রিং দিন) |
| `--excludes` | বাদ দেওয়ার ফোল্ডার, কমা দিয়ে আলাদা করা (খালি করতে ফাঁকা স্ট্রিং দিন) |

### `ob publish-site-options`

একটি ভল্টের জন্য সাইট-ব্যাপী প্রদর্শন ও নেভিগেশন সেটিংস দেখুন বা আপডেট করুন। বর্তমান সেটিংস দেখতে কোনো অপশন ছাড়াই চালান।

```
ob publish-site-options [--path <local-path>] [options]
```

| অপশন | বিবরণ |
| --- | --- |
| `--path` | স্থানীয় ভল্টের পাথ (ডিফল্ট: বর্তমান ডিরেক্টরি) |
| `--site-name` | সাইটের নাম |
| `--index-file` | হোমপেজ ফাইলের পাথ |
| `--logo` | লোগো ফাইলের পাথ (খালি করতে ফাঁকা স্ট্রিং দিন) |
| `--show-navigation` | নেভিগেশন সাইডবার দেখান |
| `--show-graph` | গ্রাফ ভিউ দেখান |
| `--show-outline` | সূচিপত্র দেখান |
| `--show-search` | অনুসন্ধান দেখান |
| `--show-backlinks` | ব্যাকলিঙ্ক দেখান |
| `--show-hover-preview` | হোভার প্রিভিউ দেখান |
| `--show-theme-toggle` | থিম টগল দেখান |
| `--default-theme` | ডিফল্ট থিম: `light` বা `dark` |
| `--readable-line-length` | পাঠযোগ্য লাইন দৈর্ঘ্য |
| `--strict-line-breaks` | যথাযথ লাইন বিরতি |
| `--hide-title` | ইনলাইন শিরোনাম লুকান |
| `--sliding-window` | স্লাইডিং উইন্ডো মোড |
| `--nav-order` | নেভিগেশন ক্রম, কমা দিয়ে আলাদা করা পাথ (খালি করতে ফাঁকা স্ট্রিং দিন) |
| `--nav-hidden` | লুকানো নেভিগেশন আইটেম, কমা দিয়ে আলাদা করা পাথ (খালি করতে ফাঁকা স্ট্রিং দিন) |

### `ob publish-unlink`

একটি ভল্টকে একটি Publish সাইট থেকে বিচ্ছিন্ন করে।

```
ob publish-unlink [--path <local-path>]
```
