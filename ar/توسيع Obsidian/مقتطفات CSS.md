---
permalink: snippets
publish: true
mobile: true
description: Learn how to change parts of the Obsidian app’s appearance without creating a full theme.
aliases:
  - CSS snippets
---
تعلّم كيفية تعديل جوانب مظهر تطبيق Obsidian دون الحاجة إلى [بناء سمة](https://docs.obsidian.md/Themes/App+themes/Build+a+theme).

> [!tip] إذا كنت تبحث عن إرشادات حول التعامل مع CSS لـ [[مقدمة عن Obsidian Publish|Obsidian Publish]]، فتأكد من مراجعة [[تخصيص موقعك]].

CSS هي لغة تتحكم في مظهر HTML. بإضافة مقتطفات CSS، يمكنك تغيير أجزاء من واجهة مستخدم Obsidian، مثل حجم ولون العناوين. يحتوي Obsidian على [متغيرات CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) التي تساعدك على تخصيص الواجهة بسهولة.

يبحث Obsidian عن مقتطفات CSS داخل [[مجلد الإعدادات|مجلد إعدادات]] الخزنة.

## إضافة مقتطف

لإضافة مقتطف CSS على **سطح المكتب** ![[lucide-monitor-check.svg#icon]]، اتبع الخطوات التالية:

1. افتح **[[الإعدادات]]** ( ![[lucide-settings.svg#icon]] ).
2. ضمن **المظهر ← مقتطفات CSS**، اختر **فتح مجلد المقتطفات** ( ![[lucide-folder-open.svg#icon]] ).
3. في مجلد المقتطفات، أنشئ ملف CSS يحتوي على المقتطف الخاص بك.
4. في Obsidian، ضمن **المظهر ← مقتطفات CSS**، اختر **إعادة تحميل المقتطفات** ( ![[lucide-refresh-cw.svg#icon]] ) لرؤية المقتطف في القائمة.
5. مكّن المقتطف بالنقر على زر التبديل.

لإضافة مقتطف CSS على **الهاتف المحمول/الجهاز اللوحي** ![[obsidian-icon-smartphone.svg#icon]]، يمكنك اتباع الخطوات التالية:

1. افتح مدير الملفات وابحث عن خزنتك. يمكنك التحقق من موقع الخزنة في _إدارة الخزنات…_ بالنقر على خزنتك والنظر إلى المسار.
2. افتح [[مجلد الإعدادات]] وأنشئ مجلدًا باسم `snippets` إذا لم يكن موجودًا.
3. أضف مقتطف CSS الخاص بك إلى هذا المجلد.
4. افتح **[[الإعدادات]]** في Obsidian ( ![[lucide-settings.svg#icon]] ).
5. اختر **المظهر** من الجانب.
6. مرّر للأسفل إلى قسم **مقتطفات CSS**.
7. انقر على **إعادة تحميل المقتطفات** (![[lucide-refresh-cw.svg#icon]]) لتحديث القائمة.
8. انقر على زر التبديل لتمكين المقتطف.

بدلاً من ذلك، يمكنك
- [[مزامنة ملاحظاتك عبر الأجهزة|مزامنة]] أي تغييرات مع خدمة المزامنة الخاصة بك.
- استخدام إضافة مجتمعية لإنشاء مقتطف من داخل Obsidian.

بمجرد التمكين، سيكتشف Obsidian تلقائيًا التغييرات في مقتطفات CSS ويطبقها عند حفظ الملف.

> [!tip] لا تحتاج إلى إعادة تشغيل Obsidian لتطبيق التغييرات. ومع ذلك، قد تحتاج إلى استخدام أمر [[لوحة الأوامر]] لإعادة تحميل Obsidian دون حفظ لرؤية التغييرات في السمة أو الملاحظة الحالية.

## كتابة CSS لـ Obsidian

يوفر Obsidian عدة طرق تجعل كتابة CSS أسهل وأكثر فعالية.

يحتوي على مجموعة من [متغيرات CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) لتعديل أجزاء من Obsidian بسهولة و[[صيغة التنسيق الأساسي#أنواع الخصائص|نوع خاصية]] مدمج لتغيير مظهر ملاحظة واحدة أو عدة ملاحظات.

> [!example] المتغيرات
> أنشئ ملفًا باسم `headers.css` بالمحتوى التالي لتغيير ألوان [[صيغة التنسيق الأساسي#العناوين|مستويات العناوين]] الستة إلى ألوان قوس قزح:
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] فئات CSS
> عيّن اسم فئة CSS مخصصة (أو قائمة من فئات CSS) لـ [[صيغة التنسيق الأساسي|خاصية]] محددة مسبقًا `cssclasses` لجعل ملاحظة واحدة أو أكثر تبدو مختلفة عن غيرها.
> 
> **CSS**:
> ```css
> .red-border img {
>    border-color: #ff0000;
> }
> ```
> 
> **YAML/الخصائص**:
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> في كل ملاحظة تحتوي على القيمة `red-border` في خاصية `cssclasses`، يتم عرض الصور بإطار أحمر.

لضمان أن ملف CSS صالح ومنسق بشكل صحيح، ننصح بالتحقق منه باستخدام أداة مثل [CSS Validation Service](https://jigsaw.w3.org/css-validator/)، حيث أن CSS غير الصالح لن يعمل.

## تعلم المزيد

- إذا كنت جديدًا على CSS، اطلع على [تعلم تنسيق HTML باستخدام CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) من Mozilla.
- لمزيد من المعلومات حول تنسيق Obsidian، راجع:
  - [حول التنسيق](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [بناء سمة](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [بناء سمة Publish](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [سير عمل فاحص CSS في Obsidian](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
