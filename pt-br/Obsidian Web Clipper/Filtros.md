---
permalink: web-clipper/filters
---
Os filtros permitem modificar [[Variáveis|variáveis]] nos [[Obsidian Web Clipper/Modelos|modelos do Web Clipper]]. Os filtros são aplicados às variáveis usando a sintaxe `{{variable|filter}}`.

- Os filtros funcionam para qualquer tipo de [[Variáveis|variável]], incluindo variáveis `prompt`, `meta`, `selector` e `schema`.
- Os filtros podem ser encadeados, por exemplo, `{{variable|filter1|filter2}}`, e são aplicados na ordem em que são adicionados.

## Datas

Converter e modificar datas.

### `date`

Converte uma data para o formato especificado, [veja a referência](https://day.js.org/docs/en/display/format).

- `{{date|date:"YYYY-MM-DD"}}` converte a data atual para "YYYY-MM-DD".
- Use `date:("outputFormat", "inputFormat")` para especificar o formato de entrada, por exemplo, `"12/01/2024"|date:("YYYY-MM-DD", "MM/DD/YYYY")` analisa "12/01/2024" e retorna `"2024-12-01"`.

### `date_modify` 

Modifica uma data adicionando ou subtraindo uma quantidade especificada de tempo, [veja a referência](https://day.js.org/docs/en/manipulate/add).

- `"2024-12-01"|date_modify:"+1 year"` retorna `"2025-12-01"`
- `"2024-12-01"|date_modify:"- 2 months"` retorna `"2024-10-01"`

### `duration`

Converte strings de duração ISO 8601 ou segundos em strings de tempo formatadas. Usa tokens: `HH` (horas com preenchimento), `H` (horas), `mm` (minutos com preenchimento), `m` (minutos), `ss` (segundos com preenchimento), `s` (segundos).

- `"PT1H30M"|duration:"HH:mm:ss"` retorna `"01:30:00"`.
- `"3665"|duration:"H:mm:ss"` retorna `"1:01:05"`.
- Definir `duration` sem parâmetros usa `HH:mm:ss` acima de 1 hora, `mm:ss` abaixo de 1 hora.
- Suporta tanto strings de duração ISO 8601 (por exemplo, `PT6702S`, `PT1H30M`) quanto segundos simples.

## Conversão e capitalização de texto

Converter strings de texto de um formato para outro.

### `camel`

Converte texto para `camelCase`.

### `capitalize`

Capitaliza o primeiro caractere do valor e converte o restante para minúsculas, por exemplo, `"hELLO wORLD"|capitalize` retorna `"Hello world"`.

### `decode_uri`

Decodifica uma string codificada em URI, por exemplo, `"%E4%BD%A0%E5%A5%BD"|decode_uri` retorna `"你好"`.

- `"hello%20world"|decode_uri` retorna `"hello world"`.
- Retorna a string original se a decodificação falhar (por exemplo, sequências URI malformadas).

### `encode_uri`

Codifica texto para uso em uma URL, incluindo caracteres reservados como `/`, `?` e `&`.

- `"hello world/page"|encode_uri` retorna `hello%20world%2Fpage`.

### `indent`

Indenta cada linha não vazia com espaços. O padrão é dois espaços.

- `indent:4` indenta cada linha com quatro espaços.
- `indent:0` deixa o texto inalterado.

### `kebab`

Converte texto para `kebab-case`.

### `lower`

Converte texto para `minúsculas`.

### `pascal`

Converte texto para `PascalCase`.

### `replace`

Substitui ocorrências do texto especificado:

- Substituição simples: `"hello!"|replace:",":""` remove todas as vírgulas.
- Múltiplas substituições: `"hello world"|replace:("e":"a","o":"0")` retorna `"hall0 w0rld"`.
- As substituições são aplicadas na ordem em que são especificadas.
- Para remover o texto especificado, use `""` como valor de substituição.
- Caracteres especiais incluindo `: | { } ( ) ' "` devem ser escapados com uma barra invertida quando usados no termo de busca, por exemplo, `\:` para buscar dois-pontos literais.

Regex é suportado usando a sintaxe regex do JavaScript:

- Substituir todas as vogais: `"hello world"|replace:"/[aeiou]/g":"*"` → `"h*ll* w*rld".`
- Sem distinção de maiúsculas: `"HELLO world"|replace:"/hello/i":"hi"` → `"hi world".`
- Múltiplos regex: `"hello world"|replace:("/[aeiou]/g":"*","/\s+/":"-")` → `"h*ll*-w*rld"`.
- Flags disponíveis: `g` (global), `i` (sem distinção de maiúsculas), `m` (multilinha), `s` (dotAll), `u` (unicode), `y` (sticky).

### `safe_name`

Converte texto para um nome de arquivo seguro.

- Por padrão, `safe_name` aplica as regras de sanitização mais conservadoras.
- Regras específicas do SO podem ser aplicadas com `safe_name:os` onde `os` pode ser `windows`, `mac` ou `linux` para aplicar apenas as regras desse sistema operacional.

### `snake`

Converte texto para `snake_case`.

### `title`

Converte texto para `Caso De Título`, por exemplo, `"hello world"|title` retorna `"Hello World"`.

### `trim`

Remove espaços em branco de ambas as extremidades de uma string.

- `"  hello world  "|trim` retorna `"hello world"`.

### `truncate`

Encurta o texto para um número de caracteres e termina com `…`. O sufixo conta para o limite.

- `"A concise introduction"|truncate:10` retorna `A concise…`.
- `"A concise introduction"|truncate:(12, "...")` retorna `A concise...`.
- `"A concise introduction"|truncate:(9, "")` retorna `A concise`.

### `truncatewords`

Encurta o texto para um número de palavras e adiciona `…`.

- `"A concise introduction to Knap"|truncatewords:3` retorna `A concise introduction…`.
- `"A concise introduction to Knap"|truncatewords:(3, "")` retorna `A concise introduction`.

### `unescape`

Converte aspas escapadas e sequências de nova linha em caracteres literais.

- `"Line 1\\nLine 2"|unescape` retorna o texto em duas linhas.
- `'He said \\"hello\\"'|unescape` retorna `He said "hello"`.

### `uncamel`

Converte camelCase ou PascalCase para palavras separadas por espaço, que você pode formatar ainda mais com outros filtros como `title` ou `capitalize`.

- `"camelCase"|uncamel` retorna `"camel case"`.
- `"PascalCase"|uncamel` retorna `"pascal case"`.

### `upper`

Converte um valor para maiúsculas, por exemplo, `"hello world"|upper` retorna `"HELLO WORLD"`.

## Formatação de texto

Aplicar [[Sintaxe de formatação básica]] e [[Sintaxe de formatação avançada]] ao texto.

### `blockquote` 

Adiciona um prefixo de citação Markdown (`> `) a cada linha da entrada.

### `bold`

Envolve o texto em marcadores de negrito.

- `"Important"|bold` retorna `**Important**`.
- `"Important"|bold:_` retorna `__Important__`.

### `callout`

Cria uma [[Frases de Destaque|frase de destaque]] com parâmetros opcionais: `{{variable|callout:("type", "title", foldState)}}`

- `type` é o tipo da frase de destaque, e o padrão é "info"
- `title` é o título da frase de destaque, e o padrão é vazio
- `foldState` é um booleano para definir o estado de dobramento (true para dobrado, false para desdobrado, null para não dobrável)

### `code`

Formata texto como código inline. Texto multilinha, ou um parâmetro de linguagem, cria um bloco de código cercado.

- `"const answer = 42"|code` retorna `` `const answer = 42` ``.
- `"const answer = 42"|code:"typescript"` retorna um bloco de código marcado como `typescript`.

### `code_block`

Sempre cria um bloco de código cercado, com uma linguagem opcional, por exemplo, `code_block:"typescript"`.

### `comment`

Envolve o texto em marcadores de [[Sintaxe de formatação básica#Comentários|comentário]].

- `"Hidden note"|comment` retorna `%%Hidden note%%`.

### `embed`

Converte strings, arrays ou objetos em [[Incorporar arquivos|incorporações]].

- Para strings: `"diagram.png"|embed` retorna `![[diagram.png]]`.
- Para strings com apelido: `"Project Atlas"|embed:"Preview"` retorna `![[Project Atlas|Preview]]`.
- Para objetos: `{"one.md": "One", "two.md": "Two"}|embed` retorna incorporações com as chaves como arquivos e valores como apelidos.

### `escape_md`

Adiciona uma barra invertida antes da pontuação Markdown para que seja exibida como texto simples.

- `"# Draft *title*"|escape_md` retorna `\# Draft \*title\*`.

### `footnote`

Converte um array ou objeto em uma lista de notas de rodapé Markdown.

- Para arrays: `["first item","second item"]|footnote` retorna: `[^1]: first item` etc.
- Para objetos: `{"First Note": "Content 1", "Second Note": "Content 2"}|footnote` retorna: `[^first-note]: Content 1` etc.

### `fragment_link`

Converte strings e arrays em links de [fragmento de texto](https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments). O padrão é "link" para o texto do link.

- `highlights|fragment_link` retorna `Highlight content [link](text-fragment-url)`
- `highlights|fragment_link:"custom title"` retorna `Highlight content [custom title](text-fragment-url)`

### `h1` a `h6`

Transforma cada linha não vazia em um cabeçalho daquele nível.

- `"Introduction"|h2` retorna `## Introduction`.

### `hard_break`

Adiciona dois espaços antes de cada quebra de linha simples, para que as quebras de linha apareçam na visualização de Leitura. Linhas em branco entre parágrafos permanecem como estão.

### `highlight`

Envolve o texto em marcadores de destaque.

- `"Remember this"|highlight` retorna `==Remember this==`.
- Adicione uma [[Sintaxe de formatação básica#Cores de destaque|cor de destaque]] com `red`, `orange`, `yellow`, `green`, `blue` ou `purple`, por exemplo, `"Remember this"|highlight:blue` retorna `==🔵Remember this==`.

### `hr`

Adiciona uma linha horizontal (`---`) após o texto, separada por uma linha em branco.

- `"Section end"|hr` adiciona a linha após o texto.
- `hr:before` adiciona antes do texto, e `hr:both` adiciona em ambos os lados.

### `image` 

Converte strings, arrays ou objetos em sintaxe de imagem Markdown.

- Para strings: `"image.jpg"|image:"alt text"` retorna `![alt text](image.jpg)`.
- Para arrays: `["image1.jpg","image2.jpg"]|image:"alt text"` retorna um array de strings de imagem Markdown com o mesmo texto alternativo para todas as imagens.
- Para objetos: `{"image1.jpg": "Alt 1", "image2.jpg": "Alt 2"}|image` retorna strings de imagem Markdown com texto alternativo das chaves do objeto.

### `italic`

Envolve o texto em marcadores de itálico.

- `"Emphasized"|italic` retorna `*Emphasized*`.
- `"Emphasized"|italic:_` retorna `_Emphasized_`.

### `link`

Converte strings, arrays ou objetos em sintaxe de link Markdown (não confundir com [[Filtros#`wikilink`|wikilink]]).

- Para strings: `"url"|link:"author"` retorna `[author](url)`.
- Para arrays: `["url1","url2"]|link:"author"` retorna links Markdown com o mesmo texto para todos os links, um link por linha.
- Para objetos: `{"url1": "Author 1", "url2": "Author 2"}|link` retorna links Markdown com o texto correspondente aos valores do objeto, um link por linha.

### `list`

Converte um array em uma lista Markdown.

- `list` para converter em uma lista com marcadores.
- `list:task` para converter em uma lista de tarefas.
- `list:numbered` para converter em uma lista numerada.
- `list:numbered-task` para converter em uma lista de tarefas com números.

### `math`

Formata texto como [[Sintaxe de formatação avançada#Matemática|matemática]] inline. Texto multilinha se torna um bloco matemático.

- `"x^2 + y^2"|math` retorna `$x^2 + y^2$`.

### `math_block`

Sempre cria um bloco matemático, com `$$` nas linhas antes e depois do texto.

### `strike`

Envolve o texto em marcadores de tachado.

- `"Removed"|strike` retorna `~~Removed~~`.

### `table`

Converte um array ou array de objetos em uma [[Sintaxe de formatação avançada#Tabelas|tabela Markdown]]:

- Para um array de objetos, usa as chaves do objeto como cabeçalhos.
- Para um array de arrays, cria uma tabela com cada array aninhado como uma linha.
- Para um array simples, cria uma tabela de coluna única com "Value" como cabeçalho.
- Cabeçalhos de coluna personalizados podem ser especificados usando: `table:("Column 1", "Column 2", "Column 3")`. Quando usado com um array simples, automaticamente divide os dados em linhas com base no número de colunas especificadas.

### `table_pretty`

Funciona como [[Filtros#`table`|table]], e preenche as colunas com larguras iguais para que a tabela fique alinhada no modo Fonte.

### `wikilink`

Converte strings, arrays ou objetos em sintaxe de [[Vincular notas|link wiki]] do Obsidian.

- Para strings: `"page"|wikilink` retorna `[[page]]`.
- Para strings com apelido: `"page"|wikilink:"alias"` retorna `[[page|alias]]`.
- Para arrays: `["page1","page2"]|wikilink` retorna um array de wikilinks sem apelidos.
- Para arrays com apelido: `["page1","page2"]|wikilink:"alias"` retorna um array de wikilinks com o mesmo apelido para todos os links.
- Para objetos: `{"page1": "alias1", "page2": "alias2"}|wikilink` retorna wikilinks com as chaves como nomes de página e valores como apelidos.

## Números

`calc`, `round` e `length` retornam números, preservando seu tipo em filtros posteriores e atribuições de variáveis. `number_format` retorna texto.

### `calc`

Realiza operações aritméticas básicas em números.

- Suporta operadores: `+`, `-`, `*`, `/`, `**` (ou `^`) para exponenciação.
- Exemplo: `5|calc:"+10"` retorna `15`.
- Exemplo: `2|calc:"**3"` retorna `8` (2 ao cubo).
- Retorna a entrada original se estiver vazia, não for um número ou o cálculo produzir um resultado não finito.

### `length`

Retorna o comprimento de strings, arrays ou número de chaves em objetos.

- Para strings: `"hello"|length` retorna `5`.
- Para arrays: `["a","b","c"]|length` retorna `3`.
- Um array com um item ainda conta como um: `[42]|length` retorna `1`.
- Para objetos: `{"a":1,"b":2}|length` retorna `2`.

### `number_format`

Formata um número com um número especificado de casas decimais e separadores opcionais de decimal e milhares.

- `1234.567|number_format:2` retorna `"1,234.57"`.
- `1234.567|number_format:(2,",",".")` retorna `"1.234,57"`.
- Arrays e objetos são formatados recursivamente.

### `round`

Arredonda um número para o inteiro mais próximo ou para um número especificado de casas decimais.

- Sem parâmetros: `3.7|round` retorna `4`.
- Com casas decimais especificadas: `3.14159|round:2` retorna `3.14`.
- Arrays e objetos mantêm sua estrutura, com valores numéricos arredondados recursivamente. Strings numéricas se tornam números, por exemplo, `["1.234","2.345"]|round:2` retorna `[1.23,2.35]`.
- Entrada inválida como `"42abc"` é preservada em vez de ser convertida em número.

## Processamento de HTML

Processar conteúdo HTML e converter HTML para Markdown. Note que sua [[Variáveis|variável]] de entrada deve conter conteúdo HTML, por exemplo, usando `{{fullHtml}}`, `{{contentHtml}}` ou uma variável `{{selectorHtml:}}`.

### `html_to_json`

Converte HTML em JSON estruturado contendo a tag, atributos e filhos de cada elemento. Nós de texto usam o formato `{"type":"text","content":"..."}`. Isso pode ser combinado com filtros como `map`, `object` e `template` para reformatar HTML extraído.

### `markdown` 

Converte uma string para uma string formatada em [[Markdown do Obsidian]].

- Útil quando combinado com variáveis que retornam HTML como `{{contentHtml}}`, `{{fullHtml}}` e variáveis de seletor como `{{selectorHtml:cssSelector}}`.

### `remove_attr` 

Remove apenas os atributos HTML especificados das tags.

- Exemplo: `'<div class="test" id="example">Content</div>'|remove_attr:"class"` retorna `<div id="example">Content</div>`.
- Múltiplos atributos: `{{fullHtml|remove_attr:("class,style,id")}}`

### `remove_html`

Remove os elementos HTML especificados e seu conteúdo de uma string.

- Suporta nome de tag, classe ou id, por exemplo, `{{fullHtml|remove_html:("img,.class-name,#element-id")}}`
- Para remover apenas tags ou atributos HTML sem remover o conteúdo, use os filtros `strip_tags` ou `strip_attr`.

### `remove_tags` 

Remove apenas as tags HTML especificadas. Mantém o conteúdo das tags.

- Exemplo: `"<p>Hello <b>world</b>!</p>"|remove_tags:"b"` retorna `"<p>Hello world!</p>"`.
- Múltiplas tags: `{{fullHtml|remove_tags:("a,em,strong")}}`

### `replace_tags`

Substitui tags HTML, mantendo o conteúdo e os atributos da tag.

- `{{fullHtml|replace_tags:"strong":"h2"}}` substitui todas as tags `<strong>` por `<h2>`.

### `strip_attr`

Remove **todos** os atributos HTML de uma string.

- Use `strip_attr:("class, id")` para manter atributos específicos.
- Exemplo: `'<div class="test" id="example">Content</div>'|strip_attr:("class")` retorna `<div class="test">Content</div>`.

### `strip_md`

Remove **toda** a formatação Markdown e retorna uma string de texto simples, por exemplo, transformando `**text**` em `text`.

- Transforma texto formatado em texto simples sem formatação, incluindo negrito, itálico, destaques, cabeçalhos, código, citações, tabelas, listas de tarefas e wikilinks.
- Remove completamente tabelas, notas de rodapé, imagens e elementos HTML.
- `stripmd` é um apelido.

### `strip_tags`

Remove **todas** as tags HTML de uma string. O conteúdo dentro da tag é preservado.

- Use `strip_tags:("p,strong,em")` para manter tags específicas.
- Exemplo: `"<p>Hello <b>world</b>!</p>"|strip_tags:("b")` retorna `Hello <b>world</b>!`.

## Arrays e objetos

Processar arrays e objetos.

### `compact`

Remove valores `null` e strings vazias de arrays e objetos. Mantém `0` e `false`.

- `[null,"","one",0,false,"two"]|compact` retorna `["one",0,false,"two"]`.

### `first` 

Retorna o primeiro elemento de um array, preservando seu tipo. Objetos e arrays aninhados são exibidos como JSON.

- `["a","b","c"]|first` retorna `"a"`.
- Um array vazio retorna `null`, que é exibido como texto vazio.
- Se a entrada não for um array, retorna a entrada inalterada.

### `join`

Combina elementos de um array em uma string.

- `["a","b","c"]|join` retorna `"a,b,c"`.
- Um separador personalizado pode ser especificado: `["a","b","c"]|join:" "` retorna `"a b c"`. Use `join:"\n"` para separar elementos com uma quebra de linha.
- Pode ser útil após `split` ou `slice`: `"a,b,c,d"|split:","|slice:1,3|join:" "` retorna `"b c"`.

### `last`

Retorna o último elemento de um array, preservando seu tipo. Objetos e arrays aninhados são exibidos como JSON.

- `["a","b","c"]|last` retorna `"c"`.
- Um array vazio retorna `null`, que é exibido como texto vazio.
- Se a entrada não for um array, retorna a entrada inalterada.

### `map`

Aplica uma transformação a cada elemento de um array usando a sintaxe `map:item => item.property` ou `map:item => item.nested.property` para propriedades aninhadas.

- `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => item.gem` retorna `["obsidian", "amethyst"]`.
- Use parênteses para literais de objeto e expressões complexas: `map:item => ({key: value})`, por exemplo: `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => ({name: item.gem, color: item.color})` retorna `[{name: "obsidian", color: "black"}, {name: "amethyst", color: "purple"}]`.

Literais de string também são suportados, por exemplo, `["rock", "pop"]|map:item => "genres/${item}"` retorna `["genres/rock", "genres/pop"]`.

Combine `map` com o filtro `template`, por exemplo, `map:item => ({name: ${item.gem}, color: item.color})|template:"- ${name} is ${color}\n"`. Para maps com literais de string, use `${str}` no template, por exemplo, `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"`.

Nota: Filtros integrados não podem ser usados dentro de `map`. Isso significa que, por exemplo, aparar cada valor de um array não pode ser feito com `map`.

### `merge`

Adiciona novos valores a um array.

- Para arrays: `["a","b"]|merge:("c","d")` retorna `["a","b","c","d"]`.
- Valor único: `["a","b"]|merge:"c"` retorna `["a","b","c"]`.
- Se a entrada não for um array, cria um novo array: `"a"|merge:("b","c")` retorna `["a","b","c"]`.
- Valores podem ser entre aspas: `["a"]|merge:('b,"c,d",e')` retorna `["a","b","c,d","e"]`.

### `nth`

Mantém itens na enésima posição em um array usando sintaxe estilo nth-child do CSS e padrões de grupo. Todas as posições são baseadas em 1 (o primeiro item é a posição 1).

- `array|nth:3` mantém apenas o 3º elemento.
- `array|nth:3n` mantém cada 3º elemento (3, 6, 9, etc.).
- `array|nth:n+3` mantém o 3º e todos os elementos seguintes.

O resultado permanece como um array para filtros de coleção posteriores. Se contiver um único valor primitivo, esse valor é exibido sem colchetes de array e passado diretamente para filtros de texto, por exemplo, `[1,2]|nth:2` exibe `2`.

Sintaxe de padrão de grupo para estruturas repetitivas:

- `array|nth:1,2,3:5` mantém as posições 1, 2, 3 de cada grupo de 5 itens. Exemplo: `[1,2,3,4,5,6,7,8,9,10]|nth:1,2,3:5` retorna `[1,2,3,6,7,8]`.

### `object`

Manipula dados de objetos:

- `object:array` converte um objeto em um array de pares chave-valor.
- `object:keys` retorna um array das chaves do objeto.
- `object:values` retorna um array dos valores do objeto.
- Exemplo: `{"a":1,"b":2}|object:array` retorna `[["a",1],["b",2]]`.

### `parse_json`

Analisa texto JSON em um valor tipado. Use isto antes de filtros de coleção ou serialização YAML quando uma variável contém texto JSON, por exemplo, `'[1,2]'|parse_json|yaml:flow` retorna `[1,2]`.

### `reverse`

Inverte strings, arrays e a ordem de entradas de objetos.

- `"abc"|reverse` retorna `"cba"`.
- `["a","b","c"]|reverse` retorna `["c","b","a"]`.

### `slice`

Extrai uma porção de uma string ou array.

- Para strings: `"hello"|slice:1,4` retorna `"ell"`.
- Para arrays: `["a","b","c","d"]|slice:1,3` retorna `["b","c"]`.
- Se apenas um parâmetro for fornecido, extrai desse índice até o final: `"hello"|slice:2` retorna `"llo"`.
- Índices negativos contam a partir do final: `"hello"|slice:-3` retorna `"llo"`.
- O segundo parâmetro é exclusivo: `"hello"|slice:1,4` inclui caracteres nos índices 1, 2 e 3.
- Usar um segundo parâmetro negativo exclui elementos do final: `"hello"|slice:0,-2` retorna `"hel"`.

### `sort`

Ordena um array em ordem crescente. Números são ordenados por valor.

- `[10,2,1]|sort` retorna `[1,2,10]`.
- `["a","c","b"]|sort:"desc"` retorna `["c","b","a"]`.
- Para arrays de objetos, passe uma propriedade: `[{"name":"Lin"},{"name":"Ada"}]|sort:"name"` retorna `[{"name":"Ada"},{"name":"Lin"}]`. Use `sort:("name", "desc")` para inverter. Itens sem a propriedade ficam por último.

### `split`

Divide uma string em um array de substrings.

- `"a,b,c"|split:","` retorna `["a","b","c"]`.
- `"hello world"|split:" "` retorna `["hello","world"]`.
- Se nenhum separador for fornecido, divide em cada caractere: `"hello"|split` retorna `["h","e","l","l","o"]`.
- Expressões regulares podem ser usadas como separadores: `"a1b2c3"|split:[0-9]` retorna `["a","b","c",""]`. O último item está vazio porque a string termina com um separador.

### `sum`

Soma os números em um array. Texto que não é um número é ignorado, e um array vazio retorna `0`.

- `[10,"2.5","","none"]|sum` retorna `12.5`.
- Para arrays de objetos, passe uma propriedade: `[{"amount":10},{"amount":"2.5"}]|sum:"amount"` retorna `12.5`.

### `template`

Aplica uma string de template a um objeto ou array de objetos, usando a sintaxe `object|template:"Template with ${variable}"`.

- Acessar propriedades aninhadas: `{"gem":{"name":"Obsidian"}}|template:"${gem.name}"` retorna `"Obsidian"`.
- Para objetos: `{"gem":"obsidian","hardness":5}|template:"${gem} has a hardness of ${hardness}"` retorna `"obsidian has a hardness of 5"`.
- Para arrays: `[{"gem":"obsidian","hardness":5},{"gem":"amethyst","hardness":7}]|template:"- ${gem} has a hardness of ${hardness}\n"` retorna uma lista formatada.

Funciona com literais de string do `map` usando `${str}`:

- Exemplo: `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"` retorna uma lista formatada.

### `unique`

Remove valores duplicados de arrays e objetos.

- Para arrays de primitivos: `[1,2,2,3,3]|unique` retorna `[1,2,3]`.
- Para arrays de objetos: `[{"a":1},{"b":2},{"a":1}]|unique` retorna `[{"a":1},{"b":2}]`.
- Para objetos, remove propriedades com valores duplicados, mantendo a chave da última ocorrência.
- Para strings, retorna a entrada inalterada.

### `where`

Mantém os itens do array cuja propriedade corresponde a um valor. O tipo também deve corresponder, então o número `1` não corresponde ao texto `"1"`.

- `[{"title":"One","published":true},{"title":"Two","published":false}]|where:("published", true)` retorna `[{"title":"One","published":true}]`.
- Use um caminho com pontos para propriedades aninhadas, por exemplo, `where:("author.name", "Ada")`.

## YAML

### `yaml`

Formata um valor como YAML. Strings são sempre entre aspas, incluindo strings como `"null"`, `"true"` e `"123"`. Valores nulos, booleanos e números reais permanecem sem aspas.

- Arrays e objetos usam estilo de bloco por padrão. Use `yaml:flow` para coleções inline compactas.
- Use `parse_json` primeiro para serializar texto JSON como dados estruturados em vez de uma string entre aspas.

### `yaml_property`

Formata uma propriedade YAML nomeada, incluindo indentação para arrays e objetos. Strings e valores tipados seguem as mesmas regras do `yaml`.

- `"42.567"|round:2|yaml_property:"price"` retorna `price: 42.57`.
