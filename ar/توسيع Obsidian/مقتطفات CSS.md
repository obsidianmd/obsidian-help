---
permalink: extending-obsidian/css-snippets
---

تعلم كيفية تعديل ملامح مظهر Obsidian بدون الحاجة إلى [بناء سمة](https://docs.obsidian.md/Themes/App+themes/Build+a+theme).

CSS هي لغة تصف كيفية عرض مستند HTML.من خلال إضافة مقتطفات CSS، يمكنك إعادة تعريف أجزاء من واجهة مستخدم Obsidian، مثل حجم ولون العناوين. يتضمن Obsidian [متغيرات CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) يمكنك استخدامها لتخصيص أجزاء من واجهة المستخدم بسهولة.

يبحث Obsidian عن مقتطفات CSS داخل مجلد تكوين القبو.

لإضافة مقتطف CSS، اتبع هذه الخطوات:

1. افتح **Settings**.
2. ضمن **Appearance → CSS snippets**، حدد **Open snippets folder** (أيقونة المجلد).
3. في مجلد المقتطفات، أنشئ ملف CSS يحتوي على المقتطفات.
4. في Obsidian، ضمن **Appearance → CSS snippets**، حدد **Reload snippets** (أيقونة التحديث) لرؤية المقتطف في القائمة.

يكتشف Obsidian التغييرات في مقتطفات CSS تلقائيًا ويطبقها عند حفظ مقتطف. لا يلزم إعادة تشغيل Obsidian لتطبيق التغييرات.

> [!تلميح] مثال: تغيير لون نص
> على سبيل المثال، أنشئ ملفًا يُسمى `snippet.css` بالمحتوى التالي لتغيير لون النص إلى الأحمر:
>
> ```css
> body {
> 	--text-normal: red;
> }
> ```

## تعرف على المزيد

- إذا كنت جديدًا على CSS، راجع [تعلّم تنسيق HTML باستخدام CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) من Mozilla.
- إذا كنت ترغب في المزيد من النصائح حول تنسيق Obsidian، راجع [بناء السمات](https://docs.obsidian.md/Themes/App+themes/Build+a+theme).
