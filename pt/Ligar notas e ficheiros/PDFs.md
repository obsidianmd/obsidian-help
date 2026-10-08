---
permalink: pdf
publish: true
mobile: true
description: 'Aprenda a visualizar, pesquisar e criar links para PDFs no Obsidian, e como exportar uma nota como PDF.'
---
O Obsidian abre ficheiros PDF num visualizador incorporado. Também pode incorporar um PDF numa nota, criar uma ligação para uma passagem nele e exportar qualquer nota como PDF. Para os tipos de ficheiro que o Obsidian suporta, consulte [[Formatos de ficheiro aceites]].

> [!info]+ Algumas funcionalidades são apenas para computador
> A aplicação Obsidian em dispositivos móveis não consegue pesquisar dentro de um PDF, copiar uma citação ou uma ligação para uma seleção, nem exportar uma nota para PDF.

## Abrir um PDF

No [[Explorador de ficheiros]], selecione um PDF para o abrir num separador.

> [!info]+ Anotações não são suportadas
> O Obsidian não suporta adicionar anotações ou realces a um PDF. Para anotar um PDF, utilize outra aplicação e depois abra o ficheiro atualizado no seu cofre.

O visualizador tem uma barra de ferramentas com estes controlos. A aplicação Obsidian em dispositivos móveis tem a mesma barra de ferramentas.

- **Alternar barra lateral** mostra ou oculta a barra lateral, e **Opções da barra lateral** altera o que a barra lateral apresenta.
- **Reduzir zoom** e **Ampliar** alteram o tamanho da página.
- **Opções de apresentação** altera a disposição das páginas.
- A caixa de página mostra a página atual. Introduza um número de página para ir para essa página.

Para trabalhar com o próprio ficheiro PDF, como renomear ou mover, selecione **Mais opções** ![[lucide-more-horizontal.svg#icon]]. Um PDF tem menos itens neste menu do que uma nota. Consulte [[Menu de mais opções]].

## Navegar num PDF

Selecione **Opções da barra lateral** e depois escolha o que mostrar.

- **Miniaturas** mostra uma pequena pré-visualização de cada página.
- **Índice** mostra o esquema do PDF, se tiver um.
- **Revelar página no índice** destaca a página atual no índice.

Para criar uma ligação para uma página, clique com o botão direito na sua miniatura e selecione **Copiar ligação para a página N**, onde N é o número da página. Cole a ligação numa nota.

Para criar uma ligação para uma secção, clique com o botão direito numa entrada no índice e selecione **Copiar ligação para "Título"**, onde Título é o nome da entrada. Em dispositivos móveis, mantenha premida a entrada.

## Alterar a aparência de um PDF

Selecione **Opções de apresentação** para alterar a disposição.

- **Ajustar à largura** e **Ajustar à altura** dimensionam a página ao visualizador.
- **Página única** mostra uma página de cada vez.
- **Two page (odd)** mostra páginas lado a lado, começando com uma página ímpar à esquerda. Por exemplo, as páginas 1 e 2 aparecem juntas, e depois as páginas 3 e 4.
- **Two page (even)** mostra páginas lado a lado, começando com uma página par à esquerda. Por exemplo, a página 1 aparece sozinha, e depois as páginas 2 e 3 aparecem juntas.
- **Adaptar ao tema** escurece as cores do PDF quando o seu tema do Obsidian é escuro.

## Pesquisar num PDF

Pesquisar dentro de um PDF está disponível apenas no computador. A aplicação Obsidian em dispositivos móveis não tem pesquisa no visualizador de PDF.

1. Prima `Ctrl+F` (Windows e Linux) ou `Command+F` (macOS).
2. Em **Digite para pesquisar...**, introduza o texto que deseja localizar.
3. Selecione a seta para cima ou para baixo para se mover entre os resultados.

Para alterar o funcionamento da pesquisa, utilize estas opções.

- **Correspondência** diferencia maiúsculas de minúsculas exatamente. É o botão **Aa** no campo de pesquisa.
- **Realçar tudo** realça todos os resultados. Selecione o botão de definições junto às setas para encontrar esta opção.
- **Corresponder diacríticos** trata letras com acentos como letras diferentes. Está no mesmo menu de definições.
- **Palavras inteiras** encontra apenas palavras inteiras. Está no mesmo menu de definições.

Selecione o botão fechar para sair da pesquisa.

## Copiar texto de um PDF

No computador, selecione texto no PDF e depois clique com o botão direito.

- **Copiar** copia o texto.
- **Copiar como citação** copia o texto como uma citação, seguido de uma ligação para a passagem.
- **Copiar ligação para a seleção** copia uma ligação para essa passagem, para que possa colá-la numa nota.

Uma citação tem este aspeto quando a cola numa nota.

```md
> Obsidian is awesome

[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Uma ligação para uma seleção tem a mesma ligação isolada.

```md
[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Em dispositivos móveis, selecionar texto num PDF mostra o menu de texto padrão do seu dispositivo. **Copiar como citação** e **Copiar ligação para a seleção** não estão disponíveis.

## Incorporar um PDF

Para mostrar um PDF dentro de uma nota, veja como [[Incorporar ficheiros#Incorporar um PDF numa nota|incorporar um PDF numa nota]]. Um PDF incorporado tem a mesma barra de ferramentas que o visualizador. Selecione **Editar este bloco** para alterar a ligação de incorporação.

## Exportar uma nota para PDF

Pode exportar qualquer nota como PDF no computador. Exportar para PDF não está disponível na aplicação Obsidian em dispositivos móveis.

1. Abra a nota que deseja exportar.
2. Abra a [[Paleta de comando]] e selecione **Exportar PDF**. Também pode selecionar **Mais opções** ![[lucide-more-horizontal.svg#icon]] na nota, e depois selecionar **Exportar PDF**.
3. Escolha as suas definições.
    - **Incluir nome do ficheiro como título** adiciona o nome do ficheiro no topo do PDF.
    - **Tamanho de página** define o tamanho do papel. Pode escolher A3, A4, A5, Legal, Letter ou Tabloid.
    - **Paisagem** coloca as páginas na horizontal.
    - **Margem** define a margem da página como **Predefinido**, **Mínima** ou **Nenhum**.
    - **Percentagem de redução** dimensiona o conteúdo em cada página. A 100, o conteúdo mantém o tamanho original. Valores mais baixos tornam o texto e as imagens mais pequenos, para que mais conteúdo caiba em cada página.
4. Selecione **Exportar para PDF**.
5. Escolha onde guardar o ficheiro.

> [!tip]- Exportar uma nota com um tema escuro
> As exportações utilizam sempre estilo claro, mesmo que o seu tema seja escuro. Para alterar o aspeto de uma exportação, pode usar um [[Fragmentos CSS|excerto CSS]]. O fórum do Obsidian tem exemplos de excertos para impressão e exportação.[^1]

[^1]: Consulte [How can I make export pdf look the same as my theme?](https://forum.obsidian.md/t/how-can-i-make-export-pdf-look-the-same-as-my-theme/75849) e [PDF and print style reset with code syntax highlighting](https://forum.obsidian.md/t/pdf-and-print-style-reset-with-code-syntax-highlighting/31761).
