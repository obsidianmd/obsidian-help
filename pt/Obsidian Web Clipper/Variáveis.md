---
permalink: web-clipper/variables
---
Os [[Obsidian Web Clipper/Modelos|modelos do Web Clipper]] podem usar variáveis para pré-preencher automaticamente dados da página num modelo. As variáveis podem ser usadas no **nome da nota**, **localização da nota**, **propriedades** e **conteúdo da nota**. As variáveis também podem ser modificadas usando [[Filtros|filtros]].

Use o ícone `...` na extensão [[Introdução ao Obsidian Web Clipper|Web Clipper]] para aceder às variáveis da página atual para uso em modelos. Existem cinco tipos de variáveis que pode usar:

- [[Variáveis#Variáveis predefinidas|Variáveis predefinidas]]
- [[Variáveis#Variáveis de prompt|Variáveis de prompt]]
- [[Variáveis#Variáveis meta|Variáveis meta]]
- [[Variáveis#Variáveis de seletor|Variáveis de seletor]]
- [[Variáveis#Variáveis Schema.org|Variáveis Schema.org]]

## Variáveis predefinidas

As variáveis predefinidas são geradas automaticamente com base no conteúdo da página. Estas funcionam tipicamente para a maioria dos sites.

A principal variável de conteúdo é `{{content}}`, que contém o conteúdo do artigo, ou os [[Destacar páginas web|destaques]], ou a seleção se houver texto selecionado na página. Note que `{{content}}` tenta extrair o conteúdo principal da página, o que pode nem sempre ser o que pretende. Nesse caso, pode usar outras variáveis predefinidas ou variáveis de seletor para extrair o conteúdo que necessita.

| Variável            | Descrição                                                                              |
| ------------------- | -------------------------------------------------------------------------------------- |
| `{{author}}`        | Autor da página                                                                        |
| `{{content}}`       | Conteúdo do artigo, [[Destacar páginas web\|destaques]], ou seleção, em formato Markdown |
| `{{contentHtml}}`   | Conteúdo do artigo, [[Destacar páginas web\|destaques]], ou seleção, em formato HTML   |
| `{{date}}`          | Data atual, pode ser formatada usando o filtro `date`                                  |
| `{{description}}`   | Descrição ou excerto                                                                   |
| `{{domain}}`        | Domínio                                                                                |
| `{{favicon}}`       | URL do favicon                                                                         |
| `{{fullHtml}}`      | HTML não processado do conteúdo completo da página                                     |
| `{{highlights}}`    | [[Destacar páginas web\|Destaques]] com texto e marcas temporais                       |
| `{{image}}`         | URL da imagem de partilha social                                                       |
| `{{published}}`     | Data de publicação, pode ser formatada usando o filtro `date`                          |
| `{{selection}}`     | Seleção em formato Markdown                                                            |
| `{{selectionHtml}}` | Seleção em formato HTML                                                                |
| `{{site}}`          | Nome do site ou editor                                                                 |
| `{{title}}`         | Título da página                                                                       |
| `{{time}}`          | Data e hora atuais                                                                     |
| `{{url}}`           | URL atual                                                                              |
| `{{words}}`         | Contagem de palavras                                                                   |

## Variáveis de prompt

As variáveis de prompt utilizam modelos de linguagem para extrair e modificar dados usando linguagem natural. As variáveis de prompt requerem que o [[Interpretar páginas web|Interpretador]] esteja ativado e configurado.

As variáveis de prompt usam a sintaxe `{{"um resumo da página"}}`. As aspas duplas à volta do prompt são importantes e distinguem os prompts das variáveis predefinidas. As respostas dos prompts podem ser pós-processadas com [[Filtros|filtros]], por exemplo `{{"um resumo da página"|blockquote}}`.

### Quando usar variáveis de prompt

As variáveis de prompt têm a vantagem de ser extremamente flexíveis e fáceis de escrever, no entanto apresentam vários compromissos: são mais lentas a executar, e podem ter considerações de custo e privacidade dependendo do [[Interpretar páginas web#Modelos|fornecedor]] que escolher.

Ao contrário de outros tipos de variáveis, as variáveis de prompt precisam de ser processadas por um modelo de linguagem externo, pelo que são substituídas apenas quando o [[Interpretar páginas web|Interpretador]] tiver sido executado.

É melhor *não* usar variáveis de prompt se os dados que pretende extrair estão num formato consistente que poderia ser extraído com outros tipos de variáveis.

Por outro lado, as variáveis de prompt podem ser úteis se os dados que pretende extrair estão num formato *inconsistente* entre sites. Por exemplo, pode criar um [[Obsidian Web Clipper/Modelos|modelo]] para guardar livros que seja agnóstico relativamente ao site de livros. Variáveis de prompt como `{{"autor do livro"}}` funcionarão em qualquer site de livros, enquanto as variáveis de seletor funcionam tipicamente apenas para um site.

### Exemplos

Os prompts podem usar quase qualquer consulta em linguagem natural. Dependendo do modelo que usar, os prompts podem consultar ou traduzir dados entre idiomas.

- `{{"um resumo em três pontos, traduzido para francês"}}` para extrair pontos sobre a página e traduzi-los para francês.
- `{{"un resumé de la page en trois points"}}` para extrair três pontos usando um prompt em francês.

Os prompts podem transformar o conteúdo da página em JSON que pode ser manipulado com [[Filtros|filtros]]. Por exemplo:

```
{{"return a JSON object for each tweet, that includes the author, tweet_text, date in YYYY-MM-DD format, and images array (if there are any)"|map:tweet => ({text: tweet.tweet_text, author: tweet.author, date: tweet.date})|template:"${text}\n— [[@${author}]], [[${date}]]\n"}}
```


## Variáveis meta

As variáveis meta permitem extrair dados de [elementos meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) na página, incluindo dados [Open Graph](https://ogp.me/) usados para preencher pré-visualizações de partilha social.

- `{{meta:name}}` retorna o conteúdo da tag meta name com o nome dado, por exemplo `{{meta:name:description}}` para a tag meta `description`.
- `{{meta:property}}` retorna o conteúdo da tag meta property com a propriedade dada, por exemplo `{{meta:property:og:title}}` para a tag meta `og:title`.

## Variáveis de seletor

As variáveis de seletor permitem extrair conteúdo de texto de elementos na página usando [seletores CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators).

A sintaxe é `{{selector:seletorCss?atributo}}`, onde `?atributo` é opcional. Se nenhum atributo for especificado, o conteúdo de texto do elemento é retornado. Também pode usar `{{selectorHtml:seletorCss}}` para obter o conteúdo HTML do elemento. As variáveis de seletor tendem a funcionar melhor num site específico ou conjunto de sites que têm uma estrutura HTML consistente.

- `{{selector:h1}}` retorna o conteúdo de texto de quaisquer elementos `h1` na página.
- `{{selector:.author}}` retorna o conteúdo de texto de quaisquer elementos `.author` na página.
- `{{selector:img.hero?src}}` retorna o atributo `src` da imagem com a classe `hero`.
- `{{selector:a.main-link?href}}` retorna o atributo `href` da tag âncora com a classe `main-link`.
- `{{selectorHtml:body|markdown}}` retorna o HTML completo do elemento `body`, convertido para Markdown usando o [[Filtros#Processamento HTML|filtro]] `markdown`.
- Seletores CSS aninhados e combinadores são suportados se necessitar de mais especificidade.
- Se múltiplos elementos corresponderem ao seletor, um array é retornado, que pode processar com [[Filtros#Arrays e objetos|filtros de array e objetos]] como `join` ou `map`.

As variáveis de seletor também podem ser usadas diretamente na [[Lógica|lógica de modelos]]:

- Em ciclos: `{% for comment in selector:.comment %}...{% endfor %}`
- Em condicionais: `{% if selector:.premium-badge %}...{% endif %}`
- Em atribuição de variáveis: `{% set items = selector:.list-item %}`

## Variáveis Schema.org

As variáveis schema permitem extrair dados de [schema.org](https://schema.org/) JSON-LD na página. Os dados schema.org também podem ser usados para [[Obsidian Web Clipper/Modelos#Correspondência Schema.org|acionar automaticamente um modelo]].

- `{{schema:@Type:chave}}` retorna o valor da chave do schema.
- `{{schema:@Type:pai.filho}}` retorna o valor de uma propriedade aninhada.
- `{{schema:@Type:chaveArray}}` retorna o primeiro item num array.
- `{{schema:@Type:chaveArray[índice].propriedade}}` retorna o item no índice especificado num array.
- `{{schema:@Type:chaveArray[*].propriedade}}` retorna uma propriedade específica de todos os itens num array.

Também pode usar uma notação abreviada sem especificar o tipo de schema:

- `{{schema:author}}` corresponderá à primeira propriedade `author` encontrada em qualquer tipo de schema.
- `{{schema:name}}` corresponderá à primeira propriedade `name` encontrada em qualquer tipo de schema.

Esta notação abreviada é particularmente útil quando não sabe ou não se importa com o tipo de schema específico, mas sabe o nome da propriedade que procura.

Propriedades aninhadas e acesso a arrays funcionam também, tanto com como sem o `@Type` do schema especificado:

- `{{schema:author.name}}` encontrará a primeira propriedade `author` e depois acederá à sua sub-propriedade `name`.
- `{{schema:author[0].name}}` acederá ao `name` do primeiro autor num array de autores.
- `{{schema:author[*].name}}` retornará um array de todos os nomes de autores.
