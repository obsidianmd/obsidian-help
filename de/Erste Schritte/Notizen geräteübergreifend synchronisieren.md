---
permalink: sync-notes
cssclasses:
  - soft-embed
publish: true
mobile: true
description: >-
  So synchronisieren Sie Ihre Obsidian-Notizen über Geräte und Plattformen
  hinweg.
---
Obsidian speichert Notizen lokal auf Ihrem Gerät, sodass Sie jederzeit darauf zugreifen können, auch offline. Um auf Ihre Notizen auf mehreren Geräten zugreifen zu können, müssen Sie eine Synchronisierungsmethode einrichten.

Diese Anleitung behandelt gängige Synchronisierungsmethoden, einschließlich Tipps zur Vermeidung von Datenverlust und für ein reibungsloses Erlebnis.

Wir empfehlen außerdem, unsere [[Obsidian-Dateien sichern|Backup-Anleitung]] zu lesen, um Ihre Daten zu schützen.

## Synchronisierungsmethoden

Bei Obsidian werden Ihre Daten einfach als Dateien in einem Ordner gespeichert, der als [[Lokale und Remote-Tresore|Vault]] bezeichnet wird. Das bedeutet, es gibt viele Möglichkeiten, Ihre Daten zu synchronisieren.

Dies sind einige häufig verwendete Synchronisierungsmethoden, die von Mitgliedern der [Obsidian-Community](https://obsidian.md/community) berichtet werden:

1. **Erstanbieter-Sync**: [[#Obsidian Sync]]
2. **Drittanbieter-Cloud-Sync**: [[#iCloud]], [[#OneDrive]] und [[#Google Drive]]
3. **Lokaler Sync**: [[#Syncthing]]
4. **Versionskontrolle**: [[#Git]] und [[#Working Copy]]

## Obsidian Sync

**Empfohlene Systeme**: `Windows`, `macOS`, `Linux`, `iOS`, `Android`

Die einfachste und offiziell unterstützte Synchronisierungsmethode ist unsere Erstanbieter-Lösung: [[Einführung in Obsidian Sync|Obsidian Sync]].

Obsidian Sync hält Ihre Vaults auf allen Geräten synchronisiert, indem ein externer Remote-Tresor verwendet wird, um Kopien Ihrer Daten zu erstellen. Eine lokale Kopie verbleibt jederzeit auf Ihren Geräten.

Folgen Sie der [[Obsidian Sync einrichten|Einrichtungsanleitung]], um Obsidian Sync zu konfigurieren.

## iCloud

**Empfohlene Systeme**: `macOS`, `iOS`, `iPadOS`

iCloud kann verwendet werden, um Vaults zwischen iOS und macOS zu synchronisieren. Allerdings kann **iCloud Drive unter Windows** zu Dateiduplizierung oder -beschädigung führen.

**So erstellen und speichern Sie Ihren Vault in iCloud Drive**:

- **iCloud Drive aktivieren**:
    - Auf macOS: Gehen Sie zu **Systemeinstellungen → Apple-ID → iCloud → iCloud Drive**.
    - Auf iOS: Gehen Sie zu **Einstellungen → [Ihr Name] → iCloud → iCloud Drive**.
- **Einen neuen Vault in iCloud erstellen**:
    - Auf macOS:
        1. Öffnen Sie **Obsidian** und wählen Sie **Neuen Vault erstellen**.
        2. Navigieren Sie im Dateiauswahldialog zu **iCloud Drive → Obsidian**.
        3. Erstellen Sie einen Ordner für Ihren Vault und benennen Sie ihn.
        4. Wählen Sie **Erstellen**, um den Vorgang abzuschließen.
    - Auf iOS:
        1. Öffnen Sie **Obsidian** und tippen Sie auf **Neuen Vault erstellen**.
        2. Geben Sie einen Namen für Ihren Vault ein.
        3. Aktivieren Sie **In iCloud speichern**.
        4. Tippen Sie auf **Erstellen**.
- **Den Vault auf einem anderen Apple-Gerät öffnen**: 
    - Öffnen Sie auf einem anderen macOS- oder iOS-Gerät **Obsidian**, gehen Sie zum [[Vaults verwalten|Vault-Auswahl]] und wählen Sie **Ordner als Vault öffnen**. Navigieren Sie zu **iCloud Drive → Obsidian**.

> [!warning]+ iOS- und iPadOS-Ordnerstandort
> Wenn Sie iCloud auf mobilen Geräten verwenden, stellen Sie sicher, dass Ihr Vault am richtigen Ort gespeichert ist: `iCloud Drive/Obsidian/[Ihr Vault-Name]`.
> 
> Vaults sollten sich innerhalb des **Obsidian**-Ordners in iCloud Drive befinden. Der Ordner rechts mit dem Obsidian-Symbol ist korrekt. Verwenden Sie nicht den einfachen Ordner ohne das App-Symbol.
> 
> ![[iCloud-folder-location.png#interface]]
> 
> Um den Standort Ihres Vaults zu überprüfen, öffnen Sie die **Dateien**-App, tippen Sie auf **Durchsuchen**, wählen Sie **iCloud Drive** unter **Standorte** und bestätigen Sie, dass sich Ihr Vault im **Obsidian**-Ordner befindet. Wenn sich Ihr Vault an einem anderen Ort befindet, können Synchronisierungsprobleme auftreten.

> [!tip] Best Practices
> - Für **macOS 14 (Sonoma) und früher**: Deaktivieren Sie **Mac-Speicher optimieren** in den iCloud-Einstellungen, um zu verhindern, dass Dateien ausgelagert werden. Diese Einstellung betrifft den gesamten iCloud-Speicher auf dem Gerät, nicht nur Obsidian.
> - Für **macOS 15 (Sequoia)**: Klicken Sie mit der rechten Maustaste auf den **Obsidian**-Ordner in iCloud Drive und wählen Sie **Immer auf diesem Gerät behalten**.

## OneDrive

**Empfohlene Systeme**: `Windows`, `macOS` (eingeschränkte Funktionalität auf Android)

[OneDrive](https://support.microsoft.com/en-us/office/Sync-with-OneDrive-bb89981b-e382-4969-b8fd-d413a90b6db3#ID0EAABAAA=Set_up) ist eine beliebte Cloud-Speicheroption für Windows- und macOS-Benutzer. Es hat jedoch Einschränkungen auf Android und wird für die Synchronisierung von Obsidian-Vaults auf iOS nicht offiziell unterstützt.

> [!info] Dateien offline verfügbar halten
> Bevor Sie OneDrive für die Synchronisierung verwenden, stellen Sie sicher, dass Ihr Vault-Ordner als **Immer auf diesem Gerät behalten** markiert ist. Dies verhindert, dass OneDrive Dateien auslagert und Obsidian annimmt, sie seien nicht vorhanden.

**So erstellen und speichern Sie Ihren Vault in OneDrive**:

1. **OneDrive einrichten**:
   - Auf Windows: Melden Sie sich über die OneDrive-App oder Ihr Microsoft-Konto an.
   - Auf macOS: Laden Sie die OneDrive-App herunter und melden Sie sich an.
2. **Einen neuen Vault in OneDrive erstellen**:
   - Auf Windows/macOS:
     1. Öffnen Sie den **Datei-Explorer** (Windows) oder **Finder** (macOS) und navigieren Sie zu **OneDrive → Dokumente**.
     2. Erstellen Sie einen neuen Ordner (z. B. \"Obsidian Vault\").
     3. Öffnen Sie **Obsidian**, wählen Sie **Neuen Vault erstellen** und wählen Sie den OneDrive-Ordner aus.
3. **Den Vault auf einem anderen Gerät öffnen**:
   - Öffnen Sie auf einem anderen Gerät **Obsidian**, gehen Sie zum [[Vaults verwalten|Vault-Auswahl]] und wählen Sie **Ordner als Vault öffnen**. Navigieren Sie zu **OneDrive → Dokumente**.

> [!info] Android-Synchronisierung
> OneDrive funktioniert möglicherweise nicht gut für die Android-Synchronisierung. Erwägen Sie die Verwendung von Apps wie [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) oder [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite).

> [!tip] Best Practices
> - Halten Sie Ihre Vault-Dateien immer **Offline verfügbar**, indem Sie mit der rechten Maustaste auf den Ordner klicken und **Immer auf diesem Gerät behalten** wählen.
> - Vermeiden Sie die Verwendung der OneDrive-Funktion **Dateien bei Bedarf** für Vaults, um Synchronisierungsprobleme zu vermeiden.

## Google Drive

**Empfohlene Systeme**: `Windows`, `macOS`, `Android` (eingeschränkte Funktionalität auf iOS)

[Google Drive](https://support.google.com/drive/answer/10838124?hl=en) ist eine weitere beliebte Cloud-Speicherlösung. Obwohl es für die Synchronisierung von Obsidian-Vaults nicht offiziell unterstützt wird, können Sie Drittanbieter-Apps und Erweiterungen verwenden, um über Geräte hinweg zu synchronisieren.

> [!info] iOS-Unterstützung
> Google Drive wird für die Synchronisierung von Obsidian-Vaults auf iOS nicht offiziell unterstützt. Erwägen Sie die Verwendung einer Drittanbieter-Lösung oder einer Erweiterung für die Synchronisierung auf iOS.

**So erstellen und speichern Sie Ihren Vault in Google Drive**:

1. **Google Drive einrichten**:
    - Auf Windows oder macOS: Laden Sie die Google Drive-App herunter und melden Sie sich an.
    - Auf Android: Stellen Sie sicher, dass Google Drive aktiviert und angemeldet ist.
2. **Einen neuen Vault in Google Drive erstellen**:
    - Auf Windows/macOS:
        1. Öffnen Sie den **Datei-Explorer** (Windows) oder **Finder** (macOS) und navigieren Sie zu **Google Drive**.
        2. Erstellen Sie einen neuen Ordner (z. B. \"Obsidian Vault\").
        3. Öffnen Sie **Obsidian**, wählen Sie **Neuen Vault erstellen** und wählen Sie den Google Drive-Ordner aus.
3. **Den Vault auf einem anderen Gerät öffnen**:
    - Öffnen Sie auf einem anderen Gerät **Obsidian**, gehen Sie zum [[Vaults verwalten|Vault-Auswahl]] und wählen Sie **Ordner als Vault öffnen**. Navigieren Sie zu Ihrem Google Drive-Ordner.

> [!tip] Best Practices
> - Setzen Sie Vault-Dateien in Google Drive auf **Offline verfügbar**, um Synchronisierungsprobleme durch Auslagerung zu vermeiden.
> - Für iOS erwägen Sie alternative Methoden wie [[Einführung in Obsidian Sync|Obsidian Sync]], [[#iCloud]] oder verwenden Sie die Erweiterung **Remotely Save**.

## Syncthing

**Empfohlene Systeme**: `Windows`, `macOS`, `Linux`

Syncthing ist ein dezentrales Dateisynchronisierungstool, das nicht auf Cloud-Speicher angewiesen ist. Es synchronisiert Ihren Vault direkt zwischen Geräten über das Netzwerk oder Internet.

> [!info]+ Android-Unterstützung
> Die offizielle Syncthing-Android-App wird nicht mehr gepflegt. Ein Community-Fork namens [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) wird jedoch aktiv weiterentwickelt und kann auf Android-Geräten verwendet werden.

**So erstellen und speichern Sie Ihren Vault mit Syncthing**:

1. **Syncthing einrichten**:
   - Installieren Sie Syncthing auf jedem Gerät. Informationen zur Installation finden Sie auf der [Syncthing-Website](https://syncthing.net/).
   - Auf Android installieren Sie [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) über die GitHub-Releases oder F-Droid.
2. **Einen freigegebenen Ordner erstellen und konfigurieren**:
   - Auf allen Geräten:
     1. Öffnen Sie Syncthing und erstellen Sie einen freigegebenen Ordner. Setzen Sie den Ordnerpfad auf Ihren Obsidian-Vault.
     2. Stellen Sie sicher, dass derselbe Ordner auf allen Geräten ausgewählt ist.
     3. Konfigurieren Sie die Ordner-Synchronisierungseinstellungen (z. B. **Senden & Empfangen** für bidirektionale Synchronisierung).
3. **Den Vault in Obsidian öffnen**:
   - Sobald der Ordner auf allen Geräten synchronisiert ist, öffnen Sie **Obsidian**, gehen Sie zum [[Vaults verwalten|Vault-Auswahl]] und wählen Sie **Ordner als Vault öffnen**.

> [!info] Geräteverfügbarkeit
> Syncthing funktioniert am besten, wenn mindestens ein Gerät immer eingeschaltet ist, um eine kontinuierliche Synchronisierung sicherzustellen.

> [!tip] Best Practices
> - Für lokale Synchronisierung stellen Sie sicher, dass alle Geräte mit demselben Netzwerk verbunden sind.
> - Schließen Sie `.obsidian` von der Synchronisierung aus, wenn Sie auf jedem Gerät separate Einstellungen wünschen.
> - Verwenden Sie Ignorier-Muster, um die Synchronisierung von temporären oder Backup-Dateien zu vermeiden.

## Git

**Empfohlene Systeme**: `Windows`, `macOS`, `Linux`

**Git** ist ein Versionskontrollsystem, mit dem Sie Änderungen verfolgen, mit anderen zusammenarbeiten und Ihre Vaults über Repositories wie GitHub, GitLab oder einen selbst gehosteten Server synchronisieren können.

**So synchronisieren Sie Ihren Vault mit Git**:

1. **Ein Remote-Repository einrichten**:
    - Erstellen Sie ein Repository auf einer Git-Hosting-Plattform (z. B. GitHub, GitLab oder einem selbst gehosteten Server).
2. **Ihren Vault synchronisieren**:
    1. Öffnen Sie ein Terminal oder eine Git-GUI (z. B. GitKraken, Sourcetree).
    2. Initialisieren Sie ein Git-Repository in Ihrem Vault-Ordner mit `git init`.
    3. Fügen Sie das Remote-Repository hinzu: `git remote add origin [URL]`.
    4. Committen Sie Ihre Änderungen: `git add .` und `git commit -m "Ihre Nachricht"`.
    5. Pushen Sie die Änderungen: `git push origin main`.
3. **Änderungen auf anderen Geräten abrufen**:
    - Klonen Sie das Repository auf einem anderen Gerät und rufen Sie Änderungen mit `git pull origin main` ab.

> [!info] Manuelle Synchronisierung erforderlich
> Git bietet starke Versionskontrolle, aber die Synchronisierung erfolgt nicht automatisch. Sie müssen Änderungen manuell pushen und pullen.

## iPhone- und iPad-Synchronisierung

**Empfohlene Optionen**:
- [[Einführung in Obsidian Sync|Obsidian Sync]]
- [[#iCloud]]

> [!info] Vermeiden Sie die Kombination von Sync-Diensten
> Vermeiden Sie es, denselben Vault über mehrere Dienste zu synchronisieren (z. B. gleichzeitig Obsidian Sync und iCloud zu verwenden), um Datenkonflikte oder -beschädigung zu verhindern.

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

**Working Copy** ist ein Git-Client für iOS, mit dem Sie Änderungen in einem Git-Repository klonen, committen und pushen können. Es funktioniert gut für die Synchronisierung von Obsidian-Vaults über Git, obwohl einige Funktionen einen kostenpflichtigen In-App-Kauf erfordern.

**So synchronisieren Sie Ihren Vault mit Working Copy**:

1. **Working Copy installieren**:
    - Laden Sie die **[Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)**-App auf Ihrem iPhone oder iPad herunter.
2. **Ihr Git-Repository klonen**:
    - Öffnen Sie Working Copy, tippen Sie auf **Repository hinzufügen** und geben Sie Ihre Repository-URL ein (z. B. GitHub, GitLab).
3. **Repository mit Obsidian verknüpfen**:
    - Verknüpfen Sie den geklonten Repository-Ordner mit einem leeren Vault in **Obsidian**.
4. **Änderungen committen und pushen**:
    - Verwenden Sie nach dem Bearbeiten von Notizen in Obsidian Working Copy, um Änderungen an das Remote-Repository zu **committen** und zu **pushen**.
    - Auf anderen Geräten pullen Sie Änderungen mit Git, um den Vault zu synchronisieren.

> [!info] Community-Nutzung
> Obwohl Working Copy nicht offiziell unterstützt wird, haben viele Benutzer es erfolgreich zur Synchronisierung von Vaults mit Git verwendet.

## Häufig gestellte Fragen

**Warum wird mein bevorzugter Synchronisierungsdienst nicht offiziell unterstützt?**

Im Gegensatz zu einigen Notiz-Apps, die jeweils auf eine Datei zugreifen, benötigt Obsidian Zugriff auf den gesamten Vault für seine Funktionen (z. B. das Aktualisieren von Links beim Umbenennen einer Datei). Dies erschwert es einigen Diensten, zuverlässig mit Obsidian zu funktionieren.

**Warum muss ich Dateien „Offline verfügbar" halten?**

Wenn Dienste wie OneDrive oder iCloud Dateien auslagern (z. B. über **Dateien bei Bedarf** oder **Mac-Speicher optimieren**), kann Obsidian nicht darauf zugreifen, was zu Synchronisierungsproblemen führt. Markieren Sie Ihren Vault-Ordner als **Immer auf diesem Gerät behalten** (OneDrive) oder stellen Sie sicher, dass **Immer auf diesem Gerät behalten** aktiviert ist (iCloud).

**Wie verwalte ich unterschiedliche Konfigurationen für meine Vaults?**

Obsidian ermöglicht es Ihnen, den Konfigurationsordner pro Gerät anzupassen, indem Sie die Funktion [[Konfigurationsordner|Konfigurationsordner]] verwenden.
