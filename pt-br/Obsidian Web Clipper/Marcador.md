---
permalink: web-clipper/highlight
aliases:
  - Destacar páginas web
---
O [[Introdução ao Obsidian Web Clipper|Web Clipper]] permite que você destaque texto em páginas web e selecione os elementos que deseja salvar no Obsidian. Seus destaques são salvos, para que você possa revisitá-los quando retornar a uma página.

Os destaques podem ser [[Capturar páginas web|capturados]] e salvos no Obsidian quando você abre a extensão.

## Ativar o marcador

Você pode ativar o destaque de várias maneiras, dependendo do seu navegador:

- O ícone do marcador no painel da extensão.
- Teclas de atalho, para ativar a extensão pelo teclado.
- Menu de contexto, clicando com o botão direito na página web que você está visitando.

Uma vez que o destaque esteja ativado, você pode selecionar texto, imagens e elementos que deseja destacar.

## Configurações do marcador

Você pode mudar o funcionamento do marcador acessando as configurações do Web Clipper. Aqui você também pode exportar seus destaques para um arquivo `.json`.

Existem três opções para os destaques serem inseridos na sua nota capturada através da [[Variáveis|variável]] `{{content}}`:

- **Destacar o conteúdo da página** — adiciona destaques diretamente ao texto com a [[Obsidian Flavored Markdown|sintaxe]] `==destaque==`.
- **Substituir o conteúdo da página** — retorna uma lista de destaques, sem nenhum conteúdo da página.
- **Não fazer nada** — retorna o conteúdo original sem destaques.

Você pode adicionar destaques diretamente ao seu modelo usando a variável `{{highlights}}`, por exemplo:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```
