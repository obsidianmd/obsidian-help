---
permalink: web-clipper/highlight
---
O [[Introdução ao Obsidian Web Clipper|Web Clipper]] permite-lhe destacar texto em páginas web e selecionar os elementos que pretende guardar no Obsidian. Os seus realces são guardados, para que possa revisitá-los quando regressar a uma página.

Os realces podem ser [[Recortar páginas web|capturados]] e guardados no Obsidian quando abre a extensão.

## Ativar o marcador de realce

Pode ativar o realce de várias formas, dependendo do seu navegador:

- O ícone do marcador de realce no painel da extensão.
- Atalhos de teclado, para ativar a extensão a partir do teclado.
- Menu de contexto, clicando com o botão direito na página web que está a visitar.

Quando o realce está ativado, pode selecionar texto, imagens e elementos que pretende destacar.

## Definições do marcador de realce

Pode alterar o comportamento do marcador de realce acedendo às definições do Web Clipper. Aqui também pode exportar os seus realces para um ficheiro `.json`.

Existem três opções para os realces serem inseridos na sua nota recortada através da [[Variáveis|variável]] `{{content}}`:

- **Destacar o conteúdo da página** — adiciona realces diretamente ao texto com a [[Obsidian Flavored Markdown|sintaxe]] `==realce==`.
- **Substituir o conteúdo da página** — devolve uma lista de realces, sem qualquer conteúdo da página.
- **Não fazer nada** — devolve o conteúdo original sem realces.

Pode adicionar realces diretamente ao seu modelo utilizando a variável `{{highlights}}`, por exemplo:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```
