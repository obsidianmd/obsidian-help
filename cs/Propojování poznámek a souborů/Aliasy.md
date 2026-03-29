---
permalink: aliases
cssclasses:
  - soft-embed
---
Pokud chcete na soubor odkazovat pomocí různých názvů, zvažte přidání _aliasů_ k poznámce. Alias je alternativní název pro poznámku.

Aliasy můžete použít pro zkratky, přezdívky nebo pro odkazování na poznámku v jiném jazyce.

Pokud chcete změnit pouze to, jak odkaz vypadá na jednom místě, podívejte se na [[Interní odkazy#Změna zobrazeného textu odkazu|Změna zobrazeného textu odkazu]].

![[Interní odkazy#^callout-internal-links-link-text]]

## Přidání aliasu k poznámce

Chcete-li přidat alias k poznámce, přidejte vlastnost `aliases` do [[Vlastnosti|vlastností]] poznámky. Aliasy by měly být vždy formátovány jako seznam v YAML.

```md
---
aliases:
  - Doggo
  - Woofer
  - Yapper
---

# Dog
```

## Odkaz na poznámku pomocí aliasu

Pro odkaz na poznámku pomocí aliasu:

1. Začněte psát alias do [[Interní odkazy|interního odkazu]]. Jakýkoli alias se zobrazí v seznamu návrhů s ikonou zakřivené šipky vedle něj.
2. Stiskněte `Enter` pro výběr aliasu.

Obsidian vytvoří odkaz s aliasem jako vlastním zobrazeným textem, například `[[Artificial Intelligence|AI]]`.

> [!note] Poznámka
> Namísto pouhého použití aliasu jako cíle odkazu (`[[AI]]`) používá Obsidian formát odkazu `[[Artificial Intelligence|AI]]`, aby byla zajištěna interoperabilita s ostatními aplikacemi využívajícími formát wiki odkaz.

## Nalezení neodkazovaných zmínek pro alias

Pomocí [[Zpětné odkazy|zpětných odkazů]] můžete najít neodkazované zmínky aliasů.

Například po nastavení "AI" jako aliasu pro "Artificial intelligence" můžete vidět zmínky "AI" v ostatních poznámkách.

Pokud propojíte neodkazovanou zmínku s aliasem, Obsidian zmínku přemění na [[Interní odkazy|interní odkaz]] s aliasem jako zobrazeným textem.
