---
permalink: headless
description: Obsidian Headless er en kommandolinjeklient for Obsidian-tjenester. Synkroniser hvelvene dine uten skrivebordsappen.
---
Obsidian Headless **(åpen beta)** er en hodeløs klient for Obsidian-tjenester. Den lar deg [[Hodeløs Sync|synkronisere hvelv]] fra kommandolinjen uten skrivebordsappen, med all hastigheten, personvernet og fordelene med ende-til-ende-kryptering fra [[Introduksjon til Obsidian Sync|Obsidian Sync]].

Grunner til at du kan bruke Obsidian Headless:

- Automatisere eksterne sikkerhetskopier.
- Automatisere publisering av et nettsted.
- Gi agentverktøy tilgang til et hvelv uten tilgang til hele datamaskinen din.
- Synkronisere et delt teamhvelv til en server som mater andre verktøy.
- Kjøre planlagte automatiseringer, f.eks. samle daglige notater til ukentlige sammendrag, auto-tagge, osv.

> [!info] Obsidian Headless vs Obsidian CLI
> [[Obsidian CLI]] styrer Obsidian skrivebordsappen fra terminalen din. Obsidian Headless er en frittstående klient som kjører uavhengig, ingen skrivebordsapp kreves.

## Installer

Obsidian Headless **(åpen beta)** krever Node.js 22 eller nyere. Installer det fra [npm](https://www.npmjs.com/package/obsidian-headless):

```shell
npm install -g obsidian-headless
```

## Autentisering

### Logg inn

```shell
ob login
```

Hvis du allerede er logget inn, viser `ob login` kontoinformasjonen din. For å bytte konto, oppgi `--email` og/eller `--password` for å logge inn på nytt.

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

Alle alternativer er interaktive når de utelates — e-post og passord etterspørres, og 2FA forespørres automatisk hvis det er aktivert på kontoen.

For å logge ut og tømme lagrede legitimasjonsopplysninger:

```shell
ob logout
```

## Tjenester

- [[Hodeløs Sync]]: bruk [[Introduksjon til Obsidian Sync|Obsidian Sync]] fra kommandolinjen uten skrivebordsappen.
- [[Headless Publish]]: bruk [[Introduksjon til Obsidian Publish|Obsidian Publish]] fra kommandolinjen uten skrivebordsappen.
