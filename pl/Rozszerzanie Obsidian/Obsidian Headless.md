---
permalink: headless
description: Obsidian Headless to klient wiersza poleceń dla usług Obsidian. Synchronizuj swoje sejfy bez aplikacji desktopowej.
---
Obsidian Headless **(otwarta beta)** to bezobsługowy klient dla usług Obsidian. Umożliwia [[Bezobsługowy Sync|synchronizację sejfów]] z poziomu wiersza poleceń bez aplikacji desktopowej, zachowując wszystkie zalety szybkości, prywatności i szyfrowania end-to-end oferowane przez [[Wprowadzenie do Obsidian Sync|Obsidian Sync]].

Powody, dla których możesz chcieć użyć Obsidian Headless:

- Automatyzacja zdalnych kopii zapasowych.
- Automatyzacja publikowania strony internetowej.
- Zapewnienie narzędziom agentowym dostępu do sejfu bez dostępu do całego komputera.
- Synchronizacja współdzielonego sejfu zespołowego z serwerem zasilającym inne narzędzia.
- Uruchamianie zaplanowanych automatyzacji, np. agregowanie codziennych notatek w tygodniowe podsumowania, automatyczne tagowanie itp.

> [!info] Obsidian Headless a Obsidian CLI
> [[Obsidian CLI]] steruje aplikacją desktopową Obsidian z poziomu terminala. Obsidian Headless to samodzielny klient działający niezależnie — nie wymaga aplikacji desktopowej.

## Instalacja

Obsidian Headless **(otwarta beta)** wymaga Node.js 22 lub nowszego. Zainstaluj go z [npm](https://www.npmjs.com/package/obsidian-headless):

```shell
npm install -g obsidian-headless
```

## Uwierzytelnianie

### Logowanie

```shell
ob login
```

Jeśli jesteś już zalogowany, `ob login` wyświetli informacje o Twoim koncie. Aby przełączyć konta, użyj `--email` i/lub `--password`, aby zalogować się ponownie.

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

Wszystkie opcje są interaktywne, gdy zostaną pominięte — e-mail i hasło są wyświetlane jako monity, a uwierzytelnianie dwuskładnikowe jest automatycznie wymagane, jeśli jest włączone na koncie.

Aby się wylogować i usunąć zapisane dane uwierzytelniające:

```shell
ob logout
```

## Usługi

- [[Bezobsługowy Sync]]: korzystaj z [[Wprowadzenie do Obsidian Sync|Obsidian Sync]] z poziomu wiersza poleceń bez aplikacji desktopowej.
- [[Headless Publish]]: korzystaj z [[Wprowadzenie do Obsidian Publish|Obsidian Publish]] z poziomu wiersza poleceń bez aplikacji desktopowej.
