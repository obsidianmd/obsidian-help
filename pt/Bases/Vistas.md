---
permalink: bases/views
---
As vistas permitem organizar a informação numa [[Introdução ao Bases|Base]] de múltiplas formas. Uma base pode conter várias vistas, e cada vista pode ter uma configuração única para exibir, ordenar e filtrar ficheiros.

Por exemplo, pode querer criar uma base chamada "Livros" que tenha vistas separadas para "Lista de leitura" e "Terminados recentemente".

## Barra de ferramentas

No topo de uma base encontra-se uma barra de ferramentas que permite interagir com as vistas e os seus resultados.

- ![[lucide-table.svg#icon]] **Menu de vistas** — criar, editar e alternar entre vistas.
- **Resultados** — limitar, copiar e exportar ficheiros.
- ![[lucide-arrow-up-down.svg#icon]] **Ordenar** — ordenar e agrupar ficheiros.
- ![[lucide-list-filter.svg#icon]] **Filtro** — filtrar ficheiros.
- ![[lucide-list.svg#icon]] **Propriedades** — escolher propriedades a exibir e criar [[Fórmulas|fórmulas]].
- ![[lucide-search.svg#icon]] **Pesquisar** — pesquisar itens utilizando as suas propriedades exibidas.
- ![[lucide-plus.svg#icon]] **Novo** — criar um novo ficheiro na vista atual.

## Adicionar e alternar vistas

Existem duas formas de adicionar uma vista a uma base:

- Clicar no nome da vista no canto superior esquerdo e selecionar ![[lucide-plus.svg#icon]] **Adicionar vista**.
- Usar a [[Paleta de comando|paleta de comandos]] e selecionar **Bases: Adicionar vista**.

A primeira vista na sua lista de vistas será carregada por predefinição. Arraste as vistas pelo seu ícone para alterar a sua ordem.

## Definições da vista

Cada vista tem as suas próprias opções de configuração. Para editar as definições da vista:

1. Clique no nome da vista no canto superior esquerdo.
2. Clique na seta para a direita junto à vista que pretende configurar.

Em alternativa, *clique com o botão direito* no nome da vista na barra de ferramentas da base para aceder rapidamente às definições da vista.

## Esquema

As vistas podem ser exibidas com diferentes esquemas, incluindo ![[lucide-table.svg#icon]] **tabela**, ![[lucide-list.svg#icon]] **lista**, ![[lucide-layout-grid.svg#icon]] **cartões** e ![[lucide-map.svg#icon]] **mapa**. Esquemas adicionais podem ser adicionados por [[Plugins da comunidade]]. Alguns esquemas ainda estão em desenvolvimento e requerem [[Versões de acesso antecipado|versões de acesso antecipado]] do Obsidian.

| Esquema                        | Descrição                                                                                                            | Versão&nbsp;da&nbsp;app |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| [[Vista de Tabela\|Tabela]]    | Exibe ficheiros como linhas numa tabela. As colunas são preenchidas a partir das [[Propriedades|propriedades]] das suas notas. | 1.9                     |
| [[Vista de Cartões\|Cartões]]  | Exibe ficheiros como uma grelha de cartões. Permite criar vistas tipo galeria com imagens.                           | 1.9                     |
| [[Vista de Lista\|Lista]]      | Exibe ficheiros como uma [[Sintaxe de formatação básica#Listas\|lista]] com marcadores ou numerada.                  | 1.10                    |
| [[Vista de mapa\|Mapa]]        | Exibe ficheiros como marcadores num mapa interativo. Requer o plugin Maps.                                           | 1.10                    |


## Filtros

Abra o menu ![[lucide-list-filter.svg#icon]] **Filtro** no topo de uma base para adicionar filtros.

Uma base sem filtros mostra todos os ficheiros no seu cofre. Os filtros reduzem os resultados para mostrar apenas ficheiros que cumpram critérios específicos. Por exemplo, pode usar filtros para exibir apenas ficheiros com uma [[Etiquetas|etiqueta]] específica ou dentro de uma pasta específica. Muitos tipos de filtros estão disponíveis.

Os filtros podem ser aplicados a todas as vistas numa base, ou apenas a uma única vista, escolhendo entre as duas secções no menu ![[lucide-list-filter.svg#icon]] **Filtro**.

- **Todas as vistas** aplica filtros a todas as vistas na base.
- **Esta vista** aplica filtros à vista ativa.

#### Componentes de um filtro

Os filtros têm três componentes:

1. **Propriedade** — permite escolher uma [[Propriedades|propriedade]] no seu cofre, incluindo [[Sintaxe de Bases#Propriedades do ficheiro|propriedades do ficheiro]].
2. **Operador** — permite escolher como comparar as condições. A lista de operadores disponíveis depende do tipo de propriedade (texto, data, número, etc.)
3. **Valor** — permite escolher o valor com o qual está a comparar. Os valores podem incluir matemática e [[Funções|funções]].

#### Conjunções

- **Todas as seguintes são verdadeiras** é uma instrução `e` — os resultados só serão mostrados se *todas* as condições no grupo de filtros forem cumpridas.
- **Qualquer uma das seguintes é verdadeira** é uma instrução `ou` — os resultados serão mostrados se *qualquer* uma das condições no grupo de filtros for cumprida.
- **Nenhuma das seguintes é verdadeira** é uma instrução `não` — os resultados não serão mostrados se *qualquer* uma das condições no grupo de filtros for cumprida.

#### Grupos de filtros

Os grupos de filtros permitem criar lógica mais complexa criando combinações de conjunções.

#### Editor de filtro avançado

Clique no botão de código ![[lucide-code-xml.svg#icon]] para usar o editor de **filtro avançado**. Isto exibe a [[Sintaxe de Bases|sintaxe]] bruta do filtro, e pode ser usado com [[Funções|funções]] mais complexas que não podem ser exibidas através da interface de apontar e clicar.

## Ordenar e agrupar resultados

Abra o menu ![[lucide-arrow-up-down.svg#icon]] **Ordenar** para ordenar e agrupar os resultados numa vista.

Pode dispor os resultados por uma ou mais propriedades em ordem crescente ou decrescente. Isto facilita listar notas por nome, hora da última edição ou qualquer outra propriedade — incluindo fórmulas.

Também pode agrupar resultados por uma propriedade para organizar itens semelhantes em secções visualmente distintas. Atualmente, o Obsidian suporta agrupamento por apenas uma propriedade.

### Adicionar uma ordenação

1. Abra o menu ![[lucide-arrow-up-down.svg#icon]] **Ordenar** no topo da vista.
2. Escolha a propriedade pela qual pretende ordenar (ou agrupar).
3. Se tiver múltiplas ordenações, arraste-as para cima ou para baixo usando a pega ![[lucide-grip-vertical.svg#icon]] para alterar a sua prioridade.

As opções para ordenar resultados dependem do tipo de propriedade:

- **Texto**: ordenar *alfabeticamente* (A→Z) ou em *ordem alfabética inversa* (Z→A).
- **Número**: ordenar do *menor para o maior* (0→1) ou do *maior para o menor* (1→0).
- **Data e hora**: ordenar por *antigo para novo*, ou *novo para antigo*.

### Remover uma ordenação

1. Abra o menu ![[lucide-arrow-up-down.svg#icon]] **Ordenar** no topo da vista.
2. Clique no botão ![[lucide-trash-2.svg#icon]] do caixote do lixo junto à ordenação ou agrupamento que pretende remover.

## Limitar, copiar e exportar resultados

### Limitar resultados

O menu de *resultados* mostra o número de resultados na vista. Clique no botão de resultados para limitar o número de resultados e aceder a ações adicionais.

### Copiar para a área de transferência

Esta ação copia a vista para a sua área de transferência. Uma vez na sua área de transferência, pode colá-la num ficheiro Markdown ou noutras aplicações de documentos, incluindo folhas de cálculo como Google Sheets, Excel e Numbers.

### Exportar CSV

Esta ação guarda um CSV da sua vista atual.

## Incorporar uma vista

Pode incorporar ficheiros de base em [[Incorporar ficheiros|qualquer outro ficheiro]] usando a sintaxe `![[Ficheiro.base]]`. A primeira vista na lista será utilizada. Pode alterar a ordem arrastando as vistas no menu de vistas.

Para especificar a vista predefinida para uma incorporação, use `![[Ficheiro.base#Vista]]`.
