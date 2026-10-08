---
permalink: bases/views
---
As visualizações permitem organizar as informações em uma [[Introdução ao Bases|Base]] de múltiplas maneiras. Uma base pode conter várias visualizações, e cada visualização pode ter uma configuração única para exibir, ordenar e filtrar arquivos.

Por exemplo, você pode querer criar uma base chamada "Livros" que tenha visualizações separadas para "Lista de leitura" e "Finalizados recentemente".

## Barra de ferramentas

No topo de uma base há uma barra de ferramentas que permite interagir com as visualizações e seus resultados.

- ![[lucide-table.svg#icon]] **Menu de visualização** — criar, editar e alternar visualizações.
- **Resultados** — limitar, copiar e exportar arquivos.
- ![[lucide-arrow-up-down.svg#icon]] **Ordenar** — ordenar arquivos.
- ![[lucide-stretch-horizontal.svg#icon]] **Agrupar** — agrupar arquivos e gerenciar ordem e visibilidade dos grupos.
- ![[lucide-list-filter.svg#icon]] **Filtro** — filtrar arquivos.
- ![[lucide-list.svg#icon]] **Propriedades** — escolher propriedades para exibir e criar [[Fórmulas|fórmulas]].
- ![[lucide-search.svg#icon]] **Pesquisar** — pesquisar itens usando suas propriedades exibidas.
- ![[lucide-plus.svg#icon]] **Novo** — criar um novo arquivo na visualização atual.

Em celulares, **Resultados**, **Ordenar**, ![[lucide-stretch-horizontal.svg#icon]] **Agrupar** e **Propriedades** estão dentro do menu ![[lucide-sliders-horizontal.svg#icon]] **Exibição**.

## Adicionar e alternar visualizações

Existem duas maneiras de adicionar uma visualização a uma base:

- Clique no nome da visualização no canto superior esquerdo e selecione ![[lucide-plus.svg#icon]] **Adicionar visualização**.
- Use a [[Paleta de comandos]] e selecione **Bases: Adicionar visualização**.

A primeira visualização na sua lista de visualizações será carregada por padrão. Arraste as visualizações pelo ícone para alterar sua ordem.

## Configurações da visualização

Cada visualização possui suas próprias opções de configuração. Para editar as configurações da visualização:

1. Clique no nome da visualização no canto superior esquerdo.
2. Clique na seta para a direita ao lado da visualização que deseja configurar.

Alternativamente, *clique com o botão direito* no nome da visualização na barra de ferramentas da base para acessar rapidamente as configurações da visualização.

## Leiaute

As visualizações podem ser exibidas com diferentes leiautes, incluindo ![[lucide-table.svg#icon]] **tabela**, ![[lucide-list.svg#icon]] **lista**, ![[lucide-layout-grid.svg#icon]] **cartões**, ![[lucide-kanban-square.svg#icon]] **Kanban** e ![[lucide-map.svg#icon]] **mapa**. Leiautes adicionais podem ser adicionados por [[Plugins da comunidade]].

| Leiaute                                  | Descrição                                                                                                               | Versão&nbsp;do&nbsp;app |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| [[Visualização de tabela\|Tabela]]       | Exibe arquivos como linhas em uma tabela. As colunas são preenchidas a partir das [[Propriedades]] nas suas notas.      | 1.9                     |
| [[Visualização de cartões\|Cartões]]     | Exibe arquivos como uma grade de cartões. Permite criar visualizações tipo galeria com imagens.                         | 1.9                     |
| [[Visualização de lista\|Lista]]         | Exibe arquivos como uma [[Sintaxe de formatação básica#Listas\|lista]] com marcadores ou numeração.                    | 1.10                    |
| [[Visualização de Kanban\|Kanban]]       | Exibe arquivos como cartões organizados em colunas com base em uma propriedade agrupada.                               | 1.14                    |
| [[Visualização de mapa\|Mapa]]           | Exibe arquivos como pinos em um mapa interativo. Requer o plugin Maps.                                                 | 1.10                    |


## Filtros

Abra o menu ![[lucide-list-filter.svg#icon]] **Filtro** no topo de uma base para adicionar filtros.

Uma base sem filtros mostra todos os arquivos no seu cofre. Os filtros restringem os resultados para mostrar apenas arquivos que atendem a critérios específicos. Por exemplo, você pode usar filtros para exibir apenas arquivos com uma [[Visão de tags|etiqueta]] específica ou dentro de uma pasta específica. Muitos tipos de filtros estão disponíveis.

Os filtros podem ser aplicados a todas as visualizações em uma base, ou apenas a uma única visualização, escolhendo entre as duas seções no menu ![[lucide-list-filter.svg#icon]] **Filtro**.

- **Todas as visualizações** aplica filtros a todas as visualizações na base.
- **Esta visualização** aplica filtros à visualização ativa.

#### Componentes de um filtro

Os filtros possuem três componentes:

1. **Propriedade** — permite escolher uma [[Propriedades|propriedade]] no seu cofre, incluindo [[Sintaxe de Bases#Propriedades dos arquivos|propriedades dos arquivos]].
2. **Operador** — permite escolher como comparar as condições. A lista de operadores disponíveis depende do tipo de propriedade (texto, data, número, etc).
3. **Valor** — permite escolher o valor com o qual está comparando. Os valores podem incluir matemática e [[Funções|funções]].

#### Conjunções

- **Todos são verdadeiros** é uma declaração `e` — os resultados serão exibidos apenas se *todas* as condições no grupo de filtros forem atendidas.
- **Qualquer um é verdadeiro** é uma declaração `ou` — os resultados serão exibidos se *qualquer* uma das condições no grupo de filtros for atendida.
- **Nenhum é verdadeiro** é uma declaração `não` — os resultados não serão exibidos se *qualquer* uma das condições no grupo de filtros for atendida.

#### Grupos de filtros

Os grupos de filtros permitem criar lógicas mais complexas criando combinações de conjunções.

#### Editor de filtro avançado

Clique no botão de código ![[lucide-code-xml.svg#icon]] para usar o editor de **filtro avançado**. Isso exibe a [[Sintaxe de Bases|sintaxe]] bruta do filtro e pode ser usado com [[Funções|funções]] mais complexas que não podem ser exibidas usando a interface de apontar e clicar.

## Ordenar e agrupar resultados

Use o menu ![[lucide-arrow-up-down.svg#icon]] **Ordenar** para organizar os resultados e o menu ![[lucide-stretch-horizontal.svg#icon]] **Agrupar** para organizar itens semelhantes em seções.

Você pode organizar os resultados por uma ou mais propriedades em ordem crescente ou decrescente. Isso facilita listar notas por nome, data da última edição ou qualquer outra propriedade — incluindo fórmulas.

Cada visualização pode ter várias ordenações, mas só pode agrupar resultados por uma única propriedade.

### Adicionar uma ordenação

1. Abra o menu ![[lucide-arrow-up-down.svg#icon]] **Ordenar** no topo da visualização.
2. Selecione **Adicionar ordenação**, depois escolha a propriedade pela qual deseja ordenar.
3. Se você tiver múltiplas ordenações, arraste-as para cima ou para baixo usando a alça ![[lucide-grip-vertical.svg#icon]] para alterar a prioridade.

As opções para ordenar resultados dependem do tipo de propriedade:

- **Texto**: ordenar *alfabeticamente* (A→Z) ou em *ordem alfabética reversa* (Z→A).
- **Número**: ordenar do *menor para o maior* (0→1) ou do *maior para o menor* (1→0).
- **Data e hora**: ordenar de *antigo para novo*, ou de *novo para antigo*.

### Remover uma ordenação

1. Abra o menu ![[lucide-arrow-up-down.svg#icon]] **Ordenar** no topo da visualização.
2. Selecione o botão ![[lucide-trash-2.svg#icon]] lixeira ao lado da ordenação que deseja remover.

### Agrupar resultados

1. Abra o menu ![[lucide-stretch-horizontal.svg#icon]] **Agrupar** no topo da visualização. Em celulares, abra **Exibição → Agrupar**.
2. Em **Agrupar por**, escolha uma propriedade.
3. Escolha uma ordem automática de classificação, ou selecione **Manual** para ordenar os grupos você mesmo.

Para parar de agrupar resultados, selecione o botão ![[lucide-trash-2.svg#icon]] lixeira ao lado da propriedade de agrupamento.

### Reordenar, ocultar e adicionar grupos

No menu ![[lucide-stretch-horizontal.svg#icon]] **Agrupar**, selecione **Manual** no menu de ordem de classificação para gerenciar quais grupos aparecem e em que ordem.

- Marque um grupo para exibi-lo, ou desmarque para ocultá-lo. Selecione **Mostrar todos** ou **Ocultar todos** para alterar a visibilidade de todos os grupos.
- Arraste a alça ![[lucide-grip-vertical.svg#icon]] ao lado de um grupo para alterar sua posição.
- Selecione **Adicionar grupo** e insira um valor para exibir um novo grupo vazio. Isso não cria uma nota nem altera notas existentes.

Para restaurar a ordem automática dos grupos e mostrar todos os grupos, escolha uma ordem automática de classificação em vez de **Manual**.

### Recolher grupos

Nos leiautes de [[Visualização de tabela|tabela]], [[Visualização de cartões|cartões]] e [[Visualização de lista|lista]], selecione o cabeçalho de um grupo para recolher ou expandir esse grupo. Recolher um grupo oculta temporariamente seus itens sem alterar suas propriedades.

## Limitar, copiar e exportar resultados

### Limitar resultados

O menu de *resultados* mostra o número de resultados na visualização. Clique no botão de resultados para limitar o número de resultados e acessar ações adicionais.

### Copiar para a área de transferência

Esta ação copia a visualização para sua área de transferência. Uma vez na área de transferência, você pode colá-la em um arquivo Markdown ou em outros aplicativos de documentos, incluindo planilhas como Google Sheets, Excel e Numbers.

### Exportar CSV

Esta ação salva um CSV da sua visualização atual.

## Incorporar uma visualização

Você pode incorporar arquivos de base em [[Incorporar arquivos|qualquer outro arquivo]] usando a sintaxe `![[Arquivo.base]]`. A primeira visualização da lista será usada. Você pode alterar a ordem arrastando as visualizações no menu de visualização.

Para especificar a visualização padrão para uma incorporação, use `![[Arquivo.base#Visualização]]`.
