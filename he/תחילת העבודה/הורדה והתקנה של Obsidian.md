---
permalink: install
---
Obsidian זמין עבור כל מערכות ההפעלה העיקריות למחשב שולחני ולמכשירים ניידים. להלן כל הדרכים הנתמכות להורדה והתקנה של Obsidian.

## התקנת Obsidian ב-Windows

1. פתחו את הדפדפן ועברו ל-[הורדת Obsidian](https://obsidian.md/download).
2. תחת **Windows**, לחצו על **Universal** כדי להוריד את קובץ ההתקנה.
3. פתחו את קובץ ההתקנה ועקבו אחר ההוראות.
4. פתחו את Obsidian כפי שהייתם פותחים כל אפליקציה אחרת.

## התקנת Obsidian ב-macOS

1. פתחו את הדפדפן ועברו ל-[הורדת Obsidian](https://obsidian.md/download).
2. תחת **macOS**, לחצו על **Universal** כדי להוריד את קובץ ההתקנה.
3. פתחו את קובץ ההתקנה.
4. בחלון שנפתח, גררו את Obsidian לתיקיית היישומים (Applications).
5. פתחו את Obsidian כפי שהייתם פותחים כל אפליקציה אחרת.

## התקנת Obsidian ב-Linux

אם אתם משתמשים ב-Linux, תוכלו להתקין את Obsidian במספר דרכים. עקבו אחר ההוראות עבור מערכת החבילות שבה אתם משתמשים.

### התקנת Obsidian באמצעות Snap

1. פתחו את הדפדפן ועברו ל-[הורדת Obsidian](https://obsidian.md/download).
2. תחת **Linux**, לחצו על **Snap** כדי להוריד את קובץ ההתקנה.
3. פתחו טרמינל ונווטו לתיקייה שבה הורדתם את קובץ ההתקנה.
4. בטרמינל, הריצו את הפקודה הבאה כדי להתקין את חבילת ה-Snap: (הדגל `--dangerous` נדרש כיוון ש-Canonical, החברה שיצרה את Snap, לא בדקה את החבילה שלנו, הדגל `--classic` מאפשר ל-Obsidian לגשת מחוץ לסביבה המבודדת, שם ההערות שלכם מאוחסנות)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. פתחו את Obsidian כפי שהייתם פותחים כל אפליקציה אחרת.

### התקנת Obsidian באמצעות AppImage

1. פתחו את הדפדפן ועברו ל-[הורדת Obsidian](https://obsidian.md/download).
2. תחת **Linux**, לחצו על **AppImage** כדי להוריד את קובץ ההתקנה.
3. פתחו טרמינל ונווטו לתיקייה שבה הורדתם את קובץ ההתקנה.
4. בטרמינל, הריצו את הפקודה הבאה כדי לפתוח את Obsidian:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
הערה: ב-Chromebooks, יש להתקין את החבילה `libnss3-dev` אחרת ייתכן שתקבלו את השגיאה `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`.

### התקנת Obsidian באמצעות Flatpak

1. בטרמינל שלכם, הריצו את הפקודה הבאה כדי להתקין את Obsidian:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. פתחו את Obsidian על ידי הרצת הפקודה הבאה:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## התקנת Obsidian ב-Android

1. מצאו את Obsidian ב-[Play Store](https://play.google.com/store/apps/details?id=md.obsidian).
2. הקישו על **Install** כדי להוריד את האפליקציה.
3. פתחו את Obsidian כפי שהייתם פותחים כל אפליקציה אחרת.

ניתן גם להוריד את קובץ ה-APK עבור Android מדף [הורדת Obsidian](https://obsidian.md/download).

## התקנת Obsidian ב-iPhone וב-iPad

1. מצאו את Obsidian ב-[App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. הקישו על **Get** כדי להוריד את האפליקציה.
3. פתחו את Obsidian כפי שהייתם פותחים כל אפליקציה אחרת.
