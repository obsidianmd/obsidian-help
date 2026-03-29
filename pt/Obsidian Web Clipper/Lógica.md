---
permalink: web-clipper/logic
description: 'Use condicionais, loops e atribuição de variáveis nos modelos do Web Clipper.'
---
O [[Introdução ao Obsidian Web Clipper|Web Clipper]] suporta lógica de modelos para condicionais, ciclos e atribuição de variáveis. Esta sintaxe é inspirada nas linguagens de modelos [Twig](https://twig.symfony.com/) e [Liquid](https://shopify.github.io/liquid/).


> [!warning] Requer a versão mais recente
> As funcionalidades de lógica requerem o Obsidian Web Clipper 1.0.0, que ainda não foi aprovado em todas as lojas de extensões.

## Condicionais

Use `{% if %}` para incluir conteúdo condicionalmente com base em variáveis ou expressões.

```twig
{% if author %}
Author: {{author}}
{% endif %}
```

Use `{% else %}` para fornecer conteúdo alternativo e `{% elseif %}` para encadear múltiplas condições:

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
| `contains` | Verificar se uma string contém uma substring, ou se um array contém um valor |

Exemplos:
- `{% if title == "Home" %}` — igualdade de strings
- `{% if price >= 100 %}` — comparação numérica
- `{% if title contains "Review" %}` — verificação de substring
- `{% if tags contains "important" %}` — pertença a array

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

### Veracidade

Quando uma variável é usada sem um operador de comparação, é avaliada quanto à sua "veracidade":

- `false`, `null`, `undefined`, string vazia `""` e `0` são considerados **falsos**.
- Arrays vazios `[]` são considerados **falsos**.
- Tudo o resto é **verdadeiro**.

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

As variáveis podem ser definidas como:
- Outras variáveis: `{% set name = author %}`
- Literais: `{% set count = 5 %}` ou `{% set label = "Draft" %}`
- Expressões com filtros: `{% set excerpt = content|truncate:100 %}`
- Resultados de seletores: `{% set comments = selector:.comment %}`

As variáveis definidas com `{% set %}` podem ser usadas na lógica de modelos subsequente e na saída `{{variable}}`.

## Alternativas

Use o operador `??` para fornecer valores alternativos quando uma variável está vazia ou indefinida:

```twig
{{title ?? "Untitled"}}
```

Se `title` estiver vazio, indefinido ou falso, o valor alternativo `"Untitled"` será usado em vez disso.

Este é um atalho para a instrução `if` equivalente:

```twig
{% if title %}{{title}}{% else %}Untitled{% endif %}
```

### Encadear alternativas

Pode encadear múltiplas alternativas:

```twig
{{title ?? headline ?? "No title"}}
```

Isto usará `title` se disponível, caso contrário `headline`, caso contrário a string `"No title"`.

### Com filtros

Os filtros têm maior prioridade que `??`, pelo que os filtros são aplicados antes da verificação de alternativa:

```twig
{{title|upper ?? "UNTITLED"}}
```

Isto aplica `upper` a `title` primeiro e depois recorre a `"UNTITLED"` se o resultado estiver vazio. Para aplicar filtros ao valor alternativo, use parênteses ou expressões separadas:

```twig
{{title ?? "Untitled"|lower}}
```

Isto usará `title` se disponível, caso contrário aplica `lower` à alternativa, resultando em `"untitled"`.

## Ciclos

Use `{% for %}` para iterar sobre arrays:

```twig
{% for item in schema:author %}
- {{item.name}}
{% endfor %}
```

### Fontes de ciclos

Pode iterar sobre:
- Arrays de schema: `{% for item in schema:author %}`
- Resultados de seletores: `{% for comment in selector:.comment %}`
- Variáveis definidas anteriormente: `{% set items = selector:.item %}{% for item in items %}`

### Variáveis de ciclo

Dentro de um ciclo, tem acesso a um objeto `loop` com as seguintes propriedades:

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

Para compatibilidade retroativa, também pode usar `item_index` (onde `item` é o nome da sua variável iteradora) para obter a posição indexada a partir de 0:

```twig
{% for tag in tags %}
{{tag_index}}. {{tag}}
{% endfor %}
```

### Aceder a itens de array por índice

Use notação de parênteses retos para aceder a elementos de array por índice:

```twig
{{items[0]}}
{{items[loop.index0]}}
```

Isto é útil quando precisa de aceder a itens de múltiplos arrays em paralelo:

```twig
{% set transcripts = selector:.transcript-text %}
{% set timestamps = selector:.timestamp %}

{% for line in transcripts %}
{{timestamps[loop.index0]}} - {{line}}
{% endfor %}
```

A notação de parênteses retos também funciona com propriedades de objetos:

```twig
{{user["name"]}}
{{data["my-key"]}}
```

### Ciclos aninhados

Os ciclos podem ser aninhados para estruturas de dados complexas:

```twig
{% for section in sections %}
## {{section.title}}
{% for item in section.items %}
- {{item}}
{% endfor %}
{% endfor %}
```

## Combinar lógica

Condicionais e ciclos podem ser combinados:

```twig
{% for item in items %}
{% if item.active %}
- {{item.name}}
{% endif %}
{% endfor %}
```

## Ordem de avaliação

A lógica de modelos é processada na seguinte ordem:

1. **Lógica de modelo** — `{% if %}`, `{% for %}`, `{% set %}` e `{{variables}}` são avaliados primeiro
2. **Variáveis de prompt** — [[Variáveis#Variáveis de prompt|Variáveis de prompt]] como `{{"summarize this"|prompt}}` são enviadas para o Interpretador após a lógica de modelo estar completa

Isto significa que pode usar a lógica de modelo para construir prompts dinamicamente, mas os resultados dos prompts não estão disponíveis para uso em condicionais ou ciclos.
