---
permalink: plugins/format-converter
publish: true
mobile: true
description: ממיר פורמט הוא תוסף ליבה שמאפשר להמיר Markdown מיישומים אחרים לפורמט של Obsidian.
---
ממיר פורמטים מעביר [[מאפיינים#מאפיינים שהוצאו משימוש|פורמטים של מאפיינים שהוצאו משימוש]] לפורמט הנוכחי שבו משתמש Obsidian.

> [!warning] גבה את הכספת שלך
> ההמרה חלה על הכספת כולה. [[גיבוי קבצי Obsidian|גבה את קבצי Obsidian שלך]] לפני שתתחיל.

כדי להמיר את המאפיינים בהערות שלך:

1. פתח את [[לוח פקודות|לוח הפקודות]].
2. בחר **Format converter: Frontmatter migration**.
3. בחר **התחל המרה**.

## פורמטים נתמכים של מאפיינים

הממיר מעדכן כינויים, תגיות ומחלקות CSS מפורמטים שהוצאו משימוש:

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
