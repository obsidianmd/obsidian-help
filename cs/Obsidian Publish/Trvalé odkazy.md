---
permalink: publish/permalinks
---
Můžete přejmenovat URL adresu svých poznámek pomocí _trvalých odkazů_.

Například můžete změnit toto:

```
https://publish.obsidian.md/username/Company/About+us
```

Na toto:

```
https://publish.obsidian.md/username/about
```

Pro vytvoření trvalého odkazu k poznámce přidejte vlastnost `permalink` do svých [[Vlastnosti|Vlastností]].

```yaml
---
permalink: about
---
```

Pokud někdo navštíví poznámku pomocí původní URL adresy, bude automaticky přesměrován na trvalý odkaz.

## Přesměrování starých poznámek

Přejmenovávání a odstraňování poznámek je přirozenou součástí údržby živého trezoru. Zatímco Obsidian automaticky aktualizuje odkazy, když přesunete poznámku v rámci místního trezoru, jiné webové stránky mohou stále odkazovat na vaše staré poznámky na vaší publikované stránce [[Úvod do Obsidian Publish|Obsidian Publish]]. Čtenáře můžete přesměrovat z jedné poznámky na druhou.

Představte si, že chcete přesunout poznámku z jedné složky do druhé:

- **Guides**
  - ~~Making friends.md~~ (odstraněno)
- **Tutorials**
  - *How to make friends.md* (přidáno)

Po přesunutí poznámky Obsidian automaticky aktualizuje všechny odkazy v rámci trezoru. Pokud však změnu publikujete na svou Publish stránku, jakékoli odkazy na `/Guides/Making+friends` povedou na chybu 404.

Pro přesměrování čtenářů z `/Guides/Making+friends` na `/Tutorials/How+to+make+friends` musíte přidat [[Aliasy|alias]] v `How to make friends.md`, tedy v poznámce, na kterou chcete přesměrovat.

```md
---
alias: Guides/Making friends
---

# How to make friends
```

> [!important] Důležité
> Ujistěte se, že do aliasu zahrnete úplnou cestu ke staré poznámce. Zatímco použití samotného názvu poznámky jako aliasu funguje ve vašem místním trezoru, Publish potřebuje úplnou cestu k poznámce, aby na ni mohl přesměrovat.

Můžete přesměrovat více poznámek přidáním aliasu pro každou z nich.

```md
---
aliases: 
  - Guides/Making friends
  - Developing friendships
---

# How to make friends
```
