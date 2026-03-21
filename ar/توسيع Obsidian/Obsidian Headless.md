---
permalink: headless
description: Obsidian Headless is a command line client for Obsidian services. Sync your vaults without the desktop app.
aliases:
  - Obsidian Headless
---
Obsidian Headless **(نسخة تجريبية مفتوحة)** هو عميل بدون واجهة رسومية لخدمات Obsidian. يتيح لك [[Sync بدون واجهة|مزامنة الخزائن]] من سطر الأوامر دون الحاجة لتطبيق سطح المكتب، مع جميع مزايا السرعة والخصوصية و[[مقدمة عن Obsidian Sync|Obsidian Sync]] من حيث [[Obsidian CLI]].

أسباب قد تدفعك لاستخدام Obsidian Headless:

- أتمتة النسخ الاحتياطية عن بُعد.
- أتمتة نشر موقع ويب.
- منح الأدوات الذكية الوصول إلى خزنة دون الوصول إلى جهاز الكمبيوتر بالكامل.
- مزامنة خزنة فريق مشتركة إلى خادم يغذي أدوات أخرى.
- تشغيل أتمتة مجدولة مثل تجميع الملاحظات اليومية في ملخصات أسبوعية، ووضع الوسوم تلقائيًا، وغيرها.

> [!info] Obsidian Headless مقابل Obsidian CLI
> [[Obsidian CLI]] يتحكم في تطبيق Obsidian لسطح المكتب من الطرفية. أما Obsidian Headless فهو عميل مستقل يعمل بشكل منفصل، دون الحاجة لتطبيق سطح المكتب.

## التثبيت

يتطلب Obsidian Headless **(نسخة تجريبية مفتوحة)** الإصدار 22 أو أحدث من Node.js. قم بتثبيته من [npm](https://www.npmjs.com/package/obsidian-headless):

```shell
npm install -g obsidian-headless
```

## المصادقة

### تسجيل الدخول

```shell
ob login
```

إذا كنت مسجلاً الدخول بالفعل، فإن `ob login` يعرض معلومات حسابك. للتبديل بين الحسابات، مرّر `--email` و/أو `--password` لتسجيل الدخول مجددًا.

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

جميع الخيارات تفاعلية عند حذفها — يتم طلب البريد الإلكتروني وكلمة المرور، ويُطلب رمز المصادقة الثنائية تلقائيًا إذا كانت مفعّلة على الحساب.

لتسجيل الخروج ومسح بيانات الاعتماد المخزنة:

```shell
ob logout
```

## الخدمات

- [[Sync بدون واجهة]]: استخدم [[مقدمة عن Obsidian Sync|Obsidian Sync]] من سطر الأوامر دون الحاجة لتطبيق سطح المكتب.
