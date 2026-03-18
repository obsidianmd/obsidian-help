---
permalink: headless
description: >-
  Obsidian Headless is a command line client for Obsidian services. Sync your
  vaults without the desktop app.
localized: '2026-03-18'
---
Obsidian Headless **(bêta ouverte)** est un client sans interface pour les services Obsidian. Il vous permet de [[Sync sans interface|synchroniser des coffres]] depuis la ligne de commande sans l'application de bureau, avec toute la rapidité, la confidentialité et les avantages du [[Introduction à Obsidian Sync|chiffrement de bout en bout d'Obsidian Sync]].

Raisons pour lesquelles vous pourriez utiliser Obsidian Headless :

- Automatiser les sauvegardes à distance.
- Automatiser la publication d'un site web.
- Donner aux outils agentiques l'accès à un coffre sans accès à l'ensemble de votre ordinateur.
- Synchroniser un coffre d'équipe partagé vers un serveur qui alimente d'autres outils.
- Exécuter des automatisations planifiées, par exemple agréger des notes quotidiennes en résumés hebdomadaires, ajouter automatiquement des mots-clés, etc.

> [!info] Obsidian Headless vs Obsidian CLI
> [[Obsidian CLI]] contrôle l'application de bureau Obsidian depuis votre terminal. Obsidian Headless est un client autonome qui fonctionne indépendamment, sans nécessiter l'application de bureau.

## Installation

Obsidian Headless **(bêta ouverte)** nécessite Node.js 22 ou une version ultérieure. Installez-le depuis [npm](https://www.npmjs.com/package/obsidian-headless) :

```shell
npm install -g obsidian-headless
```

## Authentification

### Se connecter

```shell
ob login
```

Si vous êtes déjà connecté, `ob login` affiche les informations de votre compte. Pour changer de compte, passez `--email` et/ou `--password` pour vous connecter à nouveau.

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

Toutes les options sont interactives lorsqu'elles sont omises — l'adresse électronique et le mot de passe sont demandés, et la 2FA est automatiquement sollicitée si elle est activée sur le compte.

Pour se déconnecter et effacer les identifiants stockés :

```shell
ob logout
```

## Services

- [[Sync sans interface]] : utilisez [[Introduction à Obsidian Sync|Obsidian Sync]] depuis la ligne de commande sans l'application de bureau.
