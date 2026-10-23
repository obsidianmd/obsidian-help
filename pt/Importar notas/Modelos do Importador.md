---
permalink: import/templates
description: 'Personalize o nome da nota, as propriedades e o conteúdo criados pelo Importer.'
---
O [[Importador]] permite definir modelos que controlam como as suas notas são importadas de outras aplicações. Isto significa que pode modificar o título, propriedades e conteúdo das notas que importa.

## Editar o modelo de importação

Selecione **Edição** acima da pré-visualização para editar o modelo predefinido. Pode editar:

- O nome da nota apresentado como título em linha.
- Propriedades no início da nota.
- O conteúdo Markdown da nota.

Selecione **Guardar** para voltar à pré-visualização. O Importador memoriza um modelo em linha editado para futuras importações que utilizem o mesmo formato.

Alternativamente, pode carregar um modelo a partir de um ficheiro Markdown no cofre atual.

## Pré-visualizar resultados

A pré-visualização mostra até dez amostras dos dados que selecionou. Use os botões de seta para mover entre amostras. Alterações às definições de importação e ao modelo atualizam a pré-visualização antes de qualquer coisa ser adicionada ao seu cofre.

Alguns anexos, itens remotos e referências cruzadas entre notas não podem ser totalmente resolvidos até a importação ser executada. Nesses casos, a pré-visualização pode manter a ligação de origem ou mostrar um marcador de posição.

## Sintaxe de modelos

Os modelos do Importador utilizam uma sintaxe composta por variáveis, [[Filtros]] e [[Lógica]]. Utiliza a mesma sintaxe [Knap](https://github.com/obsidianmd/knap) que o [[Introdução ao Obsidian Web Clipper|Web Clipper]].

Insira variáveis com chavetas duplas, como `{{title}}`, `{{content}}` ou `{{date}}`. As variáveis podem ser usadas no nome da nota, propriedades e conteúdo.

Pode modificar variáveis usando [[Filtros]]. Por exemplo, para alterar o formato da data usando `{{date|date:"YYYY-MM-DD"}}`. Use [[Lógica]] para condicionais mais avançadas, ciclos e atribuição de variáveis.

## Variáveis

As seguintes variáveis estão disponíveis para uso em qualquer modelo do Importador:

| Variável         | Descrição                                                                                           |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| `{{body}}`       | Corpo Markdown sem propriedades (sem metadados iniciais).                                           |
| `{{content}}`    | Markdown completo antes do modelo selecionado ser aplicado.                                         |
| `{{ctime}}`      | Data de criação da origem como marca temporal ISO 8601; vazio quando indisponível.                   |
| `{{date}}`       | Data e hora atuais quando o modelo é processado, como marca temporal ISO 8601.                      |
| `{{importer}}`   | ID do Importador, como `keep`, `html` ou `notion-api`.                                              |
| `{{folder}}`     | Pasta pai final relativa ao cofre. Vazio quando a nota está na raiz do cofre.                       |
| `{{mtime}}`      | Data de modificação da origem como marca temporal ISO 8601; vazio quando indisponível.               |
| `{{noteName}}`   | Nome final resolvido da nota, após remover caracteres inválidos e adicionar sufixos para duplicados. |
| `{{path}}`       | Caminho final relativo ao cofre, incluindo a extensão `.md`.                                        |
| `{{properties}}` | Objeto contendo as propriedades dos metadados iniciais.                                             |
| `{{source}}`     | Objeto contendo propriedades geradas e valores específicos da origem.                               |
| `{{sourceId}}`   | Identificador estável da origem quando o importador fornece um; caso contrário, vazio.              |
| `{{time}}`       | Alcunha para `{{date}}`.                                                                            |
| `{{title}}`      | Título original da nota antes da sanitização e deduplicação.                                        |

## Valores de origem para propriedades

Para formatos de importação que suportam [[Propriedades]], os valores de origem também estão disponíveis como variáveis de nível superior por conveniência.

Se um valor de origem tiver o mesmo nome que uma variável partilhada, aceda-o através de `{{source}}`. Por exemplo, se a sua origem de importação tiver uma propriedade chamada `content`, está disponível como `{{source.content}}`, enquanto `{{content}}` permanece a variável predefinida do Importador.

Use notação de parênteses retos quando o nome de um campo contém espaços, pontuação ou outros caracteres especiais:

```twig
{{source["Project: status"]}}
```

## Exemplo de modelo

Aqui está um exemplo de um modelo usando variáveis e [[Filtros|filtros]]:

```twig
---
created: {{ctime | date:"YYYY-MM-DD"}}
modified: {{mtime | date:"YYYY-MM-DD"}}
source: {{importer}}
---
# {{title}}

{{body}}
```

Pode adicionar dados a uma nota condicionalmente usando [[Lógica]]:

```twig
{% if tags %}
## Etiquetas
{% for tag in tags %}
- {{tag}}
{% endfor %}
{% endif %}
```
