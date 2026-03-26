---
permalink: install
aliases:
  - آغاز به کار/دریافت و نصبِ اوبسیدین
---
Obsidian برای تمام سیستم‌عامل‌های اصلی دسکتاپ و موبایل در دسترس است. در ادامه تمام روش‌های پشتیبانی‌شده برای بارگیری و نصب Obsidian آورده شده است.

## نصب Obsidian بر ویندوز

1. مرورگر خود را باز کنید و به [بارگیری Obsidian](https://obsidian.md/download) بروید.
2. در بخش **Windows**، روی **Universal** کلیک کنید تا فایل نصب بارگیری شود.
3. فایل نصب را باز کنید و دستورالعمل‌ها را دنبال کنید.
4. Obsidian را مانند هر اپلیکیشن دیگری باز کنید.

## نصب Obsidian بر macOS

1. مرورگر خود را باز کنید و به [بارگیری Obsidian](https://obsidian.md/download) بروید.
2. در بخش **macOS**، روی **Universal** کلیک کنید تا فایل نصب بارگیری شود.
3. فایل نصب را باز کنید.
4. در پنجره‌ای که باز می‌شود، Obsidian را به پوشه Applications بکشید.
5. Obsidian را مانند هر اپلیکیشن دیگری باز کنید.

## نصب Obsidian بر لینوکس

اگر از لینوکس استفاده می‌کنید، می‌توانید Obsidian را به روش‌های مختلفی نصب کنید. دستورالعمل‌های مربوط به سیستم بسته‌بندی مورد استفاده خود را دنبال کنید.

### نصب Obsidian با Snap

1. مرورگر خود را باز کنید و به [بارگیری Obsidian](https://obsidian.md/download) بروید.
2. در بخش **Linux**، روی **Snap** کلیک کنید تا فایل نصب بارگیری شود.
3. یک ترمینال باز کنید و به پوشه‌ای که فایل نصب را در آن بارگیری کردید بروید.
4. در ترمینال، دستور زیر را اجرا کنید تا بسته Snap نصب شود: (پرچم `--dangerous` لازم است زیرا Canonical، شرکت سازنده Snap، بسته ما را بررسی نکرده است، پرچم `--classic` به Obsidian اجازه می‌دهد به خارج از محیط ایزوله که یادداشت‌های شما در آن ذخیره شده‌اند دسترسی داشته باشد)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Obsidian را مانند هر اپلیکیشن دیگری باز کنید.

### نصب Obsidian با AppImage

1. مرورگر خود را باز کنید و به [بارگیری Obsidian](https://obsidian.md/download) بروید.
2. در بخش **Linux**، روی **AppImage** کلیک کنید تا فایل نصب بارگیری شود.
3. یک ترمینال باز کنید و به پوشه‌ای که فایل نصب را در آن بارگیری کردید بروید.
4. در ترمینال، دستور زیر را اجرا کنید تا Obsidian باز شود:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
توجه: در Chromebook‌ها، بسته `libnss3-dev` باید نصب شده باشد وگرنه ممکن است با خطای `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory` مواجه شوید.

### نصب Obsidian با Flatpak

1. در ترمینال خود، دستور زیر را اجرا کنید تا Obsidian نصب شود:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Obsidian را با اجرای دستور زیر باز کنید:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## نصب Obsidian بر اندروید

1. Obsidian را در [Play Store](https://play.google.com/store/apps/details?id=md.obsidian) پیدا کنید.
2. روی **Install** ضربه بزنید تا اپلیکیشن بارگیری شود.
3. Obsidian را مانند هر اپلیکیشن دیگری باز کنید.

همچنین می‌توانید فایل APK اندروید را از صفحه [بارگیری Obsidian](https://obsidian.md/download) بارگیری کنید.

## نصب Obsidian بر آیفون و آیپد

1. Obsidian را در [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442) پیدا کنید.
2. روی **Get** ضربه بزنید تا اپلیکیشن بارگیری شود.
3. Obsidian را مانند هر اپلیکیشن دیگری باز کنید.
