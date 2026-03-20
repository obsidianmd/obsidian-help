---
permalink: sync/plans
publish: true
mobile: true
description: Erfahre mehr über die verschiedenen Tarifoptionen für Obsidian Sync.
---
## Tarife

Um deine Notizen mit [[Einführung in Obsidian Sync|Obsidian Sync]] zu synchronisieren, benötigst du einen Abonnementtarif. Du kannst einen Sync-Tarif erwerben, indem du dich in [deinem Nutzerkonto](https://obsidian.md/account/sync) anmeldest. Informationen zu den Preisen findest du auf der [Sync-Landingpage](https://obsidian.md/sync).

Nachfolgend ein Vergleich zwischen dem Standard- und dem Plus-Tarif:

|                                                                           | Sync Standard | Sync Plus       |
| ------------------------------------------------------------------------- | ------------- | --------------- |
| Synchronisierte Vaults                                                    | 1             | 10              |
| Maximale Dateigröße                                                       | 5 MB          | 200 MB          |
| Gesamtspeicher                                                            | 1 GB          | 10 GB bis 100 GB |
| [[Versionsgeschichte]]                                                    | 1 Monat       | 12 Monate       |
| Geräte                                                                    | Unbegrenzt    | Unbegrenzt      |
| [[An einem gemeinsamen Tresor zusammenarbeiten\|Geteilte Vaults]]         | Ja            | Ja              |

## Speicherlimits

Die Datenmenge, die du mit [[Einführung in Obsidian Sync|Obsidian Sync]] speichern kannst, hängt von deinem Abonnementtarif ab. Mit dem Sync-Plus-Tarif kannst du über dein [Konto-Dashboard](https://obsidian.md/account/sync) zusätzlichen Speicher bis zu 100 GB erwerben. Weitere Details findest du unter [[Häufig gestellte Fragen]].

Es gibt ein einziges kontoweites Speicherlimit für alle Notizen in deinen Vaults. [[Versionsgeschichte]] und [[Anhänge]] werden ebenfalls auf das Speicherlimit deines Kontos angerechnet.

Wenn du das Speicherlimit deines Kontos erreichst, stellt die Sync-Erweiterung die Synchronisierung von Dateien ein und du wirst aufgefordert, deine Remote-Tresor(e) zu bereinigen.

### Große Dateien identifizieren und löschen

Um große Dateien im Vault zu identifizieren und zu löschen:

1. Öffne **[[Einstellungen]] → Sync**.
2. Wähle **Zeige größte Dateien** neben **Vault-Größe über Limit**.
	1. Wenn du **Vault-Größe über Limit** nicht siehst, bedeutet das, dass ==du das Größenlimit noch nicht erreicht hast==.
3. Schließe das Dialogfenster **Zeige größte Dateien**.
4. Lösche einige der großen Dateien, die du nicht mehr benötigst.
5. Warte, bis Obsidian Sync die Aufgabe abgeschlossen hat. Dies kann eine Weile dauern.
6. Öffne **[[Einstellungen]] → Sync**.
7. Wähle **Bereinigen** neben **Vault-Größe über Limit**. Dadurch werden die gelöschten Dateien aus dem Remote-Tresor entfernt, um Speicherplatz freizugeben.

Nach der Synchronisierung der Bereinigung mit dem Server sollte Obsidian Sync wieder funktionieren.

### Einen neuen Remote-Tresor erstellen

Du kannst **einen neuen Remote-Tresor erstellen**, um große Dateien vor der Synchronisierung auszuschließen. Der Versionsverlauf deiner Dateien wird zurückgesetzt, wenn du einen neuen Remote-Tresor erstellst. Stelle bitte sicher, dass du den Versionsverlauf älterer Dateien nicht benötigst, bevor du fortfährst.

Um mit einem neuen Remote-Tresor zu synchronisieren, folge diesen Schritten:

1. Öffne **[[Einstellungen]] → Sync**.
2. Wähle **Verwalten** neben **Remote-Tresor**.
3. Wähle **Neuen Vault erstellen** und folge den Schritten zur Erstellung. Wenn du keine Vaults mehr zur Verfügung hast, musst du möglicherweise zuerst die Verbindung zum aktuellen Remote-Tresor [[Obsidian Sync einrichten#Verbindung zu einem Remote-Tresor trennen|trennen]] und diesen [[Obsidian Sync einrichten#Einen Remote-Tresor löschen|löschen]].
4. Richte ausgeschlossene Dateien ein, bevor du die Synchronisierung mit dem neuen Remote-Tresor startest.
5. Starte Obsidian neu, um deine Änderungen anzuwenden.
6. Öffne **[[Einstellungen]] → Sync**.
7. Wähle Fortfahren, um die Synchronisierung mit dem neuen Remote-Tresor zu starten.

Der neue Remote-Tresor sollte kleiner sein als der vorherige, da kein Versionsverlauf und keine ausgeschlossenen Dateien vorhanden sind.

## Deinen Tarif upgraden

Du kannst deinen Tarif upgraden, indem du dich in deinem [Konto-Dashboard](https://obsidian.md/account/sync) anmeldest. Von dort aus kannst du deinen Tarif von Sync Standard auf Sync Plus upgraden und den Speicher auf bis zu 100 GB erhöhen.

## Deinen Tarif downgraden

Wenn du deinen Sync-Tarif downgraden möchtest, aber deine Speichernutzung das Limit des neuen Tarifs überschreitet, musst du Speicherplatz in deinem Remote-Tresor freigeben. Derzeit gibt es keine direkte Methode, um bestimmte Dateien schnell aus einem bestehenden Remote-Tresor zu entfernen. Dies liegt daran, dass Anhänge im Versionsverlauf bis zu zwei Wochen aufbewahrt werden und der Versionsverlauf auf dein Speicherlimit angerechnet wird.

Der schnellste Weg, deine Sync-Speichernutzung zu reduzieren, ist einen neuen Remote-Tresor mit deaktivierten Anhängen zu erstellen und dann den alten Remote-Tresor zu löschen, der die Speicherlimits überschreitet. Beachte, dass du dabei den Versionsverlauf verlierst.

Wenn du von Sync Plus auf Sync Standard downgradest, musst du außerdem die Anzahl der vorhandenen Vaults auf einen reduzieren, bevor das Downgrade gestattet wird.

### Versionsverlauf beibehalten

Anhänge werden in deiner [[Versionsgeschichte]] bis zu zwei Wochen aufbewahrt. Wenn du in naher Zukunft ein Downgrade planst, kannst du damit beginnen, Anhänge aus deinem lokalen Vault zu entfernen.

Nach zwei Wochen werden diese aus dem Remote-Tresor bereinigt und nicht mehr auf dein Speicherlimit angerechnet. Zu diesem Zeitpunkt kannst du deinen Tarif downgraden und dabei den Versionsverlauf für andere Dateitypen, wie Markdown-Dateien, beibehalten.
