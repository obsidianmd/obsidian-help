---
permalink: sync/messages
publish: true
mobile: true
description: Diese Seite erklärt die Statussymbole von Obsidian Sync und bietet Details zum Sync-Aktivitätsprotokoll.
---
Obsidian Sync bietet mehrere Elemente zur Anzeige des Sync-Status, hauptsächlich das [[#Sync-Statussymbol]] und das [[#Sync-Aktivitätsprotokoll]]. Details zur Versionskontrolle in Obsidian Sync werden auf der Seite [[Versionsgeschichte]] behandelt.

## Sync-Statussymbol

Das Sync-Statussymbol befindet sich in der [[Statusleiste]] in der Desktop-Version und in der [[Seitenleiste#Verborgene Seitenleisten öffnen|rechten Seitenleiste]] auf Mobilgeräten und Tablets. Das Symbol zeigt verschiedene Sync-Zustände an:

- ![[obsidian-icon-sync-synced.svg#icon]] **Synchronisiert**: Obsidian Sync hat deine Dateien vollständig synchronisiert. Dieses Symbol ist typischerweise grün.
- ![[obsidian-icon-sync-syncing.svg#icon]] **Synchronisiert**: Obsidian aktualisiert gerade den Remote-Tresor. Dieses Symbol ist normalerweise lila.
- ![[obsidian-icon-sync-paused.svg#icon]] **Angehalten**: Die Synchronisierung wurde angehalten, aber Obsidian ist weiterhin mit dem Remote-Tresor verbunden. Das Symbol ist typischerweise lila.
- ![[obsidian-icon-sync-disconnected.svg#icon]] **Getrennt**: Die integrierte Sync-Erweiterung ist aktiv, aber der [[Lokale und Remote-Tresore|lokale Vault]] ist nicht mit einem Remote-Tresor verbunden. Dieses Symbol ist typischerweise rot.

Durch Klicken oder Tippen auf das Symbol öffnet sich ein Kontextmenü mit folgenden Optionen:
- ![[obsidian-icon-sync-paused.svg#icon]] Anhalten (oder ![[lucide-circle-play.svg#icon]] Fortfahren, wenn angehalten)
- ![[lucide-history.svg#icon]] [[Versionsgeschichte|Versionsverlauf]] (Ausgegraut, wenn keine Notiz angezeigt wird)
- ![[lucide-align-left.svg#icon]] [[#Sync-Aktivitätsprotokoll|Sync-Log]] öffnen
- ![[lucide-trash-2.svg#icon]] [[Versionsgeschichte#Eine gelöschte Datei wiederherstellen|Gelöschte Dateien]]
- ![[lucide-cog.svg#icon]] [[Sync-Einstellungen und selektive Synchronisierung|Sync-Einstellungen]]

## Sync-Aktivitätsprotokoll

Obsidian Sync enthält ein detailliertes Sync-Log, das alle Interaktionen zwischen deinen lokalen Dateien und dem Remote-Tresor verfolgt. Das Log zeigt Uploads, Downloads, Löschungen und etwaige Probleme wie Konflikte beim Zusammenführen oder Verbindungsprobleme.

**Zugriff auf das Aktivitätsprotokoll:**
- Klicke auf das Sync-Statussymbol in der Statusleiste
- Gehe zu **[[Einstellungen]] → Sync → Sync-Log**
- Verwende **Befehlspalette → Sync: Sync-Log öffnen**

Das Log liefert Zeitstempel und Details für jede Sync-Operation, was es nützlich für die Fehlerbehebung bei Sync-Problemen macht.

> [!warning] Das Sync-Log bleibt nach dem Schließen von Obsidian nicht erhalten. Wenn du auf ein Problem stößt, stelle sicher, dass du das Log kopierst, _bevor_ du die App schließt.

Das Log kategorisiert Nachrichten in folgende Typen:

- [[#Allgemeine Nachrichten]]
- [[#Fehlernachrichten]]
- [[#Übersprungene Nachrichten]]
- [[#Kontonachrichten]]

Du kannst das Sync-Log nach **Alle**, **Fehler**, **Übersprungen** und **Konflikte beim Zusammenführen** filtern. Zusätzlich kannst du das Sync-Log über das Suchfeld im Sync-Fenster durchsuchen.

> [!summary] Wir haben einige der häufigsten Nachrichten aufgelistet, die dir begegnen könnten. Die Liste ist nicht vollständig. Wenn du ein Problem hast und dir bei einer Sync-Log-Nachricht unsicher bist, [[Hilfe und Support#Obsidian-Support kontaktieren|kontaktiere den Obsidian-Support]].

### Allgemeine Nachrichten

Dies sind häufige alltägliche Nachrichten, die dir begegnen könnten.

**Connecting to server**  
Obsidian versucht, eine Verbindung zum [[Obsidian Sync/Sicherheit und Datenschutz#Wo finde ich meinen aktuellen Sync-Server und wo wird er gehostet?|Sync-Server]] deines Remote-Tresors herzustellen.

**Connected to server. Detecting changes...**  
Obsidian hat eine Verbindung hergestellt und vergleicht den lokalen Vault mit dem Remote-Tresor, um festzustellen, ob Änderungen erforderlich sind.

> [!info] Diese Nachricht kann auch auf andere potenzielle Sync-Probleme hinweisen. Wenn du sie wiederholt siehst und glaubst, dass noch Elemente synchronisiert werden müssen, [[Hilfe und Support#Obsidian-Support kontaktieren|kontaktiere den Obsidian-Support]].

**Fully synced**  
- Der lokale und der Remote-Tresor sind vollständig synchronisiert.

**Merging conflicted file**  
Während der Synchronisierung wurde ein Konflikt erkannt, und die Datei wurde zusammengeführt statt überschrieben. Siehe [[Obsidian Sync Fehlerbehebung#Konfliktlösung|Konfliktlösung]] für weitere Informationen. Wenn die Zusammenführung unerwünscht ist, kannst du frühere Versionen über [[Versionsgeschichte]] oder [[Datenwiederherstellung]] wiederherstellen.

**Rejected server change**  
Die Änderungen im Remote-Tresor sind älter als die Version auf deinem lokalen Gerät, daher wird die lokale Version beibehalten und die Remote-Änderung ignoriert.

### Fehlernachrichten

Dies sind Nachrichten, die einen Fehler bei der Synchronisierung einer Datei beschreiben.

**Out of memory**  
Dieses Problem tritt typischerweise auf mobilen Geräten auf, wenn nicht genügend Speicherplatz oder Arbeitsspeicher zum Herunterladen einer Datei verfügbar ist. Es tritt am häufigsten bei großen Dateien wie Videos auf.

### Übersprungene Nachrichten

Dies sind Nachrichten, die beschreiben, was übersprungen wurde und möglicherweise warum.

**Unable to download file with illegal name**

Die Datei enthält ein [Sonderzeichen oder eine Namenskonvention](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names), die auf dem empfangenden Betriebssystem nicht erlaubt ist. Zur Vereinfachung kannst du die Datei auf dem Quellgerät umbenennen, um alle Sonderzeichen außer `-` und `_` zu entfernen.

Beachte, dass dies auch Dateien mit mehreren Punkten `.` im Namen auf Android-Geräten einschließt.

### Kontonachrichten

Dies sind Nachrichten, die sich auf eine Änderung deines Abonnements oder Kontos beziehen.

**Vault limit exceeded**  
Dein Konto hat die [[Häufig gestellte Fragen#Wie groß kann jeder Remote-Tresor sein|maximale Speichergröße]] überschritten. Anhänge und der Versionsverlauf tragen zu dieser Größe bei. Auch wenn dein Vault kleiner als das Limit erscheint, können ältere Versionen und Dateien ihn darüber hinaus treiben.

Um die Vault-Größe zu reduzieren:
1. Öffne **[[Einstellungen]] → Sync**.
2. Verwende die Optionen unter **Vault-Größe über Limit**, um große Dateien zu entfernen.

**Vault not found**  
`{"res":"err","msg":"Vault not found."}`

Dieser Fehler kann in folgenden Fällen auftreten:

1. Der Vault wurde von einem anderen Gerät gelöscht.
2. Das Sync-Abonnement war länger als 30 Tage inaktiv, wodurch der Remote-Tresor entfernt wurde.
3. Das Abonnement wurde gekündigt oder erstattet, was zur Löschung des Remote-Tresors führte.

In diesen Fällen musst du die [[Obsidian Sync einrichten#Verbindung zu einem Remote-Tresor trennen|Verbindung zum Remote-Tresor trennen]] und [[Obsidian Sync einrichten#Einen neuen Remote-Tresor erstellen|einen neuen Remote-Tresor erstellen]], wobei du sicherstellst, dass deine lokalen Daten erhalten bleiben.

**Failed to authenticate: Your subscription to Obsidian Sync has expired**  
Dein Konto befindet sich nun in einem vollständig abgelaufenen Status, da wir die hinterlegte Zahlung nicht verarbeiten konnten.

Um Obsidian Sync weiter zu nutzen, musst du dich in [deinem Konto](https://obsidian.md/account/sync) erneut abonnieren.

**Failed to authenticate: Not logged in**

Obsidian Sync hat erkannt, dass du derzeit nicht angemeldet bist. Du musst dich in der App im Bereich [[Einstellungen#Allgemein#Konto|Konto]] der **[[Einstellungen]]** erneut anmelden.

In einigen Fällen kann auch eine externe Erweiterung verhindern, dass Obsidian Sync deinen Anmeldestatus bestätigen kann. Bitte wechsle in den **[[Plugin-Sicherheit#Eingeschränkter Modus|Eingeschränkten Modus]]** und versuche es erneut.

### Netzwerknachrichten

**Disconnected from server**
`Unable to connect to server`

Obsidian Sync hat die Verbindung zum Sync-Server aus unbekanntem Grund getrennt. Sync wird regelmäßig versuchen, die Verbindung zum Server wiederherzustellen.

Unter iOS wird diese Nachricht als folgender Fehler angezeigt:
`Null is not an object (evaluating 'this.socket.send')`

Sie bedeutet genau dasselbe wie die Nachricht `Unable to connect to server` und ist kein Hinweis darauf, dass etwas anderes falsch ist.
