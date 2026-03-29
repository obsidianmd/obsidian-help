---
permalink: bases/views/table
---
Tabela é um tipo de [[Vistas|vista]] que pode usar no [[Introdução ao Bases|Bases]].

Selecione ![[lucide-table.svg#icon]]  **Tabela** no menu de vistas para exibir ficheiros como uma tabela com uma linha para cada ficheiro e colunas para as [[Propriedades]] desse ficheiro.

![Exemplo de uma base mostrando uma vista de tabela com uma lista de livros](bases-noshadow.png#interface)

## Definições

As definições da vista de tabela podem ser configuradas nas [[Vistas#Definições da vista|Definições da vista]].

### Altura da linha

A altura da linha permite exibir mais informação. Escolha entre **baixa**, **média**, **alta** e **muito alta**.

## Resumos

Pode adicionar resumos a uma coluna da tabela para calcular rapidamente valores como totais, médias ou contagens para as linhas atualmente visíveis na vista.

Os resumos estão associados à vista, não à base. Cada vista pode mostrar resumos diferentes para a mesma coluna.

### Adicionar um resumo

1. Clique com o botão direito no cabeçalho da coluna numa vista de tabela.
2. Selecione ![[lucide-calculator.svg#icon]] **Resumir…**.
3. Escolha uma das funções de resumo incorporadas, ou selecione ![[lucide-square-function.svg#icon]] **Adicionar resumo** para definir o seu próprio.

O resumo aparece na parte inferior da coluna. Quando os resultados estão [[Vistas#Ordenar e agrupar resultados|agrupados]], o resumo de cada grupo é exibido no topo do grupo.

Uma vez adicionada a barra de resumo, pode adicionar mais resumos para outras colunas clicando na célula de resumo. A barra de resumo fica oculta se todos os resumos forem removidos.

### Resumos incorporados

Os seguintes resumos estão disponíveis por predefinição. As opções podem variar dependendo do tipo de propriedade.

#### Todos os tipos de propriedade

- **Sem valor**: contagem de linhas sem valor.
- **Preenchido**: contagem de linhas com valor.
- **Único**: número de valores distintos.

#### Números

- **Média**: média de todos os valores numéricos.
- **Máximo**: maior valor.
- **Mediana**: valor mediano.
- **Mínimo**: menor valor.
- **Intervalo**: diferença entre o máximo e o mínimo.
- **Desvio padrão**: desvio padrão.
- **Soma**: total de todos os valores.

#### Datas

- **Mais antiga**: a data mais pequena/antiga.
- **Mais recente**: a data maior/mais recente.
- **Intervalo**: diferença entre a mais antiga e a mais recente.

#### Caixa de seleção

- **Marcada**: número de linhas onde a caixa de seleção está ativada.
- **Desmarcada**: número de linhas onde a caixa de seleção está desativada.

### Resumos personalizados

Pode definir o seu próprio resumo usando uma fórmula:

1. No menu ![[lucide-calculator.svg#icon]] **Resumir…**, escolha ![[lucide-square-function.svg#icon]] **Adicionar resumo**.
2. Dê um nome ao resumo.
3. Introduza uma fórmula. A fórmula é executada sobre a lista de valores nessa coluna (por exemplo, usando uma [[Funções|função]] como `values.reduce(...)`).
4. Guarde o resumo.

Os resumos personalizados são úteis quando precisa de um cálculo que não está coberto pelas opções incorporadas.

## Atalhos

Pode mover-se rapidamente numa vista de tabela usando os seguintes atalhos de rato e [[Atalhos de edição|teclado]].

- Shift-clique cria uma seleção de células.
- Clique com o botão direito numa seleção de células para aceder a ações adicionais para esses ficheiros.

| Ação                                                                                                                     | Atalho              | macOS              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------- | ------------------ |
| Copiar as células selecionadas                                                                                           | `Ctrl+C`            | `Cmd+C`            |
| Colar as células selecionadas                                                                                            | `Ctrl+V`            | `Cmd+V`            |
| Anular alterações às propriedades                                                                                        | `Ctrl+Z`            | `Cmd+Z`            |
| Refazer alterações às propriedades                                                                                       | `Ctrl+Shift+Z`      | `Cmd+Shift+Z`      |
| Selecionar todas as células no grupo atual                                                                               | `Ctrl+A`            | `Cmd+A`            |
| Selecionar todas as células numa dada direção                                                                            | `Ctrl+Shift+Arrow`  | `Ctrl+Shift+Arrow` |
| Selecionar a coluna                                                                                                      | `Ctrl+Space`        |                    |
| Selecionar a linha                                                                                                       | `Shift+Space`       |                    |
| Focar a célula atual — para caixas de seleção, isto alterna a caixa de seleção; para fórmulas, abre o editor de fórmulas | `Enter`             |                    |
| Ir para a primeira coluna                                                                                                | `Home`              |                    |
| Ir para a última coluna                                                                                                  | `End`               |                    |
| Navegar para cima e para baixo pela altura da página                                                                     | `PageUp`,`PageDown` |                    |
| Limpar a seleção de células atual                                                                                        | `Esc`               |                    |
| Limpar as células atuais                                                                                                 | `Backspace`         |                    |
| Ir para a célula seguinte                                                                                                | `Tab`               |                    |
| Ir para a célula anterior                                                                                                | `Shift-Tab`         |                    |
