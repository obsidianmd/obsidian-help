---
permalink: bases/syntax
publish: true
mobile: true
description: Esta página fornece uma introdução à sintaxe de Bases no Obsidian.
---
Quando você [[Criar uma base|cria uma base]] no Obsidian, ela é salva como um arquivo `.base`. Bases são tipicamente editadas usando a interface do aplicativo, mas a sintaxe também pode ser editada manualmente e incorporada em um bloco de código.

A sintaxe do [[Introdução ao Bases|Bases]] define [[Visualizações]], filtros e [[Fórmulas|fórmulas]]. Bases devem ser YAML válido conforme o esquema definido abaixo.

## Exemplo

Aqui está um exemplo de um arquivo base. Vamos detalhar cada seção.

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

Por padrão, uma base inclui todos os arquivos do cofre. Não há `from` ou `source` como em SQL ou Dataview. A seção `filters` permite definir condições para refinar o conjunto de dados.

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
```

Existem duas oportunidades para aplicar filtros:

1. No nível global `filters` (mostrado acima), onde se aplicam a todas as visualizações na base.
2. No nível da `view`, onde se aplicam apenas a uma visualização específica.

Essas duas seções são funcionalmente equivalentes e, ao avaliar para uma visualização, serão concatenadas com um `AND`.

A seção `filters` contém uma única instrução de filtro como string ou um objeto de filtro definido recursivamente. Objetos de filtro podem conter `and`, `or` ou `not`. Essas chaves são uma lista heterogênea de outros objetos de filtro ou instruções de filtro em strings. Uma instrução de filtro é uma linha que avalia como verdadeira ou falsa quando aplicada a uma nota. Pode ser uma das seguintes:

- Uma comparação básica usando operadores aritméticos padrão.
- Uma função. Uma variedade de [[Funções]] estão integradas, e plugins podem adicionar funções adicionais.

A sintaxe e as funções disponíveis para filtros e fórmulas são as mesmas.

### Fórmulas

A seção `formulas` define [[Fórmulas|propriedades de fórmula]] que podem ser exibidas em todas as visualizações no arquivo base.

```yaml
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
```

Propriedades de fórmula suportam operadores aritméticos básicos e uma variedade de [[Funções]] integradas. No futuro, plugins poderão adicionar funções para uso em fórmulas.

Você pode referenciar propriedades de diferentes maneiras, dependendo do tipo:

- **Propriedades da nota** são propriedades definidas no frontmatter da nota. Por exemplo `note.price` ou `note["price"]`.  
  Se nenhum prefixo for especificado, a propriedade é assumida como uma propriedade `note`.
- **Propriedades do arquivo** descrevem o próprio arquivo.  
  Por exemplo `file.size` ou `file.ext`. Você também pode referenciar o objeto file diretamente, por exemplo, `file.hasLink()`.
- **Propriedades de fórmula** são outras fórmulas na base.  
  Exemplo `formula.formatted_price`.

Uma fórmula pode usar valores de outras propriedades de fórmula, desde que não haja referência circular.  

Propriedades de fórmula são sempre armazenadas como strings em YAML, mas seu **tipo de dados de saída** real é determinado pelo tipo dos dados subjacentes e pelo valor de retorno de quaisquer funções utilizadas.

Note que o uso de aspas aninhadas é necessário para incluir literais de texto no campo YAML. Literais de texto devem ser envolvidos em aspas simples ou duplas.

### Propriedades

A seção `properties` permite armazenar informações de configuração sobre cada propriedade. Cabe à visualização individual como usar esses valores de configuração. Por exemplo, em tabelas, o nome de exibição é usado para os cabeçalhos das colunas.

```yaml
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
```

Nomes de exibição não são usados em filtros ou fórmulas.

### Resumos

A seção `summaries` pode ser usada para definir fórmulas de resumo personalizadas. Além de definir fórmulas de resumo aqui, existem várias fórmulas de resumo padrão disponíveis.

```yaml
summaries:
  customAverage: 'values.mean().round(3)'
```

Neste exemplo, a fórmula `customAverage` é igual à padrão `Average`, exceto que o valor é arredondado para um número diferente de casas decimais. Em fórmulas de resumo, a palavra-chave `values` é uma lista contendo todos os valores daquela propriedade em todas as notas no conjunto de resultados. A fórmula de resumo deve retornar um único `Value`.

Note que esta seção `summaries` é diferente da seção `summaries` na configuração da visualização (explicada abaixo), onde fórmulas de resumo são atribuídas a propriedades específicas.

#### Fórmulas de resumo padrão

| Nome      | Tipo de entrada | Descrição                                                     |
| --------- | --------------- | ------------------------------------------------------------- |
| Average   | Número          | A média aritmética de todos os números dos valores de entrada.   |
| Min       | Número          | O menor número dos valores de entrada.                    |
| Max       | Número          | O maior número dos valores de entrada.                     |
| Sum       | Número          | A soma de todos os números na entrada.                          |
| Range     | Número          | A diferença entre `Max` e `Min`.                       |
| Median    | Número          | A mediana de todos os números dos valores de entrada. |
| Stddev    | Número          | O desvio padrão de todos os números dos valores de entrada.  |
| Earliest  | Data            | A data mais antiga dos valores de entrada.                      |
| Latest    | Data            | A data mais recente dos valores de entrada.                        |
| Range     | Data            | A diferença entre `Latest` e `Earliest`.               |
| Checked   | Booleano        | O número de valores `true`.                                  |
| Unchecked | Booleano        | O número de valores `false`.                                 |
| Empty     | Qualquer        | O número de valores na entrada que estão vazios.             |
| Filled    | Qualquer        | O número de valores na entrada que não estão vazios.         |
| Unique    | Qualquer        | O número de valores únicos na entrada.                     |

### Visualizações

A seção `views` define como os dados podem ser renderizados. Cada entrada na lista `views` define uma visualização separada dos mesmos dados, e pode haver quantas visualizações diferentes forem necessárias.

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

- `type` seleciona entre os tipos de visualização integrados e adicionados por plugins.
- `name` é o nome de exibição e pode ser usado para definir a visualização padrão.
- `filters` são exatamente os mesmos descritos acima, mas se aplicam apenas à visualização.
- `groupBy` especifica uma propriedade e direção de ordenação. O valor da propriedade especificada para cada linha é usado para colocar a linha em grupos.
- `summaries` mapeia nomes de propriedades para um resumo nomeado. Resumos realizam uma agregação na propriedade em todas as linhas.

[[Visualizações]] podem adicionar dados adicionais para armazenar qualquer informação necessária para manter o estado ou renderizar adequadamente, porém autores de plugins devem ter cuidado para não usar chaves já em uso pelo plugin Bases nativo. Como exemplo, uma visualização de tabela pode usar isso para limitar o número de linhas ou para selecionar qual coluna é usada para ordenar linhas e em qual direção. Um tipo de visualização diferente, como um mapa, poderia usar isso para mapear qual propriedade na nota corresponde à latitude e longitude e qual propriedade deve ser exibida como título do marcador.

No futuro, a API permitirá que visualizações leiam e escrevam esses valores, permitindo que a visualização construa sua própria interface para configuração.

## Propriedades

Existem três tipos de propriedades usadas em bases:

1. **Propriedades da nota**, armazenadas no frontmatter de arquivos Markdown.
2. **Propriedades do arquivo**, acessíveis para todos os tipos de arquivo.
3. **Propriedades de fórmula**, definidas no próprio arquivo `.base` (veja acima).

### Propriedades da nota

[[Propriedades|Propriedades da nota]] estão disponíveis apenas para arquivos Markdown e são armazenadas no frontmatter YAML de cada nota. Essas propriedades podem ser acessadas usando o formato `note.author` ou simplesmente `author` como abreviação.

### Propriedades do arquivo

Propriedades do arquivo referem-se ao arquivo que está sendo testado ou avaliado no momento. Propriedades do arquivo estão disponíveis para todos os [[Formatos de arquivo aceitos|tipos de arquivo]], incluindo anexos.

Por exemplo, um filtro `file.ext == "md"` será verdadeiro para todos os arquivos Markdown e falso caso contrário.

| Propriedade      | Tipo   | Descrição                                                   |
| ------------- | ------ | ------------------------------------------------------------- |
| `file.backlinks`  | Lista   | Lista de arquivos com links inversos. Nota: Esta propriedade consome muitos recursos. Quando possível, inverta a busca e use `file.links`. Não atualiza automaticamente os resultados quando o cofre é alterado. |
| `file.ctime`  | Data   | Horário de criação                                                  |
| `file.embeds` | Lista   | Lista de todas as incorporações na nota                                |
| `file.ext`    | String | Extensão do arquivo                                                |
| `file.file`   | Arquivo   | Objeto de arquivo, utilizável apenas em funções específicas                |
| `file.folder` | String | Caminho da pasta do arquivo                                       |
| `file.links`  | Lista   | Lista de todos os links internos na nota, incluindo frontmatter |
| `file.mtime`  | Data   | Horário de modificação                                                 |
| `file.name`   | String | Nome do arquivo                                                     |
| `file.path`   | String | Caminho do arquivo                                              |
| `file.properties`   | Objeto | Todas as propriedades do arquivo. Nota: Não atualiza automaticamente os resultados quando o cofre é alterado. |
| `file.size`   | Número | Tamanho do arquivo                                                     |
| `file.tags`   | Lista   | Lista de todas as etiquetas no conteúdo do arquivo e frontmatter          |

### Acessar propriedades com `this`

Use o objeto `this` para acessar propriedades do arquivo. O que `this` referencia depende de onde a base é exibida.

Quando a base é aberta na área de conteúdo principal, `this` aponta para as propriedades do próprio arquivo base. Por exemplo, usar `this.file.folder` retorna o caminho da pasta onde a base está localizada.

Quando a base é incorporada em outro arquivo, `this` aponta para as propriedades do arquivo _incorporador_ (a nota ou Canvas que contém a base). Por exemplo, usar `this.file.name` retorna o nome do arquivo incorporador, não da base.

Quando a base está em uma barra lateral, `this` refere-se ao arquivo ativo na área de conteúdo principal. Isso permite criar consultas baseadas no arquivo ativo. Por exemplo, você pode usar `file.hasLink(this.file)` para replicar o painel de links inversos.

## Operadores

### Operadores aritméticos

Operadores aritméticos realizam operações aritméticas com números. Por exemplo, `radius * (2 * 3.14)`.

| Operador | Descrição    |
| -------- | ------------ |
| `+`      | adição       |
| `-`      | subtração    |
| `*`      | multiplicação|
| `/`      | divisão      |
| `%`      | módulo       |
| `( )`    | parênteses   |

### Aritmética de datas

Datas podem ser modificadas adicionando e subtraindo durações. Unidades de duração aceitam múltiplos formatos:

| Unidade                     | Duração |
| ------------------------ | -------- |
| `y`, `year`, `years`     | ano     |
| `M`, `month`, `months`   | mês    |
| `d`, `day`, `days`       | dia      |
| `w`, `week`, `weeks`     | semana     |
| `h`, `hour`, `hours`     | hora     |
| `m`, `minute`, `minutes` | minuto   |
| `s`, `second`, `seconds` | segundo   |

Para modificar ou deslocar objetos Date, use o operador `+` ou `-` com uma string de duração. Por exemplo, `date + "1M"` adiciona 1 mês à data, enquanto `date - "2h"` subtrai 2 horas da data.

A [[Funções|função]] global `today()` pode ser usada para obter a data atual, e `now()` pode ser usada para obter a data atual com horário.

- `now() + "1 day"` retorna um datetime exatamente 24 horas após o momento da execução.
- `file.mtime > now() - "1 week"` retorna `true` se o arquivo foi modificado na última semana.
- `date("2024-12-01") + "1M" + "4h" + "3m"` retorna um objeto Date representando `2025-01-01 04:03:00`.
- Subtraia duas datas para obter a diferença em milissegundos entre elas, por exemplo, `now() - file.ctime`.
- Para obter a parte da data de um Date com horário, use `datetime.date()`.
- Para formatar um objeto Date, use a função `format()`, por exemplo `datetime.format("YYYY-MM-DD")`.

### Operadores de comparação

Operadores de comparação podem ser usados para comparar números ou objetos Date. Igual e diferente podem ser usados com qualquer tipo de valor, não apenas números e datas.

| Operador | Descrição              |
| -------- | ---------------------- |
| `==`     | igual                  |
| `!=`     | diferente              |
| `>`      | maior que              |
| `<`      | menor que              |
| `>=`     | maior ou igual a       |
| `<=`     | menor ou igual a       |

### Operadores booleanos

Operadores booleanos podem ser usados para combinar ou inverter valores lógicos, resultando em um valor verdadeiro ou falso.

| Operador | Descrição   |
| -------- | ----------- |
| `!`      | não lógico  |
| `&&`     | e lógico    |
| \|\|     | ou lógico   |

## Funções

Veja a [[Funções|lista de funções]] que podem ser usadas em fórmulas e [[Visualizações|filtros]].

## Tipos

Bases possuem um sistema de tipos que é usado por fórmulas e filtros para aplicar funções às propriedades.

### Strings, números e booleanos

Strings, números e booleanos são valores "primitivos" que não requerem uma função para serem criados.

- Strings são envolvidas em aspas simples ou duplas, por exemplo `"message"`.
- Números são escritos como dígitos e podem opcionalmente ser envolvidos em parênteses para clareza. Por exemplo, `1` ou `(2.5)`.
- Booleanos são escritos como `true` ou `false` sem aspas.

### Datas e durações

Datas representam uma data específica, ou uma data e horário, dependendo da função usada para criá-las ou do tipo que foi atribuído à [[Propriedades|propriedade]].

- Para construir uma data, use a função `date`, por exemplo `date("2025-01-01 12:00:00")`
- Para modificar uma data, adicione ou remova uma duração, por exemplo `now() + "1 hour"` ou `today() + "7d"`
- Compare datas usando operadores de comparação (por exemplo, `>` ou `<`) e operadores aritméticos (por exemplo, `(now() + "1d") - now()` retorna `86400000` milissegundos.)
- Para extrair partes de uma data, use os campos disponíveis (`now().hour`), ou uma função de conveniência (`now.time()`).
- Muitos outros [[Funções|campos e funções]] estão disponíveis em objetos de data.

### Objetos e listas

- Transforme um único elemento em uma lista usando a função `list()`. Isso é especialmente útil para propriedades que podem conter uma mistura de listas ou valores únicos.
- Acesse elementos de lista usando colchetes e um índice baseado em 0. Por exemplo, `property[0]` retorna o primeiro elemento da lista.
- Acesse elementos de objeto usando colchetes e o nome do elemento ou notação de ponto. Por exemplo, `property.subprop` ou `property["subprop"]`.

### Arquivos e links

[[Vincular notas|Wikilinks]] em [[Propriedades|propriedades de frontmatter]] são automaticamente reconhecidos como objetos Link. Links serão renderizados como um link clicável na [[Visualizações|visualização]].

- Para construir um link, use a [[Funções|função]] global `link`, por exemplo `link("filename")` ou `link("https://obsidian.md")`.
- Você pode criar um link a partir de qualquer string, por exemplo, `link(file.ctime.date().toString())`.
- Para definir o texto de exibição, passe uma string opcional ou ícone como segundo parâmetro, por exemplo `link("filename", "display")` ou `link("filename", icon("plus"))`.

Um objeto File pode ser transformado em um link usando `file.asLink()` com um texto de exibição opcional.

Links podem ser comparados com `==` e `!=`. Eles são equivalentes desde que apontem para o mesmo arquivo, ou se o arquivo não existir quando consultado, o texto do link deve ser idêntico.

Links podem ser comparados com arquivos como `file` ou `this`. Eles serão iguais se o link resolver para o arquivo. Por exemplo, `author == this`.

Links também podem ser verificados em listas com contains, por exemplo, `authors.contains(this)`.
