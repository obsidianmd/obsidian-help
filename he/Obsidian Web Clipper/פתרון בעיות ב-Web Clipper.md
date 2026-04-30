---
permalink: web-clipper/troubleshoot
---
אם אתם נתקלים בבעיות עם [[מבוא ל-Obsidian Web Clipper|Web Clipper]] אתם יכולים לקבל עזרה דרך [ערוץ ה-Discord הרשמי](https://discord.com/channels/686053708261228577/1285652864089198672). אתם יכולים גם לדווח על באגים ב-[מאגר GitHub](https://github.com/obsidianmd/obsidian-clipper).

## כללי

### חלק מהתוכן חסר

כברירת מחדל, Web Clipper מנסה ללכוד תוכן מהדף בצורה חכמה. עם זאת, ייתכן שהוא לא יצליח לעשות זאת בכל האתרים.

Web Clipper משתמש ב-[Defuddle](https://github.com/kepano/defuddle) כדי ללכוד רק את התוכן העיקרי של הדף. זה לא כולל כותרת עליונה, כותרת תחתונה ואלמנטים אחרים, אך לפעמים הוא יכול להיות שמרני מדי ולהסיר תוכן שאתם רוצים לשמור. אתם יכולים [לדווח על באגים](https://github.com/kepano/defuddle) ל-Defuddle.

כדי לעקוף את Defuddle ב-Web Clipper השתמשו בשיטות הבאות:

- בחרו טקסט, או השתמשו ב-`Cmd/Ctrl+A` כדי לבחור את כל הטקסט.
- [[הדגשת דפי אינטרנט|הדגישו תוכן]] כדי לבחור בדיוק מה אתם רוצים ללכוד.
- השתמשו ב-[[Obsidian Web Clipper/תבניות|תבנית מותאמת אישית]] עבור האתר.

### לא מופיע תוכן ב-Obsidian

אם אינכם רואים תוכן ב-Obsidian כשאתם לוחצים על **הוסף ל-Obsidian**:

- בדקו אם יש שגיאות ב[[עזרה ותמיכה#לכידת יומני קונסול|קונסולת המפתחים]] של Obsidian.
- ודאו ששם הכספת בהגדרות Web Clipper תואם בדיוק ל*שם הכספת* שלכם ב-Obsidian *ולא לנתיב הכספת*.
- ודאו ששם התיקייה מעוצב בצורה נכונה.

## Linux

#### Obsidian לא נפתח

- ודאו שפרוטוקול [[Obsidian URI]] [[Obsidian URI#Register Obsidian URI|רשום]].
- אם אתם משתמשים ב-Firefox ייתכן שתצטרכו [לרשום אותו בהגדרות הדפדפן](https://kb.mozillazine.org/Register_protocol).

#### Obsidian נפתח אבל רק שם הקובץ נשמר

סביר להניח ש-Obsidian לא יכול לגשת ללוח שלכם. גישה ללוח נחוצה להעברת נתונים מהדפדפן שלכם ל-Obsidian. התצורה שלכם יכולה להשפיע על אופן ה-sandboxing של אפליקציות, והרשאות הלוח.

אם אתם משתמשים ב-Wayland, ודאו ש-Obsidian יש לו הרשאות לקרוא את הלוח כשהאפליקציה לא בפוקוס. העדפה זו עשויה להיות במנהל החלונות שלכם, למשל Hyprland או Sway.

אם אתם משתמשים ב-Hyprland:

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

אם אתם משתמשים ב-Sway:

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- אם אתם משתמשים ב-Flatpak שקלו לנסות [גרסת Obsidian נתמכת רשמית](https://obsidian.md/download).
- אם אתם משתמשים ב-KDE עברו אל **System Settings** → **Window Management** → **Window Rules** ואפשרו ל-Obsidian לקבל פוקוס, [[web-clipper-kde.png|ראו צילום מסך]].
- כפתרון חלופי, נסו לעבור ל-**מצב מורשת** ב-**הגדרות Web Clipper** → **כללי**. זה יעקוף את הלוח וישמור תוכן ישירות דרך URI. שימו לב שזה יגביל את מספר התווים שניתן לגזור בהתאם לדפדפן ולהפצת ה-Linux שלכם.

## iOS ו-iPadOS

כדי לאפשר את תוסף Web Clipper עבור Safari:

1. עברו ל-Safari, הקישו על הכפתור השמאלי ביותר בשורת ה-URL של הדפדפן, הוא נראה כמו מלבן עם קווים מתחתיו.
2. הקישו על **Manage Extensions**.
3. אפשרו את **Obsidian Web Clipper** ברשימת ההרחבות.
4. צאו מהתפריט.
5. כדי להשתמש בתוסף **הקישו על סמל חתיכת הפאזל** בשורת ה-URL.

כדי לאפשר ל-Web Clipper לרוץ בכל האתרים:

1. עברו ל-**[[הגדרות]]** של iOS → **Apps** → **Safari** → **Extensions**.
2. תחת **Permissions** אפשרו לו לרוץ בכל האתרים.

כדי לאפשר ל-Obsidian לקבל תמיד תוכן מ-Web Clipper:

1. עברו ל-**[[הגדרות]]** של iOS → **Apps** → **Obsidian**.
2. הגדירו **Paste from other apps** ל-**Allow**.
