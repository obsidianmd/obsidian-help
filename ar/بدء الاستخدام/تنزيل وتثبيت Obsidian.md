تعرض هذه الصفحة جميع الطرق المدعومة لتنزيل وتثبيت Obsidian.

## تثبيت Obsidian على Windows

1. افتح متصفحك وانتقل إلى [تنزيل Obsidian](https://obsidian.md/download).
2. تحت **Windows**، انقر على **<span dir="ltr">64-bit installer</span> ** لتنزيل ملف التثبيت.
3. افتح ملف التثبيت واتبع التعليمات.
4. افتح Obsidian بنفس الطريقة التي تفتح بها أي تطبيق آخر.

## تثبيت Obsidian على macOS

1. افتح متصفحك وانتقل إلى [تنزيل Obsidian](https://obsidian.md/download).
2. تحت **macOS**، انقر على **Universal DMG (Intel and M1)** لتنزيل ملف التثبيت.
3. افتح ملف التثبيت.
4. في النافذة التي تظهر، اسحب Obsidian إلى مجلد التطبيقات.
5. افتح Obsidian بنفس الطريقة التي تفتح بها أي تطبيق آخر.

## تثبيت Obsidian على Linux

إذا كنت تستخدم Linux، فيمكنك تثبيت Obsidian بعدة طرق. اتبع التعليمات لنظام التعبئة الذي تستخدمه.

### تثبيت Obsidian باستخدام Snap

1. افتح متصفحك وانتقل إلى [تنزيل Obsidian](https://obsidian.md/download).
2. تحت **Linux**، انقر على **Snap** لتنزيل ملف التثبيت.
3. افتح نافذة الأوامر (terminal) وانتقل إلى المجلد الذي تم تنزيل ملف التثبيت فيه.
4. في نافذة الأوامر، اكتب الأمر التالي لتثبيت حزمة Snap: (العلامة `--dangerous` مطلوبة بسبب Canonical، الشركة التي أنشأت Snap، لم تراجع حزمتنا، والعلامة `--classic` تسمح لـ Obsidian بالوصول إلى خارج sandbox، حيث يتم تخزين ملاحظاتك)

	```bash
	snap install obsidian_<version>_<arch>.snap --dangerous --classic
	```

5. افتح Obsidian بنفس الطريقة التي تفتح بها أي تطبيق آخر.

### تثبيت Obsidian باستخدام AppImage

1. افتح متصفح الويب الخاص بك وانتقل إلى [تنزيل Obsidian](https://obsidian.md/download).
2. تحت **Linux**, انقر فوق **AppImage** لتنزيل ملف التثبيت.
3. افتح نافذة الأوامر (terminal) وانتقل إلى المجلد الذي تم تنزيل ملف التثبيت فيه.
4. في نافذة الأوامر، قم بتشغيل الأمر التالي لفتح Obsidian:

	```bash
	chmod u+x Obsidian-<version>.AppImage ./Obsidian-<version>.AppImage
	```

### تثبيت Obsidian باستخدام Flatpak

1. في نافذة الأوامر، قم بتشغيل الأمر التالي لتثبيت Obsidian:

	```bash
	flatpak install flathub md.obsidian.Obsidian
	```

2. افتح Obsidian عن طريق تشغيل الأمر التالي:

	```bash
	flatpak run md.obsidian.Obsidian
	```

## تثبيت Obsidian على Android

1. ابحث عن Obsidian في [متجر Google Play](https://play.google.com/store/apps/details?id=md.obsidian).
2. اضغط على **تثبيت** لتحميل التطبيق.
3. افتح Obsidian بنفس الطريقة التي تفتح بها أي تطبيق آخر.

## تثبيت Obsidian على iPhone و iPad

1. ابحث عن Obsidian في [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. اضغط على **تنزيل** لتحميل التطبيق.
3. افتح Obsidian بنفس الطريقة التي تفتح بها أي تطبيق آخر.
