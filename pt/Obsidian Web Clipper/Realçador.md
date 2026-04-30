---
permalink: web-clipper/highlight
aliases:
  - Destacar páginas web
---
O [[Introdução ao Obsidian Web Clipper|Web Clipper]] permite-lhe destacar texto em páginas web e selecionar os elementos que pretende guardar no Obsidian. Os realces são guardados para que possa vê-los quando regressar a uma página.

Os realces podem ser guardados no Obsidian utilizando a extensão. Pode definir as opções do marcador de realce nas definições da extensão.

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/f2674kdaot?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>

## Utilizar o marcador de realce

O marcador de realce pode ser utilizado em páginas web ao vivo ou no [[Leitor]]. Na vista do Reader, criar uma seleção de texto dá-lhe a opção de a destacar.

Também pode adicionar automaticamente seleções aos seus realces, ativando o marcador de realce:

- ![[lucide-highlighter.svg#icon]] **Ícone do marcador de realce** no painel da extensão ou na barra de ferramentas do Reader.
- **Atalho de teclado** personalizável nas definições da extensão.
- **Menu de contexto**, clicando com o botão direito na página web que está a visitar.

Quando o marcador de realce está ativado, qualquer texto, imagem e elemento selecionado será adicionado aos seus realces. Todos os métodos acima também permitem sair do marcador de realce.

## Adicionar realces a notas

Existem três opções para a forma como os realces podem ser inseridos nas suas notas recortadas:

- **Destacar o conteúdo da página** — adiciona realces diretamente ao texto com a [[Obsidian Flavored Markdown|sintaxe]] `==realce==`.
- **Substituir o conteúdo da página** — devolve uma lista de realces, sem qualquer conteúdo da página.
- **Não fazer nada** — devolve o conteúdo original sem realces.
 
Estas opções alteram a [[Variáveis|variável]] `{{content}}` no seu modelo. Também pode adicionar realces diretamente ao seu modelo utilizando a variável `{{highlights}}`, por exemplo:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```

## Ver e pesquisar realces

Todos os realces que criar podem ser visualizados na sua página de Realces. Pode abrir esta página acedendo a **Definições** → **Marcador de realce**.

## Exportar realces

Os realces podem ser exportados para um ficheiro `.json`, quer na página de Definições quer na página de Realces.
