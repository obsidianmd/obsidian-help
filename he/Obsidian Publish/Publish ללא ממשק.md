---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish מציע לקוח ללא ממשק גרפי לפרסום כספות ללא שימוש באפליקציית שולחן העבודה. שימושי לצינורות CI ותהליכי עבודה אוטומטיים.
---
[[מבוא ל-Obsidian Publish|Obsidian Publish]] מציע לקוח ללא ממשק לפרסום כספות ללא שימוש באפליקציית שולחן העבודה. שימושי לצינורות CI וזרימות עבודה אוטומטיות. פרסמו את השינויים האחרונים שלכם על פי לוח זמנים או כחלק מצינור בנייה.

התקינו את [[Publish ללא ממשק|Obsidian Headless]] **(בטא פתוחה)** כדי לעבוד עם [[מבוא ל-Obsidian Publish|Obsidian Publish]] משורת הפקודה ללא אפליקציית Obsidian לשולחן העבודה.

## התחלה מהירה

התקינו את [[Publish ללא ממשק|Obsidian Headless]] **(בטא פתוחה)**:

```shell
npm install -g obsidian-headless
```

נדרש מנוי פעיל ל-[[מבוא ל-Obsidian Publish|Obsidian Publish]].

```shell
# התחברות
ob login

# הצגת אתרי Publish שלכם
ob publish-list-sites

# חיבור כספת מקומית לאתר Publish
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# תצוגה מקדימה של שינויים ללא פרסום
ob publish --dry-run

# פרסום שינויים
ob publish
```

## פקודות

### `ob publish-list-sites`

הצגת כל אתרי Publish הזמינים לחשבון שלכם.

### `ob publish-create-site`

יצירת אתר Publish חדש.

```
ob publish-create-site --slug <slug>
```

| אפשרות | תיאור |
| --- | --- |
| `--slug` | מזהה URL לאתר שלכם (לדוגמה: `my-notes` יוצר `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

חיבור כספת מקומית לאתר Publish.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| אפשרות | תיאור |
| --- | --- |
| `--site` | מזהה אתר או slug |
| `--path` | נתיב כספת מקומית (ברירת מחדל: התיקייה הנוכחית) |

### `ob publish`

פרסום שינויים בכספת לאתר שלכם. כברירת מחדל, רק קבצים עם `publish: true` במטא-נתונים בתחילת הקובץ נכללים.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| אפשרות | תיאור |
| --- | --- |
| `--path` | נתיב כספת מקומית (ברירת מחדל: התיקייה הנוכחית) |
| `--all` | כלול את כל הקבצים, לא רק אלה עם דגל publish |
| `--dry-run` | הצג שינויים ללא פרסום |
| `--yes` | פרסם ללא בקשת אישור |

### `ob publish-config`

הצגה או שינוי הגדרות כלילה/הדרה של תיקיות עבור כספת. הפעלה ללא אפשרויות תציג את התצורה הנוכחית.

```
ob publish-config [--path <local-path>] [options]
```

| אפשרות | תיאור |
| --- | --- |
| `--path` | נתיב כספת מקומית (ברירת מחדל: התיקייה הנוכחית) |
| `--includes` | תיקיות לכלילה, מופרדות בפסיקים (מחרוזת ריקה לניקוי) |
| `--excludes` | תיקיות להדרה, מופרדות בפסיקים (מחרוזת ריקה לניקוי) |

### `ob publish-site-options`

הצגה או עדכון הגדרות תצוגה וניווט כלליות לאתר. הפעלה ללא אפשרויות תציג את ההגדרות הנוכחיות.

```
ob publish-site-options [--path <local-path>] [options]
```

| אפשרות | תיאור |
| --- | --- |
| `--path` | נתיב כספת מקומית (ברירת מחדל: התיקייה הנוכחית) |
| `--site-name` | שם אתר |
| `--index-file` | נתיב קובץ דף הבית |
| `--logo` | נתיב קובץ סמל (מחרוזת ריקה לניקוי) |
| `--show-navigation` | הראה ניווט בסרגל צד |
| `--show-graph` | הצג תצוגת גרף |
| `--show-outline` | הצג את תוכן העניינים |
| `--show-search` | הצג חיפוש |
| `--show-backlinks` | הצג קישורים נכנסים |
| `--show-hover-preview` | הצג תצוגה מקדימה של ריחוף |
| `--show-theme-toggle` | הצג מתג ערכת נושא |
| `--default-theme` | ערכת נושא ברירת מחדל: `light` או `dark` |
| `--readable-line-length` | אורך שורה קריא |
| `--strict-line-breaks` | מעברי שורות קפדניים |
| `--hide-title` | הסתר כותרת בשורה |
| `--sliding-window` | מצב חלון מחליק |
| `--nav-order` | סדר ניווט, נתיבים מופרדים בפסיקים (מחרוזת ריקה לניקוי) |
| `--nav-hidden` | פריטי ניווט מוסתרים, נתיבים מופרדים בפסיקים (מחרוזת ריקה לניקוי) |

### `ob publish-unlink`

ניתוק כספת מאתר Publish.

```
ob publish-unlink [--path <local-path>]
```
