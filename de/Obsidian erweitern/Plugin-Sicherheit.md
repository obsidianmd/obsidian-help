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

Alle Community-Erweiterungen müssen den [Obsidian-Entwicklerrichtlinien](https://docs.obsidian.md/Developer+policies) entsprechen. Obsidian scannt automatisch jede Erweiterungsversion auf Sicherheitslücken, Code-Qualitätsprobleme und Malware. Die Seite jeder Erweiterung im [Erweiterungsverzeichnis](https://community.obsidian.md) zeigt die Ergebnisse als Sicherheits-Scorecard an.

Manuelle Überprüfungen werden weiterhin für beliebte, empfohlene und gemeldete Erweiterungen durchgeführt.

- Wenn du eine Sicherheitslücke in einer Community-Erweiterung entdeckst, schau in der `security.md` oder `readme.md` des Erweiterungsautors nach, wie du diese melden kannst. Bei kritischen Schwachstellen melde das Problem bitte auch dem [[Hilfe und Support#Obsidian-Support kontaktieren|Obsidian-Support]].
- Wenn du den Verdacht hast, dass eine Community-Erweiterung bösartig ist, kannst du sie direkt über ihre Seite im Erweiterungsverzeichnis melden, dies dem [[Hilfe und Support#Obsidian-Support kontaktieren|Obsidian-Support]] melden oder eine Direktnachricht an unsere Moderatoren senden.
