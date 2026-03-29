---
permalink: web-clipper/filters
---
Os filtros permitem modificar [[Variáveis|variáveis]] nos [[Obsidian Web Clipper/Modelos|modelos do Web Clipper]]. Os filtros são aplicados às variáveis usando a sintaxe `{{variable|filter}}`.

- Os filtros funcionam para qualquer tipo de [[Variáveis|variável]], incluindo variáveis `prompt`, `meta`, `selector` e `schema`.
- Os filtros podem ser encadeados, por exemplo `{{variable|filter1|filter2}}`, e são aplicados na ordem em que são adicionados.

## Datas

Converter e modificar datas.

### `date`

Converte uma data para o formato especificado, [ver referência](https://day.js.org/docs/en/display/format).

- `{{date|date:"YYYY-MM-DD"}}` converte a data atual para "YYYY-MM-DD".
- Use `date:("outputFormat", "inputFormat")` para especificar o formato de entrada, por exemplo `"12/01/2024"|date:("YYYY-MM-DD", "MM/DD/YYYY")` analisa "12/01/2024" e retorna `"2024-12-01"`.

### `date_modify` 

Modifica uma data adicionando ou subtraindo uma quantidade especificada de tempo, [ver referência](https://day.js.org/docs/en/manipulate/add).

- `"2024-12-01"|date_modify:"+1 year"` retorna `"2025-12-01"`
- `"2024-12-01"|date_modify:"- 2 months"` retorna `"2024-10-01"`

### `duration`

Converte cadeias de duração ISO 8601 ou segundos em cadeias de tempo formatadas. Usa tokens: `HH` (horas com preenchimento), `H` (horas), `mm` (minutos com preenchimento), `m` (minutos), `ss` (segundos com preenchimento), `s` (segundos).

- `"PT1H30M"|duration:"HH:mm:ss"` retorna `"01:30:00"`.
- `"3665"|duration:"H:mm:ss"` retorna `"1:01:05"`.
- Definir `duration` sem parâmetros usa `HH:mm:ss` acima de 1 hora, `mm:ss` abaixo de 1 hora.
- Suporta tanto cadeias de duração ISO 8601 (por exemplo, `PT6702S`, `PT1H30M`) como segundos simples.

## Conversão e capitalização de texto

Converter cadeias de texto de um formato para outro.

### `camel`

Converte texto para `camelCase`.

### `capitalize`

Capitaliza o primeiro carácter do valor e converte o resto para minúsculas, por exemplo `"hELLO wORLD"|capitalize` retorna `"Hello world"`.

### `decode_uri`

Descodifica uma cadeia codificada em URI, por exemplo `"%E4%BD%A0%E5%A5%BD"|decode_uri` retorna `"你好"`.

- `"hello%20world"|decode_uri` retorna `"hello world"`.
- Retorna a cadeia original se a descodificação falhar (por exemplo, sequências URI malformadas).

### `kebab`

Converte texto para `kebab-case`.

### `lower`

Converte texto para `minúsculas`.

### `pascal`

Converte texto para `PascalCase`.

### `replace`

Substitui ocorrências de texto especificado:

- Substituição simples: `"hello!"|replace:",":""` remove todas as vírgulas.
- Substituições múltiplas: `"hello world"|replace:("e":"a","o":"0")` retorna `"hall0 w0rld"`.
- As substituições são aplicadas na ordem em que são especificadas.
- Para remover texto especificado, use `""` como valor de substituição.
- Caracteres especiais incluindo `: | { } ( ) ' "` devem ser escapados com uma barra invertida quando usados no termo de pesquisa, por exemplo `\:` para pesquisar um dois-pontos literal.

Expressão regular é suportada usando sintaxe de expressão regular JavaScript:

- Substituir todas as vogais: `"hello world"|replace:"/[aeiou]/g":"*"` → `"h*ll* w*rld".`
- Sem distinção de maiúsculas/minúsculas: `"HELLO world"|replace:"/hello/i":"hi"` → `"hi world".`
- Múltiplas expressões regulares: `"hello world"|replace:("/[aeiou]/g":"*","/\s+/":"-")` → `"h*ll*-w*rld"`.
- Flags disponíveis: `g` (global), `i` (sem distinção de maiúsculas/minúsculas), `m` (multilinha), `s` (dotAll), `u` (unicode), `y` (sticky).

### `safe_name`

Converte texto para um nome de ficheiro seguro.

- Por predefinição, `safe_name` aplica as regras de sanitização mais conservadoras.
- Regras específicas do sistema operativo podem ser aplicadas com `safe_name:os` onde `os` pode ser `windows`, `mac` ou `linux` para aplicar apenas as regras desse sistema operativo.

### `snake`

Converte texto para `snake_case`.

### `title`

Converte texto para `Capitalização De Título`, por exemplo `"hello world"|title` retorna `"Hello World"`.

### `trim`

Remove espaços em branco de ambas as extremidades de uma cadeia.

- `"  hello world  "|trim` retorna `"hello world"`.

### `uncamel`

Converte camelCase ou PascalCase para palavras separadas por espaços, que pode formatar adicionalmente com outros filtros como `title` ou `capitalize`.

- `"camelCase"|uncamel` retorna `"camel case"`.
- `"PascalCase"|uncamel` retorna `"pascal case"`.

### `upper`

Converte um valor para maiúsculas, por exemplo `"hello world"|upper` retorna `"HELLO WORLD"`.

## Formatação de texto

Aplicar [[Sintaxe de formatação básica]] e [[Sintaxe de formatação avançada]] ao texto.

### `blockquote` 

Adiciona um prefixo de citação Markdown (`> `) a cada linha da entrada.

### `callout`

Cria um [[Chamamentos|bloco de destaque]] com parâmetros opcionais: `{{variable|callout:("type", "title", foldState)}}`

- `type` é o tipo de bloco de destaque, e por predefinição é "info"
- `title` é o título do bloco de destaque, e por predefinição está vazio
- `foldState` é um booleano para definir o estado de recolha (true para recolhido, false para expandido, null para não recolhível)

### `footnote`

Converte um array ou objeto numa lista de notas de rodapé Markdown.

- Para arrays: `["first item","second item"]|footnote` retorna: `[^1]: first item` etc.
- Para objetos: `{"First Note": "Content 1", "Second Note": "Content 2"}|footnote` retorna: `[^first-note]: Content 1` etc.

### `fragment_link`

Converte cadeias e arrays em ligações de [fragmento de texto](https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments). Por predefinição usa "link" para o texto da ligação.

- `highlights|fragment_link` retorna `Highlight content [link](text-fragment-url)`
- `highlights|fragment_link:"custom title"` retorna `Highlight content [custom title](text-fragment-url)`

### `image` 

Converte cadeias, arrays ou objetos em sintaxe de imagem Markdown.

- Para cadeias: `"image.jpg"|image:"alt text"` retorna `![alt text](image.jpg)`.
- Para arrays: `["image1.jpg","image2.jpg"]|image:"alt text"` retorna um array de cadeias de imagem Markdown com o mesmo texto alternativo para todas as imagens.
- Para objetos: `{"image1.jpg": "Alt 1", "image2.jpg": "Alt 2"}|image` retorna cadeias de imagem Markdown com texto alternativo das chaves do objeto.

### `link`

Converte cadeias, arrays ou objetos em sintaxe de ligação Markdown (não confundir com [[Filtros#`wikilink`|wikilink]]).

- Para cadeias: `"url"|link:"author"` retorna `[author](url)`.
- Para arrays: `["url1","url2"]|link:"author"` retorna um array de ligações Markdown com o mesmo texto para todas as ligações.
- Para objetos: `{"url1": "Author 1", "url2": "Author 2"}|link` retorna ligações Markdown com o texto que corresponde às chaves do objeto.

### `list`

Converte um array numa lista Markdown.

- `list` para converter numa lista com marcadores.
- `list:task` para converter numa lista de tarefas.
- `list:numbered` para converter numa lista numerada.
- `list:numbered-task` para converter numa lista de tarefas com números.

### `table`

Converte um array ou array de objetos numa [[Sintaxe de formatação avançada#Tabelas|tabela Markdown]]:

- Para um array de objetos, usa as chaves do objeto como cabeçalhos.
- Para um array de arrays, cria uma tabela com cada array aninhado como uma linha.
- Para um array simples, cria uma tabela de coluna única com "Value" como cabeçalho.
- Cabeçalhos de coluna personalizados podem ser especificados usando: `table:("Column 1", "Column 2", "Column 3")`. Quando usado com um array simples, divide automaticamente os dados em linhas com base no número de colunas especificadas.

### `wikilink`

Converte cadeias, arrays ou objetos em sintaxe de [[Ligar notas|link wiki]] do Obsidian.

- Para cadeias: `"page"|wikilink` retorna `[[page]]`.
- Para cadeias com alcunha: `"page"|wikilink:"alias"` retorna `[[page|alias]]`.
- Para arrays: `["page1","page2"]|wikilink` retorna um array de wikilinks sem alcunhas.
- Para arrays com alcunha: `["page1","page2"]|wikilink:"alias"` retorna um array de wikilinks com a mesma alcunha para todas as ligações.
- Para objetos: `{"page1": "alias1", "page2": "alias2"}|wikilink` retorna wikilinks com as chaves como nomes de página e os valores como alcunhas.

## Números

### `calc`

Realiza operações aritméticas básicas em números.

- Suporta operadores: `+`, `-`, `*`, `/`, `**` (ou `^`) para exponenciação.
- Exemplo: `5|calc:"+10"` retorna `15`.
- Exemplo: `2|calc:"**3"` retorna `8` (2 ao cubo).
- Retorna a cadeia original se a entrada não for um número.

### `length`

Retorna o comprimento de cadeias, arrays ou número de chaves em objetos.

- Para cadeias: `"hello"|length` retorna `5`.
- Para arrays: `["a","b","c"]|length` retorna `3`.
- Para objetos: `{"a":1,"b":2}|length` retorna `2`.

### `round`

Arredonda um número para o inteiro mais próximo ou para um número especificado de casas decimais.

- Sem parâmetros: `3.7|round` retorna `4`.
- Com casas decimais especificadas: `3.14159|round:2` retorna `3.14`.

## Processamento de HTML

Processar conteúdo HTML e converter HTML para Markdown. Note que a sua [[Variáveis|variável]] de entrada deve conter conteúdo HTML, por exemplo usando `{{fullHtml}}`, `{{contentHtml}}` ou uma variável `{{selectorHtml:}}`.

### `markdown` 

Converte uma cadeia para uma cadeia formatada em [[Obsidian Flavored Markdown]].

- Útil quando combinado com variáveis que retornam HTML como `{{contentHtml}}`, `{{fullHtml}}` e variáveis de seletor como `{{selectorHtml:cssSelector}}`.

### `remove_attr` 

Remove apenas os atributos HTML especificados das tags.

- Exemplo: `"<div class="test" id="example">Content</div>"|remove_attr:"class"` retorna `<div id="example">Content</div>`.
- Múltiplos atributos: `{{fullHtml|remove_attr:("class,style,id")}}`

### `remove_html`

Remove os elementos HTML especificados e o seu conteúdo de uma cadeia.

- Suporta nome de tag, classe ou id, por exemplo `{{fullHtml|remove_html:("img,.class-name,#element-id")}}`
- Para remover apenas tags ou atributos HTML sem remover o conteúdo, use os filtros `strip_tags` ou `strip_attr`.

### `remove_tags` 

Remove apenas as tags HTML especificadas. Mantém o conteúdo das tags.

- Exemplo: `"<p>Hello <b>world</b>!</p>"|remove_tags:"b"` retorna `"<p>Hello world!</p>"`.
- Múltiplas tags: `{{fullHtml|remove_tags:("a,em,strong")}}`

### `replace_tags`

Substitui tags HTML, mantendo o conteúdo e os atributos da tag.

- `{{fullHtml|replace_tags:"strong":"h2"}}` substitui todas as tags `<strong>` por `<h2>`.

### `strip_attr`

Remove **todos** os atributos HTML de uma cadeia.

- Use `strip_attr:("class, id")` para manter atributos específicos.
- Exemplo: `"<div class="test" id="example">Content</div>"|strip_attr:("class")` retorna `<div id="example">Content</div>`.

### `strip_md`

Remove **toda** a formatação Markdown e retorna uma cadeia de texto simples, por exemplo transformando `**text**` em `text`.

- Transforma texto formatado em texto simples sem formatação, incluindo negrito, itálico, realces, cabeçalhos, código, citações em bloco, tabelas, listas de tarefas e wikilinks.
- Remove completamente tabelas, notas de rodapé, imagens e elementos HTML.

### `strip_tags`

Remove **todas** as tags HTML de uma cadeia. O conteúdo dentro da tag é preservado.

- Use `strip_tags:("p,strong,em")` para manter tags específicas.
- Exemplo: `"<p>Hello <b>world</b>!</p>"|strip_tags:("b")` retorna `Hello <b>world</b>!`.

## Arrays e objetos

Processar arrays e objetos.

### `first` 

Retorna o primeiro elemento de um array como cadeia.

- `["a","b","c"]|first` retorna `"a"`.
- Se a entrada não for um array, retorna a entrada sem alterações.

### `join`

Combina elementos de um array numa cadeia.

- `["a","b","c"]|join` retorna `"a,b,c"`.
- Um separador personalizado pode ser especificado: `["a","b","c"]|join:" "` retorna `"a b c"`. Use `join:"\n"` para separar elementos com uma quebra de linha.
- Pode ser útil após `split` ou `slice`: `"a,b,c,d"|split:","|slice:1,3|join:" "` retorna `"b c"`.

### `last`

Retorna o último elemento de um array como cadeia.

- `["a","b","c"]|last` retorna `"c"`.
- Se a entrada não for um array, retorna a entrada sem alterações.

### `map`

Aplica uma transformação a cada elemento de um array usando a sintaxe `map:item => item.property` ou `map:item => item.nested.property` para propriedades aninhadas.

- `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => item.gem` retorna `["obsidian", "amethyst"]`.
- Use parênteses para literais de objeto e expressões complexas: `map:item => ({key: value})`, por exemplo: `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => ({name: item.gem, color: item.color})` retorna `[{name: "obsidian", color: "black"}, {name: "amethyst", color: "purple"}]`.

Literais de cadeia também são suportados, por exemplo `["rock", "pop"]|map:item => "genres/${item}"` retorna `["genres/rock", "genres/pop"]`.

Combine `map` com o filtro `template`, por exemplo `map:item => ({name: ${item.gem}, color: item.color})|template:"- ${name} is ${color}\n"`. Para mapeamentos de literais de cadeia, use `${str}` no modelo, por exemplo `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"`.

Nota: Filtros incorporados não podem ser usados dentro de `map`. Isto significa que, por exemplo, cortar espaços de cada valor de um array não pode ser feito com `map`.

### `merge`

Adiciona novos valores a um array.

- Para arrays: `["a","b"]|merge:("c","d")` retorna `["a","b","c","d"]`.
- Valor único: `["a","b"]|merge:"c"` retorna `["a","b","c"]`.
- Se a entrada não for um array, cria um novo array: `"a"|merge:("b","c")` retorna `["a","b","c"]`.
- Os valores podem ser citados: `["a"]|merge:('b,"c,d",e')` retorna `["a","b","c,d","e"]`.

### `nth`

Mantém itens de posição n num array usando sintaxe de estilo CSS nth-child e padrões de grupo. Todas as posições são baseadas em 1 (o primeiro item é a posição 1).

- `array|nth:3` mantém apenas o 3.º elemento.
- `array|nth:3n` mantém cada 3.º elemento (3, 6, 9, etc.).
- `array|nth:n+3` mantém o 3.º e todos os elementos seguintes.

Sintaxe de padrão de grupo para estruturas repetitivas:

- `array|nth:1,2,3:5` mantém as posições 1, 2, 3 de cada grupo de 5 itens. Exemplo: `[1,2,3,4,5,6,7,8,9,10]|nth:1,2,3:5` retorna `[1,2,3,6,7,8]`.

### `object`

Manipula dados de objetos:

- `object:array` converte um objeto num array de pares chave-valor.
- `object:keys` retorna um array das chaves do objeto.
- `object:values` retorna um array dos valores do objeto.
- Exemplo: `{"a":1,"b":2}|object:array` retorna `[["a",1],["b",2]]`.

### `slice`

Extrai uma porção de uma cadeia ou array.

- Para cadeias: `"hello"|slice:1,4` retorna `"ell"`.
- Para arrays: `["a","b","c","d"]|slice:1,3` retorna `["b","c"]`.
- Se apenas um parâmetro for fornecido, extrai desse índice até ao fim: `"hello"|slice:2` retorna `"llo"`.
- Índices negativos contam a partir do fim: `"hello"|slice:-3` retorna `"llo"`.
- O segundo parâmetro é exclusivo: `"hello"|slice:1,4` inclui caracteres nos índices 1, 2 e 3.
- Usar um segundo parâmetro negativo exclui elementos do fim: `"hello"|slice:0,-2` retorna `"hel"`.

### `split`

Divide uma cadeia num array de subcadeias.

- `"a,b,c"|split:","` retorna `["a","b","c"]`.
- `"hello world"|split:" "` retorna `["hello","world"]`.
- Se nenhum separador for fornecido, divide em cada carácter: `"hello"|split` retorna `["h","e","l","l","o"]`.
- Expressões regulares podem ser usadas como separadores: `"a1b2c3"|split:[0-9]` retorna `["a","b","c"]`.

### `template`

Aplica uma cadeia de modelo a um objeto ou array de objetos, usando a sintaxe `object|template:"Template with ${variable}"`.

- Aceder a propriedades aninhadas: `{"gem":{"name":"Obsidian"}}|template:"${gem.name}"` retorna `"Obsidian"`.
- Para objetos: `{"gem":"obsidian","hardness":5}|template:"${gem} has a hardness of ${hardness}"` retorna `"obsidian has a hardness of 5"`.
- Para arrays: `[{"gem":"obsidian","hardness":5},{"gem":"amethyst","hardness":7}]|template:"- ${gem} has a hardness of ${hardness}\n"` retorna uma lista formatada.

Funciona com literais de cadeia de `map` usando `${str}`:

- Exemplo: `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"` retorna uma lista formatada.

### `unique`

Remove valores duplicados de arrays e objetos.

- Para arrays de primitivos: `[1,2,2,3,3]|unique` retorna `[1,2,3]`.
- Para arrays de objetos: `[{"a":1},{"b":2},{"a":1}]|unique` retorna `[{"a":1},{"b":2}]`.
- Para objetos, remove propriedades com valores duplicados, mantendo a chave da última ocorrência.
- Para cadeias, retorna a entrada sem alterações.
