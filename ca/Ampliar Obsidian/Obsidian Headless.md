---
permalink: headless
description: Obsidian Headless és un client de línia d'ordres per als serveis d'Obsidian. Sincronitzeu les vostres caixes fortes sense l'aplicació d'escriptori.
---
Obsidian Headless **(beta oberta)** és un client sense capçalera per als serveis d'Obsidian. Et permet [[Sync sense interfície|sincronitzar cambres fortes]] des de la línia d'ordres sense l'aplicació d'escriptori, amb tota la velocitat, privacitat i beneficis del xifratge d'extrem a extrem d'[[Introducció a Obsidian Sync|Obsidian Sync]].

Raons per les quals podries utilitzar Obsidian Headless:

- Automatitzar còpies de seguretat remotes.
- Automatitzar la publicació d'un lloc web.
- Donar a eines agèntiques accés a una cambra forta sense accés al teu ordinador complet.
- Sincronitzar una cambra forta compartida d'equip a un servidor que alimenti altres eines.
- Executar automatitzacions programades, p. ex. agregar notes diàries en resums setmanals, autoetiquetar, etc.

> [!info] Obsidian Headless vs Obsidian CLI
> [[Obsidian CLI]] controla l'aplicació d'escriptori d'Obsidian des del teu terminal. Obsidian Headless és un client independent que s'executa de manera autònoma, sense necessitat de l'aplicació d'escriptori.

## Instal·lació

Obsidian Headless **(beta oberta)** requereix Node.js 22 o posterior. Instal·la'l des de [npm](https://www.npmjs.com/package/obsidian-headless):

```shell
npm install -g obsidian-headless
```

## Autenticació

### Inicia sessió

```shell
ob login
```

Si ja has iniciat sessió, `ob login` mostra la informació del teu compte. Per canviar de compte, passa `--email` i/o `--password` per iniciar sessió de nou.

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

Totes les opcions són interactives quan s'ometen — el correu electrònic i la contrasenya es demanen, i l'autenticació de 2 factors es sol·licita automàticament si està activada al compte.

Per tancar la sessió i esborrar les credencials emmagatzemades:

```shell
ob logout
```

## Serveis

- [[Sync sense interfície]]: utilitza [[Introducció a Obsidian Sync|Obsidian Sync]] des de la línia d'ordres sense l'aplicació d'escriptori.
- [[Publish sense capçalera]]: utilitza [[Introducció a Obsidian Publish|Obsidian Publish]] des de la línia d'ordres sense l'aplicació d'escriptori.
