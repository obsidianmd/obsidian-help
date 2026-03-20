---
permalink: plugin-security
---
Das Obsidian-Team nimmt Sicherheit ernst. Diese Seite erklärt die Risiken, die mit der Installation von Community-Erweiterungen verbunden sind, und was das Obsidian-Team unternimmt, um diese zu adressieren.

## Eingeschränkter Modus

Standardmäßig läuft Obsidian im Eingeschränkten Modus, um die Ausführung von Drittanbieter-Code zu verhindern. Deaktiviere den Eingeschränkten Modus nur, wenn du den Autoren der installierten Erweiterungen vertraust.

Um den Eingeschränkten Modus zu deaktivieren:

1. Öffne die **[[Einstellungen]]**.
2. Wähle im Seitenmenü **Community-Erweiterungen** aus.
3. Wähle **Community-Erweiterungen aktivieren**.

Um den Eingeschränkten Modus zu aktivieren:

1. Öffne die **[[Einstellungen]]**.
2. Wähle im Seitenmenü **Community-Erweiterungen** aus.
3. Wähle neben **Eingeschränkter Modus** die Option **Aktivieren**.

Installierte Erweiterungen bleiben in deinem Vault, auch wenn du den Eingeschränkten Modus aktivierst, werden aber von Obsidian ignoriert.

## Fähigkeiten von Erweiterungen

Aufgrund technischer Einschränkungen kann Obsidian Erweiterungen nicht zuverlässig auf bestimmte Berechtigungen oder Zugriffsebenen beschränken. Das bedeutet, dass Erweiterungen die Zugriffsebenen von Obsidian erben. Beachte daher die folgenden Beispiele, was Community-Erweiterungen tun können:

- Community-Erweiterungen können auf Dateien auf deinem Computer zugreifen.
- Community-Erweiterungen können sich mit dem Internet verbinden.
- Community-Erweiterungen können zusätzliche Programme installieren.

> [!tip] 
> Wenn du mit sensiblen Daten arbeitest und eine Community-Erweiterung installieren möchtest, empfehlen wir, vor der Nutzung eine unabhängige Sicherheitsprüfung der Erweiterung durchzuführen.

## Überprüfungsprozess für Erweiterungen

Community-Erweiterungen durchlaufen eine erste Überprüfung, wenn sie im Erweiterungs-Store eingereicht werden. Alle Erweiterungen müssen den [Obsidian-Entwicklerrichtlinien](https://docs.obsidian.md/Developer+policies) entsprechen.

Das Obsidian-Team ist klein und kann nicht jede neue Version von Community-Erweiterungen manuell überprüfen. Stattdessen verlassen wir uns auf die Hilfe der Community, um Probleme mit Erweiterungen zu identifizieren und zu melden.

- Wenn du kleinere Sicherheitslücken in einer Community-Erweiterung entdeckst, schau in der `security.md` oder `readme.md` des Erweiterungsautors nach, wie du diese melden kannst. Bei Schwachstellen der Kategorie „Kritisch" melde das Problem bitte auch dem [[Hilfe und Support#Obsidian-Support kontaktieren|Obsidian-Support]].
- Wenn du den Verdacht hast, dass eine Community-Erweiterung bösartig ist, melde dies dem [[Hilfe und Support#Obsidian-Support kontaktieren|Obsidian-Support]] oder sende eine Direktnachricht an unsere Moderatoren.
