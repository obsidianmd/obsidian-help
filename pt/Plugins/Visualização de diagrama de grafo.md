---
permalink: plugins/graph
publish: true
mobile: true
description: Visualização de grafo é um plugin principal que permite visualizar as relações entre as notas no seu cofre.
---
A vista de grafo é um [[Plugins Base|plugin principal]] que permite visualizar as relações entre as notas no seu cofre.

Para abrir a vista de grafo, clique em **Abrir Visualização de diagrama de grafo** na [[Barra de ferramentas]].

- Os círculos representam notas, ou _nódulos_.
- As linhas representam [[Ligações internas]] entre dois nódulos.

Quanto mais nódulos referenciarem um determinado nódulo, maior ele se torna.

Para interagir com notas no grafo:

- Passe o cursor sobre cada círculo para realçar as conexões dessa nota.
- Clique numa nota no grafo para abrir essa nota.
- Clique com o botão direito numa nota para abrir um menu de contexto com as ações disponíveis para essa nota.

Para navegar pelo grafo:

- Amplie e reduza o zoom usando a roda de deslocamento do rato, ou usando as teclas `+` e `-`.
- Mova o grafo arrastando-o com o cursor do rato, ou usando as teclas de seta.

Pode manter premida a tecla Shift enquanto usa o teclado para acelerar os movimentos.

## Definições

Para abrir as definições do grafo, clique no ícone de engrenagem no canto superior direito da vista de grafo.

Clique em **Restaurar definições padrão** no canto superior direito da caixa de definições para repor quaisquer alterações que tenha feito.

### Filtros

Esta secção controla quais nódulos são mostrados no grafo.

- **Pesquisar ficheiros** permite filtrar notas com base num termo de pesquisa. Para saber como escrever termos de pesquisa mais avançados, consulte [[Pesquisar]].
- **Etiquetas** ativa ou desativa a exibição de etiquetas no grafo.
- **Anexos** ativa ou desativa a exibição de anexos no grafo.
- **Apenas ficheiros existentes** ativa ou desativa a exibição de notas que existem no seu cofre. Uma vez que uma nota não precisa de existir para ser ligada, isto pode ajudar a limitar o grafo às notas que realmente tem no seu cofre.
- **Órfãos** ativa ou desativa a exibição de notas sem quaisquer ligações.

> [!info] Ficheiros excluídos
> Os ficheiros que correspondam aos padrões dos seus [[Definições#Ficheiros excluídos|Ficheiros excluídos]] não aparecerão na vista de grafo.

### Grupos

Crie grupos de notas para as distinguir umas das outras usando cor.

Para criar um novo grupo:

1. Clique em **Novo grupo**.
2. Na caixa de pesquisa, escreva um termo de pesquisa para as notas que pretende adicionar ao grupo.
3. Clique no círculo colorido para atribuir uma cor ao grupo.

Para saber como escrever termos de pesquisa mais avançados, consulte [[Pesquisar]].

### Tela

Esta secção controla como visualizar nódulos e ligações no grafo.

- **Setas** ativa ou desativa a exibição da direção de cada ligação.
- **Limite para a visibilidade do texto** controla a transparência do texto para o nome de cada nota.
- **Tamanho dos nódulos** controla o tamanho do círculo que representa cada nota.
- **Grossura dos links** controla a largura da linha de cada ligação.
- **Animar** inicia uma [[#Iniciar uma animação time-lapse|animação time-lapse]].

### Forças

Esta secção controla as forças que atuam sobre cada nódulo no grafo.

- **Centro de força** controla o quão compacto é o grafo. Um valor mais alto cria um grafo mais circular.
- **Força de repulsão** controla o quanto um nódulo afasta outros nódulos de si.
- **Força dos links** controla a tração em cada ligação. Se a ligação fosse um elástico, a força dos links controla o quão apertado ou solto o elástico está.
- **Distância entre links** controla o comprimento das linhas entre cada nota.

## Iniciar uma animação time-lapse

As notas e anexos aparecem por ordem cronológica com base na sua data de criação.

![[obsidian-graph-view.png#interface]]

## Grafo local

Para abrir uma vista de grafo local, use o comando **Abrir diagrama de grafo local**. Enquanto a vista de grafo mostra todas as notas no seu cofre, uma vista de grafo local mostra-lhe as notas ligadas à nota ativa.

A vista de grafo local pode usar todas as [[#Definições]] disponíveis para a vista de grafo global. Adicionalmente, pode alterar a profundidade do grafo local. Cada nível de profundidade mostrará notas ligadas às notas reveladas na profundidade anterior. Para controlar a profundidade do grafo local, use o controlo deslizante no topo do painel de definições de filtro do grafo local.
