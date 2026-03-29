---
permalink: publish/analytics
---
## Předpoklady

Pro použití analytiky na vaší stránce [[Úvod do Obsidian Publish|Obsidian Publish]] potřebujete [[Vlastní domény|vlastní doménu]].

> [!important] Důležité
> Než zapnete analytiku, ujistěte se, že vaše místní zákony a předpisy vám umožňují sledovat vaše návštěvníky. V závislosti na nástrojích, které používáte, může být nutné na vaši stránku přidat banner se souhlasem.

## Google Analytics

Zapnutí Google Analytics pro vaši stránku Obsidian Publish:

1. V postranním panelu nástrojů nalevo od okna aplikace klikněte na **Publikovat změny** ![[lucide-send.svg#icon]].
2. V dialogu **Publikovat změny** klikněte na **Změna nastavení stránky** ![[lucide-cog.svg#icon]].
3. Do pole **Sledovací kód Google Analytics** zadejte svůj sledovací kód.

Chcete-li místo Google Analytics použít Google Tag Manager, použijte vlastní JavaScript pro přidání vlastních skriptů.

## Plausible, Fathom a další analytické služby

Většinu analytických služeb můžete na svou stránku přidat prostřednictvím souboru [[Přizpůsobení stránky|publish.js]]. Nezapomeňte nahradit `yourdomain.com` svou doménou a `src` skriptu skriptem od vašeho poskytovatele analytiky.

Zde je příklad s použitím [Plausible Analytics](https://plausible.io/)

```js
var analyticsScript = document.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-domain', 'yourdomain.com');
analyticsScript.src = 'https://plausible.io/js/plausible.js';
document.head.appendChild(analyticsScript);
```

Stejný přístup lze použít pro [Fathom Analytics](https://usefathom.com/). Všimněte si změny z `data-domain` na `data-site` — různí poskytovatelé analytiky mohou mít odlišný formát pro vkládání skriptu.

```javascript
var fathom = analyticsScript.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-site', 'yourdomain.com');
analyticsScript.src = 'https://cdn.usefathom.com/script.js';
document.head.appendChild(analyticsScript);
```

## Řešení problémů

Pro ověření, že vaše stránka používá vaši analytickou službu, vypněte všechna rozšíření prohlížeče blokující reklamy, jako je uBlock Origin, která mohou bránit spuštění sledovacího skriptu.
