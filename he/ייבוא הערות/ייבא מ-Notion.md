---
permalink: import/notion
---
Obsidian מאפשר לך להעביר בקלות את ההערות שלך מ-Notion באמצעות [[ייבוא|תוסף הייבוא]]. פעולה זו תמיר את נתוני ה-Notion שלך לקבצי Markdown עמידים שתוכל להשתמש בהם ללא חיבור לאינטרנט עם Obsidian ואפליקציות רבות אחרות.

Obsidian מציע שתי דרכים לייבא את נתוני ה-Notion שלך:

1. **ייבוא באמצעות API** שומר על כל מרחב העבודה שלך כולל Databases ונוסחאות שמומרים ל-[[מבוא ל-Bases|Bases]], אך דורש טוקן אינטגרציה של Notion וחיבור לאינטרנט.
2. **ייבוא קבצים** אינו שומר על Databases אך אינו דורש טוקן API או חיבור לאינטרנט.

## ייבוא באמצעות API

### יצירת טוקן גישה ל-API של Notion

כדי לגשת לנתוני ה-Notion שלך דרך ה-API אתה צריך טוקן גישה. שלב זה לוקח כשתי דקות להשלמה.

הטוקן הוא מחרוזת ארוכה של מספרים ואותיות שמתחילה בדרך כלל ב-`ntn_...` שתאפשר לך להוריד את הנתונים שלך מ-Notion.

1. התחבר ללוח הבקרה של [Notion Connections](https://app.notion.com/developers/connections).
2. בחר **New connection**.
	1. תן לחיבור שלך שם, לדוגמה "Personal". ניתן להשתמש בכל שם.
	2. בחר **Access token** כשיטת האימות.
	3. בחר את מרחב העבודה שברצונך לייצא כ-**Installable in**.

![[notion-integration.png#interface]]

3. לחץ על **Create connection**.
4. בלשונית **Configuration** טוקן ה-API נגיש בשדה **Access token**.
5. בחר **Show** ואז **Copy**.
6. שמור את הטוקן במקום בטוח כמו מנהל הסיסמאות שלך.

![[notion-token.png#interface]]

לאחר מכן, תן לחיבור שלך גישה לדפים ול-databases של Notion שברצונך לייבא.

1. עבור ללשונית **Content access** של החיבור שיצרת זה עתה.
2. הוסף את הדפים וה-databases שברצונך לייבא.

![[notion-content.png#interface]]

כעת תוכל להמיר את הנתונים שלך באמצעות Obsidian Importer.

### ייבוא נתוני ה-Notion שלך דרך API

תצטרך את תוסף ה-[[ייבוא|Importer]] הרשמי של Obsidian, אותו תוכל [להתקין כאן](obsidian://show-plugin?id=obsidian-importer).

1. פתח את **[[הגדרות]]**.
2. עבור אל **תוספים קהילתיים** ו[התקן את Importer](obsidian://show-plugin?id=obsidian-importer).
3. הפעל את תוסף ה-Importer.
4. פתח את תוסף ה-**Importer** באמצעות לוח הפקודות או סמל סרגל הכלים.
5. תחת **File format** בחר **Notion (API)**
6. תחת **API token**, לחץ על **Link...** כדי להוסיף סוד חדש. עבור **ID**, תן לו שם כמו `notion`, ועבור **Secret** הדבק את ה-**Access token** מ-Notion.
7. לחץ על **Load** כדי לבחור את ה-databases והדפים שברצונך לייבא.
8. סקור וערוך את אפשרויות הייבוא.
9. בחר **Import** והמתן עד שהייבוא יושלם.
10. סיימת!

### מגבלות

> [!info] ייבוא API הוא חדש
> מייבא ה-API של Notion הוא חדש. בשל המורכבות של מרחבי עבודה ב-Notion, ייתכן שלא נלקחו בחשבון כל מקרי הקצה. אם אתה נתקל בבעיות בהמרה, [שלח דוח באג](https://github.com/obsidianmd/obsidian-importer/issues) כדי שנוכל לשפר אותו.

בשל מגבלות קצב ה-API של Notion, ייבוא מרחבי עבודה גדולים עשוי לקחת זמן רב. אנא התאזר בסבלנות.

בשל מגבלות ב-API של Notion, חלק מהנתונים אינם זמינים או אינם ניתנים להמרה:

- רק התצוגה הראשית של כל database מיובאת.
- [Linked data sources](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases) אינם מיובאים: *"ה-API של Notion אינו תומך כרגע ב-linked data sources. כשאתה משתף database עם האינטגרציה שלך, ודא שהוא מכיל את מקור הנתונים המקורי!"*
- פונקציות `People`: `name()` ו-`email()`
- פונקציות `Text`: `style()` ו-`unstyle()`

בנוסף, ה-Importer יבצע את השינויים הבאים:

- דפים ללא דפי ילד או databases ייובאו כ-`[filename].md` במקום `[filename]/[filename].md`.
- Databases מיוצגים תמיד כתיקיות בשם `[database name]` עם קובץ `[database name].base` בתוכן.

## ייבוא קבצים

ייבוא קבצים הוא דרך חלופית לייבא את נתוני ה-Notion שלך. שיטה זו אינה שומרת על Databases אך אינה דורשת טוקן API או חיבור לאינטרנט.

### ייצוא הנתונים שלך מ-Notion

כדי להכין את הנתונים שלך לייבוא, תצטרך לייצא את כל מרחב העבודה שלך באמצעות פורמט הייצוא HTML של Notion. אנו ממליצים שלא להשתמש בייצוא Markdown של Notion מכיוון שהוא משמיט נתונים חשובים. עליך להיות בעל גישת מנהל למרחב העבודה של Notion כדי לייצא את כל תוכן מרחב העבודה.

1. עבור אל **Settings** בראש סרגל הצד של Notion.
2. תחת **Workspace** בחר **General**.
3. מצא ובחר **Export all workspace content**.
4. תחת **Export format** בחר **HTML**.
5. בחר **Include everything**.
6. הפעל **Create folders for subpages**.
7. תקבל קובץ `.zip` בדוא״ל או ישירות בדפדפן.

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### ייבוא קובץ ה-.zip של Notion

תצטרך את תוסף ה-[[ייבוא|Importer]] הרשמי של Obsidian, אותו תוכל [להתקין כאן](obsidian://show-plugin?id=obsidian-importer).

1. פתח את **[[הגדרות]]**.
2. עבור אל **תוספים קהילתיים** ו[התקן את Importer](obsidian://show-plugin?id=obsidian-importer).
3. הפעל את תוסף ה-Importer.
4. פתח את תוסף ה-**Importer** באמצעות לוח הפקודות או סמל סרגל הכלים.
5. תחת **File format** בחר **Notion (.zip)**
6. בחר את קובץ ה-`.zip` עם קבצי Notion שברצונך לייבא. *מומלץ לייבא את כל ה-Notion שלך בבת אחת כדי שקישורים פנימיים יוכלו להיות מותאמים בצורה נכונה.*
7. _לחלופין_, בחר תיקייה לייבוא. דפי ה-Notion וה-databases שלך יהיו מקוננים בתוך תיקייה זו.
8. הפעל **Save parent pages in subfolders** כדי לשמור על מבנה ה-Notion. *שים לב שב-Notion ניתן לכתוב תוכן בתיקיות, דבר שאינו אפשרי ב-Obsidian ודפים אלו יתווספו כתת-דף מתחת לתיקייה.*
9. בחר **Import** והמתן עד שהייבוא יושלם.
10. סיימת!

### פתרון בעיות

אם אתה נתקל בבעיות בעת ייבוא מ-Notion:

- ודא שאתה משתמש ב-**HTML** כפורמט הייצוא ב-Notion, **לא ב-Markdown**.
- אם Obsidian נראה כקפוא במהלך הייבוא, השבת תוספים קהילתיים ונסה שוב.

נתקלת במשהו אחר? חפש ב-[מאגר ה-Importer](https://github.com/obsidianmd/obsidian-importer/issues) כדי לראות אם אחרים חוו את אותו הדבר.

#### ייבוא מרחבי עבודה גדולים

אם אתה מייבא מרחב עבודה עם מספר ג'יגה-בייט של נתונים, הייצוא מ-Notion עשוי להכיל קבצי `.zip` מקוננים. במקרה זה ייתכן שתראה הודעת שגיאת ייבוא שנראית כך:

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

אם אתה רואה שגיאה זו, תוכל לחלץ את הקובץ מ-Notion, ואז לייבא את קבצי `Export-{id}-Part-1.zip` המקוננים.
