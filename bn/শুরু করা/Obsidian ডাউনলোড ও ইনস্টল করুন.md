---
permalink: install
aliases:
  - Download and install Obsidian
---
Obsidian সব প্রধান ডেস্কটপ এবং মোবাইল প্ল্যাটফর্মের জন্য উপলব্ধ। এগুলো হলো Obsidian ডাউনলোড ও ইনস্টল করার সমস্ত সমর্থিত উপায়।

## Windows-এ Obsidian ইনস্টল করুন

1. আপনার ব্রাউজার খুলুন এবং [Download Obsidian](https://obsidian.md/download)-এ যান।
2. **Windows**-এর অধীনে, ইনস্টলেশন ফাইল ডাউনলোড করতে **Universal** ক্লিক করুন।
3. ইনস্টলেশন ফাইলটি খুলুন এবং নির্দেশাবলী অনুসরণ করুন।
4. অন্য যেকোনো অ্যাপ্লিকেশন খোলার মতো একইভাবে Obsidian খুলুন।

## macOS-এ Obsidian ইনস্টল করুন

1. আপনার ব্রাউজার খুলুন এবং [Download Obsidian](https://obsidian.md/download)-এ যান।
2. **macOS**-এর অধীনে, ইনস্টলেশন ফাইল ডাউনলোড করতে **Universal** ক্লিক করুন।
3. ইনস্টলেশন ফাইলটি খুলুন।
4. যে উইন্ডো খুলবে, সেখানে Obsidian-কে Applications ফোল্ডারে টেনে আনুন।
5. অন্য যেকোনো অ্যাপ্লিকেশন খোলার মতো একইভাবে Obsidian খুলুন।

## Linux-এ Obsidian ইনস্টল করুন

আপনি যদি Linux ব্যবহার করেন, তাহলে আপনি বিভিন্ন উপায়ে Obsidian ইনস্টল করতে পারেন। আপনি যে প্যাকেজিং সিস্টেম ব্যবহার করছেন তার জন্য নির্দেশাবলী অনুসরণ করুন।

### Snap ব্যবহার করে Obsidian ইনস্টল করুন

1. আপনার ব্রাউজার খুলুন এবং [Download Obsidian](https://obsidian.md/download)-এ যান।
2. **Linux**-এর অধীনে, ইনস্টলেশন ফাইল ডাউনলোড করতে **Snap** ক্লিক করুন।
3. একটি টার্মিনাল খুলুন এবং আপনি যে ফোল্ডারে ইনস্টলেশন ফাইলটি ডাউনলোড করেছেন সেখানে যান।
4. টার্মিনালে, Snap প্যাকেজ ইনস্টল করতে নিচের কমান্ডটি চালান: (`--dangerous` ফ্ল্যাগটি প্রয়োজন কারণ Canonical, যে কোম্পানি Snap তৈরি করেছে, আমাদের প্যাকেজ পর্যালোচনা করেনি, `--classic` ফ্ল্যাগটি Obsidian-কে স্যান্ডবক্সের বাইরে প্রবেশাধিকার দেয়, যেখানে আপনার নোট সংরক্ষিত থাকে)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. অন্য যেকোনো অ্যাপ্লিকেশন খোলার মতো একইভাবে Obsidian খুলুন।

### AppImage ব্যবহার করে Obsidian ইনস্টল করুন

1. আপনার ব্রাউজার খুলুন এবং [Download Obsidian](https://obsidian.md/download)-এ যান।
2. **Linux**-এর অধীনে, ইনস্টলেশন ফাইল ডাউনলোড করতে **AppImage** ক্লিক করুন।
3. একটি টার্মিনাল খুলুন এবং আপনি যে ফোল্ডারে ইনস্টলেশন ফাইলটি ডাউনলোড করেছেন সেখানে যান।
4. Obsidian খুলতে টার্মিনালে নিচের কমান্ডটি চালান:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
মনে রাখবেন: Chromebook-এ, `libnss3-dev` প্যাকেজটি ইনস্টল করা থাকতে হবে অন্যথায় আপনি `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory` ত্রুটিটি পেতে পারেন।

### Flatpak ব্যবহার করে Obsidian ইনস্টল করুন

1. আপনার টার্মিনালে, Obsidian ইনস্টল করতে নিচের কমান্ডটি চালান:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. নিচের কমান্ডটি চালিয়ে Obsidian খুলুন:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Android-এ Obsidian ইনস্টল করুন

1. [Play Store](https://play.google.com/store/apps/details?id=md.obsidian)-এ Obsidian খুঁজুন।
2. অ্যাপটি ডাউনলোড করতে **Install** ট্যাপ করুন।
3. অন্য যেকোনো অ্যাপ খোলার মতো একইভাবে Obsidian খুলুন।

আপনি ঐচ্ছিকভাবে [Download Obsidian](https://obsidian.md/download) পৃষ্ঠা থেকে Android-এর জন্য APK ডাউনলোড করতে পারেন।

## iPhone এবং iPad-এ Obsidian ইনস্টল করুন

1. [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442)-এ Obsidian খুঁজুন।
2. অ্যাপটি ডাউনলোড করতে **Get** ট্যাপ করুন।
3. অন্য যেকোনো অ্যাপ খোলার মতো একইভাবে Obsidian খুলুন।
