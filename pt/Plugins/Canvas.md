---
permalink: plugins/canvas
---
Canvas é um [[Plugins Base|plugin principal]] para tomada de notas visuais. Oferece-lhe espaço infinito para dispor notas e ligá-las a outras notas, anexos e páginas web.

A tomada de notas visual ajuda-o a compreender as suas notas organizando-as num espaço 2D. Ligue notas com linhas e agrupe notas relacionadas para melhor compreender a relação entre elas.

Os dados do Canvas que cria no Obsidian são guardados como ficheiros `.canvas` utilizando o formato de ficheiro aberto [JSON Canvas](https://jsoncanvas.org/).

## Criar um novo Canvas

Para começar a usar o Canvas, primeiro precisa de criar um ficheiro para conter o seu Canvas. Pode criar um novo Canvas utilizando os seguintes métodos.

**Paleta de comandos:**

1. Abra a [[Paleta de comando]].
2. Selecione **Canvas: Criar novo Canvas** para criar um Canvas na mesma pasta do ficheiro ativo.

**Explorador de ficheiros:**

- No [[Explorador de ficheiros]], clique com o botão direito na pasta onde pretende criar o Canvas.
- Selecione **Novo Canvas**.

**Barra de ferramentas:**

- Na barra de ferramentas vertical, selecione **Criar novo Canvas** ![[lucide-layout-dashboard.svg#icon]] para criar um Canvas na mesma pasta do ficheiro ativo.

> [!note]  A extensão de ficheiro .canvas
> O Obsidian armazena os dados do seu Canvas como ficheiros `.canvas` utilizando um formato de ficheiro aberto chamado [JSON Canvas](https://jsoncanvas.org/).

## Adicionar cartões

Pode arrastar ficheiros para o seu Canvas a partir do Obsidian ou de outras aplicações. Por exemplo, ficheiros Markdown, imagens, áudio, PDFs, ou até tipos de ficheiro não reconhecidos.

### Adicionar cartões de texto

Pode adicionar cartões apenas de texto que não referenciam um ficheiro. Pode utilizar Markdown, ligações e blocos de código tal como numa nota.

Para adicionar um novo cartão de texto ao seu Canvas:

- Selecione ou arraste o ícone de ficheiro em branco na parte inferior do Canvas.

Também pode adicionar cartões de texto fazendo duplo clique no Canvas.

Para converter um cartão de texto num ficheiro:

1. Clique com o botão direito no cartão de texto e selecione **Converter em ficheiro...**.
2. Introduza o nome da nota e selecione **Guardar**.

> [!note] Nota
> Cartões apenas de texto não aparecem nos [[Links inversos]]. Para que apareçam, precisa de os converter num ficheiro.

### Adicionar cartões a partir de notas

Para adicionar uma nota do seu cofre ao Canvas:

1. Selecione ou arraste o ícone de documento na parte inferior do Canvas.
2. Selecione a nota que pretende adicionar.

Também pode adicionar notas a partir do menu de contexto do Canvas:

1. Clique com o botão direito no Canvas e selecione **Adicionar nota do cofre**.
2. Selecione a nota que pretende adicionar.

Ou pode adicioná-las ao Canvas arrastando o ficheiro do [[Explorador de ficheiros]].

### Adicionar cartões a partir de multimédia

Para adicionar multimédia do seu cofre ao Canvas:

1. Selecione ou arraste o ícone de ficheiro de imagem na parte inferior do Canvas.
2. Selecione o ficheiro multimédia que pretende adicionar.

Também pode adicionar multimédia a partir do menu de contexto do Canvas:

1. Clique com o botão direito no Canvas e selecione **Adicionar multimédia do cofre**.
2. Selecione o ficheiro multimédia que pretende adicionar.

Ou pode adicioná-los ao Canvas arrastando o ficheiro do [[Explorador de ficheiros]].

### Adicionar cartões a partir de páginas web

Para incorporar uma página web no seu Canvas:

1. Clique com o botão direito no Canvas e selecione **Adicionar página web**.
2. Introduza o URL da página web e selecione **Guardar**.

Também pode selecionar um URL no seu navegador e arrastá-lo para o Canvas para o incorporar num cartão.

Para abrir a página web no seu navegador, prima `Ctrl` (ou `Cmd` no macOS) e selecione a etiqueta do cartão. Ou clique com o botão direito no cartão e selecione **Abrir no navegador**.

### Adicionar cartões a partir de pastas

Arraste uma pasta do explorador de ficheiros para adicionar todos os ficheiros dessa pasta ao Canvas.

### Editar um cartão

Faça duplo clique num cartão de texto ou nota para começar a editá-lo. Clique fora do cartão para parar de o editar. Também pode premir `Escape` para parar de editar um cartão.

Também pode editar um cartão clicando com o botão direito e selecionando **Edição**.

### Eliminar um cartão

Remova cartões selecionados clicando com o botão direito em qualquer um deles e selecionando **Eliminar**. Ou prima `Backspace` (ou `Delete` no macOS).

Também pode selecionar **Remover** ![[lucide-trash-2.svg#icon]] nos controlos de seleção acima da sua seleção.

### Trocar cartões

Pode trocar um cartão de nota ou multimédia por outro cartão do mesmo tipo.

Para trocar um cartão de nota:

1. Clique com o botão direito no cartão que pretende substituir.
2. Selecione **Trocar ficheiro**.
3. Selecione a nota pela qual pretende substituir.

## Selecionar cartões

Selecione cartões no Canvas clicando neles. Pode selecionar múltiplos cartões arrastando uma seleção à volta deles.

Também pode adicionar e remover cartões de uma seleção existente premindo `Shift` e selecionando-os.

Prima `Ctrl+a` (ou `Cmd+a` no macOS) para selecionar todos os cartões no Canvas.

Para deslocar o conteúdo de um cartão, primeiro precisa de o selecionar.

### Dispor cartões

Arraste um cartão selecionado para o mover.

Prima `Alt` (ou `Option` no macOS) e arraste para duplicar a seleção.

Pode premir `Shift` enquanto arrasta para mover apenas numa direção.

Prima `Space` enquanto move uma seleção para desativar o encaixe.

Selecionar um cartão move-o para a frente.

### Redimensionar um cartão

Arraste qualquer uma das arestas de um cartão para o redimensionar.

Pode premir `Space` enquanto redimensiona para desativar o encaixe.

Para manter a proporção enquanto redimensiona, prima `Shift` enquanto redimensiona.

## Ligar cartões

Desenhe linhas entre cartões para criar relações entre eles. Utilize cores e etiquetas para descrever como se relacionam entre si.

### Ligar dois cartões

Para ligar dois cartões com uma linha direcionada:

1. Passe o cursor sobre uma das arestas de um cartão até ver um círculo preenchido.
2. Arraste o círculo até à aresta de um cartão diferente para os ligar.

> [!tip] Dica
> Se arrastar a linha sem a ligar a outro cartão, pode depois adicionar o cartão ao qual pretende ligá-la.

### Desligar dois cartões

Para remover a ligação entre dois cartões:

1. Passe o cursor sobre uma linha de ligação até aparecerem dois pequenos círculos na linha.
2. Arraste um dos círculos do cartão sem o ligar a outro.

Também pode desligar dois cartões clicando com o botão direito na linha entre eles e selecionando **Remover**. Ou selecionando a linha e premindo `Backspace` (ou `Delete` no macOS).

### Ligar um cartão a um cartão diferente

Para mover uma das extremidades de uma linha de ligação:

1. Passe o cursor sobre uma linha de ligação até aparecerem dois pequenos círculos na linha.
2. Arraste o círculo sobre a extremidade que pretende religar, para outro cartão.

### Navegar uma ligação

Se dois cartões ligados estiverem distantes, pode navegar para a origem ou o destino da ligação clicando com o botão direito na linha e selecionando **Ir para destino** ou **Ir para origem**.

### Adicionar uma etiqueta a uma ligação

Pode adicionar uma etiqueta a uma linha para descrever a relação entre dois cartões.

Para etiquetar uma ligação:

1. Faça duplo clique na linha.
2. Introduza a etiqueta e prima `Escape` ou clique em qualquer lugar no Canvas.

Também pode etiquetar uma ligação selecionando-a e depois selecionando **Editar etiqueta** nos controlos de seleção.

Para editar a etiqueta de uma ligação, faça duplo clique na linha, ou clique com o botão direito na linha e selecione **Editar etiqueta**.

### Alterar a cor de um cartão ou ligação

1. Selecione os cartões ou ligações que pretende colorir.
2. Nos controlos de seleção, selecione **Definir cor** ![[lucide-palette.svg#icon]].
3. Selecione uma cor.

## Agrupar cartões

### Agrupar cartões selecionados

Para criar um grupo vazio:

- Clique com o botão direito no Canvas e selecione **Criar grupo**.

Para agrupar cartões relacionados:

1. Selecione os cartões.
2. Clique com o botão direito em qualquer um dos cartões selecionados e selecione **Criar grupo**.

**Renomear grupo:** Faça duplo clique no nome do grupo para o editar e prima `Enter` para guardar.

## Navegar no Canvas

À medida que adiciona mais cartões ao seu Canvas, vai querer compreender como pode navegar no Canvas para ver uma parte dele. Aprenda a deslocar e ampliar para se mover pelo Canvas com facilidade.

### Deslocar o Canvas

Para mover o Canvas vertical e horizontalmente, também conhecido como _deslocamento_, pode utilizar qualquer uma das seguintes abordagens:

- Prima `Space` e arraste o Canvas.
- Arraste o Canvas utilizando o botão do meio do rato.
- Desloque o rato para deslocar verticalmente e prima `Shift` enquanto desloca para deslocar horizontalmente.

### Ampliar o Canvas

Para ampliar o Canvas, prima `Space` ou `Ctrl` (ou `Cmd` no macOS) e desloque utilizando a roda do rato. Ou selecione **Ampliar** ![[lucide-plus.svg#icon]] e **Reduzir zoom** ![[lucide-minus.svg#icon]] nos controlos de zoom no canto superior direito.

#### Zoom para ajustar

Para ampliar o Canvas de modo a que todos os itens fiquem visíveis, selecione **Zoom para ajustar** ![[lucide-maximize.svg#icon]]. Ou utilize o atalho de teclado `Shift+1`.

#### Zoom para a seleção

Para ampliar o Canvas de modo a que todos os itens selecionados fiquem visíveis, clique com o botão direito num cartão selecionado e selecione **Zoom para a seleção**. Ou utilize um atalho de teclado premindo `Shift+2`.

#### Restaurar ampliação

Para alterar o nível de zoom de volta ao predefinido, selecione **Restaurar ampliação** nos controlos de zoom no canto superior direito.

## Dicas avançadas

Criámos alguns vídeos rápidos para demonstrar alguns casos de utilização avançados do Canvas.

Pode [consultar todas as 72 dicas aqui](https://obsidian.md/canvas#protips). Note que os vídeos de dicas só são visíveis no computador.
