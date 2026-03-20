---
permalink: import/csv
---
O Obsidian permite importar dados de arquivos CSV usando o [[Importador|plugin Importador]] oficial. Isso é útil se você tem dados tabulares armazenados em aplicativos como Excel, Google Sheets, Numbers, Notion ou Airtable.

A importação de CSV gera arquivos Markdown para cada linha e um arquivo [[Introdução ao Bases|Base]] que exibe todos os arquivos importados como uma tabela.

Se você está importando notas de um aplicativo específico, pode ser útil primeiro revisar a lista de aplicativos suportados pelo [[Importador|plugin Importador]] para verificar se existe um conversor específico que preservará melhor os dados que você está migrando.

## Criar notas a partir de dados CSV no Obsidian

Você precisará do plugin oficial [[Importador]] do Obsidian, que pode ser [instalado aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Configurações]]**.
2. Vá em **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** usando a paleta de comandos ou o ícone no menu lateral.
5. Em **Formatar arquivo** escolha **CSV (.csv).**
6. Selecione a destinação do seu arquivo CSV.
7. Clique em **Importar** para configurar como os dados no seu arquivo CSV serão convertidos em notas com [[Propriedades]].
8. Clique em **Continuar** e aguarde até que a importação seja concluída.
9. Feito!

## Configurar como os campos CSV são importados

Na segunda etapa da importação de CSV, você pode escolher como os dados são importados usando um modelo.

Cada coluna no seu arquivo CSV recebe uma variável chamada `{{column_name}}` que representa o nome do cabeçalho no seu arquivo. Você pode usar essa variável para definir o título, a destinação, o conteúdo e as [[Propriedades|propriedades]] da nota.
