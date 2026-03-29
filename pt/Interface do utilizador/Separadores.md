---
permalink: tabs
publish: true
mobile: true
description: 'Aprenda a abrir, organizar e gerenciar abas no Obsidian, incluindo fixação, empilhamento e visualizações vinculadas.'
---
Os separadores no Obsidian funcionam de forma semelhante aos separadores noutras aplicações, como navegadores web.

Pode abrir quantos separadores quiser no Obsidian. Também pode organizar os separadores para criar esquemas personalizados que persistem até à próxima vez que abrir a aplicação.

> [!note] Separadores no móvel
> No móvel, pode gerir os separadores abertos a partir do contador de separadores na [[Aplicação móvel#Barra de Navegação|Barra de Navegação]].

## Abrir um novo separador

No topo da janela da aplicação, junto ao último separador à direita, selecione **Novo separador** ![[lucide-plus.svg#icon]]. Ou utilize um atalho de teclado:

- **Windows e Linux:** `Ctrl+t`
- **macOS:** `Cmd+t`

## Abrir uma ligação

Selecione uma ligação no Obsidian para a abrir no separador ativo.

Para abrir uma ligação num novo separador, pressione `Ctrl` (ou `Cmd` no macOS) e selecione a ligação.

Seguem-se todas as teclas modificadoras que pode utilizar para abrir ligações de várias formas:

|Ação|MacOS|Windows/Linux|
|---|---|---|
|**Navegar**|_Nenhuma_|_Nenhuma_|
|**Novo Separador**|`⌘` (+ `Shift` no Modo de Origem)|`Ctrl` (+ `Shift` no Modo de Origem)|
|**Novo Grupo de Separadores**|`⌘` `⌥`| `Ctrl` `Alt`|
|**Nova Janela**|`⌘` `⌥` `Shift`|`Ctrl` `Alt` `Shift`|

## Organizar os separadores e janelas

Cada separador pertence a um _grupo de separadores_. Pode arrastar e largar separadores para os reorganizar dentro de um grupo de separadores, movê-los para um grupo de separadores diferente ou criar um novo grupo de separadores. No computador, pode arrastar separadores para fora da janela para os abrir numa [[Janelas flutuantes|janela flutuante]] separada.

Os separadores nas barras laterais mostram apenas o ícone. Passe o cursor sobre o ícone para mostrar uma dica com o título do separador.

### Organizar separadores

Para alterar a ordem dos separadores, arraste o separador ao longo dos separadores no grupo de separadores.

Ao arrastar um separador, as _zonas de largada_—áreas para onde pode mover o separador—ficam realçadas. A zona de largada determina onde inserir o separador. Alguns separadores só podem estar numa das barras laterais.

### Dividir um grupo de separadores

Clique com o botão direito num separador e selecione **Dividir à direita** ou **Dividir para baixo** para criar um novo grupo de separadores com esse separador.

Também pode dividir um grupo de separadores arrastando um separador para a parte inferior de outro separador.

### Redimensionar um grupo de separadores

Para redimensionar um grupo de separadores, passe o cursor sobre a borda do grupo de separadores. A borda fica realçada quando pode ser arrastada para redimensionar.

Pode redimensionar as barras laterais de forma semelhante para criar mais espaço para os grupos de separadores no centro.

### Mover separador para uma nova janela

**Arrastar e largar:**

- Selecione e arraste o separador para fora da janela da aplicação para o abrir numa nova janela.

**Paleta de comandos:**

- Abra a Paleta de Comandos e selecione **Mover painel atual para uma nova janela**.

### Mover um separador para uma janela diferente

Para mover um separador para outra janela existente, arraste o separador para a janela para onde o quer mover.

### Fixar um separador

Para fixar um separador no editor principal, clique com o botão direito no separador e selecione **Fixar**. As ligações num separador fixado abrem sempre num separador separado.

Para desafixar um separador fixado no editor principal, clique com o botão direito no separador e selecione **Desafixar**.

Para fixar ou desafixar um separador na barra lateral, consulte [[Barra lateral#Fixar separadores|fixar separadores na barra lateral]].

## Mudar para um separador diferente

Selecione um separador para mudar para ele. Ou utilize um atalho de teclado:

| Mudar Para                        | MacOS            | Windows/Linux        |
|-----------------------------------|------------------|----------------------|
| **Próximo separador**             | `⌃`+`⇥`         | `Ctrl`+`Tab`         |
| **Separador anterior**            | `⌃`+`⇧`+`⇥`    | `Ctrl`+`Shift`+`Tab` |
| **Primeiro separador à esquerda** | `⌘`+`1`          | `Ctrl`+`1`           |
| **2.º ao 8.º separador**         | `⌘`+`2`..`8`     | `Ctrl`+`2`..`8`      |
| **Último separador à direita**    | `⌘`+`9`          | `Ctrl`+`9`           |
| **Separador fechado recentemente**| `⌘`+`⇧`+`t`     | `Ctrl`+`Shift`+`t`   |

## Empilhar grupos de separadores

Pode empilhar separadores para os deslizar sobre outros separadores no mesmo grupo de separadores.

Para empilhar notas, selecione a seta para baixo no canto superior direito do grupo de separadores e depois selecione **Empilhar abas**.

![tab-stacks](https://user-images.githubusercontent.com/693981/188205363-0f24b2a5-3706-4a8c-b38b-7a66baa68ce6.gif)

Os separadores empilhados são inspirados nas [notas deslizantes de Andy Matuschak](https://notes.andymatuschak.org/).

## Vistas ligadas

As _vistas ligadas_ são separadores que referenciam um separador diferente. Quando o conteúdo do separador referenciado muda, a vista ligada também muda.

Para separadores de notas, pode utilizar os seguintes plugins como vistas ligadas:

- [[Visualização de diagrama de grafo]] (local)
- [[Links inversos]]
- [[Índice]]

Para abrir uma vista ligada para um separador de nota:

1. Selecione **Mais opções** ![[lucide-more-horizontal.svg#icon]] no canto superior direito da nota.
2. Em **Abrir vista ligada**, selecione a vista ligada que pretende abrir.

## Guardar esquemas

Pode guardar e restaurar esquemas de janelas utilizando o plugin [[Áreas de trabalho]].
