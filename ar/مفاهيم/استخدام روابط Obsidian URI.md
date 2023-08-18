يدعم Obsidian بروتوكول URI مخصصًا <code dir="ltr">obsidian://</code> يمكن استخدامه لتنشيط إجراءات مختلفة داخل التطبيق. يتم استخدام هذا بشكل شائع على نظام macOS وتطبيقات الجوال للتحكم التلقائي وتدفق العمل بين التطبيقات.

إذا كان لديك Obsidian مثبتًا، فسيتم فتح التطبيق على جهازك: [انقر هنا](obsidian://open)

## تثبيت Obsidian URI

للتأكد من أن نظام التشغيل الخاص بك يعيد توجيه روابط <code dir="ltr">obsidian://</code> إلى تطبيق Obsidian، قد تحتاج إلى إجراء خطوات إضافية.

- على Windows، قد يكون تشغيل التطبيق مرة واحدة كافياً. سيتم تسجيل معالج البروتوكول المخصص <code dir="ltr">obsidian://</code> في سجل Windows registry.
- على macOS، قد يكون تشغيل التطبيق مرة واحدة كافياً، ومع ذلك، يجب أن يكون إصدار المثبت 0.8.12 أو أحدث.
- على Linux، هناك عملية تحتاج إلى جهد أكبر:
	- أولاً، تأكد من إنشاء ملف `obsidian.desktop`. [انظر هنا لمزيد من التفاصيل](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files)
	- تأكد من أن ملف سطح المكتب الخاص بك يحدد حقل `Exec` كـ `Exec=executable %u`. يستخدم <code dir="ltr">%u</code> لتمرير روابط URIs <code dir="ltr">obsidian://</code> إلى التطبيق.
	- إذا كنت تستخدم مثبت AppImage، فقد تحتاج إلى فك حزمته باستخدام `Obsidian-x.y.z.AppImage --appimage-extract`. ثم تأكد من أن توجيه `Exec` يشير إلى الملف القابل للتشغيل الذي تم فكه.

## استخدام Obsidian URIs

غالبًا ما تكون URIs في Obsidian بهذا التنسيق:

```
obsidian://action?param1=value&param2=value
```

- العملية المحددة `action` عادة ما تكون الإجراء الذي ترغب في تنفيذه.

### الترميز

==مهم==

تأكد من ترميز قيمك بشكل صحيح. على سبيل المثال، يجب ترميز حروف الشرطة العائمة `/` باستخدام <code dir="ltr">%2F</code> والمسافات بين الكلمات باستخدام <code dir="ltr">%20</code> .

هذا مهم جدًا لأن الحرف "المحجوز" الغير مرمز بشكل صحيح قد يؤدي إلى كسر تفسير الرابط الخاص بـ URI. [انظر هنا للتفاصيل](https://en.wikipedia.org/wiki/Percent-encoding)

### الإجراءات المتاحة

#### الإجراء `open`

الوصف: يفتح قبو Obsidian، وربما يفتح ملفًا داخل ذلك القبو.

المعلمات الممكنة:

- `vault` يمكن أن يكون اسم القبو أو معرف القبو.
	- اسم القبو هو ببساطة اسم مجلد القبو.
	- معرف القبو هو الرمز العشوائي المكون من 16 حرفًا المخصص للقبو. يختلف هذا المعرف من مجلد لآخر على جهاز الكمبيوتر الخاص بك. على سبيل المثال: `ef6ca3e3b524d22f`. لا يوجد طريقة سهلة للعثور على هذا المعرف حاليًا، وسيتم تقديمه في وقت لاحق في مٌحول القبو. يمكن العثور على هذا المعرف حاليًا في <code dir="ltr">%appdata%/obsidian/obsidian.json</code> على Windows. لنظام macOS، استبدل `%appdata%` بـ <code dir="ltr">~/Library/Application Support/</code> . لنظام Linux، استبدل `%appdata%` بـ <code dir="ltr">~/.config/</code> .
- `file` يمكن أن يكون اسم ملف أو مسار من جذر القبو إلى الملف المحدد.
	- لحل الملف المستهدف، يستخدم Obsidian نفس نظام حل الوصلة الذي يتم استخدامه في `[[رابط رجعي]]` عادي داخل القبو.
	- إذا كان امتداد الملف هو `md`، فيمكن حذف الامتداد.
- `path` مسار نظام ملفات مطلق لملف.
	- باستخدام هذه المعلمة، سيتم تجاهل المعلمتين `vault` و `file`.
	- سيتم إجراء بحث عن القبو الأكثر تحديدًا التي تحتوي على مسار الملف المحدد.
	- ثم يتم استبدال باقي المسار بمعلمة `file`.

أمثلة:

- `obsidian://open?vault=my%20vault`
  يفتح مجلد `my vault`. إذا كان القبو مفتوحاً بالفعل، فسيتم التركيز على النافذة.
- `obsidian://open?vault=ef6ca3e3b524d22f`
  يفتح القبو المعرف بالمعرف `ef6ca3e3b524d22f`.
- `obsidian://open?vault=my%20vault&file=my%20note`
  يفتح الملاحظة `my note` في القبو `my vault`، بشرط أن تكون الملاحظة موجودة ويكون ملفها `my note.md`.
- `obsidian://open?vault=my%20vault&file=my%20note.md`
  يفتح أيضاً الملاحظة `my note` في القبو `my vault`.
- `obsidian://open?vault=my%20vault&file=path%2Fto%2Fmy%20note`
   يفتح الملاحظة الموجودة في المسار `path/to/my note` في القبو `my vault`.
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  يبحث عن أي قبو يحتوي على المسار `/home/user/my vault/path/to/my note`. ثم يتم تمرير بقية المسار إلى معلمة `file`. على سبيل المثال، إذا كان القبو موجودًا في `/home/user/my vault`، فسيتم التعيين النهائي لمعلمة `file` إلى `path/to/my note`.
- `obsidian://open?path=D%3A%5CDocuments%5CMy%20vault%5CMy%20note`
  يبحث عن أي قبو يحتوي على المسار `D:\Documents\My vault\My note`. ثم يتم تمرير بقية المسار إلى معلمة `file`. على سبيل المثال، إذا كان القبو موجودًا في `D:\Documents\My vault`، فسيتم التعيين النهائي لمعلمة `file` إلى `My note`.

#### العملية `search`

الوصف: تفتح نافذة البحث في القبو الذي تحدده وإذا رغبت يمكن تحديد تعبير البحث الخاص بك.

المعلمات الممكنة:

- `vault` يمكن أن يكون اسم القبو أو معرف القبو. كما هو الحال في العملية `open`.
- `query` (اختياري) تعبير البحث الذي ترغب في تنفيذه.

أمثلة:

- `obsidian://search?vault=my%20vault`
  تفتح القبو `my vault` وتفتح نافذة البحث.
- `obsidian://search?vault=my%20vault&query=MOC`
  تفتح القبو `my vault` وتفتح نافذة البحث وتنفذ بحثًا عن `MOC`.

#### الإجراء `new`

الوصف: ينشئ ملاحظة جديدة في القبو، بخيار إضافة بعض المحتوى.

المعلمات الممكنة:

- `vault` يمكن أن يكون اسم القبو أو معرف القبو. كما هو الحال في الإجراء `open`.
- `name` اسم الملف الذي سيتم إنشاؤه. إذا تم تحديده، سيتم اختيار موقع الملف بناءً على تفضيلات الموقع الافتراضي للملاحظات الجديدة" الخاصة بك.
- `file` مسار كامل مطلق للقبو، بما في ذلك الاسم. سيتم تجاهل الاسم إذا تم تحديد هذا الخيار.
- `path` مسار مطلق عالمي. يعمل بشكل مشابه لخيار `path` في الإجراء `open`، والذي سيستبدل كل من `vault` و `file`.
- `content` (اختياري) محتويات الملحوظة.
- `silent` (اختياري) استخدم هذا الخيار إذا لم ترغب في فتح الملاحظة الجديدة.
- `append` (اختياري) الإضافة إلى ملف موجود إذا كان موجودًا.
- `overwrite` (اختياري) استبدال ملف موجود إذا كان موجودًا، ولكن فقط إذا لم يتم تحديد `append`.
- `x-success` (اختياري) انظر [[#x-callback-url]].

أمثلة:

- `obsidian://new?vault=my%20vault&name=my%20note`
  هذا يفتح القبو `my vault`، وينشئ ملاحظة جديدة تسمى `my note`.
- `obsidian://new?vault=my%20vault&path=path%2Fto%2Fmy%20note`
  هذا يفتح القبو `my vault`، وينشئ ملاحظة جديدة في `path/to/my note`.

#### العملية `hook-get-address`

الوصف: يستخدم هذا الأمر كنقطة نهاية للاستخدام مع [Hook](https://hookproductivity.com/). استخدم: `obsidian://hook-get-address`

إذا تم تعريف `x-success`، سيستخدم هذا API باعتباره x-callback-url. في حالة عدم تعريفه، سيتم نسخ رابط ماركداون للملاحظة الحالية المركزة إلى الحافظة باعتباره رابط `obsidian://open` URL.

المعلمات الممكنة:

- `vault` (اختياري) يمكن أن يكون اسم القبو أو معرف القبو. إذا لم يتم توفيره، سيتم استخدام القبو الحالي أو آخر قبو تم التركيز عليه.
- `x-success` (اختياري) انظر [[#x-callback-url]].
- `x-error` (اختياري) انظر [[#x-callback-url]].

## X-callback-url

متوفر منذ الإصدار v0.14.3.

بعض نقاط النهاية ستقبل معاملات x-callback-url `x-success` و `x-error`. عندما يتم تقديمها، ستقدم Obsidian ما يلي إلى رد الاستدعاء `x-success`:

- `name` اسم الملف، بدون امتداد الملف.
- `url` لرابط URI <code dir="ltr">obsidian://</code> لهذا الملف.
- `file` (في سطح المكتب فقط) URL <code dir="ltr">file://</code> لهذا الملف.

على سبيل المثال، إذا تلقينا
`obsidian://.....x-success=myapp://x-callback-url`
فإن الاستجابة يمكن أن تكون
`myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`

## تنسيقات الاختصار

بالإضافة إلى التنسيقات المذكورة أعلاه، هناك نوعان من "تنسيقات الاختصار" المتاحة لفتح المجلدات والملفات:

- `obsidian://vault/my vault/my note` مكافئ لـ `obsidian://open?vault=my%20vault&file=my%20note`
- `obsidian:///absolute/path/to/my note` مكافئ لـ `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`
