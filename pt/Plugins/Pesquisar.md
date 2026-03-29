---
permalink: plugins/search
publish: true
mobile: true
description: Pesquisa é um plugin principal que ajuda você a encontrar dados no seu cofre do Obsidian usando termos de pesquisa e operadores para refinar os resultados.
---
Pesquisar é um [[Plugins Base|plugin principal]] que ajuda a encontrar dados no seu cofre do Obsidian utilizando termos de pesquisa e operadores para refinar os resultados.

Por predefinição, pode encontrar a Pesquisa na barra lateral esquerda ![[lucide-search.svg#icon]]. Também pode abrir a Pesquisa premindo `Ctrl+Shift+F` (Windows/Linux) ou `Command+Shift+F` (macOS).

- **Pesquisar texto selecionado**: Se selecionar texto no editor e abrir a Pesquisa com o atalho de teclado, a Pesquisa mostra-lhe os resultados para o texto selecionado.
- **Pesquisar termos de pesquisa recentes**: Abra a Pesquisa com um termo de pesquisa vazio para listar termos de pesquisa recentes. Clique em qualquer um deles para usar o termo de pesquisa novamente.

> [!info] Ficheiros excluídos
> Os ficheiros que correspondam aos seus padrões de [[Definições#Ficheiros excluídos|Ficheiros excluídos]] não aparecerão nos resultados da Pesquisa.

## Termos de pesquisa

Um termo de pesquisa é a palavra ou frase que introduz no campo de pesquisa. Aprender a escrever termos de pesquisa de forma eficaz pode ajudá-lo a encontrar rapidamente o que procura, mesmo em cofres grandes. O Obsidian pesquisa apenas o conteúdo de notas e canvas.

> [!tip]- Pesquisar caminhos e nomes de ficheiros
> Por predefinição, só pode pesquisar os caminhos e nomes de ficheiros de notas e canvas. Para pesquisar um caminho ou nome de ficheiro de qualquer ficheiro no cofre, use o operador `path` ou `file`.

Cada palavra no termo de pesquisa é correspondida independentemente dentro de cada ficheiro. Para pesquisar uma frase exata, envolva-a entre aspas, por exemplo `"star wars"`. Para pesquisar texto entre aspas dentro de uma frase exata, pode _escapar_ as aspas adicionando uma barra invertida (`\`) antes da aspa, por exemplo `"they said \"hello\" to each other"`.

Pode controlar se pretende devolver ficheiros que contenham _todas_ as palavras no seu termo de pesquisa, ou _qualquer_ uma das palavras:

- `meeting work` devolve ficheiros que contêm tanto `meeting` como `work`.
- `meeting OR work` devolve ficheiros que contêm `meeting` ou `work`.

Pode até combinar os dois no mesmo termo de pesquisa.

- `meeting work OR meetup personal` devolve ficheiros para reuniões de trabalho e encontros pessoais.

Pode usar parênteses para controlar a prioridade de cada expressão.

- `meeting (work OR meetup) personal` devolve ficheiros que contêm `meeting`, `personal`, e `work` ou `meetup`.

Para excluir, ou negar, uma palavra dos resultados da pesquisa, adicione um hífen (`-`) antes dela:

- `meeting -work` devolve ficheiros que contêm `meeting` mas não `work`.

Pode excluir múltiplas expressões:

- `meeting -work -meetup` devolve ficheiros que contêm `meeting` mas não `work` ou `meetup`.

Pode excluir uma combinação de expressões usando parênteses:

- `meeting -(work meetup)` devolve ficheiros que contêm `meeting` mas não _ambos_ `work` e `meetup`.

Para filtrar resultados usando os operadores menor que (`<`) e maior que (`>`), envolva-os entre parênteses retos (`[]`) ou aspas (`""`):

- `meeting [duration:<5]` devolve ficheiros onde meeting está presente e duration é menor que 5.
- `meeting [duration:>5]` devolve ficheiros onde meeting está presente e duration é maior que 5.

> [!tip]- Explicar termo de pesquisa
> Se precisar de depurar um termo de pesquisa complexo, pode clicar em **Explicar termo de pesquisa** na Pesquisa para obter uma explicação do seu termo de pesquisa.

## Operadores de pesquisa

Os operadores de pesquisa permitem termos de pesquisa mais refinados para filtrar os seus resultados ainda mais.

Alguns operadores permitem até adicionar um termo de pesquisa aninhado dentro de parênteses, por exemplo: `task:(call OR email)`.

| Operador de pesquisa | Descrição                                                                                                                                                                                                                                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `file:`              | Encontrar texto no nome do ficheiro. Corresponde a qualquer ficheiro no cofre.<p/>Exemplo: `file:.jpg` ou `file:202209`.                                                                                                                                                                                             |
| `path:`              | Encontrar texto no caminho do ficheiro. Corresponde a qualquer ficheiro no cofre.<p/>Exemplo: `path:"Daily notes/2022-07"`.                                                                                                                                                                                          |
| `content:`           | Encontrar texto no conteúdo do ficheiro.<p/>Exemplo: `content:"happy cat"`.                                                                                                                                                                                                                                          |
| `match-case:`        | Correspondência sensível a maiúsculas e minúsculas.<p/>Exemplo: `match-case:HappyCat`.                                                                                                                                                                                                                              |
| `ignore-case:`       | Correspondência insensível a maiúsculas e minúsculas.<p/>Exemplo: `ignore-case:ikea`.                                                                                                                                                                                                                               |
| `tag:`               | Encontrar etiqueta no ficheiro.<p/>Exemplo: `tag:#work`.<p/>Tenha em mente que pesquisar por `tag:#work` não devolverá resultados para `#myjob/work`.<br /><br />**Nota**: Como `tag:` ignora correspondências em blocos de código e em conteúdo não-Markdown, é frequentemente mais rápido e preciso do que uma pesquisa de texto completo normal por `#work`. |
| `line:`              | Encontrar ficheiros que contenham pelo menos uma linha correspondente a `x`.<p/>Exemplo: `line:(mix flour)`.<p/><br>**Nota:** Usar `-line` nega a pesquisa, significando que encontrará ficheiros onde nenhuma linha corresponde a `x`.                                                                                |
| `block:`             | Encontrar correspondências no mesmo bloco.<p/>Exemplo: `block:(dog cat)`.<p/>**Nota**: Como `block:` requer que a Pesquisa analise o conteúdo Markdown em cada ficheiro, pode fazer com que o seu termo de pesquisa demore mais tempo a concluir.                                                                     |
| `section:`           | Encontrar correspondências na mesma secção (texto entre dois cabeçalhos).<p/>Exemplo: `section:(dog cat)`.                                                                                                                                                                                                           |
| `task:`              | Encontrar correspondências numa [[Sintaxe de formatação básica#Listas de Tarefas\|tarefa]] numa base bloco a bloco.<p/>Exemplo: `task:call`.                                                                                                                                                                         |
| `task-todo:`         | Encontrar correspondências numa [[Sintaxe de formatação básica#Listas de Tarefas\|tarefa]] *não concluída* numa base bloco a bloco.<p/>Exemplo: `task-todo:call`.                                                                                                                                                     |
| `task-done:`         | Encontrar correspondências numa [[Sintaxe de formatação básica#Listas de Tarefas\|tarefa]] *concluída* numa base bloco a bloco.<p/>Exemplo: `task-done:call`.                                                                                                                                                         |

## Pesquisar propriedades

Pode usar dados armazenados em [[Propriedades]] nos seus termos de pesquisa.

Use parênteses retos à volta de um nome de propriedade `[propriedade]` para devolver ficheiros com essa propriedade:

- `[aliases]` devolve ficheiros que contêm a propriedade `aliases`

Use parênteses retos e dois pontos `[propriedade:valor]` para devolver ficheiros com essa propriedade e valor:

- `[aliases:Name]` devolve ficheiros onde o valor da propriedade `aliases` é `Name`

Use `null` como valor para encontrar propriedades que não têm valor:

- `[aliases:null]` devolve ficheiros onde a propriedade `aliases` existe mas não tem valor

> [!info]+ Valores vazios
> O operador `null` funciona quando uma propriedade está vazia (por ex., `aliases: `), mas não quando a propriedade contém aspas vazias (`""`) ou parênteses retos vazios (`[]`).

Tanto a propriedade como o valor permitem sub-consultas, como parênteses para agrupamento, o operador `OR`, aspas duplas para correspondência exata e expressões regulares.

- `[status:Draft OR Published]` devolve ficheiros onde o valor da propriedade `status` é `Draft` ou `Published`

## Alterar sensibilidade a maiúsculas e minúsculas

Por predefinição, os termos de pesquisa não são sensíveis a maiúsculas e minúsculas. Se quiser pesquisar pelo caso exato do seu termo de pesquisa, selecione **Correspondência** ![[obsidian-icon-upper-lowercase.svg#icon]] dentro da barra de pesquisa.

Esta definição pode ser alternada. Se o ícone de **Correspondência** estiver realçado, significa que está atualmente a fazer uma pesquisa sensível a maiúsculas e minúsculas.

## Alterar ordem de classificação dos resultados

1. Introduza um [[#Termos de pesquisa|termo de pesquisa]].
2. Abaixo do campo de pesquisa, selecione o menu suspenso à direita.
3. Selecione a ordem de classificação desejada. A predefinição é "Ordenar por nome (A-Z)".

As seguintes opções estão disponíveis:

- Ordenar por nome (A-Z)
- Ordenar por nome (Z-A)
- Ordenar por última edição (recentes-antigos)
- Ordenar por última edição (antigos-recentes)
- Data de criação (recentes-antigos)
- Data de criação (antigos-recentes)

## Copiar resultados de pesquisa

1. Introduza um [[#Termos de pesquisa|termo de pesquisa]].
2. Abaixo do campo de pesquisa, selecione o ícone de três pontos junto ao número de resultados.
3. Selecione **Copiar resultados de pesquisa**.

## Usar expressões regulares

Uma expressão regular é um conjunto de caracteres que descreve um padrão de texto. Para usar expressões regulares no seu termo de pesquisa, envolva a expressão com barras (`/`).

- `/\d{4}-\d{2}-\d{2}/` corresponde a uma data ISO 8601, como 2022-01-01.

Pode até combinar expressões regulares com operadores de pesquisa:

- `path:/\d{4}-\d{2}-\d{2}/` devolve ficheiros com uma data no caminho do ficheiro.

Para mais informações sobre como escrever expressões regulares, consulte o [Guia prático de Regex](https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/) do FreeCodeCamp ou as [Expressões regulares](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) da Mozilla.

> [!info]+ Expressões regulares com sintaxe JavaScript
> As expressões regulares existem em diferentes variantes que podem parecer diferentes umas das outras. O Obsidian usa expressões regulares com sintaxe JavaScript.

## Configurar definições de pesquisa

Para configurar a Pesquisa, selecione **Definições de pesquisa** ![[lucide-sliders-horizontal.svg#icon]] no lado direito da barra de pesquisa para ver as opções.

| Definição                      | Descrição                                                                    |
|-------------------------------|------------------------------------------------------------------------------|
| **Explicar termo de pesquisa** | Decompõe os termos de pesquisa e explica-os em texto simples.                |
| **Recolher resultados**        | Alterna se deve mostrar o contexto da pesquisa.                              |
| **Mostrar o contexto**         | Expande o resultado da pesquisa para mostrar mais texto em torno da correspondência. |

## Incorporar resultados de pesquisa numa nota

Para incorporar resultados de pesquisa numa nota, adicione um bloco de código `query`:

````
```query
embed OR search
```
````

O [[Introdução ao Obsidian Publish|Obsidian Publish]] não suporta [[Limitações do Publish#Pesquisa|resultados de pesquisa]] incorporados. Para ver um exemplo renderizado em direto, use o bloco de código acima dentro do seu cofre.

![[search-query-rendered.png]]
