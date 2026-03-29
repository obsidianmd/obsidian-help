---
permalink: publish/social-share
---
Mange sosiale nettverk viser en rik forhåndsvisning av nettstedet ditt når en bruker deler en lenke til det. Ved hjelp av [[Egenskaper]] kan du tilpasse hvordan notatene dine vises i forhåndsvisningen.

> [!warning] Advarsel
> Taggene som overstyres i denne seksjonen er **kun** synlige for webcrawlere. Vanlige nettlesere får servert den umodifiserte siden av ytelsesgrunner.

## Beskrivelse

Obsidian genererer automatisk en beskrivelse basert på notatinnholdet, men du kan oppgi din egen ved hjelp av `description`.

```yaml
---
description: En introduksjon til solsystemet vårt.
---
```

> [!note] Metatagger
> `description` overstyrer den automatisk genererte beskrivelsen i `<meta name="description" content="...">` og tilsvarende for `og:description` og `twitter:description`.

## Bilde

Du kan bruke et egendefinert bilde for lenkeforhåndsvisningen ved å legge til `image` eller `cover` med en bane til bildet. Bildet må være lastet opp til Publish.

Banen kan være en absolutt bane fra roten av hvelvet ditt:

```yaml
---
cover: "Attachments/Cover image.png"
---
```

Banen til bildet skiller mellom store og små bokstaver. I vårt forrige eksempel har vi en bane til et bilde som heter `Cover image.png`. Banen nedenfor vil ikke fungere, fordi den bruker feil bokstavstørrelse.

```yaml
---
cover: "Attachments/cover Image.png"
---
```

I stedet for en absolutt bane i hvelvet ditt kan du også bruke en ekstern URL:

```yaml
---
image: "https://example.com/cover%20image.png"
---
```

`image` og `cover` er identiske. Bruk bare én av dem.

> [!note] Metatagger
> `image` og `cover` overstyrer det automatisk genererte bildet i `<meta property="og:image" content="...">`.
