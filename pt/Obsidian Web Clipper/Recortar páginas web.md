---
permalink: web-clipper/capture
---
Assim que instalar a extensão de navegador [[Introdução ao Obsidian Web Clipper|Web Clipper]], pode aceder à mesma de várias formas, dependendo do seu navegador:

1. O ícone do Obsidian na barra de ferramentas do seu navegador.
2. Atalhos de teclado, para ativar a extensão a partir do teclado.
3. Menu de contexto, clicando com o botão direito na página web que está a visitar.

Para guardar uma página no Obsidian, clique no botão **Adicionar ao Obsidian**.

## Capturar uma página

Quando abre a extensão, o Web Clipper extrai dados da página web atual seguindo as definições do seu [[Obsidian Web Clipper/Modelos|modelo]]. Pode criar os seus próprios modelos e personalizar o resultado usando [[Variáveis|variáveis]] e [[Filtros|filtros]].

Por predefinição, o Web Clipper tenta extrair inteligentemente apenas o conteúdo principal do artigo, excluindo outros elementos na página. No entanto, pode substituir este comportamento das seguintes formas:

- Se um modelo personalizado estiver presente, utiliza o seu modelo.
- Se uma seleção estiver presente, utiliza a seleção. Pode usar `Ctrl/Cmd+A` para selecionar a página inteira.
- Se existirem [[Marcador|destaques]], utiliza os destaques.

## Transferir imagens

As imagens não são automaticamente transferidas quando utiliza o Web Clipper. Em vez disso, as imagens ligam ao seu URL baseado na web. Isto poupa espaço no seu cofre, mas significa que as imagens não estarão acessíveis offline, ou se o URL deixar de funcionar.

Pode transferir imagens para qualquer ficheiro no Obsidian usando o [[Paleta de comando|comando]] chamado **Transferir anexos para o ficheiro atual**. Este comando também pode ser mapeado para um atalho de teclado no Obsidian.

## Atalhos de teclado

O Web Clipper inclui atalhos de teclado que pode usar para acelerar o seu fluxo de trabalho. Para alterar os mapeamentos de teclas, vá a **Definições do Web Clipper** → **Geral** e siga as instruções para o seu navegador. Os mapeamentos podem ser alterados para todos os navegadores exceto o Safari, que não suporta a edição de atalhos de teclado.

| Ação                          | macOS          | Windows/Linux   |
| ----------------------------- | -------------- | --------------- |
| Abrir clipper                 | `Cmd+Shift+O`  | `Ctrl+Shift+O`  |
| Recorte rápido                | `Opt+Shift+O`  | `Alt+Shift+O`   |
| Alternar marcador             | `Opt+Shift+H`  | `Alt+Shift+H`   |
| Alternar leitor               | `Opt+Shift+R`  | `Alt+Shift+R`   |

## Funcionalidade da interface

A interface do Web Clipper está dividida em quatro secções:

1. **Cabeçalho** onde pode alternar modelos, ativar o [[Marcador|realce]], o [[Leitor|modo de leitura]] e aceder às definições.
2. **Propriedades** mostra os [[Propriedades|metadados]] extraídos da página que serão guardados como [[Propriedades]] no Obsidian.
3. **Conteúdo da nota** que será guardado no Obsidian.
4. **Rodapé** permite selecionar o cofre e a pasta, e adicionar ao Obsidian.

A funcionalidade do cabeçalho inclui:

- ![[lucide-chevrons-up-down.svg#icon]] **Modelo** alternador para usar os [[Obsidian Web Clipper/Modelos|modelos]] guardados, adicionados nas definições da extensão.
- ![[lucide-more-horizontal.svg#icon]] Botão **Mais** para apresentar variáveis da página que pode usar nos modelos.
- ![[lucide-highlighter.svg#icon]] Botão **Marcador** para ativar o [[Marcador|realce]].
- ![[lucide-book-icon.svg#icon]] Botão **Leitor** para ativar a [[Leitor|vista de leitura]].
- ![[lucide-picture-in-picture-2.svg#icon]] Botão **Incorporar** para mover o Web Clipper do popup para a página.
- ![[lucide-settings.svg#icon]] Botão **Definições** para abrir as definições da extensão.

A funcionalidade do rodapé inclui:

- Botão **Adicionar ao Obsidian** para guardar dados no Obsidian.
- Menu suspenso de **Cofre** para alternar entre cofres guardados, adicionados nas definições do Web Clipper.
- Campo **Pasta** para definir em que pasta guardar.
- **Interpretador** para executar [[Interpretador|pedidos em linguagem natural]] na página.
