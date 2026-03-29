---
permalink: publish/social-share
---
Mnoho sociálních sítí zobrazuje bohatý náhled vašich webových stránek, když uživatel sdílí odkaz na ně. Pomocí [[Vlastnosti|Vlastností]] můžete přizpůsobit, jak se vaše poznámky zobrazí v náhledu.

> [!warning] Varování
> Štítky přepsané v této sekci jsou viditelné **pouze** pro webové crawlery. Běžným webovým prohlížečům je pro zajištění výkonu zobrazena nemodifikovaná stránka.

## Popis

Obsidian automaticky generuje popis na základě obsahu poznámky, ale můžete poskytnout vlastní pomocí `description`.

```yaml
---
description: Úvod do naší sluneční soustavy.
---
```

> [!note] Meta štítky
> `description` přepíše automaticky vygenerovaný popis v `<meta name="description" content="...">` a ekvivalenty pro `og:description` a `twitter:description`.

## Obrázek

Můžete použít vlastní obrázek pro náhled odkazu přidáním `image` nebo `cover` s cestou k obrázku. Obrázek musí být nahrán na Publish.

Cesta může být absolutní cesta od kořene vašeho trezoru:

```yaml
---
cover: "Attachments/Cover image.png"
---
```

Cesta k obrázku rozlišuje malá a velká písmena. V našem předchozím příkladu máme cestu k obrázku s názvem `Cover image.png`. Následující cesta nebude fungovat, protože používá nesprávnou velikost písmen.

```yaml
---
cover: "Attachments/cover Image.png"
---
```

Místo absolutní cesty ve vašem trezoru můžete také použít externí URL:

```yaml
---
image: "https://example.com/cover%20image.png"
---
```

`image` a `cover` jsou identické. Použijte pouze jedno z nich.

> [!note] Meta štítky
> `image` a `cover` přepíše automaticky vygenerovaný obrázek v `<meta property="og:image" content="...">`.
