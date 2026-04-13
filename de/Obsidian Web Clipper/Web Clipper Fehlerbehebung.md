---
permalink: web-clipper/troubleshoot
---
Wenn du Probleme mit dem [[Einführung in Obsidian Web Clipper|Web Clipper]] hast, kannst du Hilfe über den [offiziellen Discord-Kanal](https://discord.com/channels/686053708261228577/1285652864089198672) erhalten. Du kannst auch Fehler im [GitHub-Repository](https://github.com/obsidianmd/obsidian-clipper) melden.

## Allgemein

### Einige Inhalte fehlen

Standardmäßig versucht Web Clipper, Inhalte intelligent von der Seite zu erfassen. Dies gelingt jedoch möglicherweise nicht auf allen Websites.

Web Clipper verwendet [Defuddle](https://github.com/kepano/defuddle), um nur den Hauptinhalt der Seite zu erfassen. Dies schließt Header, Footer und andere Elemente aus, kann aber manchmal zu konservativ sein und Inhalte entfernen, die du behalten möchtest. Du kannst [Fehler melden](https://github.com/kepano/defuddle) an Defuddle.

Um Defuddle in Web Clipper zu umgehen, verwende die folgenden Methoden:

- Wähle Text aus oder verwende `Cmd/Strg+A`, um den gesamten Text auszuwählen.
- [[Marker|Hebe Inhalte hervor]], um genau auszuwählen, was du erfassen möchtest.
- Verwende eine [[Obsidian Web Clipper/Vorlagen|benutzerdefinierte Vorlage]] für die Website.

### Kein Inhalt erscheint in Obsidian

Wenn du keinen Inhalt in Obsidian siehst, wenn du auf **Zu Obsidian hinzufügen** klickst:

- Prüfe die Fehler in der Obsidian-[[Hilfe und Support#Konsolenprotokolle erfassen|Entwicklerkonsole]].
- Stelle sicher, dass dein Vault-Name in den Web Clipper-Einstellungen genau mit deinem *Vault-Namen* in Obsidian übereinstimmt – *nicht mit dem Vault-Pfad*.
- Prüfe, ob der Ordnername korrekt formatiert ist.

## Linux

#### Obsidian öffnet sich nicht

- Stelle sicher, dass das [[Obsidian URI]]-Protokoll [[Obsidian URI#Obsidian URI registrieren|registriert ist]].
- Wenn du Firefox verwendest, musst du es möglicherweise [in den Browsereinstellungen registrieren](https://kb.mozillazine.org/Register_protocol).

#### Obsidian öffnet sich, aber nur der Dateiname wird gespeichert

Wahrscheinlich kann Obsidian nicht auf deine Zwischenablage zugreifen. Der Zugriff auf die Zwischenablage ist erforderlich, um Daten von deinem Browser an Obsidian zu übergeben. Deine Konfiguration kann beeinflussen, wie Apps in einer Sandbox ausgeführt werden und welche Berechtigungen für die Zwischenablage gelten.

Wenn du Wayland verwendest, stelle sicher, dass Obsidian die Berechtigung hat, die Zwischenablage zu lesen, wenn die App nicht im Fokus ist. Diese Einstellung befindet sich möglicherweise in deinem Tiling-Window-Manager, z. B. Hyprland oder Sway.

Wenn du Hyprland verwendest:

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

Wenn du Sway verwendest:

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- Wenn du Flatpak verwendest, versuche eine [offiziell unterstützte Obsidian-Version](https://obsidian.md/download).
- Wenn du KDE verwendest, gehe zu **Systemeinstellungen** → **Fensterverwaltung** → **Fensterregeln** und erlaube Obsidian, den Fokus zu übernehmen, [[web-clipper-kde.png|siehe Screenshot]].
- Als Ausweichlösung versuche, in den **Web Clipper-Einstellungen** → **Allgemein** auf **Legacy-Modus** umzuschalten. Dadurch wird die Zwischenablage umgangen und der Inhalt direkt über URI gespeichert. Beachte, dass dies die Anzahl der Zeichen begrenzt, die je nach Browser und Linux-Distribution ausgeschnitten werden können.

## iOS und iPadOS

Um die Web Clipper-Erweiterung für Safari zu aktivieren:

1. Öffne Safari und tippe auf die Schaltfläche ganz links in der Browser-URL-Leiste – sie sieht aus wie ein Rechteck mit Linien darunter.
2. Tippe auf **Erweiterungen verwalten**.
3. Aktiviere **Obsidian Web Clipper** in der Erweiterungsliste.
4. Verlasse das Menü.
5. Um die Erweiterung zu verwenden, **tippe auf das Puzzleteil-Symbol** in der URL-Leiste.

Um Web Clipper die Ausführung auf allen Websites zu erlauben:

1. Gehe zu iOS **[[Einstellungen]]** → **Apps** → **Safari** → **Erweiterungen**.
2. Erlaube unter **Berechtigungen** die Ausführung auf allen Websites.

Um Obsidian immer den Empfang von Web Clipper-Inhalten zu erlauben:

1. Gehe zu iOS **[[Einstellungen]]** → **Apps** → **Obsidian**.
2. Setze **Einfügen aus anderen Apps** auf **Erlauben**.
