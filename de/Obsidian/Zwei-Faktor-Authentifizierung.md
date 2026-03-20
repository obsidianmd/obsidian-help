---
permalink: 2fa
---
Wenn du ein [Obsidian-Konto](https://obsidian.md/account) hast, kannst du die Zwei-Faktor-Authentifizierung (2FA) aktivieren, um dein Konto mit einem zweiten Verifizierungsschritt zu schützen.

## 2FA aktivieren

- Melde dich über deinen Webbrowser bei [deinem Obsidian-Konto](https://obsidian.md/account/profile) an.
- Gehe im Abschnitt **Profil** zu **2-Faktor-Authentifizierung** und wähle **Aktivieren**.
- Ein Popup-Fenster erscheint und fordert dich auf, eine Authentifizierungs-App entweder über einen **QR-Code** oder einen **Einrichtungsschlüssel** zu verbinden.

> [!hint]- Beliebte Authentifizierungs-Apps
> - [Authy](https://authy.com)
> - [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
> - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)
> - [iCloud Schlüsselbund](https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios)

- Sobald die Verbindung hergestellt ist, stellt dir deine Authentifizierungs-App einen sechsstelligen Code bereit. Gib diesen Code unterhalb des Abschnitts **QR-Code/Einrichtungsschlüssel** in Schritt 3 ein.
- Gib abschließend dein aktuelles Passwort ein.
- Wähle **Einrichtung abschließen**.
- Das Popup-Fenster wird durch ein Bestätigungsfenster mit deinen Wiederherstellungscodes ersetzt. Bitte lade deine Wiederherstellungscodes herunter, da du diese benötigst, um dein Konto zu entsperren.

Deine 2FA ist jetzt eingerichtet.

> [!warning]- Sicherung von QR-Code/Einrichtungsschlüssel
> Wenn du zusätzlich zu deinen Wiederherstellungscodes eine Sicherung deines **QR-Codes** oder **Einrichtungsschlüssels** aufbewahren möchtest, empfehlen wir dringend, diese in einem passwortgeschützten System zu speichern.

## Wiederherstellungscodes generieren

Wenn du 2FA aktiviert hast, bevor Wiederherstellungscodes verfügbar waren, oder wenn du deine Wiederherstellungscodes aktualisieren möchtest, folge diesen Schritten:

- Melde dich über deinen Webbrowser bei [deinem Obsidian-Konto](https://obsidian.md/account/profile) an.
- Wähle neben 2-Faktor-Authentifizierung **Wiederherstellungscodes aktualisieren**.
- Gib im Popup-Fenster dein **Passwort** und deinen **6-stelligen Authentifizierungscode** ein.
- Ein Bestätigungsfenster zeigt deine Wiederherstellungscodes an. Du hast zwei Optionen:
    - **Wiederherstellungscodes kopieren**: Kopiere die Codes, um sie an anderer Stelle einzufügen.
    - **Wiederherstellungscodes herunterladen**: Lade eine Datei `obsidian-recovery-codes.txt` mit deinen Codes herunter.
- Wähle **Verstanden**, um das Popup-Fenster zu schließen.

Du kannst einen Wiederherstellungscode **einmal** anstelle deines **6-stelligen Authentifizierungscodes** verwenden. Du kannst deine Wiederherstellungscodes auch jederzeit aktualisieren.

## 2FA deaktivieren

- Melde dich über deinen Webbrowser bei [deinem Obsidian-Konto](https://obsidian.md/account/profile) an.
- Gehe im Abschnitt **Profil** zu **2-Faktor-Authentifizierung** und wähle **Deaktivieren**.
- Gib dein Obsidian-Passwort ein.
- Gib den aktuellen sechsstelligen Code aus deiner Authentifizierungs-App ein.
- Wähle **2FA deaktivieren**.
- Du wirst zur Kontoverwaltungsseite zurückgeleitet.

Die Einstellung **2-Faktor-Authentifizierung** zeigt wieder eine Schaltfläche **Aktivieren** an, was darauf hinweist, dass 2FA deaktiviert wurde.

## FAQ

**Ich habe 2FA aktiviert. Werde ich auf meinen aktuellen Obsidian-Geräten abgemeldet?**
Nein. Das Aktivieren von 2FA meldet dich aus Bequemlichkeitsgründen nicht überall ab. Falls nötig, kannst du dies manuell über deine Kontoseite tun und dich anschließend auf jedem deiner Geräte erneut anmelden.

**Ich habe 2FA aktiviert und dann deaktiviert. Ich möchte es erneut einrichten. Kann ich den ursprünglichen QR-Code oder Einrichtungsschlüssel verwenden?**
Nein. Du erhältst jedes Mal einen neuen **QR-Code** und einen neuen **Einrichtungsschlüssel**, wenn du eine neue 2FA-Einrichtung startest.

**Ich habe 2FA aktiviert. Nach mehreren Ab-/Anmeldeversuchen wurde ich noch nicht danach gefragt. Funktioniert es?**
Dein Browser-Cache könnte den Anschein erwecken, dass du Änderungen auf der Seite vornimmst (wie An- oder Abmelden), obwohl du in Wirklichkeit auf gespeicherte Daten zugreifst. Versuche, dich in einem privaten Browserfenster anzumelden, um zu bestätigen, dass 2FA funktioniert.

Wenn dieses Verhalten weiterhin auftritt, [reiche bitte einen Fehlerbericht ein](https://forum.obsidian.md/c/bug-reports/7).

**Ich habe meine Wiederherstellungscodes, meinen Authenticator und alles verloren, was ich zur Anmeldung bei meinem Konto benötige. Was soll ich tun?**

Wenn du deine Wiederherstellungscodes und deinen Authenticator verloren hast, sende bitte eine E-Mail an [support@obsidian.md](mailto:support@obsidian.md?subject=I%20lost%20my%202FA), um Hilfe beim Wiedererlangen des Zugangs zu deinem Konto zu erhalten.
