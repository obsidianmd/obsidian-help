---
permalink: headless
description: Obsidian Headless er en kommandolinjeklient til Obsidian-tjenester. Synkroniser dine bokse uden desktop-appen.
---
Obsidian Headless **(åben beta)** er en hovedløs klient til Obsidian-tjenester. Den giver dig mulighed for at [[Headless Sync|synkronisere bokse]] fra kommandolinjen uden desktopapplikationen, med al den hastighed, privatliv og slut-til-slut kryptering som [[Introduktion til Obsidian Sync|Obsidian Sync]] tilbyder.

Grunde til at bruge Obsidian Headless:

- Automatisér fjern-sikkerhedskopier.
- Automatisér udgivelse af en hjemmeside.
- Giv agentværktøjer adgang til en boks uden adgang til hele din computer.
- Synkroniser en delt teamboks til en server, der føder andre værktøjer.
- Kør planlagte automatiseringer, f.eks. sammenfat daglige noter til ugentlige opsummeringer, auto-tag osv.

> [!info] Obsidian Headless vs Obsidian CLI
> [[Obsidian CLI]] styrer Obsidian-desktopapplikationen fra din terminal. Obsidian Headless er en selvstændig klient, der kører uafhængigt — ingen desktopapplikation påkrævet.

## Installer

Obsidian Headless **(åben beta)** kræver Node.js 22 eller nyere. Installér det fra [npm](https://www.npmjs.com/package/obsidian-headless):

```shell
npm install -g obsidian-headless
```

## Godkendelse

### Log ind

```shell
ob login
```

Hvis du allerede er logget ind, viser `ob login` dine kontooplysninger. For at skifte konto kan du angive `--email` og/eller `--password` for at logge ind igen.

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

Alle indstillinger er interaktive, når de udelades — e-mail og adgangskode bliver bedt om, og 2FA anmodes automatisk, hvis det er aktiveret på kontoen.

For at logge ud og rydde gemte legitimationsoplysninger:

```shell
ob logout
```

## Tjenester

- [[Headless Sync]]: brug [[Introduktion til Obsidian Sync|Obsidian Sync]] fra kommandolinjen uden desktopapplikationen.
- [[Headless Publish]]: brug [[Introduktion til Obsidian Publish|Obsidian Publish]] fra kommandolinjen uden desktopapplikationen.
