---
permalink: publish/social-share
---
Många sociala nätverk visar en rik förhandsvisning för din webbplats när en användare delar en länk till den. Med hjälp av [[Egenskaper]] kan du anpassa hur dina anteckningar visas i förhandsvisningen.

> [!warning] Varning
> Taggarna som åsidosätts i detta avsnitt är **bara** synliga för webbcrawlers. Vanliga webbläsare får den omodifierade sidan av prestandaskäl.

## Beskrivning

Obsidian genererar automatiskt en beskrivning baserat på anteckningsinnehållet, men du kan ange din egen med `description`.

```yaml
---
description: En introduktion till vårt solsystem.
---
```

> [!note] Metataggar
> `description` åsidosätter den automatiskt genererade beskrivningen i `<meta name="description" content="...">` och motsvarigheterna för `og:description` och `twitter:description`.

## Bild

Du kan använda en anpassad bild för länkförhandsvisningen genom att lägga till `image` eller `cover` med en sökväg till bilden. Bilden måste vara uppladdad till Publish.

Sökvägen kan vara en absolut sökväg från roten av ditt valv:

```yaml
---
cover: "Attachments/Cover image.png"
---
```

Sökvägen till bilden är skiftlägeskänslig. I vårt tidigare exempel har vi en sökväg till en bild med namnet `Cover image.png`. Sökvägen nedan kommer inte att fungera, eftersom den använder fel skiftläge.

```yaml
---
cover: "Attachments/cover Image.png"
---
```

Istället för en absolut sökväg i ditt valv kan du också använda en extern url:

```yaml
---
image: "https://example.com/cover%20image.png"
---
```

`image` och `cover` är identiska. Använd bara en av dem.

> [!note] Metataggar
> `image` och `cover` åsidosätter den automatiskt genererade bilden i `<meta property="og:image" content="...">`.
