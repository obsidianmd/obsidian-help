---
permalink: sync/troubleshoot
cssclasses:
  - soft-embed
publish: true
mobile: true
description: >-
  Diese Seite listet seltene Probleme auf, die bei Obsidian Sync auftreten
  können, und erklärt, wie sie behoben werden.
---
Diese Seite listet seltene Probleme auf, die bei [[Einführung in Obsidian Sync|Obsidian Sync]] auftreten können, und erklärt, wie sie behoben werden. Bevor Sie fortfahren, empfehlen wir, die Seiten [[Statussymbol und Meldungen]] und [[Häufig gestellte Fragen]] zu lesen.

## Allgemein

### Konfliktlösung

Ein Konflikt entsteht, wenn Sie dieselbe Datei auf zwei oder mehr Geräten ändern, bevor sie synchronisiert werden. Zum Beispiel bearbeiten Sie eine Notiz auf Ihrem Computer. Bevor diese Änderung hochgeladen wird, ändern Sie dieselbe Notiz auch auf Ihrem Telefon.

Konflikte treten häufiger auf, wenn Sie offline arbeiten. Es gibt mehr Änderungen und längere Zeiträume zwischen den Synchronisierungen, was die Wahrscheinlichkeit von Konflikten erhöht.

#### Wie Obsidian Sync Konflikte behandelt

Wenn Obsidian Sync einen Konflikt feststellt, hängt das Ergebnis vom Dateityp ab:

- **Markdown-Dateien**: Obsidian Sync mergt die Änderungen mit Googles [diff-match-patch](https://github.com/google/diff-match-patch)-Algorithmus.
- **Andere Dateitypen**: Für alle anderen Dateien, einschließlich Canvas-Dateien, verwendet Obsidian den Ansatz „Zuletzt geändert gewinnt". Die zuletzt geänderte Version ersetzt ältere Versionen.

Bei Konflikten in Obsidian-Einstellungen, wie Erweiterungseinstellungen, mergt Obsidian Sync die JSON-Dateien. Es wendet Schlüssel aus der lokalen JSON-Datei auf die Remote-JSON-Datei an.

#### Optionen zur Konfliktlösung

Ab Obsidian 1.9.7 können Sie wählen, wie Konflikte behandelt werden sollen. Um diese Einstellung zu konfigurieren:

1. Öffnen Sie die **[[Einstellungen]]**.
2. Wählen Sie in der Seitenleiste **Sync**.
3. Wählen Sie unter **[[Sync-Einstellungen und selektive Synchronisierung#Konfliktlösung|Konfliktlösung]]** Ihre bevorzugte Option:
   - **Automatisch mergen** (Standard): Obsidian Sync kombiniert alle Änderungen von verschiedenen Geräten in einer einzigen Datei. Dies speichert alle Bearbeitungen, kann aber manchmal doppelten Text oder Formatierungsprobleme verursachen. Sie müssen diese manuell korrigieren.
   - **Konfliktdatei erstellen**: Wenn Obsidian widersprüchliche Änderungen findet, erstellt es eine separate Konfliktdatei, anstatt automatisch zu mergen. Sie können dann beide Versionen überprüfen und sie selbst zusammenführen. Dies gibt Ihnen die volle Kontrolle über das Endergebnis.

> [!warning]+ Auf allen Geräten konfigurieren
> Die Einstellungen zur Konfliktlösung sind gerätespezifisch. Sie müssen Ihre bevorzugte Option auf jedem Ihrer Geräte konfigurieren. Dies stellt ein einheitliches Verhalten auf allen synchronisierten Geräten sicher.

**Namensschema für Konfliktdateien**

Wenn Sie die Option „Konfliktdatei erstellen" verwenden, erstellt Obsidian eine neue Datei mit folgendem Namensschema:

```
original-notizenname.sync-conflict-JJJJMMTT-HHMMSS.md
```

Wenn beispielsweise ein Konflikt in einer Notiz namens `Besprechungsnotizen.md` auftritt, könnte die Konfliktdatei folgenden Namen haben:

```
Besprechungsnotizen.sync-conflict-20241128-143022.md
```

Die Konfliktdatei enthält die Änderungen des Geräts, auf dem der Konflikt erkannt wurde. Die Originaldatei behält die Remote-Version. Sie können beide Dateien vergleichen und den Inhalt manuell zusammenführen.

> [!info]+ Sync-Log prüfen
> Um zu überprüfen, wann Konflikte aufgetreten sind, öffnen Sie das [[Statussymbol und Meldungen#Sync-Log|Sync-Log]]. Filtern Sie nach „Konflikte beim Zusammenführen" oder suchen Sie nach „Conflict".

### Sync hat eine Notiz gelöscht, die ich gerade auf zwei Geräten erstellt habe

Obsidian Sync versucht in der Regel, Konflikte durch [[#Konfliktlösung|Mergen widersprüchlicher Notizen]] über Geräte hinweg zu lösen. Probleme können jedoch bei Nutzern auftreten, die beim Start automatisch Notizen erstellen oder ändern. Dies betrifft [[Tägliche Notizen]] oder die Verwendung der externen Erweiterung [Templater](https://github.com/SilentVoid13/Templater).

Wenn Sie eine Notiz lokal auf einem Gerät erstellen und Sync innerhalb weniger Minuten eine Remote-Version derselben Notiz herunterlädt, behält Sync die Remote-Version bei, ohne die beiden zu mergen. In diesem Fall können Sie die lokale Version mit der [[Datenwiederherstellung]] wiederherstellen.

### Sync synchronisiert meine Erweiterungs- und Einstellungsaktualisierungen nicht

Obsidian [[Häufig gestellte Fragen#Lädt Obsidian Sync meine Einstellungen live neu?|lädt nicht alle Einstellungen live neu]]. Nachdem Sie Einstellungen oder Erweiterungen aktualisiert haben, müssen Sie Obsidian auf anderen Geräten neu starten, um die Änderungen zu sehen. Auf mobilen Geräten müssen Sie die App möglicherweise erzwungen beenden.

> [!example]- Ein Thema ändern
> - Auf Ihrem Hauptgerät (normalerweise ein Computer) wechseln Sie Ihr Thema vom benutzerdefinierten Thema zurück zum Standard.
> - Das Sync-Log bestätigt, dass die aktualisierten Dateien an den Remote-Tresor gesendet wurden, aber Ihr mobiles Gerät zeigt weiterhin das benutzerdefinierte Thema an.
> - Prüfen Sie auf dem mobilen Gerät das Sync-Log, um den Empfang der aktualisierten `appearance.json`-Datei zu bestätigen.
> - Laden Sie Obsidian auf dem mobilen Gerät neu oder starten Sie es neu.
> - Nach dem Neuladen oder Neustart sollte das mobile Gerät dasselbe Thema wie Ihr Computer anzeigen.

### Meine Dateien verschwinden ständig aus Sync, sobald ich sie wiederherstelle

Dieses Problem tritt am häufigsten unter Windows auf. Windows Defender kann Dateien mit Quelltext-Blöcken unter Quarantäne stellen, was dazu führt, dass bestimmte Notizen verschwinden.

Eine weitere häufige Ursache ist die Doppelsynchronisierung. Dies geschieht, wenn Obsidian Sync gleichzeitig mit einem anderen Synchronisierungsdienst ausgeführt wird.

![[Zu Obsidian Sync wechseln#Vault aus dem Drittanbieter-Synchronisierungsdienst oder Cloud-Speicher verschieben]]

---

Schließlich kann dies passieren, wenn Sie eine Datei auf einem Gerät wiederherstellen, die dann aber von einem sekundären Gerät entfernt wird. Dies geschieht, wenn der Dateiname [[Statussymbol und Meldungen#Übersprungene Meldungen|unzulässige Zeichen]] enthält.

## Android

**Mein Gerät löscht die Anhänge, die ich über Sync erhalte**

Dieses Problem wird wahrscheinlich durch Google oder Android Photos verursacht, die Ihre Anhänge verwalten. Um zu verhindern, dass das System über Sync empfangene Dateien ändert, fügen Sie eine `.nomedia`-[Datei zu Ihrem Vault hinzu](https://support.google.com/android/thread/60342076/what-are-these-nomedia-files?hl=en) auf Ihrem Android-Gerät.

> [!tip]- Eine Erweiterung verwenden
> Die externe Erweiterung [Android Nomedia](https://obsidian.md/plugins?id=android-nomedia) erleichtert dies. Installieren Sie sie auf Ihrem Android-Telefon. Beachten Sie, dass `.nomedia`-Dateien nicht über Obsidian Sync zwischen Geräten synchronisiert werden.
