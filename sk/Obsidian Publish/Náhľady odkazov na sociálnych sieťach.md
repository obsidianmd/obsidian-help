---
permalink: publish/social-share
---
Mnohé sociálne siete zobrazujú bohatý náhľad vašej webovej stránky, keď používateľ zdieľa odkaz na ňu. Pomocou [[Vlastnosti|Vlastností]] môžete prispôsobiť, ako sa vaše poznámky zobrazia v náhľade.

> [!warning] Varovanie
> Značky prepísané v tejto sekcii sú viditeľné **iba** pre webové prehľadávače (crawlery). Bežným webovým prehliadačom sa zobrazuje neupravená stránka kvôli výkonu.

## Popis

Obsidian automaticky generuje popis na základe obsahu poznámky, ale môžete poskytnúť vlastný pomocou `description`.

```yaml
---
description: Úvod do našej slnečnej sústavy.
---
```

> [!note] Meta značky
> `description` prepíše automaticky vygenerovaný popis v `<meta name="description" content="...">` a ekvivalenty pre `og:description` a `twitter:description`.

## Obrázok

Pre náhľad odkazu môžete použiť vlastný obrázok pridaním `image` alebo `cover` s cestou k obrázku. Obrázok musí byť nahraný do Publish.

Cesta môže byť absolútna cesta z koreňového adresára vášho trezora:

```yaml
---
cover: "Attachments/Cover image.png"
---
```

Cesta k obrázku rozlišuje malé a veľké písmená. V našom predchádzajúcom príklade máme cestu k obrázku s názvom `Cover image.png`. Nasledujúca cesta nebude fungovať, pretože používa nesprávne veľké/malé písmená.

```yaml
---
cover: "Attachments/cover Image.png"
---
```

Namiesto absolútnej cesty vo vašom trezore môžete tiež použiť externú URL adresu:

```yaml
---
image: "https://example.com/cover%20image.png"
---
```

`image` a `cover` sú identické. Použite iba jednu z nich.

> [!note] Meta značky
> `image` a `cover` prepíšu automaticky vygenerovaný obrázok v `<meta property="og:image" content="...">`.
