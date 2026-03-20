---
permalink: formulas
description: Fórmulas permitem criar propriedades calculadas usando dados de outras propriedades. Você pode realizar cálculos, manipular texto, trabalhar com datas e mais.
---
Fórmulas permitem criar propriedades calculadas no [[Introdução ao Bases|Bases]] usando dados de outras [[Propriedades|propriedades]]. Você pode realizar cálculos, manipular texto, trabalhar com datas e mais.

## O que as fórmulas podem fazer

Fórmulas podem ajudar você a:

- **Calcular valores**, somar preços, computar totais ou realizar operações matemáticas.
- **Manipular texto**, combinar strings, alterar capitalização ou extrair substrings.
- **Trabalhar com datas**, calcular diferenças de tempo, formatar datas ou determinar prazos.
- **Aplicar lógica**, usar instruções condicionais para exibir diferentes valores.
- **Processar listas**, filtrar, ordenar, mapear ou agregar dados de listas.

## Criar uma propriedade de fórmula

Para criar uma propriedade de fórmula:

1. Na sua base, clique em **Propriedades** na barra de ferramentas móvel.
2. Clique em **Adicionar fórmula** na parte inferior do menu.
3. Insira um nome para sua propriedade de fórmula.
4. Digite sua fórmula no campo **Fórmula**.
5. Feche o diálogo.

O editor de fórmulas completará automaticamente nomes de [[Funções|funções]] e propriedades enquanto você digita para validar a sintaxe da sua fórmula. Uma marca de verificação verde aparece quando sua fórmula é válida.

Uma vez criada, você pode usar uma propriedade de fórmula como qualquer outra propriedade na sua base. Adicione-a a [[Visualizações|visualizações]], use-a em filtros, ordene por ela e mais.

## Escrever uma fórmula

No editor de fórmulas, digite uma expressão usando propriedades, operadores e funções.

### Referenciar propriedades

Você pode referenciar diferentes tipos de propriedades nas suas fórmulas:

- **Propriedades da nota** — Propriedades do [[Propriedades|frontmatter]] de uma nota.
- **Propriedades dos arquivos** — Propriedades integradas como `file.name`, `file.size` ou `file.mtime`.
- **Propriedades de fórmula** — Outras fórmulas usando `formula.nome_da_formula`.

**Exemplos:**

- `price * quantity` — multiplicar duas propriedades da nota
- `file.name + " - " + description` — combinar nome do arquivo com uma propriedade da nota
- `formula.price_per_unit * 1.1` — usar outra propriedade de fórmula

### Usar operadores

**Operadores aritméticos** realizam cálculos com números:

- `price + tax` — adição
- `price - discount` — subtração
- `price * quantity` — multiplicação
- `price / quantity` — divisão
- `(part / whole) * 100` — usar parênteses para ordem das operações

**Operadores de comparação** comparam valores:

- `price > 100` — maior que
- `age < 18` — menor que
- `status == "Done"` — igual a
- `status != "Done"` — diferente de
- `file.mtime > now() - '7d'` — comparar datas

**Operadores booleanos** combinam condições lógicas:

- `!completed` — não
- `price > 0 && quantity > 0` — e
- `urgent || important` — ou

Saiba mais em [[Sintaxe de Bases#Operadores|Sintaxe de Bases]].

### Usar funções

Funções realizam operações em valores. As funções disponíveis dependem do tipo de valor com o qual você está trabalhando. Veja a lista completa de [[Funções]].

**Categorias comuns de funções:**

- **Funções globais** — `if()`, `now()`, `date()`, `link()`, `max()`, `min()`
- **Funções de string** — `contains()`, `replace()`, `split()`, `lower()`, `title()`
- **Funções numéricas** — `round()`, `ceil()`, `floor()`, `abs()`, `toFixed()`
- **Funções de data** — `format()`, `relative()`, `date()`, `time()`
- **Funções de lista** — `filter()`, `map()`, `sort()`, `join()`, `unique()`

**Exemplos:**

- `if(price, "$" + price.toFixed(2), "")` para definir uma condicional com formatação numérica.
- `file.name.lower()` para converter para minúsculas.
- `tags.contains("urgent")` para verificar se a lista de etiquetas contém um valor.
- `due_date.format("YYYY-MM-DD")` para formatar uma data.

## Exemplos de fórmulas

### Calcular um prazo

Definir a data de entrega de um projeto como 2 semanas após a data de início:

```js
start_date + "2w"
```

### Exibir status de atraso

Mostrar "Atrasado" se a data de entrega já passou e o status não é "Feito":

```js
if(due_date < now() && status != "Done", "Overdue", "")
```

### Formatar moeda

Exibir um preço com 2 casas decimais e símbolo de moeda:

```js
if(price, "$" + price.toFixed(2), "")
```

### Contar itens de lista

Contar o número de itens em uma propriedade de lista:

```js
tasks.length
```

### Calcular pontuação de prioridade

Combinar múltiplos fatores em uma pontuação de prioridade:

```js
(impact * urgency) / effort
```

### Combinar campos de texto

Criar um nome completo a partir do primeiro e último nome:

```js
first_name + " " + last_name
```

### Calcular custo total

Multiplicar o custo mensal pelo número de meses possuídos:

```js
monthlyUses * formula.Owned.round()
```

## Tipos de dados

Fórmulas trabalham com diferentes tipos de dados:

- **Strings** — Texto entre aspas: `"hello"` ou `'world'`
- **Números** — Valores numéricos: `42`, `3.14`, `(2 + 2)`
- **Booleanos** — Verdadeiro ou falso: `true`, `false`
- **Datas** — Criadas com `date()`, `today()` ou `now()`
- **Listas** — Coleções de valores: `[1, 2, 3]`
- **Objetos** — Pares de chave-valor: `{"name": "value"}`

O tipo de saída de uma fórmula é determinado pelos dados e funções utilizados.

## Referenciar outras fórmulas

Fórmulas podem referenciar outras fórmulas, criando cálculos derivados. Por exemplo, se você tem uma fórmula chamada `price_per_unit`:

```js
price / quantity
```

Você pode referenciá-la em outra fórmula:

```js
formula.price_per_unit * 1.1
```

> [!warning] Evite referências circulares
> Uma fórmula não pode referenciar a si mesma direta ou indiretamente através de outras fórmulas.
