---
permalink: import/apple-journal
cssclasses:
  - soft-embed
---
Obsidian מאפשר לך לייבא בקלות את רשומות היומן שלך מ-Apple Journal באמצעות [[ייבוא|תוסף הייבוא]]. פעולה זו תמיר את היומנים שלך לקבצי Markdown עמידים שתוכל להשתמש בהם עם Obsidian ועם אפליקציות רבות אחרות.

## ייצוא הנתונים שלך מ-Apple Journal

### ב-iPhone
עקוב אחר ההוראות עבור [הדפסה וייצוא רשומות ב-Journal ב-iPhone](https://support.apple.com/guide/iphone/print-and-export-entries-iph4cad323fe/ios#iph1edf66806):

1. עבור לאפליקציית Journal ב-iPhone שלך.
2. בחר יומן או הקש על כל הרשומות.
3. הקש על כפתור עוד בחלק העליון של המסך.
4. הקש על ייצא, ואז בחר ייצא.
5. בחר מקום, ואז הקש על הכפתור נבחר.

### ב-Mac (Tahoe)
עקוב אחר ההוראות עבור [הדפסה וייצוא רשומות ב-Journal ב-Mac](https://support.apple.com/guide/journal/print-and-export-entries-dev883fc2329/mac#devc24a8f09a):

1. עבור לאפליקציית Journal ב-Mac שלך.
2. עבור אל קובץ > ייצוא, ואז בחר ייצוא.

## ייבוא נתוני Apple Journal ל-Obsidian

תצטרך את תוסף [[ייבוא|הייבוא]] הרשמי של Obsidian, אותו תוכל [להתקין כאן](obsidian://show-plugin?id=obsidian-importer).

1. פתח את **[[הגדרות]]**.
2. עבור אל **תוספים קהילתיים** ו[התקן את הייבוא](obsidian://show-plugin?id=obsidian-importer).
3. הפעל את תוסף הייבוא.
4. פתח את תוסף **הייבוא** באמצעות לוח הפקודות או סמל סרגל הכלים.
5. תחת **פורמט קובץ**, בחר **Apple Journal (HTML Export)**.
6. ב-**קבצים לייבוא**, בחר את התיקייה עם הנתונים המיוצאים, בדרך כלל _AppleJournalEntries_, או קבצים בודדים מ-_Entries_.
7. סקור וערוך את אפשרויות הייבוא האחרות.
8. בחר **ייבא** כדי לסקור את התבנית שנוצרה ולצפות בתצוגה מקדימה של דוגמאות מהרשומות שלך.
9. בחר **ייבא** שוב והמתן עד שהייבוא יסתיים.

## תבניות

השתמש ב[[תבניות ייבוא|תבניות ייבוא]] כדי להגדיר באופן מלא כיצד נתוני Apple Journal שלך מיובאים.

![[תבניות ייבוא#Variables]]

כאשר **הוסף מטא-נתונים כמטא-נתונים בתחילת הקובץ** מופעל, מטא-נתונים של Apple Journal מומרים ל[[מאפיינים|מאפיינים]]. בהתאם לרשומה, אלה יכולים לכלול `state-of-mind`, `contact`, `location`, `motion-activity`, `third-party-media`, ו-`workout-route`.

השתמש במשתנה `properties` כדי לגשת למטא-נתונים אלה. לדוגמה, השתמש ב-`{{properties.location}}` עבור מיקום או ב-`{{properties["state-of-mind"]}}` עבור מצב רוח.
