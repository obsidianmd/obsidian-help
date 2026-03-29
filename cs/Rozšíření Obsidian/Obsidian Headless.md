---
permalink: headless
description: Obsidian Headless je klient příkazového řádku pro služby Obsidian. Synchronizujte své trezory bez desktopové aplikace.
---
Obsidian Headless **(otevřená beta)** je bezobslužný klient pro služby Obsidian. Umožňuje [[Bezobslužný Sync|synchronizovat trezory]] z příkazové řádky bez desktopové aplikace, se všemi výhodami rychlosti, soukromí a end-to-end šifrování [[Úvod do Obsidian Sync|Obsidian Sync]].

Důvody, proč byste mohli Obsidian Headless používat:

- Automatizace vzdálených záloh.
- Automatizace publikování webových stránek.
- Poskytnutí přístupu k trezoru agentním nástrojům bez přístupu k celému počítači.
- Synchronizace sdíleného týmového trezoru na server, který napájí další nástroje.
- Spouštění plánovaných automatizací, např. agregace denních poznámek do týdenních shrnutí, automatické tagování atd.

> [!info] Obsidian Headless vs Obsidian CLI
> [[Obsidian CLI]] ovládá desktopovou aplikaci Obsidian z vašeho terminálu. Obsidian Headless je samostatný klient, který běží nezávisle — desktopová aplikace není potřeba.

## Instalace

Obsidian Headless **(otevřená beta)** vyžaduje Node.js 22 nebo novější. Nainstalujte jej z [npm](https://www.npmjs.com/package/obsidian-headless):

```shell
npm install -g obsidian-headless
```

## Ověření

### Přihlášení

```shell
ob login
```

Pokud jste již přihlášeni, `ob login` zobrazí informace o vašem účtu. Pro přepnutí účtu zadejte `--email` a/nebo `--password` pro opětovné přihlášení.

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

Všechny volby jsou při vynechání interaktivní — e-mail a heslo jsou vyžádány formou výzvy a 2FA je automaticky požadováno, pokud je na účtu zapnuto.

Pro odhlášení a vymazání uložených přihlašovacích údajů:

```shell
ob logout
```

## Služby

- [[Bezobslužný Sync]]: používejte [[Úvod do Obsidian Sync|Obsidian Sync]] z příkazové řádky bez desktopové aplikace.
- [[Headless Publish]]: používejte [[Úvod do Obsidian Publish|Obsidian Publish]] z příkazové řádky bez desktopové aplikace.
