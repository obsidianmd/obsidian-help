---
permalink: plugins/canvas
mobile: true
---
Canvas é um [[Plugins Base|plugin principal]] para tomada de notas visuais. Oferece-lhe espaço infinito para dispor notas e ligá-las a outras notas, anexos e páginas web.

Dispor as suas notas num espaço 2D ajuda-o a ver e compreender as ligações entre elas. Ligue notas com linhas e agrupe notas relacionadas.

O Obsidian guarda os Canvas como ficheiros `.canvas` utilizando o formato aberto [JSON Canvas](https://jsoncanvas.org/).

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

> [!note] A extensão de ficheiro .canvas
> O Obsidian armazena os dados do seu Canvas como ficheiros `.canvas` utilizando um formato de ficheiro aberto chamado [JSON Canvas](https://jsoncanvas.org/).

## Adicionar cartões

Pode arrastar ficheiros para o seu Canvas a partir do Obsidian ou de outras aplicações. Por exemplo, ficheiros Markdown, imagens, áudio, PDFs, ou até tipos de ficheiro não reconhecidos.

### Adicionar cartões de texto

Pode adicionar cartões apenas de texto que não referenciam um ficheiro. Pode utilizar Markdown, ligações e blocos de código da mesma forma que numa nota.

Para adicionar um novo cartão de texto ao seu Canvas:

- Selecione ou arraste o ícone de ficheiro em branco na parte inferior do Canvas.

Também pode adicionar cartões de texto fazendo duplo clique no Canvas.

Para converter um cartão de texto num ficheiro:

1. Clique com o botão direito no cartão de texto e selecione **Converter em ficheiro...**.
2. Introduza o nome da nota e selecione **Guardar**.

> [!note] Cartões apenas de texto e links inversos
> Cartões apenas de texto não aparecem nos [[Links inversos]]. Para que apareçam, precisa de os converter num ficheiro.

### Adicionar cartões a partir de notas

Para adicionar uma nota do seu cofre ao Canvas:

1. Selecione ou arraste o ícone de documento na parte inferior do Canvas.
2. Selecione a nota que pretende adicionar.

Também pode adicionar notas a partir do menu de contexto do Canvas:

1. Clique com o botão direito no Canvas e selecione **Adicionar nota do cofre**.
2. Selecione a nota que pretende adicionar.

Também pode arrastar notas do [[Explorador de ficheiros]] para o Canvas.

Para mostrar apenas parte de uma nota num cartão, clique com o botão direito no cartão e selecione **Restringir ao cabeçalho...** ou **Restringir ao bloco...**. Depois escolha o cabeçalho ou bloco.

### Adicionar cartões a partir de multimédia

Para adicionar multimédia do seu cofre ao Canvas:

1. Selecione ou arraste o ícone de ficheiro de imagem na parte inferior do Canvas.
2. Selecione o ficheiro multimédia que pretende adicionar.

Também pode adicionar multimédia a partir do menu de contexto do Canvas:

1. Clique com o botão direito no Canvas e selecione **Adicionar multimédia do cofre**.
2. Selecione o ficheiro multimédia que pretende adicionar.

Também pode arrastar ficheiros multimédia do [[Explorador de ficheiros]] para o Canvas.

### Adicionar cartões a partir de páginas web

Para incorporar uma página web no seu Canvas:

1. Clique com o botão direito no Canvas e selecione **Adicionar página web**.
2. Introduza o URL da página web e selecione **Guardar**.

Também pode selecionar um URL no seu navegador e arrastá-lo para o Canvas para o incorporar num cartão.

Para abrir a página web no seu navegador, prima `Ctrl` (ou `Cmd` no macOS) e selecione a etiqueta do cartão. Ou clique com o botão direito no cartão e selecione **Abrir ligação externa**.

Clique com o botão direito num cartão de página web para mais opções.

- **Copiar endereço** copia o endereço da página web.
- **Alterar URL...** altera o endereço que o cartão mostra.
- **Recarregar página** carrega a página web novamente.

### Adicionar cartões a partir de bases

Para mostrar uma [[Introdução ao Bases|base]] no seu Canvas, arraste o ficheiro de base do Explorador de ficheiros para o Canvas. O cartão mostra a base.

Um cartão de base mostra a vista predefinida da base. Para mostrar uma vista diferente:

1. Clique com o botão direito no cartão e selecione **Fixar vista...**.
2. Selecione a vista que pretende.

Para voltar à vista predefinida, selecione **Fixar vista...** novamente e depois selecione **Mostrar vista predefinida**.

### Adicionar cartões a partir de pastas

Arraste uma pasta do [[Explorador de ficheiros]] para adicionar todos os ficheiros dessa pasta ao Canvas.

### Editar um cartão

Faça duplo clique num cartão de texto ou nota para começar a editá-lo. Selecione qualquer lugar fora do cartão para parar de o editar. Também pode premir `Escape` para parar de editar um cartão.

Também pode editar um cartão clicando com o botão direito e selecionando **Edição**. Ou selecione o cartão e depois selecione **Edição** ![[lucide-square-pen.svg#icon]] nos controlos de seleção.

### Eliminar um cartão

Remova cartões selecionados clicando com o botão direito em qualquer um deles e selecionando **Remover**. Ou prima `Backspace` (ou `Delete` no macOS).

Também pode selecionar **Remover** ![[lucide-trash-2.svg#icon]] nos controlos de seleção acima da sua seleção.

### Trocar cartões

Pode trocar um cartão de nota ou multimédia por outro cartão do mesmo tipo.

Para trocar um cartão de nota:

1. Clique com o botão direito no cartão que pretende substituir.
2. Selecione **Trocar ficheiro**.
3. Selecione a nota pela qual pretende substituir.

## Selecionar cartões

Selecione cartões individuais, ou arraste uma seleção à volta de múltiplos cartões.

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

### Alinhar e dispor cartões

Para alinhar vários cartões, selecione dois ou mais cartões. Nos controlos de seleção, selecione **Alinhar** e depois escolha uma opção.

- **Alinhar à esquerda**, **Alinhar ao centro** e **Alinhar à direita** alinham os cartões numa linha vertical.
- **Alinhar ao topo**, **Alinhar ao meio** e **Alinhar ao fundo** alinham os cartões numa linha horizontal.
- **Dispor numa linha**, **Dispor numa coluna** e **Dispor numa grelha** movem os cartões para essa disposição.
- **Distribuir espaçamento horizontal** e **Distribuir espaçamento vertical** espaçam os cartões uniformemente.
- **Justificar horizontalmente** e **Justificar verticalmente** redimensionam cada cartão para corresponder à largura ou altura total da seleção.

## Ligar cartões

Desenhe linhas entre cartões para mostrar relações. Adicione cores e etiquetas para descrever como se relacionam.

### Ligar dois cartões

Para ligar dois cartões com uma linha direcionada:

1. Passe o cursor sobre uma das arestas de um cartão até ver um círculo preenchido.
2. Arraste o círculo até à aresta de um cartão diferente para os ligar.

> [!tip]- Criar um cartão a partir de uma nova ligação
> Se arrastar a linha sem a ligar a outro cartão, pode criar um novo cartão na outra extremidade.

### Desligar dois cartões

Para remover a ligação entre dois cartões:

1. Passe o cursor sobre uma linha de ligação até aparecerem dois pequenos círculos na linha.
2. Arraste um dos círculos do cartão sem o ligar a outro.

Também pode desligar dois cartões clicando com o botão direito na linha entre eles e selecionando **Remover**. Ou selecione a linha e prima `Backspace` (ou `Delete` no macOS).

### Ligar um cartão a um cartão diferente

Para mover uma das extremidades de uma linha de ligação:

1. Passe o cursor sobre uma linha de ligação até aparecerem dois pequenos círculos na linha.
2. Arraste o círculo para outro cartão para o religar.

### Navegar uma ligação

Se dois cartões ligados estiverem distantes, pode saltar para o cartão na outra extremidade da ligação. Clique com o botão direito na linha perto de uma extremidade e selecione **Seguir ligação**. O Canvas move-se para o cartão na extremidade oposta.

### Adicionar uma etiqueta a uma ligação

Pode adicionar uma etiqueta a uma linha para descrever a relação entre dois cartões.

Para etiquetar uma ligação:

1. Faça duplo clique na linha.
2. Introduza a etiqueta e prima `Escape` ou selecione qualquer lugar no Canvas.

Também pode etiquetar uma ligação selecionando-a e depois selecionando **Editar etiqueta** nos controlos de seleção.

Para editar a etiqueta de uma ligação, faça duplo clique na linha, ou clique com o botão direito na linha e selecione **Editar etiqueta**.

Para remover uma etiqueta, selecione a ligação e depois selecione **Remover etiqueta** nos controlos de seleção.

### Alterar a direção de uma ligação

Por predefinição, uma ligação tem uma seta na extremidade que aponta para o segundo cartão. Para alterar isto:

1. Selecione a ligação.
2. Nos controlos de seleção, selecione **Direção da linha**.
3. Escolha **Sem direção**, **Unidirecional** ou **Bidirecional**.

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

### Adicionar um fundo a um grupo

Pode mostrar uma imagem por trás dos cartões num grupo.

1. Selecione o grupo.
2. Nos controlos de seleção, selecione **Definir fundo**.
3. Escolha uma imagem do seu cofre.

Para alterar o fundo, selecione o grupo e depois selecione **Editar fundo**.

- **Substituir fundo** escolhe uma imagem diferente.
- **Remover fundo** remove a imagem.
- **Cobrir** faz a imagem preencher o grupo.
- **Manter proporção** mantém as proporções da imagem.
- **Repetir** ladrilha a imagem pelo grupo.

## Navegar no Canvas

Utilize o deslocamento e a ampliação para se mover pelo Canvas.

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

Para ampliar o Canvas de modo a que todos os itens selecionados fiquem visíveis, clique com o botão direito num cartão selecionado e selecione **Zoom para a seleção**. Ou prima `Shift+2`.

#### Restaurar ampliação

Para alterar o nível de zoom de volta ao predefinido, selecione **Restaurar ampliação** nos controlos de zoom no canto superior direito.


### Ir para grupo

Para ir diretamente para um grupo num Canvas grande, abra a paleta de comandos e selecione **Canvas: Ir para grupo**. Aparece uma lista dos grupos no seu Canvas. Selecione o grupo para o qual pretende ir, e o Canvas move-se para o centrar.

## Definições do Canvas

Selecione **Definições do Canvas** ![[lucide-settings.svg#icon]] acima dos controlos do Canvas para alterar o comportamento do seu Canvas.

- **Encaixar na grelha** encaixa os cartões na grelha de fundo quando os move e redimensiona.
- **Encaixar em objetos** encaixa os cartões em cartões próximos quando os move e redimensiona.
- **Só de leitura** impede alterações ao Canvas.

## Exportar um Canvas como imagem

Pode exportar um Canvas como imagem PNG no computador. A exportação de imagem não está disponível na aplicação Obsidian em dispositivos móveis.

1. Abra o Canvas que pretende exportar.
2. Abra a paleta de comandos e selecione **Canvas: Exportar como imagem**.
3. Escolha as suas definições.
    - **Viewport** define o que exportar. Selecione **Canvas completo** para o Canvas inteiro, ou **Apenas viewport** para a parte que consegue ver agora.
    - **Ampliar** define a qualidade da imagem. Um zoom mais alto produz uma imagem maior e mais nítida. O diálogo mostra o tamanho estimado da imagem.
    - **Mostrar logótipo** adiciona um logótipo do Obsidian no canto inferior esquerdo. Está ativo por predefinição.
    - **Modo de privacidade** oculta todo o texto no seu Canvas. Está desativado por predefinição.
4. Selecione **Guardar**.
5. Escolha onde guardar o ficheiro. O nome do ficheiro predefinido é o nome do seu Canvas, com a extensão `.png`.

Não é possível exportar um Canvas vazio.

## Anular e refazer

Para anular a sua última alteração, selecione **Anular** nos controlos do Canvas no lado direito do Canvas. Ou prima `Ctrl+Z` (Windows e Linux) ou `Command+Z` (macOS).

Para refazer uma alteração, selecione **Refazer**. Ou prima `Ctrl+Y` ou `Ctrl+Shift+Z` (Windows e Linux), ou `Command+Y` ou `Command+Shift+Z` (macOS).

## Ajuda do Canvas

No computador, selecione **Ajuda do Canvas** ![[lucide-help-circle.svg#icon]] abaixo dos controlos do Canvas para ver uma lista dos atalhos para deslocar, ampliar, selecionar e mover cartões.

## Incorporar um Canvas

Pode incorporar um Canvas numa nota utilizando a sintaxe de incorporação padrão. Para mais informações, consulte [[Incorporar ficheiros#Embed a canvas in a note|Incorporar um Canvas numa nota]].

## Usar o Canvas em dispositivos móveis

Quando abre um Canvas num telemóvel ou tablet, o Obsidian mostra três dicas.

- **Arrastar para deslocar**
- **Beliscar para ampliar**
- **Toque e mantenha premido para adicionar / mover / selecionar**

### Abrir o menu do Canvas

Toque e mantenha premido numa área vazia do Canvas. O menu tem os seguintes itens.

- **Adicionar cartão** adiciona um cartão de texto.
- **Adicionar nota do cofre** adiciona uma nota do seu cofre.
- **Adicionar multimédia do cofre** adiciona multimédia do seu cofre.
- **Adicionar página web** incorpora uma página web.
- **Criar grupo** cria um grupo vazio.
- **Encaixar na grelha**, **Encaixar em objetos** e **Só de leitura** são as mesmas opções que nas **Definições do Canvas**.

### Adicionar cartões

Pode adicionar cartões a partir do menu do Canvas. Também pode selecionar um ícone na parte inferior do Canvas.

- O ícone de ficheiro em branco adiciona um cartão de texto.
- O ícone de documento adiciona uma nota do seu cofre.
- O ícone de imagem adiciona multimédia do seu cofre.

### Trabalhar com um cartão selecionado

Toque num cartão para o selecionar. Uma barra de ferramentas aparece acima do cartão.

- **Remover** ![[lucide-trash-2.svg#icon]] elimina o cartão.
- **Definir cor** ![[lucide-palette.svg#icon]] altera a cor do cartão.
- **Zoom para a seleção** amplia o Canvas para o cartão.
- **Edição** ![[lucide-square-pen.svg#icon]] edita o cartão.

### Mover um cartão

1. Toque no cartão para o selecionar.
2. Toque e mantenha premido o cartão selecionado e arraste-o para uma nova posição.

### Redimensionar um cartão

1. Toque no cartão para o selecionar.
2. Arraste os lados do cartão para o tornar maior ou mais pequeno.

### Abrir o menu do cartão

Toque e mantenha premido num cartão. O menu tem os seguintes itens.

- **Zoom para a seleção** amplia o Canvas para o cartão.
- **Edição** edita o cartão.
- **Converter em ficheiro...** converte um cartão de texto numa nota.
- **Duplicar** faz uma cópia do cartão.
- **Remover** elimina o cartão.

### Editar um cartão

Para editar um cartão de texto ou de nota, utilize qualquer um dos métodos.

- Toque no cartão para o selecionar e depois toque duas vezes nele. O teclado abre-se.
- Toque no cartão para o selecionar e depois selecione **Edição** ![[lucide-square-pen.svg#icon]] na barra de ferramentas acima do cartão.

### Etiquetar uma ligação

1. Toque na linha para a selecionar.
2. Na barra de ferramentas, selecione **Editar etiqueta** ![[lucide-square-pen.svg#icon]]. O teclado abre-se.
3. Introduza a etiqueta.

Para remover uma etiqueta, toque na linha e depois selecione **Remover etiqueta** na barra de ferramentas.

### Alterar a direção de uma ligação

1. Toque na linha para a selecionar.
2. Na barra de ferramentas, selecione **Direção da linha**.
3. Escolha **Sem direção**, **Unidirecional** ou **Bidirecional**.

### Abrir o menu da linha

Toque e mantenha premido numa linha que liga dois cartões. O menu tem os seguintes itens.

- **Editar etiqueta** adiciona ou altera a etiqueta da linha.
- **Seguir ligação** move o Canvas para o cartão na extremidade oposta da linha.
- **Remover** elimina a ligação.

### Ligar cartões

1. Toque num cartão para o selecionar.
2. Arraste um dos círculos nas suas arestas para outro cartão.

Se arrastar a linha e largar numa área vazia, abre-se um menu com **Adicionar cartão** e **Adicionar nota do cofre**. Selecione um para adicionar um cartão no fim da linha.

### Desligar cartões

Para remover uma ligação, utilize qualquer um dos métodos.

- Toque na linha e depois selecione **Remover** ![[lucide-trash-2.svg#icon]].
- Arraste a extremidade da seta da linha de volta para o cartão de onde partiu. A linha desaparece.

### Agrupar cartões

Para criar um grupo:

1. Toque e mantenha premido numa área vazia do Canvas.
2. Selecione **Criar grupo**.
3. Arraste as arestas do grupo para alterar o seu tamanho.

Para adicionar cartões a um grupo, arraste-os para a área do grupo. Quando move o grupo, os cartões dentro dele também se movem.

Para renomear um grupo, toque duas vezes no seu nome. O teclado abre-se. Introduza o novo nome.

### Controlos do Canvas

Os controlos no lado direito do Canvas alteram a vista e as suas definições.

- **Ampliar** e **Reduzir zoom** alteram o nível de zoom.
- **Restaurar ampliação** restaura o Canvas para o nível de zoom predefinido.
- **Zoom para ajustar** mostra todos os cartões no Canvas.
- **Anular** e **Refazer** revertem ou repetem a sua última alteração.
- **Definições do Canvas** tem as opções **Encaixar na grelha**, **Encaixar em objetos** e **Só de leitura**.

## Dicas avançadas

Criámos alguns vídeos rápidos para demonstrar alguns casos de utilização avançados do Canvas.

Pode [ver todas as 72 dicas aqui](https://obsidian.md/canvas#protips). Os vídeos de dicas só são visíveis no computador.
