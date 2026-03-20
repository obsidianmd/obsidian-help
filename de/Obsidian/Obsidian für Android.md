---
permalink: android
---
Die mobile Obsidian-App für Android bringt leistungsstarke Notizfunktionen auf Ihr Android-Gerät. Sie können sie von [Google Play](https://play.google.com/store/apps/details?id=md.obsidian) oder als [APK-Datei](https://obsidian.md/download) herunterladen.
Sie unterstützt Android-Versionen ab 5.1.

Diese Seite behandelt Android-spezifische Funktionen, darunter Widgets, Quick-Settings-Integration und Shortcuts.

## Sync

Um Ihre Notizen mit Obsidian auf Android zu synchronisieren, siehe [[Notizen geräteübergreifend synchronisieren]].

## Vault-Speicherort

Wenn Sie Obsidian auf Android starten, werden Sie gefragt, wo Ihre Vault-Daten gespeichert werden sollen. Sie können **Gerätespeicher** (empfohlen) oder **App-Speicher** wählen.

### Gerätespeicher

Mit der Option **Gerätespeicher** werden Ihre Daten an einem gemeinsam genutzten Speicherort auf Ihrem Gerät gespeichert. Dadurch kann Ihr Obsidian-Vault von anderen Apps und Diensten aufgerufen werden, wie z. B. Drittanbieter-[[Notizen geräteübergreifend synchronisieren|Synchronisierungs]]-Tools.

Dies ist die empfohlene Option, da sie eine bessere Kompatibilität mit Synchronisierungs-Tools bietet und sicherstellt, dass Ihre Daten auch nach der Deinstallation der App erhalten bleiben. Allerdings erfordert diese Option zusätzliche Berechtigungen, um auf die Dateien Ihres Geräts zuzugreifen.

Aufgrund von Einschränkungen bei Android wird Obsidian die Berechtigung „Alle Dateien" anfordern, um zuverlässig zu funktionieren. Google empfiehlt dies für Apps wie Obsidian, die als „Dokumentenverwaltungs-Apps" gelten. [Erfahre mehr](https://developer.android.com/training/data-storage/manage-all-files).

Die App verwendet diese Berechtigung ausschließlich, um Ihnen den Zugriff auf Ihre Daten auf Ihrem Gerät zu ermöglichen. Ihre Daten sind für uns niemals zugänglich. Um mehr darüber zu erfahren, wie wir Ihre Daten schützen und Ihre Privatsphäre gewährleisten, besuchen Sie unsere [Sicherheitsseite](https://obsidian.md/security).

### App-Speicher

Mit der Option **App-Speicher** werden Ihre Daten im privaten App-Speicher von Obsidian gespeichert. Dadurch werden Ihre Daten für zusätzlichen Datenschutz von anderen Apps isoliert.

Dies ist eine gute Option, wenn Sie keine externen Synchronisierungs-Tools verwenden und eine strengere Sandboxing-Isolation auf App-Ebene für Ihre Notizen bevorzugen.

Mit dieser Option können Sie [[Einführung in Obsidian Sync|Obsidian Sync]] und Drittanbieter-Synchronisierungs-Erweiterungen verwenden, die über [[Community-Erweiterungen]] verfügbar sind, aber Sie können keine Tools wie Syncthing verwenden, die auf gemeinsam genutzten Speicher angewiesen sind.

> [!warning] Das Deinstallieren von Obsidian löscht Ihre lokalen Notizen, wenn Sie den App-Speicher verwenden
> Wenn Sie die Option **App-Speicher** verwenden, werden Ihre lokalen Vault-Daten gelöscht, wenn Sie die App deinstallieren. Ihre Obsidian-Vault-Daten auf anderen Geräten werden nicht gelöscht.

## Widgets

Obsidian für Android bietet mehrere Widget-Optionen, um schnell von Ihrem Startbildschirm auf Ihre Vaults und Notizen zuzugreifen. Verfügbare Widgets sind:

- **Notiz öffnen** — Eine bestimmte Notiz öffnen
- **Neue Notiz** — Eine neue Notiz erstellen
- **Suche** — Eine Suchanfrage starten
- **Tägliche Notiz** — Ihre Tägliche Notiz öffnen
- **Obsidian öffnen** — Die App starten

> [!note] Hinweis
> Diese Widgets sind statisch und zeigen keine Vorschau der ausgewählten Notiz oder des Vaults an.

Um Widgets zu Ihrem Startbildschirm hinzuzufügen:
1. Tippen und halten Sie eine beliebige Stelle auf Ihrem Startbildschirm
2. Wählen Sie „Widgets"
3. Suchen Sie Obsidian und wählen Sie ein Widget aus, das Sie verwenden möchten.

> [!note] Hinweis
> Obsidian-Widgets können in der Größe verändert werden. Um ein Widget zu skalieren, tippen und halten Sie es und ziehen Sie dann die Größenänderungsgriffe.

Sie können mehrere Widgets desselben Typs hinzufügen, um verschiedene Dateien zu öffnen oder verschiedene Suchanfragen auszulösen.

Um ein Widget zu konfigurieren, drücken Sie lange darauf auf Ihrem Startbildschirm und suchen Sie dann eine Option „Bearbeiten" oder „Konfigurieren". Dies ermöglicht Ihnen, die spezifischen Parameter anzugeben, die für die Tipp-Aktion dieses Widgets erforderlich sind, wie Datei oder Pfad, Suchanfrage und Vault-Name.

Weitere Informationen zu Android-Widgets finden Sie in diesem [Google-Support-Artikel](https://support.google.com/android/answer/9450271?hl=en).

## Quick-Settings-Kacheln

Erfordert Android 7.0 oder höher.

Fügen Sie eine Obsidian-Quick-Settings-Kachel hinzu, um schnell über Ihre Benachrichtigungsleiste auf die App zuzugreifen. Funktioniert auf dem Startbildschirm und dem Sperrbildschirm.

> [!note] Hinweis
> Im Gegensatz zu App-Widgets können Sie nur eine Quick-Settings-Kachel desselben Typs hinzufügen.

Um eine Quick-Settings-Kachel zu Ihrer Benachrichtigungsleiste hinzuzufügen:

1. Öffnen Sie Ihre Benachrichtigungsleiste, typischerweise durch Wischen von der Statusleiste nach unten. Hinweis: Möglicherweise müssen Sie ein weiteres Mal wischen, um weitere Optionen zu sehen.
2. Wählen Sie bei den Quick-Settings-Kacheln „Bearbeiten" – dies befindet sich normalerweise im selben Bereich wie die Schalter für WLAN, Bluetooth und Bildschirmsperre.
3. Suchen und wählen Sie eine Obsidian-Quick-Settings-Kachel aus und ordnen Sie sie nach Ihren Wünschen an.
4. Um eine Quick-Settings-Kachel zu konfigurieren, tippen und halten Sie sie, um den Konfigurationsbildschirm aufzurufen.

Weitere Informationen zu Android Quick Settings finden Sie in diesem [Google-Support-Artikel](https://support.google.com/android/answer/9083864?hl=en).

## Shortcuts

Erfordert Android 7.1 oder höher.

Obsidian bietet App-Shortcuts, die auf verschiedene Weisen aufgerufen werden können:

- Langes Drücken auf das Obsidian-App-Symbol
- Ziehen des Shortcut-Symbols auf Ihren Startbildschirm
- Zugriff über die Suchleiste Ihres Launchers (bei den meisten Geräteherstellern verfügbar)

Verfügbare Shortcuts:

- **Notiz öffnen** — Eine bestimmte Notiz in Ihrem Vault öffnen
- **Tägliche Notiz** — Direkt zur heutigen Täglichen Notiz springen

> [!note] Hinweis
> Shortcuts in Obsidian 1.11 sind nicht konfigurierbar und werden in späteren Versionen überarbeitet, um dynamischere Optionen anzubieten, die auf Ihre spezifischen Notizen zugeschnitten sind.
