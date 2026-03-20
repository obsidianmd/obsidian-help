---
permalink: headless
description: >-
  Obsidian Headless è un client a riga di comando per i servizi Obsidian.
  Sincronizza le tue cassaforti senza l'app desktop.
---
Obsidian Headless **(open beta)** è un client headless per i servizi Obsidian. Ti permette di [[Headless Sync|sincronizzare le cassaforti]] dalla riga di comando senza l'app desktop, con tutti i vantaggi di velocità, privacy e crittografia end-to-end di [[Introduction to Obsidian Sync|Obsidian Sync]].

Motivi per cui potresti usare Obsidian Headless:

- Automatizzare i backup remoti.
- Automatizzare la pubblicazione di un sito web.
- Dare accesso a strumenti agentici a una cassaforte senza accesso all'intero computer.
- Sincronizzare una cassaforte di team condivisa su un server che alimenta altri strumenti.
- Eseguire automazioni pianificate, ad esempio aggregare note quotidiane in riepiloghi settimanali, applicare etichette automaticamente, ecc.

> [!info] Obsidian Headless vs Obsidian CLI
> [[Obsidian CLI]] controlla l'app desktop di Obsidian dal terminale. Obsidian Headless è un client standalone che funziona in modo indipendente, senza bisogno dell'app desktop.

## Installa

Obsidian Headless **(open beta)** richiede Node.js 22 o versioni successive. Installalo da [npm](https://www.npmjs.com/package/obsidian-headless):

```shell
npm install -g obsidian-headless
```

## Autenticazione

### Accesso

```shell
ob login
```

Se hai già effettuato l'accesso, `ob login` mostra le informazioni del tuo account. Per cambiare account, passa `--email` e/o `--password` per accedere di nuovo.

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

Tutte le opzioni sono interattive quando omesse — email e password vengono richiesti, e la 2FA viene richiesta automaticamente se abilitata sull'account.

Per uscire e cancellare le credenziali memorizzate:

```shell
ob logout
```

## Servizi

- [[Headless Sync]]: usa [[Introduction to Obsidian Sync|Obsidian Sync]] dalla riga di comando senza l'app desktop.
