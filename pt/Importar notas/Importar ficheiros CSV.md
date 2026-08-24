---
permalink: import/csv
cssclasses:
  - soft-embed
---
O Obsidian permite-lhe importar dados de ficheiros CSV usando o [[Importador|plugin Importador]] oficial. Isto é útil se tiver dados tabulares armazenados em aplicações como Excel, Google Sheets, Numbers, Notion ou Airtable.

A importação de CSV gera ficheiros Markdown para cada linha e um ficheiro [[Introdução ao Bases|Base]] que apresenta todos os ficheiros importados como uma tabela.

Se estiver a importar notas de uma aplicação específica, poderá querer primeiro rever a lista de aplicações suportadas pelo [[Importador|plugin Importador]] para verificar se existe um conversor específico que preserve melhor os dados que está a migrar.

## Criar notas a partir de dados CSV no Obsidian

Vai precisar do plugin oficial [[Importador]] do Obsidian, que pode [instalar aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Definições]]**.
2. Vá a **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** usando a paleta de comandos ou o ícone na barra de ferramentas.
5. Em **Formatação do ficheiro** escolha **CSV (.csv).**
6. Selecione a localização do seu ficheiro CSV.
7. Selecione **Importar** para configurar como os dados no seu ficheiro CSV serão convertidos em notas com [[Propriedades]].
8. Selecione **Continuar** para rever o modelo gerado e pré-visualizar exemplos das suas linhas.
9. Selecione **Importar** e aguarde até que a importação termine.

## Configurar como os campos CSV são importados

No passo de configuração de campos, pode escolher como os dados são importados. O Importador gera um modelo a partir dos cabeçalhos do CSV, usa a primeira coluna para o nome inicial da nota e cria uma propriedade para cada coluna.

## Modelos

Use [[Modelos do Importador|modelos do Importador]] para configurar totalmente como os seus dados são importados.

Cada coluna do CSV está disponível usando o seu cabeçalho. Se uma coluna não tiver cabeçalho, o Importador usa o nome de coluna gerado.

Use a notação de parênteses retos para que espaços e pontuação sejam tratados de forma segura:

```liquid
{{source["Project name"]}}
{{source["Price ($)"]|yaml}}
```

![[Modelos do Importador#Variables]]
