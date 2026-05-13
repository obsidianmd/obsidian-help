---
permalink: web-clipper/highlight
aliases:
  - Destacar páginas web
---
O [[Introdução ao Obsidian Web Clipper|Web Clipper]] permite que você destaque texto em páginas web e selecione os elementos que deseja salvar no Obsidian. Os destaques são salvos para que você possa vê-los quando retornar a uma página.

Os destaques podem ser salvos no Obsidian usando a extensão. Você pode definir as opções do marcador nas configurações da extensão.

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/f2674kdaot?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>

## Usar o marcador

O marcador pode ser usado em páginas web ao vivo ou no [[Leitor]]. Na visualização do Reader, criar uma seleção de texto oferece a opção de destacá-la.

Você também pode adicionar automaticamente seleções aos seus destaques, ativando o marcador:

- ![[lucide-highlighter.svg#icon]] **Ícone do marcador** no painel da extensão ou na barra de ferramentas do Reader.
- **Teclas de atalho** personalizáveis nas configurações da extensão.
- **Menu de contexto** clicando com o botão direito na página web que você está visitando.

Uma vez que o marcador esteja ativado, qualquer texto, imagem e elemento selecionado será adicionado aos seus destaques. Todos os métodos acima também permitem sair do marcador.

## Adicionar destaques às notas

Existem três opções para como os destaques podem ser inseridos nas suas notas capturadas:

- **Destacar o conteúdo da página** — adiciona destaques diretamente ao texto com a [[Obsidian Flavored Markdown|sintaxe]] `==destaque==`.
- **Substituir o conteúdo da página** — retorna uma lista de destaques, sem nenhum conteúdo da página.
- **Não fazer nada** — retorna o conteúdo original sem destaques.
 
Essas opções alteram a [[Variáveis|variável]] `{{content}}` no seu modelo. Você também pode adicionar destaques diretamente ao seu modelo usando a variável `{{highlights}}`, por exemplo:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```

## Visualizar e pesquisar destaques

Todos os destaques que você criar podem ser visualizados na sua página de Destaques. Você pode abrir essa página acessando **Configurações** → **Marcador**.

## Exportar destaques

Os destaques podem ser exportados para um arquivo `.json`, seja na página de Configurações ou na página de Destaques.
