---
permalink: embed-web-pages
localized: '2026-03-18'
aliases:
  - Embed web pages
---
Apprenez à utiliser l'élément HTML [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) pour intégrer des pages web dans vos notes.

Pour intégrer une page web, ajoutez ce qui suit dans votre note et remplacez le texte indicatif par l'URL de la page web que vous souhaitez intégrer :

```html
<iframe src="INSÉREZ VOTRE URL ICI"></iframe>
```

> [!note] Note
> Certains sites web ne vous permettent pas de les intégrer. Ils peuvent à la place fournir des URL destinées à leur intégration. Si le site web ne prend pas en charge l'intégration, essayez de rechercher le nom du site suivi de « embed iframe ». Par exemple, « youtube embed iframe ».

> [!tip] Astuce
> Si vous utilisez [[Canvas]], vous pouvez intégrer une page web dans une carte. Pour plus d'informations, consultez [[Canvas#Ajouter des cartes depuis des pages web]].

## Intégrer une vidéo YouTube

Pour intégrer une vidéo YouTube, utilisez la même syntaxe Markdown que pour les [[Syntaxe de mise en forme de base#Images externes|images externes]] :

```md
![](https://www.youtube.com/watch?v=NnTvZWp5Q7o)
```

![](https://www.youtube.com/watch?v=NnTvZWp5Q7o)

## Intégrer un tweet

Pour intégrer un tweet, utilisez la même syntaxe Markdown que pour les [[Syntaxe de mise en forme de base#Images externes|images externes]] :

```md
![](https://twitter.com/obsdmd/status/1580548874246443010)
```

![](https://twitter.com/obsdmd/status/1580548874246443010)
