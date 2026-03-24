---
permalink: android
---
Die mobile Obsidian-App für Android bringt leistungsstarke Notizfunktionen auf dein Android-Gerät. Du kannst sie von [Google Play](https://play.google.com/store/apps/details?id=md.obsidian) oder als [APK-Datei](https://obsidian.md/download) herunterladen.
Sie unterstützt Android-Versionen ab 5.1.

Diese Seite behandelt Android-spezifische Funktionen, darunter Widgets, Quick-Settings-Integration und Shortcuts.

## Sync

Um deine Notizen mit Obsidian auf Android zu synchronisieren, siehe [[Notizen geräteübergreifend synchronisieren]].

## Vault-Speicherort

Wenn du Obsidian auf Android startest, wirst du gefragt, wo deine Vault-Daten gespeichert werden sollen. Du kannst **Gerätespeicher** (empfohlen) oder **App-Speicher** wählen.

### Gerätespeicher

Mit der Option **Gerätespeicher** werden deine Daten an einem gemeinsam genutzten Speicherort auf deinem Gerät gespeichert. Dadurch kann dein Obsidian-Vault von anderen Apps und Diensten aufgerufen werden, wie z. B. Drittanbieter-[[Notizen geräteübergreifend synchronisieren|Synchronisierungs]]-Tools.

Dies ist die empfohlene Option, da sie eine bessere Kompatibilität mit Synchronisierungs-Tools bietet und sicherstellt, dass deine Daten auch nach der Deinstallation der App erhalten bleiben. Allerdings erfordert diese Option zusätzliche Berechtigungen, um auf die Dateien deines Geräts zuzugreifen.

Aufgrund von Einschränkungen bei Android wird Obsidian die Berechtigung „Alle Dateien" anfordern, um zuverlässig zu funktionieren. Google empfiehlt dies für Apps wie Obsidian, die als „Dokumentenverwaltungs-Apps" gelten. [Erfahre mehr](https://developer.android.com/training/data-storage/manage-all-files).

Die App verwendet diese Berechtigung ausschließlich, um dir den Zugriff auf deine Daten auf deinem Gerät zu ermöglichen. Deine Daten sind für uns niemals zugänglich. Um mehr darüber zu erfahren, wie wir deine Daten schützen und deine Privatsphäre gewährleisten, besuche unsere [Sicherheitsseite](https://obsidian.md/security).

### App-Speicher

Mit der Option **App-Speicher** werden deine Daten im privaten App-Speicher von Obsidian gespeichert. Dadurch werden deine Daten für zusätzlichen Datenschutz von anderen Apps isoliert.

Dies ist eine gute Option, wenn du keine externen Synchronisierungs-Tools verwendest und eine strengere Sandboxing-Isolation auf App-Ebene für deine Notizen bevorzugst.

Mit dieser Option kannst du [[Einführung in Obsidian Sync|Obsidian Sync]] und Drittanbieter-Synchronisierungs-Erweiterungen verwenden, die über [[Community-Erweiterungen]] verfügbar sind, aber du kannst keine Tools wie Syncthing verwenden, die auf gemeinsam genutzten Speicher angewiesen sind.

> [!warning] Das Deinstallieren von Obsidian löscht deine lokalen Notizen, wenn du den App-Speicher verwendest
> Wenn du die Option **App-Speicher** verwendest, werden deine lokalen Vault-Daten gelöscht, wenn du die App deinstallierst. Deine Obsidian-Vault-Daten auf anderen Geräten werden nicht gelöscht.

## Widgets

Obsidian für Android bietet mehrere Widget-Optionen, um schnell von deinem Startbildschirm auf deine Vaults und Notizen zuzugreifen. Verfügbare Widgets sind:

- **Notiz öffnen** — Eine bestimmte Notiz öffnen
- **Neue Notiz** — Eine neue Notiz erstellen
- **Suche** — Eine Suchanfrage starten
- **Tägliche Notiz** — Deine Tägliche Notiz öffnen
- **Obsidian öffnen** — Die App starten

> [!note] Hinweis
> Diese Widgets sind statisch und zeigen keine Vorschau der ausgewählten Notiz oder des Vaults an.

Um Widgets zu deinem Startbildschirm hinzuzufügen:
1. Tippe und halte eine beliebige Stelle auf deinem Startbildschirm
2. Wähle „Widgets"
3. Suche Obsidian und wähle ein Widget aus, das du verwenden möchtest.

> [!note] Hinweis
> Obsidian-Widgets können in der Größe verändert werden. Um ein Widget zu skalieren, tippe und halte es und ziehe dann die Größenänderungsgriffe.

Du kannst mehrere Widgets desselben Typs hinzufügen, um verschiedene Dateien zu öffnen oder verschiedene Suchanfragen auszulösen.

Um ein Widget zu konfigurieren, drücke lange darauf auf deinem Startbildschirm und suche dann eine Option „Bearbeiten" oder „Konfigurieren". Dies ermöglicht dir, die spezifischen Parameter anzugeben, die für die Tipp-Aktion dieses Widgets erforderlich sind, wie Datei oder Pfad, Suchanfrage und Vault-Name.

Weitere Informationen zu Android-Widgets findest du in diesem [Google-Support-Artikel](https://support.google.com/android/answer/9450271?hl=en).

## Quick-Settings-Kacheln

Erfordert Android 7.0 oder höher.

Füge eine Obsidian-Quick-Settings-Kachel hinzu, um schnell über deine Benachrichtigungsleiste auf die App zuzugreifen. Funktioniert auf dem Startbildschirm und dem Sperrbildschirm.

> [!note] Hinweis
> Im Gegensatz zu App-Widgets kannst du nur eine Quick-Settings-Kachel desselben Typs hinzufügen.

Um eine Quick-Settings-Kachel zu deiner Benachrichtigungsleiste hinzuzufügen:

1. Öffne deine Benachrichtigungsleiste, typischerweise durch Wischen von der Statusleiste nach unten. Hinweis: Möglicherweise musst du ein weiteres Mal wischen, um weitere Optionen zu sehen.
2. Wähle bei den Quick-Settings-Kacheln „Bearbeiten" – dies befindet sich normalerweise im selben Bereich wie die Schalter für WLAN, Bluetooth und Bildschirmsperre.
3. Suche und wähle eine Obsidian-Quick-Settings-Kachel aus und ordne sie nach deinen Wünschen an.
4. Um eine Quick-Settings-Kachel zu konfigurieren, tippe und halte sie, um den Konfigurationsbildschirm aufzurufen.

Weitere Informationen zu Android Quick Settings findest du in diesem [Google-Support-Artikel](https://support.google.com/android/answer/9083864?hl=en).

## Shortcuts

Erfordert Android 7.1 oder höher.

Obsidian bietet App-Shortcuts, die auf verschiedene Weisen aufgerufen werden können:

- Langes Drücken auf das Obsidian-App-Symbol
- Ziehen des Shortcut-Symbols auf deinen Startbildschirm
- Zugriff über die Suchleiste deines Launchers (bei den meisten Geräteherstellern verfügbar)

Verfügbare Shortcuts:

- **Notiz öffnen** — Eine bestimmte Notiz in deinem Vault öffnen
- **Tägliche Notiz** — Direkt zur heutigen Täglichen Notiz springen

> [!note] Hinweis
> Shortcuts in Obsidian 1.11 sind nicht konfigurierbar und werden in späteren Versionen überarbeitet, um dynamischere Optionen anzubieten, die auf deine spezifischen Notizen zugeschnitten sind.
