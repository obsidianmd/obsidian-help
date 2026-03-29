---
permalink: snippets
publish: true
mobile: true
description: למדו כיצד לשנות חלקים ממראה אפליקציית Obsidian מבלי ליצור ערכת נושא מלאה.
---
למד כיצד לשנות היבטים במראה החיצוני של אפליקציית Obsidian מבלי להזדקק ל[בנות ערכת נושא](https://docs.obsidian.md/Themes/App+themes/Build+a+theme).

> [!tip] אם אתה מחפש הנחיות לטיפול ב-CSS עבור [[מבוא ל-Obsidian Publish|Obsidian Publish]], הקפד לעיין ב-[[התאמה אישית של האתר]].

CSS היא שפה ששולטת על המראה של HTML. על ידי הוספת קטעי CSS, תוכל לשנות חלקים מממשק המשתמש של Obsidian, כמו הגודל והצבע של כותרות. ל-Obsidian יש [משתני CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) שעוזרים לך להתאים אישית את הממשק בקלות.

Obsidian מחפש קטעי CSS בתוך [[תיקיית תצורה|תיקיית התצורה]] של הכספת.

## הוספת קטע

כדי להוסיף קטע CSS ב**שולחן עבודה** ![[lucide-monitor-check.svg#icon]], בצע את הצעדים הבאים:

1. פתח את **[[הגדרות]]** ![[lucide-settings.svg#icon]].
2. תחת **מראה חיצוני → קטעי CSS**, בחר **פתח את תיקיית הקטעים** ![[lucide-folder-open.svg#icon]].
3. בתיקיית הקטעים, צור קובץ CSS שמכיל את הקטע שלך.
4. ב-Obsidian, תחת **מראה חיצוני → קטעי CSS**, בחר **טען מחדש קטעים** ![[lucide-refresh-cw.svg#icon]] כדי לראות את הקטע ברשימה.
5. הפעל את הקטע על ידי לחיצה על המתג.

כדי להוסיף קטע CSS ב**נייד/טאבלט** ![[obsidian-icon-smartphone.svg#icon]], תוכל לבצע את הצעדים הבאים:

1. פתח מנהל קבצים ומצא את הכספת שלך. תוכל לבדוק את מיקום הכספת ב-_נהל כספות…_ על ידי הקשה על הכספת שלך והתבוננות בנתיב.
2. פתח את [[תיקיית תצורה|תיקיית התצורה]] וצור תיקייה בשם `snippets` אם היא לא קיימת.
3. הוסף את קטע ה-CSS שלך לתיקייה זו.
4. פתח את **[[הגדרות]]** ![[lucide-settings.svg#icon]] של Obsidian.
5. בחר **מראה חיצוני** בצד.
6. גלול למטה לקטע **קטעי CSS**.
7. הקש על **טען מחדש קטעים** ![[lucide-refresh-cw.svg#icon]] כדי לרענן את הרשימה.
8. הקש על המתג כדי להפעיל את הקטע.

לחלופין, תוכל
- [[סנכרון ההערות שלך בין מכשירים|לסנכרן]] כל שינוי עם שירות הסנכרון שלך.
- להשתמש בתוסף קהילתי כדי ליצור קטע מתוך Obsidian.

לאחר ההפעלה, Obsidian יזהה אוטומטית שינויים בקטעי CSS ויחיל אותם כשתשמור את הקובץ.

> [!tip] אינך צריך להפעיל מחדש את Obsidian כדי שהשינויים ייכנסו לתוקף. עם זאת, ייתכן שתצטרך להשתמש בפקודת [[לוח פקודות|לוח הפקודות]] לטעון מחדש את Obsidian מבלי לשמור כדי לראות שינויים בערכת הנושא או בהערה הנוכחית.

## כתיבת CSS עבור Obsidian

Obsidian מציע מספר שיטות שהופכות את כתיבת CSS לקלה ועוצמתית יותר.

יש לו מגוון [משתני CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) לשינוי קל של חלקים ב-Obsidian ו[[מאפיינים#סוגי מאפיינים|סוג מאפיין]] מובנה לשינוי המראה של הערה אחת או מספר הערות.

> [!example] משתנים
> צור קובץ בשם `headers.css` עם התוכן הבא כדי לשנות את הצבעים של שש [[תחביר עיצוב בסיסי#כותרות|רמות הכותרות]] לקשת:
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

> [!example] מחלקות CSS
> הקצה את השם של מחלקת CSS מותאמת אישית (או רשימת מחלקות CSS) ל[[מאפיינים|מאפיין]] מוגדר מראש `cssclasses` כדי לגרום להערה אחת או יותר להיראות שונה מאחרות.
> 
> **CSS**:
> ```css
> .red-border img {
>    border-color: #ff0000;
>    border-style: solid;
> }
> ```
> 
> **YAML/מאפיינים**:
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> בכל הערה שמכילה את הערך `red-border` במאפיין `cssclasses`, תמונות מוצגות עם מסגרת אדומה.

כדי לוודא שקובץ ה-CSS תקף ומעוצב כראוי, אנו ממליצים לאמת אותו עם כלי כמו [CSS Validation Service](https://jigsaw.w3.org/css-validator/), מכיוון ש-CSS לא תקין לא יעבוד.

## למד עוד

- אם אתה חדש ב-CSS, בדוק את [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) מאת Mozilla.
- למידע נוסף על עיצוב Obsidian, ראה:
  - [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Build a Publish theme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Obsidian CSS Inspector workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
