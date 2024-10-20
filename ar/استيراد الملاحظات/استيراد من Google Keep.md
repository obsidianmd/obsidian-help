---
permalink: import/google-keep
---

يتيح لك Obsidian ترحيل ملاحظاتك من Google Keep بسهولة باستخدام مكوّن [[المستورد]] الإضافي.

## قم بتصدير بياناتك من Google Keep

1. انتقل إلى [Google Takeout](https://takeout.google.com/settings/takeout) وقم بتسجيل الدخول إلى حسابك في Google.
2. انقر على **Deselect all** في الزاوية اليمنى العليا.
3. مرر للأسفل وحدد **Keep** من القائمة.
4. مرر للأسفل وانقر على **Next step**.
5. في الشاشة التالية، انقر على زر **Create export**.
6. قم بتنزيل ملف <code dir="ltr">.zip</code> عندما يتوفر.

## استورد بياناتك من Google Keep إلى Obsidian

ستحتاج إلى مكوّن [[المستورد]] الإضافي الرسمي لـ Obsidian، والذي يمكنك [تثبيته من هنا](obsidian://show-plugin?id=obsidian-importer).

1. افتح **Settings**.
2. انتقل إلى **Community Plugins** وقم بتثبيت [Importer](obsidian://show-plugin?id=obsidian-importer).
3. قم بتمكين مكوّن Importer الإضافي.
4. افتح مكوّن Importer الإضافي باستخدام لوحة الأوامر أو من أيقونة الشريط.
5. ضمن **File format**، اختر **Google Keep (.zip)**.
6. حدد موقع ملف الـ <code dir="ltr">.zip</code>.
7. انقر على **Import** وانتظر حتى يكتمل الاستيراد.
8. انتهيت!

### الميزات المدعومة

- ستتم استيراد جميع قوائم المهام كعناصر في المستوى الأول لأن Google Keep لا يصدر معلومات المسافة البادئة.
- لن يتم استيراد التذكيرات وتعيينات المستخدم على الملاحظات لأن هذه الميزات غير مدعومة من قبل Obsidian.
- يجب استيراد جميع المعلومات الأخرى كمجموعة من المحتوى والوسوم.
