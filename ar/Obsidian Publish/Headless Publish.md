---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish offers a headless client to publish vaults without using the desktop app. Useful for CI pipelines and automated workflows.
aliases:
  - Headless Publish
  - نشر Headless
---
يقدّم [[مقدمة عن Obsidian Publish|Obsidian Publish]] عميلًا بدون واجهة لنشر الخزائن دون استخدام تطبيق سطح المكتب. وهو مفيد لأنابيب CI وسير العمل المؤتمتة. انشر أحدث تغييراتك وفقًا لجدول زمني أو كجزء من أنبوب بناء.

ثبّت [[Obsidian Headless]] **(نسخة تجريبية مفتوحة)** للتفاعل مع [[مقدمة عن Obsidian Publish|Obsidian Publish]] من سطر الأوامر دون تطبيق Obsidian لسطح المكتب.

## البدء السريع

ثبّت [[Obsidian Headless|Obsidian Headless]] **(نسخة تجريبية مفتوحة)**:

```shell
npm install -g obsidian-headless
```

يجب أن يكون لديك اشتراك نشط في [[مقدمة عن Obsidian Publish|Obsidian Publish]].

```shell
# تسجيل الدخول
ob login

# عرض مواقع النشر الخاصة بك
ob publish-list-sites

# ربط خزنة محلية بموقع نشر
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# معاينة التغييرات دون نشر
ob publish --dry-run

# نشر التغييرات
ob publish
```

## الأوامر

### `ob publish-list-sites`

عرض جميع مواقع Publish المتاحة لحسابك.

### `ob publish-create-site`

إنشاء موقع Publish جديد.

```
ob publish-create-site --slug <slug>
```

| الخيار | الوصف |
| --- | --- |
| `--slug` | معرّف URL لموقعك (مثلًا `my-notes` ينشئ `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

ربط خزنة محلية بموقع Publish.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| الخيار | الوصف |
| --- | --- |
| `--site` | معرّف الموقع أو اسمه المختصر (slug) |
| `--path` | مسار الخزنة المحلية (الافتراضي: المجلد الحالي) |

### `ob publish`

نشر تغييرات الخزنة إلى موقعك. بشكل افتراضي، يتم تضمين الملفات التي تحتوي على `publish: true` في البيانات الوصفية في بداية الملف فقط.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| الخيار | الوصف |
| --- | --- |
| `--path` | مسار الخزنة المحلية (الافتراضي: المجلد الحالي) |
| `--all` | تضمين جميع الملفات، وليس فقط تلك التي تحمل علامة النشر |
| `--dry-run` | عرض التغييرات دون نشرها |
| `--yes` | النشر دون طلب تأكيد |

### `ob publish-config`

عرض أو تغيير إعدادات تضمين/استبعاد المجلدات للخزنة. شغّله بدون خيارات لعرض الإعدادات الحالية.

```
ob publish-config [--path <local-path>] [options]
```

| الخيار | الوصف |
| --- | --- |
| `--path` | مسار الخزنة المحلية (الافتراضي: المجلد الحالي) |
| `--includes` | المجلدات المراد تضمينها، مفصولة بفواصل (نص فارغ للمسح) |
| `--excludes` | المجلدات المراد استبعادها، مفصولة بفواصل (نص فارغ للمسح) |

### `ob publish-site-options`

عرض أو تحديث إعدادات العرض والتنقل على مستوى الموقع. شغّله بدون خيارات لعرض الإعدادات الحالية.

```
ob publish-site-options [--path <local-path>] [options]
```

| الخيار | الوصف |
| --- | --- |
| `--path` | مسار الخزنة المحلية (الافتراضي: المجلد الحالي) |
| `--site-name` | اسم الموقع |
| `--index-file` | مسار ملف الصفحة الرئيسية |
| `--logo` | مسار ملف الشعار (نص فارغ للمسح) |
| `--show-navigation` | إظهار التنقل في الشريط الجانبي |
| `--show-graph` | إظهار العرض البياني |
| `--show-outline` | إظهار جدول المحتويات |
| `--show-search` | إظهار البحث |
| `--show-backlinks` | عرض الروابط الخلفية |
| `--show-hover-preview` | إظهار معاينة التمرير |
| `--show-theme-toggle` | إظهار مبدّل السمة |
| `--default-theme` | السمة الافتراضية: `light` أو `dark` |
| `--readable-line-length` | طول السطر المقروء |
| `--strict-line-breaks` | فواصل الأسطر الصارمة |
| `--hide-title` | إخفاء العنوان الضمني |
| `--sliding-window` | وضع النافذة المنزلقة |
| `--nav-order` | ترتيب التنقل، مسارات مفصولة بفواصل (نص فارغ للمسح) |
| `--nav-hidden` | عناصر التنقل المخفية، مسارات مفصولة بفواصل (نص فارغ للمسح) |

### `ob publish-unlink`

فصل الخزنة عن موقع Publish.

```
ob publish-unlink [--path <local-path>]
```
