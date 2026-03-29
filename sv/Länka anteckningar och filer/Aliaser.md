---
permalink: aliases
cssclasses:
  - soft-embed
---
Om du vill referera till en fil med olika namn kan du lägga till _aliaser_ till anteckningen. Ett alias är ett alternativt namn för en anteckning.

Använd aliaser för saker som förkortningar, smeknamn, eller för att referera till en anteckning på ett annat språk.

Om du bara vill ändra hur en länk ser ut på ett ställe, se istället hur du [[Interna länkar#Ändra länkens visningstext|ändrar länkens visningstext]].

![[Interna länkar#^callout-internal-links-link-text]]

## Lägg till ett alias till en anteckning

För att lägga till ett alias för en anteckning, lägg till egenskapen `aliases` i anteckningens [[Egenskaper]]. Aliaser ska alltid formateras som en lista i YAML.

```md
---
aliases:
  - Doggo
  - Woofer
  - Yapper
---

# Dog
```

## Länka till en anteckning med ett alias

För att länka till en anteckning med ett alias:

1. Börja skriva aliaset i en [[Interna länkar|intern länk]]. Alla aliaser visas i förslagslistan med en böjd pilikon bredvid.
2. Tryck på `Enter` för att välja aliaset.

Obsidian skapar länken med aliaset som anpassad visningstext, till exempel `[[Artificial Intelligence|AI]]`.

> [!note] Notera
> Istället för att bara använda aliaset som länkdestination (`[[AI]]`), använder Obsidian länkformatet `[[Artificial Intelligence|AI]]` för att säkerställa kompatibilitet med andra applikationer som använder wikilänk-formatet.

## Hitta olänkade omnämnanden för ett alias

Genom att använda [[Bakåtlänkar]] kan du hitta olänkade omnämnanden av aliaser.

Till exempel, efter att ha ställt in "AI" som alias för "Artificial intelligence", kan du se omnämnanden av "AI" i andra anteckningar.

Om du länkar ett olänkat omnämnande till ett alias, omvandlar Obsidian omnämnandet till en [[Interna länkar|intern länk]] med aliaset som visningstext.
