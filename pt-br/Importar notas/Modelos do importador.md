---
permalink: import/templates
description: 'Personalize o nome da nota, as propriedades e o conteúdo criados pelo Importador.'
---
O [[Importador]] permite definir modelos que controlam como suas notas são importadas de outros aplicativos. Isso significa que você pode modificar o título, as propriedades e o conteúdo das notas que importa.

## Editar o modelo de importação

Selecione **Editar** acima da pré-visualização para editar o modelo padrão. Você pode editar:

- O nome da nota mostrado como título embutido.
- Propriedades no início da nota.
- O conteúdo Markdown da nota.

Selecione **Salvar** para retornar à pré-visualização. O Importador lembra um modelo embutido editado para futuras importações que usem o mesmo formato.

Alternativamente, você pode carregar um modelo a partir de um arquivo Markdown no cofre atual.

## Pré-visualizar resultados

A pré-visualização mostra até dez amostras dos dados que você selecionou. Use os botões de seta para navegar entre as amostras. Alterações nas configurações de importação e no modelo atualizam a pré-visualização antes que qualquer coisa seja adicionada ao seu cofre.

Alguns anexos, itens remotos e referências cruzadas entre notas não podem ser totalmente resolvidos até que a importação seja executada. Nesses casos, a pré-visualização pode manter o link de origem ou mostrar um marcador de posição.

## Sintaxe do modelo

Os modelos do Importador usam uma sintaxe que consiste em variáveis, [[Filtros]] e [[Lógica]]. Utiliza a mesma sintaxe [Knap](https://github.com/obsidianmd/knap) do [[Introdução ao Obsidian Web Clipper|Web Clipper]].

Insira variáveis com chaves duplas, como `{{title}}`, `{{content}}` ou `{{date}}`. As variáveis podem ser usadas no nome da nota, nas propriedades e no conteúdo.

Você pode modificar variáveis usando [[Filtros]]. Por exemplo, para alterar o formato de data usando `{{date|date:"YYYY-MM-DD"}}`. Use [[Lógica]] para condicionais mais avançadas, loops e atribuição de variáveis.

## Variáveis

As seguintes variáveis estão disponíveis para uso em qualquer modelo do Importador:

| Variável         | Descrição                                                                                                      |
| ---------------- | -------------------------------------------------------------------------------------------------------------- |
| `{{body}}`       | Corpo Markdown sem propriedades (sem frontmatter).                                                             |
| `{{content}}`    | Markdown completo antes do modelo selecionado ser aplicado.                                                    |
| `{{ctime}}`      | Hora de criação na origem como timestamp ISO 8601; vazio quando indisponível.                                  |
| `{{date}}`       | Data e hora atuais quando o modelo é renderizado, como timestamp ISO 8601.                                     |
| `{{importer}}`   | ID do Importador, como `keep`, `html` ou `notion-api`.                                                         |
| `{{folder}}`     | Pasta pai final relativa ao cofre. Vazio quando a nota está na raiz do cofre.                                  |
| `{{mtime}}`      | Hora de modificação na origem como timestamp ISO 8601; vazio quando indisponível.                              |
| `{{noteName}}`   | Nome final resolvido da nota, após remover caracteres inválidos e adicionar sufixos para duplicatas.           |
| `{{path}}`       | Caminho final relativo ao cofre, incluindo a extensão `.md`.                                                   |
| `{{properties}}` | Objeto contendo as propriedades do frontmatter.                                                                |
| `{{source}}`     | Objeto contendo propriedades geradas e valores específicos da origem.                                          |
| `{{sourceId}}`   | Identificador estável da origem quando o importador fornece um; caso contrário, vazio.                         |
| `{{time}}`       | Alias para `{{date}}`.                                                                                         |
| `{{title}}`      | Título original da nota antes da sanitização e deduplicação.                                                   |

## Valores de origem para propriedades

Para formatos de importação que suportam [[Propriedades]], os valores de origem também estão disponíveis como variáveis de nível superior por conveniência.

Se um valor de origem tiver o mesmo nome que uma variável compartilhada, acesse-o através de `{{source}}`. Por exemplo, se sua origem de importação tiver uma propriedade chamada `content`, ela estará disponível como `{{source.content}}`, enquanto `{{content}}` permanece a variável padrão do Importador.

Use notação de colchetes quando o nome de um campo contiver espaços, pontuação ou outros caracteres especiais:

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

Você pode adicionar dados em uma nota condicionalmente usando [[Lógica]]:

```twig
{% if tags %}
## Tags
{% for tag in tags %}
- {{tag}}
{% endfor %}
{% endif %}
```
