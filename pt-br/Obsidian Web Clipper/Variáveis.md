---
permalink: web-clipper/variables
---
DESCRIPTION: Use variáveis em modelos do Obsidian Web Clipper para preencher automaticamente dados de páginas web.

Os [[Obsidian Web Clipper/Modelos|modelos do Web Clipper]] podem usar variáveis para preencher automaticamente dados da página em um modelo. As variáveis podem ser usadas no **nome da nota**, **destinação da nota**, **propriedades** e **conteúdo da nota**. As variáveis também podem ser modificadas usando [[Filtros|filtros]].

Use o ícone `...` na extensão do [[Introdução ao Obsidian Web Clipper|Web Clipper]] para acessar as variáveis da página atual para uso em modelos. Existem cinco tipos de variáveis que você pode usar:

- [[Variáveis#Variáveis predefinidas|Variáveis predefinidas]]
- [[Variáveis#Variáveis de prompt|Variáveis de prompt]]
- [[Variáveis#Variáveis meta|Variáveis meta]]
- [[Variáveis#Variáveis de seletor|Variáveis de seletor]]
- [[Variáveis#Variáveis Schema.org|Variáveis Schema.org]]

## Variáveis predefinidas

As variáveis predefinidas são geradas automaticamente com base no conteúdo da página. Elas normalmente funcionam para a maioria dos sites.

A principal variável de conteúdo é `{{content}}`, que contém o conteúdo do artigo, ou os [[Destacar páginas web|destaques]], ou a seleção se houver texto selecionado na página. Note que `{{content}}` tenta extrair o conteúdo principal da página, o que nem sempre pode ser o que você deseja. Nesse caso, você pode usar outras variáveis predefinidas ou variáveis de seletor para extrair o conteúdo necessário.

| Variável            | Descrição                                                                              |
| ------------------- | -------------------------------------------------------------------------------------- |
| `{{author}}`        | Autor da página                                                                        |
| `{{content}}`       | Conteúdo do artigo, [[Destacar páginas web\|destaques]] ou seleção, em formato Markdown |
| `{{contentHtml}}`   | Conteúdo do artigo, [[Destacar páginas web\|destaques]] ou seleção, em formato HTML   |
| `{{date}}`          | Data atual, pode ser formatada usando o filtro `date`                                  |
| `{{description}}`   | Descrição ou trecho                                                                    |
| `{{domain}}`        | Domínio                                                                                |
| `{{favicon}}`       | URL do favicon                                                                         |
| `{{fullHtml}}`      | HTML não processado do conteúdo completo da página                                     |
| `{{highlights}}`    | [[Destacar páginas web\|Destaques]] com texto e marcações de tempo                     |
| `{{image}}`         | URL da imagem de compartilhamento social                                               |
| `{{published}}`     | Data de publicação, pode ser formatada usando o filtro `date`                          |
| `{{selection}}`     | Seleção em formato Markdown                                                            |
| `{{selectionHtml}}` | Seleção em formato HTML                                                                |
| `{{site}}`          | Nome do site ou publicador                                                             |
| `{{title}}`         | Título da página                                                                       |
| `{{time}}`          | Data e hora atuais                                                                     |
| `{{url}}`           | URL atual                                                                              |
| `{{words}}`         | Contador de palavras                                                                   |

## Variáveis de prompt

As variáveis de prompt utilizam modelos de linguagem para extrair e modificar dados usando linguagem natural. As variáveis de prompt requerem que o [[Interpretar páginas web|Interpretador]] esteja ativado e configurado.

As variáveis de prompt usam a sintaxe `{{"um resumo da página"}}`. As aspas duplas ao redor do prompt são importantes e distinguem prompts de variáveis predefinidas. As respostas dos prompts podem ser pós-processadas com [[Filtros|filtros]], por exemplo, `{{"um resumo da página"|blockquote}}`.

### Quando usar variáveis de prompt

As variáveis de prompt têm a vantagem de serem extremamente flexíveis e fáceis de escrever, porém apresentam algumas desvantagens: são mais lentas para executar e podem ter considerações de custo e privacidade dependendo do [[Interpretar páginas web#Modelos|provedor]] que você escolher.

Diferente de outros tipos de variáveis, as variáveis de prompt precisam ser processadas por um modelo de linguagem externo, então são substituídas somente após o [[Interpretar páginas web|Interpretador]] ter sido executado.

É melhor *não* usar variáveis de prompt se os dados que você deseja extrair estão em um formato consistente que poderia ser extraído com outros tipos de variáveis.

Por outro lado, as variáveis de prompt podem ser úteis se os dados que você deseja extrair estão em um formato *inconsistente* entre sites. Por exemplo, você pode criar um [[Obsidian Web Clipper/Modelos|modelo]] para salvar livros que seja agnóstico ao site do livro. Variáveis de prompt como `{{"autor do livro"}}` funcionarão em qualquer site de livros, enquanto variáveis de seletor normalmente funcionam apenas para um site específico.

### Exemplos

Os prompts podem usar praticamente qualquer consulta em linguagem natural. Dependendo do modelo que você usa, os prompts podem consultar ou traduzir dados entre idiomas.

- `{{"um resumo em três tópicos, traduzido para o francês"}}` para extrair tópicos sobre a página e traduzi-los para o francês.
- `{{"un resumé de la page en trois points"}}` para extrair três tópicos usando um prompt em francês.

Os prompts podem transformar o conteúdo da página em JSON que pode ser manipulado com [[Filtros|filtros]]. Por exemplo:

```
{{"return a JSON object for each tweet, that includes the author, tweet_text, date in YYYY-MM-DD format, and images array (if there are any)"|map:tweet => ({text: tweet.tweet_text, author: tweet.author, date: tweet.date})|template:"${text}\n— [[@${author}]], [[${date}]]\n"}}
```


## Variáveis meta

As variáveis meta permitem extrair dados de [elementos meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) na página, incluindo dados [Open Graph](https://ogp.me/) usados para preencher prévias de compartilhamento social.

- `{{meta:name}}` retorna o conteúdo da tag meta name com o nome fornecido, por exemplo, `{{meta:name:description}}` para a tag meta `description`.
- `{{meta:property}}` retorna o conteúdo da tag meta property com a propriedade fornecida, por exemplo, `{{meta:property:og:title}}` para a tag meta `og:title`.

## Variáveis de seletor

As variáveis de seletor permitem extrair conteúdo de texto de elementos na página usando [seletores CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators).

A sintaxe é `{{selector:seletorCss?atributo}}`, onde `?atributo` é opcional. Se nenhum atributo for especificado, o conteúdo de texto do elemento é retornado. Você também pode usar `{{selectorHtml:seletorCss}}` para obter o conteúdo HTML do elemento. As variáveis de seletor tendem a funcionar melhor em um site específico ou conjunto de sites que possuem estrutura HTML consistente.

- `{{selector:h1}}` retorna o conteúdo de texto de quaisquer elementos `h1` na página.
- `{{selector:.author}}` retorna o conteúdo de texto de quaisquer elementos `.author` na página.
- `{{selector:img.hero?src}}` retorna o atributo `src` da imagem com a classe `hero`.
- `{{selector:a.main-link?href}}` retorna o atributo `href` da tag âncora com a classe `main-link`.
- `{{selectorHtml:body|markdown}}` retorna o HTML inteiro do elemento `body`, convertido para Markdown usando o [[Filtros#Processamento HTML|filtro]] `markdown`.
- Seletores CSS aninhados e combinadores são suportados se você precisar de mais especificidade.
- Se múltiplos elementos corresponderem ao seletor, um array é retornado, que você pode processar com [[Filtros#Arrays e objetos|filtros de arrays e objetos]] como `join` ou `map`.

As variáveis de seletor também podem ser usadas diretamente na [[Modelos#Lógica de modelo|lógica de modelo]]:

- Em loops: `{% for comment in selector:.comment %}...{% endfor %}`
- Em condicionais: `{% if selector:.premium-badge %}...{% endif %}`
- Em atribuição de variáveis: `{% set items = selector:.list-item %}`

## Variáveis Schema.org

As variáveis schema permitem extrair dados de [schema.org](https://schema.org/) JSON-LD na página. Dados schema.org também podem ser usados para [[Obsidian Web Clipper/Modelos#Correspondência Schema.org|acionar automaticamente um modelo]].

- `{{schema:@Tipo:chave}}` retorna o valor da chave do schema.
- `{{schema:@Tipo:pai.filho}}` retorna o valor de uma propriedade aninhada.
- `{{schema:@Tipo:chaveArray}}` retorna o primeiro item de um array.
- `{{schema:@Tipo:chaveArray[índice].propriedade}}` retorna o item no índice especificado de um array.
- `{{schema:@Tipo:chaveArray[*].propriedade}}` retorna uma propriedade específica de todos os itens de um array.

Você também pode usar uma notação abreviada sem especificar o tipo do schema:

- `{{schema:author}}` corresponderá à primeira propriedade `author` encontrada em qualquer tipo de schema.
- `{{schema:name}}` corresponderá à primeira propriedade `name` encontrada em qualquer tipo de schema.

Essa notação abreviada é particularmente útil quando você não sabe ou não se importa com o tipo específico do schema, mas sabe o nome da propriedade que está procurando.

Propriedades aninhadas e acesso a arrays funcionam também, tanto com quanto sem o `@Tipo` do schema especificado:

- `{{schema:author.name}}` encontrará a primeira propriedade `author` e então acessará sua sub-propriedade `name`.
- `{{schema:author[0].name}}` acessará o `name` do primeiro autor em um array de autores.
- `{{schema:author[*].name}}` retornará um array com todos os nomes dos autores.
