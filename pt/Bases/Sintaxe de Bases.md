---
permalink: bases/syntax
publish: true
mobile: true
description: Esta página fornece uma introdução à sintaxe do Bases no Obsidian.
---
Quando [[Criar uma base|cria uma base]] no Obsidian, ela é guardada como um ficheiro `.base`. As bases são normalmente editadas através da interface da aplicação, mas a sintaxe também pode ser editada manualmente e incorporada num bloco de código.

A sintaxe do [[Introdução ao Bases|Bases]] define [[Vistas]], filtros e [[Fórmulas|fórmulas]]. As bases devem ser YAML válido, conforme o esquema definido abaixo.

## Exemplo

Aqui está um exemplo de um ficheiro base. Vamos percorrer cada secção em detalhe.

```yaml
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
summaries:
  customAverage: 'values.mean().round(3)'
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

### Filtros

Por predefinição, uma base inclui todos os ficheiros no cofre. Não existe `from` ou `source` como em SQL ou Dataview. A secção `filters` permite definir condições para restringir o conjunto de dados.

```yaml
# Filtro simples:
filters:
  and:
    - file.hasTag("tag")

# Filtro complexo:
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
```

Existem duas oportunidades para aplicar filtros:

1. Ao nível global de `filters` (mostrado acima), onde se aplicam a todas as vistas na base.
2. Ao nível da `view`, onde se aplicam apenas a uma vista específica.

Estas duas secções são funcionalmente equivalentes e, ao avaliar para uma vista, serão concatenadas com um `AND`.

A secção `filters` contém uma única instrução de filtro como string, ou um objeto de filtro definido recursivamente. Os objetos de filtro podem conter um de `and`, `or` ou `not`. Estas chaves são uma lista heterogénea de outros objetos de filtro ou instruções de filtro em strings. Uma instrução de filtro é uma linha que é avaliada como verdadeira ou falsa quando aplicada a uma nota. Pode ser uma das seguintes:

- Uma comparação básica usando operadores aritméticos padrão.
- Uma função. Várias [[Funções]] estão incorporadas, e plugins podem adicionar funções adicionais.

A sintaxe e as funções disponíveis para filtros e fórmulas são as mesmas.

### Fórmulas

A secção `formulas` define [[Fórmulas|propriedades de fórmula]] que podem ser apresentadas em todas as vistas no ficheiro base.

```yaml
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
```

As propriedades de fórmula suportam operadores aritméticos básicos e uma variedade de [[Funções]] incorporadas. No futuro, os plugins poderão adicionar funções para uso em fórmulas.

Pode referenciar propriedades de diferentes formas, dependendo do seu tipo:

- **Propriedades de nota** são propriedades definidas nos metadados iniciais da nota. Por exemplo `note.price` ou `note["price"]`.  
  Se nenhum prefixo for especificado, assume-se que a propriedade é do tipo `note`.
- **Propriedades de ficheiro** descrevem o próprio ficheiro.  
  Por exemplo `file.size` ou `file.ext`. Também pode referenciar o objeto de ficheiro diretamente, por exemplo, `file.hasLink()`.
- **Propriedades de fórmula** são outras fórmulas na base.  
  Exemplo: `formula.formatted_price`.

Uma fórmula pode usar valores de outras propriedades de fórmula, desde que não haja referência circular.  

As propriedades de fórmula são sempre armazenadas como strings em YAML, mas o seu **tipo de dados de saída** real é determinado pelo tipo dos dados subjacentes e pelo valor de retorno de quaisquer funções utilizadas.

Note que o uso de aspas aninhadas é necessário para incluir literais de texto no campo YAML. Os literais de texto devem ser envolvidos em aspas simples ou duplas.

### Propriedades

A secção `properties` permite armazenar informações de configuração sobre cada propriedade. Cabe a cada vista individual decidir como utilizar estes valores de configuração. Por exemplo, nas tabelas, o nome a apresentar é usado para os cabeçalhos das colunas.

```yaml
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
```

Os nomes a apresentar não são utilizados em filtros ou fórmulas.

### Resumos

A secção `summaries` pode ser usada para definir fórmulas de resumo personalizadas. Para além de definir fórmulas de resumo aqui, existem várias fórmulas de resumo predefinidas disponíveis.

```yaml
summaries:
  customAverage: 'values.mean().round(3)'
```

Neste exemplo, a fórmula `customAverage` é igual à predefinida `Average`, exceto que o valor é arredondado para um número diferente de casas decimais. Nas fórmulas de resumo, a palavra-chave `values` é uma lista que contém todos os valores dessa propriedade em todas as notas no conjunto de resultados. A fórmula de resumo deve devolver um único `Value`.

Note que esta secção `summaries` é diferente da secção `summaries` na configuração da vista (explicada abaixo), onde as fórmulas de resumo são atribuídas a propriedades específicas.

#### Fórmulas de resumo predefinidas

| Nome      | Tipo de entrada | Descrição                                                     |
| --------- | --------------- | ------------------------------------------------------------- |
| Average   | Número          | A média matemática de todos os números dos valores de entrada.   |
| Min       | Número          | O menor número dos valores de entrada.                    |
| Max       | Número          | O maior número dos valores de entrada.                     |
| Sum       | Número          | A soma de todos os números na entrada.                          |
| Range     | Número          | A diferença entre `Max` e `Min`.                       |
| Median    | Número          | A mediana matemática de todos os números dos valores de entrada. |
| Stddev    | Número          | O desvio padrão de todos os números dos valores de entrada.  |
| Earliest  | Data            | A data mais antiga dos valores de entrada.                      |
| Latest    | Data            | A data mais recente dos valores de entrada.                        |
| Range     | Data            | A diferença entre `Latest` e `Earliest`.               |
| Checked   | Booleano        | O número de valores `true`.                                  |
| Unchecked | Booleano        | O número de valores `false`.                                 |
| Empty     | Qualquer        | O número de valores na entrada que estão vazios.             |
| Filled    | Qualquer        | O número de valores na entrada que não estão vazios.         |
| Unique    | Qualquer        | O número de valores únicos na entrada.                     |

### Vistas

A secção `views` define como os dados podem ser apresentados. Cada entrada na lista `views` define uma vista separada dos mesmos dados, e podem existir tantas vistas diferentes quanto necessário.

```yaml
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

- `type` seleciona entre os tipos de vista incorporados e adicionados por plugins.
- `name` é o nome a apresentar, e pode ser usado para definir a vista predefinida.
- `filters` são exatamente os mesmos descritos acima, mas aplicam-se apenas à vista.
- `groupBy` especifica uma propriedade e direção de ordenação. O valor da propriedade especificada para cada linha é usado para colocar a linha em grupos.
- `summaries` mapeia nomes de propriedades para um resumo nomeado. Os resumos realizam uma agregação na propriedade ao longo de todas as linhas.

As [[Vistas]] podem adicionar dados adicionais para armazenar qualquer informação necessária para manter o estado ou apresentar corretamente, no entanto os autores de plugins devem ter cuidado para não usar chaves já em uso pelo plugin principal Bases. Como exemplo, uma vista de tabela pode usar isto para limitar o número de linhas ou para selecionar qual coluna é usada para ordenar linhas e em que direção. Um tipo de vista diferente, como um mapa, pode usar isto para mapear qual propriedade na nota corresponde à latitude e longitude e qual propriedade deve ser apresentada como título do marcador.

No futuro, a API permitirá que as vistas leiam e escrevam estes valores, permitindo que a vista construa a sua própria interface de configuração.

## Propriedades

Existem três tipos de propriedades usadas em bases:

1. **Propriedades de nota**, armazenadas nos metadados iniciais de ficheiros Markdown.
2. **Propriedades de ficheiro**, acessíveis para todos os tipos de ficheiro.
3. **Propriedades de fórmula**, definidas no próprio ficheiro `.base` (ver acima).

### Propriedades de nota

As [[Propriedades|propriedades de nota]] estão disponíveis apenas para ficheiros Markdown e são armazenadas nos metadados iniciais YAML de cada nota. Estas propriedades podem ser acedidas usando o formato `note.author` ou simplesmente `author` como abreviatura.

### Propriedades de ficheiro

As propriedades de ficheiro referem-se ao ficheiro que está a ser testado ou avaliado. As propriedades de ficheiro estão disponíveis para todos os [[Formatos de ficheiro aceites|tipos de ficheiro]], incluindo anexos.

Por exemplo, um filtro `file.ext == "md"` será verdadeiro para todos os ficheiros Markdown e falso caso contrário.

| Propriedade      | Tipo   | Descrição                                                   |
| ------------- | ------ | ------------------------------------------------------------- |
| `file.backlinks`  | Lista   | Lista de ficheiros com links inversos. Nota: Esta propriedade tem um impacto elevado no desempenho. Quando possível, inverta a pesquisa e use `file.links`. Não atualiza automaticamente os resultados quando o cofre é alterado. |
| `file.ctime`  | Data   | Hora de criação                                                  |
| `file.embeds` | Lista   | Lista de todas as incorporações na nota                                |
| `file.ext`    | String | Extensão do ficheiro                                                |
| `file.file`   | Ficheiro   | Objeto de ficheiro, utilizável apenas em funções específicas                |
| `file.folder` | String | Caminho da pasta do ficheiro                                       |
| `file.links`  | Lista   | Lista de todas as ligações internas na nota, incluindo metadados iniciais |
| `file.mtime`  | Data   | Hora de modificação                                                 |
| `file.name`   | String | Nome do ficheiro                                                     |
| `file.path`   | String | Caminho do ficheiro                                              |
| `file.properties`   | Objeto | Todas as propriedades do ficheiro. Nota: Não atualiza automaticamente os resultados quando o cofre é alterado. |
| `file.size`   | Número | Tamanho do ficheiro                                                     |
| `file.tags`   | Lista   | Lista de todas as etiquetas no conteúdo do ficheiro e nos metadados iniciais          |

### Aceder a propriedades com `this`

Use o objeto `this` para aceder às propriedades do ficheiro. A que `this` se refere depende de onde a base é apresentada.

Quando a base é aberta na área de conteúdo principal, `this` aponta para as propriedades do próprio ficheiro base. Por exemplo, usar `this.file.folder` devolve o caminho da pasta onde a base está localizada.

Quando a base é incorporada noutro ficheiro, `this` aponta para as propriedades do ficheiro que _incorpora_ (a nota ou Canvas que contém a base). Por exemplo, usar `this.file.name` devolve o nome do ficheiro que incorpora, não o da base.

Quando a base está numa barra lateral, `this` refere-se ao ficheiro ativo na área de conteúdo principal. Isto permite criar consultas baseadas no ficheiro ativo. Por exemplo, pode usar `file.hasLink(this.file)` para replicar o painel de links inversos.

## Operadores

### Operadores aritméticos

Os operadores aritméticos realizam operações aritméticas em números. Por exemplo, `radius * (2 * 3.14)`.

| Operador | Descrição   |
| -------- | ----------- |
| `+`      | mais        |
| `-`      | menos       |
| `*`      | multiplicar |
| `/`      | dividir     |
| `%`      | módulo      |
| `( )`    | parêntesis  |

### Aritmética de datas

As datas podem ser modificadas adicionando e subtraindo durações. As unidades de duração aceitam múltiplos formatos:

| Unidade                  | Duração  |
| ------------------------ | -------- |
| `y`, `year`, `years`     | ano      |
| `M`, `month`, `months`   | mês      |
| `d`, `day`, `days`       | dia      |
| `w`, `week`, `weeks`     | semana   |
| `h`, `hour`, `hours`     | hora     |
| `m`, `minute`, `minutes` | minuto   |
| `s`, `second`, `seconds` | segundo  |

Para modificar ou deslocar objetos Date, use o operador `+` ou `-` com uma string de duração. Por exemplo, `date + "1M"` adiciona 1 mês à data, enquanto `date - "2h"` subtrai 2 horas à data.

A [[Funções|função]] global `today()` pode ser usada para obter a data atual, e `now()` pode ser usada para obter a data atual com hora.

- `now() + "1 day"` devolve uma data e hora exatamente 24 horas a partir do momento da execução.
- `file.mtime > now() - "1 week"` devolve `true` se o ficheiro foi modificado na última semana.
- `date("2024-12-01") + "1M" + "4h" + "3m"` devolve um objeto Date representando `2025-01-01 04:03:00`.
- Subtraia duas datas para obter a diferença em milissegundos entre ambas, por exemplo, `now() - file.ctime`.
- Para obter a parte da data de um Date com hora, use `datetime.date()`.
- Para formatar um objeto Date, use a função `format()`, por exemplo `datetime.format("YYYY-MM-DD")`.

### Operadores de comparação

Os operadores de comparação podem ser usados para comparar números ou objetos Date. Igual e diferente podem ser usados com qualquer tipo de valor, não apenas números e datas.

| Operador | Descrição              |
| -------- | ---------------------- |
| `==`     | igual                  |
| `!=`     | diferente              |
| `>`      | maior que              |
| `<`      | menor que              |
| `>=`     | maior ou igual a       |
| `<=`     | menor ou igual a       |

### Operadores booleanos

Os operadores booleanos podem ser usados para combinar ou inverter valores lógicos, resultando num valor verdadeiro ou falso.

| Operador | Descrição   |
| -------- | ----------- |
| `!`      | não lógico  |
| `&&`     | e lógico    |
| \|\|     | ou lógico   |

## Funções

Consulte a [[Funções|lista de funções]] que podem ser usadas em fórmulas e [[Vistas|filtros]].

## Tipos

O Bases tem um sistema de tipos que é usado por fórmulas e filtros para aplicar funções a propriedades.

### Strings, números e booleanos

Strings, números e booleanos são valores "primitivos" que não requerem uma função para serem criados.

- As strings são envolvidas em aspas simples ou duplas, por exemplo `"message"`.
- Os números são escritos como dígitos e podem opcionalmente ser envolvidos em parêntesis para clareza. Por exemplo, `1` ou `(2.5)`.
- Os booleanos são escritos como `true` ou `false` sem aspas.

### Datas e durações

As datas representam uma data específica, ou uma data e hora, dependendo da função usada para as criar ou do tipo que foi atribuído à [[Propriedades|propriedade]].

- Para construir uma data, use a função `date`, por exemplo `date("2025-01-01 12:00:00")`
- Para modificar uma data, adicione ou remova uma duração, por exemplo `now() + "1 hour"` ou `today() + "7d"`
- Compare datas usando operadores de comparação (por exemplo, `>` ou `<`) e operadores aritméticos (por exemplo, `(now() + "1d") - now()` devolve `86400000` milissegundos.)
- Para extrair partes de uma data, use os campos disponíveis (`now().hour`) ou uma função de conveniência (`now.time()`).
- Muitos outros [[Funções|campos e funções]] estão disponíveis em objetos de data.

### Objetos e listas

- Transforme um único elemento numa lista usando a função `list()`. Isto é especialmente útil para propriedades que podem conter uma mistura de listas ou valores únicos.
- Aceda a elementos da lista usando parêntesis retos e um índice baseado em 0. Por exemplo, `property[0]` devolve o primeiro elemento da lista.
- Aceda a elementos de objetos usando parêntesis retos e o nome do elemento ou notação de ponto. Por exemplo, `property.subprop` ou `property["subprop"]`.

### Ficheiros e ligações

Os [[Ligar notas|links wiki]] nas [[Propriedades|propriedades de metadados iniciais]] são automaticamente reconhecidos como objetos Link. As ligações serão apresentadas como uma ligação clicável na [[Vistas|vista]].

- Para construir uma ligação, use a [[Funções|função]] global `link`, por exemplo `link("filename")` ou `link("https://obsidian.md")`.
- Pode criar uma ligação a partir de qualquer string, por exemplo, `link(file.ctime.date().toString())`.
- Para definir o texto de apresentação, passe uma string opcional ou ícone como segundo parâmetro, por exemplo `link("filename", "display")` ou `link("filename", icon("plus"))`.

Um objeto File pode ser transformado numa ligação usando `file.asLink()` com um texto de apresentação opcional.

As ligações podem ser comparadas com `==` e `!=`. São equivalentes desde que apontem para o mesmo ficheiro, ou se o ficheiro não existir quando consultado, o texto da ligação deve ser idêntico.

As ligações podem ser comparadas com ficheiros como `file` ou `this`. Serão iguais se a ligação resolver para o ficheiro. Por exemplo, `author == this`.

As ligações também podem ser verificadas em listas com contains, por exemplo, `authors.contains(this)`.
