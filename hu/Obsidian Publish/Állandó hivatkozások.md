---
permalink: publish/permalinks
---
Átnevezheted a jegyzeteid URL-jét _állandó hivatkozások_ segítségével.

Például ezt:

```
https://publish.obsidian.md/username/Company/About+us
```

Ezzé alakíthatod:

```
https://publish.obsidian.md/username/about
```

Állandó hivatkozás létrehozásához add hozzá a `permalink` tulajdonságot a [[Tulajdonságok]] között.

```yaml
---
permalink: about
---
```

Ha valaki az eredeti URL-en keresztül látogatja meg a jegyzetet, automatikusan átirányításra kerül az állandó hivatkozásra.

## Régi jegyzetek átirányítása

A jegyzetek átnevezése és eltávolítása természetes része egy élő széf karbantartásának. Bár az Obsidian automatikusan frissíti a hivatkozásokat, amikor egy jegyzetet áthelyezel a helyi széfeden belül, más weboldalak továbbra is hivatkozhatnak a régi jegyzeteidre a publikált [[Bevezetés az Obsidian Publish-be|Obsidian Publish]] webhelyeden. Az olvasókat átirányíthatod egyik jegyzetről a másikra.

Képzeld el, hogy egy jegyzetet szeretnél áthelyezni egyik mappából a másikba:

- **Guides**
  - ~~Making friends.md~~ (eltávolítva)
- **Tutorials**
  - *How to make friends.md* (hozzáadva)

A jegyzet áthelyezése után az Obsidian automatikusan frissíti az összes hivatkozást a széfen belül. Ha azonban közzéteszed a változtatást a Publish webhelyeden, a `/Guides/Making+friends`-re mutató hivatkozások 404-es hibát eredményeznek.

Ahhoz, hogy az olvasókat a `/Guides/Making+friends` címről a `/Tutorials/How+to+make+friends` címre irányítsd át, hozzá kell adnod egy [[Alternatív nevek|alternatív nevet]] a `How to make friends.md` fájlban, vagyis abban a jegyzetben, amelyre át szeretnéd irányítani.

```md
---
alias: Guides/Making friends
---

# How to make friends
```

> [!important] Fontos
> Győződj meg róla, hogy a régi jegyzet teljes útvonalát adod meg az alternatív névben. Bár a helyi széfedben működik, ha csak a jegyzet nevét használod alternatív névként, a Publish-nek szüksége van a jegyzet teljes útvonalára az átirányításhoz.

Több jegyzetet is átirányíthatsz, ha mindegyikhez hozzáadsz egy alternatív nevet.

```md
---
aliases: 
  - Guides/Making friends
  - Developing friendships
---

# How to make friends
```
