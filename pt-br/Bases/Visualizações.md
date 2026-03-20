---
permalink: bases/views
---
As visualizações permitem organizar as informações em uma [[Introdução ao Bases|Base]] de múltiplas maneiras. Uma base pode conter várias visualizações, e cada visualização pode ter uma configuração única para exibir, ordenar e filtrar arquivos.

Por exemplo, você pode querer criar uma base chamada "Livros" que tenha visualizações separadas para "Lista de leitura" e "Finalizados recentemente".

## Barra de ferramentas

No topo de uma base há uma barra de ferramentas que permite interagir com as visualizações e seus resultados.

- ![[lucide-table.svg#icon]] **Menu de visualização** — criar, editar e alternar visualizações.
- **Resultados** — limitar, copiar e exportar arquivos.
- ![[lucide-arrow-up-down.svg#icon]] **Ordenar** — ordenar e agrupar arquivos.
- ![[lucide-list-filter.svg#icon]] **Filtro** — filtrar arquivos.
- ![[lucide-list.svg#icon]] **Propriedades** — escolher propriedades para exibir e criar [[Fórmulas|fórmulas]].
- ![[lucide-plus.svg#icon]] **Novo** — criar um novo arquivo na visualização atual.

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

As visualizações podem ser exibidas com diferentes leiautes, incluindo ![[lucide-table.svg#icon]] **tabela**, ![[lucide-list.svg#icon]] **lista**, ![[lucide-layout-grid.svg#icon]] **cartões** e ![[lucide-map.svg#icon]] **mapa**. Leiautes adicionais podem ser adicionados por [[Plugins da comunidade]]. Alguns leiautes ainda estão em desenvolvimento e requerem [[Versões de acesso antecipado]] do Obsidian.

| Leiaute                                  | Descrição                                                                                                               | Versão&nbsp;do&nbsp;app |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| [[Visualização de tabela\|Tabela]]       | Exibe arquivos como linhas em uma tabela. As colunas são preenchidas a partir das [[Propriedades]] nas suas notas.      | 1.9                     |
| [[Visualização de cartões\|Cartões]]     | Exibe arquivos como uma grade de cartões. Permite criar visualizações tipo galeria com imagens.                         | 1.9                     |
| [[Visualização de lista\|Lista]]         | Exibe arquivos como uma [[Sintaxe de formatação básica#Listas\|lista]] com marcadores ou numeração.                    | 1.10                    |
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

Abra o menu ![[lucide-arrow-up-down.svg#icon]] **Ordenar** para ordenar e agrupar os resultados em uma visualização.

Você pode organizar os resultados por uma ou mais propriedades em ordem crescente ou decrescente. Isso facilita listar notas por nome, data da última edição ou qualquer outra propriedade — incluindo fórmulas.

Você também pode agrupar resultados por uma propriedade para organizar itens semelhantes em seções visualmente distintas. Atualmente, o Obsidian suporta agrupamento por apenas uma propriedade.

### Adicionar uma ordenação

1. Abra o menu ![[lucide-arrow-up-down.svg#icon]] **Ordenar** no topo da visualização.
2. Escolha a propriedade pela qual deseja ordenar (ou agrupar).
3. Se você tiver múltiplas ordenações, arraste-as para cima ou para baixo usando a alça ![[lucide-grip-vertical.svg#icon]] para alterar a prioridade.

As opções para ordenar resultados dependem do tipo de propriedade:

- **Texto**: ordenar *alfabeticamente* (A→Z) ou em *ordem alfabética reversa* (Z→A).
- **Número**: ordenar do *menor para o maior* (0→1) ou do *maior para o menor* (1→0).
- **Data e hora**: ordenar de *antigo para novo*, ou de *novo para antigo*.

### Remover uma ordenação

1. Abra o menu ![[lucide-arrow-up-down.svg#icon]] **Ordenar** no topo da visualização.
2. Clique no botão ![[lucide-trash-2.svg#icon]] lixeira ao lado da ordenação ou agrupamento que deseja remover.

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
