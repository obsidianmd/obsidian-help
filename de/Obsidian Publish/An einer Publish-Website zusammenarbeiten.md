---
permalink: publish/collaborate
publish: true
mobile: true
description: >-
  Erfahre, wie du mit anderen Obsidian-Nutzern auf deiner Obsidian
  Publish-Website zusammenarbeiten kannst.
---
Erfahre, wie du auf deiner [[Einführung in Obsidian Publish|Obsidian Publish]]-Website mit anderen Obsidian-Nutzern zusammenarbeiten kannst. Indem du Freunde und Kollegen als Mitarbeiter hinzufügst, können diese Änderungen auf deiner Website veröffentlichen.

Nur der Website-Eigentümer benötigt ein aktives Abonnement für Obsidian Publish. Mitarbeiter benötigen lediglich ein [Obsidian-Konto](https://obsidian.md/account).

> [!warning] Bevor du Änderungen auf einer gemeinsamen Website veröffentlichst, stelle sicher, dass du [[#Änderungen zwischen Mitarbeitern synchronisieren|Änderungen zwischen Mitarbeitern synchronisierst]]. Andernfalls riskierst du, Änderungen anderer Mitarbeiter zu überschreiben.

## Einen Mitarbeiter zu einer Website hinzufügen

1. Wähle in der [[Menüband|Werkzeugleiste]] **Änderungen veröffentlichen** (![[lucide-send.svg#icon]]) oder öffne die [[Befehlspalette]] und gib **Publish: Änderungen veröffentlichen...** ein.
2. Klicke im Dialog **Änderungen veröffentlichen** auf **Seiteneinstellungen ändern** ![[lucide-cog.svg#icon]].
3. Wähle neben **Website-Zusammenarbeit** die Option **Verwalten**.
4. Gib unter **Nutzer einladen** die E-Mail des Mitarbeiters ein.
5. Wähle **Hinzufügen**.

## Einen Mitarbeiter von einer Website entfernen

1. Wähle in der [[Menüband|Werkzeugleiste]] **Änderungen veröffentlichen** (![[lucide-send.svg#icon]]) oder öffne die [[Befehlspalette]] und gib **Publish: Änderungen veröffentlichen...** ein.
2. Klicke im Dialog **Änderungen veröffentlichen** auf **Seiteneinstellungen ändern** ( ![[lucide-cog.svg#icon]] ).
3. Wähle neben **Website-Zusammenarbeit** die Option **Verwalten**.
4. Wähle neben dem Mitarbeiter, den du entfernen möchtest, **Nutzer entfernen** ( ![[lucide-x.svg#icon]]).

## Änderungen zwischen Mitarbeitern synchronisieren

Obsidian Publish synchronisiert veröffentlichte Änderungen nicht automatisch zwischen lokalen Vaults. Stattdessen müssen Mitarbeiter Änderungen anderer Mitarbeiter manuell synchronisieren.

Um eine lokale Notiz mit Änderungen der Live-Website zu aktualisieren:

1. Wähle in der [[Menüband|Werkzeugleiste]] **Änderungen veröffentlichen** (![[lucide-send.svg#icon]]) oder öffne die [[Befehlspalette]] und gib **Publish: Änderungen veröffentlichen...** ein.
2. Klicke mit der rechten Maustaste oder drücke lange auf die Änderung, die du synchronisieren möchtest, und wähle dann **Live-Version verwenden**. **Dies überschreibt die Notiz in deinem lokalen Vault.**

> [!tip] Wir empfehlen, ein anderes Werkzeug zur Synchronisierung von Änderungen zwischen Vaults zu verwenden, wie z. B. [[Einführung in Obsidian Sync|Obsidian Sync]] oder [git](https://git-scm.com/).

## Berechtigungen

Die folgende Tabelle listet die verfügbaren Website-Berechtigungen für Eigentümer und Mitarbeiter auf:

| Aktion                                        | Mitarbeiter | Eigentümer |
|-----------------------------------------------|:-----------:|:----------:|
| Neue Seiten veröffentlichen                   | ✓           | ✓          |
| Änderungen an veröffentlichten Seiten publizieren | ✓           | ✓          |
| Seiten zurückziehen                           | ✓           | ✓          |
| Website-Einstellungen konfigurieren           |             | ✓          |
| Berechtigungen verwalten                      |             | ✓          |
