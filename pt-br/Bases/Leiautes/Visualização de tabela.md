---
permalink: bases/views/table
aliases:
  - Visualização de tabela
---
Tabela é um tipo de [[Visualizações|visualização]] que você pode usar no [[Introdução ao Bases|Bases]].

Selecione ![[lucide-table.svg#icon]]  **Tabela** no menu de visualizações para exibir arquivos como uma tabela com uma linha para cada arquivo e colunas para as [[Propriedades]] desse arquivo.

![Exemplo de uma base mostrando uma visualização de tabela com uma lista de livros](bases-noshadow.png#interface)

## Configurações

As configurações da visualização de tabela podem ser configuradas em [[Visualizações#Configurações de visualização|Configurações de visualização]].

### Altura da linha

A altura da linha permite exibir mais informações. Escolha entre **baixa**, **média**, **alta** e **extra alta**.

## Resumos

Você pode adicionar resumos a uma coluna da tabela para calcular rapidamente valores como totais, médias ou contagens para as linhas atualmente visíveis na visualização.

Os resumos estão vinculados à visualização, não à base. Cada visualização pode mostrar resumos diferentes para a mesma coluna.

### Adicionar um resumo

1. Clique com o botão direito no cabeçalho da coluna em uma visualização de tabela.
2. Selecione ![[lucide-calculator.svg#icon]] **Resumir…**.
3. Escolha uma das funções de resumo integradas, ou selecione ![[lucide-square-function.svg#icon]] **Adicionar resumo** para definir o seu próprio.

O resumo aparece na parte inferior da coluna. Quando os resultados são [[Visualizações#Ordenar e agrupar resultados|agrupados]], o resumo de cada grupo é exibido no topo do grupo.

Uma vez que a barra de resumo é adicionada, você pode adicionar mais resumos para outras colunas clicando na célula de resumo. A barra de resumo fica oculta se todos os resumos forem removidos.

### Resumos integrados

Os seguintes resumos estão disponíveis por padrão. As opções podem variar dependendo do tipo de propriedade.

#### Todos os tipos de propriedade

- **Sem valor**: contagem de linhas sem valor.
- **Preenchido**: contagem de linhas com valor.
- **Único**: número de valores distintos.

#### Números

- **Média**: média de todos os valores numéricos.
- **Máx**: maior valor.
- **Mediana**: valor mediano.
- **Mín**: menor valor.
- **Amplitude**: diferença entre o máximo e o mínimo.
- **Desvio padrão**: desvio padrão.
- **Soma**: total de todos os valores.

#### Datas

- **Mais antiga**: a menor/mais antiga data.
- **Mais recente**: a maior/mais recente data.
- **Amplitude**: diferença entre a mais antiga e a mais recente.

#### Caixa de seleção

- **Marcada**: número de linhas onde a caixa de seleção está ativada.
- **Desmarcada**: número de linhas onde a caixa de seleção está desativada.

### Resumos personalizados

Você pode definir seu próprio resumo usando uma fórmula:

1. No menu ![[lucide-calculator.svg#icon]] **Resumir…**, escolha ![[lucide-square-function.svg#icon]] **Adicionar resumo**.
2. Dê um nome ao resumo.
3. Insira uma fórmula. A fórmula é executada sobre a lista de valores naquela coluna (por exemplo, usando uma [[Funções|função]] como `values.reduce(...)`).
4. Salve o resumo.

Resumos personalizados são úteis quando você precisa de um cálculo que não é coberto pelas opções integradas.

## Atalhos

Você pode se mover rapidamente em uma visualização de tabela usando os seguintes atalhos de mouse e [[Atalhos de edição|teclado]].

- Shift-clique cria uma seleção de células.
- Clique com o botão direito em uma seleção de células para acessar ações adicionais para esses arquivos.

| Ação                                                                                                                              | Atalho              | macOS              |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------ |
| Copiar as células selecionadas                                                                                                    | `Ctrl+C`            | `Cmd+C`            |
| Colar as células selecionadas                                                                                                     | `Ctrl+V`            | `Cmd+V`            |
| Desfazer alterações nas propriedades                                                                                              | `Ctrl+Z`            | `Cmd+Z`            |
| Refazer alterações nas propriedades                                                                                               | `Ctrl+Shift+Z`      | `Cmd+Shift+Z`      |
| Selecionar todas as células no grupo atual                                                                                        | `Ctrl+A`            | `Cmd+A`            |
| Selecionar todas as células em uma determinada direção                                                                            | `Ctrl+Shift+Arrow`  | `Ctrl+Shift+Arrow` |
| Selecionar a coluna                                                                                                               | `Ctrl+Space`        |                    |
| Selecionar a linha                                                                                                                | `Shift+Space`       |                    |
| Focar na célula atual — para caixas de seleção, isso alterna a caixa de seleção; para fórmulas, isso abre o editor de fórmulas   | `Enter`             |                    |
| Ir para a primeira coluna                                                                                                         | `Home`              |                    |
| Ir para a última coluna                                                                                                           | `End`               |                    |
| Navegar para cima e para baixo pela altura da página                                                                              | `PageUp`,`PageDown` |                    |
| Limpar a seleção de células atual                                                                                                 | `Esc`               |                    |
| Limpar as células atuais                                                                                                          | `Backspace`         |                    |
| Ir para a próxima célula                                                                                                          | `Tab`               |                    |
| Ir para a célula anterior                                                                                                         | `Shift-Tab`         |                    |
