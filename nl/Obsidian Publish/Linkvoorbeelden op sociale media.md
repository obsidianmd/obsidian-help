---
permalink: publish/social-share
---
Veel sociale netwerken tonen een rijke voorvertoning van je website wanneer een gebruiker er een link naar deelt. Met [[Eigenschappen]] kun je aanpassen hoe je notities in de voorvertoning verschijnen.

> [!warning] Waarschuwing
> De tags die in deze sectie worden overschreven, zijn **alleen** zichtbaar voor webcrawlers. Reguliere webbrowsers krijgen de ongewijzigde pagina te zien vanwege prestaties.

## Beschrijving

Obsidian genereert automatisch een beschrijving op basis van de notitie-inhoud, maar je kunt je eigen beschrijving opgeven met `description`.

```yaml
---
description: Een introductie tot ons zonnestelsel.
---
```

> [!note] Metatags
> `description` overschrijft de automatisch gegenereerde beschrijving in `<meta name="description" content="...">` en de equivalenten voor `og:description` en `twitter:description`.

## Afbeelding

Je kunt een aangepaste afbeelding gebruiken voor de linkvoorvertoning door `image` of `cover` toe te voegen met een pad naar de afbeelding. De afbeelding moet naar Publish zijn geüpload.

Het pad kan een absoluut pad zijn vanuit de root van je kluis:

```yaml
---
cover: "Attachments/Cover image.png"
---
```

Het pad naar de afbeelding is hoofdlettergevoelig. In ons vorige voorbeeld hebben we een pad naar een afbeelding genaamd `Cover image.png`. Het onderstaande pad werkt niet, omdat het de verkeerde hoofdletters gebruikt.

```yaml
---
cover: "Attachments/cover Image.png"
---
```

In plaats van een absoluut pad in je kluis kun je ook een externe URL gebruiken:

```yaml
---
image: "https://example.com/cover%20image.png"
---
```

`image` en `cover` zijn identiek. Gebruik er slechts één van.

> [!note] Metatags
> `image` en `cover` overschrijven de automatisch gegenereerde afbeelding in `<meta property="og:image" content="...">`.
