---
permalink: plugins/graph
publish: true
mobile: true
description: Visão de grafo é um plugin nativo que permite visualizar as relações entre as notas em seu cofre.
---
Visão de grafo é um [[Plugins nativos|plugin nativo]] que permite visualizar as relações entre as notas em seu cofre.

Para abrir a Visão de grafo, clique em **Abrir visualização em gráfico** na [[Faixa de opções]].

- Círculos representam notas, ou _nódulos_.
- Linhas representam [[Links internos]] entre dois nódulos.

Quanto mais nódulos referenciarem um determinado nódulo, maior ele fica.

Para interagir com notas no grafo:

- Passe o cursor sobre cada círculo para destacar as conexões daquela nota.
- Clique em uma nota no grafo para abri-la.
- Clique com o botão direito em uma nota para abrir um menu de contexto com as ações disponíveis para aquela nota.

Para navegar pelo grafo:

- Aumente ou diminua o zoom usando a roda de rolagem do mouse, ou usando as teclas `+` e `-`.
- Mova o grafo arrastando-o com o cursor do mouse, ou usando as teclas de seta.

Você pode manter Shift pressionado enquanto usa o teclado para acelerar os movimentos.

## Configurações

Para abrir as configurações do grafo, clique no ícone de engrenagem no canto superior direito da visão de grafo.

Clique em **Restaurar configurações padrão** no canto superior direito da caixa de configurações para redefinir quaisquer alterações que você fizer.

### Filtros

Esta seção controla quais nódulos são exibidos no grafo.

- **Localizar arquivos** permite filtrar notas com base em um termo de busca. Para saber como escrever termos de busca mais avançados, consulte [[Pesquisa]].
- **Etiquetas** alterna se as etiquetas são exibidas no grafo.
- **Anexos** alterna se os anexos são exibidos no grafo.
- **Apenas arquivos existentes** alterna se notas que existem no seu cofre são exibidas. Como uma nota não precisa existir para ser vinculada, isso pode ajudar a limitar seu grafo às notas que você realmente tem no seu cofre.
- **Órfãos** alterna se notas sem nenhum link são exibidas.

> [!info] Arquivos excluídos
> Arquivos que correspondem aos seus padrões de [[Configurações#Arquivos excluídos|Arquivos excluídos]] não aparecerão na Visão de grafo.

### Grupos

Crie grupos de notas para distingui-los uns dos outros usando cores.

Para criar um novo grupo:

1. Clique em **Novo grupo de marcadores**.
2. Na caixa de busca, digite um termo de busca para as notas que você deseja adicionar ao grupo.
3. Clique no círculo colorido para dar uma cor ao grupo.

Para saber como escrever termos de busca mais avançados, consulte [[Pesquisa]].

### Tela

Esta seção controla como visualizar nódulos e links no grafo.

- **Setas** alterna se a direção de cada link é exibida.
- **Limite para a visibilidade textual** controla a transparência do texto para o nome de cada nota.
- **Tamanho dos nódulos** controla o tamanho do círculo que representa cada nota.
- **Grossura dos links** controla a largura da linha de cada link.
- **Animar** inicia uma [[#Iniciar uma animação de lapso de tempo|animação de lapso de tempo]].

### Forças

Esta seção controla as forças que atuam sobre cada nódulo no grafo.

- **Força centrípeta** controla quão compacto o grafo é. Um valor mais alto cria um grafo mais circular.
- **Força de repulsão** controla o quanto um nódulo empurra outros nódulos para longe de si.
- **Força dos links** controla a tração de cada link. Se o link fosse um elástico, a força dos links controla quão apertado ou frouxo o elástico está.
- **Distância dos links** controla o comprimento das linhas entre cada nota.

## Iniciar uma animação de lapso de tempo

Notas e anexos aparecem em ordem cronológica com base na data de criação.

![[obsidian-graph-view.png#interface]]

## Gráfico Local

Para abrir uma Visão de grafo local, use o comando **Abrir gráfico local**. Enquanto a Visão de grafo mostra todas as notas do seu cofre, uma Visão de grafo local mostra as notas conectadas à nota ativa.

A Visão de grafo local pode usar todas as [[#Configurações]] disponíveis para a Visão de grafo global. Além disso, você pode alterar a profundidade do grafo local. Cada nível de profundidade mostrará notas conectadas às notas reveladas na profundidade anterior. Para controlar a profundidade do grafo local, use o controle deslizante na parte superior do painel de Configurações de Filtro do grafo local.
