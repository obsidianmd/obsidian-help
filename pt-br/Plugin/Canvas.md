---
permalink: plugins/canvas
aliases:
  - Plugins/Canvas
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

Para abrir a página web no seu navegador, pressione `Ctrl` (ou `Cmd` no macOS) e selecione o rótulo do cartão. Ou clique com o botão direito no cartão e selecione **Abrir no navegador**.

### Adicionar cartões de pastas

Arraste uma pasta do [[Explorador de arquivos]] para adicionar todos os arquivos dessa pasta ao canvas.

### Editar um cartão

Clique duas vezes em um cartão de texto ou nota para começar a editá-lo. Selecione qualquer lugar fora do cartão para parar de editá-lo. Você também pode pressionar `Escape` para parar de editar um cartão.

Você também pode editar um cartão clicando com o botão direito e selecionando **Editar**.

### Excluir um cartão

Remova cartões selecionados clicando com o botão direito em qualquer um deles e selecionando **Excluir**. Ou pressione `Backspace` (ou `Delete` no macOS).

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

Se dois cartões conectados estão distantes, você pode navegar até a origem ou o destino da conexão clicando com o botão direito na linha e selecionando **Ir para destino** ou **Ir para origem**.

### Adicionar um rótulo a uma conexão

Você pode adicionar um rótulo a uma linha para descrever o relacionamento entre dois cartões.

Para rotular uma conexão:

1. Clique duas vezes na linha.
2. Digite o rótulo e pressione `Escape` ou selecione qualquer lugar no canvas.

Você também pode rotular uma conexão selecionando-a e então selecionando **Editar rótulo** nos controles de seleção.

Para editar o rótulo de uma conexão, clique duas vezes na linha, ou clique com o botão direito na linha e selecione **Editar rótulo**.

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

## Incorporar um canvas

Você pode incorporar um canvas em uma nota usando a sintaxe padrão de incorporação. Para mais informações, consulte [[Incorporar arquivos#Incorporar um canvas em uma nota|Incorporar um canvas em uma nota]].

## Dicas avançadas

Criamos alguns vídeos rápidos para demonstrar alguns casos de uso avançados do Canvas.

Você pode [ver todas as 72 dicas aqui](https://obsidian.md/canvas#protips). Os vídeos de dicas só são visíveis no desktop.
