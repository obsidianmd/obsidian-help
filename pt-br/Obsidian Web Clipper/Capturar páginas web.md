---
permalink: web-clipper/capture
---
Depois de instalar a extensão de navegador do [[Introdução ao Obsidian Web Clipper|Web Clipper]], você pode acessá-la de várias maneiras, dependendo do seu navegador:

1. O ícone do Obsidian na barra de ferramentas do seu navegador.
2. Teclas de atalho, para ativar a extensão pelo teclado.
3. Menu de contexto, clicando com o botão direito na página web que você está visitando.

Para salvar uma página no Obsidian, clique no botão **Adicionar ao Obsidian**.

## Capturar uma página

Quando você abre a extensão, o Web Clipper extrai dados da página web atual seguindo as configurações do seu [[Obsidian Web Clipper/Modelos|modelo]]. Você pode criar seus próprios modelos e personalizar a saída usando [[Variáveis|variáveis]] e [[Filtros|filtros]].

Por padrão, o Web Clipper tenta extrair de forma inteligente apenas o conteúdo principal do artigo, excluindo outros elementos da página. No entanto, você pode substituir esse funcionamento das seguintes maneiras:

- Se um modelo personalizado estiver presente, ele usa seu modelo.
- Se uma seleção estiver presente, ele usa a seleção. Você pode usar `Ctrl/Cmd+A` para selecionar a página inteira.
- Se algum [[Destacar páginas web|destaque]] estiver presente, ele usa os destaques.

## Baixar imagens

As imagens não são baixadas automaticamente quando você usa o Web Clipper. Em vez disso, as imagens apontam para sua URL na web. Isso economiza espaço no seu cofre, mas significa que as imagens não estarão acessíveis offline ou se a URL parar de funcionar.

Você pode baixar imagens de qualquer arquivo no Obsidian usando o [[Paleta de comandos|comando]] chamado **Baixar anexos do arquivo atual**. Este comando também pode ser mapeado para uma tecla de atalho no Obsidian.

## Teclas de atalho

O Web Clipper inclui atalhos de teclado que você pode usar para agilizar seu fluxo de trabalho. Para alterar os mapeamentos de teclas, vá em **Configurações do Web Clipper** → **Geral** e siga as instruções para o seu navegador. Os mapeamentos podem ser alterados em todos os navegadores, exceto o Safari, que não suporta edição de teclas de atalho.

| Ação                           | macOS          | Windows/Linux   |
| ------------------------------ | -------------- | --------------- |
| Abrir o clipper                | `Cmd+Shift+O`  | `Ctrl+Shift+O`  |
| Captura rápida                 | `Opt+Shift+O`  | `Alt+Shift+O`   |
| Alternar modo de destaque      | `Opt+Shift+H`  | `Alt+Shift+H`   |

## Funcionalidade da interface

A interface do Web Clipper é dividida em quatro seções:

1. **Cabeçalho** onde você pode alternar modelos, ativar o [[Destacar páginas web|destaque]], o [[Leitor|modo de leitura]] e acessar configurações.
2. **Propriedades** mostra os [[Propriedades|metadados]] extraídos da página que serão salvos como [[Propriedades]] no Obsidian.
3. **Conteúdo da nota** que será salvo no Obsidian.
4. **Rodapé** permite selecionar o cofre e a pasta, e adicionar ao Obsidian.

As funcionalidades do cabeçalho incluem:

- Menu suspenso de **Modelo** para alternar entre seus [[Obsidian Web Clipper/Modelos|modelos]] salvos adicionados nas configurações do Web Clipper.
- Botão **Mais (...)** para exibir variáveis da página que você pode usar em modelos.
- Botão **Marcador** para ativar o [[Destacar páginas web|destaque]].
- Botão de **Engrenagem** para abrir as configurações do Web Clipper.

As funcionalidades do rodapé incluem:

- Botão **Adicionar ao Obsidian** para salvar dados no Obsidian.
- Menu suspenso de **Cofre** para alternar entre cofres salvos adicionados nas configurações do Web Clipper.
- Campo de **Pasta** para definir em qual pasta salvar.
- **Interpretador** para executar [[Interpretar páginas web|prompts em linguagem natural]] na página.
