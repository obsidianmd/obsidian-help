---
permalink: install
aliases:
  - Download and install Obsidian
---
Obsidian متاح لجميع أنظمة التشغيل الرئيسية على سطح المكتب والهاتف المحمول. فيما يلي جميع الطرق المدعومة لتنزيل وتثبيت Obsidian.

## تثبيت Obsidian على Windows

1. افتح المتصفح وانتقل إلى [تنزيل Obsidian](https://obsidian.md/download).
2. ضمن **Windows**، انقر على **Universal** لتنزيل ملف التثبيت.
3. افتح ملف التثبيت واتبع التعليمات.
4. افتح Obsidian بنفس الطريقة التي تفتح بها أي تطبيق آخر.

## تثبيت Obsidian على macOS

1. افتح المتصفح وانتقل إلى [تنزيل Obsidian](https://obsidian.md/download).
2. ضمن **macOS**، انقر على **Universal** لتنزيل ملف التثبيت.
3. افتح ملف التثبيت.
4. في النافذة التي تظهر، اسحب Obsidian إلى مجلد التطبيقات.
5. افتح Obsidian بنفس الطريقة التي تفتح بها أي تطبيق آخر.

## تثبيت Obsidian على Linux

إذا كنت تستخدم Linux، يمكنك تثبيت Obsidian بعدة طرق. اتبع التعليمات الخاصة بنظام الحزم الذي تستخدمه.

### تثبيت Obsidian باستخدام Snap

1. افتح المتصفح وانتقل إلى [تنزيل Obsidian](https://obsidian.md/download).
2. ضمن **Linux**، انقر على **Snap** لتنزيل ملف التثبيت.
3. افتح الطرفية وانتقل إلى المجلد الذي نزّلت فيه ملف التثبيت.
4. في الطرفية، نفّذ الأمر التالي لتثبيت حزمة Snap: (العلامة `--dangerous` مطلوبة لأن Canonical، الشركة التي أنشأت Snap، لم تراجع حزمتنا، والعلامة `--classic` تسمح لـ Obsidian بالوصول خارج بيئة الحماية، حيث يتم تخزين ملاحظاتك)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. افتح Obsidian بنفس الطريقة التي تفتح بها أي تطبيق آخر.

### تثبيت Obsidian باستخدام AppImage

1. افتح المتصفح وانتقل إلى [تنزيل Obsidian](https://obsidian.md/download).
2. ضمن **Linux**، انقر على **AppImage** لتنزيل ملف التثبيت.
3. افتح الطرفية وانتقل إلى المجلد الذي نزّلت فيه ملف التثبيت.
4. في الطرفية، نفّذ الأمر التالي لفتح Obsidian:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
ملاحظة: على أجهزة Chromebook، يجب تثبيت حزمة `libnss3-dev` وإلا قد تتلقى الخطأ `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`.

### تثبيت Obsidian باستخدام Flatpak

1. في الطرفية، نفّذ الأمر التالي لتثبيت Obsidian:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. افتح Obsidian بتنفيذ الأمر التالي:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## تثبيت Obsidian على Android

1. ابحث عن Obsidian على [Play Store](https://play.google.com/store/apps/details?id=md.obsidian).
2. اضغط على **تثبيت** لتنزيل التطبيق.
3. افتح Obsidian بنفس الطريقة التي تفتح بها أي تطبيق آخر.

يمكنك اختياريًا تنزيل ملف APK لنظام Android من صفحة [تنزيل Obsidian](https://obsidian.md/download).

## تثبيت Obsidian على iPhone و iPad

1. ابحث عن Obsidian على [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. اضغط على **احصل عليه** لتنزيل التطبيق.
3. افتح Obsidian بنفس الطريقة التي تفتح بها أي تطبيق آخر.
