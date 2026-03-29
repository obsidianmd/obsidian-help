---
permalink: embeds
cssclasses:
  - soft-embed
---
Naučte sa, ako môžete vkladať iné poznámky a médiá do svojich poznámok. Vkladaním súborov do poznámok môžete opakovane používať obsah v celom trezore.

Na vloženie súboru do trezora pridajte výkričník (`!`) pred [[Interné odkazy|interný odkaz]]. Vkladať môžete súbory v akomkoľvek z [[Akceptované formáty súborov|akceptovaných formátov súborov]].

> [!tip] Vloženie presunutím
> Na počítači môžete tiež presunúť podporované súbory priamo do poznámky a automaticky ich vložiť.

## Vloženie poznámky do inej poznámky

Na vloženie poznámky:

```md
![[Interné odkazy]]
```

Môžete tiež vkladať odkazy na [[Interné odkazy#Odkaz na nadpis v poznámke|nadpisy]] a [[Interné odkazy#Odkaz na blok v poznámke|bloky]].

```md
![[Interné odkazy#^b15695]]
```

Text nižšie je príkladom vloženého bloku:

![[Interné odkazy#^b15695]]

## Vloženie obrázka do poznámky

Na vloženie obrázka:

```md
![[Engelbart.jpg]]
```

![[Engelbart.jpg#outline]]

Rozmery obrázka môžete zmeniť pridaním `|640x480` k cieľu odkazu, kde 640 je šírka a 480 je výška.

```md
![[Engelbart.jpg|100x145]]
```

Ak zadáte iba šírku, obrázok sa škáluje podľa pôvodného pomeru strán. Napríklad `![[Engelbart.jpg|100]]`.

![[Engelbart.jpg#outline|100]]

Môžete tiež vložiť externe hostovaný obrázok pomocou Markdown odkazu. Šírku a výšku môžete ovládať rovnakým spôsobom ako pri wiki odkaze.

```md
![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)
```

![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

## Vloženie zvukového súboru do poznámky

Na vloženie zvukového súboru:

```md
![[Excerpt from Mother of All Demos (1968).ogg]]
```

![[Excerpt from Mother of All Demos (1968).ogg]]

## Vloženie PDF do poznámky

Na vloženie PDF:

```md
![[Document.pdf]]
```

Môžete tiež otvoriť konkrétnu stranu v PDF pridaním `#page=N` k cieľu odkazu, kde `N` je číslo strany:

```md
![[Document.pdf#page=3]]
```

Môžete tiež zadať výšku v pixeloch pre vložený PDF prehliadač pridaním `#height=[number]` k odkazu. Napríklad:

```md
![[Document.pdf#height=400]]
```

## Vloženie zoznamu do poznámky

Na vloženie zoznamu z inej poznámky najprv pridajte [[Interné odkazy#Odkaz na blok v poznámke|identifikátor bloku]] k svojmu zoznamu:

```md

- položka zoznamu 1
- položka zoznamu 2

^my-list-id
```

Potom vytvorte odkaz na zoznam pomocou identifikátora bloku:

```md
![[Moja poznámka#^my-list-id]]
```

## Vloženie výsledkov vyhľadávania

![[Hľadať#Vloženie výsledkov vyhľadávania do poznámky]]
