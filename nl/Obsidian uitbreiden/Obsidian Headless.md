---
permalink: headless
description: Obsidian Headless is een opdrachtregelclient voor Obsidian-diensten. Synchroniseer je kluizen zonder de desktopapp.
---
Obsidian Headless **(open bèta)** is een headless client voor Obsidian-diensten. Hiermee kun je [[Headless Sync|kluizen synchroniseren]] vanaf de opdrachtregel zonder de desktop-app, met alle snelheid, privacy en end-to-end-encryptie voordelen van [[Introductie tot Obsidian Sync|Obsidian Sync]].

Redenen waarom je Obsidian Headless zou gebruiken:

- Automatiseer externe back-ups.
- Automatiseer het publiceren van een website.
- Geef agentische tools toegang tot een kluis zonder toegang tot je volledige computer.
- Synchroniseer een gedeelde teamkluis naar een server die andere tools voedt.
- Voer geplande automatiseringen uit, bijv. dagnotities samenvoegen tot wekelijkse samenvattingen, automatisch taggen, enz.

> [!info] Obsidian Headless vs Obsidian CLI
> [[Obsidian CLI]] bestuurt de Obsidian desktop-app vanuit je terminal. Obsidian Headless is een zelfstandige client die onafhankelijk draait — geen desktop-app vereist.

## Installeren

Obsidian Headless **(open bèta)** vereist Node.js 22 of later. Installeer het vanaf [npm](https://www.npmjs.com/package/obsidian-headless):

```shell
npm install -g obsidian-headless
```

## Authenticatie

### Inloggen

```shell
ob login
```

Als je al ingelogd bent, toont `ob login` je accountinformatie. Om van account te wisselen, geef je `--email` en/of `--password` mee om opnieuw in te loggen.

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

Alle opties zijn interactief wanneer ze weggelaten worden — e-mail en wachtwoord worden gevraagd, en 2FA wordt automatisch aangevraagd als het ingeschakeld is op het account.

Om uit te loggen en opgeslagen inloggegevens te wissen:

```shell
ob logout
```

## Diensten

- [[Headless Sync]]: gebruik [[Introductie tot Obsidian Sync|Obsidian Sync]] vanaf de opdrachtregel zonder de desktop-app.
- [[Headless Publish]]: gebruik [[Inleiding tot Obsidian Publish|Obsidian Publish]] vanaf de opdrachtregel zonder de desktop-app.
