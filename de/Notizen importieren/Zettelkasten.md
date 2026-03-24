---
permalink: import/zettelkasten
---
Wenn du die Zettelkasten-Methode zum Benennen und Verknüpfen deiner Notizen verwendet hast, musst du möglicherweise Links von `[[UID]]` zu `[[UID Mein Notiztitel]]` konvertieren.

Wenn du beispielsweise eine Notiz mit dem Namen `202301011230 Mein Notiztitel` hast und von einer anderen Notiz aus nur mit der UID darauf verlinkst, `[[202301011230]]`. Da Obsidian den vollständigen Namen der Notiz verwendet, um interne Links aufzulösen, werden solche Links nicht funktionieren.

Um alle `[[UID]]`-Links in deinem Vault zu aktualisieren und stattdessen den vollständigen Namen der Notiz zu verwenden, nutze das [[Importprogramm für Markdown Format]].

1. Öffne die **[[Einstellungen]]**.
2. Aktiviere unter **Obsidian-Erweiterungen** das **Importprogramm für Markdown Format** und schließe das Einstellungsfenster.
3. Wähle in der Werkzeugleiste auf der linken Seite des App-Fensters **Open format convert** ![[lucide-binary.svg#icon]].
4. Aktiviere **Korrekturregel für Zettelkasten-Links**.
5. Wähle **Konvertierung starten**. Dies konvertiert alle Notizen in deinem gesamten Vault.

> [!tip] Erweiterte Korrekturregel für Zettelkasten-Links
> Das [[Importprogramm für Markdown Format]] kann deine Links auch verschönern, indem es die UID aus dem Anzeigenamen entfernt. Zum Beispiel wird `[[UID]]` zu `[[UID Mein Notiztitel|Mein Notiztitel]]` konvertiert.
>
> Um deine Zettelkasten-Links zu verschönern, aktiviere **Erweiterte Korrekturregel für Zettelkasten-Links** im Fenster des Importprogramms für Markdown Format.

Du kannst auch die [[Eindeutige Notizen]]-Erweiterung verwenden, um Zettelkasten-Notizen in Obsidian zu erstellen.
