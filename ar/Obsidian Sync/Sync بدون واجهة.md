---
permalink: sync/headless
cssclasses:
  - reference
description: 'Obsidian Sync offers a headless client to sync vaults without using the desktop app. Useful for CI pipelines, agents, and automated workflows. Sync the latest changes or keep files continuously up to date.'
aliases:
  - Headless Sync
---
يوفر [[مقدمة عن Obsidian Sync|Obsidian Sync]] عميلاً بدون واجهة رسومية لمزامنة الخزائن دون استخدام تطبيق سطح المكتب. مفيد لخطوط أنابيب CI والوكلاء وسير العمل المؤتمت. قم بمزامنة أحدث التغييرات أو حافظ على تحديث الملفات باستمرار.

قم بتثبيت [[Obsidian Headless]] **(إصدار تجريبي مفتوح)** للتفاعل مع [[مقدمة عن Obsidian Sync|Obsidian Sync]] من سطر الأوامر دون تطبيق Obsidian لسطح المكتب. تستخدم المزامنة بدون واجهة رسومية نفس [[الأمان والخصوصية|حماية التشفير والخصوصية]] المتوفرة في تطبيق سطح المكتب، بما في ذلك التشفير من طرف إلى طرف.

## البدء السريع

> [!error] قم بعمل نسخة احتياطية من بياناتك قبل البدء
> 1. قم دائمًا بعمل نسخة احتياطية من بياناتك قبل البدء تحسبًا لأي شيء غير متوقع.
> 2. لا تستخدم *كلاً من* مزامنة تطبيق سطح المكتب والمزامنة بدون واجهة رسومية على نفس الجهاز، لأن ذلك قد يسبب تعارضات في البيانات. استخدم طريقة مزامنة واحدة فقط لكل جهاز.

قم بتثبيت [[Obsidian Headless|Obsidian Headless]] **(إصدار تجريبي مفتوح)**:

```shell
npm install -g obsidian-headless
```

يجب أن يكون لديك [[الخطط وحدود التخزين|اشتراك نشط في Obsidian Sync]].

```shell
# تسجيل الدخول
ob login

# عرض الخزائن البعيدة
ob sync-list-remote

# إعداد خزنة للمزامنة
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# تشغيل مزامنة لمرة واحدة
ob sync

# تشغيل مزامنة مستمرة (تراقب التغييرات)
ob sync --continuous
```

## الأوامر

### `ob sync-list-remote`

عرض جميع الخزائن البعيدة المتاحة لحسابك، بما في ذلك الخزائن المشتركة.

### `ob sync-list-local`

عرض الخزائن المهيأة محليًا ومساراتها.

### `ob sync-create-remote`

إنشاء خزنة بعيدة جديدة.

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| الخيار | الوصف |
| --- | --- |
| `--name` | اسم الخزنة (مطلوب) |
| `--encryption` | `standard` للتشفير المُدار، `e2ee` للتشفير من طرف إلى طرف |
| `--password` | كلمة المرور للتشفير من طرف إلى طرف (يُطلب إدخالها إذا لم تُحدد) |
| `--region` | [[Sync regions\|المنطقة]] الخاصة بالخادم (تلقائية إذا لم تُحدد) |

### `ob sync-setup`

إعداد المزامنة بين خزنة محلية وخزنة بعيدة.

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| الخيار | الوصف |
| --- | --- |
| `--vault` | معرّف الخزنة البعيدة أو اسمها (مطلوب) |
| `--path` | المجلد المحلي (افتراضي: المجلد الحالي) |
| `--password` | كلمة المرور للتشفير من طرف إلى طرف (يُطلب إدخالها إذا لم تُحدد) |
| `--device-name` | اسم الجهاز المعروض في [[Version history\|سجل إصدارات المزامنة]] |
| `--config-dir` | اسم [[Configuration folder\|مجلد الإعدادات]] (افتراضي: `.obsidian`) |

### `ob sync`

تشغيل المزامنة لخزنة مهيأة.

```
ob sync [--path <local-path>] [--continuous]
```

| الخيار | الوصف |
| --- | --- |
| `--path` | مسار الخزنة المحلية (افتراضي: المجلد الحالي) |
| `--continuous` | التشغيل المستمر مع مراقبة التغييرات |

### `ob sync-config`

عرض أو تغيير [[إعدادات المزامنة والمزامنة الانتقائية|إعدادات المزامنة]] لخزنة. قم بتشغيله بدون خيارات لعرض الإعدادات الحالية.

```
ob sync-config [--path <local-path>] [options]
```

| الخيار                | الوصف                                                                                                                                                                                                          |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path`              | مسار الخزنة المحلية (افتراضي: المجلد الحالي)                                                                                                                                                                  |
| `--mode`              | وضع المزامنة: `bidirectional` (افتراضي)، `pull-only` (تنزيل فقط، تجاهل التغييرات المحلية)، أو `mirror-remote` (تنزيل فقط، التراجع عن التغييرات المحلية)                                                        |
| `--conflict-strategy` | `merge` أو `conflict`                                                                                                                                                                                          |
| `--file-types`        | أنواع المرفقات للمزامنة: `image`، `audio`، `video`، `pdf`، `unsupported` (مفصولة بفواصل، فارغ للمسح)                                                                                                           |
| `--configs`           | فئات الإعدادات للمزامنة: `app`، `appearance`، `appearance-data`، `hotkey`، `core-plugin`، `core-plugin-data`، `community-plugin`، `community-plugin-data` (مفصولة بفواصل، فارغ لتعطيل مزامنة الإعدادات)        |
| `--excluded-folders`  | المجلدات المستبعدة (مفصولة بفواصل، فارغ للمسح)                                                                                                                                                                |
| `--device-name`       | اسم الجهاز لتعريف هذا العميل في سجل إصدارات المزامنة                                                                                                                                                         |
| `--config-dir`        | اسم مجلد الإعدادات (افتراضي: `.obsidian`)                                                                                                                                                                     |

### `ob sync-status`

عرض حالة المزامنة والإعدادات لخزنة.

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

قطع اتصال خزنة عن المزامنة وإزالة بيانات الاعتماد المخزنة.

```
ob sync-unlink [--path <local-path>]
```

## الوحدات الأصلية

يتضمن Obsidian Headless إضافة أصلية مُعدة مسبقًا لتعيين وقت إنشاء الملف (birthtime) على Windows وmacOS. يحافظ هذا على الطوابع الزمنية الأصلية للإنشاء عند تنزيل الملفات من الخادم.

تستهدف الإضافة إصدار N-API 3، لذا فإن الملفات الثنائية المُجمّعة مستقرة على مستوى ABI وتعمل عبر إصدارات Node.js دون الحاجة إلى إعادة التجميع.

على Linux، لا يُدعم birthtime — لا يتم تضمين الإضافة وتعمل المزامنة بشكل طبيعي بدونها.

الملفات الثنائية المُعدة مسبقًا متضمنة لـ:

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`
