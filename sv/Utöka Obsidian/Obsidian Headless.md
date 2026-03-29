---
permalink: headless
description: Obsidian Headless är en kommandoradsklient för Obsidians tjänster. Synkronisera dina valv utan skrivbordsappen.
---
Obsidian Headless **(öppen beta)** är en headless-klient för Obsidians tjänster. Den låter dig [[Headless Sync|synkronisera valv]] från kommandoraden utan skrivbordsappen, med all hastighet, integritet och slutpunkt-till-slutpunkt-kryptering som [[Introduktion till Obsidian Sync|Obsidian Sync]] erbjuder.

Anledningar att använda Obsidian Headless:

- Automatisera fjärrsäkerhetskopieringar.
- Automatisera publicering av en webbplats.
- Ge agentverktyg åtkomst till ett valv utan åtkomst till hela din dator.
- Synkronisera ett delat teamvalv till en server som matar andra verktyg.
- Kör schemalagda automatiseringar, t.ex. sammanställ dagliga anteckningar till veckosammanfattningar, auto-tagga, etc.

> [!info] Obsidian Headless vs Obsidian CLI
> [[Obsidian CLI]] styr Obsidians skrivbordsapp från din terminal. Obsidian Headless är en fristående klient som körs oberoende, ingen skrivbordsapp krävs.

## Installera

Obsidian Headless **(öppen beta)** kräver Node.js 22 eller senare. Installera det från [npm](https://www.npmjs.com/package/obsidian-headless):

```shell
npm install -g obsidian-headless
```

## Autentisering

### Logga in

```shell
ob login
```

Om du redan är inloggad visar `ob login` din kontoinformation. För att byta konto, ange `--email` och/eller `--password` för att logga in igen.

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

Alla alternativ är interaktiva när de utelämnas — e-post och lösenord efterfrågas, och 2FA begärs automatiskt om det är aktiverat på kontot.

För att logga ut och rensa lagrade uppgifter:

```shell
ob logout
```

## Tjänster

- [[Headless Sync]]: använd [[Introduktion till Obsidian Sync|Obsidian Sync]] från kommandoraden utan skrivbordsappen.
- [[Headless Publish]]: använd [[Introduktion till Obsidian Publish|Obsidian Publish]] från kommandoraden utan skrivbordsappen.
