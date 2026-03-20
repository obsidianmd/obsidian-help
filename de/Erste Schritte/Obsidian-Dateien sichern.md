---
permalink: backup
---
Wenn du deinen Computer noch nicht gesichert hast, fang jetzt damit an! Obsidians [[Datenwiederherstellung]]-Erweiterung ist nützlich, aber begrenzt. Sie kann nur eine bestimmte Menge an Daten wiederherstellen und speichert Wiederherstellungsinformationen pro Gerät. Für einen robusteren Schutz empfehlen wir dir, ein ordentliches Sicherungssystem einzurichten.

**Warum solltest du deine Daten sichern?**

Standardmäßig speichert Obsidian deine Notizen **lokal** auf deinem Gerät, nicht in der Cloud. Das bedeutet, dass die [Daten vollständig dir gehören](https://obsidian.md/about), was dir die Kontrolle darüber gibt. Lokale Speicherung kann jedoch von Problemen wie Beschädigung oder Datenverlust betroffen sein. Es ist nie eine Frage des Ob, sondern des Wann. Das Sichern deiner Daten schützt vor diesen Unvermeidlichkeiten und stellt sicher, dass du die Kontrolle über deine Notizen behältst.

## Synchronisierung ist kein Backup

Dienste wie [[Einführung in Obsidian Sync|Obsidian Sync]], iCloud, OneDrive und Dropbox helfen dir, deine Notizen zwischen verschiedenen Geräten zu synchronisieren. Obwohl sie Funktionen wie [[Versionsgeschichte|Notizen-Wiederherstellung]] bieten können, **sind sie nicht für Backups konzipiert**. Synchronisierung hält deine Notizen aktuell, schützt aber nicht vor Datenverlust.

- **Sync:** Synchronisierung stellt sicher, dass deine Dateien auf allen Geräten gleich sind. Wenn du eine Datei auf einem Gerät änderst, wird sie auf allen synchronisierten Geräten aktualisiert. Synchronisierungsdienste haben kein „primäres" Gerät.
- **Backup:** Ein Backup speichert eine Kopie deiner Daten an einem anderen Ort, um sie bei Datenverlust oder Beschädigung wiederherstellen zu können. Backups sind nicht für Echtzeit-Aktualisierungen oder Zusammenarbeit gedacht.

Um deinen Vault richtig zu sichern, verwende ein dediziertes Backup-Tool, das eine Einweg-Kopie deiner Daten erstellt. Dieses Tool sendet deine Daten an einen sicheren Backup-Speicherort, ohne die Daten auf deinem Gerät zu verändern.

Wenn du mehrere Geräte mit Synchronisierung verwendest, wähle **ein Gerät** als dein Backup-Gerät. Das ist normalerweise dein Haupt- oder „primäres" Gerät – dasjenige, das du am meisten benutzt. Beachte, dass die meisten Synchronisierungsdienste kein Gerät als „primär" erkennen; dies ist nur ein Konzept, um dir bei der Verwaltung von Backups zu helfen.

> [!Example] Du verwendest Obsidian Sync auf deinem Laptop, Tablet, Telefon und Arbeits-Desktop. Du benutzt deinen Vault hauptsächlich auf deinem Arbeits-Desktop, manchmal auf deinem Laptop und selten auf deinem Tablet oder Telefon. In diesem Fall wäre dein Arbeits-Desktop dein „primäres Gerät" für Backups.

## Community-Erweiterungen verwenden

Obwohl das Obsidian-Team keine bestimmte Erweiterung offiziell empfehlen kann, kennen wir zwei Community-Erweiterungen, die bei Benutzern für die Sicherung ihrer Dateien beliebt geworden sind:

- **[Obsidian Git](https://obsidian.md/plugins?id=obsidian-git):** Verwende diese Erweiterung, um deinen Vault zu sichern, indem du seinen Inhalt in ein [Git-Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) überträgst. Es ist eine effektive Möglichkeit, deine Notizen zu versionieren und ihre Sicherheit auf einem Remote-Server zu gewährleisten. Beachte jedoch, dass deine Daten bei dieser Methode auf einer [[#Cloud-basierte Dienste verwenden|externen Hosting-Plattform]] gespeichert werden können.
- **[Local Backup](https://obsidian.md/plugins?id=local-backup):** Diese Erweiterung ermöglicht es dir, lokale Kopien deines Vaults in einem Ordner deiner Wahl zu erstellen, mit Optionen zur Archivierung. Du kannst sogar einen Synchronisierungsordner wie einen Dropbox-Ordner verwenden, um lokale und Cloud-Backups zu kombinieren. Diese Methode **ergänzt sich gut** mit den unten beschriebenen Backup-Optionen.

## Cloud-basierte Dienste verwenden

> [!info] Es wird nicht empfohlen, den Standort deines Vaults in deinem gewählten Backup-Dienst zu belassen.

Das Backup in der Cloud aufzubewahren ist eine Alternative und Ergänzung zur physischen Datenspeicherung, anstelle einer externen Festplatte oder eines USB-Sticks. Eine externe Festplatte oder ein USB-Stick kann verloren gehen oder beschädigt werden. Der größte Vorteil der Cloud-Speicherung ist, dass die Dateien jederzeit und überall verfügbar sind. Der Nachteil ist, dass die meisten Backup-Dienste einem privaten Unternehmen gehören.

In Bezug auf Sicherheit solltest du bei Cloud-Backups immer genau auf Zugang und Sicherheit achten. [Worldbackupday](https://www.worldbackupday.com/en) führt eine aktuelle Liste von Online-Backup-Diensten, die du in Betracht ziehen kannst.

## Externe Laufwerke verwenden

**Festplatten und SSD-Laufwerke**
Externe Festplatten-Backups sind in einer zunehmend Cloud-basierten Welt immer noch wertvoll und werden hauptsächlich für Datenspeicherung und Computer-Backups verwendet. Der größte Nachteil eines externen Laufwerks ist, dass es kaputt gehen oder verloren gehen kann. Der größte Vorteil ist, dass der Speicherplatz nur einmal gekauft werden muss. Die Verwendung einer externen Festplatte wird oft mit einem [[#Computer-Backups verwenden|Computer-Backup]] kombiniert.

**USB-Flash-Laufwerke**
Flash-Laufwerke (auch USB-Sticks, Speichersticks oder Pen-Drives genannt) sind eine einfache und effektive Methode für schnelle Backups.

1. Stecke den USB-Stick in deinen Computer oder Laptop.
2. Stelle sicher, dass das Gerät erkannt und in deinem Dateisystem eingebunden ist. Falls nötig, formatiere den USB-Stick, damit er mit deinem Dateisystem kompatibel ist.
3. Kopiere deinen Vault-Ordner von seinem aktuellen Speicherort auf den USB-Stick.
4. Wirf den USB-Stick sicher aus.
5. Entferne den USB-Stick von deinem Gerät.

**NAS-Backup**
Für erfahrene Benutzer ist das Sichern von Daten auf einem NAS-Server (Network Attached Storage) eine gute und sichere Methode, da dieser über mehrere Festplatten und zusätzliche Wiederherstellungsmechanismen verfügt.

> [!tip] Wenn dein externes Laufwerk sensible Informationen enthält, wird empfohlen, das externe Laufwerk sicher aufzubewahren, beispielsweise in einem gesicherten Raum.

## Computer-Backups verwenden

Dein Betriebssystem bietet selbst die Möglichkeit, Backups zu erstellen, sei es online in der Cloud oder auf einem externen Laufwerk.

- **[Windows](https://www.microsoft.com/en-us/windows/learning-center/back-up-files)**: Backup mit OneDrive oder einem externen Laufwerk.
- **[Mac](https://support.apple.com/en-us/104984)**: Backup auf ein externes Gerät mit Time Machine.
- **[Linux](https://linuxize.com/post/how-to-use-rsync-for-local-and-remote-data-transfer-and-synchronization/)**: `rsync` in ein Verzeichnis oder Laufwerk deiner Wahl.

## Nächste Schritte

Diese Hilfe-Seite bietet einen kurzen Überblick über Backup-Optionen, ist aber nicht vollständig. Für ausführlichere Informationen besuche [Worldbackupday.com](https://www.worldbackupday.com/en) oder frage andere Obsidian-Benutzer in [unserer Community](https://obsidian.md/community) nach ihren Backup-Strategien!
