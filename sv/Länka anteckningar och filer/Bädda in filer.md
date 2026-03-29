---
permalink: embeds
cssclasses:
  - soft-embed
---
Lär dig hur du kan bädda in andra anteckningar och media i dina anteckningar. Genom att bädda in filer i dina anteckningar kan du återanvända innehåll i hela ditt valv.

För att bädda in en fil i ditt valv, lägg till ett utropstecken (`!`) framför en [[Interna länkar|intern länk]]. Du kan bädda in filer i alla [[Accepterade filformat]].

> [!tip] Dra och släpp för inbäddning
> På dator kan du också dra och släppa filer som stöds direkt i din anteckning för att bädda in dem automatiskt.

## Bädda in en anteckning i en annan anteckning

För att bädda in en anteckning:

```md
![[Interna länkar]]
```

Du kan också bädda in länkar till [[Interna länkar#Länka till en rubrik i en anteckning|rubriker]] och [[Interna länkar#Länka till ett block i en anteckning|block]].

```md
![[Interna länkar#^b15695]]
```

Texten nedan är ett exempel på ett inbäddat block:

![[Interna länkar#^b15695]]

## Bädda in en bild i en anteckning

För att bädda in en bild:

```md
![[Engelbart.jpg]]
```

![[Engelbart.jpg#outline]]

Du kan ändra bilddimensionerna genom att lägga till `|640x480` till länkdestinationen, där 640 är bredden och 480 är höjden.

```md
![[Engelbart.jpg|100x145]]
```

Om du bara anger bredden skalas bilden enligt sitt ursprungliga bildförhållande. Till exempel `![[Engelbart.jpg|100]]`.

![[Engelbart.jpg#outline|100]]

Du kan också bädda in en externt värdbaserad bild genom att använda en Markdown-länk. Du kan styra bredd och höjd på samma sätt som med en wikilänk.

```md
![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)
```

![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

## Bädda in en ljudfil i en anteckning

För att bädda in en ljudfil:

```md
![[Excerpt from Mother of All Demos (1968).ogg]]
```

![[Excerpt from Mother of All Demos (1968).ogg]]

## Bädda in en PDF i en anteckning

För att bädda in en PDF:

```md
![[Document.pdf]]
```

Du kan också öppna en specifik sida i PDF:en genom att lägga till `#page=N` till länkdestinationen, där `N` är sidnumret:

```md
![[Document.pdf#page=3]]
```

Du kan också ange höjden i pixlar för den inbäddade PDF-visaren genom att lägga till `#height=[number]` till länken. Till exempel:

```md
![[Document.pdf#height=400]]
```

## Bädda in en lista i en anteckning

För att bädda in en lista från en annan anteckning, lägg först till en [[Interna länkar#Länka till ett block i en anteckning|blockidentifierare]] till din lista:

```md

- listpunkt 1
- listpunkt 2

^my-list-id
```

Länka sedan till listan med hjälp av blockidentifieraren:

```md
![[Min anteckning#^my-list-id]]
```

## Bädda in sökresultat

![[Sök#Bädda in sökresultat i en anteckning]]
