---
permalink: obsidian-flavored-markdown
publish: true
mobile: true
description: 'Learn about Obsidian Flavored Markdown, including supported extensions and how Markdown interacts with HTML elements.'
aliases:
  - Obsidian Flavored Markdown
---
يسعى Obsidian لتحقيق أقصى قدر من الإمكانيات دون الإخلال بأي تنسيقات موجودة. لذلك، نستخدم مجموعة من أنماط [[صيغة التنسيق الأساسي|Markdown]].

يدعم Obsidian كلاً من [CommonMark](https://commonmark.org/) و[GitHub Flavored Markdown](https://github.github.com/gfm/) و[LaTeX](https://www.latex-project.org/).

> [!tip]- Markdown داخل HTML
> لا يعرض Obsidian صيغة Markdown داخل عناصر HTML. هذا قرار تصميمي مقصود لتحسين الأداء والحفاظ على بساطة المحلل عند إدارة المستندات الكبيرة.
>
> على سبيل المثال، تنسيقات Markdown مثل `**bold**` أو `` `code` `` لن تتم معالجتها داخل `<div>` أو `<span>` أو `<table>` أو أي عناصر HTML أخرى.
>
> ```md
> <div>
> This **will not** be bold.
> </div>
> ```

### امتدادات Markdown المدعومة

| الصيغة          | الوصف                                                                 |
| --------------- | --------------------------------------------------------------------- |
| `[[Link]]`      | [[Internal links\|الروابط الداخلية]]                                                    |
| `![[Link]]`     | [[Embed files\|تضمين الملفات]]                                                       |
| `![[Link#^id]]` | [[روابط داخلية#Link to a block in a note\|مراجع الكتل]]        |
| `^id`           | [[روابط داخلية#Link to a block in a note\|تعريف كتلة]]        |
| `[^id]`         | [[صيغة التنسيق الأساسي#Footnotes\|الحواشي السفلية]]                      |
| `%%Text%%`      | [[صيغة التنسيق الأساسي#Comments\|التعليقات]]                        |
| `~~Text~~`      | [[صيغة التنسيق الأساسي#Bold, italics, highlights\|يتوسطه خط]] |
| `==Text==`      | [[صيغة التنسيق الأساسي#Bold, italics, highlights\|التمييز]]     |
| `` ``` ``       | [[صيغة التنسيق الأساسي#Code blocks\|كتل التعليمات البرمجية]]                  |
| `- [ ]`         | [[صيغة التنسيق الأساسي#Task lists\|مهمة غير مكتملة]]               |
| `- [x]`         | [[صيغة التنسيق الأساسي#Task lists\|مهمة مكتملة]]                |
| `> [!note]`     | [[Callouts\|مربعات التنبيه]]                                                          |
| (انظر الرابط)      | [[صيغة التنسيق المتقدم#Tables\|الجداول]]                         |
