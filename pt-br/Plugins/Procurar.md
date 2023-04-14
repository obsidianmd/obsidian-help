O plugin **Procurar** ajuda você a encontrar arquivos no seu cofre.

Por padrão, você pode encontrar o Procurar na barra lateral (Icone da lupa). Você também abrir a função Procurar pressionando `Ctrl+Shift+F` (ou `Cmd+Shift+F` no macOS).

- **Procurar texto selecionado:** Se você selecionar o texto no editor e abrir o comando Procurar através do atalho do teclado, a função Procurar apresentará os resultados da pesquisa para o texto selecionado.
- **Procurar por termos recentes:** Abra a função Procurar com um termo de pesquisa vazio para listar todos os termos de pesquisa recentes. Clique em qualquer um deles para pesquisar o termo novamente.

## Procurar termos

O termo de pesquisa é uma palavra ou frase que você informa no campo de pesquisa. Aprender como escrever termos de forma efetiva pode ajudá-lo a encontrar mais rapidamente aquilo que você está procurando, até mesmo em grandes cofres.

Cada palavra no termo de pesquisa possui uma correspondência independente em cada arquivo. Para pesquisar por uma frase exata, evolva o termo pesquisado com aspas duplas, por exemplo `"start wars"`. Para procurar por textos entre aspas duplas dentro de frases, você pode escapar as aspas adicionando uma barra invertida (`\`) na frente das aspas, por exemplo `"Eles falaram \"olá\" um para o outro"`.

Você pode controler se o resultado deve retornar arquivos que contém todas as correspondências das palavras ou a correspondência de alguma palavra.

- `trabalho remoto` retornará arquivos que correspondem com `trabalho` e `remoto`.
- `trabalho OR remoto` retornará arquivo que correspondem com `trabalho` ou `remoto`.

Você também pode combinar as duas formas no mesmo termo de pesquisa.

- `trabalho remoto OR trabalho digital` retornará arquivos para "trabalho remoto" e "trabalho digital".

Você pode usar parênteses para controlar a prioridade de cada expressão.

- `trabalho (remoto OR acesso) digital` retornará arquivos que contém `trabalho`, `digital` e `remoto` ou `acesso`.

Para excluir uma palavra do resultado da pesquisa, adicione um hífen (`-`) na frente da palavra:

- `trabalho -remoto` retornará arquivos que contém a palavra `trabalho`, mas não `remoto`.

> [!dica] Explicar termos de pesquisa
> Se você precisa resolver um problema de um termo de pesquisa complexo, você pode clicar em **Explicar termos de pesquisa** no painel de pesquisa para obter uma explicação sobre o seu termo de pesquisa.

## Operadores de pesquisa

Operadores de pesquisa permite que você refine suas suas pesquisa e filtre ainda mais os resultados.

Alguns operadores também permitem que você aninhe o termo de pesquisa entre parênteses, por exemplo: `tarefa: (ligar OR email)`.

| Operador de pesquisa | Descrição                                                                                                                                                          |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `file:`         | Procura o texto no nome do arquivo.<p/>Exemplo: `file:.jpg` ou `file:202209`.                                                                                                                                                     |
| `path:`         | Procura o texto no caminho do arquivo.<p/>Exemplo: `path:"Notas diárias/2022-07"`.                                                                                                                                                    |
| `content:`      | Procura o text no conteúdo do arquivo.<p/>Exemplo: `content:"Gato feliz"`.                                                                                                                                                        |
| `match-case:`   | Correspondência considerando maiúsculas e minúsculas.<p/>Exemplo: `match-case:GatoFeliz`.                                                                                                                                                             |
| `ignore-case:`  | Correspondência sem considerar maiúsculas e minúsculas.<p/>Exemplo: `ignore-case:ikea`.                                                                                                                                                              |
| `tag:`          | Procurar etiqueta em arquivo.<p/>Exemplo: `tag:#trabalho`.<p/>Observação: Uma vez que `tag:` ignora a correspondência em blocos de código e em conteúdos que não são do tipo markdown, é normalmente mais rápido e mais preciso do que uma procura pelo texto `#trabalho`.     |
| `line:`         | Procurar correspondências na mesma linha.<p/>Exemplo: `line:(misturar farinha)`.                                                                                                                                                       |
| `block:`        | Procurar correspondências no mesmo bloco.<p/>Exemplo: `block:(cachorro gato)`.<p/>Observação: Uma vez que `block:` obriga que a pesquisa analise o conteúdo markdown de cada arquivo, normalmente leva um tempo maior para ser finalizado. |
| `section:`      | Procura correspondências na mesma seção (texto entre dois cabeçalhos).<p/>Exemplo: `section:(cachorro gato)`.                                                                                                                         |
| `task:`         | Encontra correspondência em uma tarefa bloco a bloco.<p/>Exemplo: `task:ligar`.                                                                                                          |
| `task-todo:`    | Encontra correspondência em uma tarefa *incompleta* bloco a bloco.<p/>Exemplo: `task-todo:ligar`.                                                                                      |
| `task-done:`    | Encontra correspondência em uma tarefa *finalizada* bloco a bloco.<p/>Exemplo: `task-done:ligar`.                                                                                         |

## Use expressões regulares nos termos de pesquisa

Uma expressão regular é um conjunto de caracteres que descrever um padrão de texto. Para utilizar expressões regulares no seu termo de pesquisa, envolva a expressão com barras (`/`).

- `/\d{4}-\d{2}-\d{2}/` corresponde com uma data do tipo ISO 8601, como 2022-01-01.

Você pode também combinar expressões regulares com operadores de pesquisa:

- `path:/\d{4}-\d{2}-\d{2}/` retorna arquivos com o data no caminho do arquivo.

Para mais informações sobre como escrever expressões regulares, veja [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

> [!observação]
> Expressões regulares possuem diferentes "sabores" que podem parecer diferentes entre si. O Obsidian utilizar o "sabor" Javascript para expressões regulares.

## Configurar opções de pesquisa

Para configurar a pesquisa, utilize as opções no topo do painel de pesquisa:

| Opção                 | Descrição                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| **Correspondência**          | Altera entre a correspondência entre maiúsculas e minúsculas.                                            |
| **Explicar termos de pesquisa** | Quebra o termo de pesquisa em partes e explica em forma de texto.                 |
| **Esconder resultados**    | Alterna entre mostra e ocultar o conteúdo da pesquisa.                                 |
| **Mostrar o conteúdo**   | Expande o resultado da pesquisa para mostrar mais texto ao redor da correspondência.               |
| **Mudar ordenação**   | Mudar a ordem dos resultados encontrados.                                     |
| **Copiar resultados da pesquisa** | Converte e copia o resultado da pesquisa como uma lista do tipo Markdown com links opcionais. |

## Incorporar o resultado da pesquisa em uma nota

Para incorporar o resultado da pesquisa em uma nota, adicione o bloco de código de `query`:

<pre><code>```query
embed OR search
```</code></pre>

Por exemplo:

> [!observação]
> [[en/Obsidian Publish/Introduction to Obsidian Publish|Obsidian Publish]]  não suporta incorporar resultados de pesquisa. Para ver o exemplo, abra a ajuda do Obsidian localmente dentro do Obsidian.

```query
embed OR search
```
