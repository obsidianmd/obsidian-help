---
permalink: web-clipper/templates
description: Aprenda a criar modelos que capturam e organizam automaticamente metadados de páginas web com o Web Clipper.
---
O [[Introdução ao Obsidian Web Clipper|Web Clipper]] permite que você crie modelos que capturam e organizam automaticamente metadados de páginas web. Modelos de exemplo estão disponíveis no [repositório clipper-templates](https://github.com/kepano/clipper-templates).

## Criar ou editar um modelo

Para **criar** um modelo, vá para as configurações do Web Clipper e clique no botão **Novo modelo** na barra lateral. Você também pode **duplicar** um modelo no menu de ações **Mais** no canto superior direito.

Para **editar** um modelo, escolha um modelo na barra lateral. Suas alterações serão salvas automaticamente.

Os modelos utilizam [[Variáveis]] e [[Filtros]], que permitem personalizar como o conteúdo será salvo.

## Importar e exportar modelos do Web Clipper

Para importar um modelo:

1. Abra a extensão e clique no ícone de engrenagem **[[Configurações]]**.
2. Vá para qualquer modelo na lista.
3. Clique em **Importar** no canto superior direito ou arraste e solte seu(s) arquivo(s) de modelo `.json` em qualquer lugar na área de modelos.

Para exportar um modelo, clique em **Exportar** no canto superior direito. Isso fará o download do arquivo `.json` do modelo. Você também pode copiar os dados do modelo para a área de transferência pelo menu **Mais**.

## Configurações de modelo

### Funcionamento

Defina como o conteúdo do Web Clipper será adicionado ao Obsidian:

- **Criar uma nova nota**
- **Adicionar a uma nota existente**, no topo ou no final
- **Adicionar à nota diária**, no topo ou no final (requer que o plugin de [[Notas diárias|notas diárias]] esteja ativo)

### Acionar automaticamente um modelo

Os acionadores de modelo permitem selecionar automaticamente um modelo com base na URL da página atual ou nos dados do [schema.org](https://schema.org/). Você pode definir várias regras para cada modelo, separadas por uma nova linha.

A primeira correspondência na sua lista de modelos determina qual modelo é usado. Você pode arrastar modelos para cima e para baixo nas configurações do Web Clipper para alterar a ordem em que os modelos são correspondidos.

#### Correspondência simples de URL

A correspondência simples aciona um modelo se a URL da página atual *começar com* o padrão fornecido. Por exemplo:

- `https://obsidian.md` corresponderá a qualquer URL que comece com este texto.

#### Correspondência por expressão regular

Você pode acionar modelos com base em padrões de URL mais complexos usando expressões regulares. Coloque seu padrão regex entre barras (`/`). Lembre-se de escapar caracteres especiais em padrões regex (como `.` e `/`) com uma barra invertida (`\`). Por exemplo:

- `/^https:\/\/www\.imdb\.com\/title\/tt\d+\/reference\/?$/` corresponderá a qualquer página de referência do IMDB.

#### Correspondência por Schema.org

Você pode acionar modelos com base nos dados do [schema.org](https://schema.org/) presentes na página. Use o prefixo `schema:` seguido pela chave do schema que deseja corresponder. Opcionalmente, você pode especificar um valor esperado. Por exemplo:

- `schema:@Recipe` corresponderá a páginas onde o tipo de schema é "Recipe".
- `schema:@Recipe.name` corresponderá a páginas onde `@Recipe.name` está presente.
- `schema:@Recipe.name=Cookie` corresponderá a páginas onde `@Recipe.name` é "Cookie".

Os valores do Schema.org também podem ser usados para [[Variáveis#Variáveis Schema.org|pré-preencher dados em modelos]].

### Contexto do interpretador

Quando o [[Interpretador|Interpretador]] está ativado, você pode usar [[Variáveis#Variáveis de prompt|variáveis de prompt]] para extrair conteúdo de páginas com linguagem natural. Para cada modelo, você pode definir o [[Interpretador#Contexto|contexto]] ao qual o Interpretador tem acesso.
