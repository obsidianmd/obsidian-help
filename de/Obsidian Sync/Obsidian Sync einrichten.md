---
permalink: sync/setup
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Du hast Obsidian Sync erworben und möchtest loslegen. Diese Anleitung hilft dir beim Einrichten und Anpassen deiner Obsidian Sync-Einstellungen für den täglichen Gebrauch.
---
Du hast Obsidian Sync erworben und möchtest loslegen. Diese Anleitung hilft dir beim Einrichten und Anpassen deiner Obsidian Sync-Einstellungen für den täglichen Gebrauch.

- **Neu bei Obsidian Sync?** Siehe: [[#Obsidian Sync zum ersten Mal einrichten]]
- **Ein zweites Gerät verbinden?** Siehe: [[#Einen Remote-Tresor auf einem anderen Gerät synchronisieren]]
- **Änderungen vornehmen?** Siehe: [[#Deine Remote-Tresore verwalten]]

## Obsidian Sync zum ersten Mal einrichten

In diesem Abschnitt erstellst du einen neuen [[Lokale und Remote-Tresore|Remote-Tresor]] und verbindest ihn mit einem bestehenden lokalen Vault. Du musst keinen neuen, leeren lokalen Vault erstellen, um Obsidian Sync hierfür zu nutzen.

> [!info] Befindet sich dein aktueller Vault in einem iCloud-, OneDrive-, Dropbox- oder anderem Synchronisierungsordner? Falls **ja**, oder du dir **unsicher** bist, lies bitte [[Häufig gestellte Fragen#Kann ich eine Drittanbieter-Synchronisierung mit Obsidian Sync verwenden?|dies]] und [[Zu Obsidian Sync wechseln]], bevor du fortfährst.

**Voraussetzungen**

- Ein Obsidian-Konto. Falls du noch keins hast, [jetzt anmelden](https://obsidian.md/auth?returnto=%2Faccount%2Fsync#signup).
- Ein aktives Obsidian Sync-[[Tarife und Speicherlimits|Abonnement]]. Falls du noch keins hast, abonniere es über [dein Konto-Dashboard](https://obsidian.md/account/sync).
- **Empfohlen**: Ein eingerichtetes [[Obsidian-Dateien sichern|Backup-System]] für deine Obsidian-Dateien. Ein Synchronisierungsdienst ist kein Backup.

### Mit deinem Obsidian-Konto anmelden

1. Öffne die **[[Einstellungen]]**.
2. Wähle in der Seitenleiste **Allgemein**.
3. Wähle unter **Konto → Dein Nutzerkonto** die Option **Anmelden**.
4. Gib unter **E-Mail** deine E-Mail-Adresse ein.
5. Gib unter **Passwort** dein Passwort ein.
6. Wähle **Anmelden**.

### Obsidian Sync aktivieren

1. Öffne die **[[Einstellungen]]**.
2. Wähle in der Seitenleiste unter **Optionen** den Punkt **Obsidian-Erweiterungen**.
3. Aktiviere **Sync**.

### Einen neuen Remote-Tresor erstellen

1. Öffne die **[[Einstellungen]]**.
2. Wähle in der Seitenleiste **Sync**.
3. Wähle neben **Remote-Tresor** die Option **Auswählen**.
4. Wähle **Neuen Vault erstellen**.
5. Gib unter **Vault-Name** den Namen des Remote-Tresors ein.
6. Wähle unter **Region** deine Server-[[#Regionale Sync-Server|Region]] für deinen Remote-Tresor.
7. Wähle unter **Passwort für Verschlüsselung** ein Passwort für deinen Vault. Dies erstellt einen Ende-zu-Ende-verschlüsselten Vault. Das Vault-Passwort ist von deinem Obsidian-Konto getrennt und kann für jeden deiner Vaults unterschiedlich sein. Weitere Informationen findest du unter [[Sicherheit und Datenschutz]].
8. Wähle **Erstellen**.

### Mit einem Remote-Tresor verbinden

1. Wähle **Verbinden** neben deinem neu erstellten Vault.
2. Gib das Passwort ein, das du für den Vault konfiguriert hast, im Feld **Passwort für Verschlüsselung**, wenn du dich für [[Obsidian Sync/Sicherheit und Datenschutz#Was bedeutet Ende-zu-Ende-Verschlüsselung?|Ende-zu-Ende-Verschlüsselung]] entschieden hast.
3. Wähle **Vault entsperren**.
4. **Starte die Synchronisierung noch nicht.** Überprüfe deine Sync-Einstellungen unter [[#Obsidian Sync-Einstellungen anpassen|Obsidian Sync-Einstellungen anpassen]].
    - Wenn du sofort mit der Synchronisierung beginnen möchtest, fahre mit [[#Synchronisierung mit Obsidian Sync starten|Synchronisierung mit Obsidian Sync starten]] fort.
5. Falls du es noch nicht getan hast, schließe das Pop-up-Fenster, das dich auffordert, **Ordner auszuschließen** und die **Synchronisierung zu starten**. Fahre mit dem nächsten Schritt fort.

#### Obsidian Sync-Einstellungen anpassen

1. Navigiere bei Bedarf zu **[[Einstellungen]]** → **Sync**.
2. Falls noch kein Gerätename hinzugefügt wurde, füge einen hinzu, um das Lesen deiner Sync-Logs zu erleichtern!
3. Schalte die Einstellungen unter **Selektive Synchronisierung** und **Vault-Konfiguration synchronisieren** um, um anzugeben, welche Elemente mit dem Remote-Tresor synchronisiert werden sollen.
    - **Hinweis**: Wenn du dich kürzlich von einem Remote-Tresor getrennt hast und dich ohne Neustart der Anwendung erneut verbindest, sind einige Einstellungen möglicherweise bereits aktiviert.
4. Wenn du Änderungen an Einstellungen vorgenommen hast, starte Obsidian vollständig neu.
5. Kehre nach dem Neustart von Obsidian zu **[[Einstellungen]]** → **Sync** zurück.

#### Synchronisierung mit Obsidian Sync starten

Wenn du die Synchronisierung nach dem Verbinden mit einem Remote-Tresor startest, siehst du eine Schaltfläche **Synchronisierung starten**. Wähle diese Schaltfläche, um die Synchronisierung zu beginnen.

Wenn du die Synchronisierung nach dem Anpassen der Obsidian Sync-Einstellungen und dem Neustart der Anwendung startest, siehst du eine Schaltfläche **Fortfahren** in den Sync-Einstellungen. Wähle diese Schaltfläche, um die Synchronisierung zu beginnen.

> [!done] Synchronisierungsstatus
> Wenn Obsidian Sync abgeschlossen ist, erscheint ein grüner Kreis mit einem Häkchen ![[obsidian-icon-sync-synced.svg#icon]] in der unteren rechten Ecke (Desktop) oder in der rechten Seitenleiste (mobil). Das Sync-Log zeigt ebenfalls „Fully Synced" als eine seiner neuesten Meldungen an.
>
> Weitere Details zu Sync-Status findest du unter [[Statussymbol und Meldungen]].
^obsidian-sync-status

Um weitere Geräte mit deinem neu erstellten und synchronisierten Remote-Tresor zu verbinden, fahre mit [[Obsidian Sync einrichten#Einen Remote-Tresor auf einem anderen Gerät synchronisieren|Einen Remote-Tresor auf einem anderen Gerät synchronisieren]] fort.

Um mehr über Einstellungen und Dateien zu erfahren, fahre mit [[Sync-Einstellungen und selektive Synchronisierung]] fort.

## Einen Remote-Tresor auf einem anderen Gerät synchronisieren

In diesem Abschnitt hast du bereits einen Remote-Tresor erstellt und Daten dorthin hochgeladen. Jetzt möchtest du deine anderen Geräte damit verbinden.

**Voraussetzungen**
- Ein Obsidian-Konto. Falls du noch keins hast, [jetzt anmelden](https://obsidian.md/account#mode=signup).
- Ein aktives Obsidian Sync-Abonnement. Falls du noch keins hast, abonniere es über [dein Konto-Dashboard](https://obsidian.md/account).
- Sync aktiviert in den [[Obsidian-Erweiterungen]]-Einstellungen.
- Ein aktiver Remote-Tresor. Falls du noch keinen erstellt hast, erstelle bitte zuerst einen [[Obsidian Sync einrichten#Einen neuen Remote-Tresor erstellen|Remote-Tresor]].
- **Empfohlen**: Ein eingerichtetes [[Obsidian-Dateien sichern|Backup-System]] für deine Obsidian-Dateien auf deinem meistgenutzten Gerät. Ein Synchronisierungsdienst ist kein Backup.

### Deinen Vault über die Vault-Auswahl synchronisieren

Wenn du Obsidian frisch installiert hast, wird dir beim Öffnen des Programms die [[Vaults verwalten|Vault-Auswahl]] angezeigt. Um einen neuen lokalen Vault aus dem Inhalt eines Remote-Tresors zu erstellen, führe die folgenden Schritte aus.

1. Öffne Obsidian (vorausgesetzt, du öffnest es zum ersten Mal)
2. Wähle je nach Installation eine der Optionen:
	1. **Desktop**: Wähle im Abschnitt „Mit Obsidian Sync verbinden" die Option **Einrichten**
	2. **Mobil/Tablet**: **Obsidian Sync einrichten**
3. Melde dich mit deinem Obsidian-Benutzerkonto an
	1. Falls [[Zwei-Faktor-Authentifizierung|2FA]] eingerichtet ist, gib deinen 2FA-Code ein.
4. Du wirst gefragt, welchen Remote-Tresor du mit diesem Gerät synchronisieren möchtest. Wähle **Verbinden**.
5. Du wirst aufgefordert, einen Namen für den lokalen Vault zu wählen, der auf dem Gerät erstellt wird, um diese Daten zu speichern. Gib den Namen deiner Wahl ein.
	1. Wenn du [[Obsidian URI]]s verwendest, solltest du denselben Namen wie den lokalen Vault auf deinem anderen Gerät verwenden.
6. Wähle **Erstellen**.
7. Das Fenster der Remote-Tresore erscheint kurz, während Obsidian Sync sich mit deinem Server verbindet und das Abonnement validiert. Danach wird dir ein Fenster *Verbindung einrichten* angezeigt.
	1. Es wird dringend empfohlen, dieses Fenster zu schließen oder nach unten zu wischen und zuerst die [[#Obsidian Sync-Einstellungen anpassen|Obsidian Sync-Einstellungen anzupassen]].
	2. Wenn du Sync-Einstellungen änderst, lade Obsidian bitte neu oder starte es neu.

### Deinen Vault über die Obsidian-Einstellungen synchronisieren

Wenn du bereits einen lokalen Vault auf diesem Gerät erstellt hast und diesen lokalen Vault mit einem Remote-Tresor verbinden möchtest, sind die Anweisungen sehr ähnlich wie bei [[#Obsidian Sync zum ersten Mal einrichten]].

![[Obsidian Sync einrichten#Mit deinem Obsidian-Konto anmelden]]

![[Obsidian Sync einrichten#Obsidian Sync aktivieren]]

#### Mit einem Remote-Tresor verbinden

1. Öffne die **[[Einstellungen]]**.
2. Wähle in der Seitenleiste **Sync**.
3. Klicke neben **Remote-Tresor auswählen** auf **Auswählen**.
4. Klicke neben dem Remote-Tresor, mit dem du dich verbinden möchtest, auf **Verbinden**.
5. Gib unter **Passwort für Verschlüsselung** das Passwort für deinen Vault ein, falls du eines hast.
6. Du wirst aufgefordert, die Synchronisierung zu starten. Es wird empfohlen, zu warten und zuerst deine Sync-Einstellungen anzupassen. Wenn du den gesamten Vault so wie er ist auf das Gerät synchronisieren möchtest, kannst du die **Synchronisierung starten**.

> [!warning] Wenn der Vault auf deinem Gerät bereits einige Notizen enthält (nicht empfohlen), wirst du gewarnt, dass diese Notizen vor dem Fortfahren zusammengeführt werden. Konflikte werden durch [[Obsidian Sync Fehlerbehebung#Konfliktlösung|Syncs Konfliktlösung]] gelöst.

![[Obsidian Sync einrichten#Obsidian Sync-Einstellungen anpassen]]

![[Obsidian Sync einrichten#Synchronisierung mit Obsidian Sync starten]]

## Deine Remote-Tresore verwalten

Du hast einen Remote-Tresor erstellt und dich damit verbunden. Möglicherweise hast du diesen Remote-Tresor auch mit mehreren Geräten synchronisiert. Dieser Abschnitt behandelt einige der anderen häufigen Anweisungen, die du bei der Verwaltung dieses Remote-Tresors benötigen könntest.

### Von einem Remote-Tresor trennen

1. Öffne die Obsidian-**[[Einstellungen]]**.
2. Wähle **Sync** in der Seitenleiste.
3. Klicke auf die Schaltfläche **Verbindung trennen** neben Remote-Tresore.

Du bist jetzt vom Remote-Tresor getrennt und synchronisierst auf diesem Gerät nicht mehr.

### Einen Remote-Tresor löschen

> [!tip] Das Löschen eines Remote-Tresors löscht nicht deine lokalen Daten auf deinem Gerät.

1. Öffne die **[[Einstellungen]]**.
2. Wähle in der Seitenleiste **Sync**.
3. Wähle **Verwalten** neben Remote-Tresore. Ein Fenster mit deiner Liste der Remote-Tresore wird geöffnet.
4. Wähle das Papierkorb-Symbol ![[lucide-trash-2.svg#icon]] neben dem Remote-Tresor, den du löschen möchtest.
5. Bestätige das Löschen, indem du die rote Schaltfläche **Löschen** wählst.
6. Dein Remote-Tresor wurde gelöscht.

> [!info] Wenn kein Papierkorb-Symbol sichtbar ist, musst du dich möglicherweise zuerst vom Remote-Tresor trennen. Wähle nach dem Trennen die Schaltfläche **Auswählen**, um die Liste der Remote-Tresore zu öffnen.

### Regionale Sync-Server

Obsidian Sync ermöglicht es dir, den Hosting-Standort für deinen Remote-Tresor auszuwählen. Wenn du Version `1.4.16` oder älter von Obsidian verwendest, wird der Standort automatisch für dich ausgewählt.

Wenn du dir unsicher bist, in welcher Region sich dein aktueller Vault befindet, sieh dir [[Obsidian Sync/Sicherheit und Datenschutz#Wo finde ich meinen aktuellen Sync-Server und wo wird er gehostet?|Wo finde ich meinen aktuellen Sync-Server und wo wird er gehostet?]] als Orientierungshilfe an.

![[sync-regional-sync-servers.png#interface|300]]

Nach der Auswahl eines Standorts **kann** dein Rechenzentrum nicht ohne erneutes Hochladen deiner Daten auf einen anderen Server verschoben werden. Um die Region zu wechseln, folge der [[Sync-Regionen|Anleitung zu Vault-Sync-Regionen]].

![[Obsidian Sync/Sicherheit und Datenschutz#^sync-geo-regions]]

## Nächste Schritte

Hier sind einige empfohlene Dokumente zum Weiterlesen.

- Erfahre mehr über das [[Sync-Einstellungen und selektive Synchronisierung|Auswählen von Dateien und Einstellungen zur Synchronisierung]].
- Erfahre, was passiert, wenn dein Remote-Tresor [[Versionsgeschichte|voll wird]].
- [[An einem gemeinsamen Tresor zusammenarbeiten]] mit einem anderen Obsidian Sync-Benutzer.
- Sieh dir die [[Häufig gestellte Fragen|Sync-FAQ]] für Antworten auf häufige Fragen an.
