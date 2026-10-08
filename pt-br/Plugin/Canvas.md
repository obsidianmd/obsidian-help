---
permalink: plugins/canvas
aliases:
  - Plugins/Canvas
mobile: true
---
Canvas é um [[Plugins nativos|plugin nativo]] para anotações visuais. Ele oferece espaço infinito para organizar notas e conectá-las a outras notas, anexos e páginas web.

Organizar suas notas em um espaço 2D ajuda você a ver e entender as conexões entre elas. Conecte notas com linhas e agrupe as relacionadas.

O Obsidian salva os canvas como arquivos `.canvas` usando o formato aberto [JSON Canvas](https://jsoncanvas.org/).

## Criar um novo canvas

Para começar a usar o Canvas, primeiro você precisa criar um arquivo para armazenar seu canvas. Você pode criar um novo canvas usando os seguintes métodos.

**Paleta de comandos:**

1. Abra a [[Paleta de comandos]].
2. Selecione **Canvas: Criar novo canvas** para criar um canvas na mesma pasta do arquivo ativo.

**Explorador de arquivos:**

- No [[Explorador de arquivos]], clique com o botão direito na pasta onde deseja criar o canvas.
- Selecione **Novo canvas**.

**Menu lateral:**

- No menu lateral vertical, selecione **Criar novo canvas** ![[lucide-layout-dashboard.svg#icon]] para criar um canvas na mesma pasta do arquivo ativo.

> [!note] A extensão de arquivo .canvas
> O Obsidian armazena os dados do seu canvas como arquivos `.canvas` usando um formato de arquivo aberto chamado [JSON Canvas](https://jsoncanvas.org/).

## Adicionar cartões

Você pode arrastar arquivos para o seu canvas a partir do Obsidian ou de outros aplicativos. Por exemplo, arquivos Markdown, imagens, áudio, PDFs ou até tipos de arquivo não reconhecidos.

### Adicionar cartões de texto

Você pode adicionar cartões somente de texto que não fazem referência a um arquivo. Você pode usar Markdown, links e blocos de código da mesma forma que em uma nota.

Para adicionar um novo cartão de texto ao seu canvas:

- Selecione ou arraste o ícone de arquivo em branco na parte inferior do canvas.

Você também pode adicionar cartões de texto clicando duas vezes no canvas.

Para converter um cartão de texto em um arquivo:

1. Clique com o botão direito no cartão de texto e selecione **Converter para arquivo...**.
2. Digite o nome da nota e selecione **Salvar**.

> [!note] Cartões somente de texto e links inversos
> Cartões somente de texto não aparecem em [[Links inversos]]. Para que apareçam, você precisa convertê-los em um arquivo.

### Adicionar cartões de notas

Para adicionar uma nota do seu cofre ao canvas:

1. Selecione ou arraste o ícone de documento na parte inferior do canvas.
2. Selecione a nota que deseja adicionar.

Você também pode adicionar notas pelo menu de contexto do canvas:

1. Clique com o botão direito no canvas e selecione **Adicionar nota do cofre**.
2. Selecione a nota que deseja adicionar.

Você também pode arrastar notas do [[Explorador de arquivos]] para o canvas.

Para mostrar apenas parte de uma nota em um cartão, clique com o botão direito no cartão e selecione **Restringir ao cabeçalho...** ou **Restringir ao bloco...**. Em seguida, escolha o cabeçalho ou bloco.

### Adicionar cartões de mídia

Para adicionar mídia do seu cofre ao canvas:

1. Selecione ou arraste o ícone de arquivo de imagem na parte inferior do canvas.
2. Selecione o arquivo de mídia que deseja adicionar.

Você também pode adicionar mídia pelo menu de contexto do canvas:

1. Clique com o botão direito no canvas e selecione **Adicionar mídia do cofre**.
2. Selecione o arquivo de mídia que deseja adicionar.

Você também pode arrastar arquivos de mídia do [[Explorador de arquivos]] para o canvas.

### Adicionar cartões de páginas web

Para incorporar uma página web no seu canvas:

1. Clique com o botão direito no canvas e selecione **Adicionar página web**.
2. Digite a URL da página web e selecione **Salvar**.

Você também pode selecionar uma URL no seu navegador e arrastá-la para o canvas para incorporá-la em um cartão.

Para abrir a página web no seu navegador, pressione `Ctrl` (ou `Cmd` no macOS) e selecione o rótulo do cartão. Ou clique com o botão direito no cartão e selecione **Abrir link externo**.

Clique com o botão direito em um cartão de página web para mais opções.

- **Copiar URL** copia o endereço da página web.
- **Alterar URL...** altera o endereço que o cartão exibe.
- **Recarregar página** carrega a página web novamente.

### Adicionar cartões de bases

Para mostrar uma [[Introdução ao Bases|base]] no seu canvas, arraste o arquivo de base do Explorador de arquivos para o canvas. O cartão exibe a base.

Um cartão de base exibe a visualização padrão da base. Para exibir uma visualização diferente:

1. Clique com o botão direito no cartão e selecione **Fixar visualização...**.
2. Selecione a visualização desejada.

Para voltar à visualização padrão, selecione **Fixar visualização...** novamente e então selecione **Mostrar visualização padrão**.

### Adicionar cartões de pastas

Arraste uma pasta do [[Explorador de arquivos]] para adicionar todos os arquivos dessa pasta ao canvas.

### Editar um cartão

Clique duas vezes em um cartão de texto ou nota para começar a editá-lo. Selecione qualquer lugar fora do cartão para parar de editá-lo. Você também pode pressionar `Escape` para parar de editar um cartão.

Você também pode editar um cartão clicando com o botão direito e selecionando **Editar**. Ou selecione o cartão e então selecione **Editar** ![[lucide-square-pen.svg#icon]] nos controles de seleção.

### Excluir um cartão

Remova cartões selecionados clicando com o botão direito em qualquer um deles e selecionando **Remover**. Ou pressione `Backspace` (ou `Delete` no macOS).

Você também pode selecionar **Remover** ![[lucide-trash-2.svg#icon]] nos controles de seleção acima da sua seleção.

### Trocar cartões

Você pode trocar um cartão de nota ou mídia por outro cartão do mesmo tipo.

Para trocar um cartão de nota:

1. Clique com o botão direito no cartão que deseja substituir.
2. Selecione **Trocar arquivo**.
3. Selecione a nota pela qual deseja substituir.

## Selecionar cartões

Selecione cartões individuais ou arraste uma seleção ao redor de múltiplos cartões.

Você também pode adicionar e remover cartões de uma seleção existente pressionando `Shift` e selecionando-os.

Pressione `Ctrl+a` (ou `Cmd+a` no macOS) para selecionar todos os cartões no canvas.

Para rolar o conteúdo de um cartão, primeiro você precisa selecioná-lo.

### Organizar cartões

Arraste um cartão selecionado para movê-lo.

Pressione `Alt` (ou `Option` no macOS) e arraste para duplicar a seleção.

Você pode pressionar `Shift` enquanto arrasta para mover apenas em uma direção.

Pressione `Space` enquanto move uma seleção para desativar o encaixe automático.

Selecionar um cartão o move para frente.

### Redimensionar um cartão

Arraste qualquer uma das bordas de um cartão para redimensioná-lo.

Você pode pressionar `Space` enquanto redimensiona para desativar o encaixe automático.

Para manter a proporção ao redimensionar, pressione `Shift` enquanto redimensiona.

### Alinhar e organizar cartões

Para alinhar vários cartões, selecione dois ou mais cartões. Nos controles de seleção, selecione **Alinhar** e então escolha uma opção.

- **Alinhar à esquerda**, **Alinhar ao centro** e **Alinhar à direita** alinham os cartões em uma linha vertical.
- **Alinhar ao topo**, **Alinhar ao meio** e **Alinhar à base** alinham os cartões em uma linha horizontal.
- **Organizar em linha**, **Organizar em coluna** e **Organizar em grade** movem os cartões para esse layout.
- **Distribuir espaçamento horizontal** e **Distribuir espaçamento vertical** espaçam os cartões uniformemente.
- **Justificar horizontalmente** e **Justificar verticalmente** redimensionam cada cartão para corresponder à largura ou altura total da seleção.

## Conectar cartões

Desenhe linhas entre cartões para mostrar relacionamentos. Adicione cores e rótulos para descrever como eles se relacionam.

### Conectar dois cartões

Para conectar dois cartões com uma linha direcionada:

1. Passe o cursor sobre uma das bordas de um cartão até ver um círculo preenchido.
2. Arraste o círculo até a borda de um cartão diferente para conectá-los.

> [!tip]- Criar um cartão a partir de uma nova conexão
> Se você arrastar a linha sem conectá-la a outro cartão, poderá criar um novo cartão na outra extremidade.

### Desconectar dois cartões

Para remover a conexão entre dois cartões:

1. Passe o cursor sobre uma linha de conexão até que dois pequenos círculos apareçam na linha.
2. Arraste um dos círculos para fora do cartão sem conectá-lo a outro.

Você também pode desconectar dois cartões clicando com o botão direito na linha entre eles e selecionando **Remover**. Ou selecione a linha e pressione `Backspace` (ou `Delete` no macOS).

### Conectar um cartão a um cartão diferente

Para mover uma das extremidades de uma linha de conexão:

1. Passe o cursor sobre uma linha de conexão até que dois pequenos círculos apareçam na linha.
2. Arraste o círculo para outro cartão para reconectá-lo.

### Navegar por uma conexão

Se dois cartões conectados estão distantes, você pode pular para o cartão na outra extremidade da conexão. Clique com o botão direito na linha perto de uma extremidade e selecione **Seguir conexão**. O canvas se move para o cartão na extremidade oposta.

### Adicionar um rótulo a uma conexão

Você pode adicionar um rótulo a uma linha para descrever o relacionamento entre dois cartões.

Para rotular uma conexão:

1. Clique duas vezes na linha.
2. Digite o rótulo e pressione `Escape` ou selecione qualquer lugar no canvas.

Você também pode rotular uma conexão selecionando-a e então selecionando **Editar rótulo** nos controles de seleção.

Para editar o rótulo de uma conexão, clique duas vezes na linha, ou clique com o botão direito na linha e selecione **Editar rótulo**.

Para remover um rótulo, selecione a conexão e então selecione **Remover rótulo** nos controles de seleção.

### Alterar a direção de uma conexão

Por padrão, uma conexão tem uma seta na extremidade que aponta para o segundo cartão. Para alterar isso:

1. Selecione a conexão.
2. Nos controles de seleção, selecione **Direção da linha**.
3. Escolha **Não direcional**, **Unidirecional** ou **Bidirecional**.

### Alterar a cor de um cartão ou conexão

1. Selecione os cartões ou conexões que deseja colorir.
2. Nos controles de seleção, selecione **Definir cor** ![[lucide-palette.svg#icon]].
3. Selecione uma cor.

## Agrupar cartões

### Agrupar cartões selecionados

Para criar um grupo vazio:

- Clique com o botão direito no canvas e selecione **Criar grupo**.

Para agrupar cartões relacionados:

1. Selecione os cartões.
2. Clique com o botão direito em qualquer um dos cartões selecionados e selecione **Criar grupo**.

**Renomear grupo:** Clique duas vezes no nome do grupo para editá-lo e pressione `Enter` para salvar.

### Adicionar um plano de fundo a um grupo

Você pode exibir uma imagem atrás dos cartões em um grupo.

1. Selecione o grupo.
2. Nos controles de seleção, selecione **Definir plano de fundo**.
3. Escolha uma imagem do seu cofre.

Para alterar o plano de fundo, selecione o grupo e então selecione **Editar plano de fundo**.

- **Substituir plano de fundo** escolhe uma imagem diferente.
- **Remover plano de fundo** remove a imagem.
- **Cobrir** faz a imagem preencher o grupo.
- **Manter proporção** mantém as proporções da imagem.
- **Repetir** repete a imagem por todo o grupo.

## Navegar pelo canvas

Use deslocamento e zoom para se mover pelo canvas.

### Deslocar o canvas

Para mover o canvas vertical e horizontalmente, também conhecido como _deslocamento_, você pode usar qualquer uma das seguintes abordagens:

- Pressione `Space` e arraste o canvas.
- Arraste o canvas usando o botão do meio do mouse.
- Role o mouse para deslocar verticalmente e pressione `Shift` enquanto rola para deslocar horizontalmente.

### Ampliar o canvas

Para ampliar o canvas, pressione `Space` ou `Ctrl` (ou `Cmd` no macOS) e role usando a roda do mouse. Ou selecione **Aumentar zoom** ![[lucide-plus.svg#icon]] e **Diminuir Zoom** ![[lucide-minus.svg#icon]] nos controles de zoom no canto superior direito.

#### Ampliar para caber

Para ampliar o canvas de modo que todos os itens fiquem visíveis, selecione **Ampliar para caber** ![[lucide-maximize.svg#icon]]. Ou use o atalho de teclado `Shift+1`.

#### Ampliar na seleção

Para ampliar o canvas de modo que todos os itens selecionados fiquem visíveis, clique com o botão direito em um cartão selecionado e selecione **Ampliar na seleção**. Ou pressione `Shift+2`.

#### Redefinir zoom

Para retornar o nível de zoom ao padrão, selecione **Redefinir zoom** nos controles de zoom no canto superior direito.


### Ir para um grupo

Para ir diretamente a um grupo em um canvas grande, abra a paleta de comandos e selecione **Canvas: Ir para grupo**. Uma lista dos grupos no seu canvas aparece. Selecione o grupo para o qual deseja ir, e o canvas se move para centralizá-lo.

## Configurações do canvas

Selecione **Configurações do canvas** ![[lucide-settings.svg#icon]] acima dos controles do canvas para alterar o comportamento do seu canvas.

- **Encaixar na grade** encaixa os cartões na grade de fundo quando você os move e redimensiona.
- **Encaixar em objetos** encaixa os cartões em cartões próximos quando você os move e redimensiona.
- **Somente leitura** impede alterações no canvas.

## Exportar um canvas como imagem

Você pode exportar um canvas como uma imagem PNG no desktop. A exportação de imagem não está disponível no aplicativo Obsidian para dispositivos móveis.

1. Abra o canvas que deseja exportar.
2. Abra a paleta de comandos e selecione **Canvas: Exportar como imagem**.
3. Escolha suas configurações.
    - **Viewport** define o que exportar. Selecione **Canvas completo** para o canvas inteiro, ou **Apenas viewport** para a parte que você pode ver agora.
    - **Zoom** define a qualidade da imagem. Um zoom maior produz uma imagem maior e mais nítida. O diálogo mostra o tamanho estimado da imagem.
    - **Mostrar logo** adiciona um logo do Obsidian no canto inferior esquerdo. Está ativado por padrão.
    - **Modo de privacidade** oculta todo o texto no seu canvas. Está desativado por padrão.
4. Selecione **Salvar**.
5. Escolha onde salvar o arquivo. O nome do arquivo é por padrão o nome do seu canvas, com a extensão `.png`.

Você não pode exportar um canvas vazio.

## Desfazer e refazer

Para desfazer sua última alteração, selecione **Desfazer** nos controles do canvas no lado direito do canvas. Ou pressione `Ctrl+Z` (Windows e Linux) ou `Command+Z` (macOS).

Para refazer uma alteração, selecione **Refazer**. Ou pressione `Ctrl+Y` ou `Ctrl+Shift+Z` (Windows e Linux), ou `Command+Y` ou `Command+Shift+Z` (macOS).

## Ajuda do Canvas

No desktop, selecione **Ajuda do Canvas** ![[lucide-help-circle.svg#icon]] abaixo dos controles do canvas para ver uma lista dos atalhos para deslocamento, zoom, seleção e movimentação de cartões.

## Incorporar um canvas

Você pode incorporar um canvas em uma nota usando a sintaxe padrão de incorporação. Para mais informações, consulte [[Incorporar arquivos#Incorporar um canvas em uma nota|Incorporar um canvas em uma nota]].

## Usar o Canvas no celular

Quando você abre um canvas em um celular ou tablet, o Obsidian exibe três dicas.

- **Arraste para deslocar**
- **Pinça para ampliar**
- **Toque e segure para adicionar / mover / selecionar**

### Abrir o menu do canvas

Toque e segure em uma área vazia do canvas. O menu possui os seguintes itens.

- **Adicionar cartão** adiciona um cartão de texto.
- **Adicionar nota do cofre** adiciona uma nota do seu cofre.
- **Adicionar mídia do cofre** adiciona mídia do seu cofre.
- **Adicionar página web** incorpora uma página web.
- **Criar grupo** cria um grupo vazio.
- **Encaixar na grade**, **Encaixar em objetos** e **Somente leitura** são as mesmas opções de **Configurações do canvas**.

### Adicionar cartões

Você pode adicionar cartões pelo menu do canvas. Também pode selecionar um ícone na parte inferior do canvas.

- O ícone de arquivo em branco adiciona um cartão de texto.
- O ícone de documento adiciona uma nota do seu cofre.
- O ícone de imagem adiciona mídia do seu cofre.

### Trabalhar com um cartão selecionado

Toque em um cartão para selecioná-lo. Uma barra de ferramentas aparece acima do cartão.

- **Remover** ![[lucide-trash-2.svg#icon]] exclui o cartão.
- **Definir cor** ![[lucide-palette.svg#icon]] altera a cor do cartão.
- **Ampliar na seleção** amplia o canvas para o cartão.
- **Editar** ![[lucide-square-pen.svg#icon]] edita o cartão.

### Mover um cartão

1. Toque no cartão para selecioná-lo.
2. Toque e segure o cartão selecionado e arraste-o para uma nova posição.

### Redimensionar um cartão

1. Toque no cartão para selecioná-lo.
2. Arraste as bordas do cartão para torná-lo maior ou menor.

### Abrir o menu do cartão

Toque e segure um cartão. O menu possui os seguintes itens.

- **Ampliar na seleção** amplia o canvas para o cartão.
- **Editar** edita o cartão.
- **Converter para arquivo...** converte um cartão de texto em uma nota.
- **Duplicar** faz uma cópia do cartão.
- **Remover** exclui o cartão.

### Editar um cartão

Para editar um cartão de texto ou de nota, use qualquer um dos métodos.

- Toque no cartão para selecioná-lo e então toque duas vezes nele. O teclado abre.
- Toque no cartão para selecioná-lo e então selecione **Editar** ![[lucide-square-pen.svg#icon]] na barra de ferramentas acima do cartão.

### Rotular uma conexão

1. Toque na linha para selecioná-la.
2. Na barra de ferramentas, selecione **Editar rótulo** ![[lucide-square-pen.svg#icon]]. O teclado abre.
3. Digite o rótulo.

Para remover um rótulo, toque na linha e então selecione **Remover rótulo** na barra de ferramentas.

### Alterar a direção de uma conexão

1. Toque na linha para selecioná-la.
2. Na barra de ferramentas, selecione **Direção da linha**.
3. Escolha **Não direcional**, **Unidirecional** ou **Bidirecional**.

### Abrir o menu da linha

Toque e segure uma linha que conecta dois cartões. O menu possui os seguintes itens.

- **Editar rótulo** adiciona ou altera o rótulo da linha.
- **Seguir conexão** move o canvas para o cartão na extremidade oposta da linha.
- **Remover** exclui a conexão.

### Conectar cartões

1. Toque em um cartão para selecioná-lo.
2. Arraste um dos círculos nas bordas para outro cartão.

Se você arrastar a linha e soltar em uma área vazia, um menu abre com **Adicionar cartão** e **Adicionar nota do cofre**. Selecione um para adicionar um cartão no final da linha.

### Desconectar cartões

Para remover uma conexão, use qualquer um dos métodos.

- Toque na linha e então selecione **Remover** ![[lucide-trash-2.svg#icon]].
- Arraste a extremidade da seta da linha de volta ao cartão de onde ela começou. A linha desaparece.

### Agrupar cartões

Para criar um grupo:

1. Toque e segure em uma área vazia do canvas.
2. Selecione **Criar grupo**.
3. Arraste as bordas do grupo para alterar seu tamanho.

Para adicionar cartões a um grupo, arraste-os para a área do grupo. Quando você move o grupo, os cartões dentro dele também se movem.

Para renomear um grupo, toque duas vezes no nome dele. O teclado abre. Digite o novo nome.

### Controles do canvas

Os controles no lado direito do canvas alteram a visualização e suas configurações.

- **Aumentar zoom** e **Diminuir zoom** alteram o nível de zoom.
- **Redefinir zoom** retorna o canvas ao nível de zoom padrão.
- **Ampliar para caber** mostra todos os cartões no canvas.
- **Desfazer** e **Refazer** revertem ou repetem sua última alteração.
- **Configurações do canvas** possui as opções **Encaixar na grade**, **Encaixar em objetos** e **Somente leitura**.

## Dicas avançadas

Criamos alguns vídeos rápidos para demonstrar alguns casos de uso avançados do Canvas.

Você pode [ver todas as 72 dicas aqui](https://obsidian.md/canvas#protips). Os vídeos de dicas só são visíveis no desktop.
