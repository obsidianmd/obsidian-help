---
permalink: aliases
cssclasses:
  - soft-embed
---
Ak chcete odkazovať na súbor pomocou rôznych názvov, zvážte pridanie _aliasov_ k poznámke. Alias je alternatívny názov pre poznámku.

Aliasy použite na veci ako skratky, prezývky alebo na odkazovanie na poznámku v inom jazyku.

Ak chcete len zmeniť, ako odkaz vyzerá na jednom mieste, pozrite sa namiesto toho na [[Interné odkazy#Zmena zobrazeného textu odkazu|Zmena zobrazeného textu odkazu]].

![[Interné odkazy#^callout-internal-links-link-text]]

## Pridanie aliasu k poznámke

Ak chcete pridať alias k poznámke, pridajte vlastnosť `aliases` do [[Vlastnosti|vlastností]] poznámky. Aliasy by mali byť vždy formátované ako zoznam v YAML.

```md
---
aliases:
  - Doggo
  - Woofer
  - Yapper
---

# Dog
```

## Odkazovanie na poznámku pomocou aliasu

Ak chcete odkazovať na poznámku pomocou aliasu:

1. Začnite písať alias v [[Interné odkazy|internom odkaze]]. Každý alias sa zobrazí v zozname návrhov s ikonou zakrivenej šípky vedľa neho.
2. Stlačte `Enter` na výber aliasu.

Obsidian vytvorí odkaz s aliasom ako vlastným zobrazeným textom, napríklad `[[Artificial Intelligence|AI]]`.

> [!note] Poznámka
> Namiesto použitia aliasu ako cieľa odkazu (`[[AI]]`) používa Obsidian formát odkazu `[[Artificial Intelligence|AI]]`, aby sa zabezpečila interoperabilita s inými aplikáciami používajúcimi formát wiki odkazov.

## Nájdenie neprepojených zmienok pre alias

Pomocou [[Spätné odkazy|spätných odkazov]] môžete nájsť neprepojené zmienky aliasov.

Napríklad po nastavení „AI" ako aliasu pre „Artificial intelligence" môžete vidieť zmienky „AI" v iných poznámkach.

Ak prepojíte neprepojenú zmienku na alias, Obsidian zmení zmienku na [[Interné odkazy|interný odkaz]] s aliasom ako zobrazeným textom.
