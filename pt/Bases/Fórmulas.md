---
permalink: formulas
description: 'As fórmulas permitem criar propriedades calculadas utilizando dados de outras propriedades. Pode realizar cálculos, manipular texto, trabalhar com datas e muito mais.'
---
As fórmulas permitem-lhe criar propriedades calculadas no [[Introdução ao Bases|Bases]] utilizando dados de outras [[Propriedades|propriedades]]. Pode realizar cálculos, manipular texto, trabalhar com datas e muito mais.

## O que as fórmulas podem fazer

As fórmulas podem ajudá-lo a:

- **Calcular valores**, somar preços, computar totais ou realizar operações matemáticas.
- **Manipular texto**, combinar cadeias de caracteres, alterar capitalização ou extrair subcadeias.
- **Trabalhar com datas**, calcular diferenças temporais, formatar datas ou determinar prazos.
- **Aplicar lógica**, usar instruções condicionais para apresentar valores diferentes.
- **Processar listas**, filtrar, ordenar, mapear ou agregar dados de listas.

## Criar uma propriedade de fórmula

Para criar uma propriedade de fórmula:

1. Na sua base, clique em **Propriedades** na barra de ferramentas.
2. Clique em **Adicionar fórmula** na parte inferior do menu.
3. Introduza um nome para a sua propriedade de fórmula.
4. Escreva a sua fórmula no campo **Fórmula**.
5. Feche o diálogo.

O editor de fórmulas irá preencher automaticamente nomes de [[Funções|funções]] e propriedades à medida que escreve para validar a sintaxe da sua fórmula. Uma marca de verificação verde aparece quando a sua fórmula é válida.

Uma vez criada, pode usar uma propriedade de fórmula como qualquer outra propriedade na sua base. Adicione-a a [[Vistas|vistas]], use-a em filtros, ordene por ela e muito mais.

## Escrever uma fórmula

No editor de fórmulas, escreva uma expressão usando propriedades, operadores e funções.

### Referenciar propriedades

Pode referenciar diferentes tipos de propriedades nas suas fórmulas:

- **Propriedades da nota** — Propriedades dos [[Propriedades|metadados iniciais]] de uma nota.
- **Propriedades do ficheiro** — Propriedades incorporadas como `file.name`, `file.size` ou `file.mtime`.
- **Propriedades de fórmula** — Outras fórmulas usando `formula.nome_da_formula`.

**Exemplos:**

- `price * quantity` — multiplicar duas propriedades da nota
- `file.name + " - " + description` — combinar o nome do ficheiro com uma propriedade da nota
- `formula.price_per_unit * 1.1` — usar outra propriedade de fórmula

### Usar operadores

**Operadores aritméticos** realizam operações matemáticas com números:

- `price + tax` — somar
- `price - discount` — subtrair
- `price * quantity` — multiplicar
- `price / quantity` — dividir
- `(part / whole) * 100` — usar parênteses para a ordem das operações

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

Saber mais em [[Sintaxe de Bases#Operadores|Sintaxe de Bases]].

### Usar funções

As funções realizam operações sobre valores. As funções disponíveis dependem do tipo de valor com que está a trabalhar. Consulte a lista completa de [[Funções]].

**Categorias comuns de funções:**

- **Funções globais** — `if()`, `now()`, `date()`, `link()`, `max()`, `min()`
- **Funções de cadeia de caracteres** — `contains()`, `replace()`, `split()`, `lower()`, `title()`
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

### Apresentar estado de atraso

Mostrar "Atrasado" se a data de entrega já passou e o estado não é "Done":

```js
if(due_date < now() && status != "Done", "Overdue", "")
```

### Formatar moeda

Apresentar um preço com 2 casas decimais e símbolo de moeda:

```js
if(price, "$" + price.toFixed(2), "")
```

### Contar itens de lista

Contar o número de itens numa propriedade de lista:

```js
tasks.length
```

### Calcular pontuação de prioridade

Combinar múltiplos fatores numa pontuação de prioridade:

```js
(impact * urgency) / effort
```

### Combinar campos de texto

Criar um nome completo a partir do primeiro e último nome:

```js
first_name + " " + last_name
```

### Calcular custo total

Multiplicar o custo mensal pelo número de meses de posse:

```js
monthlyUses * formula.Owned.round()
```

## Tipos de dados

As fórmulas trabalham com diferentes tipos de dados:

- **Cadeias de caracteres** — Texto entre aspas: `"hello"` ou `'world'`
- **Números** — Valores numéricos: `42`, `3.14`, `(2 + 2)`
- **Booleanos** — Verdadeiro ou falso: `true`, `false`
- **Datas** — Criadas com `date()`, `today()` ou `now()`
- **Listas** — Coleções de valores: `[1, 2, 3]`
- **Objetos** — Pares chave-valor: `{"name": "value"}`

O tipo de saída de uma fórmula é determinado pelos dados e funções utilizados.

## Referenciar outras fórmulas

As fórmulas podem referenciar outras fórmulas, criando cálculos derivados. Por exemplo, se tiver uma fórmula chamada `price_per_unit`:

```js
price / quantity
```

Pode referenciá-la noutra fórmula:

```js
formula.price_per_unit * 1.1
```

> [!warning] Evite referências circulares
> Uma fórmula não pode referenciar-se a si própria direta ou indiretamente através de outras fórmulas.
