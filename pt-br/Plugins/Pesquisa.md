---
permalink: plugins/search
publish: true
mobile: true
description: Pesquisa é um plugin nativo que ajuda você a encontrar dados no seu cofre do Obsidian usando termos de pesquisa e operadores para refinar resultados.
aliases:
  - Plugins/Busca
---
Pesquisa é um [[Plugins nativos|plugin nativo]] que ajuda você a encontrar dados no seu cofre do Obsidian usando termos de pesquisa e operadores para refinar resultados.

Por padrão, você pode encontrar a Pesquisa na barra lateral esquerda ![[lucide-search.svg#icon]]. Você também pode abrir a Pesquisa pressionando `Ctrl+Shift+F` (Windows/Linux) ou `Command+Shift+F` (macOS).

- **Pesquisar texto selecionado**: Se você selecionar texto no editor e abrir a Pesquisa com o atalho de teclado, a Pesquisa mostrará os resultados para o texto selecionado.
- **Pesquisar termos recentes**: Abra a Pesquisa com um termo vazio para listar os termos de pesquisa recentes. Clique em qualquer um deles para usar o termo de pesquisa novamente.

> [!info] Arquivos excluídos
> Arquivos que correspondem aos seus padrões de [[Configurações#Arquivos excluídos|Arquivos excluídos]] não aparecerão nos resultados da Pesquisa.

## Termos de pesquisa

Um termo de pesquisa é a palavra ou frase que você digita no campo de pesquisa. Aprender a escrever termos de pesquisa de forma eficaz pode ajudá-lo a encontrar rapidamente o que procura, mesmo em cofres grandes. O Obsidian pesquisa apenas o conteúdo de notas e telas.

> [!tip]- Pesquisando caminhos e nomes de arquivo
> Por padrão, você só pode pesquisar os caminhos e nomes de arquivo de notas e telas. Para pesquisar um caminho ou nome de arquivo de qualquer arquivo no cofre, use o operador `path` ou `file`.

Cada palavra no termo de pesquisa é correspondida independentemente em cada arquivo. Para pesquisar uma frase exata, envolva-a com aspas, por exemplo `"star wars"`. Para pesquisar texto entre aspas dentro de uma frase exata, você pode _escapar_ as aspas adicionando uma barra invertida (`\`) antes da aspa, por exemplo `"they said \"hello\" to each other"`.

Você pode controlar se deseja retornar arquivos que contenham _todas_ as palavras do seu termo de pesquisa, ou _qualquer_ uma das palavras:

- `meeting work` retorna arquivos que contêm tanto `meeting` quanto `work`.
- `meeting OR work` retorna arquivos que contêm `meeting` ou `work`.

Você pode até combinar os dois no mesmo termo de pesquisa.

- `meeting work OR meetup personal` retorna arquivos de reuniões de trabalho e encontros pessoais.

Você pode usar parênteses para controlar a prioridade de cada expressão.

- `meeting (work OR meetup) personal` retorna arquivos que contêm `meeting`, `personal` e `work` ou `meetup`.

Para excluir, ou negar, uma palavra dos resultados da pesquisa, adicione um hífen (`-`) antes dela:

- `meeting -work` retorna arquivos que contêm `meeting` mas não `work`.

Você pode excluir múltiplas expressões:

- `meeting -work -meetup` retorna arquivos que contêm `meeting` mas não `work` ou `meetup`.

Você pode excluir uma combinação de expressões usando parênteses:

- `meeting -(work meetup)` retorna arquivos que contêm `meeting` mas não _ambos_ `work` e `meetup`.

Para filtrar resultados usando os operadores menor que (`<`) e maior que (`>`), envolva-os com colchetes (`[]`) ou aspas (`""`):

- `meeting [duration:<5]` retorna arquivos onde meeting está presente e duration é menor que 5.
- `meeting [duration:>5]` retorna arquivos onde meeting está presente e duration é maior que 5.

> [!tip]- Explicar termo de pesquisa
> Se você precisar solucionar problemas de um termo de pesquisa complexo, pode clicar em **Explicar termo de pesquisa** na Pesquisa para obter uma explicação do seu termo de pesquisa.

## Operadores de pesquisa

Operadores de pesquisa permitem termos de pesquisa mais refinados para filtrar seus resultados ainda mais.

Alguns operadores até permitem adicionar um termo de pesquisa aninhado dentro de parênteses, por exemplo: `task:(call OR email)`.

| Operador de pesquisa | Descrição                                                                                                                                                                                                                                                                                                        |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `file:`              | Encontra texto no nome do arquivo. Corresponde a qualquer arquivo no cofre.<p/>Exemplo: `file:.jpg` ou `file:202209`.                                                                                                                                                                                           |
| `path:`              | Encontra texto no caminho do arquivo. Corresponde a qualquer arquivo no cofre.<p/>Exemplo: `path:"Daily notes/2022-07"`.                                                                                                                                                                                        |
| `content:`           | Encontra texto no conteúdo do arquivo.<p/>Exemplo: `content:"happy cat"`.                                                                                                                                                                                                                                        |
| `match-case:`        | Correspondência sensível a maiúsculas/minúsculas.<p/>Exemplo: `match-case:HappyCat`.                                                                                                                                                                                                                            |
| `ignore-case:`       | Correspondência insensível a maiúsculas/minúsculas.<p/>Exemplo: `ignore-case:ikea`.                                                                                                                                                                                                                             |
| `tag:`               | Encontra tag no arquivo.<p/>Exemplo: `tag:#work`.<p/>Tenha em mente que pesquisar por `tag:#work` não retornará resultados para `#myjob/work`.<br /><br />**Nota**: Como `tag:` ignora correspondências em blocos de código e em conteúdo não-Markdown, geralmente é mais rápido e preciso do que uma pesquisa normal de texto completo por `#work`. |
| `line:`              | Encontra arquivos que contêm pelo menos uma linha correspondente a `x`.<p/>Exemplo: `line:(mix flour)`.<p/><br>**Nota:** Usar `-line` nega a pesquisa, significando que encontrará arquivos onde nenhuma linha corresponde a `x`.                                                                                |
| `block:`             | Encontra correspondências no mesmo bloco.<p/>Exemplo: `block:(dog cat)`.<p/>**Nota**: Como `block:` requer que a Pesquisa analise o conteúdo Markdown em cada arquivo, pode fazer com que seu termo de pesquisa demore mais para ser concluído.                                                                  |
| `section:`           | Encontra correspondências na mesma seção (texto entre dois cabeçalhos).<p/>Exemplo: `section:(dog cat)`.                                                                                                                                                                                                        |
| `task:`              | Encontra correspondências em uma [[Sintaxe de formatação básica#Listas de tarefas\|tarefa]] bloco a bloco.<p/>Exemplo: `task:call`.                                                                                                                                                                             |
| `task-todo:`         | Encontra correspondências em uma [[Sintaxe de formatação básica#Listas de tarefas\|tarefa]] *não concluída* bloco a bloco.<p/>Exemplo: `task-todo:call`.                                                                                                                                                        |
| `task-done:`         | Encontra correspondências em uma [[Sintaxe de formatação básica#Listas de tarefas\|tarefa]] *concluída* bloco a bloco.<p/>Exemplo: `task-done:call`.                                                                                                                                                            |

## Pesquisar propriedades

Você pode usar dados armazenados em [[Propriedades]] nos seus termos de pesquisa.

Use colchetes ao redor do nome de uma propriedade `[propriedade]` para retornar arquivos com essa propriedade:

- `[aliases]` retorna arquivos que contêm a propriedade `aliases`

Use colchetes e dois pontos `[propriedade:valor]` para retornar arquivos com essa propriedade e valor:

- `[aliases:Name]` retorna arquivos onde o valor da propriedade `aliases` é `Name`

Use `null` como valor para encontrar propriedades que não têm valor:

- `[aliases:null]` retorna arquivos onde a propriedade `aliases` existe mas não tem valor

> [!info]+ Valores vazios
> O operador `null` funciona quando uma propriedade está vazia (ex., `aliases: `), mas não quando a propriedade contém aspas vazias (`""`) ou colchetes vazios (`[]`).

Tanto propriedade quanto valor permitem subconsultas, como parênteses para agrupamento, o operador `OR`, aspas duplas para correspondência exata e regex.

- `[status:Draft OR Published]` retorna arquivos onde o valor da propriedade `status` é `Draft` ou `Published`

## Alterar sensibilidade a maiúsculas/minúsculas

Por padrão, os termos de pesquisa não diferenciam maiúsculas de minúsculas. Se você quiser pesquisar com a capitalização exata do seu termo de pesquisa, selecione **Correspondência** ![[obsidian-icon-upper-lowercase.svg#icon]] dentro da barra de pesquisa.

Esta configuração pode ser alternada. Se o ícone de **Correspondência** estiver destacado, significa que você está fazendo uma pesquisa sensível a maiúsculas/minúsculas.

## Alterar ordem de classificação dos resultados

1. Digite um [[#Termos de pesquisa|termo de pesquisa]].
2. Abaixo do campo de pesquisa, selecione o menu suspenso à direita.
3. Selecione a ordem de classificação desejada. O padrão é "Ordenar por nome (A - Z)".

As seguintes opções estão disponíveis:

- Ordenar por nome (A - Z)
- Ordenar por nome (Z - A)
- Ordenar por última edição (recentes-antigas)
- Ordenar por última edição (antigas-recentes)
- Tempo de criação (recentes-antigos)
- Tempo de criação (antigos-recentes)

## Copiar resultados da pesquisa

1. Digite um [[#Termos de pesquisa|termo de pesquisa]].
2. Abaixo do campo de pesquisa, selecione o ícone de três pontos ao lado do número de resultados.
3. Selecione **Copiar resultados da pesquisa**.

## Usar expressões regulares

Uma expressão regular é um conjunto de caracteres que descreve um padrão de texto. Para usar expressões regulares no seu termo de pesquisa, envolva a expressão com barras (`/`).

- `/\d{4}-\d{2}-\d{2}/` corresponde a uma data ISO 8601, como 2022-01-01.

Você pode até combinar expressões regulares com operadores de pesquisa:

- `path:/\d{4}-\d{2}-\d{2}/` retorna arquivos com uma data no caminho do arquivo.

Para mais informações sobre como escrever expressões regulares, consulte o [guia prático de Regex](https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/) do FreeCodeCamp ou a documentação de [Expressões regulares](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) da Mozilla.

> [!info]+ Expressões regulares no estilo JavaScript
> Expressões regulares vêm em diferentes variantes que podem parecer diferentes umas das outras. O Obsidian usa expressões regulares no estilo JavaScript.

## Configurar as configurações de pesquisa

Para configurar a Pesquisa, selecione **Configurações de pesquisa** ![[lucide-sliders-horizontal.svg#icon]] no lado direito da barra de pesquisa para ver as opções.

| Configuração                  | Descrição                                                                        |
|-------------------------------|----------------------------------------------------------------------------------|
| **Explicar termo de pesquisa** | Decompõe os termos de pesquisa e os explica em texto simples.                    |
| **Esconder resultados**       | Alterna se deve mostrar o contexto da pesquisa.                                  |
| **Mostrar o contexto**        | Expande o resultado da pesquisa para mostrar mais texto ao redor da correspondência. |

## Incorporar resultados de pesquisa em uma nota

Para incorporar resultados de pesquisa em uma nota, adicione um bloco de código `query`:

````
```query
embed OR search
```
````

O [[Introdução ao Obsidian Publish|Obsidian Publish]] não suporta [[Limitações do Publish#Pesquisa|resultados de pesquisa]] incorporados. Para ver um exemplo renderizado ao vivo, use o bloco de código acima dentro do seu cofre.

![[search-query-rendered.png]]
