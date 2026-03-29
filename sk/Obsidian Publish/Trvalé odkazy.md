---
permalink: publish/permalinks
---
Pomocou _trvalých odkazov_ môžete premenovať URL adresu k vašim poznámkam.

Napríklad, môžete zmeniť toto:

```
https://publish.obsidian.md/username/Company/About+us
```

Na toto:

```
https://publish.obsidian.md/username/about
```

Ak chcete vytvoriť trvalý odkaz pre poznámku, pridajte vlastnosť `permalink` do vašich [[Vlastnosti|Vlastností]].

```yaml
---
permalink: about
---
```

Ak niekto navštívi poznámku pomocou pôvodnej URL adresy, bude automaticky presmerovaný na trvalý odkaz.

## Presmerovanie starých poznámok

Premenovávanie a odstraňovanie poznámok je prirodzená súčasť udržiavania živého trezora. Hoci Obsidian automaticky aktualizuje odkazy, keď presuniete poznámku v rámci lokálneho trezora, iné webové stránky môžu stále odkazovať na vaše staré poznámky na vašej publikovanej stránke [[Úvod do Obsidian Publish|Obsidian Publish]]. Čitateľov môžete presmerovať z jednej poznámky na inú.

Predstavte si, že chcete presunúť poznámku z jedného priečinka do druhého:

- **Guides**
  - ~~Making friends.md~~ (odstránená)
- **Tutorials**
  - *How to make friends.md* (pridaná)

Po presunutí poznámky Obsidian automaticky aktualizuje všetky odkazy v rámci trezora. Ak však zmenu publikujete na svoju Publish stránku, akékoľvek odkazy na `/Guides/Making+friends` skončia chybou 404.

Ak chcete presmerovať čitateľov z `/Guides/Making+friends` na `/Tutorials/How+to+make+friends`, musíte pridať [[Aliasy|alias]] v `How to make friends.md`, teda v poznámke, na ktorú chcete presmerovať.

```md
---
alias: Guides/Making friends
---

# How to make friends
```

> [!important] Dôležité
> Uistite sa, že v aliase uvediete úplnú cestu k starej poznámke. Hoci použitie samotného názvu poznámky ako aliasu funguje vo vašom lokálnom trezore, Publish potrebuje úplnú cestu k poznámke, aby na ňu mohol presmerovať.

Môžete presmerovať viacero poznámok pridaním aliasu pre každú z nich.

```md
---
aliases: 
  - Guides/Making friends
  - Developing friendships
---

# How to make friends
```
