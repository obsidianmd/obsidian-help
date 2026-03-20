---
permalink: early-access
---
Erhalte frühzeitigen Zugang zu kommenden Versionen, indem du _Vorabversionen_ aktivierst. Vorabversionen sind nur für Benutzer mit einer [[Catalyst-Lizenz]] verfügbar.

> [!warning] Warnung
> Vorabversionen sind Beta-Releases. Sie enthalten neue Funktionen, können aber weniger stabil sein. Aktiviere keine Vorabversionen, wenn du eine zuverlässigere Erfahrung bevorzugst.
> 
> Beachte, dass Entwickler von externen Erweiterungen und Themen Vorabversionen zur gleichen Zeit wie alle anderen erhalten. Sei geduldig mit Entwicklern, die Aktualisierungen vornehmen müssen, um neue Funktionen zu unterstützen.

## Vorabversionen für Desktop aktivieren

Um Vorabversionen zu erhalten, sobald sie verfügbar sind, folge diesen Schritten:

1. Öffne **[[Einstellungen]]**.
2. Wähle in der Seitenleiste **Allgemein**.
3. Wähle unter **Konto → Dein Nutzerkonto** die Option **Anmelden**.
4. Gib unter **E-Mail** deine E-Mail ein.
5. Gib unter **Passwort** dein Passwort ein.
6. Kehre nach der Anmeldung zu **[[Einstellungen]]** zurück.
7. Wähle in der Seitenleiste **Allgemein**.
8. Aktiviere unter **App** die Option **Insider-Builds erhalten**.
9. Klicke auf **Nach Aktualisierungen suchen** und dann auf **Neu starten**.

## Vorabversionen auf mobilen Geräten installieren

Um Anweisungen zur Installation von Vorabversionen auf deinem mobilen Gerät zu finden, folge diesen Schritten:

1. Lade [Discord](<https://discord.com>) herunter und installiere es.
2. Tritt dem [Obsidian Discord-Server](https://discord.gg/obsidianmd) bei.
3. [[Catalyst-Lizenz#Dein Discord-Abzeichen erhalten|Erhalte dein Discord-Abzeichen]], um Zugang zu Insider-Kanälen zu bekommen.
4. Im Kanal `#insider-welcome` findest du Anweisungen zum Zugriff auf deinen Download basierend auf deinem Gerätetyp.

## Probleme und anderes Feedback melden

Wenn du ein Problem in einer Vorabversion entdeckst, erwäge, es dem Obsidian-Team zu melden. Bevor du ein Problem meldest, durchsuche das [Forum](https://forum.obsidian.md/) oder Discord, um zu sehen, ob es bereits jemand gemeldet hat.

Um ein Problem zu melden, verwende einen der folgenden Kanäle:

- Melde das Problem auf Discord im jeweiligen `#insider-release`-Kanal.
- Erstelle im Forum ein neues Thema unter [Bug reports](https://forum.obsidian.md/c/bug-reports/7).

Wenn du ein Problem meldest, gib die Build-Version und das Betriebssystem an, auf dem du es ausführst. Du findest die Build-Version unter **[[Einstellungen]] → Über → App → Aktuelle Version**.

## Auf Desktop zu öffentlichen Versionen zurückkehren

Um auf dem Desktop wieder öffentliche Versionen (keine Vorabversionen) zu verwenden:

1. Deaktiviere Vorabversionen.
   1. Öffne **[[Einstellungen]]**.
   2. Wähle in der Seitenleiste **Allgemein**.
   3. Deaktiviere unter **App** die Option **Insider-Builds erhalten**.
2. Schließe Obsidian.
3. Lösche die Datei `obsidian-VERSION.asar`, wobei `VERSION` die Obsidian-Version ist.
   - Windows: `%APPDATA%\obsidian\obsidian-VERSION.asar`
   - Mac: `~/Library/Application Support/obsidian/obsidian-VERSION.asar`
   - Linux: `~/.config/obsidian/obsidian-VERSION.asar`
4. Starte Obsidian neu.

## Auf mobilen Geräten zu öffentlichen Versionen zurückkehren

Um auf mobilen Geräten wieder öffentliche Versionen (keine Vorabversionen) zu verwenden:

1. Sichere deine Vault-Daten
2. Deinstalliere Obsidian
3. Installiere Obsidian erneut aus dem Play Store oder Apple App Store
4. Stelle deine Vault-Daten aus deinen Sicherungen wieder her
5. Öffne Obsidian
