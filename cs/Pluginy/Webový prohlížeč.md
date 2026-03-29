---
permalink: plugins/web-viewer
---
Webový prohlížeč je [[Základní pluginy|základní plugin]], který umožňuje otevírat externí odkazy přímo v Obsidian na desktopu. Díky tomu můžete číst obsah odkazů, aniž byste opustili aplikaci, a usnadňuje multitasking při výzkumných projektech na webu.

Externí odkazy se otevírají jako [[Karty|karta]], kterou můžete přeuspořádat, rozdělit a otevřít ve [[Vyskakovací okna|vyskakovacím okně]]. Jakékoli karty s webovými stránkami vložené v souborech [[Canvas]] lze otevřít jako karty webového prohlížeče.

Webový prohlížeč není náhradou za váš primární prohlížeč. Webový prohlížeč poskytuje rychlý způsob, jak přistupovat k webovým stránkám pro výzkum v rámci Obsidian. Nenabízí však plnou funkčnost, bezpečnostní kontroly ani rozšiřitelnost specializovaného prohlížeče.

## Zobrazení čtečky

Klikněte na ikonu brýlí pro zobrazení verze webové stránky v prostém textu. Tato funkce funguje tak, že čistí obsah pomocí knihovny Readability od Mozilly vyvinuté pro Firefox.

## Uložit do trezoru

Klikněte na ikonu dalších akcí pro uložení webové stránky do vašeho trezoru. Umístění pro ukládání stránek můžete přizpůsobit v **[[Nastavení]]** → **Webový prohlížeč**.

## Blokování reklam

Webový prohlížeč ve výchozím nastavení blokuje reklamy. Pravidla blokování reklam můžete přizpůsobit přidáním seznamů, jako je [Easylist](https://easylist.to/).

## Zabezpečení

Pokud používáte komunitní pluginy pro Obsidian, doporučujeme pro citlivé úkoly a webové stránky chráněné heslem používat místo webového prohlížeče váš primární prohlížeč.

Webový prohlížeč je založen na stejné funkci [Chromium](https://developer.chrome.com/docs/apps/reference/webviewTag), která umožňuje vkládání webových stránek do [[Canvas]]. Webový prohlížeč prošel [nezávislým auditem](https://obsidian.md/blog/cure53-second-client-audit/), který ověřil, že byl bezpečně implementován.

Pluginy pro Obsidian [[Bezpečnost pluginů#Schopnosti pluginů|nejsou v sandboxu]] a mají hlubokou kontrolu nad aplikací. Tento design umožňuje výkonnou funkčnost, ale přináší také bezpečnostní kompromisy. Když Obsidian běží, pluginy třetích stran mají plný přístup ke cookies ve webovém prohlížeči.
