---
permalink: publish/analytics
---
## Wymagania wstępne

Aby korzystać z analityki na swojej stronie [[Wprowadzenie do Obsidian Publish|Obsidian Publish]], potrzebujesz [[Niestandardowe domeny|niestandardowej domeny]].

> [!important] Ważne
> Przed włączeniem analityki upewnij się, że lokalne przepisy i regulacje pozwalają na śledzenie odwiedzających. W zależności od używanych narzędzi może być konieczne dodanie banera zgody na swojej stronie.

## Google Analytics

Aby włączyć Google Analytics na stronie Obsidian Publish:

1. Na wstążce, po lewej stronie okna aplikacji, kliknij **Opublikuj zmiany** ![[lucide-send.svg#icon]].
2. W oknie dialogowym **Opublikuj zmiany** kliknij **Zmień ustawienia strony** ![[lucide-cog.svg#icon]].
3. W polu **Kod śledzenia Google Analytics** wprowadź swój kod śledzenia.

Aby użyć Google Tag Manager zamiast Google Analytics, użyj niestandardowego kodu JavaScript, aby dodać własne skrypty.

## Plausible, Fathom i inne usługi analityczne

Większość usług analitycznych możesz dodać do swojej strony za pomocą pliku [[Dostosuj swoją stronę|publish.js]]. Upewnij się, że zastąpisz `yourdomain.com` swoją domeną, a atrybut `src` skryptu — skryptem od swojego operatora analityki.

Oto przykład z użyciem [Plausible Analytics](https://plausible.io/)

```js
var analyticsScript = document.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-domain', 'yourdomain.com');
analyticsScript.src = 'https://plausible.io/js/plausible.js';
document.head.appendChild(analyticsScript);
```

To samo podejście można zastosować w przypadku [Fathom Analytics](https://usefathom.com/). Zwróć uwagę na zmianę z `data-domain` na `data-site` — różni operatorzy analityki mogą mieć różny format wstawiania skryptu.

```javascript
var fathom = analyticsScript.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-site', 'yourdomain.com');
analyticsScript.src = 'https://cdn.usefathom.com/script.js';
document.head.appendChild(analyticsScript);
```

## Rozwiązywanie problemów

Aby sprawdzić, czy Twoja strona korzysta z usługi analitycznej, wyłącz wszelkie rozszerzenia przeglądarki blokujące reklamy, takie jak uBlock Origin, które mogą blokować uruchamianie skryptu śledzącego.
