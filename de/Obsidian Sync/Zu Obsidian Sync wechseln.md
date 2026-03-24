---
permalink: sync/switch
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Erfahre, wie du von deiner aktuellen Synchronisierungslösung zu Obsidian Sync wechselst.
---
Erfahre, wie du von deiner aktuellen Synchronisierungslösung zu Obsidian Sync wechselst.

> [!warning] Vermeide die Verwendung mehrerer Lösungen zur Synchronisierung derselben Dateien
> Wir [[Häufig gestellte Fragen#Kann ich eine Drittanbieter-Synchronisierung mit Obsidian Sync verwenden?|empfehlen nicht]], Obsidian Sync zusammen mit Cloud-Speicherdiensten (z. B. iCloud, Dropbox, OneDrive, Google Drive) zu verwenden, da dies zu Konflikten führen kann. Cloud-Speicherdienste können jedoch eine Rolle in deiner [[Obsidian-Dateien sichern|Backup]]-Strategie spielen.

## Verschiebe deinen Vault aus deinem Drittanbieter-Synchronisierungsdienst oder Cloud-Speicher

Wenn dein Vault an einem der folgenden Speicherorte gespeichert ist, wird er wahrscheinlich von einem Drittanbieter-Dienst synchronisiert:

- **Windows**: `C:\Users\Username\Desktop` oder `C:\Users\Username\Documents`
- **macOS**: `/users/username/Desktop` oder `/users/username/Documents`
- **iOS**: Der **iCloud**-Ordner innerhalb der Dateien-App
- **Andere**: Jeder Ordner unter einem Synchronisierungsdienst, wie `Drive/my-vault`, `Dropbox/my-vault`, `pSync/my-vault` usw.

Obwohl Android und Linux tendenziell weniger Probleme damit haben, lohnt es sich dennoch, den Vault-Speicherort auf diesen Geräten zu überprüfen.

> [!tip] Wenn dein aktueller lokaler Vault mit einem Remote-Tresor verbunden ist, versucht Obsidian zu erkennen, ob sich der Vault in einem Synchronisierungsdienst befindet. Falls ja, wird eine Meldung oben in den Einstellungen von Obsidian Sync angezeigt.

Um Konflikte mit Synchronisierungsdiensten zu vermeiden, empfehlen wir, deine Obsidian-Vaults an folgenden Speicherorten zu speichern:

- **Windows**: Empfohlene Speicherorte in dieser Reihenfolge:
    1. `D:\` oder ein anderes Laufwerk, das kein C:- und kein Netzlaufwerk auf deinem Gerät ist
    2. `C:\Vaults` (wenn du Berechtigungen zur Nutzung des C:\-Laufwerks hast)
    3. `C:\Users\Username\Vaults` (wenn du deinen Vault innerhalb von C:\Users\Username behalten musst, stelle sicher, dass OneDrive keine Dateien entfernt. OneDrive ist außerhalb der Ordner `Desktop` und `Documents` in der Regel weniger aggressiv.)
- **macOS**: `/users/username/vaults`
- **Linux**: Keine spezifische Empfehlung aufgrund der Vielfalt an Dateisystemen. Stelle lediglich sicher, dass Obsidian vollen Lese-/Schreibzugriff hat und kein Synchronisierungsdienst den Ordner verwaltet.
- **iOS/iPadOS**: Speichere den Vault unter **Auf meinem iPhone** oder **Auf dem Gerät**.
- **Android**: Verwende den `Documents/`-Ordner auf deinem Gerät.

## Verschiebe deinen Vault mit Obsidian auf dem Desktop

![[Vaults verwalten#Vault in einen anderen Ordner verschieben]]

## Verschiebe deinen Vault auf Mobilgeräten

Auf Mobilgeräten arbeitet Obsidian in einer Sandbox-Umgebung, was bedeutet, dass du Vaults nicht innerhalb der App verschieben kannst wie auf dem Desktop.

### Android

Android-Dateisysteme variieren stark je nach Gerät, aber im Allgemeinen folge den gleichen Schritten wie beim manuellen Verschieben deines Vaults und stelle sicher, dass er von jedem Synchronisierungsdienst auf deinem Gerät entfernt wird.

### iOS und iPadOS

Um einen bestehenden iCloud-Vault auf dein Gerät zu verschieben, folge diesen Schritten:

> [!note] Wenn du die Daten bereits auf einem anderen Gerät hast und Obsidian Sync eingerichtet hast, wird empfohlen, stattdessen [[Obsidian Sync einrichten#Einen Remote-Tresor auf einem anderen Gerät synchronisieren|einen neuen lokalen Vault über Sync einzurichten]].

- [[Obsidian-Dateien sichern|Sichere]] deinen Vault.
- Erstelle einen neuen Vault auf deinem Gerät und stelle sicher, dass **In iCloud Drive sichern** deaktiviert ist.
- Erzwinge das Beenden der Obsidian-App auf allen Geräten, um Sync anzuhalten.
- Öffne die **Dateien**-App auf deinem iOS/iPadOS-Gerät.
- Drücke lange auf den Vault-Ordner unter **iCloud Drive → Obsidian** und wähle dann **Bewegen**.
- Verschiebe den Vault nach **Auf meinem iPhone/Gerät → Obsidian** und bestätige, dass er nun sichtbar ist.
- Tippe auf **Kopieren**.
- Kehre zu **iCloud Drive → Obsidian** zurück und lösche den alten Vault-Ordner.

Sobald du Obsidian erneut öffnest, sollte der Vault ein Vault-Symbol anstelle eines Cloud-Symbols anzeigen, was bestätigt, dass er sich nicht mehr in iCloud Drive befindet. Obsidian Sync wird auch keine Warnmeldung mehr in seinen Einstellungen anzeigen.

## Nächste Schritte

- Möchtest du mit Obsidian Sync loslegen? [[Obsidian Sync einrichten]]
- Benötigst du noch Hilfe? Schaue dir [[Obsidian Sync Fehlerbehebung]] an
