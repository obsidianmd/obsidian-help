---
permalink: publish/troubleshoot
publish: true
mobile: true
description: Diese Seite beschreibt einige häufige Probleme, die bei der Verwendung von Obsidian Publish auftreten können
---
Diese Seite listet häufige Probleme auf, die bei [[Einführung in Obsidian Publish|Obsidian Publish]] auftreten können, und wie sie behoben werden.

Überprüfe zunächst [[Mediendateien]] und [[Publish-Einschränkungen|Publish-Einschränkungen]].

## Allgemein

### Notizen veröffentlichen

**Ich erhalte einen Hash-Fehler, wenn ich versuche, eine Notiz zu veröffentlichen.**

Verwendest du eine [[Community-Erweiterungen|Community-Erweiterung]], die die Änderungszeit der Datei bei Aktualisierungen bearbeitet? Falls ja, könnte diese Erweiterung mit Publish in Konflikt stehen. Bitte erstelle einen Fehlerbericht beim Entwickler der Erweiterung, um das Problem zu beheben.

**Ich erhalte einen seltsamen Netzwerkfehler und habe eine sehr große Publish-Website.**

Wahrscheinlich müssen wir deine Datenbank untersuchen. Bitte [[Hilfe und Support#Obsidian-Support kontaktieren|kontaktiere den Obsidian-Support]] für Hilfe.

## CSS und Themen

**Mein CSS in meinem [[Konfigurationsordner]] funktioniert nicht auf Publish. Warum?**

Publish liest nicht aus dem Konfigurationsordner. Stattdessen musst du eine `publish.css`-Datei im obersten Verzeichnis deines Publishing-Vaults erstellen. Erfahre mehr darüber unter [[Website anpassen]].

**Mein CSS sieht auf Publish nicht genauso aus wie in der App. Warum?**

Das CSS von Obsidian Publish ist nicht exakt dasselbe wie in der Anwendung. Wir empfehlen, [CSS und Themen speziell für Publish](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes) von Grund auf zu entwickeln.

Im _Allgemeinen_ hat das, was im [[Ansichten und Bearbeitungsmodus#Lesemodus|Lesemodus]] funktioniert, eine hohe Wahrscheinlichkeit, auch auf Publish zu funktionieren.
