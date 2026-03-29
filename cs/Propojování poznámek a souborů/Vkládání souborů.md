---
permalink: embeds
cssclasses:
  - soft-embed
---
Naučte se, jak můžete do svých poznámek vkládat další poznámky a média. Vkládáním souborů do poznámek můžete opakovaně využívat obsah napříč celým trezorem.

Pro vložení souboru z vašeho trezoru přidejte vykřičník (`!`) před [[Interní odkazy|interní odkaz]]. Vkládat můžete soubory v jakémkoli z [[Podporované formáty souborů|podporovaných formátů]].

> [!tip] Vložení přetažením
> Na desktopu můžete podporované soubory také přetáhnout přímo do poznámky a automaticky je vložit.

## Vložení poznámky do jiné poznámky

Pro vložení poznámky:

```md
![[Interní odkazy]]
```

Můžete také vkládat odkazy na [[Interní odkazy#Odkaz na nadpis v poznámce|nadpisy]] a [[Interní odkazy#Odkaz na blok v poznámce|bloky]].

```md
![[Interní odkazy#^b15695]]
```

Text níže je příkladem vloženého bloku:

![[Interní odkazy#^b15695]]

## Vložení obrázku do poznámky

Pro vložení obrázku:

```md
![[Engelbart.jpg]]
```

![[Engelbart.jpg#outline]]

Rozměry obrázku můžete změnit přidáním `|640x480` k cíli odkazu, kde 640 je šířka a 480 je výška.

```md
![[Engelbart.jpg|100x145]]
```

Pokud zadáte pouze šířku, obrázek se škáluje podle svého původního poměru stran. Například `![[Engelbart.jpg|100]]`.

![[Engelbart.jpg#outline|100]]

Můžete také vložit externě hostovaný obrázek pomocí Markdown odkazu. Šířku a výšku můžete ovládat stejným způsobem jako u wiki odkazu.

```md
![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)
```

![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

## Vložení zvukového souboru do poznámky

Pro vložení zvukového souboru:

```md
![[Excerpt from Mother of All Demos (1968).ogg]]
```

![[Excerpt from Mother of All Demos (1968).ogg]]

## Vložení PDF do poznámky

Pro vložení PDF:

```md
![[Document.pdf]]
```

Můžete také otevřít konkrétní stránku PDF přidáním `#page=N` k cíli odkazu, kde `N` je číslo stránky:

```md
![[Document.pdf#page=3]]
```

Můžete také zadat výšku v pixelech pro vložený prohlížeč PDF přidáním `#height=[number]` k odkazu. Například:

```md
![[Document.pdf#height=400]]
```

## Vložení seznamu do poznámky

Pro vložení seznamu z jiné poznámky nejprve přidejte [[Interní odkazy#Odkaz na blok v poznámce|identifikátor bloku]] k vašemu seznamu:

```md

- položka seznamu 1
- položka seznamu 2

^my-list-id
```

Poté na seznam odkažte pomocí identifikátoru bloku:

```md
![[Moje poznámka#^my-list-id]]
```

## Vložení výsledků vyhledávání

![[Hledat#Vložení výsledků vyhledávání do poznámky]]
