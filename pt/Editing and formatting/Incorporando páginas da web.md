---
alias: Como/Incorporar páginas da web
---

Aprenda a usar o elemento HTML [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) para incorporar páginas da Web em suas anotações.

Para incorporar uma página da Web, adicione o seguinte em sua nota e substitua o texto do espaço reservado pelo URL da página da Web que deseja incorporar:

```html
<iframe src="INSIRA SEU URL AQUI"></iframe>
```

> [!note] Nota
> Alguns sites não permitem que você os incorpore. Em vez disso, eles podem fornecer URLs destinados a incorporá-los. Se o site não oferecer suporte à incorporação, tente pesquisar o nome do site seguido de "embed iframe". Por exemplo, "youtube incorporar iframe".

> [!tip] Dica
> Se estiver usando [[Canvas]], você pode incorporar uma página da web em um cartão. Para obter mais informações, consulte [[Tela#Adicionar cartões de páginas da web]].

## Incorpore um vídeo do YouTube

O YouTube não permite que você incorpore um vídeo usando o URL normal. Em vez disso, use `https://www.youtube.com/embed/VIDEO_ID`.

Você pode encontrar o ID do vídeo navegando até o vídeo e procurando na barra de endereço do seu navegador. O ID do vídeo é o texto que vem depois de `?v=`.

Por exemplo, para incorporar o vídeo em `https://www.youtube.com/watch?v=NnTvZWp5Q7o`, adicione o seguinte à sua nota:

```html
<iframe src="https://www.youtube.com/embed/NnTvZWp5Q7o"></iframe>
```

<iframe src="https://www.youtube.com/embed/NnTvZWp5Q7o"></iframe>

## Incorporar um tweet

Embora o Twitter não tenha uma maneira oficial de incorporar tweets usando iframe, você pode usar serviços como [TwitFrame](https://twitframe.com/) para gerar um URL incorporável. Para mais informações, consulte a própria documentação do TwitFrame.

```html
<iframe
   borda="0"
   frameborder="0"
   altura="763"
   largura="550"
   src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fobsdmd%2Fstatus%2F1580548874246443010"
>
</iframe>
```

<iframe
   borda="0"
   frameborder="0"
   altura="763"
   largura="550"
   src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fobsdmd%2Fstatus%2F1580548874246443010"
>
</iframe>