---
permalink: bases/functions
publish: true
mobile: true
description: Esta página detalha as funções utilizadas no Obsidian Bases para manipular dados de propriedades em filtros e fórmulas.
---
As funções são usadas no [[Introdução ao Bases|Bases]] para manipular dados de [[Propriedades|propriedades]] em [[Vistas#Filtros|filtros]] e [[Fórmulas|fórmulas]]. Consulte a referência de [[Sintaxe de Bases|sintaxe de Bases]] para saber mais sobre como pode utilizar funções.

Para além das funções [[Funções#Global|Globais]], a maioria das funções depende do tipo de valor que pretende modificar:

- [[Funções#Qualquer|Qualquer]]
- [[Funções#Data|Data]]
- [[Funções#String|String]]
- [[Funções#Número|Número]]
- [[Funções#Lista|Lista]]
- [[Funções#Ligação|Ligação]]
- [[Funções#Ficheiro|Ficheiro]]
- [[Funções#Objeto|Objeto]]
- [[Funções#Expressão regular|Expressão regular]]

## Global

As funções globais são utilizadas sem um tipo.

### `escapeHTML()`

`escapeHTML(html: string): string`

- Escapa caracteres especiais numa string para a tornar segura para inclusão em HTML.

### `date()`

`date(date: string): date`

- `date(string): date` analisa a string fornecida e retorna um objeto de data.
- A string `date` deve estar no formato `YYYY-MM-DD HH:mm:ss`.

### `duration()`

`duration(value: string): duration`

- Analisa uma string como uma duração. Consulte a [[Sintaxe de Bases#Aritmética de datas|secção de aritmética de datas]] para o formato da string `value`.
- As durações não precisam de ser explicitamente analisadas ao realizar aritmética de datas (por exemplo, `now() + '1d'`), mas precisam ao realizar aritmética sobre durações (por exemplo, `now() + (duration('1d') * 2)`).
- Ao realizar aritmética de durações com escalares, a duração deve estar à esquerda. Por exemplo `duration('5h') * 2`, em vez de `2 * duration('5h')`.

### `file()`

`file(path: string | file | url): file`

- Retorna um objeto de ficheiro para o ficheiro ou caminho fornecido.
- Exemplo: `file(link("[[filename]]"))` ou `file("path to file")`.

### `html()`

`html(html: string): html`

- Converte uma string num excerto de código que é renderizado como HTML.

### `if()`

`if(condition: any, trueResult: any, falseResult?: any): any`

- `condition` é a condição a ser avaliada.
- `trueResult` é o resultado se a condição for verdadeira.
- `falseResult` é o resultado opcional se a condição for falsa. Se não for fornecido, assume-se como `null`.
- Retorna o `trueResult` se `condition` for verdadeira, ou for um valor truthy, ou `falseResult` caso contrário.
- Exemplo: `if(isModified, "Modified", "Unmodified")`

### `image()`

`image(path: string | file | url): image`

- Retorna um objeto de imagem que renderiza a imagem na vista.
- Exemplo: `image(image-property)` ou `image("https://obsidian.md/images/obsidian-logo-gradient.svg")`

### `icon()`

`icon(name: string): icon`

- Retorna um valor que será renderizado como um ícone numa vista. O nome do ícone deve corresponder a um ícone Lucide suportado.
- Exemplo: `icon("arrow-right")`.

### `link()`

`link(path: string | file, display?: value): Link`

- Analisa uma string `path` e retorna um objeto Link que é renderizado como uma ligação para o caminho fornecido.
- Opcionalmente, forneça o parâmetro `display` para alterar o texto que a ligação apresenta.

### `list()`

`list(element: any): List`

- Se o elemento fornecido for uma lista, retorna-o sem modificação.
- Caso contrário, envolve o `element` fornecido numa lista, criando uma lista com um único elemento.
- Esta função pode ser útil quando uma propriedade contém uma mistura de strings ou listas ao longo do cofre.
- Exemplo: `list("value")` retorna `["value"]`.

### `max()`

`max(value1: number, value2: number...): number`

- Retorna o maior de todos os números fornecidos.

### `min()`

`min(value1: number, value2: number...): number`

- Retorna o menor de todos os números fornecidos.

### `now()`

`now(): date`

- `now()` retorna um objeto de data que representa o momento atual.

### `number()`

`number(input: any): number`

- Tenta retornar o valor fornecido como um número.
- Objetos de data serão retornados como milissegundos desde a época unix.
- Booleanos retornam 1 ou 0.
- Strings serão analisadas como um número e retornam um erro se o resultado for inválido.
- Exemplo, `number("3.4")` retorna `3.4`.

### `duration()`

`duration(value: string): duration`

- Analisa uma string como uma duração. Consulte a [[Sintaxe de Bases#Aritmética de datas|secção de aritmética de datas]] para o formato da string `value`.
- As durações não precisam de ser explicitamente analisadas ao realizar aritmética de datas (por exemplo, `now() + '1d'`), mas precisam ao realizar aritmética sobre durações (por exemplo, `now() + (duration('1d') * 2)`).
- Ao realizar aritmética de durações com escalares, a duração deve estar à esquerda. Por exemplo `duration('5h') * 2`, em vez de `2 * duration('5h')`.

### `today()`

`today(): date`

- `today()` retorna um objeto de data que representa a data atual. A parte da hora é definida como zero.

### `random()`

`random(): number`

- `random()` retorna um número aleatório entre 0 e 1.
- A geração do número é atualizada sempre que uma vista é carregada. Navegar entre vistas altera o número aleatório.

## Qualquer

Funções que pode utilizar com qualquer valor. Isto inclui strings (p. ex. `"hello"`), números (p. ex. `42`), listas (p. ex. `[1,2,3]`), objetos e mais.

### `isTruthy()`

`any.isTruthy(): boolean`

- Retorna o valor convertido para booleano.
- Exemplo: `1.isTruthy()` retorna `true`.

### `isType()`

`any.isType(type: string): boolean`

- Retorna verdadeiro se o valor for do tipo fornecido.
- Exemplo: `"example".isType("string")` e `true.isType("boolean")` ambos retornam verdadeiro.

### `toString()`

`any.toString(): string`

- Retorna a representação em string de qualquer valor.
- Exemplo: `123.toString()` retorna `"123"`.

## Data

Funções que pode utilizar com uma data e hora, como `date("2025-05-27")`. Comparações de datas podem ser feitas utilizando [[Sintaxe de Bases#Aritmética de datas|aritmética de datas]].

### Campos

Os seguintes campos estão disponíveis para datas:

| Campo              | Tipo     | Descrição                     |
| ------------------ | -------- | ----------------------------- |
| `date.year`        | `number` | O ano da data                 |
| `date.month`       | `number` | O mês da data (1–12)         |
| `date.day`         | `number` | O dia do mês                  |
| `date.hour`        | `number` | A hora (0–23)                 |
| `date.minute`      | `number` | O minuto (0–59)               |
| `date.second`      | `number` | O segundo (0–59)              |
| `date.millisecond` | `number` | O milissegundo (0–999)        |

### `date()`

`date.date(): date`

- Retorna um objeto de data com a hora removida.
- Exemplo: `now().date().format("YYYY-MM-DD HH:mm:ss")` retorna uma string como "2025-12-31 00:00:00"

### `format()`

`date.format(format: string): string`

- `format` é a string de formatação (p. ex., `"YYYY-MM-DD"`).
- Retorna a data formatada conforme especificado por uma string de formato Moment.js.
- Exemplo: `date.format("YYYY-MM-DD")` retorna `"2025-05-27"`.

### `time()`

`date.time(): string`

- Retorna a hora.
- Exemplo: `now().time()` retorna uma string como "23:59:59"

### `relative()`

`date.relative(): string`

- Retorna uma comparação legível da data com a data/hora atual.
- Exemplo: `file.mtime.relative()` retorna um valor como `3 days ago`.

### `isEmpty()`

`date.isEmpty(): boolean`

- Retorna falso.

## String

Funções que pode utilizar com uma sequência de caracteres, como `"hello"`.

### Campos

| Campo           | Tipo     | Descrição                              |
| --------------- | -------- | -------------------------------------- |
| `string.length` | `number` | O número de caracteres na string       |

### `contains()`

`string.contains(value: string): boolean`

- `value` é a substring a pesquisar.
- Retorna verdadeiro se a string contiver `value`.
- Exemplo: `"hello".contains("ell")` retorna `true`.

### `containsAll()`

`string.containsAll(...values: string): boolean`

- `values` são uma ou mais substrings a pesquisar.
- Retorna verdadeiro se a string contiver todos os `values`.
- Exemplo: `"hello".containsAll("h", "e")` retorna `true`.

### `containsAny()`

`string.containsAny(...values: string): boolean`

- `values` são uma ou mais substrings a pesquisar.
- Retorna verdadeiro se a string contiver pelo menos um dos `values`.
- Exemplo: `"hello".containsAny("x", "y", "e")` retorna `true`.

### `endsWith()`

`string.endsWith(query: string): boolean`

- `query` é a string a verificar no final.
- Retorna verdadeiro se esta string terminar com `query`.
- Exemplo: `"hello".endsWith("lo")` retorna `true`.

### `isEmpty()`

`string.isEmpty(): boolean`

- Retorna verdadeiro se a string não tiver caracteres, ou não estiver presente.
- Exemplo: `"Hello world".isEmpty()` retorna `false`.
- Exemplo: `"".isEmpty()` retorna `true`.

### `lower()`

`string.lower(): string`

- Retorna a string convertida para minúsculas.

### `replace()`

`string.replace(pattern: string | Regexp, replacement: string): string`

- `pattern` é o valor a pesquisar na string alvo.
- `replacement` é o valor para substituir os padrões encontrados.
- Se `pattern` for uma string, todas as ocorrências do padrão serão substituídas.
- Se `pattern` for uma Regexp, a flag `g` determina se apenas a primeira ou todas as ocorrências são substituídas.
- Exemplo: `""a:b:c:d".replace(/:/, "-")` retorna `"a-b,c,d"`, enquanto `"a:b:c:d".replace(/:/g, "-")` retorna `"a-b-c-d"`.

### `repeat()`

`string.repeat(count: number): string`

- `count` é o número de vezes a repetir a string.
- Exemplo: `"123".repeat(2)` retorna `"123123"`

### `reverse()`

`string.reverse(): string`

- Inverte a string.
- Exemplo: `"hello".reverse()` retorna `"olleh"`.

### `slice()`

`string.slice(start: number, end?: number): string`

- `start` é o índice inicial inclusivo.
- `end` é o índice final exclusivo opcional.
- Retorna uma substring de `start` (inclusivo) até `end` (exclusivo).
- Exemplo: `"hello".slice(1, 4)` retorna `"ell"`.
- Se `end` for omitido, extrai até ao final da string.

### `split()`

`string.split(separator: string | Regexp, n?: number): list`

- `separator` é o delimitador para dividir a string.
- `n` é um número opcional. Se fornecido, o resultado terá os primeiros `n` elementos.
- Retorna uma lista de substrings.
- Exemplo: `"a,b,c,d".split(",", 3)` ou `"a,b,c,d".split(/,/, 3)` retorna `["a", "b", "c"]`.

### `startsWith()`

`string.startsWith(query: string): boolean`

- `query` é a string a verificar no início.
- Retorna verdadeiro se esta string começar com `query`.
- Exemplo: `"hello".startsWith("he")` retorna `true`.

### `title()`

`string.title(): string`

- Converte a string para capitalização de título (primeira letra de cada palavra em maiúscula).
- Exemplo: `"hello world".title()` retorna `"Hello World"`.

### `trim()`

`string.trim(): string`

- Remove espaços em branco de ambas as extremidades da string.
- Exemplo: `"  hi  ".trim()` retorna `"hi"`.

## Número

Funções que pode utilizar com valores numéricos como `42`, `3.14`.

### `abs()`

`number.abs(): number`

- Retorna o valor absoluto do número.
- Exemplo: `(-5).abs()` retorna `5`.

### `ceil()`

`number.ceil(): number`

- Arredonda o número para cima para o inteiro mais próximo.
- Exemplo: `(2.1).ceil()` retorna `3`.

### `floor()`

`number.floor(): number`

- Arredonda o número para baixo para o inteiro mais próximo.
- Exemplo: `(2.9).floor()` retorna `2`.

### `isEmpty()`

`number.isEmpty(): boolean`

- Retorna verdadeiro se o número não estiver presente.
- Exemplo: `5.isEmpty()` retorna `false`.

### `round()`

`number.round(digits: number): number`

- Arredonda o número para o inteiro mais próximo.
- Opcionalmente, forneça um parâmetro `digits` para arredondar para esse número de casas decimais.
- Exemplo: `(2.5).round()` retorna `3`, e `(2.3333).round(2)` retorna `2.33`.

### `toFixed()`

`number.toFixed(precision: number): string`

- `precision` é o número de casas decimais.
- Retorna uma string com o número em notação de ponto fixo.
- Exemplo: `(3.14159).toFixed(2)` retorna `"3.14"`.

## Lista

Funções que pode utilizar com uma lista ordenada de elementos, como `[1, 2, 3]`.

### Campos

| Campo         | Tipo     | Descrição                             |
| ------------- | -------- | ------------------------------------- |
| `list.length` | `number` | O número de elementos na lista        |

### `contains()`

`list.contains(value: any): boolean`

- `value` é o elemento a pesquisar.
- Retorna verdadeiro se a lista contiver `value`.
- Exemplo: `[1,2,3].contains(2)` retorna `true`.

### `containsAll()`

`list.containsAll(...values: any): boolean`

- `values` são um ou mais elementos a pesquisar.
- Retorna verdadeiro se a lista contiver todos os `values`.
- Exemplo: `[1,2,3].containsAll(2,3)` retorna `true`.

### `containsAny()`

`list.containsAny(...values: any): boolean`

- `values` são um ou mais elementos a pesquisar.
- Retorna verdadeiro se a lista contiver pelo menos um dos `values`.
- Exemplo: `[1,2,3].containsAny(3,4)` retorna `true`.

### `filter()`

`list.filter(value: Boolean): list`

- Filtra os elementos desta lista chamando uma função de filtro, que utiliza as variáveis `index` e `value`, e retorna um valor booleano para indicar se o elemento deve ser mantido.
- `value` é o valor de um item na lista.
- `index` é o índice do valor atual.
- Exemplo: `[1,2,3,4].filter(value > 2)` retorna `[3,4]`.

### `flat()`

`list.flat(): list`

- Aplaina listas aninhadas numa única lista.
- Exemplo: `[1,[2,3]].flat()` retorna `[1,2,3]`.

### `isEmpty()`

`list.isEmpty(): boolean`

- Retorna verdadeiro se a lista não tiver elementos.
- Exemplo: `[1,2,3].isEmpty()` retorna `false`.

### `join()`

`list.join(separator: string): string`

- `separator` é a string a inserir entre os elementos.
- Junta todos os elementos da lista numa única string.
- Exemplo: `[1,2,3].join(",")` retorna `"1,2,3"`.

### `map()`

`list.map(value: Any): list`

- Transforma cada elemento desta lista chamando uma função de conversão, que utiliza as variáveis `index` e `value`, e retorna o novo valor a ser colocado na lista.
- `value` é o valor de um item na lista.
- `index` é o índice do valor atual.
- Exemplo: `[1,2,3,4].map(value + 1)` retorna `[2,3,4,5]`.

### `reduce()`

`list.reduce(expression: Any, acc: Any): Any`

- Reduz os elementos desta lista num único valor executando uma expressão para cada elemento. A expressão pode utilizar as variáveis `index`, `value` e `acc` (o acumulador), e deve retornar o próximo valor do acumulador.
- `expression` é avaliada para cada elemento da lista.
- `value` é o valor do item atual na lista.
- `index` é o índice do item atual.
- `acc` é o valor acumulado até ao momento.
- Exemplo (soma): `[1,2,3].reduce(acc + value, 0)` retorna `6`.
- Exemplo (máximo): `values.filter(value.isType("number")).reduce(if(acc == null || value > acc, value, acc), null)` retorna o maior número, ou `null` se não houver nenhum.

### `reverse()`

`list.reverse(): list`

- Inverte a lista no local.
- Exemplo: `[1,2,3].reverse()` retorna `[3,2,1]`.

### `slice()`

`list.slice(start: number, end?: number): list`

- `start` é o índice inicial inclusivo.
- `end` é o índice final exclusivo opcional.
- Retorna uma cópia superficial de uma porção da lista de `start` (inclusivo) até `end` (exclusivo).
- Exemplo: `[1,2,3,4].slice(1,3)` retorna `[2,3]`.
- Se `end` for omitido, extrai até ao final da lista.

### `sort()`

`list.sort(): list`

- Ordena os elementos da lista do menor para o maior.
- Exemplo: `[3, 1, 2].sort()` retorna `[1, 2, 3]`.
- Exemplo: `["c", "a", "b"].sort()` retorna `["a", "b", "c"]`.

### `unique()`

`list.unique(): list`

- Remove elementos duplicados.
- Exemplo: `[1,2,2,3].unique()` retorna `[1,2,3]`.

## Ligação

Funções que pode utilizar numa ligação. As ligações podem ser criadas a partir de um ficheiro (`file.asLink()`) ou de um caminho (`link("path")`).

### `asFile()`

`link.asFile(): file`

- Retorna um objeto de ficheiro se a ligação referir um ficheiro local válido.
- Exemplo: `link("[[filename]]").asFile()`

### `linksTo()`

`link.linksTo(file): boolean`

- Retorna se o ficheiro representado pela `link` tem uma ligação para `file`.

## Ficheiro

Funções que pode utilizar com ficheiros no cofre.

### Campos

Os seguintes campos estão disponíveis para ficheiros:

| Campo             | Tipo     | Descrição                                                  |
| ----------------- | -------- | ---------------------------------------------------------- |
| `file.name`       | `string` | O nome deste ficheiro.                                     |
| `file.basename`   | `string` | O nome deste ficheiro sem a extensão.                      |
| `file.path`       | `string` | O caminho completo para este ficheiro, relativo à raiz do cofre. |
| `file.folder`     | `string` | O caminho completo para a pasta principal.                 |
| `file.ext`        | `string` | A extensão deste ficheiro.                                 |
| `file.size`       | `number` | O tamanho deste ficheiro, em bytes.                        |
| `file.properties` | `object` | As propriedades da nota para este ficheiro.                |
| `file.tags`       | `list`   | As etiquetas deste ficheiro. Inclui etiquetas inline.      |
| `file.links`      | `list`   | As ligações internas dentro deste ficheiro.                |
| `file.ctime`      | `date`   | Marca temporal de quando este ficheiro foi criado.         |
| `file.mtime`      | `date`   | Marca temporal de quando este ficheiro foi modificado pela última vez. |

### `asLink()`

`file.asLink(display?: string): Link`

- `display` texto de apresentação opcional para a ligação.
- Retorna um objeto Link que é renderizado como uma ligação funcional.
- Exemplo: `file.asLink()`

### `hasLink()`

`file.hasLink(otherFile: file | string): boolean`

- `otherFile` é outro objeto de ficheiro ou caminho em string a verificar.
- Retorna verdadeiro se `file` tiver uma ligação para `otherFile`.
- Exemplo: `file.hasLink(otherFile)` retorna `true` se existir uma ligação de `file` para `otherFile`.

### `hasProperty()`

`file.hasProperty(name: string): boolean`

- Retorna verdadeiro se a nota tiver a propriedade de ficheiro indicada.

### `hasTag()`

`file.hasTag(...values: string): boolean`

- `values` são um ou mais nomes de etiquetas.
- Retorna verdadeiro se o ficheiro tiver qualquer uma das etiquetas em `values`.
- Exemplo: `file.hasTag("tag1", "tag2")` retorna `true` se o ficheiro tiver a etiqueta `#tag1` ou `#tag2`. Também inclui quaisquer [[Etiquetas#Etiquetas aninhadas|etiquetas aninhadas]], como `#tag1/a` ou `#tag2/b`.

### `inFolder()`

`file.inFolder(folder: string): boolean`

- `folder` é o nome da pasta a verificar.
- Retorna verdadeiro se o ficheiro estiver na pasta especificada ou numa das suas subpastas.
- Exemplo: `file.inFolder("notes")` retorna `true`.

## Objeto

Funções que pode utilizar com uma coleção de pares chave-valor, como `{"a": 1, "b": 2}`.

### `isEmpty()`

`object.isEmpty(): boolean`

- Retorna verdadeiro se o objeto não tiver propriedades próprias.
- Exemplo: `{}.isEmpty()` retorna `true`.

### `keys()`

`object.keys(): list`

- Retorna uma lista contendo as chaves do objeto.

### `values()`

`object.values(): list`

- Retorna uma lista contendo os valores do objeto.

## Expressão regular

Funções que pode utilizar com um padrão de expressão regular. Exemplo: `/abc/`.

### `matches()`

`regexp.matches(value: string): boolean`

- `value` é a string a testar.
- Retorna verdadeiro se a expressão regular corresponder a `value`.
- Exemplo: `/abc/.matches("abcde")` retorna `true`.
