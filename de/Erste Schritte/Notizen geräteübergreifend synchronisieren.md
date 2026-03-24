---
permalink: sync-notes
cssclasses:
  - soft-embed
publish: true
mobile: true
description: So synchronisierst du deine Obsidian-Notizen über Geräte und Plattformen hinweg.
---
Obsidian speichert Notizen lokal auf deinem Gerät, sodass du jederzeit darauf zugreifen kannst, auch offline. Um auf deine Notizen auf mehreren Geräten zugreifen zu können, musst du eine Synchronisierungsmethode einrichten.

Diese Anleitung behandelt gängige Synchronisierungsmethoden, einschließlich Tipps zur Vermeidung von Datenverlust und für ein reibungsloses Erlebnis.

Wir empfehlen außerdem, unsere [[Obsidian-Dateien sichern|Backup-Anleitung]] zu lesen, um deine Daten zu schützen.

## Synchronisierungsmethoden

Bei Obsidian werden deine Daten einfach als Dateien in einem Ordner gespeichert, der als [[Lokale und Remote-Tresore|Vault]] bezeichnet wird. Das bedeutet, es gibt viele Möglichkeiten, deine Daten zu synchronisieren.

Dies sind einige häufig verwendete Synchronisierungsmethoden, die von Mitgliedern der [Obsidian-Community](https://obsidian.md/community) berichtet werden:

1. **Erstanbieter-Sync**: [[#Obsidian Sync]]
2. **Drittanbieter-Cloud-Sync**: [[#iCloud]], [[#OneDrive]] und [[#Google Drive]]
3. **Lokaler Sync**: [[#Syncthing]]
4. **Versionskontrolle**: [[#Git]] und [[#Working Copy]]

## Obsidian Sync

**Empfohlene Systeme**: `Windows`, `macOS`, `Linux`, `iOS`, `Android`

Die einfachste und offiziell unterstützte Synchronisierungsmethode ist unsere Erstanbieter-Lösung: [[Einführung in Obsidian Sync|Obsidian Sync]].

Obsidian Sync hält deine Vaults auf allen Geräten synchronisiert, indem ein externer Remote-Tresor verwendet wird, um Kopien deiner Daten zu erstellen. Eine lokale Kopie verbleibt jederzeit auf deinen Geräten.

Folge der [[Obsidian Sync einrichten|Einrichtungsanleitung]], um Obsidian Sync zu konfigurieren.

## iCloud

**Empfohlene Systeme**: `macOS`, `iOS`, `iPadOS`

iCloud kann verwendet werden, um Vaults zwischen iOS und macOS zu synchronisieren. Allerdings kann **iCloud Drive unter Windows** zu Dateiduplizierung oder -beschädigung führen.

**So erstellst und speicherst du deinen Vault in iCloud Drive**:

- **iCloud Drive aktivieren**:
    - Auf macOS: Gehe zu **Systemeinstellungen → Apple-ID → iCloud → iCloud Drive**.
    - Auf iOS: Gehe zu **Einstellungen → [Dein Name] → iCloud → iCloud Drive**.
- **Einen neuen Vault in iCloud erstellen**:
    - Auf macOS:
        1. Öffne **Obsidian** und wähle **Neuen Vault erstellen**.
        2. Navigiere im Dateiauswahldialog zu **iCloud Drive → Obsidian**.
        3. Erstelle einen Ordner für deinen Vault und benenne ihn.
        4. Wähle **Erstellen**, um den Vorgang abzuschließen.
    - Auf iOS:
        1. Öffne **Obsidian** und tippe auf **Neuen Vault erstellen**.
        2. Gib einen Namen für deinen Vault ein.
        3. Aktiviere **In iCloud speichern**.
        4. Tippe auf **Erstellen**.
- **Den Vault auf einem anderen Apple-Gerät öffnen**:
    - Öffne auf einem anderen macOS- oder iOS-Gerät **Obsidian**, gehe zum [[Vaults verwalten|Vault-Auswahl]] und wähle **Ordner als Vault öffnen**. Navigiere zu **iCloud Drive → Obsidian**.

> [!warning]+ iOS- und iPadOS-Ordnerstandort
> Wenn du iCloud auf mobilen Geräten verwendest, stelle sicher, dass dein Vault am richtigen Ort gespeichert ist: `iCloud Drive/Obsidian/[Dein Vault-Name]`.
>
> Vaults sollten sich innerhalb des **Obsidian**-Ordners in iCloud Drive befinden. Der Ordner rechts mit dem Obsidian-Symbol ist korrekt. Verwende nicht den einfachen Ordner ohne das App-Symbol.
>
> ![[iCloud-folder-location.png#interface]]
>
> Um den Standort deines Vaults zu überprüfen, öffne die **Dateien**-App, tippe auf **Durchsuchen**, wähle **iCloud Drive** unter **Standorte** und bestätige, dass sich dein Vault im **Obsidian**-Ordner befindet. Wenn sich dein Vault an einem anderen Ort befindet, können Synchronisierungsprobleme auftreten.

> [!tip] Best Practices
> - Für **macOS 14 (Sonoma) und früher**: Deaktiviere **Mac-Speicher optimieren** in den iCloud-Einstellungen, um zu verhindern, dass Dateien ausgelagert werden. Diese Einstellung betrifft den gesamten iCloud-Speicher auf dem Gerät, nicht nur Obsidian.
> - Für **macOS 15 (Sequoia)**: Klicke mit der rechten Maustaste auf den **Obsidian**-Ordner in iCloud Drive und wähle **Immer auf diesem Gerät behalten**.

## OneDrive

**Empfohlene Systeme**: `Windows`, `macOS` (eingeschränkte Funktionalität auf Android)

[OneDrive](https://support.microsoft.com/en-us/office/Sync-with-OneDrive-bb89981b-e382-4969-b8fd-d413a90b6db3#ID0EAABAAA=Set_up) ist eine beliebte Cloud-Speicheroption für Windows- und macOS-Benutzer. Es hat jedoch Einschränkungen auf Android und wird für die Synchronisierung von Obsidian-Vaults auf iOS nicht offiziell unterstützt.

> [!info] Dateien offline verfügbar halten
> Bevor du OneDrive für die Synchronisierung verwendest, stelle sicher, dass dein Vault-Ordner als **Immer auf diesem Gerät behalten** markiert ist. Dies verhindert, dass OneDrive Dateien auslagert und Obsidian annimmt, sie seien nicht vorhanden.

**So erstellst und speicherst du deinen Vault in OneDrive**:

1. **OneDrive einrichten**:
   - Auf Windows: Melde dich über die OneDrive-App oder dein Microsoft-Konto an.
   - Auf macOS: Lade die OneDrive-App herunter und melde dich an.
2. **Einen neuen Vault in OneDrive erstellen**:
   - Auf Windows/macOS:
     1. Öffne den **Datei-Explorer** (Windows) oder **Finder** (macOS) und navigiere zu **OneDrive → Dokumente**.
     2. Erstelle einen neuen Ordner (z. B. \"Obsidian Vault\").
     3. Öffne **Obsidian**, wähle **Neuen Vault erstellen** und wähle den OneDrive-Ordner aus.
3. **Den Vault auf einem anderen Gerät öffnen**:
   - Öffne auf einem anderen Gerät **Obsidian**, gehe zum [[Vaults verwalten|Vault-Auswahl]] und wähle **Ordner als Vault öffnen**. Navigiere zu **OneDrive → Dokumente**.

> [!info] Android-Synchronisierung
> OneDrive funktioniert möglicherweise nicht gut für die Android-Synchronisierung. Erwäge die Verwendung von Apps wie [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) oder [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite).

> [!tip] Best Practices
> - Halte deine Vault-Dateien immer **Offline verfügbar**, indem du mit der rechten Maustaste auf den Ordner klickst und **Immer auf diesem Gerät behalten** wählst.
> - Vermeide die Verwendung der OneDrive-Funktion **Dateien bei Bedarf** für Vaults, um Synchronisierungsprobleme zu vermeiden.

## Google Drive

**Empfohlene Systeme**: `Windows`, `macOS`, `Android` (eingeschränkte Funktionalität auf iOS)

[Google Drive](https://support.google.com/drive/answer/10838124?hl=en) ist eine weitere beliebte Cloud-Speicherlösung. Obwohl es für die Synchronisierung von Obsidian-Vaults nicht offiziell unterstützt wird, kannst du Drittanbieter-Apps und Erweiterungen verwenden, um über Geräte hinweg zu synchronisieren.

> [!info] iOS-Unterstützung
> Google Drive wird für die Synchronisierung von Obsidian-Vaults auf iOS nicht offiziell unterstützt. Erwäge die Verwendung einer Drittanbieter-Lösung oder einer Erweiterung für die Synchronisierung auf iOS.

**So erstellst und speicherst du deinen Vault in Google Drive**:

1. **Google Drive einrichten**:
    - Auf Windows oder macOS: Lade die Google Drive-App herunter und melde dich an.
    - Auf Android: Stelle sicher, dass Google Drive aktiviert und angemeldet ist.
2. **Einen neuen Vault in Google Drive erstellen**:
    - Auf Windows/macOS:
        1. Öffne den **Datei-Explorer** (Windows) oder **Finder** (macOS) und navigiere zu **Google Drive**.
        2. Erstelle einen neuen Ordner (z. B. \"Obsidian Vault\").
        3. Öffne **Obsidian**, wähle **Neuen Vault erstellen** und wähle den Google Drive-Ordner aus.
3. **Den Vault auf einem anderen Gerät öffnen**:
    - Öffne auf einem anderen Gerät **Obsidian**, gehe zum [[Vaults verwalten|Vault-Auswahl]] und wähle **Ordner als Vault öffnen**. Navigiere zu deinem Google Drive-Ordner.

> [!tip] Best Practices
> - Setze Vault-Dateien in Google Drive auf **Offline verfügbar**, um Synchronisierungsprobleme durch Auslagerung zu vermeiden.
> - Für iOS erwäge alternative Methoden wie [[Einführung in Obsidian Sync|Obsidian Sync]], [[#iCloud]] oder verwende die Erweiterung **Remotely Save**.

## Syncthing

**Empfohlene Systeme**: `Windows`, `macOS`, `Linux`

Syncthing ist ein dezentrales Dateisynchronisierungstool, das nicht auf Cloud-Speicher angewiesen ist. Es synchronisiert deinen Vault direkt zwischen Geräten über das Netzwerk oder Internet.

> [!info]+ Android-Unterstützung
> Die offizielle Syncthing-Android-App wird nicht mehr gepflegt. Ein Community-Fork namens [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) wird jedoch aktiv weiterentwickelt und kann auf Android-Geräten verwendet werden.

**So erstellst und speicherst du deinen Vault mit Syncthing**:

1. **Syncthing einrichten**:
   - Installiere Syncthing auf jedem Gerät. Informationen zur Installation findest du auf der [Syncthing-Website](https://syncthing.net/).
   - Auf Android installiere [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) über die GitHub-Releases oder F-Droid.
2. **Einen freigegebenen Ordner erstellen und konfigurieren**:
   - Auf allen Geräten:
     1. Öffne Syncthing und erstelle einen freigegebenen Ordner. Setze den Ordnerpfad auf deinen Obsidian-Vault.
     2. Stelle sicher, dass derselbe Ordner auf allen Geräten ausgewählt ist.
     3. Konfiguriere die Ordner-Synchronisierungseinstellungen (z. B. **Senden & Empfangen** für bidirektionale Synchronisierung).
3. **Den Vault in Obsidian öffnen**:
   - Sobald der Ordner auf allen Geräten synchronisiert ist, öffne **Obsidian**, gehe zum [[Vaults verwalten|Vault-Auswahl]] und wähle **Ordner als Vault öffnen**.

> [!info] Geräteverfügbarkeit
> Syncthing funktioniert am besten, wenn mindestens ein Gerät immer eingeschaltet ist, um eine kontinuierliche Synchronisierung sicherzustellen.

> [!tip] Best Practices
> - Für lokale Synchronisierung stelle sicher, dass alle Geräte mit demselben Netzwerk verbunden sind.
> - Schließe `.obsidian` von der Synchronisierung aus, wenn du auf jedem Gerät separate Einstellungen wünschst.
> - Verwende Ignorier-Muster, um die Synchronisierung von temporären oder Backup-Dateien zu vermeiden.

## Git

**Empfohlene Systeme**: `Windows`, `macOS`, `Linux`

**Git** ist ein Versionskontrollsystem, mit dem du Änderungen verfolgen, mit anderen zusammenarbeiten und deine Vaults über Repositories wie GitHub, GitLab oder einen selbst gehosteten Server synchronisieren kannst.

**So synchronisierst du deinen Vault mit Git**:

1. **Ein Remote-Repository einrichten**:
    - Erstelle ein Repository auf einer Git-Hosting-Plattform (z. B. GitHub, GitLab oder einem selbst gehosteten Server).
2. **Deinen Vault synchronisieren**:
    1. Öffne ein Terminal oder eine Git-GUI (z. B. GitKraken, Sourcetree).
    2. Initialisiere ein Git-Repository in deinem Vault-Ordner mit `git init`.
    3. Füge das Remote-Repository hinzu: `git remote add origin [URL]`.
    4. Committe deine Änderungen: `git add .` und `git commit -m "Deine Nachricht"`.
    5. Pushe die Änderungen: `git push origin main`.
3. **Änderungen auf anderen Geräten abrufen**:
    - Klone das Repository auf einem anderen Gerät und rufe Änderungen mit `git pull origin main` ab.

> [!info] Manuelle Synchronisierung erforderlich
> Git bietet starke Versionskontrolle, aber die Synchronisierung erfolgt nicht automatisch. Du musst Änderungen manuell pushen und pullen.

## iPhone- und iPad-Synchronisierung

**Empfohlene Optionen**:
- [[Einführung in Obsidian Sync|Obsidian Sync]]
- [[#iCloud]]

> [!info] Vermeide die Kombination von Sync-Diensten
> Vermeide es, denselben Vault über mehrere Dienste zu synchronisieren (z. B. gleichzeitig Obsidian Sync und iCloud zu verwenden), um Datenkonflikte oder -beschädigung zu verhindern.

**Nicht unterstützte Optionen**:
Die folgenden Dienste werden auf iOS nicht offiziell unterstützt, aber Benutzer haben Workarounds mit Drittanbieter-Tools oder Erweiterungen gefunden:

- Dropbox
- Google Drive
- OneDrive
- Syncthing

Einige Benutzer haben erfolgreich Erweiterungen wie **Remotely Save** oder **LiveSync** verwendet, um Vaults auf iOS zu synchronisieren. Diese Methoden werden jedoch nicht offiziell unterstützt und die Ergebnisse können variieren.

### Working Copy

**Empfohlene Systeme**: `iOS`
**Erfordert**: [[#Git]]

**Working Copy** ist ein Git-Client für iOS, mit dem du Änderungen in einem Git-Repository klonen, committen und pushen kannst. Es funktioniert gut für die Synchronisierung von Obsidian-Vaults über Git, obwohl einige Funktionen einen kostenpflichtigen In-App-Kauf erfordern.

**So synchronisierst du deinen Vault mit Working Copy**:

1. **Working Copy installieren**:
    - Lade die **[Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)**-App auf deinem iPhone oder iPad herunter.
2. **Dein Git-Repository klonen**:
    - Öffne Working Copy, tippe auf **Repository hinzufügen** und gib deine Repository-URL ein (z. B. GitHub, GitLab).
3. **Repository mit Obsidian verknüpfen**:
    - Verknüpfe den geklonten Repository-Ordner mit einem leeren Vault in **Obsidian**.
4. **Änderungen committen und pushen**:
    - Verwende nach dem Bearbeiten von Notizen in Obsidian Working Copy, um Änderungen an das Remote-Repository zu **committen** und zu **pushen**.
    - Auf anderen Geräten pulle Änderungen mit Git, um den Vault zu synchronisieren.

> [!info] Community-Nutzung
> Obwohl Working Copy nicht offiziell unterstützt wird, haben viele Benutzer es erfolgreich zur Synchronisierung von Vaults mit Git verwendet.

## Häufig gestellte Fragen

**Warum wird mein bevorzugter Synchronisierungsdienst nicht offiziell unterstützt?**

Im Gegensatz zu einigen Notiz-Apps, die jeweils auf eine Datei zugreifen, benötigt Obsidian Zugriff auf den gesamten Vault für seine Funktionen (z. B. das Aktualisieren von Links beim Umbenennen einer Datei). Dies erschwert es einigen Diensten, zuverlässig mit Obsidian zu funktionieren.

**Warum muss ich Dateien „Offline verfügbar" halten?**

Wenn Dienste wie OneDrive oder iCloud Dateien auslagern (z. B. über **Dateien bei Bedarf** oder **Mac-Speicher optimieren**), kann Obsidian nicht darauf zugreifen, was zu Synchronisierungsproblemen führt. Markiere deinen Vault-Ordner als **Immer auf diesem Gerät behalten** (OneDrive) oder stelle sicher, dass **Immer auf diesem Gerät behalten** aktiviert ist (iCloud).

**Wie verwalte ich unterschiedliche Konfigurationen für meine Vaults?**

Obsidian ermöglicht es dir, den Konfigurationsordner pro Gerät anzupassen, indem du die Funktion [[Konfigurationsordner|Konfigurationsordner]] verwendest.
