O Canvas é uma ferramenta para anotações de forma visual.  Insira notas e outros recurso em um canvas infinito e conecte eles com linhas.

Criar anotações de forma visual permite que você utilizar aspectos visuais, como tamanho e posição, para criar um sentido entre as notas. Utilize linhas e relacionamento de grupos para criar conexão entre os elementos e melhorar o entendimento da relação entre notas.

## Criar um novo canvas

Para iniciar o uso de Carvas, você primeiro precisa criar um arquivo que possua o seu canvas. Você pode criar um novo canvas usando os seguintes métodos:

**Fita:**

- Na fita da esquerda, selecione **Criar novo canvas (icone de quatro retângulos)** para criar um novo canvas na mesma pasta do arquivo ativo.

**Paleta de comandos:**

1. Abra a [[en/Plugins/Command palette|paleta de comandos]].
2. Selecione **Canvas: Criar novo canvas** para criar o canvas na mesma pasta do arquivo ativo.

**Explorador de arquivos:**

- No [[pt-br/Plugins/Explorador de arquivos]], clique com o botão direito do mouse na pasta que você deseja criar o canvas.
- Selecione **Novo canvas**.

> [!note]  A extensão .canvas do arquivo
> O Obsidian armazena a configuração para cada canvas em formato JSON customatizado em um arquivo com extensão `.canvas`.

## Adicionando cartão

Você pode arrastar arquivos do Obsidian ou de outras aplicações diretamente para dentro do seu canvas. Por exemplo, arquivos Markdown, imagens, áudio, PDFs, ou até tipos de arquivos desconhecidos.

### Adicionar cartões de texto

Você pode adicionar cartões somente de texto que não fazem referência a um arquivo. Você pode usar Markdown, links e blocos de código assim com em qualquer outra nota.

Para adicionar um novo cartão de texto no canvas:

- Selecione ou arraste o icone em branco que está na parte inferior do canvas.

Você também pode adicionar cartões de texto clicando duas vezes diretamente no canvas.

Para converter um cartão de texto em um arquivo:

1. Clique com o direito no cartão de texto e selecione **Converter para arquivo...**
4. Insiera o nome da nota e então selecione **Salvar**.

> [!observação]
> Cartões somente de texto não aparecem nos [[pt-br/Plugins/Links Inversos]]. Para fazer eles aparecerem, você precisa transformá-los em arquivo.

### Adicione cartões de notas

Para adicione uma nota do seu cofre no canvas:

1. Selecione ou arraste o icone de documento que está na parte inferior do canvas.
2. Selecione a nota que você deseja adicionar.

Você também pode adicionar notas do menu de contexto do canvas:

1. Clique com o direito no canvas e selecione **Adicionar nota do cofre**.
2. Selecione a nota que você deseja adicionar.

Ou, você pode adicionar simplesmente arrastando o arquivo do [[pt-br/Plugins/Explorador de arquivos]] para o canvas.

### Adicionar arquivos de mídia

Para adicionar arquivos de mídia do seu cofre para o canvas:

1. Selecione ou arraste o ícone de arquivo de imagem que está na parte inferior do canvas.
2. Selecione o arquivo de mídia que você deseja adicionar.

Você também pode adicionar mídia pelo menu de contexto do canvas:

1. Clique com o direito no canvas e elecione **Adicionar mídia do cofre**.
2. Selecione o arquivo de mídia que você deseja adicionar.

Ou, você pode adicionar simplesmente arrastando o arquivo do [[pt-br/Plugins/Explorador de arquivos]] para o canvas.

### Adicionar cartões de páginas web

Para incorporar uma página web no canvas:

1. Clique com o direito no canvas e selecione a opção **Adicionar página web**.
2. Insira a URL da página web e selecione **Salvar**.

Você também pode selecionar a URL no seu navegador e então arrastar ela diretamente para o canvas para incorporar a página em um cartão.

Para abrir a página web no navegador, pressione `Ctrl` (ou `Cmd` no macOS) e selecione o título do cartão. Ou, clique com o direito no cartão e selecione **Abrir no Navegador**.

### Adicionar cartões a partir de pastas

Arraste a pasta do explorador de arquivos para adicionar todos os arquivos daquela pasta ao canvas.

### Edite um cartão

Clique duas vezes no texto ou no cartão para iniciar a edição do mesmo. Clique fora do cartão para parar a edição. Você também pode pressionar `Escape` para parar a edição do cartão.

Você também pode editar o cartão clicando com o direito e selecionando a opção **Editar**.

### Remover um cartão

Para excluir o cartão selecionado clique com o direito e selecione **Remover**. Ou, pressione `Backspace` (ou `Delete` no macOS).

Você também pode selecionar **Remover** (icone de lixeira) na seleção de controle acima da seleção do cartão.

### Trocar arquivos

Você pode trocar um cartão de nota ou mídia por outro cartão do mesmo tipo.

Para trocar um cartão de nota:

1. Clique com o direito no cartão de nota que você deseja trocar.
2. Selecione **Trocar arquivo**.
3. Selecione a nota que você deseja trocar.

## Selecionando cartões

Clique nos cartões do canvas para selecioná-los. Você pode selecionar múltiplos cartões arrastando a seleções por cima deles.

Você também pode adicionar e remover cartões de uma seleção existente pressionando `Shift` e selecionando eles.

Pressione `Ctrl+a` (ou `Cmd+x` no macOS) para selecionar todos os cartões do canvas.

Ao selecionar um cartão você pode utilizar a barra de rolagem da nota dentro do próprio cartão.


### Organizar cartões

Arraste os cartões selecionados para movê-los.

Pressine `Alt` (ou `Option` no macOS) e arraste para duplicar a seleção.

Você pode pressionar `Shift` enquanto arrasta para mover em apensa uma direção.

Pressione `Space` enquanto move a seleção para desabilitar o *snapping*.

Selecionar um cartão move o mesmo para frente.

### Redimensionar um cartão

Arraste qualquer borda do cartão para redimensionar.

Você pode pressionar `Space` enquanto redimensiona para desabilitar *snapping*.

Para manter o aspecto de proporção pressione `Shift` enquanto redimensiona.


## Conectar cartões

Desenhe linhas entre cartões para criar relacionamento entre eles. Use cores e rótulos para descrever como eles se relacionam.

### Conectar dois cartões

Para conectar dois cartões com uma linha direta:

1. Passe o mouse sobre uma das bordas do cartão até você ver um circulo preenchido.
2. Arraste o circulo para a borda de outro cartão para conectá-los.

> [!dica]
> Se você arrastar a linha sem conectá-la a outro cartão, você pode adicionar o cartão que você deseja conectar.

### Desconectar os cartões

Para remover a conexão entre dois cartões:

1. Passe o mouse sobre a conexão até aparecer dois pequenos circulos na linha.
2. Arraste um dos circulos de um cartão sem conectá-lo a outro cartão.

Você também pode desconectar dois cartões clicando com o botão direito na linha entre ele e, então, selecionando **Remover**. Ou, selecionar a linha e pressionando `Backspace` (ou `Delete` on macOS).

### Conectar um cartão a um cartão diferente

Para mover uma das extremidades de uma linha de conexão:

1. Passe o cursor sobre a linha de conexão até aparecer dois pequenos circulos na linha.
2. Arraste o circulo da extremidade que você deseja conectar até  o cartão.

### Navegar em uma conexão

Se dois cartões conectados estão posicionados distantes um do outro, você pode navegar para a fonte ou para o alvo clicando com o direito na linha e selecionando **Ir para o alvo** ou **Ir para a fonte**.

### Adicionar um rótulo para a conexão

Você pode adicionar um rótulo para uma linha para descrever a relação entre dois cartões.

Para rotular uma conexão:

1. Clique duas vezes na linha.
2. Insira o rótulo e então pressione `Escape` ou clique em qualquer lugar do canvas.

bém pode adicionar um rótulo de conexão clicando no icone **Editar rótulo** na seleção de controles.

Para editar o rótulo de conexão, clique duas vezes na linha, ou cilque com o direito e então selecione **Editar rótulo**.

### Mude a cor de conexão ou de um cartão

1. Selecione os cartões ou conexões você deseja mudar a cor.
2. Na seleção de controles, selecione **Definir Cor**;
3. Selecione uma cor.

## Agrupando cartões

### Agrupando cartões selecionandos

Para criar um grupo vazio:

- Clique com o direito no canvas e selecione **Criar grupo**.

Para agrupar cartões relacionados:

1. Selecione os cartões.
2. Clique com o direito em algum dos cartões selecionar e então selecione **Criar grupo**.

**Renomear grupo:** Clique duas vezes no nome do grupo para editá-lo, e então pressione `Enter` para salvar.

## Navegando no canvas

Conforme você adicionar mais cartões no canvas, você vai querer entender como você pode navegar no canvas para olhar todas as partes dele. Aprenda como deslocar e dar zoom para mover  pelo canvas com facilidade.

### Deslocamento no canvas

Para mover o canvas verticalmente e horizontalmente, também conhecido como *panning*, você pode usar alguns das seguintes abordagens:

- Pressione `Space` e arraste o canvas.
- Arraste o canvas usando o botão do meio do mouse.
- Use o scroll do mouse para movimentar verticalmente, e pressione `Shift` enquanto usa o scroll do mouse para movimentar horizontalmente.

### Aplicat zoom no canvas

To zoom the canvas, press `Space`  or `Ctrl` (or `Cmd` on macOS) and scroll using the mouse wheel. Or, select **Zoom in** (plus sign) and **Zoom out** (minus sign) from the zoom controls in the upper-right corner.
Para aplicar zoom no carvas, pressione `Space` or `Ctrl` (ou `Cmd` no macOS) e utilize o scroll do mouse. Ou, selecione **Aumentar zoom** (sinal de mais) e **Diminuir zoom** (sinal de menos) do controle de zoom no canto superior direito.

#### Ampliar para caber

Para aplicar o zoom no canvas de forma que cada item fique visível, selecione **Ampliar para caber** (ícone do quadrado tracejado). Ou, utilize o atalho do teclado `Shift + 1`.

#### Ampliar na seleção

To zoom the canvas so that all selected items are visible, right-click a selected card and then select **Zoom to selection**. Or, use a keyboard shortcut by pressing `Shift+2`.
Para aplicar o zoom no canvas de forma que o item selecionado fique visível, clique com o direito no cartão selecionado e então selecione **Ampliar na seleção**. Ou, use um atalho do teclado pressionando ``Shift + 2`.

#### Redefinir zoom

Para mudar o nível do zoom novamente para o valor padrão, selecione **Redefinir zoom** na barra de controle no canto superior direito.
