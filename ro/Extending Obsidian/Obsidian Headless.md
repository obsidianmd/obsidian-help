---
permalink: headless
description: Obsidian Headless este un client de linie de comandă pentru serviciile Obsidian. Sincronizați-vă seifurile fără aplicația desktop.
---
Obsidian Headless **(beta deschisă)** este un client headless pentru serviciile Obsidian. Vă permite să [[Headless Sync|sincronizați seifuri]] din linia de comandă fără aplicația desktop, cu toate avantajele de viteză, confidențialitate și criptare integrală de la un capăt la altul ale [[Introduction to Obsidian Sync|Obsidian Sync]].

Motive pentru care ați putea folosi Obsidian Headless:

- Automatizarea copiilor de rezervă la distanță.
- Automatizarea publicării unui site web.
- Oferirea accesului la un seif pentru instrumente agentice, fără acces la întregul dumneavoastră computer.
- Sincronizarea unui seif de echipă partajat către un server care alimentează alte instrumente.
- Rularea automatizărilor programate, de ex. agregarea notelor zilnice în rezumate săptămânale, etichetare automată etc.

> [!info] Obsidian Headless vs Obsidian CLI
> [[Obsidian CLI]] controlează aplicația desktop Obsidian din terminal. Obsidian Headless este un client de sine stătător care rulează independent, fără a necesita aplicația desktop.

## Instalare

Obsidian Headless **(beta deschisă)** necesită Node.js 22 sau o versiune mai nouă. Instalați-l din [npm](https://www.npmjs.com/package/obsidian-headless):

```shell
npm install -g obsidian-headless
```

## Autentificare

### Conectare

```shell
ob login
```

Dacă sunteți deja conectat, `ob login` afișează informațiile contului dumneavoastră. Pentru a schimba contul, transmiteți `--email` și/sau `--password` pentru a vă conecta din nou.

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

Toate opțiunile sunt interactive dacă sunt omise — e-mailul și parola sunt solicitate, iar autentificarea în doi pași este cerută automat dacă este activată pentru cont.

Pentru a vă deconecta și a șterge datele de autentificare stocate:

```shell
ob logout
```

## Servicii

- [[Headless Sync]]: folosiți [[Introduction to Obsidian Sync|Obsidian Sync]] din linia de comandă fără aplicația desktop.
- [[Headless Publish]]: folosiți [[Introduction to Obsidian Publish|Obsidian Publish]] din linia de comandă fără aplicația desktop.
