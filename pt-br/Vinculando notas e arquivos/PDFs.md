---
permalink: pdf
publish: true
mobile: true
description: 'Aprenda a visualizar, pesquisar e vincular PDFs no Obsidian, e como exportar uma nota como PDF.'
---
O Obsidian abre arquivos PDF em um visualizador integrado. Você também pode incorporar um PDF em uma nota, vincular a uma passagem nele e exportar qualquer nota como PDF. Para os tipos de arquivo que o Obsidian suporta, veja [[Formatos de arquivo aceitos]].

> [!info]+ Alguns recursos são apenas para desktop
> O aplicativo Obsidian para dispositivos móveis não pode pesquisar dentro de um PDF, copiar uma citação ou um link para uma seleção, ou exportar uma nota para PDF.

## Abrir um PDF

No [[Explorador de arquivos]], selecione um PDF para abri-lo em uma aba.

> [!info]+ Anotações não são suportadas
> O Obsidian não suporta adicionar anotações ou destaques a um PDF. Para marcar um PDF, use outro aplicativo e depois abra o arquivo atualizado no seu cofre.

O visualizador possui uma barra de ferramentas com estes controles. O aplicativo Obsidian para dispositivos móveis possui a mesma barra de ferramentas.

- **Alternar barra lateral** mostra ou oculta a barra lateral, e **Opções da barra lateral** altera o que a barra lateral exibe.
- **Diminuir zoom** e **Aumentar zoom** alteram o tamanho da página.
- **Opções de exibição** altera como as páginas são dispostas.
- A caixa de página mostra a página atual. Digite um número de página para ir até ela.

Para trabalhar com o próprio arquivo PDF, como renomeá-lo ou movê-lo, selecione **Mais opções** ![[lucide-more-horizontal.svg#icon]]. Um PDF possui menos itens neste menu do que uma nota. Veja [[Menu de mais opções]].

## Navegar em um PDF

Selecione **Opções da barra lateral** e depois escolha o que exibir.

- **Miniaturas** mostra uma pequena prévia de cada página.
- **Sumário** mostra o esquema do PDF, se ele tiver um.
- **Revelar página no sumário** destaca a página atual no sumário.

Para vincular a uma página, clique com o botão direito em sua miniatura e selecione **Copiar link para a página N**, onde N é o número da página. Cole o link em uma nota.

Para vincular a uma seção, clique com o botão direito em uma entrada no sumário e selecione **Copiar link para "Título"**, onde Título é o nome da entrada. Em dispositivos móveis, pressione e segure a entrada.

## Alterar a aparência de um PDF

Selecione **Opções de exibição** para alterar o layout.

- **Ajustar à largura** e **Ajustar à altura** dimensionam a página para o visualizador.
- **Página única** mostra uma página por vez.
- **Duas páginas (ímpar)** mostra páginas lado a lado, começando com uma página ímpar à esquerda. Por exemplo, as páginas 1 e 2 são mostradas juntas, e depois as páginas 3 e 4.
- **Duas páginas (par)** mostra páginas lado a lado, começando com uma página par à esquerda. Por exemplo, a página 1 é mostrada sozinha, e depois as páginas 2 e 3 são mostradas juntas.
- **Adaptar ao tema** escurece as cores do PDF quando o tema do Obsidian é escuro.

## Pesquisar em um PDF

A pesquisa dentro de um PDF está disponível apenas no desktop. O aplicativo Obsidian para dispositivos móveis não possui pesquisa no visualizador de PDF.

1. Pressione `Ctrl+F` (Windows e Linux) ou `Command+F` (macOS).
2. Em **Pesquisar...**, digite o texto que deseja encontrar.
3. Selecione a seta para cima ou para baixo para mover entre as correspondências.

Para alterar como a pesquisa funciona, use estas opções.

- **Diferenciar maiúsculas/minúsculas** corresponde exatamente a letras maiúsculas e minúsculas. É o botão **Aa** no campo de pesquisa.
- **Destacar todos** destaca todas as correspondências. Selecione o botão de configurações ao lado das setas para encontrar esta opção.
- **Diferenciar diacríticos** trata letras com acentos como letras diferentes. Está no mesmo menu de configurações.
- **Palavras inteiras** encontra apenas palavras inteiras. Está no mesmo menu de configurações.

Selecione o botão de fechar para sair da pesquisa.

## Copiar texto de um PDF

No desktop, selecione o texto no PDF e depois clique com o botão direito nele.

- **Copiar** copia o texto.
- **Copiar como citação** copia o texto como uma citação, seguida de um link para a passagem.
- **Copiar link para seleção** copia um link para essa passagem, para que você possa colá-lo em uma nota.

Uma citação fica assim quando você a cola em uma nota.

```md
> Obsidian is awesome

[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Um link para uma seleção tem o mesmo link sozinho.

```md
[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Em dispositivos móveis, selecionar texto em um PDF mostra o menu de texto padrão do seu dispositivo. **Copiar como citação** e **Copiar link para seleção** não estão disponíveis.

## Incorporar um PDF

Para mostrar um PDF dentro de uma nota, veja como [[Incorporar arquivos#Incorporar um PDF em uma nota|incorporar um PDF em uma nota]]. Um PDF incorporado possui a mesma barra de ferramentas que o visualizador. Selecione **Editar este bloco** para alterar o link de incorporação.

## Exportar uma nota para PDF

Você pode exportar qualquer nota como PDF no desktop. A exportação para PDF não está disponível no aplicativo Obsidian para dispositivos móveis.

1. Abra a nota que deseja exportar.
2. Abra a [[Paleta de comandos]] e selecione **Exportar para PDF...**. Você também pode selecionar **Mais opções** ![[lucide-more-horizontal.svg#icon]] na nota e depois selecionar **Exportar para PDF...**.
3. Escolha suas configurações.
    - **Incluir nome do arquivo como título** adiciona o nome do arquivo no topo do PDF.
    - **Tamanho da página** define o tamanho do papel. Você pode escolher A3, A4, A5, Legal, Letter ou Tabloid.
    - **Paisagem** vira as páginas de lado.
    - **Margem** define a margem da página como **Padrão**, **Mínima** ou **Nenhuma**.
    - **Porcentagem de redução** dimensiona o conteúdo em cada página. Em 100, o conteúdo permanece em tamanho completo. Valores menores tornam o texto e as imagens menores, de modo que mais conteúdo cabe em cada página.
4. Selecione **Exportar para PDF**.
5. Escolha onde salvar o arquivo.

> [!tip]- Exportar uma nota com tema escuro
> As exportações sempre usam estilo claro, mesmo que seu tema seja escuro. Para alterar a aparência de uma exportação, você pode usar um [[Trechos CSS|trecho CSS]]. O fórum do Obsidian tem exemplos de trechos para impressão e exportação.[^1]

[^1]: Veja [How can I make export pdf look the same as my theme?](https://forum.obsidian.md/t/how-can-i-make-export-pdf-look-the-same-as-my-theme/75849) e [PDF and print style reset with code syntax highlighting](https://forum.obsidian.md/t/pdf-and-print-style-reset-with-code-syntax-highlighting/31761).
