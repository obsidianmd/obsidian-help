---
permalink: headless
description: >-
  Obsidian Headless ist ein Kommandozeilen-Client für Obsidian-Dienste.
  Synchronisiere deine Vaults ohne die Desktop-App.
---
Obsidian Headless **(offene Beta)** ist ein Headless-Client für Obsidian-Dienste. Es ermöglicht dir, [[Headless Sync|Vaults zu synchronisieren]] über die Kommandozeile ohne die Desktop-App, mit allen Vorteilen von Geschwindigkeit, Datenschutz und Ende-zu-Ende-Verschlüsselung von [[Einführung in Obsidian Sync|Obsidian Sync]].

Gründe, warum du Obsidian Headless nutzen könntest:

- Automatisierung von Remote-Backups.
- Automatisierung der Veröffentlichung einer Website.
- Agentischen Tools Zugriff auf einen Vault geben, ohne Zugriff auf deinen gesamten Computer.
- Einen gemeinsamen Team-Vault auf einen Server synchronisieren, der andere Tools versorgt.
- Geplante Automatisierungen ausführen, z. B. tägliche Notizen zu wöchentlichen Zusammenfassungen zusammenfassen, automatisch taggen usw.

> [!info] Obsidian Headless vs. Obsidian CLI
> [[Obsidian CLI]] steuert die Obsidian-Desktop-App von deinem Terminal aus. Obsidian Headless ist ein eigenständiger Client, der unabhängig läuft — keine Desktop-App erforderlich.

## Installieren

Obsidian Headless **(offene Beta)** erfordert Node.js 22 oder höher. Installiere es von [npm](https://www.npmjs.com/package/obsidian-headless):

```shell
npm install -g obsidian-headless
```

## Authentifizierung

### Anmelden

```shell
ob login
```

Falls bereits angemeldet, zeigt `ob login` deine Kontoinformationen an. Um das Konto zu wechseln, übergib `--email` und/oder `--password`, um dich erneut anzumelden.

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

Alle Optionen sind interaktiv, wenn sie weggelassen werden — E-Mail und Passwort werden abgefragt, und 2FA wird automatisch angefordert, wenn es für das Konto aktiviert ist.

Um dich abzumelden und gespeicherte Anmeldedaten zu löschen:

```shell
ob logout
```

## Dienste

- [[Headless Sync]]: Nutze [[Einführung in Obsidian Sync|Obsidian Sync]] über die Kommandozeile ohne die Desktop-App.
