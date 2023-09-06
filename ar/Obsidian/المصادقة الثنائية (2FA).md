---
permalink: obsidian/2-factor-authentication
---

يقدم Obsidian للمستخدمين الذين يقومون بإنشاء [https://obsidian.md/account](https://obsidian.md/account) خيار تمكين المصادقة الثنائية (2FA).

## تمكين المصادقة الثنائية (2FA)

قم بتسجيل الدخول إلى حسابك في Obsidian من متصفح الويب على [https://obsidian.md/account](https://obsidian.md/account).

- ضمن قسم **Account**، ابحث عن عنصر <code dir="ltr">2-factor authentication</code> وحدد الزر **Enable**.
- سيظهر نافذة منبثقة لدعوتك لتوصيل تطبيق مصادقة.

> [!تلميح]- تطبيقات المصادقة الشائعة
> - [Authy](https://authy.com)
> - [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
> - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)
> - [iCloud Keychain](https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios)

- بمجرد الاتصال، سيقدم لك تطبيق المصادقة رمزًا مكوّنًا من ستة أرقام. أدخل ذلك الرمز أسفل **QR code/setup key**.
- أدخل كلمة المرور الحالية.
- حدد **Complete set up**.
- سيتم استبدال النافذة المنبثقة بنافذة تأكيد.

تم تكوين المصادقة الثنائية (2FA) الآن.

> [!تحذير]- نسخ احتياطي QR code/setup key
> إذا قررت الاحتفاظ بنسخة احتياطية من **QR code** أو **Setup key**، فإننا نوصي بشدة بالاحتفاظ به في نظام مشفر بكلمة مرور.

## تعطيل المصادقة الثنائية (2FA)

قم بتسجيل الدخول إلى حسابك في Obsidian من متصفح الويب على [https://obsidian.md/account](https://obsidian.md/account).

- في قسم **Account**، ابحث عن عنصر <code dir="ltr">2-factor authentication</code> وحدد الزر **Disable**.
- أدخل كلمة مرور حسابك في Obsidian.
- أدخل الرمز الحالي المكوّن من ستة أرقام من تطبيق المصادقة.
- حدد **Disable 2FA**
- ستعود إلى شاشة إدارة الحساب

سيتم عرض زر **Enable** مرة أخرى في قسم <code dir="ltr">2-factor authentication</code>.

## الأسئلة الشائعة

> [!سؤال]- س1. لقد قمت بتمكين المصادقة الثنائية (2FA). هل سيتم تسجيل خروجي من أجهزتي الحالية في Obsidian؟
> لا.
>
> تمكين المصادقة الثنائية (2FA) لا يقوم بتسجيل خروجك من كل مكان لراحتك. إذا كنت بحاجة إلى ذلك، يمكنك القيام بذلك يدويًا من صفحة حسابك، وبالتالي تسجيل الدخول مرة أخرى على كل من أجهزتك.

> [!سؤال]- س2. قمت بتمكين، ثم تعطيل المصادقة الثنائية (2FA). أود إعدادها مرة أخرى. هل يمكنني استخدام QR code الأصلي أو setup key للإعداد؟
> لا.
>
> سيتم توفير **QR code** جديد و **setup key** جديد في كل مرة تبدأ فيها إعداد جديد للمصادقة الثنائية (2FA).

> [!سؤال]- س3. لقد قمت بتمكين المصادقة الثنائية (2FA). لم يطلب مني ذلك بعد عدة محاولات لتسجيل الخروج/الدخول. هل هذا يعمل؟
> قد تسمح ذاكرة التخزين المؤقت للمتصفح بالظهور كما لو كنت تقوم بإجراء تغييرات على الصفحة (مثل تسجيل الدخول/الخروج) بينما في الواقع أنت تصل إلى البيانات القبوة. حاول استخدام نافذة التصفح الخاصة لتسجيل الدخول لتأكيد عمل المصادقة الثنائية (2FA).
>
>
> إذا كنت لا تزال تواجه هذا السلوك، يرجى [تقديم تقرير عن الخلل](https://forum.obsidian.md/c/bug-reports/7).
