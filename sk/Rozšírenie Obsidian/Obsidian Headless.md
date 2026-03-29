---
permalink: headless
description: Obsidian Headless je klient príkazového riadka pre služby Obsidian. Synchronizujte svoje trezory bez desktopovej aplikácie.
---
Obsidian Headless **(otvorená beta)** je bezúčelový klient pre služby Obsidian. Umožňuje vám [[Headless Sync|synchronizovať trezory]] z príkazového riadku bez desktopovej aplikácie, so všetkými výhodami rýchlosti, súkromia a šifrovania end-to-end, ktoré ponúka [[Úvod do Obsidian Sync|Obsidian Sync]].

Dôvody, prečo by ste mohli používať Obsidian Headless:

- Automatizácia vzdialených záloh.
- Automatizácia publikovania webovej stránky.
- Poskytnutie prístupu agentným nástrojom k trezoru bez prístupu k celému počítaču.
- Synchronizácia zdieľaného tímového trezoru na server, ktorý zásobuje ďalšie nástroje.
- Spúšťanie plánovaných automatizácií, napr. agregácia denných poznámok do týždenných súhrnov, automatické značkovanie atď.

> [!info] Obsidian Headless vs Obsidian CLI
> [[Obsidian CLI]] ovláda desktopovú aplikáciu Obsidian z vášho terminálu. Obsidian Headless je samostatný klient, ktorý beží nezávisle — desktopová aplikácia nie je potrebná.

## Inštalácia

Obsidian Headless **(otvorená beta)** vyžaduje Node.js 22 alebo novší. Nainštalujte ho z [npm](https://www.npmjs.com/package/obsidian-headless):

```shell
npm install -g obsidian-headless
```

## Autentifikácia

### Prihlásenie

```shell
ob login
```

Ak ste už prihlásený, `ob login` zobrazí informácie o vašom účte. Na prepnutie účtov zadajte `--email` a/alebo `--password` pre opätovné prihlásenie.

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

Všetky možnosti sú interaktívne, keď sú vynechané — e-mail a heslo sa vyžiadajú a 2FA sa automaticky vyžiada, ak je na účte povolená.

Na odhlásenie a vymazanie uložených prihlasovacích údajov:

```shell
ob logout
```

## Služby

- [[Headless Sync]]: používajte [[Úvod do Obsidian Sync|Obsidian Sync]] z príkazového riadku bez desktopovej aplikácie.
- [[Headless Publish]]: používajte [[Úvod do Obsidian Publish|Obsidian Publish]] z príkazového riadku bez desktopovej aplikácie.
