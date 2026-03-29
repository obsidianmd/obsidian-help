---
permalink: plugins/format-converter
publish: true
mobile: true
description: ממיר פורמט הוא תוסף ליבה שמאפשר להמיר Markdown מיישומים אחרים לפורמט של Obsidian.
---
[[יבואן פורמט Markdown]] הוא [[תוספי ליבה|תוסף ליבה]] שמאפשר לך להמיר Markdown מאפליקציות אחרות לפורמט Obsidian. הוא גם מאפשר לך להמיר [[מאפיינים]] מסוימים לפורמטים נדרשים חדשים.

> [!warning] אזהרה
> יבואן פורמט Markdown ממיר את הכספת כולה בהתאם להגדרות שלך. [[גיבוי קבצי Obsidian|גבה את קבצי Obsidian שלך]] לפני שתבצע את ההמרה.

כדי להמיר את כל ההערות בכספת שלך:

1. ב[[לוח פקודות]], בחר **פתח את יבואן Markdown**. אפשרות זו נמצאת גם ב[[סרגל כלים]] עם הסמל **פתח את יבואן Markdown** ![[lucide-binary.svg#icon]].
2. הפעל את הפורמטים שברצונך להמיר.
3. לחץ על **התחל המרה**.

למידע נוסף, עיין ב[[תחביר עיצוב בסיסי]].

## פורמטים נתמכים

### Roam Research

יבואן פורמט Markdown יכול להמיר את התחביר הבא של Roam Research:

- **תגיות**: ממיר `#tag` ו-`#[[tag]]` ל-`[[tag]]`
- **הדגשה**: ממיר `^^highlight^^` ל-`==highlight==`
- **פריטי TODO**: ממיר `{{[[TODO]]}}` ל-`[ ]`

### Bear

יבואן פורמט Markdown יכול להמיר את התחביר הבא של Bear:

- **הדגשה**: ממיר `::highlight::` ל-`==highlight==`

### Zettelkasten

יבואן פורמט Markdown יכול להמיר את התחביר הבא של Zettelkasten:

- **קישורים מלאים**: ממיר `[[UID]]` ל-`[[UID File Name]]`
- **קישורים יפים**: ממיר `[[UID]]` ל-`[[UID File Name|File Name]]`

### [[מאפיינים]]

החל מ-Obsidian `1.9.3`, יבואן פורמט Markdown יכול להמיר פורמטים של [[מאפיינים#מאפיינים שהוצאו משימוש|מאפיינים שהוצאו משימוש]] לפורמט הנוכחי:

**כינויים**

```yaml
# לפני

alias: My Note Title

# אחרי

aliases:
  - My Note Title
```

**תגיות**

```yaml
# לפני

tag: project, important

# אחרי

tags:
  - project
  - important
```

**מחלקות CSS**

```yaml
# לפני

cssclass: custom-style

# אחרי

cssclasses:
  - custom-style
```
