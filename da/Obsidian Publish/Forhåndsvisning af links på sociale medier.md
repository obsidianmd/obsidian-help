---
permalink: publish/social-share
---
Mange sociale netværk viser en udvidet forhåndsvisning af din hjemmeside, når en bruger deler et link til den. Ved hjælp af [[Egenskaber]] kan du tilpasse, hvordan dine noter vises i forhåndsvisningen.

> [!warning] Advarsel
> De tags, der tilsidesættes i dette afsnit, er **kun** synlige for webcrawlere. Almindelige webbrowsere får vist den uændrede side af hensyn til ydeevnen.

## Beskrivelse

Obsidian genererer automatisk en beskrivelse baseret på noteindholdet, men du kan angive din egen ved hjælp af `description`.

```yaml
---
description: En introduktion til vores solsystem.
---
```

> [!note] Meta-tags
> `description` tilsidesætter den automatisk genererede beskrivelse i `<meta name="description" content="...">` samt de tilsvarende for `og:description` og `twitter:description`.

## Billede

Du kan bruge et brugerdefineret billede til linkforhåndsvisningen ved at tilføje `image` eller `cover` med en sti til billedet. Billedet skal være uploadet til Publish.

Stien kan være en absolut sti fra roden af din boks:

```yaml
---
cover: "Attachments/Cover image.png"
---
```


Stien til billedet skelner mellem store og små bogstaver. I vores tidligere eksempel har vi en sti til et billede med navnet `Cover image.png`. Nedenstående sti vil ikke fungere, fordi den bruger forkert brug af store/små bogstaver.

```yaml
---
cover: "Attachments/cover Image.png"
---
```


I stedet for en absolut sti i din boks kan du også bruge en ekstern URL:

```yaml
---
image: "https://example.com/cover%20image.png"
---
```


`image` og `cover` er identiske. Brug kun én af dem.

> [!note] Meta-tags
> `image` og `cover` tilsidesætter det automatisk genererede billede i `<meta property="og:image" content="...">`.
