---
permalink: getting-started/download-and-install-obsidian
---

تعرض هذه الصفحة جميع الطرق المدعومة لتنزيل وتثبيت Obsidian.

## تثبيت Obsidian على Windows

1. افتح متصفحك وانتقل إلى [تنزيل Obsidian](https://obsidian.md/download).
2. ضمن **Windows**، انقر على **64-bit installer** لتنزيل ملف التثبيت.
3. افتح ملف التثبيت واتبع التعليمات.
4. افتح Obsidian بنفس الطريقة التي تفتح بها أي تطبيق آخر.

## تثبيت Obsidian على macOS

1. افتح متصفحك وانتقل إلى [تنزيل Obsidian](https://obsidian.md/download).
2. ضمن **macOS**، انقر على **Universal DMG (Intel and M1)** لتنزيل ملف التثبيت.
3. افتح ملف التثبيت.
4. في النافذة التي تظهر، اسحب Obsidian إلى مجلد التطبيقات.
5. افتح Obsidian بنفس الطريقة التي تفتح بها أي تطبيق آخر.

## تثبيت Obsidian على Linux

إذا كنت تستخدم نظام Linux، يمكنك تثبيت Obsidian بعدة طرق. اتبع التعليمات لنظام التعبئة الذي تستخدمه.

### تثبيت Obsidian باستخدام Snap

1. افتح متصفحك وانتقل إلى [تنزيل Obsidian](https://obsidian.md/download).
2. ضمن **Linux**، انقر على **Snap** لتنزيل ملف التثبيت.
3. افتح نافذة الأوامر (terminal) وانتقل إلى المجلد الذي قمت بتنزيل ملف التثبيت إليه.
4. في نافذة الأوامر (terminal)، قم بتشغيل الأمر التالي لتثبيت حزمة Snap: (flag <code dir="ltr">--dangerous</code> مطلوب لأن Canonical، الشركة التي أنشأت Snap، لم تقم بمراجعة حزمتنا، flag <code dir="ltr">--classic</code> يسمح لـ Obsidian بالوصول إلى خارج بيئة الاختبار حيث يتم تخزين ملاحظاتك)

	 ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. افتح Obsidian بنفس الطريقة التي تفتح بها أي تطبيق آخر.

### تثبيت Obsidian باستخدام AppImage

1. افتح متصفحك وانتقل إلى [تنزيل Obsidian](https://obsidian.md/download).
2. ضمن **Linux**، انقر على **AppImage** لتنزيل ملف التثبيت.
3. افتح نافذة الأوامر (terminal) وانتقل إلى المجلد الذي قمت بتنزيل ملف التثبيت إليه.
4. في نافذة الأوامر (terminal)، قم بتشغيل الأمر التالي لفتح Obsidian:

	 ```bash
   chmod u+x Obsidian-<version>.AppImage
	. /Obsidian-<version>.AppImage
	 ```

### تثبيت Obsidian باستخدام Flatpak

1. في نافذة الأوامر (terminal)، قم بتشغيل الأمر التالي لتثبيت Obsidian:

	 ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

5. افتح Obsidian باستخدام تشغيل الأمر التالي:

	 ```bash
   flatpak run md.obsidian.Obsidian
   ```

## تثبيت Obsidian على Android

1. ابحث عن Obsidian في [متجر Play](https://play.google.com/store/apps/details?id=md.obsidian).
2. انقر على **Install** لتنزيل التطبيق.
3. افتح Obsidian بنفس الطريقة التي تفتح بها أي تطبيق آخر.

## تثبيت Obsidian على أجهزة iPhone و iPad

1. ابحث عن Obsidian في [متجر App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. انقر على **Get** لتنزيل التطبيق.
3. افتح Obsidian بنفس الطريقة التي تفتح بها أي تطبيق آخر.
