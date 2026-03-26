---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish یک کلاینت بدون رابط کاربری (headless) برای انتشار خزانه‌ها بدون استفاده از برنامه دسکتاپ ارائه می‌دهد. مناسب برای خطوط لوله CI و جریان‌های کاری خودکار.
---
[[Obsidian Publish/مقدمه‌ای بر Obsidian Publish|Obsidian Publish]] یک کلاینت بدون رابط کاربری برای نشر گاوصندوق‌ها بدون استفاده از اپلیکیشن دسکتاپ ارائه می‌دهد. مناسب برای خطوط لوله CI و گردش‌کارهای خودکار. آخرین تغییرات خود را بر اساس زمان‌بندی یا به عنوان بخشی از خط لوله ساخت نشر دهید.

[[Obsidian Headless]] **(بتای باز)** را نصب کنید تا از طریق خط فرمان و بدون اپلیکیشن دسکتاپ Obsidian با [[Obsidian Publish/مقدمه‌ای بر Obsidian Publish|Obsidian Publish]] تعامل داشته باشید.

## آغاز سریع

[[Obsidian Headless|Obsidian Headless]] **(بتای باز)** را نصب کنید:

```shell
npm install -g obsidian-headless
```

شما باید یک [[Obsidian Publish/مقدمه‌ای بر Obsidian Publish|اشتراک فعال Obsidian Publish]] داشته باشید.

```shell
# ورود
ob login

# فهرست وبگاه‌های نشر شما
ob publish-list-sites

# اتصال یک گاوصندوق محلی به وبگاه نشر
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# پیش‌نمایش تغییرات بدون نشر
ob publish --dry-run

# نشر تغییرات
ob publish
```

## دستورها

### `ob publish-list-sites`

فهرست تمام وبگاه‌های Publish موجود در حساب شما.

### `ob publish-create-site`

ساختن یک وبگاه Publish جدید.

```
ob publish-create-site --slug <slug>
```

| گزینه | توضیحات |
| --- | --- |
| `--slug` | شناسه URL وبگاه شما (مثلاً `my-notes` آدرس `publish.obsidian.md/my-notes` را ایجاد می‌کند) |

### `ob publish-setup`

وصل کردن یک گاوصندوق محلی به وبگاه Publish.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| گزینه | توضیحات |
| --- | --- |
| `--site` | شناسه یا slug وبگاه |
| `--path` | مسیر گاوصندوق محلی (پیش‌فرض: دایرکتوری جاری) |

### `ob publish`

نشر تغییرات گاوصندوق به وبگاه شما. به صورت پیش‌فرض، فقط فایل‌هایی که در فرادادهٔ ابتدای فایل دارای `publish: true` هستند شامل می‌شوند.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| گزینه | توضیحات |
| --- | --- |
| `--path` | مسیر گاوصندوق محلی (پیش‌فرض: دایرکتوری جاری) |
| `--all` | شامل کردن همه فایل‌ها، نه فقط آن‌هایی که پرچم نشر دارند |
| `--dry-run` | نمایش تغییرات بدون نشر |
| `--yes` | نشر بدون درخواست تأیید |

### `ob publish-config`

مشاهده یا تغییر تنظیمات شامل‌کردن/حذف‌کردن پوشه‌ها برای یک گاوصندوق. بدون گزینه اجرا کنید تا پیکربندی فعلی نمایش داده شود.

```
ob publish-config [--path <local-path>] [options]
```

| گزینه | توضیحات |
| --- | --- |
| `--path` | مسیر گاوصندوق محلی (پیش‌فرض: دایرکتوری جاری) |
| `--includes` | پوشه‌های قابل شامل‌شدن، جداشده با کاما (رشته خالی برای پاک‌سازی) |
| `--excludes` | پوشه‌های قابل حذف، جداشده با کاما (رشته خالی برای پاک‌سازی) |

### `ob publish-site-options`

مشاهده یا به‌روزرسانی تنظیمات نمایش و ناوبری در سطح وبگاه. بدون گزینه اجرا کنید تا تنظیمات فعلی نمایش داده شود.

```
ob publish-site-options [--path <local-path>] [options]
```

| گزینه | توضیحات |
| --- | --- |
| `--path` | مسیر گاوصندوق محلی (پیش‌فرض: دایرکتوری جاری) |
| `--site-name` | نام وبگاه |
| `--index-file` | مسیر فایل صفحه اصلی |
| `--logo` | مسیر فایل نشان (رشته خالی برای پاک‌سازی) |
| `--show-navigation` | نمایش نوار کناری ناوبری |
| `--show-graph` | نمایش نمای نمودار |
| `--show-outline` | نمایش فهرست رئوس مطالب |
| `--show-search` | نمایش جستجو |
| `--show-backlinks` | نمایش پشت‌وندها |
| `--show-hover-preview` | نمایش پیش‌نمایش شناور |
| `--show-theme-toggle` | نمایش تغییردهنده پوسته |
| `--default-theme` | پوسته پیش‌فرض: `light` یا `dark` |
| `--readable-line-length` | خواناسازی طول خطوط |
| `--strict-line-breaks` | سخت‌گیری در نمایش شکست خطوط |
| `--hide-title` | پنهان کردن عنوان درون‌خطی |
| `--sliding-window` | حالت پنجره لغزشی |
| `--nav-order` | ترتیب ناوبری، مسیرها جداشده با کاما (رشته خالی برای پاک‌سازی) |
| `--nav-hidden` | آیتم‌های پنهان ناوبری، مسیرها جداشده با کاما (رشته خالی برای پاک‌سازی) |

### `ob publish-unlink`

قطع اتصال یک گاوصندوق از وبگاه Publish.

```
ob publish-unlink [--path <local-path>]
```
