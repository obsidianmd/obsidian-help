---
permalink: sync/switch
cssclasses:
  - soft-embed
publish: true
mobile: true
description: >-
  Erfahren Sie, wie Sie von Ihrer aktuellen Synchronisierungslösung zu Obsidian
  Sync wechseln.
---
Erfahren Sie, wie Sie von Ihrer aktuellen Synchronisierungslösung zu Obsidian Sync wechseln.

> [!warning] Vermeiden Sie die Verwendung mehrerer Lösungen zur Synchronisierung derselben Dateien
> Wir [[Häufig gestellte Fragen#Kann ich eine Drittanbieter-Synchronisierung mit Obsidian Sync verwenden?|empfehlen nicht]], Obsidian Sync zusammen mit Cloud-Speicherdiensten (z. B. iCloud, Dropbox, OneDrive, Google Drive) zu verwenden, da dies zu Konflikten führen kann. Cloud-Speicherdienste können jedoch eine Rolle in Ihrer [[Obsidian-Dateien sichern|Backup]]-Strategie spielen.

## Verschieben Sie Ihren Vault aus Ihrem Drittanbieter-Synchronisierungsdienst oder Cloud-Speicher

Wenn Ihr Vault an einem der folgenden Speicherorte gespeichert ist, wird er wahrscheinlich von einem Drittanbieter-Dienst synchronisiert:

- **Windows**: `C:\Users\Username\Desktop` oder `C:\Users\Username\Documents`
- **macOS**: `/users/username/Desktop` oder `/users/username/Documents`
- **iOS**: Der **iCloud**-Ordner innerhalb der Dateien-App
- **Andere**: Jeder Ordner unter einem Synchronisierungsdienst, wie `Drive/my-vault`, `Dropbox/my-vault`, `pSync/my-vault` usw.

Obwohl Android und Linux tendenziell weniger Probleme damit haben, lohnt es sich dennoch, den Vault-Speicherort auf diesen Geräten zu überprüfen.

> [!tip] Wenn Ihr aktueller lokaler Vault mit einem Remote-Tresor verbunden ist, versucht Obsidian zu erkennen, ob sich der Vault in einem Synchronisierungsdienst befindet. Falls ja, wird eine Meldung oben in den Einstellungen von Obsidian Sync angezeigt.

Um Konflikte mit Synchronisierungsdiensten zu vermeiden, empfehlen wir, Ihre Obsidian-Vaults an folgenden Speicherorten zu speichern:

- **Windows**: Empfohlene Speicherorte in dieser Reihenfolge:
    1. `D:\` oder ein anderes Laufwerk, das kein C:- und kein Netzlaufwerk auf Ihrem Gerät ist
    2. `C:\Vaults` (wenn Sie Berechtigungen zur Nutzung des C:\-Laufwerks haben)
    3. `C:\Users\Username\Vaults` (wenn Sie Ihren Vault innerhalb von C:\Users\Username behalten müssen, stellen Sie sicher, dass OneDrive keine Dateien entfernt. OneDrive ist außerhalb der Ordner `Desktop` und `Documents` in der Regel weniger aggressiv.)
- **macOS**: `/users/username/vaults`
- **Linux**: Keine spezifische Empfehlung aufgrund der Vielfalt an Dateisystemen. Stellen Sie lediglich sicher, dass Obsidian vollen Lese-/Schreibzugriff hat und kein Synchronisierungsdienst den Ordner verwaltet.
- **iOS/iPadOS**: Speichern Sie den Vault unter **Auf meinem iPhone** oder **Auf dem Gerät**.
- **Android**: Verwenden Sie den `Documents/`-Ordner auf Ihrem Gerät.

## Verschieben Sie Ihren Vault mit Obsidian auf dem Desktop

![[Vaults verwalten#Vault in einen anderen Ordner verschieben]]

## Verschieben Sie Ihren Vault auf Mobilgeräten

Auf Mobilgeräten arbeitet Obsidian in einer Sandbox-Umgebung, was bedeutet, dass Sie Vaults nicht innerhalb der App verschieben können wie auf dem Desktop.

### Android

Android-Dateisysteme variieren stark je nach Gerät, aber im Allgemeinen folgen Sie den gleichen Schritten wie beim manuellen Verschieben Ihres Vaults und stellen sicher, dass er von jedem Synchronisierungsdienst auf Ihrem Gerät entfernt wird.

### iOS und iPadOS

Um einen bestehenden iCloud-Vault auf Ihr Gerät zu verschieben, folgen Sie diesen Schritten:

> [!note] Wenn Sie die Daten bereits auf einem anderen Gerät haben und Obsidian Sync eingerichtet haben, wird empfohlen, stattdessen [[Obsidian Sync einrichten#Einen Remote-Tresor auf einem anderen Gerät synchronisieren|einen neuen lokalen Vault über Sync einzurichten]].

- [[Obsidian-Dateien sichern|Sichern]] Sie Ihren Vault.
- Erstellen Sie einen neuen Vault auf Ihrem Gerät und stellen Sie sicher, dass **In iCloud Drive sichern** deaktiviert ist.
- Erzwingen Sie das Beenden der Obsidian-App auf allen Geräten, um Sync anzuhalten.
- Öffnen Sie die **Dateien**-App auf Ihrem iOS/iPadOS-Gerät.
- Drücken Sie lange auf den Vault-Ordner unter **iCloud Drive → Obsidian** und wählen Sie dann **Bewegen**.
- Verschieben Sie den Vault nach **Auf meinem iPhone/Gerät → Obsidian** und bestätigen Sie, dass er nun sichtbar ist.
- Tippen Sie auf **Kopieren**.
- Kehren Sie zu **iCloud Drive → Obsidian** zurück und löschen Sie den alten Vault-Ordner.

Sobald Sie Obsidian erneut öffnen, sollte der Vault ein Vault-Symbol anstelle eines Cloud-Symbols anzeigen, was bestätigt, dass er sich nicht mehr in iCloud Drive befindet. Obsidian Sync wird auch keine Warnmeldung mehr in seinen Einstellungen anzeigen.

## Nächste Schritte

- Möchten Sie mit Obsidian Sync loslegen? [[Obsidian Sync einrichten]]
- Benötigen Sie noch Hilfe? Schauen Sie sich [[Obsidian Sync Fehlerbehebung]] an
