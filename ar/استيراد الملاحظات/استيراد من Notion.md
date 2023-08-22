---
permalink: import/notion
---

يتيح لك Obsidian ترحيل ملاحظاتك من Notion بسهولة باستخدام مكوّن [[المستورد]] الإضافي.

## قم بتصدير بياناتك من Notion

تستخدم Obsidian تنسيق تصدير HTML من Notion. يمكنك العثور على تعليمات Notion حول كيفية تصدير مساحة العمل الكاملة [على موقع Notion](https://www.notion.so/help/export-your-content). يجب أن تكون مسؤولًا عن مساحة العمل لترى هذا الخيار.

1. انتقل إلى **Settings & members** في أعلى الشريط الجانبي الأيسر.
2. حدد **Settings** في الشريط الجانبي لهذه النافذة.
3. انتقل لأسفل وانقر على زر **Export all workspace content**.
4. ضمن **Export format**، حدد **HTML**.
5. ستتلقى ملفًا <code dir="ltr">.zip</code> عبر البريد الإلكتروني أو مباشرةً في المتصفح.

![[notion-export.png]]

## استورد بياناتك من Notion إلى Obsidian

ستحتاج إلى مكوّن [[المستورد]] الإضافي الرسمي لـ Obsidian، والذي يمكنك [تثبيته من هنا](obsidian://show-plugin?id=obsidian-importer).

1. افتح **Settings**.
2. انتقل إلى **Community Plugins** وقم بتثبيت [Importer](obsidian://show-plugin?id=obsidian-importer).
3. قم بتمكين مكوّن Importer الإضافي.
4. افتح مكوّن Importer الإضافي باستخدام لوحة الأوامر أو من أيقونة الشريط.
5. ضمن **File format**، اختر **Notion (.zip)**
6. حدد ملف <code dir="ltr">.zip</code> الذي يحتوي على ملفات Notion التي تريد استيرادها. يوصى باستيراد جميع محتوى Notion دفعة واحدة حتى يمكن التوفيق بين الروابط الداخلية بشكل صحيح.
7. اختياريًا، حدد مجلدًا للاستيراد. سيتم تضمين صفحات وقواعد البيانات من Notion داخل هذا المجلد.
8. انقر على **Import** وانتظر حتى يكتمل الاستيراد.
9. انتهيت!
