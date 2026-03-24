---
permalink: publish/security
---
Du kannst die Notizen auswählen, die du auf [[Einführung in Obsidian Publish|Obsidian Publish]] veröffentlichen möchtest. Der Rest deiner Notizen bleibt sicher in deinem Vault.

Nur die Notizen, die du zur Veröffentlichung auswählst, werden an die Server von Obsidian gesendet, und alle Notizen, deren Veröffentlichung du aufhebst, werden entfernt.

## Passwortschutz

Für eine verbesserte Zugriffskontrolle auf deiner Publish-Website kannst du ein Website-Passwort festlegen. Besucher werden beim Zugriff zur Eingabe eines Passworts aufgefordert. Wenn du das Website-Passwort später entfernst, wird die gesamte Website wieder öffentlich sichtbar.

> [!warning] Individueller Passwortschutz für einzelne veröffentlichte Notizen wird derzeit nicht unterstützt.

### Ein Website-Passwort hinzufügen

1. Klicke in der Werkzeugleiste links im Anwendungsfenster auf **Änderungen veröffentlichen** ![[lucide-send.svg#icon]].
2. Klicke im Dialog **Änderungen veröffentlichen** auf **Seiteneinstellungen ändern** ![[lucide-cog.svg#icon]].
3. Klicke unter **Sonstige Seiteneinstellungen** neben **Passwörter** auf **Verwalten**.
4. Klicke auf **Neues Passwort**.
5. Gib unter **Passwort** ein Passwort für deine Website ein.
6. (optional) Gib unter **Spitzname** einen Spitznamen für das Passwort ein, zum Beispiel den Namen der Person, der du Zugang zur Website geben möchtest.
7. Klicke auf **Dieses Passwort hinzufügen**.

### Ein Website-Passwort entfernen

1. Klicke in der Werkzeugleiste links im Anwendungsfenster auf **Änderungen veröffentlichen** ![[lucide-send.svg#icon]].
2. Klicke im Dialog **Änderungen veröffentlichen** auf **Seiteneinstellungen ändern** ![[lucide-cog.svg#icon]].
3. Klicke unter **Sonstige Seiteneinstellungen** neben **Passwörter** auf **Verwalten**.
5. Klicke auf das Kreuz-Symbol neben dem Passwort, das du löschen möchtest.

## Datenerfassung
### Besucherdaten

Standardmäßig erfasst Obsidian Publish **keine** Besucherdaten, speichert keine Cookies und verarbeitet keine personenbezogenen Daten. Du kannst jedoch Analytik implementieren oder andere Nutzerdaten erfassen, indem du [[Website anpassen|deine Website anpasst]].

Als Website-Betreiber bist du dafür verantwortlich, die DSGVO und Datenschutzvorschriften in deiner Region einzuhalten. Dazu gehört die Erstellung eines eigenen Hinweisbanners, der über publish.js implementiert werden kann, sowie das Hinzufügen einer Datenschutzrichtlinien-Seite zu deiner Website.

## Zugriff

Obsidian hat einen Vertrag mit [Cloudflare](https://www.cloudflare.com) für das Website-Hosting unserer Publish-Websites. Die Server befinden sich in San Francisco, Kalifornien.

### Zugriff auf Obsidian Publish in deinem Netzwerk verwalten

Um den Zugriff auf Obsidian Publish in deinem Netzwerk zu regulieren, musst du die folgenden Domains verwalten:

- Frontend: `publish.obsidian.md`
- Backend: `publish-main.obsidian.md`

Darüber hinaus verwenden die Backend-Dienste die folgenden Subdomains: `publish-xx.obsidian.md`, wobei `xx` eine Zahl von `1 - 100` ist.

> [!tip] Falls dein Firewall-System dies unterstützt, empfehlen wir, `publish-*.obsidian.md` auf die Whitelist zu setzen, um unsere kontinuierliche Erweiterung der Subdomains zu berücksichtigen.
