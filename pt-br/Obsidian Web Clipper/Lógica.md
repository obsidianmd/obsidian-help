---
permalink: web-clipper/logic
description: 'Use condicionais, loops e atribuição de variáveis em modelos do Web Clipper.'
---
O [[Introdução ao Obsidian Web Clipper|Web Clipper]] suporta lógica de modelos para condicionais, loops e atribuição de variáveis. Essa sintaxe é inspirada nas linguagens de modelagem [Twig](https://twig.symfony.com/) e [Liquid](https://shopify.github.io/liquid/).

> [!warning] Requer a versão mais recente
> Os recursos de lógica requerem o Obsidian Web Clipper 1.0.0, que ainda não foi aprovado em todas as lojas de extensões.

## Condicionais

Use `{% if %}` para incluir conteúdo condicionalmente com base em variáveis ou expressões.

```twig
{% if author %}
Author: {{author}}
{% endif %}
```

Use `{% else %}` para fornecer conteúdo alternativo, e `{% elseif %}` para encadear múltiplas condições:

```twig
{% if status == "published" %}
Live article
{% elseif status == "draft" %}
Draft article
{% else %}
Unknown status
{% endif %}
```

### Operadores de comparação

Os seguintes operadores de comparação são suportados:

| Operador | Descrição |
|----------|-----------|
| `==` | Igual a |
| `!=` | Diferente de |
| `>` | Maior que |
| `<` | Menor que |
| `>=` | Maior ou igual a |
| `<=` | Menor ou igual a |
| `contains` | Verifica se uma string contém uma substring, ou se um array contém um valor |

Exemplos:
- `{% if title == "Home" %}` — igualdade de strings
- `{% if price >= 100 %}` — comparação numérica
- `{% if title contains "Review" %}` — verificação de substring
- `{% if tags contains "important" %}` — pertencimento a array

### Operadores lógicos

Combine condições usando operadores lógicos:

| Operador | Alternativa | Descrição                              |
| -------- | ----------- | -------------------------------------- |
| `and`    | `&&`        | Ambas as condições devem ser verdadeiras |
| `or`     | \|\|        | Pelo menos uma condição deve ser verdadeira |
| `not`    | `!`         | Nega uma condição                      |

Exemplos:
- `{% if author and published %}` — ambos devem existir
- `{% if draft or archived %}` — qualquer uma das condições
- `{% if not hidden %}` — negação
- `{% if (premium or featured) and published %}` — condições agrupadas

### Avaliação de veracidade

Quando uma variável é usada sem um operador de comparação, ela é avaliada quanto à sua "veracidade":

- `false`, `null`, `undefined`, string vazia `""` e `0` são considerados **falsos**.
- Arrays vazios `[]` são considerados **falsos**.
- Todo o resto é considerado **verdadeiro**.

```twig
{% if content %}
Has content
{% endif %}
```

## Atribuir uma variável

Use `{% set %}` para criar ou modificar variáveis dentro do seu modelo:

```twig
{% set slug = title|lower|replace:" ":"-" %}
File: {{slug}}.md
```

Variáveis podem ser definidas como:
- Outras variáveis: `{% set name = author %}`
- Literais: `{% set count = 5 %}` ou `{% set label = "Draft" %}`
- Expressões com filtros: `{% set excerpt = content|truncate:100 %}`
- Resultados de seletores: `{% set comments = selector:.comment %}`

Variáveis definidas com `{% set %}` podem ser usadas na lógica subsequente do modelo e na saída `{{variable}}`.

## Valores alternativos

Use o operador `??` para fornecer valores alternativos quando uma variável está vazia ou indefinida:

```twig
{{title ?? "Untitled"}}
```

Se `title` estiver vazio, indefinido ou falso, o valor alternativo `"Untitled"` será usado.

Este é um atalho para a instrução `if` equivalente:

```twig
{% if title %}{{title}}{% else %}Untitled{% endif %}
```

### Encadeando valores alternativos

Você pode encadear múltiplos valores alternativos:

```twig
{{title ?? headline ?? "No title"}}
```

Isso usará `title` se disponível, caso contrário `headline`, caso contrário a string `"No title"`.

### Com filtros

Filtros têm maior precedência que `??`, então os filtros são aplicados antes da verificação do valor alternativo:

```twig
{{title|upper ?? "UNTITLED"}}
```

Isso aplica `upper` a `title` primeiro, depois recorre a `"UNTITLED"` se o resultado estiver vazio. Para aplicar filtros ao valor alternativo, use parênteses ou expressões separadas:

```twig
{{title ?? "Untitled"|lower}}
```

Isso usará `title` se disponível, caso contrário aplicará `lower` ao valor alternativo, resultando em `"untitled"`.

## Loops

Use `{% for %}` para iterar sobre arrays:

```twig
{% for item in schema:author %}
- {{item.name}}
{% endfor %}
```

### Fontes de loop

Você pode iterar sobre:
- Arrays de schema: `{% for item in schema:author %}`
- Resultados de seletores: `{% for comment in selector:.comment %}`
- Variáveis definidas anteriormente: `{% set items = selector:.item %}{% for item in items %}`

### Variáveis de loop

Dentro de um loop, você tem acesso a um objeto `loop` com as seguintes propriedades:

| Variável | Descrição |
|----------|-----------|
| `loop.index` | Iteração atual (indexada a partir de 1) |
| `loop.index0` | Iteração atual (indexada a partir de 0) |
| `loop.first` | `true` se for a primeira iteração |
| `loop.last` | `true` se for a última iteração |
| `loop.length` | Número total de itens |

```twig
{% for tag in tags %}
{{loop.index}}. {{tag}}
{% if loop.last %} (end of list){% endif %}
{% endfor %}
```

Para compatibilidade retroativa, você também pode usar `item_index` (onde `item` é o nome da sua variável iteradora) para obter a posição indexada a partir de 0:

```twig
{% for tag in tags %}
{{tag_index}}. {{tag}}
{% endfor %}
```

### Acessando itens de array por índice

Use notação de colchetes para acessar elementos de array por índice:

```twig
{{items[0]}}
{{items[loop.index0]}}
```

Isso é útil quando você precisa acessar itens de múltiplos arrays em paralelo:

```twig
{% set transcripts = selector:.transcript-text %}
{% set timestamps = selector:.timestamp %}

{% for line in transcripts %}
{{timestamps[loop.index0]}} - {{line}}
{% endfor %}
```

A notação de colchetes também funciona com propriedades de objetos:

```twig
{{user["name"]}}
{{data["my-key"]}}
```

### Loops aninhados

Loops podem ser aninhados para estruturas de dados complexas:

```twig
{% for section in sections %}
## {{section.title}}
{% for item in section.items %}
- {{item}}
{% endfor %}
{% endfor %}
```

## Combinar lógica

Condicionais e loops podem ser combinados:

```twig
{% for item in items %}
{% if item.active %}
- {{item.name}}
{% endif %}
{% endfor %}
```

## Ordem de avaliação

A lógica do modelo é processada na seguinte ordem:

1. **Lógica do modelo** — `{% if %}`, `{% for %}`, `{% set %}` e `{{variables}}` são avaliados primeiro
2. **Variáveis de prompt** — [[Variáveis#Variáveis de prompt|Variáveis de prompt]] como `{{"summarize this"|prompt}}` são enviadas ao Interpretador após a conclusão da lógica do modelo

Isso significa que você pode usar a lógica do modelo para construir prompts dinamicamente, mas os resultados dos prompts não estão disponíveis para uso em condicionais ou loops.
